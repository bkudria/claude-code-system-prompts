# Claude Code System Prompts Index

A technical operating system for AI-assisted software development, defining how an AI agent reads and writes code, executes commands, coordinates with other agents, maintains context over time, and integrates with the tools and APIs that professional engineering workflows depend on.

## Table of Contents

1. [Bash and Command Execution](#1-bash-and-command-execution)
   1. [Bash Tool Usage Guidelines](#11-bash-tool-usage-guidelines)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (command description) [Tool Description]](#112-bash-command-description-tool-description)
      3. [Bash (maintain cwd) [Tool Description]](#113-bash-maintain-cwd-tool-description)
      4. [Bash (no newlines) [Tool Description]](#114-bash-no-newlines-tool-description)
      5. [Bash (parallel commands) [Tool Description]](#115-bash-parallel-commands-tool-description)
      6. [Bash (quote file paths) [Tool Description]](#116-bash-quote-file-paths-tool-description)
      7. [Bash (semicolon usage) [Tool Description]](#117-bash-semicolon-usage-tool-description)
      8. [Bash (sequential commands) [Tool Description]](#118-bash-sequential-commands-tool-description)
      9. [Bash (sleep — keep short) [Tool Description]](#119-bash-sleep-—-keep-short-tool-description)
      10. [Bash (sleep — no polling background tasks) [Tool Description]](#1110-bash-sleep-—-no-polling-background-tasks-tool-description)
      11. [Bash (sleep — no retry loops) [Tool Description]](#1111-bash-sleep-—-no-retry-loops-tool-description)
      12. [Bash (sleep — run immediately) [Tool Description]](#1112-bash-sleep-—-run-immediately-tool-description)
      13. [Bash (sleep — use check commands) [Tool Description]](#1113-bash-sleep-—-use-check-commands-tool-description)
      14. [Bash (sleep — use run_in_background) [Tool Description]](#1114-bash-sleep-—-use-run_in_background-tool-description)
      15. [Bash (timeout) [Tool Description]](#1115-bash-timeout-tool-description)
      16. [Bash (verify parent directory) [Tool Description]](#1116-bash-verify-parent-directory-tool-description)
      17. [Bash (working directory) [Tool Description]](#1117-bash-working-directory-tool-description)
   2. [Bash Sandbox Security & Restrictions](#12-bash-sandbox-security-restrictions)
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
   3. [Bash Alternatives — Prefer Dedicated Tools](#13-bash-alternatives-—-prefer-dedicated-tools)
      1. [Bash (alternative — communication) [Tool Description]](#131-bash-alternative-—-communication-tool-description)
      2. [Bash (alternative — content search) [Tool Description]](#132-bash-alternative-—-content-search-tool-description)
      3. [Bash (alternative — edit files) [Tool Description]](#133-bash-alternative-—-edit-files-tool-description)
      4. [Bash (alternative — file search) [Tool Description]](#134-bash-alternative-—-file-search-tool-description)
      5. [Bash (alternative — read files) [Tool Description]](#135-bash-alternative-—-read-files-tool-description)
      6. [Bash (alternative — write files) [Tool Description]](#136-bash-alternative-—-write-files-tool-description)
      7. [Bash (built-in tools note) [Tool Description]](#137-bash-built-in-tools-note-tool-description)
      8. [Bash (prefer dedicated tools) [Tool Description]](#138-bash-prefer-dedicated-tools-tool-description)
   4. [Bash Command Analysis Agents](#14-bash-command-analysis-agents)
      1. [Bash command description writer (Agent Prompt)](#141-bash-command-description-writer-agent-prompt)
      2. [Bash command file path extraction (Agent Prompt)](#142-bash-command-file-path-extraction-agent-prompt)
2. [File, Code, and Version Control Tools](#2-file-code-and-version-control-tools)
   1. [File System and Search Tools](#21-file-system-and-search-tools)
      1. [File System Tool Descriptions](#211-file-system-tool-descriptions)
         1. [Edit (Tool Description)](#2111-edit-tool-description)
         2. [Glob (Tool Description)](#2112-glob-tool-description)
         3. [Grep (Tool Description)](#2113-grep-tool-description)
         4. [ReadFile (Tool Description)](#2114-readfile-tool-description)
         5. [Write (Tool Description)](#2115-write-tool-description)
         6. [NotebookEdit (Tool Description)](#2116-notebookedit-tool-description)
      2. [Tool Usage Policies](#212-tool-usage-policies)
         1. [Tool usage (delegate exploration) [System Prompt]](#2121-tool-usage-delegate-exploration-system-prompt)
         2. [Tool usage (direct search) [System Prompt]](#2122-tool-usage-direct-search-system-prompt)
         3. [Tool usage (edit files) [System Prompt]](#2123-tool-usage-edit-files-system-prompt)
         4. [Tool usage (read files) [System Prompt]](#2124-tool-usage-read-files-system-prompt)
         5. [Tool usage (reserve Bash) [System Prompt]](#2125-tool-usage-reserve-bash-system-prompt)
         6. [Tool usage (search content) [System Prompt]](#2126-tool-usage-search-content-system-prompt)
         7. [Tool usage (search files) [System Prompt]](#2127-tool-usage-search-files-system-prompt)
         8. [Tool usage (skill invocation) [System Prompt]](#2128-tool-usage-skill-invocation-system-prompt)
         9. [Tool usage (subagent guidance) [System Prompt]](#2129-tool-usage-subagent-guidance-system-prompt)
         10. [Tool usage (task management) [System Prompt]](#21210-tool-usage-task-management-system-prompt)
         11. [Tool usage (create files) [System Prompt]](#21211-tool-usage-create-files-system-prompt)
         12. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#21212-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   2. [LSP & Code Intelligence](#22-lsp-code-intelligence)
      1. [LSP (Tool Description)](#221-lsp-tool-description)
   3. [Git Operations & Version Control](#23-git-operations-version-control)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#231-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#232-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#233-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#234-bash-git-—-prefer-new-commits-tool-description)
      5. [EnterWorktree (Tool Description)](#235-enterworktree-tool-description)
      6. [Git status (System Prompt)](#236-git-status-system-prompt)
      7. [Quick git commit (Agent Prompt)](#237-quick-git-commit-agent-prompt)
      8. [Quick PR creation (Agent Prompt)](#238-quick-pr-creation-agent-prompt)
      9. [/pr-comments slash command (Agent Prompt)](#239-pr-comments-slash-command-agent-prompt)
      10. [/review-pr slash command (Agent Prompt)](#2310-review-pr-slash-command-agent-prompt)
3. [Agent Coordination and Planning](#3-agent-coordination-and-planning)
   1. [Planning Mode Workflow](#31-planning-mode-workflow)
      1. [EnterPlanMode (Tool Description)](#311-enterplanmode-tool-description)
      2. [ExitPlanMode (Tool Description)](#312-exitplanmode-tool-description)
      3. [Plan mode is active (5-phase) [System Reminder]](#313-plan-mode-is-active-5-phase-system-reminder)
      4. [Plan mode is active (iterative) [System Reminder]](#314-plan-mode-is-active-iterative-system-reminder)
      5. [Plan mode is active (subagent) [System Reminder]](#315-plan-mode-is-active-subagent-system-reminder)
      6. [Plan mode re-entry (System Reminder)](#316-plan-mode-re-entry-system-reminder)
      7. [Exited plan mode (System Reminder)](#317-exited-plan-mode-system-reminder)
      8. [Plan file reference (System Reminder)](#318-plan-file-reference-system-reminder)
      9. [Verify plan reminder (System Reminder)](#319-verify-plan-reminder-system-reminder)
      10. [Plan mode (enhanced) [Agent Prompt]](#3110-plan-mode-enhanced-agent-prompt)
   2. [Multi-Agent Swarms and Subagents](#32-multi-agent-swarms-and-subagents)
      1. [Multi-Agent Swarm Coordination](#321-multi-agent-swarm-coordination)
         1. [Task (Tool Description)](#3211-task-tool-description)
         2. [SendMessageTool (Tool Description)](#3212-sendmessagetool-tool-description)
         3. [TeammateTool (Tool Description)](#3213-teammatetool-tool-description)
         4. [TaskList (teammate workflow) [Tool Description]](#3214-tasklist-teammate-workflow-tool-description)
         5. [TeamDelete (Tool Description)](#3215-teamdelete-tool-description)
         6. [Teammate Communication (System Prompt)](#3216-teammate-communication-system-prompt)
         7. [Team Coordination (System Reminder)](#3217-team-coordination-system-reminder)
         8. [Team Shutdown (System Reminder)](#3218-team-shutdown-system-reminder)
      2. [Sub-Agent Execution & Reporting](#322-sub-agent-execution-reporting)
         1. [Task tool (Agent Prompt)](#3221-task-tool-agent-prompt)
         2. [Task tool (extra notes) [Agent Prompt]](#3222-task-tool-extra-notes-agent-prompt)
         3. [Explore (Agent Prompt)](#3223-explore-agent-prompt)
         4. [Tool Use Summary Generation (System Prompt)](#3224-tool-use-summary-generation-system-prompt)
         5. [Agent Summary Generation (System Prompt)](#3225-agent-summary-generation-system-prompt)
   3. [Agent Design and Permission Boundaries](#33-agent-design-and-permission-boundaries)
      1. [Agent Design & Creation](#331-agent-design-creation)
         1. [Agent creation architect (Agent Prompt)](#3311-agent-creation-architect-agent-prompt)
      2. [Tool Permission & Execution Control](#332-tool-permission-execution-control)
         1. [Tool permission mode (System Prompt)](#3321-tool-permission-mode-system-prompt)
         2. [Tool execution denied (System Prompt)](#3322-tool-execution-denied-system-prompt)
4. [Memory, Session, and Context Management](#4-memory-session-and-context-management)
   1. [Persistent Memory and Knowledge](#41-persistent-memory-and-knowledge)
      1. [Context & Memory Management](#411-context-memory-management)
         1. [Memory file contents (System Reminder)](#4111-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#4112-nested-memory-contents-system-reminder)
         3. [Context compaction summary (System Prompt)](#4113-context-compaction-summary-system-prompt)
         4. [Memory selection (Agent Prompt)](#4114-memory-selection-agent-prompt)
         5. [Session memory update instructions (Agent Prompt)](#4115-session-memory-update-instructions-agent-prompt)
         6. [Agent memory instructions (System Prompt)](#4116-agent-memory-instructions-system-prompt)
         7. [Session memory template (Data)](#4117-session-memory-template-data)
      2. [Conversation & Session Summarization](#412-conversation-session-summarization)
         1. [Conversation summarization (Agent Prompt)](#4121-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#4122-recent-message-summarization-agent-prompt)
         3. [Session title and branch generation (Agent Prompt)](#4123-session-title-and-branch-generation-agent-prompt)
         4. [Session Search Assistant (Agent Prompt)](#4124-session-search-assistant-agent-prompt)
   2. [Runtime Environment and Resource Awareness](#42-runtime-environment-and-resource-awareness)
      1. [Resource & Budget Monitoring](#421-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#4211-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#4212-usd-budget-system-reminder)
         3. [Output token limit exceeded (System Reminder)](#4213-output-token-limit-exceeded-system-reminder)
      2. [Session & Environment State](#422-session-environment-state)
         1. [Session continuation (System Reminder)](#4221-session-continuation-system-reminder)
         2. [MCP resource no content (System Reminder)](#4222-mcp-resource-no-content-system-reminder)
         3. [MCP resource no displayable content (System Reminder)](#4223-mcp-resource-no-displayable-content-system-reminder)
         4. [Agent mention (System Reminder)](#4224-agent-mention-system-reminder)
         5. [Invoked skills (System Reminder)](#4225-invoked-skills-system-reminder)
   3. [Task & Todo Management](#43-task-todo-management)
      1. [TodoWrite (Tool Description)](#431-todowrite-tool-description)
      2. [TaskCreate (Tool Description)](#432-taskcreate-tool-description)
      3. [Task status (System Reminder)](#433-task-status-system-reminder)
      4. [Task tools reminder (System Reminder)](#434-task-tools-reminder-system-reminder)
      5. [Todo list changed (System Reminder)](#435-todo-list-changed-system-reminder)
      6. [Todo list empty (System Reminder)](#436-todo-list-empty-system-reminder)
      7. [TodoWrite reminder (System Reminder)](#437-todowrite-reminder-system-reminder)
      8. [AskUserQuestion (Tool Description)](#438-askuserquestion-tool-description)
   4. [Session Utilities and User Insights](#44-session-utilities-and-user-insights)
      1. [Session Utilities & Interface Tools](#441-session-utilities-interface-tools)
         1. [Option previewer (System Prompt)](#4411-option-previewer-system-prompt)
         2. [Scratchpad directory (System Prompt)](#4412-scratchpad-directory-system-prompt)
         3. [New diagnostics detected (System Reminder)](#4413-new-diagnostics-detected-system-reminder)
         4. [Prompt Suggestion Generator v2 (Agent Prompt)](#4414-prompt-suggestion-generator-v2-agent-prompt)
         5. [Status line setup (Agent Prompt)](#4415-status-line-setup-agent-prompt)
         6. [Sleep (Tool Description)](#4416-sleep-tool-description)
      2. [User Insights & Usage Analytics](#442-user-insights-usage-analytics)
         1. [Insights at a glance summary (System Prompt)](#4421-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#4422-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#4423-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#4424-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#4425-insights-suggestions-system-prompt)
         6. [User sentiment analysis (Agent Prompt)](#4426-user-sentiment-analysis-agent-prompt)
      3. [Learning Mode & Educational Workflows](#443-learning-mode-educational-workflows)
         1. [Learning mode (System Prompt)](#4431-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#4432-learning-mode-insights-system-prompt)
5. [Tool Infrastructure and Automation](#5-tool-infrastructure-and-automation)
   1. [Tool Discovery and Lifecycle Hooks](#51-tool-discovery-and-lifecycle-hooks)
      1. [Tool Discovery & Loading](#511-tool-discovery-loading)
         1. [ToolSearch (Tool Description)](#5111-toolsearch-tool-description)
         2. [ToolSearch extended (Tool Description)](#5112-toolsearch-extended-tool-description)
         3. [Skill (Tool Description)](#5113-skill-tool-description)
      2. [Hooks System & Lifecycle Events](#512-hooks-system-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#5121-hooks-configuration-system-prompt)
         2. [Hook condition evaluator (Agent Prompt)](#5122-hook-condition-evaluator-agent-prompt)
         3. [Agent Hook (Agent Prompt)](#5123-agent-hook-agent-prompt)
         4. [Hook additional context (System Reminder)](#5124-hook-additional-context-system-reminder)
         5. [Hook blocking error (System Reminder)](#5125-hook-blocking-error-system-reminder)
         6. [Hook stopped continuation prefix (System Reminder)](#5126-hook-stopped-continuation-prefix-system-reminder)
         7. [Hook stopped continuation (System Reminder)](#5127-hook-stopped-continuation-system-reminder)
         8. [Hook success (System Reminder)](#5128-hook-success-system-reminder)
   2. [File State & IDE Notifications](#52-file-state-ide-notifications)
      1. [Compact file reference (System Reminder)](#521-compact-file-reference-system-reminder)
      2. [File exists but empty (System Reminder)](#522-file-exists-but-empty-system-reminder)
      3. [File modified by user or linter (System Reminder)](#523-file-modified-by-user-or-linter-system-reminder)
      4. [File opened in IDE (System Reminder)](#524-file-opened-in-ide-system-reminder)
      5. [File shorter than offset (System Reminder)](#525-file-shorter-than-offset-system-reminder)
      6. [File truncated (System Reminder)](#526-file-truncated-system-reminder)
      7. [Lines selected in IDE (System Reminder)](#527-lines-selected-in-ide-system-reminder)
   3. [Browser, Web, and External Retrieval](#53-browser-web-and-external-retrieval)
      1. [Browser & Computer Automation](#531-browser-computer-automation)
         1. [Computer (Tool Description)](#5311-computer-tool-description)
         2. [Computer action (Tool Parameter)](#5312-computer-action-tool-parameter)
         3. [Chrome browser MCP tools (System Prompt)](#5313-chrome-browser-mcp-tools-system-prompt)
         4. [Claude in Chrome browser automation (System Prompt)](#5314-claude-in-chrome-browser-automation-system-prompt)
      2. [Web Search & Fetch Tools](#532-web-search-fetch-tools)
         1. [WebFetch (Tool Description)](#5321-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#5322-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#5323-webfetch-summarizer-agent-prompt)
   4. [Skills & Workflow Automation](#54-skills-workflow-automation)
      1. [Skillify Current Session (System Prompt)](#541-skillify-current-session-system-prompt)
      2. [Create verifier skills (Skill)](#542-create-verifier-skills-skill)
      3. [Verification specialist (Skill)](#543-verification-specialist-skill)
      4. [Update Claude Code Config (Skill)](#544-update-claude-code-config-skill)
      5. [Debugging (Skill)](#545-debugging-skill)
6. [SDK, API, and Integration References](#6-sdk-api-and-integration-references)
   1. [Claude API SDK Reference Documentation](#61-claude-api-sdk-reference-documentation)
      1. [Claude API reference — C# (Data)](#611-claude-api-reference-—-c-data)
      2. [Claude API reference — Go (Data)](#612-claude-api-reference-—-go-data)
      3. [Claude API reference — Java (Data)](#613-claude-api-reference-—-java-data)
      4. [Claude API reference — PHP (Data)](#614-claude-api-reference-—-php-data)
      5. [Claude API reference — Python (Data)](#615-claude-api-reference-—-python-data)
      6. [Claude API reference — Ruby (Data)](#616-claude-api-reference-—-ruby-data)
      7. [Claude API reference — TypeScript (Data)](#617-claude-api-reference-—-typescript-data)
      8. [Claude model catalog (Data)](#618-claude-model-catalog-data)
      9. [HTTP error codes reference (Data)](#619-http-error-codes-reference-data)
      10. [Live documentation sources (Data)](#6110-live-documentation-sources-data)
      11. [Build with Claude API (Skill)](#6111-build-with-claude-api-skill)
      12. [Build with Claude API (reference guide) [Skill]](#6112-build-with-claude-api-reference-guide-skill)
      13. [Build with Claude API (trigger) [Skill]](#6113-build-with-claude-api-trigger-skill)
   2. [Agent SDK and Tool Use API](#62-agent-sdk-and-tool-use-api)
      1. [Agent SDK Reference Documentation](#621-agent-sdk-reference-documentation)
         1. [Agent SDK patterns — Python (Data)](#6211-agent-sdk-patterns-—-python-data)
         2. [Agent SDK patterns — TypeScript (Data)](#6212-agent-sdk-patterns-—-typescript-data)
         3. [Agent SDK reference — Python (Data)](#6213-agent-sdk-reference-—-python-data)
         4. [Agent SDK reference — TypeScript (Data)](#6214-agent-sdk-reference-—-typescript-data)
      2. [Tool Use API Reference](#622-tool-use-api-reference)
         1. [Tool use concepts (Data)](#6221-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6222-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6223-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#6224-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#6225-streaming-reference-—-typescript-data)
         6. [Message Batches API reference — Python (Data)](#6226-message-batches-api-reference-—-python-data)
         7. [Files API reference — Python (Data)](#6227-files-api-reference-—-python-data)
         8. [Files API reference — TypeScript (Data)](#6228-files-api-reference-—-typescript-data)
   3. [CI/CD and Documentation Tooling](#63-cicd-and-documentation-tooling)
      1. [GitHub Integration & CI/CD](#631-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#6311-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#6312-github-app-installation-pr-description-data)
      2. [Documentation Generation & Management](#632-documentation-generation-management)
         1. [CLAUDE.md creation (Agent Prompt)](#6321-claudemd-creation-agent-prompt)
         2. [Update Magic Docs (Agent Prompt)](#6322-update-magic-docs-agent-prompt)
         3. [Claude guide agent (Agent Prompt)](#6323-claude-guide-agent-agent-prompt)
7. [Code Quality, Style, and Security](#7-code-quality-style-and-security)
   1. [Code Quality & Task Execution Principles](#71-code-quality-task-execution-principles)
      1. [Doing tasks (ambitious tasks) [System Prompt]](#711-doing-tasks-ambitious-tasks-system-prompt)
      2. [Doing tasks (avoid over-engineering) [System Prompt]](#712-doing-tasks-avoid-over-engineering-system-prompt)
      3. [Doing tasks (blocked approach) [System Prompt]](#713-doing-tasks-blocked-approach-system-prompt)
      4. [Doing tasks (help and feedback) [System Prompt]](#714-doing-tasks-help-and-feedback-system-prompt)
      5. [Doing tasks (minimize file creation) [System Prompt]](#715-doing-tasks-minimize-file-creation-system-prompt)
      6. [Doing tasks (no compatibility hacks) [System Prompt]](#716-doing-tasks-no-compatibility-hacks-system-prompt)
      7. [Doing tasks (no premature abstractions) [System Prompt]](#717-doing-tasks-no-premature-abstractions-system-prompt)
      8. [Doing tasks (no time estimates) [System Prompt]](#718-doing-tasks-no-time-estimates-system-prompt)
      9. [Doing tasks (no unnecessary additions) [System Prompt]](#719-doing-tasks-no-unnecessary-additions-system-prompt)
      10. [Doing tasks (no unnecessary error handling) [System Prompt]](#7110-doing-tasks-no-unnecessary-error-handling-system-prompt)
      11. [Doing tasks (read before modifying) [System Prompt]](#7111-doing-tasks-read-before-modifying-system-prompt)
      12. [Doing tasks (security) [System Prompt]](#7112-doing-tasks-security-system-prompt)
      13. [Doing tasks (software engineering focus) [System Prompt]](#7113-doing-tasks-software-engineering-focus-system-prompt)
      14. [Executing actions with care (System Prompt)](#7114-executing-actions-with-care-system-prompt)
   2. [Output Style & Tone Guidelines](#72-output-style-tone-guidelines)
      1. [Tone and style (code references) [System Prompt]](#721-tone-and-style-code-references-system-prompt)
      2. [Tone and style (concise output — detailed) [System Prompt]](#722-tone-and-style-concise-output-—-detailed-system-prompt)
      3. [Tone and style (concise output — short) [System Prompt]](#723-tone-and-style-concise-output-—-short-system-prompt)
      4. [Output style active (System Reminder)](#724-output-style-active-system-reminder)
      5. [/btw side question (System Reminder)](#725-btw-side-question-system-reminder)
   3. [Security Review & Malware Analysis](#73-security-review-malware-analysis)
      1. [/security-review slash command (Agent Prompt)](#731-security-review-slash-command-agent-prompt)
      2. [Censoring assistance with malicious activities (System Prompt)](#732-censoring-assistance-with-malicious-activities-system-prompt)
      3. [Malware analysis after Read tool call (System Reminder)](#733-malware-analysis-after-read-tool-call-system-reminder)
      4. [Bash command prefix detection (Agent Prompt)](#734-bash-command-prefix-detection-agent-prompt)

---

## 1. Bash and Command Execution

Everything governing how bash commands are written, executed, and secured — from syntax conventions and performance patterns to sandbox restrictions and tool substitution guidance.

### 1.1 Bash Tool Usage Guidelines

Conventions for executing bash commands effectively, covering command documentation, path handling, syntax patterns, and performance optimization. Emphasizes absolute paths to maintain session state, parallel execution for independent commands, proper quoting and chaining operators for sequential dependencies, and strategic use of background tasks and check commands instead of polling delays.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Basic description of the Bash tool's function to execute commands and return output.

#### 1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Requires Claude to write clear, concise descriptions of bash commands, with more detail for complex or piped operations.

#### 1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to use absolute paths and avoid cd commands to maintain the current working directory throughout sessions.

#### 1.1.4 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits using newlines to separate bash commands in tool calls.

#### 1.1.5 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to make multiple independent Bash tool calls in parallel rather than sequentially when commands do not depend on each other.

#### 1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Requires Claude to quote file paths containing spaces with double quotes in bash commands.

#### 1.1.7 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially where earlier command failures do not matter.

#### 1.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Directs Claude to chain dependent commands using `&&` in a single bash call when sequential execution and failure propagation are required.

#### 1.1.9 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Constrains sleep duration to 1-5 seconds to avoid blocking the user when delays are necessary.

#### 1.1.10 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Prohibits polling background tasks started with `run_in_background` since Claude will be notified upon completion.

#### 1.1.11 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Forbids retrying failing commands in sleep loops; instead Claude should diagnose root causes or consider alternative approaches.

#### 1.1.12 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Prohibits sleeping between commands that can execute immediately.

#### 1.1.13 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Directs Claude to use check commands like `gh run view` for polling external processes instead of sleeping first.

#### 1.1.14 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Recommends using `run_in_background` for long-running commands instead of sleeping, with notification upon completion.

#### 1.1.15 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Allows optional timeout specification in milliseconds up to a maximum, with a documented default timeout value.

#### 1.1.16 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence and correctness using `ls` before creating new files or directories.

#### 1.1.17 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between bash commands but shell state does not, with environment initialized from user profile.

### 1.2 Bash Sandbox Security & Restrictions

Security framework enforcing sandboxed command execution by default with mechanisms for detecting and responding to sandbox-induced failures. Establishes mandatory sandbox mode, identifies restriction evidence patterns, provides user-facing explanations, and defines escalation procedures while protecting sensitive paths from allowlist exposure.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Directs Claude to collaborate with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to always default to running commands within the sandbox and only disable it when explicitly requested or evidence of sandbox restriction appears.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that a command failure was caused by sandbox restrictions.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "Operation not permitted" errors as evidence of sandbox restrictions on file and network operations.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Recognizes Unix socket connection errors as evidence of sandbox restrictions.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and inform users about the `/sandbox` command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with clear evidence of sandbox restrictions, distinguishing sandbox-related failures from other causes like missing files or network issues.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command with `dangerouslyDisableSandbox: true` individually and default to sandbox mode for future commands regardless of recent exceptions.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Marks the beginning of response instructions for handling sandbox-caused command failures.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Directs Claude to immediately retry a failed command with `dangerouslyDisableSandbox: true` without asking the user first.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode instead of `/tmp` directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

### 1.3 Bash Alternatives — Prefer Dedicated Tools

Guidance to replace common bash utilities with purpose-built tools for superior user experience and transparency. Dedicated tools handle file reading, writing, editing, searching, and globbing instead of cat, echo, sed, grep, and find commands.

#### 1.3.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Directs Claude to output text directly rather than using echo or printf commands.

#### 1.3.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use a dedicated Grep tool instead of grep or rg for content searching.

#### 1.3.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use a dedicated Edit tool instead of sed or awk for file modifications.

#### 1.3.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use a dedicated Glob tool instead of find or ls for file discovery.

#### 1.3.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use a dedicated Read tool instead of cat, head, or tail for file reading.

#### 1.3.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use a dedicated Write tool instead of echo or cat for file creation and writing.

#### 1.3.7 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that dedicated built-in tools provide better user experience and transparency than equivalent Bash commands.

#### 1.3.8 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat, head, tail, sed, and awk operations, preferring dedicated tools instead.

### 1.4 Bash Command Analysis Agents

Utilities for interpreting bash commands: generating human-readable descriptions of command functionality and extracting file paths from command output to support code navigation and understanding.

#### 1.4.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or obscure commands to clarify functionality.

#### 1.4.2 [Bash command file path extraction (Agent Prompt)](system-prompts/agent-prompt-bash-command-file-path-extraction.md)

Extracts file paths from bash command output by determining whether commands display file contents, returning paths verbatim only for commands that show file contents, with structured XML output.

---

## 2. File, Code, and Version Control Tools

Tools and policies for reading, writing, searching, and navigating codebases, plus Git workflows for commits, pull requests, and safe repository management.

### 2.1 File System and Search Tools

Dedicated tools for file reading, pattern-based discovery, regex content search, text editing, and notebook manipulation — with guidance on when to use each.

#### 2.1.1 File System Tool Descriptions

Specialized tools for filesystem operations including file reading with multi-format support, pattern-based discovery, content searching with regex, precise text editing, and notebook cell manipulation. Each tool optimizes for specific use cases while maintaining consistency with broader tool preferences.

##### 2.1.1.1 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with strict requirements for preserving indentation, preferring existing file edits over new file creation, and using `replace_all` for non-unique matches.

##### 2.1.1.2 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like `**/*.js` that returns matching file paths sorted by modification time. Use for name-based file searches; prefer the Agent tool for open-ended searches requiring multiple rounds.

##### 2.1.1.3 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting full regex syntax, file filtering by glob or type, and multiple output modes. Must always be used for search tasks instead of bash grep commands, with support for multiline patterns and proper escaping for special characters.

##### 2.1.1.4 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges for large files), Jupyter notebooks, and text files. Defaults to reading the entire file but supports line offsets and limits for long files.

##### 2.1.1.5 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, overwriting existing files. Prefer the Edit tool for modifications; use Write for new files or complete rewrites. Avoid creating documentation or README files unless explicitly requested.

##### 2.1.1.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits specific cells in Jupyter notebooks by completely replacing cell contents. Supports insert and delete modes with 0-indexed cell numbering and requires absolute file paths.

#### 2.1.2 Tool Usage Policies

Prescriptive guidance for selecting appropriate tools for common operations: dedicated tools (Read, Write, Edit, Glob, Grep) for file and codebase operations; Task tool with subagents for complex exploration; Bash reserved for system commands; TodoWrite for task tracking; Skill tool for slash commands. Emphasizes parallel execution of independent operations to maximize efficiency.

##### 2.1.2.1 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Use the Task tool with exploration subagents for broad codebase research when simple directed searches are insufficient or will exceed query limits.

##### 2.1.2.2 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Use Glob or Grep tools directly for simple, targeted codebase searches like finding specific files, classes, or functions.

##### 2.1.2.3 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Prefer the Edit tool over sed or awk for file modifications.

##### 2.1.2.4 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Use the Read tool instead of cat, head, tail, or sed for reading file contents.

##### 2.1.2.5 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations; prefer dedicated tools when available.

##### 2.1.2.6 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool instead of grep or rg to search file contents.

##### 2.1.2.7 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool instead of find or ls to search for files.

##### 2.1.2.8 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute user-invocable skills invoked via slash commands; only invoke skills listed in the tool's user-invocable section.

##### 2.1.2.9 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use the Task tool with specialized subagents for parallelizing independent queries or protecting context windows, but avoid duplicating work already performed by subagents.

##### 2.1.2.10 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Use the TodoWrite tool to break down work into tasks, track progress, and mark tasks complete immediately upon finishing.

##### 2.1.2.11 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use the Write tool for file creation instead of cat heredoc or echo redirection.

##### 2.1.2.12 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while executing dependent calls sequentially to improve efficiency.

### 2.2 LSP & Code Intelligence

Language Server Protocol integration providing deep code understanding across files and workspaces, enabling definition lookup, reference finding, symbol navigation, and call hierarchy analysis.

#### 2.2.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol integration for code intelligence features including definition lookup, reference finding, hover information, symbol search, implementation navigation, and call hierarchy analysis across files and workspaces.

### 2.3 Git Operations & Version Control

Comprehensive version control workflow covering safe commit creation, pull request management, code review, and repository state tracking. Enforces safety protocols against destructive operations, hook bypassing, and accidental amendments while automating commit messaging and PR creation with contextual awareness.

#### 2.3.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives before executing destructive git operations like reset, force push, or checkout.

#### 2.3.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests, covering safety protocols, staging procedures, commit message drafting, hook handling, and PR creation with gh commands. Emphasizes never committing without explicit user request and always creating new commits rather than amending after hook failures.

#### 2.3.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping git hooks or bypassing GPG signing unless explicitly requested by the user.

#### 2.3.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Directs Claude to create new commits rather than amending existing ones.

#### 2.3.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, only when the user explicitly requests worktree usage. The tool creates a new branch in `.claude/worktrees/` or delegates to VCS-agnostic hooks outside git repositories.

#### 2.3.6 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git repository state including branch, main branch reference, status, and recent commits at conversation start.

#### 2.3.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context from git status and diff, analyzing changes to draft appropriate messages following repository conventions while enforcing safety protocols against secrets and amendments.

#### 2.3.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated context, handling branch creation, commit messaging, PR body generation, and optional Slack notifications while enforcing git safety protocols and preventing force pushes.

#### 2.3.9 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and review comments with code context, formatting them with file paths, line numbers, and diff hunks in readable threaded format.

#### 2.3.10 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Provides thorough code reviews of GitHub pull requests analyzing changes for quality, style, improvements, and risks while focusing on correctness, conventions, performance, test coverage, and security.

---

## 3. Agent Coordination and Planning

Frameworks for multi-agent teamwork, subagent delegation, structured implementation planning, and managing tool permissions across agent boundaries.

### 3.1 Planning Mode Workflow

Structured planning phase for non-trivial implementation tasks where Claude explores code, designs approaches, and obtains user approval before execution. Variants include five-phase parallel exploration, iterative pair-planning, and subagent modes. All enforce read-only constraints during planning; ExitPlanMode presents the plan for review and approval.

#### 3.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Instructs Claude to proactively use EnterPlanMode for non-trivial implementation tasks to explore the codebase, design approaches, and obtain user approval before writing code. The tool should be used for new features, multiple valid approaches, code modifications, architectural decisions, multi-file changes, unclear requirements, or when user preferences matter.

#### 3.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning and requests user approval by reading the plan file and presenting it for review. Should only be used for code implementation tasks, not research or exploration, and should not be used to ask approval questions—that is the tool's inherent function.

#### 3.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a five-phase workflow: initial understanding through parallel exploration agents, design with planning agents, review, final plan writing, and exit. Prohibits all edits except to the plan file and requires readonly-only actions during planning.

#### 3.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative pair-planning mode where Claude explores code, updates the plan file incrementally, and asks clarifying questions. Only the plan file may be edited; all other actions must be readonly.

#### 3.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents that prohibits edits and non-readonly tools while allowing plan file creation or editing and user clarification questions.

#### 3.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after a previous exit, instructing it to read the existing plan, evaluate relevance to the new request, and decide whether to continue or overwrite.

#### 3.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notify that plan mode has ended and execution can now proceed with edits, tools, and actions.

#### 3.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and instructs Claude to continue working on it if relevant.

#### 3.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Instructs Claude to call a verification tool directly after completing plan implementation to confirm all items were executed correctly.

#### 3.1.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases and designs implementation plans by understanding requirements, analyzing existing patterns, and detailing step-by-step strategies with identified critical files and architectural trade-offs.

### 3.2 Multi-Agent Swarms and Subagents

Organizing teams of specialized agents on shared task lists, direct agent-to-agent communication, subagent role definitions, and concise outcome reporting.

#### 3.2.1 Multi-Agent Swarm Coordination

Framework for organizing teams of specialized agents working on shared task lists. Task tool launches subagents; SendMessageTool enables direct communication and broadcasts; TeammateTool manages team creation and lifecycle. Agents discover work from task lists, claim tasks by ID ordering, and communicate status to team leads.

##### 3.2.1.1 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents to handle complex tasks including research, exploration, and implementation. Supports concurrent agent execution, background task processing, agent resumption with preserved context, and optional worktree isolation for repository work.

##### 3.2.1.2 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables communication with teammates in a swarm by sending direct messages, broadcasts, shutdown requests, and plan approval responses. Direct messages are preferred over broadcasts to minimize API costs; teammates receive messages automatically and do not require manual inbox checking.

##### 3.2.1.3 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages team creation and teammate coordination in swarms. Teams correspond 1:1 with task lists; teammates work on assigned tasks, go idle between turns (which is normal), and communicate via SendMessage. Teammates discover team members from the config file and should prefer task ID ordering.

##### 3.2.1.4 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available work from shared task lists. Teammates should check TaskList after completing tasks, prefer lowest-ID tasks for context ordering, and notify the team lead if blocked.

##### 3.2.1.5 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion. Fails if active team members remain; requires graceful teammate shutdown before cleanup.

##### 3.2.1.6 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Establishes communication protocol for agents in a team using SendMessage tool with message and broadcast types, requiring explicit tool use rather than text responses.

##### 3.2.1.7 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with a specific identity and role, providing team configuration paths, task list location, and instructions for communicating with teammates by name.

##### 3.2.1.8 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Instructs Claude to shut down its team gracefully before providing a final response to the user in non-interactive mode.

#### 3.2.2 Sub-Agent Execution & Reporting

Specialized subagent roles for delegated work: general-purpose agents for research and multi-step tasks; fast read-only explorers for codebase pattern matching and keyword searching. Agents use absolute paths, avoid unnecessary file creation, and generate concise past-tense summaries of outcomes without implementation details.

##### 3.2.2.1 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

General-purpose subagent for researching complex questions, searching codebases, and executing multi-step tasks using glob, grep, and read tools, avoiding file creation unless necessary.

##### 3.2.2.2 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Provides usage guidelines for Task tool subagents emphasizing absolute file paths, no emojis, and proper formatting without colons before tool calls.

##### 3.2.2.3 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file pattern matching, keyword searching, and code analysis with configurable thoroughness levels, using glob and grep for broad searches and read for specific files.

##### 3.2.2.4 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Generate brief, past-tense summaries of tool usage and outcomes in under 8 words, focusing on user-visible results without implementation details or self-reference.

##### 3.2.2.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt for generating concise 3-5 word action summaries in present tense for agent progress tracking, with examples of good and bad formats.

### 3.3 Agent Design and Permission Boundaries

Synthesizing user intent into custom agent personas with behavioral guardrails, and handling tool permission denials gracefully rather than circumventing restrictions.

#### 3.3.1 Agent Design & Creation

Synthesizes user intent into custom AI agents by defining expert personas, architecting system prompts with behavioral guardrails and decision frameworks, and optimizing performance through structured methodology.

##### 3.3.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts with behavioral boundaries and decision-making frameworks, optimizing for performance, and generating concise identifiers. Includes methodology for defining agent use cases with detailed examples.

#### 3.3.2 Tool Permission & Execution Control

Manages tool access boundaries by gracefully handling permission denials, exploring reasonable alternatives, and escalating when essential capabilities are blocked rather than circumventing restrictions.

##### 3.3.2.1 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains tool permission modes and instructs Claude to adjust approach when users deny tool calls rather than retrying, optionally using AskUserQuestion to clarify denial reasons.

##### 3.3.2.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides Claude to attempt reasonable alternatives when tool execution is denied, avoiding malicious workarounds and escalating to the user when essential capabilities are blocked.

---

## 4. Memory, Session, and Context Management

Preserving knowledge and state across conversations — from persistent memory files and context compaction to session analytics, educational workflows, and development environment utilities.

### 4.1 Persistent Memory and Knowledge

Structured memory files, context compaction summaries, and domain-specific update instructions that maintain institutional knowledge and continuity across sessions.

#### 4.1.1 Context & Memory Management

Persistent session state and institutional knowledge preservation across conversations through structured memory files, context compaction summaries, and domain-specific update instructions that maintain continuity and actionable information.

##### 4.1.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file stored at a specified path.

##### 4.1.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file from an attachment object.

##### 4.1.1.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt template for generating structured continuation summaries when context is compacted, covering task overview, current state, discoveries, next steps, and context preservation.

##### 4.1.1.4 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects relevant memory files from available options based on user query, returning up to 5 filenames that will clearly assist Claude Code in processing the request.

##### 4.1.1.5 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by preserving structure and section headers while adding detailed, info-dense content from conversations, maintaining token limits and focusing on actionable information for continuity.

##### 4.1.1.6 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations, with examples for code reviewers, test runners, architects, and documentation writers.

##### 4.1.1.7 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files documenting current state, task specification, files, workflow, errors, codebase, learnings, results, and worklog.

#### 4.1.2 Conversation & Session Summarization

Extracts and preserves conversation context through structured analysis of user requests, technical work, and pending tasks. Generates concise session identifiers and enables discovery of prior work through semantic and metadata-based search.

##### 4.1.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing user requests, technical concepts, code changes, errors, and pending tasks through structured analysis, including file-level details, error resolutions, and next steps aligned with recent work.

##### 4.1.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, capturing user requests, technical concepts, code changes, errors, and next steps through structured analysis with detailed file and code snippet information.

##### 4.1.2.3 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, 'claude/' prefix, lowercase with dashes) from session descriptions.

##### 4.1.2.4 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user search queries by prioritizing exact tag matches, then partial matches, titles, branches, and transcript content, returning inclusive results ordered by relevance.

### 4.2 Runtime Environment and Resource Awareness

Real-time tracking of session continuity, external resource availability, active capabilities, and computational or financial budget consumption.

#### 4.2.1 Resource & Budget Monitoring

Tracks consumption of computational and financial resources in real time, alerting when limits approach or are exceeded. Enables work segmentation and resource-aware decision-making.

##### 4.2.1.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 4.2.1.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including used, total, and remaining amounts.

##### 4.2.1.3 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Warns Claude that its response was truncated due to exceeding the output token limit and instructs it to break work into smaller pieces.

#### 4.2.2 Session & Environment State

Communicates runtime context including session continuity across machines, external resource availability, and active capabilities. Ensures agent awareness of environment changes and invoked tools.

##### 4.2.2.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory may have changed.

##### 4.2.2.2 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 4.2.2.3 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content available.

##### 4.2.2.4 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Invoke the specified agent with appropriate context when user requests it.

##### 4.2.2.5 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Displays a list of skills invoked during the current session and instructs Claude to continue following their guidelines.

### 4.3 Task & Todo Management

Structured task tracking systems for organizing and monitoring complex work. TodoWrite and TaskCreate create imperative task lists with present-continuous forms; TaskOutput retrieves status. Reminders encourage proactive task creation for multi-step work and cleanup of stale entries without user notification.

#### 4.3.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions to track progress and organize complex work. Should be used for multi-step tasks, non-trivial work, or user-provided task lists; requires both imperative content and present-continuous activeForm for each task.

#### 4.3.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists to organize complex multi-step work and track progress. Should be used proactively for tasks with 3+ steps, non-trivial complexity, plan mode work, or when users provide multiple tasks; requires both imperative subject and present-continuous activeForm.

#### 4.3.3 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

#### 4.3.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task creation and update tools for tracking progress on relevant work, and to clean up stale tasks.

#### 4.3.5 [Todo list changed (System Reminder)](system-prompts/system-reminder-todo-list-changed.md)

Notifies Claude of changes to its todo list without mentioning it to the user, and instructs it to continue with applicable tasks.

#### 4.3.6 [Todo list empty (System Reminder)](system-prompts/system-reminder-todo-list-empty.md)

Reminds Claude that its todo list is empty and suggests using the TodoWrite tool if task tracking would be beneficial, without mentioning it to the user.

#### 4.3.7 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for tracking progress on relevant tasks and to clean up stale entries, without mentioning it to the user.

#### 4.3.8 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Defines when and how to use the AskUserQuestion tool for gathering user input, clarifying requirements, and offering implementation choices during execution and planning phases.

### 4.4 Session Utilities and User Insights

Workspace isolation, visual option comparison, predictive guidance, shell configuration, and analysis of usage patterns to surface friction points and improvement opportunities.

#### 4.4.1 Session Utilities & Interface Tools

Provides session-scoped utilities for workspace isolation, visual option comparison, predictive user guidance, shell configuration, and diagnostic awareness to enhance development environment usability.

##### 4.4.1.1 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side visual comparison of UI options using markdown previews for mockups, code snippets, and diagrams in single-select questions.

##### 4.4.1.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Designates a session-specific scratchpad directory for all temporary files instead of system /tmp, providing isolated workspace for intermediate results and working files.

##### 4.4.1.3 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to new diagnostic issues detected in the code or environment.

##### 4.4.1.4 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on conversation context, suggesting specific actionable commands the user would likely type without offering evaluations, questions, or Claude-voice suggestions.

##### 4.4.1.5 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell configs, converting escape sequences to shell commands, and updating settings.json with custom status line commands that receive JSON context via stdin.

##### 4.4.1.6 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input. Preferred over bash sleep commands as it does not hold a shell process and can receive periodic check-in prompts to identify useful work.

#### 4.4.2 User Insights & Usage Analytics

Analyzes Claude Code usage patterns to surface working strategies, friction points, and growth opportunities through structured data extraction, sentiment detection, and tailored improvement recommendations.

##### 4.4.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a structured 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for Claude Code users to improve their usage patterns.

##### 4.4.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with specific examples, helping users understand recurring issues.

##### 4.4.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, with actionable prompts to try.

##### 4.4.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code sessions including goal categories, user satisfaction signals, and friction points with strict guidelines for accurate classification.

##### 4.4.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, Claude Code features to try (MCP servers, custom skills, hooks, headless mode, task agents), and usage patterns tailored to user behavior.

##### 4.4.2.6 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration and explicit pull request creation requests from conversation history, outputting boolean flags for sentiment and PR intent detection.

#### 4.4.3 Learning Mode & Educational Workflows

Establishes collaborative human-AI development by delegating design decisions and business logic to users while handling implementation, with educational context provided before and after code changes.

##### 4.4.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt establishing collaborative human-AI interaction by requesting user contributions for design decisions, business logic, and algorithms while handling routine implementation, with TodoList integration and structured request formats.

##### 4.4.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Instructs Claude to provide brief educational insights before and after code changes when learning mode is active, focusing on implementation choices specific to the codebase.

---

## 5. Tool Infrastructure and Automation

The underlying machinery for tool discovery, lifecycle event hooks, IDE integration, browser automation, web retrieval, and reusable workflow skills.

### 5.1 Tool Discovery and Lifecycle Hooks

Mechanisms for activating deferred tools by keyword or direct selection, and automation triggers tied to development lifecycle events for conditional command execution.

#### 5.1.1 Tool Discovery & Loading

Mechanism for discovering and activating deferred tools before use, supporting both keyword-based and direct-selection lookup modes. Specialized skills (slash commands) execute domain-specific capabilities within conversations.

##### 5.1.1.1 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite tool for loading deferred tools before use. Both query modes (keyword search and direct selection) load tools immediately; deferred tools are not available until discovered via this tool.

##### 5.1.1.2 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage instructions for ToolSearch covering keyword search, direct selection, and required keyword modes. Keyword searches return up to 5 tools and load them immediately; direct selection uses `select:<tool_name>` syntax. Do not follow keyword searches with redundant select calls.

##### 5.1.1.3 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation. Must be invoked before generating other responses when a skill matches the user's request; skills are listed in system-reminder messages and can be called with optional arguments.

#### 5.1.2 Hooks System & Lifecycle Events

Defines automation triggers tied to development lifecycle events, enabling conditional execution of commands and verification of task completion. Provides structured evaluation of hook conditions and stop criteria through transcript and codebase inspection.

##### 5.1.2.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive reference for Claude Code hooks system, defining lifecycle events, hook types (command, prompt, agent), input/output JSON structures, and common automation patterns for code formatting, testing, and validation.

##### 5.1.2.2 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether conditions are met with optional failure reasons.

##### 5.1.2.3 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and inspecting the codebase to confirm agent task completion, returning structured output indicating success or failure with reason.

##### 5.1.2.4 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provide additional context from a hook execution.

##### 5.1.2.5 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Report an error from a blocking hook command.

##### 5.1.2.6 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for hook stopped continuation messages.

##### 5.1.2.7 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notify that a hook stopped execution with a continuation message.

##### 5.1.2.8 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Report successful completion of a hook with its result.

### 5.2 File State & IDE Notifications

Communicates file system state changes and editor interactions, including truncation warnings, external modifications, and user selections. Bridges IDE actions with agent awareness to maintain accurate context of working files.

#### 5.2.1 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notify that a previously read file is too large to include in context; use the Read tool to access it if needed.

#### 5.2.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warn that a file exists but contains no content.

#### 5.2.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notify that a file was externally modified by user or linter; account for changes without reverting unless requested.

#### 5.2.4 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notify that the user opened a file in the IDE, which may or may not relate to the current task.

#### 5.2.5 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warn that the requested read offset exceeds the file length.

#### 5.2.6 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notify that a large file was truncated to a line limit; use the Read tool to access more if needed.

#### 5.2.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines of code in the IDE, providing line numbers and file context.

### 5.3 Browser, Web, and External Retrieval

Chrome browser automation via visual perception and direct UI control, plus real-time web search and content fetching with attribution requirements.

#### 5.3.1 Browser & Computer Automation

Chrome browser automation through visual perception and direct control, enabling mouse, keyboard, and UI interaction with screenshot-guided precision. Includes best practices for debugging, tab management, and avoiding common automation pitfalls.

##### 5.3.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes a Chrome browser automation tool for mouse and keyboard interaction with web pages, requiring screenshot consultation before clicking and precise cursor positioning on element centers.

##### 5.3.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for the Chrome browser computer tool including click variants, typing, scrolling, keyboard input, dragging, zooming, and hover actions for browser automation.

##### 5.3.1.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use, requiring explicit tool selection before calling mcp__claude-in-chrome__* tools.

##### 5.3.1.4 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Best practices for browser automation using Claude in Chrome tools including GIF recording, console debugging with pattern filtering, avoiding modal dialogs, preventing loops, and proper tab context management.

#### 5.3.2 Web Search & Fetch Tools

Real-time web content retrieval and search capabilities that extend knowledge beyond training cutoff, with built-in caching, HTML-to-markdown conversion, and strict attribution requirements for sourced information.

##### 5.3.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with an AI model. Supports URL redirects, includes a 15-minute cache, and automatically upgrades HTTP to HTTPS. Prefer MCP-provided web fetch tools if available.

##### 5.3.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond Claude's knowledge cutoff. Requires mandatory inclusion of a Sources section with markdown links in responses. Supports domain filtering and is only available in the US; must use current year in search queries.

##### 5.3.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and attribution rules for untrusted domains while respecting open-source licenses.

### 5.4 Skills & Workflow Automation

Framework for capturing repeatable workflows as reusable skills through structured interviews and generating executable automation for verification, configuration management, and debugging across multiple verification tools and platforms.

#### 5.4.1 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a multi-round interview process to capture repeatable workflows as reusable skills, analyzing sessions, confirming details, and generating SKILL.md files with step-by-step instructions, success criteria, and execution modes.

#### 5.4.2 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically test code changes, including project auto-detection, verification tool setup (Playwright, Chrome DevTools, CLI/Tmux, HTTP), interactive Q&A for authentication and configuration, and skill generation with appropriate allowed-tools for web, CLI, and API verification.

#### 5.4.3 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Five-phase workflow for verifying code changes: discover verifier skills, analyze git changes, choose appropriate verifiers, generate deterministic verification plans, and trigger verifier skills sequentially with inline result reporting and failure analysis.

#### 5.4.4 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Workflow for modifying Claude Code configuration in settings.json files, covering when hooks are required vs memory, critical read-before-write pattern, array merging for permissions and hooks, and example configurations for formatters, permissions, and environment variables.

#### 5.4.5 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, checking settings files, and providing concrete fixes or next steps.

---

## 6. SDK, API, and Integration References

Authoritative reference documentation for building with Claude — language-specific SDKs, the Agent SDK, tool use APIs, GitHub CI/CD integration, and documentation generation.

### 6.1 Claude API SDK Reference Documentation

Language-specific SDK references for building with Claude covering client initialization, message requests, streaming, vision, prompt caching, extended thinking, and tool use patterns across Python, TypeScript, Java, Go, C#, PHP, and Ruby. Includes authoritative model catalog, HTTP error handling, and routing guides for selecting appropriate integration surfaces.

#### 6.1.1 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for the Claude API covering installation, client initialization, basic message requests, streaming, and manual tool use via JSON schema.

#### 6.1.2 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API including installation, client initialization, basic requests, streaming, and manual agentic loops for tool use.

#### 6.1.3 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering installation, client initialization, basic requests, streaming, and beta tool use with annotated classes via BetaToolRunner.

#### 6.1.4 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API including installation, client initialization, basic message requests, streaming, and manual tool use.

#### 6.1.5 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction for long contexts, and cost optimization strategies.

#### 6.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for Claude API including installation, client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

#### 6.1.7 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

#### 6.1.8 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Authoritative catalog of current, legacy, and retired Claude models with exact model IDs, aliases, context windows, max output tokens, and user request resolution mapping.

#### 6.1.9 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with common causes, fixes, and retry strategies for rate limits and server errors.

#### 6.1.10 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories, with extraction prompts for specific topics.

#### 6.1.11 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models (Opus 4.6, Sonnet 4.6, Haiku 4.5), adaptive thinking, effort parameters, context compaction, and reading guides for language-specific documentation.

#### 6.1.12 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API reference documentation with quick task reference mapping common use cases to relevant documentation sections.

#### 6.1.13 [Build with Claude API (trigger) [Skill]](system-prompts/skill-build-with-claude-api-trigger.md)

Activation criteria for the Build with Claude API skill, triggered when code imports the Anthropic SDK, Claude Agent SDK, or when users explicitly request Claude API integration.

### 6.2 Agent SDK and Tool Use API

Agent initialization, built-in tools, MCP integration, permission systems, execution hooks, structured outputs, batch processing, and agentic loop patterns.

#### 6.2.1 Agent SDK Reference Documentation

Complete Agent SDK references for Python and TypeScript covering agent initialization, built-in tools, Model Context Protocol integration, permission systems, hooks for execution auditing, subagents, session resumption, and custom configuration with practical patterns and best practices.

##### 6.2.1.1 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Comprehensive Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks for tool execution, subagents, permission modes, error recovery, session resumption, and custom system prompts with practical code examples.

##### 6.2.1.2 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns demonstrating basic agents, hooks for auditing, subagents, MCP integration with Playwright, session resumption, and custom system prompts.

##### 6.2.1.3 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Complete Python Agent SDK reference including installation, quick start, built-in tools, primary interfaces (query and ClaudeSDKClient), permission system, MCP support, hooks, common options, message types, subagents, and error handling with best practices.

##### 6.2.1.4 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference covering installation, quick start, built-in tools, permission modes, MCP support with in-process tools, hooks, common options, subagents, message types, and best practices.

#### 6.2.2 Tool Use API Reference

Comprehensive tool use implementation covering user-defined tools, tool runners with language-specific decorators, manual agentic loops, server-side capabilities (code execution, web search, memory), structured outputs via schema validation, file handling, streaming, and batch processing for asynchronous workloads.

##### 6.2.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Comprehensive guide to tool use with the Claude API covering user-defined tools, tool choice options, the tool runner vs manual agentic loops, server-side tools (code execution, web search, web fetch, computer use), the memory tool, structured outputs, and best practices for effective tool definitions and error handling.

##### 6.2.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python-specific implementation guide for tool use including the beta tool runner with @beta_tool decorators, manual agentic loops, code execution with file uploads and container reuse, the memory tool with SDK helpers, and structured outputs using Pydantic models and strict tool use.

##### 6.2.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript implementation guide for tool use featuring the beta tool runner with betaZodTool and Zod schemas, manual agentic loops, code execution with file uploads and container reuse, the memory tool with MemoryToolHandlers, and structured outputs using Zod schemas.

##### 6.2.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, getting final messages, progress tracking, error handling, and stream event types.

##### 6.2.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, tool runner streaming with nested loops, final message retrieval, and raw SSE format.

##### 6.2.2.6 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for processing up to 100,000 requests asynchronously at 50% cost, with polling, result retrieval, cancellation, and prompt caching integration.

##### 6.2.2.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading and managing files up to 500 MB, referencing them in messages via file_id, and retrieving file metadata with end-to-end examples.

##### 6.2.2.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages via file_id, and managing file lifecycle including listing, deletion, and download.

### 6.3 CI/CD and Documentation Tooling

GitHub Actions workflows for Claude Code automation triggered via @mentions, plus agents for generating and maintaining CLAUDE.md files and unified documentation access.

#### 6.3.1 GitHub Integration & CI/CD

GitHub Actions workflows and App installation templates enabling Claude Code automation triggered via @mentions in issues, PRs, and comments with configurable permissions and custom prompt support.

##### 6.3.1.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code to be triggered via @claude mentions in issues, PRs, and comments with configurable permissions and optional custom prompts.

##### 6.3.1.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security model, and how to trigger Claude via @mentions.

#### 6.3.2 Documentation Generation & Management

Agent prompts for creating and maintaining project documentation including CLAUDE.md files with architecture and development commands, Magic Docs updates with conversation learnings, and a guide agent providing unified documentation access across Claude Code, Agent SDK, and Claude API.

##### 6.3.2.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files containing common development commands, high-level architecture, and project-specific guidance for future Claude Code instances, incorporating existing rules and README content.

##### 6.3.2.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs Claude to update Magic Doc files with new learnings from conversations, preserving headers while removing outdated information and maintaining terse, architecture-focused documentation that avoids duplicating obvious code details.

##### 6.3.2.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing clear guidance on features, configuration, tool use, and integrations across three domains with documentation-based answers.

---

## 7. Code Quality, Style, and Security

Engineering principles for writing clean, scoped code; communication style guidelines for Claude's responses; and specialized security capabilities for vulnerability detection and malware analysis.

### 7.1 Code Quality & Task Execution Principles

Core engineering practices governing how Claude approaches code modifications: prioritizing simplicity, respecting scope boundaries, validating only at system edges, reading before changing, and avoiding premature abstractions or defensive patterns that add unnecessary complexity.

#### 7.1.1 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Directive to enable users to complete ambitious tasks by deferring to user judgment on scope rather than imposing artificial limitations.

#### 7.1.2 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Guideline to make only directly requested or clearly necessary changes, keeping solutions simple and focused.

#### 7.1.3 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instruction to consider alternative approaches when blocked rather than brute-forcing the same action, using AskUserQuestion to align on the right path.

#### 7.1.4 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Brief directive to inform users of help and feedback channels when requested.

#### 7.1.5 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Guideline to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

#### 7.1.6 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Directive to delete unused code completely rather than adding compatibility shims, re-exports, or removed comments.

#### 7.1.7 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Guideline against creating helpers or abstractions for one-time operations or hypothetical requirements, favoring minimal necessary complexity.

#### 7.1.8 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instruction to avoid giving time estimates or predictions for task completion, focusing on what needs to be done instead.

#### 7.1.9 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directive to avoid adding features, refactoring, or making improvements beyond what was requested, keeping changes focused and minimal.

#### 7.1.10 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid defensive error handling for impossible scenarios and trust framework guarantees, validating only at system boundaries like user input and external APIs.

#### 7.1.11 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing any modifications or changes.

#### 7.1.12 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks, prioritizing secure code.

#### 7.1.13 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Directs Claude to interpret user requests in the context of software engineering tasks like bug fixes, refactoring, and feature development, applying changes directly to code rather than providing abstract answers.

#### 7.1.14 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes guidelines for careful action execution by assessing reversibility and blast radius, requiring user confirmation for destructive, hard-to-reverse, or shared-state operations while encouraging investigation over shortcuts.

### 7.2 Output Style & Tone Guidelines

Directives for controlling Claude's communication style, including conciseness standards, code reference formatting, and active style reminders that shape how information is presented to users.

#### 7.2.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number references when mentioning specific code locations for easy user navigation.

#### 7.2.2 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Instructs Claude to produce concise, polished output without filler, repetition, or inner monologue while preserving important information.

#### 7.2.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Directs Claude to keep responses short and concise.

#### 7.2.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that a specific output style is active and reminds it to follow the associated guidelines.

#### 7.2.5 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer side questions directly without tools, using only conversation context, in a single response without promising further action.

### 7.3 Security Review & Malware Analysis

Specialized security capabilities for identifying exploitable vulnerabilities in code, analyzing malware behavior, detecting command injection attempts, and enforcing ethical boundaries around authorized versus malicious security work.

#### 7.3.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities across injection, authentication, crypto, and data exposure categories while filtering false positives and excluding DOS, secrets management, and rate limiting issues.

#### 7.3.2 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing requests for destructive techniques, DoS attacks, and malicious detection evasion.

#### 7.3.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware behavior and provide reports when encountered, but strictly prohibits improving or augmenting malicious code.

#### 7.3.4 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety classification, returning the prefix string or 'command_injection_detected' to enable user confirmation of potentially malicious commands.
