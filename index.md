# Claude Code System Prompts Index

A reference system for building, operating, and extending Claude Code agents — covering everything from low-level execution safety and file discipline to multi-agent coordination, persistent memory, workflow automation, and the APIs that tie it all together.

## Table of Contents

1. [Bash and Shell Execution](#1-bash-and-shell-execution)
   1. [Bash Tool Usage & Best Practices](#11-bash-tool-usage-best-practices)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (command description) [Tool Description]](#112-bash-command-description-tool-description)
      3. [Bash (maintain cwd) [Tool Description]](#113-bash-maintain-cwd-tool-description)
      4. [Bash (working directory) [Tool Description]](#114-bash-working-directory-tool-description)
      5. [Bash (no newlines) [Tool Description]](#115-bash-no-newlines-tool-description)
      6. [Bash (parallel commands) [Tool Description]](#116-bash-parallel-commands-tool-description)
      7. [Bash (sequential commands) [Tool Description]](#117-bash-sequential-commands-tool-description)
      8. [Bash (semicolon usage) [Tool Description]](#118-bash-semicolon-usage-tool-description)
      9. [Bash (quote file paths) [Tool Description]](#119-bash-quote-file-paths-tool-description)
      10. [Bash (verify parent directory) [Tool Description]](#1110-bash-verify-parent-directory-tool-description)
      11. [Bash (timeout) [Tool Description]](#1111-bash-timeout-tool-description)
      12. [Bash (prefer dedicated tools) [Tool Description]](#1112-bash-prefer-dedicated-tools-tool-description)
      13. [Bash (built-in tools note) [Tool Description]](#1113-bash-built-in-tools-note-tool-description)
      14. [Bash (alternative — communication) [Tool Description]](#1114-bash-alternative-—-communication-tool-description)
      15. [Bash (alternative — content search) [Tool Description]](#1115-bash-alternative-—-content-search-tool-description)
      16. [Bash (alternative — edit files) [Tool Description]](#1116-bash-alternative-—-edit-files-tool-description)
      17. [Bash (alternative — file search) [Tool Description]](#1117-bash-alternative-—-file-search-tool-description)
      18. [Bash (alternative — read files) [Tool Description]](#1118-bash-alternative-—-read-files-tool-description)
      19. [Bash (alternative — write files) [Tool Description]](#1119-bash-alternative-—-write-files-tool-description)
   2. [Bash Sleep & Background Task Management](#12-bash-sleep-background-task-management)
      1. [Bash (sleep — keep short) [Tool Description]](#121-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#122-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — run immediately) [Tool Description]](#123-bash-sleep-—-run-immediately-tool-description)
      4. [Bash (sleep — use check commands) [Tool Description]](#124-bash-sleep-—-use-check-commands-tool-description)
      5. [One of six rules for using sleep command (System Prompt)](#125-one-of-six-rules-for-using-sleep-command-system-prompt)
      6. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#126-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
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
   4. [Notebook & PowerShell Tools](#14-notebook-powershell-tools)
      1. [NotebookEdit (Tool Description)](#141-notebookedit-tool-description)
      2. [PowerShell (Tool Description)](#142-powershell-tool-description)
      3. [Sleep (Tool Description)](#143-sleep-tool-description)
2. [Files, Code Quality, and Version Control](#2-files-code-quality-and-version-control)
   1. [File System Operations (Read, Write, Edit, Search)](#21-file-system-operations-read-write-edit-search)
      1. [Edit (Tool Description)](#211-edit-tool-description)
      2. [Write (Tool Description)](#212-write-tool-description)
      3. [ReadFile (Tool Description)](#213-readfile-tool-description)
      4. [Grep (Tool Description)](#214-grep-tool-description)
      5. [Tool usage (create files) [System Prompt]](#215-tool-usage-create-files-system-prompt)
      6. [Tool usage (edit files) [System Prompt]](#216-tool-usage-edit-files-system-prompt)
      7. [Tool usage (read files) [System Prompt]](#217-tool-usage-read-files-system-prompt)
      8. [Tool usage (search content) [System Prompt]](#218-tool-usage-search-content-system-prompt)
      9. [Tool usage (search files) [System Prompt]](#219-tool-usage-search-files-system-prompt)
      10. [Tool usage (direct search) [System Prompt]](#2110-tool-usage-direct-search-system-prompt)
      11. [Tool usage (reserve Bash) [System Prompt]](#2111-tool-usage-reserve-bash-system-prompt)
   2. [Code Quality & Engineering Practices](#22-code-quality-engineering-practices)
      1. [Doing tasks (software engineering focus) [System Prompt]](#221-doing-tasks-software-engineering-focus-system-prompt)
      2. [Doing tasks (no premature abstractions) [System Prompt]](#222-doing-tasks-no-premature-abstractions-system-prompt)
      3. [Doing tasks (no compatibility hacks) [System Prompt]](#223-doing-tasks-no-compatibility-hacks-system-prompt)
      4. [Doing tasks (no unnecessary additions) [System Prompt]](#224-doing-tasks-no-unnecessary-additions-system-prompt)
      5. [Doing tasks (no unnecessary error handling) [System Prompt]](#225-doing-tasks-no-unnecessary-error-handling-system-prompt)
      6. [Doing tasks (minimize file creation) [System Prompt]](#226-doing-tasks-minimize-file-creation-system-prompt)
      7. [Doing tasks (read before modifying) [System Prompt]](#227-doing-tasks-read-before-modifying-system-prompt)
      8. [Doing tasks (no time estimates) [System Prompt]](#228-doing-tasks-no-time-estimates-system-prompt)
      9. [Doing tasks (ambitious tasks) [System Prompt]](#229-doing-tasks-ambitious-tasks-system-prompt)
      10. [Doing tasks (blocked approach) [System Prompt]](#2210-doing-tasks-blocked-approach-system-prompt)
      11. [Doing tasks (help and feedback) [System Prompt]](#2211-doing-tasks-help-and-feedback-system-prompt)
   3. [Git Operations & Version Control](#23-git-operations-version-control)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#231-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#232-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#233-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#234-bash-git-—-prefer-new-commits-tool-description)
      5. [EnterWorktree (Tool Description)](#235-enterworktree-tool-description)
      6. [ExitWorktree (Tool Description)](#236-exitworktree-tool-description)
      7. [Quick git commit (Agent Prompt)](#237-quick-git-commit-agent-prompt)
      8. [Quick PR creation (Agent Prompt)](#238-quick-pr-creation-agent-prompt)
      9. [Session title and branch generation (Agent Prompt)](#239-session-title-and-branch-generation-agent-prompt)
      10. [Git status (System Prompt)](#2310-git-status-system-prompt)
   4. [Verification & Testing](#24-verification-testing)
      1. [Verify skill (Skill)](#241-verify-skill-skill)
      2. [Create verifier skills (Skill)](#242-create-verifier-skills-skill)
      3. [Verify CLI changes (example for Verify skill) [Skill]](#243-verify-cli-changes-example-for-verify-skill-skill)
      4. [Verify server/API changes (example for Verify skill) [Skill]](#244-verify-serverapi-changes-example-for-verify-skill-skill)
      5. [Verification specialist (Agent Prompt)](#245-verification-specialist-agent-prompt)
3. [Agent Orchestration and Planning](#3-agent-orchestration-and-planning)
   1. [Subagent and Team Coordination](#31-subagent-and-team-coordination)
      1. [Agent & Subagent Orchestration](#311-agent-subagent-orchestration)
         1. [Agent (usage notes) [Tool Description]](#3111-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#3112-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (delegate exploration) [System Prompt]](#3113-tool-usage-delegate-exploration-system-prompt)
         4. [Tool usage (subagent guidance) [System Prompt]](#3114-tool-usage-subagent-guidance-system-prompt)
         5. [Writing subagent prompts (System Prompt)](#3115-writing-subagent-prompts-system-prompt)
         6. [Subagent delegation examples (System Prompt)](#3116-subagent-delegation-examples-system-prompt)
         7. [Fork usage guidelines (System Prompt)](#3117-fork-usage-guidelines-system-prompt)
         8. [Agent mention (System Reminder)](#3118-agent-mention-system-reminder)
         9. [Worker fork execution (Agent Prompt)](#3119-worker-fork-execution-agent-prompt)
         10. [General purpose (Agent Prompt)](#31110-general-purpose-agent-prompt)
         11. [Explore (Agent Prompt)](#31111-explore-agent-prompt)
      2. [Team Coordination & Swarm Agents](#312-team-coordination-swarm-agents)
         1. [TeammateTool (Tool Description)](#3121-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#3122-teamdelete-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#3123-tasklist-teammate-workflow-tool-description)
         4. [SendMessageTool (Tool Description)](#3124-sendmessagetool-tool-description)
         5. [Team Coordination (System Reminder)](#3125-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#3126-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#3127-teammate-communication-system-prompt)
         8. [Team memory content display (System Prompt)](#3128-team-memory-content-display-system-prompt)
   2. [Planning and Implementation Workflows](#32-planning-and-implementation-workflows)
      1. [Planning Mode & Implementation Planning](#321-planning-mode-implementation-planning)
         1. [EnterPlanMode (Tool Description)](#3211-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3212-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#3213-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#3214-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#3215-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#3216-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#3217-exited-plan-mode-system-reminder)
         8. [Ultraplan mode (System Reminder)](#3218-ultraplan-mode-system-reminder)
         9. [Plan file reference (System Reminder)](#3219-plan-file-reference-system-reminder)
         10. [Verify plan reminder (System Reminder)](#32110-verify-plan-reminder-system-reminder)
         11. [Phase four of plan mode (System Prompt)](#32111-phase-four-of-plan-mode-system-prompt)
         12. [Plan mode (enhanced) [Agent Prompt]](#32112-plan-mode-enhanced-agent-prompt)
      2. [Worker & Implementation Workflow](#322-worker-implementation-workflow)
         1. [Worker instructions (System Prompt)](#3221-worker-instructions-system-prompt)
         2. [Advisor tool instructions (System Prompt)](#3222-advisor-tool-instructions-system-prompt)
         3. [Bash command description writer (Agent Prompt)](#3223-bash-command-description-writer-agent-prompt)
4. [Session State, Memory, and Project Configuration](#4-session-state-memory-and-project-configuration)
   1. [Memory and Knowledge Persistence](#41-memory-and-knowledge-persistence)
      1. [Memory & Context Persistence](#411-memory-context-persistence)
         1. [Memory file contents (System Reminder)](#4111-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#4112-nested-memory-contents-system-reminder)
         3. [Agent memory instructions (System Prompt)](#4113-agent-memory-instructions-system-prompt)
         4. [Description part of memory instructions (System Prompt)](#4114-description-part-of-memory-instructions-system-prompt)
         5. [Memory description of user feedback (System Prompt)](#4115-memory-description-of-user-feedback-system-prompt)
         6. [Determine which memory files to attach (Agent Prompt)](#4116-determine-which-memory-files-to-attach-agent-prompt)
         7. [Dream memory consolidation (Agent Prompt)](#4117-dream-memory-consolidation-agent-prompt)
         8. [Update Magic Docs (Agent Prompt)](#4118-update-magic-docs-agent-prompt)
      2. [Session Management & Continuity](#412-session-management-continuity)
         1. [Context compaction summary (System Prompt)](#4121-context-compaction-summary-system-prompt)
         2. [Session continuation (System Reminder)](#4122-session-continuation-system-reminder)
         3. [Compact file reference (System Reminder)](#4123-compact-file-reference-system-reminder)
         4. [Conversation summarization (Agent Prompt)](#4124-conversation-summarization-agent-prompt)
         5. [Recent Message Summarization (Agent Prompt)](#4125-recent-message-summarization-agent-prompt)
         6. [Coding session title generator (Agent Prompt)](#4126-coding-session-title-generator-agent-prompt)
         7. [Session Search Assistant (Agent Prompt)](#4127-session-search-assistant-agent-prompt)
         8. [Session memory template (Data)](#4128-session-memory-template-data)
   2. [Task Tracking and Project Setup](#42-task-tracking-and-project-setup)
      1. [Task Management & Progress Tracking](#421-task-management-progress-tracking)
         1. [TodoWrite (Tool Description)](#4211-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#4212-taskcreate-tool-description)
         3. [Tool usage (task management) [System Prompt]](#4213-tool-usage-task-management-system-prompt)
         4. [Task tools reminder (System Reminder)](#4214-task-tools-reminder-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#4215-todowrite-reminder-system-reminder)
      2. [CLAUDE.md & Project Configuration](#422-claudemd-project-configuration)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#4221-init-claudemd-and-skill-setup-new-version-skill)
         2. [CLAUDE.md creation (Agent Prompt)](#4222-claudemd-creation-agent-prompt)
         3. [Minimal mode (System Prompt)](#4223-minimal-mode-system-prompt)
         4. [Scratchpad directory (System Prompt)](#4224-scratchpad-directory-system-prompt)
      3. [Miscellaneous System Reminders & Context](#423-miscellaneous-system-reminders-context)
         1. [/btw side question (System Reminder)](#4231-btw-side-question-system-reminder)
         2. [Output style active (System Reminder)](#4232-output-style-active-system-reminder)
5. [Hooks, Skills, and Workflow Automation](#5-hooks-skills-and-workflow-automation)
   1. [Hooks & Lifecycle Event Handling](#51-hooks-lifecycle-event-handling)
      1. [Hooks Configuration (System Prompt)](#511-hooks-configuration-system-prompt)
      2. [Hook additional context (System Reminder)](#512-hook-additional-context-system-reminder)
      3. [Hook blocking error (System Reminder)](#513-hook-blocking-error-system-reminder)
      4. [Hook stopped continuation (System Reminder)](#514-hook-stopped-continuation-system-reminder)
      5. [Hook stopped continuation prefix (System Reminder)](#515-hook-stopped-continuation-prefix-system-reminder)
      6. [Hook success (System Reminder)](#516-hook-success-system-reminder)
      7. [Hook condition evaluator (Agent Prompt)](#517-hook-condition-evaluator-agent-prompt)
      8. [Agent Hook (Agent Prompt)](#518-agent-hook-agent-prompt)
      9. [Update Claude Code Config (Skill)](#519-update-claude-code-config-skill)
      10. [update-config (7-step verification flow) [Skill]](#5110-update-config-7-step-verification-flow-skill)
   2. [Skills & Slash Commands](#52-skills-slash-commands)
      1. [Skill (Tool Description)](#521-skill-tool-description)
      2. [Tool usage (skill invocation) [System Prompt]](#522-tool-usage-skill-invocation-system-prompt)
      3. [Invoked skills (System Reminder)](#523-invoked-skills-system-reminder)
      4. [/loop slash command (Skill)](#524-loop-slash-command-skill)
      5. [/stuck slash command (Skill)](#525-stuck-slash-command-skill)
      6. [Simplify (Skill)](#526-simplify-skill)
      7. [Debugging (Skill)](#527-debugging-skill)
      8. [/batch slash command (Agent Prompt)](#528-batch-slash-command-agent-prompt)
      9. [/schedule slash command (Agent Prompt)](#529-schedule-slash-command-agent-prompt)
      10. [/pr-comments slash command (Agent Prompt)](#5210-pr-comments-slash-command-agent-prompt)
      11. [/review-pr slash command (Agent Prompt)](#5211-review-pr-slash-command-agent-prompt)
   3. [Skill Creation & Workflow Automation](#53-skill-creation-workflow-automation)
      1. [Skillify Current Session (System Prompt)](#531-skillify-current-session-system-prompt)
      2. [Agent creation architect (Agent Prompt)](#532-agent-creation-architect-agent-prompt)
      3. [Auto mode rule reviewer (Agent Prompt)](#533-auto-mode-rule-reviewer-agent-prompt)
   4. [Scheduling & Cron Jobs](#54-scheduling-cron-jobs)
      1. [CronCreate (Tool Description)](#541-croncreate-tool-description)
6. [Claude API and SDK References](#6-claude-api-and-sdk-references)
   1. [Language SDKs and Core API](#61-language-sdks-and-core-api)
      1. [Claude API Reference (Multi-Language SDKs)](#611-claude-api-reference-multi-language-sdks)
         1. [Claude API reference — Python (Data)](#6111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#6112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#6113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#6114-claude-api-reference-—-java-data)
         5. [Claude API reference — C# (Data)](#6115-claude-api-reference-—-c-data)
         6. [Claude API reference — PHP (Data)](#6116-claude-api-reference-—-php-data)
         7. [Claude API reference — Ruby (Data)](#6117-claude-api-reference-—-ruby-data)
         8. [Claude API reference — cURL (Data)](#6118-claude-api-reference-—-curl-data)
         9. [Claude model catalog (Data)](#6119-claude-model-catalog-data)
         10. [HTTP error codes reference (Data)](#61110-http-error-codes-reference-data)
         11. [Live documentation sources (Data)](#61111-live-documentation-sources-data)
      2. [Tool Use & Streaming API References](#612-tool-use-streaming-api-references)
         1. [Tool use concepts (Data)](#6121-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6122-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6123-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#6124-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#6125-streaming-reference-—-typescript-data)
         6. [Files API reference — Python (Data)](#6126-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#6127-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#6128-message-batches-api-reference-—-python-data)
         9. [Prompt Caching — Design & Optimization (Data)](#6129-prompt-caching-—-design-optimization-data)
   2. [Agent SDK, Build Guides, and CI/CD](#62-agent-sdk-build-guides-and-cicd)
      1. [Agent SDK Reference & Patterns](#621-agent-sdk-reference-patterns)
         1. [Agent SDK reference — Python (Data)](#6211-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#6212-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#6213-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#6214-agent-sdk-patterns-—-typescript-data)
      2. [Build with Claude API Skills](#622-build-with-claude-api-skills)
         1. [Build with Claude API (Skill)](#6221-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#6222-build-with-claude-api-reference-guide-skill)
         3. [Claude guide agent (Agent Prompt)](#6223-claude-guide-agent-agent-prompt)
      3. [GitHub Integration & CI/CD](#623-github-integration-cicd)
         1. [GitHub App installation PR description (Data)](#6231-github-app-installation-pr-description-data)
         2. [GitHub Actions workflow for @claude mentions (Data)](#6232-github-actions-workflow-for-claude-mentions-data)
7. [User Interaction, Communication, and Analytics](#7-user-interaction-communication-and-analytics)
   1. [Output Style and Interactive Questioning](#71-output-style-and-interactive-questioning)
      1. [Output Style & Communication](#711-output-style-communication)
         1. [Output efficiency (System Prompt)](#7111-output-efficiency-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#7112-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#7113-tone-and-style-concise-output-—-short-system-prompt)
         4. [How to use the SendUserMessage tool (System Prompt)](#7114-how-to-use-the-sendusermessage-tool-system-prompt)
         5. [Agent Summary Generation (System Prompt)](#7115-agent-summary-generation-system-prompt)
         6. [Agent thread notes (System Prompt)](#7116-agent-thread-notes-system-prompt)
         7. [SendMessageTool (non-agent-teams) [Tool Description]](#7117-sendmessagetool-non-agent-teams-tool-description)
      2. [User Interaction & Question Asking](#712-user-interaction-question-asking)
         1. [AskUserQuestion (Tool Description)](#7121-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#7122-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#7123-option-previewer-system-prompt)
      3. [Learning & Teaching Modes](#713-learning-teaching-modes)
         1. [Learning mode (System Prompt)](#7131-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7132-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#7133-request_teach_access-part-of-teach-mode-tool-description)
   2. [Analytics, Suggestions, and Feedback](#72-analytics-suggestions-and-feedback)
      1. [Usage Insights & Analytics](#721-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#7211-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7212-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7213-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7214-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7215-insights-suggestions-system-prompt)
      2. [Agent Prompt Generation & Suggestion](#722-agent-prompt-generation-suggestion)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#7221-prompt-suggestion-generator-v2-agent-prompt)
         2. [Status line setup (Agent Prompt)](#7222-status-line-setup-agent-prompt)
         3. [Session memory update instructions (Agent Prompt)](#7223-session-memory-update-instructions-agent-prompt)
8. [Security, External Tools, and Resource Management](#8-security-external-tools-and-resource-management)
   1. [Security and Safe Execution](#81-security-and-safe-execution)
      1. [Security Review & Monitoring](#811-security-review-monitoring)
         1. [/security-review slash command (Agent Prompt)](#8111-security-review-slash-command-agent-prompt)
         2. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#8112-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         3. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#8113-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
         4. [Bash command prefix detection (Agent Prompt)](#8114-bash-command-prefix-detection-agent-prompt)
         5. [Censoring assistance with malicious activities (System Prompt)](#8115-censoring-assistance-with-malicious-activities-system-prompt)
         6. [Doing tasks (security) [System Prompt]](#8116-doing-tasks-security-system-prompt)
         7. [Malware analysis after Read tool call (System Reminder)](#8117-malware-analysis-after-read-tool-call-system-reminder)
      2. [Safe Action Execution & Risk Management](#812-safe-action-execution-risk-management)
         1. [Executing actions with care (System Prompt)](#8121-executing-actions-with-care-system-prompt)
         2. [Auto mode (System Prompt)](#8122-auto-mode-system-prompt)
         3. [System section (System Prompt)](#8123-system-section-system-prompt)
         4. [Tool execution denied (System Prompt)](#8124-tool-execution-denied-system-prompt)
         5. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#8125-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   2. [Browser, Web, and IDE Tools](#82-browser-web-and-ide-tools)
      1. [Browser Automation & Computer Use](#821-browser-automation-computer-use)
         1. [Computer (Tool Description)](#8211-computer-tool-description)
         2. [Computer action (Tool Parameter)](#8212-computer-action-tool-parameter)
         3. [Chrome browser MCP tools (System Prompt)](#8213-chrome-browser-mcp-tools-system-prompt)
         4. [Claude in Chrome browser automation (System Prompt)](#8214-claude-in-chrome-browser-automation-system-prompt)
      2. [Web Search & Content Fetching](#822-web-search-content-fetching)
         1. [WebSearch (Tool Description)](#8221-websearch-tool-description)
         2. [WebFetch (Tool Description)](#8222-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#8223-webfetch-summarizer-agent-prompt)
      3. [IDE Integration & Editor Context](#823-ide-integration-editor-context)
         1. [File opened in IDE (System Reminder)](#8231-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#8232-lines-selected-in-ide-system-reminder)
         3. [New diagnostics detected (System Reminder)](#8233-new-diagnostics-detected-system-reminder)
         4. [LSP (Tool Description)](#8234-lsp-tool-description)
   3. [Context Notifications and Resource Tracking](#83-context-notifications-and-resource-tracking)
      1. [File State & Context Notifications](#831-file-state-context-notifications)
         1. [File truncated (System Reminder)](#8311-file-truncated-system-reminder)
         2. [File exists but empty (System Reminder)](#8312-file-exists-but-empty-system-reminder)
         3. [File shorter than offset (System Reminder)](#8313-file-shorter-than-offset-system-reminder)
         4. [File modified by user or linter (System Reminder)](#8314-file-modified-by-user-or-linter-system-reminder)
      2. [Resource & Budget Monitoring](#832-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#8321-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#8322-usd-budget-system-reminder)
      3. [MCP Integration & Resources](#833-mcp-integration-resources)
         1. [MCP resource no content (System Reminder)](#8331-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#8332-mcp-resource-no-displayable-content-system-reminder)
         3. [ToolSearch (second part) [Tool Description]](#8333-toolsearch-second-part-tool-description)

---

## 1. Bash and Shell Execution

Everything governing how shell commands are executed: best practices, safety constraints, sandbox policy, background task management, and specialized notebook/PowerShell tools.

### 1.1 Bash Tool Usage & Best Practices

Bash executes shell commands and returns output. Maintain working directory state using absolute paths, chain dependent commands with `&&` for sequential execution with failure propagation, and run independent commands as parallel tool calls for performance. Quote file paths containing spaces, verify parent directories before creation, and prefer dedicated tools (Read, Write, Edit, Grep, Glob) over bash equivalents for better user experience and permission transparency.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Brief opening description that the Bash tool executes bash commands and returns their output.

#### 1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs to write clear, concise descriptions of bash commands, with more detail for complex piped or obscure commands.

#### 1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to maintain current working directory by using absolute paths and avoiding cd unless explicitly requested.

#### 1.1.4 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between bash commands but shell state does not, with environment initialized from user profile.

#### 1.1.5 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs not to use newlines to separate bash commands.

#### 1.1.6 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to run independent bash commands as parallel tool calls in a single message for optimal performance.

#### 1.1.7 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands with `&&` in a single bash call to ensure sequential execution with failure propagation.

#### 1.1.8 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when commands must run sequentially but earlier command failures are acceptable.

#### 1.1.9 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs to always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence with `ls` before creating new directories or files.

#### 1.1.11 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration in milliseconds for bash commands, with default and maximum timeout values.

#### 1.1.12 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns to avoid using Bash for find, grep, cat, and similar commands unless necessary, preferring dedicated tools for better user experience.

#### 1.1.13 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and easier permission review than Bash equivalents.

#### 1.1.14 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly instead of using echo or printf for communication.

#### 1.1.15 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs to use the Grep tool for content search instead of grep or rg commands.

#### 1.1.16 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs to use the Edit tool for file editing instead of sed or awk commands.

#### 1.1.17 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs to use the Glob tool for file search instead of find or ls commands.

#### 1.1.18 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs to use the Read tool for file reading instead of cat, head, or tail commands.

#### 1.1.19 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs to use the Write tool for file writing instead of echo or cat commands.

### 1.2 Bash Sleep & Background Task Management

Sleep durations should be kept short (1-5 seconds) to avoid blocking users, and commands that can run immediately should not be delayed. Do not poll background tasks started with `run_in_background` as completion notifications will be provided automatically. When polling external processes, use check commands like `gh run view` instead of sleeping. Never retry failing commands in a sleep loop—diagnose the root cause instead.

#### 1.2.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.2.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background`, as completion notifications will be provided.

#### 1.2.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

#### 1.2.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` instead of sleeping when polling external processes.

#### 1.2.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Do not retry failing commands in a sleep loop — diagnose the root cause.

#### 1.2.6 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Discourages unnecessary `Start-Sleep` commands in PowerShell scripts. Recommends using `run_in_background` for long-running tasks, polling alternatives for external processes, and keeping sleep durations short when necessary.

### 1.3 Bash Sandbox Security & Restrictions

All bash commands run in sandbox mode by policy with no exceptions. Default to sandbox for each command individually, and when sandbox restrictions cause failures (access denied, operation not permitted, network failures, Unix socket errors), immediately retry with `dangerouslyDisableSandbox: true` without asking the user. Use `$TMPDIR` for temporary files, explain which restriction caused failures, work with users to adjust sandbox settings, and never suggest sensitive paths like credentials or SSH keys be added to the allowlist.

#### 1.3.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs to work with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 1.3.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs to default to running commands within the sandbox and only bypass when user requests or evidence of sandbox restriction appears.

#### 1.3.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Describes sandbox evidence indicator: access denied to paths outside allowed directories.

#### 1.3.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that sandbox restrictions caused command failures.

#### 1.3.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.3.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Recognizes 'Operation not permitted' errors for file and network operations as sandbox-caused failures.

#### 1.3.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies Unix socket connection errors as evidence of sandbox-imposed restrictions.

#### 1.3.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

#### 1.3.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with visible evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure types.

#### 1.3.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode; the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.3.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.3.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.3.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands, even after running one with `dangerouslyDisableSandbox: true`.

#### 1.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing how Claude should respond when detecting evidence of sandbox-caused command failures.

#### 1.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry a failed command with `dangerouslyDisableSandbox: true` without asking the user.

#### 1.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using `$TMPDIR` or `${SANDBOX_TMPDIR_FN()}` for temporary files in sandbox mode instead of `/tmp` directly.

#### 1.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will trigger a user permission prompt.

### 1.4 Notebook & PowerShell Tools

Command execution and notebook manipulation tools that handle Jupyter cell editing, PowerShell command invocation with resource constraints, and controlled waiting operations. These tools prioritize specialized implementations over native alternatives to maintain efficiency and prevent resource leaks.

#### 1.4.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing cell contents, supporting insert and delete operations on individual cells.

#### 1.4.2 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with timeout and output limits, emphasizing use of specialized tools for file operations and git commands over native cmdlets.

#### 1.4.3 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Waits for a specified duration with user interrupt capability, preferred over bash sleep to avoid holding shell processes.

---

## 2. Files, Code Quality, and Version Control

Reading, writing, editing, and searching files; maintaining code quality and engineering discipline; Git workflows for commits, branches, and pull requests; and testing/verification practices.

### 2.1 File System Operations (Read, Write, Edit, Search)

Dedicated tools provide superior user experience and permission transparency compared to bash equivalents. Read accesses files including images, PDFs, and Jupyter notebooks with configurable limits; Write creates files (avoiding unsolicited documentation); Edit performs exact string replacements with indentation preservation; Grep searches content using ripgrep with regex and filtering; Glob discovers files by pattern. Reserve Bash exclusively for system commands and terminal operations, using these tools directly for codebase searches and file manipulation.

#### 2.1.1 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with strict matching requirements and indentation preservation from Read tool output.

#### 2.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, preferring the Edit tool for modifications and avoiding creation of documentation files unless explicitly requested.

#### 2.1.3 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem supporting images, PDFs, and Jupyter notebooks with configurable line limits and page ranges for large documents.

#### 2.1.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search tool built on ripgrep supporting regex patterns, file filtering, and multiple output modes for locating code and text across the codebase.

#### 2.1.5 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use the Write tool for file creation instead of cat heredoc or echo redirection.

#### 2.1.6 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs Claude to use the Edit tool for file modifications instead of sed or awk.

#### 2.1.7 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool for file access instead of cat, head, tail, or sed.

#### 2.1.8 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Directs Claude to use the Grep tool for searching file contents instead of grep or rg.

#### 2.1.9 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool for file discovery instead of find or ls.

#### 2.1.10 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob and Grep tools directly for simple, targeted codebase searches.

#### 2.1.11 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve the Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

### 2.2 Code Quality & Engineering Practices

Establishes pragmatic coding discipline: modify actual code rather than abstract solutions, avoid premature abstractions and unnecessary additions, delete unused code completely, and validate only at system boundaries. Emphasizes reading existing code before changes and deferring to user judgment on scope.

#### 2.2.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks like bug fixes, feature additions, and refactoring. Instructs Claude to interpret unclear instructions in this context and modify actual code rather than provide abstract answers.

#### 2.2.2 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Discourages creating helpers, utilities, or abstractions for one-time operations or hypothetical requirements. Favors minimal complexity needed for the current task.

#### 2.2.3 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Prohibits backwards-compatibility shims, renamed variables, or removed-code comments. Directs complete deletion of unused code when certain it's no longer needed.

#### 2.2.4 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Prohibits adding features, refactoring, or improvements beyond what was requested. Limits comments and annotations to self-evident logic only.

#### 2.2.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs Claude to avoid error handling for impossible scenarios and trust internal code guarantees. Validation should occur only at system boundaries like user input and external APIs.

#### 2.2.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat and build on prior work.

#### 2.2.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing modifications or changes.

#### 2.2.8 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid time estimates or predictions for task duration, focusing instead on what needs to be done.

#### 2.2.9 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Empowers Claude to tackle ambitious tasks that would normally be too complex or time-consuming, deferring to user judgment on scope appropriateness.

#### 2.2.10 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instructs Claude to avoid brute-forcing blocked approaches. Instead, consider alternatives or use ask-user tools to align on the right path when APIs fail or tests don't pass.

#### 2.2.11 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels when requested.

### 2.3 Git Operations & Version Control

Git workflows include creating commits with pre-populated context from status and diffs, creating pull requests with feature branches and proper attribution, and managing isolated worktrees for branch-specific work. Always respect hooks and signing requirements unless explicitly requested, prefer creating new commits over amending, and consider safer alternatives before destructive operations like reset --hard or force push. Session titles and branch names follow naming conventions (max 6 words sentence case for titles; max 4 words lowercase with dashes prefixed 'claude/' for branches).

#### 2.3.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

#### 2.3.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Provides comprehensive step-by-step instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, and proper formatting with HEREDOCs.

#### 2.3.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs never to skip hooks or bypass signing unless explicitly requested by the user.

#### 2.3.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to prefer creating new commits over amending existing ones.

#### 2.3.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, only when explicitly requested by the user.

#### 2.3.6 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree, restoring the original working directory with options to keep or remove the worktree and its branch.

#### 2.3.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context from git status and diff. Analyzes staged changes, drafts a message following repository style, stages files, and commits using heredoc syntax while enforcing safety protocols.

#### 2.3.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request with pre-populated context. Creates or switches to a feature branch, commits changes with attribution, pushes to origin, and creates or updates a PR with title and body using heredoc syntax while enforcing git safety protocols.

#### 2.3.9 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates concise session titles (max 6 words, sentence case) and git branch names (max 4 words, lowercase with dashes, prefixed with 'claude/') from session descriptions.

#### 2.3.10 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status snapshot at conversation start including branch, main branch, status, and recent commits. Notes that status does not update during conversation.

### 2.4 Verification & Testing

Comprehensive testing and validation workflows that execute code, observe behavior, and generate evidence-based verdicts. Includes adversarial testing for edge cases, build validation, test suite execution, and project-specific verification patterns for CLI, API, and web applications.

#### 2.4.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Comprehensive verification workflow for validating code changes by running the app and observing behavior, with discovery ladder, planning, execution, and reporting patterns.

#### 2.4.2 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive onboarding for creating verifier skills for the Verify agent, including auto-detection of project type, tool setup (Playwright, Tmux, HTTP), authentication handling, and skill generation.

#### 2.4.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying CLI changes by building, running with test arguments, and comparing output against expected behavior.

#### 2.4.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying server/API changes using curl requests, server lifecycle management, and response validation.

#### 2.4.5 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial verification agent that tests implementations by running builds, test suites, linters, and adversarial probes (concurrency, boundary values, idempotency, orphan operations). Issues PASS/FAIL/PARTIAL verdicts with command output evidence; prohibited from modifying project files or installing dependencies.

---

## 3. Agent Orchestration and Planning

Deploying and coordinating subagents and multi-agent teams, structured planning workflows with user approval gates, and implementation pipelines for executing changes.

### 3.1 Subagent and Team Coordination

Spawning specialized subagents for parallel work, coordinating swarm teams with shared task lists, and managing agent lifecycles and messaging protocols.

#### 3.1.1 Agent & Subagent Orchestration

Specialized subagent deployment for parallel task execution, codebase exploration, and research with context-aware prompt strategies that distinguish between context-inheriting and fresh agents while prohibiting result fabrication.

##### 3.1.1.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Provides detailed usage guidance for the Agent tool, covering agent descriptions, background execution, resumption via messaging, worktree isolation, and context-specific constraints for subagents and teammates.

##### 3.1.1.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses that autonomously handle complex multi-step tasks with specific capabilities.

##### 3.1.1.3 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Directs Claude to use the Task tool with specialized subagents for comprehensive codebase exploration and deep research when simple directed searches are insufficient.

##### 3.1.1.4 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool with specialized subagents for parallelizing queries and protecting context, while avoiding duplicate work.

##### 3.1.1.5 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts, distinguishing between context-inheriting agents (directive-focused) and fresh agents (context-heavy), while emphasizing that synthesis should never be delegated.

##### 3.1.1.6 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results, showing how coordinators fork work and respond to mid-wait user questions.

##### 3.1.1.7 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for research and implementation work. Prohibits reading fork output mid-flight or fabricating results, requiring trust in completion notifications and cache reuse.

##### 3.1.1.8 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and to do so with appropriate context.

##### 3.1.1.9 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Forked worker sub-agent that executes directives directly without spawning further sub-agents, using tools silently and reporting structured results with scope, findings, key files, changes, and issues.

##### 3.1.1.10 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases. Searches broadly when uncertain, analyzes multiple files, and reports findings concisely without creating unnecessary documentation.

##### 3.1.1.11 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only exploration agent specialized in navigating codebases via glob patterns, regex searches, and file reading. Strictly prohibited from file modifications, deletions, or state changes; adapts search thoroughness based on caller specification.

#### 3.1.2 Team Coordination & Swarm Agents

Multi-agent team orchestration with shared task lists, structured messaging protocols, and graceful lifecycle management enabling coordinated parallel work across teammate agents.

##### 3.1.2.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Creates and manages teams of coordinated agents with shared task lists, handling teammate spawning, task assignment, message delivery, and idle state management for parallel work.

##### 3.1.2.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all teammates to be terminated first.

##### 3.1.2.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from the shared task list, prioritizing by ID order and managing task ownership.

##### 3.1.2.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to teammates in agent teams with protocol responses for shutdown and plan approval requests, requiring JSON message format for structured communication.

##### 3.1.2.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and messaging protocol, instructing use of teammate names for coordination and task management.

##### 3.1.2.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down team members gracefully and clean up before providing final response in non-interactive mode.

##### 3.1.2.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool with specific recipients (named teammates or broadcast) for communication, as text responses are not visible to teammates.

##### 3.1.2.8 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and type description for injection into conversation context.

### 3.2 Planning and Implementation Workflows

Multi-phase planning that enforces exploration before implementation, structured worker pipelines for code changes, and decision escalation to stronger models.

#### 3.2.1 Planning Mode & Implementation Planning

Multi-phase planning workflows that enforce read-only exploration before implementation, supporting iterative pair-planning, parallel multi-agent design, and structured plan verification with user approval gates.

##### 3.2.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore codebases and design implementation approaches for user approval before coding, used for non-trivial tasks involving multiple approaches, architectural decisions, or multi-file changes.

##### 3.2.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning and requests user approval of the implementation plan written to the plan file, used only for code-writing tasks, not research.

##### 3.2.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Activates 5-phase plan mode with parallel exploration and multi-agent planning, prohibiting execution while enforcing read-only operations except for plan file edits. Phases include initial understanding with parallel explore agents, design with plan agents, review, phase four retrieval, and plan mode exit.

##### 3.2.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative plan mode for pair-planning with the user, enforcing read-only operations while allowing plan file edits. Instructs Claude to explore code, update the plan incrementally, ask clarifying questions, and exit only via plan approval or user questions.

##### 3.2.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents enforcing read-only operations and plan file edits only, instructing comprehensive query answers with clarifying questions as needed.

##### 3.2.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, requiring evaluation of existing plan against new request and decision to continue or restart planning.

##### 3.2.1.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and execution can now proceed with edits, tools, and actions.

##### 3.2.1.8 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Activates ultraplan mode for exceptionally thorough implementation planning using parallel multi-agent exploration, synthesis, and critique, with strict plan-only execution and specific response protocols for approval or error states.

##### 3.2.1.9 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 3.2.1.10 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 3.2.1.11 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Phase 4 of plan mode writes the final plan to file with file paths, changes per file, function references, and a verification command, with a hard 40-line limit.

##### 3.2.1.12 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans in read-only mode. Explores codebase, identifies patterns and dependencies, designs solutions following assigned perspectives, and outputs step-by-step strategies with critical files identified.

#### 3.2.2 Worker & Implementation Workflow

Structured guidance for implementing changes through a defined pipeline: code simplification, testing phases, version control operations, and review submission. Includes advisory mechanisms for escalating decisions to stronger models before committing to substantive work.

##### 3.2.2.1 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for workers implementing changes: simplify code, run unit tests, perform end-to-end testing, commit and push with PR creation, and report the PR URL.

##### 3.2.2.2 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the advisor tool, which forwards conversation history to a stronger reviewer model for guidance before substantive work.

##### 3.2.2.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or flag-heavy commands.

---

## 4. Session State, Memory, and Project Configuration

Preserving context across sessions, maintaining institutional knowledge and memory, tracking task progress, configuring projects via CLAUDE.md, and lightweight operational reminders.

### 4.1 Memory and Knowledge Persistence

Capturing domain discoveries and architectural patterns across sessions, consolidating memory, and recovering session context efficiently.

#### 4.1.1 Memory & Context Persistence

Institutional knowledge systems that capture domain-specific discoveries, user feedback, and architectural patterns across sessions, with consolidation mechanisms that maintain memory coherence while pruning stale information.

##### 4.1.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, including its type description.

##### 4.1.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

##### 4.1.1.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Instructs agents to update memory with domain-specific discoveries during conversations, building institutional knowledge. Provides templates for code reviewers, test runners, architects, and documentation writers to record patterns, decisions, and conventions relevant to their tasks.

##### 4.1.1.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as information about role, goals, responsibilities, and knowledge to tailor behavior and collaboration. Emphasizes building helpful understanding while avoiding negative judgements or irrelevant details.

##### 4.1.1.5 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type that stores guidance about work approaches from both successes and failures, with checks for contradictions against team memories.

##### 4.1.1.6 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to attach for the main agent, excluding usage documentation for recently-used tools but including warnings and known issues.

##### 4.1.1.7 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs a multi-phase memory consolidation pass: orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to stay under size limits while removing stale or contradicted facts.

##### 4.1.1.8 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Magic Docs update agent that incorporates new learnings into documentation while preserving headers and maintaining current state. Emphasizes terseness, architecture over implementation details, and removal of outdated information rather than historical tracking.

#### 4.1.2 Session Management & Continuity

Mechanisms for preserving and resuming work across sessions, including structured conversation summaries, session metadata templates, and title generation. Enables efficient context recovery when sessions pause or move between machines.

##### 4.1.2.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries for resuming incomplete tasks. Requires task overview, current state, discoveries, next steps, and context preservation to enable efficient resumption without duplicating work.

##### 4.1.2.2 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and the working directory has been updated.

##### 4.1.2.3 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before conversation summarization but is too large to include, directing use of the Read tool if needed.

##### 4.1.2.4 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections: primary request, technical concepts, files and code, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps. Includes analysis phase to ensure thoroughness and technical accuracy.

##### 4.1.2.5 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages (after retained context) in nine sections: primary request, technical concepts, files and code, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps. Includes analysis phase for accuracy.

##### 4.1.2.6 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise, sentence-case session titles (3-7 words) that capture the main topic or goal, enabling users to recognize sessions in a list.

##### 4.1.2.7 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Session search agent that finds relevant sessions by prioritizing user-assigned tags, then title, branch, summary, and semantic similarity. Designed to be inclusive—returning more results than too few—with tag matches weighted highest since they represent explicit user categorization.

##### 4.1.2.8 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing current state, task spec, files, workflow, errors, codebase docs, learnings, and worklog.

### 4.2 Task Tracking and Project Setup

Structured task state management during coding sessions, CLAUDE.md project configuration files, and system-level operational constraints.

#### 4.2.1 Task Management & Progress Tracking

Structured task tracking for coding sessions with state management (pending, in-progress, completed) and system reminders that encourage progress documentation without interrupting workflow.

##### 4.2.1.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with task states (pending, in_progress, completed) and dual-form descriptions for tracking progress on complex multi-step work.

##### 4.2.1.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress and organize complex multi-step work with clear, actionable titles and descriptions.

##### 4.2.1.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Directs Claude to use TodoWrite for breaking down work, tracking progress, and marking tasks complete immediately upon finishing.

##### 4.2.1.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress tracking when relevant, without mentioning the reminder to the user.

##### 4.2.1.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use TodoWrite tool for task tracking when relevant, without mentioning the reminder to the user.

#### 4.2.2 CLAUDE.md & Project Configuration

Project-level configuration and documentation infrastructure that establishes development context through CLAUDE.md files containing architecture, commands, and guidance. Supports minimal mode for explicit context control and scratchpad isolation for session-specific temporary work.

##### 4.2.2.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and skills/hooks in a repository, including codebase exploration, user interviews, proposal refinement, and artifact generation.

##### 4.2.2.2 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files containing commonly-used commands, high-level architecture, and development guidance for future Claude Code instances. Avoids obvious instructions and generic practices.

##### 4.2.2.3 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Minimal mode disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags for auth, MCP, settings, and CLAUDE.md.

##### 4.2.2.4 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, avoiding permission prompts and keeping work isolated from the project.

#### 4.2.3 Miscellaneous System Reminders & Context

Lightweight contextual reminders that establish operational constraints and formatting expectations: restricting tool availability for side questions and activating output style guidelines.

##### 4.2.3.1 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude that a side question is being asked by a lightweight agent without tools, requiring a direct answer based only on conversation context with no follow-up capability.

##### 4.2.3.2 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

---

## 5. Hooks, Skills, and Workflow Automation

Lifecycle hooks that intercept tool execution, slash command skills that extend Claude's capabilities, reusable skill creation frameworks, and scheduled cron-based task automation.

### 5.1 Hooks & Lifecycle Event Handling

Event-driven architecture for intercepting and controlling tool execution through lifecycle hooks that run at permission requests, pre/post-tool stages, and completion points. Hooks execute shell commands or agents, return structured results, and can block or modify behavior before it reaches the model.

#### 5.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines how to configure lifecycle hooks in Claude Code that run shell commands, prompts, or agents at specific events (PermissionRequest, PreToolUse, PostToolUse, etc.) with JSON input/output for controlling tool behavior, blocking actions, and injecting context back to the model.

#### 5.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook command to Claude.

#### 5.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command to Claude.

#### 5.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude when a hook stops continuation, displaying the hook name and stop message.

#### 5.1.5 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix for messages indicating that a hook stopped and continuation is needed.

#### 5.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Notifies Claude of successful hook execution with the hook name and result content.

#### 5.1.7 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether the condition is met or providing a reason if not.

#### 5.1.8 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning a structured result indicating whether the agent completed its assigned plan.

#### 5.1.9 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json), including reading existing config, merging changes, and validating hooks.

#### 5.1.10 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks for Claude Code, including dedup checks, command construction, pipe testing, syntax validation, and live proof.

### 5.2 Skills & Slash Commands

Domain-specific capabilities invoked via slash commands that extend Claude's functionality with specialized workflows: batch processing for parallel codebase changes, scheduling remote agents, GitHub integration for PR review and comments, code quality analysis, and diagnostic troubleshooting.

#### 5.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation, requiring invocation before generating responses when skills match user requests.

#### 5.2.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Explains that slash commands invoke user-invocable skills via the Skill tool, with strict limitations to only listed skills.

#### 5.2.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Displays the list of skills invoked in the current session and instructs Claude to follow their guidelines.

#### 5.2.4 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts to cron expression, and schedules recurring tasks with automatic execution.

#### 5.2.5 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning processes, identifying high CPU/memory/I/O issues, and posting diagnostic reports to Slack.

#### 5.2.6 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel agents to identify code reuse opportunities, quality issues, and efficiency problems.

#### 5.2.7 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions using debug logs, identifying errors and warnings, and suggesting concrete fixes.

#### 5.2.8 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes across 5-30 independent work units. Conducts research and planning in plan mode, decomposes work into mergeable units, determines end-to-end test recipes, then spawns background worker agents in isolated worktrees to execute changes in parallel.

#### 5.2.9 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via Anthropic cloud API. Supports creating, updating, listing, and running triggers with full isolation, MCP connector attachment, environment selection, and timezone-aware cron expression conversion.

#### 5.2.10 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and code review comments with file/line context, preserving threading and formatting diff hunks.

#### 5.2.11 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diff, then analyzing code quality, style, correctness, conventions, performance, test coverage, and security with concise, sectioned feedback.

### 5.3 Skill Creation & Workflow Automation

Framework for converting repeatable workflows into reusable skills and autonomous agents. Extracts user intent through structured interviews, designs expert personas with optimized system prompts, and validates rule-based automation logic for clarity and conflict-free execution.

#### 5.3.1 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides conversion of a session into a reusable skill through 4 steps: analyzing the repeatable process, interviewing the user with AskUserQuestion across 4 rounds, writing SKILL.md with frontmatter and step annotations, and confirming before saving.

#### 5.3.2 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design high-performance AI agent configurations by extracting user intent, creating expert personas, architecting comprehensive system prompts, and optimizing for performance with decision-making frameworks and quality controls. Outputs a JSON object with agent identifier, usage conditions, and complete system prompt.

#### 5.3.3 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability. Evaluates allow/soft_deny/environment rule categories to ensure the LLM classifier can interpret and act on them effectively.

### 5.4 Scheduling & Cron Jobs

Enables creation of scheduled tasks using standard cron syntax with timezone support, including guidance on load distribution, session persistence, and automatic expiration management.

#### 5.4.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Enables scheduling one-shot or recurring cron-based jobs using standard 5-field cron syntax in user's local timezone. Provides guidance on avoiding :00 and :30 minute marks to reduce API load, managing durability for session persistence, and auto-expiration after a configurable timeframe.

---

## 6. Claude API and SDK References

Official SDK documentation across multiple languages, agent SDK patterns, tool use and streaming APIs, foundational guides for building Claude applications, and GitHub/CI integration.

### 6.1 Language SDKs and Core API

Multi-language SDK references covering client initialization, streaming, tool use, vision, prompt caching, and error handling; plus model catalog and HTTP error codes.

#### 6.1.1 Claude API Reference (Multi-Language SDKs)

Language-specific SDK references for integrating Claude across Python, TypeScript, Go, Java, C#, PHP, Ruby, and raw HTTP. Each covers client initialization, streaming, tool use, vision capabilities, prompt caching, extended thinking, structured outputs, and token management with language-idiomatic patterns. The model catalog provides current model IDs, pricing, and capability discovery via the Models API, while HTTP error codes reference enables robust error handling and retry strategies.

##### 6.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, system prompts, vision (base64 and URL), prompt caching, extended thinking (adaptive and deprecated), error handling, multi-turn conversations, compaction, stop reasons, and cost optimization strategies.

##### 6.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, system prompts, vision (URL and base64), prompt caching, extended thinking (adaptive and deprecated), error handling, multi-turn conversations, compaction, stop reasons, and cost optimization.

##### 6.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use via BetaToolRunner and manual loops, thinking (adaptive and deprecated), prompt caching, server-side tools, PDF input, Files API, and context editing.

##### 6.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking (adaptive and deprecated), tool use via BetaToolRunner with annotated classes and memory tool, effort parameter, prompt caching, token counting, structured output, PDF input, server-side tools, and Files API.

##### 6.1.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking (adaptive and deprecated), tool use with manual JSON schema, effort parameter, prompt caching, token counting, structured output, PDF input, server-side tools, and beta features including context editing and Files API.

##### 6.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization (Anthropic, Bedrock, Vertex AI, Foundry), basic requests, streaming, tool use via BetaRunnableTool and manual loops, extended thinking (adaptive and deprecated), prompt caching, structured outputs, and beta features.

##### 6.1.1.7 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, tool use via BetaToolRunner and manual loops, and prompt caching.

##### 6.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, response parsing with jq, streaming (SSE), tool use loops, prompt caching, extended thinking, and required headers.

##### 6.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of Claude models with exact IDs, aliases, context windows, and pricing. Includes programmatic model discovery via Models API for live capability data (vision, thinking, effort, structured outputs). Lists current models (Opus 4.6, Sonnet 4.6, Haiku 4.5), legacy active models, deprecated, and retired models.

##### 6.1.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400–529) with causes, fixes, and SDK exception handling patterns. Covers validation errors, authentication, rate limiting, and retry strategies.

##### 6.1.1.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, organized by topic with extraction prompts for each resource.

#### 6.1.2 Tool Use & Streaming API References

Comprehensive tool use and streaming documentation covering both tool runner abstractions and manual agentic loops across Python and TypeScript. Includes server-side capabilities (code execution, web search), structured output schemas, the Files API for document processing, Batches API for cost-optimized async processing, and prompt caching design principles for cache-aware architecture.

##### 6.1.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), and structured outputs.

##### 6.1.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference with tool runner, manual agentic loop, code execution, MCP conversion helpers, memory tool, and structured outputs with Pydantic schemas.

##### 6.1.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loop with streaming, code execution, memory tool, and structured outputs.

##### 6.1.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content types, and best practices for token tracking and error handling.

##### 6.1.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, tool runner integration, and stream event types with best practices.

##### 6.1.2.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload (max 500 MB), usage in messages (PDF/text and images), file management (list, retrieve metadata, delete, download), and end-to-end example.

##### 6.1.2.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages (PDF/text documents), and file management (list, delete, download).

##### 6.1.2.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, polling for completion, result retrieval, and container reuse at 50% cost reduction.

##### 6.1.2.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Guide to designing prompt-building code for effective caching, covering prefix-stability principles, breakpoint placement patterns, and silent invalidators that break cache hits.

### 6.2 Agent SDK, Build Guides, and CI/CD

Agent SDK documentation for Python and TypeScript, foundational architecture guides for building Claude applications, and GitHub Actions integration templates.

#### 6.2.1 Agent SDK Reference & Patterns

Agent SDK documentation for Python and TypeScript covering the query interface, built-in tools, permission modes, MCP integration, hooks, subagents, and session management. Patterns guide demonstrate agent construction, custom tool definition via MCP, error recovery, and session resumption workflows.

##### 6.2.1.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP support, hooks, subagents, error handling, session history, and best practices.

##### 6.2.1.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference covering installation, query interface, built-in tools, permission modes, MCP support, hooks, subagents, message types, session history, and best practices.

##### 6.2.1.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks, subagents, MCP server integration, permission modes, error recovery, session resumption, and session history management.

##### 6.2.1.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks, subagents, MCP server integration, session resumption, session history, and session mutations.

#### 6.2.2 Build with Claude API Skills

Foundational guides for building Claude applications, including architecture routing (single call vs workflow vs agent), language-specific reference templates, and a documentation agent that helps users navigate Claude Code, Agent SDK, and API integration patterns.

##### 6.2.2.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, including language detection, surface selection (single call vs workflow vs agent), architecture overview, and model defaults.

##### 6.2.2.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation to relevant sections for common use cases.

##### 6.2.2.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant resources, and providing actionable guidance. Covers installation, configuration, hooks, skills, MCP servers, SDK development, and API integration.

#### 6.2.3 GitHub Integration & CI/CD

GitHub integration templates for Claude Code, including installation guidance and GitHub Actions workflows that trigger Claude via @claude mentions in issues and pull requests.

##### 6.2.3.1 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining what Claude Code does, how it works, security considerations, and setup instructions.

##### 6.2.3.2 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code via @claude mentions in issues, pull requests, and comments. Includes optional custom prompt and claude_args configuration.

---

## 7. User Interaction, Communication, and Analytics

Output style and messaging discipline, interactive questioning and visual previews, learning and teaching modes, usage analytics, and contextual prompt suggestions.

### 7.1 Output Style and Interactive Questioning

Concise, direct response patterns; clarification mechanisms with visual previews; and educational modes that guide users step-by-step.

#### 7.1.1 Output Style & Communication

Delivers information efficiently through concise, direct responses prioritizing decisions and blockers over reasoning. Routes user-facing output through dedicated messaging tools with clear acknowledgments and checkpoints. Uses precise code citations and present-tense action summaries for clarity.

##### 7.1.1.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler, and focusing output on decisions, status updates, and blockers.

##### 7.1.1.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing code for easy user navigation to source locations.

##### 7.1.1.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 7.1.1.4 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to send all user-facing replies through SendUserMessage, with guidance on acknowledgments, checkpoints, and concise messaging to ensure users see actual results rather than status updates.

##### 7.1.1.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Defines format for agent action summaries: 3-5 words in present tense (-ing form), naming specific files or functions rather than branches, with examples of good and bad patterns.

##### 7.1.1.6 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths, share relevant paths in final responses, avoid emojis, and omit colons before tool calls for clearer communication.

##### 7.1.1.7 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends messages to users with markdown support and file attachments, using status labels to indicate intent (normal vs. proactive).

#### 7.1.2 User Interaction & Question Asking

Interactive questioning mechanisms that gather user preferences, clarify ambiguous instructions, and present implementation choices through visual previews. Single-select questions support optional HTML preview fields for side-by-side comparison of UI mockups, code snippets, and design alternatives.

##### 7.1.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying ambiguous instructions, and offering implementation choices during execution, with special guidance for plan mode.

##### 7.1.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructs how to use the optional preview field on single-select question options to display self-contained HTML artifacts like UI mockups, code snippets, and visual comparisons.

##### 7.1.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using monospace markdown, supporting ASCII mockups, code snippets, diagrams, and configuration examples for single-select questions.

#### 7.1.3 Learning & Teaching Modes

Educational interaction modes that balance task completion with hands-on learning. Learning mode requests human contributions on design decisions and provides implementation insights, while teach mode guides users through tasks step-by-step using interactive overlays rather than direct tool access.

##### 7.1.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Defines learning mode behavior where Claude balances task completion with hands-on education by requesting human contributions on design decisions, using TodoList tracking, and providing educational insights about implementation choices.

##### 7.1.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights in learning mode by displaying 2-3 key learning points about implementation choices before and after code writing.

##### 7.1.3.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct tool access.

### 7.2 Analytics, Suggestions, and Feedback

Aggregated session analytics for workflow optimization, contextual next-action suggestions, and configuration translation from shell environments.

#### 7.2.1 Usage Insights & Analytics

Aggregated analytics framework that extracts session data into structured insights, identifying what's working, friction patterns, and ambitious future workflows. Generates coaching-style feedback on interaction patterns and produces actionable recommendations for feature adoption and workflow optimization.

##### 7.2.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part usage insights summary (what's working, hindrances, quick wins, ambitious workflows) for Claude Code users, using aggregated session data to provide coaching-style feedback on their interaction patterns and future capabilities.

##### 7.2.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns, producing 3 friction categories with examples and explanations of what could be done differently.

##### 7.2.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, including what's possible, relevant tooling, and copyable prompts to try.

##### 7.2.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code session transcripts including goal categories (user-requested only), satisfaction signals, and friction types with specific categorization rules.

##### 7.2.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to user's actual session data.

#### 7.2.2 Agent Prompt Generation & Suggestion

Agents that generate contextual suggestions and configurations: predicting user intent for next actions, translating shell configurations into Claude Code settings, and managing persistent session notes with structured updates. These handle UX guidance, terminal display setup, and conversation memory preservation.

##### 7.2.2.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what the user would naturally type next into Claude Code based on recent context, avoiding evaluative language, questions, or Claude-voice suggestions. Returns only the suggestion or silence if the next step is unclear.

##### 7.2.2.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Status line setup agent that converts shell PS1 configurations to Claude Code statusLine commands, extracting and translating escape sequences to shell commands. Receives JSON input with session metadata, model info, token usage, and rate limits; outputs shell commands or scripts for display in settings.

##### 7.2.2.3 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations, preserving exact structure with section headers and italic descriptions while updating only content below them. Emphasizes detailed, info-dense updates with specific file paths and technical details, respecting token limits per section.

---

## 8. Security, External Tools, and Resource Management

Security review and monitoring, browser automation and web search, IDE integration, file state notifications, MCP protocol resources, and budget/resource tracking.

### 8.1 Security and Safe Execution

Vulnerability detection, autonomous agent action monitoring, risk assessment before destructive operations, and permission-respecting execution strategies.

#### 8.1.1 Security Review & Monitoring

Security analysis and enforcement mechanisms covering vulnerability detection in code diffs, autonomous agent action monitoring against threat models, command injection prevention, and malware analysis. Balances security constraints with authorized testing and defensive security work.

##### 8.1.1.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review agent that analyzes code diffs for exploitable vulnerabilities with high confidence thresholds, excluding DOS, secrets on disk, and rate limiting issues. Uses three-phase methodology: repository context research, comparative analysis against existing patterns, and vulnerability assessment with confidence scoring.

##### 8.1.1.2 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor evaluating autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage. Defines threat model, default allow policy, user intent rules, and evaluation principles for composite actions, sub-agent delegation, and shared infrastructure.

##### 8.1.1.3 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, 25 block rules (git destructive, code from external, production deploy, credential leakage, data exfiltration, etc.) and 6 allow exceptions (test artifacts, local operations, read-only, declared dependencies, toolchain bootstrap, standard credentials) governing autonomous agent tool actions.

##### 8.1.1.4 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands for safety classification. Returns the detected prefix or 'command_injection_detected' to prevent malicious command execution.

##### 8.1.1.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, and CTF challenges while refusing destructive techniques, DoS attacks, and detection evasion. Dual-use tools require clear authorization context.

##### 8.1.1.6 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Emphasizes avoiding security vulnerabilities including command injection, XSS, and SQL injection. Directs immediate fixes if insecure code is written.

##### 8.1.1.7 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, while permitting analysis, reports, and behavior questions.

#### 8.1.2 Safe Action Execution & Risk Management

Balances autonomous execution with protective constraints: assess reversibility and blast radius before destructive operations, require user confirmation for high-risk actions, and optimize tool efficiency through parallel execution when safe. Respects permission denials and adjusts approach rather than circumventing restrictions.

##### 8.1.2.1 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes careful action execution by assessing reversibility and blast radius. Requires user confirmation for destructive, hard-to-reverse, or shared-system actions. Prohibits using destructive shortcuts and directs investigation of unexpected state before deletion.

##### 8.1.2.2 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous execution with immediate action, minimal interruptions, and preference for implementation over planning. Prohibits destructive actions without confirmation and prevents unauthorized data sharing.

##### 8.1.2.3 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Defines tool execution permission modes where users approve or deny tool calls, and Claude adjusts approach rather than retrying denied calls.

##### 8.1.2.4 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

When tool execution is denied, Claude may attempt reasonable alternatives but should not work around denials maliciously, and should stop and explain if the capability is essential.

##### 8.1.2.5 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to maximize efficiency, but run dependent tool calls sequentially when one must complete before another.

### 8.2 Browser, Web, and IDE Tools

Chrome browser automation with visual feedback, web search with source attribution, and IDE integration with LSP-based code intelligence.

#### 8.2.1 Browser Automation & Computer Use

Direct control of Chrome browser through mouse, keyboard, and visual feedback. Requires loading MCP tools before use and emphasizes screenshot consultation before interaction. Includes specialized handling for GIF recording, console debugging, and dialog management to maintain automation flow.

##### 8.2.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse, keyboard, and screenshots. Emphasizes consulting screenshots before clicking and centering cursor on element targets.

##### 8.2.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for Chrome browser computer tool including mouse operations, typing, keyboard input, scrolling, and screenshot capture.

##### 8.2.1.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use. Specifies two-step process: first load the tool with `select:mcp__claude-in-chrome__<tool_name>`, then call it.

##### 8.2.1.4 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with extra frames, console debugging with pattern filtering, avoiding JavaScript dialogs that block commands, and session startup via tabs_context_mcp. Emphasizes staying focused and asking for guidance when blocked.

#### 8.2.2 Web Search & Content Fetching

Retrieves current information and web content with mandatory source attribution. Combines real-time search with URL fetching and markdown conversion, applying quote limits and paraphrasing rules for untrusted sources.

##### 8.2.2.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond Claude's knowledge cutoff with mandatory source citation in responses, supporting domain filtering and requiring current year in queries.

##### 8.2.2.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content from URLs by converting HTML to markdown and processing with a fast model, supporting redirect handling and 15-minute caching.

##### 8.2.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizer agent for WebFetch output that provides concise responses based on web content, enforcing 125-character quote limits for untrusted domains and paraphrasing requirements.

#### 8.2.3 IDE Integration & Editor Context

Real-time awareness of user interactions within the IDE, including file focus, code selection, and diagnostic feedback. Language Server Protocol integration provides code intelligence capabilities like symbol navigation, type information, and call hierarchy analysis.

##### 8.2.3.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 8.2.3.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in the IDE, providing the filename and line range with content.

##### 8.2.3.3 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues with a summary of problems.

##### 8.2.3.4 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interacts with Language Server Protocol servers to provide code intelligence features including go-to-definition, find-references, hover information, and call hierarchy analysis.

### 8.3 Context Notifications and Resource Tracking

File state alerts for truncation and external modifications, MCP resource and tool discovery, and computational/financial budget monitoring.

#### 8.3.1 File State & Context Notifications

Alerts Claude to file state conditions that affect content access and interpretation: truncation limits, empty files, read offset errors, and external modifications from users or linters. Enables accurate handling of partial or changed content.

##### 8.3.1.1 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs use of the Read tool to access additional content.

##### 8.3.1.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 8.3.1.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that a file read offset exceeds the file's length and provides the actual file size.

##### 8.3.1.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides the relevant changes with line numbers for reference.

#### 8.3.2 Resource & Budget Monitoring

Tracks consumption metrics for both computational tokens and financial costs, displaying used, total, and remaining allocations to maintain awareness of resource constraints.

##### 8.3.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 8.3.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including used, total, and remaining amounts.

#### 8.3.3 MCP Integration & Resources

Manages Model Context Protocol resource availability and tool discovery, handling cases where resources lack displayable content and enabling deferred tool definition retrieval through schema-based queries.

##### 8.3.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource has no content available.

##### 8.3.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

##### 8.3.3.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool definitions by querying against a tool list, returning complete JSONSchema definitions for invocation with support for exact name selection and keyword search.
