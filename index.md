# Claude Code System Prompts Index

Practical infrastructure for building, deploying, and working alongside Claude as an autonomous coding agent — covering everything needed to take a task from natural language intent to executed, version-controlled code across single and multi-agent environments.

## Table of Contents

1. [Bash Execution & File System Tools](#1-bash-execution-file-system-tools)
   1. [Bash Tool Configuration & Best Practices](#11-bash-tool-configuration-best-practices)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (command description) [Tool Description]](#112-bash-command-description-tool-description)
      3. [Bash (maintain cwd) [Tool Description]](#113-bash-maintain-cwd-tool-description)
      4. [Bash (no newlines) [Tool Description]](#114-bash-no-newlines-tool-description)
      5. [Bash (parallel commands) [Tool Description]](#115-bash-parallel-commands-tool-description)
      6. [Bash (prefer dedicated tools) [Tool Description]](#116-bash-prefer-dedicated-tools-tool-description)
      7. [Bash (quote file paths) [Tool Description]](#117-bash-quote-file-paths-tool-description)
      8. [Bash (sequential commands) [Tool Description]](#118-bash-sequential-commands-tool-description)
      9. [Bash (semicolon usage) [Tool Description]](#119-bash-semicolon-usage-tool-description)
      10. [Bash (timeout) [Tool Description]](#1110-bash-timeout-tool-description)
      11. [Bash (verify parent directory) [Tool Description]](#1111-bash-verify-parent-directory-tool-description)
      12. [Bash (working directory) [Tool Description]](#1112-bash-working-directory-tool-description)
      13. [Bash (sleep — keep short) [Tool Description]](#1113-bash-sleep-—-keep-short-tool-description)
      14. [Bash (sleep — no polling background tasks) [Tool Description]](#1114-bash-sleep-—-no-polling-background-tasks-tool-description)
      15. [Bash (sleep — no retry loops) [Tool Description]](#1115-bash-sleep-—-no-retry-loops-tool-description)
      16. [Bash (sleep — run immediately) [Tool Description]](#1116-bash-sleep-—-run-immediately-tool-description)
      17. [Bash (sleep — use check commands) [Tool Description]](#1117-bash-sleep-—-use-check-commands-tool-description)
      18. [Bash (sleep — use run_in_background) [Tool Description]](#1118-bash-sleep-—-use-run_in_background-tool-description)
      19. [Bash (alternative — communication) [Tool Description]](#1119-bash-alternative-—-communication-tool-description)
      20. [Bash (alternative — content search) [Tool Description]](#1120-bash-alternative-—-content-search-tool-description)
      21. [Bash (alternative — edit files) [Tool Description]](#1121-bash-alternative-—-edit-files-tool-description)
      22. [Bash (alternative — file search) [Tool Description]](#1122-bash-alternative-—-file-search-tool-description)
      23. [Bash (alternative — read files) [Tool Description]](#1123-bash-alternative-—-read-files-tool-description)
      24. [Bash (alternative — write files) [Tool Description]](#1124-bash-alternative-—-write-files-tool-description)
      25. [Bash (built-in tools note) [Tool Description]](#1125-bash-built-in-tools-note-tool-description)
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
   3. [File System Operations & Tool Preferences](#13-file-system-operations-tool-preferences)
      1. [ReadFile (Tool Description)](#131-readfile-tool-description)
      2. [Write (Tool Description)](#132-write-tool-description)
      3. [Edit (Tool Description)](#133-edit-tool-description)
      4. [Glob (Tool Description)](#134-glob-tool-description)
      5. [Grep (Tool Description)](#135-grep-tool-description)
      6. [LSP (Tool Description)](#136-lsp-tool-description)
      7. [NotebookEdit (Tool Description)](#137-notebookedit-tool-description)
      8. [Tool usage (read files) [System Prompt]](#138-tool-usage-read-files-system-prompt)
      9. [Tool usage (edit files) [System Prompt]](#139-tool-usage-edit-files-system-prompt)
      10. [Tool usage (create files) [System Prompt]](#1310-tool-usage-create-files-system-prompt)
      11. [Tool usage (search files) [System Prompt]](#1311-tool-usage-search-files-system-prompt)
      12. [Tool usage (search content) [System Prompt]](#1312-tool-usage-search-content-system-prompt)
      13. [Tool usage (reserve Bash) [System Prompt]](#1313-tool-usage-reserve-bash-system-prompt)
2. [Code Development, Review & Version Control](#2-code-development-review-version-control)
   1. [Software Engineering Task Execution Principles](#21-software-engineering-task-execution-principles)
      1. [Doing tasks (software engineering focus) [System Prompt]](#211-doing-tasks-software-engineering-focus-system-prompt)
      2. [Doing tasks (ambitious tasks) [System Prompt]](#212-doing-tasks-ambitious-tasks-system-prompt)
      3. [Doing tasks (avoid over-engineering) [System Prompt]](#213-doing-tasks-avoid-over-engineering-system-prompt)
      4. [Doing tasks (blocked approach) [System Prompt]](#214-doing-tasks-blocked-approach-system-prompt)
      5. [Doing tasks (minimize file creation) [System Prompt]](#215-doing-tasks-minimize-file-creation-system-prompt)
      6. [Doing tasks (no compatibility hacks) [System Prompt]](#216-doing-tasks-no-compatibility-hacks-system-prompt)
      7. [Doing tasks (no premature abstractions) [System Prompt]](#217-doing-tasks-no-premature-abstractions-system-prompt)
      8. [Doing tasks (no time estimates) [System Prompt]](#218-doing-tasks-no-time-estimates-system-prompt)
      9. [Doing tasks (no unnecessary additions) [System Prompt]](#219-doing-tasks-no-unnecessary-additions-system-prompt)
      10. [Doing tasks (no unnecessary error handling) [System Prompt]](#2110-doing-tasks-no-unnecessary-error-handling-system-prompt)
      11. [Doing tasks (read before modifying) [System Prompt]](#2111-doing-tasks-read-before-modifying-system-prompt)
      12. [Doing tasks (help and feedback) [System Prompt]](#2112-doing-tasks-help-and-feedback-system-prompt)
      13. [Executing actions with care (System Prompt)](#2113-executing-actions-with-care-system-prompt)
      14. [Tool execution denied (System Prompt)](#2114-tool-execution-denied-system-prompt)
   2. [Git, GitHub & CI/CD](#22-git-github-cicd)
      1. [Git Workflow & Version Control](#221-git-workflow-version-control)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#2211-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#2212-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#2213-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#2214-bash-git-—-prefer-new-commits-tool-description)
         5. [EnterWorktree (Tool Description)](#2215-enterworktree-tool-description)
         6. [ExitWorktree (Tool Description)](#2216-exitworktree-tool-description)
         7. [Git status (System Prompt)](#2217-git-status-system-prompt)
         8. [Quick git commit (Agent Prompt)](#2218-quick-git-commit-agent-prompt)
         9. [Quick PR creation (Agent Prompt)](#2219-quick-pr-creation-agent-prompt)
         10. [Session title and branch generation (Agent Prompt)](#22110-session-title-and-branch-generation-agent-prompt)
      2. [GitHub Integration & PR Workflows](#222-github-integration-pr-workflows)
         1. [/pr-comments slash command (Agent Prompt)](#2221-pr-comments-slash-command-agent-prompt)
         2. [GitHub Actions workflow for @claude mentions (Data)](#2222-github-actions-workflow-for-claude-mentions-data)
         3. [GitHub App installation PR description (Data)](#2223-github-app-installation-pr-description-data)
   3. [Code Quality, Security & Codebase Analysis](#23-code-quality-security-codebase-analysis)
      1. [Code Quality, Review & Security](#231-code-quality-review-security)
         1. [/review-pr slash command (Agent Prompt)](#2311-review-pr-slash-command-agent-prompt)
         2. [/security-review slash command (Agent Prompt)](#2312-security-review-slash-command-agent-prompt)
         3. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#2313-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         4. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#2314-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         5. [Verification specialist (Agent Prompt)](#2315-verification-specialist-agent-prompt)
         6. [Verification specialist (Skill)](#2316-verification-specialist-skill)
         7. [Create verifier skills (Skill)](#2317-create-verifier-skills-skill)
         8. [Doing tasks (security) [System Prompt]](#2318-doing-tasks-security-system-prompt)
         9. [Censoring assistance with malicious activities (System Prompt)](#2319-censoring-assistance-with-malicious-activities-system-prompt)
         10. [Malware analysis after Read tool call (System Reminder)](#23110-malware-analysis-after-read-tool-call-system-reminder)
      2. [Codebase Exploration & Navigation](#232-codebase-exploration-navigation)
         1. [Explore (Agent Prompt)](#2321-explore-agent-prompt)
         2. [Explore strengths and guidelines (Agent Prompt)](#2322-explore-strengths-and-guidelines-agent-prompt)
         3. [CLAUDE.md creation (Agent Prompt)](#2323-claudemd-creation-agent-prompt)
         4. [Update Magic Docs (Agent Prompt)](#2324-update-magic-docs-agent-prompt)
3. [Agent Coordination & Planning](#3-agent-coordination-planning)
   1. [Plan Mode & Implementation Planning](#31-plan-mode-implementation-planning)
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
   2. [Multi-Agent Teams & Swarm Coordination](#32-multi-agent-teams-swarm-coordination)
      1. [Multi-Agent Team & Swarm Coordination](#321-multi-agent-team-swarm-coordination)
         1. [TeammateTool (Tool Description)](#3211-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#3212-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#3213-sendmessagetool-tool-description)
         4. [Team Coordination (System Reminder)](#3214-team-coordination-system-reminder)
         5. [Team Shutdown (System Reminder)](#3215-team-shutdown-system-reminder)
         6. [Teammate Communication (System Prompt)](#3216-teammate-communication-system-prompt)
         7. [Team memory content display (System Prompt)](#3217-team-memory-content-display-system-prompt)
         8. [Writing subagent prompts (System Prompt)](#3218-writing-subagent-prompts-system-prompt)
         9. [Subagent delegation examples (System Prompt)](#3219-subagent-delegation-examples-system-prompt)
         10. [Fork usage guidelines (System Prompt)](#32110-fork-usage-guidelines-system-prompt)
      2. [Subagent Launching & Agent Tool Usage](#322-subagent-launching-agent-tool-usage)
         1. [Agent (usage notes) [Tool Description]](#3221-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#3222-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (delegate exploration) [System Prompt]](#3223-tool-usage-delegate-exploration-system-prompt)
         4. [Tool usage (subagent guidance) [System Prompt]](#3224-tool-usage-subagent-guidance-system-prompt)
         5. [Tool usage (direct search) [System Prompt]](#3225-tool-usage-direct-search-system-prompt)
         6. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#3226-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   3. [Agent Design & Orchestration Infrastructure](#33-agent-design-orchestration-infrastructure)
      1. [Agent creation architect (Agent Prompt)](#331-agent-creation-architect-agent-prompt)
      2. [Agent Hook (Agent Prompt)](#332-agent-hook-agent-prompt)
      3. [Hook condition evaluator (Agent Prompt)](#333-hook-condition-evaluator-agent-prompt)
      4. [/batch slash command (Agent Prompt)](#334-batch-slash-command-agent-prompt)
      5. [Worker fork execution (Agent Prompt)](#335-worker-fork-execution-agent-prompt)
      6. [Common suffix (response format) [Agent Prompt]](#336-common-suffix-response-format-agent-prompt)
4. [Session State, Memory & Context Management](#4-session-state-memory-context-management)
   1. [Memory & Session Persistence](#41-memory-session-persistence)
      1. [Description part of memory instructions (System Prompt)](#411-description-part-of-memory-instructions-system-prompt)
      2. [Memory system (private feedback) [System Prompt]](#412-memory-system-private-feedback-system-prompt)
      3. [Agent memory instructions (System Prompt)](#413-agent-memory-instructions-system-prompt)
      4. [Memory file contents (System Reminder)](#414-memory-file-contents-system-reminder)
      5. [Nested memory contents (System Reminder)](#415-nested-memory-contents-system-reminder)
      6. [Session memory template (Data)](#416-session-memory-template-data)
      7. [Session memory update instructions (Agent Prompt)](#417-session-memory-update-instructions-agent-prompt)
      8. [Memory selection (Agent Prompt)](#418-memory-selection-agent-prompt)
   2. [Context Compaction & Session Continuity](#42-context-compaction-session-continuity)
      1. [Context Compaction & Conversation Summarization](#421-context-compaction-conversation-summarization)
         1. [Context compaction summary (System Prompt)](#4211-context-compaction-summary-system-prompt)
         2. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#4212-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
         3. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#4213-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
         4. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#4214-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
         5. [Conversation summarization (Agent Prompt)](#4215-conversation-summarization-agent-prompt)
         6. [Recent Message Summarization (Agent Prompt)](#4216-recent-message-summarization-agent-prompt)
      2. [Resource & Budget Monitoring](#422-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#4221-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#4222-usd-budget-system-reminder)
         3. [Session continuation (System Reminder)](#4223-session-continuation-system-reminder)
      3. [Session Management & Status Display](#423-session-management-status-display)
         1. [Status line setup (Agent Prompt)](#4231-status-line-setup-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#4232-session-search-assistant-agent-prompt)
         3. [Post checkpoints (System Prompt)](#4233-post-checkpoints-system-prompt)
         4. [Brief mode (System Prompt)](#4234-brief-mode-system-prompt)
         5. [Auto mode (System Prompt)](#4235-auto-mode-system-prompt)
   3. [IDE Synchronization & Hook Notifications](#43-ide-synchronization-hook-notifications)
      1. [IDE & File State Notifications](#431-ide-file-state-notifications)
         1. [File opened in IDE (System Reminder)](#4311-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#4312-lines-selected-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#4313-file-modified-by-user-or-linter-system-reminder)
         4. [File truncated (System Reminder)](#4314-file-truncated-system-reminder)
         5. [File exists but empty (System Reminder)](#4315-file-exists-but-empty-system-reminder)
         6. [File shorter than offset (System Reminder)](#4316-file-shorter-than-offset-system-reminder)
         7. [Compact file reference (System Reminder)](#4317-compact-file-reference-system-reminder)
         8. [New diagnostics detected (System Reminder)](#4318-new-diagnostics-detected-system-reminder)
      2. [Hook System Notifications & Configuration](#432-hook-system-notifications-configuration)
         1. [Hook additional context (System Reminder)](#4321-hook-additional-context-system-reminder)
         2. [Hook blocking error (System Reminder)](#4322-hook-blocking-error-system-reminder)
         3. [Hook stopped continuation prefix (System Reminder)](#4323-hook-stopped-continuation-prefix-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#4324-hook-stopped-continuation-system-reminder)
         5. [Hook success (System Reminder)](#4325-hook-success-system-reminder)
         6. [Hooks Configuration (System Prompt)](#4326-hooks-configuration-system-prompt)
5. [Workflow Automation & External Tool Integration](#5-workflow-automation-external-tool-integration)
   1. [Task Tracking & Skills Management](#51-task-tracking-skills-management)
      1. [Task & Todo Management](#511-task-todo-management)
         1. [TodoWrite (Tool Description)](#5111-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#5112-taskcreate-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#5113-tasklist-teammate-workflow-tool-description)
         4. [Tool usage (task management) [System Prompt]](#5114-tool-usage-task-management-system-prompt)
         5. [Task status (System Reminder)](#5115-task-status-system-reminder)
         6. [Task tools reminder (System Reminder)](#5116-task-tools-reminder-system-reminder)
         7. [TodoWrite reminder (System Reminder)](#5117-todowrite-reminder-system-reminder)
      2. [Skills System & Workflow Automation](#512-skills-system-workflow-automation)
         1. [Skill (Tool Description)](#5121-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#5122-tool-usage-skill-invocation-system-prompt)
         3. [Invoked skills (System Reminder)](#5123-invoked-skills-system-reminder)
         4. [Skillify Current Session (System Prompt)](#5124-skillify-current-session-system-prompt)
         5. [Simplify (Skill)](#5125-simplify-skill)
         6. [/loop slash command (Skill)](#5126-loop-slash-command-skill)
         7. [Debugging (Skill)](#5127-debugging-skill)
         8. [Update Claude Code Config (Skill)](#5128-update-claude-code-config-skill)
   2. [Web, Browser & External Services](#52-web-browser-external-services)
      1. [MCP Resource Handling](#521-mcp-resource-handling)
         1. [MCP resource no content (System Reminder)](#5211-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#5212-mcp-resource-no-displayable-content-system-reminder)
         3. [Chrome browser MCP tools (System Prompt)](#5213-chrome-browser-mcp-tools-system-prompt)
      2. [Web & Browser Automation](#522-web-browser-automation)
         1. [WebFetch (Tool Description)](#5221-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#5222-websearch-tool-description)
         3. [Computer (Tool Description)](#5223-computer-tool-description)
         4. [Computer action (Tool Parameter)](#5224-computer-action-tool-parameter)
         5. [Claude in Chrome browser automation (System Prompt)](#5225-claude-in-chrome-browser-automation-system-prompt)
         6. [WebFetch summarizer (Agent Prompt)](#5226-webfetch-summarizer-agent-prompt)
   3. [Scheduling, Safety Monitoring & Tool Discovery](#53-scheduling-safety-monitoring-tool-discovery)
      1. [Scheduling & Background Task Management](#531-scheduling-background-task-management)
         1. [CronCreate (Tool Description)](#5311-croncreate-tool-description)
         2. [Sleep (Tool Description)](#5312-sleep-tool-description)
      2. [Security & Command Safety Monitoring](#532-security-command-safety-monitoring)
         1. [Bash command prefix detection (Agent Prompt)](#5321-bash-command-prefix-detection-agent-prompt)
         2. [Bash command description writer (Agent Prompt)](#5322-bash-command-description-writer-agent-prompt)
         3. [Worker instructions (System Prompt)](#5323-worker-instructions-system-prompt)
      3. [ToolSearch & Dynamic Tool Discovery](#533-toolsearch-dynamic-tool-discovery)
         1. [ToolSearch (second part) [Tool Description]](#5331-toolsearch-second-part-tool-description)
6. [Claude API & SDK Documentation](#6-claude-api-sdk-documentation)
   1. [Claude API SDK References](#61-claude-api-sdk-references)
      1. [Claude API reference — Python (Data)](#611-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#612-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#613-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#614-claude-api-reference-—-java-data)
      5. [Claude API reference — Ruby (Data)](#615-claude-api-reference-—-ruby-data)
      6. [Claude API reference — PHP (Data)](#616-claude-api-reference-—-php-data)
      7. [Claude API reference — C# (Data)](#617-claude-api-reference-—-c-data)
      8. [Claude model catalog (Data)](#618-claude-model-catalog-data)
      9. [HTTP error codes reference (Data)](#619-http-error-codes-reference-data)
   2. [Tool Use, Streaming & Agent SDK Patterns](#62-tool-use-streaming-agent-sdk-patterns)
      1. [Tool Use & Streaming API References](#621-tool-use-streaming-api-references)
         1. [Tool use concepts (Data)](#6211-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6212-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6213-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#6214-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#6215-streaming-reference-—-typescript-data)
      2. [Agent SDK References & Patterns](#622-agent-sdk-references-patterns)
         1. [Agent SDK reference — Python (Data)](#6221-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#6222-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#6223-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#6224-agent-sdk-patterns-—-typescript-data)
   3. [Files, Batch Processing & Documentation Routing](#63-files-batch-processing-documentation-routing)
      1. [Files & Batch Processing APIs](#631-files-batch-processing-apis)
         1. [Files API reference — Python (Data)](#6311-files-api-reference-—-python-data)
         2. [Files API reference — TypeScript (Data)](#6312-files-api-reference-—-typescript-data)
         3. [Message Batches API reference — Python (Data)](#6313-message-batches-api-reference-—-python-data)
      2. [Build with Claude Documentation & Routing](#632-build-with-claude-documentation-routing)
         1. [Build with Claude API (Skill)](#6321-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#6322-build-with-claude-api-reference-guide-skill)
         3. [Live documentation sources (Data)](#6323-live-documentation-sources-data)
         4. [Claude guide agent (Agent Prompt)](#6324-claude-guide-agent-agent-prompt)
7. [User Experience, Communication & Learning](#7-user-experience-communication-learning)
   1. [Output Style & Communication Guidelines](#71-output-style-communication-guidelines)
      1. [Output efficiency (System Prompt)](#711-output-efficiency-system-prompt)
      2. [Tone and style (concise output — detailed) [System Prompt]](#712-tone-and-style-concise-output-—-detailed-system-prompt)
      3. [Tone and style (concise output — short) [System Prompt]](#713-tone-and-style-concise-output-—-short-system-prompt)
      4. [Tone and style (code references) [System Prompt]](#714-tone-and-style-code-references-system-prompt)
      5. [Tool Use Summary Generation (System Prompt)](#715-tool-use-summary-generation-system-prompt)
      6. [Agent Summary Generation (System Prompt)](#716-agent-summary-generation-system-prompt)
      7. [Agent thread notes (System Prompt)](#717-agent-thread-notes-system-prompt)
      8. [Output style active (System Reminder)](#718-output-style-active-system-reminder)
   2. [User Interaction & Intent Prediction](#72-user-interaction-intent-prediction)
      1. [User Interaction & Question Asking](#721-user-interaction-question-asking)
         1. [AskUserQuestion (Tool Description)](#7211-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#7212-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#7213-option-previewer-system-prompt)
         4. [/btw side question (System Reminder)](#7214-btw-side-question-system-reminder)
         5. [Agent mention (System Reminder)](#7215-agent-mention-system-reminder)
      2. [Prompt Suggestion & UX Enhancement](#722-prompt-suggestion-ux-enhancement)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#7221-prompt-suggestion-generator-v2-agent-prompt)
         2. [Scratchpad directory (System Prompt)](#7222-scratchpad-directory-system-prompt)
   3. [Analytics, Learning & Workflow Insights](#73-analytics-learning-workflow-insights)
      1. [Usage Insights & Analytics](#731-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#7311-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7312-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7313-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7314-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7315-insights-suggestions-system-prompt)
      2. [Learning Mode & Educational Features](#732-learning-mode-educational-features)
         1. [Learning mode (System Prompt)](#7321-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7322-learning-mode-insights-system-prompt)

---

## 1. Bash Execution & File System Tools

Covers how Claude executes shell commands safely and efficiently, including sandbox security policies, tool preferences for file operations, and best practices for path handling and command chaining.

### 1.1 Bash Tool Configuration & Best Practices

Bash command execution follows specific patterns for efficiency and clarity: use absolute paths and avoid cd to maintain working directory, chain dependent commands with && for failure propagation, and execute independent commands in parallel. Prefer dedicated tools (Read, Write, Edit, Glob, Grep) over bash equivalents for file operations and content search. Quote file paths containing spaces, verify parent directories before creation, and keep sleep durations brief while avoiding polling loops—use background task notifications or check commands instead.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Basic description of the Bash tool's function: executing commands and returning output.

#### 1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Requires clear, concise descriptions of Bash commands, with brief summaries for simple commands and detailed context for complex operations.

#### 1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Directs Claude to use absolute paths and avoid cd commands to maintain the current working directory throughout a session.

#### 1.1.4 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits using newlines to separate commands in Bash tool calls.

#### 1.1.5 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to make multiple Bash tool calls in parallel when commands are independent and can run simultaneously.

#### 1.1.6 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns against using Bash for find, grep, cat, and similar read-only operations; directs Claude to use dedicated tools instead for better user experience.

#### 1.1.7 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Requires double-quoting file paths containing spaces in Bash commands.

#### 1.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call to ensure sequential execution with failure propagation.

#### 1.1.9 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier failures are acceptable.

#### 1.1.10 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Optionally specify command timeout in milliseconds up to a maximum; default timeout is configurable.

#### 1.1.11 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating files or directories, verify the parent directory exists and is correct using ls.

#### 1.1.12 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between commands, but shell state does not; environment is initialized from user profile.

#### 1.1.13 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations between 1-5 seconds to avoid blocking the user.

#### 1.1.14 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

#### 1.1.15 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Diagnose root causes of failures instead of retrying commands in sleep loops.

#### 1.1.16 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; execute them without delay.

#### 1.1.17 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like gh run view for polling external processes instead of sleeping first.

#### 1.1.18 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Use run_in_background for long-running commands to receive completion notifications without sleeping.

#### 1.1.19 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly rather than using echo or printf for communication.

#### 1.1.20 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use the Grep tool instead of grep or rg for content searching.

#### 1.1.21 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs Claude to use the Edit tool instead of sed or awk for file editing.

#### 1.1.22 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use the Glob tool instead of find or ls for file searching.

#### 1.1.23 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs Claude to use the Read tool instead of cat, head, or tail for reading files.

#### 1.1.24 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use the Write tool instead of echo or cat for file writing operations.

#### 1.1.25 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Recommends using built-in tools over Bash equivalents for better user experience and permission transparency.

### 1.2 Bash Sandbox Security & Restrictions

All bash commands run within a mandatory sandbox by default, with no exceptions or disabling allowed by policy. When sandbox restrictions cause failures—indicated by access denied, operation not permitted, network failures, or Unix socket errors—immediately retry with sandbox disabled and briefly explain the restriction to the user. Use $TMPDIR for temporary files, never suggest sensitive paths for allowlisting, and treat each command's sandbox setting independently.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to collaborate with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Establishes default behavior to run commands within sandbox; disabling sandbox requires explicit user request or evidence of sandbox restriction.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header text introducing a list of indicators that sandbox restrictions caused a command failure.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies operation not permitted errors for file and network operations as evidence of sandbox restrictions.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies Unix socket connection errors as evidence of sandbox restrictions.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and inform the user about the /sandbox command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition for identifying sandbox-caused failures: when a command fails with evidence of sandbox restrictions, distinguishing from other failure causes.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Establishes that all Bash commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Enforces that commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Each bash command with dangerouslyDisableSandbox should be treated individually; default to sandbox mode for subsequent commands.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header instruction for responding when sandbox-caused failures are detected.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry failed commands with dangerouslyDisableSandbox enabled without asking the user.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use $TMPDIR or ${SANDBOX_TMPDIR_FN()} for temporary files in sandbox mode instead of /tmp directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling sandbox mode will trigger a user permission prompt.

### 1.3 File System Operations & Tool Preferences

Dedicated tools handle filesystem operations more effectively than bash: Read retrieves files including images and PDFs with optional line offsets, Write creates or overwrites files, Edit performs exact string replacements with context matching, Glob finds files by pattern, and Grep searches content with regex and filtering. LSP provides code intelligence across workspaces. NotebookEdit manipulates Jupyter cells. Reserve Bash exclusively for system commands and terminal operations, defaulting to these specialized tools when available.

#### 1.3.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Read files from the local filesystem with support for images, PDFs, and Jupyter notebooks, including optional line offsets and limits for large files.

#### 1.3.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Write files to the local filesystem with overwrite capability, preferring the Edit tool for modifications and avoiding documentation files unless explicitly requested.

#### 1.3.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files by matching old_string with surrounding context; preserve indentation from Read output and use replace_all for renaming across the file.

#### 1.3.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like **/*.js; returns sorted results by modification time for finding files by name.

#### 1.3.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search using ripgrep with regex support, file filtering by glob or type, and multiple output modes; use for search tasks instead of bash grep commands.

#### 1.3.6 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers to retrieve code intelligence features including symbol definitions, references, hover information, and call hierarchies across files and workspaces.

#### 1.3.7 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replace, insert, or delete cells in Jupyter notebook files with support for code, text, and visualizations.

#### 1.3.8 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use Read tool instead of cat, head, tail, or sed for file reading.

#### 1.3.9 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs Claude to use Edit tool instead of sed or awk for file modifications.

#### 1.3.10 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use Write tool instead of cat heredoc or echo redirection for file creation.

#### 1.3.11 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use Glob tool instead of find or ls for file searches.

#### 1.3.12 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs Claude to use Grep tool instead of grep or rg for searching file contents.

#### 1.3.13 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Directs Claude to reserve Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

---

## 2. Code Development, Review & Version Control

Principles and tooling for writing, reviewing, and managing code changes — from task execution discipline and security analysis to Git workflows and codebase navigation.

### 2.1 Software Engineering Task Execution Principles

Behavioral constraints and decision-making frameworks for executing code tasks. These principles prioritize focused, minimal changes over ambitious refactoring; encourage pragmatic problem-solving when blocked; and establish safety guardrails for destructive or shared-state operations.

#### 2.1.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames Claude's primary role as performing software engineering tasks and interprets ambiguous instructions in that context.

#### 2.1.2 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Empowers Claude to tackle complex, large-scope tasks while respecting user judgment on feasibility.

#### 2.1.3 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Constrains Claude to make only requested or clearly necessary changes, keeping solutions simple and focused.

#### 2.1.4 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Directs Claude to explore alternative approaches when blocked rather than retrying failed actions, with option to ask the user for alignment.

#### 2.1.5 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Instructs Claude to prefer editing existing files over creating new ones to prevent file bloat and build on prior work.

#### 2.1.6 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Prohibits backwards-compatibility shims and cleanup comments, favoring complete deletion of unused code.

#### 2.1.7 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Discourages creating helpers or utilities for one-time operations or hypothetical requirements, favoring minimal necessary complexity.

#### 2.1.8 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid providing time estimates or predictions for task completion.

#### 2.1.9 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Restricts Claude from adding features, refactoring, or improving code beyond what was explicitly requested.

#### 2.1.10 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs Claude to avoid defensive error handling for impossible scenarios, validating only at system boundaries.

#### 2.1.11 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing modifications.

#### 2.1.12 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels when requested.

#### 2.1.13 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a framework for evaluating action reversibility and blast radius, requiring user confirmation for destructive, hard-to-reverse, or shared-state operations while permitting local reversible actions freely.

#### 2.1.14 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Defines behavior when tool execution is denied: attempt reasonable alternatives but avoid malicious workarounds, and escalate to user if essential capability is blocked.

### 2.2 Git, GitHub & CI/CD

Safe Git operation patterns, pull request workflows, and GitHub Actions integration for triggering Claude through CI/CD pipelines.

#### 2.2.1 Git Workflow & Version Control

Git operations prioritize safety: never commit without explicit user request, evaluate safer alternatives before destructive operations like reset or force push, and always run hooks without skipping or bypassing signing. Create new commits rather than amending, use gh CLI for pull request creation with proper attribution, and leverage git worktrees for isolated branching when explicitly requested. Session titles and branch names follow naming conventions (max 6 words, sentence case for titles; max 4 words, claude/ prefix for branches).

##### 2.2.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to evaluate safer alternatives before executing destructive git operations like reset, force push, or checkout.

##### 2.2.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests, covering safety protocols, commit message drafting, hook handling, and PR creation via gh CLI. Emphasizes never committing without explicit user request, avoiding destructive operations, and creating new commits rather than amending after hook failures.

##### 2.2.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping hooks or bypassing signing unless explicitly requested by the user; requires investigating and fixing hook failures.

##### 2.2.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to create new commits rather than amending existing ones.

##### 2.2.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it only when user explicitly requests worktree usage; requires git repository or WorktreeCreate/WorktreeRemove hooks.

##### 2.2.1.6 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exit a worktree created by EnterWorktree and return to original directory; choose to keep or remove the worktree with optional discard_changes flag for uncommitted work.

##### 2.2.1.7 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git branch, main branch reference, status, and recent commits as a conversation snapshot.

##### 2.2.1.8 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context from git status and diff, drafting messages based on recent commit style and following git safety protocols.

##### 2.2.1.9 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Streamlined PR creation that analyzes all changes, creates a feature branch, commits with attribution, pushes to origin, and creates or updates a pull request with title and body using heredoc syntax.

##### 2.2.1.10 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent that generates concise session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from coding task descriptions.

#### 2.2.2 GitHub Integration & PR Workflows

GitHub platform integration enabling Claude to interact with pull requests, comments, and CI/CD pipelines. Provides workflow automation templates and installation guidance for triggering Claude Code through GitHub mentions and actions.

##### 2.2.2.1 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and code review comments with diff context, formatted with file paths, line numbers, and threaded replies.

##### 2.2.2.2 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code on @claude mentions in issues, PRs, and comments, with configurable permissions and optional custom prompts.

##### 2.2.2.3 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security model, and how to trigger Claude via @claude mentions.

### 2.3 Code Quality, Security & Codebase Analysis

Automated code review, vulnerability detection, threat modeling, and read-only codebase exploration for architecture understanding.

#### 2.3.1 Code Quality, Review & Security

Automated analysis and verification systems that evaluate code changes for quality, security vulnerabilities, and correctness. Includes adversarial testing frameworks, security threat modeling for autonomous agents, and deterministic verification across build, test, and linting stages.

##### 2.3.1.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Expert code reviewer that fetches PR details and diff, analyzing changes for quality, style, improvements, and risks including correctness, conventions, performance, test coverage, and security.

##### 2.3.1.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review analyzing code changes for exploitable vulnerabilities across input validation, authentication, crypto, injection, and data exposure. Minimizes false positives with high-confidence filtering and confidence scoring.

##### 2.3.1.3 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor evaluating autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage. Defines threat model, evaluation rules, user intent principles, and classification process.

##### 2.3.1.4 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, block rules, and allow exceptions governing autonomous agent actions. Covers git safety, code execution, cloud operations, credentials, permissions, infrastructure changes, and data protection.

##### 2.3.1.5 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial verification agent that tests implementations by running builds, test suites, linters, and probes (concurrency, boundary values, idempotency), issuing PASS/FAIL/PARTIAL verdicts with command output evidence and avoiding verification avoidance patterns.

##### 2.3.1.6 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Verification specialist skill that discovers verifier skills, analyzes code changes, generates deterministic verification plans, triggers appropriate verifiers, and reports results with failure analysis.

##### 2.3.1.7 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase guide for creating verifier skills that automatically test code changes using Playwright for web UIs, Tmux for CLIs, and HTTP for APIs, including auto-detection, tool setup, interactive Q&A, and skill generation.

##### 2.3.1.8 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities such as injection attacks, XSS, and OWASP top 10 risks.

##### 2.3.1.9 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Security guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing malicious activities and requiring authorization context.

##### 2.3.1.10 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code.

#### 2.3.2 Codebase Exploration & Navigation

Read-only codebase search and analysis capabilities that rapidly navigate projects through pattern matching and file inspection. Generates and maintains architecture documentation by synthesizing codebase structure into developer-focused guides.

##### 2.3.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

File search specialist for Claude Code that rapidly navigates codebases using glob patterns, regex search, and file reading in read-only mode. Emphasizes efficient parallel tool calls and absolute file paths in final reports.

##### 2.3.2.2 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines the read-only Explore subagent's strengths in searching and analyzing codebases, with guidelines emphasizing broad search strategies, thoroughness, and avoiding unnecessary file creation.

##### 2.3.2.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md documentation files, capturing build/test commands, high-level architecture, and development patterns without repeating obvious instructions or listing every component.

##### 2.3.2.4 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Agent that updates Magic Doc files with new learnings from conversations, preserving headers while removing outdated information and focusing on architecture, patterns, and entry points rather than implementation details.

---

## 3. Agent Coordination & Planning

Infrastructure for designing multi-agent systems, decomposing work into parallel units, coordinating agent teams, and structuring implementation plans before execution.

### 3.1 Plan Mode & Implementation Planning

Plan mode enables structured exploration and design before implementation: enter to explore codebases and design approaches for non-trivial tasks, use parallel agents for initial understanding and planning agents for architecture decisions, maintain a plan file as the only editable resource during read-only exploration, and exit only after user approval. Iterative and subagent variants support pair-planning with users and simplified workflows. Re-entry evaluates plan relevance to new requests, and verification tools confirm completion.

#### 3.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Enter plan mode to explore codebase and design implementation approaches for user approval before coding. Use for non-trivial tasks involving new features, multiple approaches, architectural decisions, or multi-file changes.

#### 3.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning and request user approval by reading the plan from file; use only for implementation tasks requiring code changes, not research or exploration.

#### 3.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Activates plan mode with a structured 5-phase workflow: initial understanding through parallel exploration agents, design via planning agents, review of plans, final plan documentation, and mode exit. Enforces read-only operations except for plan file editing.

#### 3.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative plan mode where Claude pair-plans with the user through cycles of code exploration, plan file updates, and targeted questions. Plan file is the only editable resource; mode exits via plan approval tool.

#### 3.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents enforcing read-only operations except plan file editing, with instructions to answer queries and ask clarifying questions.

#### 3.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, instructing it to read the existing plan, evaluate relevance to the new request, and either continue or overwrite the plan accordingly.

#### 3.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Signals that plan mode has ended and Claude can now execute edits, run tools, and take actions.

#### 3.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and instructs Claude to continue working on it if relevant.

#### 3.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

#### 3.1.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent that explores codebases in read-only mode to design implementation plans, identifying critical files and architectural trade-offs while following existing patterns and conventions.

### 3.2 Multi-Agent Teams & Swarm Coordination

Creating and managing agent teams, shared task lists, peer messaging, and graceful shutdown protocols for distributed agent workflows.

#### 3.2.1 Multi-Agent Team & Swarm Coordination

Infrastructure for creating agent teams, managing shared task lists, and coordinating work through direct messaging and plan approval workflows. Handles team lifecycle from creation through graceful shutdown, with support for peer collaboration and cost-aware communication patterns.

##### 3.2.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Create and manage agent teams with shared task lists, coordinate teammate work through task assignment and messaging, and handle idle states and peer collaboration within swarms.

##### 3.2.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Remove team and task directories after swarm work completion, requiring all active members to shut down first.

##### 3.2.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Send direct messages or broadcasts to teammates, handle shutdown requests and responses, and manage plan approval workflows in agent swarms with cost-aware messaging patterns.

##### 3.2.1.4 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity and coordination responsibilities, instructing it to reference teammates by name, read team config, check task lists, and send updates to the team lead.

##### 3.2.1.5 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before returning a response in non-interactive mode, using shutdown requests and cleanup operations.

##### 3.2.1.6 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agent team members to use SendMessage tool for teammate communication and task coordination rather than plain text responses.

##### 3.2.1.7 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and context for injection into conversation.

##### 3.2.1.8 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for delegating tasks to subagents, distinguishing between context-inheriting agents (directive-style prompts) and fresh agents (full context briefing), and emphasizing explicit understanding over vague delegation.

##### 3.2.1.9 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results without fabricating answers while awaiting subagent completion.

##### 3.2.1.10 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for research and implementation work, prohibits reading fork output mid-flight, and forbids fabricating fork results.

#### 3.2.2 Subagent Launching & Agent Tool Usage

Guidance for launching specialized subagents to parallelize independent work, explore codebases, and handle autonomous multi-step tasks. Balances direct tool usage for simple searches against delegated exploration for complex research, with emphasis on context preservation and work deduplication.

##### 3.2.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guide for the Agent tool covering subagent launching, concurrent execution, background tasks, resumption via agent ID, worktree isolation, and context preservation. Includes guidance on when to use foreground vs background execution and how to provide detailed task descriptions.

##### 3.2.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent types for autonomous multi-step task handling, with reference to available agent types and their capabilities.

##### 3.2.2.3 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Directs Claude to use Task tool with specialized agents for broader codebase exploration and deep research when simple searches prove insufficient.

##### 3.2.2.4 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using Task tool with specialized agents for parallelizing independent queries and protecting context, while avoiding duplicate work.

##### 3.2.2.5 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob and Grep tools directly for simple, directed codebase searches.

##### 3.2.2.6 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while using sequential execution when dependencies exist between calls.

### 3.3 Agent Design & Orchestration Infrastructure

Framework for designing, deploying, and coordinating AI agents within Claude Code. Handles agent specification generation, task decomposition into parallel work units, worker isolation, and completion verification across distributed execution.

#### 3.3.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design custom AI agents by extracting user intent, creating expert personas, architecting comprehensive system prompts, optimizing for performance, and generating JSON specifications with identifiers and usage examples. Emphasizes alignment with project-specific patterns from CLAUDE.md files.

#### 3.3.2 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions for agents in Claude Code by analyzing conversation transcripts and codebase state, returning structured results indicating whether planned tasks were completed.

#### 3.3.3 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON with ok: true or ok: false with reason.

#### 3.3.4 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5-30 independent units, determining e2e test recipes, and spawning background worker agents with worktree isolation. Tracks progress across all workers and renders status tables.

#### 3.3.5 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Forked worker sub-agent that executes directives directly without spawning further sub-agents, using tools silently and reporting structured results (scope, findings, files changed, issues) under 500 words with commit hashes for modifications.

#### 3.3.6 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise sub-agent reporting and detailed standalone writeups based on an IS_SUBAGENT flag. Specifies file path handling and emoji avoidance.

---

## 4. Session State, Memory & Context Management

Mechanisms for persisting knowledge across sessions, compacting exhausted context windows, synchronizing IDE state, and tracking resource consumption.

### 4.1 Memory & Session Persistence

Persistent storage mechanisms for user profiles, private feedback, and session state across conversations. Includes structured templates for organizing project context, tracking workflow decisions, and building institutional knowledge through agent memory updates.

#### 4.1.1 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines how to write user memory descriptions that capture role, goals, and preferences to enable personalized assistance while avoiding negative judgments.

#### 4.1.2 [Memory system (private feedback) [System Prompt]](system-prompts/system-prompt-memory-system-private-feedback.md)

Defines private feedback memory for storing user corrections and guidance, with validation to detect contradictions against team feedback before saving.

#### 4.1.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

#### 4.1.4 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path with type description.

#### 4.1.5 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file.

#### 4.1.6 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for organizing session memory in `summary.md` files, with sections for current state, task specification, files, workflow, errors, codebase documentation, learnings, key results, and worklog.

#### 4.1.7 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files by editing existing sections with detailed, info-dense content while preserving section headers and italic descriptions. Focuses on actionable information and current state.

#### 4.1.8 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects up to 5 relevant memory files from available options based on user query, prioritizing certain matches and excluding uncertain ones.

### 4.2 Context Compaction & Session Continuity

Condensing exhausted context windows into structured summaries and managing session status, checkpoints, and cross-machine continuity.

#### 4.2.1 Context Compaction & Conversation Summarization

Techniques for condensing exhausted context windows into structured continuation summaries that preserve task state, technical decisions, errors, and user feedback. Enables efficient resumption by capturing chronological intent and specific details while deferring implementation specifics.

##### 4.2.1.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries when context windows are exhausted, covering task overview, current state, discoveries, next steps, and context to preserve for efficient resumption.

##### 4.2.1.2 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

Analysis instructions for compaction that require chronological review of entire conversations, identifying user intents, technical decisions, specific details, errors, and user feedback.

##### 4.2.1.3 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Lean experimental analysis instructions for compaction using analysis tags as planning scratchpad rather than detailed content, deferring specifics to summary section.

##### 4.2.1.4 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

Analysis instructions for compaction focused on recent messages, identifying user requests, approaches, technical decisions, specific details, errors, and user feedback.

##### 4.2.1.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing primary requests, technical concepts, files examined, errors and fixes, problem-solving efforts, all user messages, pending tasks, current work, and next steps with direct quotes from recent context.

##### 4.2.1.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes only recent conversation messages following earlier retained context, capturing requests, technical concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps.

#### 4.2.2 Resource & Budget Monitoring

Tracks consumption of computational and financial resources, displaying token usage and USD budget with remaining quotas. Also handles session state across machine boundaries, updating context when continuing from another device.

##### 4.2.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 4.2.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

##### 4.2.2.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and provides the updated working directory.

#### 4.2.3 Session Management & Status Display

User interface and session tracking systems that display real-time status, search conversation history, and manage communication modes. Converts shell configurations to status displays and formats checkpoint messages for compact consumption.

##### 4.2.3.1 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Status line setup agent that converts shell PS1 configurations to Claude Code statusLine commands, handling escape sequence conversion, ANSI colors, and JSON input from session context including model, workspace, token usage, and vim mode.

##### 4.2.3.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user queries by prioritizing tag matches, then title, branch, summary, and transcript content. Returns JSON array of relevant session indices ordered by relevance.

##### 4.2.3.3 [Post checkpoints (System Prompt)](system-prompts/system-prompt-post-checkpoints.md)

Defines checkpoint messaging format for compact view consumption: concise, outcome-focused messages with specific details (file:line, PR numbers, decisions) that stand alone and include status flags for push notifications.

##### 4.2.3.4 [Brief mode (System Prompt)](system-prompts/system-prompt-brief-mode.md)

Communication guidelines for brief mode using SendUserMessage checkpoints to acknowledge requests, mark results, and flag decisions while working asynchronously.

##### 4.2.3.5 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Behavioral guidelines for auto mode enabling continuous autonomous task execution with minimal interruptions, preferring action over planning and reasonable assumptions.

### 4.3 IDE Synchronization & Hook Notifications

Real-time notifications about file and editor state changes, plus lifecycle hook execution outcomes that keep Claude synchronized with the development environment.

#### 4.3.1 IDE & File State Notifications

Real-time notifications about file and editor state changes, including user interactions (file opens, line selections), external modifications, and boundary conditions (truncation, empty files, offset errors). These alerts keep Claude synchronized with the IDE's current context and file contents.

##### 4.3.1.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may relate to the current task.

##### 4.3.1.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific line ranges selected by the user in the IDE with truncated content preview.

##### 4.3.1.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Alerts Claude that a file was externally modified and provides relevant changes with line numbers to incorporate into ongoing work.

##### 4.3.1.4 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs use of the Read tool for additional content.

##### 4.3.1.5 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns that a file exists but contains no content.

##### 4.3.1.6 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns that the requested file offset exceeds the file's actual length and provides total line count.

##### 4.3.1.7 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before summarization and directs use of the Read tool to access it.

##### 4.3.1.8 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude that new diagnostic issues have been detected in the system.

#### 4.3.2 Hook System Notifications & Configuration

Lifecycle automation framework that executes shell commands, prompts, or agents at specific workflow events (PreToolUse, PostToolUse, SessionStart). Notifications report hook execution outcomes—success, blocking errors, or continuation stops—while configuration guides define tool matchers and event bindings.

##### 4.3.2.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution.

##### 4.3.2.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command that prevented continuation.

##### 4.3.2.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for messages indicating a hook stopped continuation.

##### 4.3.2.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Message indicating that a hook stopped the continuation process.

##### 4.3.2.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook with its output message.

##### 4.3.2.6 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide to configuring lifecycle hooks in Claude Code that run shell commands, prompts, or agents at specific events like PreToolUse, PostToolUse, and SessionStart.

---

## 5. Workflow Automation & External Tool Integration

Reusable skills, scheduling, task tracking, web access, browser automation, and dynamic tool discovery that extend Claude's capabilities beyond core coding tasks.

### 5.1 Task Tracking & Skills Management

Structured task lists with status tracking, and reusable skill workflows encapsulated as slash commands for repeatable domain processes.

#### 5.1.1 Task & Todo Management

Tools and prompts for breaking down work into structured task lists with status tracking (pending, in-progress, completed). Enables progress visibility across coding sessions and coordinates task discovery and assignment within teams.

##### 5.1.1.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Create and manage structured task lists for coding sessions with real-time status updates, supporting pending, in-progress, and completed states with dual-form task descriptions.

##### 5.1.1.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Create structured task lists for multi-step coding sessions with status tracking, descriptions, and optional active-form labels to organize complex work and demonstrate progress.

##### 5.1.1.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Teammates discover and claim available work from shared task lists, prioritizing unblocked tasks by ID order and notifying the team lead when blocked.

##### 5.1.1.4 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to break down and manage work using the TodoWrite tool, marking tasks complete individually rather than in batches.

##### 5.1.1.5 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

##### 5.1.1.6 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task creation and update tools for tracking progress on relevant work, with instruction not to mention this reminder to the user.

##### 5.1.1.7 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use TodoWrite tool for task progress tracking when relevant, with instruction not to mention this reminder to the user.

#### 5.1.2 Skills System & Workflow Automation

Framework for creating, invoking, and managing reusable specialized capabilities. Skills encapsulate domain knowledge and repeatable workflows as slash commands, with tooling to capture processes, debug issues, and modify system configurations.

##### 5.1.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Execute specialized skills and slash commands within the main conversation, with support for optional arguments and fully qualified skill names.

##### 5.1.2.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Instructs Claude to use Skill tool to execute user-invocable skills via slash commands, only for skills listed in the tool's user-invocable section.

##### 5.1.2.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the session and instructs Claude to continue following their guidelines.

##### 5.1.2.4 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-step process to convert a session into a reusable skill: analyzing the repeatable process, interviewing the user across four rounds, writing a SKILL.md file with detailed steps and success criteria, and confirming the final output.

##### 5.1.2.5 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel review agents for code reuse, quality, and efficiency, then aggregates findings and fixes issues directly.

##### 5.1.2.6 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parser for scheduling recurring tasks via `/loop [interval] <prompt>` syntax, converting intervals to cron expressions and creating recurring jobs with automatic 3-day expiration.

##### 5.1.2.7 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging Claude Code session issues by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 5.1.2.8 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code settings.json files, including hooks configuration, permissions, environment variables, and MCP servers, with emphasis on reading before writing and merging arrays.

### 5.2 Web, Browser & External Services

Web content fetching, search with attribution, Chrome browser automation, and MCP resource handling for accessing live external information.

#### 5.2.1 MCP Resource Handling

Manages Model Context Protocol resources, handling edge cases where resources exist but lack displayable content. Includes guidance for loading Chrome browser MCP tools through ToolSearch before invocation.

##### 5.2.1.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 5.2.1.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it is not displayable.

##### 5.2.1.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use, requiring explicit tool selection before calling mcp__claude-in-chrome__* functions.

#### 5.2.2 Web & Browser Automation

Enables web interaction through content fetching, search, and browser automation. WebFetch and WebSearch access current information with proper attribution, while Computer tool provides direct Chrome control via mouse, keyboard, and screenshot feedback. Supporting agents summarize verbose content and enforce citation standards.

##### 5.2.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetch and analyze web content by converting HTML to markdown and processing with AI, supporting URL redirects and cached responses with preference for MCP-provided alternatives.

##### 5.2.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Search the web for current information beyond knowledge cutoff with mandatory source attribution in responses, supporting domain filtering and year-aware query construction.

##### 5.2.2.3 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Interact with a Chrome browser using mouse and keyboard to click elements, type, and take screenshots; consult screenshots before clicking to determine precise coordinates.

##### 5.2.2.4 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines mouse and keyboard actions for Chrome browser automation including clicks, typing, scrolling, dragging, and hover interactions with screenshot and zoom capabilities.

##### 5.2.2.5 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for effective browser automation using Claude in Chrome tools, covering GIF recording, console debugging, alert handling, loop avoidance, and tab context management.

##### 5.2.2.6 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Agent that summarizes verbose web content for the main model, enforcing 125-character quote limits for untrusted domains, using proper attribution, and respecting open-source licenses.

### 5.3 Scheduling, Safety Monitoring & Tool Discovery

Background task scheduling with cron syntax, bash command injection detection, and runtime tool discovery through keyword search.

#### 5.3.1 Scheduling & Background Task Management

Tools for scheduling one-shot and recurring background tasks using cron syntax and managing idle wait states. These mechanisms enable asynchronous task execution with load distribution and user interrupt capability.

##### 5.3.1.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron jobs using standard 5-field cron syntax in user's local timezone. Avoid :00 and :30 minute marks for load distribution unless user specifies exact time. Recurring tasks auto-expire after 3 days; jobs only fire when REPL is idle.

##### 5.3.1.2 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Wait for a specified duration with user interrupt capability and periodic check-in prompts, avoiding shell process overhead.

#### 5.3.2 Security & Command Safety Monitoring

Validates bash command safety through injection detection and prefix analysis, documents command behavior clearly, and orchestrates post-implementation workflows including testing and version control.

##### 5.3.2.1 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands for safety classification. Returns the detected prefix or 'command_injection_detected' to prevent malicious command execution.

##### 5.3.2.2 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions for bash commands, keeping simple commands brief and adding context for complex piped or obscure commands.

##### 5.3.2.3 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Outlines post-implementation workflow: simplify code using the Skill tool, run unit tests, perform end-to-end testing, commit changes, and report PR status.

#### 5.3.3 ToolSearch & Dynamic Tool Discovery

Enables runtime tool discovery through keyword search and schema fetching, allowing deferred resolution of tool definitions for dynamic invocation.

##### 5.3.3.1 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetch deferred tool schemas by name or keyword search, returning complete JSONSchema definitions for invocation with support for exact selection and ranked matching.

---

## 6. Claude API & SDK Documentation

Reference documentation for building with Claude: language-specific SDKs, tool use and streaming APIs, agent SDK patterns, file/batch processing, and routing guides for choosing the right integration approach.

### 6.1 Claude API SDK References

Language-specific SDK implementations for the Claude API across Python, TypeScript, Go, Java, Ruby, PHP, and C#, providing client initialization, message handling, streaming, vision capabilities, prompt caching, extended thinking, tool use, and error handling. Includes a model catalog with current IDs and context windows, plus HTTP error code reference with typed exceptions.

#### 6.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering client initialization, basic requests, vision, prompt caching (automatic and manual), adaptive/extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

#### 6.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript SDK reference covering client initialization, basic requests, vision, prompt caching, adaptive/extended thinking, error handling with typed exceptions, multi-turn conversations, compaction, and cost optimization.

#### 6.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, beta tool runner with automatic schema generation from structs, manual tool loops, and extended thinking with ThinkingBlock handling.

#### 6.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, and beta tool use with annotated classes and BetaToolRunner for automatic tool execution.

#### 6.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, and beta tool runner for automatic tool execution with class-based tool definitions.

#### 6.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization for standard API, Amazon Bedrock, Google Vertex AI, and Anthropic Foundry, plus basic requests, streaming, and manual tool use.

#### 6.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for the Claude API covering client initialization, basic message requests, streaming, and manual tool use with raw JSON schema definitions.

#### 6.1.8 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and deprecated Claude models with exact model IDs, aliases, context windows, max output tokens, and user-request resolution mapping for model selection.

#### 6.1.9 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with causes, fixes, and typed exception classes for Python and TypeScript SDKs.

### 6.2 Tool Use, Streaming & Agent SDK Patterns

Implementation guides for tool runners, agentic loops, streaming event handling, and the Agent SDK covering MCP integration, subagents, and session management.

#### 6.2.1 Tool Use & Streaming API References

Implementation guides for tool use and streaming across Python and TypeScript, covering tool runners with schema validation, manual agentic loops, code execution, file handling, memory integration, and structured outputs. Streaming references detail event handling, token management, and UI optimization patterns.

##### 6.2.1.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), memory, structured outputs, and best practices for effective tool definitions.

##### 6.2.1.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use implementation guide covering tool runner with decorators, MCP tool conversion, manual agentic loops, code execution with file uploads, memory tool, and structured outputs with Pydantic schemas.

##### 6.2.1.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use implementation guide covering tool runner with Zod schemas, manual agentic loops with streaming, code execution, file handling, memory tool, and structured outputs with Zod validation.

##### 6.2.1.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming API reference covering sync/async streaming, handling thinking blocks and tool use, progress tracking, error handling, and best practices for token management and stream event types.

##### 6.2.1.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming API reference with quick start, content type handling, tool runner integration, event types, and best practices including raw SSE format and DOM optimization for web UIs.

#### 6.2.2 Agent SDK References & Patterns

Comprehensive Agent SDK documentation for Python and TypeScript covering installation, query interfaces, built-in tools, permission systems, MCP server integration, hooks, subagents, and session management. Includes practical patterns demonstrating custom tool development, error recovery, and session resumption.

##### 6.2.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query() and ClaudeSDKClient interfaces, built-in tools, permission modes, MCP servers, hooks, subagents, error handling, and session history with anyio async patterns.

##### 6.2.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference covering installation, query() interface, built-in tools, permission modes, MCP servers with in-process tool support, hooks, subagents, message types, and session history.

##### 6.2.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks (PostToolUse), subagents, permission modes, error recovery, session resumption, and session history retrieval using anyio async patterns.

##### 6.2.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns demonstrating basic agents, hooks, subagents, Playwright MCP integration, and session resumption with async iterators and message type handling.

### 6.3 Files, Batch Processing & Documentation Routing

File upload and batch request APIs for document processing, plus routing guides directing users to appropriate documentation based on use case and language.

#### 6.3.1 Files & Batch Processing APIs

File upload and batch processing capabilities for Python and TypeScript, enabling document processing with citations, image handling, and asynchronous batch request execution up to 100K requests with cost optimization through prompt caching integration.

##### 6.3.1.1 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload (500 MB max), usage in messages (documents with citations, images), file management (list, retrieve metadata, delete, download), and end-to-end examples.

##### 6.3.1.2 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages (documents with citations, images), and file management (list, delete, download) with toFile helper.

##### 6.3.1.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference covering batch creation (up to 100K requests), polling for completion, result retrieval with match/case handling, cancellation, and integration with prompt caching for 50% cost reduction.

#### 6.3.2 Build with Claude Documentation & Routing

Routing guides and reference templates directing users to appropriate Claude API, Agent SDK, and tool documentation based on use case complexity and language preference. Includes live documentation sources and an agent that fetches current platform documentation with actionable guidance.

##### 6.3.2.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, compaction for long conversations, and common pitfalls.

##### 6.3.2.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Quick task reference template for directing users to language-specific documentation based on their use case, from single API calls to batch processing, file uploads, and agent SDKs.

##### 6.3.2.3 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API, Agent SDK, and tool documentation from platform.claude.com and GitHub repositories, with extraction prompts for specific topics.

##### 6.3.2.4 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing actionable guidance, and referencing local project files. Covers installation, hooks, skills, MCP servers, agent configuration, and API features.

---

## 7. User Experience, Communication & Learning

Guidelines for Claude's output style and tone, mechanisms for gathering user input, analytics for surfacing workflow friction, and educational features that engage users as active participants.

### 7.1 Output Style & Communication Guidelines

Directives for controlling Claude's response format, tone, and presentation. These guidelines emphasize conciseness, eliminate unnecessary elaboration, and establish conventions for code references, summaries, and agent status reporting.

#### 7.1.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Directs Claude to be concise and direct, leading with answers over reasoning and focusing text output on decisions, status updates, and blockers.

#### 7.1.2 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Directs Claude to produce concise, polished output without filler, repetition, or inner monologue while preserving essential information.

#### 7.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

#### 7.1.4 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing code for easy navigation.

#### 7.1.5 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Defines rules for generating concise summaries of coding assistant tool usage, emphasizing past tense, specificity, and user-visible outcomes within 8 words.

#### 7.1.6 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word agent action summaries in present tense, naming files/functions rather than branches or vague descriptions.

#### 7.1.7 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering absolute paths, response formatting, emoji avoidance, and tool call punctuation conventions.

#### 7.1.8 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is currently active and to follow its specific formatting guidelines.

### 7.2 User Interaction & Intent Prediction

Tools for clarifying ambiguous requirements, presenting visual decision options, predicting next user interactions, and managing session-specific file isolation.

#### 7.2.1 User Interaction & Question Asking

Mechanisms for gathering user input, clarifying ambiguous requirements, and presenting visual decision options during task execution. These tools enable interactive refinement while constraining tool use in planning contexts and side-question handling.

##### 7.2.1.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Tool for gathering user preferences, clarifying ambiguous instructions, and offering implementation choices during execution. Includes plan mode restrictions: use for requirement clarification only, not for plan approval.

##### 7.2.1.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructions for using the optional preview field on single-select question options to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML.

##### 7.2.1.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side visual comparison of UI options using markdown previews for mockups, code snippets, and diagrams in single-select questions.

##### 7.2.1.4 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Constrains Claude to answer side questions directly without tools, based only on conversation context, in a single response.

##### 7.2.1.5 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent type and requires passing appropriate context.

#### 7.2.2 Prompt Suggestion & UX Enhancement

Anticipates user intent by predicting natural next interactions from conversation context while maintaining session-specific file isolation for cleaner workspace management.

##### 7.2.2.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on recent conversation context, avoiding evaluative language and Claude-voice suggestions while staying specific and concise.

##### 7.2.2.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

### 7.3 Analytics, Learning & Workflow Insights

Usage pattern analysis to surface friction points and improvement opportunities, plus educational features that involve users in design decisions and reinforce implementation understanding.

#### 7.3.1 Usage Insights & Analytics

Analyzes aggregated session data to surface working patterns, friction points, and improvement opportunities, extracting structured signals from transcripts and generating actionable recommendations for workflow optimization and future AI capabilities.

##### 7.3.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for future models based on aggregated usage data.

##### 7.3.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes usage data to identify and categorize friction patterns with specific examples and actionable improvements.

##### 7.3.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage trends.

##### 7.3.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from session transcripts including goal categories, user satisfaction signals, and friction types with strict guidelines for counting only explicit user requests.

##### 7.3.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions for CLAUDE.md additions, Claude Code features to try, and usage patterns based on aggregated session data and recurring patterns.

#### 7.3.2 Learning Mode & Educational Features

Engages users as active participants in development by requesting contributions to design decisions and algorithms, providing educational context before and after code changes to reinforce implementation understanding.

##### 7.3.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Instructs Claude to balance task completion with hands-on learning by requesting user contributions on design decisions and key algorithms, using a structured "Learn by Doing" format with TODO(human) markers and post-contribution insights.

##### 7.3.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Instructs Claude to provide brief educational insights before and after code changes when learning mode is active, focusing on implementation choices specific to the codebase.
