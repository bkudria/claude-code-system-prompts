# Claude Code System Prompts Index

Operational and architectural guidance for building, deploying, and governing AI-powered coding agents — covering everything from low-level command execution and file manipulation to multi-agent coordination, persistent memory, external integrations, and the quality and communication standards that shape reliable autonomous behavior.

## Table of Contents

1. [Bash and Shell Command Execution](#1-bash-and-shell-command-execution)
   1. [Bash Command Execution & Syntax Rules](#11-bash-command-execution-syntax-rules)
      1. [Bash (no newlines) [Tool Description]](#111-bash-no-newlines-tool-description)
      2. [Bash (overview) [Tool Description]](#112-bash-overview-tool-description)
      3. [Bash (parallel commands) [Tool Description]](#113-bash-parallel-commands-tool-description)
      4. [Bash (sequential commands) [Tool Description]](#114-bash-sequential-commands-tool-description)
      5. [Bash (semicolon usage) [Tool Description]](#115-bash-semicolon-usage-tool-description)
      6. [Bash (quote file paths) [Tool Description]](#116-bash-quote-file-paths-tool-description)
      7. [Bash (maintain cwd) [Tool Description]](#117-bash-maintain-cwd-tool-description)
      8. [Bash (working directory) [Tool Description]](#118-bash-working-directory-tool-description)
      9. [Bash (timeout) [Tool Description]](#119-bash-timeout-tool-description)
      10. [Bash (verify parent directory) [Tool Description]](#1110-bash-verify-parent-directory-tool-description)
      11. [Bash (built-in tools note) [Tool Description]](#1111-bash-built-in-tools-note-tool-description)
      12. [Bash (prefer dedicated tools) [Tool Description]](#1112-bash-prefer-dedicated-tools-tool-description)
   2. [Bash Alternative Tool Redirections](#12-bash-alternative-tool-redirections)
      1. [Bash (alternative — communication) [Tool Description]](#121-bash-alternative-—-communication-tool-description)
      2. [Bash (alternative — content search) [Tool Description]](#122-bash-alternative-—-content-search-tool-description)
      3. [Bash (alternative — edit files) [Tool Description]](#123-bash-alternative-—-edit-files-tool-description)
      4. [Bash (alternative — file search) [Tool Description]](#124-bash-alternative-—-file-search-tool-description)
      5. [Bash (alternative — read files) [Tool Description]](#125-bash-alternative-—-read-files-tool-description)
      6. [Bash (alternative — write files) [Tool Description]](#126-bash-alternative-—-write-files-tool-description)
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
   4. [Bash Sleep & Polling Behavior](#14-bash-sleep-polling-behavior)
      1. [Bash (sleep — keep short) [Tool Description]](#141-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#142-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — run immediately) [Tool Description]](#143-bash-sleep-—-run-immediately-tool-description)
      4. [Bash (sleep — use check commands) [Tool Description]](#144-bash-sleep-—-use-check-commands-tool-description)
      5. [One of six rules for using sleep command (System Prompt)](#145-one-of-six-rules-for-using-sleep-command-system-prompt)
      6. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#146-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
   5. [PowerShell Command Execution](#15-powershell-command-execution)
      1. [PowerShell (Tool Description)](#151-powershell-tool-description)
2. [File, Git, and Code Navigation](#2-file-git-and-code-navigation)
   1. [File Reading, Writing, and State Tracking](#21-file-reading-writing-and-state-tracking)
      1. [File System Operations](#211-file-system-operations)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Write (read existing file first) [Tool Description]](#2113-write-read-existing-file-first-tool-description)
         4. [Edit (Tool Description)](#2114-edit-tool-description)
         5. [Grep (Tool Description)](#2115-grep-tool-description)
         6. [NotebookEdit (Tool Description)](#2116-notebookedit-tool-description)
      2. [File Context & State Notifications](#212-file-context-state-notifications)
         1. [File opened in IDE (System Reminder)](#2121-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#2122-lines-selected-in-ide-system-reminder)
         3. [File truncated (System Reminder)](#2123-file-truncated-system-reminder)
         4. [File shorter than offset (System Reminder)](#2124-file-shorter-than-offset-system-reminder)
         5. [File exists but empty (System Reminder)](#2125-file-exists-but-empty-system-reminder)
         6. [File modified by user or linter (System Reminder)](#2126-file-modified-by-user-or-linter-system-reminder)
         7. [File modification detected (budget exceeded) [System Reminder]](#2127-file-modification-detected-budget-exceeded-system-reminder)
         8. [Compact file reference (System Reminder)](#2128-compact-file-reference-system-reminder)
   2. [Git Workflows and Worktree Isolation](#22-git-workflows-and-worktree-isolation)
      1. [Git Operations & Safety Protocols](#221-git-operations-safety-protocols)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#2211-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#2212-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#2213-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#2214-bash-git-—-prefer-new-commits-tool-description)
         5. [Quick git commit (Agent Prompt)](#2215-quick-git-commit-agent-prompt)
         6. [Quick PR creation (Agent Prompt)](#2216-quick-pr-creation-agent-prompt)
         7. [Session title and branch generation (Agent Prompt)](#2217-session-title-and-branch-generation-agent-prompt)
         8. [Git status (System Prompt)](#2218-git-status-system-prompt)
      2. [Git Worktree & Isolation](#222-git-worktree-isolation)
         1. [EnterWorktree (Tool Description)](#2221-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#2222-exitworktree-tool-description)
   3. [Codebase Exploration and Semantic Navigation](#23-codebase-exploration-and-semantic-navigation)
      1. [Codebase Exploration & Analysis Agents](#231-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#2311-explore-agent-prompt)
         2. [General purpose (Agent Prompt)](#2312-general-purpose-agent-prompt)
         3. [CLAUDE.md creation (Agent Prompt)](#2313-claudemd-creation-agent-prompt)
      2. [LSP & Code Intelligence Tools](#232-lsp-code-intelligence-tools)
         1. [LSP (Tool Description)](#2321-lsp-tool-description)
         2. [REPL (Tool Description)](#2322-repl-tool-description)
3. [Agent Orchestration and Autonomous Execution](#3-agent-orchestration-and-autonomous-execution)
   1. [Multi-Agent Coordination and Swarms](#31-multi-agent-coordination-and-swarms)
      1. [Multi-Agent Team Coordination & Swarms](#311-multi-agent-team-coordination-swarms)
         1. [TeammateTool (Tool Description)](#3111-teammatetool-tool-description)
         2. [SendMessageTool (Tool Description)](#3112-sendmessagetool-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#3113-tasklist-teammate-workflow-tool-description)
         4. [TeamDelete (Tool Description)](#3114-teamdelete-tool-description)
         5. [Team Coordination (System Reminder)](#3115-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#3116-team-shutdown-system-reminder)
         7. [Subagent delegation examples (System Prompt)](#3117-subagent-delegation-examples-system-prompt)
         8. [Subagent prompt-writing examples (System Prompt)](#3118-subagent-prompt-writing-examples-system-prompt)
         9. [Writing subagent prompts (System Prompt)](#3119-writing-subagent-prompts-system-prompt)
         10. [Tool usage (subagent guidance) [System Prompt]](#31110-tool-usage-subagent-guidance-system-prompt)
         11. [Fork usage guidelines (System Prompt)](#31111-fork-usage-guidelines-system-prompt)
         12. [Worker instructions (System Prompt)](#31112-worker-instructions-system-prompt)
      2. [Agent Spawning & Subagent Management](#312-agent-spawning-subagent-management)
         1. [Agent (usage notes) [Tool Description]](#3121-agent-usage-notes-tool-description)
         2. [Agent mention (System Reminder)](#3122-agent-mention-system-reminder)
         3. [/btw side question (System Reminder)](#3123-btw-side-question-system-reminder)
         4. [How to use the SendUserMessage tool (System Prompt)](#3124-how-to-use-the-sendusermessage-tool-system-prompt)
      3. [Batch Processing & Parallel Work Orchestration](#313-batch-processing-parallel-work-orchestration)
         1. [/batch slash command (Agent Prompt)](#3131-batch-slash-command-agent-prompt)
         2. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#3132-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   2. [Background Jobs and Autonomous Safety](#32-background-jobs-and-autonomous-safety)
      1. [Background Job & Agent State Management](#321-background-job-agent-state-management)
         1. [Background job behavior (System Prompt)](#3211-background-job-behavior-system-prompt)
         2. [Background session instructions (System Prompt)](#3212-background-session-instructions-system-prompt)
         3. [Background agent state classifier (Agent Prompt)](#3213-background-agent-state-classifier-agent-prompt)
         4. [Background agent state classification examples (Data)](#3214-background-agent-state-classification-examples-data)
         5. [Background monitor (streaming events) [Tool Description]](#3215-background-monitor-streaming-events-tool-description)
         6. [Worker fork (Agent Prompt)](#3216-worker-fork-agent-prompt)
         7. [Autonomous loop check (System Prompt)](#3217-autonomous-loop-check-system-prompt)
      2. [Autonomous Execution & Auto Mode](#322-autonomous-execution-auto-mode)
         1. [Auto mode (System Prompt)](#3221-auto-mode-system-prompt)
         2. [Executing actions with care (System Prompt)](#3222-executing-actions-with-care-system-prompt)
         3. [Doing tasks (ambitious tasks) [System Prompt]](#3223-doing-tasks-ambitious-tasks-system-prompt)
   3. [Agent Creation & Configuration](#33-agent-creation-configuration)
      1. [Agent creation architect (Agent Prompt)](#331-agent-creation-architect-agent-prompt)
      2. [Auto mode rule reviewer (Agent Prompt)](#332-auto-mode-rule-reviewer-agent-prompt)
      3. [Claude guide agent (Agent Prompt)](#333-claude-guide-agent-agent-prompt)
4. [Planning, Scheduling, and Workflow Automation](#4-planning-scheduling-and-workflow-automation)
   1. [Planning Mode Workflows](#41-planning-mode-workflows)
      1. [Plan mode is active (5-phase) [System Reminder]](#411-plan-mode-is-active-5-phase-system-reminder)
      2. [Plan mode is active (iterative) [System Reminder]](#412-plan-mode-is-active-iterative-system-reminder)
      3. [Plan mode is active (subagent) [System Reminder]](#413-plan-mode-is-active-subagent-system-reminder)
      4. [Plan mode re-entry (System Reminder)](#414-plan-mode-re-entry-system-reminder)
      5. [Plan mode approval tool enforcement (System Reminder)](#415-plan-mode-approval-tool-enforcement-system-reminder)
      6. [Plan file reference (System Reminder)](#416-plan-file-reference-system-reminder)
      7. [Exited plan mode (System Reminder)](#417-exited-plan-mode-system-reminder)
      8. [Ultraplan mode (System Reminder)](#418-ultraplan-mode-system-reminder)
      9. [Remote plan mode (ultraplan) [System Prompt]](#419-remote-plan-mode-ultraplan-system-prompt)
      10. [Remote planning session (System Prompt)](#4110-remote-planning-session-system-prompt)
      11. [EnterPlanMode (Tool Description)](#4111-enterplanmode-tool-description)
      12. [ExitPlanMode (Tool Description)](#4112-exitplanmode-tool-description)
      13. [Plan mode (enhanced) [Agent Prompt]](#4113-plan-mode-enhanced-agent-prompt)
   2. [Cron Scheduling and Periodic Tasks](#42-cron-scheduling-and-periodic-tasks)
      1. [Scheduling, Cron & Loop Execution](#421-scheduling-cron-loop-execution)
         1. [CronCreate (Tool Description)](#4211-croncreate-tool-description)
         2. [ScheduleWakeup (/loop dynamic mode) [Tool Description]](#4212-schedulewakeup-loop-dynamic-mode-tool-description)
         3. [Snooze (delay and reason guidance) [Tool Description]](#4213-snooze-delay-and-reason-guidance-tool-description)
         4. [/loop slash command (Skill)](#4214-loop-slash-command-skill)
         5. [/loop slash command (dynamic mode) [Skill]](#4215-loop-slash-command-dynamic-mode-skill)
         6. [/loop self-pacing mode (Skill)](#4216-loop-self-pacing-mode-skill)
         7. [/loop cloud-first scheduling offer (Skill)](#4217-loop-cloud-first-scheduling-offer-skill)
         8. [Dynamic pacing loop execution (Skill)](#4218-dynamic-pacing-loop-execution-skill)
         9. [Schedule recurring cron and execute immediately (compact) [Skill]](#4219-schedule-recurring-cron-and-execute-immediately-compact-skill)
         10. [Schedule recurring cron and run immediately (Skill)](#42110-schedule-recurring-cron-and-run-immediately-skill)
         11. [Loop wakeup not scheduled (System Reminder)](#42111-loop-wakeup-not-scheduled-system-reminder)
         12. [/schedule slash command (Agent Prompt)](#42112-schedule-slash-command-agent-prompt)
         13. [Proactive schedule offer after follow-up work (System Prompt)](#42113-proactive-schedule-offer-after-follow-up-work-system-prompt)
         14. [Schedule proactive offer guidance (Tool Description)](#42114-schedule-proactive-offer-guidance-tool-description)
      2. [Morning Routines & Periodic Scheduled Tasks](#422-morning-routines-periodic-scheduled-tasks)
         1. [/morning-checkin daily brief (Skill)](#4221-morning-checkin-daily-brief-skill)
         2. [/pre-meeting-checkin event brief (Skill)](#4222-pre-meeting-checkin-event-brief-skill)
         3. [/catch-up periodic heartbeat (Skill)](#4223-catch-up-periodic-heartbeat-skill)
   3. [Hook System & Configuration](#43-hook-system-configuration)
      1. [Hook additional context (System Reminder)](#431-hook-additional-context-system-reminder)
      2. [Hook blocking error (System Reminder)](#432-hook-blocking-error-system-reminder)
      3. [Hook stopped continuation prefix (System Reminder)](#433-hook-stopped-continuation-prefix-system-reminder)
      4. [Hook stopped continuation (System Reminder)](#434-hook-stopped-continuation-system-reminder)
      5. [Hook success (System Reminder)](#435-hook-success-system-reminder)
      6. [Stop hook blocking error (System Reminder)](#436-stop-hook-blocking-error-system-reminder)
      7. [Hooks Configuration (System Prompt)](#437-hooks-configuration-system-prompt)
      8. [Update Claude Code Config (Skill)](#438-update-claude-code-config-skill)
      9. [update-config (7-step verification flow) [Skill]](#439-update-config-7-step-verification-flow-skill)
   4. [Skills, Project Setup, and CI Integration](#44-skills-project-setup-and-ci-integration)
      1. [Skill Creation & Management](#441-skill-creation-management)
         1. [Skill (Tool Description)](#4411-skill-tool-description)
         2. [Skillify Current Session (System Prompt)](#4412-skillify-current-session-system-prompt)
         3. [Generate permission allowlist from transcripts (Skill)](#4413-generate-permission-allowlist-from-transcripts-skill)
      2. [CLAUDE.md & Project Initialization](#442-claudemd-project-initialization)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#4421-init-claudemd-and-skill-setup-new-version-skill)
         2. [Team onboarding guide (Skill)](#4422-team-onboarding-guide-skill)
         3. [Onboarding guide generator (Agent Prompt)](#4423-onboarding-guide-generator-agent-prompt)
         4. [Managed Agents onboarding flow (Agent Prompt)](#4424-managed-agents-onboarding-flow-agent-prompt)
      3. [GitHub Integration & CI/CD Automation](#443-github-integration-cicd-automation)
         1. [GitHub Actions workflow for @claude mentions (Data)](#4431-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#4432-github-app-installation-pr-description-data)
5. [Session Management, Memory, and Context](#5-session-management-memory-and-context)
   1. [Persistent Memory and Knowledge Accumulation](#51-persistent-memory-and-knowledge-accumulation)
      1. [Persistent Memory System](#511-persistent-memory-system)
         1. [Memory instructions (System Prompt)](#5111-memory-instructions-system-prompt)
         2. [Memory staleness verification (System Prompt)](#5112-memory-staleness-verification-system-prompt)
         3. [Memory description of user details (System Prompt)](#5113-memory-description-of-user-details-system-prompt)
         4. [Memory description of user feedback (System Prompt)](#5114-memory-description-of-user-feedback-system-prompt)
         5. [Memory description of user feedback (with explicit save) [System Prompt]](#5115-memory-description-of-user-feedback-with-explicit-save-system-prompt)
         6. [Description part of memory instructions (System Prompt)](#5116-description-part-of-memory-instructions-system-prompt)
         7. [Memory file contents (System Reminder)](#5117-memory-file-contents-system-reminder)
         8. [Nested memory contents (System Reminder)](#5118-nested-memory-contents-system-reminder)
         9. [Dream CLAUDE.md memory reconciliation (System Prompt)](#5119-dream-claudemd-memory-reconciliation-system-prompt)
         10. [Dream team memory handling (System Prompt)](#51110-dream-team-memory-handling-system-prompt)
         11. [Agent memory instructions (System Prompt)](#51111-agent-memory-instructions-system-prompt)
      2. [Memory Consolidation & Dream Agents](#512-memory-consolidation-dream-agents)
         1. [Dream memory consolidation (Agent Prompt)](#5121-dream-memory-consolidation-agent-prompt)
         2. [Dream memory pruning (Agent Prompt)](#5122-dream-memory-pruning-agent-prompt)
         3. [Memory synthesis (Agent Prompt)](#5123-memory-synthesis-agent-prompt)
         4. [Determine which memory files to attach (Agent Prompt)](#5124-determine-which-memory-files-to-attach-agent-prompt)
         5. [/dream memory consolidation (Skill)](#5125-dream-memory-consolidation-skill)
         6. [/dream nightly schedule (Skill)](#5126-dream-nightly-schedule-skill)
         7. [Session memory template (Data)](#5127-session-memory-template-data)
         8. [User profile memory template (Data)](#5128-user-profile-memory-template-data)
   2. [Session State and Conversation Continuity](#52-session-state-and-conversation-continuity)
      1. [Session Context & Conversation Compaction](#521-session-context-conversation-compaction)
         1. [Context compaction summary (System Prompt)](#5211-context-compaction-summary-system-prompt)
         2. [Partial compaction instructions (System Prompt)](#5212-partial-compaction-instructions-system-prompt)
         3. [Conversation summarization (Agent Prompt)](#5213-conversation-summarization-agent-prompt)
         4. [Recent Message Summarization (Agent Prompt)](#5214-recent-message-summarization-agent-prompt)
         5. [Session continuation (System Reminder)](#5215-session-continuation-system-reminder)
         6. [Previously invoked skills (System Reminder)](#5216-previously-invoked-skills-system-reminder)
      2. [Session Naming & Metadata Generation](#522-session-naming-metadata-generation)
         1. [Coding session title generator (Agent Prompt)](#5221-coding-session-title-generator-agent-prompt)
         2. [/rename auto-generate session name (Agent Prompt)](#5222-rename-auto-generate-session-name-agent-prompt)
      3. [Session Search & History Management](#523-session-search-history-management)
         1. [Session search (Agent Prompt)](#5231-session-search-agent-prompt)
         2. [Session memory update instructions (Agent Prompt)](#5232-session-memory-update-instructions-agent-prompt)
         3. [Scratchpad directory (System Prompt)](#5233-scratchpad-directory-system-prompt)
      4. [Task & Todo Tracking Tools](#524-task-todo-tracking-tools)
         1. [TodoWrite (Tool Description)](#5241-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#5242-taskcreate-tool-description)
         3. [TodoWrite reminder (System Reminder)](#5243-todowrite-reminder-system-reminder)
         4. [Task tools reminder (System Reminder)](#5244-task-tools-reminder-system-reminder)
         5. [Tool usage (task management) [System Prompt]](#5245-tool-usage-task-management-system-prompt)
6. [Claude API, SDKs, and External Integrations](#6-claude-api-sdks-and-external-integrations)
   1. [Core API and SDK Reference](#61-core-api-and-sdk-reference)
      1. [Claude API SDK Reference Documentation](#611-claude-api-sdk-reference-documentation)
         1. [Claude API reference — Python (Data)](#6111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#6112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#6113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#6114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#6115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — C# (Data)](#6116-claude-api-reference-—-c-data)
         7. [Claude API reference — PHP (Data)](#6117-claude-api-reference-—-php-data)
         8. [Claude API reference — cURL (Data)](#6118-claude-api-reference-—-curl-data)
         9. [Claude model catalog (Data)](#6119-claude-model-catalog-data)
      2. [Streaming, Batches & Files API Reference](#612-streaming-batches-files-api-reference)
         1. [Streaming reference — Python (Data)](#6121-streaming-reference-—-python-data)
         2. [Streaming reference — TypeScript (Data)](#6122-streaming-reference-—-typescript-data)
         3. [Message Batches API reference — Python (Data)](#6123-message-batches-api-reference-—-python-data)
         4. [Files API reference — Python (Data)](#6124-files-api-reference-—-python-data)
         5. [Files API reference — TypeScript (Data)](#6125-files-api-reference-—-typescript-data)
         6. [Prompt Caching — Design & Optimization (Data)](#6126-prompt-caching-—-design-optimization-data)
      3. [Tool Use & Agentic Loop Reference](#613-tool-use-agentic-loop-reference)
         1. [Tool use concepts (Data)](#6131-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6132-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6133-tool-use-reference-—-typescript-data)
   2. [Managed Agents and Application Building](#62-managed-agents-and-application-building)
      1. [Managed Agents API Reference & Architecture](#621-managed-agents-api-reference-architecture)
         1. [Managed Agents overview (Data)](#6211-managed-agents-overview-data)
         2. [Managed Agents core concepts (Data)](#6212-managed-agents-core-concepts-data)
         3. [Managed Agents endpoint reference (Data)](#6213-managed-agents-endpoint-reference-data)
         4. [Managed Agents environments and resources (Data)](#6214-managed-agents-environments-and-resources-data)
         5. [Managed Agents events and steering (Data)](#6215-managed-agents-events-and-steering-data)
         6. [Managed Agents memory stores reference (Data)](#6216-managed-agents-memory-stores-reference-data)
         7. [Managed Agents tools and skills (Data)](#6217-managed-agents-tools-and-skills-data)
         8. [Managed Agents client patterns (Data)](#6218-managed-agents-client-patterns-data)
         9. [Managed Agents reference — Python (Data)](#6219-managed-agents-reference-—-python-data)
         10. [Managed Agents reference — TypeScript (Data)](#62110-managed-agents-reference-—-typescript-data)
         11. [Managed Agents reference — cURL (Data)](#62111-managed-agents-reference-—-curl-data)
      2. [Building LLM Applications — Skills & Guides](#622-building-llm-applications-—-skills-guides)
         1. [Building LLM-powered applications with Claude (Skill)](#6221-building-llm-powered-applications-with-claude-skill)
         2. [Build with Claude API (reference guide) [Skill]](#6222-build-with-claude-api-reference-guide-skill)
         3. [Agent Design Patterns (Skill)](#6223-agent-design-patterns-skill)
         4. [Model migration guide (Skill)](#6224-model-migration-guide-skill)
         5. [Live documentation sources (Data)](#6225-live-documentation-sources-data)
         6. [HTTP error codes reference (Data)](#6226-http-error-codes-reference-data)
         7. [Anthropic CLI (Data)](#6227-anthropic-cli-data)
   3. [Browser Automation and Web Retrieval](#63-browser-automation-and-web-retrieval)
      1. [Browser & Computer Use Automation](#631-browser-computer-use-automation)
         1. [Computer (Tool Description)](#6311-computer-tool-description)
         2. [BrowserBatch (Tool Description)](#6312-browserbatch-tool-description)
         3. [Computer action (Tool Parameter)](#6313-computer-action-tool-parameter)
         4. [Chrome browser MCP tools (System Prompt)](#6314-chrome-browser-mcp-tools-system-prompt)
         5. [Claude in Chrome browser automation (System Prompt)](#6315-claude-in-chrome-browser-automation-system-prompt)
         6. [Computer Use MCP (Skill)](#6316-computer-use-mcp-skill)
      2. [Web Fetch & Search Tools](#632-web-fetch-search-tools)
         1. [WebFetch (Tool Description)](#6321-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#6322-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#6323-webfetch-summarizer-agent-prompt)
7. [Code Quality, Security, and Review](#7-code-quality-security-and-review)
   1. [Security Monitoring and Threat Analysis](#71-security-monitoring-and-threat-analysis)
      1. [Security Review & Threat Monitoring](#711-security-review-threat-monitoring)
         1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#7111-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#7112-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         3. [/security-review slash command (Agent Prompt)](#7113-security-review-slash-command-agent-prompt)
         4. [Censoring assistance with malicious activities (System Prompt)](#7114-censoring-assistance-with-malicious-activities-system-prompt)
         5. [Doing tasks (security) [System Prompt]](#7115-doing-tasks-security-system-prompt)
      2. [Code Review & Command Analysis](#712-code-review-command-analysis)
         1. [/review-pr slash command (Agent Prompt)](#7121-review-pr-slash-command-agent-prompt)
         2. [Bash command description writer (Agent Prompt)](#7122-bash-command-description-writer-agent-prompt)
         3. [Bash command prefix detection (Agent Prompt)](#7123-bash-command-prefix-detection-agent-prompt)
   2. [Verification, Testing, and Code Quality](#72-verification-testing-and-code-quality)
      1. [Verification & Testing Workflows](#721-verification-testing-workflows)
         1. [Verification specialist (Agent Prompt)](#7211-verification-specialist-agent-prompt)
         2. [Verify skill (Skill)](#7212-verify-skill-skill)
         3. [Verify CLI changes (example for Verify skill) [Skill]](#7213-verify-cli-changes-example-for-verify-skill-skill)
         4. [Verify server/API changes (example for Verify skill) [Skill]](#7214-verify-serverapi-changes-example-for-verify-skill-skill)
         5. [Create verifier skills (Skill)](#7215-create-verifier-skills-skill)
         6. [Verify plan reminder (System Reminder)](#7216-verify-plan-reminder-system-reminder)
      2. [Code Quality & Simplification](#722-code-quality-simplification)
         1. [Simplify (Skill)](#7221-simplify-skill)
         2. [Debugging (Skill)](#7222-debugging-skill)
         3. [/stuck slash command (Skill)](#7223-stuck-slash-command-skill)
      3. [Review & Decision Checkpoints](#723-review-decision-checkpoints)
         1. [Advisor tool instructions (System Prompt)](#7231-advisor-tool-instructions-system-prompt)
         2. [Hook condition evaluator (stop) [Agent Prompt]](#7232-hook-condition-evaluator-stop-agent-prompt)
8. [User Experience, Communication, and Runtime Configuration](#8-user-experience-communication-and-runtime-configuration)
   1. [Communication Style and Response Presentation](#81-communication-style-and-response-presentation)
      1. [Communication Style & Response Formatting](#811-communication-style-response-formatting)
         1. [Communication style (System Prompt)](#8111-communication-style-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#8112-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#8113-tone-and-style-concise-output-—-short-system-prompt)
         4. [Agent thread notes (System Prompt)](#8114-agent-thread-notes-system-prompt)
         5. [Agent Summary Generation (System Prompt)](#8115-agent-summary-generation-system-prompt)
      2. [Assistant Personality & Communication Principles](#812-assistant-personality-communication-principles)
         1. [Assistant voice and values template (Data)](#8121-assistant-voice-and-values-template-data)
      3. [User Intent Prediction](#813-user-intent-prediction)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#8131-prompt-suggestion-generator-v2-agent-prompt)
   2. [User Interaction & Question Tools](#82-user-interaction-question-tools)
      1. [AskUserQuestion (Tool Description)](#821-askuserquestion-tool-description)
      2. [AskUserQuestion (preview field) [Tool Description]](#822-askuserquestion-preview-field-tool-description)
      3. [SendMessageTool (non-agent-teams) [Tool Description]](#823-sendmessagetool-non-agent-teams-tool-description)
      4. [PushNotification (Tool Description)](#824-pushnotification-tool-description)
   3. [Coding Task Execution and Learning Modes](#83-coding-task-execution-and-learning-modes)
      1. [Coding Task Execution Guidelines](#831-coding-task-execution-guidelines)
         1. [Doing tasks (software engineering focus) [System Prompt]](#8311-doing-tasks-software-engineering-focus-system-prompt)
         2. [Doing tasks (no compatibility hacks) [System Prompt]](#8312-doing-tasks-no-compatibility-hacks-system-prompt)
         3. [Doing tasks (no unnecessary error handling) [System Prompt]](#8313-doing-tasks-no-unnecessary-error-handling-system-prompt)
         4. [Doing tasks (help and feedback) [System Prompt]](#8314-doing-tasks-help-and-feedback-system-prompt)
      2. [Learning & Teaching Modes](#832-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#8321-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#8322-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#8323-request_teach_access-part-of-teach-mode-tool-description)
   4. [Runtime Environment and Output Calibration](#84-runtime-environment-and-output-calibration)
      1. [Harness, Core Agent Infrastructure & Modes](#841-harness-core-agent-infrastructure-modes)
         1. [Harness instructions (System Prompt)](#8411-harness-instructions-system-prompt)
         2. [Minimal mode (System Prompt)](#8412-minimal-mode-system-prompt)
         3. [PowerShell edition for 5.1 (System Prompt)](#8413-powershell-edition-for-51-system-prompt)
         4. [WSL managed settings double opt-in (System Prompt)](#8414-wsl-managed-settings-double-opt-in-system-prompt)
         5. [REPL tool usage and scripting conventions (System Prompt)](#8415-repl-tool-usage-and-scripting-conventions-system-prompt)
      2. [Output Style & Thinking Calibration](#842-output-style-thinking-calibration)
         1. [Output style active (System Reminder)](#8421-output-style-active-system-reminder)
         2. [Thinking frequency tuning (System Reminder)](#8422-thinking-frequency-tuning-system-reminder)
         3. [Option previewer (System Prompt)](#8423-option-previewer-system-prompt)
      3. [Terminal Status Display Configuration](#843-terminal-status-display-configuration)
         1. [Status line setup (Agent Prompt)](#8431-status-line-setup-agent-prompt)
      4. [MCP Resource & Tool Discovery](#844-mcp-resource-tool-discovery)
         1. [MCP resource no content (System Reminder)](#8441-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#8442-mcp-resource-no-displayable-content-system-reminder)
         3. [ToolSearch (second part) [Tool Description]](#8443-toolsearch-second-part-tool-description)
      5. [Resource Budget & Token Monitoring](#845-resource-budget-token-monitoring)
         1. [Token usage (System Reminder)](#8451-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#8452-usd-budget-system-reminder)
      6. [Diagnostics & Error Detection](#846-diagnostics-error-detection)
         1. [New diagnostics detected (System Reminder)](#8461-new-diagnostics-detected-system-reminder)
         2. [Tool execution denied (System Prompt)](#8462-tool-execution-denied-system-prompt)
      7. [Insights, Analytics & Usage Reporting](#847-insights-analytics-usage-reporting)
         1. [Insights at a glance summary (System Prompt)](#8471-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#8472-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#8473-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#8474-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#8475-insights-suggestions-system-prompt)
         6. [/insights report output (Skill)](#8476-insights-report-output-skill)

---

## 1. Bash and Shell Command Execution

Rules, restrictions, and behavioral patterns governing how bash and PowerShell commands are executed, including sandbox security, alternative tool substitutions, and async patterns.

### 1.1 Bash Command Execution & Syntax Rules

Bash command execution follows specific syntax patterns for different execution modes: sequential commands use && for dependency handling, parallel commands run as separate tool calls, and semicolons chain commands when order matters but failures are acceptable. File paths require quoting, working directory persists across commands, and absolute paths preserve context. Dedicated tools provide better alternatives for read-only operations like searching and file manipulation.

#### 1.1.1 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate bash commands.

#### 1.1.2 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Executes a given bash command and returns its output.

#### 1.1.3 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent commands as parallel tool calls in a single message rather than sequentially.

#### 1.1.4 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call when they must run sequentially and depend on each other.

#### 1.1.5 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier command failures are acceptable.

#### 1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.7 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to use absolute paths and avoid cd commands to maintain the current working directory, except when explicitly requested by the user.

#### 1.1.8 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between bash commands, but shell state does not; environment initializes from user profile.

#### 1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Bash commands support optional timeout configuration in milliseconds, with configurable maximum and default limits.

#### 1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, verify the parent directory exists and is correct using ls.

#### 1.1.11 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and easier permission review than equivalent Bash commands.

#### 1.1.12 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for read-only searching commands like find and grep; use dedicated tools instead.

### 1.2 Bash Alternative Tool Redirections

Specialized tools replace common bash operations for improved user experience and permission transparency: dedicated tools handle file reading, writing, editing, searching, and globbing instead of cat, echo, sed, grep, and find commands. Direct text output replaces echo for communication.

#### 1.2.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly instead of using echo or printf for communication.

#### 1.2.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs Claude to use the Grep tool for content searching instead of grep or rg commands.

#### 1.2.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool for file modifications instead of sed or awk.

#### 1.2.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs Claude to use the Glob tool for file searching instead of find or ls commands.

#### 1.2.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool for file reading instead of cat, head, or tail commands.

#### 1.2.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs Claude to use the Write tool for file creation instead of echo or cat redirection.

### 1.3 Bash Sandbox Security & Restrictions

All bash commands execute within a mandatory sandbox that restricts file access, network connections, and socket operations. Sandbox failures are detected through specific error patterns and automatically retried with sandbox bypass only when necessary. Sensitive paths like credentials and SSH keys cannot be added to allowlists, and each command defaults to sandbox mode independently.

#### 1.3.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

#### 1.3.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always default to running commands within the sandbox; only bypass when user requests or sandbox restrictions are evident.

#### 1.3.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox restrictions.

#### 1.3.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that sandbox restrictions caused a failure.

#### 1.3.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox network restrictions.

#### 1.3.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors for file or network operations indicate sandbox restrictions.

#### 1.3.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions.

#### 1.3.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused the failure and mention the `/sandbox` command for managing restrictions.

#### 1.3.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Identifies when a command failure shows evidence of sandbox restrictions versus other causes like missing files or network issues.

#### 1.3.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.3.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.3.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files to the sandbox allowlist.

#### 1.3.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; default to sandbox for future commands even after running one with dangerouslyDisableSandbox.

#### 1.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing how to respond when sandbox-caused failures are detected.

#### 1.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true when sandbox failure is detected, without asking the user.

#### 1.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly.

#### 1.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will prompt the user for permission.

### 1.4 Bash Sleep & Polling Behavior

Sleep commands should be minimized to avoid blocking users; commands that can run immediately execute sequentially without delay. Polling external processes uses check commands rather than sleep loops, and background tasks are monitored through completion notifications instead of polling.

#### 1.4.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep duration short to avoid blocking the user.

#### 1.4.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

#### 1.4.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; execute them sequentially without delay.

#### 1.4.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

When polling external processes, use check commands like gh run view instead of sleeping first.

#### 1.4.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

States a single rule prohibiting retry loops with sleep for failing commands, requiring root-cause diagnosis instead.

#### 1.4.6 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Advises against unnecessary Start-Sleep commands in PowerShell, preferring immediate execution, background job notifications, root-cause diagnosis, and polling alternatives over sleep loops.

### 1.5 PowerShell Command Execution

Execute PowerShell commands with configurable timeout and working directory context. Leverages cmdlet conventions and multiline syntax patterns for Windows scripting tasks.

#### 1.5.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Execute PowerShell commands with optional timeout and working directory persistence. Prefer specialized tools for file operations; use Verb-Noun cmdlets, backtick escaping, and here-strings for multiline input.

---

## 2. File, Git, and Code Navigation

Tools and protocols for reading, writing, and editing files, tracking version control changes, navigating codebases semantically, and receiving IDE state notifications.

### 2.1 File Reading, Writing, and State Tracking

Core file system operations alongside IDE notifications that keep Claude aware of external edits, truncations, and line selections.

#### 2.1.1 File System Operations

Tools for reading, writing, editing, and searching files across the filesystem. Read operations support multiple formats including images, PDFs, and Jupyter notebooks. Write and edit operations modify files with different strategies—write overwrites completely while edit performs targeted string replacements. Search uses regex-based filtering across file contents.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Read files from filesystem with support for images, PDFs (with page ranges), and Jupyter notebooks. Absolute paths required; default reads up to configured line limit from file beginning.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Write creates or completely rewrites files to the local filesystem. It avoids creating documentation or README files unless explicitly requested and omits emojis unless user-specified.

##### 2.1.1.3 [Write (read existing file first) [Tool Description]](system-prompts/tool-description-write-read-existing-file-first.md)

Write creates or overwrites files on the local filesystem, with a requirement to read existing files first before overwriting. Edit is preferred for modifying existing files.

##### 2.1.1.4 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read output. Prefer editing existing files over creating new ones; use replace_all for renaming variables across files.

##### 2.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Search files using ripgrep with full regex syntax, glob filtering, and multiple output modes. Supports multiline matching and literal pattern escaping for language-specific syntax.

##### 2.1.1.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replace contents of specific cells in Jupyter notebooks. Supports insert and delete modes; cell_number is 0-indexed and notebook_path must be absolute.

#### 2.1.2 File Context & State Notifications

System notifications that inform Claude about file state changes and IDE interactions. These include file opens, line selections, truncation warnings, external modifications by users or linters, and offset validation errors. Notifications provide diffs and metadata to maintain awareness of file context without requiring explicit tool calls.

##### 2.1.2.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 2.1.2.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific line ranges selected by the user in the IDE, including the selected content.

##### 2.1.2.3 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Informs Claude that a large file was truncated to a maximum line count and instructs use of read tools to access additional content without notifying the user.

##### 2.1.2.4 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude when a file read offset exceeds the file's actual length, providing total line count.

##### 2.1.2.5 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warning that a file exists but contains no content.

##### 2.1.2.6 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was modified externally by the user or linter, with diff included for reference.

##### 2.1.2.7 [File modification detected (budget exceeded) [System Reminder]](system-prompts/system-reminder-file-modification-detected-budget-exceeded.md)

Notifies Claude that a file was modified externally and should be considered in proceeding, with diff omitted due to budget constraints.

##### 2.1.2.8 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs it to use the Read tool if needed.

### 2.2 Git Workflows and Worktree Isolation

Safe git commit, push, and pull-request practices combined with worktree primitives for parallel branch isolation.

#### 2.2.1 Git Operations & Safety Protocols

Git workflows enforce safety through hook compliance, commit signing, and preference for new commits over amendments. Destructive operations like force push and reset require careful consideration of alternatives. Streamlined agents automate commit creation, pull request submission, and branch naming while maintaining safety protocols and repository conventions.

##### 2.2.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives before executing destructive git operations like reset, force push, or checkout.

##### 2.2.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, parallel command execution, hook handling, and PR formatting with test plans and co-author attribution.

##### 2.2.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping git hooks or bypassing signing unless explicitly requested by the user, requiring investigation and fixing of hook failures.

##### 2.2.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to create new commits rather than amending existing ones.

##### 2.2.1.5 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Streamlined git commit creation with pre-populated context (status, diff, branch, recent commits). Analyzes changes, drafts messages following repo style, and creates commits while enforcing safety protocols.

##### 2.2.1.6 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Streamlined pull request creation combining branch creation, commit, push, and PR submission with multi-line body templates. Includes git safety protocols and handles existing PR updates.

##### 2.2.1.7 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent for generating succinct session titles (sentence case, max 6 words) and git branch names (claude/ prefix, lowercase, max 4 words) from session descriptions.

##### 2.2.1.8 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the git repository status snapshot at conversation start, noting it does not update during the session.

#### 2.2.2 Git Worktree & Isolation

Git-based isolation primitives that create independent worktrees for branched work and clean up after completion, enabling safe parallel modifications without cross-contamination.

##### 2.2.2.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it only when explicitly instructed by user or project instructions. Supports both git repositories and VCS-agnostic hooks for isolation.

##### 2.2.2.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exit a worktree created by EnterWorktree and return to original directory. Choose to keep or remove the worktree; optionally discard uncommitted changes before removal.

### 2.3 Codebase Exploration and Semantic Navigation

Read-only agents for architectural analysis, language server integration for semantic code navigation, and JavaScript scripting for composing tool operations.

#### 2.3.1 Codebase Exploration & Analysis Agents

Read-only agents for fast codebase navigation and architectural analysis, supporting file pattern searches, code keyword queries, and multi-step research tasks. Generates CLAUDE.md documentation capturing build commands, architecture, and project conventions for future sessions.

##### 2.3.1.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file pattern searches, code keyword searches, and architecture questions. Supports quick, medium, and very thorough exploration levels without file modification.

##### 2.3.1.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases. Avoids creating files unless necessary and reports findings concisely.

##### 2.3.1.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files capturing build/test commands, high-level architecture, and project-specific conventions for future Claude Code sessions.

#### 2.3.2 LSP & Code Intelligence Tools

Language server integration for semantic code navigation and analysis, combined with JavaScript scripting for composing and parallelizing tool operations.

##### 2.3.2.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers for code intelligence: go to definition, find references, hover info, symbol search, call hierarchy, and implementations.

##### 2.3.2.2 [REPL (Tool Description)](system-prompts/tool-description-repl.md)

JavaScript programming interface for looping, branching, and composing tool calls as async functions. Batch all operations into single REPL calls; supports Promise.all for parallelism and haiku for model sampling.

---

## 3. Agent Orchestration and Autonomous Execution

Frameworks for spawning, coordinating, and governing multi-agent systems, including swarm patterns, subagent management, background job state, and autonomous safety guardrails.

### 3.1 Multi-Agent Coordination and Swarms

Team creation, task delegation, inter-agent messaging, and graceful shutdown patterns for agent swarms working in parallel.

#### 3.1.1 Multi-Agent Team Coordination & Swarms

Orchestrates multi-agent swarms through team creation, task assignment, and inter-agent messaging. Agents discover work via shared task lists, claim ownership, and communicate blockers to team leads. Includes patterns for delegating to specialized subagents, writing self-contained prompts, and gracefully shutting down teams.

##### 3.1.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

TeammateTool coordinates multi-agent swarms by creating teams, spawning typed agents, assigning tasks, and managing message delivery. It covers team creation, task ownership, idle state handling, peer collaboration visibility, and team member discovery via config files.

##### 3.1.1.2 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

SendMessage enables inter-agent communication in teammate workflows by routing messages to named agents. Plain text output is invisible to other agents; structured responses handle legacy protocol requests like shutdown and plan approval.

##### 3.1.1.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

TaskList in teammate workflows enables agents to discover available work by querying pending unowned tasks with no blockers. Agents claim tasks by ID order preference and notify the team lead if blocked.

##### 3.1.1.4 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

TeamDelete removes team and task directories after swarm work completes, cleaning up `~/.claude/teams/` and `~/.claude/tasks/` directories. It requires all active members to terminate first.

##### 3.1.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity as a named teammate within a team structure, with instructions to read team config, manage task lists, and communicate with teammates and team lead by name.

##### 3.1.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to gracefully shut down all team members and clean up the team before providing a final response to the user in non-interactive mode.

##### 3.1.1.7 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results, including how to respond when users ask mid-wait and when to use specialized subagent types.

##### 3.1.1.8 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates how to write self-contained, well-structured prompts when delegating to subagents, including context briefing, goal clarity, and response length constraints.

##### 3.1.1.9 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Guidelines for writing effective subagent prompts that brief agents with full context, explain goals and constraints, and avoid delegating synthesis or understanding.

##### 3.1.1.10 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Guidance on using subagents for parallelizing independent queries and protecting context windows, while avoiding duplication of work already delegated.

##### 3.1.1.11 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to spawn fork subagents for open-ended work, prohibits reading fork output mid-flight or fabricating results, and requires treating fork completion notifications as authoritative rather than speculative.

##### 3.1.1.12 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for workers implementing changes: simplify with the simplify skill, run unit tests, execute end-to-end tests, commit and push, and report the PR URL.

#### 3.1.2 Agent Spawning & Subagent Management

Mechanisms for invoking and coordinating subagents, including foreground and background execution modes, worktree isolation for parallel work, message-based resumption, and user-facing communication through structured checkpoints rather than status filler.

##### 3.1.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance for spawning and managing subagents, including foreground vs. background execution, resumption via messaging, worktree isolation, parallel launches, and verification of agent work before reporting results.

##### 3.1.2.2 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notification that the user wants to invoke a specific agent type, instructing Claude to invoke it with required context.

##### 3.1.2.3 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Configures a lightweight side-question agent with no tools available, running independently from the main agent and answering only from conversation context.

##### 3.1.2.4 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to route all user-facing replies through SendUserMessage, providing immediate acknowledgment for long-running work and sending checkpoints with meaningful information rather than filler status updates.

#### 3.1.3 Batch Processing & Parallel Work Orchestration

Large-scale codebase transformation through decomposition into independent, mergeable units executed in parallel by background agents, with planning and progress tracking phases.

##### 3.1.3.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes through three phases: research and planning in plan mode, spawning background worker agents per unit, and tracking progress via status tables. Decomposes work into 5–30 independent, mergeable units.

##### 3.1.3.2 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while executing dependent calls sequentially to increase efficiency.

### 3.2 Background Jobs and Autonomous Safety

State classification for long-running agents, job isolation, autonomous execution guardrails, and confirmation requirements for destructive operations.

#### 3.2.1 Background Job & Agent State Management

Manages long-running background agents by classifying transcript state (working/blocked/done/failed) with actionable needs and tempo signals. Isolates job-specific temporary directories to prevent collisions, streams stdout events as notifications, and guides autonomous loops to maintain established work like PR reviews and CI diagnosis.

##### 3.2.1.1 [Background job behavior (System Prompt)](system-prompts/system-prompt-background-job-behavior.md)

Instructs background job agents to narrate progress, restate results in message text for classifier extraction, and signal completion status (done/blocked/failed) with concise one-line outcomes that readers can understand without full transcript context.

##### 3.2.1.2 [Background session instructions (System Prompt)](system-prompts/system-prompt-background-session-instructions.md)

Instructs background job sessions to use the job-specific temporary directory instead of /tmp to avoid file collisions between parallel jobs, and to follow worktree isolation guidance.

##### 3.2.1.3 [Background agent state classifier (Agent Prompt)](system-prompts/agent-prompt-background-agent-state-classifier.md)

Classifies background agent transcript tails into working, blocked, done, or failed states with JSON output including detail, tempo, and user-actionable needs. Handles edge cases like external waits, API errors, and scope notes.

##### 3.2.1.4 [Background agent state classification examples (Data)](system-prompts/data-background-agent-state-classification-examples.md)

Example assistant-message tails and JSON outputs for classifying background agent state (working/blocked/done/failed), tempo, needs, and results.

##### 3.2.1.5 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Streams stdout events from long-running scripts as chat notifications, with detailed guidance on script quality, output filtering, coverage of terminal states, and avoiding unbounded commands for single-event scenarios.

##### 3.2.1.6 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

System prompt for forked worker sub-agents that execute a single directive from the parent agent and report back concisely without spawning further sub-agents.

##### 3.2.1.7 [Autonomous loop check (System Prompt)](system-prompts/system-prompt-autonomous-loop-check.md)

Guides timer-based autonomous invocations to continue established work from conversation transcripts, maintain pull requests by addressing CI failures and review threads, and avoid inventing new work. Handles repeated idle checks by scaling back verbosity and distinguishing reversible from irreversible actions.

#### 3.2.2 Autonomous Execution & Auto Mode

Behavioral frameworks governing Claude's autonomous action execution, balancing continuous operation with safety guardrails that require confirmation for destructive or irreversible operations while encouraging proactive problem-solving.

##### 3.2.2.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Defines continuous autonomous execution mode where Claude executes immediately with reasonable assumptions, minimizes interruptions, prefers action over planning, and avoids destructive or data-exfiltrating actions without explicit confirmation.

##### 3.2.2.2 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a risk-aware framework requiring user confirmation before destructive, hard-to-reverse, or shared-state-affecting actions like force-pushes, deletions, and external communications, while encouraging diagnosis of root causes rather than bypassing safety checks.

##### 3.2.2.3 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Authorizes Claude to attempt ambitious tasks and defer to user judgment on scope rather than declining based on perceived complexity.

### 3.3 Agent Creation & Configuration

Specialized agents for designing custom AI agents, validating safety rules, and guiding users through Claude's tool ecosystem, producing operational specifications and documentation.

#### 3.3.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces JSON output with agent identifier, usage triggers, and complete operational manual.

#### 3.3.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for Claude Code, evaluating clarity, completeness, conflicts, and actionability across allow, soft_deny, and environment categories.

#### 3.3.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with code examples and feature discovery.

---

## 4. Planning, Scheduling, and Workflow Automation

Structured planning phases, recurring job scheduling, hook-based event automation, and skill creation for converting repeatable workflows into reusable capabilities.

### 4.1 Planning Mode Workflows

Structured planning phases that separate design from implementation. Multiple workflow variants support iterative pair-planning, multi-agent exploration, and subagent constraints. Plan mode requires explicit approval before code changes and enforces read-only operations during planning. Remote planning enables codebase exploration and diagram-rich plan generation.

#### 4.1.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Defines a five-phase planning workflow with parallel exploration and multi-agent planning, guiding Claude through understanding, design, review, implementation, and approval phases with specific agent types and parallelization strategies.

#### 4.1.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Describes an iterative pair-planning workflow where Claude explores code, updates a plan file incrementally, and asks user questions to resolve ambiguities before requesting approval.

#### 4.1.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instructions for subagents, restricting edits to the plan file and read-only operations while allowing comprehensive query answering and clarification questions.

#### 4.1.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, instructing evaluation of existing plan against current request and decision to continue or start fresh.

#### 4.1.5 [Plan mode approval tool enforcement (System Reminder)](system-prompts/system-reminder-plan-mode-approval-tool-enforcement.md)

Enforces that plan mode turns must end with either AskUserQuestion for clarification or ExitPlanMode for approval, forbidding approval requests via other methods.

#### 4.1.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

#### 4.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notification that Claude has exited plan mode and can now make edits, run tools, and take actions.

#### 4.1.8 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Activates a multi-agent planning workflow where Claude spawns parallel agents to explore codebase architecture, identify files for modification, and critique the plan before implementation or teleportation to local execution.

#### 4.1.9 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore codebases, produce diagram-rich implementation plans via ExitPlanMode, and handle approval, rejection, or teleportation back to the user's local terminal.

#### 4.1.10 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Configures remote planning sessions to explore codebases with Glob and Grep, produce implementation plans via ExitPlanMode, and handle plan approval, rejection, or teleportation workflows.

#### 4.1.11 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Proactively enter plan mode for non-trivial implementation tasks to explore codebase and design approaches for user approval before writing code. Use when multiple valid approaches exist, architectural decisions are needed, or multi-file changes are required.

#### 4.1.12 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning phase and request user approval by reading the plan file. Use only for implementation tasks requiring code changes, not for research or exploration.

#### 4.1.13 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent for designing implementation plans. Explores codebase, identifies patterns, traces code paths, and outputs step-by-step strategies with critical files listed.

### 4.2 Cron Scheduling and Periodic Tasks

Recurring and one-shot job scheduling with cron syntax, dynamic self-paced loops, morning digests, and pre-meeting context gathering.

#### 4.2.1 Scheduling, Cron & Loop Execution

Schedules recurring and one-shot jobs using cron syntax with timezone support and load distribution. Supports dynamic self-paced loops that arm event monitors as primary wake signals and schedule fallback heartbeat delays. Offers cloud-based scheduling for long-interval tasks and immediate execution of parsed prompts.

##### 4.2.1.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron-based jobs using standard 5-field cron syntax in user's local timezone. Avoid :00 and :30 minute marks for load distribution; recurring tasks auto-expire after configured days.

##### 4.2.1.2 [ScheduleWakeup (/loop dynamic mode) [Tool Description]](system-prompts/tool-description-schedulewakeup-loop-dynamic-mode.md)

Schedule next iteration in /loop dynamic (self-paced) mode by passing the same prompt back; use sentinel for autonomous loops.

##### 4.2.1.3 [Snooze (delay and reason guidance) [Tool Description]](system-prompts/tool-description-snooze-delay-and-reason-guidance.md)

ScheduleWakeup schedules resumption of dynamic /loop tasks with guidance on delaySeconds relative to the 5-minute prompt cache TTL. Delays under 270s preserve cache warmth for active polling; longer delays (1200s–1800s) suit idle waits. The reason field documents the chosen delay rationale.

##### 4.2.1.4 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into an interval and prompt, converts the interval to a cron expression, schedules a recurring task, and immediately executes the prompt.

##### 4.2.1.5 [/loop slash command (dynamic mode) [Skill]](system-prompts/skill-loop-slash-command-dynamic-mode.md)

Parses user input into an interval and prompt for scheduling recurring or dynamically self-paced loop executions, with three parsing rules and dynamic-mode fallback.

##### 4.2.1.6 [/loop self-pacing mode (Skill)](system-prompts/skill-loop-self-pacing-mode.md)

Instructions for self-pacing a recurring loop by arming event monitors as primary wake signals and scheduling fallback heartbeat delays between iterations.

##### 4.2.1.7 [/loop cloud-first scheduling offer (Skill)](system-prompts/skill-loop-cloud-first-scheduling-offer.md)

Decision tree that offers cloud-based scheduling for long-interval loops (≥60 minutes or daily phrasing) before falling back to local session loops.

##### 4.2.1.8 [Dynamic pacing loop execution (Skill)](system-prompts/skill-dynamic-pacing-loop-execution.md)

Step-by-step instructions for executing a self-pacing loop that runs tasks, arms persistent event monitors as primary wake signals, schedules fallback heartbeat delays, and handles task notifications.

##### 4.2.1.9 [Schedule recurring cron and execute immediately (compact) [Skill]](system-prompts/skill-schedule-recurring-cron-and-execute-immediately-compact.md)

Creates a recurring cron job, confirms the schedule with the user, and immediately executes the parsed prompt without waiting for the first cron fire.

##### 4.2.1.10 [Schedule recurring cron and run immediately (Skill)](system-prompts/skill-schedule-recurring-cron-and-run-immediately.md)

Converts an interval to a cron expression, schedules a recurring task, confirms to the user, and immediately executes the task without waiting for the first cron fire.

##### 4.2.1.11 [Loop wakeup not scheduled (System Reminder)](system-prompts/system-reminder-loop-wakeup-not-scheduled.md)

Instructs Claude on handling /loop dynamic mode wakeups that were not scheduled, specifying when to re-issue with the prompt field and when to terminate the loop.

##### 4.2.1.12 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers or one-time runs via Anthropic's cloud API, handling routine creation, updates, listing, and MCP connector attachment with timezone conversion and environment selection.

##### 4.2.1.13 [Proactive schedule offer after follow-up work (System Prompt)](system-prompts/system-prompt-proactive-schedule-offer-after-follow-up-work.md)

Instructs Claude to offer scheduling background agents for natural follow-up actions after completing work, with high confidence thresholds and specific trigger patterns like feature flags, soak windows, and recurring tasks.

##### 4.2.1.14 [Schedule proactive offer guidance (Tool Description)](system-prompts/tool-description-schedule-proactive-offer-guidance.md)

Schedule recurring or one-time remote agents for future work. Proactively offer scheduling after successful work with natural follow-ups like feature rollouts, new monitors, or cleanup tasks.

#### 4.2.2 Morning Routines & Periodic Scheduled Tasks

Scheduled background tasks that prepare users for their day and keep them informed of actionable changes. These include once-daily morning digests combining calendar and inbox summaries, pre-meeting context gathering triggered minutes before events, and periodic background scans that surface only time-sensitive updates.

##### 4.2.2.1 [/morning-checkin daily brief (Skill)](system-prompts/skill-morning-checkin-daily-brief.md)

Once-a-day scheduled task that prepares a daily calendar and inbox digest, schedules pre-meeting check-ins, and records the day's top priority.

##### 4.2.2.2 [/pre-meeting-checkin event brief (Skill)](system-prompts/skill-pre-meeting-checkin-event-brief.md)

Fires a few minutes before a calendar event to gather materials, recent thread context, open questions, and deliver a concise meeting brief.

##### 4.2.2.3 [/catch-up periodic heartbeat (Skill)](system-prompts/skill-catch-up-periodic-heartbeat.md)

Periodic background task that scans user priorities, checks for actionable changes across connected tools, and surfaces a brief digest only when something time-sensitive or actionable appears.

### 4.3 Hook System & Configuration

Event-driven automation framework for Claude Code that intercepts tool execution and lifecycle events. Hooks execute commands or prompts at defined points (PermissionRequest, PreToolUse, PostToolUse), with configuration stored in settings.json. Includes verification workflows for constructing reliable hooks and handling success/error outcomes.

#### 4.3.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Delivers additional context information from a hook execution.

#### 4.3.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

#### 4.3.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix label for messages indicating a hook stopped continuation.

#### 4.3.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook stopped continuation with an associated message.

#### 4.3.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful completion of a hook with its output content.

#### 4.3.6 [Stop hook blocking error (System Reminder)](system-prompts/system-reminder-stop-hook-blocking-error.md)

Reports an error from a blocking stop hook command execution.

#### 4.3.7 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Specifies the complete hooks system for Claude Code, including event types (PermissionRequest, PreToolUse, PostToolUse, etc.), hook types (command, prompt, agent), input/output JSON schemas, and common patterns for auto-formatting, logging, and test execution.

#### 4.3.8 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Guides Claude through modifying Claude Code's settings.json configuration, with emphasis on reading existing files before writing, merging arrays carefully to preserve settings, and distinguishing when to use the /config command versus direct JSON editing. Covers hook configuration for automating actions on events like PreToolUse and PostToolUse, with detailed troubleshooting guidance.

#### 4.3.9 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Provides a rigorous 7-step process for constructing and verifying hooks in Claude Code, from deduplication checks through pipe-testing raw commands, JSON schema validation, and proof-of-execution. Emphasizes testing hooks in the actual project environment before deployment and handling settings watcher limitations.

### 4.4 Skills, Project Setup, and CI Integration

Converting workflows into reusable slash-command skills, CLAUDE.md project initialization, and GitHub Actions integration for CI/CD pipelines.

#### 4.4.1 Skill Creation & Management

Framework for converting repeatable workflows into reusable skills through structured analysis, user interviews, and permission management. Enables skill invocation via slash commands and generates permission allowlists from usage patterns to reduce friction.

##### 4.4.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Skill tool invokes specialized capabilities and domain knowledge in response to user requests or slash commands. It requires exact skill names from available lists and must be called before generating other responses when a skill matches the user's intent.

##### 4.4.1.2 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-step process to convert repeatable session workflows into reusable skills: analyze the session, interview the user with AskUserQuestion, write a SKILL.md file with structured steps and success criteria, and confirm before saving.

##### 4.4.1.3 [Generate permission allowlist from transcripts (Skill)](system-prompts/skill-generate-permission-allowlist-from-transcripts.md)

Analyzes session transcripts to extract frequently used read-only tool patterns and adds them to the project's permission allowlist, reducing permission prompts while excluding arbitrary code execution patterns.

#### 4.4.2 CLAUDE.md & Project Initialization

Structured onboarding flows for setting up Claude Code environments, including codebase analysis, iterative documentation refinement, and team-specific guidance. Covers both individual project initialization and team-wide setup with MCP servers, skills, and usage patterns.

##### 4.4.2.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks in a repository, including codebase exploration, user interviews, iterative proposal refinement, and optimization suggestions.

##### 4.4.2.2 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding a new teammate to a team's Claude Code setup, walking them through usage stats, setup checklists, MCP servers, skills, and team tips in a warm conversational style.

##### 4.4.2.3 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides (ONBOARDING.md) by analyzing usage data, classifying session types into work categories, and iteratively refining the guide with user feedback on team name, tips, and starter tasks.

##### 4.4.2.4 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview script for configuring Managed Agents from scratch, covering tool selection, skills, files, environment settings, and vault credentials. Emits YAML setup definitions and SDK runtime code.

#### 4.4.3 GitHub Integration & CI/CD Automation

Automation templates enabling Claude Code integration within GitHub workflows, triggered by @claude mentions in pull requests and issues with standardized installation and security configuration.

##### 4.4.3.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code integration when @claude is mentioned in PR comments, issues, or reviews.

##### 4.4.3.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing the Claude Code GitHub App, explaining the integration, security model, and how to trigger Claude via @claude mentions.

---

## 5. Session Management, Memory, and Context

Mechanisms for preserving conversation state, accumulating knowledge across sessions, tracking tasks, and searching conversation history.

### 5.1 Persistent Memory and Knowledge Accumulation

File-based memory types that store user context, project knowledge, and feedback across sessions, with consolidation and staleness verification.

#### 5.1.1 Persistent Memory System

File-based memory that accumulates user context, feedback, and project knowledge across sessions. Four memory types (user, feedback, project, reference) store role details, work preferences, and architectural patterns with deduplication and staleness verification. Memory reconciliation ensures consistency with current instructions and team knowledge.

##### 5.1.1.1 [Memory instructions (System Prompt)](system-prompts/system-prompt-memory-instructions.md)

Defines persistent file-based memory format with frontmatter (name, description, type), four memory types (user, feedback, project, reference), deduplication rules, and staleness handling to avoid saving repo-derivable or conversation-local information.

##### 5.1.1.2 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs Claude to verify recalled memories against current file state before acting on them, deleting stale records that conflict with observed reality and saving fresh memories if the information remains relevant.

##### 5.1.1.3 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about the user's role, goals, knowledge, and preferences across sessions, with one detail per file to build a collaborative picture over time.

##### 5.1.1.4 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes feedback memory type storing user guidance on work approaches from both successes and failures, requiring checks for contradictions with team memories before saving.

##### 5.1.1.5 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Describes feedback memory type capturing user guidance on work approaches from both successes and failures, requiring explicit checking for contradictions with team feedback before saving and noting any overrides.

##### 5.1.1.6 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as information about role, goals, responsibilities, and knowledge, aiming to tailor behavior to user preferences while avoiding negative judgments.

##### 5.1.1.7 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Presents the contents of a memory file by path with type description.

##### 5.1.1.8 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

##### 5.1.1.9 [Dream CLAUDE.md memory reconciliation (System Prompt)](system-prompts/system-prompt-dream-claudemd-memory-reconciliation.md)

Guides dream consolidation to reconcile stored memories against CLAUDE.md instructions, deleting stale memories when procedures diverge, flagging contradictions for user review, and preserving contextual details when applicable.

##### 5.1.1.10 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Establishes conservative rules for managing shared team memories during dream consolidation, including deduplication, cautious pruning to avoid deleting teammate dependencies, and preventing accidental promotion of personal memories to shared space.

##### 5.1.1.11 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Instructs agents to update memory with domain-specific discoveries across conversations, building institutional knowledge about code patterns, architectural decisions, and conventions. Provides examples for code reviewers, test runners, architects, and documentation writers.

#### 5.1.2 Memory Consolidation & Dream Agents

Nightly memory housekeeping that consolidates session logs and transcripts into persistent topic files, extracts actionable facts for queries, and maintains a pruned index under size limits. Supports both session-specific and user profile memory templates for long-term context retention.

##### 5.1.2.1 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing memories, gathering recent signal from session logs and transcripts, merging updates into topic files, and pruning the index to stay under size limits.

##### 5.1.2.2 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Prunes memory files by deleting stale or invalidated memories and collapsing duplicates, preserving team memories conservatively and maintaining creation dates for sort order.

##### 5.1.2.3 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and extracts relevant facts (max 7) for each query, returning JSON with facts and cited filenames. Avoids restating queries and prioritizes actionable context.

##### 5.1.2.4 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files for Claude Code based on user query, avoiding false positives from keyword overlap and excluding previously selected memories.

##### 5.1.2.5 [/dream memory consolidation (Skill)](system-prompts/skill-dream-memory-consolidation.md)

Nightly housekeeping job that consolidates session logs and transcripts into persistent memory topics, learnings, and a pruned MEMORY.md index under 200 lines.

##### 5.1.2.6 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing schedules, creating a cron task, confirming details, and running an immediate consolidation.

##### 5.1.2.7 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory files documenting current state, task specification, files, workflow, errors, codebase, learnings, and worklog.

##### 5.1.2.8 [User profile memory template (Data)](system-prompts/data-user-profile-memory-template.md)

Template for user profile memory covering personal details, work context, schedule, and communication preferences.

### 5.2 Session State and Conversation Continuity

Structured summarization for context restoration across session boundaries, session naming, history search, and task progress tracking.

#### 5.2.1 Session Context & Conversation Compaction

Mechanisms for preserving and resuming conversation state across session boundaries. Structured summarization formats capture task progress, discoveries, and pending work, enabling efficient context restoration when conversations are split across windows or machines. Includes restoration of previously invoked skills to prevent re-execution of setup actions.

##### 5.2.1.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries covering task overview, current state, discoveries, next steps, and context to preserve, enabling efficient resumption in future windows.

##### 5.2.1.2 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Instructs Claude to create detailed conversation summaries for partial compaction using a structured analysis process and nine-section format, ensuring continuity when newer messages follow the summary.

##### 5.2.1.3 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries with analysis of user intent, technical concepts, files modified, errors encountered, and pending tasks. Includes full code snippets and next-step guidance aligned with recent work.

##### 5.2.1.4 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portion (after retained context) with analysis of user intent, technical concepts, files modified, errors, and next steps. Includes full code snippets and direct quotes.

##### 5.2.1.5 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

##### 5.2.1.6 [Previously invoked skills (System Reminder)](system-prompts/system-reminder-previously-invoked-skills.md)

Restores context from skills invoked before conversation compaction, warning Claude not to re-execute setup actions or treat prior inputs as current instructions.

#### 5.2.2 Session Naming & Metadata Generation

Automatic generation of human-readable session identifiers from conversation content. Produces concise, scannable titles in multiple formats (sentence-case and kebab-case) that allow users to quickly recognize sessions in lists and search results.

##### 5.2.2.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise sentence-case session titles (3–7 words) that clearly capture the main topic or goal so users recognize the session in a list.

##### 5.2.2.2 [/rename auto-generate session name (Agent Prompt)](system-prompts/agent-prompt-rename-auto-generate-session-name.md)

Auto-generates kebab-case session names (2–4 words) from conversation context, returning JSON with a name field.

#### 5.2.3 Session Search & History Management

Tools for discovering past conversations and maintaining session-specific state. Enables searching transcript archives by relevance, updating session memory during active conversations, and isolating temporary files to session-specific directories for clean state management.

##### 5.2.3.1 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent prompt for searching past Claude Code conversation sessions by scanning .jsonl transcript files and returning matching session IDs ordered by relevance.

##### 5.2.3.2 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations while preserving structure, headers, and section descriptions with dense, actionable content.

##### 5.2.3.3 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

#### 5.2.4 Task & Todo Tracking Tools

Structured task management for multi-step work using imperative descriptions and progress states (pending/in_progress/completed). Tracks work across sessions and reminds Claude to maintain clean, up-to-date task lists as work progresses.

##### 5.2.4.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

TodoWrite creates and manages structured task lists for complex multi-step work, tracking progress with pending/in_progress/completed states. It requires both imperative and active-form descriptions, limits one task in_progress at a time, and provides detailed guidance on when to use versus skip.

##### 5.2.4.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

TaskCreate organizes complex multi-step work into structured task lists with imperative subjects and optional active-form descriptions. Tasks track progress across coding sessions and help users understand work status, with guidance on when to use versus skip the tool.

##### 5.2.4.3 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Reminds Claude to use the TodoWrite tool for tracking task progress and cleaning up stale todo lists when relevant, without mentioning the reminder to the user.

##### 5.2.4.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Reminds Claude to use task tracking tools to create and update tasks when working on trackable progress, while keeping the reminder hidden from the user.

##### 5.2.4.5 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to break down and track work using TodoWrite, marking tasks as completed immediately rather than batching.

---

## 6. Claude API, SDKs, and External Integrations

Reference documentation and practical guides for integrating Claude via REST APIs, language-specific SDKs, managed agent APIs, streaming, batches, and browser automation.

### 6.1 Core API and SDK Reference

Language-specific SDK documentation covering client initialization, streaming, vision, tool use, prompt caching, and model selection across Python, TypeScript, Go, Java, and more.

#### 6.1.1 Claude API SDK Reference Documentation

Language-specific SDK and HTTP API documentation for integrating Claude across Python, TypeScript, Go, Java, Ruby, C#, PHP, and cURL. Covers client initialization, streaming, vision, tool use, prompt caching, extended thinking, and structured outputs with model catalog for version selection.

##### 6.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference including client configuration, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization strategies.

##### 6.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference including client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization.

##### 6.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool runner, manual tool loops, thinking, prompt caching, server-side tools, and context editing.

##### 6.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference including client initialization, basic requests, streaming, thinking, tool use with annotated classes and tool runner, effort parameter, prompt caching, and structured output.

##### 6.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, tool runner, and prompt caching.

##### 6.1.1.6 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference including client initialization, basic requests, streaming, thinking, tool use, effort parameter, prompt caching, structured output, and PDF document input.

##### 6.1.1.7 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization, basic requests, streaming, tool runner, extended thinking, prompt caching, structured outputs, and server-side tools.

##### 6.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL with examples for basic requests, streaming, tool use, prompt caching, and extended thinking.

##### 6.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact model IDs, context windows, max output tokens, and programmatic model discovery via the Models API.

#### 6.1.2 Streaming, Batches & Files API Reference

APIs for efficient message processing and content handling: real-time streaming with content-type routing, asynchronous batch processing at reduced cost, file upload and lifecycle management, and prompt caching strategies for optimizing token economics across request patterns.

##### 6.1.2.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, error handling, and token usage tracking.

##### 6.1.2.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, handling different content types (text, thinking, tool-use), and final message retrieval.

##### 6.1.2.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, processing Messages API requests asynchronously at 50% cost with batch creation, polling, result retrieval, and prompt caching support.

##### 6.1.2.4 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files, using them in messages, managing file lifecycle, and end-to-end examples with documents and images.

##### 6.1.2.5 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript reference for the Files API, covering file upload (max 500 MB), listing, deletion, and usage in messages with document content blocks and citations.

##### 6.1.2.6 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Design patterns for effective prompt caching: placement strategies, architectural guidance, silent invalidators to avoid, and economics of cache reads vs writes.

#### 6.1.3 Tool Use & Agentic Loop Reference

Language-agnostic and language-specific implementations of tool integration patterns, covering tool definitions, selection mechanisms, execution loops (both server-side and manual), code execution, web search, and structured output serialization across Python and TypeScript.

##### 6.1.3.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), and structured outputs.

##### 6.1.3.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference covering tool runner, manual agentic loops, MCP tool conversion, code execution, memory tool, and structured outputs with Pydantic.

##### 6.1.3.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod, manual agentic loops with streaming, code execution, memory tool, and structured outputs.

### 6.2 Managed Agents and Application Building

Stateful agent application architecture with persistent sessions, event-driven communication, MCP credential management, and practical adoption guides.

#### 6.2.1 Managed Agents API Reference & Architecture

Complete reference for building stateful agent applications with persistent configuration, session-based interaction, and integrated tooling. Covers agent lifecycle, environment setup, event-driven communication, memory persistence, MCP credential management, and language-specific SDKs for orchestrating multi-turn agent sessions.

##### 6.2.1.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Overview of Managed Agents architecture, the mandatory agent-then-session flow, beta headers, reading guide, and common pitfalls including agent versioning and MCP credential management.

##### 6.2.1.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Core concepts for Managed Agents: Agent (persisted config), Session (stateful interaction), Environment (container template), lifecycle, versioning, and the mandatory agent-first flow.

##### 6.2.1.3 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive endpoint reference for Managed Agents API covering agents, sessions, events, resources, environments, vaults, memory stores, files, and skills with SDK methods and request/response schemas.

##### 6.2.1.4 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference for Managed Agents environments (cloud config, networking), file resources (upload/mount), GitHub repository mounting, and session output file retrieval.

##### 6.2.1.5 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Reference for sending and receiving events on managed agent sessions: streaming vs polling, message queuing, interrupts, tool confirmations, and event payload details.

##### 6.2.1.6 [Managed Agents memory stores reference (Data)](system-prompts/data-managed-agents-memory-stores-reference.md)

Reference for persistent memory stores in Managed Agents: store creation, session attachment via FUSE mounts, memory CRUD, concurrency control, versioning, and redaction.

##### 6.2.1.7 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference for Managed Agents tools (agent toolset, MCP, custom), permission policies, vault credential management for MCP authentication, and skills API for specialized agents.

##### 6.2.1.8 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Reference guide for client-side patterns driving managed agent sessions: stream reconnection with deduplication, idle-break gating, tool confirmations, interrupts, and custom tool execution.

##### 6.2.1.9 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Python SDK reference for Managed Agents covering agent creation, session management, streaming, custom tools, file uploads, and MCP server integration.

##### 6.2.1.10 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

TypeScript SDK reference for Managed Agents covering agent creation, session management, streaming, custom tools, file uploads, and MCP server integration.

##### 6.2.1.11 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

cURL and raw HTTP examples for Managed Agents API covering environment creation, agent setup, session management, event streaming, file operations, and MCP integration.

#### 6.2.2 Building LLM Applications — Skills & Guides

Practical guidance for Claude API adoption spanning SDK selection, model migration, agent design patterns, context optimization, and error handling, with live documentation sources and CLI tooling for resource management.

##### 6.2.2.1 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Comprehensive guide for building LLM applications with Claude, including language detection, API surface selection (Claude API vs. Managed Agents), model defaults, thinking/effort configuration, and language-specific documentation reading for Python, TypeScript, Java, Go, Ruby, C#, and PHP.

##### 6.2.2.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Quick-reference navigation template for language-specific Claude API documentation, mapping common tasks (streaming, batches, tool-use, agents, caching) to their corresponding documentation files.

##### 6.2.2.3 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide for building agents on the Claude API, covering tool surface design (bash vs. dedicated tools), context management strategies (editing, compaction, memory), caching principles, and patterns for composing tool calls and scaling instruction sets.

##### 6.2.2.4 [Model migration guide (Skill)](system-prompts/skill-model-migration-guide.md)

Step-by-step instructions for migrating existing code to newer Claude models (Opus 4.7, Opus 4.6, Sonnet 4.6), covering breaking changes, deprecated parameters, per-SDK syntax, prompt-behavior shifts, and comprehensive migration checklists.

##### 6.2.2.5 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for current Claude API docs (models, features, tools, managed agents) and SDK repositories, with extraction prompts for fetching live data.

##### 6.2.2.6 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400, 401, 403, 404, 429, 500, 529) with causes, fixes, and SDK exception handling patterns.

##### 6.2.2.7 [Anthropic CLI (Data)](system-prompts/data-anthropic-cli.md)

Reference documentation for the ant CLI covering installation, authentication, command structure, input/output shaping, managed agents workflows, and scripting patterns for control-plane resource management.

### 6.3 Browser Automation and Web Retrieval

Programmatic desktop and browser interaction via computer-use MCP, plus real-time web search and content fetching with source attribution.

#### 6.3.1 Browser & Computer Use Automation

Tools and guidelines for programmatic interaction with desktop applications through Chrome browser automation and computer-use MCP. Enables multi-step workflows via sequential batch execution, visual feedback through screenshots, and safe interaction patterns with built-in safeguards against dialogs and stale state.

##### 6.3.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Use mouse and keyboard to interact with a Chrome browser and take screenshots. Consult screenshots before clicking to determine element coordinates accurately.

##### 6.3.1.2 [BrowserBatch (Tool Description)](system-prompts/tool-description-browserbatch.md)

Execute multiple browser tool calls sequentially in one round trip, stopping on first error. Use extensively for predictable multi-step workflows like navigation, clicking, typing, and screenshots.

##### 6.3.1.3 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Computer action parameter defines mouse and keyboard interactions for Chrome browser automation, including clicks, typing, scrolling, key presses, dragging, zooming, and hover states.

##### 6.3.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, with specific syntax for selecting and calling tools like tabs_context_mcp.

##### 6.3.1.5 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides guidelines for browser automation including GIF recording with extra frames, console log debugging with pattern filtering, avoiding JavaScript dialogs that block commands, and checking tab context at session startup to avoid reusing stale tab IDs.

##### 6.3.1.6 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools to interact with desktop applications, including tool selection tiers (dedicated MCP, Chrome, computer-use), access-tier restrictions, link-safety guidelines, and restrictions on financial actions.

#### 6.3.2 Web Fetch & Search Tools

Real-time web content retrieval and search capabilities that extend knowledge beyond training cutoff, with caching, markdown conversion, and source attribution requirements.

##### 6.3.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

WebFetch retrieves and analyzes web content by converting HTML to markdown and processing it with a fast model. It includes a 15-minute cache, handles redirects, and prefers MCP-provided alternatives when available.

##### 6.3.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

WebSearch provides current information beyond Claude's knowledge cutoff by searching the web and returning results as markdown hyperlinks. It requires a mandatory Sources section in responses and supports domain filtering.

##### 6.3.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Prompt for agent that summarizes verbose WebFetch output concisely, enforcing character limits on quotes and paraphrasing for untrusted domains.

---

## 7. Code Quality, Security, and Review

Tools and workflows for evaluating code correctness, detecting vulnerabilities, running verification tests, and escalating decisions to reviewers.

### 7.1 Security Monitoring and Threat Analysis

Multi-layered security evaluation covering prompt injection, credential leakage, vulnerability detection in authentication and input validation, and command injection analysis.

#### 7.1.1 Security Review & Threat Monitoring

Multi-layered security evaluation for autonomous actions and code changes. Monitors tool use against threat models covering prompt injection, scope creep, and credential leakage, while analyzing code for exploitable vulnerabilities in input validation, authentication, and data exposure. Distinguishes legitimate security work from malicious intent.

##### 7.1.1.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Defines the security monitor's role evaluating autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with user intent as the final signal and high evidence bars for authorization.

##### 7.1.1.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Specifies environment context, comprehensive block rules (git destructive, code execution, cloud operations, credential leakage, data exfiltration), and allow exceptions for security monitoring of autonomous agent tool use.

##### 7.1.1.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt analyzing code changes for exploitable vulnerabilities in input validation, authentication, cryptography, injection, and data exposure with high-confidence filtering and false-positive exclusions.

##### 7.1.1.4 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Authorizes assistance with legitimate security work (authorized testing, CTF, defensive security, research) while refusing malicious uses like DoS attacks, supply chain compromise, or detection evasion.

##### 7.1.1.5 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Emphasizes avoiding security vulnerabilities including command injection, XSS, and SQL injection, with immediate fixes if insecure code is written.

#### 7.1.2 Code Review & Command Analysis

Evaluation of code quality, correctness, and security through pull request analysis and bash command inspection. Detects injection vulnerabilities in shell commands and reviews code changes for style, performance, test coverage, and security implications.

##### 7.1.2.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Instructs Claude to review GitHub pull requests by fetching PR details and diffs, then analyzing code quality, style, correctness, performance, test coverage, and security implications.

##### 7.1.2.2 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions for bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy commands.

##### 7.1.2.3 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands for Claude Code's safety framework. Returns prefix string or 'command_injection_detected' to enable allowlist-based tool approval.

### 7.2 Verification, Testing, and Code Quality

Automated quality assurance through adversarial testing, build execution, runtime observation, code simplification diagnostics, and structured verdict reporting.

#### 7.2.1 Verification & Testing Workflows

Automated quality assurance through adversarial testing of code changes, combining build execution, test suite runs, and runtime observation at user-facing surfaces (CLI, API, HTTP). Generates structured verdicts with captured evidence and supports skill creation for domain-specific verification automation.

##### 7.2.1.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Subagent that adversarially tests implementations by running builds, test suites, linters, and boundary/concurrency probes, issuing PASS/FAIL/PARTIAL verdicts with required evidence of actual execution.

##### 7.2.1.2 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Comprehensive verification skill guiding Claude to validate code changes by running the actual application, observing runtime behavior at user-facing surfaces (CLI, API, GUI), and probing beyond happy paths. Emphasizes evidence capture, avoiding test reruns, and reporting verdicts (PASS/FAIL/BLOCKED/SKIP) with detailed findings and observations.

##### 7.2.1.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Demonstrates verification workflow for CLI changes by building, running with test arguments, and comparing output against expected behavior. Shows how to validate new flags, test non-regression, and parse machine-readable output formats.

##### 7.2.1.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Demonstrates verification workflow for server and API changes using curl to test endpoints, with server lifecycle management via readiness polling. Shows how to validate response headers, status codes, and behavioral changes like rate-limit headers.

##### 7.2.1.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically test code changes, including project auto-detection, verification tool setup (Playwright, Tmux, HTTP), authentication configuration, and skill generation with allowed-tool restrictions.

##### 7.2.1.6 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to call a verification tool directly after completing plan implementation to confirm all plan items were executed correctly.

#### 7.2.2 Code Quality & Simplification

Diagnostic and improvement tools that identify code reuse opportunities, quality issues like redundancy and leaky abstractions, performance bottlenecks, and runtime errors through parallel analysis and log inspection.

##### 7.2.2.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel agents to identify code reuse opportunities, quality issues (redundancy, parameter sprawl, leaky abstractions), and efficiency problems (unnecessary work, missed concurrency, hot-path bloat).

##### 7.2.2.2 [Debugging (Skill)](system-prompts/skill-debugging.md)

Helps users debug Claude Code session issues by reading debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 7.2.2.3 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by checking process state, CPU usage, memory, and child processes, then posts findings to Slack.

#### 7.2.3 Review & Decision Checkpoints

Mechanisms for escalating work to stronger reviewers and evaluating task completion criteria. Integrates advisor consultation into decision workflows while surfacing conflicts between evidence and guidance.

##### 7.2.3.1 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructs Claude to call the advisor tool before substantive work, when stuck, or before declaring completion, forwarding full conversation history to a stronger reviewer model. Emphasizes making deliverables durable before advisor calls and giving advice serious weight while surfacing conflicts between evidence and guidance.

##### 7.2.3.2 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks in Claude Code by reading conversation transcripts and returning JSON indicating whether the condition is satisfied with quoted evidence.

---

## 8. User Experience, Communication, and Runtime Configuration

Claude's communication style, interactive user tools, output formatting, reasoning calibration, resource monitoring, diagnostics, and runtime environment configuration.

### 8.1 Communication Style and Response Presentation

Conventions for concise updates, code citation, format matching task complexity, and Claude's core voice, values, and directness principles.

#### 8.1.1 Communication Style & Response Formatting

Establishes conventions for how Claude presents information: concise user-facing updates, minimal internal narration, format matching task complexity, precise code citations with line numbers, and strategic inclusion of code snippets and file paths.

##### 8.1.1.1 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs Claude to give brief user-facing updates at key moments, write concise end-of-turn summaries, avoid narrating internal deliberation, match response format to task complexity, and minimize comments and planning documents in code.

##### 8.1.1.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number citations when referencing specific code locations for easy user navigation.

##### 8.1.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 8.1.1.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths, avoid emojis, omit colons before tool calls, include relevant file paths in final responses, and only include code snippets when load-bearing.

##### 8.1.1.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Instructs Claude to generate concise 3-5 word action summaries in present tense, naming specific files or functions rather than branches or vague descriptions, without using tools.

#### 8.1.2 Assistant Personality & Communication Principles

Defines Claude's communication voice, core values, and interaction style centered on directness, honesty, and respect for user attention.

##### 8.1.2.1 [Assistant voice and values template (Data)](system-prompts/data-assistant-voice-and-values-template.md)

Template content describing Claude's voice, values, and communication style emphasizing directness, honesty, collaboration, and respect for user time and attention.

#### 8.1.3 User Intent Prediction

Infers the user's next natural action based on conversation context, enabling proactive prompt suggestions without imposing Claude's voice or evaluative framing.

##### 8.1.3.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent conversation, avoiding evaluative or Claude-voice suggestions and staying silent when the next step is unclear.

### 8.2 User Interaction & Question Tools

Channels for bidirectional communication between Claude and users during task execution. AskUserQuestion gathers preferences and clarifications with optional visual previews; SendMessageTool delivers markdown with file attachments; PushNotification alerts users to critical events across terminal and mobile.

#### 8.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Enables Claude to ask users for preferences, clarifications, and implementation choices during execution, with guidance on plan-mode usage and avoiding plan-visibility references in questions.

#### 8.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Describes the optional preview field for single-select questions, allowing display of self-contained HTML artifacts like UI mockups, code snippets, and visual comparisons without script or style tags.

#### 8.2.3 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Send markdown messages to user with file attachments (paths or device references). Use status field to indicate intent: 'normal' for replies, 'proactive' for initiated communication.

#### 8.2.4 [PushNotification (Tool Description)](system-prompts/tool-description-pushnotification.md)

Send desktop notifications to user's terminal and phone (if Remote Control connected). Use sparingly for important events requiring user attention, keeping messages under 200 characters.

### 8.3 Coding Task Execution and Learning Modes

Pragmatic software engineering task execution guidelines alongside educational modes that shift Claude into a collaborative guide or step-by-step teacher.

#### 8.3.1 Coding Task Execution Guidelines

Directs Claude to treat user requests as concrete software engineering work—bug fixes, refactoring, code modifications—rather than abstract discussion, favoring deletion over compatibility shims and validating only at system boundaries.

##### 8.3.1.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Instructs Claude to interpret user requests in the context of software engineering tasks like bug fixes, refactoring, and code modifications, applying instructions to actual code rather than providing generic responses.

##### 8.3.1.2 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Advises deleting unused code completely rather than adding compatibility shims, renamed variables, or removal comments.

##### 8.3.1.3 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios, trusting internal code and framework guarantees, and validating only at system boundaries.

##### 8.3.1.4 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

#### 8.3.2 Learning & Teaching Modes

Interactive educational frameworks that shift Claude's role from task executor to collaborative guide. Learning mode requests user input on design decisions for substantial code segments and provides implementation-specific insights; teach mode offers step-by-step guidance through tooltip overlays instead of direct execution.

##### 8.3.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Defines learning mode behavior where Claude balances task completion with hands-on education by requesting user contributions for design decisions and business logic in code segments 20+ lines, using TodoList tracking and Learn by Doing request format.

##### 8.3.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code generation when learning mode is active, focusing on implementation choices specific to the codebase rather than generic programming concepts.

##### 8.3.2.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Request permission to guide user through tasks step-by-step with fullscreen tooltip overlays instead of direct access, for learning scenarios.

### 8.4 Runtime Environment and Output Calibration

Agent harness infrastructure, platform-specific constraints, output style controls, thinking depth tuning, terminal status display, and MCP tool discovery.

#### 8.4.1 Harness, Core Agent Infrastructure & Modes

Foundation layer defining the interactive agent's runtime environment, tool permissions, markdown output, and platform-specific constraints. Minimal mode strips hooks and background features for explicit CLI-driven workflows; platform editions document syntax quirks and policy chains for Windows PowerShell and WSL; REPL conventions enable dense JavaScript-based code investigation.

##### 8.4.1.1 [Harness instructions (System Prompt)](system-prompts/system-prompt-harness-instructions.md)

Defines core harness behavior including GitHub-flavored markdown output, tool permission modes, hook interception, context compaction, and code reference formatting for the interactive Claude Code agent.

##### 8.4.1.2 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode operation that disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags and supporting only ANTHROPIC_API_KEY or apiKeyHelper for authentication.

##### 8.4.1.3 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 syntax limitations and workarounds, including missing pipeline operators, ternary operators, stderr redirection quirks, and file encoding defaults.

##### 8.4.1.4 [WSL managed settings double opt-in (System Prompt)](system-prompts/system-prompt-wsl-managed-settings-double-opt-in.md)

Explains that WSL reads Windows managed settings policy chain only when an admin-enabled flag is set, with HKCU requiring additional user opt-in for policy application.

##### 8.4.1.5 [REPL tool usage and scripting conventions (System Prompt)](system-prompts/system-prompt-repl-tool-usage-and-scripting-conventions.md)

Defines dense JavaScript scripting conventions for REPL investigations, including shorthands for shell, file reads, and code search; batching rules; and API reference for efficient multi-step queries.

#### 8.4.2 Output Style & Thinking Calibration

Controls for presentation and reasoning depth. Active output styles enforce formatting guidelines; thinking frequency tunes internal reasoning to task complexity, skipping unnecessary deliberation for simple work; option previewer renders visual artifacts in side-by-side layouts for comparison.

##### 8.4.2.1 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and to follow its guidelines.

##### 8.4.2.2 [Thinking frequency tuning (System Reminder)](system-prompts/system-reminder-thinking-frequency-tuning.md)

Instructs Claude to calibrate internal reasoning frequency based on task complexity—responding directly to simple tasks without unnecessary thinking, while allowing deeper reasoning for complex work.

##### 8.4.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Defines the preview field for presenting visual artifacts like ASCII mockups, code snippets, and diagrams in side-by-side layout for single-select questions, supporting multiline monospace rendering.

#### 8.4.3 Terminal Status Display Configuration

Customizes shell status line output by translating PS1 configurations and injecting session metadata, model information, and token usage into terminal prompts.

##### 8.4.3.1 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

System prompt for configuring Claude Code status line display by converting shell PS1 configurations and creating custom status commands with session context, model info, and token usage.

#### 8.4.4 MCP Resource & Tool Discovery

Mechanisms for locating and retrieving tool definitions and MCP resources, including deferred tool schema fetching via keyword and name-based search.

##### 8.4.4.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 8.4.4.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but nothing displayable to Claude.

##### 8.4.4.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

ToolSearch fetches deferred tool definitions by querying against a tool list, returning complete JSONSchema definitions. It supports exact name selection, keyword search, and name-requirement filtering.

#### 8.4.5 Resource Budget & Token Monitoring

Real-time visibility into token and cost consumption, tracking usage against allocated budgets.

##### 8.4.5.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 8.4.5.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

#### 8.4.6 Diagnostics & Error Detection

Mechanisms for detecting system issues and handling permission failures. When diagnostics surface problems, Claude receives formatted alerts; when tool execution is denied, Claude attempts reasonable workarounds before escalating to the user if the capability is essential.

##### 8.4.6.1 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues with a formatted summary and list.

##### 8.4.6.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable workarounds when tool execution is denied, but to stop and explain to the user if the capability is essential, rather than attempting malicious bypasses.

#### 8.4.7 Insights, Analytics & Usage Reporting

Usage analysis and reporting system that extracts session patterns, identifies friction points, and surfaces optimization opportunities. Generates actionable recommendations for CLAUDE.md improvements, feature adoption, and future workflow automation.

##### 8.4.7.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary covering what's working, hindrances (Claude and user-side), quick wins, and ambitious workflows for future models, using a coaching tone and avoiding numerical stats or generic praise.

##### 8.4.7.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes usage data to identify and categorize friction patterns, returning a JSON structure with 3 friction categories and 2 examples each, using second-person language to address the user directly.

##### 8.4.7.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities, returning 3 opportunities with titles, descriptions, and copyable prompts for users to experiment with.

##### 8.4.7.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from session transcripts including goal categories (user-requested only), satisfaction signals, and friction types, with strict guidelines to avoid counting autonomous Claude work or inferring satisfaction without explicit signals.

##### 8.4.7.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions (prioritizing repeated user guidance), features to try from MCP Servers, Custom Skills, Hooks, Headless Mode, and Task Agents, plus usage patterns with copyable prompts.

##### 8.4.7.6 [/insights report output (Skill)](system-prompts/skill-insights-report-output.md)

Formats and displays the insights usage report results after the user runs the /insights slash command, showing shareable report URL and offering further exploration.
