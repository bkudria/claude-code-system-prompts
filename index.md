# Claude Code System Prompts Index

Purpose-built for AI-assisted software engineering, this system prompt collection governs how Claude Code plans, executes, and coordinates work across the full development lifecycle — from safe command execution and multi-agent orchestration to persistent memory, security enforcement, and developer-facing APIs.

## Table of Contents

1. [Bash Execution and File System Tools](#1-bash-execution-and-file-system-tools)
   1. [Bash Command Execution & Best Practices](#11-bash-command-execution-best-practices)
      1. [Bash (alternative — communication) [Tool Description]](#111-bash-alternative-—-communication-tool-description)
      2. [Bash (alternative — content search) [Tool Description]](#112-bash-alternative-—-content-search-tool-description)
      3. [Bash (alternative — edit files) [Tool Description]](#113-bash-alternative-—-edit-files-tool-description)
      4. [Bash (alternative — file search) [Tool Description]](#114-bash-alternative-—-file-search-tool-description)
      5. [Bash (alternative — read files) [Tool Description]](#115-bash-alternative-—-read-files-tool-description)
      6. [Bash (alternative — write files) [Tool Description]](#116-bash-alternative-—-write-files-tool-description)
      7. [Bash (built-in tools note) [Tool Description]](#117-bash-built-in-tools-note-tool-description)
      8. [Bash (command description) [Tool Description]](#118-bash-command-description-tool-description)
      9. [Bash (maintain cwd) [Tool Description]](#119-bash-maintain-cwd-tool-description)
      10. [Bash (no newlines) [Tool Description]](#1110-bash-no-newlines-tool-description)
      11. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
      12. [Bash (parallel commands) [Tool Description]](#1112-bash-parallel-commands-tool-description)
      13. [Bash (prefer dedicated tools) [Tool Description]](#1113-bash-prefer-dedicated-tools-tool-description)
      14. [Bash (quote file paths) [Tool Description]](#1114-bash-quote-file-paths-tool-description)
      15. [Bash (semicolon usage) [Tool Description]](#1115-bash-semicolon-usage-tool-description)
      16. [Bash (sequential commands) [Tool Description]](#1116-bash-sequential-commands-tool-description)
      17. [Bash (sleep — keep short) [Tool Description]](#1117-bash-sleep-—-keep-short-tool-description)
      18. [Bash (sleep — no polling background tasks) [Tool Description]](#1118-bash-sleep-—-no-polling-background-tasks-tool-description)
      19. [Bash (sleep — run immediately) [Tool Description]](#1119-bash-sleep-—-run-immediately-tool-description)
      20. [Bash (sleep — use check commands) [Tool Description]](#1120-bash-sleep-—-use-check-commands-tool-description)
      21. [Bash (timeout) [Tool Description]](#1121-bash-timeout-tool-description)
      22. [Bash (verify parent directory) [Tool Description]](#1122-bash-verify-parent-directory-tool-description)
      23. [Bash (working directory) [Tool Description]](#1123-bash-working-directory-tool-description)
      24. [One of six rules for using sleep command (System Prompt)](#1124-one-of-six-rules-for-using-sleep-command-system-prompt)
      25. [Bash command description writer (Agent Prompt)](#1125-bash-command-description-writer-agent-prompt)
   2. [File System Access & Manipulation Tools](#12-file-system-access-manipulation-tools)
      1. [Glob (Tool Description)](#121-glob-tool-description)
      2. [Grep (Tool Description)](#122-grep-tool-description)
      3. [ReadFile (Tool Description)](#123-readfile-tool-description)
      4. [Write (Tool Description)](#124-write-tool-description)
      5. [Edit (Tool Description)](#125-edit-tool-description)
      6. [Tool usage (edit files) [System Prompt]](#126-tool-usage-edit-files-system-prompt)
      7. [Tool usage (read files) [System Prompt]](#127-tool-usage-read-files-system-prompt)
      8. [Tool usage (search content) [System Prompt]](#128-tool-usage-search-content-system-prompt)
      9. [Tool usage (search files) [System Prompt]](#129-tool-usage-search-files-system-prompt)
      10. [Tool usage (create files) [System Prompt]](#1210-tool-usage-create-files-system-prompt)
      11. [Tool usage (direct search) [System Prompt]](#1211-tool-usage-direct-search-system-prompt)
      12. [Tool usage (reserve Bash) [System Prompt]](#1212-tool-usage-reserve-bash-system-prompt)
2. [Security, Sandbox, and Lifecycle Automation](#2-security-sandbox-and-lifecycle-automation)
   1. [Bash Sandbox Security & Restriction Management](#21-bash-sandbox-security-restriction-management)
      1. [Bash (sandbox — adjust settings) [Tool Description]](#211-bash-sandbox-—-adjust-settings-tool-description)
      2. [Bash (sandbox — default to sandbox) [Tool Description]](#212-bash-sandbox-—-default-to-sandbox-tool-description)
      3. [Bash (sandbox — evidence: access denied) [Tool Description]](#213-bash-sandbox-—-evidence-access-denied-tool-description)
      4. [Bash (sandbox — evidence list header) [Tool Description]](#214-bash-sandbox-—-evidence-list-header-tool-description)
      5. [Bash (sandbox — evidence: network failures) [Tool Description]](#215-bash-sandbox-—-evidence-network-failures-tool-description)
      6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#216-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#217-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
      8. [Bash (sandbox — explain restriction) [Tool Description]](#218-bash-sandbox-—-explain-restriction-tool-description)
      9. [Bash (sandbox — failure evidence condition) [Tool Description]](#219-bash-sandbox-—-failure-evidence-condition-tool-description)
      10. [Bash (sandbox — mandatory mode) [Tool Description]](#2110-bash-sandbox-—-mandatory-mode-tool-description)
      11. [Bash (sandbox — no exceptions) [Tool Description]](#2111-bash-sandbox-—-no-exceptions-tool-description)
      12. [Bash (sandbox — no sensitive paths) [Tool Description]](#2112-bash-sandbox-—-no-sensitive-paths-tool-description)
      13. [Bash (sandbox — per-command) [Tool Description]](#2113-bash-sandbox-—-per-command-tool-description)
      14. [Bash (sandbox — response header) [Tool Description]](#2114-bash-sandbox-—-response-header-tool-description)
      15. [Bash (sandbox — retry without sandbox) [Tool Description]](#2115-bash-sandbox-—-retry-without-sandbox-tool-description)
      16. [Bash (sandbox — tmpdir) [Tool Description]](#2116-bash-sandbox-—-tmpdir-tool-description)
      17. [Bash (sandbox — user permission prompt) [Tool Description]](#2117-bash-sandbox-—-user-permission-prompt-tool-description)
      18. [Bash command prefix detection (Agent Prompt)](#2118-bash-command-prefix-detection-agent-prompt)
   2. [Security & Safety Guardrails](#22-security-safety-guardrails)
      1. [Censoring assistance with malicious activities (System Prompt)](#221-censoring-assistance-with-malicious-activities-system-prompt)
      2. [Doing tasks (security) [System Prompt]](#222-doing-tasks-security-system-prompt)
      3. [Executing actions with care (System Prompt)](#223-executing-actions-with-care-system-prompt)
      4. [Malware analysis after Read tool call (System Reminder)](#224-malware-analysis-after-read-tool-call-system-reminder)
      5. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#225-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      6. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#226-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      7. [/security-review slash command (Agent Prompt)](#227-security-review-slash-command-agent-prompt)
      8. [Tool execution denied (System Prompt)](#228-tool-execution-denied-system-prompt)
      9. [System section (System Prompt)](#229-system-section-system-prompt)
   3. [Hook System & Lifecycle Events](#23-hook-system-lifecycle-events)
      1. [Hooks Configuration (System Prompt)](#231-hooks-configuration-system-prompt)
      2. [Hook additional context (System Reminder)](#232-hook-additional-context-system-reminder)
      3. [Hook blocking error (System Reminder)](#233-hook-blocking-error-system-reminder)
      4. [Hook stopped continuation prefix (System Reminder)](#234-hook-stopped-continuation-prefix-system-reminder)
      5. [Hook stopped continuation (System Reminder)](#235-hook-stopped-continuation-system-reminder)
      6. [Hook success (System Reminder)](#236-hook-success-system-reminder)
      7. [Hook condition evaluator (Agent Prompt)](#237-hook-condition-evaluator-agent-prompt)
      8. [Agent Hook (Agent Prompt)](#238-agent-hook-agent-prompt)
3. [Multi-Agent Systems and Autonomous Execution](#3-multi-agent-systems-and-autonomous-execution)
   1. [Agent Coordination and Orchestration](#31-agent-coordination-and-orchestration)
      1. [Multi-Agent Coordination & Team Orchestration](#311-multi-agent-coordination-team-orchestration)
         1. [SendMessageTool (Tool Description)](#3111-sendmessagetool-tool-description)
         2. [SendMessageTool (non-agent-teams) [Tool Description]](#3112-sendmessagetool-non-agent-teams-tool-description)
         3. [TeammateTool (Tool Description)](#3113-teammatetool-tool-description)
         4. [TeamDelete (Tool Description)](#3114-teamdelete-tool-description)
         5. [TaskList (teammate workflow) [Tool Description]](#3115-tasklist-teammate-workflow-tool-description)
         6. [Agent (usage notes) [Tool Description]](#3116-agent-usage-notes-tool-description)
         7. [Agent (when to launch subagents) [Tool Description]](#3117-agent-when-to-launch-subagents-tool-description)
         8. [Teammate Communication (System Prompt)](#3118-teammate-communication-system-prompt)
         9. [Team Coordination (System Reminder)](#3119-team-coordination-system-reminder)
         10. [Team Shutdown (System Reminder)](#31110-team-shutdown-system-reminder)
         11. [How to use the SendUserMessage tool (System Prompt)](#31111-how-to-use-the-sendusermessage-tool-system-prompt)
         12. [Subagent delegation examples (System Prompt)](#31112-subagent-delegation-examples-system-prompt)
         13. [Writing subagent prompts (System Prompt)](#31113-writing-subagent-prompts-system-prompt)
         14. [Fork usage guidelines (System Prompt)](#31114-fork-usage-guidelines-system-prompt)
         15. [Tool usage (subagent guidance) [System Prompt]](#31115-tool-usage-subagent-guidance-system-prompt)
         16. [Tool usage (delegate exploration) [System Prompt]](#31116-tool-usage-delegate-exploration-system-prompt)
         17. [Agent mention (System Reminder)](#31117-agent-mention-system-reminder)
      2. [Autonomous & Auto Mode Execution](#312-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#3121-auto-mode-system-prompt)
         2. [Worker instructions (System Prompt)](#3122-worker-instructions-system-prompt)
         3. [Worker fork execution (Agent Prompt)](#3123-worker-fork-execution-agent-prompt)
         4. [/batch slash command (Agent Prompt)](#3124-batch-slash-command-agent-prompt)
         5. [Scratchpad directory (System Prompt)](#3125-scratchpad-directory-system-prompt)
   2. [Agent Design and Specialized Roles](#32-agent-design-and-specialized-roles)
      1. [Codebase Exploration & Analysis Agents](#321-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#3211-explore-agent-prompt)
         2. [Explore strengths and guidelines (Agent Prompt)](#3212-explore-strengths-and-guidelines-agent-prompt)
         3. [Verification specialist (Agent Prompt)](#3213-verification-specialist-agent-prompt)
         4. [CLAUDE.md creation (Agent Prompt)](#3214-claudemd-creation-agent-prompt)
         5. [Claude guide agent (Agent Prompt)](#3215-claude-guide-agent-agent-prompt)
      2. [Agent Creation & Configuration](#322-agent-creation-configuration)
         1. [Agent creation architect (Agent Prompt)](#3221-agent-creation-architect-agent-prompt)
      3. [Side Questions & Lightweight Agent Interactions](#323-side-questions-lightweight-agent-interactions)
         1. [/btw side question (System Reminder)](#3231-btw-side-question-system-reminder)
4. [Planning, Task Management, and Workflow Automation](#4-planning-task-management-and-workflow-automation)
   1. [Planning and Task Tracking](#41-planning-and-task-tracking)
      1. [Planning Mode & Implementation Planning](#411-planning-mode-implementation-planning)
         1. [EnterPlanMode (Tool Description)](#4111-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#4112-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#4113-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#4114-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#4115-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#4116-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#4117-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#4118-plan-file-reference-system-reminder)
         9. [Verify plan reminder (System Reminder)](#4119-verify-plan-reminder-system-reminder)
         10. [Phase four of plan mode (System Prompt)](#41110-phase-four-of-plan-mode-system-prompt)
         11. [Plan mode (enhanced) [Agent Prompt]](#41111-plan-mode-enhanced-agent-prompt)
      2. [Task & Todo Management](#412-task-todo-management)
         1. [TaskCreate (Tool Description)](#4121-taskcreate-tool-description)
         2. [TodoWrite (Tool Description)](#4122-todowrite-tool-description)
         3. [Tool usage (task management) [System Prompt]](#4123-tool-usage-task-management-system-prompt)
         4. [Task status (System Reminder)](#4124-task-status-system-reminder)
         5. [Task tools reminder (System Reminder)](#4125-task-tools-reminder-system-reminder)
         6. [TodoWrite reminder (System Reminder)](#4126-todowrite-reminder-system-reminder)
   2. [Skills, Commands, and User Interaction](#42-skills-commands-and-user-interaction)
      1. [Skills System & Slash Commands](#421-skills-system-slash-commands)
         1. [Skill (Tool Description)](#4211-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#4212-tool-usage-skill-invocation-system-prompt)
         3. [Invoked skills (System Reminder)](#4213-invoked-skills-system-reminder)
         4. [Skillify Current Session (System Prompt)](#4214-skillify-current-session-system-prompt)
         5. [Create verifier skills (Skill)](#4215-create-verifier-skills-skill)
         6. [Verification specialist (Skill)](#4216-verification-specialist-skill)
         7. [Simplify (Skill)](#4217-simplify-skill)
         8. [Debugging (Skill)](#4218-debugging-skill)
         9. [/stuck slash command (Skill)](#4219-stuck-slash-command-skill)
         10. [Update Claude Code Config (Skill)](#42110-update-claude-code-config-skill)
         11. [update-config (7-step verification flow) [Skill]](#42111-update-config-7-step-verification-flow-skill)
         12. [/init CLAUDE.md and skill setup (new version) [Skill]](#42112-init-claudemd-and-skill-setup-new-version-skill)
      2. [User Interaction & Question Tools](#422-user-interaction-question-tools)
         1. [AskUserQuestion (Tool Description)](#4221-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#4222-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#4223-option-previewer-system-prompt)
   3. [Scheduling & Background Tasks](#43-scheduling-background-tasks)
      1. [CronCreate (Tool Description)](#431-croncreate-tool-description)
      2. [Sleep (Tool Description)](#432-sleep-tool-description)
      3. [/loop slash command (Skill)](#433-loop-slash-command-skill)
5. [Git, Code Quality, and IDE Integration](#5-git-code-quality-and-ide-integration)
   1. [Version Control and GitHub Workflows](#51-version-control-and-github-workflows)
      1. [Git & Version Control Workflows](#511-git-version-control-workflows)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#5111-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#5112-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#5113-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#5114-bash-git-—-prefer-new-commits-tool-description)
         5. [EnterWorktree (Tool Description)](#5115-enterworktree-tool-description)
         6. [ExitWorktree (Tool Description)](#5116-exitworktree-tool-description)
         7. [Quick git commit (Agent Prompt)](#5117-quick-git-commit-agent-prompt)
         8. [Quick PR creation (Agent Prompt)](#5118-quick-pr-creation-agent-prompt)
         9. [Session title and branch generation (Agent Prompt)](#5119-session-title-and-branch-generation-agent-prompt)
         10. [Git status (System Prompt)](#51110-git-status-system-prompt)
      2. [GitHub & PR Workflow Agents](#512-github-pr-workflow-agents)
         1. [/pr-comments slash command (Agent Prompt)](#5121-pr-comments-slash-command-agent-prompt)
         2. [/review-pr slash command (Agent Prompt)](#5122-review-pr-slash-command-agent-prompt)
         3. [GitHub Actions workflow for @claude mentions (Data)](#5123-github-actions-workflow-for-claude-mentions-data)
         4. [GitHub App installation PR description (Data)](#5124-github-app-installation-pr-description-data)
   2. [Code Quality and IDE Tools](#52-code-quality-and-ide-tools)
      1. [Code Quality & Engineering Practices](#521-code-quality-engineering-practices)
         1. [Doing tasks (avoid over-engineering) [System Prompt]](#5211-doing-tasks-avoid-over-engineering-system-prompt)
         2. [Doing tasks (no compatibility hacks) [System Prompt]](#5212-doing-tasks-no-compatibility-hacks-system-prompt)
         3. [Doing tasks (no premature abstractions) [System Prompt]](#5213-doing-tasks-no-premature-abstractions-system-prompt)
         4. [Doing tasks (no unnecessary additions) [System Prompt]](#5214-doing-tasks-no-unnecessary-additions-system-prompt)
         5. [Doing tasks (no unnecessary error handling) [System Prompt]](#5215-doing-tasks-no-unnecessary-error-handling-system-prompt)
         6. [Doing tasks (minimize file creation) [System Prompt]](#5216-doing-tasks-minimize-file-creation-system-prompt)
         7. [Doing tasks (read before modifying) [System Prompt]](#5217-doing-tasks-read-before-modifying-system-prompt)
         8. [Doing tasks (software engineering focus) [System Prompt]](#5218-doing-tasks-software-engineering-focus-system-prompt)
         9. [Doing tasks (blocked approach) [System Prompt]](#5219-doing-tasks-blocked-approach-system-prompt)
         10. [Doing tasks (ambitious tasks) [System Prompt]](#52110-doing-tasks-ambitious-tasks-system-prompt)
         11. [Doing tasks (no time estimates) [System Prompt]](#52111-doing-tasks-no-time-estimates-system-prompt)
         12. [Doing tasks (help and feedback) [System Prompt]](#52112-doing-tasks-help-and-feedback-system-prompt)
      2. [Code Intelligence & IDE Integration](#522-code-intelligence-ide-integration)
         1. [LSP (Tool Description)](#5221-lsp-tool-description)
         2. [NotebookEdit (Tool Description)](#5222-notebookedit-tool-description)
         3. [Lines selected in IDE (System Reminder)](#5223-lines-selected-in-ide-system-reminder)
         4. [File opened in IDE (System Reminder)](#5224-file-opened-in-ide-system-reminder)
         5. [New diagnostics detected (System Reminder)](#5225-new-diagnostics-detected-system-reminder)
6. [Session Continuity, Memory, and User Experience](#6-session-continuity-memory-and-user-experience)
   1. [Context and Memory Persistence](#61-context-and-memory-persistence)
      1. [Session & Context Management](#611-session-context-management)
         1. [Compact file reference (System Reminder)](#6111-compact-file-reference-system-reminder)
         2. [File exists but empty (System Reminder)](#6112-file-exists-but-empty-system-reminder)
         3. [File modified by user or linter (System Reminder)](#6113-file-modified-by-user-or-linter-system-reminder)
         4. [File shorter than offset (System Reminder)](#6114-file-shorter-than-offset-system-reminder)
         5. [File truncated (System Reminder)](#6115-file-truncated-system-reminder)
         6. [Session continuation (System Reminder)](#6116-session-continuation-system-reminder)
         7. [Context compaction summary (System Prompt)](#6117-context-compaction-summary-system-prompt)
         8. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#6118-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
         9. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#6119-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
         10. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#61110-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
         11. [Conversation summarization (Agent Prompt)](#61111-conversation-summarization-agent-prompt)
         12. [Recent Message Summarization (Agent Prompt)](#61112-recent-message-summarization-agent-prompt)
      2. [Memory & Knowledge Persistence](#612-memory-knowledge-persistence)
         1. [Memory file contents (System Reminder)](#6121-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#6122-nested-memory-contents-system-reminder)
         3. [Memory description of user feedback (System Prompt)](#6123-memory-description-of-user-feedback-system-prompt)
         4. [Description part of memory instructions (System Prompt)](#6124-description-part-of-memory-instructions-system-prompt)
         5. [Team memory content display (System Prompt)](#6125-team-memory-content-display-system-prompt)
         6. [Agent memory instructions (System Prompt)](#6126-agent-memory-instructions-system-prompt)
         7. [Session memory update instructions (Agent Prompt)](#6127-session-memory-update-instructions-agent-prompt)
         8. [Dream memory consolidation (Agent Prompt)](#6128-dream-memory-consolidation-agent-prompt)
         9. [Determine which memory files to attach (Agent Prompt)](#6129-determine-which-memory-files-to-attach-agent-prompt)
         10. [Session memory template (Data)](#61210-session-memory-template-data)
   2. [Session Metadata and Analytics](#62-session-metadata-and-analytics)
      1. [Session Metadata & UX Agents](#621-session-metadata-ux-agents)
         1. [Coding session title generator (Agent Prompt)](#6211-coding-session-title-generator-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#6212-session-search-assistant-agent-prompt)
         3. [Status line setup (Agent Prompt)](#6213-status-line-setup-agent-prompt)
         4. [Prompt Suggestion Generator v2 (Agent Prompt)](#6214-prompt-suggestion-generator-v2-agent-prompt)
      2. [Usage Insights & Analytics](#622-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#6221-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#6222-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#6223-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#6224-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#6225-insights-suggestions-system-prompt)
      3. [Documentation & Knowledge Management Agents](#623-documentation-knowledge-management-agents)
         1. [Update Magic Docs (Agent Prompt)](#6231-update-magic-docs-agent-prompt)
   3. [Learning Mode & Education](#63-learning-mode-education)
      1. [Learning mode (System Prompt)](#631-learning-mode-system-prompt)
      2. [Learning mode (insights) [System Prompt]](#632-learning-mode-insights-system-prompt)
7. [API, SDK, and Developer Documentation](#7-api-sdk-and-developer-documentation)
   1. [Claude API and Agent SDK References](#71-claude-api-and-agent-sdk-references)
      1. [Claude API Reference Documentation](#711-claude-api-reference-documentation)
         1. [Claude API reference — Python (Data)](#7111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#7112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#7113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#7114-claude-api-reference-—-java-data)
         5. [Claude API reference — C# (Data)](#7115-claude-api-reference-—-c-data)
         6. [Claude API reference — PHP (Data)](#7116-claude-api-reference-—-php-data)
         7. [Claude API reference — Ruby (Data)](#7117-claude-api-reference-—-ruby-data)
         8. [Claude API reference — cURL (Data)](#7118-claude-api-reference-—-curl-data)
         9. [Claude model catalog (Data)](#7119-claude-model-catalog-data)
         10. [HTTP error codes reference (Data)](#71110-http-error-codes-reference-data)
         11. [Live documentation sources (Data)](#71111-live-documentation-sources-data)
         12. [Build with Claude API (Skill)](#71112-build-with-claude-api-skill)
         13. [Build with Claude API (reference guide) [Skill]](#71113-build-with-claude-api-reference-guide-skill)
      2. [Agent SDK Reference & Patterns](#712-agent-sdk-reference-patterns)
         1. [Agent SDK reference — Python (Data)](#7121-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#7122-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#7123-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#7124-agent-sdk-patterns-—-typescript-data)
         5. [Tool use concepts (Data)](#7125-tool-use-concepts-data)
         6. [Tool use reference — Python (Data)](#7126-tool-use-reference-—-python-data)
         7. [Tool use reference — TypeScript (Data)](#7127-tool-use-reference-—-typescript-data)
         8. [Streaming reference — Python (Data)](#7128-streaming-reference-—-python-data)
         9. [Streaming reference — TypeScript (Data)](#7129-streaming-reference-—-typescript-data)
         10. [Files API reference — Python (Data)](#71210-files-api-reference-—-python-data)
         11. [Files API reference — TypeScript (Data)](#71211-files-api-reference-—-typescript-data)
         12. [Message Batches API reference — Python (Data)](#71212-message-batches-api-reference-—-python-data)
   2. [Web Access and Output Communication](#72-web-access-and-output-communication)
      1. [Web & Browser Tools](#721-web-browser-tools)
         1. [WebFetch (Tool Description)](#7211-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#7212-websearch-tool-description)
         3. [Computer (Tool Description)](#7213-computer-tool-description)
         4. [Computer action (Tool Parameter)](#7214-computer-action-tool-parameter)
         5. [Claude in Chrome browser automation (System Prompt)](#7215-claude-in-chrome-browser-automation-system-prompt)
         6. [Chrome browser MCP tools (System Prompt)](#7216-chrome-browser-mcp-tools-system-prompt)
         7. [WebFetch summarizer (Agent Prompt)](#7217-webfetch-summarizer-agent-prompt)
      2. [Output Style & Communication Guidelines](#722-output-style-communication-guidelines)
         1. [Output efficiency (System Prompt)](#7221-output-efficiency-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#7222-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#7223-tone-and-style-concise-output-—-short-system-prompt)
         4. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#7224-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         5. [Tool Use Summary Generation (System Prompt)](#7225-tool-use-summary-generation-system-prompt)
         6. [Agent Summary Generation (System Prompt)](#7226-agent-summary-generation-system-prompt)
         7. [Agent thread notes (System Prompt)](#7227-agent-thread-notes-system-prompt)
         8. [Output style active (System Reminder)](#7228-output-style-active-system-reminder)
         9. [Common suffix (response format) [Agent Prompt]](#7229-common-suffix-response-format-agent-prompt)
   3. [Runtime Resource and Tool Management](#73-runtime-resource-and-tool-management)
      1. [MCP Resource Handling](#731-mcp-resource-handling)
         1. [MCP resource no content (System Reminder)](#7311-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#7312-mcp-resource-no-displayable-content-system-reminder)
      2. [Resource & Budget Monitoring](#732-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#7321-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#7322-usd-budget-system-reminder)
      3. [Tool Discovery & Dynamic Tools](#733-tool-discovery-dynamic-tools)
         1. [ToolSearch (second part) [Tool Description]](#7331-toolsearch-second-part-tool-description)

---

## 1. Bash Execution and File System Tools

Core tools and guidelines for running bash commands safely and performing filesystem operations. Covers command chaining, parallel execution, and dedicated tools for file discovery, search, reading, and editing.

### 1.1 Bash Command Execution & Best Practices

Guidelines for executing bash commands efficiently and safely, emphasizing use of dedicated tools (Read, Write, Edit, Glob, Grep) over bash equivalents for better UX, proper command chaining with `&&` for dependencies, parallel execution for independent commands, and careful handling of sleep, timeouts, and working directory state.

#### 1.1.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Output text directly instead of using echo or printf.

#### 1.1.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Use the Grep tool for content search instead of grep or rg commands.

#### 1.1.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Use the Edit tool for file editing instead of sed or awk commands.

#### 1.1.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Use the Glob tool for file search instead of find or ls commands.

#### 1.1.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Use the Read tool for file reading instead of cat, head, or tail commands.

#### 1.1.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Use the Write tool for file writing instead of echo or cat commands.

#### 1.1.7 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Built-in tools provide better user experience and easier review than Bash equivalents.

#### 1.1.8 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Write clear, concise descriptions of bash commands—brief for simple commands, detailed for complex ones with pipes or obscure flags.

#### 1.1.9 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Maintain current working directory throughout the session by using absolute paths and avoiding cd unless explicitly requested.

#### 1.1.10 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate commands in bash.

#### 1.1.11 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Executes a given bash command and returns its output.

#### 1.1.12 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent bash commands as parallel tool calls in a single message to improve efficiency.

#### 1.1.13 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for find, grep, cat, and similar commands; use dedicated tools instead for better user experience.

#### 1.1.14 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.15 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs using semicolons only when commands must run sequentially but earlier command failures do not matter.

#### 1.1.16 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Directs chaining dependent commands with `&&` in a single bash call to ensure sequential execution with failure handling.

#### 1.1.17 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Requires keeping sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.1.18 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Prohibits polling background tasks started with `run_in_background`; Claude will be notified when they complete.

#### 1.1.19 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Prohibits sleeping between commands that can run immediately; just execute them.

#### 1.1.20 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Directs using check commands like `gh run view` instead of sleeping when polling external processes.

#### 1.1.21 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Allows specifying an optional timeout in milliseconds up to a maximum, with a default timeout applied if not specified.

#### 1.1.22 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Requires verifying the parent directory exists and is correct using `ls` before creating new directories or files.

#### 1.1.23 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not; the shell environment initializes from the user's bash or zsh profile.

#### 1.1.24 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Instructs Claude not to retry failing commands in sleep loops but instead diagnose root causes.

#### 1.1.25 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief while adding context for complex piped or flag-heavy operations.

### 1.2 File System Access & Manipulation Tools

Dedicated tools for filesystem operations replacing bash equivalents: Glob for fast pattern-based file discovery, Grep for regex-powered content search, ReadFile for multimodal file access, Write for file creation, and Edit for precise string replacements with indentation preservation.

#### 1.2.1 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like **/*.js to find files by name across any codebase size.

#### 1.2.2 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search tool built on ripgrep supporting regex patterns, file filtering, and multiple output modes for locating code and text across repositories.

#### 1.2.3 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs, Jupyter notebooks, and configurable line limits for large files.

#### 1.2.4 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, preferring the Edit tool for modifications and avoiding creation of documentation unless explicitly requested.

#### 1.2.5 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with strict matching requirements. Requires preserving indentation from Read tool output, prefers editing existing files over creating new ones, and uses `replace_all` for renaming variables or replacing all instances.

#### 1.2.6 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs Claude to use the Edit tool for file modifications instead of sed or awk.

#### 1.2.7 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool for file access instead of cat, head, tail, or sed.

#### 1.2.8 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs Claude to use the Grep tool for file content searches instead of grep or rg.

#### 1.2.9 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool for file discovery instead of find or ls.

#### 1.2.10 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use Write tool instead of cat heredoc or echo redirection for file creation.

#### 1.2.11 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob and Grep directly for simple, directed codebase searches like finding specific files, classes, or functions.

#### 1.2.12 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

---

## 2. Security, Sandbox, and Lifecycle Automation

Enforces security boundaries across bash execution, agent actions, and system events. Covers sandbox restrictions, vulnerability prevention, authorization validation, and event-driven hooks for lifecycle automation.

### 2.1 Bash Sandbox Security & Restriction Management

Mandatory sandbox enforcement for all bash commands with automatic failure detection, restriction explanation, and retry logic. Prohibits sensitive path allowlisting and requires per-command sandbox decisions while supporting user-initiated sandbox adjustments and temporary file handling via environment variables.

#### 2.1.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

If a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

#### 2.1.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always default to running commands within the sandbox; only bypass when user asks or sandbox restriction evidence appears.

#### 2.1.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied to paths outside allowed directories indicates sandbox restriction.

#### 2.1.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing evidence types that indicate sandbox-caused failures.

#### 2.1.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox restriction.

#### 2.1.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "operation not permitted" errors as evidence of sandbox restrictions on file and network operations.

#### 2.1.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Recognizes Unix socket connection errors as sandbox restriction evidence.

#### 2.1.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

#### 2.1.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with clear evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure modes.

#### 2.1.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 2.1.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 2.1.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 2.1.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Requires treating each command individually and defaulting to sandbox mode for future commands even after running one with `dangerouslyDisableSandbox: true`.

#### 2.1.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provides a header phrase for responding when sandbox-caused failures are detected.

#### 2.1.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with `dangerouslyDisableSandbox: true` when sandbox failure is detected, without asking the user first.

#### 2.1.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode instead of `/tmp` directly.

#### 2.1.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

#### 2.1.18 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands to enforce safety policies, returning the extracted prefix or 'command_injection_detected' for malicious patterns.

### 2.2 Security & Safety Guardrails

Enforces security boundaries through vulnerability prevention, authorization context validation, and autonomous agent action monitoring. Covers injection attack prevention, reversibility assessment for destructive operations, malware analysis without augmentation, and threat modeling for prompt injection and scope creep while enabling authorized security testing and defensive workflows.

#### 2.2.1 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing requests for destructive techniques, DoS attacks, supply chain compromise, or detection evasion for malicious purposes.

#### 2.2.2 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Prioritizes avoiding security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks, with immediate remediation of any insecure code.

#### 2.2.3 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Requires careful consideration of reversibility and blast radius for actions, with user confirmation for destructive, hard-to-reverse, or shared-system operations, while investigating unexpected state before deletion and resolving conflicts rather than discarding changes.

#### 2.2.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware behavior and provide reports without improving or augmenting malicious code.

#### 2.2.5 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor evaluating autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with threat model covering prompt injection, scope escalation, and unintended consequences.

#### 2.2.6 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, block rules, and allow exceptions governing which tool actions autonomous agents may perform, covering git safety, code execution, infrastructure, credentials, and data exfiltration.

#### 2.2.7 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of PR changes identifying high-confidence exploitable vulnerabilities in input validation, authentication, cryptography, injection, and data exposure with false-positive filtering and confidence scoring.

#### 2.2.8 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable alternative tools when execution is denied, but avoid malicious workarounds, and escalate to user if capability is essential.

#### 2.2.9 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Describes tool execution permission modes and user approval workflows, instructing Claude not to re-attempt denied tool calls but instead adjust approach or ask for clarification.

### 2.3 Hook System & Lifecycle Events

Provides event-driven automation for Claude Code lifecycle through hooks that intercept tool execution, session transitions, and compaction events. Supports conditional logic, blocking/non-blocking execution, and context injection via JSON payloads, enabling custom workflows, stop conditions, and automated notifications tied to specific system states.

#### 2.3.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines hook system for Claude Code lifecycle events with command, prompt, and agent hook types supporting pre/post tool execution, notifications, compaction, and session events, with JSON input/output for control and context injection.

#### 2.3.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution.

#### 2.3.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

#### 2.3.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix string for hook stopped continuation messages.

#### 2.3.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Reports that a hook has stopped continuation with an associated message.

#### 2.3.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports a success message from a hook execution.

#### 2.3.7 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether a condition is met or providing a reason if not.

#### 2.3.8 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured results indicating whether an agent completed its assigned plan.

---

## 3. Multi-Agent Systems and Autonomous Execution

Frameworks for coordinating teams of specialized agents, delegating tasks concurrently, and running background workflows with minimal interruption. Includes agent creation, configuration, and lightweight one-off interactions.

### 3.1 Agent Coordination and Orchestration

Team creation, task distribution, inter-agent messaging, and result aggregation for concurrent multi-agent workflows.

#### 3.1.1 Multi-Agent Coordination & Team Orchestration

Framework for coordinating multiple specialized agents through team creation, task distribution, and inter-agent messaging. Enables concurrent task execution via subagent forking, graceful team shutdown, context-aware delegation with directive or full-briefing styles, and result aggregation while maintaining output integrity and avoiding mid-flight result fabrication.

##### 3.1.1.1 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables agent teammates to send messages and handle protocol requests including shutdown and plan approval workflows in a coordinated team environment.

##### 3.1.1.2 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown messages to users with optional file attachments, using status labels to indicate intent and routing.

##### 3.1.1.3 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Coordinates multiple agents in a team by creating teams, spawning teammates with appropriate capabilities, assigning tasks, and managing team workflows including idle states and message delivery.

##### 3.1.1.4 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all active members to be terminated first.

##### 3.1.1.5 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from a shared task list, prioritizing by task ID and managing blockers.

##### 3.1.1.6 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guide for the Agent tool covering subagent launching, concurrent execution, background tasks, resumption, worktree isolation, and context preservation across different execution contexts.

##### 3.1.1.7 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when and how to launch specialized subagent types for autonomous multi-step task handling, with available agent types and capability reference.

##### 3.1.1.8 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool for teammate communication, with specific addressing for individual teammates or team-wide broadcasts.

##### 3.1.1.9 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and messaging protocols for coordinating with teammates and the team lead.

##### 3.1.1.10 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to gracefully shut down all team members before returning a final response in non-interactive mode.

##### 3.1.1.11 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to use SendUserMessage for all user-facing replies, with acknowledgment before work, checkpoints during longer tasks, and tight messaging focused on decisions and results.

##### 3.1.1.12 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results, showing how coordinator agents fork work and respond to mid-wait user queries.

##### 3.1.1.13 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts, distinguishing between context-inheriting agents (directive-style) and fresh agents (full-context briefing), emphasizing specific details over generic commands.

##### 3.1.1.14 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Specifies when to fork subagents for research and implementation, prohibits reading fork output mid-flight or fabricating results, and requires trusting completion notifications rather than predicting outcomes.

##### 3.1.1.15 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool to delegate work to specialized subagents for parallelization and context protection, while avoiding duplicate work.

##### 3.1.1.16 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Instructs Claude to use Task tool with exploration subagent for broader codebase research when simple directed searches prove insufficient or exceed query limits.

##### 3.1.1.17 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and to pass required context to it.

#### 3.1.2 Autonomous & Auto Mode Execution

Framework for continuous background task execution with minimal user interruption, emphasizing immediate implementation over planning. Defines structured workflows for code simplification, testing, and git operations, with isolated working spaces and strict safeguards against unauthorized public service interactions.

##### 3.1.2.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate implementation, minimal interruptions, preference for action over planning, and strict prohibition on posting to public services without explicit user approval.

##### 3.1.2.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for workers implementing changes: simplify code, run unit tests, test end-to-end, commit and push with PR creation, and report the PR URL.

##### 3.1.2.3 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

System prompt for a forked worker sub-agent that executes directives directly without spawning further sub-agents, using tools silently and reporting structured results under 500 words.

##### 3.1.2.4 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining e2e test recipes, and spawning background worker agents with isolated worktrees.

##### 3.1.2.5 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories, enabling isolated working space without permission prompts.

### 3.2 Agent Design and Specialized Roles

Designing agent personas and system prompts, building read-only codebase analysis agents, and handling lightweight conversational queries.

#### 3.2.1 Codebase Exploration & Analysis Agents

Specialized read-only and verification agents for navigating, analyzing, and validating codebases. Covers file search and pattern discovery, adversarial testing for quality assurance, documentation generation, and guidance on Claude tooling and APIs.

##### 3.2.1.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist for navigating codebases using glob patterns, grep searches, and file reads, with strict prohibitions on file modifications or state changes.

##### 3.2.1.2 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines the read-only Explore subagent's strengths in searching and analyzing codebases, emphasizing thorough multi-location searches, established patterns, and avoiding unnecessary file creation.

##### 3.2.1.3 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Verification agent that adversarially tests implementations by running builds, tests, linters, and probes for concurrency/boundary/idempotency issues, issuing PASS/FAIL/PARTIAL verdicts with command evidence.

##### 3.2.1.4 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation by documenting common build/test/lint commands, high-level architecture, and project-specific conventions without repeating obvious practices.

##### 3.2.1.5 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, the Claude Agent SDK, and the Claude API by fetching official documentation, providing actionable guidance, and referencing local project files like CLAUDE.md.

#### 3.2.2 Agent Creation & Configuration

Designs high-performance AI agent configurations by translating user intent into expert personas and comprehensive system prompts, then optimizing and packaging them as executable JSON specifications.

##### 3.2.2.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design high-performance AI agent configurations by extracting user intent, creating expert personas, architecting comprehensive system prompts, optimizing for performance, and generating JSON specifications with identifiers and usage examples.

#### 3.2.3 Side Questions & Lightweight Agent Interactions

Handles tangential queries as isolated conversational responses without tool access or commitment to follow-up actions.

##### 3.2.3.1 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude to answer a side question as a lightweight, tool-less agent running independently from the main agent, using only conversation context without promising further actions.

---

## 4. Planning, Task Management, and Workflow Automation

Structured approaches to organizing work before and during execution — from approval-gated planning and task tracking to user-invocable skills, interactive clarification, and scheduled background jobs.

### 4.1 Planning and Task Tracking

Controlled planning workflows that defer execution pending approval, and structured task state management for multi-step coding sessions.

#### 4.1.1 Planning Mode & Implementation Planning

Controlled planning workflows that defer execution while exploring codebases, designing approaches, and building consensus through iterative or structured multi-phase processes. Restricts modifications to plan files until explicit approval, enabling comprehensive architectural review before implementation begins.

##### 4.1.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore the codebase and design implementation approaches for user approval before coding. Use proactively for non-trivial tasks involving new features, multiple approaches, code modifications, architectural decisions, multi-file changes, unclear requirements, or user preference matters.

##### 4.1.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of implementation planning and requests user approval to proceed with coding tasks, reading the plan from a file and presenting it for review.

##### 4.1.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow: initial understanding via parallel exploration agents, design via planning agents, review, phase four execution, and plan approval. Prohibits edits outside the plan file and requires explicit exit via tool call.

##### 4.1.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, asks clarifying questions, and converges on a complete plan before requesting approval.

##### 4.1.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagent behavior to read-only operations and plan file editing, prohibiting execution while enabling comprehensive query answering and clarification questions.

##### 4.1.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude to evaluate existing plan files when re-entering plan mode, deciding whether to continue or overwrite based on task relevance.

##### 4.1.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and it can now execute edits, run tools, and take actions, with optional reference to the plan file.

##### 4.1.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant.

##### 4.1.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion using a verification tool after implementation is finished.

##### 4.1.1.10 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes concise implementation plans to file with file paths, changes, function references, and verification command, hard-limited to 40 lines.

##### 4.1.1.11 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases, designs implementation plans, identifies critical files, and considers architectural trade-offs without modifying any files.

#### 4.1.2 Task & Todo Management

Structured task tracking systems that break down complex work into discrete steps with state management (pending, in-progress, completed) to organize multi-step coding sessions and coordinate team efforts. Includes automated reminders to maintain task visibility throughout execution.

##### 4.1.2.1 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress on complex multi-step work and coordinate with teammates in team workflows.

##### 4.1.2.2 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with state tracking (pending, in_progress, completed) to organize complex multi-step work and demonstrate progress.

##### 4.1.2.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite tool to break down work into tasks, track progress, and mark tasks complete immediately upon finishing.

##### 4.1.2.4 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

References the TaskOutput tool for checking task execution results.

##### 4.1.2.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task creation and update tools for tracking progress on relevant work, with instruction not to mention this reminder to the user.

##### 4.1.2.6 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task tracking when relevant, with instruction not to mention this reminder to the user.

### 4.2 Skills, Commands, and User Interaction

User-invocable slash commands and skills that extend Claude's capabilities, plus interactive tools for gathering requirements and presenting choices.

#### 4.2.1 Skills System & Slash Commands

User-invocable skills and slash commands extend Claude's capabilities within conversations, enabling specialized domain tasks and workflow automation. Skills are created through structured analysis of repeatable workflows, configured with execution modes and verification criteria, and managed through session tracking and configuration files.

##### 4.2.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills and slash commands within conversations, providing domain-specific capabilities and requiring invocation before generating responses.

##### 4.2.1.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Instructs Claude to use the Skill tool to execute user-invocable skills (slash commands like /commit), only for skills listed in the tool's user-invocable section.

##### 4.2.1.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Notifies Claude of skills invoked in the current session and instructs it to continue following their guidelines.

##### 4.2.1.4 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable session workflows into reusable skills through structured analysis and multi-round user interviews, generating SKILL.md files with detailed steps, success criteria, and execution modes for inline or forked execution.

##### 4.2.1.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive onboarding for creating verifier skills that automatically test code changes, covering auto-detection of project types, setup of browser automation (Playwright, Chrome DevTools, Claude Chrome Extension), interactive Q&A for configuration, and skill generation with allowed-tools specifications.

##### 4.2.1.6 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering verifier skills, analyzing changes, generating deterministic verification plans, triggering verifiers, and reporting results with failure diagnostics.

##### 4.2.1.7 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel review agents to identify code reuse opportunities, quality issues, and efficiency problems, then fixes findings directly.

##### 4.2.1.8 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 4.2.1.9 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, detecting high CPU, I/O hangs, or memory leaks, and posting diagnostic reports to Slack.

##### 4.2.1.10 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json), handling hooks, permissions, environment variables, and MCP server configuration with careful merging of existing settings.

##### 4.2.1.11 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks for Claude Code, including dedup checks, command construction, pipe-testing, JSON validation, live proof, and handoff to user.

##### 4.2.1.12 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and optional skills/hooks, including codebase exploration, user interviews, iterative proposal refinement, and creation of project-level and personal-level configuration files.

#### 4.2.2 User Interaction & Question Tools

Interactive mechanisms for gathering user preferences, clarifying ambiguous requirements, and presenting implementation choices through structured questions with optional visual previews for side-by-side comparison of concrete options.

##### 4.2.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Use AskUserQuestion to gather user preferences, clarify ambiguous instructions, and offer implementation choices during execution. In plan mode, use it to clarify requirements before finalizing the plan, not to ask for plan approval.

##### 4.2.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Use the optional preview field on single-select question options to display self-contained HTML artifacts like UI mockups, code snippets, and diagrams for visual comparison.

##### 4.2.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for presenting visual artifacts like ASCII mockups, code snippets, and diagrams when users need to compare concrete options.

### 4.3 Scheduling & Background Tasks

Enables deferred and recurring task execution through cron-based scheduling with timezone awareness, load distribution via jitter, and immediate execution options. Supports both one-shot delays and repeating patterns, with automatic expiration and early wake capabilities for responsive task management.

#### 4.3.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron-based jobs using standard 5-field cron syntax in the user's local timezone. Recommends avoiding :00 and :30 minute marks to distribute load across the fleet, applies deterministic jitter, and auto-expires recurring tasks after 3 days.

#### 4.3.2 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input, preferred over bash sleep for resource efficiency.

#### 4.3.3 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts intervals to cron expressions, schedules recurring tasks, and immediately executes the prompt once.

---

## 5. Git, Code Quality, and IDE Integration

Version control workflows, GitHub PR automation, engineering discipline for code modifications, and language-aware IDE integration for semantic code navigation.

### 5.1 Version Control and GitHub Workflows

Git commit and branch management with strict safety protocols, plus GitHub integration for PR reviews, code comments, and CI/CD triggers.

#### 5.1.1 Git & Version Control Workflows

Comprehensive git operations including commit creation, pull request workflows, and worktree isolation with strict safety protocols: never commit without explicit request, avoid destructive operations, preserve hooks and signing, prefer new commits over amendments, and support isolated feature branches via worktree sessions.

##### 5.1.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

##### 5.1.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, commit message drafting, hook handling, and PR creation via gh command. Emphasizes never committing without explicit user request, avoiding destructive operations, and creating new commits rather than amending.

##### 5.1.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Never skip hooks or bypass signing unless the user explicitly requests it; investigate and fix underlying issues when hooks fail.

##### 5.1.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Prefer creating new commits over amending existing ones.

##### 5.1.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it when explicitly requested by the user, supporting both git repositories and VCS-agnostic workflows via hooks.

##### 5.1.1.6 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree, returning to the original directory with options to keep or remove the worktree and its branch.

##### 5.1.1.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository conventions, and executing the commit with safety protocols against amending or skipping hooks.

##### 5.1.1.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request by analyzing changes, creating a feature branch, committing with proper attribution, and opening a PR with title and body using GitHub CLI with safety guardrails.

##### 5.1.1.9 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent that generates concise session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

##### 5.1.1.10 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status snapshot at conversation start including branch, main branch reference, status, and recent commits.

#### 5.1.2 GitHub & PR Workflow Agents

Integration layer for GitHub-based development workflows, enabling Claude to fetch PR details, conduct code reviews, display comments with context, and trigger automated actions through GitHub Actions when mentioned in issues or pull requests.

##### 5.1.2.1 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including both PR-level and code review comments with file context, diff hunks, and threaded replies in a readable format.

##### 5.1.2.2 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Conducts expert code reviews of GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, performance, test coverage, and security implications.

##### 5.1.2.3 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, PRs, or comments, with optional custom prompts and tool configuration.

##### 5.1.2.4 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, workflow behavior, security considerations, and tool configuration.

### 5.2 Code Quality and IDE Tools

Engineering discipline around scope control and simplicity in code changes, alongside Language Server Protocol integration for symbol navigation and notebook editing.

#### 5.2.1 Code Quality & Engineering Practices

Disciplined approach to code modification that prioritizes simplicity, scope control, and engineering fundamentals. Emphasizes reading existing code before changes, eliminating unnecessary abstractions and error handling, and restricting work to explicitly requested functionality while deferring to user judgment on task ambition.

##### 5.2.1.1 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Restricts changes to directly requested or clearly necessary modifications, keeping solutions simple and focused.

##### 5.2.1.2 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Eliminates unused code completely rather than adding compatibility shims, re-exports, or deprecation comments.

##### 5.2.1.3 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Avoids creating helpers, utilities, or abstractions for one-time operations or hypothetical requirements, maintaining minimal necessary complexity.

##### 5.2.1.4 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Restricts changes to requested functionality only, avoiding refactoring, feature additions, docstrings, or comments beyond what was explicitly asked.

##### 5.2.1.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Omits error handling and validation for impossible scenarios, trusting internal code and framework guarantees while validating only at system boundaries.

##### 5.2.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Prioritizes editing existing files over creating new ones to prevent file bloat and build on existing work.

##### 5.2.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires reading and understanding existing code before proposing modifications.

##### 5.2.1.8 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Interprets user requests in the context of software engineering tasks including bug fixes, feature additions, refactoring, and code explanation, applying instructions to actual code rather than abstract responses.

##### 5.2.1.9 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instructs Claude to explore alternative approaches when blocked rather than brute-forcing, and to use AskUserQuestion to align on the right path forward.

##### 5.2.1.10 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Empowers Claude to tackle ambitious tasks that would otherwise be too complex or lengthy, deferring to user judgment on scope appropriateness.

##### 5.2.1.11 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Avoids providing time estimates or predictions for task completion, focusing on what needs to be done instead.

##### 5.2.1.12 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder prompt for informing users about help and feedback channels when requested.

#### 5.2.2 Code Intelligence & IDE Integration

Language-aware code analysis and notebook editing capabilities that provide symbol navigation, semantic references, and IDE context awareness. Enables intelligent code exploration and modification through Language Server Protocol integration and direct IDE event notifications.

##### 5.2.2.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides code intelligence features via Language Server Protocol including navigation, references, hover information, and call hierarchy analysis.

##### 5.2.2.2 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing their contents, supporting insertion and deletion of cells in .ipynb files.

##### 5.2.2.3 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Alerts Claude when a user selects specific lines in the IDE, providing file context and line range information.

##### 5.2.2.4 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 5.2.2.5 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the codebase or environment.

---

## 6. Session Continuity, Memory, and User Experience

Mechanisms for preserving context across sessions, building persistent institutional knowledge, and enhancing the user experience through metadata, analytics, and collaborative learning.

### 6.1 Context and Memory Persistence

Conversation continuity through file state tracking and summarization, plus hierarchical memory structures for user profiles, team guidance, and domain knowledge.

#### 6.1.1 Session & Context Management

Manages conversation continuity across sessions and context windows through file state tracking, structured summarization protocols, and continuation mechanisms. Handles file modifications, truncation, and offset errors while enabling efficient context compaction through systematic message analysis and structured summary formats that preserve task state, discoveries, and next steps.

##### 6.1.1.1 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs it to use the Read tool if access is needed.

##### 6.1.1.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 6.1.1.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides the relevant changes with line numbers for context.

##### 6.1.1.4 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that a file read offset exceeds the file's actual length and provides the total line count.

##### 6.1.1.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs it to use the Read tool for additional content if needed.

##### 6.1.1.6 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

##### 6.1.1.7 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries covering task overview, current state, discoveries, next steps, and context preservation to enable efficient resumption in future context windows.

##### 6.1.1.8 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

Instructs Claude to wrap analysis in tags and systematically review recent messages chronologically, identifying user requests, approaches, technical concepts, specific details, errors, and feedback to ensure thorough and accurate summarization.

##### 6.1.1.9 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

System prompt for analyzing full conversations during compaction, requiring chronological analysis of each message with attention to user requests, technical decisions, errors, and user feedback.

##### 6.1.1.10 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Lean experimental system prompt for compaction analysis using analysis tags as planning scratchpad, focusing on coverage rather than detail to avoid duplication in the summary section.

##### 6.1.1.11 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries covering primary requests, technical concepts, files examined, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps with code snippets and direct quotes.

##### 6.1.1.12 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes only recent conversation messages following earlier retained context, covering requests, technical concepts, files, errors, problem-solving, user messages, pending tasks, and next steps.

#### 6.1.2 Memory & Knowledge Persistence

Builds institutional knowledge across conversations through hierarchical memory structures storing user profiles, team guidance, domain-specific insights, and session learnings. Enables selective memory retrieval, consolidation of recent signals into topic files, and structured updates that maintain organized, current knowledge bases while avoiding duplication and contradictions.

##### 6.1.2.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, providing persistent context across sessions.

##### 6.1.2.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays contents of a nested memory file structure for hierarchical context management.

##### 6.1.2.3 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type that stores guidance about work approaches, emphasizing recording both successes and failures while checking for contradictions with team memories.

##### 6.1.2.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines memory descriptions as capturing user role, goals, responsibilities, and knowledge to enable personalized assistance while avoiding negative judgments or irrelevant information.

##### 6.1.2.5 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and content for injection into conversation context.

##### 6.1.2.6 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

##### 6.1.2.7 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for an agent to update session memory files by editing structured sections while preserving headers, italic descriptions, and avoiding references to the note-taking process itself.

##### 6.1.2.8 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs reflective memory consolidation by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to stay organized and current.

##### 6.1.2.9 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to attach for the main agent, being selective and excluding usage references for recently-used tools while including warnings and gotchas.

##### 6.1.2.10 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files documenting current state, task specification, files, workflow, errors, codebase documentation, learnings, key results, and worklog.

### 6.2 Session Metadata and Analytics

Session title generation, semantic search across history, terminal display configuration, usage pattern analysis, and friction detection for workflow improvement.

#### 6.2.1 Session Metadata & UX Agents

Agents that enhance user experience by managing session metadata, generating descriptive titles, enabling semantic search across session history, configuring terminal displays, and predicting user intent for prompt suggestions.

##### 6.2.1.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise, sentence-case session titles (3–7 words) that capture the main goal of a coding session in a way users recognize when reviewing session history.

##### 6.2.1.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Agent prompt for finding relevant sessions by matching user queries against session metadata including tags, titles, branches, and transcripts with high inclusivity and semantic matching.

##### 6.2.1.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Agent for configuring Claude Code status line display by converting shell PS1 configurations and creating custom shell commands that receive JSON session context via stdin.

##### 6.2.1.4 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent messages and context, avoiding evaluative or Claude-voice suggestions.

#### 6.2.2 Usage Insights & Analytics

Analyzes Claude Code usage patterns to identify what's working, where workflows break down, and opportunities for improvement. Extracts structured session data including user goals and friction points, then generates tailored recommendations for features, configurations, and future-ready workflows.

##### 6.2.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a structured 4-part summary of Claude Code usage insights covering what's working, friction points, quick wins, and ambitious workflows for improving user productivity as models advance.

##### 6.2.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize recurring friction patterns, organizing issues into 3 categories with concrete examples to help users understand where workflows break down.

##### 6.2.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future workflows and autonomous development opportunities based on usage patterns, helping users prepare for more capable AI models with concrete prompts to experiment with.

##### 6.2.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including user goals, satisfaction signals, and friction types, with strict guidelines to count only explicit user requests and genuine satisfaction indicators.

##### 6.2.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to user behavior patterns.

#### 6.2.3 Documentation & Knowledge Management Agents

Agents for maintaining and updating architecture-focused documentation by integrating new learnings while preserving structure and removing obsolete information.

##### 6.2.3.1 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Agent for updating Magic Doc files with new learnings by preserving headers and removing outdated information while maintaining terse, architecture-focused documentation.

### 6.3 Learning Mode & Education

Balances task completion with hands-on learning by inviting human participation in design decisions and providing educational context around implementation choices. Uses structured tracking and guided exercises to deepen understanding during collaborative development.

#### 6.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode system prompt that balances task completion with educational collaboration by requesting human contributions on design decisions, using TodoList tracking, and providing structured Learn by Doing requests with specific code sections.

#### 6.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights during learning mode by displaying 2-3 key points about implementation choices before and after code generation to encourage hands-on learning.

---

## 7. API, SDK, and Developer Documentation

Reference documentation and patterns for building with Claude — covering language-specific SDKs, HTTP API usage, agent SDK patterns, web tools, communication guidelines, and runtime resource management.

### 7.1 Claude API and Agent SDK References

Language-specific SDK documentation and HTTP API references for Claude, plus comprehensive Agent SDK patterns covering tool use, MCP integration, streaming, and batch processing.

#### 7.1.1 Claude API Reference Documentation

Language-specific SDK references and HTTP API documentation for building applications with Claude, covering installation, requests, streaming, tool use, vision, thinking, caching, and cost optimization across Python, TypeScript, Go, Java, C#, PHP, Ruby, and cURL.

##### 7.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, stop reasons, and cost optimization.

##### 7.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, stop reasons, and cost optimization.

##### 7.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use via BetaToolRunner and manual loops, thinking, server-side tools, PDF input, Files API, and context editing.

##### 7.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking, tool use via BetaToolRunner with annotated classes and memory tool, effort parameter, prompt caching, token counting, structured output, and server-side tools.

##### 7.1.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use with manual JSON schema, context editing, effort parameter, prompt caching, token counting, structured output, and server-side tools.

##### 7.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization for standard, Bedrock, Vertex AI, and Foundry platforms, basic requests, streaming, manual tool use loops, extended thinking, and beta features.

##### 7.1.1.7 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

##### 7.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, response parsing with jq, streaming, tool use loops, and extended thinking.

##### 7.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact model IDs, aliases, context windows, max output tokens, and user request resolution mapping.

##### 7.1.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference guide documenting HTTP error codes returned by the Claude API, their common causes, and handling strategies including retryable vs. non-retryable errors, detailed fixes for each code, and SDK exception classes for typed error handling.

##### 7.1.1.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Curated WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, organized by topic with extraction prompts to guide content retrieval when cached data may be outdated.

##### 7.1.1.12 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs. workflow vs. agent), architecture overview, current models, thinking and effort parameters, compaction for long conversations, and comprehensive reading guide.

##### 7.1.1.13 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, mapping common use cases to relevant documentation sections.

#### 7.1.2 Agent SDK Reference & Patterns

Comprehensive Agent SDK documentation and patterns for building autonomous agents with tool use, MCP integration, custom tools, and session management. Covers tool definitions, server-side capabilities like code execution and web search, streaming, file handling, and batch processing across Python and TypeScript.

##### 7.1.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, quick start, built-in tools, primary interfaces (query and ClaudeSDKClient), permission system, MCP support, hooks, subagents, and session history management.

##### 7.1.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference covering installation, quick start, built-in tools, permission modes, MCP support, hooks, subagents, message types, and session management.

##### 7.1.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with code examples.

##### 7.1.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks, subagents, MCP integration, session resumption, and session mutations with practical examples.

##### 7.1.2.5 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool definitions, tool choice options, tool runner vs. manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices.

##### 7.1.2.6 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner with decorators, MCP conversion helpers, manual agentic loops, code execution, memory tool, and structured outputs with Pydantic and strict tool use.

##### 7.1.2.7 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, code execution, file handling, memory tool, and structured outputs with Zod validation.

##### 7.1.2.8 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync and async streaming, handling text, thinking blocks, and tool use, with examples for progress tracking, error handling, and event types.

##### 7.1.2.9 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, tool runner integration, and best practices for displaying incremental responses.

##### 7.1.2.10 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for PDFs and images, file management (list, metadata, delete, download), and end-to-end examples.

##### 7.1.2.11 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages for documents and images, and file management operations.

##### 7.1.2.12 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, status polling, result retrieval, and cost savings at 50% of standard pricing, with examples for prompt caching and end-to-end workflows.

### 7.2 Web Access and Output Communication

Web content retrieval, real-time search, and browser automation capabilities, alongside standardized guidelines for concise and structured response formatting.

#### 7.2.1 Web & Browser Tools

Web interaction capabilities spanning content retrieval, real-time search, and automated browser control with visual feedback. Enables fetching current information, analyzing web pages, and performing interactive browser tasks through screenshot-guided automation.

##### 7.2.1.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content from URLs by converting HTML to markdown and processing it with a model to extract requested information.

##### 7.2.1.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond Claude's knowledge cutoff, requiring source attribution in responses with mandatory markdown links.

##### 7.2.1.3 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Enables mouse and keyboard interaction with a Chrome browser and screenshot capture. Requires consulting screenshots to determine element coordinates before clicking and centering the cursor tip on target elements.

##### 7.2.1.4 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines browser automation actions including clicks, typing, scrolling, keyboard input, and screenshot capture for Chrome interaction.

##### 7.2.1.5 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with proper framing, console debugging with pattern filtering, avoiding JavaScript dialogs that block events, preventing rabbit holes through task focus, and managing tab context with fresh IDs at session start.

##### 7.2.1.6 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the tool name with select: prefix syntax.

##### 7.2.1.7 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Agent that summarizes verbose web content for the main model, enforcing quote limits and respecting copyright for untrusted domains.

#### 7.2.2 Output Style & Communication Guidelines

Standardized communication patterns for concise, action-oriented responses that prioritize clarity and efficiency. Covers output formatting, code references with line numbers, parallel tool execution, and context-aware summary generation for both standalone and sub-agent reporting.

##### 7.2.2.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping preamble, and focusing output on decisions, status updates, and blockers.

##### 7.2.2.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number references when mentioning specific code for easy user navigation.

##### 7.2.2.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 7.2.2.4 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls when independent and use sequential execution only when dependencies exist between operations.

##### 7.2.2.5 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Defines rules for generating brief, past-tense summaries of coding assistant actions focused on user-visible outcomes in under 8 words, avoiding meta-commentary.

##### 7.2.2.6 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word agent action summaries in present tense, naming specific files or functions rather than branches.

##### 7.2.2.7 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering absolute paths, response formatting, emoji avoidance, and tool call punctuation.

##### 7.2.2.8 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that a specific output style is active and instructs it to follow that style's guidelines.

##### 7.2.2.9 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise sub-agent reporting and detailed standalone writeups based on whether the agent is a sub-agent or main agent.

### 7.3 Runtime Resource and Tool Management

Token and budget consumption tracking, dynamic tool schema resolution at runtime, and MCP resource display state handling for unavailable or incompatible content.

#### 7.3.1 MCP Resource Handling

Manages display states for MCP resources when content exists but cannot be rendered due to absence or format incompatibility.

##### 7.3.1.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no displayable content.

##### 7.3.1.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Signals that an MCP resource has content but it cannot be displayed in the current format.

#### 7.3.2 Resource & Budget Monitoring

Tracks consumption metrics for token and financial budgets, displaying current usage against allocated limits to maintain awareness of resource constraints.

##### 7.3.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 7.3.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including spent, total, and remaining budget.

#### 7.3.3 Tool Discovery & Dynamic Tools

Resolves tool schemas on-demand by querying available tools and returning their JSONSchema definitions for runtime invocation.

##### 7.3.3.1 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by querying a tool list, returning matched tools' JSONSchema definitions for invocation.
