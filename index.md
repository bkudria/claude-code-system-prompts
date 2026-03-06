# Claude Code System Prompts Index

Operational guidelines and reference material for building, deploying, and maintaining Claude-powered coding agents — covering everything from low-level execution safety to high-level multi-agent orchestration, with the developer experience and production reliability as the unifying concern.

## Table of Contents

1. [Bash & Shell Command Execution](#1-bash-shell-command-execution)
   1. [Bash Sandbox Security & Policy](#11-bash-sandbox-security-policy)
      1. [Bash (sandbox — adjust settings) [Tool Description]](#111-bash-sandbox-—-adjust-settings-tool-description)
      2. [Bash (sandbox — default to sandbox) [Tool Description]](#112-bash-sandbox-—-default-to-sandbox-tool-description)
      3. [Bash (sandbox — evidence: access denied) [Tool Description]](#113-bash-sandbox-—-evidence-access-denied-tool-description)
      4. [Bash (sandbox — evidence list header) [Tool Description]](#114-bash-sandbox-—-evidence-list-header-tool-description)
      5. [Bash (sandbox — evidence: network failures) [Tool Description]](#115-bash-sandbox-—-evidence-network-failures-tool-description)
      6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#116-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#117-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
      8. [Bash (sandbox — explain restriction) [Tool Description]](#118-bash-sandbox-—-explain-restriction-tool-description)
      9. [Bash (sandbox — failure evidence condition) [Tool Description]](#119-bash-sandbox-—-failure-evidence-condition-tool-description)
      10. [Bash (sandbox — mandatory mode) [Tool Description]](#1110-bash-sandbox-—-mandatory-mode-tool-description)
      11. [Bash (sandbox — no exceptions) [Tool Description]](#1111-bash-sandbox-—-no-exceptions-tool-description)
      12. [Bash (sandbox — no sensitive paths) [Tool Description]](#1112-bash-sandbox-—-no-sensitive-paths-tool-description)
      13. [Bash (sandbox — per-command) [Tool Description]](#1113-bash-sandbox-—-per-command-tool-description)
      14. [Bash (sandbox — response header) [Tool Description]](#1114-bash-sandbox-—-response-header-tool-description)
      15. [Bash (sandbox — retry without sandbox) [Tool Description]](#1115-bash-sandbox-—-retry-without-sandbox-tool-description)
      16. [Bash (sandbox — tmpdir) [Tool Description]](#1116-bash-sandbox-—-tmpdir-tool-description)
      17. [Bash (sandbox — user permission prompt) [Tool Description]](#1117-bash-sandbox-—-user-permission-prompt-tool-description)
   2. [Bash Command Execution & Syntax Rules](#12-bash-command-execution-syntax-rules)
      1. [Bash (maintain cwd) [Tool Description]](#121-bash-maintain-cwd-tool-description)
      2. [Bash (no newlines) [Tool Description]](#122-bash-no-newlines-tool-description)
      3. [Bash (overview) [Tool Description]](#123-bash-overview-tool-description)
      4. [Bash (parallel commands) [Tool Description]](#124-bash-parallel-commands-tool-description)
      5. [Bash (quote file paths) [Tool Description]](#125-bash-quote-file-paths-tool-description)
      6. [Bash (semicolon usage) [Tool Description]](#126-bash-semicolon-usage-tool-description)
      7. [Bash (sequential commands) [Tool Description]](#127-bash-sequential-commands-tool-description)
      8. [Bash (timeout) [Tool Description]](#128-bash-timeout-tool-description)
      9. [Bash (verify parent directory) [Tool Description]](#129-bash-verify-parent-directory-tool-description)
      10. [Bash (working directory) [Tool Description]](#1210-bash-working-directory-tool-description)
      11. [Bash (sleep — keep short) [Tool Description]](#1211-bash-sleep-—-keep-short-tool-description)
      12. [Bash (sleep — no polling background tasks) [Tool Description]](#1212-bash-sleep-—-no-polling-background-tasks-tool-description)
      13. [Bash (sleep — no retry loops) [Tool Description]](#1213-bash-sleep-—-no-retry-loops-tool-description)
      14. [Bash (sleep — run immediately) [Tool Description]](#1214-bash-sleep-—-run-immediately-tool-description)
      15. [Bash (sleep — use check commands) [Tool Description]](#1215-bash-sleep-—-use-check-commands-tool-description)
      16. [Bash (sleep — use run_in_background) [Tool Description]](#1216-bash-sleep-—-use-run_in_background-tool-description)
   3. [Bash Tool Alternatives & Preferred Tools](#13-bash-tool-alternatives-preferred-tools)
      1. [Bash (alternative — communication) [Tool Description]](#131-bash-alternative-—-communication-tool-description)
      2. [Bash (alternative — content search) [Tool Description]](#132-bash-alternative-—-content-search-tool-description)
      3. [Bash (alternative — edit files) [Tool Description]](#133-bash-alternative-—-edit-files-tool-description)
      4. [Bash (alternative — file search) [Tool Description]](#134-bash-alternative-—-file-search-tool-description)
      5. [Bash (alternative — read files) [Tool Description]](#135-bash-alternative-—-read-files-tool-description)
      6. [Bash (alternative — write files) [Tool Description]](#136-bash-alternative-—-write-files-tool-description)
      7. [Bash (built-in tools note) [Tool Description]](#137-bash-built-in-tools-note-tool-description)
      8. [Bash (command description) [Tool Description]](#138-bash-command-description-tool-description)
      9. [Bash (prefer dedicated tools) [Tool Description]](#139-bash-prefer-dedicated-tools-tool-description)
2. [File System, Editor & External Tool Access](#2-file-system-editor-external-tool-access)
   1. [File Tools & Access Policies](#21-file-tools-access-policies)
      1. [File System Tool Descriptions](#211-file-system-tool-descriptions)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Edit (Tool Description)](#2113-edit-tool-description)
         4. [Glob (Tool Description)](#2114-glob-tool-description)
         5. [Grep (Tool Description)](#2115-grep-tool-description)
         6. [LSP (Tool Description)](#2116-lsp-tool-description)
      2. [Tool Usage Policy & Preferences](#212-tool-usage-policy-preferences)
         1. [Tool usage (create files) [System Prompt]](#2121-tool-usage-create-files-system-prompt)
         2. [Tool usage (edit files) [System Prompt]](#2122-tool-usage-edit-files-system-prompt)
         3. [Tool usage (read files) [System Prompt]](#2123-tool-usage-read-files-system-prompt)
         4. [Tool usage (search content) [System Prompt]](#2124-tool-usage-search-content-system-prompt)
         5. [Tool usage (search files) [System Prompt]](#2125-tool-usage-search-files-system-prompt)
         6. [Tool usage (reserve Bash) [System Prompt]](#2126-tool-usage-reserve-bash-system-prompt)
         7. [Tool execution denied (System Prompt)](#2127-tool-execution-denied-system-prompt)
         8. [Tool permission mode (System Prompt)](#2128-tool-permission-mode-system-prompt)
         9. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#2129-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         10. [Tool Use Summary Generation (System Prompt)](#21210-tool-use-summary-generation-system-prompt)
      3. [File State & Reading Notifications](#213-file-state-reading-notifications)
         1. [File exists but empty (System Reminder)](#2131-file-exists-but-empty-system-reminder)
         2. [File truncated (System Reminder)](#2132-file-truncated-system-reminder)
         3. [File shorter than offset (System Reminder)](#2133-file-shorter-than-offset-system-reminder)
         4. [Session continuation (System Reminder)](#2134-session-continuation-system-reminder)
         5. [Token usage (System Reminder)](#2135-token-usage-system-reminder)
         6. [USD budget (System Reminder)](#2136-usd-budget-system-reminder)
   2. [Editor, Browser & Protocol Integrations](#22-editor-browser-protocol-integrations)
      1. [IDE & Editor Integration](#221-ide-editor-integration)
         1. [File opened in IDE (System Reminder)](#2211-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#2212-lines-selected-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#2213-file-modified-by-user-or-linter-system-reminder)
         4. [New diagnostics detected (System Reminder)](#2214-new-diagnostics-detected-system-reminder)
         5. [Output style active (System Reminder)](#2215-output-style-active-system-reminder)
      2. [MCP Integration](#222-mcp-integration)
         1. [MCP resource no content (System Reminder)](#2221-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#2222-mcp-resource-no-displayable-content-system-reminder)
         3. [Chrome browser MCP tools (System Prompt)](#2223-chrome-browser-mcp-tools-system-prompt)
         4. [ToolSearch extended (Tool Description)](#2224-toolsearch-extended-tool-description)
      3. [Browser Automation & Web Access](#223-browser-automation-web-access)
         1. [Computer (Tool Description)](#2231-computer-tool-description)
         2. [Computer action (Tool Parameter)](#2232-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#2233-claude-in-chrome-browser-automation-system-prompt)
         4. [WebFetch (Tool Description)](#2234-webfetch-tool-description)
         5. [WebSearch (Tool Description)](#2235-websearch-tool-description)
      4. [Jupyter Notebook Support](#224-jupyter-notebook-support)
         1. [NotebookEdit (Tool Description)](#2241-notebookedit-tool-description)
      5. [Scratchpad & Temporary File Management](#225-scratchpad-temporary-file-management)
         1. [Scratchpad directory (System Prompt)](#2251-scratchpad-directory-system-prompt)
3. [Multi-Agent Coordination & Workflow Automation](#3-multi-agent-coordination-workflow-automation)
   1. [Agent Launching & Coordination](#31-agent-launching-coordination)
      1. [Multi-Agent Orchestration & Subagent Management](#311-multi-agent-orchestration-subagent-management)
         1. [Agent (usage notes) [Tool Description]](#3111-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#3112-agent-when-to-launch-subagents-tool-description)
         3. [Fork usage guidelines (System Prompt)](#3113-fork-usage-guidelines-system-prompt)
         4. [Subagent delegation examples (System Prompt)](#3114-subagent-delegation-examples-system-prompt)
         5. [Writing subagent prompts (System Prompt)](#3115-writing-subagent-prompts-system-prompt)
         6. [Tool usage (subagent guidance) [System Prompt]](#3116-tool-usage-subagent-guidance-system-prompt)
         7. [Tool usage (delegate exploration) [System Prompt]](#3117-tool-usage-delegate-exploration-system-prompt)
         8. [Tool usage (direct search) [System Prompt]](#3118-tool-usage-direct-search-system-prompt)
         9. [Worker fork execution (Agent Prompt)](#3119-worker-fork-execution-agent-prompt)
         10. [Common suffix (response format) [Agent Prompt]](#31110-common-suffix-response-format-agent-prompt)
      2. [Team/Swarm Coordination](#312-teamswarm-coordination)
         1. [TeammateTool (Tool Description)](#3121-teammatetool-tool-description)
         2. [SendMessageTool (Tool Description)](#3122-sendmessagetool-tool-description)
         3. [TeamDelete (Tool Description)](#3123-teamdelete-tool-description)
         4. [TaskList (teammate workflow) [Tool Description]](#3124-tasklist-teammate-workflow-tool-description)
         5. [Team Coordination (System Reminder)](#3125-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#3126-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#3127-teammate-communication-system-prompt)
         8. [/batch slash command (Agent Prompt)](#3128-batch-slash-command-agent-prompt)
   2. [Planning, Task Tracking & Lifecycle Hooks](#32-planning-task-tracking-lifecycle-hooks)
      1. [Task Tracking & Todo Management](#321-task-tracking-todo-management)
         1. [TodoWrite (Tool Description)](#3211-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#3212-taskcreate-tool-description)
         3. [Task status (System Reminder)](#3213-task-status-system-reminder)
         4. [Task tools reminder (System Reminder)](#3214-task-tools-reminder-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#3215-todowrite-reminder-system-reminder)
         6. [Tool usage (task management) [System Prompt]](#3216-tool-usage-task-management-system-prompt)
      2. [Planning Mode Workflows](#322-planning-mode-workflows)
         1. [EnterPlanMode (Tool Description)](#3221-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3222-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#3223-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#3224-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#3225-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#3226-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#3227-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#3228-plan-file-reference-system-reminder)
         9. [Verify plan reminder (System Reminder)](#3229-verify-plan-reminder-system-reminder)
      3. [Hooks System](#323-hooks-system)
         1. [Hooks Configuration (System Prompt)](#3231-hooks-configuration-system-prompt)
         2. [Hook condition evaluator (Agent Prompt)](#3232-hook-condition-evaluator-agent-prompt)
         3. [Agent Hook (Agent Prompt)](#3233-agent-hook-agent-prompt)
         4. [Hook additional context (System Reminder)](#3234-hook-additional-context-system-reminder)
         5. [Hook blocking error (System Reminder)](#3235-hook-blocking-error-system-reminder)
         6. [Hook stopped continuation prefix (System Reminder)](#3236-hook-stopped-continuation-prefix-system-reminder)
         7. [Hook stopped continuation (System Reminder)](#3237-hook-stopped-continuation-system-reminder)
         8. [Hook success (System Reminder)](#3238-hook-success-system-reminder)
   3. [Agent Thread & Worker Behavior](#33-agent-thread-worker-behavior)
      1. [Agent thread notes (System Prompt)](#331-agent-thread-notes-system-prompt)
      2. [Worker instructions (System Prompt)](#332-worker-instructions-system-prompt)
      3. [Agent Summary Generation (System Prompt)](#333-agent-summary-generation-system-prompt)
      4. [Bash command description writer (Agent Prompt)](#334-bash-command-description-writer-agent-prompt)
      5. [Bash command prefix detection (Agent Prompt)](#335-bash-command-prefix-detection-agent-prompt)
4. [Memory, Context & Session Continuity](#4-memory-context-session-continuity)
   1. [Context Compaction & Conversation Summarization](#41-context-compaction-conversation-summarization)
      1. [Context compaction summary (System Prompt)](#411-context-compaction-summary-system-prompt)
      2. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#412-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
      3. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#413-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
      4. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#414-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
      5. [Conversation summarization (Agent Prompt)](#415-conversation-summarization-agent-prompt)
      6. [Recent Message Summarization (Agent Prompt)](#416-recent-message-summarization-agent-prompt)
      7. [Compact file reference (System Reminder)](#417-compact-file-reference-system-reminder)
   2. [Session Memory & Persistence](#42-session-memory-persistence)
      1. [Memory file contents (System Reminder)](#421-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#422-nested-memory-contents-system-reminder)
      3. [Session memory update instructions (Agent Prompt)](#423-session-memory-update-instructions-agent-prompt)
      4. [Memory selection (Agent Prompt)](#424-memory-selection-agent-prompt)
      5. [Session memory template (Data)](#425-session-memory-template-data)
      6. [Agent memory instructions (System Prompt)](#426-agent-memory-instructions-system-prompt)
      7. [Description part of memory instructions (System Prompt)](#427-description-part-of-memory-instructions-system-prompt)
      8. [Update Magic Docs (Agent Prompt)](#428-update-magic-docs-agent-prompt)
   3. [Session Management & State](#43-session-management-state)
      1. [Session Search Assistant (Agent Prompt)](#431-session-search-assistant-agent-prompt)
      2. [Status line setup (Agent Prompt)](#432-status-line-setup-agent-prompt)
      3. [Invoked skills (System Reminder)](#433-invoked-skills-system-reminder)
      4. [Agent mention (System Reminder)](#434-agent-mention-system-reminder)
      5. [/btw side question (System Reminder)](#435-btw-side-question-system-reminder)
   4. [User Interaction & Question Tools](#44-user-interaction-question-tools)
      1. [AskUserQuestion (Tool Description)](#441-askuserquestion-tool-description)
      2. [AskUserQuestion (preview field) [Tool Description]](#442-askuserquestion-preview-field-tool-description)
      3. [Option previewer (System Prompt)](#443-option-previewer-system-prompt)
   5. [Utility Tools](#45-utility-tools)
      1. [Sleep (Tool Description)](#451-sleep-tool-description)
      2. [WebFetch summarizer (Agent Prompt)](#452-webfetch-summarizer-agent-prompt)
      3. [Prompt Suggestion Generator v2 (Agent Prompt)](#453-prompt-suggestion-generator-v2-agent-prompt)
5. [Code Development, Quality & Security](#5-code-development-quality-security)
   1. [Git, Version Control & CI/CD](#51-git-version-control-cicd)
      1. [Git Operations & Version Control](#511-git-operations-version-control)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#5111-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#5112-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#5113-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#5114-bash-git-—-prefer-new-commits-tool-description)
         5. [EnterWorktree (Tool Description)](#5115-enterworktree-tool-description)
         6. [Git status (System Prompt)](#5116-git-status-system-prompt)
         7. [Quick git commit (Agent Prompt)](#5117-quick-git-commit-agent-prompt)
         8. [Quick PR creation (Agent Prompt)](#5118-quick-pr-creation-agent-prompt)
         9. [/pr-comments slash command (Agent Prompt)](#5119-pr-comments-slash-command-agent-prompt)
         10. [/review-pr slash command (Agent Prompt)](#51110-review-pr-slash-command-agent-prompt)
         11. [Session title and branch generation (Agent Prompt)](#51111-session-title-and-branch-generation-agent-prompt)
      2. [GitHub Integration & CI/CD](#512-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#5121-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#5122-github-app-installation-pr-description-data)
         3. [Live documentation sources (Data)](#5123-live-documentation-sources-data)
   2. [Engineering Practices & Codebase Analysis](#52-engineering-practices-codebase-analysis)
      1. [Code Quality & Engineering Best Practices](#521-code-quality-engineering-best-practices)
         1. [Doing tasks (software engineering focus) [System Prompt]](#5211-doing-tasks-software-engineering-focus-system-prompt)
         2. [Doing tasks (read before modifying) [System Prompt]](#5212-doing-tasks-read-before-modifying-system-prompt)
         3. [Doing tasks (no premature abstractions) [System Prompt]](#5213-doing-tasks-no-premature-abstractions-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#5214-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no unnecessary error handling) [System Prompt]](#5215-doing-tasks-no-unnecessary-error-handling-system-prompt)
         6. [Doing tasks (no unnecessary additions) [System Prompt]](#5216-doing-tasks-no-unnecessary-additions-system-prompt)
         7. [Doing tasks (minimize file creation) [System Prompt]](#5217-doing-tasks-minimize-file-creation-system-prompt)
         8. [Doing tasks (avoid over-engineering) [System Prompt]](#5218-doing-tasks-avoid-over-engineering-system-prompt)
         9. [Doing tasks (security) [System Prompt]](#5219-doing-tasks-security-system-prompt)
         10. [Doing tasks (ambitious tasks) [System Prompt]](#52110-doing-tasks-ambitious-tasks-system-prompt)
         11. [Doing tasks (blocked approach) [System Prompt]](#52111-doing-tasks-blocked-approach-system-prompt)
         12. [Doing tasks (no time estimates) [System Prompt]](#52112-doing-tasks-no-time-estimates-system-prompt)
         13. [Executing actions with care (System Prompt)](#52113-executing-actions-with-care-system-prompt)
      2. [Codebase Exploration & Planning](#522-codebase-exploration-planning)
         1. [Explore (Agent Prompt)](#5221-explore-agent-prompt)
         2. [Explore strengths and guidelines (Agent Prompt)](#5222-explore-strengths-and-guidelines-agent-prompt)
         3. [Plan mode (enhanced) [Agent Prompt]](#5223-plan-mode-enhanced-agent-prompt)
         4. [CLAUDE.md creation (Agent Prompt)](#5224-claudemd-creation-agent-prompt)
   3. [Testing & Security Review](#53-testing-security-review)
      1. [Verification & Testing](#531-verification-testing)
         1. [Verification specialist (Agent Prompt)](#5311-verification-specialist-agent-prompt)
         2. [Verification specialist (Skill)](#5312-verification-specialist-skill)
         3. [Create verifier skills (Skill)](#5313-create-verifier-skills-skill)
      2. [Security Review & Malware Analysis](#532-security-review-malware-analysis)
         1. [/security-review slash command (Agent Prompt)](#5321-security-review-slash-command-agent-prompt)
         2. [Censoring assistance with malicious activities (System Prompt)](#5322-censoring-assistance-with-malicious-activities-system-prompt)
         3. [Malware analysis after Read tool call (System Reminder)](#5323-malware-analysis-after-read-tool-call-system-reminder)
6. [API & SDK Documentation](#6-api-sdk-documentation)
   1. [Claude API Reference Documentation](#61-claude-api-reference-documentation)
      1. [Claude API reference — Python (Data)](#611-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#612-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#613-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#614-claude-api-reference-—-java-data)
      5. [Claude API reference — Ruby (Data)](#615-claude-api-reference-—-ruby-data)
      6. [Claude API reference — PHP (Data)](#616-claude-api-reference-—-php-data)
      7. [Claude API reference — C# (Data)](#617-claude-api-reference-—-c-data)
      8. [Claude model catalog (Data)](#618-claude-model-catalog-data)
      9. [HTTP error codes reference (Data)](#619-http-error-codes-reference-data)
   2. [Agent SDK Reference & Patterns](#62-agent-sdk-reference-patterns)
      1. [Agent SDK reference — Python (Data)](#621-agent-sdk-reference-—-python-data)
      2. [Agent SDK reference — TypeScript (Data)](#622-agent-sdk-reference-—-typescript-data)
      3. [Agent SDK patterns — Python (Data)](#623-agent-sdk-patterns-—-python-data)
      4. [Agent SDK patterns — TypeScript (Data)](#624-agent-sdk-patterns-—-typescript-data)
   3. [Streaming & Tool Use API References](#63-streaming-tool-use-api-references)
      1. [Streaming reference — Python (Data)](#631-streaming-reference-—-python-data)
      2. [Streaming reference — TypeScript (Data)](#632-streaming-reference-—-typescript-data)
      3. [Tool use concepts (Data)](#633-tool-use-concepts-data)
      4. [Tool use reference — Python (Data)](#634-tool-use-reference-—-python-data)
      5. [Tool use reference — TypeScript (Data)](#635-tool-use-reference-—-typescript-data)
   4. [Files & Batches API References](#64-files-batches-api-references)
      1. [Files API reference — Python (Data)](#641-files-api-reference-—-python-data)
      2. [Files API reference — TypeScript (Data)](#642-files-api-reference-—-typescript-data)
      3. [Message Batches API reference — Python (Data)](#643-message-batches-api-reference-—-python-data)
7. [Skills, Customization & Communication](#7-skills-customization-communication)
   1. [Skills, Agent Design & Learning](#71-skills-agent-design-learning)
      1. [Skills System](#711-skills-system)
         1. [Skill (Tool Description)](#7111-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#7112-tool-usage-skill-invocation-system-prompt)
         3. [Skillify Current Session (System Prompt)](#7113-skillify-current-session-system-prompt)
         4. [Debugging (Skill)](#7114-debugging-skill)
         5. [Simplify (Skill)](#7115-simplify-skill)
         6. [Update Claude Code Config (Skill)](#7116-update-claude-code-config-skill)
         7. [Build with Claude API (Skill)](#7117-build-with-claude-api-skill)
         8. [Build with Claude API (reference guide) [Skill]](#7118-build-with-claude-api-reference-guide-skill)
      2. [Usage Insights & Analytics](#712-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#7121-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7122-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7123-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7124-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7125-insights-suggestions-system-prompt)
      3. [Learning & Education Mode](#713-learning-education-mode)
         1. [Learning mode (System Prompt)](#7131-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7132-learning-mode-insights-system-prompt)
      4. [Agent Design & Creation](#714-agent-design-creation)
         1. [Agent creation architect (Agent Prompt)](#7141-agent-creation-architect-agent-prompt)
         2. [Claude guide agent (Agent Prompt)](#7142-claude-guide-agent-agent-prompt)
   2. [Output Style & Communication](#72-output-style-communication)
      1. [Output efficiency (System Prompt)](#721-output-efficiency-system-prompt)
      2. [Tone and style (concise output — detailed) [System Prompt]](#722-tone-and-style-concise-output-—-detailed-system-prompt)
      3. [Tone and style (concise output — short) [System Prompt]](#723-tone-and-style-concise-output-—-short-system-prompt)
      4. [Tone and style (code references) [System Prompt]](#724-tone-and-style-code-references-system-prompt)
      5. [Doing tasks (help and feedback) [System Prompt]](#725-doing-tasks-help-and-feedback-system-prompt)

---

## 1. Bash & Shell Command Execution

Rules, security policies, and best practices governing how bash commands are structured, sandboxed, and executed. Covers path handling, command chaining, timeout configuration, and when to delegate to specialized tools instead.

### 1.1 Bash Sandbox Security & Policy

Enforces mandatory sandboxing for all bash commands with automatic detection of sandbox-caused failures through access denied, network, and socket errors. Provides user-friendly error explanations and automatic retry logic while protecting sensitive paths and maintaining per-command stateless policy.

#### 1.1.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

#### 1.1.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Default to running commands within the sandbox; only bypass when the user explicitly requests it or evidence of sandbox restriction appears.

#### 1.1.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox restrictions.

#### 1.1.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that identify sandbox-caused failures.

#### 1.1.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox restrictions.

#### 1.1.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors for file and network operations signal sandbox restrictions.

#### 1.1.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions.

#### 1.1.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused a failure and mention the /sandbox command for managing restrictions.

#### 1.1.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Identifies when a command failure shows evidence of sandbox restrictions versus other causes like missing files or network issues.

#### 1.1.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.1.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.1.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

#### 1.1.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; default to sandbox for future commands even after running one with dangerouslyDisableSandbox.

#### 1.1.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing how to respond when sandbox-caused failures are detected.

#### 1.1.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true when sandbox failure is detected, without asking the user.

#### 1.1.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use the $TMPDIR environment variable or ${SANDBOX_TMPDIR_FN()} for temporary files in sandbox mode; do not use /tmp directly.

#### 1.1.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will prompt the user for permission.

### 1.2 Bash Command Execution & Syntax Rules

Governs bash command structure and execution patterns including absolute path usage, command chaining with && for dependencies, parallel execution for independent tasks, and proper quoting for file paths. Manages working directory persistence, timeout configuration, and discourages inefficient polling patterns in favor of notifications and check commands.

#### 1.2.1 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Maintain the current working directory by using absolute paths and avoiding cd commands unless explicitly requested.

#### 1.2.2 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate bash commands, except within quoted strings.

#### 1.2.3 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

The bash tool executes commands and returns their output.

#### 1.2.4 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent commands as multiple parallel bash tool calls in a single message rather than sequentially.

#### 1.2.5 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

#### 1.2.6 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier command failures are acceptable.

#### 1.2.7 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands using && in a single bash call to ensure sequential execution and failure propagation.

#### 1.2.8 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Optionally specify command timeout in milliseconds up to a configured maximum, with a default timeout value.

#### 1.2.9 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Verify parent directory exists and is correct before creating new files or directories.

#### 1.2.10 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between commands, but shell state resets and is initialized from user profile.

#### 1.2.11 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep bash sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.2.12 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

#### 1.2.13 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Diagnose root causes of failures instead of retrying commands in sleep loops.

#### 1.2.14 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Run commands immediately without sleeping between them when they can execute without delay.

#### 1.2.15 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like gh run view for polling external processes instead of sleeping first.

#### 1.2.16 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Use run_in_background for long-running commands to receive completion notifications without sleeping.

### 1.3 Bash Tool Alternatives & Preferred Tools

Redirects common bash operations to specialized tools for superior user experience and transparency: Read/Write/Edit tools for file operations, Glob for file discovery, and Grep for content search. Discourages bash equivalents like cat, sed, awk, and find in favor of dedicated tools.

#### 1.3.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly instead of using echo or printf commands.

#### 1.3.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs to use the Grep tool instead of grep or rg for content search operations.

#### 1.3.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs to use the Edit tool instead of sed or awk for file editing operations.

#### 1.3.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs to use the Glob tool instead of find or ls for file search operations.

#### 1.3.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs to use the Read tool instead of cat, head, or tail for file reading operations.

#### 1.3.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs to use the Write tool instead of echo or cat for file writing operations.

#### 1.3.7 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and transparency than Bash equivalents for file and content operations.

#### 1.3.8 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs to write clear, concise descriptions of bash commands, with additional context for complex or obscure operations.

#### 1.3.9 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for find, grep, cat, head, tail, sed, awk, or echo commands; use dedicated tools instead for better user experience.

---

## 2. File System, Editor & External Tool Access

Tools and policies for reading, writing, and searching files, plus integration with IDEs, browsers, MCP servers, and Jupyter notebooks. Covers resource constraints, session migration, and web automation.

### 2.1 File Tools & Access Policies

Dedicated tools for file reading, writing, editing, searching, and discovery, along with policies governing when to use them over shell commands and how to handle boundary conditions.

#### 2.1.1 File System Tool Descriptions

Specialized tools for filesystem operations: ReadFile handles multimodal content including PDFs and images, Write creates new files, Edit performs precise string replacements, Glob discovers files by pattern, Grep searches content with regex, and LSP provides code intelligence through language servers.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Read files from the filesystem with support for images, PDFs (with page ranges), Jupyter notebooks, and configurable line limits. Use absolute paths only.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem with overwrite capability. Recommends using Edit tool for modifications to existing files and restricts creation of documentation or README files unless explicitly requested by the user.

##### 2.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files with precise indentation matching and support for bulk replacements across files.

##### 2.1.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like **/*.js, returning results sorted by modification time.

##### 2.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search using ripgrep with regex support, file filtering, multiple output modes, and multiline pattern matching.

##### 2.1.1.6 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers for code intelligence including definitions, references, hover info, symbols, and call hierarchies.

#### 2.1.2 Tool Usage Policy & Preferences

Establishes Claude's preference for dedicated tools over shell commands for file operations, content search, and discovery, while reserving Bash for system-level tasks. Defines error recovery when tools are denied and optimizes execution through parallel calls for independent operations.

##### 2.1.2.1 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Directs Claude to use the Write tool instead of cat heredoc or echo redirection for file creation.

##### 2.1.2.2 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs Claude to use the Edit tool instead of sed or awk for file modifications.

##### 2.1.2.3 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Directs Claude to use the Read tool instead of cat, head, tail, or sed for file access.

##### 2.1.2.4 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Directs Claude to use the Grep tool instead of grep or rg for searching file contents.

##### 2.1.2.5 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Directs Claude to use the Glob tool instead of find or ls for file discovery.

##### 2.1.2.6 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve Bash exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

##### 2.1.2.7 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Defines behavior when a tool call is denied: attempt reasonable alternatives without malicious workarounds, and stop to explain the need if the capability is essential.

##### 2.1.2.8 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains that tools execute in user-selected permission modes; when a tool is denied, adjust approach rather than retry, and optionally ask the user for clarification.

##### 2.1.2.9 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Directs Claude to maximize parallel tool calls for independent operations while maintaining sequential execution for dependent calls.

##### 2.1.2.10 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Provides rules for generating brief, past-tense summaries of tool usage and outcomes, focusing on user-visible results in under 8 words without self-referential phrases.

#### 2.1.3 File State & Reading Notifications

Boundary conditions and resource constraints that affect file access and session continuity. Handles truncation, offset errors, empty files, session migration across machines, and tracks token and budget consumption to inform operational decisions.

##### 2.1.3.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude when a file exists but contains no content.

##### 2.1.3.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and instructs it to use the read tool to access additional content if needed.

##### 2.1.3.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude when a file read offset exceeds the file length, providing actual line count information.

##### 2.1.3.4 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory may have changed.

##### 2.1.3.5 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 2.1.3.6 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

### 2.2 Editor, Browser & Protocol Integrations

Real-time IDE awareness, browser automation for web interaction, MCP tool discovery, Jupyter notebook editing, and temporary workspace isolation.

#### 2.2.1 IDE & Editor Integration

Real-time awareness of user interactions within the editor environment, including file opens, line selections, external modifications, and diagnostic updates. Keeps Claude informed of contextual signals that may relate to the current task without assuming direct relevance.

##### 2.2.1.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Informs Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 2.2.1.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific lines selected by the user in the IDE with the content displayed, noting it may or may not relate to the current task.

##### 2.2.1.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides the relevant changes with line numbers for context.

##### 2.2.1.4 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues with a summary of the problems.

##### 2.2.1.5 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and instructs it to follow the specific guidelines for that style.

#### 2.2.2 MCP Integration

Mechanisms for discovering, loading, and handling Model Context Protocol tools and resources. Covers tool discovery via keyword search and direct selection, resource state indicators, and Chrome browser MCP tool initialization workflows.

##### 2.2.2.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 2.2.2.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

##### 2.2.2.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use, requiring tool selection before calling mcp__claude-in-chrome__* functions.

##### 2.2.2.4 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Explains three query modes for discovering and loading deferred tools: keyword search for uncertain tool selection, direct selection via tool name, and required keyword filtering by service. Emphasizes that both modes load tools equally and warns against redundant follow-up calls after keyword searches.

#### 2.2.3 Browser Automation & Web Access

Tools and techniques for interacting with web content through browser automation, web fetching, and search. Enables mouse/keyboard control, screenshot capture, HTML-to-markdown conversion, and real-time web search with source attribution.

##### 2.2.3.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Interact with a Chrome browser using mouse and keyboard to click elements, type, and take screenshots for web automation.

##### 2.2.3.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines 12 action parameters for Chrome browser automation including mouse operations (click, drag, hover), keyboard input, scrolling, screenshot, zoom, and element reference scrolling.

##### 2.2.3.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for effective browser automation using Claude in Chrome tools, covering GIF recording, console debugging, alert handling, avoiding loops, and tab context management with proper session startup.

##### 2.2.3.4 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with a prompt-driven AI model. Includes automatic HTTPS upgrade, 15-minute caching, and redirect handling. Recommends preferring MCP-provided web fetch tools and using gh CLI for GitHub URLs.

##### 2.2.3.5 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Enables Claude to search the web for current information beyond knowledge cutoff and return formatted results with markdown hyperlinks. Mandates inclusion of a Sources section listing all relevant URLs after answering. Supports domain filtering and requires using the current year in search queries.

#### 2.2.4 Jupyter Notebook Support

Tool for direct manipulation of Jupyter notebook cell contents, enabling programmatic editing and cell management within interactive data science workflows.

##### 2.2.4.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replace or insert Jupyter notebook cell contents with support for adding and deleting cells.

#### 2.2.5 Scratchpad & Temporary File Management

Isolates temporary file operations to a dedicated session-specific directory, preventing conflicts with system temp storage and maintaining clean separation between transient and persistent data.

##### 2.2.5.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for temporary files instead of system temp directories.

---

## 3. Multi-Agent Coordination & Workflow Automation

Frameworks for launching, coordinating, and managing agents—from subagent delegation and swarm teams to task tracking, planning phases, hooks, and worker thread behavior.

### 3.1 Agent Launching & Coordination

Patterns for spawning subagents, forming swarms with shared task queues, and coordinating inter-agent messaging and shutdown.

#### 3.1.1 Multi-Agent Orchestration & Subagent Management

Governs launching and coordinating specialized subagent processes for autonomous task execution, including concurrent operation, background work, and context isolation. Distinguishes between context-inheriting agents and fresh subagents, with guidance on delegation patterns and avoiding mid-flight result fabrication.

##### 3.1.1.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guide for launching and managing subagents, covering concurrent execution, background tasks, resumption, worktree isolation, and context-specific constraints for subagent and teammate contexts.

##### 3.1.1.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses for autonomous handling of complex multi-step tasks, with available agent types and context-specific behavior.

##### 3.1.1.3 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for parallel research or implementation work, and prohibits reading fork output mid-flight or fabricating results.

##### 3.1.1.4 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Demonstrates how a coordinator agent should delegate tasks to subagents, handle waiting states without fabricating results, and provide independent context when using specialized subagent types. Shows patterns for ship-readiness audits and code reviews.

##### 3.1.1.5 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Distinguishes two subagent scenarios: context-inheriting agents receive directives with scope clarification, while fresh subagent_type agents need full briefing with background and judgment-enabling context. Emphasizes never delegating understanding itself.

##### 3.1.1.6 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Advises using the Task tool with specialized agents for parallelization and context protection, while avoiding excessive delegation and duplicating subagent work.

##### 3.1.1.7 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Recommends using the Task tool with an exploration subagent for broader codebase research when simple directed searches prove insufficient or exceed query limits.

##### 3.1.1.8 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Directs Claude to use Glob or Grep tools directly for simple, targeted codebase searches.

##### 3.1.1.9 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Instructs a forked worker subagent to execute directives directly without spawning further agents, using tools silently and reporting structured results under 500 words.

##### 3.1.1.10 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise subagent reporting and detailed standalone writeups based on caller context.

#### 3.1.2 Team/Swarm Coordination

Enables multi-agent swarms through team creation, shared task queues, and inter-agent messaging. Agents claim work from task lists, communicate via SendMessage, and coordinate shutdown before cleanup, with team leads managing overall orchestration.

##### 3.1.2.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Instructs Claude to create and manage teams of coordinated agents for complex multi-step projects. Covers team creation, task assignment via shared task lists, agent type selection, automatic message delivery, and idle state management. Emphasizes using agent names for communication and TaskUpdate for task ownership.

##### 3.1.2.2 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Send direct messages to specific teammates, broadcast to all teammates, handle shutdown requests/responses, and manage plan approval responses in a swarm. Use broadcast sparingly for critical issues only.

##### 3.1.2.3 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Remove team and task directories after swarm work completes. Requires all teammates to be terminated first.

##### 3.1.2.4 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

In teammate workflow, query TaskList for available work, claim pending tasks with no owner, and prefer lowest ID tasks to maintain context ordering.

##### 3.1.2.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity as a team member with specific name and role, providing team resources and messaging protocols for coordinating with teammates and the team lead.

##### 3.1.2.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires graceful team shutdown via requestShutdown and cleanup operations before providing final response to user in non-interactive mode.

##### 3.1.2.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents running in a team to use the SendMessage tool for inter-agent communication rather than plain text responses, enabling coordination through message and broadcast types.

##### 3.1.2.8 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into independent units, determining e2e test recipes, spawning worker agents, and tracking progress across multiple PRs.

### 3.2 Planning, Task Tracking & Lifecycle Hooks

Structured planning workflows with read-only exploration phases, explicit task lists with state tracking, and event-driven hooks at lifecycle boundaries.

#### 3.2.1 Task Tracking & Todo Management

Structures multi-step work through explicit task lists with state tracking (pending, in-progress, completed), enabling progress visibility and demonstrating thoroughness. Applied selectively to non-trivial sessions with 3+ steps or explicit user requirements.

##### 3.2.1.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Guides Claude to create structured task lists for complex multi-step coding sessions to track progress and demonstrate thoroughness. Defines when to use the tool (3+ steps, non-trivial tasks, explicit user requests) and when to skip it (single trivial tasks). Specifies task states (pending, in_progress, completed) with dual forms (imperative and active), and emphasizes marking tasks complete only when fully accomplished.

##### 3.2.1.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Create structured task lists for multi-step or complex coding sessions to track progress, organize work, and demonstrate thoroughness. Use for 3+ step tasks, plan mode, or when users provide multiple requirements.

##### 3.2.1.3 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

##### 3.2.1.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task creation and update tools for tracking progress on relevant work, with instruction to never mention this reminder to the user.

##### 3.2.1.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use the TodoWrite tool for tracking task progress when relevant, with instruction to never mention this reminder to the user.

##### 3.2.1.6 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Directs Claude to use TodoWrite to break down work, track progress, and mark tasks as completed incrementally rather than in batches.

#### 3.2.2 Planning Mode Workflows

Implements structured planning phases where Claude explores codebases, designs approaches, and obtains user approval before implementation. Enforces read-only constraints during planning, supports iterative refinement and subagent coordination, and manages re-entry and mode transitions.

##### 3.2.2.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transition into plan mode to explore the codebase and design implementation approaches for user approval before writing code. Use proactively for non-trivial tasks involving new features, multiple approaches, architectural decisions, or multi-file changes.

##### 3.2.2.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning and request user approval to proceed with implementation. Use only for code-writing tasks, not research or exploration.

##### 3.2.2.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Comprehensive plan mode instruction implementing a 5-phase workflow: initial understanding with parallel exploration agents, design with planning agents, review, final plan writing, and plan approval. Enforces read-only constraints and requires plan file updates before exiting plan mode.

##### 3.2.2.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Iterative plan mode workflow for pair-planning with the user, emphasizing exploration, incremental plan updates, and user questioning in a loop until convergence. Enforces read-only constraints and requires plan file edits before exiting.

##### 3.2.2.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instruction for subagents enforcing read-only constraints, allowing plan file edits, and requiring comprehensive query answers with user clarification when needed.

##### 3.2.2.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude when re-entering plan mode to read the existing plan, evaluate whether the new request is the same or different task, and either modify or overwrite the plan accordingly before exiting.

##### 3.2.2.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and it can now make edits, run tools, and take actions.

##### 3.2.2.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 3.2.2.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementing the plan.

#### 3.2.3 Hooks System

Event-driven automation framework that executes commands and agents at lifecycle boundaries—PreToolUse, PostToolUse, SessionStart—with condition evaluation and stop-condition verification. Provides execution feedback through success reports, blocking errors, and continuation control.

##### 3.2.3.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines hook system for Claude Code that runs commands at lifecycle events like PreToolUse, PostToolUse, and SessionStart with support for command, prompt, and agent hook types.

##### 3.2.3.2 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code and returns JSON indicating whether conditions are met with optional failure reasons.

##### 3.2.3.3 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state to confirm task completion.

##### 3.2.3.4 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context information from a hook execution.

##### 3.2.3.5 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command that prevented execution.

##### 3.2.3.6 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix label for messages indicating a hook stopped continuation.

##### 3.2.3.7 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook stopped the continuation process with an associated message.

##### 3.2.3.8 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports a successful hook execution with its output content.

### 3.3 Agent Thread & Worker Behavior

Operational guidelines for agent threads and worker processes, defining formatting standards, multi-step workflows for code changes, and safety mechanisms for command execution.

#### 3.3.1 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads requiring absolute file paths, relevant file sharing in responses, avoidance of emojis, and proper punctuation before tool calls.

#### 3.3.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Outlines a five-step workflow for workers implementing changes: simplify code, run unit tests, test end-to-end, commit and push, then report the PR URL.

#### 3.3.3 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise agent action summaries in present tense (-ing form), naming specific files or functions rather than branches, with examples of good and bad summary formats.

#### 3.3.4 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions for bash commands, keeping simple commands brief and adding context for complex piped or obscure commands.

#### 3.3.5 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attacks in bash commands to enforce safety policies before execution.

---

## 4. Memory, Context & Session Continuity

Mechanisms for preserving and retrieving conversation state, session memory, and context across interactions—including compaction, persistent knowledge files, and session metadata tracking.

### 4.1 Context Compaction & Conversation Summarization

Mechanisms for distilling conversation history into compact, resumable summaries that preserve task state, technical decisions, and actionable next steps. Supports multiple analysis strategies—full conversation review, recent-message focus, and minimal feature-flagged approaches—each optimized for different context preservation needs.

#### 4.1.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for generating continuation summaries during context compaction, structured to capture task overview, current state, discoveries, next steps, and context to preserve for efficient resumption.

#### 4.1.2 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

System prompt for context compaction analysis covering full conversations, requiring chronological analysis of messages with attention to user requests, technical decisions, specific details, errors, and user feedback.

#### 4.1.3 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Lean experimental version of context compaction analysis using analysis tags as planning scratchpad, noting coverage without detail, with actual content reserved for the summary section.

#### 4.1.4 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

System prompt for context compaction analysis of recent messages only, requiring chronological review of user requests, approach, decisions, technical details, errors, and feedback with accuracy verification.

#### 4.1.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing user requests, technical concepts, file changes, errors, problem-solving, and pending tasks with code snippets and architectural decisions.

#### 4.1.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions with sections covering requests, technical concepts, file changes, errors, problem-solving, and next steps while preserving earlier context.

#### 4.1.7 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notes that a file was read before conversation summarization but is too large to include; directs Claude to use the Read tool if needed.

### 4.2 Session Memory & Persistence

Persistent storage and retrieval of session state across conversations, enabling institutional knowledge accumulation through structured memory files. Agents update domain-specific notes with learnings, select relevant context for queries, and maintain architecture-focused documentation that builds understanding over time.

#### 4.2.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file at a specified path with type description.

#### 4.2.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

#### 4.2.3 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by preserving structure and headers while adding detailed, info-dense content from conversations with focus on actionable information and current state.

#### 4.2.4 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects relevant memory files for user queries by analyzing descriptions and returning up to 5 filenames that would clearly assist Claude Code processing.

#### 4.2.5 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files documenting current state, task specification, files, workflow, errors, codebase, learnings, and worklogs.

#### 4.2.6 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Instructions for including domain-specific memory update guidance in agent system prompts to build institutional knowledge across conversations, with examples for code reviewers, test runners, architects, and documentation writers.

#### 4.2.7 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Field description for user memory instructions emphasizing role, goals, and preferences to tailor behavior and build understanding of the user without negative judgements.

#### 4.2.8 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs an agent to update Magic Doc files with new learnings from conversations, preserving headers and removing outdated information while maintaining terse, architecture-focused documentation.

### 4.3 Session Management & State

Mechanisms for tracking and retrieving session context, including metadata search, configuration persistence, skill invocation tracking, and handling of contextual side questions.

#### 4.3.1 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions by matching user queries against session metadata including tags, titles, branches, and transcripts with high inclusivity and semantic matching.

#### 4.3.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 configurations, converting escape sequences to shell commands, and updating settings.json with custom status line commands.

#### 4.3.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the session and instructs Claude to continue following their guidelines.

#### 4.3.4 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user has requested invocation of a specific agent type and instructs appropriate delegation with required context.

#### 4.3.5 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Marks a side question that must be answered directly without tools, based only on conversation context, in a single response without promises of further action.

### 4.4 User Interaction & Question Tools

Interactive mechanisms for gathering user input and presenting choices, including decision prompts with optional visual previews for comparing UI designs, code, and diagrams.

#### 4.4.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes using AskUserQuestion to gather user preferences, clarify ambiguous instructions, and get decisions during execution, with special guidance for plan mode interactions.

#### 4.4.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructions for using optional HTML preview fields on single-select question options to display visual artifacts like UI mockups, code snippets, and diagrams.

#### 4.4.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options, code snippets, and diagrams in single-select questions.

### 4.5 Utility Tools

Specialized tools for managing delays, filtering and summarizing external content, and predicting user intent. These utilities enhance Claude's responsiveness by handling blocking operations gracefully, enforcing quality standards on untrusted sources, and anticipating conversational flow.

#### 4.5.1 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Wait for a specified duration with early wake capability on user input. Prefer over bash sleep to avoid holding shell processes.

#### 4.5.2 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose WebFetch output for the main model, enforcing strict quote limits and proper attribution for untrusted domains.

#### 4.5.3 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs for Claude Code based on conversation context, avoiding evaluative or Claude-voice suggestions.

---

## 5. Code Development, Quality & Security

Engineering best practices for writing maintainable code, exploring codebases, running automated tests, performing security reviews, and managing version control with Git and GitHub CI/CD.

### 5.1 Git, Version Control & CI/CD

Git workflow guidance covering safety protocols, commit automation, PR management, and GitHub Actions integration for AI-assisted development pipelines.

#### 5.1.1 Git Operations & Version Control

Provides comprehensive git workflow guidance including safety protocols against destructive operations, hook enforcement, and commit best practices. Automates common tasks like commit creation, PR management, and code review through specialized agents while maintaining branch tracking and attribution standards.

##### 5.1.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives to destructive git operations like reset --hard, push --force, and checkout unless they are truly necessary.

##### 5.1.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Detailed instructions for creating git commits and GitHub pull requests, covering safety protocols, commit message drafting, hook handling, and PR creation with gh command.

##### 5.1.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs never to skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix hook failures.

##### 5.1.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to prefer creating new commits over amending existing commits.

##### 5.1.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it when the user explicitly requests worktree functionality.

##### 5.1.1.6 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git branch, main branch reference, status, and recent commits at conversation start.

##### 5.1.1.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context, analyzing staged changes, drafting messages following repository style, and enforcing safety protocols against amending or skipping hooks.

##### 5.1.1.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Streamlines PR creation by analyzing all changes, creating branches, committing with attribution, pushing to origin, and creating or updating PRs with title and body templates.

##### 5.1.1.9 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and review comments with file context, line numbers, and diff hunks in readable format.

##### 5.1.1.10 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, improvements, and risks with focus on correctness and security.

##### 5.1.1.11 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles and git branch names from session descriptions with sentence case titles and lowercase branch names prefixed with claude/.

#### 5.1.2 GitHub Integration & CI/CD

Automated workflows and templates for integrating Claude Code into GitHub environments, enabling AI-assisted development through @mention triggers in issues and pull requests while maintaining security and documentation standards.

##### 5.1.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues, PRs, and comments with configurable tool permissions.

##### 5.1.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security, and how to trigger Claude via @mentions.

##### 5.1.2.3 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and official repositories, with extraction prompts for each topic.

### 5.2 Engineering Practices & Codebase Analysis

Guidelines for writing focused, secure, and maintainable code, plus read-only agents for navigating codebases and designing implementation strategies.

#### 5.2.1 Code Quality & Engineering Best Practices

Behavioral guidelines for writing maintainable, secure, and focused code. Emphasizes reading before modifying, avoiding over-engineering and premature abstractions, validating at boundaries, managing scope strictly, and requesting confirmation for destructive operations.

##### 5.2.1.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Directs Claude to interpret user requests in the context of software engineering tasks like bug fixes, refactoring, and code modifications.

##### 5.2.1.2 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Directs Claude to read and understand existing code before proposing or making modifications.

##### 5.2.1.3 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directs Claude to avoid creating helpers or abstractions for one-time operations and not to design for hypothetical future requirements.

##### 5.2.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims or deprecated markers.

##### 5.2.1.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid defensive error handling for impossible scenarios and validate only at system boundaries.

##### 5.2.1.6 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directs Claude to implement only what was requested without adding features, refactoring, or improvements beyond scope.

##### 5.2.1.7 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat and build on prior work.

##### 5.2.1.8 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Guideline to avoid over-engineering by making only directly requested or clearly necessary changes, keeping solutions simple and focused.

##### 5.2.1.9 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to prioritize secure code and avoid introducing vulnerabilities like injection, XSS, and OWASP top 10 risks.

##### 5.2.1.10 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Behavioral guideline allowing users to complete ambitious tasks that would otherwise be too complex, deferring to user judgment on scope.

##### 5.2.1.11 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Guideline to consider alternative approaches when blocked instead of brute-forcing, using AskUserQuestion to align on the right path forward.

##### 5.2.1.12 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid providing time estimates or predictions for task completion.

##### 5.2.1.13 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to carefully evaluate action reversibility and blast radius, requesting user confirmation for destructive or hard-to-reverse operations like force-pushes, deletions, and shared system changes.

#### 5.2.2 Codebase Exploration & Planning

Read-only agents for navigating and analyzing codebases to understand structure, design implementation strategies, and generate documentation. Combines file search, architecture analysis, and knowledge capture for future context.

##### 5.2.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist for navigating codebases using glob patterns, regex grep, and file reading with strict prohibitions on file modifications or state changes.

##### 5.2.2.2 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines exploration agent strengths in code searching and codebase analysis, with guidelines emphasizing broad search strategies, thoroughness, and avoiding unnecessary file creation.

##### 5.2.2.3 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases and designs implementation plans with step-by-step strategies, dependency analysis, and critical file identification.

##### 5.2.2.4 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files with build/test commands, high-level architecture, and project-specific conventions for future Claude Code instances.

### 5.3 Testing & Security Review

Automated verification systems that probe implementations across UI, CLI, and API surfaces, alongside vulnerability detection and authorized penetration testing capabilities.

#### 5.3.1 Verification & Testing

Automated testing and verification systems that adversarially probe implementations across web UI, CLI, and API surfaces. Discovers appropriate test tools, executes verification plans, and reports detailed results with failure analysis.

##### 5.3.1.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Defines a verification subagent that adversarially tests implementations by running builds, tests, linters, and probes, then issues PASS/FAIL/PARTIAL verdicts with evidence of at least one adversarial probe.

##### 5.3.1.2 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Verification specialist skill for testing code changes by discovering verifier skills, analyzing git changes, creating deterministic verification plans, and triggering appropriate verifiers (Playwright, API, CLI) to execute and report results with detailed failure analysis.

##### 5.3.1.3 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase guide for creating verifier skills that automatically test code changes using Playwright (web UI), Tmux (CLI), or HTTP (API) verification approaches. Includes auto-detection of project structure, tool setup, interactive Q&A, and skill generation with authentication support.

#### 5.3.2 Security Review & Malware Analysis

Automated vulnerability detection and malware analysis capabilities that identify exploitable weaknesses in code while enforcing strict boundaries against assisting with destructive attacks, supply chain compromise, or evasion techniques. Supports authorized security testing, penetration testing, and CTF challenges.

##### 5.3.2.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities in input validation, authentication, crypto, injection, and data exposure with detailed markdown reports.

##### 5.3.2.2 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing requests for destructive techniques, DoS attacks, supply chain compromise, or malicious detection evasion.

##### 5.3.2.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but prohibits improving or augmenting malicious code while allowing analysis, reporting, and behavioral questions.

---

## 6. API & SDK Documentation

Reference documentation for the Claude API and Agent SDK across multiple languages, covering streaming, tool use, file management, batch processing, and structured outputs.

### 6.1 Claude API Reference Documentation

Comprehensive API documentation across Python, TypeScript, Go, Java, Ruby, PHP, and C# covering client initialization, streaming, vision, prompt caching, extended thinking, tool use, and error handling. Includes model catalog with pricing and HTTP error code reference.

#### 6.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python Claude API reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

#### 6.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript Claude API reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

#### 6.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API including client initialization, basic requests, streaming, and beta tool runner with automatic schema generation.

#### 6.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference for Claude API including client initialization, basic requests, streaming, and beta tool use with annotated classes.

#### 6.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for Claude API including client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

#### 6.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API including client initialization, basic requests, streaming, and manual tool use via JSON schema.

#### 6.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for Claude API including client initialization, basic requests, streaming, and manual tool use via JSON schema.

#### 6.1.8 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and retired Claude models with exact model IDs, aliases, context windows, max output tokens, and pricing information.

#### 6.1.9 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400-529) with common causes, fixes, and SDK exception handling patterns for Python and TypeScript.

### 6.2 Agent SDK Reference & Patterns

Complete Agent SDK documentation for Python and TypeScript with API references, code patterns, and best practices for building agents with built-in tools, custom tool integration via MCP, permission systems, hooks, subagents, and session management.

#### 6.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Complete Python Agent SDK reference covering installation, quick start, built-in tools, primary interfaces, permission system, MCP support, hooks, subagents, and best practices.

#### 6.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference covering installation, quick start, built-in tools, permission system, MCP support, hooks, subagents, and best practices.

#### 6.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Provides Python Agent SDK code patterns for basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption.

#### 6.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Provides TypeScript Agent SDK code patterns for basic agents, hooks, subagents, MCP integration, and session resumption.

### 6.3 Streaming & Tool Use API References

Implementation guides for streaming messages and tool use across Python and TypeScript, covering content handling, agentic loops, server-side capabilities like code execution and web search, memory tools, and structured outputs with schema validation.

#### 6.3.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, progress tracking, error handling, and stream event types.

#### 6.3.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript reference for streaming messages with the Claude API, covering basic streaming, handling different content types (thinking and text), tool use with streaming, and best practices for managing stream events and final messages.

#### 6.3.3 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use with Claude API including user-defined tools, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, web fetch, computer use), memory tool, structured outputs, and best practices for effective tool design.

#### 6.3.4 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python implementation guide for tool use covering the tool runner with @beta_tool decorators, MCP tool conversion helpers, manual agentic loops, code execution with file uploads and container reuse, memory tool integration, and structured outputs with Pydantic schemas.

#### 6.3.5 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript implementation guide for tool use featuring betaZodTool with Zod schemas, manual agentic loops with streaming support, code execution with file uploads and container reuse, memory tool with handler implementations, and structured outputs using Zod schemas.

### 6.4 Files & Batches API References

APIs for file management and asynchronous batch processing across Python and TypeScript, enabling document uploads up to 500 MB and cost-optimized processing of up to 100,000 requests with prompt caching support.

#### 6.4.1 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading, managing, and referencing files in Messages API requests, supporting PDFs, images, and documents up to 500 MB.

#### 6.4.2 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading, managing, and referencing files in Messages API requests, supporting PDFs, images, and documents.

#### 6.4.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for processing up to 100,000 Messages API requests asynchronously at 50% cost, with polling, result retrieval, and prompt caching support.

---

## 7. Skills, Customization & Communication

Frameworks for extending Claude's capabilities through reusable skills and custom agent design, plus analytics, learning modes, and output style directives that shape how Claude communicates.

### 7.1 Skills, Agent Design & Learning

Extensible skill frameworks invoked via slash commands, systematic agent design and persona development, usage analytics for workflow optimization, and collaborative learning modes.

#### 7.1.1 Skills System

Extensible command-based skill framework that converts specialized workflows into reusable, parameterized operations. Skills encapsulate domain expertise—from debugging and code review to API guidance—and are invoked via slash commands within conversations, with tooling to extract, refine, and document repeatable processes.

##### 7.1.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Execute specialized skills (slash commands) within the main conversation. Invoke matching skills before generating other responses.

##### 7.1.1.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Explains that slash commands like /commit invoke user-invocable skills via the Skill tool, and warns against guessing or using built-in CLI commands.

##### 7.1.1.3 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-round interview process to convert a completed session into a reusable skill. Analyzes the session's repeatable process, parameters, and success criteria, then iteratively refines the skill definition with the user before generating a SKILL.md file with proper frontmatter, step annotations, and execution guidance.

##### 7.1.1.4 [Debugging (Skill)](system-prompts/skill-debugging.md)

Skill for helping users debug issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 7.1.1.5 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel review agents to check for code reuse opportunities, quality issues (redundant state, parameter sprawl, leaky abstractions), and efficiency problems (unnecessary work, missed concurrency, hot-path bloat).

##### 7.1.1.6 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration via settings.json files, covering when hooks are required vs memory, reading existing settings before changes, merging arrays carefully, and configuring hooks (PreToolUse, PostToolUse, PreCompact) and permissions.

##### 7.1.1.7 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models (Opus 4.6, Sonnet 4.6, Haiku 4.5), adaptive thinking, effort parameters, and compaction for long conversations.

##### 7.1.1.8 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific Claude API reference documentation with quick task navigation, directing users to appropriate sections based on their use case (single calls, streaming, tool use, batches, files, agents).

#### 7.1.2 Usage Insights & Analytics

Data analysis and coaching framework that extracts structured insights from Claude Code sessions to identify working patterns, friction points, and growth opportunities. Generates actionable recommendations for feature adoption and workflow optimization.

##### 7.1.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part usage insights summary covering what's working, hindrances, quick wins, and ambitious workflows for Claude Code users.

##### 7.1.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with examples and explanations.

##### 7.1.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data.

##### 7.1.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from session transcripts including goal categories, user satisfaction, and friction types with specific counting rules.

##### 7.1.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns.

#### 7.1.3 Learning & Education Mode

Collaborative learning framework where Claude balances autonomous implementation with deliberate human involvement on design decisions, providing educational context and explanations to deepen understanding through hands-on practice.

##### 7.1.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning mode where Claude requests human input on design decisions while handling routine implementation, using TodoList tracking and Learn by Doing requests.

##### 7.1.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code writing to encourage learning through implementation-specific explanations.

#### 7.1.4 Agent Design & Creation

Systematic approach to designing and deploying custom AI agents through requirements extraction, persona development, and comprehensive system prompt architecture. Produces JSON specifications and documentation for agent instantiation and usage.

##### 7.1.4.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides Claude in designing high-performance custom AI agents by extracting user requirements, creating expert personas, architecting comprehensive system prompts, optimizing for performance, and generating JSON specifications with identifiers and usage examples.

##### 7.1.4.2 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code CLI, Claude Agent SDK, and Claude API by fetching official documentation, answering feature questions, and providing actionable guidance with code examples.

### 7.2 Output Style & Communication

Directives for shaping Claude's communication style, emphasizing conciseness, clarity, and structured formatting. Covers response brevity, code reference conventions, and user-facing help channels.

#### 7.2.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning and limiting text to essential information.

#### 7.2.2 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Directs Claude to produce polished, concise output without filler, repetition, or inner monologue, getting to the point quickly while preserving essential information.

#### 7.2.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

#### 7.2.4 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number patterns when referencing specific code locations to enable easy navigation.

#### 7.2.5 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users about available help and feedback channels when requested.
