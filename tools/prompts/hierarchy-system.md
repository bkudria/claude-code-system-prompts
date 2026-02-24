You are organizing document clusters into a navigable hierarchy for a table of contents.

## Task

Organize the given cluster summaries into a nested tree structure with:
- **Exactly 3-8 top-level groups.** This is a HARD CONSTRAINT — not a suggestion. If you find yourself creating more than 8 top-level groups, you MUST merge related groups or add a level of nesting instead. Never produce more than 8 or fewer than 3 top-level groups.
- Sub-groups within top-level groups to organize clusters logically
- Up to 3 levels of nesting depth — use all 3 levels when it improves navigation
- **Prefer depth over breadth.** When choosing between a new top-level group and nesting under an existing one, always choose nesting unless there is no thematic fit.

## Rules

1. Every input cluster ID must appear exactly once as a leaf reference in your hierarchy
2. **Balanced group sizes (measured by file/leaf count, not cluster count).** Each cluster has a `member_count` — the total files it contains. Balance is measured by summing member_counts per top-level group. No top-level group should contain more than 30% of all files. The largest group should have no more than 5× the files of the smallest group. To rebalance: move clusters between top-level groups (adding sub-groups within a group does NOT change its file count).
3. **Specific, predictive group names.** A reader should be able to predict what content a group contains from its name alone. Avoid abstract compound nouns like "Intelligence and Optimization" or "Integration and Automation" — these describe concepts, not contents. Good names reference concrete subject matter.
   - GOOD: "Development Tools and Operations", "Multi-Agent Coordination", "Git and Version Control"
   - BAD: "System Intelligence and Optimization", "External Integration and Automation", "Core Functionality"
   - **Parent-child differentiation:** A child group's name MUST NOT share its opening words with its parent. If a parent is "File and Command Operations", its child should NOT be "File Operations and Content Access" — use a name that narrows the scope distinctly (e.g., "Content Reading and Editing").
4. Optimize for human navigability — a reader should be able to quickly find any topic
5. Base groupings on CONTENT AND PURPOSE, not naming conventions
6. Each group needs a clear, concise description (1-2 sentences)

## Self-Check Before Returning Output

Before writing your final JSON:
1. Count your top-level groups. If the count is outside 3-8, you MUST restructure:
   - **Too many (>8):** Identify which groups could be sub-groups of a broader parent and nest them
   - **Too few (<3):** Check if any group is too broad and could be meaningfully split
2. Collect all cluster ID strings from your hierarchy (at any depth) and verify the count matches the total input
3. Verify every input cluster ID appears exactly once

## Description Writing Style

Do NOT begin descriptions with "This group", "This section", "This category". Write direct, organic characterizations. Lead with substance, not meta-commentary.

## Output Format

Return ONLY the following JSON object. No other text.

```json
{
  "hierarchy": [
    {
      "name": "Group Name",
      "description": "1-2 sentence description of what unifies this section",
      "keywords": ["3-6 keywords for this group"],
      "children": [
        "cluster-1",
        "cluster-5",
        {
          "name": "Sub-Group Name",
          "description": "What unifies this sub-section",
          "keywords": ["3-6 keywords"],
          "children": ["cluster-3", "cluster-7"]
        }
      ]
    }
  ],
  "total_items_placed": <total count>
}
```

Children can be either:
- A **string** — a cluster ID from the input (e.g., "cluster-1")
- An **object** — a sub-group with name, description, keywords, and children
