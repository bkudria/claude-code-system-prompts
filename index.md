# Claude Code System Prompts Index

Operational guidance for building and running Claude Code agents — covering how they execute, coordinate, remember, and integrate — so developers can deploy reliable, secure, and well-structured AI-driven engineering workflows.

## Table of Contents

1. [Bash and Shell Command Execution](#1-bash-and-shell-command-execution)
   1. [Bash Tool Configuration & Best Practices](#11-bash-tool-configuration-best-practices)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (command description) [Tool Description]](#112-bash-command-description-tool-description)
      3. [Bash (maintain cwd) [Tool Description]](#113-bash-maintain-cwd-tool-description)
      4. [Bash (no newlines) [Tool Description]](#114-bash-no-newlines-tool-description)
      5. [Bash (parallel commands) [Tool Description]](#115-bash-parallel-commands-tool-description)
      6. [Bash (quote file paths) [Tool Description]](#116-bash-quote-file-paths-tool-description)
      7. [Bash (semicolon usage) [Tool Description]](#117-bash-semicolon-usage-tool-description)
      8. [Bash (sequential commands) [Tool Description]](#118-bash-sequential-commands-tool-description)
      9. [Bash (timeout) [Tool Description]](#119-bash-timeout-tool-description)
      10. [Bash (verify parent directory) [Tool Description]](#1110-bash-verify-parent-directory-tool-description)
      11. [Bash (working directory) [Tool Description]](#1111-bash-working-directory-tool-description)
      12. [Bash (built-in tools note) [Tool Description]](#1112-bash-built-in-tools-note-tool-description)
      13. [Bash (prefer dedicated tools) [Tool Description]](#1113-bash-prefer-dedicated-tools-tool-description)
      14. [Bash (sleep — keep short) [Tool Description]](#1114-bash-sleep-—-keep-short-tool-description)
      15. [Bash (sleep — no polling background tasks) [Tool Description]](#1115-bash-sleep-—-no-polling-background-tasks-tool-description)
      16. [Bash (sleep — no retry loops) [Tool Description]](#1116-bash-sleep-—-no-retry-loops-tool-description)
      17. [Bash (sleep — run immediately) [Tool Description]](#1117-bash-sleep-—-run-immediately-tool-description)
      18. [Bash (sleep — use check commands) [Tool Description]](#1118-bash-sleep-—-use-check-commands-tool-description)
      19. [Bash (sleep — use run_in_background) [Tool Description]](#1119-bash-sleep-—-use-run_in_background-tool-description)
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
   3. [Bash Tool Alternatives](#13-bash-tool-alternatives)
      1. [Bash (alternative — communication) [Tool Description]](#131-bash-alternative-—-communication-tool-description)
      2. [Bash (alternative — content search) [Tool Description]](#132-bash-alternative-—-content-search-tool-description)
      3. [Bash (alternative — edit files) [Tool Description]](#133-bash-alternative-—-edit-files-tool-description)
      4. [Bash (alternative — file search) [Tool Description]](#134-bash-alternative-—-file-search-tool-description)
      5. [Bash (alternative — read files) [Tool Description]](#135-bash-alternative-—-read-files-tool-description)
      6. [Bash (alternative — write files) [Tool Description]](#136-bash-alternative-—-write-files-tool-description)
   4. [Bash Command Documentation & Safety](#14-bash-command-documentation-safety)
      1. [Bash command description writer (Agent Prompt)](#141-bash-command-description-writer-agent-prompt)
      2. [Bash command prefix detection (Agent Prompt)](#142-bash-command-prefix-detection-agent-prompt)
   5. [Action Safety & Execution Care](#15-action-safety-execution-care)
      1. [Executing actions with care (System Prompt)](#151-executing-actions-with-care-system-prompt)
      2. [Doing tasks (help and feedback) [System Prompt]](#152-doing-tasks-help-and-feedback-system-prompt)
2. [File System, Git, and Code Quality](#2-file-system-git-and-code-quality)
   1. [File and Directory Operations](#21-file-and-directory-operations)
      1. [File System Tools](#211-file-system-tools)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Edit (Tool Description)](#2113-edit-tool-description)
         4. [Glob (Tool Description)](#2114-glob-tool-description)
         5. [Grep (Tool Description)](#2115-grep-tool-description)
         6. [NotebookEdit (Tool Description)](#2116-notebookedit-tool-description)
      2. [Tool Usage Policy & Preferences](#212-tool-usage-policy-preferences)
         1. [Tool usage (create files) [System Prompt]](#2121-tool-usage-create-files-system-prompt)
         2. [Tool usage (edit files) [System Prompt]](#2122-tool-usage-edit-files-system-prompt)
         3. [Tool usage (read files) [System Prompt]](#2123-tool-usage-read-files-system-prompt)
         4. [Tool usage (search content) [System Prompt]](#2124-tool-usage-search-content-system-prompt)
         5. [Tool usage (search files) [System Prompt]](#2125-tool-usage-search-files-system-prompt)
         6. [Tool usage (reserve Bash) [System Prompt]](#2126-tool-usage-reserve-bash-system-prompt)
         7. [Tool usage (skill invocation) [System Prompt]](#2127-tool-usage-skill-invocation-system-prompt)
         8. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#2128-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         9. [Tool execution denied (System Prompt)](#2129-tool-execution-denied-system-prompt)
         10. [Tool permission mode (System Prompt)](#21210-tool-permission-mode-system-prompt)
   2. [Git Operations & Version Control](#22-git-operations-version-control)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#221-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#222-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#223-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#224-bash-git-—-prefer-new-commits-tool-description)
      5. [EnterWorktree (Tool Description)](#225-enterworktree-tool-description)
      6. [Git status (System Prompt)](#226-git-status-system-prompt)
      7. [Quick git commit (Agent Prompt)](#227-quick-git-commit-agent-prompt)
      8. [Quick PR creation (Agent Prompt)](#228-quick-pr-creation-agent-prompt)
      9. [Session title and branch generation (Agent Prompt)](#229-session-title-and-branch-generation-agent-prompt)
   3. [Code Review and Quality Assurance](#23-code-review-and-quality-assurance)
      1. [Code Quality & Software Engineering Practices](#231-code-quality-software-engineering-practices)
         1. [Doing tasks (avoid over-engineering) [System Prompt]](#2311-doing-tasks-avoid-over-engineering-system-prompt)
         2. [Doing tasks (no compatibility hacks) [System Prompt]](#2312-doing-tasks-no-compatibility-hacks-system-prompt)
         3. [Doing tasks (no premature abstractions) [System Prompt]](#2313-doing-tasks-no-premature-abstractions-system-prompt)
         4. [Doing tasks (no unnecessary additions) [System Prompt]](#2314-doing-tasks-no-unnecessary-additions-system-prompt)
         5. [Doing tasks (no unnecessary error handling) [System Prompt]](#2315-doing-tasks-no-unnecessary-error-handling-system-prompt)
         6. [Doing tasks (minimize file creation) [System Prompt]](#2316-doing-tasks-minimize-file-creation-system-prompt)
         7. [Doing tasks (read before modifying) [System Prompt]](#2317-doing-tasks-read-before-modifying-system-prompt)
         8. [Doing tasks (security) [System Prompt]](#2318-doing-tasks-security-system-prompt)
         9. [Doing tasks (software engineering focus) [System Prompt]](#2319-doing-tasks-software-engineering-focus-system-prompt)
         10. [Doing tasks (ambitious tasks) [System Prompt]](#23110-doing-tasks-ambitious-tasks-system-prompt)
         11. [Doing tasks (blocked approach) [System Prompt]](#23111-doing-tasks-blocked-approach-system-prompt)
         12. [Doing tasks (no time estimates) [System Prompt]](#23112-doing-tasks-no-time-estimates-system-prompt)
      2. [Code Review & Pull Request Workflows](#232-code-review-pull-request-workflows)
         1. [/review-pr slash command (Agent Prompt)](#2321-review-pr-slash-command-agent-prompt)
         2. [/pr-comments slash command (Agent Prompt)](#2322-pr-comments-slash-command-agent-prompt)
         3. [Verification specialist (Agent Prompt)](#2323-verification-specialist-agent-prompt)
         4. [Verification specialist (Skill)](#2324-verification-specialist-skill)
         5. [Create verifier skills (Skill)](#2325-create-verifier-skills-skill)
         6. [Worker instructions (System Prompt)](#2326-worker-instructions-system-prompt)
      3. [Codebase Exploration & Analysis Agents](#233-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#2331-explore-agent-prompt)
         2. [Explore strengths and guidelines (Agent Prompt)](#2332-explore-strengths-and-guidelines-agent-prompt)
         3. [Using your tools (how to use searching tools) [System Prompt]](#2333-using-your-tools-how-to-use-searching-tools-system-prompt)
         4. [Tool usage (direct search) [System Prompt]](#2334-tool-usage-direct-search-system-prompt)
         5. [LSP (Tool Description)](#2335-lsp-tool-description)
3. [Agent Coordination and Task Orchestration](#3-agent-coordination-and-task-orchestration)
   1. [Multi-Agent and Swarm Systems](#31-multi-agent-and-swarm-systems)
      1. [Multi-Agent Coordination & Swarm Management](#311-multi-agent-coordination-swarm-management)
         1. [SendMessageTool (Tool Description)](#3111-sendmessagetool-tool-description)
         2. [TeammateTool (Tool Description)](#3112-teammatetool-tool-description)
         3. [TeamDelete (Tool Description)](#3113-teamdelete-tool-description)
         4. [TaskList (teammate workflow) [Tool Description]](#3114-tasklist-teammate-workflow-tool-description)
         5. [Team Coordination (System Reminder)](#3115-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#3116-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#3117-teammate-communication-system-prompt)
         8. [Team memory content display (System Prompt)](#3118-team-memory-content-display-system-prompt)
      2. [Subagent Delegation & Orchestration](#312-subagent-delegation-orchestration)
         1. [Agent (usage notes) [Tool Description]](#3121-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#3122-agent-when-to-launch-subagents-tool-description)
         3. [Fork usage guidelines (System Prompt)](#3123-fork-usage-guidelines-system-prompt)
         4. [Subagent delegation examples (System Prompt)](#3124-subagent-delegation-examples-system-prompt)
         5. [Writing subagent prompts (System Prompt)](#3125-writing-subagent-prompts-system-prompt)
         6. [Tool usage (subagent guidance) [System Prompt]](#3126-tool-usage-subagent-guidance-system-prompt)
         7. [Tool usage (delegate exploration) [System Prompt]](#3127-tool-usage-delegate-exploration-system-prompt)
         8. [Using your tools (whether to use Explore subagent) [System Prompt]](#3128-using-your-tools-whether-to-use-explore-subagent-system-prompt)
      3. [Batch Processing & Parallel Work Orchestration](#313-batch-processing-parallel-work-orchestration)
         1. [/batch slash command (Agent Prompt)](#3131-batch-slash-command-agent-prompt)
         2. [Worker fork execution (Agent Prompt)](#3132-worker-fork-execution-agent-prompt)
         3. [Simplify (Skill)](#3133-simplify-skill)
   2. [Task Tracking and Planning](#32-task-tracking-and-planning)
      1. [Task & Todo Management](#321-task-todo-management)
         1. [TaskCreate (Tool Description)](#3211-taskcreate-tool-description)
         2. [TodoWrite (Tool Description)](#3212-todowrite-tool-description)
         3. [Task status (System Reminder)](#3213-task-status-system-reminder)
         4. [Task tools reminder (System Reminder)](#3214-task-tools-reminder-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#3215-todowrite-reminder-system-reminder)
         6. [Tool usage (task management) [System Prompt]](#3216-tool-usage-task-management-system-prompt)
      2. [Planning Mode & Implementation Design](#322-planning-mode-implementation-design)
         1. [EnterPlanMode (Tool Description)](#3221-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3222-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#3223-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#3224-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#3225-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#3226-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#3227-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#3228-plan-file-reference-system-reminder)
         9. [Verify plan reminder (System Reminder)](#3229-verify-plan-reminder-system-reminder)
         10. [Plan mode (enhanced) [Agent Prompt]](#32210-plan-mode-enhanced-agent-prompt)
      3. [Agent Design & Creation](#323-agent-design-creation)
         1. [Agent creation architect (Agent Prompt)](#3231-agent-creation-architect-agent-prompt)
         2. [Agent mention (System Reminder)](#3232-agent-mention-system-reminder)
         3. [Claude guide agent (Agent Prompt)](#3233-claude-guide-agent-agent-prompt)
4. [Memory, Context, and Session Management](#4-memory-context-and-session-management)
   1. [Knowledge and Context Persistence](#41-knowledge-and-context-persistence)
      1. [Context Compaction & Conversation Summarization](#411-context-compaction-conversation-summarization)
         1. [Context compaction summary (System Prompt)](#4111-context-compaction-summary-system-prompt)
         2. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#4112-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
         3. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#4113-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
         4. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#4114-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
         5. [Conversation summarization (Agent Prompt)](#4115-conversation-summarization-agent-prompt)
         6. [Recent Message Summarization (Agent Prompt)](#4116-recent-message-summarization-agent-prompt)
      2. [Memory & Session Persistence](#412-memory-session-persistence)
         1. [Memory file contents (System Reminder)](#4121-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#4122-nested-memory-contents-system-reminder)
         3. [Memory system (private feedback) [System Prompt]](#4123-memory-system-private-feedback-system-prompt)
         4. [Description part of memory instructions (System Prompt)](#4124-description-part-of-memory-instructions-system-prompt)
         5. [Agent memory instructions (System Prompt)](#4125-agent-memory-instructions-system-prompt)
         6. [Session memory update instructions (Agent Prompt)](#4126-session-memory-update-instructions-agent-prompt)
         7. [Memory selection (Agent Prompt)](#4127-memory-selection-agent-prompt)
         8. [Session memory template (Data)](#4128-session-memory-template-data)
      3. [Session Search & Navigation](#413-session-search-navigation)
         1. [Session Search Assistant (Agent Prompt)](#4131-session-search-assistant-agent-prompt)
         2. [Prompt Suggestion Generator v2 (Agent Prompt)](#4132-prompt-suggestion-generator-v2-agent-prompt)
   2. [Runtime State and Environment Awareness](#42-runtime-state-and-environment-awareness)
      1. [Session State & File System Reminders](#421-session-state-file-system-reminders)
         1. [File exists but empty (System Reminder)](#4211-file-exists-but-empty-system-reminder)
         2. [File modified by user or linter (System Reminder)](#4212-file-modified-by-user-or-linter-system-reminder)
         3. [File opened in IDE (System Reminder)](#4213-file-opened-in-ide-system-reminder)
         4. [File shorter than offset (System Reminder)](#4214-file-shorter-than-offset-system-reminder)
         5. [File truncated (System Reminder)](#4215-file-truncated-system-reminder)
         6. [Compact file reference (System Reminder)](#4216-compact-file-reference-system-reminder)
         7. [Lines selected in IDE (System Reminder)](#4217-lines-selected-in-ide-system-reminder)
         8. [Session continuation (System Reminder)](#4218-session-continuation-system-reminder)
         9. [New diagnostics detected (System Reminder)](#4219-new-diagnostics-detected-system-reminder)
      2. [Resource Monitoring & Budget Tracking](#422-resource-monitoring-budget-tracking)
         1. [Token usage (System Reminder)](#4221-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#4222-usd-budget-system-reminder)
         3. [Output style active (System Reminder)](#4223-output-style-active-system-reminder)
      3. [Scheduling & Background Task Management](#423-scheduling-background-task-management)
         1. [CronCreate (Tool Description)](#4231-croncreate-tool-description)
         2. [Sleep (Tool Description)](#4232-sleep-tool-description)
      4. [Terminal & IDE Environment Configuration](#424-terminal-ide-environment-configuration)
         1. [Status line setup (Agent Prompt)](#4241-status-line-setup-agent-prompt)
         2. [Scratchpad directory (System Prompt)](#4242-scratchpad-directory-system-prompt)
      5. [Skills Tracking & Invocation State](#425-skills-tracking-invocation-state)
         1. [Invoked skills (System Reminder)](#4251-invoked-skills-system-reminder)
         2. [/btw side question (System Reminder)](#4252-btw-side-question-system-reminder)
5. [API, SDK, and External Integrations](#5-api-sdk-and-external-integrations)
   1. [Claude API and SDK References](#51-claude-api-and-sdk-references)
      1. [Claude API Reference Documentation](#511-claude-api-reference-documentation)
         1. [Claude API reference — Python (Data)](#5111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#5112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#5113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#5114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#5115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#5116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#5117-claude-api-reference-—-c-data)
         8. [Claude model catalog (Data)](#5118-claude-model-catalog-data)
      2. [Agent SDK Reference & Patterns](#512-agent-sdk-reference-patterns)
         1. [Agent SDK reference — Python (Data)](#5121-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#5122-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#5123-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#5124-agent-sdk-patterns-—-typescript-data)
      3. [Tool Use & Streaming API References](#513-tool-use-streaming-api-references)
         1. [Tool use concepts (Data)](#5131-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#5132-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#5133-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#5134-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#5135-streaming-reference-—-typescript-data)
         6. [Message Batches API reference — Python (Data)](#5136-message-batches-api-reference-—-python-data)
         7. [Files API reference — Python (Data)](#5137-files-api-reference-—-python-data)
         8. [Files API reference — TypeScript (Data)](#5138-files-api-reference-—-typescript-data)
         9. [HTTP error codes reference (Data)](#5139-http-error-codes-reference-data)
         10. [Live documentation sources (Data)](#51310-live-documentation-sources-data)
   2. [Integrations and Extensibility](#52-integrations-and-extensibility)
      1. [GitHub Integration & CI/CD](#521-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#5211-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#5212-github-app-installation-pr-description-data)
      2. [Skills & Slash Commands](#522-skills-slash-commands)
         1. [Skill (Tool Description)](#5221-skill-tool-description)
         2. [Debugging (Skill)](#5222-debugging-skill)
         3. [/loop slash command (Skill)](#5223-loop-slash-command-skill)
         4. [Update Claude Code Config (Skill)](#5224-update-claude-code-config-skill)
         5. [Build with Claude API (Skill)](#5225-build-with-claude-api-skill)
         6. [Build with Claude API (reference guide) [Skill]](#5226-build-with-claude-api-reference-guide-skill)
      3. [MCP Resource Handling](#523-mcp-resource-handling)
         1. [MCP resource no content (System Reminder)](#5231-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#5232-mcp-resource-no-displayable-content-system-reminder)
         3. [ToolSearch extended (Tool Description)](#5233-toolsearch-extended-tool-description)
6. [Security, Automation, and Developer Experience](#6-security-automation-and-developer-experience)
   1. [Security and Lifecycle Automation](#61-security-and-lifecycle-automation)
      1. [Hooks System & Lifecycle Events](#611-hooks-system-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#6111-hooks-configuration-system-prompt)
         2. [Hook condition evaluator (Agent Prompt)](#6112-hook-condition-evaluator-agent-prompt)
         3. [Agent Hook (Agent Prompt)](#6113-agent-hook-agent-prompt)
         4. [Hook additional context (System Reminder)](#6114-hook-additional-context-system-reminder)
         5. [Hook blocking error (System Reminder)](#6115-hook-blocking-error-system-reminder)
         6. [Hook stopped continuation prefix (System Reminder)](#6116-hook-stopped-continuation-prefix-system-reminder)
         7. [Hook stopped continuation (System Reminder)](#6117-hook-stopped-continuation-system-reminder)
         8. [Hook success (System Reminder)](#6118-hook-success-system-reminder)
      2. [Security Monitoring & Vulnerability Analysis](#612-security-monitoring-vulnerability-analysis)
         1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#6121-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#6122-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         3. [/security-review slash command (Agent Prompt)](#6123-security-review-slash-command-agent-prompt)
         4. [Censoring assistance with malicious activities (System Prompt)](#6124-censoring-assistance-with-malicious-activities-system-prompt)
         5. [Malware analysis after Read tool call (System Reminder)](#6125-malware-analysis-after-read-tool-call-system-reminder)
   2. [Web Tools and Output Communication](#62-web-tools-and-output-communication)
      1. [Web & Browser Tools](#621-web-browser-tools)
         1. [WebFetch (Tool Description)](#6211-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#6212-websearch-tool-description)
         3. [Computer (Tool Description)](#6213-computer-tool-description)
         4. [Computer action (Tool Parameter)](#6214-computer-action-tool-parameter)
         5. [Chrome browser MCP tools (System Prompt)](#6215-chrome-browser-mcp-tools-system-prompt)
         6. [Claude in Chrome browser automation (System Prompt)](#6216-claude-in-chrome-browser-automation-system-prompt)
         7. [WebFetch summarizer (Agent Prompt)](#6217-webfetch-summarizer-agent-prompt)
      2. [Output Style & Communication](#622-output-style-communication)
         1. [Output efficiency (System Prompt)](#6221-output-efficiency-system-prompt)
         2. [Tone and style (concise output — detailed) [System Prompt]](#6222-tone-and-style-concise-output-—-detailed-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#6223-tone-and-style-concise-output-—-short-system-prompt)
         4. [Tone and style (code references) [System Prompt]](#6224-tone-and-style-code-references-system-prompt)
         5. [Tool Use Summary Generation (System Prompt)](#6225-tool-use-summary-generation-system-prompt)
         6. [Agent Summary Generation (System Prompt)](#6226-agent-summary-generation-system-prompt)
         7. [Agent thread notes (System Prompt)](#6227-agent-thread-notes-system-prompt)
         8. [Common suffix (response format) [Agent Prompt]](#6228-common-suffix-response-format-agent-prompt)
   3. [Documentation, Analytics, and Collaboration](#63-documentation-analytics-and-collaboration)
      1. [Documentation & Knowledge Capture](#631-documentation-knowledge-capture)
         1. [CLAUDE.md creation (Agent Prompt)](#6311-claudemd-creation-agent-prompt)
         2. [Update Magic Docs (Agent Prompt)](#6312-update-magic-docs-agent-prompt)
         3. [Skillify Current Session (System Prompt)](#6313-skillify-current-session-system-prompt)
      2. [Usage Insights & Analytics](#632-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#6321-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#6322-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#6323-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#6324-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#6325-insights-suggestions-system-prompt)
      3. [Learning Mode & Collaborative Development](#633-learning-mode-collaborative-development)
         1. [Learning mode (System Prompt)](#6331-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6332-learning-mode-insights-system-prompt)
         3. [Option previewer (System Prompt)](#6333-option-previewer-system-prompt)
         4. [AskUserQuestion (Tool Description)](#6334-askuserquestion-tool-description)
         5. [AskUserQuestion (preview field) [Tool Description]](#6335-askuserquestion-preview-field-tool-description)

---

## 1. Bash and Shell Command Execution

Everything governing how bash commands are run: performance strategies, sandboxed security enforcement, safety validation, and when to use dedicated tools instead of shell equivalents.

### 1.1 Bash Tool Configuration & Best Practices

Operational guidelines for executing bash commands efficiently and safely, covering command chaining strategies, path handling, working directory persistence, and performance optimization through parallel execution and background task management. Emphasizes using dedicated tools over bash equivalents for read-only operations.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Basic description of the Bash tool's function: executing bash commands and returning output.

#### 1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Requires clear, concise descriptions of Bash commands, with brief summaries for simple commands and detailed context for complex operations.

#### 1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to use absolute paths and avoid cd commands to maintain the current working directory throughout sessions.

#### 1.1.4 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits using newlines to separate commands in Bash tool calls.

#### 1.1.5 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to make multiple Bash tool calls in parallel when commands are independent, improving efficiency.

#### 1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Requires double-quoting file paths containing spaces in Bash commands.

#### 1.1.7 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier command failures are acceptable.

#### 1.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call to ensure sequential execution with failure propagation.

#### 1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Optionally specify command timeout in milliseconds up to a maximum; default timeout is configurable.

#### 1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Verify parent directory exists and is correct before creating new files or directories.

#### 1.1.11 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between commands, but shell state does not; environment initializes from user profile.

#### 1.1.12 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Recommends using built-in tools over Bash equivalents for better user experience and permission transparency.

#### 1.1.13 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns against using Bash for find, grep, cat, and similar read-only operations; recommends dedicated tools for better user experience.

#### 1.1.14 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations between 1-5 seconds to avoid blocking the user.

#### 1.1.15 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

#### 1.1.16 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Diagnose root causes of failures instead of retrying commands in sleep loops.

#### 1.1.17 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Execute commands immediately without sleeping between them when they can run without delay.

#### 1.1.18 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like gh run view instead of sleeping when polling external processes.

#### 1.1.19 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Use run_in_background for long-running commands to receive completion notifications without sleeping.

### 1.2 Bash Sandbox Security & Restrictions

Security framework enforcing sandboxed execution of all bash commands by default, with mechanisms for detecting sandbox-caused failures, explaining restrictions to users, and managing temporary file access through environment variables. Sandbox mode cannot be disabled except through explicit user permission.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to collaborate with the user to adjust sandbox settings when commands fail due to restrictions.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Establishes that sandbox mode is the default; disabling sandbox requires explicit user request or evidence of sandbox restriction.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that identify sandbox-caused command failures.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies operation not permitted errors for file and network operations as sandbox restriction evidence.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies Unix socket connection errors as evidence of sandbox restrictions.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to explain which sandbox restriction caused a failure and inform users about the /sandbox command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition for identifying sandbox-caused failures: when a command fails with evidence of sandbox restrictions, distinguishing from other failure causes.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all Bash commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.ssh, or credential files be added to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each bash command with dangerouslyDisableSandbox individually; default to sandbox mode for all future commands.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header instruction for responding when sandbox-caused failures are detected.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry failed commands with dangerouslyDisableSandbox enabled without asking the user.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use $TMPDIR or ${SANDBOX_TMPDIR_FN()} for temporary files in sandbox mode; never use /tmp directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling sandbox mode will trigger a user permission prompt.

### 1.3 Bash Tool Alternatives

Directive to replace bash-native operations with dedicated tools for superior user experience and transparency: Read/Write for file I/O, Edit for text manipulation, Glob for file discovery, and Grep for content search.

#### 1.3.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly instead of using echo or printf for communication.

#### 1.3.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs Claude to use the Grep tool instead of grep or rg for content searching.

#### 1.3.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool instead of sed or awk for file editing.

#### 1.3.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs Claude to use the Glob tool instead of find or ls for file searching.

#### 1.3.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool instead of cat, head, or tail for file reading.

#### 1.3.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use the Write tool instead of echo or cat for file writing operations.

### 1.4 Bash Command Documentation & Safety

Documents bash commands in clear, concise language while detecting command injection attempts and enforcing safety policies. Combines descriptive clarity with security validation to support safe command execution.

#### 1.4.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy commands.

#### 1.4.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands to enforce safety policies, returning the extracted prefix or flagging injection risks based on a comprehensive policy specification.

### 1.5 Action Safety & Execution Care

Mechanisms for evaluating action consequences before execution, requiring explicit user confirmation for destructive or irreversible operations while investigating unexpected system state. Includes guidance on support channels for user assistance.

#### 1.5.1 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to carefully evaluate reversibility and blast radius of actions, requiring user confirmation for destructive or hard-to-reverse operations like force-pushing, deleting files, or sending messages, while investigating unexpected state before acting.

#### 1.5.2 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

---

## 2. File System, Git, and Code Quality

Tools and practices for reading, writing, and editing files; version control workflows including commits and pull requests; code review pipelines; and disciplined software engineering principles.

### 2.1 File and Directory Operations

Unified tools for reading, writing, editing, and discovering files—replacing bash equivalents with explicit, user-friendly semantics.

#### 2.1.1 File System Tools

Unified file system interface supporting reading (including images, PDFs, and notebooks), writing, precise text editing via string replacement, and fast pattern-based file discovery. Designed to replace bash equivalents with better user experience and explicit operation semantics.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for line offsets, image files, PDFs (with page range limits for large files), and Jupyter notebooks, returning visual content for multimodal processing.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem with overwrite capability, preferring the Edit tool for modifications and avoiding documentation file creation unless explicitly requested.

##### 2.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read output. Prefer editing existing files; use replace_all for renaming variables across the file.

##### 2.1.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like **/*.js; returns results sorted by modification time. Use for name-based file searches; prefer Agent tool for open-ended multi-round searches.

##### 2.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting full regex syntax, file filtering by glob or type, and multiple output modes. Always use for search tasks instead of bash grep commands.

##### 2.1.1.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replaces the contents of a specific cell in a Jupyter notebook, supporting insert and delete operations with 0-indexed cell numbering and absolute file paths.

#### 2.1.2 Tool Usage Policy & Preferences

Establishes Claude's tool selection hierarchy: dedicated tools (Read, Write, Edit, Grep, Glob) take precedence over shell commands for file operations, the Skill tool invokes slash commands, and Bash is reserved for system operations. Covers parallel execution for independent operations, sequential execution for dependencies, permission handling with user escalation, and graceful degradation when tools are denied.

##### 2.1.2.1 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use the Write tool instead of cat heredoc or echo redirection for file creation.

##### 2.1.2.2 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs Claude to use the Edit tool instead of sed or awk for file modifications.

##### 2.1.2.3 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool instead of cat, head, tail, or sed for file reading.

##### 2.1.2.4 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs Claude to use the Grep tool instead of grep or rg for searching file contents.

##### 2.1.2.5 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool instead of find or ls for file searching.

##### 2.1.2.6 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve the Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

##### 2.1.2.7 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Instructs Claude that slash commands like /commit invoke user-invocable skills via the Skill tool, and to only use the tool for skills listed in its user-invocable section.

##### 2.1.2.8 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to maximize efficiency, but to execute dependent tool calls sequentially when one operation must complete before another.

##### 2.1.2.9 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable workarounds when tool execution is denied, but to avoid malicious bypasses and to stop and explain to the user if the capability is essential.

##### 2.1.2.10 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains that tools execute in user-selected permission modes, users are prompted for approval when tools aren't auto-allowed, and Claude should adjust approach rather than retry denied calls.

### 2.2 Git Operations & Version Control

Comprehensive version control workflow covering safe commit creation, pull request generation, hook compliance, and branch management. Enforces safety protocols against destructive operations, hook bypassing, and improper commit practices while providing automated session naming and branch generation.

#### 2.2.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to evaluate safer alternatives before executing destructive git operations like reset, force push, or checkout.

#### 2.2.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests, enforcing safety protocols, hook compliance, and proper commit message formatting. Covers git status/diff/log review, staged change analysis, hook failure handling, and PR creation with gh command.

#### 2.2.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping hooks or bypassing GPG signing unless explicitly requested by the user; requires investigating and fixing hook failures.

#### 2.2.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Directs Claude to create new commits rather than amending existing ones.

#### 2.2.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it only when the user explicitly requests worktree usage. Requires git repository or WorktreeCreate/WorktreeRemove hooks.

#### 2.2.6 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status including branch, main branch reference, file status, and recent commits at conversation start.

#### 2.2.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context including git status and diff, following repository commit style conventions and enforcing safety protocols against amending or skipping hooks.

#### 2.2.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request with pre-populated context, handling branch creation, commit messaging, and PR body generation while enforcing git safety protocols and preventing force pushes.

#### 2.2.9 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from coding session descriptions.

### 2.3 Code Review and Quality Assurance

Pull request analysis, adversarial testing, vulnerability scanning, and disciplined engineering practices that prevent technical debt and scope creep.

#### 2.3.1 Code Quality & Software Engineering Practices

Principles for disciplined software engineering: make only requested changes, delete unused code rather than maintaining compatibility shims, avoid premature abstractions and unnecessary features, validate only at system boundaries, prefer editing existing files, and prioritize security. Emphasizes reading code before modification, exploring alternatives when blocked, and deferring scope decisions to user judgment.

##### 2.3.1.1 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Directs Claude to make only requested or clearly necessary changes, keeping solutions simple and focused without unnecessary additions.

##### 2.3.1.2 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims or leaving remnants.

##### 2.3.1.3 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directs Claude to avoid creating helpers or abstractions for one-time operations or hypothetical requirements, favoring minimal necessary complexity.

##### 2.3.1.4 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directs Claude not to add features, refactor, or improve beyond what was asked, including avoiding unnecessary documentation or type annotations.

##### 2.3.1.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios, trusting internal guarantees and validating only at system boundaries.

##### 2.3.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

##### 2.3.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Directs Claude to read and understand existing code before proposing modifications.

##### 2.3.1.8 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities like injection, XSS, and OWASP top 10 risks, prioritizing secure code.

##### 2.3.1.9 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Instructs Claude to interpret user requests in the context of software engineering tasks, applying domain knowledge to generic instructions.

##### 2.3.1.10 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Instructs Claude to be highly capable and support ambitious tasks, deferring to user judgment on scope rather than declining complex work.

##### 2.3.1.11 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instructs Claude to explore alternative approaches when blocked rather than brute-forcing, and to use user-question tools to align on the right path.

##### 2.3.1.12 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid giving time estimates or predictions, focusing on what needs to be done rather than duration.

#### 2.3.2 Code Review & Pull Request Workflows

Integrated code review and verification pipeline that analyzes pull requests for quality and security, executes adversarial testing to uncover bugs, and automates verification through specialized test skills that validate implementations across multiple testing dimensions.

##### 2.3.2.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Conducts expert code review of GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, performance, test coverage, and security with concise actionable feedback.

##### 2.3.2.2 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and code review comments with file context, diff hunks, and threaded replies in formatted markdown.

##### 2.3.2.3 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarially tests implementations by running builds, test suites, linters, and targeted probes (concurrency, boundaries, idempotency) to find bugs, issuing PASS/FAIL/PARTIAL verdicts with evidence of at least one adversarial probe.

##### 2.3.2.4 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Verification specialist skill that discovers verifier skills, analyzes code changes, creates deterministic verification plans, and triggers appropriate verifiers to report pass/fail results.

##### 2.3.2.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase skill for creating verifier skills that automatically verify code changes, including auto-detection of project types, setup of browser/CLI/API verification tools, interactive Q&A, and skill generation in .claude/skills/.

##### 2.3.2.6 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Workers must simplify changes, run unit tests, execute e2e tests per coordinator recipe, commit and push with a PR, and report the PR URL or explain why none was created.

#### 2.3.3 Codebase Exploration & Analysis Agents

Read-only codebase navigation and analysis using pattern matching, semantic search, and language server integration to efficiently locate files, symbols, and code relationships without modifying source.

##### 2.3.3.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist for navigating codebases using glob patterns, regex searches, and file reading, with strict prohibition on file modifications and emphasis on efficient parallel tool usage.

##### 2.3.3.2 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines the Explore subagent's strengths in searching and analyzing codebases, with guidelines emphasizing broad search strategies, thoroughness, and prohibition against creating files unless absolutely necessary.

##### 2.3.3.3 [Using your tools (how to use searching tools) [System Prompt]](system-prompts/system-prompt-using-your-tools-how-to-use-searching-tools.md)

Use find or grep via the bash tool for simple, directed codebase searches targeting specific files, classes, or functions.

##### 2.3.3.4 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob or Grep tools directly for simple, directed codebase searches like finding specific files, classes, or functions.

##### 2.3.3.5 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers for code intelligence including navigation, references, hover info, symbols, implementations, and call hierarchies. Requires LSP server configuration for the file type.

---

## 3. Agent Coordination and Task Orchestration

Frameworks for spawning, coordinating, and managing AI agents—from multi-agent swarms and subagent delegation to structured task tracking and implementation planning.

### 3.1 Multi-Agent and Swarm Systems

Teams of Claude agents working in parallel: task claiming, inter-agent messaging, shared state synchronization, and graceful shutdown.

#### 3.1.1 Multi-Agent Coordination & Swarm Management

Manages teams of Claude agents working in parallel on shared tasks. Agents claim work from a task list, coordinate via direct messaging and broadcasts, synchronize state through shared memory, and report to a team lead. Covers team creation, member spawning, task distribution, idle handling, and graceful shutdown with directory cleanup.

##### 3.1.1.1 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables direct messaging to teammates, broadcasting to all team members, and handling shutdown and plan approval requests in multi-agent swarms, with warnings about broadcast cost efficiency.

##### 3.1.1.2 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages team creation, task coordination, and teammate spawning for multi-agent projects, with automatic message delivery, idle state handling, and task list synchronization across team members.

##### 3.1.1.3 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all active members to be terminated first to avoid failure.

##### 3.1.1.4 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for claiming available tasks from a shared task list, preferring lowest ID tasks first and notifying the team lead when blocked.

##### 3.1.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with a specific identity, provides team resources and configuration paths, and instructs it to coordinate with teammates by name and report to the team lead.

##### 3.1.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before providing a final response to the user in non-interactive mode.

##### 3.1.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs Claude running as an agent in a team to use the SendMessage tool for teammate communication, with message type for direct communication and broadcast for team-wide announcements.

##### 3.1.1.8 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and content for injection into conversation context.

#### 3.1.2 Subagent Delegation & Orchestration

Launches specialized subagents as isolated processes for parallel research, implementation, or exploration work. Covers context inheritance patterns (inheriting agents need scope clarity; fresh agents need full briefing), when to fork independent agents versus inline execution, avoiding mid-flight result fabrication, and delegating codebase exploration to specialized agents when simple searches exceed limits.

##### 3.1.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guide for the Agent tool covering launching subagents, concurrent execution, background tasks, resumption with context preservation, worktree isolation, and best practices for agent prompts and result communication.

##### 3.1.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses for complex multi-step tasks, listing available agent types and their capabilities.

##### 3.1.2.3 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for parallel research or implementation work, prohibits reading fork output mid-flight, and forbids fabricating fork results.

##### 3.1.2.4 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states when results haven't returned, and reporting findings, with guidance on when to fork independent agents versus inline execution.

##### 3.1.2.5 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

When delegating to subagents, tailor prompts based on context inheritance: context-inheriting agents need directives with scope clarity, while fresh subagents require full situation briefing, background explanation, and specific details to enable judgment calls rather than rote execution.

##### 3.1.2.6 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Guides Claude to use the Task tool with specialized agents for matching tasks, parallelizing independent queries, and protecting context, while avoiding duplication of subagent work.

##### 3.1.2.7 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Instructs Claude to use the Task tool with specialized exploration subagents for broader codebase research when simple directed searches prove insufficient or exceed query limits.

##### 3.1.2.8 [Using your tools (whether to use Explore subagent) [System Prompt]](system-prompts/system-prompt-using-your-tools-whether-to-use-explore-subagent.md)

Use the Explore subagent for broader codebase exploration and deep research when simple searches are insufficient or tasks require many queries, accepting slower performance for comprehensive results.

#### 3.1.3 Batch Processing & Parallel Work Orchestration

Distributed work execution framework that decomposes large changes into independent parallel tasks, spawns worker agents to execute them, and aggregates results while maintaining progress tracking and end-to-end test validation.

##### 3.1.3.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into independent units, determining end-to-end test recipes, spawning background worker agents, and tracking progress across all units.

##### 3.1.3.2 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Executes directives directly without spawning sub-agents, using tools silently and reporting structured results (scope, findings, files, issues) under 500 words with commit hashes for file modifications.

##### 3.1.3.3 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel review agents for code reuse, quality, and efficiency, then aggregates findings and fixes issues directly.

### 3.2 Task Tracking and Planning

Structured task lists with state management, implementation planning phases with user approval gates, and agent design frameworks.

#### 3.2.1 Task & Todo Management

Tracks work progress through structured task lists with three states (pending, in_progress, completed). Tasks require both imperative and active form descriptions, enforce single in-progress limits, and support status checking. Reminders encourage immediate task completion marking and cleanup of stale items.

##### 3.2.1.1 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for multi-step coding sessions with status tracking (pending, in_progress, completed) and optional active form descriptions for spinner display.

##### 3.2.1.2 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with three states (pending, in_progress, completed), requiring both imperative and active form descriptions, and enforcing single in-progress task limits.

##### 3.2.1.3 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Informs Claude that task output can be checked using the TaskOutput tool.

##### 3.2.1.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools (create and update) for progress tracking when relevant, and to clean up stale tasks.

##### 3.2.1.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for tracking progress on tasks when relevant and to clean up stale todo lists.

##### 3.2.1.6 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite to break down work into tasks, track progress, and mark tasks complete immediately upon completion rather than batching.

#### 3.2.2 Planning Mode & Implementation Design

Structured planning phase for non-trivial changes where Claude explores the codebase, designs implementation approaches, and requests user approval before execution. Supports iterative pair-planning with incremental updates, parallel exploration agents, and architectural review. Prevents execution during planning and restricts edits to the plan file until approval.

##### 3.2.2.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transition into plan mode to explore the codebase and design implementation approaches for user approval before writing code. Use for non-trivial tasks involving new features, multiple approaches, architectural decisions, or multi-file changes.

##### 3.2.2.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning and request user approval by reading the plan from the plan file. Use only for implementation tasks requiring code changes, not for research or exploration.

##### 3.2.2.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow: initial understanding via parallel exploration agents, design via planning agents, review, final plan writing, and exit. Prevents execution and restricts edits to the plan file only.

##### 3.2.2.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning where Claude explores code, updates the plan file incrementally, and asks the user clarifying questions in a loop until the plan is complete. Prevents execution and restricts edits to the plan file.

##### 3.2.2.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents that prevents execution and restricts edits to the plan file while allowing read-only actions and user clarification questions.

##### 3.2.2.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude when re-entering plan mode to read the existing plan, evaluate whether the new request is the same task or different, and either modify or overwrite the plan accordingly.

##### 3.2.2.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Plan mode has exited; you can now edit, run tools, and take actions, with plan file location available if needed.

##### 3.2.2.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 3.2.2.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly after implementation.

##### 3.2.2.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases, identifies patterns, and designs step-by-step implementation plans with critical files and architectural trade-offs, without modifying files.

#### 3.2.3 Agent Design & Creation

Frameworks for architecting and deploying custom AI agents, from initial requirement extraction through system prompt design to JSON specification output. Includes specialized agents for guiding users through Claude's ecosystem tools and documentation.

##### 3.2.3.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design custom AI agents by extracting user requirements, creating expert personas, architecting comprehensive system prompts with behavioral boundaries and decision-making frameworks, and outputting a JSON specification with identifier, usage guidelines, and complete operational manual.

##### 3.2.3.2 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Invoke the specified agent type with required context when user requests agent activation.

##### 3.2.3.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, answering feature questions, and providing actionable guidance with code examples and specific references.

---

## 4. Memory, Context, and Session Management

Mechanisms for preserving knowledge and state across conversations: context compaction, persistent memory files, session state tracking, resource budgets, and environment configuration.

### 4.1 Knowledge and Context Persistence

Conversation summarization for token limits, institutional memory files, and session search for retrieving relevant past work.

#### 4.1.1 Context Compaction & Conversation Summarization

Mechanisms for preserving conversation context across token limits through structured summarization. Generates continuation summaries capturing task overview, technical decisions, errors, and next steps; analyzes conversations chronologically or by recent messages to identify user intents and discoveries; creates detailed summaries with code snippets and architectural decisions for resumption.

##### 4.1.1.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for generating continuation summaries during context compaction, covering task overview, current state, discoveries, next steps, and context preservation for resumption.

##### 4.1.1.2 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

Analysis instructions for context compaction that require chronological review of all messages, identifying user intents, technical decisions, errors, and specific details before generating summary.

##### 4.1.1.3 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Lean experimental analysis instructions for context compaction using analysis tags as planning scratchpad rather than detailed content, with summary containing actual detail.

##### 4.1.1.4 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

Analysis instructions for context compaction focused on recent messages, identifying user requests, approach, technical decisions, errors, and user feedback before summarization.

##### 4.1.1.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing user requests, technical concepts, files examined, errors encountered, problem-solving efforts, and pending tasks with full code snippets and architectural decisions.

##### 4.1.1.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages focusing on new requests, technical concepts, files modified, errors encountered, and pending tasks while preserving earlier context intact.

#### 4.1.2 Memory & Session Persistence

System for maintaining institutional and session-specific knowledge across conversations. Stores user guidance, domain-specific instructions, and technical discoveries in structured memory files; selectively retrieves relevant memories by query matching; updates session state with workflow details, errors, and learnings while preserving file structure and headers.

##### 4.1.2.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Contents of a memory file retrieved by path.

##### 4.1.2.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Contents of a nested memory file.

##### 4.1.2.3 [Memory system (private feedback) [System Prompt]](system-prompts/system-prompt-memory-system-private-feedback.md)

Describes private feedback memory type for storing user guidance and corrections, with instructions to check for contradictions against team feedback before saving.

##### 4.1.2.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Field description for user memory instructions, emphasizing role, goals, and preferences to tailor behavior without negative judgments.

##### 4.1.2.5 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

##### 4.1.2.6 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations by editing existing sections with detailed technical information while preserving file structure and section headers.

##### 4.1.2.7 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects relevant session memories for a user query by matching against filenames and descriptions, returning up to 5 most useful memories with high selectivity.

##### 4.1.2.8 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for organizing session memory in summary.md files, with sections for current state, task specification, files, workflow, errors, codebase documentation, learnings, key results, and worklog.

#### 4.1.3 Session Search & Navigation

Retrieves relevant sessions through semantic matching and tag-based search, while predicting user intent for natural next-step suggestions. Combines memory retrieval with contextual prediction to guide navigation and interaction.

##### 4.1.3.1 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user queries by prioritizing exact tag matches, then title, branch, and transcript content matches with inclusive matching strategy and semantic similarity.

##### 4.1.3.2 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent messages and context, avoiding evaluative language and Claude-voice suggestions.

### 4.2 Runtime State and Environment Awareness

Contextual notifications about file changes, IDE interactions, resource consumption, scheduling primitives, and terminal/workspace configuration.

#### 4.2.1 Session State & File System Reminders

Contextual notifications that track file and session state changes, including truncation boundaries, external modifications, IDE interactions, and cross-machine continuity. These reminders ensure Claude maintains awareness of file accessibility constraints and user actions that may affect task interpretation.

##### 4.2.1.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

File exists but contains no content.

##### 4.2.1.2 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

File was intentionally modified by user or linter; account for the changes and do not revert unless requested.

##### 4.2.1.3 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

User opened a file in the IDE, which may or may not relate to the current task.

##### 4.2.1.4 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

File read offset exceeds file length; the file is shorter than requested.

##### 4.2.1.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

File was truncated to the first N lines due to size; use the Read tool to access more if needed.

##### 4.2.1.6 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

File was read before conversation summarization but is too large to include; use the Read tool to access it if needed.

##### 4.2.1.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

User selected specific lines in the IDE; this may or may not relate to the current task.

##### 4.2.1.8 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory has changed.

##### 4.2.1.9 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude that new diagnostic issues have been detected in the system.

#### 4.2.2 Resource Monitoring & Budget Tracking

Real-time visibility into consumption metrics and operational constraints, displaying token usage, financial expenditure, and active formatting rules. These reminders keep Claude informed of resource limits and current output configuration.

##### 4.2.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 4.2.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

##### 4.2.2.3 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is currently active and to follow its specific guidelines.

#### 4.2.3 Scheduling & Background Task Management

Manages deferred and recurring execution through cron scheduling and sleep primitives. Distributes load across time windows while respecting system idle states and user interruption, avoiding overhead of shell-based alternatives.

##### 4.2.3.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron jobs using standard 5-field cron syntax in user's local timezone. Avoid :00 and :30 minute marks when possible to distribute load; recurring tasks auto-expire after 3 days; jobs fire only when REPL is idle.

##### 4.2.3.2 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with user interrupt capability and periodic check-in prompts, avoiding shell process overhead compared to bash sleep.

#### 4.2.4 Terminal & IDE Environment Configuration

Setup and configuration of development environment display and workspace isolation, including terminal status line rendering from shell configurations and dedicated session-scoped temporary file directories.

##### 4.2.4.1 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by converting shell PS1 configurations to statusLine commands, handling escape sequences, ANSI colors, and JSON input from session context including tokens, model, workspace, and vim mode.

##### 4.2.4.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories, enabling isolated working space without permission prompts.

#### 4.2.5 Skills Tracking & Invocation State

Runtime tracking of active skills and constraints within a session, governing tool usage patterns and response scope for different interaction types.

##### 4.2.5.1 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

List of skills invoked in the current session; continue following their guidelines.

##### 4.2.5.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer side questions directly without tools in a single response, using only conversation context and refusing to promise actions or lookups.

---

## 5. API, SDK, and External Integrations

Reference documentation and integration patterns for Claude's APIs and SDKs across multiple languages, MCP tool management, GitHub CI/CD workflows, and slash command skills.

### 5.1 Claude API and SDK References

Language-specific SDK documentation covering the Claude API, Agent SDK, tool use patterns, streaming, batch processing, and model catalogs.

#### 5.1.1 Claude API Reference Documentation

Language-specific SDK references and model catalogs providing complete API coverage across Python, TypeScript, Go, Java, Ruby, PHP, and C#, including vision, prompt caching, extended thinking, streaming, and tool use patterns alongside current model identifiers and pricing.

##### 5.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python API reference covering client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

##### 5.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript API reference covering client initialization, basic requests, vision, prompt caching, adaptive thinking, error handling, multi-turn conversations, compaction, and cost optimization.

##### 5.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use with BetaToolRunner and manual loops, and extended thinking with ThinkingBlock support.

##### 5.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference including client initialization, basic requests, streaming, and beta tool use with annotated classes via BetaToolRunner.

##### 5.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

##### 5.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization for Anthropic, Bedrock, Vertex AI, and Foundry, basic requests, streaming, and manual tool use loops.

##### 5.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for basic message requests and streaming with tool use via raw JSON schema definitions.

##### 5.1.1.8 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and deprecated Claude models with exact model IDs, aliases, context windows, max output tokens, and pricing information.

#### 5.1.2 Agent SDK Reference & Patterns

Comprehensive Agent SDK documentation for Python and TypeScript covering initialization, query interfaces, tool integration via MCP servers, permission modes, hooks for lifecycle events, subagents, and practical patterns for building autonomous agents with session management.

##### 5.1.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query() and ClaudeSDKClient interfaces, built-in tools, permission modes, MCP servers, hooks, subagents, error handling, and session history retrieval.

##### 5.1.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference covering installation, query() interface, built-in tools, permission modes, MCP servers including in-process tools, hooks, subagents, and session history.

##### 5.1.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks for tool lifecycle events, subagents, permission modes, error recovery, and session resumption with code examples.

##### 5.1.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks for auditing, subagents, Playwright MCP integration, and session resumption with code examples.

#### 5.1.3 Tool Use & Streaming API References

Complete references for implementing tool-based agentic loops, streaming responses, batch processing, and file handling across Python and TypeScript, covering tool runners, manual loops, code execution, structured outputs, and error handling with best practices for production use.

##### 5.1.3.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool definitions.

##### 5.1.3.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner with @beta_tool decorator, MCP tool conversion, manual agentic loops, code execution with file uploads and container reuse, memory tool, and structured outputs with Pydantic.

##### 5.1.3.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, code execution with file uploads, memory tool helpers, and structured outputs with Zod validation.

##### 5.1.3.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content types, progress tracking, error handling, and best practices for token management and stream events.

##### 5.1.3.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference with quick-start examples, content-type handling, tool-runner integration, stream event types, and best practices for managing final messages and SSE format.

##### 5.1.3.6 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for asynchronous batch processing of up to 100,000 requests at 50% cost with polling, result retrieval, and prompt caching support.

##### 5.1.3.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading, managing, and using files (PDFs, images) in Messages API requests with citations support.

##### 5.1.3.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading, listing, deleting, and using files in Messages API requests.

##### 5.1.3.9 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400-529) with causes, fixes, and typed exception handling patterns for Python and TypeScript SDKs.

##### 5.1.3.10 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API, Agent SDK, and tool documentation from platform.claude.com and GitHub repositories.

### 5.2 Integrations and Extensibility

GitHub CI/CD automation, MCP resource and tool discovery, and slash command skills that extend Claude's capabilities into external systems.

#### 5.2.1 GitHub Integration & CI/CD

Templates and workflows for integrating Claude Code with GitHub, enabling automated code assistance triggered by @claude mentions in issues and pull requests with configurable permissions and custom prompts.

##### 5.2.1.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template triggering Claude Code via @claude mentions in issues, PRs, and comments with configurable permissions and custom prompts.

##### 5.2.1.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security, and how to trigger Claude via @claude mentions.

#### 5.2.2 Skills & Slash Commands

Specialized capabilities invoked through slash commands and skill routing that extend Claude's functionality across debugging, task scheduling, configuration management, and API integration. These tools handle domain-specific operations like parsing recurring task intervals into cron expressions, modifying environment settings, and routing developers to appropriate API architecture patterns based on language and use case.

##### 5.2.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Invokes specialized skills and slash commands within the main conversation, requiring tool invocation before generating responses when a skill matches user requests.

##### 5.2.2.2 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes based on log analysis.

##### 5.2.2.3 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts intervals to cron expressions, and schedules recurring tasks with automatic expiration after 3 days.

##### 5.2.2.4 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration in settings.json files, with emphasis on reading before writing, merging arrays, and configuring hooks for automated actions.

##### 5.2.2.5 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, and compaction for long conversations.

##### 5.2.2.6 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, mapping common use cases to relevant documentation sections.

#### 5.2.3 MCP Resource Handling

Manages Model Context Protocol resources and deferred tool discovery, handling empty or non-displayable content states while enabling efficient tool loading through keyword search and direct selection without redundant lookups.

##### 5.2.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

MCP resource has no content.

##### 5.2.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

MCP resource contains no displayable content.

##### 5.2.3.3 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Loads deferred tools via keyword search, direct selection, or required keyword modes, with tools immediately available after discovery without redundant follow-up calls.

---

## 6. Security, Automation, and Developer Experience

Security monitoring and vulnerability analysis, lifecycle hook automation, web browsing tools, output communication standards, documentation generation, usage analytics, and collaborative development modes.

### 6.1 Security and Lifecycle Automation

Threat monitoring for agent actions, code vulnerability analysis, and configurable lifecycle hooks that automate formatting, testing, and CI/CD without manual intervention.

#### 6.1.1 Hooks System & Lifecycle Events

Lifecycle event system that automates code workflows through configurable hooks triggered at specific points in development. Hooks evaluate conditions, execute commands, and report success or failure, enabling CI/CD automation, code formatting, testing, and validation without manual intervention.

##### 6.1.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide to Claude Code hooks system, defining lifecycle events, hook types (command, prompt, agent), input/output formats, and common automation patterns for code formatting, testing, and validation.

##### 6.1.1.2 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether a condition is met or providing a reason for failure.

##### 6.1.1.3 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies that an autonomous agent completed its assigned plan by analyzing conversation transcript and codebase, returning a structured result indicating success or failure with reasoning.

##### 6.1.1.4 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Additional context provided by a hook.

##### 6.1.1.5 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Hook command failed with a blocking error.

##### 6.1.1.6 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for hook stopped continuation messages.

##### 6.1.1.7 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Hook stopped continuation with a message.

##### 6.1.1.8 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Hook executed successfully with a success message.

#### 6.1.2 Security Monitoring & Vulnerability Analysis

Multi-layered security enforcement that monitors autonomous agent actions against threat models and access rules, analyzes code for exploitable vulnerabilities, and provides guidance on authorized security testing while blocking destructive or evasive attacks.

##### 6.1.2.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor evaluating autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with sophisticated threat modeling and user intent analysis.

##### 6.1.2.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules preventing destructive git operations, credential leakage, data exfiltration, and unsafe infrastructure changes, with specific allow exceptions for legitimate operations.

##### 6.1.2.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review analyzing code changes for exploitable vulnerabilities including injection attacks, authentication bypasses, crypto flaws, and data exposure with high-confidence filtering and detailed exploit scenarios.

##### 6.1.2.4 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing and defensive security while refusing requests for destructive attacks, DoS, supply chain compromise, or detection evasion.

##### 6.1.2.5 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Analyze malware behavior and provide reports when encountered, but refuse to improve or augment malicious code.

### 6.2 Web Tools and Output Communication

Web page retrieval, browser automation for Chrome interactions, and conventions for concise action-first responses with precise code references.

#### 6.2.1 Web & Browser Tools

Tools for retrieving and interacting with web content and browser automation. Capabilities include fetching and analyzing web pages with caching, searching current information with source attribution, and automating Chrome browser interactions through mouse, keyboard, and visual inspection. Includes guidance on tool loading, debugging, and content summarization with citation handling.

##### 6.2.1.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with a small model, supporting URL redirects and including a 15-minute cache.

##### 6.2.1.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff, requiring mandatory source attribution in responses and supporting domain filtering (US only).

##### 6.2.1.3 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Interact with a Chrome browser using mouse and keyboard; take screenshots and consult them before clicking to ensure accurate cursor positioning on elements.

##### 6.2.1.4 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines 13 mouse and keyboard actions for Chrome browser automation including clicks, typing, scrolling, dragging, and element inspection via zoom and scroll-to.

##### 6.2.1.5 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use, requiring tool selection before invocation.

##### 6.2.1.6 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for using Claude in Chrome browser automation tools, covering GIF recording, console debugging, alert handling, avoiding loops, and tab context management.

##### 6.2.1.7 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing 125-character quote limits for untrusted domains while using quotation marks and paraphrasing to avoid word-for-word reproduction.

#### 6.2.2 Output Style & Communication

Conventions for clear, efficient communication: lead with answers and decisions, eliminate filler and reasoning exposition, preserve only essential information in polished prose, include precise code references with line numbers, and generate concise summaries of actions and outcomes. Applies consistent formatting across tool usage reports, agent actions, and thread responses.

##### 6.2.2.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Directs Claude to be concise and direct, leading with answers rather than reasoning, skipping filler and preamble, and focusing output on decisions, status updates, and blockers.

##### 6.2.2.2 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Directs Claude to produce concise, polished output without filler, repetition, or inner monologue, presenting only the final product of thinking while preserving essential information.

##### 6.2.2.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 6.2.2.4 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing specific code locations for easy user navigation.

##### 6.2.2.5 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Instructs Claude to generate brief summaries of tool usage in past tense, focusing on user-visible outcomes in under 8 words without implementation details or self-reference.

##### 6.2.2.6 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word agent action summaries in present tense, avoiding vague or branch-specific language.

##### 6.2.2.7 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering absolute paths, response formatting, emoji avoidance, and tool call punctuation.

##### 6.2.2.8 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise sub-agent reporting and detailed standalone writeups based on caller context, with guidance on file paths and code snippets.

### 6.3 Documentation, Analytics, and Collaboration

Architecture documentation generation, usage analytics for friction detection, collaborative learning modes with visual preference tools, and knowledge capture from sessions.

#### 6.3.1 Documentation & Knowledge Capture

Systems for extracting and preserving project knowledge—analyzing codebases to generate architecture documentation, updating living knowledge bases with session learnings, and capturing repeatable workflows as reusable skills through structured interview processes.

##### 6.3.1.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files containing common build/test/lint commands, high-level architecture, and project-specific conventions for future Claude Code instances.

##### 6.3.1.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Updates Magic Doc files with new learnings from conversations, preserving headers and removing outdated information while maintaining terse, architecture-focused documentation without implementation details or code walkthroughs.

##### 6.3.1.3 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-round interview process to capture a session's repeatable workflow as a reusable skill, analyzing the process, confirming details with the user, breaking down steps, and generating a SKILL.md file with execution instructions and success criteria.

#### 6.3.2 Usage Insights & Analytics

Analyzes aggregated usage data to surface what's working, identify friction patterns, and recommend future workflows. Extracts structured insights from session transcripts including satisfaction metrics and friction types, then synthesizes findings into actionable suggestions for feature adoption and workflow optimization.

##### 6.3.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for future models based on aggregated usage data.

##### 6.3.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes usage data to identify and categorize friction patterns with examples, helping users understand recurring issues.

##### 6.3.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data.

##### 6.3.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from session transcripts including goal categories, user satisfaction, and friction types, with strict guidelines for counting only explicit user requests and signals.

##### 6.3.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions, feature recommendations (MCP servers, custom skills, hooks, headless mode, task agents), and usage patterns based on usage analysis.

#### 6.3.3 Learning Mode & Collaborative Development

Enables hands-on collaborative software engineering where humans contribute to design decisions and business logic while Claude provides educational context. Includes tools for gathering user preferences through visual comparisons and side-by-side option previews, supporting iterative decision-making throughout development.

##### 6.3.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt enabling collaborative software engineering with human contributions on design decisions, business logic, and algorithms. Includes request format, TodoList integration, and educational insights for hands-on practice.

##### 6.3.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Instructs Claude to provide brief educational insights before and after code writing in learning mode, focusing on implementation choices specific to the codebase.

##### 6.3.3.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Instructs Claude to use the optional preview field when presenting UI options that require visual comparison, rendering markdown mockups, code snippets, or diagrams in a side-by-side layout with options on the left.

##### 6.3.3.4 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying ambiguous instructions, and offering implementation choices. Includes plan mode guidance to use this tool for requirements clarification, not plan approval.

##### 6.3.3.5 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructions for using the optional preview field on single-select question options to display visual artifacts like UI mockups, code snippets, and diagrams.
