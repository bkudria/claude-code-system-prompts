# Claude Code System Prompts Index

Structured guidance for building, configuring, and operating Claude Code as an autonomous engineering environment — covering everything needed to deploy reliable AI agents that write code, manage state, coordinate complex workflows, and integrate with external systems.

## Table of Contents

1. [Bash and Shell Execution](#1-bash-and-shell-execution)
   1. [Bash Tool: Core Execution Rules](#11-bash-tool-core-execution-rules)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (command description) [Tool Description]](#112-bash-command-description-tool-description)
      3. [Bash (maintain cwd) [Tool Description]](#113-bash-maintain-cwd-tool-description)
      4. [Bash (no newlines) [Tool Description]](#114-bash-no-newlines-tool-description)
      5. [Bash (parallel commands) [Tool Description]](#115-bash-parallel-commands-tool-description)
      6. [Bash (quote file paths) [Tool Description]](#116-bash-quote-file-paths-tool-description)
      7. [Bash (sequential commands) [Tool Description]](#117-bash-sequential-commands-tool-description)
      8. [Bash (semicolon usage) [Tool Description]](#118-bash-semicolon-usage-tool-description)
      9. [Bash (timeout) [Tool Description]](#119-bash-timeout-tool-description)
      10. [Bash (working directory) [Tool Description]](#1110-bash-working-directory-tool-description)
      11. [Bash (verify parent directory) [Tool Description]](#1111-bash-verify-parent-directory-tool-description)
      12. [Bash (sleep — keep short) [Tool Description]](#1112-bash-sleep-—-keep-short-tool-description)
      13. [Bash (sleep — run immediately) [Tool Description]](#1113-bash-sleep-—-run-immediately-tool-description)
      14. [Bash (sleep — use check commands) [Tool Description]](#1114-bash-sleep-—-use-check-commands-tool-description)
      15. [Bash (sleep — no polling background tasks) [Tool Description]](#1115-bash-sleep-—-no-polling-background-tasks-tool-description)
      16. [One of six rules for using sleep command (System Prompt)](#1116-one-of-six-rules-for-using-sleep-command-system-prompt)
   2. [Bash Tool: Prefer Dedicated Tools Over Bash](#12-bash-tool-prefer-dedicated-tools-over-bash)
      1. [Bash (prefer dedicated tools) [Tool Description]](#121-bash-prefer-dedicated-tools-tool-description)
      2. [Bash (built-in tools note) [Tool Description]](#122-bash-built-in-tools-note-tool-description)
      3. [Bash (alternative — communication) [Tool Description]](#123-bash-alternative-—-communication-tool-description)
      4. [Bash (alternative — content search) [Tool Description]](#124-bash-alternative-—-content-search-tool-description)
      5. [Bash (alternative — edit files) [Tool Description]](#125-bash-alternative-—-edit-files-tool-description)
      6. [Bash (alternative — file search) [Tool Description]](#126-bash-alternative-—-file-search-tool-description)
      7. [Bash (alternative — read files) [Tool Description]](#127-bash-alternative-—-read-files-tool-description)
      8. [Bash (alternative — write files) [Tool Description]](#128-bash-alternative-—-write-files-tool-description)
      9. [Tool usage (reserve Bash) [System Prompt]](#129-tool-usage-reserve-bash-system-prompt)
      10. [Tool usage (edit files) [System Prompt]](#1210-tool-usage-edit-files-system-prompt)
      11. [Tool usage (read files) [System Prompt]](#1211-tool-usage-read-files-system-prompt)
      12. [Tool usage (search content) [System Prompt]](#1212-tool-usage-search-content-system-prompt)
      13. [Tool usage (search files) [System Prompt]](#1213-tool-usage-search-files-system-prompt)
      14. [Tool usage (create files) [System Prompt]](#1214-tool-usage-create-files-system-prompt)
   3. [Bash Sandbox: Security and Restriction Policies](#13-bash-sandbox-security-and-restriction-policies)
      1. [Bash (sandbox — default to sandbox) [Tool Description]](#131-bash-sandbox-—-default-to-sandbox-tool-description)
      2. [Bash (sandbox — mandatory mode) [Tool Description]](#132-bash-sandbox-—-mandatory-mode-tool-description)
      3. [Bash (sandbox — no exceptions) [Tool Description]](#133-bash-sandbox-—-no-exceptions-tool-description)
      4. [Bash (sandbox — per-command) [Tool Description]](#134-bash-sandbox-—-per-command-tool-description)
      5. [Bash (sandbox — adjust settings) [Tool Description]](#135-bash-sandbox-—-adjust-settings-tool-description)
      6. [Bash (sandbox — evidence: access denied) [Tool Description]](#136-bash-sandbox-—-evidence-access-denied-tool-description)
      7. [Bash (sandbox — evidence list header) [Tool Description]](#137-bash-sandbox-—-evidence-list-header-tool-description)
      8. [Bash (sandbox — evidence: network failures) [Tool Description]](#138-bash-sandbox-—-evidence-network-failures-tool-description)
      9. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#139-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      10. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1310-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
      11. [Bash (sandbox — explain restriction) [Tool Description]](#1311-bash-sandbox-—-explain-restriction-tool-description)
      12. [Bash (sandbox — failure evidence condition) [Tool Description]](#1312-bash-sandbox-—-failure-evidence-condition-tool-description)
      13. [Bash (sandbox — no sensitive paths) [Tool Description]](#1313-bash-sandbox-—-no-sensitive-paths-tool-description)
      14. [Bash (sandbox — response header) [Tool Description]](#1314-bash-sandbox-—-response-header-tool-description)
      15. [Bash (sandbox — retry without sandbox) [Tool Description]](#1315-bash-sandbox-—-retry-without-sandbox-tool-description)
      16. [Bash (sandbox — tmpdir) [Tool Description]](#1316-bash-sandbox-—-tmpdir-tool-description)
      17. [Bash (sandbox — user permission prompt) [Tool Description]](#1317-bash-sandbox-—-user-permission-prompt-tool-description)
2. [File, Code, and Quality Operations](#2-file-code-and-quality-operations)
   1. [File Access and Navigation](#21-file-access-and-navigation)
      1. [File System Tools: Read, Write, Edit, Search](#211-file-system-tools-read-write-edit-search)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Edit (Tool Description)](#2113-edit-tool-description)
         4. [Glob (Tool Description)](#2114-glob-tool-description)
         5. [Grep (Tool Description)](#2115-grep-tool-description)
         6. [NotebookEdit (Tool Description)](#2116-notebookedit-tool-description)
         7. [Tool usage (direct search) [System Prompt]](#2117-tool-usage-direct-search-system-prompt)
      2. [File State Warnings and Edge Cases](#212-file-state-warnings-and-edge-cases)
         1. [File exists but empty (System Reminder)](#2121-file-exists-but-empty-system-reminder)
         2. [File truncated (System Reminder)](#2122-file-truncated-system-reminder)
         3. [File shorter than offset (System Reminder)](#2123-file-shorter-than-offset-system-reminder)
         4. [MCP resource no content (System Reminder)](#2124-mcp-resource-no-content-system-reminder)
         5. [MCP resource no displayable content (System Reminder)](#2125-mcp-resource-no-displayable-content-system-reminder)
      3. [Codebase Exploration and Navigation](#213-codebase-exploration-and-navigation)
         1. [Explore (Agent Prompt)](#2131-explore-agent-prompt)
         2. [Explore strengths and guidelines (Agent Prompt)](#2132-explore-strengths-and-guidelines-agent-prompt)
         3. [LSP (Tool Description)](#2133-lsp-tool-description)
         4. [/batch slash command (Agent Prompt)](#2134-batch-slash-command-agent-prompt)
   2. [Code Standards and Validation](#22-code-standards-and-validation)
      1. [Code Quality and Engineering Best Practices](#221-code-quality-and-engineering-best-practices)
         1. [Doing tasks (avoid over-engineering) [System Prompt]](#2211-doing-tasks-avoid-over-engineering-system-prompt)
         2. [Doing tasks (no premature abstractions) [System Prompt]](#2212-doing-tasks-no-premature-abstractions-system-prompt)
         3. [Doing tasks (no compatibility hacks) [System Prompt]](#2213-doing-tasks-no-compatibility-hacks-system-prompt)
         4. [Doing tasks (no unnecessary error handling) [System Prompt]](#2214-doing-tasks-no-unnecessary-error-handling-system-prompt)
         5. [Doing tasks (no unnecessary additions) [System Prompt]](#2215-doing-tasks-no-unnecessary-additions-system-prompt)
         6. [Doing tasks (minimize file creation) [System Prompt]](#2216-doing-tasks-minimize-file-creation-system-prompt)
         7. [Doing tasks (read before modifying) [System Prompt]](#2217-doing-tasks-read-before-modifying-system-prompt)
         8. [Doing tasks (security) [System Prompt]](#2218-doing-tasks-security-system-prompt)
         9. [Doing tasks (software engineering focus) [System Prompt]](#2219-doing-tasks-software-engineering-focus-system-prompt)
         10. [Doing tasks (no time estimates) [System Prompt]](#22110-doing-tasks-no-time-estimates-system-prompt)
      2. [Verification and Testing](#222-verification-and-testing)
         1. [Verification specialist (Skill)](#2221-verification-specialist-skill)
         2. [Create verifier skills (Skill)](#2222-create-verifier-skills-skill)
         3. [Verification specialist (Agent Prompt)](#2223-verification-specialist-agent-prompt)
         4. [update-config (7-step verification flow) [Skill]](#2224-update-config-7-step-verification-flow-skill)
      3. [Code Review and Refactoring Skills](#223-code-review-and-refactoring-skills)
         1. [Simplify (Skill)](#2231-simplify-skill)
         2. [/review-pr slash command (Agent Prompt)](#2232-review-pr-slash-command-agent-prompt)
         3. [/pr-comments slash command (Agent Prompt)](#2233-pr-comments-slash-command-agent-prompt)
         4. [Worker instructions (System Prompt)](#2234-worker-instructions-system-prompt)
3. [Agent Orchestration and Planning](#3-agent-orchestration-and-planning)
   1. [Multi-Agent Coordination](#31-multi-agent-coordination)
      1. [Multi-Agent Teams and Swarm Coordination](#311-multi-agent-teams-and-swarm-coordination)
         1. [TeammateTool (Tool Description)](#3111-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#3112-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#3113-sendmessagetool-tool-description)
         4. [SendMessageTool (non-agent-teams) [Tool Description]](#3114-sendmessagetool-non-agent-teams-tool-description)
         5. [Team Coordination (System Reminder)](#3115-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#3116-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#3117-teammate-communication-system-prompt)
         8. [Team memory content display (System Prompt)](#3118-team-memory-content-display-system-prompt)
      2. [Subagent Launching and Delegation](#312-subagent-launching-and-delegation)
         1. [Agent (usage notes) [Tool Description]](#3121-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#3122-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (subagent guidance) [System Prompt]](#3123-tool-usage-subagent-guidance-system-prompt)
         4. [Tool usage (delegate exploration) [System Prompt]](#3124-tool-usage-delegate-exploration-system-prompt)
         5. [Writing subagent prompts (System Prompt)](#3125-writing-subagent-prompts-system-prompt)
         6. [Subagent delegation examples (System Prompt)](#3126-subagent-delegation-examples-system-prompt)
         7. [Fork usage guidelines (System Prompt)](#3127-fork-usage-guidelines-system-prompt)
         8. [Agent mention (System Reminder)](#3128-agent-mention-system-reminder)
   2. [Planning, Tasks, and Agent Specification](#32-planning-tasks-and-agent-specification)
      1. [Planning Mode: Workflow and Constraints](#321-planning-mode-workflow-and-constraints)
         1. [EnterPlanMode (Tool Description)](#3211-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3212-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#3213-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#3214-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#3215-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#3216-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#3217-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#3218-plan-file-reference-system-reminder)
         9. [Verify plan reminder (System Reminder)](#3219-verify-plan-reminder-system-reminder)
         10. [Phase four of plan mode (System Prompt)](#32110-phase-four-of-plan-mode-system-prompt)
         11. [Plan mode (enhanced) [Agent Prompt]](#32111-plan-mode-enhanced-agent-prompt)
      2. [Task and Todo Management](#322-task-and-todo-management)
         1. [TodoWrite (Tool Description)](#3221-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#3222-taskcreate-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#3223-tasklist-teammate-workflow-tool-description)
         4. [TodoWrite reminder (System Reminder)](#3224-todowrite-reminder-system-reminder)
         5. [Task tools reminder (System Reminder)](#3225-task-tools-reminder-system-reminder)
         6. [Task status (System Reminder)](#3226-task-status-system-reminder)
         7. [Tool usage (task management) [System Prompt]](#3227-tool-usage-task-management-system-prompt)
      3. [Agent Specification and Execution](#323-agent-specification-and-execution)
         1. [Agent creation architect (Agent Prompt)](#3231-agent-creation-architect-agent-prompt)
         2. [Agent Summary Generation (System Prompt)](#3232-agent-summary-generation-system-prompt)
         3. [Worker fork execution (Agent Prompt)](#3233-worker-fork-execution-agent-prompt)
4. [Session, Memory, and Context Management](#4-session-memory-and-context-management)
   1. [Memory and Knowledge Persistence](#41-memory-and-knowledge-persistence)
      1. [Memory and Persistent Context](#411-memory-and-persistent-context)
         1. [Memory file contents (System Reminder)](#4111-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#4112-nested-memory-contents-system-reminder)
         3. [Agent memory instructions (System Prompt)](#4113-agent-memory-instructions-system-prompt)
         4. [Description part of memory instructions (System Prompt)](#4114-description-part-of-memory-instructions-system-prompt)
         5. [Memory description of user feedback (System Prompt)](#4115-memory-description-of-user-feedback-system-prompt)
         6. [Dream memory consolidation (Agent Prompt)](#4116-dream-memory-consolidation-agent-prompt)
         7. [Determine which memory files to attach (Agent Prompt)](#4117-determine-which-memory-files-to-attach-agent-prompt)
         8. [Session memory template (Data)](#4118-session-memory-template-data)
         9. [Session memory update instructions (Agent Prompt)](#4119-session-memory-update-instructions-agent-prompt)
      2. [Context Compaction and Conversation Summarization](#412-context-compaction-and-conversation-summarization)
         1. [Context compaction summary (System Prompt)](#4121-context-compaction-summary-system-prompt)
         2. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#4122-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
         3. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#4123-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
         4. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#4124-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
         5. [Conversation summarization (Agent Prompt)](#4125-conversation-summarization-agent-prompt)
         6. [Recent Message Summarization (Agent Prompt)](#4126-recent-message-summarization-agent-prompt)
   2. [Session Tracking and Resource Awareness](#42-session-tracking-and-resource-awareness)
      1. [Session and State Management](#421-session-and-state-management)
         1. [Session continuation (System Reminder)](#4211-session-continuation-system-reminder)
         2. [File modified by user or linter (System Reminder)](#4212-file-modified-by-user-or-linter-system-reminder)
         3. [File opened in IDE (System Reminder)](#4213-file-opened-in-ide-system-reminder)
         4. [Lines selected in IDE (System Reminder)](#4214-lines-selected-in-ide-system-reminder)
         5. [New diagnostics detected (System Reminder)](#4215-new-diagnostics-detected-system-reminder)
         6. [Compact file reference (System Reminder)](#4216-compact-file-reference-system-reminder)
         7. [Session Search Assistant (Agent Prompt)](#4217-session-search-assistant-agent-prompt)
         8. [Coding session title generator (Agent Prompt)](#4218-coding-session-title-generator-agent-prompt)
      2. [Resource and Budget Monitoring](#422-resource-and-budget-monitoring)
         1. [Token usage (System Reminder)](#4221-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#4222-usd-budget-system-reminder)
   3. [Usage Analytics and Workflow Intelligence](#43-usage-analytics-and-workflow-intelligence)
      1. [Insights at a glance summary (System Prompt)](#431-insights-at-a-glance-summary-system-prompt)
      2. [Insights friction analysis (System Prompt)](#432-insights-friction-analysis-system-prompt)
      3. [Insights on the horizon (System Prompt)](#433-insights-on-the-horizon-system-prompt)
      4. [Insights session facets extraction (System Prompt)](#434-insights-session-facets-extraction-system-prompt)
      5. [Insights suggestions (System Prompt)](#435-insights-suggestions-system-prompt)
5. [Claude Code Configuration and Developer Tooling](#5-claude-code-configuration-and-developer-tooling)
   1. [Hooks, Permissions, and Runtime Settings](#51-hooks-permissions-and-runtime-settings)
      1. [Hook System: Lifecycle Events and Control Flow](#511-hook-system-lifecycle-events-and-control-flow)
         1. [Hooks Configuration (System Prompt)](#5111-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#5112-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#5113-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#5114-hook-stopped-continuation-system-reminder)
         5. [Hook stopped continuation prefix (System Reminder)](#5115-hook-stopped-continuation-prefix-system-reminder)
         6. [Hook success (System Reminder)](#5116-hook-success-system-reminder)
         7. [Hook condition evaluator (Agent Prompt)](#5117-hook-condition-evaluator-agent-prompt)
         8. [Agent Hook (Agent Prompt)](#5118-agent-hook-agent-prompt)
      2. [Runtime Configuration and Execution Control](#512-runtime-configuration-and-execution-control)
         1. [Update Claude Code Config (Skill)](#5121-update-claude-code-config-skill)
         2. [Scratchpad directory (System Prompt)](#5122-scratchpad-directory-system-prompt)
         3. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#5123-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   2. [Skills, Git, and Diagnostics](#52-skills-git-and-diagnostics)
      1. [Skills: Creation, Invocation, and Management](#521-skills-creation-invocation-and-management)
         1. [Skill (Tool Description)](#5211-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#5212-tool-usage-skill-invocation-system-prompt)
         3. [Invoked skills (System Reminder)](#5213-invoked-skills-system-reminder)
         4. [/init CLAUDE.md and skill setup (new version) [Skill]](#5214-init-claudemd-and-skill-setup-new-version-skill)
         5. [Skillify Current Session (System Prompt)](#5215-skillify-current-session-system-prompt)
      2. [Git Operations and Version Control](#522-git-operations-and-version-control)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#5221-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#5222-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#5223-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#5224-bash-git-—-prefer-new-commits-tool-description)
         5. [EnterWorktree (Tool Description)](#5225-enterworktree-tool-description)
         6. [ExitWorktree (Tool Description)](#5226-exitworktree-tool-description)
         7. [Quick git commit (Agent Prompt)](#5227-quick-git-commit-agent-prompt)
         8. [Quick PR creation (Agent Prompt)](#5228-quick-pr-creation-agent-prompt)
         9. [Session title and branch generation (Agent Prompt)](#5229-session-title-and-branch-generation-agent-prompt)
         10. [Git status (System Prompt)](#52210-git-status-system-prompt)
      3. [Debugging and Diagnostics](#523-debugging-and-diagnostics)
         1. [Debugging (Skill)](#5231-debugging-skill)
         2. [/stuck slash command (Skill)](#5232-stuck-slash-command-skill)
         3. [Bash command description writer (Agent Prompt)](#5233-bash-command-description-writer-agent-prompt)
      4. [Utility Tools: Sleep and Dynamic Tool Discovery](#524-utility-tools-sleep-and-dynamic-tool-discovery)
         1. [Sleep (Tool Description)](#5241-sleep-tool-description)
         2. [ToolSearch (second part) [Tool Description]](#5242-toolsearch-second-part-tool-description)
6. [External Tools, Automation, and User Interaction](#6-external-tools-automation-and-user-interaction)
   1. [Web, Browser, and Scheduling Automation](#61-web-browser-and-scheduling-automation)
      1. [Browser Automation and Computer Control](#611-browser-automation-and-computer-control)
         1. [Computer (Tool Description)](#6111-computer-tool-description)
         2. [Computer action (Tool Parameter)](#6112-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#6113-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#6114-chrome-browser-mcp-tools-system-prompt)
      2. [Web Search and Content Fetching](#612-web-search-and-content-fetching)
         1. [WebSearch (Tool Description)](#6121-websearch-tool-description)
         2. [WebFetch (Tool Description)](#6122-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#6123-webfetch-summarizer-agent-prompt)
      3. [Scheduling and Cron Jobs](#613-scheduling-and-cron-jobs)
         1. [CronCreate (Tool Description)](#6131-croncreate-tool-description)
         2. [/loop slash command (Skill)](#6132-loop-slash-command-skill)
         3. [/schedule slash command (Agent Prompt)](#6133-schedule-slash-command-agent-prompt)
   2. [Execution Behavior and Communication](#62-execution-behavior-and-communication)
      1. [Task Execution Behavior and User Interaction](#621-task-execution-behavior-and-user-interaction)
         1. [Doing tasks (blocked approach) [System Prompt]](#6211-doing-tasks-blocked-approach-system-prompt)
         2. [Doing tasks (ambitious tasks) [System Prompt]](#6212-doing-tasks-ambitious-tasks-system-prompt)
         3. [Doing tasks (help and feedback) [System Prompt]](#6213-doing-tasks-help-and-feedback-system-prompt)
         4. [Executing actions with care (System Prompt)](#6214-executing-actions-with-care-system-prompt)
         5. [Auto mode (System Prompt)](#6215-auto-mode-system-prompt)
         6. [System section (System Prompt)](#6216-system-section-system-prompt)
         7. [Tool execution denied (System Prompt)](#6217-tool-execution-denied-system-prompt)
      2. [Output Style and Communication Guidelines](#622-output-style-and-communication-guidelines)
         1. [Output efficiency (System Prompt)](#6221-output-efficiency-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#6222-tone-and-style-concise-output-—-short-system-prompt)
         3. [Tone and style (code references) [System Prompt]](#6223-tone-and-style-code-references-system-prompt)
         4. [How to use the SendUserMessage tool (System Prompt)](#6224-how-to-use-the-sendusermessage-tool-system-prompt)
         5. [Agent thread notes (System Prompt)](#6225-agent-thread-notes-system-prompt)
         6. [Output style active (System Reminder)](#6226-output-style-active-system-reminder)
         7. [Common suffix (response format) [Agent Prompt]](#6227-common-suffix-response-format-agent-prompt)
      3. [Security Review and Threat Monitoring](#623-security-review-and-threat-monitoring)
         1. [/security-review slash command (Agent Prompt)](#6231-security-review-slash-command-agent-prompt)
         2. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#6232-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         3. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#6233-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         4. [Bash command prefix detection (Agent Prompt)](#6234-bash-command-prefix-detection-agent-prompt)
         5. [Malware analysis after Read tool call (System Reminder)](#6235-malware-analysis-after-read-tool-call-system-reminder)
         6. [Censoring assistance with malicious activities (System Prompt)](#6236-censoring-assistance-with-malicious-activities-system-prompt)
   3. [User Clarification and Collaborative Learning](#63-user-clarification-and-collaborative-learning)
      1. [User Interaction Tools: Questions and Clarification](#631-user-interaction-tools-questions-and-clarification)
         1. [AskUserQuestion (Tool Description)](#6311-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#6312-askuserquestion-preview-field-tool-description)
         3. [/btw side question (System Reminder)](#6313-btw-side-question-system-reminder)
      2. [Interactive Learning and Decision Support](#632-interactive-learning-and-decision-support)
         1. [Learning mode (System Prompt)](#6321-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6322-learning-mode-insights-system-prompt)
         3. [Option previewer (System Prompt)](#6323-option-previewer-system-prompt)
         4. [Prompt Suggestion Generator v2 (Agent Prompt)](#6324-prompt-suggestion-generator-v2-agent-prompt)
7. [API References, SDKs, and Documentation](#7-api-references-sdks-and-documentation)
   1. [Claude API SDK References](#71-claude-api-sdk-references)
      1. [Claude API SDK References: Core Languages](#711-claude-api-sdk-references-core-languages)
         1. [Claude API reference — Python (Data)](#7111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#7112-claude-api-reference-—-typescript-data)
         3. [Streaming reference — Python (Data)](#7113-streaming-reference-—-python-data)
         4. [Streaming reference — TypeScript (Data)](#7114-streaming-reference-—-typescript-data)
         5. [Tool use reference — Python (Data)](#7115-tool-use-reference-—-python-data)
         6. [Tool use reference — TypeScript (Data)](#7116-tool-use-reference-—-typescript-data)
         7. [Tool use concepts (Data)](#7117-tool-use-concepts-data)
         8. [Files API reference — Python (Data)](#7118-files-api-reference-—-python-data)
         9. [Files API reference — TypeScript (Data)](#7119-files-api-reference-—-typescript-data)
         10. [Message Batches API reference — Python (Data)](#71110-message-batches-api-reference-—-python-data)
      2. [Claude API SDK References: Additional Languages and HTTP](#712-claude-api-sdk-references-additional-languages-and-http)
         1. [Claude API reference — C# (Data)](#7121-claude-api-reference-—-c-data)
         2. [Claude API reference — Go (Data)](#7122-claude-api-reference-—-go-data)
         3. [Claude API reference — Java (Data)](#7123-claude-api-reference-—-java-data)
         4. [Claude API reference — PHP (Data)](#7124-claude-api-reference-—-php-data)
         5. [Claude API reference — Ruby (Data)](#7125-claude-api-reference-—-ruby-data)
         6. [Claude API reference — cURL (Data)](#7126-claude-api-reference-—-curl-data)
   2. [Agent SDK, Model Metadata, and Guidance](#72-agent-sdk-model-metadata-and-guidance)
      1. [Agent SDK References and Patterns](#721-agent-sdk-references-and-patterns)
         1. [Agent SDK reference — Python (Data)](#7211-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#7212-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#7213-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#7214-agent-sdk-patterns-—-typescript-data)
         5. [Build with Claude API (Skill)](#7215-build-with-claude-api-skill)
         6. [Build with Claude API (reference guide) [Skill]](#7216-build-with-claude-api-reference-guide-skill)
      2. [Claude Model and API Metadata](#722-claude-model-and-api-metadata)
         1. [Claude model catalog (Data)](#7221-claude-model-catalog-data)
         2. [HTTP error codes reference (Data)](#7222-http-error-codes-reference-data)
         3. [Live documentation sources (Data)](#7223-live-documentation-sources-data)
         4. [GitHub App installation PR description (Data)](#7224-github-app-installation-pr-description-data)
         5. [GitHub Actions workflow for @claude mentions (Data)](#7225-github-actions-workflow-for-claude-mentions-data)
      3. [Project Documentation and Setup](#723-project-documentation-and-setup)
         1. [CLAUDE.md creation (Agent Prompt)](#7231-claudemd-creation-agent-prompt)
         2. [Update Magic Docs (Agent Prompt)](#7232-update-magic-docs-agent-prompt)
         3. [Status line setup (Agent Prompt)](#7233-status-line-setup-agent-prompt)
      4. [Claude Guide and Documentation Agent](#724-claude-guide-and-documentation-agent)
         1. [Claude guide agent (Agent Prompt)](#7241-claude-guide-agent-agent-prompt)

---

## 1. Bash and Shell Execution

Rules, preferences, and security policies governing how bash commands are executed, chained, and sandboxed within Claude Code sessions.

### 1.1 Bash Tool: Core Execution Rules

Bash commands execute with persistent working directory state, requiring absolute paths and proper quoting for file paths with spaces. Sequential execution uses `&&` for failure propagation or `;` when failures are acceptable; parallel independent commands improve efficiency. Timeouts, sleep restrictions, and parent directory verification prevent blocking and errors, while polling external processes favors check commands over sleep loops.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Executes a given bash command and returns its output.

#### 1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Write clear, concise descriptions of bash commands: keep simple commands brief (5-10 words) and provide context for complex commands with pipes or obscure flags.

#### 1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Maintain current working directory throughout the session by using absolute paths and avoiding cd unless explicitly requested.

#### 1.1.4 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate commands in bash tool calls.

#### 1.1.5 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent bash commands as parallel tool calls in a single message to improve efficiency.

#### 1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.7 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs chaining dependent commands with `&&` in a single bash call to ensure sequential execution with failure propagation.

#### 1.1.8 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Specifies using semicolons only when commands must run sequentially but earlier failures are acceptable.

#### 1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Allows optional timeout configuration in milliseconds up to a maximum, with a default timeout applied if not specified.

#### 1.1.10 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not, with environment initialized from user profile.

#### 1.1.11 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Requires verifying parent directory existence with `ls` before creating new directories or files.

#### 1.1.12 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Restricts sleep duration to 1-5 seconds to avoid blocking the user.

#### 1.1.13 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Prohibits sleeping between commands that can run immediately.

#### 1.1.14 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Recommends using check commands like `gh run view` instead of sleeping when polling external processes.

#### 1.1.15 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Prohibits polling background tasks started with `run_in_background`; Claude will be notified upon completion.

#### 1.1.16 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; requires diagnosing root causes instead.

### 1.2 Bash Tool: Prefer Dedicated Tools Over Bash

Dedicated tools provide superior user experience and permission transparency compared to bash equivalents. Read, Write, Edit, Glob, and Grep tools handle file operations and searching; direct output replaces echo/printf. Reserve bash exclusively for system commands and terminal operations, defaulting to specialized tools whenever available.

#### 1.2.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for find, grep, cat, and similar read-only searching commands; use dedicated tools instead for better user experience.

#### 1.2.2 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Prefer built-in tools over Bash equivalents as they provide better user experience and easier permission review.

#### 1.2.3 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Output text directly instead of using echo or printf.

#### 1.2.4 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Use the Grep tool for content search instead of grep or rg commands.

#### 1.2.5 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Use the Edit tool for file editing instead of sed or awk commands.

#### 1.2.6 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Use the Glob tool for file search instead of find or ls commands.

#### 1.2.7 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Use the Read tool for file reading instead of cat, head, or tail commands.

#### 1.2.8 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Use the Write tool for file writing instead of echo or cat commands.

#### 1.2.9 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations; default to dedicated tools when available and only use Bash as a fallback when absolutely necessary.

#### 1.2.10 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Prefer the Edit tool over sed or awk for file modifications.

#### 1.2.11 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Use the Read tool instead of cat, head, tail, or sed for accessing file contents.

#### 1.2.12 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool instead of grep or rg to search file contents.

#### 1.2.13 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool instead of find or ls to search for files.

#### 1.2.14 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Prefers Write tool over cat heredoc or echo redirection for file creation.

### 1.3 Bash Sandbox: Security and Restriction Policies

Sandbox mode is mandatory and stateless—each command defaults to sandboxed execution regardless of prior requests. Access denied, network failures, and operation-not-permitted errors signal sandbox restrictions; retry immediately with `dangerouslyDisableSandbox: true` without prompting. Use `$TMPDIR` for temporary files and never suggest sensitive paths like ~/.ssh or credential files for allowlist additions.

#### 1.3.1 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always default to running commands within the sandbox; only bypass when the user explicitly asks or evidence of sandbox restriction appears.

#### 1.3.2 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.3.3 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.3.4 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Requires treating each command individually and defaulting to sandbox mode for future commands, even after running with `dangerouslyDisableSandbox: true`.

#### 1.3.5 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

If a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

#### 1.3.6 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied to paths outside allowed directories indicates sandbox-caused failure.

#### 1.3.7 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing evidence indicators of sandbox-caused failures.

#### 1.3.8 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox-caused failure.

#### 1.3.9 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "Operation not permitted" errors as evidence of sandbox restrictions on file and network operations.

#### 1.3.10 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Recognizes Unix socket connection errors as indicators of sandbox restrictions.

#### 1.3.11 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

#### 1.3.12 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with visible evidence of sandbox restrictions, distinguishing sandbox-caused failures from other error types.

#### 1.3.13 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provides the header phrase for Claude's response when encountering sandbox-caused failures.

#### 1.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with `dangerouslyDisableSandbox: true` upon sandbox failure without asking the user first.

#### 1.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode, never `/tmp` directly.

#### 1.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

---

## 2. File, Code, and Quality Operations

Tools and standards for reading, writing, searching, and improving code — from file system access patterns to engineering best practices and automated verification.

### 2.1 File Access and Navigation

Specialized tools for reading, writing, editing, and searching files, plus handling edge cases like truncation and empty files.

#### 2.1.1 File System Tools: Read, Write, Edit, Search

Specialized file tools replace bash equivalents for superior experience: ReadFile handles multimodal content including images and notebooks; Write creates files; Edit performs exact string replacements; Glob and Grep enable fast pattern-based file and content discovery. Use these tools directly for targeted codebase searches and file operations.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs, Jupyter notebooks, and configurable line ranges for efficient content access.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, preferring the Edit tool for modifications and avoiding creation of documentation unless explicitly requested.

##### 2.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with strict matching requirements, preferring edits to existing files over creating new ones and supporting bulk replacement via `replace_all`.

##### 2.1.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob syntax to find files by name patterns, returning results sorted by modification time.

##### 2.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based content search supporting regex patterns, file filtering, and multiple output modes for locating code and text across repositories.

##### 2.1.1.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing contents, inserting new cells, or deleting existing cells in .ipynb files.

##### 2.1.1.7 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Use Glob/Grep tools directly for simple, targeted codebase searches like finding specific files, classes, or functions.

#### 2.1.2 File State Warnings and Edge Cases

Handles boundary conditions and limitations when accessing file content, including truncation, empty files, offset errors, and resource format constraints. Ensures graceful degradation and provides recovery paths without disrupting workflow.

##### 2.1.2.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warning that a file exists but contains no content.

##### 2.1.2.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

A large file was truncated to the first N lines; use the Read tool to access additional content without notifying the user.

##### 2.1.2.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warning that the requested file read offset exceeds the file's actual length.

##### 2.1.2.4 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no displayable content.

##### 2.1.2.5 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it cannot be displayed in a readable format.

#### 2.1.3 Codebase Exploration and Navigation

Read-only codebase search and analysis using glob patterns, grep, and Language Server Protocol for code intelligence. Orchestrates large-scale parallel changes by decomposing work into independent units, spawning isolated worker agents, and consolidating results across distributed worktrees.

##### 2.1.3.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

File search specialist for Claude Code that rapidly navigates codebases using glob patterns, grep, and file reading in strict read-only mode. Spawns parallel tool calls for efficiency and returns absolute file paths without creating or modifying files.

##### 2.1.3.2 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines strengths and behavioral guidelines for the Explore subagent, emphasizing read-only codebase search, multi-file analysis, and thoroughness while prohibiting file creation and documentation generation unless explicitly requested.

##### 2.1.3.3 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interacts with Language Server Protocol servers to provide code intelligence features including definitions, references, hover information, and call hierarchies.

##### 2.1.3.4 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining end-to-end test recipes, and spawning background worker agents in isolated git worktrees. Tracks progress and consolidates results into a final status table.

### 2.2 Code Standards and Validation

Engineering best practices emphasizing simplicity and scope discipline, adversarial verification frameworks, and automated code review with refactoring analysis.

#### 2.2.1 Code Quality and Engineering Best Practices

Establishes disciplined coding standards that prioritize simplicity, security, and focused scope. Emphasizes avoiding premature abstractions, unnecessary error handling, and feature creep while maintaining clean code through dead-code removal and comprehensive understanding before modification.

##### 2.2.1.1 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Instructs Claude to avoid over-engineering by making only directly requested or clearly necessary changes while keeping solutions simple and focused.

##### 2.2.1.2 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directs Claude not to create helpers, utilities, or abstractions for one-time operations or hypothetical requirements, keeping complexity minimal for current needs.

##### 2.2.1.3 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims, renamed variables, or re-exports.

##### 2.2.1.4 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs Claude not to add error handling for impossible scenarios, trusting internal code and framework guarantees while validating only at system boundaries.

##### 2.2.1.5 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Instructs Claude not to add features, refactor, improve, or add documentation beyond what was requested, only adding comments where logic isn't self-evident.

##### 2.2.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat and build on existing work more effectively.

##### 2.2.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Instructs Claude to read and understand existing code before proposing modifications.

##### 2.2.1.8 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Directs Claude to avoid introducing security vulnerabilities such as command injection, XSS, and SQL injection, prioritizing safe and secure code.

##### 2.2.1.9 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks including bug fixes, feature additions, and refactoring, instructing Claude to interpret unclear instructions in that context.

##### 2.2.1.10 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid giving time estimates or predictions for task duration, focusing on what needs to be done instead.

#### 2.2.2 Verification and Testing

Adversarial verification framework that validates implementations through builds, test suites, linters, and edge-case probes (concurrency, boundaries, idempotency). Generates deterministic test plans, executes verifier skills, and issues structured PASS/FAIL verdicts with required command output.

##### 2.2.2.1 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering verifier skills, analyzing changes, generating deterministic plans, and triggering verifiers with detailed failure reporting.

##### 2.2.2.2 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive onboarding for creating verifier skills for the Verify agent, including auto-detection of project structure, setup of browser/CLI/API verification tools, interactive Q&A, and skill generation with allowed-tools configuration.

##### 2.2.2.3 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial verification agent that tests implementations by running builds, test suites, linters, and adversarial probes (concurrency, boundary values, idempotency) to issue PASS/FAIL/PARTIAL verdicts, with required command output for every check and prohibition on project file modifications.

##### 2.2.2.4 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks for Claude Code, including dedup checks, command construction, pipe-testing, JSON validation, and live proof of execution.

#### 2.2.3 Code Review and Refactoring Skills

Automated code review and cleanup that analyzes pull requests for quality, style, correctness, and performance, then identifies redundant patterns and inefficiencies. Integrates with GitHub APIs to fetch diffs and comments, providing structured feedback with specific improvement suggestions.

##### 2.2.3.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel review agents (reuse, quality, efficiency) to identify and fix redundant code, hacky patterns, and inefficiencies.

##### 2.2.3.2 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Expert code reviewer that fetches PR details and diffs via GitHub CLI, analyzes changes for quality, style, correctness, performance, test coverage, and security, then provides concise, structured feedback with specific improvement suggestions.

##### 2.2.3.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments by querying PR-level and review comments via GitHub API, parsing diff hunks and line context, and formatting threads with file paths and quoted text.

##### 2.2.3.4 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

After implementing a change, simplify code using the simplify skill, run unit tests, execute e2e tests per coordinator guidance, commit and push with a PR, and report the PR URL or reason for failure.

---

## 3. Agent Orchestration and Planning

Frameworks for coordinating multi-agent teams, delegating work to subagents, structuring planning phases, and managing task lists across complex autonomous workflows.

### 3.1 Multi-Agent Coordination

Infrastructure for swarm teams with shared task lists, inter-agent messaging protocols, and subagent delegation with context inheritance.

#### 3.1.1 Multi-Agent Teams and Swarm Coordination

Infrastructure for creating and managing coordinated multi-agent teams with shared task lists, automatic message delivery, and idle state management. Agents communicate through structured messaging protocols supporting direct messages, broadcasts, and workflow signals (shutdown, plan approval), while maintaining shared memory and team identity.

##### 3.1.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages agent teams and swarms, enabling creation of coordinated multi-agent projects with shared task lists, automatic message delivery, and idle state management.

##### 3.1.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all active members to be terminated first.

##### 3.1.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables agent-to-agent communication within teams, supporting plain text messages, broadcasts, and structured protocol messages for shutdown and plan approval workflows.

##### 3.1.1.4 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends user-visible messages with markdown support and file attachments, using status labels to indicate whether the message is a direct reply or proactive notification.

##### 3.1.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and messaging protocols. Instructs it to read team config, check task lists, and communicate with teammates by name.

##### 3.1.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before returning a response in non-interactive mode.

##### 3.1.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool for teammate communication, with individual messaging and team-wide broadcasts, since text responses are not visible to other agents.

##### 3.1.1.8 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and type description for injection into conversation context.

#### 3.1.2 Subagent Launching and Delegation

Mechanisms for delegating complex tasks to specialized subagents that execute autonomously in isolated worktrees while preserving context. Covers when to launch subagents for parallelization or deep research, how to write effective delegation prompts accounting for context inheritance, and patterns for coordinating async execution without fabricating results.

##### 3.1.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guide for the Agent tool covering subagent launching, concurrent execution, background tasks, resumption, worktree isolation, and context preservation. Emphasizes providing clear task descriptions and trusting agent outputs.

##### 3.1.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool for launching specialized subagent subprocesses to autonomously handle complex multi-step tasks, with available agent types and capabilities.

##### 3.1.2.3 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use the Task tool to delegate work to specialized subagents for parallelizing independent queries or protecting context, but avoid excessive use and duplicate work already performed by subagents.

##### 3.1.2.4 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Recommends using Task tool with exploration subagent for broader codebase exploration and deep research when simple searches prove insufficient or exceed query limits.

##### 3.1.2.5 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

When delegating to subagents, tailor prompts based on context inheritance: context-inheriting agents need directives and scope clarification, while fresh subagents need background explanation and judgment context. Never delegate understanding; include specific details like file paths and line numbers.

##### 3.1.2.6 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Demonstrates how coordinator agents delegate tasks to subagents using the agent tool, handle waiting states without fabricating results, and report findings from independent agents.

##### 3.1.2.7 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Provides guidelines for forking subagents for research and implementation work, prohibiting reading fork output mid-flight or fabricating results, and requiring trust in completion notifications.

##### 3.1.2.8 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

User has requested invocation of a specific agent; invoke it with required context.

### 3.2 Planning, Tasks, and Agent Specification

Structured planning workflows with read-only exploration phases, task breakdown with state tracking, and agent persona design for autonomous deployment.

#### 3.2.1 Planning Mode: Workflow and Constraints

A structured planning phase that transitions Claude into read-only exploration mode to design implementation strategies before coding. The workflow enforces constraints on edits (plan file only), enables iterative pair-planning with users, and defines phase-based or continuous discovery cycles that converge when requirements are fully addressed. Plan mode supports multiple variants: five-phase workflows with parallel agents, iterative exploration-update-ask cycles, and simplified subagent constraints.

##### 3.2.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore codebase and design implementation approaches for user approval before coding, recommended for non-trivial tasks involving multiple valid approaches, architectural decisions, or multi-file changes.

##### 3.2.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of implementation planning and requests user approval to proceed, used only for code-writing tasks that require structured planning phases.

##### 3.2.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode constraints and defines a five-phase workflow: initial understanding with parallel exploration agents, design with planning agents, review, phase four execution, and plan mode exit. Prohibits all edits except to the plan file and requires read-only operations during planning.

##### 3.2.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning with the user through explore-update-ask cycles, allowing only plan file edits and read-only operations. Emphasizes incremental discovery, user engagement on ambiguous decisions, and convergence when all requirements are addressed.

##### 3.2.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode constraints for subagents: prohibits all edits except to the plan file, allows only read-only operations, and instructs the agent to answer queries comprehensively while asking clarifying questions.

##### 3.2.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude when re-entering plan mode to read the existing plan, evaluate the current request against it, and decide whether to continue or start fresh before editing the plan file.

##### 3.2.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Plan mode has been exited; you can now make edits, run tools, and take actions, with the plan file available for reference if needed.

##### 3.2.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 3.2.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 3.2.1.10 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes the plan file with file paths, changes, function references, and a single verification command, with a hard 40-line limit.

##### 3.2.1.11 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent that explores codebases in read-only mode to design implementation plans by understanding requirements, identifying patterns, tracing code paths, and detailing step-by-step strategies with critical files and architectural trade-offs.

#### 3.2.2 Task and Todo Management

Tools and reminders for breaking down complex work into structured task lists with state tracking (pending, in-progress, completed) and real-time progress updates. Enables users and teams to monitor advancement, coordinate multi-step work, and maintain visibility into task completion throughout coding sessions.

##### 3.2.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with state tracking (pending, in_progress, completed) and real-time progress updates.

##### 3.2.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists to organize complex multi-step work, track progress, and coordinate with teammates in team workflows.

##### 3.2.2.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from the shared task list, prioritizing by ID order.

##### 3.2.2.4 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use the TodoWrite tool for task tracking and to clean up stale todo lists when relevant.

##### 3.2.2.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task tracking tools for progress management, with instructions to create tasks, update status, and clean up stale entries when relevant.

##### 3.2.2.6 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

##### 3.2.2.7 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Use TodoWrite to break down work into tasks, track progress, and mark tasks complete immediately upon finishing to help users monitor advancement.

#### 3.2.3 Agent Specification and Execution

Design and deployment of autonomous AI agents through systematic requirement extraction, persona development, and comprehensive operational specifications. Includes execution frameworks for direct task completion with structured result reporting.

##### 3.2.3.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design custom AI agents by extracting user requirements, creating expert personas, architecting comprehensive system prompts with behavioral boundaries and quality controls, and generating concise identifiers. Outputs a JSON specification with identifier, usage conditions, and complete operational manual for autonomous expert agents.

##### 3.2.3.2 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word agent action summaries in present tense, naming files/functions rather than branches.

##### 3.2.3.3 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Forked worker sub-agent that executes directives directly without spawning further sub-agents, using tools silently and reporting structured results (scope, findings, files changed, issues) under 500 words.

---

## 4. Session, Memory, and Context Management

Systems for preserving knowledge and state across conversations — persistent memory files, context compaction, session tracking, and resource budget monitoring.

### 4.1 Memory and Knowledge Persistence

Persistent memory files that store user preferences and codebase context, with consolidation processes that merge updates and prune stale facts.

#### 4.1.1 Memory and Persistent Context

Systems for building institutional knowledge across conversations through persistent memory files that store user preferences, work guidance, codebase context, and session state. Includes memory consolidation processes that merge updates, prune stale facts, and maintain indexed topic files, plus mechanisms for selecting relevant memory to inject into conversation context.

##### 4.1.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, providing Claude with persistent context from previous interactions.

##### 4.1.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

##### 4.1.1.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

##### 4.1.1.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines memory descriptions as containing user role, goals, responsibilities, and knowledge to tailor behavior and build understanding of the user while avoiding negative judgements or irrelevant information.

##### 4.1.1.5 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type that stores guidance on work approaches from both successes and failures, with checks for contradictions against team memories before saving.

##### 4.1.1.6 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs reflective memory consolidation by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to stay under line limits. Converts relative dates to absolute and removes stale or contradicted facts.

##### 4.1.1.7 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options based on user query, excluding usage documentation for recently-used tools but including warnings and gotchas.

##### 4.1.1.8 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files documenting current state, task specification, files, workflow, errors, codebase context, learnings, and worklog.

##### 4.1.1.9 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations, preserving exact structure with section headers and italic descriptions while updating only content below them with detailed, info-dense details like file paths and function names.

#### 4.1.2 Context Compaction and Conversation Summarization

Structured approaches to preserving conversation state across context windows through analysis and summarization. Captures task progress, technical decisions, code patterns, and pending work to enable seamless session resumption without losing critical context.

##### 4.1.2.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries covering task overview, current state, important discoveries, next steps, and context to preserve, enabling efficient resumption in future context windows when conversation history is replaced.

##### 4.1.2.2 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

System prompt for analyzing full conversations before compaction, organizing thoughts chronologically and ensuring technical accuracy and completeness.

##### 4.1.2.3 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Instructs Claude to wrap analysis in tags as a private planning scratchpad before writing final summaries, noting what belongs in each section without including code snippets or verbatim quotes.

##### 4.1.2.4 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

Directs Claude to analyze recent messages chronologically within analysis tags, identifying user requests, technical decisions, code patterns, file names, function signatures, errors encountered, and user feedback to ensure complete coverage before writing final summaries.

##### 4.1.2.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing user requests, technical concepts, files examined, errors and fixes, problem-solving efforts, all user messages, pending tasks, current work, and next steps. Includes full code snippets and emphasizes recent context to enable seamless continuation.

##### 4.1.2.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes only the recent portion of a conversation (after retained earlier context) covering user requests, technical concepts, files examined, errors and fixes, problem-solving, all user messages, pending tasks, current work, and next steps with code snippets.

### 4.2 Session Tracking and Resource Awareness

Monitoring of file modifications, IDE actions, and session metadata across boundaries, plus real-time token and cost tracking against allocated budgets.

#### 4.2.1 Session and State Management

Tracks changes to working environment and user interactions across session boundaries. Monitors file modifications, IDE actions, diagnostic updates, and session metadata to maintain accurate state awareness and enable intelligent session discovery and organization.

##### 4.2.1.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and the working directory has been updated.

##### 4.2.1.2 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

A file was externally modified by the user or linter; account for these changes and do not revert unless requested, without notifying the user.

##### 4.2.1.3 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

User opened a file in the IDE; this may or may not relate to the current task.

##### 4.2.1.4 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude that the user selected specific lines in the IDE, providing file context and line numbers.

##### 4.2.1.5 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of new diagnostic issues detected in the codebase or IDE.

##### 4.2.1.6 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

A file was read before conversation summarization but is too large to include; use the Read tool to access it if needed.

##### 4.2.1.7 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Search assistant that finds relevant sessions by prioritizing exact tag matches, then partial tags, titles, branches, and transcript content with semantic matching, returning results ordered by relevance with inclusive matching to avoid missing sessions.

##### 4.2.1.8 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates a concise, sentence-case title (3-7 words) that captures the main topic or goal of a coding session for easy recognition in session lists.

#### 4.2.2 Resource and Budget Monitoring

Real-time tracking of token consumption and USD spending against allocated budgets.

##### 4.2.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 4.2.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including spent, total, and remaining amounts.

### 4.3 Usage Analytics and Workflow Intelligence

Analysis of Claude Code session data to surface usage patterns, identify friction points, and recommend workflow improvements. Extracts structured insights from transcripts and generates actionable suggestions for feature adoption and capability expansion.

#### 4.3.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a structured 4-part insights summary covering what's working, friction points, quick wins, and ambitious workflows for Claude Code users, using a coaching tone without numerical stats or category names.

#### 4.3.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with 3 categories and 2 examples each, providing constructive feedback on where users encounter problems.

#### 4.3.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future opportunities for autonomous AI-assisted development workflows, including parallel agents and test-driven iteration, with copyable prompts to try.

#### 4.3.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts including user goals, satisfaction signals, and friction types, with strict guidelines for counting only explicit user requests and signals.

#### 4.3.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions, feature recommendations from MCP Servers, Custom Skills, Hooks, Headless Mode, and Task Agents, prioritizing repeated user patterns and workflow improvements.

---

## 5. Claude Code Configuration and Developer Tooling

Operational settings, lifecycle hooks, skill definitions, Git workflows, and debugging tools that configure and extend Claude Code's behavior.

### 5.1 Hooks, Permissions, and Runtime Settings

Event-driven lifecycle hooks for injecting context and enforcing policies, plus configuration files and concurrency settings for execution control.

#### 5.1.1 Hook System: Lifecycle Events and Control Flow

Event-driven automation framework that intercepts Claude Code lifecycle events to inject context, enforce policies, and control execution flow. Supports conditional evaluation and blocking mechanisms to coordinate behavior across tool use, permissions, and agent completion.

##### 5.1.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines hooks configuration for Claude Code lifecycle events including PermissionRequest, PreToolUse, PostToolUse, and others, supporting command, prompt, and agent hook types with JSON input/output for controlling behavior and injecting context.

##### 5.1.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Additional context provided by a hook command.

##### 5.1.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

A blocking error occurred during hook command execution.

##### 5.1.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

A hook has stopped continuation with a specific message.

##### 5.1.1.5 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for messages indicating a hook has stopped continuation.

##### 5.1.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Success message from a hook command execution.

##### 5.1.1.7 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code and returns JSON indicating whether the condition is met or not met with a reason.

##### 5.1.1.8 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state to confirm whether an agent completed its assigned plan.

#### 5.1.2 Runtime Configuration and Execution Control

Management of Claude Code's operational settings and execution behavior through configuration files, dedicated working directories, and concurrency policies. Enables customization of hooks, permissions, and environment variables while optimizing task execution through parallel processing when dependencies allow.

##### 5.1.2.1 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json), including hooks, permissions, and environment variables, with emphasis on reading before writing and merging arrays.

##### 5.1.2.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, supporting intermediate results, scripts, and working files.

##### 5.1.2.3 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Enables parallel tool calls for independent operations to maximize efficiency, while enforcing sequential execution when dependencies exist between calls.

### 5.2 Skills, Git, and Diagnostics

Reusable slash-command skills for repeatable workflows, safe Git operations with worktree support, and diagnostic tools for debugging session issues.

#### 5.2.1 Skills: Creation, Invocation, and Management

Framework for defining, invoking, and reusing specialized capabilities through slash commands and skill definitions. Converts repeatable workflows into reusable skills via structured interviews, generating SKILL.md files with execution modes and guidelines that persist across sessions.

##### 5.2.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills within conversations, invoked by slash commands or user requests, with blocking requirement to call the tool before generating other responses.

##### 5.2.1.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Slash commands like /commit invoke user-invocable skills via the Skill tool; only use the Skill tool for skills listed in its user-invocable section, not for guessing or built-in CLI commands.

##### 5.2.1.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Notifies Claude of skills invoked in the current session and instructs it to continue following their guidelines.

##### 5.2.1.4 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks, including codebase exploration, user interviews, iterative proposal refinement, and configuration of format-on-edit hooks and custom skills.

##### 5.2.1.5 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts a session into a reusable skill through multi-round interviews, analyzing repeatable processes, inputs, steps, success criteria, and user corrections, then generating a SKILL.md file with frontmatter, step annotations, and execution modes.

#### 5.2.2 Git Operations and Version Control

Git workflows prioritize safety: never skip hooks or force-push without explicit user request, prefer new commits over amends, and investigate hook failures rather than bypassing them. Worktrees enable isolated branch work; automated commit and PR creation enforce safety protocols including staged-change analysis and attribution. Session titles and branch names follow naming conventions for clarity.

##### 5.2.2.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Consider safer alternatives to destructive git operations like reset --hard, push --force, and checkout -- before executing them.

##### 5.2.2.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, commit message drafting, and PR creation with gh commands. Emphasizes never committing without user request, avoiding destructive operations, and creating new commits rather than amending.

##### 5.2.2.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Never skip hooks or bypass signing unless the user explicitly requests it; investigate and fix underlying issues when hooks fail.

##### 5.2.2.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Prefer creating new commits over amending existing ones.

##### 5.2.2.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it when explicitly requested, supporting both git repositories and VCS-agnostic workflows via hooks.

##### 5.2.2.6 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree, restoring the original working directory and clearing session caches, with options to keep or remove the worktree.

##### 5.2.2.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository conventions, and executing the commit using heredoc syntax. Enforces safety protocols: no amends, no hook skipping, no secret files, and no empty commits.

##### 5.2.2.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Streamlined PR creation by analyzing all changes, creating a feature branch, committing with attribution, pushing to origin, and creating or updating a PR with title and body via GitHub CLI. Enforces git safety protocols and returns the PR URL.

##### 5.2.2.9 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, lowercase with dashes, prefixed with 'claude/') from session descriptions.

##### 5.2.2.10 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status at conversation start including branch, main branch reference, status, and recent commits as a snapshot that does not update during the session.

#### 5.2.3 Debugging and Diagnostics

Tools and techniques for identifying and resolving issues in Claude Code sessions, from log analysis and error identification to process monitoring and performance diagnostics.

##### 5.2.3.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 5.2.3.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, checking CPU/memory/state, and posting diagnostic reports to Slack.

##### 5.2.3.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or flagged commands to clarify intent.

#### 5.2.4 Utility Tools: Sleep and Dynamic Tool Discovery

Foundational execution utilities including timed pauses with interrupt capability and dynamic schema fetching for deferred tool invocation.

##### 5.2.4.1 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with user interrupt capability, preferred over bash sleep for avoiding shell process overhead.

##### 5.2.4.2 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by matching queries against tool names and keywords, enabling dynamic tool invocation after schema retrieval.

---

## 6. External Tools, Automation, and User Interaction

Integrations with browsers, web search, schedulers, and security monitors, plus guidelines for task execution behavior, communication style, and interactive user engagement.

### 6.1 Web, Browser, and Scheduling Automation

Programmatic Chrome browser control, web search with source attribution, and cron-based scheduling for one-shot and recurring tasks.

#### 6.1.1 Browser Automation and Computer Control

Provides tools and guidelines for programmatic Chrome browser interaction including mouse, keyboard, and screenshot capabilities. Covers GIF recording, console debugging with pattern filtering, dialog handling, and tab management to enable reliable web automation.

##### 6.1.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Enables mouse and keyboard interaction with a Chrome browser and screenshot capture, requiring tab ID validation and precise cursor positioning on UI elements.

##### 6.1.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines browser automation actions including clicks, typing, scrolling, keyboard input, and element inspection for Chrome-based interaction.

##### 6.1.1.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with smooth playback, console debugging with pattern filtering, avoiding JavaScript dialogs that block commands, preventing rabbit holes, and managing tab context by checking current tabs before creating new ones.

##### 6.1.1.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use by selecting the specific tool name before calling it.

#### 6.1.2 Web Search and Content Fetching

Enables retrieval and analysis of current web information beyond knowledge cutoff through search and content fetching. Requires mandatory source attribution and enforces quote limits for untrusted domains to maintain accuracy and transparency.

##### 6.1.2.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff, requiring mandatory source attribution in responses with markdown hyperlinks.

##### 6.1.2.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content from URLs by converting HTML to markdown and processing with AI, supporting caching and redirect handling.

##### 6.1.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model with concise responses, enforcing 125-character quote limits for untrusted domains and using quotation marks for exact language.

#### 6.1.3 Scheduling and Cron Jobs

Cron-based task scheduling with support for one-shot and recurring jobs, timezone handling, and load distribution. Integrates with slash commands and remote Claude Code agents via Anthropic's cloud API, enforcing minimum intervals and converting user timezones to UTC.

##### 6.1.3.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron-based jobs using standard 5-field cron syntax in user's local timezone, with guidance on avoiding :00/:30 minute marks for load distribution and automatic expiration after a configurable timeframe.

##### 6.1.3.2 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts interval to cron expression, schedules recurring task, and immediately executes the prompt.

##### 6.1.3.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via Anthropic cloud API. Supports creating, updating, listing, and running triggers with cron expressions, MCP connectors, environment selection, and git repository configuration. Converts user timezones to UTC and enforces minimum 1-hour intervals.

### 6.2 Execution Behavior and Communication

Governs autonomous task execution with risk assessment and reversibility checks, standardizes concise user messaging, and enforces security threat monitoring.

#### 6.2.1 Task Execution Behavior and User Interaction

Governs how Claude approaches task execution, balancing autonomous action with user safety. Enables ambitious work while requiring careful risk assessment for destructive operations, using alternative approaches when blocked, and maintaining clear communication through structured permission modes.

##### 6.2.1.1 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Directs Claude to consider alternative approaches when blocked instead of brute-forcing, using AskUserQuestion tool to align on the right path forward.

##### 6.2.1.2 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Authorizes Claude to complete ambitious tasks that would otherwise be too complex or time-consuming, deferring to user judgment on scope.

##### 6.2.1.3 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

##### 6.2.1.4 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to carefully consider reversibility and blast radius of actions, freely taking local reversible actions but confirming risky operations like deletions, force-pushes, and external posts before proceeding unless explicitly authorized.

##### 6.2.1.5 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate implementation, minimal interruptions, preference for action over planning, and reasonable decision-making while prohibiting posting to public services without explicit user approval.

##### 6.2.1.6 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Describes tool execution under permission modes, handling of denied tool calls, and use of AskUserQuestion when tool denial reasons are unclear.

##### 6.2.1.7 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Permits reasonable alternative approaches to denied tool calls but prohibits malicious workarounds, requiring Claude to stop and explain if the capability is essential.

#### 6.2.2 Output Style and Communication Guidelines

Standardizes how Claude communicates with users through concise, direct messaging routed via SendUserMessage. Emphasizes actionable information over filler, precise code references with line numbers, and context-aware formatting that adapts between background and foreground agent modes.

##### 6.2.2.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler and preamble, and focusing text output on decisions, status updates, and blockers.

##### 6.2.2.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs responses to be short and concise.

##### 6.2.2.3 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number pattern when referencing specific functions or code for easy user navigation.

##### 6.2.2.4 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to route all user-facing replies through SendUserMessage, acknowledge work before executing, and keep messages tight with actionable information rather than filler updates.

##### 6.2.2.5 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering absolute paths, response formatting, emoji avoidance, and tool call punctuation.

##### 6.2.2.6 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and to follow its guidelines.

##### 6.2.2.7 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise sub-agent reporting (for background agents) and detailed standalone writeups (for foreground agents) based on caller context.

#### 6.2.3 Security Review and Threat Monitoring

Multi-layered security analysis for code vulnerabilities and autonomous agent actions. Combines vulnerability assessment with threat modeling to detect prompt injection, scope creep, credential leakage, and malicious code while maintaining authorization context for legitimate security testing.

##### 6.2.3.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review agent that analyzes code diffs for exploitable vulnerabilities with high confidence thresholds, using three-phase methodology (repository context, comparative analysis, vulnerability assessment) and strict false-positive filtering to identify only HIGH and MEDIUM severity issues with clear exploitation paths.

##### 6.2.3.2 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor that evaluates autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage. Defines threat model, default allow policy, user intent rules distinguishing explicit requests from scope escalation, and evaluation principles for composite actions, file execution, and sub-agent delegation.

##### 6.2.3.3 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, 20+ block rules (git destructive, code from external, production deploy, credential leakage, data exfiltration, etc.) and 6 allow exceptions (test artifacts, local operations, read-only, declared dependencies, toolchain bootstrap, standard credentials). Enforces security policies for shared infrastructure, credential handling, and external integrations.

##### 6.2.3.4 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands to enforce safety policies. Extracts the executable prefix (e.g., 'git commit', 'npm test') or returns 'command_injection_detected' if the command contains unsafe chaining, substitution, or injection patterns.

##### 6.2.3.5 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, while permitting analysis, reporting, and behavior documentation.

##### 6.2.3.6 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing requests for destructive techniques, DoS attacks, supply chain compromise, and detection evasion for malicious purposes.

### 6.3 User Clarification and Collaborative Learning

Interactive tools for gathering structured user input during execution, plus collaborative workflows that engage users in design decisions with contextual education.

#### 6.3.1 User Interaction Tools: Questions and Clarification

Interactive mechanisms for gathering user input during execution, from structured single-select questions with visual previews to lightweight side questions that answer directly from context without invoking tools.

##### 6.3.1.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Use AskUserQuestion to gather user preferences, clarify ambiguous instructions, and get decisions on implementation choices during execution. In plan mode, use it to clarify requirements before finalizing the plan, not to ask for plan approval.

##### 6.3.1.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Use the optional preview field on single-select question options to display self-contained HTML fragments like UI mockups, code snippets, and diagrams for visual comparison.

##### 6.3.1.3 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

A lightweight side question spawned as a separate agent instance with no tools available; answer directly from conversation context without promising actions or investigations.

#### 6.3.2 Interactive Learning and Decision Support

Collaborative workflows that engage users in design decisions and code contributions while providing contextual education. Includes predictive guidance for next steps, side-by-side option previewing, and pedagogical insights tied to implementation choices.

##### 6.3.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions for design decisions and business logic in code generation, using TodoList tracking and Learn by Doing requests with specific guidance and trade-offs.

##### 6.3.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing in learning mode, focusing on implementation choices specific to the codebase rather than general programming concepts.

##### 6.3.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using monospace markdown, supporting ASCII mockups, code snippets, diagrams, and configuration examples for visual comparison.

##### 6.3.2.4 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent context, avoiding evaluative language, questions, or Claude-voice suggestions. Returns only specific, concise suggestions or silence if the next step is unclear.

---

## 7. API References, SDKs, and Documentation

Comprehensive SDK documentation across languages, agent SDK patterns, model metadata, and intelligent documentation agents for navigating Claude's capabilities.

### 7.1 Claude API SDK References

Language-specific API documentation covering Python, TypeScript, C#, Go, Java, PHP, Ruby, and raw HTTP for streaming, tool use, vision, and batch processing.

#### 7.1.1 Claude API SDK References: Core Languages

Comprehensive API documentation for Python and TypeScript covering client initialization, streaming, vision, prompt caching, extended thinking, tool use, file handling, and batch processing with language-specific patterns and best practices.

##### 7.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, system prompts, vision (base64 and URL), prompt caching (automatic and manual), extended thinking (adaptive), error handling, multi-turn conversations, compaction, stop reasons, and cost optimization.

##### 7.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, system prompts, vision (URL and base64), prompt caching (automatic and manual), extended thinking (adaptive), error handling, multi-turn conversations, compaction, stop reasons, and cost optimization.

##### 7.1.1.3 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference with sync/async examples, handling text/thinking/tool-use content types, progress tracking, error handling, and best practices for token management.

##### 7.1.1.4 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, content type handling, tool runner integration, final message retrieval, and SSE format with best practices for UI buffering.

##### 7.1.1.5 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner with decorators, MCP conversion helpers, manual agentic loops, code execution with file uploads, memory tool, and structured outputs with Pydantic.

##### 7.1.1.6 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, server-side tools, code execution with file handling, memory tool, and structured outputs.

##### 7.1.1.7 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices.

##### 7.1.1.8 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files, using them in messages (PDFs, images), managing files (list, retrieve metadata, delete, download), with end-to-end example of uploading once and querying multiple times.

##### 7.1.1.9 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages (PDFs, images), and managing files (list, delete, download).

##### 7.1.1.10 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference covering batch creation, status polling, result retrieval, and container reuse. Processes up to 100K requests asynchronously at 50% cost with support for all Messages API features.

#### 7.1.2 Claude API SDK References: Additional Languages and HTTP

API documentation for C#, Go, Java, PHP, Ruby, and raw HTTP (cURL) covering client initialization, streaming, tool use, extended thinking, and platform-specific integrations like Bedrock and Vertex AI.

##### 7.1.2.1 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking (adaptive and deprecated fixed-budget), tool use with manual loops, effort parameter, prompt caching, token counting, structured output, PDF input, server-side tools, and beta context editing.

##### 7.1.2.2 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use via BetaToolRunner and manual loops, thinking, server-side tools, PDF input, Files API, and context editing with beta support.

##### 7.1.2.3 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking (adaptive), tool use via BetaToolRunner and annotated classes, memory tool, effort parameter, prompt caching, structured output, PDF input, server-side tools, and Files API.

##### 7.1.2.4 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization for Anthropic, Bedrock, Vertex AI, and Foundry, basic requests, streaming, tool use manual loops, extended thinking (adaptive), and beta server-side tools.

##### 7.1.2.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, and beta tool runner for automatic tool execution with annotated classes.

##### 7.1.2.6 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL with examples for basic requests, streaming, tool use, and extended thinking, including jq-based JSON parsing patterns.

### 7.2 Agent SDK, Model Metadata, and Guidance

Agent SDK patterns with MCP integration and session management, model catalogs with pricing and error codes, project documentation generation, and a documentation assistant.

#### 7.2.1 Agent SDK References and Patterns

Language-specific Agent SDK documentation and practical patterns for building agentic applications with Claude. Covers API references, tool integration via MCP, session management, hooks, subagents, and permission models with code examples across Python and TypeScript.

##### 7.2.1.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP support, hooks, subagents, error handling, session history, and best practices.

##### 7.2.1.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference covering installation, query interface, built-in tools, permission modes, MCP support, hooks, subagents, session history, and best practices.

##### 7.2.1.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, session resumption, history retrieval, and custom system prompts with practical code examples.

##### 7.2.1.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks, subagents, MCP server integration, and session resumption with practical code examples.

##### 7.2.1.5 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM-powered applications with Claude, including language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, and reading guide for language-specific documentation.

##### 7.2.1.6 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, directing users to appropriate sections based on their use case.

#### 7.2.2 Claude Model and API Metadata

Authoritative metadata for Claude models and API operations, including model catalogs with pricing and context windows, HTTP error codes with recovery strategies, live documentation sources, and GitHub integration templates for Claude Code workflows.

##### 7.2.2.1 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of Claude models with exact IDs, context windows, max output tokens, and pricing, including current models (Opus 4.6, Sonnet 4.6, Haiku 4.5), legacy models, and deprecated/retired models with programmatic discovery via Models API.

##### 7.2.2.2 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400–529) with causes, fixes, and SDK exception handling. Covers validation errors, rate limiting, authentication, and retry strategies with language-specific typed exception examples.

##### 7.2.2.3 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, including models, features, tools, and SDK repositories for dynamic content updates.

##### 7.2.2.4 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining what Claude Code is, how it works, security considerations, and setup instructions.

##### 7.2.2.5 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code via @claude mentions in issues, pull requests, and reviews, with optional custom prompts and claude_args for behavior customization.

#### 7.2.3 Project Documentation and Setup

Automated creation and maintenance of project documentation that captures architecture, development workflows, and codebase conventions. Includes generation of CLAUDE.md files from codebase analysis, in-place updates to existing documentation with new learnings, and configuration of terminal status displays.

##### 7.2.3.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation files by documenting common build/test/lint commands, high-level architecture, and project-specific conventions. Avoids generic practices and incorporates relevant rules from .cursor/ or .github/ directories.

##### 7.2.3.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Updates Magic Doc files with new learnings by preserving headers and structure while replacing outdated information in-place, focusing on architecture, entry points, and non-obvious patterns rather than exhaustive implementation details.

##### 7.2.3.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by converting shell PS1 configurations to status line commands, handling escape sequences and ANSI colors, updating ~/.claude/settings.json with command-based or script-based status line output.

#### 7.2.4 Claude Guide and Documentation Agent

Intelligent assistant that helps users navigate Claude Code, Agent SDK, and Claude API by retrieving official documentation, identifying relevant topics, and providing actionable guidance with examples.

##### 7.2.4.1 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with code examples and documentation links. Covers installation, configuration, hooks, skills, MCP servers, agent building, and API integration.
