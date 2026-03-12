# Claude Code System Prompts Index

A technical reference for building, deploying, and operating Claude-powered coding agents — covering everything from low-level tool use and secure execution to multi-agent orchestration, long-running automation, and production integration across languages and platforms.

## Table of Contents

1. [File and Bash Operations](#1-file-and-bash-operations)
   1. [Filesystem Tools and Access](#11-filesystem-tools-and-access)
      1. [File System Tools: Read, Write, Edit, Glob, Grep](#111-file-system-tools-read-write-edit-glob-grep)
         1. [ReadFile (Tool Description)](#1111-readfile-tool-description)
         2. [Write (Tool Description)](#1112-write-tool-description)
         3. [Edit (Tool Description)](#1113-edit-tool-description)
         4. [Glob (Tool Description)](#1114-glob-tool-description)
         5. [Grep (Tool Description)](#1115-grep-tool-description)
      2. [Dedicated Tools for File Operations](#112-dedicated-tools-for-file-operations)
         1. [Bash (alternative — edit files) [Tool Description]](#1121-bash-alternative-—-edit-files-tool-description)
         2. [Bash (alternative — file search) [Tool Description]](#1122-bash-alternative-—-file-search-tool-description)
         3. [Bash (alternative — read files) [Tool Description]](#1123-bash-alternative-—-read-files-tool-description)
         4. [Bash (alternative — write files) [Tool Description]](#1124-bash-alternative-—-write-files-tool-description)
         5. [Bash (built-in tools note) [Tool Description]](#1125-bash-built-in-tools-note-tool-description)
         6. [Bash (prefer dedicated tools) [Tool Description]](#1126-bash-prefer-dedicated-tools-tool-description)
         7. [Bash (alternative — communication) [Tool Description]](#1127-bash-alternative-—-communication-tool-description)
         8. [Bash (alternative — content search) [Tool Description]](#1128-bash-alternative-—-content-search-tool-description)
         9. [Tool usage (create files) [System Prompt]](#1129-tool-usage-create-files-system-prompt)
         10. [Tool usage (edit files) [System Prompt]](#11210-tool-usage-edit-files-system-prompt)
         11. [Tool usage (read files) [System Prompt]](#11211-tool-usage-read-files-system-prompt)
         12. [Tool usage (search content) [System Prompt]](#11212-tool-usage-search-content-system-prompt)
         13. [Tool usage (search files) [System Prompt]](#11213-tool-usage-search-files-system-prompt)
         14. [Tool usage (reserve Bash) [System Prompt]](#11214-tool-usage-reserve-bash-system-prompt)
   2. [Bash Execution Rules and Safety](#12-bash-execution-rules-and-safety)
      1. [Bash Command Execution & Formatting](#121-bash-command-execution-formatting)
         1. [Bash (command description) [Tool Description]](#1211-bash-command-description-tool-description)
         2. [Bash (no newlines) [Tool Description]](#1212-bash-no-newlines-tool-description)
         3. [Bash (overview) [Tool Description]](#1213-bash-overview-tool-description)
         4. [Bash (parallel commands) [Tool Description]](#1214-bash-parallel-commands-tool-description)
         5. [Bash (quote file paths) [Tool Description]](#1215-bash-quote-file-paths-tool-description)
         6. [Bash (maintain cwd) [Tool Description]](#1216-bash-maintain-cwd-tool-description)
         7. [Bash (semicolon usage) [Tool Description]](#1217-bash-semicolon-usage-tool-description)
         8. [Bash (sequential commands) [Tool Description]](#1218-bash-sequential-commands-tool-description)
         9. [Bash (timeout) [Tool Description]](#1219-bash-timeout-tool-description)
         10. [Bash (verify parent directory) [Tool Description]](#12110-bash-verify-parent-directory-tool-description)
         11. [Bash (working directory) [Tool Description]](#12111-bash-working-directory-tool-description)
         12. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#12112-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      2. [Sandbox Security & Access Control](#122-sandbox-security-access-control)
         1. [Bash (sandbox — adjust settings) [Tool Description]](#1221-bash-sandbox-—-adjust-settings-tool-description)
         2. [Bash (sandbox — default to sandbox) [Tool Description]](#1222-bash-sandbox-—-default-to-sandbox-tool-description)
         3. [Bash (sandbox — evidence: access denied) [Tool Description]](#1223-bash-sandbox-—-evidence-access-denied-tool-description)
         4. [Bash (sandbox — evidence list header) [Tool Description]](#1224-bash-sandbox-—-evidence-list-header-tool-description)
         5. [Bash (sandbox — evidence: network failures) [Tool Description]](#1225-bash-sandbox-—-evidence-network-failures-tool-description)
         6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1226-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
         7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1227-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
         8. [Bash (sandbox — explain restriction) [Tool Description]](#1228-bash-sandbox-—-explain-restriction-tool-description)
         9. [Bash (sandbox — failure evidence condition) [Tool Description]](#1229-bash-sandbox-—-failure-evidence-condition-tool-description)
         10. [Bash (sandbox — mandatory mode) [Tool Description]](#12210-bash-sandbox-—-mandatory-mode-tool-description)
         11. [Bash (sandbox — no exceptions) [Tool Description]](#12211-bash-sandbox-—-no-exceptions-tool-description)
         12. [Bash (sandbox — no sensitive paths) [Tool Description]](#12212-bash-sandbox-—-no-sensitive-paths-tool-description)
         13. [Bash (sandbox — per-command) [Tool Description]](#12213-bash-sandbox-—-per-command-tool-description)
         14. [Bash (sandbox — response header) [Tool Description]](#12214-bash-sandbox-—-response-header-tool-description)
         15. [Bash (sandbox — retry without sandbox) [Tool Description]](#12215-bash-sandbox-—-retry-without-sandbox-tool-description)
         16. [Bash (sandbox — tmpdir) [Tool Description]](#12216-bash-sandbox-—-tmpdir-tool-description)
         17. [Bash (sandbox — user permission prompt) [Tool Description]](#12217-bash-sandbox-—-user-permission-prompt-tool-description)
      3. [Bash Command Documentation & Safety Agents](#123-bash-command-documentation-safety-agents)
         1. [Bash command description writer (Agent Prompt)](#1231-bash-command-description-writer-agent-prompt)
   3. [Sleep & Background Task Management](#13-sleep-background-task-management)
      1. [Bash (sleep — keep short) [Tool Description]](#131-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#132-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — no retry loops) [Tool Description]](#133-bash-sleep-—-no-retry-loops-tool-description)
      4. [Bash (sleep — run immediately) [Tool Description]](#134-bash-sleep-—-run-immediately-tool-description)
      5. [Bash (sleep — use check commands) [Tool Description]](#135-bash-sleep-—-use-check-commands-tool-description)
      6. [Bash (sleep — use run_in_background) [Tool Description]](#136-bash-sleep-—-use-run_in_background-tool-description)
2. [Agent Coordination and Parallel Workflows](#2-agent-coordination-and-parallel-workflows)
   1. [Planning Mode & Implementation Workflow](#21-planning-mode-implementation-workflow)
      1. [EnterPlanMode (Tool Description)](#211-enterplanmode-tool-description)
      2. [ExitPlanMode (Tool Description)](#212-exitplanmode-tool-description)
      3. [Plan mode is active (5-phase) [System Reminder]](#213-plan-mode-is-active-5-phase-system-reminder)
      4. [Plan mode is active (iterative) [System Reminder]](#214-plan-mode-is-active-iterative-system-reminder)
      5. [Plan mode is active (subagent) [System Reminder]](#215-plan-mode-is-active-subagent-system-reminder)
      6. [Plan mode re-entry (System Reminder)](#216-plan-mode-re-entry-system-reminder)
      7. [Exited plan mode (System Reminder)](#217-exited-plan-mode-system-reminder)
      8. [Plan file reference (System Reminder)](#218-plan-file-reference-system-reminder)
      9. [Verify plan reminder (System Reminder)](#219-verify-plan-reminder-system-reminder)
      10. [Phase four of plan mode (System Prompt)](#2110-phase-four-of-plan-mode-system-prompt)
      11. [Plan mode (enhanced) [Agent Prompt]](#2111-plan-mode-enhanced-agent-prompt)
   2. [Multi-Agent Teams and Subagent Delegation](#22-multi-agent-teams-and-subagent-delegation)
      1. [Multi-Agent Team Coordination & Swarm Management](#221-multi-agent-team-coordination-swarm-management)
         1. [TeammateTool (Tool Description)](#2211-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#2212-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#2213-sendmessagetool-tool-description)
         4. [SendMessageTool (non-agent-teams) [Tool Description]](#2214-sendmessagetool-non-agent-teams-tool-description)
         5. [Team Coordination (System Reminder)](#2215-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#2216-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#2217-teammate-communication-system-prompt)
         8. [Team memory content display (System Prompt)](#2218-team-memory-content-display-system-prompt)
      2. [Subagent Delegation & Agent Tool Usage](#222-subagent-delegation-agent-tool-usage)
         1. [Agent (usage notes) [Tool Description]](#2221-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#2222-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (subagent guidance) [System Prompt]](#2223-tool-usage-subagent-guidance-system-prompt)
         4. [Writing subagent prompts (System Prompt)](#2224-writing-subagent-prompts-system-prompt)
         5. [Subagent delegation examples (System Prompt)](#2225-subagent-delegation-examples-system-prompt)
         6. [Fork usage guidelines (System Prompt)](#2226-fork-usage-guidelines-system-prompt)
         7. [Worker fork execution (Agent Prompt)](#2227-worker-fork-execution-agent-prompt)
      3. [Batch Processing & Parallel Work Orchestration](#223-batch-processing-parallel-work-orchestration)
         1. [/batch slash command (Agent Prompt)](#2231-batch-slash-command-agent-prompt)
         2. [Scratchpad directory (System Prompt)](#2232-scratchpad-directory-system-prompt)
   3. [Task & Todo Management](#23-task-todo-management)
      1. [TodoWrite (Tool Description)](#231-todowrite-tool-description)
      2. [TaskCreate (Tool Description)](#232-taskcreate-tool-description)
      3. [TaskList (teammate workflow) [Tool Description]](#233-tasklist-teammate-workflow-tool-description)
      4. [Tool usage (task management) [System Prompt]](#234-tool-usage-task-management-system-prompt)
      5. [Task status (System Reminder)](#235-task-status-system-reminder)
      6. [Task tools reminder (System Reminder)](#236-task-tools-reminder-system-reminder)
      7. [TodoWrite reminder (System Reminder)](#237-todowrite-reminder-system-reminder)
   4. [Agent Design & Architecture](#24-agent-design-architecture)
      1. [Agent creation architect (Agent Prompt)](#241-agent-creation-architect-agent-prompt)
      2. [Agent thread notes (System Prompt)](#242-agent-thread-notes-system-prompt)
      3. [Auto mode (System Prompt)](#243-auto-mode-system-prompt)
3. [Code Development, Review, and Quality](#3-code-development-review-and-quality)
   1. [Code Writing Discipline & Engineering Practices](#31-code-writing-discipline-engineering-practices)
      1. [Doing tasks (avoid over-engineering) [System Prompt]](#311-doing-tasks-avoid-over-engineering-system-prompt)
      2. [Doing tasks (no premature abstractions) [System Prompt]](#312-doing-tasks-no-premature-abstractions-system-prompt)
      3. [Doing tasks (no unnecessary additions) [System Prompt]](#313-doing-tasks-no-unnecessary-additions-system-prompt)
      4. [Doing tasks (no compatibility hacks) [System Prompt]](#314-doing-tasks-no-compatibility-hacks-system-prompt)
      5. [Doing tasks (no unnecessary error handling) [System Prompt]](#315-doing-tasks-no-unnecessary-error-handling-system-prompt)
      6. [Doing tasks (minimize file creation) [System Prompt]](#316-doing-tasks-minimize-file-creation-system-prompt)
      7. [Doing tasks (read before modifying) [System Prompt]](#317-doing-tasks-read-before-modifying-system-prompt)
      8. [Doing tasks (software engineering focus) [System Prompt]](#318-doing-tasks-software-engineering-focus-system-prompt)
      9. [Doing tasks (ambitious tasks) [System Prompt]](#319-doing-tasks-ambitious-tasks-system-prompt)
      10. [Doing tasks (blocked approach) [System Prompt]](#3110-doing-tasks-blocked-approach-system-prompt)
      11. [Doing tasks (help and feedback) [System Prompt]](#3111-doing-tasks-help-and-feedback-system-prompt)
      12. [Doing tasks (no time estimates) [System Prompt]](#3112-doing-tasks-no-time-estimates-system-prompt)
      13. [Executing actions with care (System Prompt)](#3113-executing-actions-with-care-system-prompt)
   2. [Codebase Exploration & Search](#32-codebase-exploration-search)
      1. [Explore (Agent Prompt)](#321-explore-agent-prompt)
      2. [Explore strengths and guidelines (Agent Prompt)](#322-explore-strengths-and-guidelines-agent-prompt)
      3. [Tool usage (direct search) [System Prompt]](#323-tool-usage-direct-search-system-prompt)
      4. [Tool usage (delegate exploration) [System Prompt]](#324-tool-usage-delegate-exploration-system-prompt)
   3. [Code Quality, Review & Verification](#33-code-quality-review-verification)
      1. [Verification specialist (Agent Prompt)](#331-verification-specialist-agent-prompt)
      2. [/review-pr slash command (Agent Prompt)](#332-review-pr-slash-command-agent-prompt)
      3. [/security-review slash command (Agent Prompt)](#333-security-review-slash-command-agent-prompt)
      4. [Simplify (Skill)](#334-simplify-skill)
      5. [Verification specialist (Skill)](#335-verification-specialist-skill)
      6. [Create verifier skills (Skill)](#336-create-verifier-skills-skill)
   4. [Git Workflow & Version Control](#34-git-workflow-version-control)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#341-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#342-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#343-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#344-bash-git-—-prefer-new-commits-tool-description)
      5. [EnterWorktree (Tool Description)](#345-enterworktree-tool-description)
      6. [ExitWorktree (Tool Description)](#346-exitworktree-tool-description)
      7. [Quick git commit (Agent Prompt)](#347-quick-git-commit-agent-prompt)
      8. [Quick PR creation (Agent Prompt)](#348-quick-pr-creation-agent-prompt)
      9. [Session title and branch generation (Agent Prompt)](#349-session-title-and-branch-generation-agent-prompt)
      10. [Git status (System Prompt)](#3410-git-status-system-prompt)
      11. [Worker instructions (System Prompt)](#3411-worker-instructions-system-prompt)
   5. [Documentation and IDE Integration](#35-documentation-and-ide-integration)
      1. [Documentation Generation & Codebase Knowledge](#351-documentation-generation-codebase-knowledge)
         1. [CLAUDE.md creation (Agent Prompt)](#3511-claudemd-creation-agent-prompt)
         2. [Update Magic Docs (Agent Prompt)](#3512-update-magic-docs-agent-prompt)
         3. [Status line setup (Agent Prompt)](#3513-status-line-setup-agent-prompt)
      2. [LSP & IDE Code Intelligence](#352-lsp-ide-code-intelligence)
         1. [LSP (Tool Description)](#3521-lsp-tool-description)
         2. [NotebookEdit (Tool Description)](#3522-notebookedit-tool-description)
4. [Session, Context, and Automation](#4-session-context-and-automation)
   1. [Memory and Context Persistence](#41-memory-and-context-persistence)
      1. [Conversation Compaction & Context Summarization](#411-conversation-compaction-context-summarization)
         1. [Context compaction summary (System Prompt)](#4111-context-compaction-summary-system-prompt)
         2. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#4112-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
         3. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#4113-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
         4. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#4114-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
         5. [Conversation summarization (Agent Prompt)](#4115-conversation-summarization-agent-prompt)
         6. [Recent Message Summarization (Agent Prompt)](#4116-recent-message-summarization-agent-prompt)
      2. [Memory Systems & Persistence](#412-memory-systems-persistence)
         1. [Memory file contents (System Reminder)](#4121-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#4122-nested-memory-contents-system-reminder)
         3. [Memory system (private feedback) [System Prompt]](#4123-memory-system-private-feedback-system-prompt)
         4. [Description part of memory instructions (System Prompt)](#4124-description-part-of-memory-instructions-system-prompt)
         5. [Agent memory instructions (System Prompt)](#4125-agent-memory-instructions-system-prompt)
         6. [Memory selection (Agent Prompt)](#4126-memory-selection-agent-prompt)
         7. [Session memory update instructions (Agent Prompt)](#4127-session-memory-update-instructions-agent-prompt)
         8. [Session memory template (Data)](#4128-session-memory-template-data)
   2. [Session State and File Reminders](#42-session-state-and-file-reminders)
      1. [Session & Context State Reminders](#421-session-context-state-reminders)
         1. [File modified by user or linter (System Reminder)](#4211-file-modified-by-user-or-linter-system-reminder)
         2. [File opened in IDE (System Reminder)](#4212-file-opened-in-ide-system-reminder)
         3. [Lines selected in IDE (System Reminder)](#4213-lines-selected-in-ide-system-reminder)
         4. [New diagnostics detected (System Reminder)](#4214-new-diagnostics-detected-system-reminder)
         5. [Token usage (System Reminder)](#4215-token-usage-system-reminder)
         6. [USD budget (System Reminder)](#4216-usd-budget-system-reminder)
         7. [Session continuation (System Reminder)](#4217-session-continuation-system-reminder)
         8. [Output style active (System Reminder)](#4218-output-style-active-system-reminder)
         9. [Compact file reference (System Reminder)](#4219-compact-file-reference-system-reminder)
      2. [File State & Content Reminders](#422-file-state-content-reminders)
         1. [File exists but empty (System Reminder)](#4221-file-exists-but-empty-system-reminder)
         2. [File truncated (System Reminder)](#4222-file-truncated-system-reminder)
         3. [File shorter than offset (System Reminder)](#4223-file-shorter-than-offset-system-reminder)
         4. [MCP resource no content (System Reminder)](#4224-mcp-resource-no-content-system-reminder)
         5. [MCP resource no displayable content (System Reminder)](#4225-mcp-resource-no-displayable-content-system-reminder)
   3. [Hooks, Skills, and Slash Commands](#43-hooks-skills-and-slash-commands)
      1. [Hook System: Events, Errors & Continuation](#431-hook-system-events-errors-continuation)
         1. [Hook additional context (System Reminder)](#4311-hook-additional-context-system-reminder)
         2. [Hook blocking error (System Reminder)](#4312-hook-blocking-error-system-reminder)
         3. [Hook stopped continuation prefix (System Reminder)](#4313-hook-stopped-continuation-prefix-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#4314-hook-stopped-continuation-system-reminder)
         5. [Hook success (System Reminder)](#4315-hook-success-system-reminder)
         6. [Hooks Configuration (System Prompt)](#4316-hooks-configuration-system-prompt)
         7. [Agent Hook (Agent Prompt)](#4317-agent-hook-agent-prompt)
         8. [Hook condition evaluator (Agent Prompt)](#4318-hook-condition-evaluator-agent-prompt)
      2. [Skills & Slash Command System](#432-skills-slash-command-system)
         1. [Skill (Tool Description)](#4321-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#4322-tool-usage-skill-invocation-system-prompt)
         3. [Invoked skills (System Reminder)](#4323-invoked-skills-system-reminder)
         4. [Skillify Current Session (System Prompt)](#4324-skillify-current-session-system-prompt)
         5. [/loop slash command (Skill)](#4325-loop-slash-command-skill)
         6. [Debugging (Skill)](#4326-debugging-skill)
         7. [/stuck (Skill)](#4327-stuck-skill)
         8. [Update Claude Code Config (Skill)](#4328-update-claude-code-config-skill)
   4. [Scheduling and Session Organization](#44-scheduling-and-session-organization)
      1. [Scheduling & Cron Jobs](#441-scheduling-cron-jobs)
         1. [CronCreate (Tool Description)](#4411-croncreate-tool-description)
         2. [Sleep (Tool Description)](#4412-sleep-tool-description)
      2. [Session Naming, Titling & Metadata](#442-session-naming-titling-metadata)
         1. [Coding session title generator (Agent Prompt)](#4421-coding-session-title-generator-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#4422-session-search-assistant-agent-prompt)
5. [Web, Security, and External Integrations](#5-web-security-and-external-integrations)
   1. [Web Search and Browser Automation](#51-web-search-and-browser-automation)
      1. [Web Search & Content Retrieval](#511-web-search-content-retrieval)
         1. [WebSearch (Tool Description)](#5111-websearch-tool-description)
         2. [WebFetch summarizer (Agent Prompt)](#5112-webfetch-summarizer-agent-prompt)
      2. [Browser Automation & Web Interaction](#512-browser-automation-web-interaction)
         1. [Computer (Tool Description)](#5121-computer-tool-description)
         2. [Computer action (Tool Parameter)](#5122-computer-action-tool-parameter)
         3. [WebFetch (Tool Description)](#5123-webfetch-tool-description)
         4. [Chrome browser MCP tools (System Prompt)](#5124-chrome-browser-mcp-tools-system-prompt)
         5. [Claude in Chrome browser automation (System Prompt)](#5125-claude-in-chrome-browser-automation-system-prompt)
   2. [GitHub Integration & PR Workflows](#52-github-integration-pr-workflows)
      1. [/pr-comments slash command (Agent Prompt)](#521-pr-comments-slash-command-agent-prompt)
      2. [GitHub Actions workflow for @claude mentions (Data)](#522-github-actions-workflow-for-claude-mentions-data)
      3. [GitHub App installation PR description (Data)](#523-github-app-installation-pr-description-data)
   3. [Security Monitoring & Safety Enforcement](#53-security-monitoring-safety-enforcement)
      1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#531-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#532-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      3. [Bash command prefix detection (Agent Prompt)](#533-bash-command-prefix-detection-agent-prompt)
      4. [Censoring assistance with malicious activities (System Prompt)](#534-censoring-assistance-with-malicious-activities-system-prompt)
      5. [Doing tasks (security) [System Prompt]](#535-doing-tasks-security-system-prompt)
      6. [Malware analysis after Read tool call (System Reminder)](#536-malware-analysis-after-read-tool-call-system-reminder)
   4. [Tool Discovery and UI Presentation](#54-tool-discovery-and-ui-presentation)
      1. [Tool Discovery & Deferred Tool Loading](#541-tool-discovery-deferred-tool-loading)
         1. [ToolSearch (second part) [Tool Description]](#5411-toolsearch-second-part-tool-description)
         2. [Tool execution denied (System Prompt)](#5412-tool-execution-denied-system-prompt)
      2. [UI Preview & Option Presentation](#542-ui-preview-option-presentation)
         1. [Option previewer (System Prompt)](#5421-option-previewer-system-prompt)
         2. [Prompt Suggestion Generator v2 (Agent Prompt)](#5422-prompt-suggestion-generator-v2-agent-prompt)
6. [Communication, Output, and User Engagement](#6-communication-output-and-user-engagement)
   1. [Agent Communication & User Messaging](#61-agent-communication-user-messaging)
      1. [How to use the SendUserMessage tool (System Prompt)](#611-how-to-use-the-sendusermessage-tool-system-prompt)
      2. [AskUserQuestion (Tool Description)](#612-askuserquestion-tool-description)
      3. [AskUserQuestion (preview field) [Tool Description]](#613-askuserquestion-preview-field-tool-description)
      4. [Agent mention (System Reminder)](#614-agent-mention-system-reminder)
      5. [/btw side question (System Reminder)](#615-btw-side-question-system-reminder)
   2. [Output Style, Tone & Conciseness](#62-output-style-tone-conciseness)
      1. [Output efficiency (System Prompt)](#621-output-efficiency-system-prompt)
      2. [Tone and style (code references) [System Prompt]](#622-tone-and-style-code-references-system-prompt)
      3. [Tone and style (concise output — detailed) [System Prompt]](#623-tone-and-style-concise-output-—-detailed-system-prompt)
      4. [Tone and style (concise output — short) [System Prompt]](#624-tone-and-style-concise-output-—-short-system-prompt)
      5. [Tool Use Summary Generation (System Prompt)](#625-tool-use-summary-generation-system-prompt)
      6. [Agent Summary Generation (System Prompt)](#626-agent-summary-generation-system-prompt)
      7. [Common suffix (response format) [Agent Prompt]](#627-common-suffix-response-format-agent-prompt)
   3. [Usage Analytics and Learning Workflows](#63-usage-analytics-and-learning-workflows)
      1. [Usage Insights & Workflow Analytics](#631-usage-insights-workflow-analytics)
         1. [Insights session facets extraction (System Prompt)](#6311-insights-session-facets-extraction-system-prompt)
         2. [Insights suggestions (System Prompt)](#6312-insights-suggestions-system-prompt)
         3. [Insights at a glance summary (System Prompt)](#6313-insights-at-a-glance-summary-system-prompt)
         4. [Insights friction analysis (System Prompt)](#6314-insights-friction-analysis-system-prompt)
         5. [Insights on the horizon (System Prompt)](#6315-insights-on-the-horizon-system-prompt)
      2. [Learning Mode & Educational Workflows](#632-learning-mode-educational-workflows)
         1. [Learning mode (System Prompt)](#6321-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6322-learning-mode-insights-system-prompt)
7. [API and SDK References](#7-api-and-sdk-references)
   1. [Claude API SDK References (Python & TypeScript)](#71-claude-api-sdk-references-python-typescript)
      1. [Claude API reference — Python (Data)](#711-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#712-claude-api-reference-—-typescript-data)
      3. [Streaming reference — Python (Data)](#713-streaming-reference-—-python-data)
      4. [Streaming reference — TypeScript (Data)](#714-streaming-reference-—-typescript-data)
      5. [Tool use reference — Python (Data)](#715-tool-use-reference-—-python-data)
      6. [Tool use reference — TypeScript (Data)](#716-tool-use-reference-—-typescript-data)
      7. [Tool use concepts (Data)](#717-tool-use-concepts-data)
      8. [Files API reference — Python (Data)](#718-files-api-reference-—-python-data)
      9. [Files API reference — TypeScript (Data)](#719-files-api-reference-—-typescript-data)
      10. [Message Batches API reference — Python (Data)](#7110-message-batches-api-reference-—-python-data)
   2. [Claude API SDK References (Other Languages)](#72-claude-api-sdk-references-other-languages)
      1. [Claude API reference — C# (Data)](#721-claude-api-reference-—-c-data)
      2. [Claude API reference — cURL (Data)](#722-claude-api-reference-—-curl-data)
      3. [Claude API reference — Go (Data)](#723-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#724-claude-api-reference-—-java-data)
      5. [Claude API reference — PHP (Data)](#725-claude-api-reference-—-php-data)
      6. [Claude API reference — Ruby (Data)](#726-claude-api-reference-—-ruby-data)
   3. [Agent SDK and API Navigation](#73-agent-sdk-and-api-navigation)
      1. [Agent SDK References & Patterns](#731-agent-sdk-references-patterns)
         1. [Agent SDK patterns — Python (Data)](#7311-agent-sdk-patterns-—-python-data)
         2. [Agent SDK patterns — TypeScript (Data)](#7312-agent-sdk-patterns-—-typescript-data)
         3. [Agent SDK reference — Python (Data)](#7313-agent-sdk-reference-—-python-data)
         4. [Agent SDK reference — TypeScript (Data)](#7314-agent-sdk-reference-—-typescript-data)
      2. [API Reference Navigation & Documentation Sources](#732-api-reference-navigation-documentation-sources)
         1. [Claude model catalog (Data)](#7321-claude-model-catalog-data)
         2. [Live documentation sources (Data)](#7322-live-documentation-sources-data)
         3. [HTTP error codes reference (Data)](#7323-http-error-codes-reference-data)
         4. [Build with Claude API (Skill)](#7324-build-with-claude-api-skill)
         5. [Build with Claude API (reference guide) [Skill]](#7325-build-with-claude-api-reference-guide-skill)
         6. [Claude guide agent (Agent Prompt)](#7326-claude-guide-agent-agent-prompt)

---

## 1. File and Bash Operations

Tools and protocols for filesystem access, bash command execution, sandbox security, and background task management. Covers when to use dedicated file tools versus shell commands, command formatting rules, and sandbox isolation enforcement.

### 1.1 Filesystem Tools and Access

Dedicated tools for reading, writing, editing, searching, and navigating files — and the rules governing when to use them instead of bash equivalents.

#### 1.1.1 File System Tools: Read, Write, Edit, Glob, Grep

Comprehensive filesystem operations for reading, writing, and searching code. ReadFile handles diverse formats including PDFs and notebooks with pagination; Write and Edit manage file creation and modification; Glob and Grep enable fast pattern-based file discovery and content search across codebases using glob syntax and regex respectively.

##### 1.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges for large files), and Jupyter notebooks. Handles line truncation and allows offset/limit parameters for long files.

##### 1.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, overwriting existing files. Prefers Edit tool for modifications and avoids creating documentation files unless explicitly requested.

##### 1.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read tool output. Prefer editing existing files; use replace_all for renaming variables across the file. Edits fail if old_string is not unique.

##### 1.1.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like "**/*.js" to search codebases by filename, returning results sorted by modification time.

##### 1.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search tool built on ripgrep supporting full regex syntax, file filtering, and multiple output modes. Handles multiline patterns and requires proper escaping for special characters.

#### 1.1.2 Dedicated Tools for File Operations

Claude should use specialized tools (Read, Write, Edit, Glob, Grep) for file operations instead of bash equivalents (cat, echo, sed, find, grep). These dedicated tools provide better transparency and user experience while keeping bash reserved for system commands and terminal operations.

##### 1.1.2.1 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs Claude to use the Edit tool for file editing instead of sed or awk commands.

##### 1.1.2.2 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use the Glob tool for file searching instead of find or ls commands.

##### 1.1.2.3 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs Claude to use the Read tool for file reading instead of cat, head, or tail commands.

##### 1.1.2.4 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use the Write tool for file writing instead of echo or cat commands.

##### 1.1.2.5 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and transparency than Bash equivalents for file operations.

##### 1.1.2.6 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat, and similar read-only searching commands, preferring dedicated tools instead for better user experience.

##### 1.1.2.7 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly instead of using echo or printf in bash commands.

##### 1.1.2.8 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use the Grep tool instead of grep or rg for content search operations.

##### 1.1.2.9 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Directs Claude to use Write tool instead of cat heredoc or echo redirection for file creation.

##### 1.1.2.10 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs Claude to use Edit tool instead of sed or awk for file editing.

##### 1.1.2.11 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Directs Claude to use Read tool instead of cat, head, tail, or sed for reading files.

##### 1.1.2.12 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Directs Claude to use Grep tool instead of grep or rg for searching file content.

##### 1.1.2.13 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool for file searches instead of find or ls commands.

##### 1.1.2.14 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

### 1.2 Bash Execution Rules and Safety

Formatting conventions, sequential and parallel chaining, sandbox isolation, access control enforcement, and documentation for bash commands.

#### 1.2.1 Bash Command Execution & Formatting

Bash commands should be formatted with quoted file paths, chained sequentially using && for dependent operations, and run in parallel when independent. Commands require clear descriptions, maintain working directory state across calls, and support optional timeout configuration.

##### 1.2.1.1 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs Claude to write clear, concise descriptions of bash commands, with brief summaries for simple commands and detailed context for complex piped or obscure commands.

##### 1.2.1.2 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs Claude not to use newlines to separate bash commands.

##### 1.2.1.3 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing a given bash command and returning its output.

##### 1.2.1.4 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to run independent bash commands as parallel tool calls in a single message for efficiency.

##### 1.2.1.5 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs Claude to always quote file paths containing spaces with double quotes in bash commands.

##### 1.2.1.6 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain the current working directory by using absolute paths and avoiding cd commands unless explicitly requested.

##### 1.2.1.7 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons only when running commands sequentially but failure of earlier commands is acceptable.

##### 1.2.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call to ensure sequential execution with failure propagation.

##### 1.2.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Optionally specify a timeout in milliseconds (up to maximum limit); commands default to a preset timeout duration.

##### 1.2.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, use ls to verify the parent directory exists and is the correct location.

##### 1.2.1.11 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between commands, but shell state does not; the shell environment initializes from the user's profile.

##### 1.2.1.12 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Directs Claude to maximize parallel tool calls for independent operations while running dependent calls sequentially to increase efficiency.

#### 1.2.2 Sandbox Security & Access Control

All bash commands execute within sandbox isolation by default, with mandatory enforcement and no exceptions. Claude should detect sandbox-caused failures (access denied, network blocks, socket errors), explain restrictions to users, and use $TMPDIR for temporary files. Sensitive paths like credentials must never be added to allowlists.

##### 1.2.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to work with the user to adjust sandbox settings when a command fails due to sandbox restrictions.

##### 1.2.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to default to running commands within the sandbox and only bypass sandbox restrictions when explicitly requested by the user or when evidence of sandbox restriction is present.

##### 1.2.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

##### 1.2.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that identify sandbox-caused command failures.

##### 1.2.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

##### 1.2.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies operation not permitted errors for file and network operations as evidence of sandbox restrictions.

##### 1.2.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions.

##### 1.2.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and mention the /sandbox command for managing restrictions.

##### 1.2.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition for identifying sandbox-caused failures: when a command fails with evidence of sandbox restrictions, distinguishing them from other failure causes.

##### 1.2.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All bash commands must execute in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

##### 1.2.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

##### 1.2.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

##### 1.2.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; even after running with dangerouslyDisableSandbox, default to sandbox mode for future commands.

##### 1.2.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header for responding when sandbox-caused failures are detected.

##### 1.2.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true on sandbox failure without asking the user.

##### 1.2.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use $TMPDIR environment variable (or ${SANDBOX_TMPDIR_FN()} as fallback) for temporary files in sandbox mode; do not use /tmp directly.

##### 1.2.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling sandbox will prompt the user for permission.

#### 1.2.3 Bash Command Documentation & Safety Agents

Generates clear, concise documentation for bash commands with appropriate context and complexity handling.

##### 1.2.3.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or flag-heavy commands.

### 1.3 Sleep & Background Task Management

Avoid sleep loops for polling, retrying, or blocking operations. Instead use background task notifications, check commands for external processes, or execute commands immediately. Keep sleep durations brief (1-5 seconds) when necessary to prevent user blocking.

#### 1.3.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep duration to 1-5 seconds to avoid blocking the user.

#### 1.3.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

#### 1.3.3 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Do not retry failing commands in sleep loops; diagnose the root cause or consider alternative approaches.

#### 1.3.4 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; execute them without delay.

#### 1.3.5 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like gh run view instead of sleeping when polling external processes.

#### 1.3.6 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Use run_in_background for long-running commands and receive notification on completion instead of sleeping.

---

## 2. Agent Coordination and Parallel Workflows

Infrastructure for spawning, delegating to, and coordinating multiple agents — including planning frameworks, task tracking, batch processing, and agent architecture design.

### 2.1 Planning Mode & Implementation Workflow

Structured planning framework that gates implementation with design review. Agents explore codebases, propose architectural approaches, and write plans to a shared file for user approval before execution. Multiple workflow variants support parallel exploration, iterative pair-planning, and subagent constraints, with explicit phase transitions and verification checkpoints.

#### 2.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Enter plan mode proactively for non-trivial implementation tasks to explore the codebase and design an approach for user approval before writing code. Use for new features, multiple valid approaches, code modifications, architectural decisions, multi-file changes, unclear requirements, or when user preferences matter.

#### 2.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning and request user approval by reading the plan from the plan file. Use only for implementation tasks requiring code changes, not for research or exploration tasks.

#### 2.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow: initial understanding via parallel exploration agents, design with planning agents, review, and plan approval. Prevents execution and restricts edits to the plan file only.

#### 2.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Implements iterative pair-planning with the user: explore code, update the plan file incrementally, ask clarifying questions, and converge when all ambiguities are resolved. Restricts edits to the plan file only.

#### 2.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents: prevents execution and non-readonly operations, allows plan file edits only, and instructs the agent to answer comprehensively while asking clarifying questions.

#### 2.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode: read the existing plan, evaluate if the new request is the same task or different, and either modify or overwrite the plan accordingly before proceeding.

#### 2.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that it has exited plan mode and can now execute edits, run tools, and take actions, with optional reference to the plan file.

#### 2.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file and instructs Claude to continue working on it if relevant and incomplete.

#### 2.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly after implementation.

#### 2.1.10 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes the plan to file with file paths and specific changes, references to existing functions, and a single verification command, with a hard 40-line limit.

#### 2.1.11 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent that explores codebases and designs implementation plans in read-only mode. Identifies critical files, traces code patterns, and outputs step-by-step strategies with architectural trade-off analysis.

### 2.2 Multi-Agent Teams and Subagent Delegation

Spawning specialized agent teams, assigning tasks, enabling inter-agent communication, and delegating parallelizable work to subagents with isolated contexts.

#### 2.2.1 Multi-Agent Team Coordination & Swarm Management

Infrastructure for spawning and coordinating teams of specialized agents. TeammateTool creates teams and assigns tasks; SendMessageTool enables inter-agent communication and shutdown protocols; shared team memory and task lists synchronize work across agents. Emphasizes graceful shutdown and cost-efficient direct messaging over broadcasts.

##### 2.2.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Coordinates multi-agent teams by creating teams, spawning teammates with appropriate agent types, assigning tasks, and managing team workflows. Emphasizes automatic message delivery, idle state handling, and task list coordination across teammates.

##### 2.2.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all active members to be terminated first before cleanup can proceed.

##### 2.2.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables team communication through direct messages, broadcasts, and protocol responses including shutdown and plan approval workflows. Emphasizes using direct messages over broadcasts to minimize API costs.

##### 2.2.1.4 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown-formatted messages to users with optional file attachments, using status labels to indicate whether the message is a direct reply or proactive notification.

##### 2.2.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes team context: identifies Claude's role and teammates by name, references team config and task list, and instructs communication via agent names rather than UUIDs.

##### 2.2.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully before returning a final response to the user in non-interactive mode.

##### 2.2.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents running in a team to use SendMessage tool for teammate communication via message or broadcast types, as text responses are not visible to other team members.

##### 2.2.1.8 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and content for injection into conversation context.

#### 2.2.2 Subagent Delegation & Agent Tool Usage

Framework for delegating autonomous work to specialized subagent processes. Agents launch subagents for parallelizable tasks with isolated worktrees and preserved context; fork execution enables concurrent research and implementation without mid-flight inspection. Guidelines emphasize specificity in prompts, avoiding redundant work, and trusting completion notifications.

##### 2.2.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guide for the Agent tool covering concurrent agent launches, background execution, resumption with preserved context, worktree isolation, and subagent type selection for autonomous multi-step task handling.

##### 2.2.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses for complex multi-step tasks, with available agent types and their capabilities.

##### 2.2.2.3 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using subagents effectively for parallelizing independent queries and protecting context windows, while avoiding redundant work duplication.

##### 2.2.2.4 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing subagent prompts that differ based on context inheritance, emphasizing specificity, avoiding redundant explanations, and delegating actionable tasks rather than understanding.

##### 2.2.2.5 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for coordinator agents delegating tasks to subagents, handling waiting states, and reporting results without fabricating answers during mid-wait user queries.

##### 2.2.2.6 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Provides guidelines for forking subagents for research and implementation work, prohibiting mid-flight output inspection and fabrication of fork results, emphasizing cache reuse and trust in completion notifications.

##### 2.2.2.7 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Forked worker sub-agent that executes directives directly without spawning further sub-agents, committing file changes and reporting structured results under 500 words with scope, findings, and issues.

#### 2.2.3 Batch Processing & Parallel Work Orchestration

Enables large-scale codebase transformations through decomposition into independent parallel units, worker agent coordination with git worktree isolation, and centralized progress tracking. Supports temporary file management via session-specific scratchpads.

##### 2.2.3.1 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5-30 independent units, determining e2e test recipes, and spawning background worker agents with worktree isolation. Tracks progress and aggregates results.

##### 2.2.3.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories, supporting intermediate results, scripts, and working files.

### 2.3 Task & Todo Management

Task tracking system for organizing multi-step work with state transitions (pending, in_progress, completed). TodoWrite and TaskCreate structure complex sessions; shared task lists enable team coordination and progress visibility, with reminders to mark completions incrementally and clean up stale items.

#### 2.3.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with state tracking (pending, in_progress, completed), supporting complex multi-step work with both imperative and active form descriptions.

#### 2.3.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to organize complex multi-step work, track progress, and coordinate with teammates. Tasks include subject, description, and optional active form for spinner display.

#### 2.3.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for task discovery and assignment, prioritizing pending unblocked tasks in ID order and enabling team coordination through shared task lists.

#### 2.3.4 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to break down work into tasks using TodoWrite, marking each task complete immediately rather than batching completions.

#### 2.3.5 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Instructs Claude to use the TaskOutput tool to check task execution results.

#### 2.3.6 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task creation and update tools for progress tracking when relevant, and to clean up stale tasks without mentioning the reminder to the user.

#### 2.3.7 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task progress tracking when relevant, and to clean up stale todos without mentioning the reminder to the user.

### 2.4 Agent Design & Architecture

Frameworks for designing and operating custom AI agents, from initial architecture and persona creation through autonomous execution. Covers system prompt generation, behavioral guidelines, and continuous task automation with minimal user intervention.

#### 2.4.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design high-performance custom AI agents by extracting user intent, creating expert personas, architecting comprehensive system prompts, and optimizing for performance. Outputs a JSON object with agent identifier, usage conditions, and complete system prompt.

#### 2.4.2 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering absolute paths, response formatting, emoji avoidance, and tool call punctuation.

#### 2.4.3 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Behavioral guidelines for auto mode enabling continuous autonomous task execution with immediate action, minimal interruptions, and reasonable decision-making.

---

## 3. Code Development, Review, and Quality

Practices and tools for writing disciplined code, navigating codebases, performing quality reviews, managing version control, and maintaining project documentation.

### 3.1 Code Writing Discipline & Engineering Practices

Establishes guardrails for focused, pragmatic code changes by enforcing scope boundaries, minimizing unnecessary abstractions and error handling, and requiring careful assessment of destructive operations. Emphasizes understanding existing code before modification and deferring to user judgment on task complexity.

#### 3.1.1 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Directs Claude to make only requested or clearly necessary changes, keeping solutions simple and focused.

#### 3.1.2 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directs Claude to avoid creating helpers or abstractions for one-time operations or hypothetical requirements, favoring minimal complexity.

#### 3.1.3 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directs Claude not to add features, refactor, or improve beyond what was requested, including avoiding unnecessary comments and type annotations.

#### 3.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims or deprecated markers.

#### 3.1.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios, validating only at system boundaries and trusting internal code guarantees.

#### 3.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat.

#### 3.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Directs Claude to read and understand existing code before proposing modifications.

#### 3.1.8 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Instructs Claude to interpret user requests in the context of software engineering tasks like bug fixes, feature development, and refactoring, applying domain understanding to generic instructions.

#### 3.1.9 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Instructs Claude to support ambitious tasks and defer to user judgment on scope rather than declining complex work.

#### 3.1.10 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instructs Claude to consider alternatives when blocked rather than brute-forcing, and to seek user guidance when approaches fail repeatedly.

#### 3.1.11 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

#### 3.1.12 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid giving time estimates or predictions for task completion.

#### 3.1.13 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to carefully assess reversibility and blast radius of actions, seeking user confirmation for destructive, hard-to-reverse, or shared-state operations. Emphasizes investigating unexpected state rather than deleting it.

### 3.2 Codebase Exploration & Search

Rapid navigation of codebases through pattern-based file search and grep operations in strict read-only mode. Supports both direct tool usage for simple queries and delegated exploration through subagents for comprehensive research across multiple locations.

#### 3.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

File search specialist for Claude Code that rapidly navigates codebases using glob patterns, grep, and file reading in strict read-only mode. Adapts search approach based on thoroughness level and returns absolute file paths.

#### 3.2.2 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines strengths and behavioral guidelines for the Explore subagent, emphasizing broad search strategies, thoroughness across multiple locations, and strict prohibition on file creation or modification.

#### 3.2.3 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Directs Claude to use Glob and Grep tools directly for simple, directed codebase searches.

#### 3.2.4 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Instructs Claude to use Task tool with exploration subagent for broader codebase exploration and deep research when simple searches prove insufficient.

### 3.3 Code Quality, Review & Verification

Multi-faceted quality assurance through adversarial testing, expert code review, and security analysis. Executes builds, test suites, and edge-case probes while examining code for correctness, performance, security vulnerabilities, and style violations across GitHub PRs and repository changes.

#### 3.3.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarially tests implementations by running builds, test suites, linters, and probes for concurrency/boundary/idempotency issues, issuing PASS/FAIL/PARTIAL verdicts with documented command output and results.

#### 3.3.2 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Conducts expert code reviews of GitHub PRs by fetching PR details and diffs, analyzing code quality, style, improvements, and risks with focus on correctness, conventions, performance, testing, and security.

#### 3.3.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review of code changes focusing on exploitable vulnerabilities with high confidence. Examines input validation, authentication, crypto, injection, and data exposure across repository context, comparative analysis, and vulnerability assessment phases.

#### 3.3.4 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel review agents for code reuse, quality, and efficiency, then aggregates findings and fixes issues directly.

#### 3.3.5 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Verification specialist skill that discovers verifier skills, analyzes code changes, generates deterministic verification plans, triggers appropriate verifiers, and reports results with failure diagnostics.

#### 3.3.6 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase process for creating verifier skills for the Verify agent, including auto-detection of project structure, setup of browser automation (Playwright, Chrome DevTools, Claude Chrome Extension) for web apps, and interactive Q&A for naming and configuration.

### 3.4 Git Workflow & Version Control

Git operations follow safety protocols: never commit without explicit user request, create new commits rather than amending, respect hooks and signing requirements, and avoid destructive operations unless necessary. Worktrees provide isolated branching, while quick-commit and quick-PR agents automate common workflows with pre-populated context and gh CLI integration.

#### 3.4.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to avoid destructive git operations like reset --hard and push --force unless they are the best approach and consider safer alternatives first.

#### 3.4.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols for destructive operations, hook handling, commit message formatting, and PR creation with gh command. Emphasizes never committing without explicit user request and creating new commits rather than amending after hook failures.

#### 3.4.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude to never skip git hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues if hooks fail.

#### 3.4.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to create new commits rather than amending existing commits.

#### 3.4.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it only when the user explicitly requests worktree usage. Requires a git repository or WorktreeCreate/WorktreeRemove hooks configured.

#### 3.4.6 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree, restoring the original working directory and clearing session-dependent caches. Supports keeping or removing the worktree directory, with safeguards against deleting uncommitted changes.

#### 3.4.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context from git status and diff. Analyzes changes, drafts messages following repository style, stages files, and commits using heredoc syntax while enforcing safety protocols.

#### 3.4.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated git context. Handles branch creation, commit composition, push operations, and PR creation or updates using gh CLI with safety protocols and heredoc syntax.

#### 3.4.9 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates concise session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

#### 3.4.10 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status snapshot including branch, main branch, file status, and recent commits at conversation start.

#### 3.4.11 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Outlines a five-step workflow for workers to simplify changes, run tests, perform end-to-end testing, commit and push code, and report PR status to the coordinator.

### 3.5 Documentation and IDE Integration

Automated documentation generation for project knowledge, architecture guidance, and build patterns, alongside language server and notebook editing capabilities.

#### 3.5.1 Documentation Generation & Codebase Knowledge

Captures and maintains project-specific knowledge through automated documentation creation and updates, including architecture guidance, build commands, and patterns. Configures development environment settings to reflect project context.

##### 3.5.1.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files containing common build/test/lint commands, high-level architecture, and project-specific patterns for future Claude Code instances.

##### 3.5.1.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Updates Magic Doc files with new learnings from conversations, preserving headers and removing outdated information while maintaining terse, high-signal documentation focused on architecture and entry points.

##### 3.5.1.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line by converting shell PS1 prompts to shell commands, handling ANSI colors and escape sequences, and updating ~/.claude/settings.json with custom statusLine configuration.

#### 3.5.2 LSP & IDE Code Intelligence

Language server and notebook editing capabilities that enable code navigation, type information, and interactive cell manipulation within development environments.

##### 3.5.2.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol integration for code intelligence features including symbol navigation, references, hover information, and call hierarchy analysis across supported file types.

##### 3.5.2.2 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits specific cells in Jupyter notebooks by replacing cell contents, supporting insert and delete operations with 0-indexed cell numbering.

---

## 4. Session, Context, and Automation

Systems for preserving context across sessions, tracking state changes, automating workflows via hooks and slash commands, and managing scheduling — keeping Claude aware and consistent across long-running work.

### 4.1 Memory and Context Persistence

Persistent memory files, conversation compaction, and session summarization that preserve task context, user preferences, and institutional knowledge across sessions.

#### 4.1.1 Conversation Compaction & Context Summarization

Condenses multi-turn conversations into structured summaries that preserve task context, decisions, and technical details across context window transitions, enabling efficient session resumption without losing critical information.

##### 4.1.1.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write a structured continuation summary for context window transitions, covering task overview, current state, discoveries, next steps, and context to preserve for efficient resumption.

##### 4.1.1.2 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

System prompt for analysis phase of conversation compaction, requiring chronological review of all messages with detailed identification of requests, approaches, decisions, and errors.

##### 4.1.1.3 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Lean experimental version of compaction analysis instructions using analysis tags as planning scratchpad rather than detailed drafting.

##### 4.1.1.4 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

Compaction analysis instructions focused on recent messages only, requiring chronological review with detailed identification of requests, approaches, decisions, and user feedback.

##### 4.1.1.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries covering primary requests, technical concepts, files examined, errors and fixes, problem-solving efforts, all user messages, pending tasks, current work, and next steps with direct quotes from recent context.

##### 4.1.1.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, covering primary requests, technical concepts, files examined, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps.

#### 4.1.2 Memory Systems & Persistence

Maintains persistent user and domain-specific knowledge across sessions through structured memory files that capture preferences, feedback, and institutional learning, with mechanisms to select relevant context and update state during conversations.

##### 4.1.2.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path with type description.

##### 4.1.2.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Shows the contents of a nested memory file attachment.

##### 4.1.2.3 [Memory system (private feedback) [System Prompt]](system-prompts/system-prompt-memory-system-private-feedback.md)

Describes private feedback memory for storing user guidance and corrections, with instructions to check for contradictions against team feedback before saving.

##### 4.1.2.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines how to write memory descriptions that capture user role, goals, and preferences to enable personalized assistance while avoiding negative judgments.

##### 4.1.2.5 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Instructions for including domain-specific memory update guidance in agent system prompts to build institutional knowledge across conversations.

##### 4.1.2.6 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects relevant memory files for user queries by matching filenames and descriptions to query intent, returning up to 5 useful memories while excluding tool documentation for recently-used tools.

##### 4.1.2.7 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations by editing existing sections with detailed, info-dense content while preserving structure, headers, and italic section descriptions. Maintains current state and actionable information.

##### 4.1.2.8 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing session context into sections for state, tasks, files, workflow, errors, codebase, learnings, results, and worklog.

### 4.2 Session State and File Reminders

Real-time notifications about file modifications, IDE interactions, diagnostic updates, resource constraints, truncation, and content boundary conditions.

#### 4.2.1 Session & Context State Reminders

Notifies Claude of real-time session state changes including external file modifications, IDE interactions, diagnostic updates, and resource constraints, enabling awareness of the current working context and budget limitations.

##### 4.2.1.1 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified and provides relevant changes with line numbers, instructing it to account for the changes without reverting unless requested.

##### 4.2.1.2 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 4.2.1.3 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific lines selected by the user in the IDE with truncated content, noting possible relevance to the current task.

##### 4.2.1.4 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues in the codebase.

##### 4.2.1.5 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 4.2.1.6 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

##### 4.2.1.7 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and the working directory has changed.

##### 4.2.1.8 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

##### 4.2.1.9 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs it to use the Read tool if full access is needed.

#### 4.2.2 File State & Content Reminders

Alerts Claude to file boundary conditions and content limitations such as truncation, empty files, and offset errors, directing appropriate tool usage when full content access is required.

##### 4.2.2.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 4.2.2.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs it to use the Read tool for additional content without mentioning truncation to the user.

##### 4.2.2.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that the requested file offset exceeds the file's actual length and provides the total line count.

##### 4.2.2.4 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource has no content available.

##### 4.2.2.5 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Displays a notification when an MCP resource has no displayable content to show.

### 4.3 Hooks, Skills, and Slash Commands

Lifecycle-based automation hooks for custom logic at execution points, and a slash command system for invoking domain-specific skills and reusable workflows.

#### 4.3.1 Hook System: Events, Errors & Continuation

Hooks provide a lifecycle-based automation framework for Claude Code, enabling custom logic at key execution points through command, prompt, and agent hook types. System reminders surface hook outcomes—success messages, errors, context, and continuation signals—to Claude, while condition evaluators and agent verifiers assess whether hooks should proceed or stop.

##### 4.3.1.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution to Claude.

##### 4.3.1.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command to Claude.

##### 4.3.1.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix string for hook stopped continuation messages.

##### 4.3.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook has stopped continuation and provides the associated message.

##### 4.3.1.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports a success message from a hook execution to Claude.

##### 4.3.1.6 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide to Claude Code hooks configuration, covering hook structure, lifecycle events, hook types (command, prompt, agent), input/output formats, and common patterns for auto-formatting, logging, testing, and permission control.

##### 4.3.1.7 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions for agents in Claude Code by analyzing conversation transcripts and codebase state, returning success or failure status via structured output.

##### 4.3.1.8 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether condition is met with optional reason for failure.

#### 4.3.2 Skills & Slash Command System

Skills are domain-specific capabilities invoked via slash commands, allowing users to trigger specialized workflows and reusable processes. The system tracks active skills, converts sessions into documented skill templates, and provides diagnostic skills for debugging and configuration management.

##### 4.3.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within conversations, matching user requests to available domain-specific capabilities with optional arguments.

##### 4.3.2.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Directs Claude to invoke user-invocable skills via the Skill tool when users enter slash commands, using only skills listed in the tool's user-invocable section.

##### 4.3.2.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked in the current session and directs Claude to continue following their guidelines.

##### 4.3.2.4 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts the current session into a reusable skill through multi-round user interviews, analyzing the repeatable process, steps, success criteria, and tool requirements, then generating a SKILL.md file with frontmatter, inputs, goals, and annotated steps.

##### 4.3.2.5 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts intervals to cron expressions, and schedules recurring tasks with support for multiple time formats (5m, every 20 minutes, etc.).

##### 4.3.2.6 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 4.3.2.7 [/stuck (Skill)](system-prompts/skill-stuck.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, checking CPU/memory/state indicators, gathering context, and posting a report to Slack.

##### 4.3.2.8 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Modifies Claude Code configuration by updating settings.json files, with emphasis on reading existing config before merging changes, handling hooks, permissions, and environment variables.

### 4.4 Scheduling and Session Organization

Cron-based scheduling for recurring tasks, session titling for discoverability, and semantic search across session metadata.

#### 4.4.1 Scheduling & Cron Jobs

Cron-based scheduling enables one-shot and recurring task execution with timezone awareness and load distribution, while sleep primitives provide fine-grained timing control and interruptibility for sequential workflows.

##### 4.4.1.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule prompts for future execution using standard 5-field cron syntax in the user's local timezone. Supports one-shot tasks and recurring jobs with jitter; avoid :00 and :30 minute marks when possible to distribute load. Jobs are session-only and auto-expire after 3 days.

##### 4.4.1.2 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input, supporting periodic check-ins and concurrent operation with other tools.

#### 4.4.2 Session Naming, Titling & Metadata

Manages session discoverability and organization through concise title generation and semantic search across session metadata, enabling users to locate and resume relevant work contexts.

##### 4.4.2.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise sentence-case titles (3-7 words) capturing the main goal of a coding session, returning JSON with a single title field.

##### 4.4.2.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Agent that searches and ranks sessions by relevance to user queries, prioritizing exact tag matches, then partial matches, title, branch, and semantic similarity across all session metadata.

---

## 5. Web, Security, and External Integrations

Tools and policies for interacting with external systems — web search, browser automation, GitHub integration, security monitoring, tool discovery, and UI preview capabilities.

### 5.1 Web Search and Browser Automation

Web content retrieval with source attribution, and direct browser control via mouse, keyboard, and screenshot analysis for UI interaction.

#### 5.1.1 Web Search & Content Retrieval

Retrieves current information from the web with mandatory source attribution and domain filtering, then summarizes verbose content while enforcing quote limits and paraphrasing to prevent direct reproduction of untrusted sources.

##### 5.1.1.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff, returning results with markdown hyperlinks. Requires mandatory source attribution in responses and supports domain filtering.

##### 5.1.1.2 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing 125-character quote limits for untrusted domains and paraphrasing to avoid word-for-word reproduction of source material.

#### 5.1.2 Browser Automation & Web Interaction

Direct browser control through mouse, keyboard, and screenshot analysis for UI interaction and web content retrieval. Includes HTML-to-markdown conversion, URL handling with caching, and comprehensive guidelines for managing Chrome sessions, debugging, and error recovery.

##### 5.1.2.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Use mouse and keyboard to interact with a Chrome browser and take screenshots. Consult screenshots to determine element coordinates before clicking, and center the cursor tip on target elements.

##### 5.1.2.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines browser automation actions for Chrome including clicks, typing, scrolling, keyboard input, and element inspection with zoom and hover capabilities.

##### 5.1.2.3 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with a small model, supporting URL redirects and including a 15-minute cache for repeated requests.

##### 5.1.2.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructs Claude to load Chrome browser MCP tools via ToolSearch before calling any mcp__claude-in-chrome__* tool, with specific syntax for selecting and invoking each tool.

##### 5.1.2.5 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides guidelines for effective browser automation including GIF recording, console debugging, avoiding modal dialogs, preventing infinite loops, and managing tab context. Emphasizes checking current tabs at session start and creating new tabs rather than reusing stale IDs.

### 5.2 GitHub Integration & PR Workflows

Seamless GitHub integration enabling Claude to respond to mentions, fetch PR details and comments, and execute automated workflows through GitHub Actions. Provides templates and configuration for installing Claude Code as a GitHub App with configurable permissions and custom prompts.

#### 5.2.1 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and code review comments with diff context, file paths, and line numbers in readable threaded format.

#### 5.2.2 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code on @claude mentions in issues, PRs, and comments with configurable permissions and optional custom prompts.

#### 5.2.3 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, workflow behavior, security considerations, and tool configuration options.

### 5.3 Security Monitoring & Safety Enforcement

Protective layer for autonomous agent actions that evaluates tool usage against threat models, enforces block/allow rules, and detects command injection and prompt injection attacks. Prevents credential leakage, data exfiltration, and destructive operations while enabling authorized security testing.

#### 5.3.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor evaluating autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage. Defines threat model, default allow policy, user intent rules, and evaluation methodology for tool actions.

#### 5.3.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules (git destructive, code execution, cloud operations, production deploy, credential leakage, data exfiltration, etc.) and allow exceptions for security monitoring of autonomous agent actions.

#### 5.3.3 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands for safety classification. Returns the command prefix or 'command_injection_detected' to prevent malicious execution.

#### 5.3.4 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing requests for destructive techniques, DoS attacks, or malicious detection evasion.

#### 5.3.5 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities such as injection, XSS, and OWASP top 10 risks, prioritizing secure code.

#### 5.3.6 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, allowing analysis, reporting, and behavioral questions.

### 5.4 Tool Discovery and UI Presentation

On-demand tool definition fetching with permission-aware fallbacks, and visual comparison interfaces for presenting options and predicting user intent.

#### 5.4.1 Tool Discovery & Deferred Tool Loading

Mechanisms for discovering and fetching tool definitions on-demand, with graceful handling of permission constraints and alternative capability resolution.

##### 5.4.1.1 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool definitions by querying against a tool list, returning complete JSONSchema definitions for matched tools using keyword search or exact name selection.

##### 5.4.1.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude on handling denied tool execution by attempting reasonable alternatives without malicious workarounds, and stopping to explain if the capability is essential.

#### 5.4.2 UI Preview & Option Presentation

Presentation layer for displaying visual comparisons and predicting user intent through side-by-side mockups and contextual suggestions.

##### 5.4.2.1 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for presenting concrete UI mockups, code snippets, diagrams, and configuration examples in monospace boxes for visual comparison.

##### 5.4.2.2 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next based on recent conversation context, avoiding evaluative language and Claude-voice suggestions. Returns only specific 2-12 word suggestions or silence.

---

## 6. Communication, Output, and User Engagement

How Claude communicates with users — direct messaging, output style discipline, usage analytics, and interactive learning workflows that keep responses focused and actionable.

### 6.1 Agent Communication & User Messaging

Direct user communication channels—SendUserMessage for status and decisions, AskUserQuestion for clarification and preferences—enable agents to acknowledge work, checkpoint progress, and gather input. Visual previews support rich decision-making, while agent mentions and side-question handling route context appropriately.

#### 6.1.1 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude that SendUserMessage is the primary channel for user-visible replies, emphasizing immediate acknowledgment for work, checkpoints for progress, and tight, actionable messaging.

#### 6.1.2 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying instructions, and offering implementation choices during execution, with guidance on plan mode usage.

#### 6.1.3 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructs Claude to use the optional preview field on single-select questions to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML.

#### 6.1.4 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and to pass required context to it.

#### 6.1.5 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude to answer a side question directly without tools, as a lightweight separate agent that cannot take actions or promise investigations.

### 6.2 Output Style, Tone & Conciseness

Output discipline enforces direct, polished communication by eliminating filler and inner monologue, leading with answers and outcomes. Summaries distill work into specific, actionable details with precise code references, while response format rules adapt tone based on caller context.

#### 6.2.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler, and focusing text output on decisions needing user input, status updates, and blockers.

#### 6.2.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing specific functions or code for easy user navigation.

#### 6.2.3 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Instructs Claude to produce concise, polished output without filler, repetition, or inner monologue, getting to the point quickly while retaining important information.

#### 6.2.4 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Directs Claude to keep responses short and concise.

#### 6.2.5 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Defines rules for generating concise summaries of coding assistant work in past tense, focusing on user-visible outcomes with specific details in under 8 words.

#### 6.2.6 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise agent action summaries in present tense (-ing form), naming specific files or functions rather than branches.

#### 6.2.7 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise sub-agent reporting and detailed standalone writeups based on caller context. Specifies file path formatting and emoji avoidance.

### 6.3 Usage Analytics and Learning Workflows

Usage pattern analysis for identifying friction and recommending improvements, alongside interactive learning frameworks that engage users in design decisions.

#### 6.3.1 Usage Insights & Workflow Analytics

Analyzes Claude Code usage patterns to surface friction points, validate workflows, and recommend targeted improvements including feature adoption and process optimization. Identifies both immediate wins and ambitious future capabilities.

##### 6.3.1.1 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts by counting only explicit user requests, analyzing satisfaction signals, and categorizing friction points like misunderstood requests, buggy code, or rejected actions.

##### 6.3.1.2 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions from Claude Code usage data, recommending CLAUDE.md additions, features like MCP Servers and Custom Skills, and usage patterns tailored to the user's workflow.

##### 6.3.1.3 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for Claude Code users, using aggregated usage data and coaching tone.

##### 6.3.1.4 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with examples and actionable suggestions.

##### 6.3.1.5 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, with copyable prompts for experimentation.

#### 6.3.2 Learning Mode & Educational Workflows

Interactive learning frameworks that engage users in design and implementation decisions while Claude handles routine coding tasks. Provides contextual educational insights tied to specific codebase patterns rather than generic programming concepts.

##### 6.3.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt that balances task completion with hands-on learning by requesting user contributions for design decisions, business logic, and algorithms while handling routine implementation. Includes TodoList integration and structured request formats with guidance on trade-offs.

##### 6.3.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing in learning mode, focusing on implementation choices specific to the codebase rather than general programming concepts.

---

## 7. API and SDK References

Complete reference documentation for integrating with Claude across languages and platforms — Python, TypeScript, and other language SDKs, Agent SDKs, and API navigation guides.

### 7.1 Claude API SDK References (Python & TypeScript)

Complete API documentation for Python and TypeScript SDKs covering core messaging, streaming, vision, tool use, prompt caching, adaptive thinking, file handling, and batch processing. Includes conceptual foundations and cost optimization strategies across synchronous and asynchronous patterns.

#### 7.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, basic requests, system prompts, vision, prompt caching, adaptive thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

#### 7.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, basic requests, system prompts, vision, prompt caching, adaptive thinking, error handling, multi-turn conversations, compaction, and cost optimization.

#### 7.1.3 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync and async streaming with text_stream, handling thinking blocks and tool use, getting final messages, progress tracking, and error handling. Includes event types and best practices.

#### 7.1.4 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference with quick-start examples, handling different content types including thinking and tool use, tool runner streaming, final message retrieval, and raw SSE format. Includes event types and best practices.

#### 7.1.5 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference with tool runner (beta), MCP tool conversion helpers, manual agentic loops, tool result handling, code execution with file uploads and container reuse, memory tool, and structured outputs with Pydantic and raw schemas.

#### 7.1.6 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, tool result handling, server-side tools, code execution with file uploads, memory tool, and structured outputs with Zod and raw schemas.

#### 7.1.7 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool definitions, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool use.

#### 7.1.8 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading, listing, deleting, and using files in messages with support for PDFs, text documents, and images via file_id references.

#### 7.1.9 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading, listing, deleting, and using files in messages with document and image support via file_id references.

#### 7.1.10 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, which processes Messages API requests asynchronously at 50% cost. Covers batch creation, status polling, result retrieval, cancellation, prompt caching integration, and end-to-end examples.

### 7.2 Claude API SDK References (Other Languages)

API documentation for C#, Go, Java, PHP, Ruby, and raw HTTP (cURL), enabling Claude integration across diverse technology stacks. Each reference covers language-specific patterns for streaming, tool use, thinking, and structured outputs.

#### 7.2.1 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, adaptive thinking, tool use with manual JSON schema, effort parameter, prompt caching, token counting, structured output, and beta features.

#### 7.2.2 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for cURL with basic requests, streaming (SSE), tool use loops, extended thinking, and required headers for Claude API calls.

#### 7.2.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use via BetaToolRunner with automatic schema generation and manual loops, thinking, and server-side tools.

#### 7.2.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference with client initialization, basic requests, streaming, adaptive thinking, annotated tool classes with BetaToolRunner, effort parameter, prompt caching, structured output, and beta features.

#### 7.2.5 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization, basic requests, streaming, tool use manual loops, extended thinking, and beta features with support for Bedrock, Vertex AI, and Foundry.

#### 7.2.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference with client initialization, basic requests, streaming, and beta tool runner with annotated classes for automatic tool execution.

### 7.3 Agent SDK and API Navigation

Agent SDK documentation for building autonomous agents with custom tools and MCP integration, plus centralized routing to model catalogs and error references.

#### 7.3.1 Agent SDK References & Patterns

Python and TypeScript Agent SDK documentation for building autonomous agents with custom tools, MCP integration, permission controls, and session management. Covers agent lifecycle patterns including hooks, subagents, error recovery, and history retrieval.

##### 7.3.1.1 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, session resumption, and history retrieval with async/await examples.

##### 7.3.1.2 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks for tool use, subagent definitions, Playwright MCP integration, and session resumption with async iteration examples.

##### 7.3.1.3 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query() and ClaudeSDKClient interfaces, built-in tools, permission modes, MCP support, hooks, subagents, and error handling patterns.

##### 7.3.1.4 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

TypeScript Agent SDK reference with installation, query() interface, built-in tools, permission modes, MCP integration, hooks, subagents, and session history retrieval with typed message handling.

#### 7.3.2 API Reference Navigation & Documentation Sources

Centralized access to Claude API documentation, model catalogs, and error handling references. Provides routing guidance for building with Claude across languages and use cases, with live documentation fetching and comprehensive SDK navigation.

##### 7.3.2.1 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Current and legacy Claude model IDs with context windows, max output tokens, and pricing; includes user request resolution mapping to exact model aliases.

##### 7.3.2.2 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Curated WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, with extraction prompts for each topic. Includes model pricing, core features, media handling, API operations, tools, and SDK repositories across multiple languages.

##### 7.3.2.3 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 429, 500, 529) with causes, fixes, and typed exception classes for Python and TypeScript SDKs.

##### 7.3.2.4 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking and effort parameters, compaction for long conversations, and comprehensive reading guide.

##### 7.3.2.5 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, routing users to appropriate sections based on their use case (classification, streaming, tool use, batches, files, agents).

##### 7.3.2.6 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing actionable guidance, and referencing local project files. Covers installation, hooks, skills, MCP servers, agent configuration, and API features.
