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

async function runModel(model, prompt, opts = {}) {
  const modelId = MODEL_IDS[model] || model;
  const timeout = opts.timeout || 120_000;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

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
        max_tokens: 8192,
        ...(opts.temperature !== undefined && { temperature: opts.temperature }),
        ...(opts.system && { system: opts.system }),
        messages: [{ role: 'user', content: prompt }],
      }),
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!response.ok) {
      const errorText = await response.text();
      return { ok: false, text: null, cost: 0, error: `API ${response.status}: ${errorText}` };
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || '';
    const inputTokens = data.usage?.input_tokens || 0;
    const outputTokens = data.usage?.output_tokens || 0;
    const pricing = MODEL_PRICING[modelId];
    const cost = (inputTokens * pricing.input + outputTokens * pricing.output) / 1_000_000;

    return { ok: true, text, cost };
  } catch (err) {
    clearTimeout(timer);
    if (err.name === 'AbortError') {
      return { ok: false, text: null, cost: 0, error: `Timed out after ${timeout / 1000}s` };
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

module.exports = { parseModelJSON, runModel, runModelsConcurrently, collectBatchResults };
