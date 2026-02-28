# Claude Code System Prompts Index

Purpose-built for AI-assisted software engineering, this collection governs how an autonomous coding agent thinks, acts, and collaborates — from the moment it plans a task through execution, tool use, multi-agent coordination, and delivery of secure, well-documented results.

## Table of Contents

1. [Bash and Shell Command Operations](#1-bash-and-shell-command-operations)
   1. [Bash Tool Configuration & Best Practices](#11-bash-tool-configuration-best-practices)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (command description) [Tool Description]](#112-bash-command-description-tool-description)
      3. [Bash (maintain cwd) [Tool Description]](#113-bash-maintain-cwd-tool-description)
      4. [Bash (no newlines) [Tool Description]](#114-bash-no-newlines-tool-description)
      5. [Bash (parallel commands) [Tool Description]](#115-bash-parallel-commands-tool-description)
      6. [Bash (sequential commands) [Tool Description]](#116-bash-sequential-commands-tool-description)
      7. [Bash (semicolon usage) [Tool Description]](#117-bash-semicolon-usage-tool-description)
      8. [Bash (quote file paths) [Tool Description]](#118-bash-quote-file-paths-tool-description)
      9. [Bash (verify parent directory) [Tool Description]](#119-bash-verify-parent-directory-tool-description)
      10. [Bash (working directory) [Tool Description]](#1110-bash-working-directory-tool-description)
      11. [Bash (timeout) [Tool Description]](#1111-bash-timeout-tool-description)
      12. [Bash (alternative — communication) [Tool Description]](#1112-bash-alternative-—-communication-tool-description)
      13. [Bash (alternative — content search) [Tool Description]](#1113-bash-alternative-—-content-search-tool-description)
      14. [Bash (alternative — edit files) [Tool Description]](#1114-bash-alternative-—-edit-files-tool-description)
      15. [Bash (alternative — file search) [Tool Description]](#1115-bash-alternative-—-file-search-tool-description)
      16. [Bash (alternative — read files) [Tool Description]](#1116-bash-alternative-—-read-files-tool-description)
      17. [Bash (alternative — write files) [Tool Description]](#1117-bash-alternative-—-write-files-tool-description)
      18. [Bash (built-in tools note) [Tool Description]](#1118-bash-built-in-tools-note-tool-description)
      19. [Bash (prefer dedicated tools) [Tool Description]](#1119-bash-prefer-dedicated-tools-tool-description)
   2. [Bash Sleep & Background Task Management](#12-bash-sleep-background-task-management)
      1. [Bash (sleep — keep short) [Tool Description]](#121-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#122-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — no retry loops) [Tool Description]](#123-bash-sleep-—-no-retry-loops-tool-description)
      4. [Bash (sleep — run immediately) [Tool Description]](#124-bash-sleep-—-run-immediately-tool-description)
      5. [Bash (sleep — use check commands) [Tool Description]](#125-bash-sleep-—-use-check-commands-tool-description)
      6. [Bash (sleep — use run_in_background) [Tool Description]](#126-bash-sleep-—-use-run_in_background-tool-description)
      7. [Sleep (Tool Description)](#127-sleep-tool-description)
   3. [Bash Sandbox Security & Restrictions](#13-bash-sandbox-security-restrictions)
      1. [Bash (sandbox — adjust settings) [Tool Description]](#131-bash-sandbox-—-adjust-settings-tool-description)
      2. [Bash (sandbox — default to sandbox) [Tool Description]](#132-bash-sandbox-—-default-to-sandbox-tool-description)
      3. [Bash (sandbox — evidence: access denied) [Tool Description]](#133-bash-sandbox-—-evidence-access-denied-tool-description)
      4. [Bash (sandbox — evidence list header) [Tool Description]](#134-bash-sandbox-—-evidence-list-header-tool-description)
      5. [Bash (sandbox — evidence: network failures) [Tool Description]](#135-bash-sandbox-—-evidence-network-failures-tool-description)
      6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#136-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#137-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
      8. [Bash (sandbox — explain restriction) [Tool Description]](#138-bash-sandbox-—-explain-restriction-tool-description)
      9. [Bash (sandbox — failure evidence condition) [Tool Description]](#139-bash-sandbox-—-failure-evidence-condition-tool-description)
      10. [Bash (sandbox — mandatory mode) [Tool Description]](#1310-bash-sandbox-—-mandatory-mode-tool-description)
      11. [Bash (sandbox — no exceptions) [Tool Description]](#1311-bash-sandbox-—-no-exceptions-tool-description)
      12. [Bash (sandbox — no sensitive paths) [Tool Description]](#1312-bash-sandbox-—-no-sensitive-paths-tool-description)
      13. [Bash (sandbox — per-command) [Tool Description]](#1313-bash-sandbox-—-per-command-tool-description)
      14. [Bash (sandbox — response header) [Tool Description]](#1314-bash-sandbox-—-response-header-tool-description)
      15. [Bash (sandbox — retry without sandbox) [Tool Description]](#1315-bash-sandbox-—-retry-without-sandbox-tool-description)
      16. [Bash (sandbox — tmpdir) [Tool Description]](#1316-bash-sandbox-—-tmpdir-tool-description)
      17. [Bash (sandbox — user permission prompt) [Tool Description]](#1317-bash-sandbox-—-user-permission-prompt-tool-description)
   4. [Bash Command Safety & Analysis](#14-bash-command-safety-analysis)
      1. [Bash command description writer (Agent Prompt)](#141-bash-command-description-writer-agent-prompt)
      2. [Bash command prefix detection (Agent Prompt)](#142-bash-command-prefix-detection-agent-prompt)
2. [File System, Tools, and Lifecycle Hooks](#2-file-system-tools-and-lifecycle-hooks)
   1. [Reading, Writing, and Searching Files](#21-reading-writing-and-searching-files)
      1. [File System Tools (Read, Write, Edit, Search)](#211-file-system-tools-read-write-edit-search)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Edit (Tool Description)](#2113-edit-tool-description)
         4. [Glob (Tool Description)](#2114-glob-tool-description)
         5. [Grep (Tool Description)](#2115-grep-tool-description)
         6. [NotebookEdit (Tool Description)](#2116-notebookedit-tool-description)
         7. [Tool usage (read files) [System Prompt]](#2117-tool-usage-read-files-system-prompt)
         8. [Tool usage (edit files) [System Prompt]](#2118-tool-usage-edit-files-system-prompt)
         9. [Tool usage (search files) [System Prompt]](#2119-tool-usage-search-files-system-prompt)
         10. [Tool usage (search content) [System Prompt]](#21110-tool-usage-search-content-system-prompt)
         11. [Tool usage (create files) [System Prompt]](#21111-tool-usage-create-files-system-prompt)
      2. [File State & Modification Notifications](#212-file-state-modification-notifications)
         1. [File modified by user or linter (System Reminder)](#2121-file-modified-by-user-or-linter-system-reminder)
         2. [File exists but empty (System Reminder)](#2122-file-exists-but-empty-system-reminder)
         3. [File shorter than offset (System Reminder)](#2123-file-shorter-than-offset-system-reminder)
   2. [Tool Permissions and Execution Policy](#22-tool-permissions-and-execution-policy)
      1. [Tool Permission & Execution Policy](#221-tool-permission-execution-policy)
         1. [Tool execution denied (System Prompt)](#2211-tool-execution-denied-system-prompt)
         2. [Tool permission mode (System Prompt)](#2212-tool-permission-mode-system-prompt)
         3. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#2213-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         4. [Tool usage (reserve Bash) [System Prompt]](#2214-tool-usage-reserve-bash-system-prompt)
      2. [MCP Resource Handling](#222-mcp-resource-handling)
         1. [MCP resource no content (System Reminder)](#2221-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#2222-mcp-resource-no-displayable-content-system-reminder)
   3. [Hooks, Tool Discovery, and Skill Invocation](#23-hooks-tool-discovery-and-skill-invocation)
      1. [Hooks System & Lifecycle Events](#231-hooks-system-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#2311-hooks-configuration-system-prompt)
         2. [Hook success (System Reminder)](#2312-hook-success-system-reminder)
         3. [Hook blocking error (System Reminder)](#2313-hook-blocking-error-system-reminder)
         4. [Hook additional context (System Reminder)](#2314-hook-additional-context-system-reminder)
         5. [Hook stopped continuation (System Reminder)](#2315-hook-stopped-continuation-system-reminder)
         6. [Hook stopped continuation prefix (System Reminder)](#2316-hook-stopped-continuation-prefix-system-reminder)
         7. [Agent Hook (Agent Prompt)](#2317-agent-hook-agent-prompt)
         8. [Hook condition evaluator (Agent Prompt)](#2318-hook-condition-evaluator-agent-prompt)
      2. [Tool Discovery & Skill Invocation](#232-tool-discovery-skill-invocation)
         1. [ToolSearch (Tool Description)](#2321-toolsearch-tool-description)
         2. [ToolSearch extended (Tool Description)](#2322-toolsearch-extended-tool-description)
         3. [Skill (Tool Description)](#2323-skill-tool-description)
         4. [Tool usage (skill invocation) [System Prompt]](#2324-tool-usage-skill-invocation-system-prompt)
         5. [Invoked skills (System Reminder)](#2325-invoked-skills-system-reminder)
3. [Planning, Task Management, and Session Continuity](#3-planning-task-management-and-session-continuity)
   1. [Planning and Task Execution](#31-planning-and-task-execution)
      1. [Planning Mode & Implementation Workflow](#311-planning-mode-implementation-workflow)
         1. [EnterPlanMode (Tool Description)](#3111-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3112-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#3113-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#3114-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#3115-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#3116-plan-mode-re-entry-system-reminder)
         7. [Plan file reference (System Reminder)](#3117-plan-file-reference-system-reminder)
         8. [Exited plan mode (System Reminder)](#3118-exited-plan-mode-system-reminder)
         9. [Verify plan reminder (System Reminder)](#3119-verify-plan-reminder-system-reminder)
         10. [Plan mode (enhanced) [Agent Prompt]](#31110-plan-mode-enhanced-agent-prompt)
      2. [Task Tracking & Todo Management](#312-task-tracking-todo-management)
         1. [TodoWrite (Tool Description)](#3121-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#3122-taskcreate-tool-description)
         3. [TodoWrite reminder (System Reminder)](#3123-todowrite-reminder-system-reminder)
         4. [Task tools reminder (System Reminder)](#3124-task-tools-reminder-system-reminder)
         5. [Task status (System Reminder)](#3125-task-status-system-reminder)
         6. [Tool usage (task management) [System Prompt]](#3126-tool-usage-task-management-system-prompt)
      3. [Task Execution Behavior & User Interaction](#313-task-execution-behavior-user-interaction)
         1. [Doing tasks (ambitious tasks) [System Prompt]](#3131-doing-tasks-ambitious-tasks-system-prompt)
         2. [Doing tasks (blocked approach) [System Prompt]](#3132-doing-tasks-blocked-approach-system-prompt)
         3. [Doing tasks (help and feedback) [System Prompt]](#3133-doing-tasks-help-and-feedback-system-prompt)
         4. [Doing tasks (no time estimates) [System Prompt]](#3134-doing-tasks-no-time-estimates-system-prompt)
         5. [Executing actions with care (System Prompt)](#3135-executing-actions-with-care-system-prompt)
         6. [AskUserQuestion (Tool Description)](#3136-askuserquestion-tool-description)
   2. [Session State and Summarization](#32-session-state-and-summarization)
      1. [Session Memory & Context Management](#321-session-memory-context-management)
         1. [Memory file contents (System Reminder)](#3211-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#3212-nested-memory-contents-system-reminder)
         3. [Session continuation (System Reminder)](#3213-session-continuation-system-reminder)
         4. [Compact file reference (System Reminder)](#3214-compact-file-reference-system-reminder)
         5. [File truncated (System Reminder)](#3215-file-truncated-system-reminder)
         6. [Context compaction summary (System Prompt)](#3216-context-compaction-summary-system-prompt)
         7. [Scratchpad directory (System Prompt)](#3217-scratchpad-directory-system-prompt)
         8. [Session memory template (Data)](#3218-session-memory-template-data)
         9. [Session memory update instructions (Agent Prompt)](#3219-session-memory-update-instructions-agent-prompt)
         10. [Memory selection (Agent Prompt)](#32110-memory-selection-agent-prompt)
         11. [Agent memory instructions (System Prompt)](#32111-agent-memory-instructions-system-prompt)
      2. [Conversation & Session Summarization](#322-conversation-session-summarization)
         1. [Conversation summarization (Agent Prompt)](#3221-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#3222-recent-message-summarization-agent-prompt)
         3. [Agent Summary Generation (System Prompt)](#3223-agent-summary-generation-system-prompt)
         4. [Tool Use Summary Generation (System Prompt)](#3224-tool-use-summary-generation-system-prompt)
      3. [Session Management & Search](#323-session-management-search)
         1. [Session title and branch generation (Agent Prompt)](#3231-session-title-and-branch-generation-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#3232-session-search-assistant-agent-prompt)
         3. [Status line setup (Agent Prompt)](#3233-status-line-setup-agent-prompt)
4. [Multi-Agent Systems and Coordination](#4-multi-agent-systems-and-coordination)
   1. [Multi-Agent Coordination & Team Swarms](#41-multi-agent-coordination-team-swarms)
      1. [Task (Tool Description)](#411-task-tool-description)
      2. [TeammateTool (Tool Description)](#412-teammatetool-tool-description)
      3. [TeamDelete (Tool Description)](#413-teamdelete-tool-description)
      4. [SendMessageTool (Tool Description)](#414-sendmessagetool-tool-description)
      5. [TaskList (teammate workflow) [Tool Description]](#415-tasklist-teammate-workflow-tool-description)
      6. [Team Coordination (System Reminder)](#416-team-coordination-system-reminder)
      7. [Team Shutdown (System Reminder)](#417-team-shutdown-system-reminder)
      8. [Teammate Communication (System Prompt)](#418-teammate-communication-system-prompt)
      9. [Tool usage (subagent guidance) [System Prompt]](#419-tool-usage-subagent-guidance-system-prompt)
      10. [Tool usage (delegate exploration) [System Prompt]](#4110-tool-usage-delegate-exploration-system-prompt)
      11. [/batch slash command (Agent Prompt)](#4111-batch-slash-command-agent-prompt)
   2. [Agent Design and SDK Implementation](#42-agent-design-and-sdk-implementation)
      1. [Agent SDK Reference & Patterns](#421-agent-sdk-reference-patterns)
         1. [Agent SDK reference — Python (Data)](#4211-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#4212-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#4213-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#4214-agent-sdk-patterns-—-typescript-data)
      2. [Agent Architecture & Guidance](#422-agent-architecture-guidance)
         1. [Agent creation architect (Agent Prompt)](#4221-agent-creation-architect-agent-prompt)
         2. [Claude guide agent (Agent Prompt)](#4222-claude-guide-agent-agent-prompt)
   3. [Skill Creation & Verification](#43-skill-creation-verification)
      1. [Skillify Current Session (System Prompt)](#431-skillify-current-session-system-prompt)
      2. [Create verifier skills (Skill)](#432-create-verifier-skills-skill)
      3. [Verification specialist (Skill)](#433-verification-specialist-skill)
      4. [Update Claude Code Config (Skill)](#434-update-claude-code-config-skill)
      5. [Debugging (Skill)](#435-debugging-skill)
5. [Claude API, SDKs, and External Integrations](#5-claude-api-sdks-and-external-integrations)
   1. [Claude API and Tool Use References](#51-claude-api-and-tool-use-references)
      1. [Claude API SDK References by Language](#511-claude-api-sdk-references-by-language)
         1. [Claude API reference — Python (Data)](#5111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#5112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — C# (Data)](#5113-claude-api-reference-—-c-data)
         4. [Claude API reference — Go (Data)](#5114-claude-api-reference-—-go-data)
         5. [Claude API reference — Java (Data)](#5115-claude-api-reference-—-java-data)
         6. [Claude API reference — PHP (Data)](#5116-claude-api-reference-—-php-data)
         7. [Claude API reference — Ruby (Data)](#5117-claude-api-reference-—-ruby-data)
         8. [Build with Claude API (Skill)](#5118-build-with-claude-api-skill)
         9. [Build with Claude API (reference guide) [Skill]](#5119-build-with-claude-api-reference-guide-skill)
      2. [Tool Use API Reference & Implementation](#512-tool-use-api-reference-implementation)
         1. [Tool use concepts (Data)](#5121-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#5122-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#5123-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#5124-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#5125-streaming-reference-—-typescript-data)
         6. [Message Batches API reference — Python (Data)](#5126-message-batches-api-reference-—-python-data)
         7. [Files API reference — Python (Data)](#5127-files-api-reference-—-python-data)
         8. [Files API reference — TypeScript (Data)](#5128-files-api-reference-—-typescript-data)
      3. [Claude Model Catalog & API Infrastructure](#513-claude-model-catalog-api-infrastructure)
         1. [Claude model catalog (Data)](#5131-claude-model-catalog-data)
         2. [HTTP error codes reference (Data)](#5132-http-error-codes-reference-data)
         3. [Live documentation sources (Data)](#5133-live-documentation-sources-data)
   2. [Web, Browser, and External Data Tools](#52-web-browser-and-external-data-tools)
      1. [Browser Automation & Web Interaction](#521-browser-automation-web-interaction)
         1. [Computer (Tool Description)](#5211-computer-tool-description)
         2. [Computer action (Tool Parameter)](#5212-computer-action-tool-parameter)
         3. [Chrome browser MCP tools (System Prompt)](#5213-chrome-browser-mcp-tools-system-prompt)
         4. [Claude in Chrome browser automation (System Prompt)](#5214-claude-in-chrome-browser-automation-system-prompt)
      2. [Web Search & Content Fetching](#522-web-search-content-fetching)
         1. [WebSearch (Tool Description)](#5221-websearch-tool-description)
         2. [WebFetch (Tool Description)](#5222-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#5223-webfetch-summarizer-agent-prompt)
   3. [CI/CD and IDE Integration](#53-cicd-and-ide-integration)
      1. [GitHub Actions & CI/CD Integration](#531-github-actions-cicd-integration)
         1. [GitHub Actions workflow for @claude mentions (Data)](#5311-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#5312-github-app-installation-pr-description-data)
      2. [IDE Integration & Code Navigation](#532-ide-integration-code-navigation)
         1. [Lines selected in IDE (System Reminder)](#5321-lines-selected-in-ide-system-reminder)
         2. [File opened in IDE (System Reminder)](#5322-file-opened-in-ide-system-reminder)
         3. [New diagnostics detected (System Reminder)](#5323-new-diagnostics-detected-system-reminder)
         4. [LSP (Tool Description)](#5324-lsp-tool-description)
6. [Code Quality, Security, and Version Control](#6-code-quality-security-and-version-control)
   1. [Code Quality, Refactoring & Engineering Practices](#61-code-quality-refactoring-engineering-practices)
      1. [Doing tasks (avoid over-engineering) [System Prompt]](#611-doing-tasks-avoid-over-engineering-system-prompt)
      2. [Doing tasks (no premature abstractions) [System Prompt]](#612-doing-tasks-no-premature-abstractions-system-prompt)
      3. [Doing tasks (no compatibility hacks) [System Prompt]](#613-doing-tasks-no-compatibility-hacks-system-prompt)
      4. [Doing tasks (no unnecessary additions) [System Prompt]](#614-doing-tasks-no-unnecessary-additions-system-prompt)
      5. [Doing tasks (no unnecessary error handling) [System Prompt]](#615-doing-tasks-no-unnecessary-error-handling-system-prompt)
      6. [Doing tasks (read before modifying) [System Prompt]](#616-doing-tasks-read-before-modifying-system-prompt)
      7. [Doing tasks (security) [System Prompt]](#617-doing-tasks-security-system-prompt)
      8. [Doing tasks (software engineering focus) [System Prompt]](#618-doing-tasks-software-engineering-focus-system-prompt)
      9. [Doing tasks (minimize file creation) [System Prompt]](#619-doing-tasks-minimize-file-creation-system-prompt)
      10. [Simplify (Skill)](#6110-simplify-skill)
   2. [Security Review and Codebase Analysis](#62-security-review-and-codebase-analysis)
      1. [Security Review & Malware Analysis](#621-security-review-malware-analysis)
         1. [/security-review slash command (Agent Prompt)](#6211-security-review-slash-command-agent-prompt)
         2. [Malware analysis after Read tool call (System Reminder)](#6212-malware-analysis-after-read-tool-call-system-reminder)
         3. [Censoring assistance with malicious activities (System Prompt)](#6213-censoring-assistance-with-malicious-activities-system-prompt)
      2. [Codebase Exploration & Analysis Agents](#622-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#6221-explore-agent-prompt)
         2. [Task tool (Agent Prompt)](#6222-task-tool-agent-prompt)
         3. [Task tool (extra notes) [Agent Prompt]](#6223-task-tool-extra-notes-agent-prompt)
         4. [CLAUDE.md creation (Agent Prompt)](#6224-claudemd-creation-agent-prompt)
         5. [Tool usage (direct search) [System Prompt]](#6225-tool-usage-direct-search-system-prompt)
   3. [Git Operations & Version Control](#63-git-operations-version-control)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#631-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#632-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#633-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#634-bash-git-—-prefer-new-commits-tool-description)
      5. [EnterWorktree (Tool Description)](#635-enterworktree-tool-description)
      6. [Git status (System Prompt)](#636-git-status-system-prompt)
      7. [Quick git commit (Agent Prompt)](#637-quick-git-commit-agent-prompt)
      8. [Quick PR creation (Agent Prompt)](#638-quick-pr-creation-agent-prompt)
      9. [/pr-comments slash command (Agent Prompt)](#639-pr-comments-slash-command-agent-prompt)
      10. [/review-pr slash command (Agent Prompt)](#6310-review-pr-slash-command-agent-prompt)
      11. [Worker instructions (System Prompt)](#6311-worker-instructions-system-prompt)
7. [Output, Analytics, and Knowledge Management](#7-output-analytics-and-knowledge-management)
   1. [Response Formatting and System Notifications](#71-response-formatting-and-system-notifications)
      1. [Output Style, Tone & Response Formatting](#711-output-style-tone-response-formatting)
         1. [Tone and style (concise output — detailed) [System Prompt]](#7111-tone-and-style-concise-output-—-detailed-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#7112-tone-and-style-concise-output-—-short-system-prompt)
         3. [Tone and style (code references) [System Prompt]](#7113-tone-and-style-code-references-system-prompt)
         4. [Output style active (System Reminder)](#7114-output-style-active-system-reminder)
         5. [Output token limit exceeded (System Reminder)](#7115-output-token-limit-exceeded-system-reminder)
         6. [Option previewer (System Prompt)](#7116-option-previewer-system-prompt)
      2. [Resource Monitoring & Budget Tracking](#712-resource-monitoring-budget-tracking)
         1. [Token usage (System Reminder)](#7121-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#7122-usd-budget-system-reminder)
      3. [Miscellaneous System Reminders & Notifications](#713-miscellaneous-system-reminders-notifications)
         1. [Agent mention (System Reminder)](#7131-agent-mention-system-reminder)
         2. [/btw side question (System Reminder)](#7132-btw-side-question-system-reminder)
   2. [Usage Analytics and Learning](#72-usage-analytics-and-learning)
      1. [Usage Analytics & Optimization](#721-usage-analytics-optimization)
         1. [Insights at a glance summary (System Prompt)](#7211-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7212-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7213-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7214-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7215-insights-suggestions-system-prompt)
      2. [Learning & Collaborative Development](#722-learning-collaborative-development)
         1. [Learning mode (System Prompt)](#7221-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7222-learning-mode-insights-system-prompt)
   3. [Documentation and User Intent](#73-documentation-and-user-intent)
      1. [Documentation & Magic Docs Management](#731-documentation-magic-docs-management)
         1. [Update Magic Docs (Agent Prompt)](#7311-update-magic-docs-agent-prompt)
      2. [User Sentiment & Intent Analysis](#732-user-sentiment-intent-analysis)
         1. [User sentiment analysis (Agent Prompt)](#7321-user-sentiment-analysis-agent-prompt)
         2. [Prompt Suggestion Generator v2 (Agent Prompt)](#7322-prompt-suggestion-generator-v2-agent-prompt)

---

## 1. Bash and Shell Command Operations

Everything governing how bash commands are written, executed, secured, and managed — from syntax conventions and background task handling to sandbox enforcement and injection detection.

### 1.1 Bash Tool Configuration & Best Practices

Guidance for writing effective bash commands, including syntax conventions (quoting paths, chaining with && or ;), working directory management with absolute paths, and preferring dedicated tools (Read, Write, Edit, Glob, Grep) over bash equivalents for better user experience and permission transparency.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

#### 1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs Claude to write clear, concise descriptions for bash commands, keeping simple ones brief and providing context for complex piped or obscure commands.

#### 1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain the current working directory by using absolute paths and avoiding cd commands unless explicitly requested.

#### 1.1.4 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Directs Claude not to use newlines to separate bash commands, except within quoted strings.

#### 1.1.5 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to make multiple Bash tool calls in parallel when commands are independent, improving efficiency.

#### 1.1.6 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands using `&&` in a single bash call to ensure sequential execution with failure handling.

#### 1.1.7 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially but not caring if earlier commands fail.

#### 1.1.8 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs Claude to always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.9 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence with `ls` before creating new directories or files.

#### 1.1.10 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not, with environment initialized from user's profile.

#### 1.1.11 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration for bash commands, specifying maximum and default timeout values in milliseconds.

#### 1.1.12 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Directs Claude to output text directly rather than using echo or printf commands.

#### 1.1.13 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use the Grep tool for content search instead of grep or rg commands.

#### 1.1.14 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool for file editing instead of sed or awk commands.

#### 1.1.15 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use the Glob tool for file search instead of find or ls commands.

#### 1.1.16 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool for file reading instead of cat, head, or tail commands.

#### 1.1.17 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use the Write tool for file writing instead of echo or cat commands.

#### 1.1.18 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and permission review compared to Bash equivalents.

#### 1.1.19 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat, head, tail, sed, awk, or echo commands, preferring dedicated tools instead for better user experience.

### 1.2 Bash Sleep & Background Task Management

Strategies for managing delays and long-running operations: keep sleep durations minimal, use `run_in_background` for extended tasks with system notifications instead of polling, employ check commands for status verification, and diagnose root causes rather than retry in loops.

#### 1.2.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.2.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background`, as the system will notify when they complete.

#### 1.2.3 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Instructs Claude to diagnose root causes of failures rather than retrying in sleep loops.

#### 1.2.4 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

#### 1.2.5 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` for polling rather than sleeping first.

#### 1.2.6 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Instructs Claude to use `run_in_background` for long-running commands instead of sleeping, as the system will notify when complete.

#### 1.2.7 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input. Preferred over bash sleep as it doesn't hold shell processes and supports concurrent execution with other tools.

### 1.3 Bash Sandbox Security & Restrictions

Sandbox enforcement and failure handling: all bash commands run in sandbox by default with mandatory restrictions on sensitive paths and external network access. When sandbox failures occur, immediately retry with sandbox disabled and explain the restriction to the user, treating each command independently.

#### 1.3.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Directs Claude to work with the user to adjust sandbox settings if a command fails due to sandbox restrictions.

#### 1.3.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to default to running commands within the sandbox and only bypass when the user explicitly requests it or evidence of sandbox restriction appears.

#### 1.3.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.3.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that sandbox restrictions are causing command failures.

#### 1.3.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.3.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies operation not permitted errors for file and network operations as evidence of sandbox restrictions.

#### 1.3.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions.

#### 1.3.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

#### 1.3.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure types like missing files or network issues.

#### 1.3.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode with the `dangerouslyDisableSandbox` parameter disabled by policy.

#### 1.3.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Specifies that commands cannot run outside the sandbox under any circumstances.

#### 1.3.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.3.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands, even after running a command with `dangerouslyDisableSandbox: true`.

#### 1.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provides the response header for how to handle sandbox-caused failures.

#### 1.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with `dangerouslyDisableSandbox: true` when a sandbox failure is detected, without asking the user first.

#### 1.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Instructs Claude to use the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` for temporary files in sandbox mode, never `/tmp` directly.

#### 1.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

### 1.4 Bash Command Safety & Analysis

Security and documentation tools for bash commands that detect injection attacks and generate clear command descriptions for CLI operations.

#### 1.4.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions for bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or flag-heavy commands.

#### 1.4.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety validation. Returns the command prefix as a string or 'command_injection_detected' if malicious patterns are found.

---

## 2. File System, Tools, and Lifecycle Hooks

Dedicated filesystem tools for reading, writing, editing, and searching files, alongside permission policies, file state notifications, lifecycle hooks, and tool discovery mechanisms.

### 2.1 Reading, Writing, and Searching Files

Specialized tools that replace bash equivalents for file access, creation, editing, and pattern-based search and discovery.

#### 2.1.1 File System Tools (Read, Write, Edit, Search)

Dedicated tools for filesystem operations replacing bash equivalents: Read for file access (images, PDFs, notebooks), Write for new files or complete rewrites, Edit for precise string replacements, Glob for fast file discovery by pattern, and Grep for content search with regex and filtering.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges for large files), and Jupyter notebooks. Uses absolute paths, supports line offsets and limits, and truncates long lines.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, overwriting existing files. Prefer Edit tool for modifications; use only for new files or complete rewrites. Avoid creating documentation unless explicitly requested.

##### 2.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Tool for exact string replacements in files with guidance on preserving indentation, preferring existing files over new ones, and using `replace_all` for non-unique matches or variable renaming.

##### 2.1.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob syntax like `**/*.js` for finding files by name. Returns results sorted by modification time and works efficiently with any codebase size.

##### 2.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search using ripgrep with full regex support, file filtering by glob or type, and multiple output modes. Supports multiline pattern matching and optimized for correct permissions and access.

##### 2.1.1.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing, inserting, or deleting cell contents. Requires absolute file paths and uses 0-indexed cell numbering for modifying interactive documents.

##### 2.1.1.7 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Use the Read tool instead of cat, head, tail, or sed for file access.

##### 2.1.1.8 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Prefer the Edit tool over sed or awk for file modifications.

##### 2.1.1.9 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool instead of find or ls for file discovery.

##### 2.1.1.10 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool instead of grep or rg for searching file contents.

##### 2.1.1.11 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Use the Write tool to create files instead of cat heredoc or echo redirection.

#### 2.1.2 File State & Modification Notifications

Alerts to changes in file state and boundary conditions, including external modifications, empty files, and read offset violations, ensuring accurate awareness of file contents and preventing unintended overwrites.

##### 2.1.2.1 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

A file was externally modified by user or linter; account for these changes and do not revert unless requested.

##### 2.1.2.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warning that a file exists but contains no content.

##### 2.1.2.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warning that the requested read offset exceeds the file's total line count.

### 2.2 Tool Permissions and Execution Policy

Governs how tools are selected, invoked, and how permission denials are handled gracefully within execution constraints.

#### 2.2.1 Tool Permission & Execution Policy

Governs how tools are invoked within permission constraints, including graceful handling of denials, sequential execution of dependent operations, and strategic tool selection to prioritize specialized tools over general-purpose alternatives.

##### 2.2.1.1 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

When tool execution is denied, attempt reasonable alternatives but avoid malicious workarounds; explain to the user if the capability is essential.

##### 2.2.1.2 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Respect user permission modes; when a tool is denied, adjust approach rather than retrying the same call, and optionally ask the user for clarification.

##### 2.2.1.3 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Maximize efficiency by calling independent tools in parallel, but execute dependent tool calls sequentially when later calls require earlier results.

##### 2.2.1.4 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations; default to dedicated tools when available.

#### 2.2.2 MCP Resource Handling

System indicators for MCP resource states, distinguishing between resources that lack content entirely and those with content that cannot be rendered in readable formats.

##### 2.2.2.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 2.2.2.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it cannot be displayed in a readable format.

### 2.3 Hooks, Tool Discovery, and Skill Invocation

Lifecycle hooks that automate validation and formatting at Claude Code events, plus mechanisms for loading deferred tools and invoking domain-specific skills.

#### 2.3.1 Hooks System & Lifecycle Events

Configurable lifecycle hooks that execute shell commands, evaluations, or agents at Claude Code events (PreToolUse, PostToolUse, SessionStart) to automate validation, formatting, and custom workflows.

##### 2.3.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Configure lifecycle hooks that run shell commands, prompt evaluations, or agents at specific Claude Code events like PreToolUse, PostToolUse, and SessionStart to automate formatting, validation, and custom workflows.

##### 2.3.1.2 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Displays a success message when a hook completes, showing the hook name and its output content.

##### 2.3.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

A hook command failed with a blocking error.

##### 2.3.1.4 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Additional context provided by a hook.

##### 2.3.1.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

A hook stopped continuation with a message.

##### 2.3.1.6 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for hook stopped continuation messages.

##### 2.3.1.7 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and inspecting the codebase to confirm agent task completion.

##### 2.3.1.8 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code and returns JSON indicating whether the condition is met with an optional reason for failure.

#### 2.3.2 Tool Discovery & Skill Invocation

Loads deferred tools on demand and executes specialized domain-specific skills via slash commands. Provides discovery mechanisms for available capabilities and tracks invoked skills within a session.

##### 2.3.2.1 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Loads and searches deferred tools before use. Mandatory prerequisite for accessing tools not immediately available; both query modes load tools for immediate calling.

##### 2.3.2.2 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage guide for ToolSearch covering keyword search, direct selection, and required keyword modes. Explains correct patterns for loading deferred tools and avoiding redundant calls.

##### 2.3.2.3 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation. Invokes skills by name with optional arguments and requires calling this tool before generating responses about skill-related tasks.

##### 2.3.2.4 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute slash commands that invoke user-invocable skills; only invoke skills listed in the tool's user-invocable section.

##### 2.3.2.5 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the current session and reminds Claude to follow their guidelines.

---

## 3. Planning, Task Management, and Session Continuity

Structured workflows for planning before coding, tracking multi-step tasks, preserving session state across conversations, and summarizing progress for continuity.

### 3.1 Planning and Task Execution

A structured planning phase for designing implementation strategies before coding, paired with task lists that track multi-step work through pending, in-progress, and completed states.

#### 3.1.1 Planning Mode & Implementation Workflow

A structured planning phase that freezes execution while Claude explores codebases, designs implementation strategies, and builds approval-ready plans before coding begins. Supports iterative discovery, multi-agent coordination, and plan continuation across sessions.

##### 3.1.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore the codebase and design implementation approaches for user approval before coding. Use for non-trivial tasks involving new features, multiple approaches, architectural decisions, multi-file changes, or unclear requirements. Requires explicit user consent.

##### 3.1.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning phase and requests user approval of the plan. Use only for implementation tasks requiring code writing, not for research or exploration tasks. Reads plan from file and presents it for review without requiring additional parameters.

##### 3.1.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Activates a structured 5-phase planning workflow with parallel exploration, design review, and multi-agent coordination. Claude must not execute changes, only plan, and must use subagents for exploration and design phases before finalizing the plan and requesting approval.

##### 3.1.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning where Claude explores code, asks clarifying questions, and incrementally builds a plan file through repeated cycles of discovery and user engagement until convergence.

##### 3.1.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagents to read-only operations and plan file editing during plan mode, requiring them to answer queries comprehensively and ask clarifying questions before proceeding.

##### 3.1.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit by reading the existing plan, evaluating whether the new request is a continuation or different task, and updating the plan accordingly.

##### 3.1.1.7 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 3.1.1.8 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Plan mode has ended; you can now edit files, run tools, and take actions.

##### 3.1.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation is finished.

##### 3.1.1.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases, designs implementation plans, identifies critical files, and considers architectural trade-offs. Prohibited from file modifications and outputs step-by-step strategies with 3-5 critical files for implementation.

#### 3.1.2 Task Tracking & Todo Management

Structured task lists that organize multi-step work into tracked states (pending, in-progress, completed), enabling progress visibility and work decomposition for complex coding sessions.

##### 3.1.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with states (pending, in_progress, completed). Tracks multi-step work, requires both imperative and present-continuous task forms, and limits active tasks to one at a time.

##### 3.1.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress and organize multi-step work. Use for complex tasks with 3+ steps, plan mode, or when users provide multiple requirements.

##### 3.1.2.3 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task tracking when relevant, with instruction to never mention this reminder to the user.

##### 3.1.2.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task creation and update tools for tracking progress on relevant work, with instruction to never mention this reminder to the user.

##### 3.1.2.5 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Informs Claude that task output can be checked using the TaskOutput tool.

##### 3.1.2.6 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Use TodoWrite to break down work into tasks, track progress, and mark tasks complete immediately upon finishing.

#### 3.1.3 Task Execution Behavior & User Interaction

Guides task execution through user alignment: clarify ambiguous requirements, defer to user judgment on scope, explore alternatives when blocked, and assess reversibility before destructive operations. Avoids time estimates and confirms high-risk actions unless pre-authorized.

##### 3.1.3.1 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Directive to enable users to complete ambitious tasks by deferring to user judgment on scope rather than imposing artificial limitations.

##### 3.1.3.2 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instruction to consider alternative approaches when blocked instead of brute-forcing, including asking users for guidance.

##### 3.1.3.3 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Directive to inform users about help and feedback channels when requested.

##### 3.1.3.4 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Directive to avoid giving time estimates or predictions, focusing instead on what needs to be done.

##### 3.1.3.5 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Carefully assess reversibility and blast radius of actions; confirm destructive or hard-to-reverse operations with the user before proceeding, unless explicitly authorized in advance. Investigate unexpected state rather than deleting it.

##### 3.1.3.6 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use the AskUserQuestion tool to gather user preferences, clarify ambiguous instructions, and offer implementation choices during execution. In plan mode, use it to clarify requirements before finalizing the plan, not to ask for plan approval.

### 3.2 Session State and Summarization

Preserves context across sessions through memory files and structured conversation summaries, with session lifecycle management including title generation and search.

#### 3.2.1 Session Memory & Context Management

Preserves session state across conversations through structured memory files documenting task progress, codebase learnings, and workflow context. Handles context compaction, file truncation, and cross-machine session continuation.

##### 3.2.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, including type description.

##### 3.2.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Shows the contents of a nested memory file structure.

##### 3.2.1.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory may have changed.

##### 3.2.1.4 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

A previously read file was too large to include in context; use the Read tool to access it if needed.

##### 3.2.1.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

A large file was truncated to a maximum line limit; use the Read tool to access additional content if needed.

##### 3.2.1.6 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for generating structured continuation summaries when context windows are compacted, enabling efficient task resumption across sessions.

##### 3.2.1.7 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

##### 3.2.1.8 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files documenting current state, task specification, files, workflow, errors, codebase documentation, learnings, and worklogs.

##### 3.2.1.9 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by preserving exact structure with headers and italic section descriptions while adding detailed, info-dense content below each section. Maintains token limits per section and focuses on actionable, specific information for work continuity.

##### 3.2.1.10 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects up to five relevant memory files from available options based on user query, returning only filenames that will clearly help Claude Code process the request.

##### 3.2.1.11 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

#### 3.2.2 Conversation & Session Summarization

Structured summarization of conversations and tool usage organized by technical concepts, code changes, errors, and pending tasks, with concise action tracking for agent progress and tool outcomes.

##### 3.2.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections: primary request, technical concepts, files and code sections, errors and fixes, problem solving, all user messages, pending tasks, current work, and next steps. Includes analysis tags and emphasizes technical accuracy with full code snippets and file edits.

##### 3.2.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, organized into nine sections covering requests, technical concepts, files, errors, problem solving, user messages, pending tasks, current work, and next steps with full code snippets and technical accuracy.

##### 3.2.2.3 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt for generating concise 3-5 word action summaries in present tense to track agent progress without using tools.

##### 3.2.2.4 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Generate brief, past-tense summaries of tool usage outcomes in under 8 words, focusing on user-visible results without implementation details or self-reference.

#### 3.2.3 Session Management & Search

Session lifecycle management including title and git branch generation, relevance-based session discovery through tag and content matching, and terminal status line configuration from shell settings.

##### 3.2.3.1 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, lowercase with dashes, prefixed with 'claude/') from session descriptions.

##### 3.2.3.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user queries by prioritizing exact tag matches, then partial tags, titles, branches, and transcript content. Returns JSON array of relevant session indices ordered by relevance, being inclusive to avoid missing related sessions.

##### 3.2.3.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting and converting PS1 shell configurations, handling ANSI color codes, and updating settings.json with shell commands that receive JSON input containing session, model, workspace, context window, and optional vim/agent metadata.

---

## 4. Multi-Agent Systems and Coordination

Orchestration of agent teams, sub-agent delegation, and the SDKs and architectural patterns used to build and deploy custom AI agents.

### 4.1 Multi-Agent Coordination & Team Swarms

Orchestrates teams of specialized sub-agents that work autonomously on independent work units, communicate via structured messaging, and coordinate through shared task lists. Enables parallelized codebase changes across isolated worktrees with automatic cleanup.

#### 4.1.1 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents to handle complex tasks autonomously. Supports foreground and background execution, agent resumption with context preservation, and optional worktree isolation for repository work.

#### 4.1.2 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Creates and manages teams for coordinating multiple agents on complex projects. Establishes team files, task lists, and workflows for spawning teammates, assigning tasks, and managing idle states with automatic message delivery.

#### 4.1.3 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories when swarm work is complete. Cleans up team resources at `~/.claude/teams/{team-name}/` and `~/.claude/tasks/{team-name}/` after all teammates have shut down.

#### 4.1.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to teammates and handles protocol requests/responses in swarms. Supports direct messages, broadcasts, shutdown requests, and plan approval responses with structured JSON payloads.

#### 4.1.5 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from the shared task list. Teammates check for pending unblocked tasks, prefer lowest ID order, and notify team lead if blocked.

#### 4.1.6 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and coordination protocols including task list management and teammate communication by name rather than UUID.

#### 4.1.7 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to gracefully shut down all team members and clean up before providing a final response in non-interactive mode.

#### 4.1.8 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Use SendMessage tool with message or broadcast types to communicate with teammates in agent swarms; text responses are not visible to other agents.

#### 4.1.9 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use the Task tool with specialized subagents for parallelizing independent queries and protecting context, but avoid redundant work and excessive delegation.

#### 4.1.10 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Use the Task tool with exploration subagents for broad codebase research when simple directed searches are insufficient or will exceed query limits.

#### 4.1.11 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes across 5-30 independent work units. Conducts research and planning in plan mode, decomposes work into self-contained units, determines end-to-end test recipes, then spawns background worker agents in isolated git worktrees to execute changes in parallel.

### 4.2 Agent Design and SDK Implementation

Frameworks for designing agents with defined personas and behavioral boundaries, with language-specific SDK documentation covering MCP integration, hooks, and session management.

#### 4.2.1 Agent SDK Reference & Patterns

Language-specific Agent SDK documentation and implementation patterns for Python and TypeScript, covering core concepts like permission modes, MCP integration, hooks, subagents, and session management with practical code examples.

##### 4.2.1.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, quick start, built-in tools, primary interfaces (query and ClaudeSDKClient), permission system, MCP support, hooks, common options, message types, subagents, and error handling.

##### 4.2.1.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, quick start, built-in tools, permission system, MCP support, in-process tools, hooks, common options, subagents, and best practices.

##### 4.2.1.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Demonstrates Python Agent SDK patterns including basic agents, custom tools via MCP, hooks for behavior customization, subagents, permission modes, error recovery, and session resumption with code examples.

##### 4.2.1.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Provides TypeScript Agent SDK patterns for basic agents, hooks, subagents, MCP server integration, and session resumption with practical code examples.

#### 4.2.2 Agent Architecture & Guidance

Systems for designing and deploying custom AI agents with well-defined personas, behavioral boundaries, and decision frameworks aligned to project standards. Includes guidance on Claude tooling, SDKs, and integration patterns.

##### 4.2.2.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts with behavioral boundaries and decision-making frameworks, and generating concise identifiers. Emphasizes alignment with project-specific standards from CLAUDE.md files and includes structured JSON output with identifier, whenToUse examples, and complete system prompt.

##### 4.2.2.2 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code CLI, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant guides, and providing actionable guidance. Covers installation, hooks, skills, MCP servers, agent configuration, tool use, and cloud integrations.

### 4.3 Skill Creation & Verification

Automated systems for capturing repeatable workflows into reusable skills and validating their correctness. These tools extract process knowledge through structured analysis, generate executable skill definitions with test plans, and verify functionality across web UIs, CLIs, and APIs using deterministic testing strategies.

#### 4.3.1 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Convert repeatable session processes into reusable skills through structured analysis, multi-round user interviews, and SKILL.md generation with detailed step definitions, success criteria, and execution modes.

#### 4.3.2 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically test code changes using Playwright for web UIs, Tmux for CLIs, and HTTP for APIs, including auto-detection, tool setup, authentication handling, and skill generation.

#### 4.3.3 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Verification workflow that discovers verifier skills, analyzes code changes, generates deterministic verification plans, and triggers appropriate verifiers to confirm functionality works correctly with detailed failure reporting.

#### 4.3.4 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Workflow for modifying Claude Code settings.json files, with emphasis on reading existing config before merging changes, handling hooks for automated actions, and managing permissions and environment variables.

#### 4.3.5 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by analyzing debug logs, identifying errors and warnings, and providing concrete fixes or next steps.

---

## 5. Claude API, SDKs, and External Integrations

Reference documentation for the Claude API across multiple languages, tool use implementation patterns, model catalog data, and integrations with GitHub Actions and web/browser tools.

### 5.1 Claude API and Tool Use References

Multi-language SDK references for the Claude API covering client setup, messaging, vision, and streaming, plus complete tool use implementation guides with agentic loop patterns.

#### 5.1.1 Claude API SDK References by Language

Comprehensive SDK references across eight programming languages for the Claude API, covering client initialization, core messaging patterns, vision capabilities, prompt optimization techniques, and cost reduction strategies.

##### 5.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering installation, client setup, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

##### 5.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Full TypeScript SDK reference covering installation, client setup, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

##### 5.1.1.3 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for the Claude API covering installation, client initialization, basic requests, streaming, and manual tool use with JSON schema definitions.

##### 5.1.1.4 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API including installation, client setup, basic requests, streaming, and beta tool runner with automatic schema generation from struct tags.

##### 5.1.1.5 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering installation, client initialization, basic requests, streaming, and beta tool use with annotated classes and automatic tool runner execution.

##### 5.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API with installation, client initialization for standard and cloud providers (Bedrock, Vertex, Foundry), basic requests, and streaming.

##### 5.1.1.7 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including installation, client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

##### 5.1.1.8 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs. workflow vs. agent), architecture overview, current models, thinking/effort parameters, and compaction for long conversations.

##### 5.1.1.9 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Quick navigation template for language-specific Claude API reference documentation with task-based routing to relevant sections for classification, streaming, tool use, batches, and file handling.

#### 5.1.2 Tool Use API Reference & Implementation

Complete tool use implementation guides covering conceptual foundations, language-specific patterns with schema frameworks, agentic loops, code execution, file handling, streaming integration, and asynchronous batch processing.

##### 5.1.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Comprehensive guide to tool use with the Claude API covering user-defined tools, server-side tools (code execution, web search, computer use), tool choice strategies, structured outputs, and best practices for effective tool integration.

##### 5.1.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python-specific tool use implementation guide covering the tool runner (beta), manual agentic loops, code execution with file uploads, container reuse, memory tool integration, and structured outputs with Pydantic schemas.

##### 5.1.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript-specific tool use implementation guide covering the tool runner with Zod schemas, manual loops with streaming support, code execution, file handling, memory tool integration, and structured outputs.

##### 5.1.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering quick start, handling text/thinking/tool-use content, getting final messages, progress tracking, error handling, and stream event types.

##### 5.1.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including quick start, handling different content types, tool runner streaming, final message retrieval, event types, and best practices for web UIs.

##### 5.1.2.6 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for processing Messages API requests asynchronously at 50% cost, covering batch creation, polling, result retrieval, cancellation, and prompt caching integration.

##### 5.1.2.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages (PDFs and images), file management (list, retrieve, delete, download), and end-to-end examples with reusable file IDs.

##### 5.1.2.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages, and managing files (list, delete, download) with beta API support.

#### 5.1.3 Claude Model Catalog & API Infrastructure

Reference data for Claude models, API error handling, and live documentation sources, providing model identifiers, context specifications, HTTP status resolution, and access to current platform documentation.

##### 5.1.3.1 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact model IDs, aliases, context windows, max output tokens, and user request resolution mapping.

##### 5.1.3.2 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with causes, fixes, and typed exception handling for Python and TypeScript SDKs.

##### 5.1.3.3 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories, with extraction prompts for fetching latest information.

### 5.2 Web, Browser, and External Data Tools

Chrome-based browser automation for mouse/keyboard interaction and screenshots, real-time web search with source attribution, and HTML-to-markdown content extraction.

#### 5.2.1 Browser Automation & Web Interaction

Chrome-based browser control enabling precise mouse and keyboard interaction, element inspection, and screenshot capture. Covers tool loading via MCP, action parameters for clicks and typing, and best practices for debugging, tab management, and avoiding automation failures.

##### 5.2.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Chrome browser automation tool for mouse and keyboard interaction, screenshot capture, and tab management. Emphasizes precise cursor positioning on element centers and consulting screenshots before clicking.

##### 5.2.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for Chrome browser tool including clicks, typing, scrolling, keyboard input, and element inspection via zoom and scroll-to operations.

##### 5.2.1.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use to enable browser automation capabilities.

##### 5.2.1.4 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for effective browser automation using Claude in Chrome tools, covering GIF recording, console debugging, alert handling, tab context management, and avoiding loops and failures.

#### 5.2.2 Web Search & Content Fetching

Real-time web search and content extraction with source attribution. Fetches and converts HTML to markdown, caches results, and summarizes verbose content while enforcing citation standards and respecting licensing constraints.

##### 5.2.2.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff. Requires mandatory Sources section in responses listing all relevant URLs as markdown hyperlinks.

##### 5.2.2.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a small model. Includes 15-minute cache, handles redirects, and prefers MCP-provided alternatives when available.

##### 5.2.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and citation practices for untrusted domains while respecting open-source licenses.

### 5.3 CI/CD and IDE Integration

GitHub Actions workflows that trigger Claude Code on pull requests and issues, plus IDE integration providing real-time awareness of user context and language server navigation.

#### 5.3.1 GitHub Actions & CI/CD Integration

Automated workflows that trigger Claude Code analysis when mentioned in GitHub issues, pull requests, or comments, with templates for installation and configuration of the GitHub App integration.

##### 5.3.1.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, PRs, or comments, with configurable permissions and optional custom prompts.

##### 5.3.1.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security, and how to trigger Claude via @claude mentions.

#### 5.3.2 IDE Integration & Code Navigation

Provides real-time awareness of user interactions within the IDE and enables programmatic code exploration through language server capabilities, allowing navigation of symbols, references, and type information across projects.

##### 5.3.2.1 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in the IDE, providing the filename and line range for context.

##### 5.3.2.2 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

User opened a file in the IDE; this may or may not relate to the current task.

##### 5.3.2.3 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to new diagnostic issues detected in the codebase or environment.

##### 5.3.2.4 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interacts with Language Server Protocol servers to provide code intelligence features including symbol navigation, references, hover information, and call hierarchy analysis across files and workspaces.

---

## 6. Code Quality, Security, and Version Control

Engineering practices for writing clean, secure code; security review and vulnerability assessment tools; codebase exploration agents; and git workflows with safety protocols.

### 6.1 Code Quality, Refactoring & Engineering Practices

Engineering discipline emphasizing simplicity, security, and pragmatism: avoid premature abstractions and unnecessary features, delete unused code rather than shim it, validate only at system boundaries, and review code before modification. Includes parallel code review workflow identifying reuse opportunities, quality issues, and efficiency problems.

#### 6.1.1 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Guideline to keep solutions simple and focused by only making directly requested or clearly necessary changes.

#### 6.1.2 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Guideline to avoid creating abstractions for one-time operations or hypothetical requirements, keeping complexity minimal.

#### 6.1.3 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Directive to delete unused code completely rather than adding compatibility shims or re-exports.

#### 6.1.4 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Guideline to avoid adding features, refactoring, or improvements beyond what was explicitly requested.

#### 6.1.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Avoid adding error handling for impossible scenarios; trust internal code guarantees and only validate at system boundaries like user input and external APIs.

#### 6.1.6 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Read and understand existing code before proposing any modifications or changes.

#### 6.1.7 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Prioritize writing secure code by avoiding injection attacks, XSS, SQL injection, and other OWASP top 10 vulnerabilities.

#### 6.1.8 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Interpret user requests as software engineering tasks like bug fixes, refactoring, and feature additions, applying context from the working directory to generic instructions.

#### 6.1.9 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Guideline to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

#### 6.1.10 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review workflow that launches three parallel agents to identify code reuse opportunities, quality issues (redundant state, parameter sprawl, leaky abstractions), and efficiency problems (unnecessary work, missed concurrency, memory leaks).

### 6.2 Security Review and Codebase Analysis

Security assessment tools for identifying vulnerabilities and analyzing malware, alongside read-only agents that explore codebases to answer architectural questions and generate documentation.

#### 6.2.1 Security Review & Malware Analysis

Security assessment tools that identify exploitable vulnerabilities in code changes, analyze malware behavior, and enforce authorization boundaries for security testing while preventing assistance with malicious activities.

##### 6.2.1.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities across input validation, authentication, cryptography, injection, and data exposure categories. Minimizes false positives, excludes DOS and secrets-on-disk issues, and outputs markdown reports with severity, exploit scenarios, and recommendations.

##### 6.2.1.2 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but strictly prohibits improving, augmenting, or enhancing malicious code while allowing analysis, reporting, and behavior documentation.

##### 6.2.1.3 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Security guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing malicious activities like DoS attacks and supply chain compromise.

#### 6.2.2 Codebase Exploration & Analysis Agents

Read-only agents that search and analyze codebases using pattern matching and file inspection to answer architectural questions, execute multi-step investigations, and generate developer documentation capturing build commands, architecture, and conventions.

##### 6.2.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only codebase exploration specialist using glob patterns, regex grep, and file reading to rapidly search code, analyze architecture, and answer questions about codebases. Strictly prohibited from creating, modifying, or deleting files.

##### 6.2.2.2 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

General-purpose subagent for researching complex questions, searching code patterns, and executing multi-step tasks across large codebases. Specialized in file searches, architecture analysis, and code investigation while avoiding unnecessary file creation.

##### 6.2.2.3 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Supplementary guidelines for Task tool usage emphasizing absolute file paths, no emojis, no colons before tool calls, and sharing relevant file names and code snippets in responses.

##### 6.2.2.4 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files capturing common build/test/lint commands, high-level architecture, and development conventions. Incorporates existing Cursor rules and README content while avoiding generic practices and obvious instructions.

##### 6.2.2.5 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Use Glob or Grep tools directly for simple, targeted codebase searches.

### 6.3 Git Operations & Version Control

Comprehensive git workflow including commit creation, pull request management, and code review. Enforces safety protocols: never skip hooks or force-push, create new commits rather than amend, avoid destructive operations without alternatives, and integrate with GitHub CLI and optional Slack notifications.

#### 6.3.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Directs Claude to consider safer alternatives to destructive git operations like reset --hard, push --force, and checkout before executing them.

#### 6.3.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests, including safety protocols, hook handling, commit message drafting, and PR creation with gh command. Emphasizes never committing without explicit user request, avoiding destructive operations, and creating new commits rather than amending.

#### 6.3.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude never to skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues if hooks fail.

#### 6.3.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Directs Claude to prefer creating new commits over amending existing ones.

#### 6.3.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, only when explicitly requested by the user. Works in git repositories or with VCS-agnostic hooks, creating worktrees in `.claude/worktrees/` with optional custom names.

#### 6.3.6 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Display current git branch, main branch reference, repository status, and recent commits at conversation start.

#### 6.3.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context from git status and diff. Analyzes staged changes, drafts commit messages following repository conventions, and executes commit using heredoc syntax while enforcing safety protocols against amending, skipping hooks, or committing secrets.

#### 6.3.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated context, handling branch creation, commit composition, push, and PR creation or update via GitHub CLI. Includes safety protocols against force push and secret commits, and optionally posts PR URLs to Slack if configured in CLAUDE.md.

#### 6.3.9 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and code review comments with file paths, line numbers, and diff hunks in a formatted, readable structure.

#### 6.3.10 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by analyzing diffs and providing thorough code review covering quality, style, improvements, risks, correctness, conventions, performance, test coverage, and security considerations.

#### 6.3.11 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

After implementing changes, simplify code, run unit tests, perform end-to-end testing, commit and push via git, then report the PR URL or explain why no PR was created.

---

## 7. Output, Analytics, and Knowledge Management

Response formatting standards, resource monitoring, usage analytics, documentation maintenance, and tools for understanding user sentiment and intent.

### 7.1 Response Formatting and System Notifications

Presentation standards for concise, structured responses alongside resource budget tracking and system-level routing directives.

#### 7.1.1 Output Style, Tone & Response Formatting

Defines presentation standards for responses, emphasizing conciseness, clarity, and structured formatting conventions like line-number references and preview layouts to enhance readability and usability.

##### 7.1.1.1 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Deliver polished, concise output without filler, repetition, or inner monologue; present only final thoughts while preserving important information.

##### 7.1.1.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Keep responses short and concise.

##### 7.1.1.3 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Include file_path:line_number pattern when referencing specific code locations to enable easy navigation.

##### 7.1.1.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that a specific output style is active and reminds it to follow the style's guidelines.

##### 7.1.1.5 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Warns Claude that its response was truncated due to exceeding the output token limit and instructs it to break work into smaller pieces.

##### 7.1.1.6 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enable side-by-side preview layout for single-select questions with markdown artifacts like ASCII mockups, code snippets, or diagrams.

#### 7.1.2 Resource Monitoring & Budget Tracking

Tracks consumption of computational and financial resources, displaying real-time token usage and cost metrics to maintain awareness of operational constraints.

##### 7.1.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 7.1.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing used, total, and remaining budget amounts.

#### 7.1.3 Miscellaneous System Reminders & Notifications

Routes system-level directives to the agent layer, including explicit agent invocations and contextual instructions for handling tangential questions without tool invocation.

##### 7.1.3.1 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

User has requested invocation of a specific agent; invoke it with required context.

##### 7.1.3.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer side questions directly without tools, using only conversation context; do not offer to investigate or take actions.

### 7.2 Usage Analytics and Learning

Data-driven analysis of Claude Code usage patterns to surface friction and recommend improvements, paired with collaborative educational frameworks that involve humans in design decisions.

#### 7.2.1 Usage Analytics & Optimization

Data-driven analysis of Claude Code usage patterns to identify what works, surface friction points, and recommend workflow improvements. Extracts structured insights from session data to guide feature adoption and uncover opportunities for autonomous development.

##### 7.2.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generate a concise 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for improved Claude Code usage.

##### 7.2.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyze usage data to identify and categorize friction patterns with specific examples and explanations of what could be done differently.

##### 7.2.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identify ambitious future workflows and autonomous AI-assisted development opportunities based on usage data and emerging capabilities.

##### 7.2.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extract structured facets from session transcripts including goal categories, user satisfaction signals, and friction points with specific categorization rules.

##### 7.2.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generate actionable suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns based on session analysis.

#### 7.2.2 Learning & Collaborative Development

Educational frameworks that deepen understanding by involving humans in design decisions while AI handles implementation, paired with contextual code explanations that teach codebase-specific patterns.

##### 7.2.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enable collaborative learning by requesting human contributions for design decisions and business logic while handling routine implementation, with optional TodoList integration for task tracking.

##### 7.2.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provide brief educational insights before and after writing code to encourage learning through codebase-specific implementation explanations.

### 7.3 Documentation and User Intent

Living documentation management that captures architectural insights from conversations, plus user sentiment and intent analysis for proactive agent behavior.

#### 7.3.1 Documentation & Magic Docs Management

Maintains living documentation of codebase state and architectural insights by updating Magic Doc files with conversation learnings, preserving structure while eliminating redundancy and historical cruft.

##### 7.3.1.1 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs Claude to update Magic Doc files with new learnings from conversations, preserving headers and maintaining current state without historical notes. Emphasizes terseness, architecture focus, and avoiding duplication of obvious code information.

#### 7.3.2 User Sentiment & Intent Analysis

Interprets user communication patterns to detect frustration levels and extract actionable intent signals—such as pull request creation requests or predicted next actions—enabling proactive agent behavior.

##### 7.3.2.1 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration and explicit PR creation requests from conversation history, outputting boolean flags for sentiment and GitHub submission intent.

##### 7.3.2.2 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent conversation context, avoiding evaluative language, questions, or Claude-voice suggestions.
