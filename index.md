# Claude Code System Prompts Index

A technical reference for building, deploying, and operating Claude-powered coding agents — covering everything from low-level execution safety and tool use to multi-agent coordination, persistent memory, and the APIs needed to integrate these capabilities into real systems.

## Table of Contents

1. [Bash and Shell Execution](#1-bash-and-shell-execution)
   1. [Core Bash Behavior](#11-core-bash-behavior)
      1. [Bash Tool: Core Execution & Syntax](#111-bash-tool-core-execution-syntax)
         1. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
         2. [Bash (working directory) [Tool Description]](#1112-bash-working-directory-tool-description)
         3. [Bash (maintain cwd) [Tool Description]](#1113-bash-maintain-cwd-tool-description)
         4. [Bash (no newlines) [Tool Description]](#1114-bash-no-newlines-tool-description)
         5. [Bash (quote file paths) [Tool Description]](#1115-bash-quote-file-paths-tool-description)
         6. [Bash (sequential commands) [Tool Description]](#1116-bash-sequential-commands-tool-description)
         7. [Bash (semicolon usage) [Tool Description]](#1117-bash-semicolon-usage-tool-description)
         8. [Bash (parallel commands) [Tool Description]](#1118-bash-parallel-commands-tool-description)
         9. [Bash (timeout) [Tool Description]](#1119-bash-timeout-tool-description)
         10. [Bash (verify parent directory) [Tool Description]](#11110-bash-verify-parent-directory-tool-description)
         11. [Bash (alternative — communication) [Tool Description]](#11111-bash-alternative-—-communication-tool-description)
      2. [Bash Tool: Sleep & Polling Behavior](#112-bash-tool-sleep-polling-behavior)
         1. [Bash (sleep — keep short) [Tool Description]](#1121-bash-sleep-—-keep-short-tool-description)
         2. [Bash (sleep — no polling background tasks) [Tool Description]](#1122-bash-sleep-—-no-polling-background-tasks-tool-description)
         3. [Bash (sleep — run immediately) [Tool Description]](#1123-bash-sleep-—-run-immediately-tool-description)
         4. [Bash (sleep — use check commands) [Tool Description]](#1124-bash-sleep-—-use-check-commands-tool-description)
         5. [One of six rules for using sleep command (System Prompt)](#1125-one-of-six-rules-for-using-sleep-command-system-prompt)
   2. [Bash Safety and Best Practices](#12-bash-safety-and-best-practices)
      1. [Bash Tool: Preferred Alternatives & Best Practices](#121-bash-tool-preferred-alternatives-best-practices)
         1. [Bash (prefer dedicated tools) [Tool Description]](#1211-bash-prefer-dedicated-tools-tool-description)
         2. [Bash (built-in tools note) [Tool Description]](#1212-bash-built-in-tools-note-tool-description)
         3. [Bash (alternative — content search) [Tool Description]](#1213-bash-alternative-—-content-search-tool-description)
         4. [Bash (alternative — edit files) [Tool Description]](#1214-bash-alternative-—-edit-files-tool-description)
         5. [Bash (alternative — file search) [Tool Description]](#1215-bash-alternative-—-file-search-tool-description)
         6. [Bash (alternative — read files) [Tool Description]](#1216-bash-alternative-—-read-files-tool-description)
         7. [Bash (alternative — write files) [Tool Description]](#1217-bash-alternative-—-write-files-tool-description)
      2. [Bash Tool: Git Operations & Safety](#122-bash-tool-git-operations-safety)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#1221-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#1222-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#1223-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#1224-bash-git-—-prefer-new-commits-tool-description)
      3. [Bash Tool: Sandbox Security & Restrictions](#123-bash-tool-sandbox-security-restrictions)
         1. [Bash (sandbox — adjust settings) [Tool Description]](#1231-bash-sandbox-—-adjust-settings-tool-description)
         2. [Bash (sandbox — default to sandbox) [Tool Description]](#1232-bash-sandbox-—-default-to-sandbox-tool-description)
         3. [Bash (sandbox — evidence: access denied) [Tool Description]](#1233-bash-sandbox-—-evidence-access-denied-tool-description)
         4. [Bash (sandbox — evidence list header) [Tool Description]](#1234-bash-sandbox-—-evidence-list-header-tool-description)
         5. [Bash (sandbox — evidence: network failures) [Tool Description]](#1235-bash-sandbox-—-evidence-network-failures-tool-description)
         6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1236-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
         7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1237-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
         8. [Bash (sandbox — explain restriction) [Tool Description]](#1238-bash-sandbox-—-explain-restriction-tool-description)
         9. [Bash (sandbox — failure evidence condition) [Tool Description]](#1239-bash-sandbox-—-failure-evidence-condition-tool-description)
         10. [Bash (sandbox — mandatory mode) [Tool Description]](#12310-bash-sandbox-—-mandatory-mode-tool-description)
         11. [Bash (sandbox — no exceptions) [Tool Description]](#12311-bash-sandbox-—-no-exceptions-tool-description)
         12. [Bash (sandbox — no sensitive paths) [Tool Description]](#12312-bash-sandbox-—-no-sensitive-paths-tool-description)
         13. [Bash (sandbox — per-command) [Tool Description]](#12313-bash-sandbox-—-per-command-tool-description)
         14. [Bash (sandbox — response header) [Tool Description]](#12314-bash-sandbox-—-response-header-tool-description)
         15. [Bash (sandbox — retry without sandbox) [Tool Description]](#12315-bash-sandbox-—-retry-without-sandbox-tool-description)
         16. [Bash (sandbox — tmpdir) [Tool Description]](#12316-bash-sandbox-—-tmpdir-tool-description)
         17. [Bash (sandbox — user permission prompt) [Tool Description]](#12317-bash-sandbox-—-user-permission-prompt-tool-description)
   3. [PowerShell Tool & Windows Scripting](#13-powershell-tool-windows-scripting)
      1. [PowerShell (Tool Description)](#131-powershell-tool-description)
      2. [PowerShell edition for 5.1 (System Prompt)](#132-powershell-edition-for-51-system-prompt)
      3. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#133-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
2. [Tools for File, Web, and UI Interaction](#2-tools-for-file-web-and-ui-interaction)
   1. [File Operation Tools](#21-file-operation-tools)
      1. [ReadFile (Tool Description)](#211-readfile-tool-description)
      2. [Write (Tool Description)](#212-write-tool-description)
      3. [Edit (Tool Description)](#213-edit-tool-description)
      4. [Grep (Tool Description)](#214-grep-tool-description)
      5. [LSP (Tool Description)](#215-lsp-tool-description)
   2. [Browser, Desktop, and Web Tools](#22-browser-desktop-and-web-tools)
      1. [Browser & Computer Automation Tools](#221-browser-computer-automation-tools)
         1. [Computer (Tool Description)](#2211-computer-tool-description)
         2. [Computer action (Tool Parameter)](#2212-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#2213-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#2214-chrome-browser-mcp-tools-system-prompt)
         5. [Computer Use MCP (Skill)](#2215-computer-use-mcp-skill)
      2. [Web Information Retrieval Tools](#222-web-information-retrieval-tools)
         1. [WebFetch (Tool Description)](#2221-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#2222-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#2223-webfetch-summarizer-agent-prompt)
   3. [Interactive Execution and Monitoring Tools](#23-interactive-execution-and-monitoring-tools)
      1. [Jupyter Notebook & REPL Tools](#231-jupyter-notebook-repl-tools)
         1. [NotebookEdit (Tool Description)](#2311-notebookedit-tool-description)
         2. [REPL (Tool Description)](#2312-repl-tool-description)
      2. [Notification & Background Monitoring Tools](#232-notification-background-monitoring-tools)
         1. [PushNotification (Tool Description)](#2321-pushnotification-tool-description)
         2. [Background monitor (streaming events) [Tool Description]](#2322-background-monitor-streaming-events-tool-description)
      3. [Tool Discovery & User Interaction](#233-tool-discovery-user-interaction)
         1. [ToolSearch (second part) [Tool Description]](#2331-toolsearch-second-part-tool-description)
         2. [AskUserQuestion (Tool Description)](#2332-askuserquestion-tool-description)
         3. [AskUserQuestion (preview field) [Tool Description]](#2333-askuserquestion-preview-field-tool-description)
3. [Multi-Agent Orchestration](#3-multi-agent-orchestration)
   1. [Agent Communication & Team Coordination](#31-agent-communication-team-coordination)
      1. [SendMessageTool (Tool Description)](#311-sendmessagetool-tool-description)
      2. [SendMessageTool (non-agent-teams) [Tool Description]](#312-sendmessagetool-non-agent-teams-tool-description)
      3. [TeammateTool (Tool Description)](#313-teammatetool-tool-description)
      4. [TeamDelete (Tool Description)](#314-teamdelete-tool-description)
      5. [Teammate Communication (System Prompt)](#315-teammate-communication-system-prompt)
      6. [Team Coordination (System Reminder)](#316-team-coordination-system-reminder)
      7. [Team Shutdown (System Reminder)](#317-team-shutdown-system-reminder)
      8. [How to use the SendUserMessage tool (System Prompt)](#318-how-to-use-the-sendusermessage-tool-system-prompt)
   2. [Subagent Delegation and Batch Work](#32-subagent-delegation-and-batch-work)
      1. [Subagent Delegation & Orchestration](#321-subagent-delegation-orchestration)
         1. [Tool usage (subagent guidance) [System Prompt]](#3211-tool-usage-subagent-guidance-system-prompt)
         2. [Writing subagent prompts (System Prompt)](#3212-writing-subagent-prompts-system-prompt)
         3. [Subagent delegation examples (System Prompt)](#3213-subagent-delegation-examples-system-prompt)
         4. [Subagent prompt-writing examples (System Prompt)](#3214-subagent-prompt-writing-examples-system-prompt)
         5. [Fork usage guidelines (System Prompt)](#3215-fork-usage-guidelines-system-prompt)
         6. [Agent (usage notes) [Tool Description]](#3216-agent-usage-notes-tool-description)
         7. [Worker fork (Agent Prompt)](#3217-worker-fork-agent-prompt)
         8. [Agent mention (System Reminder)](#3218-agent-mention-system-reminder)
      2. [Batch Processing & Parallel Work Orchestration](#322-batch-processing-parallel-work-orchestration)
         1. [/batch slash command (Agent Prompt)](#3221-batch-slash-command-agent-prompt)
         2. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#3222-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   3. [Autonomous Execution and Agent Design](#33-autonomous-execution-and-agent-design)
      1. [Autonomous Execution & Auto Mode](#331-autonomous-execution-auto-mode)
         1. [Auto mode (System Prompt)](#3311-auto-mode-system-prompt)
         2. [Autonomous loop check (System Prompt)](#3312-autonomous-loop-check-system-prompt)
         3. [Executing actions with care (System Prompt)](#3313-executing-actions-with-care-system-prompt)
         4. [Auto mode rule reviewer (Agent Prompt)](#3314-auto-mode-rule-reviewer-agent-prompt)
      2. [Agent Design & Architecture](#332-agent-design-architecture)
         1. [Agent creation architect (Agent Prompt)](#3321-agent-creation-architect-agent-prompt)
         2. [Agent Design Patterns (Skill)](#3322-agent-design-patterns-skill)
         3. [Building LLM-powered applications with Claude (Skill)](#3323-building-llm-powered-applications-with-claude-skill)
         4. [Claude guide agent (Agent Prompt)](#3324-claude-guide-agent-agent-prompt)
4. [Planning, Scheduling, and Workflow Automation](#4-planning-scheduling-and-workflow-automation)
   1. [Planning Mode & Implementation Strategy](#41-planning-mode-implementation-strategy)
      1. [EnterPlanMode (Tool Description)](#411-enterplanmode-tool-description)
      2. [ExitPlanMode (Tool Description)](#412-exitplanmode-tool-description)
      3. [Exited plan mode (System Reminder)](#413-exited-plan-mode-system-reminder)
      4. [Plan mode is active (5-phase) [System Reminder]](#414-plan-mode-is-active-5-phase-system-reminder)
      5. [Plan mode is active (iterative) [System Reminder]](#415-plan-mode-is-active-iterative-system-reminder)
      6. [Plan mode is active (subagent) [System Reminder]](#416-plan-mode-is-active-subagent-system-reminder)
      7. [Plan mode re-entry (System Reminder)](#417-plan-mode-re-entry-system-reminder)
      8. [Plan file reference (System Reminder)](#418-plan-file-reference-system-reminder)
      9. [Phase four of plan mode (System Prompt)](#419-phase-four-of-plan-mode-system-prompt)
      10. [Remote plan mode (ultraplan) [System Prompt]](#4110-remote-plan-mode-ultraplan-system-prompt)
      11. [Remote planning session (System Prompt)](#4111-remote-planning-session-system-prompt)
      12. [Ultraplan mode (System Reminder)](#4112-ultraplan-mode-system-reminder)
      13. [Plan mode (enhanced) [Agent Prompt]](#4113-plan-mode-enhanced-agent-prompt)
   2. [Git Version Control Workflows](#42-git-version-control-workflows)
      1. [Git Worktree Isolation](#421-git-worktree-isolation)
         1. [EnterWorktree (Tool Description)](#4211-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#4212-exitworktree-tool-description)
      2. [Git Operations & Pull Request Workflows](#422-git-operations-pull-request-workflows)
         1. [Quick git commit (Agent Prompt)](#4221-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#4222-quick-pr-creation-agent-prompt)
         3. [Session title and branch generation (Agent Prompt)](#4223-session-title-and-branch-generation-agent-prompt)
         4. [Git status (System Prompt)](#4224-git-status-system-prompt)
         5. [Worker instructions (System Prompt)](#4225-worker-instructions-system-prompt)
   3. [Scheduling and Task Tracking](#43-scheduling-and-task-tracking)
      1. [Task & Todo Management Tools](#431-task-todo-management-tools)
         1. [TodoWrite (Tool Description)](#4311-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#4312-taskcreate-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#4313-tasklist-teammate-workflow-tool-description)
         4. [Tool usage (task management) [System Prompt]](#4314-tool-usage-task-management-system-prompt)
         5. [Task tools reminder (System Reminder)](#4315-task-tools-reminder-system-reminder)
         6. [TodoWrite reminder (System Reminder)](#4316-todowrite-reminder-system-reminder)
      2. [Scheduling & Cron Tools](#432-scheduling-cron-tools)
         1. [CronCreate (Tool Description)](#4321-croncreate-tool-description)
         2. [ScheduleWakeup (/loop dynamic mode) [Tool Description]](#4322-schedulewakeup-loop-dynamic-mode-tool-description)
         3. [Snooze (delay and reason guidance) [Tool Description]](#4323-snooze-delay-and-reason-guidance-tool-description)
         4. [/loop slash command (Skill)](#4324-loop-slash-command-skill)
         5. [/loop slash command (dynamic mode) [Skill]](#4325-loop-slash-command-dynamic-mode-skill)
         6. [/loop self-pacing mode (Skill)](#4326-loop-self-pacing-mode-skill)
         7. [/loop cloud-first scheduling offer (Skill)](#4327-loop-cloud-first-scheduling-offer-skill)
         8. [Dynamic pacing loop execution (Skill)](#4328-dynamic-pacing-loop-execution-skill)
         9. [Schedule recurring cron and execute immediately (compact) [Skill]](#4329-schedule-recurring-cron-and-execute-immediately-compact-skill)
         10. [Schedule recurring cron and run immediately (Skill)](#43210-schedule-recurring-cron-and-run-immediately-skill)
         11. [/dream nightly schedule (Skill)](#43211-dream-nightly-schedule-skill)
         12. [/schedule slash command (Agent Prompt)](#43212-schedule-slash-command-agent-prompt)
      3. [Loop & Wakeup Scheduling Reminders](#433-loop-wakeup-scheduling-reminders)
         1. [Loop wakeup not scheduled (System Reminder)](#4331-loop-wakeup-not-scheduled-system-reminder)
         2. [/btw side question (System Reminder)](#4332-btw-side-question-system-reminder)
   4. [Hook System and CI/CD Integration](#44-hook-system-and-cicd-integration)
      1. [Hook System & Lifecycle Events](#441-hook-system-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#4411-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#4412-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#4413-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#4414-hook-stopped-continuation-system-reminder)
         5. [Hook stopped continuation prefix (System Reminder)](#4415-hook-stopped-continuation-prefix-system-reminder)
         6. [Hook success (System Reminder)](#4416-hook-success-system-reminder)
         7. [Stop hook blocking error (System Reminder)](#4417-stop-hook-blocking-error-system-reminder)
         8. [update-config (7-step verification flow) [Skill]](#4418-update-config-7-step-verification-flow-skill)
      2. [GitHub Integration & CI/CD](#442-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#4421-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#4422-github-app-installation-pr-description-data)
5. [Memory, Sessions, and Context Management](#5-memory-sessions-and-context-management)
   1. [Memory Management & Persistence](#51-memory-management-persistence)
      1. [Agent memory instructions (System Prompt)](#511-agent-memory-instructions-system-prompt)
      2. [Memory description of user details (System Prompt)](#512-memory-description-of-user-details-system-prompt)
      3. [Memory description of user feedback (System Prompt)](#513-memory-description-of-user-feedback-system-prompt)
      4. [Memory description of user feedback (with explicit save) [System Prompt]](#514-memory-description-of-user-feedback-with-explicit-save-system-prompt)
      5. [Memory staleness verification (System Prompt)](#515-memory-staleness-verification-system-prompt)
      6. [Description part of memory instructions (System Prompt)](#516-description-part-of-memory-instructions-system-prompt)
      7. [Dream team memory handling (System Prompt)](#517-dream-team-memory-handling-system-prompt)
      8. [Dream memory consolidation (Agent Prompt)](#518-dream-memory-consolidation-agent-prompt)
      9. [Dream memory pruning (Agent Prompt)](#519-dream-memory-pruning-agent-prompt)
      10. [Memory synthesis (Agent Prompt)](#5110-memory-synthesis-agent-prompt)
      11. [Determine which memory files to attach (Agent Prompt)](#5111-determine-which-memory-files-to-attach-agent-prompt)
      12. [Session memory update instructions (Agent Prompt)](#5112-session-memory-update-instructions-agent-prompt)
      13. [Memory file contents (System Reminder)](#5113-memory-file-contents-system-reminder)
      14. [Nested memory contents (System Reminder)](#5114-nested-memory-contents-system-reminder)
      15. [Invoked skills (System Reminder)](#5115-invoked-skills-system-reminder)
   2. [Conversation and Session State](#52-conversation-and-session-state)
      1. [Conversation Summarization & Context Compaction](#521-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#5211-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#5212-recent-message-summarization-agent-prompt)
         3. [Partial compaction instructions (System Prompt)](#5213-partial-compaction-instructions-system-prompt)
         4. [Context compaction summary (System Prompt)](#5214-context-compaction-summary-system-prompt)
         5. [Compact file reference (System Reminder)](#5215-compact-file-reference-system-reminder)
      2. [Session Management & State Tracking](#522-session-management-state-tracking)
         1. [Session continuation (System Reminder)](#5221-session-continuation-system-reminder)
         2. [Coding session title generator (Agent Prompt)](#5222-coding-session-title-generator-agent-prompt)
         3. [/rename auto-generate session name (Agent Prompt)](#5223-rename-auto-generate-session-name-agent-prompt)
         4. [Session search (Agent Prompt)](#5224-session-search-agent-prompt)
         5. [Session memory template (Data)](#5225-session-memory-template-data)
      3. [Scratchpad & Temporary File Management](#523-scratchpad-temporary-file-management)
         1. [Scratchpad directory (System Prompt)](#5231-scratchpad-directory-system-prompt)
6. [Developer Experience and Configuration](#6-developer-experience-and-configuration)
   1. [Setup, Configuration, and Onboarding](#61-setup-configuration-and-onboarding)
      1. [Configuration & Settings Management](#611-configuration-settings-management)
         1. [Config (Tool Description)](#6111-config-tool-description)
         2. [Update Claude Code Config (Skill)](#6112-update-claude-code-config-skill)
         3. [Minimal mode (System Prompt)](#6113-minimal-mode-system-prompt)
      2. [Onboarding & Project Setup](#612-onboarding-project-setup)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#6121-init-claudemd-and-skill-setup-new-version-skill)
         2. [Team onboarding guide (Skill)](#6122-team-onboarding-guide-skill)
         3. [Onboarding guide generator (Agent Prompt)](#6123-onboarding-guide-generator-agent-prompt)
         4. [Managed Agents onboarding flow (Agent Prompt)](#6124-managed-agents-onboarding-flow-agent-prompt)
      3. [Skill System & Slash Commands](#613-skill-system-slash-commands)
         1. [Skill (Tool Description)](#6131-skill-tool-description)
         2. [Skillify Current Session (System Prompt)](#6132-skillify-current-session-system-prompt)
         3. [Simplify (Skill)](#6133-simplify-skill)
   2. [Analytics, Learning, and Interaction Modes](#62-analytics-learning-and-interaction-modes)
      1. [Insights & Usage Analytics](#621-insights-usage-analytics)
         1. [Insights session facets extraction (System Prompt)](#6211-insights-session-facets-extraction-system-prompt)
         2. [Insights suggestions (System Prompt)](#6212-insights-suggestions-system-prompt)
         3. [Insights at a glance summary (System Prompt)](#6213-insights-at-a-glance-summary-system-prompt)
         4. [Insights friction analysis (System Prompt)](#6214-insights-friction-analysis-system-prompt)
         5. [Insights on the horizon (System Prompt)](#6215-insights-on-the-horizon-system-prompt)
         6. [/insights report output (Skill)](#6216-insights-report-output-skill)
      2. [Learning & Educational Modes](#622-learning-educational-modes)
         1. [Learning mode (System Prompt)](#6221-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6222-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#6223-request_teach_access-part-of-teach-mode-tool-description)
      3. [Prompt Suggestion & User Intent Prediction](#623-prompt-suggestion-user-intent-prediction)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#6231-prompt-suggestion-generator-v2-agent-prompt)
   3. [Output Formatting and Runtime Context](#63-output-formatting-and-runtime-context)
      1. [Communication Style & Response Formatting](#631-communication-style-response-formatting)
         1. [Communication style (System Prompt)](#6311-communication-style-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#6312-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#6313-tone-and-style-concise-output-—-short-system-prompt)
         4. [Output style active (System Reminder)](#6314-output-style-active-system-reminder)
         5. [Option previewer (System Prompt)](#6315-option-previewer-system-prompt)
         6. [Agent thread notes (System Prompt)](#6316-agent-thread-notes-system-prompt)
      2. [File State & IDE Integration Reminders](#632-file-state-ide-integration-reminders)
         1. [File exists but empty (System Reminder)](#6321-file-exists-but-empty-system-reminder)
         2. [File modified by user or linter (System Reminder)](#6322-file-modified-by-user-or-linter-system-reminder)
         3. [File opened in IDE (System Reminder)](#6323-file-opened-in-ide-system-reminder)
         4. [File shorter than offset (System Reminder)](#6324-file-shorter-than-offset-system-reminder)
         5. [File truncated (System Reminder)](#6325-file-truncated-system-reminder)
         6. [Lines selected in IDE (System Reminder)](#6326-lines-selected-in-ide-system-reminder)
         7. [New diagnostics detected (System Reminder)](#6327-new-diagnostics-detected-system-reminder)
      3. [Resource & Budget Monitoring](#633-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#6331-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#6332-usd-budget-system-reminder)
         3. [MCP resource no content (System Reminder)](#6333-mcp-resource-no-content-system-reminder)
         4. [MCP resource no displayable content (System Reminder)](#6334-mcp-resource-no-displayable-content-system-reminder)
      4. [Agent Summary & Action Description](#634-agent-summary-action-description)
         1. [Agent Summary Generation (System Prompt)](#6341-agent-summary-generation-system-prompt)
         2. [Bash command description writer (Agent Prompt)](#6342-bash-command-description-writer-agent-prompt)
         3. [Status line setup (Agent Prompt)](#6343-status-line-setup-agent-prompt)
7. [Code Quality, Testing, and Security](#7-code-quality-testing-and-security)
   1. [Code Review and Security Analysis](#71-code-review-and-security-analysis)
      1. [Code Review & Security Analysis](#711-code-review-security-analysis)
         1. [/review-pr slash command (Agent Prompt)](#7111-review-pr-slash-command-agent-prompt)
         2. [/security-review slash command (Agent Prompt)](#7112-security-review-slash-command-agent-prompt)
         3. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#7113-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         4. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#7114-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         5. [Censoring assistance with malicious activities (System Prompt)](#7115-censoring-assistance-with-malicious-activities-system-prompt)
         6. [Malware analysis after Read tool call (System Reminder)](#7116-malware-analysis-after-read-tool-call-system-reminder)
      2. [Security & Safety Infrastructure](#712-security-safety-infrastructure)
         1. [Bash command prefix detection (Agent Prompt)](#7121-bash-command-prefix-detection-agent-prompt)
   2. [Verification, Testing, and Exploration](#72-verification-testing-and-exploration)
      1. [Verification & Testing](#721-verification-testing)
         1. [Verify skill (Skill)](#7211-verify-skill-skill)
         2. [Verify skill (runtime-verification) [Skill]](#7212-verify-skill-runtime-verification-skill)
         3. [Verify CLI changes (example for Verify skill) [Skill]](#7213-verify-cli-changes-example-for-verify-skill-skill)
         4. [Verify server/API changes (example for Verify skill) [Skill]](#7214-verify-serverapi-changes-example-for-verify-skill-skill)
         5. [Create verifier skills (Skill)](#7215-create-verifier-skills-skill)
         6. [Verification specialist (Agent Prompt)](#7216-verification-specialist-agent-prompt)
         7. [Verify plan reminder (System Reminder)](#7217-verify-plan-reminder-system-reminder)
      2. [Codebase Exploration & Analysis](#722-codebase-exploration-analysis)
         1. [Explore (Agent Prompt)](#7221-explore-agent-prompt)
         2. [General purpose (Agent Prompt)](#7222-general-purpose-agent-prompt)
         3. [CLAUDE.md creation (Agent Prompt)](#7223-claudemd-creation-agent-prompt)
   3. [Debugging, Execution Control, and Reasoning](#73-debugging-execution-control-and-reasoning)
      1. [Reasoning & Thinking Calibration](#731-reasoning-thinking-calibration)
         1. [Thinking frequency tuning (System Reminder)](#7311-thinking-frequency-tuning-system-reminder)
         2. [REPL tool usage and scripting conventions (System Prompt)](#7312-repl-tool-usage-and-scripting-conventions-system-prompt)
      2. [Tool Execution Control & Permissions](#732-tool-execution-control-permissions)
         1. [Tool execution denied (System Prompt)](#7321-tool-execution-denied-system-prompt)
         2. [Generate permission allowlist from transcripts (Skill)](#7322-generate-permission-allowlist-from-transcripts-skill)
      3. [Agent Hook Evaluation & Stop Conditions](#733-agent-hook-evaluation-stop-conditions)
         1. [Agent Hook (Agent Prompt)](#7331-agent-hook-agent-prompt)
         2. [Hook condition evaluator (stop) [Agent Prompt]](#7332-hook-condition-evaluator-stop-agent-prompt)
      4. [Debugging & Diagnostics](#734-debugging-diagnostics)
         1. [Debugging (Skill)](#7341-debugging-skill)
         2. [/stuck slash command (Skill)](#7342-stuck-slash-command-skill)
         3. [Advisor tool instructions (System Prompt)](#7343-advisor-tool-instructions-system-prompt)
   4. [Software Engineering Task Execution](#74-software-engineering-task-execution)
      1. [Doing tasks (software engineering focus) [System Prompt]](#741-doing-tasks-software-engineering-focus-system-prompt)
      2. [Doing tasks (security) [System Prompt]](#742-doing-tasks-security-system-prompt)
      3. [Doing tasks (no unnecessary error handling) [System Prompt]](#743-doing-tasks-no-unnecessary-error-handling-system-prompt)
      4. [Doing tasks (no compatibility hacks) [System Prompt]](#744-doing-tasks-no-compatibility-hacks-system-prompt)
      5. [Doing tasks (ambitious tasks) [System Prompt]](#745-doing-tasks-ambitious-tasks-system-prompt)
      6. [Doing tasks (help and feedback) [System Prompt]](#746-doing-tasks-help-and-feedback-system-prompt)
8. [API Documentation and SDK References](#8-api-documentation-and-sdk-references)
   1. [Claude API Core and Advanced Features](#81-claude-api-core-and-advanced-features)
      1. [Claude API SDK References](#811-claude-api-sdk-references)
         1. [Claude API reference — Python (Data)](#8111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#8112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#8113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#8114-claude-api-reference-—-java-data)
         5. [Claude API reference — PHP (Data)](#8115-claude-api-reference-—-php-data)
         6. [Claude API reference — Ruby (Data)](#8116-claude-api-reference-—-ruby-data)
         7. [Claude API reference — C# (Data)](#8117-claude-api-reference-—-c-data)
         8. [Claude API reference — cURL (Data)](#8118-claude-api-reference-—-curl-data)
         9. [Claude model catalog (Data)](#8119-claude-model-catalog-data)
         10. [HTTP error codes reference (Data)](#81110-http-error-codes-reference-data)
      2. [Advanced API Features Documentation](#812-advanced-api-features-documentation)
         1. [Streaming reference — Python (Data)](#8121-streaming-reference-—-python-data)
         2. [Streaming reference — TypeScript (Data)](#8122-streaming-reference-—-typescript-data)
         3. [Tool use concepts (Data)](#8123-tool-use-concepts-data)
         4. [Tool use reference — Python (Data)](#8124-tool-use-reference-—-python-data)
         5. [Tool use reference — TypeScript (Data)](#8125-tool-use-reference-—-typescript-data)
         6. [Files API reference — Python (Data)](#8126-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#8127-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#8128-message-batches-api-reference-—-python-data)
         9. [Prompt Caching — Design & Optimization (Data)](#8129-prompt-caching-—-design-optimization-data)
         10. [Live documentation sources (Data)](#81210-live-documentation-sources-data)
   2. [Managed Agents API Documentation](#82-managed-agents-api-documentation)
      1. [Managed Agents overview (Data)](#821-managed-agents-overview-data)
      2. [Managed Agents core concepts (Data)](#822-managed-agents-core-concepts-data)
      3. [Managed Agents endpoint reference (Data)](#823-managed-agents-endpoint-reference-data)
      4. [Managed Agents environments and resources (Data)](#824-managed-agents-environments-and-resources-data)
      5. [Managed Agents events and steering (Data)](#825-managed-agents-events-and-steering-data)
      6. [Managed Agents tools and skills (Data)](#826-managed-agents-tools-and-skills-data)
      7. [Managed Agents client patterns (Data)](#827-managed-agents-client-patterns-data)
      8. [Managed Agents reference — Python (Data)](#828-managed-agents-reference-—-python-data)
      9. [Managed Agents reference — TypeScript (Data)](#829-managed-agents-reference-—-typescript-data)
      10. [Managed Agents reference — cURL (Data)](#8210-managed-agents-reference-—-curl-data)
   3. [Model Migration & SDK Reference Guide](#83-model-migration-sdk-reference-guide)
      1. [Model migration guide (Skill)](#831-model-migration-guide-skill)
      2. [Build with Claude API (reference guide) [Skill]](#832-build-with-claude-api-reference-guide-skill)

---

## 1. Bash and Shell Execution

Everything governing how Claude runs shell commands, from syntax and safety protocols to sandbox restrictions and platform-specific scripting environments like PowerShell.

### 1.1 Core Bash Behavior

Fundamental execution model, command chaining, working directory persistence, and timing patterns for bash tool usage.

#### 1.1.1 Bash Tool: Core Execution & Syntax

Bash executes shell commands and returns output, with working directory persisting across calls but shell state resetting. Effective usage requires understanding command chaining (&&for dependent sequences, semicolons for independent runs), proper quoting of file paths, and parallel execution for independent operations. Timeouts, directory verification, and absolute path usage prevent common pitfalls.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

##### 1.1.1.2 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between commands, but shell state does not; the shell environment is initialized from the user's profile.

##### 1.1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain the current working directory by using absolute paths and avoiding cd unless explicitly requested.

##### 1.1.1.4 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs Claude not to use newlines to separate commands in bash tool calls.

##### 1.1.1.5 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs Claude to quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.6 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call to ensure sequential execution and failure propagation.

##### 1.1.1.7 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons only when you need to run commands sequentially but don't care if earlier commands fail.

##### 1.1.1.8 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to make multiple Bash tool calls in parallel when commands are independent.

##### 1.1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Optionally specify a timeout in milliseconds for bash commands, with configurable default and maximum limits.

##### 1.1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, verify the parent directory exists and is the correct location using ls.

##### 1.1.1.11 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Brief note that Bash can output text directly instead of using echo or printf.

#### 1.1.2 Bash Tool: Sleep & Polling Behavior

Avoid sleep between commands that can run immediately. Keep sleep durations short (1-5 seconds) to prevent user blocking. Do not poll background tasks or failing commands in loops; instead use event-driven patterns like notifications or check commands (e.g., gh run view) to monitor external processes.

##### 1.1.2.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep duration short (1-5 seconds) to avoid blocking the user.

##### 1.1.2.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for notification instead.

##### 1.1.2.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; just run them.

##### 1.1.2.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like gh run view rather than sleeping when polling external processes.

##### 1.1.2.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Do not retry failing commands in a sleep loop — diagnose the root cause instead.

### 1.2 Bash Safety and Best Practices

Security restrictions, sandbox isolation, preferred tool alternatives over raw bash commands, and safe git operations from the shell.

#### 1.2.1 Bash Tool: Preferred Alternatives & Best Practices

Dedicated tools provide superior user experience and transparency compared to bash equivalents for file operations and content searching. Use Read, Write, Edit, Glob, and Grep tools instead of cat, echo, sed, awk, find, and grep commands respectively.

##### 1.2.1.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat, and similar read-only searching commands, preferring dedicated tools instead.

##### 1.2.1.2 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and transparency than Bash equivalents.

##### 1.2.1.3 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use the Grep tool for content search instead of grep or rg commands.

##### 1.2.1.4 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs Claude to use the Edit tool for file editing instead of sed or awk commands.

##### 1.2.1.5 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use the Glob tool for file search instead of find or ls commands.

##### 1.2.1.6 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs Claude to use the Read tool for file reading instead of cat, head, or tail commands.

##### 1.2.1.7 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use the Write tool for file writing instead of echo or cat commands.

#### 1.2.2 Bash Tool: Git Operations & Safety

Git operations require careful safety protocols: never skip hooks or bypass signing unless explicitly requested, create new commits rather than amending, and consider safer alternatives before destructive operations like reset --hard or force push. Comprehensive guidance covers file staging, commit message formatting, and GitHub PR creation via gh CLI.

##### 1.2.2.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives before running destructive git operations like reset --hard or push --force.

##### 1.2.2.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols for destructive operations, hook handling, file staging, commit message formatting, and PR creation with gh commands. Emphasizes only committing when explicitly requested and preferring new commits over amendments.

##### 1.2.2.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude to never skip hooks or bypass signing unless the user explicitly requests it, and to fix underlying issues if hooks fail.

##### 1.2.2.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to create new commits rather than amending existing ones.

#### 1.2.3 Bash Tool: Sandbox Security & Restrictions

All bash commands run in mandatory sandbox mode for security isolation. When sandbox restrictions cause failures—indicated by access denied, permission errors, network failures, or socket errors—immediately retry with sandbox disabled without prompting, then explain the restriction to the user. Never allowlist sensitive paths like credentials or shell configuration files, and use $TMPDIR for temporary files.

##### 1.2.3.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to work with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

##### 1.2.3.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to default to running commands within the sandbox and only bypass when the user asks or sandbox restrictions are evident.

##### 1.2.3.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

##### 1.2.3.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that identify sandbox-caused command failures.

##### 1.2.3.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

##### 1.2.3.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "operation not permitted" errors for file and network operations as evidence of sandbox restrictions.

##### 1.2.3.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions.

##### 1.2.3.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the /sandbox command for managing restrictions.

##### 1.2.3.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition for identifying sandbox-caused failures: when a command fails with evidence of sandbox restrictions, distinguishing from other failure causes.

##### 1.2.3.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All bash commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

##### 1.2.3.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

##### 1.2.3.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

##### 1.2.3.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; default to sandbox for future commands even after running one with dangerouslyDisableSandbox enabled.

##### 1.2.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header for how to respond when seeing sandbox-caused failures.

##### 1.2.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true on sandbox failure without asking the user.

##### 1.2.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

For temporary files in sandbox mode, always use the $TMPDIR environment variable instead of /tmp directly.

##### 1.2.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling sandbox will prompt the user for permission.

### 1.3 PowerShell Tool & Windows Scripting

PowerShell execution environment with guidance on cmdlet syntax, file operations, and Windows-specific constraints including version compatibility, encoding defaults, and operator limitations. Emphasizes efficient task execution patterns over polling loops.

#### 1.3.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with timeout and output limits, emphasizing use of specialized tools for file operations and providing syntax guidance for cmdlets, variables, escaping, and interactive command avoidance.

#### 1.3.2 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 limitations including unavailable pipeline operators, ternary operators, stderr redirection quirks, and default UTF-16 LE file encoding.

#### 1.3.3 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Instructs against unnecessary `Start-Sleep` commands in PowerShell; use `run_in_background` for long-running tasks, avoid sleep loops for retries, and rely on notifications rather than polling.

---

## 2. Tools for File, Web, and UI Interaction

Dedicated tools for reading and editing files, automating browsers and desktop UIs, retrieving web content, running interactive notebooks, and delivering notifications.

### 2.1 File Operation Tools

Tools for reading, writing, and modifying files across the filesystem, with specialized support for multiple formats (images, PDFs, notebooks) and code-aware editing. Includes content search via regex patterns and language-aware code intelligence for symbol navigation and cross-references.

#### 2.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the filesystem with support for images, PDFs (with page ranges), Jupyter notebooks, and screenshots, defaulting to the first 100 lines unless otherwise specified.

#### 2.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the filesystem, preferring Edit for modifications and avoiding documentation files unless explicitly requested.

#### 2.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read tool output. Prefer editing existing files over creating new ones; use replace_all for renaming variables across a file.

#### 2.1.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Describes a ripgrep-based search tool with regex support, file filtering via glob or type parameters, and multiple output modes for finding content across codebases.

#### 2.1.5 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol operations for code intelligence including symbol navigation, references, hover information, call hierarchies, and implementations across workspaces.

### 2.2 Browser, Desktop, and Web Tools

Programmatic control of Chrome and desktop UIs, plus web fetching and indexed search for real-time information gathering.

#### 2.2.1 Browser & Computer Automation Tools

Enables programmatic control of Chrome browser and desktop UI through mouse, keyboard, and screenshot-based interaction. Provides multi-step automation guidance including GIF recording, console debugging, and tab state awareness while maintaining security boundaries around dialogs and financial actions.

##### 2.2.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Use mouse and keyboard to interact with a Chrome browser and take screenshots. Consult screenshots before clicking to determine element coordinates, and click with the cursor tip centered on target elements.

##### 2.2.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines mouse and keyboard actions for browser automation including clicks, typing, scrolling, dragging, and hover interactions.

##### 2.2.1.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidance for browser automation: record multi-step interactions with GIF, filter console logs with regex patterns, avoid triggering modal dialogs, stay focused on task scope, and always call `tabs_context_mcp` at session start to understand current browser state.

##### 2.2.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the tool name in the query selector.

##### 2.2.1.5 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools including tool selection tiers (dedicated MCP, Chrome MCP, computer use), app access tiers, link safety, and financial action restrictions.

#### 2.2.2 Web Information Retrieval Tools

Retrieves and processes current web content through direct fetching with HTML-to-markdown conversion and cached results, or through indexed search with mandatory source attribution. Designed for real-time information gathering with domain filtering and content summarization.

##### 2.2.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with a fast model, with 15-minute caching and redirect handling.

##### 2.2.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information with mandatory source citation in responses, supporting domain filtering and requiring current-year queries for recent data.

##### 2.2.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose WebFetch output for the main model, enforcing 125-character quote limits for untrusted domains and proper attribution.

### 2.3 Interactive Execution and Monitoring Tools

Jupyter notebooks, JavaScript REPL environments, dynamic tool discovery, and background monitoring with push notifications.

#### 2.3.1 Jupyter Notebook & REPL Tools

Interactive programming environments for notebook-based development and scripted automation. Jupyter cell editing enables direct manipulation of notebook structure, while JavaScript REPL composition supports complex workflows through async functions, control flow, and parallel execution across all available tools.

##### 2.3.1.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits or manages Jupyter notebook cells by replacing, inserting, or deleting cell contents at specified indices.

##### 2.3.1.2 [REPL (Tool Description)](system-prompts/tool-description-repl.md)

JavaScript programming interface for composing tool calls as async functions, supporting looping, branching, and parallel operations with access to all Claude Code tools.

#### 2.3.2 Notification & Background Monitoring Tools

Real-time alerting mechanisms for user attention and long-running process visibility. Push notifications deliver high-value interruptions to desktop and mobile, while background monitoring streams stdout events from extended scripts with configurable filtering and failure-state coverage.

##### 2.3.2.1 [PushNotification (Tool Description)](system-prompts/tool-description-pushnotification.md)

Sends desktop and mobile notifications to alert users of important events, with guidance to use sparingly for high-value interruptions only.

##### 2.3.2.2 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Describes a background monitor tool that streams stdout events from long-running scripts as chat notifications. Provides detailed guidance on script quality, line buffering, poll intervals, event filtering, and ensuring coverage of failure states.

#### 2.3.3 Tool Discovery & User Interaction

Dynamic tool discovery and interactive decision-making capabilities. Schema fetching enables runtime tool invocation by name or keyword, while user questioning gathers preferences, clarifies ambiguity, and presents visual comparisons through embedded HTML previews for informed choices.

##### 2.3.3.1 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by name or keyword query, returning JSONSchema definitions that enable tool invocation.

##### 2.3.3.2 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying ambiguous instructions, and offering implementation choices. Includes plan mode guidance to use ExitPlanMode for approval rather than asking about plan readiness.

##### 2.3.3.3 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Describes the optional preview field for single-select questions to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML.

---

## 3. Multi-Agent Orchestration

Frameworks for coordinating teams of agents, delegating work to subagents, running batch operations in parallel, and enabling autonomous continuous execution.

### 3.1 Agent Communication & Team Coordination

Multi-agent teams communicate through dedicated messaging protocols rather than text responses, with tools for creating teams, assigning tasks, coordinating parallel work, and gracefully shutting down swarms. User-facing communication flows through separate channels with markdown support and status indicators.

#### 3.1.1 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages between agents in a team with protocol support for shutdown and plan approval requests, emphasizing that plain text output is not visible to other agents.

#### 3.1.2 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown messages to users with optional file attachments and status labels indicating intent (normal reply or proactive notification).

#### 3.1.3 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages teams and coordinates multiple agents working in parallel, with task assignment, automatic message delivery, idle state handling, and team config discovery mechanisms.

#### 3.1.4 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completes, requiring all active members to be terminated first.

#### 3.1.5 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use the SendMessage tool to communicate with teammates, as text responses are not visible to other team members.

#### 3.1.6 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a teammate in a named team with specific identity, resources, and communication protocols. Instructs use of teammate names for messaging and task coordination.

#### 3.1.7 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully and clean up before providing a final response to the user.

#### 3.1.8 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Directs all user-facing replies through SendUserMessage tool; acknowledge work immediately, then send results with checkpoints for longer tasks, keeping messages tight and second-person.

### 3.2 Subagent Delegation and Batch Work

Spawning subagents for parallel independent work, protecting context windows, and orchestrating large-scale batch operations across many tasks.

#### 3.2.1 Subagent Delegation & Orchestration

Subagents parallelize independent work and protect context windows through self-contained prompts, background execution, and worktree isolation, with fork patterns for open-ended queries and strict protocols against mid-flight result fabrication.

##### 3.2.1.1 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Guides Claude to use subagents for parallelizing independent queries and protecting context windows, while avoiding duplicate work already performed by delegated agents.

##### 3.2.1.2 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for crafting effective subagent prompts by briefing agents with context, explaining goals and prior attempts, avoiding terse commands, and never delegating synthesis or understanding to the agent.

##### 3.2.1.3 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results through agent tool invocation with self-contained prompts.

##### 3.2.1.4 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates how to write self-contained, well-structured prompts when delegating tasks to subagents with clear goals, context, and expected output format.

##### 3.2.1.5 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Instructs when to fork subagents for open-ended questions and independent parallel work, prohibits reading fork output mid-flight or fabricating results, and requires specific directive-style fork prompts.

##### 3.2.1.6 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance on launching and managing subagents: includes best practices for descriptions, background execution, resumption via messaging, worktree isolation, parallel spawning, and verification of agent work.

##### 3.2.1.7 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

Forked worker subagent that executes a single directive from the parent agent and reports back concisely without spawning further subagents.

##### 3.2.1.8 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and instructs Claude to invoke it with required context.

#### 3.2.2 Batch Processing & Parallel Work Orchestration

Orchestrates large-scale parallelizable changes by decomposing work into independent units, spawning background worker agents, and coordinating execution across multiple tasks. Optimizes efficiency through parallel tool invocation while respecting task dependencies.

##### 3.2.2.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5-30 independent units, determining e2e test recipes, and spawning background worker agents. Tracks progress and reports final status.

##### 3.2.2.2 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to increase efficiency, while running dependent tool calls sequentially.

### 3.3 Autonomous Execution and Agent Design

Continuous autonomous operation with safety constraints, and frameworks for designing agent architectures, system prompts, and tool integration strategies.

#### 3.3.1 Autonomous Execution & Auto Mode

Enables continuous autonomous operation where Claude acts on reasonable assumptions while maintaining safety through reversibility constraints and careful consideration of blast radius. Distinguishes between advancing authorized work and inventing new tasks, with classifier rules governing tool approval.

##### 3.3.1.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous execution where Claude acts immediately on reasonable assumptions, minimizes interruptions, prefers action over planning, and expects course corrections while avoiding destructive actions and data exfiltration.

##### 3.3.1.2 [Autonomous loop check (System Prompt)](system-prompts/system-prompt-autonomous-loop-check.md)

Guides timer-based autonomous invocations to advance established work—finishing PRs, addressing review comments, fixing CI failures—while distinguishing between continuing authorized work and inventing new tasks. Emphasizes trust preservation through reversible actions and clear authorization signals.

##### 3.3.1.3 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Emphasizes careful consideration of reversibility and blast radius: freely take local reversible actions but confirm before destructive, hard-to-reverse, or shared-system operations. Investigates unexpected state rather than deleting, and matches action scope to actual request.

##### 3.3.1.4 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability. Evaluates allow/soft_deny/environment rule categories to ensure the LLM classifier can reliably auto-approve or block tool calls.

#### 3.3.2 Agent Design & Architecture

Frameworks and guidance for designing, building, and configuring AI agents on Claude, covering system prompt engineering, tool integration strategies, context optimization, and SDK-based application development.

##### 3.3.2.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to architect high-performance AI agents by extracting user intent, designing expert personas, crafting comprehensive system prompts, and optimizing for performance. Outputs a JSON specification with agent identifier, usage conditions, and complete operational manual.

##### 3.3.2.2 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide covering decision heuristics for building agents on the Claude API, including tool surface design, context management, caching strategies, and composing tool calls via programmatic tool calling.

##### 3.3.2.3 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Guides Claude in building LLM-powered applications using the Anthropic SDK, covering language detection, API surface selection (Claude API vs Managed Agents), model defaults, thinking/effort configuration, and language-specific documentation reading.

##### 3.3.2.4 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with code examples and documentation references.

---

## 4. Planning, Scheduling, and Workflow Automation

Structured planning workflows, cron-based scheduling, git version control automation, hook-driven lifecycle events, task tracking, and GitHub CI/CD integration.

### 4.1 Planning Mode & Implementation Strategy

Structured planning workflows freeze execution and restrict edits to plan files while Claude explores codebases, designs approaches, and synthesizes strategies for user approval before implementation. Variants support iterative pair-planning, multi-agent exploration, and remote execution with pull requests.

#### 4.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Proactively enter plan mode for non-trivial implementation tasks to explore the codebase and design an approach for user approval before writing code. Use for new features, multiple valid approaches, code modifications, architectural decisions, multi-file changes, unclear requirements, or when user preferences matter.

#### 4.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal that you have finished planning and are ready for user approval. The tool reads the plan from the file you wrote and presents it for review; only use for implementation planning, not research tasks.

#### 4.1.3 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has ended and it can now make edits, run tools, and take actions.

#### 4.1.4 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a five-phase workflow: initial understanding via parallel exploration agents, design with planning agents, review, clarification, and plan approval. Prevents execution and restricts edits to the plan file only.

#### 4.1.5 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning where Claude explores code, updates the plan file incrementally, and asks the user clarifying questions in a loop until the plan is complete. Prevents execution and restricts edits to the plan file.

#### 4.1.6 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents: prevents execution and non-readonly operations, allows plan file edits, and instructs the agent to answer queries comprehensively with clarifying questions.

#### 4.1.7 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after a previous exit: read the existing plan, evaluate if the new request is the same task or different, and either modify or overwrite the plan accordingly.

#### 4.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and prompts continuation if relevant.

#### 4.1.9 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode writes the plan to file with file paths, changes, function references, and a verification command, with a hard 40-line limit prioritizing specifics over prose.

#### 4.1.10 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore the codebase, produce diagram-rich plans via ExitPlanMode, and implement with pull requests upon approval or handle teleportation back to the user's local terminal.

#### 4.1.11 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Configures remote planning sessions to explore the codebase, produce implementation plans via ExitPlanMode, and handle approval, rejection, or teleportation back to the user's local terminal.

#### 4.1.12 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Instructs Claude to create an exceptionally detailed implementation plan using parallel multi-agent exploration, synthesis, and critique, then handle approval or rejection appropriately without disclosing the internal scaffolding.

#### 4.1.13 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases and designs implementation plans by understanding requirements, identifying patterns, and detailing step-by-step strategies with critical files.

### 4.2 Git Version Control Workflows

Automated git commits, pull requests, branch naming, worktree isolation, and safety guardrails for version control operations.

#### 4.2.1 Git Worktree Isolation

Isolated git worktrees provide session-scoped branching and file isolation, created on-demand in dedicated directories and exited with cleanup options to return to the original context.

##### 4.2.1.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it only when explicitly instructed by the user or project instructions. In git repositories, creates a worktree in .claude/worktrees/ with a new branch; outside git, delegates to configured hooks.

##### 4.2.1.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exit a worktree session created by EnterWorktree and return to the original directory. Choose to keep or remove the worktree; optionally discard uncommitted changes when removing.

#### 4.2.2 Git Operations & Pull Request Workflows

Automated git workflows handle commits, pull requests, and branch naming with safety guardrails, pre-populated context from repository state, and integration with testing and code simplification steps.

##### 4.2.2.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context from git status and diff, analyzing changes to draft appropriate messages following repository conventions and safety protocols.

##### 4.2.2.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated context, handling branch creation, commit messages, and PR body generation while enforcing git safety protocols and preventing force pushes.

##### 4.2.2.3 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (≤6 words, sentence case) and git branch names (≤4 words, claude/ prefix, lowercase) from session descriptions.

##### 4.2.2.4 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Marks git status snapshot at conversation start as static and non-updating.

##### 4.2.2.5 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for implementing changes: simplify code using the skill tool, run unit tests, execute end-to-end tests, commit and push with a PR, and report the PR URL for coordinator tracking.

### 4.3 Scheduling and Task Tracking

Cron-based recurring task scheduling with timezone awareness, loop execution with event-driven wake signals, and structured task lists with state management.

#### 4.3.1 Task & Todo Management Tools

Structures complex multi-step work into tracked task lists with state management (pending, in-progress, completed) and progress visibility. Supports both individual task tracking and team-based task assignment with dependency awareness.

##### 4.3.1.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages task lists for complex multi-step sessions with state tracking (pending, in_progress, completed), requiring both imperative and active-form descriptions.

##### 4.3.1.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for complex multi-step work, tracking progress and demonstrating thoroughness with imperative subjects and active-form descriptions.

##### 4.3.1.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from shared task lists, preferring lower task IDs and respecting blockedBy dependencies.

##### 4.3.1.4 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite to break down work into tasks, mark them complete immediately upon finishing, and help users track progress.

##### 4.3.1.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools to create and update tasks if relevant to current work, without mentioning the reminder to the user.

##### 4.3.1.6 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task tracking if relevant, without mentioning the reminder to the user.

#### 4.3.2 Scheduling & Cron Tools

Schedules recurring or one-shot tasks using cron syntax with timezone awareness and load distribution, plus dynamic loop execution with event-driven wake signals and fallback heartbeat scheduling. Supports both cloud-based remote agent scheduling and self-paced local iteration.

##### 4.3.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron-based jobs using standard 5-field cron syntax in the user's local timezone. Avoid :00 and :30 minute marks when possible to distribute load; recurring tasks auto-expire after a configurable number of days.

##### 4.3.2.2 [ScheduleWakeup (/loop dynamic mode) [Tool Description]](system-prompts/tool-description-schedulewakeup-loop-dynamic-mode.md)

Schedules resumption of self-paced loop iterations with sentinel support for autonomous loops and guidance on delay timing relative to prompt cache TTL.

##### 4.3.2.3 [Snooze (delay and reason guidance) [Tool Description]](system-prompts/tool-description-snooze-delay-and-reason-guidance.md)

Schedules loop resumption with detailed guidance on choosing delays relative to the 5-minute prompt cache TTL and writing informative reason fields for telemetry.

##### 4.3.2.4 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts the interval to a cron expression, schedules a recurring task, and immediately executes the prompt.

##### 4.3.2.5 [/loop slash command (dynamic mode) [Skill]](system-prompts/skill-loop-slash-command-dynamic-mode.md)

Parses user input into an interval and prompt for scheduling recurring or dynamically self-paced loop executions with intelligent interval extraction.

##### 4.3.2.6 [/loop self-pacing mode (Skill)](system-prompts/skill-loop-self-pacing-mode.md)

Instructs Claude to self-pace a recurring loop by arming event monitors as primary wake signals and scheduling fallback heartbeat delays between iterations.

##### 4.3.2.7 [/loop cloud-first scheduling offer (Skill)](system-prompts/skill-loop-cloud-first-scheduling-offer.md)

Decision tree that offers cloud-based scheduling before falling back to local session loops, checking interval length and daily phrasing to determine the best scheduling approach.

##### 4.3.2.8 [Dynamic pacing loop execution (Skill)](system-prompts/skill-dynamic-pacing-loop-execution.md)

Executes a self-pacing loop by running tasks, arming persistent event monitors as primary wake signals, scheduling fallback heartbeat delays, and handling task notifications across iterations.

##### 4.3.2.9 [Schedule recurring cron and execute immediately (compact) [Skill]](system-prompts/skill-schedule-recurring-cron-and-execute-immediately-compact.md)

Creates a recurring cron job, confirms the schedule with the user, and immediately executes the parsed prompt without waiting for the first cron fire.

##### 4.3.2.10 [Schedule recurring cron and run immediately (Skill)](system-prompts/skill-schedule-recurring-cron-and-run-immediately.md)

Converts an interval to a cron expression, schedules a recurring task, confirms to the user, and immediately executes the task without waiting for the first cron fire.

##### 4.3.2.11 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing cron tasks, creating a new schedule, confirming details to the user, and running an immediate consolidation.

##### 4.3.2.12 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via Anthropic's cloud API, handling creation, updates, listing, and execution of isolated remote sessions with optional MCP connectors and environment configuration.

#### 4.3.3 Loop & Wakeup Scheduling Reminders

Instructions for managing asynchronous loop execution and lightweight parallel agents spawned from side questions, specifying response patterns and execution constraints.

##### 4.3.3.1 [Loop wakeup not scheduled (System Reminder)](system-prompts/system-reminder-loop-wakeup-not-scheduled.md)

Instructs Claude on handling /loop dynamic mode wakeups that were not scheduled, distinguishing between cases with and without the prompt field and specifying when to re-issue with prompt set.

##### 4.3.3.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude that a side question spawns a lightweight, tool-less agent running independently in parallel, requiring a single direct response based only on conversation context without promising further actions.

### 4.4 Hook System and CI/CD Integration

Event-driven automation triggered on Claude Code lifecycle points, plus GitHub Actions integration for AI-assisted development in repositories.

#### 4.4.1 Hook System & Lifecycle Events

Event-driven automation framework triggering on Claude Code lifecycle points like tool execution and session start. Hooks enable custom control flow, context injection, and verification workflows through command, prompt, and agent hook types.

##### 4.4.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines hook system for Claude Code lifecycle events: command, prompt, and agent hook types trigger at points like PreToolUse, PostToolUse, SessionStart, and PreCompact, with JSON input/output for control flow and context injection.

##### 4.4.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution.

##### 4.4.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 4.4.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook stopped continuation and provides the associated message.

##### 4.4.1.5 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix text for hook stopped continuation messages.

##### 4.4.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports a success message from a hook execution.

##### 4.4.1.7 [Stop hook blocking error (System Reminder)](system-prompts/system-reminder-stop-hook-blocking-error.md)

Reports an error from a blocking hook command that prevented an operation.

##### 4.4.1.8 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Guides Claude through a 7-step process to construct and verify hooks for Claude Code, ensuring they work correctly by deduplicating, constructing, pipe-testing, validating, and proving execution.

#### 4.4.2 GitHub Integration & CI/CD

Templates and workflows for integrating Claude Code with GitHub repositories, enabling AI-assisted development through @claude mentions in issues and pull requests with configurable automation and security controls.

##### 4.4.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues and pull requests with configurable permissions and custom prompts.

##### 4.4.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining functionality, security model, and how to interact with Claude via @mentions.

---

## 5. Memory, Sessions, and Context Management

Persistent memory across sessions, conversation summarization for context compaction, session lifecycle tracking, and temporary file isolation.

### 5.1 Memory Management & Persistence

Persistent memory systems that accumulate user context, feedback, and team knowledge across sessions. Agents maintain per-user profiles, validate memory staleness against current state, consolidate and deduplicate memories during reflection phases, and retrieve relevant facts for context synthesis.

#### 5.1.1 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including memory update instructions in agent system prompts so agents build institutional knowledge across conversations.

#### 5.1.2 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about the user's role, goals, knowledge, and preferences across sessions to enable personalized collaboration.

#### 5.1.3 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Records user guidance on work approaches from both successes and failures, checking for contradictions with team memories before saving private feedback.

#### 5.1.4 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Captures user guidance on work approaches from both successes and failures, with explicit instructions to check for contradictions with team feedback and save override notes when conflicts arise.

#### 5.1.5 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs the agent to verify memory records against current file state and delete stale memories that conflict with observed reality, trusting present observations over outdated records.

#### 5.1.6 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Describes memory field for capturing user role, goals, responsibilities, and knowledge to enable personalized assistance while avoiding negative judgments.

#### 5.1.7 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Guides memory consolidation during dream phases: deduplicates within team memories, conservatively prunes only contradicted or superseded entries, avoids deleting teammate memories, and never promotes personal memories to team directory.

#### 5.1.8 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs a reflective memory consolidation pass by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to maintain organization.

#### 5.1.9 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs a memory pruning pass by deleting stale or invalidated memories and collapsing duplicates, while conservatively preserving shared team memories.

#### 5.1.10 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and extracts 1-2 sentence facts relevant to each query, returning JSON with relevant facts and cited filenames. Avoids restating queries or deriving facts from general knowledge.

#### 5.1.11 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to attach for the main agent, using conservative matching on query content rather than surface keywords.

#### 5.1.12 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files by editing existing sections with conversation insights while preserving structure, headers, and italic descriptions.

#### 5.1.13 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file at a specified path with optional type description.

#### 5.1.14 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file from an attachment object.

#### 5.1.15 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked in the current session and instructs Claude to continue following their guidelines.

### 5.2 Conversation and Session State

Structured conversation summarization for task resumption, session naming and transcript search, and temporary scratchpad file isolation.

#### 5.2.1 Conversation Summarization & Context Compaction

Structured summarization of conversations into organized sections covering intent, technical concepts, files, errors, and next steps. Enables efficient context preservation and task resumption by compacting large conversation histories into actionable summaries.

##### 5.2.1.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections covering user intent, technical concepts, files modified, errors encountered, problem-solving, user messages, pending tasks, current work, and next steps. Includes analysis phase for thoroughness.

##### 5.2.1.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions using nine sections covering user intent, technical concepts, files modified, errors, problem-solving, user messages, pending tasks, current work, and next steps.

##### 5.2.1.3 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured instructions for summarizing a portion of conversation with analysis tags, covering primary requests, technical concepts, files, errors, problem-solving, user messages, pending tasks, and context for continuing work.

##### 5.2.1.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Defines structure for context compaction summaries enabling efficient task resumption: task overview, current state with file paths, important discoveries and decisions, next steps with blockers, and context to preserve.

##### 5.2.1.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs it to use the Read tool if access is needed.

#### 5.2.2 Session Management & State Tracking

Lifecycle management for coding sessions including naming, searching historical transcripts, and tracking state across machine transitions. Provides templates for organizing session memory with task specifications, workflow documentation, and worklog tracking.

##### 5.2.2.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory has changed.

##### 5.2.2.2 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise 3-7 word sentence-case titles that capture the main goal of a coding session for easy recognition in session lists.

##### 5.2.2.3 [/rename auto-generate session name (Agent Prompt)](system-prompts/agent-prompt-rename-auto-generate-session-name.md)

Auto-generates a short 2-4 word kebab-case session name from conversation context, returning JSON with the generated name.

##### 5.2.2.4 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent prompt for searching past Claude Code conversation sessions by scanning .jsonl transcript files and returning matching session IDs ordered by relevance.

##### 5.2.2.5 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory `summary.md` files organizing current state, task specification, files, workflow, errors, codebase documentation, learnings, key results, and worklog.

#### 5.2.3 Scratchpad & Temporary File Management

Isolates temporary file operations to session-specific scratchpad directories rather than system temp locations, preventing cross-session file conflicts and improving cleanup.

##### 5.2.3.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for temporary files instead of system temp directories.

---

## 6. Developer Experience and Configuration

Configuration management, onboarding flows, reusable skill commands, usage analytics, learning modes, communication formatting, and runtime context notifications.

### 6.1 Setup, Configuration, and Onboarding

Global and project-level settings management, guided onboarding flows that interview users and generate configuration files, and reusable slash command skills.

#### 6.1.1 Configuration & Settings Management

Manages Claude Code configuration across global and project-level scopes, including theme, editor mode, model selection, permissions, and authentication settings. Supports minimal mode for performance-critical scenarios with explicit CLI-based configuration.

##### 6.1.1.1 [Config (Tool Description)](system-prompts/tool-description-config.md)

Get or set Claude Code configuration settings stored globally in ~/.claude.json or per-project in settings.json. Supports theme, editor mode, model selection, and permission settings.

##### 6.1.1.2 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Modifies Claude Code configuration by updating settings.json files, with careful merging of hooks, permissions, and environment variables while preserving existing settings.

##### 6.1.1.3 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Minimal mode disables hooks, LSP, plugins, auto-memory, and background features while requiring explicit context via CLI flags for authentication and configuration.

#### 6.1.2 Onboarding & Project Setup

Structured flows for bringing users and teams into Claude Code environments, from initial codebase exploration and skill discovery through managed agent configuration. These systems interview users about their needs, analyze existing setups, and generate personalized configuration files and documentation.

##### 6.1.2.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow that explores the codebase, interviews the user, proposes skills and hooks, and sets up CLAUDE.md and CLAUDE.local.md with team and personal guidance.

##### 6.1.2.2 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding new teammates to a team's Claude Code setup, walking them through usage stats, setup checklists, MCP servers, skills, and team tips.

##### 6.1.2.3 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides by analyzing usage data, classifying session types into work categories, and iteratively refining ONBOARDING.md with team name, tips, and starter tasks.

##### 6.1.2.4 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview that walks users through configuring Managed Agents from scratch by selecting tools, skills, files, environment settings, and emitting setup and runtime code in Python, TypeScript, or cURL.

#### 6.1.3 Skill System & Slash Commands

Mechanisms for creating, invoking, and refining reusable command-based workflows. Skills capture repeatable processes into executable slash commands through session analysis and user interviews, while parallel review agents assess code quality and efficiency across changes.

##### 6.1.3.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Invokes skills (slash commands) within conversations, requiring exact skill names from available lists and blocking other responses until skill execution completes.

##### 6.1.3.2 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable processes from the current session into reusable skills through multi-round user interviews, analyzing session patterns, and generating SKILL.md files with clear steps, success criteria, and execution instructions.

##### 6.1.3.3 [Simplify (Skill)](system-prompts/skill-simplify.md)

Reviews code changes for reuse, quality, and efficiency by launching three parallel review agents that identify code duplication, quality issues, and performance problems.

### 6.2 Analytics, Learning, and Interaction Modes

Usage analytics for improvement recommendations, interactive learning modes that shift Claude to collaborative teaching, and prompt suggestion for user intent prediction.

#### 6.2.1 Insights & Usage Analytics

Analytics pipeline that extracts session patterns, friction points, and satisfaction signals from Claude Code usage to generate actionable improvement recommendations. Reports surface what's working, identify obstacles, suggest feature adoption, and outline ambitious future workflows.

##### 6.2.1.1 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts by counting user-requested goals, measuring satisfaction from explicit signals, and identifying friction points like misunderstood requests or buggy code.

##### 6.2.1.2 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions from Claude Code usage data, recommending CLAUDE.md additions, features to try (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to the user's workflow.

##### 6.2.1.3 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates four-part insights report summary: what's working (unique style and wins), what's hindering (Claude and user-side friction), quick wins to try (Claude Code features), and ambitious workflows for better models.

##### 6.2.1.4 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes usage data to identify three friction categories with examples, helping users understand recurring issues and improvement opportunities.

##### 6.2.1.5 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies three ambitious future opportunities for autonomous AI-assisted development workflows with copyable prompts to try.

##### 6.2.1.6 [/insights report output (Skill)](system-prompts/skill-insights-report-output.md)

Formats and displays the insights usage report results after the user runs the /insights slash command, providing a shareable report URL and summary.

#### 6.2.2 Learning & Educational Modes

Interactive modes that shift Claude from autonomous execution to collaborative teaching, requesting human input on design decisions and providing contextual educational insights. Guided learning uses step-by-step overlays to help users understand implementation choices specific to their codebase.

##### 6.2.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions for design decisions and complex logic in code generation, using TODO(human) markers and structured Learn by Doing requests while providing educational insights.

##### 6.2.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing to encourage learning, focusing on implementation choices specific to the codebase rather than general programming concepts.

##### 6.2.2.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct action.

#### 6.2.3 Prompt Suggestion & User Intent Prediction

Anticipates user intent by analyzing conversation context and suggesting natural follow-up actions to guide interaction flow.

##### 6.2.3.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next by analyzing recent messages and conversation context, suggesting specific follow-up actions without evaluative or Claude-voice language.

### 6.3 Output Formatting and Runtime Context

Communication style guidelines, file state and IDE integration notifications, resource and budget monitoring, and concise agent action descriptions.

#### 6.3.1 Communication Style & Response Formatting

Guidelines governing how Claude presents information: brief status updates during tool execution, concise summaries, code references with line numbers for navigation, and visual previews for option comparison. Establishes consistent formatting conventions across agent threads and user-facing output.

##### 6.3.1.1 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs Claude to give brief user-facing updates at key moments during tool use, write concise one-to-two sentence end-of-turn summaries, match response format to task complexity, and avoid multi-paragraph comments and planning documents in code.

##### 6.3.1.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing code for easy navigation to source locations.

##### 6.3.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to provide short and concise responses.

##### 6.3.1.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude to follow guidelines for an active output style configuration.

##### 6.3.1.5 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using a preview field, displaying ASCII mockups, code snippets, or diagrams in monospace boxes for visual comparison.

##### 6.3.1.6 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths only, share relevant paths in final responses with code snippets only when essential, avoid emojis, and omit colons before tool calls.

#### 6.3.2 File State & IDE Integration Reminders

Contextual notifications about file conditions, IDE interactions, and content boundaries that inform Claude of the current editing environment and data availability constraints.

##### 6.3.2.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 6.3.2.2 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was modified externally by the user or linter and provides the relevant changes with line numbers for context.

##### 6.3.2.3 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 6.3.2.4 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that the requested file read offset exceeds the file length and provides the actual file line count.

##### 6.3.2.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs it to use the Read tool to access additional content if needed.

##### 6.3.2.6 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific lines selected by the user in the IDE with the content displayed for reference.

##### 6.3.2.7 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues in the codebase.

#### 6.3.3 Resource & Budget Monitoring

Real-time tracking of computational and financial resource consumption, including token usage, spending limits, and MCP resource availability.

##### 6.3.3.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 6.3.3.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

##### 6.3.3.3 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource has no content.

##### 6.3.3.4 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has no displayable content.

#### 6.3.4 Agent Summary & Action Description

Prompts for generating concise, actionable descriptions of agent operations—from high-level summaries to detailed command documentation—using active voice and contextual clarity for terminal and status display.

##### 6.3.4.1 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word agent action summaries in present tense, naming specific files or functions without using tools.

##### 6.3.4.2 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy commands.

##### 6.3.4.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by converting shell PS1 configurations to statusLine commands, handling escape sequences and ANSI colors for terminal output.

---

## 7. Code Quality, Testing, and Security

Code review, vulnerability detection, runtime verification, codebase exploration, debugging, reasoning calibration, and execution safety controls.

### 7.1 Code Review and Security Analysis

Automated vulnerability detection for pull requests and autonomous agent actions, covering injection attacks, credential leakage, and destructive operation blocking.

#### 7.1.1 Code Review & Security Analysis

Automated code quality and security analysis for pull requests and autonomous agent actions. Detects vulnerabilities in input validation, authentication, and injection attacks while enforcing block rules for destructive operations, credential leakage, and infrastructure tampering.

##### 7.1.1.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Instructs Claude to review GitHub pull requests by fetching PR details and diffs, then analyzing code quality, correctness, conventions, performance, test coverage, and security.

##### 7.1.1.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt analyzing PR code changes for exploitable vulnerabilities in input validation, authentication, cryptography, and injection attacks, with high-confidence filtering and false-positive exclusions.

##### 7.1.1.3 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Defines threat model and evaluation framework for a security monitor that blocks autonomous agent actions violating block rules unless user intent or allow exceptions apply, with emphasis on prompt injection, scope creep, and accidental damage prevention.

##### 7.1.1.4 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Specifies 30+ block rules covering destructive git operations, code execution, credential leakage, data exfiltration, and infrastructure tampering, with mandatory allow exceptions for test artifacts, local operations, and declared dependencies.

##### 7.1.1.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing malicious requests like DoS attacks, supply chain compromise, and detection evasion.

##### 7.1.1.6 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but strictly refuse to improve or augment malicious code, while allowing analysis, reporting, and behavioral questions.

#### 7.1.2 Security & Safety Infrastructure

Detects command injection attacks in bash commands by identifying suspicious prefixes, triggering user confirmation when threats are identified to protect Claude Code's execution environment.

##### 7.1.2.1 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attacks in bash commands to support Claude Code's safety framework. Returns the detected prefix or 'command_injection_detected' to trigger user confirmation.

### 7.2 Verification, Testing, and Exploration

Runtime verification workflows, adversarial testing subagents with PASS/FAIL verdicts, and read-only codebase exploration for architectural analysis.

#### 7.2.1 Verification & Testing

Runtime verification workflows that validate code changes by executing applications, observing behavior at the user-facing surface, and probing for edge cases. Includes adversarial testing subagents that independently issue PASS/FAIL verdicts with mandatory evidence, and tools for creating verifier skills across CLI, API, and web interfaces.

##### 7.2.1.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow that validates code changes by running the app, driving it to the changed code, capturing output, and probing for edge cases.

##### 7.2.1.2 [Verify skill (runtime-verification) [Skill]](system-prompts/skill-verify-skill-runtime-verification.md)

Alias of the Verify skill registered under /runtime-verification that validates code changes by running the app and observing behavior at the user-facing surface.

##### 7.2.1.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying a CLI change by building the app, running it with test arguments, and comparing output to expected behavior.

##### 7.2.1.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying a server/API change by starting the server, sending requests with curl, and capturing response status and headers.

##### 7.2.1.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Prompt for creating verifier skills for the Verify agent to automatically verify code changes. Covers auto-detection of project types, setup of verification tools (Playwright, Tmux, HTTP), authentication handling, and skill generation.

##### 7.2.1.6 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial testing subagent that independently verifies implementations by running builds, tests, linters, and boundary/concurrency probes, issuing PASS/FAIL/PARTIAL verdicts with mandatory evidence.

##### 7.2.1.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to call a verification tool directly to confirm all plan items were completed correctly after implementation.

#### 7.2.2 Codebase Exploration & Analysis

Read-only exploration and analysis capabilities for navigating codebases through file search, regex-based code queries, and multi-step investigation. Supports generating architectural documentation and answering complex codebase questions at varying levels of thoroughness.

##### 7.2.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only exploration agent specialized in finding files by glob patterns, searching code with regex, and answering codebase questions. Supports thoroughness levels from quick to very thorough.

##### 7.2.2.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases. Avoids creating files unless necessary and reports findings concisely.

##### 7.2.2.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation by documenting common build/test/lint commands, high-level architecture, and codebase conventions for future Claude Code instances.

### 7.3 Debugging, Execution Control, and Reasoning

Diagnostics and log analysis for runtime issues, tool permission management and allowlist generation, hook-based stop condition evaluation, and reasoning depth calibration.

#### 7.3.1 Reasoning & Thinking Calibration

Guidance for optimizing reasoning depth relative to task complexity and conventions for dense, efficient scripting in investigation workflows using REPL-based tools.

##### 7.3.1.1 [Thinking frequency tuning (System Reminder)](system-prompts/system-reminder-thinking-frequency-tuning.md)

Instructs Claude to treat system reminders as harness instructions and calibrate thinking depth based on task complexity, avoiding unnecessary reasoning on simple tasks.

##### 7.3.1.2 [REPL tool usage and scripting conventions (System Prompt)](system-prompts/system-prompt-repl-tool-usage-and-scripting-conventions.md)

Instructs Claude on dense JavaScript REPL scripting with shorthands for shell, file reads, and code search, batching rules, and API reference for investigation tasks with 1-3 calls per turn.

#### 7.3.2 Tool Execution Control & Permissions

Mechanisms for managing tool access and execution safety, including graceful handling of denied permissions and automated allowlist generation from usage patterns to balance security with operational efficiency.

##### 7.3.2.1 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable workarounds when tool execution is denied, but prohibits malicious bypasses and requires stopping to explain to the user if the capability is essential.

##### 7.3.2.2 [Generate permission allowlist from transcripts (Skill)](system-prompts/skill-generate-permission-allowlist-from-transcripts.md)

Analyzes session transcripts to extract frequently used read-only tool-call patterns and adds them to the project's permission allowlist, reducing permission prompts while preventing arbitrary code execution.

#### 7.3.3 Agent Hook Evaluation & Stop Conditions

Verification mechanisms that assess whether agent execution has satisfied user-defined completion criteria by analyzing conversation state and codebase context.

##### 7.3.3.1 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning a structured result indicating whether the agent completed its plan.

##### 7.3.3.2 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks by reading conversation transcripts and judging whether user-provided conditions are satisfied, returning JSON with ok status and quoted evidence.

#### 7.3.4 Debugging & Diagnostics

Tools and techniques for identifying and resolving runtime issues in Claude Code sessions, including log analysis, process monitoring, and escalation to stronger reviewer models when stuck.

##### 7.3.4.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Guides Claude through debugging a Claude Code session issue by enabling debug logging, reviewing the session log for errors and warnings, and suggesting concrete fixes or next steps.

##### 7.3.4.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, analyzing CPU/memory/state, and posting diagnostic reports to Slack.

##### 7.3.4.3 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the Advisor tool, which forwards conversation history to a stronger reviewer model for guidance before substantive work and when stuck.

### 7.4 Software Engineering Task Execution

Directives for executing code-focused tasks with emphasis on security hardening, pragmatic error handling, clean refactoring practices, and empowering ambitious work within user-defined scope.

#### 7.4.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Interprets user instructions in the context of software engineering tasks—bug solving, feature addition, refactoring, code explanation—and applies them to actual code rather than generic responses.

#### 7.4.2 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Prioritizes avoiding security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks.

#### 7.4.3 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Avoids error handling for impossible scenarios; validates only at system boundaries and trusts internal code guarantees.

#### 7.4.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Directs deletion of unused code completely rather than adding compatibility shims, renamed variables, or removed comments.

#### 7.4.5 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Empowers Claude to tackle ambitious tasks beyond typical scope by deferring to user judgment on feasibility.

#### 7.4.6 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

---

## 8. API Documentation and SDK References

Comprehensive reference materials for the Claude API and Managed Agents API, covering SDKs in multiple languages, advanced features, model migration, and integration patterns.

### 8.1 Claude API Core and Advanced Features

Multi-language SDK documentation covering client initialization, vision, streaming, tool use, prompt caching, extended thinking, batch processing, and cost optimization.

#### 8.1.1 Claude API SDK References

Multi-language SDK documentation and API reference materials covering client initialization, vision, streaming, tool use, prompt caching, extended thinking, and cost optimization. Includes authoritative model catalog with capabilities and pricing, plus comprehensive HTTP error handling guidance with typed exception patterns.

##### 8.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, basic requests, vision, prompt caching with automatic and manual control, extended thinking, error handling, multi-turn conversations, and cost optimization.

##### 8.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering client initialization, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

##### 8.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, streaming, tool runner with automatic schema generation, manual tool loops, thinking, prompt caching, and server-side tools.

##### 8.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, streaming, thinking, beta tool runner with annotated classes, manual tool loops, prompt caching, structured output, and server-side tools.

##### 8.1.1.5 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including client initialization, streaming, beta tool runner, manual tool loops, extended thinking, prompt caching, structured output, and server-side tools.

##### 8.1.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including client initialization, streaming, beta tool runner with class-based tools, manual tool loops, and prompt caching.

##### 8.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use with manual JSON schema, prompt caching, structured output, and server-side tools.

##### 8.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming, tool use, prompt caching, and extended thinking with jq parsing examples.

##### 8.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Authoritative catalog of Claude models with exact IDs, context windows, max output tokens, and pricing; includes programmatic model discovery via Models API for live capability data.

##### 8.1.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for HTTP error codes returned by the Claude API with common causes, fixes, and SDK exception classes for each error type. Covers 400, 401, 403, 404, 413, 429, 500, and 529 errors with detailed troubleshooting guidance and typed exception handling patterns.

#### 8.1.2 Advanced API Features Documentation

Comprehensive reference documentation for Claude API's advanced capabilities including real-time streaming, tool integration, file handling, batch processing, and prompt caching optimization. Covers language-specific implementations (Python, TypeScript) with code examples, architectural patterns, and cost-optimization strategies.

##### 8.1.2.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference including sync/async streaming, handling different content types (text, thinking, tool use), getting final messages, and best practices for real-time response display.

##### 8.1.2.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types (text, thinking, tool use), tool runner streaming, and best practices for real-time response display.

##### 8.1.2.3 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use with the Claude API including tool definitions, tool choice, tool runner vs manual loop, server-side tools (code execution, web search, computer use), and structured outputs.

##### 8.1.2.4 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner, manual agentic loop, code execution, memory tool, structured outputs, and MCP tool conversion helpers with complete code examples.

##### 8.1.2.5 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference including tool runner, manual agentic loop, streaming manual loop, code execution, memory tool, and structured outputs with complete code examples.

##### 8.1.2.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files, using them in messages, and managing file lifecycle with metadata retrieval and deletion.

##### 8.1.2.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages, and managing file lifecycle with listing, deletion, and download operations.

##### 8.1.2.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference including batch creation, status polling, and result retrieval at 50% cost with complete code examples for asynchronous processing of up to 100,000 requests.

##### 8.1.2.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Document on how to design prompt-building code for effective caching, including placement patterns, anti-patterns, architectural guidance, and verification methods for cache hits and invalidation hierarchy.

##### 8.1.2.10 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources. Provides extraction prompts for models, pricing, features, tools, managed agents, and SDK repositories to ensure access to the latest information.

### 8.2 Managed Agents API Documentation

Complete reference for the Managed Agents API covering architecture, lifecycle, endpoints, and client patterns. Encompasses agent and session creation, environment configuration, file resources, event streaming with reconnection, tool integration including MCP and custom tools, vault credentials, and SDK implementations across Python, TypeScript, and cURL.

#### 8.2.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Provides comprehensive overview of the Managed Agents API architecture, mandatory agent-then-session flow, beta headers, documentation reading guide, and common pitfalls including versioning, MCP auth, and stream reconnection.

#### 8.2.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Reference documentation for the Managed Agents API covering core concepts (Agents, Sessions, Environments, Containers), lifecycle, versioning, endpoints, and usage patterns. Emphasizes the mandatory agent-then-session flow and persistent agent configuration.

#### 8.2.3 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive reference for Managed Agents API endpoints, SDK methods, request/response schemas, error handling, and rate limits across agents, sessions, events, environments, vaults, files, and skills resources.

#### 8.2.4 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference documentation covering Managed Agents environments, file resources, GitHub repository mounting, and the Files API with SDK examples. Includes networking configuration, file upload/download, and session-scoped output handling.

#### 8.2.5 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Reference guide for sending and receiving events on managed agent sessions, including streaming, polling, reconnection, message queuing, interrupts, and event payload details with practical steering patterns.

#### 8.2.6 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference documentation covering the Managed Agents SDK's tool types (agent toolset, MCP, custom), permission policies, vault credential management, and skills API for building specialized agents.

#### 8.2.7 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Reference guide of common client-side patterns for driving Managed Agent sessions, including lossless stream reconnection, idle-break gating, tool confirmations, interrupts, and custom tools with working SDK examples.

#### 8.2.8 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Reference guide for using the Anthropic Python SDK to create and manage agents, sessions, environments, streaming, custom tools, file uploads, and MCP server integration with complete code examples.

#### 8.2.9 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

Reference guide for using the Anthropic TypeScript SDK to create and manage agents, sessions, environments, streaming, custom tools, file uploads, and MCP server integration with complete code examples.

#### 8.2.10 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

Provides cURL and raw HTTP request examples for the Managed Agents API including environment, agent, and session lifecycle operations with complete request/response examples.

### 8.3 Model Migration & SDK Reference Guide

Guidance for upgrading to newer Claude models and navigating language-specific API documentation, addressing breaking changes, parameter deprecations, and behavioral shifts across SDK implementations.

#### 8.3.1 [Model migration guide (Skill)](system-prompts/skill-model-migration-guide.md)

Comprehensive guide for migrating code to newer Claude models, covering breaking changes, deprecated parameters, per-SDK syntax, behavioral shifts, and migration checklists for Opus 4.6, Sonnet 4.6, and Opus 4.7.

#### 8.3.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, directing users to appropriate documentation based on their use case (classification, streaming, tool use, batches, etc.).
