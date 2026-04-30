# Claude Code System Prompts Index

A technical foundation for building, deploying, and operating Claude-based agents and applications — equipping developers with everything needed to move from API integration through autonomous multi-agent systems running reliably in production.

## Table of Contents

1. [Bash and Shell Execution](#1-bash-and-shell-execution)
   1. [Command Execution Fundamentals](#11-command-execution-fundamentals)
      1. [Bash Execution: Commands, Syntax & State Management](#111-bash-execution-commands-syntax-state-management)
         1. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
         2. [Bash (no newlines) [Tool Description]](#1112-bash-no-newlines-tool-description)
         3. [Bash (parallel commands) [Tool Description]](#1113-bash-parallel-commands-tool-description)
         4. [Bash (sequential commands) [Tool Description]](#1114-bash-sequential-commands-tool-description)
         5. [Bash (semicolon usage) [Tool Description]](#1115-bash-semicolon-usage-tool-description)
         6. [Bash (quote file paths) [Tool Description]](#1116-bash-quote-file-paths-tool-description)
         7. [Bash (maintain cwd) [Tool Description]](#1117-bash-maintain-cwd-tool-description)
         8. [Bash (working directory) [Tool Description]](#1118-bash-working-directory-tool-description)
         9. [Bash (timeout) [Tool Description]](#1119-bash-timeout-tool-description)
         10. [Bash (verify parent directory) [Tool Description]](#11110-bash-verify-parent-directory-tool-description)
      2. [Bash Performance: Sleep Avoidance & Efficient Polling](#112-bash-performance-sleep-avoidance-efficient-polling)
         1. [Bash (sleep — keep short) [Tool Description]](#1121-bash-sleep-—-keep-short-tool-description)
         2. [Bash (sleep — no polling background tasks) [Tool Description]](#1122-bash-sleep-—-no-polling-background-tasks-tool-description)
         3. [Bash (sleep — run immediately) [Tool Description]](#1123-bash-sleep-—-run-immediately-tool-description)
         4. [Bash (sleep — use check commands) [Tool Description]](#1124-bash-sleep-—-use-check-commands-tool-description)
         5. [One of six rules for using sleep command (System Prompt)](#1125-one-of-six-rules-for-using-sleep-command-system-prompt)
         6. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#1126-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
   2. [Bash Sandbox: Security Enforcement & Restriction Handling](#12-bash-sandbox-security-enforcement-restriction-handling)
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
   3. [Tool Selection and Alternatives](#13-tool-selection-and-alternatives)
      1. [Bash Tool Selection: Preferring Dedicated Tools](#131-bash-tool-selection-preferring-dedicated-tools)
         1. [Bash (prefer dedicated tools) [Tool Description]](#1311-bash-prefer-dedicated-tools-tool-description)
         2. [Bash (alternative — communication) [Tool Description]](#1312-bash-alternative-—-communication-tool-description)
         3. [Bash (alternative — content search) [Tool Description]](#1313-bash-alternative-—-content-search-tool-description)
         4. [Bash (alternative — edit files) [Tool Description]](#1314-bash-alternative-—-edit-files-tool-description)
         5. [Bash (alternative — file search) [Tool Description]](#1315-bash-alternative-—-file-search-tool-description)
         6. [Bash (alternative — read files) [Tool Description]](#1316-bash-alternative-—-read-files-tool-description)
         7. [Bash (alternative — write files) [Tool Description]](#1317-bash-alternative-—-write-files-tool-description)
         8. [Bash (built-in tools note) [Tool Description]](#1318-bash-built-in-tools-note-tool-description)
      2. [Bash Command Documentation & Safety Classification](#132-bash-command-documentation-safety-classification)
         1. [Bash command description writer (Agent Prompt)](#1321-bash-command-description-writer-agent-prompt)
         2. [Bash command prefix detection (Agent Prompt)](#1322-bash-command-prefix-detection-agent-prompt)
   4. [PowerShell Tool & Windows Compatibility](#14-powershell-tool-windows-compatibility)
      1. [PowerShell (Tool Description)](#141-powershell-tool-description)
      2. [PowerShell edition for 5.1 (System Prompt)](#142-powershell-edition-for-51-system-prompt)
      3. [WSL managed settings double opt-in (System Prompt)](#143-wsl-managed-settings-double-opt-in-system-prompt)
2. [File, Code, and Search Operations](#2-file-code-and-search-operations)
   1. [Filesystem and Notebook Tools](#21-filesystem-and-notebook-tools)
      1. [File System Tools: Read, Write, Edit, Search](#211-file-system-tools-read-write-edit-search)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Write (read existing file first) [Tool Description]](#2113-write-read-existing-file-first-tool-description)
         4. [Edit (Tool Description)](#2114-edit-tool-description)
         5. [Grep (Tool Description)](#2115-grep-tool-description)
         6. [LSP (Tool Description)](#2116-lsp-tool-description)
      2. [Jupyter Notebook Tools](#212-jupyter-notebook-tools)
         1. [NotebookEdit (Tool Description)](#2121-notebookedit-tool-description)
   2. [Codebase Exploration & Analysis](#22-codebase-exploration-analysis)
      1. [Explore (Agent Prompt)](#221-explore-agent-prompt)
      2. [CLAUDE.md creation (Agent Prompt)](#222-claudemd-creation-agent-prompt)
      3. [REPL tool usage and scripting conventions (System Prompt)](#223-repl-tool-usage-and-scripting-conventions-system-prompt)
      4. [REPL (Tool Description)](#224-repl-tool-description)
   3. [Code Quality, Refactoring, and Review](#23-code-quality-refactoring-and-review)
      1. [Code Quality & Refactoring](#231-code-quality-refactoring)
         1. [Simplify (Skill)](#2311-simplify-skill)
         2. [Doing tasks (no compatibility hacks) [System Prompt]](#2312-doing-tasks-no-compatibility-hacks-system-prompt)
         3. [Doing tasks (no unnecessary error handling) [System Prompt]](#2313-doing-tasks-no-unnecessary-error-handling-system-prompt)
         4. [Doing tasks (security) [System Prompt]](#2314-doing-tasks-security-system-prompt)
      2. [Code Review & Security Analysis](#232-code-review-security-analysis)
         1. [/review-pr slash command (Agent Prompt)](#2321-review-pr-slash-command-agent-prompt)
         2. [/security-review slash command (Agent Prompt)](#2322-security-review-slash-command-agent-prompt)
         3. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#2323-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         4. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#2324-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         5. [Censoring assistance with malicious activities (System Prompt)](#2325-censoring-assistance-with-malicious-activities-system-prompt)
         6. [Malware analysis after Read tool call (System Reminder)](#2326-malware-analysis-after-read-tool-call-system-reminder)
      3. [Verification & Testing](#233-verification-testing)
         1. [Verify skill (Skill)](#2331-verify-skill-skill)
         2. [Verify CLI changes (example for Verify skill) [Skill]](#2332-verify-cli-changes-example-for-verify-skill-skill)
         3. [Verify server/API changes (example for Verify skill) [Skill]](#2333-verify-serverapi-changes-example-for-verify-skill-skill)
         4. [Create verifier skills (Skill)](#2334-create-verifier-skills-skill)
         5. [Verification specialist (Agent Prompt)](#2335-verification-specialist-agent-prompt)
   4. [File State & IDE Context Reminders](#24-file-state-ide-context-reminders)
      1. [File truncated (System Reminder)](#241-file-truncated-system-reminder)
      2. [File shorter than offset (System Reminder)](#242-file-shorter-than-offset-system-reminder)
      3. [File exists but empty (System Reminder)](#243-file-exists-but-empty-system-reminder)
      4. [File modified by user or linter (System Reminder)](#244-file-modified-by-user-or-linter-system-reminder)
      5. [File opened in IDE (System Reminder)](#245-file-opened-in-ide-system-reminder)
      6. [Lines selected in IDE (System Reminder)](#246-lines-selected-in-ide-system-reminder)
      7. [New diagnostics detected (System Reminder)](#247-new-diagnostics-detected-system-reminder)
3. [Git, Planning, and Execution Control](#3-git-planning-and-execution-control)
   1. [Git Workflows and Worktrees](#31-git-workflows-and-worktrees)
      1. [Git Workflows: Safe Commits, PRs & Version Control](#311-git-workflows-safe-commits-prs-version-control)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#3111-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#3112-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#3113-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#3114-bash-git-—-prefer-new-commits-tool-description)
         5. [Quick git commit (Agent Prompt)](#3115-quick-git-commit-agent-prompt)
         6. [Quick PR creation (Agent Prompt)](#3116-quick-pr-creation-agent-prompt)
         7. [Session title and branch generation (Agent Prompt)](#3117-session-title-and-branch-generation-agent-prompt)
         8. [Git status (System Prompt)](#3118-git-status-system-prompt)
      2. [Git Worktree Management](#312-git-worktree-management)
         1. [EnterWorktree (Tool Description)](#3121-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#3122-exitworktree-tool-description)
   2. [Plan Mode: Workflow & Lifecycle](#32-plan-mode-workflow-lifecycle)
      1. [Plan mode is active (5-phase) [System Reminder]](#321-plan-mode-is-active-5-phase-system-reminder)
      2. [Plan mode is active (iterative) [System Reminder]](#322-plan-mode-is-active-iterative-system-reminder)
      3. [Plan mode is active (subagent) [System Reminder]](#323-plan-mode-is-active-subagent-system-reminder)
      4. [Plan mode re-entry (System Reminder)](#324-plan-mode-re-entry-system-reminder)
      5. [Plan mode approval tool enforcement (System Reminder)](#325-plan-mode-approval-tool-enforcement-system-reminder)
      6. [Plan file reference (System Reminder)](#326-plan-file-reference-system-reminder)
      7. [Exited plan mode (System Reminder)](#327-exited-plan-mode-system-reminder)
      8. [EnterPlanMode (Tool Description)](#328-enterplanmode-tool-description)
      9. [ExitPlanMode (Tool Description)](#329-exitplanmode-tool-description)
      10. [Plan mode (enhanced) [Agent Prompt]](#3210-plan-mode-enhanced-agent-prompt)
      11. [Remote plan mode (ultraplan) [System Prompt]](#3211-remote-plan-mode-ultraplan-system-prompt)
      12. [Remote planning session (System Prompt)](#3212-remote-planning-session-system-prompt)
      13. [Ultraplan mode (System Reminder)](#3213-ultraplan-mode-system-reminder)
   3. [Autonomous Execution and Batch Refactoring](#33-autonomous-execution-and-batch-refactoring)
      1. [Autonomous & Auto Mode Execution](#331-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#3311-auto-mode-system-prompt)
         2. [Autonomous loop check (System Prompt)](#3312-autonomous-loop-check-system-prompt)
         3. [Auto mode rule reviewer (Agent Prompt)](#3313-auto-mode-rule-reviewer-agent-prompt)
      2. [Batch Processing & Large-Scale Refactoring](#332-batch-processing-large-scale-refactoring)
         1. [/batch slash command (Agent Prompt)](#3321-batch-slash-command-agent-prompt)
         2. [Worker instructions (System Prompt)](#3322-worker-instructions-system-prompt)
   4. [Safety, Verification, and Completion](#34-safety-verification-and-completion)
      1. [Safety & Action Risk Assessment](#341-safety-action-risk-assessment)
         1. [Executing actions with care (System Prompt)](#3411-executing-actions-with-care-system-prompt)
         2. [Tool execution denied (System Prompt)](#3412-tool-execution-denied-system-prompt)
      2. [Plan Verification & Completion Checking](#342-plan-verification-completion-checking)
         1. [Verify plan reminder (System Reminder)](#3421-verify-plan-reminder-system-reminder)
      3. [Advisor Tool & Decision Support](#343-advisor-tool-decision-support)
         1. [Advisor tool instructions (System Prompt)](#3431-advisor-tool-instructions-system-prompt)
4. [Multi-Agent Orchestration and Scheduling](#4-multi-agent-orchestration-and-scheduling)
   1. [Agent Teams and Subagent Delegation](#41-agent-teams-and-subagent-delegation)
      1. [Multi-Agent Team Coordination](#411-multi-agent-team-coordination)
         1. [TeammateTool (Tool Description)](#4111-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#4112-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#4113-sendmessagetool-tool-description)
         4. [Team Coordination (System Reminder)](#4114-team-coordination-system-reminder)
         5. [Team Shutdown (System Reminder)](#4115-team-shutdown-system-reminder)
      2. [Subagent Spawning & Delegation](#412-subagent-spawning-delegation)
         1. [Agent (usage notes) [Tool Description]](#4121-agent-usage-notes-tool-description)
         2. [Subagent delegation examples (System Prompt)](#4122-subagent-delegation-examples-system-prompt)
         3. [Subagent prompt-writing examples (System Prompt)](#4123-subagent-prompt-writing-examples-system-prompt)
         4. [Writing subagent prompts (System Prompt)](#4124-writing-subagent-prompts-system-prompt)
         5. [Tool usage (subagent guidance) [System Prompt]](#4125-tool-usage-subagent-guidance-system-prompt)
         6. [Fork usage guidelines (System Prompt)](#4126-fork-usage-guidelines-system-prompt)
         7. [Worker fork (Agent Prompt)](#4127-worker-fork-agent-prompt)
         8. [General purpose (Agent Prompt)](#4128-general-purpose-agent-prompt)
   2. [Background Job Monitoring and Task Tracking](#42-background-job-monitoring-and-task-tracking)
      1. [Background Job & Agent State Management](#421-background-job-agent-state-management)
         1. [Background job behavior (System Prompt)](#4211-background-job-behavior-system-prompt)
         2. [Background session instructions (System Prompt)](#4212-background-session-instructions-system-prompt)
         3. [Background agent state classifier (Agent Prompt)](#4213-background-agent-state-classifier-agent-prompt)
         4. [Background agent state classification examples (Data)](#4214-background-agent-state-classification-examples-data)
         5. [Background monitor (streaming events) [Tool Description]](#4215-background-monitor-streaming-events-tool-description)
      2. [Task & Todo Management](#422-task-todo-management)
         1. [TodoWrite (Tool Description)](#4221-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#4222-taskcreate-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#4223-tasklist-teammate-workflow-tool-description)
         4. [Task tools reminder (System Reminder)](#4224-task-tools-reminder-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#4225-todowrite-reminder-system-reminder)
         6. [Tool usage (task management) [System Prompt]](#4226-tool-usage-task-management-system-prompt)
   3. [Scheduling & Cron Automation](#43-scheduling-cron-automation)
      1. [CronCreate (Tool Description)](#431-croncreate-tool-description)
      2. [ScheduleWakeup (/loop dynamic mode) [Tool Description]](#432-schedulewakeup-loop-dynamic-mode-tool-description)
      3. [Snooze (delay and reason guidance) [Tool Description]](#433-snooze-delay-and-reason-guidance-tool-description)
      4. [Schedule proactive offer guidance (Tool Description)](#434-schedule-proactive-offer-guidance-tool-description)
      5. [/loop slash command (Skill)](#435-loop-slash-command-skill)
      6. [/loop slash command (dynamic mode) [Skill]](#436-loop-slash-command-dynamic-mode-skill)
      7. [/loop self-pacing mode (Skill)](#437-loop-self-pacing-mode-skill)
      8. [/loop cloud-first scheduling offer (Skill)](#438-loop-cloud-first-scheduling-offer-skill)
      9. [Dynamic pacing loop execution (Skill)](#439-dynamic-pacing-loop-execution-skill)
      10. [Schedule recurring cron and execute immediately (compact) [Skill]](#4310-schedule-recurring-cron-and-execute-immediately-compact-skill)
      11. [Schedule recurring cron and run immediately (Skill)](#4311-schedule-recurring-cron-and-run-immediately-skill)
      12. [/dream nightly schedule (Skill)](#4312-dream-nightly-schedule-skill)
      13. [Proactive schedule offer after follow-up work (System Prompt)](#4313-proactive-schedule-offer-after-follow-up-work-system-prompt)
      14. [/schedule slash command (Agent Prompt)](#4314-schedule-slash-command-agent-prompt)
      15. [Loop wakeup not scheduled (System Reminder)](#4315-loop-wakeup-not-scheduled-system-reminder)
   4. [Agent Invocation & Mention Handling](#44-agent-invocation-mention-handling)
      1. [Agent mention (System Reminder)](#441-agent-mention-system-reminder)
5. [Memory, Sessions, and Context Management](#5-memory-sessions-and-context-management)
   1. [Persistent Memory and Consolidation](#51-persistent-memory-and-consolidation)
      1. [Memory Management & Persistence](#511-memory-management-persistence)
         1. [Memory instructions (System Prompt)](#5111-memory-instructions-system-prompt)
         2. [Memory staleness verification (System Prompt)](#5112-memory-staleness-verification-system-prompt)
         3. [Memory description of user details (System Prompt)](#5113-memory-description-of-user-details-system-prompt)
         4. [Memory description of user feedback (System Prompt)](#5114-memory-description-of-user-feedback-system-prompt)
         5. [Memory description of user feedback (with explicit save) [System Prompt]](#5115-memory-description-of-user-feedback-with-explicit-save-system-prompt)
         6. [Description part of memory instructions (System Prompt)](#5116-description-part-of-memory-instructions-system-prompt)
         7. [Memory file contents (System Reminder)](#5117-memory-file-contents-system-reminder)
         8. [Nested memory contents (System Reminder)](#5118-nested-memory-contents-system-reminder)
         9. [Determine which memory files to attach (Agent Prompt)](#5119-determine-which-memory-files-to-attach-agent-prompt)
         10. [Memory synthesis (Agent Prompt)](#51110-memory-synthesis-agent-prompt)
         11. [Session memory template (Data)](#51111-session-memory-template-data)
         12. [User profile memory template (Data)](#51112-user-profile-memory-template-data)
      2. [Dream Memory Consolidation](#512-dream-memory-consolidation)
         1. [/dream memory consolidation (Skill)](#5121-dream-memory-consolidation-skill)
         2. [Dream memory consolidation (Agent Prompt)](#5122-dream-memory-consolidation-agent-prompt)
         3. [Dream memory pruning (Agent Prompt)](#5123-dream-memory-pruning-agent-prompt)
         4. [Dream CLAUDE.md memory reconciliation (System Prompt)](#5124-dream-claudemd-memory-reconciliation-system-prompt)
         5. [Dream team memory handling (System Prompt)](#5125-dream-team-memory-handling-system-prompt)
   2. [Session Naming & Management](#52-session-naming-management)
      1. [Coding session title generator (Agent Prompt)](#521-coding-session-title-generator-agent-prompt)
      2. [/rename auto-generate session name (Agent Prompt)](#522-rename-auto-generate-session-name-agent-prompt)
      3. [Session search (Agent Prompt)](#523-session-search-agent-prompt)
      4. [Session continuation (System Reminder)](#524-session-continuation-system-reminder)
      5. [Previously invoked skills (System Reminder)](#525-previously-invoked-skills-system-reminder)
   3. [Conversation Summarization and Context Tracking](#53-conversation-summarization-and-context-tracking)
      1. [Conversation Summarization & Context Compaction](#531-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#5311-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#5312-recent-message-summarization-agent-prompt)
         3. [Partial compaction instructions (System Prompt)](#5313-partial-compaction-instructions-system-prompt)
         4. [Context compaction summary (System Prompt)](#5314-context-compaction-summary-system-prompt)
         5. [Compact file reference (System Reminder)](#5315-compact-file-reference-system-reminder)
      2. [Session Memory & Context Tracking](#532-session-memory-context-tracking)
         1. [Session memory update instructions (Agent Prompt)](#5321-session-memory-update-instructions-agent-prompt)
         2. [/catch-up periodic heartbeat (Skill)](#5322-catch-up-periodic-heartbeat-skill)
         3. [Agent memory instructions (System Prompt)](#5323-agent-memory-instructions-system-prompt)
6. [Claude API, SDKs, and Application Development](#6-claude-api-sdks-and-application-development)
   1. [Claude API Core Reference](#61-claude-api-core-reference)
      1. [Claude API: Tool Use, Streaming & Batches](#611-claude-api-tool-use-streaming-batches)
         1. [Tool use concepts (Data)](#6111-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6112-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6113-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#6114-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#6115-streaming-reference-—-typescript-data)
         6. [Message Batches API reference — Python (Data)](#6116-message-batches-api-reference-—-python-data)
         7. [Files API reference — Python (Data)](#6117-files-api-reference-—-python-data)
         8. [Files API reference — TypeScript (Data)](#6118-files-api-reference-—-typescript-data)
      2. [Claude API: Models, Caching & Infrastructure](#612-claude-api-models-caching-infrastructure)
         1. [Claude model catalog (Data)](#6121-claude-model-catalog-data)
         2. [Prompt Caching — Design & Optimization (Data)](#6122-prompt-caching-—-design-optimization-data)
         3. [HTTP error codes reference (Data)](#6123-http-error-codes-reference-data)
         4. [Live documentation sources (Data)](#6124-live-documentation-sources-data)
         5. [Anthropic CLI (Data)](#6125-anthropic-cli-data)
   2. [Claude API Reference: Language SDKs](#62-claude-api-reference-language-sdks)
      1. [Claude API reference — Python (Data)](#621-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#622-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#623-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#624-claude-api-reference-—-java-data)
      5. [Claude API reference — Ruby (Data)](#625-claude-api-reference-—-ruby-data)
      6. [Claude API reference — PHP (Data)](#626-claude-api-reference-—-php-data)
      7. [Claude API reference — C# (Data)](#627-claude-api-reference-—-c-data)
      8. [Claude API reference — cURL (Data)](#628-claude-api-reference-—-curl-data)
   3. [Managed Agents Infrastructure](#63-managed-agents-infrastructure)
      1. [Managed Agents: Core Concepts & Architecture](#631-managed-agents-core-concepts-architecture)
         1. [Managed Agents overview (Data)](#6311-managed-agents-overview-data)
         2. [Managed Agents core concepts (Data)](#6312-managed-agents-core-concepts-data)
         3. [Managed Agents environments and resources (Data)](#6313-managed-agents-environments-and-resources-data)
         4. [Managed Agents memory stores reference (Data)](#6314-managed-agents-memory-stores-reference-data)
         5. [Managed Agents tools and skills (Data)](#6315-managed-agents-tools-and-skills-data)
      2. [Managed Agents: API Reference & SDK](#632-managed-agents-api-reference-sdk)
         1. [Managed Agents reference — Python (Data)](#6321-managed-agents-reference-—-python-data)
         2. [Managed Agents reference — TypeScript (Data)](#6322-managed-agents-reference-—-typescript-data)
         3. [Managed Agents reference — cURL (Data)](#6323-managed-agents-reference-—-curl-data)
         4. [Managed Agents endpoint reference (Data)](#6324-managed-agents-endpoint-reference-data)
         5. [Managed Agents events and steering (Data)](#6325-managed-agents-events-and-steering-data)
         6. [Managed Agents client patterns (Data)](#6326-managed-agents-client-patterns-data)
         7. [Managed Agents onboarding flow (Agent Prompt)](#6327-managed-agents-onboarding-flow-agent-prompt)
   4. [Application Design and Integration Guides](#64-application-design-and-integration-guides)
      1. [Building LLM Applications: Skills & Guides](#641-building-llm-applications-skills-guides)
         1. [Building LLM-powered applications with Claude (Skill)](#6411-building-llm-powered-applications-with-claude-skill)
         2. [Build with Claude API (reference guide) [Skill]](#6412-build-with-claude-api-reference-guide-skill)
         3. [Agent Design Patterns (Skill)](#6413-agent-design-patterns-skill)
         4. [Model migration guide (Skill)](#6414-model-migration-guide-skill)
         5. [Claude guide agent (Agent Prompt)](#6415-claude-guide-agent-agent-prompt)
      2. [GitHub Integration & CI/CD](#642-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#6421-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#6422-github-app-installation-pr-description-data)
7. [Tools, Configuration, and User Interaction](#7-tools-configuration-and-user-interaction)
   1. [Browser Automation and Web Retrieval](#71-browser-automation-and-web-retrieval)
      1. [Browser Automation & Computer Use](#711-browser-automation-computer-use)
         1. [Computer (Tool Description)](#7111-computer-tool-description)
         2. [BrowserBatch (Tool Description)](#7112-browserbatch-tool-description)
         3. [Computer action (Tool Parameter)](#7113-computer-action-tool-parameter)
         4. [Chrome browser MCP tools (System Prompt)](#7114-chrome-browser-mcp-tools-system-prompt)
         5. [Claude in Chrome browser automation (System Prompt)](#7115-claude-in-chrome-browser-automation-system-prompt)
         6. [Computer Use MCP (Skill)](#7116-computer-use-mcp-skill)
      2. [Web Content: Fetch & Search](#712-web-content-fetch-search)
         1. [WebFetch (Tool Description)](#7121-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#7122-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#7123-webfetch-summarizer-agent-prompt)
   2. [Hooks, Configuration, and Project Setup](#72-hooks-configuration-and-project-setup)
      1. [Hooks System: Configuration & Lifecycle](#721-hooks-system-configuration-lifecycle)
         1. [Hooks Configuration (System Prompt)](#7211-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#7212-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#7213-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#7214-hook-stopped-continuation-system-reminder)
         5. [Hook stopped continuation prefix (System Reminder)](#7215-hook-stopped-continuation-prefix-system-reminder)
         6. [Hook success (System Reminder)](#7216-hook-success-system-reminder)
         7. [Stop hook blocking error (System Reminder)](#7217-stop-hook-blocking-error-system-reminder)
         8. [Hook condition evaluator (stop) [Agent Prompt]](#7218-hook-condition-evaluator-stop-agent-prompt)
      2. [CLAUDE.md & Project Configuration](#722-claudemd-project-configuration)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#7221-init-claudemd-and-skill-setup-new-version-skill)
         2. [Update Claude Code Config (Skill)](#7222-update-claude-code-config-skill)
         3. [update-config (7-step verification flow) [Skill]](#7223-update-config-7-step-verification-flow-skill)
         4. [Generate permission allowlist from transcripts (Skill)](#7224-generate-permission-allowlist-from-transcripts-skill)
         5. [Scratchpad directory (System Prompt)](#7225-scratchpad-directory-system-prompt)
   3. [Skills, Tool Discovery, and MCP](#73-skills-tool-discovery-and-mcp)
      1. [Skill System: Invocation & Creation](#731-skill-system-invocation-creation)
         1. [Skill (Tool Description)](#7311-skill-tool-description)
         2. [Skillify Current Session (System Prompt)](#7312-skillify-current-session-system-prompt)
      2. [Tool Discovery & Dynamic Loading](#732-tool-discovery-dynamic-loading)
         1. [ToolSearch (second part) [Tool Description]](#7321-toolsearch-second-part-tool-description)
      3. [MCP Resources & Integration](#733-mcp-resources-integration)
         1. [MCP resource no content (System Reminder)](#7331-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#7332-mcp-resource-no-displayable-content-system-reminder)
   4. [User Interaction and Communication](#74-user-interaction-and-communication)
      1. [Communication Style & Output Formatting](#741-communication-style-output-formatting)
         1. [Communication style (System Prompt)](#7411-communication-style-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#7412-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#7413-tone-and-style-concise-output-—-short-system-prompt)
         4. [Agent thread notes (System Prompt)](#7414-agent-thread-notes-system-prompt)
         5. [Agent Summary Generation (System Prompt)](#7415-agent-summary-generation-system-prompt)
         6. [Output style active (System Reminder)](#7416-output-style-active-system-reminder)
      2. [User Interaction & Question Tools](#742-user-interaction-question-tools)
         1. [AskUserQuestion (Tool Description)](#7421-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#7422-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#7423-option-previewer-system-prompt)
         4. [How to use the SendUserMessage tool (System Prompt)](#7424-how-to-use-the-sendusermessage-tool-system-prompt)
         5. [SendMessageTool (non-agent-teams) [Tool Description]](#7425-sendmessagetool-non-agent-teams-tool-description)
      3. [Notification & Push Alerts](#743-notification-push-alerts)
         1. [PushNotification (Tool Description)](#7431-pushnotification-tool-description)
      4. [Prompt Suggestions & UX Guidance](#744-prompt-suggestions-ux-guidance)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#7441-prompt-suggestion-generator-v2-agent-prompt)
         2. [/btw side question (System Reminder)](#7442-btw-side-question-system-reminder)
8. [Agent Identity, Operations, and Analytics](#8-agent-identity-operations-and-analytics)
   1. [Harness Identity and Reasoning](#81-harness-identity-and-reasoning)
      1. [Harness & Core Agent Identity](#811-harness-core-agent-identity)
         1. [Harness instructions (System Prompt)](#8111-harness-instructions-system-prompt)
         2. [Doing tasks (software engineering focus) [System Prompt]](#8112-doing-tasks-software-engineering-focus-system-prompt)
         3. [Doing tasks (ambitious tasks) [System Prompt]](#8113-doing-tasks-ambitious-tasks-system-prompt)
         4. [Doing tasks (help and feedback) [System Prompt]](#8114-doing-tasks-help-and-feedback-system-prompt)
         5. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#8115-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      2. [Thinking & Reasoning Configuration](#812-thinking-reasoning-configuration)
         1. [Thinking frequency tuning (System Reminder)](#8121-thinking-frequency-tuning-system-reminder)
   2. [Operational Modes and Learning](#82-operational-modes-and-learning)
      1. [Minimal Mode & Feature Configuration](#821-minimal-mode-feature-configuration)
         1. [Minimal mode (System Prompt)](#8211-minimal-mode-system-prompt)
      2. [Learning & Teaching Modes](#822-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#8221-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#8222-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#8223-request_teach_access-part-of-teach-mode-tool-description)
      3. [Agent Creation & Design](#823-agent-creation-design)
         1. [Agent creation architect (Agent Prompt)](#8231-agent-creation-architect-agent-prompt)
         2. [Assistant voice and values template (Data)](#8232-assistant-voice-and-values-template-data)
   3. [Terminal Display and Resource Monitoring](#83-terminal-display-and-resource-monitoring)
      1. [Status Line & Terminal Display](#831-status-line-terminal-display)
         1. [Status line setup (Agent Prompt)](#8311-status-line-setup-agent-prompt)
      2. [Resource & Budget Monitoring](#832-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#8321-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#8322-usd-budget-system-reminder)
   4. [Debugging, Analytics, and Team Operations](#84-debugging-analytics-and-team-operations)
      1. [Debugging & Troubleshooting](#841-debugging-troubleshooting)
         1. [Debugging (Skill)](#8411-debugging-skill)
         2. [/stuck slash command (Skill)](#8412-stuck-slash-command-skill)
      2. [Insights & Usage Analytics](#842-insights-usage-analytics)
         1. [Insights at a glance summary (System Prompt)](#8421-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#8422-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#8423-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#8424-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#8425-insights-suggestions-system-prompt)
         6. [/insights report output (Skill)](#8426-insights-report-output-skill)
      3. [Onboarding & Team Setup](#843-onboarding-team-setup)
         1. [Team onboarding guide (Skill)](#8431-team-onboarding-guide-skill)
         2. [Onboarding guide generator (Agent Prompt)](#8432-onboarding-guide-generator-agent-prompt)
      4. [Daily Briefing & Calendar Integration](#844-daily-briefing-calendar-integration)
         1. [/morning-checkin daily brief (Skill)](#8441-morning-checkin-daily-brief-skill)
         2. [/pre-meeting-checkin event brief (Skill)](#8442-pre-meeting-checkin-event-brief-skill)

---

## 1. Bash and Shell Execution

Everything governing how bash commands are executed, secured, and optimized — from syntax rules and state management to sandbox enforcement and tool selection preferences.

### 1.1 Command Execution Fundamentals

Core rules for running bash commands, including syntax, state persistence, sequential vs. parallel execution, and performance considerations.

#### 1.1.1 Bash Execution: Commands, Syntax & State Management

Bash commands execute with persistent working directory but stateless shell environment. Sequential execution chains commands with && for dependencies, parallel execution runs independent commands as separate tool calls, and syntax rules govern quoting, separators, and path handling. Timeouts and parent directory verification provide safety guardrails.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Executes a given bash command and returns its output.

##### 1.1.1.2 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate bash commands.

##### 1.1.1.3 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent commands as parallel tool calls in a single message.

##### 1.1.1.4 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call when they must run sequentially.

##### 1.1.1.5 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons only when running commands sequentially but not caring if earlier commands fail.

##### 1.1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes.

##### 1.1.1.7 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain current working directory by using absolute paths and avoiding cd commands, except when explicitly requested by the user.

##### 1.1.1.8 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between bash commands, but shell state does not; environment initializes from user profile.

##### 1.1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Specify optional timeout in milliseconds for bash commands, with configurable max and default values.

##### 1.1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Verify parent directory exists before creating new files or directories using ls.

#### 1.1.2 Bash Performance: Sleep Avoidance & Efficient Polling

Minimize blocking delays by executing commands immediately, using check commands instead of polling loops, and relying on background task notifications rather than sleep-based polling. Avoid retry loops with sleep; diagnose root causes instead.

##### 1.1.2.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep duration short to avoid blocking the user.

##### 1.1.2.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

##### 1.1.2.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Execute commands immediately without sleep delays when they can run sequentially.

##### 1.1.2.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like gh run view instead of sleeping when polling external processes.

##### 1.1.2.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; instead diagnose root causes.

##### 1.1.2.6 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Guidelines for avoiding unnecessary sleep commands in PowerShell by running commands immediately, using background job notifications instead of polling, and diagnosing root causes rather than retrying in loops.

### 1.2 Bash Sandbox: Security Enforcement & Restriction Handling

All commands run within a mandatory sandbox enforcing file access, network, and socket restrictions. Failures from sandbox violations are detected by specific error patterns and automatically retried with sandbox disabled, prompting user consent. Sensitive paths cannot be allowlisted; temporary files use $TMPDIR.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

If a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always default to running commands within the sandbox unless user explicitly requests otherwise.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied to specific paths outside allowed directories indicates sandbox restriction.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that sandbox restrictions caused a failure.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox network restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors for file or network operations indicate sandbox restrictions.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused the failure and mention the /sandbox command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Identifies when a command failure shows evidence of sandbox restrictions versus other causes.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; default to sandbox for future commands even after running one with dangerouslyDisableSandbox.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing how to respond when sandbox-caused failures are detected.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true on sandbox failure without asking the user.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling sandbox will prompt the user for permission.

### 1.3 Tool Selection and Alternatives

Guidelines for preferring dedicated file and search tools over bash equivalents, and for documenting and classifying bash commands safely.

#### 1.3.1 Bash Tool Selection: Preferring Dedicated Tools

Dedicated tools (Read, Write, Glob, Grep, Edit) provide better user experience and permission transparency than bash equivalents for file operations and searching. Direct text output replaces echo/printf for communication.

##### 1.3.1.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for find, grep, cat, and similar read-only searching commands; use dedicated tools instead.

##### 1.3.1.2 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly instead of using echo or printf for communication.

##### 1.3.1.3 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use the Grep tool instead of grep or rg for content searching.

##### 1.3.1.4 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs Claude to use the Edit tool instead of sed or awk for file editing.

##### 1.3.1.5 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use the Glob tool instead of find or ls for file searching.

##### 1.3.1.6 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs Claude to use the Read tool instead of cat, head, or tail for reading files.

##### 1.3.1.7 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use the Write tool instead of echo or cat for writing files.

##### 1.3.1.8 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and easier permission review than Bash equivalents.

#### 1.3.2 Bash Command Documentation & Safety Classification

Generates clear command documentation and detects command injection patterns in bash, enabling safety classification and user confirmation workflows through prefix analysis.

##### 1.3.2.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or obscure-flag commands.

##### 1.3.2.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands for safety classification. Returns prefix string or 'command_injection_detected' to enable allowlisting and user confirmation workflows.

### 1.4 PowerShell Tool & Windows Compatibility

PowerShell execution with timeout and working directory persistence, paired with compatibility documentation for Windows PowerShell 5.1 constraints and WSL policy chain access requirements.

#### 1.4.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Execute PowerShell commands with optional timeout and persistent working directory; use specialized tools for file operations and avoid interactive cmdlets in non-interactive mode.

#### 1.4.2 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 compatibility constraints including unavailable operators, stderr handling differences, file encoding defaults, and JSON conversion behavior.

#### 1.4.3 [WSL managed settings double opt-in (System Prompt)](system-prompts/system-prompt-wsl-managed-settings-double-opt-in.md)

Explains WSL managed settings policy chain access requiring admin-enabled flag and additional user opt-in for HKCU policies.

---

## 2. File, Code, and Search Operations

Tools and workflows for reading, writing, editing, and searching files and codebases, including code quality improvements, security review, and verification.

### 2.1 Filesystem and Notebook Tools

Core tools for reading, writing, editing, and searching files, plus cell-level Jupyter notebook manipulation.

#### 2.1.1 File System Tools: Read, Write, Edit, Search

Comprehensive toolkit for filesystem operations spanning content retrieval, modification, and discovery. Read supports multiple formats including PDFs and images; Write and Edit handle file creation and targeted modifications; Grep enables regex-based content search; LSP provides code intelligence for navigation and refactoring.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Read files from filesystem with support for images, PDFs (with page ranges for large files), and Jupyter notebooks; use absolute paths and read screenshots when provided.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Write creates or completely rewrites files to the local filesystem. Prefer Edit for modifying existing files; avoid creating documentation or README files unless explicitly requested, and omit emojis unless asked.

##### 2.1.1.3 [Write (read existing file first) [Tool Description]](system-prompts/tool-description-write-read-existing-file-first.md)

Write creates or overwrites files on the local filesystem. When overwriting existing files, the file must be read first in the conversation or the call fails; prefer Edit for modifications.

##### 2.1.1.4 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read tool output and preferring edits to existing files over creating new ones.

##### 2.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Search files using ripgrep with regex support, file filtering by glob or type, and multiple output modes; prefer this over bash grep commands.

##### 2.1.1.6 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers for code intelligence including navigation, references, hover info, symbols, and call hierarchies.

#### 2.1.2 Jupyter Notebook Tools

Cell-level editing for Jupyter notebooks, enabling targeted replacement of notebook cell contents with support for insertion and deletion operations.

##### 2.1.2.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replace contents of specific Jupyter notebook cells with new source, supporting insert and delete modes using 0-indexed cell numbers.

### 2.2 Codebase Exploration & Analysis

Read-only tools and conventions for fast codebase navigation, pattern searching, and documentation generation. Provides scripting interfaces for composing complex investigations across files and code patterns while maintaining strict separation from modification capabilities.

#### 2.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only exploration agent for finding files by glob patterns and searching code with regex, supporting quick, medium, and very-thorough search levels. Strictly prohibited from file modifications.

#### 2.2.2 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files capturing build/test/lint commands, high-level architecture, and project-specific conventions for future Claude Code instances.

#### 2.2.3 [REPL tool usage and scripting conventions (System Prompt)](system-prompts/system-prompt-repl-tool-usage-and-scripting-conventions.md)

Defines dense JavaScript scripting conventions for REPL investigations including shorthands for shell, file reads, and code search with batching rules, API reference, and error-handling patterns.

#### 2.2.4 [REPL (Tool Description)](system-prompts/tool-description-repl.md)

JavaScript programming interface for composing tool calls with loops and branching; batch all operations into single REPL call and use async functions to call tools.

### 2.3 Code Quality, Refactoring, and Review

Workflows for improving code quality through cleanup and refactoring, automated security analysis of pull requests, and runtime verification of code changes.

#### 2.3.1 Code Quality & Refactoring

Guidelines and workflows for improving code quality by eliminating redundancy, removing unused code, simplifying error handling, and preventing security vulnerabilities. Emphasizes direct deletion over compatibility shims and validation only at system boundaries.

##### 2.3.1.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel review agents (reuse, quality, efficiency) to identify and fix redundancy, hacky patterns, and inefficiencies in changed code.

##### 2.3.1.2 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims, renamed variables, or removed-code comments.

##### 2.3.1.3 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios and validate only at system boundaries, trusting internal code and framework guarantees.

##### 2.3.1.4 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities like command injection, XSS, and SQL injection, prioritizing safe and correct code.

#### 2.3.2 Code Review & Security Analysis

Automated code review and security analysis systems that examine pull requests and autonomous agent actions for vulnerabilities, policy violations, and exploitability risks. Covers both static analysis of code changes and runtime monitoring of agent behavior against threat models and authorization contexts.

##### 2.3.2.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Expert code reviewer that fetches GitHub PR details and diffs, then analyzes changes for code quality, style, correctness, performance, test coverage, and security issues.

##### 2.3.2.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Senior security engineer conducting focused code review of PR changes to identify high-confidence exploitable vulnerabilities in input validation, authentication, crypto, injection, and data exposure.

##### 2.3.2.3 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security classifier that evaluates autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with user intent as the final signal.

##### 2.3.2.4 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules covering destructive operations, credential leakage, and data exfiltration, plus allow exceptions for legitimate operations.

##### 2.3.2.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing requests for destructive techniques, DoS attacks, supply chain compromise, or detection evasion without clear authorization.

##### 2.3.2.6 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Permits Claude to analyze malware behavior and write reports but forbids improving or augmenting malicious code.

#### 2.3.3 Verification & Testing

Runtime verification framework that validates code changes by executing them at their surface boundaries—CLI, API, server, or GUI—and capturing observable behavior against expected outcomes. Includes adversarial testing, regression detection, and automated skill generation for different verification contexts.

##### 2.3.3.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Comprehensive verification skill instructing Claude to validate code changes by running the app and observing behavior at its runtime surface—CLI, API, GUI, or library boundary. Emphasizes finding the change, reaching the surface, driving it with test inputs, probing around the change, and capturing evidence in a structured report with verdicts (PASS, FAIL, BLOCKED, SKIP).

##### 2.3.3.2 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Demonstrates verification workflow for CLI changes by building, running with test arguments, capturing output and exit codes, and comparing against expected behavior. Shows how to detect regressions and validate new flags work correctly.

##### 2.3.3.3 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Demonstrates verification workflow for server and API changes using curl to test routes, with server lifecycle management via readiness polling. Shows how to validate response headers, status codes, and detect when changed code paths are actually exercised.

##### 2.3.3.4 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating automated verifier skills (Playwright, Tmux, HTTP) that the Verify agent uses to test code changes, including project detection, tool setup, authentication handling, and skill generation.

##### 2.3.3.5 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial verification subagent that tests implementations by running builds, test suites, linters, and adversarial probes, then issues PASS/FAIL/PARTIAL verdicts with evidence.

### 2.4 File State & IDE Context Reminders

System notifications that track file state changes—truncation, emptiness, external modifications, offset errors—and IDE interactions like file opens and line selections. These reminders keep Claude aware of the working context without requiring user explanation.

#### 2.4.1 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a file was truncated due to size limits and instructs use of the read tool to access remaining content without informing the user.

#### 2.4.2 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Alerts Claude when a file read offset exceeds the file's actual length.

#### 2.4.3 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

#### 2.4.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by user or linter with changes shown, instructing to account for modifications without reverting unless requested.

#### 2.4.5 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that user opened a file in the IDE, which may or may not relate to current task.

#### 2.4.6 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of line ranges selected by the user in the IDE, with a caveat that selection may be unrelated to the current task.

#### 2.4.7 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues with a formatted summary and list.

---

## 3. Git, Planning, and Execution Control

Version control workflows, structured planning before implementation, autonomous execution modes, and safety guardrails for consequential actions.

### 3.1 Git Workflows and Worktrees

Safe commit creation, pull request generation, and isolated branch development via git worktrees.

#### 3.1.1 Git Workflows: Safe Commits, PRs & Version Control

Git operations prioritize safety by avoiding destructive commands, never skipping hooks or signing, and preferring new commits over amendments. Automated workflows generate commits and pull requests with pre-populated context, proper branch naming, and comprehensive PR descriptions while enforcing safety protocols.

##### 3.1.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives to destructive git operations like reset --hard, push --force, and checkout -- before executing them.

##### 3.1.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, parallel command execution, commit message drafting, hook failure handling, and PR creation with proper formatting and description.

##### 3.1.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude to never skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues if hooks fail.

##### 3.1.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to prefer creating new commits over amending existing commits.

##### 3.1.1.5 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context from git status and diff. Follows safety protocols: never amends, never skips hooks, avoids secret files, and creates new commits only.

##### 3.1.1.6 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates or updates pull requests with pre-populated context from git diff and branch info. Handles branch creation, commits, pushing, and PR body generation with safety protocols for destructive operations.

##### 3.1.1.7 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles and git branch names from task descriptions, following naming conventions and length constraints.

##### 3.1.1.8 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the git status snapshot at conversation start as static reference information.

#### 3.1.2 Git Worktree Management

Isolated development environments via git worktrees, enabling branch-specific work without affecting the main repository state. Supports creation, session switching, and cleanup with options for preserving or removing worktrees.

##### 3.1.2.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create isolated git worktree and switch session into it only when explicitly instructed by user or project instructions, supporting both git repositories and VCS-agnostic hooks.

##### 3.1.2.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exit worktree session created by EnterWorktree and return to original directory, with options to keep or remove the worktree and handle uncommitted changes.

### 3.2 Plan Mode: Workflow & Lifecycle

Structured planning framework enabling codebase exploration and implementation design before execution. Supports iterative pair-planning, multi-agent parallel exploration, and subagent workflows with mandatory user approval gates. Handles mode transitions, plan file continuity, and re-entry scenarios.

#### 3.2.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Defines an enhanced five-phase planning workflow with parallel exploration and multi-agent planning, including initial understanding, design, review, implementation, and approval phases.

#### 3.2.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Describes an iterative pair-planning workflow where Claude explores code, updates a plan file incrementally, and asks clarifying questions until the plan is complete.

#### 3.2.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instructions for subagents, restricting edits to the plan file and read-only operations while allowing clarifying questions.

#### 3.2.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, requiring evaluation of existing plan against new request and deciding whether to continue or start fresh.

#### 3.2.5 [Plan mode approval tool enforcement (System Reminder)](system-prompts/system-reminder-plan-mode-approval-tool-enforcement.md)

Enforces that plan mode turns must end with either AskUserQuestion for clarification or ExitPlanMode for approval, forbidding approval requests via other methods.

#### 3.2.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

#### 3.2.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and full tool and edit capabilities are now available.

#### 3.2.8 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transition into plan mode to explore codebase and design implementation approaches for user approval before writing code, recommended for non-trivial tasks with multiple valid approaches or architectural decisions.

#### 3.2.9 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of plan file and request user approval for implementation approach; do not use for research or information-gathering tasks.

#### 3.2.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans through codebase exploration and pattern analysis. Read-only mode; identifies critical files and architectural trade-offs without modifying code.

#### 3.2.11 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore codebases, produce diagram-rich implementation plans via ExitPlanMode, and handle approval, rejection, or teleportation workflows without spawning subagents.

#### 3.2.12 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Configures remote planning sessions to explore codebases with Glob and Grep, produce implementation plans via ExitPlanMode, and handle approval, rejection, or teleportation back to user's terminal.

#### 3.2.13 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Activates multi-agent planning mode where Claude spawns parallel agents to explore codebase architecture, identify files for modification, and assess risks, then synthesizes findings into a detailed implementation plan with critique feedback before execution or local teleportation.

### 3.3 Autonomous Execution and Batch Refactoring

Continuous autonomous operation for established tasks and large-scale parallelizable codebase transformations executed by isolated worker agents.

#### 3.3.1 Autonomous & Auto Mode Execution

Frameworks for continuous autonomous operation where Claude executes work immediately with minimal interruption, advancing established tasks like PR maintenance and CI resolution while respecting safety boundaries around destructive actions. Includes rule validation to ensure auto-mode classifiers are clear and conflict-free.

##### 3.3.1.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Defines continuous autonomous execution mode where Claude should execute immediately, minimize interruptions, prefer action over planning, and avoid destructive or data-exfiltrating actions without explicit user confirmation.

##### 3.3.1.2 [Autonomous loop check (System Prompt)](system-prompts/system-prompt-autonomous-loop-check.md)

Guides Claude during timer-based autonomous invocations to advance established work—finishing in-progress PRs, addressing review comments, fixing CI failures, and resolving merge conflicts—while avoiding inventing new work. Emphasizes trust preservation and provides guidance for repeated idle checks.

##### 3.3.1.3 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for Claude Code, evaluating clarity, completeness, conflicts, and actionability across allow, soft_deny, and environment rule categories.

#### 3.3.2 Batch Processing & Large-Scale Refactoring

Orchestrates parallelizable codebase transformations by decomposing work into independent, mergeable units executed by isolated worker agents, with coordinated planning and testing workflows.

##### 3.3.2.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes through three phases: research and planning in plan mode, spawning independent worker agents with worktree isolation, and tracking progress across units. Decomposes work into 5-30 self-contained, independently mergeable units.

##### 3.3.2.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines post-implementation workflow for workers: simplify changes, run unit tests, execute e2e tests, commit and push, then report PR status.

### 3.4 Safety, Verification, and Completion

Guardrails requiring consequence evaluation before destructive actions, post-implementation plan verification, and approach validation against conversation context.

#### 3.4.1 Safety & Action Risk Assessment

Guardrails that require Claude to evaluate action consequences before execution, requesting confirmation for destructive or hard-to-reverse operations and escalating when safety checks conflict with task requirements.

##### 3.4.1.1 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Requires Claude to assess reversibility and blast radius before executing actions, requesting user confirmation for destructive, hard-to-reverse, or shared-state operations like force-pushes, deletions, and external notifications, while investigating root causes rather than bypassing safety checks.

##### 3.4.1.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Defines constraints when tool execution is denied, allowing reasonable workarounds but prohibiting malicious bypasses, with escalation to user if capability is essential.

#### 3.4.2 Plan Verification & Completion Checking

Post-implementation verification that confirms all planned items were executed correctly, ensuring quality assurance before marking work complete.

##### 3.4.2.1 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to call the verification tool directly after completing plan implementation to confirm all items were completed correctly.

#### 3.4.3 Advisor Tool & Decision Support

Consultation mechanism that validates approach decisions against full conversation context, surfacing conflicts between evidence and recommendations for explicit reconciliation before proceeding.

##### 3.4.3.1 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructs Claude to call the advisor tool before substantive work, when stuck, or when considering approach changes. The advisor sees full conversation history and tool calls; Claude should weight advice seriously but surface conflicts between evidence and suggestions for reconciliation.

---

## 4. Multi-Agent Orchestration and Scheduling

Frameworks for coordinating parallel agent teams, delegating work to subagents, monitoring background jobs, managing tasks, and scheduling recurring automation.

### 4.1 Agent Teams and Subagent Delegation

Creating and managing parallel agent teams with shared task lists, and delegating self-contained work units to independent subagents.

#### 4.1.1 Multi-Agent Team Coordination

Establishes and manages parallel teams of agents working on complex projects, coordinating via shared task lists and inter-agent messaging. Teams operate with graceful lifecycle management—agents idle between turns and receive messages automatically, with cleanup on completion.

##### 4.1.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

TeamCreate establishes multi-agent teams for parallel work on complex projects, creating team config and task list directories. Teams coordinate via TaskList, SendMessage, and TaskUpdate; teammates go idle between turns (normal behavior) and receive messages automatically. Always refer to teammates by name, never UUID.

##### 4.1.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

TeamDelete removes team and task directories after swarm work completes, cleaning up `~/.claude/teams/{team-name}/` and `~/.claude/tasks/{team-name}/`. It fails if active members remain; gracefully terminate teammates first.

##### 4.1.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

SendMessageTool enables inter-agent communication in team workflows by sending messages to named teammates. Plain text output is not visible to other agents; all communication must use this tool, which automatically delivers incoming messages without requiring inbox checks.

##### 4.1.1.4 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity as a team member with access to team configuration and task lists, instructing it to communicate with teammates by name and report to the team lead.

##### 4.1.1.5 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully and clean up before returning a final response to the user in non-interactive mode.

#### 4.1.2 Subagent Spawning & Delegation

Patterns for delegating work to independent subagents with self-contained prompts, managing foreground and background execution, and verifying results before reporting. Supports parallel task launches with worktree isolation and context protection.

##### 4.1.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance for spawning and managing subagents, including foreground vs. background execution, resumption via messaging, worktree isolation, parallel agent launches, and verification of agent results before reporting completion.

##### 4.1.2.2 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results with independent agent types for fresh context.

##### 4.1.2.3 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates self-contained prompt patterns for delegating tasks to subagents with clear goals, context, and response constraints.

##### 4.1.2.4 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Guidelines for writing effective subagent prompts that provide context, explain goals, and avoid delegating understanding or synthesis to the agent.

##### 4.1.2.5 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Guides Claude on when to use subagents effectively for parallelizing independent queries and protecting context, while avoiding duplication of work.

##### 4.1.2.6 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for open-ended work, prohibits reading fork output mid-flight or fabricating results, and requires treating fork completion notifications as user-role messages rather than self-generated summaries.

##### 4.1.2.7 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

Forked worker subagent that executes a single directive from the parent agent and reports back concisely without spawning further subagents.

##### 4.1.2.8 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases. Reports findings concisely without creating unnecessary files.

### 4.2 Background Job Monitoring and Task Tracking

Classifying background agent state, streaming progress events, and maintaining structured task lists with dependency ordering across complex sessions.

#### 4.2.1 Background Job & Agent State Management

Monitors long-running background agents by classifying transcript state (working, blocked, done, failed) and streaming stdout events. Agents narrate progress and signal completion via structured status headlines, enabling async workflow tracking and classifier integration.

##### 4.2.1.1 [Background job behavior (System Prompt)](system-prompts/system-prompt-background-job-behavior.md)

Instructs background job agents to narrate progress before and after work chunks, restate results in message text for classifier extraction, and signal completion status with `result:` headlines, `blocked` for unblocking conditions, or `failed` for structural impossibilities.

##### 4.2.1.2 [Background session instructions (System Prompt)](system-prompts/system-prompt-background-session-instructions.md)

Instructs background job sessions to use the job-specific temporary directory instead of /tmp to avoid file clobbering between parallel jobs, and to follow worktree isolation guidance.

##### 4.2.1.3 [Background agent state classifier (Agent Prompt)](system-prompts/agent-prompt-background-agent-state-classifier.md)

Classifies background agent transcript tails into working, blocked, done, or failed states with JSON output including detail, tempo, and user-actionable needs. Handles edge cases like external waits, API errors, and scope caveats.

##### 4.2.1.4 [Background agent state classification examples (Data)](system-prompts/data-background-agent-state-classification-examples.md)

Example classifications of background agent state (working, blocked, done, failed) with JSON outputs showing detail, tempo, needs, and results.

##### 4.2.1.5 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Describes background monitoring of long-running scripts via stdout event streaming, with guidance on script quality, line buffering, poll intervals, failure coverage, and output volume control to avoid excessive notifications.

#### 4.2.2 Task & Todo Management

Structured task tracking for multi-step coding work, organizing progress across complex sessions and enabling teams to discover and claim pending work. Tasks maintain explicit states (in-progress, complete) and respect dependency ordering.

##### 4.2.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

TodoWrite creates and manages structured task lists for coding sessions, tracking progress across multi-step work. Use it for complex tasks (3+ steps), user-provided lists, or when starting work; skip for single straightforward tasks. Maintain exactly one in_progress task and mark completions immediately.

##### 4.2.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

TaskCreate organizes complex multi-step coding tasks into a structured list, tracking progress and demonstrating thoroughness. Use it for tasks requiring 3+ steps, non-trivial work, plan mode, or when users provide multiple requirements; skip it for single straightforward tasks.

##### 4.2.2.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

In team workflows, teammates use TaskList to discover pending unassigned work after completing tasks, preferring lowest ID first to respect task dependencies. They claim work via TaskUpdate and notify the team lead if blocked.

##### 4.2.2.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Reminds Claude to use task creation and update tools for tracking work progress, with instructions to never mention this reminder to the user.

##### 4.2.2.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Reminds Claude to use the TodoWrite tool for task tracking when relevant, with instructions to never mention this reminder to the user.

##### 4.2.2.6 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite for breaking down work and tracking progress, marking tasks complete immediately upon completion.

### 4.3 Scheduling & Cron Automation

Schedules recurring or one-time tasks using cron syntax and dynamic loop modes, with cache-aware delay selection and proactive follow-up offers. Supports both cloud-based scheduling and self-paced local loops with event-driven wake signals.

#### 4.3.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron-based jobs using standard 5-field cron syntax in user's local timezone, with guidance to avoid :00 and :30 minute marks for load distribution and optional durability for persistence across sessions.

#### 4.3.2 [ScheduleWakeup (/loop dynamic mode) [Tool Description]](system-prompts/tool-description-schedulewakeup-loop-dynamic-mode.md)

Schedule next iteration in /loop dynamic self-paced mode, passing loop prompt or autonomous-loop sentinel to resume task at specified time.

#### 4.3.3 [Snooze (delay and reason guidance) [Tool Description]](system-prompts/tool-description-snooze-delay-and-reason-guidance.md)

ScheduleWakeup schedules task resumption in dynamic loop mode, with guidance on choosing delaySeconds relative to the 5-minute prompt cache TTL. Delays under 270s preserve cache; longer delays (1200s–1800s) amortize cache misses for idle work. The reason field should specify what is being awaited.

#### 4.3.4 [Schedule proactive offer guidance (Tool Description)](system-prompts/tool-description-schedule-proactive-offer-guidance.md)

Schedule recurring or one-time remote agents for future work, and proactively offer scheduling after completing work with natural follow-ups like feature rollouts or cleanup tasks.

#### 4.3.5 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts the interval to a cron expression, schedules a recurring task, and immediately executes the prompt without waiting for the first cron fire.

#### 4.3.6 [/loop slash command (dynamic mode) [Skill]](system-prompts/skill-loop-slash-command-dynamic-mode.md)

Parses user input into an interval and prompt for scheduling recurring or dynamically self-paced loop executions, with fallback to dynamic mode when no interval is specified.

#### 4.3.7 [/loop self-pacing mode (Skill)](system-prompts/skill-loop-self-pacing-mode.md)

Instructs Claude how to self-pace a recurring loop by arming event monitors as primary wake signals and scheduling fallback heartbeat delays between iterations.

#### 4.3.8 [/loop cloud-first scheduling offer (Skill)](system-prompts/skill-loop-cloud-first-scheduling-offer.md)

Decision tree for offering cloud-based scheduling before falling back to local session loops, routing to the schedule skill when appropriate.

#### 4.3.9 [Dynamic pacing loop execution (Skill)](system-prompts/skill-dynamic-pacing-loop-execution.md)

Instructions for executing a self-pacing loop that runs tasks, arms persistent event monitors as primary wake signals, schedules fallback heartbeat delays, and handles task notifications.

#### 4.3.10 [Schedule recurring cron and execute immediately (compact) [Skill]](system-prompts/skill-schedule-recurring-cron-and-execute-immediately-compact.md)

Creates a recurring cron job, confirms the schedule with the user, and immediately executes the parsed prompt without waiting for the first cron fire.

#### 4.3.11 [Schedule recurring cron and run immediately (Skill)](system-prompts/skill-schedule-recurring-cron-and-run-immediately.md)

Converts an interval to a cron expression, schedules a recurring task, confirms to the user, and immediately executes the task without waiting for the first cron fire.

#### 4.3.12 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing schedules, creating a cron task, confirming details, and running an immediate consolidation.

#### 4.3.13 [Proactive schedule offer after follow-up work (System Prompt)](system-prompts/system-prompt-proactive-schedule-offer-after-follow-up-work.md)

Instructs Claude to offer scheduling background agents for natural follow-up actions after completing work, with high-confidence signals like feature flags, soak windows, temp workarounds, and recurring sweeps.

#### 4.3.14 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers or one-time runs via Anthropic's cloud API, handling environment selection, MCP connector validation, and timezone conversion.

#### 4.3.15 [Loop wakeup not scheduled (System Reminder)](system-prompts/system-reminder-loop-wakeup-not-scheduled.md)

Instructs Claude on handling /loop dynamic mode wakeups that were not scheduled, including when to re-issue with the prompt field and when to terminate the loop.

### 4.4 Agent Invocation & Mention Handling

Mechanisms for detecting and routing user requests to specific agent types, passing necessary context to enable appropriate agent execution.

#### 4.4.1 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that user wants to invoke a specific agent type and instructs appropriate invocation with required context.

---

## 5. Memory, Sessions, and Context Management

Persistent memory systems, session continuity, conversation summarization, and context tracking that enable agents to maintain knowledge across interactions.

### 5.1 Persistent Memory and Consolidation

File-based memory storage for user profiles and project context, plus nightly consolidation of session logs into durable memory topics with deduplication and pruning.

#### 5.1.1 Memory Management & Persistence

File-based persistent memory system that stores user profiles, feedback, project context, and reference material across sessions. Includes deduplication rules, staleness verification against current state, and selective retrieval mechanisms that extract relevant facts while avoiding false positives.

##### 5.1.1.1 [Memory instructions (System Prompt)](system-prompts/system-prompt-memory-instructions.md)

Establishes file-based memory system with frontmatter format for four types (user, feedback, project, reference), deduplication rules, staleness handling, and guidelines to avoid duplicating information already in code or git history.

##### 5.1.1.2 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs Claude to verify recalled memories against current file state before acting on them, deleting stale memories that conflict with observed reality and saving fresh ones if needed.

##### 5.1.1.3 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about the user's role, goals, knowledge, and preferences across sessions, enabling Claude to tailor collaboration to the individual.

##### 5.1.1.4 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes feedback memory as user guidance on work approaches from both successes and failures, requiring verification against team memories and explicit notation of contradictions.

##### 5.1.1.5 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Defines feedback memory as guidance on work approaches captured from both successes and failures, requiring checks for contradictions with team feedback before saving and explicit notation of overrides.

##### 5.1.1.6 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines the description field for user memories to capture role, goals, responsibilities, and knowledge, enabling tailored future behavior while avoiding negative judgements.

##### 5.1.1.7 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Presents the contents of a memory file by path with type description.

##### 5.1.1.8 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays contents of a nested memory file structure.

##### 5.1.1.9 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files for Claude Code based on query context, avoiding false-positive matches on keywords and being conservative with user-profile and project-overview memories.

##### 5.1.1.10 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and extracts relevant facts (max 7) for each query, returning JSON with facts and cited filenames. Facts avoid re-asking, apply preferences, maintain continuity, and prevent known pitfalls.

##### 5.1.1.11 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary files covering current state, task specification, files, workflow, errors, and key results.

##### 5.1.1.12 [User profile memory template (Data)](system-prompts/data-user-profile-memory-template.md)

Template for user profile memory covering personal details, work context, schedule, and communication preferences.

#### 5.1.2 Dream Memory Consolidation

Nightly housekeeping process that consolidates session logs and transcripts into durable memory topics, reconciles stored memories against current instructions, prunes stale entries, and maintains a compact index. Handles team-shared memories conservatively to prevent accidental overwrites.

##### 5.1.2.1 [/dream memory consolidation (Skill)](system-prompts/skill-dream-memory-consolidation.md)

Nightly housekeeping job that consolidates session logs and transcripts into persistent memory topics, learnings, and a pruned MEMORY.md index under 200 lines.

##### 5.1.2.2 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing files, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to maintain durable, well-organized memories.

##### 5.1.2.3 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs memory pruning by deleting stale or invalidated memory files and collapsing duplicates, with conservative handling of team-shared memories.

##### 5.1.2.4 [Dream CLAUDE.md memory reconciliation (System Prompt)](system-prompts/system-prompt-dream-claudemd-memory-reconciliation.md)

Guides dream consolidation to reconcile stored memories against CLAUDE.md instructions, deleting stale memories when procedures diverge, flagging contradictions for user review, and preserving context-rich memories that add detail beyond the checked-in source.

##### 5.1.2.5 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Establishes conservative rules for managing shared team memories during dream consolidation, prioritizing deduplication and avoiding deletion of teammate-owned notes unless clearly contradicted by current code, while preventing accidental promotion of personal memories to team scope.

### 5.2 Session Naming & Management

Tools for generating human-readable session titles, searching past conversations by transcript content, and managing session state across machines. Restores context from prior invocations and provides session continuity metadata.

#### 5.2.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise sentence-case session titles (3-7 words) that capture the main topic so users recognize sessions in lists.

#### 5.2.2 [/rename auto-generate session name (Agent Prompt)](system-prompts/agent-prompt-rename-auto-generate-session-name.md)

Auto-generates kebab-case session names (2-4 words) from conversation context, returning JSON with a name field.

#### 5.2.3 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent that searches past Claude Code conversation sessions by scanning .jsonl transcript files and returning matching session IDs ordered by relevance.

#### 5.2.4 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

#### 5.2.5 [Previously invoked skills (System Reminder)](system-prompts/system-reminder-previously-invoked-skills.md)

Restores context of skills invoked before conversation compaction, warning Claude not to re-execute setup actions or treat prior inputs as current instructions.

### 5.3 Conversation Summarization and Context Tracking

Structured conversation summarization for token-efficient context compression, and mechanisms for preserving institutional knowledge and detecting state changes between sessions.

#### 5.3.1 Conversation Summarization & Context Compaction

Structured summarization of conversations into nine standardized sections covering intent, technical concepts, code changes, errors, problem-solving approaches, and next steps. Enables efficient context compression when conversation history exceeds token limits while preserving continuation context.

##### 5.3.1.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections: primary intent, technical concepts, files/code, errors/fixes, problem-solving, user messages, pending tasks, current work, and next steps. Includes analysis phase to ensure accuracy and completeness.

##### 5.3.1.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages (after retained context) into nine sections: intent, concepts, files/code, errors, problem-solving, user messages, pending tasks, current work, and next steps.

##### 5.3.1.3 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Instructs Claude to create detailed conversation summaries for partial compaction with structured analysis covering primary requests, technical concepts, files, errors, problem-solving, user messages, pending tasks, completed work, and continuation context.

##### 5.3.1.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for generating continuation summaries during context compaction, structured to include task overview, current state, discoveries, next steps, and context to preserve for efficient resumption.

##### 5.3.1.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before conversation summarization but is too large to include, directing use of Read tool if needed.

#### 5.3.2 Session Memory & Context Tracking

Mechanisms for preserving conversational context and institutional knowledge across sessions. Session memory updates capture actionable information from interactions while periodic background tasks detect state changes and surface relevant updates, enabling agents to build and maintain domain-specific knowledge over time.

##### 5.3.2.1 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations, preserving structure and headers while adding detailed, actionable information from user interactions.

##### 5.3.2.2 [/catch-up periodic heartbeat (Skill)](system-prompts/skill-catch-up-periodic-heartbeat.md)

Periodic background task that scans tracked priorities, detects state changes, and surfaces actionable updates or stays silent by default, respecting quiet hours and updating persistent state for future runs.

##### 5.3.2.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including domain-specific memory update instructions in agent system prompts, with examples for code reviewers, test runners, architects, and documentation writers to build institutional knowledge across conversations.

---

## 6. Claude API, SDKs, and Application Development

Reference materials and guides for building Claude-powered applications, covering API access, managed agent infrastructure, streaming, tool use, and multi-language SDKs.

### 6.1 Claude API Core Reference

Model specifications, prompt caching, error handling, streaming, tool use, batch processing, and the Files API for multimodal document handling.

#### 6.1.1 Claude API: Tool Use, Streaming & Batches

Tool use enables agentic loops through manual or automated tool runners with structured outputs and server-side execution. Streaming provides real-time response handling, while the Batches API processes high-volume requests asynchronously at 50% cost reduction. The Files API manages document uploads for multimodal processing.

##### 6.1.1.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice, tool runner vs manual loops, and server-side tools.

##### 6.1.1.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner, manual agentic loop, code execution, MCP conversion, and structured outputs.

##### 6.1.1.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference including tool runner, manual agentic loop, code execution, and structured outputs with Zod schemas.

##### 6.1.1.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference including sync/async streaming, handling different content types, tool use, and error handling.

##### 6.1.1.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, handling different content types, tool use, and event types.

##### 6.1.1.6 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API covering batch creation, status polling, result retrieval, and 50% cost reduction on token usage.

##### 6.1.1.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, listing, deletion, and usage in messages with PDFs, documents, and images.

##### 6.1.1.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript reference for the Files API including file upload, listing, deletion, and usage in Messages API requests with code examples.

#### 6.1.2 Claude API: Models, Caching & Infrastructure

Reference materials for Claude API operations, including model specifications and capability discovery, prompt caching optimization patterns, HTTP error handling, live documentation sources, and CLI tooling for control-plane automation.

##### 6.1.2.1 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and retired Claude models with exact IDs, context windows, max output tokens, and programmatic capability discovery via the Models API.

##### 6.1.2.2 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Guide on designing prompt-building code for effective caching, including placement patterns, silent invalidators, and architectural decisions.

##### 6.1.2.3 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400–529) with causes, fixes, and SDK exception handling patterns.

##### 6.1.2.4 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for current Claude API, Managed Agents, and SDK documentation from official sources when cached content may be outdated.

##### 6.1.2.5 [Anthropic CLI (Data)](system-prompts/data-anthropic-cli.md)

Reference documentation for the ant CLI covering installation, authentication, command structure, input/output shaping, managed agents workflows, and scripting patterns for control-plane operations.

### 6.2 Claude API Reference: Language SDKs

Comprehensive SDK documentation across eight languages provides consistent interfaces for Claude API access, covering client initialization, streaming, vision, prompt caching, extended thinking, tool use, and cost optimization patterns.

#### 6.2.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client configuration, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization.

#### 6.2.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization.

#### 6.2.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, basic requests, streaming, tool use with BetaToolRunner, thinking, prompt caching, and server-side tools.

#### 6.2.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking, tool use with annotated classes and BetaToolRunner, effort parameter, and structured output.

#### 6.2.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, tool use with beta tool runner, and prompt caching.

#### 6.2.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including client initialization, basic requests, streaming, tool use with BetaRunnableTool, extended thinking, prompt caching, and structured outputs.

#### 6.2.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use, effort parameter, prompt caching, structured output, and server-side tools.

#### 6.2.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming, tool use, prompt caching, and extended thinking with required headers.

### 6.3 Managed Agents Infrastructure

Architecture and SDK/API reference for long-running managed agent sessions with versioning, credential vaults, MCP integration, and multi-language programmatic control.

#### 6.3.1 Managed Agents: Core Concepts & Architecture

Managed Agents provide a structured architecture for long-running agent sessions with mandatory agent-then-session initialization, covering environments, memory stores, tools, and resource management. The system supports versioning, persistence, credential vaults, and MCP integration across containerized execution contexts.

##### 6.3.1.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Overview of Managed Agents architecture, the mandatory agent-then-session flow, beta headers, documentation guide, and common pitfalls.

##### 6.3.1.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Core concepts for Managed Agents covering Agents, Sessions, Environments, Containers, lifecycle, versioning, and the mandatory agent-then-session flow.

##### 6.3.1.3 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference for Managed Agents environments, file resources, GitHub repository mounting, and Files API with networking and mount path configuration.

##### 6.3.1.4 [Managed Agents memory stores reference (Data)](system-prompts/data-managed-agents-memory-stores-reference.md)

Reference for Managed Agents memory stores covering creation, session attachment, FUSE mounts, CRUD operations, versioning, and redaction.

##### 6.3.1.5 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference for Managed Agents tool types (agent toolset, MCP, custom), permission policies, vault credential management, and skills API.

#### 6.3.2 Managed Agents: API Reference & SDK

Multi-language SDKs and HTTP APIs enable programmatic control of Managed Agent lifecycles, streaming interactions, and event-driven session management. Implementations span Python, TypeScript, Go, Java, Ruby, PHP, C#, and raw cURL, with unified patterns for tool execution, file handling, and real-time event steering.

##### 6.3.2.1 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Python SDK reference for Managed Agents covering agent creation, sessions, streaming, custom tools, file uploads, and MCP server integration.

##### 6.3.2.2 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

TypeScript SDK reference for Managed Agents covering agent creation, sessions, streaming, custom tools, file uploads, and MCP server integration.

##### 6.3.2.3 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

cURL and raw HTTP request examples for Managed Agents API including environment, agent, and session lifecycle operations.

##### 6.3.2.4 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive endpoint reference for Managed Agents API covering all resources, SDK methods, request/response schemas, and rate limits.

##### 6.3.2.5 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Guide for sending and receiving events on Managed Agent sessions including streaming, polling, reconnection, message queuing, and interrupts.

##### 6.3.2.6 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Common client-side patterns for driving Managed Agent sessions including stream reconnection, tool confirmations, interrupts, and custom tools.

##### 6.3.2.7 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview script for configuring Managed Agents from scratch, covering tool selection, MCP servers, skills, files, environment settings, and vault credentials. Emits YAML configs and working SDK code for setup and runtime.

### 6.4 Application Design and Integration Guides

Guidance for designing Claude-powered applications, selecting API surfaces, managing context, migrating models, and integrating with GitHub CI/CD pipelines.

#### 6.4.1 Building LLM Applications: Skills & Guides

Comprehensive guidance for developing Claude-powered applications, covering API surface selection, agent design patterns, context management strategies, model migration procedures, and task-specific documentation routing.

##### 6.4.1.1 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Comprehensive guide for building Claude-powered applications, including language detection, API surface selection (Claude API vs. Managed Agents), model defaults, adaptive thinking configuration, and language-specific documentation reading with per-language feature support matrices.

##### 6.4.1.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Quick-reference navigation guide for language-specific Claude API documentation, mapping common tasks (streaming, batches, tool-use, agents, caching) to the appropriate documentation files.

##### 6.4.1.3 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide for building agents on the Claude API, covering tool surface design (bash vs. dedicated tools), context management strategies (editing, compaction, memory), caching constraints and workarounds, and programmatic tool calling for efficient multi-step workflows.

##### 6.4.1.4 [Model migration guide (Skill)](system-prompts/skill-model-migration-guide.md)

Step-by-step instructions for migrating existing code to newer Claude models (Opus 4.7, Opus 4.6, Sonnet 4.6), covering breaking changes, deprecated parameters, per-SDK syntax, prompt-behavior shifts, and comprehensive migration checklists.

##### 6.4.1.5 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with code examples and feature discovery.

#### 6.4.2 GitHub Integration & CI/CD

Templates and workflows for integrating Claude Code into GitHub environments, enabling automated triggering and collaborative development through GitHub Actions and App installation.

##### 6.4.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code integration when @claude is mentioned in issues, PRs, or comments.

##### 6.4.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing the Claude Code GitHub App integration, explaining capabilities and security considerations.

---

## 7. Tools, Configuration, and User Interaction

Browser automation, hooks, project configuration, skill systems, web retrieval, and the full range of tools and UX patterns governing how Claude interacts with users and external systems.

### 7.1 Browser Automation and Web Retrieval

Chrome browser control via mouse and keyboard, plus real-time web search and URL fetching with source attribution.

#### 7.1.1 Browser Automation & Computer Use

Chrome browser control via mouse and keyboard interaction with screenshot capture and element targeting. Batch execution consolidates multiple operations into single round trips; MCP tools provide tiered app access and safety protocols for link handling and financial restrictions.

##### 7.1.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Interact with Chrome browser using mouse and keyboard, taking screenshots and clicking elements with cursor precision.

##### 7.1.1.2 [BrowserBatch (Tool Description)](system-prompts/tool-description-browserbatch.md)

Execute multiple browser tool calls sequentially in one round trip, stopping on first error and respecting permission checks per item.

##### 7.1.1.3 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Computer action parameter defines mouse and keyboard interactions for Chrome browser control, including clicks, typing, scrolling, key presses, dragging, zooming, and hover actions.

##### 7.1.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, with specific syntax for selecting and calling tools like tabs_context_mcp.

##### 7.1.1.5 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for browser automation including GIF recording with extra frames, console log debugging with regex patterns, avoiding JavaScript dialogs that block commands, and checking tab context at session start to avoid reusing stale tab IDs.

##### 7.1.1.6 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools with tiered app access (read/click/full), tool selection hierarchy (dedicated MCP → Chrome MCP → computer-use), link safety protocols, and restrictions on financial actions.

#### 7.1.2 Web Content: Fetch & Search

Real-time web information retrieval through direct URL fetching and search queries, with built-in caching, markdown conversion, and mandatory source attribution for current information beyond training data.

##### 7.1.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

WebFetch retrieves and analyzes web content by fetching a URL, converting HTML to markdown, and processing it with a small model. It includes a 15-minute cache, handles redirects, and prefers MCP-provided alternatives when available.

##### 7.1.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

WebSearch provides up-to-date information beyond Claude's knowledge cutoff by searching the web and returning results as markdown hyperlinks. Responses must include a mandatory Sources section listing all relevant URLs; use current year in queries.

##### 7.1.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose WebFetch output for the main model, enforcing quote limits and attribution rules for untrusted domains.

### 7.2 Hooks, Configuration, and Project Setup

Event-driven hook system for intercepting tool execution, plus CLAUDE.md project configuration, settings management, and permission allowlists.

#### 7.2.1 Hooks System: Configuration & Lifecycle

Event-driven hook system that intercepts Claude Code execution at lifecycle points (permission requests, tool use, completion) to control tool behavior, block actions, inject context, and evaluate stop conditions. Supports command, prompt, and agent hook types with structured JSON schemas.

##### 7.2.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines hook lifecycle events (PermissionRequest, PreToolUse, PostToolUse, etc.) and three hook types—command, prompt, and agent—with JSON input/output schemas for controlling tool behavior, blocking actions, and injecting context at specific points in Claude Code's execution.

##### 7.2.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context information from a hook execution.

##### 7.2.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 7.2.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude when a hook stops continuation with an associated message.

##### 7.2.1.5 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix template for messages when a hook stops continuation.

##### 7.2.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook with its output content.

##### 7.2.1.7 [Stop hook blocking error (System Reminder)](system-prompts/system-reminder-stop-hook-blocking-error.md)

Reports an error from a blocking stop hook command execution.

##### 7.2.1.8 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks in Claude Code by judging whether user-provided conditions are satisfied, returning JSON with ok/reason fields and transcript evidence.

#### 7.2.2 CLAUDE.md & Project Configuration

Setup and maintenance workflows for Claude Code project configuration, including CLAUDE.md documentation, settings.json hooks, permission allowlists, and verification flows. Emphasizes careful merging of existing configurations and proof-of-execution validation.

##### 7.2.2.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md, skills, and hooks in a repository, including codebase exploration, user interviews, iterative proposal refinement, and optimization suggestions.

##### 7.2.2.2 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Guides Claude through modifying Claude Code's settings.json configuration, with emphasis on reading existing files before writing, merging arrays carefully, and distinguishing when hooks are needed versus simple settings. Includes workflows for adding hooks, permissions, and environment variables with common mistake avoidance.

##### 7.2.2.3 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

A seven-step process for constructing and verifying hooks in Claude Code settings, from deduplication checks through pipe-testing raw commands, JSON validation, and proof-of-execution. Emphasizes catching failures early and handling the settings watcher's directory-watching limitations.

##### 7.2.2.4 [Generate permission allowlist from transcripts (Skill)](system-prompts/skill-generate-permission-allowlist-from-transcripts.md)

Analyzes session transcripts to extract frequently used read-only tool patterns and adds them to the project's permission allowlist, reducing permission prompts while avoiding arbitrary code-execution patterns.

##### 7.2.2.5 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

### 7.3 Skills, Tool Discovery, and MCP

Reusable skill workflows invoked via slash commands, runtime tool schema discovery, and Model Context Protocol resource integration.

#### 7.3.1 Skill System: Invocation & Creation

Skills are reusable, specialized capabilities invoked through slash commands that block other responses until matched. The system extracts repeatable workflows from sessions through structured user interviews, producing SKILL.md files with execution steps and success criteria.

##### 7.3.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

The Skill tool invokes specialized capabilities and domain knowledge in response to user requests, including slash commands. It requires matching against available skills listed in system reminders and blocks other responses until the relevant skill is called.

##### 7.3.1.2 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through analyzing a session to extract repeatable processes, interviewing the user across four rounds to confirm goals and details, then writing a reusable SKILL.md file with structured steps, success criteria, and execution guidance.

#### 7.3.2 Tool Discovery & Dynamic Loading

Runtime resolution of tool schemas through keyword and name-based queries, enabling deferred tool invocation and dynamic capability discovery.

##### 7.3.2.1 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

ToolSearch fetches complete JSONSchema definitions for deferred tools by matching queries against a tool list. It supports exact name selection, keyword search, and name-requirement filtering, returning matched tools in a callable format.

#### 7.3.3 MCP Resources & Integration

Status indicators for Model Context Protocol resources that exist but lack displayable or substantive content.

##### 7.3.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates an MCP resource exists but contains no content.

##### 7.3.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates an MCP resource has content but nothing displayable to Claude.

### 7.4 User Interaction and Communication

Mechanisms for soliciting user input, delivering notifications, formatting output, and surfacing prompt suggestions across different execution modes.

#### 7.4.1 Communication Style & Output Formatting

Guidelines governing how Claude presents information across different contexts—from concise user-facing updates to formatted code references and end-of-turn summaries. Establishes consistent patterns for brevity, navigation aids, and behavioral expectations in agent threads.

##### 7.4.1.1 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs Claude to give brief user-facing updates at key moments, write concise end-of-turn summaries, match response format to task complexity, and avoid comments and planning documents in code.

##### 7.4.1.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number patterns when referencing code for easy navigation.

##### 7.4.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to provide short and concise responses.

##### 7.4.1.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads requiring absolute file paths, concise end-of-turn summaries with relevant code snippets only, emoji avoidance, and no colons before tool calls.

##### 7.4.1.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Instructs Claude to describe recent actions in 3-5 words using present tense, naming files or functions rather than branches, without tool use or repetition of previous summaries.

##### 7.4.1.6 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

#### 7.4.2 User Interaction & Question Tools

Mechanisms for Claude to solicit user input, present choices with visual context, and deliver work updates through structured messaging. Supports clarification requests, decision gathering, and checkpoint communication while maintaining appropriate interaction patterns across different execution modes.

##### 7.4.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use this tool for gathering user preferences, clarifying ambiguous instructions, and offering implementation choices during execution, with special handling for plan mode to avoid asking for plan approval via this tool.

##### 7.4.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Describes optional HTML preview field for single-select questions to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained fragments without script or style tags.

##### 7.4.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for presenting concrete artifacts like ASCII mockups, code snippets, diagrams, and configuration examples in single-select option questions.

##### 7.4.2.4 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to route all user-facing replies through SendUserMessage, acknowledging work before executing, sending checkpoints at decision boundaries, and keeping messages concise with specific details like file:line and PR numbers.

##### 7.4.2.5 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Send markdown message to user with file attachments from filesystem or device references, using status field to indicate intent.

#### 7.4.3 Notification & Push Alerts

Desktop and mobile notification delivery for high-priority events requiring immediate user attention, with guidance to minimize frequency and prevent notification fatigue.

##### 7.4.3.1 [PushNotification (Tool Description)](system-prompts/tool-description-pushnotification.md)

Send desktop notification to terminal and optionally to phone via Remote Control for significant events requiring user attention; use sparingly to avoid notification fatigue.

#### 7.4.4 Prompt Suggestions & UX Guidance

Predicts user intent from conversation context to surface relevant next-step suggestions, complemented by lightweight side-question handling that answers directly without tool invocation.

##### 7.4.4.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next in Claude Code based on conversation context, avoiding evaluative, question, or Claude-voice suggestions.

##### 7.4.4.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Configures lightweight side-question agent with no tools available, answering directly from conversation context in a single response without referencing background work.

---

## 8. Agent Identity, Operations, and Analytics

Core agent identity and harness behavior, operational modes, learning frameworks, terminal display, resource monitoring, debugging, team onboarding, and usage analytics.

### 8.1 Harness Identity and Reasoning

Foundation directives establishing Claude's software engineering role, tool execution modes, code reference conventions, and adaptive reasoning calibration.

#### 8.1.1 Harness & Core Agent Identity

Foundation directives establishing Claude's role as a software engineering agent within the harness environment, defining tool execution modes, output formatting, code reference conventions, and task interpretation strategies that ground abstract requests in actual codebase modifications.

##### 8.1.1.1 [Harness instructions (System Prompt)](system-prompts/system-prompt-harness-instructions.md)

Establishes core interactive-agent identity and harness behavior including GitHub-flavored markdown output, permission-mode tool execution, hook interception, context compaction, and clickable code references via file:line notation.

##### 8.1.1.2 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Instructs Claude to interpret user requests in the context of software engineering tasks like bug fixes, refactoring, and code modifications, applying generic instructions to actual code in the working directory rather than providing abstract answers.

##### 8.1.1.3 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Permits Claude to attempt ambitious tasks and defers to user judgment on scope appropriateness.

##### 8.1.1.4 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels.

##### 8.1.1.5 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel within a single response to maximize efficiency, while sequencing dependent tool calls.

#### 8.1.2 Thinking & Reasoning Configuration

Adaptive reasoning calibration that adjusts Claude's depth of analysis based on task complexity, treating system directives as harness-level instructions rather than conversational content.

##### 8.1.2.1 [Thinking frequency tuning (System Reminder)](system-prompts/system-reminder-thinking-frequency-tuning.md)

Instructs Claude to calibrate thinking frequency based on task complexity—responding directly for simple tasks and reasoning more deeply for complex ones—while treating system reminders as harness instructions.

### 8.2 Operational Modes and Learning

Minimal execution mode for lean controlled operation, learning and teaching frameworks that balance task completion with education, and agent creation workflows.

#### 8.2.1 Minimal Mode & Feature Configuration

Streamlined execution mode that strips non-essential features and requires explicit context provisioning through command-line arguments, enabling lean, controlled operation.

##### 8.2.1.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode that disables hooks, LSP, plugins, auto-memory, and background features while requiring explicit context via CLI flags for system prompts, CLAUDE.md, MCP config, and settings.

#### 8.2.2 Learning & Teaching Modes

Collaborative frameworks that balance task completion with education by embedding human decision points, providing codebase-specific insights, and offering guided step-by-step instruction when users prioritize learning over speed.

##### 8.2.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Establishes collaborative learning mode where Claude balances task completion with education by requesting human input on design decisions, business logic, and algorithms via Learn by Doing requests with TODO(human) markers, then shares insights connecting contributions to broader patterns.

##### 8.2.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code changes, focusing on implementation choices and codebase-specific patterns rather than general programming concepts.

##### 8.2.2.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Request permission to guide user through task step-by-step using fullscreen tooltip overlays when user wants to learn.

#### 8.2.3 Agent Creation & Design

Processes for architecting custom AI agents through intent extraction, persona design, and system prompt optimization. Produces complete agent configurations with usage context and operational guidance, grounded in consistent voice and values.

##### 8.2.3.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces JSON output with agent identifier, usage context with examples, and a complete operational system prompt.

##### 8.2.3.2 [Assistant voice and values template (Data)](system-prompts/data-assistant-voice-and-values-template.md)

Template describing Claude's voice, values, and communication style emphasizing directness, honesty, collaboration, and respect for user time and attention.

### 8.3 Terminal Display and Resource Monitoring

Terminal status line customization for session metadata visibility, and real-time token and budget consumption tracking against resource limits.

#### 8.3.1 Status Line & Terminal Display

Terminal status line customization that surfaces session metadata, model information, and token accounting within shell prompts for real-time operational visibility.

##### 8.3.1.1 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by converting shell PS1 configurations and creating custom status commands with session context, model info, and token usage.

#### 8.3.2 Resource & Budget Monitoring

Real-time consumption tracking for tokens and USD budget, displaying usage against limits to maintain awareness of resource constraints during extended interactions.

##### 8.3.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 8.3.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

### 8.4 Debugging, Analytics, and Team Operations

Diagnostic tools for session failures and performance issues, usage analytics for workflow optimization, team onboarding resources, daily briefings, and calendar integration.

#### 8.4.1 Debugging & Troubleshooting

Diagnostic capabilities for identifying and resolving Claude Code session failures, including error log analysis, process monitoring, and performance bottleneck detection with actionable remediation guidance.

##### 8.4.1.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Helps users debug Claude Code session issues by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 8.4.1.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, high CPU, I/O hangs, and memory leaks, then posts diagnostic reports to Slack.

#### 8.4.2 Insights & Usage Analytics

Analysis and reporting tools that extract session patterns, identify friction points, surface optimization opportunities, and generate actionable recommendations for improving Claude Code workflows.

##### 8.4.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary covering what's working, hindrances (Claude-side and user-side), quick wins from Claude Code features, and ambitious workflows for future capable models, using coaching tone without numerical stats.

##### 8.4.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes usage data to identify and categorize friction patterns with 3 categories and 2 examples each, helping users understand recurring issues and what could be done differently.

##### 8.4.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future opportunities for autonomous AI-assisted development workflows, including what's possible, how to try it, and copyable prompts for experimentation.

##### 8.4.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from session transcripts including goal categories (user-requested only), satisfaction signals, and friction types, with strict guidelines to avoid counting autonomous Claude work or inferring satisfaction from silence.

##### 8.4.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions (prioritizing repeated user guidance), features to try from MCP Servers, Custom Skills, Hooks, Headless Mode, and Task Agents, plus usage patterns with copyable prompts tailored to the user's sessions.

##### 8.4.2.6 [/insights report output (Skill)](system-prompts/skill-insights-report-output.md)

Formats and displays the insights usage report results after the user runs the /insights slash command, showing a shareable report URL and inviting further exploration.

#### 8.4.3 Onboarding & Team Setup

Resources for introducing teams to Claude Code environments, including setup checklists, configuration guidance, and collaborative guide generation based on team usage patterns.

##### 8.4.3.1 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding new teammates to a team's Claude Code setup, walking them through usage stats, setup checklists, MCP servers, skills, and team tips in a warm conversational style.

##### 8.4.3.2 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides (ONBOARDING.md) by analyzing usage data, classifying session types into work categories, and iteratively refining the guide with user feedback on team name, starter tasks, and tips.

#### 8.4.4 Daily Briefing & Calendar Integration

Scheduled tasks that synchronize calendar events with work preparation, delivering daily digests and just-in-time meeting briefs. These capabilities gather relevant context and materials before meetings and at day start to ensure users are informed and ready.

##### 8.4.4.1 [/morning-checkin daily brief (Skill)](system-prompts/skill-morning-checkin-daily-brief.md)

Once-a-day scheduled task that prepares a daily calendar and inbox digest, schedules pre-meeting check-ins, and records the day's top priority to get the user ready for the day.

##### 8.4.4.2 [/pre-meeting-checkin event brief (Skill)](system-prompts/skill-pre-meeting-checkin-event-brief.md)

Fires a few minutes before a calendar event to gather materials, recent thread context, open questions, and a concise meeting brief so the user walks in ready.
