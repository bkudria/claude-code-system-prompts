#!/usr/bin/env node
/**
 * orchestrate-index.js — Deterministic orchestration for INDEX.md generation
 *
 * Replaces the LLM-based orchestrator with a Node.js script that invokes
 * claude CLI agents as subprocesses. The script handles all workflow mechanics
 * (batching, polling, validation) deterministically, only invoking LLM agents
 * for the genuinely creative tasks: summarization, clustering, cluster
 * summarization, and root summary.
 *
 * Usage: node tools/orchestrate-index.js [options]  (use --help for details)
 */

const fs = require('fs');
const path = require('path');
const { validateSummaries, validateClusters, validateClusterSummaries, validateHierarchy } = require('./validate');
const { generateIndex } = require('./generate-index');
const { buildInlinedBatchPrompt, buildInlinedClusterPrompt, buildInlinedClusterSummarizerPrompt, buildRootSummaryPrompt, buildOrganizeHierarchyPrompt } = require('./prompt-builders');
const { parseModelJSON, runModel, runModelsConcurrently, collectBatchResults } = require('./model');

// ---------------------------------------------------------------------------
// Hierarchy pruning
// ---------------------------------------------------------------------------

function isGroup(node) {
  return !!node.children && node.children.length > 0;
}

// Flatten singleton parents: if a group has exactly 1 child that is also a group, replace parent with child
function flattenSingletonParents(node, stats) {
  if (!node.children) return node;
  node.children = node.children.map(c => flattenSingletonParents(c, stats));
  if (node.children.length === 1 && isGroup(node.children[0])) {
    stats.flattened++;
    return node.children[0];
  }
  return node;
}

// Flatten parent-child name collisions: if a group has a child group with the same name, promote the child's children
function flattenNameCollisions(node, stats) {
  if (!node.children) return;
  for (const child of node.children) {
    flattenNameCollisions(child, stats);
  }
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (isGroup(child) && child.name === node.name) {
      node.children.splice(i, 1, ...child.children);
      stats.flattened++;
      i--;
    }
  }
}

function pruneHierarchy(tree) {
  const stats = { flattened: 0 };
  const flatResult = flattenSingletonParents(tree, stats);
  if (flatResult !== tree) {
    Object.assign(tree, flatResult);
  }
  flattenNameCollisions(tree, stats);
  return { tree, flattened: stats.flattened };
}

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const DEFAULTS = {
  sourceDir: 'system-prompts/',
  scratchDir: '.generate-index-scratch/',
  outputFile: 'INDEX.md',
  batchSize: 0,            // 0 = auto (totalFiles / targetBatches)
  targetBatches: 7,        // target number of parallel summarize batches
  clusterBatchSize: 5,
  maxConcurrent: 10,
  summarizerModel: 'haiku',   // 'haiku' or 'sonnet'
};

function parseArgs() {
  const args = process.argv.slice(2);
  const config = { ...DEFAULTS };
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--source-dir': config.sourceDir = args[++i]; break;
      case '--scratch-dir': config.scratchDir = args[++i]; break;
      case '--output': config.outputFile = args[++i]; break;
      case '--batch-size': config.batchSize = parseInt(args[++i], 10); break;
      case '--cluster-batch-size': config.clusterBatchSize = parseInt(args[++i], 10); break;
      case '--max-concurrent': config.maxConcurrent = parseInt(args[++i], 10); break;
      case '--target-batches': config.targetBatches = parseInt(args[++i], 10); break;
      case '--summarizer-model': config.summarizerModel = args[++i]; break;
      case '--help': printUsage(); process.exit(0);
      default:
        console.error(`Unknown option: ${args[i]}`);
        process.exit(1);
    }
  }
  // Resolve paths relative to cwd
  config.sourceDir = path.resolve(config.sourceDir);
  config.scratchDir = path.resolve(config.scratchDir);
  config.outputFile = path.resolve(config.outputFile);
  return config;
}

function printUsage() {
  console.error(`Usage: node tools/orchestrate-index.js [options]

Options:
  --source-dir <dir>         Source directory (default: system-prompts/)
  --scratch-dir <dir>        Scratch directory (default: .generate-index-scratch/)
  --output <file>            Output file (default: INDEX.md)
  --batch-size <n>           Files per summarize batch (default: auto)
  --target-batches <n>       Target number of summarize batches (default: 7)
  --cluster-batch-size <n>   Clusters per summarizer batch (default: 5)
  --summarizer-model <m>     Force model for cluster summarizers (haiku|sonnet, default: auto)
  --max-concurrent <n>       Max concurrent claude processes (default: 10)
  --help                     Show this help`);
}

// ---------------------------------------------------------------------------
// Logging
// ---------------------------------------------------------------------------

function log(level, msg) {
  const ts = new Date().toISOString().slice(11, 19);
  const prefix = { info: 'INFO', progress: ' .. ', error: 'ERR!', warn: 'WARN' }[level] || level;
  process.stderr.write(`[${ts}] ${prefix}  ${msg}\n`);
}

function phaseResult(cost, startTime, batchCount) {
  return {
    cost: Math.round(cost * 10000) / 10000,
    duration_seconds: Math.round((Date.now() - startTime) / 1000),
    batches: batchCount,
  };
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------


function extractMetadata(sourceDir, outputPath) {
  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.md')).sort();
  if (files.length === 0) {
    throw new Error(`No .md files found in ${sourceDir}`);
  }
  const results = [];
  let warnings = 0;
  for (const file of files) {
    const filePath = path.join(sourceDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const commentMatch = content.match(/<!--([\s\S]*?)-->/);
    if (!commentMatch) {
      warnings++;
      const readableName = file.replace(/\.md$/, '').replace(/[-_]/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
      results.push({ file, path: path.relative(process.cwd(), path.join(sourceDir, file)), name: readableName, description: '' });
      continue;
    }
    const comment = commentMatch[1];
    const nameMatch = comment.match(/^name:\s*'?(.+?)'?\s*$/m);
    const descMatch = comment.match(/^description:\s*(.+?)\s*$/m);
    results.push({
      file,
      path: path.relative(process.cwd(), path.join(sourceDir, file)),
      name: nameMatch ? nameMatch[1] : file,
      description: descMatch ? descMatch[1] : '',
    });
  }
  fs.writeFileSync(path.resolve(outputPath), JSON.stringify(results, null, 2));
  log('info', `Extracted metadata from ${results.length} files (${warnings} warnings)`);
  return results;
}



function resolveHierarchy(hierarchyData, clustersData, leafSummaries) {
  // Build cluster map from enriched clusters data
  const clusterMap = new Map();
  for (const c of clustersData.clusters) clusterMap.set(c.id, c);

  // Build leaf summary map from all-summaries array
  const leafMap = new Map();
  for (const s of leafSummaries) {
    leafMap.set(s.id, s);
  }

  function resolveLeaf(memberId) {
    const leafData = leafMap.get(memberId);
    return {
      name: leafData.name,
      summary: leafData.summary,
      file: leafData.path,
    };
  }

  function resolveCluster(clusterId) {
    const cluster = clusterMap.get(clusterId);
    return {
      name: cluster.clusterSummaryName,
      summary: cluster.clusterSummary,
      children: cluster.members.map((m) => resolveLeaf(m)),
    };
  }

  function resolveNode(child) {
    if (typeof child === 'string') return resolveCluster(child);
    return {
      name: child.name,
      summary: child.description,
      children: child.children.map((c) => resolveNode(c)),
    };
  }

  return {
    name: 'Claude Code System Prompts',
    summary: null,
    children: hierarchyData.hierarchy.map((g) => resolveNode(g)),
  };
}

// ---------------------------------------------------------------------------
// Phase 2: Cluster + Summarize
// ---------------------------------------------------------------------------

async function clusterAndSummarize(allSummaries, config, clustersPath) {
  // ── A. Cluster ──
  const clusterStart = Date.now();
  let clusterCost = 0;

  const itemCount = allSummaries.length;
  const clusterModel = 'sonnet';

  log('info', `Cluster: Clustering ${itemCount} items (model: ${clusterModel})...`);

  const allSummariesJson = JSON.stringify(allSummaries, null, 2);
  const MAX_CLUSTER_ATTEMPTS = 5;
  let clustersData;
  let lastFeedback = null;

  for (let attempt = 1; attempt <= MAX_CLUSTER_ATTEMPTS; attempt++) {
    const { system, user } = buildInlinedClusterPrompt(allSummariesJson, itemCount, lastFeedback);
    const clusterResult = await runModel(clusterModel, user, {
      timeout: 300_000, temperature: attempt > 1 ? 0.3 : 0, system,
    });
    clusterCost += clusterResult.cost;

    if (!clusterResult.ok || !clusterResult.text) {
      log('warn', `Cluster attempt ${attempt}/${MAX_CLUSTER_ATTEMPTS} failed: ${clusterResult.error || 'empty result'}`);
      continue;
    }
    const parsed = parseModelJSON(clusterResult.text.trim());
    if (!parsed || !parsed.clusters) {
      log('warn', `Cluster attempt ${attempt}/${MAX_CLUSTER_ATTEMPTS} failed: could not parse JSON`);
      continue;
    }

    // De-duplicate: if an item appears in multiple clusters, keep it only in the first
    const seen = new Set();
    for (const cluster of parsed.clusters) {
      cluster.members = cluster.members.filter((m) => {
        if (seen.has(m)) return false;
        seen.add(m);
        return true;
      });
    }

    fs.writeFileSync(clustersPath, JSON.stringify(parsed, null, 2));
    const cv = validateClusters({ clusters: parsed, summaries: allSummaries });
    if (cv.passed) {
      clustersData = parsed;
      break;
    }

    lastFeedback = cv.errors.join('\n');
    log('warn', `Cluster attempt ${attempt}/${MAX_CLUSTER_ATTEMPTS}: ${cv.errors.join('; ')}`);
  }

  if (!clustersData) {
    throw new Error(`Clustering failed after ${MAX_CLUSTER_ATTEMPTS} attempts`);
  }

  const clusterCount = clustersData.clusters.length;
  log('info', `Cluster: ${clusterCount} clusters identified. Validation passed.`);

  const clusterPhase = phaseResult(clusterCost, clusterStart, 1);

  // ── B. Summarize Clusters ──
  const sumStart = Date.now();
  let sumCost = 0;

  const leafSummaryMap = new Map();
  for (const s of allSummaries) {
    leafSummaryMap.set(s.id, s);
  }

  // Batch all clusters for summarization
  const batches = [];
  for (let i = 0; i < clustersData.clusters.length; i += config.clusterBatchSize) {
    batches.push(clustersData.clusters.slice(i, i + config.clusterBatchSize));
  }

  log('info', `Cluster: ${batches.length} cluster-summarizer batches (model: ${config.summarizerModel}, ${clusterCount} total)`);

  const allClusterSummaries = [];
  const csTaskFns = batches.map((batchData, i) => async () => {
    const { system, user } = buildInlinedClusterSummarizerPrompt(batchData, leafSummaryMap);
    const result = await runModel(config.summarizerModel, user, { timeout: 120_000, temperature: 0.3, system });
    if (!result.ok || !result.text) {
      return { ok: false, cost: result.cost, error: `cluster batch ${i + 1}: ${result.error || 'empty result'}` };
    }
    const parsed = parseModelJSON(result.text.trim());
    if (!Array.isArray(parsed)) {
      return { ok: false, cost: result.cost, error: `cluster batch ${i + 1}: failed to parse JSON array` };
    }
    for (const cs of parsed) {
      if (cs.id && cs.name && cs.summary && cs.keywords) allClusterSummaries.push(cs);
    }
    return { ok: true, cost: result.cost };
  });

  const csResults = await runModelsConcurrently(csTaskFns, config.maxConcurrent);
  sumCost += collectBatchResults(csResults);

  const clusterSummaryMap = new Map(allClusterSummaries.map(cs => [cs.id, cs]));

  // Embed cluster summaries into clustersData
  for (const cluster of clustersData.clusters) {
    const cs = clusterSummaryMap.get(cluster.id);
    if (cs) {
      cluster.clusterSummary = cs.summary;
      cluster.clusterSummaryName = cs.name;
      cluster.clusterSummaryKeywords = cs.keywords;
    }
  }
  // Write for debugging
  fs.writeFileSync(clustersPath, JSON.stringify(clustersData, null, 2));

  const csv = validateClusterSummaries({ clusters: clustersData });
  if (!csv.passed) throw new Error(`Cluster summary validation failed:\n${csv.errors.join('\n')}`);

  log('info', `Cluster complete. Validation passed.`);
  const clusterSummarizePhase = phaseResult(sumCost, sumStart, batches.length);

  return { clustersData, clusterPhase, clusterSummarizePhase };
}

// ---------------------------------------------------------------------------
// Main orchestration
// ---------------------------------------------------------------------------

async function main() {
  const config = parseArgs();

  // Validate prerequisites
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY environment variable is required');
  }

  if (!fs.existsSync(config.sourceDir)) {
    throw new Error(`Source directory not found: ${config.sourceDir}`);
  }

  // ── Phase 0: Init (setup + metadata) ────────
  if (fs.existsSync(config.scratchDir)) {
    fs.rmSync(config.scratchDir, { recursive: true, force: true });
  }
  fs.mkdirSync(config.scratchDir, { recursive: true });
  log('info', 'Setup complete');

  const metadataPath = path.join(config.scratchDir, 'metadata.json');
  log('info', 'Extracting metadata...');
  const allMetadata = extractMetadata(config.sourceDir, metadataPath);
  const totalFiles = allMetadata.length;
  log('info', `Found ${totalFiles} source files`);

  // Compute effective batch size if auto
  if (config.batchSize === 0) {
    config.batchSize = Math.min(25, Math.max(5, Math.ceil(totalFiles / config.targetBatches)));
  }
  log('info', `Config: ${totalFiles} files, batch size ${config.batchSize} (~${Math.ceil(totalFiles / config.batchSize)} batches)`);

  // ── Phase 1: Summarize ──────────────────────
  const allSummariesPath = path.join(config.scratchDir, 'all-summaries.json');
  let allSummaries, summarizePhase;
  {
    const phaseStart = Date.now();

    // Compute batches from metadata
    const filePaths = allMetadata.map(m => path.resolve(m.path));
    const batches = [];
    for (let i = 0; i < filePaths.length; i += config.batchSize) {
      batches.push(filePaths.slice(i, i + config.batchSize));
    }

    log('info', `Summarize: ${totalFiles} files in ${batches.length} batches (model: ${config.summarizerModel})...`);

    const collectedSummaries = [];
    const taskFns = batches.map((batchData, i) => async () => {
      const { system, user } = buildInlinedBatchPrompt(batchData, allMetadata);
      const result = await runModel(config.summarizerModel, user, { timeout: 120_000, temperature: 0.3, system });
      if (!result.ok || !result.text) {
        return { ok: false, cost: result.cost, error: `batch ${i + 1}: ${result.error || 'empty result'}` };
      }
      const parsed = parseModelJSON(result.text.trim());
      if (!Array.isArray(parsed)) {
        return { ok: false, cost: result.cost, error: `batch ${i + 1}: failed to parse JSON array` };
      }
      for (const s of parsed) {
        if (s.file && s.summary) {
          s.id = s.file.replace(/\.md$/, '');
          collectedSummaries.push(s);
        }
      }
      return { ok: true, cost: result.cost };
    });

    const results = await runModelsConcurrently(taskFns, config.maxConcurrent);
    const batchCost = collectBatchResults(results);

    allSummaries = collectedSummaries;

    // Write for debugging
    fs.writeFileSync(allSummariesPath, JSON.stringify(allSummaries, null, 2));

    const sv = validateSummaries({ summaries: allSummaries });
    if (!sv.passed) throw new Error(`Summarize validation failed:\n${sv.errors.join('\n')}`);

    if (allSummaries.length !== totalFiles) {
      throw new Error(`Summarize coverage mismatch: expected ${totalFiles} summaries, got ${allSummaries.length}`);
    }
    log('info', `Summarize complete. ${allSummaries.length} summaries written. Validation passed.`);

    summarizePhase = phaseResult(batchCost, phaseStart, batches.length);
  }

  // ── Phase 2: Cluster + Summarize ────────────
  const clustersPath = path.join(config.scratchDir, 'clusters.json');
  const { clustersData, clusterPhase, clusterSummarizePhase } = await clusterAndSummarize(allSummaries, config, clustersPath);

  // ── Phase 3: Organize (hierarchy + prune) ───
  const hierarchyRawPath = path.join(config.scratchDir, 'hierarchy-raw.json');
  const hierarchyPath = path.join(config.scratchDir, 'hierarchy.json');
  let prunedTree, hierarchyPhase, pruningStats;
  {
    const hierStart = Date.now();
    let hierCost = 0;

    log('info', 'Organizing clusters into hierarchy...');
    let lastFeedback = null;
    let rawTree;
    const expectedIds = new Set(clustersData.clusters.map((c) => c.id));
    const clusterSizes = new Map(clustersData.clusters.map((c) => [c.id, c.members.length]));
    const MAX_HIERARCHY_ATTEMPTS = 3;
    for (let attempt = 1; attempt <= MAX_HIERARCHY_ATTEMPTS; attempt++) {
      const { system: hierSystem, user: hierUser } = buildOrganizeHierarchyPrompt(clustersData, lastFeedback);
      const result = await runModel('sonnet', hierUser, {
        timeout: 300_000, temperature: attempt > 1 ? 0.3 : 0, system: hierSystem,
      });
      hierCost += result.cost;

      if (!result.ok || !result.text) {
        log('warn', `Hierarchy attempt ${attempt}/${MAX_HIERARCHY_ATTEMPTS} failed: ${result.error || 'empty result'}`);
        continue;
      }
      const hierarchyData = parseModelJSON(result.text.trim());
      if (!hierarchyData || !Array.isArray(hierarchyData.hierarchy)) {
        log('warn', `Hierarchy attempt ${attempt}/${MAX_HIERARCHY_ATTEMPTS} failed: could not parse JSON with hierarchy array`);
        continue;
      }
      const hv = validateHierarchy(hierarchyData, expectedIds, clusterSizes);
      if (!hv.passed) {
        lastFeedback = hv.feedback;
        log('warn', `Hierarchy attempt ${attempt}/${MAX_HIERARCHY_ATTEMPTS}: ${hv.errors.join('; ')}`);
        continue;
      }
      rawTree = resolveHierarchy(hierarchyData, clustersData, allSummaries);
      fs.writeFileSync(hierarchyRawPath, JSON.stringify(rawTree, null, 2));
      log('info', `Hierarchy organized: ${hierarchyData.hierarchy.length} top-level groups, ${totalFiles} leaves.`);
      break;
    }
    if (!rawTree) {
      throw new Error(`Hierarchy organization failed after ${MAX_HIERARCHY_ATTEMPTS} attempts`);
    }

    hierarchyPhase = phaseResult(hierCost, hierStart, 1);

    // Prune hierarchy
    log('info', 'Pruning hierarchy...');
    const { tree: pruned, flattened } = pruneHierarchy(rawTree);
    prunedTree = pruned;
    pruningStats = { flattened, leafCount: totalFiles, topChildren: prunedTree.children.length };
    log('info', 'Pruning complete.');

  }

  // ── Phase 4: Root Summary ───────────────────
  let rootSummaryPhase;
  {
    const rootStart = Date.now();
    log('info', 'Generating root summary...');
    const childInfo = prunedTree.children.map((c) => ({
      name: c.name,
      summary: c.summary,
    }));

    const { system: rootSystem, user: rootUser } = buildRootSummaryPrompt(childInfo);
    const rootResult = await runModel('sonnet', rootUser, { timeout: 120_000, temperature: 0.3, system: rootSystem });
    const rootCost = rootResult.cost;
    if (!rootResult.ok || !rootResult.text) {
      throw new Error(`Root summary failed: ${rootResult.error || 'empty result'}`);
    }
    const summaryText = rootResult.text.trim();

    prunedTree.summary = summaryText;
    // Write for debugging
    fs.writeFileSync(hierarchyPath, JSON.stringify(prunedTree, null, 2));

    log('info', `Root summary generated ($${rootCost.toFixed(4)})`);
    rootSummaryPhase = phaseResult(rootCost, rootStart, 1);
  }

  // ── Phase 5: Generate INDEX.md ──────────────
  log('info', 'Generating INDEX.md...');
  generateIndex(prunedTree, config.outputFile);

  // ── Run Summary ───────────
  const phaseCosts = {
    summarize: summarizePhase,
    cluster: clusterPhase,
    'cluster-summarize': clusterSummarizePhase,
    hierarchy: hierarchyPhase,
    'root-summary': rootSummaryPhase,
  };
  const elapsed = Object.values(phaseCosts).reduce((sum, p) => sum + (p.duration_seconds || 0), 0);
  const totalCost = Object.values(phaseCosts).reduce((sum, p) => sum + p.cost, 0);
  const runSummary = {
    completed_at: new Date().toISOString(),
    total_source_files: totalFiles,
    pruning_stats: pruningStats || null,
    phase_costs: phaseCosts,
    output_file: path.relative(process.cwd(), config.outputFile),
    total_cost_usd: Math.round(totalCost * 10000) / 10000,
    elapsed_seconds: elapsed,
  };
  fs.writeFileSync(
    path.join(config.scratchDir, 'run-summary.json'),
    JSON.stringify(runSummary, null, 2)
  );

  log('info', `Complete! ${totalFiles} files indexed.`);
  log('info', `Cost: $${totalCost.toFixed(4)} | Time: ${elapsed}s`);
  log('info', `Output: ${config.outputFile}`);
}

main().catch((err) => {
  log('error', err.message);
  if (err.stack) log('error', err.stack);
  process.exit(1);
});
