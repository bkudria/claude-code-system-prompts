# Claude Code System Prompts Index

Operational guidance for building and running Claude-powered coding agents, covering everything needed to go from a single shell command to a coordinated multi-agent system that plans, executes, remembers, and communicates effectively.

## Table of Contents

1. [Bash and File System Operations](#1-bash-and-file-system-operations)
   1. [Bash Tool Usage & Best Practices](#11-bash-tool-usage-best-practices)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (parallel commands) [Tool Description]](#112-bash-parallel-commands-tool-description)
      3. [Bash (sequential commands) [Tool Description]](#113-bash-sequential-commands-tool-description)
      4. [Bash (semicolon usage) [Tool Description]](#114-bash-semicolon-usage-tool-description)
      5. [Bash (no newlines) [Tool Description]](#115-bash-no-newlines-tool-description)
      6. [Bash (maintain cwd) [Tool Description]](#116-bash-maintain-cwd-tool-description)
      7. [Bash (working directory) [Tool Description]](#117-bash-working-directory-tool-description)
      8. [Bash (quote file paths) [Tool Description]](#118-bash-quote-file-paths-tool-description)
      9. [Bash (verify parent directory) [Tool Description]](#119-bash-verify-parent-directory-tool-description)
      10. [Bash (timeout) [Tool Description]](#1110-bash-timeout-tool-description)
      11. [Bash (prefer dedicated tools) [Tool Description]](#1111-bash-prefer-dedicated-tools-tool-description)
      12. [Bash (built-in tools note) [Tool Description]](#1112-bash-built-in-tools-note-tool-description)
      13. [Bash (alternative — communication) [Tool Description]](#1113-bash-alternative-—-communication-tool-description)
      14. [Bash (alternative — content search) [Tool Description]](#1114-bash-alternative-—-content-search-tool-description)
      15. [Bash (alternative — edit files) [Tool Description]](#1115-bash-alternative-—-edit-files-tool-description)
      16. [Bash (alternative — file search) [Tool Description]](#1116-bash-alternative-—-file-search-tool-description)
      17. [Bash (alternative — read files) [Tool Description]](#1117-bash-alternative-—-read-files-tool-description)
      18. [Bash (alternative — write files) [Tool Description]](#1118-bash-alternative-—-write-files-tool-description)
      19. [Tool usage (reserve Bash) [System Prompt]](#1119-tool-usage-reserve-bash-system-prompt)
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
   3. [Bash Sleep & Background Task Management](#13-bash-sleep-background-task-management)
      1. [Bash (sleep — keep short) [Tool Description]](#131-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#132-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — run immediately) [Tool Description]](#133-bash-sleep-—-run-immediately-tool-description)
      4. [Bash (sleep — use check commands) [Tool Description]](#134-bash-sleep-—-use-check-commands-tool-description)
      5. [One of six rules for using sleep command (System Prompt)](#135-one-of-six-rules-for-using-sleep-command-system-prompt)
      6. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#136-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
   4. [File System Operations & Tool Preferences](#14-file-system-operations-tool-preferences)
      1. [ReadFile (Tool Description)](#141-readfile-tool-description)
      2. [Edit (Tool Description)](#142-edit-tool-description)
      3. [Write (Tool Description)](#143-write-tool-description)
      4. [Grep (Tool Description)](#144-grep-tool-description)
      5. [Tool usage (create files) [System Prompt]](#145-tool-usage-create-files-system-prompt)
      6. [Tool usage (edit files) [System Prompt]](#146-tool-usage-edit-files-system-prompt)
      7. [Tool usage (read files) [System Prompt]](#147-tool-usage-read-files-system-prompt)
      8. [Tool usage (search content) [System Prompt]](#148-tool-usage-search-content-system-prompt)
      9. [Tool usage (search files) [System Prompt]](#149-tool-usage-search-files-system-prompt)
      10. [Tool usage (direct search) [System Prompt]](#1410-tool-usage-direct-search-system-prompt)
2. [Code Engineering, Review, and Git](#2-code-engineering-review-and-git)
   1. [Writing and Reviewing Code](#21-writing-and-reviewing-code)
      1. [Code Quality & Engineering Best Practices](#211-code-quality-engineering-best-practices)
         1. [Doing tasks (software engineering focus) [System Prompt]](#2111-doing-tasks-software-engineering-focus-system-prompt)
         2. [Doing tasks (no unnecessary additions) [System Prompt]](#2112-doing-tasks-no-unnecessary-additions-system-prompt)
         3. [Doing tasks (no premature abstractions) [System Prompt]](#2113-doing-tasks-no-premature-abstractions-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#2114-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no unnecessary error handling) [System Prompt]](#2115-doing-tasks-no-unnecessary-error-handling-system-prompt)
         6. [Doing tasks (minimize file creation) [System Prompt]](#2116-doing-tasks-minimize-file-creation-system-prompt)
         7. [Doing tasks (read before modifying) [System Prompt]](#2117-doing-tasks-read-before-modifying-system-prompt)
         8. [Doing tasks (ambitious tasks) [System Prompt]](#2118-doing-tasks-ambitious-tasks-system-prompt)
         9. [Doing tasks (no time estimates) [System Prompt]](#2119-doing-tasks-no-time-estimates-system-prompt)
         10. [Doing tasks (help and feedback) [System Prompt]](#21110-doing-tasks-help-and-feedback-system-prompt)
      2. [Verification, Testing & Quality Assurance](#212-verification-testing-quality-assurance)
         1. [Verify skill (Skill)](#2121-verify-skill-skill)
         2. [Create verifier skills (Skill)](#2122-create-verifier-skills-skill)
         3. [Verify CLI changes (example for Verify skill) [Skill]](#2123-verify-cli-changes-example-for-verify-skill-skill)
         4. [Verify server/API changes (example for Verify skill) [Skill]](#2124-verify-serverapi-changes-example-for-verify-skill-skill)
         5. [Verification specialist (Agent Prompt)](#2125-verification-specialist-agent-prompt)
      3. [Code Review & Refactoring Skills](#213-code-review-refactoring-skills)
         1. [Simplify (Skill)](#2131-simplify-skill)
         2. [/review-pr slash command (Agent Prompt)](#2132-review-pr-slash-command-agent-prompt)
         3. [/pr-comments slash command (Agent Prompt)](#2133-pr-comments-slash-command-agent-prompt)
   2. [Git Workflow and Documentation](#22-git-workflow-and-documentation)
      1. [Git Workflow & Version Control Operations](#221-git-workflow-version-control-operations)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#2211-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#2212-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#2213-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#2214-bash-git-—-prefer-new-commits-tool-description)
         5. [Quick git commit (Agent Prompt)](#2215-quick-git-commit-agent-prompt)
         6. [Quick PR creation (Agent Prompt)](#2216-quick-pr-creation-agent-prompt)
         7. [Git status (System Prompt)](#2217-git-status-system-prompt)
         8. [EnterWorktree (Tool Description)](#2218-enterworktree-tool-description)
         9. [ExitWorktree (Tool Description)](#2219-exitworktree-tool-description)
      2. [Documentation Generation & Magic Docs](#222-documentation-generation-magic-docs)
         1. [Update Magic Docs (Agent Prompt)](#2221-update-magic-docs-agent-prompt)
         2. [/btw side question (System Reminder)](#2222-btw-side-question-system-reminder)
         3. [Bash command description writer (Agent Prompt)](#2223-bash-command-description-writer-agent-prompt)
3. [Agent Systems and Autonomous Execution](#3-agent-systems-and-autonomous-execution)
   1. [Multi-Agent Coordination](#31-multi-agent-coordination)
      1. [Multi-Agent Coordination & Team Management](#311-multi-agent-coordination-team-management)
         1. [TeammateTool (Tool Description)](#3111-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#3112-teamdelete-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#3113-tasklist-teammate-workflow-tool-description)
         4. [SendMessageTool (Tool Description)](#3114-sendmessagetool-tool-description)
         5. [Teammate Communication (System Prompt)](#3115-teammate-communication-system-prompt)
         6. [Team Coordination (System Reminder)](#3116-team-coordination-system-reminder)
         7. [Team Shutdown (System Reminder)](#3117-team-shutdown-system-reminder)
         8. [Subagent delegation examples (System Prompt)](#3118-subagent-delegation-examples-system-prompt)
         9. [Writing subagent prompts (System Prompt)](#3119-writing-subagent-prompts-system-prompt)
         10. [Fork usage guidelines (System Prompt)](#31110-fork-usage-guidelines-system-prompt)
         11. [Worker fork execution (Agent Prompt)](#31111-worker-fork-execution-agent-prompt)
      2. [Subagent Delegation & Task Tool Usage](#312-subagent-delegation-task-tool-usage)
         1. [Agent (usage notes) [Tool Description]](#3121-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#3122-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (delegate exploration) [System Prompt]](#3123-tool-usage-delegate-exploration-system-prompt)
         4. [Tool usage (subagent guidance) [System Prompt]](#3124-tool-usage-subagent-guidance-system-prompt)
         5. [Agent mention (System Reminder)](#3125-agent-mention-system-reminder)
         6. [Explore (Agent Prompt)](#3126-explore-agent-prompt)
         7. [General purpose (Agent Prompt)](#3127-general-purpose-agent-prompt)
      3. [Batch Processing & Parallel Work Orchestration](#313-batch-processing-parallel-work-orchestration)
         1. [/batch slash command (Agent Prompt)](#3131-batch-slash-command-agent-prompt)
         2. [Worker instructions (System Prompt)](#3132-worker-instructions-system-prompt)
         3. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#3133-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   2. [Autonomous Execution and Safety](#32-autonomous-execution-and-safety)
      1. [Autonomous & Auto Mode Execution](#321-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#3211-auto-mode-system-prompt)
         2. [Executing actions with care (System Prompt)](#3212-executing-actions-with-care-system-prompt)
         3. [Advisor tool instructions (System Prompt)](#3213-advisor-tool-instructions-system-prompt)
         4. [Auto mode rule reviewer (Agent Prompt)](#3214-auto-mode-rule-reviewer-agent-prompt)
      2. [Security & Command Safety for Autonomous Agents](#322-security-command-safety-for-autonomous-agents)
         1. [Bash command prefix detection (Agent Prompt)](#3221-bash-command-prefix-detection-agent-prompt)
         2. [Tool execution denied (System Prompt)](#3222-tool-execution-denied-system-prompt)
   3. [Agent Design and Scheduling](#33-agent-design-and-scheduling)
      1. [Agent Design & Creation](#331-agent-design-creation)
         1. [Agent creation architect (Agent Prompt)](#3311-agent-creation-architect-agent-prompt)
         2. [Claude guide agent (Agent Prompt)](#3312-claude-guide-agent-agent-prompt)
         3. [Agent Hook (Agent Prompt)](#3313-agent-hook-agent-prompt)
      2. [Scheduling & Automation](#332-scheduling-automation)
         1. [CronCreate (Tool Description)](#3321-croncreate-tool-description)
         2. [/loop slash command (Skill)](#3322-loop-slash-command-skill)
         3. [/schedule slash command (Agent Prompt)](#3323-schedule-slash-command-agent-prompt)
4. [Planning, Memory, and Session Management](#4-planning-memory-and-session-management)
   1. [Planning and Task Tracking](#41-planning-and-task-tracking)
      1. [Planning Mode & Implementation Design](#411-planning-mode-implementation-design)
         1. [EnterPlanMode (Tool Description)](#4111-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#4112-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#4113-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#4114-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#4115-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#4116-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#4117-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#4118-plan-file-reference-system-reminder)
         9. [Ultraplan mode (System Reminder)](#4119-ultraplan-mode-system-reminder)
         10. [Verify plan reminder (System Reminder)](#41110-verify-plan-reminder-system-reminder)
         11. [Phase four of plan mode (System Prompt)](#41111-phase-four-of-plan-mode-system-prompt)
         12. [Plan mode (enhanced) [Agent Prompt]](#41112-plan-mode-enhanced-agent-prompt)
      2. [Task Management & Progress Tracking](#412-task-management-progress-tracking)
         1. [TodoWrite (Tool Description)](#4121-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#4122-taskcreate-tool-description)
         3. [Tool usage (task management) [System Prompt]](#4123-tool-usage-task-management-system-prompt)
         4. [TodoWrite reminder (System Reminder)](#4124-todowrite-reminder-system-reminder)
         5. [Task tools reminder (System Reminder)](#4125-task-tools-reminder-system-reminder)
   2. [Knowledge and Context Persistence](#42-knowledge-and-context-persistence)
      1. [Memory Systems & Knowledge Persistence](#421-memory-systems-knowledge-persistence)
         1. [Memory file contents (System Reminder)](#4211-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#4212-nested-memory-contents-system-reminder)
         3. [Memory description of user feedback (System Prompt)](#4213-memory-description-of-user-feedback-system-prompt)
         4. [Description part of memory instructions (System Prompt)](#4214-description-part-of-memory-instructions-system-prompt)
         5. [Agent memory instructions (System Prompt)](#4215-agent-memory-instructions-system-prompt)
         6. [Team memory content display (System Prompt)](#4216-team-memory-content-display-system-prompt)
         7. [Determine which memory files to attach (Agent Prompt)](#4217-determine-which-memory-files-to-attach-agent-prompt)
         8. [Dream memory consolidation (Agent Prompt)](#4218-dream-memory-consolidation-agent-prompt)
         9. [Session memory update instructions (Agent Prompt)](#4219-session-memory-update-instructions-agent-prompt)
         10. [Session memory template (Data)](#42110-session-memory-template-data)
      2. [Conversation Summarization & Context Compaction](#422-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#4221-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#4222-recent-message-summarization-agent-prompt)
         3. [Partial compaction instructions (System Prompt)](#4223-partial-compaction-instructions-system-prompt)
         4. [Context compaction summary (System Prompt)](#4224-context-compaction-summary-system-prompt)
         5. [Compact file reference (System Reminder)](#4225-compact-file-reference-system-reminder)
   3. [Session Discovery and Analytics](#43-session-discovery-and-analytics)
      1. [Session Naming, Titling & Search](#431-session-naming-titling-search)
         1. [Coding session title generator (Agent Prompt)](#4311-coding-session-title-generator-agent-prompt)
         2. [Session title and branch generation (Agent Prompt)](#4312-session-title-and-branch-generation-agent-prompt)
         3. [Session Search Assistant (Agent Prompt)](#4313-session-search-assistant-agent-prompt)
      2. [Usage Insights & Analytics](#432-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#4321-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#4322-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#4323-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#4324-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#4325-insights-suggestions-system-prompt)
5. [Claude API, SDKs, and External Integrations](#5-claude-api-sdks-and-external-integrations)
   1. [API and SDK References](#51-api-and-sdk-references)
      1. [Claude API Reference Documentation](#511-claude-api-reference-documentation)
         1. [Claude API reference — Python (Data)](#5111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#5112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#5113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#5114-claude-api-reference-—-java-data)
         5. [Claude API reference — C# (Data)](#5115-claude-api-reference-—-c-data)
         6. [Claude API reference — Ruby (Data)](#5116-claude-api-reference-—-ruby-data)
         7. [Claude API reference — PHP (Data)](#5117-claude-api-reference-—-php-data)
         8. [Claude API reference — cURL (Data)](#5118-claude-api-reference-—-curl-data)
         9. [Build with Claude API (Skill)](#5119-build-with-claude-api-skill)
         10. [Build with Claude API (reference guide) [Skill]](#51110-build-with-claude-api-reference-guide-skill)
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
         6. [Files API reference — Python (Data)](#5136-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#5137-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#5138-message-batches-api-reference-—-python-data)
   2. [API Optimization and Platform Integrations](#52-api-optimization-and-platform-integrations)
      1. [Prompt Caching & API Optimization](#521-prompt-caching-api-optimization)
         1. [Prompt Caching — Design & Optimization (Data)](#5211-prompt-caching-—-design-optimization-data)
         2. [Claude model catalog (Data)](#5212-claude-model-catalog-data)
         3. [Live documentation sources (Data)](#5213-live-documentation-sources-data)
      2. [GitHub Integration & CI/CD](#522-github-integration-cicd)
         1. [GitHub App installation PR description (Data)](#5221-github-app-installation-pr-description-data)
         2. [GitHub Actions workflow for @claude mentions (Data)](#5222-github-actions-workflow-for-claude-mentions-data)
         3. [HTTP error codes reference (Data)](#5223-http-error-codes-reference-data)
6. [Configuration, Hooks, and Specialized Tools](#6-configuration-hooks-and-specialized-tools)
   1. [Environment Setup and Configuration](#61-environment-setup-and-configuration)
      1. [Session & Project Configuration Setup](#611-session-project-configuration-setup)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#6111-init-claudemd-and-skill-setup-new-version-skill)
         2. [Update Claude Code Config (Skill)](#6112-update-claude-code-config-skill)
         3. [CLAUDE.md creation (Agent Prompt)](#6113-claudemd-creation-agent-prompt)
         4. [Config (Tool Description)](#6114-config-tool-description)
      2. [Output Formatting & Configuration Modes](#612-output-formatting-configuration-modes)
         1. [Minimal mode (System Prompt)](#6121-minimal-mode-system-prompt)
         2. [Output style active (System Reminder)](#6122-output-style-active-system-reminder)
         3. [Scratchpad directory (System Prompt)](#6123-scratchpad-directory-system-prompt)
         4. [PowerShell edition for 5.1 (System Prompt)](#6124-powershell-edition-for-51-system-prompt)
         5. [PowerShell (Tool Description)](#6125-powershell-tool-description)
   2. [Hooks, IDE Integration, and Resource Monitoring](#62-hooks-ide-integration-and-resource-monitoring)
      1. [Hooks System & Lifecycle Events](#621-hooks-system-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#6211-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#6212-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#6213-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#6214-hook-stopped-continuation-system-reminder)
         5. [Hook stopped continuation prefix (System Reminder)](#6215-hook-stopped-continuation-prefix-system-reminder)
         6. [Hook success (System Reminder)](#6216-hook-success-system-reminder)
         7. [Hook condition evaluator (Agent Prompt)](#6217-hook-condition-evaluator-agent-prompt)
         8. [update-config (7-step verification flow) [Skill]](#6218-update-config-7-step-verification-flow-skill)
      2. [IDE Integration & File State Awareness](#622-ide-integration-file-state-awareness)
         1. [File opened in IDE (System Reminder)](#6221-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#6222-lines-selected-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#6223-file-modified-by-user-or-linter-system-reminder)
         4. [New diagnostics detected (System Reminder)](#6224-new-diagnostics-detected-system-reminder)
         5. [File exists but empty (System Reminder)](#6225-file-exists-but-empty-system-reminder)
         6. [File truncated (System Reminder)](#6226-file-truncated-system-reminder)
         7. [File shorter than offset (System Reminder)](#6227-file-shorter-than-offset-system-reminder)
      3. [Resource Monitoring & Session State](#623-resource-monitoring-session-state)
         1. [Token usage (System Reminder)](#6231-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#6232-usd-budget-system-reminder)
         3. [Session continuation (System Reminder)](#6233-session-continuation-system-reminder)
         4. [MCP resource no content (System Reminder)](#6234-mcp-resource-no-content-system-reminder)
         5. [MCP resource no displayable content (System Reminder)](#6235-mcp-resource-no-displayable-content-system-reminder)
   3. [Specialized External Tools](#63-specialized-external-tools)
      1. [Browser Automation & Computer Use](#631-browser-automation-computer-use)
         1. [Computer (Tool Description)](#6311-computer-tool-description)
         2. [Computer action (Tool Parameter)](#6312-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#6313-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#6314-chrome-browser-mcp-tools-system-prompt)
      2. [Specialized Tool Descriptions](#632-specialized-tool-descriptions)
         1. [LSP (Tool Description)](#6321-lsp-tool-description)
         2. [NotebookEdit (Tool Description)](#6322-notebookedit-tool-description)
         3. [WebFetch (Tool Description)](#6323-webfetch-tool-description)
         4. [WebSearch (Tool Description)](#6324-websearch-tool-description)
         5. [Sleep (Tool Description)](#6325-sleep-tool-description)
         6. [ToolSearch (second part) [Tool Description]](#6326-toolsearch-second-part-tool-description)
   4. [Skill Creation & Management](#64-skill-creation-management)
      1. [Skill (Tool Description)](#641-skill-tool-description)
      2. [Tool usage (skill invocation) [System Prompt]](#642-tool-usage-skill-invocation-system-prompt)
      3. [Invoked skills (System Reminder)](#643-invoked-skills-system-reminder)
      4. [Skillify Current Session (System Prompt)](#644-skillify-current-session-system-prompt)
      5. [/stuck slash command (Skill)](#645-stuck-slash-command-skill)
      6. [Debugging (Skill)](#646-debugging-skill)
7. [Communication, UX, and User Collaboration](#7-communication-ux-and-user-collaboration)
   1. [Output Style and User Interaction](#71-output-style-and-user-interaction)
      1. [Output Style, Tone & Communication](#711-output-style-tone-communication)
         1. [Output efficiency (System Prompt)](#7111-output-efficiency-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#7112-tone-and-style-concise-output-—-short-system-prompt)
         3. [Tone and style (code references) [System Prompt]](#7113-tone-and-style-code-references-system-prompt)
         4. [How to use the SendUserMessage tool (System Prompt)](#7114-how-to-use-the-sendusermessage-tool-system-prompt)
         5. [SendMessageTool (non-agent-teams) [Tool Description]](#7115-sendmessagetool-non-agent-teams-tool-description)
         6. [Agent thread notes (System Prompt)](#7116-agent-thread-notes-system-prompt)
         7. [Agent Summary Generation (System Prompt)](#7117-agent-summary-generation-system-prompt)
      2. [User Interaction & Question Asking](#712-user-interaction-question-asking)
         1. [AskUserQuestion (Tool Description)](#7121-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#7122-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#7123-option-previewer-system-prompt)
      3. [Prompt Suggestion & UX Assistance](#713-prompt-suggestion-ux-assistance)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#7131-prompt-suggestion-generator-v2-agent-prompt)
         2. [WebFetch summarizer (Agent Prompt)](#7132-webfetch-summarizer-agent-prompt)
         3. [Status line setup (Agent Prompt)](#7133-status-line-setup-agent-prompt)
   2. [Security Awareness and Learning Modes](#72-security-awareness-and-learning-modes)
      1. [Security Review & Malicious Activity Prevention](#721-security-review-malicious-activity-prevention)
         1. [Censoring assistance with malicious activities (System Prompt)](#7211-censoring-assistance-with-malicious-activities-system-prompt)
         2. [Malware analysis after Read tool call (System Reminder)](#7212-malware-analysis-after-read-tool-call-system-reminder)
         3. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#7213-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         4. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#7214-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         5. [/security-review slash command (Agent Prompt)](#7215-security-review-slash-command-agent-prompt)
         6. [Doing tasks (security) [System Prompt]](#7216-doing-tasks-security-system-prompt)
      2. [Learning & Teaching Modes](#722-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#7221-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7222-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#7223-request_teach_access-part-of-teach-mode-tool-description)

---

## 1. Bash and File System Operations

Shell command execution, sandbox security, background task management, and dedicated file operation tools. Covers best practices for running Bash commands alongside purpose-built tools for reading, writing, editing, searching, and navigating the filesystem.

### 1.1 Bash Tool Usage & Best Practices

Bash executes system commands and shell operations. Optimal usage involves running independent commands in parallel, chaining dependent commands with `&&`, maintaining absolute paths to preserve working directory state, and quoting file paths with spaces. Dedicated tools (Read, Write, Edit, Grep, Glob) provide superior user experience for file operations and content search; reserve Bash for terminal-specific tasks.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

#### 1.1.2 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to run independent bash commands as parallel tool calls in a single message for optimal performance.

#### 1.1.3 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands with `&&` in a single call when they must run sequentially.

#### 1.1.4 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially but not caring if earlier commands fail.

#### 1.1.5 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs not to use newlines to separate commands in bash.

#### 1.1.6 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to use absolute paths and avoid cd commands to maintain current working directory throughout the session.

#### 1.1.7 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not, with environment initialized from user profile.

#### 1.1.8 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs to always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.9 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence with `ls` before creating new directories or files.

#### 1.1.10 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration in milliseconds for bash commands, with default and maximum limits specified via variables.

#### 1.1.11 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns to avoid using Bash for find, grep, cat, and similar commands, preferring dedicated tools for better user experience.

#### 1.1.12 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and transparency than Bash equivalents.

#### 1.1.13 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly instead of using echo or printf.

#### 1.1.14 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs to use the Grep tool for content search instead of grep or rg commands.

#### 1.1.15 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs to use the Edit tool for file editing instead of sed or awk commands.

#### 1.1.16 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs to use the Glob tool for file search instead of find or ls commands.

#### 1.1.17 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs to use the Read tool for file reading instead of cat, head, or tail commands.

#### 1.1.18 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs to use the Write tool for file writing instead of echo or cat commands.

#### 1.1.19 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Directs Claude to reserve the Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

### 1.2 Bash Sandbox Security & Restrictions

All Bash commands run within a mandatory sandbox that restricts file access, network connections, and system operations. Commands fail when accessing disallowed paths, connecting to non-whitelisted hosts, or attempting restricted operations; Claude detects these failures and retries with sandbox disabled only upon user request or clear sandbox evidence. Sensitive paths like credentials and shell configuration files cannot be added to the allowlist.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs to work with the user to adjust sandbox settings if a command fails due to sandbox restrictions.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs to default to running commands within the sandbox and only bypass when user requests or sandbox restriction evidence appears.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that sandbox restrictions caused a command failure.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Documents network connection failures to non-whitelisted hosts as sandbox evidence.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Documents "Operation not permitted" errors for file and network operations as sandbox evidence.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Documents Unix socket connection errors as sandbox evidence.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with evidence of sandbox restrictions, distinguishing sandbox-related failures from other causes.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all commands must run in sandbox mode with the `dangerouslyDisableSandbox` parameter disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands even after running with `dangerouslyDisableSandbox: true`.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provides a header for Claude's response when encountering sandbox-caused failures.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with `dangerouslyDisableSandbox: true` upon sandbox failure without asking the user.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Instructs Claude to use the `$TMPDIR` environment variable for temporary files in sandbox mode rather than `/tmp` directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

### 1.3 Bash Sleep & Background Task Management

Sleep commands should be minimal (1-5 seconds) and used only when necessary to avoid blocking users. Avoid polling background tasks started with `run_in_background`; instead wait for completion notifications. For external process monitoring, use check commands (like `gh run view`) rather than sleep loops. Never retry failing commands in a sleep loop—diagnose root causes instead.

#### 1.3.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.3.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background` but instead wait for completion notification.

#### 1.3.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

#### 1.3.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` rather than sleeping when polling external processes.

#### 1.3.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Do not retry failing commands in a sleep loop — diagnose the root cause.

#### 1.3.6 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Discourages unnecessary `Start-Sleep` commands in PowerShell scripts, recommending `run_in_background` for long-running tasks, polling alternatives for external processes, and keeping sleep durations short when unavoidable.

### 1.4 File System Operations & Tool Preferences

Dedicated tools handle filesystem operations more effectively than Bash equivalents: Read accesses files and multimodal content (images, PDFs, notebooks); Write creates and overwrites files; Edit performs precise string replacements while preserving indentation; Grep searches content with regex and filtering; Glob locates files by pattern. These tools provide transparency and better user experience; use them as the default for filesystem tasks.

#### 1.4.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the filesystem with support for images, PDFs (with page ranges for large files), and Jupyter notebooks. Requires absolute paths; defaults to reading first N lines but can read full files.

#### 1.4.2 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with strict matching requirements. Preserves indentation from Read tool output, requires unique old_string context, and supports replace_all for renaming across files.

#### 1.4.3 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the filesystem, overwriting existing files. Prefer Edit tool for modifications; avoid creating documentation unless explicitly requested.

#### 1.4.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting regex patterns, file filtering, and multiple output modes. Prefer this over bash grep commands; supports multiline matching and handles special character escaping for language-specific patterns.

#### 1.4.5 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use the Write tool for file creation instead of cat heredoc or echo redirection.

#### 1.4.6 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs Claude to use the Edit tool for file modifications instead of sed or awk.

#### 1.4.7 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool for file access instead of cat, head, tail, or sed.

#### 1.4.8 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs Claude to use the Grep tool for searching file contents instead of grep or rg.

#### 1.4.9 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool for file searches instead of find or ls.

#### 1.4.10 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob and Grep tools directly for simple, targeted codebase searches.

---

## 2. Code Engineering, Review, and Git

Software engineering discipline from writing quality code through reviewing, testing, and committing it. Covers coding best practices, verification workflows, refactoring, documentation generation, and Git version control operations.

### 2.1 Writing and Reviewing Code

Principles for producing well-scoped, secure, minimal code and systematically reviewing it for quality, performance, and correctness.

#### 2.1.1 Code Quality & Engineering Best Practices

Disciplined approach to software engineering emphasizing scope adherence, minimal abstractions, and code understanding before modification. Avoids speculative design, unnecessary error handling, and file proliferation while prioritizing security and OWASP compliance.

##### 2.1.1.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames user requests as software engineering tasks including bug fixes, feature additions, refactoring, and code explanation, interpreting unclear instructions within this context.

##### 2.1.1.2 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Restricts scope to requested work only, avoiding feature additions, refactoring, or improvements beyond the ask. Limits comments and annotations to self-evident logic.

##### 2.1.1.3 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Discourages creating helpers or utilities for one-time operations or hypothetical requirements, favoring task-appropriate complexity over speculative design.

##### 2.1.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Prohibits backwards-compatibility shims and unused code artifacts, favoring complete deletion of unused code.

##### 2.1.1.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Omits error handling for impossible scenarios and validates only at system boundaries. Trusts internal code and framework guarantees.

##### 2.1.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Instructs preference for editing existing files over creating new ones to prevent file bloat and build on prior work.

##### 2.1.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires reading and understanding existing code before proposing modifications.

##### 2.1.1.8 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Positions Claude as highly capable and willing to attempt ambitious tasks, deferring to user judgment on scope rather than imposing artificial limits.

##### 2.1.1.9 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Avoids providing time estimates or predictions for task completion, focusing on what needs to be done instead.

##### 2.1.1.10 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Brief directive to inform users of help and feedback channels when requested.

#### 2.1.2 Verification, Testing & Quality Assurance

Runtime-driven validation of code changes through automated test execution, evidence capture, and adversarial probing. Supports multiple interfaces (web UI, CLI, API) with structured workflows for building confidence in implementations and detecting edge cases, boundary violations, and unintended side effects.

##### 2.1.2.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow for validating code changes through runtime observation: find the change, identify the surface, drive the app, capture evidence, and report PASS/FAIL/BLOCKED.

##### 2.1.2.2 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically validate code changes via Playwright (web UI), Tmux (CLI), or HTTP (API), including auto-detection, tool setup, Q&A, and skill generation.

##### 2.1.2.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying CLI changes by building, running with test arguments, capturing output/exit code, and comparing to expected behavior.

##### 2.1.2.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying server/API changes by starting the server, sending requests via curl, capturing responses, and validating against expected behavior.

##### 2.1.2.5 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial testing agent that verifies implementations by running builds, tests, linters, and adversarial probes (concurrency, boundary values, idempotency, orphan operations). Issues PASS/FAIL/PARTIAL verdicts with command output, expected vs actual results, and avoids false positives by checking for defensive code and intentional behavior.

#### 2.1.3 Code Review & Refactoring Skills

Structured analysis of code quality, style, and performance with GitHub integration for pull request feedback. Identifies reuse opportunities, redundancy, and efficiency gaps while providing actionable, sectioned commentary on correctness, test coverage, and security.

##### 2.1.3.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review workflow launching three parallel agents to identify code reuse opportunities, quality issues (redundancy, sprawl, leaks), and efficiency problems (unnecessary work, concurrency, memory).

##### 2.1.3.2 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diff, analyzing code quality, style, correctness, performance, test coverage, and security with concise, sectioned feedback.

##### 2.1.3.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including both PR-level and code review comments with file/line context, formatted as readable threads with diff hunks.

### 2.2 Git Workflow and Documentation

Version control operations including commits, pull requests, worktrees, and destructive-change safeguards, alongside documentation generation that captures architectural insights.

#### 2.2.1 Git Workflow & Version Control Operations

Git operations include committing changes, creating pull requests, and managing worktrees. Always preserve git hooks and signing unless explicitly overridden; prefer new commits over amending existing ones. Destructive operations (reset --hard, push --force) require careful consideration of safer alternatives. Worktrees provide isolated branch environments; EnterWorktree creates a session-scoped worktree while ExitWorktree cleans up and returns to the original directory.

##### 2.2.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

##### 2.2.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Provides comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, parallel command execution, and PR formatting with detailed steps for staging, drafting messages, and pushing changes.

##### 2.2.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs never to skip hooks or bypass signing unless explicitly requested by the user.

##### 2.2.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to prefer creating new commits over amending existing ones.

##### 2.2.1.5 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository style, and executing the commit with safety protocols preventing amends, force pushes, and secret commits.

##### 2.2.1.6 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request by analyzing all changes, creating a feature branch, drafting commit and PR messages, and pushing to origin with git safety protocols and secret-file detection.

##### 2.2.1.7 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Identifies displayed git status as a conversation-start snapshot that does not update during the session.

##### 2.2.1.8 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it. Only use when user explicitly requests worktree functionality; creates a new branch in .claude/worktrees/ or delegates to VCS hooks for non-git repositories.

##### 2.2.1.9 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree and returns to the original directory. Supports keep or remove actions; only operates on EnterWorktree-created worktrees and is a no-op if called outside an active worktree session.

#### 2.2.2 Documentation Generation & Magic Docs

Guides documentation creation and maintenance through Magic Docs updates that preserve structure while capturing architectural insights, side-question handling for lightweight agents, and bash command description generation. Prioritizes high-signal content about design patterns and entry points over exhaustive implementation details.

##### 2.2.2.1 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Updates Magic Doc files with new learnings while preserving headers and structure. Emphasizes terseness, high-signal content focused on architecture, entry points, and non-obvious patterns rather than exhaustive implementation details or obvious code observations.

##### 2.2.2.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude that a side question is being asked by a separate lightweight agent with no tools available, requiring a direct answer based only on conversation context.

##### 2.2.2.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief while adding context for complex piped or flag-heavy commands.

---

## 3. Agent Systems and Autonomous Execution

Spawning, coordinating, and safely running autonomous agents — from multi-agent swarms and subagent delegation to batch parallelism, scheduling, and command safety enforcement.

### 3.1 Multi-Agent Coordination

Mechanisms for spawning agent teams, delegating work to subagents, and orchestrating large-scale parallel batch operations across isolated worktrees.

#### 3.1.1 Multi-Agent Coordination & Team Management

Mechanisms for spawning agent teams, assigning work through shared task lists, coordinating via messaging protocols, and gracefully shutting down swarms. Enables parallel execution across specialized agents with shared context and synchronized completion.

##### 3.1.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages teams and coordinates multiple agents in swarms for parallel work. Covers team creation, task assignment, teammate spawning, message delivery, idle state handling, and team config discovery for multi-agent collaboration.

##### 3.1.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories when swarm work completes. Fails if active team members remain; gracefully terminate teammates before calling this cleanup tool.

##### 3.1.1.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from shared task lists. Teammates should check TaskList after completing work, prefer lowest ID tasks, and coordinate via task ownership.

##### 3.1.1.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to teammates in agent swarms. Supports broadcast to all teammates and protocol responses for shutdown and plan approval requests; plain text output is not visible to other agents.

##### 3.1.1.5 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool for teammate communication, with specific addressing for individual teammates or team-wide broadcasts.

##### 3.1.1.6 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, resources, and communication protocols, requiring name-based messaging to teammates and periodic task list monitoring.

##### 3.1.1.7 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down team members gracefully before providing final response in non-interactive mode.

##### 3.1.1.8 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for coordinator agents delegating tasks to subagents, handling waiting states, and reporting results with independent agent types and full context briefing.

##### 3.1.1.9 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts, emphasizing context-setting, avoiding command-style instructions, and never delegating understanding or synthesis to subagents.

##### 3.1.1.10 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines fork usage for research and implementation work where intermediate output isn't needed, prohibiting mid-flight output reading or result fabrication. Emphasizes trusting completion notifications and never predicting fork results.

##### 3.1.1.11 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Forked worker sub-agent that executes directives directly without spawning further sub-agents, using tools silently and reporting structured results (scope, result, key files, files changed, issues) under 500 words. Commits file changes before reporting with commit hash.

#### 3.1.2 Subagent Delegation & Task Tool Usage

Patterns for delegating specialized work to background subagents—exploration, research, and multi-step execution—while protecting context and avoiding duplication. Subagents operate in isolated worktrees and report structured results without intermediate output.

##### 3.1.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Provides detailed usage instructions for the Agent tool, covering agent descriptions, background execution, resumption via SendMessage, worktree isolation, and context-specific constraints for subagents and teammates.

##### 3.1.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses for handling complex, multi-step tasks autonomously.

##### 3.1.2.3 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Directs Claude to use the Task tool with specialized subagents for broad codebase exploration and deep research when simple searches prove insufficient or require many queries.

##### 3.1.2.4 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool with specialized subagents for parallelizing queries and protecting context, while avoiding duplicate work.

##### 3.1.2.5 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and to do so with appropriate context.

##### 3.1.2.6 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file searches by glob patterns, code searches by regex, and codebase analysis at configurable thoroughness levels without modifying files.

##### 3.1.2.7 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases while reporting findings concisely without over-creating files.

#### 3.1.3 Batch Processing & Parallel Work Orchestration

Large-scale codebase changes decomposed into independent parallelizable units executed by isolated worker agents. Orchestration determines scope, spawns workers with worktree isolation, coordinates end-to-end testing, and manages parallel tool execution to maximize efficiency across dependent and independent operations.

##### 3.1.3.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining e2e test recipes, and spawning background worker agents with worktree isolation to execute changes in parallel.

##### 3.1.3.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for workers implementing changes: simplify code, run unit tests, perform end-to-end testing, commit and push, then report the PR URL.

##### 3.1.3.3 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to maximize efficiency, while running dependent tool calls sequentially.

### 3.2 Autonomous Execution and Safety

Safeguards for continuous autonomous operation including reversibility assessment, command injection detection, auto-approval classification, and risk-based confirmation workflows.

#### 3.2.1 Autonomous & Auto Mode Execution

Continuous autonomous operation with safeguards against destructive actions and data exfiltration. Execution assesses reversibility and blast radius, requiring confirmation for high-risk operations while enabling course corrections. Advisory review mechanisms support decision-making before substantive work.

##### 3.2.1.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous execution with immediate action, minimal interruptions, and preference for coding over planning. Restricts destructive operations and data exfiltration while allowing course corrections from the user.

##### 3.2.1.2 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes careful action execution by assessing reversibility and blast radius, requiring user confirmation for destructive, hard-to-reverse, or shared-system operations. Emphasizes investigating unexpected state and fixing root causes rather than bypassing safety checks.

##### 3.2.1.3 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the advisor tool, which forwards conversation history to a stronger reviewer model. Call before substantive work, when stuck, or before declaring completion.

##### 3.2.1.4 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability to ensure the LLM classifier can correctly auto-approve or block tool actions.

#### 3.2.2 Security & Command Safety for Autonomous Agents

Enforces safety boundaries for autonomous command execution by detecting command injection patterns, classifying commands for auto-approval versus user confirmation, and defining escalation procedures when tool access is denied. Balances capability with security by preventing malicious workarounds while preserving essential functionality.

##### 3.2.2.1 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands to enforce safety policies on which commands are auto-approved versus requiring user confirmation.

##### 3.2.2.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Defines behavior when tool execution is denied: attempt reasonable alternatives but avoid malicious workarounds, and escalate to user if capability is essential.

### 3.3 Agent Design and Scheduling

Architecting custom agents with expert personas and decision frameworks, plus cron-based scheduling for recurring and one-shot automation tasks.

#### 3.3.1 Agent Design & Creation

Prompts for architecting custom agents with expert personas and decision frameworks, guiding users through Claude tooling ecosystem, and verifying agent task completion through transcript analysis. Enables rapid agent design, documentation discovery, and execution validation.

##### 3.3.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design high-performance custom AI agents by extracting user intent, creating expert personas, architecting comprehensive system prompts with decision frameworks and quality controls, and generating concise identifiers with usage examples.

##### 3.3.1.2 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant resources, and providing actionable guidance with code examples and feature discovery.

##### 3.3.1.3 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies agent completion of a given plan by analyzing conversation transcript and codebase state, returning structured output confirming success or failure.

#### 3.3.2 Scheduling & Automation

Cron-based task scheduling for one-shot and recurring automation, including remote Claude Code agent orchestration via cloud API. Handles job creation, execution, and lifecycle management with timezone awareness and jitter optimization.

##### 3.3.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Describes CronCreate for scheduling one-shot or recurring cron-based jobs using standard 5-field cron syntax in user's local timezone. Provides guidance on avoiding :00 and :30 minute marks to reduce API load, handling jitter, and managing job durability and expiration.

##### 3.3.2.2 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts to cron expression, schedules recurring task, and executes the prompt immediately.

##### 3.3.2.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via Anthropic cloud API, supporting creation, listing, updating, and execution of isolated remote sessions with MCP connections and environment configuration.

---

## 4. Planning, Memory, and Session Management

Structured workflows for planning before execution, tracking tasks across long sessions, persisting knowledge between conversations, and managing session identity and context continuity.

### 4.1 Planning and Task Tracking

Exploratory planning phases before code execution, iterative design review, and granular task lists that maintain visibility into multi-step work.

#### 4.1.1 Planning Mode & Implementation Design

Structured planning workflows that transition Claude into exploratory phases before code execution, supporting iterative design review with users, multi-agent parallel exploration, and phased plan development. Plans are written to files for verification and approval before implementation proceeds.

##### 4.1.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore codebases and design implementation approaches before coding. Use proactively for non-trivial tasks involving new features, multiple approaches, architectural decisions, or multi-file changes to ensure user alignment and prevent rework.

##### 4.1.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning and requests user approval to proceed with implementation. Reads the plan from file and presents it for review; use only for code implementation tasks, not research or exploration.

##### 4.1.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Activates 5-phase plan mode with parallel exploration and multi-agent planning, prohibiting execution while enforcing read-only operations and incremental plan development through exploration, design, review, and approval phases.

##### 4.1.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative plan mode for pair-planning with the user, requiring incremental code exploration, plan file updates, and user questioning until plan completion before execution.

##### 4.1.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents prohibiting edits and non-readonly operations while allowing plan file creation and user question clarification.

##### 4.1.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude to evaluate existing plan files when re-entering plan mode, deciding whether to continue or overwrite based on task relevance.

##### 4.1.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and it can now execute edits, run tools, and take actions.

##### 4.1.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 4.1.1.9 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Activates Ultraplan mode for creating exceptionally thorough implementation plans using parallel multi-agent exploration, synthesis, and critique before execution or local teleportation.

##### 4.1.1.10 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 4.1.1.11 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes the executable plan to file with file paths, changes per file, function references, and a single verification command, with a hard 40-line limit.

##### 4.1.1.12 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans by exploring codebase patterns, understanding requirements, and detailing step-by-step strategies with identified critical files and architectural trade-offs.

#### 4.1.2 Task Management & Progress Tracking

Tools and reminders for breaking down complex work into tracked task lists, maintaining single in-progress items, and marking completion immediately. Enables visibility into multi-step sessions and prevents task loss across long workflows.

##### 4.1.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for sessions with imperative content and active form descriptions. Use for multi-step tasks; maintain exactly one in_progress task, mark complete immediately, and remove obsolete items.

##### 4.1.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress and organize complex multi-step work. Use for tasks with 3+ steps, non-trivial implementations, or when users provide multiple requirements.

##### 4.1.2.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use the TodoWrite tool to break down work, track progress, and mark tasks as completed immediately.

##### 4.1.2.4 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use TodoWrite tool for task tracking when relevant, without mentioning the reminder to the user.

##### 4.1.2.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant, without mentioning the reminder to the user.

### 4.2 Knowledge and Context Persistence

Durable memory structures capturing user preferences, institutional knowledge, and session state, alongside conversation summarization for seamless context-window transitions.

#### 4.2.1 Memory Systems & Knowledge Persistence

Persistent memory structures that capture user preferences, team discoveries, institutional knowledge, and session state across conversations. Memory consolidation processes synthesize learnings while maintaining durable, well-organized topic files accessible to future sessions.

##### 4.2.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, including its type description.

##### 4.2.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

##### 4.2.1.3 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type that stores guidance about work approaches from both successes and failures, with checks for contradictions against team memories.

##### 4.2.1.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as containing role, goals, responsibilities, and knowledge to tailor behavior and build understanding of the user's perspective. Emphasizes avoiding negative judgments and focusing on work-relevant information.

##### 4.2.1.5 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Instructs agents to update memory with domain-specific discoveries during conversations, building institutional knowledge across sessions. Provides templates for code reviewers, test runners, architects, and documentation writers to record patterns, decisions, and structural insights relevant to their roles.

##### 4.2.1.6 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and type description for injection into conversation context.

##### 4.2.1.7 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to attach to Claude Code based on the user's query, excluding usage references for recently-used tools but including warnings and gotchas.

##### 4.2.1.8 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs reflective memory consolidation by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to keep memories durable and well-organized.

##### 4.2.1.9 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations while preserving exact structure, headers, and italic section descriptions. Enforces detailed, info-dense content with specific file paths and technical details, maintains section token limits, and prevents references to the note-taking process itself.

##### 4.2.1.10 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing current state, task specification, files, workflow, errors, codebase documentation, learnings, and worklog.

#### 4.2.2 Conversation Summarization & Context Compaction

Structured mechanisms for preserving conversation context across session boundaries through multi-section summaries capturing requests, technical concepts, file modifications, errors, solutions, and continuation state. Enables efficient task resumption when context windows transition or compress.

##### 4.2.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized by primary request, technical concepts, files modified, errors encountered, problem-solving, user messages, pending tasks, current work, and next steps to preserve context across sessions.

##### 4.2.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages following earlier retained context, organized by primary request, technical concepts, files modified, errors, problem-solving, user messages, pending tasks, current work, and next steps.

##### 4.2.2.3 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured instructions for summarizing partial conversation history with analysis, 9-section format covering requests, concepts, files, errors, solutions, user messages, pending tasks, completed work, and continuation context.

##### 4.2.2.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs creation of structured continuation summaries for context window transitions, covering task overview, current state, discoveries, next steps, and context preservation to enable efficient task resumption.

##### 4.2.2.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs it to use the Read tool if access is needed.

### 4.3 Session Discovery and Analytics

Naming, titling, and searching coding sessions using semantic similarity and branch conventions, plus usage analytics that surface friction points and improvement opportunities.

#### 4.3.1 Session Naming, Titling & Search

Naming and discovery mechanisms for coding sessions using concise, human-readable titles and git branch conventions. Search prioritizes tag matching and semantic similarity with inclusive filtering to surface relevant sessions across titles, branches, summaries, and descriptions.

##### 4.3.1.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise, sentence-case session titles (3–7 words) that capture the main topic or goal so users recognize sessions in a list.

##### 4.3.1.2 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates concise session titles (max 6 words, sentence case) and git branch names (max 4 words, lowercase with dashes, prefixed with 'claude/'). Returns JSON with title and branch fields based on session description.

##### 4.3.1.3 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Search assistant that finds relevant sessions by prioritizing exact tag matches, then partial tags, titles, branches, summaries, and semantic similarity. Emphasizes inclusive matching over precision, returning sessions with any connection to the query rather than filtering aggressively.

#### 4.3.2 Usage Insights & Analytics

Analyzes Claude Code usage patterns to surface what's working, identify friction points, and recommend feature adoption. Extracts structured session data including goals and satisfaction signals, then generates tailored improvement suggestions and future workflow opportunities.

##### 4.3.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a structured 4-part insights summary (what's working, hindrances, quick wins, ambitious workflows) for Claude Code users to understand their usage patterns and improve their interaction with Claude as models evolve.

##### 4.3.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction points, producing a structured report with 3 friction categories and specific examples of where users encounter problems.

##### 4.3.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, with actionable prompts users can try as models improve.

##### 4.3.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from a single Claude Code session including goal categories, user satisfaction signals, and friction types, with strict guidelines to count only explicit user requests and clear satisfaction indicators.

##### 4.3.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to user's actual session data.

---

## 5. Claude API, SDKs, and External Integrations

Reference documentation and implementation patterns for building with Claude programmatically — covering language-specific SDKs, tool use, streaming, prompt caching, and GitHub/CI-CD integration.

### 5.1 API and SDK References

Language-specific guides for Python, TypeScript, Go, Java, and other SDKs covering core Claude capabilities, agentic tool use, streaming, structured outputs, and batch processing.

#### 5.1.1 Claude API Reference Documentation

Language-specific SDK references and guides for building applications with Claude across Python, TypeScript, Go, Java, C#, Ruby, PHP, and raw HTTP. Covers core capabilities including vision, prompt caching, extended thinking, tool use, streaming, and cost optimization.

##### 5.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, system prompts, vision (base64 and URL), prompt caching (automatic and manual), extended thinking (adaptive and deprecated), error handling, multi-turn conversations with ConversationManager, compaction (beta), stop reasons, and cost optimization strategies.

##### 5.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, system prompts, vision (URL and base64), prompt caching (automatic and manual), extended thinking (adaptive and deprecated), error handling with typed exceptions, multi-turn conversations, compaction (beta), stop reasons, and cost optimization strategies.

##### 5.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming with message accumulation, tool use via BetaToolRunner (automatic) and manual loops, thinking (adaptive and deprecated), prompt caching, server-side tools, PDF/document input, Files API, and context editing/compaction. Includes union type narrowing and struct tag patterns.

##### 5.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking (adaptive and deprecated), tool use via BetaToolRunner with annotated classes and memory tool handler, effort parameter, prompt caching, token counting, structured output, PDF/document input, server-side tools, and Files API. Includes builder patterns and beta namespace usage.

##### 5.1.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking (adaptive and deprecated fixed-budget), tool use with manual schema, context editing/compaction, effort parameter, prompt caching, token counting, structured output, PDF/document input, server-side tools, and Files API. Includes union type narrowing patterns and beta namespace usage.

##### 5.1.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming with text helper, tool use via beta tool runner with annotated classes and manual loops, and prompt caching with TTL support.

##### 5.1.1.7 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization (Anthropic, Bedrock, Vertex AI, Foundry), basic requests, streaming, tool use via BetaRunnableTool runner and manual loops, extended thinking (adaptive and deprecated), prompt caching, structured outputs with StructuredOutputModel, and beta features/server-side tools. Uses camelCase keys that auto-map to snake_case on wire.

##### 5.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests with jq parsing, streaming (SSE), tool use loops, prompt caching, and extended thinking. Includes required headers and response field extraction patterns.

##### 5.1.1.9 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Comprehensive routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs. workflow vs. agent), architecture, models, thinking/effort parameters, caching, and reading guide.

##### 5.1.1.10 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API reference documentation, providing quick task-based routing to relevant sections for common development scenarios.

#### 5.1.2 Agent SDK Reference & Patterns

Comprehensive Agent SDK documentation and implementation patterns for Python and TypeScript, covering agent construction, tool definitions, permission modes, MCP integration, hooks, subagents, and session management with practical examples.

##### 5.1.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query() and ClaudeSDKClient interfaces, built-in tools, permission modes, MCP support, hooks, subagents, error handling, session history, and best practices. Includes token counting, structured output, and rate limit event handling.

##### 5.1.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference covering installation, query() function, built-in tools, permission modes, MCP support, hooks, subagents, message types, session history/mutations, and MCP server management. Includes task-related system messages and best practices.

##### 5.1.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK usage patterns covering basic agents, custom tools via MCP, hooks, subagents, MCP server integration (Playwright, PostgreSQL), permission modes, error recovery, session resumption, and session history/mutations. Demonstrates async query loops, ClaudeSDKClient for full control, and structured output handling.

##### 5.1.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK usage patterns including basic agents, hooks, subagents, Playwright MCP integration, session resumption, session history/mutations, and custom system prompts. Covers async iteration, hook callbacks with matcher patterns, and session forking.

#### 5.1.3 Tool Use & Streaming API References

Language-specific implementations and patterns for agentic tool use, real-time streaming, file handling, and batch processing. Covers tool runners with decorators/schemas, manual agentic loops, code execution, structured outputs, event-driven streaming with content-type handling, file upload/management with citations, and asynchronous batch request processing at scale.

##### 5.1.3.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice, tool runner vs. manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices.

##### 5.1.3.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference covering tool runner with decorators, MCP conversion helpers, manual agentic loops, code execution, memory tool, and structured outputs with Pydantic.

##### 5.1.3.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, code execution, file retrieval, memory tool, and structured outputs.

##### 5.1.3.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, error handling, and progress tracking with event types and best practices.

##### 5.1.3.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, content-type handling, tool-runner integration, event types, and best practices for real-time response display.

##### 5.1.3.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload (max 500 MB), usage in messages (PDF/text with citations, images), file management (list, retrieve metadata, delete, download), and end-to-end example with multi-question workflow. Requires beta header 'files-api-2025-04-14'.

##### 5.1.3.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload with toFile helper, usage in messages (PDF/text documents, images), and file management (list, delete, download). Requires beta header 'files-api-2025-04-14'.

##### 5.1.3.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, status polling, result retrieval, and container reuse. Processes up to 100K requests asynchronously at 50% cost reduction.

### 5.2 API Optimization and Platform Integrations

Prompt caching strategies, model selection, cost optimization, and GitHub Actions automation for Claude Code with @claude mentions in issues and pull requests.

#### 5.2.1 Prompt Caching & API Optimization

Strategies for reducing API costs and latency through prompt caching design, model selection, and live capability discovery. Addresses cache hit optimization via prefix stability and breakpoint placement, provides authoritative model catalog with pricing and context windows, and enables dynamic documentation fetching for current API specifications.

##### 5.2.1.1 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Design patterns for effective prompt caching, covering prefix-stability ordering, breakpoint placement, silent invalidators, and architectural decisions to maximize cache hit rates.

##### 5.2.1.2 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact model IDs, aliases, context windows, and pricing. Includes programmatic model discovery via Models API for live capability data (vision, thinking, effort, structured outputs, context management). Maps user requests to correct model IDs.

##### 5.2.1.3 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, organized by topic with extraction prompts for use when cached data is outdated.

#### 5.2.2 GitHub Integration & CI/CD

GitHub App setup and GitHub Actions automation for Claude Code integration, enabling @claude mentions in issues and pull requests with configurable permissions and custom prompts. Includes comprehensive HTTP error reference for API debugging and retry strategies.

##### 5.2.2.1 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining what Claude Code is, how it works, and security considerations for repository setup.

##### 5.2.2.2 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code via @claude mentions in issues, pull requests, and comments. Configures permissions for contents, pull-requests, issues, and actions reading, with optional custom prompts and claude_args for tool restrictions.

##### 5.2.2.3 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400–529) with causes, fixes, and SDK exception handling patterns. Covers retryable vs. non-retryable errors and common validation mistakes.

---

## 6. Configuration, Hooks, and Specialized Tools

Environment setup, lifecycle automation, IDE integration, resource monitoring, and specialized tool capabilities for accessing external systems, browsers, and code intelligence services.

### 6.1 Environment Setup and Configuration

Project initialization via CLAUDE.md, output formatting modes, platform-specific constraints, and session-scoped file isolation.

#### 6.1.1 Session & Project Configuration Setup

Initialization and management of Claude Code environments through CLAUDE.md documentation and configuration files. Captures codebase conventions, build/test commands, and architecture while enabling customization of settings, hooks, and project-specific preferences.

##### 6.1.1.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and optional skills/hooks, including codebase exploration, user interviews, proposal refinement, and iterative artifact creation.

##### 6.1.1.2 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json), covering when hooks are needed, reading before writing, merging arrays, and common configuration patterns.

##### 6.1.1.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files capturing build/test commands, high-level architecture, and project-specific conventions for future Claude Code instances.

##### 6.1.1.4 [Config (Tool Description)](system-prompts/tool-description-config.md)

Describes the Config tool for getting and setting Claude Code configuration settings stored globally in ~/.claude.json or per-project in settings.json. Supports settings like theme, editor mode, model, and permissions.

#### 6.1.2 Output Formatting & Configuration Modes

Controls Claude's operational behavior through system prompts that configure feature reduction, output formatting standards, file management isolation, and platform-specific constraints. Enables minimal mode for explicit context control, enforces output style compliance, isolates temporary files to session directories, documents PowerShell 5.1 syntax limitations, and provides command execution guidance.

##### 6.1.2.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Minimal mode disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags for authentication, MCP config, and settings.

##### 6.1.2.2 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific formatting guidelines.

##### 6.1.2.3 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

##### 6.1.2.4 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 constraints including unavailable pipeline operators, ternary operators, stderr redirection behavior, UTF-16 LE default encoding, and PSCustomObject return types.

##### 6.1.2.5 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with timeout and output limits. Emphasizes using specialized tools for file operations; includes syntax guidance for variables, cmdlets, registry access, and multiline strings via here-strings.

### 6.2 Hooks, IDE Integration, and Resource Monitoring

Event-driven lifecycle hooks for tool orchestration, real-time IDE state notifications for file and diagnostic awareness, and runtime tracking of token budgets and MCP resources.

#### 6.2.1 Hooks System & Lifecycle Events

Event-driven automation framework triggering command, prompt, or agent execution at lifecycle points including permission requests, tool use, and context compaction. Provides structured JSON I/O, condition evaluation, and verification workflows for orchestrating tool behavior and validation pipelines.

##### 6.2.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide to Claude Code hooks system enabling command, prompt, and agent execution at lifecycle events including PermissionRequest, PreToolUse, PostToolUse, and compaction. Covers hook structure, input/output JSON formats, and common patterns for auto-formatting, logging, and test automation.

##### 6.2.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution.

##### 6.2.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 6.2.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude when a hook stops continuation, displaying the hook name and error message.

##### 6.2.1.5 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix label for continuation messages when a hook execution is stopped.

##### 6.2.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Notifies Claude of successful hook execution with the hook name and result content.

##### 6.2.1.7 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code and returns JSON indicating whether the condition is met or providing a reason for failure.

##### 6.2.1.8 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks: dedup check, command construction, pipe-test, JSON write, syntax validation, live proof, and handoff with user guidance.

#### 6.2.2 IDE Integration & File State Awareness

Real-time notifications of IDE state changes including file opens, line selections, external modifications, and diagnostic updates. Manages file size constraints through truncation and offset handling, maintaining awareness of code context without requiring explicit reads.

##### 6.2.2.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 6.2.2.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in the IDE, providing line numbers and file context.

##### 6.2.2.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides the relevant changes with line numbers.

##### 6.2.2.4 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to new diagnostic issues detected in the codebase or IDE.

##### 6.2.2.5 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 6.2.2.6 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs it to use the Read tool for additional content.

##### 6.2.2.7 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that a requested file read offset exceeds the file's length and provides the actual file size.

#### 6.2.3 Resource Monitoring & Session State

Runtime notifications tracking token consumption, budget utilization, session continuity across machines, and MCP resource availability. Provides visibility into resource constraints and application state changes during execution.

##### 6.2.3.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 6.2.3.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including used, total, and remaining budget.

##### 6.2.3.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and application state may have changed.

##### 6.2.3.4 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 6.2.3.5 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it cannot be displayed in a readable format.

### 6.3 Specialized External Tools

Purpose-built tools for browser automation, Language Server Protocol code intelligence, Jupyter notebooks, web fetching, web search, and deferred schema discovery.

#### 6.3.1 Browser Automation & Computer Use

Programmatic control of Chrome browser through mouse, keyboard, and visual feedback for UI testing and interaction. Provides debugging capabilities, screenshot-driven navigation, and systematic error recovery for complex automation workflows.

##### 6.3.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse, keyboard, and screenshots. Instructs Claude to consult screenshots before clicking, adjust click locations for precision, and center cursor on elements.

##### 6.3.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action types for Chrome browser automation including clicks, typing, scrolling, keyboard input, dragging, zooming, and hover interactions for UI testing and automation.

##### 6.3.1.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with extra frames, console debugging with regex filtering, avoiding JavaScript dialogs that block extension commands, and tab context initialization. Emphasizes staying focused and asking for guidance when encountering failures or unexpected complexity.

##### 6.3.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the exact tool name with `select:mcp__claude-in-chrome__<tool_name>` syntax before calling the tool.

#### 6.3.2 Specialized Tool Descriptions

Defines capabilities for accessing external systems and data sources: code intelligence via Language Server Protocol, Jupyter notebook cell manipulation, web content fetching with caching and HTML parsing, web search with source attribution, execution pausing, and deferred tool schema discovery. Each tool includes specific invocation patterns and output handling requirements.

##### 6.3.2.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interacts with Language Server Protocol servers to provide code intelligence including symbol navigation, references, hover information, call hierarchies, and implementations across the workspace.

##### 6.3.2.2 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replaces contents of specific cells in Jupyter notebooks. Supports insert and delete modes with 0-indexed cell numbering; requires absolute file paths.

##### 6.3.2.3 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a small model. Includes 15-minute caching, redirect handling, and HTTPS upgrade; prefer MCP web fetch tools if available.

##### 6.3.2.4 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff. Requires mandatory Sources section in responses listing all relevant URLs; supports domain filtering and uses current year in queries.

##### 6.3.2.5 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input. Useful for waiting or resting; preferred over bash sleep as it doesn't hold shell processes.

##### 6.3.2.6 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by name or keyword search. Returns JSONSchema definitions enabling invocation of matched tools; supports exact selection, keyword matching, and required-term filtering.

### 6.4 Skill Creation & Management

Enables creation and invocation of reusable specialized skills (slash commands) that encapsulate domain knowledge and workflows. Includes conversion of sessions into shareable skills, debugging utilities, and session-scoped skill tracking.

#### 6.4.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within conversations. Invoke by name with optional arguments; check system reminders for available skills and invoke before generating other responses.

#### 6.4.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Explains that slash commands invoke user-invocable skills via the Skill tool, restricting usage to listed skills only.

#### 6.4.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Reminds Claude to follow guidelines for skills that were invoked during the current session.

#### 6.4.4 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides conversion of a session into a reusable skill through 4-step process: analysis, multi-round user interview, SKILL.md creation with frontmatter and step annotations, and confirmation with syntax highlighting.

#### 6.4.5 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, checking CPU/memory/state, gathering debug context, and posting diagnostic report to Slack.

#### 6.4.6 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions using debug logs, reviewing error patterns, and suggesting concrete fixes or next steps.

---

## 7. Communication, UX, and User Collaboration

How Claude communicates with users — output style and tone, interactive questioning, prompt suggestions, security-aware messaging, and educational guidance that balances task completion with learning.

### 7.1 Output Style and User Interaction

Conciseness and formatting standards for all user-facing output, interactive clarification questions with visual previews, and predictive prompt suggestions that anticipate user intent.

#### 7.1.1 Output Style, Tone & Communication

Communication standards that enforce conciseness, directness, and action-focused messaging. All user-facing output routes through dedicated messaging tools with markdown support, while responses include precise code references and follow strict formatting conventions for summaries and thread notes.

##### 7.1.1.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler and preamble, and focusing on decisions, status updates, and blockers.

##### 7.1.1.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs responses to be short and concise.

##### 7.1.1.3 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing code for easy user navigation.

##### 7.1.1.4 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to route all user-facing replies through SendUserMessage, with guidance on acknowledgment patterns, checkpoints for longer work, and keeping messages concise and direct.

##### 7.1.1.5 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends messages to users with markdown support and file attachments. Status field indicates intent: 'normal' for direct replies, 'proactive' for initiated communication about blockers or completed background work.

##### 7.1.1.6 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths only, share relevant paths in final responses with code snippets only when essential, avoid emojis, and omit colons before tool calls for clarity.

##### 7.1.1.7 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Defines strict formatting rules for agent action summaries: 3-5 words in present tense (-ing form), naming specific files or functions rather than branches, with examples of good and bad formats.

#### 7.1.2 User Interaction & Question Asking

Interactive questioning mechanisms that gather user input, clarify ambiguous instructions, and present implementation choices during execution. Preview fields enable side-by-side visual comparison of options through HTML artifacts, code snippets, and diagrams in single-select questions.

##### 7.1.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes using AskUserQuestion to gather user preferences, clarify ambiguous instructions, and present implementation choices during execution, with special guidance for plan mode.

##### 7.1.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructs on using the optional preview field in single-select questions to display self-contained HTML artifacts like UI mockups, code snippets, and visual diagrams.

##### 7.1.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using optional preview fields for ASCII mockups, code snippets, diagrams, and configuration examples in single-select questions.

#### 7.1.3 Prompt Suggestion & UX Assistance

Enhances user experience through predictive prompt suggestions based on conversation context, web content summarization with quote limits and license awareness, and dynamic terminal status line configuration. Anticipates user intent and surfaces relevant next actions while managing display and content constraints.

##### 7.1.3.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what the user would naturally type next based on recent messages and conversation context, suggesting specific follow-up actions without evaluative or Claude-voice language.

##### 7.1.3.2 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose WebFetch output for the main model, enforcing strict 125-character quote limits for untrusted domains, using quotation marks for exact language, and respecting open-source licenses.

##### 7.1.3.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line by extracting PS1 from shell configs, converting escape sequences to shell commands, and updating settings.json. Receives JSON input with session metadata, model info, context window usage, and rate limits via stdin, enabling dynamic status line generation with jq queries.

### 7.2 Security Awareness and Learning Modes

Multi-layered security review preventing prompt injection and credential leakage in agentic contexts, alongside educational modes that guide users through design decisions rather than executing directly.

#### 7.2.1 Security Review & Malicious Activity Prevention

Multi-layered security framework preventing prompt injection, scope creep, and credential leakage through autonomous agent monitoring, vulnerability assessment, and malware analysis. Permits authorized security testing and defensive work while blocking destructive techniques and detection evasion.

##### 7.2.1.1 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing destructive techniques, DoS attacks, and detection evasion. Dual-use tools require clear authorization context.

##### 7.2.1.2 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, while permitting analysis, reports, and behavior questions.

##### 7.2.1.3 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor evaluating autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with evaluation rules for composite actions, file execution, code commits, and sub-agent delegation.

##### 7.2.1.4 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, block rules (git destructive, code from external, production deploy, credential leakage, data exfiltration, etc.), and allow exceptions (test artifacts, local operations, declared dependencies) governing autonomous agent tool actions.

##### 7.2.1.5 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review agent that analyzes code diffs for exploitable vulnerabilities with high confidence thresholds, excluding DOS, secrets management, and rate limiting issues. Uses three-phase methodology: repository context research, comparative analysis against existing patterns, and vulnerability assessment with structured markdown output including severity, category, exploit scenario, and recommendations.

##### 7.2.1.6 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Prioritizes avoiding security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks, with immediate correction of any insecure code.

#### 7.2.2 Learning & Teaching Modes

Balances task completion with education by requesting human input on design decisions, providing implementation insights, and guiding users through step-by-step instruction rather than direct execution.

##### 7.2.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Defines learning mode behavior where Claude balances task completion with education by requesting human contributions on design decisions, using TodoList tracking, and providing insights on code patterns and system effects.

##### 7.2.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights in learning mode by including 2-3 key learning points about implementation choices before and after code generation.

##### 7.2.2.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct execution. Use when user wants to learn rather than have work done for them.
