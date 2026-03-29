# Claude Code System Prompts Index

Operational and reference material for building and running Claude-based coding agents — covering how the model reasons, acts, and persists state across sessions, alongside the APIs and tools needed to develop, verify, and deploy software with it.

## Table of Contents

1. [Bash & Shell Operations](#1-bash-shell-operations)
   1. [Bash Tool: Core Usage & Syntax](#11-bash-tool-core-usage-syntax)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (maintain cwd) [Tool Description]](#112-bash-maintain-cwd-tool-description)
      3. [Bash (no newlines) [Tool Description]](#113-bash-no-newlines-tool-description)
      4. [Bash (parallel commands) [Tool Description]](#114-bash-parallel-commands-tool-description)
      5. [Bash (quote file paths) [Tool Description]](#115-bash-quote-file-paths-tool-description)
      6. [Bash (sequential commands) [Tool Description]](#116-bash-sequential-commands-tool-description)
      7. [Bash (semicolon usage) [Tool Description]](#117-bash-semicolon-usage-tool-description)
      8. [Bash (working directory) [Tool Description]](#118-bash-working-directory-tool-description)
      9. [Bash (timeout) [Tool Description]](#119-bash-timeout-tool-description)
      10. [Bash (verify parent directory) [Tool Description]](#1110-bash-verify-parent-directory-tool-description)
      11. [Bash (prefer dedicated tools) [Tool Description]](#1111-bash-prefer-dedicated-tools-tool-description)
      12. [Bash (built-in tools note) [Tool Description]](#1112-bash-built-in-tools-note-tool-description)
   2. [Bash Tool: Preferred Alternatives](#12-bash-tool-preferred-alternatives)
      1. [Bash (alternative — communication) [Tool Description]](#121-bash-alternative-—-communication-tool-description)
      2. [Bash (alternative — content search) [Tool Description]](#122-bash-alternative-—-content-search-tool-description)
      3. [Bash (alternative — edit files) [Tool Description]](#123-bash-alternative-—-edit-files-tool-description)
      4. [Bash (alternative — file search) [Tool Description]](#124-bash-alternative-—-file-search-tool-description)
      5. [Bash (alternative — read files) [Tool Description]](#125-bash-alternative-—-read-files-tool-description)
      6. [Bash (alternative — write files) [Tool Description]](#126-bash-alternative-—-write-files-tool-description)
   3. [Bash Tool: Sandbox Security & Restrictions](#13-bash-tool-sandbox-security-restrictions)
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
   4. [Bash Tool: Sleep & Timing Patterns](#14-bash-tool-sleep-timing-patterns)
      1. [Bash (sleep — keep short) [Tool Description]](#141-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#142-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — run immediately) [Tool Description]](#143-bash-sleep-—-run-immediately-tool-description)
      4. [Bash (sleep — use check commands) [Tool Description]](#144-bash-sleep-—-use-check-commands-tool-description)
      5. [One of six rules for using sleep command (System Prompt)](#145-one-of-six-rules-for-using-sleep-command-system-prompt)
      6. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#146-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
   5. [Bash Tool: Git Operations](#15-bash-tool-git-operations)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#151-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#152-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#153-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#154-bash-git-—-prefer-new-commits-tool-description)
2. [Tool System, Orchestration & Planning](#2-tool-system-orchestration-planning)
   1. [Tool Selection & Usage Policy](#21-tool-selection-usage-policy)
      1. [Tool usage (delegate exploration) [System Prompt]](#211-tool-usage-delegate-exploration-system-prompt)
      2. [Tool usage (direct search) [System Prompt]](#212-tool-usage-direct-search-system-prompt)
      3. [Tool usage (edit files) [System Prompt]](#213-tool-usage-edit-files-system-prompt)
      4. [Tool usage (read files) [System Prompt]](#214-tool-usage-read-files-system-prompt)
      5. [Tool usage (reserve Bash) [System Prompt]](#215-tool-usage-reserve-bash-system-prompt)
      6. [Tool usage (search content) [System Prompt]](#216-tool-usage-search-content-system-prompt)
      7. [Tool usage (search files) [System Prompt]](#217-tool-usage-search-files-system-prompt)
      8. [Tool usage (create files) [System Prompt]](#218-tool-usage-create-files-system-prompt)
      9. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#219-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   2. [Subagent & Task Delegation](#22-subagent-task-delegation)
      1. [Agent (when to launch subagents) [Tool Description]](#221-agent-when-to-launch-subagents-tool-description)
      2. [Agent (usage notes) [Tool Description]](#222-agent-usage-notes-tool-description)
      3. [Tool usage (subagent guidance) [System Prompt]](#223-tool-usage-subagent-guidance-system-prompt)
      4. [Writing subagent prompts (System Prompt)](#224-writing-subagent-prompts-system-prompt)
      5. [Subagent delegation examples (System Prompt)](#225-subagent-delegation-examples-system-prompt)
      6. [Fork usage guidelines (System Prompt)](#226-fork-usage-guidelines-system-prompt)
      7. [Agent mention (System Reminder)](#227-agent-mention-system-reminder)
   3. [Task & Todo Management](#23-task-todo-management)
      1. [TodoWrite (Tool Description)](#231-todowrite-tool-description)
      2. [TaskCreate (Tool Description)](#232-taskcreate-tool-description)
      3. [Tool usage (task management) [System Prompt]](#233-tool-usage-task-management-system-prompt)
      4. [TodoWrite reminder (System Reminder)](#234-todowrite-reminder-system-reminder)
      5. [Task tools reminder (System Reminder)](#235-task-tools-reminder-system-reminder)
   4. [Planning & Multi-Agent Coordination](#24-planning-multi-agent-coordination)
      1. [Planning Mode & Implementation Planning](#241-planning-mode-implementation-planning)
         1. [EnterPlanMode (Tool Description)](#2411-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#2412-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#2413-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#2414-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#2415-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#2416-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#2417-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#2418-plan-file-reference-system-reminder)
         9. [Ultraplan mode (System Reminder)](#2419-ultraplan-mode-system-reminder)
         10. [Verify plan reminder (System Reminder)](#24110-verify-plan-reminder-system-reminder)
         11. [Phase four of plan mode (System Prompt)](#24111-phase-four-of-plan-mode-system-prompt)
      2. [Multi-Agent Team Coordination](#242-multi-agent-team-coordination)
         1. [SendMessageTool (Tool Description)](#2421-sendmessagetool-tool-description)
         2. [TeammateTool (Tool Description)](#2422-teammatetool-tool-description)
         3. [TeamDelete (Tool Description)](#2423-teamdelete-tool-description)
         4. [TaskList (teammate workflow) [Tool Description]](#2424-tasklist-teammate-workflow-tool-description)
         5. [Team Coordination (System Reminder)](#2425-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#2426-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#2427-teammate-communication-system-prompt)
         8. [Team memory content display (System Prompt)](#2428-team-memory-content-display-system-prompt)
3. [Memory, Session State & Communication](#3-memory-session-state-communication)
   1. [Knowledge & Context Persistence](#31-knowledge-context-persistence)
      1. [Memory & Knowledge Persistence](#311-memory-knowledge-persistence)
         1. [Memory file contents (System Reminder)](#3111-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#3112-nested-memory-contents-system-reminder)
         3. [Agent memory instructions (System Prompt)](#3113-agent-memory-instructions-system-prompt)
         4. [Description part of memory instructions (System Prompt)](#3114-description-part-of-memory-instructions-system-prompt)
         5. [Memory description of user feedback (System Prompt)](#3115-memory-description-of-user-feedback-system-prompt)
         6. [Dream memory consolidation (Agent Prompt)](#3116-dream-memory-consolidation-agent-prompt)
         7. [Determine which memory files to attach (Agent Prompt)](#3117-determine-which-memory-files-to-attach-agent-prompt)
         8. [Session memory update instructions (Agent Prompt)](#3118-session-memory-update-instructions-agent-prompt)
         9. [Session memory template (Data)](#3119-session-memory-template-data)
      2. [Conversation & Context Summarization](#312-conversation-context-summarization)
         1. [Conversation summarization (Agent Prompt)](#3121-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#3122-recent-message-summarization-agent-prompt)
         3. [Context compaction summary (System Prompt)](#3123-context-compaction-summary-system-prompt)
      3. [Session & State Management](#313-session-state-management)
         1. [Session continuation (System Reminder)](#3131-session-continuation-system-reminder)
         2. [Compact file reference (System Reminder)](#3132-compact-file-reference-system-reminder)
         3. [File exists but empty (System Reminder)](#3133-file-exists-but-empty-system-reminder)
         4. [File modified by user or linter (System Reminder)](#3134-file-modified-by-user-or-linter-system-reminder)
         5. [File opened in IDE (System Reminder)](#3135-file-opened-in-ide-system-reminder)
         6. [File shorter than offset (System Reminder)](#3136-file-shorter-than-offset-system-reminder)
         7. [File truncated (System Reminder)](#3137-file-truncated-system-reminder)
         8. [Lines selected in IDE (System Reminder)](#3138-lines-selected-in-ide-system-reminder)
         9. [Token usage (System Reminder)](#3139-token-usage-system-reminder)
         10. [USD budget (System Reminder)](#31310-usd-budget-system-reminder)
         11. [New diagnostics detected (System Reminder)](#31311-new-diagnostics-detected-system-reminder)
         12. [Output style active (System Reminder)](#31312-output-style-active-system-reminder)
   2. [Automation Hooks & Slash Commands](#32-automation-hooks-slash-commands)
      1. [Hook System & Lifecycle Events](#321-hook-system-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#3211-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#3212-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#3213-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation prefix (System Reminder)](#3214-hook-stopped-continuation-prefix-system-reminder)
         5. [Hook stopped continuation (System Reminder)](#3215-hook-stopped-continuation-system-reminder)
         6. [Hook success (System Reminder)](#3216-hook-success-system-reminder)
      2. [Skills & Slash Commands](#322-skills-slash-commands)
         1. [Skill (Tool Description)](#3221-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#3222-tool-usage-skill-invocation-system-prompt)
         3. [Invoked skills (System Reminder)](#3223-invoked-skills-system-reminder)
         4. [Skillify Current Session (System Prompt)](#3224-skillify-current-session-system-prompt)
   3. [Session Discovery & Output Style](#33-session-discovery-output-style)
      1. [Session Metadata & Discovery](#331-session-metadata-discovery)
         1. [Coding session title generator (Agent Prompt)](#3311-coding-session-title-generator-agent-prompt)
         2. [Session title and branch generation (Agent Prompt)](#3312-session-title-and-branch-generation-agent-prompt)
         3. [Session Search Assistant (Agent Prompt)](#3313-session-search-assistant-agent-prompt)
      2. [Output Style & Communication](#332-output-style-communication)
         1. [Output efficiency (System Prompt)](#3321-output-efficiency-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#3322-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#3323-tone-and-style-concise-output-—-short-system-prompt)
         4. [Agent thread notes (System Prompt)](#3324-agent-thread-notes-system-prompt)
         5. [Agent Summary Generation (System Prompt)](#3325-agent-summary-generation-system-prompt)
4. [File, Web & Execution Tools](#4-file-web-execution-tools)
   1. [File System & Code Intelligence](#41-file-system-code-intelligence)
      1. [File System Tools](#411-file-system-tools)
         1. [Edit (Tool Description)](#4111-edit-tool-description)
         2. [Write (Tool Description)](#4112-write-tool-description)
         3. [ReadFile (Tool Description)](#4113-readfile-tool-description)
         4. [Grep (Tool Description)](#4114-grep-tool-description)
         5. [LSP (Tool Description)](#4115-lsp-tool-description)
      2. [Git Worktree Management](#412-git-worktree-management)
         1. [EnterWorktree (Tool Description)](#4121-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#4122-exitworktree-tool-description)
         3. [Git status (System Prompt)](#4123-git-status-system-prompt)
   2. [Web, Scheduling & External Data](#42-web-scheduling-external-data)
      1. [Web & External Data Access](#421-web-external-data-access)
         1. [WebFetch (Tool Description)](#4211-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#4212-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#4213-webfetch-summarizer-agent-prompt)
      2. [Scheduling & Cron Jobs](#422-scheduling-cron-jobs)
         1. [CronCreate (Tool Description)](#4221-croncreate-tool-description)
         2. [/loop slash command (Skill)](#4222-loop-slash-command-skill)
         3. [/schedule slash command (Agent Prompt)](#4223-schedule-slash-command-agent-prompt)
   3. [Interactive & Execution Environments](#43-interactive-execution-environments)
      1. [Notebook & Command Execution](#431-notebook-command-execution)
         1. [NotebookEdit (Tool Description)](#4311-notebookedit-tool-description)
         2. [PowerShell (Tool Description)](#4312-powershell-tool-description)
      2. [Browser & Computer Automation](#432-browser-computer-automation)
         1. [Computer (Tool Description)](#4321-computer-tool-description)
         2. [Computer action (Tool Parameter)](#4322-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#4323-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#4324-chrome-browser-mcp-tools-system-prompt)
      3. [Execution Control & Tool Discovery](#433-execution-control-tool-discovery)
         1. [Sleep (Tool Description)](#4331-sleep-tool-description)
         2. [ToolSearch (second part) [Tool Description]](#4332-toolsearch-second-part-tool-description)
         3. [Advisor tool instructions (System Prompt)](#4333-advisor-tool-instructions-system-prompt)
   4. [User Interaction & Learning Modes](#44-user-interaction-learning-modes)
      1. [User Interaction & Question Tools](#441-user-interaction-question-tools)
         1. [AskUserQuestion (Tool Description)](#4411-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#4412-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#4413-option-previewer-system-prompt)
         4. [SendMessageTool (non-agent-teams) [Tool Description]](#4414-sendmessagetool-non-agent-teams-tool-description)
         5. [How to use the SendUserMessage tool (System Prompt)](#4415-how-to-use-the-sendusermessage-tool-system-prompt)
      2. [Learning & Teaching Modes](#442-learning-teaching-modes)
         1. [request_teach_access (part of teach mode) [Tool Description]](#4421-request_teach_access-part-of-teach-mode-tool-description)
         2. [Learning mode (System Prompt)](#4422-learning-mode-system-prompt)
         3. [Learning mode (insights) [System Prompt]](#4423-learning-mode-insights-system-prompt)
5. [Agent Workflows, Code Quality & Development](#5-agent-workflows-code-quality-development)
   1. [Specialized Agents & Parallel Execution](#51-specialized-agents-parallel-execution)
      1. [Specialized Agent Personas](#511-specialized-agent-personas)
         1. [Explore (Agent Prompt)](#5111-explore-agent-prompt)
         2. [General purpose (Agent Prompt)](#5112-general-purpose-agent-prompt)
         3. [Plan mode (enhanced) [Agent Prompt]](#5113-plan-mode-enhanced-agent-prompt)
         4. [Worker fork execution (Agent Prompt)](#5114-worker-fork-execution-agent-prompt)
      2. [Batch Processing & Parallel Work](#512-batch-processing-parallel-work)
         1. [/batch slash command (Agent Prompt)](#5121-batch-slash-command-agent-prompt)
         2. [Worker instructions (System Prompt)](#5122-worker-instructions-system-prompt)
   2. [Git, GitHub & Documentation Agents](#52-git-github-documentation-agents)
      1. [Git & GitHub Integration](#521-git-github-integration)
         1. [Quick git commit (Agent Prompt)](#5211-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#5212-quick-pr-creation-agent-prompt)
         3. [/pr-comments slash command (Agent Prompt)](#5213-pr-comments-slash-command-agent-prompt)
         4. [/review-pr slash command (Agent Prompt)](#5214-review-pr-slash-command-agent-prompt)
         5. [GitHub App installation PR description (Data)](#5215-github-app-installation-pr-description-data)
         6. [GitHub Actions workflow for @claude mentions (Data)](#5216-github-actions-workflow-for-claude-mentions-data)
      2. [Documentation & Knowledge Agents](#522-documentation-knowledge-agents)
         1. [Update Magic Docs (Agent Prompt)](#5221-update-magic-docs-agent-prompt)
         2. [Claude guide agent (Agent Prompt)](#5222-claude-guide-agent-agent-prompt)
   3. [Verification, Debugging & Code Quality](#53-verification-debugging-code-quality)
      1. [Verification & Quality Assurance](#531-verification-quality-assurance)
         1. [Verify skill (Skill)](#5311-verify-skill-skill)
         2. [Verify CLI changes (example for Verify skill) [Skill]](#5312-verify-cli-changes-example-for-verify-skill-skill)
         3. [Verify server/API changes (example for Verify skill) [Skill]](#5313-verify-serverapi-changes-example-for-verify-skill-skill)
         4. [Create verifier skills (Skill)](#5314-create-verifier-skills-skill)
         5. [Verification specialist (Agent Prompt)](#5315-verification-specialist-agent-prompt)
      2. [Code Quality & Debugging](#532-code-quality-debugging)
         1. [Simplify (Skill)](#5321-simplify-skill)
         2. [Debugging (Skill)](#5322-debugging-skill)
         3. [/stuck slash command (Skill)](#5323-stuck-slash-command-skill)
      3. [Code Quality & Task Execution Guidelines](#533-code-quality-task-execution-guidelines)
         1. [Doing tasks (ambitious tasks) [System Prompt]](#5331-doing-tasks-ambitious-tasks-system-prompt)
         2. [Doing tasks (help and feedback) [System Prompt]](#5332-doing-tasks-help-and-feedback-system-prompt)
         3. [Doing tasks (minimize file creation) [System Prompt]](#5333-doing-tasks-minimize-file-creation-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#5334-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no premature abstractions) [System Prompt]](#5335-doing-tasks-no-premature-abstractions-system-prompt)
         6. [Doing tasks (no time estimates) [System Prompt]](#5336-doing-tasks-no-time-estimates-system-prompt)
         7. [Doing tasks (no unnecessary additions) [System Prompt]](#5337-doing-tasks-no-unnecessary-additions-system-prompt)
         8. [Doing tasks (no unnecessary error handling) [System Prompt]](#5338-doing-tasks-no-unnecessary-error-handling-system-prompt)
         9. [Doing tasks (read before modifying) [System Prompt]](#5339-doing-tasks-read-before-modifying-system-prompt)
         10. [Doing tasks (security) [System Prompt]](#53310-doing-tasks-security-system-prompt)
         11. [Doing tasks (software engineering focus) [System Prompt]](#53311-doing-tasks-software-engineering-focus-system-prompt)
   4. [Security, Autonomous Execution & Agent Design](#54-security-autonomous-execution-agent-design)
      1. [Security & Malware Analysis](#541-security-malware-analysis)
         1. [Censoring assistance with malicious activities (System Prompt)](#5411-censoring-assistance-with-malicious-activities-system-prompt)
         2. [Malware analysis after Read tool call (System Reminder)](#5412-malware-analysis-after-read-tool-call-system-reminder)
         3. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#5413-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         4. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#5414-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         5. [/security-review slash command (Agent Prompt)](#5415-security-review-slash-command-agent-prompt)
      2. [Autonomous & Auto Mode Execution](#542-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#5421-auto-mode-system-prompt)
         2. [Executing actions with care (System Prompt)](#5422-executing-actions-with-care-system-prompt)
         3. [System section (System Prompt)](#5423-system-section-system-prompt)
         4. [Tool execution denied (System Prompt)](#5424-tool-execution-denied-system-prompt)
      3. [Agent Design & Safety](#543-agent-design-safety)
         1. [Agent creation architect (Agent Prompt)](#5431-agent-creation-architect-agent-prompt)
         2. [Auto mode rule reviewer (Agent Prompt)](#5432-auto-mode-rule-reviewer-agent-prompt)
         3. [Bash command description writer (Agent Prompt)](#5433-bash-command-description-writer-agent-prompt)
         4. [Bash command prefix detection (Agent Prompt)](#5434-bash-command-prefix-detection-agent-prompt)
   5. [Project Configuration & Operational Tooling](#55-project-configuration-operational-tooling)
      1. [Project Configuration & Documentation Setup](#551-project-configuration-documentation-setup)
         1. [CLAUDE.md creation (Agent Prompt)](#5511-claudemd-creation-agent-prompt)
         2. [/init CLAUDE.md and skill setup (new version) [Skill]](#5512-init-claudemd-and-skill-setup-new-version-skill)
         3. [Update Claude Code Config (Skill)](#5513-update-claude-code-config-skill)
         4. [update-config (7-step verification flow) [Skill]](#5514-update-config-7-step-verification-flow-skill)
      2. [Hook Condition & Completion Verification](#552-hook-condition-completion-verification)
         1. [Hook condition evaluator (Agent Prompt)](#5521-hook-condition-evaluator-agent-prompt)
         2. [Agent Hook (Agent Prompt)](#5522-agent-hook-agent-prompt)
      3. [Usage Insights & Analytics](#553-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#5531-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#5532-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#5533-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#5534-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#5535-insights-suggestions-system-prompt)
      4. [Special Execution Modes & Configuration](#554-special-execution-modes-configuration)
         1. [Minimal mode (System Prompt)](#5541-minimal-mode-system-prompt)
         2. [Scratchpad directory (System Prompt)](#5542-scratchpad-directory-system-prompt)
         3. [Prompt Suggestion Generator v2 (Agent Prompt)](#5543-prompt-suggestion-generator-v2-agent-prompt)
         4. [/btw side question (System Reminder)](#5544-btw-side-question-system-reminder)
         5. [Status line setup (Agent Prompt)](#5545-status-line-setup-agent-prompt)
6. [Claude API & SDK References](#6-claude-api-sdk-references)
   1. [Build with Claude API Skills](#61-build-with-claude-api-skills)
      1. [Build with Claude API (Skill)](#611-build-with-claude-api-skill)
      2. [Build with Claude API (reference guide) [Skill]](#612-build-with-claude-api-reference-guide-skill)
   2. [Claude API SDK References](#62-claude-api-sdk-references)
      1. [Claude API reference — Python (Data)](#621-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#622-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#623-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#624-claude-api-reference-—-java-data)
      5. [Claude API reference — Ruby (Data)](#625-claude-api-reference-—-ruby-data)
      6. [Claude API reference — PHP (Data)](#626-claude-api-reference-—-php-data)
      7. [Claude API reference — C# (Data)](#627-claude-api-reference-—-c-data)
      8. [Claude API reference — cURL (Data)](#628-claude-api-reference-—-curl-data)
      9. [Claude model catalog (Data)](#629-claude-model-catalog-data)
   3. [Agent SDK References & Patterns](#63-agent-sdk-references-patterns)
      1. [Agent SDK reference — Python (Data)](#631-agent-sdk-reference-—-python-data)
      2. [Agent SDK reference — TypeScript (Data)](#632-agent-sdk-reference-—-typescript-data)
      3. [Agent SDK patterns — Python (Data)](#633-agent-sdk-patterns-—-python-data)
      4. [Agent SDK patterns — TypeScript (Data)](#634-agent-sdk-patterns-—-typescript-data)
   4. [Advanced API Features & Data References](#64-advanced-api-features-data-references)
      1. [Streaming reference — Python (Data)](#641-streaming-reference-—-python-data)
      2. [Streaming reference — TypeScript (Data)](#642-streaming-reference-—-typescript-data)
      3. [Tool use concepts (Data)](#643-tool-use-concepts-data)
      4. [Tool use reference — Python (Data)](#644-tool-use-reference-—-python-data)
      5. [Tool use reference — TypeScript (Data)](#645-tool-use-reference-—-typescript-data)
      6. [Files API reference — Python (Data)](#646-files-api-reference-—-python-data)
      7. [Files API reference — TypeScript (Data)](#647-files-api-reference-—-typescript-data)
      8. [Message Batches API reference — Python (Data)](#648-message-batches-api-reference-—-python-data)
      9. [Prompt Caching — Design & Optimization (Data)](#649-prompt-caching-—-design-optimization-data)
      10. [HTTP error codes reference (Data)](#6410-http-error-codes-reference-data)
      11. [Live documentation sources (Data)](#6411-live-documentation-sources-data)
   5. [MCP Resource Handling](#65-mcp-resource-handling)
      1. [MCP resource no content (System Reminder)](#651-mcp-resource-no-content-system-reminder)
      2. [MCP resource no displayable content (System Reminder)](#652-mcp-resource-no-displayable-content-system-reminder)

---

## 1. Bash & Shell Operations

Covers all aspects of bash tool usage, from core syntax and command chaining to security sandboxing, timing patterns, and git operations via the shell.

### 1.1 Bash Tool: Core Usage & Syntax

Bash executes shell commands and returns output, with working directory persisting across calls but shell state resetting. Effective usage requires quoting file paths, chaining dependent commands with `&&` for failure propagation, running independent commands in parallel, maintaining absolute paths to preserve context, and preferring dedicated tools over bash equivalents for file operations and text processing.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

#### 1.1.2 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to maintain current working directory by using absolute paths and avoiding cd unless explicitly requested by the user.

#### 1.1.3 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs not to use newlines to separate commands in bash tool calls.

#### 1.1.4 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to run independent bash commands as parallel tool calls in a single message for optimal performance.

#### 1.1.5 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs to always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.6 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands using `&&` in a single bash call to ensure sequential execution with failure propagation.

#### 1.1.7 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially without caring if earlier commands fail.

#### 1.1.8 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between bash commands but shell state does not, with environment initialized from user profile.

#### 1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration in milliseconds for bash commands, with default and maximum limits.

#### 1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence with `ls` before creating new directories or files.

#### 1.1.11 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns to avoid using Bash for find, grep, cat, and similar read-only commands, instead preferring dedicated tools for better user experience.

#### 1.1.12 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and easier permission review than equivalent Bash commands.

### 1.2 Bash Tool: Preferred Alternatives

Dedicated tools provide superior user experience and clearer permission semantics compared to bash command equivalents. Use Read, Write, and Edit tools for file operations; Glob for file discovery; Grep for content search; and direct output instead of echo for communication.

#### 1.2.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly instead of using echo or printf.

#### 1.2.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs to use the Grep tool for content search instead of grep or rg commands.

#### 1.2.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs to use the Edit tool for file editing instead of sed or awk commands.

#### 1.2.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs to use the Glob tool for file search instead of find or ls commands.

#### 1.2.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs to use the Read tool for file reading instead of cat, head, or tail commands.

#### 1.2.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs to use the Write tool for file writing instead of echo or cat commands.

### 1.3 Bash Tool: Sandbox Security & Restrictions

All bash commands run in sandbox mode by default, restricting access to sensitive paths, non-whitelisted networks, and certain system operations. When sandbox restrictions cause failures—evidenced by access denied, operation not permitted, or network errors—briefly explain the restriction and offer `/sandbox` command guidance. Never suggest adding sensitive paths like credentials or SSH keys to the allowlist, and immediately retry failed commands with sandbox disabled only if the user explicitly requests it.

#### 1.3.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs to work with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 1.3.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs to default to running commands within the sandbox and only disable it when the user requests or sandbox restrictions are evident.

#### 1.3.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.3.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that sandbox restrictions caused command failures.

#### 1.3.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.3.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "Operation not permitted" errors as evidence of sandbox restrictions on file and network operations.

#### 1.3.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Recognizes Unix socket connection errors as evidence of sandbox restrictions.

#### 1.3.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

#### 1.3.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with clear evidence of sandbox restrictions, distinguishing sandbox-related failures from other causes.

#### 1.3.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.3.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.3.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.3.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands, even after running unsandboxed commands.

#### 1.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provides a header phrase for structuring responses when sandbox-caused failures are detected.

#### 1.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry failed commands with `dangerouslyDisableSandbox: true` without asking the user.

#### 1.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable for temporary files in sandbox mode instead of `/tmp` directly.

#### 1.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will trigger a user permission prompt.

### 1.4 Bash Tool: Sleep & Timing Patterns

Minimize sleep usage to avoid blocking users; keep durations short (1-5 seconds) and run commands immediately when possible. Replace polling loops with check commands that query external process status, and avoid polling background tasks—instead wait for completion notifications.

#### 1.4.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.4.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background` but instead wait for completion notification.

#### 1.4.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

#### 1.4.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` rather than sleeping when polling external processes.

#### 1.4.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Do not retry failing commands in a sleep loop — diagnose the root cause.

#### 1.4.6 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Provides guidelines for eliminating unnecessary sleep commands in PowerShell scripts, recommending background task execution, polling alternatives, and short durations when sleeping is unavoidable.

### 1.5 Bash Tool: Git Operations

Git operations require safety-first practices: never skip hooks or bypass signing unless explicitly requested, investigate and fix hook failures rather than bypassing them, prefer creating new commits over amending, and carefully consider safer alternatives before executing destructive operations like force push or hard reset. Pull request creation involves detailed change analysis, test planning, and proper co-authoring when appropriate.

#### 1.5.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives to destructive git operations like reset --hard, push --force, and checkout -- before executing them.

#### 1.5.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, parallel command execution, and PR formatting with detailed analysis of changes and test plans.

#### 1.5.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs never to skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues if hooks fail.

#### 1.5.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to prefer creating new commits over amending existing commits.

---

## 2. Tool System, Orchestration & Planning

Governs how tools are selected and prioritized, how work is delegated to subagents, how multi-step tasks are tracked, and how implementation plans are structured before execution.

### 2.1 Tool Selection & Usage Policy

Establishes a hierarchical tool preference system where dedicated tools (Read, Write, Glob, Grep, Edit) take precedence over general-purpose alternatives (cat, sed, find, grep), with Bash reserved exclusively for system operations. Parallel execution of independent tool calls maximizes efficiency, while complex codebase exploration delegates to subagents when queries exceed limits.

#### 2.1.1 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Use the Task tool with an exploration subagent for broad codebase research when simple directed searches are insufficient or queries will exceed the limit.

#### 2.1.2 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Use Glob and Grep tools directly for simple, targeted codebase searches like finding specific files, classes, or functions.

#### 2.1.3 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Prefer the Edit tool over sed or awk for file modifications.

#### 2.1.4 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Use the Read tool instead of cat, head, tail, or sed for file access.

#### 2.1.5 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations; default to dedicated tools first and only use Bash when absolutely necessary.

#### 2.1.6 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool instead of grep or rg to search file contents.

#### 2.1.7 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool instead of find or ls to locate files.

#### 2.1.8 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use the Write tool instead of cat heredoc or echo redirection for file creation.

#### 2.1.9 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to maximize efficiency, while running dependent tool calls sequentially.

### 2.2 Subagent & Task Delegation

Governs autonomous task delegation through specialized subagents that handle complex multi-step work in parallel, with context inheritance rules determining prompt specificity. Subagents operate in isolated worktrees, avoid redundant research, and require explicit context (file paths, line numbers) rather than delegating understanding itself.

#### 2.2.1 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses that autonomously handle complex multi-step tasks, with options to fork context or select specific agent types.

#### 2.2.2 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guide for the Task/Agent tool covering subagent spawning, background execution, resumption, worktree isolation, parallel execution, and context preservation. Includes guidance on foreground vs background execution and agent type definitions.

#### 2.2.3 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use the Task tool with specialized subagents to parallelize independent queries or protect context windows, but avoid redundant work by not duplicating subagent research.

#### 2.2.4 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

When delegating to subagents, tailor prompts based on context inheritance: for context-inheriting agents, be directive about scope; for fresh agents, provide full context and rationale. Never delegate understanding—include specific details like file paths and line numbers.

#### 2.2.5 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Demonstrates how coordinator agents delegate tasks to subagents, handle waiting states without fabricating results, and report findings, with examples of forking for independent analysis and handling mid-wait user questions.

#### 2.2.6 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines fork usage for research and implementation work, prohibiting mid-flight output reading and result fabrication, with guidance on cache reuse and progress status communication.

#### 2.2.7 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

User has requested invocation of a specific agent; invoke it with required context.

### 2.3 Task & Todo Management

Structures multi-step work through task lists with state tracking (pending, in_progress, completed), enabling progress visibility and immediate completion marking. Applied to complex tasks with 3+ steps or when users provide multiple items, avoiding overhead for trivial single-step work.

#### 2.3.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with states (pending, in_progress, completed) and dual-form task descriptions. Use for multi-step tasks; avoid for trivial single-step work.

#### 2.3.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress and organize multi-step work. Use for complex tasks with 3+ steps, after receiving new instructions, or when users provide multiple items.

#### 2.3.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Use the TodoWrite tool to break down work into tasks, track progress, and mark tasks complete immediately upon finishing.

#### 2.3.4 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task tracking when relevant, without mentioning the reminder to the user.

#### 2.3.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant, without mentioning the reminder to the user.

### 2.4 Planning & Multi-Agent Coordination

Structured planning phases before implementation and swarm-based parallel agent teams that share task lists and coordinate work.

#### 2.4.1 Planning Mode & Implementation Planning

Enforces a structured planning phase before implementation for non-trivial tasks, using parallel multi-agent exploration to design approaches and identify risks before user approval. Iterative pair-planning with the user captures findings in plan files, with subagents restricted to read-only operations during planning. Advanced modes include critique review and edge case analysis.

##### 2.4.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore the codebase and design implementation approaches for user approval before coding, recommended for non-trivial tasks involving new features, multiple approaches, architectural decisions, or multi-file changes.

##### 2.4.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning phase and requests user approval of the implementation plan. Use only for code implementation tasks, not research or exploration; avoid redundant approval questions.

##### 2.4.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Activates a five-phase planning workflow with parallel exploration and multi-agent planning, preventing execution until plan approval. Phases include initial understanding, design, review, implementation, and exit, with support for launching multiple exploration and planning agents in parallel.

##### 2.4.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning with the user through exploration, plan updates, and targeted questions. Claude reads code, captures findings in the plan file, and asks clarifying questions only for decisions that require user input, repeating until the plan is complete.

##### 2.4.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagents to read-only operations and plan file editing during plan mode, requiring comprehensive answers and clarifying questions before proceeding.

##### 2.4.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after a previous exit, requiring evaluation of the existing plan against the current request and appropriate modification or replacement.

##### 2.4.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Plan mode has been exited; you can now make edits, run tools, and take actions, with the plan file available for reference if needed.

##### 2.4.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and instructs Claude to continue working on it if relevant.

##### 2.4.1.9 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Activates an advanced planning mode using parallel multi-agent exploration to create a detailed implementation plan, with critique review and strict plan-only execution. Includes risk analysis, edge case identification, and verification steps without implementation.

##### 2.4.1.10 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly after implementation.

##### 2.4.1.11 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Phase four of plan mode writes the final plan to file, listing file paths and changes without prose, referencing existing functions, and ending with a single verification command within 40 lines.

#### 2.4.2 Multi-Agent Team Coordination

Enables swarm-based parallel work through named agent teams that share task lists and communicate via messaging protocol. Teams discover teammates through config files, claim tasks respecting dependencies, and coordinate shutdown before cleanup, with shared memory accessible to all members.

##### 2.4.2.1 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to teammates in agent swarms using name-based addressing. Handles protocol responses for shutdown and plan approval requests; plain text output is not visible to other agents.

##### 2.4.2.2 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages agent teams and swarms, enabling parallel work through task assignment, message delivery, and idle state management. Teams correspond 1:1 with task lists; teammates are discovered via config files and communicated with by name.

##### 2.4.2.3 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion. Fails if active team members remain; must gracefully terminate teammates before cleanup.

##### 2.4.2.4 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for finding and claiming available tasks from the shared task list, preferring lowest ID first and respecting task dependencies and blocking relationships.

##### 2.4.2.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with a name and identity, directing it to read team config, check task lists, and communicate with teammates by name rather than UUID.

##### 2.4.2.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before returning a response to the user in non-interactive mode.

##### 2.4.2.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool for teammate communication, with specific names or broadcast to all, since plain text responses are not visible to teammates.

##### 2.4.2.8 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and type description for injection into conversation context.

---

## 3. Memory, Session State & Communication

Persistent knowledge storage, session tracking, conversation summarization, and the hook system that intercepts lifecycle events to maintain accurate context across interactions.

### 3.1 Knowledge & Context Persistence

Mechanisms for storing institutional knowledge, summarizing conversations, and tracking session state and file modifications across context windows.

#### 3.1.1 Memory & Knowledge Persistence

Persistent storage system that captures institutional knowledge, user context, and task-specific discoveries across conversations. Agents consolidate memories through reflective passes, selectively attach relevant files to maintain context, and update session records with structured, token-aware documentation that preserves exact formatting and enables efficient task resumption.

##### 3.1.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, including its type description.

##### 3.1.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

##### 3.1.1.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Instructs agents to update memory with domain-specific discoveries during task execution, building institutional knowledge across conversations with tailored examples for code reviewers, test runners, architects, and documentation writers.

##### 3.1.1.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory purpose as capturing role, goals, responsibilities, and knowledge to tailor behavior and collaboration style, while avoiding negative judgements and focusing on work-relevant information.

##### 3.1.1.5 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type that stores guidance about work approaches, recording both successes and failures while checking for contradictions with team memories.

##### 3.1.1.6 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs a multi-phase reflective memory consolidation pass by orienting on existing memories, gathering signal from transcripts and logs, merging updates into topic files, and pruning the index to stay under size limits.

##### 3.1.1.7 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to attach for the main agent, filtering out usage documentation for recently-used tools while retaining warnings and known issues.

##### 3.1.1.8 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations while preserving exact structure, section headers, and italic descriptions. Emphasizes detailed, info-dense content with specifics like file paths and error messages, respects token limits per section, and maintains continuity via Current State updates.

##### 3.1.1.9 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory `summary.md` files, organizing current state, task specification, files, workflow, errors, codebase documentation, learnings, results, and worklog.

#### 3.1.2 Conversation & Context Summarization

Structured summarization of conversations that preserves technical details, code snippets, and problem-solving context across context windows. Summaries organize requests, concepts, errors, and next steps to enable efficient task continuation and maintain full technical accuracy without losing critical information.

##### 3.1.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized by primary request, technical concepts, files and code sections, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps with full code snippets and technical accuracy.

##### 3.1.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes only the recent portion of a conversation by organizing primary requests, technical concepts, files and code sections, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps.

##### 3.1.2.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs creation of structured continuation summaries covering task overview, current state, discoveries, next steps, and context preservation to enable efficient task resumption across context windows.

#### 3.1.3 Session & State Management

Real-time awareness of session state, file modifications, and resource constraints. Tracks cross-machine continuity, external file changes, IDE interactions, and resource usage to maintain accurate context and prevent unintended reversions or conflicts during task execution.

##### 3.1.3.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory may have changed.

##### 3.1.3.2 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

A file was read before conversation summarization but is too large to include; use the Read tool to access it if needed.

##### 3.1.3.3 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warning that a file exists but contains no content.

##### 3.1.3.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

A file was modified externally by the user or linter; account for these changes and do not revert them unless explicitly requested.

##### 3.1.3.5 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

User opened a file in the IDE, which may or may not relate to the current task.

##### 3.1.3.6 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warning that the requested read offset exceeds the file length; the file has fewer lines than specified.

##### 3.1.3.7 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

A large file was truncated to the first N lines; use the Read tool to access additional content if needed.

##### 3.1.3.8 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in the IDE, providing the file path and line range for context.

##### 3.1.3.9 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 3.1.3.10 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

##### 3.1.3.11 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to new diagnostic issues detected in the code or project.

##### 3.1.3.12 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and to follow its guidelines.

### 3.2 Automation Hooks & Slash Commands

Event-driven hooks that intercept Claude Code lifecycle moments, and user-invocable slash commands that encapsulate repeatable workflows.

#### 3.2.1 Hook System & Lifecycle Events

Event-driven automation framework that intercepts Claude Code lifecycle moments—tool execution, permissions, notifications, and memory compaction—enabling custom logic, permission control, and structured feedback through command, prompt, and agent hooks with JSON-based communication.

##### 3.2.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines hook system for Claude Code lifecycle events with command, prompt, and agent hook types, supporting permission requests, pre/post tool execution, notifications, and compaction with structured JSON input/output and common patterns.

##### 3.2.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Additional context provided by a hook.

##### 3.2.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

A blocking hook command encountered an error.

##### 3.2.1.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for hook stopped continuation messages.

##### 3.2.1.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

A hook stopped continuation with a message.

##### 3.2.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Displays a success message when a hook completes, showing the hook name and its output content.

#### 3.2.2 Skills & Slash Commands

User-invocable specialized capabilities accessed via slash commands that encapsulate repeatable workflows and domain-specific logic. Skills are discovered, executed, and created through structured interviews that analyze inputs, steps, and success criteria to generate reusable automation.

##### 3.2.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within conversations. Must invoke before generating other responses when a skill matches user intent; skills are listed in system reminders.

##### 3.2.2.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute user-invocable skills invoked via slash commands like /commit; only invoke skills listed in the tool's user-invocable section.

##### 3.2.2.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Reminds Claude to follow guidelines for skills that were invoked during the current session.

##### 3.2.2.4 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable session processes into reusable skills through multi-round user interviews, analyzing inputs, steps, success criteria, and constraints, then generating a SKILL.md file with frontmatter, step annotations, and execution guidance.

### 3.3 Session Discovery & Output Style

Session metadata generation and search, plus standardized conventions for how Claude formats and communicates responses.

#### 3.3.1 Session Metadata & Discovery

Generates and retrieves session identifiers including titles and branch names following naming conventions, and enables session discovery through metadata-driven search with tag prioritization and semantic matching.

##### 3.3.1.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise, sentence-case session titles (3–7 words) that capture the main topic or goal, returning JSON with a single title field.

##### 3.3.1.2 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates concise session titles (max 6 words, sentence case) and git branch names (max 4 words, lowercase with dashes, prefixed with 'claude/') from session descriptions.

##### 3.3.1.3 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Agent for finding relevant sessions by matching user queries against session metadata including tags, titles, branches, summaries, and transcripts. Prioritizes exact tag matches, then partial matches, then semantic similarity, with inclusive matching strategy to avoid missing relevant results.

#### 3.3.2 Output Style & Communication

Standardizes how Claude communicates work through concise, answer-first responses with precise code citations and consistent formatting. Establishes conventions for agent summaries, file path references, and response structure to maximize clarity and navigability.

##### 3.3.2.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler, and focusing text output on decisions, status updates, and blockers.

##### 3.3.2.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing code for easy user navigation to source locations.

##### 3.3.2.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 3.3.2.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads requiring absolute file paths, selective code snippet inclusion, emoji avoidance, and proper punctuation before tool calls.

##### 3.3.2.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Defines strict formatting rules for agent action summaries: 3-5 words in present tense (-ing form), referencing files or functions rather than branches, with examples of acceptable and unacceptable formats.

---

## 4. File, Web & Execution Tools

Concrete tools for reading and writing files, searching the web, running notebooks and scripts, scheduling tasks, managing git worktrees, and interacting with users.

### 4.1 File System & Code Intelligence

Local filesystem operations including targeted edits, multi-format reading, regex search, and IDE-like code navigation.

#### 4.1.1 File System Tools

Local filesystem operations for reading, writing, and searching files with code-aware features. Edit performs targeted string replacements while preserving formatting; Write creates or overwrites files; ReadFile handles multiple formats including images and PDFs; Grep enables regex-based content search; LSP provides IDE-like code intelligence for navigation and type information.

##### 4.1.1.1 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with guidance on preserving indentation, preferring existing files over new ones, and using `replace_all` for unique matching or bulk renaming.

##### 4.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, overwriting existing files. Prefer Edit tool for modifications; avoid creating documentation or README files unless explicitly requested.

##### 4.1.1.3 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges for large files), and Jupyter notebooks. Requires absolute paths and defaults to reading a limited number of lines.

##### 4.1.1.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Ripgrep-based content search tool supporting regex patterns, file filtering by glob or type, and multiple output modes. Always use this tool instead of bash grep commands for correct permissions.

##### 4.1.1.5 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides code intelligence via Language Server Protocol, supporting operations like definition lookup, reference finding, hover information, symbol search, and call hierarchy analysis across the workspace.

#### 4.1.2 Git Worktree Management

Isolates work into separate git worktrees for parallel branch development without switching contexts. EnterWorktree creates and activates an isolated session; ExitWorktree returns to the original directory with cleanup options. Git status tracking provides branch and commit visibility.

##### 4.1.2.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, only when explicitly requested by the user. Requires a git repository or VCS-agnostic hooks, and prevents use if already in a worktree.

##### 4.1.2.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree and returns to the original directory, with options to keep or remove the worktree. Only operates on EnterWorktree sessions; safely no-ops if called outside a worktree context.

##### 4.1.2.3 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git state including branch, main branch reference, status, and recent commits as a conversation snapshot.

### 4.2 Web, Scheduling & External Data

Web fetch and search for current information beyond training data, plus cron-based scheduling for recurring and one-shot task automation.

#### 4.2.1 Web & External Data Access

Retrieves and processes current web information beyond training data. WebFetch converts HTML to markdown with caching; WebSearch returns indexed results with mandatory source attribution. A specialized summarizer enforces quote limits and license compliance when condensing verbose content.

##### 4.2.1.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a small model. Includes 15-minute cache, handles redirects, and prefers MCP-provided alternatives when available.

##### 4.2.1.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff, returning results as markdown hyperlinks. Mandatory to include a Sources section in responses; supports domain filtering and requires current year in queries.

##### 4.2.1.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing 125-character quote limits for untrusted domains, using quotation marks for exact language, and respecting open-source licenses.

#### 4.2.2 Scheduling & Cron Jobs

Schedules recurring and one-shot tasks using cron expressions with timezone awareness and load-balancing strategies. CronCreate manages job scheduling with jitter and durability options; /loop and /schedule commands provide user-friendly interfaces for recurring task automation and remote agent execution.

##### 4.2.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Enables scheduling one-shot or recurring cron-based jobs using standard 5-field cron syntax in user's local timezone, with guidance on avoiding :00 and :30 minute marks for load distribution, jitter behavior, and optional durability for persistence across restarts.

##### 4.2.2.2 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts to cron expression, and schedules recurring tasks with automatic execution of the prompt at the specified cadence.

##### 4.2.2.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via the Anthropic cloud API, supporting creation, updates, listing, and immediate execution with timezone conversion and MCP connector configuration.

### 4.3 Interactive & Execution Environments

Jupyter notebook editing, PowerShell execution, browser and computer automation, and utilities for timing control and tool discovery.

#### 4.3.1 Notebook & Command Execution

Tools for interactive computing environments and system command execution. Jupyter notebook cell editing enables programmatic modification of notebook contents, while PowerShell execution provides command-line access with configurable timeouts and output constraints.

##### 4.3.1.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replaces the contents of a specific cell in a Jupyter notebook, supporting insert and delete operations. Requires absolute paths and uses zero-indexed cell numbering.

##### 4.3.1.2 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with configurable timeout and output limits. Emphasizes using specialized tools for file operations and git commands; supports chaining with semicolons and provides syntax guidance for cmdlets and string interpolation.

#### 4.3.2 Browser & Computer Automation

Enables programmatic control of Chrome browsers through mouse, keyboard, and visual inspection. Provides tools for UI interaction, debugging via console output, session management, and GIF recording with frame capture for reliable automation workflows.

##### 4.3.2.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the computer automation tool for controlling a Chrome browser via mouse and keyboard, with guidance on precise cursor positioning and screenshot consultation.

##### 4.3.2.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action types for browser automation including clicks, typing, scrolling, keyboard input, and element inspection. Supports drag operations, zooming, and hover states for UI interaction.

##### 4.3.2.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with frame capture, console debugging with pattern filtering, alert avoidance, loop prevention, and tab context initialization at session start.

##### 4.3.2.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the two-step process of loading with select query followed by tool invocation.

#### 4.3.3 Execution Control & Tool Discovery

Utilities for managing execution flow and accessing tool capabilities. Sleep provides interruptible delays for timing control, ToolSearch enables dynamic discovery of available tools by name or keyword, and the Advisor tool facilitates validation of approaches before committing to work.

##### 4.3.3.1 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with user interrupt capability. Preferred over bash sleep; supports concurrent operation and periodic check-ins via tick prompts.

##### 4.3.3.2 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by query, supporting exact name selection, keyword search, and name-requirement filtering. Returns matched tools as callable JSONSchema definitions.

##### 4.3.3.3 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the advisor tool, which forwards conversation history to a stronger reviewer model. Call before substantive work, when stuck, or before declaring completion to validate approach and findings.

### 4.4 User Interaction & Learning Modes

Tools for gathering user decisions with visual previews, delivering formatted messages, and enabling educational collaborative workflows.

#### 4.4.1 User Interaction & Question Tools

Facilitates user engagement through clarifying questions, visual option previews, and message delivery. AskUserQuestion gathers preferences and decisions with optional HTML preview fields for side-by-side comparison; SendUserMessage delivers markdown-formatted replies with attachments and status indicators.

##### 4.4.1.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs when to use AskUserQuestion for gathering user preferences, clarifying ambiguous instructions, and offering implementation choices during execution, with special handling for plan mode approval.

##### 4.4.1.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Explains how to use the optional preview field on single-select question options to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML fragments.

##### 4.4.1.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using monospace markdown, supporting ASCII mockups, code snippets, diagrams, and configuration examples for visual comparison.

##### 4.4.1.4 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown-formatted messages to users with optional file attachments. Uses status labels ('normal' or 'proactive') to indicate intent and context for message routing.

##### 4.4.1.5 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to send all user-visible replies through SendUserMessage, acknowledging work before executing, and keeping messages tight with specific decisions and file references rather than filler.

#### 4.4.2 Learning & Teaching Modes

Enables collaborative, educational workflows by requesting human input on design decisions, providing step-by-step guidance through tooltips, and explaining implementation choices specific to the codebase.

##### 4.4.2.1 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct tool access. Activated by learning-oriented phrases like 'teach me' or 'show me how'.

##### 4.4.2.2 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions on design decisions and algorithms for code over 20 lines, using TODO(human) markers and Learn by Doing requests, while balancing task completion with educational value.

##### 4.4.2.3 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing in learning mode, focusing on implementation choices specific to the codebase rather than general programming concepts.

---

## 5. Agent Workflows, Code Quality & Development

Specialized agent personas, git and GitHub workflows, verification and testing, code quality guidelines, security analysis, and configuration management for software development.

### 5.1 Specialized Agents & Parallel Execution

Focused subagent roles for exploration, planning, and execution phases, plus batch processing that distributes large-scale changes across isolated worktrees.

#### 5.1.1 Specialized Agent Personas

Focused subagent roles for distinct phases of software development. Exploration agents rapidly analyze codebases read-only, planning agents design implementation strategies, and worker agents execute directives with structured result reporting. Each persona optimizes for its specific task scope.

##### 5.1.1.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration specialist that rapidly finds files by glob patterns, searches code with regex, and answers questions about codebase structure without modifying files.

##### 5.1.1.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code across large codebases, and executing multi-step tasks while reporting findings concisely to the caller.

##### 5.1.1.3 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent that explores codebases in read-only mode to design implementation plans by understanding requirements, identifying patterns, and detailing step-by-step strategies with critical files.

##### 5.1.1.4 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Forked worker sub-agent that executes directives directly without spawning further sub-agents, using tools silently and reporting structured results (scope, result, key files, files changed, issues) in plain text under 500 words.

#### 5.1.2 Batch Processing & Parallel Work

Orchestrates large-scale codebase changes by decomposing work into independent units executed in parallel across isolated worktrees, with worker agents handling implementation, testing, and PR creation autonomously.

##### 5.1.2.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining e2e test recipes, and spawning background worker agents with isolated worktrees that run in parallel.

##### 5.1.2.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

After implementing changes, simplify code using the Skill tool, run unit tests, perform end-to-end testing, commit and push with a PR, then report the PR URL or reason for failure.

### 5.2 Git, GitHub & Documentation Agents

Agents and workflows for commit creation, pull request management, code review, and maintaining architectural documentation.

#### 5.2.1 Git & GitHub Integration

Agents and workflows for version control operations and pull request management. Commit and PR creation agents handle repository changes with safety protocols, while review and comment agents provide code feedback and visibility into GitHub discussions. Includes automation templates for Claude Code integration.

##### 5.2.1.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository conventions, and executing the commit with safety protocols preventing amendments and secret leakage.

##### 5.2.1.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request by analyzing all changes, creating a feature branch, pushing to origin, and using gh pr create or edit with safety protocols preventing force pushes and secret exposure.

##### 5.2.1.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including both PR-level and code review comments with file/line context, formatted with diff hunks and threaded replies.

##### 5.2.1.4 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, correctness, conventions, performance, test coverage, and security with concise formatted feedback.

##### 5.2.1.5 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template for a pull request description when installing Claude Code GitHub App integration, explaining what Claude Code is, how it works, security considerations, and next steps for using @claude mentions.

##### 5.2.1.6 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, pull requests, or comments. Includes permissions for reading CI results and optional custom prompt configuration.

#### 5.2.2 Documentation & Knowledge Agents

Maintains and surfaces architectural knowledge through dynamic documentation updates and guided API/SDK learning, prioritizing high-signal entry points over exhaustive implementation details.

##### 5.2.2.1 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Updates Magic Doc files with new learnings from conversations, preserving headers and maintaining current state. Emphasizes terseness, high-signal content focused on architecture and entry points rather than exhaustive implementation details or obvious code mechanics.

##### 5.2.2.2 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, the Claude Agent SDK, and the Claude API by fetching official documentation, providing clear guidance, and referencing exact documentation URLs.

### 5.3 Verification, Debugging & Code Quality

Systematic validation through adversarial testing, code quality analysis, debugging diagnostics, and disciplined coding practices that eliminate unnecessary complexity.

#### 5.3.1 Verification & Quality Assurance

Systematic approaches to validating code changes through execution and testing. Verification skills automate testing across project types using specialized tools like Playwright and HTTP clients, while the verification specialist agent performs adversarial testing to catch edge cases, concurrency issues, and boundary violations before declaring success.

##### 5.3.1.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow for validating code changes by reading diffs, forming claims, running the app to exercise changed code, and reporting PASS/FAIL/BLOCKED verdicts with captured evidence at the observable surface.

##### 5.3.1.2 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying CLI changes by building, running with test arguments, capturing output/exit codes, and comparing to expected behavior.

##### 5.3.1.3 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying server/API changes by starting the server, making HTTP requests with curl, capturing responses, and validating status/headers/body against expected behavior.

##### 5.3.1.4 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive onboarding for creating verifier skills that automatically verify code changes. Covers auto-detection of project type, verification tool setup (Playwright, Tmux, HTTP), interactive Q&A for configuration, and skill generation with allowed-tools configuration.

##### 5.3.1.5 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial verification agent that tests implementations by running builds, test suites, linters, and adversarial probes (concurrency, boundaries, idempotency, orphan operations) to issue PASS/FAIL/PARTIAL verdicts. Requires command output for every check, avoids reading code as verification, and recognizes rationalization patterns that skip actual testing.

#### 5.3.2 Code Quality & Debugging

Tools for identifying code quality issues, refactoring opportunities, and runtime problems. Analyzes code for redundancy and inefficiency, diagnoses session failures through log inspection and process monitoring, and provides actionable remediation guidance.

##### 5.3.2.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel agents to identify code reuse opportunities, quality issues (redundant state, parameter sprawl, leaky abstractions), and efficiency problems (unnecessary work, missed concurrency, hot-path bloat).

##### 5.3.2.2 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 5.3.2.3 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, checking CPU/memory/state, gathering debug context, and posting diagnostic reports to Slack.

#### 5.3.3 Code Quality & Task Execution Guidelines

Establishes disciplined coding practices that eliminate unnecessary complexity, scope creep, and defensive patterns. Emphasizes matching implementation to actual requirements, deleting unused code completely, avoiding premature abstractions, and prioritizing security while trusting framework guarantees at system boundaries.

##### 5.3.3.1 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Empowers Claude to tackle ambitious tasks by deferring to user judgment on scope and complexity rather than imposing artificial limitations.

##### 5.3.3.2 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs informing users about help and feedback channels when requested.

##### 5.3.3.3 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs preferring edits to existing files over creating new ones to prevent file bloat and build on established work.

##### 5.3.3.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Prohibits backwards-compatibility shims and cleanup comments, directing complete deletion of confirmed unused code.

##### 5.3.3.5 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Prevents creating helpers or utilities for one-time operations or hypothetical requirements, matching complexity to actual task needs.

##### 5.3.3.6 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Directs avoiding time predictions for task completion, focusing on what needs doing rather than duration.

##### 5.3.3.7 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Restricts scope to requested work only, prohibiting feature additions, refactoring, docstrings, or improvements beyond the stated task.

##### 5.3.3.8 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Eliminates error handling for impossible scenarios, validating only at system boundaries while trusting internal code and framework guarantees.

##### 5.3.3.9 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires reading and understanding code before proposing modifications to ensure informed changes.

##### 5.3.3.10 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Prioritizes avoiding OWASP top 10 vulnerabilities including injection, XSS, and SQL injection, with immediate remediation of any insecure code.

##### 5.3.3.11 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames user requests as software engineering tasks including bug fixes, feature additions, refactoring, and code explanation, interpreting unclear instructions within this context.

### 5.4 Security, Autonomous Execution & Agent Design

Security controls for malware analysis and prompt injection prevention, autonomous execution safety guardrails, and tools for designing custom agent personas with validated system prompts.

#### 5.4.1 Security & Malware Analysis

Protects against malicious activities and autonomous agent risks through layered security controls. Permits authorized security testing and malware analysis while blocking unauthorized attacks, prompt injection, credential leakage, and data exfiltration. Employs security monitoring with strict block/allow rules and vulnerability assessment with high confidence thresholds.

##### 5.4.1.1 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, CTF challenges, and defensive security while refusing malicious requests including DoS attacks, supply chain compromise, and detection evasion without clear authorization context.

##### 5.4.1.2 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, while allowing analysis, reporting, and behavior explanation.

##### 5.4.1.3 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Acts as a security monitor evaluating autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with detailed evaluation rules for composite actions, file execution, and user intent.

##### 5.4.1.4 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules (git destructive, code from external, production deploy, credential leakage, data exfiltration, etc.) and allow exceptions that govern which tool actions autonomous agents may perform.

##### 5.4.1.5 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review agent that analyzes code diffs for exploitable vulnerabilities with high confidence thresholds, excluding DOS, secrets on disk, and rate-limiting issues. Uses three-phase methodology: repository context research, comparative analysis against existing patterns, and vulnerability assessment with strict false-positive filtering and confidence scoring.

#### 5.4.2 Autonomous & Auto Mode Execution

Governs autonomous task execution with continuous action preference while maintaining safety guardrails. Requires user confirmation for destructive or hard-to-reverse operations, permits local reversible actions freely, and handles permission denials by adjusting approach rather than retrying.

##### 5.4.2.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous execution with immediate action, minimal interruptions, and preference for implementation over planning, while prohibiting destructive actions and data exfiltration without explicit user authorization.

##### 5.4.2.2 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes careful action execution requiring user confirmation for destructive, hard-to-reverse, or shared-system operations while permitting local reversible actions freely, with guidance on investigating obstacles before bypassing safety checks.

##### 5.4.2.3 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Describes tool execution in permission modes, handling user denials by adjusting approach rather than retrying, and optionally using AskUserQuestion to clarify denial reasons.

##### 5.4.2.4 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

When tool execution is denied, Claude may attempt reasonable alternatives but should not work around restrictions maliciously, and should explain to the user if the capability is essential.

#### 5.4.3 Agent Design & Safety

Designs custom AI agents with optimized system prompts and expert personas, validates auto-mode classifier rules for correctness, and enforces bash command safety through prefix detection and injection prevention.

##### 5.4.3.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design high-performance custom AI agents by extracting user intent, creating expert personas, architecting comprehensive system prompts, optimizing for performance, and generating concise identifiers with usage examples in JSON format.

##### 5.4.3.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for Claude Code, evaluating clarity, completeness, conflicts, and actionability to ensure the LLM classifier can correctly auto-approve or block tool calls.

##### 5.4.3.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief while adding context for complex piped or flag-heavy commands.

##### 5.4.3.4 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands to enforce safety policies, returning the detected prefix or 'command_injection_detected' for allowlist-based execution control.

### 5.5 Project Configuration & Operational Tooling

Automated CLAUDE.md creation and configuration management, hook condition verification, usage analytics, and special execution modes for alternative runtime contexts.

#### 5.5.1 Project Configuration & Documentation Setup

Automated creation and management of CLAUDE.md files and Claude Code configuration. Covers codebase analysis, iterative documentation generation, configuration file updates with validation, and structured verification workflows for hooks and environment settings.

##### 5.5.1.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation files by documenting common commands, high-level architecture, and project-specific conventions without repeating obvious practices.

##### 5.5.1.2 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks in a repository. Covers codebase exploration, user interviews, proposal refinement, and iterative creation of project/personal instructions, skills, and hooks.

##### 5.5.1.3 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json) by reading existing config, merging changes, validating JSON/schema, and confirming updates to hooks, permissions, and environment variables.

##### 5.5.1.4 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks: dedup check, command construction, pipe-test, JSON write, syntax validation, proof of execution, and handoff with user guidance.

#### 5.5.2 Hook Condition & Completion Verification

Evaluates hook trigger conditions and verifies agent task completion by analyzing conversation state and codebase context, returning structured validation results.

##### 5.5.2.1 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether the condition is met or providing a reason for failure.

##### 5.5.2.2 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured output indicating whether an agent completed its assigned plan.

#### 5.5.3 Usage Insights & Analytics

Analyzes Claude Code session data to surface working patterns, friction points, and ambitious workflow opportunities, extracting structured insights that guide feature recommendations and usage optimization.

##### 5.5.3.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part usage insights summary covering what's working, hindrances, quick wins, and ambitious workflows for Claude Code users, using a coaching tone without numerical stats or category names.

##### 5.5.3.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns, returning three friction categories with examples and explanations of what could be done differently.

##### 5.5.3.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies three ambitious future opportunities for autonomous AI-assisted development workflows, including what's possible, how to try it, and copyable prompts for experimentation.

##### 5.5.3.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts including goal categories, user satisfaction signals, and friction types, with strict guidelines for counting only explicit user requests and signals.

##### 5.5.3.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations from MCP Servers, Custom Skills, Hooks, Headless Mode, and Task Agents, plus usage patterns tailored to user sessions.

#### 5.5.4 Special Execution Modes & Configuration

Provides alternative execution contexts including minimal mode with reduced features, session-scoped file management, prompt prediction, lightweight side-question handling, and terminal status line configuration.

##### 5.5.4.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Minimal mode disables hooks, LSP, plugins, auto-memory, and background features while requiring explicit context via CLI flags for authentication and configuration.

##### 5.5.4.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, supporting intermediate results, scripts, and working files.

##### 5.5.4.3 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent context, avoiding evaluative language and Claude-voice suggestions.

##### 5.5.4.4 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer a side question directly without tools in a single response; you are a lightweight agent with no file access, command execution, or search capabilities, and cannot reference previous work or promise follow-up actions.

##### 5.5.4.5 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell config files, converting escape sequences to shell commands, and updating settings.json. Provides JSON input schema for status line commands including session metadata, model info, context usage, rate limits, and optional vim/agent/worktree data.

---

## 6. Claude API & SDK References

Complete reference documentation for building with Claude across all languages and surfaces, from high-level routing guides to detailed SDK patterns, streaming, tool use, and advanced API features.

### 6.1 Build with Claude API Skills

High-level routing guides for building with Claude API, providing language detection, surface selection (single call vs workflow vs agent), architecture overview, and comprehensive navigation to language-specific reference documentation.

#### 6.1.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building with Claude API, covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, compaction, prompt caching, and comprehensive reading guide for language-specific documentation.

#### 6.1.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, routing users to appropriate sections for single calls, streaming, caching, tool use, batches, and error handling.

### 6.2 Claude API SDK References

Language-specific SDK documentation for Python, TypeScript, Go, Java, Ruby, PHP, C#, and raw HTTP, covering client initialization, streaming, vision, tool use, prompt caching, extended thinking, structured outputs, and cost optimization. The model catalog provides current model IDs, context windows, pricing, and capability discovery via the Models API.

#### 6.2.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, system prompts, vision (base64 and URL images), prompt caching with automatic and manual control, extended thinking (adaptive and deprecated), error handling, multi-turn conversations, compaction for long contexts, and cost optimization strategies.

#### 6.2.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, system prompts, vision (URL and base64 images), prompt caching with automatic and manual control, extended thinking (adaptive and deprecated), error handling, multi-turn conversations, compaction for long contexts, and cost optimization strategies.

#### 6.2.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming with message accumulation, tool use via BetaToolRunner and manual loops, thinking (adaptive and deprecated), prompt caching, server-side tools, PDF input, Files API, and context editing.

#### 6.2.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking (adaptive and deprecated), tool use with annotated classes and BetaToolRunner, memory tool handler, effort parameter, prompt caching, token counting, structured output, PDF input, server-side tools, and Files API.

#### 6.2.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, tool use with BetaToolRunner and manual loops, and prompt caching with automatic and manual control.

#### 6.2.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization for Anthropic/Bedrock/Vertex/Foundry, basic requests, streaming, tool use with BetaRunnableTool and manual loops, extended thinking (adaptive and deprecated), prompt caching, structured outputs via StructuredOutputModel, and beta features.

#### 6.2.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking (adaptive and deprecated fixed-budget), tool use with manual JSON schema, effort parameter, prompt caching, token counting, structured output, PDF input, server-side tools, and beta features like context editing and Files API.

#### 6.2.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, response parsing with jq, streaming (SSE), tool use loops, prompt caching, and extended thinking with required headers.

#### 6.2.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact model IDs, context windows, max output tokens, and pricing. Includes programmatic model discovery via Models API for live capability data (thinking, vision, effort, structured outputs, context management). Current models: Opus 4.6, Sonnet 4.6, Haiku 4.5.

### 6.3 Agent SDK References & Patterns

Complete Agent SDK documentation and implementation patterns for Python and TypeScript, covering the query interface, built-in tools, permission modes, MCP integration, hooks, subagents, session management, and error recovery with practical examples.

#### 6.3.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Complete Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP support, hooks, subagents, message types, session history, and best practices for agent development.

#### 6.3.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference covering installation, query interface, built-in tools, permission modes, MCP support, hooks, subagents, message types, session history, and best practices.

#### 6.3.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, session resumption, history retrieval, and session mutations. Includes examples for tool definition, hook implementation, and structured output handling.

#### 6.3.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns demonstrating basic agents, hooks, subagents, MCP server integration, session resumption, history retrieval, and session mutations with async/await syntax.

### 6.4 Advanced API Features & Data References

Detailed references for streaming, tool use, file handling, batch processing, and prompt caching optimization across Python and TypeScript. Includes conceptual foundations, server-side tools, structured outputs, error handling strategies, and HTTP status code reference for API troubleshooting.

#### 6.4.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, progress tracking, error handling, and stream event types with practical examples.

#### 6.4.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, tool-use streaming with the tool runner, and best practices for token usage and error handling.

#### 6.4.3 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices.

#### 6.4.4 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference covering tool runner with @beta_tool decorator, MCP tool conversion, manual agentic loops, code execution, memory tool, and structured outputs with Pydantic and strict tool use.

#### 6.4.5 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, server-side tools, code execution with file handling, memory tool, and structured outputs.

#### 6.4.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files (max 500 MB), using them in messages via file_id, and managing files (list, retrieve metadata, delete, download). Includes examples for PDF documents with citations and images.

#### 6.4.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages via file_id, and managing files (list, delete, download). Covers PDF documents with citations and images.

#### 6.4.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, which processes up to 100K requests asynchronously at 50% cost. Covers batch creation, polling, result retrieval, cancellation, and prompt caching integration with complete code examples.

#### 6.4.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Guide to designing prompt-building code for effective caching, covering prefix-stability principles, breakpoint placement patterns, architectural decisions, and silent invalidators that break cache hits without errors.

#### 6.4.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400–529) with causes, fixes, and language-specific exception handling. Covers validation errors, rate limiting, authentication, and retry strategies with typed exception best practices.

#### 6.4.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, including models, features, tools, and SDKs across multiple languages.

### 6.5 MCP Resource Handling

System indicators for MCP resource states when content is unavailable or cannot be displayed in readable format.

#### 6.5.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content to display.

#### 6.5.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content that cannot be displayed in a readable format.
