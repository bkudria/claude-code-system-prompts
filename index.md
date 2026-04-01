# Claude Code System Prompts Index

Operational guidance and reference material for building, running, and extending Claude Code agents — covering everything needed to go from a single shell command to a coordinated multi-agent system operating safely across real codebases and infrastructure.

## Table of Contents

1. [Bash and Shell Command Execution](#1-bash-and-shell-command-execution)
   1. [Bash Sandbox Policy & Enforcement](#11-bash-sandbox-policy-enforcement)
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
   2. [Bash Execution & Command Composition](#12-bash-execution-command-composition)
      1. [Bash (quote file paths) [Tool Description]](#121-bash-quote-file-paths-tool-description)
      2. [Bash (semicolon usage) [Tool Description]](#122-bash-semicolon-usage-tool-description)
      3. [Bash (sequential commands) [Tool Description]](#123-bash-sequential-commands-tool-description)
      4. [Bash (sleep — keep short) [Tool Description]](#124-bash-sleep-—-keep-short-tool-description)
      5. [Bash (sleep — no polling background tasks) [Tool Description]](#125-bash-sleep-—-no-polling-background-tasks-tool-description)
      6. [Bash (sleep — run immediately) [Tool Description]](#126-bash-sleep-—-run-immediately-tool-description)
      7. [Bash (sleep — use check commands) [Tool Description]](#127-bash-sleep-—-use-check-commands-tool-description)
      8. [Bash (timeout) [Tool Description]](#128-bash-timeout-tool-description)
      9. [Bash (no newlines) [Tool Description]](#129-bash-no-newlines-tool-description)
      10. [Bash (overview) [Tool Description]](#1210-bash-overview-tool-description)
      11. [Bash (parallel commands) [Tool Description]](#1211-bash-parallel-commands-tool-description)
      12. [Bash (maintain cwd) [Tool Description]](#1212-bash-maintain-cwd-tool-description)
      13. [Bash (working directory) [Tool Description]](#1213-bash-working-directory-tool-description)
      14. [Bash (verify parent directory) [Tool Description]](#1214-bash-verify-parent-directory-tool-description)
      15. [Bash (alternative — communication) [Tool Description]](#1215-bash-alternative-—-communication-tool-description)
      16. [Bash (alternative — content search) [Tool Description]](#1216-bash-alternative-—-content-search-tool-description)
      17. [Bash (alternative — edit files) [Tool Description]](#1217-bash-alternative-—-edit-files-tool-description)
      18. [Bash (alternative — file search) [Tool Description]](#1218-bash-alternative-—-file-search-tool-description)
      19. [Bash (alternative — read files) [Tool Description]](#1219-bash-alternative-—-read-files-tool-description)
      20. [Bash (alternative — write files) [Tool Description]](#1220-bash-alternative-—-write-files-tool-description)
      21. [Bash (built-in tools note) [Tool Description]](#1221-bash-built-in-tools-note-tool-description)
      22. [Bash (prefer dedicated tools) [Tool Description]](#1222-bash-prefer-dedicated-tools-tool-description)
   3. [Bash Git Workflow & Safety](#13-bash-git-workflow-safety)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#131-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#132-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#133-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#134-bash-git-—-prefer-new-commits-tool-description)
   4. [PowerShell & Windows Environment](#14-powershell-windows-environment)
      1. [PowerShell edition for 5.1 (System Prompt)](#141-powershell-edition-for-51-system-prompt)
      2. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#142-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
      3. [One of six rules for using sleep command (System Prompt)](#143-one-of-six-rules-for-using-sleep-command-system-prompt)
2. [File System, Tools, and Notifications](#2-file-system-tools-and-notifications)
   1. [File Access and Editing](#21-file-access-and-editing)
      1. [File System Tools: Read, Write, Edit, Grep, Glob](#211-file-system-tools-read-write-edit-grep-glob)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Edit (Tool Description)](#2113-edit-tool-description)
         4. [Grep (Tool Description)](#2114-grep-tool-description)
         5. [LSP (Tool Description)](#2115-lsp-tool-description)
      2. [Task & Todo Management Tools](#212-task-todo-management-tools)
         1. [TodoWrite (Tool Description)](#2121-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#2122-taskcreate-tool-description)
         3. [Sleep (Tool Description)](#2123-sleep-tool-description)
   2. [Tool Selection and Specialized Capabilities](#22-tool-selection-and-specialized-capabilities)
      1. [Tool Usage Policy](#221-tool-usage-policy)
         1. [Tool usage (create files) [System Prompt]](#2211-tool-usage-create-files-system-prompt)
         2. [Tool usage (delegate exploration) [System Prompt]](#2212-tool-usage-delegate-exploration-system-prompt)
         3. [Tool usage (direct search) [System Prompt]](#2213-tool-usage-direct-search-system-prompt)
         4. [Tool usage (edit files) [System Prompt]](#2214-tool-usage-edit-files-system-prompt)
         5. [Tool usage (read files) [System Prompt]](#2215-tool-usage-read-files-system-prompt)
         6. [Tool usage (reserve Bash) [System Prompt]](#2216-tool-usage-reserve-bash-system-prompt)
         7. [Tool usage (search content) [System Prompt]](#2217-tool-usage-search-content-system-prompt)
         8. [Tool usage (search files) [System Prompt]](#2218-tool-usage-search-files-system-prompt)
         9. [Tool usage (skill invocation) [System Prompt]](#2219-tool-usage-skill-invocation-system-prompt)
         10. [Tool usage (subagent guidance) [System Prompt]](#22110-tool-usage-subagent-guidance-system-prompt)
         11. [Tool usage (task management) [System Prompt]](#22111-tool-usage-task-management-system-prompt)
         12. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#22112-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      2. [Specialized Tool Descriptions](#222-specialized-tool-descriptions)
         1. [AskUserQuestion (Tool Description)](#2221-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#2222-askuserquestion-preview-field-tool-description)
         3. [Skill (Tool Description)](#2223-skill-tool-description)
         4. [ToolSearch (second part) [Tool Description]](#2224-toolsearch-second-part-tool-description)
         5. [NotebookEdit (Tool Description)](#2225-notebookedit-tool-description)
         6. [PowerShell (Tool Description)](#2226-powershell-tool-description)
   3. [System Notifications and Hook Events](#23-system-notifications-and-hook-events)
      1. [File & IDE Context Notifications](#231-file-ide-context-notifications)
         1. [File shorter than offset (System Reminder)](#2311-file-shorter-than-offset-system-reminder)
         2. [File truncated (System Reminder)](#2312-file-truncated-system-reminder)
         3. [File exists but empty (System Reminder)](#2313-file-exists-but-empty-system-reminder)
         4. [File modified by user or linter (System Reminder)](#2314-file-modified-by-user-or-linter-system-reminder)
         5. [File opened in IDE (System Reminder)](#2315-file-opened-in-ide-system-reminder)
         6. [Lines selected in IDE (System Reminder)](#2316-lines-selected-in-ide-system-reminder)
         7. [Compact file reference (System Reminder)](#2317-compact-file-reference-system-reminder)
      2. [Hook Lifecycle & Execution Events](#232-hook-lifecycle-execution-events)
         1. [Hook additional context (System Reminder)](#2321-hook-additional-context-system-reminder)
         2. [Hook blocking error (System Reminder)](#2322-hook-blocking-error-system-reminder)
         3. [Hook stopped continuation prefix (System Reminder)](#2323-hook-stopped-continuation-prefix-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#2324-hook-stopped-continuation-system-reminder)
         5. [Hook success (System Reminder)](#2325-hook-success-system-reminder)
3. [Multi-Agent Orchestration and Planning](#3-multi-agent-orchestration-and-planning)
   1. [Agent Spawning and Team Coordination](#31-agent-spawning-and-team-coordination)
      1. [Multi-Agent Team Coordination](#311-multi-agent-team-coordination)
         1. [Team Coordination (System Reminder)](#3111-team-coordination-system-reminder)
         2. [Team Shutdown (System Reminder)](#3112-team-shutdown-system-reminder)
         3. [Agent mention (System Reminder)](#3113-agent-mention-system-reminder)
         4. [/btw side question (System Reminder)](#3114-btw-side-question-system-reminder)
      2. [Team & Agent Communication Infrastructure](#312-team-agent-communication-infrastructure)
         1. [Team memory content display (System Prompt)](#3121-team-memory-content-display-system-prompt)
         2. [Teammate Communication (System Prompt)](#3122-teammate-communication-system-prompt)
         3. [Writing subagent prompts (System Prompt)](#3123-writing-subagent-prompts-system-prompt)
         4. [Subagent delegation examples (System Prompt)](#3124-subagent-delegation-examples-system-prompt)
         5. [How to use the SendUserMessage tool (System Prompt)](#3125-how-to-use-the-sendusermessage-tool-system-prompt)
         6. [SendMessageTool (Tool Description)](#3126-sendmessagetool-tool-description)
         7. [SendMessageTool (non-agent-teams) [Tool Description]](#3127-sendmessagetool-non-agent-teams-tool-description)
         8. [TaskList (teammate workflow) [Tool Description]](#3128-tasklist-teammate-workflow-tool-description)
         9. [TeammateTool (Tool Description)](#3129-teammatetool-tool-description)
         10. [TeamDelete (Tool Description)](#31210-teamdelete-tool-description)
      3. [Agent Spawning & Subagent Orchestration](#313-agent-spawning-subagent-orchestration)
         1. [Agent (usage notes) [Tool Description]](#3131-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#3132-agent-when-to-launch-subagents-tool-description)
         3. [Worker fork execution (Agent Prompt)](#3133-worker-fork-execution-agent-prompt)
         4. [General purpose (Agent Prompt)](#3134-general-purpose-agent-prompt)
         5. [Explore (Agent Prompt)](#3135-explore-agent-prompt)
   2. [Planning Workflows and Execution Modes](#32-planning-workflows-and-execution-modes)
      1. [Planning Mode Management](#321-planning-mode-management)
         1. [Plan file reference (System Reminder)](#3211-plan-file-reference-system-reminder)
         2. [Plan mode is active (5-phase) [System Reminder]](#3212-plan-mode-is-active-5-phase-system-reminder)
         3. [Plan mode is active (iterative) [System Reminder]](#3213-plan-mode-is-active-iterative-system-reminder)
         4. [Plan mode is active (subagent) [System Reminder]](#3214-plan-mode-is-active-subagent-system-reminder)
         5. [Plan mode re-entry (System Reminder)](#3215-plan-mode-re-entry-system-reminder)
         6. [Exited plan mode (System Reminder)](#3216-exited-plan-mode-system-reminder)
         7. [Ultraplan mode (System Reminder)](#3217-ultraplan-mode-system-reminder)
         8. [Verify plan reminder (System Reminder)](#3218-verify-plan-reminder-system-reminder)
      2. [Planning Mode: Tools & Workflow](#322-planning-mode-tools-workflow)
         1. [EnterPlanMode (Tool Description)](#3221-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3222-exitplanmode-tool-description)
         3. [Phase four of plan mode (System Prompt)](#3223-phase-four-of-plan-mode-system-prompt)
         4. [Remote plan mode (ultraplan) [System Prompt]](#3224-remote-plan-mode-ultraplan-system-prompt)
         5. [Remote planning session (System Prompt)](#3225-remote-planning-session-system-prompt)
         6. [Plan mode (enhanced) [Agent Prompt]](#3226-plan-mode-enhanced-agent-prompt)
      3. [Autonomous & Auto Mode Execution](#323-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#3231-auto-mode-system-prompt)
         2. [Executing actions with care (System Prompt)](#3232-executing-actions-with-care-system-prompt)
         3. [Fork usage guidelines (System Prompt)](#3233-fork-usage-guidelines-system-prompt)
         4. [Tool execution denied (System Prompt)](#3234-tool-execution-denied-system-prompt)
      4. [Batch Processing & Parallel Work Decomposition](#324-batch-processing-parallel-work-decomposition)
         1. [/batch slash command (Agent Prompt)](#3241-batch-slash-command-agent-prompt)
         2. [Worker instructions (System Prompt)](#3242-worker-instructions-system-prompt)
4. [Session State, Memory, and Context](#4-session-state-memory-and-context)
   1. [Memory and Knowledge Persistence](#41-memory-and-knowledge-persistence)
      1. [Memory & MCP Resources](#411-memory-mcp-resources)
         1. [Memory file contents (System Reminder)](#4111-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#4112-nested-memory-contents-system-reminder)
         3. [MCP resource no content (System Reminder)](#4113-mcp-resource-no-content-system-reminder)
         4. [MCP resource no displayable content (System Reminder)](#4114-mcp-resource-no-displayable-content-system-reminder)
      2. [Memory Systems & Knowledge Persistence](#412-memory-systems-knowledge-persistence)
         1. [Agent memory instructions (System Prompt)](#4121-agent-memory-instructions-system-prompt)
         2. [Description part of memory instructions (System Prompt)](#4122-description-part-of-memory-instructions-system-prompt)
         3. [Memory description of user feedback (System Prompt)](#4123-memory-description-of-user-feedback-system-prompt)
         4. [Determine which memory files to attach (Agent Prompt)](#4124-determine-which-memory-files-to-attach-agent-prompt)
         5. [Dream memory consolidation (Agent Prompt)](#4125-dream-memory-consolidation-agent-prompt)
         6. [Session memory update instructions (Agent Prompt)](#4126-session-memory-update-instructions-agent-prompt)
         7. [Update Magic Docs (Agent Prompt)](#4127-update-magic-docs-agent-prompt)
         8. [Session memory template (Data)](#4128-session-memory-template-data)
   2. [Session Tracking and Continuity](#42-session-tracking-and-continuity)
      1. [Session & Resource Tracking](#421-session-resource-tracking)
         1. [Token usage (System Reminder)](#4211-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#4212-usd-budget-system-reminder)
         3. [Session continuation (System Reminder)](#4213-session-continuation-system-reminder)
         4. [Invoked skills (System Reminder)](#4214-invoked-skills-system-reminder)
         5. [Task tools reminder (System Reminder)](#4215-task-tools-reminder-system-reminder)
         6. [TodoWrite reminder (System Reminder)](#4216-todowrite-reminder-system-reminder)
         7. [Output style active (System Reminder)](#4217-output-style-active-system-reminder)
         8. [New diagnostics detected (System Reminder)](#4218-new-diagnostics-detected-system-reminder)
      2. [Context Management & Conversation Compaction](#422-context-management-conversation-compaction)
         1. [Context compaction summary (System Prompt)](#4221-context-compaction-summary-system-prompt)
         2. [Partial compaction instructions (System Prompt)](#4222-partial-compaction-instructions-system-prompt)
         3. [Conversation summarization (Agent Prompt)](#4223-conversation-summarization-agent-prompt)
         4. [Recent Message Summarization (Agent Prompt)](#4224-recent-message-summarization-agent-prompt)
      3. [Session Management & Search](#423-session-management-search)
         1. [Coding session title generator (Agent Prompt)](#4231-coding-session-title-generator-agent-prompt)
         2. [Session title and branch generation (Agent Prompt)](#4232-session-title-and-branch-generation-agent-prompt)
         3. [Session Search Assistant (Agent Prompt)](#4233-session-search-assistant-agent-prompt)
   3. [Runtime Environment and Display](#43-runtime-environment-and-display)
      1. [Operational Modes & Environment Configuration](#431-operational-modes-environment-configuration)
         1. [Minimal mode (System Prompt)](#4311-minimal-mode-system-prompt)
         2. [Scratchpad directory (System Prompt)](#4312-scratchpad-directory-system-prompt)
         3. [MCP Tool Result Truncation (System Prompt)](#4313-mcp-tool-result-truncation-system-prompt)
         4. [Advisor tool instructions (System Prompt)](#4314-advisor-tool-instructions-system-prompt)
      2. [Agent Status & Terminal Display](#432-agent-status-terminal-display)
         1. [Status line setup (Agent Prompt)](#4321-status-line-setup-agent-prompt)
5. [GitHub, CI/CD, and Development Workflow](#5-github-cicd-and-development-workflow)
   1. [GitHub and Pull Request Automation](#51-github-and-pull-request-automation)
      1. [GitHub & PR Workflow Agents](#511-github-pr-workflow-agents)
         1. [Quick git commit (Agent Prompt)](#5111-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#5112-quick-pr-creation-agent-prompt)
         3. [/pr-comments slash command (Agent Prompt)](#5113-pr-comments-slash-command-agent-prompt)
         4. [/review-pr slash command (Agent Prompt)](#5114-review-pr-slash-command-agent-prompt)
         5. [GitHub App installation PR description (Data)](#5115-github-app-installation-pr-description-data)
         6. [GitHub Actions workflow for @claude mentions (Data)](#5116-github-actions-workflow-for-claude-mentions-data)
      2. [Git Worktree & Branch Management](#512-git-worktree-branch-management)
         1. [EnterWorktree (Tool Description)](#5121-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#5122-exitworktree-tool-description)
         3. [Git status (System Prompt)](#5123-git-status-system-prompt)
   2. [Project Configuration and Scheduling](#52-project-configuration-and-scheduling)
      1. [Configuration & Settings Management](#521-configuration-settings-management)
         1. [Config (Tool Description)](#5211-config-tool-description)
         2. [Update Claude Code Config (Skill)](#5212-update-claude-code-config-skill)
         3. [update-config (7-step verification flow) [Skill]](#5213-update-config-7-step-verification-flow-skill)
         4. [Hooks Configuration (System Prompt)](#5214-hooks-configuration-system-prompt)
         5. [/init CLAUDE.md and skill setup (new version) [Skill]](#5215-init-claudemd-and-skill-setup-new-version-skill)
      2. [Scheduling & Automation](#522-scheduling-automation)
         1. [CronCreate (Tool Description)](#5221-croncreate-tool-description)
         2. [/loop slash command (Skill)](#5222-loop-slash-command-skill)
         3. [/schedule slash command (Agent Prompt)](#5223-schedule-slash-command-agent-prompt)
   3. [Codebase Documentation and Skills](#53-codebase-documentation-and-skills)
      1. [Codebase Documentation & CLAUDE.md](#531-codebase-documentation-claudemd)
         1. [CLAUDE.md creation (Agent Prompt)](#5311-claudemd-creation-agent-prompt)
      2. [Skills System: Creation & Invocation](#532-skills-system-creation-invocation)
         1. [Skillify Current Session (System Prompt)](#5321-skillify-current-session-system-prompt)
         2. [Simplify (Skill)](#5322-simplify-skill)
         3. [Debugging (Skill)](#5323-debugging-skill)
         4. [/stuck slash command (Skill)](#5324-stuck-slash-command-skill)
6. [Claude API, SDK, and Integration References](#6-claude-api-sdk-and-integration-references)
   1. [Claude API Reference Documentation](#61-claude-api-reference-documentation)
      1. [Claude API reference — Python (Data)](#611-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#612-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#613-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#614-claude-api-reference-—-java-data)
      5. [Claude API reference — C# (Data)](#615-claude-api-reference-—-c-data)
      6. [Claude API reference — Ruby (Data)](#616-claude-api-reference-—-ruby-data)
      7. [Claude API reference — PHP (Data)](#617-claude-api-reference-—-php-data)
      8. [Claude API reference — cURL (Data)](#618-claude-api-reference-—-curl-data)
      9. [Claude model catalog (Data)](#619-claude-model-catalog-data)
   2. [Agent SDK Reference & Patterns](#62-agent-sdk-reference-patterns)
      1. [Agent SDK reference — Python (Data)](#621-agent-sdk-reference-—-python-data)
      2. [Agent SDK reference — TypeScript (Data)](#622-agent-sdk-reference-—-typescript-data)
      3. [Agent SDK patterns — Python (Data)](#623-agent-sdk-patterns-—-python-data)
      4. [Agent SDK patterns — TypeScript (Data)](#624-agent-sdk-patterns-—-typescript-data)
      5. [Build with Claude API (Skill)](#625-build-with-claude-api-skill)
      6. [Build with Claude API (reference guide) [Skill]](#626-build-with-claude-api-reference-guide-skill)
      7. [Claude guide agent (Agent Prompt)](#627-claude-guide-agent-agent-prompt)
   3. [API Features: Batches, Streaming, Files & Tool Use](#63-api-features-batches-streaming-files-tool-use)
      1. [Message Batches API reference — Python (Data)](#631-message-batches-api-reference-—-python-data)
      2. [Streaming reference — Python (Data)](#632-streaming-reference-—-python-data)
      3. [Streaming reference — TypeScript (Data)](#633-streaming-reference-—-typescript-data)
      4. [Files API reference — Python (Data)](#634-files-api-reference-—-python-data)
      5. [Files API reference — TypeScript (Data)](#635-files-api-reference-—-typescript-data)
      6. [Tool use concepts (Data)](#636-tool-use-concepts-data)
      7. [Tool use reference — Python (Data)](#637-tool-use-reference-—-python-data)
      8. [Tool use reference — TypeScript (Data)](#638-tool-use-reference-—-typescript-data)
      9. [Prompt Caching — Design & Optimization (Data)](#639-prompt-caching-—-design-optimization-data)
      10. [HTTP error codes reference (Data)](#6310-http-error-codes-reference-data)
      11. [Live documentation sources (Data)](#6311-live-documentation-sources-data)
7. [Code Quality, Security, and User-Facing Features](#7-code-quality-security-and-user-facing-features)
   1. [Engineering Practices and Security](#71-engineering-practices-and-security)
      1. [Code Quality & Task Execution Guidelines](#711-code-quality-task-execution-guidelines)
         1. [Doing tasks (ambitious tasks) [System Prompt]](#7111-doing-tasks-ambitious-tasks-system-prompt)
         2. [Doing tasks (help and feedback) [System Prompt]](#7112-doing-tasks-help-and-feedback-system-prompt)
         3. [Doing tasks (minimize file creation) [System Prompt]](#7113-doing-tasks-minimize-file-creation-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#7114-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no premature abstractions) [System Prompt]](#7115-doing-tasks-no-premature-abstractions-system-prompt)
         6. [Doing tasks (no time estimates) [System Prompt]](#7116-doing-tasks-no-time-estimates-system-prompt)
         7. [Doing tasks (no unnecessary additions) [System Prompt]](#7117-doing-tasks-no-unnecessary-additions-system-prompt)
         8. [Doing tasks (no unnecessary error handling) [System Prompt]](#7118-doing-tasks-no-unnecessary-error-handling-system-prompt)
         9. [Doing tasks (read before modifying) [System Prompt]](#7119-doing-tasks-read-before-modifying-system-prompt)
         10. [Doing tasks (security) [System Prompt]](#71110-doing-tasks-security-system-prompt)
         11. [Doing tasks (software engineering focus) [System Prompt]](#71111-doing-tasks-software-engineering-focus-system-prompt)
      2. [Code Verification & Testing](#712-code-verification-testing)
         1. [Verification specialist (Agent Prompt)](#7121-verification-specialist-agent-prompt)
         2. [Verify skill (Skill)](#7122-verify-skill-skill)
         3. [Verify CLI changes (example for Verify skill) [Skill]](#7123-verify-cli-changes-example-for-verify-skill-skill)
         4. [Verify server/API changes (example for Verify skill) [Skill]](#7124-verify-serverapi-changes-example-for-verify-skill-skill)
         5. [Create verifier skills (Skill)](#7125-create-verifier-skills-skill)
         6. [Agent Hook (Agent Prompt)](#7126-agent-hook-agent-prompt)
      3. [Security Monitoring & Review](#713-security-monitoring-review)
         1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#7131-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#7132-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         3. [/security-review slash command (Agent Prompt)](#7133-security-review-slash-command-agent-prompt)
         4. [Censoring assistance with malicious activities (System Prompt)](#7134-censoring-assistance-with-malicious-activities-system-prompt)
         5. [Malware analysis after Read tool call (System Reminder)](#7135-malware-analysis-after-read-tool-call-system-reminder)
   2. [Web Access and Browser Control](#72-web-access-and-browser-control)
      1. [Browser Automation & Computer Use](#721-browser-automation-computer-use)
         1. [Computer (Tool Description)](#7211-computer-tool-description)
         2. [Computer action (Tool Parameter)](#7212-computer-action-tool-parameter)
         3. [Chrome browser MCP tools (System Prompt)](#7213-chrome-browser-mcp-tools-system-prompt)
         4. [Claude in Chrome browser automation (System Prompt)](#7214-claude-in-chrome-browser-automation-system-prompt)
         5. [Computer Use MCP (Skill)](#7215-computer-use-mcp-skill)
      2. [Web Search & Content Retrieval](#722-web-search-content-retrieval)
         1. [WebSearch (Tool Description)](#7221-websearch-tool-description)
         2. [WebFetch (Tool Description)](#7222-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#7223-webfetch-summarizer-agent-prompt)
   3. [Agent Design and Analytics](#73-agent-design-and-analytics)
      1. [Agent Design & Configuration](#731-agent-design-configuration)
         1. [Agent creation architect (Agent Prompt)](#7311-agent-creation-architect-agent-prompt)
         2. [Auto mode rule reviewer (Agent Prompt)](#7312-auto-mode-rule-reviewer-agent-prompt)
         3. [Hook condition evaluator (Agent Prompt)](#7313-hook-condition-evaluator-agent-prompt)
         4. [Bash command description writer (Agent Prompt)](#7314-bash-command-description-writer-agent-prompt)
         5. [Bash command prefix detection (Agent Prompt)](#7315-bash-command-prefix-detection-agent-prompt)
      2. [Usage Insights & Analytics](#732-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#7321-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7322-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7323-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7324-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7325-insights-suggestions-system-prompt)
   4. [User Interaction and Communication](#74-user-interaction-and-communication)
      1. [Output Style & Communication Formatting](#741-output-style-communication-formatting)
         1. [Tone and style (code references) [System Prompt]](#7411-tone-and-style-code-references-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#7412-tone-and-style-concise-output-—-short-system-prompt)
         3. [Output efficiency (System Prompt)](#7413-output-efficiency-system-prompt)
         4. [Agent thread notes (System Prompt)](#7414-agent-thread-notes-system-prompt)
         5. [Agent Summary Generation (System Prompt)](#7415-agent-summary-generation-system-prompt)
      2. [Learning & Teaching Modes](#742-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#7421-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7422-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#7423-request_teach_access-part-of-teach-mode-tool-description)
      3. [Prompt Suggestion & UX Generation](#743-prompt-suggestion-ux-generation)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#7431-prompt-suggestion-generator-v2-agent-prompt)
         2. [Option previewer (System Prompt)](#7432-option-previewer-system-prompt)
         3. [Buddy Mode (System Prompt)](#7433-buddy-mode-system-prompt)

---

## 1. Bash and Shell Command Execution

Covers all aspects of running shell commands safely and effectively, from syntax and chaining patterns to sandbox enforcement, git safety, and Windows PowerShell compatibility.

### 1.1 Bash Sandbox Policy & Enforcement

Sandbox restrictions enforce mandatory isolation for all bash commands, with automatic detection and recovery from sandbox-caused failures. Commands retry with sandbox bypass only when evidence of restriction is present, and users are prompted before disabling isolation. Sensitive paths are never added to allowlists, and restrictions are evaluated per-command without persistent exceptions.

#### 1.1.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

#### 1.1.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Default to running commands within the sandbox; only bypass when the user explicitly asks or clear evidence of sandbox restriction exists.

#### 1.1.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox-caused failures.

#### 1.1.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header text introducing the list of indicators that identify sandbox-caused command failures.

#### 1.1.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox-caused failures.

#### 1.1.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors for file and network operations signal sandbox-caused failures.

#### 1.1.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox-caused failures.

#### 1.1.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused the failure and mention the `/sandbox` command for managing restrictions.

#### 1.1.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Identifies the condition when a command fails with evidence of sandbox restrictions, distinguishing sandbox-related failures from other causes.

#### 1.1.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.1.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.1.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

#### 1.1.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; even after running a command with dangerouslyDisableSandbox, default to sandbox for subsequent commands.

#### 1.1.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header text introducing how to respond when sandbox-caused failures are detected.

#### 1.1.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true when sandbox failure is detected, without asking the user.

#### 1.1.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly.

#### 1.1.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will prompt the user for permission.

### 1.2 Bash Execution & Command Composition

Bash commands should use proper quoting for file paths, chain dependent operations with && for failure propagation, and run independent commands as parallel tool calls. Dedicated tools are preferred over bash equivalents for file operations, searching, and editing to improve user experience. Sleep operations should be minimal and avoid polling background tasks, while working directory persists across commands without requiring explicit cd.

#### 1.2.1 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

#### 1.2.2 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier command failures are acceptable.

#### 1.2.3 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call to ensure sequential execution with failure propagation.

#### 1.2.4 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.2.5 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

#### 1.2.6 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; execute them directly.

#### 1.2.7 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like gh run view to poll external processes instead of sleeping first.

#### 1.2.8 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Optionally specify a timeout in milliseconds up to the maximum allowed; commands default to a system-defined timeout.

#### 1.2.9 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instruction to avoid using newlines to separate commands in bash.

#### 1.2.10 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Basic description that the Bash tool executes bash commands and returns their output.

#### 1.2.11 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instruction to run independent bash commands as parallel tool calls in a single message for optimal performance.

#### 1.2.12 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instruction to maintain current working directory by using absolute paths and avoiding cd unless explicitly requested.

#### 1.2.13 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Explains that working directory persists between bash commands but shell state does not, with environment initialized from user profile.

#### 1.2.14 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directories exist before creating files or directories using the bash tool.

#### 1.2.15 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instruction to output text directly instead of using echo or printf.

#### 1.2.16 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instruction to use the Grep tool for content search instead of grep or rg commands.

#### 1.2.17 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instruction to use the Edit tool for file editing instead of sed or awk.

#### 1.2.18 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instruction to use the Glob tool for file search instead of find or ls.

#### 1.2.19 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instruction to use the Read tool for file reading instead of cat, head, or tail.

#### 1.2.20 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instruction to use the Write tool for file writing instead of echo or cat.

#### 1.2.21 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Note that built-in dedicated tools provide better user experience and easier permission review than Bash equivalents.

#### 1.2.22 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warning to avoid using Bash for find, grep, cat and similar commands unless explicitly instructed, preferring dedicated tools for better user experience.

### 1.3 Bash Git Workflow & Safety

Git operations prioritize safety by avoiding destructive commands like force push and reset without careful consideration, never skipping hooks or signing requirements, and preferring new commits over amendments. Commits and pull requests follow structured protocols including hook execution, proper message drafting, and gh command usage for PR creation.

#### 1.3.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instruction to consider safer alternatives before running destructive git operations like reset, force push, or checkout.

#### 1.3.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Detailed instructions for creating git commits and GitHub pull requests, covering safety protocols, parallel command execution, hook handling, commit message drafting, and PR creation with gh command.

#### 1.3.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instruction to never skip hooks or bypass signing unless explicitly requested by user, and to investigate and fix underlying issues if hooks fail.

#### 1.3.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instruction to prefer creating new commits over amending existing commits.

### 1.4 PowerShell & Windows Environment

Guidance for executing commands in Windows PowerShell 5.1, addressing language limitations, encoding quirks, and performance optimization. Emphasizes avoiding sleep-based polling in favor of background execution and proper error diagnosis.

#### 1.4.1 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 limitations including absence of pipeline chain operators, ternary operators, stderr redirection quirks, and UTF-16 LE default encoding.

#### 1.4.2 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Provides guidelines for avoiding unnecessary `Start-Sleep` commands in PowerShell scripts, recommending use of `run_in_background` for long-running commands and polling alternatives instead of sleep loops.

#### 1.4.3 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; instead diagnose the root cause.

---

## 2. File System, Tools, and Notifications

Filesystem read/write/search operations, tool selection hierarchy, task management, and system notifications about file state changes and hook lifecycle events.

### 2.1 File Access and Editing

Direct filesystem tools for reading, writing, editing, searching, and navigating codebases.

#### 2.1.1 File System Tools: Read, Write, Edit, Grep, Glob

Comprehensive filesystem operations spanning file reading across multiple formats, precise text editing, powerful content search, and code intelligence through language server integration.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from filesystem with support for images, PDFs (with page ranges), Jupyter notebooks, and screenshots, using absolute paths and configurable line limits.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Write creates or completely rewrites files to the local filesystem, with guidance to prefer Edit for modifications and restrictions against creating documentation files unless explicitly requested.

##### 2.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with requirements to preserve indentation, avoid line-number prefixes in match strings, and use replace_all for non-unique patterns.

##### 2.1.1.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based content search supporting regex, file filtering, and multiple output modes, with guidance to always use this tool instead of bash grep commands.

##### 2.1.1.5 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Language Server Protocol integration providing code intelligence operations including go-to-definition, find-references, hover information, symbol search, and call hierarchy analysis.

#### 2.1.2 Task & Todo Management Tools

Structures multi-step coding work through task lists with state tracking and execution pauses, enabling progress visibility and user-controlled workflow interruption.

##### 2.1.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with task states (pending, in_progress, completed), requiring both imperative and active-form descriptions for each task.

##### 2.1.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress on multi-step tasks, with guidance on when to use (complex tasks, plan mode, user requests) and when to skip (trivial single tasks).

##### 2.1.2.3 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for specified duration with user interrupt capability and periodic check-in prompts, preferred over bash sleep for avoiding shell process overhead.

### 2.2 Tool Selection and Specialized Capabilities

Policies for choosing the right tool for each operation, plus specialized interactive and domain-specific tools.

#### 2.2.1 Tool Usage Policy

Prescribes a hierarchy of preferred tools for common operations—Read, Write, Edit, Glob, and Grep for file work; Task tool with subagents for scaled exploration; Bash reserved for system commands—and enforces parallel execution of independent operations to maximize efficiency.

##### 2.2.1.1 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Directs use of the Write tool for file creation instead of cat heredoc or echo redirection.

##### 2.2.1.2 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Recommends using the Task tool with specialized exploration subagents for broader codebase exploration and deep research when simple directed searches prove insufficient or exceed query limits.

##### 2.2.1.3 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Directs use of Glob and Grep tools directly for simple, targeted codebase searches.

##### 2.2.1.4 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs use of the Edit tool for file modifications instead of sed or awk.

##### 2.2.1.5 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Directs use of the Read tool for file access instead of cat, head, tail, or sed.

##### 2.2.1.6 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserves the Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

##### 2.2.1.7 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Directs use of the Grep tool for file content searches instead of grep or rg.

##### 2.2.1.8 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Directs use of the Glob tool for file searches instead of find or ls.

##### 2.2.1.9 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Explains that slash commands like /commit invoke user-invocable skills via the Skill tool, restricting usage to listed skills only.

##### 2.2.1.10 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool with specialized subagents for parallelizing independent queries and protecting context, while avoiding duplicate work and excessive delegation.

##### 2.2.1.11 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs use of the TodoWrite tool to break down work, track progress, and mark tasks as completed immediately upon finishing.

##### 2.2.1.12 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to maximize efficiency, while calling dependent tools sequentially.

#### 2.2.2 Specialized Tool Descriptions

Interactive tools for gathering user input, executing domain-specific skills, discovering tool capabilities, and manipulating computational environments. These tools enable dynamic decision-making during execution, visual previews of options, and direct access to specialized domains like Jupyter notebooks and PowerShell.

##### 2.2.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Tool for gathering user preferences, clarifying ambiguous instructions, and offering implementation choices during execution, with guidance on multiSelect options and plan-mode restrictions.

##### 2.2.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructions for using optional HTML preview fields on single-select question options to display UI mockups, code snippets, and visual comparisons without script or style tags.

##### 2.2.2.3 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills within conversations, invoked by slash commands or skill names, with requirement to call tool before generating other responses when skill matches user request.

##### 2.2.2.4 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

ToolSearch matches queries against a deferred tool list and returns complete JSONSchema definitions for matched tools, supporting exact name selection, keyword search, and name-filtered ranking.

##### 2.2.2.5 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replaces Jupyter notebook cell contents with support for insert and delete operations on cells using 0-indexed cell numbers.

##### 2.2.2.6 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with timeout and output limits, providing syntax guidance for cmdlets, variables, pipes, and registry access, with strong preference for specialized tools over PowerShell for file operations.

### 2.3 System Notifications and Hook Events

Runtime notifications about file state changes, IDE interactions, and hook execution outcomes that inform Claude's context.

#### 2.3.1 File & IDE Context Notifications

System reminders alert Claude to file state changes including truncation, external modifications by users or linters, IDE interactions, and boundary conditions like empty files or offset overruns. These notifications provide context for understanding file content and user actions without requiring explicit tool calls.

##### 2.3.1.1 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Alerts Claude when a file read offset exceeds the file's actual length.

##### 2.3.1.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and instructs use of the read tool for additional content.

##### 2.3.1.3 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns that a file exists but contains no content.

##### 2.3.1.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies that a file was modified externally by the user or linter and provides relevant changes with line numbers, instructing the agent to account for these changes without reverting unless requested.

##### 2.3.1.5 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies that the user opened a file in the IDE, which may or may not relate to the current task.

##### 2.3.1.6 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of line ranges selected by the user in an IDE with the selected content.

##### 2.3.1.7 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies that a file was read before conversation summarization but is too large to include, directing use of the Read tool if needed.

#### 2.3.2 Hook Lifecycle & Execution Events

Hooks report their execution outcomes including success, blocking errors, and continuation control signals, delivering additional context information alongside status updates. These notifications inform Claude of hook-driven workflow events and allow hooks to stop execution when necessary.

##### 2.3.2.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Delivers additional context information provided by a hook.

##### 2.3.2.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 2.3.2.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix template for messages when a hook stops continuation.

##### 2.3.2.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude when a hook stops the continuation of execution with an accompanying message.

##### 2.3.2.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook with its output content.

---

## 3. Multi-Agent Orchestration and Planning

Frameworks for spawning, coordinating, and communicating with specialized agents, plus structured planning workflows that gate execution behind approval.

### 3.1 Agent Spawning and Team Coordination

Protocols for creating specialized subagents, managing agent lifecycles, and coordinating distributed agent teams.

#### 3.1.1 Multi-Agent Team Coordination

Establishes Claude as a team member with defined identity and protocols for spawning, coordinating, and shutting down specialized agents—from heavyweight task delegations to lightweight side-question handlers—while managing inter-agent communication and cleanup.

##### 3.1.1.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and protocols for coordination including task management and teammate communication by name.

##### 3.1.1.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down team members gracefully and perform cleanup before returning final response in non-interactive mode.

##### 3.1.1.3 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies the agent that the user wants to invoke a specific agent type and instructs appropriate invocation with required context.

##### 3.1.1.4 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs a lightweight agent spawned for side questions to answer directly without tools, clarifying it runs independently from the main agent and cannot perform file operations or investigations.

#### 3.1.2 Team & Agent Communication Infrastructure

Mechanisms for coordinating multi-agent swarms and enabling bidirectional messaging between agents, users, and shared knowledge systems. Covers agent-to-agent communication protocols, user-facing output channels, team task coordination, and context-rich delegation patterns that maintain coherence across distributed work.

##### 3.1.2.1 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with file path and content for injection into conversation context.

##### 3.1.2.2 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in team swarms to use the SendMessage tool to communicate with specific teammates or broadcast to the entire team, as text responses are not visible to others.

##### 3.1.2.3 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts, emphasizing context-rich briefings that explain goals and prior findings rather than terse commands, and avoiding delegation of understanding by including specific file paths and line numbers.

##### 3.1.2.4 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Demonstrates subagent delegation patterns including forking for survey questions, handling mid-wait user queries, and requesting independent reviews with full context.

##### 3.1.2.5 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to send all user-facing replies through SendUserMessage, with guidance on acknowledgments, checkpoints, and keeping messages concise and information-dense.

##### 3.1.2.6 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages between agents in team workflows with support for protocol responses including shutdown and plan approval requests, requiring agent names rather than UUIDs.

##### 3.1.2.7 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown messages to users with optional file attachments, using status labels to indicate intent (normal reply vs. proactive notification).

##### 3.1.2.8 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for finding available work from shared task lists, claiming tasks by ID order, and coordinating with team lead.

##### 3.1.2.9 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages teams and coordinates multiple agents in swarms with shared task lists, automatic message delivery, and idle state management, supporting agent spawning, task assignment, and graceful shutdown.

##### 3.1.2.10 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all active members to be terminated first.

#### 3.1.3 Agent Spawning & Subagent Orchestration

Spawning and coordination of specialized subagents for autonomous execution of complex multi-step tasks. Includes general-purpose agents for research and code search, exploration agents for codebase analysis, and worker agents for direct task execution with structured result reporting.

##### 3.1.3.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guidance for the Task/Agent tool covering agent spawning, background execution, resumption with context preservation, worktree isolation, parallel agent coordination, and communication of results to users.

##### 3.1.3.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses for autonomous handling of complex multi-step tasks.

##### 3.1.3.3 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Forked worker subagent that executes directives directly without spawning further subagents, using tools silently and reporting structured results with scope, findings, key files, changes, and issues.

##### 3.1.3.4 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code across large codebases, and executing multi-step tasks while reporting findings concisely to the caller.

##### 3.1.3.5 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file discovery via glob patterns, code search via regex, and analysis to answer questions about codebase structure and patterns.

### 3.2 Planning Workflows and Execution Modes

Structured planning phases that constrain agents to read-only exploration before execution, plus autonomous and batch execution frameworks.

#### 3.2.1 Planning Mode Management

Orchestrates structured planning workflows that constrain Claude to read-only exploration and incremental plan refinement across multiple variants—from iterative pair-planning to multi-agent parallel analysis—while deferring execution until plan completion and verification.

##### 3.2.1.1 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file and instructs Claude to continue working on it if relevant and incomplete.

##### 3.2.1.2 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow including parallel exploration, design review, and multi-agent planning while prohibiting execution and non-readonly operations.

##### 3.2.1.3 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, and asks clarifying questions until the plan is complete.

##### 3.2.1.4 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagent to read-only operations and plan file editing while prohibiting execution, with instructions to answer queries and ask clarifying questions.

##### 3.2.1.5 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, instructing evaluation of existing plan against new request and appropriate plan file updates.

##### 3.2.1.6 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies the agent that plan mode has been exited and normal editing and tool execution are now available, optionally referencing the plan file location.

##### 3.2.1.7 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Orchestrates multi-agent exploration using parallel Task tool agents to analyze codebase, identify files for modification, and assess risks, then synthesizes findings into a detailed implementation plan with critique feedback before execution or teleportation to local terminal.

##### 3.2.1.8 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminder to call a verification tool directly after plan implementation to confirm all plan items were completed correctly.

#### 3.2.2 Planning Mode: Tools & Workflow

Structured planning phase for implementation tasks where agents explore codebases in read-only mode, design architectural approaches, and produce approval-gated implementation plans before coding begins. Supports both local and remote planning sessions with diagram-driven design and PR workflows.

##### 3.2.2.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions into plan mode for non-trivial implementation tasks to explore codebase and design approaches for user approval before coding, applicable to feature implementation, architectural decisions, and multi-file changes.

##### 3.2.2.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning phase by reading the plan file and requesting user approval before implementation, used only for code implementation tasks not research.

##### 3.2.2.3 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes a concise implementation plan to the plan file with file paths, changes, function references, and a single verification command, hard-limited to 40 lines.

##### 3.2.2.4 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions where Claude explores the codebase, produces a diagram-rich plan via ExitPlanMode, and implements it with a PR upon approval, with handling for plan teleportation and error recovery.

##### 3.2.2.5 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Configures remote planning sessions to explore the codebase, call ExitPlanMode with an implementation plan, and handle approval, rejection, or teleportation back to the user's terminal.

##### 3.2.2.6 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent that explores codebases in read-only mode to design implementation plans, identify critical files, and consider architectural trade-offs without modifying code.

#### 3.2.3 Autonomous & Auto Mode Execution

Frameworks for continuous self-directed task execution with built-in safeguards. Distinguishes reversible local actions from risky operations requiring confirmation, enables parallel work through forking, and defines constraints when tool access is restricted.

##### 3.2.3.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate implementation, minimal interruptions, and preference for action over planning. Prohibits overly destructive actions and data exfiltration without explicit user authorization.

##### 3.2.3.2 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes careful action execution guidelines distinguishing reversible local actions from risky operations affecting shared systems. Requires user confirmation for destructive, hard-to-reverse, or visible-to-others actions. Emphasizes investigating unexpected state before deleting and resolving conflicts rather than discarding changes.

##### 3.2.3.3 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Provides guidelines for forking subagents when intermediate output isn't needed in context, particularly for research and implementation work. Prohibits reading fork output mid-flight or fabricating results, emphasizing trust in completion notifications and cache sharing benefits.

##### 3.2.3.4 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Defines constraints when tool execution is denied, permitting reasonable workarounds with alternative tools but prohibiting malicious bypasses. Agents must stop and explain to users if the restriction blocks essential capabilities.

#### 3.2.4 Batch Processing & Parallel Work Decomposition

Orchestrates large-scale codebase changes by decomposing work into independent parallel units, with workers executing changes through a standardized pipeline of code simplification, testing, and PR creation.

##### 3.2.4.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into independent units, determining e2e test recipes, and spawning background worker agents to execute units in parallel.

##### 3.2.4.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for workers implementing changes: simplify code using the simplify skill, run unit tests, execute end-to-end tests, commit and push with PR creation, and report the PR URL or failure reason.

---

## 4. Session State, Memory, and Context

Persistent memory systems, session tracking, context preservation across conversation boundaries, and runtime environment configuration.

### 4.1 Memory and Knowledge Persistence

Infrastructure for storing and retrieving domain knowledge, user context, and MCP resources across sessions.

#### 4.1.1 Memory & MCP Resources

Provides access to persistent memory structures and external MCP resources, surfacing their contents or absence to maintain context across sessions and integrate external data sources.

##### 4.1.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Presents the contents of a memory file by path with type description.

##### 4.1.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays contents of a nested memory file structure.

##### 4.1.1.3 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 4.1.1.4 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it cannot be displayed.

#### 4.1.2 Memory Systems & Knowledge Persistence

Persistent memory infrastructure that captures domain-specific knowledge, user context, and work guidance across sessions. Includes structured memory types (user profiles, feedback, session notes), consolidation mechanisms that merge and prune memories, and selection logic to attach relevant memories to agent contexts.

##### 4.1.2.1 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Provides guidance for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations. Includes examples for code reviewers, test runners, architects, and documentation writers.

##### 4.1.2.2 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as containing information about role, goals, responsibilities, and knowledge to tailor behavior and build understanding of the user. Emphasizes avoiding negative judgments and focusing on relevance to collaborative work.

##### 4.1.2.3 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type that stores guidance about work approaches from both successes and failures, with checks for contradictions against team memories.

##### 4.1.2.4 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to attach for the main agent, prioritizing memories with clear utility while avoiding generic reference documentation for recently-used tools.

##### 4.1.2.5 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs a multi-phase memory consolidation pass by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to keep memories current and organized.

##### 4.1.2.6 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations by preserving structure and headers while updating content sections with detailed, actionable information. Enforces token limits per section and requires maintaining current state for continuity.

##### 4.1.2.7 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Updates Magic Doc files with new learnings and insights while preserving headers and maintaining current state. Emphasizes terseness, high-signal content focused on architecture, patterns, and entry points rather than exhaustive implementation details.

##### 4.1.2.8 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files documenting current state, task specification, files, workflow, errors, and key results.

### 4.2 Session Tracking and Continuity

Monitoring resource consumption, preserving task state across conversation resets, and naming and discovering sessions.

#### 4.2.1 Session & Resource Tracking

Monitors session continuity, resource consumption, and active configurations by tracking token budgets, cost metrics, invoked skills, and diagnostic feedback across potentially distributed work environments.

##### 4.2.1.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 4.2.1.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

##### 4.2.1.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Alerts Claude that the session continues from another machine and application state may have changed.

##### 4.2.1.4 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the session and instructs Claude to continue following their guidelines.

##### 4.2.1.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant, without mentioning the reminder to the user.

##### 4.2.1.6 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use the TodoWrite tool for task tracking if relevant to current work, and to clean up stale todo lists without mentioning this reminder to the user.

##### 4.2.1.7 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

##### 4.2.1.8 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues with a summary.

#### 4.2.2 Context Management & Conversation Compaction

Structured approaches to preserving task state and technical context across conversation boundaries. Enables efficient resumption by capturing task overview, discoveries, pending work, and continuation requirements in formats that minimize duplicate effort.

##### 4.2.2.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries covering task overview, current state, important discoveries, next steps, and context to preserve. Summaries enable efficient task resumption in future context windows with minimal duplicate work.

##### 4.2.2.2 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured instructions for compacting a portion of conversation with analysis tags, covering primary request, technical concepts, files, errors, problem-solving, user messages, pending tasks, work completed, and continuation context.

##### 4.2.2.3 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries covering primary requests, technical concepts, files modified, errors encountered, problem-solving efforts, and pending tasks to preserve context for continued development work.

##### 4.2.2.4 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages following the same structure as full conversation summaries, focusing on new developments while preserving earlier context intact.

#### 4.2.3 Session Management & Search

Naming and discovery infrastructure for coding sessions. Generates concise, convention-compliant titles and git branch names from session descriptions, then enables semantic search across session metadata including tags, transcripts, and summaries with relevance-ranked results.

##### 4.2.3.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise, sentence-case session titles (3-7 words) that capture the main topic or goal of a coding session for easy recognition in lists.

##### 4.2.3.2 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

##### 4.2.3.3 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Search assistant that finds relevant sessions by matching user queries against session metadata including tags, titles, branches, summaries, and transcripts. Prioritizes exact tag matches and returns results ordered by relevance with inclusive matching strategy.

### 4.3 Runtime Environment and Display

Operational mode configuration, feature control, resource isolation, and terminal status line customization.

#### 4.3.1 Operational Modes & Environment Configuration

Configures runtime behavior and resource management through explicit feature control and context isolation. Enables minimal operation modes, manages temporary file storage, handles large tool outputs efficiently, and integrates advisory review mechanisms for decision-making.

##### 4.3.1.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Configures minimal mode that disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags for auth, MCP config, and settings.

##### 4.3.1.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, with permission-free access.

##### 4.3.1.3 [MCP Tool Result Truncation (System Prompt)](system-prompts/system-prompt-mcp-tool-result-truncation.md)

Provides guidelines for handling long MCP tool outputs by using targeted queries with jq/grep for simple lookups and delegating full-file analysis to subagents.

##### 4.3.1.4 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructs Claude to call an advisor tool backed by a stronger reviewer model before substantive work, when stuck, or when considering approach changes. The advisor sees full conversation history and tool results; Claude should give its advice serious weight and surface conflicts if evidence contradicts specific claims.

#### 4.3.2 Agent Status & Terminal Display

Customizes terminal status line presentation by extracting shell configuration, converting escape sequences, and injecting session metadata including model state and resource usage.

##### 4.3.2.1 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell config files, converting escape sequences to shell commands, and updating settings.json with custom status line commands. Supports JSON input with session metadata, model info, context usage, and rate limits.

---

## 5. GitHub, CI/CD, and Development Workflow

End-to-end development workflow tooling covering GitHub PR automation, git worktree isolation, scheduling, configuration management, and codebase documentation.

### 5.1 GitHub and Pull Request Automation

Automated PR lifecycle management, code review integration, and GitHub Actions workflows.

#### 5.1.1 GitHub & PR Workflow Agents

Streamlined GitHub integration for pull request lifecycle management—from branch creation and commits through PR opening and code review. Automates PR workflows with context-aware analysis, fetches and displays review comments with threading, and integrates with GitHub Actions for @claude mentions. Includes templates for app installation and CI/CD automation.

##### 5.1.1.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context by analyzing staged changes, drafting a message aligned with repository style, and executing the commit safely.

##### 5.1.1.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Streamlined PR creation workflow that analyzes changes, creates a branch, commits code, and opens or updates a pull request with appropriate title and body using pre-populated context.

##### 5.1.1.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and code review comments with file context, preserving threading and formatting for readability.

##### 5.1.1.4 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, then providing thorough code analysis covering quality, conventions, performance, testing, and security.

##### 5.1.1.5 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining the feature, workflow, and security model for team adoption.

##### 5.1.1.6 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code via @claude mentions in issues, pull requests, and comments with optional custom prompts and tool restrictions.

#### 5.1.2 Git Worktree & Branch Management

Isolated development environments using git worktrees and branches to sandbox agent work within dedicated directories. Provides session-scoped branch creation and cleanup with safeguards against data loss.

##### 5.1.2.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates isolated git worktrees within .claude/worktrees/ with new branches, only when explicitly requested by user, requiring git repository or custom hooks.

##### 5.1.2.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits worktree sessions created by EnterWorktree, returning to original directory with options to keep or remove the worktree and branch, with safeguards against removing worktrees with uncommitted changes.

##### 5.1.2.3 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git repository status as a snapshot at the start of the conversation, which does not update during the session.

### 5.2 Project Configuration and Scheduling

Settings management, hook deployment, cron-based task scheduling, and project onboarding flows.

#### 5.2.1 Configuration & Settings Management

Centralized configuration system for Claude Code settings, hooks, and permissions across global and project scopes. Manages lifecycle event automation through shell commands and agent triggers, with verification workflows for safe hook deployment. Includes onboarding flows for initializing project metadata and skill setup.

##### 5.2.1.1 [Config (Tool Description)](system-prompts/tool-description-config.md)

Tool for viewing and modifying Claude Code configuration settings stored globally in ~/.claude.json or per-project in settings.json, supporting theme, editor mode, and permission settings.

##### 5.2.1.2 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json) including hooks, permissions, and environment variables with merge-safe updates.

##### 5.2.1.3 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks with dedup checks, command testing, JSON validation, and live proof execution.

##### 5.2.1.4 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines how to configure lifecycle hooks that run shell commands, prompts, or agents at specific Claude Code events like PreToolUse, PostToolUse, and SessionStart, with JSON structure, input/output formats, and common patterns for auto-formatting and testing.

##### 5.2.1.5 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md, skills, and hooks through codebase exploration, user interviews, and iterative proposal refinement.

#### 5.2.2 Scheduling & Automation

Cron-based task scheduling for one-shot and recurring automation. Converts user-friendly interval specifications into standard cron expressions, manages durable task persistence, and orchestrates remote Claude Code agent execution through the Anthropic cloud API.

##### 5.2.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron jobs using standard 5-field cron syntax in user's local timezone, with guidance on avoiding :00/:30 minute marks for load distribution and optional durability for persistence across sessions.

##### 5.2.2.2 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts to cron expression, and schedules recurring tasks with automatic execution.

##### 5.2.2.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via the Anthropic cloud API, supporting creation, updates, listing, and execution of scheduled tasks.

### 5.3 Codebase Documentation and Skills

Automated CLAUDE.md generation from codebase analysis and the skills system for capturing reusable workflows.

#### 5.3.1 Codebase Documentation & CLAUDE.md

Automated analysis of codebases to generate CLAUDE.md files that capture architecture, development workflows, and project conventions for consistent Claude Code onboarding.

##### 5.3.1.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files containing common development commands, high-level architecture, and project-specific conventions for future Claude Code instances.

#### 5.3.2 Skills System: Creation & Invocation

Framework for converting Claude Code sessions into reusable skills through structured interviews and SKILL.md documentation, plus diagnostic tools for debugging and performance monitoring.

##### 5.3.2.1 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides conversion of a session into a reusable skill through 4-step process: analyze session, interview user via AskUserQuestion across 4 rounds, write SKILL.md with frontmatter and step annotations, and confirm before saving.

##### 5.3.2.2 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup workflow using three parallel agents to identify code reuse opportunities, quality issues, and efficiency problems.

##### 5.3.2.3 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions using debug logs, error analysis, and settings inspection.

##### 5.3.2.4 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnostic tool for identifying frozen or slow Claude Code sessions through process inspection and reporting to feedback channel.

---

## 6. Claude API, SDK, and Integration References

Complete API and SDK documentation across languages, covering model capabilities, streaming, batching, tool use, and agent SDK patterns.

### 6.1 Claude API Reference Documentation

Language-specific SDK references and model catalog providing complete API coverage across Python, TypeScript, Go, Java, C#, Ruby, PHP, and raw HTTP, including vision, caching, thinking, tool use, and cost optimization.

#### 6.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, system prompts, vision (base64 and URL), prompt caching with automatic and manual control, extended thinking (adaptive and deprecated), error handling, multi-turn conversations, compaction, stop reasons, and cost optimization.

#### 6.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, system prompts, vision (URL and base64), prompt caching with automatic and manual control, extended thinking (adaptive and deprecated), error handling, multi-turn conversations, compaction, stop reasons, and cost optimization.

#### 6.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use with BetaToolRunner and manual loops, thinking, prompt caching, server-side tools, PDF input, Files API, and context editing with beta support.

#### 6.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference including client initialization, basic requests, streaming, thinking (adaptive and deprecated), tool use with annotated classes and BetaToolRunner, effort parameter, prompt caching, token counting, structured output, server-side tools, and Files API.

#### 6.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking (adaptive and deprecated fixed-budget), tool use with manual loops, effort parameter, prompt caching, token counting, structured output, PDF input, server-side tools, and Files API with beta context editing support.

#### 6.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, tool use with beta tool runner and manual loops, and prompt caching with automatic and manual control.

#### 6.1.7 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization (Anthropic, Bedrock, Vertex, Foundry), basic requests, streaming, tool use with BetaRunnableTool and manual loops, extended thinking, prompt caching, structured outputs, and beta features with server-side tools.

#### 6.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL with examples for basic requests, streaming, tool use, prompt caching, and extended thinking. Emphasizes jq for JSON parsing and required headers.

#### 6.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of Claude models with exact model IDs, context windows, max output tokens, and pricing. Includes programmatic model discovery via Models API for live capability data (vision, thinking, effort, structured outputs, context management support).

### 6.2 Agent SDK Reference & Patterns

Comprehensive Agent SDK documentation and usage patterns for Python and TypeScript, covering tool integration, session management, subagents, and MCP support, plus routing guides for building LLM applications.

#### 6.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP support, hooks, subagents, error handling, session history, and best practices.

#### 6.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference including installation, query interface, permission modes, MCP support, hooks, subagents, message types, session history, and best practices for JavaScript/TypeScript.

#### 6.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK usage patterns including basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, session resumption, history retrieval, and session mutations for building agentic applications.

#### 6.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns covering basic agents, hooks, subagents, MCP integration, session resumption, history management, and session mutations for JavaScript/TypeScript environments.

#### 6.2.5 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection, architecture, models, thinking, caching, and reading paths.

#### 6.2.6 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific API reference documentation with quick task navigation and file-path indicators.

#### 6.2.7 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, the Claude Agent SDK, and the Claude API by fetching official documentation, providing code examples, and offering actionable guidance.

### 6.3 API Features: Batches, Streaming, Files & Tool Use

Detailed references for asynchronous batching, real-time streaming, file handling, tool execution, prompt caching optimization, and error recovery across multiple languages, enabling efficient and cost-effective API usage.

#### 6.3.1 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference covering batch creation, polling, result retrieval, and container reuse for asynchronous processing at 50% cost.

#### 6.3.2 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference with sync/async patterns, content-type handling, tool use, and error handling for real-time response display.

#### 6.3.3 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, content types, tool runner integration, and best practices for web applications.

#### 6.3.4 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files, using them in messages (PDFs, images, text), and managing files (list, retrieve metadata, delete, download) with examples for document analysis and multi-question workflows.

#### 6.3.5 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages (PDFs, images), and file management (list, delete, download) for document and image processing workflows.

#### 6.3.6 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice, server-side tools (code execution, web search, computer use), and structured outputs.

#### 6.3.7 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference with tool runner, manual agentic loop, code execution, MCP conversion, memory tool, and structured outputs.

#### 6.3.8 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod, manual agentic loop with streaming, code execution, and structured outputs.

#### 6.3.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Design patterns for effective prompt caching including prefix-stability principles, breakpoint placement, silent invalidators, and cost-benefit analysis.

#### 6.3.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400–529), their causes, fixes, and SDK exception handling with typed error classes and retry strategies.

#### 6.3.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, with extraction prompts for each topic.

---

## 7. Code Quality, Security, and User-Facing Features

Software engineering best practices, security monitoring, web access, browser automation, analytics, and user interaction patterns including learning modes and UX generation.

### 7.1 Engineering Practices and Security

Pragmatic coding guidelines, adversarial testing and verification, and real-time security monitoring of agent actions and code vulnerabilities.

#### 7.1.1 Code Quality & Task Execution Guidelines

Principles for pragmatic, focused software engineering work that prioritizes actual requirements over speculative design. Emphasizes reading before modifying, avoiding premature abstractions and unnecessary error handling, deleting unused code completely, and maintaining security boundaries at system edges.

##### 7.1.1.1 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Authorizes Claude to complete ambitious tasks that would otherwise be too complex or time-consuming, deferring to user judgment on scope appropriateness.

##### 7.1.1.2 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when asked.

##### 7.1.1.3 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to avoid creating unnecessary files and prefer editing existing files to prevent bloat and build on prior work.

##### 7.1.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims, renamed variables, or removed comments.

##### 7.1.1.5 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Prohibits creating helpers, utilities, or abstractions for one-time operations or hypothetical requirements. Complexity should match actual task requirements without speculative design.

##### 7.1.1.6 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Directs Claude to avoid giving time estimates or predictions for task duration.

##### 7.1.1.7 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Prohibits adding features, refactoring, docstrings, or improvements beyond what was explicitly requested. Comments should only clarify non-obvious logic.

##### 7.1.1.8 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs Claude to avoid error handling for impossible scenarios and trust internal code guarantees. Validation should occur only at system boundaries like user input and external APIs.

##### 7.1.1.9 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing modifications.

##### 7.1.1.10 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities such as command injection, XSS, SQL injection, and other OWASP top 10 issues, prioritizing safe and secure code.

##### 7.1.1.11 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks including bug fixes, feature additions, refactoring, and code explanation. Instructs Claude to interpret unclear instructions in this context and modify actual code rather than provide generic responses.

#### 7.1.2 Code Verification & Testing

Verification infrastructure combining automated testing (builds, test suites, linters) with adversarial probes (boundary conditions, concurrency, idempotency) to validate code changes. Includes specialized verifier skills for different domains (CLI, API, server) and transcript-based plan completion verification.

##### 7.1.2.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial verification subagent that tests implementations by running builds, test suites, linters, and adversarial probes (boundary values, concurrency, idempotency, orphan operations) then issues PASS/FAIL/PARTIAL verdicts. Requires documented command execution and explicit adversarial testing before approval.

##### 7.1.2.2 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow for validating code changes through runtime observation, surface-level testing, and evidence capture.

##### 7.1.2.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying CLI changes through build, execution with test arguments, and output comparison.

##### 7.1.2.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying server and API changes through startup, HTTP requests, and response validation.

##### 7.1.2.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive workflow for creating verifier skills for automated code change validation, including auto-detection, tool setup, and skill generation.

##### 7.1.2.6 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies that an agent completed its assigned plan by analyzing conversation transcripts and codebase state, returning a structured result indicating success or failure.

#### 7.1.3 Security Monitoring & Review

Autonomous agent security enforcement through real-time action monitoring, threat detection, and code vulnerability assessment. Evaluates agent operations against configurable rules to prevent injection attacks and unintended damage, while analyzing code diffs for exploitable weaknesses with high-confidence filtering. Permits authorized security testing and malware analysis within defensive contexts.

##### 7.1.3.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor that evaluates autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage through threat modeling and user intent analysis.

##### 7.1.3.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules, and allow exceptions governing which tool actions autonomous agents may perform, covering destructive operations, credential handling, and external integrations.

##### 7.1.3.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review agent that analyzes code diffs for exploitable vulnerabilities with high confidence thresholds, excluding DOS, secrets management, and rate limiting issues. Uses three-phase methodology: repository context research, comparative analysis against existing patterns, and vulnerability assessment with structured markdown output including severity, category, exploit scenario, and recommendations.

##### 7.1.3.4 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing requests for destructive techniques, DoS attacks, supply chain compromise, or detection evasion for malicious purposes.

##### 7.1.3.5 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code while allowing analysis, reporting, and behavioral questions.

### 7.2 Web Access and Browser Control

Real-time web search, URL content retrieval, and programmatic browser automation for complex web interactions.

#### 7.2.1 Browser Automation & Computer Use

Enables programmatic browser control through mouse, keyboard, and visual inspection, with specialized handling for Chrome navigation, debugging, and dialog management to support complex web interactions.

##### 7.2.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation using mouse, keyboard, and screenshots, with guidance on precise cursor positioning and element clicking.

##### 7.2.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines browser automation actions for Chrome including mouse operations, keyboard input, scrolling, element interaction, and screenshot capture for visual inspection.

##### 7.2.1.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the tool name with `select:mcp__claude-in-chrome__<tool_name>` syntax before calling the tool.

##### 7.2.1.4 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with extra frames, console debugging with pattern filtering, avoiding JavaScript dialogs that block commands, and tab context initialization. Emphasizes staying focused and asking for guidance when encountering failures or unexpected complexity.

##### 7.2.1.5 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools with tiered app access, link safety, and restrictions on financial actions.

#### 7.2.2 Web Search & Content Retrieval

Provides real-time web access through search queries and URL fetching, converting remote content into analyzable formats while maintaining source attribution and handling knowledge-cutoff limitations.

##### 7.2.2.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

WebSearch enables Claude to query the web for current information and recent data, with mandatory source citation in responses, domain filtering support, and year-aware search queries.

##### 7.2.2.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

WebFetch retrieves and analyzes web content by fetching URLs, converting HTML to markdown, and processing results with a fast AI model, with built-in caching and redirect handling.

##### 7.2.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model with strict 125-character quote limits for untrusted domains, proper attribution, and no exact lyric reproduction.

### 7.3 Agent Design and Analytics

Frameworks for architecting custom agents, analyzing usage patterns, and generating actionable workflow recommendations.

#### 7.3.1 Agent Design & Configuration

Frameworks for architecting custom AI agents, validating automation rules, evaluating conditional logic, and documenting command behavior. Supports agent creation, safety policy enforcement, and clear communication of tool capabilities.

##### 7.3.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design high-performance custom AI agents by extracting user intent, creating expert personas, architecting comprehensive system prompts, optimizing for performance, and generating concise identifiers with usage examples.

##### 7.3.1.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability to ensure the LLM classifier can correctly auto-approve or block tool calls.

##### 7.3.1.3 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code and returns a JSON result indicating whether the condition is met or providing a reason for failure.

##### 7.3.1.4 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy commands.

##### 7.3.1.5 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands to enforce safety policies on which commands users have allowlisted.

#### 7.3.2 Usage Insights & Analytics

Analyzes Claude Code session data to extract structured insights about user workflows, identify friction patterns, and surface actionable recommendations for feature adoption and workflow optimization. Generates coaching summaries and identifies emerging opportunities for autonomous development.

##### 7.3.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part coaching summary for Claude Code usage insights covering what's working, hindrances, quick wins, and ambitious workflows for future models, using aggregated session data and structured JSON output.

##### 7.3.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with 3 categories and 2 examples each, using second-person language.

##### 7.3.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future opportunities for autonomous AI-assisted development workflows, with copyable prompts and tooling suggestions.

##### 7.3.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from a single Claude Code session including goal categories, user satisfaction signals, and friction types, with strict guidelines for counting only explicit user requests and friction specifics.

##### 7.3.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions, feature recommendations from MCP Servers, Custom Skills, Hooks, Headless Mode, and Task Agents, plus usage patterns tailored to user's actual session data.

### 7.4 User Interaction and Communication

Output formatting standards, learning and teaching modes, prompt suggestions, and UX generation for guiding user interaction.

#### 7.4.1 Output Style & Communication Formatting

Standards for clear, navigable communication that leads with answers and omits filler. Establishes conventions for code references with precise locations, concise action summaries, and consistent formatting that enables efficient scanning and source navigation.

##### 7.4.1.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number format when referencing code to enable easy navigation to source locations.

##### 7.4.1.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs responses to be short and concise.

##### 7.4.1.3 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler, and focusing text output on decisions, status updates, and blockers.

##### 7.4.1.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths only, share relevant paths in final responses with code snippets only when load-bearing, avoid emojis, and omit colons before tool calls.

##### 7.4.1.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Instructs Claude to describe recent actions in 3-5 words using present tense, naming files or functions rather than branches, without using tools. Provides examples of good and bad summary formats.

#### 7.4.2 Learning & Teaching Modes

Collaborative frameworks that balance task completion with hands-on education by requesting human input for design decisions, providing contextual learning insights, and guiding users through step-by-step walkthroughs with visual overlays.

##### 7.4.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Configures collaborative learning mode where Claude balances task completion with hands-on education by requesting human contributions for design decisions and key algorithms, using TodoList tracking and Learn by Doing requests with specific guidance.

##### 7.4.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing in learning mode, formatted with a visual separator and focused on codebase-specific implementation choices.

##### 7.4.2.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct tool access, activated by teaching-related phrases.

#### 7.4.3 Prompt Suggestion & UX Generation

Generates contextual suggestions and visual previews to guide user interaction. Predicts natural next steps in conversation, renders side-by-side UI comparisons, and creates memorable coding companion personalities tailored to user preferences.

##### 7.4.3.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on conversation context, avoiding evaluative, meta, or unsolicited suggestions.

##### 7.4.3.2 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering of UI options using optional preview fields for ASCII mockups, code snippets, diagrams, and configuration examples in monospace boxes.

##### 7.4.3.3 [Buddy Mode (System Prompt)](system-prompts/system-prompt-buddy-mode.md)

Instructs Claude to generate memorable coding companion creatures for developer terminals with distinct names, personalities, and quirks based on rarity, species, stats, and inspiration words. Higher rarity yields weirder, more specific personalities.
