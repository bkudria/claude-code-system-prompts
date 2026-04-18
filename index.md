# Claude Code System Prompts Index

Operational guidance and reference material for building, running, and extending Claude Code—covering everything needed to go from writing a single command to deploying autonomous multi-agent systems in production environments.

## Table of Contents

1. [Shell, Git & Code Quality](#1-shell-git-code-quality)
   1. [Bash & Shell Execution](#11-bash-shell-execution)
      1. [Bash Command Execution & Best Practices](#111-bash-command-execution-best-practices)
         1. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
         2. [Bash (maintain cwd) [Tool Description]](#1112-bash-maintain-cwd-tool-description)
         3. [Bash (no newlines) [Tool Description]](#1113-bash-no-newlines-tool-description)
         4. [Bash (parallel commands) [Tool Description]](#1114-bash-parallel-commands-tool-description)
         5. [Bash (quote file paths) [Tool Description]](#1115-bash-quote-file-paths-tool-description)
         6. [Bash (semicolon usage) [Tool Description]](#1116-bash-semicolon-usage-tool-description)
         7. [Bash (sequential commands) [Tool Description]](#1117-bash-sequential-commands-tool-description)
         8. [Bash (timeout) [Tool Description]](#1118-bash-timeout-tool-description)
         9. [Bash (verify parent directory) [Tool Description]](#1119-bash-verify-parent-directory-tool-description)
         10. [Bash (working directory) [Tool Description]](#11110-bash-working-directory-tool-description)
         11. [Bash (sleep — keep short) [Tool Description]](#11111-bash-sleep-—-keep-short-tool-description)
         12. [Bash (sleep — no polling background tasks) [Tool Description]](#11112-bash-sleep-—-no-polling-background-tasks-tool-description)
         13. [Bash (sleep — run immediately) [Tool Description]](#11113-bash-sleep-—-run-immediately-tool-description)
         14. [Bash (sleep — use check commands) [Tool Description]](#11114-bash-sleep-—-use-check-commands-tool-description)
         15. [Bash (alternative — communication) [Tool Description]](#11115-bash-alternative-—-communication-tool-description)
         16. [One of six rules for using sleep command (System Prompt)](#11116-one-of-six-rules-for-using-sleep-command-system-prompt)
      2. [Dedicated Tools Over Bash Equivalents](#112-dedicated-tools-over-bash-equivalents)
         1. [Bash (alternative — content search) [Tool Description]](#1121-bash-alternative-—-content-search-tool-description)
         2. [Bash (alternative — edit files) [Tool Description]](#1122-bash-alternative-—-edit-files-tool-description)
         3. [Bash (alternative — file search) [Tool Description]](#1123-bash-alternative-—-file-search-tool-description)
         4. [Bash (alternative — read files) [Tool Description]](#1124-bash-alternative-—-read-files-tool-description)
         5. [Bash (alternative — write files) [Tool Description]](#1125-bash-alternative-—-write-files-tool-description)
         6. [Bash (built-in tools note) [Tool Description]](#1126-bash-built-in-tools-note-tool-description)
         7. [Bash (prefer dedicated tools) [Tool Description]](#1127-bash-prefer-dedicated-tools-tool-description)
      3. [Sandbox Security & Restriction Management](#113-sandbox-security-restriction-management)
         1. [Bash (sandbox — adjust settings) [Tool Description]](#1131-bash-sandbox-—-adjust-settings-tool-description)
         2. [Bash (sandbox — default to sandbox) [Tool Description]](#1132-bash-sandbox-—-default-to-sandbox-tool-description)
         3. [Bash (sandbox — evidence: access denied) [Tool Description]](#1133-bash-sandbox-—-evidence-access-denied-tool-description)
         4. [Bash (sandbox — evidence list header) [Tool Description]](#1134-bash-sandbox-—-evidence-list-header-tool-description)
         5. [Bash (sandbox — evidence: network failures) [Tool Description]](#1135-bash-sandbox-—-evidence-network-failures-tool-description)
         6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1136-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
         7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1137-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
         8. [Bash (sandbox — explain restriction) [Tool Description]](#1138-bash-sandbox-—-explain-restriction-tool-description)
         9. [Bash (sandbox — failure evidence condition) [Tool Description]](#1139-bash-sandbox-—-failure-evidence-condition-tool-description)
         10. [Bash (sandbox — mandatory mode) [Tool Description]](#11310-bash-sandbox-—-mandatory-mode-tool-description)
         11. [Bash (sandbox — no exceptions) [Tool Description]](#11311-bash-sandbox-—-no-exceptions-tool-description)
         12. [Bash (sandbox — no sensitive paths) [Tool Description]](#11312-bash-sandbox-—-no-sensitive-paths-tool-description)
         13. [Bash (sandbox — per-command) [Tool Description]](#11313-bash-sandbox-—-per-command-tool-description)
         14. [Bash (sandbox — response header) [Tool Description]](#11314-bash-sandbox-—-response-header-tool-description)
         15. [Bash (sandbox — retry without sandbox) [Tool Description]](#11315-bash-sandbox-—-retry-without-sandbox-tool-description)
         16. [Bash (sandbox — tmpdir) [Tool Description]](#11316-bash-sandbox-—-tmpdir-tool-description)
         17. [Bash (sandbox — user permission prompt) [Tool Description]](#11317-bash-sandbox-—-user-permission-prompt-tool-description)
   2. [Git Workflows & Version Control Operations](#12-git-workflows-version-control-operations)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#121-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#122-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#123-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#124-bash-git-—-prefer-new-commits-tool-description)
      5. [Quick git commit (Agent Prompt)](#125-quick-git-commit-agent-prompt)
      6. [Quick PR creation (Agent Prompt)](#126-quick-pr-creation-agent-prompt)
      7. [Session title and branch generation (Agent Prompt)](#127-session-title-and-branch-generation-agent-prompt)
      8. [Git status (System Prompt)](#128-git-status-system-prompt)
      9. [EnterWorktree (Tool Description)](#129-enterworktree-tool-description)
      10. [ExitWorktree (Tool Description)](#1210-exitworktree-tool-description)
   3. [Coding Standards & Software Engineering Practices](#13-coding-standards-software-engineering-practices)
      1. [Doing tasks (software engineering focus) [System Prompt]](#131-doing-tasks-software-engineering-focus-system-prompt)
      2. [Doing tasks (security) [System Prompt]](#132-doing-tasks-security-system-prompt)
      3. [Doing tasks (no compatibility hacks) [System Prompt]](#133-doing-tasks-no-compatibility-hacks-system-prompt)
      4. [Doing tasks (no unnecessary error handling) [System Prompt]](#134-doing-tasks-no-unnecessary-error-handling-system-prompt)
      5. [Censoring assistance with malicious activities (System Prompt)](#135-censoring-assistance-with-malicious-activities-system-prompt)
2. [Agent Orchestration & Autonomous Execution](#2-agent-orchestration-autonomous-execution)
   1. [Planning Mode & Structured Implementation](#21-planning-mode-structured-implementation)
      1. [EnterPlanMode (Tool Description)](#211-enterplanmode-tool-description)
      2. [ExitPlanMode (Tool Description)](#212-exitplanmode-tool-description)
      3. [Plan mode is active (5-phase) [System Reminder]](#213-plan-mode-is-active-5-phase-system-reminder)
      4. [Plan mode is active (iterative) [System Reminder]](#214-plan-mode-is-active-iterative-system-reminder)
      5. [Plan mode is active (subagent) [System Reminder]](#215-plan-mode-is-active-subagent-system-reminder)
      6. [Plan mode re-entry (System Reminder)](#216-plan-mode-re-entry-system-reminder)
      7. [Exited plan mode (System Reminder)](#217-exited-plan-mode-system-reminder)
      8. [Plan file reference (System Reminder)](#218-plan-file-reference-system-reminder)
      9. [Verify plan reminder (System Reminder)](#219-verify-plan-reminder-system-reminder)
      10. [Phase four of plan mode (System Prompt)](#2110-phase-four-of-plan-mode-system-prompt)
      11. [Remote plan mode (ultraplan) [System Prompt]](#2111-remote-plan-mode-ultraplan-system-prompt)
      12. [Remote planning session (System Prompt)](#2112-remote-planning-session-system-prompt)
      13. [Ultraplan mode (System Reminder)](#2113-ultraplan-mode-system-reminder)
      14. [Plan mode (enhanced) [Agent Prompt]](#2114-plan-mode-enhanced-agent-prompt)
   2. [Multi-Agent Coordination](#22-multi-agent-coordination)
      1. [Multi-Agent Coordination & Subagent Management](#221-multi-agent-coordination-subagent-management)
         1. [Tool usage (subagent guidance) [System Prompt]](#2211-tool-usage-subagent-guidance-system-prompt)
         2. [Writing subagent prompts (System Prompt)](#2212-writing-subagent-prompts-system-prompt)
         3. [Subagent delegation examples (System Prompt)](#2213-subagent-delegation-examples-system-prompt)
         4. [Subagent prompt-writing examples (System Prompt)](#2214-subagent-prompt-writing-examples-system-prompt)
         5. [Fork usage guidelines (System Prompt)](#2215-fork-usage-guidelines-system-prompt)
         6. [Agent (usage notes) [Tool Description]](#2216-agent-usage-notes-tool-description)
         7. [TeammateTool (Tool Description)](#2217-teammatetool-tool-description)
         8. [SendMessageTool (Tool Description)](#2218-sendmessagetool-tool-description)
         9. [SendMessageTool (non-agent-teams) [Tool Description]](#2219-sendmessagetool-non-agent-teams-tool-description)
         10. [TaskList (teammate workflow) [Tool Description]](#22110-tasklist-teammate-workflow-tool-description)
         11. [TeamDelete (Tool Description)](#22111-teamdelete-tool-description)
         12. [Team Coordination (System Reminder)](#22112-team-coordination-system-reminder)
         13. [Team Shutdown (System Reminder)](#22113-team-shutdown-system-reminder)
         14. [Teammate Communication (System Prompt)](#22114-teammate-communication-system-prompt)
         15. [Worker fork (Agent Prompt)](#22115-worker-fork-agent-prompt)
         16. [Worker instructions (System Prompt)](#22116-worker-instructions-system-prompt)
      2. [Batch Operations & Parallel Work Orchestration](#222-batch-operations-parallel-work-orchestration)
         1. [/batch slash command (Agent Prompt)](#2221-batch-slash-command-agent-prompt)
         2. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#2222-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   3. [Scheduling & Recurring Execution](#23-scheduling-recurring-execution)
      1. [Scheduling, Cron Jobs & Loop Execution](#231-scheduling-cron-jobs-loop-execution)
         1. [CronCreate (Tool Description)](#2311-croncreate-tool-description)
         2. [ScheduleWakeup (/loop dynamic mode) [Tool Description]](#2312-schedulewakeup-loop-dynamic-mode-tool-description)
         3. [Snooze (delay and reason guidance) [Tool Description]](#2313-snooze-delay-and-reason-guidance-tool-description)
         4. [/loop slash command (Skill)](#2314-loop-slash-command-skill)
         5. [/loop slash command (dynamic mode) [Skill]](#2315-loop-slash-command-dynamic-mode-skill)
         6. [/loop self-pacing mode (Skill)](#2316-loop-self-pacing-mode-skill)
         7. [/loop cloud-first scheduling offer (Skill)](#2317-loop-cloud-first-scheduling-offer-skill)
         8. [Dynamic pacing loop execution (Skill)](#2318-dynamic-pacing-loop-execution-skill)
         9. [Schedule recurring cron and execute immediately (compact) [Skill]](#2319-schedule-recurring-cron-and-execute-immediately-compact-skill)
         10. [Schedule recurring cron and run immediately (Skill)](#23110-schedule-recurring-cron-and-run-immediately-skill)
         11. [Loop wakeup not scheduled (System Reminder)](#23111-loop-wakeup-not-scheduled-system-reminder)
         12. [/schedule slash command (Agent Prompt)](#23112-schedule-slash-command-agent-prompt)
      2. [Autonomous Execution & Auto Mode](#232-autonomous-execution-auto-mode)
         1. [Auto mode (System Prompt)](#2321-auto-mode-system-prompt)
         2. [Autonomous loop check (System Prompt)](#2322-autonomous-loop-check-system-prompt)
         3. [Executing actions with care (System Prompt)](#2323-executing-actions-with-care-system-prompt)
         4. [Doing tasks (ambitious tasks) [System Prompt]](#2324-doing-tasks-ambitious-tasks-system-prompt)
         5. [Auto mode rule reviewer (Agent Prompt)](#2325-auto-mode-rule-reviewer-agent-prompt)
   4. [Agent Creation & Persona Design](#24-agent-creation-persona-design)
      1. [Agent creation architect (Agent Prompt)](#241-agent-creation-architect-agent-prompt)
      2. [Bash command description writer (Agent Prompt)](#242-bash-command-description-writer-agent-prompt)
      3. [Bash command prefix detection (Agent Prompt)](#243-bash-command-prefix-detection-agent-prompt)
      4. [Prompt Suggestion Generator v2 (Agent Prompt)](#244-prompt-suggestion-generator-v2-agent-prompt)
      5. [Agent mention (System Reminder)](#245-agent-mention-system-reminder)
3. [Session, Memory & Task Management](#3-session-memory-task-management)
   1. [Memory & Knowledge Persistence](#31-memory-knowledge-persistence)
      1. [Memory Management & Session Persistence](#311-memory-management-session-persistence)
         1. [Memory description of user details (System Prompt)](#3111-memory-description-of-user-details-system-prompt)
         2. [Memory description of user feedback (System Prompt)](#3112-memory-description-of-user-feedback-system-prompt)
         3. [Memory description of user feedback (with explicit save) [System Prompt]](#3113-memory-description-of-user-feedback-with-explicit-save-system-prompt)
         4. [Memory staleness verification (System Prompt)](#3114-memory-staleness-verification-system-prompt)
         5. [Description part of memory instructions (System Prompt)](#3115-description-part-of-memory-instructions-system-prompt)
         6. [Agent memory instructions (System Prompt)](#3116-agent-memory-instructions-system-prompt)
         7. [Dream team memory handling (System Prompt)](#3117-dream-team-memory-handling-system-prompt)
         8. [Dream memory consolidation (Agent Prompt)](#3118-dream-memory-consolidation-agent-prompt)
         9. [Dream memory pruning (Agent Prompt)](#3119-dream-memory-pruning-agent-prompt)
         10. [Memory synthesis (Agent Prompt)](#31110-memory-synthesis-agent-prompt)
         11. [Determine which memory files to attach (Agent Prompt)](#31111-determine-which-memory-files-to-attach-agent-prompt)
         12. [Memory file contents (System Reminder)](#31112-memory-file-contents-system-reminder)
         13. [Nested memory contents (System Reminder)](#31113-nested-memory-contents-system-reminder)
         14. [/dream nightly schedule (Skill)](#31114-dream-nightly-schedule-skill)
         15. [Session memory template (Data)](#31115-session-memory-template-data)
      2. [Session Memory Update & Note-Taking](#312-session-memory-update-note-taking)
         1. [Session memory update instructions (Agent Prompt)](#3121-session-memory-update-instructions-agent-prompt)
   2. [Conversation Summarization & Session State](#32-conversation-summarization-session-state)
      1. [Conversation Summarization & Context Compaction](#321-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#3211-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#3212-recent-message-summarization-agent-prompt)
         3. [Partial compaction instructions (System Prompt)](#3213-partial-compaction-instructions-system-prompt)
         4. [Context compaction summary (System Prompt)](#3214-context-compaction-summary-system-prompt)
         5. [Compact file reference (System Reminder)](#3215-compact-file-reference-system-reminder)
      2. [Session Management & State Tracking](#322-session-management-state-tracking)
         1. [Session continuation (System Reminder)](#3221-session-continuation-system-reminder)
         2. [Token usage (System Reminder)](#3222-token-usage-system-reminder)
         3. [USD budget (System Reminder)](#3223-usd-budget-system-reminder)
         4. [Output style active (System Reminder)](#3224-output-style-active-system-reminder)
         5. [Invoked skills (System Reminder)](#3225-invoked-skills-system-reminder)
         6. [Thinking frequency tuning (System Reminder)](#3226-thinking-frequency-tuning-system-reminder)
         7. [Coding session title generator (Agent Prompt)](#3227-coding-session-title-generator-agent-prompt)
         8. [/rename auto-generate session name (Agent Prompt)](#3228-rename-auto-generate-session-name-agent-prompt)
         9. [Session search (Agent Prompt)](#3229-session-search-agent-prompt)
   3. [Task Tracking & Progress Management](#33-task-tracking-progress-management)
      1. [TodoWrite (Tool Description)](#331-todowrite-tool-description)
      2. [TaskCreate (Tool Description)](#332-taskcreate-tool-description)
      3. [Tool usage (task management) [System Prompt]](#333-tool-usage-task-management-system-prompt)
      4. [TodoWrite reminder (System Reminder)](#334-todowrite-reminder-system-reminder)
      5. [Task tools reminder (System Reminder)](#335-task-tools-reminder-system-reminder)
   4. [Analytics, Support & Commands](#34-analytics-support-commands)
      1. [Usage Insights & Analytics](#341-usage-insights-analytics)
         1. [Insights session facets extraction (System Prompt)](#3411-insights-session-facets-extraction-system-prompt)
         2. [Insights suggestions (System Prompt)](#3412-insights-suggestions-system-prompt)
         3. [Insights at a glance summary (System Prompt)](#3413-insights-at-a-glance-summary-system-prompt)
         4. [Insights friction analysis (System Prompt)](#3414-insights-friction-analysis-system-prompt)
         5. [Insights on the horizon (System Prompt)](#3415-insights-on-the-horizon-system-prompt)
         6. [/insights report output (Skill)](#3416-insights-report-output-skill)
      2. [Skills System & Slash Commands](#342-skills-system-slash-commands)
         1. [Skill (Tool Description)](#3421-skill-tool-description)
      3. [Help, Feedback & User Support](#343-help-feedback-user-support)
         1. [Doing tasks (help and feedback) [System Prompt]](#3431-doing-tasks-help-and-feedback-system-prompt)
4. [Claude API, SDK & Application Development](#4-claude-api-sdk-application-development)
   1. [Core API & SDK Reference](#41-core-api-sdk-reference)
      1. [Claude API SDK Reference Documentation](#411-claude-api-sdk-reference-documentation)
         1. [Claude API reference — Python (Data)](#4111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#4112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — cURL (Data)](#4113-claude-api-reference-—-curl-data)
         4. [Claude API reference — Go (Data)](#4114-claude-api-reference-—-go-data)
         5. [Claude API reference — Java (Data)](#4115-claude-api-reference-—-java-data)
         6. [Claude API reference — C# (Data)](#4116-claude-api-reference-—-c-data)
         7. [Claude API reference — PHP (Data)](#4117-claude-api-reference-—-php-data)
         8. [Claude API reference — Ruby (Data)](#4118-claude-api-reference-—-ruby-data)
         9. [Claude model catalog (Data)](#4119-claude-model-catalog-data)
         10. [HTTP error codes reference (Data)](#41110-http-error-codes-reference-data)
      2. [Tool Use, Streaming & Files API Documentation](#412-tool-use-streaming-files-api-documentation)
         1. [Tool use concepts (Data)](#4121-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#4122-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#4123-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#4124-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#4125-streaming-reference-—-typescript-data)
         6. [Files API reference — Python (Data)](#4126-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#4127-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#4128-message-batches-api-reference-—-python-data)
         9. [Prompt Caching — Design & Optimization (Data)](#4129-prompt-caching-—-design-optimization-data)
   2. [Managed Agents API Documentation](#42-managed-agents-api-documentation)
      1. [Managed Agents overview (Data)](#421-managed-agents-overview-data)
      2. [Managed Agents core concepts (Data)](#422-managed-agents-core-concepts-data)
      3. [Managed Agents endpoint reference (Data)](#423-managed-agents-endpoint-reference-data)
      4. [Managed Agents environments and resources (Data)](#424-managed-agents-environments-and-resources-data)
      5. [Managed Agents events and steering (Data)](#425-managed-agents-events-and-steering-data)
      6. [Managed Agents tools and skills (Data)](#426-managed-agents-tools-and-skills-data)
      7. [Managed Agents client patterns (Data)](#427-managed-agents-client-patterns-data)
      8. [Managed Agents reference — Python (Data)](#428-managed-agents-reference-—-python-data)
      9. [Managed Agents reference — TypeScript (Data)](#429-managed-agents-reference-—-typescript-data)
      10. [Managed Agents reference — cURL (Data)](#4210-managed-agents-reference-—-curl-data)
   3. [Application Architecture & Design](#43-application-architecture-design)
      1. [Building LLM Applications & Agent Design](#431-building-llm-applications-agent-design)
         1. [Building LLM-powered applications with Claude (Skill)](#4311-building-llm-powered-applications-with-claude-skill)
         2. [Agent Design Patterns (Skill)](#4312-agent-design-patterns-skill)
         3. [Build with Claude API (reference guide) [Skill]](#4313-build-with-claude-api-reference-guide-skill)
         4. [Model migration guide (Skill)](#4314-model-migration-guide-skill)
         5. [Live documentation sources (Data)](#4315-live-documentation-sources-data)
         6. [Claude guide agent (Agent Prompt)](#4316-claude-guide-agent-agent-prompt)
      2. [Codebase Exploration & Analysis Agents](#432-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#4321-explore-agent-prompt)
         2. [General purpose (Agent Prompt)](#4322-general-purpose-agent-prompt)
         3. [CLAUDE.md creation (Agent Prompt)](#4323-claudemd-creation-agent-prompt)
   4. [Setup, Onboarding & CI/CD](#44-setup-onboarding-cicd)
      1. [Onboarding, Setup & Configuration](#441-onboarding-setup-configuration)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#4411-init-claudemd-and-skill-setup-new-version-skill)
         2. [Update Claude Code Config (Skill)](#4412-update-claude-code-config-skill)
         3. [Team onboarding guide (Skill)](#4413-team-onboarding-guide-skill)
         4. [Generate permission allowlist from transcripts (Skill)](#4414-generate-permission-allowlist-from-transcripts-skill)
         5. [Onboarding guide generator (Agent Prompt)](#4415-onboarding-guide-generator-agent-prompt)
         6. [Managed Agents onboarding flow (Agent Prompt)](#4416-managed-agents-onboarding-flow-agent-prompt)
         7. [Status line setup (Agent Prompt)](#4417-status-line-setup-agent-prompt)
         8. [Skillify Current Session (System Prompt)](#4418-skillify-current-session-system-prompt)
      2. [GitHub Integration & CI/CD](#442-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#4421-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#4422-github-app-installation-pr-description-data)
5. [Tools, Environment & User Experience](#5-tools-environment-user-experience)
   1. [File, Search & Code Intelligence Tools](#51-file-search-code-intelligence-tools)
      1. [File System Tools & Operations](#511-file-system-tools-operations)
         1. [ReadFile (Tool Description)](#5111-readfile-tool-description)
         2. [Write (Tool Description)](#5112-write-tool-description)
         3. [Edit (Tool Description)](#5113-edit-tool-description)
         4. [Grep (Tool Description)](#5114-grep-tool-description)
         5. [LSP (Tool Description)](#5115-lsp-tool-description)
      2. [Web Fetching & Search Tools](#512-web-fetching-search-tools)
         1. [WebFetch (Tool Description)](#5121-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#5122-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#5123-webfetch-summarizer-agent-prompt)
   2. [Scripting, REPL & Notebook Tools](#52-scripting-repl-notebook-tools)
      1. [REPL (Tool Description)](#521-repl-tool-description)
      2. [PowerShell (Tool Description)](#522-powershell-tool-description)
      3. [NotebookEdit (Tool Description)](#523-notebookedit-tool-description)
      4. [REPL tool usage and scripting conventions (System Prompt)](#524-repl-tool-usage-and-scripting-conventions-system-prompt)
      5. [PowerShell edition for 5.1 (System Prompt)](#525-powershell-edition-for-51-system-prompt)
      6. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#526-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
   3. [Browser, Desktop & External Automation](#53-browser-desktop-external-automation)
      1. [Browser & Computer Automation](#531-browser-computer-automation)
         1. [Computer (Tool Description)](#5311-computer-tool-description)
         2. [Computer action (Tool Parameter)](#5312-computer-action-tool-parameter)
         3. [Computer Use MCP (Skill)](#5313-computer-use-mcp-skill)
         4. [Claude in Chrome browser automation (System Prompt)](#5314-claude-in-chrome-browser-automation-system-prompt)
      2. [MCP Resources & Tool Discovery](#532-mcp-resources-tool-discovery)
         1. [MCP resource no content (System Reminder)](#5321-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#5322-mcp-resource-no-displayable-content-system-reminder)
         3. [ToolSearch (second part) [Tool Description]](#5323-toolsearch-second-part-tool-description)
         4. [Chrome browser MCP tools (System Prompt)](#5324-chrome-browser-mcp-tools-system-prompt)
   4. [Hooks, IDE Sync & Notifications](#54-hooks-ide-sync-notifications)
      1. [Hooks System & Lifecycle Events](#541-hooks-system-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#5411-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#5412-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#5413-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#5414-hook-stopped-continuation-system-reminder)
         5. [Hook stopped continuation prefix (System Reminder)](#5415-hook-stopped-continuation-prefix-system-reminder)
         6. [Hook success (System Reminder)](#5416-hook-success-system-reminder)
         7. [Stop hook blocking error (System Reminder)](#5417-stop-hook-blocking-error-system-reminder)
         8. [Agent Hook (Agent Prompt)](#5418-agent-hook-agent-prompt)
         9. [update-config (7-step verification flow) [Skill]](#5419-update-config-7-step-verification-flow-skill)
      2. [IDE Integration & File State Notifications](#542-ide-integration-file-state-notifications)
         1. [File opened in IDE (System Reminder)](#5421-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#5422-lines-selected-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#5423-file-modified-by-user-or-linter-system-reminder)
         4. [File exists but empty (System Reminder)](#5424-file-exists-but-empty-system-reminder)
         5. [File shorter than offset (System Reminder)](#5425-file-shorter-than-offset-system-reminder)
         6. [File truncated (System Reminder)](#5426-file-truncated-system-reminder)
         7. [New diagnostics detected (System Reminder)](#5427-new-diagnostics-detected-system-reminder)
      3. [Notification & Background Monitoring](#543-notification-background-monitoring)
         1. [PushNotification (Tool Description)](#5431-pushnotification-tool-description)
         2. [Background monitor (streaming events) [Tool Description]](#5432-background-monitor-streaming-events-tool-description)
   5. [Code Verification, Review & Debugging](#55-code-verification-review-debugging)
      1. [Code Verification & Testing](#551-code-verification-testing)
         1. [Verify skill (Skill)](#5511-verify-skill-skill)
         2. [Verify skill (runtime-verification) [Skill]](#5512-verify-skill-runtime-verification-skill)
         3. [Verify CLI changes (example for Verify skill) [Skill]](#5513-verify-cli-changes-example-for-verify-skill-skill)
         4. [Verify server/API changes (example for Verify skill) [Skill]](#5514-verify-serverapi-changes-example-for-verify-skill-skill)
         5. [Create verifier skills (Skill)](#5515-create-verifier-skills-skill)
         6. [Verification specialist (Agent Prompt)](#5516-verification-specialist-agent-prompt)
         7. [Hook condition evaluator (stop) [Agent Prompt]](#5517-hook-condition-evaluator-stop-agent-prompt)
      2. [Code Review & Security Analysis](#552-code-review-security-analysis)
         1. [/review-pr slash command (Agent Prompt)](#5521-review-pr-slash-command-agent-prompt)
         2. [/security-review slash command (Agent Prompt)](#5522-security-review-slash-command-agent-prompt)
         3. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#5523-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         4. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#5524-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         5. [Simplify (Skill)](#5525-simplify-skill)
         6. [Advisor tool instructions (System Prompt)](#5526-advisor-tool-instructions-system-prompt)
      3. [Debugging & Diagnostics](#553-debugging-diagnostics)
         1. [Debugging (Skill)](#5531-debugging-skill)
         2. [/stuck slash command (Skill)](#5532-stuck-slash-command-skill)
         3. [Malware analysis after Read tool call (System Reminder)](#5533-malware-analysis-after-read-tool-call-system-reminder)
   6. [Configuration, Permissions & Tool Control](#56-configuration-permissions-tool-control)
      1. [Configuration & Settings Management](#561-configuration-settings-management)
         1. [Config (Tool Description)](#5611-config-tool-description)
         2. [Minimal mode (System Prompt)](#5612-minimal-mode-system-prompt)
         3. [Scratchpad directory (System Prompt)](#5613-scratchpad-directory-system-prompt)
      2. [Tool Execution Control & Permission Handling](#562-tool-execution-control-permission-handling)
         1. [Tool execution denied (System Prompt)](#5621-tool-execution-denied-system-prompt)
         2. [/btw side question (System Reminder)](#5622-btw-side-question-system-reminder)
   7. [Communication, Learning & Response Style](#57-communication-learning-response-style)
      1. [Response Style & Communication Guidelines](#571-response-style-communication-guidelines)
         1. [Communication style (System Prompt)](#5711-communication-style-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#5712-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#5713-tone-and-style-concise-output-—-short-system-prompt)
         4. [Agent thread notes (System Prompt)](#5714-agent-thread-notes-system-prompt)
         5. [How to use the SendUserMessage tool (System Prompt)](#5715-how-to-use-the-sendusermessage-tool-system-prompt)
         6. [Agent Summary Generation (System Prompt)](#5716-agent-summary-generation-system-prompt)
      2. [Learning & Educational Modes](#572-learning-educational-modes)
         1. [Learning mode (System Prompt)](#5721-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#5722-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#5723-request_teach_access-part-of-teach-mode-tool-description)
         4. [Option previewer (System Prompt)](#5724-option-previewer-system-prompt)
         5. [AskUserQuestion (Tool Description)](#5725-askuserquestion-tool-description)
         6. [AskUserQuestion (preview field) [Tool Description]](#5726-askuserquestion-preview-field-tool-description)

---

## 1. Shell, Git & Code Quality

Bash command execution patterns, sandbox security, version control workflows, and software engineering standards that govern how code is written, reviewed, and committed.

### 1.1 Bash & Shell Execution

How bash commands run, persist state, chain operations, and interact with the shell environment across invocations.

#### 1.1.1 Bash Command Execution & Best Practices

Bash commands execute with persistent working directories across calls but stateless shell environments. Effective usage requires chaining dependent commands with && for failure propagation, quoting file paths with spaces, verifying parent directories before creation, and using absolute paths to maintain context. Sleep commands should be minimal and avoid polling background tasks; instead use check commands or wait for completion notifications. Shell initialization loads from user profiles on each invocation.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

##### 1.1.1.2 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain current working directory by using absolute paths and avoiding cd commands unless explicitly requested.

##### 1.1.1.3 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs Claude not to use newlines to separate bash commands.

##### 1.1.1.4 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to run independent bash commands as parallel tool calls in a single message for optimal performance.

##### 1.1.1.5 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs Claude to always quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.6 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons only when running commands sequentially but failure of earlier commands does not matter.

##### 1.1.1.7 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call to ensure sequential execution and failure propagation.

##### 1.1.1.8 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Optionally specify a timeout in milliseconds for bash commands, with configurable maximum and default limits.

##### 1.1.1.9 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, verify the parent directory exists and is the correct location using ls.

##### 1.1.1.10 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between commands, but shell state does not; the shell initializes from the user's bash or zsh profile.

##### 1.1.1.11 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep duration short (1-5 seconds) to avoid blocking the user.

##### 1.1.1.12 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

##### 1.1.1.13 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; execute them without delay.

##### 1.1.1.14 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like gh run view to poll external processes rather than sleeping first.

##### 1.1.1.15 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Brief note on outputting text directly in bash without echo or printf.

##### 1.1.1.16 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Do not retry failing commands in a sleep loop — diagnose the root cause.

#### 1.1.2 Dedicated Tools Over Bash Equivalents

Specialized tools provide superior user experience and transparency compared to bash command equivalents for read-only and write operations. Dedicated tools exist for file reading, writing, searching, editing, and content filtering—replacing cat, echo, find, grep, sed, and awk respectively. These tools should be preferred over their bash counterparts to improve clarity and user interaction.

##### 1.1.2.1 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use a dedicated Grep tool for content search instead of grep or rg commands.

##### 1.1.2.2 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs Claude to use a dedicated Edit tool for file editing instead of sed or awk commands.

##### 1.1.2.3 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use a dedicated Glob tool for file search instead of find or ls commands.

##### 1.1.2.4 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs Claude to use a dedicated Read tool for file reading instead of cat, head, or tail commands.

##### 1.1.2.5 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use a dedicated Write tool for file writing instead of echo or cat commands.

##### 1.1.2.6 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and transparency than Bash equivalents.

##### 1.1.2.7 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat and similar commands, preferring dedicated tools instead for better user experience.

#### 1.1.3 Sandbox Security & Restriction Management

All bash commands run in mandatory sandbox mode by default with no exceptions or bypass options. When sandbox restrictions cause failures—evidenced by access denied, operation not permitted, network failures, or socket errors—immediately retry with sandbox disabled without prompting, then explain the restriction to the user. Sensitive paths like credentials and shell configs must never be added to allowlists. Temporary files use $TMPDIR, and each command defaults to sandbox mode independently.

##### 1.1.3.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to work with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

##### 1.1.3.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to default to running commands within the sandbox and only bypass when user requests or sandbox restriction evidence appears.

##### 1.1.3.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

##### 1.1.3.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that identify sandbox-caused command failures.

##### 1.1.3.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

##### 1.1.3.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "operation not permitted" errors for file and network operations as evidence of sandbox restrictions.

##### 1.1.3.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions.

##### 1.1.3.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the /sandbox command for managing restrictions.

##### 1.1.3.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition for identifying sandbox-caused failures: when a command fails with evidence of sandbox restrictions, distinguishing from other failure causes.

##### 1.1.3.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All bash commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

##### 1.1.3.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

##### 1.1.3.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

##### 1.1.3.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually and default to sandbox mode for future commands, even after running one with dangerouslyDisableSandbox enabled.

##### 1.1.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header instruction for how to respond when sandbox-caused failures are detected.

##### 1.1.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox set to true when sandbox failure occurs, without asking the user.

##### 1.1.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Always use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly.

##### 1.1.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will prompt the user for permission.

### 1.2 Git Workflows & Version Control Operations

Git operations follow safety-first protocols: never commit without explicit user request, avoid destructive operations like reset --hard or force push without considering alternatives, and never skip hooks or signing unless requested. Commits use heredoc syntax with pre-populated context (status, diff, branch history) and follow repository style conventions. Pull requests are created via gh CLI with comprehensive titles and bodies. Git worktrees isolate work when explicitly instructed, and git status represents a conversation snapshot that doesn't update during sessions.

#### 1.2.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives before running destructive git operations like reset --hard or push --force.

#### 1.2.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols for destructive operations, hook handling, file staging, and PR creation via gh command. Emphasizes never committing without explicit user request and avoiding interactive git commands.

#### 1.2.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude to never skip hooks or bypass signing unless explicitly requested by the user.

#### 1.2.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to prefer creating new commits over amending existing ones.

#### 1.2.5 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context (status, diff, branch, recent commits). Analyzes changes, drafts a message following repository style, stages files, and commits using heredoc syntax.

#### 1.2.6 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request with pre-populated git context. Branches from main, commits changes, pushes, and creates or updates a PR with title and body using heredoc syntax.

#### 1.2.7 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

#### 1.2.8 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Identifies git status as a snapshot at conversation start that does not update during the session.

#### 1.2.9 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it only when explicitly instructed by the user or project instructions. Delegates to hooks for VCS-agnostic isolation outside git repositories.

#### 1.2.10 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exit a worktree session created by EnterWorktree and return to the original working directory, optionally keeping or removing the worktree and its branch.

### 1.3 Coding Standards & Software Engineering Practices

Establishes code quality and security discipline: eliminate unused code entirely, validate only at system boundaries, prevent injection attacks and OWASP vulnerabilities, and permit security testing only in authorized contexts. Frames tasks through a software engineering lens.

#### 1.3.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames user requests primarily as software engineering tasks—bug solving, feature addition, refactoring, code explanation—and interprets unclear instructions in that context.

#### 1.3.2 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Requires careful avoidance of security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 issues, with immediate fixes if insecure code is written.

#### 1.3.3 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Directs deletion of unused code completely rather than adding compatibility shims, renamed variables, or removal comments.

#### 1.3.4 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Prohibits error handling for impossible scenarios; validate only at system boundaries like user input and external APIs, trusting internal code and framework guarantees.

#### 1.3.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing requests for destructive techniques, DoS attacks, supply chain compromise, or detection evasion for malicious purposes.

---

## 2. Agent Orchestration & Autonomous Execution

Frameworks for spawning, coordinating, and autonomously operating agents—from multi-agent swarms and parallel batch work to scheduled loops and structured planning before implementation.

### 2.1 Planning Mode & Structured Implementation

Plan mode enables structured exploration and design approval before implementation for non-trivial tasks. Multi-phase workflows combine parallel codebase exploration with architectural design, producing detailed plans that specify file paths, changes, and verification commands within strict limits. Plans are written to files and require user approval before execution. Iterative pair-planning cycles build plans incrementally through targeted questions. Remote planning sessions can produce diagram-rich plans and handle approval, rejection, or teleportation workflows. Subagents remain read-only during planning, and re-entry evaluates existing plans against new requests.

#### 2.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Proactively enter plan mode for non-trivial implementation tasks to explore the codebase and design an approach for user approval before writing code. Use for new features, multiple valid approaches, code modifications, architectural decisions, multi-file changes, unclear requirements, or when user preferences matter.

#### 2.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning and request user approval by reading the plan from the plan file. Use only for implementation tasks requiring code changes, not for research or exploration.

#### 2.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode constraints and guides Claude through a five-phase planning workflow with parallel exploration and design agents, requiring plan file updates and user clarification before execution.

#### 2.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning with the user through cycles of code exploration, plan file updates, and targeted questions, building a detailed plan incrementally before execution.

#### 2.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagent actions to read-only operations and plan file editing while in plan mode, requiring comprehensive answers and clarifying questions.

#### 2.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, requiring evaluation of existing plan against new request and appropriate plan file updates.

#### 2.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Brief notification that Claude has exited plan mode and can now make edits, run tools, and take actions.

#### 2.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and prompts continuation if relevant.

#### 2.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly after implementation.

#### 2.1.10 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes the implementation plan to file with file paths, specific changes, function references, and verification command within a 40-line limit.

#### 2.1.11 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore the codebase, produce diagram-rich plans via ExitPlanMode, and implement with pull requests upon approval or handle teleportation back to the user's terminal.

#### 2.1.12 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Configures remote planning sessions to explore the codebase, produce implementation plans via ExitPlanMode, and handle approval, rejection, or teleportation back to the user's local terminal.

#### 2.1.13 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Directs Claude to create exceptionally detailed implementation plans using parallel multi-agent exploration, critique, and conditional execution based on user approval or teleportation.

#### 2.1.14 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases, identifies patterns and conventions, and designs step-by-step implementation plans with critical file identification and architectural trade-off analysis.

### 2.2 Multi-Agent Coordination

Spawning and managing parallel subagents, inter-agent messaging, team delegation patterns, and graceful swarm shutdown.

#### 2.2.1 Multi-Agent Coordination & Subagent Management

Orchestrates parallel execution of specialized subagents through delegation patterns, messaging protocols, and team coordination. Covers spawning isolated workers, managing async task execution, inter-agent communication, and graceful shutdown of agent swarms.

##### 2.2.1.1 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on when to use subagents effectively, emphasizing parallelization and context protection while avoiding duplication of work already delegated.

##### 2.2.1.2 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Guides Claude on writing effective subagent prompts by providing sufficient context, explaining goals and constraints, and avoiding delegation of synthesis work that should remain with the main agent.

##### 2.2.1.3 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results through the Agent tool.

##### 2.2.1.4 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates self-contained prompt patterns for delegating tasks to subagents with clear goals, context, and expected output format.

##### 2.2.1.5 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Instructs when to fork subagents for open-ended questions and independent parallel work, prohibits reading fork output mid-flight or fabricating results, and emphasizes writing specific directives rather than re-explaining background.

##### 2.2.1.6 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance on launching and managing subagents, including background execution, resumption via messaging, worktree isolation, and parallel agent coordination.

##### 2.2.1.7 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages teams and coordinates multiple agents working in parallel, supporting task assignment, automatic message delivery, idle state handling, and team configuration discovery.

##### 2.2.1.8 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages between agents in a team, supporting protocol responses for shutdown and plan approval requests, with automatic message delivery to teammates.

##### 2.2.1.9 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown messages with optional file attachments to the user, supporting status labels to distinguish routine replies from proactive notifications.

##### 2.2.1.10 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from a shared task list, preferring lowest ID tasks and respecting task dependencies.

##### 2.2.1.11 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all active members to be terminated first.

##### 2.2.1.12 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity and role within a team, providing team resources and messaging protocols for coordination with teammates.

##### 2.2.1.13 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to gracefully shut down all team members and clean up before returning a final response in non-interactive mode.

##### 2.2.1.14 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use the SendMessage tool for communication with teammates, with broadcast capability for team-wide messages.

##### 2.2.1.15 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

Forked worker subagent that executes a single directive from the parent agent and reports back concisely without spawning further subagents or follow-up questions.

##### 2.2.1.16 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for implementing changes: simplify code, run unit tests, test end-to-end, commit and push, then report the PR URL for coordinator tracking.

#### 2.2.2 Batch Operations & Parallel Work Orchestration

Coordinates large-scale parallelizable work by decomposing tasks into independent units, determining test strategies, and spawning concurrent worker agents while tracking overall progress. Maximizes efficiency through parallel execution of independent operations and sequential handling of dependent ones.

##### 2.2.2.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining e2e test recipes, and spawning background worker agents. Tracks progress and reports final status across all units.

##### 2.2.2.2 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs making independent tool calls in parallel to increase efficiency, while running dependent calls sequentially when one must complete before another starts.

### 2.3 Scheduling & Recurring Execution

Cron jobs, dynamic loops, event-driven wakeups, and autonomous execution of established work with reversibility constraints.

#### 2.3.1 Scheduling, Cron Jobs & Loop Execution

Schedules recurring and self-paced task execution through cron jobs, dynamic loops, and event-driven wakeups. Supports both cloud-based scheduling for long-running tasks and autonomous loop execution with fallback heartbeats and load distribution.

##### 2.3.1.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron-based jobs using standard 5-field cron syntax in the user's local timezone. Avoid :00 and :30 minute marks when possible to distribute load, and use jitter and off-minute scheduling to prevent fleet-wide synchronization.

##### 2.3.1.2 [ScheduleWakeup (/loop dynamic mode) [Tool Description]](system-prompts/tool-description-schedulewakeup-loop-dynamic-mode.md)

Schedules resumption of self-paced /loop iterations, supporting both user-prompted and autonomous loops via sentinel values for dynamic task scheduling.

##### 2.3.1.3 [Snooze (delay and reason guidance) [Tool Description]](system-prompts/tool-description-snooze-delay-and-reason-guidance.md)

Schedules resumption in /loop dynamic mode with guidance on choosing delays relative to the 5-minute prompt cache TTL and writing informative reason fields for telemetry.

##### 2.3.1.4 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into an interval and prompt, converts the interval to a cron expression, schedules a recurring task, and immediately executes the prompt.

##### 2.3.1.5 [/loop slash command (dynamic mode) [Skill]](system-prompts/skill-loop-slash-command-dynamic-mode.md)

Parses user input into an interval and prompt for scheduling recurring or dynamically self-paced loop executions with three parsing rules.

##### 2.3.1.6 [/loop self-pacing mode (Skill)](system-prompts/skill-loop-self-pacing-mode.md)

Instructs Claude to self-pace a recurring loop by arming event monitors as primary wake signals and scheduling fallback heartbeat delays between iterations.

##### 2.3.1.7 [/loop cloud-first scheduling offer (Skill)](system-prompts/skill-loop-cloud-first-scheduling-offer.md)

Decision tree for offering cloud-based scheduling before falling back to local session loops when the user invokes /loop with long intervals or daily phrasing.

##### 2.3.1.8 [Dynamic pacing loop execution (Skill)](system-prompts/skill-dynamic-pacing-loop-execution.md)

Executes a self-pacing loop by running tasks, arming persistent event monitors as primary wake signals, scheduling fallback heartbeat delays, and handling task notifications.

##### 2.3.1.9 [Schedule recurring cron and execute immediately (compact) [Skill]](system-prompts/skill-schedule-recurring-cron-and-execute-immediately-compact.md)

Creates a recurring cron job, confirms the schedule with the user, and immediately executes the parsed prompt without waiting for the first cron fire.

##### 2.3.1.10 [Schedule recurring cron and run immediately (Skill)](system-prompts/skill-schedule-recurring-cron-and-run-immediately.md)

Converts an interval to a cron expression, schedules a recurring task, confirms to the user, and immediately executes the task without waiting for the first cron fire.

##### 2.3.1.11 [Loop wakeup not scheduled (System Reminder)](system-prompts/system-reminder-loop-wakeup-not-scheduled.md)

Instructs Claude on handling /loop dynamic mode wakeups that were not scheduled, distinguishing between cases with and without the prompt field set.

##### 2.3.1.12 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via Anthropic cloud API, handling creation, updates, listing, and execution of isolated remote sessions with git repos, MCP connectors, and environment configuration.

#### 2.3.2 Autonomous Execution & Auto Mode

Enables Claude to act independently on established work—completing PRs, fixing CI failures, advancing review threads—while respecting reversibility constraints and avoiding destructive changes without explicit authorization. Balances continuous operation with trust preservation through careful risk assessment.

##### 2.3.2.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous execution where Claude acts immediately on reasonable assumptions, minimizes interruptions, prefers action over planning, and avoids destructive or data-exfiltrating actions without explicit user confirmation.

##### 2.3.2.2 [Autonomous loop check (System Prompt)](system-prompts/system-prompt-autonomous-loop-check.md)

Guides timer-based autonomous invocations to advance established work—finishing PRs, addressing review comments, fixing CI failures—while avoiding inventing new work or making irreversible changes without clear authorization. Emphasizes trust preservation and distinguishes between continuing established work and unauthorized initiatives.

##### 2.3.2.3 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Emphasizes careful consideration of reversibility and blast radius: freely take local reversible actions like editing and testing, but confirm before destructive operations, hard-to-reverse actions, shared-system changes, or external communications. Investigate obstacles rather than using destructive shortcuts.

##### 2.3.2.4 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Authorizes Claude to complete ambitious tasks that would otherwise be too complex or time-consuming, deferring to user judgment on scope.

##### 2.3.2.5 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability. Evaluates allow, soft_deny, and environment rule categories to ensure the LLM classifier can reliably auto-approve or block tool calls.

### 2.4 Agent Creation & Persona Design

Builds specialized autonomous agents through persona engineering and system prompt architecture. Agents are designed with explicit decision frameworks and operational manuals, supported by utilities for command documentation, injection detection, and predictive prompt suggestions to guide user interactions.

#### 2.4.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces a JSON specification with agent identifier, usage triggers with examples, and a complete operational manual for autonomous task execution.

#### 2.4.2 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or flag-heavy commands.

#### 2.4.3 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attacks in bash commands. Extracts the safe prefix from a command string or flags injection attempts, supporting environment variables, git, npm, and other common tools.

#### 2.4.4 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what the user would naturally type next based on recent messages and conversation context, returning a 2-12 word suggestion in the user's style or silence if the next step is unclear.

#### 2.4.5 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and instructs it to do so with appropriate context.

---

## 3. Session, Memory & Task Management

Persistent context across sessions—memory files, conversation summaries, task tracking, usage analytics, and session state—that enable continuity and progress visibility.

### 3.1 Memory & Knowledge Persistence

Structured memory files that capture user profiles, institutional knowledge, and domain learning across sessions, with consolidation and staleness management.

#### 3.1.1 Memory Management & Session Persistence

Maintains persistent user profiles and institutional knowledge across sessions through structured memory files that capture user context, work guidance, and domain-specific learning. Includes consolidation, deduplication, and staleness verification to keep memories accurate and relevant.

##### 3.1.1.1 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about the user's role, goals, knowledge, and preferences across sessions to enable personalized collaboration.

##### 3.1.1.2 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Records user guidance on work approaches from both successes and failures, checking for contradictions with team memories before saving private feedback.

##### 3.1.1.3 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Captures user guidance on work approaches from both successes and failures, with explicit instruction to save new memories noting contradictions with team feedback.

##### 3.1.1.4 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs verification of memory records against current file state, deleting stale memories that conflict with observed reality and trusting current observations over outdated records.

##### 3.1.1.5 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines memory field for capturing user role, goals, responsibilities, and knowledge to enable tailored assistance while avoiding negative judgments or irrelevant details.

##### 3.1.1.6 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including memory update instructions in agent system prompts so agents build institutional knowledge across conversations in their domain.

##### 3.1.1.7 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Guides memory consolidation for shared team memories: skim team/ directory for duplicates, merge near-duplicates conservatively, avoid deleting team memories unless clearly contradicted or superseded, and never promote personal memories to team/ without explicit user choice.

##### 3.1.1.8 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs a multi-phase memory consolidation pass: orients on existing memories, gathers recent signal from logs and transcripts, merges updates into topic files, and prunes the index to stay under size limits.

##### 3.1.1.9 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs a memory pruning pass by deleting stale or invalidated memories and collapsing duplicates, while being conservative with shared team memories.

##### 3.1.1.10 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and extracts 1-2 sentence facts relevant to each query, returning JSON with relevant facts and cited filenames. Avoids restating queries and draws only from memory file content.

##### 3.1.1.11 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to attach for the main agent, using conservative matching on query content rather than surface keywords or user profile overlap.

##### 3.1.1.12 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file at a specified path with optional type description.

##### 3.1.1.13 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file from an attachment object.

##### 3.1.1.14 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing schedules, creating a cron task, and running an immediate consolidation to organize memories.

##### 3.1.1.15 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory `summary.md` files documenting current state, task specification, files, workflow, errors, and key results.

#### 3.1.2 Session Memory Update & Note-Taking

Maintains persistent session context by updating memory files with structured, information-dense content while preserving formatting and respecting token constraints.

##### 3.1.2.1 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations, preserving exact structure with headers and italic descriptions while adding detailed, info-dense content within token limits.

### 3.2 Conversation Summarization & Session State

Compressing conversation history into resumable summaries, tracking session metadata, token budgets, and reasoning depth calibration.

#### 3.2.1 Conversation Summarization & Context Compaction

Compresses conversation history into structured summaries that preserve technical details, code changes, errors, and pending work to enable efficient task resumption across sessions. Organizes context into standardized sections covering intent, discoveries, blockers, and next steps.

##### 3.2.1.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections: primary intent, technical concepts, files and code, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps. Includes analysis tags for thorough thought process documentation.

##### 3.2.1.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages (after retained context) into nine sections: primary intent, technical concepts, files and code, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps.

##### 3.2.1.3 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured summary format for partial conversation compaction, requiring analysis of user requests, technical concepts, files, errors, and pending tasks to enable continuation in new sessions.

##### 3.2.1.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Defines structure for continuation summaries enabling efficient task resumption: task overview, current state with file paths, important discoveries and decisions, next steps with blockers, and context to preserve. Emphasizes completeness to prevent duplicate work and repeated mistakes.

##### 3.2.1.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before conversation summarization but is too large to include, directing it to use the Read tool if needed.

#### 3.2.2 Session Management & State Tracking

Metadata and resource management for coding sessions, including cross-machine continuity, token and budget monitoring, active skill tracking, and session naming. Calibrates reasoning depth based on task complexity and provides search capabilities across conversation history.

##### 3.2.2.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

##### 3.2.2.2 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 3.2.2.3 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including spent, total, and remaining amounts.

##### 3.2.2.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude to follow specific output style guidelines that are currently active.

##### 3.2.2.5 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked in the current session and instructs Claude to continue following their guidelines.

##### 3.2.2.6 [Thinking frequency tuning (System Reminder)](system-prompts/system-reminder-thinking-frequency-tuning.md)

Instructs Claude to calibrate internal reasoning frequency based on task complexity, using extended thinking for complex tasks and direct responses for simple ones.

##### 3.2.2.7 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates a concise 3-7 word sentence-case title capturing the main topic or goal of a coding session, returning JSON with a single title field.

##### 3.2.2.8 [/rename auto-generate session name (Agent Prompt)](system-prompts/agent-prompt-rename-auto-generate-session-name.md)

Auto-generates a short kebab-case session name (2-4 words) capturing the main conversation topic, returning JSON with a name field.

##### 3.2.2.9 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent that searches past Claude Code conversation sessions by scanning .jsonl transcript files with Grep and Read tools, returning matching session IDs ordered by relevance.

### 3.3 Task Tracking & Progress Management

Structures work into tracked task lists with state management (pending/in-progress/completed) to enable incremental progress visibility and prevent duplicate effort. Supports breaking down complex work into discrete steps with clear descriptions.

#### 3.3.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with state tracking (pending/in_progress/completed), requiring both imperative and active-form descriptions for each task.

#### 3.3.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions with imperative subjects and descriptions, used for multi-step tasks, plan mode, and user-provided task lists.

#### 3.3.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite for breaking down work and tracking progress, marking tasks complete individually rather than in batches.

#### 3.3.4 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for tracking progress on tasks when relevant.

#### 3.3.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant to current work.

### 3.4 Analytics, Support & Commands

Usage analytics for identifying friction and recommending workflows, help and feedback routing, and slash command invocation for named skills.

#### 3.4.1 Usage Insights & Analytics

Analytics and reporting systems that extract session data into actionable insights, identifying friction points, recommending feature adoption, and surfacing optimization opportunities. Generates coaching-oriented reports highlighting what's working, barriers to overcome, and ambitious future workflows.

##### 3.4.1.1 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts by counting user-requested goals, analyzing explicit satisfaction signals, and categorizing friction points like misunderstood requests or buggy code.

##### 3.4.1.2 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions from Claude Code usage data, recommending CLAUDE.md additions, features to try (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to the user's workflow.

##### 3.4.1.3 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates four-part usage insights summary: what's working (unique style and impact), what's hindering (Claude and user-side friction), quick wins (features to try), and ambitious workflows for future capable models. Maintains coaching tone without overwhelming detail.

##### 3.4.1.4 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes usage data to identify three friction categories with concrete examples, explaining patterns and suggesting improvements in second person.

##### 3.4.1.5 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies three ambitious future opportunities for autonomous AI-assisted development, describing what's possible, how to try it, and providing copyable prompts for parallel agents and iterative workflows.

##### 3.4.1.6 [/insights report output (Skill)](system-prompts/skill-insights-report-output.md)

Formats and displays usage report results after the user runs the /insights slash command, providing a shareable report URL and summary.

#### 3.4.2 Skills System & Slash Commands

Enables command-driven functionality by invoking named skills with optional arguments in response to user requests.

##### 3.4.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Invokes skills (slash commands) within the main conversation by matching user requests to available skill names and passing optional arguments.

#### 3.4.3 Help, Feedback & User Support

Directs Claude to surface help resources and feedback mechanisms when users request assistance, enabling self-service support discovery.

##### 3.4.3.1 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

---

## 4. Claude API, SDK & Application Development

Reference documentation, SDK implementations, and architectural guidance for building Claude-powered applications—from raw HTTP calls to managed agent sessions and GitHub CI/CD integration.

### 4.1 Core API & SDK Reference

Language-specific SDK implementations and HTTP reference covering client initialization, streaming, vision, tool use, prompt caching, and extended thinking across Python, TypeScript, Go, Java, and more.

#### 4.1.1 Claude API SDK Reference Documentation

Language-specific SDK implementations and raw HTTP reference for the Claude API, covering client initialization, streaming, vision, tool use, prompt caching, extended thinking, and cost optimization across Python, TypeScript, Go, Java, C#, PHP, Ruby, and cURL. Includes model catalog and error handling reference.

##### 4.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization strategies.

##### 4.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization.

##### 4.1.1.3 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for cURL and raw HTTP requests, covering basic messages, streaming, tool use, prompt caching, extended thinking, and required headers.

##### 4.1.1.4 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, streaming, tool use with BetaToolRunner, manual loops, thinking blocks, prompt caching, server-side tools, and context editing.

##### 4.1.1.5 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking blocks, annotated tool classes with BetaToolRunner, memory tool handler, prompt caching, and structured output.

##### 4.1.1.6 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking blocks, tool use with manual JSON schemas, prompt caching, structured output, and server-side tools with beta namespace support.

##### 4.1.1.7 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including client initialization for standard and cloud providers (Bedrock, Vertex, Foundry), streaming, tool runner, extended thinking, prompt caching, and structured output.

##### 4.1.1.8 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including client initialization, basic requests, streaming, beta tool runner with annotated classes, and prompt caching.

##### 4.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact IDs, aliases, context windows, and pricing; includes programmatic model discovery via Models API for live capability data.

##### 4.1.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for HTTP error codes returned by the Claude API with common causes, handling strategies, and SDK exception classes for error handling.

#### 4.1.2 Tool Use, Streaming & Files API Documentation

Comprehensive reference for implementing tool calling, real-time streaming, and file handling in Claude applications, including tool runners, agentic loops, batch processing, and prompt caching optimization patterns across Python and TypeScript.

##### 4.1.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use with the Claude API including tool definitions, tool choice, best practices, and server-side tools like code execution and web search.

##### 4.1.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner, manual agentic loop, code execution, and structured outputs with Pydantic schemas.

##### 4.1.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference including tool runner, manual agentic loop, code execution, and structured outputs with Zod schemas.

##### 4.1.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference including sync/async streaming and handling different content types like text, thinking blocks, and tool use.

##### 4.1.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming and handling different content types like text, thinking blocks, and tool use.

##### 4.1.2.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files, using them in messages with citations, managing files, and end-to-end examples with PDFs and images.

##### 4.1.2.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages, and managing files with list, delete, and download operations.

##### 4.1.2.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference including batch creation, status polling, and result retrieval at 50% cost for asynchronous message processing.

##### 4.1.2.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Document on how to design prompt-building code for effective caching, including placement patterns and anti-patterns that silently invalidate cache.

### 4.2 Managed Agents API Documentation

Complete reference for building and operating long-lived agent applications with session-based architecture, covering agent creation, environment setup, event streaming, tool integration, file management, and client-side patterns across Python, TypeScript, and raw HTTP.

#### 4.2.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Provides comprehensive overview of the Managed Agents API architecture, mandatory agent-then-session flow, beta headers, documentation reading guide, and common pitfalls.

#### 4.2.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Reference documentation for the Managed Agents API covering core concepts (Agents, Sessions, Environments, Containers), lifecycle, versioning, endpoints, and usage patterns.

#### 4.2.3 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive reference for Managed Agents API endpoints, SDK methods, request/response schemas, error handling, and rate limits across all resources.

#### 4.2.4 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference documentation covering Managed Agents environments, file resources, GitHub repository mounting, and the Files API with SDK examples.

#### 4.2.5 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Reference guide for sending and receiving events on managed agent sessions, including streaming, polling, reconnection, message queuing, interrupts, and event payload details.

#### 4.2.6 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference documentation covering the Managed Agents SDK's tool types (agent toolset, MCP, custom), permission policies, vault credential management, and skills API for building specialized agents.

#### 4.2.7 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Reference guide of common client-side patterns for driving Managed Agent sessions including stream reconnection, idle-break gating, tool confirmations, interrupts, and custom tools.

#### 4.2.8 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Reference guide for using the Anthropic Python SDK to create and manage agents, sessions, environments, streaming, custom tools, files, and MCP server integration.

#### 4.2.9 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

Reference guide for using the Anthropic TypeScript SDK to create and manage agents, sessions, environments, streaming, custom tools, file uploads, and MCP server integration.

#### 4.2.10 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

Provides cURL and raw HTTP request examples for the Managed Agents API including environment, agent, and session lifecycle operations.

### 4.3 Application Architecture & Design

Architectural decisions, SDK usage patterns, API migration strategies, and codebase exploration agents for building production Claude applications.

#### 4.3.1 Building LLM Applications & Agent Design

Comprehensive resources for developing Claude-powered applications and agents, spanning SDK usage patterns, architectural design decisions, API migration strategies, and interactive guidance through official documentation. Covers tool composition, context optimization, and model-specific implementation details.

##### 4.3.1.1 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Guides Claude in building LLM-powered applications using the Anthropic SDK, covering language detection, API surface selection, model defaults, thinking/effort configuration, and documentation reading.

##### 4.3.1.2 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide covering decision heuristics for building agents on the Claude API, including tool surface design, context management, caching strategies, and composing tool calls.

##### 4.3.1.3 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation to relevant files and sections.

##### 4.3.1.4 [Model migration guide (Skill)](system-prompts/skill-model-migration-guide.md)

Comprehensive guide for migrating code to newer Claude models, covering breaking changes, deprecated parameters, per-SDK syntax, prompt-behavior shifts, and detailed checklists for Opus 4.6, Sonnet 4.6, and Opus 4.7.

##### 4.3.1.5 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources including models, features, tools, and managed agents.

##### 4.3.1.6 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with code examples and specific documentation URLs.

#### 4.3.2 Codebase Exploration & Analysis Agents

Specialized agents for fast, efficient codebase navigation and analysis, supporting pattern matching, code search, and multi-step investigation tasks. Designed for read-only exploration with parallel execution and documentation generation capabilities.

##### 4.3.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file pattern searches, code keyword searches, and codebase analysis. Supports thoroughness levels (quick, medium, very thorough) and spawns parallel tool calls for efficiency.

##### 4.3.2.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases. Avoids creating files unless necessary and reports findings concisely to the caller.

##### 4.3.2.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files capturing common build/test commands, high-level architecture, and codebase conventions for future Claude Code instances.

### 4.4 Setup, Onboarding & CI/CD

End-to-end environment configuration, team onboarding workflows, and GitHub Actions integration for AI-assisted development pipelines.

#### 4.4.1 Onboarding, Setup & Configuration

End-to-end setup and configuration workflows for Claude Code environments, including repository initialization, permission management, team onboarding, and Managed Agent configuration. Guides users through codebase analysis, skill creation, and iterative refinement of development environments.

##### 4.4.1.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md, skills, and hooks in a repository through codebase exploration, user interviews, and iterative proposal refinement across eight phases.

##### 4.4.1.2 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Modifies Claude Code configuration by updating settings.json files, with guidance on when hooks are required versus memory, and careful merging of existing settings.

##### 4.4.1.3 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding new teammates to a team's Claude Code setup, walking them through usage stats, setup checklists, MCP servers, skills, and team tips in a warm conversational style.

##### 4.4.1.4 [Generate permission allowlist from transcripts (Skill)](system-prompts/skill-generate-permission-allowlist-from-transcripts.md)

Analyzes session transcripts to extract frequently used read-only tool patterns and adds them to the project's settings.json permission allowlist to reduce permission prompts.

##### 4.4.1.5 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides (ONBOARDING.md) by analyzing usage data, classifying sessions into work types (build feature, debug, improve quality, analyze data, plan design, prototype, write docs), and iterating collaboratively with the guide creator.

##### 4.4.1.6 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview script guiding users through Managed Agent configuration: selecting tools (prebuilt, MCP, custom), skills, files, repos, environment settings, and vault credentials. Emits setup and runtime code in Python, TypeScript, or cURL.

##### 4.4.1.7 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell configs, converting escape sequences to shell commands, and updating settings.json with custom statusLine configuration.

##### 4.4.1.8 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable session processes into reusable skills through analysis, user interviews, and SKILL.md generation with frontmatter, steps, success criteria, and execution modes.

#### 4.4.2 GitHub Integration & CI/CD

Automation templates for integrating Claude Code into GitHub workflows, enabling AI-assisted development through @mention triggers in issues and pull requests with configurable permissions and custom prompts.

##### 4.4.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code via @claude mentions in issues, PRs, and comments with configurable permissions and optional custom prompts.

##### 4.4.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining functionality, security model, and how to interact with Claude via @mentions.

---

## 5. Tools, Environment & User Experience

The full toolkit available within Claude Code—file operations, scripting environments, web retrieval, IDE integration, hooks, notifications, and communication guidelines that shape the development experience.

### 5.1 File, Search & Code Intelligence Tools

Reading diverse file formats, precise string-replacement editing, regex search, language server navigation, and semantic code analysis.

#### 5.1.1 File System Tools & Operations

Provides comprehensive file manipulation and code intelligence: read diverse formats including images and PDFs, edit via precise string replacement, search with regex and filtering, and navigate code structure through language server capabilities. Supports both local filesystem operations and semantic code analysis.

##### 5.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges), Jupyter notebooks, and screenshots, defaulting to the first 100 lines unless otherwise specified.

##### 5.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, preferring the Edit tool for modifications and avoiding creation of documentation files unless explicitly requested.

##### 5.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read tool output and preferring edits to existing files over creating new ones.

##### 5.1.1.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Describes a ripgrep-based search tool with support for regex patterns, file filtering via glob or type, multiple output modes, and multiline matching capabilities.

##### 5.1.1.5 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Documents Language Server Protocol operations for code intelligence including symbol navigation, references, hover info, call hierarchies, and implementations across workspace and document scopes.

#### 5.1.2 Web Fetching & Search Tools

Retrieves and processes web content to supplement Claude's knowledge. WebFetch converts HTML to markdown with caching, WebSearch queries current information with mandatory source attribution, and a summarizer agent distills verbose results while enforcing quote limits and respecting trust boundaries.

##### 5.1.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with a small model, supporting URL redirects and 15-minute caching.

##### 5.1.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond Claude's knowledge cutoff, requiring mandatory source citations in responses and supporting domain filtering.

##### 5.1.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose WebFetch output for the main model, enforcing strict quote limits and paraphrasing for untrusted domains while respecting open-source licenses.

### 5.2 Scripting, REPL & Notebook Tools

Interactive programming environments for composing and executing code within Claude Code. JavaScript REPL enables async scripting with tool composition in a sealed VM, PowerShell executes system commands with syntax guidance, and NotebookEdit manipulates Jupyter cells for data analysis workflows.

#### 5.2.1 [REPL (Tool Description)](system-prompts/tool-description-repl.md)

JavaScript programming interface for composing Claude Code tool calls as async functions, supporting looping, branching, parallel operations, and custom tool registration within a sealed VM context.

#### 5.2.2 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with timeout and output limits, emphasizing use of specialized tools for file operations and providing syntax guidance for cmdlets, variables, pipes, and registry access.

#### 5.2.3 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing content at specified indices, supporting insert and delete modes for interactive data analysis documents.

#### 5.2.4 [REPL tool usage and scripting conventions (System Prompt)](system-prompts/system-prompt-repl-tool-usage-and-scripting-conventions.md)

Instructs dense JavaScript scripting in REPL for investigation with shorthands for shell, file reads, and code search, batching rules, and API reference for efficient codebase exploration.

#### 5.2.5 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Provides Windows PowerShell 5.1 compatibility guidance covering pipeline operators, ternary operators, stderr redirection, file encoding, and JSON conversion limitations.

#### 5.2.6 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Instructs against unnecessary `Start-Sleep` commands in PowerShell; use `run_in_background` for long-running tasks, diagnose failures rather than retry loops, and avoid polling background tasks.

### 5.3 Browser, Desktop & External Automation

Direct Chrome browser and desktop control via mouse and keyboard, plus MCP tool discovery for dynamically loading external tool schemas.

#### 5.3.1 Browser & Computer Automation

Direct control of Chrome browser and desktop through mouse, keyboard, and screenshot feedback, with specialized guidance for GIF recording, console debugging, dialog handling, and session management during automation tasks.

##### 5.3.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Use mouse and keyboard to interact with a Chrome browser and take screenshots. Consult screenshots before clicking to determine element coordinates, and center the cursor tip on elements.

##### 5.3.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines mouse and keyboard actions for Chrome browser automation including clicks, typing, scrolling, zooming, and hover interactions.

##### 5.3.1.3 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools including tool selection tiers, app access tiers, link safety, and financial action restrictions.

##### 5.3.1.4 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides guidelines for browser automation including GIF recording with smooth frame capture, console debugging with pattern filtering, avoiding JavaScript dialogs that block extension commands, and session startup with tab context retrieval. Emphasizes staying focused on specific tasks and seeking user guidance when encountering failures or unexpected complexity.

#### 5.3.2 MCP Resources & Tool Discovery

Mechanisms for locating and loading tool schemas dynamically through query-based discovery, with handling for resources that lack displayable content. Enables deferred tool loading via ToolSearch before execution.

##### 5.3.2.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource has no content.

##### 5.3.2.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

##### 5.3.2.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by matching queries against tool names and keywords, supporting exact selection and ranked keyword search with optional name requirements.

##### 5.3.2.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the tool name in the query format.

### 5.4 Hooks, IDE Sync & Notifications

Lifecycle event hooks that intercept tool use and permissions, real-time IDE state synchronization, background monitoring, and user alert delivery.

#### 5.4.1 Hooks System & Lifecycle Events

Event-driven automation framework that intercepts Claude Code lifecycle events (tool use, permissions, notifications, completion) and executes custom command, prompt, or agent hooks to inject logic, modify behavior, and enforce stop conditions. Hooks receive structured input and return control decisions and context modifications.

##### 5.4.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines hook system for Claude Code lifecycle events: command, prompt, and agent hook types execute at PermissionRequest, PreToolUse, PostToolUse, PostToolUseFailure, Notification, Stop, and other events. Hooks receive JSON input and return control decisions, system messages, and context injection.

##### 5.4.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution.

##### 5.4.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 5.4.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Message indicating that a hook has stopped continuation with a reason.

##### 5.4.1.5 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for hook stopped continuation messages.

##### 5.4.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Success message from a hook execution.

##### 5.4.1.7 [Stop hook blocking error (System Reminder)](system-prompts/system-reminder-stop-hook-blocking-error.md)

Reports an error from a blocking hook command that prevented execution.

##### 5.4.1.8 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning a structured result indicating whether the agent completed its plan.

##### 5.4.1.9 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Guides Claude through a 7-step process to construct and verify hooks for Claude Code, ensuring they work correctly in the user's specific project environment.

#### 5.4.2 IDE Integration & File State Notifications

Real-time synchronization layer that notifies Claude of IDE state changes—file opens, selections, external modifications, and diagnostic updates—along with boundary warnings for truncated or malformed file reads. Enables context-aware responses to user actions and external code changes.

##### 5.4.2.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 5.4.2.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific lines selected by the user in the IDE with truncated content preview.

##### 5.4.2.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified and provides a snippet of changes to account for in subsequent work.

##### 5.4.2.4 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warning that a file exists but contains no content.

##### 5.4.2.5 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warning that a file read offset exceeds the file's actual length, providing the file's total line count.

##### 5.4.2.6 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs it to use the Read tool for additional content if needed.

##### 5.4.2.7 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues in the codebase.

#### 5.4.3 Notification & Background Monitoring

Alerts users to significant events from long-running tasks. Desktop notifications and optional phone alerts via Remote Control surface important milestones, while background monitoring streams stdout events as chat notifications with filtering to avoid routine progress spam.

##### 5.4.3.1 [PushNotification (Tool Description)](system-prompts/tool-description-pushnotification.md)

Sends desktop notifications to the user's terminal and optionally to their phone via Remote Control, intended for significant events requiring user attention rather than routine progress updates.

##### 5.4.3.2 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Explains how to stream stdout events from long-running scripts as chat notifications, with guidelines on script quality, output filtering, and coverage for terminal states.

### 5.5 Code Verification, Review & Debugging

Runtime-based code validation, security vulnerability analysis, agent authorization safeguards, and diagnostic log analysis for resolving session issues.

#### 5.5.1 Code Verification & Testing

Runtime-based verification that validates code changes by executing applications, driving them to modified code paths, and observing actual behavior rather than relying on test suites. Includes adversarial testing strategies, CLI and API verification examples, and automated verifier skill creation for comprehensive coverage.

##### 5.5.1.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow that validates code changes by running the app, driving it to the changed code, and capturing evidence through runtime observation rather than tests.

##### 5.5.1.2 [Verify skill (runtime-verification) [Skill]](system-prompts/skill-verify-skill-runtime-verification.md)

Alias of the Verify skill registered under /runtime-verification, providing opinionated runtime verification by building, running, and observing actual behavior rather than tests.

##### 5.5.1.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying a CLI change by building, running with test arguments, and comparing output against expected behavior.

##### 5.5.1.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying a server/API change by starting the server, sending requests with curl, and capturing response status and headers.

##### 5.5.1.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Prompt for creating verifier skills for the Verify agent to automatically verify code changes including web UI, CLI, and API verification.

##### 5.5.1.6 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial verification subagent that tests implementations by running builds, tests, linters, and adversarial probes (boundary values, concurrency, idempotency), issuing PASS/FAIL/PARTIAL verdicts with mandatory evidence.

##### 5.5.1.7 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks by reading conversation transcripts and judging whether user-provided conditions are satisfied, returning JSON with ok status and quoted evidence.

#### 5.5.2 Code Review & Security Analysis

Multi-faceted code examination covering quality assessment, vulnerability detection, and autonomous agent action authorization. Combines traditional code review with focused security engineering to identify exploitable issues while filtering false positives, and enforces safeguards against prompt injection and scope creep.

##### 5.5.2.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Expert code reviewer that fetches PR details and diffs using gh CLI, then provides thorough analysis covering code quality, style, improvements, risks, correctness, conventions, performance, test coverage, and security.

##### 5.5.2.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Senior security engineer conducting focused vulnerability assessment of PR changes, identifying high-confidence exploitable issues in input validation, authentication, crypto, injection, and data exposure with minimal false positives.

##### 5.5.2.3 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security classifier that evaluates autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with user intent as final signal and high evidence bar for authorization.

##### 5.5.2.4 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules covering destructive operations, credential leakage, data exfiltration, and permission escalation, plus allow exceptions for test artifacts and local operations.

##### 5.5.2.5 [Simplify (Skill)](system-prompts/skill-simplify.md)

Reviews changed files for code reuse, quality, and efficiency by launching three parallel review agents that identify redundancy, hacky patterns, and performance issues.

##### 5.5.2.6 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the advisor tool, which forwards the entire conversation to a stronger reviewer model before substantive work and when stuck or declaring completion.

#### 5.5.3 Debugging & Diagnostics

Identifies and resolves session issues through log analysis, process monitoring, and performance assessment, while applying security judgment to malware encounters.

##### 5.5.3.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Guides Claude through debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 5.5.3.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, analyzing CPU/memory/state, and posting diagnostic reports to Slack.

##### 5.5.3.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code.

### 5.6 Configuration, Permissions & Tool Control

Global and project-level settings, feature toggles, tool execution permission handling, and workarounds when tool access is restricted.

#### 5.6.1 Configuration & Settings Management

Controls Claude Code behavior through global and project-level settings. Configuration stores preferences like theme and model selection, minimal mode disables non-essential features for constrained environments, and scratchpad isolation manages temporary files within session scope.

##### 5.6.1.1 [Config (Tool Description)](system-prompts/tool-description-config.md)

Get or set Claude Code configuration settings stored globally in ~/.claude.json or per-project in settings.json, including theme, editor mode, model, and permissions.

##### 5.6.1.2 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Minimal mode skips hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags for authentication and configuration.

##### 5.6.1.3 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs use of a dedicated session-specific scratchpad directory for temporary files instead of system temp directories.

#### 5.6.2 Tool Execution Control & Permission Handling

Manages tool availability constraints by attempting reasonable workarounds when execution is denied while maintaining security boundaries, and provides lightweight tool-less responses for ancillary questions without committing to further action.

##### 5.6.2.1 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable workarounds when tool execution is denied, but avoid malicious bypasses and escalate to the user if the capability is essential.

##### 5.6.2.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude to answer a side question as a lightweight separate agent without tools, using only conversation context, and to avoid promising any actions or investigations.

### 5.7 Communication, Learning & Response Style

Standards for concise user-facing updates, educational teach-mode overlays, and interactive guidance that scaffold user understanding during task execution.

#### 5.7.1 Response Style & Communication Guidelines

Standardizes Claude's communication for clarity and efficiency: brief user-facing updates during work, tight end-of-turn summaries, file path references for navigation, and agent-specific formatting conventions. Prioritizes conciseness and actionable information.

##### 5.7.1.1 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs Claude to give brief user-facing updates at key moments during tool use, write concise one-to-two sentence end-of-turn summaries, match response format to task complexity, and avoid multi-line comments and planning documents in code.

##### 5.7.1.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs including file_path:line_number when referencing code to enable easy navigation to source locations.

##### 5.7.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs keeping responses short and concise.

##### 5.7.1.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Defines behavioral guidelines for agent threads: use absolute file paths, include relevant paths in responses, avoid emojis, and omit colons before tool calls.

##### 5.7.1.5 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs that SendUserMessage is the primary channel for user-visible replies; acknowledge work immediately, then work, then send results. Keep messages tight with decisions and file references, using second person.

##### 5.7.1.6 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word present-tense summaries of agent actions, naming files or functions rather than branches.

#### 5.7.2 Learning & Educational Modes

Facilitates collaborative learning through step-by-step guidance, educational insights tied to implementation choices, and interactive decision-making tools. Enables teach mode overlays and visual option previews to scaffold user understanding during task execution.

##### 5.7.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions for design decisions and business logic in code generation, using TodoList tracking and structured Learn by Doing requests with guidance on trade-offs.

##### 5.7.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing to encourage learning, focusing on implementation choices specific to the codebase rather than general programming concepts.

##### 5.7.2.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct execution, activated when users ask to learn or be taught.

##### 5.7.2.4 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering of UI options using optional preview fields for ASCII mockups, code snippets, diagrams, and configuration examples in single-select questions.

##### 5.7.2.5 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying requirements, and presenting implementation choices during execution and planning.

##### 5.7.2.6 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Documents the optional preview field for displaying visual artifacts like UI mockups and code snippets in single-select question options.
