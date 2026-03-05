# Claude Code System Prompts Index

Authoritative operational and reference material for building, running, and maintaining Claude Code agents — covering everything needed to safely execute work, coordinate intelligent systems, and develop against the underlying APIs.

## Table of Contents

1. [Bash Shell Execution](#1-bash-shell-execution)
   1. [Execution Patterns and Syntax](#11-execution-patterns-and-syntax)
      1. [Bash Tool: Core Behavior & Syntax Rules](#111-bash-tool-core-behavior-syntax-rules)
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
         12. [Bash (built-in tools note) [Tool Description]](#11112-bash-built-in-tools-note-tool-description)
      2. [Bash Tool: Prefer Dedicated Tools Over Bash](#112-bash-tool-prefer-dedicated-tools-over-bash)
         1. [Bash (prefer dedicated tools) [Tool Description]](#1121-bash-prefer-dedicated-tools-tool-description)
         2. [Bash (alternative — read files) [Tool Description]](#1122-bash-alternative-—-read-files-tool-description)
         3. [Bash (alternative — write files) [Tool Description]](#1123-bash-alternative-—-write-files-tool-description)
         4. [Bash (alternative — edit files) [Tool Description]](#1124-bash-alternative-—-edit-files-tool-description)
         5. [Bash (alternative — file search) [Tool Description]](#1125-bash-alternative-—-file-search-tool-description)
         6. [Bash (alternative — content search) [Tool Description]](#1126-bash-alternative-—-content-search-tool-description)
         7. [Bash (alternative — communication) [Tool Description]](#1127-bash-alternative-—-communication-tool-description)
         8. [Tool usage (reserve Bash) [System Prompt]](#1128-tool-usage-reserve-bash-system-prompt)
         9. [Tool usage (read files) [System Prompt]](#1129-tool-usage-read-files-system-prompt)
         10. [Tool usage (edit files) [System Prompt]](#11210-tool-usage-edit-files-system-prompt)
         11. [Tool usage (search files) [System Prompt]](#11211-tool-usage-search-files-system-prompt)
         12. [Tool usage (search content) [System Prompt]](#11212-tool-usage-search-content-system-prompt)
         13. [Tool usage (create files) [System Prompt]](#11213-tool-usage-create-files-system-prompt)
      3. [Bash Command Documentation Agent](#113-bash-command-documentation-agent)
         1. [Bash command description writer (Agent Prompt)](#1131-bash-command-description-writer-agent-prompt)
   2. [Bash Tool: Sleep & Background Task Management](#12-bash-tool-sleep-background-task-management)
      1. [Bash (sleep — keep short) [Tool Description]](#121-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#122-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — no retry loops) [Tool Description]](#123-bash-sleep-—-no-retry-loops-tool-description)
      4. [Bash (sleep — run immediately) [Tool Description]](#124-bash-sleep-—-run-immediately-tool-description)
      5. [Bash (sleep — use check commands) [Tool Description]](#125-bash-sleep-—-use-check-commands-tool-description)
      6. [Bash (sleep — use run_in_background) [Tool Description]](#126-bash-sleep-—-use-run_in_background-tool-description)
   3. [Bash Sandbox: Security & Restriction Management](#13-bash-sandbox-security-restriction-management)
      1. [Bash (sandbox — default to sandbox) [Tool Description]](#131-bash-sandbox-—-default-to-sandbox-tool-description)
      2. [Bash (sandbox — mandatory mode) [Tool Description]](#132-bash-sandbox-—-mandatory-mode-tool-description)
      3. [Bash (sandbox — no exceptions) [Tool Description]](#133-bash-sandbox-—-no-exceptions-tool-description)
      4. [Bash (sandbox — per-command) [Tool Description]](#134-bash-sandbox-—-per-command-tool-description)
      5. [Bash (sandbox — adjust settings) [Tool Description]](#135-bash-sandbox-—-adjust-settings-tool-description)
      6. [Bash (sandbox — retry without sandbox) [Tool Description]](#136-bash-sandbox-—-retry-without-sandbox-tool-description)
      7. [Bash (sandbox — user permission prompt) [Tool Description]](#137-bash-sandbox-—-user-permission-prompt-tool-description)
      8. [Bash (sandbox — no sensitive paths) [Tool Description]](#138-bash-sandbox-—-no-sensitive-paths-tool-description)
      9. [Bash (sandbox — tmpdir) [Tool Description]](#139-bash-sandbox-—-tmpdir-tool-description)
      10. [Bash (sandbox — explain restriction) [Tool Description]](#1310-bash-sandbox-—-explain-restriction-tool-description)
      11. [Bash (sandbox — response header) [Tool Description]](#1311-bash-sandbox-—-response-header-tool-description)
      12. [Bash (sandbox — failure evidence condition) [Tool Description]](#1312-bash-sandbox-—-failure-evidence-condition-tool-description)
      13. [Bash (sandbox — evidence list header) [Tool Description]](#1313-bash-sandbox-—-evidence-list-header-tool-description)
      14. [Bash (sandbox — evidence: access denied) [Tool Description]](#1314-bash-sandbox-—-evidence-access-denied-tool-description)
      15. [Bash (sandbox — evidence: network failures) [Tool Description]](#1315-bash-sandbox-—-evidence-network-failures-tool-description)
      16. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1316-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      17. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1317-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
2. [File, Web, and Tool Access](#2-file-web-and-tool-access)
   1. [Filesystem Operations](#21-filesystem-operations)
      1. [File Operation Tool Descriptions](#211-file-operation-tool-descriptions)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Edit (Tool Description)](#2113-edit-tool-description)
         4. [Glob (Tool Description)](#2114-glob-tool-description)
         5. [Grep (Tool Description)](#2115-grep-tool-description)
         6. [NotebookEdit (Tool Description)](#2116-notebookedit-tool-description)
      2. [File State & Content Warnings](#212-file-state-content-warnings)
         1. [File truncated (System Reminder)](#2121-file-truncated-system-reminder)
         2. [File exists but empty (System Reminder)](#2122-file-exists-but-empty-system-reminder)
         3. [File shorter than offset (System Reminder)](#2123-file-shorter-than-offset-system-reminder)
         4. [File modified by user or linter (System Reminder)](#2124-file-modified-by-user-or-linter-system-reminder)
         5. [Compact file reference (System Reminder)](#2125-compact-file-reference-system-reminder)
   2. [Browser and Web Retrieval](#22-browser-and-web-retrieval)
      1. [Browser & Web Automation](#221-browser-web-automation)
         1. [Computer (Tool Description)](#2211-computer-tool-description)
         2. [Computer action (Tool Parameter)](#2212-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#2213-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#2214-chrome-browser-mcp-tools-system-prompt)
      2. [Web Content Retrieval & Analysis](#222-web-content-retrieval-analysis)
         1. [WebSearch (Tool Description)](#2221-websearch-tool-description)
         2. [WebFetch (Tool Description)](#2222-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#2223-webfetch-summarizer-agent-prompt)
   3. [Tool Discovery and IDE Integration](#23-tool-discovery-and-ide-integration)
      1. [Tool Discovery & Capability Loading](#231-tool-discovery-capability-loading)
         1. [ToolSearch (Tool Description)](#2311-toolsearch-tool-description)
         2. [ToolSearch extended (Tool Description)](#2312-toolsearch-extended-tool-description)
         3. [Skill (Tool Description)](#2313-skill-tool-description)
         4. [Tool usage (skill invocation) [System Prompt]](#2314-tool-usage-skill-invocation-system-prompt)
      2. [Code Intelligence & IDE Awareness](#232-code-intelligence-ide-awareness)
         1. [LSP (Tool Description)](#2321-lsp-tool-description)
         2. [Lines selected in IDE (System Reminder)](#2322-lines-selected-in-ide-system-reminder)
         3. [File opened in IDE (System Reminder)](#2323-file-opened-in-ide-system-reminder)
         4. [New diagnostics detected (System Reminder)](#2324-new-diagnostics-detected-system-reminder)
   4. [User Engagement & Decision Support](#24-user-engagement-decision-support)
      1. [AskUserQuestion (Tool Description)](#241-askuserquestion-tool-description)
      2. [Option previewer (System Prompt)](#242-option-previewer-system-prompt)
      3. [/btw side question (System Reminder)](#243-btw-side-question-system-reminder)
3. [Agent Coordination and Planning](#3-agent-coordination-and-planning)
   1. [Planning and Task Tracking](#31-planning-and-task-tracking)
      1. [Planning Mode: Activation & Workflow](#311-planning-mode-activation-workflow)
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
      2. [Task & Todo Tracking Tools](#312-task-todo-tracking-tools)
         1. [TodoWrite (Tool Description)](#3121-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#3122-taskcreate-tool-description)
         3. [Tool usage (task management) [System Prompt]](#3123-tool-usage-task-management-system-prompt)
         4. [TodoWrite reminder (System Reminder)](#3124-todowrite-reminder-system-reminder)
         5. [Task tools reminder (System Reminder)](#3125-task-tools-reminder-system-reminder)
         6. [Task status (System Reminder)](#3126-task-status-system-reminder)
   2. [Multi-Agent and Swarm Coordination](#32-multi-agent-and-swarm-coordination)
      1. [Multi-Agent Team & Swarm Coordination](#321-multi-agent-team-swarm-coordination)
         1. [TeammateTool (Tool Description)](#3211-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#3212-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#3213-sendmessagetool-tool-description)
         4. [TaskList (teammate workflow) [Tool Description]](#3214-tasklist-teammate-workflow-tool-description)
         5. [Teammate Communication (System Prompt)](#3215-teammate-communication-system-prompt)
         6. [Team Coordination (System Reminder)](#3216-team-coordination-system-reminder)
         7. [Team Shutdown (System Reminder)](#3217-team-shutdown-system-reminder)
         8. [/batch slash command (Agent Prompt)](#3218-batch-slash-command-agent-prompt)
      2. [Sub-Agent & Task Delegation](#322-sub-agent-task-delegation)
         1. [Task (Tool Description)](#3221-task-tool-description)
         2. [Tool usage (subagent guidance) [System Prompt]](#3222-tool-usage-subagent-guidance-system-prompt)
         3. [Tool usage (delegate exploration) [System Prompt]](#3223-tool-usage-delegate-exploration-system-prompt)
         4. [Tool usage (direct search) [System Prompt]](#3224-tool-usage-direct-search-system-prompt)
         5. [Task tool (Agent Prompt)](#3225-task-tool-agent-prompt)
         6. [Task tool (extra notes) [Agent Prompt]](#3226-task-tool-extra-notes-agent-prompt)
         7. [Explore (Agent Prompt)](#3227-explore-agent-prompt)
   3. [Agent Configuration and Invocation](#33-agent-configuration-and-invocation)
      1. [Agent Creation & Configuration](#331-agent-creation-configuration)
         1. [Agent creation architect (Agent Prompt)](#3311-agent-creation-architect-agent-prompt)
         2. [Update Claude Code Config (Skill)](#3312-update-claude-code-config-skill)
         3. [Skillify Current Session (System Prompt)](#3313-skillify-current-session-system-prompt)
      2. [Agent Invocation & System Reminders](#332-agent-invocation-system-reminders)
         1. [Agent mention (System Reminder)](#3321-agent-mention-system-reminder)
         2. [Worker instructions (System Prompt)](#3322-worker-instructions-system-prompt)
         3. [Scratchpad directory (System Prompt)](#3323-scratchpad-directory-system-prompt)
         4. [Status line setup (Agent Prompt)](#3324-status-line-setup-agent-prompt)
         5. [Sleep (Tool Description)](#3325-sleep-tool-description)
4. [Code Quality, Safety, and Review](#4-code-quality-safety-and-review)
   1. [Git Operations & Version Control](#41-git-operations-version-control)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#411-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#412-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#413-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#414-bash-git-—-prefer-new-commits-tool-description)
      5. [EnterWorktree (Tool Description)](#415-enterworktree-tool-description)
      6. [Git status (System Prompt)](#416-git-status-system-prompt)
      7. [Quick git commit (Agent Prompt)](#417-quick-git-commit-agent-prompt)
      8. [Quick PR creation (Agent Prompt)](#418-quick-pr-creation-agent-prompt)
      9. [/pr-comments slash command (Agent Prompt)](#419-pr-comments-slash-command-agent-prompt)
      10. [/review-pr slash command (Agent Prompt)](#4110-review-pr-slash-command-agent-prompt)
      11. [Session title and branch generation (Agent Prompt)](#4111-session-title-and-branch-generation-agent-prompt)
   2. [Coding Standards and Safe Execution](#42-coding-standards-and-safe-execution)
      1. [Code Quality & Task Execution Guidelines](#421-code-quality-task-execution-guidelines)
         1. [Doing tasks (avoid over-engineering) [System Prompt]](#4211-doing-tasks-avoid-over-engineering-system-prompt)
         2. [Doing tasks (no unnecessary additions) [System Prompt]](#4212-doing-tasks-no-unnecessary-additions-system-prompt)
         3. [Doing tasks (no premature abstractions) [System Prompt]](#4213-doing-tasks-no-premature-abstractions-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#4214-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no unnecessary error handling) [System Prompt]](#4215-doing-tasks-no-unnecessary-error-handling-system-prompt)
         6. [Doing tasks (minimize file creation) [System Prompt]](#4216-doing-tasks-minimize-file-creation-system-prompt)
         7. [Doing tasks (read before modifying) [System Prompt]](#4217-doing-tasks-read-before-modifying-system-prompt)
         8. [Doing tasks (security) [System Prompt]](#4218-doing-tasks-security-system-prompt)
         9. [Doing tasks (software engineering focus) [System Prompt]](#4219-doing-tasks-software-engineering-focus-system-prompt)
         10. [Doing tasks (ambitious tasks) [System Prompt]](#42110-doing-tasks-ambitious-tasks-system-prompt)
         11. [Doing tasks (blocked approach) [System Prompt]](#42111-doing-tasks-blocked-approach-system-prompt)
         12. [Doing tasks (no time estimates) [System Prompt]](#42112-doing-tasks-no-time-estimates-system-prompt)
         13. [Doing tasks (help and feedback) [System Prompt]](#42113-doing-tasks-help-and-feedback-system-prompt)
      2. [Safe Action Execution & Permission Management](#422-safe-action-execution-permission-management)
         1. [Executing actions with care (System Prompt)](#4221-executing-actions-with-care-system-prompt)
         2. [Tool execution denied (System Prompt)](#4222-tool-execution-denied-system-prompt)
         3. [Tool permission mode (System Prompt)](#4223-tool-permission-mode-system-prompt)
         4. [Malware analysis after Read tool call (System Reminder)](#4224-malware-analysis-after-read-tool-call-system-reminder)
         5. [Censoring assistance with malicious activities (System Prompt)](#4225-censoring-assistance-with-malicious-activities-system-prompt)
   3. [Output Style & Communication Tone](#43-output-style-communication-tone)
      1. [Tone and style (concise output — detailed) [System Prompt]](#431-tone-and-style-concise-output-—-detailed-system-prompt)
      2. [Tone and style (concise output — short) [System Prompt]](#432-tone-and-style-concise-output-—-short-system-prompt)
      3. [Tone and style (code references) [System Prompt]](#433-tone-and-style-code-references-system-prompt)
      4. [Output style active (System Reminder)](#434-output-style-active-system-reminder)
      5. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#435-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   4. [Security Review and Code Analysis](#44-security-review-and-code-analysis)
      1. [Security Review & Vulnerability Analysis](#441-security-review-vulnerability-analysis)
         1. [/security-review slash command (Agent Prompt)](#4411-security-review-slash-command-agent-prompt)
         2. [Bash command prefix detection (Agent Prompt)](#4412-bash-command-prefix-detection-agent-prompt)
      2. [Code Review & Refactoring Skills](#442-code-review-refactoring-skills)
         1. [Simplify (Skill)](#4421-simplify-skill)
         2. [Debugging (Skill)](#4422-debugging-skill)
   5. [Verification & Testing Skills](#45-verification-testing-skills)
      1. [Create verifier skills (Skill)](#451-create-verifier-skills-skill)
      2. [Verification specialist (Skill)](#452-verification-specialist-skill)
5. [Session, Memory, and Context Management](#5-session-memory-and-context-management)
   1. [Memory and Knowledge Persistence](#51-memory-and-knowledge-persistence)
      1. [Memory & Session State Management](#511-memory-session-state-management)
         1. [Memory file contents (System Reminder)](#5111-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#5112-nested-memory-contents-system-reminder)
         3. [Memory selection (Agent Prompt)](#5113-memory-selection-agent-prompt)
         4. [Session memory update instructions (Agent Prompt)](#5114-session-memory-update-instructions-agent-prompt)
         5. [Agent memory instructions (System Prompt)](#5115-agent-memory-instructions-system-prompt)
         6. [Session memory template (Data)](#5116-session-memory-template-data)
      2. [Conversation & Context Summarization](#512-conversation-context-summarization)
         1. [Conversation summarization (Agent Prompt)](#5121-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#5122-recent-message-summarization-agent-prompt)
         3. [Tool Use Summary Generation (System Prompt)](#5123-tool-use-summary-generation-system-prompt)
         4. [Agent Summary Generation (System Prompt)](#5124-agent-summary-generation-system-prompt)
   2. [Session Lifecycle and Resource Tracking](#52-session-lifecycle-and-resource-tracking)
      1. [Session Lifecycle & Continuation](#521-session-lifecycle-continuation)
         1. [Context compaction summary (System Prompt)](#5211-context-compaction-summary-system-prompt)
         2. [Session continuation (System Reminder)](#5212-session-continuation-system-reminder)
         3. [Token usage (System Reminder)](#5213-token-usage-system-reminder)
         4. [USD budget (System Reminder)](#5214-usd-budget-system-reminder)
         5. [Output token limit exceeded (System Reminder)](#5215-output-token-limit-exceeded-system-reminder)
      2. [Session Search & Discovery](#522-session-search-discovery)
         1. [Session Search Assistant (Agent Prompt)](#5221-session-search-assistant-agent-prompt)
         2. [Invoked skills (System Reminder)](#5222-invoked-skills-system-reminder)
   3. [Hook System: Configuration & Lifecycle Events](#53-hook-system-configuration-lifecycle-events)
      1. [Hooks Configuration (System Prompt)](#531-hooks-configuration-system-prompt)
      2. [Hook success (System Reminder)](#532-hook-success-system-reminder)
      3. [Hook blocking error (System Reminder)](#533-hook-blocking-error-system-reminder)
      4. [Hook additional context (System Reminder)](#534-hook-additional-context-system-reminder)
      5. [Hook stopped continuation (System Reminder)](#535-hook-stopped-continuation-system-reminder)
      6. [Hook stopped continuation prefix (System Reminder)](#536-hook-stopped-continuation-prefix-system-reminder)
      7. [Hook condition evaluator (Agent Prompt)](#537-hook-condition-evaluator-agent-prompt)
      8. [Agent Hook (Agent Prompt)](#538-agent-hook-agent-prompt)
   4. [Usage Analytics and User Guidance](#54-usage-analytics-and-user-guidance)
      1. [Usage Insights & Analytics](#541-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#5411-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#5412-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#5413-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#5414-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#5415-insights-suggestions-system-prompt)
      2. [Prompt Suggestions & User Intent Prediction](#542-prompt-suggestions-user-intent-prediction)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#5421-prompt-suggestion-generator-v2-agent-prompt)
         2. [User sentiment analysis (Agent Prompt)](#5422-user-sentiment-analysis-agent-prompt)
6. [API, SDK, and Developer Reference](#6-api-sdk-and-developer-reference)
   1. [Claude API and SDK Reference](#61-claude-api-and-sdk-reference)
      1. [Claude API SDK Reference Data](#611-claude-api-sdk-reference-data)
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
      2. [Tool Use & Streaming API Reference Data](#612-tool-use-streaming-api-reference-data)
         1. [Tool use concepts (Data)](#6121-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6122-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6123-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#6124-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#6125-streaming-reference-—-typescript-data)
         6. [Files API reference — Python (Data)](#6126-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#6127-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#6128-message-batches-api-reference-—-python-data)
      3. [Build with Claude API Skills & Routing](#613-build-with-claude-api-skills-routing)
         1. [Build with Claude API (Skill)](#6131-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#6132-build-with-claude-api-reference-guide-skill)
   2. [Agent SDK and MCP Integration](#62-agent-sdk-and-mcp-integration)
      1. [Agent SDK Reference Data](#621-agent-sdk-reference-data)
         1. [Agent SDK reference — Python (Data)](#6211-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#6212-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#6213-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#6214-agent-sdk-patterns-—-typescript-data)
      2. [MCP Resource Handling](#622-mcp-resource-handling)
         1. [MCP resource no content (System Reminder)](#6221-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#6222-mcp-resource-no-displayable-content-system-reminder)
   3. [CI/CD and Codebase Documentation](#63-cicd-and-codebase-documentation)
      1. [GitHub Integration & CI/CD](#631-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#6311-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#6312-github-app-installation-pr-description-data)
      2. [Documentation Generation & Codebase Analysis](#632-documentation-generation-codebase-analysis)
         1. [CLAUDE.md creation (Agent Prompt)](#6321-claudemd-creation-agent-prompt)
         2. [Update Magic Docs (Agent Prompt)](#6322-update-magic-docs-agent-prompt)
         3. [Claude guide agent (Agent Prompt)](#6323-claude-guide-agent-agent-prompt)
   4. [Learning Mode & Educational Features](#64-learning-mode-educational-features)
      1. [Learning mode (System Prompt)](#641-learning-mode-system-prompt)
      2. [Learning mode (insights) [System Prompt]](#642-learning-mode-insights-system-prompt)

---

## 1. Bash Shell Execution

Rules, conventions, and safety controls governing how bash commands are executed, including syntax patterns, sandbox restrictions, background task management, and documentation generation.

### 1.1 Execution Patterns and Syntax

Core conventions for running bash commands correctly: path quoting, working directory persistence, command chaining, parallel execution, and timeout configuration.

#### 1.1.1 Bash Tool: Core Behavior & Syntax Rules

Bash command execution follows specific syntax conventions: maintain working directory with absolute paths, quote file paths with spaces, chain dependent commands with `&&`, and run independent commands as parallel tool calls. Working directory persists between commands while shell state resets; environment initializes from user profile. Timeout configuration is optional and measured in milliseconds.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

##### 1.1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs Claude to write clear, concise descriptions of bash commands, keeping simple commands brief and providing context for complex piped or obscure commands.

##### 1.1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain the current working directory by using absolute paths and avoiding cd commands unless explicitly requested.

##### 1.1.1.4 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between bash commands but shell state does not, with environment initialized from user profile.

##### 1.1.1.5 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs Claude not to use newlines to separate bash commands.

##### 1.1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs Claude to always quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.7 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to run independent bash commands as parallel tool calls in a single message for efficiency.

##### 1.1.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands with `&&` in a single bash call when sequential execution is required.

##### 1.1.1.9 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially without caring if earlier commands fail.

##### 1.1.1.10 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Documents optional timeout configuration in milliseconds for bash commands, with maximum and default timeout values.

##### 1.1.1.11 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence with `ls` before creating new directories or files.

##### 1.1.1.12 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and transparency than bash equivalents.

#### 1.1.2 Bash Tool: Prefer Dedicated Tools Over Bash

Dedicated tools provide superior user experience and transparency compared to bash equivalents. Use Read for file access, Write for file creation, Edit for modifications, Glob for file discovery, and Grep for content search instead of cat, echo, sed, awk, find, or grep commands. Reserve Bash exclusively for system and terminal operations.

##### 1.1.2.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using bash for find, grep, cat, head, tail, sed, awk, or echo commands and instead use dedicated tools for better user experience.

##### 1.1.2.2 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs Claude to use the Read tool for file reading instead of cat, head, or tail bash commands.

##### 1.1.2.3 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use the Write tool for file writing instead of echo or cat bash commands.

##### 1.1.2.4 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs Claude to use the Edit tool for file editing instead of sed or awk bash commands.

##### 1.1.2.5 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use the Glob tool for file search instead of find or ls bash commands.

##### 1.1.2.6 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use the Grep tool for content search instead of grep or rg bash commands.

##### 1.1.2.7 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly rather than using echo or printf commands.

##### 1.1.2.8 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations; default to dedicated tools when available.

##### 1.1.2.9 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Use the Read tool instead of cat, head, tail, or sed for file access.

##### 1.1.2.10 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Prefer the Edit tool over sed or awk for file modifications.

##### 1.1.2.11 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool instead of find or ls for file discovery.

##### 1.1.2.12 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool instead of grep or rg for searching file contents.

##### 1.1.2.13 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Use Write tool to create files instead of cat heredoc or echo redirection.

#### 1.1.3 Bash Command Documentation Agent

Generates concise, active-voice documentation for bash commands with contextual depth proportional to command complexity.

##### 1.1.3.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions for bash commands, keeping simple commands brief while adding context for complex piped or flag-heavy commands.

### 1.2 Bash Tool: Sleep & Background Task Management

Avoid sleep as a control mechanism. Keep sleep durations short (1-5 seconds) when necessary. Use `run_in_background` for long-running commands instead of polling loops, and wait for completion notifications rather than checking status. Diagnose root causes of failures instead of retrying; use check commands like `gh run view` when polling external processes.

#### 1.2.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.2.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background` but instead wait for completion notification.

#### 1.2.3 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Instructs Claude to diagnose root causes of failures rather than retrying in sleep loops.

#### 1.2.4 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

#### 1.2.5 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` rather than sleeping when polling external processes.

#### 1.2.6 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Instructs Claude to use `run_in_background` for long-running commands instead of sleeping, with notification on completion.

### 1.3 Bash Sandbox: Security & Restriction Management

All bash commands run in sandbox mode by default with no exceptions. Treat each command individually and default to sandbox for future commands even after disabling it once. When sandbox restrictions cause failures, explain the restriction and mention the `/sandbox` command for management. Use `$TMPDIR` or `${SANDBOX_TMPDIR_FN()}` for temporary files. Never suggest sensitive paths like ~/.ssh or credential files for allowlisting.

#### 1.3.1 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to default to running commands within the sandbox and only bypass when the user explicitly requests it or sandbox restrictions are evident.

#### 1.3.2 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode with the `dangerouslyDisableSandbox` parameter disabled by policy.

#### 1.3.3 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.3.4 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands even after running with `dangerouslyDisableSandbox: true`.

#### 1.3.5 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to work with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 1.3.6 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with `dangerouslyDisableSandbox: true` when sandbox failure occurs without asking the user.

#### 1.3.7 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

#### 1.3.8 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.3.9 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode instead of `/tmp` directly.

#### 1.3.10 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

#### 1.3.11 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provides a response header for how to handle sandbox-caused failures.

#### 1.3.12 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure modes.

#### 1.3.13 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that identify sandbox-caused command failures.

#### 1.3.14 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox-caused failures.

#### 1.3.15 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox-caused failures.

#### 1.3.16 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies operation not permitted errors for file and network operations as evidence of sandbox-caused failures.

#### 1.3.17 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions.

---

## 2. File, Web, and Tool Access

Dedicated tools for reading, writing, and searching files; browser and web content retrieval; IDE code intelligence; and mechanisms for discovering and loading additional tool capabilities.

### 2.1 Filesystem Operations

Core tools for reading, writing, editing, and searching files, including handling of images, PDFs, notebooks, and regex-based content discovery.

#### 2.1.1 File Operation Tool Descriptions

Core filesystem operations for reading, writing, and searching files with specialized support for images, PDFs, notebooks, and regex-based content discovery. Glob and grep enable fast file discovery; edit and write tools handle modifications with different strategies for new versus existing files.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page range limits for large files), and Jupyter notebooks. Uses absolute paths and can read up to configurable line limits with optional offset parameters.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, overwriting existing files. Prefer Edit tool for modifications; use Write for new files or complete rewrites. Never create documentation or README files unless explicitly requested.

##### 2.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Defines exact string replacement functionality for files, with guidance on preserving indentation, preferring existing files, and using `replace_all` for non-unique matches.

##### 2.1.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like "**/*.js" that returns sorted results by modification time. Use for name-based file searches; prefer the Agent tool for open-ended multi-round searches.

##### 2.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting full regex syntax, file filtering by glob or type, and multiple output modes. Supports multiline pattern matching and must be used instead of bash grep commands for correct permissions.

##### 2.1.1.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing contents completely. Supports insert and delete modes with 0-indexed cell numbering and requires absolute file paths.

#### 2.1.2 File State & Content Warnings

Alerts notify when files exceed display limits, are empty, have read offsets beyond their bounds, or have been externally modified by users or linters. These warnings preserve awareness of file state changes and content accessibility constraints without interrupting workflow.

##### 2.1.2.1 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notify that a large file was truncated to a line limit; use Read tool to access remaining content if needed.

##### 2.1.2.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warn when a file exists but contains no content.

##### 2.1.2.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warn when a read offset exceeds file length, providing actual file line count.

##### 2.1.2.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notify that a file was externally modified by user or linter; account for changes without reverting unless requested.

##### 2.1.2.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Note that a large file was read before summarization; use Read tool to access it if needed.

### 2.2 Browser and Web Retrieval

Chrome-based browser automation for UI interaction and screenshot capture, alongside web search and HTML-to-markdown conversion with source attribution.

#### 2.2.1 Browser & Web Automation

Chrome-based browser automation enabling programmatic UI interaction through mouse, keyboard, and visual feedback mechanisms. Supports screenshot capture, precise cursor control, and debugging workflows with best practices for tab management and error prevention.

##### 2.2.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Chrome browser automation tool for mouse and keyboard interaction with web pages, including screenshot capture and precise cursor positioning guidance.

##### 2.2.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for Chrome browser control including clicks, typing, scrolling, keyboard input, dragging, zooming, and hover states for UI automation.

##### 2.2.1.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Best practices for browser automation using Claude in Chrome tools including GIF recording, console debugging, alert handling, tab context management, and avoiding infinite loops.

##### 2.2.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use to enable browser automation capabilities.

#### 2.2.2 Web Content Retrieval & Analysis

Tools for accessing current web information and processing remote content into structured formats. Combines real-time search with HTML-to-markdown conversion and intelligent summarization, enforcing source attribution and citation discipline based on domain trustworthiness.

##### 2.2.2.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff. Requires mandatory "Sources:" section with markdown hyperlinks in responses. Supports domain filtering and is US-only; must use current year in queries.

##### 2.2.2.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a small model. Includes 15-minute cache, automatic HTTP-to-HTTPS upgrade, and redirect handling. Prefer MCP web fetch tools if available.

##### 2.2.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and citation practices for untrusted domains while allowing flexible content use for trusted sources.

### 2.3 Tool Discovery and IDE Integration

Keyword-based tool discovery and deferred skill loading, combined with Language Server Protocol integration for semantic code navigation and diagnostic awareness.

#### 2.3.1 Tool Discovery & Capability Loading

Mechanisms for discovering and activating deferred tools and specialized skills. ToolSearch enables keyword-based tool discovery with immediate loading, while Skills provide slash-command access to domain-specific capabilities embedded in the conversation context.

##### 2.3.1.1 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite for loading deferred tools before use. Must be called before directly invoking deferred tools; both query modes load returned tools immediately for use.

##### 2.3.1.2 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage guide for ToolSearch supporting keyword search, direct selection, and required keyword modes. Keyword searches return up to 5 tools ranked by relevance; both modes load tools immediately without follow-up selection calls.

##### 2.3.1.3 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation. Must invoke before generating other responses when a skill matches the user's request. Skills are listed in system-reminder messages and can be invoked with optional arguments.

##### 2.3.1.4 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute slash commands that invoke user-invocable skills; only invoke skills listed in the tool's user-invocable section.

#### 2.3.2 Code Intelligence & IDE Awareness

Language Server Protocol integration providing semantic code analysis, symbol navigation, and type information. Maintains contextual awareness of IDE state including file selection, line ranges, and diagnostic feedback to inform code-aware assistance.

##### 2.3.2.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides code intelligence via Language Server Protocol including symbol navigation, references, hover information, and call hierarchy analysis. Requires LSP server configuration for the file type and position parameters (line and character, 1-based).

##### 2.3.2.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in the IDE, providing the line range and file context.

##### 2.3.2.3 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notify that user opened a file in the IDE, which may or may not relate to the current task.

##### 2.3.2.4 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to new diagnostic issues that have been detected in the codebase.

### 2.4 User Engagement & Decision Support

Interactive tools for gathering user input, clarifying ambiguous requirements, and presenting options with visual previews. Enables real-time decision-making during execution and plan refinement without requiring explicit approval workflows.

#### 2.4.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use AskUserQuestion to gather user preferences, clarify ambiguous instructions, and get decisions during execution. In plan mode, use it to clarify requirements before finalizing the plan, not to ask for plan approval.

#### 2.4.2 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Use markdown field on options to display side-by-side previews of UI mockups, code snippets, or diagrams for visual comparison in single-select questions.

#### 2.4.3 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer side questions directly without tools, using only conversation context, in a single response with no follow-up capability.

---

## 3. Agent Coordination and Planning

Frameworks for planning work before implementation, delegating tasks to sub-agents, coordinating multi-agent teams, and managing agent lifecycle and invocation workflows.

### 3.1 Planning and Task Tracking

Structured planning workflows that pause implementation for codebase exploration and user approval, alongside tools for breaking work into tracked tasks with state management.

#### 3.1.1 Planning Mode: Activation & Workflow

Structured planning workflows that pause implementation to explore codebases, design approaches, and obtain user approval before writing code. Supports iterative pair-planning, multi-agent collaboration, and subagent coordination with read-only constraints during the planning phase.

##### 3.1.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Instructs Claude to proactively use plan mode for non-trivial implementation tasks to explore the codebase, design approaches, and obtain user approval before writing code. Covers when to use (new features, multiple approaches, architectural decisions, multi-file changes) and when to skip (simple fixes, clear requirements).

##### 3.1.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning phase and requests user approval of the plan file. Use only for implementation tasks requiring code, not for research or exploration tasks. Reads plan from file and presents it for user review without requiring additional parameters.

##### 3.1.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode constraints and guides a structured five-phase planning workflow: initial understanding through parallel exploration, design with agent collaboration, review and clarification, final plan documentation, and mode exit. Prohibits all edits except to the plan file and non-readonly tool execution.

##### 3.1.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning where Claude explores code, updates the plan file incrementally, and asks clarifying questions in a loop until the plan is complete. Restricts edits to the plan file only and requires exit via tool call.

##### 3.1.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagents in plan mode to read-only actions and plan file editing, requiring them to answer queries comprehensively and ask clarifying questions without making system changes.

##### 3.1.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, requiring evaluation of existing plan against new request and appropriate plan file updates before proceeding.

##### 3.1.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notify that plan mode has ended and full tool access and editing capabilities are restored.

##### 3.1.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and suggests continuing work on it if relevant.

##### 3.1.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 3.1.1.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases and designs implementation plans by understanding requirements, examining patterns, and detailing step-by-step strategies with identified critical files and architectural trade-offs.

#### 3.1.2 Task & Todo Tracking Tools

Tools for breaking down complex work into tracked tasks with state management (pending, in-progress, completed). Automatically surfaces progress and enables immediate completion marking throughout coding sessions.

##### 3.1.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages task lists for coding sessions with states (pending, in_progress, completed). Use for multi-step tasks, complex work, or when users provide multiple requirements. Requires both imperative content and present-continuous activeForm for each task.

##### 3.1.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress on complex multi-step work. Use proactively for tasks with 3+ steps, plan mode, or when users provide multiple requirements. Always include both imperative subject and present-continuous activeForm.

##### 3.1.2.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Use TodoWrite to break down work, track progress, and mark tasks complete immediately upon finishing.

##### 3.1.2.4 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently suggests using the TodoWrite tool for task progress tracking when relevant, without mentioning this reminder to the user.

##### 3.1.2.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task creation and update tools for progress tracking when relevant, without mentioning this reminder to the user.

##### 3.1.2.6 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

References the TaskOutput tool for checking task execution results.

### 3.2 Multi-Agent and Swarm Coordination

Orchestration of agent teams through shared task lists, direct messaging, and coordinated shutdown for large-scale parallelizable work.

#### 3.2.1 Multi-Agent Team & Swarm Coordination

Orchestrates teams of agents on complex projects through shared task lists, direct messaging, and coordinated shutdown. Enables large-scale parallelizable work by decomposing tasks into independent units and spawning isolated worker agents with progress tracking.

##### 3.2.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Creates and manages teams for coordinating multiple agents on complex projects. Teams have 1:1 correspondence with task lists. Teammates automatically go idle between turns, receive messages automatically, and coordinate via shared task lists and direct messaging.

##### 3.2.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion. Fails if active team members remain; requires graceful teammate shutdown first before cleanup.

##### 3.2.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to teammates and handles protocol requests/responses in swarms. Supports direct messages, broadcasts (use sparingly), shutdown requests, and plan approval responses. Plain text output is invisible to teammates—must use this tool for all team communication.

##### 3.2.1.4 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for finding and claiming available work from shared task lists. Teammates should prefer tasks in ID order, check for unblocked pending tasks, and notify team lead if blocked.

##### 3.2.1.5 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Use SendMessage tool with message or broadcast type to communicate with teammates in agent swarms; text responses are not visible to other agents.

##### 3.2.1.6 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity and coordination responsibilities, requiring use of teammate names for messaging and periodic task list checks.

##### 3.2.1.7 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down team members gracefully and clean up before returning a final response in non-interactive mode.

##### 3.2.1.8 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes through three phases: research and planning with Explore agents to decompose work into 5-30 independent units, spawning background worker agents with isolated worktrees, and tracking progress with status tables. Includes end-to-end test recipe determination and worker instruction templates.

#### 3.2.2 Sub-Agent & Task Delegation

Launches specialized sub-agents for parallelizing independent work like codebase exploration, code analysis, and research. Agents execute concurrently with full context preservation and can be resumed across turns while protecting main context limits.

##### 3.2.2.1 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents for complex tasks like research, code analysis, and testing. Supports concurrent agent execution, background task running, and agent resumption with full context preservation. Agents can be isolated in worktrees and should receive detailed prompts for autonomous work.

##### 3.2.2.2 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use the Task tool with specialized subagents for parallelizing independent queries and protecting context, but avoid redundant work and excessive delegation.

##### 3.2.2.3 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Use the Task tool with exploration subagents for broad codebase research when simple searches prove insufficient or queries exceed the limit.

##### 3.2.2.4 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Use Glob or Grep tools directly for simple, targeted codebase searches.

##### 3.2.2.5 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

General-purpose subagent for researching questions, searching code, and executing multi-step tasks across large codebases. Specializes in file searches, code analysis, and architecture investigation using glob and grep patterns.

##### 3.2.2.6 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Additional usage notes for Task tool emphasizing absolute file paths, no emojis, and proper formatting without colons before tool calls.

##### 3.2.2.7 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist for exploring codebases using glob patterns, regex grep searches, and file reading. Rapidly finds files, analyzes code patterns, and investigates architecture across large repositories with configurable thoroughness levels.

### 3.3 Agent Configuration and Invocation

Designing custom agents through persona architecture and system prompt optimization, capturing repeatable processes as skills, and orchestrating post-implementation workflows.

#### 3.3.1 Agent Creation & Configuration

Framework for designing custom AI agents through intent extraction, persona architecture, and system prompt optimization, alongside workflows for capturing repeatable processes as reusable skills and configuring Claude Code environments.

##### 3.3.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts with behavioral boundaries and decision frameworks, optimizing for performance, and generating concise identifiers. Includes methodology for incorporating project-specific context from CLAUDE.md files and detailed examples of agent usage patterns.

##### 3.3.1.2 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Workflow for modifying Claude Code settings.json files including hooks, permissions, and environment variables with emphasis on reading existing config before merging changes.

##### 3.3.1.3 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Convert repeatable session processes into reusable skills through structured analysis and user interviews covering goals, steps, success criteria, and execution modes; generate SKILL.md files with frontmatter, step annotations, and trigger phrases.

#### 3.3.2 Agent Invocation & System Reminders

Orchestrates agent activation, post-implementation workflows including testing and PR creation, session-isolated file management, and dynamic terminal status display configuration.

##### 3.3.2.1 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Invoke the specified agent with required context when user requests agent activation.

##### 3.3.2.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

After implementing changes, simplify code, run unit tests, perform end-to-end testing, commit and push with a PR, then report the PR URL or failure reason.

##### 3.3.2.3 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Use a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, avoiding permission prompts and project contamination.

##### 3.3.2.4 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell configs, converting escape sequences to shell commands, and updating settings.json. Receives JSON input with session, workspace, model, and context window data for dynamic status rendering.

##### 3.3.2.5 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Waits for a specified duration with early wake capability on user input. Receives periodic tick prompts for checking available work. Preferred over bash sleep as it doesn't hold shell processes.

---

## 4. Code Quality, Safety, and Review

Guidelines for pragmatic code execution, safe handling of destructive operations, communication standards, version control safety, and systematic code review and testing.

### 4.1 Git Operations & Version Control

Git operations prioritize safety: never skip hooks or bypass signing unless explicitly requested, investigate and fix hook failures rather than bypassing them, and consider safer alternatives before destructive operations like force push or hard reset. Create new commits rather than amending; never commit without explicit user request. Dedicated agents handle commits, pull requests, code reviews, and branch management with pre-populated context and safety enforcement.

#### 4.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

#### 4.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, commit message formatting, and PR creation via gh command. Emphasizes never committing without explicit user request and creating new commits rather than amending.

#### 4.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude to never skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues when hooks fail.

#### 4.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to prefer creating new commits over amending existing ones.

#### 4.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, only when explicitly requested by the user. Requires a git repository or VCS-agnostic hooks configured, and automatically prompts on session exit whether to keep or remove the worktree.

#### 4.1.6 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Display current git branch, main branch, status, and recent commits as a snapshot at conversation start.

#### 4.1.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context from git status and diff. Analyzes changes, drafts messages following repository conventions, and stages files while enforcing safety protocols against secrets and hook skipping.

#### 4.1.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated context, handling branch creation, commit messaging, and PR body generation. Includes optional Slack notification posting and enforces git safety protocols against force pushes and destructive operations.

#### 4.1.9 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including both PR-level and code review comments with file context, line numbers, and diff hunks in a readable threaded format.

#### 4.1.10 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by analyzing diffs and providing thorough code review covering quality, style, improvements, risks, code correctness, conventions, performance, test coverage, and security.

#### 4.1.11 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (under 6 words, sentence case) and git branch names (under 4 words, lowercase with dashes, prefixed with 'claude/').

### 4.2 Coding Standards and Safe Execution

Directives for minimal-scope, security-first coding that avoids over-engineering, combined with reversibility assessment and user confirmation before destructive operations.

#### 4.2.1 Code Quality & Task Execution Guidelines

Directives for pragmatic, focused code work that avoids over-engineering, unnecessary abstractions, and premature complexity. Emphasizes reading existing code before modification, minimal scope adherence, security-first practices, and deferring to user judgment on ambitious tasks rather than imposing artificial constraints.

##### 4.2.1.1 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Instruction to make only directly requested or clearly necessary changes, keeping solutions simple and focused.

##### 4.2.1.2 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Instruction to avoid adding features, refactoring, or improvements beyond what was requested, keeping changes focused and minimal.

##### 4.2.1.3 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Guidance against creating abstractions for one-time operations or hypothetical requirements, favoring minimal necessary complexity.

##### 4.2.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instruction to delete unused code completely rather than adding compatibility shims or renaming conventions.

##### 4.2.1.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Avoid adding error handling, fallbacks, or validation for impossible scenarios; only validate at system boundaries like user input and external APIs.

##### 4.2.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directive to prefer editing existing files over creating new ones to prevent file bloat.

##### 4.2.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Read and understand existing code before proposing modifications or changes.

##### 4.2.1.8 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Avoid introducing security vulnerabilities such as command injection, XSS, SQL injection, and other OWASP top 10 issues; prioritize safe and correct code.

##### 4.2.1.9 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Interpret user instructions in the context of software engineering tasks like bug fixes, refactoring, and code modifications rather than literal text responses.

##### 4.2.1.10 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Directive to enable users to complete ambitious tasks by deferring to user judgment on scope.

##### 4.2.1.11 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Guidance to consider alternative approaches when blocked rather than brute-forcing, using AskUserQuestion to align on path forward.

##### 4.2.1.12 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Directive to avoid giving time estimates or predictions, focusing on what needs to be done instead.

##### 4.2.1.13 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Template for informing users about help and feedback channels.

#### 4.2.2 Safe Action Execution & Permission Management

Safety guardrails for executing potentially destructive or irreversible operations, requiring careful reversibility assessment and user confirmation before force-pushes, deletions, or shared-state changes. Respects permission boundaries, explores alternatives when tools are denied, and permits authorized security testing while prohibiting malicious code augmentation.

##### 4.2.2.1 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Carefully evaluate reversibility and blast radius of actions; confirm with users before taking destructive, hard-to-reverse, or shared-state operations like force-pushing, deleting files, or sending messages. Investigate unexpected state rather than bypassing safety checks.

##### 4.2.2.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

When tool execution is denied, attempt reasonable alternatives without malicious workarounds; stop and explain to the user if the capability is essential.

##### 4.2.2.3 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Respect user permission modes; when a tool is denied, adjust approach rather than retrying the same call, and ask for clarification if needed.

##### 4.2.2.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Permits analysis and reporting of malware behavior but prohibits improving or augmenting malicious code.

##### 4.2.2.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, CTF challenges, and defensive security while refusing requests for destructive attacks, DoS, and malicious detection evasion.

### 4.3 Output Style & Communication Tone

Standards for polished, concise communication that eliminates filler and inner monologue while preserving essential information. Includes precise code location references and parallel tool execution for efficiency.

#### 4.3.1 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Deliver concise, polished output without filler, repetition, or inner monologue; present only final thoughts while preserving important information.

#### 4.3.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Keep responses short and concise.

#### 4.3.3 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Include file_path:line_number pattern when referencing specific code locations for easy navigation.

#### 4.3.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and to follow its guidelines.

#### 4.3.5 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Call multiple independent tools in parallel to increase efficiency; use sequential calls only when tool outputs depend on previous results.

### 4.4 Security Review and Code Analysis

Focused vulnerability detection in code changes, command injection analysis, systematic refactoring, and debugging workflows that trace errors through logs and execution traces.

#### 4.4.1 Security Review & Vulnerability Analysis

Focused security analysis tools for identifying exploitable vulnerabilities in code changes and detecting command injection attacks. Prioritizes high-confidence findings while minimizing false positives through structured assessment criteria.

##### 4.4.1.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities across input validation, authentication, crypto, injection, and data exposure categories. Minimizes false positives through confidence scoring and extensive exclusion criteria.

##### 4.4.1.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attacks in bash commands for safety validation. Extracts the executable prefix while flagging malicious command chaining patterns.

#### 4.4.2 Code Review & Refactoring Skills

Systematic approaches to improving code quality through parallel analysis of reuse opportunities, structural issues, and performance problems, combined with debugging workflows that trace errors through logs and execution traces.

##### 4.4.2.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review process launching three parallel agents to identify code reuse opportunities, quality issues (redundant state, parameter sprawl, leaky abstractions), and efficiency problems (unnecessary work, N+1 patterns, memory leaks).

##### 4.4.2.2 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes.

### 4.5 Verification & Testing Skills

Automated testing infrastructure that creates and executes verifiers for web UIs, CLIs, and APIs, automatically detecting project structure and generating deterministic verification plans to confirm functionality.

#### 4.5.1 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase process for creating verifier skills that automatically test code changes using Playwright for web UIs, Tmux for CLIs, and HTTP for APIs, with auto-detection of project structure and authentication requirements.

#### 4.5.2 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Verification workflow that discovers verifier skills, analyzes code changes, generates deterministic verification plans, and triggers appropriate verifiers to confirm functionality works correctly.

---

## 5. Session, Memory, and Context Management

Mechanisms for persisting knowledge across sessions, compacting context efficiently, summarizing conversations, managing hook lifecycle events, and analyzing usage patterns.

### 5.1 Memory and Knowledge Persistence

Structured session memory files that capture task state, technical details, and codebase documentation with selective retrieval filtered by query context.

#### 5.1.1 Memory & Session State Management

Session memory persists institutional knowledge across conversations through structured files capturing task state, technical details, learnings, and codebase documentation. Selective retrieval filters relevant memories by query context, while guided editing maintains structure and token efficiency to build cumulative understanding.

##### 5.1.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file at a specified path, including its type description.

##### 5.1.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Shows the contents of a nested memory file structure.

##### 5.1.1.3 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects up to five relevant memory files from available options based on user queries, filtering out uncertain matches to provide only clearly useful memories.

##### 5.1.1.4 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session memory files by editing existing sections while preserving structure, headers, and italic template descriptions. Maintains detailed, info-dense content with specific file paths and technical details within token limits.

##### 5.1.1.5 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

##### 5.1.1.6 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files capturing current state, task specification, files, workflow, errors, codebase documentation, learnings, and results.

#### 5.1.2 Conversation & Context Summarization

Detailed conversation summaries preserve technical accuracy and task continuity through nine-section structures covering requests, concepts, files, errors, solutions, and next steps with full code snippets. Incremental and tool-outcome summaries maintain context efficiency while concise action summaries track agent progress without implementation details.

##### 5.1.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections covering primary requests, technical concepts, files examined, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps. Includes analysis phase to ensure technical accuracy and completeness with full code snippets and specific details.

##### 5.1.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, organized into nine sections covering requests, technical concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps with full code snippets.

##### 5.1.2.3 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Generate brief, past-tense summaries of tool usage outcomes in under 8 words, focusing on user-visible results without implementation details or self-reference.

##### 5.1.2.4 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt for generating concise 3-5 word action summaries in present tense to describe agent progress without using tools.

### 5.2 Session Lifecycle and Resource Tracking

Context compaction for cross-session task resumption, token and budget monitoring, and session search mechanisms for locating relevant prior work.

#### 5.2.1 Session Lifecycle & Continuation

Context compaction enables efficient task resumption across context windows and machines through structured continuation summaries. Resource monitoring tracks token and budget consumption, alerting when limits are approached or exceeded to guide work segmentation.

##### 5.2.1.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt template for generating structured continuation summaries that enable efficient task resumption across context windows.

##### 5.2.1.2 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

##### 5.2.1.3 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token consumption statistics including used, total, and remaining tokens.

##### 5.2.1.4 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Shows current USD budget consumption with used, total, and remaining amounts.

##### 5.2.1.5 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Warns that the response was truncated due to exceeding token limits and instructs breaking work into smaller pieces.

#### 5.2.2 Session Search & Discovery

Mechanisms for locating relevant work through intelligent tag-based and content-based search, with session tracking to enforce guidelines for active skills.

##### 5.2.2.1 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user queries by prioritizing exact tag matches, then partial tags, titles, branches, and transcript content. Returns inclusive results ordered by relevance to help users locate related work.

##### 5.2.2.2 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Reminds Claude to follow guidelines for skills that were invoked during the current session.

### 5.3 Hook System: Configuration & Lifecycle Events

Hooks execute shell commands, prompts, or agents at lifecycle events (PreToolUse, PostToolUse, SessionStart) with conditional blocking, validation, and auto-formatting. The system provides real-time feedback through success/error notifications, context injection, and execution halting with custom messages, while condition evaluation and stop verification ensure hooks execute only when appropriate.

#### 5.3.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Configure hooks to run shell commands, prompts, or agents at lifecycle events like PreToolUse, PostToolUse, and SessionStart; supports auto-formatting, validation, and conditional blocking of tool execution.

#### 5.3.2 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Displays a success notification when a hook completes, showing the hook name and its output content.

#### 5.3.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Report an error from a blocking hook command execution.

#### 5.3.4 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provide additional context from a hook execution.

#### 5.3.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notify that a hook stopped continuation with a provided message.

#### 5.3.6 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for continuation messages when a hook stops execution.

#### 5.3.7 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code and returns JSON indicating whether conditions are met or providing failure reasons.

#### 5.3.8 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and inspecting the codebase to confirm agent task completion.

### 5.4 Usage Analytics and User Guidance

Data-driven session analysis identifying friction patterns and improvement opportunities, combined with intent prediction and frustration detection for proactive UX guidance.

#### 5.4.1 Usage Insights & Analytics

Data-driven analysis extracting structured insights from session activity to identify friction patterns, highlight successes, surface improvement opportunities, and recommend features and workflows for enhanced productivity.

##### 5.4.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generate a concise 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for improved Claude Code usage.

##### 5.4.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyze usage data to identify and categorize friction patterns with specific examples and actionable improvements.

##### 5.4.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identify ambitious future workflows and autonomous AI-assisted development opportunities based on usage data.

##### 5.4.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extract structured facets from session transcripts including goal categories, user satisfaction, and friction points based on explicit user signals and requests.

##### 5.4.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generate actionable suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns based on session data.

#### 5.4.2 Prompt Suggestions & User Intent Prediction

Analyzes conversation context to predict user intent through follow-up command suggestions and sentiment signals, enabling proactive guidance and frustration detection.

##### 5.4.2.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural follow-up commands users would type based on conversation context, avoiding evaluative language and Claude-voice patterns. Returns brief, specific suggestions matching user style.

##### 5.4.2.2 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration and explicit pull request creation requests from conversation history, outputting boolean flags for frustration detection and PR submission intent.

---

## 6. API, SDK, and Developer Reference

Reference documentation for Claude and Agent SDKs across multiple languages, CI/CD integration templates, documentation generation agents, and educational features for developers building with Claude.

### 6.1 Claude API and SDK Reference

Language-specific SDK documentation for Python, TypeScript, Go, Java, and others covering client initialization, streaming, tool use, vision, prompt caching, and error handling.

#### 6.1.1 Claude API SDK Reference Data

Language-specific SDK documentation and reference materials for Python, TypeScript, C#, Go, Java, PHP, and Ruby covering client initialization, streaming, vision, prompt caching, extended thinking, tool use, and cost optimization. Includes model catalog with pricing and HTTP error handling reference.

##### 6.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

##### 6.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

##### 6.1.1.3 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic message requests, streaming, and manual tool use via JSON schema definitions.

##### 6.1.1.4 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, basic requests, streaming, and beta tool runner with automatic schema generation from struct tags.

##### 6.1.1.5 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, and beta tool use with annotated classes for automatic execution.

##### 6.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization for standard API and cloud providers (Bedrock, Vertex, Foundry), basic requests, and streaming.

##### 6.1.1.7 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

##### 6.1.1.8 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and deprecated Claude models with exact model IDs, aliases, context windows, max output tokens, and pricing information for accurate model selection.

##### 6.1.1.9 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes with common causes, handling strategies, and language-specific typed exception classes for robust error handling.

##### 6.1.1.10 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories, with extraction prompts for specific topics.

#### 6.1.2 Tool Use & Streaming API Reference Data

Language-specific implementation guides for Claude API tool use, streaming, and file operations. Covers tool definition and execution patterns, streaming event handling, asynchronous processing, and file management across Python and TypeScript with code examples and best practices.

##### 6.1.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Comprehensive guide to tool use with the Claude API covering user-defined tools, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool integration.

##### 6.1.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python-specific tool use implementation guide including tool runner with @beta_tool decorator, manual agentic loops, code execution with file uploads, container reuse, memory tool, and structured outputs with Pydantic.

##### 6.1.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript-specific tool use implementation with betaZodTool and Zod schemas, manual and streaming loops, code execution, file handling, memory tool integration, and structured outputs with zodOutputFormat.

##### 6.1.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling thinking blocks and tool use, progress tracking, error handling, and stream event types.

##### 6.1.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, handling thinking and tool use, final message retrieval, stream event types, and best practices for UI integration.

##### 6.1.2.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for documents and images, file management operations, and end-to-end examples for efficient file reuse.

##### 6.1.2.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages for documents, file listing and deletion, and download operations.

##### 6.1.2.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference covering batch creation, status polling, result retrieval, and cost-saving patterns for asynchronous processing at 50% discount.

#### 6.1.3 Build with Claude API Skills & Routing

Navigation and architectural guidance for Claude API application development. Provides surface-level routing between single-call, workflow, and agent patterns, alongside language-specific reference documentation for common implementation tasks.

##### 6.1.3.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking modes, and compaction for long conversations.

##### 6.1.3.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API reference documentation with quick task routing to appropriate guides for classification, streaming, tool use, batches, and file uploads.

### 6.2 Agent SDK and MCP Integration

Agent SDK documentation covering installation, built-in tools, permission modes, MCP integration, hooks, subagents, and session resumption with practical code patterns.

#### 6.2.1 Agent SDK Reference Data

Comprehensive Agent SDK documentation for Python and TypeScript covering installation, built-in tools, permission modes, MCP integration, hooks, subagents, and session resumption with practical code patterns and best practices.

##### 6.2.1.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, quick start, built-in tools, permission system, MCP support, hooks, subagents, message types, and best practices.

##### 6.2.1.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, quick start, built-in tools, permission modes, MCP support, hooks, subagents, and best practices.

##### 6.2.1.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Provides Python code patterns for the Agent SDK covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with practical examples.

##### 6.2.1.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Demonstrates TypeScript Agent SDK patterns including basic agents, hooks, subagents, MCP integration, and session resumption with concise code examples.

#### 6.2.2 MCP Resource Handling

Error state management for MCP resources that exist but lack displayable content, distinguishing between truly empty resources and those with unpresentable data.

##### 6.2.2.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content to display.

##### 6.2.2.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Signals that an MCP resource has content but it cannot be displayed in a readable format.

### 6.3 CI/CD and Codebase Documentation

GitHub Actions integration for automated Claude Code assistance in pull requests, alongside agents that generate and maintain CLAUDE.md and architecture documentation.

#### 6.3.1 GitHub Integration & CI/CD

Templates and setup guides for integrating Claude Code with GitHub workflows. Enables automated code assistance triggered via @claude mentions in issues and pull requests with configurable permissions and custom prompts.

##### 6.3.1.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code to be triggered via @claude mentions in issues, PRs, and comments with configurable permissions and custom prompts.

##### 6.3.1.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security considerations, and how to activate the workflow.

#### 6.3.2 Documentation Generation & Codebase Analysis

Agents for analyzing codebases and maintaining project documentation. Automatically generates or updates CLAUDE.md and Magic Doc files with architecture, entry points, and design decisions while preserving existing knowledge and conventions.

##### 6.3.2.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation files by documenting build/lint/test commands, high-level architecture, and codebase conventions. Incorporates existing Cursor rules and README content while avoiding generic practices and obvious instructions.

##### 6.3.2.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs Claude to update Magic Doc files with new learnings from conversations, preserving headers and focusing on high-level architecture, entry points, and design decisions while removing outdated information and maintaining terseness.

##### 6.3.2.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, answering questions about installation, hooks, skills, MCP servers, IDE integrations, agent building, and API usage. References local CLAUDE.md files and provides actionable guidance based on documentation.

### 6.4 Learning Mode & Educational Features

Collaborative learning framework that delegates design decisions and business logic to humans while handling routine implementation, supplemented with educational insights tied to code explanations to encourage learning through practice.

#### 6.4.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enable collaborative learning by requesting human contributions for design decisions and business logic while handling routine implementation; use TodoList tracking and Learn by Doing requests with TODO(human) markers.

#### 6.4.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provide brief educational insights before and after writing code to encourage learning through implementation-specific explanations.
