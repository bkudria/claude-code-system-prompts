# Claude Code System Prompts Index

Purpose-built for developers building with and on top of Claude, this documentation covers everything from low-level execution mechanics to high-level application architecture—enabling reliable, well-engineered AI systems that can plan, persist state, coordinate work, and integrate cleanly into real development workflows.

## Table of Contents

1. [Shell Command Execution and Sandbox Control](#1-shell-command-execution-and-sandbox-control)
   1. [Bash Command Execution and Session Management](#11-bash-command-execution-and-session-management)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (command description) [Tool Description]](#112-bash-command-description-tool-description)
      3. [Bash (working directory) [Tool Description]](#113-bash-working-directory-tool-description)
      4. [Bash (maintain cwd) [Tool Description]](#114-bash-maintain-cwd-tool-description)
      5. [Bash (no newlines) [Tool Description]](#115-bash-no-newlines-tool-description)
      6. [Bash (sequential commands) [Tool Description]](#116-bash-sequential-commands-tool-description)
      7. [Bash (parallel commands) [Tool Description]](#117-bash-parallel-commands-tool-description)
      8. [Bash (semicolon usage) [Tool Description]](#118-bash-semicolon-usage-tool-description)
      9. [Bash (timeout) [Tool Description]](#119-bash-timeout-tool-description)
      10. [Bash (verify parent directory) [Tool Description]](#1110-bash-verify-parent-directory-tool-description)
      11. [Bash (quote file paths) [Tool Description]](#1111-bash-quote-file-paths-tool-description)
   2. [Sandbox Security and Restriction Management](#12-sandbox-security-and-restriction-management)
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
   3. [Asynchronous Execution and Sleep Management](#13-asynchronous-execution-and-sleep-management)
      1. [Bash (sleep — keep short) [Tool Description]](#131-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#132-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — no retry loops) [Tool Description]](#133-bash-sleep-—-no-retry-loops-tool-description)
      4. [Bash (sleep — run immediately) [Tool Description]](#134-bash-sleep-—-run-immediately-tool-description)
      5. [Bash (sleep — use check commands) [Tool Description]](#135-bash-sleep-—-use-check-commands-tool-description)
      6. [Bash (sleep — use run_in_background) [Tool Description]](#136-bash-sleep-—-use-run_in_background-tool-description)
   4. [Bash Tool Alternatives and Best Practices](#14-bash-tool-alternatives-and-best-practices)
      1. [Bash (prefer dedicated tools) [Tool Description]](#141-bash-prefer-dedicated-tools-tool-description)
      2. [Bash (built-in tools note) [Tool Description]](#142-bash-built-in-tools-note-tool-description)
      3. [Bash (alternative — communication) [Tool Description]](#143-bash-alternative-—-communication-tool-description)
      4. [Bash (alternative — content search) [Tool Description]](#144-bash-alternative-—-content-search-tool-description)
      5. [Bash (alternative — edit files) [Tool Description]](#145-bash-alternative-—-edit-files-tool-description)
      6. [Bash (alternative — file search) [Tool Description]](#146-bash-alternative-—-file-search-tool-description)
      7. [Bash (alternative — read files) [Tool Description]](#147-bash-alternative-—-read-files-tool-description)
      8. [Bash (alternative — write files) [Tool Description]](#148-bash-alternative-—-write-files-tool-description)
2. [File Access, Search, and Version Control](#2-file-access-search-and-version-control)
   1. [File System Tools](#21-file-system-tools)
      1. [ReadFile (Tool Description)](#211-readfile-tool-description)
      2. [Write (Tool Description)](#212-write-tool-description)
      3. [Edit (Tool Description)](#213-edit-tool-description)
      4. [Glob (Tool Description)](#214-glob-tool-description)
      5. [Grep (Tool Description)](#215-grep-tool-description)
      6. [NotebookEdit (Tool Description)](#216-notebookedit-tool-description)
      7. [LSP (Tool Description)](#217-lsp-tool-description)
   2. [File Reading State and Errors](#22-file-reading-state-and-errors)
      1. [File truncated (System Reminder)](#221-file-truncated-system-reminder)
      2. [File shorter than offset (System Reminder)](#222-file-shorter-than-offset-system-reminder)
      3. [File exists but empty (System Reminder)](#223-file-exists-but-empty-system-reminder)
      4. [Compact file reference (System Reminder)](#224-compact-file-reference-system-reminder)
   3. [IDE Integration and File State Notifications](#23-ide-integration-and-file-state-notifications)
      1. [File opened in IDE (System Reminder)](#231-file-opened-in-ide-system-reminder)
      2. [Lines selected in IDE (System Reminder)](#232-lines-selected-in-ide-system-reminder)
      3. [File modified by user or linter (System Reminder)](#233-file-modified-by-user-or-linter-system-reminder)
      4. [New diagnostics detected (System Reminder)](#234-new-diagnostics-detected-system-reminder)
   4. [Git Version Control and Code Review Workflows](#24-git-version-control-and-code-review-workflows)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#241-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#242-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#243-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#244-bash-git-—-prefer-new-commits-tool-description)
      5. [EnterWorktree (Tool Description)](#245-enterworktree-tool-description)
      6. [Quick git commit (Agent Prompt)](#246-quick-git-commit-agent-prompt)
      7. [Quick PR creation (Agent Prompt)](#247-quick-pr-creation-agent-prompt)
      8. [/pr-comments slash command (Agent Prompt)](#248-pr-comments-slash-command-agent-prompt)
      9. [/review-pr slash command (Agent Prompt)](#249-review-pr-slash-command-agent-prompt)
      10. [Git status (System Prompt)](#2410-git-status-system-prompt)
   5. [Web and Browser Access](#25-web-and-browser-access)
      1. [Browser Automation](#251-browser-automation)
         1. [Computer (Tool Description)](#2511-computer-tool-description)
         2. [Computer action (Tool Parameter)](#2512-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#2513-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#2514-chrome-browser-mcp-tools-system-prompt)
      2. [Web Search and Content Fetching](#252-web-search-and-content-fetching)
         1. [WebSearch (Tool Description)](#2521-websearch-tool-description)
         2. [WebFetch (Tool Description)](#2522-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#2523-webfetch-summarizer-agent-prompt)
3. [Planning, Task Tracking, and Agent Coordination](#3-planning-task-tracking-and-agent-coordination)
   1. [Tool Usage Policy and Preferences](#31-tool-usage-policy-and-preferences)
      1. [Tool usage (create files) [System Prompt]](#311-tool-usage-create-files-system-prompt)
      2. [Tool usage (edit files) [System Prompt]](#312-tool-usage-edit-files-system-prompt)
      3. [Tool usage (read files) [System Prompt]](#313-tool-usage-read-files-system-prompt)
      4. [Tool usage (reserve Bash) [System Prompt]](#314-tool-usage-reserve-bash-system-prompt)
      5. [Tool usage (search content) [System Prompt]](#315-tool-usage-search-content-system-prompt)
      6. [Tool usage (search files) [System Prompt]](#316-tool-usage-search-files-system-prompt)
      7. [Tool usage (direct search) [System Prompt]](#317-tool-usage-direct-search-system-prompt)
      8. [Tool usage (delegate exploration) [System Prompt]](#318-tool-usage-delegate-exploration-system-prompt)
      9. [Tool usage (subagent guidance) [System Prompt]](#319-tool-usage-subagent-guidance-system-prompt)
      10. [Tool usage (task management) [System Prompt]](#3110-tool-usage-task-management-system-prompt)
      11. [Tool usage (skill invocation) [System Prompt]](#3111-tool-usage-skill-invocation-system-prompt)
      12. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#3112-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   2. [Planning Mode](#32-planning-mode)
      1. [EnterPlanMode (Tool Description)](#321-enterplanmode-tool-description)
      2. [ExitPlanMode (Tool Description)](#322-exitplanmode-tool-description)
      3. [Plan mode is active (5-phase) [System Reminder]](#323-plan-mode-is-active-5-phase-system-reminder)
      4. [Plan mode is active (iterative) [System Reminder]](#324-plan-mode-is-active-iterative-system-reminder)
      5. [Plan mode is active (subagent) [System Reminder]](#325-plan-mode-is-active-subagent-system-reminder)
      6. [Plan mode re-entry (System Reminder)](#326-plan-mode-re-entry-system-reminder)
      7. [Exited plan mode (System Reminder)](#327-exited-plan-mode-system-reminder)
      8. [Plan file reference (System Reminder)](#328-plan-file-reference-system-reminder)
      9. [Verify plan reminder (System Reminder)](#329-verify-plan-reminder-system-reminder)
      10. [Plan mode (enhanced) [Agent Prompt]](#3210-plan-mode-enhanced-agent-prompt)
   3. [Task and Todo Management](#33-task-and-todo-management)
      1. [TodoWrite (Tool Description)](#331-todowrite-tool-description)
      2. [TaskCreate (Tool Description)](#332-taskcreate-tool-description)
      3. [TodoWrite reminder (System Reminder)](#333-todowrite-reminder-system-reminder)
      4. [Task status (System Reminder)](#334-task-status-system-reminder)
      5. [Task tools reminder (System Reminder)](#335-task-tools-reminder-system-reminder)
      6. [Tool Use Summary Generation (System Prompt)](#336-tool-use-summary-generation-system-prompt)
   4. [Multi-Agent Orchestration](#34-multi-agent-orchestration)
      1. [Multi-Agent Team Coordination and Swarm](#341-multi-agent-team-coordination-and-swarm)
         1. [TeammateTool (Tool Description)](#3411-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#3412-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#3413-sendmessagetool-tool-description)
         4. [TaskList (teammate workflow) [Tool Description]](#3414-tasklist-teammate-workflow-tool-description)
         5. [Team Coordination (System Reminder)](#3415-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#3416-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#3417-teammate-communication-system-prompt)
         8. [/batch slash command (Agent Prompt)](#3418-batch-slash-command-agent-prompt)
      2. [Sub-Agent Task Delegation](#342-sub-agent-task-delegation)
         1. [Task (Tool Description)](#3421-task-tool-description)
         2. [Explore (Agent Prompt)](#3422-explore-agent-prompt)
         3. [Explore strengths and guidelines (Agent Prompt)](#3423-explore-strengths-and-guidelines-agent-prompt)
         4. [Agent mention (System Reminder)](#3424-agent-mention-system-reminder)
4. [Session State, Memory, and Automation Hooks](#4-session-state-memory-and-automation-hooks)
   1. [Memory and Context Persistence](#41-memory-and-context-persistence)
      1. [Session Memory and Context Management](#411-session-memory-and-context-management)
         1. [Memory file contents (System Reminder)](#4111-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#4112-nested-memory-contents-system-reminder)
         3. [Memory selection (Agent Prompt)](#4113-memory-selection-agent-prompt)
         4. [Session memory update instructions (Agent Prompt)](#4114-session-memory-update-instructions-agent-prompt)
         5. [Session memory template (Data)](#4115-session-memory-template-data)
         6. [Description part of memory instructions (System Prompt)](#4116-description-part-of-memory-instructions-system-prompt)
         7. [Agent memory instructions (System Prompt)](#4117-agent-memory-instructions-system-prompt)
      2. [Context Compaction and Conversation Summarization](#412-context-compaction-and-conversation-summarization)
         1. [Context compaction summary (System Prompt)](#4121-context-compaction-summary-system-prompt)
         2. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#4122-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
         3. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#4123-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
         4. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#4124-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
         5. [Conversation summarization (Agent Prompt)](#4125-conversation-summarization-agent-prompt)
         6. [Recent Message Summarization (Agent Prompt)](#4126-recent-message-summarization-agent-prompt)
      3. [Session Lifecycle and State Management](#413-session-lifecycle-and-state-management)
         1. [Session continuation (System Reminder)](#4131-session-continuation-system-reminder)
         2. [Session title and branch generation (Agent Prompt)](#4132-session-title-and-branch-generation-agent-prompt)
         3. [Session Search Assistant (Agent Prompt)](#4133-session-search-assistant-agent-prompt)
         4. [Scratchpad directory (System Prompt)](#4134-scratchpad-directory-system-prompt)
   2. [Automation, Hooks, and Resource Monitoring](#42-automation-hooks-and-resource-monitoring)
      1. [Hook System](#421-hook-system)
         1. [Hooks Configuration (System Prompt)](#4211-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#4212-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#4213-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation prefix (System Reminder)](#4214-hook-stopped-continuation-prefix-system-reminder)
         5. [Hook stopped continuation (System Reminder)](#4215-hook-stopped-continuation-system-reminder)
         6. [Hook success (System Reminder)](#4216-hook-success-system-reminder)
         7. [Hook condition evaluator (Agent Prompt)](#4217-hook-condition-evaluator-agent-prompt)
         8. [Agent Hook (Agent Prompt)](#4218-agent-hook-agent-prompt)
      2. [Tool Permission and Denial Handling](#422-tool-permission-and-denial-handling)
         1. [Tool execution denied (System Prompt)](#4221-tool-execution-denied-system-prompt)
         2. [Tool permission mode (System Prompt)](#4222-tool-permission-mode-system-prompt)
         3. [ToolSearch extended (Tool Description)](#4223-toolsearch-extended-tool-description)
      3. [MCP Resource Content States](#423-mcp-resource-content-states)
         1. [MCP resource no content (System Reminder)](#4231-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#4232-mcp-resource-no-displayable-content-system-reminder)
      4. [Resource Consumption Tracking](#424-resource-consumption-tracking)
         1. [Token usage (System Reminder)](#4241-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#4242-usd-budget-system-reminder)
5. [Code Quality, Engineering Practices, and Agent Design](#5-code-quality-engineering-practices-and-agent-design)
   1. [Engineering Discipline and Security](#51-engineering-discipline-and-security)
      1. [Pragmatic Code Development Discipline](#511-pragmatic-code-development-discipline)
         1. [Doing tasks (avoid over-engineering) [System Prompt]](#5111-doing-tasks-avoid-over-engineering-system-prompt)
         2. [Doing tasks (no premature abstractions) [System Prompt]](#5112-doing-tasks-no-premature-abstractions-system-prompt)
         3. [Doing tasks (no unnecessary error handling) [System Prompt]](#5113-doing-tasks-no-unnecessary-error-handling-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#5114-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no unnecessary additions) [System Prompt]](#5115-doing-tasks-no-unnecessary-additions-system-prompt)
         6. [Doing tasks (minimize file creation) [System Prompt]](#5116-doing-tasks-minimize-file-creation-system-prompt)
         7. [Doing tasks (read before modifying) [System Prompt]](#5117-doing-tasks-read-before-modifying-system-prompt)
         8. [Doing tasks (software engineering focus) [System Prompt]](#5118-doing-tasks-software-engineering-focus-system-prompt)
         9. [Doing tasks (ambitious tasks) [System Prompt]](#5119-doing-tasks-ambitious-tasks-system-prompt)
         10. [Doing tasks (no time estimates) [System Prompt]](#51110-doing-tasks-no-time-estimates-system-prompt)
         11. [Doing tasks (blocked approach) [System Prompt]](#51111-doing-tasks-blocked-approach-system-prompt)
      2. [Security and Safe Operation](#512-security-and-safe-operation)
         1. [Doing tasks (security) [System Prompt]](#5121-doing-tasks-security-system-prompt)
         2. [Executing actions with care (System Prompt)](#5122-executing-actions-with-care-system-prompt)
         3. [Censoring assistance with malicious activities (System Prompt)](#5123-censoring-assistance-with-malicious-activities-system-prompt)
         4. [Malware analysis after Read tool call (System Reminder)](#5124-malware-analysis-after-read-tool-call-system-reminder)
         5. [Bash command prefix detection (Agent Prompt)](#5125-bash-command-prefix-detection-agent-prompt)
         6. [/security-review slash command (Agent Prompt)](#5126-security-review-slash-command-agent-prompt)
      3. [Verification and Testing](#513-verification-and-testing)
         1. [Verification specialist (Agent Prompt)](#5131-verification-specialist-agent-prompt)
         2. [Verification specialist (Skill)](#5132-verification-specialist-skill)
         3. [Create verifier skills (Skill)](#5133-create-verifier-skills-skill)
      4. [Code Review and Refactoring](#514-code-review-and-refactoring)
         1. [Simplify (Skill)](#5141-simplify-skill)
   2. [Documentation, Skills, and Learning](#52-documentation-skills-and-learning)
      1. [Documentation and Knowledge Capture](#521-documentation-and-knowledge-capture)
         1. [CLAUDE.md creation (Agent Prompt)](#5211-claudemd-creation-agent-prompt)
         2. [Update Magic Docs (Agent Prompt)](#5212-update-magic-docs-agent-prompt)
         3. [Common suffix (response format) [Agent Prompt]](#5213-common-suffix-response-format-agent-prompt)
      2. [Skill System](#522-skill-system)
         1. [Skill (Tool Description)](#5221-skill-tool-description)
         2. [Skillify Current Session (System Prompt)](#5222-skillify-current-session-system-prompt)
         3. [Invoked skills (System Reminder)](#5223-invoked-skills-system-reminder)
         4. [Sleep (Tool Description)](#5224-sleep-tool-description)
      3. [Learning and Collaborative Mode](#523-learning-and-collaborative-mode)
         1. [Learning mode (System Prompt)](#5231-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#5232-learning-mode-insights-system-prompt)
   3. [Agent Design and User Interaction](#53-agent-design-and-user-interaction)
      1. [Agent Design and Architecture](#531-agent-design-and-architecture)
         1. [Agent creation architect (Agent Prompt)](#5311-agent-creation-architect-agent-prompt)
         2. [Status line setup (Agent Prompt)](#5312-status-line-setup-agent-prompt)
         3. [Agent thread notes (System Prompt)](#5313-agent-thread-notes-system-prompt)
         4. [Agent Summary Generation (System Prompt)](#5314-agent-summary-generation-system-prompt)
      2. [User Interaction and Question Handling](#532-user-interaction-and-question-handling)
         1. [AskUserQuestion (Tool Description)](#5321-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#5322-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#5323-option-previewer-system-prompt)
         4. [/btw side question (System Reminder)](#5324-btw-side-question-system-reminder)
         5. [Doing tasks (help and feedback) [System Prompt]](#5325-doing-tasks-help-and-feedback-system-prompt)
      3. [Sentiment Analysis and User Intent Detection](#533-sentiment-analysis-and-user-intent-detection)
         1. [User sentiment analysis (Agent Prompt)](#5331-user-sentiment-analysis-agent-prompt)
         2. [Prompt Suggestion Generator v2 (Agent Prompt)](#5332-prompt-suggestion-generator-v2-agent-prompt)
      4. [Worker and Workflow Execution](#534-worker-and-workflow-execution)
         1. [Worker instructions (System Prompt)](#5341-worker-instructions-system-prompt)
      5. [Configuration, Debugging, and Documentation](#535-configuration-debugging-and-documentation)
         1. [Update Claude Code Config (Skill)](#5351-update-claude-code-config-skill)
         2. [Debugging (Skill)](#5352-debugging-skill)
         3. [Bash command description writer (Agent Prompt)](#5353-bash-command-description-writer-agent-prompt)
   4. [Output Formatting and Usage Analytics](#54-output-formatting-and-usage-analytics)
      1. [Output Formatting and Communication Style](#541-output-formatting-and-communication-style)
         1. [Tone and style (concise output — detailed) [System Prompt]](#5411-tone-and-style-concise-output-—-detailed-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#5412-tone-and-style-concise-output-—-short-system-prompt)
         3. [Tone and style (code references) [System Prompt]](#5413-tone-and-style-code-references-system-prompt)
         4. [Output efficiency (System Prompt)](#5414-output-efficiency-system-prompt)
         5. [Output style active (System Reminder)](#5415-output-style-active-system-reminder)
      2. [Usage Insights and Analytics](#542-usage-insights-and-analytics)
         1. [Insights at a glance summary (System Prompt)](#5421-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#5422-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#5423-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#5424-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#5425-insights-suggestions-system-prompt)
6. [Claude API, SDKs, and Developer Integration](#6-claude-api-sdks-and-developer-integration)
   1. [Core API and SDK References](#61-core-api-and-sdk-references)
      1. [Claude API SDK References](#611-claude-api-sdk-references)
         1. [Claude API reference — Python (Data)](#6111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#6112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#6113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#6114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#6115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#6116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#6117-claude-api-reference-—-c-data)
         8. [Claude model catalog (Data)](#6118-claude-model-catalog-data)
      2. [API Error Handling and Documentation Sources](#612-api-error-handling-and-documentation-sources)
         1. [HTTP error codes reference (Data)](#6121-http-error-codes-reference-data)
         2. [Live documentation sources (Data)](#6122-live-documentation-sources-data)
   2. [Agent SDK, Tool Use, and Streaming](#62-agent-sdk-tool-use-and-streaming)
      1. [Agent SDK References and Patterns](#621-agent-sdk-references-and-patterns)
         1. [Agent SDK reference — Python (Data)](#6211-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#6212-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#6213-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#6214-agent-sdk-patterns-—-typescript-data)
      2. [Tool Use and Streaming API References](#622-tool-use-and-streaming-api-references)
         1. [Tool use concepts (Data)](#6221-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6222-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6223-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#6224-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#6225-streaming-reference-—-typescript-data)
   3. [Files, Batch, and CI/CD Integration](#63-files-batch-and-cicd-integration)
      1. [Files API and Batch Processing References](#631-files-api-and-batch-processing-references)
         1. [Files API reference — Python (Data)](#6311-files-api-reference-—-python-data)
         2. [Files API reference — TypeScript (Data)](#6312-files-api-reference-—-typescript-data)
         3. [Message Batches API reference — Python (Data)](#6313-message-batches-api-reference-—-python-data)
      2. [GitHub Integration and CI/CD](#632-github-integration-and-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#6321-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#6322-github-app-installation-pr-description-data)
   4. [Build with Claude API Skill](#64-build-with-claude-api-skill)
      1. [Build with Claude API (Skill)](#641-build-with-claude-api-skill)
      2. [Build with Claude API (reference guide) [Skill]](#642-build-with-claude-api-reference-guide-skill)
      3. [Claude guide agent (Agent Prompt)](#643-claude-guide-agent-agent-prompt)

---

## 1. Shell Command Execution and Sandbox Control

Covers how bash commands are executed, sandboxed, and managed—including session persistence, security restrictions, async background tasks, and when to use dedicated tools instead of shell commands.

### 1.1 Bash Command Execution and Session Management

Bash executes shell commands and returns output, with working directory persisting across commands while shell state resets. Commands should use absolute paths, chain dependent operations with &&, and run independent commands in parallel tool calls. File paths with spaces require quoting, and parent directories should be verified before creation.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Defines the Bash tool as executing bash commands and returning their output.

#### 1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs Claude to write clear, concise descriptions of bash commands, with more detail for complex or piped commands.

#### 1.1.3 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between commands, but shell state does not and is initialized from user profile.

#### 1.1.4 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to use absolute paths and avoid cd commands to maintain current working directory throughout the session.

#### 1.1.5 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits Claude from using newlines to separate bash commands.

#### 1.1.6 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call to ensure sequential execution and failure propagation.

#### 1.1.7 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to make multiple parallel Bash tool calls for independent commands in a single message.

#### 1.1.8 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but you don't care if earlier commands fail.

#### 1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Bash commands support optional timeout configuration in milliseconds, with configurable maximum and default timeout values.

#### 1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, use ls to verify the parent directory exists and is the correct location.

#### 1.1.11 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

### 1.2 Sandbox Security and Restriction Management

All bash commands run in mandatory sandbox mode by default, with no exceptions or bypass options. When sandbox restrictions cause failures—indicated by access denied, operation not permitted, or network errors—immediately retry with sandbox disabled and explain the restriction to the user. Sensitive paths like credentials and shell config files must never be added to the allowlist.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When a command fails due to sandbox restrictions, work with the user to adjust sandbox settings instead of bypassing them.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Default to running commands within the sandbox; only disable it when the user explicitly requests it or clear evidence of sandbox restriction exists.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that a failure was caused by sandbox restrictions.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors for file or network operations signal sandbox restrictions.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition where a command fails with clear evidence of sandbox restrictions, distinguishing sandbox-related failures from other causes.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; even if a recent command ran with dangerouslyDisableSandbox enabled, default to sandbox for future commands.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing how to respond when sandbox-caused failures are detected.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true when sandbox failure is detected, without asking the user first.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

For temporary files in sandbox mode, always use the $TMPDIR environment variable or ${SANDBOX_TMPDIR_FN()} fallback instead of /tmp directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will prompt the user for permission.

### 1.3 Asynchronous Execution and Sleep Management

Long-running commands should use run_in_background to receive completion notifications rather than polling with sleep loops. Sleep durations must stay short (1-5 seconds) to avoid blocking users, and commands that can run immediately should execute directly without delays. Polling external processes uses check commands instead of sleep-first patterns.

#### 1.3.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.3.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

#### 1.3.3 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Do not retry failing commands in sleep loops; diagnose the root cause or consider an alternative approach.

#### 1.3.4 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; execute them directly.

#### 1.3.5 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

When polling an external process, use check commands like gh run view instead of sleeping first.

#### 1.3.6 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Use run_in_background for long-running commands to receive completion notifications without needing to sleep.

### 1.4 Bash Tool Alternatives and Best Practices

Dedicated tools provide better transparency and user experience than bash equivalents for file operations, text processing, and output. Use dedicated Read, Write, Glob, Grep, and Edit tools instead of cat, echo, find, grep, and sed/awk respectively. Output text directly rather than through echo or printf.

#### 1.4.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat, head, tail, sed, awk, or echo commands, preferring dedicated tools instead.

#### 1.4.2 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and transparency than Bash equivalents.

#### 1.4.3 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Directs Claude to output text directly rather than using echo or printf.

#### 1.4.4 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use a dedicated Grep tool instead of grep or rg for content search.

#### 1.4.5 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use a dedicated Edit tool instead of sed or awk for file editing.

#### 1.4.6 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use a dedicated Glob tool instead of find or ls for file search.

#### 1.4.7 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use a dedicated Read tool instead of cat, head, or tail for file reading.

#### 1.4.8 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use a dedicated Write tool instead of echo or cat for file writing.

---

## 2. File Access, Search, and Version Control

Dedicated tools for reading, writing, and searching files alongside Git workflows for commits, pull requests, and code review—plus IDE integration for real-time file state awareness.

### 2.1 File System Tools

Dedicated tools for reading, writing, editing, and searching files with specialized support for code intelligence, notebooks, and pattern matching. These replace shell commands with precise, purpose-built operations.

#### 2.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Read files from filesystem with configurable line limits, supporting images, PDFs, and Jupyter notebooks with optional page ranges.

#### 2.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem with full overwrite capability. Prefers the Edit tool for modifications, avoids creating documentation files unless explicitly requested, and restricts emoji usage to user-specified cases.

#### 2.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with precise indentation matching and support for replace_all operations across entire files.

#### 2.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like **/*.js, returning results sorted by modification time.

#### 2.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting regex patterns, file filtering, and multiple output modes for content discovery.

#### 2.1.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edit Jupyter notebook cells by completely replacing contents, supporting insert and delete operations with 0-indexed cell numbering.

#### 2.1.7 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Language Server Protocol integration providing code intelligence operations including definitions, references, hover info, and call hierarchies.

### 2.2 File Reading State and Errors

Boundary conditions and error states encountered during file access. Handles truncation of large files, offset overruns, empty files, and context constraints, guiding Claude to use read tools for complete content without exposing implementation details.

#### 2.2.1 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Informs Claude that a large file was truncated to a maximum line limit and instructs use of the read tool for additional content without disclosing truncation to the user.

#### 2.2.2 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude when a file read offset exceeds the file's actual length, providing total line count.

#### 2.2.3 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

#### 2.2.4 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a previously read file is too large to include in context and directs it to use the Read tool if needed.

### 2.3 IDE Integration and File State Notifications

Real-time awareness of IDE interactions and external file changes. Notifies Claude of user selections, file opens, and linter modifications with contextual diffs, maintaining synchronization between editor state and conversation context.

#### 2.3.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

#### 2.3.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of line selection in the IDE with the selected content, noting it may or may not relate to the current task.

#### 2.3.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides a diff snippet to account for the changes.

#### 2.3.4 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues with a summary of problems.

### 2.4 Git Version Control and Code Review Workflows

Git operations include creating commits and pull requests with safety protocols: never commit without explicit user request, create new commits rather than amending, and never skip hooks or signing. Destructive operations like reset --hard and force pushes require careful consideration. Integrated workflows support PR creation, code review analysis, comment fetching, and git status reporting with branch context.

#### 2.4.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Advises Claude to consider safer alternatives before running destructive git operations like reset --hard or push --force.

#### 2.4.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests, covering safety protocols, commit message drafting, hook handling, and PR creation with gh command. Emphasizes never committing without explicit user request and always creating new commits rather than amending.

#### 2.4.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits Claude from skipping hooks or bypassing signing unless explicitly requested by the user.

#### 2.4.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Directs Claude to create new commits rather than amending existing ones.

#### 2.4.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create isolated git worktree when user explicitly requests it, switching session into new worktree with optional custom naming.

#### 2.4.6 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Streamlined prompt for creating single git commits with pre-populated context, analyzing staged changes, drafting messages following repository conventions, and enforcing safety protocols against amending or skipping hooks.

#### 2.4.7 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Streamlined prompt for creating commits and pull requests with pre-populated git context, branch creation, and PR body generation. Enforces git safety protocols and prevents force pushes to main branches.

#### 2.4.8 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and review comments with code context, formatted with file paths, line numbers, and threaded replies.

#### 2.4.9 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Conducts expert code reviews of GitHub pull requests, analyzing changes for code quality, style, improvements, and risks including correctness, conventions, performance, testing, and security.

#### 2.4.10 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status including branch, main branch reference, file status, and recent commits at conversation start.

### 2.5 Web and Browser Access

Programmatic browser control for UI interaction and web search with source citation for retrieving current information beyond training data.

#### 2.5.1 Browser Automation

Control Chrome browser programmatically through mouse, keyboard, and screenshot operations to interact with web interfaces. Includes debugging utilities, visual inspection tools, and guidelines for handling alerts and managing browser state across multiple tabs.

##### 2.5.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Use mouse and keyboard to interact with Chrome browser, take screenshots, and click elements by consulting coordinates before moving cursor.

##### 2.5.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameters for Chrome browser automation including mouse operations (click, drag, hover), keyboard input, scrolling, screenshots, and zoom for visual inspection of page elements.

##### 2.5.1.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for using Claude in Chrome browser automation tools including GIF recording, console debugging, alert handling, avoiding loops, and tab context management.

##### 2.5.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use to enable browser automation capabilities.

#### 2.5.2 Web Search and Content Fetching

Access current information beyond training data through web search with mandatory source citation, and extract content from URLs by converting HTML to markdown. Specialized summarization respects copyright constraints by enforcing quote limits on untrusted domains while preserving detail from trusted sources.

##### 2.5.2.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Enables Claude to search the web for current information beyond its knowledge cutoff, with results formatted as markdown links. Requires mandatory inclusion of a Sources section listing all relevant URLs at the end of responses, and supports domain filtering with US-only availability.

##### 2.5.2.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetch and analyze web content from URLs by converting HTML to markdown and processing with AI model, supporting caching and redirect handling.

##### 2.5.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model with conditional handling: trusted domains receive full detail, untrusted domains enforce strict quote limits and paraphrasing requirements to respect copyright and licensing.

---

## 3. Planning, Task Tracking, and Agent Coordination

Structured planning workflows, task breakdown and progress tracking, multi-agent orchestration, and tool usage policies that govern how work is delegated and parallelized.

### 3.1 Tool Usage Policy and Preferences

System directives establishing Claude's default tool choices for file operations, searches, and task delegation, prioritizing dedicated tools over shell commands and enabling subagent parallelization for complex exploration.

#### 3.1.1 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Directs Claude to use the Write tool instead of cat heredoc or echo redirection for file creation.

#### 3.1.2 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs Claude to use the Edit tool instead of sed or awk for file modifications.

#### 3.1.3 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool instead of cat, head, tail, or sed for file access.

#### 3.1.4 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Directs Claude to reserve the Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

#### 3.1.5 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs Claude to use the Grep tool instead of grep or rg for searching file contents.

#### 3.1.6 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Directs Claude to use the Glob tool instead of find or ls for file searches.

#### 3.1.7 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob or Grep tools directly for simple, targeted codebase searches.

#### 3.1.8 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Recommends using the Task tool with an exploration subagent for broad codebase research when simple directed searches prove insufficient or exceed query limits.

#### 3.1.9 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Guides Claude to use the Task tool with specialized subagents for parallelizing queries and protecting context, while avoiding duplicate work already performed by subagents.

#### 3.1.10 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Directs Claude to use TodoWrite to break down work, track progress, and mark tasks complete immediately upon finishing.

#### 3.1.11 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Explains that slash commands invoke user-invocable skills via the Skill tool and restricts usage to listed skills only, not guessed or built-in CLI commands.

#### 3.1.12 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while maintaining sequential execution for dependent calls.

### 3.2 Planning Mode

A structured workflow that freezes execution and restricts modifications to a plan file, enabling exploration and design phases with user approval gates before implementation on non-trivial tasks.

#### 3.2.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transition into plan mode to explore codebase and design implementation approaches for user approval before writing code on non-trivial tasks.

#### 3.2.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning phase by reading plan file and requesting user approval before proceeding with implementation.

#### 3.2.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode constraints and guides Claude through a five-phase workflow: initial understanding with parallel exploration agents, design with planning agents, review, final plan writing, and plan mode exit. Prohibits all edits except to the plan file and non-readonly tool execution.

#### 3.2.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning with the user through exploration, plan file updates, and user questioning loops. Restricts edits to the plan file only and prohibits non-readonly tool execution until plan approval.

#### 3.2.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagent actions to read-only operations and plan file editing, prohibiting execution and system modifications while enabling comprehensive query answering and clarifying questions.

#### 3.2.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit by instructing it to read the existing plan, evaluate relevance to the new request, and decide whether to continue or overwrite the plan.

#### 3.2.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that it has exited plan mode and can now execute edits, tools, and actions, with optional reference to the plan file location.

#### 3.2.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and instructs Claude to continue working on it if relevant and incomplete.

#### 3.2.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

#### 3.2.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases and designs implementation plans, identifying critical files and architectural trade-offs without modifying code.

### 3.3 Task and Todo Management

Tools and reminders for breaking down work into tracked tasks with state management, enabling progress visibility and structured completion verification throughout coding sessions.

#### 3.3.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Create and manage task lists for coding sessions with state tracking (pending/in_progress/completed), supporting complex multi-step tasks with active form descriptions.

#### 3.3.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Create structured task lists for coding sessions to track progress on complex multi-step tasks with clear descriptions and acceptance criteria.

#### 3.3.3 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task tracking if relevant to current work.

#### 3.3.4 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Informs Claude that task output can be checked using the TaskOutput tool.

#### 3.3.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task creation and update tools for progress tracking when relevant, with explicit instruction not to mention this reminder to the user.

#### 3.3.6 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Defines rules for generating brief, past-tense summaries of tool usage and coding work, focusing on user-visible outcomes in under 8 words without self-referential language.

### 3.4 Multi-Agent Orchestration

Swarm coordination of parallel agent teams through shared task lists and messaging, plus sub-agent delegation for specialized codebase exploration and isolated implementation.

#### 3.4.1 Multi-Agent Team Coordination and Swarm

Orchestrate teams of agents working in parallel on complex projects through shared task lists, direct messaging, and graceful lifecycle management. Agents discover work by claiming unblocked tasks, communicate via broadcast or direct channels, and coordinate shutdown procedures to clean up resources.

##### 3.4.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Create and manage teams for coordinating multiple agents on complex projects, with shared task lists, automatic message delivery, and teammate idle state management.

##### 3.4.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Remove team and task directories after swarm work completion, requiring all teammates to be terminated first.

##### 3.4.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Send direct messages or broadcasts to teammates, handle shutdown requests/responses, and manage plan approval in swarm coordination.

##### 3.4.1.4 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Teammates discover available work by checking task list for pending unblocked tasks, claiming ownership and following ID order preference.

##### 3.4.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity and resources, instructing it to read team config, manage task lists, and communicate with teammates using their names rather than UUIDs.

##### 3.4.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before returning a final response in non-interactive mode.

##### 3.4.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs Claude to use the SendMessage tool to communicate with teammates in a swarm environment, with messages directed to specific agents or broadcast to the team.

##### 3.4.1.8 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes across 5-30 independent work units. Researches scope, decomposes tasks, determines end-to-end test recipes, spawns background worker agents, and tracks progress across parallel PRs.

#### 3.4.2 Sub-Agent Task Delegation

Delegate specialized work to focused sub-agents that operate with constrained capabilities—exploration agents navigate codebases read-only using pattern matching, while task agents handle research and implementation in isolated worktrees. The orchestrator invokes agents with appropriate context and receives structured results.

##### 3.4.2.1 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launch specialized sub-agents for complex tasks including research, exploration, and implementation with optional background execution and worktree isolation.

##### 3.4.2.2 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist for navigating codebases using glob patterns, regex grep, and file reading. Strictly prohibited from creating, modifying, or deleting files; returns findings as absolute paths.

##### 3.4.2.3 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines strengths and behavioral guidelines for codebase exploration, emphasizing search strategies, thoroughness, and prohibition on unnecessary file creation or documentation generation.

##### 3.4.2.4 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and instructs it to do so with appropriate context.

---

## 4. Session State, Memory, and Automation Hooks

Infrastructure for persisting context across sessions—memory files, conversation compaction, session lifecycle management—plus event-driven hooks for lifecycle automation and tool permission handling.

### 4.1 Memory and Context Persistence

Structured memory files that capture task progress and codebase knowledge, conversation summarization for compact resumable state, and session identity management across machines.

#### 4.1.1 Session Memory and Context Management

Maintain persistent session state across conversations through structured memory files that capture task progress, codebase learnings, and workflow context. Memory selection agents filter relevant files by query, while update agents preserve structure while enriching content with actionable information.

##### 4.1.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Presents the contents of a memory file by path with type description.

##### 4.1.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

##### 4.1.1.3 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects up to 5 relevant memory files from available options based on user query, prioritizing memories that will clearly assist Claude Code in processing the request.

##### 4.1.1.4 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session memory files by editing existing sections with detailed, info-dense content while preserving structure, headers, and italic descriptions. Focuses on actionable information and maintains current state for continuity.

##### 4.1.1.5 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files organizing current state, task specification, files, workflow, errors, codebase documentation, learnings, and worklog.

##### 4.1.1.6 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Guidelines for writing user memory descriptions that capture role, goals, and preferences to enable personalized assistance without negative judgements.

##### 4.1.1.7 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

#### 4.1.2 Context Compaction and Conversation Summarization

Mechanisms for distilling conversation history into compact, resumable state representations. Analyzes chronological message flow to extract user intent, technical decisions, errors, and pending work, enabling efficient context preservation across session boundaries.

##### 4.1.2.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for generating continuation summaries during context compaction, covering task overview, current state, discoveries, next steps, and context preservation for efficient resumption.

##### 4.1.2.2 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

Analysis instructions for context compaction that require chronological review of all conversation messages, identifying user intents, technical decisions, specific details, errors, and user feedback.

##### 4.1.2.3 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Lean experimental version of compaction analysis instructions using analysis tags as planning scratchpad rather than detailed documentation.

##### 4.1.2.4 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

Analysis instructions for context compaction focusing on recent messages, identifying user requests, approach, technical decisions, specific details, errors, and user feedback.

##### 4.1.2.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing primary requests, technical concepts, files examined, errors encountered, problem-solving efforts, user messages, pending tasks, and next steps with direct quotes.

##### 4.1.2.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, capturing requests, technical concepts, files, errors, problem-solving, and next steps with direct quotes.

#### 4.1.3 Session Lifecycle and State Management

Infrastructure for tracking and organizing work sessions across machines and time. Manages session identity through naming conventions, enables cross-session discovery via metadata-driven search, and maintains isolated working environments.

##### 4.1.3.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

##### 4.1.3.2 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, 'claude/' prefix, lowercase with dashes) from session descriptions.

##### 4.1.3.3 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user queries by prioritizing tag matches, then title, branch, summary, and transcript content. Returns inclusive results ordered by relevance.

##### 4.1.3.4 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

### 4.2 Automation, Hooks, and Resource Monitoring

Event-driven hook framework for lifecycle automation, tool permission and denial handling, and real-time tracking of token and cost resource consumption.

#### 4.2.1 Hook System

Event-driven automation framework that executes commands or agents at lifecycle boundaries—before/after tool use, session start—with condition evaluation and error handling. Enables external integrations and workflow control through structured hook outputs.

##### 4.2.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide for configuring lifecycle hooks in Claude Code that run commands or agents at specific events like PreToolUse, PostToolUse, and SessionStart. Supports command, prompt, and agent hook types with JSON output control.

##### 4.2.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Delivers additional context information from a hook execution.

##### 4.2.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 4.2.1.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix label for messages indicating a hook stopped continuation.

##### 4.2.1.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook stopped continuation with an associated message.

##### 4.2.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful completion of a hook with its output content.

##### 4.2.1.7 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether a condition is met or providing a reason for failure.

##### 4.2.1.8 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured output indicating whether an agent completed its assigned plan.

#### 4.2.2 Tool Permission and Denial Handling

Guidelines for responding to tool access restrictions, including graceful degradation strategies, permission mode awareness, and tool discovery mechanisms when capabilities are unavailable.

##### 4.2.2.1 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides Claude to attempt reasonable workarounds when a tool is denied, avoid malicious bypasses, and escalate to the user if the capability is essential to completing the request.

##### 4.2.2.2 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains that tools operate under user-selected permission modes and instructs Claude not to retry denied tool calls, but instead adjust approach and optionally ask the user for clarification.

##### 4.2.2.3 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Search and load deferred tools using keyword search, direct selection, or required keyword modes to discover and access available tools.

#### 4.2.3 MCP Resource Content States

Signals indicating MCP resources that exist but lack accessible content, whether entirely empty or non-displayable.

##### 4.2.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates an MCP resource exists but contains no content.

##### 4.2.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates an MCP resource exists but has no displayable content.

#### 4.2.4 Resource Consumption Tracking

Real-time monitoring of token and financial resource usage, enabling visibility into computational and cost expenditure.

##### 4.2.4.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token consumption statistics.

##### 4.2.4.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget consumption statistics.

---

## 5. Code Quality, Engineering Practices, and Agent Design

Engineering discipline for writing minimal, secure, well-documented code alongside frameworks for designing agents, capturing reusable skills, managing user interaction, and analyzing usage patterns.

### 5.1 Engineering Discipline and Security

Principles of minimal scope, pragmatic implementation, vulnerability prevention, automated verification, and systematic code review to maintain safe and comprehensible codebases.

#### 5.1.1 Pragmatic Code Development Discipline

Engineering principles emphasizing minimal scope, direct implementation, and deliberate avoidance of speculative abstractions, over-engineering, and unnecessary refactoring—prioritizing user intent and code comprehension over architectural purity.

##### 5.1.1.1 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Directive to make only directly requested or clearly necessary changes, keeping solutions simple and focused.

##### 5.1.1.2 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Prevents Claude from creating helpers or abstractions for one-time operations or hypothetical future requirements.

##### 5.1.1.3 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios and only validate at system boundaries.

##### 5.1.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims or deprecated markers.

##### 5.1.1.5 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directs Claude to avoid adding features, refactoring, or improvements beyond what was explicitly requested.

##### 5.1.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat and build on prior work.

##### 5.1.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing or making modifications.

##### 5.1.1.8 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks and instructs Claude to interpret instructions in that context.

##### 5.1.1.9 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Directive to enable users to complete ambitious tasks by deferring to user judgment on scope rather than imposing artificial limitations.

##### 5.1.1.10 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid providing time estimates or predictions for task completion.

##### 5.1.1.11 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Guidance to consider alternative approaches when blocked rather than brute-forcing the same action, using AskUserQuestion to align on the right path.

#### 5.1.2 Security and Safe Operation

Safeguards preventing vulnerability introduction, enforcing user confirmation for destructive operations, distinguishing authorized security work from malicious activity, and detecting command injection attacks through systematic analysis and validation.

##### 5.1.2.1 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities like injection, XSS, and OWASP top 10 risks.

##### 5.1.2.2 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to carefully evaluate action reversibility and blast radius, requesting user confirmation for destructive or hard-to-reverse operations like force-pushing, deleting files, or sending messages. Emphasizes investigating unexpected state before taking risky actions.

##### 5.1.2.3 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Security guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing malicious activities like DoS attacks and supply chain compromise.

##### 5.1.2.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but explicitly forbids improving or augmenting malicious code while permitting analysis, reporting, and behavioral questions.

##### 5.1.2.5 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety enforcement. Returns the command prefix or 'command_injection_detected' to protect against malicious command execution.

##### 5.1.2.6 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review analyzing code changes for exploitable vulnerabilities including injection attacks, authentication bypasses, cryptographic flaws, and data exposure. Filters false positives and prioritizes high-confidence findings with confidence scoring.

#### 5.1.3 Verification and Testing

Automated testing infrastructure that validates code changes through adversarial verification, discovering and executing appropriate test strategies (browser automation, API, CLI) while reporting detailed failures and edge-case coverage beyond standard happy-path scenarios.

##### 5.1.3.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Defines an adversarial verification agent that tests implementations by running builds, test suites, linters, and probes for edge cases and concurrency issues, issuing PASS/FAIL/PARTIAL verdicts with evidence of testing beyond happy-path scenarios.

##### 5.1.3.2 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Verification specialist skill for testing code changes by discovering verifier skills, analyzing git changes, creating deterministic verification plans, and triggering appropriate verifiers (Playwright, API, CLI) with detailed failure reporting.

##### 5.1.3.3 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Guide for creating verifier skills for the Verify agent, covering auto-detection of project types, setup of browser automation (Playwright, Chrome DevTools, Claude Chrome Extension), CLI and API verification tools, and authentication handling.

#### 5.1.4 Code Review and Refactoring

Parallel code analysis that identifies quality improvements by detecting reuse opportunities, architectural issues like leaky abstractions and parameter sprawl, and performance bottlenecks in hot paths.

##### 5.1.4.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel agents to check for code reuse opportunities, quality issues (redundant state, parameter sprawl, leaky abstractions), and efficiency problems (unnecessary work, missed concurrency, hot-path bloat).

### 5.2 Documentation, Skills, and Learning

Persistent architecture guides and design decision records, reusable slash-command skill definitions, and collaborative learning modes that solicit human input on design choices.

#### 5.2.1 Documentation and Knowledge Capture

Systematic documentation of codebases and project knowledge through architecture guides, build/test command catalogs, and design decision records that persist across sessions while maintaining terse, entry-point-focused formats.

##### 5.2.1.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md documentation, capturing common build/test commands, high-level architecture, and project-specific conventions for future Claude Code instances.

##### 5.2.1.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs an agent to update Magic Doc files by incorporating new learnings from conversations while preserving headers, maintaining current state, and following a terse documentation philosophy focused on architecture, entry points, and design decisions rather than implementation details.

##### 5.2.1.3 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise subagent reporting and detailed standalone writeups based on caller context.

#### 5.2.2 Skill System

Framework for creating and invoking reusable domain-specific capabilities through slash commands, with structured workflows that capture inputs, success criteria, and tool permissions into reproducible skill definitions.

##### 5.2.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Execute specialized skills within main conversation by invoking slash commands with optional arguments for domain-specific tasks.

##### 5.2.2.2 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a 4-round interview process to convert a session's repeatable workflow into a reusable skill, capturing inputs, steps, success criteria, and tool permissions in a SKILL.md file with support for inline or forked execution modes.

##### 5.2.2.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked in the current session and instructs Claude to continue following their guidelines.

##### 5.2.2.4 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Wait for specified duration with user interrupt capability and periodic check-in prompts, preferred over bash sleep for efficiency.

#### 5.2.3 Learning and Collaborative Mode

Interactive learning environment where Claude handles routine implementation while soliciting human input on design decisions, providing educational context about codebase-specific choices through structured TodoList tracking and guided learning requests.

##### 5.2.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt establishing collaborative human-AI interaction where Claude requests user contributions for design decisions while handling routine implementation, using TodoList tracking and structured Learn by Doing requests.

##### 5.2.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code writing in learning mode, focusing on implementation choices specific to the codebase.

### 5.3 Agent Design and User Interaction

System prompt construction, behavioral configuration, and status customization for custom agents, plus mechanisms for gathering user input, presenting choices, and detecting sentiment and intent.

#### 5.3.1 Agent Design and Architecture

Frameworks for designing, configuring, and operating custom AI agents, including system prompt construction, behavioral guidelines, status display customization, and action summarization.

##### 5.3.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user requirements, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces JSON output with agent identifier, usage conditions, and complete operational manual.

##### 5.3.1.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell configs, converting escape sequences to shell commands, and updating settings.json with custom statusLine commands that receive JSON context via stdin.

##### 5.3.1.3 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads requiring absolute file paths, relevant file sharing in responses, emoji avoidance, and proper punctuation around tool calls.

##### 5.3.1.4 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt for generating concise 3-5 word agent action summaries in present tense, naming specific files or functions rather than branches or vague descriptions.

#### 5.3.2 User Interaction and Question Handling

Mechanisms for gathering user input, presenting choices with visual previews, and handling contextual questions during agent execution with appropriate tool constraints and feedback channels.

##### 5.3.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes AskUserQuestion tool for gathering user preferences, clarifying requirements, and offering implementation choices during execution. Specifies plan-mode behavior and restrictions on referencing the plan in questions.

##### 5.3.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Documents the optional preview field for single-select questions, enabling visual display of HTML mockups, code snippets, and diagrams as self-contained fragments without script or style tags.

##### 5.3.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using optional preview fields with monospace markdown for ASCII mockups, code snippets, and diagrams.

##### 5.3.2.4 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Constrains Claude to answer side questions directly without tools, based only on conversation context, in a single response without promising further action.

##### 5.3.2.5 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users about available help and feedback channels when requested.

#### 5.3.3 Sentiment Analysis and User Intent Detection

Interprets user communication patterns to extract emotional state and actionable intent, detecting frustration signals and predicting likely next steps in conversation flow.

##### 5.3.3.1 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration and explicit pull request creation requests by examining conversation history for negative language and specific PR submission keywords, outputting boolean verdicts for frustration and PR intent.

##### 5.3.3.2 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on conversation context, suggesting specific follow-up commands or actions the user would likely type without offering evaluations or Claude-voice suggestions.

#### 5.3.4 Worker and Workflow Execution

Defines the operational sequence for implementing code changes, from simplification through testing to version control integration and stakeholder notification.

##### 5.3.4.1 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Outlines a five-step workflow for workers implementing changes: simplify code, run unit tests, perform end-to-end testing, commit and push with PR creation, and report the PR URL.

#### 5.3.5 Configuration, Debugging, and Documentation

Manages system configuration parameters, diagnoses runtime issues through log analysis, and generates technical documentation for command-line operations.

##### 5.3.5.1 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration in settings.json, covering hook setup (PreToolUse, PostToolUse, PreCompact), permission rules, environment variables, and MCP server configuration with careful merging of existing settings.

##### 5.3.5.2 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes.

##### 5.3.5.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions for bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy operations.

### 5.4 Output Formatting and Usage Analytics

Directives for concise, structured communication style and analysis of session data to surface workflow friction, feature adoption patterns, and actionable recommendations.

#### 5.4.1 Output Formatting and Communication Style

Directives controlling response clarity, brevity, and structure—eliminating filler while preserving essential information and enabling precise code navigation through standardized reference formats.

##### 5.4.1.1 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Directs Claude to produce polished, concise output without filler, repetition, or inner monologue, while preserving essential information and excluding code or tool calls from this constraint.

##### 5.4.1.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 5.4.1.3 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number format when referencing code to enable easy navigation to source locations.

##### 5.4.1.4 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning and limiting responses to essential information like decisions, status updates, and blockers.

##### 5.4.1.5 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

#### 5.4.2 Usage Insights and Analytics

Analyzes Claude Code session data to extract structured insights about user workflows, friction patterns, and satisfaction signals, then synthesizes findings into actionable recommendations for feature adoption, personalization, and future capability planning.

##### 5.4.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a concise 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for future models based on aggregated Claude Code usage data.

##### 5.4.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with specific examples and actionable suggestions.

##### 5.4.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data analysis.

##### 5.4.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts including goal categories, user satisfaction signals, and friction points with strict guidelines for counting only explicit user requests.

##### 5.4.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns based on session analysis.

---

## 6. Claude API, SDKs, and Developer Integration

Reference documentation for building Claude-powered applications—language-specific SDKs, tool use and streaming APIs, file and batch processing, GitHub CI/CD integration, and architectural guidance for choosing the right patterns.

### 6.1 Core API and SDK References

Language-specific SDK documentation for Python, TypeScript, Go, Java, and others covering core API patterns, vision, prompt caching, error handling, and live documentation fetching.

#### 6.1.1 Claude API SDK References

Language-specific SDK documentation for integrating Claude across Python, TypeScript, Go, Java, Ruby, PHP, and C#, covering core API patterns, advanced features like vision and prompt caching, and the authoritative model catalog with pricing and context specifications.

##### 6.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering installation, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

##### 6.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Complete TypeScript SDK reference covering installation, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

##### 6.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, basic requests, streaming, and beta tool runner with automatic schema generation from struct tags.

##### 6.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, and beta tool use with annotated classes and automatic tool runner.

##### 6.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

##### 6.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference with client initialization for standard API, Amazon Bedrock, Google Vertex AI, and Anthropic Foundry, plus basic requests and streaming.

##### 6.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic message requests, streaming, and manual tool use via JSON schema definitions.

##### 6.1.1.8 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Authoritative catalog of current, legacy, deprecated, and retired Claude models with exact model IDs, aliases, context windows, max output tokens, and user-request resolution mapping.

#### 6.1.2 API Error Handling and Documentation Sources

Reference materials for diagnosing and resolving Claude API failures, including HTTP error codes with language-specific exception patterns and live documentation fetching for current API specifications.

##### 6.1.2.1 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes with common causes, fixes, and language-specific typed exception handling patterns for Python and TypeScript.

##### 6.1.2.2 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and official GitHub repositories, with extraction prompts for each topic.

### 6.2 Agent SDK, Tool Use, and Streaming

Guides for building autonomous agents with the Agent SDK, defining tools, executing agentic loops, streaming responses, and generating structured outputs with type-safe schemas.

#### 6.2.1 Agent SDK References and Patterns

Comprehensive guides for building autonomous agents with Python and TypeScript, covering the Agent SDK query interface, built-in tools, permission models, MCP integration, hooks for auditing, and practical patterns for subagents and session management.

##### 6.2.1.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP support, hooks, subagents, and best practices.

##### 6.2.1.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, query interface, built-in tools, permission modes, MCP support, in-process tools, hooks, and best practices.

##### 6.2.1.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Provides practical Python Agent SDK patterns including basic agents, custom tools via MCP, hooks for auditing, subagents, permission modes, error recovery, and session resumption with full code examples.

##### 6.2.1.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Demonstrates TypeScript Agent SDK patterns for basic agents, hooks, subagents, MCP integration, and session resumption with concise code examples.

#### 6.2.2 Tool Use and Streaming API References

Foundational concepts and language-specific implementations for defining tools, executing agentic loops, and streaming responses, including server-side capabilities like code execution and structured output generation with type-safe schemas.

##### 6.2.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool definitions and error handling.

##### 6.2.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python implementation guide for tool use including the tool runner with @beta_tool decorators, MCP tool conversion helpers, manual agentic loops, code execution with file uploads and container reuse, memory tool, and structured outputs with Pydantic.

##### 6.2.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript implementation guide for tool use featuring the tool runner with Zod schemas, manual agentic loops with streaming support, code execution with file uploads and container reuse, memory tool with handlers, and structured outputs using Zod.

##### 6.2.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, progress tracking, error handling, and stream event types.

##### 6.2.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript reference for streaming responses from Claude, covering basic streaming, handling thinking and text content blocks, tool use with streaming, and best practices for token usage and DOM updates.

### 6.3 Files, Batch, and CI/CD Integration

Asynchronous file upload APIs with citations, cost-optimized bulk batch processing, and GitHub Actions templates for AI-assisted code review and issue handling.

#### 6.3.1 Files API and Batch Processing References

APIs for asynchronous file handling and bulk message processing, enabling document and image uploads with citations, and cost-optimized batch operations at 50% discount with prompt caching integration.

##### 6.3.1.1 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for PDFs and images, file management operations, and end-to-end examples with citations.

##### 6.3.1.2 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference including file upload, usage in messages for documents and images, and file management operations.

##### 6.3.1.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for asynchronous bulk processing at 50% cost, covering batch creation, polling, result retrieval, cancellation, and integration with prompt caching.

#### 6.3.2 GitHub Integration and CI/CD

Automation templates for integrating Claude into GitHub workflows, enabling AI-assisted code review and issue handling through @mentions with configurable permissions and security controls.

##### 6.3.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues, PRs, and reviews with configurable tool permissions and custom prompts.

##### 6.3.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security model, and how to trigger Claude via @mentions.

### 6.4 Build with Claude API Skill

Comprehensive guidance for developing Claude-powered applications, covering language selection, architectural patterns, model capabilities, and documentation navigation across API, Agent SDK, and CLI tools.

#### 6.4.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking modes, and compaction for long conversations.

#### 6.4.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Quick reference template for navigating language-specific Claude API documentation, mapping common tasks to relevant reference sections for streaming, tool use, batches, and file uploads.

#### 6.4.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code CLI, Claude Agent SDK, and Claude API by fetching official documentation, answering feature questions, and providing actionable guidance with code examples and documentation references.
