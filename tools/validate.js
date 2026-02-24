/**
 * Validators for the generate-index pipeline.
 *
 * Exports:
 *   validateSummaries({ summaries })        — check summary JSON array
 *   validateClusters({ clusters, summaries }) — check cluster structure + coverage
 *   validateClusterSummaries({ clusters })  — check embedded cluster summaries
 *   validateHierarchy(hierarchyData, expectedIds, clusterSizes) — check hierarchy structure, IDs, balance
 */

// ---------------------------------------------------------------------------
// validateSummaries
// ---------------------------------------------------------------------------

const requiredSummaryFields = ['path', 'name', 'keywords']; // file + summary guaranteed by pipeline's isValid pre-filter

function validateSummaries({ summaries }) {
  const errors = [];

  if (!Array.isArray(summaries)) {
    return { passed: false, errors: ['Expected a JSON array'] };
  }

  for (const data of summaries) {
    const label = data.file || data.id || '(unknown)';

    for (const field of requiredSummaryFields) {
      if (!(field in data)) {
        errors.push(`${label}: missing required field "${field}"`);
      }
    }

    if (data.keywords && !Array.isArray(data.keywords)) {
      errors.push(`${label}: "keywords" is not an array`);
    }
  }

  return { passed: errors.length === 0, errors };
}

// ---------------------------------------------------------------------------
// validateClusters
// ---------------------------------------------------------------------------

const requiredClusterFields = ['id', 'name', 'description', 'members', 'keywords'];

function validateClusters({ clusters, summaries: allSummaries }) {
  const errors = [];

  if (!Array.isArray(clusters.clusters)) {
    return { passed: false, errors: ['"clusters" is not an array'] };
  }
  for (let i = 0; i < clusters.clusters.length; i++) {
    const cluster = clusters.clusters[i];
    const label = cluster.id || `clusters[${i}]`;
    for (const field of requiredClusterFields) {
      if (!(field in cluster)) {
        errors.push(`${label}: missing required field "${field}"`);
      }
    }
    if (cluster.members && !Array.isArray(cluster.members)) {
      errors.push(`${label}: "members" is not an array`);
    }
  }

  const inputFiles = allSummaries.map(s => s.id);
  const allMembers = new Set(clusters.clusters.flatMap(c => c.members));
  const missing = inputFiles.filter(f => !allMembers.has(f));
  if (missing.length > 0) {
    errors.push(`${missing.length} input item(s) not in any cluster: ${missing.join(', ')}`);
  }

  return { passed: errors.length === 0, errors };
}

// ---------------------------------------------------------------------------
// validateClusterSummaries
// ---------------------------------------------------------------------------

function validateClusterSummaries({ clusters }) {
  const errors = [];
  for (const cluster of clusters.clusters) {
    const label = cluster.id;

    if (!cluster.clusterSummary) {
      errors.push(`${label}: missing clusterSummary`);
    } else if (typeof cluster.clusterSummary !== 'string') {
      errors.push(`${label}: "clusterSummary" is not a string`);
    }
  }

  return { passed: errors.length === 0, errors };
}

// ---------------------------------------------------------------------------
// validateHierarchy
// ---------------------------------------------------------------------------

function validateHierarchy(hierarchyData, expectedIds, clusterSizes) {
  const errors = [];

  // 1. Top-level count (3-8 groups)
  const topLevelCount = hierarchyData.hierarchy.length;
  if (topLevelCount < 3 || topLevelCount > 8) {
    const feedback = `Your previous attempt produced ${topLevelCount} top-level groups. The HARD CONSTRAINT is 3-8. Merge related groups into broader categories and use nesting to organize them.`;
    return { passed: false, errors: [`${topLevelCount} top-level groups (expected 3-8)`], feedback };
  }

  // 2. ID coverage — no duplicates, no missing, no extras
  const collected = new Set();
  const idErrors = [];
  function collectIds(children) {
    for (const child of children) {
      if (typeof child === 'string') {
        if (collected.has(child)) idErrors.push(`Duplicate: ${child}`);
        collected.add(child);
      } else if (child && Array.isArray(child.children)) {
        collectIds(child.children);
      }
    }
  }
  collectIds(hierarchyData.hierarchy);
  const missing = [...expectedIds].filter((id) => !collected.has(id));
  const extra = [...collected].filter((id) => !expectedIds.has(id));
  if (missing.length > 0) idErrors.push(`Missing: ${missing.join(', ')}`);
  if (extra.length > 0) idErrors.push(`Unknown: ${extra.join(', ')}`);
  if (idErrors.length > 0) {
    const feedback = `Cluster ID coverage issue: ${idErrors.join('; ')}. Every input cluster ID must appear exactly once in the hierarchy.`;
    return { passed: false, errors: idErrors, feedback };
  }

  // 3. Balance — no group > 30%, max/min ratio <= 5x
  function countHierLeaves(children) {
    let total = 0;
    for (const child of children) {
      if (typeof child === 'string') {
        total += clusterSizes.get(child) || 0;
      } else if (child && Array.isArray(child.children)) {
        total += countHierLeaves(child.children);
      }
    }
    return total;
  }
  const sizes = hierarchyData.hierarchy.map((g) => ({
    name: g.name,
    leaves: countHierLeaves(g.children),
  }));
  const totalLeaves = sizes.reduce((s, g) => s + g.leaves, 0);
  const balanceErrors = [];
  for (const g of sizes) {
    const pct = g.leaves / totalLeaves;
    if (pct > 0.30) {
      balanceErrors.push(`"${g.name}" has ${g.leaves}/${totalLeaves} items (${(pct * 100).toFixed(1)}%, max 30%)`);
    }
  }
  const max = Math.max(...sizes.map((g) => g.leaves));
  const min = Math.min(...sizes.map((g) => g.leaves));
  if (min > 0 && max / min > 5) {
    balanceErrors.push(`Largest/smallest ratio is ${(max / min).toFixed(1)}x (max 5x)`);
  }
  if (balanceErrors.length > 0) {
    const sizeList = sizes.map((g) => `  - "${g.name}": ${g.leaves} items`).join('\n');
    const feedback = `Balance constraint violated: ${balanceErrors.join('; ')}.\n\nCurrent group sizes (by leaf/file count):\n${sizeList}\n\nTo fix: MOVE clusters from the largest group(s) to the smallest group(s). Adding sub-groups within a group does NOT change its total leaf count. You must redistribute clusters across top-level groups.`;
    return { passed: false, errors: balanceErrors, feedback };
  }

  return { passed: true, errors: [], feedback: null };
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

module.exports = { validateSummaries, validateClusters, validateClusterSummaries, validateHierarchy };
