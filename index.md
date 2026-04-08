# Claude Code System Prompts Index

Operational documentation and reference material for building, configuring, and running Claude-powered coding agents — covering everything from low-level tool use and shell execution to multi-agent coordination and production API integration.

## Table of Contents

1. [Bash & Shell Execution](#1-bash-shell-execution)
   1. [Bash Tool: Core Execution & Syntax](#11-bash-tool-core-execution-syntax)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (parallel commands) [Tool Description]](#112-bash-parallel-commands-tool-description)
      3. [Bash (sequential commands) [Tool Description]](#113-bash-sequential-commands-tool-description)
      4. [Bash (semicolon usage) [Tool Description]](#114-bash-semicolon-usage-tool-description)
      5. [Bash (no newlines) [Tool Description]](#115-bash-no-newlines-tool-description)
      6. [Bash (quote file paths) [Tool Description]](#116-bash-quote-file-paths-tool-description)
      7. [Bash (working directory) [Tool Description]](#117-bash-working-directory-tool-description)
      8. [Bash (maintain cwd) [Tool Description]](#118-bash-maintain-cwd-tool-description)
      9. [Bash (timeout) [Tool Description]](#119-bash-timeout-tool-description)
      10. [Bash (verify parent directory) [Tool Description]](#1110-bash-verify-parent-directory-tool-description)
   2. [Bash Tool: Sandbox Security & Restrictions](#12-bash-tool-sandbox-security-restrictions)
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
   3. [Bash Tool: Sleep, Polling & Background Tasks](#13-bash-tool-sleep-polling-background-tasks)
      1. [Bash (sleep — keep short) [Tool Description]](#131-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#132-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — run immediately) [Tool Description]](#133-bash-sleep-—-run-immediately-tool-description)
      4. [Bash (sleep — use check commands) [Tool Description]](#134-bash-sleep-—-use-check-commands-tool-description)
      5. [One of six rules for using sleep command (System Prompt)](#135-one-of-six-rules-for-using-sleep-command-system-prompt)
   4. [Bash Tool: Preferred Alternatives & Tool Selection](#14-bash-tool-preferred-alternatives-tool-selection)
      1. [Bash (prefer dedicated tools) [Tool Description]](#141-bash-prefer-dedicated-tools-tool-description)
      2. [Bash (alternative — communication) [Tool Description]](#142-bash-alternative-—-communication-tool-description)
      3. [Bash (alternative — content search) [Tool Description]](#143-bash-alternative-—-content-search-tool-description)
      4. [Bash (alternative — edit files) [Tool Description]](#144-bash-alternative-—-edit-files-tool-description)
      5. [Bash (alternative — file search) [Tool Description]](#145-bash-alternative-—-file-search-tool-description)
      6. [Bash (alternative — read files) [Tool Description]](#146-bash-alternative-—-read-files-tool-description)
      7. [Bash (alternative — write files) [Tool Description]](#147-bash-alternative-—-write-files-tool-description)
      8. [Bash (built-in tools note) [Tool Description]](#148-bash-built-in-tools-note-tool-description)
   5. [Bash Tool: Git Operations & Safety](#15-bash-tool-git-operations-safety)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#151-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#152-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#153-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#154-bash-git-—-prefer-new-commits-tool-description)
   6. [PowerShell Tool & Windows Compatibility](#16-powershell-tool-windows-compatibility)
      1. [PowerShell edition for 5.1 (System Prompt)](#161-powershell-edition-for-51-system-prompt)
      2. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#162-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
2. [Multi-Agent Orchestration](#2-multi-agent-orchestration)
   1. [Agent Teams & Communication](#21-agent-teams-communication)
      1. [Multi-Agent Team Coordination](#211-multi-agent-team-coordination)
         1. [Team Coordination (System Reminder)](#2111-team-coordination-system-reminder)
         2. [Team Shutdown (System Reminder)](#2112-team-shutdown-system-reminder)
         3. [Agent mention (System Reminder)](#2113-agent-mention-system-reminder)
         4. [/btw side question (System Reminder)](#2114-btw-side-question-system-reminder)
      2. [Team & Agent Orchestration](#212-team-agent-orchestration)
         1. [TeammateTool (Tool Description)](#2121-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#2122-teamdelete-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#2123-tasklist-teammate-workflow-tool-description)
         4. [SendMessageTool (Tool Description)](#2124-sendmessagetool-tool-description)
         5. [How to use the SendUserMessage tool (System Prompt)](#2125-how-to-use-the-sendusermessage-tool-system-prompt)
      3. [Subagent Orchestration & Team Communication](#213-subagent-orchestration-team-communication)
         1. [Fork usage guidelines (System Prompt)](#2131-fork-usage-guidelines-system-prompt)
         2. [Subagent delegation examples (System Prompt)](#2132-subagent-delegation-examples-system-prompt)
         3. [Teammate Communication (System Prompt)](#2133-teammate-communication-system-prompt)
         4. [Writing subagent prompts (System Prompt)](#2134-writing-subagent-prompts-system-prompt)
         5. [Worker instructions (System Prompt)](#2135-worker-instructions-system-prompt)
   2. [Planning & Workflow Orchestration](#22-planning-workflow-orchestration)
      1. [Plan Mode & Structured Workflows](#221-plan-mode-structured-workflows)
         1. [Exited plan mode (System Reminder)](#2211-exited-plan-mode-system-reminder)
         2. [Plan file reference (System Reminder)](#2212-plan-file-reference-system-reminder)
         3. [Plan mode is active (5-phase) [System Reminder]](#2213-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#2214-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#2215-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#2216-plan-mode-re-entry-system-reminder)
         7. [Verify plan reminder (System Reminder)](#2217-verify-plan-reminder-system-reminder)
         8. [Ultraplan mode (System Reminder)](#2218-ultraplan-mode-system-reminder)
      2. [Remote Planning & Implementation Workflows](#222-remote-planning-implementation-workflows)
         1. [Remote plan mode (ultraplan) [System Prompt]](#2221-remote-plan-mode-ultraplan-system-prompt)
         2. [Remote planning session (System Prompt)](#2222-remote-planning-session-system-prompt)
         3. [Phase four of plan mode (System Prompt)](#2223-phase-four-of-plan-mode-system-prompt)
      3. [Planning & Approval Workflow](#223-planning-approval-workflow)
         1. [EnterPlanMode (Tool Description)](#2231-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#2232-exitplanmode-tool-description)
   3. [Sub-Agent Execution Patterns](#23-sub-agent-execution-patterns)
      1. [Worker & Fork Sub-Agents](#231-worker-fork-sub-agents)
         1. [Worker fork (Agent Prompt)](#2311-worker-fork-agent-prompt)
      2. [Batch Processing & Parallel Work Orchestration](#232-batch-processing-parallel-work-orchestration)
         1. [/batch slash command (Agent Prompt)](#2321-batch-slash-command-agent-prompt)
3. [Session, Memory & Context](#3-session-memory-context)
   1. [Memory & Knowledge Persistence](#31-memory-knowledge-persistence)
      1. [Memory Management & Persistence](#311-memory-management-persistence)
         1. [Memory description of user details (System Prompt)](#3111-memory-description-of-user-details-system-prompt)
         2. [Memory description of user feedback (System Prompt)](#3112-memory-description-of-user-feedback-system-prompt)
         3. [Memory staleness verification (System Prompt)](#3113-memory-staleness-verification-system-prompt)
         4. [Description part of memory instructions (System Prompt)](#3114-description-part-of-memory-instructions-system-prompt)
         5. [Agent memory instructions (System Prompt)](#3115-agent-memory-instructions-system-prompt)
         6. [Determine which memory files to attach (Agent Prompt)](#3116-determine-which-memory-files-to-attach-agent-prompt)
         7. [Dream memory consolidation (Agent Prompt)](#3117-dream-memory-consolidation-agent-prompt)
         8. [Dream memory pruning (Agent Prompt)](#3118-dream-memory-pruning-agent-prompt)
         9. [Memory synthesis (Agent Prompt)](#3119-memory-synthesis-agent-prompt)
         10. [Session memory update instructions (Agent Prompt)](#31110-session-memory-update-instructions-agent-prompt)
         11. [Session memory template (Data)](#31111-session-memory-template-data)
      2. [Session Persistence & State Management](#312-session-persistence-state-management)
         1. [Memory file contents (System Reminder)](#3121-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#3122-nested-memory-contents-system-reminder)
         3. [Session continuation (System Reminder)](#3123-session-continuation-system-reminder)
         4. [Invoked skills (System Reminder)](#3124-invoked-skills-system-reminder)
   2. [Conversation Context Management](#32-conversation-context-management)
      1. [Conversation Summarization & Context Compaction](#321-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#3211-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#3212-recent-message-summarization-agent-prompt)
         3. [Context compaction summary (System Prompt)](#3213-context-compaction-summary-system-prompt)
         4. [Partial compaction instructions (System Prompt)](#3214-partial-compaction-instructions-system-prompt)
      2. [Session & Task Naming](#322-session-task-naming)
         1. [Coding session title generator (Agent Prompt)](#3221-coding-session-title-generator-agent-prompt)
         2. [Session title and branch generation (Agent Prompt)](#3222-session-title-and-branch-generation-agent-prompt)
         3. [Agent Summary Generation (System Prompt)](#3223-agent-summary-generation-system-prompt)
      3. [Session Search & History](#323-session-search-history)
         1. [Session search (Agent Prompt)](#3231-session-search-agent-prompt)
   3. [Runtime Modes & Session Configuration](#33-runtime-modes-session-configuration)
      1. [Special Modes & Configuration](#331-special-modes-configuration)
         1. [Minimal mode (System Prompt)](#3311-minimal-mode-system-prompt)
         2. [Option previewer (System Prompt)](#3312-option-previewer-system-prompt)
         3. [Scratchpad directory (System Prompt)](#3313-scratchpad-directory-system-prompt)
      2. [Status Line & Terminal Display](#332-status-line-terminal-display)
         1. [Status line setup (Agent Prompt)](#3321-status-line-setup-agent-prompt)
         2. [Buddy Mode (System Prompt)](#3322-buddy-mode-system-prompt)
      3. [MCP Tool Result & Context Management](#333-mcp-tool-result-context-management)
         1. [MCP Tool Result Truncation (System Prompt)](#3331-mcp-tool-result-truncation-system-prompt)
4. [Tools & External Integrations](#4-tools-external-integrations)
   1. [File System Operations](#41-file-system-operations)
      1. [ReadFile (Tool Description)](#411-readfile-tool-description)
      2. [Write (Tool Description)](#412-write-tool-description)
      3. [Edit (Tool Description)](#413-edit-tool-description)
      4. [Grep (Tool Description)](#414-grep-tool-description)
      5. [NotebookEdit (Tool Description)](#415-notebookedit-tool-description)
   2. [Web, Browser & Automation](#42-web-browser-automation)
      1. [Web & External Data Tools](#421-web-external-data-tools)
         1. [WebFetch (Tool Description)](#4211-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#4212-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#4213-webfetch-summarizer-agent-prompt)
      2. [Browser & Computer Automation Tools](#422-browser-computer-automation-tools)
         1. [Computer (Tool Description)](#4221-computer-tool-description)
         2. [Computer action (Tool Parameter)](#4222-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#4223-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#4224-chrome-browser-mcp-tools-system-prompt)
         5. [Computer Use MCP (Skill)](#4225-computer-use-mcp-skill)
      3. [Scheduling & Cron Tools](#423-scheduling-cron-tools)
         1. [CronCreate (Tool Description)](#4231-croncreate-tool-description)
         2. [/loop slash command (Skill)](#4232-loop-slash-command-skill)
         3. [/schedule slash command (Agent Prompt)](#4233-schedule-slash-command-agent-prompt)
   3. [IDE, Development & Agent Invocation Tools](#43-ide-development-agent-invocation-tools)
      1. [Specialized IDE & Development Tools](#431-specialized-ide-development-tools)
         1. [LSP (Tool Description)](#4311-lsp-tool-description)
         2. [PowerShell (Tool Description)](#4312-powershell-tool-description)
         3. [Config (Tool Description)](#4313-config-tool-description)
         4. [ToolSearch (second part) [Tool Description]](#4314-toolsearch-second-part-tool-description)
      2. [Agent & Skill Invocation Tools](#432-agent-skill-invocation-tools)
         1. [Agent (usage notes) [Tool Description]](#4321-agent-usage-notes-tool-description)
         2. [Skill (Tool Description)](#4322-skill-tool-description)
         3. [AskUserQuestion (Tool Description)](#4323-askuserquestion-tool-description)
         4. [AskUserQuestion (preview field) [Tool Description]](#4324-askuserquestion-preview-field-tool-description)
         5. [SendMessageTool (non-agent-teams) [Tool Description]](#4325-sendmessagetool-non-agent-teams-tool-description)
         6. [request_teach_access (part of teach mode) [Tool Description]](#4326-request_teach_access-part-of-teach-mode-tool-description)
   4. [CI/CD & Version Control Integration](#44-cicd-version-control-integration)
      1. [GitHub Integration & CI/CD](#441-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#4411-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#4412-github-app-installation-pr-description-data)
      2. [Git Worktree Isolation](#442-git-worktree-isolation)
         1. [EnterWorktree (Tool Description)](#4421-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#4422-exitworktree-tool-description)
5. [Specialized Agents & Automation Workflows](#5-specialized-agents-automation-workflows)
   1. [Code Quality & Review Agents](#51-code-quality-review-agents)
      1. [Code Review & PR Review Agents](#511-code-review-pr-review-agents)
         1. [/review-pr slash command (Agent Prompt)](#5111-review-pr-slash-command-agent-prompt)
         2. [Auto mode rule reviewer (Agent Prompt)](#5112-auto-mode-rule-reviewer-agent-prompt)
      2. [Code Refactoring & Simplification](#512-code-refactoring-simplification)
         1. [Simplify (Skill)](#5121-simplify-skill)
         2. [Bash command description writer (Agent Prompt)](#5122-bash-command-description-writer-agent-prompt)
   2. [Git Workflow Agents](#52-git-workflow-agents)
      1. [Quick git commit (Agent Prompt)](#521-quick-git-commit-agent-prompt)
      2. [Quick PR creation (Agent Prompt)](#522-quick-pr-creation-agent-prompt)
      3. [Git status (System Prompt)](#523-git-status-system-prompt)
   3. [Verification, Testing & Exploration Agents](#53-verification-testing-exploration-agents)
      1. [Verification & Testing Agents](#531-verification-testing-agents)
         1. [Verify skill (Skill)](#5311-verify-skill-skill)
         2. [Verify CLI changes (example for Verify skill) [Skill]](#5312-verify-cli-changes-example-for-verify-skill-skill)
         3. [Verify server/API changes (example for Verify skill) [Skill]](#5313-verify-serverapi-changes-example-for-verify-skill-skill)
         4. [Verification specialist (Agent Prompt)](#5314-verification-specialist-agent-prompt)
         5. [Create verifier skills (Skill)](#5315-create-verifier-skills-skill)
      2. [Codebase Exploration & Analysis Agents](#532-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#5321-explore-agent-prompt)
         2. [General purpose (Agent Prompt)](#5322-general-purpose-agent-prompt)
         3. [Plan mode (enhanced) [Agent Prompt]](#5323-plan-mode-enhanced-agent-prompt)
         4. [CLAUDE.md creation (Agent Prompt)](#5324-claudemd-creation-agent-prompt)
   4. [Analytics, Onboarding & Documentation Agents](#54-analytics-onboarding-documentation-agents)
      1. [Usage Insights & Analytics](#541-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#5411-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#5412-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#5413-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#5414-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#5415-insights-suggestions-system-prompt)
      2. [Onboarding & Team Documentation](#542-onboarding-team-documentation)
         1. [Team onboarding guide (Skill)](#5421-team-onboarding-guide-skill)
         2. [Onboarding guide generator (Agent Prompt)](#5422-onboarding-guide-generator-agent-prompt)
         3. [Skillify Current Session (System Prompt)](#5423-skillify-current-session-system-prompt)
   5. [Agent Architecture & Lifecycle](#55-agent-architecture-lifecycle)
      1. [Agent Design & Architecture](#551-agent-design-architecture)
         1. [Agent creation architect (Agent Prompt)](#5511-agent-creation-architect-agent-prompt)
         2. [Agent Design Patterns (Skill)](#5512-agent-design-patterns-skill)
         3. [Advisor tool instructions (System Prompt)](#5513-advisor-tool-instructions-system-prompt)
      2. [Hook Condition Evaluation & Agent Completion](#552-hook-condition-evaluation-agent-completion)
         1. [Agent Hook (Agent Prompt)](#5521-agent-hook-agent-prompt)
         2. [Hook condition evaluator (stop) [Agent Prompt]](#5522-hook-condition-evaluator-stop-agent-prompt)
      3. [Security & Command Safety Analysis](#553-security-command-safety-analysis)
         1. [Bash command prefix detection (Agent Prompt)](#5531-bash-command-prefix-detection-agent-prompt)
      4. [Prompt Suggestion & User Intent Prediction](#554-prompt-suggestion-user-intent-prediction)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#5541-prompt-suggestion-generator-v2-agent-prompt)
         2. [Claude guide agent (Agent Prompt)](#5542-claude-guide-agent-agent-prompt)
6. [Execution Principles & Operational Guidelines](#6-execution-principles-operational-guidelines)
   1. [Tool Selection & Task Execution Policy](#61-tool-selection-task-execution-policy)
      1. [Tool Usage Policy & Execution Strategy](#611-tool-usage-policy-execution-strategy)
         1. [Tool usage (create files) [System Prompt]](#6111-tool-usage-create-files-system-prompt)
         2. [Tool usage (edit files) [System Prompt]](#6112-tool-usage-edit-files-system-prompt)
         3. [Tool usage (read files) [System Prompt]](#6113-tool-usage-read-files-system-prompt)
         4. [Tool usage (search content) [System Prompt]](#6114-tool-usage-search-content-system-prompt)
         5. [Tool usage (search files) [System Prompt]](#6115-tool-usage-search-files-system-prompt)
         6. [Tool usage (reserve Bash) [System Prompt]](#6116-tool-usage-reserve-bash-system-prompt)
         7. [Tool usage (direct search) [System Prompt]](#6117-tool-usage-direct-search-system-prompt)
         8. [Tool usage (delegate exploration) [System Prompt]](#6118-tool-usage-delegate-exploration-system-prompt)
         9. [Tool usage (subagent guidance) [System Prompt]](#6119-tool-usage-subagent-guidance-system-prompt)
         10. [Tool usage (task management) [System Prompt]](#61110-tool-usage-task-management-system-prompt)
         11. [Tool usage (skill invocation) [System Prompt]](#61111-tool-usage-skill-invocation-system-prompt)
         12. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#61112-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         13. [Tool execution denied (System Prompt)](#61113-tool-execution-denied-system-prompt)
      2. [Task & Todo Management](#612-task-todo-management)
         1. [TodoWrite (Tool Description)](#6121-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#6122-taskcreate-tool-description)
   2. [Code Quality, Safety & Reversibility](#62-code-quality-safety-reversibility)
      1. [Code Quality & Task Execution Principles](#621-code-quality-task-execution-principles)
         1. [Doing tasks (software engineering focus) [System Prompt]](#6211-doing-tasks-software-engineering-focus-system-prompt)
         2. [Doing tasks (ambitious tasks) [System Prompt]](#6212-doing-tasks-ambitious-tasks-system-prompt)
         3. [Doing tasks (minimize file creation) [System Prompt]](#6213-doing-tasks-minimize-file-creation-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#6214-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no premature abstractions) [System Prompt]](#6215-doing-tasks-no-premature-abstractions-system-prompt)
         6. [Doing tasks (no time estimates) [System Prompt]](#6216-doing-tasks-no-time-estimates-system-prompt)
         7. [Doing tasks (no unnecessary additions) [System Prompt]](#6217-doing-tasks-no-unnecessary-additions-system-prompt)
         8. [Doing tasks (no unnecessary error handling) [System Prompt]](#6218-doing-tasks-no-unnecessary-error-handling-system-prompt)
         9. [Doing tasks (read before modifying) [System Prompt]](#6219-doing-tasks-read-before-modifying-system-prompt)
         10. [Doing tasks (security) [System Prompt]](#62110-doing-tasks-security-system-prompt)
         11. [Doing tasks (help and feedback) [System Prompt]](#62111-doing-tasks-help-and-feedback-system-prompt)
      2. [Safety, Caution & Reversibility](#622-safety-caution-reversibility)
         1. [Executing actions with care (System Prompt)](#6221-executing-actions-with-care-system-prompt)
         2. [Censoring assistance with malicious activities (System Prompt)](#6222-censoring-assistance-with-malicious-activities-system-prompt)
         3. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#6223-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         4. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#6224-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         5. [/security-review slash command (Agent Prompt)](#6225-security-review-slash-command-agent-prompt)
   3. [Output Formatting & Communication](#63-output-formatting-communication)
      1. [Output Style & Communication Guidelines](#631-output-style-communication-guidelines)
         1. [Tone and style (code references) [System Prompt]](#6311-tone-and-style-code-references-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#6312-tone-and-style-concise-output-—-short-system-prompt)
         3. [Output efficiency (System Prompt)](#6313-output-efficiency-system-prompt)
         4. [Agent thread notes (System Prompt)](#6314-agent-thread-notes-system-prompt)
      2. [Output Configuration & Resource Integration](#632-output-configuration-resource-integration)
         1. [Output style active (System Reminder)](#6321-output-style-active-system-reminder)
         2. [MCP resource no content (System Reminder)](#6322-mcp-resource-no-content-system-reminder)
         3. [MCP resource no displayable content (System Reminder)](#6323-mcp-resource-no-displayable-content-system-reminder)
         4. [Malware analysis after Read tool call (System Reminder)](#6324-malware-analysis-after-read-tool-call-system-reminder)
   4. [Progress, Diagnostics & Operational Modes](#64-progress-diagnostics-operational-modes)
      1. [Progress & Resource Monitoring](#641-progress-resource-monitoring)
         1. [Task tools reminder (System Reminder)](#6411-task-tools-reminder-system-reminder)
         2. [TodoWrite reminder (System Reminder)](#6412-todowrite-reminder-system-reminder)
         3. [Token usage (System Reminder)](#6413-token-usage-system-reminder)
         4. [USD budget (System Reminder)](#6414-usd-budget-system-reminder)
         5. [New diagnostics detected (System Reminder)](#6415-new-diagnostics-detected-system-reminder)
      2. [Autonomous & Auto Mode Execution](#642-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#6421-auto-mode-system-prompt)
      3. [Learning & Educational Modes](#643-learning-educational-modes)
         1. [Learning mode (System Prompt)](#6431-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6432-learning-mode-insights-system-prompt)
      4. [Debugging & Diagnostics](#644-debugging-diagnostics)
         1. [Debugging (Skill)](#6441-debugging-skill)
         2. [/stuck slash command (Skill)](#6442-stuck-slash-command-skill)
   5. [IDE Context, Hooks & Event Handling](#65-ide-context-hooks-event-handling)
      1. [File & IDE Context Awareness](#651-file-ide-context-awareness)
         1. [File exists but empty (System Reminder)](#6511-file-exists-but-empty-system-reminder)
         2. [File modified by user or linter (System Reminder)](#6512-file-modified-by-user-or-linter-system-reminder)
         3. [File opened in IDE (System Reminder)](#6513-file-opened-in-ide-system-reminder)
         4. [File shorter than offset (System Reminder)](#6514-file-shorter-than-offset-system-reminder)
         5. [File truncated (System Reminder)](#6515-file-truncated-system-reminder)
         6. [Lines selected in IDE (System Reminder)](#6516-lines-selected-in-ide-system-reminder)
         7. [Compact file reference (System Reminder)](#6517-compact-file-reference-system-reminder)
      2. [Hook Execution & Event Reporting](#652-hook-execution-event-reporting)
         1. [Hook additional context (System Reminder)](#6521-hook-additional-context-system-reminder)
         2. [Hook blocking error (System Reminder)](#6522-hook-blocking-error-system-reminder)
         3. [Hook stopped continuation prefix (System Reminder)](#6523-hook-stopped-continuation-prefix-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#6524-hook-stopped-continuation-system-reminder)
         5. [Hook success (System Reminder)](#6525-hook-success-system-reminder)
   6. [CLAUDE.md & Project Configuration Setup](#66-claudemd-project-configuration-setup)
      1. [/init CLAUDE.md and skill setup (new version) [Skill]](#661-init-claudemd-and-skill-setup-new-version-skill)
      2. [Update Claude Code Config (Skill)](#662-update-claude-code-config-skill)
      3. [update-config (7-step verification flow) [Skill]](#663-update-config-7-step-verification-flow-skill)
      4. [Hooks Configuration (System Prompt)](#664-hooks-configuration-system-prompt)
7. [Claude API & SDK Reference](#7-claude-api-sdk-reference)
   1. [Language-Specific API Implementations](#71-language-specific-api-implementations)
      1. [Claude API Reference — Python & TypeScript](#711-claude-api-reference-—-python-typescript)
         1. [Claude API reference — Python (Data)](#7111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#7112-claude-api-reference-—-typescript-data)
      2. [Claude API Reference — Other Languages](#712-claude-api-reference-—-other-languages)
         1. [Claude API reference — C# (Data)](#7121-claude-api-reference-—-c-data)
         2. [Claude API reference — cURL (Data)](#7122-claude-api-reference-—-curl-data)
         3. [Claude API reference — Go (Data)](#7123-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#7124-claude-api-reference-—-java-data)
         5. [Claude API reference — PHP (Data)](#7125-claude-api-reference-—-php-data)
         6. [Claude API reference — Ruby (Data)](#7126-claude-api-reference-—-ruby-data)
      3. [Tool Use API Reference](#713-tool-use-api-reference)
         1. [Tool use concepts (Data)](#7131-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#7132-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#7133-tool-use-reference-—-typescript-data)
      4. [Streaming API Reference](#714-streaming-api-reference)
         1. [Streaming reference — Python (Data)](#7141-streaming-reference-—-python-data)
         2. [Streaming reference — TypeScript (Data)](#7142-streaming-reference-—-typescript-data)
   2. [Agent SDK & Advanced Features](#72-agent-sdk-advanced-features)
      1. [Agent SDK Reference & Patterns](#721-agent-sdk-reference-patterns)
         1. [Agent SDK reference — Python (Data)](#7211-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#7212-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#7213-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#7214-agent-sdk-patterns-—-typescript-data)
      2. [Files API & Batch Processing Reference](#722-files-api-batch-processing-reference)
         1. [Files API reference — Python (Data)](#7221-files-api-reference-—-python-data)
         2. [Files API reference — TypeScript (Data)](#7222-files-api-reference-—-typescript-data)
         3. [Message Batches API reference — Python (Data)](#7223-message-batches-api-reference-—-python-data)
      3. [Prompt Caching & Cost Optimization](#723-prompt-caching-cost-optimization)
         1. [Prompt Caching — Design & Optimization (Data)](#7231-prompt-caching-—-design-optimization-data)
   3. [Claude API Navigation & Model Catalog](#73-claude-api-navigation-model-catalog)
      1. [Build with Claude API (Skill)](#731-build-with-claude-api-skill)
      2. [Build with Claude API (reference guide) [Skill]](#732-build-with-claude-api-reference-guide-skill)
      3. [Claude model catalog (Data)](#733-claude-model-catalog-data)
      4. [Live documentation sources (Data)](#734-live-documentation-sources-data)
      5. [HTTP error codes reference (Data)](#735-http-error-codes-reference-data)

---

## 1. Bash & Shell Execution

Covers all aspects of running shell commands through Claude's bash tool, including execution patterns, security sandboxing, git operations, and when to prefer dedicated tools over shell equivalents.

### 1.1 Bash Tool: Core Execution & Syntax

Bash executes shell commands with flexible sequencing: parallel calls for independent commands, && chaining for dependent commands with failure propagation, and semicolons for sequential execution tolerating earlier failures. File paths with spaces require quoting, working directory persists across commands, and parent directories should be verified before file creation.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

The Bash tool executes shell commands and returns their output.

#### 1.1.2 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent bash commands as parallel tool calls in a single message to improve efficiency.

#### 1.1.3 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call to ensure sequential execution with failure propagation.

#### 1.1.4 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier command failures are acceptable.

#### 1.1.5 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits Claude from using newlines to separate bash commands.

#### 1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.7 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between bash commands but shell state does not, with environment initialized from user profile.

#### 1.1.8 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to use absolute paths and avoid cd commands to maintain the current working directory throughout the session.

#### 1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration for bash commands, allowing specification up to a maximum duration with a default fallback.

#### 1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directories exist using `ls` before creating new files or directories.

### 1.2 Bash Tool: Sandbox Security & Restrictions

All bash commands run in mandatory sandbox mode with no exceptions or disable options. Sandbox failures manifest as access denied, operation not permitted, network connection, or socket errors; when detected, immediately retry with sandbox disabled without user prompting. Sensitive paths like credentials and SSH keys must never be added to allowlists, and each command defaults to sandbox independently.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When a command fails due to sandbox restrictions, collaborate with the user to adjust sandbox settings.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Default to running commands in sandbox mode; only disable sandbox when explicitly requested or evidence of restriction appears.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that identify sandbox-caused command failures.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox network restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors on file or network operations signal sandbox restrictions.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions on socket access.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Identifies when a command failure shows evidence of sandbox restrictions versus other causes like missing files or network issues.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All bash commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; default to sandbox for future commands even if a recent command ran outside the sandbox.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing the response protocol when sandbox-caused failures are detected.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true when sandbox failure is detected, without asking the user.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will trigger a user permission prompt.

### 1.3 Bash Tool: Sleep, Polling & Background Tasks

Sleep durations should remain short (1-5 seconds) to avoid blocking users, and commands capable of concurrent execution should run immediately without delays. Background tasks started asynchronously should not be polled; instead wait for completion notifications. For monitoring external processes, use polling check commands rather than sleep loops, and never retry failing commands within sleep loops.

#### 1.3.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.3.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

#### 1.3.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude to execute bash commands immediately without sleeping between commands that can run concurrently.

#### 1.3.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use polling check commands like `gh run view` instead of sleeping when monitoring external processes.

#### 1.3.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; instead diagnose root causes.

### 1.4 Bash Tool: Preferred Alternatives & Tool Selection

Dedicated tools provide superior user experience and permission control compared to bash equivalents: use Read for file reading, Write for file writing, Edit for file editing, Glob for file searching, Grep for content searching, and direct text output for communication instead of echo or printf.

#### 1.4.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for read-only searching commands like find and grep; use dedicated tools instead for better user experience.

#### 1.4.2 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly instead of using echo or printf for communication.

#### 1.4.3 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs Claude to use the Grep tool instead of grep or rg for content searching.

#### 1.4.4 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool instead of sed or awk for file editing.

#### 1.4.5 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs Claude to use the Glob tool instead of find or ls for file searching.

#### 1.4.6 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool instead of cat, head, or tail for file reading.

#### 1.4.7 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs Claude to use the Write tool instead of echo or cat for file writing.

#### 1.4.8 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and permission control than Bash equivalents.

### 1.5 Bash Tool: Git Operations & Safety

Git operations require safety protocols: never skip hooks or signing unless explicitly requested, prefer creating new commits over amending existing ones, and evaluate safer alternatives before executing destructive operations like reset or force push. Commit and pull request creation follow detailed procedures including parallel command execution, hook handling, and formatted test plans.

#### 1.5.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives before running destructive git operations like reset, force push, or checkout.

#### 1.5.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Provides detailed procedures for creating git commits and GitHub pull requests, including safety protocols, parallel command execution, hook handling, and PR formatting with test plans.

#### 1.5.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits Claude from skipping git hooks or bypassing signing unless explicitly requested by the user.

#### 1.5.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to create new commits rather than amending existing ones.

### 1.6 PowerShell Tool & Windows Compatibility

Windows PowerShell 5.1 constraints and optimization patterns. Covers syntax limitations (missing operators, encoding defaults) and performance guidance for avoiding unnecessary delays through immediate execution, background task handling, and polling alternatives.

#### 1.6.1 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 limitations including unavailable pipeline chain operators, ternary operators, stderr redirection behavior, and UTF-16 LE default encoding.

#### 1.6.2 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Guidelines for avoiding unnecessary `Start-Sleep` in PowerShell scripts, recommending immediate execution, background task notifications, root-cause diagnosis, and polling alternatives. Advises keeping sleep durations short (1-5 seconds) when unavoidable.

---

## 2. Multi-Agent Orchestration

Patterns and infrastructure for coordinating teams of agents, spawning subagents, delegating parallel work, and managing inter-agent communication and lifecycle.

### 2.1 Agent Teams & Communication

Establishing agent identities, team structures, message routing, and coordination protocols for multi-agent swarms.

#### 2.1.1 Multi-Agent Team Coordination

Establishes Claude's role within agent teams, including identity management, task coordination, graceful shutdown protocols, and lightweight side-question handling without interrupting primary workflows.

##### 2.1.1.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity and responsibilities, including reading team config, checking task lists, and communicating with teammates by name rather than UUID.

##### 2.1.1.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully before providing final response in non-interactive mode.

##### 2.1.1.3 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent type and instructs Claude to invoke it with appropriate context.

##### 2.1.1.4 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Configures a lightweight side-question agent with no tools that answers a single question directly without interrupting the main agent, using only conversation context.

#### 2.1.2 Team & Agent Orchestration

Coordinate multi-agent swarms working in parallel on complex tasks through team creation, task assignment via shared lists, and inter-agent messaging. Handles agent lifecycle management, message routing with broadcast capability, and user-facing communication channels.

##### 2.1.2.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Instructs Claude to create and manage teams of multiple agents working in parallel on complex tasks. Covers team creation, task assignment via shared task lists, agent type selection, automatic message delivery, and proper handling of teammate idle states between turns.

##### 2.1.2.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all teammates to be terminated first.

##### 2.1.2.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for finding and claiming available tasks from the task list, prioritizing by ID and respecting dependencies.

##### 2.1.2.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages between agents in teammate workflows with broadcast capability, supporting legacy protocol responses for shutdown and plan approval requests.

##### 2.1.2.5 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to send all user-facing replies through SendUserMessage, with guidance on acknowledgments, checkpoints, and concise messaging to ensure users see critical information.

#### 2.1.3 Subagent Orchestration & Team Communication

Defines patterns for delegating work to subagents, managing parallel research and implementation forks, inter-agent messaging protocols, and post-implementation workflows including testing and PR creation.

##### 2.1.3.1 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for research and implementation work, prohibits reading fork output mid-flight or fabricating results, and requires specific fork naming and prompt directives to avoid context pollution.

##### 2.1.3.2 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results, including how to respond when users ask questions mid-wait.

##### 2.1.3.3 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents running in a team to use the SendMessage tool to communicate with teammates rather than writing text responses.

##### 2.1.3.4 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts: brief like a colleague entering the room, explain context and why the task matters, avoid delegating understanding, and include specific file paths and line numbers.

##### 2.1.3.5 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines the post-implementation workflow for workers: simplify changes, run unit tests, test end-to-end, commit and push, then report the PR URL.

### 2.2 Planning & Workflow Orchestration

Multi-phase planning workflows, remote planning sessions, approval gates, and structured execution cycles that separate design from implementation.

#### 2.2.1 Plan Mode & Structured Workflows

Manages multi-phase planning workflows with varying complexity—from iterative pair-planning with user collaboration to parallel subagent exploration and risk assessment—enforcing read-only constraints and plan file updates throughout execution cycles.

##### 2.2.1.1 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and execution is now enabled.

##### 2.2.1.2 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 2.2.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Comprehensive plan mode workflow with five phases: initial understanding using parallel exploration agents, design with planning agents, review, phase four execution, and plan mode exit. Enforces read-only restrictions and requires plan file updates.

##### 2.2.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, and asks the user clarifying questions in a loop until the plan is complete and ready for approval.

##### 2.2.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instructions for subagents enforcing read-only operations and plan file editing while answering user queries comprehensively.

##### 2.2.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude when re-entering plan mode to read the existing plan, evaluate whether the new request is the same task or different, and update the plan file accordingly before proceeding.

##### 2.2.1.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 2.2.1.8 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Instructs Claude to create detailed implementation plans using parallel subagents to explore codebase, identify modifications, assess risks, and critique the plan before execution or teleportation to local terminal.

#### 2.2.2 Remote Planning & Implementation Workflows

Orchestrates remote planning sessions where Claude explores codebases, generates diagram-rich implementation plans, and manages approval or rejection workflows with plan teleportation capabilities.

##### 2.2.2.1 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore codebases, produce diagram-rich implementation plans via ExitPlanMode, and handle approval/rejection workflows with support for plan teleportation back to the user's local terminal.

##### 2.2.2.2 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Enables remote planning sessions where Claude explores the codebase, produces an implementation plan via ExitPlanMode, and manages approval, rejection, or teleportation workflows without spawning subagents.

##### 2.2.2.3 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Defines the final phase of plan mode where Claude writes a concise plan listing file modifications and a verification command, with a 40-line hard limit.

#### 2.2.3 Planning & Approval Workflow

Separate implementation design from execution by exploring codebase and proposing approaches for user approval before code generation. Bridges architectural decisions and user intent.

##### 2.2.3.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore codebase and design implementation approaches for user approval before writing code, recommended for non-trivial tasks with multiple valid approaches or architectural decisions.

##### 2.2.3.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of implementation planning and requests user approval by reading the plan file, used only for code-writing tasks not research or exploration.

### 2.3 Sub-Agent Execution Patterns

Single-directive worker agents, batch parallel processing, and fork-based execution frameworks for spawned sub-agents.

#### 2.3.1 Worker & Fork Sub-Agents

Single-directive execution framework for spawned sub-agents that enforces one-shot task completion and concise reporting without recursive spawning or meta-commentary.

##### 2.3.1.1 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

System prompt for a forked worker sub-agent that executes a single directive from the parent agent and reports back concisely. Prohibits spawning sub-agents, enforces one-shot execution, and requires opening with a single-line task restatement. Provides concise plain-text reports without follow-up questions or meta-commentary.

#### 2.3.2 Batch Processing & Parallel Work Orchestration

Coordinates large-scale codebase changes by decomposing work into independent units and executing them in parallel, with built-in planning, testing, and progress visibility across distributed workers.

##### 2.3.2.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes through three phases: research and planning with subagent exploration, decomposition into 5-30 independent work units with e2e test recipes, and parallel worker spawning with progress tracking via PR status tables.

---

## 3. Session, Memory & Context

Mechanisms for maintaining continuity across sessions, persisting knowledge, compacting conversation context, and managing runtime configuration and state.

### 3.1 Memory & Knowledge Persistence

Structured memory files, institutional knowledge accumulation, staleness verification, and session-to-session continuity.

#### 3.1.1 Memory Management & Persistence

Maintains persistent user and institutional knowledge across sessions through structured memory files. Accumulates user preferences, work guidance, and domain-specific patterns while verifying staleness against current state. Memory selection, synthesis, and consolidation processes keep context relevant and prevent stale information from corrupting decisions. Session memory templates track current state, errors, and discoveries with token-aware updates.

##### 3.1.1.1 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about the user's role, goals, knowledge, and preferences across sessions to enable personalized collaboration.

##### 3.1.1.2 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory that stores guidance on work approaches, recording both successes and failures while checking for contradictions with team memories.

##### 3.1.1.3 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs Claude to verify memory records against current file state and delete stale memories that conflict with observed reality.

##### 3.1.1.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Field description for user memories, emphasizing role, goals, and preferences to tailor behavior and enable personalized assistance. Advises avoiding negative judgments and focusing on work-relevant information.

##### 3.1.1.5 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for adding domain-specific memory update instructions to agent system prompts to build institutional knowledge across conversations. Provides templates for code reviewers, test runners, architects, and documentation writers to record patterns, decisions, and discoveries relevant to their domain.

##### 3.1.1.6 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files for Claude Code based on user queries, avoiding false matches on surface keywords and being conservative with user-profile and project-overview memories.

##### 3.1.1.7 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to maintain organization and accuracy.

##### 3.1.1.8 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs memory pruning by deleting stale or invalidated memory files and collapsing duplicates into single consolidated memories while preserving creation dates.

##### 3.1.1.9 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and synthesizes only query-relevant information into single-paragraph summaries with cited filenames, avoiding invention and padding.

##### 3.1.1.10 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations. Preserves exact file structure with section headers and italic template descriptions while updating only content below them. Requires detailed, info-dense updates with specific file paths, function names, error messages, and technical details. Enforces token limits per section and prioritizes actionable information while maintaining continuity via Current State field.

##### 3.1.1.11 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files documenting current state, task specifications, files, workflows, errors, and key results for Claude Code sessions.

#### 3.1.2 Session Persistence & State Management

Maintains continuity across sessions by surfacing memory file contents, tracking invoked skills, and alerting Claude to working directory changes when resuming from different machines.

##### 3.1.2.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by its path with type description.

##### 3.1.2.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

##### 3.1.2.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory may have changed.

##### 3.1.2.4 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the session and instructs Claude to continue following their guidelines.

### 3.2 Conversation Context Management

Summarization strategies for context window boundaries, session naming conventions, and history search across past conversations.

#### 3.2.1 Conversation Summarization & Context Compaction

Preserves conversation context across context window boundaries through structured summarization. Captures primary requests, technical concepts, modified files, errors, problem-solving approaches, and next steps with full code snippets. Enables efficient resumption by compacting exhausted conversations into continuation summaries that maintain technical accuracy and actionable next steps.

##### 3.2.1.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections covering primary requests, technical concepts, files modified, errors encountered, problem-solving, all user messages, pending tasks, current work, and next steps with full code snippets and technical accuracy.

##### 3.2.1.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions into nine sections covering requests, concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps with code snippets and technical precision.

##### 3.2.1.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for writing continuation summaries when context windows are exhausted, structured to include task overview, current state, discoveries, next steps, and context to preserve. Enables efficient resumption of work in future sessions.

##### 3.2.1.4 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured instructions for summarizing conversation portions with analysis tags, covering primary requests, technical concepts, files, errors, problem-solving, user messages, pending tasks, and continuation context.

#### 3.2.2 Session & Task Naming

Generates concise, descriptive identifiers for sessions and git branches that capture task intent at a glance. Session titles use sentence case (3-7 words), branch names follow 'claude/' prefix convention with dash-separated lowercase words, and action summaries use present tense with specific file or function references rather than vague descriptions.

##### 3.2.2.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise 3-7 word sentence-case titles capturing the main goal of a coding session for easy recognition in session lists.

##### 3.2.2.2 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent for generating succinct session titles and git branch names from task descriptions. Creates titles in sentence case (max 6 words) and branch names prefixed with 'claude/' in lowercase with dash-separated words (max 4 words). Returns JSON object with title and branch fields.

##### 3.2.2.3 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt for generating concise 3-5 word action summaries in present tense, naming specific files or functions rather than branches or vague descriptions. Provides examples of good (present-tense, specific) and bad (past-tense, vague, too-long) formats.

#### 3.2.3 Session Search & History

Enables efficient retrieval of past Claude Code sessions through transcript scanning and relevance-ranked matching across conversation history.

##### 3.2.3.1 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent prompt for searching past Claude Code conversation sessions by scanning .jsonl transcript files. Uses Grep and Read tools to efficiently scan transcript content before reading individual files. Returns matching session IDs ordered by relevance as JSON array.

### 3.3 Runtime Modes & Session Configuration

Feature flags, minimal mode, scratchpad isolation, terminal display customization, and MCP context management for active sessions.

#### 3.3.1 Special Modes & Configuration

Runtime modes and session-level configuration that control feature activation, UI presentation, and file handling. Minimal mode strips hooks and plugins for lean execution, preview fields enable side-by-side option comparisons, and scratchpad directories isolate temporary files per session.

##### 3.3.1.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode operation that disables hooks, LSP, plugins, auto-memory, and background features while requiring explicit context via CLI flags for lean, controlled execution.

##### 3.3.1.2 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Documents the preview field for presenting side-by-side UI comparisons of mockups, code snippets, diagrams, and configurations in single-select questions.

##### 3.3.1.3 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

#### 3.3.2 Status Line & Terminal Display

Terminal interface customization through dynamic status line rendering from shell configurations and personality-driven coding companions, managing display metadata and visual styling.

##### 3.3.2.1 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

System prompt for the statusline-setup agent that configures Claude Code status line display. Converts shell PS1 configurations to statusLine commands, handles ANSI color codes, and updates ~/.claude/settings.json. Provides JSON input schema with session metadata, model info, workspace context, token usage, rate limits, vim mode, agent info, and worktree details for dynamic status line rendering.

##### 3.3.2.2 [Buddy Mode (System Prompt)](system-prompts/system-prompt-buddy-mode.md)

Instructions for generating terminal-based coding companions with distinct personalities. Takes rarity, species, stats, and inspiration words to create memorable one-word names and quirky one-sentence personalities that affect how companions comment on developer work.

#### 3.3.3 MCP Tool Result & Context Management

Strategies for managing large MCP tool outputs without overwhelming context. Recommends targeted file queries for specific data and subagent delegation for summarization tasks.

##### 3.3.3.1 [MCP Tool Result Truncation (System Prompt)](system-prompts/system-prompt-mcp-tool-result-truncation.md)

Provides guidelines for handling large MCP tool outputs: use direct file queries for targeted lookups, delegate analysis to subagents for summarization to avoid context bloat.

---

## 4. Tools & External Integrations

Concrete tools available to Claude for file operations, web access, browser automation, scheduling, and IDE integration, plus GitHub CI/CD automation.

### 4.1 File System Operations

Read, write, and modify files with specialized support for images, PDFs, Jupyter notebooks, and code. Provides precise editing via string replacement while preserving formatting, plus regex-based content search across the codebase.

#### 4.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the filesystem supporting relative or absolute paths, with special handling for images, PDFs (with page ranges), and Jupyter notebooks, defaulting to first N lines.

#### 4.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem with complete overwrites. Instructs Claude to prefer the Edit tool for modifications, avoid creating documentation unless explicitly requested, and omit emojis unless user-specified.

#### 4.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with precise indentation preservation, preferring edits to existing code over creating new files.

#### 4.1.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting regex, glob filtering, and multiple output modes, with guidance to prefer this over bash grep commands.

#### 4.1.5 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replaces contents of specific cells in Jupyter notebooks, supporting insert and delete modes with 0-indexed cell numbering.

### 4.2 Web, Browser & Automation

Fetching and searching live web content, automating browser interactions via mouse and keyboard, and scheduling recurring tasks with cron.

#### 4.2.1 Web & External Data Tools

Retrieves and processes web content and current information beyond training data. WebFetch converts HTML to markdown for analysis with caching and redirect handling, while WebSearch queries the live web with mandatory source attribution. A summarization agent distills verbose fetched content into concise, legally-compliant excerpts.

##### 4.2.1.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with an AI model. Includes automatic HTTPS upgrade, 15-minute caching, redirect handling, and a preference for MCP-provided alternatives.

##### 4.2.1.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Enables Claude to search the web for current information beyond its knowledge cutoff. Requires mandatory source attribution in responses and enforces use of the current year in search queries for recent data.

##### 4.2.1.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Prompt for agent that summarizes verbose output from WebFetch for the main model. Enforces strict 125-character maximum for quotes from untrusted sources, uses quotation marks for exact language, and respects open source licenses. Provides concise responses based on fetched content with appropriate attribution and legal disclaimers.

#### 4.2.2 Browser & Computer Automation Tools

Automates browser interactions and UI control through mouse, keyboard, and visual feedback. Provides granular control over Chrome via clicks, typing, scrolling, and hover actions, with GIF recording, console debugging, and tab management to prevent loops and handle dialogs safely.

##### 4.2.2.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse, keyboard, and screenshots, with guidance on precise cursor positioning and element interaction.

##### 4.2.2.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines 13 mouse and keyboard actions for Chrome browser automation, including clicks, typing, scrolling, dragging, and hover interactions.

##### 4.2.2.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Comprehensive guidelines for browser automation using Claude in Chrome tools, covering GIF recording with frame capture, console debugging with pattern filtering, alert/dialog avoidance, loop prevention, and tab context management. Emphasizes starting sessions with `tabs_context_mcp` and avoiding tab ID reuse across sessions.

##### 4.2.2.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions requiring loading Chrome browser MCP tools via ToolSearch before use, with specific syntax for selecting and calling tools like `mcp__claude-in-chrome__tabs_context_mcp`.

##### 4.2.2.5 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools with tool selection tiers (dedicated MCP, Chrome MCP, computer use), app access restrictions, link safety guidelines, and financial action restrictions.

#### 4.2.3 Scheduling & Cron Tools

Schedules one-shot and recurring tasks using cron expressions. Supports load distribution through jitter, timezone-aware scheduling, and integration with remote Claude Code agents for automated execution on cloud infrastructure.

##### 4.2.3.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron jobs using standard 5-field cron syntax in local timezone, with guidance on avoiding :00/:30 minute marks for load distribution and optional durability for persistence across sessions.

##### 4.2.3.2 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts to cron expression, and schedules recurring tasks with automatic execution on first run.

##### 4.2.3.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides scheduling, updating, listing, and running remote Claude Code agents on cron triggers via Anthropic cloud API, handling environment selection, MCP connector attachment, timezone conversion, and trigger management with comprehensive validation.

### 4.3 IDE, Development & Agent Invocation Tools

Language Server Protocol, PowerShell execution, code intelligence features, specialized skill invocation, and user interaction tools.

#### 4.3.1 Specialized IDE & Development Tools

Provides code intelligence, command execution, and development environment configuration. Language Server Protocol enables symbol navigation and hover information, PowerShell executes terminal operations, and configuration management controls editor settings and permissions.

##### 4.3.1.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol operations including go-to-definition, find-references, hover information, and call hierarchy for code intelligence across supported file types.

##### 4.3.1.2 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with timeout and output limits, emphasizing use for terminal operations (git, npm, docker) while delegating file operations to specialized tools, with detailed syntax guidance for variables, cmdlets, and here-strings.

##### 4.3.1.3 [Config (Tool Description)](system-prompts/tool-description-config.md)

Tool for viewing and modifying Claude Code configuration settings stored globally in ~/.claude.json or per-project in settings.json, supporting theme, editor mode, model selection, and permissions.

##### 4.3.1.4 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Describes a deferred tool lookup mechanism that fetches complete JSONSchema definitions for tools by name or keyword query, enabling dynamic tool invocation after schema retrieval.

#### 4.3.2 Agent & Skill Invocation Tools

Invokes specialized capabilities and manages user interaction. Spawns subagents for parallel work, executes domain-specific skills, gathers user preferences through interactive questions with visual previews, and sends formatted messages with attachments. Teach mode guides users through tasks with contextual tooltips.

##### 4.3.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Provides comprehensive guidance on using the Task/Agent tool including subagent spawning, background execution, resumption via messaging, worktree isolation, and parallel agent coordination.

##### 4.3.2.2 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within conversations, requiring invocation before generating responses when skills match user requests.

##### 4.3.2.3 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Explains when and how to use AskUserQuestion to gather preferences, clarify requirements, and offer implementation choices, with special guidance for plan mode interactions.

##### 4.3.2.4 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Describes how to use the optional preview field on single-select question options to display HTML mockups, code snippets, and visual comparisons.

##### 4.3.2.5 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown messages to users with optional file attachments, using status labels to indicate intent (normal reply vs. proactive notification).

##### 4.3.2.6 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct control, activated by learning-oriented phrases.

### 4.4 CI/CD & Version Control Integration

GitHub Actions templates, app installation patterns, and git worktree isolation for parallel branch development.

#### 4.4.1 GitHub Integration & CI/CD

Automation templates for integrating Claude Code into GitHub workflows, enabling AI-assisted code review and issue resolution through GitHub Actions triggers and app installation patterns.

##### 4.4.1.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in GitHub issues, pull requests, or comments, with configurable permissions and optional custom prompts.

##### 4.4.1.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining what Claude Code does and security considerations for repository maintainers.

#### 4.4.2 Git Worktree Isolation

Create isolated development environments using git worktrees or VCS-agnostic hooks, enabling parallel work on separate branches without affecting the main working directory. Manages lifecycle from creation through cleanup.

##### 4.4.2.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree in .claude/worktrees/ with a new branch when explicitly requested, supporting VCS-agnostic isolation via hooks outside git repositories.

##### 4.4.2.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits an EnterWorktree session with options to keep or remove the worktree, restoring the original working directory and clearing CWD-dependent caches.

---

## 5. Specialized Agents & Automation Workflows

Purpose-built agents for git operations, code review, testing, codebase exploration, refactoring, analytics, and onboarding, plus patterns for agent design and completion verification.

### 5.1 Code Quality & Review Agents

Agents that perform code review, security analysis, refactoring, and pull request evaluation with structured feedback.

#### 5.1.1 Code Review & PR Review Agents

Specialized reviewers that analyze code quality, security, and style across pull requests and classifier rules, providing structured feedback on correctness, conventions, and potential issues.

##### 5.1.1.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, correctness, conventions, performance, tests, and security with concise formatted feedback.

##### 5.1.1.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for Claude Code by evaluating clarity, completeness, conflicts, and actionability across allow, soft_deny, and environment rule categories.

#### 5.1.2 Code Refactoring & Simplification

Automated code improvement through parallel analysis of reuse opportunities, quality issues, and efficiency problems, combined with documentation generation for command-line tools using active-voice descriptions.

##### 5.1.2.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel agents to identify code reuse opportunities, quality issues, and efficiency problems, then fixes findings.

##### 5.1.2.2 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief while adding context for complex piped or flag-heavy commands.

### 5.2 Git Workflow Agents

Agents that automate git operations by analyzing repository state to create commits and pull requests with contextually appropriate messages, enforcing safety constraints around secret files and commit history.

#### 5.2.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context from git status and diff, analyzing changes to draft messages following repository conventions while enforcing safety protocols against amending and secret files.

#### 5.2.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated git context, handling branch creation, commit generation, and PR creation or updates via gh CLI with safety protocols and attribution support.

#### 5.2.3 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Provides git repository status snapshot at conversation start as reference context.

### 5.3 Verification, Testing & Exploration Agents

Runtime verification through user-facing surfaces, adversarial testing, and read-only codebase exploration and architecture analysis.

#### 5.3.1 Verification & Testing Agents

Runtime verification framework that executes code changes through their user-facing surfaces—CLIs, APIs, servers—to capture observable behavior and issue evidence-backed verdicts, complemented by adversarial testing patterns and automated verifier skill generation.

##### 5.3.1.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Comprehensive skill for runtime verification of code changes through direct execution and observation. Emphasizes building and running the actual application at its user-facing surface (CLI, API, GUI, library), capturing evidence, and reporting verdicts (PASS/FAIL/BLOCKED/SKIP) with findings that go beyond test results. Includes guidance on finding changes, establishing handles via existing verifiers or run-skills, driving the app to changed code paths, and writing detailed reports with observations.

##### 5.3.1.2 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Demonstrates a systematic workflow for verifying CLI changes by building, running with test arguments, capturing output and exit codes, and comparing against expected behavior. Includes a worked example of testing a new `--json` flag and guidance on handling stdin, destructive commands, and failure modes.

##### 5.3.1.3 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Outlines a pattern for verifying server and API changes using curl to test routes, with lifecycle management for starting servers and polling readiness. Includes a worked example testing rate-limit headers and guidance on interpreting response status, headers, and body content.

##### 5.3.1.4 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

System prompt for a verification subagent that adversarially tests implementations by running builds, test suites, linters, and adversarial probes (boundary values, concurrency, idempotency, orphan operations). Issues PASS/FAIL/PARTIAL verdicts with mandatory evidence of at least one adversarial probe. Recognizes and counters common verification pitfalls like reading code instead of running it, trusting self-reports, and hedging with PARTIAL instead of deciding.

##### 5.3.1.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase process for creating verifier skills for automated code verification, including project detection, tool setup (Playwright, Tmux, HTTP), authentication handling, and skill generation.

#### 5.3.2 Codebase Exploration & Analysis Agents

Read-only agents that discover patterns, extract architecture, and answer complex questions through file search, code analysis, and systematic exploration without modifying code.

##### 5.3.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file discovery via glob patterns, code search with regex, and analysis at specified thoroughness levels without any file modification capabilities.

##### 5.3.2.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose agent for researching complex questions, searching code, and executing multi-step tasks across codebases with full tool access, reporting findings concisely to callers.

##### 5.3.2.3 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans through codebase exploration, pattern discovery, and step-by-step strategy design in read-only mode, identifying critical files without file modifications.

##### 5.3.2.4 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md documentation by extracting build/test commands, high-level architecture, and codebase conventions while avoiding generic practices and obvious instructions.

### 5.4 Analytics, Onboarding & Documentation Agents

Session analytics for friction and optimization insights, team onboarding material generation, and reusable skill documentation creation.

#### 5.4.1 Usage Insights & Analytics

Analyzes Claude Code session data to extract friction patterns, identify workflow optimization opportunities, and surface ambitious future capabilities, generating actionable insights and recommendations tailored to user behavior and goals.

##### 5.4.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part usage insights summary covering what's working, hindrances, quick wins, and ambitious workflows for Claude Code users, drawing from aggregated session data and friction analysis.

##### 5.4.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with specific examples, helping users understand recurring issues and improvement opportunities.

##### 5.4.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, with copyable prompts for users to experiment with.

##### 5.4.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including goal categories, user satisfaction signals, and friction points, with strict guidelines for counting only explicit user requests and feedback.

##### 5.4.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP servers, custom skills, hooks, headless mode, task agents), and usage patterns based on aggregated session data.

#### 5.4.2 Onboarding & Team Documentation

Creates team-specific onboarding materials and reusable skill documentation by analyzing usage patterns, classifying work types, and collaboratively capturing repeatable workflows into structured guides and skill definitions.

##### 5.4.2.1 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding new teammates to team's Claude Code setup, presenting usage stats, setup checklists, MCP servers, skills, and team tips in conversational style.

##### 5.4.2.2 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides by analyzing usage data, classifying sessions into work types, gathering MCP and repo context, generating ONBOARDING.md with work-type breakdown and team tips, then iterating collaboratively.

##### 5.4.2.3 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-round interview process to analyze the current session, capture repeatable workflows as reusable skills, and generate a SKILL.md file with detailed steps, success criteria, and execution guidance.

### 5.5 Agent Architecture & Lifecycle

Design patterns for building agents, completion verification via transcript analysis, security command analysis, and prompt suggestion systems.

#### 5.5.1 Agent Design & Architecture

Establishes patterns and guidance for building autonomous agents through persona design, instruction architecture, tool surface optimization, and context management strategies that balance performance with behavioral safety.

##### 5.5.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of high-performance AI agent configurations by extracting user intent, designing expert personas, architecting comprehensive instructions, optimizing for performance, and generating JSON specifications with identifiers and usage examples. Emphasizes project-specific context from CLAUDE.md files and provides detailed system prompt templates for autonomous agent operation.

##### 5.5.1.2 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Decision heuristics for building agents covering tool surface design, bash vs dedicated tools, context management (editing, compaction, memory), caching strategies, and programmatic tool calling.

##### 5.5.1.3 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using an advisor tool backed by a stronger reviewer model. Directs calling the advisor before substantive work (writing, editing, committing to interpretations), when stuck, when changing approach, and before declaring tasks complete. Emphasizes making deliverables durable before advisor calls and giving advice serious weight while surfacing conflicts.

#### 5.5.2 Hook Condition Evaluation & Agent Completion

Validates agent task completion by analyzing conversation transcripts against stop conditions, providing structured verification that work meets defined exit criteria.

##### 5.5.2.1 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and confirming agent task completion using codebase inspection tools.

##### 5.5.2.2 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks in Claude Code by reading conversation transcripts and returning JSON with ok/reason fields, quoting evidence from the transcript.

#### 5.5.3 Security & Command Safety Analysis

Detection and classification of bash command injection risks by analyzing command prefixes and structure to prevent malicious command execution.

##### 5.5.3.1 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection risks in bash commands for safety classification, returning prefix strings or 'command_injection_detected' to protect against malicious command execution.

#### 5.5.4 Prompt Suggestion & User Intent Prediction

Contextual prediction of user actions and documentation-driven guidance for Claude tools, combining next-action suggestions with API and SDK reference material.

##### 5.5.4.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent context, avoiding evaluative language and Claude-voice suggestions.

##### 5.5.4.2 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Provides documentation-based guidance on Claude Code, Claude Agent SDK, and Claude API by fetching official docs, identifying relevant resources, and offering actionable examples with specific command and configuration references.

---

## 6. Execution Principles & Operational Guidelines

Cross-cutting policies governing how Claude executes tasks: tool selection preferences, code quality standards, safety constraints, output formatting, and progress monitoring.

### 6.1 Tool Selection & Task Execution Policy

Preferred tools for file, search, and task operations; parallel execution strategies; permission handling; and task/todo list management.

#### 6.1.1 Tool Usage Policy & Execution Strategy

Establishes tool preferences across file operations, search, and task management, prioritizing dedicated tools over shell commands, enabling parallel execution for independent operations, and defining permission denial handling.

##### 6.1.1.1 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use the Write tool instead of cat heredoc or echo redirection for file creation.

##### 6.1.1.2 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs Claude to use the Edit tool instead of sed or awk for file modifications.

##### 6.1.1.3 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool instead of cat, head, tail, or sed for file reading.

##### 6.1.1.4 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs Claude to use the Grep tool instead of grep or rg for searching file contents.

##### 6.1.1.5 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool instead of find or ls for file searches.

##### 6.1.1.6 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve the Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

##### 6.1.1.7 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob and Grep tools directly for simple, directed codebase searches.

##### 6.1.1.8 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Recommends using the Task tool with specialized subagents for broader codebase exploration and deep research when simple directed searches prove insufficient.

##### 6.1.1.9 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool with specialized agents for parallelizing independent queries and protecting context, while avoiding duplicated work.

##### 6.1.1.10 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite to break down work, track progress, and mark tasks as completed immediately upon finishing.

##### 6.1.1.11 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Explains that slash commands invoke user-invocable skills via the Skill tool, only for skills listed in the tool's user-invocable section.

##### 6.1.1.12 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while using sequential calls when dependencies exist.

##### 6.1.1.13 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Defines how Claude should handle denied tool permissions: attempt reasonable workarounds with alternative tools, but stop and explain if the capability is essential rather than attempting malicious bypasses.

#### 6.1.2 Task & Todo Management

Organize and track multi-step work through structured task lists with explicit state management (pending, in-progress, completed). Enables progress visibility and ensures tasks are marked complete only when fully accomplished.

##### 6.1.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Guides Claude to create and maintain structured task lists for organizing multi-step coding sessions. Defines when to use the tool (complex tasks with 3+ steps, user-provided task lists), task states (pending, in_progress, completed), and requirements for marking tasks complete only when fully accomplished.

##### 6.1.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for multi-step coding sessions with imperative subjects and descriptions, tracking progress and demonstrating thoroughness for complex or user-provided tasks.

### 6.2 Code Quality, Safety & Reversibility

Pragmatic coding practices, scope discipline, security boundaries, safety gates for destructive operations, and autonomous agent threat models.

#### 6.2.1 Code Quality & Task Execution Principles

Establishes pragmatic coding practices that prioritize focused execution, security, and maintainability. Emphasizes completing requested work without scope creep, avoiding premature abstractions and unnecessary error handling, and maintaining security boundaries against injection and OWASP vulnerabilities. Directs reading code before modification and trusting framework guarantees at system boundaries.

##### 6.2.1.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Instructs Claude to interpret user requests in the context of software engineering tasks like bug fixes, refactoring, and code modifications, applying instructions directly to the codebase rather than providing generic answers.

##### 6.2.1.2 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Directs deferring to user judgment on task scope and enabling completion of ambitious tasks that would otherwise be too complex or lengthy.

##### 6.2.1.3 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs preferring to edit existing files over creating new ones to prevent file bloat and build on existing work.

##### 6.2.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Directs deleting unused code completely rather than adding compatibility shims, renamed variables, or removal comments.

##### 6.2.1.5 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directs avoiding helpers, utilities, and abstractions for one-time operations or hypothetical requirements, keeping complexity matched to actual task needs.

##### 6.2.1.6 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Directs avoiding time estimates or predictions for task duration, focusing on what needs to be done instead.

##### 6.2.1.7 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directs staying focused on requested work without adding features, refactoring, or improvements beyond scope. Limits comments and annotations to self-evident logic.

##### 6.2.1.8 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs avoiding error handling for impossible scenarios and validating only at system boundaries (user input, external APIs). Trusts internal code and framework guarantees.

##### 6.2.1.9 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Directs reading and understanding existing code before proposing or making modifications.

##### 6.2.1.10 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Directs avoiding security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks. Prioritizes writing safe, secure, and correct code.

##### 6.2.1.11 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Brief directive to inform users of help and feedback channels when requested.

#### 6.2.2 Safety, Caution & Reversibility

Implements multi-layered safeguards for autonomous and manual code execution. Requires confirmation before destructive or hard-to-reverse operations while permitting local reversible changes freely. Autonomous agents operate under a security monitor that blocks high-risk actions like credential leakage, production deployment, and git destructive operations while allowing test artifacts and declared dependencies. Distinguishes authorized security testing from malicious activity.

##### 6.2.2.1 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a cautious approach to irreversible or high-impact actions like deleting files, force-pushing, or sending messages. Claude should confirm with the user before executing destructive operations, hard-to-reverse changes, or actions affecting shared systems, while freely taking local reversible actions.

##### 6.2.2.2 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing destructive techniques, DoS attacks, and detection evasion for malicious purposes. Requires clear authorization context for dual-use security tools.

##### 6.2.2.3 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Instructs Claude to act as a security monitor evaluating autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage. Defines threat model, default allow policy, user intent rules with high authorization bar and low boundary bar, and evaluation rules for composite actions, file execution, code commits, delayed effects, sub-agent delegation, and classifier bypass attempts.

##### 6.2.2.4 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, block rules, and allow exceptions governing which tool actions autonomous agents may perform. Specifies 30+ block conditions covering git destructive operations, code from external sources, cloud storage deletion, production deployment, logging tampering, permission grants, credential leakage, data exfiltration, and unauthorized persistence. Provides mandatory allow exceptions for test artifacts, local operations, read-only operations, declared dependencies, and memory directory writes.

##### 6.2.2.5 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt for analyzing code changes with focus on exploitable vulnerabilities. Performs three-phase analysis: repository context research, comparative analysis against existing patterns, and vulnerability assessment. Examines input validation, authentication, cryptography, injection, and data exposure categories with high confidence threshold (>80%) to minimize false positives. Outputs findings in markdown with severity, category, exploit scenario, and fix recommendations.

### 6.3 Output Formatting & Communication

Response style conventions, code reference formatting, conciseness standards, and structured formatting for agent threads.

#### 6.3.1 Output Style & Communication Guidelines

Establishes consistent communication patterns for Claude's responses, including code reference formatting with source locations, concise and direct output prioritizing answers over reasoning, and structured formatting conventions for agent threads with absolute paths and code snippets.

##### 6.3.1.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number format when referencing code to enable easy navigation to source locations.

##### 6.3.1.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 6.3.1.3 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler, and focusing text on decisions, milestones, and blockers.

##### 6.3.1.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering working directory reset between bash calls, use of absolute file paths, response formatting with relevant paths and code snippets, avoidance of emojis, and punctuation conventions for tool calls.

#### 6.3.2 Output Configuration & Resource Integration

Manages output formatting directives and MCP resource availability states, with security guardrails for malware analysis that prevent code augmentation.

##### 6.3.2.1 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

##### 6.3.2.2 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource has no content available.

##### 6.3.2.3 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

##### 6.3.2.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but strictly prohibits improving or augmenting malicious code.

### 6.4 Progress, Diagnostics & Operational Modes

Token and budget monitoring, diagnostic alerts, autonomous execution modes, learning/educational modes, and session debugging.

#### 6.4.1 Progress & Resource Monitoring

Tracks task progress, token consumption, and budget expenditure while alerting Claude to newly detected diagnostics, enabling informed decisions about resource allocation and code quality.

##### 6.4.1.1 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Reminds Claude to use task tracking tools to create and update tasks when appropriate, without disclosing the reminder to the user.

##### 6.4.1.2 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task tracking when relevant, without mentioning the reminder to the user.

##### 6.4.1.3 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 6.4.1.4 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including spent, total, and remaining amounts.

##### 6.4.1.5 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues with a summary of the problems.

#### 6.4.2 Autonomous & Auto Mode Execution

Enables continuous autonomous task execution with immediate action and minimal interruptions while maintaining safety guardrails against destructive operations and data exfiltration, allowing course corrections from user feedback.

##### 6.4.2.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Directs continuous autonomous execution with immediate action, minimal interruptions, and preference for doing over planning. Includes guardrails against destructive actions and data exfiltration while allowing course corrections from user feedback.

#### 6.4.3 Learning & Educational Modes

Balances task completion with collaborative education by requesting human input on design decisions, providing implementation insights, and using structured markers to identify learning opportunities throughout the development process.

##### 6.4.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Defines collaborative learning mode where Claude balances task completion with education by requesting human contributions on design decisions and key algorithms, using TODO(human) markers and structured Learn by Doing requests.

##### 6.4.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code writing in learning mode, highlighting implementation choices and codebase-specific patterns.

#### 6.4.4 Debugging & Diagnostics

Identifies and resolves session issues through log analysis and runtime monitoring, surfacing performance bottlenecks and error conditions affecting agent execution.

##### 6.4.4.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting fixes based on log analysis.

##### 6.4.4.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnostic tool for investigating frozen or slow Claude Code sessions by checking process state, CPU usage, memory, and child processes, then reporting findings to Slack.

### 6.5 IDE Context, Hooks & Event Handling

File state awareness in IDEs, hook execution reporting, and condition-based agent completion evaluation.

#### 6.5.1 File & IDE Context Awareness

Notifies Claude of file state changes and IDE interactions—including empty files, external modifications, truncation, selection ranges, and offset boundary violations—enabling context-aware responses to user actions and file system events.

##### 6.5.1.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude when a file exists but contains no content.

##### 6.5.1.2 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Alerts Claude that a file was externally modified by the user or linter and provides the relevant changes with line numbers for context.

##### 6.5.1.3 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 6.5.1.4 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude when a file read offset exceeds the file's actual length.

##### 6.5.1.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Informs Claude that a large file was truncated to a maximum line count and instructs it to use the read tool for additional content if needed.

##### 6.5.1.6 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific lines selected by the user in the IDE with their content, noting possible relevance to the current task.

##### 6.5.1.7 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before conversation summarization but is too large to include, directing Claude to use the Read tool if needed.

#### 6.5.2 Hook Execution & Event Reporting

Reports outcomes and messages from external hook commands, including success confirmations, blocking errors, and continuation signals, allowing Claude to respond appropriately to asynchronous integrations.

##### 6.5.2.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context information from a hook to Claude.

##### 6.5.2.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command to Claude.

##### 6.5.2.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix text for hook stopped continuation messages.

##### 6.5.2.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Informs Claude that a hook has stopped continuation and provides the associated message.

##### 6.5.2.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful completion of a hook with its content to Claude.

### 6.6 CLAUDE.md & Project Configuration Setup

Onboarding and configuration management system that establishes project documentation, hooks, and Claude Code settings through guided setup flows and multi-step verification processes.

#### 6.6.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks via codebase exploration, user interviews, iterative proposals, and multi-phase artifact generation.

#### 6.6.2 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json) with guidance on when hooks are needed, merging existing settings, and distinguishing config tool vs direct edit.

#### 6.6.3 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks for Claude Code, including dedup checks, command construction, pipe-testing, JSON validation, and proof of execution.

#### 6.6.4 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Documents the hooks system for Claude Code, enabling shell commands, LLM prompts, and agent workflows to run at lifecycle events like tool use, compaction, and session start. Hooks can block actions, modify inputs, inject context, and control output visibility.

---

## 7. Claude API & SDK Reference

Comprehensive API documentation and SDK guides for building with Claude across multiple languages, covering streaming, tool use, caching, batching, and agent frameworks.

### 7.1 Language-Specific API Implementations

SDK patterns for Python, TypeScript, and other languages covering initialization, vision, streaming, tool use, thinking modes, and prompt caching.

#### 7.1.1 Claude API Reference — Python & TypeScript

SDK implementations for Python and TypeScript covering core API patterns: initialization, vision input, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization through token counting and model selection.

##### 7.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, system prompts, vision (base64 and URL images), prompt caching with automatic and manual control, extended thinking (adaptive recommended), error handling with typed exceptions, multi-turn conversations, compaction for long conversations, stop reasons, and cost optimization strategies including token counting and model selection.

##### 7.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, system prompts, vision (URL and base64 images), prompt caching with automatic and manual control, extended thinking (adaptive recommended), error handling with typed exception classes, multi-turn conversations, compaction for long conversations, stop reasons, and cost optimization strategies.

#### 7.1.2 Claude API Reference — Other Languages

SDK and raw HTTP implementations across C#, cURL, Go, Java, PHP, and Ruby. Each covers initialization, streaming, tool use (with language-specific runners or manual loops), thinking modes, prompt caching, and structured outputs, with emphasis on language-native patterns and type handling.

##### 7.1.2.1 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic message requests, streaming with TryPick methods, adaptive thinking with signature preservation, tool use with manual schema, context editing/compaction, effort parameter, prompt caching, token counting, structured output, PDF/document input, server-side tools, and Files API. Emphasizes union type handling and beta namespace distinctions.

##### 7.1.2.2 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw API reference for Claude API for use with cURL or raw HTTP. Covers basic message requests with jq parsing, streaming via Server-Sent Events, tool use loops, prompt caching with TTL, extended thinking (adaptive and deprecated budget_tokens), and required headers. Emphasizes jq for JSON parsing instead of regex.

##### 7.1.2.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic message requests, streaming with event accumulation, tool use via BetaToolRunner (automatic schema generation from structs) and manual loops, thinking with adaptive and deprecated modes, prompt caching, server-side tools, PDF/document input, Files API, and context editing/compaction. Emphasizes union type handling and struct tag patterns.

##### 7.1.2.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic message requests, streaming, adaptive thinking with signature preservation, tool use via BetaToolRunner (annotated classes) and manual loops, memory tool handler, effort parameter, prompt caching, token counting, structured output with class-based helpers, PDF/document input, server-side tools, Files API, and beta namespace distinctions.

##### 7.1.2.5 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization (standard, Bedrock, Vertex AI, Foundry), basic message requests, streaming, tool use via BetaRunnableTool runner and manual loops, extended thinking with signature preservation, prompt caching, structured outputs via StructuredOutputModel, beta features, and server-side tools. Emphasizes camelCase key naming and beta namespace usage.

##### 7.1.2.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic message requests, streaming via stream.text, tool use via BetaToolRunner (annotated classes) and manual loops, and prompt caching with TTL support. Emphasizes symbol-based type checking and optional method access patterns.

#### 7.1.3 Tool Use API Reference

API specifications for defining and executing tools across Python and TypeScript, including tool runners, manual agentic loops, MCP tool conversion, code execution, and structured outputs with language-specific schema systems.

##### 7.1.3.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), and structured outputs.

##### 7.1.3.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner with @beta_tool decorator, manual agentic loops, MCP tool conversion, code execution, memory tool, and structured outputs with Pydantic.

##### 7.1.3.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual loops with streaming, server-side tools, code execution, memory tool, and structured outputs.

#### 7.1.4 Streaming API Reference

Real-time response handling for Python and TypeScript, enabling progressive content delivery with event-based processing of text, thinking, and tool-use streams.

##### 7.1.4.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content types, progress tracking, and error handling with stream events.

##### 7.1.4.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, content type handling, tool runner integration, event types, and best practices for web UIs and agentic loops.

### 7.2 Agent SDK & Advanced Features

Full agent-building guides with MCP integration, permission systems, session management, files API, batch processing, and prompt caching architecture.

#### 7.2.1 Agent SDK Reference & Patterns

Comprehensive guides for building agents with Python and TypeScript SDKs, covering installation, built-in tools, permission systems, MCP integration, hooks, session management, and practical patterns for custom tools, subagents, and error recovery.

##### 7.2.1.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Python Agent SDK reference covering installation, quick start, built-in tools (Read, Write, Edit, Bash, Glob, Grep, WebSearch, WebFetch, AskUserQuestion, Agent), primary interfaces (query and ClaudeSDKClient), permission system, MCP support, hooks, common options, message types, subagents, error handling, session history, and MCP server management. Includes best practices for tool specification and permission modes.

##### 7.2.1.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

TypeScript Agent SDK reference covering installation, quick start, built-in tools, permission system with dontAsk mode, MCP support, in-process MCP tools via tool() and createSdkMcpServer, hooks with agent identification, common options, subagents, message types including task-related system messages, session history with pagination, session mutations, MCP server management, and best practices.

##### 7.2.1.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns including basic agents, custom tools via MCP, hooks for tool lifecycle events, subagents, MCP server integration (Playwright, PostgreSQL), permission modes, error recovery, session resumption, session history retrieval, session mutations, and custom system prompts. Covers async patterns with anyio and ClaudeSDKClient for full control.

##### 7.2.1.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks for tool lifecycle events, subagents, MCP server integration (Playwright), session resumption, session history with pagination, session mutations (rename, tag, fork), and custom system prompts. Demonstrates async iteration patterns and message type handling.

#### 7.2.2 Files API & Batch Processing Reference

File management and asynchronous batch processing APIs for Python and TypeScript, supporting document uploads, citations, persistent storage, and cost-optimized bulk message processing.

##### 7.2.2.1 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages (PDF/text documents and images with optional citations), file management (list, retrieve metadata, delete, download), and end-to-end example. Files persist until deleted, support up to 500 MB per file and 100 GB per organization, and are billed as input tokens when used in messages.

##### 7.2.2.2 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload via toFile helper, usage in messages (PDF/text documents and images with optional citations), and file management (list, delete, download). Files persist until deleted with 500 MB per file and 100 GB per organization limits.

##### 7.2.2.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, polling, result retrieval, and container reuse for asynchronous processing at 50% cost reduction.

#### 7.2.3 Prompt Caching & Cost Optimization

Strategic design patterns for caching prompt prefixes to reduce costs and latency, covering cache invalidation, breakpoint placement, and architectural approaches for multi-turn and shared-context scenarios.

##### 7.2.3.1 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Design patterns for effective prompt caching, covering prefix-match invariants, breakpoint placement, silent invalidators, and architectural guidance for multi-turn conversations and shared prefixes.

### 7.3 Claude API Navigation & Model Catalog

Central reference for Claude API development, providing routing guides for language-specific implementation, a current model catalog with capabilities and pricing, live documentation sources, and comprehensive error handling reference for API interactions.

#### 7.3.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, and compaction/caching quick references.

#### 7.3.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API reference documentation with quick task routing to relevant sections for streaming, caching, tool use, batches, and error handling.

#### 7.3.3 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact model IDs, aliases, context windows, and pricing. Includes programmatic model discovery via Models API for live capability data (context window, max output tokens, feature support). Lists current models (Opus 4.6, Sonnet 4.6, Haiku 4.5), legacy active models, deprecated models, and retired models with retirement dates.

#### 7.3.4 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API documentation, models, features, tools, and Agent SDK references from official sources when cached content may be outdated.

#### 7.3.5 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400, 401, 403, 404, 429, 500, 529) with causes, fixes, and SDK exception handling patterns for Python and TypeScript.
