# Claude Code System Prompts Index

A technical reference for building and operating Claude-powered coding agents, covering everything needed to safely execute tasks, manage persistent state, and integrate with external systems across both single-session and multi-agent deployments.

## Table of Contents

1. [Bash and Shell Execution](#1-bash-and-shell-execution)
   1. [Core Bash Behavior and Syntax](#11-core-bash-behavior-and-syntax)
      1. [Bash Tool Core Behavior](#111-bash-tool-core-behavior)
         1. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
         2. [Bash (command description) [Tool Description]](#1112-bash-command-description-tool-description)
         3. [Bash (maintain cwd) [Tool Description]](#1113-bash-maintain-cwd-tool-description)
         4. [Bash (working directory) [Tool Description]](#1114-bash-working-directory-tool-description)
         5. [Bash (no newlines) [Tool Description]](#1115-bash-no-newlines-tool-description)
         6. [Bash (quote file paths) [Tool Description]](#1116-bash-quote-file-paths-tool-description)
         7. [Bash (parallel commands) [Tool Description]](#1117-bash-parallel-commands-tool-description)
         8. [Bash (sequential commands) [Tool Description]](#1118-bash-sequential-commands-tool-description)
         9. [Bash (semicolon usage) [Tool Description]](#1119-bash-semicolon-usage-tool-description)
         10. [Bash (timeout) [Tool Description]](#11110-bash-timeout-tool-description)
         11. [Bash (verify parent directory) [Tool Description]](#11111-bash-verify-parent-directory-tool-description)
         12. [Bash (prefer dedicated tools) [Tool Description]](#11112-bash-prefer-dedicated-tools-tool-description)
         13. [Bash (built-in tools note) [Tool Description]](#11113-bash-built-in-tools-note-tool-description)
         14. [Bash (alternative — communication) [Tool Description]](#11114-bash-alternative-—-communication-tool-description)
         15. [Bash (alternative — content search) [Tool Description]](#11115-bash-alternative-—-content-search-tool-description)
         16. [Bash (alternative — edit files) [Tool Description]](#11116-bash-alternative-—-edit-files-tool-description)
         17. [Bash (alternative — file search) [Tool Description]](#11117-bash-alternative-—-file-search-tool-description)
         18. [Bash (alternative — read files) [Tool Description]](#11118-bash-alternative-—-read-files-tool-description)
         19. [Bash (alternative — write files) [Tool Description]](#11119-bash-alternative-—-write-files-tool-description)
      2. [Bash Tool Usage Guidance](#112-bash-tool-usage-guidance)
         1. [Tool usage (reserve Bash) [System Prompt]](#1121-tool-usage-reserve-bash-system-prompt)
   2. [Async Execution and Waiting](#12-async-execution-and-waiting)
      1. [Bash Sleep and Background Task Management](#121-bash-sleep-and-background-task-management)
         1. [Bash (sleep — keep short) [Tool Description]](#1211-bash-sleep-—-keep-short-tool-description)
         2. [Bash (sleep — no polling background tasks) [Tool Description]](#1212-bash-sleep-—-no-polling-background-tasks-tool-description)
         3. [Bash (sleep — no retry loops) [Tool Description]](#1213-bash-sleep-—-no-retry-loops-tool-description)
         4. [Bash (sleep — run immediately) [Tool Description]](#1214-bash-sleep-—-run-immediately-tool-description)
         5. [Bash (sleep — use check commands) [Tool Description]](#1215-bash-sleep-—-use-check-commands-tool-description)
         6. [Bash (sleep — use run_in_background) [Tool Description]](#1216-bash-sleep-—-use-run_in_background-tool-description)
      2. [Sleep Tool](#122-sleep-tool)
         1. [Sleep (Tool Description)](#1221-sleep-tool-description)
   3. [Bash Safety and Security](#13-bash-safety-and-security)
      1. [Bash Sandbox Security and Enforcement](#131-bash-sandbox-security-and-enforcement)
         1. [Bash (sandbox — adjust settings) [Tool Description]](#1311-bash-sandbox-—-adjust-settings-tool-description)
         2. [Bash (sandbox — default to sandbox) [Tool Description]](#1312-bash-sandbox-—-default-to-sandbox-tool-description)
         3. [Bash (sandbox — evidence: access denied) [Tool Description]](#1313-bash-sandbox-—-evidence-access-denied-tool-description)
         4. [Bash (sandbox — evidence list header) [Tool Description]](#1314-bash-sandbox-—-evidence-list-header-tool-description)
         5. [Bash (sandbox — evidence: network failures) [Tool Description]](#1315-bash-sandbox-—-evidence-network-failures-tool-description)
         6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1316-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
         7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1317-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
         8. [Bash (sandbox — explain restriction) [Tool Description]](#1318-bash-sandbox-—-explain-restriction-tool-description)
         9. [Bash (sandbox — failure evidence condition) [Tool Description]](#1319-bash-sandbox-—-failure-evidence-condition-tool-description)
         10. [Bash (sandbox — mandatory mode) [Tool Description]](#13110-bash-sandbox-—-mandatory-mode-tool-description)
         11. [Bash (sandbox — no exceptions) [Tool Description]](#13111-bash-sandbox-—-no-exceptions-tool-description)
         12. [Bash (sandbox — no sensitive paths) [Tool Description]](#13112-bash-sandbox-—-no-sensitive-paths-tool-description)
         13. [Bash (sandbox — per-command) [Tool Description]](#13113-bash-sandbox-—-per-command-tool-description)
         14. [Bash (sandbox — response header) [Tool Description]](#13114-bash-sandbox-—-response-header-tool-description)
         15. [Bash (sandbox — retry without sandbox) [Tool Description]](#13115-bash-sandbox-—-retry-without-sandbox-tool-description)
         16. [Bash (sandbox — tmpdir) [Tool Description]](#13116-bash-sandbox-—-tmpdir-tool-description)
         17. [Bash (sandbox — user permission prompt) [Tool Description]](#13117-bash-sandbox-—-user-permission-prompt-tool-description)
      2. [Bash Command Safety and Clarity](#132-bash-command-safety-and-clarity)
         1. [Bash command description writer (Agent Prompt)](#1321-bash-command-description-writer-agent-prompt)
         2. [Bash command prefix detection (Agent Prompt)](#1322-bash-command-prefix-detection-agent-prompt)
2. [Code Development and Quality](#2-code-development-and-quality)
   1. [Planning and Task Management](#21-planning-and-task-management)
      1. [Planning Mode and Implementation Design](#211-planning-mode-and-implementation-design)
         1. [EnterPlanMode (Tool Description)](#2111-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#2112-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#2113-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#2114-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#2115-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#2116-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#2117-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#2118-plan-file-reference-system-reminder)
         9. [Verify plan reminder (System Reminder)](#2119-verify-plan-reminder-system-reminder)
         10. [Plan mode (enhanced) [Agent Prompt]](#21110-plan-mode-enhanced-agent-prompt)
      2. [Task Tracking and Progress Management](#212-task-tracking-and-progress-management)
         1. [TodoWrite (Tool Description)](#2121-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#2122-taskcreate-tool-description)
         3. [TodoWrite reminder (System Reminder)](#2123-todowrite-reminder-system-reminder)
         4. [Task tools reminder (System Reminder)](#2124-task-tools-reminder-system-reminder)
         5. [Task status (System Reminder)](#2125-task-status-system-reminder)
         6. [Tool usage (task management) [System Prompt]](#2126-tool-usage-task-management-system-prompt)
   2. [Git Operations and Version Control](#22-git-operations-and-version-control)
      1. [Git Workflow and Safety](#221-git-workflow-and-safety)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#2211-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#2212-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#2213-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#2214-bash-git-—-prefer-new-commits-tool-description)
         5. [EnterWorktree (Tool Description)](#2215-enterworktree-tool-description)
         6. [Git status (System Prompt)](#2216-git-status-system-prompt)
         7. [Quick git commit (Agent Prompt)](#2217-quick-git-commit-agent-prompt)
         8. [Quick PR creation (Agent Prompt)](#2218-quick-pr-creation-agent-prompt)
         9. [/pr-comments slash command (Agent Prompt)](#2219-pr-comments-slash-command-agent-prompt)
         10. [/review-pr slash command (Agent Prompt)](#22110-review-pr-slash-command-agent-prompt)
      2. [GitHub Integration and CI/CD](#222-github-integration-and-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#2221-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#2222-github-app-installation-pr-description-data)
   3. [Code Quality Principles and Enforcement](#23-code-quality-principles-and-enforcement)
      1. [Code Quality and Task Execution Discipline](#231-code-quality-and-task-execution-discipline)
         1. [Doing tasks (avoid over-engineering) [System Prompt]](#2311-doing-tasks-avoid-over-engineering-system-prompt)
         2. [Doing tasks (no premature abstractions) [System Prompt]](#2312-doing-tasks-no-premature-abstractions-system-prompt)
         3. [Doing tasks (no unnecessary error handling) [System Prompt]](#2313-doing-tasks-no-unnecessary-error-handling-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#2314-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no unnecessary additions) [System Prompt]](#2315-doing-tasks-no-unnecessary-additions-system-prompt)
         6. [Doing tasks (minimize file creation) [System Prompt]](#2316-doing-tasks-minimize-file-creation-system-prompt)
         7. [Doing tasks (read before modifying) [System Prompt]](#2317-doing-tasks-read-before-modifying-system-prompt)
         8. [Doing tasks (software engineering focus) [System Prompt]](#2318-doing-tasks-software-engineering-focus-system-prompt)
         9. [Doing tasks (ambitious tasks) [System Prompt]](#2319-doing-tasks-ambitious-tasks-system-prompt)
         10. [Doing tasks (blocked approach) [System Prompt]](#23110-doing-tasks-blocked-approach-system-prompt)
         11. [Doing tasks (no time estimates) [System Prompt]](#23111-doing-tasks-no-time-estimates-system-prompt)
         12. [Doing tasks (help and feedback) [System Prompt]](#23112-doing-tasks-help-and-feedback-system-prompt)
         13. [Doing tasks (security) [System Prompt]](#23113-doing-tasks-security-system-prompt)
      2. [Code Quality Assurance and Deployment](#232-code-quality-assurance-and-deployment)
         1. [New diagnostics detected (System Reminder)](#2321-new-diagnostics-detected-system-reminder)
         2. [Worker instructions (System Prompt)](#2322-worker-instructions-system-prompt)
   4. [Security Assessment and Code Intelligence](#24-security-assessment-and-code-intelligence)
      1. [Security Assessment and Threat Analysis](#241-security-assessment-and-threat-analysis)
         1. [/security-review slash command (Agent Prompt)](#2411-security-review-slash-command-agent-prompt)
         2. [Censoring assistance with malicious activities (System Prompt)](#2412-censoring-assistance-with-malicious-activities-system-prompt)
         3. [Malware analysis after Read tool call (System Reminder)](#2413-malware-analysis-after-read-tool-call-system-reminder)
      2. [Code Editing and Intelligence](#242-code-editing-and-intelligence)
         1. [NotebookEdit (Tool Description)](#2421-notebookedit-tool-description)
         2. [LSP (Tool Description)](#2422-lsp-tool-description)
3. [File Operations, Tools, and Agent Orchestration](#3-file-operations-tools-and-agent-orchestration)
   1. [File Reading, Writing, and Search](#31-file-reading-writing-and-search)
      1. [File Reading and Search Tools](#311-file-reading-and-search-tools)
         1. [ReadFile (Tool Description)](#3111-readfile-tool-description)
         2. [Glob (Tool Description)](#3112-glob-tool-description)
         3. [Grep (Tool Description)](#3113-grep-tool-description)
         4. [Tool usage (read files) [System Prompt]](#3114-tool-usage-read-files-system-prompt)
         5. [Tool usage (search files) [System Prompt]](#3115-tool-usage-search-files-system-prompt)
         6. [Tool usage (search content) [System Prompt]](#3116-tool-usage-search-content-system-prompt)
         7. [Tool usage (direct search) [System Prompt]](#3117-tool-usage-direct-search-system-prompt)
      2. [File Writing and Editing Tools](#312-file-writing-and-editing-tools)
         1. [Write (Tool Description)](#3121-write-tool-description)
         2. [Edit (Tool Description)](#3122-edit-tool-description)
         3. [Tool usage (edit files) [System Prompt]](#3123-tool-usage-edit-files-system-prompt)
         4. [Tool usage (create files) [System Prompt]](#3124-tool-usage-create-files-system-prompt)
      3. [File State and Context Notifications](#313-file-state-and-context-notifications)
         1. [File truncated (System Reminder)](#3131-file-truncated-system-reminder)
         2. [File exists but empty (System Reminder)](#3132-file-exists-but-empty-system-reminder)
         3. [File modified by user or linter (System Reminder)](#3133-file-modified-by-user-or-linter-system-reminder)
         4. [File opened in IDE (System Reminder)](#3134-file-opened-in-ide-system-reminder)
         5. [File shorter than offset (System Reminder)](#3135-file-shorter-than-offset-system-reminder)
         6. [Compact file reference (System Reminder)](#3136-compact-file-reference-system-reminder)
         7. [Lines selected in IDE (System Reminder)](#3137-lines-selected-in-ide-system-reminder)
   2. [Tool Discovery, Permissions, and Hooks](#32-tool-discovery-permissions-and-hooks)
      1. [Tool and Capability Discovery](#321-tool-and-capability-discovery)
         1. [MCP resource no content (System Reminder)](#3211-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#3212-mcp-resource-no-displayable-content-system-reminder)
         3. [ToolSearch (Tool Description)](#3213-toolsearch-tool-description)
         4. [ToolSearch extended (Tool Description)](#3214-toolsearch-extended-tool-description)
         5. [Skill (Tool Description)](#3215-skill-tool-description)
         6. [Tool usage (skill invocation) [System Prompt]](#3216-tool-usage-skill-invocation-system-prompt)
      2. [Tool Permission and Execution Control](#322-tool-permission-and-execution-control)
         1. [Tool permission mode (System Prompt)](#3221-tool-permission-mode-system-prompt)
         2. [Tool execution denied (System Prompt)](#3222-tool-execution-denied-system-prompt)
         3. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#3223-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         4. [Executing actions with care (System Prompt)](#3224-executing-actions-with-care-system-prompt)
      3. [Hook Lifecycle and Integration](#323-hook-lifecycle-and-integration)
         1. [Hook success (System Reminder)](#3231-hook-success-system-reminder)
         2. [Hook blocking error (System Reminder)](#3232-hook-blocking-error-system-reminder)
         3. [Hook stopped continuation (System Reminder)](#3233-hook-stopped-continuation-system-reminder)
         4. [Hook stopped continuation prefix (System Reminder)](#3234-hook-stopped-continuation-prefix-system-reminder)
         5. [Hook additional context (System Reminder)](#3235-hook-additional-context-system-reminder)
         6. [Hooks Configuration (System Prompt)](#3236-hooks-configuration-system-prompt)
         7. [Agent Hook (Agent Prompt)](#3237-agent-hook-agent-prompt)
         8. [Hook condition evaluator (Agent Prompt)](#3238-hook-condition-evaluator-agent-prompt)
   3. [Multi-Agent Coordination and Delegation](#33-multi-agent-coordination-and-delegation)
      1. [Multi-Agent Team and Swarm Coordination](#331-multi-agent-team-and-swarm-coordination)
         1. [TeammateTool (Tool Description)](#3311-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#3312-teamdelete-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#3313-tasklist-teammate-workflow-tool-description)
         4. [SendMessageTool (Tool Description)](#3314-sendmessagetool-tool-description)
         5. [Team Coordination (System Reminder)](#3315-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#3316-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#3317-teammate-communication-system-prompt)
         8. [/batch slash command (Agent Prompt)](#3318-batch-slash-command-agent-prompt)
      2. [Sub-Agent Task Delegation](#332-sub-agent-task-delegation)
         1. [Task (Tool Description)](#3321-task-tool-description)
         2. [Tool usage (delegate exploration) [System Prompt]](#3322-tool-usage-delegate-exploration-system-prompt)
         3. [Tool usage (subagent guidance) [System Prompt]](#3323-tool-usage-subagent-guidance-system-prompt)
         4. [Task tool (Agent Prompt)](#3324-task-tool-agent-prompt)
         5. [Task tool (extra notes) [Agent Prompt]](#3325-task-tool-extra-notes-agent-prompt)
         6. [Explore (Agent Prompt)](#3326-explore-agent-prompt)
      3. [Agent Design and Creation](#333-agent-design-and-creation)
         1. [Agent creation architect (Agent Prompt)](#3331-agent-creation-architect-agent-prompt)
         2. [Agent mention (System Reminder)](#3332-agent-mention-system-reminder)
   4. [Skills Framework and Workflow Automation](#34-skills-framework-and-workflow-automation)
      1. [Skillify Current Session (System Prompt)](#341-skillify-current-session-system-prompt)
      2. [Create verifier skills (Skill)](#342-create-verifier-skills-skill)
      3. [Verification specialist (Skill)](#343-verification-specialist-skill)
      4. [Debugging (Skill)](#344-debugging-skill)
      5. [Simplify (Skill)](#345-simplify-skill)
      6. [Update Claude Code Config (Skill)](#346-update-claude-code-config-skill)
4. [Session, Memory, and User Interaction](#4-session-memory-and-user-interaction)
   1. [Context and Session Continuity](#41-context-and-session-continuity)
      1. [Session and Context Management](#411-session-and-context-management)
         1. [Session continuation (System Reminder)](#4111-session-continuation-system-reminder)
         2. [Token usage (System Reminder)](#4112-token-usage-system-reminder)
         3. [USD budget (System Reminder)](#4113-usd-budget-system-reminder)
         4. [Output token limit exceeded (System Reminder)](#4114-output-token-limit-exceeded-system-reminder)
         5. [Context compaction summary (System Prompt)](#4115-context-compaction-summary-system-prompt)
         6. [Scratchpad directory (System Prompt)](#4116-scratchpad-directory-system-prompt)
      2. [Conversation Summarization and Compaction](#412-conversation-summarization-and-compaction)
         1. [Conversation summarization (Agent Prompt)](#4121-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#4122-recent-message-summarization-agent-prompt)
         3. [Agent Summary Generation (System Prompt)](#4123-agent-summary-generation-system-prompt)
         4. [Tool Use Summary Generation (System Prompt)](#4124-tool-use-summary-generation-system-prompt)
      3. [Session Metadata and Search](#413-session-metadata-and-search)
         1. [Session title and branch generation (Agent Prompt)](#4131-session-title-and-branch-generation-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#4132-session-search-assistant-agent-prompt)
         3. [Status line setup (Agent Prompt)](#4133-status-line-setup-agent-prompt)
   2. [Memory and Knowledge Persistence](#42-memory-and-knowledge-persistence)
      1. [Memory Management and Knowledge Persistence](#421-memory-management-and-knowledge-persistence)
         1. [Memory file contents (System Reminder)](#4211-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#4212-nested-memory-contents-system-reminder)
         3. [Memory selection (Agent Prompt)](#4213-memory-selection-agent-prompt)
         4. [Session memory update instructions (Agent Prompt)](#4214-session-memory-update-instructions-agent-prompt)
         5. [Session memory template (Data)](#4215-session-memory-template-data)
         6. [Agent memory instructions (System Prompt)](#4216-agent-memory-instructions-system-prompt)
      2. [Session Capability Tracking](#422-session-capability-tracking)
         1. [Invoked skills (System Reminder)](#4221-invoked-skills-system-reminder)
   3. [User Communication and Output Style](#43-user-communication-and-output-style)
      1. [User Interaction and Clarification](#431-user-interaction-and-clarification)
         1. [AskUserQuestion (Tool Description)](#4311-askuserquestion-tool-description)
         2. [Option previewer (System Prompt)](#4312-option-previewer-system-prompt)
         3. [/btw side question (System Reminder)](#4313-btw-side-question-system-reminder)
      2. [Output Style and Tone Guidelines](#432-output-style-and-tone-guidelines)
         1. [Tone and style (concise output — detailed) [System Prompt]](#4321-tone-and-style-concise-output-—-detailed-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#4322-tone-and-style-concise-output-—-short-system-prompt)
         3. [Tone and style (code references) [System Prompt]](#4323-tone-and-style-code-references-system-prompt)
         4. [Output style active (System Reminder)](#4324-output-style-active-system-reminder)
      3. [Conversation Analysis and Intent Detection](#433-conversation-analysis-and-intent-detection)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#4331-prompt-suggestion-generator-v2-agent-prompt)
         2. [User sentiment analysis (Agent Prompt)](#4332-user-sentiment-analysis-agent-prompt)
   4. [Analytics, Learning, and Documentation](#44-analytics-learning-and-documentation)
      1. [Insights and Usage Analytics](#441-insights-and-usage-analytics)
         1. [Insights at a glance summary (System Prompt)](#4411-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#4412-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#4413-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#4414-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#4415-insights-suggestions-system-prompt)
      2. [Learning Mode](#442-learning-mode)
         1. [Learning mode (System Prompt)](#4421-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#4422-learning-mode-insights-system-prompt)
      3. [Documentation and Knowledge Management](#443-documentation-and-knowledge-management)
         1. [CLAUDE.md creation (Agent Prompt)](#4431-claudemd-creation-agent-prompt)
         2. [Update Magic Docs (Agent Prompt)](#4432-update-magic-docs-agent-prompt)
5. [Claude API, SDKs, and External Services](#5-claude-api-sdks-and-external-services)
   1. [SDK Reference by Language](#51-sdk-reference-by-language)
      1. [Claude API SDK Reference Data](#511-claude-api-sdk-reference-data)
         1. [Claude API reference — Python (Data)](#5111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#5112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#5113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#5114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#5115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#5116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#5117-claude-api-reference-—-c-data)
         8. [Claude model catalog (Data)](#5118-claude-model-catalog-data)
         9. [HTTP error codes reference (Data)](#5119-http-error-codes-reference-data)
         10. [Live documentation sources (Data)](#51110-live-documentation-sources-data)
      2. [Building with Claude API (Skill and Routing)](#512-building-with-claude-api-skill-and-routing)
         1. [Build with Claude API (Skill)](#5121-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#5122-build-with-claude-api-reference-guide-skill)
         3. [Claude guide agent (Agent Prompt)](#5123-claude-guide-agent-agent-prompt)
   2. [Agent SDK and Tool Use Patterns](#52-agent-sdk-and-tool-use-patterns)
      1. [Agent SDK Reference and Patterns](#521-agent-sdk-reference-and-patterns)
         1. [Agent SDK reference — Python (Data)](#5211-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#5212-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#5213-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#5214-agent-sdk-patterns-—-typescript-data)
      2. [Tool Use API Reference and Streaming](#522-tool-use-api-reference-and-streaming)
         1. [Tool use concepts (Data)](#5221-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#5222-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#5223-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#5224-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#5225-streaming-reference-—-typescript-data)
         6. [Message Batches API reference — Python (Data)](#5226-message-batches-api-reference-—-python-data)
         7. [Files API reference — Python (Data)](#5227-files-api-reference-—-python-data)
         8. [Files API reference — TypeScript (Data)](#5228-files-api-reference-—-typescript-data)
   3. [Web Retrieval and Browser Automation](#53-web-retrieval-and-browser-automation)
      1. [Browser Automation and UI Interaction](#531-browser-automation-and-ui-interaction)
         1. [Computer (Tool Description)](#5311-computer-tool-description)
         2. [Computer action (Tool Parameter)](#5312-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#5313-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#5314-chrome-browser-mcp-tools-system-prompt)
      2. [Web Content Retrieval and Discovery](#532-web-content-retrieval-and-discovery)
         1. [WebFetch (Tool Description)](#5321-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#5322-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#5323-webfetch-summarizer-agent-prompt)

---

## 1. Bash and Shell Execution

Everything governing how Claude runs shell commands — syntax conventions, tool selection, security sandboxing, async patterns, and safety checks for bash operations.

### 1.1 Core Bash Behavior and Syntax

Foundational rules for bash command execution: path quoting, working directory management, chaining commands, and when to prefer dedicated tools over shell equivalents.

#### 1.1.1 Bash Tool Core Behavior

Bash command execution with guidance on syntax, file handling, working directory management, and tool selection. Claude should quote file paths, maintain absolute paths, chain dependent commands with `&&`, run independent commands in parallel, and prefer dedicated tools (Read, Write, Glob, Grep, Edit) over bash equivalents for better transparency and user experience.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing given bash commands and returning their output.

##### 1.1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs Claude to write clear, concise descriptions of bash commands, keeping simple commands brief and providing context for complex or piped commands.

##### 1.1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Directs Claude to maintain the current working directory by using absolute paths and avoiding cd unless explicitly requested.

##### 1.1.1.4 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that bash working directory persists between commands but shell state does not, with environment initialized from user profile.

##### 1.1.1.5 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs Claude not to use newlines to separate bash commands.

##### 1.1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Directs Claude to always quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.7 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to run independent bash commands as parallel tool calls in a single message for efficiency.

##### 1.1.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs chaining dependent bash commands with `&&` in a single call to ensure sequential execution and failure propagation.

##### 1.1.1.9 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs using semicolons to run bash commands sequentially when order matters but earlier command failures are acceptable.

##### 1.1.1.10 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration for bash commands in milliseconds, with maximum and default timeout values.

##### 1.1.1.11 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs verifying parent directory existence and correctness with `ls` before creating new directories or files.

##### 1.1.1.12 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat, head, tail, sed, awk, or echo commands unless explicitly instructed or after verifying dedicated tools cannot accomplish the task.

##### 1.1.1.13 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and transparency than Bash equivalents.

##### 1.1.1.14 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Directs Claude to output text directly rather than using echo or printf commands.

##### 1.1.1.15 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use the Grep tool for content search instead of grep or rg commands.

##### 1.1.1.16 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool for file editing instead of sed or awk commands.

##### 1.1.1.17 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use the Glob tool for file search instead of find or ls commands.

##### 1.1.1.18 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool for file reading instead of cat, head, or tail commands.

##### 1.1.1.19 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use the Write tool for file writing instead of echo or cat commands.

#### 1.1.2 Bash Tool Usage Guidance

Establishes Bash as a reserved tool for system-level operations, directing preference toward specialized tools for domain-specific tasks.

##### 1.1.2.1 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations; default to dedicated tools when available.

### 1.2 Async Execution and Waiting

Patterns for non-blocking execution — background tasks, sleep durations, polling avoidance, and idle-state management during long-running operations.

#### 1.2.1 Bash Sleep and Background Task Management

Asynchronous execution patterns that avoid blocking the user. Sleep should be kept short (1-5 seconds) and only between commands that cannot run immediately. Long-running tasks use `run_in_background` with automatic completion notification instead of polling loops; external processes are checked with dedicated commands like `gh run view` rather than sleep-based retries.

##### 1.2.1.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs keeping bash sleep durations short (1-5 seconds) to avoid blocking the user.

##### 1.2.1.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Prohibits polling background tasks started with `run_in_background`; Claude will be notified when they complete.

##### 1.2.1.3 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Prohibits retrying failing bash commands in sleep loops; instead diagnose root causes or consider alternative approaches.

##### 1.2.1.4 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs not to sleep between bash commands that can run immediately.

##### 1.2.1.5 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs using check commands like `gh run view` instead of sleeping when polling external processes.

##### 1.2.1.6 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Instructs using `run_in_background` for long-running bash commands instead of sleeping, with notification on completion.

#### 1.2.2 Sleep Tool

Non-blocking pause mechanism that suspends execution for a specified duration while remaining responsive to user interrupts and concurrent work. Enables efficient idle states by freeing shell processes and accepting periodic tick prompts to check for available tasks.

##### 1.2.2.1 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with user interrupt capability. Preferred over bash sleep as it doesn't hold shell processes; can run concurrently with other tools and receives periodic tick prompts for checking available work.

### 1.3 Bash Safety and Security

Sandbox enforcement, injection detection, access control policies, and command documentation practices that keep shell operations secure and auditable.

#### 1.3.1 Bash Sandbox Security and Enforcement

Mandatory sandbox enforcement for bash commands with per-command evaluation and automatic retry on restriction errors. Claude defaults to sandbox mode, identifies restriction failures by error patterns (access denied, operation not permitted, network failures), explains restrictions to users, and uses `$TMPDIR` for temporary files. Sensitive paths cannot be allowlisted, and sandbox cannot be disabled by policy.

##### 1.3.1.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to work with the user to adjust sandbox settings if a command fails due to sandbox restrictions.

##### 1.3.1.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Directs Claude to default to running commands within the sandbox and only bypass when the user explicitly requests it or evidence of sandbox restriction appears.

##### 1.3.1.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

##### 1.3.1.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that identify sandbox-caused command failures.

##### 1.3.1.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

##### 1.3.1.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies operation not permitted errors for file and network operations as evidence of sandbox restrictions.

##### 1.3.1.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions in bash command execution.

##### 1.3.1.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and inform users about the `/sandbox` command for managing restrictions.

##### 1.3.1.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition where a bash command fails with clear evidence of sandbox restrictions, distinguishing sandbox-related failures from other failure causes like missing files or network issues.

##### 1.3.1.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

##### 1.3.1.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that bash commands cannot run outside the sandbox under any circumstances.

##### 1.3.1.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

##### 1.3.1.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Requires treating each bash command individually and defaulting to sandbox mode for future commands even after running one with `dangerouslyDisableSandbox: true`.

##### 1.3.1.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Marks the beginning of response guidance for handling sandbox-caused command failures.

##### 1.3.1.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry a failed bash command with `dangerouslyDisableSandbox: true` without asking the user first.

##### 1.3.1.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode, never using `/tmp` directly.

##### 1.3.1.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will trigger a user permission prompt.

#### 1.3.2 Bash Command Safety and Clarity

Command documentation and injection detection work together to ensure bash operations are both understandable and secure, preventing malicious chaining while clarifying functionality through active-voice descriptions.

##### 1.3.2.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or obscure commands to clarify functionality.

##### 1.3.2.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety enforcement. Extracts the command prefix (e.g., 'git commit', 'npm test') or returns 'command_injection_detected' if malicious chaining is found, with comprehensive examples and edge cases.

---

## 2. Code Development and Quality

Workflows and principles for writing, reviewing, and shipping code — from planning and git operations to quality discipline, security assessment, and deployment readiness.

### 2.1 Planning and Task Management

Structured pre-implementation planning, task decomposition, and progress tracking for complex multi-step work requiring user approval before execution.

#### 2.1.1 Planning Mode and Implementation Design

Structured planning workflow for non-trivial implementation tasks where Claude explores codebases, designs approaches, and seeks user approval before coding. Plan mode restricts execution to read-only actions and plan file editing, supports iterative refinement with clarifying questions, and can be re-entered or continued from existing plans. Verification occurs after implementation completion.

##### 2.1.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore codebases and design implementation approaches for user approval before coding. Use proactively for non-trivial tasks involving new features, multiple approaches, architectural decisions, multi-file changes, or unclear requirements. Requires explicit user consent and prevents wasted effort through upfront alignment.

##### 2.1.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning phase and requests user approval of the implementation plan. Use only for code implementation tasks, not research or exploration. Reads the plan from file and presents it for review without requiring the plan content as a parameter.

##### 2.1.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode constraints and guides Claude through a five-phase planning workflow: initial understanding with parallel exploration, design with subagents, review against user intent, final plan writing, and mode exit. Prohibits all edits except to the plan file and non-readonly tool execution.

##### 2.1.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative pair-planning mode where Claude explores code, updates the plan file incrementally, asks clarifying questions, and converges on a final plan. Restricts edits to the plan file only and prohibits non-readonly tool execution.

##### 2.1.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagent behavior in plan mode to read-only actions and plan file editing, prohibiting all other modifications while allowing comprehensive query responses and clarifying questions.

##### 2.1.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, instructing it to read the existing plan, evaluate against the current request, and decide whether to continue or start fresh.

##### 2.1.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Confirm exit from plan mode and restore ability to edit, run tools, and take actions; optionally reference the plan file location.

##### 2.1.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and instructs Claude to continue working on it if relevant and incomplete.

##### 2.1.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 2.1.1.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases and designs implementation plans by understanding requirements, finding patterns, and detailing step-by-step strategies with identified critical files and architectural trade-offs.

#### 2.1.2 Task Tracking and Progress Management

Structured task list creation and progress tracking for complex multi-step work. TodoWrite and TaskCreate break down work into imperative tasks with present-continuous forms, enabling systematic progress monitoring and completion tracking across extended workflows.

##### 2.1.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for tracking progress on complex multi-step coding work. Requires both imperative content and present-continuous activeForm for each task; use for 3+ step tasks, user-provided lists, or after receiving new instructions.

##### 2.1.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for tracking progress on complex multi-step work. Requires imperative subject and present-continuous activeForm; use proactively for 3+ step tasks, plan mode, or when users provide multiple requirements.

##### 2.1.2.3 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently suggests using the TodoWrite tool for progress tracking when relevant, without mentioning the reminder to the user.

##### 2.1.2.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant, without mentioning the reminder to the user.

##### 2.1.2.5 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

##### 2.1.2.6 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Use the TodoWrite tool to break down work into tasks, track progress, and mark each task complete immediately upon finishing.

### 2.2 Git Operations and Version Control

Safe git workflows covering commits, pull requests, code review, branch management, and CI/CD integration with strict guards against destructive operations.

#### 2.2.1 Git Workflow and Safety

Safe git operations with comprehensive commit and pull request workflows. Claude never commits without explicit user request, avoids destructive operations (reset --hard, push --force), never skips hooks or signing, and prefers new commits over amendments. Includes PR creation with gh CLI, code review analysis, comment fetching, and optional Slack integration. Git worktrees provide isolated branches when explicitly requested.

##### 2.2.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

##### 2.2.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, commit message formatting, and PR creation with gh command. Emphasizes never committing without explicit user request, avoiding destructive operations, and creating new commits rather than amending.

##### 2.2.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Directs Claude to never skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues if hooks fail.

##### 2.2.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to prefer creating new commits over amending existing ones.

##### 2.2.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, only when explicitly requested by the user. Requires an existing git repository or configured hooks, and automatically prompts on session exit whether to keep or remove the worktree.

##### 2.2.1.6 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git branch, main branch, status, and recent commits at conversation start as a static snapshot.

##### 2.2.1.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository conventions, and executing the commit with safety checks against empty commits and secret files.

##### 2.2.1.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates or updates pull requests by analyzing all changes, creating branches, committing with appropriate messages, pushing to origin, and optionally posting to Slack. Includes comprehensive git safety protocols and PR formatting guidelines.

##### 2.2.1.9 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and review comments with code context, formatting them with file paths, line numbers, and diff hunks in readable markdown.

##### 2.2.1.10 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Provides expert code review of GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, correctness, conventions, performance, test coverage, and security with concise, actionable feedback.

#### 2.2.2 GitHub Integration and CI/CD

Enables Claude Code to integrate with GitHub repositories through Actions workflows and App installations, allowing Claude to be triggered via @claude mentions in issues, PRs, and comments with configurable permissions and custom prompts.

##### 2.2.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code to be triggered via @claude mentions in issues, PRs, and comments with configurable permissions and custom prompts.

##### 2.2.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security model, and how to trigger Claude via @claude mentions.

### 2.3 Code Quality Principles and Enforcement

Discipline around minimal, focused changes — avoiding speculative engineering, respecting existing architecture, and running diagnostics and tests before release.

#### 2.3.1 Code Quality and Task Execution Discipline

Principles for focused, minimal code changes that respect existing architecture and avoid speculative engineering. Emphasizes reading before modifying, limiting scope to explicit requests, eliminating unnecessary abstractions and error handling, and prioritizing security at system boundaries.

##### 2.3.1.1 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Instruction to avoid over-engineering by making only directly requested or clearly necessary changes.

##### 2.3.1.2 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Guidance against creating abstractions for one-time operations or hypothetical requirements, favoring minimal complexity.

##### 2.3.1.3 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios and trust internal guarantees, validating only at system boundaries like user input and external APIs.

##### 2.3.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instruction to delete unused code completely rather than adding compatibility shims or re-exports.

##### 2.3.1.5 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directive to avoid adding features, refactoring, or improvements beyond what was explicitly requested.

##### 2.3.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directive to prefer editing existing files over creating new ones to prevent file bloat.

##### 2.3.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing any modifications.

##### 2.3.1.8 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames Claude's primary role as performing software engineering tasks and interprets generic instructions within that context, applying changes directly to code rather than providing abstract answers.

##### 2.3.1.9 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Directive to enable users to complete ambitious tasks by deferring to user judgment on scope and feasibility.

##### 2.3.1.10 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Guidance to consider alternatives when blocked instead of brute-forcing, using AskUserQuestion to align on the right path.

##### 2.3.1.11 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instruction to avoid giving time estimates or predictions, focusing on what needs to be done instead.

##### 2.3.1.12 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels.

##### 2.3.1.13 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to prioritize secure coding practices and avoid introducing OWASP top 10 vulnerabilities like injection, XSS, and SQL injection.

#### 2.3.2 Code Quality Assurance and Deployment

Continuous monitoring of code health through diagnostics detection paired with systematic post-implementation workflows—testing, simplification, and version control—ensures quality standards before release.

##### 2.3.2.1 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the codebase.

##### 2.3.2.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

After implementing changes, simplify code, run unit tests, perform end-to-end testing, commit and push with a PR, and report the PR URL or explain why none was created.

### 2.4 Security Assessment and Code Intelligence

Vulnerability detection, authorized security testing, and semantic code analysis through LSP for precise navigation and reference tracking.

#### 2.4.1 Security Assessment and Threat Analysis

Automated and manual security evaluation of code for exploitable vulnerabilities while maintaining strict confidence thresholds to minimize false positives. Covers authorized security testing and defensive analysis while excluding assistance with malicious activities.

##### 2.4.1.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities across input validation, authentication, cryptography, injection, and data exposure categories. Minimizes false positives through strict confidence thresholds and extensive exclusion rules, outputting findings in markdown with severity, description, exploit scenario, and recommendations.

##### 2.4.1.2 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, CTF challenges, and defensive security while refusing malicious activities like DoS attacks, supply chain compromise, and detection evasion.

##### 2.4.1.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Permits analysis of malware code including behavior reports and questions, but prohibits improving or augmenting the malicious code itself.

#### 2.4.2 Code Editing and Intelligence

Direct manipulation of notebook cells and semantic code analysis through Language Server Protocol enable interactive development workflows with precise navigation, reference tracking, and contextual information retrieval.

##### 2.4.2.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by completely replacing cell contents. Supports insert and delete modes with 0-indexed cell numbering; requires absolute file paths.

##### 2.4.2.2 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides code intelligence via Language Server Protocol including symbol navigation, references, hover information, and call hierarchy analysis. Requires LSP server configuration for the file type and position parameters (line and character, 1-based).

---

## 3. File Operations, Tools, and Agent Orchestration

Reading, writing, and searching files; discovering and invoking tools; managing permissions; and coordinating multi-agent teams for distributed work.

### 3.1 File Reading, Writing, and Search

Targeted file discovery with glob and regex patterns, direct content access, precise editing with string replacement, and state notifications about truncation and external changes.

#### 3.1.1 File Reading and Search Tools

Fast, targeted file discovery and content access using glob patterns, regex-based search, and direct file reading. Supports images, PDFs, and Jupyter notebooks with optimized permissions and sorted results for efficient codebase navigation.

##### 3.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page range limits for large files), and Jupyter notebooks. Requires absolute paths and returns truncated lines; supports optional line offset and limit parameters.

##### 3.1.1.2 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like "**/*.js" that returns matching file paths sorted by modification time. Use for name-based file searches; prefer the Agent tool for open-ended multi-round searches.

##### 3.1.1.3 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool for content matching with full regex syntax, file filtering by glob or type, and multiple output modes. Supports multiline patterns and is optimized for correct permissions; never invoke grep directly via bash.

##### 3.1.1.4 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Use the Read tool instead of cat, head, tail, or sed for file access.

##### 3.1.1.5 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool instead of find or ls to search for files.

##### 3.1.1.6 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool instead of grep or rg to search file contents.

##### 3.1.1.7 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Use Glob or Grep tools directly for simple, targeted codebase searches like finding specific files, classes, or functions.

#### 3.1.2 File Writing and Editing Tools

Precise file creation and modification with exact string replacement and indentation preservation. Edit tool handles targeted changes while Write tool creates new files, with preference for modifying existing code over generating documentation.

##### 3.1.2.1 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem with complete overwrite capability. Prefer Edit tool for modifications; avoid creating documentation unless explicitly requested.

##### 3.1.2.2 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with strict requirements for preserving indentation, preferring existing file edits over new files, and using `replace_all` for non-unique matches or variable renaming.

##### 3.1.2.3 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Prefer the Edit tool over sed or awk for file modifications.

##### 3.1.2.4 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use the Write tool for file creation instead of cat heredoc or echo redirection.

#### 3.1.3 File State and Context Notifications

System notifications that track file state changes, access patterns, and content boundaries. These reminders inform Claude about truncated files, empty content, external modifications, IDE interactions, and context limitations—enabling awareness of what information is available and how to retrieve it.

##### 3.1.3.1 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Silently note that a large file was truncated to a maximum line count; use the Read tool to access additional content if needed.

##### 3.1.3.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warn that a file exists but contains no content.

##### 3.1.3.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notify that a file was externally modified by user or linter; account for changes without reverting unless requested, and do not inform the user.

##### 3.1.3.4 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notify that the user opened a file in the IDE, which may or may not relate to the current task.

##### 3.1.3.5 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warn that the requested read offset exceeds the file's total line count.

##### 3.1.3.6 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notify that a previously read file is too large to include in context but can be accessed via the Read tool if needed.

##### 3.1.3.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in the IDE, providing the line range, filename, and code content.

### 3.2 Tool Discovery, Permissions, and Hooks

Loading deferred tools, invoking skills, governing tool access with permission modes, and automating validation through lifecycle hooks at Claude Code events.

#### 3.2.1 Tool and Capability Discovery

Mechanisms for discovering and loading deferred tools and specialized skills before use. ToolSearch enables keyword-based and direct tool discovery with immediate loading; Skill tool executes slash commands for domain-specific capabilities.

##### 3.2.1.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 3.2.1.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it cannot be displayed in a readable format.

##### 3.2.1.3 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite for loading deferred tools before use. Both query modes (keyword search and direct selection) load returned tools immediately, making them available for direct invocation.

##### 3.2.1.4 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage guide for ToolSearch supporting keyword search, direct selection, and required keyword modes. Keyword searches return up to 5 ranked tools and load them immediately; do not follow with redundant select calls.

##### 3.2.1.5 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation. Must invoke the skill tool before generating other responses when a skill matches the user's request; never mention skills without calling this tool.

##### 3.2.1.6 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute user-invocable skills (slash commands like /commit) that are listed in the tool's user-invocable skills section; do not guess or use built-in CLI commands.

#### 3.2.2 Tool Permission and Execution Control

Governance layer for tool access and execution safety. Defines permission modes, escalation paths for denied operations, parallel execution optimization for independent tasks, and risk mitigation through confirmation requirements for destructive or irreversible changes.

##### 3.2.2.1 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains tool permission modes and instructs Claude not to retry denied tool calls, instead adjusting approach based on the denial reason.

##### 3.2.2.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides Claude to attempt reasonable workarounds when tool execution is denied, but avoid malicious bypasses and escalate to the user if essential capabilities are blocked.

##### 3.2.2.3 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while maintaining sequential execution for dependent operations to improve efficiency.

##### 3.2.2.4 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a cautious approach to risky actions by requiring user confirmation for destructive operations, hard-to-reverse changes, and actions affecting shared systems. Emphasizes investigating unexpected state before taking destructive shortcuts.

#### 3.2.3 Hook Lifecycle and Integration

Lifecycle hooks that execute shell commands or evaluations at specific Claude Code events, with notifications for success, errors, and execution halts. Includes configuration guidance and condition-evaluation agents for automating validation, formatting, and task-completion verification.

##### 3.2.3.1 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Displays a success notification when a hook completes, showing the hook name and its output content.

##### 3.2.3.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Report an error from a blocking hook command that prevented execution.

##### 3.2.3.3 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notify that a hook stopped execution and provide the hook's stopping message.

##### 3.2.3.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for continuation messages when a hook stops execution.

##### 3.2.3.5 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provide additional context information from a hook.

##### 3.2.3.6 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide for configuring lifecycle hooks that run shell commands, prompt evaluations, or agents at specific Claude Code events like PreToolUse, PostToolUse, and SessionStart. Supports auto-formatting, validation, and conditional blocking.

##### 3.2.3.7 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and inspecting the codebase to confirm agent task completion, returning structured output indicating success or failure with reason.

##### 3.2.3.8 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code and returns JSON indicating success or failure with optional reason.

### 3.3 Multi-Agent Coordination and Delegation

Orchestrating distributed agent teams, delegating work to sub-agents with worktree isolation, and designing custom agent personas with behavioral boundaries.

#### 3.3.1 Multi-Agent Team and Swarm Coordination

Orchestrates distributed teams of autonomous agents working on shared task lists. Teammates discover and claim work by task ID order, coordinate via direct messages and broadcasts, and report status to a team lead, with graceful shutdown protocols for cleanup.

##### 3.3.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages team creation and teammate coordination in swarms. Teams have 1:1 correspondence with task lists; teammates work on assigned tasks, go idle between turns (normal behavior), and communicate via SendMessage. Teammates discover team members via config.json and prefer task ID order.

##### 3.3.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion. Fails if active team members remain; must gracefully terminate all teammates first before cleanup.

##### 3.3.1.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available work from shared task lists. Teammates check for pending unblocked tasks, prefer lowest ID order, claim ownership via TaskUpdate, and notify team lead if blocked.

##### 3.3.1.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables team communication through direct messages, broadcasts, and protocol responses including shutdown and plan approval workflows. Direct messages target specific teammates; broadcasts reach all team members but are expensive and should be used sparingly for critical issues only.

##### 3.3.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with a name and identity, providing team configuration and task list paths, and instructing it to coordinate with teammates by name and report to the team lead.

##### 3.3.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before returning a response in non-interactive mode, using shutdown requests and cleanup operations.

##### 3.3.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agent teammates to use the SendMessage tool for communication rather than plain text, enabling coordination in swarm environments with message and broadcast types.

##### 3.3.1.8 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5-30 independent units, determining end-to-end test recipes, writing detailed plans, spawning background worker agents with worktree isolation, and tracking progress with status tables.

#### 3.3.2 Sub-Agent Task Delegation

Launches specialized sub-agents for parallel or sequential work with worktree isolation and autonomous execution. Delegates codebase exploration, code search, and multi-step analysis to protect context windows and parallelize independent queries.

##### 3.3.2.1 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents for complex tasks with optional background execution, resumption capability, and worktree isolation. Agents work autonomously and return results; use foreground for dependent work and background for parallel independent tasks.

##### 3.3.2.2 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Use the Task tool with a specialized exploration subagent for broad codebase research when simple directed searches are insufficient or will exceed query limits.

##### 3.3.2.3 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use the Task tool with specialized subagents to parallelize independent queries and protect context windows, but avoid excessive delegation or duplicating work already performed by subagents.

##### 3.3.2.4 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks using glob, grep, and read tools. Avoids creating files unless necessary and returns absolute file paths with code snippets.

##### 3.3.2.5 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Specifies task tool usage guidelines: use absolute file paths only, share relevant file names and code snippets in responses, avoid emojis, and omit colons before tool calls.

##### 3.3.2.6 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist for navigating codebases using glob patterns, regex grep, and file reading. Strictly prohibited from creating, modifying, or deleting files; focuses on rapid codebase exploration and pattern analysis.

#### 3.3.3 Agent Design and Creation

Provides frameworks for designing and deploying custom AI agents by extracting user intent, architecting expert personas with behavioral boundaries and decision-making logic, and generating structured agent definitions with usage conditions and system prompts.

##### 3.3.3.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts with behavioral boundaries and decision-making frameworks, optimizing for performance, and generating concise identifiers. Outputs a JSON object with agent identifier, usage conditions with examples, and complete system prompt.

##### 3.3.3.2 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Invoke the specified agent with appropriate context when the user expresses intent to use it.

### 3.4 Skills Framework and Workflow Automation

Reusable skill templates for automating common development workflows—capturing sessions as skills, creating verification systems, debugging issues, refactoring code, and managing Claude Code configuration. These skills enable systematic problem-solving through structured processes and tool integration.

#### 3.4.1 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-step interview process to capture the current session as a reusable skill, including analysis, user confirmation rounds, SKILL.md generation, and step-by-step workflow documentation with success criteria.

#### 3.4.2 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase guide for creating verifier skills for automated code verification covering auto-detection of project types, setup of browser/CLI/API testing tools, interactive Q&A for configuration, and skill generation with appropriate allowed-tools.

#### 3.4.3 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Verification specialist skill for testing code changes by discovering verifier skills, analyzing git changes, creating deterministic verification plans, triggering verifiers, and reporting results with pass/fail status.

#### 3.4.4 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, understanding settings, and providing concrete fixes or next steps.

#### 3.4.5 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill launching three parallel review agents for code reuse, quality, and efficiency improvements, then aggregating findings and fixing issues directly.

#### 3.4.6 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Guide for modifying Claude Code settings.json files covering when hooks are required, reading before writing, merging arrays, and common configuration patterns for permissions, environment variables, and MCP servers.

---

## 4. Session, Memory, and User Interaction

Managing conversation continuity, preserving knowledge across sessions, tracking usage, and facilitating clear communication with users during task execution.

### 4.1 Context and Session Continuity

Token and budget tracking, context compaction with structured summaries, cross-machine session resumption, and metadata for session discoverability and search.

#### 4.1.1 Session and Context Management

Mechanisms for tracking session continuity, resource consumption, and context boundaries. Monitors token and budget usage, handles cross-machine session resumption, manages output limits, and provides structured summaries during context compaction to preserve task state across conversation boundaries.

##### 4.1.1.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and provides the updated working directory.

##### 4.1.1.2 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 4.1.1.3 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including used, total, and remaining budget amounts.

##### 4.1.1.4 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Warns Claude that its response was truncated due to exceeding the output token limit and instructs it to continue work in smaller pieces.

##### 4.1.1.5 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for generating structured continuation summaries during context compaction covering task overview, current state, discoveries, next steps, and context preservation.

##### 4.1.1.6 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories, enabling free usage without permission prompts.

#### 4.1.2 Conversation Summarization and Compaction

Structured summarization protocols that extract and organize conversation content into technical sections—requests, concepts, code, errors, and next steps—for context preservation during compaction. Generates concise action summaries for progress tracking without requiring tool execution.

##### 4.1.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections: primary request, technical concepts, files and code sections with snippets, errors and fixes, problem-solving, all user messages, pending tasks, current work, and next steps. Includes analysis tags for thought organization and emphasizes technical accuracy and completeness.

##### 4.1.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages (excluding earlier retained context) across nine sections: primary request, technical concepts, files and code, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps.

##### 4.1.2.3 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt for generating concise 3-5 word action summaries in present tense for agent progress tracking without using tools.

##### 4.1.2.4 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Generate brief, past-tense summaries of coding assistant work in under 8 words, focusing on user-visible outcomes without implementation details or self-referential phrases.

#### 4.1.3 Session Metadata and Search

Manages session discoverability and context through automated metadata generation (titles and branch names), semantic search across tags and transcripts, and customizable status line displays that reflect shell configuration and session state.

##### 4.1.3.1 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, lowercase with dashes, prefixed with 'claude/') based on session descriptions.

##### 4.1.3.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user queries by prioritizing exact tag matches, then partial tags, titles, branches, and transcript content. Returns inclusive results ordered by relevance, favoring recall over precision.

##### 4.1.3.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by reading shell configuration files, extracting PS1 values, converting escape sequences to shell commands, and updating settings.json with custom statusLine commands. Accepts JSON input with session, model, workspace, context, and optional vim/agent data.

### 4.2 Memory and Knowledge Persistence

Session-scoped memory files that capture task state, discoveries, and domain knowledge for retrieval across conversations with consistent structural templates.

#### 4.2.1 Memory Management and Knowledge Persistence

Session-scoped memory files that capture task state, discoveries, and domain-specific knowledge for retrieval across conversations. Includes memory selection logic, update protocols, and templates that enable Claude to build and reference institutional knowledge while maintaining structural consistency.

##### 4.2.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, including its type description.

##### 4.2.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Shows the contents of a nested memory file structure.

##### 4.2.1.3 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects up to five relevant memory files from available options based on user query, using conservative judgment to include only memories clearly useful for processing the query.

##### 4.2.1.4 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by preserving exact structure (headers and italic section descriptions), editing only content below descriptions, maintaining detail density with specific file paths and commands, and keeping sections under token limits while prioritizing current state for continuity.

##### 4.2.1.5 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files capturing current state, task specification, files, workflow, errors, learnings, and worklog.

##### 4.2.1.6 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

#### 4.2.2 Session Capability Tracking

Maintains awareness of active skills and their governing constraints throughout a session, ensuring consistent adherence to established guidelines across all operations.

##### 4.2.2.1 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the current session and instructs Claude to continue following their guidelines.

### 4.3 User Communication and Output Style

Clarification prompts, visual option previews, intent detection from conversation history, and output formatting standards for concise, well-anchored responses.

#### 4.3.1 User Interaction and Clarification

Facilitates user engagement during execution through clarification prompts, visual option previews with markdown content, and lightweight side-question handling that operates within conversation context without tool invocation.

##### 4.3.1.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use the AskUserQuestion tool to gather user preferences, clarify ambiguous instructions, and offer implementation choices during execution. In plan mode, use it to clarify requirements before finalizing the plan, not to ask for plan approval.

##### 4.3.1.2 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for single-select options with markdown content like ASCII mockups, code snippets, and diagrams to help users visually compare alternatives.

##### 4.3.1.3 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer side questions directly without tools, using only conversation context, in a single response with no follow-up capability.

#### 4.3.2 Output Style and Tone Guidelines

Directives for controlling response quality, brevity, and formatting. Establishes standards for eliminating filler and repetition, maintaining conciseness across varying detail levels, anchoring code references with precise locations, and activating style enforcement across interactions.

##### 4.3.2.1 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Instructs Claude to produce concise, polished output without filler, repetition, or inner monologue while preserving important information.

##### 4.3.2.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Directs Claude to keep responses short and concise.

##### 4.3.2.3 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number references when mentioning code to enable easy navigation to source locations.

##### 4.3.2.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that a specific output style is active and reminds it to follow that style's guidelines.

#### 4.3.3 Conversation Analysis and Intent Detection

Extraction of user intent from dialogue history identifies both implicit signals—frustration levels and pull request submission desires—and predicts natural next steps to guide workflow continuation.

##### 4.3.3.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on recent conversation context, avoiding evaluative language, questions, or Claude-voice suggestions. Returns only specific, actionable suggestions or silence if the next step is unclear.

##### 4.3.3.2 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration and explicit pull request creation requests from conversation history, outputting boolean flags for frustration detection and PR submission intent.

### 4.4 Analytics, Learning, and Documentation

Extracting workflow insights from session data, collaborative learning modes that preserve human design decisions, and living documentation of codebase architecture.

#### 4.4.1 Insights and Usage Analytics

Framework for extracting, analyzing, and synthesizing patterns from Claude Code session data. Produces structured insights on working practices, friction points, optimization opportunities, and actionable recommendations for workflow improvement and feature adoption.

##### 4.4.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a structured 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for future models based on aggregated Claude Code usage data.

##### 4.4.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns, producing three friction categories with specific examples of where interactions went wrong.

##### 4.4.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies three ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, with actionable prompts to try.

##### 4.4.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including goal categories, user satisfaction signals, and friction types, with strict guidelines for counting only explicit user requests and signals.

##### 4.4.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns based on aggregated session data.

#### 4.4.2 Learning Mode

Collaborative framework that distributes task ownership between Claude and the user, reserving design and business logic decisions for human input while Claude handles implementation. Integrates educational commentary to reinforce learning outcomes.

##### 4.4.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt that balances task completion with hands-on learning by requesting human contributions for design decisions and business logic while handling routine implementation. Includes TodoList integration and structured request formatting.

##### 4.4.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing to encourage learning, focusing on implementation choices specific to the codebase.

#### 4.4.3 Documentation and Knowledge Management

Maintains living documentation of codebases and project learnings through CLAUDE.md files and Magic Docs, capturing architecture, conventions, and build processes while avoiding redundancy with source code and emphasizing architectural insights over procedural details.

##### 4.4.3.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation files by documenting common build/test commands, high-level architecture, and codebase conventions while avoiding obvious instructions and generic practices.

##### 4.4.3.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs Claude to update Magic Doc files with new learnings from conversations, preserving headers and maintaining current state rather than historical records. Emphasizes terseness, architecture focus, and avoiding duplication of information obvious from source code.

---

## 5. Claude API, SDKs, and External Services

Reference documentation and integration guides for building with Claude — covering SDKs across multiple languages, agentic patterns, web retrieval, and browser automation.

### 5.1 SDK Reference by Language

Language-specific installation guides, core API patterns, streaming, error handling, and model catalog for Python, TypeScript, Go, Java, Ruby, PHP, and C#.

#### 5.1.1 Claude API SDK Reference Data

Language-specific SDK documentation and reference data for integrating Claude across Python, TypeScript, Go, Java, Ruby, PHP, and C#. Covers installation, core API patterns, streaming, tool use, error handling, and model catalog with pricing information.

##### 5.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization strategies.

##### 5.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Full TypeScript SDK reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization.

##### 5.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API including client setup, basic requests, streaming, and beta tool runner with automatic schema generation from struct tags.

##### 5.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, and beta tool use with annotated classes for automatic schema generation and tool execution.

##### 5.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for Claude API including client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

##### 5.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API with client initialization for standard, Bedrock, Vertex AI, and Foundry deployments, plus basic requests and streaming.

##### 5.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for Claude API covering client initialization, basic message requests, streaming, and manual tool use with JSON schema definitions.

##### 5.1.1.8 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and retired Claude models with exact model IDs, aliases, context windows, and pricing. Includes resolution table for user model requests.

##### 5.1.1.9 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes with common causes, handling strategies, and typed exception classes for Python and TypeScript SDKs.

##### 5.1.1.10 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, with extraction prompts for specific topics.

#### 5.1.2 Building with Claude API (Skill and Routing)

Entry points and navigation guides for developing with Claude, including architecture routing decisions, language selection, reference documentation templates, and an interactive agent for discovering relevant API capabilities and examples.

##### 5.1.2.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, and compaction for long conversations.

##### 5.1.2.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific API reference documentation with quick task reference linking to appropriate docs for classification, chat, tool use, batches, files, and agents.

##### 5.1.2.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with code examples and documentation references.

### 5.2 Agent SDK and Tool Use Patterns

Building autonomous agents with the Agent SDK, implementing tool runners and agentic loops, structured outputs, batch processing, and MCP integration.

#### 5.2.1 Agent SDK Reference and Patterns

Comprehensive guides for building autonomous agents with the Agent SDK in Python and TypeScript, including tool integration, permission systems, MCP support, hooks, and subagent orchestration with practical code examples.

##### 5.2.1.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, quick start, built-in tools, permission system, MCP support, hooks, subagents, and best practices for building AI agents.

##### 5.2.1.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, quick start, built-in tools, permission modes, MCP integration, hooks, and best practices for agentic development.

##### 5.2.1.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Provides Python code patterns for Agent SDK including basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with practical examples.

##### 5.2.1.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Demonstrates TypeScript Agent SDK patterns for basic agents, hooks, subagents, MCP integration, and session resumption with concise code examples.

#### 5.2.2 Tool Use API Reference and Streaming

Implementation guides for tool integration, streaming responses, and asynchronous processing across Python and TypeScript. Covers tool runners, agentic loops, code execution, file handling, structured outputs, and batch processing for cost optimization.

##### 5.2.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Comprehensive guide to tool use with the Claude API covering user-defined tools, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool integration.

##### 5.2.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python-specific tool use implementation guide including tool runner with @beta_tool decorator, manual agentic loops, code execution with file uploads, container reuse, memory tool, and structured outputs with Pydantic.

##### 5.2.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript-specific tool use implementation guide featuring betaZodTool for type-safe tool definitions, manual and streaming agentic loops, code execution, container reuse, memory tool, and structured outputs with Zod schemas.

##### 5.2.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling thinking blocks and tool use, getting final messages, and error handling with event types.

##### 5.2.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, tool runner streaming, event types, and best practices.

##### 5.2.2.6 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for processing Messages API requests asynchronously at 50% cost, including batch creation, polling, result retrieval, and prompt caching.

##### 5.2.2.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading and managing files, using them in messages with documents and images, and retrieving results with citations.

##### 5.2.2.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages, file management operations, and downloading generated files.

### 5.3 Web Retrieval and Browser Automation

Fetching current web content beyond knowledge cutoff, screenshot-guided Chrome automation, console debugging, and multi-tab UI interaction.

#### 5.3.1 Browser Automation and UI Interaction

Chrome-based browser automation through visual perception and direct UI manipulation via mouse and keyboard. Enables screenshot-guided interaction, console debugging, and multi-tab context management for programmatic web navigation.

##### 5.3.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes a Chrome browser automation tool using mouse and keyboard interaction with screenshot capability. Emphasizes precise cursor positioning on element centers and consulting screenshots before clicking.

##### 5.3.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for Chrome browser automation including click variants, typing, scrolling, keyboard input, dragging, zooming, and hover interactions.

##### 5.3.1.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for effective browser automation using Claude in Chrome tools including GIF recording, console debugging, alert handling, tab context management, and avoiding loops or failures.

##### 5.3.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use to enable browser automation capabilities.

#### 5.3.2 Web Content Retrieval and Discovery

Fetches and searches current web information beyond knowledge cutoff, converting HTML to structured markdown and filtering results by domain trust. Requires explicit source attribution in responses.

##### 5.3.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a small model. Includes 15-minute cache, auto-upgrades HTTP to HTTPS, and handles redirects; prefer MCP web fetch tools if available.

##### 5.3.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff with domain filtering support. Mandatory requirement to include a Sources section with markdown hyperlinks at end of response.

##### 5.3.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and citation practices for untrusted domains while allowing flexible sourcing from trusted domains.
