# Claude Code System Prompts Index

Operational and reference material for building, deploying, and maintaining Claude Code-powered systems — from low-level command execution and agent coordination to developer APIs, persistent memory, and workflow automation.

## Table of Contents

1. [Command Execution & Tool Operations](#1-command-execution-tool-operations)
   1. [Bash & Shell Execution](#11-bash-shell-execution)
      1. [Bash Execution Fundamentals](#111-bash-execution-fundamentals)
         1. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
         2. [Bash (maintain cwd) [Tool Description]](#1112-bash-maintain-cwd-tool-description)
         3. [Bash (no newlines) [Tool Description]](#1113-bash-no-newlines-tool-description)
         4. [Bash (parallel commands) [Tool Description]](#1114-bash-parallel-commands-tool-description)
         5. [Bash (sequential commands) [Tool Description]](#1115-bash-sequential-commands-tool-description)
         6. [Bash (semicolon usage) [Tool Description]](#1116-bash-semicolon-usage-tool-description)
         7. [Bash (quote file paths) [Tool Description]](#1117-bash-quote-file-paths-tool-description)
         8. [Bash (working directory) [Tool Description]](#1118-bash-working-directory-tool-description)
         9. [Bash (timeout) [Tool Description]](#1119-bash-timeout-tool-description)
         10. [Bash (verify parent directory) [Tool Description]](#11110-bash-verify-parent-directory-tool-description)
      2. [Sleep & Polling Optimization](#112-sleep-polling-optimization)
         1. [Bash (sleep — keep short) [Tool Description]](#1121-bash-sleep-—-keep-short-tool-description)
         2. [Bash (sleep — no polling background tasks) [Tool Description]](#1122-bash-sleep-—-no-polling-background-tasks-tool-description)
         3. [Bash (sleep — run immediately) [Tool Description]](#1123-bash-sleep-—-run-immediately-tool-description)
         4. [Bash (sleep — use check commands) [Tool Description]](#1124-bash-sleep-—-use-check-commands-tool-description)
         5. [One of six rules for using sleep command (System Prompt)](#1125-one-of-six-rules-for-using-sleep-command-system-prompt)
      3. [PowerShell Tool & Windows Scripting](#113-powershell-tool-windows-scripting)
         1. [PowerShell (Tool Description)](#1131-powershell-tool-description)
         2. [PowerShell edition for 5.1 (System Prompt)](#1132-powershell-edition-for-51-system-prompt)
         3. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#1133-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
   2. [File System & Specialized Dev Tools](#12-file-system-specialized-dev-tools)
      1. [Tool Delegation & Alternatives](#121-tool-delegation-alternatives)
         1. [Bash (prefer dedicated tools) [Tool Description]](#1211-bash-prefer-dedicated-tools-tool-description)
         2. [Bash (alternative — communication) [Tool Description]](#1212-bash-alternative-—-communication-tool-description)
         3. [Bash (alternative — content search) [Tool Description]](#1213-bash-alternative-—-content-search-tool-description)
         4. [Bash (alternative — edit files) [Tool Description]](#1214-bash-alternative-—-edit-files-tool-description)
         5. [Bash (alternative — file search) [Tool Description]](#1215-bash-alternative-—-file-search-tool-description)
         6. [Bash (alternative — read files) [Tool Description]](#1216-bash-alternative-—-read-files-tool-description)
         7. [Bash (alternative — write files) [Tool Description]](#1217-bash-alternative-—-write-files-tool-description)
         8. [Bash (built-in tools note) [Tool Description]](#1218-bash-built-in-tools-note-tool-description)
      2. [File System Tools: Read, Write, Edit, Search](#122-file-system-tools-read-write-edit-search)
         1. [ReadFile (Tool Description)](#1221-readfile-tool-description)
         2. [Write (Tool Description)](#1222-write-tool-description)
         3. [Write (read existing file first) [Tool Description]](#1223-write-read-existing-file-first-tool-description)
         4. [Edit (Tool Description)](#1224-edit-tool-description)
         5. [Grep (Tool Description)](#1225-grep-tool-description)
      3. [Specialized Development Tools](#123-specialized-development-tools)
         1. [REPL (Tool Description)](#1231-repl-tool-description)
         2. [LSP (Tool Description)](#1232-lsp-tool-description)
         3. [NotebookEdit (Tool Description)](#1233-notebookedit-tool-description)
         4. [PushNotification (Tool Description)](#1234-pushnotification-tool-description)
         5. [WebFetch (Tool Description)](#1235-webfetch-tool-description)
         6. [WebSearch (Tool Description)](#1236-websearch-tool-description)
         7. [ToolSearch (second part) [Tool Description]](#1237-toolsearch-second-part-tool-description)
         8. [REPL tool usage and scripting conventions (System Prompt)](#1238-repl-tool-usage-and-scripting-conventions-system-prompt)
   3. [Sandbox Security & Enforcement](#13-sandbox-security-enforcement)
      1. [Bash (sandbox — default to sandbox) [Tool Description]](#131-bash-sandbox-—-default-to-sandbox-tool-description)
      2. [Bash (sandbox — mandatory mode) [Tool Description]](#132-bash-sandbox-—-mandatory-mode-tool-description)
      3. [Bash (sandbox — no exceptions) [Tool Description]](#133-bash-sandbox-—-no-exceptions-tool-description)
      4. [Bash (sandbox — per-command) [Tool Description]](#134-bash-sandbox-—-per-command-tool-description)
      5. [Bash (sandbox — adjust settings) [Tool Description]](#135-bash-sandbox-—-adjust-settings-tool-description)
      6. [Bash (sandbox — explain restriction) [Tool Description]](#136-bash-sandbox-—-explain-restriction-tool-description)
      7. [Bash (sandbox — failure evidence condition) [Tool Description]](#137-bash-sandbox-—-failure-evidence-condition-tool-description)
      8. [Bash (sandbox — evidence list header) [Tool Description]](#138-bash-sandbox-—-evidence-list-header-tool-description)
      9. [Bash (sandbox — evidence: access denied) [Tool Description]](#139-bash-sandbox-—-evidence-access-denied-tool-description)
      10. [Bash (sandbox — evidence: network failures) [Tool Description]](#1310-bash-sandbox-—-evidence-network-failures-tool-description)
      11. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1311-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      12. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1312-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
      13. [Bash (sandbox — response header) [Tool Description]](#1313-bash-sandbox-—-response-header-tool-description)
      14. [Bash (sandbox — retry without sandbox) [Tool Description]](#1314-bash-sandbox-—-retry-without-sandbox-tool-description)
      15. [Bash (sandbox — tmpdir) [Tool Description]](#1315-bash-sandbox-—-tmpdir-tool-description)
      16. [Bash (sandbox — user permission prompt) [Tool Description]](#1316-bash-sandbox-—-user-permission-prompt-tool-description)
      17. [Bash (sandbox — no sensitive paths) [Tool Description]](#1317-bash-sandbox-—-no-sensitive-paths-tool-description)
   4. [Browser Automation Tools](#14-browser-automation-tools)
      1. [Computer (Tool Description)](#141-computer-tool-description)
      2. [BrowserBatch (Tool Description)](#142-browserbatch-tool-description)
      3. [Computer action (Tool Parameter)](#143-computer-action-tool-parameter)
      4. [Chrome browser MCP tools (System Prompt)](#144-chrome-browser-mcp-tools-system-prompt)
      5. [Claude in Chrome browser automation (System Prompt)](#145-claude-in-chrome-browser-automation-system-prompt)
2. [Git, Version Control & CI/CD](#2-git-version-control-cicd)
   1. [Git Safety & Worktrees](#21-git-safety-worktrees)
      1. [Git Workflow Safety](#211-git-workflow-safety)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#2111-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (git — never skip hooks) [Tool Description]](#2112-bash-git-—-never-skip-hooks-tool-description)
         3. [Bash (git — prefer new commits) [Tool Description]](#2113-bash-git-—-prefer-new-commits-tool-description)
         4. [Bash (Git commit and PR creation instructions) [Tool Description]](#2114-bash-git-commit-and-pr-creation-instructions-tool-description)
      2. [Git Worktree & Version Control Tools](#212-git-worktree-version-control-tools)
         1. [EnterWorktree (Tool Description)](#2121-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#2122-exitworktree-tool-description)
         3. [EnterPlanMode (Tool Description)](#2123-enterplanmode-tool-description)
         4. [ExitPlanMode (Tool Description)](#2124-exitplanmode-tool-description)
   2. [Commits, Pull Requests & Code Review](#22-commits-pull-requests-code-review)
      1. [Git Operations: Commits & Pull Requests](#221-git-operations-commits-pull-requests)
         1. [Quick git commit (Agent Prompt)](#2211-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#2212-quick-pr-creation-agent-prompt)
         3. [Session title and branch generation (Agent Prompt)](#2213-session-title-and-branch-generation-agent-prompt)
      2. [Code Review & Security Analysis Agents](#222-code-review-security-analysis-agents)
         1. [/review-pr slash command (Agent Prompt)](#2221-review-pr-slash-command-agent-prompt)
         2. [/security-review slash command (Agent Prompt)](#2222-security-review-slash-command-agent-prompt)
         3. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#2223-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         4. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#2224-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
   3. [GitHub & CI/CD Integration](#23-github-cicd-integration)
      1. [GitHub Actions workflow for @claude mentions (Data)](#231-github-actions-workflow-for-claude-mentions-data)
      2. [GitHub App installation PR description (Data)](#232-github-app-installation-pr-description-data)
      3. [/schedule slash command (Agent Prompt)](#233-schedule-slash-command-agent-prompt)
3. [Multi-Agent Architecture & Coordination](#3-multi-agent-architecture-coordination)
   1. [Agent Design & Spawning](#31-agent-design-spawning)
      1. [Agent Design & Architecture](#311-agent-design-architecture)
         1. [Agent Design Patterns (Skill)](#3111-agent-design-patterns-skill)
         2. [Agent creation architect (Agent Prompt)](#3112-agent-creation-architect-agent-prompt)
         3. [Auto mode rule reviewer (Agent Prompt)](#3113-auto-mode-rule-reviewer-agent-prompt)
         4. [Agent memory instructions (System Prompt)](#3114-agent-memory-instructions-system-prompt)
      2. [Subagent Spawning & Delegation](#312-subagent-spawning-delegation)
         1. [Agent (usage notes) [Tool Description]](#3121-agent-usage-notes-tool-description)
         2. [Subagent delegation examples (System Prompt)](#3122-subagent-delegation-examples-system-prompt)
         3. [Subagent prompt-writing examples (System Prompt)](#3123-subagent-prompt-writing-examples-system-prompt)
         4. [Writing subagent prompts (System Prompt)](#3124-writing-subagent-prompts-system-prompt)
         5. [Tool usage (subagent guidance) [System Prompt]](#3125-tool-usage-subagent-guidance-system-prompt)
         6. [Fork usage guidelines (System Prompt)](#3126-fork-usage-guidelines-system-prompt)
         7. [Worker fork (Agent Prompt)](#3127-worker-fork-agent-prompt)
   2. [Team Coordination & Background Jobs](#32-team-coordination-background-jobs)
      1. [Multi-Agent Team Coordination](#321-multi-agent-team-coordination)
         1. [TeammateTool (Tool Description)](#3211-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#3212-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#3213-sendmessagetool-tool-description)
         4. [SendMessageTool (non-agent-teams) [Tool Description]](#3214-sendmessagetool-non-agent-teams-tool-description)
         5. [Team Coordination (System Reminder)](#3215-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#3216-team-shutdown-system-reminder)
      2. [Background Agent State & Job Management](#322-background-agent-state-job-management)
         1. [Background agent state classifier (Agent Prompt)](#3221-background-agent-state-classifier-agent-prompt)
         2. [Background agent state classification examples (Data)](#3222-background-agent-state-classification-examples-data)
         3. [Background job behavior (System Prompt)](#3223-background-job-behavior-system-prompt)
         4. [Background session instructions (System Prompt)](#3224-background-session-instructions-system-prompt)
         5. [Background monitor (streaming events) [Tool Description]](#3225-background-monitor-streaming-events-tool-description)
   3. [Plan Mode & Autonomous Execution](#33-plan-mode-autonomous-execution)
      1. [Plan Mode Workflows](#331-plan-mode-workflows)
         1. [Plan mode is active (5-phase) [System Reminder]](#3311-plan-mode-is-active-5-phase-system-reminder)
         2. [Plan mode is active (iterative) [System Reminder]](#3312-plan-mode-is-active-iterative-system-reminder)
         3. [Plan mode is active (subagent) [System Reminder]](#3313-plan-mode-is-active-subagent-system-reminder)
         4. [Plan mode re-entry (System Reminder)](#3314-plan-mode-re-entry-system-reminder)
         5. [Plan mode approval tool enforcement (System Reminder)](#3315-plan-mode-approval-tool-enforcement-system-reminder)
         6. [Plan file reference (System Reminder)](#3316-plan-file-reference-system-reminder)
         7. [Exited plan mode (System Reminder)](#3317-exited-plan-mode-system-reminder)
         8. [Remote plan mode (ultraplan) [System Prompt]](#3318-remote-plan-mode-ultraplan-system-prompt)
         9. [Remote planning session (System Prompt)](#3319-remote-planning-session-system-prompt)
         10. [Ultraplan mode (System Reminder)](#33110-ultraplan-mode-system-reminder)
         11. [Plan mode (enhanced) [Agent Prompt]](#33111-plan-mode-enhanced-agent-prompt)
      2. [Autonomous & Auto Mode Execution](#332-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#3321-auto-mode-system-prompt)
         2. [Autonomous loop check (System Prompt)](#3322-autonomous-loop-check-system-prompt)
         3. [Executing actions with care (System Prompt)](#3323-executing-actions-with-care-system-prompt)
         4. [Proactive schedule offer after follow-up work (System Prompt)](#3324-proactive-schedule-offer-after-follow-up-work-system-prompt)
   4. [Batch Operations & Large-Scale Codebase Changes](#34-batch-operations-large-scale-codebase-changes)
      1. [/batch slash command (Agent Prompt)](#341-batch-slash-command-agent-prompt)
      2. [Worker instructions (System Prompt)](#342-worker-instructions-system-prompt)
      3. [Simplify (Skill)](#343-simplify-skill)
   5. [Session & Agent Context Management](#35-session-agent-context-management)
      1. [/btw side question (System Reminder)](#351-btw-side-question-system-reminder)
      2. [Agent mention (System Reminder)](#352-agent-mention-system-reminder)
      3. [Advisor tool instructions (System Prompt)](#353-advisor-tool-instructions-system-prompt)
      4. [Scratchpad directory (System Prompt)](#354-scratchpad-directory-system-prompt)
      5. [WSL managed settings double opt-in (System Prompt)](#355-wsl-managed-settings-double-opt-in-system-prompt)
4. [Memory, Context & Session Continuity](#4-memory-context-session-continuity)
   1. [Memory Storage & Consolidation](#41-memory-storage-consolidation)
      1. [Memory System: Storage & Retrieval](#411-memory-system-storage-retrieval)
         1. [Memory instructions (System Prompt)](#4111-memory-instructions-system-prompt)
         2. [Memory staleness verification (System Prompt)](#4112-memory-staleness-verification-system-prompt)
         3. [Memory description of user details (System Prompt)](#4113-memory-description-of-user-details-system-prompt)
         4. [Memory description of user feedback (System Prompt)](#4114-memory-description-of-user-feedback-system-prompt)
         5. [Memory description of user feedback (with explicit save) [System Prompt]](#4115-memory-description-of-user-feedback-with-explicit-save-system-prompt)
         6. [Description part of memory instructions (System Prompt)](#4116-description-part-of-memory-instructions-system-prompt)
         7. [Memory file contents (System Reminder)](#4117-memory-file-contents-system-reminder)
         8. [Nested memory contents (System Reminder)](#4118-nested-memory-contents-system-reminder)
         9. [Determine which memory files to attach (Agent Prompt)](#4119-determine-which-memory-files-to-attach-agent-prompt)
         10. [Memory synthesis (Agent Prompt)](#41110-memory-synthesis-agent-prompt)
      2. [Memory Consolidation & Dream Mode](#412-memory-consolidation-dream-mode)
         1. [Dream memory consolidation (Agent Prompt)](#4121-dream-memory-consolidation-agent-prompt)
         2. [Dream memory pruning (Agent Prompt)](#4122-dream-memory-pruning-agent-prompt)
         3. [/dream memory consolidation (Skill)](#4123-dream-memory-consolidation-skill)
         4. [/dream nightly schedule (Skill)](#4124-dream-nightly-schedule-skill)
         5. [Dream CLAUDE.md memory reconciliation (System Prompt)](#4125-dream-claudemd-memory-reconciliation-system-prompt)
         6. [Dream team memory handling (System Prompt)](#4126-dream-team-memory-handling-system-prompt)
         7. [Session memory template (Data)](#4127-session-memory-template-data)
         8. [User profile memory template (Data)](#4128-user-profile-memory-template-data)
         9. [Session memory update instructions (Agent Prompt)](#4129-session-memory-update-instructions-agent-prompt)
   2. [Conversation Summarization & Session Management](#42-conversation-summarization-session-management)
      1. [Conversation Summarization & Context Compaction](#421-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#4211-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#4212-recent-message-summarization-agent-prompt)
         3. [Partial compaction instructions (System Prompt)](#4213-partial-compaction-instructions-system-prompt)
         4. [Context compaction summary (System Prompt)](#4214-context-compaction-summary-system-prompt)
         5. [Compact file reference (System Reminder)](#4215-compact-file-reference-system-reminder)
         6. [Previously invoked skills (System Reminder)](#4216-previously-invoked-skills-system-reminder)
      2. [Session Naming & Management](#422-session-naming-management)
         1. [Coding session title generator (Agent Prompt)](#4221-coding-session-title-generator-agent-prompt)
         2. [/rename auto-generate session name (Agent Prompt)](#4222-rename-auto-generate-session-name-agent-prompt)
         3. [Session search (Agent Prompt)](#4223-session-search-agent-prompt)
5. [Configuration, Hooks & Scheduling](#5-configuration-hooks-scheduling)
   1. [Hook System & Operational Modes](#51-hook-system-operational-modes)
      1. [Hook System: Events & Lifecycle](#511-hook-system-events-lifecycle)
         1. [Hook blocking error (System Reminder)](#5111-hook-blocking-error-system-reminder)
         2. [Hook success (System Reminder)](#5112-hook-success-system-reminder)
         3. [Hook additional context (System Reminder)](#5113-hook-additional-context-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#5114-hook-stopped-continuation-system-reminder)
         5. [Hook stopped continuation prefix (System Reminder)](#5115-hook-stopped-continuation-prefix-system-reminder)
         6. [Stop hook blocking error (System Reminder)](#5116-stop-hook-blocking-error-system-reminder)
         7. [Hooks Configuration (System Prompt)](#5117-hooks-configuration-system-prompt)
         8. [Update Claude Code Config (Skill)](#5118-update-claude-code-config-skill)
         9. [update-config (7-step verification flow) [Skill]](#5119-update-config-7-step-verification-flow-skill)
      2. [Harness, Core System & Operational Configuration](#512-harness-core-system-operational-configuration)
         1. [Harness instructions (System Prompt)](#5121-harness-instructions-system-prompt)
         2. [Minimal mode (System Prompt)](#5122-minimal-mode-system-prompt)
         3. [Tool execution denied (System Prompt)](#5123-tool-execution-denied-system-prompt)
         4. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#5124-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         5. [Git status (System Prompt)](#5125-git-status-system-prompt)
         6. [Thinking frequency tuning (System Reminder)](#5126-thinking-frequency-tuning-system-reminder)
      3. [Hook Condition Evaluation & Auto-Mode Rules](#513-hook-condition-evaluation-auto-mode-rules)
         1. [Hook condition evaluator (stop) [Agent Prompt]](#5131-hook-condition-evaluator-stop-agent-prompt)
   2. [MCP, Resource Monitoring & IDE Integration](#52-mcp-resource-monitoring-ide-integration)
      1. [MCP Integration & Resources](#521-mcp-integration-resources)
         1. [MCP resource no content (System Reminder)](#5211-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#5212-mcp-resource-no-displayable-content-system-reminder)
         3. [Computer Use MCP (Skill)](#5213-computer-use-mcp-skill)
      2. [Resource Monitoring & Budget Tracking](#522-resource-monitoring-budget-tracking)
         1. [Token usage (System Reminder)](#5221-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#5222-usd-budget-system-reminder)
         3. [Session continuation (System Reminder)](#5223-session-continuation-system-reminder)
         4. [Loop wakeup not scheduled (System Reminder)](#5224-loop-wakeup-not-scheduled-system-reminder)
      3. [IDE & File State Notifications](#523-ide-file-state-notifications)
         1. [File opened in IDE (System Reminder)](#5231-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#5232-lines-selected-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#5233-file-modified-by-user-or-linter-system-reminder)
         4. [File modification detected (budget exceeded) [System Reminder]](#5234-file-modification-detected-budget-exceeded-system-reminder)
         5. [File truncated (System Reminder)](#5235-file-truncated-system-reminder)
         6. [File shorter than offset (System Reminder)](#5236-file-shorter-than-offset-system-reminder)
         7. [File exists but empty (System Reminder)](#5237-file-exists-but-empty-system-reminder)
         8. [New diagnostics detected (System Reminder)](#5238-new-diagnostics-detected-system-reminder)
   3. [Task & Cron Scheduling](#53-task-cron-scheduling)
      1. [Task & Todo Management Tools](#531-task-todo-management-tools)
         1. [TodoWrite (Tool Description)](#5311-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#5312-taskcreate-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#5313-tasklist-teammate-workflow-tool-description)
         4. [Tool usage (task management) [System Prompt]](#5314-tool-usage-task-management-system-prompt)
         5. [Task tools reminder (System Reminder)](#5315-task-tools-reminder-system-reminder)
         6. [TodoWrite reminder (System Reminder)](#5316-todowrite-reminder-system-reminder)
      2. [Scheduling & Cron Tools](#532-scheduling-cron-tools)
         1. [CronCreate (Tool Description)](#5321-croncreate-tool-description)
         2. [ScheduleWakeup (/loop dynamic mode) [Tool Description]](#5322-schedulewakeup-loop-dynamic-mode-tool-description)
         3. [Snooze (delay and reason guidance) [Tool Description]](#5323-snooze-delay-and-reason-guidance-tool-description)
         4. [Schedule proactive offer guidance (Tool Description)](#5324-schedule-proactive-offer-guidance-tool-description)
         5. [/loop slash command (Skill)](#5325-loop-slash-command-skill)
         6. [/loop slash command (dynamic mode) [Skill]](#5326-loop-slash-command-dynamic-mode-skill)
         7. [/loop self-pacing mode (Skill)](#5327-loop-self-pacing-mode-skill)
         8. [/loop cloud-first scheduling offer (Skill)](#5328-loop-cloud-first-scheduling-offer-skill)
         9. [Schedule recurring cron and execute immediately (compact) [Skill]](#5329-schedule-recurring-cron-and-execute-immediately-compact-skill)
         10. [Schedule recurring cron and run immediately (Skill)](#53210-schedule-recurring-cron-and-run-immediately-skill)
         11. [Dynamic pacing loop execution (Skill)](#53211-dynamic-pacing-loop-execution-skill)
      3. [Scheduling: Morning Check-ins & Periodic Monitoring](#533-scheduling-morning-check-ins-periodic-monitoring)
         1. [/morning-checkin daily brief (Skill)](#5331-morning-checkin-daily-brief-skill)
         2. [/pre-meeting-checkin event brief (Skill)](#5332-pre-meeting-checkin-event-brief-skill)
         3. [/catch-up periodic heartbeat (Skill)](#5333-catch-up-periodic-heartbeat-skill)
6. [API References, SDKs & Developer Documentation](#6-api-references-sdks-developer-documentation)
   1. [Claude API & SDK References](#61-claude-api-sdk-references)
      1. [Claude API SDK References](#611-claude-api-sdk-references)
         1. [Claude API reference — Python (Data)](#6111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#6112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#6113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#6114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#6115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#6116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#6117-claude-api-reference-—-c-data)
         8. [Claude API reference — cURL (Data)](#6118-claude-api-reference-—-curl-data)
         9. [Claude model catalog (Data)](#6119-claude-model-catalog-data)
      2. [Streaming, Batches & Tool Use API References](#612-streaming-batches-tool-use-api-references)
         1. [Streaming reference — Python (Data)](#6121-streaming-reference-—-python-data)
         2. [Streaming reference — TypeScript (Data)](#6122-streaming-reference-—-typescript-data)
         3. [Message Batches API reference — Python (Data)](#6123-message-batches-api-reference-—-python-data)
         4. [Tool use concepts (Data)](#6124-tool-use-concepts-data)
         5. [Tool use reference — Python (Data)](#6125-tool-use-reference-—-python-data)
         6. [Tool use reference — TypeScript (Data)](#6126-tool-use-reference-—-typescript-data)
         7. [Files API reference — Python (Data)](#6127-files-api-reference-—-python-data)
         8. [Files API reference — TypeScript (Data)](#6128-files-api-reference-—-typescript-data)
         9. [Prompt Caching — Design & Optimization (Data)](#6129-prompt-caching-—-design-optimization-data)
      3. [Building LLM Applications: Skills & Navigation](#613-building-llm-applications-skills-navigation)
         1. [Build with Claude API (reference guide) [Skill]](#6131-build-with-claude-api-reference-guide-skill)
         2. [Building LLM-powered applications with Claude (Skill)](#6132-building-llm-powered-applications-with-claude-skill)
         3. [Model migration guide (Skill)](#6133-model-migration-guide-skill)
         4. [Live documentation sources (Data)](#6134-live-documentation-sources-data)
         5. [HTTP error codes reference (Data)](#6135-http-error-codes-reference-data)
         6. [Anthropic CLI (Data)](#6136-anthropic-cli-data)
   2. [Managed Agents API Reference](#62-managed-agents-api-reference)
      1. [Managed Agents overview (Data)](#621-managed-agents-overview-data)
      2. [Managed Agents core concepts (Data)](#622-managed-agents-core-concepts-data)
      3. [Managed Agents endpoint reference (Data)](#623-managed-agents-endpoint-reference-data)
      4. [Managed Agents environments and resources (Data)](#624-managed-agents-environments-and-resources-data)
      5. [Managed Agents events and steering (Data)](#625-managed-agents-events-and-steering-data)
      6. [Managed Agents memory stores reference (Data)](#626-managed-agents-memory-stores-reference-data)
      7. [Managed Agents tools and skills (Data)](#627-managed-agents-tools-and-skills-data)
      8. [Managed Agents client patterns (Data)](#628-managed-agents-client-patterns-data)
      9. [Managed Agents reference — Python (Data)](#629-managed-agents-reference-—-python-data)
      10. [Managed Agents reference — TypeScript (Data)](#6210-managed-agents-reference-—-typescript-data)
      11. [Managed Agents reference — cURL (Data)](#6211-managed-agents-reference-—-curl-data)
   3. [Claude Code Documentation & Guide Agent](#63-claude-code-documentation-guide-agent)
      1. [Claude guide agent (Agent Prompt)](#631-claude-guide-agent-agent-prompt)
      2. [Assistant voice and values template (Data)](#632-assistant-voice-and-values-template-data)
7. [Code Quality, Security & Workflow Improvement](#7-code-quality-security-workflow-improvement)
   1. [Code Quality & Task Execution](#71-code-quality-task-execution)
      1. [Code Quality & Task Execution Guidelines](#711-code-quality-task-execution-guidelines)
         1. [Doing tasks (software engineering focus) [System Prompt]](#7111-doing-tasks-software-engineering-focus-system-prompt)
         2. [Doing tasks (no compatibility hacks) [System Prompt]](#7112-doing-tasks-no-compatibility-hacks-system-prompt)
         3. [Doing tasks (no unnecessary error handling) [System Prompt]](#7113-doing-tasks-no-unnecessary-error-handling-system-prompt)
         4. [Doing tasks (ambitious tasks) [System Prompt]](#7114-doing-tasks-ambitious-tasks-system-prompt)
         5. [Doing tasks (help and feedback) [System Prompt]](#7115-doing-tasks-help-and-feedback-system-prompt)
      2. [Verification & Testing Skills](#712-verification-testing-skills)
         1. [Verify skill (Skill)](#7121-verify-skill-skill)
         2. [Verify CLI changes (example for Verify skill) [Skill]](#7122-verify-cli-changes-example-for-verify-skill-skill)
         3. [Verify server/API changes (example for Verify skill) [Skill]](#7123-verify-serverapi-changes-example-for-verify-skill-skill)
         4. [Create verifier skills (Skill)](#7124-create-verifier-skills-skill)
         5. [Verification specialist (Agent Prompt)](#7125-verification-specialist-agent-prompt)
         6. [Verify plan reminder (System Reminder)](#7126-verify-plan-reminder-system-reminder)
   2. [Security & Malware Policies](#72-security-malware-policies)
      1. [Censoring assistance with malicious activities (System Prompt)](#721-censoring-assistance-with-malicious-activities-system-prompt)
      2. [Doing tasks (security) [System Prompt]](#722-doing-tasks-security-system-prompt)
      3. [Malware analysis after Read tool call (System Reminder)](#723-malware-analysis-after-read-tool-call-system-reminder)
   3. [Onboarding, Skills & Analytics](#73-onboarding-skills-analytics)
      1. [Onboarding & CLAUDE.md Setup](#731-onboarding-claudemd-setup)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#7311-init-claudemd-and-skill-setup-new-version-skill)
         2. [Team onboarding guide (Skill)](#7312-team-onboarding-guide-skill)
         3. [Onboarding guide generator (Agent Prompt)](#7313-onboarding-guide-generator-agent-prompt)
         4. [Managed Agents onboarding flow (Agent Prompt)](#7314-managed-agents-onboarding-flow-agent-prompt)
      2. [Skill Creation & Management](#732-skill-creation-management)
         1. [Skill (Tool Description)](#7321-skill-tool-description)
         2. [Skillify Current Session (System Prompt)](#7322-skillify-current-session-system-prompt)
         3. [Generate permission allowlist from transcripts (Skill)](#7323-generate-permission-allowlist-from-transcripts-skill)
      3. [Insights & Usage Analytics](#733-insights-usage-analytics)
         1. [Insights at a glance summary (System Prompt)](#7331-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7332-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7333-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7334-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7335-insights-suggestions-system-prompt)
         6. [/insights report output (Skill)](#7336-insights-report-output-skill)
   4. [Codebase Exploration & Learning Modes](#74-codebase-exploration-learning-modes)
      1. [Codebase Exploration & Analysis Agents](#741-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#7411-explore-agent-prompt)
         2. [General purpose (Agent Prompt)](#7412-general-purpose-agent-prompt)
         3. [CLAUDE.md creation (Agent Prompt)](#7413-claudemd-creation-agent-prompt)
      2. [Learning & Teaching Modes](#742-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#7421-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7422-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#7423-request_teach_access-part-of-teach-mode-tool-description)
8. [User Interaction, Communication & Output](#8-user-interaction-communication-output)
   1. [User Interaction & Question Tools](#81-user-interaction-question-tools)
      1. [AskUserQuestion (Tool Description)](#811-askuserquestion-tool-description)
      2. [AskUserQuestion (preview field) [Tool Description]](#812-askuserquestion-preview-field-tool-description)
      3. [Option previewer (System Prompt)](#813-option-previewer-system-prompt)
      4. [How to use the SendUserMessage tool (System Prompt)](#814-how-to-use-the-sendusermessage-tool-system-prompt)
   2. [Communication Style & Output Formatting](#82-communication-style-output-formatting)
      1. [Communication style (System Prompt)](#821-communication-style-system-prompt)
      2. [Tone and style (code references) [System Prompt]](#822-tone-and-style-code-references-system-prompt)
      3. [Tone and style (concise output — short) [System Prompt]](#823-tone-and-style-concise-output-—-short-system-prompt)
      4. [Agent thread notes (System Prompt)](#824-agent-thread-notes-system-prompt)
      5. [Agent Summary Generation (System Prompt)](#825-agent-summary-generation-system-prompt)
      6. [Output style active (System Reminder)](#826-output-style-active-system-reminder)
   3. [Metadata Generation & Content Processing](#83-metadata-generation-content-processing)
      1. [Agent Utility: Naming, Summarization & Prompt Generation](#831-agent-utility-naming-summarization-prompt-generation)
         1. [Bash command description writer (Agent Prompt)](#8311-bash-command-description-writer-agent-prompt)
         2. [Bash command prefix detection (Agent Prompt)](#8312-bash-command-prefix-detection-agent-prompt)
         3. [Prompt Suggestion Generator v2 (Agent Prompt)](#8313-prompt-suggestion-generator-v2-agent-prompt)
      2. [WebFetch Summarization & Content Processing](#832-webfetch-summarization-content-processing)
         1. [WebFetch summarizer (Agent Prompt)](#8321-webfetch-summarizer-agent-prompt)
         2. [Status line setup (Agent Prompt)](#8322-status-line-setup-agent-prompt)
   4. [Debugging & Diagnostics](#84-debugging-diagnostics)
      1. [Debugging (Skill)](#841-debugging-skill)
      2. [/stuck slash command (Skill)](#842-stuck-slash-command-skill)

---

## 1. Command Execution & Tool Operations

Core mechanics for running bash commands, delegating to specialized file and search tools, enforcing sandbox security, and automating browser interactions. Covers path handling, quoting, timing strategies, and Windows PowerShell scripting.

### 1.1 Bash & Shell Execution

Fundamentals of running shell commands including chaining strategies, path handling, timeout configuration, and sleep/polling optimization for external processes.

#### 1.1.1 Bash Execution Fundamentals

Core mechanics for executing bash commands, including command chaining strategies (sequential with &&, parallel as separate calls, or with semicolons), path handling with absolute paths and proper quoting, and runtime configuration like timeouts and working directory persistence.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Executes a given bash command and returns its output.

##### 1.1.1.2 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Maintain the current working directory by using absolute paths and avoiding cd commands, except when explicitly requested by the user.

##### 1.1.1.3 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate commands in bash tool calls.

##### 1.1.1.4 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent commands as parallel tool calls in a single message rather than sequentially.

##### 1.1.1.5 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call when they must run sequentially and earlier failures should stop execution.

##### 1.1.1.6 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier command failures are acceptable.

##### 1.1.1.7 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.8 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between commands, but shell state does not; environment initializes from user profile.

##### 1.1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Specify optional command timeouts in milliseconds up to a configurable maximum; default timeout applies if not specified.

##### 1.1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Verify parent directories exist using ls before creating new files or directories.

#### 1.1.2 Sleep & Polling Optimization

Strategies for efficient command timing and external process monitoring, emphasizing immediate execution over delays, short sleep intervals when necessary, and preference for check commands over polling loops to avoid blocking.

##### 1.1.2.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations short (1-5 seconds) to avoid blocking the user when using the bash tool.

##### 1.1.2.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

##### 1.1.2.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Execute commands that can run immediately without inserting sleep delays between them.

##### 1.1.2.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like gh run view instead of sleeping when polling external processes.

##### 1.1.2.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; instead diagnose root causes.

#### 1.1.3 PowerShell Tool & Windows Scripting

Provides Windows command execution with PowerShell 5.1 compatibility guidance for syntax limitations and workarounds. Avoids unnecessary sleep commands by running immediate operations directly, delegating long-running tasks to background jobs with notifications, and polling external processes rather than retry loops.

##### 1.1.3.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Execute PowerShell commands with optional timeout and output limits; prefer specialized tools for file operations and searches; includes syntax guidance for variables, cmdlets, pipes, and here-strings.

##### 1.1.3.2 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 syntax limitations and workarounds, including missing pipeline operators, ternary operators, stderr redirection behavior, and JSON parsing differences.

##### 1.1.3.3 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Instructs avoiding unnecessary Start-Sleep commands in PowerShell by running immediate commands directly, using run_in_background for long-running tasks with notifications, diagnosing root causes instead of retry loops, and polling external processes with check commands rather than sleeping.

### 1.2 File System & Specialized Dev Tools

Delegating tasks to purpose-built tools for reading, writing, editing, and searching files, plus code intelligence, web access, notebook editing, and tool discovery.

#### 1.2.1 Tool Delegation & Alternatives

Guidance to delegate read-only and file manipulation tasks to specialized tools—Glob for file search, Read for file content, Write for file creation, Edit for modifications, Grep for content search—rather than bash equivalents, improving user experience and output clarity.

##### 1.2.1.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for read-only searching commands; use dedicated tools instead for better user experience.

##### 1.2.1.2 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly instead of using echo or printf for communication.

##### 1.2.1.3 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs Claude to use the Grep tool for content search instead of grep or rg commands.

##### 1.2.1.4 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool for file editing instead of sed or awk commands.

##### 1.2.1.5 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs Claude to use the Glob tool for file search instead of find or ls commands.

##### 1.2.1.6 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool for file reading instead of cat, head, or tail commands.

##### 1.2.1.7 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs Claude to use the Write tool for file writing instead of echo or cat commands.

##### 1.2.1.8 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better UX and reviewability than Bash equivalents.

#### 1.2.2 File System Tools: Read, Write, Edit, Search

Comprehensive filesystem operations for reading diverse file types (images, PDFs, notebooks), writing and modifying files with precision, and searching content via optimized regex patterns. Edit tool preserves formatting for targeted modifications while Write creates new files; Grep provides advanced filtering and multiple output modes.

##### 1.2.2.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Read files from the filesystem using absolute paths; supports images, PDFs (with page ranges for large files), and Jupyter notebooks; reads up to a configurable line limit by default.

##### 1.2.2.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Write creates or completely rewrites files to the local filesystem, preferring Edit for modifications and avoiding documentation files unless explicitly requested.

##### 1.2.2.3 [Write (read existing file first) [Tool Description]](system-prompts/tool-description-write-read-existing-file-first.md)

Write tool for environments requiring existing files to be read before overwriting, with preference for Edit tool for modifications.

##### 1.2.2.4 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read output; prefer editing existing files over creating new ones.

##### 1.2.2.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Search files using ripgrep with regex support, file filtering by glob or type, and multiple output modes; prefer this tool over bash grep for optimized permissions.

#### 1.2.3 Specialized Development Tools

Integrates code intelligence, web access, and notebook editing into task workflows. REPL enables async scripting with tool composition, LSP provides IDE-like code navigation, WebFetch and WebSearch deliver current information with caching and source attribution, and PushNotification alerts users to critical events. ToolSearch discovers deferred tool definitions by name or keyword.

##### 1.2.3.1 [REPL (Tool Description)](system-prompts/tool-description-repl.md)

JavaScript programming interface for looping, branching, and composing tool calls as async functions; batch all operations into one call and use Promise.all() for parallelism.

##### 1.2.3.2 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers to access code intelligence features including definition lookup, references, hover info, symbol search, and call hierarchy.

##### 1.2.3.3 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replace the contents of a specific cell in a Jupyter notebook; supports insert and delete modes with 0-indexed cell numbering.

##### 1.2.3.4 [PushNotification (Tool Description)](system-prompts/tool-description-pushnotification.md)

Send desktop notifications to the user's terminal and optionally to their phone via Remote Control; use sparingly for important events requiring immediate attention.

##### 1.2.3.5 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

WebFetch retrieves and analyzes web content by converting HTML to markdown and processing it with a fast model, supporting URL redirects and including a 15-minute cache.

##### 1.2.3.6 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

WebSearch provides up-to-date information beyond Claude's knowledge cutoff with mandatory source citation in responses, supporting domain filtering and requiring current-year awareness for recent queries.

##### 1.2.3.7 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

ToolSearch fetches deferred tool definitions by name or keyword query, returning complete JSONSchema definitions that enable tool invocation.

##### 1.2.3.8 [REPL tool usage and scripting conventions (System Prompt)](system-prompts/system-prompt-repl-tool-usage-and-scripting-conventions.md)

Defines dense JavaScript scripting conventions for REPL investigations using shorthands for shell, file reads, and code search, with batching rules, API reference, and token-efficient patterns for multi-step tasks.

### 1.3 Sandbox Security & Enforcement

Mandatory sandbox isolation for all commands with automatic retry on restriction failures, error diagnosis to distinguish sandbox blocks from other failures, and guidance on temporary file handling and sensitive path protection without user consent.

#### 1.3.1 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Default to running commands within the sandbox; only bypass when the user asks or evidence of sandbox restriction appears.

#### 1.3.2 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.3.3 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.3.4 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; default to sandbox for future commands even after running one with dangerouslyDisableSandbox.

#### 1.3.5 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

#### 1.3.6 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused a failure and mention the /sandbox command for managing restrictions.

#### 1.3.7 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Identify when a command failure shows evidence of sandbox restrictions versus other causes like missing files or network issues.

#### 1.3.8 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that show sandbox-caused failures.

#### 1.3.9 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox restrictions.

#### 1.3.10 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox restrictions.

#### 1.3.11 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors for file and network operations signal sandbox restrictions.

#### 1.3.12 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox-caused failures.

#### 1.3.13 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing the response protocol for handling sandbox-caused failures.

#### 1.3.14 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true when sandbox failure occurs, without asking the user first.

#### 1.3.15 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly.

#### 1.3.16 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will prompt the user for permission.

#### 1.3.17 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.ssh, or credential files to the sandbox allowlist.

### 1.4 Browser Automation Tools

Chrome browser interaction through mouse, keyboard, and screenshot-based element detection, with batch execution for multi-step workflows. Includes debugging via console logs, GIF recording for complex interactions, and tab context management to automate web navigation and form handling efficiently.

#### 1.4.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Interact with a Chrome browser using mouse and keyboard, taking screenshots to determine element coordinates before clicking.

#### 1.4.2 [BrowserBatch (Tool Description)](system-prompts/tool-description-browserbatch.md)

Execute multiple browser tool calls sequentially in one round trip, stopping on first error; use extensively for predictable multi-step workflows like navigation and form interaction.

#### 1.4.3 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Computer action parameter defines mouse and keyboard interactions for Chrome browser automation, including clicks, typing, scrolling, dragging, and hover actions.

#### 1.4.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructs loading Chrome browser MCP tools via ToolSearch before use, requiring explicit tool selection and loading before calling any mcp__claude-in-chrome__* tool.

#### 1.4.5 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides guidelines for browser automation using Claude in Chrome tools, covering GIF recording for multi-step interactions, console log debugging with pattern filtering, avoiding JavaScript alerts that block further commands, and staying focused on specific tasks. Emphasizes checking tab context at session start and avoiding reuse of stale tab IDs.

---

## 2. Git, Version Control & CI/CD

Safe git practices, worktree-based isolation, automated commit and PR creation, code review agents, and GitHub Actions integration for cloud deployment and workflow triggers.

### 2.1 Git Safety & Worktrees

Hook preservation, avoidance of destructive operations, and isolated development environments via git worktrees paired with planning workflows.

#### 2.1.1 Git Workflow Safety

Safe git practices emphasizing hook preservation, commit creation over amendment, avoidance of destructive operations, and comprehensive protocols for commits and pull requests including signing, testing, and parallel execution.

##### 2.1.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives to destructive git operations unless they are truly the best approach.

##### 2.1.1.2 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping hooks or bypassing signing unless explicitly requested by the user, and requires investigating hook failures.

##### 2.1.1.3 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to create new commits rather than amending existing ones.

##### 2.1.1.4 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, parallel command execution, and PR formatting with test plans.

#### 2.1.2 Git Worktree & Version Control Tools

Isolated development environments via git worktrees paired with planning workflows for non-trivial implementation tasks. EnterWorktree and ExitWorktree manage session-scoped branching contexts, while plan mode enables codebase exploration and design review before implementation to ensure alignment and prevent rework.

##### 2.1.2.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it only when explicitly instructed by the user or project instructions; supports both git repositories and VCS-agnostic hooks.

##### 2.1.2.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exit a worktree created by EnterWorktree and return to the original directory; only operates on EnterWorktree-created worktrees and supports keeping or removing the worktree.

##### 2.1.2.3 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transition into plan mode for non-trivial implementation tasks to explore the codebase and design an approach for user approval before writing code, preventing wasted effort and ensuring alignment.

##### 2.1.2.4 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning and request user approval by reading the plan from file; use only for implementation tasks requiring code changes, not research or exploration.

### 2.2 Commits, Pull Requests & Code Review

Automated creation of git commits and PRs with contextual analysis, plus security-focused code review agents that catch vulnerabilities before production.

#### 2.2.1 Git Operations: Commits & Pull Requests

Automated creation and management of git commits and pull requests with contextual analysis of changes. Enforces safety protocols, generates descriptive messages aligned with repository style, and handles branch creation and PR updates while preventing destructive operations.

##### 2.2.1.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context (status, diff, branch, recent commits), analyzing changes to draft messages following repository style and enforcing safety protocols against amending or skipping hooks.

##### 2.2.1.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated context, handling branch creation, multi-line PR bodies with test plans, and updating existing PRs while enforcing git safety protocols.

##### 2.2.1.3 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent for generating succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

#### 2.2.2 Code Review & Security Analysis Agents

Automated analysis of code changes and autonomous agent actions for vulnerabilities, quality issues, and policy violations. Combines pull request review with threat modeling and access control to catch injection attacks, authentication bypasses, credential leakage, and scope creep before code reaches production.

##### 2.2.2.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Instructs Claude to review GitHub pull requests by fetching PR details and diffs, then analyzing code quality, style, correctness, performance, test coverage, and security implications.

##### 2.2.2.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt that analyzes code changes for exploitable vulnerabilities (injection, auth bypass, crypto flaws, RCE) with high-confidence filtering and multi-phase verification to minimize false positives.

##### 2.2.2.3 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Defines a security classifier that evaluates autonomous agent actions against threat models (prompt injection, scope creep, accidental damage) using block/allow rules and user-intent analysis to prevent harmful operations.

##### 2.2.2.4 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Specifies environment context, comprehensive block rules (git destructive, code execution, credential leakage, data exfiltration), and allow exceptions that govern which tool actions autonomous agents may perform.

### 2.3 GitHub & CI/CD Integration

Automation and deployment patterns for Claude Code within GitHub workflows and cloud infrastructure. Enables triggering Claude agents through repository events, scheduling remote execution, and integrating with version control systems.

#### 2.3.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code integration when @claude is mentioned in issues, pull requests, or comments.

#### 2.3.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App, explaining capabilities, security model, and how to trigger the agent via @claude mentions.

#### 2.3.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers or one-time runs via Anthropic's cloud API, handling routine creation, updates, listing, and execution with timezone conversion and MCP connector validation.

---

## 3. Multi-Agent Architecture & Coordination

Frameworks for designing, spawning, and coordinating agents — from subagent delegation and team management to plan mode workflows, autonomous execution, and large-scale parallel batch operations.

### 3.1 Agent Design & Spawning

Methodologies for building high-performance agents including tool surface design, system prompt architecture, and patterns for delegating work to subagents with self-contained prompts.

#### 3.1.1 Agent Design & Architecture

Methodologies for building high-performance AI agents, covering tool surface design, context management, prompt caching, system prompt architecture, and institutional memory patterns. Includes safety review processes for auto-mode classifiers and templates for domain-specific knowledge accumulation across conversations.

##### 3.1.1.1 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide for building agents on the Claude API, covering tool surface design decisions (bash vs. dedicated tools), context management patterns (editing, compaction, memory), caching strategies, and composing tool calls with programmatic tool calling.

##### 3.1.1.2 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of high-performance AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, optimizing for performance, and generating JSON specifications with identifiers and usage examples.

##### 3.1.1.3 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews custom auto-mode classifier rules for Claude Code by evaluating clarity, completeness, conflicts, and actionability to ensure the LLM classifier can reliably auto-approve or block tool calls.

##### 3.1.1.4 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guides inclusion of domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations. Provides templates for code reviewers, test runners, architects, and documentation writers to record patterns, decisions, and discoveries relevant to their domain.

#### 3.1.2 Subagent Spawning & Delegation

Patterns and practices for delegating work to subagents, including foreground and background execution modes, context isolation via worktree separation, and parallel task launching. Effective delegation requires self-contained prompts with full context, clear goals, and specific file references to avoid re-explaining background.

##### 3.1.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance for spawning and managing subagents, including foreground vs. background execution, resumption via messaging, worktree isolation, parallel launching, and verification practices.

##### 3.1.2.2 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, showing how to fork work, handle waiting states, and report results without fabricating answers during mid-wait user queries.

##### 3.1.2.3 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates how to write self-contained, well-structured prompts for subagent delegation with clear goals, context, and response constraints.

##### 3.1.2.4 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Guidelines for writing effective subagent prompts that provide full context, explain intent and background, avoid delegating understanding, and include specific file paths and line numbers.

##### 3.1.2.5 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Advises using subagents for parallelizing independent queries and protecting context, while avoiding excessive delegation and duplicating work already delegated.

##### 3.1.2.6 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for open-ended work, prohibits reading fork output mid-flight or fabricating results, and instructs on writing focused fork prompts that inherit context without re-explaining background.

##### 3.1.2.7 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

System prompt for forked worker sub-agents that execute a single directive from the parent agent, reporting concisely without spawning additional sub-agents or proposing follow-up work.

### 3.2 Team Coordination & Background Jobs

Creating and managing teams of agents with message passing and shared task lists, plus monitoring long-running background jobs through transcript analysis and event streaming.

#### 3.2.1 Multi-Agent Team Coordination

Mechanisms for creating, managing, and coordinating teams of agents working on shared tasks. Agents communicate via explicit message passing, share task lists, and report idle states. Teams are cleaned up after work completes by shutting down all members and removing directories.

##### 3.2.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

TeammateTool creates and manages agent teams for coordinated multi-agent work, handling task assignment, teammate spawning, message delivery, idle state management, and team configuration discovery. Teams share task lists and agents communicate via SendMessage, with automatic idle notifications and peer DM visibility.

##### 3.2.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

TeamDelete removes team and task directories after swarm work completes, requiring all teammates to shut down first to avoid failure.

##### 3.2.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

SendMessage enables inter-agent communication within teams, requiring explicit tool calls for all messaging and supporting legacy protocol responses for shutdown and plan approval requests.

##### 3.2.1.4 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

SendMessageTool delivers messages to users with markdown support and file attachments, using a status field to distinguish between direct replies and proactive notifications.

##### 3.2.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's role as a team member with identity, resources, and communication protocols for coordinating with teammates and a team lead.

##### 3.2.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully and clean up before returning a final response in non-interactive mode.

#### 3.2.2 Background Agent State & Job Management

Monitoring and classification of long-running background jobs through transcript analysis and event streaming. Tracks task progress, identifies blocking conditions, and ensures isolated execution environments while surfacing results for downstream processing.

##### 3.2.2.1 [Background agent state classifier (Agent Prompt)](system-prompts/agent-prompt-background-agent-state-classifier.md)

Classifies background agent transcript tails into working, blocked, done, or failed states with detailed disambiguation rules for edge cases like external waits, user blockers, and API errors, returning concise JSON with state, detail, tempo, and needs fields.

##### 3.2.2.2 [Background agent state classification examples (Data)](system-prompts/data-background-agent-state-classification-examples.md)

Example assistant-message tails and JSON outputs for classifying background agent state (working/blocked/done/failed), tempo, needs, and results with real-world scenarios.

##### 3.2.2.3 [Background job behavior (System Prompt)](system-prompts/system-prompt-background-job-behavior.md)

Instructs background job agents to narrate approach and progress, restate results in message text for classifier extraction, and signal completion status (done/blocked/failed). Emphasizes concise one-line result statements and sanity checks before declaring done.

##### 3.2.2.4 [Background session instructions (System Prompt)](system-prompts/system-prompt-background-session-instructions.md)

Instructs background job sessions to use the job-specific temporary directory ($CLAUDE_JOB_DIR) instead of /tmp to avoid file clobbering between parallel jobs, and to follow worktree isolation guidance.

##### 3.2.2.5 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Streams stdout events from long-running scripts as chat notifications with guidance on script quality, output volume, filtering, and handling terminal states to avoid silent failures.

### 3.3 Plan Mode & Autonomous Execution

Structured planning phases with approval gating before implementation, and frameworks for continuous autonomous operation with action safety evaluation based on reversibility.

#### 3.3.1 Plan Mode Workflows

Structured planning phases where Claude explores codebases, designs implementation strategies, and seeks approval before execution. Workflows range from iterative pair-planning with users to multi-agent parallel exploration with critique synthesis. Plan mode restricts actions to read-only and plan editing until approval, then exits to enable full implementation.

##### 3.3.1.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Defines an enhanced five-phase planning workflow with parallel exploration and multi-agent planning, guiding Claude through initial understanding, design, review, implementation, and approval phases with specific agent deployment strategies.

##### 3.3.1.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Describes an iterative pair-planning workflow where Claude explores code, updates a plan file incrementally, and asks the user clarifying questions in cycles until the plan is complete and ready for approval.

##### 3.3.1.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instructions for subagents, restricting them to read-only actions and plan file editing while requiring comprehensive answers and clarifying questions.

##### 3.3.1.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after a previous exit, instructing it to read the existing plan, evaluate whether the new request is the same or different task, and either modify or overwrite the plan accordingly.

##### 3.3.1.5 [Plan mode approval tool enforcement (System Reminder)](system-prompts/system-reminder-plan-mode-approval-tool-enforcement.md)

Enforces that plan mode turns must end with either AskUserQuestion for clarification or ExitPlanMode for approval, forbidding approval requests through any other method.

##### 3.3.1.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 3.3.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and full tool and edit capabilities are now available.

##### 3.3.1.8 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions where Claude explores codebases, produces diagram-rich implementation plans via ExitPlanMode, and implements approved plans as pull requests, with handling for plan approval, rejection, or teleportation back to local terminal.

##### 3.3.1.9 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Enables remote planning sessions where Claude explores code with Glob, Grep, and Read, produces implementation plans via ExitPlanMode, and handles approval, rejection, or teleportation workflows without spawning subagents.

##### 3.3.1.10 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Activates multi-agent planning mode where Claude spawns parallel agents to explore codebase aspects, synthesizes findings into a detailed plan, incorporates critique feedback, and implements upon approval or handles rejection and errors appropriately.

##### 3.3.1.11 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent for designing implementation plans by exploring codebase patterns, identifying critical files, and detailing step-by-step strategies without modifying files.

#### 3.3.2 Autonomous & Auto Mode Execution

Frameworks for continuous autonomous operation where Claude executes work with reasonable assumptions, maintains in-progress tasks like PR reviews and CI diagnostics, and evaluates action safety based on reversibility and blast radius. Emphasizes acting on clear signals while avoiding destructive changes without authorization, and proactively scheduling follow-up work.

##### 3.3.2.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Defines continuous autonomous execution mode where Claude executes immediately with reasonable assumptions, minimizes interruptions, prefers action over planning, and expects course corrections. Prohibits overly destructive actions and data exfiltration without explicit user authorization.

##### 3.3.2.2 [Autonomous loop check (System Prompt)](system-prompts/system-prompt-autonomous-loop-check.md)

Guides timer-based autonomous invocations to continue established work from conversation transcript, maintain in-progress PRs by addressing review comments and CI failures, and perform branch maintenance like rebasing and resolving threads. Emphasizes acting on clear signals from the transcript while avoiding irreversible changes without authorization, and scaling back to brief checks when work is quiet.

##### 3.3.2.3 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a framework for evaluating action reversibility and blast radius, requiring user confirmation for destructive, hard-to-reverse, or shared-state operations while permitting local reversible actions freely. Emphasizes diagnosing root causes rather than bypassing safety checks.

##### 3.3.2.4 [Proactive schedule offer after follow-up work (System Prompt)](system-prompts/system-prompt-proactive-schedule-offer-after-follow-up-work.md)

Instructs Claude to offer scheduling background agents for natural follow-up tasks after work completion, with high confidence threshold and specific signal patterns for feature flags, cleanup, monitoring, and recurring operations.

### 3.4 Batch Operations & Large-Scale Codebase Changes

Orchestrates parallelizable codebase transformations by decomposing work into independent units, spawning isolated worker agents, and automating the full pipeline from implementation through testing to PR submission.

#### 3.4.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing into 5–30 independent units, determining e2e test recipes, and spawning background worker agents with worktree isolation to land PRs in parallel.

#### 3.4.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step post-implementation workflow: simplify via skill tool, run unit tests, execute e2e tests, commit and push, and report PR status.

#### 3.4.3 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel review agents to identify code reuse opportunities, quality issues, and efficiency problems, then fixes findings directly.

### 3.5 Session & Agent Context Management

Mechanisms for isolating agent instances, routing user intent to appropriate agents, and maintaining session-specific context across tool invocations. Includes lightweight side-question handling, agent invocation protocols, advisor escalation workflows, and platform-specific configuration for file isolation and security policies.

#### 3.5.1 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Configures lightweight side-question handling where Claude answers directly without tools, acknowledging it is a separate instance from the main agent.

#### 3.5.2 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent type and instructs appropriate invocation with required context.

#### 3.5.3 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructs Claude to call the advisor tool before substantive work, when stuck, or when considering approach changes, forwarding full conversation history to a stronger reviewer model. Emphasizes making the advisor call durable by writing results first, and treating advice seriously while surfacing conflicts between retrieved data and advisor suggestions.

#### 3.5.4 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

#### 3.5.5 [WSL managed settings double opt-in (System Prompt)](system-prompts/system-prompt-wsl-managed-settings-double-opt-in.md)

Explains that WSL reads Windows managed settings policy chain only when admin-enabled flag is set, with HKCU requiring additional user opt-in.

---

## 4. Memory, Context & Session Continuity

Persistent file-based memory storage and retrieval, nightly consolidation, conversation summarization across context windows, and session naming and discovery for long-running workflows.

### 4.1 Memory Storage & Consolidation

Persistent memory organized by type with frontmatter metadata, deduplication, staleness verification, and nightly dream-mode consolidation that merges session logs into durable topics.

#### 4.1.1 Memory System: Storage & Retrieval

Persistent file-based memory organized by type (user details, feedback, project context, reference material) with frontmatter metadata. Memory records are deduplicated, verified against current state before use, and pruned when stale or contradicted by observed reality. Selective retrieval matches actual query content to avoid false positives.

##### 4.1.1.1 [Memory instructions (System Prompt)](system-prompts/system-prompt-memory-instructions.md)

Establishes file-based memory system with frontmatter format for four types (user, feedback, project, reference), deduplication rules, staleness handling, and guidance to avoid duplicating code-derivable or conversation-only information.

##### 4.1.1.2 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs verification of memory records against current file state before use, trusting observed reality over stale memories and deleting conflicting records while saving fresh information if needed.

##### 4.1.1.3 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about role, goals, knowledge, and preferences across sessions, with one detail per file to build a collaborative picture without negative judgments.

##### 4.1.1.4 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes feedback memory as user guidance on work approaches including both corrections and validated methods, requiring checks against team feedback before saving to avoid contradictions.

##### 4.1.1.5 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Defines feedback memory as guidance on work approaches from both successes and failures, requiring checks for contradictions with team feedback and explicit notation of overrides before saving.

##### 4.1.1.6 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as containing information about role, goals, responsibilities, and knowledge to tailor behavior and collaboration. Emphasizes building understanding of who the user is while avoiding negative judgements and focusing on work-relevant information.

##### 4.1.1.7 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Presents the contents of a memory file by path, including type description.

##### 4.1.1.8 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file.

##### 4.1.1.9 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files for Claude Code queries by matching on actual query content rather than surface keywords, avoiding false positives on user-profile and project-overview memories.

##### 4.1.1.10 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and extracts relevant facts (max 7) for each query, returning JSON with facts and cited filenames while avoiding re-stating already-returned information.

#### 4.1.2 Memory Consolidation & Dream Mode

Nightly housekeeping that consolidates recent session logs and transcripts into persistent memory topics, merges updates into existing files, and prunes stale or duplicate records. Dream consolidation reconciles stored memories against maintained instructions, handles shared team memories conservatively, and keeps the memory index under size limits.

##### 4.1.2.1 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing files, gathering recent signal from session logs and transcripts, merging updates into topic files, and pruning the index to stay under size limits.

##### 4.1.2.2 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs memory pruning by deleting stale or invalidated memory files and collapsing duplicates, treating memories as immutable and combining only when necessary.

##### 4.1.2.3 [/dream memory consolidation (Skill)](system-prompts/skill-dream-memory-consolidation.md)

Nightly housekeeping job that consolidates recent logs and transcripts into persistent memory topics, learnings, and a pruned MEMORY.md index under 200 lines.

##### 4.1.2.4 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing schedules, creating a cron task, confirming details, and running an immediate consolidation.

##### 4.1.2.5 [Dream CLAUDE.md memory reconciliation (System Prompt)](system-prompts/system-prompt-dream-claudemd-memory-reconciliation.md)

Guides memory consolidation during dream sessions by reconciling feedback and project memories against CLAUDE.md, deleting stale memories, and flagging potential drift between maintained instructions and stored context.

##### 4.1.2.6 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Establishes conservative rules for handling shared team memories during dream consolidation, including deduplication, cautious pruning to avoid deleting teammate dependencies, and preventing accidental promotion of personal memories to team scope.

##### 4.1.2.7 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary files documenting current state, task specification, files, workflow, errors, and key results.

##### 4.1.2.8 [User profile memory template (Data)](system-prompts/data-user-profile-memory-template.md)

Template for user profile memory file covering personal details, work context, schedule, and communication preferences.

##### 4.1.2.9 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations, preserving structure and section headers while adding detailed, actionable information from the conversation.

### 4.2 Conversation Summarization & Session Management

Preserving conversation state across context windows through structured summarization, plus session naming conventions and discovery of past conversations via transcript scanning.

#### 4.2.1 Conversation Summarization & Context Compaction

Mechanisms for preserving conversation state across context windows through structured summarization. Captures task progress, technical discoveries, pending work, and file references in formats designed for efficient resumption, preventing duplicate effort and lost context when conversations are compacted.

##### 4.2.1.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries with analysis tags covering primary requests, technical concepts, files/code sections, errors and fixes, problem-solving, all user messages, pending tasks, current work, and next steps.

##### 4.2.1.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions (after retained context) with analysis tags covering requests, technical concepts, files/code, errors, problem-solving, user messages, pending tasks, current work, and next steps.

##### 4.2.1.3 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Instructs Claude to create detailed conversation summaries for partial compaction using a structured analysis process and nine-section format, ensuring continuity when newer messages follow the summary.

##### 4.2.1.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs writing continuation summaries for context compaction covering task overview, current state, important discoveries, next steps, and context to preserve. Enables efficient resumption in future context windows by being concise but complete, preventing duplicate work and repeated mistakes.

##### 4.2.1.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before conversation summarization but is too large to include, directing use of Read tool if needed.

##### 4.2.1.6 [Previously invoked skills (System Reminder)](system-prompts/system-reminder-previously-invoked-skills.md)

Restores context from skills invoked earlier in the session before conversation compaction, warning Claude not to re-execute setup actions or treat prior inputs as current instructions.

#### 4.2.2 Session Naming & Management

Generation and discovery of session identifiers and conversation history. Produces concise, convention-compliant names from session context and enables searching past conversations by scanning transcript files for relevant sessions.

##### 4.2.2.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise sentence-case session titles (3–7 words) that capture the main goal of a coding session, returning JSON with a single title field.

##### 4.2.2.2 [/rename auto-generate session name (Agent Prompt)](system-prompts/agent-prompt-rename-auto-generate-session-name.md)

Auto-generates kebab-case session names (2–4 words) from conversation context, returning JSON with a name field.

##### 4.2.2.3 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent prompt for searching past Claude Code conversation sessions by scanning .jsonl transcript files and returning matching session IDs ordered by relevance.

---

## 5. Configuration, Hooks & Scheduling

Operational configuration for Claude Code including hook lifecycle automation, MCP integration, resource monitoring, task scheduling via cron, and IDE file-state notifications.

### 5.1 Hook System & Operational Modes

Extensible automation framework executing commands at lifecycle events, plus core operational configuration for permission modes, tool parallelization, context compaction, and thinking calibration.

#### 5.1.1 Hook System: Events & Lifecycle

Extensible automation framework that executes commands, prompts, or agents at Claude Code lifecycle events. Supports conditional execution, flow control, and integration patterns for auto-formatting, testing, and permission enforcement, with comprehensive configuration and verification workflows.

##### 5.1.1.1 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command, including the command and error message.

##### 5.1.1.2 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook with its content message.

##### 5.1.1.3 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Delivers additional context information provided by a hook to Claude.

##### 5.1.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude when a hook stops continuation and provides the associated message.

##### 5.1.1.5 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix label for hook stopped continuation messages.

##### 5.1.1.6 [Stop hook blocking error (System Reminder)](system-prompts/system-reminder-stop-hook-blocking-error.md)

Notifies Claude of a blocking hook error from a specified hook command.

##### 5.1.1.7 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive reference for configuring lifecycle hooks that run commands, prompts, or agents at specific Claude Code events like PermissionRequest, PreToolUse, PostToolUse, and compaction, with JSON structure, matchers, and common patterns for auto-formatting and testing.

##### 5.1.1.8 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Guides Claude through modifying Claude Code's settings.json configuration, with emphasis on reading existing files before writing, merging arrays carefully, and distinguishing between simple settings (use /config command) and complex ones like hooks, permissions, and environment variables (edit directly). Includes detailed hook construction workflow with examples for formatters, permissions, and environment variables.

##### 5.1.1.9 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Provides a rigorous 7-step process for constructing and verifying hooks in Claude Code settings, from deduplication checks through pipe-testing raw commands, JSON validation, proof-of-execution testing, and handoff. Emphasizes catching failure modes early and ensuring hooks work in the user's specific project environment before declaring them live.

#### 5.1.2 Harness, Core System & Operational Configuration

Defines the operational foundation: markdown terminal output, permission modes, tool parallelization for independent operations, context compaction, and clickable code references. Minimal mode strips features for explicit CLI-driven workflows, thinking calibration adjusts reasoning depth to task complexity, and tool execution boundaries establish escalation paths when capabilities are denied.

##### 5.1.2.1 [Harness instructions (System Prompt)](system-prompts/system-prompt-harness-instructions.md)

Defines core harness behavior including terminal markdown output, permission modes, system reminders, context compaction, tool parallelization, and clickable code references via file:line notation.

##### 5.1.2.2 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode operation that disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags and supporting only direct credential auth.

##### 5.1.2.3 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Defines boundaries for working around tool execution denials: attempt reasonable alternatives but not malicious workarounds, and escalate to the user if the capability is essential.

##### 5.1.2.4 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs maximizing parallel tool calls for independent operations while running dependent operations sequentially to increase efficiency.

##### 5.1.2.5 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git status snapshot at conversation start as reference context.

##### 5.1.2.6 [Thinking frequency tuning (System Reminder)](system-prompts/system-reminder-thinking-frequency-tuning.md)

Instructs Claude to treat system-reminder tags as harness instructions and calibrate thinking depth based on task complexity, avoiding overthinking simple tasks.

#### 5.1.3 Hook Condition Evaluation & Auto-Mode Rules

Validates user-defined stop conditions in Claude Code by evaluating whether specified criteria are met and returning structured evidence for automation decisions.

##### 5.1.3.1 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks in Claude Code by judging whether user-provided conditions are satisfied, returning JSON with ok/reason fields and transcript evidence.

### 5.2 MCP, Resource Monitoring & IDE Integration

Model Context Protocol resource integration with tiered access controls, quota and budget tracking across sessions, and real-time IDE file-state and diagnostic awareness.

#### 5.2.1 MCP Integration & Resources

Integration layer for Model Context Protocol resources and computer-use capabilities, with tiered access controls and safety restrictions. Handles resource availability signaling and manages tool selection across dedicated MCPs and browser automation.

##### 5.2.1.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource has no content available.

##### 5.2.1.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

##### 5.2.1.3 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools with tiered tool selection (dedicated MCPs, Chrome MCP, computer-use), app access tiers (read/click/full), link-safety checks, and financial-action restrictions.

#### 5.2.2 Resource Monitoring & Budget Tracking

Quota and consumption tracking for tokens and financial budgets, plus session state management across machine boundaries. Provides real-time visibility into resource constraints and handles asynchronous wakeup scheduling for long-running operations.

##### 5.2.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 5.2.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

##### 5.2.2.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

##### 5.2.2.4 [Loop wakeup not scheduled (System Reminder)](system-prompts/system-reminder-loop-wakeup-not-scheduled.md)

Instructs Claude on handling unscheduled /loop dynamic mode wakeups, distinguishing between cases where the prompt field was set versus unset and specifying when to re-issue with the prompt field populated.

#### 5.2.3 IDE & File State Notifications

Real-time awareness of file system and IDE changes, including user selections, external modifications, and diagnostic updates. Enables Claude to track evolving code state without explicit user narration while respecting resource constraints through truncation and budget-aware diff handling.

##### 5.2.3.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 5.2.3.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific lines selected by the user in the IDE, including the file and line range, with a note that it may or may not relate to the current task.

##### 5.2.3.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was modified by the user or linter and includes the diff, instructing Claude to account for the change without reverting unless requested.

##### 5.2.3.4 [File modification detected (budget exceeded) [System Reminder]](system-prompts/system-reminder-file-modification-detected-budget-exceeded.md)

Notifies Claude that a file was modified externally but the diff was omitted due to snippet budget constraints, directing use of Read tool for current content.

##### 5.2.3.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Informs Claude that a large file was truncated to a maximum line count and instructs it to use the read tool for additional content without mentioning truncation to the user.

##### 5.2.3.6 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude when a file read offset exceeds the file's actual length, providing the total line count.

##### 5.2.3.7 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but has empty contents.

##### 5.2.3.8 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues with a formatted summary and list.

### 5.3 Task & Cron Scheduling

Structured task tracking with progress states for coding sessions, background cron scheduling for recurring jobs, and periodic monitoring for daily briefs and meeting prep.

#### 5.3.1 Task & Todo Management Tools

Structured task tracking for coding sessions using imperative, active-form descriptions with progress states (pending, in-progress, completed). Breaks complex work into manageable items while maintaining single-task focus, supporting both individual workflows and team-based task assignment with blocking dependency awareness.

##### 5.3.1.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

TodoWrite creates and manages structured task lists for coding sessions with imperative and active-form descriptions, tracking progress through pending, in-progress, and completed states. It emphasizes breaking complex multi-step work into manageable items and maintaining exactly one active task at a time.

##### 5.3.1.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

TaskCreate structures task lists for coding sessions, tracking progress on multi-step work and complex tasks with imperative subjects, descriptions, and optional active-form spinners.

##### 5.3.1.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

TaskList workflow for teammates involves checking for pending unblocked tasks, claiming work in ID order, and notifying the team lead when blocked.

##### 5.3.1.4 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite to break down work, track progress, and mark tasks complete immediately upon finishing.

##### 5.3.1.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Reminds Claude to use task tracking tools for progress management when relevant, without disclosing the reminder to the user.

##### 5.3.1.6 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task tracking when relevant, without mentioning the reminder to the user.

#### 5.3.2 Scheduling & Cron Tools

Background task scheduling via cron expressions and dynamic loop execution for autonomous or self-paced work resumption. Supports one-shot and recurring jobs with load distribution, prompt cache optimization for loop delays, and event-driven wake signals paired with heartbeat fallbacks for reliable task execution.

##### 5.3.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron-based jobs using standard 5-field cron syntax in user's local timezone; avoid :00 and :30 minute marks when possible to distribute load; recurring tasks auto-expire after a configurable number of days.

##### 5.3.2.2 [ScheduleWakeup (/loop dynamic mode) [Tool Description]](system-prompts/tool-description-schedulewakeup-loop-dynamic-mode.md)

Schedule the next iteration in /loop dynamic (self-paced) mode by passing the loop prompt or autonomous-loop sentinel to resume work at the specified time.

##### 5.3.2.3 [Snooze (delay and reason guidance) [Tool Description]](system-prompts/tool-description-snooze-delay-and-reason-guidance.md)

Snooze schedules task resumption in dynamic loop mode, with guidance on choosing delays relative to the 5-minute prompt cache TTL to optimize performance and cost, plus requirements for informative reason fields.

##### 5.3.2.4 [Schedule proactive offer guidance (Tool Description)](system-prompts/tool-description-schedule-proactive-offer-guidance.md)

Proactively offer to schedule background agents after completing work with natural follow-ups like feature rollouts, monitoring setup, or deferred cleanup tasks.

##### 5.3.2.5 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into an interval and prompt, converts the interval to a cron expression, and schedules a recurring task with immediate execution.

##### 5.3.2.6 [/loop slash command (dynamic mode) [Skill]](system-prompts/skill-loop-slash-command-dynamic-mode.md)

Parses user input into an interval and prompt for scheduling recurring or dynamically self-paced loop executions, with three parsing rules and dynamic-mode fallback.

##### 5.3.2.7 [/loop self-pacing mode (Skill)](system-prompts/skill-loop-self-pacing-mode.md)

Instructs Claude how to self-pace a recurring loop by arming event monitors as primary wake signals and scheduling fallback heartbeat delays between iterations.

##### 5.3.2.8 [/loop cloud-first scheduling offer (Skill)](system-prompts/skill-loop-cloud-first-scheduling-offer.md)

Decision tree for offering cloud-based scheduling before falling back to local session loops in the /loop command, with interval-based and phrasing-based triggers.

##### 5.3.2.9 [Schedule recurring cron and execute immediately (compact) [Skill]](system-prompts/skill-schedule-recurring-cron-and-execute-immediately-compact.md)

Creates a recurring cron job, confirms the schedule with the user, and immediately executes the parsed prompt without waiting for the first cron fire.

##### 5.3.2.10 [Schedule recurring cron and run immediately (Skill)](system-prompts/skill-schedule-recurring-cron-and-run-immediately.md)

Converts an interval to a cron expression, schedules a recurring task, confirms to the user, and immediately executes the task without waiting for the first cron fire.

##### 5.3.2.11 [Dynamic pacing loop execution (Skill)](system-prompts/skill-dynamic-pacing-loop-execution.md)

Instructions for executing a dynamic pacing loop that runs tasks, arms persistent event monitors as primary wake signals, schedules fallback heartbeat delays, and handles task notifications.

#### 5.3.3 Scheduling: Morning Check-ins & Periodic Monitoring

Scheduled tasks that keep users prepared and informed through daily briefs, pre-meeting context gathering, and periodic heartbeat monitoring. Surfaces actionable changes and time-sensitive information without interrupting quiet hours.

##### 5.3.3.1 [/morning-checkin daily brief (Skill)](system-prompts/skill-morning-checkin-daily-brief.md)

Once-a-day scheduled task that prepares a daily calendar and inbox digest, schedules pre-meeting check-ins, and records the day's top priority in a scannable brief.

##### 5.3.3.2 [/pre-meeting-checkin event brief (Skill)](system-prompts/skill-pre-meeting-checkin-event-brief.md)

Fires minutes before a calendar event to gather materials, recent thread context, open questions, and a concise meeting brief so the user walks in prepared.

##### 5.3.3.3 [/catch-up periodic heartbeat (Skill)](system-prompts/skill-catch-up-periodic-heartbeat.md)

Periodic heartbeat task that scans user priorities, checks for actionable changes across connected tools, and surfaces a brief digest only when something time-sensitive or actionable appears.

---

## 6. API References, SDKs & Developer Documentation

Comprehensive API and SDK documentation for Claude and the Managed Agents platform, covering streaming, batches, tool use, prompt caching, and language-specific client libraries.

### 6.1 Claude API & SDK References

Language-specific SDK documentation and raw HTTP reference covering client initialization, streaming, vision, tool use, prompt caching, extended thinking, and the model catalog.

#### 6.1.1 Claude API SDK References

Language-specific SDK documentation and raw HTTP reference for the Claude API, covering client initialization, streaming, vision, tool use, prompt caching, extended thinking, and error handling across Python, TypeScript, Go, Java, Ruby, PHP, C#, and cURL. Includes model catalog for capability queries and programmatic discovery.

##### 6.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client configuration, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization strategies.

##### 6.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization.

##### 6.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including installation, client initialization, streaming, tool use with BetaToolRunner, thinking, prompt caching, server-side tools, and context editing patterns.

##### 6.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering installation, client initialization, streaming, thinking, tool use with annotated classes and BetaToolRunner, prompt caching, structured output, and server-side tools.

##### 6.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including installation, client initialization, basic requests, streaming, tool use with beta tool runner, and prompt caching with TTL support.

##### 6.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including installation, client initialization for standard/Bedrock/Vertex/Foundry, streaming, tool use with BetaRunnableTool, extended thinking, prompt caching, and structured outputs.

##### 6.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference including installation, client initialization, basic requests, streaming, thinking, tool use, prompt caching, structured output, and beta features with union type patterns.

##### 6.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming (SSE), tool use, prompt caching, extended thinking, and required headers.

##### 6.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact IDs, context windows, max output tokens, and programmatic model discovery via Models API for capability queries.

#### 6.1.2 Streaming, Batches & Tool Use API References

References for real-time message streaming, asynchronous batch processing at cost reduction, tool use patterns including tool runners and agentic loops, file management for documents and images, and prompt caching optimization. Covers language-specific implementations and design patterns for effective cache utilization.

##### 6.1.2.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference including sync/async streaming, handling different content types, tool use, and progress tracking.

##### 6.1.2.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, tool use, and event types.

##### 6.1.2.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for asynchronous batch processing of Messages API requests at 50% cost reduction.

##### 6.1.2.4 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice, tool runner vs manual loops, server-side tools, and structured outputs.

##### 6.1.2.5 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference covering tool runner, manual agentic loops, code execution, memory tool, and structured outputs with Pydantic.

##### 6.1.2.6 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod, manual agentic loops, code execution, memory tool, and structured outputs.

##### 6.1.2.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, listing, deletion, metadata retrieval, and usage in messages for documents and images with file_id references.

##### 6.1.2.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

Reference for uploading, managing, and using files with the Claude API via TypeScript SDK, including file size limits, storage quotas, and integration with Messages API.

##### 6.1.2.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Guide to designing prompt-building code for effective caching, covering placement patterns, silent invalidators, and architectural decisions for cache hits.

#### 6.1.3 Building LLM Applications: Skills & Navigation

Foundational resources for developing with Claude, including API navigation guides, model migration pathways, error handling references, and CLI tooling. Covers language-specific SDK usage, feature selection, and staying current with API changes.

##### 6.1.3.1 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Quick-reference navigation guide for language-specific Claude API documentation, organized by task type (classification, streaming, batches, tool-use, agents) with pointers to relevant files.

##### 6.1.3.2 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Comprehensive guide for building LLM applications with Claude, including language detection, API surface selection (Claude API vs. Managed Agents), model defaults, thinking/effort configuration, and language-specific documentation reading with per-SDK syntax reference.

##### 6.1.3.3 [Model migration guide (Skill)](system-prompts/skill-model-migration-guide.md)

Step-by-step instructions for migrating existing code to newer Claude models, covering breaking changes, deprecated parameters, per-SDK syntax, prompt-behavior shifts, and comprehensive migration checklists for Opus 4.7, 4.6, and Sonnet 4.6.

##### 6.1.3.4 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for current Claude API documentation, Managed Agents resources, and SDK repositories to retrieve latest information on models, features, and endpoints.

##### 6.1.3.5 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400, 401, 403, 429, 500, 529) with causes, handling strategies, and SDK exception classes for each error type.

##### 6.1.3.6 [Anthropic CLI (Data)](system-prompts/data-anthropic-cli.md)

Reference documentation for the ant CLI covering installation, authentication, command structure, input/output shaping with --transform, managed agents workflows, and version-controlled resource patterns.

### 6.2 Managed Agents API Reference

Complete reference for the Managed Agents API, covering agent and session lifecycle, environment setup, file and GitHub integration, persistent memory stores, tool types including MCP and custom tools, event streaming and polling, and client-side patterns. Includes language-specific SDKs for Python and TypeScript.

#### 6.2.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Overview of Managed Agents API architecture, the mandatory agent-then-session flow, beta headers, documentation reading guide, and common pitfalls.

#### 6.2.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Core concepts for Managed Agents API covering Agents, Sessions, Environments, Containers, lifecycle, versioning, and the mandatory agent-then-session flow.

#### 6.2.3 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive endpoint reference for Managed Agents API including SDK methods, request/response schemas, error handling, and rate limits across all resources.

#### 6.2.4 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference for Managed Agents environments, file uploads, GitHub repository mounting, session outputs, and the Files API for bidirectional file transfer.

#### 6.2.5 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Reference for sending and receiving events on Managed Agent sessions via streaming or polling, including message queuing, interrupts, and event payload details.

#### 6.2.6 [Managed Agents memory stores reference (Data)](system-prompts/data-managed-agents-memory-stores-reference.md)

Reference for Managed Agents memory stores enabling persistent cross-session storage, including FUSE mounts, memory CRUD, versions, redaction, and concurrency control.

#### 6.2.7 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference for Managed Agents tool types (agent toolset, MCP, custom), permission policies, vault credential management, and skills API for specialized agents.

#### 6.2.8 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Reference guide for common client-side patterns driving Managed Agent sessions, including stream reconnection, tool confirmations, interrupts, custom tools, and file mounting.

#### 6.2.9 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Python SDK reference for Managed Agents covering agent creation, session management, streaming, custom tools, file uploads, and MCP server integration.

#### 6.2.10 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

TypeScript SDK reference for Managed Agents covering agent creation, session management, streaming, custom tools, file uploads, and MCP server integration.

#### 6.2.11 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

cURL and raw HTTP request examples for Managed Agents API covering environment, agent, and session lifecycle operations.

### 6.3 Claude Code Documentation & Guide Agent

Provides contextual help for Claude Code, Agent SDK, and API by surfacing official documentation, discovering relevant features, and delivering actionable guidance aligned with Claude's collaborative and direct communication principles.

#### 6.3.1 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant resources, and providing actionable guidance with code examples and feature discovery.

#### 6.3.2 [Assistant voice and values template (Data)](system-prompts/data-assistant-voice-and-values-template.md)

Template content describing Claude's voice and values: prioritizing user time, getting things right, honesty, careful data handling, and showing up as warm, smart, direct, and collaborative.

---

## 7. Code Quality, Security & Workflow Improvement

Principles for pragmatic code modification, security policies, verification testing, onboarding setup, skill creation, usage analytics, and collaborative learning modes.

### 7.1 Code Quality & Task Execution

Pragmatic code modification principles: deleting unused code, validating at system boundaries, avoiding impossible-scenario error handling, and authorizing ambitious task completion.

#### 7.1.1 Code Quality & Task Execution Guidelines

Establishes principles for pragmatic code modification: delete unused code outright rather than maintaining compatibility shims, validate only at system boundaries while trusting internal code, and avoid unnecessary error handling for impossible scenarios. Authorizes ambitious task completion and directs users to support channels when needed.

##### 7.1.1.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Instructs Claude to interpret user requests in the context of software engineering tasks like debugging, refactoring, and code modification, applying instructions to actual code rather than providing generic responses.

##### 7.1.1.2 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs deleting unused code completely rather than adding compatibility shims, renamed variables, re-exports, or removed comments.

##### 7.1.1.3 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs avoiding error handling for impossible scenarios and validating only at system boundaries. Trusts internal code and framework guarantees, avoiding feature flags and backwards-compatibility shims when code can be changed directly.

##### 7.1.1.4 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Authorizes Claude to help users complete ambitious tasks that would otherwise be too complex or time-consuming, deferring to user judgment on scope.

##### 7.1.1.5 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs informing users about help and feedback channels when requested.

#### 7.1.2 Verification & Testing Skills

Runtime-driven verification that validates code changes by executing them at their user-facing surface (CLI, API, GUI) and capturing observable behavior. Includes patterns for testing CLI flags, API routes, and web interactions, with automated skill generation for continuous verification workflows.

##### 7.1.2.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Comprehensive verification skill instructing Claude to validate code changes by running the app at its runtime surface (CLI, API, GUI, library boundary), driving it to execute changed code, and capturing observable behavior. Emphasizes finding the surface where users meet the change, avoiding test reruns and unit-test patterns, probing around the claim for edge cases, and reporting with verdicts (PASS/FAIL/BLOCKED/SKIP) backed by concrete evidence from the running app.

##### 7.1.2.2 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Demonstrates verification workflow for CLI changes by building, running with test arguments, and comparing output to expected behavior. Shows pattern for testing new flags and ensuring non-regression in existing functionality.

##### 7.1.2.3 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Demonstrates verification workflow for server and API changes using curl to test routes, with server lifecycle management via readiness polling. Shows pattern for testing status codes, response headers, and body content against expected behavior.

##### 7.1.2.4 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically test code changes via Playwright (web UI), Tmux (CLI), or HTTP (API), including project detection, tool setup, authentication configuration, and skill generation.

##### 7.1.2.5 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Verification subagent that adversarially tests implementations by running builds, test suites, linters, and boundary/concurrency probes, issuing PASS/FAIL/PARTIAL verdicts with documented evidence of actual execution.

##### 7.1.2.6 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation is finished.

### 7.2 Security & Malware Policies

Safeguards against misuse while enabling legitimate security work. Authorizes defensive testing and educational contexts while refusing destructive attacks, evasion techniques, and malicious code improvement. Prioritizes secure coding practices and vulnerability prevention.

#### 7.2.1 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Authorizes assistance with authorized security testing, defensive security, CTF challenges, and educational contexts. Refuses requests for destructive techniques, DoS attacks, mass targeting, supply chain compromise, or detection evasion. Requires clear authorization context for dual-use security tools.

#### 7.2.2 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs avoiding security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks. Prioritizes writing safe, secure, and correct code, fixing insecure code immediately when noticed.

#### 7.2.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but forbids improving or augmenting malicious code, while permitting analysis, reporting, and behavioral questions.

### 7.3 Onboarding, Skills & Analytics

Guided setup flows for CLAUDE.md configuration, converting repeatable workflows into reusable skills, and analyzing session transcripts to extract friction points and improvement opportunities.

#### 7.3.1 Onboarding & CLAUDE.md Setup

Guided setup flows for configuring Claude Code in new repositories and onboarding team members. Covers codebase analysis, CLAUDE.md creation, skill/hook configuration, and team-specific documentation with warm, conversational guidance.

##### 7.3.1.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks in a repository, including codebase exploration, user interviews, iterative proposal refinement, and optimization suggestions.

##### 7.3.1.2 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding a new teammate to a team's Claude Code setup, walking them through usage stats, setup checklists, MCP servers, skills, and team tips in a warm conversational style.

##### 7.3.1.3 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides by analyzing usage data, classifying session types into work categories, and iteratively refining ONBOARDING.md with team name, tips, and starter tasks.

##### 7.3.1.4 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview script for configuring Managed Agents from scratch, covering tool selection, skills, files, environment settings, and emitting setup YAML and runtime SDK code.

#### 7.3.2 Skill Creation & Management

Converts repeatable workflows into reusable skills through session analysis and user interviews, generating documented SKILL.md files. Includes permission management to reduce friction by extracting safe tool-call patterns from transcripts.

##### 7.3.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Skill tool invokes specialized capabilities and slash commands within conversations, requiring exact skill names from available lists and blocking other responses until the relevant skill is called.

##### 7.3.2.2 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-step process to convert repeatable session workflows into reusable skills: analyzing the session, interviewing the user via AskUserQuestion across four rounds, writing a SKILL.md file with frontmatter and per-step annotations, and confirming before saving.

##### 7.3.2.3 [Generate permission allowlist from transcripts (Skill)](system-prompts/skill-generate-permission-allowlist-from-transcripts.md)

Analyzes session transcripts to extract frequently used read-only tool-call patterns and adds them to the project's permission allowlist to reduce permission prompts, with safeguards against arbitrary code execution.

#### 7.3.3 Insights & Usage Analytics

Analyzes session transcripts and usage patterns to extract structured insights about what's working, friction points, and ambitious opportunities. Generates actionable suggestions for improving workflows through CLAUDE.md updates, feature adoption, and custom tooling recommendations.

##### 7.3.3.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part usage insights summary covering what's working, hindrances, quick wins, and ambitious workflows for improved Claude Code adoption, using coaching tone and avoiding numerical stats or generic praise.

##### 7.3.3.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes usage data to identify and categorize friction patterns with 3 categories and 2 examples each, helping users understand recurring issues and improvement opportunities.

##### 7.3.3.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future opportunities for autonomous AI-assisted development workflows, including parallel agents and test-driven iteration, with copyable prompts to try.

##### 7.3.3.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from session transcripts including goal categories (user-requested only), satisfaction signals, and friction types, with strict guidelines to avoid counting autonomous work or misinterpreting user signals.

##### 7.3.3.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions (prioritizing repeated user guidance), feature recommendations from MCP Servers, Custom Skills, Hooks, Headless Mode, and Task Agents, plus usage patterns tailored to the user's sessions.

##### 7.3.3.6 [/insights report output (Skill)](system-prompts/skill-insights-report-output.md)

Formats and displays the insights usage report results after the user runs the /insights slash command, providing shareable report URL and summary.

### 7.4 Codebase Exploration & Learning Modes

Read-only codebase investigation for architecture analysis and documentation, plus collaborative learning modes that pause for human input and provide guided step-by-step instruction.

#### 7.4.1 Codebase Exploration & Analysis Agents

Read-only investigation of codebases through fast file discovery, pattern matching, and content analysis. Supports multi-step research tasks and generates documentation of architecture, build processes, and project conventions without modifying source code.

##### 7.4.1.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only codebase exploration agent specializing in fast file discovery via glob patterns, regex search, and content analysis, with thoroughness levels (quick/medium/very thorough) and strict prohibitions on file modification.

##### 7.4.1.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases, reporting findings concisely without creating unnecessary files.

##### 7.4.1.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md files by documenting build/test commands, high-level architecture, and project-specific conventions without repeating obvious practices.

#### 7.4.2 Learning & Teaching Modes

Enables collaborative learning by pausing code generation for human input on design decisions, marking decision points with TODO(human) markers, and providing codebase-specific insights before and after changes. Supports guided step-by-step instruction through interactive overlays when users prefer to learn rather than receive direct solutions.

##### 7.4.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Activates collaborative learning by requesting human contributions for design decisions and business logic in code generation, using Learn by Doing requests with TODO(human) markers, TodoList integration, and post-contribution insights.

##### 7.4.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code changes using a formatted insight block, focusing on codebase-specific implementation choices rather than general programming concepts.

##### 7.4.2.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Request permission to guide the user through a task step-by-step using fullscreen tooltip overlays instead of direct access when the user wants to learn.

---

## 8. User Interaction, Communication & Output

Tools and guidelines for soliciting user input, formatting agent output, generating descriptive metadata, summarizing web content, and debugging session failures.

### 8.1 User Interaction & Question Tools

Mechanisms for Claude to solicit user input and present visual options during task execution. Supports interactive decision-making through structured questions, preview rendering, and message routing that keeps users informed of progress.

#### 8.1.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Enables Claude to ask users for preferences, clarifications, and decisions during execution, with guidance on plan mode usage and avoiding references to hidden plans.

#### 8.1.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Describes the optional preview field for single-select questions to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML.

#### 8.1.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for concrete UI artifacts like ASCII mockups, code snippets, and diagrams in single-select options, switching layout when any option includes a preview field.

#### 8.1.4 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to route all user-facing replies through SendUserMessage, not plain text, and to structure responses with immediate acknowledgment, work phases, and checkpoints carrying information rather than filler status.

### 8.2 Communication Style & Output Formatting

Guidelines for clear, concise user-facing communication during agent execution. Establishes conventions for code citations, response brevity, action summaries, and formatting that ensure users understand Claude's work without unnecessary verbosity.

#### 8.2.1 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs brief user-facing updates at key moments during tool use, concise end-of-turn summaries, matching response format to task complexity, and avoiding comments and planning documents in code. Emphasizes that users see only text output, not tool calls, so narration must be clear and relevant.

#### 8.2.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number citations when referencing specific code locations.

#### 8.2.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to provide short and concise responses.

#### 8.2.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths only, share relevant paths and code snippets in final response, avoid emojis, and omit colons before tool calls for clear communication.

#### 8.2.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Instructs Claude to describe its most recent action in 3-5 words using present tense, naming files or functions rather than branches, without using tools. Provides examples of good summaries (concise, specific, present-tense) and bad ones (past tense, vague, too long).

#### 8.2.6 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and instructs it to follow that style's guidelines.

### 8.3 Metadata Generation & Content Processing

Generating descriptive metadata for CLI tools and commands, processing web-sourced and shell-generated data by condensing verbose output, and formatting information for terminal display.

#### 8.3.1 Agent Utility: Naming, Summarization & Prompt Generation

Generates descriptive metadata and predictive guidance for CLI tools and user interactions, including command documentation, safety validation, and contextual prompt suggestions.

##### 8.3.1.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy commands.

##### 8.3.1.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands to enforce safety policies, returning the prefix string or 'command_injection_detected' to gate user confirmation.

##### 8.3.1.3 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on conversation context, avoiding evaluative or meta-commentary suggestions.

#### 8.3.2 WebFetch Summarization & Content Processing

Agents that process and present web-sourced and shell-generated data by condensing verbose output, enforcing content limits, and formatting information for terminal display. Handles quote extraction, domain-based filtering, and shell configuration translation.

##### 8.3.2.1 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Prompt for agent that summarizes verbose WebFetch output, enforcing character limits on quotes and paraphrasing for untrusted domains while preserving relevant details and code examples.

##### 8.3.2.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

System prompt for configuring Claude Code status line display, converting shell PS1 configurations to status line commands and managing ~/.claude/settings.json with context window and rate limit information.

### 8.4 Debugging & Diagnostics

Identifies and resolves session failures by analyzing logs, monitoring process health, and pinpointing performance bottlenecks or error conditions.

#### 8.4.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Helps users debug issues in Claude Code sessions by reading debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

#### 8.4.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by checking process state, CPU usage, memory, and child processes, then posts findings to Slack.
