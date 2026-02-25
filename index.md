# Claude Code System Prompts Index

A technical reference for building, configuring, and extending Claude Code — equipping developers to construct reliable AI-powered coding workflows from the underlying API and SDK layer through agent orchestration, tool integration, and runtime behavior.

## Table of Contents

1. [Bash Shell Execution](#1-bash-shell-execution)
   1. [Bash Tool: Core Behavior & Syntax Rules](#11-bash-tool-core-behavior-syntax-rules)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (command description) [Tool Description]](#112-bash-command-description-tool-description)
      3. [Bash (maintain cwd) [Tool Description]](#113-bash-maintain-cwd-tool-description)
      4. [Bash (working directory) [Tool Description]](#114-bash-working-directory-tool-description)
      5. [Bash (no newlines) [Tool Description]](#115-bash-no-newlines-tool-description)
      6. [Bash (quote file paths) [Tool Description]](#116-bash-quote-file-paths-tool-description)
      7. [Bash (sequential commands) [Tool Description]](#117-bash-sequential-commands-tool-description)
      8. [Bash (parallel commands) [Tool Description]](#118-bash-parallel-commands-tool-description)
      9. [Bash (semicolon usage) [Tool Description]](#119-bash-semicolon-usage-tool-description)
      10. [Bash (timeout) [Tool Description]](#1110-bash-timeout-tool-description)
      11. [Bash (verify parent directory) [Tool Description]](#1111-bash-verify-parent-directory-tool-description)
   2. [Bash Tool: Sleep & Async Patterns](#12-bash-tool-sleep-async-patterns)
      1. [Bash (sleep — keep short) [Tool Description]](#121-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#122-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — no retry loops) [Tool Description]](#123-bash-sleep-—-no-retry-loops-tool-description)
      4. [Bash (sleep — run immediately) [Tool Description]](#124-bash-sleep-—-run-immediately-tool-description)
      5. [Bash (sleep — use check commands) [Tool Description]](#125-bash-sleep-—-use-check-commands-tool-description)
      6. [Bash (sleep — use run_in_background) [Tool Description]](#126-bash-sleep-—-use-run_in_background-tool-description)
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
   4. [Bash Tool: Git Operations](#14-bash-tool-git-operations)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#141-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#142-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#143-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#144-bash-git-—-prefer-new-commits-tool-description)
   5. [Bash Tool: Dedicated Tool Preferences](#15-bash-tool-dedicated-tool-preferences)
      1. [Bash (prefer dedicated tools) [Tool Description]](#151-bash-prefer-dedicated-tools-tool-description)
      2. [Bash (built-in tools note) [Tool Description]](#152-bash-built-in-tools-note-tool-description)
      3. [Bash (alternative — communication) [Tool Description]](#153-bash-alternative-—-communication-tool-description)
      4. [Bash (alternative — content search) [Tool Description]](#154-bash-alternative-—-content-search-tool-description)
      5. [Bash (alternative — edit files) [Tool Description]](#155-bash-alternative-—-edit-files-tool-description)
      6. [Bash (alternative — file search) [Tool Description]](#156-bash-alternative-—-file-search-tool-description)
      7. [Bash (alternative — read files) [Tool Description]](#157-bash-alternative-—-read-files-tool-description)
      8. [Bash (alternative — write files) [Tool Description]](#158-bash-alternative-—-write-files-tool-description)
2. [File, Code, and Editor Operations](#2-file-code-and-editor-operations)
   1. [File Operation Tools](#21-file-operation-tools)
      1. [ReadFile (Tool Description)](#211-readfile-tool-description)
      2. [Write (Tool Description)](#212-write-tool-description)
      3. [Edit (Tool Description)](#213-edit-tool-description)
      4. [Glob (Tool Description)](#214-glob-tool-description)
      5. [Grep (Tool Description)](#215-grep-tool-description)
      6. [Tool usage (create files) [System Prompt]](#216-tool-usage-create-files-system-prompt)
      7. [Tool usage (edit files) [System Prompt]](#217-tool-usage-edit-files-system-prompt)
      8. [Tool usage (read files) [System Prompt]](#218-tool-usage-read-files-system-prompt)
      9. [Tool usage (search content) [System Prompt]](#219-tool-usage-search-content-system-prompt)
      10. [Tool usage (search files) [System Prompt]](#2110-tool-usage-search-files-system-prompt)
   2. [Codebase Exploration & Analysis](#22-codebase-exploration-analysis)
      1. [Explore (Agent Prompt)](#221-explore-agent-prompt)
      2. [Task tool (Agent Prompt)](#222-task-tool-agent-prompt)
      3. [Task tool (extra notes) [Agent Prompt]](#223-task-tool-extra-notes-agent-prompt)
      4. [CLAUDE.md creation (Agent Prompt)](#224-claudemd-creation-agent-prompt)
   3. [IDE Integration & File Context](#23-ide-integration-file-context)
      1. [Lines selected in IDE (System Reminder)](#231-lines-selected-in-ide-system-reminder)
      2. [File opened in IDE (System Reminder)](#232-file-opened-in-ide-system-reminder)
      3. [File modified by user or linter (System Reminder)](#233-file-modified-by-user-or-linter-system-reminder)
      4. [New diagnostics detected (System Reminder)](#234-new-diagnostics-detected-system-reminder)
   4. [File State & Access Notifications](#24-file-state-access-notifications)
      1. [File exists but empty (System Reminder)](#241-file-exists-but-empty-system-reminder)
      2. [File truncated (System Reminder)](#242-file-truncated-system-reminder)
      3. [File shorter than offset (System Reminder)](#243-file-shorter-than-offset-system-reminder)
      4. [MCP resource no content (System Reminder)](#244-mcp-resource-no-content-system-reminder)
      5. [MCP resource no displayable content (System Reminder)](#245-mcp-resource-no-displayable-content-system-reminder)
   5. [Specialized Tools: LSP, Notebooks & Sleep](#25-specialized-tools-lsp-notebooks-sleep)
      1. [LSP (Tool Description)](#251-lsp-tool-description)
      2. [NotebookEdit (Tool Description)](#252-notebookedit-tool-description)
      3. [Sleep (Tool Description)](#253-sleep-tool-description)
   6. [Scratchpad & Temporary File Management](#26-scratchpad-temporary-file-management)
      1. [Scratchpad directory (System Prompt)](#261-scratchpad-directory-system-prompt)
      2. [Option previewer (System Prompt)](#262-option-previewer-system-prompt)
3. [Agent Architecture and Session Management](#3-agent-architecture-and-session-management)
   1. [Multi-Agent Coordination and Planning](#31-multi-agent-coordination-and-planning)
      1. [Planning Mode & Implementation Workflow](#311-planning-mode-implementation-workflow)
         1. [EnterPlanMode (Tool Description)](#3111-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3112-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#3113-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#3114-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#3115-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#3116-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#3117-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#3118-plan-file-reference-system-reminder)
         9. [Verify plan reminder (System Reminder)](#3119-verify-plan-reminder-system-reminder)
         10. [Plan mode (enhanced) [Agent Prompt]](#31110-plan-mode-enhanced-agent-prompt)
      2. [Task & Todo Management](#312-task-todo-management)
         1. [TodoWrite (Tool Description)](#3121-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#3122-taskcreate-tool-description)
         3. [Tool usage (task management) [System Prompt]](#3123-tool-usage-task-management-system-prompt)
         4. [Task status (System Reminder)](#3124-task-status-system-reminder)
         5. [Task tools reminder (System Reminder)](#3125-task-tools-reminder-system-reminder)
         6. [Todo list changed (System Reminder)](#3126-todo-list-changed-system-reminder)
         7. [Todo list empty (System Reminder)](#3127-todo-list-empty-system-reminder)
         8. [TodoWrite reminder (System Reminder)](#3128-todowrite-reminder-system-reminder)
      3. [Multi-Agent & Swarm Coordination](#313-multi-agent-swarm-coordination)
         1. [Task (Tool Description)](#3131-task-tool-description)
         2. [TeammateTool (Tool Description)](#3132-teammatetool-tool-description)
         3. [SendMessageTool (Tool Description)](#3133-sendmessagetool-tool-description)
         4. [TeamDelete (Tool Description)](#3134-teamdelete-tool-description)
         5. [TaskList (teammate workflow) [Tool Description]](#3135-tasklist-teammate-workflow-tool-description)
         6. [Team Coordination (System Reminder)](#3136-team-coordination-system-reminder)
         7. [Team Shutdown (System Reminder)](#3137-team-shutdown-system-reminder)
         8. [Teammate Communication (System Prompt)](#3138-teammate-communication-system-prompt)
         9. [Tool usage (subagent guidance) [System Prompt]](#3139-tool-usage-subagent-guidance-system-prompt)
         10. [Tool usage (delegate exploration) [System Prompt]](#31310-tool-usage-delegate-exploration-system-prompt)
         11. [Tool usage (direct search) [System Prompt]](#31311-tool-usage-direct-search-system-prompt)
      4. [Agent Design & Creation](#314-agent-design-creation)
         1. [Agent creation architect (Agent Prompt)](#3141-agent-creation-architect-agent-prompt)
         2. [Agent Summary Generation (System Prompt)](#3142-agent-summary-generation-system-prompt)
   2. [Memory, Context, and Session Continuity](#32-memory-context-and-session-continuity)
      1. [Session Memory & Context Persistence](#321-session-memory-context-persistence)
         1. [Memory file contents (System Reminder)](#3211-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#3212-nested-memory-contents-system-reminder)
         3. [Memory selection (Agent Prompt)](#3213-memory-selection-agent-prompt)
         4. [Session memory update instructions (Agent Prompt)](#3214-session-memory-update-instructions-agent-prompt)
         5. [Session memory template (Data)](#3215-session-memory-template-data)
         6. [Agent memory instructions (System Prompt)](#3216-agent-memory-instructions-system-prompt)
      2. [Conversation Summarization & Context Compaction](#322-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#3221-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#3222-recent-message-summarization-agent-prompt)
         3. [Context compaction summary (System Prompt)](#3223-context-compaction-summary-system-prompt)
         4. [Compact file reference (System Reminder)](#3224-compact-file-reference-system-reminder)
      3. [Session Management & Continuity](#323-session-management-continuity)
         1. [Session continuation (System Reminder)](#3231-session-continuation-system-reminder)
         2. [Session title and branch generation (Agent Prompt)](#3232-session-title-and-branch-generation-agent-prompt)
         3. [Session Search Assistant (Agent Prompt)](#3233-session-search-assistant-agent-prompt)
         4. [Status line setup (Agent Prompt)](#3234-status-line-setup-agent-prompt)
      4. [Agent Invocation & Bash Analysis](#324-agent-invocation-bash-analysis)
         1. [Agent mention (System Reminder)](#3241-agent-mention-system-reminder)
         2. [Bash command description writer (Agent Prompt)](#3242-bash-command-description-writer-agent-prompt)
         3. [Bash command file path extraction (Agent Prompt)](#3243-bash-command-file-path-extraction-agent-prompt)
         4. [Bash command prefix detection (Agent Prompt)](#3244-bash-command-prefix-detection-agent-prompt)
4. [Claude API and SDK References](#4-claude-api-and-sdk-references)
   1. [Core API References](#41-core-api-references)
      1. [Claude API SDK References](#411-claude-api-sdk-references)
         1. [Claude API reference — Python (Data)](#4111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#4112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#4113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#4114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#4115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#4116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#4117-claude-api-reference-—-c-data)
      2. [Agent SDK References & Patterns](#412-agent-sdk-references-patterns)
         1. [Agent SDK reference — Python (Data)](#4121-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#4122-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#4123-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#4124-agent-sdk-patterns-—-typescript-data)
      3. [Streaming & Batching API References](#413-streaming-batching-api-references)
         1. [Streaming reference — Python (Data)](#4131-streaming-reference-—-python-data)
         2. [Streaming reference — TypeScript (Data)](#4132-streaming-reference-—-typescript-data)
         3. [Message Batches API reference — Python (Data)](#4133-message-batches-api-reference-—-python-data)
      4. [Tool Use API References](#414-tool-use-api-references)
         1. [Tool use concepts (Data)](#4141-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#4142-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#4143-tool-use-reference-—-typescript-data)
   2. [Supporting API Infrastructure](#42-supporting-api-infrastructure)
      1. [Files API & Supplementary References](#421-files-api-supplementary-references)
         1. [Files API reference — Python (Data)](#4211-files-api-reference-—-python-data)
         2. [Files API reference — TypeScript (Data)](#4212-files-api-reference-—-typescript-data)
         3. [HTTP error codes reference (Data)](#4213-http-error-codes-reference-data)
         4. [Claude model catalog (Data)](#4214-claude-model-catalog-data)
      2. [Build with Claude API Skill](#422-build-with-claude-api-skill)
         1. [Build with Claude API (Skill)](#4221-build-with-claude-api-skill)
         2. [Build with Claude API (trigger) [Skill]](#4222-build-with-claude-api-trigger-skill)
         3. [Build with Claude API (reference guide) [Skill]](#4223-build-with-claude-api-reference-guide-skill)
         4. [Claude guide agent (Agent Prompt)](#4224-claude-guide-agent-agent-prompt)
5. [Tools, Integrations, and Automation](#5-tools-integrations-and-automation)
   1. [Lifecycle Hooks and External Integrations](#51-lifecycle-hooks-and-external-integrations)
      1. [Hook System & Lifecycle Events](#511-hook-system-lifecycle-events)
         1. [Hook stopped continuation (System Reminder)](#5111-hook-stopped-continuation-system-reminder)
         2. [Hook success (System Reminder)](#5112-hook-success-system-reminder)
         3. [Hook additional context (System Reminder)](#5113-hook-additional-context-system-reminder)
         4. [Hook blocking error (System Reminder)](#5114-hook-blocking-error-system-reminder)
         5. [Hook JSON validation failed (System Reminder)](#5115-hook-json-validation-failed-system-reminder)
         6. [Hook stopped continuation prefix (System Reminder)](#5116-hook-stopped-continuation-prefix-system-reminder)
         7. [Hooks Configuration (System Prompt)](#5117-hooks-configuration-system-prompt)
         8. [Agent Hook (Agent Prompt)](#5118-agent-hook-agent-prompt)
         9. [Hook condition evaluator (Agent Prompt)](#5119-hook-condition-evaluator-agent-prompt)
      2. [GitHub Integration & CI/CD](#512-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#5121-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#5122-github-app-installation-pr-description-data)
      3. [Browser Automation & Web Interaction](#513-browser-automation-web-interaction)
         1. [Computer (Tool Description)](#5131-computer-tool-description)
         2. [Computer action (Tool Parameter)](#5132-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#5133-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#5134-chrome-browser-mcp-tools-system-prompt)
      4. [Web Search & Content Fetching](#514-web-search-content-fetching)
         1. [WebSearch (Tool Description)](#5141-websearch-tool-description)
         2. [WebFetch (Tool Description)](#5142-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#5143-webfetch-summarizer-agent-prompt)
   2. [Skill and Tool Management](#52-skill-and-tool-management)
      1. [Tool Discovery & Loading](#521-tool-discovery-loading)
         1. [ToolSearch (Tool Description)](#5211-toolsearch-tool-description)
         2. [ToolSearch extended (Tool Description)](#5212-toolsearch-extended-tool-description)
         3. [Tool usage (reserve Bash) [System Prompt]](#5213-tool-usage-reserve-bash-system-prompt)
         4. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#5214-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      2. [Skill System & Invocation](#522-skill-system-invocation)
         1. [Skill (Tool Description)](#5221-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#5222-tool-usage-skill-invocation-system-prompt)
         3. [Skillify Current Session (System Prompt)](#5223-skillify-current-session-system-prompt)
         4. [Invoked skills (System Reminder)](#5224-invoked-skills-system-reminder)
      3. [Verification & Testing Skills](#523-verification-testing-skills)
         1. [Verification specialist (Skill)](#5231-verification-specialist-skill)
         2. [Create verifier skills (Skill)](#5232-create-verifier-skills-skill)
         3. [Debugging (Skill)](#5233-debugging-skill)
      4. [Tool Permission & Denial Handling](#524-tool-permission-denial-handling)
         1. [Tool permission mode (System Prompt)](#5241-tool-permission-mode-system-prompt)
         2. [Tool execution denied (System Prompt)](#5242-tool-execution-denied-system-prompt)
6. [Claude Code Workflow and Configuration](#6-claude-code-workflow-and-configuration)
   1. [Coding Execution and Communication Standards](#61-coding-execution-and-communication-standards)
      1. [Coding Task Execution Guidelines](#611-coding-task-execution-guidelines)
         1. [Doing tasks (software engineering focus) [System Prompt]](#6111-doing-tasks-software-engineering-focus-system-prompt)
         2. [Doing tasks (no unnecessary additions) [System Prompt]](#6112-doing-tasks-no-unnecessary-additions-system-prompt)
         3. [Doing tasks (no unnecessary error handling) [System Prompt]](#6113-doing-tasks-no-unnecessary-error-handling-system-prompt)
         4. [Doing tasks (read before modifying) [System Prompt]](#6114-doing-tasks-read-before-modifying-system-prompt)
         5. [Doing tasks (avoid over-engineering) [System Prompt]](#6115-doing-tasks-avoid-over-engineering-system-prompt)
         6. [Doing tasks (blocked approach) [System Prompt]](#6116-doing-tasks-blocked-approach-system-prompt)
         7. [Doing tasks (minimize file creation) [System Prompt]](#6117-doing-tasks-minimize-file-creation-system-prompt)
         8. [Doing tasks (no compatibility hacks) [System Prompt]](#6118-doing-tasks-no-compatibility-hacks-system-prompt)
         9. [Doing tasks (no premature abstractions) [System Prompt]](#6119-doing-tasks-no-premature-abstractions-system-prompt)
         10. [Doing tasks (no time estimates) [System Prompt]](#61110-doing-tasks-no-time-estimates-system-prompt)
         11. [Doing tasks (ambitious tasks) [System Prompt]](#61111-doing-tasks-ambitious-tasks-system-prompt)
         12. [Doing tasks (help and feedback) [System Prompt]](#61112-doing-tasks-help-and-feedback-system-prompt)
         13. [Executing actions with care (System Prompt)](#61113-executing-actions-with-care-system-prompt)
      2. [Output Style & Tone Guidelines](#612-output-style-tone-guidelines)
         1. [Tone and style (concise output — detailed) [System Prompt]](#6121-tone-and-style-concise-output-—-detailed-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#6122-tone-and-style-concise-output-—-short-system-prompt)
         3. [Tone and style (code references) [System Prompt]](#6123-tone-and-style-code-references-system-prompt)
         4. [Tool Use Summary Generation (System Prompt)](#6124-tool-use-summary-generation-system-prompt)
      3. [User Interaction & Clarification Tools](#613-user-interaction-clarification-tools)
         1. [AskUserQuestion (Tool Description)](#6131-askuserquestion-tool-description)
         2. [/btw side question (System Reminder)](#6132-btw-side-question-system-reminder)
         3. [User sentiment analysis (Agent Prompt)](#6133-user-sentiment-analysis-agent-prompt)
         4. [Prompt Suggestion Generator v2 (Agent Prompt)](#6134-prompt-suggestion-generator-v2-agent-prompt)
   2. [Version Control and Code Quality](#62-version-control-and-code-quality)
      1. [Git & Version Control Operations](#621-git-version-control-operations)
         1. [Quick git commit (Agent Prompt)](#6211-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#6212-quick-pr-creation-agent-prompt)
         3. [/pr-comments slash command (Agent Prompt)](#6213-pr-comments-slash-command-agent-prompt)
         4. [Git status (System Prompt)](#6214-git-status-system-prompt)
         5. [EnterWorktree (Tool Description)](#6215-enterworktree-tool-description)
      2. [Code Review & Security Analysis](#622-code-review-security-analysis)
         1. [/review-pr slash command (Agent Prompt)](#6221-review-pr-slash-command-agent-prompt)
         2. [/security-review slash command (Agent Prompt)](#6222-security-review-slash-command-agent-prompt)
         3. [Censoring assistance with malicious activities (System Prompt)](#6223-censoring-assistance-with-malicious-activities-system-prompt)
         4. [Malware analysis after Read tool call (System Reminder)](#6224-malware-analysis-after-read-tool-call-system-reminder)
         5. [Doing tasks (security) [System Prompt]](#6225-doing-tasks-security-system-prompt)
      3. [Documentation & Knowledge Management](#623-documentation-knowledge-management)
         1. [Update Magic Docs (Agent Prompt)](#6231-update-magic-docs-agent-prompt)
         2. [Live documentation sources (Data)](#6232-live-documentation-sources-data)
   3. [Configuration, Monitoring, and Learning](#63-configuration-monitoring-and-learning)
      1. [Claude Code Configuration & Settings](#631-claude-code-configuration-settings)
         1. [Update Claude Code Config (Skill)](#6311-update-claude-code-config-skill)
         2. [Claude Code version mismatch warning (Data)](#6312-claude-code-version-mismatch-warning-data)
      2. [Usage Insights & Analytics](#632-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#6321-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#6322-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#6323-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#6324-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#6325-insights-suggestions-system-prompt)
      3. [Learning Mode & Educational Features](#633-learning-mode-educational-features)
         1. [Learning mode (System Prompt)](#6331-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6332-learning-mode-insights-system-prompt)
      4. [Resource & Budget Monitoring](#634-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#6341-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#6342-usd-budget-system-reminder)
      5. [Output & Token Limit Management](#635-output-token-limit-management)
         1. [Output token limit exceeded (System Reminder)](#6351-output-token-limit-exceeded-system-reminder)
         2. [Output style active (System Reminder)](#6352-output-style-active-system-reminder)

---

## 1. Bash Shell Execution

Rules, patterns, and safety constraints governing how bash commands are constructed and executed, from syntax conventions and async patterns to sandbox security and git operations.

### 1.1 Bash Tool: Core Behavior & Syntax Rules

Bash command execution follows specific syntax conventions to ensure reliability and maintainability: chain dependent commands with && for sequential execution with failure propagation, use semicolons only when earlier failures are acceptable, quote file paths containing spaces, maintain working directory via absolute paths, and verify parent directories before file operations. Multiple independent commands should run as parallel tool calls rather than sequentially.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Basic description stating that the Bash tool executes given bash commands and returns their output.

#### 1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs Claude to write clear, concise descriptions of bash commands, keeping simple commands brief and providing context for complex or piped commands.

#### 1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain current working directory by using absolute paths and avoiding cd commands unless explicitly requested.

#### 1.1.4 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not, with environment initialized from user profile.

#### 1.1.5 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs Claude not to use newlines to separate bash commands.

#### 1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs Claude to always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.7 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Directs Claude to chain dependent commands with '&&' in a single bash call to ensure sequential execution with failure propagation.

#### 1.1.8 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to make multiple Bash tool calls in a single message when commands are independent and can run in parallel.

#### 1.1.9 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when commands must run sequentially but earlier command failures are acceptable.

#### 1.1.10 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration in milliseconds with maximum and default limits for bash commands.

#### 1.1.11 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence with `ls` before creating new directories or files.

### 1.2 Bash Tool: Sleep & Async Patterns

Asynchronous operations and waiting patterns should avoid blocking sleep loops in favor of event-driven alternatives: use `run_in_background` for long-running commands with automatic completion notification, employ check commands like `gh run view` for polling external processes, and keep any necessary sleeps brief (1-5 seconds). Never poll background tasks or retry failing commands in sleep loops.

#### 1.2.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.2.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Prohibits polling background tasks started with `run_in_background`; Claude will be notified when they complete.

#### 1.2.3 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Prohibits retrying failing commands in sleep loops; Claude should diagnose root causes or consider alternative approaches.

#### 1.2.4 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Directs Claude not to sleep between commands that can run immediately.

#### 1.2.5 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` rather than sleeping when polling external processes.

#### 1.2.6 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Directs Claude to use `run_in_background` for long-running commands instead of sleeping, with notification upon completion.

### 1.3 Bash Tool: Sandbox Security & Restrictions

Commands run within a sandbox by default with enforced restrictions on file access, network connections, and Unix sockets. When sandbox failures occur, Claude immediately retries with sandbox disabled without requesting permission, then explains the restriction to the user. Sensitive paths like credentials and SSH keys cannot be added to the allowlist, and temporary files must use `$TMPDIR` or `${SANDBOX_TMPDIR_FN()}` rather than `/tmp` directly.

#### 1.3.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to work with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 1.3.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to default to running commands within the sandbox and only bypass sandbox restrictions when explicitly requested or when evidence of sandbox restriction appears.

#### 1.3.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.3.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that sandbox restrictions caused command failures.

#### 1.3.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.3.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Recognizes "operation not permitted" errors for file and network operations as sandbox-caused failures.

#### 1.3.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies Unix socket connection errors as evidence of sandbox restrictions.

#### 1.3.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

#### 1.3.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with clear evidence of sandbox restrictions, distinguishing sandbox failures from other causes.

#### 1.3.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.3.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.3.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.3.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to evaluate each command individually and default to sandbox mode for future commands even after running unsandboxed commands.

#### 1.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing guidance on how to respond when sandbox-caused failures are detected.

#### 1.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Directs Claude to immediately retry with `dangerouslyDisableSandbox: true` when sandbox failures occur without asking for permission.

#### 1.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode instead of `/tmp` directly.

#### 1.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

### 1.4 Bash Tool: Git Operations

Git operations require explicit user authorization before committing and should avoid destructive actions like force-push or hard-reset without considering safer alternatives. Commits must never skip hooks or bypass signing unless explicitly requested, and underlying hook failures should be investigated rather than bypassed. Prefer creating new commits over amending existing ones, and follow comprehensive safety protocols when creating pull requests.

#### 1.4.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

#### 1.4.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, commit message drafting, hook handling, and PR creation with gh command. Emphasizes never committing without explicit user request, avoiding destructive operations, and creating new commits rather than amending.

#### 1.4.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude never to skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues if hooks fail.

#### 1.4.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to prefer creating new commits over amending existing ones.

### 1.5 Bash Tool: Dedicated Tool Preferences

Specialized tools provide superior user experience and clearer permission semantics compared to bash equivalents: use dedicated tools for file reading, writing, searching, editing, and globbing rather than cat, echo, grep, sed, awk, or find commands. Output text directly instead of piping through echo, and leverage purpose-built tools that make operation intent explicit.

#### 1.5.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat, head, tail, sed, awk, or echo commands and instead use appropriate dedicated tools for better user experience.

#### 1.5.2 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in dedicated tools provide better user experience and easier permission review than Bash equivalents.

#### 1.5.3 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Directs Claude to output text directly instead of using echo or printf commands.

#### 1.5.4 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs Claude to use a dedicated Grep tool for content search instead of grep or rg commands.

#### 1.5.5 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use a dedicated Edit tool for file editing instead of sed or awk commands.

#### 1.5.6 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs Claude to use a dedicated Glob tool for file search instead of find or ls commands.

#### 1.5.7 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use a dedicated Read tool for file reading instead of cat, head, or tail commands.

#### 1.5.8 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs Claude to use a dedicated Write tool for file writing instead of echo or cat commands.

---

## 2. File, Code, and Editor Operations

Tools and notifications for reading, writing, searching, and editing files within the filesystem and IDE, including boundary conditions, notebook support, and temporary file management.

### 2.1 File Operation Tools

Comprehensive filesystem access for reading, writing, editing, and searching files across all formats. Supports pattern-based file discovery, regex-powered content search, and precise string replacement with indentation preservation. System prompts establish tool preferences over shell alternatives.

#### 2.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs, Jupyter notebooks, and configurable line limits, enabling comprehensive file access across all file types.

#### 2.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, preferring the Edit tool for modifications and avoiding creation of documentation unless explicitly requested.

#### 2.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with strict matching requirements, preserving indentation and supporting both single and bulk replacements across codebases.

#### 2.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob syntax for finding files by name patterns, returning results sorted by modification time.

#### 2.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based content search supporting full regex syntax, file filtering, and multiple output modes for locating code patterns across codebases.

#### 2.1.6 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use the Write tool for file creation instead of shell redirection or heredoc syntax.

#### 2.1.7 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs Claude to use the Edit tool for file modifications instead of sed or awk.

#### 2.1.8 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool for file access instead of cat, head, tail, or sed.

#### 2.1.9 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs Claude to use the Grep tool for searching file contents instead of grep or rg.

#### 2.1.10 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool for file discovery instead of find or ls.

### 2.2 Codebase Exploration & Analysis

Read-only agents for discovering, searching, and analyzing codebases using pattern matching and file traversal. Specialized variants support rapid exploration, multi-step research tasks, and automated generation of architecture documentation for future Claude instances.

#### 2.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only codebase exploration agent specializing in rapid file discovery via glob patterns, regex searching, and code analysis without modification capabilities.

#### 2.2.2 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

General-purpose subagent for complex research, codebase searching, and multi-step tasks with emphasis on thorough analysis and absolute file paths in responses.

#### 2.2.3 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Additional guidelines for Task tool usage emphasizing absolute file paths, no emojis, and proper formatting without colons before tool calls.

#### 2.2.4 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md files documenting common commands, architecture, and development patterns for future Claude Code instances.

### 2.3 IDE Integration & File Context

Provides real-time awareness of user interactions within an integrated development environment. Notifies Claude of file selections, opens, modifications, and diagnostic issues to maintain contextual alignment with the user's active work.

#### 2.3.1 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in the IDE, providing file context and line numbers.

#### 2.3.2 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

#### 2.3.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides the relevant changes with line numbers for context.

#### 2.3.4 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the codebase.

### 2.4 File State & Access Notifications

Alerts Claude to boundary conditions and content availability issues when accessing files and resources. Handles cases where files are empty, truncated, offset beyond bounds, or lack displayable content.

#### 2.4.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

#### 2.4.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs it to use the Read tool for additional content if needed.

#### 2.4.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that the requested file read offset exceeds the file's actual length and provides the total line count.

#### 2.4.4 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

#### 2.4.5 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Signals that an MCP resource has content but it cannot be displayed in a readable format.

### 2.5 Specialized Tools: LSP, Notebooks & Sleep

Provides code intelligence through Language Server Protocol integration, enables interactive notebook cell manipulation, and manages execution delays with user interrupt capability.

#### 2.5.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol integration for code intelligence features including symbol navigation, references, hover information, and call hierarchy analysis.

#### 2.5.2 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing, inserting, or deleting cell contents with support for code, text, and visualization cells.

#### 2.5.3 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with user interrupt capability and periodic check-ins, avoiding shell process overhead.

### 2.6 Scratchpad & Temporary File Management

Isolates session-specific temporary file storage and enables visual comparison of options through side-by-side preview layouts, reducing permission friction and improving decision clarity.

#### 2.6.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a session-specific scratchpad directory for all temporary files instead of /tmp, enabling isolated working space without permission prompts.

#### 2.6.2 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for UI options using markdown field, displaying ASCII mockups, code snippets, and diagrams for visual comparison in single-select questions.

---

## 3. Agent Architecture and Session Management

Frameworks for designing, coordinating, and persisting AI agents across sessions — covering multi-agent orchestration, planning workflows, memory, context compaction, and session continuity.

### 3.1 Multi-Agent Coordination and Planning

Parallel agent orchestration, task delegation, swarm execution, and structured planning workflows with user approval gates before implementation.

#### 3.1.1 Planning Mode & Implementation Workflow

Structured planning phase for complex implementations that enforces readonly exploration, iterative design refinement, and user approval before execution. Supports multiple planning strategies including five-phase workflows, iterative pair-planning, and subagent constraints. Enables safe re-entry and plan verification.

##### 3.1.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode for non-trivial implementation tasks, enabling codebase exploration and design of implementation approaches before writing code to ensure user alignment and prevent wasted effort.

##### 3.1.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of implementation planning and requests user approval of the plan before proceeding with code changes, reading the plan from a pre-written file.

##### 3.1.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode constraints and guides Claude through a five-phase planning workflow: initial understanding with parallel exploration agents, design with plan agents, review, final plan writing, and mode exit. Prohibits all edits except to the plan file and non-readonly tool execution.

##### 3.1.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Establishes iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, and asks the user clarifying questions in a loop until the plan converges. Restricts edits to the plan file only.

##### 3.1.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagent behavior in plan mode to readonly actions and plan file editing only, prohibiting any system modifications while allowing comprehensive query answering and clarifying questions.

##### 3.1.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, requiring evaluation of existing plan against current request and decision to continue or overwrite before proceeding.

##### 3.1.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that it has exited plan mode and can now execute edits, run tools, and take actions, with optional reference to the plan file.

##### 3.1.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and suggests continuing work on it if relevant.

##### 3.1.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 3.1.1.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that designs implementation plans by exploring codebases, identifying patterns, and detailing step-by-step strategies with critical files.

#### 3.1.2 Task & Todo Management

Session-level task organization with state tracking and real-time progress updates. Enables breaking down multi-step work into structured tasks, monitoring completion status, and coordinating team efforts through shared task lists.

##### 3.1.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages task lists for coding sessions with state tracking (pending/in_progress/completed), supporting multi-step organization and real-time progress updates.

##### 3.1.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to organize multi-step work, track progress, and coordinate team efforts with clear descriptions and active forms.

##### 3.1.2.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite tool to break down work, track progress, and mark tasks as completed immediately upon finishing.

##### 3.1.2.4 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

##### 3.1.2.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant, without mentioning the reminder to the user.

##### 3.1.2.6 [Todo list changed (System Reminder)](system-prompts/system-reminder-todo-list-changed.md)

Notifies Claude of todo list changes without mentioning it to the user, providing updated contents for reference.

##### 3.1.2.7 [Todo list empty (System Reminder)](system-prompts/system-reminder-todo-list-empty.md)

Reminds Claude that the todo list is empty and suggests creating one if task tracking would be beneficial, without mentioning to the user.

##### 3.1.2.8 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently suggests using the TodoWrite tool for progress tracking when relevant, without disclosing the reminder to the user.

#### 3.1.3 Multi-Agent & Swarm Coordination

Parallel agent orchestration with task delegation, concurrent execution, and inter-agent messaging. Enables specialized subagents for isolated work, shared task discovery with dependency management, and graceful team lifecycle management including shutdown and cleanup.

##### 3.1.3.1 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents for complex tasks with support for concurrent execution, background processing, worktree isolation, and agent resumption with full context preservation.

##### 3.1.3.2 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages team creation and coordination of multiple agents working in parallel, with shared task lists, automatic message delivery, and idle state management for swarm workflows.

##### 3.1.3.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables direct messaging to teammates, broadcasting to teams, and handling shutdown/plan approval requests in swarm coordination workflows with cost-aware broadcast limitations.

##### 3.1.3.4 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all teammates to be gracefully terminated first.

##### 3.1.3.5 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Defines teammate workflow for discovering and claiming available tasks from shared task lists, prioritizing by ID order and respecting task dependencies.

##### 3.1.3.6 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity as a team member, provides team resources and configuration paths, and instructs communication protocols using teammate names for task coordination.

##### 3.1.3.7 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to gracefully shut down all team members and clean up before returning a response in non-interactive mode.

##### 3.1.3.8 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agent teammates to use SendMessage tool for communication rather than text responses, supporting both direct messages and broadcasts in swarm environments.

##### 3.1.3.9 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool with specialized subagents for parallelizing queries and protecting context, while avoiding duplicate work.

##### 3.1.3.10 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Directs Claude to use the Task tool with specialized subagents for broad codebase exploration and deep research when simple searches prove insufficient.

##### 3.1.3.11 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob or Grep tools directly for simple, targeted codebase searches.

#### 3.1.4 Agent Design & Creation

Architects high-performance AI agents by extracting user intent, designing expert personas, and generating comprehensive system prompts optimized for specific project patterns. Produces structured agent specifications with behavioral boundaries and operational instructions.

##### 3.1.4.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of high-performance AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces JSON output with agent identifier, usage conditions, and detailed operational instructions aligned with project-specific patterns.

##### 3.1.4.2 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt for generating concise 3-5 word agent action summaries in present tense, naming specific files or functions rather than branches or vague descriptions.

### 3.2 Memory, Context, and Session Continuity

Mechanisms for persisting conversational context, compressing history into resumable summaries, and managing session lifecycle across machines and environments.

#### 3.2.1 Session Memory & Context Persistence

Maintains conversational context across sessions through structured memory files that capture task state, decisions, and learnings. Agents selectively retrieve and update memory based on relevance, building institutional knowledge that persists beyond individual conversations.

##### 3.2.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Presents the contents of a memory file by path, including type description.

##### 3.2.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays contents of a nested memory file structure.

##### 3.2.1.3 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects relevant memory files from available options based on user queries, returning up to 5 filenames that clearly support query processing.

##### 3.2.1.4 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session memory files by editing existing sections with conversation insights while preserving structure, headers, and template descriptions.

##### 3.2.1.5 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory `summary.md` files organizing current state, task specification, files, workflow, errors, codebase documentation, learnings, and results.

##### 3.2.1.6 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations, with examples for code reviewers, test runners, architects, and documentation writers.

#### 3.2.2 Conversation Summarization & Context Compaction

Compresses conversation history into dense, resumable summaries that preserve technical decisions and code changes while fitting within context windows. Enables efficient task continuation by capturing task overview, discoveries, and next steps without losing critical details.

##### 3.2.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing user requests, technical decisions, code changes, errors, and pending tasks with full code snippets and chronological analysis.

##### 3.2.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions focusing on user requests, technical concepts, code changes, errors, and pending tasks while preserving earlier context.

##### 3.2.2.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt template for generating context compaction summaries that enable efficient task resumption across context windows, structured to cover task overview, current state, discoveries, next steps, and context preservation.

##### 3.2.2.4 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs it to use the Read tool if full access is needed.

#### 3.2.3 Session Management & Continuity

Orchestrates session lifecycle across machines and contexts through naming, discovery, and environment setup. Generates identifiers for sessions and branches, locates prior work via metadata matching, and configures shell environments to surface session context.

##### 3.2.3.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

##### 3.2.3.2 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles and git branch names from coding task descriptions, returning JSON with clear, concise identifiers.

##### 3.2.3.3 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user queries by prioritizing tag matches, then title, branch, and transcript content with inclusive matching strategy.

##### 3.2.3.4 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by converting shell PS1 configurations and creating custom commands that access session context via JSON stdin.

#### 3.2.4 Agent Invocation & Bash Analysis

Handles agent routing based on user mentions and provides specialized analysis of bash commands including documentation generation, file path extraction, and injection detection for security enforcement.

##### 3.2.4.1 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and instructs it to do so with appropriate context.

##### 3.2.4.2 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief while adding context for complex piped or obscure commands.

##### 3.2.4.3 [Bash command file path extraction (Agent Prompt)](system-prompts/agent-prompt-bash-command-file-path-extraction.md)

Extracts file paths from bash command output by determining whether commands display file contents, returning paths verbatim without inference.

##### 3.2.4.4 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands to enforce safety policies and prevent malicious execution.

---

## 4. Claude API and SDK References

Language-specific SDK documentation, streaming and batching APIs, tool use implementations, file handling, and routing guides for building applications on top of Claude.

### 4.1 Core API References

Language-specific SDK guides for Python, TypeScript, and other languages, plus streaming, batching, and tool use API documentation.

#### 4.1.1 Claude API SDK References

Language-specific SDK documentation for the Claude API across Python, TypeScript, Go, Java, Ruby, PHP, and C#. Covers client initialization, streaming, vision, prompt caching, extended thinking, tool use, and cost optimization patterns.

##### 4.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, token counting, and cost optimization strategies.

##### 4.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript SDK reference covering client initialization, basic requests, vision, prompt caching, adaptive thinking, error handling, multi-turn conversations, compaction, token counting, and cost optimization.

##### 4.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API including client initialization, basic requests, streaming, and manual agentic loops for tool use.

##### 4.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, and beta tool use with annotated classes via BetaToolRunner for automatic execution.

##### 4.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for Claude API including client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

##### 4.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API covering client initialization, basic message requests, streaming, and manual tool use with JSON schema.

##### 4.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for Claude API covering client initialization, basic message requests, streaming, and manual tool use with JSON schema definitions.

#### 4.1.2 Agent SDK References & Patterns

Complete Agent SDK documentation and working examples for Python and TypeScript, covering tool integration, permission systems, MCP support, lifecycle hooks, subagents, and session management with best practices.

##### 4.1.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Complete Python Agent SDK reference covering installation, quick start, built-in tools, primary interfaces (query and ClaudeSDKClient), permission system, MCP support, hooks, subagents, error handling, and best practices.

##### 4.1.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, quick start, built-in tools, permission modes, MCP integration with in-process tools, hooks, subagents, and best practices.

##### 4.1.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Provides Python code examples for Agent SDK usage including basic agents, custom tools via MCP, hooks for lifecycle events, subagents, permission modes, error recovery, and session resumption with context preservation.

##### 4.1.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Demonstrates TypeScript Agent SDK patterns for basic agents, hooks, subagents, MCP server integration, and session resumption with custom system prompts.

#### 4.1.3 Streaming & Batching API References

Real-time and asynchronous processing capabilities for the Claude API. Streaming enables progressive content delivery with event handling across multiple content types; batching provides cost-efficient asynchronous processing with polling-based result retrieval.

##### 4.1.3.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, progress tracking, error handling, and stream event types with best practices.

##### 4.1.3.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript reference for streaming messages from the Claude API, covering basic streaming, handling different content types (thinking and text), tool use with streaming, and best practices for token usage and output flushing.

##### 4.1.3.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for asynchronous batch processing at 50% cost, covering batch creation, status polling, result retrieval, cancellation, and integration with prompt caching.

#### 4.1.4 Tool Use API References

Language-specific implementations for integrating Claude's tool use capabilities, covering agentic loops, code execution, memory integration, and structured outputs with SDK-native patterns for Python and TypeScript.

##### 4.1.4.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use with Claude API including tool definitions, tool choice modes, tool runner vs manual loops, server-side tools (code execution, web search, web fetch, computer use), memory tool, structured outputs, and best practices for effective tool design.

##### 4.1.4.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python implementation guide for tool use covering the tool runner with @beta_tool decorators, manual agentic loops, code execution with file uploads and container reuse, memory tool integration, and structured outputs with Pydantic and strict tool validation.

##### 4.1.4.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript implementation guide for tool use featuring betaZodTool with Zod schemas, manual agentic loops, code execution with file handling and container reuse, memory tool with handler implementation, and structured outputs using Zod validation.

### 4.2 Supporting API Infrastructure

File management APIs, error handling, model catalog, and routing guides that help developers navigate and configure Claude API integrations.

#### 4.2.1 Files API & Supplementary References

File handling and API infrastructure documentation including file upload/management across document types, HTTP error handling strategies, and model catalog for accurate API configuration.

##### 4.2.1.1 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for PDFs and images, file management operations, and end-to-end examples with persistent file references.

##### 4.2.1.2 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages for documents and images, and managing files with list, delete, and download operations.

##### 4.2.1.3 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for HTTP error codes returned by Claude API with common causes, fixes, and handling strategies for 400, 401, 403, 404, 413, 429, 500, and 529 errors.

##### 4.2.1.4 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and retired Claude models with exact model IDs, aliases, context windows, max output tokens, and pricing information for accurate model selection.

#### 4.2.2 Build with Claude API Skill

Comprehensive routing and navigation system for Claude API development, connecting users to language-specific documentation, architecture guidance, and model selection based on use case and SDK detection.

##### 4.2.2.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models (Opus 4.6, Sonnet 4.6, Haiku 4.5), thinking modes, and reading guide for language-specific documentation.

##### 4.2.2.2 [Build with Claude API (trigger) [Skill]](system-prompts/skill-build-with-claude-api-trigger.md)

Defines when to activate the Build with Claude API skill based on SDK imports or explicit user requests for Claude/Anthropic APIs.

##### 4.2.2.3 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API reference documentation, mapping common tasks (classification, streaming, tool use, batches, files) to relevant documentation sections.

##### 4.2.2.4 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing clear guidance on features, configuration, and integrations across all three domains.

---

## 5. Tools, Integrations, and Automation

External tool integrations, lifecycle hooks, browser automation, web search, skill systems, and mechanisms for discovering and loading tools at runtime.

### 5.1 Lifecycle Hooks and External Integrations

Automation hooks triggered at lifecycle events, GitHub Actions CI/CD templates, and browser and web search capabilities for interacting with external systems.

#### 5.1.1 Hook System & Lifecycle Events

Automation framework executing shell commands, prompts, or agents at lifecycle events like tool use and session start. Provides structured input/output handling with JSON validation, error reporting, and context injection for auto-formatting, logging, and verification workflows.

##### 5.1.1.1 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Displays a message when a hook stops continuation, including the hook name and reason.

##### 5.1.1.2 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful completion of a hook execution with the hook name and content.

##### 5.1.1.3 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution to Claude.

##### 5.1.1.4 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command to Claude.

##### 5.1.1.5 [Hook JSON validation failed (System Reminder)](system-prompts/system-reminder-hook-json-validation-failed.md)

Reports JSON validation failures from hook output, detailing schema mismatches and the actual hook output for debugging.

##### 5.1.1.6 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix label for continuation messages when a hook stops execution.

##### 5.1.1.7 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide to Claude Code hooks that execute shell commands, prompts, or agents at lifecycle events like PreToolUse, PostToolUse, and SessionStart. Covers hook structure, input/output JSON formats, and common patterns for auto-formatting, logging, and test execution.

##### 5.1.1.8 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and inspecting the codebase to confirm agent task completion.

##### 5.1.1.9 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code and returns JSON indicating whether conditions are met with optional failure reasons.

#### 5.1.2 GitHub Integration & CI/CD

GitHub-native automation templates enabling Claude Code integration through Actions workflows and App installation with configurable permissions and documentation for deployment.

##### 5.1.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues, PRs, and comments with configurable permissions and custom prompts.

##### 5.1.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for Claude Code GitHub App installation explaining capabilities, workflow behavior, security considerations, and tool configuration options.

#### 5.1.3 Browser Automation & Web Interaction

Chrome browser control and interaction capabilities with debugging guidance, covering mouse/keyboard input, element inspection, and best practices for reliable automation without infinite loops.

##### 5.1.3.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Enables mouse and keyboard interaction with a Chrome browser, including screenshot capture and precise element clicking with cursor positioning guidance.

##### 5.1.3.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for the Computer tool including click variants, typing, scrolling, keyboard input, and element inspection for browser automation.

##### 5.1.3.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Best practices for browser automation using Claude in Chrome tools, covering GIF recording, console debugging, alert handling, tab context initialization, and guidance on avoiding rabbit holes and loops.

##### 5.1.3.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use, requiring explicit tool selection before calling mcp__claude-in-chrome__* functions.

#### 5.1.4 Web Search & Content Fetching

Retrieves and processes current web information through search and content extraction, with mandatory source attribution and intelligent summarization that enforces quote limits and attribution rules based on domain trustworthiness.

##### 5.1.4.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff, requiring mandatory source attribution in responses with markdown hyperlinks.

##### 5.1.4.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with AI to extract information based on user prompts, with built-in caching.

##### 5.1.4.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and attribution rules for untrusted domains while allowing flexible sourcing for trusted content.

### 5.2 Skill and Tool Management

Discovery, loading, and invocation of tools and skills at runtime, including slash-command-driven skills, verification workflows, and permission handling when tools are denied.

#### 5.2.1 Tool Discovery & Loading

Manages deferred tool availability through discovery and loading mechanisms, with guidance on tool hierarchy and parallel execution patterns to optimize independent operations.

##### 5.2.1.1 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite tool for loading deferred tools before calling them, supporting both keyword search and direct selection modes.

##### 5.2.1.2 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage guide for ToolSearch covering keyword search, direct selection, and required keyword modes for discovering and loading deferred tools before use.

##### 5.2.1.3 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Directs Claude to reserve Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

##### 5.2.1.4 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while maintaining sequential execution for dependent calls.

#### 5.2.2 Skill System & Invocation

Enables domain-specific capabilities through slash-command invocation and provides a structured interview-driven process to convert conversations into reusable, annotated skills with multiple execution modes.

##### 5.2.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills within conversations, invoked via slash commands or skill names with optional arguments for domain-specific capabilities.

##### 5.2.2.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Instructs Claude to use the Skill tool to execute user-invocable skills invoked via slash commands, only for skills listed in the tool's user-invocable section.

##### 5.2.2.3 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a 4-step interview process to convert a session into a reusable skill: analyzing the session, interviewing the user across 4 rounds, writing SKILL.md with detailed step annotations, and confirming before saving. Covers skill structure, execution modes (Direct, Task agent, Teammate, human), and frontmatter requirements.

##### 5.2.2.4 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the current session and instructs Claude to continue following their guidelines.

#### 5.2.3 Verification & Testing Skills

Automates code validation across web UIs, CLIs, and APIs through deterministic verification plans, with integrated debugging support for analyzing errors and suggesting fixes in Claude Code sessions.

##### 5.2.3.1 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering verifier skills, analyzing git diffs, creating deterministic verification plans, triggering appropriate verifiers, and reporting structured results with pass/fail status for each step.

##### 5.2.3.2 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically test code changes across web UIs (Playwright), CLIs (Tmux), and APIs (HTTP), including project detection, tool setup, interactive configuration, and skill generation with proper allowed-tools configuration.

##### 5.2.3.3 [Debugging (Skill)](system-prompts/skill-debugging.md)

Skill for debugging issues in Claude Code sessions by analyzing debug logs, identifying errors and warnings, and suggesting concrete fixes based on session context and settings.

#### 5.2.4 Tool Permission & Denial Handling

Manages Claude's behavior when tools are denied or restricted. Claude should respect permission boundaries, explore reasonable alternatives without circumventing restrictions, and communicate transparently when capabilities are unavailable.

##### 5.2.4.1 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains tool permission modes where denied tools trigger user prompts, and instructs Claude not to re-attempt denied calls but instead adjust approach and optionally ask for clarification.

##### 5.2.4.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides Claude to attempt reasonable alternatives when a tool is denied but avoid malicious workarounds, and to stop and explain if the capability is essential.

---

## 6. Claude Code Workflow and Configuration

Runtime configuration, coding task execution guidelines, output style, version control workflows, analytics, and user interaction patterns that shape how Claude Code operates day-to-day.

### 6.1 Coding Execution and Communication Standards

Disciplined patterns for implementing software tasks, scoping work correctly, assessing risk, and producing concise, well-formatted output.

#### 6.1.1 Coding Task Execution Guidelines

Establishes disciplined execution patterns for software engineering tasks: implementing only explicit requests, reading before modifying, validating at system boundaries, and deferring to user judgment on scope. Includes risk assessment for destructive operations requiring confirmation before execution.

##### 6.1.1.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames user requests as software engineering tasks and interprets generic instructions within that context, applying changes to actual code rather than returning abstract answers.

##### 6.1.1.2 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Instructs Claude to implement only what was explicitly requested without adding features, refactoring, or improving surrounding code.

##### 6.1.1.3 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs Claude to avoid defensive error handling for impossible scenarios and validate only at system boundaries like user input and external APIs.

##### 6.1.1.4 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing or making modifications.

##### 6.1.1.5 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Directive to avoid over-engineering by making only directly requested or clearly necessary changes, keeping solutions simple and focused.

##### 6.1.1.6 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Guidance to consider alternative approaches when blocked rather than brute-forcing, using AskUserQuestion to align with users on the right path forward.

##### 6.1.1.7 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directive to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

##### 6.1.1.8 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Directive to delete unused code completely rather than adding compatibility shims or re-exports.

##### 6.1.1.9 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directive to avoid creating abstractions for one-time operations or hypothetical requirements, keeping complexity minimal for current needs.

##### 6.1.1.10 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Directive to avoid giving time estimates or predictions, focusing on what needs to be done rather than duration.

##### 6.1.1.11 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Directive to enable users to complete ambitious tasks by deferring to user judgment on scope rather than imposing artificial limitations.

##### 6.1.1.12 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels when requested.

##### 6.1.1.13 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a framework for evaluating action reversibility and blast radius, requiring user confirmation for destructive, hard-to-reverse, or shared-state-affecting operations while allowing local reversible actions freely. Emphasizes investigating unexpected state before deletion and matching action scope to user requests.

#### 6.1.2 Output Style & Tone Guidelines

Standardizes communication through concise, polished output without filler or repetition, precise code references with line numbers, and brief summaries of tool outcomes focused on user-visible results.

##### 6.1.2.1 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Directs Claude to produce concise, polished output without filler, repetition, or inner monologue while preserving important information.

##### 6.1.2.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 6.1.2.3 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number pattern when referencing specific code for easy user navigation.

##### 6.1.2.4 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Instructs Claude to generate brief, past-tense summaries of tool execution outcomes in under 8 words, focusing on user-visible results without implementation details.

#### 6.1.3 User Interaction & Clarification Tools

Mechanisms for gathering user input, analyzing conversational context, and predicting user intent during task execution. Includes direct clarification of ambiguous requirements, sentiment detection for frustration signals, and suggestion generation for anticipated follow-up actions.

##### 6.1.3.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use AskUserQuestion for gathering user preferences, clarifying ambiguous instructions, and getting decisions during execution. In plan mode, use it to clarify requirements before finalizing the plan, not for plan approval.

##### 6.1.3.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Constrains Claude to answer side questions directly without tools, based only on conversation context, in a single response with no follow-up capability.

##### 6.1.3.3 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration and explicit pull request creation requests from conversation history, outputting boolean flags for frustration detection and PR submission intent.

##### 6.1.3.4 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on conversation context, suggesting specific follow-up commands or actions the user would likely type.

### 6.2 Version Control and Code Quality

Git automation, pull request workflows, code review, security analysis, and codebase exploration for maintaining code quality and safe integration.

#### 6.2.1 Git & Version Control Operations

Automates git workflows including commits, branch creation, pull requests, and worktree isolation for parallel development. Integrates with GitHub and Slack to streamline code integration while maintaining safety through context-aware commit messages and review processes.

##### 6.2.1.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context, analyzing staged changes to draft appropriate messages following repository conventions.

##### 6.2.1.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Streamlines PR creation by analyzing all changes, creating branches, committing code, and opening pull requests with proper formatting and optional Slack notifications.

##### 6.2.1.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including review threads, code context, and diff hunks in formatted markdown output.

##### 6.2.1.4 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git branch, main branch, status, and recent commits as a snapshot at conversation start.

##### 6.2.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates isolated git worktrees for parallel development work, only when explicitly requested by the user, with automatic cleanup on session exit.

#### 6.2.2 Code Review & Security Analysis

Examines code for quality, correctness, and security vulnerabilities with strict filtering to avoid false positives. Supports authorized security testing and defensive analysis while refusing assistance with malicious activities, maintaining ethical boundaries around vulnerability disclosure and exploitation.

##### 6.2.2.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Provides expert code review of GitHub PRs analyzing quality, style, improvements, and risks with focus on correctness, conventions, and security.

##### 6.2.2.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities across injection, authentication, crypto, and data exposure categories with strict false-positive filtering.

##### 6.2.2.3 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, CTF challenges, and defensive security while refusing requests for destructive attacks, DoS, supply chain compromise, or detection evasion for malicious purposes.

##### 6.2.2.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, while permitting analysis, reports, and behavioral questions.

##### 6.2.2.5 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Emphasizes avoiding OWASP top 10 vulnerabilities including injection, XSS, and SQL injection when writing code.

#### 6.2.3 Documentation & Knowledge Management

Systems for maintaining and updating project documentation through agent-driven workflows and live API references. Emphasizes preserving architectural knowledge while keeping documentation terse and focused on design rationale rather than implementation details.

##### 6.2.3.1 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs the magic-docs agent to update documentation files with new learnings from conversations while preserving headers, maintaining current state, and following a terse documentation philosophy focused on architecture, entry points, and design rationale rather than exhaustive implementation details.

##### 6.2.3.2 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources including models, features, tools, and SDK repositories.

### 6.3 Configuration, Monitoring, and Learning

Claude Code settings, MCP server integration, resource and budget tracking, usage analytics, token limit management, and educational learning mode features.

#### 6.3.1 Claude Code Configuration & Settings

Manages Claude Code runtime configuration including execution hooks, permissions, environment variables, and MCP server integration, with version management notifications for CLI updates.

##### 6.3.1.1 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration in settings.json, covering hooks (PreToolUse, PostToolUse, PreCompact), permissions, environment variables, and MCP server configuration with emphasis on merging rather than replacing existing settings.

##### 6.3.1.2 [Claude Code version mismatch warning (Data)](system-prompts/data-claude-code-version-mismatch-warning.md)

Warning message displayed when Claude Code CLI version is outdated, instructing users to run `claude update` to access latest features.

#### 6.3.2 Usage Insights & Analytics

Analyzes Claude Code session data to extract structured insights about what's working, friction patterns, and future opportunities. Generates actionable recommendations for workflow optimization, feature adoption, and CLAUDE.md configuration based on aggregated usage signals.

##### 6.3.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for improved Claude Code usage. Produces JSON output with coaching-tone guidance based on aggregated session data.

##### 6.3.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with 3 categories and 2 examples each, outputting structured JSON.

##### 6.3.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future opportunities for autonomous AI-assisted development workflows, including parallel agents and iterative testing approaches.

##### 6.3.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts including goal categories, user satisfaction signals, and friction types with strict guidelines for counting only explicit user requests and satisfaction indicators.

##### 6.3.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns based on aggregated usage data. Prioritizes repeated user instructions for CLAUDE.md entries.

#### 6.3.3 Learning Mode & Educational Features

Enables collaborative software engineering by requesting meaningful human contributions to design decisions and algorithms while providing contextual educational insights. Balances AI assistance with human learning through structured contribution requests and explanatory guidance.

##### 6.3.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt enabling collaborative software engineering with human contributions on design decisions, business logic, and algorithms. Includes TodoList integration, Learn by Doing request format, and educational insights. Requests 2-10 line contributions for 20+ line code pieces involving meaningful decisions.

##### 6.3.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing using formatted insight blocks with 2-3 key points specific to the codebase.

#### 6.3.4 Resource & Budget Monitoring

Tracks consumption of computational and financial resources in real time. Displays token usage and USD spending against allocated limits to maintain awareness of resource constraints.

##### 6.3.4.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 6.3.4.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

#### 6.3.5 Output & Token Limit Management

Enforces constraints on response generation and formatting. Manages token budget exhaustion and applies active output style guidelines to shape response structure and presentation.

##### 6.3.5.1 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Warns Claude that its response exceeded the token limit and instructs it to break work into smaller pieces.

##### 6.3.5.2 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.
