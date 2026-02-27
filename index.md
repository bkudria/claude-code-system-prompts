# Claude Code System Prompts Index

Practical guidance for building, deploying, and operating Claude-powered agentic systems—covering everything from low-level command execution and file operations to multi-agent orchestration, persistent memory, and the engineering discipline needed to develop reliable, secure AI-driven workflows.

## Table of Contents

1. [Shell and Command Execution](#1-shell-and-command-execution)
   1. [Bash Tool Usage Guidelines](#11-bash-tool-usage-guidelines)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (command description) [Tool Description]](#112-bash-command-description-tool-description)
      3. [Bash (maintain cwd) [Tool Description]](#113-bash-maintain-cwd-tool-description)
      4. [Bash (working directory) [Tool Description]](#114-bash-working-directory-tool-description)
      5. [Bash (no newlines) [Tool Description]](#115-bash-no-newlines-tool-description)
      6. [Bash (quote file paths) [Tool Description]](#116-bash-quote-file-paths-tool-description)
      7. [Bash (parallel commands) [Tool Description]](#117-bash-parallel-commands-tool-description)
      8. [Bash (sequential commands) [Tool Description]](#118-bash-sequential-commands-tool-description)
      9. [Bash (semicolon usage) [Tool Description]](#119-bash-semicolon-usage-tool-description)
      10. [Bash (timeout) [Tool Description]](#1110-bash-timeout-tool-description)
      11. [Bash (verify parent directory) [Tool Description]](#1111-bash-verify-parent-directory-tool-description)
      12. [Bash (sleep — keep short) [Tool Description]](#1112-bash-sleep-—-keep-short-tool-description)
      13. [Bash (sleep — no polling background tasks) [Tool Description]](#1113-bash-sleep-—-no-polling-background-tasks-tool-description)
      14. [Bash (sleep — no retry loops) [Tool Description]](#1114-bash-sleep-—-no-retry-loops-tool-description)
      15. [Bash (sleep — run immediately) [Tool Description]](#1115-bash-sleep-—-run-immediately-tool-description)
      16. [Bash (sleep — use check commands) [Tool Description]](#1116-bash-sleep-—-use-check-commands-tool-description)
      17. [Bash (sleep — use run_in_background) [Tool Description]](#1117-bash-sleep-—-use-run_in_background-tool-description)
      18. [Bash (prefer dedicated tools) [Tool Description]](#1118-bash-prefer-dedicated-tools-tool-description)
      19. [Bash (built-in tools note) [Tool Description]](#1119-bash-built-in-tools-note-tool-description)
      20. [Bash (alternative — communication) [Tool Description]](#1120-bash-alternative-—-communication-tool-description)
      21. [Bash (alternative — content search) [Tool Description]](#1121-bash-alternative-—-content-search-tool-description)
      22. [Bash (alternative — edit files) [Tool Description]](#1122-bash-alternative-—-edit-files-tool-description)
      23. [Bash (alternative — file search) [Tool Description]](#1123-bash-alternative-—-file-search-tool-description)
      24. [Bash (alternative — read files) [Tool Description]](#1124-bash-alternative-—-read-files-tool-description)
      25. [Bash (alternative — write files) [Tool Description]](#1125-bash-alternative-—-write-files-tool-description)
   2. [Bash Sandbox Security Policies](#12-bash-sandbox-security-policies)
      1. [Bash (sandbox — mandatory mode) [Tool Description]](#121-bash-sandbox-—-mandatory-mode-tool-description)
      2. [Bash (sandbox — no exceptions) [Tool Description]](#122-bash-sandbox-—-no-exceptions-tool-description)
      3. [Bash (sandbox — default to sandbox) [Tool Description]](#123-bash-sandbox-—-default-to-sandbox-tool-description)
      4. [Bash (sandbox — per-command) [Tool Description]](#124-bash-sandbox-—-per-command-tool-description)
      5. [Bash (sandbox — adjust settings) [Tool Description]](#125-bash-sandbox-—-adjust-settings-tool-description)
      6. [Bash (sandbox — explain restriction) [Tool Description]](#126-bash-sandbox-—-explain-restriction-tool-description)
      7. [Bash (sandbox — retry without sandbox) [Tool Description]](#127-bash-sandbox-—-retry-without-sandbox-tool-description)
      8. [Bash (sandbox — user permission prompt) [Tool Description]](#128-bash-sandbox-—-user-permission-prompt-tool-description)
      9. [Bash (sandbox — no sensitive paths) [Tool Description]](#129-bash-sandbox-—-no-sensitive-paths-tool-description)
      10. [Bash (sandbox — tmpdir) [Tool Description]](#1210-bash-sandbox-—-tmpdir-tool-description)
      11. [Bash (sandbox — response header) [Tool Description]](#1211-bash-sandbox-—-response-header-tool-description)
      12. [Bash (sandbox — failure evidence condition) [Tool Description]](#1212-bash-sandbox-—-failure-evidence-condition-tool-description)
      13. [Bash (sandbox — evidence list header) [Tool Description]](#1213-bash-sandbox-—-evidence-list-header-tool-description)
      14. [Bash (sandbox — evidence: access denied) [Tool Description]](#1214-bash-sandbox-—-evidence-access-denied-tool-description)
      15. [Bash (sandbox — evidence: network failures) [Tool Description]](#1215-bash-sandbox-—-evidence-network-failures-tool-description)
      16. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1216-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      17. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1217-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
   3. [Tool Preference and Selection Rules](#13-tool-preference-and-selection-rules)
      1. [Tool usage (direct search) [System Prompt]](#131-tool-usage-direct-search-system-prompt)
      2. [Tool usage (edit files) [System Prompt]](#132-tool-usage-edit-files-system-prompt)
      3. [Tool usage (read files) [System Prompt]](#133-tool-usage-read-files-system-prompt)
      4. [Tool usage (reserve Bash) [System Prompt]](#134-tool-usage-reserve-bash-system-prompt)
      5. [Tool usage (search content) [System Prompt]](#135-tool-usage-search-content-system-prompt)
      6. [Tool usage (search files) [System Prompt]](#136-tool-usage-search-files-system-prompt)
      7. [Tool usage (create files) [System Prompt]](#137-tool-usage-create-files-system-prompt)
      8. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#138-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   4. [Bash Command Analysis](#14-bash-command-analysis)
      1. [Bash command description writer (Agent Prompt)](#141-bash-command-description-writer-agent-prompt)
      2. [Bash command file path extraction (Agent Prompt)](#142-bash-command-file-path-extraction-agent-prompt)
      3. [Bash command prefix detection (Agent Prompt)](#143-bash-command-prefix-detection-agent-prompt)
2. [Agent Coordination and Multi-Agent Systems](#2-agent-coordination-and-multi-agent-systems)
   1. [Subagent and Task Delegation](#21-subagent-and-task-delegation)
      1. [Tool usage (delegate exploration) [System Prompt]](#211-tool-usage-delegate-exploration-system-prompt)
      2. [Tool usage (subagent guidance) [System Prompt]](#212-tool-usage-subagent-guidance-system-prompt)
      3. [Tool usage (skill invocation) [System Prompt]](#213-tool-usage-skill-invocation-system-prompt)
      4. [Task (Tool Description)](#214-task-tool-description)
      5. [Task tool (Agent Prompt)](#215-task-tool-agent-prompt)
      6. [Task tool (extra notes) [Agent Prompt]](#216-task-tool-extra-notes-agent-prompt)
      7. [Explore (Agent Prompt)](#217-explore-agent-prompt)
   2. [Multi-Agent Team Coordination](#22-multi-agent-team-coordination)
      1. [Team Coordination (System Reminder)](#221-team-coordination-system-reminder)
      2. [Team Shutdown (System Reminder)](#222-team-shutdown-system-reminder)
      3. [Teammate Communication (System Prompt)](#223-teammate-communication-system-prompt)
      4. [TeammateTool (Tool Description)](#224-teammatetool-tool-description)
      5. [SendMessageTool (Tool Description)](#225-sendmessagetool-tool-description)
      6. [TeamDelete (Tool Description)](#226-teamdelete-tool-description)
      7. [TaskList (teammate workflow) [Tool Description]](#227-tasklist-teammate-workflow-tool-description)
   3. [Agent Architecture and Lifecycle](#23-agent-architecture-and-lifecycle)
      1. [Agent creation architect (Agent Prompt)](#231-agent-creation-architect-agent-prompt)
      2. [Agent Hook (Agent Prompt)](#232-agent-hook-agent-prompt)
      3. [Hook condition evaluator (Agent Prompt)](#233-hook-condition-evaluator-agent-prompt)
   4. [User Intent Recognition](#24-user-intent-recognition)
      1. [User sentiment analysis (Agent Prompt)](#241-user-sentiment-analysis-agent-prompt)
      2. [Prompt Suggestion Generator v2 (Agent Prompt)](#242-prompt-suggestion-generator-v2-agent-prompt)
      3. [Agent mention (System Reminder)](#243-agent-mention-system-reminder)
   5. [Planning Mode](#25-planning-mode)
      1. [Plan mode is active (5-phase) [System Reminder]](#251-plan-mode-is-active-5-phase-system-reminder)
      2. [Plan mode is active (iterative) [System Reminder]](#252-plan-mode-is-active-iterative-system-reminder)
      3. [Plan mode is active (subagent) [System Reminder]](#253-plan-mode-is-active-subagent-system-reminder)
      4. [Plan mode re-entry (System Reminder)](#254-plan-mode-re-entry-system-reminder)
      5. [Exited plan mode (System Reminder)](#255-exited-plan-mode-system-reminder)
      6. [Plan file reference (System Reminder)](#256-plan-file-reference-system-reminder)
      7. [Verify plan reminder (System Reminder)](#257-verify-plan-reminder-system-reminder)
      8. [EnterPlanMode (Tool Description)](#258-enterplanmode-tool-description)
      9. [ExitPlanMode (Tool Description)](#259-exitplanmode-tool-description)
      10. [Plan mode (enhanced) [Agent Prompt]](#2510-plan-mode-enhanced-agent-prompt)
3. [Session, Memory, and Task Management](#3-session-memory-and-task-management)
   1. [Task and Todo Tracking](#31-task-and-todo-tracking)
      1. [Tool usage (task management) [System Prompt]](#311-tool-usage-task-management-system-prompt)
      2. [TodoWrite (Tool Description)](#312-todowrite-tool-description)
      3. [TaskCreate (Tool Description)](#313-taskcreate-tool-description)
      4. [Todo list changed (System Reminder)](#314-todo-list-changed-system-reminder)
      5. [Todo list empty (System Reminder)](#315-todo-list-empty-system-reminder)
      6. [TodoWrite reminder (System Reminder)](#316-todowrite-reminder-system-reminder)
      7. [Task tools reminder (System Reminder)](#317-task-tools-reminder-system-reminder)
      8. [Task status (System Reminder)](#318-task-status-system-reminder)
   2. [Memory and Context Persistence](#32-memory-and-context-persistence)
      1. [Memory and Session Persistence](#321-memory-and-session-persistence)
         1. [Memory file contents (System Reminder)](#3211-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#3212-nested-memory-contents-system-reminder)
         3. [Session continuation (System Reminder)](#3213-session-continuation-system-reminder)
         4. [Memory selection (Agent Prompt)](#3214-memory-selection-agent-prompt)
         5. [Session memory update instructions (Agent Prompt)](#3215-session-memory-update-instructions-agent-prompt)
         6. [Session memory template (Data)](#3216-session-memory-template-data)
         7. [Agent memory instructions (System Prompt)](#3217-agent-memory-instructions-system-prompt)
      2. [Session and Conversation Summarization](#322-session-and-conversation-summarization)
         1. [Conversation summarization (Agent Prompt)](#3221-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#3222-recent-message-summarization-agent-prompt)
         3. [Context compaction summary (System Prompt)](#3223-context-compaction-summary-system-prompt)
         4. [Tool Use Summary Generation (System Prompt)](#3224-tool-use-summary-generation-system-prompt)
         5. [Agent Summary Generation (System Prompt)](#3225-agent-summary-generation-system-prompt)
      3. [Session Management and Discovery](#323-session-management-and-discovery)
         1. [Session Search Assistant (Agent Prompt)](#3231-session-search-assistant-agent-prompt)
         2. [Status line setup (Agent Prompt)](#3232-status-line-setup-agent-prompt)
   3. [Resource and Budget Constraints](#33-resource-and-budget-constraints)
      1. [Resource and Budget Monitoring](#331-resource-and-budget-monitoring)
         1. [Token usage (System Reminder)](#3311-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#3312-usd-budget-system-reminder)
         3. [Output token limit exceeded (System Reminder)](#3313-output-token-limit-exceeded-system-reminder)
      2. [Sleep and Idle Management](#332-sleep-and-idle-management)
         1. [Sleep (Tool Description)](#3321-sleep-tool-description)
      3. [Context and Output Management](#333-context-and-output-management)
4. [File, Search, and External Tool Operations](#4-file-search-and-external-tool-operations)
   1. [Local File and Search Tools](#41-local-file-and-search-tools)
      1. [File Operation Tools](#411-file-operation-tools)
         1. [ReadFile (Tool Description)](#4111-readfile-tool-description)
         2. [Write (Tool Description)](#4112-write-tool-description)
         3. [Edit (Tool Description)](#4113-edit-tool-description)
         4. [NotebookEdit (Tool Description)](#4114-notebookedit-tool-description)
      2. [Search and Discovery Tools](#412-search-and-discovery-tools)
         1. [Glob (Tool Description)](#4121-glob-tool-description)
         2. [Grep (Tool Description)](#4122-grep-tool-description)
         3. [LSP (Tool Description)](#4123-lsp-tool-description)
         4. [ToolSearch (Tool Description)](#4124-toolsearch-tool-description)
         5. [ToolSearch extended (Tool Description)](#4125-toolsearch-extended-tool-description)
   2. [Web and Browser Interactions](#42-web-and-browser-interactions)
      1. [Browser Automation](#421-browser-automation)
         1. [Computer (Tool Description)](#4211-computer-tool-description)
         2. [Computer action (Tool Parameter)](#4212-computer-action-tool-parameter)
         3. [Chrome browser MCP tools (System Prompt)](#4213-chrome-browser-mcp-tools-system-prompt)
         4. [Claude in Chrome browser automation (System Prompt)](#4214-claude-in-chrome-browser-automation-system-prompt)
      2. [Web Search and Content Fetching](#422-web-search-and-content-fetching)
         1. [WebFetch (Tool Description)](#4221-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#4222-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#4223-webfetch-summarizer-agent-prompt)
   3. [GitHub and Version Control](#43-github-and-version-control)
      1. [Git Operations and Version Control](#431-git-operations-and-version-control)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#4311-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#4312-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#4313-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#4314-bash-git-—-prefer-new-commits-tool-description)
         5. [EnterWorktree (Tool Description)](#4315-enterworktree-tool-description)
         6. [Git status (System Prompt)](#4316-git-status-system-prompt)
         7. [Quick git commit (Agent Prompt)](#4317-quick-git-commit-agent-prompt)
         8. [Quick PR creation (Agent Prompt)](#4318-quick-pr-creation-agent-prompt)
         9. [Session title and branch generation (Agent Prompt)](#4319-session-title-and-branch-generation-agent-prompt)
      2. [GitHub and Code Review Workflows](#432-github-and-code-review-workflows)
         1. [/pr-comments slash command (Agent Prompt)](#4321-pr-comments-slash-command-agent-prompt)
         2. [/review-pr slash command (Agent Prompt)](#4322-review-pr-slash-command-agent-prompt)
         3. [/security-review slash command (Agent Prompt)](#4323-security-review-slash-command-agent-prompt)
         4. [GitHub Actions workflow for @claude mentions (Data)](#4324-github-actions-workflow-for-claude-mentions-data)
         5. [GitHub App installation PR description (Data)](#4325-github-app-installation-pr-description-data)
5. [System Events, Hooks, and Automation](#5-system-events-hooks-and-automation)
   1. [File System State and Context Notifications](#51-file-system-state-and-context-notifications)
      1. [Compact file reference (System Reminder)](#511-compact-file-reference-system-reminder)
      2. [File exists but empty (System Reminder)](#512-file-exists-but-empty-system-reminder)
      3. [File modified by user or linter (System Reminder)](#513-file-modified-by-user-or-linter-system-reminder)
      4. [File opened in IDE (System Reminder)](#514-file-opened-in-ide-system-reminder)
      5. [File shorter than offset (System Reminder)](#515-file-shorter-than-offset-system-reminder)
      6. [File truncated (System Reminder)](#516-file-truncated-system-reminder)
      7. [Lines selected in IDE (System Reminder)](#517-lines-selected-in-ide-system-reminder)
      8. [New diagnostics detected (System Reminder)](#518-new-diagnostics-detected-system-reminder)
   2. [Hook System Events and Lifecycle](#52-hook-system-events-and-lifecycle)
      1. [Hook additional context (System Reminder)](#521-hook-additional-context-system-reminder)
      2. [Hook blocking error (System Reminder)](#522-hook-blocking-error-system-reminder)
      3. [Hook stopped continuation prefix (System Reminder)](#523-hook-stopped-continuation-prefix-system-reminder)
      4. [Hook stopped continuation (System Reminder)](#524-hook-stopped-continuation-system-reminder)
      5. [Hook success (System Reminder)](#525-hook-success-system-reminder)
      6. [Hooks Configuration (System Prompt)](#526-hooks-configuration-system-prompt)
   3. [MCP Resource Handling](#53-mcp-resource-handling)
      1. [MCP resource no content (System Reminder)](#531-mcp-resource-no-content-system-reminder)
      2. [MCP resource no displayable content (System Reminder)](#532-mcp-resource-no-displayable-content-system-reminder)
   4. [Tool Permission and Execution Control](#54-tool-permission-and-execution-control)
      1. [Tool permission mode (System Prompt)](#541-tool-permission-mode-system-prompt)
      2. [Tool execution denied (System Prompt)](#542-tool-execution-denied-system-prompt)
      3. [AskUserQuestion (Tool Description)](#543-askuserquestion-tool-description)
   5. [Skills System](#55-skills-system)
      1. [Invoked skills (System Reminder)](#551-invoked-skills-system-reminder)
      2. [Skill (Tool Description)](#552-skill-tool-description)
      3. [Create verifier skills (Skill)](#553-create-verifier-skills-skill)
      4. [Verification specialist (Skill)](#554-verification-specialist-skill)
      5. [Update Claude Code Config (Skill)](#555-update-claude-code-config-skill)
      6. [Debugging (Skill)](#556-debugging-skill)
      7. [Skillify Current Session (System Prompt)](#557-skillify-current-session-system-prompt)
6. [Claude API and SDK References](#6-claude-api-and-sdk-references)
   1. [Core API and Model References](#61-core-api-and-model-references)
      1. [Claude API Reference Documentation](#611-claude-api-reference-documentation)
         1. [Claude API reference — Python (Data)](#6111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#6112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — C# (Data)](#6113-claude-api-reference-—-c-data)
         4. [Claude API reference — Go (Data)](#6114-claude-api-reference-—-go-data)
         5. [Claude API reference — Java (Data)](#6115-claude-api-reference-—-java-data)
         6. [Claude API reference — PHP (Data)](#6116-claude-api-reference-—-php-data)
         7. [Claude API reference — Ruby (Data)](#6117-claude-api-reference-—-ruby-data)
         8. [Claude model catalog (Data)](#6118-claude-model-catalog-data)
         9. [HTTP error codes reference (Data)](#6119-http-error-codes-reference-data)
         10. [Live documentation sources (Data)](#61110-live-documentation-sources-data)
      2. [Build with Claude API Skill](#612-build-with-claude-api-skill)
         1. [Build with Claude API (Skill)](#6121-build-with-claude-api-skill)
         2. [Build with Claude API (trigger) [Skill]](#6122-build-with-claude-api-trigger-skill)
         3. [Build with Claude API (reference guide) [Skill]](#6123-build-with-claude-api-reference-guide-skill)
   2. [Tool Use and Agentic Patterns](#62-tool-use-and-agentic-patterns)
      1. [Tool Use API Reference](#621-tool-use-api-reference)
         1. [Tool use concepts (Data)](#6211-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6212-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6213-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#6214-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#6215-streaming-reference-—-typescript-data)
         6. [Message Batches API reference — Python (Data)](#6216-message-batches-api-reference-—-python-data)
         7. [Files API reference — Python (Data)](#6217-files-api-reference-—-python-data)
         8. [Files API reference — TypeScript (Data)](#6218-files-api-reference-—-typescript-data)
      2. [Agent SDK Reference Documentation](#622-agent-sdk-reference-documentation)
         1. [Agent SDK reference — Python (Data)](#6221-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#6222-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#6223-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#6224-agent-sdk-patterns-—-typescript-data)
   3. [Codebase Documentation and Analysis](#63-codebase-documentation-and-analysis)
      1. [CLAUDE.md creation (Agent Prompt)](#631-claudemd-creation-agent-prompt)
      2. [Update Magic Docs (Agent Prompt)](#632-update-magic-docs-agent-prompt)
      3. [Claude guide agent (Agent Prompt)](#633-claude-guide-agent-agent-prompt)
7. [Coding Practices, Communication, and Learning](#7-coding-practices-communication-and-learning)
   1. [Code Quality and Security](#71-code-quality-and-security)
      1. [Code Quality and Engineering Discipline](#711-code-quality-and-engineering-discipline)
         1. [Doing tasks (no unnecessary error handling) [System Prompt]](#7111-doing-tasks-no-unnecessary-error-handling-system-prompt)
         2. [Doing tasks (read before modifying) [System Prompt]](#7112-doing-tasks-read-before-modifying-system-prompt)
         3. [Doing tasks (avoid over-engineering) [System Prompt]](#7113-doing-tasks-avoid-over-engineering-system-prompt)
         4. [Doing tasks (no premature abstractions) [System Prompt]](#7114-doing-tasks-no-premature-abstractions-system-prompt)
         5. [Doing tasks (no compatibility hacks) [System Prompt]](#7115-doing-tasks-no-compatibility-hacks-system-prompt)
         6. [Doing tasks (no unnecessary additions) [System Prompt]](#7116-doing-tasks-no-unnecessary-additions-system-prompt)
         7. [Doing tasks (minimize file creation) [System Prompt]](#7117-doing-tasks-minimize-file-creation-system-prompt)
         8. [Doing tasks (software engineering focus) [System Prompt]](#7118-doing-tasks-software-engineering-focus-system-prompt)
         9. [Doing tasks (ambitious tasks) [System Prompt]](#7119-doing-tasks-ambitious-tasks-system-prompt)
         10. [Doing tasks (blocked approach) [System Prompt]](#71110-doing-tasks-blocked-approach-system-prompt)
         11. [Doing tasks (no time estimates) [System Prompt]](#71111-doing-tasks-no-time-estimates-system-prompt)
         12. [Doing tasks (help and feedback) [System Prompt]](#71112-doing-tasks-help-and-feedback-system-prompt)
      2. [Security and Safety Constraints](#712-security-and-safety-constraints)
         1. [Doing tasks (security) [System Prompt]](#7121-doing-tasks-security-system-prompt)
         2. [Executing actions with care (System Prompt)](#7122-executing-actions-with-care-system-prompt)
         3. [Censoring assistance with malicious activities (System Prompt)](#7123-censoring-assistance-with-malicious-activities-system-prompt)
         4. [Malware analysis after Read tool call (System Reminder)](#7124-malware-analysis-after-read-tool-call-system-reminder)
   2. [Communication, Collaboration, and Presentation](#72-communication-collaboration-and-presentation)
      1. [Communication Style and Output Formatting](#721-communication-style-and-output-formatting)
         1. [Tone and style (code references) [System Prompt]](#7211-tone-and-style-code-references-system-prompt)
         2. [Tone and style (concise output — detailed) [System Prompt]](#7212-tone-and-style-concise-output-—-detailed-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#7213-tone-and-style-concise-output-—-short-system-prompt)
         4. [Output style active (System Reminder)](#7214-output-style-active-system-reminder)
         5. [/btw side question (System Reminder)](#7215-btw-side-question-system-reminder)
      2. [Educational Collaboration](#722-educational-collaboration)
         1. [Learning mode (System Prompt)](#7221-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7222-learning-mode-insights-system-prompt)
      3. [UI and Visual Presentation](#723-ui-and-visual-presentation)
         1. [Option previewer (System Prompt)](#7231-option-previewer-system-prompt)
         2. [Scratchpad directory (System Prompt)](#7232-scratchpad-directory-system-prompt)
   3. [Usage Analytics and Optimization](#73-usage-analytics-and-optimization)
      1. [Insights at a glance summary (System Prompt)](#731-insights-at-a-glance-summary-system-prompt)
      2. [Insights friction analysis (System Prompt)](#732-insights-friction-analysis-system-prompt)
      3. [Insights on the horizon (System Prompt)](#733-insights-on-the-horizon-system-prompt)
      4. [Insights session facets extraction (System Prompt)](#734-insights-session-facets-extraction-system-prompt)
      5. [Insights suggestions (System Prompt)](#735-insights-suggestions-system-prompt)

---

## 1. Shell and Command Execution

Guidelines, security policies, and best practices for running bash commands, selecting the right tool for file and system operations, and analyzing command output safely.

### 1.1 Bash Tool Usage Guidelines

Bash executes shell commands and returns output. Use dedicated tools (Read, Write, Glob, Grep, Edit) instead of bash equivalents for file operations, content searching, and text manipulation. Chain dependent commands with `&&` for sequential execution with failure propagation; run independent commands as parallel tool calls. Quote file paths containing spaces, maintain absolute paths to preserve working directory, and avoid newlines between commands except in quoted strings.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

#### 1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs to write clear, concise descriptions for bash commands, keeping simple commands brief and providing context for complex piped or obscure commands.

#### 1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to maintain current working directory by using absolute paths and avoiding cd commands unless explicitly requested by the user.

#### 1.1.4 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not; shell environment initializes from user profile.

#### 1.1.5 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits using newlines to separate bash commands, except within quoted strings.

#### 1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs to always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.7 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to run independent bash commands as parallel tool calls in a single message for efficiency.

#### 1.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands using `&&` in a single bash call to ensure sequential execution with failure propagation.

#### 1.1.9 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially but failure of earlier commands is acceptable.

#### 1.1.10 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration in milliseconds for bash commands, with default and maximum limits.

#### 1.1.11 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence and correctness using `ls` before creating new directories or files.

#### 1.1.12 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations brief (1-5 seconds) to avoid blocking the user.

#### 1.1.13 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background` but instead wait for completion notification.

#### 1.1.14 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Instructs Claude to diagnose root causes of failures rather than retrying in sleep loops.

#### 1.1.15 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

#### 1.1.16 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` rather than sleeping when polling external processes.

#### 1.1.17 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Instructs Claude to use `run_in_background` for long-running commands instead of sleeping, with notification upon completion.

#### 1.1.18 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns against using bash for find, grep, cat, head, tail, sed, awk, or echo operations, directing use of dedicated tools instead for better user experience.

#### 1.1.19 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in dedicated tools provide better user experience and transparency than Bash equivalents for file and content operations.

#### 1.1.20 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly rather than using echo or printf commands.

#### 1.1.21 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs use of a dedicated Grep tool instead of grep or rg commands for content searching.

#### 1.1.22 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs use of a dedicated Edit tool instead of sed or awk for file editing operations.

#### 1.1.23 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs use of a dedicated Glob tool instead of find or ls commands for file searching.

#### 1.1.24 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs use of a dedicated Read tool instead of cat, head, or tail commands for reading files.

#### 1.1.25 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs use of a dedicated Write tool instead of echo or cat for writing files.

### 1.2 Bash Sandbox Security Policies

All bash commands run in mandatory sandbox mode by default; the sandbox cannot be disabled by policy. When sandbox restrictions cause failures, immediately retry with `dangerouslyDisableSandbox: true` (which prompts user permission) and briefly explain the restriction. Use `$TMPDIR` or `${SANDBOX_TMPDIR_FN()}` for temporary files. Never suggest sensitive paths like `~/.ssh/*` or credential files for allowlist. Identify sandbox failures by access denied errors, network connection failures to non-whitelisted hosts, operation not permitted errors, or Unix socket connection failures.

#### 1.2.1 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode; the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.2.2 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.2.3 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs to default to running commands within the sandbox and only disable it when explicitly requested by the user or when sandbox restrictions are evident.

#### 1.2.4 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands, even after running one with `dangerouslyDisableSandbox: true`.

#### 1.2.5 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs to work with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 1.2.6 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and inform users about the `/sandbox` command for managing restrictions.

#### 1.2.7 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with `dangerouslyDisableSandbox: true` upon sandbox failure without asking the user.

#### 1.2.8 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

#### 1.2.9 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.2.10 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode instead of `/tmp` directly.

#### 1.2.11 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provides a header phrase for Claude's response when encountering sandbox-caused failures.

#### 1.2.12 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition for identifying sandbox-caused command failures while acknowledging that failures can stem from multiple unrelated causes.

#### 1.2.13 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that identify sandbox-caused command failures.

#### 1.2.14 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.2.15 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.2.16 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "Operation not permitted" errors as evidence of sandbox restrictions on file and network operations.

#### 1.2.17 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Recognizes Unix socket connection errors as sandbox restriction evidence.

### 1.3 Tool Preference and Selection Rules

Reserve Bash for system commands and terminal operations only. Use dedicated tools by default: Read for file access, Write for file creation, Glob for file discovery, Grep for content searching, and Edit for file modifications. Maximize parallel tool calls for independent operations while executing dependent operations sequentially.

#### 1.3.1 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Use Glob or Grep tools directly for simple, targeted codebase searches.

#### 1.3.2 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Prefer the Edit tool over sed or awk for file modifications.

#### 1.3.3 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Use the Read tool instead of cat, head, tail, or sed for file access.

#### 1.3.4 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations; default to dedicated tools when available.

#### 1.3.5 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool instead of grep or rg for searching file contents.

#### 1.3.6 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool instead of find or ls for file discovery.

#### 1.3.7 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Directs Claude to use the Write tool for file creation instead of cat heredoc or echo redirection.

#### 1.3.8 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while executing dependent operations sequentially.

### 1.4 Bash Command Analysis

Analyzes bash commands to extract semantic information: generating human-readable descriptions, detecting file paths in output, and identifying command prefixes and injection attempts for security validation.

#### 1.4.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or obscure-flag commands.

#### 1.4.2 [Bash command file path extraction (Agent Prompt)](system-prompts/agent-prompt-bash-command-file-path-extraction.md)

Extracts file paths from bash command output by determining whether commands display file contents, returning paths verbatim only for commands that show file contents.

#### 1.4.3 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands to support safety allowlisting, returning the prefix string or 'command_injection_detected' for malicious patterns.

---

## 2. Agent Coordination and Multi-Agent Systems

Frameworks for orchestrating subagents, swarm teams, and planning workflows—covering task delegation, parallel agent coordination, agent lifecycle design, and user intent recognition.

### 2.1 Subagent and Task Delegation

Use the Task tool to delegate complex work to specialized subagents for codebase exploration, research, and multi-step implementation. Agents can run in foreground or background with optional worktree isolation; summarize results for users. The Explore subagent specializes in rapid file discovery and code searching with configurable thoroughness levels. Avoid redundant delegation and excessive subagent use for simple file reads or targeted searches. Use the Skill tool only for user-invocable slash commands listed in the tool's documentation.

#### 2.1.1 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Use the Task tool with exploration subagents for broader codebase research when simple directed searches are insufficient or would exceed query limits.

#### 2.1.2 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use the Task tool with specialized subagents for parallelizing independent work or protecting context, but avoid redundant delegation and excessive subagent use.

#### 2.1.3 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute slash commands that invoke user-invocable skills; only invoke skills listed in the tool's user-invocable section.

#### 2.1.4 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents to handle complex tasks like research, exploration, and code implementation. Agents can run in foreground or background with optional worktree isolation; results are not visible to users and must be summarized. Avoid using for simple file reads or specific searches.

#### 2.1.5 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

General-purpose subagent for researching complex questions, searching codebases, and executing multi-step tasks using broad search strategies and file analysis without creating unnecessary files.

#### 2.1.6 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Specifies usage guidelines for Task tool including absolute file paths, no emojis, and no colons before tool calls.

#### 2.1.7 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only codebase exploration agent specializing in rapid file discovery using glob patterns, regex-based code searching, and file analysis. Supports thoroughness levels (quick, medium, very thorough) and executes multiple parallel tool calls for efficiency.

### 2.2 Multi-Agent Team Coordination

Swarm orchestration framework enabling parallel agent teams to coordinate through shared task lists and direct messaging. Agents discover teammates via configuration, claim work in priority order, and communicate through structured protocols with graceful shutdown mechanisms.

#### 2.2.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and communication protocols, instructing it to refer to teammates by name and coordinate through task lists and messaging.

#### 2.2.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before returning a response in non-interactive mode.

#### 2.2.3 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Establishes that agents in a team must use SendMessage tool to communicate with teammates and coordinate through task systems rather than text responses.

#### 2.2.4 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages teams and coordinates multiple agents working in parallel on complex projects. Teams create task lists and coordinate teammates through shared task ownership, automatic message delivery, and idle state management. Teammates discover each other via team config and should refer to teammates by name.

#### 2.2.5 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to teammates and handles protocol requests/responses in swarms with support for direct messages, broadcasts, shutdown requests, and plan approvals. Direct messages are preferred over broadcasts to avoid resource overhead; teammates receive messages automatically and must be addressed by name.

#### 2.2.6 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories when swarm work is complete. Fails if active team members remain; must gracefully terminate teammates first before cleanup.

#### 2.2.7 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for finding and claiming available work from shared task lists. Teammates should prefer tasks in ID order, claim unassigned unblocked tasks, and notify the team lead if blocked.

### 2.3 Agent Architecture and Lifecycle

Manages the creation and verification of AI agents by designing system prompts with behavioral constraints, architecting expert personas, and evaluating task completion through codebase and transcript analysis.

#### 2.3.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts with behavioral boundaries and methodologies, optimizing for performance with decision frameworks, and generating concise identifiers. Includes detailed instructions for crafting agent specifications aligned with project-specific context from CLAUDE.md files.

#### 2.3.2 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and inspecting the codebase to confirm agent task completion.

#### 2.3.3 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether conditions are met with optional reason for failures.

### 2.4 User Intent Recognition

Interprets user communication by analyzing sentiment and frustration, predicting next actions, and detecting explicit requests to invoke specific agents or workflows.

#### 2.4.1 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration levels and detects explicit pull request creation requests in conversation history, outputting boolean flags for sentiment and PR intent.

#### 2.4.2 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on conversation context, suggesting specific actionable commands users would likely type without evaluative language or Claude-voice phrasing.

#### 2.4.3 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Invoke the specified agent when user expresses desire to do so, passing required context.

### 2.5 Planning Mode

Constrained planning workflow that separates design from execution by restricting modifications to plan files and read-only operations. Supports multiple planning strategies—parallel exploration, iterative user collaboration, and subagent coordination—with explicit mode entry and exit boundaries.

#### 2.5.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode constraints with a five-phase workflow: initial understanding through parallel exploration agents, design with planning agents, review, final plan writing, and mode exit. Prohibits all edits except to the plan file and non-readonly tool execution.

#### 2.5.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning with the user through explore-update-ask cycles, allowing only plan file edits and readonly tool use. Emphasizes incremental plan building and user engagement to resolve ambiguities.

#### 2.5.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagents in plan mode to readonly actions and plan file editing only, prohibiting all other modifications while allowing comprehensive query answering and user clarification.

#### 2.5.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit by reading the existing plan, evaluating relevance to the current request, and deciding whether to continue or overwrite it.

#### 2.5.5 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Confirm exit from plan mode and re-enable edits, tools, and actions; reference plan file location if available.

#### 2.5.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and instructs Claude to continue working on it if relevant.

#### 2.5.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Instructs Claude to call a verification tool directly after completing plan implementation to confirm all plan items were executed correctly.

#### 2.5.8 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Instructs Claude to proactively use EnterPlanMode for non-trivial implementation tasks to explore the codebase and design approaches for user approval before writing code. The tool should be used for new features, multiple valid approaches, code modifications, architectural decisions, multi-file changes, unclear requirements, or when user preferences matter, but skipped for simple fixes or research tasks.

#### 2.5.9 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning and requests user approval to proceed with implementation. The tool reads the plan from a file and presents it for review; it should only be used for code implementation tasks, not research or exploration, and should not be used to ask for approval itself.

#### 2.5.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architecture agent that designs implementation plans by exploring codebases, identifying patterns, and detailing step-by-step strategies with critical files and architectural trade-offs.

---

## 3. Session, Memory, and Task Management

Mechanisms for persisting context across sessions, tracking task progress, summarizing conversations, managing resource budgets, and discovering prior sessions.

### 3.1 Task and Todo Tracking

Structured task management for breaking down complex work into trackable units with progress states. Enables proactive task creation, state transitions, and completion marking while maintaining a single in-progress task at any time.

#### 3.1.1 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Use TodoWrite to break down work into tasks, track progress, and mark tasks complete immediately upon finishing.

#### 3.1.2 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for tracking progress on complex coding sessions. Tasks require both imperative content and present-continuous activeForm; use proactively for multi-step tasks, complex work, or when users provide multiple items. Maintain exactly one in_progress task and mark complete only when fully accomplished.

#### 3.1.3 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for tracking progress on complex multi-step work. Tasks require both imperative subject and present-continuous activeForm; use proactively for complex tasks, plan mode, or when users provide multiple items. Skip for single trivial tasks.

#### 3.1.4 [Todo list changed (System Reminder)](system-prompts/system-reminder-todo-list-changed.md)

Notifies Claude of todo list changes without mentioning it to the user and instructs continuation with applicable tasks.

#### 3.1.5 [Todo list empty (System Reminder)](system-prompts/system-reminder-todo-list-empty.md)

Reminds Claude that the todo list is empty and suggests using TodoWrite tool if task tracking would be beneficial.

#### 3.1.6 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for progress tracking when relevant and to clean up stale lists.

#### 3.1.7 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task creation and update tools for progress tracking when relevant, without mentioning the reminder to the user.

#### 3.1.8 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

References the TaskOutput tool for checking task execution output.

### 3.2 Memory and Context Persistence

Cross-session storage and retrieval of institutional knowledge, including selective memory loading, session documentation templates, and automated knowledge updates.

#### 3.2.1 Memory and Session Persistence

Persistent storage mechanisms that maintain context across sessions and conversations. Includes retrieval of memory file contents, selective memory loading based on query relevance, structured templates for session documentation, and automated updates that preserve institutional knowledge with technical details and file references.

##### 3.2.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path with type description.

##### 3.2.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

##### 3.2.1.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and the working directory may have changed.

##### 3.2.1.4 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects up to five relevant memory files from available options based on user query, returning only filenames for memories that clearly help process the query.

##### 3.2.1.5 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by editing existing sections with detailed, info-dense content including file paths and technical details while preserving structure, headers, and italic section descriptions.

##### 3.2.1.6 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files with sections for current state, task specification, files, workflow, errors, codebase documentation, learnings, and worklogs.

##### 3.2.1.7 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations, with examples for code reviewers, test runners, architects, and documentation writers.

#### 3.2.2 Session and Conversation Summarization

Structured summarization across conversation history and context windows. Generates detailed technical summaries organized into consistent sections covering intent, concepts, errors, and next steps, with specialized formats for tool outcomes and agent actions that prioritize brevity and user-visible results.

##### 3.2.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections covering primary intent, technical concepts, files examined, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps with full code snippets and technical accuracy.

##### 3.2.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions (after retained context) across nine sections including primary intent, technical concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps with code snippets.

##### 3.2.2.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt template for generating continuation summaries during context compaction, structured to preserve task overview, current state, discoveries, next steps, and context needed for resuming work in future windows.

##### 3.2.2.4 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Generate brief, past-tense summaries of tool usage outcomes in under 8 words, focusing on user-visible results without implementation details or self-reference.

##### 3.2.2.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt for generating concise 3-5 word present-tense summaries of agent actions, naming specific files or functions rather than branches or vague descriptions.

#### 3.2.3 Session Management and Discovery

Tools for locating prior sessions through metadata search and configuring terminal display environments. Enables session retrieval via tag and content matching while supporting customizable status line presentation through shell configuration integration.

##### 3.2.3.1 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions by prioritizing exact tag matches, then partial tags, titles, branches, and transcript content, returning inclusive results ordered by relevance.

##### 3.2.3.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by reading shell configurations, converting PS1 escape sequences to shell commands, and updating settings.json with custom status line commands that receive JSON context via stdin.

### 3.3 Resource and Budget Constraints

Real-time monitoring of token usage, USD spending, and output constraints, with alerts when quotas are exceeded and recommendations for work decomposition.

#### 3.3.1 Resource and Budget Monitoring

Real-time tracking of computational and financial resource consumption. Monitors token usage against quotas, tracks USD spending, and enforces output constraints by alerting when limits are exceeded and recommending work decomposition.

##### 3.3.1.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 3.3.1.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including used, total, and remaining amounts.

##### 3.3.1.3 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Warns Claude that its response exceeded the output token limit and instructs it to break work into smaller pieces.

#### 3.3.2 Sleep and Idle Management

Efficient waiting and idle-state handling that allows processes to pause without consuming system resources, with responsiveness to user interruption and periodic status checks.

##### 3.3.2.1 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Waits for a specified duration with early wake capability on user input. Use when idle or waiting; can receive periodic tick prompts to check for work. Preferred over bash sleep as it doesn't hold a shell process.

#### 3.3.3 Context and Output Management

Empty cluster with no members.

---

## 4. File, Search, and External Tool Operations

Local filesystem manipulation, pattern-based file and content discovery, web search, browser automation, and GitHub code review integrations.

### 4.1 Local File and Search Tools

Read, write, and edit operations across text, images, PDFs, and notebooks, plus glob and regex-based file and content discovery.

#### 4.1.1 File Operation Tools

Local filesystem manipulation supporting read, write, and edit operations across multiple formats including plain text, images, PDFs, and Jupyter notebooks, with targeted modification capabilities.

##### 4.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges for large files), and Jupyter notebooks. Requires absolute paths and can read up to a default line limit with optional offset and limit parameters; lines exceeding max length are truncated.

##### 4.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem with complete overwrite behavior. Prefer Edit tool for modifications; avoid creating documentation or README files unless explicitly requested.

##### 4.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with guidance on preserving indentation, preferring existing files over new ones, and using `replace_all` for unique matching.

##### 4.1.1.4 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing their contents completely. Supports insert and delete modes with 0-indexed cell numbering and requires absolute file paths.

#### 4.1.2 Search and Discovery Tools

Pattern-based file and content discovery through glob matching, regex search, and code intelligence features, with prerequisite tool-loading mechanisms for accessing deferred capabilities.

##### 4.1.2.1 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like `**/*.js` that returns matching file paths sorted by modification time. Use for finding files by name patterns; for open-ended searches, use the Agent tool instead.

##### 4.1.2.2 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool for finding content using regex patterns with support for file filtering, multiple output modes, and multiline matching. Must be used instead of bash grep commands and supports full regex syntax with proper escaping for special characters.

##### 4.1.2.3 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides code intelligence features through Language Server Protocol including symbol navigation, references, hover information, call hierarchies, and implementations. Requires LSP server configuration for the file type and takes file path with 1-based line and character positions.

##### 4.1.2.4 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite tool for loading deferred tools before use. Must be called first to make deferred tools available; both query modes load returned tools immediately.

##### 4.1.2.5 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage instructions for discovering and loading deferred tools using keyword search, direct selection, or required keyword modes. Both modes load tools equally; do not follow keyword searches with redundant select calls.

### 4.2 Web and Browser Interactions

Real-time web search with source attribution, HTML-to-markdown conversion, and Chrome-based browser automation for multi-step UI interactions.

#### 4.2.1 Browser Automation

Chrome-based browser interaction and automation through mouse, keyboard, and visual feedback mechanisms, with system-level guidance for multi-step web interactions, debugging, and tab management.

##### 4.2.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Chrome browser automation tool for mouse and keyboard interaction with web pages, including screenshot capture and precise cursor positioning guidance.

##### 4.2.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for Chrome browser automation including clicks, typing, scrolling, keyboard input, dragging, zooming, and hover interactions.

##### 4.2.1.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use, requiring explicit tool selection before calling mcp__claude-in-chrome__* functions.

##### 4.2.1.4 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for effective browser automation using Claude in Chrome tools, covering GIF recording, console debugging, alert handling, avoiding loops, and tab context management for multi-step interactions.

#### 4.2.2 Web Search and Content Fetching

Real-time web information retrieval and content processing, combining search capabilities for current data with HTML-to-markdown conversion and summarization for verbose sources, including mandatory source attribution.

##### 4.2.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a small model. Supports URL redirects, includes 15-minute cache, and prefers MCP-provided alternatives when available. Prefer GitHub CLI for GitHub URLs.

##### 4.2.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff with domain filtering support. Mandatory requirement to include a Sources section with markdown links after answering; must use current year in queries for recent information.

##### 4.2.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and attribution rules for untrusted domains while allowing flexibility for trusted sources.

### 4.3 GitHub and Version Control

Git commit discipline, pull request management via the gh CLI, worktree isolation, and integrated GitHub code review with security analysis.

#### 4.3.1 Git Operations and Version Control

Create new commits rather than amending existing ones. Never skip hooks or bypass signing unless explicitly requested; investigate and fix underlying issues on hook failure. Avoid destructive operations (reset --hard, push --force) unless truly necessary. Use `gh` CLI for pull request creation and management. Optionally create isolated git worktrees for session work. Display git status at conversation start including branch, main branch reference, and recent commits. Generate succinct session titles and branch names following naming conventions.

##### 4.3.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout, using them only when truly necessary.

##### 4.3.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests, including safety protocols (no destructive operations without explicit user request, never skip hooks), commit message best practices, and PR creation workflow using gh commands. Emphasizes creating new commits over amending and avoiding force pushes to main/master.

##### 4.3.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping hooks or bypassing signing unless explicitly requested by the user, requiring investigation and fixing of underlying issues on hook failure.

##### 4.3.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to create new commits rather than amending existing ones.

##### 4.3.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree for the session only when explicitly requested by the user. The tool creates a new branch in `.claude/worktrees/` or delegates to VCS-agnostic hooks, then switches the session's working directory to the worktree.

##### 4.3.1.6 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git state including branch, main branch reference, status, and recent commits at conversation start.

##### 4.3.1.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context from git status and diff, analyzing changes to draft appropriate messages following repository conventions while enforcing safety protocols against secrets and hook-skipping.

##### 4.3.1.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates or updates GitHub pull requests with branch creation, single commit, push, and PR submission using heredoc syntax. Includes optional Slack notification integration and enforces git safety protocols.

##### 4.3.1.9 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

#### 4.3.2 GitHub and Code Review Workflows

Integrated code review and security analysis capabilities for GitHub pull requests, combining comment retrieval, quality assessment, vulnerability detection, and Claude Code integration via GitHub Actions and App installation.

##### 4.3.2.1 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and code review comments with file context, line numbers, and threaded replies using GitHub CLI and API.

##### 4.3.2.2 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Conducts thorough code reviews of GitHub pull requests analyzing quality, style, improvements, and risks while focusing on correctness, conventions, performance, test coverage, and security.

##### 4.3.2.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Performs focused security reviews of code changes identifying high-confidence exploitable vulnerabilities across input validation, authentication, crypto, injection, and data exposure categories while minimizing false positives through strict confidence thresholds and exclusion rules.

##### 4.3.2.4 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues, PRs, and comments with configurable permissions and custom prompts.

##### 4.3.2.5 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security considerations, and tool configuration.

---

## 5. System Events, Hooks, and Automation

Event-driven automation at lifecycle boundaries, real-time file system state awareness, MCP resource handling, tool permission control, and the Skills system for reusable domain workflows.

### 5.1 File System State and Context Notifications

Real-time awareness of file system changes and editor interactions including truncation, external modifications, IDE selections, and diagnostic updates. Enables context-aware responses without requiring explicit user mention of file state changes.

#### 5.1.1 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notify that a previously read file is too large to include in context; use Read tool to access it if needed.

#### 5.1.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warn that a file exists but contains no content.

#### 5.1.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notify of external file modifications by user or linter with relevant changes shown; account for changes without reverting unless requested.

#### 5.1.4 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Note that user opened a file in the IDE, which may or may not relate to current task.

#### 5.1.5 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warn that requested read offset exceeds file length; display actual file line count.

#### 5.1.6 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notify that a large file was truncated to first N lines; use Read tool to access remaining content without mentioning truncation to user.

#### 5.1.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines of code in the IDE, providing file context and line numbers.

#### 5.1.8 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues in the code.

### 5.2 Hook System Events and Lifecycle

Event-driven automation framework executing commands and agents at lifecycle boundaries including tool execution, notifications, and session events. Provides blocking error handling, continuation control, and contextual result passing through JSON configuration.

#### 5.2.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provide additional context from a hook execution.

#### 5.2.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Report error from a blocking hook command execution.

#### 5.2.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for hook stopped continuation messages.

#### 5.2.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Report that a hook stopped continuation with a message.

#### 5.2.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Report successful hook execution with result content.

#### 5.2.6 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Documents Claude Code's hooks system for running commands and agents at lifecycle events like tool execution, notifications, and session lifecycle, with JSON configuration structure and examples.

### 5.3 MCP Resource Handling

Status indicators for Model Context Protocol resources that signal when content is unavailable or inaccessible, enabling graceful handling of missing or non-displayable resource states.

#### 5.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource has no content available.

#### 5.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

### 5.4 Tool Permission and Execution Control

Manages tool access through permission modes where denied calls trigger alternative approaches or user clarification rather than retry. Provides AskUserQuestion for gathering input during execution, including requirements clarification and decision-making.

#### 5.4.1 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains that tools operate in user-selected permission modes where denied calls should not be retried identically, and Claude should adjust approach or ask for clarification.

#### 5.4.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Establishes that when tool execution is denied, Claude may attempt reasonable alternatives but should not bypass restrictions maliciously, and should ask the user if essential capabilities are blocked.

#### 5.4.3 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Defines the AskUserQuestion tool for gathering user input during execution, including clarifying requirements, requesting decisions, and offering choices. Specifies plan-mode behavior to avoid asking about plan approval and clarifies that users cannot see the plan in the UI until plan mode is exited.

### 5.5 Skills System

Enables domain-specific automation through reusable skills that encapsulate specialized workflows like code verification, configuration management, and debugging. Skills are invoked as slash commands before generating other responses and capture repeatable patterns through structured interviews.

#### 5.5.1 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Displays the list of skills invoked during the current session and instructs Claude to continue following their guidelines.

#### 5.5.2 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation. Must be invoked before generating other responses when a skill matches the user's request; skills are referenced in system reminders and should never be mentioned without actually calling the tool.

#### 5.5.3 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically verify code changes through Playwright (web UI), Tmux (CLI), or HTTP (API) testing, including project auto-detection, tool setup, interactive Q&A for authentication and configuration, and skill generation with appropriate allowed-tools.

#### 5.5.4 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering verifier skills, analyzing git changes, creating deterministic verification plans, triggering appropriate verifiers, and reporting results with pass/fail status for each step.

#### 5.5.5 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration by updating settings.json files, with emphasis on reading existing settings before merging changes, distinguishing between config tool and direct file editing, and properly handling hooks and permission arrays.

#### 5.5.6 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, consulting settings files, and providing concrete fixes or next steps.

#### 5.5.7 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a multi-round interview process to capture repeatable workflows as reusable skills, analyzing sessions, confirming details with users, and generating SKILL.md files with execution instructions and success criteria.

---

## 6. Claude API and SDK References

Authoritative reference documentation for the Claude API across multiple languages, tool use implementation patterns, Agent SDK guides, and routing skills for API development.

### 6.1 Core API and Model References

Multi-language SDK references (Python, TypeScript, C#, Go, Java, PHP, Ruby), the model catalog, HTTP error codes, and main routing guidance for API development.

#### 6.1.1 Claude API Reference Documentation

Multi-language SDK references for Claude API across Python, TypeScript, C#, Go, Java, PHP, and Ruby, plus the authoritative model catalog and HTTP error reference, enabling developers to integrate Claude across diverse technology stacks.

##### 6.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering installation, client setup, vision, prompt caching, extended and adaptive thinking, error handling, multi-turn conversations, compaction, cost optimization, and retry strategies.

##### 6.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Complete TypeScript SDK reference covering installation, client setup, vision, prompt caching, adaptive thinking, error handling, multi-turn conversations, compaction, cost optimization, and token counting.

##### 6.1.1.3 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering installation, client initialization, basic message requests, streaming, and manual tool use with JSON schema definitions.

##### 6.1.1.4 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API including installation, client setup, basic requests, streaming, and manual agentic loops for tool use.

##### 6.1.1.5 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering installation, client initialization, basic requests, streaming, and beta tool use with annotated classes via BetaToolRunner.

##### 6.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API with installation, client initialization, basic message requests, streaming, and manual tool use.

##### 6.1.1.7 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including installation, client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

##### 6.1.1.8 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Authoritative catalog of current, legacy, and retired Claude models with exact model IDs, aliases, context windows, max output tokens, and user-request resolution mapping.

##### 6.1.1.9 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400-529) with causes, fixes, and common mistakes including validation errors, rate limiting, and retry guidance.

##### 6.1.1.10 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories, with extraction prompts for specific topics.

#### 6.1.2 Build with Claude API Skill

Main routing and navigation skill for Claude API development, providing architecture guidance, model selection, language detection, and comprehensive reference documentation mapping to help developers choose the right approach and find relevant resources.

##### 6.1.2.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM-powered applications with Claude, including language detection, surface selection (single call vs workflow vs agent), architecture overview, current models (Opus 4.6, Sonnet 4.6, Haiku 4.5), adaptive thinking, effort parameters, context compaction, and comprehensive reading guide for language-specific documentation.

##### 6.1.2.2 [Build with Claude API (trigger) [Skill]](system-prompts/skill-build-with-claude-api-trigger.md)

Activation criteria for the Build with Claude API skill, triggered when code imports the Anthropic SDK or Claude API endpoints.

##### 6.1.2.3 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API reference documentation with quick task reference mapping common use cases to relevant documentation sections.

### 6.2 Tool Use and Agentic Patterns

Comprehensive tool use implementation covering agentic loops, streaming, batch processing, file handling, and language-specific patterns for building Claude-powered agents.

#### 6.2.1 Tool Use API Reference

Comprehensive tool use implementation covering conceptual foundations, language-specific patterns for Python and TypeScript, streaming mechanics, batch processing, and file handling—enabling Claude to interact with external systems and process documents at scale.

##### 6.2.1.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Comprehensive guide to Claude API tool use covering user-defined tools, tool choice options, the tool runner vs manual agentic loops, server-side tools (code execution, web search, web fetch, computer use), the memory tool, structured outputs, and best practices for effective tool definitions and error handling.

##### 6.2.1.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python-specific tool use implementation guide covering the beta tool runner with @beta_tool decorators, manual agentic loops, code execution with file uploads and container reuse, memory tool integration, and structured outputs using Pydantic models and strict tool use.

##### 6.2.1.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript-specific tool use implementation guide covering the beta tool runner with betaZodTool and Zod schemas, manual agentic loops, code execution with file handling, memory tool with handlers, and structured outputs using Zod schemas and strict tool use.

##### 6.2.1.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling thinking blocks and tool use, progress tracking, error handling, and stream event types with best practices.

##### 6.2.1.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, tool runner streaming, final message retrieval, and raw SSE format.

##### 6.2.1.6 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for asynchronous message processing at 50% cost, covering batch creation, status polling, result retrieval, cancellation, and prompt caching integration.

##### 6.2.1.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for PDFs and images, file management operations, and end-to-end examples with persistent file references.

##### 6.2.1.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages, and managing file operations including listing, deletion, and download.

#### 6.2.2 Agent SDK Reference Documentation

Language-specific Agent SDK references and patterns for Python and TypeScript, covering installation, permission systems, MCP integration, hooks, subagents, and session management with both API documentation and practical code examples.

##### 6.2.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, primary interfaces (query and ClaudeSDKClient), permission system, MCP support, hooks, common options, message types, subagents, and error handling with best practices.

##### 6.2.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, quick start, permission modes, MCP support with in-process tools, hooks, common options, subagents, and best practices.

##### 6.2.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Provides practical Python code examples for Agent SDK usage including basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with full working implementations.

##### 6.2.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Demonstrates TypeScript Agent SDK patterns for hooks, subagents, MCP server integration, session resumption, and custom system prompts with concise code examples.

### 6.3 Codebase Documentation and Analysis

Agent prompts for analyzing codebases, creating and maintaining CLAUDE.md documentation, and guiding users through Claude tooling—automating knowledge capture and helping developers understand project architecture and available resources.

#### 6.3.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation by documenting common build/test/lint commands, high-level architecture, and integrating important information from existing configuration files and README.

#### 6.3.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs Claude to update Magic Doc files with new learnings from conversations, preserving headers while removing outdated information and maintaining terse, architecture-focused documentation that avoids duplicating obvious code details.

#### 6.3.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code (CLI tool), Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant resources, and providing actionable guidance with code examples and references to local project files.

---

## 7. Coding Practices, Communication, and Learning

Engineering discipline for writing clean, minimal code; security and safety constraints; clear communication style; educational collaboration; UI presentation; and usage analytics for workflow improvement.

### 7.1 Code Quality and Security

Disciplined coding practices emphasizing comprehension before modification, minimal complexity, scope control, and prevention of injection attacks and OWASP vulnerabilities.

#### 7.1.1 Code Quality and Engineering Discipline

Establishes disciplined coding practices by requiring comprehension before modification, rejecting unnecessary abstractions and defensive patterns, minimizing scope creep, and deferring to user judgment on ambitious work. Emphasizes simplicity, focused changes, and direct deletion of unused code over compatibility workarounds.

##### 7.1.1.1 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid defensive error handling for impossible scenarios and trust framework guarantees, validating only at system boundaries like user input and external APIs.

##### 7.1.1.2 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing any modifications or changes.

##### 7.1.1.3 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Instruction to avoid over-engineering by making only directly requested or clearly necessary changes, keeping solutions simple and focused.

##### 7.1.1.4 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Guidance against creating helpers, utilities, or abstractions for one-time operations or hypothetical requirements, favoring minimal complexity.

##### 7.1.1.5 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Directive to delete unused code completely rather than adding compatibility shims, re-exports, or removed comments.

##### 7.1.1.6 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directive to avoid adding features, refactoring, or making improvements beyond what was asked, keeping changes focused and minimal.

##### 7.1.1.7 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Instruction to prefer editing existing files over creating new ones, preventing file bloat and building on existing work.

##### 7.1.1.8 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks like bug fixes, refactoring, and feature development, and instructs Claude to interpret ambiguous requests within that context.

##### 7.1.1.9 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Directive to allow users to complete ambitious tasks that would otherwise be too complex, deferring to user judgment on scope.

##### 7.1.1.10 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Guidance to consider alternative approaches when blocked instead of brute-forcing, using AskUserQuestion to align with user on the right path.

##### 7.1.1.11 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instruction to avoid giving time estimates or predictions for task completion, focusing on what needs to be done instead.

##### 7.1.1.12 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels.

#### 7.1.2 Security and Safety Constraints

Enforces security-first development by preventing injection attacks and OWASP vulnerabilities, requiring confirmation for destructive or hard-to-reverse operations, and distinguishing between authorized security testing and malicious activities. Prohibits code improvement for malware while allowing analysis.

##### 7.1.2.1 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Directs Claude to avoid introducing security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks, prioritizing secure code.

##### 7.1.2.2 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a cautious approach to risky actions by evaluating reversibility and blast radius, requiring user confirmation for destructive operations, hard-to-reverse changes, and actions affecting shared systems before proceeding.

##### 7.1.2.3 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, CTF challenges, and defensive security while refusing requests for destructive attacks, DoS, supply chain compromise, or detection evasion for malicious purposes.

##### 7.1.2.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but strictly prohibits improving or augmenting malicious code, allowing only analysis and reporting.

### 7.2 Communication, Collaboration, and Presentation

Concise and polished output formatting, educational workflows that balance execution with learning, and visual UI comparison mechanisms for interface design.

#### 7.2.1 Communication Style and Output Formatting

Shapes interaction clarity through concise, polished output with precise code location references and direct answers to side questions without tool invocation. Eliminates filler and repetition while preserving essential information.

##### 7.2.1.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number references when mentioning specific code locations for easy user navigation.

##### 7.2.1.2 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Directs Claude to produce concise, polished output without filler, repetition, or inner monologue while preserving important information.

##### 7.2.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 7.2.1.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and to follow its guidelines.

##### 7.2.1.5 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer side questions directly without tools, using only conversation context, in a single response without offering further investigation.

#### 7.2.2 Educational Collaboration

Enables learning-focused workflows by balancing task execution with educational value, soliciting user input on design decisions, and providing implementation-specific explanations.

##### 7.2.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Establishes collaborative learning mode where Claude balances task completion with educational value by requesting user contributions on design decisions, business logic, and algorithms while handling routine implementation.

##### 7.2.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code writing to encourage learning through implementation-specific explanations.

#### 7.2.3 UI and Visual Presentation

Mechanisms for displaying and organizing interface elements and temporary data. Includes side-by-side visual comparison of UI options through markdown previews and dedicated session-scoped file storage for transient artifacts.

##### 7.2.3.1 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side visual comparison of UI options using markdown previews for mockups, code snippets, and diagrams in single-select questions.

##### 7.2.3.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a dedicated session-specific scratchpad directory for temporary files instead of system temp directories.

### 7.3 Usage Analytics and Optimization

Extracts and synthesizes usage patterns from Claude Code sessions to identify friction points, surface quick wins, recommend features, and envision future autonomous workflows.

#### 7.3.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a structured 4-part usage insights summary covering what's working, friction points, quick wins, and ambitious future workflows for Claude Code users.

#### 7.3.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns and recurring issues affecting user workflows.

#### 7.3.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data analysis.

#### 7.3.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts including goal categories, user satisfaction signals, and friction types with strict guidelines for accurate classification.

#### 7.3.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to user workflows.
