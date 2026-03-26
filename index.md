# Claude Code System Prompts Index

A technical reference for deploying Claude as an autonomous coding agent, covering everything needed to build, secure, and orchestrate AI-driven development systems — from low-level shell safety and file operations to multi-agent coordination, persistent memory, and real-world developer toolchain integration.

## Table of Contents

1. [Bash Execution & Shell Safety](#1-bash-execution-shell-safety)
   1. [Bash Command Execution Rules & Best Practices](#11-bash-command-execution-rules-best-practices)
      1. [Bash (prefer dedicated tools) [Tool Description]](#111-bash-prefer-dedicated-tools-tool-description)
      2. [Bash (quote file paths) [Tool Description]](#112-bash-quote-file-paths-tool-description)
      3. [Bash (semicolon usage) [Tool Description]](#113-bash-semicolon-usage-tool-description)
      4. [Bash (sequential commands) [Tool Description]](#114-bash-sequential-commands-tool-description)
      5. [Bash (sleep — keep short) [Tool Description]](#115-bash-sleep-—-keep-short-tool-description)
      6. [Bash (sleep — no polling background tasks) [Tool Description]](#116-bash-sleep-—-no-polling-background-tasks-tool-description)
      7. [Bash (sleep — run immediately) [Tool Description]](#117-bash-sleep-—-run-immediately-tool-description)
      8. [Bash (sleep — use check commands) [Tool Description]](#118-bash-sleep-—-use-check-commands-tool-description)
      9. [Bash (alternative — communication) [Tool Description]](#119-bash-alternative-—-communication-tool-description)
      10. [Bash (alternative — content search) [Tool Description]](#1110-bash-alternative-—-content-search-tool-description)
      11. [Bash (alternative — edit files) [Tool Description]](#1111-bash-alternative-—-edit-files-tool-description)
      12. [Bash (alternative — file search) [Tool Description]](#1112-bash-alternative-—-file-search-tool-description)
      13. [Bash (alternative — read files) [Tool Description]](#1113-bash-alternative-—-read-files-tool-description)
      14. [Bash (alternative — write files) [Tool Description]](#1114-bash-alternative-—-write-files-tool-description)
      15. [Bash (built-in tools note) [Tool Description]](#1115-bash-built-in-tools-note-tool-description)
      16. [Bash (command description) [Tool Description]](#1116-bash-command-description-tool-description)
      17. [Bash (maintain cwd) [Tool Description]](#1117-bash-maintain-cwd-tool-description)
      18. [Bash (no newlines) [Tool Description]](#1118-bash-no-newlines-tool-description)
      19. [Bash (overview) [Tool Description]](#1119-bash-overview-tool-description)
      20. [Bash (parallel commands) [Tool Description]](#1120-bash-parallel-commands-tool-description)
      21. [Bash (timeout) [Tool Description]](#1121-bash-timeout-tool-description)
      22. [Bash (verify parent directory) [Tool Description]](#1122-bash-verify-parent-directory-tool-description)
      23. [Bash (working directory) [Tool Description]](#1123-bash-working-directory-tool-description)
   2. [Bash Sandbox Policy & Detection](#12-bash-sandbox-policy-detection)
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
   3. [Bash Command Documentation & Safety](#13-bash-command-documentation-safety)
      1. [Bash command description writer (Agent Prompt)](#131-bash-command-description-writer-agent-prompt)
      2. [Bash command prefix detection (Agent Prompt)](#132-bash-command-prefix-detection-agent-prompt)
2. [File, Code, and Notebook Operations](#2-file-code-and-notebook-operations)
   1. [File System Operations & Tool Preferences](#21-file-system-operations-tool-preferences)
      1. [ReadFile (Tool Description)](#211-readfile-tool-description)
      2. [Edit (Tool Description)](#212-edit-tool-description)
      3. [Write (Tool Description)](#213-write-tool-description)
      4. [Glob (Tool Description)](#214-glob-tool-description)
      5. [Grep (Tool Description)](#215-grep-tool-description)
      6. [Tool usage (create files) [System Prompt]](#216-tool-usage-create-files-system-prompt)
      7. [Tool usage (edit files) [System Prompt]](#217-tool-usage-edit-files-system-prompt)
      8. [Tool usage (read files) [System Prompt]](#218-tool-usage-read-files-system-prompt)
      9. [Tool usage (search content) [System Prompt]](#219-tool-usage-search-content-system-prompt)
      10. [Tool usage (search files) [System Prompt]](#2110-tool-usage-search-files-system-prompt)
      11. [Tool usage (reserve Bash) [System Prompt]](#2111-tool-usage-reserve-bash-system-prompt)
      12. [File shorter than offset (System Reminder)](#2112-file-shorter-than-offset-system-reminder)
      13. [File truncated (System Reminder)](#2113-file-truncated-system-reminder)
      14. [File exists but empty (System Reminder)](#2114-file-exists-but-empty-system-reminder)
      15. [File modified by user or linter (System Reminder)](#2115-file-modified-by-user-or-linter-system-reminder)
      16. [File opened in IDE (System Reminder)](#2116-file-opened-in-ide-system-reminder)
   2. [Code Quality & Engineering Discipline](#22-code-quality-engineering-discipline)
      1. [Doing tasks (avoid over-engineering) [System Prompt]](#221-doing-tasks-avoid-over-engineering-system-prompt)
      2. [Doing tasks (no premature abstractions) [System Prompt]](#222-doing-tasks-no-premature-abstractions-system-prompt)
      3. [Doing tasks (no unnecessary additions) [System Prompt]](#223-doing-tasks-no-unnecessary-additions-system-prompt)
      4. [Doing tasks (no unnecessary error handling) [System Prompt]](#224-doing-tasks-no-unnecessary-error-handling-system-prompt)
      5. [Doing tasks (no compatibility hacks) [System Prompt]](#225-doing-tasks-no-compatibility-hacks-system-prompt)
      6. [Doing tasks (minimize file creation) [System Prompt]](#226-doing-tasks-minimize-file-creation-system-prompt)
      7. [Doing tasks (read before modifying) [System Prompt]](#227-doing-tasks-read-before-modifying-system-prompt)
      8. [Doing tasks (software engineering focus) [System Prompt]](#228-doing-tasks-software-engineering-focus-system-prompt)
      9. [Doing tasks (ambitious tasks) [System Prompt]](#229-doing-tasks-ambitious-tasks-system-prompt)
      10. [Doing tasks (blocked approach) [System Prompt]](#2210-doing-tasks-blocked-approach-system-prompt)
      11. [Doing tasks (no time estimates) [System Prompt]](#2211-doing-tasks-no-time-estimates-system-prompt)
      12. [Doing tasks (help and feedback) [System Prompt]](#2212-doing-tasks-help-and-feedback-system-prompt)
      13. [Doing tasks (security) [System Prompt]](#2213-doing-tasks-security-system-prompt)
   3. [Code Verification & Testing](#23-code-verification-testing)
      1. [Verification specialist (Agent Prompt)](#231-verification-specialist-agent-prompt)
      2. [Verify skill (Skill)](#232-verify-skill-skill)
      3. [Verify CLI changes (example for Verify skill) [Skill]](#233-verify-cli-changes-example-for-verify-skill-skill)
      4. [Verify server/API changes (example for Verify skill) [Skill]](#234-verify-serverapi-changes-example-for-verify-skill-skill)
      5. [Worker instructions (System Prompt)](#235-worker-instructions-system-prompt)
      6. [New diagnostics detected (System Reminder)](#236-new-diagnostics-detected-system-reminder)
   4. [Jupyter Notebook & Specialized File Handling](#24-jupyter-notebook-specialized-file-handling)
      1. [NotebookEdit (Tool Description)](#241-notebookedit-tool-description)
      2. [Sleep (Tool Description)](#242-sleep-tool-description)
3. [Agent Architecture & Runtime Behavior](#3-agent-architecture-runtime-behavior)
   1. [Multi-Agent Coordination](#31-multi-agent-coordination)
      1. [Multi-Agent Team Coordination & Swarm Management](#311-multi-agent-team-coordination-swarm-management)
         1. [SendMessageTool (Tool Description)](#3111-sendmessagetool-tool-description)
         2. [TeammateTool (Tool Description)](#3112-teammatetool-tool-description)
         3. [TeamDelete (Tool Description)](#3113-teamdelete-tool-description)
         4. [TaskList (teammate workflow) [Tool Description]](#3114-tasklist-teammate-workflow-tool-description)
         5. [Teammate Communication (System Prompt)](#3115-teammate-communication-system-prompt)
         6. [Team memory content display (System Prompt)](#3116-team-memory-content-display-system-prompt)
         7. [Team Coordination (System Reminder)](#3117-team-coordination-system-reminder)
         8. [Team Shutdown (System Reminder)](#3118-team-shutdown-system-reminder)
         9. [Writing subagent prompts (System Prompt)](#3119-writing-subagent-prompts-system-prompt)
         10. [Subagent delegation examples (System Prompt)](#31110-subagent-delegation-examples-system-prompt)
         11. [Fork usage guidelines (System Prompt)](#31111-fork-usage-guidelines-system-prompt)
         12. [Agent (usage notes) [Tool Description]](#31112-agent-usage-notes-tool-description)
         13. [Agent (when to launch subagents) [Tool Description]](#31113-agent-when-to-launch-subagents-tool-description)
      2. [Agent Design, Configuration & Orchestration](#312-agent-design-configuration-orchestration)
         1. [Agent creation architect (Agent Prompt)](#3121-agent-creation-architect-agent-prompt)
         2. [CLAUDE.md creation (Agent Prompt)](#3122-claudemd-creation-agent-prompt)
         3. [/batch slash command (Agent Prompt)](#3123-batch-slash-command-agent-prompt)
         4. [Auto mode rule reviewer (Agent Prompt)](#3124-auto-mode-rule-reviewer-agent-prompt)
         5. [Worker fork execution (Agent Prompt)](#3125-worker-fork-execution-agent-prompt)
         6. [Auto mode (System Prompt)](#3126-auto-mode-system-prompt)
   2. [Agent Thread Protocols & Access Control](#32-agent-thread-protocols-access-control)
      1. [Agent Thread Behavior & Response Guidelines](#321-agent-thread-behavior-response-guidelines)
         1. [Agent thread notes (System Prompt)](#3211-agent-thread-notes-system-prompt)
         2. [Advisor tool instructions (System Prompt)](#3212-advisor-tool-instructions-system-prompt)
         3. [/btw side question (System Reminder)](#3213-btw-side-question-system-reminder)
         4. [Agent mention (System Reminder)](#3214-agent-mention-system-reminder)
      2. [Permission Management & Tool Execution Control](#322-permission-management-tool-execution-control)
         1. [Tool execution denied (System Prompt)](#3221-tool-execution-denied-system-prompt)
         2. [System section (System Prompt)](#3222-system-section-system-prompt)
         3. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#3223-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   3. [Session Identity & Operational Settings](#33-session-identity-operational-settings)
      1. [Agent Metadata & Session Naming](#331-agent-metadata-session-naming)
         1. [Coding session title generator (Agent Prompt)](#3311-coding-session-title-generator-agent-prompt)
         2. [Agent Summary Generation (System Prompt)](#3312-agent-summary-generation-system-prompt)
         3. [Status line setup (Agent Prompt)](#3313-status-line-setup-agent-prompt)
      2. [Operational Mode Configuration](#332-operational-mode-configuration)
         1. [Minimal mode (System Prompt)](#3321-minimal-mode-system-prompt)
         2. [Scratchpad directory (System Prompt)](#3322-scratchpad-directory-system-prompt)
         3. [One of six rules for using sleep command (System Prompt)](#3323-one-of-six-rules-for-using-sleep-command-system-prompt)
4. [Planning, Memory & Context Management](#4-planning-memory-context-management)
   1. [Planning Mode & Implementation Design](#41-planning-mode-implementation-design)
      1. [EnterPlanMode (Tool Description)](#411-enterplanmode-tool-description)
      2. [ExitPlanMode (Tool Description)](#412-exitplanmode-tool-description)
      3. [Plan mode is active (5-phase) [System Reminder]](#413-plan-mode-is-active-5-phase-system-reminder)
      4. [Plan mode is active (iterative) [System Reminder]](#414-plan-mode-is-active-iterative-system-reminder)
      5. [Plan mode is active (subagent) [System Reminder]](#415-plan-mode-is-active-subagent-system-reminder)
      6. [Plan mode re-entry (System Reminder)](#416-plan-mode-re-entry-system-reminder)
      7. [Ultraplan mode (System Reminder)](#417-ultraplan-mode-system-reminder)
      8. [Exited plan mode (System Reminder)](#418-exited-plan-mode-system-reminder)
      9. [Plan file reference (System Reminder)](#419-plan-file-reference-system-reminder)
      10. [Verify plan reminder (System Reminder)](#4110-verify-plan-reminder-system-reminder)
      11. [Plan mode (enhanced) [Agent Prompt]](#4111-plan-mode-enhanced-agent-prompt)
      12. [Phase four of plan mode (System Prompt)](#4112-phase-four-of-plan-mode-system-prompt)
   2. [Memory & Session Persistence](#42-memory-session-persistence)
      1. [Memory file contents (System Reminder)](#421-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#422-nested-memory-contents-system-reminder)
      3. [Session continuation (System Reminder)](#423-session-continuation-system-reminder)
      4. [Invoked skills (System Reminder)](#424-invoked-skills-system-reminder)
      5. [Session memory update instructions (Agent Prompt)](#425-session-memory-update-instructions-agent-prompt)
      6. [Dream memory consolidation (Agent Prompt)](#426-dream-memory-consolidation-agent-prompt)
      7. [Determine which memory files to attach (Agent Prompt)](#427-determine-which-memory-files-to-attach-agent-prompt)
      8. [Agent memory instructions (System Prompt)](#428-agent-memory-instructions-system-prompt)
      9. [Memory description of user feedback (System Prompt)](#429-memory-description-of-user-feedback-system-prompt)
      10. [Description part of memory instructions (System Prompt)](#4210-description-part-of-memory-instructions-system-prompt)
      11. [Session memory template (Data)](#4211-session-memory-template-data)
   3. [Context Compaction & Conversation Summarization](#43-context-compaction-conversation-summarization)
      1. [Context compaction summary (System Prompt)](#431-context-compaction-summary-system-prompt)
      2. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#432-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
      3. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#433-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
      4. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#434-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
      5. [Conversation summarization (Agent Prompt)](#435-conversation-summarization-agent-prompt)
      6. [Recent Message Summarization (Agent Prompt)](#436-recent-message-summarization-agent-prompt)
      7. [Compact file reference (System Reminder)](#437-compact-file-reference-system-reminder)
   4. [Task Tracking & Progress Management](#44-task-tracking-progress-management)
      1. [TodoWrite (Tool Description)](#441-todowrite-tool-description)
      2. [TaskCreate (Tool Description)](#442-taskcreate-tool-description)
      3. [TodoWrite reminder (System Reminder)](#443-todowrite-reminder-system-reminder)
      4. [Task tools reminder (System Reminder)](#444-task-tools-reminder-system-reminder)
      5. [Tool usage (task management) [System Prompt]](#445-tool-usage-task-management-system-prompt)
5. [Claude API, SDKs & External Integrations](#5-claude-api-sdks-external-integrations)
   1. [API Reference & Advanced Features](#51-api-reference-advanced-features)
      1. [Claude API SDK Reference Documentation](#511-claude-api-sdk-reference-documentation)
         1. [Claude API reference — Python (Data)](#5111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#5112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#5113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#5114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#5115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#5116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#5117-claude-api-reference-—-c-data)
         8. [Claude API reference — cURL (Data)](#5118-claude-api-reference-—-curl-data)
         9. [Claude model catalog (Data)](#5119-claude-model-catalog-data)
         10. [HTTP error codes reference (Data)](#51110-http-error-codes-reference-data)
         11. [Live documentation sources (Data)](#51111-live-documentation-sources-data)
      2. [Advanced API Features Reference](#512-advanced-api-features-reference)
         1. [Streaming reference — Python (Data)](#5121-streaming-reference-—-python-data)
         2. [Streaming reference — TypeScript (Data)](#5122-streaming-reference-—-typescript-data)
         3. [Tool use concepts (Data)](#5123-tool-use-concepts-data)
         4. [Tool use reference — Python (Data)](#5124-tool-use-reference-—-python-data)
         5. [Tool use reference — TypeScript (Data)](#5125-tool-use-reference-—-typescript-data)
         6. [Files API reference — Python (Data)](#5126-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#5127-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#5128-message-batches-api-reference-—-python-data)
         9. [Prompt Caching — Design & Optimization (Data)](#5129-prompt-caching-—-design-optimization-data)
   2. [Agent SDK & MCP Integration](#52-agent-sdk-mcp-integration)
      1. [Agent SDK Patterns & Reference](#521-agent-sdk-patterns-reference)
         1. [Agent SDK patterns — Python (Data)](#5211-agent-sdk-patterns-—-python-data)
         2. [Agent SDK patterns — TypeScript (Data)](#5212-agent-sdk-patterns-—-typescript-data)
         3. [Agent SDK reference — Python (Data)](#5213-agent-sdk-reference-—-python-data)
         4. [Agent SDK reference — TypeScript (Data)](#5214-agent-sdk-reference-—-typescript-data)
         5. [Build with Claude API (Skill)](#5215-build-with-claude-api-skill)
         6. [Build with Claude API (reference guide) [Skill]](#5216-build-with-claude-api-reference-guide-skill)
      2. [MCP Resources & Tool Discovery](#522-mcp-resources-tool-discovery)
         1. [MCP resource no content (System Reminder)](#5221-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#5222-mcp-resource-no-displayable-content-system-reminder)
         3. [ToolSearch (second part) [Tool Description]](#5223-toolsearch-second-part-tool-description)
   3. [GitHub, Browser & Web Integrations](#53-github-browser-web-integrations)
      1. [GitHub Integration & CI/CD](#531-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#5311-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#5312-github-app-installation-pr-description-data)
         3. [/pr-comments slash command (Agent Prompt)](#5313-pr-comments-slash-command-agent-prompt)
         4. [/review-pr slash command (Agent Prompt)](#5314-review-pr-slash-command-agent-prompt)
         5. [/review slash command (remote) [Agent Prompt]](#5315-review-slash-command-remote-agent-prompt)
      2. [Browser Automation & Web Tools](#532-browser-automation-web-tools)
         1. [Computer (Tool Description)](#5321-computer-tool-description)
         2. [Computer action (Tool Parameter)](#5322-computer-action-tool-parameter)
         3. [WebFetch (Tool Description)](#5323-webfetch-tool-description)
         4. [WebSearch (Tool Description)](#5324-websearch-tool-description)
         5. [Chrome browser MCP tools (System Prompt)](#5325-chrome-browser-mcp-tools-system-prompt)
         6. [Claude in Chrome browser automation (System Prompt)](#5326-claude-in-chrome-browser-automation-system-prompt)
6. [Developer Workflow Tools & Automation](#6-developer-workflow-tools-automation)
   1. [Git & Version Control Operations](#61-git-version-control-operations)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#611-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#612-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#613-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#614-bash-git-—-prefer-new-commits-tool-description)
      5. [EnterWorktree (Tool Description)](#615-enterworktree-tool-description)
      6. [ExitWorktree (Tool Description)](#616-exitworktree-tool-description)
      7. [Quick git commit (Agent Prompt)](#617-quick-git-commit-agent-prompt)
      8. [Quick PR creation (Agent Prompt)](#618-quick-pr-creation-agent-prompt)
      9. [Session title and branch generation (Agent Prompt)](#619-session-title-and-branch-generation-agent-prompt)
      10. [Git status (System Prompt)](#6110-git-status-system-prompt)
   2. [Codebase Exploration & Slash Commands](#62-codebase-exploration-slash-commands)
      1. [Codebase Exploration & Search Agents](#621-codebase-exploration-search-agents)
         1. [Explore (Agent Prompt)](#6211-explore-agent-prompt)
         2. [Explore strengths and guidelines (Agent Prompt)](#6212-explore-strengths-and-guidelines-agent-prompt)
         3. [LSP (Tool Description)](#6213-lsp-tool-description)
         4. [Tool usage (direct search) [System Prompt]](#6214-tool-usage-direct-search-system-prompt)
         5. [Tool usage (delegate exploration) [System Prompt]](#6215-tool-usage-delegate-exploration-system-prompt)
         6. [Tool usage (subagent guidance) [System Prompt]](#6216-tool-usage-subagent-guidance-system-prompt)
      2. [Skills & Slash Command Implementations](#622-skills-slash-command-implementations)
         1. [Skill (Tool Description)](#6221-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#6222-tool-usage-skill-invocation-system-prompt)
         3. [Debugging (Skill)](#6223-debugging-skill)
         4. [Simplify (Skill)](#6224-simplify-skill)
         5. [/loop slash command (Skill)](#6225-loop-slash-command-skill)
         6. [/stuck slash command (Skill)](#6226-stuck-slash-command-skill)
         7. [Update Claude Code Config (Skill)](#6227-update-claude-code-config-skill)
         8. [update-config (7-step verification flow) [Skill]](#6228-update-config-7-step-verification-flow-skill)
         9. [/init CLAUDE.md and skill setup (new version) [Skill]](#6229-init-claudemd-and-skill-setup-new-version-skill)
         10. [Create verifier skills (Skill)](#62210-create-verifier-skills-skill)
         11. [Skillify Current Session (System Prompt)](#62211-skillify-current-session-system-prompt)
   3. [Lifecycle Hooks, Scheduling & IDE Context](#63-lifecycle-hooks-scheduling-ide-context)
      1. [Hook System & Lifecycle Automation](#631-hook-system-lifecycle-automation)
         1. [Hooks Configuration (System Prompt)](#6311-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#6312-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#6313-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation prefix (System Reminder)](#6314-hook-stopped-continuation-prefix-system-reminder)
         5. [Hook stopped continuation (System Reminder)](#6315-hook-stopped-continuation-system-reminder)
         6. [Hook success (System Reminder)](#6316-hook-success-system-reminder)
         7. [Hook condition evaluator (Agent Prompt)](#6317-hook-condition-evaluator-agent-prompt)
         8. [Agent Hook (Agent Prompt)](#6318-agent-hook-agent-prompt)
      2. [Scheduling & Cron Job Management](#632-scheduling-cron-job-management)
         1. [CronCreate (Tool Description)](#6321-croncreate-tool-description)
         2. [/schedule slash command (Agent Prompt)](#6322-schedule-slash-command-agent-prompt)
      3. [IDE Integration & Editor Context](#633-ide-integration-editor-context)
         1. [Lines selected in IDE (System Reminder)](#6331-lines-selected-in-ide-system-reminder)
7. [Security, Communication & User Interaction](#7-security-communication-user-interaction)
   1. [Security Monitoring & Vulnerability Analysis](#71-security-monitoring-vulnerability-analysis)
      1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#711-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#712-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      3. [/security-review slash command (Agent Prompt)](#713-security-review-slash-command-agent-prompt)
      4. [Malware analysis after Read tool call (System Reminder)](#714-malware-analysis-after-read-tool-call-system-reminder)
      5. [Censoring assistance with malicious activities (System Prompt)](#715-censoring-assistance-with-malicious-activities-system-prompt)
      6. [Executing actions with care (System Prompt)](#716-executing-actions-with-care-system-prompt)
   2. [Output Formatting & User Communication](#72-output-formatting-user-communication)
      1. [Output Style, Formatting & Communication](#721-output-style-formatting-communication)
         1. [Tone and style (code references) [System Prompt]](#7211-tone-and-style-code-references-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#7212-tone-and-style-concise-output-—-short-system-prompt)
         3. [Output efficiency (System Prompt)](#7213-output-efficiency-system-prompt)
         4. [Output style active (System Reminder)](#7214-output-style-active-system-reminder)
         5. [How to use the SendUserMessage tool (System Prompt)](#7215-how-to-use-the-sendusermessage-tool-system-prompt)
         6. [SendMessageTool (non-agent-teams) [Tool Description]](#7216-sendmessagetool-non-agent-teams-tool-description)
         7. [Common suffix (response format) [Agent Prompt]](#7217-common-suffix-response-format-agent-prompt)
      2. [User Interaction & Clarification Tools](#722-user-interaction-clarification-tools)
         1. [AskUserQuestion (Tool Description)](#7221-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#7222-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#7223-option-previewer-system-prompt)
         4. [Prompt Suggestion Generator v2 (Agent Prompt)](#7224-prompt-suggestion-generator-v2-agent-prompt)
      3. [Learning Mode & Educational Workflows](#723-learning-mode-educational-workflows)
         1. [Learning mode (System Prompt)](#7231-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7232-learning-mode-insights-system-prompt)
   3. [Analytics, Research & Knowledge Management](#73-analytics-research-knowledge-management)
      1. [Session & Usage Insights Analytics](#731-session-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#7311-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7312-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7313-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7314-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7315-insights-suggestions-system-prompt)
         6. [Session Search Assistant (Agent Prompt)](#7316-session-search-assistant-agent-prompt)
      2. [Web Content Summarization & Research](#732-web-content-summarization-research)
         1. [WebFetch summarizer (Agent Prompt)](#7321-webfetch-summarizer-agent-prompt)
         2. [Claude guide agent (Agent Prompt)](#7322-claude-guide-agent-agent-prompt)
      3. [Resource Monitoring & Budget Tracking](#733-resource-monitoring-budget-tracking)
         1. [Token usage (System Reminder)](#7331-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#7332-usd-budget-system-reminder)
      4. [Documentation & Knowledge Base Management](#734-documentation-knowledge-base-management)
         1. [Update Magic Docs (Agent Prompt)](#7341-update-magic-docs-agent-prompt)

---

## 1. Bash Execution & Shell Safety

Rules, patterns, and security controls governing how Bash commands are executed, documented, and sandboxed. Covers tool selection, command chaining, sandbox enforcement, and injection detection.

### 1.1 Bash Command Execution Rules & Best Practices

Execution patterns and tool selection guidelines for Bash commands. Prioritizes dedicated tools over Bash for file operations and searching; chains dependent commands with `&&` for proper error handling; avoids polling and unnecessary delays; maintains working directory with absolute paths; and provides clear command descriptions for transparency.

#### 1.1.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using Bash for find, grep, cat, and similar searching commands; use dedicated tools instead for better user experience.

#### 1.1.2 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in Bash commands.

#### 1.1.3 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons (`;`) only when running commands sequentially where earlier command failures do not matter.

#### 1.1.4 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with `&&` in a single Bash call to ensure sequential execution with failure handling.

#### 1.1.5 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.1.6 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with `run_in_background`; wait for completion notification instead.

#### 1.1.7 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; execute them without delay.

#### 1.1.8 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

When polling an external process, use check commands like `gh run view` instead of sleeping first.

#### 1.1.9 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly rather than using echo or printf commands.

#### 1.1.10 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs to use the Grep tool instead of grep or rg commands for content searching.

#### 1.1.11 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs to use the Edit tool instead of sed or awk for file editing.

#### 1.1.12 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs to use the Glob tool instead of find or ls for file searching.

#### 1.1.13 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs to use the Read tool instead of cat, head, or tail for file reading.

#### 1.1.14 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs to use the Write tool instead of echo or cat for file writing.

#### 1.1.15 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and transparency than bash equivalents for file and search operations.

#### 1.1.16 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs to write clear, concise descriptions of bash commands, with brief summaries for simple commands and contextual detail for complex piped or obscure commands.

#### 1.1.17 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to maintain current working directory by using absolute paths and avoiding cd commands unless explicitly requested.

#### 1.1.18 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs not to use newlines to separate bash commands.

#### 1.1.19 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

#### 1.1.20 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to run independent bash commands as parallel tool calls in a single message to improve efficiency.

#### 1.1.21 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Specifies optional timeout configuration for bash commands, allowing users to set custom timeouts up to a maximum or use the default timeout value.

#### 1.1.22 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs to verify parent directory existence before creating new files or directories using ls.

#### 1.1.23 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between bash commands but shell state does not, with environment initialized from user profile.

### 1.2 Bash Sandbox Policy & Detection

Sandbox enforcement and failure diagnosis for Bash command execution. All commands run in sandbox mode by default with mandatory restrictions; failures are detected through access denied errors, network connection failures, and permission violations. When sandbox restrictions cause failures, the system automatically retries without sandbox and explains the restriction to the user.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

When a command fails due to sandbox restrictions, collaborate with the user to adjust sandbox settings.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Default to running Bash commands within the sandbox; only bypass when the user explicitly requests or sandbox restrictions are evident.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that show sandbox-caused command failures.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox network restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

"Operation not permitted" errors for file or network operations signal sandbox restrictions.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions on inter-process communication.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Describes the condition when a command fails with clear evidence of sandbox restrictions, distinguishing sandbox failures from other error causes.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All Bash commands must run in sandbox mode; the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; even after running a command with sandbox disabled, default to sandbox mode for future commands.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing the response strategy when sandbox-caused failures are detected.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry a failed command with `dangerouslyDisableSandbox: true` without asking the user.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Always use the `$TMPDIR` environment variable (or `${SANDBOX_TMPDIR_FN()}` as fallback) for temporary files in sandbox mode, not `/tmp` directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling the sandbox will prompt the user for permission.

### 1.3 Bash Command Documentation & Safety

Generates clear descriptions of bash commands while detecting command injection attacks through prefix extraction and malicious pattern recognition. Enforces safety by identifying executable boundaries and flagging dangerous command chaining.

#### 1.3.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or obscure-flag commands.

#### 1.3.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attacks in bash commands by extracting the executable prefix (e.g., git, npm, find) and flagging malicious chaining patterns to enforce safety allowlisting.

---

## 2. File, Code, and Notebook Operations

Specialized tools and discipline for reading, editing, searching, and verifying files and code. Covers filesystem tool preferences, engineering quality standards, notebook cell manipulation, and code validation workflows.

### 2.1 File System Operations & Tool Preferences

Dedicated file tools provide optimized operations for reading (with multimodal support), editing (via precise string replacement), writing, and searching (glob patterns and regex). System guidance reserves Bash for system commands while defaulting to specialized tools for filesystem work.

#### 2.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from local filesystem with support for images, PDFs (with page ranges for large files), and Jupyter notebooks, defaulting to a configurable line limit.

#### 2.1.2 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with precise indentation matching and supports bulk replacement via replace_all parameter.

#### 2.1.3 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem with full overwrite capability. Prefers the Edit tool for modifications and prohibits creating documentation or README files unless explicitly requested.

#### 2.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like **/*.js, returning results sorted by modification time.

#### 2.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful search tool built on ripgrep supporting regex patterns, file filtering by glob or type, and multiple output modes including content, file paths, and match counts.

#### 2.1.6 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Directs use of the Write tool to create files instead of cat heredoc or echo redirection.

#### 2.1.7 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs use of the Edit tool to modify files instead of sed or awk.

#### 2.1.8 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Directs use of the Read tool to access file contents instead of cat, head, tail, or sed.

#### 2.1.9 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Directs use of the Grep tool to search file contents instead of grep or rg.

#### 2.1.10 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Directs use of the Glob tool to search for files instead of find or ls.

#### 2.1.11 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserves the Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

#### 2.1.12 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Alerts Claude when a file read offset exceeds the file's actual length.

#### 2.1.13 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line limit and instructs use of the read tool for additional content.

#### 2.1.14 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns that a file exists but contains no content.

#### 2.1.15 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies the agent that a file was modified externally by the user or linter and provides a diff snippet, instructing the agent to account for the changes without reverting unless requested.

#### 2.1.16 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies the agent that the user opened a file in the IDE, which may or may not relate to the current task.

### 2.2 Code Quality & Engineering Discipline

Directives for maintaining focused, pragmatic code changes by avoiding over-engineering, premature abstractions, and unnecessary additions. Emphasizes reading existing code before modification, minimizing file creation, trusting framework guarantees, and deferring to user judgment on scope and approach.

#### 2.2.1 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Directive to avoid over-engineering by making only directly requested or clearly necessary changes, keeping solutions simple and focused.

#### 2.2.2 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directive against creating helpers, utilities, or abstractions for one-time operations or hypothetical future requirements.

#### 2.2.3 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directive against adding features, refactoring, or improving beyond what was asked, including unnecessary docstrings or type annotations.

#### 2.2.4 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directive against adding error handling for impossible scenarios, trusting internal code and framework guarantees while validating only at system boundaries.

#### 2.2.5 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Directive to delete unused code completely rather than adding compatibility shims, re-exports, or removed comments.

#### 2.2.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directive to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

#### 2.2.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Directive to read and understand existing code before proposing or making modifications.

#### 2.2.8 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Directs Claude to interpret user requests in the context of software engineering tasks like bug fixes, refactoring, and code modifications, applying instructions to actual codebase changes rather than abstract responses.

#### 2.2.9 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Directive to enable users to complete ambitious tasks by deferring to user judgement on scope rather than declining based on complexity.

#### 2.2.10 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Directive to consider alternative approaches when blocked instead of brute-forcing, using AskUserQuestion to align on the right path forward.

#### 2.2.11 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Directive to avoid giving time estimates or predictions for task duration.

#### 2.2.12 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Brief directive to inform users of help and feedback channels when requested.

#### 2.2.13 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities like command injection, XSS, and SQL injection, prioritizing safe and secure code.

### 2.3 Code Verification & Testing

Systematic approaches to validating code changes through behavioral observation, adversarial testing, and platform-specific verification workflows that establish evidence-based confidence in implementations.

#### 2.3.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

System prompt for a verification subagent that adversarially tests implementations through builds, test suites, linters, and adversarial probes, issuing PASS/FAIL/PARTIAL verdicts with command evidence.

#### 2.3.2 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow for validating code changes by running the app and observing behavior rather than reading diffs or running tests. Defines a discovery ladder for reaching the changed code's surface (CLI, API, GUI, or library), a process for planning minimal interactions, and verdict criteria (PASS/FAIL/BLOCKED) based on captured evidence of the change's effect.

#### 2.3.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying CLI changes by building, running with test arguments, and comparing output and exit codes.

#### 2.3.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying server/API changes by starting the server, making curl requests, and validating response status and headers.

#### 2.3.5 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for workers implementing changes: simplify code, run unit tests, test end-to-end, commit and push, and report the PR URL. Includes guidance on test discovery and error handling.

#### 2.3.6 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the codebase.

### 2.4 Jupyter Notebook & Specialized File Handling

Targeted manipulation of notebook cell contents and temporal control primitives for managing execution flow and interactive workflows.

#### 2.4.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replaces contents of specific cells in Jupyter notebooks, supporting insert and delete operations on 0-indexed cells.

#### 2.4.2 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Waits for a specified duration with user interrupt capability, receiving periodic tick prompts for check-ins without holding shell processes.

---

## 3. Agent Architecture & Runtime Behavior

Design, configuration, and runtime protocols for autonomous agents and multi-agent systems. Covers orchestration, worker coordination, response formatting, permission controls, session labeling, and operational mode settings.

### 3.1 Multi-Agent Coordination

Orchestration of agent teams for parallel task execution, including swarm management, task assignment, inter-agent messaging, and context inheritance for subagents.

#### 3.1.1 Multi-Agent Team Coordination & Swarm Management

Orchestration of multi-agent teams for parallel task execution and complex workflows. Agents communicate via message passing, coordinate through shared task lists and team memory, and operate autonomously within assigned scopes. Supports team creation, task assignment, graceful shutdown, and context inheritance for specialized subagents.

##### 3.1.1.1 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to other agents in a team, supporting broadcast to all teammates and legacy protocol responses for shutdown and plan approval requests.

##### 3.1.1.2 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages teams and coordinates multiple agents in a swarm, handling team creation, task assignment, message delivery, and teammate lifecycle including idle states and graceful shutdown.

##### 3.1.1.3 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all active members to be terminated first.

##### 3.1.1.4 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for finding and claiming available tasks from shared task lists, prioritizing by ID order and managing blockers.

##### 3.1.1.5 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use the SendMessage tool to communicate with teammates, either individually or via team-wide broadcasts, since text responses are not visible to other team members.

##### 3.1.1.6 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and content for injection into conversation context.

##### 3.1.1.7 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with a name and identity, directing it to read team config, check task lists, and communicate with teammates by name.

##### 3.1.1.8 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before returning a response to the user in non-interactive mode.

##### 3.1.1.9 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts, distinguishing between context-inheriting agents (which need directives and scope) and fresh subagents (which need background and context). Emphasizes proving understanding through specific details rather than delegating synthesis.

##### 3.1.1.10 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states without fabricating results, and reporting findings from completed delegations.

##### 3.1.1.11 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for research and implementation work, prohibits reading fork output mid-flight or fabricating results, and requires trusting completion notifications rather than predicting outcomes.

##### 3.1.1.12 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Provides comprehensive usage guidance for the Task/Agent tool, covering agent spawning, concurrent execution, background task handling, agent resumption with context preservation, worktree isolation, and best practices for autonomous task delegation.

##### 3.1.1.13 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses for handling complex multi-step tasks autonomously, with guidance on available agent types and context inheritance.

#### 3.1.2 Agent Design, Configuration & Orchestration

Designs, configures, and orchestrates AI agents for autonomous task execution. Encompasses agent architecture specification, codebase documentation, parallel work decomposition with worker sub-agents, rule validation for autonomous classifiers, and continuous execution modes with safety guardrails.

##### 3.1.2.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design high-performance AI agent configurations by extracting user intent, creating expert personas, architecting comprehensive system prompts, optimizing for performance, and generating JSON specifications with identifiers, usage examples, and operational guidelines aligned to project standards.

##### 3.1.2.2 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation by documenting common build/test/lint commands, high-level architecture, and project-specific standards without repeating obvious practices.

##### 3.1.2.3 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining e2e test recipes, planning in detail, and spawning background worker agents with full isolation and progress tracking.

##### 3.1.2.4 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability, evaluating allow/soft_deny/environment categories to ensure the LLM classifier can correctly interpret and act on them.

##### 3.1.2.5 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

System prompt for a forked worker sub-agent that executes directives directly without spawning further sub-agents, reporting structured results with scope, findings, and issues.

##### 3.1.2.6 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate implementation, minimal interruptions, preference for action over planning, reasonable decision-making, and thorough completion including tests and verification. Prohibits posting to public services without explicit user approval.

### 3.2 Agent Thread Protocols & Access Control

Runtime rules governing how individual agent threads format output, invoke tools, seek guidance, and operate within permission boundaries.

#### 3.2.1 Agent Thread Behavior & Response Guidelines

Protocols governing how agent threads format responses, invoke tools, and seek guidance—requiring absolute paths in output, consulting a stronger reviewer model before substantive work, and spawning lightweight agents for isolated questions without tool access.

##### 3.2.1.1 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads requiring absolute file paths, relevant file paths in final responses, avoidance of emojis, and no colons before tool calls.

##### 3.2.1.2 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the Advisor tool, a stronger reviewer model that receives full conversation history. Directs calling the advisor before substantive work, when stuck, when considering approach changes, and before declaring completion.

##### 3.2.1.3 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs a lightweight agent spawned for a side question to answer directly without tools, based only on conversation context, and to avoid implying it was interrupted or will take further actions.

##### 3.2.1.4 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies the agent that the user wants to invoke a specific agent type and instructs appropriate invocation with required context.

#### 3.2.2 Permission Management & Tool Execution Control

Governs tool access through permission modes requiring user approval, handles denied tool calls by attempting legitimate alternatives or stopping to explain when capabilities are essential, and optimizes execution by parallelizing independent tool calls.

##### 3.2.2.1 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Defines behavior when a tool is denied: attempt reasonable alternatives but avoid malicious workarounds, and stop to explain to the user if the capability is essential and cannot be legitimately replaced.

##### 3.2.2.2 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Describes tool execution under permission modes, requiring user approval for non-automatically-allowed tools and prohibiting re-attempts of denied calls.

##### 3.2.2.3 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Directs Claude to call multiple independent tools in parallel to increase efficiency, while calling dependent tools sequentially.

### 3.3 Session Identity & Operational Settings

Metadata labeling for agent sessions, mode configuration for feature availability, and resource handling protocols.

#### 3.3.1 Agent Metadata & Session Naming

Semantic labeling and contextual representation of agent work, capturing session identity, recent actions, and terminal state through concise structured metadata.

##### 3.3.1.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates a concise 3–7 word sentence-case title capturing the main goal of a coding session, returning JSON with a single title field.

##### 3.3.1.2 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Instructs agents to describe their most recent action in 3-5 words using present tense, naming the file or function rather than branch names, without using tools.

##### 3.3.1.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

System prompt for configuring Claude Code status line display, converting shell PS1 configurations and managing status line commands with session context and token usage metrics.

#### 3.3.2 Operational Mode Configuration

Settings that control feature availability and resource handling, from disabling hooks and plugins in minimal mode to directing temporary file storage and establishing error-handling protocols that prioritize root-cause diagnosis over retry loops.

##### 3.3.2.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode operation that disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags for authentication and configuration.

##### 3.3.2.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a dedicated session-specific scratchpad directory for temporary files instead of /tmp, enabling free use without permission prompts.

##### 3.3.2.3 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; instead requires diagnosing root causes.

---

## 4. Planning, Memory & Context Management

Systems for structured planning before implementation, persistent memory across sessions, task progress tracking, and conversation summarization to maintain continuity.

### 4.1 Planning Mode & Implementation Design

Structured planning workflows for non-trivial code changes, enabling exploration and design before implementation. Supports iterative pair-planning with users, multi-agent parallel exploration, and comprehensive risk assessment. Plans are persisted in files and require explicit user approval before execution begins.

#### 4.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions into plan mode for non-trivial implementation tasks, enabling exploration of the codebase and design of implementation approaches for user approval before coding begins.

#### 4.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning and requests user approval by reading the plan from file, used only for implementation tasks requiring code changes.

#### 4.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Activates a structured 5-phase planning workflow with parallel exploration and multi-agent design, requiring Claude to read code, launch subagents for investigation and planning, review proposals, and exit plan mode only after user approval.

#### 4.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative pair-planning with the user, requiring Claude to explore code, update a plan file incrementally, ask clarifying questions, and exit only when the plan is ready for approval.

#### 4.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagent actions to read-only operations and plan file editing, requiring comprehensive answers and clarifying questions before proceeding.

#### 4.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude to read the existing plan file, evaluate whether the new request is a continuation or different task, and update the plan accordingly before exiting.

#### 4.1.7 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Instructs Claude to create detailed implementation plans using multi-agent exploration and critique, spawning parallel agents to analyze code architecture, identify files for modification, and assess risks before synthesizing a comprehensive step-by-step plan.

#### 4.1.8 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies the agent that plan mode has been exited and actions can now be taken, optionally referencing the plan file location.

#### 4.1.9 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file and instructs Claude to continue working on it if relevant.

#### 4.1.10 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to call a verification tool directly after plan implementation to confirm all plan items were completed correctly.

#### 4.1.11 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent that explores codebases and designs implementation plans in read-only mode, identifying critical files and architectural trade-offs without modifying code.

#### 4.1.12 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Defines final plan phase requiring concise file-by-file modification lists with function references and a single verification command, limited to 40 lines.

### 4.2 Memory & Session Persistence

Multi-layered memory system preserves institutional knowledge across sessions through structured files, consolidation passes that merge recent insights, and intelligent selection of relevant context. Supports cross-machine continuity, skill tracking, and domain-specific learning for specialized roles.

#### 4.2.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file stored at a specific path.

#### 4.2.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

#### 4.2.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Alerts Claude that the session continues from another machine and the working directory may have changed.

#### 4.2.4 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the session and reminds Claude to follow their guidelines.

#### 4.2.5 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations, preserving document structure while adding actionable insights from user interactions.

#### 4.2.6 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs a reflective multi-phase memory consolidation pass by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to stay under size limits.

#### 4.2.7 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from a list based on user query and recently-used tools, excluding API documentation for active tools but including warnings and gotchas.

#### 4.2.8 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including memory update instructions in agent system prompts to build institutional knowledge across conversations. Provides domain-specific examples for code reviewers, test runners, architects, and documentation writers.

#### 4.2.9 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type for storing guidance on work approaches, emphasizing recording both successes and failures while checking for contradictions with team memories.

#### 4.2.10 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Guidance for writing user memory descriptions that capture role, goals, responsibilities, and knowledge to tailor behavior and avoid negative judgements.

#### 4.2.11 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing current state, task specification, files, workflow, errors, and key results.

### 4.3 Context Compaction & Conversation Summarization

Structured summarization frameworks compress exhausted conversations into resumable snapshots, capturing task state, discoveries, technical details, and next steps while preserving critical context. Supports both full-conversation and recent-message analysis with varying detail levels.

#### 4.3.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Framework for writing continuation summaries when context windows are exhausted, structured with task overview, current state, discoveries, next steps, and context to preserve for efficient resumption.

#### 4.3.2 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

Analysis framework for context compaction that wraps thinking in tags and chronologically reviews the entire conversation, identifying user requests, approach, decisions, technical details, errors, and user feedback.

#### 4.3.3 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Lean experimental version of analysis instructions for context compaction that uses analysis tags as a planning scratchpad without code snippets, deferring detail to the summary section.

#### 4.3.4 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

Analysis framework for context compaction focused on recent messages, chronologically identifying user requests, approach, decisions, technical details, errors, and user feedback.

#### 4.3.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries covering primary requests, technical concepts, files examined, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps with code snippets and absolute file paths.

#### 4.3.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages covering requests, technical concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps while preserving earlier context intact.

#### 4.3.7 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies the agent that a file was read before conversation summarization but is too large to include, directing use of the Read tool if needed.

### 4.4 Task Tracking & Progress Management

Structured task tracking enables breaking down work into discrete steps with state management (pending, in-progress, completed), supporting incremental progress visibility and cleanup of stale items. System reminders prompt consideration of task tools when relevant to current work.

#### 4.4.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with task states (pending, in_progress, completed), supporting both imperative and active continuous forms for task descriptions.

#### 4.4.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress and organize complex multi-step tasks, with support for task descriptions and active forms.

#### 4.4.3 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Reminds Claude to consider using the TodoWrite tool for tracking task progress if relevant to current work, and to clean up stale todo lists.

#### 4.4.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant to current work.

#### 4.4.5 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs use of the TodoWrite tool to break down work, track progress, and mark tasks as completed incrementally rather than in batches.

---

## 5. Claude API, SDKs & External Integrations

Reference documentation and integration patterns for building with Claude via APIs, language-specific SDKs, and external platforms like GitHub and browsers.

### 5.1 API Reference & Advanced Features

Core API documentation covering model selection, error handling, streaming, tool use, batch processing, prompt caching, and structured outputs across all supported languages.

#### 5.1.1 Claude API SDK Reference Documentation

Language-specific SDK references and API documentation for building with Claude across Python, TypeScript, Go, Java, Ruby, PHP, C#, and raw HTTP. Covers model selection, error handling, streaming, tool use, prompt caching, and extended thinking with current model catalog and HTTP error reference.

##### 5.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization strategies.

##### 5.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, and cost optimization.

##### 5.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use with BetaToolRunner, thinking, prompt caching, and server-side tools.

##### 5.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking, tool use with annotated classes and BetaToolRunner, prompt caching, and structured output.

##### 5.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, tool use with beta tool runner, and prompt caching.

##### 5.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization, basic requests, streaming, tool use with BetaRunnableTool, extended thinking, prompt caching, and structured output.

##### 5.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use with annotated classes, prompt caching, structured output, and server-side tools.

##### 5.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming, tool use, prompt caching, and extended thinking with JSON examples.

##### 5.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and retired Claude models with exact model IDs, context windows, max output tokens, and programmatic model discovery via the Models API.

##### 5.1.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400–529) with causes, handling strategies, and typed exception classes for Python and TypeScript SDKs.

##### 5.1.1.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and official repositories, enabling real-time access to latest features.

#### 5.1.2 Advanced API Features Reference

Technical references for streaming, tool use, file handling, batch processing, and prompt caching. Covers real-time response handling, agentic loops, server-side tools, structured outputs, asynchronous batch operations, and cache optimization patterns.

##### 5.1.2.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference with sync/async examples, handling text, thinking blocks, and tool use, plus progress tracking and error handling patterns.

##### 5.1.2.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, content types, tool use with tool runner, and best practices for real-time response handling.

##### 5.1.2.3 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice, tool runner vs manual loops, server-side tools (code execution, web search, computer use), and structured outputs.

##### 5.1.2.4 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner with @beta_tool decorator, manual agentic loops, code execution, memory tool, and structured outputs with Pydantic.

##### 5.1.2.5 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference with tool runner using Zod schemas, manual agentic loops with streaming, code execution, memory tool, and structured outputs.

##### 5.1.2.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, listing, deletion, metadata retrieval, and usage in messages with documents and images.

##### 5.1.2.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript reference for the Files API, covering file upload, listing, deletion, and usage in messages with a 500 MB size limit and 100 GB per-organization storage.

##### 5.1.2.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for asynchronous batch processing of up to 100,000 requests at 50% cost, with polling, result retrieval, and prompt caching support.

##### 5.1.2.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Design patterns and anti-patterns for effective prompt caching, covering prefix-stability ordering, breakpoint placement, silent invalidators, and cache-hit verification.

### 5.2 Agent SDK & MCP Integration

SDK patterns for building agents in Python and TypeScript, including MCP resource management, tool discovery, and routing guidance for selecting the right Claude surface.

#### 5.2.1 Agent SDK Patterns & Reference

Comprehensive Agent SDK documentation and patterns for Python and TypeScript, covering agent construction, MCP integration, custom tools, hooks, subagents, permission modes, and session management. Includes routing guidance for selecting appropriate Claude surface (API, workflow, or agent).

##### 5.2.1.1 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with code examples.

##### 5.2.1.2 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks, subagents, MCP server integration, and session history management with code examples.

##### 5.2.1.3 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, permission modes, MCP support, hooks, subagents, and session management.

##### 5.2.1.4 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference covering installation, query interface, permission modes, MCP support, hooks, subagents, and session management.

##### 5.2.1.5 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Comprehensive routing guide for building LLM applications with Claude, including language detection, surface selection (single call vs workflow vs agent), model defaults, thinking/effort parameters, and architecture overview.

##### 5.2.1.6 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation guide for language-specific Claude API reference documentation with quick task routing to relevant sections.

#### 5.2.2 MCP Resources & Tool Discovery

Manages MCP resource availability and enables tool discovery through schema-based lookups. Handles resource content states and provides deferred tool definitions for dynamic invocation.

##### 5.2.2.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 5.2.2.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it is not displayable.

##### 5.2.2.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool definitions by name or keyword query, returning complete JSONSchema definitions for invocation.

### 5.3 GitHub, Browser & Web Integrations

Automated workflows connecting Claude to GitHub repositories for code review and PR analysis, plus browser automation and web content retrieval tools.

#### 5.3.1 GitHub Integration & CI/CD

Automated workflows and templates that connect Claude to GitHub repositories, enabling code review, pull request analysis, and AI-assisted development through @claude mentions and GitHub App integration.

##### 5.3.1.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, PRs, or comments, enabling automated AI-assisted code work.

##### 5.3.1.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security, and how to invoke Claude via @claude mentions.

##### 5.3.1.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and review comments with diff context, file paths, and line numbers in a readable threaded format.

##### 5.3.1.4 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, correctness, conventions, performance, test coverage, and security with concise formatted output.

##### 5.3.1.5 [/review slash command (remote) [Agent Prompt]](system-prompts/agent-prompt-review-slash-command-remote.md)

Remote version of PR review that runs in a sandboxed environment with repository checkout, analyzing code quality and wrapping results in result tags for local session extraction.

#### 5.3.2 Browser Automation & Web Tools

Tools for interacting with web content and browsers, combining direct Chrome automation with web search and content retrieval capabilities to access real-time information and perform UI-driven tasks.

##### 5.3.2.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Enables mouse and keyboard interaction with a Chrome browser, including screenshot capture and precise cursor positioning for clicking elements.

##### 5.3.2.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameters for Chrome browser automation including mouse operations (click, drag, hover), keyboard input, scrolling, screenshot capture, and element inspection via zoom and scroll-to functions.

##### 5.3.2.3 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with an AI model based on a user-provided prompt. Includes automatic HTTPS upgrade, redirect handling, and a 15-minute cache for repeated requests.

##### 5.3.2.4 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Enables Claude to search the web for current information beyond its knowledge cutoff and return formatted results with markdown hyperlinks. Requires mandatory inclusion of a Sources section in responses and supports domain filtering.

##### 5.3.2.5 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions requiring ToolSearch to load Chrome browser MCP tools before use, with specific steps for loading and calling tools like tabs_context_mcp.

##### 5.3.2.6 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Comprehensive guidelines for browser automation including GIF recording with extra frames, console log debugging with pattern filtering, avoiding JavaScript alerts that block commands, and staying focused on tasks without rabbit holes. Emphasizes calling tabs_context_mcp at session start and never reusing tab IDs across sessions.

---

## 6. Developer Workflow Tools & Automation

Tools and workflows that extend Claude Code for day-to-day development: version control, codebase exploration, slash commands, lifecycle hooks, scheduling, and IDE integration.

### 6.1 Git & Version Control Operations

Git workflow management including commit creation, pull request generation, and worktree isolation. Enforces safety protocols by avoiding destructive operations, respecting hooks and signing requirements, and preferring new commits over amendments. Provides structured workflows for committing changes and creating pull requests with pre-populated context and safety checks.

#### 6.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

#### 6.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, covering git safety protocols, commit message drafting, hook handling, and PR creation with gh command, emphasizing user-explicit authorization and avoiding destructive operations.

#### 6.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs never to skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues when hooks fail.

#### 6.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to prefer creating new commits over amending existing commits.

#### 6.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, only when explicitly requested by the user.

#### 6.1.6 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree, restoring the original working directory with options to keep or remove the worktree and its branch.

#### 6.1.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context (status, diff, branch, recent commits), analyzing changes to draft a message following repository conventions and enforcing safety protocols.

#### 6.1.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request with pre-populated context, handling branch creation, commit messaging, and PR body generation with safety protocols and optional attribution.

#### 6.1.9 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent for generating succinct session titles and git branch names from task descriptions, following naming conventions for clarity and consistency.

#### 6.1.10 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status snapshot including branch, main branch reference, file status, and recent commits at conversation start.

### 6.2 Codebase Exploration & Slash Commands

Specialized agents for navigating codebases via pattern search and LSP integration, plus user-invocable slash commands for debugging, refactoring, and onboarding workflows.

#### 6.2.1 Codebase Exploration & Search Agents

Specialized agents and tools for navigating and analyzing codebases through pattern-based file search, language server integration, and intelligent delegation strategies that balance direct queries with deeper exploration.

##### 6.2.1.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

File search specialist for Claude Code that rapidly navigates codebases using glob patterns, regex grep, and file reading in strict read-only mode, spawning parallel tool calls for efficiency.

##### 6.2.1.2 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines strengths and behavioral guidelines for the Explore subagent, emphasizing read-only codebase search, multi-file analysis, and avoiding unnecessary file creation.

##### 6.2.1.3 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol integration for code intelligence features including definition lookup, reference finding, hover information, symbol search, and call hierarchy analysis.

##### 6.2.1.4 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Directs use of Glob and Grep tools directly for simple, targeted codebase searches.

##### 6.2.1.5 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Recommends using the Task tool with exploration subagents for broader codebase exploration and deep research when simple directed searches are insufficient or will exceed query limits.

##### 6.2.1.6 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool with specialized subagents for parallelizing work and protecting context, while avoiding duplication of effort already performed by subagents.

#### 6.2.2 Skills & Slash Command Implementations

User-invocable domain-specific capabilities that extend Claude Code functionality through slash commands, covering debugging, refactoring, scheduling, configuration management, and comprehensive onboarding workflows.

##### 6.2.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills within the main conversation, invoked by name with optional arguments, matching user slash commands to available domain-specific capabilities.

##### 6.2.2.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Explains that slash commands like /commit invoke user-invocable skills via the Skill tool, and warns against guessing or using built-in CLI commands.

##### 6.2.2.3 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting fixes.

##### 6.2.2.4 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel agents to identify code reuse opportunities, quality issues, and efficiency problems.

##### 6.2.2.5 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts to cron expression, and schedules recurring tasks with automatic execution.

##### 6.2.2.6 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning processes for high CPU, I/O hangs, memory leaks, and stuck subprocesses.

##### 6.2.2.7 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json) to add hooks, permissions, environment variables, and MCP servers.

##### 6.2.2.8 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks in Claude Code configuration, ensuring they work correctly through dedup checks, pipe-testing, and live proof.

##### 6.2.2.9 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md, skills, and hooks in a repository through codebase exploration, user interviews, and iterative proposal refinement.

##### 6.2.2.10 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically verify code changes via Playwright (web UI), Tmux (CLI), or HTTP (API) testing.

##### 6.2.2.11 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides conversion of a session into a reusable skill through four-round user interviews covering confirmation, details, step breakdown, and final questions, producing a SKILL.md file with frontmatter, inputs, goals, and annotated steps.

### 6.3 Lifecycle Hooks, Scheduling & IDE Context

Event-driven hooks at lifecycle points, time-based cron scheduling for local and remote agents, and IDE editor context awareness.

#### 6.3.1 Hook System & Lifecycle Automation

Event-driven hook system executes commands, prompts, or agents at lifecycle points (PreToolUse, PostToolUse, SessionStart) with tool-specific matchers and conditional logic. Supports blocking execution, error handling, and structured verification of task completion.

##### 6.3.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Documents hook configuration system for Claude Code that runs commands, prompts, or agents at lifecycle events like PreToolUse, PostToolUse, and SessionStart, with matchers for specific tools and JSON output control.

##### 6.3.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Delivers additional context provided by a hook command.

##### 6.3.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 6.3.1.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix template for continuation messages when a hook stops execution.

##### 6.3.1.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude when a hook halts execution and provides the associated message.

##### 6.3.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Delivers a success message from a completed hook command.

##### 6.3.1.7 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code and returns JSON indicating success or failure with optional reason.

##### 6.3.1.8 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies that an agent completed its assigned plan by analyzing conversation transcripts and codebase state, returning structured JSON output indicating success or failure with reasons.

#### 6.3.2 Scheduling & Cron Job Management

Time-based automation for both local and remote agent execution, supporting one-shot and recurring triggers with timezone awareness and cloud API integration.

##### 6.3.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron-based jobs using standard 5-field cron syntax in local timezone, with guidance on avoiding :00/:30 minute marks for load distribution and optional durability for persistence across sessions.

##### 6.3.2.2 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling, updating, listing, and running remote Claude Code agents on cron triggers via Anthropic cloud API, handling environment selection, MCP connectors, timezone conversion, and trigger management.

#### 6.3.3 IDE Integration & Editor Context

Provides Claude with awareness of user selections and editor state within the IDE environment.

##### 6.3.3.1 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of line ranges selected by the user in the IDE editor.

---

## 7. Security, Communication & User Interaction

Security monitoring, vulnerability assessment, output formatting standards, user clarification tools, analytics, and educational workflows that shape how Claude interacts with and protects users.

### 7.1 Security Monitoring & Vulnerability Analysis

Frameworks for evaluating code safety and autonomous agent actions through threat modeling, vulnerability assessment, and permission controls. Covers prompt injection prevention, destructive operation safeguards, malware analysis, and reversibility-based risk evaluation.

#### 7.1.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Instructs Claude to act as a security monitor evaluating autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage in shared infrastructure environments.

#### 7.1.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules, and allow exceptions governing which tool actions autonomous agents may perform, covering git operations, cloud storage, deployments, credentials, and data exfiltration.

#### 7.1.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt for analyzing code changes with focus on exploitable vulnerabilities, using multi-phase analysis to identify injection flaws, authentication bypasses, cryptographic weaknesses, and data exposure issues.

#### 7.1.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code.

#### 7.1.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing destructive techniques, DoS attacks, and detection evasion for malicious purposes.

#### 7.1.6 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a framework for executing actions safely by evaluating reversibility and blast radius, requiring user confirmation for destructive or hard-to-reverse operations like force-pushes, deletions, and shared-system changes while permitting local, reversible actions freely.

### 7.2 Output Formatting & User Communication

Standards for concise, direct responses with precise code references, clarification mechanisms, visual previews for comparing options, and educational collaborative workflows.

#### 7.2.1 Output Style, Formatting & Communication

Governs how Claude communicates with users through concise, direct output with precise code references and structured messaging. Establishes response patterns for different contexts—sub-agent reporting versus standalone communication—while maintaining information density and clarity.

##### 7.2.1.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number patterns when referencing code to help users navigate to source locations.

##### 7.2.1.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs responses to be short and concise.

##### 7.2.1.3 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler, and focusing text output on decisions, status updates, and blockers.

##### 7.2.1.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and to follow its guidelines.

##### 7.2.1.5 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to route all user-facing replies through SendUserMessage, with guidance on acknowledgment patterns, checkpoints for longer work, and keeping messages concise and informative.

##### 7.2.1.6 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown messages to users with optional file attachments, using status labels to indicate intent (normal or proactive).

##### 7.2.1.7 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise sub-agent reporting and detailed standalone writeups based on an IS_SUBAGENT flag.

#### 7.2.2 User Interaction & Clarification Tools

Mechanisms for gathering user input, clarifying ambiguous instructions, and presenting implementation choices during execution. Includes visual preview capabilities for comparing options side-by-side and predictive suggestion of next steps based on conversation context.

##### 7.2.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying ambiguous instructions, and offering implementation choices during execution, with special guidance for plan mode interactions.

##### 7.2.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Explains how to use the optional preview field in AskUserQuestion single-select options to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML.

##### 7.2.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using optional preview field for ASCII mockups, code snippets, diagrams, and configuration examples in monospace boxes.

##### 7.2.2.4 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent messages, avoiding evaluative or Claude-voice suggestions and staying silent when the next step is unclear.

#### 7.2.3 Learning Mode & Educational Workflows

Collaborative software engineering approach where humans contribute to design decisions and code sections marked with TODO(human) annotations. Provides educational context around implementation choices and codebase patterns while tracking progress through task lists.

##### 7.2.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Defines learning mode as collaborative software engineering with human contributions on design decisions, using TodoList tracking and Learn by Doing requests with TODO(human) markers for 20+ line code sections.

##### 7.2.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code writing in learning mode, focusing on implementation choices and codebase-specific patterns.

### 7.3 Analytics, Research & Knowledge Management

Session usage analytics for workflow improvement, web content summarization and research tools, resource budget tracking, and documentation maintenance.

#### 7.3.1 Session & Usage Insights Analytics

Analyzes Claude Code session data to extract structured insights about usage patterns, friction points, and opportunities for workflow improvement. Generates actionable recommendations including feature suggestions and CLAUDE.md guidance, while supporting discovery of relevant sessions through metadata and semantic search.

##### 7.3.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part usage insights summary covering what's working, hindrances, quick wins, and ambitious workflows for improved Claude Code usage.

##### 7.3.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with specific examples and actionable improvements.

##### 7.3.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data analysis.

##### 7.3.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from session transcripts including goal categories, user satisfaction signals, and friction types with strict guidelines for counting only explicit user requests and signals.

##### 7.3.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP servers, custom skills, hooks, headless mode, task agents), and usage pattern guidance based on session analysis.

##### 7.3.1.6 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Agent prompt for finding relevant sessions based on user queries, prioritizing exact tag matches and semantic similarity across session metadata.

#### 7.3.2 Web Content Summarization & Research

Extracts and synthesizes information from web sources with character-limited quotes and licensing respect, while providing guided access to Claude documentation and project-specific resources for users learning the platform.

##### 7.3.2.1 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Prompt for agent that summarizes verbose web content, enforcing character limits on quotes and respecting licensing for untrusted domains.

##### 7.3.2.2 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing actionable guidance, and referencing project-specific files like CLAUDE.md.

#### 7.3.3 Resource Monitoring & Budget Tracking

Real-time visibility into consumption metrics across token and financial dimensions, enabling users to track quota utilization against allocated limits.

##### 7.3.3.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 7.3.3.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including spent, total, and remaining amounts.

#### 7.3.4 Documentation & Knowledge Base Management

Continuous refinement of architectural and procedural knowledge, integrating new learnings while pruning obsolete information to maintain documentation accuracy.

##### 7.3.4.1 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Prompt for updating Magic Docs with new learnings and insights, maintaining current state while removing outdated information and preserving document structure.
