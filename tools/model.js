/**
 * model.js — Anthropic API client for the index generation pipeline.
 *
 * Exports:
 *   parseModelJSON(text)                    — parse JSON from model response
 *   runModel(model, prompt, opts)           — single API call
 *   runModelsConcurrently(taskFns, max)     — bounded-concurrency runner
 *   collectBatchResults(results)            — aggregate costs, throw on failures
 */

// Map short model names to full Anthropic model IDs
const MODEL_IDS = {
  haiku: 'claude-haiku-4-5-20251001',
  sonnet: 'claude-sonnet-4-6',
};

// Per-million-token pricing for cost estimation
const MODEL_PRICING = {
  'claude-haiku-4-5-20251001': { input: 0.80, output: 4.00 },
  'claude-sonnet-4-6': { input: 3.00, output: 15.00 },
};

/**
 * Parse JSON from model response text, with code-fence fallback.
 * Returns the parsed value, or undefined if parsing fails.
 */
function parseModelJSON(text) {
  // Strategy 1: direct parse (text is pure JSON)
  try {
    return JSON.parse(text);
  } catch {}

  // Strategy 2: extract from markdown code fences
  const match = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (match) {
    try { return JSON.parse(match[1].trim()); } catch {}
  }

  // Strategy 3: find first [ or { and parse to last matching ] or }
  // Handles preamble/postscript text around JSON
  const firstBracket = text.search(/[\[{]/);
  if (firstBracket !== -1) {
    const opener = text[firstBracket];
    const closer = opener === '[' ? ']' : '}';
    const lastCloser = text.lastIndexOf(closer);
    if (lastCloser > firstBracket) {
      try { return JSON.parse(text.slice(firstBracket, lastCloser + 1)); } catch {}
    }
  }

  return undefined;
}

function previewText(text, maxLen = 200) {
  if (!text) return '(empty)';
  if (text.length <= maxLen) return text;
  const half = Math.floor(maxLen / 2);
  return text.slice(0, half) + ' [...] ' + text.slice(-half);
}

async function runModel(model, prompt, opts = {}) {
  const modelId = MODEL_IDS[model] || model;
  // opts.timeout is an idle-between-chunks timeout (reset on each SSE chunk), not an absolute request deadline.
  const idleTimeout = opts.timeout || 120_000;
  const controller = new AbortController();
  let timer = setTimeout(() => controller.abort(), idleTimeout);
  const bumpIdle = () => {
    clearTimeout(timer);
    timer = setTimeout(() => controller.abort(), idleTimeout);
  };

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
      },
      body: JSON.stringify({
        model: modelId,
        max_tokens: opts.max_tokens || 16384,
        stream: true,
        ...(opts.temperature !== undefined && { temperature: opts.temperature }),
        ...(opts.system && { system: opts.system }),
        messages: [{ role: 'user', content: prompt }],
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorText = await response.text();
      clearTimeout(timer);
      return { ok: false, text: null, cost: 0, error: `API ${response.status}: ${errorText}` };
    }

    const decoder = new TextDecoder();
    let buffer = '';
    let text = '';
    let inputTokens = 0;
    let outputTokens = 0;
    let stopReason = null;
    let streamError = null;

    for await (const chunk of response.body) {
      bumpIdle();
      buffer += decoder.decode(chunk, { stream: true });
      let idx;
      while ((idx = buffer.indexOf('\n\n')) !== -1) {
        const eventBlock = buffer.slice(0, idx);
        buffer = buffer.slice(idx + 2);
        const dataLine = eventBlock.split('\n').find((l) => l.startsWith('data: '));
        if (!dataLine) continue;
        let payload;
        try { payload = JSON.parse(dataLine.slice(6)); } catch { continue; }
        if (payload.type === 'message_start') {
          inputTokens = payload.message?.usage?.input_tokens || 0;
          outputTokens = payload.message?.usage?.output_tokens || 0;
        } else if (payload.type === 'content_block_delta' && payload.delta?.type === 'text_delta') {
          text += payload.delta.text;
        } else if (payload.type === 'message_delta') {
          if (payload.delta?.stop_reason) stopReason = payload.delta.stop_reason;
          if (payload.usage?.output_tokens != null) outputTokens = payload.usage.output_tokens;
        } else if (payload.type === 'error') {
          streamError = payload.error?.message || 'stream error';
        }
      }
    }
    clearTimeout(timer);

    const pricing = MODEL_PRICING[modelId];
    const cost = (inputTokens * pricing.input + outputTokens * pricing.output) / 1_000_000;

    if (streamError) return { ok: false, text: null, cost, error: streamError };
    if (stopReason === 'max_tokens') {
      return { ok: false, text: null, cost, error: 'Response truncated (max_tokens limit reached)' };
    }
    return { ok: true, text, cost };
  } catch (err) {
    clearTimeout(timer);
    if (err.name === 'AbortError') {
      return { ok: false, text: null, cost: 0, error: `Timed out after ${idleTimeout / 1000}s` };
    }
    return { ok: false, text: null, cost: 0, error: err.message };
  }
}

async function runModelsConcurrently(taskFns, maxConcurrent = 10) {
  const executing = new Set();
  const results = [];
  for (const fn of taskFns) {
    const p = fn().then((r) => { executing.delete(p); return r; });
    executing.add(p);
    results.push(p);
    if (executing.size >= maxConcurrent) await Promise.race(executing);
  }
  return Promise.allSettled(results);
}

/**
 * Collect costs and check for failures from runModelsConcurrently results.
 */
function collectBatchResults(results) {
  let cost = 0;
  const failed = [];
  for (const r of results) {
    const v = r.status === 'fulfilled' ? r.value : { ok: false, cost: 0, error: r.reason };
    cost += v.cost;
    if (!v.ok) failed.push(v.error);
  }
  if (failed.length > 0) {
    throw new Error(`${failed.length} batch(es) failed:\n${failed.join('\n')}`);
  }
  return cost;
}

module.exports = { parseModelJSON, previewText, runModel, runModelsConcurrently, collectBatchResults };
