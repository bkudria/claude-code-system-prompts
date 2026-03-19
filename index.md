# Claude Code System Prompts Index

Operational infrastructure for deploying Claude as an autonomous coding agent, covering everything needed to safely plan, execute, and coordinate complex software engineering work across files, tools, APIs, and multi-agent systems.

## Table of Contents

1. [Bash and Shell Operations](#1-bash-and-shell-operations)
   1. [Execution Rules and Conventions](#11-execution-rules-and-conventions)
      1. [Bash Tool Core Behavior Rules](#111-bash-tool-core-behavior-rules)
         1. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
         2. [Bash (command description) [Tool Description]](#1112-bash-command-description-tool-description)
         3. [Bash (maintain cwd) [Tool Description]](#1113-bash-maintain-cwd-tool-description)
         4. [Bash (no newlines) [Tool Description]](#1114-bash-no-newlines-tool-description)
         5. [Bash (parallel commands) [Tool Description]](#1115-bash-parallel-commands-tool-description)
         6. [Bash (sequential commands) [Tool Description]](#1116-bash-sequential-commands-tool-description)
         7. [Bash (semicolon usage) [Tool Description]](#1117-bash-semicolon-usage-tool-description)
         8. [Bash (quote file paths) [Tool Description]](#1118-bash-quote-file-paths-tool-description)
         9. [Bash (timeout) [Tool Description]](#1119-bash-timeout-tool-description)
         10. [Bash (working directory) [Tool Description]](#11110-bash-working-directory-tool-description)
         11. [Bash (verify parent directory) [Tool Description]](#11111-bash-verify-parent-directory-tool-description)
         12. [Bash (prefer dedicated tools) [Tool Description]](#11112-bash-prefer-dedicated-tools-tool-description)
         13. [Bash (built-in tools note) [Tool Description]](#11113-bash-built-in-tools-note-tool-description)
         14. [Bash (sleep — keep short) [Tool Description]](#11114-bash-sleep-—-keep-short-tool-description)
         15. [Bash (sleep — run immediately) [Tool Description]](#11115-bash-sleep-—-run-immediately-tool-description)
         16. [Bash (sleep — use check commands) [Tool Description]](#11116-bash-sleep-—-use-check-commands-tool-description)
         17. [Bash (sleep — no polling background tasks) [Tool Description]](#11117-bash-sleep-—-no-polling-background-tasks-tool-description)
         18. [One of six rules for using sleep command (System Prompt)](#11118-one-of-six-rules-for-using-sleep-command-system-prompt)
      2. [Bash Command Documentation](#112-bash-command-documentation)
         1. [Bash command description writer (Agent Prompt)](#1121-bash-command-description-writer-agent-prompt)
   2. [Sandbox Security and Restrictions](#12-sandbox-security-and-restrictions)
      1. [Bash Sandbox Security and Restrictions](#121-bash-sandbox-security-and-restrictions)
         1. [Bash (sandbox — adjust settings) [Tool Description]](#1211-bash-sandbox-—-adjust-settings-tool-description)
         2. [Bash (sandbox — default to sandbox) [Tool Description]](#1212-bash-sandbox-—-default-to-sandbox-tool-description)
         3. [Bash (sandbox — evidence: access denied) [Tool Description]](#1213-bash-sandbox-—-evidence-access-denied-tool-description)
         4. [Bash (sandbox — evidence list header) [Tool Description]](#1214-bash-sandbox-—-evidence-list-header-tool-description)
         5. [Bash (sandbox — evidence: network failures) [Tool Description]](#1215-bash-sandbox-—-evidence-network-failures-tool-description)
         6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1216-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
         7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1217-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
         8. [Bash (sandbox — explain restriction) [Tool Description]](#1218-bash-sandbox-—-explain-restriction-tool-description)
         9. [Bash (sandbox — failure evidence condition) [Tool Description]](#1219-bash-sandbox-—-failure-evidence-condition-tool-description)
         10. [Bash (sandbox — mandatory mode) [Tool Description]](#12110-bash-sandbox-—-mandatory-mode-tool-description)
         11. [Bash (sandbox — no exceptions) [Tool Description]](#12111-bash-sandbox-—-no-exceptions-tool-description)
         12. [Bash (sandbox — no sensitive paths) [Tool Description]](#12112-bash-sandbox-—-no-sensitive-paths-tool-description)
         13. [Bash (sandbox — per-command) [Tool Description]](#12113-bash-sandbox-—-per-command-tool-description)
         14. [Bash (sandbox — response header) [Tool Description]](#12114-bash-sandbox-—-response-header-tool-description)
         15. [Bash (sandbox — retry without sandbox) [Tool Description]](#12115-bash-sandbox-—-retry-without-sandbox-tool-description)
         16. [Bash (sandbox — tmpdir) [Tool Description]](#12116-bash-sandbox-—-tmpdir-tool-description)
         17. [Bash (sandbox — user permission prompt) [Tool Description]](#12117-bash-sandbox-—-user-permission-prompt-tool-description)
      2. [Scratchpad and Temporary File Management](#122-scratchpad-and-temporary-file-management)
         1. [Scratchpad directory (System Prompt)](#1221-scratchpad-directory-system-prompt)
   3. [Bash Alternatives for File and Search Operations](#13-bash-alternatives-for-file-and-search-operations)
      1. [Bash (alternative — communication) [Tool Description]](#131-bash-alternative-—-communication-tool-description)
      2. [Bash (alternative — content search) [Tool Description]](#132-bash-alternative-—-content-search-tool-description)
      3. [Bash (alternative — edit files) [Tool Description]](#133-bash-alternative-—-edit-files-tool-description)
      4. [Bash (alternative — file search) [Tool Description]](#134-bash-alternative-—-file-search-tool-description)
      5. [Bash (alternative — read files) [Tool Description]](#135-bash-alternative-—-read-files-tool-description)
      6. [Bash (alternative — write files) [Tool Description]](#136-bash-alternative-—-write-files-tool-description)
      7. [Tool usage (edit files) [System Prompt]](#137-tool-usage-edit-files-system-prompt)
      8. [Tool usage (read files) [System Prompt]](#138-tool-usage-read-files-system-prompt)
      9. [Tool usage (reserve Bash) [System Prompt]](#139-tool-usage-reserve-bash-system-prompt)
      10. [Tool usage (search content) [System Prompt]](#1310-tool-usage-search-content-system-prompt)
      11. [Tool usage (search files) [System Prompt]](#1311-tool-usage-search-files-system-prompt)
      12. [Tool usage (create files) [System Prompt]](#1312-tool-usage-create-files-system-prompt)
2. [File System, Search, and Editor Integration](#2-file-system-search-and-editor-integration)
   1. [File System Tool Descriptions](#21-file-system-tool-descriptions)
      1. [ReadFile (Tool Description)](#211-readfile-tool-description)
      2. [Write (Tool Description)](#212-write-tool-description)
      3. [Edit (Tool Description)](#213-edit-tool-description)
      4. [Glob (Tool Description)](#214-glob-tool-description)
      5. [Grep (Tool Description)](#215-grep-tool-description)
      6. [NotebookEdit (Tool Description)](#216-notebookedit-tool-description)
      7. [LSP (Tool Description)](#217-lsp-tool-description)
   2. [Codebase Exploration and Navigation](#22-codebase-exploration-and-navigation)
      1. [Explore (Agent Prompt)](#221-explore-agent-prompt)
      2. [Explore strengths and guidelines (Agent Prompt)](#222-explore-strengths-and-guidelines-agent-prompt)
      3. [Tool usage (direct search) [System Prompt]](#223-tool-usage-direct-search-system-prompt)
      4. [Tool usage (delegate exploration) [System Prompt]](#224-tool-usage-delegate-exploration-system-prompt)
      5. [CLAUDE.md creation (Agent Prompt)](#225-claudemd-creation-agent-prompt)
   3. [File State Warnings and Editor Context](#23-file-state-warnings-and-editor-context)
      1. [File State and Read Warnings](#231-file-state-and-read-warnings)
         1. [File exists but empty (System Reminder)](#2311-file-exists-but-empty-system-reminder)
         2. [File truncated (System Reminder)](#2312-file-truncated-system-reminder)
         3. [File shorter than offset (System Reminder)](#2313-file-shorter-than-offset-system-reminder)
         4. [File modified by user or linter (System Reminder)](#2314-file-modified-by-user-or-linter-system-reminder)
      2. [IDE and Editor Integration](#232-ide-and-editor-integration)
         1. [File opened in IDE (System Reminder)](#2321-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#2322-lines-selected-in-ide-system-reminder)
   4. [Browser Automation and Web Interaction](#24-browser-automation-and-web-interaction)
      1. [Computer (Tool Description)](#241-computer-tool-description)
      2. [Computer action (Tool Parameter)](#242-computer-action-tool-parameter)
      3. [Chrome browser MCP tools (System Prompt)](#243-chrome-browser-mcp-tools-system-prompt)
      4. [Claude in Chrome browser automation (System Prompt)](#244-claude-in-chrome-browser-automation-system-prompt)
      5. [WebFetch (Tool Description)](#245-webfetch-tool-description)
      6. [WebSearch (Tool Description)](#246-websearch-tool-description)
      7. [WebFetch summarizer (Agent Prompt)](#247-webfetch-summarizer-agent-prompt)
3. [Multi-Agent Coordination and Memory](#3-multi-agent-coordination-and-memory)
   1. [Multi-Agent Team Coordination](#31-multi-agent-team-coordination)
      1. [TeammateTool (Tool Description)](#311-teammatetool-tool-description)
      2. [TeamDelete (Tool Description)](#312-teamdelete-tool-description)
      3. [TaskList (teammate workflow) [Tool Description]](#313-tasklist-teammate-workflow-tool-description)
      4. [SendMessageTool (Tool Description)](#314-sendmessagetool-tool-description)
      5. [SendMessageTool (non-agent-teams) [Tool Description]](#315-sendmessagetool-non-agent-teams-tool-description)
      6. [Team Coordination (System Reminder)](#316-team-coordination-system-reminder)
      7. [Team Shutdown (System Reminder)](#317-team-shutdown-system-reminder)
      8. [Teammate Communication (System Prompt)](#318-teammate-communication-system-prompt)
      9. [Team memory content display (System Prompt)](#319-team-memory-content-display-system-prompt)
      10. [How to use the SendUserMessage tool (System Prompt)](#3110-how-to-use-the-sendusermessage-tool-system-prompt)
   2. [Subagent Orchestration and Delegation](#32-subagent-orchestration-and-delegation)
      1. [Agent (usage notes) [Tool Description]](#321-agent-usage-notes-tool-description)
      2. [Agent (when to launch subagents) [Tool Description]](#322-agent-when-to-launch-subagents-tool-description)
      3. [Tool usage (subagent guidance) [System Prompt]](#323-tool-usage-subagent-guidance-system-prompt)
      4. [Writing subagent prompts (System Prompt)](#324-writing-subagent-prompts-system-prompt)
      5. [Subagent delegation examples (System Prompt)](#325-subagent-delegation-examples-system-prompt)
      6. [Fork usage guidelines (System Prompt)](#326-fork-usage-guidelines-system-prompt)
      7. [Worker fork execution (Agent Prompt)](#327-worker-fork-execution-agent-prompt)
      8. [/batch slash command (Agent Prompt)](#328-batch-slash-command-agent-prompt)
      9. [Agent mention (System Reminder)](#329-agent-mention-system-reminder)
   3. [Session Memory and Context Persistence](#33-session-memory-and-context-persistence)
      1. [Memory file contents (System Reminder)](#331-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#332-nested-memory-contents-system-reminder)
      3. [Session memory update instructions (Agent Prompt)](#333-session-memory-update-instructions-agent-prompt)
      4. [Dream memory consolidation (Agent Prompt)](#334-dream-memory-consolidation-agent-prompt)
      5. [Determine which memory files to attach (Agent Prompt)](#335-determine-which-memory-files-to-attach-agent-prompt)
      6. [Memory description of user feedback (System Prompt)](#336-memory-description-of-user-feedback-system-prompt)
      7. [Description part of memory instructions (System Prompt)](#337-description-part-of-memory-instructions-system-prompt)
      8. [Agent memory instructions (System Prompt)](#338-agent-memory-instructions-system-prompt)
      9. [Session memory template (Data)](#339-session-memory-template-data)
   4. [Context Compaction and Conversation Summarization](#34-context-compaction-and-conversation-summarization)
      1. [Context compaction summary (System Prompt)](#341-context-compaction-summary-system-prompt)
      2. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#342-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
      3. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#343-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
      4. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#344-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
      5. [Conversation summarization (Agent Prompt)](#345-conversation-summarization-agent-prompt)
      6. [Recent Message Summarization (Agent Prompt)](#346-recent-message-summarization-agent-prompt)
      7. [Compact file reference (System Reminder)](#347-compact-file-reference-system-reminder)
4. [Planning, Task Management, and Workflow Automation](#4-planning-task-management-and-workflow-automation)
   1. [Planning and Task Tracking](#41-planning-and-task-tracking)
      1. [Planning Mode System](#411-planning-mode-system)
         1. [EnterPlanMode (Tool Description)](#4111-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#4112-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#4113-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#4114-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#4115-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#4116-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#4117-exited-plan-mode-system-reminder)
         8. [Plan file reference (System Reminder)](#4118-plan-file-reference-system-reminder)
         9. [Verify plan reminder (System Reminder)](#4119-verify-plan-reminder-system-reminder)
         10. [Phase four of plan mode (System Prompt)](#41110-phase-four-of-plan-mode-system-prompt)
         11. [Plan mode (enhanced) [Agent Prompt]](#41111-plan-mode-enhanced-agent-prompt)
      2. [Task Management and Progress Tracking](#412-task-management-and-progress-tracking)
         1. [TodoWrite (Tool Description)](#4121-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#4122-taskcreate-tool-description)
         3. [Tool usage (task management) [System Prompt]](#4123-tool-usage-task-management-system-prompt)
         4. [TodoWrite reminder (System Reminder)](#4124-todowrite-reminder-system-reminder)
         5. [Task tools reminder (System Reminder)](#4125-task-tools-reminder-system-reminder)
         6. [Task status (System Reminder)](#4126-task-status-system-reminder)
   2. [Autonomous Execution and Scheduling](#42-autonomous-execution-and-scheduling)
      1. [Autonomous and Auto Mode Execution](#421-autonomous-and-auto-mode-execution)
         1. [Auto mode (System Prompt)](#4211-auto-mode-system-prompt)
         2. [Worker instructions (System Prompt)](#4212-worker-instructions-system-prompt)
         3. [System section (System Prompt)](#4213-system-section-system-prompt)
         4. [Tool execution denied (System Prompt)](#4214-tool-execution-denied-system-prompt)
         5. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#4215-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      2. [Scheduling and Cron Jobs](#422-scheduling-and-cron-jobs)
         1. [CronCreate (Tool Description)](#4221-croncreate-tool-description)
         2. [Sleep (Tool Description)](#4222-sleep-tool-description)
   3. [Hooks System Configuration and Lifecycle](#43-hooks-system-configuration-and-lifecycle)
      1. [Hooks Configuration (System Prompt)](#431-hooks-configuration-system-prompt)
      2. [Hook condition evaluator (Agent Prompt)](#432-hook-condition-evaluator-agent-prompt)
      3. [Agent Hook (Agent Prompt)](#433-agent-hook-agent-prompt)
      4. [Hook additional context (System Reminder)](#434-hook-additional-context-system-reminder)
      5. [Hook blocking error (System Reminder)](#435-hook-blocking-error-system-reminder)
      6. [Hook stopped continuation (System Reminder)](#436-hook-stopped-continuation-system-reminder)
      7. [Hook stopped continuation prefix (System Reminder)](#437-hook-stopped-continuation-prefix-system-reminder)
      8. [Hook success (System Reminder)](#438-hook-success-system-reminder)
   4. [Skills System and Slash Commands](#44-skills-system-and-slash-commands)
      1. [Skill (Tool Description)](#441-skill-tool-description)
      2. [Tool usage (skill invocation) [System Prompt]](#442-tool-usage-skill-invocation-system-prompt)
      3. [Invoked skills (System Reminder)](#443-invoked-skills-system-reminder)
      4. [Skillify Current Session (System Prompt)](#444-skillify-current-session-system-prompt)
      5. [/init CLAUDE.md and skill setup (new version) [Skill]](#445-init-claudemd-and-skill-setup-new-version-skill)
      6. [Update Claude Code Config (Skill)](#446-update-claude-code-config-skill)
      7. [update-config (7-step verification flow) [Skill]](#447-update-config-7-step-verification-flow-skill)
      8. [/loop slash command (Skill)](#448-loop-slash-command-skill)
      9. [Debugging (Skill)](#449-debugging-skill)
      10. [/stuck slash command (Skill)](#4410-stuck-slash-command-skill)
      11. [Create verifier skills (Skill)](#4411-create-verifier-skills-skill)
5. [API and SDK Documentation](#5-api-and-sdk-documentation)
   1. [Claude API Reference Documentation](#51-claude-api-reference-documentation)
      1. [Claude API reference — Python (Data)](#511-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#512-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#513-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#514-claude-api-reference-—-java-data)
      5. [Claude API reference — C# (Data)](#515-claude-api-reference-—-c-data)
      6. [Claude API reference — PHP (Data)](#516-claude-api-reference-—-php-data)
      7. [Claude API reference — Ruby (Data)](#517-claude-api-reference-—-ruby-data)
      8. [Claude API reference — cURL (Data)](#518-claude-api-reference-—-curl-data)
      9. [Claude model catalog (Data)](#519-claude-model-catalog-data)
      10. [HTTP error codes reference (Data)](#5110-http-error-codes-reference-data)
      11. [Live documentation sources (Data)](#5111-live-documentation-sources-data)
   2. [Agent SDK Reference and Patterns](#52-agent-sdk-reference-and-patterns)
      1. [Agent SDK reference — Python (Data)](#521-agent-sdk-reference-—-python-data)
      2. [Agent SDK reference — TypeScript (Data)](#522-agent-sdk-reference-—-typescript-data)
      3. [Agent SDK patterns — Python (Data)](#523-agent-sdk-patterns-—-python-data)
      4. [Agent SDK patterns — TypeScript (Data)](#524-agent-sdk-patterns-—-typescript-data)
   3. [Tool Use and Streaming API References](#53-tool-use-and-streaming-api-references)
      1. [Tool use concepts (Data)](#531-tool-use-concepts-data)
      2. [Tool use reference — Python (Data)](#532-tool-use-reference-—-python-data)
      3. [Tool use reference — TypeScript (Data)](#533-tool-use-reference-—-typescript-data)
      4. [Streaming reference — Python (Data)](#534-streaming-reference-—-python-data)
      5. [Streaming reference — TypeScript (Data)](#535-streaming-reference-—-typescript-data)
      6. [Files API reference — Python (Data)](#536-files-api-reference-—-python-data)
      7. [Files API reference — TypeScript (Data)](#537-files-api-reference-—-typescript-data)
      8. [Message Batches API reference — Python (Data)](#538-message-batches-api-reference-—-python-data)
   4. [Build with Claude API Skills](#54-build-with-claude-api-skills)
      1. [Build with Claude API (Skill)](#541-build-with-claude-api-skill)
      2. [Build with Claude API (reference guide) [Skill]](#542-build-with-claude-api-reference-guide-skill)
      3. [Claude guide agent (Agent Prompt)](#543-claude-guide-agent-agent-prompt)
6. [Code Quality, Security, and Git Workflows](#6-code-quality-security-and-git-workflows)
   1. [Git Operations and Version Control](#61-git-operations-and-version-control)
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
   2. [Security Monitoring and Vulnerability Analysis](#62-security-monitoring-and-vulnerability-analysis)
      1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#621-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#622-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      3. [/security-review slash command (Agent Prompt)](#623-security-review-slash-command-agent-prompt)
      4. [Bash command prefix detection (Agent Prompt)](#624-bash-command-prefix-detection-agent-prompt)
      5. [Censoring assistance with malicious activities (System Prompt)](#625-censoring-assistance-with-malicious-activities-system-prompt)
      6. [Doing tasks (security) [System Prompt]](#626-doing-tasks-security-system-prompt)
      7. [Malware analysis after Read tool call (System Reminder)](#627-malware-analysis-after-read-tool-call-system-reminder)
   3. [Code Quality and Review](#63-code-quality-and-review)
      1. [Verification specialist (Agent Prompt)](#631-verification-specialist-agent-prompt)
      2. [/review-pr slash command (Agent Prompt)](#632-review-pr-slash-command-agent-prompt)
      3. [/pr-comments slash command (Agent Prompt)](#633-pr-comments-slash-command-agent-prompt)
      4. [Simplify (Skill)](#634-simplify-skill)
      5. [Verification specialist (Skill)](#635-verification-specialist-skill)
      6. [New diagnostics detected (System Reminder)](#636-new-diagnostics-detected-system-reminder)
   4. [Coding Task Execution Guidelines](#64-coding-task-execution-guidelines)
      1. [Doing tasks (software engineering focus) [System Prompt]](#641-doing-tasks-software-engineering-focus-system-prompt)
      2. [Doing tasks (avoid over-engineering) [System Prompt]](#642-doing-tasks-avoid-over-engineering-system-prompt)
      3. [Doing tasks (no premature abstractions) [System Prompt]](#643-doing-tasks-no-premature-abstractions-system-prompt)
      4. [Doing tasks (no unnecessary additions) [System Prompt]](#644-doing-tasks-no-unnecessary-additions-system-prompt)
      5. [Doing tasks (no unnecessary error handling) [System Prompt]](#645-doing-tasks-no-unnecessary-error-handling-system-prompt)
      6. [Doing tasks (no compatibility hacks) [System Prompt]](#646-doing-tasks-no-compatibility-hacks-system-prompt)
      7. [Doing tasks (minimize file creation) [System Prompt]](#647-doing-tasks-minimize-file-creation-system-prompt)
      8. [Doing tasks (read before modifying) [System Prompt]](#648-doing-tasks-read-before-modifying-system-prompt)
      9. [Doing tasks (ambitious tasks) [System Prompt]](#649-doing-tasks-ambitious-tasks-system-prompt)
      10. [Doing tasks (blocked approach) [System Prompt]](#6410-doing-tasks-blocked-approach-system-prompt)
      11. [Doing tasks (no time estimates) [System Prompt]](#6411-doing-tasks-no-time-estimates-system-prompt)
      12. [Doing tasks (help and feedback) [System Prompt]](#6412-doing-tasks-help-and-feedback-system-prompt)
      13. [Executing actions with care (System Prompt)](#6413-executing-actions-with-care-system-prompt)
7. [Agent Design, Communication, and Operations](#7-agent-design-communication-and-operations)
   1. [Agent Architecture and Configuration](#71-agent-architecture-and-configuration)
      1. [Agent Design and Creation](#711-agent-design-and-creation)
         1. [Agent creation architect (Agent Prompt)](#7111-agent-creation-architect-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#7112-session-search-assistant-agent-prompt)
         3. [Coding session title generator (Agent Prompt)](#7113-coding-session-title-generator-agent-prompt)
         4. [Status line setup (Agent Prompt)](#7114-status-line-setup-agent-prompt)
         5. [Common suffix (response format) [Agent Prompt]](#7115-common-suffix-response-format-agent-prompt)
         6. [Prompt Suggestion Generator v2 (Agent Prompt)](#7116-prompt-suggestion-generator-v2-agent-prompt)
      2. [Documentation Generation and Management](#712-documentation-generation-and-management)
         1. [Update Magic Docs (Agent Prompt)](#7121-update-magic-docs-agent-prompt)
      3. [Tool Discovery and Search](#713-tool-discovery-and-search)
         1. [ToolSearch (second part) [Tool Description]](#7131-toolsearch-second-part-tool-description)
   2. [Output Style and Communication](#72-output-style-and-communication)
      1. [Output efficiency (System Prompt)](#721-output-efficiency-system-prompt)
      2. [Tone and style (code references) [System Prompt]](#722-tone-and-style-code-references-system-prompt)
      3. [Tone and style (concise output — short) [System Prompt]](#723-tone-and-style-concise-output-—-short-system-prompt)
      4. [Output style active (System Reminder)](#724-output-style-active-system-reminder)
      5. [Agent thread notes (System Prompt)](#725-agent-thread-notes-system-prompt)
      6. [Agent Summary Generation (System Prompt)](#726-agent-summary-generation-system-prompt)
   3. [User Interaction and Clarification Tools](#73-user-interaction-and-clarification-tools)
      1. [AskUserQuestion (Tool Description)](#731-askuserquestion-tool-description)
      2. [AskUserQuestion (preview field) [Tool Description]](#732-askuserquestion-preview-field-tool-description)
      3. [Option previewer (System Prompt)](#733-option-previewer-system-prompt)
   4. [Resource Monitoring and Session State](#74-resource-monitoring-and-session-state)
      1. [Resource and Budget Monitoring](#741-resource-and-budget-monitoring)
         1. [Token usage (System Reminder)](#7411-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#7412-usd-budget-system-reminder)
         3. [MCP resource no content (System Reminder)](#7413-mcp-resource-no-content-system-reminder)
         4. [MCP resource no displayable content (System Reminder)](#7414-mcp-resource-no-displayable-content-system-reminder)
      2. [Session and Workflow State Management](#742-session-and-workflow-state-management)
         1. [Session continuation (System Reminder)](#7421-session-continuation-system-reminder)
         2. [/btw side question (System Reminder)](#7422-btw-side-question-system-reminder)
   5. [Analytics, Learning, and CI/CD Integration](#75-analytics-learning-and-cicd-integration)
      1. [Usage Insights and Analytics](#751-usage-insights-and-analytics)
         1. [Insights at a glance summary (System Prompt)](#7511-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7512-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7513-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7514-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7515-insights-suggestions-system-prompt)
      2. [Learning Mode and Educational Workflows](#752-learning-mode-and-educational-workflows)
         1. [Learning mode (System Prompt)](#7521-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7522-learning-mode-insights-system-prompt)
      3. [GitHub Integration and CI/CD](#753-github-integration-and-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#7531-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#7532-github-app-installation-pr-description-data)

---

## 1. Bash and Shell Operations

Rules, security constraints, and best practices governing bash command execution, including sandbox restrictions, tool prioritization over shell equivalents, and command documentation conventions.

### 1.1 Execution Rules and Conventions

Behavioral patterns for running bash commands efficiently: parallelism, path handling, quoting, sleep usage, and when to prefer dedicated tools over shell commands.

#### 1.1.1 Bash Tool Core Behavior Rules

Bash command execution follows specific patterns for efficiency and clarity: run independent commands in parallel, chain dependent commands with `&&`, use absolute paths to maintain working directory state, and quote file paths containing spaces. Descriptions should explain complex commands while keeping simple ones brief. Sleep should be minimal and reserved for polling external processes via check commands rather than retrying failures. Prefer dedicated tools over bash for file operations, searching, and reading.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

##### 1.1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs Claude to write clear, concise descriptions of bash commands, keeping simple commands brief and providing context for complex piped or obscure commands.

##### 1.1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain the current working directory by using absolute paths and avoiding cd unless explicitly requested.

##### 1.1.1.4 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Directs Claude not to use newlines to separate bash commands.

##### 1.1.1.5 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to run independent bash commands as parallel tool calls in a single message for efficiency.

##### 1.1.1.6 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent bash commands using `&&` in a single call when they must run sequentially.

##### 1.1.1.7 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons (`;`) in bash only when running commands sequentially but not caring if earlier commands fail.

##### 1.1.1.8 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Directs Claude to always quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Documents that Claude may specify an optional timeout in milliseconds for bash commands, with configurable maximum and default values.

##### 1.1.1.10 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that bash working directory persists between commands but shell state does not, with environment initialized from user profile.

##### 1.1.1.11 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directories exist using `ls` before creating new files or directories.

##### 1.1.1.12 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat, and similar read-only searching commands, preferring dedicated tools for better user experience.

##### 1.1.1.13 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and easier permission review than Bash equivalents.

##### 1.1.1.14 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep bash sleep durations short (1-5 seconds) to avoid blocking the user.

##### 1.1.1.15 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between bash commands that can run immediately.

##### 1.1.1.16 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` rather than sleeping when polling external processes.

##### 1.1.1.17 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background`, as the system will notify when they complete.

##### 1.1.1.18 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; instead diagnose root causes.

#### 1.1.2 Bash Command Documentation

Produces clear, concise descriptions of bash commands in active voice, scaling detail based on command complexity to balance brevity with necessary context.

##### 1.1.2.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief while adding context for complex piped or flag-heavy operations.

### 1.2 Sandbox Security and Restrictions

Sandbox enforcement policies that restrict file access, network operations, and sensitive paths, with guidance on detecting restriction errors and retrying with sandbox disabled.

#### 1.2.1 Bash Sandbox Security and Restrictions

Bash commands run within a sandbox by default that restricts file access, network connections, and socket operations. When sandbox restrictions cause failures—indicated by access denied, operation not permitted, or network errors—Claude should explain the restriction and retry with sandbox disabled. Sensitive paths like SSH keys and credential files cannot be allowlisted. Each command is evaluated independently for sandbox mode, and temporary files must use `$TMPDIR` or `${SANDBOX_TMPDIR_FN()}` rather than `/tmp`.

##### 1.2.1.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to work with the user to adjust sandbox settings if a command fails due to sandbox restrictions.

##### 1.2.1.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Directs Claude to default to running commands within the sandbox and only bypass it when the user requests or sandbox restrictions are evident.

##### 1.2.1.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

##### 1.2.1.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that sandbox restrictions caused command failures.

##### 1.2.1.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

##### 1.2.1.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "operation not permitted" errors for file and network operations as evidence of sandbox restrictions.

##### 1.2.1.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions in bash command execution.

##### 1.2.1.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

##### 1.2.1.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a bash command fails with evidence of sandbox restrictions, distinguishing sandbox-related failures from other causes like missing files or network issues.

##### 1.2.1.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

##### 1.2.1.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Specifies that bash commands cannot run outside the sandbox under any circumstances.

##### 1.2.1.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

##### 1.2.1.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each bash command individually and default to sandbox mode for future commands, even after running commands with `dangerouslyDisableSandbox: true`.

##### 1.2.1.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provides a header phrase for Claude's response when encountering sandbox-caused command failures.

##### 1.2.1.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry a bash command with `dangerouslyDisableSandbox: true` when sandbox failure occurs, without asking the user.

##### 1.2.1.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Instructs Claude to use the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode, never `/tmp` directly.

##### 1.2.1.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

#### 1.2.2 Scratchpad and Temporary File Management

Isolates temporary files and working artifacts in a session-specific scratchpad directory rather than system temp locations, enabling organized intermediate storage.

##### 1.2.2.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, supporting intermediate results, scripts, and working files.

### 1.3 Bash Alternatives for File and Search Operations

Dedicated tools provide better user experience and clearer permission review than bash equivalents. Use Read for file access instead of cat or head, Write for file creation instead of echo redirection, Edit for modifications instead of sed or awk, Glob for file discovery instead of find or ls, and Grep for content search instead of grep or rg. Reserve bash exclusively for system commands and terminal operations that cannot be handled by specialized tools.

#### 1.3.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Directs Claude to output text directly rather than using echo or printf for communication.

#### 1.3.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs Claude to use the Grep tool for content search instead of grep or rg commands.

#### 1.3.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool for file editing instead of sed or awk.

#### 1.3.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs Claude to use the Glob tool for file search instead of find or ls commands.

#### 1.3.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool for file reading instead of cat, head, or tail.

#### 1.3.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs Claude to use the Write tool for file writing instead of echo or cat.

#### 1.3.7 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Instructs Claude to use the Edit tool for file modifications instead of sed or awk.

#### 1.3.8 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool for file access instead of cat, head, tail, or sed.

#### 1.3.9 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve Bash exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

#### 1.3.10 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Instructs Claude to use the Grep tool for file content searching instead of grep or rg.

#### 1.3.11 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool for file discovery instead of find or ls.

#### 1.3.12 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use Write tool instead of cat heredoc or echo redirection for file creation.

---

## 2. File System, Search, and Editor Integration

Specialized tools for file access, content search, codebase navigation, and IDE integration, including warnings about file state anomalies and editor context notifications.

### 2.1 File System Tool Descriptions

Specialized filesystem tools handle distinct operations: ReadFile accesses files with support for images, PDFs, and notebooks; Write creates new files or complete rewrites; Edit performs targeted string replacements; Glob discovers files by pattern matching; Grep searches content with regex and filtering. LSP provides code intelligence for definition lookup, references, and symbol navigation. These tools require absolute paths and offer better performance and permission transparency than bash equivalents.

#### 2.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges for large files), Jupyter notebooks, and line-limited reading. Absolute paths required.

#### 2.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the filesystem with overwrite capability. Prefer Edit for modifications; use only for new files or complete rewrites. Avoid creating documentation unless explicitly requested.

#### 2.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with guidance on preserving indentation, preferring existing files over new ones, and using `replace_all` for renaming across files.

#### 2.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob syntax to find files by name across any codebase size, returning results sorted by modification time.

#### 2.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search using ripgrep with regex support, file filtering by glob or type, and multiple output modes. Supports multiline pattern matching and optimized permissions handling.

#### 2.1.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing content, inserting new cells, or deleting existing cells using 0-indexed cell numbers.

#### 2.1.7 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Language Server Protocol integration providing code intelligence operations including definition lookup, reference finding, hover information, symbol search, and call hierarchy analysis.

### 2.2 Codebase Exploration and Navigation

Read-only search and discovery mechanisms for understanding codebases through pattern matching and file inspection. These tools enable efficient navigation via glob patterns and regex, support delegation to specialized subagents for complex research, and generate architecture documentation capturing project-specific patterns.

#### 2.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist for navigating codebases using glob patterns, regex grep, and file reading, with strict prohibition on file modifications and emphasis on efficient parallel tool usage.

#### 2.2.2 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines strengths and behavioral guidelines for the Explore subagent, emphasizing read-only codebase search, multi-strategy investigation, and avoiding unnecessary file creation.

#### 2.2.3 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob and Grep directly for simple, directed codebase searches.

#### 2.2.4 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Instructs Claude to use Task tool with exploration subagent for broader codebase research when simple searches prove insufficient or exceed query limits.

#### 2.2.5 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md documentation files, capturing common commands, high-level architecture, and project-specific patterns for future Claude Code instances.

### 2.3 File State Warnings and Editor Context

Alerts for file access anomalies (empty files, truncation, offset errors) and IDE notifications that inform Claude when files are opened or line ranges are selected.

#### 2.3.1 File State and Read Warnings

Alerts that communicate file access anomalies—empty files, truncated content, offset misalignment, and external modifications—enabling Claude to handle edge cases and request additional data when needed.

##### 2.3.1.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 2.3.1.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs use of the Read tool to access additional content.

##### 2.3.1.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that the requested file read offset exceeds the file's actual length.

##### 2.3.1.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified and provides a snippet of changes to account for in subsequent work.

#### 2.3.2 IDE and Editor Integration

Notifications that contextualize user interactions with the IDE, informing Claude when files are opened or specific line ranges are selected to enable targeted assistance.

##### 2.3.2.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 2.3.2.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude that the user has selected specific lines from a file in the IDE, providing the line range and file content for context.

### 2.4 Browser Automation and Web Interaction

Suite of tools for programmatic web interaction through browser automation, content fetching, and search capabilities. Enables UI manipulation via mouse and keyboard, GIF recording, console debugging, and intelligent HTML-to-markdown conversion with caching and source attribution.

#### 2.4.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse, keyboard, and screenshots, with guidance on precise cursor positioning and element interaction.

#### 2.4.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines browser automation actions for Chrome including clicks, typing, scrolling, keyboard input, dragging, zooming, and hover operations for UI interaction.

#### 2.4.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the tool name in select syntax before calling the corresponding mcp__claude-in-chrome__ function.

#### 2.4.4 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with smooth playback, console debugging with pattern filtering, avoiding JavaScript dialogs that block events, preventing infinite loops, and managing tab context with fresh IDs at session start.

#### 2.4.5 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with AI. Includes 15-minute caching, automatic HTTP-to-HTTPS upgrade, and redirect handling.

#### 2.4.6 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff, with domain filtering support. Requires mandatory Sources section in responses listing all relevant URLs.

#### 2.4.7 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits (125 chars max) and proper attribution for untrusted domains while respecting licenses.

---

## 3. Multi-Agent Coordination and Memory

Infrastructure for orchestrating parallel agent teams, delegating tasks to subagents, and maintaining persistent memory and context across sessions and conversation windows.

### 3.1 Multi-Agent Team Coordination

Infrastructure for coordinating parallel work across agent teams through task distribution, direct messaging, broadcast communication, and graceful shutdown protocols. Teams share memory contexts and coordinate via structured messaging with support for plan approval and shutdown handshakes.

#### 3.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Coordinates multi-agent teams for parallel work on complex projects. Manages team creation, task assignment, teammate spawning, and graceful shutdown with automatic message delivery and idle state handling.

#### 3.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion. Requires all teammates to be terminated first before deletion succeeds.

#### 3.1.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for finding and claiming available tasks from shared task lists, preferring lowest ID tasks first and respecting task dependencies.

#### 3.1.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables agent-to-agent communication in teams via direct messages or broadcasts, with structured protocol support for shutdown requests and plan approval responses. Direct messaging is preferred over expensive broadcasts.

#### 3.1.5 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown-formatted messages to users with optional file attachments. Status field indicates intent: 'normal' for direct replies or 'proactive' for unsolicited updates.

#### 3.1.6 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity as a team member, provides team resources and configuration paths, and instructs communication protocols using teammate names for messaging and task coordination.

#### 3.1.7 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully before returning a final response in non-interactive mode.

#### 3.1.8 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool for teammate communication, with support for individual and broadcast messaging.

#### 3.1.9 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and content for injection into conversation context.

#### 3.1.10 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to use SendUserMessage for all user-facing replies, acknowledging work before starting, sending results after completion, and using checkpoints for longer tasks to communicate decisions and progress.

### 3.2 Subagent Orchestration and Delegation

Patterns and guidance for delegating tasks to specialized subagents for autonomous execution, including when to fork for parallelization, how to write context-appropriate prompts, and strategies for batch processing large codebase changes with isolated worker agents.

#### 3.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guide for the Agent tool covering subagent launching, concurrent execution, background tasks, agent resumption, worktree isolation, and context preservation for autonomous multi-step task handling.

#### 3.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when and how to launch specialized subagent types for autonomous handling of complex multi-step tasks, listing available agent types and their capabilities.

#### 3.2.3 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using subagents effectively for parallelizing independent queries and protecting context windows, while avoiding duplicate work.

#### 3.2.4 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts, distinguishing between context-inheriting agents (directive-style) and fresh agents (explanatory-style), emphasizing specificity and avoiding delegation of understanding.

#### 3.2.5 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for coordinator agents delegating tasks to subagents, handling waiting states, and reporting results with independent context for code-reviewer agents.

#### 3.2.6 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Instructs when to fork subagents for research and implementation, prohibits reading fork output mid-flight or fabricating results, and requires trusting completion notifications rather than predicting outcomes.

#### 3.2.7 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Directs a forked worker sub-agent to execute tasks directly without spawning further sub-agents, using tools silently and reporting structured results with scope, findings, files changed, and issues.

#### 3.2.8 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5-30 independent units, determining end-to-end test recipes, and spawning background worker agents with isolation and progress tracking.

#### 3.2.9 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and to do so with appropriate context.

### 3.3 Session Memory and Context Persistence

Persistent memory systems that store session state, user feedback, domain knowledge, and task context across conversations through structured files and templates. Agents consolidate memories reflectively, select relevant context for new tasks, and maintain institutional knowledge while respecting token constraints.

#### 3.3.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Presents the contents of a memory file stored at a specified path, allowing Claude to access persistent session data.

#### 3.3.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure for accessing hierarchical session information.

#### 3.3.3 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructs an agent to update session notes files during conversations by preserving structure, maintaining section headers and italic descriptions, and writing detailed info-dense content while respecting token limits.

#### 3.3.4 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs reflective memory consolidation by orienting on existing files, gathering recent signal from transcripts and logs, merging updates into topic files, and pruning the index to stay within line limits.

#### 3.3.5 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options based on user query, excluding recently-used tool documentation but including warnings and known issues.

#### 3.3.6 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type that stores guidance about work approaches from both successes and failures, with checks for contradictions against team memories.

#### 3.3.7 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines memory descriptions as capturing user role, goals, responsibilities, and knowledge to enable personalized assistance while avoiding negative judgments and focusing on information relevant to collaborative work.

#### 3.3.8 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

#### 3.3.9 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files with sections for current state, task specification, files, workflow, errors, codebase documentation, learnings, key results, and worklog.

### 3.4 Context Compaction and Conversation Summarization

Structured approaches to summarizing conversations and compacting context across Claude's interaction windows. These mechanisms analyze conversation history chronologically, extract technical decisions and user feedback, and produce tagged summaries enabling efficient task resumption without losing critical details.

#### 3.4.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured, actionable continuation summaries covering task overview, current state, discoveries, next steps, and context preservation, wrapped in summary tags to enable efficient resumption across context windows.

#### 3.4.2 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

Instructs Claude to wrap analysis in tags and systematically review recent messages chronologically, identifying user requests, technical decisions, code patterns, specific details, errors encountered, and user feedback to ensure thorough and accurate summarization.

#### 3.4.3 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

System prompt for analyzing full conversations before compaction, requiring chronological analysis with detailed identification of requests, approaches, decisions, code patterns, errors, and user feedback.

#### 3.4.4 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Lean experimental version of analysis instructions for compaction using analysis tags as planning scratchpad with line-by-line coverage notes rather than detailed content.

#### 3.4.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing user requests, technical concepts, files examined, errors encountered, problem-solving efforts, and pending tasks with code snippets and next steps.

#### 3.4.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, capturing user requests, technical concepts, file changes, errors, problem-solving, and next steps with code snippets.

#### 3.4.7 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs use of the Read tool to access it.

---

## 4. Planning, Task Management, and Workflow Automation

Structured workflows for planning, task tracking, autonomous execution, scheduling, and extensible command frameworks that govern how Claude approaches multi-step work.

### 4.1 Planning and Task Tracking

Design-phase workflows enforcing read-only exploration before implementation, plus structured task lists with status tracking for systematic progress visualization.

#### 4.1.1 Planning Mode System

Structured planning workflows that transition Claude into design phases before implementation, enforcing read-only exploration and plan-file-only edits across multiple variants: iterative pair-planning with users, parallel 5-phase exploration with subagents, and simplified subagent modes. Plans are verified upon completion and can be resumed across sessions.

##### 4.1.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore the codebase and design implementation approaches for user approval before coding, recommended for non-trivial tasks involving multiple approaches, architectural decisions, or multi-file changes.

##### 4.1.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of implementation planning and requests user approval of the plan. Use only for code implementation tasks, not research or exploration work.

##### 4.1.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow: initial exploration with parallel subagents, design phase with planning agents, review, optional phase 4, and final plan approval. Prohibits all edits except to the plan file and requires read-only operations only.

##### 4.1.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative pair-planning mode where Claude explores code, updates the plan file incrementally, and asks clarifying questions in a loop until the plan is complete. Only the plan file may be edited; all other operations are read-only.

##### 4.1.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents that prohibits all edits and non-readonly operations, allowing only plan file creation/editing and read-only actions while answering queries.

##### 4.1.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, requiring evaluation of existing plan against new request and deciding whether to continue or start fresh.

##### 4.1.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has ended and actions can now be taken, optionally referencing the plan file location.

##### 4.1.1.8 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and suggests continuing work on it if relevant.

##### 4.1.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 4.1.1.10 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes concise plans to file listing file paths, changes, and verification commands with a hard 40-line limit.

##### 4.1.1.11 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans through read-only codebase exploration, identifying patterns and dependencies, and detailing step-by-step strategies with critical files.

#### 4.1.2 Task Management and Progress Tracking

Tools and reminders for breaking down coding work into structured task lists with status tracking (pending/in_progress/completed), enabling systematic progress visualization and immediate completion marking throughout multi-step sessions.

##### 4.1.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with three states (pending/in_progress/completed) and dual-form task descriptions. Tracks progress and organizes multi-step work systematically.

##### 4.1.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for multi-step coding sessions with status tracking (pending/in_progress/completed) and optional activeForm descriptions. Helps organize complex work and demonstrate thoroughness.

##### 4.1.2.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite to break down work into tasks, track progress, and mark tasks complete immediately upon finishing.

##### 4.1.2.4 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use the TodoWrite tool for task tracking when relevant, without mentioning it to the user.

##### 4.1.2.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task tracking tools for progress management when relevant, without mentioning it to the user.

##### 4.1.2.6 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

### 4.2 Autonomous Execution and Scheduling

Continuous autonomous task execution with permission-based tool access, safeguards against data exposure, cron-based scheduling, and load-distribution strategies.

#### 4.2.1 Autonomous and Auto Mode Execution

Governs continuous autonomous task execution with action-oriented workflows, permission-based tool access, and safeguards against unauthorized data exposure. Handles denied tool calls through alternative approaches and enforces sequential or parallel execution based on task dependencies.

##### 4.2.1.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate implementation, minimal interruptions, preference for action over planning, and strict prohibition on posting to public services without explicit user approval to prevent data exfiltration.

##### 4.2.1.2 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for implementing changes: simplify code, run unit tests, test end-to-end, commit and push, then report the PR URL.

##### 4.2.1.3 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Describes tool execution in permission modes where users approve or deny tool calls, with guidance to adjust approach rather than retry denied calls.

##### 4.2.1.4 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides Claude to attempt reasonable alternatives when tool execution is denied, avoiding malicious workarounds, and stopping to explain if the capability is essential.

##### 4.2.1.5 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Enables parallel tool calls for independent operations to increase efficiency, while enforcing sequential execution for dependent tool calls.

#### 4.2.2 Scheduling and Cron Jobs

Manages temporal task execution through cron-based scheduling and execution pausing, with load-distribution strategies and user interrupt capabilities.

##### 4.2.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Enables scheduling one-shot or recurring cron-based jobs using standard 5-field cron syntax in the user's local timezone, with guidance on avoiding :00 and :30 minute marks to reduce API load clustering and managing session-only job expiration.

##### 4.2.2.2 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with user interrupt capability. Preferred over bash sleep as it doesn't hold shell processes and supports periodic check-ins.

### 4.3 Hooks System Configuration and Lifecycle

Event-driven automation framework for intercepting and controlling Claude Code lifecycle events. Hooks attach custom logic to permission requests, tool usage, and agent completion, enabling condition evaluation, context injection, and execution flow control through command and prompt-based handlers.

#### 4.3.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines hooks configuration for Claude Code lifecycle events including PermissionRequest, PreToolUse, PostToolUse, and others, supporting command, prompt, and agent hook types with JSON input/output for controlling behavior and injecting context.

#### 4.3.2 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether a condition is met or providing a reason for failure.

#### 4.3.3 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured results indicating whether an agent completed its assigned plan.

#### 4.3.4 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution.

#### 4.3.5 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

#### 4.3.6 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook has stopped continuation with an associated message.

#### 4.3.7 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix string for hook stopped continuation messages.

#### 4.3.8 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports a success message from a hook execution.

### 4.4 Skills System and Slash Commands

Extensible command framework for invoking specialized capabilities via slash commands, with infrastructure for skill creation, session tracking, configuration management, and automated verification. Supports both inline execution and forked workflows with comprehensive debugging and diagnostic tools for troubleshooting stuck or slow sessions.

#### 4.4.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within conversations. Must invoke before generating other responses when a skill matches user intent.

#### 4.4.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Instructs Claude to use the Skill tool to execute user-invocable skills invoked via slash commands, only for skills listed in the tool's user-invocable section.

#### 4.4.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked in the current session and instructs Claude to continue following their guidelines.

#### 4.4.4 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable processes from the current session into reusable skills through a 4-round interview process, generating SKILL.md files with detailed steps, success criteria, and execution modes for inline or forked execution.

#### 4.4.5 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and optional skills/hooks through codebase exploration, user interviews, proposal refinement, and iterative artifact creation with GitHub CLI and linting suggestions.

#### 4.4.6 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json) by reading existing settings, merging changes, validating JSON, and updating hooks or permissions without overwriting existing configuration.

#### 4.4.7 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks including dedup checks, command construction, pipe testing, JSON validation, syntax verification, live proof testing, and handoff to user.

#### 4.4.8 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts intervals to cron expressions, schedules recurring tasks, and immediately executes the prompt for the first time.

#### 4.4.9 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, analyzing errors and warnings, and providing concrete fixes or next steps.

#### 4.4.10 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, detecting high CPU/memory/I/O issues, and posting diagnostic reports to Slack.

#### 4.4.11 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive guide for creating verifier skills for automated code verification covering auto-detection of project types, browser automation setup (Playwright/Chrome DevTools), CLI/API testing, authentication handling, and skill generation.

---

## 5. API and SDK Documentation

Reference documentation for Claude's HTTP API, language SDKs, agent SDK, tool use patterns, streaming, and file handling across multiple programming languages.

### 5.1 Claude API Reference Documentation

Comprehensive SDK and HTTP API documentation across eight programming languages (Python, TypeScript, Go, Java, C#, PHP, Ruby, cURL) covering core features like vision, prompt caching, extended thinking, tool use, and streaming. Includes model catalog, error handling reference, and live documentation sources for current API capabilities.

#### 5.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction for long contexts, and cost optimization.

#### 5.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

#### 5.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, basic requests, streaming with message accumulation, tool use via BetaToolRunner and manual loops, thinking, server-side tools, and context editing.

#### 5.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking, tool use with annotated classes and BetaToolRunner, effort parameter, prompt caching, structured output, and server-side tools.

#### 5.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use with manual loops, effort parameter, prompt caching, token counting, structured output, PDF input, and server-side tools.

#### 5.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for basic requests, streaming, manual tool use loops, extended thinking, and beta features including MCP servers and server-side tools.

#### 5.1.7 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for basic requests, streaming, and beta tool runner with annotated classes for automatic tool execution.

#### 5.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, response parsing with jq, streaming, tool use loops, extended thinking, and required headers.

#### 5.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact model IDs, aliases, context windows, max output tokens, and programmatic model discovery via Models API for live capability data.

#### 5.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference guide for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with common causes, handling strategies, and SDK typed exception classes for Python and TypeScript.

#### 5.1.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories, organized by topic with extraction prompts for each resource.

### 5.2 Agent SDK Reference and Patterns

Complete Agent SDK documentation for Python and TypeScript with reference guides and practical implementation patterns. Covers core concepts like built-in tools, MCP integration, hooks, subagents, permission modes, and session management with end-to-end code examples.

#### 5.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP support, hooks, subagents, error handling, and session management.

#### 5.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, query interface, built-in tools, permission modes, MCP support, hooks, subagents, message types, and session history management.

#### 5.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Demonstrates Python Agent SDK patterns including basic agents, custom tools via MCP, hooks for tool lifecycle events, subagents, permission modes, error recovery, and session resumption with full code examples.

#### 5.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Provides TypeScript Agent SDK patterns for basic agents, hooks, subagents, MCP server integration, and session resumption with practical code examples.

### 5.3 Tool Use and Streaming API References

Detailed API references for tool use, streaming, and file handling across Python and TypeScript SDKs. Covers tool runners with decorators, manual agentic loops, server-side capabilities (code execution, web search, computer use), structured outputs, and asynchronous batch processing for cost-optimized workflows.

#### 5.3.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tool definitions, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices.

#### 5.3.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner with @beta_tool decorator, manual agentic loops, MCP tool conversion helpers, code execution with file uploads, memory tool, and structured outputs with Pydantic.

#### 5.3.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference with betaZodTool for tool runner, manual agentic loops with streaming, server-side tools, code execution with file handling, memory tool, and Zod-based structured outputs.

#### 5.3.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference with sync/async examples, handling text/thinking/tool-use content types, progress tracking, error handling, and best practices for token management and timeouts.

#### 5.3.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, content type handling, tool runner integration, final message retrieval, and raw SSE format for non-SDK HTTP implementations.

#### 5.3.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files, using them in messages as documents or images, managing files, and end-to-end workflows with file reuse across multiple queries.

#### 5.3.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files, using them in messages, and managing files with list, delete, and download operations.

#### 5.3.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference covering batch creation, status polling, result retrieval, and container reuse for asynchronous processing at 50% cost with up to 100,000 requests per batch.

### 5.4 Build with Claude API Skills

Comprehensive guides for developing LLM applications with Claude, covering architecture decisions, model selection, API reference documentation, and resource discovery through interactive assistance.

#### 5.4.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, compaction, and common pitfalls.

#### 5.4.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation organized by use case (classification, chat, batch processing, tool use, agents, error handling).

#### 5.4.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant resources, and providing actionable guidance with code examples and feature discovery.

---

## 6. Code Quality, Security, and Git Workflows

Practices and tools for maintaining code quality through review, security analysis, version control safety, and behavioral constraints that keep coding work focused and reversible.

### 6.1 Git Operations and Version Control

Git workflows emphasize safety and clarity: create new commits rather than amending, never skip hooks or signing unless explicitly requested, and avoid destructive operations like force push or hard reset without user approval. Commits follow repository style conventions with safety protocols preventing amendments after hook failures and accidental commits of sensitive files. Git worktrees provide isolated branch environments, and pull requests include test plans and follow naming conventions for branches and session titles.

#### 6.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Directs Claude to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

#### 6.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests, including safety protocols, commit message formatting, hook handling, and PR creation with gh command. Emphasizes never amending commits after hook failures, avoiding destructive operations without explicit user request, and creating new commits instead.

#### 6.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude never to skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues if hooks fail.

#### 6.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Directs Claude to create new commits rather than amending existing ones.

#### 6.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, used only when the user explicitly requests worktree functionality, with optional naming and cleanup on session exit.

#### 6.1.6 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree, restoring the original working directory and clearing session caches. Supports keeping or removing the worktree with optional change discard.

#### 6.1.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository style, and executing the commit with safety protocols preventing amends and secret-file commits.

#### 6.1.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests by analyzing changes, creating feature branches, drafting PR titles and bodies with test plans, and enforcing git safety protocols against force pushes and destructive operations.

#### 6.1.9 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

#### 6.1.10 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status snapshot at conversation start including branch, main branch reference, status, and recent commits.

### 6.2 Security Monitoring and Vulnerability Analysis

Defensive mechanisms for detecting and preventing security threats in autonomous agent actions and code. These systems evaluate tool usage against threat models, identify injection attacks and credential mishandling, conduct focused vulnerability reviews, and enforce authorization boundaries while supporting legitimate security testing.

#### 6.2.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor evaluating autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with threat model and evaluation rules for composite actions and delayed effects.

#### 6.2.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, block rules, and allow exceptions governing autonomous agent tool actions, covering git destructive operations, code execution, credential handling, infrastructure modification, and data exfiltration.

#### 6.2.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of PR changes identifying high-confidence exploitable vulnerabilities in input validation, authentication, cryptography, injection, and data exposure with confidence scoring and false-positive filtering.

#### 6.2.4 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety classification, returning the extracted prefix or 'command_injection_detected' to prevent malicious execution.

#### 6.2.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Authorizes assistance with legitimate security testing, CTF challenges, and defensive security while refusing requests for destructive attacks, mass targeting, supply chain compromise, and evasion techniques without clear authorization context.

#### 6.2.6 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Prioritizes avoiding security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks, fixing insecure code immediately.

#### 6.2.7 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but strictly prohibits improving, augmenting, or enhancing malicious code.

### 6.3 Code Quality and Review

Systematic evaluation of code implementations through adversarial testing, peer review, and quality analysis. These capabilities run test suites and linters, examine GitHub PRs for style and security implications, and coordinate parallel review agents to identify reuse opportunities and efficiency problems.

#### 6.3.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarially tests implementations by running builds, test suites, linters, and probes for concurrency/boundary/idempotency issues, issuing PASS/FAIL/PARTIAL verdicts with command output and expected vs actual results.

#### 6.3.2 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Conducts expert code reviews of GitHub PRs by fetching PR details and diffs, analyzing code quality, style, conventions, performance, test coverage, and security implications.

#### 6.3.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and code review comments with file context, diff hunks, and threaded replies in formatted markdown.

#### 6.3.4 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel agents to review code for reuse opportunities, quality issues, and efficiency problems, then fixes identified issues.

#### 6.3.5 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Verification specialist skill for testing code changes by discovering verifier skills, analyzing changes, creating deterministic verification plans, triggering verifiers, and reporting results with failure diagnostics.

#### 6.3.6 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the codebase or IDE environment.

### 6.4 Coding Task Execution Guidelines

Behavioral constraints that guide focused, pragmatic code work by limiting scope to explicit requests, avoiding over-engineering, minimizing unnecessary abstractions, and prioritizing reversibility and user control over destructive operations.

#### 6.4.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Interprets user instructions in the context of software engineering tasks including bug fixes, feature additions, refactoring, and code explanation, applying domain-specific understanding to generic requests.

#### 6.4.2 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Constrains changes to only those directly requested or clearly necessary, keeping solutions simple and focused.

#### 6.4.3 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Avoids creating helpers, utilities, or abstractions for one-time operations or hypothetical requirements, maintaining minimum necessary complexity.

#### 6.4.4 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Restricts changes to only what was asked, avoiding feature additions, refactoring, docstrings, or comments beyond the requested scope.

#### 6.4.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Omits error handling for impossible scenarios and validates only at system boundaries, trusting internal code and framework guarantees.

#### 6.4.6 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Deletes unused code completely rather than adding compatibility shims, renamed variables, or re-exports.

#### 6.4.7 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Prefers editing existing files over creating new ones to prevent file bloat and build on existing work more effectively.

#### 6.4.8 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires reading and understanding existing code before proposing modifications.

#### 6.4.9 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Empowers Claude to attempt ambitious tasks that would otherwise be too complex or time-consuming, deferring to user judgment on scope appropriateness.

#### 6.4.10 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instructs Claude to consider alternative approaches when blocked rather than brute-forcing, using AskUserQuestion tool to align on the right path forward.

#### 6.4.11 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Avoids providing time estimates or predictions for task duration, focusing on what needs to be done instead.

#### 6.4.12 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

#### 6.4.13 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Requires careful consideration of reversibility and blast radius, requesting user confirmation before destructive operations, hard-to-reverse actions, shared-state modifications, or third-party uploads, while investigating unexpected state before deletion.

---

## 7. Agent Design, Communication, and Operations

Tools and guidelines for designing agents, shaping Claude's communication style, monitoring resource usage, and enabling user interaction during task execution.

### 7.1 Agent Architecture and Configuration

Capabilities for designing AI agents through system prompt architecture, persona creation, metadata generation, and response formatting based on execution context.

#### 7.1.1 Agent Design and Creation

Capabilities for designing, configuring, and optimizing AI agents through system prompt architecture, persona creation, and specialized agent behaviors. Includes tools for generating session metadata, predicting user input, and formatting agent responses based on execution context.

##### 7.1.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design high-performance AI agent configurations by extracting user intent, creating expert personas, architecting comprehensive system prompts, optimizing for performance, and generating JSON output with identifier, usage guidelines, and complete operational instructions.

##### 7.1.1.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Guides an agent to find relevant sessions by prioritizing user-assigned tags, then matching titles, branches, summaries, and semantic concepts, returning results ordered by relevance.

##### 7.1.1.3 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise sentence-case titles (3-7 words) that capture the main topic of a coding session, returning JSON with a single title field.

##### 7.1.1.4 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by reading shell PS1 configurations, converting escape sequences to shell commands, and updating settings.json with custom status line commands that receive session metadata via stdin.

##### 7.1.1.5 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise sub-agent reporting and detailed standalone writeups based on caller context, with guidance on file paths and code snippets.

##### 7.1.1.6 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next based on recent conversation context, returning specific 2-12 word suggestions that match user style without evaluative or Claude-voice language.

#### 7.1.2 Documentation Generation and Management

Maintains living documentation by curating and updating knowledge bases with new learnings while preserving structural integrity and focusing on high-signal architectural insights over implementation minutiae.

##### 7.1.2.1 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Updates Magic Doc files with new learnings by preserving headers, removing outdated information, and maintaining terse, high-signal documentation focused on architecture, patterns, and entry points rather than implementation details.

#### 7.1.3 Tool Discovery and Search

Locates and retrieves tool schemas through query matching, enabling exact name lookups, keyword searches, and filtered discovery of callable tool definitions.

##### 7.1.3.1 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by query matching, supporting exact name selection, keyword search, and required-term filtering. Returns matched tools as callable JSONSchema definitions.

### 7.2 Output Style and Communication

Directives that shape how Claude structures and formats responses, emphasizing conciseness, direct communication, and consistent formatting conventions. Covers response brevity, code reference formatting, agent action summaries, and behavioral guidelines for tool usage and path notation.

#### 7.2.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler, and focusing text output on decisions, status updates, and blockers.

#### 7.2.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing specific code locations for easy navigation.

#### 7.2.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs responses to be short and concise.

#### 7.2.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and must be followed in responses.

#### 7.2.5 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering absolute path usage, response formatting, emoji avoidance, and tool call punctuation conventions.

#### 7.2.6 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word agent action summaries in present tense, avoiding past tense, vagueness, and branch names.

### 7.3 User Interaction and Clarification Tools

Facilitates real-time user engagement through structured questioning, requirement clarification, and visual option previewing. Enables decision-making during execution and plan refinement through interactive dialogs with rich preview capabilities.

#### 7.3.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use AskUserQuestion to gather user preferences, clarify ambiguous instructions, and get implementation decisions during execution. In plan mode, use it to clarify requirements before finalizing the plan, not to ask for plan approval.

#### 7.3.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructions for using the optional preview field in AskUserQuestion single-select options to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML.

#### 7.3.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering of UI options using optional preview field for ASCII mockups, code snippets, diagrams, and configuration examples in monospace boxes.

### 7.4 Resource Monitoring and Session State

Real-time token and budget consumption metrics, MCP resource availability indicators, session resumption across machines, and lightweight interaction modes.

#### 7.4.1 Resource and Budget Monitoring

Real-time consumption metrics for tokens and USD budget, plus status indicators for MCP resource availability, allowing Claude to track operational constraints and content accessibility.

##### 7.4.1.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token consumption statistics including used, total, and remaining tokens.

##### 7.4.1.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget consumption statistics including spent, total, and remaining amounts.

##### 7.4.1.3 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no displayable content.

##### 7.4.1.4 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Signals that an MCP resource has content but it cannot be displayed in the current format.

#### 7.4.2 Session and Workflow State Management

Notifications that maintain continuity across session boundaries and define lightweight interaction modes, including cross-machine session resumption and side-question handling without tool invocation.

##### 7.4.2.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory has been updated.

##### 7.4.2.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude to answer a side question directly without tools, as a lightweight separate agent, clarifying that the main agent continues independently and no follow-up turns are available.

### 7.5 Analytics, Learning, and CI/CD Integration

Usage analytics identifying friction points and workflow patterns, educational modes balancing task completion with learning, and GitHub CI/CD automation templates.

#### 7.5.1 Usage Insights and Analytics

Analysis and reporting systems that extract patterns from Claude Code sessions to identify friction points, successful workflows, and emerging opportunities for autonomous development practices.

##### 7.5.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a structured 4-part summary of Claude Code usage patterns covering what's working, friction points, quick wins, and ambitious workflows for users to improve their interaction with Claude as models improve.

##### 7.5.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes aggregated Claude Code usage data to identify and categorize recurring friction patterns, returning structured categories with examples and explanations.

##### 7.5.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, suggesting parallel agents and iterative testing approaches.

##### 7.5.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including goal categories, user satisfaction signals, and friction types, with strict guidelines for counting only explicit user requests and satisfaction indicators.

##### 7.5.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations from MCP Servers, Custom Skills, Hooks, Headless Mode, and Task Agents, plus usage patterns tailored to user's actual session data.

#### 7.5.2 Learning Mode and Educational Workflows

Interactive modes that balance task completion with hands-on learning by engaging users in design decisions and implementation choices while handling routine work, with educational context provided throughout.

##### 7.5.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt that balances task completion with hands-on learning by requesting human contributions on design decisions, business logic, and algorithms while handling routine implementation, with optional TodoList integration for task tracking.

##### 7.5.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights during learning mode by displaying 2-3 key points about implementation choices before and after code generation.

#### 7.5.3 GitHub Integration and CI/CD

Automation templates for integrating Claude Code into GitHub workflows, enabling AI-assisted development triggered by mentions in issues and pull requests with configurable security controls.

##### 7.5.3.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, PRs, or comments, with optional custom prompts and tool restrictions.

##### 7.5.3.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining what Claude Code does, how the workflow functions, and security considerations.
