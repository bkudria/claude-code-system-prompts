# Claude Code System Prompts Index

A technical reference for building, configuring, and operating Claude Code across the full development lifecycle — from writing safe shell commands and coordinating multi-agent systems to maintaining code quality, managing sessions, and integrating Claude programmatically into real-world workflows.

## Table of Contents

1. [Bash & Shell Command Execution](#1-bash-shell-command-execution)
   1. [Execution Practices & Patterns](#11-execution-practices-patterns)
      1. [Bash Command Execution Best Practices](#111-bash-command-execution-best-practices)
         1. [Bash (semicolon usage) [Tool Description]](#1111-bash-semicolon-usage-tool-description)
         2. [Bash (sequential commands) [Tool Description]](#1112-bash-sequential-commands-tool-description)
         3. [Bash (sleep — keep short) [Tool Description]](#1113-bash-sleep-—-keep-short-tool-description)
         4. [Bash (sleep — no polling background tasks) [Tool Description]](#1114-bash-sleep-—-no-polling-background-tasks-tool-description)
         5. [Bash (sleep — no retry loops) [Tool Description]](#1115-bash-sleep-—-no-retry-loops-tool-description)
         6. [Bash (sleep — run immediately) [Tool Description]](#1116-bash-sleep-—-run-immediately-tool-description)
         7. [Bash (sleep — use check commands) [Tool Description]](#1117-bash-sleep-—-use-check-commands-tool-description)
         8. [Bash (sleep — use run_in_background) [Tool Description]](#1118-bash-sleep-—-use-run_in_background-tool-description)
         9. [Bash (timeout) [Tool Description]](#1119-bash-timeout-tool-description)
         10. [Bash (verify parent directory) [Tool Description]](#11110-bash-verify-parent-directory-tool-description)
         11. [Bash (working directory) [Tool Description]](#11111-bash-working-directory-tool-description)
         12. [Bash (maintain cwd) [Tool Description]](#11112-bash-maintain-cwd-tool-description)
         13. [Bash (no newlines) [Tool Description]](#11113-bash-no-newlines-tool-description)
         14. [Bash (parallel commands) [Tool Description]](#11114-bash-parallel-commands-tool-description)
         15. [Bash (quote file paths) [Tool Description]](#11115-bash-quote-file-paths-tool-description)
         16. [Bash (command description) [Tool Description]](#11116-bash-command-description-tool-description)
         17. [Bash (overview) [Tool Description]](#11117-bash-overview-tool-description)
      2. [Bash Tool Alternatives & Preferred Tools](#112-bash-tool-alternatives-preferred-tools)
         1. [Bash (alternative — communication) [Tool Description]](#1121-bash-alternative-—-communication-tool-description)
         2. [Bash (alternative — content search) [Tool Description]](#1122-bash-alternative-—-content-search-tool-description)
         3. [Bash (alternative — edit files) [Tool Description]](#1123-bash-alternative-—-edit-files-tool-description)
         4. [Bash (alternative — file search) [Tool Description]](#1124-bash-alternative-—-file-search-tool-description)
         5. [Bash (alternative — read files) [Tool Description]](#1125-bash-alternative-—-read-files-tool-description)
         6. [Bash (alternative — write files) [Tool Description]](#1126-bash-alternative-—-write-files-tool-description)
         7. [Bash (built-in tools note) [Tool Description]](#1127-bash-built-in-tools-note-tool-description)
         8. [Bash (prefer dedicated tools) [Tool Description]](#1128-bash-prefer-dedicated-tools-tool-description)
   2. [Sandbox Security & Isolation](#12-sandbox-security-isolation)
      1. [Bash Sandbox Security & Behavior](#121-bash-sandbox-security-behavior)
         1. [Bash (sandbox — evidence list header) [Tool Description]](#1211-bash-sandbox-—-evidence-list-header-tool-description)
         2. [Bash (sandbox — evidence: network failures) [Tool Description]](#1212-bash-sandbox-—-evidence-network-failures-tool-description)
         3. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1213-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
         4. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1214-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
         5. [Bash (sandbox — explain restriction) [Tool Description]](#1215-bash-sandbox-—-explain-restriction-tool-description)
         6. [Bash (sandbox — failure evidence condition) [Tool Description]](#1216-bash-sandbox-—-failure-evidence-condition-tool-description)
         7. [Bash (sandbox — mandatory mode) [Tool Description]](#1217-bash-sandbox-—-mandatory-mode-tool-description)
         8. [Bash (sandbox — no exceptions) [Tool Description]](#1218-bash-sandbox-—-no-exceptions-tool-description)
         9. [Bash (sandbox — no sensitive paths) [Tool Description]](#1219-bash-sandbox-—-no-sensitive-paths-tool-description)
         10. [Bash (sandbox — per-command) [Tool Description]](#12110-bash-sandbox-—-per-command-tool-description)
         11. [Bash (sandbox — response header) [Tool Description]](#12111-bash-sandbox-—-response-header-tool-description)
         12. [Bash (sandbox — retry without sandbox) [Tool Description]](#12112-bash-sandbox-—-retry-without-sandbox-tool-description)
         13. [Bash (sandbox — tmpdir) [Tool Description]](#12113-bash-sandbox-—-tmpdir-tool-description)
         14. [Bash (sandbox — user permission prompt) [Tool Description]](#12114-bash-sandbox-—-user-permission-prompt-tool-description)
         15. [Bash (sandbox — adjust settings) [Tool Description]](#12115-bash-sandbox-—-adjust-settings-tool-description)
         16. [Bash (sandbox — default to sandbox) [Tool Description]](#12116-bash-sandbox-—-default-to-sandbox-tool-description)
         17. [Bash (sandbox — evidence: access denied) [Tool Description]](#12117-bash-sandbox-—-evidence-access-denied-tool-description)
      2. [Scratchpad & Temporary File Management](#122-scratchpad-temporary-file-management)
         1. [Scratchpad directory (System Prompt)](#1221-scratchpad-directory-system-prompt)
   3. [Bash Command Analysis Agents](#13-bash-command-analysis-agents)
      1. [Bash command description writer (Agent Prompt)](#131-bash-command-description-writer-agent-prompt)
      2. [Bash command file path extraction (Agent Prompt)](#132-bash-command-file-path-extraction-agent-prompt)
2. [Tools, Permissions & Lifecycle Automation](#2-tools-permissions-lifecycle-automation)
   1. [Tool Selection & Built-in Capabilities](#21-tool-selection-built-in-capabilities)
      1. [Tool Selection & Usage Policy](#211-tool-selection-usage-policy)
         1. [Tool usage (create files) [System Prompt]](#2111-tool-usage-create-files-system-prompt)
         2. [Tool usage (delegate exploration) [System Prompt]](#2112-tool-usage-delegate-exploration-system-prompt)
         3. [Tool usage (direct search) [System Prompt]](#2113-tool-usage-direct-search-system-prompt)
         4. [Tool usage (edit files) [System Prompt]](#2114-tool-usage-edit-files-system-prompt)
         5. [Tool usage (read files) [System Prompt]](#2115-tool-usage-read-files-system-prompt)
         6. [Tool usage (reserve Bash) [System Prompt]](#2116-tool-usage-reserve-bash-system-prompt)
         7. [Tool usage (search content) [System Prompt]](#2117-tool-usage-search-content-system-prompt)
         8. [Tool usage (search files) [System Prompt]](#2118-tool-usage-search-files-system-prompt)
         9. [Tool usage (skill invocation) [System Prompt]](#2119-tool-usage-skill-invocation-system-prompt)
         10. [Tool usage (subagent guidance) [System Prompt]](#21110-tool-usage-subagent-guidance-system-prompt)
         11. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#21111-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         12. [Tool Use Summary Generation (System Prompt)](#21112-tool-use-summary-generation-system-prompt)
      2. [Core Tool Descriptions](#212-core-tool-descriptions)
         1. [Edit (Tool Description)](#2121-edit-tool-description)
         2. [Glob (Tool Description)](#2122-glob-tool-description)
         3. [Grep (Tool Description)](#2123-grep-tool-description)
         4. [ReadFile (Tool Description)](#2124-readfile-tool-description)
         5. [Write (Tool Description)](#2125-write-tool-description)
         6. [WebFetch (Tool Description)](#2126-webfetch-tool-description)
         7. [WebSearch (Tool Description)](#2127-websearch-tool-description)
         8. [Task (Tool Description)](#2128-task-tool-description)
         9. [Sleep (Tool Description)](#2129-sleep-tool-description)
         10. [Skill (Tool Description)](#21210-skill-tool-description)
         11. [LSP (Tool Description)](#21211-lsp-tool-description)
         12. [NotebookEdit (Tool Description)](#21212-notebookedit-tool-description)
         13. [AskUserQuestion (Tool Description)](#21213-askuserquestion-tool-description)
         14. [ToolSearch (Tool Description)](#21214-toolsearch-tool-description)
         15. [ToolSearch extended (Tool Description)](#21215-toolsearch-extended-tool-description)
         16. [EnterWorktree (Tool Description)](#21216-enterworktree-tool-description)
   2. [Permission Handling & Hook System](#22-permission-handling-hook-system)
      1. [Tool Permission & Denial Handling](#221-tool-permission-denial-handling)
         1. [Tool execution denied (System Prompt)](#2211-tool-execution-denied-system-prompt)
         2. [Tool permission mode (System Prompt)](#2212-tool-permission-mode-system-prompt)
      2. [Hook System & Lifecycle Events](#222-hook-system-lifecycle-events)
         1. [Hook stopped continuation (System Reminder)](#2221-hook-stopped-continuation-system-reminder)
         2. [Hook success (System Reminder)](#2222-hook-success-system-reminder)
         3. [Hook additional context (System Reminder)](#2223-hook-additional-context-system-reminder)
         4. [Hook blocking error (System Reminder)](#2224-hook-blocking-error-system-reminder)
         5. [Hook JSON validation failed (System Reminder)](#2225-hook-json-validation-failed-system-reminder)
         6. [Hook stopped continuation prefix (System Reminder)](#2226-hook-stopped-continuation-prefix-system-reminder)
         7. [Hooks Configuration (System Prompt)](#2227-hooks-configuration-system-prompt)
         8. [Hook condition evaluator (Agent Prompt)](#2228-hook-condition-evaluator-agent-prompt)
         9. [Agent Hook (Agent Prompt)](#2229-agent-hook-agent-prompt)
   3. [Browser & Web Automation](#23-browser-web-automation)
      1. [Browser Automation](#231-browser-automation)
         1. [Computer (Tool Description)](#2311-computer-tool-description)
         2. [Computer action (Tool Parameter)](#2312-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#2313-claude-in-chrome-browser-automation-system-prompt)
      2. [MCP Resource Handling](#232-mcp-resource-handling)
         1. [MCP resource no content (System Reminder)](#2321-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#2322-mcp-resource-no-displayable-content-system-reminder)
         3. [Chrome browser MCP tools (System Prompt)](#2323-chrome-browser-mcp-tools-system-prompt)
3. [Agent Systems & Multi-Agent Coordination](#3-agent-systems-multi-agent-coordination)
   1. [Multi-Agent Team Coordination](#31-multi-agent-team-coordination)
      1. [Team Coordination (System Reminder)](#311-team-coordination-system-reminder)
      2. [Team Shutdown (System Reminder)](#312-team-shutdown-system-reminder)
      3. [SendMessageTool (Tool Description)](#313-sendmessagetool-tool-description)
      4. [TeammateTool (Tool Description)](#314-teammatetool-tool-description)
      5. [TeamDelete (Tool Description)](#315-teamdelete-tool-description)
      6. [TaskList (teammate workflow) [Tool Description]](#316-tasklist-teammate-workflow-tool-description)
      7. [Teammate Communication (System Prompt)](#317-teammate-communication-system-prompt)
   2. [Agent Design & SDK](#32-agent-design-sdk)
      1. [Agent Design & Orchestration](#321-agent-design-orchestration)
         1. [Agent creation architect (Agent Prompt)](#3211-agent-creation-architect-agent-prompt)
         2. [Task tool (Agent Prompt)](#3212-task-tool-agent-prompt)
         3. [Task tool (extra notes) [Agent Prompt]](#3213-task-tool-extra-notes-agent-prompt)
         4. [Agent Summary Generation (System Prompt)](#3214-agent-summary-generation-system-prompt)
      2. [Agent SDK Reference & Patterns](#322-agent-sdk-reference-patterns)
         1. [Agent SDK patterns — Python (Data)](#3221-agent-sdk-patterns-—-python-data)
         2. [Agent SDK patterns — TypeScript (Data)](#3222-agent-sdk-patterns-—-typescript-data)
         3. [Agent SDK reference — Python (Data)](#3223-agent-sdk-reference-—-python-data)
         4. [Agent SDK reference — TypeScript (Data)](#3224-agent-sdk-reference-—-typescript-data)
   3. [Specialized Analysis Agents](#33-specialized-analysis-agents)
      1. [Conversation & User Interaction Agents](#331-conversation-user-interaction-agents)
         1. [User sentiment analysis (Agent Prompt)](#3311-user-sentiment-analysis-agent-prompt)
         2. [Prompt Suggestion Generator v2 (Agent Prompt)](#3312-prompt-suggestion-generator-v2-agent-prompt)
         3. [/btw side question (System Reminder)](#3313-btw-side-question-system-reminder)
         4. [Agent mention (System Reminder)](#3314-agent-mention-system-reminder)
      2. [Codebase Exploration & Analysis Agents](#332-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#3321-explore-agent-prompt)
         2. [CLAUDE.md creation (Agent Prompt)](#3322-claudemd-creation-agent-prompt)
         3. [Update Magic Docs (Agent Prompt)](#3323-update-magic-docs-agent-prompt)
      3. [Verification & Testing Skills](#333-verification-testing-skills)
         1. [Create verifier skills (Skill)](#3331-create-verifier-skills-skill)
         2. [Verification specialist (Skill)](#3332-verification-specialist-skill)
         3. [Debugging (Skill)](#3333-debugging-skill)
   4. [File Operations & IDE Context](#34-file-operations-ide-context)
      1. [File exists but empty (System Reminder)](#341-file-exists-but-empty-system-reminder)
      2. [File modified by user or linter (System Reminder)](#342-file-modified-by-user-or-linter-system-reminder)
      3. [File opened in IDE (System Reminder)](#343-file-opened-in-ide-system-reminder)
      4. [File shorter than offset (System Reminder)](#344-file-shorter-than-offset-system-reminder)
      5. [File truncated (System Reminder)](#345-file-truncated-system-reminder)
      6. [Compact file reference (System Reminder)](#346-compact-file-reference-system-reminder)
      7. [Lines selected in IDE (System Reminder)](#347-lines-selected-in-ide-system-reminder)
      8. [New diagnostics detected (System Reminder)](#348-new-diagnostics-detected-system-reminder)
4. [Session Management, Planning & Task Tracking](#4-session-management-planning-task-tracking)
   1. [Context & Memory Persistence](#41-context-memory-persistence)
      1. [Session & Context Management](#411-session-context-management)
         1. [Session continuation (System Reminder)](#4111-session-continuation-system-reminder)
         2. [Memory file contents (System Reminder)](#4112-memory-file-contents-system-reminder)
         3. [Nested memory contents (System Reminder)](#4113-nested-memory-contents-system-reminder)
         4. [Context compaction summary (System Prompt)](#4114-context-compaction-summary-system-prompt)
         5. [Conversation summarization (Agent Prompt)](#4115-conversation-summarization-agent-prompt)
         6. [Recent Message Summarization (Agent Prompt)](#4116-recent-message-summarization-agent-prompt)
         7. [Session memory update instructions (Agent Prompt)](#4117-session-memory-update-instructions-agent-prompt)
         8. [Memory selection (Agent Prompt)](#4118-memory-selection-agent-prompt)
         9. [Session memory template (Data)](#4119-session-memory-template-data)
         10. [Agent memory instructions (System Prompt)](#41110-agent-memory-instructions-system-prompt)
      2. [Session Metadata & Organization](#412-session-metadata-organization)
         1. [Session title and branch generation (Agent Prompt)](#4121-session-title-and-branch-generation-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#4122-session-search-assistant-agent-prompt)
         3. [Invoked skills (System Reminder)](#4123-invoked-skills-system-reminder)
   2. [Plan Mode & Task Workflows](#42-plan-mode-task-workflows)
      1. [Plan Mode Workflow](#421-plan-mode-workflow)
         1. [Plan mode is active (5-phase) [System Reminder]](#4211-plan-mode-is-active-5-phase-system-reminder)
         2. [Plan mode is active (iterative) [System Reminder]](#4212-plan-mode-is-active-iterative-system-reminder)
         3. [Plan mode is active (subagent) [System Reminder]](#4213-plan-mode-is-active-subagent-system-reminder)
         4. [Plan mode re-entry (System Reminder)](#4214-plan-mode-re-entry-system-reminder)
         5. [Exited plan mode (System Reminder)](#4215-exited-plan-mode-system-reminder)
         6. [Plan file reference (System Reminder)](#4216-plan-file-reference-system-reminder)
         7. [Verify plan reminder (System Reminder)](#4217-verify-plan-reminder-system-reminder)
         8. [EnterPlanMode (Tool Description)](#4218-enterplanmode-tool-description)
         9. [ExitPlanMode (Tool Description)](#4219-exitplanmode-tool-description)
         10. [Plan mode (enhanced) [Agent Prompt]](#42110-plan-mode-enhanced-agent-prompt)
      2. [Task & Todo Tracking](#422-task-todo-tracking)
         1. [Task status (System Reminder)](#4221-task-status-system-reminder)
         2. [Task tools reminder (System Reminder)](#4222-task-tools-reminder-system-reminder)
         3. [Todo list changed (System Reminder)](#4223-todo-list-changed-system-reminder)
         4. [Todo list empty (System Reminder)](#4224-todo-list-empty-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#4225-todowrite-reminder-system-reminder)
         6. [TodoWrite (Tool Description)](#4226-todowrite-tool-description)
         7. [TaskCreate (Tool Description)](#4227-taskcreate-tool-description)
         8. [Tool usage (task management) [System Prompt]](#4228-tool-usage-task-management-system-prompt)
   3. [Resource & Budget Monitoring](#43-resource-budget-monitoring)
      1. [Token usage (System Reminder)](#431-token-usage-system-reminder)
      2. [USD budget (System Reminder)](#432-usd-budget-system-reminder)
      3. [Output token limit exceeded (System Reminder)](#433-output-token-limit-exceeded-system-reminder)
5. [Claude API, SDK & External Integrations](#5-claude-api-sdk-external-integrations)
   1. [Claude API References & Guidance](#51-claude-api-references-guidance)
      1. [Claude API Reference by Language](#511-claude-api-reference-by-language)
         1. [Claude API reference — C# (Data)](#5111-claude-api-reference-—-c-data)
         2. [Claude API reference — Go (Data)](#5112-claude-api-reference-—-go-data)
         3. [Claude API reference — Java (Data)](#5113-claude-api-reference-—-java-data)
         4. [Claude API reference — PHP (Data)](#5114-claude-api-reference-—-php-data)
         5. [Claude API reference — Python (Data)](#5115-claude-api-reference-—-python-data)
         6. [Claude API reference — Ruby (Data)](#5116-claude-api-reference-—-ruby-data)
         7. [Claude API reference — TypeScript (Data)](#5117-claude-api-reference-—-typescript-data)
         8. [Streaming reference — Python (Data)](#5118-streaming-reference-—-python-data)
         9. [Streaming reference — TypeScript (Data)](#5119-streaming-reference-—-typescript-data)
         10. [Tool use concepts (Data)](#51110-tool-use-concepts-data)
         11. [Tool use reference — Python (Data)](#51111-tool-use-reference-—-python-data)
         12. [Tool use reference — TypeScript (Data)](#51112-tool-use-reference-—-typescript-data)
         13. [Message Batches API reference — Python (Data)](#51113-message-batches-api-reference-—-python-data)
         14. [Files API reference — Python (Data)](#51114-files-api-reference-—-python-data)
         15. [Files API reference — TypeScript (Data)](#51115-files-api-reference-—-typescript-data)
         16. [HTTP error codes reference (Data)](#51116-http-error-codes-reference-data)
         17. [Live documentation sources (Data)](#51117-live-documentation-sources-data)
         18. [Claude model catalog (Data)](#51118-claude-model-catalog-data)
      2. [Build with Claude API Skill](#512-build-with-claude-api-skill)
         1. [Build with Claude API (Skill)](#5121-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#5122-build-with-claude-api-reference-guide-skill)
         3. [Build with Claude API (trigger) [Skill]](#5123-build-with-claude-api-trigger-skill)
         4. [Claude guide agent (Agent Prompt)](#5124-claude-guide-agent-agent-prompt)
   2. [Git Workflow & Safety](#52-git-workflow-safety)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#521-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#522-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#523-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#524-bash-git-—-prefer-new-commits-tool-description)
      5. [Quick git commit (Agent Prompt)](#525-quick-git-commit-agent-prompt)
      6. [Quick PR creation (Agent Prompt)](#526-quick-pr-creation-agent-prompt)
      7. [/pr-comments slash command (Agent Prompt)](#527-pr-comments-slash-command-agent-prompt)
      8. [/review-pr slash command (Agent Prompt)](#528-review-pr-slash-command-agent-prompt)
      9. [Git status (System Prompt)](#529-git-status-system-prompt)
   3. [GitHub & CI/CD Integration](#53-github-cicd-integration)
      1. [GitHub Actions workflow for @claude mentions (Data)](#531-github-actions-workflow-for-claude-mentions-data)
      2. [GitHub App installation PR description (Data)](#532-github-app-installation-pr-description-data)
6. [Code Quality, Security & Development Principles](#6-code-quality-security-development-principles)
   1. [Code Quality & Task Execution Principles](#61-code-quality-task-execution-principles)
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
      11. [Doing tasks (software engineering focus) [System Prompt]](#6111-doing-tasks-software-engineering-focus-system-prompt)
      12. [Doing tasks (help and feedback) [System Prompt]](#6112-doing-tasks-help-and-feedback-system-prompt)
   2. [Security & Safety Guidelines](#62-security-safety-guidelines)
      1. [Doing tasks (security) [System Prompt]](#621-doing-tasks-security-system-prompt)
      2. [Censoring assistance with malicious activities (System Prompt)](#622-censoring-assistance-with-malicious-activities-system-prompt)
      3. [Malware analysis after Read tool call (System Reminder)](#623-malware-analysis-after-read-tool-call-system-reminder)
      4. [Executing actions with care (System Prompt)](#624-executing-actions-with-care-system-prompt)
      5. [/security-review slash command (Agent Prompt)](#625-security-review-slash-command-agent-prompt)
      6. [Bash command prefix detection (Agent Prompt)](#626-bash-command-prefix-detection-agent-prompt)
   3. [Output Style & Communication Standards](#63-output-style-communication-standards)
      1. [Output Style & Tone](#631-output-style-tone)
         1. [Tone and style (code references) [System Prompt]](#6311-tone-and-style-code-references-system-prompt)
         2. [Tone and style (concise output — detailed) [System Prompt]](#6312-tone-and-style-concise-output-—-detailed-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#6313-tone-and-style-concise-output-—-short-system-prompt)
         4. [Output style active (System Reminder)](#6314-output-style-active-system-reminder)
         5. [Option previewer (System Prompt)](#6315-option-previewer-system-prompt)
      2. [Web Content Fetching & Summarization](#632-web-content-fetching-summarization)
         1. [WebFetch summarizer (Agent Prompt)](#6321-webfetch-summarizer-agent-prompt)
7. [Configuration, Workflow Optimization & Learning](#7-configuration-workflow-optimization-learning)
   1. [Claude Code Configuration & Settings](#71-claude-code-configuration-settings)
      1. [Update Claude Code Config (Skill)](#711-update-claude-code-config-skill)
      2. [Status line setup (Agent Prompt)](#712-status-line-setup-agent-prompt)
      3. [Claude Code version mismatch warning (Data)](#713-claude-code-version-mismatch-warning-data)
   2. [Workflow Analysis & Skill Capture](#72-workflow-analysis-skill-capture)
      1. [Usage Insights & Workflow Analysis](#721-usage-insights-workflow-analysis)
         1. [Insights at a glance summary (System Prompt)](#7211-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7212-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7213-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7214-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7215-insights-suggestions-system-prompt)
      2. [Skill Creation & Management](#722-skill-creation-management)
         1. [Skillify Current Session (System Prompt)](#7221-skillify-current-session-system-prompt)
   3. [Learning Mode](#73-learning-mode)
      1. [Learning mode (System Prompt)](#731-learning-mode-system-prompt)
      2. [Learning mode (insights) [System Prompt]](#732-learning-mode-insights-system-prompt)

---

## 1. Bash & Shell Command Execution

Everything governing how bash commands are written, executed, analyzed, and sandboxed — from chaining semantics and async patterns to mandatory security isolation and temporary workspace management.

### 1.1 Execution Practices & Patterns

Best practices for writing and running bash commands efficiently, including chaining, async operations, path quoting, and when to prefer dedicated tools over shell equivalents.

#### 1.1.1 Bash Command Execution Best Practices

Optimizes bash command execution through proper chaining semantics, efficient async patterns, and intelligent path handling. Commands should chain with `&&` for dependencies, use `run_in_background` for long operations instead of polling, and maintain working directory via absolute paths. Descriptions should clarify intent, file paths must be quoted, and parent directories verified before creation.

##### 1.1.1.1 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially but not caring if earlier commands fail.

##### 1.1.1.2 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands using `&&` in a single call when sequential execution and failure propagation are required.

##### 1.1.1.3 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

##### 1.1.1.4 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background`, as completion notifications will be provided automatically.

##### 1.1.1.5 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Instructs Claude to diagnose root causes of failures instead of retrying commands in sleep loops.

##### 1.1.1.6 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

##### 1.1.1.7 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands (e.g., `gh run view`) rather than sleeping when polling external processes.

##### 1.1.1.8 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Instructs Claude to use `run_in_background` for long-running commands and wait for completion notifications instead of sleeping.

##### 1.1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration in milliseconds, with configurable maximum and default values for bash commands.

##### 1.1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence using `ls` before creating new directories or files.

##### 1.1.1.11 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not, with environment initialized from user's profile.

##### 1.1.1.12 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Directs Claude to maintain current working directory by using absolute paths and avoiding cd commands unless explicitly requested.

##### 1.1.1.13 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits using newlines to separate bash commands.

##### 1.1.1.14 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to run independent bash commands as parallel tool calls in a single message for efficiency.

##### 1.1.1.15 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Requires Claude to quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.16 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs Claude to write clear, concise descriptions for bash commands, keeping simple commands brief and providing context for complex piped or obscure commands.

##### 1.1.1.17 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

#### 1.1.2 Bash Tool Alternatives & Preferred Tools

Dedicated tools provide superior user experience and permission transparency compared to bash equivalents. Read, Write, Edit, Glob, and Grep tools should replace cat, echo, sed/awk, find/ls, and grep commands respectively. Direct text output replaces echo for communication.

##### 1.1.2.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Directs Claude to output text directly instead of using echo or printf commands.

##### 1.1.2.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use the Grep tool for content search instead of grep or rg commands.

##### 1.1.2.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool for file editing instead of sed or awk commands.

##### 1.1.2.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use the Glob tool for file search instead of find or ls commands.

##### 1.1.2.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool for file reading instead of cat, head, or tail commands.

##### 1.1.2.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use the Write tool for file writing instead of echo or cat commands.

##### 1.1.2.7 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and permission review compared to equivalent Bash commands.

##### 1.1.2.8 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat, head, tail, sed, awk, or echo commands and to use dedicated tools instead for better user experience.

### 1.2 Sandbox Security & Isolation

Mandatory sandbox enforcement policies, automatic failure recovery when commands hit permission boundaries, and designated temporary file directories for session-scoped work.

#### 1.2.1 Bash Sandbox Security & Behavior

Enforces mandatory sandbox isolation for all bash commands with automatic failure detection and recovery. Sandbox restrictions are non-negotiable by policy; when commands fail due to sandbox constraints, Claude automatically retries with elevated permissions after explaining the restriction. Sensitive paths cannot be allowlisted, and temporary files must use designated sandbox directories.

##### 1.2.1.1 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that sandbox restrictions caused command failures.

##### 1.2.1.2 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

##### 1.2.1.3 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Recognizes 'Operation not permitted' errors for file and network operations as sandbox-caused failures.

##### 1.2.1.4 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies Unix socket connection errors as evidence of sandbox restrictions.

##### 1.2.1.5 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

##### 1.2.1.6 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition where a command fails with clear evidence of sandbox restrictions, distinguishing sandbox failures from other failure causes.

##### 1.2.1.7 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all commands must run in sandbox mode; the `dangerouslyDisableSandbox` parameter is disabled by policy.

##### 1.2.1.8 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

##### 1.2.1.9 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

##### 1.2.1.10 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands, even after running with `dangerouslyDisableSandbox: true`.

##### 1.2.1.11 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing how Claude should respond when sandbox-caused failures are detected.

##### 1.2.1.12 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with `dangerouslyDisableSandbox: true` when sandbox failures occur, without asking the user.

##### 1.2.1.13 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable (or `${SANDBOX_TMPDIR_FN()}` as fallback) for temporary files in sandbox mode instead of `/tmp` directly.

##### 1.2.1.14 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

##### 1.2.1.15 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Directs Claude to work with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

##### 1.2.1.16 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to default to running commands within the sandbox and only disable it when explicitly requested or when sandbox restrictions are evident.

##### 1.2.1.17 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.2.2 Scratchpad & Temporary File Management

Provides isolated session-specific working space for temporary files, eliminating permission friction while maintaining separation from system directories.

##### 1.2.2.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a session-specific scratchpad directory for all temporary files instead of /tmp, providing isolated working space without permission prompts.

### 1.3 Bash Command Analysis Agents

Extracts semantic meaning from bash commands by generating human-readable descriptions and parsing file paths from command output with minimal inference.

#### 1.3.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or obscure commands.

#### 1.3.2 [Bash command file path extraction (Agent Prompt)](system-prompts/agent-prompt-bash-command-file-path-extraction.md)

Extracts file paths from bash command output by determining whether the command displays file contents, returning paths verbatim without inference or modification.

---

## 2. Tools, Permissions & Lifecycle Automation

The full tool ecosystem: built-in tool descriptions, strategic selection guidelines, permission denial handling, event-driven lifecycle hooks, MCP resource management, and browser automation.

### 2.1 Tool Selection & Built-in Capabilities

Strategic guidelines for choosing the right tool for each task, plus comprehensive reference documentation for all built-in tools spanning file operations, search, web access, and agent coordination.

#### 2.1.1 Tool Selection & Usage Policy

Strategic guidelines for choosing appropriate tools based on task type—directing file operations to dedicated tools rather than shell commands, delegating complex exploration to subagents, and maximizing parallel execution for independent operations.

##### 2.1.1.1 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use the Write tool for file creation instead of shell commands like cat heredoc or echo redirection.

##### 2.1.1.2 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Directs Claude to use the Task tool with specialized subagents for comprehensive codebase exploration and deep research when simple directed searches are insufficient.

##### 2.1.1.3 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob or Grep tools directly for simple, targeted codebase searches like locating specific files, classes, or functions.

##### 2.1.1.4 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs Claude to use the Edit tool for file modifications instead of sed or awk commands.

##### 2.1.1.5 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool for file access instead of cat, head, tail, or sed commands.

##### 2.1.1.6 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Establishes that the Bash tool should be reserved exclusively for system commands and terminal operations, with preference for dedicated tools when available.

##### 2.1.1.7 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Directs Claude to use the Grep tool for searching file contents instead of grep or rg commands.

##### 2.1.1.8 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool for file searches instead of find or ls commands.

##### 2.1.1.9 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Explains that slash commands like /commit invoke user-invocable skills via the Skill tool, and Claude should only execute skills listed in the tool's user-invocable section.

##### 2.1.1.10 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool with specialized subagents for parallelizing queries and protecting context windows, while avoiding duplicate work already performed by subagents.

##### 2.1.1.11 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while maintaining sequential execution for dependent operations to increase efficiency.

##### 2.1.1.12 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Defines rules for generating concise, past-tense summaries of tool usage and accomplishments in under 8 words, focusing on user-visible outcomes rather than implementation details.

#### 2.1.2 Core Tool Descriptions

Comprehensive reference for built-in tools spanning file operations, content search, web access, code intelligence, task automation, and user interaction—each providing specialized capabilities for codebase manipulation, information retrieval, and agent coordination.

##### 2.1.2.1 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with preservation of indentation, supporting both targeted edits and replace-all operations across entire files.

##### 2.1.2.2 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob syntax for finding files by name patterns, returning results sorted by modification time.

##### 2.1.2.3 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting regex patterns, file filtering, and multiple output modes for content discovery across codebases.

##### 2.1.2.4 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the filesystem with support for line-based offset and limit parameters, image rendering, PDF reading with page selection, and Jupyter notebook parsing.

##### 2.1.2.5 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the filesystem, preferring the Edit tool for modifications and supporting new file creation and complete rewrites.

##### 2.1.2.6 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content from URLs by converting HTML to markdown and processing with AI to extract information based on provided prompts.

##### 2.1.2.7 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff, returning results with mandatory source attribution in responses.

##### 2.1.2.8 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents for complex tasks including research, exploration, and implementation work, with support for foreground/background execution, resumption, and worktree isolation.

##### 2.1.2.9 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input, supporting concurrent operation without holding shell processes.

##### 2.1.2.10 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the conversation, providing domain-specific capabilities matched to user requests.

##### 2.1.2.11 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol integration for code intelligence including symbol navigation, references, hover information, and call hierarchy analysis.

##### 2.1.2.12 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing contents, supporting insert and delete operations on individual cells within .ipynb files.

##### 2.1.2.13 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use AskUserQuestion for gathering user input, clarifying requirements, and offering choices during execution. In plan mode, use it to clarify requirements before finalizing the plan, not for plan approval.

##### 2.1.2.14 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite tool for loading deferred tools before use, supporting keyword search and direct selection modes to make tools available.

##### 2.1.2.15 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage guide for ToolSearch covering keyword search, direct selection, and required keyword modes for discovering and loading deferred tools.

##### 2.1.2.16 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree for the session when explicitly requested, enabling parallel work on different branches within a repository.

### 2.2 Permission Handling & Hook System

Manages tool denial scenarios with adaptive workarounds, and provides event-driven automation through lifecycle hooks that execute shell commands or LLM evaluations at key moments.

#### 2.2.1 Tool Permission & Denial Handling

Manages Claude's behavior when tool execution is restricted, enabling reasonable workarounds while preventing malicious bypasses and escalating to users when essential capabilities are blocked.

##### 2.2.1.1 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides Claude when tool execution is denied, permitting reasonable workarounds with alternative tools but prohibiting malicious bypasses, with escalation to the user if essential capabilities are blocked.

##### 2.2.1.2 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains tool permission modes and instructs Claude to adjust approach when tool calls are denied rather than re-attempting, with optional AskUserQuestion for clarification.

#### 2.2.2 Hook System & Lifecycle Events

Event-driven automation system that executes shell commands or LLM evaluations at lifecycle moments (session start, pre/post-tool execution), with JSON schema validation and structured error reporting for condition evaluation and plan verification.

##### 2.2.2.1 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Displays a message when a hook stops continuation, showing the hook name and reason.

##### 2.2.2.2 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful completion of a hook with its name and content result.

##### 2.2.2.3 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution to Claude.

##### 2.2.2.4 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution to Claude.

##### 2.2.2.5 [Hook JSON validation failed (System Reminder)](system-prompts/system-reminder-hook-json-validation-failed.md)

Reports hook JSON output validation failures with detailed schema expectations and actual output, helping Claude understand what the hook should have returned.

##### 2.2.2.6 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix label for continuation messages when a hook stops execution.

##### 2.2.2.7 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive reference for Claude Code hooks that execute shell commands or LLM evaluations at lifecycle events like PreToolUse, PostToolUse, and SessionStart, with JSON configuration examples and common patterns for auto-formatting, logging, and testing.

##### 2.2.2.8 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code and returns structured JSON indicating whether the condition is met with optional reason for failure.

##### 2.2.2.9 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies that an agent completed its assigned plan by analyzing conversation transcript and codebase, returning structured output indicating success or failure with reason.

### 2.3 Browser & Web Automation

Direct Chrome browser control via mouse, keyboard, and screenshots, plus MCP resource loading procedures for enabling browser automation capabilities.

#### 2.3.1 Browser Automation

Direct control of Chrome browsers through mouse, keyboard, and screenshot interactions, with comprehensive action definitions and best practices for debugging, tab management, and error handling during automated web tasks.

##### 2.3.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Enables mouse and keyboard interaction with a Chrome browser, including screenshot capture and element clicking with precise coordinate placement.

##### 2.3.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for the Computer tool including click variants, typing, scrolling, keyboard input, dragging, zooming, and hover interactions.

##### 2.3.1.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for effective browser automation using Claude in Chrome tools including GIF recording, console debugging, alert handling, tab context management, and avoiding loops.

#### 2.3.2 MCP Resource Handling

Notifications and tool-loading procedures for managing Model Context Protocol resources, including handling empty or non-displayable content and enabling browser automation capabilities.

##### 2.3.2.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates an MCP resource exists but contains no content.

##### 2.3.2.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates an MCP resource has content that cannot be displayed in readable form.

##### 2.3.2.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use to enable browser automation capabilities.

---

## 3. Agent Systems & Multi-Agent Coordination

Frameworks for building, deploying, and coordinating AI agents — from swarm task distribution and SDK references to agent design, conversation routing, and codebase analysis agents.

### 3.1 Multi-Agent Team Coordination

Swarm coordination framework enabling parallel agent teams to discover tasks, communicate via messaging, and execute work with graceful shutdown and cleanup. Agents claim work from shared task lists and coordinate through named communication channels rather than direct tool calls.

#### 3.1.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and communication protocols using agent names rather than UUIDs.

#### 3.1.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires graceful team shutdown via shutdown requests and cleanup operations before returning final response in non-interactive mode.

#### 3.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables direct messaging to teammates, broadcasting to all team members, and handling shutdown and plan approval requests within a swarm coordination context.

#### 3.1.4 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages team creation and coordination of multiple agents working in parallel, handling task assignment, message delivery, idle state management, and team lifecycle.

#### 3.1.5 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, cleaning up team resources and clearing team context from the session.

#### 3.1.6 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from a shared task list, prioritizing by task ID and respecting dependencies.

#### 3.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agent teammates to use SendMessage tool for communication rather than text responses, enabling coordination through messages and broadcasts in multi-agent swarms.

### 3.2 Agent Design & SDK

Tools for designing custom AI agents with engineered personas and system prompts, plus complete Python and TypeScript SDK documentation for building autonomous agents with MCP integration.

#### 3.2.1 Agent Design & Orchestration

Designs and deploys custom AI agents by extracting requirements, engineering expert personas, architecting system prompts, and optimizing performance. Includes general-purpose task execution subagents and progress tracking mechanisms.

##### 3.2.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of high-performance custom AI agents by extracting user requirements, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces JSON output with agent identifier, usage conditions, and complete operational manual.

##### 3.2.1.2 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

General-purpose subagent for researching questions, searching code, and executing multi-step tasks using all available tools while preferring file edits over creation.

##### 3.2.1.3 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Additional guidelines for Task tool usage emphasizing absolute file paths, no emojis, and no colons before tool calls for clear communication.

##### 3.2.1.4 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt for generating concise 3-5 word action summaries in present tense to describe agent progress without using tools.

#### 3.2.2 Agent SDK Reference & Patterns

Complete Agent SDK documentation for Python and TypeScript covering installation, tool integration via MCP, permission modes, session management, and practical code examples for building autonomous agents.

##### 3.2.2.1 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Provides Python code patterns for Agent SDK including basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with practical examples.

##### 3.2.2.2 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Demonstrates TypeScript Agent SDK patterns for basic agents, hooks, subagents, MCP integration, and session resumption with concise code examples.

##### 3.2.2.3 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, quick start, built-in tools, query and ClaudeSDKClient interfaces, permission system, MCP support, hooks, subagents, and best practices.

##### 3.2.2.4 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, built-in tools, permission modes, MCP support, in-process custom tools, hooks, subagents, and best practices.

### 3.3 Specialized Analysis Agents

Purpose-built agents for conversation routing and intent detection, read-only codebase exploration and documentation generation, and automated verification across multiple interfaces.

#### 3.3.1 Conversation & User Interaction Agents

Routes conversations through specialized agents that detect user intent patterns, analyze sentiment for escalation signals, predict natural follow-up actions, and handle contextual side questions without tool invocation.

##### 3.3.1.1 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes conversation history to detect user frustration and explicit pull request creation requests, outputting boolean flags for downstream routing.

##### 3.3.1.2 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next based on conversation context, suggesting specific follow-up commands or actions without evaluative language or multiple sentences.

##### 3.3.1.3 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Constrains Claude to answer side questions directly without tools, based only on conversation context, in a single response with no follow-up capability.

##### 3.3.1.4 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and instructs it to invoke the agent with appropriate context.

#### 3.3.2 Codebase Exploration & Analysis Agents

Read-only codebase analysis capabilities for understanding architecture and generating documentation. Enables rapid file discovery through pattern matching, architecture comprehension, and creation of project guidance artifacts that preserve institutional knowledge for future sessions.

##### 3.3.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only codebase exploration specialist using glob patterns, regex search, and file reading to rapidly find files, answer architecture questions, and analyze code without modifying anything.

##### 3.3.2.2 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation files with common build/test commands, high-level architecture, and project-specific guidance for future Claude Code instances.

##### 3.3.2.3 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs Claude to update Magic Doc files with new learnings from conversations, preserving headers while keeping documentation current, terse, and focused on architecture and entry points rather than implementation details.

#### 3.3.3 Verification & Testing Skills

Automated verification and debugging capabilities that validate code changes across multiple interfaces (web UI, CLI, API) and diagnose session issues. Combines deterministic test planning, multi-platform verifier execution, and error analysis for comprehensive validation.

##### 3.3.3.1 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase guide for creating verifier skills that automatically verify code changes across web UI (Playwright), CLI (Tmux), and API (HTTP) testing, including project detection, tool setup, authentication handling, and skill generation.

##### 3.3.3.2 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Verification specialist skill for validating code changes work correctly by discovering verifier skills, creating deterministic verification plans, triggering verifiers, and reporting results with failure analysis.

##### 3.3.3.3 [Debugging (Skill)](system-prompts/skill-debugging.md)

Debugging skill for troubleshooting issues in Claude Code sessions by analyzing debug logs, identifying errors and warnings, and providing concrete fixes.

### 3.4 File Operations & IDE Context

Real-time awareness of file state and IDE interactions, tracking external modifications, truncation boundaries, user selections, and diagnostic changes to keep Claude synchronized with the development environment.

#### 3.4.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

#### 3.4.2 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides relevant changes with line numbers, instructing it to account for these changes.

#### 3.4.3 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Informs Claude that the user opened a file in the IDE, which may or may not relate to the current task.

#### 3.4.4 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that the requested file read offset exceeds the file's actual length and provides the file's total line count.

#### 3.4.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Informs Claude that a large file was truncated to a maximum line count and directs it to use the Read tool to access additional content if needed.

#### 3.4.6 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Informs Claude that a file was read before conversation summarization but is too large to include, directing it to use the Read tool if needed.

#### 3.4.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in an IDE, providing line numbers and file context.

#### 3.4.8 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues with a summary of problems.

---

## 4. Session Management, Planning & Task Tracking

Mechanisms for preserving work across sessions, structuring planning workflows with gated approval phases, tracking tasks through state transitions, and monitoring resource budgets.

### 4.1 Context & Memory Persistence

Strategies for preserving conversation context, summarizing sessions, compacting memory, and organizing session metadata for efficient discovery and retrieval.

#### 4.1.1 Session & Context Management

Mechanisms for preserving and resuming work across sessions, including memory file structures, conversation summarization strategies, and context compaction techniques that maintain task state, technical decisions, and codebase knowledge without loss of continuity.

##### 4.1.1.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies that session continues from another machine and provides updated working directory.

##### 4.1.1.2 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path with its type description.

##### 4.1.1.3 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Shows contents of a nested memory file structure.

##### 4.1.1.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for generating structured continuation summaries during context compaction, preserving task state, discoveries, and next steps for efficient resumption.

##### 4.1.1.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing user requests, technical decisions, code changes, errors, and pending tasks with full code snippets and file details for continuity without context loss.

##### 4.1.1.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages focusing on new requests, technical decisions, code changes, and errors while preserving earlier context, with detailed file and code snippet information.

##### 4.1.1.7 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by editing existing sections with detailed technical information while preserving structure, headers, and template descriptions without adding new sections.

##### 4.1.1.8 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects up to 5 relevant memory files from available options based on user query, returning only filenames that will clearly help Claude Code process the request.

##### 4.1.1.9 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory `summary.md` files with sections for current state, task specification, files, workflow, errors, codebase documentation, learnings, and worklog.

##### 4.1.1.10 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

#### 4.1.2 Session Metadata & Organization

Systems for naming, tagging, and retrieving sessions through structured metadata that enables efficient session discovery and tracking of invoked capabilities across conversations.

##### 4.1.2.1 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles in sentence case and git branch names prefixed with 'claude/' in lowercase with dashes, keeping both short and clear.

##### 4.1.2.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions by matching user queries against tags, titles, branches, and transcripts with high inclusivity, prioritizing exact tag matches and semantic similarity.

##### 4.1.2.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the current session and instructs Claude to follow their guidelines.

### 4.2 Plan Mode & Task Workflows

Structured planning framework with read-only exploration and user approval gates before implementation, plus task breakdown systems with pending/in-progress/completed state tracking.

#### 4.2.1 Plan Mode Workflow

Structured planning framework that gates implementation work through exploration, design review, and user approval phases. Enforces read-only access and plan-file-only edits during planning, then transitions to execution mode once the plan is finalized and approved.

##### 4.2.1.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow: initial understanding via parallel exploration agents, design via planning agents, review, final plan writing, and mode exit. Prohibits all edits except to the plan file and non-readonly tool execution.

##### 4.2.1.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning where Claude explores code, updates the plan file incrementally, and asks clarifying questions in a loop until the plan is complete. Prohibits edits outside the plan file and non-readonly operations.

##### 4.2.1.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagents in plan mode to read-only actions and plan file editing, requiring comprehensive answers and clarifying questions before proceeding.

##### 4.2.1.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, requiring evaluation of existing plan against new request and editing the plan file before proceeding.

##### 4.2.1.5 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that it has exited plan mode and can now execute edits, run tools, and take actions, with optional reference to the plan file location.

##### 4.2.1.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 4.2.1.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 4.2.1.8 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions into plan mode for non-trivial implementation tasks, allowing exploration and design of approaches before coding. Use for feature implementation, architectural decisions, multi-file changes, and unclear requirements to gain user approval before proceeding.

##### 4.2.1.9 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of implementation planning and requests user approval by presenting the finalized plan from the plan file for review.

##### 4.2.1.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent that explores codebases in read-only mode to design implementation plans, identify critical files, and consider architectural trade-offs without modifying code.

#### 4.2.2 Task & Todo Tracking

Task management system for breaking down work into tracked items with state transitions (pending/in-progress/completed), enabling progress visibility and immediate completion marking throughout coding sessions.

##### 4.2.2.1 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

References the TaskOutput tool for checking task execution results.

##### 4.2.2.2 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant, without mentioning the reminder to the user.

##### 4.2.2.3 [Todo list changed (System Reminder)](system-prompts/system-reminder-todo-list-changed.md)

Notifies of todo list changes without mentioning to user and provides updated contents for continued task execution.

##### 4.2.2.4 [Todo list empty (System Reminder)](system-prompts/system-reminder-todo-list-empty.md)

Reminds that todo list is empty and suggests using TodoWrite tool if task tracking would be beneficial, without mentioning to user.

##### 4.2.2.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Suggests using TodoWrite tool for progress tracking when relevant and cleaning stale lists, without mentioning reminder to user.

##### 4.2.2.6 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with state tracking (pending/in-progress/completed) and dual-form task descriptions for progress visibility.

##### 4.2.2.7 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions, tracking progress on multi-step and complex tasks with status management and dependency tracking.

##### 4.2.2.8 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite for breaking down work into tasks, tracking progress, and marking tasks complete immediately upon completion rather than batching.

### 4.3 Resource & Budget Monitoring

Tracks token consumption and USD spending against configured limits, alerting when output truncation occurs due to token exhaustion. Provides real-time visibility into remaining budget and usage statistics.

#### 4.3.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

#### 4.3.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

#### 4.3.3 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Warns that response was truncated due to token limits and instructs breaking work into smaller pieces.

---

## 5. Claude API, SDK & External Integrations

Language-specific API references, architectural guidance for building LLM applications, GitHub Actions integration, and Git workflow safety practices for teams using Claude programmatically.

### 5.1 Claude API References & Guidance

Language-specific SDK documentation across C#, Go, Java, PHP, Python, Ruby, and TypeScript covering streaming, tool use, vision, and batch processing, plus routing guidance for API development.

#### 5.1.1 Claude API Reference by Language

Language-specific SDK references and implementation guides for Claude API across C#, Go, Java, PHP, Python, Ruby, and TypeScript, covering streaming, tool use, vision, caching, batch processing, file handling, and error management.

##### 5.1.1.1 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for Claude API covering client initialization, basic requests, streaming, and manual tool use via JSON schema.

##### 5.1.1.2 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API including client initialization, basic requests, streaming, and manual agentic loops for tool use.

##### 5.1.1.3 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, and beta tool use with annotated classes via BetaToolRunner.

##### 5.1.1.4 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API covering installation, client initialization, basic requests, streaming, and manual tool use.

##### 5.1.1.5 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering client initialization, vision, prompt caching, extended thinking, multi-turn conversations, compaction, error handling, cost optimization, and retry strategies.

##### 5.1.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for Claude API including client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

##### 5.1.1.7 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Complete TypeScript SDK reference covering client initialization, vision, prompt caching, adaptive thinking, multi-turn conversations, compaction, error handling, and cost optimization.

##### 5.1.1.8 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, progress tracking, error handling, and best practices for token management.

##### 5.1.1.9 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript reference for streaming Claude API responses, including basic streaming, handling thinking blocks and text output, tool use with streaming, and best practices for real-time response display.

##### 5.1.1.10 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use with Claude API covering tool definitions, tool choice modes, tool runner vs manual loops, server-side tools (code execution, web search, web fetch), structured outputs, and best practices for effective tool integration.

##### 5.1.1.11 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python implementation guide for tool use including the tool runner with @beta_tool decorators, manual agentic loops, code execution with file uploads and container reuse, memory tool integration, and structured outputs with Pydantic schemas.

##### 5.1.1.12 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript implementation guide for tool use featuring the tool runner with Zod schemas, manual agentic loops, code execution with file handling and container reuse, memory tool with handlers, and structured outputs using Zod validation.

##### 5.1.1.13 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for asynchronous batch processing at 50% cost, covering batch creation, polling, result retrieval, cancellation, and integration with prompt caching.

##### 5.1.1.14 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for PDFs and images, file management operations, and end-to-end examples with persistent file IDs.

##### 5.1.1.15 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages for documents and images, and managing file operations.

##### 5.1.1.16 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for HTTP error codes from Claude API with causes, fixes, and handling strategies; includes common mistakes, validation errors, and retry guidance.

##### 5.1.1.17 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, organized by topic with extraction prompts for each resource.

##### 5.1.1.18 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact model IDs, aliases, context windows, max output tokens, and pricing; includes resolution table for user model requests.

#### 5.1.2 Build with Claude API Skill

Routing and navigation framework for Claude API development, guiding users through language selection, architectural patterns, model capabilities, and task-specific documentation for building LLM applications.

##### 5.1.2.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models (Opus 4.6, Sonnet 4.6, Haiku 4.5), adaptive thinking, and reading guide for language-specific documentation.

##### 5.1.2.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API reference documentation, providing quick task reference mapping to relevant docs for streaming, tool use, batches, files, and error handling.

##### 5.1.2.3 [Build with Claude API (trigger) [Skill]](system-prompts/skill-build-with-claude-api-trigger.md)

Activation criteria for the Build with Claude API skill, triggered when code imports Anthropic SDK packages or user explicitly requests Claude API integration.

##### 5.1.2.4 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing clear guidance on features, configuration, and integrations across all three domains.

### 5.2 Git Workflow & Safety

Establishes safe git practices centered on explicit user consent and risk mitigation. Commits require user request, destructive operations demand careful consideration, hooks are never skipped, and new commits are preferred over amendments. Integrated workflows support commit creation, pull request management, code review, and comment retrieval with built-in safety checks.

#### 5.2.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Advises Claude to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

#### 5.2.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests, covering safety protocols, commit message drafting, hook handling, and PR creation with gh commands. Emphasizes never committing without explicit user request, avoiding destructive operations, and creating new commits rather than amending.

#### 5.2.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping hooks or bypassing signing unless explicitly requested by the user, and directs Claude to investigate and fix hook failures.

#### 5.2.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to create new commits rather than amending existing ones.

#### 5.2.5 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository conventions, and executing the commit with safety checks against empty commits and secrets.

#### 5.2.6 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates or updates GitHub pull requests by analyzing all changes, creating commits, pushing branches, and optionally posting to Slack with safety checks against destructive git operations.

#### 5.2.7 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including both PR-level and review comments with code context, formatting them readably with file paths, line numbers, and threading.

#### 5.2.8 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Provides thorough code review of GitHub pull requests analyzing quality, style, improvements, and risks with focus on correctness, conventions, performance, testing, and security.

#### 5.2.9 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git branch, main branch, repository status, and recent commits as a snapshot at conversation start.

### 5.3 GitHub & CI/CD Integration

GitHub Actions and App integration templates enabling Claude Code automation through @mentions in issues, pull requests, and comments with configurable permissions and custom workflows.

#### 5.3.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code to be triggered via @claude mentions in issues, PRs, and comments with configurable permissions and custom prompts.

#### 5.3.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security model, and how to trigger Claude via @mentions.

---

## 6. Code Quality, Security & Development Principles

Pragmatic coding guidelines, security-first vulnerability prevention, web content handling with attribution compliance, and output style standards that govern how Claude writes and communicates.

### 6.1 Code Quality & Task Execution Principles

Pragmatic guidelines for focused, efficient task execution that prioritize user intent over comprehensive solutions. Emphasizes reading existing code before modification, implementing only what's explicitly requested, avoiding premature abstractions and unnecessary error handling, and unblocking through alternatives rather than brute force.

#### 6.1.1 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Guidance to enable users to complete ambitious tasks by deferring to user judgment on scope rather than limiting task complexity.

#### 6.1.2 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Principle to make only directly requested or clearly necessary changes, keeping solutions simple and focused.

#### 6.1.3 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Guidance to consider alternative approaches when blocked rather than brute-forcing, using AskUserQuestion to align on the right path.

#### 6.1.4 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Principle to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

#### 6.1.5 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Guidance to delete unused code completely rather than adding compatibility shims or re-exports.

#### 6.1.6 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Principle to avoid creating abstractions for one-time operations or hypothetical requirements, keeping complexity minimal.

#### 6.1.7 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Guidance to avoid giving time estimates or predictions, focusing on what needs to be done rather than duration.

#### 6.1.8 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Instructs Claude to implement only what was explicitly requested, avoiding refactoring, extra features, documentation, or type annotations beyond the scope of the task.

#### 6.1.9 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs Claude to validate only at system boundaries and trust internal code guarantees, avoiding defensive error handling for impossible scenarios or backwards-compatibility shims.

#### 6.1.10 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing modifications or changes.

#### 6.1.11 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks and instructs Claude to interpret generic instructions within that context, performing actual code modifications rather than abstract answers.

#### 6.1.12 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels.

### 6.2 Security & Safety Guidelines

Establishes security-first practices across code development and system interactions. Covers vulnerability prevention (injection, XSS, OWASP top 10), ethical boundaries for security testing versus malicious activities, malware analysis constraints, and risk-aware execution requiring confirmation for destructive operations.

#### 6.2.1 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Emphasizes avoiding OWASP top 10 vulnerabilities including command injection, XSS, and SQL injection, with immediate remediation if insecure code is written.

#### 6.2.2 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing requests for destructive attacks, DoS, or malicious evasion.

#### 6.2.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Permits analysis of malware code and behavior but prohibits improving or augmenting it, allowing reports and questions about code functionality.

#### 6.2.4 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a cautious approach to destructive, hard-to-reverse, or shared-state actions by requiring user confirmation before proceeding, while permitting local reversible actions freely. Emphasizes investigating unexpected state rather than bypassing safety checks.

#### 6.2.5 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security review of code changes identifying high-confidence exploitable vulnerabilities in input validation, authentication, cryptography, and injection attacks while minimizing false positives.

#### 6.2.6 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety classification, returning the prefix or 'command_injection_detected' to protect users from malicious code execution.

### 6.3 Output Style & Communication Standards

Consistent communication standards through precise code references, concise output without filler, and visual comparison tools — plus web content summarization with strict attribution and licensing compliance.

#### 6.3.1 Output Style & Tone

Enforces consistent communication standards through precise code references, concise polished output without filler, and visual comparison tools for option selection. Ensures clarity and navigability across all interactions.

##### 6.3.1.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number references when mentioning specific code locations to enable easy navigation.

##### 6.3.1.2 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Instructs Claude to produce polished, concise output without filler, repetition, or inner monologue, presenting only final thoughts while preserving important information.

##### 6.3.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Directs Claude to keep responses short and concise.

##### 6.3.1.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

##### 6.3.1.5 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side visual comparison of UI options using markdown previews for ASCII mockups, code snippets, diagrams, and configurations in single-select questions.

#### 6.3.2 Web Content Fetching & Summarization

Processes external web content into concise summaries with strict attribution and licensing compliance, filtering untrusted sources while preserving accuracy for downstream consumption.

##### 6.3.2.1 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and attribution rules for untrusted domains while respecting licensing.

---

## 7. Configuration, Workflow Optimization & Learning

Claude Code environment configuration, usage analytics for workflow improvement, skill capture from repeatable workflows, collaborative learning modes, and environment setup tooling.

### 7.1 Claude Code Configuration & Settings

Tools for customizing Claude Code environment through settings management, shell configuration integration, and version awareness. Handles configuration merging, status line customization, and update notifications to maintain system coherence.

#### 7.1.1 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code settings.json configuration including hooks, permissions, environment variables, and MCP servers while preserving existing settings through careful merging.

#### 7.1.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line by converting shell PS1 configurations to shell commands, handling ANSI colors and escape sequences, and updating settings.json with the statusLine command.

#### 7.1.3 [Claude Code version mismatch warning (Data)](system-prompts/data-claude-code-version-mismatch-warning.md)

Warning message displayed when Claude Code version is outdated, instructing users to run `claude update` to access latest features.

### 7.2 Workflow Analysis & Skill Capture

Analyzes session data to surface friction patterns and actionable improvement recommendations, and captures repeatable workflows into reusable skill definitions with success criteria.

#### 7.2.1 Usage Insights & Workflow Analysis

Analyzes Claude Code session data to identify friction patterns, extract structured insights, and generate actionable recommendations for workflow improvement. Surfaces what's working, obstacles, quick wins, and ambitious future opportunities with specific suggestions for features, skills, and usage patterns.

##### 7.2.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part usage insights summary covering what's working, hindrances, quick wins, and ambitious workflows for improved Claude Code usage, drawing from aggregated session data and friction analysis.

##### 7.2.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize recurring friction patterns with specific examples and actionable suggestions for improvement.

##### 7.2.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, with copyable prompts for experimentation.

##### 7.2.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including goal categories, user satisfaction signals, and friction types, with strict guidelines for counting only explicit user requests and satisfaction indicators.

##### 7.2.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations from MCP Servers, Custom Skills, Hooks, and Headless Mode, and usage patterns tailored to user's actual session patterns.

#### 7.2.2 Skill Creation & Management

Captures repeatable workflows from current sessions into reusable skills through structured interview and analysis, generating executable skill definitions with success criteria and step-by-step instructions.

##### 7.2.2.1 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a 4-round interview process to capture the current session as a reusable skill, analyzing repeatable workflows, gathering user preferences, and generating a SKILL.md file with detailed steps, success criteria, and execution instructions.

### 7.3 Learning Mode

Balances task completion with hands-on learning by requesting human contributions to design decisions and business logic. Provides educational context around implementation choices to deepen understanding of the codebase.

#### 7.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode system prompt that balances task completion with hands-on learning by requesting human contributions for design decisions and business logic, using TodoList tracking and Learn by Doing requests with specific code sections.

#### 7.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing to encourage learning, focusing on implementation choices specific to the codebase.
