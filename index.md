# Claude Code System Prompts Index

Autonomous software engineering at scale — from writing and reviewing code to orchestrating multi-agent pipelines, managing persistent state, and integrating securely with external systems and execution environments.

## Table of Contents

1. [Bash, Shell & Execution Security](#1-bash-shell-execution-security)
   1. [Bash Execution Mechanics](#11-bash-execution-mechanics)
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
      2. [Asynchronous Execution & Timing](#112-asynchronous-execution-timing)
         1. [Bash (sleep — keep short) [Tool Description]](#1121-bash-sleep-—-keep-short-tool-description)
         2. [Bash (sleep — no polling background tasks) [Tool Description]](#1122-bash-sleep-—-no-polling-background-tasks-tool-description)
         3. [Bash (sleep — run immediately) [Tool Description]](#1123-bash-sleep-—-run-immediately-tool-description)
         4. [Bash (sleep — use check commands) [Tool Description]](#1124-bash-sleep-—-use-check-commands-tool-description)
         5. [One of six rules for using sleep command (System Prompt)](#1125-one-of-six-rules-for-using-sleep-command-system-prompt)
      3. [Tool Composition & Delegation](#113-tool-composition-delegation)
         1. [Bash (prefer dedicated tools) [Tool Description]](#1131-bash-prefer-dedicated-tools-tool-description)
         2. [Bash (alternative — communication) [Tool Description]](#1132-bash-alternative-—-communication-tool-description)
         3. [Bash (alternative — content search) [Tool Description]](#1133-bash-alternative-—-content-search-tool-description)
         4. [Bash (alternative — edit files) [Tool Description]](#1134-bash-alternative-—-edit-files-tool-description)
         5. [Bash (alternative — file search) [Tool Description]](#1135-bash-alternative-—-file-search-tool-description)
         6. [Bash (alternative — read files) [Tool Description]](#1136-bash-alternative-—-read-files-tool-description)
         7. [Bash (alternative — write files) [Tool Description]](#1137-bash-alternative-—-write-files-tool-description)
         8. [Bash (built-in tools note) [Tool Description]](#1138-bash-built-in-tools-note-tool-description)
   2. [Sandbox Security & Permission Enforcement](#12-sandbox-security-permission-enforcement)
      1. [Sandbox Security & Access Control](#121-sandbox-security-access-control)
         1. [Bash (sandbox — adjust settings) [Tool Description]](#1211-bash-sandbox-—-adjust-settings-tool-description)
         2. [Bash (sandbox — default to sandbox) [Tool Description]](#1212-bash-sandbox-—-default-to-sandbox-tool-description)
         3. [Bash (sandbox — evidence: access denied) [Tool Description]](#1213-bash-sandbox-—-evidence-access-denied-tool-description)
         4. [Bash (sandbox — evidence list header) [Tool Description]](#1214-bash-sandbox-—-evidence-list-header-tool-description)
         5. [Bash (sandbox — evidence: network failures) [Tool Description]](#1215-bash-sandbox-—-evidence-network-failures-tool-description)
         6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1216-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
         7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1217-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
         8. [Bash (sandbox — explain restriction) [Tool Description]](#1218-bash-sandbox-—-explain-restriction-tool-description)
         9. [Bash (sandbox — failure evidence condition) [Tool Description]](#1219-bash-sandbox-—-failure-evidence-condition-tool-description)
         10. [Bash (sandbox — mandatory mode) [Tool Description]](#12110-bash-sandbox-—-mandatory-mode-tool-description)
         11. [Bash (sandbox — no exceptions) [Tool Description]](#12111-bash-sandbox-—-no-exceptions-tool-description)
         12. [Bash (sandbox — no sensitive paths) [Tool Description]](#12112-bash-sandbox-—-no-sensitive-paths-tool-description)
         13. [Bash (sandbox — per-command) [Tool Description]](#12113-bash-sandbox-—-per-command-tool-description)
         14. [Bash (sandbox — response header) [Tool Description]](#12114-bash-sandbox-—-response-header-tool-description)
         15. [Bash (sandbox — retry without sandbox) [Tool Description]](#12115-bash-sandbox-—-retry-without-sandbox-tool-description)
         16. [Bash (sandbox — tmpdir) [Tool Description]](#12116-bash-sandbox-—-tmpdir-tool-description)
         17. [Bash (sandbox — user permission prompt) [Tool Description]](#12117-bash-sandbox-—-user-permission-prompt-tool-description)
      2. [Security Review & Threat Analysis](#122-security-review-threat-analysis)
         1. [/security-review slash command (Agent Prompt)](#1221-security-review-slash-command-agent-prompt)
         2. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#1222-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         3. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#1223-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         4. [Censoring assistance with malicious activities (System Prompt)](#1224-censoring-assistance-with-malicious-activities-system-prompt)
         5. [Doing tasks (security) [System Prompt]](#1225-doing-tasks-security-system-prompt)
         6. [Malware analysis after Read tool call (System Reminder)](#1226-malware-analysis-after-read-tool-call-system-reminder)
         7. [Bash command prefix detection (Agent Prompt)](#1227-bash-command-prefix-detection-agent-prompt)
      3. [Tool Permission & Access Control](#123-tool-permission-access-control)
         1. [Tool execution denied (System Prompt)](#1231-tool-execution-denied-system-prompt)
         2. [Bash command description writer (Agent Prompt)](#1232-bash-command-description-writer-agent-prompt)
   3. [Alternative Shell Environments](#13-alternative-shell-environments)
      1. [PowerShell & Windows Environment](#131-powershell-windows-environment)
         1. [PowerShell (Tool Description)](#1311-powershell-tool-description)
         2. [PowerShell edition for 5.1 (System Prompt)](#1312-powershell-edition-for-51-system-prompt)
         3. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#1313-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
      2. [REPL & JavaScript Scripting](#132-repl-javascript-scripting)
         1. [REPL (Tool Description)](#1321-repl-tool-description)
         2. [REPL tool usage and scripting conventions (System Prompt)](#1322-repl-tool-usage-and-scripting-conventions-system-prompt)
2. [Multi-Agent Systems & Task Coordination](#2-multi-agent-systems-task-coordination)
   1. [Planning & Autonomous Execution](#21-planning-autonomous-execution)
      1. [Plan Mode: Workflows & Lifecycle](#211-plan-mode-workflows-lifecycle)
         1. [Plan mode approval tool enforcement (System Reminder)](#2111-plan-mode-approval-tool-enforcement-system-reminder)
         2. [Plan mode is active (5-phase) [System Reminder]](#2112-plan-mode-is-active-5-phase-system-reminder)
         3. [Plan mode is active (iterative) [System Reminder]](#2113-plan-mode-is-active-iterative-system-reminder)
         4. [Plan mode is active (subagent) [System Reminder]](#2114-plan-mode-is-active-subagent-system-reminder)
         5. [Plan mode re-entry (System Reminder)](#2115-plan-mode-re-entry-system-reminder)
         6. [Plan file reference (System Reminder)](#2116-plan-file-reference-system-reminder)
         7. [Exited plan mode (System Reminder)](#2117-exited-plan-mode-system-reminder)
         8. [Phase four of plan mode (System Prompt)](#2118-phase-four-of-plan-mode-system-prompt)
         9. [Remote plan mode (ultraplan) [System Prompt]](#2119-remote-plan-mode-ultraplan-system-prompt)
         10. [Remote planning session (System Prompt)](#21110-remote-planning-session-system-prompt)
         11. [Ultraplan mode (System Reminder)](#21111-ultraplan-mode-system-reminder)
         12. [EnterPlanMode (Tool Description)](#21112-enterplanmode-tool-description)
         13. [ExitPlanMode (Tool Description)](#21113-exitplanmode-tool-description)
         14. [Plan mode (enhanced) [Agent Prompt]](#21114-plan-mode-enhanced-agent-prompt)
      2. [Autonomous & Auto Mode Execution](#212-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#2121-auto-mode-system-prompt)
         2. [Auto mode rule reviewer (Agent Prompt)](#2122-auto-mode-rule-reviewer-agent-prompt)
         3. [Executing actions with care (System Prompt)](#2123-executing-actions-with-care-system-prompt)
   2. [Subagent & Swarm Orchestration](#22-subagent-swarm-orchestration)
      1. [Subagent Orchestration & Multi-Agent Coordination](#221-subagent-orchestration-multi-agent-coordination)
         1. [Agent (usage notes) [Tool Description]](#2211-agent-usage-notes-tool-description)
         2. [Worker fork (Agent Prompt)](#2212-worker-fork-agent-prompt)
         3. [Subagent delegation examples (System Prompt)](#2213-subagent-delegation-examples-system-prompt)
         4. [Subagent prompt-writing examples (System Prompt)](#2214-subagent-prompt-writing-examples-system-prompt)
         5. [Writing subagent prompts (System Prompt)](#2215-writing-subagent-prompts-system-prompt)
         6. [Tool usage (subagent guidance) [System Prompt]](#2216-tool-usage-subagent-guidance-system-prompt)
         7. [Fork usage guidelines (System Prompt)](#2217-fork-usage-guidelines-system-prompt)
         8. [General purpose (Agent Prompt)](#2218-general-purpose-agent-prompt)
         9. [Explore (Agent Prompt)](#2219-explore-agent-prompt)
      2. [Team & Swarm Coordination](#222-team-swarm-coordination)
         1. [TeammateTool (Tool Description)](#2221-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#2222-teamdelete-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#2223-tasklist-teammate-workflow-tool-description)
         4. [SendMessageTool (Tool Description)](#2224-sendmessagetool-tool-description)
         5. [SendMessageTool (non-agent-teams) [Tool Description]](#2225-sendmessagetool-non-agent-teams-tool-description)
         6. [Team Coordination (System Reminder)](#2226-team-coordination-system-reminder)
         7. [Team Shutdown (System Reminder)](#2227-team-shutdown-system-reminder)
         8. [How to use the SendUserMessage tool (System Prompt)](#2228-how-to-use-the-sendusermessage-tool-system-prompt)
   3. [Task Tracking & Background Job State](#23-task-tracking-background-job-state)
      1. [Task & Todo Management](#231-task-todo-management)
         1. [TodoWrite (Tool Description)](#2311-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#2312-taskcreate-tool-description)
         3. [Task tools reminder (System Reminder)](#2313-task-tools-reminder-system-reminder)
         4. [TodoWrite reminder (System Reminder)](#2314-todowrite-reminder-system-reminder)
         5. [Tool usage (task management) [System Prompt]](#2315-tool-usage-task-management-system-prompt)
         6. [Verify plan reminder (System Reminder)](#2316-verify-plan-reminder-system-reminder)
      2. [Background Agent State & Job Management](#232-background-agent-state-job-management)
         1. [Background agent state classifier (Agent Prompt)](#2321-background-agent-state-classifier-agent-prompt)
         2. [Background agent state classification examples (Data)](#2322-background-agent-state-classification-examples-data)
         3. [Background job behavior (System Prompt)](#2323-background-job-behavior-system-prompt)
         4. [Background monitor (streaming events) [Tool Description]](#2324-background-monitor-streaming-events-tool-description)
         5. [Autonomous loop check (System Prompt)](#2325-autonomous-loop-check-system-prompt)
3. [Memory, Sessions & Scheduling](#3-memory-sessions-scheduling)
   1. [Persistent Memory & Knowledge Consolidation](#31-persistent-memory-knowledge-consolidation)
      1. [Memory System: Persistent Storage & Retrieval](#311-memory-system-persistent-storage-retrieval)
         1. [Memory instructions (System Prompt)](#3111-memory-instructions-system-prompt)
         2. [Memory staleness verification (System Prompt)](#3112-memory-staleness-verification-system-prompt)
         3. [Memory description of user details (System Prompt)](#3113-memory-description-of-user-details-system-prompt)
         4. [Memory description of user feedback (System Prompt)](#3114-memory-description-of-user-feedback-system-prompt)
         5. [Memory description of user feedback (with explicit save) [System Prompt]](#3115-memory-description-of-user-feedback-with-explicit-save-system-prompt)
         6. [Description part of memory instructions (System Prompt)](#3116-description-part-of-memory-instructions-system-prompt)
         7. [Memory file contents (System Reminder)](#3117-memory-file-contents-system-reminder)
         8. [Nested memory contents (System Reminder)](#3118-nested-memory-contents-system-reminder)
         9. [Memory synthesis (Agent Prompt)](#3119-memory-synthesis-agent-prompt)
         10. [Determine which memory files to attach (Agent Prompt)](#31110-determine-which-memory-files-to-attach-agent-prompt)
         11. [Session memory template (Data)](#31111-session-memory-template-data)
         12. [User profile memory template (Data)](#31112-user-profile-memory-template-data)
      2. [Memory Consolidation & Dream Passes](#312-memory-consolidation-dream-passes)
         1. [/dream memory consolidation (Skill)](#3121-dream-memory-consolidation-skill)
         2. [/dream nightly schedule (Skill)](#3122-dream-nightly-schedule-skill)
         3. [Dream memory consolidation (Agent Prompt)](#3123-dream-memory-consolidation-agent-prompt)
         4. [Dream memory pruning (Agent Prompt)](#3124-dream-memory-pruning-agent-prompt)
         5. [Dream CLAUDE.md memory reconciliation (System Prompt)](#3125-dream-claudemd-memory-reconciliation-system-prompt)
         6. [Dream team memory handling (System Prompt)](#3126-dream-team-memory-handling-system-prompt)
         7. [Session memory update instructions (Agent Prompt)](#3127-session-memory-update-instructions-agent-prompt)
   2. [Session Lifecycle & Context Compaction](#32-session-lifecycle-context-compaction)
      1. [Conversation Summarization & Context Compaction](#321-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#3211-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#3212-recent-message-summarization-agent-prompt)
         3. [Partial compaction instructions (System Prompt)](#3213-partial-compaction-instructions-system-prompt)
         4. [Context compaction summary (System Prompt)](#3214-context-compaction-summary-system-prompt)
         5. [Compact file reference (System Reminder)](#3215-compact-file-reference-system-reminder)
         6. [Previously invoked skills (System Reminder)](#3216-previously-invoked-skills-system-reminder)
      2. [Session Management & Continuity](#322-session-management-continuity)
         1. [Session continuation (System Reminder)](#3221-session-continuation-system-reminder)
         2. [Coding session title generator (Agent Prompt)](#3222-coding-session-title-generator-agent-prompt)
         3. [/rename auto-generate session name (Agent Prompt)](#3223-rename-auto-generate-session-name-agent-prompt)
         4. [Session search (Agent Prompt)](#3224-session-search-agent-prompt)
         5. [Background session instructions (System Prompt)](#3225-background-session-instructions-system-prompt)
         6. [Scratchpad directory (System Prompt)](#3226-scratchpad-directory-system-prompt)
   3. [Scheduling & Cron Management](#33-scheduling-cron-management)
      1. [CronCreate (Tool Description)](#331-croncreate-tool-description)
      2. [ScheduleWakeup (/loop dynamic mode) [Tool Description]](#332-schedulewakeup-loop-dynamic-mode-tool-description)
      3. [Schedule proactive offer guidance (Tool Description)](#333-schedule-proactive-offer-guidance-tool-description)
      4. [Snooze (delay and reason guidance) [Tool Description]](#334-snooze-delay-and-reason-guidance-tool-description)
      5. [/loop slash command (Skill)](#335-loop-slash-command-skill)
      6. [/loop slash command (dynamic mode) [Skill]](#336-loop-slash-command-dynamic-mode-skill)
      7. [/loop cloud-first scheduling offer (Skill)](#337-loop-cloud-first-scheduling-offer-skill)
      8. [/loop self-pacing mode (Skill)](#338-loop-self-pacing-mode-skill)
      9. [Schedule recurring cron and execute immediately (compact) [Skill]](#339-schedule-recurring-cron-and-execute-immediately-compact-skill)
      10. [Schedule recurring cron and run immediately (Skill)](#3310-schedule-recurring-cron-and-run-immediately-skill)
      11. [Dynamic pacing loop execution (Skill)](#3311-dynamic-pacing-loop-execution-skill)
      12. [/schedule slash command (Agent Prompt)](#3312-schedule-slash-command-agent-prompt)
      13. [Proactive schedule offer after follow-up work (System Prompt)](#3313-proactive-schedule-offer-after-follow-up-work-system-prompt)
      14. [Loop wakeup not scheduled (System Reminder)](#3314-loop-wakeup-not-scheduled-system-reminder)
4. [Software Development Workflows](#4-software-development-workflows)
   1. [Git, Version Control & CI/CD](#41-git-version-control-cicd)
      1. [Git Workflow & Version Control](#411-git-workflow-version-control)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#4111-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#4112-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#4113-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#4114-bash-git-—-prefer-new-commits-tool-description)
         5. [Quick git commit (Agent Prompt)](#4115-quick-git-commit-agent-prompt)
         6. [Quick PR creation (Agent Prompt)](#4116-quick-pr-creation-agent-prompt)
         7. [Session title and branch generation (Agent Prompt)](#4117-session-title-and-branch-generation-agent-prompt)
         8. [Git status (System Prompt)](#4118-git-status-system-prompt)
         9. [Stop hook blocking error (System Reminder)](#4119-stop-hook-blocking-error-system-reminder)
         10. [EnterWorktree (Tool Description)](#41110-enterworktree-tool-description)
         11. [ExitWorktree (Tool Description)](#41111-exitworktree-tool-description)
      2. [GitHub Integration & CI/CD](#412-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#4121-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#4122-github-app-installation-pr-description-data)
         3. [/batch slash command (Agent Prompt)](#4123-batch-slash-command-agent-prompt)
   2. [Code Review, Testing & Quality](#42-code-review-testing-quality)
      1. [Code Review & PR Review](#421-code-review-pr-review)
         1. [/review-pr slash command (Agent Prompt)](#4211-review-pr-slash-command-agent-prompt)
         2. [Simplify (Skill)](#4212-simplify-skill)
         3. [Worker instructions (System Prompt)](#4213-worker-instructions-system-prompt)
      2. [Verification & Testing](#422-verification-testing)
         1. [Verification specialist (Agent Prompt)](#4221-verification-specialist-agent-prompt)
         2. [Verify skill (Skill)](#4222-verify-skill-skill)
         3. [Verify CLI changes (example for Verify skill) [Skill]](#4223-verify-cli-changes-example-for-verify-skill-skill)
         4. [Verify server/API changes (example for Verify skill) [Skill]](#4224-verify-serverapi-changes-example-for-verify-skill-skill)
         5. [Create verifier skills (Skill)](#4225-create-verifier-skills-skill)
      3. [Software Engineering Task Execution](#423-software-engineering-task-execution)
         1. [Doing tasks (software engineering focus) [System Prompt]](#4231-doing-tasks-software-engineering-focus-system-prompt)
         2. [Doing tasks (ambitious tasks) [System Prompt]](#4232-doing-tasks-ambitious-tasks-system-prompt)
         3. [Doing tasks (no compatibility hacks) [System Prompt]](#4233-doing-tasks-no-compatibility-hacks-system-prompt)
         4. [Doing tasks (no unnecessary error handling) [System Prompt]](#4234-doing-tasks-no-unnecessary-error-handling-system-prompt)
         5. [Doing tasks (help and feedback) [System Prompt]](#4235-doing-tasks-help-and-feedback-system-prompt)
   3. [IDE Integration & Hook Automation](#43-ide-integration-hook-automation)
      1. [Hooks: Configuration & Lifecycle Events](#431-hooks-configuration-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#4311-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#4312-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#4313-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#4314-hook-stopped-continuation-system-reminder)
         5. [Hook stopped continuation prefix (System Reminder)](#4315-hook-stopped-continuation-prefix-system-reminder)
         6. [Hook success (System Reminder)](#4316-hook-success-system-reminder)
         7. [Hook condition evaluator (stop) [Agent Prompt]](#4317-hook-condition-evaluator-stop-agent-prompt)
         8. [Update Claude Code Config (Skill)](#4318-update-claude-code-config-skill)
         9. [update-config (7-step verification flow) [Skill]](#4319-update-config-7-step-verification-flow-skill)
      2. [IDE Integration & File Context](#432-ide-integration-file-context)
         1. [File opened in IDE (System Reminder)](#4321-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#4322-lines-selected-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#4323-file-modified-by-user-or-linter-system-reminder)
         4. [New diagnostics detected (System Reminder)](#4324-new-diagnostics-detected-system-reminder)
         5. [File shorter than offset (System Reminder)](#4325-file-shorter-than-offset-system-reminder)
         6. [File truncated (System Reminder)](#4326-file-truncated-system-reminder)
         7. [File exists but empty (System Reminder)](#4327-file-exists-but-empty-system-reminder)
5. [Claude API, SDKs & External Integrations](#5-claude-api-sdks-external-integrations)
   1. [API Reference & SDK Documentation](#51-api-reference-sdk-documentation)
      1. [Claude API Reference Documentation](#511-claude-api-reference-documentation)
         1. [Claude API reference — Python (Data)](#5111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#5112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#5113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#5114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#5115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#5116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#5117-claude-api-reference-—-c-data)
         8. [Claude API reference — cURL (Data)](#5118-claude-api-reference-—-curl-data)
         9. [Claude model catalog (Data)](#5119-claude-model-catalog-data)
         10. [HTTP error codes reference (Data)](#51110-http-error-codes-reference-data)
      2. [Building Applications with Claude: Skills & Guides](#512-building-applications-with-claude-skills-guides)
         1. [Building LLM-powered applications with Claude (Skill)](#5121-building-llm-powered-applications-with-claude-skill)
         2. [Build with Claude API (reference guide) [Skill]](#5122-build-with-claude-api-reference-guide-skill)
         3. [Agent Design Patterns (Skill)](#5123-agent-design-patterns-skill)
         4. [Model migration guide (Skill)](#5124-model-migration-guide-skill)
         5. [Live documentation sources (Data)](#5125-live-documentation-sources-data)
         6. [Anthropic CLI (Data)](#5126-anthropic-cli-data)
         7. [Claude guide agent (Agent Prompt)](#5127-claude-guide-agent-agent-prompt)
   2. [Managed Agents & Advanced API Features](#52-managed-agents-advanced-api-features)
      1. [Managed Agents API & Architecture](#521-managed-agents-api-architecture)
         1. [Managed Agents overview (Data)](#5211-managed-agents-overview-data)
         2. [Managed Agents core concepts (Data)](#5212-managed-agents-core-concepts-data)
         3. [Managed Agents endpoint reference (Data)](#5213-managed-agents-endpoint-reference-data)
         4. [Managed Agents environments and resources (Data)](#5214-managed-agents-environments-and-resources-data)
         5. [Managed Agents events and steering (Data)](#5215-managed-agents-events-and-steering-data)
         6. [Managed Agents memory stores reference (Data)](#5216-managed-agents-memory-stores-reference-data)
         7. [Managed Agents tools and skills (Data)](#5217-managed-agents-tools-and-skills-data)
         8. [Managed Agents client patterns (Data)](#5218-managed-agents-client-patterns-data)
         9. [Managed Agents reference — Python (Data)](#5219-managed-agents-reference-—-python-data)
         10. [Managed Agents reference — TypeScript (Data)](#52110-managed-agents-reference-—-typescript-data)
         11. [Managed Agents reference — cURL (Data)](#52111-managed-agents-reference-—-curl-data)
         12. [Managed Agents onboarding flow (Agent Prompt)](#52112-managed-agents-onboarding-flow-agent-prompt)
      2. [Advanced API Features: Streaming, Batches, Files & Caching](#522-advanced-api-features-streaming-batches-files-caching)
         1. [Streaming reference — Python (Data)](#5221-streaming-reference-—-python-data)
         2. [Streaming reference — TypeScript (Data)](#5222-streaming-reference-—-typescript-data)
         3. [Message Batches API reference — Python (Data)](#5223-message-batches-api-reference-—-python-data)
         4. [Files API reference — Python (Data)](#5224-files-api-reference-—-python-data)
         5. [Files API reference — TypeScript (Data)](#5225-files-api-reference-—-typescript-data)
         6. [Prompt Caching — Design & Optimization (Data)](#5226-prompt-caching-—-design-optimization-data)
         7. [Tool use concepts (Data)](#5227-tool-use-concepts-data)
         8. [Tool use reference — Python (Data)](#5228-tool-use-reference-—-python-data)
         9. [Tool use reference — TypeScript (Data)](#5229-tool-use-reference-—-typescript-data)
   3. [Browser, Web & Specialized Tool Interfaces](#53-browser-web-specialized-tool-interfaces)
      1. [Browser Automation & Computer Use](#531-browser-automation-computer-use)
         1. [Computer (Tool Description)](#5311-computer-tool-description)
         2. [BrowserBatch (Tool Description)](#5312-browserbatch-tool-description)
         3. [Computer action (Tool Parameter)](#5313-computer-action-tool-parameter)
         4. [Claude in Chrome browser automation (System Prompt)](#5314-claude-in-chrome-browser-automation-system-prompt)
         5. [Chrome browser MCP tools (System Prompt)](#5315-chrome-browser-mcp-tools-system-prompt)
         6. [Computer Use MCP (Skill)](#5316-computer-use-mcp-skill)
      2. [Web Search & Content Retrieval](#532-web-search-content-retrieval)
         1. [WebSearch (Tool Description)](#5321-websearch-tool-description)
         2. [WebFetch (Tool Description)](#5322-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#5323-webfetch-summarizer-agent-prompt)
      3. [Notebook & Specialized Tool Interfaces](#533-notebook-specialized-tool-interfaces)
         1. [NotebookEdit (Tool Description)](#5331-notebookedit-tool-description)
         2. [ToolSearch (second part) [Tool Description]](#5332-toolsearch-second-part-tool-description)
6. [System Configuration, Skills & User Experience](#6-system-configuration-skills-user-experience)
   1. [Environment Configuration & Resource Monitoring](#61-environment-configuration-resource-monitoring)
      1. [Harness & Core System Configuration](#611-harness-core-system-configuration)
         1. [Harness instructions (System Prompt)](#6111-harness-instructions-system-prompt)
         2. [Minimal mode (System Prompt)](#6112-minimal-mode-system-prompt)
         3. [WSL managed settings double opt-in (System Prompt)](#6113-wsl-managed-settings-double-opt-in-system-prompt)
         4. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#6114-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         5. [Thinking frequency tuning (System Reminder)](#6115-thinking-frequency-tuning-system-reminder)
      2. [Resource & Budget Monitoring](#612-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#6121-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#6122-usd-budget-system-reminder)
         3. [MCP resource no content (System Reminder)](#6123-mcp-resource-no-content-system-reminder)
         4. [MCP resource no displayable content (System Reminder)](#6124-mcp-resource-no-displayable-content-system-reminder)
   2. [Onboarding, Skills & Agent Configuration](#62-onboarding-skills-agent-configuration)
      1. [Onboarding & Configuration Setup](#621-onboarding-configuration-setup)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#6211-init-claudemd-and-skill-setup-new-version-skill)
         2. [CLAUDE.md creation (Agent Prompt)](#6212-claudemd-creation-agent-prompt)
         3. [Team onboarding guide (Skill)](#6213-team-onboarding-guide-skill)
         4. [Agent creation architect (Agent Prompt)](#6214-agent-creation-architect-agent-prompt)
         5. [Skillify Current Session (System Prompt)](#6215-skillify-current-session-system-prompt)
      2. [Skill Invocation & Slash Commands](#622-skill-invocation-slash-commands)
         1. [Skill (Tool Description)](#6221-skill-tool-description)
         2. [/stuck slash command (Skill)](#6222-stuck-slash-command-skill)
         3. [/btw side question (System Reminder)](#6223-btw-side-question-system-reminder)
         4. [Agent mention (System Reminder)](#6224-agent-mention-system-reminder)
         5. [Debugging (Skill)](#6225-debugging-skill)
      3. [Agent Memory & Institutional Knowledge](#623-agent-memory-institutional-knowledge)
         1. [Agent memory instructions (System Prompt)](#6231-agent-memory-instructions-system-prompt)
         2. [Advisor tool instructions (System Prompt)](#6232-advisor-tool-instructions-system-prompt)
   3. [Analytics, Productivity & Periodic Routines](#63-analytics-productivity-periodic-routines)
      1. [Usage Insights & Analytics](#631-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#6311-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#6312-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#6313-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#6314-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#6315-insights-suggestions-system-prompt)
         6. [/insights report output (Skill)](#6316-insights-report-output-skill)
         7. [Onboarding guide generator (Agent Prompt)](#6317-onboarding-guide-generator-agent-prompt)
      2. [Periodic & Productivity Skills](#632-periodic-productivity-skills)
         1. [/morning-checkin daily brief (Skill)](#6321-morning-checkin-daily-brief-skill)
         2. [/pre-meeting-checkin event brief (Skill)](#6322-pre-meeting-checkin-event-brief-skill)
         3. [/catch-up periodic heartbeat (Skill)](#6323-catch-up-periodic-heartbeat-skill)
         4. [Generate permission allowlist from transcripts (Skill)](#6324-generate-permission-allowlist-from-transcripts-skill)
      3. [File System Operations](#633-file-system-operations)
         1. [ReadFile (Tool Description)](#6331-readfile-tool-description)
         2. [Write (Tool Description)](#6332-write-tool-description)
         3. [Write (read existing file first) [Tool Description]](#6333-write-read-existing-file-first-tool-description)
         4. [Edit (Tool Description)](#6334-edit-tool-description)
         5. [Grep (Tool Description)](#6335-grep-tool-description)
         6. [LSP (Tool Description)](#6336-lsp-tool-description)
   4. [Communication, Notifications & UX Guidance](#64-communication-notifications-ux-guidance)
      1. [Communication Style & Output Formatting](#641-communication-style-output-formatting)
         1. [Communication style (System Prompt)](#6411-communication-style-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#6412-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#6413-tone-and-style-concise-output-—-short-system-prompt)
         4. [Output style active (System Reminder)](#6414-output-style-active-system-reminder)
         5. [Assistant voice and values template (Data)](#6415-assistant-voice-and-values-template-data)
         6. [Agent Summary Generation (System Prompt)](#6416-agent-summary-generation-system-prompt)
         7. [Agent thread notes (System Prompt)](#6417-agent-thread-notes-system-prompt)
      2. [Notifications & User Alerts](#642-notifications-user-alerts)
         1. [PushNotification (Tool Description)](#6421-pushnotification-tool-description)
         2. [AskUserQuestion (Tool Description)](#6422-askuserquestion-tool-description)
         3. [AskUserQuestion (preview field) [Tool Description]](#6423-askuserquestion-preview-field-tool-description)
         4. [Option previewer (System Prompt)](#6424-option-previewer-system-prompt)
      3. [Learning & Teaching Modes](#643-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#6431-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6432-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#6433-request_teach_access-part-of-teach-mode-tool-description)
      4. [Prompt Suggestion & UX Guidance](#644-prompt-suggestion-ux-guidance)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#6441-prompt-suggestion-generator-v2-agent-prompt)
         2. [Status line setup (Agent Prompt)](#6442-status-line-setup-agent-prompt)

---

## 1. Bash, Shell & Execution Security

Command execution mechanics across bash and PowerShell environments, tool delegation strategies, and sandbox security enforcement. Covers syntax conventions, async patterns, permission handling, and access control for safe command execution.

### 1.1 Bash Execution Mechanics

Core patterns for running bash commands safely and efficiently, including syntax, working directory management, chaining, and async timing strategies.

#### 1.1.1 Bash Execution Fundamentals

Core bash command execution mechanics covering syntax conventions, working directory persistence, command chaining strategies, and file path handling. Includes timeout configuration and pre-execution validation to ensure safe file operations.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

The bash tool executes a given bash command and returns its output.

##### 1.1.1.2 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Maintain the current working directory by using absolute paths and avoiding cd commands, except when explicitly requested by the user.

##### 1.1.1.3 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate commands in bash tool calls.

##### 1.1.1.4 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent commands as multiple parallel bash tool calls in a single message rather than sequentially.

##### 1.1.1.5 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands using && in a single bash call to ensure sequential execution and failure propagation.

##### 1.1.1.6 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier command failures are acceptable.

##### 1.1.1.7 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.8 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between bash commands, but shell state does not; environment initializes from user profile.

##### 1.1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Bash commands support optional timeout configuration in milliseconds, with configurable maximum and default limits.

##### 1.1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, use bash to verify the parent directory exists and is the correct location.

#### 1.1.2 Asynchronous Execution & Timing

Strategies for managing delays and background task monitoring, emphasizing immediate execution where possible and check commands over polling loops. Prevents blocking user interactions through short sleep durations and notification-based completion tracking.

##### 1.1.2.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations short (1-5 seconds) to avoid blocking the user when using bash sleep commands.

##### 1.1.2.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

##### 1.1.2.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Execute commands immediately without sleep delays when they can run without waiting.

##### 1.1.2.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like `gh run view` instead of sleeping when polling external processes.

##### 1.1.2.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; requires diagnosing root causes instead.

#### 1.1.3 Tool Composition & Delegation

Bash serves as a command executor; dedicated tools provide superior user experience for file operations, searching, and output. Directs common tasks like reading, writing, editing, and searching to specialized tools rather than bash equivalents.

##### 1.1.3.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for read-only searching commands; use dedicated tools instead for better user experience.

##### 1.1.3.2 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly instead of using echo or printf.

##### 1.1.3.3 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs Claude to use the Grep tool for content search instead of grep or rg commands.

##### 1.1.3.4 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool for file editing instead of sed or awk commands.

##### 1.1.3.5 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs Claude to use the Glob tool for file search instead of find or ls commands.

##### 1.1.3.6 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool for file reading instead of cat, head, or tail commands.

##### 1.1.3.7 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs Claude to use the Write tool for file writing instead of echo or cat commands.

##### 1.1.3.8 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and transparency than Bash equivalents.

### 1.2 Sandbox Security & Permission Enforcement

Mandatory sandbox policies, access restriction detection, permission escalation strategies, and threat analysis for autonomous agent operations.

#### 1.2.1 Sandbox Security & Access Control

Mandatory sandbox enforcement for all bash commands with detection and handling of restriction failures. Covers error diagnosis, user communication about restrictions, and recovery strategies while protecting sensitive paths from allowlist exposure.

##### 1.2.1.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

##### 1.2.1.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Default to running commands within the sandbox; only bypass when the user explicitly requests it or evidence of sandbox restriction appears.

##### 1.2.1.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox restrictions.

##### 1.2.1.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that show sandbox-caused failures.

##### 1.2.1.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox restrictions.

##### 1.2.1.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors for file and network operations indicate sandbox restrictions.

##### 1.2.1.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions.

##### 1.2.1.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused a failure and mention the /sandbox command for managing restrictions.

##### 1.2.1.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Identify when a command failure shows evidence of sandbox restrictions versus other causes like missing files or network issues.

##### 1.2.1.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

##### 1.2.1.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

##### 1.2.1.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files to the sandbox allowlist.

##### 1.2.1.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; default to sandbox for future commands even after running one with dangerouslyDisableSandbox.

##### 1.2.1.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing how to respond when sandbox-caused failures are detected.

##### 1.2.1.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry a failed command with dangerouslyDisableSandbox: true without asking the user.

##### 1.2.1.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly.

##### 1.2.1.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will prompt the user for permission.

#### 1.2.2 Security Review & Threat Analysis

Automated security analysis that identifies exploitable vulnerabilities in code changes, classifies autonomous agent actions against threat models, and enforces operational safety rules. Covers vulnerability detection, prompt injection prevention, dangerous operation blocking, and malware analysis while permitting authorized security testing and defensive research.

##### 1.2.2.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt analyzing code changes for high-confidence exploitable vulnerabilities including injection, authentication bypass, crypto flaws, and data exposure, with strict false-positive filtering.

##### 1.2.2.2 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security classifier that evaluates autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with user intent as the final signal.

##### 1.2.2.3 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, block rules for dangerous operations (git force-push, code execution, credential leakage, data exfiltration), and allow exceptions for legitimate development workflows.

##### 1.2.2.4 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing destructive techniques, DoS attacks, and detection evasion for malicious purposes.

##### 1.2.2.5 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Prioritizes avoiding security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks.

##### 1.2.2.6 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but forbids improving or augmenting malicious code, allowing analysis, reports, and behavior questions instead.

##### 1.2.2.7 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands for safety classification. Returns the detected prefix or 'command_injection_detected' to protect users from malicious commands that exploit allowlist bypasses.

#### 1.2.3 Tool Permission & Access Control

Strategies for navigating permission constraints and communicating system capabilities: handle denied permissions by attempting safe alternatives and escalating when essential tools are blocked, while generating clear descriptions of commands to aid understanding and transparency.

##### 1.2.3.1 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides Claude on handling denied tool permissions by attempting reasonable alternatives while avoiding malicious workarounds, and escalating to the user when essential capabilities are blocked.

##### 1.2.3.2 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or obscure-flag commands to clarify intent without using vague language.

### 1.3 Alternative Shell Environments

PowerShell and Windows terminal execution with version-specific constraints, and JavaScript REPL scripting for complex tool orchestrations.

#### 1.3.1 PowerShell & Windows Environment

Terminal execution layer for Windows systems with syntax guidance, version-specific constraints, and performance optimization patterns. Handles command execution while avoiding unnecessary delays through direct invocation and background job management.

##### 1.3.1.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Execute PowerShell commands with optional timeout configuration. Use for terminal operations like git, npm, and docker; prefer specialized tools for file operations. Includes syntax guidance for variables, cmdlets, pipes, and here-strings.

##### 1.3.1.2 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 limitations including unavailable operators, stderr redirection behavior, and file encoding defaults to guide script writing.

##### 1.3.1.3 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Instructs avoiding unnecessary Start-Sleep commands in PowerShell by running immediate commands directly, using run_in_background for long-running tasks, and polling external processes with check commands rather than sleep loops.

#### 1.3.2 REPL & JavaScript Scripting

Asynchronous JavaScript environment for composing complex tool orchestrations with looping, branching, and parallelism. Provides dense scripting conventions and shorthand APIs for efficient codebase investigation and batch operations.

##### 1.3.2.1 [REPL (Tool Description)](system-prompts/tool-description-repl.md)

JavaScript programming interface for composing tool calls as async functions with looping and branching. Batch all operations into one REPL call; supports Promise.all() for parallelism and haiku() for model sampling.

##### 1.3.2.2 [REPL tool usage and scripting conventions (System Prompt)](system-prompts/system-prompt-repl-tool-usage-and-scripting-conventions.md)

Defines dense JavaScript scripting conventions for REPL investigations including shorthands for shell, file, and code search operations, batching rules, and API reference for efficient codebase exploration.

---

## 2. Multi-Agent Systems & Task Coordination

Frameworks for orchestrating parallel agent work, managing task state, and coordinating autonomous execution. Spans plan-mode workflows, subagent delegation, swarm coordination, and background job monitoring.

### 2.1 Planning & Autonomous Execution

Plan mode lifecycle from codebase exploration through user approval, and frameworks for continuous autonomous operation with risk-aware action classification.

#### 2.1.1 Plan Mode: Workflows & Lifecycle

Plan mode structures implementation planning through distinct phases—from codebase exploration and design to approval—with tools to enter, exit, and re-enter planning workflows. Supports iterative pair-planning with users, multi-agent parallel exploration, and subagent-constrained planning, culminating in concise implementation plans that require explicit user approval before code execution.

##### 2.1.1.1 [Plan mode approval tool enforcement (System Reminder)](system-prompts/system-reminder-plan-mode-approval-tool-enforcement.md)

Requires plan mode turns to end with either AskUserQuestion for clarification or ExitPlanMode for approval, forbidding approval requests through other means.

##### 2.1.1.2 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Defines a five-phase planning workflow with parallel exploration and multi-agent planning, guiding Claude through understanding, design, review, and approval phases with subagent coordination.

##### 2.1.1.3 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Describes an iterative planning workflow where Claude pair-plans with the user by exploring code, updating the plan file incrementally, and asking clarifying questions until the plan is complete.

##### 2.1.1.4 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instructions for subagents, restricting edits to the plan file and read-only actions while allowing comprehensive answers and clarifying questions.

##### 2.1.1.5 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, instructing it to read the existing plan, evaluate the new request, and decide whether to continue or start fresh.

##### 2.1.1.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 2.1.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and full tool capabilities are now available.

##### 2.1.1.8 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes a concise implementation plan to the plan file with file paths, changes, function references, and a verification command, strictly limited to 40 lines.

##### 2.1.1.9 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore codebases, produce diagram-rich implementation plans via ExitPlanMode, handle approval or rejection feedback, and implement approved plans with pull requests.

##### 2.1.1.10 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Enables remote planning sessions to explore codebases with readonly tools, produce implementation plans via ExitPlanMode, and handle plan approval, rejection, or teleportation back to the user's local terminal.

##### 2.1.1.11 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Instructs Claude to create detailed implementation plans using parallel subagents to explore codebase, identify files, assess risks, and critique the plan before implementation or teleportation to local terminal.

##### 2.1.1.12 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transition into plan mode for non-trivial implementation tasks to explore the codebase and design an approach for user approval before writing code. Use when multiple valid approaches exist, architectural decisions are needed, or multi-file changes are required.

##### 2.1.1.13 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning and request user approval by reading the plan from the plan file. Use only for implementation tasks requiring code changes, not for research or exploration.

##### 2.1.1.14 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans in read-only mode. Explores codebase, identifies patterns and conventions, designs solutions with trade-off analysis, and outputs step-by-step strategy with critical files without modifying code.

#### 2.1.2 Autonomous & Auto Mode Execution

Framework for continuous autonomous operation with risk-aware action execution. Balances immediate execution with safety guardrails by requiring confirmation for destructive operations while permitting reversible actions freely, supported by rule-based classifiers for decision automation.

##### 2.1.2.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Defines continuous autonomous execution mode where Claude executes immediately with reasonable assumptions, minimizes interruptions, prefers action over planning, and avoids destructive actions without explicit confirmation or data exfiltration.

##### 2.1.2.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for Claude Code across allow, soft_deny, and environment categories, evaluating clarity, completeness, conflicts, and actionability to ensure the LLM classifier can reliably interpret them.

##### 2.1.2.3 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a risk-aware framework for executing actions, requiring user confirmation for destructive, hard-to-reverse, or shared-state operations while permitting local reversible actions freely. Emphasizes diagnosing root causes rather than bypassing safety checks.

### 2.2 Subagent & Swarm Orchestration

Delegation patterns for typed subagents handling specialized tasks in parallel, and TeammateTool-based swarm coordination with inter-agent messaging and task discovery.

#### 2.2.1 Subagent Orchestration & Multi-Agent Coordination

Subagent delegation enables parallel execution of specialized tasks through typed agents—explorers for codebase search, workers for focused execution, and general-purpose agents for complex analysis. Effective delegation requires self-contained prompts with clear context and goals, avoiding duplication while protecting context windows through independent parallel work.

##### 2.2.1.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Provides comprehensive guidance on launching subagents, including background execution, resumption via messaging, worktree isolation, parallel execution, and verification practices.

##### 2.2.1.2 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

System prompt for forked worker sub-agents that execute a single directive from the parent agent and report back concisely without spawning further sub-agents.

##### 2.2.1.3 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results with independent agent types for specialized work.

##### 2.2.1.4 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates how to write self-contained, well-structured prompts for subagent delegation with clear goals, context, and expected output format.

##### 2.2.1.5 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Guidelines for writing effective subagent prompts that provide context, explain goals and rationale, and avoid delegating understanding or synthesis to the agent.

##### 2.2.1.6 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Advises using subagents for parallelizing independent queries or protecting context windows, while avoiding duplication of work already delegated.

##### 2.2.1.7 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for open-ended work, prohibits reading fork output mid-flight or fabricating results, and instructs fork prompts to be directives rather than background re-explanation.

##### 2.2.1.8 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases. Searches broadly when uncertain, analyzes multiple files, and avoids creating unnecessary files unless essential.

##### 2.2.1.9 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only file search specialist for exploring codebases using glob patterns, regex grep, and file reading. Supports thoroughness levels (quick/medium/very thorough) and spawns parallel tool calls for efficiency without creating, modifying, or deleting files.

#### 2.2.2 Team & Swarm Coordination

TeammateTool orchestrates multi-agent swarms through structured team creation, task assignment, and inter-agent messaging. Agents discover and claim work via shared task state, communicate through protocol-aware messaging, and coordinate graceful shutdown, enabling complex collaborative workflows where multiple specialized agents work toward shared goals.

##### 2.2.2.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

TeammateTool coordinates multi-agent swarms by creating teams, spawning typed agents, assigning tasks, and managing teammate lifecycle including idle states, automatic message delivery, and graceful shutdown via structured protocol messages.

##### 2.2.2.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

TeamDelete removes team and task directories after swarm work completes, requiring all teammates to shut down first to avoid failure.

##### 2.2.2.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

TaskList in teammate workflows enables agents to discover pending unblocked work, claim tasks by setting ownership, and coordinate via shared task state, preferring lowest-ID tasks to respect setup dependencies.

##### 2.2.2.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

SendMessage enables inter-agent communication in teammate workflows, routing messages by agent name with support for legacy protocol responses (shutdown_request, plan_approval_request) that require structured JSON replies.

##### 2.2.2.5 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

SendMessageTool allows Claude to send markdown-formatted messages visible to users, with support for file attachments and status labels ('normal' or 'proactive') to indicate whether the message is reactive or self-initiated.

##### 2.2.2.6 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity as a team member, provides access to team resources and task lists, and instructs communication with teammates using their names rather than UUIDs.

##### 2.2.2.7 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully and clean up before providing a final response to the user in non-interactive mode.

##### 2.2.2.8 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to route all user-facing replies through SendUserMessage, ack work before executing, and send checkpoints with information rather than filler status updates.

### 2.3 Task Tracking & Background Job State

Structured todo lists with progress states for complex work, and state classification for background agents including transcript analysis to detect blocked or failed jobs.

#### 2.3.1 Task & Todo Management

Task tracking tools break down complex work into structured lists with imperative descriptions, progress states, and active-form tracking. Single in-progress discipline and immediate completion marking maintain clarity on work status, enabling users to follow session progress and ensuring verification of plan completion.

##### 2.3.1.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

TodoWrite creates and manages structured task lists for complex multi-step work, tracking progress through pending/in_progress/completed states with dual task forms (imperative and active continuous), and enforcing single in-progress task discipline.

##### 2.3.1.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

TaskCreate organizes complex multi-step work into structured task lists with imperative subjects, descriptions, and optional active forms, supporting progress tracking and user visibility into session work.

##### 2.3.1.3 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Reminds Claude to use task tracking tools to create and update tasks when relevant to current work, without mentioning the reminder to the user.

##### 2.3.1.4 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Reminds Claude to use the TodoWrite tool for task tracking when relevant, without disclosing the reminder to the user.

##### 2.3.1.5 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite for breaking down work and tracking progress, marking tasks complete immediately upon finishing.

##### 2.3.1.6 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly after implementation.

#### 2.3.2 Background Agent State & Job Management

State classification and monitoring for background job agents, including transcript analysis to determine working/blocked/done/failed states with user-actionable needs. Guides agents to narrate progress, stream long-running process events, and maintain established work during autonomous loop invocations while avoiding scope drift.

##### 2.3.2.1 [Background agent state classifier (Agent Prompt)](system-prompts/agent-prompt-background-agent-state-classifier.md)

Classifies background agent transcript tails into working, blocked, done, or failed states with JSON output including state, detail, tempo, and user-actionable needs. Disambiguates edge cases like optional offers, external waits, transient errors, and scope notes to determine accurate terminal or non-terminal state transitions.

##### 2.3.2.2 [Background agent state classification examples (Data)](system-prompts/data-background-agent-state-classification-examples.md)

Example assistant-message tails and JSON outputs for classifying background agent state (working/blocked/done/failed), tempo, needs, and results.

##### 2.3.2.3 [Background job behavior (System Prompt)](system-prompts/system-prompt-background-job-behavior.md)

Instructs background job agents to narrate approach and progress, restate results in message text for classifier extraction, and signal completion status with result headlines, blocked conditions, or failure states.

##### 2.3.2.4 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Describes streaming stdout events from long-running scripts as chat notifications, with guidance on script quality, output filtering, and coverage to avoid silent failures.

##### 2.3.2.5 [Autonomous loop check (System Prompt)](system-prompts/system-prompt-autonomous-loop-check.md)

Guides timer-based autonomous invocations to continue established work from conversation transcripts and PR maintenance (CI status, review threads, branch conflicts) while avoiding inventing new work. Adjusts scope on repeated invocations and stops narrating when genuinely idle.

---

## 3. Memory, Sessions & Scheduling

Persistent knowledge management across sessions, conversation summarization for context continuity, and scheduling infrastructure for recurring autonomous tasks.

### 3.1 Persistent Memory & Knowledge Consolidation

Memory files that accumulate user context and project facts across sessions, plus nightly consolidation passes that reconcile, prune, and synthesize stored knowledge.

#### 3.1.1 Memory System: Persistent Storage & Retrieval

Persistent memory files accumulate user details, feedback, project context, and reference information across sessions with frontmatter metadata and deduplication. Memory synthesis agents extract relevant facts from stored records while verifying staleness against current state, enabling personalized collaboration that respects user preferences and avoids repeating known pitfalls.

##### 3.1.1.1 [Memory instructions (System Prompt)](system-prompts/system-prompt-memory-instructions.md)

Comprehensive memory system instructions covering file format with frontmatter, four memory types (user, feedback, project, reference), deduplication, staleness handling, and distinction from repo-recorded information.

##### 3.1.1.2 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs verification of memory records against current file state before use, trusting observed reality over stale memories and deleting conflicting records.

##### 3.1.1.3 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about role, goals, knowledge, and preferences across sessions, enabling personalized collaboration.

##### 3.1.1.4 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes feedback memory type storing user guidance on work approaches from both successes and failures, with checks for contradictions with team memories.

##### 3.1.1.5 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Defines feedback memory type capturing user guidance on work approaches from both successes and failures, with explicit instruction to check for contradictions with team feedback before saving.

##### 3.1.1.6 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory field to capture role, goals, responsibilities, and knowledge for tailoring future behavior while avoiding negative judgements.

##### 3.1.1.7 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, including its type description.

##### 3.1.1.8 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file.

##### 3.1.1.9 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and extracts 1-7 relevant facts per query as JSON with cited filenames. Facts avoid re-asking, apply user preferences, maintain continuity, or prevent known pitfalls without solving the query itself.

##### 3.1.1.10 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options based on user query, being conservative with profile/project memories to match actual query content rather than surface keywords.

##### 3.1.1.11 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory files documenting current state, task specification, files, workflow, errors, codebase, learnings, and worklog.

##### 3.1.1.12 [User profile memory template (Data)](system-prompts/data-user-profile-memory-template.md)

Template for user profile memory covering personal details, work context, schedule, and communication preferences.

#### 3.1.2 Memory Consolidation & Dream Passes

Nightly background processes that consolidate session logs and transcripts into persistent memory topics, reconcile facts against maintained instructions, and prune stale or duplicate entries while preserving shared team context. Handles scheduling, multi-phase synthesis, and index management to keep memory artifacts under size limits.

##### 3.1.2.1 [/dream memory consolidation (Skill)](system-prompts/skill-dream-memory-consolidation.md)

Nightly housekeeping job that consolidates session logs and transcripts into persistent memory topics, learnings, and a pruned MEMORY.md index under 200 lines.

##### 3.1.2.2 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing schedules, creating a cron task, confirming details, and running an immediate consolidation.

##### 3.1.2.3 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing memories, gathering recent signal from session logs and transcripts, merging updates into topic files, and pruning the index to stay under size limits. Converts relative dates to absolute and resolves contradicted facts.

##### 3.1.2.4 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs memory pruning by deleting stale or invalidated memory files and collapsing duplicates into single-fact files. Conservatively handles team memory subdirectories to avoid deleting shared teammate memories.

##### 3.1.2.5 [Dream CLAUDE.md memory reconciliation (System Prompt)](system-prompts/system-prompt-dream-claudemd-memory-reconciliation.md)

Guides memory consolidation during dream sessions to reconcile feedback and project memories against CLAUDE.md, deleting stale memories or flagging potential drift between maintained instructions and stored context.

##### 3.1.2.6 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Establishes conservative rules for handling shared team memories during dream consolidation, including deduplication and protective pruning to avoid deleting teammates' load-bearing notes while removing clear duplicates.

##### 3.1.2.7 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files with conversation insights while preserving file structure, section headers, and template descriptions.

### 3.2 Session Lifecycle & Context Compaction

Session naming, cross-machine continuation, transcript search, and structured conversation summarization that preserves technical details for efficient context resumption.

#### 3.2.1 Conversation Summarization & Context Compaction

Structured summarization of conversation history into nine-section formats that preserve technical details, code snippets, errors, and task continuity for efficient context resumption. Supports both full and incremental summarization with analysis tags to ensure thoroughness and enable partial compaction across long sessions.

##### 3.2.1.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections: primary request, technical concepts, files/code, errors/fixes, problem-solving, user messages, pending tasks, current work, and next steps. Uses analysis tags to ensure thoroughness and includes full code snippets and specific file details.

##### 3.2.1.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes only the recent portion of conversation following earlier retained context, organized into nine sections: primary request, technical concepts, files/code, errors/fixes, problem-solving, user messages, pending tasks, current work, and next steps with analysis tags for thoroughness.

##### 3.2.1.3 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Instructs Claude to create detailed conversation summaries for partial compaction with structured analysis and nine required sections covering requests, technical concepts, files, errors, problem-solving, user messages, pending tasks, completed work, and continuation context.

##### 3.2.1.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Defines structure for context compaction summaries enabling efficient resumption: task overview, current state with artifacts, important discoveries and decisions, next steps with blockers, and context to preserve.

##### 3.2.1.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

References a file read before conversation summarization that is too large to include, directing Claude to use the Read tool if needed.

##### 3.2.1.6 [Previously invoked skills (System Reminder)](system-prompts/system-reminder-previously-invoked-skills.md)

Restores skills invoked before conversation compaction as context only, warning Claude not to re-execute setup actions or treat prior inputs as current instructions.

#### 3.2.2 Session Management & Continuity

Session lifecycle management including cross-machine continuation, auto-generated naming conventions, transcript-based session search, and isolated temporary file handling for background jobs. Ensures working directory consistency and prevents file clobbering between parallel executions.

##### 3.2.2.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and provides the updated working directory.

##### 3.2.2.2 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise sentence-case session titles (3-7 words) that capture the main topic so users recognize sessions in lists, returning JSON with a single title field.

##### 3.2.2.3 [/rename auto-generate session name (Agent Prompt)](system-prompts/agent-prompt-rename-auto-generate-session-name.md)

Auto-generates a short kebab-case session name (2-4 words) capturing the main conversation topic, returning JSON with a name field.

##### 3.2.2.4 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent prompt for searching past Claude Code conversation sessions by scanning .jsonl transcript files and returning matching session IDs ordered by relevance.

##### 3.2.2.5 [Background session instructions (System Prompt)](system-prompts/system-prompt-background-session-instructions.md)

Directs background job sessions to use the job-specific temporary directory instead of /tmp to avoid file clobbering between parallel jobs and follow worktree isolation guidance.

##### 3.2.2.6 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

### 3.3 Scheduling & Cron Management

Cloud-based and local task scheduling infrastructure for recurring or one-time job execution, including cron syntax, interval parsing, and dynamic self-paced loop orchestration. Supports immediate execution, autonomous wakeups via event monitors, and fallback heartbeat scheduling with cost optimization via prompt cache TTL awareness.

#### 3.3.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron-based jobs using standard 5-field cron syntax in local timezone. Avoid :00 and :30 minute marks for load distribution; recurring jobs auto-expire after a configurable timeframe.

#### 3.3.2 [ScheduleWakeup (/loop dynamic mode) [Tool Description]](system-prompts/tool-description-schedulewakeup-loop-dynamic-mode.md)

Schedule the next iteration in /loop dynamic (self-paced) mode by passing the loop prompt back. Use sentinel `<<autonomous-loop-dynamic>>` for autonomous loops without user prompts.

#### 3.3.3 [Schedule proactive offer guidance (Tool Description)](system-prompts/tool-description-schedule-proactive-offer-guidance.md)

Use scheduling for recurring or one-time remote agents. Proactively offer scheduling after successful work with natural follow-ups like feature rollouts, new monitors, or cleanup tasks.

#### 3.3.4 [Snooze (delay and reason guidance) [Tool Description]](system-prompts/tool-description-snooze-delay-and-reason-guidance.md)

Snooze schedules resumption of /loop dynamic mode work, with guidance on choosing delaySeconds relative to the 5-minute prompt cache TTL to optimize cost and performance, and writing specific reason fields for telemetry.

#### 3.3.5 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into an interval and prompt, converts the interval to a cron expression, and schedules a recurring task with immediate execution.

#### 3.3.6 [/loop slash command (dynamic mode) [Skill]](system-prompts/skill-loop-slash-command-dynamic-mode.md)

Parses user input into an interval and prompt for scheduling recurring or dynamically self-paced loop executions, with support for leading tokens and trailing 'every' clauses.

#### 3.3.7 [/loop cloud-first scheduling offer (Skill)](system-prompts/skill-loop-cloud-first-scheduling-offer.md)

Decision tree for offering cloud-based scheduling before falling back to local session loops in the /loop command, routing to the schedule skill when appropriate.

#### 3.3.8 [/loop self-pacing mode (Skill)](system-prompts/skill-loop-self-pacing-mode.md)

Instructs Claude how to self-pace a recurring loop by arming event monitors as primary wake signals and scheduling fallback heartbeat delays between iterations.

#### 3.3.9 [Schedule recurring cron and execute immediately (compact) [Skill]](system-prompts/skill-schedule-recurring-cron-and-execute-immediately-compact.md)

Creates a recurring cron job, confirms the schedule with the user, and immediately executes the parsed prompt without waiting for the first cron fire.

#### 3.3.10 [Schedule recurring cron and run immediately (Skill)](system-prompts/skill-schedule-recurring-cron-and-run-immediately.md)

Converts an interval to a cron expression, schedules a recurring task, confirms to the user, and immediately executes the task without waiting for the first cron fire.

#### 3.3.11 [Dynamic pacing loop execution (Skill)](system-prompts/skill-dynamic-pacing-loop-execution.md)

Instructions for executing a dynamic pacing loop that runs tasks, arms persistent event monitors as primary wake signals, schedules fallback heartbeat delays, and handles task notifications.

#### 3.3.12 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on recurring cron schedules or one-time runs in Anthropic's cloud infrastructure, with MCP connector support, environment selection, and timezone conversion.

#### 3.3.13 [Proactive schedule offer after follow-up work (System Prompt)](system-prompts/system-prompt-proactive-schedule-offer-after-follow-up-work.md)

Instructs Claude to offer scheduling background agents for natural follow-up actions like feature flag cleanup, metric verification, or recurring sweeps when work completion has strong future signals and high user acceptance likelihood.

#### 3.3.14 [Loop wakeup not scheduled (System Reminder)](system-prompts/system-reminder-loop-wakeup-not-scheduled.md)

Instructs Claude on handling /loop dynamic mode wakeups that were not scheduled, specifying when to re-issue with the prompt field set versus when the loop has ended.

---

## 4. Software Development Workflows

End-to-end development tooling covering git operations, code review, testing, CI/CD integration, and IDE context awareness. Supports the full cycle from writing code through verification and deployment.

### 4.1 Git, Version Control & CI/CD

Safe commit creation, pull request workflows, branch management, hook enforcement, and GitHub Actions integration for automated code assistance and parallel refactoring.

#### 4.1.1 Git Workflow & Version Control

Comprehensive git integration covering safe commit creation, pull request workflows, branch management, and hook enforcement. Includes automated commit message generation, change analysis, and worktree isolation for complex tasks while preventing destructive operations.

##### 4.1.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives to destructive git operations unless they are truly the best approach.

##### 4.1.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Provides detailed procedures for creating git commits and GitHub pull requests, including safety protocols, parallel command execution, hook handling, and PR formatting with test plans.

##### 4.1.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude to never skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues if hooks fail.

##### 4.1.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to prefer creating new commits over amending existing ones.

##### 4.1.1.5 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context (status, diff, branch, recent commits). Analyzes changes, drafts a message following repository style, stages files, and executes commit while enforcing safety protocols (no amend, no hooks skip, no secrets).

##### 4.1.1.6 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates or updates pull requests with pre-populated git context. Analyzes all changes across commits, creates branches with user-prefixed names, commits with attribution, pushes, and uses gh pr create/edit with multi-line body including summary and test plan while enforcing git safety protocols.

##### 4.1.1.7 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent for generating succinct session titles and git branch names from task descriptions, following naming conventions and length constraints.

##### 4.1.1.8 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git status snapshot at conversation start as reference context.

##### 4.1.1.9 [Stop hook blocking error (System Reminder)](system-prompts/system-reminder-stop-hook-blocking-error.md)

Notifies Claude of a blocking error from a git hook command.

##### 4.1.1.10 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it, only when explicitly instructed by the user or project instructions. Creates a new branch in `.claude/worktrees/` or delegates to VCS hooks outside git repositories.

##### 4.1.1.11 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exit a worktree session created by EnterWorktree and return to the original directory. Choose to keep or remove the worktree; optionally discard uncommitted changes.

#### 4.1.2 GitHub Integration & CI/CD

Automation infrastructure for embedding Claude into development workflows via GitHub Actions and parallel work orchestration. Enables mention-triggered code assistance, large-scale codebase refactoring through decomposed work units, and background agent coordination with isolated execution contexts.

##### 4.1.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, pull requests, or comments, with optional custom prompts and tool restrictions.

##### 4.1.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing the Claude Code GitHub App, explaining what Claude Code does, how the workflow operates, and security considerations.

##### 4.1.2.3 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes across 5-30 independent work units. Conducts research and planning in plan mode, decomposes work into independently mergeable units with e2e test recipes, spawns background worker agents with worktree isolation, and tracks PR progress across all units.

### 4.2 Code Review, Testing & Quality

Systematic pull request analysis, adversarial runtime testing across CLI and API surfaces, and pragmatic directives for applying changes directly to production code.

#### 4.2.1 Code Review & PR Review

Systematic code quality assessment through pull request analysis and parallel quality checks. Evaluates code style, correctness, performance, test coverage, and identifies refactoring opportunities before implementation is finalized.

##### 4.2.1.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Instructs Claude to review GitHub pull requests by fetching PR details and diffs, then analyzing code quality, style, correctness, performance, test coverage, and security implications.

##### 4.2.1.2 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel agents to identify code reuse opportunities, quality issues, and efficiency problems, then fixes findings directly.

##### 4.2.1.3 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines post-implementation workflow for workers: simplify changes, run unit tests, test end-to-end, commit and push, and report PR status.

#### 4.2.2 Verification & Testing

Runtime validation of code changes through adversarial testing, edge-case probing, and evidence-based verification. Tests implementations across CLI, API, and application surfaces by executing builds, running test suites, and observing behavior at the point where users encounter changes.

##### 4.2.2.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial testing subagent that runs builds, test suites, linters, and adversarial probes (boundary values, concurrency, idempotency) to verify implementations and issue PASS/FAIL/PARTIAL verdicts.

##### 4.2.2.2 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Comprehensive verification skill instructing runtime observation of code changes through building, running, and driving the app to where changed code executes. Emphasizes finding the surface where users meet the change, probing around the claim with edge cases, capturing evidence, and reporting verdicts (PASS, FAIL, BLOCKED, SKIP) with findings and observations rather than test results.

##### 4.2.2.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Demonstrates verification workflow for CLI changes by building, running with test arguments, and comparing output to expected behavior. Shows how to test new flags, validate output format, and check for regressions.

##### 4.2.2.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Outlines verification workflow for server and API changes using curl to test routes, with server lifecycle management and readiness polling. Demonstrates testing rate-limit headers and validating response behavior.

##### 4.2.2.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically test code changes, including project auto-detection, tool setup (Playwright, Tmux, HTTP), authentication configuration, and skill template generation.

#### 4.2.3 Software Engineering Task Execution

Directives for executing code-focused work with pragmatism: apply changes directly to actual code rather than providing generic guidance, respect user judgment on task scope, delete unused code outright instead of adding compatibility layers, validate only at system boundaries to keep internal code simple, and surface help channels when requested.

##### 4.2.3.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Instructs Claude to interpret user requests in the context of software engineering tasks like debugging, refactoring, and code modification, applying instructions to actual code rather than providing generic answers.

##### 4.2.3.2 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Permits users to complete ambitious tasks by deferring to user judgement on scope rather than imposing artificial limits.

##### 4.2.3.3 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Directs complete deletion of unused code rather than adding compatibility shims, renamed variables, or removed comments.

##### 4.2.3.4 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Avoids error handling for impossible scenarios and validation for internal code, validating only at system boundaries like user input and external APIs.

##### 4.2.3.5 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs informing users of help and feedback channels when requested.

### 4.3 IDE Integration & Hook Automation

Real-time IDE state synchronization including file tracking and diagnostics, plus event-driven hook configuration that triggers actions on lifecycle events.

#### 4.3.1 Hooks: Configuration & Lifecycle Events

Event-driven automation framework for Claude Code that triggers actions on lifecycle events like tool execution and file changes. Supports conditional evaluation, blocking operations, and context injection through declarative configuration with JSON schemas and matcher syntax.

##### 4.3.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive reference for configuring lifecycle hooks in Claude Code, including event types, matcher syntax, three hook types (command, prompt, agent), JSON input/output schema, and common patterns for auto-formatting and testing.

##### 4.3.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Delivers additional context information from a hook to Claude.

##### 4.3.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command, including the command and error message.

##### 4.3.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook has stopped continuation and provides the associated message.

##### 4.3.1.5 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix string for hook stopped continuation messages.

##### 4.3.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook with its content message.

##### 4.3.1.7 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks in Claude Code by reading conversation transcripts and judging whether user-provided conditions are satisfied, returning JSON with ok/reason fields and quoted evidence.

##### 4.3.1.8 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Guides modification of Claude Code settings.json files, distinguishing when hooks are needed for automated event-triggered actions versus memory-based preferences. Emphasizes reading existing settings before writing, merging arrays carefully to preserve existing configuration, and using the /config command for simple settings while editing settings.json directly for hooks, permissions, and environment variables.

##### 4.3.1.9 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Provides a seven-step verification workflow for constructing and testing hooks in Claude Code, from deduplication checks through pipe-testing raw commands, validating JSON syntax, and proving hooks fire correctly. Includes handling for settings watchers and guidance on cleanup and handoff to users.

#### 4.3.2 IDE Integration & File Context

Real-time notifications of IDE state changes including file opens, selections, external modifications, and diagnostic updates. Manages file size boundaries and truncation transparently to maintain accurate context awareness during development.

##### 4.3.2.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 4.3.2.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific line ranges selected by the user in the IDE, including the selected content, which may or may not relate to the current task.

##### 4.3.2.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides the relevant changes with line numbers.

##### 4.3.2.4 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues with a summary of the problems.

##### 4.3.2.5 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude when a file read offset exceeds the file's actual length, providing the total line count.

##### 4.3.2.6 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Informs Claude that a large file was truncated to a maximum line count and instructs it to use the read tool to access additional content without disclosing truncation to the user.

##### 4.3.2.7 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

---

## 5. Claude API, SDKs & External Integrations

Reference documentation and implementation guides for the Claude API across multiple languages, managed agent architecture, advanced streaming and batching features, and web/browser access tools.

### 5.1 API Reference & SDK Documentation

Comprehensive HTTP and SDK documentation across eight languages covering client initialization, model catalog, error handling, and structured outputs.

#### 5.1.1 Claude API Reference Documentation

Comprehensive SDK and HTTP API documentation across eight languages (Python, TypeScript, Go, Java, Ruby, PHP, C#, cURL) covering client initialization, streaming, tool use, prompt caching, extended thinking, and structured outputs. Includes model catalog with exact IDs and context windows, plus HTTP error code reference for proper error handling.

##### 5.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client configuration, basic requests, vision, prompt caching, thinking, error handling, multi-turn conversations, and cost optimization.

##### 5.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering client initialization, basic requests, vision, prompt caching, thinking, error handling, multi-turn conversations, and cost optimization.

##### 5.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, streaming, tool runner with automatic schema generation, thinking, prompt caching, and context editing.

##### 5.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, streaming, thinking, annotated tool classes with automatic schema generation, memory tool, and server-side tools.

##### 5.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, streaming, beta tool runner with class-based tool definitions, and prompt caching.

##### 5.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including client initialization, streaming, tool runner, extended thinking, prompt caching, structured outputs, and server-side tools.

##### 5.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use, prompt caching, token counting, structured output, and server-side tools.

##### 5.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming, tool use, prompt caching, and extended thinking with required headers.

##### 5.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact model IDs, aliases, context windows, max output tokens, and programmatic model discovery via the Models API.

##### 5.1.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with causes, fixes, and SDK exception types for proper error handling.

#### 5.1.2 Building Applications with Claude: Skills & Guides

Foundational resources for developing Claude-powered systems, from initial API surface selection through agent architecture and model upgrades. Provides language-specific implementation patterns, design decision frameworks for tool composition and context management, and systematic migration paths for evolving codebases.

##### 5.1.2.1 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Comprehensive guide for building applications with Claude, including language detection, API surface selection (Claude API vs. Managed Agents), model defaults, thinking/effort configuration, and language-specific code generation with the Anthropic SDK.

##### 5.1.2.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API documentation, providing quick-reference task routing to relevant guides for streaming, batches, tool-use, caching, and managed agents.

##### 5.1.2.3 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide for building agents on the Claude API, covering tool surface design decisions (bash vs. dedicated tools), context management strategies (editing, compaction, memory), caching constraints and workarounds, and programmatic tool calling patterns.

##### 5.1.2.4 [Model migration guide (Skill)](system-prompts/skill-model-migration-guide.md)

Step-by-step instructions for migrating existing code to newer Claude models, covering breaking changes, deprecated parameters, per-SDK syntax, prompt-behavior shifts, and comprehensive migration checklists for Opus 4.6, Sonnet 4.6, and Opus 4.7.

##### 5.1.2.5 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for current Claude API documentation, Managed Agents, SDKs, and Anthropic CLI, with extraction prompts for fetching latest information when cached content may be outdated.

##### 5.1.2.6 [Anthropic CLI (Data)](system-prompts/data-anthropic-cli.md)

Reference documentation for the ant CLI covering installation, authentication, command structure, input/output shaping with --transform, managed agents workflows, and scripting patterns for version-controlled agent definitions.

##### 5.1.2.7 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant resources, and providing actionable guidance. Covers CLI tool setup, hooks, skills, MCP servers, SDK configuration, and API integration across Python and TypeScript.

### 5.2 Managed Agents & Advanced API Features

Persistent agent configurations with stateful sessions, plus production-grade streaming, batch processing, file management, and prompt caching for cost optimization.

#### 5.2.1 Managed Agents API & Architecture

Complete reference for building and operating Managed Agents—persistent agent configurations that drive stateful sessions with tool execution in containerized environments. Covers agent versioning, session lifecycle, event streaming, memory stores, MCP integration, file transfer, and client-side patterns. Includes SDK implementations in Python and TypeScript, raw HTTP examples, and an interactive onboarding flow for agent configuration.

##### 5.2.1.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Overview of Managed Agents architecture, the mandatory agent-then-session flow, beta headers, reading guide, and common pitfalls including agent versioning and MCP credential management.

##### 5.2.1.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Core concepts for Managed Agents: Agent (persisted config), Session (stateful interaction), Environment (container template), and Container (tool execution workspace), with lifecycle and versioning.

##### 5.2.1.3 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive endpoint reference for Managed Agents API covering agents, sessions, events, resources, environments, vaults, credentials, memory stores, files, and skills with SDK methods and schemas.

##### 5.2.1.4 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference for Managed Agents environments, file resources, GitHub repository mounting with authentication, session outputs, and the Files API for bidirectional file transfer.

##### 5.2.1.5 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Guide for sending and receiving events on Managed Agent sessions via streaming or polling, including message queuing, interrupts, tool confirmations, and event payload details.

##### 5.2.1.6 [Managed Agents memory stores reference (Data)](system-prompts/data-managed-agents-memory-stores-reference.md)

Reference for Managed Agents memory stores: persistent cross-session text documents mounted as FUSE filesystems, with CRUD operations, versioning, redaction, and optimistic concurrency.

##### 5.2.1.7 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference for Managed Agents tool types (agent toolset, MCP, custom), permission policies (always_allow, always_ask), vault credential management for MCP servers, and skills API.

##### 5.2.1.8 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Reference guide for common client-side patterns driving Managed Agent sessions: stream reconnection with deduplication, idle-break gating, tool confirmations, interrupts, and custom tool handling.

##### 5.2.1.9 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Python SDK reference for Managed Agents covering agent creation, session management, streaming events, custom tools, file uploads, and MCP server integration.

##### 5.2.1.10 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

TypeScript SDK reference for Managed Agents covering agent creation, session management, streaming events, custom tools, file uploads, and MCP server integration.

##### 5.2.1.11 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

cURL and raw HTTP examples for Managed Agents API operations including environment creation, agent setup, session management, event streaming, and MCP server integration.

##### 5.2.1.12 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview script for configuring Managed Agents from scratch, covering tool selection (prebuilt, MCP, custom), skills, GitHub repos, files, environment settings, and vault credentials. Emits YAML agent/environment configs and SDK runtime code in two blocks.

#### 5.2.2 Advanced API Features: Streaming, Batches, Files & Caching

Production-grade capabilities for handling real-time data flows, cost-optimized batch processing, file management, and intelligent caching. Covers streaming protocols for different content types, asynchronous request batching, document/image handling with citations, and cache-aware prompt design for cost reduction.

##### 5.2.2.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, getting final messages, and error handling.

##### 5.2.2.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, handling different content types (text, thinking, tool use), and stream event types.

##### 5.2.2.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, processing up to 100,000 requests asynchronously at 50% cost with polling and result retrieval.

##### 5.2.2.4 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, listing, deletion, and usage in messages for documents and images with optional citations.

##### 5.2.2.5 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript reference for the Files API, covering file upload (max 500 MB), listing, deletion, and usage in messages with document content blocks and citations.

##### 5.2.2.6 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Guide for designing prompt-building code for effective caching, covering placement patterns, silent invalidators, architectural decisions, and cache economics.

##### 5.2.2.7 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), and structured outputs.

##### 5.2.2.8 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference covering tool runner, manual agentic loops, MCP tool conversion, code execution, memory tool, and structured outputs with Pydantic.

##### 5.2.2.9 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod, manual agentic loops with streaming, code execution, memory tool, and structured outputs.

### 5.3 Browser, Web & Specialized Tool Interfaces

Desktop and browser automation via mouse and keyboard control, web search with source citation, and targeted interfaces for Jupyter notebooks and dynamic tool discovery.

#### 5.3.1 Browser Automation & Computer Use

Interact with desktop applications and web browsers through mouse, keyboard, and screenshot capture. Batch execution consolidates multiple sequential actions into single round trips for efficiency. Guidance covers GIF recording, console debugging, tab management, and dialog handling for reliable automation.

##### 5.3.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Interact with a Chrome browser using mouse and keyboard, taking screenshots. Consult screenshots before clicking to determine accurate element coordinates.

##### 5.3.1.2 [BrowserBatch (Tool Description)](system-prompts/tool-description-browserbatch.md)

Execute multiple browser tool calls sequentially in one round trip, stopping on first error. Use extensively for predictable multi-step workflows like navigation, clicking, typing, and screenshots.

##### 5.3.1.3 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Computer action parameter defines 13 browser interaction methods including clicks, typing, scrolling, keyboard input, and hover states for Chrome automation.

##### 5.3.1.4 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides guidelines for browser automation including GIF recording with extra frames, console log filtering with regex patterns, avoiding JavaScript alerts that block commands, and checking tab context at session start to avoid stale tab IDs.

##### 5.3.1.5 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, with specific select: syntax for each tool name.

##### 5.3.1.6 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools to interact with desktop applications and GUIs, covering tool selection tiers (dedicated MCP, Chrome, computer-use), access request flows, tiered app restrictions, link safety, and financial action restrictions.

#### 5.3.2 Web Search & Content Retrieval

Access current information beyond training data through web search with mandatory source citation, and retrieve web content by converting HTML to markdown for analysis. Built-in caching and summarization optimize repeated access and content processing.

##### 5.3.2.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

WebSearch provides current information beyond Claude's knowledge cutoff with mandatory source citation in responses, supporting domain filtering and requiring correct year in queries for recent data.

##### 5.3.2.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

WebFetch retrieves and analyzes web content by converting HTML to markdown and processing it with a fast model, supporting URL redirects and including a 15-minute cache for repeated access.

##### 5.3.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose WebFetch output for the main model, enforcing quote limits and respecting source licenses for untrusted domains.

#### 5.3.3 Notebook & Specialized Tool Interfaces

Targeted interfaces for manipulating Jupyter notebooks and discovering tool capabilities. Enables cell-level editing and dynamic schema retrieval for deferred tool invocation.

##### 5.3.3.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replace the contents of a specific cell in a Jupyter notebook. Supports insert and delete modes; cell_number is 0-indexed and notebook_path must be absolute.

##### 5.3.3.2 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

ToolSearch fetches deferred tool schemas by querying against a tool list using exact name selection, keyword search, or name-required filtering, returning JSONSchema definitions that enable tool invocation.

---

## 6. System Configuration, Skills & User Experience

Core system infrastructure, skill and agent configuration, communication standards, and UX enhancements that shape how Claude operates and presents itself to users.

### 6.1 Environment Configuration & Resource Monitoring

Execution environment controls including markdown rendering, permission modes, tool parallelization, feature toggles, and real-time token and cost consumption visibility.

#### 6.1.1 Harness & Core System Configuration

Core system infrastructure controlling execution environment behavior, including markdown rendering, permission modes, tool parallelization, and feature toggles. Encompasses minimal mode for stripped-down operation and platform-specific settings management.

##### 6.1.1.1 [Harness instructions (System Prompt)](system-prompts/system-prompt-harness-instructions.md)

Defines core harness behavior including GitHub-flavored markdown terminal output, permission modes, hook injection, context compaction, parallel tool calls, and clickable code references.

##### 6.1.1.2 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode behavior that disables hooks, LSP, plugins, auto-memory, and background features while requiring explicit context via CLI flags for authentication and configuration.

##### 6.1.1.3 [WSL managed settings double opt-in (System Prompt)](system-prompts/system-prompt-wsl-managed-settings-double-opt-in.md)

Explains that WSL reads Windows managed settings policy chain only when admin-enabled flag is set, with HKCU requiring additional user opt-in.

##### 6.1.1.4 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while running dependent operations sequentially.

##### 6.1.1.5 [Thinking frequency tuning (System Reminder)](system-prompts/system-reminder-thinking-frequency-tuning.md)

Instructs Claude to treat system-reminder tags as harness instructions and calibrate thinking depth based on task complexity, avoiding unnecessary reasoning for simple tasks.

#### 6.1.2 Resource & Budget Monitoring

Real-time visibility into consumption metrics including token usage and USD spending. Provides status indicators for resource availability and MCP resource accessibility.

##### 6.1.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 6.1.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

##### 6.1.2.3 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource has no content available.

##### 6.1.2.4 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

### 6.2 Onboarding, Skills & Agent Configuration

Systematic environment initialization through codebase analysis and CLAUDE.md generation, slash command invocation of specialized skills, and agent memory for accumulating domain knowledge.

#### 6.2.1 Onboarding & Configuration Setup

Systematic initialization and customization of Claude environments through codebase analysis, documentation generation, and skill/agent creation. Transforms project context into actionable configurations—CLAUDE.md files, reusable skills, custom agents—enabling teams to codify workflows and accelerate onboarding.

##### 6.2.1.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks in a repository, including codebase exploration, user interviews, iterative proposal refinement, and optimization suggestions.

##### 6.2.1.2 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md documentation files capturing high-level architecture, build/lint/test commands, and development workflows. Incorporates existing Cursor/Copilot rules and README content while avoiding obvious instructions and generic practices.

##### 6.2.1.3 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding new teammates to a team's Claude Code setup, walking them through usage stats, setup checklists, MCP servers, skills, and team tips in a conversational style.

##### 6.2.1.4 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts with decision frameworks and quality controls, and generating concise identifiers. Incorporates project-specific context from CLAUDE.md files and provides JSON output with agent identifier, usage examples, and complete operational manual.

##### 6.2.1.5 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-step process to convert repeatable session workflows into reusable skills by analyzing the session, interviewing the user with structured questions, and writing a SKILL.md file with clear inputs, goals, steps, and success criteria.

#### 6.2.2 Skill Invocation & Slash Commands

Mechanisms for invoking specialized capabilities and diagnostic tools through slash commands and skill matching. Enables side-question agents, debugging workflows, and agent invocation while maintaining blocking semantics during execution.

##### 6.2.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Skill tool invokes specialized capabilities and slash commands within conversations by matching user requests against available skills, requiring exact skill names and blocking other responses until invocation completes.

##### 6.2.2.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by checking process state, CPU usage, memory, and child processes, then posts findings to Slack.

##### 6.2.2.3 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Configures a lightweight side-question agent with no tools that answers a single question from conversation context while the main agent continues working independently.

##### 6.2.2.4 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent type and instructs appropriate invocation with required context.

##### 6.2.2.5 [Debugging (Skill)](system-prompts/skill-debugging.md)

Helps users debug issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

#### 6.2.3 Agent Memory & Institutional Knowledge

Mechanisms for agents to accumulate domain-specific knowledge across conversations and integrate external guidance: memory update templates help agents record learnings in specialized roles, while advisor tool protocols establish when to seek guidance and how to reconcile it with primary evidence.

##### 6.2.3.1 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Provides template for including domain-specific memory update guidance in agent system prompts, with examples for code reviewers, test runners, architects, and documentation writers to build institutional knowledge across conversations.

##### 6.2.3.2 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructs when to call the advisor tool—before substantive work, when stuck, or when considering approach changes—and how to weight its guidance against primary-source evidence. Recommends making deliverables durable before calling advisor and using reconciliation calls when evidence conflicts.

### 6.3 Analytics, Productivity & Periodic Routines

Usage analytics that surface workflow patterns and friction points, automated briefings and heartbeat monitoring for situational awareness, and file system operations for reading and writing across formats.

#### 6.3.1 Usage Insights & Analytics

Analytics and reporting layer that extracts actionable intelligence from Claude Code sessions. Surfaces usage patterns, friction points, and workflow opportunities while generating team onboarding guides and feature recommendations tailored to observed user behavior.

##### 6.3.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for future models, using aggregated usage data and coaching tone.

##### 6.3.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with three concrete categories and examples, helping users understand recurring issues.

##### 6.3.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies three ambitious future opportunities for autonomous AI-assisted development workflows, including what's possible, how to try, and copyable prompts.

##### 6.3.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from session transcripts including goal categories, user satisfaction signals, and friction types, with strict guidelines to count only explicit user requests and clear satisfaction indicators.

##### 6.3.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions, feature recommendations from MCP servers through headless mode, and usage patterns, prioritizing repeated user guidance and relevant features.

##### 6.3.1.6 [/insights report output (Skill)](system-prompts/skill-insights-report-output.md)

Formats and displays the insights usage report results after the user runs the /insights slash command, showing shareable report URL and facets directory.

##### 6.3.1.7 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides (ONBOARDING.md) by analyzing usage data, classifying sessions into 7 task types (build feature, debug, improve quality, analyze data, plan design, prototype, write docs), and iterating collaboratively with the guide creator on team name, tips, and starter tasks.

#### 6.3.2 Periodic & Productivity Skills

Automated routines that maintain situational awareness and reduce friction: morning and pre-meeting briefings surface relevant context at critical moments, periodic heartbeats track priority state changes, and transcript analysis extracts safe tool patterns to streamline permissions.

##### 6.3.2.1 [/morning-checkin daily brief (Skill)](system-prompts/skill-morning-checkin-daily-brief.md)

Once-a-day task that prepares a daily calendar and inbox digest, schedules pre-meeting check-ins, and records the day's top priority to help the user start their day ready.

##### 6.3.2.2 [/pre-meeting-checkin event brief (Skill)](system-prompts/skill-pre-meeting-checkin-event-brief.md)

Fires a few minutes before a calendar event to gather materials, recent context, and open questions, delivering a concise meeting brief so the user arrives prepared.

##### 6.3.2.3 [/catch-up periodic heartbeat (Skill)](system-prompts/skill-catch-up-periodic-heartbeat.md)

Periodic task that scans tracked priorities, checks for state changes, and surfaces actionable updates or changes to the user, running every two hours within configured quiet hours.

##### 6.3.2.4 [Generate permission allowlist from transcripts (Skill)](system-prompts/skill-generate-permission-allowlist-from-transcripts.md)

Analyzes session transcripts to extract frequently used read-only tool patterns and adds them to the project's permission allowlist, reducing permission prompts while avoiding arbitrary code execution.

#### 6.3.3 File System Operations

Tools for reading, writing, editing, and searching files in the local filesystem. Read operations support multiple formats including images, PDFs, and Jupyter notebooks. Write and edit operations provide different strategies for file creation versus modification, with search capabilities powered by ripgrep regex. Language Server Protocol integration enables code intelligence across files.

##### 6.3.3.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Read files from the local filesystem using absolute paths. Supports images, PDFs (with page ranges for large files), Jupyter notebooks, and regular text files with configurable line limits.

##### 6.3.3.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Write creates or completely rewrites files to the filesystem, preferring Edit for modifications and avoiding documentation files unless explicitly requested.

##### 6.3.3.3 [Write (read existing file first) [Tool Description]](system-prompts/tool-description-write-read-existing-file-first.md)

Write creates or overwrites files, requiring prior Read calls for existing files to avoid failure, with preference for Edit tool for modifications.

##### 6.3.3.4 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read tool output. Prefer editing existing files; avoid writing new files unless required.

##### 6.3.3.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Search files using ripgrep with full regex support, file filtering by glob or type, and multiple output modes. Always use this tool for search tasks instead of bash grep commands.

##### 6.3.3.6 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers for code intelligence: find definitions, references, hover info, symbols, implementations, and call hierarchies across files.

### 6.4 Communication, Notifications & UX Guidance

Output formatting standards emphasizing brevity and clarity, user notification mechanisms for time-sensitive input, learning modes for guided collaboration, and predictive prompt suggestions.

#### 6.4.1 Communication Style & Output Formatting

Standards for user-facing communication emphasizing brevity, clarity, and structured formatting. Defines concise updates during execution, code reference conventions, summary generation patterns, and behavioral guidelines for consistent output across interactions.

##### 6.4.1.1 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs brief user-facing updates at key moments during tool use, concise end-of-turn summaries, matching response format to task complexity, and avoiding comments and planning documents in code.

##### 6.4.1.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number references when mentioning specific code locations.

##### 6.4.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 6.4.1.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and instructs it to follow that style's guidelines.

##### 6.4.1.5 [Assistant voice and values template (Data)](system-prompts/data-assistant-voice-and-values-template.md)

Template content describing Claude's voice, values, and communication style emphasizing brevity, honesty, collaboration, and directness.

##### 6.4.1.6 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Defines brief action summaries in present tense (-ing form) naming files or functions, avoiding past tense, vagueness, and branch names. Requires summaries to be 3-5 words and distinct from previous summaries.

##### 6.4.1.7 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths, share relevant paths in final response, avoid emojis, omit colons before tool calls, and include code snippets only when load-bearing.

#### 6.4.2 Notifications & User Alerts

Mechanisms for capturing user attention and gathering input during execution. Delivers time-sensitive notifications across devices while enabling clarification of ambiguous instructions and presentation of visual alternatives through interactive prompts.

##### 6.4.2.1 [PushNotification (Tool Description)](system-prompts/tool-description-pushnotification.md)

Send desktop notifications to the user's terminal and phone (if Remote Control connected). Use sparingly for important events requiring immediate attention, keeping messages under 200 characters.

##### 6.4.2.2 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use AskUserQuestion for gathering preferences, clarifying ambiguous instructions, and offering implementation choices during execution, with special guidance for plan mode.

##### 6.4.2.3 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Describes using the optional preview field on single-select question options to display HTML mockups, code snippets, and visual comparisons without script or style tags.

##### 6.4.2.4 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Defines optional preview field for presenting visual artifacts like ASCII mockups, code snippets, and diagrams in side-by-side layout for single-select options.

#### 6.4.3 Learning & Teaching Modes

Interactive educational frameworks that guide users through tasks by requesting incremental human contributions, providing contextual insights, and offering step-by-step guidance with visual overlays. Balances autonomy with learning by decomposing work into manageable pieces and explaining implementation choices.

##### 6.4.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Establishes collaborative learning mode where Claude balances task completion with human contribution by requesting 2-10 line code pieces for design decisions and algorithms, using TODO(human) markers and Learn by Doing request format.

##### 6.4.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code changes, focusing on implementation choices and codebase-specific patterns rather than generic concepts.

##### 6.4.3.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Request permission to guide the user through a task step-by-step with fullscreen tooltip overlays instead of direct access. Use when the user wants to learn how to do something.

#### 6.4.4 Prompt Suggestion & UX Guidance

Interface enhancements that anticipate user intent and configure terminal presentation: predictive suggestions surface natural next steps based on conversation flow, while status line configuration adapts shell display to session metadata.

##### 6.4.4.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent messages, avoiding evaluative language, questions, or Claude-voice suggestions. Returns specific 2-12 word suggestions or silence if the next step is unclear.

##### 6.4.4.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

System prompt for configuring Claude Code status line display by converting shell PS1 configurations and creating custom status commands with session metadata.
