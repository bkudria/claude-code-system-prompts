# Claude Code System Prompts Index

Practical infrastructure for building, deploying, and operating Claude-powered development agents — covering everything needed to move from raw API access to production-grade autonomous systems that write, review, execute, and coordinate code reliably across complex engineering workflows.

## Table of Contents

1. [Bash and Shell Execution](#1-bash-and-shell-execution)
   1. [Bash Tool Configuration & Best Practices](#11-bash-tool-configuration-best-practices)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (maintain cwd) [Tool Description]](#112-bash-maintain-cwd-tool-description)
      3. [Bash (no newlines) [Tool Description]](#113-bash-no-newlines-tool-description)
      4. [Bash (parallel commands) [Tool Description]](#114-bash-parallel-commands-tool-description)
      5. [Bash (prefer dedicated tools) [Tool Description]](#115-bash-prefer-dedicated-tools-tool-description)
      6. [Bash (quote file paths) [Tool Description]](#116-bash-quote-file-paths-tool-description)
      7. [Bash (sequential commands) [Tool Description]](#117-bash-sequential-commands-tool-description)
      8. [Bash (semicolon usage) [Tool Description]](#118-bash-semicolon-usage-tool-description)
      9. [Bash (timeout) [Tool Description]](#119-bash-timeout-tool-description)
      10. [Bash (verify parent directory) [Tool Description]](#1110-bash-verify-parent-directory-tool-description)
      11. [Bash (working directory) [Tool Description]](#1111-bash-working-directory-tool-description)
      12. [Bash (sleep — keep short) [Tool Description]](#1112-bash-sleep-—-keep-short-tool-description)
      13. [Bash (sleep — no polling background tasks) [Tool Description]](#1113-bash-sleep-—-no-polling-background-tasks-tool-description)
      14. [Bash (sleep — run immediately) [Tool Description]](#1114-bash-sleep-—-run-immediately-tool-description)
      15. [Bash (sleep — use check commands) [Tool Description]](#1115-bash-sleep-—-use-check-commands-tool-description)
      16. [Bash (alternative — communication) [Tool Description]](#1116-bash-alternative-—-communication-tool-description)
      17. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#1117-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   2. [Bash Tool Alternatives (Dedicated File & Search Tools)](#12-bash-tool-alternatives-dedicated-file-search-tools)
      1. [Bash (alternative — content search) [Tool Description]](#121-bash-alternative-—-content-search-tool-description)
      2. [Bash (alternative — edit files) [Tool Description]](#122-bash-alternative-—-edit-files-tool-description)
      3. [Bash (alternative — file search) [Tool Description]](#123-bash-alternative-—-file-search-tool-description)
      4. [Bash (alternative — read files) [Tool Description]](#124-bash-alternative-—-read-files-tool-description)
      5. [Bash (alternative — write files) [Tool Description]](#125-bash-alternative-—-write-files-tool-description)
      6. [Bash (built-in tools note) [Tool Description]](#126-bash-built-in-tools-note-tool-description)
   3. [Bash Sandbox Security & Restrictions](#13-bash-sandbox-security-restrictions)
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
   4. [PowerShell Tool & Windows Compatibility](#14-powershell-tool-windows-compatibility)
      1. [PowerShell (Tool Description)](#141-powershell-tool-description)
      2. [PowerShell edition for 5.1 (System Prompt)](#142-powershell-edition-for-51-system-prompt)
      3. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#143-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
      4. [One of six rules for using sleep command (System Prompt)](#144-one-of-six-rules-for-using-sleep-command-system-prompt)
   5. [Bash Command Documentation & Safety Agents](#15-bash-command-documentation-safety-agents)
      1. [Bash command description writer (Agent Prompt)](#151-bash-command-description-writer-agent-prompt)
      2. [Bash command prefix detection (Agent Prompt)](#152-bash-command-prefix-detection-agent-prompt)
      3. [Hook condition evaluator (stop) [Agent Prompt]](#153-hook-condition-evaluator-stop-agent-prompt)
      4. [Agent Hook (Agent Prompt)](#154-agent-hook-agent-prompt)
2. [Multi-Agent Coordination and Planning](#2-multi-agent-coordination-and-planning)
   1. [Planning and Execution Workflows](#21-planning-and-execution-workflows)
      1. [Planning Mode & Implementation Planning](#211-planning-mode-implementation-planning)
         1. [EnterPlanMode (Tool Description)](#2111-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#2112-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#2113-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#2114-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#2115-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#2116-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#2117-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#2118-plan-file-reference-system-reminder)
         9. [Verify plan reminder (System Reminder)](#2119-verify-plan-reminder-system-reminder)
         10. [Phase four of plan mode (System Prompt)](#21110-phase-four-of-plan-mode-system-prompt)
         11. [Remote plan mode (ultraplan) [System Prompt]](#21111-remote-plan-mode-ultraplan-system-prompt)
         12. [Remote planning session (System Prompt)](#21112-remote-planning-session-system-prompt)
         13. [Ultraplan mode (System Reminder)](#21113-ultraplan-mode-system-reminder)
         14. [Plan mode (enhanced) [Agent Prompt]](#21114-plan-mode-enhanced-agent-prompt)
      2. [Autonomous & Auto Mode Execution](#212-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#2121-auto-mode-system-prompt)
         2. [Autonomous loop check (System Prompt)](#2122-autonomous-loop-check-system-prompt)
         3. [Auto mode rule reviewer (Agent Prompt)](#2123-auto-mode-rule-reviewer-agent-prompt)
      3. [Worktree & Branch Isolation](#213-worktree-branch-isolation)
         1. [EnterWorktree (Tool Description)](#2131-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#2132-exitworktree-tool-description)
         3. [/batch slash command (Agent Prompt)](#2133-batch-slash-command-agent-prompt)
   2. [Subagent and Swarm Patterns](#22-subagent-and-swarm-patterns)
      1. [Subagent Delegation & Multi-Agent Coordination](#221-subagent-delegation-multi-agent-coordination)
         1. [Tool usage (subagent guidance) [System Prompt]](#2211-tool-usage-subagent-guidance-system-prompt)
         2. [Writing subagent prompts (System Prompt)](#2212-writing-subagent-prompts-system-prompt)
         3. [Subagent delegation examples (System Prompt)](#2213-subagent-delegation-examples-system-prompt)
         4. [Subagent prompt-writing examples (System Prompt)](#2214-subagent-prompt-writing-examples-system-prompt)
         5. [Fork usage guidelines (System Prompt)](#2215-fork-usage-guidelines-system-prompt)
         6. [Agent (usage notes) [Tool Description]](#2216-agent-usage-notes-tool-description)
         7. [Worker fork (Agent Prompt)](#2217-worker-fork-agent-prompt)
      2. [Team & Swarm Agent Coordination](#222-team-swarm-agent-coordination)
         1. [Team Coordination (System Reminder)](#2221-team-coordination-system-reminder)
         2. [Team Shutdown (System Reminder)](#2222-team-shutdown-system-reminder)
         3. [Teammate Communication (System Prompt)](#2223-teammate-communication-system-prompt)
         4. [SendMessageTool (Tool Description)](#2224-sendmessagetool-tool-description)
         5. [TeammateTool (Tool Description)](#2225-teammatetool-tool-description)
         6. [TeamDelete (Tool Description)](#2226-teamdelete-tool-description)
         7. [TaskList (teammate workflow) [Tool Description]](#2227-tasklist-teammate-workflow-tool-description)
      3. [Worker & Coordinator Agent Patterns](#223-worker-coordinator-agent-patterns)
         1. [Worker instructions (System Prompt)](#2231-worker-instructions-system-prompt)
         2. [General purpose (Agent Prompt)](#2232-general-purpose-agent-prompt)
         3. [Advisor tool instructions (System Prompt)](#2233-advisor-tool-instructions-system-prompt)
   3. [Task Tracking and Agent Invocation](#23-task-tracking-and-agent-invocation)
      1. [Task Management & Progress Tracking](#231-task-management-progress-tracking)
         1. [Tool usage (task management) [System Prompt]](#2311-tool-usage-task-management-system-prompt)
         2. [TodoWrite (Tool Description)](#2312-todowrite-tool-description)
         3. [TaskCreate (Tool Description)](#2313-taskcreate-tool-description)
         4. [Task tools reminder (System Reminder)](#2314-task-tools-reminder-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#2315-todowrite-reminder-system-reminder)
      2. [Agent Invocation & Side Queries](#232-agent-invocation-side-queries)
         1. [Agent mention (System Reminder)](#2321-agent-mention-system-reminder)
         2. [/btw side question (System Reminder)](#2322-btw-side-question-system-reminder)
3. [Claude API and SDK Documentation](#3-claude-api-and-sdk-documentation)
   1. [Core API and SDK Reference](#31-core-api-and-sdk-reference)
      1. [Claude API Reference Documentation](#311-claude-api-reference-documentation)
         1. [Claude API reference — Python (Data)](#3111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#3112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#3113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#3114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#3115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#3116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#3117-claude-api-reference-—-c-data)
         8. [Claude API reference — cURL (Data)](#3118-claude-api-reference-—-curl-data)
         9. [Claude model catalog (Data)](#3119-claude-model-catalog-data)
      2. [API Feature References](#312-api-feature-references)
         1. [Streaming reference — Python (Data)](#3121-streaming-reference-—-python-data)
         2. [Streaming reference — TypeScript (Data)](#3122-streaming-reference-—-typescript-data)
         3. [Tool use concepts (Data)](#3123-tool-use-concepts-data)
         4. [Tool use reference — Python (Data)](#3124-tool-use-reference-—-python-data)
         5. [Tool use reference — TypeScript (Data)](#3125-tool-use-reference-—-typescript-data)
         6. [Files API reference — Python (Data)](#3126-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#3127-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#3128-message-batches-api-reference-—-python-data)
         9. [Prompt Caching — Design & Optimization (Data)](#3129-prompt-caching-—-design-optimization-data)
         10. [HTTP error codes reference (Data)](#31210-http-error-codes-reference-data)
   2. [Managed Agents and Application Design](#32-managed-agents-and-application-design)
      1. [Managed Agents API Documentation](#321-managed-agents-api-documentation)
         1. [Managed Agents overview (Data)](#3211-managed-agents-overview-data)
         2. [Managed Agents core concepts (Data)](#3212-managed-agents-core-concepts-data)
         3. [Managed Agents endpoint reference (Data)](#3213-managed-agents-endpoint-reference-data)
         4. [Managed Agents environments and resources (Data)](#3214-managed-agents-environments-and-resources-data)
         5. [Managed Agents events and steering (Data)](#3215-managed-agents-events-and-steering-data)
         6. [Managed Agents tools and skills (Data)](#3216-managed-agents-tools-and-skills-data)
         7. [Managed Agents client patterns (Data)](#3217-managed-agents-client-patterns-data)
         8. [Managed Agents reference — Python (Data)](#3218-managed-agents-reference-—-python-data)
         9. [Managed Agents reference — TypeScript (Data)](#3219-managed-agents-reference-—-typescript-data)
         10. [Managed Agents reference — cURL (Data)](#32110-managed-agents-reference-—-curl-data)
         11. [Live documentation sources (Data)](#32111-live-documentation-sources-data)
      2. [Building LLM Applications & Agent Design](#322-building-llm-applications-agent-design)
         1. [Building LLM-powered applications with Claude (Skill)](#3221-building-llm-powered-applications-with-claude-skill)
         2. [Build with Claude API (reference guide) [Skill]](#3222-build-with-claude-api-reference-guide-skill)
         3. [Agent Design Patterns (Skill)](#3223-agent-design-patterns-skill)
         4. [Model migration guide (Skill)](#3224-model-migration-guide-skill)
         5. [Claude guide agent (Agent Prompt)](#3225-claude-guide-agent-agent-prompt)
         6. [Managed Agents onboarding flow (Agent Prompt)](#3226-managed-agents-onboarding-flow-agent-prompt)
4. [Developer Tools and IDE Integration](#4-developer-tools-and-ide-integration)
   1. [File, Search, and Code Navigation](#41-file-search-and-code-navigation)
      1. [File System Tools](#411-file-system-tools)
         1. [ReadFile (Tool Description)](#4111-readfile-tool-description)
         2. [Write (Tool Description)](#4112-write-tool-description)
         3. [Edit (Tool Description)](#4113-edit-tool-description)
         4. [Grep (Tool Description)](#4114-grep-tool-description)
         5. [Explore (Agent Prompt)](#4115-explore-agent-prompt)
      2. [LSP & Code Intelligence Tools](#412-lsp-code-intelligence-tools)
         1. [LSP (Tool Description)](#4121-lsp-tool-description)
   2. [Browser, Web, and Notebook Automation](#42-browser-web-and-notebook-automation)
      1. [Browser & Computer Automation](#421-browser-computer-automation)
         1. [Computer (Tool Description)](#4211-computer-tool-description)
         2. [Computer action (Tool Parameter)](#4212-computer-action-tool-parameter)
         3. [Computer Use MCP (Skill)](#4213-computer-use-mcp-skill)
         4. [Chrome browser MCP tools (System Prompt)](#4214-chrome-browser-mcp-tools-system-prompt)
         5. [Claude in Chrome browser automation (System Prompt)](#4215-claude-in-chrome-browser-automation-system-prompt)
      2. [Web Fetch & Search Tools](#422-web-fetch-search-tools)
         1. [WebFetch (Tool Description)](#4221-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#4222-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#4223-webfetch-summarizer-agent-prompt)
      3. [Jupyter Notebook & REPL Tools](#423-jupyter-notebook-repl-tools)
         1. [NotebookEdit (Tool Description)](#4231-notebookedit-tool-description)
         2. [REPL (Tool Description)](#4232-repl-tool-description)
         3. [REPL tool usage and scripting conventions (System Prompt)](#4233-repl-tool-usage-and-scripting-conventions-system-prompt)
   3. [IDE State and CI/CD Integration](#43-ide-state-and-cicd-integration)
      1. [IDE Integration & File State Notifications](#431-ide-integration-file-state-notifications)
         1. [File opened in IDE (System Reminder)](#4311-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#4312-lines-selected-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#4313-file-modified-by-user-or-linter-system-reminder)
         4. [File exists but empty (System Reminder)](#4314-file-exists-but-empty-system-reminder)
         5. [File truncated (System Reminder)](#4315-file-truncated-system-reminder)
         6. [File shorter than offset (System Reminder)](#4316-file-shorter-than-offset-system-reminder)
         7. [New diagnostics detected (System Reminder)](#4317-new-diagnostics-detected-system-reminder)
      2. [GitHub Integration & CI/CD](#432-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#4321-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#4322-github-app-installation-pr-description-data)
      3. [Git Workflow & Version Control Operations](#433-git-workflow-version-control-operations)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#4331-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#4332-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#4333-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#4334-bash-git-—-prefer-new-commits-tool-description)
         5. [Quick git commit (Agent Prompt)](#4335-quick-git-commit-agent-prompt)
         6. [Quick PR creation (Agent Prompt)](#4336-quick-pr-creation-agent-prompt)
         7. [Session title and branch generation (Agent Prompt)](#4337-session-title-and-branch-generation-agent-prompt)
         8. [Git status (System Prompt)](#4338-git-status-system-prompt)
   4. [MCP Tool Discovery and Hook System](#44-mcp-tool-discovery-and-hook-system)
      1. [Hook System & Lifecycle Events](#441-hook-system-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#4411-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#4412-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#4413-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#4414-hook-stopped-continuation-system-reminder)
         5. [Hook stopped continuation prefix (System Reminder)](#4415-hook-stopped-continuation-prefix-system-reminder)
         6. [Hook success (System Reminder)](#4416-hook-success-system-reminder)
         7. [Stop hook blocking error (System Reminder)](#4417-stop-hook-blocking-error-system-reminder)
         8. [update-config (7-step verification flow) [Skill]](#4418-update-config-7-step-verification-flow-skill)
      2. [MCP Resource & Tool Discovery](#442-mcp-resource-tool-discovery)
         1. [ToolSearch (second part) [Tool Description]](#4421-toolsearch-second-part-tool-description)
         2. [MCP resource no content (System Reminder)](#4422-mcp-resource-no-content-system-reminder)
         3. [MCP resource no displayable content (System Reminder)](#4423-mcp-resource-no-displayable-content-system-reminder)
5. [Memory, Session State, and Context Management](#5-memory-session-state-and-context-management)
   1. [Memory Management & Persistence](#51-memory-management-persistence)
      1. [Memory description of user details (System Prompt)](#511-memory-description-of-user-details-system-prompt)
      2. [Memory description of user feedback (System Prompt)](#512-memory-description-of-user-feedback-system-prompt)
      3. [Memory description of user feedback (with explicit save) [System Prompt]](#513-memory-description-of-user-feedback-with-explicit-save-system-prompt)
      4. [Memory staleness verification (System Prompt)](#514-memory-staleness-verification-system-prompt)
      5. [Description part of memory instructions (System Prompt)](#515-description-part-of-memory-instructions-system-prompt)
      6. [Agent memory instructions (System Prompt)](#516-agent-memory-instructions-system-prompt)
      7. [Dream team memory handling (System Prompt)](#517-dream-team-memory-handling-system-prompt)
      8. [Dream memory consolidation (Agent Prompt)](#518-dream-memory-consolidation-agent-prompt)
      9. [Dream memory pruning (Agent Prompt)](#519-dream-memory-pruning-agent-prompt)
      10. [Memory synthesis (Agent Prompt)](#5110-memory-synthesis-agent-prompt)
      11. [Determine which memory files to attach (Agent Prompt)](#5111-determine-which-memory-files-to-attach-agent-prompt)
      12. [Memory file contents (System Reminder)](#5112-memory-file-contents-system-reminder)
      13. [Nested memory contents (System Reminder)](#5113-nested-memory-contents-system-reminder)
      14. [Session memory template (Data)](#5114-session-memory-template-data)
      15. [Session memory update instructions (Agent Prompt)](#5115-session-memory-update-instructions-agent-prompt)
   2. [Conversation Summarization and History](#52-conversation-summarization-and-history)
      1. [Conversation Summarization & Context Compaction](#521-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#5211-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#5212-recent-message-summarization-agent-prompt)
         3. [Partial compaction instructions (System Prompt)](#5213-partial-compaction-instructions-system-prompt)
         4. [Context compaction summary (System Prompt)](#5214-context-compaction-summary-system-prompt)
         5. [Compact file reference (System Reminder)](#5215-compact-file-reference-system-reminder)
      2. [Session Search & History](#522-session-search-history)
         1. [Session search (Agent Prompt)](#5221-session-search-agent-prompt)
         2. [Prompt Suggestion Generator v2 (Agent Prompt)](#5222-prompt-suggestion-generator-v2-agent-prompt)
   3. [Session Metadata and Configuration](#53-session-metadata-and-configuration)
      1. [Session Naming & Metadata Generation](#531-session-naming-metadata-generation)
         1. [Coding session title generator (Agent Prompt)](#5311-coding-session-title-generator-agent-prompt)
         2. [/rename auto-generate session name (Agent Prompt)](#5312-rename-auto-generate-session-name-agent-prompt)
      2. [Configuration & Settings Management](#532-configuration-settings-management)
         1. [Config (Tool Description)](#5321-config-tool-description)
         2. [Minimal mode (System Prompt)](#5322-minimal-mode-system-prompt)
      3. [Session & Resource Monitoring](#533-session-resource-monitoring)
         1. [Token usage (System Reminder)](#5331-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#5332-usd-budget-system-reminder)
         3. [Session continuation (System Reminder)](#5333-session-continuation-system-reminder)
         4. [Invoked skills (System Reminder)](#5334-invoked-skills-system-reminder)
      4. [Scratchpad & Session Isolation](#534-scratchpad-session-isolation)
         1. [Scratchpad directory (System Prompt)](#5341-scratchpad-directory-system-prompt)
      5. [Status Line & Terminal Display](#535-status-line-terminal-display)
         1. [Status line setup (Agent Prompt)](#5351-status-line-setup-agent-prompt)
6. [Code Quality, Review, and Safe Execution](#6-code-quality-review-and-safe-execution)
   1. [Code Verification & Testing](#61-code-verification-testing)
      1. [Verify skill (Skill)](#611-verify-skill-skill)
      2. [Verify skill (runtime-verification) [Skill]](#612-verify-skill-runtime-verification-skill)
      3. [Verify CLI changes (example for Verify skill) [Skill]](#613-verify-cli-changes-example-for-verify-skill-skill)
      4. [Verify server/API changes (example for Verify skill) [Skill]](#614-verify-serverapi-changes-example-for-verify-skill-skill)
      5. [Create verifier skills (Skill)](#615-create-verifier-skills-skill)
      6. [Verification specialist (Agent Prompt)](#616-verification-specialist-agent-prompt)
   2. [Code Review & Security Analysis](#62-code-review-security-analysis)
      1. [/review-pr slash command (Agent Prompt)](#621-review-pr-slash-command-agent-prompt)
      2. [/security-review slash command (Agent Prompt)](#622-security-review-slash-command-agent-prompt)
      3. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#623-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      4. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#624-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      5. [Censoring assistance with malicious activities (System Prompt)](#625-censoring-assistance-with-malicious-activities-system-prompt)
      6. [Doing tasks (security) [System Prompt]](#626-doing-tasks-security-system-prompt)
   3. [Code Quality & Refactoring Guidelines](#63-code-quality-refactoring-guidelines)
      1. [Doing tasks (no compatibility hacks) [System Prompt]](#631-doing-tasks-no-compatibility-hacks-system-prompt)
      2. [Doing tasks (no unnecessary error handling) [System Prompt]](#632-doing-tasks-no-unnecessary-error-handling-system-prompt)
      3. [Doing tasks (software engineering focus) [System Prompt]](#633-doing-tasks-software-engineering-focus-system-prompt)
      4. [Doing tasks (ambitious tasks) [System Prompt]](#634-doing-tasks-ambitious-tasks-system-prompt)
      5. [Doing tasks (help and feedback) [System Prompt]](#635-doing-tasks-help-and-feedback-system-prompt)
   4. [Safe Action Execution & Risk Management](#64-safe-action-execution-risk-management)
      1. [Executing actions with care (System Prompt)](#641-executing-actions-with-care-system-prompt)
      2. [Tool execution denied (System Prompt)](#642-tool-execution-denied-system-prompt)
      3. [Malware analysis after Read tool call (System Reminder)](#643-malware-analysis-after-read-tool-call-system-reminder)
   5. [Communication and Response Standards](#65-communication-and-response-standards)
      1. [Communication Style & Response Formatting](#651-communication-style-response-formatting)
         1. [Communication style (System Prompt)](#6511-communication-style-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#6512-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#6513-tone-and-style-concise-output-—-short-system-prompt)
         4. [Option previewer (System Prompt)](#6514-option-previewer-system-prompt)
         5. [Output style active (System Reminder)](#6515-output-style-active-system-reminder)
         6. [Thinking frequency tuning (System Reminder)](#6516-thinking-frequency-tuning-system-reminder)
      2. [Learning & Teaching Modes](#652-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#6521-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6522-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#6523-request_teach_access-part-of-teach-mode-tool-description)
7. [Automation, Scheduling, and Workflow Systems](#7-automation-scheduling-and-workflow-systems)
   1. [Scheduling, Cron & Loop Automation](#71-scheduling-cron-loop-automation)
      1. [CronCreate (Tool Description)](#711-croncreate-tool-description)
      2. [ScheduleWakeup (/loop dynamic mode) [Tool Description]](#712-schedulewakeup-loop-dynamic-mode-tool-description)
      3. [Snooze (delay and reason guidance) [Tool Description]](#713-snooze-delay-and-reason-guidance-tool-description)
      4. [/loop slash command (Skill)](#714-loop-slash-command-skill)
      5. [/loop slash command (dynamic mode) [Skill]](#715-loop-slash-command-dynamic-mode-skill)
      6. [/loop self-pacing mode (Skill)](#716-loop-self-pacing-mode-skill)
      7. [/loop cloud-first scheduling offer (Skill)](#717-loop-cloud-first-scheduling-offer-skill)
      8. [Dynamic pacing loop execution (Skill)](#718-dynamic-pacing-loop-execution-skill)
      9. [Schedule recurring cron and execute immediately (compact) [Skill]](#719-schedule-recurring-cron-and-execute-immediately-compact-skill)
      10. [Schedule recurring cron and run immediately (Skill)](#7110-schedule-recurring-cron-and-run-immediately-skill)
      11. [/dream nightly schedule (Skill)](#7111-dream-nightly-schedule-skill)
      12. [Loop wakeup not scheduled (System Reminder)](#7112-loop-wakeup-not-scheduled-system-reminder)
      13. [/schedule slash command (Agent Prompt)](#7113-schedule-slash-command-agent-prompt)
   2. [Skills, Workflows, and Agent Configuration](#72-skills-workflows-and-agent-configuration)
      1. [Skill System & Workflow Automation](#721-skill-system-workflow-automation)
         1. [Skill (Tool Description)](#7211-skill-tool-description)
         2. [Skillify Current Session (System Prompt)](#7212-skillify-current-session-system-prompt)
         3. [Simplify (Skill)](#7213-simplify-skill)
         4. [Generate permission allowlist from transcripts (Skill)](#7214-generate-permission-allowlist-from-transcripts-skill)
         5. [Update Claude Code Config (Skill)](#7215-update-claude-code-config-skill)
      2. [Agent Creation & Configuration](#722-agent-creation-configuration)
         1. [Agent creation architect (Agent Prompt)](#7221-agent-creation-architect-agent-prompt)
         2. [Agent Summary Generation (System Prompt)](#7222-agent-summary-generation-system-prompt)
         3. [Agent thread notes (System Prompt)](#7223-agent-thread-notes-system-prompt)
   3. [Codebase Analysis & Documentation Generation](#73-codebase-analysis-documentation-generation)
      1. [CLAUDE.md creation (Agent Prompt)](#731-claudemd-creation-agent-prompt)
      2. [Onboarding guide generator (Agent Prompt)](#732-onboarding-guide-generator-agent-prompt)
      3. [/init CLAUDE.md and skill setup (new version) [Skill]](#733-init-claudemd-and-skill-setup-new-version-skill)
      4. [Team onboarding guide (Skill)](#734-team-onboarding-guide-skill)
   4. [Usage Analytics and Diagnostics](#74-usage-analytics-and-diagnostics)
      1. [Usage Insights & Analytics](#741-usage-insights-analytics)
         1. [Insights session facets extraction (System Prompt)](#7411-insights-session-facets-extraction-system-prompt)
         2. [Insights suggestions (System Prompt)](#7412-insights-suggestions-system-prompt)
         3. [Insights at a glance summary (System Prompt)](#7413-insights-at-a-glance-summary-system-prompt)
         4. [Insights friction analysis (System Prompt)](#7414-insights-friction-analysis-system-prompt)
         5. [Insights on the horizon (System Prompt)](#7415-insights-on-the-horizon-system-prompt)
         6. [/insights report output (Skill)](#7416-insights-report-output-skill)
      2. [Debugging & Diagnostics](#742-debugging-diagnostics)
         1. [Debugging (Skill)](#7421-debugging-skill)
         2. [/stuck slash command (Skill)](#7422-stuck-slash-command-skill)
   5. [Background Monitoring and Notifications](#75-background-monitoring-and-notifications)
      1. [Background Monitoring & User Interaction](#751-background-monitoring-user-interaction)
         1. [Background monitor (streaming events) [Tool Description]](#7511-background-monitor-streaming-events-tool-description)
         2. [AskUserQuestion (Tool Description)](#7512-askuserquestion-tool-description)
         3. [AskUserQuestion (preview field) [Tool Description]](#7513-askuserquestion-preview-field-tool-description)
      2. [Notification & Communication Tools](#752-notification-communication-tools)
         1. [PushNotification (Tool Description)](#7521-pushnotification-tool-description)
         2. [SendMessageTool (non-agent-teams) [Tool Description]](#7522-sendmessagetool-non-agent-teams-tool-description)
         3. [How to use the SendUserMessage tool (System Prompt)](#7523-how-to-use-the-sendusermessage-tool-system-prompt)

---

## 1. Bash and Shell Execution

Everything governing how bash and PowerShell commands are executed, sandboxed, and documented — from path handling and parallelization best practices to security restrictions and injection detection.

### 1.1 Bash Tool Configuration & Best Practices

Operational guidelines for bash command execution covering path handling, command chaining, parallelization, and timing. Emphasizes maintaining working directory state, using && for dependent commands, running independent commands in parallel, and avoiding unnecessary sleep delays through check commands or immediate execution.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

#### 1.1.2 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain current working directory using absolute paths and avoid cd commands unless explicitly requested.

#### 1.1.3 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs Claude not to use newlines to separate bash commands.

#### 1.1.4 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to run independent bash commands as parallel tool calls in a single message for optimal performance.

#### 1.1.5 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, and cat operations, preferring dedicated tools instead for better user experience.

#### 1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs Claude to quote file paths containing spaces with double quotes in bash commands.

#### 1.1.7 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call to ensure sequential execution and failure propagation.

#### 1.1.8 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons only when running commands sequentially but not caring if earlier commands fail.

#### 1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Optionally specify a timeout in milliseconds for bash commands, with configurable maximum and default values.

#### 1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, use ls to verify the parent directory exists and is the correct location.

#### 1.1.11 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between commands, but shell state does not; the environment is initialized from the user's profile.

#### 1.1.12 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep duration short (1-5 seconds) to avoid blocking the user.

#### 1.1.13 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for notification instead.

#### 1.1.14 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; just run them.

#### 1.1.15 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like gh run view rather than sleeping when polling external processes.

#### 1.1.16 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Brief note on outputting text directly in bash instead of using echo or printf.

#### 1.1.17 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs making independent tool calls in parallel while sequencing dependent calls to maximize efficiency.

### 1.2 Bash Tool Alternatives (Dedicated File & Search Tools)

Guidance to delegate file operations and content search to specialized tools rather than bash equivalents. Dedicated tools for reading, writing, editing files, searching by name, and searching by content provide superior user experience and transparency compared to cat, echo, sed, find, and grep commands.

#### 1.2.1 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use a dedicated Grep tool for content search instead of grep or rg commands.

#### 1.2.2 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs Claude to use a dedicated Edit tool for file editing instead of sed or awk commands.

#### 1.2.3 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use a dedicated Glob tool for file search instead of find or ls commands.

#### 1.2.4 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs Claude to use a dedicated Read tool for file reading instead of cat, head, or tail commands.

#### 1.2.5 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use a dedicated Write tool for file writing instead of echo or cat commands.

#### 1.2.6 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in dedicated tools provide better user experience and transparency than Bash equivalents.

### 1.3 Bash Sandbox Security & Restrictions

Mandatory sandbox enforcement for all bash commands with diagnostic protocols for restriction failures. Covers sandbox activation by default, error detection patterns (access denied, network failures, socket errors), automatic retry without sandbox, and restrictions on exposing sensitive paths like credentials and shell configuration files.

#### 1.3.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to work with the user to adjust sandbox settings if a command fails due to sandbox restrictions.

#### 1.3.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to default to running commands within the sandbox and only bypass when explicitly requested.

#### 1.3.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.3.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that identify sandbox-caused command failures.

#### 1.3.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.3.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies operation not permitted errors for file and network operations as evidence of sandbox restrictions.

#### 1.3.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions.

#### 1.3.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and mention the /sandbox command for managing restrictions.

#### 1.3.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition for identifying sandbox-caused failures: when a command fails with evidence of sandbox restrictions, distinguishing from other failure causes.

#### 1.3.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All bash commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.3.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.3.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

#### 1.3.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; default to sandbox mode for future commands even after running one with dangerouslyDisableSandbox.

#### 1.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header for how to respond when seeing sandbox-caused failures.

#### 1.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true on sandbox failure without asking the user.

#### 1.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly.

#### 1.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling sandbox will prompt the user for permission.

### 1.4 PowerShell Tool & Windows Compatibility

PowerShell command execution with Windows-specific guidance and performance optimization. Covers cmdlet syntax, stderr handling quirks in PowerShell 5.1, and strategies for long-running tasks—preferring background execution and polling over sleep loops.

#### 1.4.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with timeout and output limits, emphasizing use of specialized tools for file operations and providing syntax guidance for cmdlets, variables, pipes, and interactive command avoidance.

#### 1.4.2 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Provides Windows PowerShell 5.1 compatibility guidance, documenting missing operators, stderr handling quirks, and encoding defaults.

#### 1.4.3 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Discourages unnecessary `Start-Sleep` commands in PowerShell; recommends using `run_in_background` for long-running tasks, polling external processes with check commands, and keeping sleep durations short.

#### 1.4.4 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Do not retry failing commands in a sleep loop — diagnose the root cause.

### 1.5 Bash Command Documentation & Safety Agents

Safety and documentation infrastructure for bash execution that detects injection attacks, generates command descriptions, and verifies conditional stop criteria through transcript analysis.

#### 1.5.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or obscure-flag commands.

#### 1.5.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attacks in bash commands to enforce safety policies and determine when user confirmation is needed.

#### 1.5.3 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks by reading conversation transcripts and judging whether user-provided conditions are satisfied, returning JSON with evidence or missing details.

#### 1.5.4 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and confirming whether an agent completed its assigned plan.

---

## 2. Multi-Agent Coordination and Planning

Frameworks for decomposing complex work across multiple agents — including planning modes, subagent delegation, swarm coordination, task tracking, and specialized worker/coordinator roles.

### 2.1 Planning and Execution Workflows

Structured approaches to separating design from implementation, including iterative planning sessions, user approval gates, and autonomous execution modes.

#### 2.1.1 Planning Mode & Implementation Planning

Multi-phase planning framework that separates design from execution for non-trivial tasks. Enables codebase exploration, architectural design, and user approval before implementation through structured workflows including iterative pair-planning, parallel multi-agent exploration, and verification checkpoints. Supports local and remote planning sessions with plan persistence.

##### 2.1.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Proactively enter plan mode for non-trivial implementation tasks to explore the codebase and design an approach for user approval before writing code. Use for new features, multiple valid approaches, architectural decisions, or multi-file changes.

##### 2.1.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning by reading the plan file and presenting it for user approval. Use only for implementation tasks requiring code changes, not for research or exploration.

##### 2.1.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow: initial exploration with parallel subagents, design phase with planning agents, review, optional phase four, and plan approval. Prevents execution and restricts edits to the plan file only.

##### 2.1.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning where Claude explores code, updates the plan file incrementally, and asks the user clarifying questions in a loop until the plan is complete and ready for approval.

##### 2.1.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents that restricts execution and non-readonly operations while allowing plan file edits and user clarification questions.

##### 2.1.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after a previous exit, requiring evaluation of the existing plan against the new request and appropriate handling (overwrite or modify).

##### 2.1.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has ended and execution capabilities are now available.

##### 2.1.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and prompts Claude to continue work on it if relevant.

##### 2.1.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly after implementation.

##### 2.1.1.10 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes a concise implementation plan listing file modifications and a verification command, with a 40-line hard limit.

##### 2.1.1.11 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore the codebase, produce diagram-rich plans via ExitPlanMode, and implement with pull requests upon approval, with teleportation support for local continuation.

##### 2.1.1.12 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Configures remote planning to explore the codebase, produce implementation plans via ExitPlanMode, and handle approval, rejection, or teleportation back to the user's local terminal.

##### 2.1.1.13 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Activates an advanced planning mode using parallel multi-agent exploration and critique to generate exceptionally detailed implementation plans, with specific handling for approval, rejection, and error flows.

##### 2.1.1.14 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases and designs implementation plans by identifying patterns, tracing code paths, and detailing step-by-step strategies.

#### 2.1.2 Autonomous & Auto Mode Execution

Enables continuous autonomous work execution with safety guardrails, allowing Claude to advance established tasks like PR maintenance and CI fixes while respecting destructive-action boundaries and requiring explicit authorization for new initiatives.

##### 2.1.2.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous execution where Claude implements work immediately with minimal interruptions, makes reasonable assumptions, and avoids destructive or data-exfiltration actions without explicit user consent.

##### 2.1.2.2 [Autonomous loop check (System Prompt)](system-prompts/system-prompt-autonomous-loop-check.md)

Guides timer-based autonomous invocations to advance established work—finishing PRs, addressing review comments, fixing CI failures—while avoiding new initiatives and irreversible changes without clear authorization. Emphasizes stewardship over invention and provides escalating idle-check protocols.

##### 2.1.2.3 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability to ensure the LLM classifier can correctly auto-approve or block tool calls.

#### 2.1.3 Worktree & Branch Isolation

Provides isolated development environments through git worktrees for parallel work execution, enabling large-scale codebase changes to be decomposed and processed independently without affecting the main session.

##### 2.1.3.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it only when explicitly instructed by the user or project instructions. Creates a new branch in .claude/worktrees/ or delegates to VCS-agnostic hooks.

##### 2.1.3.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exit a worktree session created by EnterWorktree and return to the original directory. Choose to keep or remove the worktree; optionally discard uncommitted changes when removing.

##### 2.1.3.3 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into independent units, determining e2e test recipes, and spawning background worker agents in worktrees.

### 2.2 Subagent and Swarm Patterns

Patterns for spawning, coordinating, and shutting down multiple agents working in parallel on shared or decomposed tasks.

#### 2.2.1 Subagent Delegation & Multi-Agent Coordination

Patterns and guidance for spawning focused subagents to parallelize independent work, isolate tasks, and protect context windows. Emphasizes writing self-contained prompts with full context and specific directives rather than synthesis responsibilities, with structured coordination between parent and child agents.

##### 2.2.1.1 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on deploying subagents for parallelizing independent queries and protecting context windows, while avoiding redundant work duplication.

##### 2.2.1.2 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts by briefing agents with full context, explaining goals and constraints, and avoiding delegation of synthesis work. Emphasizes providing specific details like file paths rather than vague instructions.

##### 2.2.1.3 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Demonstrates how coordinator agents delegate tasks to subagents, handle waiting states, and report results with example patterns for audits and independent reviews.

##### 2.2.1.4 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Provides example patterns for writing self-contained, well-structured prompts when delegating tasks to subagents with clear goals and success criteria.

##### 2.2.1.5 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines fork criteria (intermediate output not needed again), prohibits reading fork output mid-flight or fabricating results, and requires specific directive-style fork prompts that inherit context.

##### 2.2.1.6 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance for spawning and managing subagents, including parallel execution, background tasks, resumption via messaging, worktree isolation, and verification practices.

##### 2.2.1.7 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

Forked worker sub-agent that executes a single directive from the parent agent and reports back concisely without spawning further sub-agents or asking follow-up questions.

#### 2.2.2 Team & Swarm Agent Coordination

Infrastructure for organizing multiple agents into persistent teams with shared task lists, inter-agent messaging, and coordinated shutdown. Enables swarms to work in parallel on complex projects by claiming tasks, reporting status, and communicating progress across team members.

##### 2.2.2.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity and role within a team, providing team configuration paths, task list location, and messaging protocols for teammate coordination.

##### 2.2.2.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully and clean up before providing a final response to the user.

##### 2.2.2.3 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool for communication with teammates, with broadcasts to all team members using `to: "*"`.

##### 2.2.2.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables inter-agent communication in teams with message routing, legacy protocol responses for shutdown and plan approval requests, and TaskUpdate for status reporting.

##### 2.2.2.5 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Coordinates multi-agent teams with task lists, teammate spawning, message delivery, and idle state management for parallel work on complex projects.

##### 2.2.2.6 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all teammates to be terminated first.

##### 2.2.2.7 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Guides teammates in finding and claiming available tasks from shared task lists, preferring lowest ID first and respecting blocking dependencies.

#### 2.2.3 Worker & Coordinator Agent Patterns

Specialized agent roles that decompose complex work into coordinated steps: workers execute implementation workflows with testing and version control checkpoints, while coordinators and advisors provide guidance and oversight through conversation history review and decision support.

##### 2.2.3.1 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for implementing changes: simplify code using a skill tool, run unit tests, execute end-to-end tests, commit and push with PR creation, and report the PR URL for coordinator tracking.

##### 2.2.3.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose agent for researching complex questions, searching code, and executing multi-step tasks across codebases with concise reporting to the caller.

##### 2.2.3.3 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the Advisor tool, which forwards the entire conversation history to a stronger reviewer model for guidance before substantive work and when stuck or declaring completion.

### 2.3 Task Tracking and Agent Invocation

Systems for breaking work into tracked steps, invoking specific agents with context, and handling lightweight side queries.

#### 2.3.1 Task Management & Progress Tracking

Structured task tracking systems that break down complex work into granular steps with explicit state transitions (pending, in-progress, completed). Enables transparent progress monitoring and demonstrates thoroughness by maintaining dual descriptions of each task.

##### 2.3.1.1 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite for breaking down work and tracking progress, marking tasks complete individually rather than in batches.

##### 2.3.1.2 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists with pending, in_progress, and completed states, requiring both imperative and active-form descriptions for each task.

##### 2.3.1.3 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for complex multi-step work with subject, description, and optional activeForm fields to track progress and demonstrate thoroughness.

##### 2.3.1.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when working on trackable tasks.

##### 2.3.1.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for tracking progress on tasks when relevant.

#### 2.3.2 Agent Invocation & Side Queries

Mechanisms for invoking specific agents and handling lightweight side questions. Agent mentions trigger proper context passing to the target agent, while side queries are answered directly as one-off responses without tool access, allowing the main agent to continue independently.

##### 2.3.2.1 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and instructs proper invocation with required context.

##### 2.3.2.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude to answer a side question directly as a lightweight separate agent without tools, clarifying that the main agent continues independently and this is a one-off response with no follow-up turns.

---

## 3. Claude API and SDK Documentation

Reference documentation and implementation guides for the Claude API, managed agents API, and all major SDK features across multiple programming languages.

### 3.1 Core API and SDK Reference

Complete API reference covering client initialization, vision, streaming, tool use, prompt caching, and the live model catalog across eight languages.

#### 3.1.1 Claude API Reference Documentation

Complete SDK and HTTP API reference across eight programming languages and raw cURL, covering client initialization, vision, streaming, tool use, prompt caching, extended thinking, and structured outputs. Includes live model catalog with capabilities and pricing.

##### 3.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering client initialization, basic requests, vision, prompt caching with automatic and manual control, extended thinking, error handling, multi-turn conversations, compaction for long contexts, and cost optimization strategies.

##### 3.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering client initialization, basic requests, vision, prompt caching with automatic and manual control, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

##### 3.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, streaming, tool use via BetaToolRunner with automatic schema generation, manual loops, thinking, prompt caching, server-side tools, PDF input, Files API, and context editing.

##### 3.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking, tool use with annotated classes and BetaToolRunner, memory tool, effort parameter, prompt caching, structured output, PDF input, server-side tools, and Files API.

##### 3.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including client initialization, basic requests, streaming, tool use with beta tool runner using annotated classes, and prompt caching with TTL support.

##### 3.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including client initialization for Anthropic, Bedrock, Vertex AI, and Foundry, basic requests, streaming, tool use with BetaRunnableTool, extended thinking, prompt caching, structured outputs, and server-side tools.

##### 3.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use with manual JSON schema, prompt caching, structured output, PDF input, server-side tools, Files API, and context editing with beta features.

##### 3.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming SSE, tool use loops, prompt caching, extended thinking, and required headers for authentication and versioning.

##### 3.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact model IDs, context windows, max output tokens, and pricing; includes programmatic model discovery via Models API for live capability data.

#### 3.1.2 API Feature References

Language-specific reference documentation for core API capabilities including real-time streaming, tool use with structured outputs, file handling up to 500 MB, asynchronous batch processing at reduced cost, prompt caching optimization patterns, and HTTP error handling with typed exceptions.

##### 3.1.2.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference including sync/async streaming and handling different content types like text, thinking blocks, and tool use.

##### 3.1.2.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming and handling different content types like text, thinking blocks, and tool use.

##### 3.1.2.3 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use with the Claude API including tool definitions, tool choice, best practices, and server-side tools like code execution and web search.

##### 3.1.2.4 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner, manual agentic loop, code execution, and structured outputs with Pydantic models.

##### 3.1.2.5 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference including tool runner with Zod schemas, manual agentic loop, code execution, and structured outputs.

##### 3.1.2.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files up to 500 MB, using them in messages via file_id, managing files (list, retrieve, delete, download), with end-to-end example of reusing files across multiple queries.

##### 3.1.2.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages via file_id, and managing files (list, delete, download) with 500 MB file size limit and 100 GB organization storage.

##### 3.1.2.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference including batch creation, status polling, and result retrieval at 50% cost for asynchronous processing.

##### 3.1.2.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Document on how to design prompt-building code for effective caching, including placement patterns and anti-patterns that silently invalidate the cache.

##### 3.1.2.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for HTTP error codes returned by the Claude API with common causes, handling strategies, and SDK exception classes for proper error handling.

### 3.2 Managed Agents and Application Design

Reference and guidance for building managed agent systems, including session lifecycle, event streaming, tool integration, and architectural patterns.

#### 3.2.1 Managed Agents API Documentation

Comprehensive reference for building and operating managed agents through the Managed Agents API, covering agent and session lifecycle, environments, event streaming, tool integration including MCP servers, credential management, and client-side patterns. Includes SDK implementations for Python, TypeScript, and cURL.

##### 3.2.1.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Provides the agent with a comprehensive overview of the Managed Agents API architecture, mandatory agent-then-session flow, beta headers, documentation reading guide, and common pitfalls.

##### 3.2.1.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Reference documentation for the Managed Agents API covering core concepts (Agents, Sessions, Environments, Containers), lifecycle, versioning, endpoints, and usage patterns.

##### 3.2.1.3 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive reference for Managed Agents API endpoints, SDK methods, request/response schemas, error handling, and rate limits across all resources.

##### 3.2.1.4 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference documentation covering Managed Agents environments, file resources, GitHub repository mounting, and the Files API with SDK examples.

##### 3.2.1.5 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Reference guide for sending and receiving events on managed agent sessions, including streaming, polling, reconnection, message queuing, interrupts, and event payload details.

##### 3.2.1.6 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference documentation covering the Managed Agents SDK's tool types (agent toolset, MCP, custom), permission policies, vault credential management, and skills API for building specialized agents.

##### 3.2.1.7 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Reference guide of common client-side patterns for driving Managed Agent sessions, including stream reconnection, idle-break gating, tool confirmations, interrupts, and custom tools.

##### 3.2.1.8 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Reference guide for using the Anthropic Python SDK to create and manage agents, sessions, environments, streaming, custom tools, files, and MCP servers.

##### 3.2.1.9 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

Reference guide for using the Anthropic TypeScript SDK to create and manage agents, sessions, environments, streaming, custom tools, file uploads, and MCP server integration.

##### 3.2.1.10 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

Provides cURL and raw HTTP request examples for the Managed Agents API including environment, agent, and session lifecycle operations.

##### 3.2.1.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API, Managed Agents, and Agent SDK documentation from official sources when cached content may be outdated.

#### 3.2.2 Building LLM Applications & Agent Design

Comprehensive guidance for designing and implementing Claude-powered systems, covering SDK selection, agent architecture patterns, tool composition strategies, context and cache management, model migration paths, and interactive onboarding flows for managed agents.

##### 3.2.2.1 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Guides Claude in building LLM-powered applications using the Anthropic SDK, covering language detection, API surface selection, model defaults, thinking/effort configuration, and documentation reading.

##### 3.2.2.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation and links to relevant documentation sections.

##### 3.2.2.3 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide covering decision heuristics for building agents on the Claude API, including tool surface design, context management, caching strategies, and composing tool calls.

##### 3.2.2.4 [Model migration guide (Skill)](system-prompts/skill-model-migration-guide.md)

Comprehensive guide for migrating code to newer Claude models, covering breaking changes, deprecated parameters, per-SDK syntax, prompt-behavior shifts, and migration checklists for Opus 4.6, Sonnet 4.6, and Opus 4.7.

##### 3.2.2.5 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, the Claude Agent SDK, and the Claude API by fetching official documentation and providing actionable guidance with code examples.

##### 3.2.2.6 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview script that walks users through configuring a Managed Agent from scratch—selecting tools, skills, files, environment settings—and emits setup and runtime code.

---

## 4. Developer Tools and IDE Integration

Tools and integrations that connect Claude to the development environment — file system access, browser automation, web fetching, LSP code intelligence, notebooks, and IDE state tracking.

### 4.1 File, Search, and Code Navigation

Read, write, edit, and search files; navigate codebases with LSP symbol lookup, reference tracking, and call hierarchies.

#### 4.1.1 File System Tools

Read, write, edit, and search files across the filesystem with support for multiple formats including images, PDFs, and code. Tools enable exact string replacements, regex-based pattern matching, and rapid codebase exploration without modification.

##### 4.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the filesystem with support for images, PDFs (with page ranges), Jupyter notebooks, and screenshots, requiring absolute paths and defaulting to a line limit.

##### 4.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the filesystem with overwrite capability, preferring Edit for modifications and avoiding creation of documentation unless explicitly requested.

##### 4.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read tool output. Prefer editing existing files over creating new ones; use replace_all for renaming variables across files.

##### 4.1.1.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Describes a ripgrep-based search tool with regex support, file filtering via glob or type parameters, and multiple output modes for finding content across codebases.

##### 4.1.1.5 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only codebase exploration agent specializing in rapid file discovery via glob patterns, code search with regex, and analysis without modifying files.

#### 4.1.2 LSP & Code Intelligence Tools

Language Server Protocol operations enabling code navigation and analysis. Provides symbol lookup, reference tracking, hover documentation, call hierarchies, and implementation discovery across workspaces.

##### 4.1.2.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Documents Language Server Protocol operations for code intelligence including symbol navigation, references, hover information, call hierarchies, and implementations across workspaces.

### 4.2 Browser, Web, and Notebook Automation

Automate Chrome interactions, fetch and analyze web content, and manipulate Jupyter notebooks or execute scripts via REPL.

#### 4.2.1 Browser & Computer Automation

Automate Chrome browser interactions through mouse, keyboard, and screenshot-based UI control. Provides multi-step interaction recording, console debugging, tab state awareness, and modal dialog handling for complex web automation workflows.

##### 4.2.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Use mouse and keyboard to interact with a Chrome web browser and take screenshots. Consult screenshots before clicking to determine element coordinates, and ensure cursor placement is centered on target elements.

##### 4.2.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines mouse and keyboard actions for browser automation including clicks, typing, scrolling, zooming, and hover interactions.

##### 4.2.1.3 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools including tool selection tiers, app access tiers, link safety, and financial action restrictions.

##### 4.2.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use by calling `select:mcp__claude-in-chrome__<tool_name>` first, then invoking the tool.

##### 4.2.1.5 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive browser automation guidance: record multi-step interactions with GIF, filter console logs with regex patterns, avoid triggering modal dialogs, stay focused on task scope, and always call `tabs_context_mcp` at session start to understand current browser state.

#### 4.2.2 Web Fetch & Search Tools

Retrieve and analyze current web content through fetching and searching, with HTML-to-markdown conversion, caching, source citation enforcement, and domain filtering. Includes summarization with quote limits and license compliance for untrusted sources.

##### 4.2.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a fast model, including redirect handling and 15-minute caching.

##### 4.2.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff with mandatory source citation in responses, supporting domain filtering and requiring current year in queries.

##### 4.2.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose WebFetch output for the main model, enforcing 125-character quote limits for untrusted domains and paraphrasing requirements while respecting open-source licenses.

#### 4.2.3 Jupyter Notebook & REPL Tools

Programmatic interfaces for notebook manipulation and scripting. NotebookEdit modifies Jupyter cells directly, while REPL provides JavaScript-based composition of tool calls with async operations, looping, and batching to minimize API overhead.

##### 4.2.3.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Enables editing, inserting, and deleting cells in Jupyter notebooks with absolute path requirements and 0-indexed cell numbering.

##### 4.2.3.2 [REPL (Tool Description)](system-prompts/tool-description-repl.md)

JavaScript programming interface for composing tool calls as async functions with looping, branching, and parallel operations, supporting all Claude Code tools and MCP integrations.

##### 4.2.3.3 [REPL tool usage and scripting conventions (System Prompt)](system-prompts/system-prompt-repl-tool-usage-and-scripting-conventions.md)

Instructs dense JavaScript scripting in REPL with shorthands for shell, file reads, and code search, batching operations to minimize calls and using a sealed VM context without Node globals.

### 4.3 IDE State and CI/CD Integration

Real-time IDE file state notifications, GitHub Actions workflow templates, and git version control operations.

#### 4.3.1 IDE Integration & File State Notifications

Real-time notifications of user IDE interactions and file state changes. Tracks file opens, line selections, external modifications, and diagnostic updates to keep Claude aware of context shifts and provide relevant code snippets. Handles truncation and offset boundary conditions transparently.

##### 4.3.1.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 4.3.1.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific lines selected by the user in the IDE with truncated content preview, noting potential relevance to the current task.

##### 4.3.1.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides relevant changes with line numbers for incorporation into ongoing work.

##### 4.3.1.4 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 4.3.1.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line limit and directs use of the Read tool to access additional content if needed.

##### 4.3.1.6 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that the requested file read offset exceeds the file's actual length and provides the total line count.

##### 4.3.1.7 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues in the codebase.

#### 4.3.2 GitHub Integration & CI/CD

Automation templates for integrating Claude Code into GitHub workflows via @claude mentions, including configurable Actions workflows, app installation guidance, security considerations, and tool configuration for CI/CD pipelines.

##### 4.3.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code via @claude mentions in issues, PRs, and comments, with configurable permissions, optional custom prompts, and claude_args for behavior customization.

##### 4.3.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining what Claude Code is, how the workflow operates, security considerations, and tool configuration options.

#### 4.3.3 Git Workflow & Version Control Operations

Structured approach to git operations emphasizing safety and transparency. Covers commit creation with hook preservation, pull request workflows via gh CLI, branch naming conventions, and avoidance of destructive operations unless necessary. Includes automated agents for quick commits and PR creation with pre-populated context.

##### 4.3.3.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to avoid destructive git operations like reset --hard and push --force unless they are the best approach.

##### 4.3.3.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, parallel command execution, and PR formatting with gh CLI. Emphasizes only committing when explicitly requested, avoiding destructive operations, and creating new commits rather than amending.

##### 4.3.3.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude to never skip git hooks or bypass signing unless explicitly requested by the user.

##### 4.3.3.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to create new commits rather than amending existing ones.

##### 4.3.3.5 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context by analyzing staged changes, drafting a message following repository style, and enforcing safety protocols.

##### 4.3.3.6 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request with pre-populated context by analyzing all changes, creating a branch, committing, pushing, and opening a PR with summary and test plan.

##### 4.3.3.7 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (sentence case, max 6 words) and git branch names (claude/ prefix, lowercase, max 4 words) from session descriptions as JSON output.

##### 4.3.3.8 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Marks git status as a static snapshot at conversation start that does not update during the session.

### 4.4 MCP Tool Discovery and Hook System

Event-driven hooks that intercept execution lifecycle points, plus MCP resource and tool schema discovery for dynamic tool invocation.

#### 4.4.1 Hook System & Lifecycle Events

Event-driven command and prompt system that intercepts Claude Code execution at lifecycle points (tool use, completion, errors) to inject custom logic, control flow, and decision-making. Hooks receive JSON input, execute commands or agents, and return structured responses that modify behavior or halt execution.

##### 4.4.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Documents Claude Code hooks system: event-driven commands, prompts, and agents triggered at lifecycle points (PreToolUse, PostToolUse, Stop, etc.) with JSON input/output for control flow, including auto-formatting, logging, and permission decisions.

##### 4.4.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context information from a hook execution.

##### 4.4.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 4.4.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook has stopped continuation with an accompanying message.

##### 4.4.1.5 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for messages indicating a hook has stopped continuation.

##### 4.4.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook with its output content.

##### 4.4.1.7 [Stop hook blocking error (System Reminder)](system-prompts/system-reminder-stop-hook-blocking-error.md)

Reports an error from a blocking stop hook command.

##### 4.4.1.8 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Guides Claude through a 7-step process to construct, test, and verify hooks for Claude Code, ensuring they work correctly in the user's project environment before writing to settings.json.

#### 4.4.2 MCP Resource & Tool Discovery

Retrieves tool schemas and accesses MCP resources. Tool discovery matches keywords against deferred tool lists and returns JSONSchema definitions for invocation, while resource access handles cases where content is unavailable or non-displayable.

##### 4.4.2.1 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by name or keyword query, returning JSONSchema definitions that enable tool invocation after matching against a deferred tool list.

##### 4.4.2.2 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 4.4.2.3 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

---

## 5. Memory, Session State, and Context Management

Systems for persisting knowledge across sessions, compressing conversation history, monitoring resource usage, and managing session metadata and configuration.

### 5.1 Memory Management & Persistence

Persistent knowledge systems that accumulate user preferences, domain discoveries, and team learnings across sessions. Includes validation mechanisms to detect stale records, consolidation during maintenance phases, and selective retrieval to attach relevant context without overwhelming the conversation.

#### 5.1.1 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about the user's role, goals, knowledge, and preferences across sessions to enable personalized collaboration.

#### 5.1.2 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Records user guidance on work approaches from both successes and failures, checking for contradictions with team memories before saving private feedback.

#### 5.1.3 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Captures user guidance on work approaches from both successes and failures, with explicit instructions to detect and note contradictions between private and team feedback before saving.

#### 5.1.4 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs verification of memory records against current file state, deleting stale memories that conflict with observed reality and trusting present observations over outdated records.

#### 5.1.5 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines memory field for capturing user role, goals, and preferences to enable personalized assistance while avoiding negative judgments or irrelevant details.

#### 5.1.6 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including memory update instructions in agent system prompts so agents can build institutional knowledge across conversations by recording domain-specific discoveries.

#### 5.1.7 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Guides memory consolidation during dream phases: deduplicate within team memories, merge near-duplicates conservatively, avoid deleting team memories unless clearly contradicted, and never promote personal memories to team without explicit user action.

#### 5.1.8 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs a multi-phase memory consolidation pass by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index.

#### 5.1.9 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs a memory pruning pass by deleting stale or invalidated memory files and collapsing duplicates while preserving team-shared memories.

#### 5.1.10 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and extracts only facts relevant to each query, returning JSON with relevant facts and cited filenames to help the coding assistant.

#### 5.1.11 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to attach to Claude Code based on query content, avoiding false matches on keywords alone.

#### 5.1.12 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file at a specified path with optional type description.

#### 5.1.13 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file from an attachment object.

#### 5.1.14 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory `summary.md` files documenting current state, task specification, files, workflow, errors, and learnings.

#### 5.1.15 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations by editing structured sections with detailed, info-dense content while preserving headers and template descriptions.

### 5.2 Conversation Summarization and History

Compresses conversation history into resumable summaries and surfaces past sessions through retrieval and intent prediction.

#### 5.2.1 Conversation Summarization & Context Compaction

Techniques for compressing conversation history into structured summaries that preserve intent, technical decisions, file modifications, and pending work. Enables seamless continuation across context windows by capturing essential state without losing critical details.

##### 5.2.1.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized by intent, technical concepts, files modified, errors encountered, and pending tasks to preserve context for continuing development work.

##### 5.2.1.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes the recent portion of a conversation by analyzing intent, technical concepts, files modified, errors, and pending tasks while preserving earlier retained context.

##### 5.2.1.3 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured summary format for partial conversation compaction, requiring analysis of requests, technical concepts, files, errors, and pending tasks to enable seamless continuation.

##### 5.2.1.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Defines structure for resumable context summaries: task overview, current state, discoveries, next steps, and context to preserve. Enables efficient continuation in future context windows.

##### 5.2.1.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs use of the Read tool if full access is needed.

#### 5.2.2 Session Search & History

Retrieval and prediction mechanisms that surface past conversations and anticipate user intent, enabling efficient navigation of session history and contextually relevant follow-up suggestions.

##### 5.2.2.1 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent that searches past Claude Code conversation sessions by scanning .jsonl transcript files using Grep and Read tools, returning matching session IDs ordered by relevance.

##### 5.2.2.2 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next based on recent conversation context, suggesting specific follow-up actions without evaluative or Claude-voice language.

### 5.3 Session Metadata and Configuration

Auto-generates session names, manages global and project-level settings, monitors token budgets, and customizes terminal display.

#### 5.3.1 Session Naming & Metadata Generation

Automated generation of descriptive session identifiers from conversation context, producing human-readable titles and kebab-case names that help users navigate and organize their work sessions.

##### 5.3.1.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise sentence-case session titles (3-7 words) that capture the main topic or goal so users recognize sessions in a list.

##### 5.3.1.2 [/rename auto-generate session name (Agent Prompt)](system-prompts/agent-prompt-rename-auto-generate-session-name.md)

Auto-generates a short kebab-case session name (2-4 words) from conversation context to capture the main topic.

#### 5.3.2 Configuration & Settings Management

Persistent and runtime configuration of Claude Code through global and project-level settings files, with support for feature toggling and explicit context specification in minimal execution modes.

##### 5.3.2.1 [Config (Tool Description)](system-prompts/tool-description-config.md)

Get or set Claude Code configuration settings stored globally in ~/.claude.json or per-project in settings.json. Supports theme, editor mode, model selection, and permission settings.

##### 5.3.2.2 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Minimal mode skips hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags for authentication and configuration.

#### 5.3.3 Session & Resource Monitoring

Real-time visibility into session state and resource consumption: token usage and USD budget tracking show remaining capacity, session continuation alerts indicate cross-machine context shifts and working directory changes, and skill invocation lists track active guidelines.

##### 5.3.3.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 5.3.3.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including used, total, and remaining amounts.

##### 5.3.3.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and the working directory has changed.

##### 5.3.3.4 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the session and instructs Claude to continue following their guidelines.

#### 5.3.4 Scratchpad & Session Isolation

Isolates temporary working files to a session-specific scratchpad directory, preventing pollution of system temp directories and the user's project workspace.

##### 5.3.4.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Designates a session-specific scratchpad directory for all temporary files instead of system temp directories, isolated from the user's project.

#### 5.3.5 Status Line & Terminal Display

Customizes Claude Code's terminal status display by parsing shell configurations and injecting dynamic session context—model, workspace, and token metrics—into the status line.

##### 5.3.5.1 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell configs, converting escape sequences to shell commands, and updating settings.json with custom statusLine command receiving JSON context about session, model, workspace, and token usage.

---

## 6. Code Quality, Review, and Safe Execution

Practices and tools for maintaining code quality, conducting security-aware reviews, verifying correctness through testing, and executing actions with appropriate risk management.

### 6.1 Code Verification & Testing

Systematic validation of code changes through runtime observation and adversarial testing. Builds and executes applications to verify behavior at the user-facing surface, runs automated tests and linters, and probes for boundary conditions and concurrency issues. Issues structured verdicts with documented evidence.

#### 6.1.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow that validates code changes by building and running the app, driving it to where changed code executes, capturing observations, and reporting verdicts with findings.

#### 6.1.2 [Verify skill (runtime-verification) [Skill]](system-prompts/skill-verify-skill-runtime-verification.md)

Alias of the Verify skill registered under /runtime-verification that validates code changes by running the app and observing behavior at the user-facing surface.

#### 6.1.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying a CLI change by building, running with test arguments, and comparing output to expected behavior.

#### 6.1.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying a server/API change by starting the server, sending requests with curl, and inspecting responses.

#### 6.1.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Prompt for creating verifier skills for the Verify agent to automatically verify code changes through Playwright, Tmux, and HTTP testing.

#### 6.1.6 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial testing subagent that breaks implementations by running builds, tests, linters, and adversarial probes (boundary values, concurrency, idempotency, orphan ops), issuing PASS/FAIL/PARTIAL verdicts with documented evidence.

### 6.2 Code Review & Security Analysis

Multi-layered code inspection combining general quality review with focused security assessment. Evaluates PR changes for correctness, performance, and test coverage while identifying exploitable vulnerabilities and assessing autonomous agent actions against threat models. Balances security rigor with minimal false positives.

#### 6.2.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Expert code reviewer that fetches PR details and diffs using gh CLI, then analyzes code quality, style, correctness, performance, test coverage, and security implications with clear sections and bullet points.

#### 6.2.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Senior security engineer conducting focused security review of PR changes to identify high-confidence exploitable vulnerabilities in input validation, authentication, crypto, injection, and data exposure with minimal false positives.

#### 6.2.3 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security classifier that evaluates autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with user intent as the final signal and high evidence bar for authorization.

#### 6.2.4 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules (git destructive, code execution, credential leakage, data exfiltration, etc.), and allow exceptions that govern which tool actions autonomous agents may perform.

#### 6.2.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, CTF challenges, and defensive security while refusing requests for destructive attacks, supply chain compromise, or evasion techniques. Dual-use tools require clear authorization context.

#### 6.2.6 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Emphasizes avoiding OWASP top 10 vulnerabilities including command injection, XSS, and SQL injection; prioritize secure code.

### 6.3 Code Quality & Refactoring Guidelines

Principles for maintaining clean, maintainable code: delete unused code entirely rather than preserving it with shims or comments, validate only at system boundaries and trust internal guarantees, interpret ambiguous requests as software engineering tasks like refactoring or bug fixes, and tackle complex work without declining scope.

#### 6.3.1 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Directs Claude to delete unused code completely rather than adding compatibility shims, renamed variables, or removed-code comments.

#### 6.3.2 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Advises against error handling for impossible scenarios; validate only at system boundaries and trust internal code guarantees.

#### 6.3.3 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames user requests in software engineering context: interpret unclear instructions as code tasks like bug fixes, refactoring, or feature additions rather than generic operations.

#### 6.3.4 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Empowers Claude to tackle complex, time-consuming tasks by deferring to user judgment on scope rather than declining ambitious requests.

#### 6.3.5 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

### 6.4 Safe Action Execution & Risk Management

Framework for executing actions with appropriate caution: freely perform local reversible operations, but confirm before destructive or shared-system changes. When tool execution is denied, attempt reasonable workarounds while refusing malicious bypasses. Investigate unexpected state before deletion and match action scope to user intent.

#### 6.4.1 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes risk-aware action execution: freely take local reversible actions, but confirm before destructive, hard-to-reverse, or shared-system operations. Investigate unexpected state before deleting; match action scope to user request.

#### 6.4.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable workarounds when tool execution is denied, but prohibits malicious bypasses and requires stopping to explain to the user if the capability is essential.

#### 6.4.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Permits Claude to analyze malware behavior and provide reports but strictly prohibits improving or augmenting malicious code.

### 6.5 Communication and Response Standards

Standards for response formatting, conciseness, code references, reasoning calibration, and visual option comparison.

#### 6.5.1 Communication Style & Response Formatting

Standards for presenting information: deliver brief updates at decision points, write concise end-of-turn summaries, match response depth to task complexity, and minimize inline comments in code. Include file_path:line_number references for code navigation. Use extended thinking for complex tasks and minimal reasoning for simple requests. Support visual option comparison through side-by-side preview rendering.

##### 6.5.1.1 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs Claude to provide brief user-facing updates at key moments, write concise end-of-turn summaries, match response format to task complexity, and minimize comments and planning documents in code.

##### 6.5.1.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs including file_path:line_number when referencing code to enable easy navigation to source locations.

##### 6.5.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs keeping responses short and concise.

##### 6.5.1.4 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using a preview field, displaying ASCII mockups, code snippets, and diagrams in monospace for visual comparison.

##### 6.5.1.5 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude to follow specific output style guidelines that are currently active.

##### 6.5.1.6 [Thinking frequency tuning (System Reminder)](system-prompts/system-reminder-thinking-frequency-tuning.md)

Instructs Claude to calibrate internal reasoning frequency based on task complexity, using extended thinking for complex tasks and minimal thinking for simple requests.

#### 6.5.2 Learning & Teaching Modes

Interactive pedagogical framework that balances task execution with hands-on learning through guided step-by-step instruction, human collaboration prompts, and targeted educational insights tied to codebase specifics.

##### 6.5.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Activates collaborative learning by requesting human contributions on design decisions and business logic, using TODO(human) markers and Learn by Doing requests to balance task completion with hands-on practice.

##### 6.5.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code writing, highlighting 2-3 key learning points specific to the codebase using a formatted insight block.

##### 6.5.2.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays when users explicitly ask to learn or be taught.

---

## 7. Automation, Scheduling, and Workflow Systems

Infrastructure for recurring task execution, skill capture, codebase onboarding, usage analytics, background monitoring, and agent creation — the operational layer that runs Claude-powered workflows.

### 7.1 Scheduling, Cron & Loop Automation

Recurring task execution framework combining cron scheduling with self-paced loop modes. Supports fixed-interval jobs, dynamic event-driven iteration with fallback heartbeats, and cloud-based remote agent scheduling. Optimizes timing around prompt cache TTL and distributes load across time windows.

#### 7.1.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron-based jobs using standard 5-field cron syntax in the user's local timezone. Avoid :00 and :30 minute marks when possible to distribute load; recurring tasks auto-expire after a configurable number of days.

#### 7.1.2 [ScheduleWakeup (/loop dynamic mode) [Tool Description]](system-prompts/tool-description-schedulewakeup-loop-dynamic-mode.md)

Schedules resumption of self-paced /loop iterations with sentinel support for autonomous loops and guidance on delay timing relative to prompt cache TTL.

#### 7.1.3 [Snooze (delay and reason guidance) [Tool Description]](system-prompts/tool-description-snooze-delay-and-reason-guidance.md)

Schedules /loop dynamic resumption with detailed guidance on choosing delays relative to the 5-minute prompt cache TTL and writing informative reason fields for telemetry.

#### 7.1.4 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into an interval and prompt, converts the interval to a cron expression, schedules a recurring task, and immediately executes the prompt without waiting for the first cron fire.

#### 7.1.5 [/loop slash command (dynamic mode) [Skill]](system-prompts/skill-loop-slash-command-dynamic-mode.md)

Parses user input into an interval and prompt, then either schedules a fixed-interval cron job or enters dynamic self-pacing mode when no interval is specified.

#### 7.1.6 [/loop self-pacing mode (Skill)](system-prompts/skill-loop-self-pacing-mode.md)

Instructs Claude to self-pace a recurring loop by arming event monitors as primary wake signals and scheduling fallback heartbeat delays, handling both event-driven and time-based iteration.

#### 7.1.7 [/loop cloud-first scheduling offer (Skill)](system-prompts/skill-loop-cloud-first-scheduling-offer.md)

Decision tree that offers cloud-based scheduling for long-interval or daily-cadence loops before falling back to local session loops, invoking the schedule skill when cloud is chosen.

#### 7.1.8 [Dynamic pacing loop execution (Skill)](system-prompts/skill-dynamic-pacing-loop-execution.md)

Executes a self-pacing loop by running tasks, arming persistent event monitors as primary wake signals, scheduling fallback heartbeat delays, and handling task notifications between iterations.

#### 7.1.9 [Schedule recurring cron and execute immediately (compact) [Skill]](system-prompts/skill-schedule-recurring-cron-and-execute-immediately-compact.md)

Creates a recurring cron job, confirms the schedule with the user, and immediately executes the parsed prompt without waiting for the first cron fire.

#### 7.1.10 [Schedule recurring cron and run immediately (Skill)](system-prompts/skill-schedule-recurring-cron-and-run-immediately.md)

Converts an interval to a cron expression, schedules a recurring task, confirms to the user, and immediately executes the task without waiting for the first cron fire.

#### 7.1.11 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing cron tasks, creating a new schedule, confirming details to the user, and running an immediate consolidation.

#### 7.1.12 [Loop wakeup not scheduled (System Reminder)](system-prompts/system-reminder-loop-wakeup-not-scheduled.md)

Instructs Claude on handling /loop dynamic mode wakeups that were not scheduled, distinguishing between cases where the prompt field was set versus unset and specifying when to re-issue with the prompt field.

#### 7.1.13 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via Anthropic cloud API, handling creation, updates, listing, and execution of isolated remote sessions with git repos, MCP connectors, and environment configuration.

### 7.2 Skills, Workflows, and Agent Configuration

Captures repeatable workflows as reusable skills and slash commands, and designs custom agents through persona engineering and system prompt optimization.

#### 7.2.1 Skill System & Workflow Automation

Captures repeatable workflows as reusable skills and slash commands, enabling automation of code review, configuration management, and permission analysis while reducing friction through intelligent allowlisting.

##### 7.2.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Invokes specialized skills and slash commands within conversations, requiring exact skill names and blocking other responses until skill execution completes.

##### 7.2.1.2 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable session processes into reusable skills through structured analysis, multi-round user interviews, and SKILL.md generation with clear steps, success criteria, and execution modes.

##### 7.2.1.3 [Simplify (Skill)](system-prompts/skill-simplify.md)

Launches three parallel review agents to identify code reuse opportunities, quality issues, and efficiency problems in changed files, then fixes the findings directly.

##### 7.2.1.4 [Generate permission allowlist from transcripts (Skill)](system-prompts/skill-generate-permission-allowlist-from-transcripts.md)

Analyzes session transcripts to extract frequently used read-only tool patterns and adds them to the project's permission allowlist, reducing permission prompts while maintaining security by filtering out arbitrary code execution patterns.

##### 7.2.1.5 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Modifies Claude Code configuration by updating settings.json files, with guidance on when hooks are required versus memory, merging arrays carefully, and validating changes.

#### 7.2.2 Agent Creation & Configuration

Designs and configures custom AI agents through intent extraction, persona engineering, and system prompt optimization, establishing behavioral standards for agent communication and action documentation.

##### 7.2.2.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces a JSON specification with agent identifier, usage conditions, and operational manual.

##### 7.2.2.2 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word present-tense summaries of agent actions, naming specific files or functions rather than branches or vague descriptions.

##### 7.2.2.3 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral standards for agent threads: use absolute file paths, include only load-bearing code snippets in responses, avoid emojis, and omit colons before tool calls.

### 7.3 Codebase Analysis & Documentation Generation

Intelligent onboarding infrastructure that analyzes codebases to generate CLAUDE.md documentation, team guides, and skill configurations, capturing architecture, development practices, and project conventions for consistent Claude Code usage across teams.

#### 7.3.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files containing common development commands, high-level architecture, and project-specific conventions for future Claude Code instances.

#### 7.3.2 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors a team onboarding guide by analyzing usage data, classifying session types into work categories, and iterating collaboratively to produce ONBOARDING.md.

#### 7.3.3 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow that explores the codebase, interviews the user about practices and preferences, proposes CLAUDE.md content and optional skills/hooks, and sets up GitHub CLI and linting as needed.

#### 7.3.4 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding new teammates to a team's Claude Code setup, walking them through usage stats, setup checklists, MCP servers, skills, and team tips in a warm conversational style.

### 7.4 Usage Analytics and Diagnostics

Extracts structured insights from session data to identify friction points and improvement opportunities, with log-based diagnostics and Slack escalation for failures.

#### 7.4.1 Usage Insights & Analytics

Analyzes Claude Code sessions to extract structured data about user goals, satisfaction signals, and friction points, then synthesizes findings into actionable improvement recommendations and forward-looking workflow opportunities.

##### 7.4.1.1 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts by counting user-requested goals, measuring satisfaction from explicit signals, and identifying specific friction points like misunderstood requests or buggy code.

##### 7.4.1.2 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions from usage data, recommending CLAUDE.md additions, Claude Code features like MCP Servers and Custom Skills, and usage patterns tailored to the user's workflow.

##### 7.4.1.3 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary (what's working, hindrances, quick wins, ambitious workflows) for Claude Code usage reports using aggregated data and coaching tone.

##### 7.4.1.4 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes usage data to identify and categorize friction patterns with 3 categories and 2 examples each, offering constructive guidance for improvement.

##### 7.4.1.5 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future workflows enabled by more capable models: autonomous development, parallel agents, and test-driven iteration with copyable prompts.

##### 7.4.1.6 [/insights report output (Skill)](system-prompts/skill-insights-report-output.md)

Formats and displays the insights usage report results after the user runs the /insights slash command, providing a shareable report URL and summary.

#### 7.4.2 Debugging & Diagnostics

Identifies and resolves session failures through log analysis, process monitoring, and performance inspection, with automated escalation to Slack for visibility into stuck or degraded states.

##### 7.4.2.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Guides Claude through debugging a Claude Code session issue by enabling debug logging, reviewing the session log for errors and warnings, and suggesting concrete fixes or next steps.

##### 7.4.2.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, gathering diagnostic data, and posting findings to Slack if issues are found.

### 7.5 Background Monitoring and Notifications

Streams long-running process events as notifications, gathers user input during execution, and delivers alerts across desktop, mobile, and chat interfaces.

#### 7.5.1 Background Monitoring & User Interaction

Runtime tools for streaming long-running process events as notifications and gathering user input for clarification and decision-making during task execution.

##### 7.5.1.1 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Describes a background monitoring tool that streams stdout events from long-running scripts as chat notifications, with detailed guidance on script quality, output filtering, and failure detection patterns.

##### 7.5.1.2 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying ambiguous instructions, and offering implementation choices during execution, with special restrictions in plan mode.

##### 7.5.1.3 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Documents the optional preview field for displaying visual artifacts like UI mockups and code snippets in single-select question options.

#### 7.5.2 Notification & Communication Tools

Channels for delivering user-visible messages across desktop, mobile, and chat interfaces. Notifications alert users to significant events requiring attention, while messages support rich formatting and attachments. All communication flows through SendUserMessage as the primary channel, with acknowledgments and phase checkpoints delivered in tight, actionable language.

##### 7.5.2.1 [PushNotification (Tool Description)](system-prompts/tool-description-pushnotification.md)

Sends desktop and mobile notifications for significant events requiring user attention, with guidance to avoid routine notifications and keep messages under 200 characters.

##### 7.5.2.2 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends messages to users with markdown support and file attachments, using status labels to distinguish routine replies from proactive notifications.

##### 7.5.2.3 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Establishes SendUserMessage as the primary user-visible channel; always reply through it, acknowledge before long work, and send checkpoints at decision/phase boundaries with tight, actionable language.
