# Claude Code System Prompts Index

Operational guidelines and reference material for deploying Claude as an autonomous coding agent, covering everything needed to build, run, and maintain AI-driven software engineering workflows at any scale.

## Table of Contents

1. [Bash & Shell Execution](#1-bash-shell-execution)
   1. [Bash Sandbox Security & Policy](#11-bash-sandbox-security-policy)
      1. [Bash (sandbox — adjust settings) [Tool Description]](#111-bash-sandbox-—-adjust-settings-tool-description)
      2. [Bash (sandbox — default to sandbox) [Tool Description]](#112-bash-sandbox-—-default-to-sandbox-tool-description)
      3. [Bash (sandbox — evidence: access denied) [Tool Description]](#113-bash-sandbox-—-evidence-access-denied-tool-description)
      4. [Bash (sandbox — evidence list header) [Tool Description]](#114-bash-sandbox-—-evidence-list-header-tool-description)
      5. [Bash (sandbox — evidence: network failures) [Tool Description]](#115-bash-sandbox-—-evidence-network-failures-tool-description)
      6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#116-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#117-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
      8. [Bash (sandbox — explain restriction) [Tool Description]](#118-bash-sandbox-—-explain-restriction-tool-description)
      9. [Bash (sandbox — failure evidence condition) [Tool Description]](#119-bash-sandbox-—-failure-evidence-condition-tool-description)
      10. [Bash (sandbox — mandatory mode) [Tool Description]](#1110-bash-sandbox-—-mandatory-mode-tool-description)
      11. [Bash (sandbox — no exceptions) [Tool Description]](#1111-bash-sandbox-—-no-exceptions-tool-description)
      12. [Bash (sandbox — no sensitive paths) [Tool Description]](#1112-bash-sandbox-—-no-sensitive-paths-tool-description)
      13. [Bash (sandbox — per-command) [Tool Description]](#1113-bash-sandbox-—-per-command-tool-description)
      14. [Bash (sandbox — response header) [Tool Description]](#1114-bash-sandbox-—-response-header-tool-description)
      15. [Bash (sandbox — retry without sandbox) [Tool Description]](#1115-bash-sandbox-—-retry-without-sandbox-tool-description)
      16. [Bash (sandbox — tmpdir) [Tool Description]](#1116-bash-sandbox-—-tmpdir-tool-description)
      17. [Bash (sandbox — user permission prompt) [Tool Description]](#1117-bash-sandbox-—-user-permission-prompt-tool-description)
   2. [Command Syntax & Execution Patterns](#12-command-syntax-execution-patterns)
      1. [Bash Command Syntax & Execution Patterns](#121-bash-command-syntax-execution-patterns)
         1. [Bash (no newlines) [Tool Description]](#1211-bash-no-newlines-tool-description)
         2. [Bash (overview) [Tool Description]](#1212-bash-overview-tool-description)
         3. [Bash (parallel commands) [Tool Description]](#1213-bash-parallel-commands-tool-description)
         4. [Bash (semicolon usage) [Tool Description]](#1214-bash-semicolon-usage-tool-description)
         5. [Bash (sequential commands) [Tool Description]](#1215-bash-sequential-commands-tool-description)
         6. [Bash (timeout) [Tool Description]](#1216-bash-timeout-tool-description)
         7. [Bash (quote file paths) [Tool Description]](#1217-bash-quote-file-paths-tool-description)
         8. [Bash (working directory) [Tool Description]](#1218-bash-working-directory-tool-description)
         9. [Bash (maintain cwd) [Tool Description]](#1219-bash-maintain-cwd-tool-description)
         10. [Bash (verify parent directory) [Tool Description]](#12110-bash-verify-parent-directory-tool-description)
      2. [Bash Sleep & Polling Behavior](#122-bash-sleep-polling-behavior)
         1. [Bash (sleep — keep short) [Tool Description]](#1221-bash-sleep-—-keep-short-tool-description)
         2. [Bash (sleep — no polling background tasks) [Tool Description]](#1222-bash-sleep-—-no-polling-background-tasks-tool-description)
         3. [Bash (sleep — run immediately) [Tool Description]](#1223-bash-sleep-—-run-immediately-tool-description)
         4. [Bash (sleep — use check commands) [Tool Description]](#1224-bash-sleep-—-use-check-commands-tool-description)
         5. [One of six rules for using sleep command (System Prompt)](#1225-one-of-six-rules-for-using-sleep-command-system-prompt)
   3. [Bash Alternatives & Preferred Tool Selection](#13-bash-alternatives-preferred-tool-selection)
      1. [Bash (prefer dedicated tools) [Tool Description]](#131-bash-prefer-dedicated-tools-tool-description)
      2. [Bash (alternative — communication) [Tool Description]](#132-bash-alternative-—-communication-tool-description)
      3. [Bash (alternative — content search) [Tool Description]](#133-bash-alternative-—-content-search-tool-description)
      4. [Bash (alternative — edit files) [Tool Description]](#134-bash-alternative-—-edit-files-tool-description)
      5. [Bash (alternative — file search) [Tool Description]](#135-bash-alternative-—-file-search-tool-description)
      6. [Bash (alternative — read files) [Tool Description]](#136-bash-alternative-—-read-files-tool-description)
      7. [Bash (alternative — write files) [Tool Description]](#137-bash-alternative-—-write-files-tool-description)
      8. [Bash (built-in tools note) [Tool Description]](#138-bash-built-in-tools-note-tool-description)
   4. [Bash Git Operations](#14-bash-git-operations)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#141-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#142-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#143-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#144-bash-git-—-prefer-new-commits-tool-description)
   5. [Platform-Specific Shell Environments](#15-platform-specific-shell-environments)
      1. [PowerShell Tool & Windows Compatibility](#151-powershell-tool-windows-compatibility)
         1. [PowerShell (Tool Description)](#1511-powershell-tool-description)
         2. [PowerShell edition for 5.1 (System Prompt)](#1512-powershell-edition-for-51-system-prompt)
         3. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#1513-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
      2. [Bash Command Documentation](#152-bash-command-documentation)
         1. [Bash command description writer (Agent Prompt)](#1521-bash-command-description-writer-agent-prompt)
2. [Multi-Agent Orchestration](#2-multi-agent-orchestration)
   1. [Multi-Agent Team Coordination](#21-multi-agent-team-coordination)
      1. [TeammateTool (Tool Description)](#211-teammatetool-tool-description)
      2. [SendMessageTool (Tool Description)](#212-sendmessagetool-tool-description)
      3. [TeamDelete (Tool Description)](#213-teamdelete-tool-description)
      4. [Team Coordination (System Reminder)](#214-team-coordination-system-reminder)
      5. [Team Shutdown (System Reminder)](#215-team-shutdown-system-reminder)
      6. [SendMessageTool (non-agent-teams) [Tool Description]](#216-sendmessagetool-non-agent-teams-tool-description)
   2. [Subagent Spawning & Delegation](#22-subagent-spawning-delegation)
      1. [Agent (usage notes) [Tool Description]](#221-agent-usage-notes-tool-description)
      2. [Fork usage guidelines (System Prompt)](#222-fork-usage-guidelines-system-prompt)
      3. [Subagent delegation examples (System Prompt)](#223-subagent-delegation-examples-system-prompt)
      4. [Subagent prompt-writing examples (System Prompt)](#224-subagent-prompt-writing-examples-system-prompt)
      5. [Writing subagent prompts (System Prompt)](#225-writing-subagent-prompts-system-prompt)
      6. [Tool usage (subagent guidance) [System Prompt]](#226-tool-usage-subagent-guidance-system-prompt)
      7. [Worker fork (Agent Prompt)](#227-worker-fork-agent-prompt)
      8. [Worker instructions (System Prompt)](#228-worker-instructions-system-prompt)
   3. [Background Agent State & Job Management](#23-background-agent-state-job-management)
      1. [Background agent state classifier (Agent Prompt)](#231-background-agent-state-classifier-agent-prompt)
      2. [Background agent state classification examples (Data)](#232-background-agent-state-classification-examples-data)
      3. [Background job behavior (System Prompt)](#233-background-job-behavior-system-prompt)
      4. [Background session instructions (System Prompt)](#234-background-session-instructions-system-prompt)
      5. [Background monitor (streaming events) [Tool Description]](#235-background-monitor-streaming-events-tool-description)
      6. [Autonomous loop check (System Prompt)](#236-autonomous-loop-check-system-prompt)
   4. [Scheduling & Loop Execution](#24-scheduling-loop-execution)
      1. [CronCreate (Tool Description)](#241-croncreate-tool-description)
      2. [ScheduleWakeup (/loop dynamic mode) [Tool Description]](#242-schedulewakeup-loop-dynamic-mode-tool-description)
      3. [Snooze (delay and reason guidance) [Tool Description]](#243-snooze-delay-and-reason-guidance-tool-description)
      4. [/loop slash command (Skill)](#244-loop-slash-command-skill)
      5. [/loop slash command (dynamic mode) [Skill]](#245-loop-slash-command-dynamic-mode-skill)
      6. [/loop self-pacing mode (Skill)](#246-loop-self-pacing-mode-skill)
      7. [/loop cloud-first scheduling offer (Skill)](#247-loop-cloud-first-scheduling-offer-skill)
      8. [Dynamic pacing loop execution (Skill)](#248-dynamic-pacing-loop-execution-skill)
      9. [Schedule recurring cron and execute immediately (compact) [Skill]](#249-schedule-recurring-cron-and-execute-immediately-compact-skill)
      10. [Schedule recurring cron and run immediately (Skill)](#2410-schedule-recurring-cron-and-run-immediately-skill)
      11. [/dream nightly schedule (Skill)](#2411-dream-nightly-schedule-skill)
      12. [Loop wakeup not scheduled (System Reminder)](#2412-loop-wakeup-not-scheduled-system-reminder)
      13. [Proactive schedule offer after follow-up work (System Prompt)](#2413-proactive-schedule-offer-after-follow-up-work-system-prompt)
      14. [Schedule proactive offer guidance (Tool Description)](#2414-schedule-proactive-offer-guidance-tool-description)
      15. [/schedule slash command (Agent Prompt)](#2415-schedule-slash-command-agent-prompt)
   5. [Autonomous & Auto Mode Execution](#25-autonomous-auto-mode-execution)
      1. [Auto mode (System Prompt)](#251-auto-mode-system-prompt)
      2. [Executing actions with care (System Prompt)](#252-executing-actions-with-care-system-prompt)
      3. [Doing tasks (ambitious tasks) [System Prompt]](#253-doing-tasks-ambitious-tasks-system-prompt)
   6. [Batch Operations & Parallel Codebase Changes](#26-batch-operations-parallel-codebase-changes)
      1. [/batch slash command (Agent Prompt)](#261-batch-slash-command-agent-prompt)
   7. [Harness & Core Agent Infrastructure](#27-harness-core-agent-infrastructure)
      1. [Harness instructions (System Prompt)](#271-harness-instructions-system-prompt)
      2. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#272-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      3. [Tool execution denied (System Prompt)](#273-tool-execution-denied-system-prompt)
      4. [Agent mention (System Reminder)](#274-agent-mention-system-reminder)
      5. [/btw side question (System Reminder)](#275-btw-side-question-system-reminder)
3. [Memory, Sessions & Context Management](#3-memory-sessions-context-management)
   1. [Persistent Memory Systems](#31-persistent-memory-systems)
      1. [Memory Management & Persistence](#311-memory-management-persistence)
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
         11. [User profile memory template (Data)](#31111-user-profile-memory-template-data)
         12. [Session memory template (Data)](#31112-session-memory-template-data)
      2. [Dream Memory Consolidation & Pruning](#312-dream-memory-consolidation-pruning)
         1. [Dream memory consolidation (Agent Prompt)](#3121-dream-memory-consolidation-agent-prompt)
         2. [Dream memory pruning (Agent Prompt)](#3122-dream-memory-pruning-agent-prompt)
         3. [/dream memory consolidation (Skill)](#3123-dream-memory-consolidation-skill)
         4. [Dream CLAUDE.md memory reconciliation (System Prompt)](#3124-dream-claudemd-memory-reconciliation-system-prompt)
         5. [Dream team memory handling (System Prompt)](#3125-dream-team-memory-handling-system-prompt)
         6. [Agent memory instructions (System Prompt)](#3126-agent-memory-instructions-system-prompt)
   2. [Conversation & Context Compaction](#32-conversation-context-compaction)
      1. [Conversation Summarization & Context Compaction](#321-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#3211-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#3212-recent-message-summarization-agent-prompt)
         3. [Partial compaction instructions (System Prompt)](#3213-partial-compaction-instructions-system-prompt)
         4. [Context compaction summary (System Prompt)](#3214-context-compaction-summary-system-prompt)
         5. [Compact file reference (System Reminder)](#3215-compact-file-reference-system-reminder)
         6. [Previously invoked skills (System Reminder)](#3216-previously-invoked-skills-system-reminder)
         7. [Session continuation (System Reminder)](#3217-session-continuation-system-reminder)
      2. [Session Naming & Management](#322-session-naming-management)
         1. [Coding session title generator (Agent Prompt)](#3221-coding-session-title-generator-agent-prompt)
         2. [/rename auto-generate session name (Agent Prompt)](#3222-rename-auto-generate-session-name-agent-prompt)
         3. [Session search (Agent Prompt)](#3223-session-search-agent-prompt)
         4. [Session memory update instructions (Agent Prompt)](#3224-session-memory-update-instructions-agent-prompt)
   3. [Task & Progress Tracking](#33-task-progress-tracking)
      1. [TodoWrite (Tool Description)](#331-todowrite-tool-description)
      2. [TaskCreate (Tool Description)](#332-taskcreate-tool-description)
      3. [TaskList (teammate workflow) [Tool Description]](#333-tasklist-teammate-workflow-tool-description)
      4. [Task tools reminder (System Reminder)](#334-task-tools-reminder-system-reminder)
      5. [TodoWrite reminder (System Reminder)](#335-todowrite-reminder-system-reminder)
      6. [Tool usage (task management) [System Prompt]](#336-tool-usage-task-management-system-prompt)
4. [Planning, Code Review & Quality Assurance](#4-planning-code-review-quality-assurance)
   1. [Planning & Design Workflows](#41-planning-design-workflows)
      1. [EnterPlanMode (Tool Description)](#411-enterplanmode-tool-description)
      2. [ExitPlanMode (Tool Description)](#412-exitplanmode-tool-description)
      3. [Plan mode approval tool enforcement (System Reminder)](#413-plan-mode-approval-tool-enforcement-system-reminder)
      4. [Plan mode is active (5-phase) [System Reminder]](#414-plan-mode-is-active-5-phase-system-reminder)
      5. [Plan mode is active (iterative) [System Reminder]](#415-plan-mode-is-active-iterative-system-reminder)
      6. [Plan mode is active (subagent) [System Reminder]](#416-plan-mode-is-active-subagent-system-reminder)
      7. [Plan mode re-entry (System Reminder)](#417-plan-mode-re-entry-system-reminder)
      8. [Plan file reference (System Reminder)](#418-plan-file-reference-system-reminder)
      9. [Exited plan mode (System Reminder)](#419-exited-plan-mode-system-reminder)
      10. [Ultraplan mode (System Reminder)](#4110-ultraplan-mode-system-reminder)
      11. [Remote plan mode (ultraplan) [System Prompt]](#4111-remote-plan-mode-ultraplan-system-prompt)
      12. [Remote planning session (System Prompt)](#4112-remote-planning-session-system-prompt)
      13. [Plan mode (enhanced) [Agent Prompt]](#4113-plan-mode-enhanced-agent-prompt)
   2. [Codebase Exploration & Project Setup](#42-codebase-exploration-project-setup)
      1. [Codebase Exploration & Analysis Agents](#421-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#4211-explore-agent-prompt)
         2. [General purpose (Agent Prompt)](#4212-general-purpose-agent-prompt)
         3. [CLAUDE.md creation (Agent Prompt)](#4213-claudemd-creation-agent-prompt)
      2. [Project Initialization & Onboarding](#422-project-initialization-onboarding)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#4221-init-claudemd-and-skill-setup-new-version-skill)
         2. [Onboarding guide generator (Agent Prompt)](#4222-onboarding-guide-generator-agent-prompt)
         3. [Team onboarding guide (Skill)](#4223-team-onboarding-guide-skill)
         4. [Agent creation architect (Agent Prompt)](#4224-agent-creation-architect-agent-prompt)
   3. [Code Review & Security Analysis](#43-code-review-security-analysis)
      1. [Code Review & Quality Analysis](#431-code-review-quality-analysis)
         1. [/review-pr slash command (Agent Prompt)](#4311-review-pr-slash-command-agent-prompt)
         2. [Verification specialist (Agent Prompt)](#4312-verification-specialist-agent-prompt)
         3. [Auto mode rule reviewer (Agent Prompt)](#4313-auto-mode-rule-reviewer-agent-prompt)
         4. [Simplify (Skill)](#4314-simplify-skill)
         5. [Advisor tool instructions (System Prompt)](#4315-advisor-tool-instructions-system-prompt)
      2. [Security Review & Threat Analysis](#432-security-review-threat-analysis)
         1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#4321-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#4322-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         3. [/security-review slash command (Agent Prompt)](#4323-security-review-slash-command-agent-prompt)
         4. [Bash command prefix detection (Agent Prompt)](#4324-bash-command-prefix-detection-agent-prompt)
         5. [Censoring assistance with malicious activities (System Prompt)](#4325-censoring-assistance-with-malicious-activities-system-prompt)
         6. [Doing tasks (security) [System Prompt]](#4326-doing-tasks-security-system-prompt)
         7. [Malware analysis after Read tool call (System Reminder)](#4327-malware-analysis-after-read-tool-call-system-reminder)
   4. [Verification & Testing Skills](#44-verification-testing-skills)
      1. [Verify skill (Skill)](#441-verify-skill-skill)
      2. [Verify CLI changes (example for Verify skill) [Skill]](#442-verify-cli-changes-example-for-verify-skill-skill)
      3. [Verify server/API changes (example for Verify skill) [Skill]](#443-verify-serverapi-changes-example-for-verify-skill-skill)
      4. [Create verifier skills (Skill)](#444-create-verifier-skills-skill)
      5. [Verify plan reminder (System Reminder)](#445-verify-plan-reminder-system-reminder)
   5. [Software Engineering Task Execution](#45-software-engineering-task-execution)
      1. [Doing tasks (software engineering focus) [System Prompt]](#451-doing-tasks-software-engineering-focus-system-prompt)
      2. [Doing tasks (no compatibility hacks) [System Prompt]](#452-doing-tasks-no-compatibility-hacks-system-prompt)
      3. [Doing tasks (no unnecessary error handling) [System Prompt]](#453-doing-tasks-no-unnecessary-error-handling-system-prompt)
      4. [Doing tasks (help and feedback) [System Prompt]](#454-doing-tasks-help-and-feedback-system-prompt)
5. [API, SDK & Platform Integration](#5-api-sdk-platform-integration)
   1. [Claude API & SDK References](#51-claude-api-sdk-references)
      1. [Claude API SDK References by Language](#511-claude-api-sdk-references-by-language)
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
      2. [Tool Use & Streaming API References](#512-tool-use-streaming-api-references)
         1. [Tool use concepts (Data)](#5121-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#5122-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#5123-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#5124-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#5125-streaming-reference-—-typescript-data)
         6. [Message Batches API reference — Python (Data)](#5126-message-batches-api-reference-—-python-data)
         7. [Files API reference — Python (Data)](#5127-files-api-reference-—-python-data)
         8. [Files API reference — TypeScript (Data)](#5128-files-api-reference-—-typescript-data)
         9. [Prompt Caching — Design & Optimization (Data)](#5129-prompt-caching-—-design-optimization-data)
   2. [Managed Agents Platform](#52-managed-agents-platform)
      1. [Managed Agents API Reference](#521-managed-agents-api-reference)
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
      2. [Managed Agents Onboarding & Configuration](#522-managed-agents-onboarding-configuration)
         1. [Managed Agents onboarding flow (Agent Prompt)](#5221-managed-agents-onboarding-flow-agent-prompt)
         2. [Claude guide agent (Agent Prompt)](#5222-claude-guide-agent-agent-prompt)
   3. [Building LLM Applications Skills & Guides](#53-building-llm-applications-skills-guides)
      1. [Building LLM-powered applications with Claude (Skill)](#531-building-llm-powered-applications-with-claude-skill)
      2. [Build with Claude API (reference guide) [Skill]](#532-build-with-claude-api-reference-guide-skill)
      3. [Agent Design Patterns (Skill)](#533-agent-design-patterns-skill)
      4. [Model migration guide (Skill)](#534-model-migration-guide-skill)
      5. [Live documentation sources (Data)](#535-live-documentation-sources-data)
      6. [Anthropic CLI (Data)](#536-anthropic-cli-data)
   4. [GitHub Integration & CI/CD](#54-github-integration-cicd)
      1. [GitHub Actions workflow for @claude mentions (Data)](#541-github-actions-workflow-for-claude-mentions-data)
      2. [GitHub App installation PR description (Data)](#542-github-app-installation-pr-description-data)
6. [Automation, Tooling & Workflow Systems](#6-automation-tooling-workflow-systems)
   1. [Hooks System Configuration & Lifecycle](#61-hooks-system-configuration-lifecycle)
      1. [Hooks Configuration (System Prompt)](#611-hooks-configuration-system-prompt)
      2. [Hook additional context (System Reminder)](#612-hook-additional-context-system-reminder)
      3. [Hook blocking error (System Reminder)](#613-hook-blocking-error-system-reminder)
      4. [Hook stopped continuation (System Reminder)](#614-hook-stopped-continuation-system-reminder)
      5. [Hook stopped continuation prefix (System Reminder)](#615-hook-stopped-continuation-prefix-system-reminder)
      6. [Hook success (System Reminder)](#616-hook-success-system-reminder)
      7. [Stop hook blocking error (System Reminder)](#617-stop-hook-blocking-error-system-reminder)
      8. [Hook condition evaluator (stop) [Agent Prompt]](#618-hook-condition-evaluator-stop-agent-prompt)
      9. [Update Claude Code Config (Skill)](#619-update-claude-code-config-skill)
      10. [update-config (7-step verification flow) [Skill]](#6110-update-config-7-step-verification-flow-skill)
   2. [Browser Automation & Web Access](#62-browser-automation-web-access)
      1. [Browser Automation & Computer Use](#621-browser-automation-computer-use)
         1. [Computer (Tool Description)](#6211-computer-tool-description)
         2. [BrowserBatch (Tool Description)](#6212-browserbatch-tool-description)
         3. [Computer action (Tool Parameter)](#6213-computer-action-tool-parameter)
         4. [Claude in Chrome browser automation (System Prompt)](#6214-claude-in-chrome-browser-automation-system-prompt)
         5. [Chrome browser MCP tools (System Prompt)](#6215-chrome-browser-mcp-tools-system-prompt)
         6. [Computer Use MCP (Skill)](#6216-computer-use-mcp-skill)
      2. [Web Search & Content Retrieval](#622-web-search-content-retrieval)
         1. [WebSearch (Tool Description)](#6221-websearch-tool-description)
         2. [WebFetch (Tool Description)](#6222-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#6223-webfetch-summarizer-agent-prompt)
   3. [Git Worktree & Version Control](#63-git-worktree-version-control)
      1. [EnterWorktree (Tool Description)](#631-enterworktree-tool-description)
      2. [ExitWorktree (Tool Description)](#632-exitworktree-tool-description)
      3. [Session title and branch generation (Agent Prompt)](#633-session-title-and-branch-generation-agent-prompt)
      4. [Quick git commit (Agent Prompt)](#634-quick-git-commit-agent-prompt)
      5. [Quick PR creation (Agent Prompt)](#635-quick-pr-creation-agent-prompt)
      6. [Git status (System Prompt)](#636-git-status-system-prompt)
   4. [Skill & Workflow Management](#64-skill-workflow-management)
      1. [Skill Creation & Management](#641-skill-creation-management)
         1. [Skill (Tool Description)](#6411-skill-tool-description)
         2. [Skillify Current Session (System Prompt)](#6412-skillify-current-session-system-prompt)
         3. [Generate permission allowlist from transcripts (Skill)](#6413-generate-permission-allowlist-from-transcripts-skill)
      2. [Tool Discovery & Schema Resolution](#642-tool-discovery-schema-resolution)
         1. [ToolSearch (second part) [Tool Description]](#6421-toolsearch-second-part-tool-description)
   5. [Analytics, Scheduling & Monitoring](#65-analytics-scheduling-monitoring)
      1. [Usage Insights & Analytics](#651-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#6511-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#6512-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#6513-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#6514-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#6515-insights-suggestions-system-prompt)
         6. [/insights report output (Skill)](#6516-insights-report-output-skill)
      2. [Periodic Monitoring & Daily Briefing](#652-periodic-monitoring-daily-briefing)
         1. [/morning-checkin daily brief (Skill)](#6521-morning-checkin-daily-brief-skill)
         2. [/pre-meeting-checkin event brief (Skill)](#6522-pre-meeting-checkin-event-brief-skill)
         3. [/catch-up periodic heartbeat (Skill)](#6523-catch-up-periodic-heartbeat-skill)
   6. [Scripting Environments](#66-scripting-environments)
      1. [REPL & JavaScript Scripting](#661-repl-javascript-scripting)
         1. [REPL (Tool Description)](#6611-repl-tool-description)
         2. [REPL tool usage and scripting conventions (System Prompt)](#6612-repl-tool-usage-and-scripting-conventions-system-prompt)
      2. [Jupyter Notebook Tools](#662-jupyter-notebook-tools)
         1. [NotebookEdit (Tool Description)](#6621-notebookedit-tool-description)
7. [Agent Environment, UX & Configuration](#7-agent-environment-ux-configuration)
   1. [File System & Content Access](#71-file-system-content-access)
      1. [File System Operations](#711-file-system-operations)
         1. [ReadFile (Tool Description)](#7111-readfile-tool-description)
         2. [Write (Tool Description)](#7112-write-tool-description)
         3. [Write (read existing file first) [Tool Description]](#7113-write-read-existing-file-first-tool-description)
         4. [Edit (Tool Description)](#7114-edit-tool-description)
         5. [Grep (Tool Description)](#7115-grep-tool-description)
         6. [LSP (Tool Description)](#7116-lsp-tool-description)
      2. [File State & Reading Reminders](#712-file-state-reading-reminders)
         1. [File shorter than offset (System Reminder)](#7121-file-shorter-than-offset-system-reminder)
         2. [File truncated (System Reminder)](#7122-file-truncated-system-reminder)
         3. [File exists but empty (System Reminder)](#7123-file-exists-but-empty-system-reminder)
         4. [MCP resource no content (System Reminder)](#7124-mcp-resource-no-content-system-reminder)
         5. [MCP resource no displayable content (System Reminder)](#7125-mcp-resource-no-displayable-content-system-reminder)
   2. [IDE & Editor Integration](#72-ide-editor-integration)
      1. [Lines selected in IDE (System Reminder)](#721-lines-selected-in-ide-system-reminder)
      2. [File opened in IDE (System Reminder)](#722-file-opened-in-ide-system-reminder)
      3. [New diagnostics detected (System Reminder)](#723-new-diagnostics-detected-system-reminder)
      4. [File modified by user or linter (System Reminder)](#724-file-modified-by-user-or-linter-system-reminder)
   3. [Communication Style & Output Formatting](#73-communication-style-output-formatting)
      1. [Communication Style & Response Formatting](#731-communication-style-response-formatting)
         1. [Communication style (System Prompt)](#7311-communication-style-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#7312-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#7313-tone-and-style-concise-output-—-short-system-prompt)
         4. [How to use the SendUserMessage tool (System Prompt)](#7314-how-to-use-the-sendusermessage-tool-system-prompt)
         5. [Agent Summary Generation (System Prompt)](#7315-agent-summary-generation-system-prompt)
         6. [Agent thread notes (System Prompt)](#7316-agent-thread-notes-system-prompt)
         7. [Assistant voice and values template (Data)](#7317-assistant-voice-and-values-template-data)
      2. [Output Style & Thinking Configuration](#732-output-style-thinking-configuration)
         1. [Thinking frequency tuning (System Reminder)](#7321-thinking-frequency-tuning-system-reminder)
         2. [Output style active (System Reminder)](#7322-output-style-active-system-reminder)
         3. [Option previewer (System Prompt)](#7323-option-previewer-system-prompt)
   4. [Session & Environment Configuration](#74-session-environment-configuration)
      1. [Minimal Mode & Session Configuration](#741-minimal-mode-session-configuration)
         1. [Minimal mode (System Prompt)](#7411-minimal-mode-system-prompt)
         2. [Scratchpad directory (System Prompt)](#7412-scratchpad-directory-system-prompt)
         3. [WSL managed settings double opt-in (System Prompt)](#7413-wsl-managed-settings-double-opt-in-system-prompt)
      2. [Agent Status Line & Shell Configuration](#742-agent-status-line-shell-configuration)
         1. [Status line setup (Agent Prompt)](#7421-status-line-setup-agent-prompt)
      3. [Resource & Budget Monitoring](#743-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#7431-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#7432-usd-budget-system-reminder)
   5. [User Interaction & Feedback](#75-user-interaction-feedback)
      1. [Interactive Clarification & Visual Feedback](#751-interactive-clarification-visual-feedback)
         1. [AskUserQuestion (Tool Description)](#7511-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#7512-askuserquestion-preview-field-tool-description)
      2. [Prompt Suggestion & User Intent Prediction](#752-prompt-suggestion-user-intent-prediction)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#7521-prompt-suggestion-generator-v2-agent-prompt)
      3. [Learning & Teaching Modes](#753-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#7531-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7532-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#7533-request_teach_access-part-of-teach-mode-tool-description)
      4. [Notification & Push Messaging](#754-notification-push-messaging)
         1. [PushNotification (Tool Description)](#7541-pushnotification-tool-description)
      5. [Debugging & Diagnostics](#755-debugging-diagnostics)
         1. [Debugging (Skill)](#7551-debugging-skill)
         2. [/stuck slash command (Skill)](#7552-stuck-slash-command-skill)

---

## 1. Bash & Shell Execution

Rules, patterns, and safety policies governing bash command execution, including sandboxing, syntax conventions, tool delegation, and git operations from the shell.

### 1.1 Bash Sandbox Security & Policy

Enforces mandatory sandboxing for all bash commands with strict access controls, automatic failure detection, and user-transparent recovery. Sandbox restrictions are identified through specific error patterns (access denied, network failures, permission errors) and trigger immediate retry with sandbox disabled only when evidence is clear, subject to user consent.

#### 1.1.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

If a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

#### 1.1.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always default to running commands within the sandbox; only bypass when user requests or sandbox restriction evidence appears.

#### 1.1.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied to specific paths outside allowed directories indicates sandbox restriction.

#### 1.1.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that sandbox restrictions caused a failure.

#### 1.1.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox network restrictions.

#### 1.1.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors for file or network operations signal sandbox restrictions.

#### 1.1.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions.

#### 1.1.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

#### 1.1.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Identifies when a command failure shows evidence of sandbox restrictions versus other failure causes.

#### 1.1.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.1.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.1.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

#### 1.1.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; default to sandbox for future commands even after running one with dangerouslyDisableSandbox.

#### 1.1.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing how to respond when sandbox-caused failures are detected.

#### 1.1.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true when sandbox failure is detected, without asking the user.

#### 1.1.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Always use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly.

#### 1.1.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will prompt the user for permission.

### 1.2 Command Syntax & Execution Patterns

Chaining strategies, quoting rules, working directory persistence, and parallel execution patterns for bash commands.

#### 1.2.1 Bash Command Syntax & Execution Patterns

Defines command composition and execution strategies: sequential chaining with && for dependent commands, semicolons for independent sequences, parallel tool calls for concurrent operations, and proper quoting for file paths. Working directory persists across commands but shell state resets; absolute paths preserve context without relying on cd.

##### 1.2.1.1 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate bash commands.

##### 1.2.1.2 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Executes a given bash command and returns its output.

##### 1.2.1.3 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent bash commands as parallel tool calls in a single message.

##### 1.2.1.4 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier command failures are acceptable.

##### 1.2.1.5 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call when they must run sequentially and earlier failures should stop execution.

##### 1.2.1.6 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Bash commands support optional timeout configuration in milliseconds, with configurable maximum and default limits.

##### 1.2.1.7 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

##### 1.2.1.8 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between bash commands, but shell state does not; environment initializes from user profile.

##### 1.2.1.9 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to use absolute paths and avoid cd commands to maintain the current working directory, except when explicitly requested by the user.

##### 1.2.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, verify the parent directory exists and is correct using ls.

#### 1.2.2 Bash Sleep & Polling Behavior

Minimizes blocking delays by eliminating unnecessary sleep between immediately-executable commands and prohibiting polling loops for background tasks. External process monitoring uses check commands rather than sleep-based polling, and retry logic diagnoses root causes instead of looping on failures.

##### 1.2.2.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep duration short to avoid blocking the user.

##### 1.2.2.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

##### 1.2.2.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; execute them sequentially without delay.

##### 1.2.2.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

When polling external processes, use check commands like gh run view instead of sleeping first.

##### 1.2.2.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; requires diagnosing root causes instead.

### 1.3 Bash Alternatives & Preferred Tool Selection

Delegates file operations, content searching, and text output to specialized tools (Read, Write, Glob, Grep, Edit) rather than bash equivalents, improving transparency and user experience. Direct text output replaces echo/printf for communication.

#### 1.3.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for find, grep, cat, and similar read-only searching commands; use dedicated tools instead.

#### 1.3.2 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly instead of using echo or printf for communication.

#### 1.3.3 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs Claude to use the Grep tool instead of grep or rg for content searching.

#### 1.3.4 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool instead of sed or awk for file editing.

#### 1.3.5 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs Claude to use the Glob tool instead of find or ls for file searching.

#### 1.3.6 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool instead of cat, head, or tail for reading files.

#### 1.3.7 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs Claude to use the Write tool instead of echo or cat for writing files.

#### 1.3.8 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and transparency than Bash equivalents for file and content operations.

### 1.4 Bash Git Operations

Establishes safe git workflows that preserve hooks and signing, avoid destructive operations without justification, and prefer new commits over amendments. Comprehensive PR creation includes parallel command execution, hook investigation, and structured test plans.

#### 1.4.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives to destructive git operations like reset --hard, push --force, and checkout before using them.

#### 1.4.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Detailed instructions for creating git commits and GitHub pull requests, including safety protocols, parallel command execution, commit message drafting, hook handling, and PR description formatting with test plans.

#### 1.4.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude to never skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues if hooks fail.

#### 1.4.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to prefer creating new commits over amending existing commits.

### 1.5 Platform-Specific Shell Environments

Windows PowerShell compatibility constraints, WSL integration, and command documentation conventions.

#### 1.5.1 PowerShell Tool & Windows Compatibility

Windows command execution with PowerShell 5.1 compatibility constraints and optimization patterns. Covers syntax limitations, error handling quirks, and strategies for avoiding polling-based delays through background job notifications.

##### 1.5.1.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Execute PowerShell commands with optional timeout. Prefer specialized tools for file operations; use Verb-Noun cmdlets, backtick escaping, and here-strings for multiline input. Avoid interactive commands and destructive operations without confirmation.

##### 1.5.1.2 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents PowerShell 5.1 compatibility constraints including missing pipeline operators, ternary operators, stderr redirection quirks, file encoding defaults, and JSON parsing differences.

##### 1.5.1.3 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Guidelines for avoiding unnecessary sleep commands in PowerShell by running commands immediately, using background job notifications instead of polling, and diagnosing root causes rather than retrying in loops.

#### 1.5.2 Bash Command Documentation

Generates clear, concise descriptions of bash commands using active voice, scaling detail to command complexity and providing context for piped or flag-heavy operations.

##### 1.5.2.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy operations.

---

## 2. Multi-Agent Orchestration

Frameworks for spawning, coordinating, and managing teams of agents—covering delegation patterns, background job tracking, scheduling, and swarm coordination.

### 2.1 Multi-Agent Team Coordination

Framework for creating and managing teams of coordinated agents with shared task lists and asynchronous message passing. Teammates discover work from shared task lists, communicate via named message delivery without manual inbox checks, and coordinate through a team lead. Automatic idle state management and graceful shutdown protocols enable scalable swarm orchestration.

#### 2.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

TeammateTool creates and manages agent teams for coordinated multi-agent work, handling team creation, task list coordination, teammate spawning, and message delivery. Teams automatically go idle between turns and receive messages without manual inbox checks; teammates should be referred to by name, never UUID.

#### 2.1.2 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

SendMessage enables inter-agent communication in teams by sending messages to named teammates. Plain text output is invisible to other agents; all communication must use this tool, which automatically delivers incoming messages without requiring inbox checks.

#### 2.1.3 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

TeamDelete removes team and task directories after swarm work completes, cleaning up `~/.claude/teams/` and `~/.claude/tasks/` directories. It requires all active teammates to be gracefully terminated first.

#### 2.1.4 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity as a named teammate within a team, with access to team config and task lists, and instructs communication with teammates and team lead by name rather than UUID.

#### 2.1.5 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully and clean up before returning a final response in non-interactive mode.

#### 2.1.6 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Send a message the user will read, supporting markdown and file attachments. Use status field to indicate intent: 'normal' for replies, 'proactive' for initiated updates.

### 2.2 Subagent Spawning & Delegation

Mechanisms for spawning specialized subagents to parallelize work, including prompt-writing patterns, fork execution models, and verification practices. Covers context inheritance, async coordination, and preventing fabricated results during mid-flight queries.

#### 2.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance for spawning and managing subagents, including parallel execution, background tasks, resumption via messaging, worktree isolation, and verification practices to ensure agents complete intended work.

#### 2.2.2 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for open-ended work, prohibits reading fork output mid-flight or fabricating results, and requires fork prompts to be directives rather than background explanations.

#### 2.2.3 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, showing how to fork specialized agents, handle waiting states, and report results without fabricating answers during mid-wait user queries.

#### 2.2.4 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates how to write self-contained, well-structured prompts when delegating to subagents, including goal statements, context briefing, and response format specifications for independent task execution.

#### 2.2.5 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Guidelines for writing effective subagent prompts that brief fresh agents with context, explain goals and prior findings, and avoid delegating synthesis or understanding to the agent.

#### 2.2.6 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using subagents effectively for parallelizing independent queries and protecting context, while avoiding excessive delegation and duplicating work already assigned to subagents.

#### 2.2.7 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

System prompt for forked worker sub-agents that execute a single directive from the parent agent and report back concisely without spawning further sub-agents.

#### 2.2.8 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step post-implementation workflow: simplify changes, run unit tests, execute e2e tests, commit and push, then report PR URL for coordinator tracking.

### 2.3 Background Agent State & Job Management

Tracking and classification of long-running background agents through state machines (working/blocked/done/failed), progress narration, and streaming event monitoring. Includes job isolation, autonomous loop stewardship, and result extraction for teammate visibility.

#### 2.3.1 [Background agent state classifier (Agent Prompt)](system-prompts/agent-prompt-background-agent-state-classifier.md)

Classifies background agent transcript tails into working, blocked, done, or failed states with JSON output including detail, tempo, and user-actionable needs.

#### 2.3.2 [Background agent state classification examples (Data)](system-prompts/data-background-agent-state-classification-examples.md)

Example assistant-message tails and JSON outputs for classifying background agent state, tempo, needs, and results with working/blocked/done/failed states.

#### 2.3.3 [Background job behavior (System Prompt)](system-prompts/system-prompt-background-job-behavior.md)

Instructs background job agents to narrate progress, restate results in message text for classifier extraction, and signal done/blocked/failed status with one-line outcome headlines for teammate visibility.

#### 2.3.4 [Background session instructions (System Prompt)](system-prompts/system-prompt-background-session-instructions.md)

Instructs background job sessions to use job-specific temporary directory instead of /tmp to avoid file clobbering between parallel jobs, and follow worktree isolation guidance.

#### 2.3.5 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Describes streaming stdout events from long-running scripts as chat notifications, with detailed guidance on script quality, output filtering, coverage of terminal states, and avoiding unbounded commands for single notifications.

#### 2.3.6 [Autonomous loop check (System Prompt)](system-prompts/system-prompt-autonomous-loop-check.md)

Guides timer-based autonomous invocations to continue established work—finishing user-started tasks, maintaining PRs, addressing review comments, and fixing CI failures—while avoiding invention of new work. Emphasizes stewardship over initiation and reversibility of actions.

### 2.4 Scheduling & Loop Execution

Cloud and local scheduling infrastructure for recurring cron jobs, dynamic self-paced loops, and one-shot executions. Covers interval parsing, prompt cache optimization, event-driven wake signals, and proactive scheduling offers for natural follow-up work.

#### 2.4.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron-based jobs using standard 5-field cron syntax in local timezone. Avoid :00 and :30 minute marks when possible to reduce fleet load; recurring tasks auto-expire after a configurable number of days.

#### 2.4.2 [ScheduleWakeup (/loop dynamic mode) [Tool Description]](system-prompts/tool-description-schedulewakeup-loop-dynamic-mode.md)

Schedule the next iteration in /loop dynamic (self-paced) mode. Pass the /loop prompt back each turn; use the autonomous-loop-dynamic sentinel for autonomous loops without user prompts.

#### 2.4.3 [Snooze (delay and reason guidance) [Tool Description]](system-prompts/tool-description-snooze-delay-and-reason-guidance.md)

Snooze schedules resumption of work in dynamic loop mode by selecting appropriate delay intervals relative to the 5-minute prompt cache TTL. Delays under 270 seconds preserve cache warmth for active polling, while longer delays amortize cache misses for idle waiting periods.

#### 2.4.4 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into an interval and prompt, converts the interval to a cron expression, schedules a recurring task, and immediately executes it without waiting for the first cron fire.

#### 2.4.5 [/loop slash command (dynamic mode) [Skill]](system-prompts/skill-loop-slash-command-dynamic-mode.md)

Parses user input into an interval and prompt for scheduling recurring or dynamically self-paced loop executions with support for leading tokens and trailing time expressions.

#### 2.4.6 [/loop self-pacing mode (Skill)](system-prompts/skill-loop-self-pacing-mode.md)

Instructs Claude how to self-pace a recurring loop by arming event monitors as primary wake signals and scheduling fallback heartbeat delays between iterations.

#### 2.4.7 [/loop cloud-first scheduling offer (Skill)](system-prompts/skill-loop-cloud-first-scheduling-offer.md)

Decision tree for offering cloud-based scheduling before falling back to local session loops, with conditions for when to present the cloud-first option.

#### 2.4.8 [Dynamic pacing loop execution (Skill)](system-prompts/skill-dynamic-pacing-loop-execution.md)

Step-by-step instructions for executing a dynamic pacing loop that runs tasks, arms persistent event monitors as primary wake signals, schedules fallback heartbeat delays, and handles task notifications.

#### 2.4.9 [Schedule recurring cron and execute immediately (compact) [Skill]](system-prompts/skill-schedule-recurring-cron-and-execute-immediately-compact.md)

Creates a recurring cron job, confirms the schedule with the user, and immediately executes the parsed prompt without waiting for the first cron fire.

#### 2.4.10 [Schedule recurring cron and run immediately (Skill)](system-prompts/skill-schedule-recurring-cron-and-run-immediately.md)

Converts an interval to a cron expression, schedules a recurring task, confirms to the user, and immediately executes the task without waiting for the first cron fire.

#### 2.4.11 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing schedules, creating a cron task, confirming details, and running an immediate consolidation.

#### 2.4.12 [Loop wakeup not scheduled (System Reminder)](system-prompts/system-reminder-loop-wakeup-not-scheduled.md)

Instructs Claude on handling /loop dynamic mode wakeups that were not scheduled, distinguishing between cases where the prompt field was set versus unset and specifying when to re-issue with the prompt field.

#### 2.4.13 [Proactive schedule offer after follow-up work (System Prompt)](system-prompts/system-prompt-proactive-schedule-offer-after-follow-up-work.md)

Instructs Claude to offer /schedule follow-ups only when completed work has strong natural future actions with 85%+ user acceptance odds, covering feature flags, soak windows, temporary workarounds, and recurring tasks.

#### 2.4.14 [Schedule proactive offer guidance (Tool Description)](system-prompts/tool-description-schedule-proactive-offer-guidance.md)

Schedule recurring or one-time remote agents for future work. Proactively offer scheduling after completing work with natural follow-ups like feature rollouts, new monitors, or cleanup tasks.

#### 2.4.15 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on recurring cron schedules or one-time runs in Anthropic's cloud infrastructure, with MCP connector attachment, environment selection, and timezone conversion.

### 2.5 Autonomous & Auto Mode Execution

Frameworks governing autonomous task execution with graduated safety constraints. These systems enable continuous operation and immediate implementation while requiring user confirmation for destructive or shared-system operations, emphasizing reversibility and root-cause diagnosis.

#### 2.5.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate implementation, minimal interruptions, and preference for action over planning. Prohibits destructive actions on shared systems and data exfiltration without explicit authorization.

#### 2.5.2 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a risk-aware framework for action execution, requiring user confirmation for destructive, hard-to-reverse, or shared-system operations while permitting local reversible actions freely. Emphasizes diagnosing root causes rather than bypassing safety checks.

#### 2.5.3 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Permits Claude to attempt ambitious tasks and defers to user judgment on scope appropriateness.

### 2.6 Batch Operations & Parallel Codebase Changes

Orchestration of large-scale, parallelizable codebase modifications by decomposing work into independent units and spawning background worker agents with progress tracking.

#### 2.6.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing into 5–30 independent units, determining e2e test recipes, and spawning background worker agents with progress tracking.

### 2.7 Harness & Core Agent Infrastructure

Foundational system configuration for interactive agent behavior, including execution permissions, tool parallelization strategies, context management, and agent delegation patterns. Defines how Claude operates within the harness environment and responds to permission constraints.

#### 2.7.1 [Harness instructions (System Prompt)](system-prompts/system-prompt-harness-instructions.md)

Defines core interactive-agent identity and harness behavior including markdown terminal output, permission modes, hook interception, context compaction, tool parallelization, and clickable code references.

#### 2.7.2 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs maximizing parallel tool calls for independent operations while maintaining sequential execution for dependent operations to improve efficiency.

#### 2.7.3 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable workarounds when tool execution is denied, but not to bypass restrictions maliciously, and to stop and explain to the user if the capability is essential.

#### 2.7.4 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent type and instructs Claude to invoke it with required context.

#### 2.7.5 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Configures a lightweight side-question agent spawned to answer one question without tools, sharing context but running independently from the main agent, with no follow-up turns.

---

## 3. Memory, Sessions & Context Management

Persistent memory systems, session organization, conversation summarization, and task tracking that maintain continuity across sessions and context boundaries.

### 3.1 Persistent Memory Systems

File-based memory with typed categories, deduplication, staleness verification, and nightly consolidation of session logs.

#### 3.1.1 Memory Management & Persistence

File-based persistent memory system with typed categories (user, feedback, project, reference), deduplication rules, and staleness verification. Enables context continuity across sessions through selective memory attachment and fact extraction.

##### 3.1.1.1 [Memory instructions (System Prompt)](system-prompts/system-prompt-memory-instructions.md)

Defines persistent file-based memory with frontmatter format, four types (user, feedback, project, reference), deduplication rules, and staleness verification to avoid saving redundant or already-tracked information.

##### 3.1.1.2 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs verification of memory records against current file state before use, deleting stale memories that conflict with observed reality and saving fresh ones if needed.

##### 3.1.1.3 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about role, goals, knowledge, and preferences across sessions, enabling tailored collaboration without negative judgments.

##### 3.1.1.4 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes feedback memory as guidance on work approaches from both successes and failures, requiring verification against team memories to avoid contradictions.

##### 3.1.1.5 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Defines feedback memory as guidance on work approaches capturing both successes and failures, requiring checks for contradictions with team feedback and explicit notation of overrides.

##### 3.1.1.6 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as containing role, goals, responsibilities, and knowledge to tailor behavior and collaboration style, while avoiding negative judgements and focusing on work-relevant information.

##### 3.1.1.7 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by its path with type description.

##### 3.1.1.8 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

##### 3.1.1.9 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and extracts up to 7 relevant facts per query with cited filenames, supporting context continuity and user preference application.

##### 3.1.1.10 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options based on user query, avoiding false keyword matches and being conservative with profile/project memories.

##### 3.1.1.11 [User profile memory template (Data)](system-prompts/data-user-profile-memory-template.md)

Template for user profile memory covering personal details, work context, schedule, and communication preferences.

##### 3.1.1.12 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary files documenting current state, task specification, files, workflow, errors, and key results.

#### 3.1.2 Dream Memory Consolidation & Pruning

Nightly housekeeping that consolidates session logs into persistent memory topics, merges updates, and prunes stale or duplicate entries while preserving team-shared knowledge. Reconciles stored memories against current procedures and maintains institutional learning.

##### 3.1.2.1 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing files, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to stay under size limits.

##### 3.1.2.2 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs memory pruning by deleting stale or invalidated memories and collapsing duplicates while preserving team-shared memories and maintaining immutable file practices.

##### 3.1.2.3 [/dream memory consolidation (Skill)](system-prompts/skill-dream-memory-consolidation.md)

Nightly housekeeping job that consolidates recent logs and transcripts into persistent memory topics, learnings, and a pruned MEMORY.md index to maintain context across sessions.

##### 3.1.2.4 [Dream CLAUDE.md memory reconciliation (System Prompt)](system-prompts/system-prompt-dream-claudemd-memory-reconciliation.md)

Guides memory consolidation during dream sessions to reconcile stored memories against CLAUDE.md instructions, deleting stale memories when procedures diverge and flagging potential CLAUDE.md drift for user review.

##### 3.1.2.5 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Establishes conservative rules for managing shared team memories during dream consolidation, including deduplication, cautious pruning to avoid deleting teammate dependencies, and preventing accidental promotion of personal memories to team scope.

##### 3.1.2.6 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Instructs agents to update memory with domain-specific discoveries across conversations, building institutional knowledge. Provides templates for code reviewers, test runners, architects, and documentation writers to record patterns, conventions, and architectural insights.

### 3.2 Conversation & Context Compaction

Distilling conversation history into compact resumable formats, preserving task state and prior discoveries across session boundaries.

#### 3.2.1 Conversation Summarization & Context Compaction

Structured approaches to distilling conversation history into compact, resumable formats across session boundaries. These mechanisms preserve task state, code context, and prior discoveries while enabling efficient continuation when context windows reset or sessions transfer between machines.

##### 3.2.1.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections covering intent, concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps with full code snippets.

##### 3.2.1.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions into nine sections covering intent, concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps.

##### 3.2.1.3 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Instructs Claude to create detailed conversation summaries for partial compaction using a structured analysis process and nine-section format, ensuring continuity when newer messages follow the summary in a continuing session.

##### 3.2.1.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries for context window resumption, including task overview, current state, discoveries, next steps, and context to preserve for efficient task continuation.

##### 3.2.1.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before conversation summarization but is too large to include, directing Claude to use the Read tool if needed.

##### 3.2.1.6 [Previously invoked skills (System Reminder)](system-prompts/system-reminder-previously-invoked-skills.md)

Restores context from skills invoked before conversation compaction, warning Claude not to re-execute setup actions or treat prior inputs as current instructions.

##### 3.2.1.7 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

#### 3.2.2 Session Naming & Management

Tools for organizing and retrieving Claude Code conversations through automated naming, search, and memory tracking. These capabilities enable users to quickly identify past sessions by goal, search transcripts for relevant work, and maintain persistent notes across conversation instances.

##### 3.2.2.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise 3–7 word sentence-case titles capturing the main goal of a coding session for recognition in session lists.

##### 3.2.2.2 [/rename auto-generate session name (Agent Prompt)](system-prompts/agent-prompt-rename-auto-generate-session-name.md)

Auto-generates short 2–4 word kebab-case session names from conversation context, returning JSON with a name field.

##### 3.2.2.3 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent prompt for searching past Claude Code conversation sessions by scanning .jsonl transcript files and returning matching session IDs ordered by relevance.

##### 3.2.2.4 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files with conversation insights while preserving file structure, section headers, and italic descriptions.

### 3.3 Task & Progress Tracking

Structured task management for breaking down complex work into trackable steps with state transitions (pending, in-progress, completed). Tasks enable progress visibility, work coordination across sessions, and teammate discovery of available work. Immediate completion marking and single active task constraints maintain clarity on current focus.

#### 3.3.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

TodoWrite creates and manages structured task lists for complex multi-step work, tracking progress through pending, in_progress, and completed states. Tasks require both imperative and present-continuous forms, with exactly one task in progress at a time and immediate completion marking.

#### 3.3.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

TaskCreate organizes complex multi-step work into structured task lists with imperative subjects and descriptions. Tasks are created in pending status and help track progress, demonstrate thoroughness, and coordinate work across sessions or teams.

#### 3.3.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

TaskList enables teammates to discover available work by finding pending, unowned tasks with no blockers. Teammates should prefer lowest-ID tasks first, claim work via TaskUpdate, and check for newly unblocked tasks after completing assignments.

#### 3.3.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Reminds Claude to use task tracking tools to create and update tasks when working on progress-tracked work, without mentioning the reminder to the user.

#### 3.3.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Reminds Claude to use the TodoWrite tool for tracking task progress when relevant, without disclosing the reminder to the user.

#### 3.3.6 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite to break down work, track progress, and mark tasks complete immediately upon finishing rather than batching completions.

---

## 4. Planning, Code Review & Quality Assurance

Structured planning workflows, codebase exploration, code review, verification testing, and software engineering task execution practices.

### 4.1 Planning & Design Workflows

Structured planning modes that guide Claude through codebase exploration, architectural design, and implementation strategy before code changes. Supports iterative pair-planning, multi-agent parallel exploration, and subagent-based analysis with explicit user approval gates. Plans can be revisited across sessions and refined incrementally until ready for implementation.

#### 4.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Enter plan mode to explore the codebase and design implementation approaches for user approval before writing code. Use for non-trivial tasks with multiple valid approaches, architectural decisions, or multi-file changes.

#### 4.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning and request user approval. Use only for implementation tasks requiring code changes, not for research or exploration; do not use to ask if the plan is acceptable.

#### 4.1.3 [Plan mode approval tool enforcement (System Reminder)](system-prompts/system-reminder-plan-mode-approval-tool-enforcement.md)

Requires plan mode turns to end with either AskUserQuestion for clarification or ExitPlanMode for approval, forbidding approval requests through other means.

#### 4.1.4 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Defines a five-phase planning workflow with parallel exploration and multi-agent planning, guiding Claude through understanding, design, review, implementation, and approval phases with specific agent types and parallelization strategies.

#### 4.1.5 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Describes an iterative pair-planning workflow where Claude explores code, updates a plan file incrementally, and asks clarifying questions in a loop until the plan is complete and ready for approval.

#### 4.1.6 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instructions for subagents that forbid edits and non-readonly operations while allowing plan file creation and clarifying questions.

#### 4.1.7 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, instructing it to read the existing plan, evaluate relevance to the new request, and decide whether to continue or overwrite.

#### 4.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

#### 4.1.9 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and that edits, tools, and actions are now available.

#### 4.1.10 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Instructs Claude to create detailed implementation plans using parallel subagents for code exploration, architecture analysis, risk identification, and critique before implementation, with specific handling for approval, rejection, and error states.

#### 4.1.11 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions where Claude explores the codebase, produces diagram-rich implementation plans via ExitPlanMode, and implements approved plans with pull requests, handling approval, rejection, and teleportation back to the user's terminal.

#### 4.1.12 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Enables remote planning sessions where Claude explores code with Glob/Grep/Read, produces implementation plans via ExitPlanMode, and handles plan approval, rejection with feedback, or teleportation back to the user's local terminal.

#### 4.1.13 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases, designs implementation plans, identifies critical files, and considers architectural trade-offs without modifying files.

### 4.2 Codebase Exploration & Project Setup

Agents for navigating codebases, generating documentation, onboarding new developers, and initializing project configurations.

#### 4.2.1 Codebase Exploration & Analysis Agents

Specialized agents for navigating and analyzing codebases through file search, pattern matching, and documentation generation. Supports rapid exploration, multi-step research tasks, and creation of project context files for future Claude interactions.

##### 4.2.1.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist that rapidly navigates codebases using glob patterns, regex search, and file reading, adapting thoroughness based on caller specification.

##### 4.2.1.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases while reporting findings concisely.

##### 4.2.1.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files capturing common commands, high-level architecture, and project-specific conventions for future Claude Code instances.

#### 4.2.2 Project Initialization & Onboarding

Structured workflows for bringing new developers and AI agents into a codebase or team. These systems guide setup of configuration files, documentation, and team practices through codebase analysis, usage data classification, and iterative refinement, while also architecting custom AI agents with tailored personas and system prompts.

##### 4.2.2.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md, skills, and hooks in a repository through codebase exploration, user interviews, iterative proposals, and artifact generation with phase-by-phase guidance.

##### 4.2.2.2 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides by analyzing usage data, classifying session types into work categories, and iteratively refining ONBOARDING.md with team name, tips, and starter tasks.

##### 4.2.2.3 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding new teammates to a team's Claude Code setup, walking them through usage stats, setup checklists, MCP servers, skills, and team tips in a warm conversational style.

##### 4.2.2.4 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, optimizing for performance, and generating JSON specifications with identifiers and usage examples.

### 4.3 Code Review & Security Analysis

Pull request evaluation, adversarial testing, vulnerability assessment, and threat modeling for code changes and agent actions.

#### 4.3.1 Code Review & Quality Analysis

Comprehensive code evaluation spanning pull request analysis, adversarial testing, and rule validation. These agents assess correctness, performance, security, and maintainability while identifying refactoring opportunities and verifying implementations through independent testing and linting.

##### 4.3.1.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Instructs Claude to review GitHub pull requests by fetching PR details and diffs, then analyzing code quality, style, correctness, conventions, performance, test coverage, and security.

##### 4.3.1.2 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial testing subagent that independently verifies implementations by running builds, tests, linters, and adversarial probes (boundary values, concurrency, idempotency), issuing PASS/FAIL/PARTIAL verdicts.

##### 4.3.1.3 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for Claude Code across allow, soft_deny, and environment categories, evaluating clarity, completeness, conflicts, and actionability.

##### 4.3.1.4 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel review agents to identify code reuse opportunities, quality issues, and efficiency problems, then fixes findings directly.

##### 4.3.1.5 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructs Claude to call the advisor tool before substantive work to get guidance from a stronger reviewer model, with the entire conversation history forwarded. Emphasizes calling advisor before writing, committing to interpretations, or declaring completion, and treating advice seriously while surfacing conflicts between evidence and recommendations.

#### 4.3.2 Security Review & Threat Analysis

Multi-layer threat detection and vulnerability assessment covering autonomous agent actions, code changes, and command execution. These mechanisms classify risks from prompt injection and scope creep, identify exploitable patterns in input handling and authentication, and enforce allowlists for safe operations.

##### 4.3.2.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security classifier that evaluates autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with user intent as the final signal.

##### 4.3.2.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules covering git, cloud, credentials, and infrastructure operations, and allow exceptions for safe patterns like local operations and declared dependencies.

##### 4.3.2.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt analyzing code changes for exploitable vulnerabilities in input validation, authentication, cryptography, injection, and data exposure with high-confidence filtering.

##### 4.3.2.4 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands for safety classification, returning the prefix or 'command_injection_detected' for allowlisting decisions.

##### 4.3.2.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing destructive techniques, DoS attacks, and malicious detection evasion.

##### 4.3.2.6 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities like injection, XSS, and SQL injection, prioritizing safe and secure code.

##### 4.3.2.7 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Permits Claude to analyze malware behavior and write reports but forbids improving or augmenting malicious code.

### 4.4 Verification & Testing Skills

Runtime verification techniques that validate code changes by executing applications at their operational boundaries—CLI, API, GUI, or library interfaces—and observing actual behavior against expected outcomes. Encompasses both manual verification workflows and automated skill generation for continuous code validation.

#### 4.4.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Comprehensive verification skill instructing Claude to validate code changes by running the app at its runtime surface (CLI, API, GUI, library boundary), observing behavior, and probing beyond the happy path. Emphasizes runtime observation over testing or code review, with structured reporting including verdict, method, steps, and findings.

#### 4.4.2 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Demonstrates verification workflow for CLI changes by building, running with test arguments, and comparing output to expected behavior. Shows how to test new flags, validate output format, and check for regressions.

#### 4.4.3 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Demonstrates verification workflow for server and API changes using curl to test routes, with server lifecycle management and readiness polling. Shows how to validate response headers, status codes, and behavior changes like rate-limit headers.

#### 4.4.4 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills for automated code verification, including project auto-detection, tool setup (Playwright, Tmux, HTTP), user interviews, and skill generation with authentication handling.

#### 4.4.5 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to call a verification tool directly after completing plan implementation to confirm all items were executed correctly.

### 4.5 Software Engineering Task Execution

Directs Claude to treat user requests as code modification tasks, applying changes directly to the codebase while enforcing specific practices: removing unused code entirely rather than preserving compatibility, validating only at system boundaries, and minimizing unnecessary error handling.

#### 4.5.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Instructs Claude to interpret user requests in a software engineering context, treating generic instructions as code-related tasks and applying changes directly to the codebase rather than providing abstract answers.

#### 4.5.2 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims, renamed variables, or re-exports.

#### 4.5.3 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios, trust internal guarantees, and validate only at system boundaries.

#### 4.5.4 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels.

---

## 5. API, SDK & Platform Integration

Reference documentation, SDK guides, and onboarding for Claude's APIs, the Managed Agents platform, and GitHub CI/CD integration.

### 5.1 Claude API & SDK References

Language-specific SDK documentation covering client initialization, streaming, tool use, vision, and error handling across Python, TypeScript, Go, Java, and more.

#### 5.1.1 Claude API SDK References by Language

Language-specific SDK documentation and HTTP API reference for Claude, covering client initialization, streaming, tool use, vision, prompt caching, extended thinking, and error handling across Python, TypeScript, Go, Java, Ruby, PHP, C#, and cURL.

##### 5.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client configuration, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization.

##### 5.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization.

##### 5.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, streaming, tool use with BetaToolRunner, thinking, prompt caching, and context editing for managing long conversations.

##### 5.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, streaming, thinking, tool use with annotated classes and BetaToolRunner, effort parameters, prompt caching, and structured outputs.

##### 5.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including client initialization, streaming, tool use via beta tool runner with annotated classes, and prompt caching.

##### 5.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference with client initialization, streaming, tool use via BetaRunnableTool, extended thinking, prompt caching, and structured outputs using StructuredOutputModel.

##### 5.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use, effort parameters, prompt caching, structured output, and server-side tools.

##### 5.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL with examples for basic requests, streaming, tool use, prompt caching, and extended thinking.

##### 5.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact IDs, context windows, max output tokens, and programmatic model discovery via the Models API.

##### 5.1.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400, 401, 403, 404, 429, 500, 529) with common causes, fixes, and SDK exception handling patterns.

#### 5.1.2 Tool Use & Streaming API References

SDK references and design patterns for implementing tool use, real-time streaming, batch processing, and file handling across Python and TypeScript. Covers agentic loops, structured outputs, async event handling, and prompt caching optimization for cost reduction.

##### 5.1.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice, tool runner vs manual loops, server-side tools, and structured outputs.

##### 5.1.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference covering tool runner, manual agentic loops, code execution, memory tool, and structured outputs.

##### 5.1.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner, manual agentic loops, code execution, memory tool, and structured outputs.

##### 5.1.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference including sync/async streaming, handling different content types, tool use, and error handling.

##### 5.1.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, content type handling, tool use, and event types.

##### 5.1.2.6 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference covering batch creation, status polling, and result retrieval with 50% cost reduction.

##### 5.1.2.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading, managing, and using files in messages with support for PDFs, images, and documents with optional citations.

##### 5.1.2.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript reference for the Files API including file upload, listing, deletion, and usage in messages with a 500 MB per-file limit and 100 GB per-organization storage.

##### 5.1.2.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Guide on designing prompt-building code for effective caching, covering placement patterns, silent invalidators, and architectural decisions.

### 5.2 Managed Agents Platform

Architecture, lifecycle management, event streaming, resource provisioning, and onboarding for the Managed Agents platform.

#### 5.2.1 Managed Agents API Reference

Complete API documentation for the Managed Agents platform covering architecture, lifecycle management, event streaming, resource provisioning, memory persistence, and client integration patterns across multiple languages and protocols.

##### 5.2.1.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Comprehensive overview of Managed Agents API architecture, the mandatory agent-then-session flow, beta headers, documentation guide, and common pitfalls.

##### 5.2.1.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Reference documentation covering Managed Agents architecture (Agents, Sessions, Environments, Containers), lifecycle, versioning, and the mandatory agent-first flow.

##### 5.2.1.3 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive endpoint reference for Managed Agents API covering agents, sessions, events, environments, vaults, memory stores, files, and skills with SDK method signatures.

##### 5.2.1.4 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference for Managed Agents environments, file resources, GitHub repository mounting, session outputs, and the Files API with SDK examples.

##### 5.2.1.5 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Reference guide for sending and receiving events on Managed Agent sessions, including streaming, polling, reconnection, message queuing, and interrupts.

##### 5.2.1.6 [Managed Agents memory stores reference (Data)](system-prompts/data-managed-agents-memory-stores-reference.md)

Reference documentation for Managed Agents memory stores covering creation, session attachment, FUSE mounts, memory CRUD, concurrency, versions, and redaction.

##### 5.2.1.7 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference documentation for Managed Agents tool types (agent toolset, MCP, custom), permission policies, vault credential management, and skills API.

##### 5.2.1.8 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Reference guide for common client-side patterns when driving Managed Agent sessions, including stream reconnection, tool confirmations, interrupts, and custom tool handling.

##### 5.2.1.9 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Python SDK reference for Managed Agents covering agent creation, sessions, streaming, custom tools, file uploads, and MCP server integration.

##### 5.2.1.10 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

TypeScript SDK reference for Managed Agents covering agent creation, sessions, streaming, custom tools, file uploads, and MCP server integration.

##### 5.2.1.11 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

cURL and raw HTTP request examples for Managed Agents API covering environment, agent, and session lifecycle operations.

#### 5.2.2 Managed Agents Onboarding & Configuration

Interactive setup workflows and guidance systems for configuring Managed Agents, including tool selection, environment configuration, and SDK code generation. Provides documentation-driven assistance for understanding Claude's agent capabilities.

##### 5.2.2.1 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview script for configuring Managed Agents from scratch, guiding users through tool selection, skills, files, environment settings, and emitting setup YAML and runtime SDK code.

##### 5.2.2.2 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with examples.

### 5.3 Building LLM Applications Skills & Guides

Comprehensive guides for designing and deploying Claude-powered applications, including API surface selection, agent design heuristics, context management strategies, and model migration procedures. Provides decision frameworks for tool composition, caching, and scaling patterns.

#### 5.3.1 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Comprehensive guide for building LLM applications with Claude, covering language detection, API surface selection (Claude API vs. Managed Agents), model defaults, thinking/effort configuration, and language-specific documentation reading with decision trees for choosing the right tier.

#### 5.3.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API documentation with quick-reference task routing to relevant files for streaming, batches, tool-use, caching, and managed agents.

#### 5.3.3 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide covering decision heuristics for building agents on the Claude API, including tool surface design (bash vs. dedicated tools), context management strategies (editing, compaction, memory), caching principles, and patterns for composing tool calls and scaling tool sets.

#### 5.3.4 [Model migration guide (Skill)](system-prompts/skill-model-migration-guide.md)

Step-by-step instructions for migrating existing code to newer Claude models (Opus 4.7, Opus 4.6, Sonnet 4.6), covering breaking changes, deprecated parameters, per-SDK syntax, prompt-behavior shifts, and comprehensive migration checklists.

#### 5.3.5 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for current Claude API documentation, Managed Agents, SDKs, and the Anthropic CLI, with extraction prompts for fetching latest information.

#### 5.3.6 [Anthropic CLI (Data)](system-prompts/data-anthropic-cli.md)

Reference documentation for the ant CLI covering installation, authentication, command structure, input/output shaping, managed agents workflows, and scripting patterns for control-plane operations.

### 5.4 GitHub Integration & CI/CD

GitHub Actions automation and app installation templates enabling Claude Code integration triggered by @mentions in issues, pull requests, and comments.

#### 5.4.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code integration when @claude is mentioned in issues, pull requests, or comments.

#### 5.4.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing the Claude Code GitHub App integration, explaining the workflow, security model, and how to trigger Claude via @mentions.

---

## 6. Automation, Tooling & Workflow Systems

Hooks, browser automation, web search, git worktrees, skill management, analytics, and scripting environments that extend and automate Claude's capabilities.

### 6.1 Hooks System Configuration & Lifecycle

Event-driven automation framework that intercepts lifecycle moments—permission requests, tool invocations, compaction—and executes shell commands, evaluates conditions, or triggers agents. Hooks enable custom workflows, safety gates, and automated responses without modifying core tool behavior.

#### 6.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive reference for configuring hooks that run shell commands, prompt evaluations, or agents at lifecycle events like PermissionRequest, PreToolUse, PostToolUse, and compaction, with JSON structure, matchers, and output control fields.

#### 6.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context information from a hook execution.

#### 6.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports errors from blocking hook commands that prevent execution continuation.

#### 6.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude when a hook halts execution continuation with an associated message.

#### 6.1.5 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix template for messages when a hook stops continuation.

#### 6.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful completion of a hook with its output content.

#### 6.1.7 [Stop hook blocking error (System Reminder)](system-prompts/system-reminder-stop-hook-blocking-error.md)

Reports errors from blocking stop hook commands.

#### 6.1.8 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks in Claude Code by reading transcripts and returning JSON indicating whether conditions are satisfied with quoted evidence.

#### 6.1.9 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Guides Claude through modifying Claude Code settings.json files, with emphasis on reading existing configuration before merging changes, using hooks for event-driven automation, and distinguishing between simple settings (use /config command) and complex configurations (direct file edit). Includes detailed workflows for adding hooks, permissions, and environment variables with careful array merging to preserve existing settings.

#### 6.1.10 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Provides a rigorous 7-step process for constructing and verifying hooks in Claude Code, from deduplication checks through pipe-testing raw commands, JSON validation, and proof-of-execution. Each step targets a different failure mode, ensuring hooks work correctly in the user's specific project environment before handoff.

### 6.2 Browser Automation & Web Access

Programmatic browser control via mouse, keyboard, and screenshots, plus web search and URL content retrieval for current information.

#### 6.2.1 Browser Automation & Computer Use

Tools and guidelines for programmatic browser control through mouse, keyboard, and screenshot interactions, enabling multi-step automation workflows. Includes batch execution, debugging via console logs, and tab management within Chrome environments.

##### 6.2.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Interact with a Chrome browser using mouse and keyboard, taking screenshots. Always consult screenshots before clicking to determine precise element coordinates.

##### 6.2.1.2 [BrowserBatch (Tool Description)](system-prompts/tool-description-browserbatch.md)

Execute multiple browser tool calls sequentially in one round trip, stopping on first error. Useful for predictable multi-step workflows like navigation, clicking, typing, and screenshots.

##### 6.2.1.3 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Computer action parameter defines browser interactions including clicks, typing, scrolling, keyboard input, and element manipulation. Actions include left/right/double/triple-click, drag, zoom, hover, and scroll-to-element for Chrome automation.

##### 6.2.1.4 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with extra frames, console log debugging with pattern filtering, avoiding JavaScript dialogs, and tab context management with fresh tab IDs.

##### 6.2.1.5 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, with specific select syntax for each tool.

##### 6.2.1.6 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools with guidance on tool selection tiers (dedicated MCP, Chrome MCP, computer-use), access-tier restrictions, link safety, and financial-action restrictions.

#### 6.2.2 Web Search & Content Retrieval

Mechanisms for accessing current information beyond training data through web search and URL content fetching, with built-in caching, source attribution, and content transformation to markdown for analysis.

##### 6.2.2.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

WebSearch provides current information beyond Claude's knowledge cutoff by searching the web and returning formatted results. Responses must include a mandatory Sources section listing all relevant URLs as markdown hyperlinks, and searches must use the current year for recent queries.

##### 6.2.2.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

WebFetch retrieves and analyzes web content by fetching URLs, converting HTML to markdown, and processing results with a fast AI model. It includes a 15-minute cache, handles redirects, and prefers MCP-provided alternatives when available.

##### 6.2.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose WebFetch output for the main model with character limits on quotes and paraphrasing requirements for untrusted domains.

### 6.3 Git Worktree & Version Control

Manages isolated git worktrees for parallel development branches and coordinates version control workflows including commits, pull requests, and branch naming. Worktrees provide session isolation while maintaining connection to the main repository; automated tooling handles commit creation, PR generation, and branch management with safety protocols.

#### 6.3.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it. Use only when explicitly instructed by the user or project instructions; creates a new branch in .claude/worktrees/ or delegates to VCS hooks.

#### 6.3.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exit a worktree created by EnterWorktree and return to the original directory. Choose to keep or remove the worktree; optionally discard uncommitted changes.

#### 6.3.3 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent for generating succinct session titles and git branch names from session descriptions, with title in sentence case and branch names prefixed with 'claude/'.

#### 6.3.4 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context from git status and diff, following repository conventions and enforcing safety protocols against amending or skipping hooks.

#### 6.3.5 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated context, handling branch creation, multi-line PR bodies, and updating existing PRs while enforcing git safety protocols.

#### 6.3.6 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git status snapshot at conversation start as a reference point.

### 6.4 Skill & Workflow Management

Creating, invoking, and refining reusable capabilities via slash commands, plus tool schema discovery for dynamic invocation.

#### 6.4.1 Skill Creation & Management

Mechanisms for defining, invoking, and refining reusable capabilities within Claude Code. This includes converting session work into documented skills, managing skill invocation through slash commands, and extracting permission patterns from usage to streamline tool access.

##### 6.4.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Skill tool invokes specialized capabilities and domain knowledge in response to user requests, including slash commands. It requires exact skill names from available lists and must be called before generating other responses when a skill matches the user's request.

##### 6.4.1.2 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-step process to convert repeatable session work into reusable skills: analyzing the session, interviewing the user across four rounds, writing SKILL.md with detailed step annotations, and confirming before saving to repo or personal skills directory.

##### 6.4.1.3 [Generate permission allowlist from transcripts (Skill)](system-prompts/skill-generate-permission-allowlist-from-transcripts.md)

Analyzes session transcripts to extract frequently used read-only tool patterns and adds them to the project's permission allowlist to reduce permission prompts, with safeguards against arbitrary code execution.

#### 6.4.2 Tool Discovery & Schema Resolution

Resolves deferred tool references by fetching complete JSONSchema definitions through name matching and keyword search, enabling dynamic tool invocation.

##### 6.4.2.1 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

ToolSearch fetches complete JSONSchema definitions for deferred tools by matching queries against tool names or keywords. It supports exact name selection, keyword search, and required-term filtering, returning matched tools in callable function blocks.

### 6.5 Analytics, Scheduling & Monitoring

Usage analytics for session insights, periodic monitoring with calendar digests, and daily briefings for priority tracking.

#### 6.5.1 Usage Insights & Analytics

Analysis and reporting systems that extract structured insights from session data, identifying what works, friction points, and future opportunities. These tools surface actionable suggestions for improving workflows and feature adoption through coaching-oriented summaries and facet extraction.

##### 6.5.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part usage insights summary covering what's working, hindrances, quick wins, and ambitious workflows for future models, using a coaching tone without numerical stats or overwhelming detail.

##### 6.5.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes usage data to identify and categorize friction patterns with 3 categories and 2 examples each, helping users understand recurring issues in their Claude Code interactions.

##### 6.5.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future opportunities for autonomous AI-assisted development workflows, including what's possible, how to try it, and copyable prompts for experimentation.

##### 6.5.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from session transcripts including goal categories (user-requested only), satisfaction signals, and friction types, with strict guidelines to avoid counting autonomous work or misinterpreting satisfaction.

##### 6.5.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions (prioritizing repeated patterns), features to try from MCP Servers, Custom Skills, Hooks, Headless Mode, and Task Agents, plus usage patterns with copyable prompts.

##### 6.5.1.6 [/insights report output (Skill)](system-prompts/skill-insights-report-output.md)

Formats and displays the insights usage report results after the user runs the /insights slash command with shareable report URL and facets directory.

#### 6.5.2 Periodic Monitoring & Daily Briefing

Scheduled tasks that prepare users for work and meetings by delivering calendar digests, gathering contextual materials, and surfacing actionable priority changes at strategic moments throughout the day.

##### 6.5.2.1 [/morning-checkin daily brief (Skill)](system-prompts/skill-morning-checkin-daily-brief.md)

Once-a-day scheduled task that prepares a daily calendar digest, schedules pre-meeting check-ins, scans overnight inbox, and records the day's top priority to get the user ready for work.

##### 6.5.2.2 [/pre-meeting-checkin event brief (Skill)](system-prompts/skill-pre-meeting-checkin-event-brief.md)

Fires minutes before a calendar event to gather materials, recent thread context, open questions, and deliver a concise meeting brief so the user is prepared.

##### 6.5.2.3 [/catch-up periodic heartbeat (Skill)](system-prompts/skill-catch-up-periodic-heartbeat.md)

Periodic task that scans tracked priorities, checks for actionable changes, and surfaces a brief digest only when something time-sensitive or actionable is found, respecting quiet hours and maintaining state across runs.

### 6.6 Scripting Environments

JavaScript REPL for multi-step async investigations and Jupyter notebook cell-level editing for data workflows.

#### 6.6.1 REPL & JavaScript Scripting

JavaScript-based scripting environment for composing multi-step investigations and tool orchestration. Enables batching file operations, shell commands, and code searches into efficient async workflows with dense shorthand conventions.

##### 6.6.1.1 [REPL (Tool Description)](system-prompts/tool-description-repl.md)

JavaScript programming interface for looping, branching, and composing tool calls as async functions. Batch all operations into one REPL call; supports Glob, Read, Edit, Grep, shell commands, and MCP tools.

##### 6.6.1.2 [REPL tool usage and scripting conventions (System Prompt)](system-prompts/system-prompt-repl-tool-usage-and-scripting-conventions.md)

Defines dense JavaScript scripting conventions for REPL investigations using shorthands for shell, file reads, and code search, with batching rules, API reference, and constraints for efficient multi-step exploration in 1-3 calls per turn.

#### 6.6.2 Jupyter Notebook Tools

Cell-level editing interface for Jupyter notebooks, supporting insertion, deletion, and content replacement operations on individual cells.

##### 6.6.2.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replace the contents of a specific cell in a Jupyter notebook. Supports insert mode to add cells and delete mode to remove cells; cell_number is 0-indexed.

---

## 7. Agent Environment, UX & Configuration

File system tools, IDE integration, communication style, output configuration, notifications, and session environment settings that shape the agent's operational context and user experience.

### 7.1 File System & Content Access

Tools for reading, writing, editing, and searching files, including edge-case handling for truncation, empty files, and non-displayable resources.

#### 7.1.1 File System Operations

Tools for reading, writing, editing, and searching files on the local filesystem. ReadFile retrieves content from various formats including images and PDFs; Write and Edit handle file creation and modification with different strategies for new versus existing files; Grep enables regex-based content search; LSP provides code intelligence capabilities like definition lookup and symbol navigation.

##### 7.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Read files from the local filesystem using absolute paths. Supports images, PDFs (with page ranges for large files), and Jupyter notebooks; returns up to a configurable line limit by default.

##### 7.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Write creates or completely rewrites files to the local filesystem. Edit is preferred for modifying existing files; Write should only be used for new files or full rewrites, and must never create documentation or README files unless explicitly requested.

##### 7.1.1.3 [Write (read existing file first) [Tool Description]](system-prompts/tool-description-write-read-existing-file-first.md)

Write creates or overwrites files on the local filesystem, but requires reading existing files first in the conversation before overwriting. Edit is preferred for modifying existing files as it sends only diffs.

##### 7.1.1.4 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read output. Prefer editing existing files; use replace_all for renaming variables across a file.

##### 7.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Search files using ripgrep with regex support, file filtering by glob or type, and multiple output modes. Always use this tool for search tasks instead of bash grep or rg commands.

##### 7.1.1.6 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers for code intelligence: go to definition, find references, hover info, symbols, implementations, and call hierarchies.

#### 7.1.2 File State & Reading Reminders

Alerts for edge cases in file access and content availability, including truncation boundaries, empty files, offset errors, and non-displayable resources. Instructs silent handling of large files through read tools without user notification.

##### 7.1.2.1 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Alerts Claude when a file read offset exceeds the file's actual length.

##### 7.1.2.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and instructs use of the read tool to access additional content without informing the user.

##### 7.1.2.3 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 7.1.2.4 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 7.1.2.5 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content that is not displayable in text form.

### 7.2 IDE & Editor Integration

Real-time awareness of user interactions within the IDE including file selections, open files, and external modifications from linters or user edits. Provides diagnostic alerts and change tracking with line numbers to maintain context synchronization.

#### 7.2.1 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Informs Claude of specific lines selected by the user in an IDE, noting potential relevance to the current task.

#### 7.2.2 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

#### 7.2.3 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues with a formatted summary and list.

#### 7.2.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides relevant changes with line numbers, instructing Claude to account for the changes without reverting unless requested.

### 7.3 Communication Style & Output Formatting

Directives for concise user-focused communication, action summaries, code citations, reasoning depth calibration, and visual preview rendering.

#### 7.3.1 Communication Style & Response Formatting

Directives for concise, user-focused communication including brief acknowledgments and checkpoints via messaging tools, present-tense action summaries with specific file references, and code citations formatted for easy navigation. Emphasizes brevity, honesty, and warmth over verbosity.

##### 7.3.1.1 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs Claude to provide brief user-facing updates at key moments, write concise end-of-turn summaries, match response format to task complexity, and avoid unnecessary comments and planning documents in code.

##### 7.3.1.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number citations when referencing specific code for easy user navigation to source locations.

##### 7.3.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Directs Claude to keep responses short and concise.

##### 7.3.1.4 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to route all user-facing replies through SendUserMessage, providing acknowledgments before work and checkpoints during longer tasks to keep users informed rather than leaving them watching a spinner.

##### 7.3.1.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Instructs Claude to generate concise 3-5 word action summaries in present tense, naming specific files or functions rather than branches, avoiding past tense and vague descriptions.

##### 7.3.1.6 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads requiring absolute file paths, relevant code snippets only when load-bearing, avoiding emojis, and omitting colons before tool calls for clear communication.

##### 7.3.1.7 [Assistant voice and values template (Data)](system-prompts/data-assistant-voice-and-values-template.md)

Template describing Claude's voice, values, and communication style emphasizing brevity, honesty, collaboration, and warmth over performance.

#### 7.3.2 Output Style & Thinking Configuration

Metacognitive directives for calibrating reasoning depth based on task complexity and enforcing active output style guidelines. Includes visual comparison rendering for UI options through formatted markdown previews.

##### 7.3.2.1 [Thinking frequency tuning (System Reminder)](system-prompts/system-reminder-thinking-frequency-tuning.md)

Instructs Claude to treat system-reminder tags as harness instructions and calibrate thinking depth based on task complexity, avoiding unnecessary reasoning on simple tasks.

##### 7.3.2.2 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and to follow its guidelines.

##### 7.3.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using monospace markdown boxes, supporting ASCII mockups, code snippets, diagrams, and configuration examples for visual comparison.

### 7.4 Session & Environment Configuration

Minimal mode setup, session isolation, WSL policy management, shell status display, and resource budget monitoring.

#### 7.4.1 Minimal Mode & Session Configuration

Configures lightweight operation by disabling background features and plugins, using explicit CLI flags for context provisioning, isolating temporary files to session-specific directories, and managing Windows policy application in WSL environments.

##### 7.4.1.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode operation that disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags for authentication and configuration.

##### 7.4.1.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, providing isolated working space for intermediate results and temporary scripts.

##### 7.4.1.3 [WSL managed settings double opt-in (System Prompt)](system-prompts/system-prompt-wsl-managed-settings-double-opt-in.md)

Explains that WSL reads Windows managed settings policy chain only when admin-enabled flag is set, with HKCU requiring additional user opt-in for HKCU policies to apply on WSL.

#### 7.4.2 Agent Status Line & Shell Configuration

Integrates shell environment configuration with Claude Code's status display, translating shell prompts into dynamic status information that tracks context usage and operational limits.

##### 7.4.2.1 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by converting shell PS1 configurations to shell commands and updating settings.json with dynamic status information including context usage and rate limits.

#### 7.4.3 Resource & Budget Monitoring

Real-time visibility into token and financial resource consumption, displaying current usage against limits to inform decision-making within constrained environments.

##### 7.4.3.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 7.4.3.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget amounts.

### 7.5 User Interaction & Feedback

Interactive clarification gathering, prompt suggestions, learning modes, notifications, and debugging tools for session diagnostics.

#### 7.5.1 Interactive Clarification & Visual Feedback

Gathers user input during execution through targeted questions and multiselect options, with optional visual previews rendered as HTML to support decision-making.

##### 7.5.1.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use AskUserQuestion for gathering preferences, clarifying ambiguities, and offering implementation choices during execution, with special handling for plan mode to avoid asking about plan approval.

##### 7.5.1.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Describes using the optional preview field on single-select questions to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML fragments.

#### 7.5.2 Prompt Suggestion & User Intent Prediction

Anticipates user follow-up actions by analyzing conversation context and suggesting natural next steps without editorial commentary.

##### 7.5.2.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next based on recent messages, suggesting specific follow-up actions without evaluative or multi-sentence responses.

#### 7.5.3 Learning & Teaching Modes

Enables interactive education through collaborative code development, where Claude requests human input on design decisions, provides contextual learning insights tied to implementation patterns, and offers step-by-step guided instruction via visual overlays.

##### 7.5.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions to design decisions and business logic in 20+ line code sections, using TodoList tracking and Learn by Doing requests with specific guidance and examples.

##### 7.5.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code changes, focusing on implementation choices and codebase-specific patterns rather than generic programming concepts.

##### 7.5.3.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Request permission to guide the user through a task step-by-step using fullscreen tooltip overlays. Use when the user wants to learn how to do something rather than have it done directly.

#### 7.5.4 Notification & Push Messaging

Desktop and mobile notification delivery for time-sensitive user alerts. Enables interrupting the user's current activity when important updates warrant immediate attention.

##### 7.5.4.1 [PushNotification (Tool Description)](system-prompts/tool-description-pushnotification.md)

Send a desktop notification to the user's terminal and optionally to their phone if Remote Control is connected. Use sparingly for important updates that warrant interrupting their current activity.

#### 7.5.5 Debugging & Diagnostics

Identifies and resolves Claude Code session failures by analyzing logs, scanning for stuck processes, and monitoring resource consumption to pinpoint errors and suggest fixes.

##### 7.5.5.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Helps users debug Claude Code session issues by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 7.5.5.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, checking CPU/memory/state, gathering debug context, and posting findings to Slack.
