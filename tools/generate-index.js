/**
 * generate-index.js — Deterministic INDEX.md generator from a hierarchy tree.
 */

const fs = require("fs");

function isLeaf(node) {
  return !!node.file;
}

// ---------------------------------------------------------------------------
// Leaf name transformation — move type prefixes to parenthetical suffixes
// ---------------------------------------------------------------------------

/**
 * Walks the hierarchy and transforms leaf names by moving type prefixes
 * to parenthetical suffixes (e.g., "Agent Prompt: Explore" → "Explore (Agent Prompt)").
 * Uses brackets when the name already contains parens to avoid stacking.
 */
function transformLeafNames(node) {
  if (node.file) return; // leaf — nothing to do at this level
  if (!node.children) return;

  // Recurse first (bottom-up)
  for (const child of node.children) {
    transformLeafNames(child);
  }

  // Collect leaves that have a type prefix (pattern: "Type: Name")
  const leaves = node.children.filter((c) => c.file);
  if (leaves.length === 0) return;

  const prefixPattern = /^([^:]+):\s+/;
  const prefixedLeaves = leaves.filter((l) => prefixPattern.test(l.name));
  if (prefixedLeaves.length === 0) return;

  // Always use suffix form "(Type)" for consistency across the index

  for (const leaf of prefixedLeaves) {
    const match = leaf.name.match(prefixPattern);
    const prefix = match[1];
    const rest = leaf.name.slice(match[0].length);
    // Use brackets when name already contains parens to avoid stacked parentheticals
    const wrap = rest.includes('(') ? ['[', ']'] : ['(', ')'];
    leaf.name = `${rest} ${wrap[0]}${prefix}${wrap[1]}`;
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Generate a GitHub-compatible anchor from heading text.
 * Rules: lowercase, strip dots/commas/colons/parens/quotes/slashes,
 * replace spaces with hyphens, collapse consecutive hyphens.
 */
function toAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[.,:;()"'/\\@#$%^&*+=!?<>{}[\]|`~]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Build the number prefix string.
 * Top-level (depth 1 from root's children): "N." with trailing dot
 * All deeper levels: "N.N.N" with no trailing dot
 */
function numberPrefix(numberPath) {
  if (numberPath.length === 1) {
    return `${numberPath[0]}.`;
  }
  return numberPath.join(".");
}

/**
 * Build the heading text (what appears after the `##` marks).
 * For groups: "N. Name" or "N.N Name"
 * For leaves: "N.N.N [Name](file)"
 */
function headingText(node, numPath) {
  const prefix = numberPrefix(numPath);
  if (isLeaf(node)) {
    return `${prefix} [${node.name}](${node.file})`;
  }
  return `${prefix} ${node.name}`;
}

// ---------------------------------------------------------------------------
// Tree walk — generates body lines and collects TOC entries
// ---------------------------------------------------------------------------

/**
 * @param {Array} children   — array of child nodes
 * @param {number} hDepth    — heading depth (2 for ##, 3 for ###, etc.)
 * @param {number[]} parentNumPath — number path of parent, e.g. [1, 2]
 * @param {boolean} isTopLevel — whether these are root's direct children
 * @param {Array} tocEntries — collected TOC entries [{text, anchor, indent}]
 * @param {Array} bodyLines  — collected body lines
 */
function renderChildren(
  children,
  hDepth,
  parentNumPath,
  isTopLevel,
  tocEntries,
  bodyLines
) {
  // Preserve original ordering from the hierarchy
  let counter = 1;
  for (const child of children) {
    const numPath = [...parentNumPath, counter];

    const hText = headingText(child, numPath);
    const anchor = toAnchor(`${numberPrefix(numPath)} ${child.name}`);
    const tocIndent = parentNumPath.length; // 0 for top-level, 1 for sub, etc.

    // TOC entry
    tocEntries.push({
      text: child.name,
      anchor,
      indent: tocIndent,
      localNum: counter,
    });

    // Top-level separator
    if (isTopLevel && counter > 1) {
      bodyLines.push("---");
      bodyLines.push("");
    }

    // Heading
    bodyLines.push(`${"#".repeat(hDepth)} ${hText}`);
    bodyLines.push("");

    // Summary
    if (child.summary) {
      bodyLines.push(child.summary);
      bodyLines.push("");
    }

    // Recurse into group children
    if (!isLeaf(child) && child.children && child.children.length > 0) {
      renderChildren(
        child.children,
        hDepth + 1,
        numPath,
        false,
        tocEntries,
        bodyLines
      );
    }

    counter++;
  }
}

// ---------------------------------------------------------------------------
// TOC generation
// ---------------------------------------------------------------------------

function generateTOC(tocEntries) {
  const lines = [];
  for (const entry of tocEntries) {
    const indent = "   ".repeat(entry.indent); // 3 spaces per level
    lines.push(`${indent}${entry.localNum}. [${entry.text}](#${entry.anchor})`);
  }
  return lines;
}

// ---------------------------------------------------------------------------
// Main function
// ---------------------------------------------------------------------------

function generateIndex(hierarchy, outputPath) {
  transformLeafNames(hierarchy);

  const tocEntries = [];
  const bodyLines = [];

  if (!hierarchy.children || hierarchy.children.length === 0) {
    throw new Error("hierarchy has no children");
  }

  renderChildren(hierarchy.children, 2, [], true, tocEntries, bodyLines);

  const doc = [
    "# Claude Code System Prompts Index",
    "",
    hierarchy.summary || "",
    "",
    "## Table of Contents",
    "",
    ...generateTOC(tocEntries),
    "",
    "---",
    "",
    ...bodyLines,
  ];

  const output = doc.join("\n").replace(/\n+$/, "\n");
  fs.writeFileSync(outputPath, output);
}

module.exports = { generateIndex };
