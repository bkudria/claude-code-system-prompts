# Claude Code System Prompts Index

Authoritative operational and reference material for building, configuring, and deploying Claude Code — covering everything from low-level execution primitives to multi-agent orchestration, enabling developers to construct reliable, extensible AI-driven workflows at any scale.

## Table of Contents

1. [Bash & Shell Operations](#1-bash-shell-operations)
   1. [Bash Command Syntax & Best Practices](#11-bash-command-syntax-best-practices)
      1. [Bash (quote file paths) [Tool Description]](#111-bash-quote-file-paths-tool-description)
      2. [Bash (semicolon usage) [Tool Description]](#112-bash-semicolon-usage-tool-description)
      3. [Bash (sequential commands) [Tool Description]](#113-bash-sequential-commands-tool-description)
      4. [Bash (sleep — keep short) [Tool Description]](#114-bash-sleep-—-keep-short-tool-description)
      5. [Bash (sleep — no polling background tasks) [Tool Description]](#115-bash-sleep-—-no-polling-background-tasks-tool-description)
      6. [Bash (sleep — run immediately) [Tool Description]](#116-bash-sleep-—-run-immediately-tool-description)
      7. [Bash (sleep — use check commands) [Tool Description]](#117-bash-sleep-—-use-check-commands-tool-description)
      8. [Bash (timeout) [Tool Description]](#118-bash-timeout-tool-description)
      9. [Bash (maintain cwd) [Tool Description]](#119-bash-maintain-cwd-tool-description)
      10. [Bash (no newlines) [Tool Description]](#1110-bash-no-newlines-tool-description)
      11. [Bash (parallel commands) [Tool Description]](#1111-bash-parallel-commands-tool-description)
      12. [Bash (working directory) [Tool Description]](#1112-bash-working-directory-tool-description)
      13. [Bash (verify parent directory) [Tool Description]](#1113-bash-verify-parent-directory-tool-description)
      14. [Bash (overview) [Tool Description]](#1114-bash-overview-tool-description)
      15. [One of six rules for using sleep command (System Prompt)](#1115-one-of-six-rules-for-using-sleep-command-system-prompt)
   2. [Bash Sandbox Policy & Diagnostics](#12-bash-sandbox-policy-diagnostics)
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
   3. [Bash Tool Alternatives & Preferred Tools](#13-bash-tool-alternatives-preferred-tools)
      1. [Bash (alternative — communication) [Tool Description]](#131-bash-alternative-—-communication-tool-description)
      2. [Bash (alternative — content search) [Tool Description]](#132-bash-alternative-—-content-search-tool-description)
      3. [Bash (alternative — edit files) [Tool Description]](#133-bash-alternative-—-edit-files-tool-description)
      4. [Bash (alternative — file search) [Tool Description]](#134-bash-alternative-—-file-search-tool-description)
      5. [Bash (alternative — read files) [Tool Description]](#135-bash-alternative-—-read-files-tool-description)
      6. [Bash (alternative — write files) [Tool Description]](#136-bash-alternative-—-write-files-tool-description)
      7. [Bash (built-in tools note) [Tool Description]](#137-bash-built-in-tools-note-tool-description)
      8. [Bash (prefer dedicated tools) [Tool Description]](#138-bash-prefer-dedicated-tools-tool-description)
      9. [Tool usage (reserve Bash) [System Prompt]](#139-tool-usage-reserve-bash-system-prompt)
   4. [PowerShell & Windows Shell](#14-powershell-windows-shell)
      1. [PowerShell (Tool Description)](#141-powershell-tool-description)
      2. [PowerShell edition for 5.1 (System Prompt)](#142-powershell-edition-for-51-system-prompt)
2. [Multi-Agent Systems & Autonomous Execution](#2-multi-agent-systems-autonomous-execution)
   1. [Agent Coordination & Swarms](#21-agent-coordination-swarms)
      1. [Multi-Agent Team Coordination & Swarm Management](#211-multi-agent-team-coordination-swarm-management)
         1. [Team Coordination (System Reminder)](#2111-team-coordination-system-reminder)
         2. [Team Shutdown (System Reminder)](#2112-team-shutdown-system-reminder)
         3. [Team memory content display (System Prompt)](#2113-team-memory-content-display-system-prompt)
         4. [Teammate Communication (System Prompt)](#2114-teammate-communication-system-prompt)
         5. [SendMessageTool (Tool Description)](#2115-sendmessagetool-tool-description)
         6. [TeammateTool (Tool Description)](#2116-teammatetool-tool-description)
         7. [TeamDelete (Tool Description)](#2117-teamdelete-tool-description)
         8. [How to use the SendUserMessage tool (System Prompt)](#2118-how-to-use-the-sendusermessage-tool-system-prompt)
         9. [/batch slash command (Agent Prompt)](#2119-batch-slash-command-agent-prompt)
      2. [Subagent Delegation & Orchestration](#212-subagent-delegation-orchestration)
         1. [Agent (usage notes) [Tool Description]](#2121-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#2122-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (delegate exploration) [System Prompt]](#2123-tool-usage-delegate-exploration-system-prompt)
         4. [Tool usage (subagent guidance) [System Prompt]](#2124-tool-usage-subagent-guidance-system-prompt)
         5. [Writing subagent prompts (System Prompt)](#2125-writing-subagent-prompts-system-prompt)
         6. [Subagent delegation examples (System Prompt)](#2126-subagent-delegation-examples-system-prompt)
         7. [Fork usage guidelines (System Prompt)](#2127-fork-usage-guidelines-system-prompt)
         8. [Worker fork execution (Agent Prompt)](#2128-worker-fork-execution-agent-prompt)
         9. [General purpose (Agent Prompt)](#2129-general-purpose-agent-prompt)
         10. [Explore (Agent Prompt)](#21210-explore-agent-prompt)
   2. [Autonomous Workflows & Scheduling](#22-autonomous-workflows-scheduling)
      1. [Autonomous & Auto Mode Execution](#221-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#2211-auto-mode-system-prompt)
         2. [Auto mode rule reviewer (Agent Prompt)](#2212-auto-mode-rule-reviewer-agent-prompt)
         3. [Worker instructions (System Prompt)](#2213-worker-instructions-system-prompt)
      2. [Scheduling & Cron Job Management](#222-scheduling-cron-job-management)
         1. [CronCreate (Tool Description)](#2221-croncreate-tool-description)
         2. [/loop slash command (Skill)](#2222-loop-slash-command-skill)
         3. [/schedule slash command (Agent Prompt)](#2223-schedule-slash-command-agent-prompt)
      3. [Parallel Tool Execution & Performance](#223-parallel-tool-execution-performance)
         1. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#2231-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         2. [Sleep (Tool Description)](#2232-sleep-tool-description)
         3. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#2233-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
   3. [Agent Design & Creation](#23-agent-design-creation)
      1. [Agent creation architect (Agent Prompt)](#231-agent-creation-architect-agent-prompt)
      2. [Prompt Suggestion Generator v2 (Agent Prompt)](#232-prompt-suggestion-generator-v2-agent-prompt)
      3. [Bash command description writer (Agent Prompt)](#233-bash-command-description-writer-agent-prompt)
3. [Planning, Tasks & Session State](#3-planning-tasks-session-state)
   1. [Implementation Planning & Work Breakdown](#31-implementation-planning-work-breakdown)
      1. [Plan Mode & Implementation Planning](#311-plan-mode-implementation-planning)
         1. [Plan mode is active (5-phase) [System Reminder]](#3111-plan-mode-is-active-5-phase-system-reminder)
         2. [Plan mode is active (iterative) [System Reminder]](#3112-plan-mode-is-active-iterative-system-reminder)
         3. [Plan mode is active (subagent) [System Reminder]](#3113-plan-mode-is-active-subagent-system-reminder)
         4. [Plan mode re-entry (System Reminder)](#3114-plan-mode-re-entry-system-reminder)
         5. [Exited plan mode (System Reminder)](#3115-exited-plan-mode-system-reminder)
         6. [Plan file reference (System Reminder)](#3116-plan-file-reference-system-reminder)
         7. [Ultraplan mode (System Reminder)](#3117-ultraplan-mode-system-reminder)
         8. [Verify plan reminder (System Reminder)](#3118-verify-plan-reminder-system-reminder)
         9. [Phase four of plan mode (System Prompt)](#3119-phase-four-of-plan-mode-system-prompt)
         10. [Remote plan mode (ultraplan) [System Prompt]](#31110-remote-plan-mode-ultraplan-system-prompt)
         11. [Remote planning session (System Prompt)](#31111-remote-planning-session-system-prompt)
         12. [EnterPlanMode (Tool Description)](#31112-enterplanmode-tool-description)
         13. [ExitPlanMode (Tool Description)](#31113-exitplanmode-tool-description)
         14. [Plan mode (enhanced) [Agent Prompt]](#31114-plan-mode-enhanced-agent-prompt)
      2. [Task & Todo Management](#312-task-todo-management)
         1. [Task tools reminder (System Reminder)](#3121-task-tools-reminder-system-reminder)
         2. [TodoWrite reminder (System Reminder)](#3122-todowrite-reminder-system-reminder)
         3. [TaskCreate (Tool Description)](#3123-taskcreate-tool-description)
         4. [TaskList (teammate workflow) [Tool Description]](#3124-tasklist-teammate-workflow-tool-description)
         5. [TodoWrite (Tool Description)](#3125-todowrite-tool-description)
         6. [Tool usage (task management) [System Prompt]](#3126-tool-usage-task-management-system-prompt)
   2. [Context & Session Continuity](#32-context-session-continuity)
      1. [Context Management & Conversation Compaction](#321-context-management-conversation-compaction)
         1. [Partial compaction instructions (System Prompt)](#3211-partial-compaction-instructions-system-prompt)
         2. [Context compaction summary (System Prompt)](#3212-context-compaction-summary-system-prompt)
         3. [Compact file reference (System Reminder)](#3213-compact-file-reference-system-reminder)
         4. [Session continuation (System Reminder)](#3214-session-continuation-system-reminder)
         5. [Conversation summarization (Agent Prompt)](#3215-conversation-summarization-agent-prompt)
         6. [Recent Message Summarization (Agent Prompt)](#3216-recent-message-summarization-agent-prompt)
      2. [Session Metadata & Search](#322-session-metadata-search)
         1. [Session title and branch generation (Agent Prompt)](#3221-session-title-and-branch-generation-agent-prompt)
         2. [Coding session title generator (Agent Prompt)](#3222-coding-session-title-generator-agent-prompt)
         3. [Session Search Assistant (Agent Prompt)](#3223-session-search-assistant-agent-prompt)
      3. [Session & Resource Monitoring](#323-session-resource-monitoring)
         1. [Token usage (System Reminder)](#3231-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#3232-usd-budget-system-reminder)
         3. [Invoked skills (System Reminder)](#3233-invoked-skills-system-reminder)
4. [Memory, Configuration & Extensibility](#4-memory-configuration-extensibility)
   1. [Memory & Knowledge Persistence](#41-memory-knowledge-persistence)
      1. [Memory file contents (System Reminder)](#411-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#412-nested-memory-contents-system-reminder)
      3. [Memory description of user feedback (System Prompt)](#413-memory-description-of-user-feedback-system-prompt)
      4. [Description part of memory instructions (System Prompt)](#414-description-part-of-memory-instructions-system-prompt)
      5. [Agent memory instructions (System Prompt)](#415-agent-memory-instructions-system-prompt)
      6. [Determine which memory files to attach (Agent Prompt)](#416-determine-which-memory-files-to-attach-agent-prompt)
      7. [Dream memory consolidation (Agent Prompt)](#417-dream-memory-consolidation-agent-prompt)
      8. [Session memory update instructions (Agent Prompt)](#418-session-memory-update-instructions-agent-prompt)
      9. [Session memory template (Data)](#419-session-memory-template-data)
   2. [Hooks, Skills & Commands](#42-hooks-skills-commands)
      1. [Hook System Configuration & Lifecycle](#421-hook-system-configuration-lifecycle)
         1. [Hook additional context (System Reminder)](#4211-hook-additional-context-system-reminder)
         2. [Hook blocking error (System Reminder)](#4212-hook-blocking-error-system-reminder)
         3. [Hook stopped continuation prefix (System Reminder)](#4213-hook-stopped-continuation-prefix-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#4214-hook-stopped-continuation-system-reminder)
         5. [Hook success (System Reminder)](#4215-hook-success-system-reminder)
         6. [Hooks Configuration (System Prompt)](#4216-hooks-configuration-system-prompt)
         7. [Agent Hook (Agent Prompt)](#4217-agent-hook-agent-prompt)
         8. [Hook condition evaluator (Agent Prompt)](#4218-hook-condition-evaluator-agent-prompt)
         9. [update-config (7-step verification flow) [Skill]](#4219-update-config-7-step-verification-flow-skill)
      2. [Skills, Slash Commands & Invocation](#422-skills-slash-commands-invocation)
         1. [Skill (Tool Description)](#4221-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#4222-tool-usage-skill-invocation-system-prompt)
         3. [/init CLAUDE.md and skill setup (new version) [Skill]](#4223-init-claudemd-and-skill-setup-new-version-skill)
         4. [Update Claude Code Config (Skill)](#4224-update-claude-code-config-skill)
         5. [Skillify Current Session (System Prompt)](#4225-skillify-current-session-system-prompt)
   3. [Configuration & Environment Isolation](#43-configuration-environment-isolation)
      1. [Configuration & Settings Management](#431-configuration-settings-management)
         1. [Config (Tool Description)](#4311-config-tool-description)
         2. [Minimal mode (System Prompt)](#4312-minimal-mode-system-prompt)
      2. [Worktree & Isolation Management](#432-worktree-isolation-management)
         1. [EnterWorktree (Tool Description)](#4321-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#4322-exitworktree-tool-description)
      3. [Claude Personality & Terminal Integration](#433-claude-personality-terminal-integration)
         1. [Buddy Mode (System Prompt)](#4331-buddy-mode-system-prompt)
         2. [Status line setup (Agent Prompt)](#4332-status-line-setup-agent-prompt)
5. [Code Quality, Security & Testing](#5-code-quality-security-testing)
   1. [Engineering Principles & Code Review](#51-engineering-principles-code-review)
      1. [Code Quality & Engineering Principles](#511-code-quality-engineering-principles)
         1. [Doing tasks (ambitious tasks) [System Prompt]](#5111-doing-tasks-ambitious-tasks-system-prompt)
         2. [Doing tasks (minimize file creation) [System Prompt]](#5112-doing-tasks-minimize-file-creation-system-prompt)
         3. [Doing tasks (no compatibility hacks) [System Prompt]](#5113-doing-tasks-no-compatibility-hacks-system-prompt)
         4. [Doing tasks (no premature abstractions) [System Prompt]](#5114-doing-tasks-no-premature-abstractions-system-prompt)
         5. [Doing tasks (no unnecessary additions) [System Prompt]](#5115-doing-tasks-no-unnecessary-additions-system-prompt)
         6. [Doing tasks (no unnecessary error handling) [System Prompt]](#5116-doing-tasks-no-unnecessary-error-handling-system-prompt)
         7. [Doing tasks (read before modifying) [System Prompt]](#5117-doing-tasks-read-before-modifying-system-prompt)
         8. [Doing tasks (software engineering focus) [System Prompt]](#5118-doing-tasks-software-engineering-focus-system-prompt)
         9. [Doing tasks (no time estimates) [System Prompt]](#5119-doing-tasks-no-time-estimates-system-prompt)
         10. [Doing tasks (help and feedback) [System Prompt]](#51110-doing-tasks-help-and-feedback-system-prompt)
         11. [Executing actions with care (System Prompt)](#51111-executing-actions-with-care-system-prompt)
         12. [Simplify (Skill)](#51112-simplify-skill)
      2. [Advisor & Code Review Integration](#512-advisor-code-review-integration)
         1. [Advisor tool instructions (System Prompt)](#5121-advisor-tool-instructions-system-prompt)
   2. [Security Review & Vulnerability Analysis](#52-security-review-vulnerability-analysis)
      1. [/security-review slash command (Agent Prompt)](#521-security-review-slash-command-agent-prompt)
      2. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#522-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      3. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#523-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      4. [Bash command prefix detection (Agent Prompt)](#524-bash-command-prefix-detection-agent-prompt)
      5. [Censoring assistance with malicious activities (System Prompt)](#525-censoring-assistance-with-malicious-activities-system-prompt)
      6. [Malware analysis after Read tool call (System Reminder)](#526-malware-analysis-after-read-tool-call-system-reminder)
      7. [Doing tasks (security) [System Prompt]](#527-doing-tasks-security-system-prompt)
   3. [Verification, Testing & Quality Assurance](#53-verification-testing-quality-assurance)
      1. [Verification specialist (Agent Prompt)](#531-verification-specialist-agent-prompt)
      2. [Verify skill (Skill)](#532-verify-skill-skill)
      3. [Verify CLI changes (example for Verify skill) [Skill]](#533-verify-cli-changes-example-for-verify-skill-skill)
      4. [Verify server/API changes (example for Verify skill) [Skill]](#534-verify-serverapi-changes-example-for-verify-skill-skill)
      5. [Create verifier skills (Skill)](#535-create-verifier-skills-skill)
      6. [Debugging (Skill)](#536-debugging-skill)
      7. [/stuck slash command (Skill)](#537-stuck-slash-command-skill)
   4. [Git Operations & GitHub Workflow](#54-git-operations-github-workflow)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#541-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#542-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#543-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#544-bash-git-—-prefer-new-commits-tool-description)
      5. [Quick git commit (Agent Prompt)](#545-quick-git-commit-agent-prompt)
      6. [Quick PR creation (Agent Prompt)](#546-quick-pr-creation-agent-prompt)
      7. [/pr-comments slash command (Agent Prompt)](#547-pr-comments-slash-command-agent-prompt)
      8. [/review-pr slash command (Agent Prompt)](#548-review-pr-slash-command-agent-prompt)
      9. [Git status (System Prompt)](#549-git-status-system-prompt)
      10. [GitHub Actions workflow for @claude mentions (Data)](#5410-github-actions-workflow-for-claude-mentions-data)
      11. [GitHub App installation PR description (Data)](#5411-github-app-installation-pr-description-data)
6. [Tools, Integrations & File Operations](#6-tools-integrations-file-operations)
   1. [File System & Editor Tools](#61-file-system-editor-tools)
      1. [File System Operations & State Tracking](#611-file-system-operations-state-tracking)
         1. [File shorter than offset (System Reminder)](#6111-file-shorter-than-offset-system-reminder)
         2. [File truncated (System Reminder)](#6112-file-truncated-system-reminder)
         3. [File exists but empty (System Reminder)](#6113-file-exists-but-empty-system-reminder)
         4. [File modified by user or linter (System Reminder)](#6114-file-modified-by-user-or-linter-system-reminder)
         5. [File opened in IDE (System Reminder)](#6115-file-opened-in-ide-system-reminder)
         6. [ReadFile (Tool Description)](#6116-readfile-tool-description)
         7. [Edit (Tool Description)](#6117-edit-tool-description)
         8. [Write (Tool Description)](#6118-write-tool-description)
         9. [Grep (Tool Description)](#6119-grep-tool-description)
         10. [Tool usage (create files) [System Prompt]](#61110-tool-usage-create-files-system-prompt)
         11. [Tool usage (edit files) [System Prompt]](#61111-tool-usage-edit-files-system-prompt)
         12. [Tool usage (read files) [System Prompt]](#61112-tool-usage-read-files-system-prompt)
         13. [Tool usage (search content) [System Prompt]](#61113-tool-usage-search-content-system-prompt)
         14. [Tool usage (search files) [System Prompt]](#61114-tool-usage-search-files-system-prompt)
         15. [Tool usage (direct search) [System Prompt]](#61115-tool-usage-direct-search-system-prompt)
      2. [Notebook & Specialized File Editing](#612-notebook-specialized-file-editing)
         1. [NotebookEdit (Tool Description)](#6121-notebookedit-tool-description)
      3. [Scratchpad, Temp Files & Session Isolation](#613-scratchpad-temp-files-session-isolation)
         1. [Scratchpad directory (System Prompt)](#6131-scratchpad-directory-system-prompt)
   2. [IDE & Browser Automation](#62-ide-browser-automation)
      1. [IDE Integration & Code Intelligence](#621-ide-integration-code-intelligence)
         1. [Lines selected in IDE (System Reminder)](#6211-lines-selected-in-ide-system-reminder)
         2. [New diagnostics detected (System Reminder)](#6212-new-diagnostics-detected-system-reminder)
         3. [LSP (Tool Description)](#6213-lsp-tool-description)
      2. [Browser Automation & Computer Use](#622-browser-automation-computer-use)
         1. [Computer (Tool Description)](#6221-computer-tool-description)
         2. [Computer action (Tool Parameter)](#6222-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#6223-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#6224-chrome-browser-mcp-tools-system-prompt)
         5. [Computer Use MCP (Skill)](#6225-computer-use-mcp-skill)
   3. [Web Access & External Protocol Tools](#63-web-access-external-protocol-tools)
      1. [Web Search & Content Retrieval](#631-web-search-content-retrieval)
         1. [WebFetch (Tool Description)](#6311-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#6312-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#6313-webfetch-summarizer-agent-prompt)
      2. [MCP Integration & Tool Discovery](#632-mcp-integration-tool-discovery)
         1. [MCP resource no content (System Reminder)](#6321-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#6322-mcp-resource-no-displayable-content-system-reminder)
         3. [ToolSearch (second part) [Tool Description]](#6323-toolsearch-second-part-tool-description)
         4. [MCP Tool Result Truncation (System Prompt)](#6324-mcp-tool-result-truncation-system-prompt)
7. [Communication, Documentation & Learning](#7-communication-documentation-learning)
   1. [Output Formatting & User Messaging](#71-output-formatting-user-messaging)
      1. [Output Style, Formatting & Communication](#711-output-style-formatting-communication)
         1. [Tone and style (code references) [System Prompt]](#7111-tone-and-style-code-references-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#7112-tone-and-style-concise-output-—-short-system-prompt)
         3. [Output efficiency (System Prompt)](#7113-output-efficiency-system-prompt)
         4. [Agent thread notes (System Prompt)](#7114-agent-thread-notes-system-prompt)
         5. [Agent Summary Generation (System Prompt)](#7115-agent-summary-generation-system-prompt)
         6. [Output style active (System Reminder)](#7116-output-style-active-system-reminder)
      2. [User Messaging & Communication Tools](#712-user-messaging-communication-tools)
         1. [SendMessageTool (non-agent-teams) [Tool Description]](#7121-sendmessagetool-non-agent-teams-tool-description)
         2. [Tool execution denied (System Prompt)](#7122-tool-execution-denied-system-prompt)
         3. [/btw side question (System Reminder)](#7123-btw-side-question-system-reminder)
         4. [Agent mention (System Reminder)](#7124-agent-mention-system-reminder)
   2. [UI Previews & Decision Support](#72-ui-previews-decision-support)
      1. [UI Preview & Option Visualization](#721-ui-preview-option-visualization)
         1. [AskUserQuestion (preview field) [Tool Description]](#7211-askuserquestion-preview-field-tool-description)
         2. [AskUserQuestion (Tool Description)](#7212-askuserquestion-tool-description)
         3. [Option previewer (System Prompt)](#7213-option-previewer-system-prompt)
      2. [Learning & Teaching Modes](#722-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#7221-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7222-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#7223-request_teach_access-part-of-teach-mode-tool-description)
   3. [Documentation, Analytics & Insights](#73-documentation-analytics-insights)
      1. [Documentation Generation & Management](#731-documentation-generation-management)
         1. [CLAUDE.md creation (Agent Prompt)](#7311-claudemd-creation-agent-prompt)
         2. [Update Magic Docs (Agent Prompt)](#7312-update-magic-docs-agent-prompt)
         3. [Claude guide agent (Agent Prompt)](#7313-claude-guide-agent-agent-prompt)
      2. [Usage Analytics & Insights](#732-usage-analytics-insights)
         1. [Insights at a glance summary (System Prompt)](#7321-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7322-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7323-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7324-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7325-insights-suggestions-system-prompt)
8. [Claude API & SDK References](#8-claude-api-sdk-references)
   1. [Claude API SDK References — Python & TypeScript](#81-claude-api-sdk-references-—-python-typescript)
      1. [Claude API reference — Python (Data)](#811-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#812-claude-api-reference-—-typescript-data)
      3. [Streaming reference — Python (Data)](#813-streaming-reference-—-python-data)
      4. [Streaming reference — TypeScript (Data)](#814-streaming-reference-—-typescript-data)
      5. [Message Batches API reference — Python (Data)](#815-message-batches-api-reference-—-python-data)
      6. [Files API reference — Python (Data)](#816-files-api-reference-—-python-data)
      7. [Files API reference — TypeScript (Data)](#817-files-api-reference-—-typescript-data)
      8. [Prompt Caching — Design & Optimization (Data)](#818-prompt-caching-—-design-optimization-data)
      9. [Live documentation sources (Data)](#819-live-documentation-sources-data)
      10. [HTTP error codes reference (Data)](#8110-http-error-codes-reference-data)
      11. [Claude model catalog (Data)](#8111-claude-model-catalog-data)
   2. [Claude API SDK References — Other Languages](#82-claude-api-sdk-references-—-other-languages)
      1. [Claude API reference — C# (Data)](#821-claude-api-reference-—-c-data)
      2. [Claude API reference — cURL (Data)](#822-claude-api-reference-—-curl-data)
      3. [Claude API reference — Go (Data)](#823-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#824-claude-api-reference-—-java-data)
      5. [Claude API reference — PHP (Data)](#825-claude-api-reference-—-php-data)
      6. [Claude API reference — Ruby (Data)](#826-claude-api-reference-—-ruby-data)
   3. [Agent SDK & Tool Use](#83-agent-sdk-tool-use)
      1. [Agent SDK patterns — Python (Data)](#831-agent-sdk-patterns-—-python-data)
      2. [Agent SDK patterns — TypeScript (Data)](#832-agent-sdk-patterns-—-typescript-data)
      3. [Agent SDK reference — Python (Data)](#833-agent-sdk-reference-—-python-data)
      4. [Agent SDK reference — TypeScript (Data)](#834-agent-sdk-reference-—-typescript-data)
      5. [Tool use concepts (Data)](#835-tool-use-concepts-data)
      6. [Tool use reference — Python (Data)](#836-tool-use-reference-—-python-data)
      7. [Tool use reference — TypeScript (Data)](#837-tool-use-reference-—-typescript-data)
      8. [Build with Claude API (Skill)](#838-build-with-claude-api-skill)
      9. [Build with Claude API (reference guide) [Skill]](#839-build-with-claude-api-reference-guide-skill)

---

## 1. Bash & Shell Operations

Execution patterns, syntax conventions, sandbox enforcement, and tool delegation for bash and platform-specific shells. Covers command chaining, security policies, failure diagnostics, and when to use dedicated tools instead of shell commands.

### 1.1 Bash Command Syntax & Best Practices

Execution patterns and syntax conventions for reliable bash command chaining. Commands chain with `&&` for dependent sequences, use semicolons for independent runs, quote file paths to handle spaces, and avoid unnecessary delays with sleep. Working directory persists across commands while shell state resets; absolute paths and check commands replace polling loops.

#### 1.1.1 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.2 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier command failures are acceptable.

#### 1.1.3 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with `&&` in a single call when they must run sequentially and each depends on the previous success.

#### 1.1.4 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.1.5 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with `run_in_background`; wait for completion notification instead.

#### 1.1.6 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; execute them without delay.

#### 1.1.7 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like `gh run view` rather than sleeping when polling an external process.

#### 1.1.8 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Optionally specify a timeout in milliseconds up to a maximum limit; commands have a default timeout if not specified.

#### 1.1.9 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to use absolute paths and avoid cd commands to maintain current working directory throughout the session.

#### 1.1.10 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs not to use newlines to separate bash commands.

#### 1.1.11 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to run independent bash commands as parallel tool calls in a single message for optimal performance.

#### 1.1.12 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Documents that working directory persists between bash commands but shell state does not, with environment initialized from user profile.

#### 1.1.13 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence using ls before creating new files or directories.

#### 1.1.14 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

#### 1.1.15 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; instead diagnose the root cause.

### 1.2 Bash Sandbox Policy & Diagnostics

Mandatory sandbox enforcement with diagnostic patterns for identifying restriction-caused failures. Sandbox mode is always default and cannot be disabled; when failures occur, the system detects sandbox-specific error signatures (access denied, network failures, operation not permitted, socket errors) and either adjusts allowlist settings or retries with sandbox disabled after user permission.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When a command fails due to sandbox restrictions, work with the user to adjust sandbox settings instead of bypassing them.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always default to running commands within the sandbox unless the user explicitly requests otherwise or sandbox restrictions are clearly blocking progress.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that a command failure was caused by sandbox restrictions.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

"Operation not permitted" errors for file or network operations indicate sandbox restrictions.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Identifies when a command failure shows evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure types.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; even if a recent command ran with sandbox disabled, default to sandbox for future commands.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing how to respond when evidence of sandbox-caused failure is detected.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with `dangerouslyDisableSandbox: true` when sandbox restrictions cause failure, without asking the user first.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Always use the `$TMPDIR` environment variable for temporary files in sandbox mode instead of `/tmp` directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will prompt the user for permission.

### 1.3 Bash Tool Alternatives & Preferred Tools

Bash reserves its role for system and terminal operations while dedicated tools handle file and text operations. Read, Write, Edit, Glob, and Grep tools replace bash equivalents (cat, echo, sed, find, grep) for better user experience and clearer permission review. Direct text output replaces echo commands.

#### 1.3.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly instead of using echo or printf commands.

#### 1.3.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs to use the Grep tool for content search instead of grep or rg bash commands.

#### 1.3.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs to use the Edit tool for file editing instead of sed or awk bash commands.

#### 1.3.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs to use the Glob tool for file search instead of find or ls bash commands.

#### 1.3.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs to use the Read tool for file reading instead of cat, head, or tail bash commands.

#### 1.3.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs to use the Write tool for file writing instead of echo or cat bash commands.

#### 1.3.7 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and easier permission review than bash equivalents.

#### 1.3.8 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns to avoid using bash for find, grep, cat, and similar commands, instead preferring dedicated tools for better user experience.

#### 1.3.9 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserves the Bash tool exclusively for system commands and terminal operations, preferring dedicated tools when available.

### 1.4 PowerShell & Windows Shell

Windows command execution with PowerShell 5.1 compatibility constraints, including encoding quirks, operator limitations, and integration with native Windows tools.

#### 1.4.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with timeout and output limits, preferring specialized tools for file operations while supporting git, npm, docker, and native executables with detailed syntax guidance.

#### 1.4.2 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 limitations including unavailable pipeline operators, ternary operators, stderr redirection quirks, and default UTF-16 LE encoding.

---

## 2. Multi-Agent Systems & Autonomous Execution

Frameworks for coordinating agent swarms, delegating work to subagents, running autonomous workflows, and scheduling recurring tasks. Covers inter-agent messaging, parallel decomposition, auto-approval guardrails, and cron-based orchestration.

### 2.1 Agent Coordination & Swarms

Spawning, coordinating, and managing multiple agents working in parallel, including swarm lifecycle, messaging protocols, and subagent delegation patterns.

#### 2.1.1 Multi-Agent Team Coordination & Swarm Management

Orchestration frameworks for coordinating multiple autonomous agents in swarms through shared task lists, inter-agent messaging protocols, and team memory. Handles agent lifecycle management, graceful shutdown, and parallel work decomposition with automatic message routing and idle state handling.

##### 2.1.1.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and coordination protocols including task management and named teammate communication.

##### 2.1.1.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully before providing a final response to the user in non-interactive mode.

##### 2.1.1.3 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and content for injection into conversation context.

##### 2.1.1.4 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents to use the SendMessage tool to communicate with teammates in a swarm, either to specific agents or team-wide, since text responses are not visible to others.

##### 2.1.1.5 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages between agents in teams with protocol responses for shutdown and plan approval requests, using agent names for routing.

##### 2.1.1.6 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages teams and coordinates multiple agents in swarms with task lists, automatic message delivery, idle state handling, and peer collaboration through shared config files.

##### 2.1.1.7 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all active members to be terminated first.

##### 2.1.1.8 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to send all user-facing replies through SendUserMessage, with guidance on acknowledgments, checkpoints, and keeping messages concise and information-dense.

##### 2.1.1.9 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining e2e test recipes, and spawning background worker agents with isolation and progress tracking.

#### 2.1.2 Subagent Delegation & Orchestration

Patterns and tools for spawning specialized subagents to parallelize independent work, isolate context, and handle complex multi-step tasks autonomously. Includes guidance on prompt writing, fork-based execution for research, and structured result reporting to maintain coordinator awareness without mid-flight interference.

##### 2.1.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Provides comprehensive usage guidance for the Task/Agent tool, covering subagent launching, background execution, agent resumption, worktree isolation, parallel execution, and context preservation for spawning autonomous agents.

##### 2.1.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses for handling complex multi-step tasks autonomously.

##### 2.1.2.3 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Recommends using the Task tool with specialized exploration subagents for broader codebase exploration and deep research when simple directed searches prove insufficient or require many queries.

##### 2.1.2.4 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool with specialized subagents for parallelizing independent queries and protecting context, while avoiding excessive use and work duplication.

##### 2.1.2.5 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts: brief agents like colleagues entering the room, explain goals and context, describe prior findings, avoid terse commands, and never delegate understanding—include specific file paths and changes instead.

##### 2.1.2.6 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results with proper separation between coordinator and subagent turns.

##### 2.1.2.7 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Provides guidelines for forking subagents for research and implementation work, emphasizing not to read fork output mid-flight, never fabricate fork results, and wait for completion notifications before proceeding.

##### 2.1.2.8 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Forked worker subagent that executes directives directly without spawning further subagents, using tools silently and reporting structured facts (scope, result, key files, changes, issues) in plain text under 500 words.

##### 2.1.2.9 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases, reporting findings concisely without gold-plating or leaving work half-done.

##### 2.1.2.10 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file searches by glob patterns, code searches by regex, and analysis, with strict prohibition on file modifications and support for multiple parallel tool calls.

### 2.2 Autonomous Workflows & Scheduling

Continuous autonomous operation with safety guardrails, rule-based action approval, cron scheduling, and parallel tool execution for background tasks.

#### 2.2.1 Autonomous & Auto Mode Execution

Enables Claude to operate continuously with minimal interruption, automatically approving safe actions while enforcing guardrails against destructive or data-exfiltrating operations. Supports rule-based classification and structured workflows for autonomous implementation tasks.

##### 2.2.1.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous execution where Claude starts immediately, minimizes interruptions, prefers action over planning, and avoids destructive or data-exfiltrating actions without explicit user confirmation.

##### 2.2.1.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability to ensure the LLM classifier can correctly auto-approve or block tool actions.

##### 2.2.1.3 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for workers implementing changes: simplify code using the simplify skill, run unit tests, execute end-to-end tests, commit and push with PR creation, and report the PR URL or reason for failure.

#### 2.2.2 Scheduling & Cron Job Management

Orchestrates recurring and one-shot task execution through cron scheduling, with natural language interfaces for defining intervals and remote agent triggers. Handles timezone conversion, durability, and automatic first-run execution.

##### 2.2.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron jobs using standard 5-field cron syntax in local timezone, with guidance on avoiding :00/:30 minute marks and managing durability and auto-expiration.

##### 2.2.2.2 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parser for `/loop` command that converts user input into interval and prompt, generates cron expressions, and schedules recurring tasks with automatic execution on first run.

##### 2.2.2.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via the Anthropic cloud API, supporting creation, updates, listing, and execution with environment selection, MCP connectors, and timezone conversion.

#### 2.2.3 Parallel Tool Execution & Performance

Mechanisms for executing multiple independent operations concurrently while respecting dependencies, with strategies for managing idle time and background tasks efficiently.

##### 2.2.3.1 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Permits multiple independent tool calls in a single response while requiring sequential execution when dependencies exist between calls.

##### 2.2.3.2 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for specified duration with user interrupt capability and periodic check-in prompts, preferred over bash sleep for avoiding shell process overhead.

##### 2.2.3.3 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Advises against unnecessary Start-Sleep commands in PowerShell scripts; use run_in_background for long-running tasks, check commands for polling, and keep sleep durations short (1-5 seconds) to avoid blocking.

### 2.3 Agent Design & Creation

Capabilities for architecting AI agents from user intent through system prompt design, persona creation, and performance optimization, including tools for generating actionable suggestions and technical documentation.

#### 2.3.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design high-performance AI agent configurations by extracting user intent, creating expert personas, architecting comprehensive system prompts, optimizing for performance, and generating JSON specifications with identifiers, usage examples, and operational guidelines.

#### 2.3.2 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what the user would naturally type next based on recent messages and conversation context, suggesting specific follow-up actions without evaluative or Claude-voice language.

#### 2.3.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy operations.

---

## 3. Planning, Tasks & Session State

Structured workflows for planning implementations, tracking tasks, managing conversation context across resets, and monitoring session resources. Covers plan mode, todo systems, context compaction, and session metadata.

### 3.1 Implementation Planning & Work Breakdown

Deferred-execution planning workflows, multi-agent analysis, user approval gates, and structured task lists with dependency tracking and state management.

#### 3.1.1 Plan Mode & Implementation Planning

Structured planning workflows that defer execution while Claude explores codebases, designs solutions, and synthesizes detailed implementation strategies through multi-agent analysis and user approval gates. Supports iterative pair-planning, remote sessions with diagram-driven outputs, and verification checkpoints to prevent wasted effort on complex multi-file changes.

##### 3.1.1.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Activates 5-phase plan mode with parallel exploration and planning agents, prohibiting execution while Claude builds a detailed implementation plan through exploration, design, review, and approval phases.

##### 3.1.1.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative plan mode where Claude pair-plans with the user by exploring code, asking clarifying questions, and incrementally building a plan file before execution.

##### 3.1.1.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents that prohibits execution and limits edits to the plan file while answering user queries.

##### 3.1.1.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude when re-entering plan mode to evaluate whether the new request is a continuation of the existing plan or a different task, then proceed accordingly.

##### 3.1.1.5 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies that plan mode has been exited and actions can now be taken, optionally referencing the plan file location.

##### 3.1.1.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file and instructs Claude to continue working on it if relevant and incomplete.

##### 3.1.1.7 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Instructs Claude to create detailed implementation plans using multi-agent exploration and critique, spawning parallel agents to analyze code, identify modifications, and assess risks before synthesizing findings into a comprehensive step-by-step plan.

##### 3.1.1.8 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to call a verification tool directly after plan implementation to confirm all items were completed correctly.

##### 3.1.1.9 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes the implementation plan to file with file paths, changes, function references, and a single verification command, limited to 40 lines.

##### 3.1.1.10 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore codebases, produce diagram-rich plans via ExitPlanMode, and implement with pull requests upon approval, with teleportation support for local handoff.

##### 3.1.1.11 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Configures remote planning sessions to explore codebases, produce implementation plans via ExitPlanMode, handle approval/rejection feedback, and support teleportation back to local terminal.

##### 3.1.1.12 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions into plan mode for non-trivial implementation tasks to explore codebase and design approaches before coding, requiring user sign-off to prevent wasted effort.

##### 3.1.1.13 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning phase by reading plan file and requesting user approval before implementation begins.

##### 3.1.1.14 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans by exploring codebases, identifying patterns, and detailing step-by-step strategies with critical files and architectural trade-offs in read-only mode.

#### 3.1.2 Task & Todo Management

Structured task tracking systems that break down complex work into discrete units with state management (pending, in-progress, completed) and dependency tracking. Enables progress visibility across coding sessions and supports both individual task lists and shared teammate workflows.

##### 3.1.2.1 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant, without mentioning the reminder to the user.

##### 3.1.2.2 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Reminds Claude to consider using the TodoWrite tool for tracking task progress if relevant to current work, and to clean up stale todo lists.

##### 3.1.2.3 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress on complex multi-step tasks, with subject, description, and optional active form fields.

##### 3.1.2.4 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from shared task lists, preferring lowest ID tasks and respecting blockedBy dependencies.

##### 3.1.2.5 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists with pending/in_progress/completed states, requiring both imperative and active-form descriptions for each task.

##### 3.1.2.6 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs to use the TodoWrite tool to break down and manage work, marking tasks as completed immediately upon finishing rather than batching.

### 3.2 Context & Session Continuity

Preserving and resuming conversation state across context windows, session naming conventions, metadata search, and real-time resource quota monitoring.

#### 3.2.1 Context Management & Conversation Compaction

Mechanisms for preserving and resuming conversation state across context windows, including structured summarization formats that capture task progress, technical discoveries, and pending work to enable efficient continuation on new machines or after context resets.

##### 3.2.1.1 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured instructions for creating detailed conversation summaries when compacting a portion of the session, with analysis tags and nine required summary sections.

##### 3.2.1.2 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries covering task overview, current state, discoveries, next steps, and context to preserve, enabling efficient resumption in future context windows.

##### 3.2.1.3 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies that a file was read before conversation summarization but is too large to include, directing to use the Read tool if needed.

##### 3.2.1.4 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and the working directory may have changed.

##### 3.2.1.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized by primary request, technical concepts, files and code sections, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps with full code snippets and technical accuracy.

##### 3.2.1.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, covering primary requests, technical concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps.

#### 3.2.2 Session Metadata & Search

Generate and retrieve session metadata through automated naming conventions for titles and git branches, and locate sessions via inclusive search across tags, content, and transcripts to maximize discoverability.

##### 3.2.2.1 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, lowercase with dashes, prefixed with 'claude/') from session descriptions.

##### 3.2.2.2 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise 3–7 word sentence-case titles capturing the main goal of a coding session for easy recognition in session lists.

##### 3.2.2.3 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Search assistant that finds relevant sessions by prioritizing user-assigned tags, then title, branch, summary, and transcript content matches with inclusive matching to maximize recall over precision.

#### 3.2.3 Session & Resource Monitoring

Real-time visibility into session resource consumption across tokens, budget, and invoked capabilities. Tracks quotas and spending to inform decision-making within operational constraints.

##### 3.2.3.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 3.2.3.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget amounts.

##### 3.2.3.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the session and instructs Claude to follow their guidelines.

---

## 4. Memory, Configuration & Extensibility

Persistent knowledge storage, system configuration, lifecycle hooks, custom skills, and environment isolation. Covers institutional memory, project-level settings, event-driven hooks, slash commands, and git worktrees.

### 4.1 Memory & Knowledge Persistence

Persistent storage systems for recording institutional knowledge, user preferences, session state, and domain-specific discoveries across conversations. Supports selective memory attachment, reflective consolidation through background processes, and structured templates for maintaining actionable context without manual note-taking overhead.

#### 4.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path with type description.

#### 4.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

#### 4.1.3 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type for storing guidance about work approaches, emphasizing recording both successes and failures while checking for contradictions with team memories.

#### 4.1.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as containing information about role, goals, responsibilities, and knowledge to enable tailored behavior and avoid negative judgements unrelated to the work.

#### 4.1.5 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Provides guidance for adding domain-specific memory update instructions to agent system prompts. Agents should record institutional knowledge like code patterns, test failures, architectural decisions, or documentation conventions as they discover them across conversations.

#### 4.1.6 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options based on the user's query, being conservative with profile and project memories and avoiding tool reference documentation for recently-used tools.

#### 4.1.7 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs reflective memory consolidation by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to stay under size limits.

#### 4.1.8 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations, preserving exact structure and headers while adding detailed, info-dense content to existing sections without referencing the note-taking process itself.

#### 4.1.9 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing current state, task specification, files, workflow, errors, codebase documentation, learnings, and results.

### 4.2 Hooks, Skills & Commands

Lifecycle hooks that intercept Claude Code events, user-defined skills, and slash commands that extend capabilities with reusable automation workflows.

#### 4.2.1 Hook System Configuration & Lifecycle

Lifecycle hooks intercept Claude Code events (PreToolUse, PostToolUse, SessionStart) by executing shell commands, LLM prompts, or agents with structured output control. Hooks verify stop conditions, evaluate configuration constraints, and provide additional context; a seven-step verification flow ensures correct construction through dedup checks, command testing, and JSON validation.

##### 4.2.1.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Displays additional context provided by a hook command.

##### 4.2.1.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 4.2.1.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for messages indicating a hook has stopped continuation.

##### 4.2.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook has stopped continuation with an associated message.

##### 4.2.1.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful completion of a hook with its output content.

##### 4.2.1.6 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines how to configure lifecycle hooks that run shell commands, LLM prompts, or agents at specific Claude Code events like PreToolUse, PostToolUse, and SessionStart, with JSON structure and output control options.

##### 4.2.1.7 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured results indicating whether an agent completed its plan.

##### 4.2.1.8 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether a condition is met or providing a reason why it is not.

##### 4.2.1.9 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks for Claude Code, including dedup checks, command construction, pipe-testing, JSON validation, and proof of execution.

#### 4.2.2 Skills, Slash Commands & Invocation

Extensible capability system enabling specialized domain knowledge and workflows through user-defined skills and slash commands. Covers skill creation, configuration management, and session-to-skill conversion for reusable automation.

##### 4.2.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills and slash commands within conversations, requiring invocation before generating responses when skills match user requests.

##### 4.2.2.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Explains that slash commands invoke user-invocable skills via the Skill tool, and warns against guessing or using built-in CLI commands.

##### 4.2.2.3 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks, including codebase exploration, user interviews, iterative proposal refinement, and creation of project and personal configuration files.

##### 4.2.2.4 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json) with guidance on hooks vs memory, reading before writing, merging arrays, and common configuration patterns.

##### 4.2.2.5 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides conversion of a session into a reusable skill through analysis, multi-round user interviews, and SKILL.md generation with frontmatter, steps, success criteria, and execution annotations.

### 4.3 Configuration & Environment Isolation

Global and project-level configuration files, feature-control modes, git worktrees for parallel branches, and personality or terminal customization.

#### 4.3.1 Configuration & Settings Management

Manage Claude Code behavior through global and project-level configuration files, with specialized modes that selectively disable features like hooks, LSP, and plugins to control execution context and operational scope.

##### 4.3.1.1 [Config (Tool Description)](system-prompts/tool-description-config.md)

Allows getting and setting Claude Code configuration settings stored globally in ~/.claude.json or per-project in settings.json.

##### 4.3.1.2 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode operation that disables hooks, LSP, plugins, auto-memory, and background features while requiring explicit context via CLI flags.

#### 4.3.2 Worktree & Isolation Management

Provides isolated execution environments through git worktrees or VCS-agnostic hooks, enabling parallel work streams with independent branches and state management. Supports clean entry and exit with automatic cache restoration.

##### 4.3.2.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates isolated git worktrees in .claude/worktrees/ with new branches, or delegates to hooks for VCS-agnostic isolation when outside git repositories.

##### 4.3.2.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits EnterWorktree-created worktrees with options to keep or remove the directory and branch, restoring original session state and clearing CWD-dependent caches.

#### 4.3.3 Claude Personality & Terminal Integration

Customization features that personalize Claude's interaction style and terminal presence, including dynamic personality generation for coding companions and shell-aware status line configuration that reflects session context.

##### 4.3.3.1 [Buddy Mode (System Prompt)](system-prompts/system-prompt-buddy-mode.md)

Instructs Claude to generate memorable terminal-based coding companions with one-word names, distinct personalities, and quirks that affect how they comment on developer work, with personality strength tied to rarity.

##### 4.3.3.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell config files, converting escape sequences to shell commands, and updating settings.json with custom status line commands that receive session metadata via JSON stdin.

---

## 5. Code Quality, Security & Testing

Engineering principles for safe and maintainable code, security vulnerability analysis, adversarial testing workflows, and git-based version control with code review integration.

### 5.1 Engineering Principles & Code Review

Pragmatic guidelines for scope discipline, code simplicity, reversibility, and routing decisions to stronger reviewer models when stuck.

#### 5.1.1 Code Quality & Engineering Principles

Pragmatic engineering guidelines emphasizing scope discipline, code simplicity, and safe execution. Prioritizes reading before modifying, avoiding premature abstractions and unnecessary error handling, minimizing file creation, and requiring user confirmation for destructive operations with high blast radius.

##### 5.1.1.1 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Authorizes Claude to attempt ambitious tasks and defer to user judgment on scope rather than declining based on complexity.

##### 5.1.1.2 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

##### 5.1.1.3 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims, renamed variables, or removed comments.

##### 5.1.1.4 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Advises against creating helpers or abstractions for one-time operations or hypothetical requirements; implement only what the task actually requires.

##### 5.1.1.5 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directs Claude to avoid adding features, refactoring, docstrings, or improvements beyond what was explicitly requested.

##### 5.1.1.6 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios and validate only at system boundaries, trusting internal code and framework guarantees.

##### 5.1.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing or making modifications.

##### 5.1.1.8 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks like bug fixes, feature additions, and refactoring, and instructs Claude to interpret unclear instructions in that context.

##### 5.1.1.9 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid giving time estimates or predictions for task completion.

##### 5.1.1.10 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

##### 5.1.1.11 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to carefully consider reversibility and blast radius before executing actions, requiring user confirmation for destructive, hard-to-reverse, or shared-system operations. Emphasizes investigating unexpected state rather than using destructive shortcuts, and matching action scope to what was actually requested.

##### 5.1.1.12 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup workflow that launches three parallel agents to identify code reuse opportunities, quality issues, and efficiency problems, then fixes findings directly.

#### 5.1.2 Advisor & Code Review Integration

Decision-support mechanism that routes substantive work, stuck points, and approach changes to a stronger reviewer model with full conversation context, surfacing conflicts rather than silently pivoting direction.

##### 5.1.2.1 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructs Claude to call an advisor tool backed by a stronger reviewer model before substantive work, when stuck, or when considering approach changes. The advisor sees full conversation history and tool results; Claude should give its advice serious weight and surface conflicts rather than silently switching directions.

### 5.2 Security Review & Vulnerability Analysis

Multi-layered security enforcement covering code vulnerability assessment, autonomous agent action monitoring, and malware analysis. Applies threat modeling to block dangerous operations while permitting authorized security testing, and prevents injection attacks and credential leakage through command inspection and rule-based boundaries.

#### 5.2.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review agent that analyzes code changes for exploitable vulnerabilities with high confidence, using git diff inspection and three-phase analysis (repository context, comparative analysis, vulnerability assessment) while filtering false positives and excluding DOS, secrets-on-disk, and rate-limiting issues.

#### 5.2.2 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Evaluates autonomous coding agent actions against security rules to prevent prompt injection, scope creep, and accidental damage, applying user intent as the final signal with high evidence bars for authorization and low bars for boundaries.

#### 5.2.3 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, block rules, and allow exceptions governing autonomous agent tool actions, covering threats like destructive git operations, code execution from external sources, production access, credential leakage, and data exfiltration.

#### 5.2.4 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands by extracting the executable prefix and flagging injection attempts, returning only the prefix or 'command_injection_detected'.

#### 5.2.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing destructive techniques, DoS attacks, and detection evasion for malicious purposes.

#### 5.2.6 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, while permitting analysis, reports, and behavior questions.

#### 5.2.7 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities like command injection, XSS, and SQL injection, prioritizing safe and correct code.

### 5.3 Verification, Testing & Quality Assurance

Adversarial testing and validation workflows that exercise code through builds, test suites, and edge-case probes, then issue structured verdicts with evidence. Covers runtime observation across CLI, API, and web UI surfaces, with diagnostic tools for identifying performance and process issues.

#### 5.3.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial verification subagent that tests implementations by running builds, test suites, linters, and probes (boundary values, concurrency, idempotency, orphan operations) then issues PASS/FAIL/PARTIAL verdicts with documented evidence, avoiding false positives and happy-path confirmation.

#### 5.3.2 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow for validating code changes through runtime observation, covering surface identification, handle selection, driving the app, capturing evidence, and structured reporting with verdicts.

#### 5.3.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying CLI changes by building, running with test arguments, capturing output and exit codes, and comparing to expected behavior.

#### 5.3.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying server/API changes by starting the server, sending curl requests to changed routes, and capturing response status, headers, and body.

#### 5.3.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive workflow for creating verifier skills that automatically validate code changes, including auto-detection of project structure, browser automation setup, interactive Q&A, and skill generation for web UI, CLI, and API verification.

#### 5.3.6 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

#### 5.3.7 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnostic tool for identifying frozen or slow Claude Code sessions by scanning process state, CPU usage, memory, and child processes, then posting findings to Slack.

### 5.4 Git Operations & GitHub Workflow

Git workflows emphasize safety and automation through commit creation, pull request management, and code review. Commits follow repository conventions with hook enforcement and signing; destructive operations require consideration of alternatives. GitHub integration enables PR creation, comment fetching, and automated code review via CLI and Actions workflows.

#### 5.4.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

#### 5.4.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Provides detailed instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, parallel command execution, and PR formatting with proper analysis of all changes.

#### 5.4.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs never to skip hooks or bypass signing unless explicitly requested by the user, and to fix underlying issues if hooks fail.

#### 5.4.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to prefer creating new commits over amending existing commits.

#### 5.4.5 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository conventions, and executing the commit with safety protocols preventing amends and secret-file commits.

#### 5.4.6 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request by analyzing all changes, creating a feature branch, committing with appropriate messages, and opening or updating a PR with summary and test plan using git and GitHub CLI.

#### 5.4.7 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and code review comments with file, line, and diff context using the GitHub API.

#### 5.4.8 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, correctness, conventions, performance, test coverage, and security with concise formatted feedback.

#### 5.4.9 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git repository status as a snapshot at the start of the conversation, which does not update during the session.

#### 5.4.10 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code via @claude mentions in issues, pull requests, and comments, with optional custom prompts and claude_args configuration.

#### 5.4.11 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template for a pull request description explaining Claude Code GitHub App integration setup, including what Claude Code is, how it works, security considerations, and next steps for users.

---

## 6. Tools, Integrations & File Operations

File system access, IDE code intelligence, browser automation, web search, MCP tool discovery, and specialized editors for notebooks and temporary files. The operational toolkit for interacting with external systems and local resources.

### 6.1 File System & Editor Tools

Reading, writing, and searching files with state-change awareness, Jupyter notebook cell-level editing, and session-scoped temporary file management.

#### 6.1.1 File System Operations & State Tracking

Tools and notifications for reading, writing, and searching files with awareness of file state changes, truncation boundaries, and external modifications. Provides direct filesystem access while tracking offset limits, external edits, and content availability.

##### 6.1.1.1 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Alerts Claude when a file read offset exceeds the file's actual length.

##### 6.1.1.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and instructs use of the read tool to access remaining content.

##### 6.1.1.3 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns that a file exists but contains no content.

##### 6.1.1.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies that a file was modified externally by the user or linter, showing relevant changes with line numbers and instructing not to revert unless requested.

##### 6.1.1.5 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies that the user opened a file in the IDE, which may or may not relate to the current task.

##### 6.1.1.6 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from filesystem supporting images, PDFs (with page ranges), Jupyter notebooks, and screenshots, with default line limits and absolute path requirements.

##### 6.1.1.7 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with support for unique matching, replace_all for bulk changes, and strict indentation preservation from Read tool output.

##### 6.1.1.8 [Write (Tool Description)](system-prompts/tool-description-write.md)

Write creates or completely rewrites files to the local filesystem, with preference for the Edit tool for modifications and restrictions against creating documentation files unless explicitly requested.

##### 6.1.1.9 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting regex patterns, file filtering by glob or type, and multiple output modes for content or file discovery.

##### 6.1.1.10 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs to use the Write tool instead of cat heredoc or echo redirection for file creation.

##### 6.1.1.11 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs to use the Edit tool instead of sed or awk for file editing.

##### 6.1.1.12 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs to use the Read tool instead of cat, head, tail, or sed for reading files.

##### 6.1.1.13 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs to use the Grep tool instead of grep or rg for searching file contents.

##### 6.1.1.14 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs to use the Glob tool instead of find or ls for file searches.

##### 6.1.1.15 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs to use Glob and Grep tools directly for simple, directed codebase searches.

#### 6.1.2 Notebook & Specialized File Editing

Cell-level editing for Jupyter notebooks with precise indexing and mode-based operations.

##### 6.1.2.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing contents, supporting insert and delete modes with 0-indexed cell numbering.

#### 6.1.3 Scratchpad, Temp Files & Session Isolation

Session-scoped temporary file management that isolates working state from system directories, ensuring clean separation between concurrent operations.

##### 6.1.3.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

### 6.2 IDE & Browser Automation

Language Server Protocol integration for semantic code navigation and diagnostics, plus desktop and browser automation with mouse, keyboard, and screenshot capabilities.

#### 6.2.1 IDE Integration & Code Intelligence

Language Server Protocol integration providing semantic code navigation, symbol resolution, and diagnostic awareness to enable intelligent code exploration and error detection within the IDE context.

##### 6.2.1.1 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific lines selected by the user in the IDE editor, with optional relevance to current task.

##### 6.2.1.2 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the codebase.

##### 6.2.1.3 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol integration for code intelligence including go-to-definition, find-references, hover info, symbol search, and call hierarchy.

#### 6.2.2 Browser Automation & Computer Use

Desktop and browser automation capabilities enabling mouse, keyboard, and screenshot interactions with Chrome, including GIF recording, console debugging, and structured guidance for handling automation complexity and failures.

##### 6.2.2.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Enables mouse and keyboard interaction with Chrome browser, screenshot capture, and precise cursor positioning for UI automation.

##### 6.2.2.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines 13 browser automation actions for Chrome including mouse operations, keyboard input, scrolling, and screenshot capture, with specialized actions for element interaction and hover state triggering.

##### 6.2.2.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with smooth playback, console debugging with regex filtering, avoiding JavaScript dialogs that block events, and checking tab context at session start. Instructs Claude to stop and ask for guidance when encountering unexpected complexity or repeated failures.

##### 6.2.2.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the tool name in the query format.

##### 6.2.2.5 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools with guidance on tool selection tiers (dedicated MCP, Chrome MCP, computer use), access flow, tiered app restrictions, link safety, and financial action restrictions.

### 6.3 Web Access & External Protocol Tools

Real-time web search with source attribution, URL content fetching, and MCP tool discovery with schema resolution and output truncation strategies.

#### 6.3.1 Web Search & Content Retrieval

Real-time web access combining search queries with URL content fetching, markdown conversion, and summarization to retrieve current information beyond training data with proper source attribution.

##### 6.3.1.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

WebFetch retrieves and analyzes content from URLs by converting HTML to markdown and processing it with a fast AI model, with built-in caching and redirect handling. Prefers MCP-provided alternatives when available.

##### 6.3.1.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

WebSearch enables Claude to search the web for current information beyond its knowledge cutoff, with mandatory source citation in responses and support for domain filtering. Requires using the current year in search queries.

##### 6.3.1.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits (125 characters) and proper attribution for untrusted domains while respecting open-source licenses.

#### 6.3.2 MCP Integration & Tool Discovery

Mechanisms for discovering, resolving, and managing Model Context Protocol tools and resources. Handles tool schema resolution through deferred matching, manages non-displayable or empty resource content, and provides strategies for truncating verbose tool outputs to prevent context bloat.

##### 6.3.2.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates an MCP resource exists but contains no content.

##### 6.3.2.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates an MCP resource has content that is not displayable in text form.

##### 6.3.2.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

ToolSearch matches queries against a deferred tool list and returns complete JSONSchema definitions for matched tools, supporting exact name selection, keyword search, and name-constrained ranking.

##### 6.3.2.4 [MCP Tool Result Truncation (System Prompt)](system-prompts/system-prompt-mcp-tool-result-truncation.md)

Provides guidelines for handling long MCP tool outputs by using targeted queries for filtering and delegating analysis tasks to subagents to avoid context bloat.

---

## 7. Communication, Documentation & Learning

Output formatting standards, user messaging mechanisms, UI previews, documentation generation, usage analytics, and collaborative learning modes. Covers how Claude communicates results and helps users grow.

### 7.1 Output Formatting & User Messaging

Communication standards for concise prose, precise code references, markdown messaging with attachments, and escalation handling when tool access is denied.

#### 7.1.1 Output Style, Formatting & Communication

Communication standards for clarity and navigability, including concise direct prose, precise code references with line numbers, absolute file paths, and minimal formatting overhead. Establishes consistent conventions for action summaries and tool invocation presentation.

##### 7.1.1.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number pattern when referencing code to enable easy navigation to source locations.

##### 7.1.1.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs responses to be short and concise.

##### 7.1.1.3 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning and limiting text to essential information for decisions, status, and blockers.

##### 7.1.1.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths, avoid emojis, include only load-bearing code snippets, and omit colons before tool calls for clear communication.

##### 7.1.1.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Instructs Claude to describe recent actions in 3-5 words using present tense, naming specific files or functions rather than branches or vague descriptions.

##### 7.1.1.6 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and to follow its guidelines.

#### 7.1.2 User Messaging & Communication Tools

Mechanisms for delivering messages to users, handling tool access restrictions, and routing lightweight queries or agent invocations. Includes markdown messaging with attachments, escalation on denied execution, side-question handling, and agent delegation.

##### 7.1.2.1 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown messages to users with optional file attachments and status labels distinguishing reactive replies from proactive notifications.

##### 7.1.2.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Defines behavior when tool execution is denied: attempt reasonable alternatives but avoid malicious workarounds, and escalate to the user if the capability is essential to complete the request.

##### 7.1.2.3 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Defines behavior for /btw side questions: spawn a lightweight agent with no tools to answer one question directly, without referencing prior work or promising actions.

##### 7.1.2.4 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies that the user wants to invoke a specific agent and instructs to invoke it with required context.

### 7.2 UI Previews & Decision Support

Side-by-side option comparison through embedded HTML mockups and diagrams, combined with interactive learning overlays that guide users rather than executing directly.

#### 7.2.1 UI Preview & Option Visualization

User interaction patterns combining decision-making prompts with visual previews, enabling side-by-side comparison of options through embedded HTML mockups, code samples, and diagrams.

##### 7.2.1.1 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Explains how to use the optional preview field on single-select question options to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML.

##### 7.2.1.2 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying instructions, and presenting implementation choices during execution, with guidance on plan mode usage and avoiding plan-visibility issues.

##### 7.2.1.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using optional preview fields for ASCII mockups, code snippets, diagrams, and configuration examples.

#### 7.2.2 Learning & Teaching Modes

Facilitate collaborative learning by requesting human input on design decisions, providing educational context around implementation choices, and guiding users through tasks via interactive overlays rather than direct execution.

##### 7.2.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions for design decisions and key algorithms while handling routine implementation, with TodoList integration and structured contribution requests.

##### 7.2.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code writing in learning mode, highlighting implementation choices and codebase-specific patterns.

##### 7.2.2.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users step-by-step through tasks using fullscreen tooltip overlays instead of direct execution.

### 7.3 Documentation, Analytics & Insights

Generating and maintaining codebase documentation, analyzing usage patterns to surface friction points, and recommending autonomous workflow opportunities.

#### 7.3.1 Documentation Generation & Management

Create and maintain codebase documentation by analyzing architecture and conventions, updating knowledge artifacts with new learnings, and providing guided access to Claude tools and APIs through curated, high-signal content.

##### 7.3.1.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation by documenting common commands, high-level architecture, and codebase conventions without repeating obvious practices.

##### 7.3.1.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Updates Magic Doc files with new learnings by preserving headers, removing outdated information, and maintaining high-signal documentation focused on architecture, patterns, and entry points rather than exhaustive implementation details.

##### 7.3.1.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, the Claude Agent SDK, and the Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with specific examples and URLs.

#### 7.3.2 Usage Analytics & Insights

Extract and analyze Claude Code usage patterns to surface what's working, identify friction points, suggest feature adoption, and reveal opportunities for autonomous workflows through structured session facet extraction and actionable recommendations.

##### 7.3.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part coaching summary for Claude Code usage reports covering what's working, hindrances, quick wins, and ambitious workflows for improved models.

##### 7.3.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with specific examples and actionable suggestions for improvement.

##### 7.3.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, with copyable prompts to try.

##### 7.3.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including goal categories, user satisfaction signals, and friction types with strict counting rules.

##### 7.3.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions for Claude Code users including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns.

---

## 8. Claude API & SDK References

Comprehensive SDK and API documentation across Python, TypeScript, and other languages for building applications and agentic systems with Claude. Covers streaming, prompt caching, tool use, structured outputs, and cost optimization.

### 8.1 Claude API SDK References — Python & TypeScript

Comprehensive SDK and API documentation for Python and TypeScript covering client initialization, streaming, vision, prompt caching, extended thinking, batch processing, file handling, error management, and cost optimization. Includes design patterns for cache efficiency and HTTP error reference.

#### 8.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, system prompts, vision (images), prompt caching, extended thinking, error handling, multi-turn conversations, compaction, stop reasons, and cost optimization strategies.

#### 8.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, system prompts, vision (images), prompt caching, extended thinking, error handling, multi-turn conversations, compaction, stop reasons, and cost optimization strategies.

#### 8.1.3 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference with sync/async examples, handling text/thinking/tool-use content types, progress tracking, error handling, and best practices for real-time response display.

#### 8.1.4 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, content type handling with thinking blocks, tool-use streaming, event types, and best practices for web UI integration.

#### 8.1.5 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python SDK reference for the Batches API, covering batch creation, polling for completion, result retrieval, and cost savings at 50% of standard pricing with full end-to-end examples.

#### 8.1.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files (max 500 MB), using them in messages via file_id, managing files (list, delete, download), and end-to-end examples for document analysis.

#### 8.1.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages via file_id, and managing files (list, delete, download).

#### 8.1.8 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Design patterns for effective prompt caching, covering prefix-stability ordering, breakpoint placement, silent invalidators, and architectural guidance to maximize cache hit rates.

#### 8.1.9 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories, with extraction prompts for each topic.

#### 8.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400–529) with causes, fixes, and SDK exception handling. Covers validation errors, authentication, rate limiting, and retry strategies with code examples.

#### 8.1.11 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Current and legacy Claude model IDs with context windows, max output tokens, and pricing; includes programmatic model discovery via Models API for live capability data (vision, thinking, effort, structured outputs, context management).

### 8.2 Claude API SDK References — Other Languages

SDK and API documentation for C#, cURL, Go, Java, PHP, and Ruby covering client initialization, streaming, tool use patterns, thinking modes, prompt caching, structured outputs, and platform-specific features like server-side tools and context editing.

#### 8.2.1 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking (adaptive and deprecated fixed-budget), tool use with manual JSON schema, effort parameter, prompt caching, token counting, structured output, PDF input, server-side tools, and beta features including context editing.

#### 8.2.2 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP/cURL reference for Claude API covering basic requests, streaming (SSE), tool use loops, prompt caching, extended thinking, and required headers for direct API integration.

#### 8.2.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use via BetaToolRunner and manual loops, thinking, prompt caching, server-side tools, PDF input, Files API, and context editing.

#### 8.2.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking (adaptive), tool use with annotated classes and BetaToolRunner, effort parameter, prompt caching, token counting, structured output, PDF input, server-side tools, and Files API.

#### 8.2.5 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization (including Bedrock, Vertex AI, Foundry), basic requests, streaming, tool use with BetaRunnableTool and manual loops, extended thinking, prompt caching, structured outputs, and server-side tools.

#### 8.2.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, tool use with beta tool runner and manual loops, and prompt caching.

### 8.3 Agent SDK & Tool Use

Language-specific SDKs and patterns for building agentic applications with Claude, covering agent initialization, custom tool integration via MCP, session management, structured outputs, and server-side capabilities like code execution and web search. Includes conceptual foundations, API references, and practical examples across Python and TypeScript.

#### 8.3.1 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK usage patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, session resumption, and session mutations for building agentic applications.

#### 8.3.2 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns demonstrating basic agents, hooks, subagents, MCP integration, session resumption, and session mutations for building agentic applications.

#### 8.3.3 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP support, hooks, subagents, error handling, session history, and best practices.

#### 8.3.4 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference covering installation, query interface, built-in tools, permission modes, MCP support, hooks, subagents, message types, session history, and best practices.

#### 8.3.5 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices.

#### 8.3.6 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference with tool runner, manual agentic loops, code execution, MCP tool conversion, memory tool, and structured outputs including Pydantic schemas and strict tool use.

#### 8.3.7 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, code execution, file handling, container reuse, memory tool, and structured outputs.

#### 8.3.8 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, compaction, and caching quick reference.

#### 8.3.9 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Quick task reference template for navigating language-specific Claude API documentation, with shortcuts to relevant sections for common workflows like streaming, caching, tool use, and batches.
