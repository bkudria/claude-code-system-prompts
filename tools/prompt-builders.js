/**
 * prompt-builders.js — Pure functions that build {system, user} prompt pairs
 * for each LLM phase of the index generation pipeline.
 */

const fs = require('fs');
const path = require('path');

function loadPrompt(name) {
  return fs.readFileSync(path.join(__dirname, 'prompts', name), 'utf8').trim();
}

function buildInlinedBatchPrompt(batchPaths, allMetadata) {
  // Build a lookup from bare filename to metadata entry
  const metaByFile = new Map();
  for (const m of allMetadata) {
    metaByFile.set(m.file, m);
  }

  const sections = [];
  for (let i = 0; i < batchPaths.length; i++) {
    const filePath = batchPaths[i];
    const basename = path.basename(filePath);
    const meta = metaByFile.get(basename);
    const content = fs.readFileSync(filePath, 'utf8');

    const charCount = content.length;
    sections.push(
      `### ${i + 1}. ${basename}\n` +
      `**Metadata:** ${JSON.stringify(meta)}\n` +
      `**Source length:** ${charCount} characters\n` +
      `**Content:**\n${content}`
    );
  }

  const system = loadPrompt('batch-summarizer-system.md');

  const user = `## Files to Summarize

${sections.join('\n\n---\n\n')}

---

Return ONLY a JSON array of ${batchPaths.length} summary objects, one per file, in the same order as above. No other text.`;

  return { system, user };
}

function buildInlinedClusterPrompt(allSummariesJson, itemCount, feedback = null) {
  const system = loadPrompt('cluster-system.md');

  let user = `There are exactly ${itemCount} items.

## Output Format

Return ONLY the following JSON object. No other text.

\`\`\`json
{
  "clusters": [
    {
      "id": "cluster-{N}",
      "name": "<Human-Readable Cluster Name>",
      "description": "<2-3 sentences explaining what unifies these items>",
      "members": ["<item filenames or cluster IDs — can be mixed>"],
      "keywords": ["<4-8 keywords characterizing this group>"],
    }
  ]
}
\`\`\`

**CLUSTER ID FORMAT**: Use the format \`cluster-{N}\` where \`{N}\` is a sequential number starting at 1. For example: \`cluster-1\`, \`cluster-2\`, etc.

## Validation

Before returning output:
1. Count the total number of members across all your clusters
2. **Verify the member count equals ${itemCount}.** If they differ, find the missing/extra items and fix before returning

## Items to Cluster

\`\`\`json
${allSummariesJson}
\`\`\`
`;

  if (feedback) {
    user += `\n## IMPORTANT: Previous Attempt Feedback\n\n${feedback}\n\nYou MUST address the above issue in this attempt.\n`;
  }

  return { system, user };
}

function buildInlinedClusterSummarizerPrompt(batchClusters, summaryMap) {
  const sections = [];
  for (let i = 0; i < batchClusters.length; i++) {
    const cluster = batchClusters[i];
    const memberLines = [];
    for (const memberId of cluster.members) {
      const member = summaryMap.get(memberId);
      memberLines.push(`- **${memberId}**: ${JSON.stringify({ name: member.name, summary: member.summary, keywords: member.keywords })}`);
    }
    sections.push(
      `### Cluster ${i + 1}: ${cluster.name} (id: ${cluster.id})\nMembers:\n${memberLines.join('\n')}`
    );
  }

  const system = loadPrompt('cluster-summarizer-system.md');

  const user = `## Clusters to Summarize

${sections.join('\n\n---\n\n')}

---

Return ONLY a JSON array of ${batchClusters.length} cluster summary objects, one per cluster, in the same order as above. No other text.`;

  return { system, user };
}

function buildRootSummaryPrompt(childInfo) {
  const items = childInfo.map((c) => `- ${c.name}: ${c.summary}`).join('\n');

  const system = loadPrompt('root-summary-system.md');

  const user = `Top-level categories of a Claude Code system prompts collection:

${items}`;

  return { system, user };
}

function buildOrganizeHierarchyPrompt(clustersData, feedback = null) {
  const clusters = clustersData.clusters
    .map((c) => ({
      id: c.id,
      name: c.clusterSummaryName,
      summary: c.clusterSummary,
      keywords: c.clusterSummaryKeywords,
      member_count: c.members.length,
    }));
  const itemCount = clusters.length;

  const system = loadPrompt('hierarchy-system.md');

  const totalFiles = clusters.reduce((s, c) => s + c.member_count, 0);
  let user = `There are ${itemCount} clusters to organize (${totalFiles} total files). Set \`total_items_placed\` to ${itemCount}. Target ~${Math.round(totalFiles / 5)} files per top-level group.

## Cluster Summaries

\`\`\`json
${JSON.stringify(clusters, null, 2)}
\`\`\`
`;

  if (feedback) {
    user += `\n## IMPORTANT: Previous Attempt Feedback\n\n${feedback}\n\nYou MUST address the above issue in this attempt.\n`;
  }

  return { system, user };
}

module.exports = {
  buildInlinedBatchPrompt,
  buildInlinedClusterPrompt,
  buildInlinedClusterSummarizerPrompt,
  buildRootSummaryPrompt,
  buildOrganizeHierarchyPrompt,
};
