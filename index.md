# Claude Code System Prompts Index

Operational and architectural guidance for building, deploying, and interacting with Claude as an autonomous coding agent — covering everything from low-level execution primitives to high-level application development so teams can reliably integrate Claude into real software workflows.

## Table of Contents

1. [Shell Execution & Command Environment](#1-shell-execution-command-environment)
   1. [Bash Fundamentals & Tool Delegation](#11-bash-fundamentals-tool-delegation)
      1. [Bash Execution Fundamentals & Tool Integration](#111-bash-execution-fundamentals-tool-integration)
         1. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
         2. [Bash (maintain cwd) [Tool Description]](#1112-bash-maintain-cwd-tool-description)
         3. [Bash (no newlines) [Tool Description]](#1113-bash-no-newlines-tool-description)
         4. [Bash (quote file paths) [Tool Description]](#1114-bash-quote-file-paths-tool-description)
         5. [Bash (parallel commands) [Tool Description]](#1115-bash-parallel-commands-tool-description)
         6. [Bash (sequential commands) [Tool Description]](#1116-bash-sequential-commands-tool-description)
         7. [Bash (semicolon usage) [Tool Description]](#1117-bash-semicolon-usage-tool-description)
         8. [Bash (working directory) [Tool Description]](#1118-bash-working-directory-tool-description)
         9. [Bash (timeout) [Tool Description]](#1119-bash-timeout-tool-description)
         10. [Bash (verify parent directory) [Tool Description]](#11110-bash-verify-parent-directory-tool-description)
         11. [Bash (built-in tools note) [Tool Description]](#11111-bash-built-in-tools-note-tool-description)
         12. [Bash (prefer dedicated tools) [Tool Description]](#11112-bash-prefer-dedicated-tools-tool-description)
         13. [Bash (alternative — communication) [Tool Description]](#11113-bash-alternative-—-communication-tool-description)
         14. [Bash (alternative — content search) [Tool Description]](#11114-bash-alternative-—-content-search-tool-description)
         15. [Bash (alternative — edit files) [Tool Description]](#11115-bash-alternative-—-edit-files-tool-description)
         16. [Bash (alternative — file search) [Tool Description]](#11116-bash-alternative-—-file-search-tool-description)
         17. [Bash (alternative — read files) [Tool Description]](#11117-bash-alternative-—-read-files-tool-description)
         18. [Bash (alternative — write files) [Tool Description]](#11118-bash-alternative-—-write-files-tool-description)
      2. [Tool Selection & Execution Policy](#112-tool-selection-execution-policy)
         1. [Tool usage (edit files) [System Prompt]](#1121-tool-usage-edit-files-system-prompt)
         2. [Tool usage (read files) [System Prompt]](#1122-tool-usage-read-files-system-prompt)
         3. [Tool usage (reserve Bash) [System Prompt]](#1123-tool-usage-reserve-bash-system-prompt)
         4. [Tool usage (search content) [System Prompt]](#1124-tool-usage-search-content-system-prompt)
         5. [Tool usage (search files) [System Prompt]](#1125-tool-usage-search-files-system-prompt)
         6. [Tool usage (create files) [System Prompt]](#1126-tool-usage-create-files-system-prompt)
         7. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#1127-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         8. [Tool execution denied (System Prompt)](#1128-tool-execution-denied-system-prompt)
   2. [Background Task Monitoring & Sleep Management](#12-background-task-monitoring-sleep-management)
      1. [Bash (sleep — keep short) [Tool Description]](#121-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#122-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — run immediately) [Tool Description]](#123-bash-sleep-—-run-immediately-tool-description)
      4. [Bash (sleep — use check commands) [Tool Description]](#124-bash-sleep-—-use-check-commands-tool-description)
      5. [Background monitor (streaming events) [Tool Description]](#125-background-monitor-streaming-events-tool-description)
      6. [One of six rules for using sleep command (System Prompt)](#126-one-of-six-rules-for-using-sleep-command-system-prompt)
   3. [Sandbox Security & Access Control](#13-sandbox-security-access-control)
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
   4. [PowerShell & Windows Scripting](#14-powershell-windows-scripting)
      1. [PowerShell (Tool Description)](#141-powershell-tool-description)
      2. [PowerShell edition for 5.1 (System Prompt)](#142-powershell-edition-for-51-system-prompt)
      3. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#143-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
2. [File Operations, IDE Integration & System Hooks](#2-file-operations-ide-integration-system-hooks)
   1. [File Access & Manipulation Tools](#21-file-access-manipulation-tools)
      1. [File Operation Tools](#211-file-operation-tools)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Edit (Tool Description)](#2113-edit-tool-description)
         4. [Grep (Tool Description)](#2114-grep-tool-description)
         5. [LSP (Tool Description)](#2115-lsp-tool-description)
         6. [NotebookEdit (Tool Description)](#2116-notebookedit-tool-description)
      2. [File State & Edge Case Reminders](#212-file-state-edge-case-reminders)
         1. [File exists but empty (System Reminder)](#2121-file-exists-but-empty-system-reminder)
         2. [File truncated (System Reminder)](#2122-file-truncated-system-reminder)
         3. [File shorter than offset (System Reminder)](#2123-file-shorter-than-offset-system-reminder)
   2. [IDE Integration & Code Context Awareness](#22-ide-integration-code-context-awareness)
      1. [File opened in IDE (System Reminder)](#221-file-opened-in-ide-system-reminder)
      2. [Lines selected in IDE (System Reminder)](#222-lines-selected-in-ide-system-reminder)
      3. [File modified by user or linter (System Reminder)](#223-file-modified-by-user-or-linter-system-reminder)
      4. [New diagnostics detected (System Reminder)](#224-new-diagnostics-detected-system-reminder)
   3. [Hooks System](#23-hooks-system)
      1. [Hooks Configuration (System Prompt)](#231-hooks-configuration-system-prompt)
      2. [Hook additional context (System Reminder)](#232-hook-additional-context-system-reminder)
      3. [Hook blocking error (System Reminder)](#233-hook-blocking-error-system-reminder)
      4. [Hook stopped continuation (System Reminder)](#234-hook-stopped-continuation-system-reminder)
      5. [Hook stopped continuation prefix (System Reminder)](#235-hook-stopped-continuation-prefix-system-reminder)
      6. [Hook success (System Reminder)](#236-hook-success-system-reminder)
      7. [Update Claude Code Config (Skill)](#237-update-claude-code-config-skill)
      8. [update-config (7-step verification flow) [Skill]](#238-update-config-7-step-verification-flow-skill)
   4. [MCP Integration & Tool Discovery](#24-mcp-integration-tool-discovery)
      1. [MCP resource no content (System Reminder)](#241-mcp-resource-no-content-system-reminder)
      2. [MCP resource no displayable content (System Reminder)](#242-mcp-resource-no-displayable-content-system-reminder)
      3. [MCP Tool Result Truncation (System Prompt)](#243-mcp-tool-result-truncation-system-prompt)
      4. [ToolSearch (second part) [Tool Description]](#244-toolsearch-second-part-tool-description)
   5. [Configuration & Runtime Control](#25-configuration-runtime-control)
      1. [Config (Tool Description)](#251-config-tool-description)
      2. [Minimal mode (System Prompt)](#252-minimal-mode-system-prompt)
      3. [Scratchpad directory (System Prompt)](#253-scratchpad-directory-system-prompt)
   6. [Debugging & Diagnostics](#26-debugging-diagnostics)
      1. [Debugging (Skill)](#261-debugging-skill)
      2. [/stuck slash command (Skill)](#262-stuck-slash-command-skill)
      3. [Bash command description writer (Agent Prompt)](#263-bash-command-description-writer-agent-prompt)
3. [Agent Orchestration & Autonomous Execution](#3-agent-orchestration-autonomous-execution)
   1. [Multi-Agent Coordination](#31-multi-agent-coordination)
      1. [Multi-Agent Teams & Swarm Coordination](#311-multi-agent-teams-swarm-coordination)
         1. [TeammateTool (Tool Description)](#3111-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#3112-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#3113-sendmessagetool-tool-description)
         4. [TaskList (teammate workflow) [Tool Description]](#3114-tasklist-teammate-workflow-tool-description)
         5. [Team Coordination (System Reminder)](#3115-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#3116-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#3117-teammate-communication-system-prompt)
         8. [How to use the SendUserMessage tool (System Prompt)](#3118-how-to-use-the-sendusermessage-tool-system-prompt)
         9. [SendMessageTool (non-agent-teams) [Tool Description]](#3119-sendmessagetool-non-agent-teams-tool-description)
      2. [Subagent Spawning & Delegation](#312-subagent-spawning-delegation)
         1. [Agent (usage notes) [Tool Description]](#3121-agent-usage-notes-tool-description)
         2. [Tool usage (subagent guidance) [System Prompt]](#3122-tool-usage-subagent-guidance-system-prompt)
         3. [Writing subagent prompts (System Prompt)](#3123-writing-subagent-prompts-system-prompt)
         4. [Subagent delegation examples (System Prompt)](#3124-subagent-delegation-examples-system-prompt)
         5. [Subagent prompt-writing examples (System Prompt)](#3125-subagent-prompt-writing-examples-system-prompt)
         6. [Fork usage guidelines (System Prompt)](#3126-fork-usage-guidelines-system-prompt)
         7. [Worker fork (Agent Prompt)](#3127-worker-fork-agent-prompt)
         8. [General purpose (Agent Prompt)](#3128-general-purpose-agent-prompt)
         9. [Explore (Agent Prompt)](#3129-explore-agent-prompt)
   2. [Planning & Implementation Workflow](#32-planning-implementation-workflow)
      1. [Planning Mode & Implementation Workflow](#321-planning-mode-implementation-workflow)
         1. [EnterPlanMode (Tool Description)](#3211-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3212-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#3213-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#3214-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#3215-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#3216-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#3217-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#3218-plan-file-reference-system-reminder)
         9. [Ultraplan mode (System Reminder)](#3219-ultraplan-mode-system-reminder)
         10. [Verify plan reminder (System Reminder)](#32110-verify-plan-reminder-system-reminder)
         11. [Phase four of plan mode (System Prompt)](#32111-phase-four-of-plan-mode-system-prompt)
         12. [Remote plan mode (ultraplan) [System Prompt]](#32112-remote-plan-mode-ultraplan-system-prompt)
         13. [Remote planning session (System Prompt)](#32113-remote-planning-session-system-prompt)
         14. [Plan mode (enhanced) [Agent Prompt]](#32114-plan-mode-enhanced-agent-prompt)
      2. [Task & Todo Management](#322-task-todo-management)
         1. [TodoWrite (Tool Description)](#3221-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#3222-taskcreate-tool-description)
         3. [Tool usage (task management) [System Prompt]](#3223-tool-usage-task-management-system-prompt)
         4. [Task tools reminder (System Reminder)](#3224-task-tools-reminder-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#3225-todowrite-reminder-system-reminder)
   3. [Batch Processing & Parallel Orchestration](#33-batch-processing-parallel-orchestration)
      1. [/batch slash command (Agent Prompt)](#331-batch-slash-command-agent-prompt)
      2. [Worker instructions (System Prompt)](#332-worker-instructions-system-prompt)
   4. [Auto Mode & Autonomous Execution](#34-auto-mode-autonomous-execution)
      1. [Auto mode (System Prompt)](#341-auto-mode-system-prompt)
      2. [Auto mode rule reviewer (Agent Prompt)](#342-auto-mode-rule-reviewer-agent-prompt)
   5. [Agent Design & Invocation](#35-agent-design-invocation)
      1. [Agent Design & Architecture](#351-agent-design-architecture)
         1. [Agent creation architect (Agent Prompt)](#3511-agent-creation-architect-agent-prompt)
         2. [Agent Design Patterns (Skill)](#3512-agent-design-patterns-skill)
         3. [Advisor tool instructions (System Prompt)](#3513-advisor-tool-instructions-system-prompt)
      2. [Agent Invocation & Terminal Status Display](#352-agent-invocation-terminal-status-display)
         1. [Status line setup (Agent Prompt)](#3521-status-line-setup-agent-prompt)
         2. [Agent mention (System Reminder)](#3522-agent-mention-system-reminder)
4. [Memory, Sessions & Context Management](#4-memory-sessions-context-management)
   1. [Memory Management & Persistence](#41-memory-management-persistence)
      1. [Memory description of user details (System Prompt)](#411-memory-description-of-user-details-system-prompt)
      2. [Memory description of user feedback (System Prompt)](#412-memory-description-of-user-feedback-system-prompt)
      3. [Memory description of user feedback (with explicit save) [System Prompt]](#413-memory-description-of-user-feedback-with-explicit-save-system-prompt)
      4. [Memory staleness verification (System Prompt)](#414-memory-staleness-verification-system-prompt)
      5. [Description part of memory instructions (System Prompt)](#415-description-part-of-memory-instructions-system-prompt)
      6. [Agent memory instructions (System Prompt)](#416-agent-memory-instructions-system-prompt)
      7. [Dream team memory handling (System Prompt)](#417-dream-team-memory-handling-system-prompt)
      8. [Memory file contents (System Reminder)](#418-memory-file-contents-system-reminder)
      9. [Nested memory contents (System Reminder)](#419-nested-memory-contents-system-reminder)
      10. [Dream memory consolidation (Agent Prompt)](#4110-dream-memory-consolidation-agent-prompt)
      11. [Dream memory pruning (Agent Prompt)](#4111-dream-memory-pruning-agent-prompt)
      12. [Memory synthesis (Agent Prompt)](#4112-memory-synthesis-agent-prompt)
      13. [Determine which memory files to attach (Agent Prompt)](#4113-determine-which-memory-files-to-attach-agent-prompt)
      14. [/dream nightly schedule (Skill)](#4114-dream-nightly-schedule-skill)
      15. [Session memory template (Data)](#4115-session-memory-template-data)
      16. [Session memory update instructions (Agent Prompt)](#4116-session-memory-update-instructions-agent-prompt)
   2. [Conversation Summarization & Session Continuity](#42-conversation-summarization-session-continuity)
      1. [Conversation Summarization & Context Compaction](#421-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#4211-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#4212-recent-message-summarization-agent-prompt)
         3. [Partial compaction instructions (System Prompt)](#4213-partial-compaction-instructions-system-prompt)
         4. [Context compaction summary (System Prompt)](#4214-context-compaction-summary-system-prompt)
         5. [Compact file reference (System Reminder)](#4215-compact-file-reference-system-reminder)
      2. [Session & State Management](#422-session-state-management)
         1. [Session continuation (System Reminder)](#4221-session-continuation-system-reminder)
         2. [Token usage (System Reminder)](#4222-token-usage-system-reminder)
         3. [USD budget (System Reminder)](#4223-usd-budget-system-reminder)
         4. [Session search (Agent Prompt)](#4224-session-search-agent-prompt)
         5. [Coding session title generator (Agent Prompt)](#4225-coding-session-title-generator-agent-prompt)
         6. [Session title and branch generation (Agent Prompt)](#4226-session-title-and-branch-generation-agent-prompt)
   3. [Usage Analytics & Intent Prediction](#43-usage-analytics-intent-prediction)
      1. [Usage Insights & Analytics](#431-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#4311-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#4312-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#4313-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#4314-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#4315-insights-suggestions-system-prompt)
      2. [User Intent Prediction](#432-user-intent-prediction)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#4321-prompt-suggestion-generator-v2-agent-prompt)
5. [Code Quality, Security & Review](#5-code-quality-security-review)
   1. [Engineering Discipline & Action Safety](#51-engineering-discipline-action-safety)
      1. [Code Quality & Engineering Discipline](#511-code-quality-engineering-discipline)
         1. [Doing tasks (read before modifying) [System Prompt]](#5111-doing-tasks-read-before-modifying-system-prompt)
         2. [Doing tasks (no premature abstractions) [System Prompt]](#5112-doing-tasks-no-premature-abstractions-system-prompt)
         3. [Doing tasks (minimize file creation) [System Prompt]](#5113-doing-tasks-minimize-file-creation-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#5114-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no unnecessary additions) [System Prompt]](#5115-doing-tasks-no-unnecessary-additions-system-prompt)
         6. [Doing tasks (no unnecessary error handling) [System Prompt]](#5116-doing-tasks-no-unnecessary-error-handling-system-prompt)
         7. [Doing tasks (no time estimates) [System Prompt]](#5117-doing-tasks-no-time-estimates-system-prompt)
         8. [Doing tasks (ambitious tasks) [System Prompt]](#5118-doing-tasks-ambitious-tasks-system-prompt)
         9. [Doing tasks (software engineering focus) [System Prompt]](#5119-doing-tasks-software-engineering-focus-system-prompt)
         10. [Doing tasks (security) [System Prompt]](#51110-doing-tasks-security-system-prompt)
         11. [Exploratory questions — analyze before implementing (System Prompt)](#51111-exploratory-questions-—-analyze-before-implementing-system-prompt)
      2. [Action Safety & Reversibility](#512-action-safety-reversibility)
         1. [Executing actions with care (System Prompt)](#5121-executing-actions-with-care-system-prompt)
         2. [Doing tasks (help and feedback) [System Prompt]](#5122-doing-tasks-help-and-feedback-system-prompt)
   2. [Security Review & Monitoring](#52-security-review-monitoring)
      1. [/security-review slash command (Agent Prompt)](#521-security-review-slash-command-agent-prompt)
      2. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#522-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      3. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#523-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      4. [Malware analysis after Read tool call (System Reminder)](#524-malware-analysis-after-read-tool-call-system-reminder)
      5. [Censoring assistance with malicious activities (System Prompt)](#525-censoring-assistance-with-malicious-activities-system-prompt)
      6. [Bash command prefix detection (Agent Prompt)](#526-bash-command-prefix-detection-agent-prompt)
   3. [Code Review & Verification](#53-code-review-verification)
      1. [/review-pr slash command (Agent Prompt)](#531-review-pr-slash-command-agent-prompt)
      2. [Verification specialist (Agent Prompt)](#532-verification-specialist-agent-prompt)
      3. [Verify skill (Skill)](#533-verify-skill-skill)
      4. [Verify CLI changes (example for Verify skill) [Skill]](#534-verify-cli-changes-example-for-verify-skill-skill)
      5. [Verify server/API changes (example for Verify skill) [Skill]](#535-verify-serverapi-changes-example-for-verify-skill-skill)
      6. [Create verifier skills (Skill)](#536-create-verifier-skills-skill)
      7. [Simplify (Skill)](#537-simplify-skill)
      8. [Hook condition evaluator (stop) [Agent Prompt]](#538-hook-condition-evaluator-stop-agent-prompt)
      9. [Agent Hook (Agent Prompt)](#539-agent-hook-agent-prompt)
   4. [Git Workflow & Version Control Operations](#54-git-workflow-version-control-operations)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#541-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#542-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#543-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#544-bash-git-—-prefer-new-commits-tool-description)
      5. [EnterWorktree (Tool Description)](#545-enterworktree-tool-description)
      6. [ExitWorktree (Tool Description)](#546-exitworktree-tool-description)
      7. [Quick git commit (Agent Prompt)](#547-quick-git-commit-agent-prompt)
      8. [Quick PR creation (Agent Prompt)](#548-quick-pr-creation-agent-prompt)
      9. [Git status (System Prompt)](#549-git-status-system-prompt)
6. [User Experience, Learning & Workflow Customization](#6-user-experience-learning-workflow-customization)
   1. [Communication Style & Output Formatting](#61-communication-style-output-formatting)
      1. [Communication style (System Prompt)](#611-communication-style-system-prompt)
      2. [Output efficiency (System Prompt)](#612-output-efficiency-system-prompt)
      3. [Tone and style (code references) [System Prompt]](#613-tone-and-style-code-references-system-prompt)
      4. [Tone and style (concise output — short) [System Prompt]](#614-tone-and-style-concise-output-—-short-system-prompt)
      5. [User-facing communication style (System Prompt)](#615-user-facing-communication-style-system-prompt)
      6. [Agent thread notes (System Prompt)](#616-agent-thread-notes-system-prompt)
      7. [Agent Summary Generation (System Prompt)](#617-agent-summary-generation-system-prompt)
      8. [User Interaction & Clarification Tools](#618-user-interaction-clarification-tools)
         1. [AskUserQuestion (Tool Description)](#6181-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#6182-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#6183-option-previewer-system-prompt)
         4. [/btw side question (System Reminder)](#6184-btw-side-question-system-reminder)
   2. [Learning & Teaching Modes](#62-learning-teaching-modes)
      1. [Learning mode (System Prompt)](#621-learning-mode-system-prompt)
      2. [Learning mode (insights) [System Prompt]](#622-learning-mode-insights-system-prompt)
      3. [request_teach_access (part of teach mode) [Tool Description]](#623-request_teach_access-part-of-teach-mode-tool-description)
   3. [Codebase Exploration & Project Onboarding](#63-codebase-exploration-project-onboarding)
      1. [Codebase Exploration & Search](#631-codebase-exploration-search)
         1. [Tool usage (delegate exploration) [System Prompt]](#6311-tool-usage-delegate-exploration-system-prompt)
         2. [Tool usage (direct search) [System Prompt]](#6312-tool-usage-direct-search-system-prompt)
         3. [CLAUDE.md creation (Agent Prompt)](#6313-claudemd-creation-agent-prompt)
      2. [Onboarding & Project Setup](#632-onboarding-project-setup)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#6321-init-claudemd-and-skill-setup-new-version-skill)
         2. [Team onboarding guide (Skill)](#6322-team-onboarding-guide-skill)
         3. [Managed Agents onboarding flow (Agent Prompt)](#6323-managed-agents-onboarding-flow-agent-prompt)
         4. [Onboarding guide generator (Agent Prompt)](#6324-onboarding-guide-generator-agent-prompt)
   4. [Skills, Slash Commands & Scheduling](#64-skills-slash-commands-scheduling)
      1. [Skills System & Slash Commands](#641-skills-system-slash-commands)
         1. [Skill (Tool Description)](#6411-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#6412-tool-usage-skill-invocation-system-prompt)
         3. [Invoked skills (System Reminder)](#6413-invoked-skills-system-reminder)
         4. [Output style active (System Reminder)](#6414-output-style-active-system-reminder)
         5. [Skillify Current Session (System Prompt)](#6415-skillify-current-session-system-prompt)
      2. [Scheduling & Cron Automation](#642-scheduling-cron-automation)
         1. [CronCreate (Tool Description)](#6421-croncreate-tool-description)
         2. [/loop slash command (Skill)](#6422-loop-slash-command-skill)
         3. [/schedule slash command (Agent Prompt)](#6423-schedule-slash-command-agent-prompt)
   5. [Web Search & Browser Automation](#65-web-search-browser-automation)
      1. [Web Search & Content Fetching](#651-web-search-content-fetching)
         1. [WebFetch (Tool Description)](#6511-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#6512-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#6513-webfetch-summarizer-agent-prompt)
      2. [Browser Automation & Computer Use](#652-browser-automation-computer-use)
         1. [Computer (Tool Description)](#6521-computer-tool-description)
         2. [Computer action (Tool Parameter)](#6522-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#6523-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#6524-chrome-browser-mcp-tools-system-prompt)
         5. [Computer Use MCP (Skill)](#6525-computer-use-mcp-skill)
7. [Claude API Documentation & Application Development](#7-claude-api-documentation-application-development)
   1. [Claude API Reference — Language SDKs](#71-claude-api-reference-—-language-sdks)
      1. [Claude API reference — Python (Data)](#711-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#712-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#713-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#714-claude-api-reference-—-java-data)
      5. [Claude API reference — C# (Data)](#715-claude-api-reference-—-c-data)
      6. [Claude API reference — Ruby (Data)](#716-claude-api-reference-—-ruby-data)
      7. [Claude API reference — PHP (Data)](#717-claude-api-reference-—-php-data)
      8. [Claude API reference — cURL (Data)](#718-claude-api-reference-—-curl-data)
   2. [Managed Agents & Tool Use API](#72-managed-agents-tool-use-api)
      1. [Managed Agents API Reference](#721-managed-agents-api-reference)
         1. [Managed Agents overview (Data)](#7211-managed-agents-overview-data)
         2. [Managed Agents core concepts (Data)](#7212-managed-agents-core-concepts-data)
         3. [Managed Agents environments and resources (Data)](#7213-managed-agents-environments-and-resources-data)
         4. [Managed Agents events and steering (Data)](#7214-managed-agents-events-and-steering-data)
         5. [Managed Agents tools and skills (Data)](#7215-managed-agents-tools-and-skills-data)
         6. [Managed Agents endpoint reference (Data)](#7216-managed-agents-endpoint-reference-data)
         7. [Managed Agents client patterns (Data)](#7217-managed-agents-client-patterns-data)
         8. [Managed Agents reference — Python (Data)](#7218-managed-agents-reference-—-python-data)
         9. [Managed Agents reference — TypeScript (Data)](#7219-managed-agents-reference-—-typescript-data)
         10. [Managed Agents reference — cURL (Data)](#72110-managed-agents-reference-—-curl-data)
      2. [Tool Use & Streaming API References](#722-tool-use-streaming-api-references)
         1. [Tool use concepts (Data)](#7221-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#7222-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#7223-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#7224-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#7225-streaming-reference-—-typescript-data)
   3. [File Handling, Batch & Model Reference](#73-file-handling-batch-model-reference)
      1. [File Handling & Batch Processing](#731-file-handling-batch-processing)
         1. [Files API reference — Python (Data)](#7311-files-api-reference-—-python-data)
         2. [Files API reference — TypeScript (Data)](#7312-files-api-reference-—-typescript-data)
         3. [Message Batches API reference — Python (Data)](#7313-message-batches-api-reference-—-python-data)
      2. [Model Information & API Fundamentals](#732-model-information-api-fundamentals)
         1. [Prompt Caching — Design & Optimization (Data)](#7321-prompt-caching-—-design-optimization-data)
         2. [Claude model catalog (Data)](#7322-claude-model-catalog-data)
         3. [HTTP error codes reference (Data)](#7323-http-error-codes-reference-data)
   4. [Application Building & GitHub Integration](#74-application-building-github-integration)
      1. [Application Development with Claude](#741-application-development-with-claude)
         1. [Build Claude API and SDK apps (Skill)](#7411-build-claude-api-and-sdk-apps-skill)
         2. [Building LLM-powered applications with Claude (Skill)](#7412-building-llm-powered-applications-with-claude-skill)
         3. [Build with Claude API (reference guide) [Skill]](#7413-build-with-claude-api-reference-guide-skill)
         4. [Live documentation sources (Data)](#7414-live-documentation-sources-data)
         5. [Claude guide agent (Agent Prompt)](#7415-claude-guide-agent-agent-prompt)
      2. [GitHub Integration & Automation](#742-github-integration-automation)
         1. [GitHub Actions workflow for @claude mentions (Data)](#7421-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#7422-github-app-installation-pr-description-data)

---

## 1. Shell Execution & Command Environment

Covers how Claude runs bash and PowerShell commands, manages working state, handles sandbox restrictions, and decides when to delegate to dedicated file tools instead of shell equivalents.

### 1.1 Bash Fundamentals & Tool Delegation

Core rules for bash command syntax, state persistence, path handling, error chaining, and when to prefer dedicated tools over shell commands.

#### 1.1.1 Bash Execution Fundamentals & Tool Integration

Bash executes shell commands with specific syntax and state management rules. Working directory persists across commands but shell state does not; use absolute paths to maintain context and quote file paths containing spaces. Chain dependent commands with && for error handling, run independent commands in parallel, and use semicolons only when earlier failures don't matter. Prefer dedicated tools (Read, Write, Glob, Grep, Edit) over equivalent bash commands for better user experience and permission clarity.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

##### 1.1.1.2 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to maintain current working directory by using absolute paths and avoiding cd unless explicitly requested by the user.

##### 1.1.1.3 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs not to use newlines to separate commands in bash scripts.

##### 1.1.1.4 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs to always quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.5 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to make multiple Bash tool calls in a single message when commands are independent and can run in parallel for optimal performance.

##### 1.1.1.6 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands using && in a single bash call when they must run sequentially.

##### 1.1.1.7 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially where earlier command failures don't matter.

##### 1.1.1.8 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between bash commands but shell state does not, with environment initialized from user profile.

##### 1.1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration for bash commands, allowing specification up to a maximum duration with a default timeout value.

##### 1.1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence using ls before creating new directories or files.

##### 1.1.1.11 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in dedicated tools provide better user experience and easier permission review than equivalent Bash commands.

##### 1.1.1.12 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns to avoid using Bash for find, grep, cat, and similar read-only commands unless explicitly instructed or verified that dedicated tools cannot accomplish the task.

##### 1.1.1.13 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly instead of using echo or printf.

##### 1.1.1.14 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs to use the Grep tool for content search instead of grep or rg commands.

##### 1.1.1.15 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs to use the Edit tool for file editing instead of sed or awk commands.

##### 1.1.1.16 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs to use the Glob tool for file search instead of find or ls commands.

##### 1.1.1.17 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs to use the Read tool for file reading instead of cat, head, or tail commands.

##### 1.1.1.18 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs to use the Write tool for file writing instead of echo or cat commands.

#### 1.1.2 Tool Selection & Execution Policy

Reserve Bash for system commands and terminal operations; delegate file operations to dedicated tools for better user experience and permission transparency. Use Read for file access, Write for creation, Edit for modifications, and Glob for file discovery instead of cat, echo, sed, and find. Call multiple independent tools in parallel while running dependent operations sequentially. Explain blockers when tool execution is denied rather than attempting malicious workarounds.

##### 1.1.2.1 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs Claude to use the Edit tool instead of sed or awk for file modifications.

##### 1.1.2.2 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool instead of cat, head, tail, or sed for file access.

##### 1.1.2.3 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

##### 1.1.2.4 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs Claude to use the Grep tool instead of grep or rg for searching file contents.

##### 1.1.2.5 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool instead of find or ls for file discovery.

##### 1.1.2.6 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use Write tool instead of cat heredoc or echo redirection for file creation.

##### 1.1.2.7 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to increase efficiency, while running dependent calls sequentially.

##### 1.1.2.8 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Permits reasonable workarounds for denied tool execution but prohibits malicious bypasses; instructs Claude to explain blockers to the user.

### 1.2 Background Task Monitoring & Sleep Management

Sleep durations should be minimal (1-5 seconds) to avoid blocking users; avoid sleeping between immediately-executable commands. Don't poll background tasks started with run_in_background—completion notifications arrive automatically. For external process monitoring, use check commands like gh run view instead of sleep-based polling. Background monitors can stream stdout events from long-running scripts as notifications when configured with proper line-buffering, error handling, and selective filtering.

#### 1.2.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.2.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with run_in_background, as completion notifications will be provided.

#### 1.2.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

#### 1.2.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like gh run view for polling external processes instead of sleeping first.

#### 1.2.5 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Describes how to start a background monitor that streams stdout events from long-running scripts as chat notifications. Emphasizes script quality practices like line-buffering, error handling, appropriate poll intervals, and selective filtering to avoid excessive output volume.

#### 1.2.6 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; requires diagnosing root cause instead.

### 1.3 Sandbox Security & Access Control

All bash commands run in sandbox mode by default; sandbox cannot be disabled by policy. When commands fail with access denied, network errors, or operation not permitted messages, explain the specific restriction and mention the /sandbox command for allowlist management. Use $TMPDIR for temporary files instead of /tmp. Never suggest adding sensitive paths (~/.ssh, credentials) to the allowlist, and treat each command independently—default to sandbox mode even after running with dangerouslyDisableSandbox enabled.

#### 1.3.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs to work with the user to adjust sandbox settings if a command fails due to sandbox restrictions.

#### 1.3.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs to default to running commands within the sandbox and only bypass when the user asks or evidence of sandbox restriction appears.

#### 1.3.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox-caused failures.

#### 1.3.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that identify sandbox-caused command failures.

#### 1.3.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox-caused failures.

#### 1.3.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies operation not permitted errors for file and network operations as evidence of sandbox-caused failures.

#### 1.3.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions in bash command execution.

#### 1.3.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and mention the /sandbox command for managing restrictions.

#### 1.3.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition where a command fails with evidence of sandbox restrictions, distinguishing sandbox-related failures from other causes like missing files or network issues.

#### 1.3.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode because the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.3.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.3.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.3.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands even after running one with dangerouslyDisableSandbox enabled.

#### 1.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provides a header for Claude's response when encountering evidence of sandbox-caused failures.

#### 1.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry a failed command with dangerouslyDisableSandbox set to true without asking the user first.

#### 1.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly, as TMPDIR is automatically configured for sandbox-writable access.

#### 1.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will trigger a user permission prompt.

### 1.4 PowerShell & Windows Scripting

PowerShell command execution with platform-specific constraints, version compatibility quirks, and performance optimization patterns. Addresses Windows shell scripting best practices and limitations relative to Unix-like environments.

#### 1.4.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with timeout support and persistent working directory. Emphasizes use of specialized tools for file operations and includes syntax guidance for cmdlets, variables, and native executables.

#### 1.4.2 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 limitations including unavailable pipeline operators, ternary operators, stderr redirection quirks, and encoding defaults.

#### 1.4.3 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Guidelines for avoiding unnecessary sleep commands in PowerShell scripts, preferring direct execution, background task notifications, and error handling over polling.

---

## 2. File Operations, IDE Integration & System Hooks

Filesystem access tools, IDE context awareness, lifecycle hooks, configuration management, and debugging utilities that form the operational infrastructure of Claude Code.

### 2.1 File Access & Manipulation Tools

Read, write, edit, search, and code-intelligence tools for filesystem operations, including multimodal file support and edge-case warnings.

#### 2.1.1 File Operation Tools

Comprehensive filesystem access layer supporting reading (with multimodal support for images, PDFs, and notebooks), writing, editing via string replacement, regex-based search, and code intelligence through Language Server Protocol. Includes specialized notebook cell editing for Jupyter workflows.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the filesystem with support for images, PDFs (with page ranges), Jupyter notebooks, and screenshots. Defaults to first N lines but can read full files.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the filesystem, overwriting existing files. Prefers Edit tool for modifications; avoid creating documentation unless explicitly requested.

##### 2.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with guidance on preserving indentation from Read tool output, preferring existing file edits over new files, and using replace_all for variable renaming across files.

##### 2.1.1.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting regex patterns, file filtering, and multiple output modes for content discovery across codebases.

##### 2.1.1.5 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides code intelligence via Language Server Protocol, enabling symbol navigation, references, hover information, and call hierarchy analysis across supported languages.

##### 2.1.1.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits or replaces Jupyter notebook cells, supporting insert and delete operations on individual cells within .ipynb files.

#### 2.1.2 File State & Edge Case Reminders

Alerts for boundary conditions and file state anomalies—empty files, truncation, offset mismatches—that prevent misinterpretation of incomplete or malformed file reads.

##### 2.1.2.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 2.1.2.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs to use Read tool for additional content.

##### 2.1.2.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that a file read offset exceeds the file's actual length and provides total line count.

### 2.2 IDE Integration & Code Context Awareness

Real-time notifications of user interactions with the IDE—file opens, selections, external modifications, and diagnostics—that provide immediate context about what the user is viewing or editing without explicit requests.

#### 2.2.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

#### 2.2.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Alerts Claude when a user selects specific lines in the IDE, providing file context and line range information.

#### 2.2.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by user or linter and provides the relevant changes with line numbers for awareness.

#### 2.2.4 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to new diagnostic issues detected in the IDE or codebase.

### 2.3 Hooks System

Lifecycle event automation framework that executes commands at specific points in Claude Code's workflow. Hooks are configured with event types and execution modes, report success or failure through structured messages, and can block continuation or inject additional context into the execution flow.

#### 2.3.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide to configuring hooks that run commands at specific lifecycle events in Claude Code, including event types, hook types (command, prompt, agent), input/output formats, and common patterns.

#### 2.3.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context content from a hook execution.

#### 2.3.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command with the command and error details.

#### 2.3.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook has stopped continuation with an associated message.

#### 2.3.5 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix string for hook stopped continuation messages.

#### 2.3.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook with its output content.

#### 2.3.7 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Modifies Claude Code configuration by reading existing settings files, merging new settings carefully, and updating hooks or permissions in settings.json.

#### 2.3.8 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks: dedup check, command construction, pipe-test, JSON write, syntax validation, live proof, and handoff to user.

### 2.4 MCP Integration & Tool Discovery

Model Context Protocol infrastructure for resource access and tool invocation. Handles resource availability signaling, manages truncated tool outputs through targeted queries and subagent delegation, and enables deferred tool discovery via schema fetching.

#### 2.4.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Notifies Claude that an MCP resource exists but contains no content.

#### 2.4.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it is not displayable in the current format.

#### 2.4.3 [MCP Tool Result Truncation (System Prompt)](system-prompts/system-prompt-mcp-tool-result-truncation.md)

Provides guidelines for handling long MCP tool outputs, recommending direct file queries for targeted lookups and subagents for analysis requiring full content processing.

#### 2.4.4 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by name or keyword search, returning complete JSONSchema definitions that enable tool invocation after matching.

### 2.5 Configuration & Runtime Control

Settings management and operational modes that control feature availability and execution context. Global and project-level configuration storage, minimal mode for stripped-down operation, and session-isolated temporary file handling.

#### 2.5.1 [Config (Tool Description)](system-prompts/tool-description-config.md)

Describes the Config tool for getting and setting Claude Code configuration settings stored globally in ~/.claude.json or per-project in settings.json, with examples for theme, editor mode, and model selection.

#### 2.5.2 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode operation that disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags.

#### 2.5.3 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

### 2.6 Debugging & Diagnostics

Tools and techniques for identifying and resolving Claude Code session failures, including error log analysis, process monitoring, and diagnostic reporting. Covers both interactive troubleshooting and automated performance detection.

#### 2.6.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Guides Claude through debugging a Claude Code session issue by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

#### 2.6.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, checking CPU/memory/state indicators, and posting diagnostic reports to Slack.

#### 2.6.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or obscure-flag commands.

---

## 3. Agent Orchestration & Autonomous Execution

Frameworks for spawning subagents, coordinating multi-agent teams, planning and approving work before implementation, and running autonomous task loops.

### 3.1 Multi-Agent Coordination

Team orchestration with parallel agent work, inter-agent messaging, task assignment, and graceful team cleanup.

#### 3.1.1 Multi-Agent Teams & Swarm Coordination

Team orchestration framework enabling parallel agent work through task assignment, inter-agent messaging, and coordinated workflows. Supports team creation, member management, message protocols with shutdown/approval responses, and graceful team cleanup.

##### 3.1.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Creates and manages teams of coordinated agents for parallel work on complex projects. Handles team creation, task assignment, teammate spawning, and idle state management with automatic message delivery.

##### 3.1.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completes, failing if active members remain. Clears team context from the current session.

##### 3.1.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages between agents in a team, with support for protocol responses including shutdown and plan approval workflows. Plain text output is not visible to other agents.

##### 3.1.1.4 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes how teammates discover and claim available work from shared task lists, preferring lowest ID tasks and coordinating through task ownership.

##### 3.1.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with a specific identity and role, providing team config and task list paths, and instructing it to communicate with teammates by name and report to the team lead.

##### 3.1.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before returning a final response to the user in non-interactive mode.

##### 3.1.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool for inter-agent communication rather than text responses.

##### 3.1.1.8 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to use SendUserMessage for all user-facing replies, with guidance on acknowledgments, checkpoints, and keeping messages concise and informative.

##### 3.1.1.9 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown-formatted messages to users with optional file attachments, using status labels to indicate whether the message is reactive or proactive.

#### 3.1.2 Subagent Spawning & Delegation

Delegation framework for spawning independent subagents to parallelize work and isolate context. Provides guidance on task briefing, prompt engineering, fork patterns for cache efficiency, and specialized agent roles (explorer, worker, general-purpose) for different execution patterns.

##### 3.1.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guide for the Task/Agent tool covering subagent spawning, background execution, resumption via messaging, worktree isolation, parallel launches, and context-specific constraints for subagents and teammates.

##### 3.1.2.2 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using subagents for parallelizing independent queries and protecting context, while avoiding redundant work duplication.

##### 3.1.2.3 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for delegating tasks to subagents: brief them with full context and rationale, avoid terse commands, and never delegate synthesis—include specific details like file paths and line numbers instead.

##### 3.1.2.4 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results with independent agent context.

##### 3.1.2.5 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates how to write self-contained, well-structured prompts when delegating tasks to subagents with clear goals and context.

##### 3.1.2.6 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Provides guidelines for forking subagents, including when to fork, rules against reading output mid-flight, and prohibitions on fabricating fork results.

##### 3.1.2.7 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

System prompt for a forked worker sub-agent that executes a single directive from the parent agent and reports back concisely without spawning further sub-agents.

##### 3.1.2.8 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose agent for researching complex questions, searching code, and executing multi-step tasks across codebases with concise reporting of findings to the caller.

##### 3.1.2.9 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file pattern searches, code keyword searches, and codebase questions using glob, grep, and read tools with configurable thoroughness levels.

### 3.2 Planning & Implementation Workflow

Structured planning modes that transition through exploration, design, and approval phases before any code is written.

#### 3.2.1 Planning Mode & Implementation Workflow

Structured planning framework that transitions Claude through exploration, design, and approval phases before implementation. Supports multiple planning modes (iterative, 5-phase, ultraplan) with read-only constraints during planning, plan file management, and verification checkpoints. Enables remote planning sessions with pull request workflows.

##### 3.2.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode for non-trivial implementation tasks, enabling codebase exploration and design of implementation approaches for user approval before coding, with guidance on when to use it for feature implementation, architectural decisions, and multi-file changes.

##### 3.2.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning phase and requests user approval of the implementation plan. Use only for code implementation tasks, not research or exploration phases.

##### 3.2.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow: initial understanding via parallel exploration agents, design via planning agents, review, phase four execution, and plan mode exit. Prohibits any edits or non-readonly operations except to the plan file.

##### 3.2.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative pair-planning where Claude explores code, updates the plan file incrementally, asks clarifying questions, and converges on a complete plan before exit. Only the plan file may be edited; all other operations are read-only.

##### 3.2.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents that prohibits edits and non-readonly operations while allowing plan file creation and user clarification questions.

##### 3.2.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after prior exit, instructing it to read the existing plan, evaluate relevance to the new request, and either continue or overwrite the plan accordingly.

##### 3.2.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and actions can now be taken, optionally referencing the plan file location.

##### 3.2.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 3.2.1.9 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Activates an advanced planning mode using parallel multi-agent exploration, synthesis, and critique to produce exceptionally detailed implementation plans, with conditional post-approval execution or teleportation to local terminal.

##### 3.2.1.10 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 3.2.1.11 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes the implementation plan to file with file paths, changes, function references, and verification command within a 40-line limit.

##### 3.2.1.12 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore codebase, produce diagram-rich plans via ExitPlanMode, and implement with pull requests upon approval or teleport back to local terminal.

##### 3.2.1.13 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Configures remote planning sessions to explore codebase, produce implementation plans via ExitPlanMode, and handle approval, rejection, or teleportation back to user's terminal.

##### 3.2.1.14 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans by exploring codebases, identifying patterns, and detailing step-by-step strategies with critical files and architectural trade-offs.

#### 3.2.2 Task & Todo Management

Task tracking system for breaking down complex work into manageable steps with state tracking (pending, in-progress, completed). Enables incremental progress management and work organization for multi-step coding sessions.

##### 3.2.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages task lists for coding sessions with state tracking (pending, in_progress, completed). Requires both imperative and active-form descriptions for each task.

##### 3.2.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for multi-step coding sessions, tracking progress and organizing complex work. Use for tasks requiring 3+ steps or explicit user requests.

##### 3.2.2.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite tool to break down work, track progress, and mark tasks complete incrementally rather than in batches.

##### 3.2.2.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant, without disclosing this reminder to the user.

##### 3.2.2.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently suggests using the TodoWrite tool for task tracking when relevant, without mentioning the reminder to the user.

### 3.3 Batch Processing & Parallel Orchestration

Coordinates large-scale codebase modifications by decomposing work into independent parallel units and spawning isolated worker agents. Manages scope analysis, task distribution, test execution, and automated PR creation with progress tracking across concurrent operations.

#### 3.3.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5-30 independent units, determining e2e test recipes, and spawning background worker agents with progress tracking.

#### 3.3.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines post-implementation workflow: simplify changes, run unit tests, execute end-to-end tests, commit and push with PR creation, and report final PR URL.

### 3.4 Auto Mode & Autonomous Execution

Autonomous task execution with continuous operation and minimal interruption, balanced by rule-based safety policies. Auto mode prioritizes action over planning while maintaining safeguards against destructive operations, with configurable classifier rules for allow/deny decisions.

#### 3.4.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate action, minimal interruptions, preference for doing over planning, and safeguards against destructive or unauthorized actions.

#### 3.4.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability across allow, soft_deny, and environment categories.

### 3.5 Agent Design & Invocation

Architectural patterns for engineering agents—persona design, system prompt construction, tool surface optimization—plus mechanisms for invoking specialized agents and displaying terminal status.

#### 3.5.1 Agent Design & Architecture

Frameworks for engineering high-performance AI agents through systematic design patterns and architectural guidance. Covers persona engineering, system prompt construction, tool surface optimization, context and caching strategies, and consultation mechanisms for decision validation.

##### 3.5.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of high-performance AI agent configurations by extracting user intent, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces JSON output with agent identifier, usage conditions, and complete operational manual.

##### 3.5.1.2 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Decision heuristics for building agents covering model parameters (adaptive thinking, effort), tool surface design (bash vs dedicated tools), anthropic-provided tools, programmatic tool calling, tool/instruction scaling, context management, and caching strategies.

##### 3.5.1.3 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the advisor tool to consult a stronger reviewer model before substantive work, when stuck, or before declaring a task complete.

#### 3.5.2 Agent Invocation & Terminal Status Display

Mechanisms for invoking specialized agents and configuring terminal status lines that display session context, model information, and token usage metrics within shell environments.

##### 3.5.2.1 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

System prompt for the statusline-setup agent that configures Claude Code status line display by converting shell PS1 configurations and creating custom status line commands with session context, model info, and token usage.

##### 3.5.2.2 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and to do so with required context.

---

## 4. Memory, Sessions & Context Management

Persistent memory across sessions, conversation summarization, session state tracking, usage analytics, and user intent prediction that maintain continuity and awareness over time.

### 4.1 Memory Management & Persistence

Persistent storage systems that accumulate user profiles, feedback, and team knowledge across sessions, with mechanisms for consolidation, staleness detection, and selective retrieval. Enables institutional memory building through scheduled background consolidation and context-aware synthesis of relevant information.

#### 4.1.1 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Defines per-user memory files that accumulate details about the user's role, goals, knowledge, and preferences across sessions to enable personalized collaboration.

#### 4.1.2 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Defines feedback memory for storing user guidance on work approaches, emphasizing balanced recording of successes and failures with conflict detection against team memories.

#### 4.1.3 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Describes feedback memory that captures user guidance on work approaches, recording both successes and failures, with explicit instructions to flag contradictions with team feedback.

#### 4.1.4 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs Claude to verify memory records against current file state and delete stale memories that conflict with observed reality.

#### 4.1.5 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Field description for user memory that captures role, goals, responsibilities, and knowledge to enable personalized and tailored assistance.

#### 4.1.6 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

#### 4.1.7 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Provides instructions for managing shared team memories during dream consolidation, including deduplication, conservative pruning, and preventing accidental promotion of personal memories to team scope.

#### 4.1.8 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, providing Claude with persistent session context.

#### 4.1.9 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Presents the contents of a nested memory file structure to Claude.

#### 4.1.10 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing files, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to stay under size limits.

#### 4.1.11 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs memory pruning by deleting stale or invalidated memories and collapsing duplicates, with conservative handling of shared team memories.

#### 4.1.12 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and returns JSON syntheses of only information relevant to each query, with cited filenames and single-paragraph summaries.

#### 4.1.13 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files for Claude Code queries by matching on actual query content rather than surface keywords, being conservative with profile and project-overview memories.

#### 4.1.14 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing cron tasks, scheduling a new consolidation prompt, and running an immediate consolidation.

#### 4.1.15 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory `summary.md` files with sections for current state, task specification, files, workflow, errors, codebase documentation, learnings, key results, and worklog.

#### 4.1.16 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations, maintaining exact structure with section headers and italic descriptions while adding detailed, info-dense content and managing token limits.

### 4.2 Conversation Summarization & Session Continuity

Distilling conversation history into compact summaries that preserve task context, decisions, and next steps for efficient session resumption.

#### 4.2.1 Conversation Summarization & Context Compaction

Techniques for distilling conversation history into structured summaries that preserve task context, technical decisions, and pending work without losing continuity. Enables efficient session resumption by capturing intent, discoveries, and next steps in compact form.

##### 4.2.1.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries with analysis of user requests, technical concepts, files modified, errors encountered, and pending tasks, structured for continuation without context loss.

##### 4.2.1.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, capturing user requests, technical concepts, file changes, errors, and pending tasks with analysis and next steps.

##### 4.2.1.3 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured instructions for summarizing a conversation portion with analysis tags, covering intent, concepts, files, errors, and pending tasks for session continuation.

##### 4.2.1.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for generating continuation summaries that enable efficient task resumption by capturing task overview, current state, discoveries, next steps, and context to preserve.

##### 4.2.1.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before conversation summarization but is too large to include; directs to use Read tool if needed.

#### 4.2.2 Session & State Management

Infrastructure for tracking session metadata, resource consumption, and cross-machine continuity. Includes session discovery, title generation, and real-time budget/token monitoring to maintain awareness of resource constraints and session history.

##### 4.2.2.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and provides the updated working directory.

##### 4.2.2.2 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 4.2.2.3 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including spent, total, and remaining amounts.

##### 4.2.2.4 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent prompt for searching past Claude Code conversation sessions by scanning .jsonl transcript files and returning matching session IDs ordered by relevance.

##### 4.2.2.5 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise, sentence-case session titles (3-7 words) that capture the main topic or goal of a coding session for easy recognition in lists.

##### 4.2.2.6 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent for generating succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

### 4.3 Usage Analytics & Intent Prediction

Pattern extraction from session data to surface friction, recommend optimizations, and predict contextually relevant next prompts.

#### 4.3.1 Usage Insights & Analytics

Extracts and synthesizes patterns from session data to surface user friction, identify opportunities, and recommend optimizations. Analyzes workflows at multiple levels—from individual session facets to aggregate trends—to guide feature adoption and workflow improvements.

##### 4.3.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for Claude Code users based on aggregated usage data.

##### 4.3.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns and recurring issues affecting user workflows.

##### 4.3.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data and emerging capabilities.

##### 4.3.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts including goal categories, user satisfaction signals, and friction points with strict guidelines for accurate classification.

##### 4.3.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns based on session analysis.

#### 4.3.2 User Intent Prediction

Predicts natural next steps in user interactions to suggest contextually relevant prompts without imposing Claude's voice or evaluative framing.

##### 4.3.2.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent messages, avoiding evaluative or Claude-voice suggestions and staying silent when the next step is unclear.

---

## 5. Code Quality, Security & Review

Engineering discipline principles, safety guardrails for destructive actions, security vulnerability analysis, code review workflows, and Git version control practices.

### 5.1 Engineering Discipline & Action Safety

Principles for reading before modifying, avoiding premature abstraction, minimizing scope, and requiring confirmation before hard-to-reverse operations.

#### 5.1.1 Code Quality & Engineering Discipline

Principles governing task execution that prioritize comprehension, pragmatism, and focused scope. Emphasizes reading existing code before modification, avoiding premature abstraction and unnecessary additions, minimizing file creation, deleting unused code cleanly, and maintaining security boundaries without defensive error handling.

##### 5.1.1.1 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing or making modifications.

##### 5.1.1.2 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Prevents Claude from creating helpers or abstractions for one-time operations or hypothetical requirements, favoring task-appropriate complexity.

##### 5.1.1.3 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

##### 5.1.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims or renaming conventions.

##### 5.1.1.5 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Instructs Claude not to add features, refactor, or improve code beyond what was explicitly requested.

##### 5.1.1.6 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs Claude to avoid error handling for impossible scenarios and validate only at system boundaries, trusting internal code guarantees.

##### 5.1.1.7 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Directs Claude to avoid giving time estimates or predictions for task duration.

##### 5.1.1.8 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Authorizes Claude to attempt ambitious tasks and defer to user judgment on scope rather than declining based on complexity.

##### 5.1.1.9 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks and instructs Claude to interpret generic instructions within that context.

##### 5.1.1.10 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities such as injection, XSS, and OWASP top 10 risks.

##### 5.1.1.11 [Exploratory questions — analyze before implementing (System Prompt)](system-prompts/system-prompt-exploratory-questions-analyze-before-implementing.md)

Directs Claude to respond to open-ended questions with analysis and options rather than jumping to implementation, waiting for user agreement before writing code.

#### 5.1.2 Action Safety & Reversibility

Safety guardrails requiring careful evaluation of action consequences before execution. Destructive, hard-to-reverse, or shared-state operations demand explicit user confirmation and risk assessment based on reversibility and blast radius.

##### 5.1.2.1 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to carefully evaluate reversibility and blast radius of actions, requiring user confirmation for destructive, hard-to-reverse, or shared-state operations before proceeding.

##### 5.1.2.2 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users about available help and feedback channels when requested.

### 5.2 Security Review & Monitoring

Analyzes code for exploitable vulnerabilities and monitors autonomous agent actions against threat models, blocking dangerous operations like credential leakage, data exfiltration, and destructive git commands while permitting authorized security testing.

#### 5.2.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt for analyzing code changes with focus on exploitable vulnerabilities, using three-phase methodology (context research, comparative analysis, vulnerability assessment) with high-confidence filtering and detailed markdown output.

#### 5.2.2 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Instructs Claude to act as a security monitor evaluating autonomous coding agent actions against block/allow rules, protecting against prompt injection, scope creep, and accidental damage through a threat-model-based classification system with user-intent evaluation.

#### 5.2.3 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules (git destructive, code execution, credential leakage, data exfiltration, infrastructure modification), and allow exceptions that govern which tool actions autonomous agents may perform.

#### 5.2.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware for understanding and reporting but explicitly forbids improving or augmenting malicious code.

#### 5.2.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing requests for destructive attacks or malicious evasion.

#### 5.2.6 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety classification, returning the prefix or 'command_injection_detected' to enforce allowlist policies.

### 5.3 Code Review & Verification

Reviews code quality and correctness through PR analysis, adversarial testing, and runtime verification that probes edge cases, captures evidence, and issues structured verdicts on implementation fitness.

#### 5.3.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, correctness, conventions, performance, test coverage, and security with concise structured feedback.

#### 5.3.2 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

System prompt for a verification subagent that adversarially tests implementations by running builds, test suites, linters, and adversarial probes (boundary values, concurrency, idempotency), issuing PASS/FAIL/PARTIAL verdicts with required command evidence.

#### 5.3.3 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow that runs code changes at their runtime surface, probes for edge cases, captures evidence, and reports findings with verdicts of PASS, FAIL, BLOCKED, or SKIP.

#### 5.3.4 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying CLI changes by building, running with test arguments, capturing output, and comparing against expected behavior.

#### 5.3.5 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying server/API changes by starting the server, sending curl requests to changed routes, and capturing response status and headers.

#### 5.3.6 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase prompt for creating verifier skills for the Verify agent covering auto-detection of project structure, verification tool setup (Playwright, CLI, API), interactive Q&A, skill generation with templates, and confirmation.

#### 5.3.7 [Simplify (Skill)](system-prompts/skill-simplify.md)

Reviews code changes for reuse opportunities, quality issues, and efficiency problems by launching three parallel review agents that identify redundancy, hacky patterns, and performance gaps.

#### 5.3.8 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks by reading conversation transcripts and judging whether user-provided conditions are satisfied, returning JSON with ok status and quoted evidence.

#### 5.3.9 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and inspecting the codebase, returning structured output indicating whether the agent completed its plan.

### 5.4 Git Workflow & Version Control Operations

Create new commits rather than amending existing ones; never skip hooks or bypass signing unless explicitly requested. Before running destructive operations (reset --hard, push --force, checkout --), consider safer alternatives and investigate root causes if hooks fail. Git worktrees enable isolated branch work with session switching via EnterWorktree/ExitWorktree. Automated commit and PR creation enforce safety protocols against accidental secret inclusion and hook bypasses.

#### 5.4.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

#### 5.4.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Provides detailed procedures for creating git commits and GitHub pull requests, including safety protocols to avoid destructive operations, hook failures, and accidental inclusion of sensitive files. Emphasizes creating new commits rather than amending, running commands in parallel when independent, and using HEREDOC for proper formatting.

#### 5.4.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs never to skip hooks or bypass signing unless the user explicitly requests it, and to investigate and fix underlying issues if hooks fail.

#### 5.4.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to prefer creating new commits over amending existing ones.

#### 5.4.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, only when explicitly requested by the user. Supports both git repositories and VCS-agnostic workflows via hooks.

#### 5.4.6 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree, restoring the original working directory. Supports keeping or removing the worktree with optional discard of uncommitted changes.

#### 5.4.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context from git status and diff, analyzing changes to draft appropriate messages while enforcing safety protocols against amending and secret files.

#### 5.4.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated git context, handling branch creation, commit messages, and PR body generation while enforcing git safety protocols.

#### 5.4.9 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git status at conversation start as a static snapshot.

---

## 6. User Experience, Learning & Workflow Customization

Communication style standards, user interaction tools, educational modes, codebase exploration, onboarding workflows, and reusable skills that shape how Claude presents and adapts its work.

### 6.1 Communication Style & Output Formatting

Standards for concise, answer-first responses with consistent formatting, line-number references, and audience-appropriate terminology.

#### 6.1.1 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs Claude to give brief user-facing updates at key moments, write concise summaries, match response format to task complexity, and avoid unnecessary comments in code.

#### 6.1.2 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning and limiting text to essential information at natural milestones.

#### 6.1.3 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing code for easy navigation.

#### 6.1.4 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs responses to be short and concise.

#### 6.1.5 [User-facing communication style (System Prompt)](system-prompts/system-prompt-user-facing-communication-style.md)

Defines guidelines for clear, audience-aware user communication including prose style, update cadence, formatting conventions, and semantic clarity. Emphasizes complete sentences, expanded technical terms, and linear readability over terseness.

#### 6.1.6 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering absolute paths, response formatting, emoji avoidance, and tool call punctuation.

#### 6.1.7 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Instructs agents to describe their most recent action in 3-5 words using present tense, naming files or functions rather than branches.

#### 6.1.8 User Interaction & Clarification Tools

Mechanisms for gathering user input and presenting options during execution. AskUserQuestion clarifies ambiguous requirements and collects decisions; preview fields enable side-by-side visual comparison of concrete artifacts like mockups and code to support informed user choices.

##### 6.1.8.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use AskUserQuestion to gather user preferences, clarify ambiguous instructions, and request decisions during execution. In plan mode, use it to clarify requirements before finalizing the plan, not to ask for plan approval.

##### 6.1.8.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Documents the optional preview field for single-select questions, enabling display of HTML mockups, code snippets, and visual diagrams to help users compare concrete artifacts.

##### 6.1.8.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering of UI options using markdown monospace boxes for visual comparison of mockups, code, diagrams, and configurations.

##### 6.1.8.4 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude that a side question is being asked by a lightweight agent with no tools available, requiring a direct one-off answer based only on conversation context.

### 6.2 Learning & Teaching Modes

Interactive educational frameworks that transform task execution into guided learning experiences. Learning mode establishes collaborative human-AI interaction with educational insights, while teach mode uses step-by-step overlays to guide users through workflows without direct execution.

#### 6.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt establishing collaborative human-AI interaction, requesting human contributions for design decisions, and providing educational insights through structured Learn by Doing requests.

#### 6.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code writing when learning mode is active, focusing on implementation choices specific to the codebase.

#### 6.2.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct execution, activated by learning-oriented language like 'teach me' or 'show me how'.

### 6.3 Codebase Exploration & Project Onboarding

Search strategies for navigating codebases, documentation generation, and structured onboarding workflows with interactive configuration interviews.

#### 6.3.1 Codebase Exploration & Search

Strategies for navigating codebases through targeted searches and delegation, combined with automated documentation generation. Covers direct search patterns for simple queries, escalation to specialized exploration agents for complex discovery, and synthesis of findings into CLAUDE.md reference files.

##### 6.3.1.1 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Instructs Claude to use Task tool with exploration subagent for broader codebase exploration when simple searches prove insufficient.

##### 6.3.1.2 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob and Grep directly for simple, directed codebase searches.

##### 6.3.1.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files capturing common development commands, high-level architecture, and project-specific conventions for future Claude Code instances.

#### 6.3.2 Onboarding & Project Setup

Structured workflows for bringing developers into projects and teams. Combines codebase analysis, interactive configuration interviews, and collaborative guide creation to establish project conventions, tool configurations, and team practices tailored to specific roles and contexts.

##### 6.3.2.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow that explores the codebase, interviews the user about practices and preferences, and creates minimal CLAUDE.md files, skills, and hooks tailored to the project and user role.

##### 6.3.2.2 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding new teammates by walking them through team usage patterns, setup checklists, MCP servers, skills, and team-specific tips in a warm conversational style.

##### 6.3.2.3 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview script for configuring Managed Agents from scratch, guiding users through tool selection, skill configuration, environment setup, and emitting working setup and runtime code.

##### 6.3.2.4 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides by analyzing usage data, classifying session types into work categories, gathering repo and MCP setup details, and iterating collaboratively on ONBOARDING.md.

### 6.4 Skills, Slash Commands & Scheduling

Reusable skill definitions triggered by slash commands, plus cron-based scheduling of recurring tasks with timezone awareness and remote agent integration.

#### 6.4.1 Skills System & Slash Commands

Framework for creating and invoking domain-specific capabilities as reusable skills. Enables users to trigger specialized workflows via slash commands, with mechanisms to convert repeatable session patterns into formalized, reusable skill definitions with execution modes and success criteria.

##### 6.4.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Invokes specialized skills and slash commands within conversations, matching user requests to available domain-specific capabilities with optional arguments.

##### 6.4.1.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Instructs Claude to use the Skill tool to execute user-invocable skills invoked via slash commands, only for skills listed in the tool's user-invocable section.

##### 6.4.1.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Notifies Claude of skills invoked in the current session and instructs it to continue following their guidelines.

##### 6.4.1.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and to follow its guidelines.

##### 6.4.1.5 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides conversion of a session's repeatable process into a reusable skill through analysis, multi-round user interviews, and structured SKILL.md file creation with success criteria and execution modes.

#### 6.4.2 Scheduling & Cron Automation

Schedules recurring or one-time tasks using cron expressions with timezone awareness, jitter distribution, and integration with remote Claude Code agents on cloud infrastructure.

##### 6.4.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron-based jobs using standard 5-field cron syntax in user's local timezone, with guidance on avoiding :00 and :30 minute marks for load distribution, jitter behavior, and optional durability for persistence across restarts.

##### 6.4.2.2 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into an interval and prompt, converts the interval to a cron expression, schedules a recurring task, and immediately executes the prompt.

##### 6.4.2.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling, updating, listing, or running remote Claude Code agents on cron triggers via the Anthropic cloud API, handling environment selection, MCP connector validation, timezone conversion, and trigger configuration.

### 6.5 Web Search & Browser Automation

Retrieving current web information via search and URL fetching, and automating browser interactions through mouse, keyboard, and screenshot capabilities.

#### 6.5.1 Web Search & Content Fetching

Retrieves and processes current web information through search and URL fetching, with built-in caching, markdown conversion, and mandatory source attribution for citations beyond the knowledge cutoff.

##### 6.5.1.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content from URLs, converting HTML to markdown and processing with a fast model. Includes 15-minute caching and handles redirects.

##### 6.5.1.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff, with domain filtering and mandatory source citation in responses.

##### 6.5.1.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Prompt for agent that summarizes verbose WebFetch output for the main model, enforcing quote length limits and paraphrasing requirements for untrusted domains.

#### 6.5.2 Browser Automation & Computer Use

Enables Claude to interact with web browsers through mouse, keyboard, and screenshot capabilities, with system guidance for effective automation including debugging, tab management, and safety constraints to prevent loops or unintended actions.

##### 6.5.2.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse and keyboard interaction with Chrome, including screenshot capture and precise click positioning guidance.

##### 6.5.2.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines mouse and keyboard actions for browser automation including clicks, typing, scrolling, zooming, and hover interactions.

##### 6.5.2.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for effective browser automation including GIF recording, console debugging, alert handling, tab context management, and avoiding loops or rabbit holes.

##### 6.5.2.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use to enable browser automation capabilities.

##### 6.5.2.5 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools covering tool selection tiers (dedicated MCP, Chrome MCP, computer use), app access tiers with restrictions, link safety, and financial action restrictions.

---

## 7. Claude API Documentation & Application Development

Official API references for language SDKs, managed agents, tool use, streaming, file handling, and batch processing, plus guidance for building Claude-powered applications and GitHub integrations.

### 7.1 Claude API Reference — Language SDKs

SDK implementations across eight programming languages for Claude API integration, covering client initialization, vision capabilities, prompt caching, extended thinking, streaming, tool use, and error handling patterns specific to each language's idioms.

#### 7.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, vision (images), prompt caching with automatic and manual control, extended thinking (adaptive), error handling, multi-turn conversations, and cost optimization strategies.

#### 7.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, vision (images), prompt caching with automatic and manual control, extended thinking (adaptive), error handling with typed exceptions, multi-turn conversations, and cost optimization.

#### 7.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, basic requests, streaming with message accumulation, tool use via BetaToolRunner and manual loops, thinking, prompt caching, and context editing with compaction.

#### 7.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking (adaptive), tool use with annotated classes and BetaToolRunner, effort parameter, prompt caching, structured output, and server-side tools.

#### 7.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking (adaptive and deprecated fixed-budget), tool use with manual loops, prompt caching, structured output, and server-side tools with version-suffixed type names.

#### 7.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including client initialization, basic requests, streaming, tool use with BetaToolRunner and annotated classes, and prompt caching with cache control.

#### 7.1.7 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including client initialization for Anthropic/Bedrock/Vertex/Foundry, basic requests, streaming, tool use with BetaRunnableTool, extended thinking, prompt caching, and structured outputs via StructuredOutputModel.

#### 7.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming (SSE), tool use loops, prompt caching, extended thinking, and required headers for authentication and versioning.

### 7.2 Managed Agents & Tool Use API

Complete reference for the Managed Agents platform architecture, session lifecycle, event communication, and tool-calling patterns including agentic loops.

#### 7.2.1 Managed Agents API Reference

Complete reference for the Managed Agents platform covering architecture, core concepts, session lifecycle, event-driven communication, tool integration, file operations, and client-side patterns for building persistent autonomous agents with MCP support.

##### 7.2.1.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Comprehensive overview of Managed Agents API architecture, the mandatory agent-then-session flow, beta headers, reading guide by use case, and common pitfalls including agent persistence, MCP auth via vaults, and SSE stream replay limitations.

##### 7.2.1.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Reference documentation covering the four core Managed Agents concepts (Agent, Session, Environment, Container), session lifecycle, agent versioning and persistence, and the mandatory agent-then-session flow with code examples.

##### 7.2.1.3 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference documentation for Managed Agents environments, file resources, GitHub repository mounting with token management, and the Files API for uploading and downloading session outputs.

##### 7.2.1.4 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Reference guide for sending and receiving events on managed agent sessions via streaming or polling, including reconnection patterns, message queuing, interrupts, tool confirmations, and event payload details.

##### 7.2.1.5 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference documentation covering tool types (agent toolset, MCP, custom), permission policies, vault credential management for MCP OAuth auto-refresh, and the Skills API for building specialized agents.

##### 7.2.1.6 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive reference for Managed Agents API endpoints, SDK methods across languages, request/response schemas, error handling with HTTP status codes, and rate limits by endpoint group.

##### 7.2.1.7 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Reference guide of eight common client-side patterns for driving Managed Agent sessions: lossless stream reconnect with deduplication, queued-vs-processed event gating, interrupt handling, tool-confirmation round-trips, idle-break gating, status-write races, stream-first ordering, and file-mount gotchas.

##### 7.2.1.8 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Python SDK reference for Managed Agents covering environment and agent creation, session management, event streaming, custom tools, file uploads, and MCP server integration with code examples.

##### 7.2.1.9 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

TypeScript SDK reference for Managed Agents covering environment and agent creation, session management, event streaming, custom tools, file uploads, and MCP server integration with code examples.

##### 7.2.1.10 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

cURL and raw HTTP request examples for Managed Agents API covering environment creation, agent setup, session lifecycle, event streaming, file operations, and MCP server integration.

#### 7.2.2 Tool Use & Streaming API References

Foundations and implementations for tool-calling patterns and real-time response streaming across Python and TypeScript, including tool runners, manual agentic loops, server-side execution capabilities, and event-driven content handling.

##### 7.2.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loop, server-side tools (code execution, web search, computer use, programmatic tool calling), skills, structured outputs, and best practices.

##### 7.2.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference covering tool runner with decorators, MCP tool conversion helpers, manual agentic loop, code execution with file uploads and container reuse, memory tool, and structured outputs.

##### 7.2.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loop with streaming, code execution with file uploads and container reuse, memory tool, and structured outputs.

##### 7.2.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync and async streaming, handling different content types (text, thinking, tool use), progress tracking, error handling, and best practices for real-time response display.

##### 7.2.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, handling different content types (text, thinking, tool use), tool runner streaming, event types, and best practices for real-time response display.

### 7.3 File Handling, Batch & Model Reference

APIs for file uploads, asynchronous batch processing, model catalog data, prompt caching optimization, and HTTP error handling.

#### 7.3.1 File Handling & Batch Processing

APIs for uploading and managing files (PDFs, images) in messages with citations, plus asynchronous batch processing of large request volumes at reduced cost with prompt caching integration.

##### 7.3.1.1 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload (max 500 MB), usage in messages (PDFs and images with citations), file management (list, retrieve metadata, delete, download), and end-to-end examples.

##### 7.3.1.2 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload using toFile helper, usage in messages (PDFs and images), and file management operations (list, delete, download).

##### 7.3.1.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for asynchronous batch processing of up to 100,000 requests at 50% cost, including batch creation, polling, result retrieval, and prompt caching integration.

#### 7.3.2 Model Information & API Fundamentals

Reference data for Claude models (IDs, context windows, pricing), prompt caching optimization patterns, and HTTP error handling with language-specific exception classes.

##### 7.3.2.1 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Design guide for effective prompt caching covering the prefix-match invariant, placement patterns, silent invalidators, architectural guidance, and verification via usage metrics. Includes minimum cacheable prefix sizes by model.

##### 7.3.2.2 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact model IDs, aliases, context windows, max output tokens, and pricing; includes programmatic model discovery via Models API for live capability data.

##### 7.3.2.3 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) returned by Claude API with common causes, fixes, and typed exception classes for each language SDK.

### 7.4 Application Building & GitHub Integration

Guidance for building Claude-powered applications with API selection and model configuration, plus GitHub Actions workflows for automated code assistance.

#### 7.4.1 Application Development with Claude

Comprehensive guidance for building Claude-powered applications, covering API selection, model configuration (thinking, streaming, caching), language-specific implementation patterns, and access to live official documentation.

##### 7.4.1.1 [Build Claude API and SDK apps (Skill)](system-prompts/skill-build-claude-api-and-sdk-apps.md)

Trigger rules for activating guidance when users are building applications with the Claude API, Anthropic SDKs, or Managed Agents, including feature additions and model usage.

##### 7.4.1.2 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Comprehensive guide for building LLM-powered applications covering language detection, API surface selection (Claude API vs Managed Agents), model defaults (Opus 4.6, adaptive thinking, streaming), thinking and effort parameters, compaction, caching, and language-specific documentation reading.

##### 7.4.1.3 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation to relevant sections for common use cases (classification, streaming, caching, tool use, batches, files, agents).

##### 7.4.1.4 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Curated WebFetch URLs for fetching current Claude API, Agent SDK, and Anthropic CLI documentation from official sources, with extraction prompts for each topic. Includes fallback strategy when WebFetch fails.

##### 7.4.1.5 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with code examples and feature discovery.

#### 7.4.2 GitHub Integration & Automation

Workflows and templates for integrating Claude Code into GitHub environments via Actions and App installation, enabling automated code assistance triggered by mentions and comments.

##### 7.4.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template for triggering Claude Code via @claude mentions in issues, PRs, and comments, with configurable permissions and optional custom prompts.

##### 7.4.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template for PR description when installing Claude Code GitHub App integration, explaining capabilities, workflow behavior, security model, and how to get started.
