# Claude Code System Prompts Index

Operational knowledge for building, deploying, and maintaining Claude-powered coding agents — covering everything needed to move from raw API access to production-grade autonomous systems that write code, coordinate tasks, manage state, and communicate effectively with users.

## Table of Contents

1. [Shell & Command Execution](#1-shell-command-execution)
   1. [Bash Patterns & Tool Preferences](#11-bash-patterns-tool-preferences)
      1. [Bash Execution Patterns & Best Practices](#111-bash-execution-patterns-best-practices)
         1. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
         2. [Bash (maintain cwd) [Tool Description]](#1112-bash-maintain-cwd-tool-description)
         3. [Bash (no newlines) [Tool Description]](#1113-bash-no-newlines-tool-description)
         4. [Bash (parallel commands) [Tool Description]](#1114-bash-parallel-commands-tool-description)
         5. [Bash (sequential commands) [Tool Description]](#1115-bash-sequential-commands-tool-description)
         6. [Bash (semicolon usage) [Tool Description]](#1116-bash-semicolon-usage-tool-description)
         7. [Bash (quote file paths) [Tool Description]](#1117-bash-quote-file-paths-tool-description)
         8. [Bash (timeout) [Tool Description]](#1118-bash-timeout-tool-description)
         9. [Bash (working directory) [Tool Description]](#1119-bash-working-directory-tool-description)
         10. [Bash (verify parent directory) [Tool Description]](#11110-bash-verify-parent-directory-tool-description)
         11. [Bash (built-in tools note) [Tool Description]](#11111-bash-built-in-tools-note-tool-description)
         12. [Bash (prefer dedicated tools) [Tool Description]](#11112-bash-prefer-dedicated-tools-tool-description)
      2. [Dedicated Tool Alternatives to Bash](#112-dedicated-tool-alternatives-to-bash)
         1. [Bash (alternative — communication) [Tool Description]](#1121-bash-alternative-—-communication-tool-description)
         2. [Bash (alternative — content search) [Tool Description]](#1122-bash-alternative-—-content-search-tool-description)
         3. [Bash (alternative — edit files) [Tool Description]](#1123-bash-alternative-—-edit-files-tool-description)
         4. [Bash (alternative — file search) [Tool Description]](#1124-bash-alternative-—-file-search-tool-description)
         5. [Bash (alternative — read files) [Tool Description]](#1125-bash-alternative-—-read-files-tool-description)
         6. [Bash (alternative — write files) [Tool Description]](#1126-bash-alternative-—-write-files-tool-description)
   2. [Sandbox, Safety & Timing](#12-sandbox-safety-timing)
      1. [Sandbox Security & Failure Handling](#121-sandbox-security-failure-handling)
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
      2. [Sleep & Timing Controls](#122-sleep-timing-controls)
         1. [Bash (sleep — keep short) [Tool Description]](#1221-bash-sleep-—-keep-short-tool-description)
         2. [Bash (sleep — no polling background tasks) [Tool Description]](#1222-bash-sleep-—-no-polling-background-tasks-tool-description)
         3. [Bash (sleep — run immediately) [Tool Description]](#1223-bash-sleep-—-run-immediately-tool-description)
         4. [Bash (sleep — use check commands) [Tool Description]](#1224-bash-sleep-—-use-check-commands-tool-description)
         5. [One of six rules for using sleep command (System Prompt)](#1225-one-of-six-rules-for-using-sleep-command-system-prompt)
         6. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#1226-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
   3. [Command Analysis & Platform Tools](#13-command-analysis-platform-tools)
      1. [Bash Command Analysis & Safety](#131-bash-command-analysis-safety)
         1. [Bash command description writer (Agent Prompt)](#1311-bash-command-description-writer-agent-prompt)
         2. [Bash command prefix detection (Agent Prompt)](#1312-bash-command-prefix-detection-agent-prompt)
      2. [PowerShell Tool](#132-powershell-tool)
         1. [PowerShell (Tool Description)](#1321-powershell-tool-description)
         2. [PowerShell edition for 5.1 (System Prompt)](#1322-powershell-edition-for-51-system-prompt)
      3. [Execution Pause Control](#133-execution-pause-control)
         1. [Sleep (Tool Description)](#1331-sleep-tool-description)
2. [Agent Orchestration & Autonomous Execution](#2-agent-orchestration-autonomous-execution)
   1. [Planning & Task Management](#21-planning-task-management)
      1. [Planning Mode Workflows](#211-planning-mode-workflows)
         1. [Plan mode is active (5-phase) [System Reminder]](#2111-plan-mode-is-active-5-phase-system-reminder)
         2. [Plan mode is active (iterative) [System Reminder]](#2112-plan-mode-is-active-iterative-system-reminder)
         3. [Plan mode is active (subagent) [System Reminder]](#2113-plan-mode-is-active-subagent-system-reminder)
         4. [Plan mode re-entry (System Reminder)](#2114-plan-mode-re-entry-system-reminder)
         5. [Exited plan mode (System Reminder)](#2115-exited-plan-mode-system-reminder)
         6. [Plan file reference (System Reminder)](#2116-plan-file-reference-system-reminder)
         7. [EnterPlanMode (Tool Description)](#2117-enterplanmode-tool-description)
         8. [ExitPlanMode (Tool Description)](#2118-exitplanmode-tool-description)
         9. [Phase four of plan mode (System Prompt)](#2119-phase-four-of-plan-mode-system-prompt)
         10. [Remote plan mode (ultraplan) [System Prompt]](#21110-remote-plan-mode-ultraplan-system-prompt)
         11. [Remote planning session (System Prompt)](#21111-remote-planning-session-system-prompt)
         12. [Ultraplan mode (System Reminder)](#21112-ultraplan-mode-system-reminder)
         13. [Verify plan reminder (System Reminder)](#21113-verify-plan-reminder-system-reminder)
         14. [Plan mode (enhanced) [Agent Prompt]](#21114-plan-mode-enhanced-agent-prompt)
      2. [Task & Progress Tracking](#212-task-progress-tracking)
         1. [TaskCreate (Tool Description)](#2121-taskcreate-tool-description)
         2. [TodoWrite (Tool Description)](#2122-todowrite-tool-description)
         3. [Tool usage (task management) [System Prompt]](#2123-tool-usage-task-management-system-prompt)
         4. [Task tools reminder (System Reminder)](#2124-task-tools-reminder-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#2125-todowrite-reminder-system-reminder)
   2. [Multi-Agent Coordination & Subagent Spawning](#22-multi-agent-coordination-subagent-spawning)
      1. [Multi-Agent Coordination](#221-multi-agent-coordination)
         1. [TeammateTool (Tool Description)](#2211-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#2212-teamdelete-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#2213-tasklist-teammate-workflow-tool-description)
         4. [SendMessageTool (Tool Description)](#2214-sendmessagetool-tool-description)
         5. [Team Coordination (System Reminder)](#2215-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#2216-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#2217-teammate-communication-system-prompt)
         8. [Fork usage guidelines (System Prompt)](#2218-fork-usage-guidelines-system-prompt)
         9. [Subagent delegation examples (System Prompt)](#2219-subagent-delegation-examples-system-prompt)
         10. [Writing subagent prompts (System Prompt)](#22110-writing-subagent-prompts-system-prompt)
         11. [Team memory content display (System Prompt)](#22111-team-memory-content-display-system-prompt)
      2. [Subagent Spawning & Delegation](#222-subagent-spawning-delegation)
         1. [Agent (usage notes) [Tool Description]](#2221-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#2222-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (delegate exploration) [System Prompt]](#2223-tool-usage-delegate-exploration-system-prompt)
         4. [Tool usage (subagent guidance) [System Prompt]](#2224-tool-usage-subagent-guidance-system-prompt)
         5. [Worker fork execution (Agent Prompt)](#2225-worker-fork-execution-agent-prompt)
         6. [General purpose (Agent Prompt)](#2226-general-purpose-agent-prompt)
         7. [Explore (Agent Prompt)](#2227-explore-agent-prompt)
   3. [Autonomous Modes & Batch Orchestration](#23-autonomous-modes-batch-orchestration)
      1. [Autonomous & Auto Mode Execution](#231-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#2311-auto-mode-system-prompt)
         2. [Auto mode rule reviewer (Agent Prompt)](#2312-auto-mode-rule-reviewer-agent-prompt)
         3. [Doing tasks (ambitious tasks) [System Prompt]](#2313-doing-tasks-ambitious-tasks-system-prompt)
         4. [Doing tasks (no time estimates) [System Prompt]](#2314-doing-tasks-no-time-estimates-system-prompt)
         5. [Doing tasks (help and feedback) [System Prompt]](#2315-doing-tasks-help-and-feedback-system-prompt)
      2. [Batch Processing & Parallel Work Orchestration](#232-batch-processing-parallel-work-orchestration)
         1. [/batch slash command (Agent Prompt)](#2321-batch-slash-command-agent-prompt)
      3. [Lightweight Agent Routing](#233-lightweight-agent-routing)
         1. [/btw side question (System Reminder)](#2331-btw-side-question-system-reminder)
         2. [Agent mention (System Reminder)](#2332-agent-mention-system-reminder)
3. [Memory, Context & Session Management](#3-memory-context-session-management)
   1. [Memory & Context Preservation](#31-memory-context-preservation)
      1. [Memory Systems & Persistence](#311-memory-systems-persistence)
         1. [Memory file contents (System Reminder)](#3111-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#3112-nested-memory-contents-system-reminder)
         3. [Agent memory instructions (System Prompt)](#3113-agent-memory-instructions-system-prompt)
         4. [Description part of memory instructions (System Prompt)](#3114-description-part-of-memory-instructions-system-prompt)
         5. [Memory description of user feedback (System Prompt)](#3115-memory-description-of-user-feedback-system-prompt)
         6. [Session memory update instructions (Agent Prompt)](#3116-session-memory-update-instructions-agent-prompt)
         7. [Determine which memory files to attach (Agent Prompt)](#3117-determine-which-memory-files-to-attach-agent-prompt)
         8. [Dream memory consolidation (Agent Prompt)](#3118-dream-memory-consolidation-agent-prompt)
         9. [Session memory template (Data)](#3119-session-memory-template-data)
      2. [Context Management & Conversation Summarization](#312-context-management-conversation-summarization)
         1. [Context compaction summary (System Prompt)](#3121-context-compaction-summary-system-prompt)
         2. [Partial compaction instructions (System Prompt)](#3122-partial-compaction-instructions-system-prompt)
         3. [Conversation summarization (Agent Prompt)](#3123-conversation-summarization-agent-prompt)
         4. [Recent Message Summarization (Agent Prompt)](#3124-recent-message-summarization-agent-prompt)
         5. [Compact file reference (System Reminder)](#3125-compact-file-reference-system-reminder)
         6. [Session continuation (System Reminder)](#3126-session-continuation-system-reminder)
   2. [Session Organization & Resource Tracking](#32-session-organization-resource-tracking)
      1. [Session Organization: Titles, Branches & Search](#321-session-organization-titles-branches-search)
         1. [Session title and branch generation (Agent Prompt)](#3211-session-title-and-branch-generation-agent-prompt)
         2. [Coding session title generator (Agent Prompt)](#3212-coding-session-title-generator-agent-prompt)
         3. [Session Search Assistant (Agent Prompt)](#3213-session-search-assistant-agent-prompt)
      2. [Resource & Budget Monitoring](#322-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#3221-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#3222-usd-budget-system-reminder)
      3. [Usage Insights & Analytics](#323-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#3231-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#3232-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#3233-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#3234-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#3235-insights-suggestions-system-prompt)
   3. [Configuration & Settings Management](#33-configuration-settings-management)
      1. [Config (Tool Description)](#331-config-tool-description)
      2. [Status line setup (Agent Prompt)](#332-status-line-setup-agent-prompt)
      3. [Minimal mode (System Prompt)](#333-minimal-mode-system-prompt)
      4. [Scratchpad directory (System Prompt)](#334-scratchpad-directory-system-prompt)
4. [Development Workflow & Code Quality](#4-development-workflow-code-quality)
   1. [Git, Version Control & CI/CD](#41-git-version-control-cicd)
      1. [Git Operations & Version Control Workflows](#411-git-operations-version-control-workflows)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#4111-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#4112-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#4113-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#4114-bash-git-—-prefer-new-commits-tool-description)
         5. [EnterWorktree (Tool Description)](#4115-enterworktree-tool-description)
         6. [ExitWorktree (Tool Description)](#4116-exitworktree-tool-description)
         7. [Quick git commit (Agent Prompt)](#4117-quick-git-commit-agent-prompt)
         8. [Quick PR creation (Agent Prompt)](#4118-quick-pr-creation-agent-prompt)
         9. [Git status (System Prompt)](#4119-git-status-system-prompt)
      2. [GitHub Integration & CI/CD](#412-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#4121-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#4122-github-app-installation-pr-description-data)
   2. [Code Review, Quality & Security](#42-code-review-quality-security)
      1. [Code Review & Quality Improvement](#421-code-review-quality-improvement)
         1. [Simplify (Skill)](#4211-simplify-skill)
         2. [/review-pr slash command (Agent Prompt)](#4212-review-pr-slash-command-agent-prompt)
         3. [Doing tasks (no premature abstractions) [System Prompt]](#4213-doing-tasks-no-premature-abstractions-system-prompt)
         4. [Doing tasks (no unnecessary additions) [System Prompt]](#4214-doing-tasks-no-unnecessary-additions-system-prompt)
         5. [Doing tasks (no compatibility hacks) [System Prompt]](#4215-doing-tasks-no-compatibility-hacks-system-prompt)
         6. [Doing tasks (no unnecessary error handling) [System Prompt]](#4216-doing-tasks-no-unnecessary-error-handling-system-prompt)
         7. [Doing tasks (read before modifying) [System Prompt]](#4217-doing-tasks-read-before-modifying-system-prompt)
         8. [Doing tasks (minimize file creation) [System Prompt]](#4218-doing-tasks-minimize-file-creation-system-prompt)
      2. [Security: Code Safety & Vulnerability Prevention](#422-security-code-safety-vulnerability-prevention)
         1. [Doing tasks (security) [System Prompt]](#4221-doing-tasks-security-system-prompt)
         2. [Censoring assistance with malicious activities (System Prompt)](#4222-censoring-assistance-with-malicious-activities-system-prompt)
         3. [Executing actions with care (System Prompt)](#4223-executing-actions-with-care-system-prompt)
         4. [/security-review slash command (Agent Prompt)](#4224-security-review-slash-command-agent-prompt)
         5. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#4225-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         6. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#4226-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         7. [Malware analysis after Read tool call (System Reminder)](#4227-malware-analysis-after-read-tool-call-system-reminder)
   3. [Testing, Verification & Debugging](#43-testing-verification-debugging)
      1. [Verification & Testing Workflows](#431-verification-testing-workflows)
         1. [Verify skill (Skill)](#4311-verify-skill-skill)
         2. [Create verifier skills (Skill)](#4312-create-verifier-skills-skill)
         3. [Verify CLI changes (example for Verify skill) [Skill]](#4313-verify-cli-changes-example-for-verify-skill-skill)
         4. [Verify server/API changes (example for Verify skill) [Skill]](#4314-verify-serverapi-changes-example-for-verify-skill-skill)
         5. [Verification specialist (Agent Prompt)](#4315-verification-specialist-agent-prompt)
      2. [Debugging & Diagnostics Tools](#432-debugging-diagnostics-tools)
         1. [Debugging (Skill)](#4321-debugging-skill)
         2. [/stuck slash command (Skill)](#4322-stuck-slash-command-skill)
   4. [File Operations & IDE Awareness](#44-file-operations-ide-awareness)
      1. [File System Operations](#441-file-system-operations)
         1. [ReadFile (Tool Description)](#4411-readfile-tool-description)
         2. [Write (Tool Description)](#4412-write-tool-description)
         3. [Edit (Tool Description)](#4413-edit-tool-description)
         4. [Grep (Tool Description)](#4414-grep-tool-description)
         5. [NotebookEdit (Tool Description)](#4415-notebookedit-tool-description)
         6. [Tool usage (create files) [System Prompt]](#4416-tool-usage-create-files-system-prompt)
         7. [Tool usage (edit files) [System Prompt]](#4417-tool-usage-edit-files-system-prompt)
         8. [Tool usage (read files) [System Prompt]](#4418-tool-usage-read-files-system-prompt)
         9. [Tool usage (search content) [System Prompt]](#4419-tool-usage-search-content-system-prompt)
         10. [Tool usage (search files) [System Prompt]](#44110-tool-usage-search-files-system-prompt)
         11. [Tool usage (direct search) [System Prompt]](#44111-tool-usage-direct-search-system-prompt)
      2. [IDE Integration & Diagnostics](#442-ide-integration-diagnostics)
         1. [Lines selected in IDE (System Reminder)](#4421-lines-selected-in-ide-system-reminder)
         2. [File opened in IDE (System Reminder)](#4422-file-opened-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#4423-file-modified-by-user-or-linter-system-reminder)
         4. [New diagnostics detected (System Reminder)](#4424-new-diagnostics-detected-system-reminder)
      3. [File State & Content Notifications](#443-file-state-content-notifications)
         1. [File truncated (System Reminder)](#4431-file-truncated-system-reminder)
         2. [File exists but empty (System Reminder)](#4432-file-exists-but-empty-system-reminder)
         3. [File shorter than offset (System Reminder)](#4433-file-shorter-than-offset-system-reminder)
   5. [Engineering Execution & Documentation](#45-engineering-execution-documentation)
      1. [Software Engineering Task Execution](#451-software-engineering-task-execution)
         1. [Doing tasks (software engineering focus) [System Prompt]](#4511-doing-tasks-software-engineering-focus-system-prompt)
         2. [Worker instructions (System Prompt)](#4512-worker-instructions-system-prompt)
         3. [Tool execution denied (System Prompt)](#4513-tool-execution-denied-system-prompt)
      2. [Codebase Documentation & Agent Architecture](#452-codebase-documentation-agent-architecture)
         1. [CLAUDE.md creation (Agent Prompt)](#4521-claudemd-creation-agent-prompt)
         2. [Agent creation architect (Agent Prompt)](#4522-agent-creation-architect-agent-prompt)
      3. [LSP & Code Intelligence](#453-lsp-code-intelligence)
         1. [LSP (Tool Description)](#4531-lsp-tool-description)
5. [Claude API & SDK Reference](#5-claude-api-sdk-reference)
   1. [Claude API Reference: Language SDKs](#51-claude-api-reference-language-sdks)
      1. [Claude API reference — Python (Data)](#511-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#512-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#513-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#514-claude-api-reference-—-java-data)
      5. [Claude API reference — C# (Data)](#515-claude-api-reference-—-c-data)
      6. [Claude API reference — Ruby (Data)](#516-claude-api-reference-—-ruby-data)
      7. [Claude API reference — PHP (Data)](#517-claude-api-reference-—-php-data)
      8. [Claude API reference — cURL (Data)](#518-claude-api-reference-—-curl-data)
   2. [Agent SDK & API Features](#52-agent-sdk-api-features)
      1. [Agent SDK: Reference & Patterns](#521-agent-sdk-reference-patterns)
         1. [Agent SDK reference — Python (Data)](#5211-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#5212-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#5213-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#5214-agent-sdk-patterns-—-typescript-data)
      2. [API Features: Tool Use, Streaming & Files](#522-api-features-tool-use-streaming-files)
         1. [Tool use concepts (Data)](#5221-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#5222-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#5223-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#5224-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#5225-streaming-reference-—-typescript-data)
         6. [Files API reference — Python (Data)](#5226-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#5227-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#5228-message-batches-api-reference-—-python-data)
   3. [Optimization, Models & Application Design](#53-optimization-models-application-design)
      1. [API Optimization: Caching, Models & Errors](#531-api-optimization-caching-models-errors)
         1. [Prompt Caching — Design & Optimization (Data)](#5311-prompt-caching-—-design-optimization-data)
         2. [Claude model catalog (Data)](#5312-claude-model-catalog-data)
         3. [HTTP error codes reference (Data)](#5313-http-error-codes-reference-data)
      2. [Building with Claude API: Skills & Guides](#532-building-with-claude-api-skills-guides)
         1. [Build with Claude API (Skill)](#5321-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#5322-build-with-claude-api-reference-guide-skill)
         3. [Agent Design Patterns (Skill)](#5323-agent-design-patterns-skill)
         4. [Claude guide agent (Agent Prompt)](#5324-claude-guide-agent-agent-prompt)
6. [Automation, Integrations & External Tools](#6-automation-integrations-external-tools)
   1. [Hooks & Reusable Skills](#61-hooks-reusable-skills)
      1. [Hooks: Configuration & Lifecycle Events](#611-hooks-configuration-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#6111-hooks-configuration-system-prompt)
         2. [Hook condition evaluator (Agent Prompt)](#6112-hook-condition-evaluator-agent-prompt)
         3. [Agent Hook (Agent Prompt)](#6113-agent-hook-agent-prompt)
         4. [Hook additional context (System Reminder)](#6114-hook-additional-context-system-reminder)
         5. [Hook blocking error (System Reminder)](#6115-hook-blocking-error-system-reminder)
         6. [Hook stopped continuation (System Reminder)](#6116-hook-stopped-continuation-system-reminder)
         7. [Hook stopped continuation prefix (System Reminder)](#6117-hook-stopped-continuation-prefix-system-reminder)
         8. [Hook success (System Reminder)](#6118-hook-success-system-reminder)
      2. [Skills: Definition, Invocation & Management](#612-skills-definition-invocation-management)
         1. [Skill (Tool Description)](#6121-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#6122-tool-usage-skill-invocation-system-prompt)
         3. [Invoked skills (System Reminder)](#6123-invoked-skills-system-reminder)
         4. [/init CLAUDE.md and skill setup (new version) [Skill]](#6124-init-claudemd-and-skill-setup-new-version-skill)
         5. [Update Claude Code Config (Skill)](#6125-update-claude-code-config-skill)
         6. [update-config (7-step verification flow) [Skill]](#6126-update-config-7-step-verification-flow-skill)
         7. [Skillify Current Session (System Prompt)](#6127-skillify-current-session-system-prompt)
   2. [Browser, Web & Scheduling](#62-browser-web-scheduling)
      1. [Browser Automation & Computer Use](#621-browser-automation-computer-use)
         1. [Computer (Tool Description)](#6211-computer-tool-description)
         2. [Computer action (Tool Parameter)](#6212-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#6213-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#6214-chrome-browser-mcp-tools-system-prompt)
         5. [Computer Use MCP (Skill)](#6215-computer-use-mcp-skill)
      2. [Web Fetch & Search Tools](#622-web-fetch-search-tools)
         1. [WebFetch (Tool Description)](#6221-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#6222-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#6223-webfetch-summarizer-agent-prompt)
         4. [Live documentation sources (Data)](#6224-live-documentation-sources-data)
      3. [Scheduling & Cron Jobs](#623-scheduling-cron-jobs)
         1. [CronCreate (Tool Description)](#6231-croncreate-tool-description)
         2. [/loop slash command (Skill)](#6232-loop-slash-command-skill)
         3. [/schedule slash command (Agent Prompt)](#6233-schedule-slash-command-agent-prompt)
   3. [MCP Resources & Tool Integration](#63-mcp-resources-tool-integration)
      1. [MCP resource no content (System Reminder)](#631-mcp-resource-no-content-system-reminder)
      2. [MCP resource no displayable content (System Reminder)](#632-mcp-resource-no-displayable-content-system-reminder)
      3. [MCP Tool Result Truncation (System Prompt)](#633-mcp-tool-result-truncation-system-prompt)
      4. [ToolSearch (second part) [Tool Description]](#634-toolsearch-second-part-tool-description)
7. [User Communication, Interaction & Learning](#7-user-communication-interaction-learning)
   1. [Messaging & Response Formatting](#71-messaging-response-formatting)
      1. [User-Facing Messaging & Communication](#711-user-facing-messaging-communication)
         1. [SendMessageTool (non-agent-teams) [Tool Description]](#7111-sendmessagetool-non-agent-teams-tool-description)
         2. [How to use the SendUserMessage tool (System Prompt)](#7112-how-to-use-the-sendusermessage-tool-system-prompt)
         3. [Agent Summary Generation (System Prompt)](#7113-agent-summary-generation-system-prompt)
         4. [Agent thread notes (System Prompt)](#7114-agent-thread-notes-system-prompt)
      2. [Output Style & Response Formatting](#712-output-style-response-formatting)
         1. [Tone and style (code references) [System Prompt]](#7121-tone-and-style-code-references-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#7122-tone-and-style-concise-output-—-short-system-prompt)
         3. [Output efficiency (System Prompt)](#7123-output-efficiency-system-prompt)
         4. [Output style active (System Reminder)](#7124-output-style-active-system-reminder)
         5. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#7125-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   2. [Interactive Input & Decision Support](#72-interactive-input-decision-support)
      1. [User Interaction & Question Tools](#721-user-interaction-question-tools)
         1. [AskUserQuestion (Tool Description)](#7211-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#7212-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#7213-option-previewer-system-prompt)
      2. [Advisor & Reviewer Tools](#722-advisor-reviewer-tools)
         1. [Advisor tool instructions (System Prompt)](#7221-advisor-tool-instructions-system-prompt)
         2. [Tool usage (reserve Bash) [System Prompt]](#7222-tool-usage-reserve-bash-system-prompt)
   3. [Learning, Personality & Conversational Aids](#73-learning-personality-conversational-aids)
      1. [Learning & Teaching Modes](#731-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#7311-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7312-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#7313-request_teach_access-part-of-teach-mode-tool-description)
      2. [Terminal Coding Companions](#732-terminal-coding-companions)
         1. [Buddy Mode (System Prompt)](#7321-buddy-mode-system-prompt)
      3. [Conversational Prediction](#733-conversational-prediction)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#7331-prompt-suggestion-generator-v2-agent-prompt)

---

## 1. Shell & Command Execution

Bash and PowerShell execution patterns, sandbox security, timing controls, and command safety analysis. Covers best practices for running shell commands reliably and securely within agent workflows.

### 1.1 Bash Patterns & Tool Preferences

How to write effective bash commands, chain operations for fail-fast behavior, and delegate to specialized tools instead of shell equivalents.

#### 1.1.1 Bash Execution Patterns & Best Practices

Bash commands execute with persistent working directories across the session but isolated shell state. Effective usage requires chaining dependent commands with `&&` for fail-fast behavior, running independent commands in parallel for performance, quoting file paths with spaces, and preferring dedicated tools over bash equivalents for file operations, searching, and text processing.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

##### 1.1.1.2 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to use absolute paths and avoid cd commands to maintain current working directory throughout the session.

##### 1.1.1.3 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits using newlines to separate bash commands.

##### 1.1.1.4 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to run independent bash commands as parallel tool calls in a single message for optimal performance.

##### 1.1.1.5 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands together in a single bash call using `&&` to ensure sequential execution and stop on failure.

##### 1.1.1.6 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier command failures should not prevent later commands from executing.

##### 1.1.1.7 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs to quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.8 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Optionally specify a timeout in milliseconds for bash commands, with configurable maximum and default values.

##### 1.1.1.9 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Documents that bash working directory persists between commands while shell state does not, with environment initialized from user profile.

##### 1.1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, verify the parent directory exists and is the correct location using `ls`.

##### 1.1.1.11 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and clarity than Bash equivalents.

##### 1.1.1.12 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns against using Bash for find, grep, cat, and similar read-only commands, directing to use dedicated tools instead.

#### 1.1.2 Dedicated Tool Alternatives to Bash

Bash should delegate to specialized tools for superior clarity and user experience: Read and Write tools for file I/O, Edit tool for text transformation, Glob for file discovery, Grep for content search, and direct output for communication instead of echo or printf.

##### 1.1.2.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Directs to output text directly instead of using echo or printf.

##### 1.1.2.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs to use the Grep tool for content search instead of grep or rg commands.

##### 1.1.2.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs to use the Edit tool for file editing instead of sed or awk commands.

##### 1.1.2.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs to use the Glob tool for file search instead of find or ls commands.

##### 1.1.2.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs to use the Read tool for file reading instead of cat, head, or tail commands.

##### 1.1.2.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs to use the Write tool for file writing instead of echo or cat commands.

### 1.2 Sandbox, Safety & Timing

Mandatory sandbox enforcement, access-denied failure handling, sleep minimization, and avoiding polling loops in command execution.

#### 1.2.1 Sandbox Security & Failure Handling

All bash commands run in mandatory sandbox mode by default with no exceptions or overrides permitted. When sandbox restrictions cause failures—indicated by access denied, operation not permitted, network blocking, or unix socket errors—explain the restriction and collaborate with the user on allowlist adjustments rather than disabling the sandbox. Sensitive paths like credentials and shell configs must never be added to the allowlist.

##### 1.2.1.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When sandbox restrictions cause command failures, collaborate with the user to adjust sandbox settings rather than bypassing them.

##### 1.2.1.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always run commands within the sandbox by default; only disable it when the user explicitly requests or clear evidence of sandbox restriction exists.

##### 1.2.1.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies sandbox-caused failures when access is denied to paths outside allowed directories.

##### 1.2.1.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header text introducing the list of indicators that identify sandbox-caused command failures.

##### 1.2.1.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies sandbox-caused failures when network connections to non-whitelisted hosts are blocked.

##### 1.2.1.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies sandbox-caused failures when file or network operations return "operation not permitted" errors.

##### 1.2.1.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies sandbox-caused failures when unix socket connections are blocked.

##### 1.2.1.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

When a command fails due to sandbox restrictions, briefly explain which restriction caused the failure and inform the user about the `/sandbox` command for managing restrictions.

##### 1.2.1.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Describes the condition when a command fails with clear evidence that sandbox restrictions are the cause, distinguishing from other failure types.

##### 1.2.1.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the `dangerouslyDisableSandbox` parameter is disabled by policy and cannot be overridden.

##### 1.2.1.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances, with no exceptions permitted.

##### 1.2.1.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like shell configuration files or SSH credentials to the sandbox allowlist.

##### 1.2.1.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; even if a recent command ran with sandbox disabled, default to sandbox mode for all future commands.

##### 1.2.1.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header text introducing the recommended response when sandbox-caused failures are detected.

##### 1.2.1.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry a failed command with `dangerouslyDisableSandbox: true` without asking the user for permission first.

##### 1.2.1.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Always use the `$TMPDIR` environment variable for temporary files in sandbox mode instead of `/tmp` directly, as it points to the correct sandbox-writable directory.

##### 1.2.1.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Note that disabling the sandbox will trigger a user permission prompt.

#### 1.2.2 Sleep & Timing Controls

Sleep should be minimal (1-5 seconds) and used only when necessary to avoid blocking users. Execute commands immediately without artificial delays, use check commands instead of polling loops, and never retry failing commands in sleep loops—diagnose root causes instead. Background tasks notify automatically; do not poll them.

##### 1.2.2.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations short (1-5 seconds) to avoid blocking the user when delays are necessary.

##### 1.2.2.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with `run_in_background`; instead wait for automatic notification when they complete.

##### 1.2.2.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not insert sleep delays between commands that can run immediately; execute them without pauses.

##### 1.2.2.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

When polling an external process, use check commands like `gh run view` instead of sleeping first.

##### 1.2.2.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; requires diagnosing root causes instead.

##### 1.2.2.6 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Discourages unnecessary `Start-Sleep` commands in PowerShell, recommending `run_in_background` for long-running tasks, polling alternatives over sleep loops, and keeping sleep durations short when unavoidable.

### 1.3 Command Analysis & Platform Tools

Security inspection of bash commands for injection attempts, PowerShell execution on Windows, and execution pause controls.

#### 1.3.1 Bash Command Analysis & Safety

Analyzes bash commands through documentation generation and security inspection, detecting injection attempts while producing clear command descriptions.

##### 1.3.1.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates concise, active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy operations.

##### 1.3.1.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands, returning the safe prefix or flagging injection risks for safety approval.

#### 1.3.2 PowerShell Tool

Windows command execution environment with persistent working directory context but stateless shell sessions. Includes syntax guidance, timeout management, and platform-specific constraints around operators, encoding, and stderr handling.

##### 1.3.2.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with persistent working directory but non-persistent shell state, with detailed syntax guidance, timeout configuration, and strong preference for specialized tools over PowerShell for file operations.

##### 1.3.2.2 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 limitations including missing pipeline operators, ternary operators, stderr redirection quirks, and UTF-16 LE default encoding.

#### 1.3.3 Execution Pause Control

Pauses execution for specified durations with early wake capability on user input, optimized to avoid shell process overhead.

##### 1.3.3.1 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input, preferred over bash sleep for avoiding shell process overhead.

---

## 2. Agent Orchestration & Autonomous Execution

Infrastructure for multi-agent coordination, subagent spawning, planning workflows, task tracking, and autonomous self-directed execution. Covers the full spectrum from single-agent planning to distributed agent teams.

### 2.1 Planning & Task Management

Structured planning frameworks with read-only exploration phases, task breakdown into tracked lists, and progress visibility across multi-step implementations.

#### 2.1.1 Planning Mode Workflows

Structured planning frameworks that enforce read-only exploration before implementation, supporting single-agent iterative planning, multi-agent parallel exploration, and remote execution with user approval gates. Plans are persisted to files and updated through workflow phases.

##### 2.1.1.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Activates plan mode with a structured 5-phase workflow: initial understanding with parallel exploration agents, design with planning agents, review, phase four execution, and plan mode exit. Enforces read-only restrictions and requires plan file updates before execution.

##### 2.1.1.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative plan mode for pair-planning with the user through cycles of exploration, plan file updates, and user questions. Enforces read-only restrictions and requires plan file edits before exiting plan mode.

##### 2.1.1.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Activates simplified plan mode for subagents, restricting edits to the plan file only and requiring read-only operations with optional clarifying questions.

##### 2.1.1.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude when re-entering plan mode to read the existing plan file, evaluate whether the new request is a continuation or different task, and edit the plan accordingly before exiting.

##### 2.1.1.5 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has ended and tools, edits, and actions are now available, with optional reference to the plan file location.

##### 2.1.1.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and instructs Claude to continue working on it if relevant and incomplete.

##### 2.1.1.7 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions into plan mode for non-trivial implementation tasks to explore codebase and design approaches for user approval before coding, with clear criteria for when planning is beneficial versus unnecessary.

##### 2.1.1.8 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of implementation planning by reading the plan file and requesting user approval, distinct from research or exploration tasks.

##### 2.1.1.9 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes a concise implementation plan to file with file paths, changes, function references, and verification command within 40-line limit.

##### 2.1.1.10 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions where Claude explores the codebase, produces a diagram-rich plan via ExitPlanMode, and implements it with a PR upon approval or teleports back to local terminal on rejection.

##### 2.1.1.11 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Configures remote planning sessions with lightweight codebase exploration, plan generation via ExitPlanMode, and handling of approval, rejection, or teleportation feedback.

##### 2.1.1.12 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Orchestrates multi-agent exploration to create detailed implementation plans with parallel research agents, synthesis, critique review, and approval workflow. Handles plan approval, rejection, and error states, with support for local teleportation and remote execution.

##### 2.1.1.13 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds to verify plan completion by calling the verification tool directly after implementation.

##### 2.1.1.14 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans through read-only codebase exploration, identifying critical files, and considering architectural trade-offs.

#### 2.1.2 Task & Progress Tracking

Tools for breaking down complex work into structured task lists with state tracking (pending, in-progress, completed) to maintain visibility across coding sessions and multi-step implementations.

##### 2.1.2.1 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress on complex multi-step work, with guidance on when to use versus skip task tracking.

##### 2.1.2.2 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with state tracking (pending/in_progress/completed), requiring both imperative and active-form descriptions for each task.

##### 2.1.2.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs using the TodoWrite tool to break down work, track progress, and mark tasks complete immediately upon finishing.

##### 2.1.2.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Reminds Claude to use task creation and update tools for tracking progress on relevant work, with instruction not to mention this reminder to the user.

##### 2.1.2.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Reminds Claude to use the TodoWrite tool for task tracking when relevant, with instruction not to mention this reminder to the user.

### 2.2 Multi-Agent Coordination & Subagent Spawning

Orchestrating teams of agents with task distribution and messaging, plus launching specialized subagents for parallel autonomous work with context isolation.

#### 2.2.1 Multi-Agent Coordination

Infrastructure for orchestrating teams of agents with task distribution, inter-agent messaging, shared memory, and graceful shutdown. Agents coordinate through shared configuration and task lists while maintaining team identity and communication protocols.

##### 2.2.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages multi-agent teams and swarms with task coordination, automatic message delivery, idle state handling, and team member discovery via shared config files.

##### 2.2.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all active members to be terminated first.

##### 2.2.1.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering available tasks, claiming work by ID order, and coordinating through shared task lists in team environments.

##### 2.2.1.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages between agents in team workflows with support for broadcast messaging and legacy protocol responses for shutdown and plan approval requests.

##### 2.2.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with a specific identity, team resources, and communication protocols. Instructs it to refer to teammates by name, check task lists, and send updates to the team lead.

##### 2.2.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before providing a final response in non-interactive mode.

##### 2.2.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs Claude to use the SendMessage tool to communicate with team members, as text responses are not visible to teammates in a swarm environment.

##### 2.2.1.8 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Establishes when to fork subagents (research, implementation), prohibits reading fork output mid-flight or fabricating results, and requires trusting completion notifications while passing short names for user visibility.

##### 2.2.1.9 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides examples of delegating tasks to subagents, handling waiting states, and reporting results without fabricating answers during mid-wait user queries.

##### 2.2.1.10 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for delegating tasks to subagents: brief them with context and rationale as if they just arrived, avoid terse commands, and never delegate understanding—include specific file paths and changes instead.

##### 2.2.1.11 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and type description for injection into conversation context.

#### 2.2.2 Subagent Spawning & Delegation

Mechanisms for launching specialized subagents to handle autonomous multi-step tasks in parallel, with context isolation via worktrees and structured result reporting. Subagents range from general-purpose researchers to read-only explorers to directive executors.

##### 2.2.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Provides comprehensive usage guidance for the Task/Agent tool including subagent spawning, background execution, context resumption, worktree isolation, parallel task execution, and expectations for agent results and user communication.

##### 2.2.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses for autonomous handling of complex multi-step tasks.

##### 2.2.2.3 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Recommends using the Task tool with exploration subagents for broad codebase research when simple searches prove insufficient or queries exceed limits.

##### 2.2.2.4 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Advises using the Task tool with specialized subagents for parallelization and context protection, while avoiding duplication of work already delegated.

##### 2.2.2.5 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Defines behavior for forked worker sub-agents that execute directives directly without spawning further agents, using tools silently, committing changes, and reporting structured results under 500 words with scope, findings, and issues.

##### 2.2.2.6 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases while reporting findings concisely.

##### 2.2.2.7 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only codebase exploration specialist using glob patterns, regex search, and file reading to rapidly find files and answer questions about code structure without modifying files.

### 2.3 Autonomous Modes & Batch Orchestration

Continuous self-directed execution with safety guardrails, lightweight agent routing for side questions, and large-scale parallel work decomposition.

#### 2.3.1 Autonomous & Auto Mode Execution

Continuous self-directed task execution with safety guardrails: autonomous operation mode that prioritizes action over planning, enforces user-defined classifier rules, and defers scope decisions to the user while avoiding destructive or unauthorized actions.

##### 2.3.1.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate action, minimal interruptions, and preference for coding over planning, while avoiding destructive actions and data exfiltration without explicit user authorization.

##### 2.3.1.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto-mode classifier rules for clarity, completeness, conflicts, and actionability across allow, soft_deny, and environment categories.

##### 2.3.1.3 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Empowers agents to tackle ambitious, complex tasks by deferring to user judgment on scope rather than imposing artificial limitations.

##### 2.3.1.4 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs agents to avoid time estimates or predictions for task completion.

##### 2.3.1.5 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs agents to inform users of help and feedback channels when requested.

#### 2.3.2 Batch Processing & Parallel Work Orchestration

Decomposition and parallel execution of large-scale codebase modifications through independent work units, distributed agent coordination, and comprehensive test coverage validation.

##### 2.3.2.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into independent units, defining e2e test recipes, and spawning background worker agents with progress tracking.

#### 2.3.3 Lightweight Agent Routing

Routes lightweight side questions and agent invocations as separate instances with minimal context, enabling direct responses without tool access.

##### 2.3.3.1 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Indicates a lightweight side question from the user that spawns a separate agent instance with no tools available, requiring a single direct response based only on conversation context.

##### 2.3.3.2 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and to do so with appropriate context.

---

## 3. Memory, Context & Session Management

Persistent storage of institutional knowledge and session state, conversation summarization across context boundaries, session organization and discovery, resource budget monitoring, and system configuration.

### 3.1 Memory & Context Preservation

Persistent memory systems capturing domain knowledge and user context across conversations, plus compression of conversation history into structured continuation summaries.

#### 3.1.1 Memory Systems & Persistence

Persistent storage mechanisms that capture institutional knowledge, user context, and session state across conversations. Agents update memory with domain-specific discoveries, work guidance, and feedback patterns while maintaining structured file hierarchies and managing token constraints through selective consolidation and pruning.

##### 3.1.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file with its path and type description.

##### 3.1.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

##### 3.1.1.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Instructs agents to update memory with domain-specific discoveries (code patterns, test failures, architectural decisions) to build institutional knowledge across conversations, with tailored examples for code reviewers, test runners, architects, and documentation writers.

##### 3.1.1.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as capturing role, goals, responsibilities, and knowledge to enable personalized assistance while avoiding negative judgements or irrelevant details.

##### 3.1.1.5 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type for storing work approach guidance from both successes and failures, with checks for contradictions with team memories.

##### 3.1.1.6 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructs Claude to update session notes files during conversations by preserving structure (headers and italic descriptions), editing only content sections, and maintaining detailed, actionable information while respecting token limits per section.

##### 3.1.1.7 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects relevant memory files (up to 5) to attach for the main agent based on query content, avoiding false matches and being conservative with user-profile memories.

##### 3.1.1.8 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs reflective memory consolidation by orienting on existing memories, gathering recent signal from transcripts, merging updates into topic files, and pruning the index.

##### 3.1.1.9 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing current state, task specification, files, workflow, errors, and key results.

#### 3.1.2 Context Management & Conversation Summarization

Techniques for compressing conversation history into structured summaries that preserve task state, technical discoveries, and pending work across context window boundaries. Summaries capture requests, file changes, errors, and problem-solving approaches to enable efficient session resumption without losing critical context.

##### 3.1.2.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs agents to write structured continuation summaries covering task overview, current state, discoveries, next steps, and context preservation to enable efficient resumption in future context windows.

##### 3.1.2.2 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured format for summarizing conversation portions with analysis tags, covering primary requests, technical concepts, files, errors, problem-solving, user messages, pending tasks, and continuation context.

##### 3.1.2.3 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries with analysis of user requests, technical concepts, file changes, errors, problem-solving, and pending tasks to preserve context across sessions.

##### 3.1.2.4 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions with analysis of requests, technical concepts, file changes, errors, and pending tasks while preserving earlier context intact.

##### 3.1.2.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notes that a file was read before conversation summarization and is too large to include, directing Claude to use the Read tool if needed.

##### 3.1.2.6 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory may have changed.

### 3.2 Session Organization & Resource Tracking

Metadata generation for session titles and semantic search, real-time token and cost budget monitoring, and usage analytics for identifying workflow friction.

#### 3.2.1 Session Organization: Titles, Branches & Search

Metadata generation and discovery systems that organize sessions through concise titles, version control integration, and semantic search. Enables rapid session retrieval by matching queries against tags, summaries, and transcripts while maintaining consistent naming conventions for easy recognition.

##### 3.2.1.1 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates concise session titles (≤6 words, sentence case) and git branch names (≤4 words, claude/ prefix, lowercase) from session descriptions for organization and version control.

##### 3.2.1.2 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise, sentence-case session titles (3-7 words) that capture the main topic or goal of a coding session for easy recognition in lists.

##### 3.2.1.3 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Enables semantic search across sessions by matching user queries against tags, titles, branches, summaries, and transcripts with high inclusivity, prioritizing exact tag matches and returning results ordered by relevance.

#### 3.2.2 Resource & Budget Monitoring

Real-time tracking of token consumption and USD spending against configured quotas, providing visibility into resource utilization and remaining capacity.

##### 3.2.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 3.2.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

#### 3.2.3 Usage Insights & Analytics

Analysis of Claude Code usage patterns to surface friction points, identify optimization opportunities, and forecast emerging autonomous workflows enabled by model capability improvements.

##### 3.2.3.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part coaching summary of Claude Code usage patterns covering what's working, friction points, quick wins, and ambitious workflows for improved models.

##### 3.2.3.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes usage data to identify and categorize recurring friction patterns with examples and constructive suggestions for improvement.

##### 3.2.3.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous development opportunities enabled by more capable models, with actionable prompts to try.

##### 3.2.3.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured data from session transcripts including user goals, satisfaction signals, and friction categories with strict guidelines to avoid counting autonomous work.

##### 3.2.3.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions for improving Claude Code usage including CLAUDE.md additions, feature recommendations (MCP, skills, hooks, headless mode, agents), and workflow patterns.

### 3.3 Configuration & Settings Management

System-wide and project-level configuration mechanisms that control Claude Code behavior, from theme and editor preferences to terminal display formatting and feature toggles. Settings persist across sessions via configuration files while supporting explicit context passing for minimal or specialized execution modes.

#### 3.3.1 [Config (Tool Description)](system-prompts/tool-description-config.md)

Tool for viewing and modifying Claude Code configuration settings stored globally in ~/.claude.json or per-project in settings.json, with examples for theme, editor mode, and permissions.

#### 3.3.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell configs, converting escape sequences to shell commands, and updating settings.json with custom statusLine commands that receive session metadata via JSON stdin.

#### 3.3.3 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Minimal mode disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags for authentication and configuration.

#### 3.3.4 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for temporary files instead of system temp directories.

---

## 4. Development Workflow & Code Quality

End-to-end software engineering workflows covering git operations, code review, security analysis, testing, debugging, file operations, IDE integration, and codebase documentation.

### 4.1 Git, Version Control & CI/CD

Safe git workflows with hook enforcement, pull request generation, worktree isolation, and automated GitHub Actions integration for AI-assisted development.

#### 4.1.1 Git Operations & Version Control Workflows

Git workflows prioritize safety through hook enforcement, new commits over amendments, and careful consideration before destructive operations. Dedicated tools streamline commit creation with pre-populated context and message drafting, pull request generation with branch management, and isolated worktree sessions for branch-specific work. Git status provides a static reference snapshot at conversation start.

##### 4.1.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives before running destructive git operations like reset, force push, or checkout.

##### 4.1.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, parallel command execution, commit message drafting, and PR creation with gh CLI.

##### 4.1.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping hooks or bypassing signing unless explicitly requested by the user.

##### 4.1.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Directs to create new commits rather than amending existing ones.

##### 4.1.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree for the session only when explicitly requested, with optional naming and automatic cleanup on exit.

##### 4.1.1.6 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits an EnterWorktree session with options to keep or remove the worktree, restoring original working directory and clearing CWD-dependent caches.

##### 4.1.1.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context from git status and diff, drafting messages based on repository style and staging changes safely.

##### 4.1.1.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated context, handling branch creation, pushing, and PR generation with safety protocols and attribution.

##### 4.1.1.9 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Presents git status snapshot at conversation start as a static reference point that does not update during the session.

#### 4.1.2 GitHub Integration & CI/CD

Automated integration of Claude Code into GitHub workflows through Actions and App installation, enabling AI-assisted development triggered via @claude mentions with configurable security and custom behavior.

##### 4.1.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues and pull requests, with configurable permissions and optional custom prompts.

##### 4.1.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining functionality, security considerations, and how to trigger Claude via @claude mentions.

### 4.2 Code Review, Quality & Security

Structured code review practices, refactoring guidance, vulnerability detection, secure coding enforcement, and agent behavior governance against threat models.

#### 4.2.1 Code Review & Quality Improvement

Structured code review and cleanup practices that identify quality issues, refactoring opportunities, and scope violations. Enforces pragmatic constraints against premature abstraction, feature creep, unnecessary error handling, and file bloat while requiring deep code comprehension before modification.

##### 4.2.1.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup workflow launching three parallel agents to identify code reuse opportunities, quality issues, and efficiency problems.

##### 4.2.1.2 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests with thorough code analysis covering quality, style, improvements, issues, and risks organized by clear sections.

##### 4.2.1.3 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Discourages creating helpers or utilities for one-time operations or hypothetical requirements; complexity should match actual task needs.

##### 4.2.1.4 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Prohibits adding features, refactoring, docstrings, or improvements beyond what was explicitly requested; only add comments where logic is unclear.

##### 4.2.1.5 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Prohibits backwards-compatibility shims and unused code workarounds; agents should delete unused code completely rather than rename or re-export it.

##### 4.2.1.6 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs agents to avoid error handling for impossible scenarios and validation for internal code; validate only at system boundaries like user input and external APIs.

##### 4.2.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires agents to read and understand existing code before proposing or making modifications.

##### 4.2.1.8 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs agents to prefer editing existing files over creating new ones to prevent file bloat and build on prior work.

#### 4.2.2 Security: Code Safety & Vulnerability Prevention

Multi-layered security controls spanning vulnerability detection, secure coding practices, and autonomous agent governance. Analyzes code for injection attacks and data exposure, enforces action reversibility and confirmation for destructive operations, and monitors agent behavior against threat models while permitting authorized security testing.

##### 4.2.2.1 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Emphasizes avoiding security vulnerabilities like injection, XSS, and SQL injection; agents must prioritize secure code and fix insecure implementations immediately.

##### 4.2.2.2 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, CTF challenges, and defensive security while refusing destructive techniques, DoS attacks, and malicious detection evasion; dual-use tools require clear authorization context.

##### 4.2.2.3 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Requires careful consideration of action reversibility and blast radius; agents should confirm before destructive operations, hard-to-reverse actions, shared-state changes, or third-party uploads, while investigating unexpected state rather than deleting it.

##### 4.2.2.4 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review analyzing code changes for exploitable vulnerabilities in input validation, authentication, cryptography, injection, and data exposure with high-confidence filtering.

##### 4.2.2.5 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor evaluating autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage through threat modeling and user intent analysis.

##### 4.2.2.6 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, block rules, and allow exceptions governing autonomous agent tool actions, covering destructive operations, credential handling, and data exfiltration prevention.

##### 4.2.2.7 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, while permitting analysis, reporting, and behavioral questions.

### 4.3 Testing, Verification & Debugging

Runtime-based verification through automated testing and adversarial probing, plus diagnostic tools for session failures and performance bottlenecks.

#### 4.3.1 Verification & Testing Workflows

Runtime-based verification systems that validate code changes through automated testing, build execution, and adversarial probing. Workflows detect behavioral correctness across CLI, API, and web interfaces while generating evidence-backed PASS/FAIL verdicts, complemented by skill creation frameworks for domain-specific verification patterns.

##### 4.3.1.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow for validating code changes through runtime observation, surface testing, and evidence-based reporting.

##### 4.3.1.2 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills for the Verify agent, including auto-detection, tool setup, Q&A, and skill generation for web/CLI/API verification.

##### 4.3.1.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying CLI changes by building, running with test arguments, and comparing output to expected behavior.

##### 4.3.1.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying server/API changes using curl to test endpoints, capture responses, and validate behavior.

##### 4.3.1.5 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarially tests implementations by running builds, test suites, linters, and probes (boundary values, concurrency, idempotency, orphan operations) to issue PASS/FAIL/PARTIAL verdicts with documented evidence, avoiding common LLM verification pitfalls.

#### 4.3.2 Debugging & Diagnostics Tools

Runtime diagnostic capabilities for identifying and analyzing session failures, performance bottlenecks, and system state issues through log inspection and process monitoring.

##### 4.3.2.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions using debug logs, settings files, and error analysis.

##### 4.3.2.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnostic tool for identifying frozen or slow Claude Code sessions by analyzing process state, CPU usage, memory, and child processes.

### 4.4 File Operations & IDE Awareness

Specialized tools for reading, writing, editing, and searching files across formats, plus real-time IDE state awareness of selections, diagnostics, and external modifications.

#### 4.4.1 File System Operations

Specialized tools for reading, writing, editing, and searching file contents across multiple formats including text, images, PDFs, and Jupyter notebooks. Operations preserve formatting and indentation, with preference for dedicated tools over shell commands.

##### 4.4.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from filesystem with support for images, PDFs (with page ranges for large files), Jupyter notebooks, and relative or absolute paths, defaulting to first N lines.

##### 4.4.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem with file overwrite capability. Prefers the Edit tool for modifications and prohibits creating documentation or README files unless explicitly requested.

##### 4.4.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with emphasis on preserving indentation from Read tool output and preferring edits to existing files over creating new ones.

##### 4.4.1.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Ripgrep-based search tool supporting regex patterns, file filtering by glob or type, and multiple output modes, with guidance to prefer this over bash grep commands.

##### 4.4.1.5 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replaces Jupyter notebook cell contents with support for insert and delete operations on 0-indexed cells using absolute paths.

##### 4.4.1.6 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs to use the Write tool for file creation instead of cat heredoc or echo redirection.

##### 4.4.1.7 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs to use the Edit tool for file modifications instead of sed or awk.

##### 4.4.1.8 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs to use the Read tool for file access instead of cat, head, tail, or sed.

##### 4.4.1.9 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs to use the Grep tool for file content searches instead of grep or rg.

##### 4.4.1.10 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs to use the Glob tool for file discovery instead of find or ls.

##### 4.4.1.11 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Directs use of Glob and Grep tools directly for simple, targeted codebase searches.

#### 4.4.2 IDE Integration & Diagnostics

Real-time awareness of IDE state changes—file opens, code selections, external modifications, and diagnostic alerts—that provide contextual signals about the user's current work without necessarily relating to the active task.

##### 4.4.2.1 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of code lines selected by the user in the IDE, with a note that they may or may not relate to the current task.

##### 4.4.2.2 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 4.4.2.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was modified externally by the user or linter and provides the changes with line numbers for context.

##### 4.4.2.4 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the code or system.

#### 4.4.3 File State & Content Notifications

Boundary conditions and edge cases in file access: truncation due to size limits, empty files, and offset misalignments that require silent handling or explicit tool invocation to retrieve full content.

##### 4.4.3.1 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a file was truncated due to size and instructs it not to inform the user, but to use the read tool if more content is needed.

##### 4.4.3.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns that a file exists but contains no content.

##### 4.4.3.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns that a file read offset exceeds the file length and reports the actual file size.

### 4.5 Engineering Execution & Documentation

Structured five-step workflow for implementing code changes, codebase documentation generation, agent specifications, LSP-based code intelligence, and software engineering task execution.

#### 4.5.1 Software Engineering Task Execution

Structured workflow for implementing code changes: interpreting requests as engineering tasks, executing a five-step process from simplification through testing to PR submission, and handling tool restrictions through reasonable workarounds or user escalation.

##### 4.5.1.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames user requests as software engineering tasks (bug fixes, features, refactoring, code explanation) and interprets unclear instructions within that context, applying changes to actual code rather than returning abstract answers.

##### 4.5.1.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for implementing changes: simplify code, run unit tests, test end-to-end, commit and push, then report the PR URL.

##### 4.5.1.3 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Permits reasonable workarounds when a tool is denied, but prohibits malicious circumvention attempts and requires stopping to explain to the user if the capability is essential.

#### 4.5.2 Codebase Documentation & Agent Architecture

Generation of project-specific documentation and AI agent specifications that capture codebase context, development conventions, and behavioral frameworks for autonomous or assisted development workflows.

##### 4.5.2.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files containing build/test commands, high-level architecture, and project-specific conventions for future Claude Code sessions.

##### 4.5.2.2 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to architect custom AI agents by extracting user intent, designing expert personas, creating comprehensive system prompts, optimizing performance, and generating JSON specifications with identifiers, usage guidelines, and behavioral instructions.

#### 4.5.3 LSP & Code Intelligence

Language Server Protocol integration enabling semantic code navigation and analysis across the workspace, including symbol resolution, type information, and refactoring support.

##### 4.5.3.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides code intelligence via Language Server Protocol operations including go-to-definition, find-references, hover info, and call hierarchy across workspace.

---

## 5. Claude API & SDK Reference

Comprehensive API documentation covering language SDKs, agent SDK patterns, tool use, streaming, file management, prompt caching, model catalog, and high-level architecture guides for building Claude applications.

### 5.1 Claude API Reference: Language SDKs

Language-specific SDK references for Python, TypeScript, Go, Java, C#, Ruby, PHP, and cURL, each documenting client initialization, request patterns, streaming, tool use, vision capabilities, prompt caching, extended thinking, structured outputs, and file handling.

#### 5.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, system prompts, vision (images), prompt caching, extended thinking, error handling, multi-turn conversations, compaction, stop reasons, and cost optimization.

#### 5.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, basic requests, system prompts, vision (images), prompt caching, extended thinking, error handling, multi-turn conversations, compaction, stop reasons, and cost optimization strategies.

#### 5.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, basic requests, streaming, tool use with BetaToolRunner and manual loops, thinking, prompt caching, server-side tools, PDF input, Files API, and context editing.

#### 5.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking (adaptive), tool use with annotated classes and BetaToolRunner, effort parameter, prompt caching, token counting, structured output, server-side tools, and Files API.

#### 5.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking (adaptive and fixed-budget), tool use with manual loops, effort parameter, prompt caching, token counting, structured output, PDF input, server-side tools, Files API, and context editing.

#### 5.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including client initialization, basic requests, streaming, tool use with BetaToolRunner, prompt caching, and manual tool loops.

#### 5.1.7 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including client initialization for Anthropic/Bedrock/Vertex/Foundry, basic requests, streaming, tool use with BetaRunnableTool, extended thinking, prompt caching, structured outputs, and server-side tools.

#### 5.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming, tool use loops, prompt caching, extended thinking, and required headers for direct API integration.

### 5.2 Agent SDK & API Features

Agent SDK patterns for autonomous workflows, plus API references for tool use, streaming content types, file management, and async batch processing.

#### 5.2.1 Agent SDK: Reference & Patterns

Python and TypeScript Agent SDK documentation covering the query interface, built-in tools, MCP integration, hooks, subagents, permission modes, session management, and practical implementation patterns for autonomous agent workflows.

##### 5.2.1.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP support, hooks, subagents, error handling, and session management with detailed API documentation.

##### 5.2.1.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, query interface, built-in tools, permission modes, MCP servers, hooks, subagents, message types, session history, and MCP server management.

##### 5.2.1.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Demonstrates Python Agent SDK usage patterns including basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, session resumption, and session history management with practical code examples.

##### 5.2.1.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Provides TypeScript Agent SDK patterns for basic agents, hooks, subagents, MCP integration, and session operations with concise code examples demonstrating agentic workflows.

#### 5.2.2 API Features: Tool Use, Streaming & Files

Comprehensive references for tool use (manual and runner-based patterns), real-time streaming with content-type handling, and file management via the Files API, enabling dynamic agent capabilities and asynchronous batch processing.

##### 5.2.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice, tool runner vs manual loops, server-side tools, structured outputs, and best practices.

##### 5.2.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference covering tool runner, manual agentic loops, code execution, memory tool, MCP conversion, and structured outputs with Pydantic.

##### 5.2.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops, streaming loops, code execution, and structured outputs.

##### 5.2.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content types, progress tracking, and error handling.

##### 5.2.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, content-type handling, tool-runner integration, and Server-Sent Events format.

##### 5.2.2.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading, managing, and using files (PDFs, images) in messages with file_id references, including list, delete, download, and metadata operations.

##### 5.2.2.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading, using, and managing files in messages with file_id references, including list, delete, and download operations.

##### 5.2.2.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, status polling, result retrieval, and cost optimization at 50% of standard pricing for asynchronous processing.

### 5.3 Optimization, Models & Application Design

Prompt caching strategies, the complete Claude model catalog with pricing, HTTP error handling with retry patterns, and high-level guides for agent architecture and tool surface design.

#### 5.3.1 API Optimization: Caching, Models & Errors

Optimization and troubleshooting resources covering prompt caching design patterns, the complete Claude model catalog with pricing and capabilities, and HTTP error handling with retry strategies and typed exception patterns.

##### 5.3.1.1 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Design patterns and anti-patterns for effective prompt caching, covering prefix-match invariants, breakpoint placement, silent invalidators, and cost-benefit analysis for cache TTLs.

##### 5.3.1.2 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact IDs, aliases, context windows, and pricing; includes programmatic model discovery via Models API for live capability data (thinking, vision, effort, structured outputs).

##### 5.3.1.3 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with causes, fixes, and SDK exception classes; includes common mistakes, retry strategies, and typed error handling patterns.

#### 5.3.2 Building with Claude API: Skills & Guides

High-level guides for building Claude applications, including architecture decisions, agent design heuristics for tool surfaces and context management, and an interactive agent for navigating Claude documentation and SDKs.

##### 5.3.2.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, including language detection, surface selection, architecture overview, model defaults, and thinking/effort parameters.

##### 5.3.2.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation and routing to relevant sections.

##### 5.3.2.3 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Decision heuristics for building agents covering tool surface design, context management, caching strategies, and composing tool calls via programmatic tool calling.

##### 5.3.2.4 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, the Claude Agent SDK, and Claude API by fetching official documentation, providing actionable guidance, and referencing project-specific context.

---

## 6. Automation, Integrations & External Tools

Hooks for lifecycle event automation, reusable skills via slash commands, browser automation, web fetch and search, cron scheduling, and MCP resource integration.

### 6.1 Hooks & Reusable Skills

Event-driven lifecycle hooks that execute commands or agents at specific workflow points, plus slash-command-invoked skills encapsulating domain-specific workflows.

#### 6.1.1 Hooks: Configuration & Lifecycle Events

Event-driven automation framework that executes shell commands, LLM prompts, or agents at specific lifecycle points (tool use, permissions, session events). Hooks receive structured JSON input, evaluate conditions, and return control decisions and context modifications to shape execution flow.

##### 6.1.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines how to configure lifecycle hooks in Claude Code that run shell commands, LLM prompts, or agents at specific events like tool use, permissions, and session lifecycle. Hooks receive JSON input and can return control decisions, system messages, and context modifications.

##### 6.1.1.2 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether conditions are met with optional reason for failures.

##### 6.1.1.3 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies agent task completion by analyzing conversation transcripts and codebase state, returning structured results indicating whether stop conditions are met.

##### 6.1.1.4 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Displays additional context provided by a hook command.

##### 6.1.1.5 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command that prevented execution.

##### 6.1.1.6 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook has stopped execution continuation with an associated message.

##### 6.1.1.7 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for messages indicating a hook has stopped continuation.

##### 6.1.1.8 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook command with its output content.

#### 6.1.2 Skills: Definition, Invocation & Management

Reusable specialized capabilities invoked through slash commands that encapsulate domain-specific workflows and configuration management. Skills are defined through user interviews and iterative refinement, with comprehensive onboarding flows for repository setup and multi-step verification processes ensuring correctness.

##### 6.1.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills and slash commands within conversations, with requirement to invoke before generating other responses when skills match user requests.

##### 6.1.2.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Directs use of the Skill tool to execute user-invocable skills (e.g., /commit) only from the documented list, not guessed commands.

##### 6.1.2.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the session and instructs Claude to continue following their guidelines.

##### 6.1.2.4 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md, skills, and hooks in a repository through codebase exploration, user interviews, and iterative proposal refinement.

##### 6.1.2.5 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files, covering settings merging, hook configuration, and validation.

##### 6.1.2.6 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks for Claude Code, ensuring correctness through dedup checks, pipe-testing, and proof-of-execution.

##### 6.1.2.7 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts a session into a reusable skill through analysis, multi-round user interviews, and SKILL.md generation with frontmatter, steps, success criteria, and execution annotations.

### 6.2 Browser, Web & Scheduling

Chrome-based UI automation with GIF recording and console debugging, web fetch and search with source attribution, and cron-based task scheduling with remote agent orchestration.

#### 6.2.1 Browser Automation & Computer Use

Chrome-based browser automation enabling UI interaction through mouse, keyboard, and visual feedback. Provides precise element targeting, GIF recording with frame capture, console debugging with pattern filtering, and tab context management while preventing dialog loops and enforcing desktop access restrictions.

##### 6.2.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse, keyboard, and screenshots, with guidance on precise element clicking and cursor positioning.

##### 6.2.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameters for the Chrome browser computer tool, including mouse operations (click, drag, hover), keyboard input, scrolling, screenshot capture, and element inspection via zoom and scroll-to functions.

##### 6.2.1.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with frame capture, console debugging with pattern filtering, avoiding JavaScript dialogs, preventing loops, and managing tab context with fresh IDs across sessions.

##### 6.2.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the tool name in the search query to enable subsequent tool calls.

##### 6.2.1.5 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools with tool selection tiers, app access restrictions, link safety, and financial action restrictions.

#### 6.2.2 Web Fetch & Search Tools

Information retrieval systems for accessing current web content and search results beyond knowledge cutoffs. WebFetch converts HTML to markdown with caching and redirect handling, while WebSearch returns formatted results with mandatory source attribution, complemented by summarization workflows that enforce quote limits and copyright compliance.

##### 6.2.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with an AI model based on a user-provided prompt. Includes automatic HTTPS upgrade, redirect handling, and a 15-minute cache for repeated requests.

##### 6.2.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Enables Claude to search the web for current information beyond its knowledge cutoff and return formatted results with markdown hyperlinks. Requires mandatory inclusion of a Sources section in responses listing all relevant URLs from search results.

##### 6.2.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits (125 chars) and attribution rules for untrusted domains while respecting copyright and licensing.

##### 6.2.2.4 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Curated WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, including models, features, tools, and SDKs across multiple languages.

#### 6.2.3 Scheduling & Cron Jobs

Cron-based task scheduling with support for one-shot and recurring execution, interval-to-cron conversion, and remote agent orchestration via cloud APIs. Includes load-distribution guidance and optional durability for persistence.

##### 6.2.3.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron jobs using standard 5-field cron syntax in local timezone, with guidance on avoiding :00/:30 minute marks for load distribution and optional durability for persistence across restarts.

##### 6.2.3.2 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts to cron expression, and schedules recurring tasks with automatic execution.

##### 6.2.3.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via Anthropic cloud API, handling creation, updates, listing, and execution with environment and MCP connector management.

### 6.3 MCP Resources & Tool Integration

Discovery and handling of MCP resources and tools: locating tool schemas by name or keyword, managing empty or non-displayable content, and optimizing long outputs through targeted queries and subagent delegation.

#### 6.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

#### 6.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it is not displayable.

#### 6.3.3 [MCP Tool Result Truncation (System Prompt)](system-prompts/system-prompt-mcp-tool-result-truncation.md)

Provides guidance on handling long MCP tool outputs by using targeted queries for filtering and delegating analysis to subagents for summarization.

#### 6.3.4 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by name or keyword query, returning JSONSchema definitions that enable tool invocation with support for exact selection and ranked keyword matching.

---

## 7. User Communication, Interaction & Learning

Structured communication channels, response formatting standards, interactive requirement gathering, educational interaction patterns, advisor review checkpoints, and personality-driven terminal companions.

### 7.1 Messaging & Response Formatting

Structured channels for sending markdown messages and attachments, progress reporting conventions, and unified response formatting standards emphasizing conciseness and direct communication.

#### 7.1.1 User-Facing Messaging & Communication

Structured communication channels for sending markdown messages and file attachments to users, with status labeling, progress checkpoints, and action summaries using consistent formatting conventions.

##### 7.1.1.1 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown messages with optional file attachments to users, with status labels distinguishing reactive replies from proactive notifications.

##### 7.1.1.2 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to send all user-facing replies through SendUserMessage, with guidance on acknowledgments for long tasks and checkpoints for progress updates.

##### 7.1.1.3 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Requires agents to describe their most recent action in 3-5 present-tense words, naming specific files or functions rather than branches, with examples of good and bad formats.

##### 7.1.1.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths, include code snippets only when essential, avoid emojis, and omit colons before tool calls for clear communication.

#### 7.1.2 Output Style & Response Formatting

Unified response formatting standards emphasizing conciseness, direct communication, and navigable code references. Includes parallel tool execution for efficiency and active style enforcement across outputs.

##### 7.1.2.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number format when referencing code to help users navigate to source locations.

##### 7.1.2.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Directs responses to be short and concise.

##### 7.1.2.3 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning and focusing text output on decisions, status updates, and blockers.

##### 7.1.2.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that a specific output style is active and instructs it to follow the associated guidelines.

##### 7.1.2.5 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to make independent tool calls in parallel to maximize efficiency while respecting dependencies between sequential operations.

### 7.2 Interactive Input & Decision Support

Prompted requirement gathering with visual UI previews, advisor review checkpoints before substantive changes, and tool hierarchy preferences for execution control.

#### 7.2.1 User Interaction & Question Tools

Interactive requirement gathering and decision support through prompted questions, with optional visual previews of UI mockups, code snippets, and diagrams for side-by-side comparison during execution.

##### 7.2.1.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying requirements, and presenting implementation choices during execution, with special handling for plan mode.

##### 7.2.1.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructs on using the optional preview field for single-select questions to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML.

##### 7.2.1.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering of UI options using markdown monospace boxes for mockups, code snippets, diagrams, and configuration examples.

#### 7.2.2 Advisor & Reviewer Tools

Decision-support and execution-control mechanisms that introduce review checkpoints and tool hierarchy preferences. The Advisor provides guidance before substantive changes while tool reservations establish precedence rules for specialized versus general-purpose execution.

##### 7.2.2.1 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the Advisor tool, a stronger reviewer model that provides guidance before substantive work and helps resolve conflicts.

##### 7.2.2.2 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserves Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

### 7.3 Learning, Personality & Conversational Aids

Educational interaction patterns for collaborative learning, personality-driven terminal coding companions, and conversational prediction to anticipate user intent.

#### 7.3.1 Learning & Teaching Modes

Educational interaction patterns that transform task execution into collaborative learning experiences. Claude solicits human input on design decisions, provides structured insights into implementation choices, and offers guided step-by-step instruction through interactive overlays rather than direct tool access.

##### 7.3.1.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Configures collaborative learning mode where Claude balances task completion with human education by requesting user contributions on design decisions, using TodoList tracking and Learn by Doing requests with TODO(human) markers.

##### 7.3.1.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code changes using a formatted insight block with 2-3 key learning points specific to the codebase.

##### 7.3.1.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users step-by-step with fullscreen tooltip overlays instead of direct tool access, activated by learning-oriented phrases.

#### 7.3.2 Terminal Coding Companions

Generates distinct personality-driven coding companions with procedural traits and names that interact with developers in terminal environments.

##### 7.3.2.1 [Buddy Mode (System Prompt)](system-prompts/system-prompt-buddy-mode.md)

Generates memorable terminal-based coding companions with distinct personalities, single-word names, and quirky traits derived from rarity, species, stats, and inspiration words to comment on developer work.

#### 7.3.3 Conversational Prediction

Anticipates natural next user inputs based on conversation context to guide conversational flow without meta-commentary.

##### 7.3.3.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs to Claude Code based on conversation context, suggesting what the user would likely type next without evaluative or meta-commentary.
