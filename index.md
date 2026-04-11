# Claude Code System Prompts Index

Documentation and tooling for building, deploying, and operating Claude Code agents — from low-level execution policies and API references to multi-agent coordination and persistent session management — giving developers everything needed to create reliable, production-grade AI coding systems.

## Table of Contents

1. [Agent Orchestration & Multi-Agent Systems](#1-agent-orchestration-multi-agent-systems)
   1. [Planning & Approval Workflows](#11-planning-approval-workflows)
      1. [Plan Mode System Reminders](#111-plan-mode-system-reminders)
         1. [Plan file reference (System Reminder)](#1111-plan-file-reference-system-reminder)
         2. [Plan mode is active (5-phase) [System Reminder]](#1112-plan-mode-is-active-5-phase-system-reminder)
         3. [Plan mode is active (iterative) [System Reminder]](#1113-plan-mode-is-active-iterative-system-reminder)
         4. [Plan mode is active (subagent) [System Reminder]](#1114-plan-mode-is-active-subagent-system-reminder)
         5. [Plan mode re-entry (System Reminder)](#1115-plan-mode-re-entry-system-reminder)
         6. [Exited plan mode (System Reminder)](#1116-exited-plan-mode-system-reminder)
         7. [Ultraplan mode (System Reminder)](#1117-ultraplan-mode-system-reminder)
         8. [Verify plan reminder (System Reminder)](#1118-verify-plan-reminder-system-reminder)
      2. [Plan Mode Tools & Workflow](#112-plan-mode-tools-workflow)
         1. [EnterPlanMode (Tool Description)](#1121-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#1122-exitplanmode-tool-description)
         3. [EnterWorktree (Tool Description)](#1123-enterworktree-tool-description)
         4. [ExitWorktree (Tool Description)](#1124-exitworktree-tool-description)
         5. [Phase four of plan mode (System Prompt)](#1125-phase-four-of-plan-mode-system-prompt)
         6. [Plan mode (enhanced) [Agent Prompt]](#1126-plan-mode-enhanced-agent-prompt)
      3. [Remote Planning & Implementation Sessions](#113-remote-planning-implementation-sessions)
         1. [Remote plan mode (ultraplan) [System Prompt]](#1131-remote-plan-mode-ultraplan-system-prompt)
         2. [Remote planning session (System Prompt)](#1132-remote-planning-session-system-prompt)
   2. [Subagent Delegation & Parallel Execution](#12-subagent-delegation-parallel-execution)
      1. [Subagent Delegation & Task Orchestration](#121-subagent-delegation-task-orchestration)
         1. [Tool usage (delegate exploration) [System Prompt]](#1211-tool-usage-delegate-exploration-system-prompt)
         2. [Tool usage (subagent guidance) [System Prompt]](#1212-tool-usage-subagent-guidance-system-prompt)
         3. [Writing subagent prompts (System Prompt)](#1213-writing-subagent-prompts-system-prompt)
         4. [Subagent delegation examples (System Prompt)](#1214-subagent-delegation-examples-system-prompt)
         5. [Subagent prompt-writing examples (System Prompt)](#1215-subagent-prompt-writing-examples-system-prompt)
         6. [Fork usage guidelines (System Prompt)](#1216-fork-usage-guidelines-system-prompt)
         7. [Agent (usage notes) [Tool Description]](#1217-agent-usage-notes-tool-description)
      2. [Batch Processing & Parallel Work Orchestration](#122-batch-processing-parallel-work-orchestration)
         1. [/batch slash command (Agent Prompt)](#1221-batch-slash-command-agent-prompt)
         2. [Worker fork (Agent Prompt)](#1222-worker-fork-agent-prompt)
         3. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#1223-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   3. [Multi-Agent Team Coordination](#13-multi-agent-team-coordination)
      1. [Multi-Agent Team Coordination Reminders](#131-multi-agent-team-coordination-reminders)
         1. [Team Coordination (System Reminder)](#1311-team-coordination-system-reminder)
         2. [Team Shutdown (System Reminder)](#1312-team-shutdown-system-reminder)
         3. [Agent mention (System Reminder)](#1313-agent-mention-system-reminder)
      2. [Multi-Agent Team Tools](#132-multi-agent-team-tools)
         1. [TeammateTool (Tool Description)](#1321-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#1322-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#1323-sendmessagetool-tool-description)
         4. [SendMessageTool (non-agent-teams) [Tool Description]](#1324-sendmessagetool-non-agent-teams-tool-description)
         5. [Teammate Communication (System Prompt)](#1325-teammate-communication-system-prompt)
   4. [Agent Design & Creation](#14-agent-design-creation)
      1. [Agent creation architect (Agent Prompt)](#141-agent-creation-architect-agent-prompt)
      2. [Agent Hook (Agent Prompt)](#142-agent-hook-agent-prompt)
      3. [Hook condition evaluator (stop) [Agent Prompt]](#143-hook-condition-evaluator-stop-agent-prompt)
      4. [Agent Design Patterns (Skill)](#144-agent-design-patterns-skill)
2. [Session State, Memory & Context Management](#2-session-state-memory-context-management)
   1. [Memory Persistence & Consolidation](#21-memory-persistence-consolidation)
      1. [Memory Management & Consolidation](#211-memory-management-consolidation)
         1. [Dream memory consolidation (Agent Prompt)](#2111-dream-memory-consolidation-agent-prompt)
         2. [Dream memory pruning (Agent Prompt)](#2112-dream-memory-pruning-agent-prompt)
         3. [Memory synthesis (Agent Prompt)](#2113-memory-synthesis-agent-prompt)
         4. [Determine which memory files to attach (Agent Prompt)](#2114-determine-which-memory-files-to-attach-agent-prompt)
         5. [Session memory update instructions (Agent Prompt)](#2115-session-memory-update-instructions-agent-prompt)
         6. [Dream team memory handling (System Prompt)](#2116-dream-team-memory-handling-system-prompt)
         7. [Memory staleness verification (System Prompt)](#2117-memory-staleness-verification-system-prompt)
         8. [Memory description of user details (System Prompt)](#2118-memory-description-of-user-details-system-prompt)
         9. [Memory description of user feedback (System Prompt)](#2119-memory-description-of-user-feedback-system-prompt)
         10. [Memory description of user feedback (with explicit save) [System Prompt]](#21110-memory-description-of-user-feedback-with-explicit-save-system-prompt)
         11. [Description part of memory instructions (System Prompt)](#21111-description-part-of-memory-instructions-system-prompt)
         12. [Agent memory instructions (System Prompt)](#21112-agent-memory-instructions-system-prompt)
         13. [Session memory template (Data)](#21113-session-memory-template-data)
      2. [Memory & Context State Reminders](#212-memory-context-state-reminders)
         1. [Memory file contents (System Reminder)](#2121-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#2122-nested-memory-contents-system-reminder)
         3. [MCP resource no content (System Reminder)](#2123-mcp-resource-no-content-system-reminder)
         4. [MCP resource no displayable content (System Reminder)](#2124-mcp-resource-no-displayable-content-system-reminder)
   2. [Conversation Summarization & Context Compaction](#22-conversation-summarization-context-compaction)
      1. [Conversation summarization (Agent Prompt)](#221-conversation-summarization-agent-prompt)
      2. [Recent Message Summarization (Agent Prompt)](#222-recent-message-summarization-agent-prompt)
      3. [Context compaction summary (System Prompt)](#223-context-compaction-summary-system-prompt)
      4. [Partial compaction instructions (System Prompt)](#224-partial-compaction-instructions-system-prompt)
   3. [Task Tracking & Session Continuity](#23-task-tracking-session-continuity)
      1. [Task Tracking & Session State Reminders](#231-task-tracking-session-state-reminders)
         1. [Task tools reminder (System Reminder)](#2311-task-tools-reminder-system-reminder)
         2. [TodoWrite reminder (System Reminder)](#2312-todowrite-reminder-system-reminder)
         3. [Token usage (System Reminder)](#2313-token-usage-system-reminder)
         4. [USD budget (System Reminder)](#2314-usd-budget-system-reminder)
         5. [Session continuation (System Reminder)](#2315-session-continuation-system-reminder)
         6. [Loop wakeup not scheduled (System Reminder)](#2316-loop-wakeup-not-scheduled-system-reminder)
         7. [Invoked skills (System Reminder)](#2317-invoked-skills-system-reminder)
      2. [Task Management Tools](#232-task-management-tools)
         1. [TodoWrite (Tool Description)](#2321-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#2322-taskcreate-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#2323-tasklist-teammate-workflow-tool-description)
         4. [Tool usage (task management) [System Prompt]](#2324-tool-usage-task-management-system-prompt)
   4. [Session Identification & History](#24-session-identification-history)
      1. [Session Metadata & Title Generation](#241-session-metadata-title-generation)
         1. [Coding session title generator (Agent Prompt)](#2411-coding-session-title-generator-agent-prompt)
         2. [Session title and branch generation (Agent Prompt)](#2412-session-title-and-branch-generation-agent-prompt)
         3. [Agent Summary Generation (System Prompt)](#2413-agent-summary-generation-system-prompt)
      2. [Session Search & History](#242-session-search-history)
         1. [Session search (Agent Prompt)](#2421-session-search-agent-prompt)
   5. [IDE & File State Reminders](#25-ide-file-state-reminders)
      1. [Lines selected in IDE (System Reminder)](#251-lines-selected-in-ide-system-reminder)
      2. [File opened in IDE (System Reminder)](#252-file-opened-in-ide-system-reminder)
      3. [File modified by user or linter (System Reminder)](#253-file-modified-by-user-or-linter-system-reminder)
      4. [File truncated (System Reminder)](#254-file-truncated-system-reminder)
      5. [File exists but empty (System Reminder)](#255-file-exists-but-empty-system-reminder)
      6. [File shorter than offset (System Reminder)](#256-file-shorter-than-offset-system-reminder)
      7. [New diagnostics detected (System Reminder)](#257-new-diagnostics-detected-system-reminder)
      8. [Compact file reference (System Reminder)](#258-compact-file-reference-system-reminder)
      9. [Output style active (System Reminder)](#259-output-style-active-system-reminder)
      10. [Malware analysis after Read tool call (System Reminder)](#2510-malware-analysis-after-read-tool-call-system-reminder)
      11. [/btw side question (System Reminder)](#2511-btw-side-question-system-reminder)
   6. [Hook System Reminders](#26-hook-system-reminders)
      1. [Hook additional context (System Reminder)](#261-hook-additional-context-system-reminder)
      2. [Hook blocking error (System Reminder)](#262-hook-blocking-error-system-reminder)
      3. [Hook stopped continuation prefix (System Reminder)](#263-hook-stopped-continuation-prefix-system-reminder)
      4. [Hook stopped continuation (System Reminder)](#264-hook-stopped-continuation-system-reminder)
      5. [Hook success (System Reminder)](#265-hook-success-system-reminder)
3. [Shell Execution, File Operations & Tool Policies](#3-shell-execution-file-operations-tool-policies)
   1. [Bash Execution Policies & Sandbox](#31-bash-execution-policies-sandbox)
      1. [Bash Sandbox Policy & Configuration](#311-bash-sandbox-policy-configuration)
         1. [Bash (sandbox — adjust settings) [Tool Description]](#3111-bash-sandbox-—-adjust-settings-tool-description)
         2. [Bash (sandbox — default to sandbox) [Tool Description]](#3112-bash-sandbox-—-default-to-sandbox-tool-description)
         3. [Bash (sandbox — evidence: access denied) [Tool Description]](#3113-bash-sandbox-—-evidence-access-denied-tool-description)
         4. [Bash (sandbox — evidence list header) [Tool Description]](#3114-bash-sandbox-—-evidence-list-header-tool-description)
         5. [Bash (sandbox — evidence: network failures) [Tool Description]](#3115-bash-sandbox-—-evidence-network-failures-tool-description)
         6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#3116-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
         7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#3117-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
         8. [Bash (sandbox — explain restriction) [Tool Description]](#3118-bash-sandbox-—-explain-restriction-tool-description)
         9. [Bash (sandbox — failure evidence condition) [Tool Description]](#3119-bash-sandbox-—-failure-evidence-condition-tool-description)
         10. [Bash (sandbox — mandatory mode) [Tool Description]](#31110-bash-sandbox-—-mandatory-mode-tool-description)
         11. [Bash (sandbox — no exceptions) [Tool Description]](#31111-bash-sandbox-—-no-exceptions-tool-description)
         12. [Bash (sandbox — no sensitive paths) [Tool Description]](#31112-bash-sandbox-—-no-sensitive-paths-tool-description)
         13. [Bash (sandbox — per-command) [Tool Description]](#31113-bash-sandbox-—-per-command-tool-description)
         14. [Bash (sandbox — response header) [Tool Description]](#31114-bash-sandbox-—-response-header-tool-description)
         15. [Bash (sandbox — retry without sandbox) [Tool Description]](#31115-bash-sandbox-—-retry-without-sandbox-tool-description)
         16. [Bash (sandbox — tmpdir) [Tool Description]](#31116-bash-sandbox-—-tmpdir-tool-description)
         17. [Bash (sandbox — user permission prompt) [Tool Description]](#31117-bash-sandbox-—-user-permission-prompt-tool-description)
      2. [Bash Command Execution Best Practices](#312-bash-command-execution-best-practices)
         1. [Bash (semicolon usage) [Tool Description]](#3121-bash-semicolon-usage-tool-description)
         2. [Bash (sequential commands) [Tool Description]](#3122-bash-sequential-commands-tool-description)
         3. [Bash (sleep — keep short) [Tool Description]](#3123-bash-sleep-—-keep-short-tool-description)
         4. [Bash (sleep — no polling background tasks) [Tool Description]](#3124-bash-sleep-—-no-polling-background-tasks-tool-description)
         5. [Bash (sleep — run immediately) [Tool Description]](#3125-bash-sleep-—-run-immediately-tool-description)
         6. [Bash (sleep — use check commands) [Tool Description]](#3126-bash-sleep-—-use-check-commands-tool-description)
         7. [Bash (timeout) [Tool Description]](#3127-bash-timeout-tool-description)
         8. [Bash (verify parent directory) [Tool Description]](#3128-bash-verify-parent-directory-tool-description)
         9. [Bash (maintain cwd) [Tool Description]](#3129-bash-maintain-cwd-tool-description)
         10. [Bash (no newlines) [Tool Description]](#31210-bash-no-newlines-tool-description)
         11. [Bash (overview) [Tool Description]](#31211-bash-overview-tool-description)
         12. [Bash (parallel commands) [Tool Description]](#31212-bash-parallel-commands-tool-description)
         13. [Bash (quote file paths) [Tool Description]](#31213-bash-quote-file-paths-tool-description)
         14. [Bash (working directory) [Tool Description]](#31214-bash-working-directory-tool-description)
         15. [Bash (prefer dedicated tools) [Tool Description]](#31215-bash-prefer-dedicated-tools-tool-description)
         16. [Bash (built-in tools note) [Tool Description]](#31216-bash-built-in-tools-note-tool-description)
         17. [Bash (alternative — communication) [Tool Description]](#31217-bash-alternative-—-communication-tool-description)
         18. [Bash (alternative — content search) [Tool Description]](#31218-bash-alternative-—-content-search-tool-description)
         19. [Bash (alternative — edit files) [Tool Description]](#31219-bash-alternative-—-edit-files-tool-description)
         20. [Bash (alternative — file search) [Tool Description]](#31220-bash-alternative-—-file-search-tool-description)
         21. [Bash (alternative — read files) [Tool Description]](#31221-bash-alternative-—-read-files-tool-description)
         22. [Bash (alternative — write files) [Tool Description]](#31222-bash-alternative-—-write-files-tool-description)
   2. [Bash Command Documentation & Safety](#32-bash-command-documentation-safety)
      1. [Bash command description writer (Agent Prompt)](#321-bash-command-description-writer-agent-prompt)
      2. [Bash command prefix detection (Agent Prompt)](#322-bash-command-prefix-detection-agent-prompt)
   3. [PowerShell Tool & Scripting](#33-powershell-tool-scripting)
      1. [PowerShell (Tool Description)](#331-powershell-tool-description)
      2. [PowerShell edition for 5.1 (System Prompt)](#332-powershell-edition-for-51-system-prompt)
      3. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#333-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
      4. [One of six rules for using sleep command (System Prompt)](#334-one-of-six-rules-for-using-sleep-command-system-prompt)
   4. [File System Tools](#34-file-system-tools)
      1. [ReadFile (Tool Description)](#341-readfile-tool-description)
      2. [Write (Tool Description)](#342-write-tool-description)
      3. [Edit (Tool Description)](#343-edit-tool-description)
      4. [Grep (Tool Description)](#344-grep-tool-description)
      5. [NotebookEdit (Tool Description)](#345-notebookedit-tool-description)
   5. [Tool Preference & File Operation Policies](#35-tool-preference-file-operation-policies)
      1. [Tool usage (create files) [System Prompt]](#351-tool-usage-create-files-system-prompt)
      2. [Tool usage (edit files) [System Prompt]](#352-tool-usage-edit-files-system-prompt)
      3. [Tool usage (read files) [System Prompt]](#353-tool-usage-read-files-system-prompt)
      4. [Tool usage (reserve Bash) [System Prompt]](#354-tool-usage-reserve-bash-system-prompt)
      5. [Tool usage (search content) [System Prompt]](#355-tool-usage-search-content-system-prompt)
      6. [Tool usage (search files) [System Prompt]](#356-tool-usage-search-files-system-prompt)
      7. [Tool usage (direct search) [System Prompt]](#357-tool-usage-direct-search-system-prompt)
4. [Code Quality, Safety & Development Workflow](#4-code-quality-safety-development-workflow)
   1. [Code Quality & Engineering Discipline](#41-code-quality-engineering-discipline)
      1. [Doing tasks (no premature abstractions) [System Prompt]](#411-doing-tasks-no-premature-abstractions-system-prompt)
      2. [Doing tasks (no unnecessary error handling) [System Prompt]](#412-doing-tasks-no-unnecessary-error-handling-system-prompt)
      3. [Doing tasks (no compatibility hacks) [System Prompt]](#413-doing-tasks-no-compatibility-hacks-system-prompt)
      4. [Doing tasks (no unnecessary additions) [System Prompt]](#414-doing-tasks-no-unnecessary-additions-system-prompt)
      5. [Doing tasks (no time estimates) [System Prompt]](#415-doing-tasks-no-time-estimates-system-prompt)
      6. [Doing tasks (minimize file creation) [System Prompt]](#416-doing-tasks-minimize-file-creation-system-prompt)
      7. [Doing tasks (read before modifying) [System Prompt]](#417-doing-tasks-read-before-modifying-system-prompt)
      8. [Doing tasks (software engineering focus) [System Prompt]](#418-doing-tasks-software-engineering-focus-system-prompt)
      9. [Doing tasks (ambitious tasks) [System Prompt]](#419-doing-tasks-ambitious-tasks-system-prompt)
      10. [Doing tasks (help and feedback) [System Prompt]](#4110-doing-tasks-help-and-feedback-system-prompt)
   2. [Code Verification & Review](#42-code-verification-review)
      1. [Code Verification & Testing](#421-code-verification-testing)
         1. [Verify skill (Skill)](#4211-verify-skill-skill)
         2. [Verify CLI changes (example for Verify skill) [Skill]](#4212-verify-cli-changes-example-for-verify-skill-skill)
         3. [Verify server/API changes (example for Verify skill) [Skill]](#4213-verify-serverapi-changes-example-for-verify-skill-skill)
         4. [Create verifier skills (Skill)](#4214-create-verifier-skills-skill)
         5. [Verification specialist (Agent Prompt)](#4215-verification-specialist-agent-prompt)
      2. [Code Review & Security Analysis](#422-code-review-security-analysis)
         1. [/review-pr slash command (Agent Prompt)](#4221-review-pr-slash-command-agent-prompt)
         2. [/security-review slash command (Agent Prompt)](#4222-security-review-slash-command-agent-prompt)
         3. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#4223-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         4. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#4224-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         5. [Simplify (Skill)](#4225-simplify-skill)
   3. [Action Safety & Security Constraints](#43-action-safety-security-constraints)
      1. [Action Safety & Reversibility](#431-action-safety-reversibility)
         1. [Executing actions with care (System Prompt)](#4311-executing-actions-with-care-system-prompt)
         2. [Tool execution denied (System Prompt)](#4312-tool-execution-denied-system-prompt)
      2. [Security Policy & Malware Constraints](#432-security-policy-malware-constraints)
         1. [Censoring assistance with malicious activities (System Prompt)](#4321-censoring-assistance-with-malicious-activities-system-prompt)
         2. [Doing tasks (security) [System Prompt]](#4322-doing-tasks-security-system-prompt)
   4. [Git Operations & CI Integration](#44-git-operations-ci-integration)
      1. [Git Operations & Safety](#441-git-operations-safety)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#4411-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#4412-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#4413-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#4414-bash-git-—-prefer-new-commits-tool-description)
         5. [Quick git commit (Agent Prompt)](#4415-quick-git-commit-agent-prompt)
         6. [Quick PR creation (Agent Prompt)](#4416-quick-pr-creation-agent-prompt)
         7. [Git status (System Prompt)](#4417-git-status-system-prompt)
      2. [GitHub Integration & CI/CD](#442-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#4421-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#4422-github-app-installation-pr-description-data)
   5. [Worker & Implementation Workflow](#45-worker-implementation-workflow)
      1. [Worker instructions (System Prompt)](#451-worker-instructions-system-prompt)
      2. [Advisor tool instructions (System Prompt)](#452-advisor-tool-instructions-system-prompt)
5. [Configuration, Automation & User Experience](#5-configuration-automation-user-experience)
   1. [Environment Setup & Onboarding](#51-environment-setup-onboarding)
      1. [Onboarding & Configuration Setup](#511-onboarding-configuration-setup)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#5111-init-claudemd-and-skill-setup-new-version-skill)
         2. [Team onboarding guide (Skill)](#5112-team-onboarding-guide-skill)
         3. [Update Claude Code Config (Skill)](#5113-update-claude-code-config-skill)
         4. [update-config (7-step verification flow) [Skill]](#5114-update-config-7-step-verification-flow-skill)
         5. [Managed Agents onboarding flow (Agent Prompt)](#5115-managed-agents-onboarding-flow-agent-prompt)
         6. [Onboarding guide generator (Agent Prompt)](#5116-onboarding-guide-generator-agent-prompt)
      2. [Session & Environment Configuration](#512-session-environment-configuration)
         1. [Minimal mode (System Prompt)](#5121-minimal-mode-system-prompt)
         2. [Scratchpad directory (System Prompt)](#5122-scratchpad-directory-system-prompt)
         3. [Status line setup (Agent Prompt)](#5123-status-line-setup-agent-prompt)
   2. [Skills, Hooks & Workflow Automation](#52-skills-hooks-workflow-automation)
      1. [Skill Creation & Management](#521-skill-creation-management)
         1. [Skillify Current Session (System Prompt)](#5211-skillify-current-session-system-prompt)
         2. [Skill (Tool Description)](#5212-skill-tool-description)
         3. [Tool usage (skill invocation) [System Prompt]](#5213-tool-usage-skill-invocation-system-prompt)
      2. [Hooks System Configuration](#522-hooks-system-configuration)
         1. [Hooks Configuration (System Prompt)](#5221-hooks-configuration-system-prompt)
   3. [Scheduling & Background Task Execution](#53-scheduling-background-task-execution)
      1. [Scheduling & Loop Execution](#531-scheduling-loop-execution)
         1. [/loop slash command (Skill)](#5311-loop-slash-command-skill)
         2. [/loop slash command (dynamic mode) [Skill]](#5312-loop-slash-command-dynamic-mode-skill)
         3. [/loop self-pacing mode (Skill)](#5313-loop-self-pacing-mode-skill)
         4. [/loop cloud-first scheduling offer (Skill)](#5314-loop-cloud-first-scheduling-offer-skill)
         5. [Dynamic pacing loop execution (Skill)](#5315-dynamic-pacing-loop-execution-skill)
         6. [Schedule recurring cron and execute immediately (compact) [Skill]](#5316-schedule-recurring-cron-and-execute-immediately-compact-skill)
         7. [Schedule recurring cron and run immediately (Skill)](#5317-schedule-recurring-cron-and-run-immediately-skill)
         8. [/dream nightly schedule (Skill)](#5318-dream-nightly-schedule-skill)
         9. [CronCreate (Tool Description)](#5319-croncreate-tool-description)
         10. [ScheduleWakeup (/loop dynamic mode) [Tool Description]](#53110-schedulewakeup-loop-dynamic-mode-tool-description)
         11. [Snooze (delay and reason guidance) [Tool Description]](#53111-snooze-delay-and-reason-guidance-tool-description)
         12. [/schedule slash command (Agent Prompt)](#53112-schedule-slash-command-agent-prompt)
      2. [Autonomous & Auto Mode Execution](#532-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#5321-auto-mode-system-prompt)
         2. [Autonomous loop check (System Prompt)](#5322-autonomous-loop-check-system-prompt)
         3. [Auto mode rule reviewer (Agent Prompt)](#5323-auto-mode-rule-reviewer-agent-prompt)
      3. [Background Monitoring & Async Tasks](#533-background-monitoring-async-tasks)
         1. [Background monitor (streaming events) [Tool Description]](#5331-background-monitor-streaming-events-tool-description)
   4. [Browser, Web & Computer Automation](#54-browser-web-computer-automation)
      1. [Browser & Computer Automation](#541-browser-computer-automation)
         1. [Computer (Tool Description)](#5411-computer-tool-description)
         2. [Computer action (Tool Parameter)](#5412-computer-action-tool-parameter)
         3. [Chrome browser MCP tools (System Prompt)](#5413-chrome-browser-mcp-tools-system-prompt)
         4. [Claude in Chrome browser automation (System Prompt)](#5414-claude-in-chrome-browser-automation-system-prompt)
         5. [Computer Use MCP (Skill)](#5415-computer-use-mcp-skill)
      2. [Web Search & Content Retrieval](#542-web-search-content-retrieval)
         1. [WebSearch (Tool Description)](#5421-websearch-tool-description)
         2. [WebFetch (Tool Description)](#5422-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#5423-webfetch-summarizer-agent-prompt)
   5. [Communication Style & User Interaction](#55-communication-style-user-interaction)
      1. [Communication Style & Response Formatting](#551-communication-style-response-formatting)
         1. [Communication style (System Prompt)](#5511-communication-style-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#5512-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#5513-tone-and-style-concise-output-—-short-system-prompt)
         4. [How to use the SendUserMessage tool (System Prompt)](#5514-how-to-use-the-sendusermessage-tool-system-prompt)
         5. [Agent thread notes (System Prompt)](#5515-agent-thread-notes-system-prompt)
      2. [User Interaction & Visual Decision Support](#552-user-interaction-visual-decision-support)
         1. [AskUserQuestion (Tool Description)](#5521-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#5522-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#5523-option-previewer-system-prompt)
      3. [Prompt Suggestion & Conversational Flow](#553-prompt-suggestion-conversational-flow)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#5531-prompt-suggestion-generator-v2-agent-prompt)
      4. [Learning & Teaching Modes](#554-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#5541-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#5542-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#5543-request_teach_access-part-of-teach-mode-tool-description)
   6. [Analytics, Debugging & Diagnostics](#56-analytics-debugging-diagnostics)
      1. [Usage Analytics & Insights](#561-usage-analytics-insights)
         1. [Insights at a glance summary (System Prompt)](#5611-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#5612-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#5613-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#5614-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#5615-insights-suggestions-system-prompt)
         6. [/insights report output (Skill)](#5616-insights-report-output-skill)
      2. [Debugging & Diagnostics Skills](#562-debugging-diagnostics-skills)
         1. [Debugging (Skill)](#5621-debugging-skill)
         2. [/stuck slash command (Skill)](#5622-stuck-slash-command-skill)
   7. [Tool Discovery & MCP Management](#57-tool-discovery-mcp-management)
      1. [Dynamic Tool Discovery](#571-dynamic-tool-discovery)
         1. [ToolSearch (second part) [Tool Description]](#5711-toolsearch-second-part-tool-description)
      2. [MCP Tool Management](#572-mcp-tool-management)
         1. [MCP Tool Result Truncation (System Prompt)](#5721-mcp-tool-result-truncation-system-prompt)
6. [API Documentation, SDKs & Developer Reference](#6-api-documentation-sdks-developer-reference)
   1. [Core Claude API & SDK Reference](#61-core-claude-api-sdk-reference)
      1. [Claude API Reference Documentation](#611-claude-api-reference-documentation)
         1. [Claude API reference — Python (Data)](#6111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#6112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#6113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#6114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#6115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#6116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#6117-claude-api-reference-—-c-data)
         8. [Claude API reference — cURL (Data)](#6118-claude-api-reference-—-curl-data)
         9. [HTTP error codes reference (Data)](#6119-http-error-codes-reference-data)
      2. [Tool Use & Streaming API References](#612-tool-use-streaming-api-references)
         1. [Tool use concepts (Data)](#6121-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6122-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6123-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#6124-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#6125-streaming-reference-—-typescript-data)
         6. [Files API reference — Python (Data)](#6126-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#6127-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#6128-message-batches-api-reference-—-python-data)
         9. [Prompt Caching — Design & Optimization (Data)](#6129-prompt-caching-—-design-optimization-data)
         10. [Claude model catalog (Data)](#61210-claude-model-catalog-data)
   2. [Managed Agents API Documentation](#62-managed-agents-api-documentation)
      1. [Managed Agents overview (Data)](#621-managed-agents-overview-data)
      2. [Managed Agents core concepts (Data)](#622-managed-agents-core-concepts-data)
      3. [Managed Agents endpoint reference (Data)](#623-managed-agents-endpoint-reference-data)
      4. [Managed Agents environments and resources (Data)](#624-managed-agents-environments-and-resources-data)
      5. [Managed Agents events and steering (Data)](#625-managed-agents-events-and-steering-data)
      6. [Managed Agents tools and skills (Data)](#626-managed-agents-tools-and-skills-data)
      7. [Managed Agents client patterns (Data)](#627-managed-agents-client-patterns-data)
      8. [Managed Agents reference — Python (Data)](#628-managed-agents-reference-—-python-data)
      9. [Managed Agents reference — TypeScript (Data)](#629-managed-agents-reference-—-typescript-data)
      10. [Managed Agents reference — cURL (Data)](#6210-managed-agents-reference-—-curl-data)
   3. [Application Building Guidance & Live Docs](#63-application-building-guidance-live-docs)
      1. [Claude API & SDK Application Building Skills](#631-claude-api-sdk-application-building-skills)
         1. [Build Claude API and SDK apps (Skill)](#6311-build-claude-api-and-sdk-apps-skill)
         2. [Build with Claude API (reference guide) [Skill]](#6312-build-with-claude-api-reference-guide-skill)
         3. [Building LLM-powered applications with Claude (Skill)](#6313-building-llm-powered-applications-with-claude-skill)
      2. [Documentation & Live Data Sources](#632-documentation-live-data-sources)
         1. [Live documentation sources (Data)](#6321-live-documentation-sources-data)
         2. [Claude guide agent (Agent Prompt)](#6322-claude-guide-agent-agent-prompt)
   4. [Code Intelligence & IDE Integration](#64-code-intelligence-ide-integration)
      1. [LSP (Tool Description)](#641-lsp-tool-description)
      2. [Config (Tool Description)](#642-config-tool-description)
   5. [Codebase Exploration Agents](#65-codebase-exploration-agents)
      1. [Explore (Agent Prompt)](#651-explore-agent-prompt)
      2. [General purpose (Agent Prompt)](#652-general-purpose-agent-prompt)
      3. [CLAUDE.md creation (Agent Prompt)](#653-claudemd-creation-agent-prompt)

---

## 1. Agent Orchestration & Multi-Agent Systems

Frameworks and tools for coordinating work across multiple agents, including delegation patterns, parallel execution, planning workflows, and team lifecycle management.

### 1.1 Planning & Approval Workflows

Structured planning phases where agents explore codebases, design solutions, and obtain user approval before execution, including remote and local plan modes.

#### 1.1.1 Plan Mode System Reminders

Directives that enforce planning workflows, manage plan file continuity across sessions, coordinate multi-agent exploration and iterative refinement, and signal transitions between planning and execution phases.

##### 1.1.1.1 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant.

##### 1.1.1.2 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode constraints and defines a 5-phase workflow with parallel exploration and multi-agent planning for comprehensive task design before execution.

##### 1.1.1.3 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning with the user through exploration, plan updates, and targeted questions until the plan is complete and ready for approval.

##### 1.1.1.4 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagents to read-only actions and plan file editing during plan mode, requiring comprehensive answers and clarifying questions.

##### 1.1.1.5 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude to evaluate existing plan files when re-entering plan mode and decide whether to continue or overwrite based on task relevance.

##### 1.1.1.6 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Plan mode has been exited; you can now make edits, run tools, and take actions, with the plan file available for reference if needed.

##### 1.1.1.7 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Instructs Claude to create detailed implementation plans using multi-agent exploration, spawning parallel agents to analyze codebase, identify files for modification, and critique the plan before execution or teleportation to local terminal.

##### 1.1.1.8 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to call a verification tool directly after plan implementation to confirm all items were completed correctly.

#### 1.1.2 Plan Mode Tools & Workflow

Structures implementation work through a planning phase where agents explore codebases and design solutions for user approval before execution. Integrates isolated git worktrees to sandbox changes during both planning and implementation.

##### 1.1.2.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions into plan mode for non-trivial implementation tasks to explore codebase and design approaches for user approval before coding, triggered by feature additions, architectural decisions, or multi-file changes.

##### 1.1.2.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning phase and requests user approval by reading the plan file, used only for implementation tasks requiring code changes, not research or exploration.

##### 1.1.2.3 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree with a new branch, only when explicitly requested by user, supporting both git repositories and VCS-agnostic workflows via hooks.

##### 1.1.2.4 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits an EnterWorktree session, restoring original working directory with options to keep or remove the worktree, and refusing removal if uncommitted changes exist unless explicitly confirmed.

##### 1.1.2.5 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes the implementation plan to file with file paths, changes, function references, and verification command, with a 40-line hard limit.

##### 1.1.2.6 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases, designs implementation plans, identifies critical files, and considers architectural trade-offs without modifying code.

#### 1.1.3 Remote Planning & Implementation Sessions

Orchestrates remote planning workflows that explore codebases, generate visual implementation plans, solicit approval, and execute approved changes via pull requests, with built-in handling for rejections and local terminal recovery.

##### 1.1.3.1 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore codebase, produce diagram-rich plans via ExitPlanMode, and implement approved plans with pull requests, handling rejections and teleportation back to local terminal.

##### 1.1.3.2 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Configures remote planning sessions to explore codebase, produce implementation plans via ExitPlanMode, handle approval or rejection feedback, and implement approved plans with pull requests.

### 1.2 Subagent Delegation & Parallel Execution

Patterns for decomposing work into parallel units, delegating to specialized subagents, and coordinating batch processing across distributed worker agents.

#### 1.2.1 Subagent Delegation & Task Orchestration

Coordinate work across specialized subagents by delegating tasks with clear context, managing parallel execution, and receiving asynchronous notifications. Subagents excel at isolated research and implementation when given self-contained briefs that avoid duplicating coordinator understanding.

##### 1.2.1.1 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Use the Task tool with the exploration subagent for broader codebase exploration and deep research when simple directed searches are insufficient or will exceed query limits.

##### 1.2.1.2 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use the Task tool with specialized subagents when tasks match agent descriptions; subagents are valuable for parallelizing queries and protecting context, but avoid duplicating work they perform.

##### 1.2.1.3 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

When delegating to subagents, brief them like a colleague with no context by explaining goals, what you've learned, and providing specific details like file paths and line numbers. Avoid delegating understanding; prove you understood the problem yourself.

##### 1.2.1.4 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results, showing how coordinators fork work and receive notifications asynchronously.

##### 1.2.1.5 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates how to write self-contained, well-structured prompts when delegating tasks to subagents, including context briefing, success criteria, and response format specifications.

##### 1.2.1.6 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for research and implementation work, prohibits reading fork output mid-flight or fabricating results, and requires trusting fork completion notifications rather than predicting outcomes.

##### 1.2.1.7 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Provides comprehensive guidance on spawning and managing subagents, including foreground vs. background execution, parallel launches, worktree isolation, and resumption via SendMessage tool with full context preservation.

#### 1.2.2 Batch Processing & Parallel Work Orchestration

Decomposes large codebase changes into independent parallel units executed by forked worker agents with isolated worktrees. Coordinates parallel tool execution and e2e test strategies across distributed work units.

##### 1.2.2.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing into 5-30 independent units, determining e2e test recipes, and spawning background worker agents with isolated worktrees.

##### 1.2.2.2 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

System prompt for a forked worker sub-agent that executes a single directive from the parent agent and reports back concisely without spawning additional sub-agents.

##### 1.2.2.3 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to increase efficiency, while calling dependent tools sequentially when one must complete before another.

### 1.3 Multi-Agent Team Coordination

Tools and protocols for inter-agent communication, task assignment, team identity, and graceful lifecycle management within agent teams.

#### 1.3.1 Multi-Agent Team Coordination Reminders

Instructions for establishing team identity, managing inter-agent communication, tracking collaborative work, and orchestrating graceful shutdown of distributed agents.

##### 1.3.1.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes team identity, resources, and communication protocols for multi-agent collaboration with task tracking and teammate coordination.

##### 1.3.1.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down team members gracefully before providing final response in non-interactive mode.

##### 1.3.1.3 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

User has requested invocation of a specific agent; invoke it with required context.

#### 1.3.2 Multi-Agent Team Tools

Enables agents to coordinate work within teams through message passing, task assignment, and lifecycle management. Supports both inter-agent communication and user-facing notifications with flexible delivery mechanisms.

##### 1.3.2.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages multi-agent teams for parallel work on complex projects, coordinating task assignment, message delivery, and idle state management with automatic teammate notifications.

##### 1.3.2.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completes, requiring all active members to be terminated first to prevent failure.

##### 1.3.2.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to teammates in agent teams with support for broadcast messaging and legacy protocol responses for shutdown and plan approval requests.

##### 1.3.2.4 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends user-visible messages with markdown support and file attachments, using status field to indicate intent (normal reply vs proactive notification).

##### 1.3.2.5 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents running in a team to use SendMessage tool for communication with teammates, either to specific agents or team-wide broadcasts.

### 1.4 Agent Design & Creation

Frameworks for architecting custom AI agents from user intent through operational deployment. Covers system prompt design, persona engineering, behavioral boundaries, tool composition strategies, and verification mechanisms for agent behavior.

#### 1.4.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces JSON output with agent identifier, usage conditions, and complete operational manual.

#### 1.4.2 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured pass/fail results with reasoning.

#### 1.4.3 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks by reading conversation transcripts and returning JSON with pass/fail status and quoted evidence from the transcript.

#### 1.4.4 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide covering decision heuristics for building agents including tool surface design (bash vs dedicated tools), context management strategies, caching patterns, and composing tool calls via programmatic tool calling.

---

## 2. Session State, Memory & Context Management

Mechanisms for persisting knowledge across sessions, tracking task state, compacting conversation history, and surfacing IDE and file context to maintain continuity.

### 2.1 Memory Persistence & Consolidation

Multi-phase memory consolidation that merges updates, deduplicates content, prunes stale information, and synthesizes relevant context across sessions.

#### 2.1.1 Memory Management & Consolidation

Persist institutional knowledge across sessions through multi-phase consolidation that merges updates, deduplicates content, and prunes stale information. Memory synthesis retrieves relevant context while team-shared memories remain conservatively protected during cleanup.

##### 2.1.1.1 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing files, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index.

##### 2.1.1.2 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs memory pruning by deleting stale or invalidated memories and collapsing duplicates while preserving team-shared memories conservatively.

##### 2.1.1.3 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and returns JSON synthesis of only query-relevant information with cited filenames, avoiding invention and padding.

##### 2.1.1.4 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selectively identifies up to 5 relevant memory files from available options to attach for a user query, avoiding false positives from keyword overlap.

##### 2.1.1.5 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations while preserving structure, maintaining section headers and italic descriptions, and keeping content dense and actionable.

##### 2.1.1.6 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Provides rules for consolidating shared team memories during dream sessions, including deduplication within team files, conservative pruning to avoid deleting teammate dependencies, and prohibition against promoting personal memories to team scope.

##### 2.1.1.7 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs the agent to verify memory records against current file state and delete stale memories that conflict with observed reality, trusting current observations over outdated context.

##### 2.1.1.8 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about the user's role, goals, knowledge, and preferences across sessions to enable personalized collaboration.

##### 2.1.1.9 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type storing guidance about work approaches from both successes and failures, with checks for contradictions with team memories before saving.

##### 2.1.1.10 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Describes feedback memory type capturing user guidance on work approaches, recording both successes and failures, with explicit instruction to save new memories noting contradictions with team feedback.

##### 2.1.1.11 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory field for capturing role, goals, responsibilities, and knowledge to enable personalized assistance while avoiding negative judgments or irrelevant details.

##### 2.1.1.12 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including memory update instructions in agent system prompts to build institutional knowledge across conversations.

##### 2.1.1.13 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files with sections for current state, task specification, files, workflow, errors, codebase documentation, learnings, key results, and worklog.

#### 2.1.2 Memory & Context State Reminders

Displays of persisted memory contents and resource availability status, providing access to stored context and indicating when external resources lack retrievable data.

##### 2.1.2.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path with type description.

##### 2.1.2.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file.

##### 2.1.2.3 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates an MCP resource has no content available.

##### 2.1.2.4 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates an MCP resource has no displayable content.

### 2.2 Conversation Summarization & Context Compaction

Compress conversation history into structured summaries that preserve technical details, user intent, and pending work for efficient resumption across context windows. Compaction prevents duplicate effort and repeated mistakes by capturing discoveries and next steps.

#### 2.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries with analysis of user intent, technical concepts, files modified, errors encountered, and pending tasks to preserve context across sessions.

#### 2.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portion following earlier retained context, capturing user intent, technical details, errors, and pending tasks with code snippets.

#### 2.2.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Defines structure for continuation summaries enabling efficient task resumption across context windows, including task overview, current state, discoveries, next steps, and context preservation with emphasis on preventing duplicate work and repeated mistakes.

#### 2.2.4 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured format for compacting partial conversations with analysis tags, covering primary request, technical concepts, files, errors, problem-solving, user messages, pending tasks, and context for continuing work.

### 2.3 Task Tracking & Session Continuity

Notifications and tools that surface resource metrics, encourage task tracking adoption, manage session continuity across machines, and coordinate dynamic skill execution.

#### 2.3.1 Task Tracking & Session State Reminders

Notifications that surface resource consumption metrics, encourage task tracking tool adoption, manage session continuity across machines, and coordinate dynamic skill execution.

##### 2.3.1.1 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant to current work.

##### 2.3.1.2 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task tracking when relevant to current work.

##### 2.3.1.3 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 2.3.1.4 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

##### 2.3.1.5 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

##### 2.3.1.6 [Loop wakeup not scheduled (System Reminder)](system-prompts/system-reminder-loop-wakeup-not-scheduled.md)

Instructs Claude on handling unscheduled /loop dynamic mode wakeups, including when to re-issue with the prompt field set or when the loop has ended.

##### 2.3.1.7 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the session and instructs Claude to follow their guidelines.

#### 2.3.2 Task Management Tools

Break down multi-step work into structured task lists with imperative descriptions and real-time status tracking. Tasks support dependency management and teammate discovery, enabling coordinated progress across shared work.

##### 2.3.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for multi-step sessions with dual-form task descriptions (imperative and active-form), supporting real-time status updates and preventing incomplete task completion.

##### 2.3.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for multi-step coding sessions with imperative subjects and optional active-form descriptions, supporting plan mode and complex task tracking.

##### 2.3.2.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from shared task lists, preferring lowest ID tasks and respecting blockedBy dependencies.

##### 2.3.2.4 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Use the TodoWrite tool to break down and track work progress, marking tasks as completed immediately rather than batching them.

### 2.4 Session Identification & History

Generation of concise session titles, git branch names, and action summaries, plus retrieval of past sessions through transcript search and relevance ranking.

#### 2.4.1 Session Metadata & Title Generation

Generates concise, human-readable identifiers for coding sessions and related artifacts. Produces sentence-case titles, git branch names, and action summaries following naming conventions to enable quick recognition and organization.

##### 2.4.1.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise 3-7 word sentence-case titles capturing the main goal of a coding session for easy recognition in session lists.

##### 2.4.1.2 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent for generating succinct session titles and git branch names from session descriptions, following naming conventions and returning JSON with title and branch fields.

##### 2.4.1.3 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word present-tense summaries of agent actions, naming files or functions without using tools.

#### 2.4.2 Session Search & History

Retrieves past coding sessions by searching transcript files and returning ranked results. Enables users to locate and resume previous work through relevance-ordered session discovery.

##### 2.4.2.1 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent prompt for searching past Claude Code conversation sessions by scanning .jsonl transcript files and returning matching session IDs ordered by relevance.

### 2.5 IDE & File State Reminders

System notifications that track IDE interactions and file state changes, informing Claude of user actions like selections and modifications, file size constraints, diagnostic updates, and special handling modes. These reminders ensure awareness of external changes and context limitations without requiring explicit user communication.

#### 2.5.1 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in the IDE editor with file and line range details.

#### 2.5.2 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

User opened a file in the IDE, which may or may not relate to the current task.

#### 2.5.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

A file was modified externally by the user or linter; account for these changes and do not revert them unless requested.

#### 2.5.4 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

A large file was truncated to the first N lines; use the Read tool to access more if needed.

#### 2.5.5 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warning that a file exists but contains no content.

#### 2.5.6 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warning that a file read offset exceeds the file's actual length.

#### 2.5.7 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues in the code.

#### 2.5.8 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

A file was read before conversation summarization but is too large to include; use the Read tool if you need to access it.

#### 2.5.9 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

#### 2.5.10 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Permits analysis of malware code and behavior but prohibits improving or augmenting it.

#### 2.5.11 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Side questions via /btw are answered by a lightweight separate agent with no tools available, based only on conversation context, in a single response without referencing interruption.

### 2.6 Hook System Reminders

Notifications that report hook execution outcomes—successful completions, blocking errors, continuation states, and contextual details—keeping users informed of hook lifecycle events.

#### 2.6.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Displays additional context information from a hook execution.

#### 2.6.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports errors from blocking hook commands that prevent execution.

#### 2.6.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix message for hook stopped continuation notifications.

#### 2.6.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies when a hook stops execution continuation with a message.

#### 2.6.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful hook execution with content details.

---

## 3. Shell Execution, File Operations & Tool Policies

Operational guidelines, security policies, and tool hierarchies governing bash and PowerShell execution, file system access, and the preference for dedicated tools over shell equivalents.

### 3.1 Bash Execution Policies & Sandbox

Mandatory sandbox enforcement for all bash commands, diagnostic patterns for sandbox-caused failures, and guidance for adjusting restrictions rather than bypassing them.

#### 3.1.1 Bash Sandbox Policy & Configuration

Enforces mandatory sandbox execution for all bash commands with explicit policies against bypass, diagnostic indicators for sandbox-caused failures, and guidance for adjusting restrictions rather than disabling them. Includes detection patterns for access denial, network blocking, and permission errors that signal sandbox constraints.

##### 3.1.1.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When a bash command fails due to sandbox restrictions, work with the user to adjust sandbox settings instead of bypassing the sandbox.

##### 3.1.1.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always default to running bash commands within the sandbox, only disabling it when the user explicitly requests or clear evidence of sandbox restriction exists.

##### 3.1.1.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox restrictions.

##### 3.1.1.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header text introducing a list of indicators that show sandbox-caused command failures.

##### 3.1.1.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox network restrictions.

##### 3.1.1.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

"Operation not permitted" errors on file or network operations signal sandbox restrictions.

##### 3.1.1.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions on socket access.

##### 3.1.1.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

##### 3.1.1.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a bash command fails with clear evidence of sandbox restrictions, distinguishing sandbox-related failures from other causes.

##### 3.1.1.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All bash commands must run in sandbox mode; the `dangerouslyDisableSandbox` parameter is disabled by policy.

##### 3.1.1.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Bash commands cannot run outside the sandbox under any circumstances.

##### 3.1.1.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

##### 3.1.1.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each bash command with `dangerouslyDisableSandbox: true` individually; default to sandbox for all future commands regardless of recent history.

##### 3.1.1.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header text introducing how to respond when sandbox-caused command failures are detected.

##### 3.1.1.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry a failed bash command with `dangerouslyDisableSandbox: true` without asking the user.

##### 3.1.1.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Always use the `$TMPDIR` environment variable for temporary files in sandbox mode, not `/tmp` directly, as TMPDIR is automatically set to the correct sandbox-writable directory.

##### 3.1.1.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will trigger a user permission prompt.

#### 3.1.2 Bash Command Execution Best Practices

Operational guidelines for efficient bash command execution covering sequential chaining with `&&`, parallel execution for independent commands, timeout configuration, and preference for dedicated tools over bash equivalents for file operations. Emphasizes performance optimization and leveraging specialized tools for better user experience.

##### 3.1.2.1 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons (`;`) to run bash commands sequentially when order matters but earlier command failures are acceptable.

##### 3.1.2.2 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent bash commands using `&&` in a single call when they must run sequentially and each depends on the previous success.

##### 3.1.2.3 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep bash sleep durations short (1-5 seconds) to avoid blocking the user.

##### 3.1.2.4 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with `run_in_background`; wait for completion notification instead.

##### 3.1.2.5 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between bash commands that can run immediately; execute them without delay.

##### 3.1.2.6 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

When polling an external process, use check commands like `gh run view` instead of sleeping first.

##### 3.1.2.7 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Bash commands support an optional timeout parameter in milliseconds up to a maximum limit, with a default timeout applied if not specified.

##### 3.1.2.8 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files with bash, verify the parent directory exists and is correct by running `ls`.

##### 3.1.2.9 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to maintain current working directory throughout session by using absolute paths and avoiding cd unless explicitly requested.

##### 3.1.2.10 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs not to use newlines to separate commands in bash scripts.

##### 3.1.2.11 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

##### 3.1.2.12 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to run independent bash commands as parallel tool calls in a single message for optimal performance.

##### 3.1.2.13 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs to always quote file paths containing spaces with double quotes in bash commands.

##### 3.1.2.14 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Documents that bash working directory persists between commands but shell state does not, with environment initialized from user profile.

##### 3.1.2.15 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns to avoid using Bash for find, grep, cat and similar commands, instead preferring dedicated tools for better user experience.

##### 3.1.2.16 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and easier permission review than Bash equivalents.

##### 3.1.2.17 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly instead of using echo or printf.

##### 3.1.2.18 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs to use Grep tool instead of grep or rg for content search.

##### 3.1.2.19 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs to use Edit tool instead of sed or awk for file editing.

##### 3.1.2.20 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs to use Glob tool instead of find or ls for file search.

##### 3.1.2.21 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs to use Read tool instead of cat, head, or tail for file reading.

##### 3.1.2.22 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs to use Write tool instead of echo or cat for file writing.

### 3.2 Bash Command Documentation & Safety

Tools for documenting bash commands with appropriate detail levels and detecting command injection attacks, combining documentation clarity with security enforcement.

#### 3.2.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, scaling detail from 5-10 words for simple commands to longer context for complex piped or flag-heavy operations.

#### 3.2.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attacks in bash commands to enforce safety allowlists. Returns prefix string or 'command_injection_detected' flag.

### 3.3 PowerShell Tool & Scripting

PowerShell execution environment with platform-specific constraints and performance optimization patterns, including timeout controls, encoding awareness, and strategies for avoiding blocking operations in favor of background task management and polling.

#### 3.3.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with configurable timeout and output limits, supporting git, npm, docker, and native executables while preferring specialized tools for file operations and emphasizing non-interactive execution.

#### 3.3.2 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 limitations including absence of pipeline chain operators, ternary operators, null-coalescing, stderr redirection quirks, and UTF-16 LE default encoding.

#### 3.3.3 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Instructs Claude to avoid unnecessary `Start-Sleep` commands in PowerShell scripts by using `run_in_background` for long-running tasks, polling external processes with check commands rather than sleep loops, and keeping sleep durations short when unavoidable.

#### 3.3.4 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Rule prohibiting retry loops with sleep; instead diagnose root causes of command failures.

### 3.4 File System Tools

Tools for reading, writing, editing, and searching file contents across multiple formats including text, images, PDFs, and Jupyter notebooks. Operations range from full file rewrites to precise in-place edits with regex-based content discovery.

#### 3.4.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from filesystem with support for images, PDFs (with page ranges for large files), and Jupyter notebooks, requiring absolute paths and defaulting to first N lines.

#### 3.4.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Write creates or completely rewrites files to the local filesystem, with preference for the Edit tool for modifications. It avoids creating documentation files unless explicitly requested and excludes emojis unless user-specified.

#### 3.4.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with precise indentation preservation and support for bulk renaming via replace_all parameter.

#### 3.4.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Ripgrep-based search tool supporting regex patterns, file filtering by glob or type, and multiple output modes, with multiline matching support for cross-line patterns.

#### 3.4.5 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing content, supporting insert and delete modes with 0-indexed cell numbering and absolute path requirements.

### 3.5 Tool Preference & File Operation Policies

Establishes tool hierarchy prioritizing dedicated tools—Read, Write, Edit, Glob, Grep—over bash equivalents for file and content operations. Reserves bash exclusively for system commands and terminal operations, directing simple codebase searches and file manipulations to specialized tools for improved user experience and clarity.

#### 3.5.1 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Use the Write tool to create files instead of cat with heredoc or echo redirection.

#### 3.5.2 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Use the Edit tool to modify files instead of sed or awk.

#### 3.5.3 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Use the Read tool to access file contents instead of cat, head, tail, or sed.

#### 3.5.4 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations that require shell execution; prefer dedicated tools when available.

#### 3.5.5 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool to search file contents instead of grep or rg.

#### 3.5.6 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool to search for files instead of find or ls.

#### 3.5.7 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Use Glob and Grep tools directly for simple, directed codebase searches like finding specific files, classes, or functions.

---

## 4. Code Quality, Safety & Development Workflow

Principles and tools for safe, disciplined code delivery—covering quality standards, security analysis, reversibility constraints, git operations, and post-implementation pipelines.

### 4.1 Code Quality & Engineering Discipline

Principles for focused, maintainable code delivery. Eliminates premature abstractions, unnecessary error handling, dead code, and scope creep while prioritizing understanding existing code before modification and implementing only what was explicitly requested.

#### 4.1.1 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directs Claude to avoid creating helpers or abstractions for one-time operations or hypothetical requirements, implementing only the complexity the task actually requires.

#### 4.1.2 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios and validate only at system boundaries, trusting internal code and framework guarantees.

#### 4.1.3 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims, renamed variables, or removed-code comments.

#### 4.1.4 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directs Claude to implement only what was asked without adding features, refactoring, extra configurability, or unnecessary documentation beyond the requested scope.

#### 4.1.5 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid giving time estimates or predictions for task duration.

#### 4.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

#### 4.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing modifications.

#### 4.1.8 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks including bug fixes, feature additions, and refactoring, and instructs Claude to interpret unclear instructions within this context.

#### 4.1.9 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Authorizes Claude to attempt ambitious tasks that would otherwise be too complex or time-consuming, deferring to user judgment on scope.

#### 4.1.10 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

### 4.2 Code Verification & Review

Validates code changes through runtime observation and targeted testing, and analyzes changes for quality, correctness, and security risks with multi-phase vulnerability detection.

#### 4.2.1 Code Verification & Testing

Validates code changes through runtime observation and targeted testing without relying on test suites. Automatically detects change type, executes relevant verification workflows (CLI, API, web UI), and captures evidence of correct behavior.

##### 4.2.1.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow for validating code changes through runtime observation, driving the app to where changed code executes, and capturing evidence without running tests.

##### 4.2.1.2 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying a CLI change by building, running with test arguments, and comparing output to expected behavior.

##### 4.2.1.3 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying a server/API change by starting the server, sending curl requests, and capturing response status and headers.

##### 4.2.1.4 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Prompt for creating verifier skills for the Verify agent to automatically verify code changes through auto-detection, tool setup, interactive Q&A, and skill generation for web UI (Playwright), CLI (Tmux), and API (HTTP) verification.

##### 4.2.1.5 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

System prompt for a verification subagent that adversarially tests implementations by running builds, test suites, linters, and adversarial probes, then issuing PASS/FAIL/PARTIAL verdicts with required command evidence.

#### 4.2.2 Code Review & Security Analysis

Analyzes code changes for quality, correctness, and security risks. Combines multi-phase vulnerability detection with high-confidence filtering to identify exploitable issues while minimizing false positives, plus monitors autonomous actions against threat models.

##### 4.2.2.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diff, analyzing code quality, style, correctness, conventions, performance, tests, and security.

##### 4.2.2.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt for analyzing code changes with focus on exploitable vulnerabilities, using multi-phase analysis and high-confidence filtering to minimize false positives while catching real security risks.

##### 4.2.2.3 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Instructs Claude to evaluate autonomous agent actions against security rules to prevent prompt injection, scope creep, and accidental damage, with a framework for assessing user intent and determining block/allow verdicts.

##### 4.2.2.4 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules covering destructive operations, credential leakage, and infrastructure tampering, plus allow exceptions for legitimate operations like local testing and declared dependencies.

##### 4.2.2.5 [Simplify (Skill)](system-prompts/skill-simplify.md)

Reviews changed files for code reuse, quality, and efficiency by launching three parallel review agents that identify redundancy, hacky patterns, and performance issues.

### 4.3 Action Safety & Security Constraints

Decision frameworks for safe execution of destructive operations, security policy guardrails distinguishing authorized testing from malicious activity, and secure coding enforcement.

#### 4.3.1 Action Safety & Reversibility

Decision framework for safe execution of potentially destructive operations. Requires user confirmation for irreversible or high-impact actions while permitting local reversible changes freely. Prioritizes root-cause investigation over destructive shortcuts.

##### 4.3.1.1 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes careful decision-making for reversibility and blast radius, requiring user confirmation for destructive, hard-to-reverse, or shared-system actions while allowing local reversible actions freely. Emphasizes investigating root causes rather than using destructive shortcuts.

##### 4.3.1.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

When a tool is denied, attempt reasonable workarounds using alternative tools but avoid malicious bypasses. If the capability is essential, stop and explain to the user what permission is needed.

#### 4.3.2 Security Policy & Malware Constraints

Guardrails distinguishing authorized security work from malicious activity. Permits defensive security testing and CTF challenges while blocking destructive attacks and evasion techniques. Enforces secure coding practices to prevent injection vulnerabilities.

##### 4.3.2.1 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, CTF challenges, and defensive security while refusing requests for destructive attacks, supply chain compromise, and detection evasion. Dual-use security tools require clear authorization context.

##### 4.3.2.2 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities such as command injection, XSS, and SQL injection, prioritizing secure and correct code.

### 4.4 Git Operations & CI Integration

Safe git workflows for commits, pull requests, and destructive operation prevention, plus GitHub Actions templates enabling @claude mentions in issues and pull requests.

#### 4.4.1 Git Operations & Safety

Comprehensive protocols for safe git workflows including commit creation, pull request generation, and destructive operation prevention. Establishes never-skip-hooks policies, emphasizes explicit user consent before commits, and provides structured guidance for analyzing staged changes and drafting appropriate commit messages.

##### 4.4.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

##### 4.4.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, staged file analysis, commit message drafting, and PR creation with gh command, emphasizing never committing without explicit user request.

##### 4.4.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs never to skip hooks or bypass signing unless explicitly requested by user, and to investigate and fix underlying issues if hooks fail.

##### 4.4.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to prefer creating new commits over amending existing commits.

##### 4.4.1.5 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context from git status and diff, analyzing changes to draft appropriate messages following repository conventions.

##### 4.4.1.6 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated git context, handling branch creation, pushing, and PR body generation with safety protocols and attribution.

##### 4.4.1.7 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Indicates that git status displayed at conversation start is a snapshot and will not update during the session.

#### 4.4.2 GitHub Integration & CI/CD

Templates and workflows for integrating Claude Code into GitHub environments via Actions, enabling @claude mentions in issues and pull requests with configurable permissions and security guidance.

##### 4.4.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template for triggering Claude Code via @claude mentions in issues, PRs, and comments with configurable permissions and optional custom prompts.

##### 4.4.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template for PR description when installing Claude Code GitHub App integration, explaining the workflow, security considerations, and how to use @claude mentions.

### 4.5 Worker & Implementation Workflow

Post-implementation pipeline that simplifies code, runs test suites, commits changes, and creates pull requests, with escalation to a stronger reviewer model when guidance is needed or work is complete.

#### 4.5.1 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

After implementing changes, simplify code using the simplify skill, run unit tests, perform end-to-end testing, commit and push with a PR, and report the PR URL or reason if none was created.

#### 4.5.2 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the advisor tool, which forwards conversation history to a stronger reviewer model before substantive work and when stuck or declaring completion.

---

## 5. Configuration, Automation & User Experience

Setup and configuration of Claude Code environments, scheduling and background automation, browser and web tools, and communication standards that shape the user interaction experience.

### 5.1 Environment Setup & Onboarding

Guided configuration of Claude Code environments through structured flows establishing CLAUDE.md documentation, skills, hooks, and team practices for fresh and incremental setups.

#### 5.1.1 Onboarding & Configuration Setup

Guides initial and ongoing configuration of Claude Code environments through structured flows that establish CLAUDE.md documentation, skills, hooks, and team practices. Handles both fresh setup and incremental configuration updates with verification.

##### 5.1.1.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md, skills, and hooks in a repository through codebase exploration, user interviews, and iterative proposal refinement across eight phases.

##### 5.1.1.2 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding new teammates to a team's Claude Code setup, walking them through usage stats, setup checklists, MCP servers, skills, and team tips in a warm conversational style.

##### 5.1.1.3 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Modifies Claude Code configuration by updating settings.json files, with emphasis on reading existing config, merging changes, and handling hooks and permissions.

##### 5.1.1.4 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Guides Claude through a 7-step process to construct and verify hooks for Claude Code, ensuring they work correctly in the user's specific project environment.

##### 5.1.1.5 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview script for configuring Managed Agents from scratch, covering tool selection, skills, files, environment settings, and emitting setup and runtime code.

##### 5.1.1.6 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides by analyzing usage data, classifying session types into work categories, and iteratively refining ONBOARDING.md with user feedback.

#### 5.1.2 Session & Environment Configuration

Configuration mechanisms for controlling Claude's runtime behavior, from disabling features in minimal mode to isolating temporary files and customizing terminal display.

##### 5.1.2.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode behavior that disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags for authentication and configuration.

##### 5.1.2.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

##### 5.1.2.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

System prompt for configuring Claude Code status line display, converting shell PS1 configurations to shell commands and updating settings.json with custom status line commands.

### 5.2 Skills, Hooks & Workflow Automation

Converts repeatable workflows into reusable slash-command skills and configures event-driven hooks that intercept lifecycle events to inject contextual behavior and automation.

#### 5.2.1 Skill Creation & Management

Converts repeatable workflows into reusable slash-command skills through structured interviews and analysis, then executes those skills within conversations to extend Claude's capabilities with user-defined specializations.

##### 5.2.1.1 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable session processes into reusable skills through multi-round user interviews, analyzing session context, identifying steps, and generating SKILL.md files with frontmatter, inputs, goals, and success criteria.

##### 5.2.1.2 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within conversations, requiring invocation before generating responses and supporting fully qualified skill names.

##### 5.2.1.3 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute slash commands like /commit that invoke user-invocable skills; only use skills listed in the tool's user-invocable section.

#### 5.2.2 Hooks System Configuration

Event-driven automation framework that intercepts Claude Code lifecycle events and executes custom commands, prompts, or agent logic at permission requests, tool invocations, and other critical junctures, enabling contextual injection and behavioral control.

##### 5.2.2.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines hook system for Claude Code that runs commands at lifecycle events including PermissionRequest, PreToolUse, PostToolUse, and others, supporting command, prompt, and agent hook types with JSON input/output for controlling behavior and injecting context.

### 5.3 Scheduling & Background Task Execution

Cron-based and event-driven scheduling for recurring tasks, autonomous background execution with safety guardrails, and real-time streaming of long-running process output.

#### 5.3.1 Scheduling & Loop Execution

Schedule recurring or self-paced task execution using cron expressions and event-driven wake signals. Loops support both cloud-based scheduling and local session execution with immediate task runs and fallback heartbeat delays.

##### 5.3.1.1 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts the interval to a cron expression, and schedules a recurring task with immediate execution.

##### 5.3.1.2 [/loop slash command (dynamic mode) [Skill]](system-prompts/skill-loop-slash-command-dynamic-mode.md)

Parses user input into an interval and prompt for scheduling recurring or dynamically self-paced loop executions.

##### 5.3.1.3 [/loop self-pacing mode (Skill)](system-prompts/skill-loop-self-pacing-mode.md)

Instructs Claude to self-pace a recurring loop by arming event monitors as primary wake signals and scheduling fallback heartbeat delays between iterations.

##### 5.3.1.4 [/loop cloud-first scheduling offer (Skill)](system-prompts/skill-loop-cloud-first-scheduling-offer.md)

Decision tree for offering cloud-based scheduling before falling back to local session loops in the /loop command.

##### 5.3.1.5 [Dynamic pacing loop execution (Skill)](system-prompts/skill-dynamic-pacing-loop-execution.md)

Executes a dynamic pacing loop that runs tasks, arms event monitors for wake signals, schedules fallback heartbeat delays, and handles task notifications.

##### 5.3.1.6 [Schedule recurring cron and execute immediately (compact) [Skill]](system-prompts/skill-schedule-recurring-cron-and-execute-immediately-compact.md)

Creates a recurring cron job, confirms the schedule with the user, and immediately executes the parsed prompt without waiting for the first cron fire.

##### 5.3.1.7 [Schedule recurring cron and run immediately (Skill)](system-prompts/skill-schedule-recurring-cron-and-run-immediately.md)

Converts an interval to a cron expression, schedules a recurring task, confirms to the user, and immediately executes the task without waiting for the first cron fire.

##### 5.3.1.8 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing schedules, creating a cron task, and running an immediate consolidation.

##### 5.3.1.9 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron jobs using standard 5-field cron syntax in local timezone, with guidance on avoiding :00/:30 minute marks for load distribution and optional durability to persist across sessions.

##### 5.3.1.10 [ScheduleWakeup (/loop dynamic mode) [Tool Description]](system-prompts/tool-description-schedulewakeup-loop-dynamic-mode.md)

Schedules next iteration in /loop dynamic mode with support for autonomous loops via sentinel values, allowing self-paced task repetition.

##### 5.3.1.11 [Snooze (delay and reason guidance) [Tool Description]](system-prompts/tool-description-snooze-delay-and-reason-guidance.md)

Pauses execution with guidance on choosing delay relative to 5-minute prompt cache TTL, preferring sub-270s for active work or 1200s+ for idle periods, with informative reason fields.

##### 5.3.1.12 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling, updating, listing, or running remote Claude Code agents on cron triggers via the Anthropic cloud API, handling environment selection, MCP connector validation, timezone conversion, and trigger configuration.

#### 5.3.2 Autonomous & Auto Mode Execution

Enables continuous background task execution with safety guardrails. Claude operates autonomously on established work, maintains pull requests, and handles repeated invocations while respecting destructive-action and authorization constraints.

##### 5.3.2.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Defines continuous autonomous task execution where Claude executes immediately, minimizes interruptions, and avoids destructive or unauthorized actions.

##### 5.3.2.2 [Autonomous loop check (System Prompt)](system-prompts/system-prompt-autonomous-loop-check.md)

Defines behavior for autonomous timer-based invocations, guiding Claude to continue established work, maintain PRs, and handle repeated idle checks while the user is away.

##### 5.3.2.3 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews custom auto-mode classifier rules for clarity, completeness, conflicts, and actionability to ensure the LLM classifier can reliably auto-approve or block tool calls.

#### 5.3.3 Background Monitoring & Async Tasks

Real-time event streaming from long-running background processes, surfacing script output as chat notifications with configurable filtering and polling to track asynchronous task progress.

##### 5.3.3.1 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Describes a background monitor tool that streams stdout events from long-running scripts as chat notifications, with guidance on script quality, output filtering, poll intervals, and handling transient failures.

### 5.4 Browser, Web & Computer Automation

Automates web interaction and desktop tasks through mouse, keyboard, and visual feedback, plus web search and URL retrieval with structured output and source attribution.

#### 5.4.1 Browser & Computer Automation

Automates web interaction and desktop tasks through mouse, keyboard, and visual feedback mechanisms, with specialized handling for Chrome debugging, tab management, and error recovery to navigate complex browser environments reliably.

##### 5.4.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse, keyboard, and screenshots, with guidance on precise cursor positioning and element clicking.

##### 5.4.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameters for Chrome browser automation, including mouse operations (click variants, drag, hover), keyboard input, scrolling, screenshot, zoom, and element-based navigation for web interaction.

##### 5.4.1.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use by selecting the specific tool name before calling it.

##### 5.4.1.4 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides guidelines for browser automation including GIF recording with smooth playback, console debugging with pattern filtering, avoiding JavaScript dialogs that block extension communication, and managing tab context by checking current tabs before reusing IDs. Emphasizes stopping and asking for guidance when encountering unexpected complexity or repeated failures.

##### 5.4.1.5 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools including tool selection tiers (dedicated MCP, Chrome MCP, computer use), app access tiers, link safety, and restrictions on financial actions.

#### 5.4.2 Web Search & Content Retrieval

Fetches current information and web content through search and direct URL retrieval, converting results to structured formats and summarizing verbose output while maintaining source attribution and domain trust verification.

##### 5.4.2.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

WebSearch enables Claude to query the web for current information and recent data, returning results with markdown hyperlinks. Responses must include a mandatory Sources section listing all relevant URLs, with support for domain filtering and automatic year-aware search queries.

##### 5.4.2.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

WebFetch retrieves and analyzes web content by fetching URLs, converting HTML to markdown, and processing results with an AI model. It includes automatic HTTPS upgrade, redirect handling, and a 15-minute cache for repeated access.

##### 5.4.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Prompt for agent that summarizes verbose WebFetch output for the main model, enforcing quote limits and proper attribution for non-trusted domains.

### 5.5 Communication Style & User Interaction

Standards for clear, efficient interaction including concise status updates, visual decision support with side-by-side previews, prompt suggestions, and learning-mode collaboration.

#### 5.5.1 Communication Style & Response Formatting

Standards for clear, efficient user interaction. Emphasizes brief status updates at key moments, concise end-of-turn summaries, precise code references with line numbers, and minimal internal narration. Tailors response format and detail to task complexity.

##### 5.5.1.1 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs Claude to provide brief user-facing updates before first tool call and at key moments during work, avoid narrating internal deliberation, write concise end-of-turn summaries, match response format to task complexity, and minimize code comments and planning documents unless requested.

##### 5.5.1.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Include file_path:line_number when referencing specific functions or code to help users navigate to source locations.

##### 5.5.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Responses should be short and concise.

##### 5.5.1.4 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude that SendUserMessage is the primary channel for user-visible replies, requiring acknowledgment before work, checkpoints during longer tasks, and tight messaging with specific details rather than filler updates.

##### 5.5.1.5 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering absolute paths, response formatting, emoji avoidance, and tool call punctuation.

#### 5.5.2 User Interaction & Visual Decision Support

Mechanisms for gathering user input, clarifying requirements, and presenting implementation choices through interactive questions enhanced with side-by-side visual previews of options via mockups, code samples, and diagrams.

##### 5.5.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use this tool for gathering user preferences, clarifying ambiguous instructions, and offering implementation choices during execution, with special guidance for plan mode to avoid asking for plan approval.

##### 5.5.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Describes the optional preview field for single-select question options to display HTML mockups, code snippets, and visual diagrams without script or style tags.

##### 5.5.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using ASCII mockups, code snippets, diagrams, and configuration examples in monospace boxes for visual comparison.

#### 5.5.3 Prompt Suggestion & Conversational Flow

Prediction of natural user continuations based on conversation context, enabling seamless conversational flow by suggesting contextually appropriate next inputs.

##### 5.5.3.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on recent conversation context, suggesting specific 2-12 word continuations that match user style without evaluation or Claude-voice phrasing.

#### 5.5.4 Learning & Teaching Modes

Engages users as active collaborators in development by requesting their input on design decisions and algorithms, providing contextual educational insights, and guiding them through tasks with step-by-step instruction rather than direct execution.

##### 5.5.4.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt that balances task completion with hands-on education by requesting user contributions for design decisions, business logic, and algorithms, using TodoList tracking and Learn by Doing requests with TODO(human) markers.

##### 5.5.4.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code generation when learning mode is active, focusing on implementation choices specific to the codebase.

##### 5.5.4.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct tool access, activated by teaching-related phrases.

### 5.6 Analytics, Debugging & Diagnostics

Session analytics surfacing friction points and feature recommendations, plus diagnostic toolkits for identifying session failures through log analysis and process monitoring.

#### 5.6.1 Usage Analytics & Insights

Analyzes Claude Code session data to surface what's working, identify friction points, extract user intent signals, and recommend feature adoption and workflow improvements through structured reporting and actionable suggestions.

##### 5.6.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary for Claude Code users covering what's working, hindrances, quick wins, and ambitious workflows for improved models, using coaching tone and avoiding overwhelming detail or numerical stats.

##### 5.6.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify friction points and categorize recurring issues into three categories with examples, formatted as JSON with explanations of what users could do differently.

##### 5.6.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies three ambitious future opportunities in Claude Code usage data, focusing on autonomous workflows and parallel agents, with copyable prompts for each opportunity.

##### 5.6.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code session transcripts, including user-requested goals, satisfaction signals, and specific friction categories like misunderstood requests, wrong approaches, buggy code, and user rejections.

##### 5.6.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions from usage data, recommending CLAUDE.md additions, Claude Code features to try (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns with copyable examples.

##### 5.6.1.6 [/insights report output (Skill)](system-prompts/skill-insights-report-output.md)

Formats and displays insights usage report results after the user runs the /insights slash command.

#### 5.6.2 Debugging & Diagnostics Skills

Diagnostic toolkit for identifying and resolving session failures through log analysis, error pattern recognition, and system resource monitoring, with automated reporting of frozen or degraded processes.

##### 5.6.2.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Guides Claude through debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 5.6.2.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, analyzing CPU/memory/state indicators, and posting diagnostic reports to Slack.

### 5.7 Tool Discovery & MCP Management

Runtime tool discovery matching queries to available tools, and strategies for managing verbose MCP tool outputs through targeted queries and subagent delegation.

#### 5.7.1 Dynamic Tool Discovery

Runtime tool discovery mechanism that matches user queries against available tools and returns their complete schema definitions, enabling flexible tool invocation based on keyword and name-based search.

##### 5.7.1.1 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

ToolSearch matches queries against a deferred tool list and returns complete JSONSchema definitions for matched tools, enabling dynamic tool invocation. It supports exact name selection, keyword search, and name-filtered ranking across multiple query forms.

#### 5.7.2 MCP Tool Management

Strategies for managing verbose MCP tool outputs through targeted queries and subagent delegation, optimizing context usage while maintaining access to full information when needed.

##### 5.7.2.1 [MCP Tool Result Truncation (System Prompt)](system-prompts/system-prompt-mcp-tool-result-truncation.md)

Guidelines for handling long MCP tool outputs by using targeted queries with jq or grep for simple lookups, and delegating analysis to subagents for summarization tasks requiring full content reading.

---

## 6. API Documentation, SDKs & Developer Reference

Comprehensive reference documentation for Claude APIs and SDKs, managed agent architecture, streaming and tool use patterns, and guidance for building applications across languages.

### 6.1 Core Claude API & SDK Reference

Comprehensive SDK and HTTP API documentation across multiple languages covering vision, tool use, prompt caching, thinking, structured output, streaming, and error handling.

#### 6.1.1 Claude API Reference Documentation

Comprehensive SDK and HTTP API documentation across multiple languages and platforms, covering core features like vision, tool use, prompt caching, thinking, and structured output with language-specific implementation patterns.

##### 6.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, basic requests, vision, prompt caching with automatic and manual control, thinking, error handling, multi-turn conversations, and cost optimization strategies.

##### 6.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, basic requests, vision, prompt caching with automatic and manual control, thinking, error handling, multi-turn conversations, and cost optimization.

##### 6.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including installation, basic requests, streaming, tool runner with automatic schema generation, manual tool loops, thinking, prompt caching, and server-side tools.

##### 6.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering installation, basic requests, streaming, thinking, beta tool runner with annotated classes, manual tool loops, prompt caching, and structured output.

##### 6.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including installation, basic requests, streaming, beta tool runner with class-based tools, and prompt caching with TTL support.

##### 6.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including installation, client initialization for Anthropic/Bedrock/Vertex/Foundry, streaming, tool runner, thinking, prompt caching, and structured output with StructuredOutputModel.

##### 6.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering installation, client initialization, basic requests, streaming, thinking, tool use with manual loops, prompt caching, structured output, and server-side tools.

##### 6.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude API using cURL, covering basic requests, streaming, tool use, prompt caching, and extended thinking with example commands and jq parsing.

##### 6.1.1.9 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for HTTP error codes returned by the Claude API with common causes, handling strategies, typed exception classes, and common mistakes with fixes.

#### 6.1.2 Tool Use & Streaming API References

Operational guides for streaming responses, defining and executing tools (including code execution and MCP servers), processing files with citations, batching requests for cost optimization, and implementing prompt caching strategies—with language-specific examples and model capability discovery.

##### 6.1.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loop, server-side tools (code execution, web search, computer use), skills, and structured outputs.

##### 6.1.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner with decorators, manual agentic loop, MCP tool conversion helpers, code execution, memory tool, and structured outputs with complete code examples.

##### 6.1.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference including tool runner with Zod schemas, manual agentic loop with streaming, code execution, memory tool, and structured outputs with complete code examples.

##### 6.1.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference including sync/async streaming, handling different content types (text, thinking, tool use), getting final messages, and error handling with complete code examples.

##### 6.1.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, tool use with tool runner, getting final messages, and stream event types with complete code examples.

##### 6.1.2.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files, using them in messages with citations, managing files, and end-to-end examples with document and image references.

##### 6.1.2.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages, and managing files with list, delete, and download operations.

##### 6.1.2.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference including batch creation, status polling, result retrieval, and cost savings at 50% of standard pricing with complete code examples.

##### 6.1.2.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Document on designing prompt-building code for effective caching, including prefix-stability patterns, breakpoint placement, silent invalidators to audit, and architectural guidance for maximizing cache hit rates.

##### 6.1.2.10 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact model IDs, aliases, context windows, max output tokens, and programmatic model discovery via the Models API for live capability data.

### 6.2 Managed Agents API Documentation

Complete reference for building and operating managed agent applications, covering the mandatory agent-then-session architecture, lifecycle management, event-driven steering, tool integration (MCP, custom, vault credentials), file handling, and language-specific SDK implementations with practical client patterns and reconnection strategies.

#### 6.2.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Comprehensive overview of Managed Agents API architecture, the mandatory agent-then-session flow, beta headers, reading guide, and common pitfalls including the critical anti-pattern of calling agents.create() on every run.

#### 6.2.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Reference documentation covering the four core Managed Agents concepts (Agent, Session, Environment, Container), their lifecycle, versioning model, and the mandatory agent-then-session flow with endpoint details and configuration parameters.

#### 6.2.3 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive reference for all Managed Agents API endpoints, SDK method names across languages, request/response schemas, error handling, and rate limits with beta header requirements.

#### 6.2.4 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference documentation for Managed Agents environments, file resources, GitHub repository mounting, and the Files API with SDK examples for uploading, listing, and downloading session outputs.

#### 6.2.5 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Reference guide for sending and receiving events on managed agent sessions, including streaming vs polling, reconnection patterns, message queuing, interrupts, and event payload details with practical steering patterns.

#### 6.2.6 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference documentation covering tool types (agent toolset, MCP, custom), permission policies, vault credential management for MCP authentication, and the Skills API for building specialized agents.

#### 6.2.7 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Reference guide of common client-side patterns for driving Managed Agent sessions, including lossless stream reconnection, message queuing, interrupts, tool confirmations, and custom tool handling with working TypeScript examples.

#### 6.2.8 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Reference guide for using the Anthropic Python SDK to create agents, sessions, environments, stream events, handle custom tools, upload files, and integrate MCP servers with complete code examples.

#### 6.2.9 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

Reference guide for using the Anthropic TypeScript SDK to create agents, sessions, environments, stream events, handle custom tools, upload files, and integrate MCP servers with complete code examples.

#### 6.2.10 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

Provides cURL and raw HTTP request examples for the Managed Agents API covering environment creation, agent setup, session lifecycle, event streaming, file operations, and MCP server integration.

### 6.3 Application Building Guidance & Live Docs

Activation rules and templates for helping users select between Claude API and Managed Agents, detect language context, and fetch current official documentation from live sources.

#### 6.3.1 Claude API & SDK Application Building Skills

Activation rules and guidance templates for helping users build applications with Claude APIs and SDKs, including language detection, API surface selection between Claude API and Managed Agents, and navigation to relevant reference documentation.

##### 6.3.1.1 [Build Claude API and SDK apps (Skill)](system-prompts/skill-build-claude-api-and-sdk-apps.md)

Trigger rules for activating guidance when users are building applications with the Claude API, Anthropic SDKs, or Managed Agents, including feature optimization and debugging.

##### 6.3.1.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation to appropriate files for different use cases (streaming, caching, tool use, batches, files API).

##### 6.3.1.3 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Comprehensive guide for building LLM-powered applications covering language detection, API surface selection (Claude API vs Managed Agents), model defaults, thinking/effort configuration, and language-specific documentation reading with subcommands.

#### 6.3.2 Documentation & Live Data Sources

Curated live documentation feeds and an agent interface for fetching current Claude API, Managed Agents, and SDK documentation from official sources, enabling real-time guidance when cached content may be outdated.

##### 6.3.2.1 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Curated WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories, with extraction prompts for each topic. Use when users need the latest data that may have changed since cached content was last updated.

##### 6.3.2.2 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code CLI, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with code examples.

### 6.4 Code Intelligence & IDE Integration

Language Server Protocol integration providing semantic code analysis—definition lookup, reference finding, symbol navigation, and call hierarchy tracing—alongside configuration management for editor preferences and model selection.

#### 6.4.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides code intelligence via Language Server Protocol operations including definition lookup, reference finding, hover information, symbol search, and call hierarchy analysis.

#### 6.4.2 [Config (Tool Description)](system-prompts/tool-description-config.md)

Tool for viewing and modifying Claude Code configuration settings stored globally in ~/.claude.json or per-project in settings.json, supporting theme, editor mode, and model selection.

### 6.5 Codebase Exploration Agents

Provides specialized read-only agents for searching, analyzing, and documenting codebases. Supports pattern matching, code search, architecture analysis, and automatic generation of project documentation.

#### 6.5.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file pattern searches, code keyword searches, and architecture questions using glob, grep, and read tools.

#### 6.5.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases with concise reporting to the caller.

#### 6.5.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md documentation, capturing build/test commands, high-level architecture, and project-specific conventions for future Claude Code instances.
