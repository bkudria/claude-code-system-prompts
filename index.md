# Claude Code System Prompts Index

A technical reference for building and operating Claude-based coding systems, covering everything needed to take an AI agent from a single shell command to a fully orchestrated, production-grade development environment.

## Table of Contents

1. [Bash & Shell Execution](#1-bash-shell-execution)
   1. [Bash Tool Usage Guidelines](#11-bash-tool-usage-guidelines)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (command description) [Tool Description]](#112-bash-command-description-tool-description)
      3. [Bash (maintain cwd) [Tool Description]](#113-bash-maintain-cwd-tool-description)
      4. [Bash (no newlines) [Tool Description]](#114-bash-no-newlines-tool-description)
      5. [Bash (parallel commands) [Tool Description]](#115-bash-parallel-commands-tool-description)
      6. [Bash (prefer dedicated tools) [Tool Description]](#116-bash-prefer-dedicated-tools-tool-description)
      7. [Bash (quote file paths) [Tool Description]](#117-bash-quote-file-paths-tool-description)
      8. [Bash (semicolon usage) [Tool Description]](#118-bash-semicolon-usage-tool-description)
      9. [Bash (sequential commands) [Tool Description]](#119-bash-sequential-commands-tool-description)
      10. [Bash (timeout) [Tool Description]](#1110-bash-timeout-tool-description)
      11. [Bash (verify parent directory) [Tool Description]](#1111-bash-verify-parent-directory-tool-description)
      12. [Bash (working directory) [Tool Description]](#1112-bash-working-directory-tool-description)
      13. [Bash (built-in tools note) [Tool Description]](#1113-bash-built-in-tools-note-tool-description)
      14. [Bash (alternative — communication) [Tool Description]](#1114-bash-alternative-—-communication-tool-description)
      15. [Bash (alternative — content search) [Tool Description]](#1115-bash-alternative-—-content-search-tool-description)
      16. [Bash (alternative — edit files) [Tool Description]](#1116-bash-alternative-—-edit-files-tool-description)
      17. [Bash (alternative — file search) [Tool Description]](#1117-bash-alternative-—-file-search-tool-description)
      18. [Bash (alternative — read files) [Tool Description]](#1118-bash-alternative-—-read-files-tool-description)
      19. [Bash (alternative — write files) [Tool Description]](#1119-bash-alternative-—-write-files-tool-description)
      20. [Bash (sleep — keep short) [Tool Description]](#1120-bash-sleep-—-keep-short-tool-description)
      21. [Bash (sleep — no polling background tasks) [Tool Description]](#1121-bash-sleep-—-no-polling-background-tasks-tool-description)
      22. [Bash (sleep — run immediately) [Tool Description]](#1122-bash-sleep-—-run-immediately-tool-description)
      23. [Bash (sleep — use check commands) [Tool Description]](#1123-bash-sleep-—-use-check-commands-tool-description)
   2. [Bash Sandbox Security & Policy](#12-bash-sandbox-security-policy)
      1. [Bash (sandbox — adjust settings) [Tool Description]](#121-bash-sandbox-—-adjust-settings-tool-description)
      2. [Bash (sandbox — default to sandbox) [Tool Description]](#122-bash-sandbox-—-default-to-sandbox-tool-description)
      3. [Bash (sandbox — evidence: access denied) [Tool Description]](#123-bash-sandbox-—-evidence-access-denied-tool-description)
      4. [Bash (sandbox — evidence list header) [Tool Description]](#124-bash-sandbox-—-evidence-list-header-tool-description)
      5. [Bash (sandbox — evidence: network failures) [Tool Description]](#125-bash-sandbox-—-evidence-network-failures-tool-description)
      6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#126-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#127-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
      8. [Bash (sandbox — explain restriction) [Tool Description]](#128-bash-sandbox-—-explain-restriction-tool-description)
      9. [Bash (sandbox — failure evidence condition) [Tool Description]](#129-bash-sandbox-—-failure-evidence-condition-tool-description)
      10. [Bash (sandbox — mandatory mode) [Tool Description]](#1210-bash-sandbox-—-mandatory-mode-tool-description)
      11. [Bash (sandbox — no exceptions) [Tool Description]](#1211-bash-sandbox-—-no-exceptions-tool-description)
      12. [Bash (sandbox — no sensitive paths) [Tool Description]](#1212-bash-sandbox-—-no-sensitive-paths-tool-description)
      13. [Bash (sandbox — per-command) [Tool Description]](#1213-bash-sandbox-—-per-command-tool-description)
      14. [Bash (sandbox — response header) [Tool Description]](#1214-bash-sandbox-—-response-header-tool-description)
      15. [Bash (sandbox — retry without sandbox) [Tool Description]](#1215-bash-sandbox-—-retry-without-sandbox-tool-description)
      16. [Bash (sandbox — tmpdir) [Tool Description]](#1216-bash-sandbox-—-tmpdir-tool-description)
      17. [Bash (sandbox — user permission prompt) [Tool Description]](#1217-bash-sandbox-—-user-permission-prompt-tool-description)
2. [File, Editor & Output Tools](#2-file-editor-output-tools)
   1. [File System & Notebook Tools](#21-file-system-notebook-tools)
      1. [File System Tool Descriptions](#211-file-system-tool-descriptions)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Edit (Tool Description)](#2113-edit-tool-description)
         4. [Glob (Tool Description)](#2114-glob-tool-description)
         5. [Grep (Tool Description)](#2115-grep-tool-description)
         6. [Tool usage (edit files) [System Prompt]](#2116-tool-usage-edit-files-system-prompt)
         7. [Tool usage (read files) [System Prompt]](#2117-tool-usage-read-files-system-prompt)
         8. [Tool usage (reserve Bash) [System Prompt]](#2118-tool-usage-reserve-bash-system-prompt)
         9. [Tool usage (search content) [System Prompt]](#2119-tool-usage-search-content-system-prompt)
         10. [Tool usage (search files) [System Prompt]](#21110-tool-usage-search-files-system-prompt)
         11. [Tool usage (create files) [System Prompt]](#21111-tool-usage-create-files-system-prompt)
      2. [File State & Content Notifications](#212-file-state-content-notifications)
         1. [File exists but empty (System Reminder)](#2121-file-exists-but-empty-system-reminder)
         2. [File shorter than offset (System Reminder)](#2122-file-shorter-than-offset-system-reminder)
         3. [File truncated (System Reminder)](#2123-file-truncated-system-reminder)
         4. [Compact file reference (System Reminder)](#2124-compact-file-reference-system-reminder)
      3. [Jupyter Notebook & Data Science Tools](#213-jupyter-notebook-data-science-tools)
         1. [NotebookEdit (Tool Description)](#2131-notebookedit-tool-description)
   2. [IDE Integration & User Interaction](#22-ide-integration-user-interaction)
      1. [IDE & Editor Integration](#221-ide-editor-integration)
         1. [File opened in IDE (System Reminder)](#2211-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#2212-lines-selected-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#2213-file-modified-by-user-or-linter-system-reminder)
         4. [New diagnostics detected (System Reminder)](#2214-new-diagnostics-detected-system-reminder)
         5. [LSP (Tool Description)](#2215-lsp-tool-description)
      2. [User Interaction & Question Tools](#222-user-interaction-question-tools)
         1. [AskUserQuestion (Tool Description)](#2221-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#2222-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#2223-option-previewer-system-prompt)
         4. [/btw side question (System Reminder)](#2224-btw-side-question-system-reminder)
   3. [Response Style & Utility Execution](#23-response-style-utility-execution)
      1. [Output Style & Communication Guidelines](#231-output-style-communication-guidelines)
         1. [Output efficiency (System Prompt)](#2311-output-efficiency-system-prompt)
         2. [Tone and style (concise output — detailed) [System Prompt]](#2312-tone-and-style-concise-output-—-detailed-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#2313-tone-and-style-concise-output-—-short-system-prompt)
         4. [Tone and style (code references) [System Prompt]](#2314-tone-and-style-code-references-system-prompt)
         5. [Tool Use Summary Generation (System Prompt)](#2315-tool-use-summary-generation-system-prompt)
         6. [Output style active (System Reminder)](#2316-output-style-active-system-reminder)
         7. [Common suffix (response format) [Agent Prompt]](#2317-common-suffix-response-format-agent-prompt)
         8. [Agent thread notes (System Prompt)](#2318-agent-thread-notes-system-prompt)
      2. [Miscellaneous Utility Tools](#232-miscellaneous-utility-tools)
         1. [Sleep (Tool Description)](#2321-sleep-tool-description)
         2. [How to use the SendUserMessage tool (System Prompt)](#2322-how-to-use-the-sendusermessage-tool-system-prompt)
         3. [Scratchpad directory (System Prompt)](#2323-scratchpad-directory-system-prompt)
         4. [One of six rules for using sleep command (System Prompt)](#2324-one-of-six-rules-for-using-sleep-command-system-prompt)
3. [Agent Orchestration & Planning](#3-agent-orchestration-planning)
   1. [Planning & Implementation Design](#31-planning-implementation-design)
      1. [Planning Mode & Implementation Planning](#311-planning-mode-implementation-planning)
         1. [EnterPlanMode (Tool Description)](#3111-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3112-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#3113-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#3114-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#3115-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#3116-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#3117-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#3118-plan-file-reference-system-reminder)
         9. [Verify plan reminder (System Reminder)](#3119-verify-plan-reminder-system-reminder)
         10. [Phase four of plan mode (System Prompt)](#31110-phase-four-of-plan-mode-system-prompt)
         11. [Plan mode (enhanced) [Agent Prompt]](#31111-plan-mode-enhanced-agent-prompt)
      2. [Codebase Exploration Agents](#312-codebase-exploration-agents)
         1. [Explore (Agent Prompt)](#3121-explore-agent-prompt)
         2. [Explore strengths and guidelines (Agent Prompt)](#3122-explore-strengths-and-guidelines-agent-prompt)
         3. [Tool usage (delegate exploration) [System Prompt]](#3123-tool-usage-delegate-exploration-system-prompt)
         4. [Tool usage (direct search) [System Prompt]](#3124-tool-usage-direct-search-system-prompt)
   2. [Multi-Agent Coordination](#32-multi-agent-coordination)
      1. [Multi-Agent Teams & Coordination](#321-multi-agent-teams-coordination)
         1. [TeammateTool (Tool Description)](#3211-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#3212-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#3213-sendmessagetool-tool-description)
         4. [SendMessageTool (non-agent-teams) [Tool Description]](#3214-sendmessagetool-non-agent-teams-tool-description)
         5. [Team Coordination (System Reminder)](#3215-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#3216-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#3217-teammate-communication-system-prompt)
         8. [Team memory content display (System Prompt)](#3218-team-memory-content-display-system-prompt)
         9. [Subagent delegation examples (System Prompt)](#3219-subagent-delegation-examples-system-prompt)
         10. [/batch slash command (Agent Prompt)](#32110-batch-slash-command-agent-prompt)
      2. [Subagent Launching & Delegation](#322-subagent-launching-delegation)
         1. [Agent (usage notes) [Tool Description]](#3221-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#3222-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (subagent guidance) [System Prompt]](#3223-tool-usage-subagent-guidance-system-prompt)
         4. [Writing subagent prompts (System Prompt)](#3224-writing-subagent-prompts-system-prompt)
         5. [Fork usage guidelines (System Prompt)](#3225-fork-usage-guidelines-system-prompt)
         6. [Agent mention (System Reminder)](#3226-agent-mention-system-reminder)
         7. [Worker fork execution (Agent Prompt)](#3227-worker-fork-execution-agent-prompt)
   3. [Agent Safety & Design](#33-agent-safety-design)
      1. [Autonomous Execution & Action Safety](#331-autonomous-execution-action-safety)
         1. [Auto mode (System Prompt)](#3311-auto-mode-system-prompt)
         2. [System section (System Prompt)](#3312-system-section-system-prompt)
         3. [Tool execution denied (System Prompt)](#3313-tool-execution-denied-system-prompt)
      2. [Agent Design & Creation](#332-agent-design-creation)
         1. [Agent creation architect (Agent Prompt)](#3321-agent-creation-architect-agent-prompt)
         2. [Agent Summary Generation (System Prompt)](#3322-agent-summary-generation-system-prompt)
4. [Task, Memory & Session Management](#4-task-memory-session-management)
   1. [Task & Todo Management](#41-task-todo-management)
      1. [TodoWrite (Tool Description)](#411-todowrite-tool-description)
      2. [TaskCreate (Tool Description)](#412-taskcreate-tool-description)
      3. [TaskList (teammate workflow) [Tool Description]](#413-tasklist-teammate-workflow-tool-description)
      4. [Tool usage (task management) [System Prompt]](#414-tool-usage-task-management-system-prompt)
      5. [TodoWrite reminder (System Reminder)](#415-todowrite-reminder-system-reminder)
      6. [Task tools reminder (System Reminder)](#416-task-tools-reminder-system-reminder)
      7. [Task status (System Reminder)](#417-task-status-system-reminder)
   2. [Memory & Context Persistence](#42-memory-context-persistence)
      1. [Memory Systems & Persistence](#421-memory-systems-persistence)
         1. [Memory file contents (System Reminder)](#4211-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#4212-nested-memory-contents-system-reminder)
         3. [Agent memory instructions (System Prompt)](#4213-agent-memory-instructions-system-prompt)
         4. [Description part of memory instructions (System Prompt)](#4214-description-part-of-memory-instructions-system-prompt)
         5. [Memory system (private feedback) [System Prompt]](#4215-memory-system-private-feedback-system-prompt)
         6. [Determine which memory files to attach (Agent Prompt)](#4216-determine-which-memory-files-to-attach-agent-prompt)
         7. [Session memory update instructions (Agent Prompt)](#4217-session-memory-update-instructions-agent-prompt)
         8. [Session memory template (Data)](#4218-session-memory-template-data)
      2. [Context Compaction & Conversation Summarization](#422-context-compaction-conversation-summarization)
         1. [Conversation summarization (Agent Prompt)](#4221-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#4222-recent-message-summarization-agent-prompt)
         3. [Context compaction summary (System Prompt)](#4223-context-compaction-summary-system-prompt)
         4. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#4224-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
         5. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#4225-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
         6. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#4226-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
   3. [Session State & Analytics](#43-session-state-analytics)
      1. [Session & Resource Monitoring](#431-session-resource-monitoring)
         1. [Token usage (System Reminder)](#4311-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#4312-usd-budget-system-reminder)
         3. [Session continuation (System Reminder)](#4313-session-continuation-system-reminder)
         4. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#4314-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      2. [Session Metadata & Naming](#432-session-metadata-naming)
         1. [Coding session title generator (Agent Prompt)](#4321-coding-session-title-generator-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#4322-session-search-assistant-agent-prompt)
         3. [Status line setup (Agent Prompt)](#4323-status-line-setup-agent-prompt)
      3. [Usage Insights & Analytics](#433-usage-insights-analytics)
         1. [Insights friction analysis (System Prompt)](#4331-insights-friction-analysis-system-prompt)
         2. [Insights on the horizon (System Prompt)](#4332-insights-on-the-horizon-system-prompt)
         3. [Insights session facets extraction (System Prompt)](#4333-insights-session-facets-extraction-system-prompt)
         4. [Insights suggestions (System Prompt)](#4334-insights-suggestions-system-prompt)
         5. [Insights at a glance summary (System Prompt)](#4335-insights-at-a-glance-summary-system-prompt)
      4. [Prompt Suggestion & User Intent Prediction](#434-prompt-suggestion-user-intent-prediction)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#4341-prompt-suggestion-generator-v2-agent-prompt)
         2. [Bash command description writer (Agent Prompt)](#4342-bash-command-description-writer-agent-prompt)
         3. [Bash command prefix detection (Agent Prompt)](#4343-bash-command-prefix-detection-agent-prompt)
   4. [Learning & Scheduling](#44-learning-scheduling)
      1. [Learning Mode & Educational Features](#441-learning-mode-educational-features)
         1. [Learning mode (System Prompt)](#4411-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#4412-learning-mode-insights-system-prompt)
      2. [Scheduling & Cron Jobs](#442-scheduling-cron-jobs)
         1. [CronCreate (Tool Description)](#4421-croncreate-tool-description)
5. [Git, Code Quality & Project Setup](#5-git-code-quality-project-setup)
   1. [Git & GitHub Workflows](#51-git-github-workflows)
      1. [Git Operations & Version Control](#511-git-operations-version-control)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#5111-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#5112-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#5113-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#5114-bash-git-—-prefer-new-commits-tool-description)
         5. [EnterWorktree (Tool Description)](#5115-enterworktree-tool-description)
         6. [ExitWorktree (Tool Description)](#5116-exitworktree-tool-description)
         7. [Quick git commit (Agent Prompt)](#5117-quick-git-commit-agent-prompt)
         8. [Quick PR creation (Agent Prompt)](#5118-quick-pr-creation-agent-prompt)
         9. [Session title and branch generation (Agent Prompt)](#5119-session-title-and-branch-generation-agent-prompt)
         10. [Git status (System Prompt)](#51110-git-status-system-prompt)
      2. [GitHub & PR Workflows](#512-github-pr-workflows)
         1. [/pr-comments slash command (Agent Prompt)](#5121-pr-comments-slash-command-agent-prompt)
         2. [/review-pr slash command (Agent Prompt)](#5122-review-pr-slash-command-agent-prompt)
         3. [GitHub Actions workflow for @claude mentions (Data)](#5123-github-actions-workflow-for-claude-mentions-data)
         4. [GitHub App installation PR description (Data)](#5124-github-app-installation-pr-description-data)
   2. [Code Quality & Engineering Standards](#52-code-quality-engineering-standards)
      1. [Code Quality & Engineering Practices](#521-code-quality-engineering-practices)
         1. [Doing tasks (software engineering focus) [System Prompt]](#5211-doing-tasks-software-engineering-focus-system-prompt)
         2. [Doing tasks (avoid over-engineering) [System Prompt]](#5212-doing-tasks-avoid-over-engineering-system-prompt)
         3. [Doing tasks (minimize file creation) [System Prompt]](#5213-doing-tasks-minimize-file-creation-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#5214-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no premature abstractions) [System Prompt]](#5215-doing-tasks-no-premature-abstractions-system-prompt)
         6. [Doing tasks (no unnecessary additions) [System Prompt]](#5216-doing-tasks-no-unnecessary-additions-system-prompt)
         7. [Doing tasks (no unnecessary error handling) [System Prompt]](#5217-doing-tasks-no-unnecessary-error-handling-system-prompt)
         8. [Doing tasks (read before modifying) [System Prompt]](#5218-doing-tasks-read-before-modifying-system-prompt)
         9. [Doing tasks (security) [System Prompt]](#5219-doing-tasks-security-system-prompt)
         10. [Doing tasks (ambitious tasks) [System Prompt]](#52110-doing-tasks-ambitious-tasks-system-prompt)
         11. [Doing tasks (blocked approach) [System Prompt]](#52111-doing-tasks-blocked-approach-system-prompt)
         12. [Doing tasks (help and feedback) [System Prompt]](#52112-doing-tasks-help-and-feedback-system-prompt)
         13. [Doing tasks (no time estimates) [System Prompt]](#52113-doing-tasks-no-time-estimates-system-prompt)
      2. [Verification & Quality Assurance](#522-verification-quality-assurance)
         1. [Verification specialist (Agent Prompt)](#5221-verification-specialist-agent-prompt)
         2. [Worker instructions (System Prompt)](#5222-worker-instructions-system-prompt)
   3. [Security Monitoring & Project Initialization](#53-security-monitoring-project-initialization)
      1. [Security Monitoring & Threat Detection](#531-security-monitoring-threat-detection)
         1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#5311-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#5312-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         3. [/security-review slash command (Agent Prompt)](#5313-security-review-slash-command-agent-prompt)
         4. [Malware analysis after Read tool call (System Reminder)](#5314-malware-analysis-after-read-tool-call-system-reminder)
         5. [Censoring assistance with malicious activities (System Prompt)](#5315-censoring-assistance-with-malicious-activities-system-prompt)
         6. [Executing actions with care (System Prompt)](#5316-executing-actions-with-care-system-prompt)
      2. [CLAUDE.md & Project Initialization](#532-claudemd-project-initialization)
         1. [CLAUDE.md creation (Agent Prompt)](#5321-claudemd-creation-agent-prompt)
         2. [/init CLAUDE.md and skill setup (new version) [Skill]](#5322-init-claudemd-and-skill-setup-new-version-skill)
         3. [Update Magic Docs (Agent Prompt)](#5323-update-magic-docs-agent-prompt)
6. [API, SDK & Extensibility](#6-api-sdk-extensibility)
   1. [Claude API & SDK Documentation](#61-claude-api-sdk-documentation)
      1. [Claude API Reference Documentation](#611-claude-api-reference-documentation)
         1. [Claude API reference — Python (Data)](#6111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#6112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#6113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#6114-claude-api-reference-—-java-data)
         5. [Claude API reference — C# (Data)](#6115-claude-api-reference-—-c-data)
         6. [Claude API reference — PHP (Data)](#6116-claude-api-reference-—-php-data)
         7. [Claude API reference — Ruby (Data)](#6117-claude-api-reference-—-ruby-data)
         8. [Claude API reference — cURL (Data)](#6118-claude-api-reference-—-curl-data)
         9. [Claude model catalog (Data)](#6119-claude-model-catalog-data)
         10. [HTTP error codes reference (Data)](#61110-http-error-codes-reference-data)
         11. [Live documentation sources (Data)](#61111-live-documentation-sources-data)
      2. [Tool Use & Streaming API References](#612-tool-use-streaming-api-references)
         1. [Tool use concepts (Data)](#6121-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6122-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6123-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#6124-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#6125-streaming-reference-—-typescript-data)
         6. [Files API reference — Python (Data)](#6126-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#6127-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#6128-message-batches-api-reference-—-python-data)
      3. [Build with Claude API Skills](#613-build-with-claude-api-skills)
         1. [Build with Claude API (Skill)](#6131-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#6132-build-with-claude-api-reference-guide-skill)
         3. [Claude guide agent (Agent Prompt)](#6133-claude-guide-agent-agent-prompt)
      4. [Agent SDK Reference & Patterns](#614-agent-sdk-reference-patterns)
         1. [Agent SDK reference — Python (Data)](#6141-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#6142-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#6143-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#6144-agent-sdk-patterns-—-typescript-data)
   2. [Hooks, Skills & Slash Commands](#62-hooks-skills-slash-commands)
      1. [Hook System & Lifecycle Events](#621-hook-system-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#6211-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#6212-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#6213-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation prefix (System Reminder)](#6214-hook-stopped-continuation-prefix-system-reminder)
         5. [Hook stopped continuation (System Reminder)](#6215-hook-stopped-continuation-system-reminder)
         6. [Hook success (System Reminder)](#6216-hook-success-system-reminder)
         7. [Hook condition evaluator (Agent Prompt)](#6217-hook-condition-evaluator-agent-prompt)
         8. [Agent Hook (Agent Prompt)](#6218-agent-hook-agent-prompt)
      2. [Skills & Slash Commands](#622-skills-slash-commands)
         1. [Skill (Tool Description)](#6221-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#6222-tool-usage-skill-invocation-system-prompt)
         3. [Invoked skills (System Reminder)](#6223-invoked-skills-system-reminder)
         4. [Simplify (Skill)](#6224-simplify-skill)
         5. [/loop slash command (Skill)](#6225-loop-slash-command-skill)
         6. [/stuck slash command (Skill)](#6226-stuck-slash-command-skill)
         7. [Debugging (Skill)](#6227-debugging-skill)
         8. [Verification specialist (Skill)](#6228-verification-specialist-skill)
         9. [Create verifier skills (Skill)](#6229-create-verifier-skills-skill)
         10. [Update Claude Code Config (Skill)](#62210-update-claude-code-config-skill)
         11. [update-config (7-step verification flow) [Skill]](#62211-update-config-7-step-verification-flow-skill)
         12. [Skillify Current Session (System Prompt)](#62212-skillify-current-session-system-prompt)
   3. [External Tools & MCP Integration](#63-external-tools-mcp-integration)
      1. [Browser Automation & Computer Control](#631-browser-automation-computer-control)
         1. [Computer (Tool Description)](#6311-computer-tool-description)
         2. [Computer action (Tool Parameter)](#6312-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#6313-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#6314-chrome-browser-mcp-tools-system-prompt)
      2. [Web Search & Content Fetching](#632-web-search-content-fetching)
         1. [WebFetch (Tool Description)](#6321-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#6322-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#6323-webfetch-summarizer-agent-prompt)
      3. [MCP Resource & Tool Discovery](#633-mcp-resource-tool-discovery)
         1. [MCP resource no content (System Reminder)](#6331-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#6332-mcp-resource-no-displayable-content-system-reminder)
         3. [ToolSearch (second part) [Tool Description]](#6333-toolsearch-second-part-tool-description)

---

## 1. Bash & Shell Execution

Command execution patterns, safety guidelines, and sandbox enforcement for running shell commands. Covers path handling, command chaining, tool delegation, and security policies for bash operations.

### 1.1 Bash Tool Usage Guidelines

Bash command execution follows patterns that prioritize clarity, efficiency, and safety: use absolute paths to maintain working directory, chain dependent commands with `&&` for error propagation, run independent commands in parallel, quote file paths with spaces, and delegate to specialized tools (Read, Write, Edit, Glob, Grep) rather than bash equivalents for better user experience. Sleep operations require restraint—keep durations brief, avoid polling background tasks, and use check commands for external process monitoring.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Executes a given bash command and returns its output.

#### 1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Write clear, concise descriptions of bash commands—brief for simple commands, but include context for complex piped commands or obscure flags.

#### 1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Maintain current working directory throughout the session by using absolute paths and avoiding cd unless explicitly requested.

#### 1.1.4 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate commands in bash.

#### 1.1.5 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent bash commands as parallel tool calls in a single message to improve efficiency.

#### 1.1.6 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for find, grep, cat, and similar commands; use dedicated tools instead for better user experience.

#### 1.1.7 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.8 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs to use semicolons only when running commands sequentially but failure of earlier commands does not matter.

#### 1.1.9 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Directs chaining dependent commands with `&&` in a single bash call to ensure sequential execution with failure propagation.

#### 1.1.10 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Allows optional timeout configuration in milliseconds up to a maximum, with a default timeout applied if not specified.

#### 1.1.11 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Requires verifying the parent directory exists using `ls` before creating new directories or files.

#### 1.1.12 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not, with environment initialized from user profile.

#### 1.1.13 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Prefer built-in tools over Bash equivalents because they provide better user experience and easier permission review.

#### 1.1.14 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Output text directly instead of using echo or printf.

#### 1.1.15 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Use the Grep tool for content search instead of grep or rg commands.

#### 1.1.16 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Use the Edit tool for file editing instead of sed or awk commands.

#### 1.1.17 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Use the Glob tool for file search instead of find or ls commands.

#### 1.1.18 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Use the Read tool for file reading instead of cat, head, or tail commands.

#### 1.1.19 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Use the Write tool for file writing instead of echo or cat commands.

#### 1.1.20 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Requires keeping sleep duration to 1-5 seconds to avoid blocking the user.

#### 1.1.21 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Prohibits polling background tasks started with `run_in_background`; Claude will be notified when they complete.

#### 1.1.22 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Prohibits sleeping between commands that can run immediately.

#### 1.1.23 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Directs using check commands like `gh run view` instead of sleeping when polling external processes.

### 1.2 Bash Sandbox Security & Policy

Sandbox enforcement is mandatory and stateless: all commands default to sandbox mode with no exceptions, each command is evaluated independently, and disabling the sandbox requires explicit user permission. Sandbox failures are diagnosed through specific error patterns (access denied, network failures, operation not permitted, Unix socket errors), and Claude immediately retries failed commands with sandbox disabled without asking. Sensitive paths like credentials and shell configuration files cannot be added to allowlists, and temporary files must use `$TMPDIR` or `${SANDBOX_TMPDIR_FN()}` instead of `/tmp`.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

If a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always default to running commands within the sandbox; only disable it when the user requests or sandbox restrictions are evident.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied to paths outside allowed directories indicates sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing evidence of sandbox-caused failures.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "Operation not permitted" errors as evidence of sandbox restrictions on file and network operations.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Recognizes Unix socket connection errors as evidence of sandbox restrictions.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure modes.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Requires treating each command individually and defaulting to sandbox mode for future commands even after running one with `dangerouslyDisableSandbox: true`.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provides the header phrase for responding when sandbox-caused failures are detected.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry a failed command with `dangerouslyDisableSandbox: true` without asking the user.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode instead of `/tmp` directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

---

## 2. File, Editor & Output Tools

Tools and guidelines for reading, writing, and navigating files; IDE integration; user interaction patterns; and communication style standards for responses.

### 2.1 File System & Notebook Tools

Dedicated tools for file reading, writing, editing, searching, and Jupyter notebook manipulation, replacing bash equivalents for clearer intent.

#### 2.1.1 File System Tool Descriptions

Dedicated file system tools replace bash equivalents to provide better user experience and clearer intent: Read handles file viewing with multimodal support (images, PDFs with page ranges, notebooks), Write creates files, Edit performs precise string replacements while preserving indentation, Glob finds files by pattern matching, and Grep searches content with regex and filtering. These tools should be the default choice for file operations, with Bash reserved for system commands and terminal operations.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the filesystem with support for images, PDFs (with page ranges), and Jupyter notebooks, defaulting to the first 100 lines unless otherwise specified.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the filesystem, preferring the Edit tool for modifications and avoiding creation of documentation files unless explicitly requested.

##### 2.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with requirements to preserve indentation, prefer editing existing files, and ensure unique old_string matches.

##### 2.1.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob syntax like "**/*.js" to find files by name, returning results sorted by modification time.

##### 2.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting regex patterns, file filtering, and multiple output modes for content-based searching across codebases.

##### 2.1.1.6 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs Claude to use the Edit tool instead of sed or awk for file editing operations.

##### 2.1.1.7 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool instead of cat, head, tail, or sed for file reading.

##### 2.1.1.8 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

##### 2.1.1.9 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs Claude to use the Grep tool instead of grep or rg for searching file contents.

##### 2.1.1.10 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool instead of find or ls for file discovery.

##### 2.1.1.11 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use Write tool instead of cat heredoc or echo redirection for file creation.

#### 2.1.2 File State & Content Notifications

Alerts Claude to file state anomalies and content limitations, including empty files, offset mismatches, and truncation due to size constraints. Directs appropriate tool usage when full content access is needed.

##### 2.1.2.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 2.1.2.2 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that requested file read offset exceeds actual file length and provides total line count.

##### 2.1.2.3 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to first N lines and directs to use Read tool for additional content.

##### 2.1.2.4 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs to use Read tool if needed.

#### 2.1.3 Jupyter Notebook & Data Science Tools

Enables direct editing of Jupyter notebook cell contents within .ipynb files, supporting insertion and deletion operations for interactive data science workflows.

##### 2.1.3.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing their contents, supporting insert and delete operations on individual cells within .ipynb files.

### 2.2 IDE Integration & User Interaction

Real-time IDE awareness through LSP, diagnostic feedback, and interactive tools for clarifying questions, visual option previews, and user decision-making during execution.

#### 2.2.1 IDE & Editor Integration

Real-time awareness of user interactions within the IDE, including file operations, code selections, and diagnostic feedback. Language Server Protocol integration provides code intelligence capabilities like symbol navigation, type information, and reference tracking.

##### 2.2.1.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that user opened a file in the IDE, which may or may not relate to current task.

##### 2.2.1.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Alerts Claude when a user selects specific lines of code in the IDE, providing file context and line numbers.

##### 2.2.1.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by user or linter and provides relevant changes with line numbers for awareness.

##### 2.2.1.4 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the codebase or IDE.

##### 2.2.1.5 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol integration for code intelligence features including symbol navigation, references, hover information, and call hierarchy analysis.

#### 2.2.2 User Interaction & Question Tools

Facilitates interactive decision-making through clarifying questions, visual option previews, and lightweight side-question handling, allowing users to refine requirements and compare alternatives during execution.

##### 2.2.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Use AskUserQuestion to gather user preferences, clarify ambiguous instructions, and offer implementation choices during execution. In plan mode, use it to clarify requirements before finalizing the plan, not to request plan approval.

##### 2.2.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Use the optional preview field on single-select question options to display self-contained HTML fragments like UI mockups, code snippets, and diagrams for visual comparison.

##### 2.2.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using monospace markdown boxes, supporting ASCII mockups, code snippets, diagrams, and configuration examples for single-select questions.

##### 2.2.2.4 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude to answer a side question directly without tools as a lightweight separate agent, with no follow-up capability and no ability to take actions.

### 2.3 Response Style & Utility Execution

Communication standards for concise, answer-first responses with precise code citations, plus foundational execution utilities for pausing, messaging, and file management.

#### 2.3.1 Output Style & Communication Guidelines

Defines communication standards for clarity and efficiency: concise, answer-first responses without filler or inner monologue; precise code references with file paths and line numbers; and context-aware formatting that adapts between sub-agent reporting and detailed standalone writeups.

##### 2.3.1.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler and preamble, and focusing text output on decisions, status updates, and blockers.

##### 2.3.1.2 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Instructs Claude to produce concise, polished output without filler, repetition, or inner monologue, getting to the point quickly while preserving important information.

##### 2.3.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 2.3.1.4 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing code for easy user navigation to source locations.

##### 2.3.1.5 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Defines rules for generating brief, past-tense summaries of coding assistant tool usage focused on user-visible outcomes in under 8 words.

##### 2.3.1.6 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that a specific output style is active and instructs it to follow that style's guidelines.

##### 2.3.1.7 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise sub-agent reporting and detailed standalone writeups based on caller context, with guidance on file paths and code snippets.

##### 2.3.1.8 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering absolute path usage, response formatting, emoji avoidance, and tool call punctuation conventions.

#### 2.3.2 Miscellaneous Utility Tools

Provides foundational execution utilities including controlled pausing, user messaging with progress checkpoints, session-isolated file management, and diagnostic best practices for command execution.

##### 2.3.2.1 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input, preferred over bash sleep commands as it avoids holding shell processes.

##### 2.3.2.2 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to use SendUserMessage for all user-facing replies, providing immediate acknowledgment before work and checkpoints during longer tasks, keeping messages concise and information-rich.

##### 2.3.2.3 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, supporting intermediate results, temporary scripts, and working files.

##### 2.3.2.4 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Do not retry failing commands in a sleep loop — diagnose the root cause.

---

## 3. Agent Orchestration & Planning

Frameworks for spawning, coordinating, and governing autonomous agents and subagents, including structured planning workflows, multi-agent teams, and safety controls for autonomous execution.

### 3.1 Planning & Implementation Design

Structured workflows for codebase exploration and implementation planning before execution, with read-only plan modes, user approval gates, and iterative refinement.

#### 3.1.1 Planning Mode & Implementation Planning

Structured workflow for exploring codebases and designing implementations before execution. Plan mode enforces read-only exploration with iterative refinement, parallel subagent analysis, and explicit user approval gates before coding begins. Supports multiple activation patterns—5-phase workflows, iterative pair-planning, and subagent variants—with plan file tracking and verification checkpoints.

##### 3.1.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore codebase and design implementation approaches for user approval before coding, recommended for non-trivial tasks involving multiple approaches, architectural decisions, or multi-file changes.

##### 3.1.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of implementation planning and requests user approval to proceed with coding, used only for tasks requiring code implementation rather than research or exploration.

##### 3.1.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow: initial understanding via parallel exploration agents, design via planning agents, review, implementation, and mode exit. Prohibits edits except to the plan file and requires explicit tool calls for approval.

##### 3.1.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative pair-planning with the user: explore code, update the plan file incrementally, ask clarifying questions, and converge when ambiguities are resolved. Prohibits non-readonly actions except plan file edits.

##### 3.1.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents: prohibits edits and non-readonly tools except to the plan file, and instructs the agent to answer queries comprehensively while asking clarifying questions.

##### 3.1.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after a previous exit: read the existing plan, evaluate if the new request is the same task or different, and either modify or overwrite the plan accordingly.

##### 3.1.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and execution can now proceed with edits and tool usage.

##### 3.1.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file and instructs Claude to continue working on it if relevant and incomplete.

##### 3.1.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly after implementation.

##### 3.1.1.10 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes concise implementation plans to the plan file, listing modified files and changes without prose, with a 40-line hard limit.

##### 3.1.1.11 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases, designs implementation plans with step-by-step strategies, identifies critical files, and considers architectural trade-offs without modifying files.

#### 3.1.2 Codebase Exploration Agents

Read-only search and navigation capabilities for codebases using pattern matching and file inspection. Supports both direct tool usage for targeted queries and delegated exploration for comprehensive research across large codebases.

##### 3.1.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist for navigating codebases using glob patterns, grep, and file reading, with strict prohibition on file modifications, creation, or state changes, optimized for fast parallel tool execution.

##### 3.1.2.2 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines the read-only Explore subagent's strengths in codebase searching and analysis, with guidelines emphasizing broad search strategies, thoroughness, and prohibition on file creation or modification.

##### 3.1.2.3 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Instructs Claude to use Task tool with exploration subagent for broader codebase exploration and deep research when simple searches prove insufficient.

##### 3.1.2.4 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob and Grep tools directly for simple, directed codebase searches like finding specific files, classes, or functions.

### 3.2 Multi-Agent Coordination

Orchestration of agent swarms and subagent delegation for parallelized work, including team lifecycle management, inter-agent messaging, and background execution.

#### 3.2.1 Multi-Agent Teams & Coordination

Orchestrates swarms of specialized agents working in parallel on decomposed tasks. Agents coordinate through structured messaging, shared team memory, and protocol-based communication while a coordinator manages team lifecycle, task distribution, and result aggregation. Enables large-scale parallelized work with graceful shutdown and resource cleanup.

##### 3.2.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Coordinates multi-agent teams by creating teams, spawning teammates with specific agent types, assigning tasks, and managing team workflows including idle states and message delivery.

##### 3.2.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completes, requiring all active members to be terminated first before cleanup can proceed.

##### 3.2.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables agent-to-agent messaging and structured protocol communication in teams, supporting direct messages, broadcasts, shutdown requests, and plan approval workflows.

##### 3.2.1.4 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown-formatted messages to users with optional file attachments, using status labels to indicate whether the message is a direct reply or proactive notification.

##### 3.2.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with a specific name and identity, instructs it to read team config and task list, and requires messaging teammates by name rather than UUID.

##### 3.2.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before returning a final response in non-interactive mode.

##### 3.2.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool for teammate communication, with individual messaging and sparingly used team-wide broadcasts.

##### 3.2.1.8 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and content for injection into conversation context.

##### 3.2.1.9 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for coordinator agents delegating tasks to subagents, handling waiting states, and reporting results with independent context and specific subagent types.

##### 3.2.1.10 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining e2e test recipes, spawning background worker agents in isolated worktrees, and tracking PR progress across all units.

#### 3.2.2 Subagent Launching & Delegation

Mechanisms for spawning specialized subagent processes to autonomously execute complex multi-step tasks in isolation. Subagents inherit context selectively, execute with dedicated tool access, and report structured results. Supports background execution, concurrent work, and worktree isolation to parallelize independent operations without context pollution.

##### 3.2.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guide for the Agent tool covering subagent launching, concurrent execution, background tasks, resumption via messaging, worktree isolation, and context inheritance for forks.

##### 3.2.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool for launching specialized subagent subprocesses to autonomously handle complex multi-step tasks, with available agent types and tool access.

##### 3.2.2.3 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using subagents effectively for parallelizing independent queries and protecting context, while avoiding duplicated work.

##### 3.2.2.4 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts, distinguishing between context-inheriting agents (directive-style) and fresh agents (full-context briefing), emphasizing specific details over generic commands.

##### 3.2.2.5 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Provides guidelines for forking subagents for research and implementation work, prohibiting mid-flight output reading and fabrication of fork results, and emphasizing trust in completion notifications.

##### 3.2.2.6 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that user wants to invoke an agent and to pass required context appropriately.

##### 3.2.2.7 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Executes directives directly without spawning sub-agents, commits file changes with hash reporting, and returns structured factual results under 500 words with scope/result/files/issues format.

### 3.3 Agent Safety & Design

Permission models, approval workflows, and architectural methods for designing safe autonomous agents with optimized system prompts and behavioral specifications.

#### 3.3.1 Autonomous Execution & Action Safety

Governs Claude's autonomous task execution through permission models, approval workflows, and graceful error handling. Balances efficiency with safety by defining when Claude proceeds independently versus when user consent is required.

##### 3.3.1.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Instructs Claude to execute tasks autonomously with minimal interruptions, making reasonable assumptions and proceeding directly to implementation rather than planning or asking clarifying questions.

##### 3.3.1.2 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Describes tool execution in permission modes, user approval workflows, and guidance for handling denied tool calls by adjusting approach rather than retrying.

##### 3.3.1.3 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable alternatives when tool execution is denied, avoiding malicious workarounds, and stopping to explain if the capability is essential.

#### 3.3.2 Agent Design & Creation

Provides systematic methods for architecting custom AI agents with optimized system prompts, expert personas, and structured behavioral specifications. Generates actionable agent definitions with performance tuning and project-aligned conventions.

##### 3.3.2.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design high-performance custom AI agents by extracting user intent, creating expert personas, architecting comprehensive system prompts, optimizing for performance, and generating JSON output with identifier, usage guidelines, and behavioral instructions aligned to project conventions.

##### 3.3.2.2 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word agent action summaries in present tense, with examples of good and bad formats.

---

## 4. Task, Memory & Session Management

Persistent storage, context management, and session tracking across conversations and work sessions, including task lists, memory files, context compaction, and usage analytics.

### 4.1 Task & Todo Management

Task management tools organize multi-step work into structured lists with clear progress tracking through pending, in-progress, and completed states. TodoWrite breaks down coding sessions into actionable tasks and marks them complete immediately upon finishing, while TaskCreate and TaskList support team coordination by making work discoverable and allowing teammates to claim tasks in order. Task output can be monitored via the TaskOutput tool, and stale tasks should be cleaned up to maintain clarity.

#### 4.1.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with imperative and active forms, tracking progress through pending, in-progress, and completed states.

#### 4.1.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress on multi-step work, with support for task descriptions, active forms, and team coordination.

#### 4.1.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes how teammates discover and claim available work from shared task lists, preferring tasks in ID order and managing blockers within team coordination.

#### 4.1.4 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite tool to break down work, track progress, and mark tasks complete immediately upon finishing.

#### 4.1.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task tracking when relevant and to clean up stale todo lists.

#### 4.1.6 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task creation and update tools for progress tracking when relevant, and to clean up stale tasks.

#### 4.1.7 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Informs Claude that task output can be checked using the TaskOutput tool.

### 4.2 Memory & Context Persistence

Persistent memory files for user profiles and domain knowledge, plus context compaction techniques for preserving task state across conversation boundaries.

#### 4.2.1 Memory Systems & Persistence

Persistent storage mechanisms for user profiles, domain knowledge, session state, and feedback across conversations. Memory files capture user roles, preferences, known issues, and learnings with structured templates and update protocols. Agents selectively attach relevant memory to maintain personalized context and institutional knowledge.

##### 4.2.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Provides Claude with the contents of a memory file stored at a specific path.

##### 4.2.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Delivers the contents of a nested memory file structure to Claude.

##### 4.2.1.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

##### 4.2.1.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines memory descriptions as capturing user role, goals, and knowledge to enable personalized assistance while avoiding negative judgments or irrelevant details.

##### 4.2.1.5 [Memory system (private feedback) [System Prompt]](system-prompts/system-prompt-memory-system-private-feedback.md)

Describes private feedback memory type for storing user guidance and corrections, with validation to check for contradictions against team feedback before saving.

##### 4.2.1.6 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to assist Claude Code in processing user queries, excluding usage references for recently-used tools but including warnings and known issues.

##### 4.2.1.7 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files by editing existing sections with detailed, info-dense content while preserving structure, headers, and italic descriptions, focusing on actionable specifics and current state.

##### 4.2.1.8 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files documenting current state, task specification, files, workflow, errors, codebase components, learnings, results, and worklog.

#### 4.2.2 Context Compaction & Conversation Summarization

Techniques for condensing conversation history into structured summaries that preserve task state, technical discoveries, errors, and next steps across context window boundaries. Supports full conversation analysis, recent message extraction, and minimal feature-flagged approaches to enable efficient resumption without losing critical details.

##### 4.2.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries covering primary requests, technical concepts, files examined, errors encountered, problem-solving efforts, all user messages, pending tasks, current work, and next steps with direct quotes.

##### 4.2.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions covering primary requests, technical concepts, files examined, errors, problem-solving, user messages, pending tasks, current work, and next steps without duplicating earlier retained context.

##### 4.2.2.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries covering task overview, current state, discoveries, next steps, and preserved context to enable efficient resumption across context windows.

##### 4.2.2.4 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

System prompt for analyzing full conversations chronologically, identifying user intents, approaches, key decisions, specific details, errors, and user feedback for compaction.

##### 4.2.2.5 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Lean experimental version of analysis instructions using private planning scratchpad for coverage notes without detailed content, deferring specifics to summary section.

##### 4.2.2.6 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

System prompt for analyzing recent messages chronologically, identifying user intents, approaches, key decisions, specific details, errors, and user feedback for compaction.

### 4.3 Session State & Analytics

Session identity, resource monitoring, usage analytics, and prompt suggestion tools that track token budgets, surface friction points, and anticipate user intent.

#### 4.3.1 Session & Resource Monitoring

Tracks resource consumption and session state through token usage, budget spending, and cross-machine continuity awareness. Optimizes tool execution by maximizing parallel calls for independent operations while maintaining sequential execution for dependent tasks.

##### 4.3.1.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 4.3.1.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including spent, total, and remaining budget.

##### 4.3.1.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory may have changed.

##### 4.3.1.4 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while maintaining sequential execution for dependent calls to increase efficiency.

#### 4.3.2 Session Metadata & Naming

Manages session identity and discoverability through automated title generation, metadata-based search with relevance ranking, and terminal status line configuration that reflects shell environment state.

##### 4.3.2.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise 3–7 word sentence-case titles capturing the main goal of a coding session, returning JSON with a single title field.

##### 4.3.2.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user search queries by matching tags, titles, branches, summaries, and transcripts with inclusive matching logic that prioritizes exact tag matches highest.

##### 4.3.2.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by converting shell PS1 configurations to statusLine commands, handling escape sequences, ANSI colors, and JSON input from the runtime environment.

#### 4.3.3 Usage Insights & Analytics

Analyzes Claude Code usage patterns to surface friction points, identify optimization opportunities, and generate targeted recommendations. Extracts structured session data to understand user satisfaction, workflow bottlenecks, and emerging autonomous capabilities.

##### 4.3.3.1 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify friction patterns and categorize recurring issues into three categories with examples, formatted as JSON with actionable descriptions.

##### 4.3.3.2 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future opportunities in Claude Code usage data, focusing on autonomous workflows, parallel agents, and iterative testing patterns with copyable prompts for experimentation.

##### 4.3.3.3 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts including goal categories, user satisfaction signals, and friction types, with strict guidelines distinguishing user requests from autonomous Claude actions.

##### 4.3.3.4 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions from usage data including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to user workflows.

##### 4.3.3.5 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part usage insights summary covering what's working, hindrances (Claude-side and user-side), quick wins to try, and ambitious workflows for improved models, using coaching tone and avoiding numerical stats.

#### 4.3.4 Prompt Suggestion & User Intent Prediction

Anticipates user intent and generates contextual suggestions for next steps, including bash command documentation and security validation to guide and protect command execution.

##### 4.3.4.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent conversation context, avoiding evaluative, question, or Claude-voice suggestions.

##### 4.3.4.2 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or flag-heavy commands.

##### 4.3.4.3 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands, returning the safe prefix or flagging injection risks to enforce allowlist-based command execution safety.

### 4.4 Learning & Scheduling

Educational features that invite human participation in design decisions, and cron-based scheduling for recurring automated tasks.

#### 4.4.1 Learning Mode & Educational Features

Enables hands-on learning by requesting human participation in design and implementation decisions while still making progress on tasks. Provides contextual educational insights tied to the specific codebase rather than generic programming concepts.

##### 4.4.1.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt balancing task completion with hands-on education by requesting human contributions for design decisions, business logic, and algorithms, with TodoList integration and structured Learn by Doing request format.

##### 4.4.1.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code generation when learning mode is active, focusing on implementation choices specific to the codebase rather than general programming concepts.

#### 4.4.2 Scheduling & Cron Jobs

Schedules one-shot and recurring tasks using standard cron syntax with automatic load distribution through jitter and timezone-aware execution in the user's local context.

##### 4.4.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron-based jobs using standard 5-field cron syntax in user's local timezone, with guidance on avoiding :00 and :30 minute marks for load distribution and automatic expiration after 3 days.

---

## 5. Git, Code Quality & Project Setup

Version control workflows, code quality standards, security monitoring, and project initialization practices that govern how code is written, reviewed, and maintained.

### 5.1 Git & GitHub Workflows

Safe git operations including commit creation, PR workflows, worktree isolation, and GitHub Actions integration with expert code review capabilities.

#### 5.1.1 Git Operations & Version Control

Git workflows emphasize safety and clarity: create new commits rather than amending, never skip hooks or signing without explicit user request, and investigate hook failures instead of bypassing them. Destructive operations like force-push and hard-reset require considering safer alternatives first. Worktrees provide isolated branch environments for parallel work, while structured commit and PR creation processes analyze all changes, generate aligned messages, and enforce safety protocols. Session titles and branch names follow concise naming conventions to maintain clarity across collaborative workflows.

##### 5.1.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Before running destructive git operations like reset --hard or push --force, consider safer alternatives that achieve the same goal.

##### 5.1.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols to avoid destructive operations, hook management, proper staging practices, and PR creation with gh commands. Emphasizes creating new commits over amending, never skipping hooks without explicit user request, and analyzing all changes before committing.

##### 5.1.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Never skip hooks or bypass signing unless the user explicitly requests it; investigate and fix underlying issues when hooks fail.

##### 5.1.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Prefer creating new commits over amending existing ones.

##### 5.1.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it when explicitly requested, supporting both git repositories and VCS-agnostic workflows via hooks.

##### 5.1.1.6 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree, returning to the original directory with options to keep or remove the worktree and its branch, while clearing session-dependent caches.

##### 5.1.1.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting messages aligned to repository style, and executing commit with heredoc syntax while enforcing safety protocols against amending and secret leakage.

##### 5.1.1.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates or updates pull requests by analyzing all changes, creating feature branches, committing with attribution, pushing to origin, and generating PR titles and bodies with test plans using heredoc syntax.

##### 5.1.1.9 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates concise session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase) from coding task descriptions.

##### 5.1.1.10 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status including branch, main branch reference, working tree status, and recent commits as a conversation snapshot.

#### 5.1.2 GitHub & PR Workflows

Integrates GitHub pull request workflows through expert code review, comment fetching with diff context, and GitHub Actions automation triggered by @claude mentions. Enables seamless code analysis and collaborative review within GitHub's native environment.

##### 5.1.2.1 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including both PR-level and code review comments with diff context, preserving threading and showing file/line references.

##### 5.1.2.2 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Conducts expert code reviews of GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, improvements, and risks with focus on correctness, conventions, performance, testing, and security.

##### 5.1.2.3 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, PRs, or comments, with configurable permissions and optional custom prompts.

##### 5.1.2.4 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining functionality, security model, and how to trigger Claude via @mentions.

### 5.2 Code Quality & Engineering Standards

Disciplined coding practices emphasizing simplicity, scope control, security-first development, and adversarial verification through automated testing.

#### 5.2.1 Code Quality & Engineering Practices

Establishes disciplined coding practices emphasizing simplicity, scope control, and security. Directs Claude to make only requested changes, avoid premature abstractions and unnecessary error handling, delete unused code rather than maintain compatibility shims, and prioritize secure coding while deferring to user judgment on ambitious tasks.

##### 5.2.1.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks and instructs Claude to interpret unclear instructions in that context, applying changes to actual code rather than providing abstract answers.

##### 5.2.1.2 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Directs Claude to make only requested or clearly necessary changes, keeping solutions simple and focused.

##### 5.2.1.3 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

##### 5.2.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims or re-exports.

##### 5.2.1.5 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directs Claude to avoid creating helpers or abstractions for one-time operations or hypothetical requirements, favoring minimal complexity.

##### 5.2.1.6 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directs Claude to avoid adding features, refactoring, or improvements beyond what was requested, including unnecessary documentation.

##### 5.2.1.7 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios and only validate at system boundaries, trusting internal code guarantees.

##### 5.2.1.8 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Directs Claude to read and understand existing code before proposing or making modifications.

##### 5.2.1.9 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to prioritize secure coding practices and avoid introducing OWASP top 10 vulnerabilities like injection and XSS.

##### 5.2.1.10 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Authorizes Claude to attempt ambitious and complex tasks while deferring to user judgment on scope and feasibility.

##### 5.2.1.11 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instructs Claude to explore alternative approaches when blocked rather than retrying failed actions, and to consult the user when stuck.

##### 5.2.1.12 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels when requested.

##### 5.2.1.13 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid providing time estimates or predictions for task completion.

#### 5.2.2 Verification & Quality Assurance

Adversarial testing and validation of implementations through automated builds, test execution, and edge-case probing, paired with post-implementation workflows that simplify changes, run test suites, and prepare code for review.

##### 5.2.2.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarially tests implementations by running builds, test suites, linters, and probes for concurrency/boundary/idempotency issues, then issues PASS/FAIL/PARTIAL verdicts with command output evidence.

##### 5.2.2.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines post-implementation workflow: simplify changes, run unit tests, execute e2e tests, commit and push, then report PR URL for coordinator tracking.

### 5.3 Security Monitoring & Project Initialization

Threat detection, prompt injection prevention, and credential protection for autonomous agents, alongside CLAUDE.md documentation and project onboarding workflows.

#### 5.3.1 Security Monitoring & Threat Detection

Comprehensive security framework for autonomous agent actions covering threat modeling, prompt injection prevention, and scope creep detection. Enforces block rules against destructive git operations, credential leakage, and data exfiltration while permitting authorized security testing and malware analysis without code improvement.

##### 5.3.1.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor evaluating autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with threat model covering long-running tasks in shared environments and detailed evaluation methodology.

##### 5.3.1.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules (git destructive, code from external, production deploy, credential leakage, data exfiltration, etc.) and allow exceptions (test artifacts, local operations, declared dependencies) governing autonomous agent tool actions.

##### 5.3.1.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review analyzing code changes for exploitable vulnerabilities in input validation, authentication, cryptography, injection, and data exposure with high-confidence filtering, false-positive exclusions, and markdown report output.

##### 5.3.1.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Permits Claude to analyze malware behavior and write reports but prohibits improving or augmenting malicious code.

##### 5.3.1.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Establishes guidelines for assisting with authorized security work including pentesting and CTF challenges while refusing requests for destructive attacks, evasion techniques, and unauthorized malicious activities.

##### 5.3.1.6 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes careful decision-making for reversibility and blast radius, requiring user confirmation for destructive, hard-to-reverse, or shared-system actions. Emphasizes investigating unexpected state before deletion and following both spirit and letter of safety guidelines.

#### 5.3.2 CLAUDE.md & Project Initialization

Structured onboarding and documentation system that captures project-specific knowledge, conventions, and setup instructions. Combines codebase analysis with iterative user interviews to create maintainable reference materials and automate recurring workflows.

##### 5.3.2.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md documentation, capturing common build/test commands, high-level architecture, and project-specific conventions without repeating obvious practices or generic guidance.

##### 5.3.2.2 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and optional skills/hooks, including codebase exploration, user interviews, iterative proposal refinement, and creation of project/personal instruction files with skill and hook setup.

##### 5.3.2.3 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Updates Magic Doc files with new learnings from conversations by preserving headers, removing outdated information, and maintaining terse, architecture-focused documentation without duplicating code-obvious details.

---

## 6. API, SDK & Extensibility

Reference documentation, SDK patterns, and extensibility mechanisms for building with Claude, including the Claude API, agent frameworks, hooks, skills, MCP integration, and external tool access.

### 6.1 Claude API & SDK Documentation

Complete reference documentation for the Claude HTTP API and SDKs across multiple languages, covering authentication, streaming, tool use, batch processing, and model selection.

#### 6.1.1 Claude API Reference Documentation

Complete SDK and HTTP API documentation across multiple languages covering authentication, core features like vision and prompt caching, model selection, and error handling.

##### 6.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

##### 6.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

##### 6.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use with BetaToolRunner and manual loops, thinking, server-side tools, PDF input, and context editing.

##### 6.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference with client initialization, basic requests, streaming, thinking, beta tool runner with annotated classes, memory tool handler, effort parameter, prompt caching, and structured output.

##### 6.1.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use with manual JSON schema, effort parameter, prompt caching, token counting, structured output, and server-side tools.

##### 6.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization for Anthropic/Bedrock/Vertex/Foundry, basic requests, streaming, tool use with manual loops, extended thinking, and server-side tools.

##### 6.1.1.7 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference with client initialization, basic requests, streaming, and beta tool runner for automatic tool execution with annotated classes.

##### 6.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude with cURL examples covering basic requests, streaming, tool use, extended thinking, and required headers for authentication and versioning.

##### 6.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact model IDs, aliases, context windows, max output tokens, and user-request resolution mapping.

##### 6.1.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 429, 500, 529) with common causes, fixes, and typed exception handling patterns for SDKs.

##### 6.1.1.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Curated WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories, with extraction prompts for each topic and fallback guidance when WebFetch fails.

#### 6.1.2 Tool Use & Streaming API References

Comprehensive guides for implementing tool-calling patterns, real-time streaming responses, file handling, and batch processing with language-specific examples and best practices.

##### 6.1.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool design.

##### 6.1.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner with @beta_tool decorator, MCP tool conversion helpers, manual agentic loops, code execution with file uploads and container reuse, memory tool, and structured outputs with Pydantic.

##### 6.1.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, server-side tools, code execution with file handling, memory tool with SDK helpers, and structured outputs with Zod validation.

##### 6.1.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference with sync/async examples, handling thinking blocks and tool use, progress tracking, error handling, and best practices for token management and timeout protection.

##### 6.1.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, thinking blocks, tool runner with streaming, final message retrieval, event types, and best practices including SSE format for raw HTTP.

##### 6.1.2.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files (max 500 MB), referencing them in messages via file_id, listing/deleting files, and end-to-end document processing workflows.

##### 6.1.2.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages, file listing/deletion/download, and document processing with citations.

##### 6.1.2.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python SDK reference for the Batches API, covering batch creation, polling for completion, result retrieval, cancellation, and prompt caching integration with 50% cost reduction.

#### 6.1.3 Build with Claude API Skills

Foundational guides for developing with Claude, covering API architecture, model selection, language-specific implementation patterns, and decision routing between single calls, workflows, and agents. Includes an interactive agent that contextualizes Claude's capabilities and documentation.

##### 6.1.3.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, including language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, compaction for long conversations, and comprehensive reading guide.

##### 6.1.3.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, mapping common use cases to relevant documentation sections.

##### 6.1.3.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, the Claude Agent SDK, and the Claude API by fetching official documentation, providing actionable guidance, and referencing local project files and CLAUDE.md conventions.

#### 6.1.4 Agent SDK Reference & Patterns

Agent framework APIs and implementation patterns for building autonomous systems with tool integration, permission controls, MCP support, and session management.

##### 6.1.4.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query/ClaudeSDKClient interfaces, built-in tools, permission modes, MCP support, hooks, subagents, error handling, and session management.

##### 6.1.4.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

TypeScript Agent SDK reference with installation, query interface, built-in tools, permission modes, MCP integration, hooks, subagents, message types, session history, and best practices.

##### 6.1.4.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK code patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, session resumption, and custom system prompts.

##### 6.1.4.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks for tool lifecycle events, subagent definitions, MCP server integration, and session resumption with history retrieval.

### 6.2 Hooks, Skills & Slash Commands

Extensible automation through lifecycle hooks that intercept tool execution, and slash command skills that encapsulate domain-specific workflows like debugging and code review.

#### 6.2.1 Hook System & Lifecycle Events

Extensible event-driven automation framework for Claude Code that intercepts tool execution, permission requests, and agent lifecycle events. Hooks execute custom commands or prompts to control behavior, display messages, and verify completion conditions.

##### 6.2.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide to Claude Code hooks configuration, covering hook structure, events (PermissionRequest, PreToolUse, PostToolUse, etc.), types (command, prompt, agent), and JSON output fields for controlling tool behavior and displaying messages.

##### 6.2.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution.

##### 6.2.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 6.2.1.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides prefix text for hook stopped continuation messages.

##### 6.2.1.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Reports that a hook has stopped continuation with an associated message.

##### 6.2.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook with its output message.

##### 6.2.1.7 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether a condition is met with optional reason for failure.

##### 6.2.1.8 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured JSON results indicating whether an agent completed its assigned plan.

#### 6.2.2 Skills & Slash Commands

Specialized capabilities invoked via slash commands that encapsulate domain-specific workflows like code review, debugging, verification, and configuration management. Skills coordinate multiple agents, external tools, and diagnostic systems to solve complex tasks.

##### 6.2.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Invokes specialized skills and slash commands within the main conversation, requiring immediate execution before generating other responses when a skill matches user intent.

##### 6.2.2.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Instructs Claude to use the Skill tool to execute user-invocable skills invoked via slash commands, only for skills listed in the tool's user-invocable section.

##### 6.2.2.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Notifies Claude of skills invoked in the current session and instructs it to continue following their guidelines.

##### 6.2.2.4 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill launching three parallel review agents for code reuse, quality, and efficiency issues, then fixing identified problems.

##### 6.2.2.5 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts intervals to cron expressions, and schedules recurring tasks with immediate first execution.

##### 6.2.2.6 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, checking CPU/memory/state, and posting diagnostic reports to Slack.

##### 6.2.2.7 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions using debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 6.2.2.8 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering verifier skills, analyzing changes, creating deterministic verification plans, and triggering appropriate verifiers with detailed failure reporting.

##### 6.2.2.9 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive onboarding for creating verifier skills for automated code verification, including auto-detection of project types, browser automation setup (Playwright/Chrome DevTools), interactive Q&A for authentication and test credentials, and skill generation with allowed-tools configuration.

##### 6.2.2.10 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json), including hooks, permissions, environment variables, and MCP server configuration with careful merging of existing settings.

##### 6.2.2.11 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks in Claude Code configuration, including dedup checks, command construction, pipe-testing, JSON validation, live proof, and handoff.

##### 6.2.2.12 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable session processes into reusable skills through structured analysis, multi-round user interviews, and SKILL.md generation with frontmatter, steps, success criteria, and execution annotations.

### 6.3 External Tools & MCP Integration

Web search, browser automation, MCP resource discovery, and dynamic tool schema resolution for connecting Claude to external systems and real-time information.

#### 6.3.1 Browser Automation & Computer Control

Direct control of Chrome browsers through mouse, keyboard, and screenshot capabilities, with system guidance for managing automation workflows, debugging, and tool initialization.

##### 6.3.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Enables mouse and keyboard interaction with a Chrome browser and screenshot capture, with guidance on precise cursor positioning and element clicking.

##### 6.3.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines browser automation actions including clicks, typing, scrolling, keyboard input, and element inspection for Chrome-based computer control.

##### 6.3.1.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidance for browser automation including GIF recording, console debugging, dialog handling, and session management. Emphasizes avoiding browser dialogs that block extension communication and checking tab context before starting automation tasks.

##### 6.3.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the exact procedure for discovering and activating tools like tabs_context_mcp.

#### 6.3.2 Web Search & Content Fetching

Real-time web information retrieval and content extraction with source attribution requirements, caching, and trust-based filtering for summarized results.

##### 6.3.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with a small model, supporting URL redirects and 15-minute caching.

##### 6.3.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff, requiring mandatory source attribution in responses and supporting domain filtering.

##### 6.3.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits (125 chars) for untrusted domains and respecting open-source licenses.

#### 6.3.3 MCP Resource & Tool Discovery

Handles MCP resource availability signaling and deferred tool schema resolution, enabling dynamic tool discovery and invocation through keyword matching and exact name selection.

##### 6.3.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no displayable content.

##### 6.3.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Signals that an MCP resource has content but it cannot be displayed in a readable format.

##### 6.3.3.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by querying against a tool list, supporting exact name selection and keyword-based matching to make tools callable.
