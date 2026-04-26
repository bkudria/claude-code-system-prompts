# Claude Code System Prompts Index

A technical reference for building, deploying, and operating Claude-powered agentic systems — covering everything from low-level execution primitives to multi-agent coordination, persistent state, developer tooling, and production workflow integration.

## Table of Contents

1. [Shell & Command Execution](#1-shell-command-execution)
   1. [Bash Tool Configuration & Best Practices](#11-bash-tool-configuration-best-practices)
      1. [Bash (maintain cwd) [Tool Description]](#111-bash-maintain-cwd-tool-description)
      2. [Bash (no newlines) [Tool Description]](#112-bash-no-newlines-tool-description)
      3. [Bash (overview) [Tool Description]](#113-bash-overview-tool-description)
      4. [Bash (parallel commands) [Tool Description]](#114-bash-parallel-commands-tool-description)
      5. [Bash (prefer dedicated tools) [Tool Description]](#115-bash-prefer-dedicated-tools-tool-description)
      6. [Bash (quote file paths) [Tool Description]](#116-bash-quote-file-paths-tool-description)
      7. [Bash (semicolon usage) [Tool Description]](#117-bash-semicolon-usage-tool-description)
      8. [Bash (sequential commands) [Tool Description]](#118-bash-sequential-commands-tool-description)
      9. [Bash (alternative — communication) [Tool Description]](#119-bash-alternative-—-communication-tool-description)
      10. [Bash (alternative — content search) [Tool Description]](#1110-bash-alternative-—-content-search-tool-description)
      11. [Bash (alternative — edit files) [Tool Description]](#1111-bash-alternative-—-edit-files-tool-description)
      12. [Bash (alternative — file search) [Tool Description]](#1112-bash-alternative-—-file-search-tool-description)
      13. [Bash (alternative — read files) [Tool Description]](#1113-bash-alternative-—-read-files-tool-description)
      14. [Bash (alternative — write files) [Tool Description]](#1114-bash-alternative-—-write-files-tool-description)
      15. [Bash (built-in tools note) [Tool Description]](#1115-bash-built-in-tools-note-tool-description)
      16. [Bash (sleep — keep short) [Tool Description]](#1116-bash-sleep-—-keep-short-tool-description)
      17. [Bash (sleep — no polling background tasks) [Tool Description]](#1117-bash-sleep-—-no-polling-background-tasks-tool-description)
      18. [Bash (sleep — run immediately) [Tool Description]](#1118-bash-sleep-—-run-immediately-tool-description)
      19. [Bash (sleep — use check commands) [Tool Description]](#1119-bash-sleep-—-use-check-commands-tool-description)
      20. [Bash (timeout) [Tool Description]](#1120-bash-timeout-tool-description)
      21. [Bash (verify parent directory) [Tool Description]](#1121-bash-verify-parent-directory-tool-description)
      22. [Bash (working directory) [Tool Description]](#1122-bash-working-directory-tool-description)
   2. [Bash Sandbox Security & Policy](#12-bash-sandbox-security-policy)
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
   3. [PowerShell & Windows Environment](#13-powershell-windows-environment)
      1. [PowerShell edition for 5.1 (System Prompt)](#131-powershell-edition-for-51-system-prompt)
      2. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#132-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
      3. [PowerShell (Tool Description)](#133-powershell-tool-description)
      4. [One of six rules for using sleep command (System Prompt)](#134-one-of-six-rules-for-using-sleep-command-system-prompt)
   4. [REPL & Scripting Interface](#14-repl-scripting-interface)
      1. [REPL (Tool Description)](#141-repl-tool-description)
      2. [REPL tool usage and scripting conventions (System Prompt)](#142-repl-tool-usage-and-scripting-conventions-system-prompt)
2. [Agent Architecture & Orchestration](#2-agent-architecture-orchestration)
   1. [Multi-Agent Coordination](#21-multi-agent-coordination)
      1. [Multi-Agent Coordination & Subagent Management](#211-multi-agent-coordination-subagent-management)
         1. [Agent (usage notes) [Tool Description]](#2111-agent-usage-notes-tool-description)
         2. [Team Coordination (System Reminder)](#2112-team-coordination-system-reminder)
         3. [Team Shutdown (System Reminder)](#2113-team-shutdown-system-reminder)
         4. [Ultraplan mode (System Reminder)](#2114-ultraplan-mode-system-reminder)
         5. [Subagent delegation examples (System Prompt)](#2115-subagent-delegation-examples-system-prompt)
         6. [Subagent prompt-writing examples (System Prompt)](#2116-subagent-prompt-writing-examples-system-prompt)
         7. [Tool usage (subagent guidance) [System Prompt]](#2117-tool-usage-subagent-guidance-system-prompt)
         8. [Writing subagent prompts (System Prompt)](#2118-writing-subagent-prompts-system-prompt)
         9. [Fork usage guidelines (System Prompt)](#2119-fork-usage-guidelines-system-prompt)
         10. [Worker instructions (System Prompt)](#21110-worker-instructions-system-prompt)
         11. [Worker fork (Agent Prompt)](#21111-worker-fork-agent-prompt)
         12. [SendMessageTool (Tool Description)](#21112-sendmessagetool-tool-description)
         13. [SendMessageTool (non-agent-teams) [Tool Description]](#21113-sendmessagetool-non-agent-teams-tool-description)
         14. [TeammateTool (Tool Description)](#21114-teammatetool-tool-description)
         15. [TaskList (teammate workflow) [Tool Description]](#21115-tasklist-teammate-workflow-tool-description)
         16. [TeamDelete (Tool Description)](#21116-teamdelete-tool-description)
         17. [/batch slash command (Agent Prompt)](#21117-batch-slash-command-agent-prompt)
      2. [Background Agent State & Job Management](#212-background-agent-state-job-management)
         1. [Background agent state classifier (Agent Prompt)](#2121-background-agent-state-classifier-agent-prompt)
         2. [Background job behavior (System Prompt)](#2122-background-job-behavior-system-prompt)
         3. [Background session instructions (System Prompt)](#2123-background-session-instructions-system-prompt)
         4. [Background monitor (streaming events) [Tool Description]](#2124-background-monitor-streaming-events-tool-description)
         5. [Autonomous loop check (System Prompt)](#2125-autonomous-loop-check-system-prompt)
         6. [Auto mode (System Prompt)](#2126-auto-mode-system-prompt)
   2. [Planning & Task Workflows](#22-planning-task-workflows)
      1. [Plan Mode Workflows](#221-plan-mode-workflows)
         1. [Plan mode approval tool enforcement (System Reminder)](#2211-plan-mode-approval-tool-enforcement-system-reminder)
         2. [Plan mode is active (5-phase) [System Reminder]](#2212-plan-mode-is-active-5-phase-system-reminder)
         3. [Plan mode is active (iterative) [System Reminder]](#2213-plan-mode-is-active-iterative-system-reminder)
         4. [Plan mode is active (subagent) [System Reminder]](#2214-plan-mode-is-active-subagent-system-reminder)
         5. [Plan mode re-entry (System Reminder)](#2215-plan-mode-re-entry-system-reminder)
         6. [Plan file reference (System Reminder)](#2216-plan-file-reference-system-reminder)
         7. [Exited plan mode (System Reminder)](#2217-exited-plan-mode-system-reminder)
         8. [Phase four of plan mode (System Prompt)](#2218-phase-four-of-plan-mode-system-prompt)
         9. [Remote plan mode (ultraplan) [System Prompt]](#2219-remote-plan-mode-ultraplan-system-prompt)
         10. [Remote planning session (System Prompt)](#22110-remote-planning-session-system-prompt)
         11. [EnterPlanMode (Tool Description)](#22111-enterplanmode-tool-description)
         12. [ExitPlanMode (Tool Description)](#22112-exitplanmode-tool-description)
         13. [Plan mode (enhanced) [Agent Prompt]](#22113-plan-mode-enhanced-agent-prompt)
      2. [Task Tracking & Progress Management](#222-task-tracking-progress-management)
         1. [Task tools reminder (System Reminder)](#2221-task-tools-reminder-system-reminder)
         2. [TodoWrite reminder (System Reminder)](#2222-todowrite-reminder-system-reminder)
         3. [Verify plan reminder (System Reminder)](#2223-verify-plan-reminder-system-reminder)
         4. [Tool usage (task management) [System Prompt]](#2224-tool-usage-task-management-system-prompt)
         5. [TodoWrite (Tool Description)](#2225-todowrite-tool-description)
         6. [TaskCreate (Tool Description)](#2226-taskcreate-tool-description)
         7. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#2227-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   3. [Agent Invocation & Contextual Display](#23-agent-invocation-contextual-display)
      1. [Agent mention (System Reminder)](#231-agent-mention-system-reminder)
      2. [Status line setup (Agent Prompt)](#232-status-line-setup-agent-prompt)
      3. [Prompt Suggestion Generator v2 (Agent Prompt)](#233-prompt-suggestion-generator-v2-agent-prompt)
3. [Memory, Sessions & Agent Identity](#3-memory-sessions-agent-identity)
   1. [Memory System & Persistent Context](#31-memory-system-persistent-context)
      1. [Memory file contents (System Reminder)](#311-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#312-nested-memory-contents-system-reminder)
      3. [Memory instructions (System Prompt)](#313-memory-instructions-system-prompt)
      4. [Memory description of user details (System Prompt)](#314-memory-description-of-user-details-system-prompt)
      5. [Memory description of user feedback (System Prompt)](#315-memory-description-of-user-feedback-system-prompt)
      6. [Memory description of user feedback (with explicit save) [System Prompt]](#316-memory-description-of-user-feedback-with-explicit-save-system-prompt)
      7. [Memory staleness verification (System Prompt)](#317-memory-staleness-verification-system-prompt)
      8. [Description part of memory instructions (System Prompt)](#318-description-part-of-memory-instructions-system-prompt)
      9. [Dream CLAUDE.md memory reconciliation (System Prompt)](#319-dream-claudemd-memory-reconciliation-system-prompt)
      10. [Dream team memory handling (System Prompt)](#3110-dream-team-memory-handling-system-prompt)
      11. [Dream memory consolidation (Agent Prompt)](#3111-dream-memory-consolidation-agent-prompt)
      12. [Dream memory pruning (Agent Prompt)](#3112-dream-memory-pruning-agent-prompt)
      13. [Determine which memory files to attach (Agent Prompt)](#3113-determine-which-memory-files-to-attach-agent-prompt)
      14. [Memory synthesis (Agent Prompt)](#3114-memory-synthesis-agent-prompt)
      15. [/dream memory consolidation (Skill)](#3115-dream-memory-consolidation-skill)
      16. [/dream nightly schedule (Skill)](#3116-dream-nightly-schedule-skill)
      17. [Session memory template (Data)](#3117-session-memory-template-data)
      18. [User profile memory template (Data)](#3118-user-profile-memory-template-data)
   2. [Session Management & Conversation Continuity](#32-session-management-conversation-continuity)
      1. [Session continuation (System Reminder)](#321-session-continuation-system-reminder)
      2. [Context compaction summary (System Prompt)](#322-context-compaction-summary-system-prompt)
      3. [Partial compaction instructions (System Prompt)](#323-partial-compaction-instructions-system-prompt)
      4. [Conversation summarization (Agent Prompt)](#324-conversation-summarization-agent-prompt)
      5. [Recent Message Summarization (Agent Prompt)](#325-recent-message-summarization-agent-prompt)
      6. [Session search (Agent Prompt)](#326-session-search-agent-prompt)
      7. [Coding session title generator (Agent Prompt)](#327-coding-session-title-generator-agent-prompt)
      8. [/rename auto-generate session name (Agent Prompt)](#328-rename-auto-generate-session-name-agent-prompt)
      9. [Compact file reference (System Reminder)](#329-compact-file-reference-system-reminder)
      10. [Previously invoked skills (System Reminder)](#3210-previously-invoked-skills-system-reminder)
      11. [Session memory update instructions (Agent Prompt)](#3211-session-memory-update-instructions-agent-prompt)
   3. [Core Behavior & Communication Style](#33-core-behavior-communication-style)
      1. [Core Agent Behavior & Identity](#331-core-agent-behavior-identity)
         1. [Harness instructions (System Prompt)](#3311-harness-instructions-system-prompt)
         2. [Executing actions with care (System Prompt)](#3312-executing-actions-with-care-system-prompt)
         3. [Tool execution denied (System Prompt)](#3313-tool-execution-denied-system-prompt)
         4. [Doing tasks (software engineering focus) [System Prompt]](#3314-doing-tasks-software-engineering-focus-system-prompt)
         5. [Doing tasks (ambitious tasks) [System Prompt]](#3315-doing-tasks-ambitious-tasks-system-prompt)
         6. [Doing tasks (help and feedback) [System Prompt]](#3316-doing-tasks-help-and-feedback-system-prompt)
         7. [Agent thread notes (System Prompt)](#3317-agent-thread-notes-system-prompt)
         8. [Agent Summary Generation (System Prompt)](#3318-agent-summary-generation-system-prompt)
         9. [Advisor tool instructions (System Prompt)](#3319-advisor-tool-instructions-system-prompt)
      2. [Output Style & Response Formatting](#332-output-style-response-formatting)
         1. [Tone and style (code references) [System Prompt]](#3321-tone-and-style-code-references-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#3322-tone-and-style-concise-output-—-short-system-prompt)
         3. [Agent memory instructions (System Prompt)](#3323-agent-memory-instructions-system-prompt)
4. [File, Code & Development Tools](#4-file-code-development-tools)
   1. [File System Operations & File Handling](#41-file-system-operations-file-handling)
      1. [File shorter than offset (System Reminder)](#411-file-shorter-than-offset-system-reminder)
      2. [File truncated (System Reminder)](#412-file-truncated-system-reminder)
      3. [File exists but empty (System Reminder)](#413-file-exists-but-empty-system-reminder)
      4. [Write (Tool Description)](#414-write-tool-description)
      5. [Write (read existing file first) [Tool Description]](#415-write-read-existing-file-first-tool-description)
      6. [Edit (Tool Description)](#416-edit-tool-description)
      7. [ReadFile (Tool Description)](#417-readfile-tool-description)
      8. [Grep (Tool Description)](#418-grep-tool-description)
      9. [NotebookEdit (Tool Description)](#419-notebookedit-tool-description)
   2. [Git Operations & Version Control](#42-git-operations-version-control)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#421-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#422-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#423-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#424-bash-git-—-prefer-new-commits-tool-description)
      5. [Quick git commit (Agent Prompt)](#425-quick-git-commit-agent-prompt)
      6. [Quick PR creation (Agent Prompt)](#426-quick-pr-creation-agent-prompt)
      7. [Session title and branch generation (Agent Prompt)](#427-session-title-and-branch-generation-agent-prompt)
      8. [Git status (System Prompt)](#428-git-status-system-prompt)
      9. [EnterWorktree (Tool Description)](#429-enterworktree-tool-description)
      10. [ExitWorktree (Tool Description)](#4210-exitworktree-tool-description)
   3. [IDE, Browser & External Tool Integration](#43-ide-browser-external-tool-integration)
      1. [IDE & Editor Integration](#431-ide-editor-integration)
         1. [File opened in IDE (System Reminder)](#4311-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#4312-lines-selected-in-ide-system-reminder)
         3. [New diagnostics detected (System Reminder)](#4313-new-diagnostics-detected-system-reminder)
         4. [File modified by user or linter (System Reminder)](#4314-file-modified-by-user-or-linter-system-reminder)
         5. [Output style active (System Reminder)](#4315-output-style-active-system-reminder)
      2. [Browser Automation & Computer Use](#432-browser-automation-computer-use)
         1. [Chrome browser MCP tools (System Prompt)](#4321-chrome-browser-mcp-tools-system-prompt)
         2. [Claude in Chrome browser automation (System Prompt)](#4322-claude-in-chrome-browser-automation-system-prompt)
         3. [Computer Use MCP (Skill)](#4323-computer-use-mcp-skill)
         4. [Computer (Tool Description)](#4324-computer-tool-description)
         5. [BrowserBatch (Tool Description)](#4325-browserbatch-tool-description)
         6. [Computer action (Tool Parameter)](#4326-computer-action-tool-parameter)
      3. [MCP Resources & Tool Discovery](#433-mcp-resources-tool-discovery)
         1. [MCP resource no content (System Reminder)](#4331-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#4332-mcp-resource-no-displayable-content-system-reminder)
         3. [ToolSearch (second part) [Tool Description]](#4333-toolsearch-second-part-tool-description)
         4. [LSP (Tool Description)](#4334-lsp-tool-description)
   4. [Codebase Exploration & Analysis Agents](#44-codebase-exploration-analysis-agents)
      1. [Explore (Agent Prompt)](#441-explore-agent-prompt)
      2. [General purpose (Agent Prompt)](#442-general-purpose-agent-prompt)
      3. [Bash command prefix detection (Agent Prompt)](#443-bash-command-prefix-detection-agent-prompt)
      4. [Bash command description writer (Agent Prompt)](#444-bash-command-description-writer-agent-prompt)
      5. [Auto mode rule reviewer (Agent Prompt)](#445-auto-mode-rule-reviewer-agent-prompt)
5. [Code Quality, Security & Testing](#5-code-quality-security-testing)
   1. [Security Review & Vulnerability Analysis](#51-security-review-vulnerability-analysis)
      1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#511-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#512-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      3. [/security-review slash command (Agent Prompt)](#513-security-review-slash-command-agent-prompt)
      4. [Malware analysis after Read tool call (System Reminder)](#514-malware-analysis-after-read-tool-call-system-reminder)
      5. [Censoring assistance with malicious activities (System Prompt)](#515-censoring-assistance-with-malicious-activities-system-prompt)
      6. [Doing tasks (security) [System Prompt]](#516-doing-tasks-security-system-prompt)
   2. [Code Review & Runtime Verification](#52-code-review-runtime-verification)
      1. [Code Review & Quality Assurance](#521-code-review-quality-assurance)
         1. [/review-pr slash command (Agent Prompt)](#5211-review-pr-slash-command-agent-prompt)
         2. [Simplify (Skill)](#5212-simplify-skill)
         3. [Doing tasks (no compatibility hacks) [System Prompt]](#5213-doing-tasks-no-compatibility-hacks-system-prompt)
         4. [Doing tasks (no unnecessary error handling) [System Prompt]](#5214-doing-tasks-no-unnecessary-error-handling-system-prompt)
      2. [Verification & Testing](#522-verification-testing)
         1. [Verification specialist (Agent Prompt)](#5221-verification-specialist-agent-prompt)
         2. [Verify skill (Skill)](#5222-verify-skill-skill)
         3. [Verify CLI changes (example for Verify skill) [Skill]](#5223-verify-cli-changes-example-for-verify-skill-skill)
         4. [Verify server/API changes (example for Verify skill) [Skill]](#5224-verify-serverapi-changes-example-for-verify-skill-skill)
         5. [Create verifier skills (Skill)](#5225-create-verifier-skills-skill)
   3. [Hook System & Project Configuration](#53-hook-system-project-configuration)
      1. [Hook System & Lifecycle Events](#531-hook-system-lifecycle-events)
         1. [Stop hook blocking error (System Reminder)](#5311-stop-hook-blocking-error-system-reminder)
         2. [Hook additional context (System Reminder)](#5312-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#5313-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation prefix (System Reminder)](#5314-hook-stopped-continuation-prefix-system-reminder)
         5. [Hook stopped continuation (System Reminder)](#5315-hook-stopped-continuation-system-reminder)
         6. [Hook success (System Reminder)](#5316-hook-success-system-reminder)
         7. [Hooks Configuration (System Prompt)](#5317-hooks-configuration-system-prompt)
         8. [Hook condition evaluator (stop) [Agent Prompt]](#5318-hook-condition-evaluator-stop-agent-prompt)
      2. [CLAUDE.md & Project Configuration](#532-claudemd-project-configuration)
         1. [CLAUDE.md creation (Agent Prompt)](#5321-claudemd-creation-agent-prompt)
         2. [/init CLAUDE.md and skill setup (new version) [Skill]](#5322-init-claudemd-and-skill-setup-new-version-skill)
         3. [Update Claude Code Config (Skill)](#5323-update-claude-code-config-skill)
         4. [update-config (7-step verification flow) [Skill]](#5324-update-config-7-step-verification-flow-skill)
         5. [WSL managed settings double opt-in (System Prompt)](#5325-wsl-managed-settings-double-opt-in-system-prompt)
6. [Claude API, SDKs & Agent Design](#6-claude-api-sdks-agent-design)
   1. [Claude API SDK Reference Documentation](#61-claude-api-sdk-reference-documentation)
      1. [Claude API reference — Python (Data)](#611-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#612-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#613-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#614-claude-api-reference-—-java-data)
      5. [Claude API reference — C# (Data)](#615-claude-api-reference-—-c-data)
      6. [Claude API reference — Ruby (Data)](#616-claude-api-reference-—-ruby-data)
      7. [Claude API reference — PHP (Data)](#617-claude-api-reference-—-php-data)
      8. [Claude API reference — cURL (Data)](#618-claude-api-reference-—-curl-data)
      9. [Claude model catalog (Data)](#619-claude-model-catalog-data)
      10. [HTTP error codes reference (Data)](#6110-http-error-codes-reference-data)
      11. [Live documentation sources (Data)](#6111-live-documentation-sources-data)
   2. [Managed Agents API Reference](#62-managed-agents-api-reference)
      1. [Managed Agents overview (Data)](#621-managed-agents-overview-data)
      2. [Managed Agents core concepts (Data)](#622-managed-agents-core-concepts-data)
      3. [Managed Agents endpoint reference (Data)](#623-managed-agents-endpoint-reference-data)
      4. [Managed Agents environments and resources (Data)](#624-managed-agents-environments-and-resources-data)
      5. [Managed Agents events and steering (Data)](#625-managed-agents-events-and-steering-data)
      6. [Managed Agents memory stores reference (Data)](#626-managed-agents-memory-stores-reference-data)
      7. [Managed Agents tools and skills (Data)](#627-managed-agents-tools-and-skills-data)
      8. [Managed Agents client patterns (Data)](#628-managed-agents-client-patterns-data)
      9. [Managed Agents reference — Python (Data)](#629-managed-agents-reference-—-python-data)
      10. [Managed Agents reference — TypeScript (Data)](#6210-managed-agents-reference-—-typescript-data)
      11. [Managed Agents reference — cURL (Data)](#6211-managed-agents-reference-—-curl-data)
      12. [Managed Agents onboarding flow (Agent Prompt)](#6212-managed-agents-onboarding-flow-agent-prompt)
   3. [Streaming, Batching & Tool Use API Patterns](#63-streaming-batching-tool-use-api-patterns)
      1. [Streaming reference — Python (Data)](#631-streaming-reference-—-python-data)
      2. [Streaming reference — TypeScript (Data)](#632-streaming-reference-—-typescript-data)
      3. [Message Batches API reference — Python (Data)](#633-message-batches-api-reference-—-python-data)
      4. [Tool use concepts (Data)](#634-tool-use-concepts-data)
      5. [Tool use reference — Python (Data)](#635-tool-use-reference-—-python-data)
      6. [Tool use reference — TypeScript (Data)](#636-tool-use-reference-—-typescript-data)
      7. [Files API reference — Python (Data)](#637-files-api-reference-—-python-data)
      8. [Files API reference — TypeScript (Data)](#638-files-api-reference-—-typescript-data)
      9. [Prompt Caching — Design & Optimization (Data)](#639-prompt-caching-—-design-optimization-data)
   4. [Agent Design & LLM Application Building](#64-agent-design-llm-application-building)
      1. [Agent Design Patterns (Skill)](#641-agent-design-patterns-skill)
      2. [Build with Claude API (reference guide) [Skill]](#642-build-with-claude-api-reference-guide-skill)
      3. [Building LLM-powered applications with Claude (Skill)](#643-building-llm-powered-applications-with-claude-skill)
      4. [Model migration guide (Skill)](#644-model-migration-guide-skill)
      5. [Agent creation architect (Agent Prompt)](#645-agent-creation-architect-agent-prompt)
      6. [Claude guide agent (Agent Prompt)](#646-claude-guide-agent-agent-prompt)
      7. [Anthropic CLI (Data)](#647-anthropic-cli-data)
7. [Workflow Automation, Scheduling & Team Enablement](#7-workflow-automation-scheduling-team-enablement)
   1. [Scheduling & Background Automation](#71-scheduling-background-automation)
      1. [Scheduling & Automation](#711-scheduling-automation)
         1. [CronCreate (Tool Description)](#7111-croncreate-tool-description)
         2. [ScheduleWakeup (/loop dynamic mode) [Tool Description]](#7112-schedulewakeup-loop-dynamic-mode-tool-description)
         3. [Snooze (delay and reason guidance) [Tool Description]](#7113-snooze-delay-and-reason-guidance-tool-description)
         4. [Schedule proactive offer guidance (Tool Description)](#7114-schedule-proactive-offer-guidance-tool-description)
         5. [/loop slash command (Skill)](#7115-loop-slash-command-skill)
         6. [/loop slash command (dynamic mode) [Skill]](#7116-loop-slash-command-dynamic-mode-skill)
         7. [/loop self-pacing mode (Skill)](#7117-loop-self-pacing-mode-skill)
         8. [/loop cloud-first scheduling offer (Skill)](#7118-loop-cloud-first-scheduling-offer-skill)
         9. [Dynamic pacing loop execution (Skill)](#7119-dynamic-pacing-loop-execution-skill)
         10. [Schedule recurring cron and execute immediately (compact) [Skill]](#71110-schedule-recurring-cron-and-execute-immediately-compact-skill)
         11. [Schedule recurring cron and run immediately (Skill)](#71111-schedule-recurring-cron-and-run-immediately-skill)
         12. [Proactive schedule offer after follow-up work (System Prompt)](#71112-proactive-schedule-offer-after-follow-up-work-system-prompt)
         13. [/schedule slash command (Agent Prompt)](#71113-schedule-slash-command-agent-prompt)
         14. [Loop wakeup not scheduled (System Reminder)](#71114-loop-wakeup-not-scheduled-system-reminder)
      2. [GitHub Actions & CI/CD Integration](#712-github-actions-cicd-integration)
         1. [GitHub Actions workflow for @claude mentions (Data)](#7121-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#7122-github-app-installation-pr-description-data)
   2. [Skills, Commands & Operational Modes](#72-skills-commands-operational-modes)
      1. [Skill System & Slash Commands](#721-skill-system-slash-commands)
         1. [Skill (Tool Description)](#7211-skill-tool-description)
         2. [Skillify Current Session (System Prompt)](#7212-skillify-current-session-system-prompt)
         3. [Debugging (Skill)](#7213-debugging-skill)
         4. [/stuck slash command (Skill)](#7214-stuck-slash-command-skill)
         5. [Generate permission allowlist from transcripts (Skill)](#7215-generate-permission-allowlist-from-transcripts-skill)
         6. [/catch-up periodic heartbeat (Skill)](#7216-catch-up-periodic-heartbeat-skill)
         7. [/morning-checkin daily brief (Skill)](#7217-morning-checkin-daily-brief-skill)
         8. [/pre-meeting-checkin event brief (Skill)](#7218-pre-meeting-checkin-event-brief-skill)
      2. [Minimal Mode & Feature Configuration](#722-minimal-mode-feature-configuration)
         1. [Minimal mode (System Prompt)](#7221-minimal-mode-system-prompt)
         2. [Scratchpad directory (System Prompt)](#7222-scratchpad-directory-system-prompt)
      3. [Learning & Educational Modes](#723-learning-educational-modes)
         1. [Learning mode (System Prompt)](#7231-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7232-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#7233-request_teach_access-part-of-teach-mode-tool-description)
   3. [Team Analytics & Onboarding](#73-team-analytics-onboarding)
      1. [Usage Insights & Analytics](#731-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#7311-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7312-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7313-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7314-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7315-insights-suggestions-system-prompt)
         6. [/insights report output (Skill)](#7316-insights-report-output-skill)
         7. [Onboarding guide generator (Agent Prompt)](#7317-onboarding-guide-generator-agent-prompt)
      2. [Onboarding & Team Setup](#732-onboarding-team-setup)
         1. [Team onboarding guide (Skill)](#7321-team-onboarding-guide-skill)
         2. [Assistant voice and values template (Data)](#7322-assistant-voice-and-values-template-data)
         3. [Background agent state classification examples (Data)](#7323-background-agent-state-classification-examples-data)
   4. [User Interaction, Search & Resource Monitoring](#74-user-interaction-search-resource-monitoring)
      1. [User Interaction & Communication](#741-user-interaction-communication)
         1. [AskUserQuestion (Tool Description)](#7411-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#7412-askuserquestion-preview-field-tool-description)
         3. [PushNotification (Tool Description)](#7413-pushnotification-tool-description)
         4. [How to use the SendUserMessage tool (System Prompt)](#7414-how-to-use-the-sendusermessage-tool-system-prompt)
         5. [Communication style (System Prompt)](#7415-communication-style-system-prompt)
         6. [Option previewer (System Prompt)](#7416-option-previewer-system-prompt)
         7. [/btw side question (System Reminder)](#7417-btw-side-question-system-reminder)
      2. [Web Search & Content Retrieval](#742-web-search-content-retrieval)
         1. [WebFetch (Tool Description)](#7421-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#7422-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#7423-webfetch-summarizer-agent-prompt)
      3. [Resource & Budget Monitoring](#743-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#7431-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#7432-usd-budget-system-reminder)
         3. [Thinking frequency tuning (System Reminder)](#7433-thinking-frequency-tuning-system-reminder)

---

## 1. Shell & Command Execution

Covers how Claude executes commands across bash and PowerShell environments, including sandbox security enforcement, tool selection conventions, command chaining patterns, and scripting interfaces.

### 1.1 Bash Tool Configuration & Best Practices

Bash command execution follows conventions for working directory persistence, command chaining, and file handling. Parallel execution improves efficiency; sequential commands use && for failure handling. Dedicated tools (Read, Write, Glob, Grep, Edit) provide better UX than bash equivalents. Sleep commands should be brief and avoid polling; check commands poll external processes instead. Timeouts are configurable in milliseconds.

#### 1.1.1 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Maintain current working directory by using absolute paths and avoiding cd commands, except when explicitly requested by the user.

#### 1.1.2 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate commands in bash tool calls.

#### 1.1.3 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Executes a given bash command and returns its output.

#### 1.1.4 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent commands as parallel tool calls in a single message to improve efficiency.

#### 1.1.5 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for read-only searching commands like find and grep; use dedicated tools instead for better user experience.

#### 1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.7 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons only when commands must run sequentially but earlier command failures do not matter.

#### 1.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands together using && in a single bash call to ensure sequential execution with failure handling.

#### 1.1.9 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly instead of using echo or printf for communication.

#### 1.1.10 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs Claude to use the Grep tool for content search instead of grep or rg commands.

#### 1.1.11 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool for file editing instead of sed or awk commands.

#### 1.1.12 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs Claude to use the Glob tool for file search instead of find or ls commands.

#### 1.1.13 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool for file reading instead of cat, head, or tail commands.

#### 1.1.14 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs Claude to use the Write tool for file writing instead of echo or cat commands.

#### 1.1.15 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and transparency than Bash equivalents.

#### 1.1.16 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations short (1-5 seconds) to avoid blocking the user when using bash sleep commands.

#### 1.1.17 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

#### 1.1.18 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Execute commands that can run immediately without inserting sleep delays between them.

#### 1.1.19 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like `gh run view` to poll external processes instead of sleeping.

#### 1.1.20 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Bash commands support optional timeout configuration in milliseconds, with configurable maximum and default limits.

#### 1.1.21 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, verify the parent directory exists and is the correct location using ls.

#### 1.1.22 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between bash commands, but shell state does not; environment initializes from user profile.

### 1.2 Bash Sandbox Security & Policy

All bash commands run in mandatory sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy. Sandbox restrictions manifest as access denied, operation not permitted, network failures, or unix socket errors. When restrictions cause failure, immediately retry with sandbox disabled without prompting; the user will be asked for permission. Sensitive paths like ~/.ssh should never be added to allowlists. Use $TMPDIR for temporary files in sandbox mode.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always default to running commands within the sandbox; only bypass when user requests or sandbox restrictions are evident.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that sandbox restrictions caused a failure.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors for file and network operations signal sandbox restrictions.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused a failure and mention the /sandbox command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Recognize when a command failure shows evidence of sandbox restrictions, distinguishing them from other failure causes.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.ssh, or credential files to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; default to sandbox for future commands even after running one with sandbox disabled.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing how to respond when sandbox-caused failures are detected.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true when sandbox restrictions cause failure, without asking the user.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will prompt the user for permission.

### 1.3 PowerShell & Windows Environment

Addresses Windows PowerShell 5.1 compatibility constraints and execution patterns, documenting operator limitations, encoding quirks, and performance optimization strategies that avoid unnecessary delays in command execution.

#### 1.3.1 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 limitations and workarounds including missing pipeline operators, ternary operators, stderr redirection quirks, and file encoding defaults.

#### 1.3.2 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Advises against unnecessary sleep commands in PowerShell, preferring immediate execution, background job notifications, root-cause diagnosis, and polling alternatives over sleep-based waiting.

#### 1.3.3 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Execute PowerShell commands with optional timeout. Use for terminal operations like git, npm, docker, and cmdlets, not file operations. Includes syntax guidance for variables, escaping, cmdlets, pipes, and here-strings.

#### 1.3.4 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; instead requires diagnosing root causes.

### 1.4 REPL & Scripting Interface

Provides JavaScript-based scripting environment for composing tool calls, looping, and codebase exploration through dense shorthand conventions. Enables batching operations and efficient investigation patterns.

#### 1.4.1 [REPL (Tool Description)](system-prompts/tool-description-repl.md)

JavaScript programming interface for looping, branching, and composing tool calls as async functions. Batch all operations into one REPL call; supports Glob, Read, Edit, shell commands, and MCP tools.

#### 1.4.2 [REPL tool usage and scripting conventions (System Prompt)](system-prompts/system-prompt-repl-tool-usage-and-scripting-conventions.md)

Defines dense JavaScript scripting conventions for REPL investigations with shorthands for shell, file, and code operations, batching rules, and API reference for efficient codebase exploration.

---

## 2. Agent Architecture & Orchestration

Structures for decomposing complex tasks across multiple agents, managing parallel execution, tracking progress, routing requests, and handling long-running background jobs.

### 2.1 Multi-Agent Coordination

Delegation patterns, subagent lifecycle management, worktree isolation, and result aggregation for parallel agent execution.

#### 2.1.1 Multi-Agent Coordination & Subagent Management

Orchestrates parallel execution of specialized agents through delegation patterns, messaging protocols, and lifecycle management. Enables decomposition of complex tasks into independent units executed in isolated worktrees, with mechanisms for context inheritance, result aggregation, and graceful shutdown.

##### 2.1.1.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance for spawning and managing subagents, including background execution, resumption via messaging, worktree isolation, and best practices for agent descriptions and result verification.

##### 2.1.1.2 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Instructs Claude to operate as a team member with specific identity, resources, and communication protocols for coordinating with teammates and a team lead.

##### 2.1.1.3 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully and clean up before providing final response to user.

##### 2.1.1.4 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Instructs Claude to create detailed implementation plans using parallel subagents for code exploration, file identification, and risk analysis, then incorporate critique feedback before execution or teleportation to local terminal.

##### 2.1.1.5 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results with independent context and specialized agent types.

##### 2.1.1.6 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates self-contained prompt patterns for delegating tasks to subagents with clear goals, context, and response constraints.

##### 2.1.1.7 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Guidance on using subagents for parallelizing independent tasks and protecting context, while avoiding duplication of work already delegated.

##### 2.1.1.8 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Guidelines for writing effective subagent prompts that provide context, explain intent, and avoid delegating understanding or synthesis to the agent.

##### 2.1.1.9 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for open-ended work, prohibits reading fork output mid-flight or fabricating results, and instructs on writing focused fork prompts that inherit context without re-explaining background.

##### 2.1.1.10 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines post-implementation workflow for workers: simplify changes, run unit and e2e tests, commit and push, then report PR URL.

##### 2.1.1.11 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

System prompt for a forked worker sub-agent that executes a single directive from the parent agent and reports back concisely without spawning additional sub-agents.

##### 2.1.1.12 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Describes SendMessageTool for agent-to-agent messaging in teammate workflows, including protocol responses for shutdown and plan approval requests. Plain text output is not visible to other agents; all communication requires explicit tool invocation.

##### 2.1.1.13 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Describes SendMessageTool for sending user-visible messages with markdown support, file attachments, and status labels indicating whether the message is a direct reply or proactive notification.

##### 2.1.1.14 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages teams and coordinates multiple agents in swarms. Covers team creation, agent type selection, task ownership, automatic message delivery, idle state handling, and team member discovery via config files. Emphasizes using SendMessage for all teammate communication and TaskUpdate for task completion.

##### 2.1.1.15 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available work from shared task lists. Teammates should prefer tasks in ID order, claim unassigned unblocked tasks, and notify the team lead if blocked.

##### 2.1.1.16 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completes. Fails if active members remain; teammates must be gracefully terminated first before cleanup.

##### 2.1.1.17 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining e2e test recipes, and spawning background worker agents with worktree isolation. Tracks progress and renders status tables.

#### 2.1.2 Background Agent State & Job Management

Manages long-running background jobs by classifying their execution state, monitoring progress through streaming output, maintaining job isolation, and guiding autonomous loops to continue established work while avoiding new task invention.

##### 2.1.2.1 [Background agent state classifier (Agent Prompt)](system-prompts/agent-prompt-background-agent-state-classifier.md)

Classifies background agent transcript tails into working, blocked, done, or failed states with detailed disambiguation rules for edge cases like external waits, user blockers, and API errors. Returns concise JSON with state, detail, tempo, and optional needs.

##### 2.1.2.2 [Background job behavior (System Prompt)](system-prompts/system-prompt-background-job-behavior.md)

Instructs background job agents to narrate progress, restate results in message text for classifier extraction, and signal done/blocked/failed status with concise one-line outcomes.

##### 2.1.2.3 [Background session instructions (System Prompt)](system-prompts/system-prompt-background-session-instructions.md)

Directs background job sessions to use job-specific temporary directory instead of /tmp to avoid file collisions between parallel jobs.

##### 2.1.2.4 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Describes background monitoring of long-running scripts via stdout streaming, with guidance on script quality, output filtering, event coverage, and avoiding unbounded commands for single notifications.

##### 2.1.2.5 [Autonomous loop check (System Prompt)](system-prompts/system-prompt-autonomous-loop-check.md)

Guides timer-based autonomous invocations to continue established work from conversation transcripts and PR maintenance (CI diagnosis, review threads, branch conflicts) while avoiding invention of new work. Adjusts scope on repeated invocations and stops when genuinely quiet.

##### 2.1.2.6 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Defines autonomous execution mode where Claude executes immediately with reasonable assumptions, minimizes interruptions, prefers action over planning, and avoids destructive actions without confirmation or data exfiltration without authorization.

### 2.2 Planning & Task Workflows

Plan-mode design-before-implementation workflows, task list tracking with state transitions, and dependency ordering for structured work execution.

#### 2.2.1 Plan Mode Workflows

Plan mode enables design-before-implementation for non-trivial tasks. Five-phase workflows combine parallel exploration and multi-agent planning; iterative pair-planning loops with user clarification; subagents work read-only on plan files. Plans are file-focused with 40-line hard limits and single verification commands. Remote planning explores codebases, generates diagram-rich plans, and implements approved designs via pull requests. Re-entry evaluates whether new requests continue or restart planning.

##### 2.2.1.1 [Plan mode approval tool enforcement (System Reminder)](system-prompts/system-reminder-plan-mode-approval-tool-enforcement.md)

Enforces that plan mode turns must end with either AskUserQuestion for clarification or ExitPlanMode for approval, forbidding approval requests through other means.

##### 2.2.1.2 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Defines a five-phase planning workflow with parallel exploration and multi-agent planning, guiding Claude through understanding, design, review, and approval phases with specific agent types and parallelization guidelines.

##### 2.2.1.3 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Describes an iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, and asks the user clarifying questions in a loop until the plan is complete.

##### 2.2.1.4 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instructions for subagents, restricting edits to the plan file only and requiring read-only actions with optional clarifying questions.

##### 2.2.1.5 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after a previous exit, instructing it to read the existing plan, evaluate whether the new request is the same task or different, and proceed accordingly.

##### 2.2.1.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 2.2.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and edits, tools, and actions are now available.

##### 2.2.1.8 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode where Claude writes a concise, file-focused implementation plan with a 40-line hard limit and single verification command.

##### 2.2.1.9 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore codebases, produce diagram-rich plans via ExitPlanMode, and implement approved plans with pull requests, handling teleportation and rejection feedback.

##### 2.2.1.10 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Establishes remote planning sessions with lightweight codebase exploration, plan generation via ExitPlanMode, and handling of approval, rejection, or teleportation back to user's local terminal.

##### 2.2.1.11 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Enter plan mode to explore codebase and design implementation approaches for user approval before writing code. Use for non-trivial tasks with multiple valid approaches, architectural decisions, multi-file changes, or unclear requirements.

##### 2.2.1.12 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of plan design and request user approval. Use only for implementation planning tasks, not research; ensure plan is complete before calling.

##### 2.2.1.13 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent for designing implementation plans by exploring codebases, identifying patterns, and detailing step-by-step strategies with critical files and trade-off analysis.

#### 2.2.2 Task Tracking & Progress Management

Structures work into tracked task lists with state transitions and dependency ordering. Enables real-time progress visibility through imperative task forms, immediate completion marking, and parallel tool execution for independent operations.

##### 2.2.2.1 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Reminds Claude to use task tracking tools for progress management when relevant to current work, without mentioning the reminder to the user.

##### 2.2.2.2 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Reminds Claude to use the TodoWrite tool for task tracking when relevant, without disclosing the reminder to the user.

##### 2.2.2.3 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 2.2.2.4 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite to break down work and track progress, marking tasks complete immediately rather than batching.

##### 2.2.2.5 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with dual task forms (imperative and active continuous). Use for complex multi-step tasks, user-provided lists, or explicit requests; skip single trivial tasks. Enforces exactly one in_progress task and immediate completion marking.

##### 2.2.2.6 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions with imperative subjects and descriptions. Use for complex multi-step tasks, plan mode, or when users provide multiple items; skip for single trivial tasks. Tasks are created with pending status and can be updated with dependencies.

##### 2.2.2.7 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while running dependent operations sequentially to increase efficiency.

### 2.3 Agent Invocation & Contextual Display

Mechanisms for routing user requests to specialized agents, configuring terminal status displays with real-time session metadata, and generating contextually-aware next-step suggestions that anticipate user intent.

#### 2.3.1 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that user wants to invoke a specific agent type and to pass required context.

#### 2.3.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by converting shell PS1 configurations and creating shell commands that receive JSON session context including model, workspace, token usage, and rate limits.

#### 2.3.3 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next in Claude Code based on recent conversation context, avoiding evaluative or meta-commentary suggestions.

---

## 3. Memory, Sessions & Agent Identity

Persistent memory across sessions, conversation continuity through context compaction, core agent behavior and decision-making frameworks, and response formatting conventions.

### 3.1 Memory System & Persistent Context

Maintains typed, file-based memory across sessions capturing user details, feedback, project context, and learnings. Reconciles stored knowledge against current code state, deduplicates entries, and synthesizes relevant facts for queries while preventing stale information from misleading decisions.

#### 3.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by its path, including type description.

#### 3.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file.

#### 3.1.3 [Memory instructions (System Prompt)](system-prompts/system-prompt-memory-instructions.md)

Defines persistent file-based memory system with markdown frontmatter format, memory types (user, feedback, project, reference), deduplication rules, and staleness verification against current code state.

#### 3.1.4 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about the user's role, goals, knowledge, and preferences across sessions, enabling personalized collaboration.

#### 3.1.5 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes feedback memory type that stores user guidance on work approaches, emphasizing recording both successes and failures while checking for contradictions with team memories.

#### 3.1.6 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Describes feedback memory type capturing user guidance on work approaches from both successes and failures, with explicit instruction to check for contradictions with team feedback before saving.

#### 3.1.7 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs Claude to verify memory records against current file state before using them, deleting stale memories that conflict with observed reality while saving fresh ones if needed.

#### 3.1.8 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as containing role, goals, responsibilities, and knowledge to tailor behavior and collaboration style while avoiding negative judgements.

#### 3.1.9 [Dream CLAUDE.md memory reconciliation (System Prompt)](system-prompts/system-prompt-dream-claudemd-memory-reconciliation.md)

Guides memory consolidation during dream sessions to reconcile stored feedback and project memories against CLAUDE.md, deleting stale memories or flagging potential drift between maintained instructions and recorded context.

#### 3.1.10 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Establishes conservative rules for managing shared team memories during dream consolidation, emphasizing deduplication within team files while avoiding accidental deletion of teammates' load-bearing notes.

#### 3.1.11 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing memories, gathering recent signal from session logs and transcripts, merging updates into topic files, and pruning the index to stay under size limits.

#### 3.1.12 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs memory pruning by deleting stale or invalidated memories and collapsing duplicates, with conservative handling of shared team memories.

#### 3.1.13 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files for a user query by matching on actual query content rather than surface keywords, avoiding false positives from user-profile and project-overview memories.

#### 3.1.14 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and extracts relevant facts for queries, returning JSON with up to 7 facts and cited filenames. Focuses on avoiding re-asks, applying preferences, maintaining continuity, and preventing pitfalls.

#### 3.1.15 [/dream memory consolidation (Skill)](system-prompts/skill-dream-memory-consolidation.md)

Nightly housekeeping job that consolidates recent logs and transcripts into persistent memory topics, learnings, and a pruned MEMORY.md index under 200 lines.

#### 3.1.16 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing schedules, creating a cron task, confirming details, and running an immediate consolidation.

#### 3.1.17 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory `summary.md` files covering current state, task specification, files, workflow, errors, and key results.

#### 3.1.18 [User profile memory template (Data)](system-prompts/data-user-profile-memory-template.md)

Template content for user profile memory covering personal details, work context, schedule, and communication preferences.

### 3.2 Session Management & Conversation Continuity

Preserves conversation state across context window transitions and machine switches through structured summarization covering task progress, discoveries, and next steps. Enables efficient resumption by capturing technical details, pending work, and session metadata in compacted form.

#### 3.2.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and that application state may have changed, providing the updated working directory.

#### 3.2.2 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Guides generation of continuation summaries for context window transitions, covering task overview, current state, discoveries, next steps, and context preservation to enable efficient resumption.

#### 3.2.3 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Instructs Claude to create detailed conversation summaries for partial compaction using a structured analysis process and nine-section format, ensuring technical accuracy and completeness for continuation in subsequent sessions.

#### 3.2.4 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections: primary intent, technical concepts, files and code, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps. Includes analysis phase for accuracy verification.

#### 3.2.5 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages following earlier retained context, organized into nine sections covering intent, concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps.

#### 3.2.6 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent prompt for searching past Claude Code conversation sessions by scanning .jsonl transcript files and returning matching session IDs ordered by relevance.

#### 3.2.7 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise 3–7 word sentence-case titles capturing the main goal of a coding session for easy recognition in session lists.

#### 3.2.8 [/rename auto-generate session name (Agent Prompt)](system-prompts/agent-prompt-rename-auto-generate-session-name.md)

Auto-generates short kebab-case session names (2–4 words) capturing the main conversation topic from context.

#### 3.2.9 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

References a large file read before conversation summarization, directing Claude to use Read tool if needed.

#### 3.2.10 [Previously invoked skills (System Reminder)](system-prompts/system-reminder-previously-invoked-skills.md)

Restores context from skills invoked earlier in the session before conversation compaction, warning Claude not to re-execute setup actions or treat prior inputs as current instructions.

#### 3.2.11 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations while preserving structure, headers, and italic section descriptions, with guidance on detail density and token limits.

### 3.3 Core Behavior & Communication Style

Claude's operational identity, permission handling, risk management, advisor consultation patterns, and directives for concise and navigable response formatting.

#### 3.3.1 Core Agent Behavior & Identity

Establishes Claude's interactive agent identity, operational constraints, and decision-making framework. Defines how the agent handles permissions, tool execution, user confirmation for risky operations, communication style, and when to consult advisors before substantive work.

##### 3.3.1.1 [Harness instructions (System Prompt)](system-prompts/system-prompt-harness-instructions.md)

Defines core interactive-agent identity and harness behavior including terminal markdown output, permission modes, hook interception, context compaction, and tool-call preferences with clickable code references.

##### 3.3.1.2 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a risk-aware framework requiring user confirmation before destructive, hard-to-reverse, or shared-state-affecting operations, while encouraging diagnosis of root causes rather than bypassing safety checks.

##### 3.3.1.3 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable workarounds when tool execution is denied, but stop and explain if the capability is essential rather than attempting malicious bypasses.

##### 3.3.1.4 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Instructs Claude to interpret user requests in a software engineering context, treating vague instructions as code-related tasks and performing actual code modifications rather than providing abstract answers.

##### 3.3.1.5 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Permits users to complete ambitious tasks by deferring to user judgement on scope.

##### 3.3.1.6 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs informing users of help and feedback channels when requested.

##### 3.3.1.7 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute paths only, share relevant file paths in final responses, avoid emojis, and omit colons before tool calls for clear communication.

##### 3.3.1.8 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Instructs agents to generate brief 3-5 word action summaries in present tense, naming specific files or functions rather than branches or vague descriptions.

##### 3.3.1.9 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructs Claude to call the advisor tool before substantive work, when stuck, or when considering approach changes. Emphasizes making deliverables durable before advisor calls and giving serious weight to advice while surfacing conflicts between retrieved data and recommendations.

#### 3.3.2 Output Style & Response Formatting

Directives for shaping Claude's communication style, including code reference formatting with line numbers for navigability, conciseness constraints, and memory-building protocols that capture domain discoveries and architectural patterns across sessions.

##### 3.3.2.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number patterns when referencing code for easy user navigation.

##### 3.3.2.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Directs Claude to provide short and concise responses.

##### 3.3.2.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guides agents to update memory with domain-specific discoveries during work, building institutional knowledge across conversations. Provides templates for code reviewers, test runners, architects, and documentation writers to record patterns, decisions, and conventions.

---

## 4. File, Code & Development Tools

Tools for reading, writing, and searching the filesystem; Git version control workflows; IDE integration; browser automation; and code intelligence via MCP and LSP.

### 4.1 File System Operations & File Handling

Tools and safeguards for reading, writing, and searching files on the local filesystem. Handles edge cases like truncated files, empty files, and offset validation; supports multiple formats including images, PDFs, and Jupyter notebooks. Search uses ripgrep with full regex capabilities; editing preserves indentation and uses diffs for efficiency.

#### 4.1.1 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude when a file read offset exceeds the file's actual length, providing the file's total line count.

#### 4.1.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Informs Claude that a large file was truncated to a maximum line count and instructs it to use the read tool to access additional content without mentioning truncation to the user.

#### 4.1.3 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

#### 4.1.4 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, overwriting if the file exists. Prefers Edit for modifications and avoids creating documentation files unless explicitly requested.

#### 4.1.5 [Write (read existing file first) [Tool Description]](system-prompts/tool-description-write-read-existing-file-first.md)

Writes files to the local filesystem with a requirement to read existing files first before overwriting. Prefers Edit for modifications since it sends only diffs.

#### 4.1.6 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read tool output. Prefer editing existing files; use replace_all for renaming variables across files.

#### 4.1.7 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Read files from local filesystem using absolute paths. Supports images, PDFs (with page ranges for large files), and Jupyter notebooks. Reads up to configurable line limit by default.

#### 4.1.8 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Search content using ripgrep with full regex syntax, file filtering by glob or type, and multiple output modes. Always use this tool for search instead of bash grep commands.

#### 4.1.9 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replace contents of specific cells in Jupyter notebooks. Use absolute paths; cell_number is 0-indexed; supports insert and delete modes.

### 4.2 Git Operations & Version Control

Git workflows prioritize safety: avoid destructive operations like reset and force push; never skip hooks or bypass signing unless explicitly requested; prefer new commits over amends. Streamlined agents handle single commits and pull requests with pre-populated context, enforcing safety guardrails against secret files and empty commits. Worktrees provide isolated branching; branch names follow lowercase dash-separated convention prefixed with 'claude/'. Session titles and branch names are auto-generated from descriptions.

#### 4.2.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives to destructive git operations like reset, force push, and checkout.

#### 4.2.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Detailed instructions for creating git commits and GitHub pull requests, including safety protocols, parallel command execution, hook handling, and PR body formatting with test plans.

#### 4.2.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude to never skip hooks or bypass signing unless explicitly requested by the user.

#### 4.2.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to prefer creating new commits over amending existing ones.

#### 4.2.5 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Streamlined prompt for creating single git commits with pre-populated context from git status and diff. Enforces safety protocols: no amends, no hooks skipping, no secret files, no empty commits.

#### 4.2.6 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Streamlined prompt for creating commits and pull requests with pre-populated git context. Handles branch creation, multi-line PR bodies, and updates to existing PRs with safety guardrails against force-push and secret commits.

#### 4.2.7 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles and git branch names from session descriptions, following naming conventions with sentence case titles and lowercase dash-separated branch names prefixed with 'claude/'.

#### 4.2.8 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git repository status at conversation start as a static snapshot that does not update during the session.

#### 4.2.9 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it. Use only when explicitly instructed by user or project instructions; creates worktree in .claude/worktrees/ with new branch based on HEAD.

#### 4.2.10 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exit a worktree session created by EnterWorktree and return to original directory. Choose to keep or remove the worktree; optionally discard uncommitted changes.

### 4.3 IDE, Browser & External Tool Integration

Real-time IDE event handling, browser and desktop automation via mouse and keyboard, MCP tool discovery, and LSP-based code navigation.

#### 4.3.1 IDE & Editor Integration

Responds to real-time IDE events including file opens, selections, diagnostics, and external modifications. Provides contextual awareness of user interactions and linter feedback to keep Claude synchronized with the editing environment.

##### 4.3.1.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 4.3.1.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific lines selected by the user in the IDE, displaying the line range and content, which may or may not relate to the current task.

##### 4.3.1.3 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues with a summary of the problems.

##### 4.3.1.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified and shows relevant changes with line numbers for context.

##### 4.3.1.5 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and instructs it to follow the style's specific guidelines.

#### 4.3.2 Browser Automation & Computer Use

Provides tools and guidelines for Claude to interact with web browsers and desktop applications through mouse, keyboard, and screenshot actions, with safety checks for links and financial operations, and batch execution for multi-step sequences.

##### 4.3.2.1 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, with specific syntax for selecting and calling tools.

##### 4.3.2.2 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides guidelines for browser automation including GIF recording with extra frames, console log debugging with pattern filtering, avoiding JavaScript dialogs that block commands, and checking tab context at session start to prevent stale tab ID reuse.

##### 4.3.2.3 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools with tiered app access (read/click/full), tool selection hierarchy (dedicated MCP → Chrome MCP → computer-use), link safety checks, and restrictions on financial actions.

##### 4.3.2.4 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Interact with a Chrome browser using mouse and keyboard, taking screenshots. Consult screenshots before clicking to determine element coordinates and ensure cursor tip lands in element center.

##### 4.3.2.5 [BrowserBatch (Tool Description)](system-prompts/tool-description-browserbatch.md)

Execute multiple browser tool calls sequentially in one round trip, stopping on first error. Use extensively when you can predict two or more steps ahead like navigate, click, type, screenshot.

##### 4.3.2.6 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for Chrome browser automation including clicks, typing, scrolling, keyboard input, dragging, zooming, and hover interactions.

#### 4.3.3 MCP Resources & Tool Discovery

Mechanisms for locating and retrieving tool schemas and code intelligence capabilities. Includes tool discovery via keyword and exact-name matching, Language Server Protocol integration for code navigation and symbol analysis, and system indicators for resource availability states.

##### 4.3.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 4.3.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

##### 4.3.3.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by querying against a tool list using exact names, keyword search, or required terms. Returns matched tools as JSONSchema definitions in a functions block, making them callable.

##### 4.3.3.4 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers for code intelligence: go to definition, find references, hover info, symbol search, implementations, and call hierarchy.

### 4.4 Codebase Exploration & Analysis Agents

Specialized agents for fast read-only exploration, multi-step analysis, security validation, and documentation generation across codebases. Handles file discovery, code search, command safety classification, and rule evaluation.

#### 4.4.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only exploration agent specialized in finding files by glob patterns, searching code with regex, and answering codebase questions. Supports quick, medium, and very thorough search levels with parallel tool execution.

#### 4.4.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases. Reports findings concisely without gold-plating or creating unnecessary files.

#### 4.4.3 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety classification. Returns the prefix string or 'command_injection_detected' to prevent allowlist bypasses.

#### 4.4.4 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy commands.

#### 4.4.5 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for Claude Code, evaluating clarity, completeness, conflicts, and actionability across allow, soft_deny, and environment rule categories.

---

## 5. Code Quality, Security & Testing

Automated code review, vulnerability analysis, runtime verification, hook-based lifecycle enforcement, and project configuration through CLAUDE.md.

### 5.1 Security Review & Vulnerability Analysis

Evaluates code and autonomous actions for security risks including prompt injection, credential leakage, data exfiltration, and destructive operations. Performs comprehensive vulnerability analysis across input validation, authentication, cryptography, and injection vectors. Permits authorized security testing while enforcing ethical constraints on malicious assistance.

#### 5.1.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Acts as a security monitor evaluating autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with user intent as the final signal for authorization and boundaries.

#### 5.1.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules covering destructive operations, credential leakage, data exfiltration, and unsafe persistence, plus allow exceptions for test artifacts, local operations, and declared dependencies.

#### 5.1.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt analyzing code changes for exploitable vulnerabilities in input validation, authentication, cryptography, injection, and data exposure with high-confidence filtering and false-positive exclusions.

#### 5.1.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but forbids improving or augmenting malicious code, allowing analysis, reports, and behavioral questions instead.

#### 5.1.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, and CTF challenges while refusing destructive techniques, DoS attacks, and malicious evasion. Requires clear authorization context for dual-use security tools.

#### 5.1.6 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Prioritizes avoiding security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks.

### 5.2 Code Review & Runtime Verification

PR-level quality analysis, refactoring identification, and runtime testing across CLI, API, and web UI surfaces with structured evidence capture.

#### 5.2.1 Code Review & Quality Assurance

Analyzes code quality, style, correctness, and security through PR reviews and parallel quality agents. Identifies code reuse opportunities and efficiency problems. Emphasizes deletion of unused code and minimal error handling, trusting framework guarantees at internal boundaries.

##### 5.2.1.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Instructs Claude to review GitHub pull requests by fetching PR details and diffs, then analyzing code quality, style, correctness, performance, test coverage, and security implications.

##### 5.2.1.2 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel review agents to identify code reuse opportunities, quality issues, and efficiency problems, then fixes findings directly.

##### 5.2.1.3 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Advises deleting unused code completely rather than adding compatibility shims or renamed variables.

##### 5.2.1.4 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Avoids error handling for impossible scenarios and validates only at system boundaries, trusting internal code and framework guarantees.

#### 5.2.2 Verification & Testing

Validates code changes through runtime observation rather than static analysis. Builds, executes, and probes implementations across CLI, API, and web UI surfaces to uncover regressions and edge cases. Captures structured evidence with verdicts and findings; automates verification workflows using Playwright, Tmux, and HTTP testing.

##### 5.2.2.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarially tests implementations by running builds, test suites, linters, and boundary/concurrency probes, then issues PASS/FAIL/PARTIAL verdicts with documented evidence of actual execution rather than code reading.

##### 5.2.2.2 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Comprehensive verification skill that guides runtime observation of code changes by building, running, and driving the app to execute changed code. Emphasizes finding the runtime surface (CLI, API, GUI, library), avoiding test-only verification, probing edge cases, and capturing evidence with structured reporting including verdicts (PASS/FAIL/BLOCKED/SKIP) and findings.

##### 5.2.2.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Demonstrates verification workflow for CLI changes by building, running with test arguments, and comparing output against expected behavior. Shows how to validate new flags, check for regressions, and capture evidence through stdout/exit codes.

##### 5.2.2.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Outlines verification approach for server and API changes using curl requests, server lifecycle management with readiness polling, and response validation. Includes worked example of testing rate-limit headers and identifying common failure patterns.

##### 5.2.2.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically test code changes via Playwright (web UI), Tmux (CLI), or HTTP (API), including project detection, tool setup, authentication handling, and skill generation.

### 5.3 Hook System & Project Configuration

Lifecycle hooks at PermissionRequest, PreToolUse, and PostToolUse events; CLAUDE.md authoring, settings.json management, and environment setup workflows.

#### 5.3.1 Hook System & Lifecycle Events

Hooks execute at lifecycle events (PermissionRequest, PreToolUse, PostToolUse) in three types: command, prompt, and agent. Blocking hooks report errors and stop execution; success hooks return output. Stop-condition hooks evaluate user-provided criteria and return JSON with ok/false status and evidence. Hook messages notify Claude of blocking errors, additional context, success, or continuation stops with associated prefixes.

##### 5.3.1.1 [Stop hook blocking error (System Reminder)](system-prompts/system-reminder-stop-hook-blocking-error.md)

Notifies Claude of a blocking hook error from a specified command.

##### 5.3.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Delivers additional context information from a hook execution.

##### 5.3.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command, including the command that failed and the error message.

##### 5.3.1.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix for continuation messages when a hook stops execution.

##### 5.3.1.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude when a hook stops continuation and provides the associated message.

##### 5.3.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful completion of a hook with its output content.

##### 5.3.1.7 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Documents hook configuration structure and lifecycle events (PermissionRequest, PreToolUse, PostToolUse, etc.) with three hook types—command, prompt, and agent—plus JSON output fields for controlling behavior and injecting context.

##### 5.3.1.8 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks in Claude Code by judging whether user-provided conditions are satisfied, returning JSON with ok/false status and quoted evidence from transcript.

#### 5.3.2 CLAUDE.md & Project Configuration

Tools and workflows for documenting codebases and configuring Claude Code environments through CLAUDE.md files, settings.json management, hooks construction, and skill setup. Includes codebase analysis, configuration verification flows, and WSL policy handling for managed settings.

##### 5.3.2.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files capturing build/test commands, high-level architecture, and project-specific patterns for future Claude Code sessions.

##### 5.3.2.2 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks in a repository, including codebase exploration, user interviews, iterative proposal refinement, and optimization suggestions.

##### 5.3.2.3 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Guides Claude through modifying Claude Code's settings.json configuration, with emphasis on reading existing files before writing, merging arrays carefully, and distinguishing between simple settings (use /config command) and complex ones like hooks, permissions, and environment variables (edit directly). Includes detailed hook construction workflows and troubleshooting guidance.

##### 5.3.2.4 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Provides a seven-step verification process for constructing and testing hooks in Claude Code, from deduplication checks through pipe-testing raw commands, JSON schema validation, proof-of-execution, and handoff. Emphasizes testing hooks in the actual project environment before deployment and handling configuration watcher limitations.

##### 5.3.2.5 [WSL managed settings double opt-in (System Prompt)](system-prompts/system-prompt-wsl-managed-settings-double-opt-in.md)

Explains WSL managed settings policy chain access requiring admin-enabled flag and additional user opt-in for HKCU policies.

---

## 6. Claude API, SDKs & Agent Design

Reference documentation for the Claude API and Managed Agents API across multiple languages, streaming and batching patterns, and strategic guides for designing LLM applications.

### 6.1 Claude API SDK Reference Documentation

Language-specific SDK references and HTTP API documentation for Claude, covering client initialization, streaming, vision, tool use, prompt caching, extended thinking, structured outputs, and file handling across Python, TypeScript, Go, Java, C#, Ruby, PHP, and cURL. Includes model catalog with exact IDs and context windows, HTTP error codes with retry guidance, and live documentation sources.

#### 6.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client configuration, basic requests, vision, prompt caching, extended thinking, error handling, response helpers, multi-turn conversations, compaction, and cost optimization.

#### 6.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

#### 6.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering installation, client initialization, basic requests, streaming, tool use with BetaToolRunner, thinking, prompt caching, server-side tools, PDF input, Files API, and context editing.

#### 6.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering installation, client initialization, basic requests, streaming, thinking, tool use with annotated classes and BetaToolRunner, effort parameter, prompt caching, structured output, PDF input, server-side tools, and Files API.

#### 6.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering installation, client initialization, basic requests, streaming, thinking, tool use, effort parameter, prompt caching, structured output, PDF input, server-side tools, and Files API.

#### 6.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering installation, client initialization, basic requests, streaming, tool use with beta tool runner, and prompt caching.

#### 6.1.7 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering installation, client initialization for Anthropic/Bedrock/Vertex/Foundry, basic requests, streaming, tool use with BetaRunnableTool, extended thinking, prompt caching, and structured outputs.

#### 6.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming, tool use, prompt caching, extended thinking, and required headers.

#### 6.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact model IDs, context windows, max output tokens, and programmatic model discovery via the Models API for live capability data.

#### 6.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400–529), their causes, fixes, and SDK exception handling with typed error classes and retry guidance.

#### 6.1.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for current Claude API and Managed Agents documentation from platform.claude.com and SDK repositories, with extraction prompts for each topic.

### 6.2 Managed Agents API Reference

Complete reference for the Managed Agents API covering architecture (agents, sessions, environments, containers), lifecycle management, event streaming and polling, memory stores with persistence, tool integration (MCP, custom, vault credentials), file resources, and client-side patterns. Includes language-specific SDKs (Python, TypeScript, cURL) and an interactive onboarding flow for agent configuration.

#### 6.2.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Comprehensive overview of Managed Agents API architecture, the mandatory agent-then-session flow, beta headers, documentation guide, and common pitfalls.

#### 6.2.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Reference documentation covering Managed Agents architecture (Agents, Sessions, Environments, Containers), lifecycle, versioning, endpoints, and the mandatory agent-then-session flow.

#### 6.2.3 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive endpoint reference for Managed Agents API including SDK methods, request/response schemas, error handling, and rate limits across all resources.

#### 6.2.4 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference for Managed Agents environments, file resources, GitHub repository mounting, and the Files API with SDK examples for input/output workflows.

#### 6.2.5 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Reference guide for sending and receiving events on Managed Agent sessions, including streaming, polling, reconnection, message queuing, interrupts, and event payload details.

#### 6.2.6 [Managed Agents memory stores reference (Data)](system-prompts/data-managed-agents-memory-stores-reference.md)

Reference documentation for Managed Agents memory stores, including store creation, session attachment, FUSE mounts, memory CRUD, concurrency, versions, and redaction.

#### 6.2.7 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference documentation covering Managed Agents tool types (agent toolset, MCP, custom), permission policies, vault credential management, and skills API.

#### 6.2.8 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Reference guide for common client-side patterns driving Managed Agent sessions, including stream reconnection, idle-break gating, tool confirmations, interrupts, and custom tools.

#### 6.2.9 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Python SDK reference for Managed Agents covering agent creation, session management, streaming, custom tools, file uploads, and MCP server integration.

#### 6.2.10 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

TypeScript SDK reference for Managed Agents covering agent creation, session management, streaming, custom tools, file uploads, and MCP server integration.

#### 6.2.11 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

cURL and raw HTTP request examples for Managed Agents API covering environment, agent, and session lifecycle operations.

#### 6.2.12 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview script for configuring Managed Agents from scratch, covering tool selection, skills, files, environment settings, and vault credentials. Emits YAML setup definitions and SDK runtime code for deployment.

### 6.3 Streaming, Batching & Tool Use API Patterns

Operational references for streaming responses, asynchronous batch processing, tool use patterns (tool runners and manual agentic loops), file uploads and management, and prompt caching optimization. Covers content-type handling, structured outputs, code execution, and design patterns for cache-hit architecture across Python and TypeScript.

#### 6.3.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference including sync/async streaming, handling different content types (text, thinking, tool use), and best practices.

#### 6.3.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, handling different content types, tool use integration, and event types.

#### 6.3.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference covering batch creation, status polling, result retrieval, and cost savings at 50% of standard pricing.

#### 6.3.4 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice, tool runner vs manual loops, server-side tools, and structured outputs.

#### 6.3.5 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference covering tool runner, manual agentic loops, code execution, memory tools, and structured outputs with examples.

#### 6.3.6 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner, manual agentic loops, code execution, memory tools, and structured outputs with examples.

#### 6.3.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages with documents and images, file management (list/retrieve/delete/download), and end-to-end examples.

#### 6.3.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript reference for the Files API, covering file upload, listing, deletion, and usage in messages with examples for PDFs, documents, and file management operations.

#### 6.3.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Guide on designing prompt-building code for effective caching, including placement patterns, anti-patterns, and architectural decisions for cache hits.

### 6.4 Agent Design & LLM Application Building

Strategic guides for designing agents and LLM applications with Claude, including tool-surface architecture decisions, context management patterns, model selection and migration, thinking/effort configuration, and API surface choices (Claude API vs. Managed Agents). Features interactive agents for custom agent creation, documentation navigation, and migration planning across SDK versions.

#### 6.4.1 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide for building agents on the Claude API, covering tool surface design decisions (bash vs. dedicated tools), context management patterns (editing, compaction, memory), caching strategies, and composition techniques like programmatic tool calling.

#### 6.4.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Quick-reference navigation template for language-specific Claude API documentation, mapping common tasks (streaming, batches, tool-use, agents) to their corresponding documentation files.

#### 6.4.3 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Comprehensive guide for building LLM applications with Claude, including language detection, API surface selection (Claude API vs. Managed Agents), model defaults, thinking/effort configuration, and language-specific documentation reading with detailed decision trees and checklists.

#### 6.4.4 [Model migration guide (Skill)](system-prompts/skill-model-migration-guide.md)

Step-by-step instructions for migrating existing code to newer Claude models, covering breaking changes, deprecated parameters, per-SDK syntax, prompt-behavior shifts, and comprehensive migration checklists for Opus 4.6, Sonnet 4.6, and Opus 4.7.

#### 6.4.5 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces a JSON object with agent identifier, usage context with examples, and a complete operational system prompt.

#### 6.4.6 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with code examples and documentation links.

#### 6.4.7 [Anthropic CLI (Data)](system-prompts/data-anthropic-cli.md)

Reference documentation for the ant CLI covering installation, authentication, command structure, input/output shaping with --transform and --format, managed agents workflows, and scripting patterns for control-plane operations.

---

## 7. Workflow Automation, Scheduling & Team Enablement

Recurring task scheduling, CI/CD integration, slash command skills, usage analytics, team onboarding, user interaction patterns, web search, and resource monitoring.

### 7.1 Scheduling & Background Automation

Cron scheduling, dynamic self-paced loops, event-driven wakeups, and GitHub Actions integration for triggering Claude in CI/CD workflows.

#### 7.1.1 Scheduling & Automation

Orchestrates recurring and one-time task execution through cron scheduling, dynamic self-paced loops, and event-driven wakeups. Optimizes for load distribution, prompt cache efficiency, and natural follow-up automation. Supports both cloud-based scheduling for long intervals and local session loops with fallback heartbeat mechanisms.

##### 7.1.1.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron-based jobs using standard 5-field cron syntax in user's local timezone. Avoid :00 and :30 minute marks when possible to distribute load; add jitter automatically; recurring tasks auto-expire after configurable days.

##### 7.1.1.2 [ScheduleWakeup (/loop dynamic mode) [Tool Description]](system-prompts/tool-description-schedulewakeup-loop-dynamic-mode.md)

Schedule next iteration in /loop dynamic (self-paced) mode. Pass same /loop prompt or autonomous-loop sentinel to repeat task; omit call to end loop.

##### 7.1.1.3 [Snooze (delay and reason guidance) [Tool Description]](system-prompts/tool-description-snooze-delay-and-reason-guidance.md)

Schedules work resumption in /loop dynamic mode with guidance on choosing delaySeconds relative to the 5-minute prompt cache TTL. Recommends staying under 270s to preserve cache, or committing to 1200s+ to amortize the cache miss, with specific reasoning in the reason field.

##### 7.1.1.4 [Schedule proactive offer guidance (Tool Description)](system-prompts/tool-description-schedule-proactive-offer-guidance.md)

Schedule recurring or one-time remote agents for future work. Proactively offer scheduling after successful work with natural follow-ups like feature rollouts, new monitors, or cleanup tasks.

##### 7.1.1.5 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts interval to cron expression, and schedules a recurring task with immediate execution.

##### 7.1.1.6 [/loop slash command (dynamic mode) [Skill]](system-prompts/skill-loop-slash-command-dynamic-mode.md)

Parses user input into an interval and prompt for scheduling recurring or dynamically self-paced loop executions with three parsing rules and dynamic mode fallback.

##### 7.1.1.7 [/loop self-pacing mode (Skill)](system-prompts/skill-loop-self-pacing-mode.md)

Instructions for self-pacing a recurring loop by arming event monitors as primary wake signals and scheduling fallback heartbeat delays between iterations.

##### 7.1.1.8 [/loop cloud-first scheduling offer (Skill)](system-prompts/skill-loop-cloud-first-scheduling-offer.md)

Decision tree that offers cloud-based scheduling for intervals ≥60 minutes or daily phrasing before falling back to local session loops.

##### 7.1.1.9 [Dynamic pacing loop execution (Skill)](system-prompts/skill-dynamic-pacing-loop-execution.md)

Instructions for executing a dynamic pacing loop that runs tasks, arms persistent event monitors as primary wake signals, schedules fallback heartbeat delays, and handles task notifications.

##### 7.1.1.10 [Schedule recurring cron and execute immediately (compact) [Skill]](system-prompts/skill-schedule-recurring-cron-and-execute-immediately-compact.md)

Creates a recurring cron job, confirms the schedule with the user, and immediately executes the parsed prompt without waiting for the first cron fire.

##### 7.1.1.11 [Schedule recurring cron and run immediately (Skill)](system-prompts/skill-schedule-recurring-cron-and-run-immediately.md)

Converts an interval to a cron expression, schedules a recurring task, confirms to the user, and immediately executes the task without waiting for the first cron fire.

##### 7.1.1.12 [Proactive schedule offer after follow-up work (System Prompt)](system-prompts/system-prompt-proactive-schedule-offer-after-follow-up-work.md)

Instructs Claude to offer scheduling background agents for natural follow-up actions like flag cleanup, metric verification, or recurring tasks when completion odds exceed 70%.

##### 7.1.1.13 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers or one-time runs via Anthropic's cloud API, handling environment selection, MCP connector validation, timezone conversion, and routine management.

##### 7.1.1.14 [Loop wakeup not scheduled (System Reminder)](system-prompts/system-reminder-loop-wakeup-not-scheduled.md)

Instructs Claude on handling /loop dynamic mode wakeups that were not scheduled, distinguishing between cases where the prompt field was set versus unset and specifying when to re-issue with the prompt field populated.

#### 7.1.2 GitHub Actions & CI/CD Integration

Automation framework for triggering Claude Code within GitHub workflows. Enables Claude to respond to mentions in issues and pull requests through configurable Actions workflows and provides installation templates for the Claude Code GitHub App.

##### 7.1.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code integration when @claude is mentioned in issues, PRs, or comments, with configurable permissions and custom prompts.

##### 7.1.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing the Claude Code GitHub App, explaining what Claude Code does, how it works, and security considerations.

### 7.2 Skills, Commands & Operational Modes

Reusable slash commands for debugging and diagnostics, minimal-mode configuration that strips background automation, and learning modes for collaborative education.

#### 7.2.1 Skill System & Slash Commands

Enables specialized capabilities through reusable slash commands that handle debugging, diagnostics, permission management, and scheduled tasks like daily briefings and meeting prep, with a framework for converting repeatable workflows into persistent skills.

##### 7.2.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Invokes specialized skills (slash commands) within conversations by matching user requests to available skills listed in system reminders. Must invoke the tool before generating other responses when a skill matches the user's request.

##### 7.2.1.2 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-step process to convert repeatable session workflows into reusable skills: analyze the session, interview the user via AskUserQuestion, write SKILL.md with structured metadata and steps, and confirm before saving.

##### 7.2.1.3 [Debugging (Skill)](system-prompts/skill-debugging.md)

Helps debug issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 7.2.1.4 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, checking CPU/memory/state, gathering debug context, and posting diagnostic reports to Slack.

##### 7.2.1.5 [Generate permission allowlist from transcripts (Skill)](system-prompts/skill-generate-permission-allowlist-from-transcripts.md)

Analyzes session transcripts to extract frequently used read-only tool patterns and adds them to the project's permission allowlist to reduce permission prompts, with careful filtering to exclude arbitrary code execution.

##### 7.2.1.6 [/catch-up periodic heartbeat (Skill)](system-prompts/skill-catch-up-periodic-heartbeat.md)

Periodic task that scans user priorities, checks for actionable changes, and surfaces a brief digest of what matters now—only reporting when something is actionable, time-sensitive, or can be taken off the user's plate.

##### 7.2.1.7 [/morning-checkin daily brief (Skill)](system-prompts/skill-morning-checkin-daily-brief.md)

Scheduled task that prepares a daily calendar and inbox digest, schedules pre-meeting check-ins, and records the day's top priority in a scannable brief format.

##### 7.2.1.8 [/pre-meeting-checkin event brief (Skill)](system-prompts/skill-pre-meeting-checkin-event-brief.md)

Fires minutes before a calendar event to gather materials, recent context, open questions, and deliver a concise meeting brief so the user is ready.

#### 7.2.2 Minimal Mode & Feature Configuration

Operational modes that strip away background automation and plugin infrastructure, requiring explicit configuration through command-line arguments while isolating temporary artifacts to session-specific directories.

##### 7.2.2.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode operation that disables hooks, LSP, plugins, auto-memory, and background features while requiring explicit context via CLI flags for authentication and configuration.

##### 7.2.2.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

#### 7.2.3 Learning & Educational Modes

Enables hands-on collaborative learning by pausing for human input on design decisions, providing implementation insights, and guiding users through tasks with interactive overlays. Balances task completion with educational scaffolding.

##### 7.2.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Defines learning mode behavior where Claude balances task completion with hands-on education by requesting human contributions on design decisions, using TodoList tracking and Learn by Doing request patterns with TODO(human) markers.

##### 7.2.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Instructs Claude to provide brief educational insights before and after code changes when learning mode is active, focusing on implementation choices specific to the codebase.

##### 7.2.3.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Request permission to guide user through tasks step-by-step with fullscreen tooltip overlays. Use when user wants to learn (phrases like 'teach me', 'walk me through').

### 7.3 Team Analytics & Onboarding

Session data analysis for friction detection and coaching insights, plus templates and checklists for introducing new team members to Claude Code.

#### 7.3.1 Usage Insights & Analytics

Analyzes Claude Code session data to extract friction patterns, satisfaction signals, and usage behaviors, then synthesizes findings into coaching insights, actionable suggestions, and onboarding guides that help teams optimize their interaction style and discover emerging autonomous workflows.

##### 7.3.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part insights summary (what's working, hindrances, quick wins, ambitious workflows) for Claude Code usage reports, using aggregated session data and friction patterns to coach users on improving their interaction style.

##### 7.3.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes aggregated Claude Code usage data to identify and categorize recurring friction patterns with concrete examples, helping users understand where interactions break down.

##### 7.3.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, including parallel agents and test-driven iteration patterns.

##### 7.3.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including user-requested goals, satisfaction signals, and friction types, with strict guidelines to count only explicit user requests and base satisfaction on observable signals.

##### 7.3.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to observed session behavior.

##### 7.3.1.6 [/insights report output (Skill)](system-prompts/skill-insights-report-output.md)

Formats and displays the insights usage report results after the user runs the /insights slash command, showing shareable report URL and facets directory.

##### 7.3.1.7 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides by analyzing usage data, classifying session types into work categories, and iteratively refining ONBOARDING.md with team name, tips, and starter tasks.

#### 7.3.2 Onboarding & Team Setup

Provides templates and guidance for introducing new team members to Claude Code, covering setup checklists, available tools, team practices, and communication principles that establish shared expectations and warm collaboration.

##### 7.3.2.1 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding a new teammate to a team's Claude Code setup, walking them through usage stats, setup checklists, MCP servers, skills, and team tips in a warm conversational style.

##### 7.3.2.2 [Assistant voice and values template (Data)](system-prompts/data-assistant-voice-and-values-template.md)

Template content describing Claude's voice and values: prioritizing user time, getting it right, honesty, handling sensitive access, and showing up warm, smart, direct, collaborative, and steady.

##### 7.3.2.3 [Background agent state classification examples (Data)](system-prompts/data-background-agent-state-classification-examples.md)

Example assistant-message tails and JSON outputs for classifying background agent state (working/blocked/done/failed), tempo, needs, and results.

### 7.4 User Interaction, Search & Resource Monitoring

Interactive questioning and desktop notifications during task execution, real-time web search with source attribution, and token and cost budget tracking.

#### 7.4.1 User Interaction & Communication

Channels for soliciting user input, presenting choices, and delivering updates throughout task execution. Encompasses interactive questioning with optional visual previews, desktop notifications for time-sensitive events, and structured messaging patterns that maintain clarity during long-running operations.

##### 7.4.1.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use AskUserQuestion for gathering preferences, clarifying ambiguities, and presenting implementation choices during execution, with special handling for plan mode approval.

##### 7.4.1.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Describes the optional preview field for single-select questions to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML.

##### 7.4.1.3 [PushNotification (Tool Description)](system-prompts/tool-description-pushnotification.md)

Send desktop notifications to terminal and phone (if Remote Control connected). Use sparingly for important events requiring user attention, keeping messages under 200 characters.

##### 7.4.1.4 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to route all user-facing replies through SendUserMessage, with guidance on acknowledgment patterns, checkpoints for long work, and keeping messages tight with decision-focused information.

##### 7.4.1.5 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs brief user-facing updates at key moments, concise end-of-turn summaries, matching response format to task complexity, and avoiding comments and planning documents in code.

##### 7.4.1.6 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Defines optional preview field for presenting concrete UI artifacts (ASCII mockups, code snippets, diagrams) in side-by-side layout for visual comparison during single-select questions.

##### 7.4.1.7 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Configures lightweight side-question handling where Claude answers without tools, context, or follow-up capability while main agent continues independently.

#### 7.4.2 Web Search & Content Retrieval

Real-time information gathering and content analysis beyond training data. Combines web search for current events with HTML-to-markdown conversion and intelligent summarization, enforcing source attribution and applying domain-based content filtering.

##### 7.4.2.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a fast model. Supports URL redirects, includes a 15-minute cache, and prefers MCP-provided alternatives when available. Recommends gh CLI for GitHub URLs.

##### 7.4.2.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff and returns results as markdown hyperlinks. Requires mandatory Sources section listing all relevant URLs after the answer. Supports domain filtering and requires using current year in queries.

##### 7.4.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing quote limits and paraphrasing rules for untrusted domains while allowing full content from trusted sources.

#### 7.4.3 Resource & Budget Monitoring

Visibility into computational and financial resource consumption. Tracks token usage and USD spending in real time, with guidance on calibrating reasoning depth to task complexity for efficient resource allocation.

##### 7.4.3.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 7.4.3.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including spent, total, and remaining amounts.

##### 7.4.3.3 [Thinking frequency tuning (System Reminder)](system-prompts/system-reminder-thinking-frequency-tuning.md)

Instructs Claude to calibrate thinking frequency based on task complexity, using minimal reasoning for simple tasks and deeper reasoning for complex ones.
