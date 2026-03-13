# Claude Code System Prompts Index

Operational guidance and reference material for building, running, and maintaining Claude-powered coding agents — covering everything needed to move from a single terminal session to a coordinated multi-agent system that writes, tests, and ships production code.

## Table of Contents

1. [Bash, Shell & Git Operations](#1-bash-shell-git-operations)
   1. [Bash Command Execution](#11-bash-command-execution)
      1. [Bash Tool: Core Behavior & Syntax](#111-bash-tool-core-behavior-syntax)
         1. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
         2. [Bash (command description) [Tool Description]](#1112-bash-command-description-tool-description)
         3. [Bash (maintain cwd) [Tool Description]](#1113-bash-maintain-cwd-tool-description)
         4. [Bash (no newlines) [Tool Description]](#1114-bash-no-newlines-tool-description)
         5. [Bash (quote file paths) [Tool Description]](#1115-bash-quote-file-paths-tool-description)
         6. [Bash (parallel commands) [Tool Description]](#1116-bash-parallel-commands-tool-description)
         7. [Bash (sequential commands) [Tool Description]](#1117-bash-sequential-commands-tool-description)
         8. [Bash (semicolon usage) [Tool Description]](#1118-bash-semicolon-usage-tool-description)
         9. [Bash (timeout) [Tool Description]](#1119-bash-timeout-tool-description)
         10. [Bash (working directory) [Tool Description]](#11110-bash-working-directory-tool-description)
         11. [Bash (verify parent directory) [Tool Description]](#11111-bash-verify-parent-directory-tool-description)
         12. [Bash (sleep — keep short) [Tool Description]](#11112-bash-sleep-—-keep-short-tool-description)
         13. [Bash (sleep — run immediately) [Tool Description]](#11113-bash-sleep-—-run-immediately-tool-description)
         14. [Bash (sleep — use check commands) [Tool Description]](#11114-bash-sleep-—-use-check-commands-tool-description)
         15. [Bash (sleep — no polling background tasks) [Tool Description]](#11115-bash-sleep-—-no-polling-background-tasks-tool-description)
      2. [Bash Tool: Preferred Alternatives & Tool Selection](#112-bash-tool-preferred-alternatives-tool-selection)
         1. [Bash (alternative — communication) [Tool Description]](#1121-bash-alternative-—-communication-tool-description)
         2. [Bash (alternative — content search) [Tool Description]](#1122-bash-alternative-—-content-search-tool-description)
         3. [Bash (alternative — edit files) [Tool Description]](#1123-bash-alternative-—-edit-files-tool-description)
         4. [Bash (alternative — file search) [Tool Description]](#1124-bash-alternative-—-file-search-tool-description)
         5. [Bash (alternative — read files) [Tool Description]](#1125-bash-alternative-—-read-files-tool-description)
         6. [Bash (alternative — write files) [Tool Description]](#1126-bash-alternative-—-write-files-tool-description)
         7. [Bash (built-in tools note) [Tool Description]](#1127-bash-built-in-tools-note-tool-description)
         8. [Bash (prefer dedicated tools) [Tool Description]](#1128-bash-prefer-dedicated-tools-tool-description)
         9. [Tool usage (reserve Bash) [System Prompt]](#1129-tool-usage-reserve-bash-system-prompt)
         10. [Tool usage (search content) [System Prompt]](#11210-tool-usage-search-content-system-prompt)
         11. [Tool usage (search files) [System Prompt]](#11211-tool-usage-search-files-system-prompt)
   2. [Bash Tool: Sandbox Security & Restrictions](#12-bash-tool-sandbox-security-restrictions)
      1. [Bash (sandbox — default to sandbox) [Tool Description]](#121-bash-sandbox-—-default-to-sandbox-tool-description)
      2. [Bash (sandbox — mandatory mode) [Tool Description]](#122-bash-sandbox-—-mandatory-mode-tool-description)
      3. [Bash (sandbox — no exceptions) [Tool Description]](#123-bash-sandbox-—-no-exceptions-tool-description)
      4. [Bash (sandbox — per-command) [Tool Description]](#124-bash-sandbox-—-per-command-tool-description)
      5. [Bash (sandbox — adjust settings) [Tool Description]](#125-bash-sandbox-—-adjust-settings-tool-description)
      6. [Bash (sandbox — explain restriction) [Tool Description]](#126-bash-sandbox-—-explain-restriction-tool-description)
      7. [Bash (sandbox — failure evidence condition) [Tool Description]](#127-bash-sandbox-—-failure-evidence-condition-tool-description)
      8. [Bash (sandbox — response header) [Tool Description]](#128-bash-sandbox-—-response-header-tool-description)
      9. [Bash (sandbox — retry without sandbox) [Tool Description]](#129-bash-sandbox-—-retry-without-sandbox-tool-description)
      10. [Bash (sandbox — tmpdir) [Tool Description]](#1210-bash-sandbox-—-tmpdir-tool-description)
      11. [Bash (sandbox — user permission prompt) [Tool Description]](#1211-bash-sandbox-—-user-permission-prompt-tool-description)
      12. [Bash (sandbox — no sensitive paths) [Tool Description]](#1212-bash-sandbox-—-no-sensitive-paths-tool-description)
      13. [Bash (sandbox — evidence: access denied) [Tool Description]](#1213-bash-sandbox-—-evidence-access-denied-tool-description)
      14. [Bash (sandbox — evidence list header) [Tool Description]](#1214-bash-sandbox-—-evidence-list-header-tool-description)
      15. [Bash (sandbox — evidence: network failures) [Tool Description]](#1215-bash-sandbox-—-evidence-network-failures-tool-description)
      16. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1216-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      17. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1217-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
   3. [Git & Branch Management](#13-git-branch-management)
      1. [Bash Tool: Git Operations](#131-bash-tool-git-operations)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#1311-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#1312-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#1313-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#1314-bash-git-—-prefer-new-commits-tool-description)
      2. [Git & Version Control Workflows](#132-git-version-control-workflows)
         1. [Quick git commit (Agent Prompt)](#1321-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#1322-quick-pr-creation-agent-prompt)
         3. [Session title and branch generation (Agent Prompt)](#1323-session-title-and-branch-generation-agent-prompt)
         4. [/pr-comments slash command (Agent Prompt)](#1324-pr-comments-slash-command-agent-prompt)
         5. [/review-pr slash command (Agent Prompt)](#1325-review-pr-slash-command-agent-prompt)
         6. [Git status (System Prompt)](#1326-git-status-system-prompt)
         7. [Worker instructions (System Prompt)](#1327-worker-instructions-system-prompt)
         8. [GitHub Actions workflow for @claude mentions (Data)](#1328-github-actions-workflow-for-claude-mentions-data)
         9. [GitHub App installation PR description (Data)](#1329-github-app-installation-pr-description-data)
      3. [Worktree & Isolation Management](#133-worktree-isolation-management)
         1. [EnterWorktree (Tool Description)](#1331-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#1332-exitworktree-tool-description)
2. [File System & External Tool Access](#2-file-system-external-tool-access)
   1. [File Reading, Writing & Search Tools](#21-file-reading-writing-search-tools)
      1. [File System Tool Descriptions](#211-file-system-tool-descriptions)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Edit (Tool Description)](#2113-edit-tool-description)
         4. [Glob (Tool Description)](#2114-glob-tool-description)
         5. [Grep (Tool Description)](#2115-grep-tool-description)
         6. [NotebookEdit (Tool Description)](#2116-notebookedit-tool-description)
      2. [File Operation Tool Preferences](#212-file-operation-tool-preferences)
         1. [Tool usage (create files) [System Prompt]](#2121-tool-usage-create-files-system-prompt)
         2. [Tool usage (edit files) [System Prompt]](#2122-tool-usage-edit-files-system-prompt)
         3. [Tool usage (read files) [System Prompt]](#2123-tool-usage-read-files-system-prompt)
         4. [Tool usage (direct search) [System Prompt]](#2124-tool-usage-direct-search-system-prompt)
         5. [Tool usage (delegate exploration) [System Prompt]](#2125-tool-usage-delegate-exploration-system-prompt)
   2. [Browser & Web Automation](#22-browser-web-automation)
      1. [Browser & Computer Automation](#221-browser-computer-automation)
         1. [Computer (Tool Description)](#2211-computer-tool-description)
         2. [Computer action (Tool Parameter)](#2212-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#2213-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#2214-chrome-browser-mcp-tools-system-prompt)
      2. [Web Search & Content Fetching](#222-web-search-content-fetching)
         1. [WebSearch (Tool Description)](#2221-websearch-tool-description)
         2. [WebFetch (Tool Description)](#2222-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#2223-webfetch-summarizer-agent-prompt)
   3. [Tool Execution & Discovery](#23-tool-execution-discovery)
      1. [LSP (Tool Description)](#231-lsp-tool-description)
      2. [CronCreate (Tool Description)](#232-croncreate-tool-description)
      3. [Sleep (Tool Description)](#233-sleep-tool-description)
      4. [ToolSearch (second part) [Tool Description]](#234-toolsearch-second-part-tool-description)
      5. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#235-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      6. [Tool execution denied (System Prompt)](#236-tool-execution-denied-system-prompt)
      7. [System section (System Prompt)](#237-system-section-system-prompt)
3. [Multi-Agent Orchestration & Planning](#3-multi-agent-orchestration-planning)
   1. [Subagent Spawning & Coordination](#31-subagent-spawning-coordination)
      1. [Agent & Subagent Orchestration](#311-agent-subagent-orchestration)
         1. [Agent (usage notes) [Tool Description]](#3111-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#3112-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (subagent guidance) [System Prompt]](#3113-tool-usage-subagent-guidance-system-prompt)
         4. [Writing subagent prompts (System Prompt)](#3114-writing-subagent-prompts-system-prompt)
         5. [Subagent delegation examples (System Prompt)](#3115-subagent-delegation-examples-system-prompt)
         6. [Fork usage guidelines (System Prompt)](#3116-fork-usage-guidelines-system-prompt)
         7. [Worker fork execution (Agent Prompt)](#3117-worker-fork-execution-agent-prompt)
         8. [Common suffix (response format) [Agent Prompt]](#3118-common-suffix-response-format-agent-prompt)
      2. [Agent Communication & User Intent](#312-agent-communication-user-intent)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#3121-prompt-suggestion-generator-v2-agent-prompt)
         2. [Agent mention (System Reminder)](#3122-agent-mention-system-reminder)
         3. [/btw side question (System Reminder)](#3123-btw-side-question-system-reminder)
   2. [Team & Swarm Coordination](#32-team-swarm-coordination)
      1. [TeammateTool (Tool Description)](#321-teammatetool-tool-description)
      2. [SendMessageTool (Tool Description)](#322-sendmessagetool-tool-description)
      3. [TaskList (teammate workflow) [Tool Description]](#323-tasklist-teammate-workflow-tool-description)
      4. [TeamDelete (Tool Description)](#324-teamdelete-tool-description)
      5. [Teammate Communication (System Prompt)](#325-teammate-communication-system-prompt)
      6. [Team Coordination (System Reminder)](#326-team-coordination-system-reminder)
      7. [Team Shutdown (System Reminder)](#327-team-shutdown-system-reminder)
      8. [Team memory content display (System Prompt)](#328-team-memory-content-display-system-prompt)
   3. [Task Tracking & Planning Workflows](#33-task-tracking-planning-workflows)
      1. [Task Management & Progress Tracking](#331-task-management-progress-tracking)
         1. [TodoWrite (Tool Description)](#3311-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#3312-taskcreate-tool-description)
         3. [Tool usage (task management) [System Prompt]](#3313-tool-usage-task-management-system-prompt)
         4. [TodoWrite reminder (System Reminder)](#3314-todowrite-reminder-system-reminder)
         5. [Task tools reminder (System Reminder)](#3315-task-tools-reminder-system-reminder)
         6. [Task status (System Reminder)](#3316-task-status-system-reminder)
      2. [Planning Mode](#332-planning-mode)
         1. [EnterPlanMode (Tool Description)](#3321-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3322-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#3323-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#3324-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#3325-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#3326-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#3327-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#3328-plan-file-reference-system-reminder)
         9. [Verify plan reminder (System Reminder)](#3329-verify-plan-reminder-system-reminder)
         10. [Phase four of plan mode (System Prompt)](#33210-phase-four-of-plan-mode-system-prompt)
         11. [Plan mode (enhanced) [Agent Prompt]](#33211-plan-mode-enhanced-agent-prompt)
   4. [Agent Design & Creation](#34-agent-design-creation)
      1. [Agent creation architect (Agent Prompt)](#341-agent-creation-architect-agent-prompt)
      2. [Bash command prefix detection (Agent Prompt)](#342-bash-command-prefix-detection-agent-prompt)
      3. [Auto mode (System Prompt)](#343-auto-mode-system-prompt)
4. [Session, Memory & Context Management](#4-session-memory-context-management)
   1. [Memory & Context Management](#41-memory-context-management)
      1. [Memory file contents (System Reminder)](#411-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#412-nested-memory-contents-system-reminder)
      3. [Description part of memory instructions (System Prompt)](#413-description-part-of-memory-instructions-system-prompt)
      4. [Memory system (private feedback) [System Prompt]](#414-memory-system-private-feedback-system-prompt)
      5. [Determine which memory files to attach (Agent Prompt)](#415-determine-which-memory-files-to-attach-agent-prompt)
      6. [Session memory update instructions (Agent Prompt)](#416-session-memory-update-instructions-agent-prompt)
      7. [Session memory template (Data)](#417-session-memory-template-data)
      8. [Agent memory instructions (System Prompt)](#418-agent-memory-instructions-system-prompt)
   2. [Context Compaction & State Reminders](#42-context-compaction-state-reminders)
      1. [Context Compaction & Conversation Summarization](#421-context-compaction-conversation-summarization)
         1. [Context compaction summary (System Prompt)](#4211-context-compaction-summary-system-prompt)
         2. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#4212-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
         3. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#4213-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
         4. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#4214-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
         5. [Conversation summarization (Agent Prompt)](#4215-conversation-summarization-agent-prompt)
         6. [Recent Message Summarization (Agent Prompt)](#4216-recent-message-summarization-agent-prompt)
      2. [File State & IDE Context Reminders](#422-file-state-ide-context-reminders)
         1. [File exists but empty (System Reminder)](#4221-file-exists-but-empty-system-reminder)
         2. [File modified by user or linter (System Reminder)](#4222-file-modified-by-user-or-linter-system-reminder)
         3. [File opened in IDE (System Reminder)](#4223-file-opened-in-ide-system-reminder)
         4. [File shorter than offset (System Reminder)](#4224-file-shorter-than-offset-system-reminder)
         5. [File truncated (System Reminder)](#4225-file-truncated-system-reminder)
         6. [Compact file reference (System Reminder)](#4226-compact-file-reference-system-reminder)
         7. [Lines selected in IDE (System Reminder)](#4227-lines-selected-in-ide-system-reminder)
         8. [New diagnostics detected (System Reminder)](#4228-new-diagnostics-detected-system-reminder)
   3. [Hooks, Resource Tracking & Session Tools](#43-hooks-resource-tracking-session-tools)
      1. [Hook System Reminders & Configuration](#431-hook-system-reminders-configuration)
         1. [Hook additional context (System Reminder)](#4311-hook-additional-context-system-reminder)
         2. [Hook blocking error (System Reminder)](#4312-hook-blocking-error-system-reminder)
         3. [Hook stopped continuation prefix (System Reminder)](#4313-hook-stopped-continuation-prefix-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#4314-hook-stopped-continuation-system-reminder)
         5. [Hook success (System Reminder)](#4315-hook-success-system-reminder)
         6. [Hooks Configuration (System Prompt)](#4316-hooks-configuration-system-prompt)
      2. [Session & Resource Tracking](#432-session-resource-tracking)
         1. [Token usage (System Reminder)](#4321-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#4322-usd-budget-system-reminder)
         3. [Session continuation (System Reminder)](#4323-session-continuation-system-reminder)
         4. [MCP resource no content (System Reminder)](#4324-mcp-resource-no-content-system-reminder)
         5. [MCP resource no displayable content (System Reminder)](#4325-mcp-resource-no-displayable-content-system-reminder)
      3. [Session Management & Naming](#433-session-management-naming)
         1. [Session Search Assistant (Agent Prompt)](#4331-session-search-assistant-agent-prompt)
         2. [Coding session title generator (Agent Prompt)](#4332-coding-session-title-generator-agent-prompt)
         3. [Status line setup (Agent Prompt)](#4333-status-line-setup-agent-prompt)
      4. [Session-Scoped File Management](#434-session-scoped-file-management)
         1. [Scratchpad directory (System Prompt)](#4341-scratchpad-directory-system-prompt)
5. [Claude API, SDK & Integration Reference](#5-claude-api-sdk-integration-reference)
   1. [API Feature References: Streaming, Tool Use, Files, Batches](#51-api-feature-references-streaming-tool-use-files-batches)
      1. [Streaming reference — Python (Data)](#511-streaming-reference-—-python-data)
      2. [Streaming reference — TypeScript (Data)](#512-streaming-reference-—-typescript-data)
      3. [Tool use concepts (Data)](#513-tool-use-concepts-data)
      4. [Tool use reference — Python (Data)](#514-tool-use-reference-—-python-data)
      5. [Tool use reference — TypeScript (Data)](#515-tool-use-reference-—-typescript-data)
      6. [Files API reference — Python (Data)](#516-files-api-reference-—-python-data)
      7. [Files API reference — TypeScript (Data)](#517-files-api-reference-—-typescript-data)
      8. [Message Batches API reference — Python (Data)](#518-message-batches-api-reference-—-python-data)
      9. [HTTP error codes reference (Data)](#519-http-error-codes-reference-data)
      10. [Claude model catalog (Data)](#5110-claude-model-catalog-data)
      11. [Live documentation sources (Data)](#5111-live-documentation-sources-data)
   2. [Language SDK References](#52-language-sdk-references)
      1. [Claude API Reference Data](#521-claude-api-reference-data)
         1. [Claude API reference — Python (Data)](#5211-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#5212-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#5213-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#5214-claude-api-reference-—-java-data)
         5. [Claude API reference — C# (Data)](#5215-claude-api-reference-—-c-data)
         6. [Claude API reference — Ruby (Data)](#5216-claude-api-reference-—-ruby-data)
         7. [Claude API reference — PHP (Data)](#5217-claude-api-reference-—-php-data)
         8. [Claude API reference — cURL (Data)](#5218-claude-api-reference-—-curl-data)
      2. [Agent SDK Reference & Patterns](#522-agent-sdk-reference-patterns)
         1. [Agent SDK reference — Python (Data)](#5221-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#5222-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#5223-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#5224-agent-sdk-patterns-—-typescript-data)
   3. [Build with Claude API Skills](#53-build-with-claude-api-skills)
      1. [Build with Claude API (Skill)](#531-build-with-claude-api-skill)
      2. [Build with Claude API (reference guide) [Skill]](#532-build-with-claude-api-reference-guide-skill)
      3. [Claude guide agent (Agent Prompt)](#533-claude-guide-agent-agent-prompt)
6. [Code Quality, Skills & Developer Workflows](#6-code-quality-skills-developer-workflows)
   1. [Code Quality & Task Execution Guidelines](#61-code-quality-task-execution-guidelines)
      1. [Doing tasks (ambitious tasks) [System Prompt]](#611-doing-tasks-ambitious-tasks-system-prompt)
      2. [Doing tasks (avoid over-engineering) [System Prompt]](#612-doing-tasks-avoid-over-engineering-system-prompt)
      3. [Doing tasks (blocked approach) [System Prompt]](#613-doing-tasks-blocked-approach-system-prompt)
      4. [Doing tasks (minimize file creation) [System Prompt]](#614-doing-tasks-minimize-file-creation-system-prompt)
      5. [Doing tasks (no compatibility hacks) [System Prompt]](#615-doing-tasks-no-compatibility-hacks-system-prompt)
      6. [Doing tasks (no premature abstractions) [System Prompt]](#616-doing-tasks-no-premature-abstractions-system-prompt)
      7. [Doing tasks (no time estimates) [System Prompt]](#617-doing-tasks-no-time-estimates-system-prompt)
      8. [Doing tasks (no unnecessary additions) [System Prompt]](#618-doing-tasks-no-unnecessary-additions-system-prompt)
      9. [Doing tasks (no unnecessary error handling) [System Prompt]](#619-doing-tasks-no-unnecessary-error-handling-system-prompt)
      10. [Doing tasks (read before modifying) [System Prompt]](#6110-doing-tasks-read-before-modifying-system-prompt)
      11. [Doing tasks (security) [System Prompt]](#6111-doing-tasks-security-system-prompt)
      12. [Doing tasks (software engineering focus) [System Prompt]](#6112-doing-tasks-software-engineering-focus-system-prompt)
      13. [Doing tasks (help and feedback) [System Prompt]](#6113-doing-tasks-help-and-feedback-system-prompt)
      14. [Executing actions with care (System Prompt)](#6114-executing-actions-with-care-system-prompt)
      15. [One of six rules for using sleep command (System Prompt)](#6115-one-of-six-rules-for-using-sleep-command-system-prompt)
   2. [Testing, Review & Codebase Analysis](#62-testing-review-codebase-analysis)
      1. [Verification & Testing](#621-verification-testing)
         1. [Verification specialist (Agent Prompt)](#6211-verification-specialist-agent-prompt)
         2. [Verification specialist (Skill)](#6212-verification-specialist-skill)
         3. [Create verifier skills (Skill)](#6213-create-verifier-skills-skill)
         4. [Agent Hook (Agent Prompt)](#6214-agent-hook-agent-prompt)
         5. [Hook condition evaluator (Agent Prompt)](#6215-hook-condition-evaluator-agent-prompt)
      2. [Codebase Exploration & Analysis Agents](#622-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#6221-explore-agent-prompt)
         2. [Explore strengths and guidelines (Agent Prompt)](#6222-explore-strengths-and-guidelines-agent-prompt)
         3. [CLAUDE.md creation (Agent Prompt)](#6223-claudemd-creation-agent-prompt)
         4. [Update Magic Docs (Agent Prompt)](#6224-update-magic-docs-agent-prompt)
      3. [Code Review & Simplification](#623-code-review-simplification)
         1. [Simplify (Skill)](#6231-simplify-skill)
         2. [Debugging (Skill)](#6232-debugging-skill)
         3. [Bash command description writer (Agent Prompt)](#6233-bash-command-description-writer-agent-prompt)
   3. [Security Monitoring & Malware Analysis](#63-security-monitoring-malware-analysis)
      1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#631-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#632-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      3. [/security-review slash command (Agent Prompt)](#633-security-review-slash-command-agent-prompt)
      4. [Censoring assistance with malicious activities (System Prompt)](#634-censoring-assistance-with-malicious-activities-system-prompt)
      5. [Malware analysis after Read tool call (System Reminder)](#635-malware-analysis-after-read-tool-call-system-reminder)
   4. [Skills, Learning & Analytics](#64-skills-learning-analytics)
      1. [Skills & Slash Commands](#641-skills-slash-commands)
         1. [Skill (Tool Description)](#6411-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#6412-tool-usage-skill-invocation-system-prompt)
         3. [Invoked skills (System Reminder)](#6413-invoked-skills-system-reminder)
         4. [Skillify Current Session (System Prompt)](#6414-skillify-current-session-system-prompt)
         5. [/loop slash command (Skill)](#6415-loop-slash-command-skill)
         6. [/stuck slash command (Skill)](#6416-stuck-slash-command-skill)
         7. [/batch slash command (Agent Prompt)](#6417-batch-slash-command-agent-prompt)
         8. [Update Claude Code Config (Skill)](#6418-update-claude-code-config-skill)
      2. [Usage Insights & Analytics](#642-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#6421-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#6422-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#6423-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#6424-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#6425-insights-suggestions-system-prompt)
      3. [Learning Mode](#643-learning-mode)
         1. [Learning mode (System Prompt)](#6431-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6432-learning-mode-insights-system-prompt)
   5. [Output Style & User Communication](#65-output-style-user-communication)
      1. [Output Style & Communication Guidelines](#651-output-style-communication-guidelines)
         1. [Tone and style (code references) [System Prompt]](#6511-tone-and-style-code-references-system-prompt)
         2. [Tone and style (concise output — detailed) [System Prompt]](#6512-tone-and-style-concise-output-—-detailed-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#6513-tone-and-style-concise-output-—-short-system-prompt)
         4. [Output efficiency (System Prompt)](#6514-output-efficiency-system-prompt)
         5. [Tool Use Summary Generation (System Prompt)](#6515-tool-use-summary-generation-system-prompt)
         6. [Agent Summary Generation (System Prompt)](#6516-agent-summary-generation-system-prompt)
         7. [Agent thread notes (System Prompt)](#6517-agent-thread-notes-system-prompt)
         8. [Output style active (System Reminder)](#6518-output-style-active-system-reminder)
      2. [User Interaction & Communication](#652-user-interaction-communication)
         1. [AskUserQuestion (Tool Description)](#6521-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#6522-askuserquestion-preview-field-tool-description)
         3. [SendMessageTool (non-agent-teams) [Tool Description]](#6523-sendmessagetool-non-agent-teams-tool-description)
         4. [How to use the SendUserMessage tool (System Prompt)](#6524-how-to-use-the-sendusermessage-tool-system-prompt)
         5. [Option previewer (System Prompt)](#6525-option-previewer-system-prompt)

---

## 1. Bash, Shell & Git Operations

Everything related to executing shell commands, managing sandbox security, selecting the right tool for terminal operations, and running safe git workflows including commits, pull requests, and branch isolation.

### 1.1 Bash Command Execution

Core syntax, working directory management, command chaining, timeout configuration, and best practices for running shell commands reliably.

#### 1.1.1 Bash Tool: Core Behavior & Syntax

Bash command execution with guidance on syntax conventions, working directory persistence, command chaining strategies, and timeout configuration. Covers quoting file paths, using absolute paths to maintain context, sequencing dependent commands with `&&` or `;` based on error tolerance, and executing independent commands in parallel. Includes best practices for polling external processes and managing sleep durations to avoid blocking.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

##### 1.1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Requires Claude to write clear, concise descriptions of bash commands, with brief summaries for simple commands and contextual detail for complex operations.

##### 1.1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to use absolute paths and avoid cd commands to maintain the current working directory throughout sessions.

##### 1.1.1.4 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits using newlines to separate bash commands.

##### 1.1.1.5 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Requires Claude to quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.6 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to make multiple Bash tool calls in parallel for independent commands rather than sequencing them.

##### 1.1.1.7 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent bash commands with `&&` in a single call when they must run sequentially and each depends on the previous success.

##### 1.1.1.8 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run bash commands sequentially when order matters but earlier command failures are acceptable.

##### 1.1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Bash commands support optional timeout configuration in milliseconds up to a maximum, with a default timeout applied if not specified.

##### 1.1.1.10 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

The bash working directory persists between commands, but shell state does not; the shell environment initializes from the user's bash or zsh profile.

##### 1.1.1.11 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files with bash, verify the parent directory exists and is the correct location using `ls`.

##### 1.1.1.12 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep bash sleep durations short (1-5 seconds) to avoid blocking the user.

##### 1.1.1.13 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between bash commands that can run immediately; execute them without delay.

##### 1.1.1.14 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like `gh run view` instead of sleeping when polling an external process.

##### 1.1.1.15 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with `run_in_background`; instead wait for automatic completion notification.

#### 1.1.2 Bash Tool: Preferred Alternatives & Tool Selection

Reserve bash for system commands and terminal operations, delegating file operations to dedicated tools for superior user experience and transparency. Use Read for file content, Write for file creation, Edit for modifications, Glob for file discovery, and Grep for content search instead of their bash equivalents. Output text directly rather than through echo or printf.

##### 1.1.2.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly rather than using echo or printf commands.

##### 1.1.2.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs Claude to use the Grep tool for content search instead of grep or rg commands.

##### 1.1.2.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs Claude to use the Edit tool for file editing instead of sed or awk.

##### 1.1.2.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs Claude to use the Glob tool for file search instead of find or ls commands.

##### 1.1.2.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs Claude to use the Read tool for file reading instead of cat, head, or tail.

##### 1.1.2.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs Claude to use the Write tool for file writing instead of echo or cat redirection.

##### 1.1.2.7 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and transparency than Bash equivalents.

##### 1.1.2.8 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat, and similar read-only searching commands, preferring dedicated tools instead for better user experience.

##### 1.1.2.9 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

##### 1.1.2.10 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool instead of grep or rg for searching file contents.

##### 1.1.2.11 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool instead of find or ls for file searching.

### 1.2 Bash Tool: Sandbox Security & Restrictions

Mandatory sandbox enforcement for bash commands with per-command default behavior and user collaboration on restriction failures. Identifies sandbox-caused failures through access denied errors, network connection blocks, permission denials, and socket errors. Requires using `$TMPDIR` for temporary files and prohibits adding sensitive paths to allowlists. Provides transparent error messaging about which restrictions blocked execution.

#### 1.2.1 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Directs Claude to default to running commands within the sandbox and only disable it when explicitly requested or evidence of sandbox restriction appears.

#### 1.2.2 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforce that all bash commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.2.3 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establish that bash commands cannot run outside the sandbox under any circumstances.

#### 1.2.4 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each bash command with `dangerouslyDisableSandbox: true` individually and default to sandbox mode for future commands regardless of recent usage.

#### 1.2.5 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to collaborate with the user to adjust sandbox settings when commands fail due to restrictions.

#### 1.2.6 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instruct Claude to briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

#### 1.2.7 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a bash command fails with visible evidence of sandbox restrictions, distinguishing sandbox-related failures from other causes like missing files or network issues.

#### 1.2.8 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provide a header for how Claude should respond when observing sandbox-caused command failures.

#### 1.2.9 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instruct Claude to immediately retry a failed bash command with `dangerouslyDisableSandbox: true` without asking the user.

#### 1.2.10 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Require using the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode instead of `/tmp` directly.

#### 1.2.11 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Note that disabling the sandbox will trigger a user permission prompt.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibit suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.2.14 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that identify sandbox-caused command failures.

#### 1.2.15 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.2.16 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies operation not permitted errors for file and network operations as evidence of sandbox restrictions.

#### 1.2.17 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions.

### 1.3 Git & Branch Management

Safe commit and pull request workflows, branch naming, GitHub API integration, worktree-based isolation for parallel development, and destructive-operation safeguards.

#### 1.3.1 Bash Tool: Git Operations

Safe git workflow emphasizing never committing without explicit user request, avoiding destructive operations like force-push or hard-reset, and never skipping hooks or signing unless authorized. Create new commits rather than amending existing ones. Use gh CLI for pull request creation with comprehensive safety protocols and hook handling.

##### 1.3.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives before executing destructive git operations like reset --hard or push --force.

##### 1.3.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests, including safety protocols, commit message drafting, hook handling, and PR creation via gh command. Emphasizes never committing without explicit user request, avoiding destructive operations, and creating new commits rather than amending.

##### 1.3.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping hooks or bypassing signing unless explicitly requested by the user.

##### 1.3.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Directs Claude to create new commits rather than amending existing ones.

#### 1.3.2 Git & Version Control Workflows

Orchestrates collaborative development through commit creation, pull request management, and code review integration. Handles branch naming conventions, PR lifecycle automation, GitHub API interactions, and safety protocols while maintaining repository style consistency and test coverage tracking.

##### 1.3.2.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting messages aligned to repository style, and executing the commit with safety protocols preventing amends and secret-file commits.

##### 1.3.2.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests by analyzing changes across all relevant commits, creating feature branches, pushing to origin, and generating PR titles and bodies with test plans and attribution.

##### 1.3.2.3 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates concise session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

##### 1.3.2.4 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including both PR-level and code review comments with diff context, file paths, line numbers, and threaded replies using the GitHub API.

##### 1.3.2.5 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Performs expert code reviews of GitHub PRs by fetching PR details and diffs, analyzing code quality, style, correctness, conventions, performance, test coverage, and security implications.

##### 1.3.2.6 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status snapshot at conversation start including branch, main branch, status, and recent commits.

##### 1.3.2.7 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

After implementing changes, simplify code, run unit tests, perform end-to-end testing, commit and push with a PR, then report the PR URL for coordinator tracking.

##### 1.3.2.8 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, PRs, or comments, with optional custom prompts and tool restrictions.

##### 1.3.2.9 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining functionality, security, and how to use @claude mentions after merge.

#### 1.3.3 Worktree & Isolation Management

Git-based isolation mechanism that creates and manages separate worktrees for parallel development, enabling branch-level separation while preserving the original working directory. Supports cleanup with options to preserve or discard uncommitted changes.

##### 1.3.3.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it only when the user explicitly requests worktree usage. In git repositories, creates a worktree in `.claude/worktrees/` with a new branch; outside git, delegates to WorktreeCreate/WorktreeRemove hooks.

##### 1.3.3.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree, restoring the original working directory and clearing session-dependent caches. Supports two modes: keep (preserve worktree for later) or remove (delete worktree and branch), with optional discard_changes flag for uncommitted work.

---

## 2. File System & External Tool Access

Dedicated tools for reading, writing, searching, and navigating files, plus external capabilities like browser automation and web content retrieval that extend reach beyond the local filesystem.

### 2.1 File Reading, Writing & Search Tools

ReadFile, Write, Edit, Glob, Grep, and NotebookEdit tool descriptions and preferences for using dedicated tools over shell equivalents.

#### 2.1.1 File System Tool Descriptions

Dedicated tools for filesystem operations: ReadFile handles text, images, PDFs, and notebooks with configurable line limits; Write creates or overwrites files; Edit performs targeted string replacements preserving indentation; Glob discovers files by pattern matching; Grep searches content with full regex support and multiple output modes; NotebookEdit manipulates Jupyter cells by index. All require absolute paths.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page range limits for large files), and Jupyter notebooks. Requires absolute paths and can read up to a configurable default line limit, with optional offset and limit parameters.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Write files to the local filesystem with absolute paths, overwriting existing files. Prefer Edit tool for modifications; avoid creating documentation files unless explicitly requested.

##### 2.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read tool output, preferring to edit existing files over creating new ones, and using `replace_all` when a substring appears multiple times.

##### 2.1.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob syntax like "**/*.js" to find files by name patterns, returning results sorted by modification time.

##### 2.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search tool built on ripgrep supporting full regex syntax, file filtering by glob or type, and multiple output modes (content, files_with_matches, count). Supports multiline pattern matching and requires escaping literal braces for language-specific searches.

##### 2.1.1.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing content completely, supporting insert and delete modes with 0-indexed cell numbering and absolute file paths.

#### 2.1.2 File Operation Tool Preferences

Directs Claude to use dedicated tools for file operations rather than shell commands. The Read, Write, and Edit tools handle file access, creation, and modification respectively, while Glob and Grep support direct codebase searches for specific targets, with the Task tool delegating broader exploration to specialized subagents.

##### 2.1.2.1 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use Write tool instead of cat heredoc or echo redirection for creating files.

##### 2.1.2.2 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs Claude to use Edit tool instead of sed or awk for editing files.

##### 2.1.2.3 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use Read tool instead of cat, head, tail, or sed for reading files.

##### 2.1.2.4 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob and Grep directly for simple, directed codebase searches like finding specific files, classes, or functions.

##### 2.1.2.5 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Instructs Claude to use Task tool with exploration subagent for broader codebase exploration and deep research when simple directed searches prove insufficient.

### 2.2 Browser & Web Automation

Programmatic Chrome interaction via mouse, keyboard, and screenshots, plus web search and URL fetching with attribution standards and HTML-to-markdown conversion.

#### 2.2.1 Browser & Computer Automation

Enables programmatic interaction with Chrome through mouse, keyboard, and screenshot-based navigation. Provides UI automation capabilities with error handling, tab management, console debugging, and GIF recording for complex browser-based tasks.

##### 2.2.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Use mouse and keyboard to interact with a Chrome browser and take screenshots. Always consult screenshots to determine element coordinates before clicking, and position the cursor tip at the center of target elements.

##### 2.2.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Chrome browser action parameters including mouse operations (click, drag, hover), keyboard input, scrolling, zooming, and element reference handling for UI automation.

##### 2.2.1.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording, console debugging, avoiding modal dialogs, preventing loops, and managing tab context. Emphasizes checking current tabs at session start and handling errors gracefully rather than retrying failed actions.

##### 2.2.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructs Claude to load Chrome browser MCP tools via ToolSearch before using any mcp__claude-in-chrome__* tool, with specific syntax for selecting and calling tools.

#### 2.2.2 Web Search & Content Fetching

Retrieves and processes current web information beyond training data cutoff through search and URL fetching. Converts HTML to markdown, enforces attribution standards, applies domain-based quote limits, and caches results for efficient content analysis.

##### 2.2.2.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Search the web for current information beyond knowledge cutoff with domain filtering support. Mandatory requirement: include a Sources section with markdown hyperlinks to all relevant results after answering user questions.

##### 2.2.2.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetch and analyze web content from URLs by converting HTML to markdown and processing with a small model. Includes automatic HTTPS upgrade, 15-minute caching, redirect handling, and prefers MCP-provided alternatives when available.

##### 2.2.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits (125 chars) for untrusted domains and proper attribution with quotation marks.

### 2.3 Tool Execution & Discovery

Capabilities for invoking external tools, discovering their schemas, and managing execution flow. Includes code intelligence via Language Server Protocol, scheduling recurring and one-shot tasks with cron syntax, waiting with user interruption support, and fetching tool definitions on demand. Execution follows permission modes with fallback strategies when denied, and supports parallel invocation of independent tools for efficiency.

#### 2.3.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers for code intelligence including symbol navigation, references, hover documentation, call hierarchies, and implementations across files and workspaces.

#### 2.3.2 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule prompts to be enqueued at future times using standard 5-field cron syntax in the user's local timezone. Support both one-shot tasks and recurring jobs, avoid :00 and :30 minute marks when possible to reduce API load spikes, and note that jobs expire after 3 days and only fire while the REPL is idle.

#### 2.3.3 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Wait for a specified duration with user interrupt capability and periodic check-in prompts. Preferred over bash sleep as it doesn't hold shell processes and supports concurrent execution with other tools.

#### 2.3.4 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetch deferred tool schemas by querying against a tool list using exact names, keyword search, or required-term matching, returning complete JSONSchema definitions in a functions block for immediate invocation.

#### 2.3.5 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to increase efficiency, while calling dependent tools sequentially when one must complete before another starts.

#### 2.3.6 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable alternative tools when execution is denied, but not to work around restrictions maliciously, and to stop and explain if the capability is essential.

#### 2.3.7 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Describes tool execution in permission modes, handling denied tool calls by adjusting approach rather than retrying, and using AskUserQuestion when intent is unclear.

---

## 3. Multi-Agent Orchestration & Planning

Frameworks for spawning, coordinating, and communicating with specialized subagents, managing team-level swarms, tracking task progress, enforcing structured planning phases, and designing custom agent personas.

### 3.1 Subagent Spawning & Coordination

Launching specialized subagents, writing context-aware prompts, handling concurrent and background execution, and routing user requests to named agents.

#### 3.1.1 Agent & Subagent Orchestration

Manages launching, coordinating, and communicating with specialized subagents for autonomous task execution. Covers when to spawn agents, how to write context-aware prompts, handling concurrent execution and background tasks, forking for parallel work, and structuring responses based on caller context.

##### 3.1.1.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance for launching and managing subagents, including concurrent execution, background tasks, resumption, worktree isolation, and context preservation for autonomous multi-step task handling.

##### 3.1.1.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when and how to launch specialized subagent types for autonomous handling of complex multi-step tasks, with available agent types and their capabilities.

##### 3.1.1.3 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use subagents for parallelizing independent queries and protecting context, avoiding duplication of work already delegated to specialized agents.

##### 3.1.1.4 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Write subagent prompts differently based on context inheritance: directive-style for context-inheriting agents, briefing-style for fresh agents; always include specific details rather than delegating understanding.

##### 3.1.1.5 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for coordinator agents delegating tasks to subagents, handling waiting states without fabricating results, and requesting independent reviews with full context.

##### 3.1.1.6 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Provides guidelines for forking subagents based on whether intermediate output is needed, emphasizing not reading fork output mid-flight or fabricating results, and trusting completion notifications.

##### 3.1.1.7 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Forked worker sub-agent that executes directives directly without spawning further sub-agents, using tools silently and reporting structured results with scope, findings, files changed, and issues.

##### 3.1.1.8 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise sub-agent reporting and detailed standalone writeups based on caller context, with guidance on file paths and code snippets.

#### 3.1.2 Agent Communication & User Intent

Mechanisms for routing user requests to specialized agents and predicting likely follow-up actions. Generates contextual prompt suggestions based on conversation history, delegates to named agents with required context, and handles lightweight side questions without tool invocation.

##### 3.1.2.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on conversation context, suggesting specific follow-up commands the user would likely type without offering evaluations or Claude-voice suggestions.

##### 3.1.2.2 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Invoke the specified agent with required context when user expresses desire to invoke it.

##### 3.1.2.3 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer side questions directly without tools as a lightweight separate agent, using only conversation context and avoiding promises to investigate or take actions.

### 3.2 Team & Swarm Coordination

Establishes multi-agent teams for complex projects through task distribution, peer messaging, and coordinated workflows. Teams spawn specialized agents, assign work via task lists, enable direct and broadcast communication, and require graceful shutdown with resource cleanup.

#### 3.2.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Create and manage teams for coordinating multiple agents on complex projects. Teams create task lists, spawn teammates with appropriate agent types, assign tasks via ownership, handle automatic message delivery, and manage teammate idle states and peer collaboration.

#### 3.2.2 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Send messages to agent teammates and handle structured protocol requests/responses (shutdown requests, plan approvals) in a swarm. Supports direct messaging by name and broadcast to all teammates, with critical warnings about broadcast cost and usage.

#### 3.2.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Teammates use TaskList to find available work after completing tasks, preferring pending unowned tasks with no blockers in ID order, then claim or wait for assignment via TaskUpdate.

#### 3.2.4 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Remove team and task directories after swarm work completes by deleting ~/.claude/teams/{team-name}/ and ~/.claude/tasks/{team-name}/, failing if active members remain.

#### 3.2.5 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents running in a team to use SendMessage tool for communicating with specific teammates or broadcasting to the team, since text responses are not visible to other agents.

#### 3.2.6 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and messaging protocols. Requires referring to teammates by name and sending updates to the team lead.

#### 3.2.7 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before returning a final response to the user in non-interactive mode.

#### 3.2.8 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and content for injection into conversation context.

### 3.3 Task Tracking & Planning Workflows

Structured task lists with state tracking, planning modes that enforce exploration before implementation, and user-approval gates before any code changes.

#### 3.3.1 Task Management & Progress Tracking

Structures work into tracked task lists with multiple states and dual-form descriptions for multi-step coding sessions. Enables immediate progress updates, prevents task batching, and supports cleanup of stale work.

##### 3.3.1.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Create and manage task lists for coding sessions with three states (pending, in_progress, completed) and dual-form task descriptions (imperative and active continuous). Use for multi-step tasks, complex work, or user-provided task lists; skip for trivial single tasks.

##### 3.3.1.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Create structured task lists for coding sessions with subject, description, and optional activeForm fields. Use proactively for multi-step tasks, complex work, or when users provide multiple items, avoiding trivial single-task scenarios.

##### 3.3.1.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Break down and manage work using the TodoWrite tool, marking tasks complete immediately rather than batching.

##### 3.3.1.4 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use the TodoWrite tool for task tracking when relevant, with guidance to clean up stale todo lists.

##### 3.3.1.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task tracking tools for progress management when relevant, with instructions to create and update tasks.

##### 3.3.1.6 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief notification that task output can be checked using the TaskOutput tool.

#### 3.3.2 Planning Mode

Enforces structured exploration and design phases before implementation for non-trivial tasks. Supports multiple workflows—5-phase with parallel agents, iterative pair-planning with user collaboration, and subagent variants—all prohibiting edits outside the plan file until user approval.

##### 3.3.2.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Proactively enter plan mode for non-trivial implementation tasks to explore the codebase and design an approach for user approval before writing code. Use for new features, multiple valid approaches, code modifications, architectural decisions, multi-file changes, unclear requirements, or when user preferences matter.

##### 3.3.2.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning by reading the plan file and requesting user approval. Use only for implementation tasks requiring code changes, not for research or exploration. Do not use to ask if the plan is acceptable—the tool itself requests approval.

##### 3.3.2.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow: initial understanding through parallel exploration agents, design via planning agents, review, optional phase four, and plan approval. Prohibits any edits or non-readonly operations except to the plan file.

##### 3.3.2.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning where Claude explores code, updates the plan file incrementally, and asks the user clarifying questions in a loop until the plan is complete. Only the plan file may be edited; all other operations are read-only.

##### 3.3.2.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents that prohibits edits and non-readonly operations, allows plan file editing only, and requires comprehensive answers with clarifying questions.

##### 3.3.2.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude to read the existing plan file, evaluate whether the new request is the same task or different, and either overwrite or modify the plan accordingly before proceeding.

##### 3.3.2.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notify that plan mode has been exited and actions can now be taken, optionally referencing the plan file location.

##### 3.3.2.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file and instructs Claude to continue working on it if relevant and incomplete.

##### 3.3.2.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 3.3.2.10 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Phase four of plan mode writes the final plan to the plan file with file paths and changes, references to existing functions, and a verification command, with a hard 40-line limit.

##### 3.3.2.11 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases, designs implementation plans with step-by-step strategies, identifies critical files, and considers architectural trade-offs without modifying files.

### 3.4 Agent Design & Creation

Framework for designing and deploying custom AI agents through intent extraction, expert persona creation, comprehensive system prompt architecture, and JSON specification generation. Includes safety mechanisms for command injection detection and behavioral guidelines for autonomous execution modes.

#### 3.4.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design custom AI agents by extracting user intent, creating expert personas, architecting comprehensive system prompts, optimizing for performance, and generating JSON specifications with identifiers, usage triggers, and detailed operational instructions aligned to project conventions.

#### 3.4.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands to enforce safety policies, returning the prefix or 'command_injection_detected' for allowlist validation.

#### 3.4.3 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Behavioral guidelines for auto mode enabling continuous autonomous task execution with immediate implementation, minimized interruptions, action-over-planning preference, and reasonable decision-making.

---

## 4. Session, Memory & Context Management

Mechanisms for persisting knowledge across conversations, compacting context windows, tracking file and IDE state changes, monitoring resource budgets, and organizing sessions for discovery and reuse.

### 4.1 Memory & Context Management

Persists user preferences, session state, and institutional knowledge across conversations through structured memory files. Manages private feedback, user guidance, and context-specific information while enabling selective attachment of relevant memory to optimize token usage.

#### 4.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file with its path and type description.

#### 4.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file with its path.

#### 4.1.3 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines memory field for capturing user role, goals, and preferences to enable personalized assistance while avoiding negative judgments.

#### 4.1.4 [Memory system (private feedback) [System Prompt]](system-prompts/system-prompt-memory-system-private-feedback.md)

Describes private feedback memory type for storing user guidance and corrections, with instructions to check for contradictions against team feedback before saving.

#### 4.1.5 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to assist Claude Code in processing user queries, excluding tool documentation for actively-used tools but including warnings and gotchas.

#### 4.1.6 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files by editing existing sections with detailed, info-dense content while preserving structure, headers, and italic descriptions, with token limits and focus on actionable information.

#### 4.1.7 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing session context into sections for current state, task specification, files, workflow, errors, codebase documentation, learnings, results, and worklog.

#### 4.1.8 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including memory update instructions in agent system prompts to build institutional knowledge across conversations, with domain-specific examples for code reviewers, test runners, architects, and documentation writers.

### 4.2 Context Compaction & State Reminders

Condensing conversation history into structured summaries for session transitions, plus system notifications about file state changes, IDE interactions, and content boundary truncations.

#### 4.2.1 Context Compaction & Conversation Summarization

Condenses conversation history into structured summaries for context window transitions, capturing task progress, technical decisions, errors, and next steps. Supports multiple compaction strategies—full conversation, recent messages, or minimal analysis—to enable efficient resumption across sessions.

##### 4.2.1.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries for context window transitions, covering task overview, current state, discoveries, next steps, and context preservation to enable efficient resumption.

##### 4.2.1.2 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

Analysis instructions for compaction covering full conversation, requiring chronological analysis of each message identifying user intent, approach, key decisions, specific details, errors, and user feedback.

##### 4.2.1.3 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Lean experimental version of compaction analysis instructions using analysis tags as planning scratchpad rather than detailed content, focusing on coverage without verbatim code or file contents.

##### 4.2.1.4 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

Analysis instructions for compaction covering recent messages only, requiring chronological analysis identifying user intent, approach, key decisions, specific details, errors, and user feedback.

##### 4.2.1.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries covering primary requests, technical concepts, files examined, errors encountered, problem-solving efforts, user messages, pending tasks, current work, and next steps with code snippets and architectural decisions.

##### 4.2.1.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions covering requests, technical concepts, files modified, errors, problem-solving, user messages, pending tasks, current work, and next steps while preserving earlier context intact.

#### 4.2.2 File State & IDE Context Reminders

System notifications that track file state changes, IDE interactions, and content boundaries. These reminders alert Claude to external modifications, truncation, offset errors, and user actions that may affect task context or require tool-based access to full content.

##### 4.2.2.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warn that a file exists but contains no content.

##### 4.2.2.2 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notify that a file was externally modified by user or linter and should be accounted for; include relevant changes with line numbers.

##### 4.2.2.3 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notify that the user opened a file in the IDE, which may or may not relate to the current task.

##### 4.2.2.4 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warn that the requested file offset exceeds the file length and display actual line count.

##### 4.2.2.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notify that a large file was truncated to a maximum line count; use the Read tool to access additional content if needed.

##### 4.2.2.6 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Reference a file read before conversation summarization that was too large to include; use the Read tool to access it if needed.

##### 4.2.2.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notify that the user selected specific lines in the IDE with their content displayed; may or may not relate to current task.

##### 4.2.2.8 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues in the codebase.

### 4.3 Hooks, Resource Tracking & Session Tools

Lifecycle hooks for event-driven automation, monitoring token budgets and MCP resource availability, and organizing sessions through semantic search and descriptive naming.

#### 4.3.1 Hook System Reminders & Configuration

Lifecycle management and execution reporting for the Claude Code hooks system. Covers hook configuration, event-driven automation (PermissionRequest, PreToolUse, PostToolUse), command execution, and status notifications for blocking errors, successful runs, and continuation control.

##### 4.3.1.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provide additional context from a hook execution.

##### 4.3.1.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Report an error from a blocking hook command execution.

##### 4.3.1.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for hook stopped continuation messages.

##### 4.3.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notify that a hook has stopped continuation with an associated message.

##### 4.3.1.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Report successful execution of a hook with its output message.

##### 4.3.1.6 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide to Claude Code hooks system, covering hook structure, events (PermissionRequest, PreToolUse, PostToolUse, etc.), types (command, prompt, agent), input/output formats, and common patterns for auto-formatting, logging, and test execution.

#### 4.3.2 Session & Resource Tracking

Monitors session continuity, resource consumption, and external integrations. Tracks token usage, budget spend, working directory changes across machines, and MCP resource availability to maintain awareness of constraints and session state.

##### 4.3.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 4.3.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including spent, total, and remaining budget.

##### 4.3.2.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory has changed.

##### 4.3.2.4 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Displays a placeholder message when an MCP resource has no content.

##### 4.3.2.5 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Displays a placeholder message when an MCP resource contains content that cannot be displayed.

#### 4.3.3 Session Management & Naming

Tools for organizing and discovering coding sessions through semantic search with tag-based ranking, generating concise descriptive titles for quick recognition, and configuring terminal status lines from shell configurations.

##### 4.3.3.1 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Agent that searches sessions by user queries, prioritizing exact tag matches, then partial matches, title, branch, and semantic similarity. Returns ranked results with inclusive matching to avoid missing relevant sessions.

##### 4.3.3.2 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise, sentence-case session titles (3–7 words) that capture the main goal of a coding session for easy recognition in lists.

##### 4.3.3.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line by reading shell PS1 configuration, converting escape sequences to shell commands, and updating settings.json with custom status line commands. Supports reading from zshrc, bashrc, bash_profile, or profile files.

#### 4.3.4 Session-Scoped File Management

Isolates temporary files and intermediate working data to a dedicated session-specific scratchpad directory rather than system temp locations, enabling clean separation of transient artifacts across concurrent sessions.

##### 4.3.4.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories, supporting intermediate results, scripts, and working files.

---

## 5. Claude API, SDK & Integration Reference

Comprehensive reference documentation for integrating with Claude via REST API and language-specific SDKs, covering streaming, tool use, file uploads, batch processing, and agent SDK patterns.

### 5.1 API Feature References: Streaming, Tool Use, Files, Batches

Core API capability references spanning real-time streaming with content type handling, tool use patterns and server-side tools, file upload and management, batch processing for cost-efficient async operations, model selection, and error handling across Python and TypeScript.

#### 5.1.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference with sync/async examples, handling text, thinking blocks, and tool use content types, plus error handling and best practices for real-time response display.

#### 5.1.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, handling different content types including thinking and tool use, tool runner streaming patterns, and event type reference with best practices.

#### 5.1.3 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool integration.

#### 5.1.4 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference with tool runner (beta), manual agentic loops, MCP tool conversion helpers, code execution, memory tool, and structured outputs including Pydantic schemas and strict tool use.

#### 5.1.5 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, server-side tools, code execution with file handling, memory tool, and structured outputs with Zod validation.

#### 5.1.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages (documents and images), file management (list, retrieve, delete, download), and end-to-end examples.

#### 5.1.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages for documents and images, and file management operations (list, delete, download).

#### 5.1.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, status polling, result retrieval, cancellation, and container reuse with code examples demonstrating 50% cost reduction on asynchronous message processing.

#### 5.1.9 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with causes, fixes, common mistakes, and typed exception handling in SDKs.

#### 5.1.10 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact model IDs, aliases, context windows, and pricing. Maps user requests to correct model IDs.

#### 5.1.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Provides WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and official repositories, with extraction prompts for each topic covering models, pricing, core features, media handling, API operations, tools, and advanced features.

### 5.2 Language SDK References

Language-specific client initialization, request patterns, vision, extended thinking, and cost optimization across Python, TypeScript, Go, Java, C#, Ruby, PHP, and cURL.

#### 5.2.1 Claude API Reference Data

Language-specific SDK documentation and raw HTTP API reference for Claude integration. Covers client initialization, request patterns, vision, tool use, streaming, extended thinking, and cost optimization across Python, TypeScript, Go, Java, C#, Ruby, PHP, and cURL.

##### 5.2.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, cost optimization, and retry strategies.

##### 5.2.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

##### 5.2.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use with BetaToolRunner and manual loops, thinking, server-side tools, PDF input, Files API, and context editing.

##### 5.2.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference with client initialization, basic requests, streaming, thinking, tool use via annotated classes and manual loops, effort parameter, prompt caching, token counting, structured output, and server-side tools.

##### 5.2.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use with manual JSON schema, effort parameter, prompt caching, token counting, structured output, and server-side tools.

##### 5.2.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, and tool use via beta tool runner and manual loops.

##### 5.2.1.7 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization for standard, Bedrock, Vertex AI, and Foundry clients, basic requests, streaming, tool use, extended thinking, and beta features.

##### 5.2.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude with cURL examples covering basic requests, streaming, tool use, extended thinking, and required headers for direct API calls.

#### 5.2.2 Agent SDK Reference & Patterns

Language-specific Agent SDK documentation and implementation patterns for Python and TypeScript, covering installation, query interfaces, built-in tools, MCP integration, permission modes, hooks, subagents, and session management with practical code examples.

##### 5.2.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP servers, hooks, subagents, and best practices.

##### 5.2.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference with installation, query interface, built-in tools, permission modes, MCP servers, hooks, subagents, and best practices.

##### 5.2.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with code examples.

##### 5.2.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks, subagents, MCP integration, and session resumption with practical code examples.

### 5.3 Build with Claude API Skills

Foundational guides for building LLM applications with Claude, providing architecture routing, language-specific reference templates, and agent-assisted documentation access for installation, configuration, and integration decisions.

#### 5.3.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, compaction, and common pitfalls.

#### 5.3.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, mapping common use cases to relevant documentation sections for single calls, streaming, tool use, batches, and file handling.

#### 5.3.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, the Claude Agent SDK, and the Claude API by fetching and referencing official documentation, providing actionable guidance on installation, configuration, tool use, and integrations.

---

## 6. Code Quality, Skills & Developer Workflows

Principles and tools for writing high-quality code, verifying implementations through testing, analyzing security vulnerabilities, exploring codebases, and extending Claude's capabilities through skills, analytics, and communication workflows.

### 6.1 Code Quality & Task Execution Guidelines

Principles governing how Claude approaches software engineering tasks: prioritize simplicity and user intent, avoid premature abstractions and unnecessary additions, read before modifying, handle security and error boundaries carefully, and seek user confirmation for destructive operations. Emphasizes pragmatism over speculation.

#### 6.1.1 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Encourages Claude to support ambitious tasks and defer to user judgment on scope rather than imposing artificial limitations.

#### 6.1.2 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Directs Claude to make only directly requested or clearly necessary changes, keeping solutions simple and focused.

#### 6.1.3 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instructs Claude to consider alternative approaches when blocked rather than brute-forcing, and to use user-question tools to align on the right path.

#### 6.1.4 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to avoid creating unnecessary files and prefer editing existing ones to prevent bloat.

#### 6.1.5 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims or renaming conventions.

#### 6.1.6 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directs Claude to avoid creating helpers or abstractions for one-time operations or hypothetical requirements, favoring minimal complexity.

#### 6.1.7 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid giving time estimates or predictions for task completion.

#### 6.1.8 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directs Claude to avoid adding features, refactoring, or improvements beyond what was requested, including unnecessary documentation.

#### 6.1.9 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios and only validate at system boundaries, trusting internal guarantees.

#### 6.1.10 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Directs Claude to read and understand existing code before proposing modifications.

#### 6.1.11 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities like injection, XSS, and OWASP top 10 issues, prioritizing secure code.

#### 6.1.12 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks and instructs Claude to interpret unclear instructions in that context, applying changes to actual code rather than providing generic answers.

#### 6.1.13 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels.

#### 6.1.14 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes careful action execution by evaluating reversibility and blast radius, requiring user confirmation for destructive, hard-to-reverse, or shared-state operations. Emphasizes investigating unexpected state before deletion and following both spirit and letter of safety guidelines.

#### 6.1.15 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Do not retry failing commands in a sleep loop — diagnose the root cause.

### 6.2 Testing, Review & Codebase Analysis

Automated quality assurance through adversarial testing and build verification, code review for structure and reuse opportunities, and read-only codebase navigation for documentation generation.

#### 6.2.1 Verification & Testing

Automated quality assurance framework that validates implementations through adversarial testing, build verification, and task completion analysis. Generates deterministic test plans and reports pass/fail verdicts with remediation guidance.

##### 6.2.1.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial testing agent that runs builds, tests, linters, and probes to verify implementations. Issues PASS/FAIL/PARTIAL verdicts with required command output and adversarial test results (concurrency, boundary, idempotency, orphan operations).

##### 6.2.1.2 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Verification specialist skill that discovers verifier skills, analyzes code changes, creates deterministic verification plans, triggers appropriate verifiers, and reports pass/fail results with recommended fixes.

##### 6.2.1.3 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive guide for creating verifier skills for automated code verification covering auto-detection of project types, setup of browser automation (Playwright), CLI (Tmux), and API (HTTP) tools, interactive Q&A, and skill generation.

##### 6.2.1.4 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies agent task completion by analyzing conversation transcripts and codebase state, returning structured results indicating whether stop conditions are met.

##### 6.2.1.5 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether conditions are met with optional failure reasons.

#### 6.2.2 Codebase Exploration & Analysis Agents

Read-only codebase navigation and documentation agents that search codebases, extract architectural patterns, and generate reference documentation. Enables future Claude instances to understand project structure and conventions without modifying source files.

##### 6.2.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist for navigating codebases using glob patterns, grep searches, and file reading, with strict prohibition on file modifications, creation, or state changes.

##### 6.2.2.2 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines the read-only Explore subagent's strengths in codebase searching and analysis, emphasizing thorough multi-location searches, established patterns, and prohibition against file creation or modification.

##### 6.2.2.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files containing build/test commands, high-level architecture, and project-specific conventions for future Claude Code instances.

##### 6.2.2.4 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Updates Magic Doc files with new learnings from conversations, preserving headers and removing outdated information. Focuses on architecture, entry points, and patterns rather than exhaustive implementation details.

#### 6.2.3 Code Review & Simplification

Development quality tools for analyzing code structure, identifying reuse opportunities and quality issues, debugging session problems, and documenting command-line operations.

##### 6.2.3.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill launching three parallel agents to identify code reuse opportunities, quality issues (redundant state, parameter sprawl, leaky abstractions), and efficiency problems (unnecessary work, missed concurrency, memory leaks).

##### 6.2.3.2 [Debugging (Skill)](system-prompts/skill-debugging.md)

Debugging skill for investigating Claude Code session issues by analyzing debug logs, identifying errors and warnings, and providing concrete fixes or next steps.

##### 6.2.3.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates concise, active-voice descriptions of bash commands, keeping simple commands brief while adding context for complex piped or flag-heavy operations.

### 6.3 Security Monitoring & Malware Analysis

Security enforcement mechanisms for autonomous agent operations, including threat modeling, prompt injection prevention, and vulnerability analysis. Defines block/allow rules for sensitive operations and provides tools for code security review and malware detection.

#### 6.3.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor evaluating autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with threat modeling, user intent analysis, and evaluation rules for composite actions, file execution, and sub-agent delegation.

#### 6.3.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, block rules, and allow exceptions governing agent actions, covering git safety, code execution, cloud operations, credentials, permissions, infrastructure changes, and data exfiltration prevention.

#### 6.3.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review analyzing code changes for exploitable vulnerabilities including injection attacks, authentication bypasses, cryptographic flaws, and data exposure, with high-confidence filtering and detailed exploit scenarios.

#### 6.3.4 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing destructive techniques, DoS attacks, and malicious detection evasion.

#### 6.3.5 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware code and behavior when encountered, but strictly prohibits improving or augmenting malicious code.

### 6.4 Skills, Learning & Analytics

User-invocable slash commands for task automation, educational learning mode that balances autonomy with human contribution, and usage analytics for identifying friction and recommending workflows.

#### 6.4.1 Skills & Slash Commands

User-invocable specialized capabilities that extend Claude's functionality through slash commands and reusable skill workflows. Enables task automation (scheduling, diagnostics, batch processing), configuration management, and session-to-skill conversion for reproducible workflows.

##### 6.4.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Execute specialized skills (slash commands) within the main conversation by name with optional arguments. Skills are listed in system reminders and must be invoked before generating other responses when matched to user requests.

##### 6.4.1.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute slash commands that invoke user-invocable skills, only for skills listed in the tool's user-invocable section.

##### 6.4.1.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

List skills invoked in the current session and remind to follow their guidelines.

##### 6.4.1.4 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts the current session into a reusable skill through a four-phase interview process: analyzing the session, confirming details with the user, breaking down steps with success criteria and execution modes, and writing a SKILL.md file with frontmatter, inputs, goals, and step-by-step instructions.

##### 6.4.1.5 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts intervals to cron expressions (supporting seconds, minutes, hours, days), and schedules recurring tasks with automatic expiration after 3 days.

##### 6.4.1.6 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for other processes, checking CPU/memory/state indicators, gathering context from child processes and debug logs, and posting findings to Slack.

##### 6.4.1.7 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining e2e test recipes, and spawning background worker agents with isolated worktrees to execute changes in parallel.

##### 6.4.1.8 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Modifies Claude Code configuration by reading and merging settings into settings.json files, supporting hooks (PreToolUse, PostToolUse, PreCompact), permissions, environment variables, and MCP server configuration.

#### 6.4.2 Usage Insights & Analytics

Analysis framework for Claude Code usage patterns, extracting session metrics, identifying friction points and satisfaction signals, surfacing quick wins and ambitious workflows, and recommending feature adoption tailored to user behavior.

##### 6.4.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary (what's working, hindrances, quick wins, ambitious workflows) for Claude Code usage reports, using coaching tone and avoiding numerical stats or overwhelming detail.

##### 6.4.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with 3 categories and 2 examples each, using second-person perspective.

##### 6.4.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future workflows and autonomous AI-assisted development opportunities with descriptions, implementation guidance, and copyable prompts.

##### 6.4.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts by counting user-requested goals, measuring satisfaction from explicit signals, and categorizing friction points like misunderstood requests, buggy code, or rejected actions.

##### 6.4.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions from Claude Code usage data, recommending CLAUDE.md additions for repeated patterns, features to try (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to the user's workflow.

#### 6.4.3 Learning Mode

Educational workflow that balances autonomous task completion with hands-on learning by requesting human contributions for design decisions and algorithms while handling routine implementation. Provides formatted insights explaining implementation choices specific to the codebase.

##### 6.4.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt that balances task completion with hands-on education by requesting human contributions for design decisions, business logic, and algorithms while handling routine implementation. Includes TodoList integration and Learn by Doing request patterns with specific examples.

##### 6.4.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code writing in learning mode, using formatted insight blocks to explain implementation choices specific to the codebase.

### 6.5 Output Style & User Communication

Response formatting standards, conciseness guidelines, clarification question patterns with visual previews, and markdown-formatted messaging for decision support.

#### 6.5.1 Output Style & Communication Guidelines

Directives for controlling Claude's response format, tone, and presentation. Covers conciseness standards, code reference precision, summary generation conventions, and behavioral guidelines for agent threads and tool output.

##### 6.5.1.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing specific functions or code pieces for easy user navigation.

##### 6.5.1.2 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Instructs Claude to produce concise, polished output without filler, repetition, or inner monologue, getting to the point quickly while preserving important information.

##### 6.5.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 6.5.1.4 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler and preamble, and focusing on decisions, status updates, and blockers.

##### 6.5.1.5 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Generate brief summaries of coding assistant tool usage in past tense, focusing on user-visible outcomes in under 8 words without self-referential phrases.

##### 6.5.1.6 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word agent action summaries in present tense, naming files/functions rather than branches, with examples of good and bad summary formats.

##### 6.5.1.7 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering absolute path usage, response formatting with relevant file paths and code snippets, emoji avoidance, and tool call punctuation conventions.

##### 6.5.1.8 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

#### 6.5.2 User Interaction & Communication

Mechanisms for gathering user input, presenting options, and delivering messages. Supports clarification questions with optional visual previews, markdown-formatted messaging with attachments, and side-by-side comparison layouts for decision-making.

##### 6.5.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Guidance for asking user questions to gather preferences, clarify instructions, and offer implementation choices. Includes plan mode restrictions prohibiting approval questions via this tool.

##### 6.5.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructions for using the optional preview field on single-select questions to display visual artifacts like UI mockups, code snippets, and diagrams.

##### 6.5.2.3 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Send markdown-formatted messages to users with optional file attachments (images, diffs, logs). Status field indicates intent: 'normal' for direct replies or 'proactive' for unsolicited updates.

##### 6.5.2.4 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to use SendUserMessage for all user-facing replies, with guidance on acknowledgment, work, and checkpoints for longer tasks, emphasizing tight messaging and second-person communication.

##### 6.5.2.5 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for presenting concrete UI mockups, code snippets, diagrams, and configuration examples when users need to visually compare options.
