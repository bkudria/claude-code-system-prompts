# Claude Code System Prompts Index

A technical reference for building, configuring, and operating Claude Code—covering everything needed to go from API integration and environment setup through autonomous multi-agent execution with safe, high-quality code changes.

## Table of Contents

1. [Bash & Shell Execution](#1-bash-shell-execution)
   1. [Bash Tool: Core Behavior & Syntax Rules](#11-bash-tool-core-behavior-syntax-rules)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (no newlines) [Tool Description]](#112-bash-no-newlines-tool-description)
      3. [Bash (semicolon usage) [Tool Description]](#113-bash-semicolon-usage-tool-description)
      4. [Bash (sequential commands) [Tool Description]](#114-bash-sequential-commands-tool-description)
      5. [Bash (parallel commands) [Tool Description]](#115-bash-parallel-commands-tool-description)
      6. [Bash (maintain cwd) [Tool Description]](#116-bash-maintain-cwd-tool-description)
      7. [Bash (working directory) [Tool Description]](#117-bash-working-directory-tool-description)
      8. [Bash (quote file paths) [Tool Description]](#118-bash-quote-file-paths-tool-description)
      9. [Bash (timeout) [Tool Description]](#119-bash-timeout-tool-description)
      10. [Bash (verify parent directory) [Tool Description]](#1110-bash-verify-parent-directory-tool-description)
      11. [Bash (command description) [Tool Description]](#1111-bash-command-description-tool-description)
      12. [Bash (built-in tools note) [Tool Description]](#1112-bash-built-in-tools-note-tool-description)
   2. [Bash Tool: Preferred Alternatives to Shell Commands](#12-bash-tool-preferred-alternatives-to-shell-commands)
      1. [Bash (alternative — communication) [Tool Description]](#121-bash-alternative-—-communication-tool-description)
      2. [Bash (alternative — content search) [Tool Description]](#122-bash-alternative-—-content-search-tool-description)
      3. [Bash (alternative — edit files) [Tool Description]](#123-bash-alternative-—-edit-files-tool-description)
      4. [Bash (alternative — file search) [Tool Description]](#124-bash-alternative-—-file-search-tool-description)
      5. [Bash (alternative — read files) [Tool Description]](#125-bash-alternative-—-read-files-tool-description)
      6. [Bash (alternative — write files) [Tool Description]](#126-bash-alternative-—-write-files-tool-description)
      7. [Bash (prefer dedicated tools) [Tool Description]](#127-bash-prefer-dedicated-tools-tool-description)
   3. [Bash Tool: Sandbox Security & Restrictions](#13-bash-tool-sandbox-security-restrictions)
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
   4. [Bash Tool: Git & Sleep Behavior](#14-bash-tool-git-sleep-behavior)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#141-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#142-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#143-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#144-bash-git-—-prefer-new-commits-tool-description)
      5. [Bash (sleep — keep short) [Tool Description]](#145-bash-sleep-—-keep-short-tool-description)
      6. [Bash (sleep — no polling background tasks) [Tool Description]](#146-bash-sleep-—-no-polling-background-tasks-tool-description)
      7. [Bash (sleep — run immediately) [Tool Description]](#147-bash-sleep-—-run-immediately-tool-description)
      8. [Bash (sleep — use check commands) [Tool Description]](#148-bash-sleep-—-use-check-commands-tool-description)
2. [Tools, File Operations & External Data](#2-tools-file-operations-external-data)
   1. [Tool Preference & File Operation Policies](#21-tool-preference-file-operation-policies)
      1. [Tool usage (create files) [System Prompt]](#211-tool-usage-create-files-system-prompt)
      2. [Tool usage (edit files) [System Prompt]](#212-tool-usage-edit-files-system-prompt)
      3. [Tool usage (read files) [System Prompt]](#213-tool-usage-read-files-system-prompt)
      4. [Tool usage (search content) [System Prompt]](#214-tool-usage-search-content-system-prompt)
      5. [Tool usage (search files) [System Prompt]](#215-tool-usage-search-files-system-prompt)
      6. [Tool usage (reserve Bash) [System Prompt]](#216-tool-usage-reserve-bash-system-prompt)
      7. [Tool usage (direct search) [System Prompt]](#217-tool-usage-direct-search-system-prompt)
      8. [Tool usage (delegate exploration) [System Prompt]](#218-tool-usage-delegate-exploration-system-prompt)
      9. [Tool usage (subagent guidance) [System Prompt]](#219-tool-usage-subagent-guidance-system-prompt)
      10. [Tool usage (task management) [System Prompt]](#2110-tool-usage-task-management-system-prompt)
      11. [Tool usage (skill invocation) [System Prompt]](#2111-tool-usage-skill-invocation-system-prompt)
   2. [File System & Code Intelligence](#22-file-system-code-intelligence)
      1. [ReadFile (Tool Description)](#221-readfile-tool-description)
      2. [Write (Tool Description)](#222-write-tool-description)
      3. [Edit (Tool Description)](#223-edit-tool-description)
      4. [Grep (Tool Description)](#224-grep-tool-description)
      5. [LSP (Tool Description)](#225-lsp-tool-description)
   3. [Web & External Data Tools](#23-web-external-data-tools)
      1. [WebFetch (Tool Description)](#231-webfetch-tool-description)
      2. [WebSearch (Tool Description)](#232-websearch-tool-description)
      3. [WebFetch summarizer (Agent Prompt)](#233-webfetch-summarizer-agent-prompt)
   4. [Specialized Tool Descriptions: Misc](#24-specialized-tool-descriptions-misc)
      1. [NotebookEdit (Tool Description)](#241-notebookedit-tool-description)
      2. [PowerShell (Tool Description)](#242-powershell-tool-description)
      3. [Sleep (Tool Description)](#243-sleep-tool-description)
      4. [ToolSearch (second part) [Tool Description]](#244-toolsearch-second-part-tool-description)
      5. [AskUserQuestion (Tool Description)](#245-askuserquestion-tool-description)
      6. [AskUserQuestion (preview field) [Tool Description]](#246-askuserquestion-preview-field-tool-description)
      7. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#247-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
   5. [MCP Resource Handling](#25-mcp-resource-handling)
      1. [MCP resource no content (System Reminder)](#251-mcp-resource-no-content-system-reminder)
      2. [MCP resource no displayable content (System Reminder)](#252-mcp-resource-no-displayable-content-system-reminder)
   6. [Resource & Budget Monitoring](#26-resource-budget-monitoring)
      1. [Token usage (System Reminder)](#261-token-usage-system-reminder)
      2. [USD budget (System Reminder)](#262-usd-budget-system-reminder)
3. [Agent Orchestration & Multi-Agent Coordination](#3-agent-orchestration-multi-agent-coordination)
   1. [Plan Mode: Activation & Workflow Phases](#31-plan-mode-activation-workflow-phases)
      1. [Plan mode is active (5-phase) [System Reminder]](#311-plan-mode-is-active-5-phase-system-reminder)
      2. [Plan mode is active (iterative) [System Reminder]](#312-plan-mode-is-active-iterative-system-reminder)
      3. [Plan mode is active (subagent) [System Reminder]](#313-plan-mode-is-active-subagent-system-reminder)
      4. [Plan mode re-entry (System Reminder)](#314-plan-mode-re-entry-system-reminder)
      5. [Ultraplan mode (System Reminder)](#315-ultraplan-mode-system-reminder)
      6. [Plan file reference (System Reminder)](#316-plan-file-reference-system-reminder)
      7. [Verify plan reminder (System Reminder)](#317-verify-plan-reminder-system-reminder)
      8. [Exited plan mode (System Reminder)](#318-exited-plan-mode-system-reminder)
      9. [EnterPlanMode (Tool Description)](#319-enterplanmode-tool-description)
      10. [ExitPlanMode (Tool Description)](#3110-exitplanmode-tool-description)
      11. [Phase four of plan mode (System Prompt)](#3111-phase-four-of-plan-mode-system-prompt)
      12. [Plan mode (enhanced) [Agent Prompt]](#3112-plan-mode-enhanced-agent-prompt)
   2. [Subagent & Team Execution](#32-subagent-team-execution)
      1. [Agent & Subagent Orchestration](#321-agent-subagent-orchestration)
         1. [Agent (usage notes) [Tool Description]](#3211-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#3212-agent-when-to-launch-subagents-tool-description)
         3. [Writing subagent prompts (System Prompt)](#3213-writing-subagent-prompts-system-prompt)
         4. [Subagent delegation examples (System Prompt)](#3214-subagent-delegation-examples-system-prompt)
         5. [Fork usage guidelines (System Prompt)](#3215-fork-usage-guidelines-system-prompt)
         6. [Worker fork execution (Agent Prompt)](#3216-worker-fork-execution-agent-prompt)
         7. [General purpose (Agent Prompt)](#3217-general-purpose-agent-prompt)
         8. [Explore (Agent Prompt)](#3218-explore-agent-prompt)
      2. [Multi-Agent Team Coordination](#322-multi-agent-team-coordination)
         1. [Team Coordination (System Reminder)](#3221-team-coordination-system-reminder)
         2. [Team Shutdown (System Reminder)](#3222-team-shutdown-system-reminder)
         3. [Teammate Communication (System Prompt)](#3223-teammate-communication-system-prompt)
         4. [SendMessageTool (Tool Description)](#3224-sendmessagetool-tool-description)
         5. [TeammateTool (Tool Description)](#3225-teammatetool-tool-description)
         6. [TaskList (teammate workflow) [Tool Description]](#3226-tasklist-teammate-workflow-tool-description)
         7. [TeamDelete (Tool Description)](#3227-teamdelete-tool-description)
         8. [/batch slash command (Agent Prompt)](#3228-batch-slash-command-agent-prompt)
      3. [Agent Communication & Side Interactions](#323-agent-communication-side-interactions)
         1. [/btw side question (System Reminder)](#3231-btw-side-question-system-reminder)
         2. [Agent mention (System Reminder)](#3232-agent-mention-system-reminder)
         3. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#3233-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   3. [Task & Todo Management](#33-task-todo-management)
      1. [TodoWrite (Tool Description)](#331-todowrite-tool-description)
      2. [TaskCreate (Tool Description)](#332-taskcreate-tool-description)
      3. [TodoWrite reminder (System Reminder)](#333-todowrite-reminder-system-reminder)
      4. [Task tools reminder (System Reminder)](#334-task-tools-reminder-system-reminder)
4. [Memory, Sessions & Context Continuity](#4-memory-sessions-context-continuity)
   1. [Memory Systems & Session Persistence](#41-memory-systems-session-persistence)
      1. [Memory file contents (System Reminder)](#411-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#412-nested-memory-contents-system-reminder)
      3. [Agent memory instructions (System Prompt)](#413-agent-memory-instructions-system-prompt)
      4. [Memory description of user feedback (System Prompt)](#414-memory-description-of-user-feedback-system-prompt)
      5. [Team memory content display (System Prompt)](#415-team-memory-content-display-system-prompt)
      6. [Description part of memory instructions (System Prompt)](#416-description-part-of-memory-instructions-system-prompt)
      7. [Determine which memory files to attach (Agent Prompt)](#417-determine-which-memory-files-to-attach-agent-prompt)
      8. [Dream memory consolidation (Agent Prompt)](#418-dream-memory-consolidation-agent-prompt)
      9. [Session memory update instructions (Agent Prompt)](#419-session-memory-update-instructions-agent-prompt)
      10. [Session memory template (Data)](#4110-session-memory-template-data)
   2. [Conversation Summarization & Session Navigation](#42-conversation-summarization-session-navigation)
      1. [Conversation & Context Summarization](#421-conversation-context-summarization)
         1. [Conversation summarization (Agent Prompt)](#4211-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#4212-recent-message-summarization-agent-prompt)
         3. [Context compaction summary (System Prompt)](#4213-context-compaction-summary-system-prompt)
         4. [Compact file reference (System Reminder)](#4214-compact-file-reference-system-reminder)
      2. [Session Management & Navigation](#422-session-management-navigation)
         1. [Coding session title generator (Agent Prompt)](#4221-coding-session-title-generator-agent-prompt)
         2. [Session title and branch generation (Agent Prompt)](#4222-session-title-and-branch-generation-agent-prompt)
         3. [Session Search Assistant (Agent Prompt)](#4223-session-search-assistant-agent-prompt)
         4. [Session continuation (System Reminder)](#4224-session-continuation-system-reminder)
         5. [Prompt Suggestion Generator v2 (Agent Prompt)](#4225-prompt-suggestion-generator-v2-agent-prompt)
   3. [Learning & Usage Intelligence](#43-learning-usage-intelligence)
      1. [Learning mode (System Prompt)](#431-learning-mode-system-prompt)
      2. [Learning mode (insights) [System Prompt]](#432-learning-mode-insights-system-prompt)
      3. [request_teach_access (part of teach mode) [Tool Description]](#433-request_teach_access-part-of-teach-mode-tool-description)
      4. [Insights at a glance summary (System Prompt)](#434-insights-at-a-glance-summary-system-prompt)
      5. [Insights friction analysis (System Prompt)](#435-insights-friction-analysis-system-prompt)
      6. [Insights on the horizon (System Prompt)](#436-insights-on-the-horizon-system-prompt)
      7. [Insights session facets extraction (System Prompt)](#437-insights-session-facets-extraction-system-prompt)
      8. [Insights suggestions (System Prompt)](#438-insights-suggestions-system-prompt)
   4. [Debugging, Diagnostics & Process Monitoring](#44-debugging-diagnostics-process-monitoring)
      1. [Debugging (Skill)](#441-debugging-skill)
      2. [/stuck slash command (Skill)](#442-stuck-slash-command-skill)
      3. [Advisor tool instructions (System Prompt)](#443-advisor-tool-instructions-system-prompt)
5. [Code Quality, Safety & Version Control](#5-code-quality-safety-version-control)
   1. [Engineering Discipline & Safe Execution](#51-engineering-discipline-safe-execution)
      1. [Code Quality & Engineering Discipline](#511-code-quality-engineering-discipline)
         1. [Doing tasks (read before modifying) [System Prompt]](#5111-doing-tasks-read-before-modifying-system-prompt)
         2. [Doing tasks (no premature abstractions) [System Prompt]](#5112-doing-tasks-no-premature-abstractions-system-prompt)
         3. [Doing tasks (no unnecessary additions) [System Prompt]](#5113-doing-tasks-no-unnecessary-additions-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#5114-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no unnecessary error handling) [System Prompt]](#5115-doing-tasks-no-unnecessary-error-handling-system-prompt)
         6. [Doing tasks (minimize file creation) [System Prompt]](#5116-doing-tasks-minimize-file-creation-system-prompt)
         7. [Doing tasks (software engineering focus) [System Prompt]](#5117-doing-tasks-software-engineering-focus-system-prompt)
         8. [Doing tasks (ambitious tasks) [System Prompt]](#5118-doing-tasks-ambitious-tasks-system-prompt)
         9. [Doing tasks (blocked approach) [System Prompt]](#5119-doing-tasks-blocked-approach-system-prompt)
         10. [Doing tasks (no time estimates) [System Prompt]](#51110-doing-tasks-no-time-estimates-system-prompt)
         11. [Doing tasks (help and feedback) [System Prompt]](#51111-doing-tasks-help-and-feedback-system-prompt)
      2. [Safe Action Execution & Reversibility](#512-safe-action-execution-reversibility)
         1. [Executing actions with care (System Prompt)](#5121-executing-actions-with-care-system-prompt)
         2. [Auto mode (System Prompt)](#5122-auto-mode-system-prompt)
         3. [System section (System Prompt)](#5123-system-section-system-prompt)
         4. [Tool execution denied (System Prompt)](#5124-tool-execution-denied-system-prompt)
         5. [One of six rules for using sleep command (System Prompt)](#5125-one-of-six-rules-for-using-sleep-command-system-prompt)
   2. [Security: Code Analysis & Threat Detection](#52-security-code-analysis-threat-detection)
      1. [/security-review slash command (Agent Prompt)](#521-security-review-slash-command-agent-prompt)
      2. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#522-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      3. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#523-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      4. [Censoring assistance with malicious activities (System Prompt)](#524-censoring-assistance-with-malicious-activities-system-prompt)
      5. [Malware analysis after Read tool call (System Reminder)](#525-malware-analysis-after-read-tool-call-system-reminder)
      6. [Doing tasks (security) [System Prompt]](#526-doing-tasks-security-system-prompt)
      7. [Bash command prefix detection (Agent Prompt)](#527-bash-command-prefix-detection-agent-prompt)
   3. [Verification & Testing](#53-verification-testing)
      1. [Verification & Testing Workflows](#531-verification-testing-workflows)
         1. [Verify skill (Skill)](#5311-verify-skill-skill)
         2. [Verification specialist (Agent Prompt)](#5312-verification-specialist-agent-prompt)
         3. [Verify CLI changes (example for Verify skill) [Skill]](#5313-verify-cli-changes-example-for-verify-skill-skill)
         4. [Verify server/API changes (example for Verify skill) [Skill]](#5314-verify-serverapi-changes-example-for-verify-skill-skill)
         5. [Create verifier skills (Skill)](#5315-create-verifier-skills-skill)
      2. [Worker Implementation Workflow](#532-worker-implementation-workflow)
         1. [Worker instructions (System Prompt)](#5321-worker-instructions-system-prompt)
         2. [Auto mode rule reviewer (Agent Prompt)](#5322-auto-mode-rule-reviewer-agent-prompt)
         3. [Bash command description writer (Agent Prompt)](#5323-bash-command-description-writer-agent-prompt)
   4. [Git, GitHub & Worktree Management](#54-git-github-worktree-management)
      1. [Git Workflow & GitHub Integration](#541-git-workflow-github-integration)
         1. [Quick git commit (Agent Prompt)](#5411-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#5412-quick-pr-creation-agent-prompt)
         3. [/pr-comments slash command (Agent Prompt)](#5413-pr-comments-slash-command-agent-prompt)
         4. [/review-pr slash command (Agent Prompt)](#5414-review-pr-slash-command-agent-prompt)
         5. [Git status (System Prompt)](#5415-git-status-system-prompt)
         6. [GitHub App installation PR description (Data)](#5416-github-app-installation-pr-description-data)
         7. [GitHub Actions workflow for @claude mentions (Data)](#5417-github-actions-workflow-for-claude-mentions-data)
      2. [Branch & Worktree Isolation](#542-branch-worktree-isolation)
         1. [EnterWorktree (Tool Description)](#5421-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#5422-exitworktree-tool-description)
   5. [Hook System: Configuration & Lifecycle Events](#55-hook-system-configuration-lifecycle-events)
      1. [Hooks Configuration (System Prompt)](#551-hooks-configuration-system-prompt)
      2. [Hook condition evaluator (Agent Prompt)](#552-hook-condition-evaluator-agent-prompt)
      3. [Agent Hook (Agent Prompt)](#553-agent-hook-agent-prompt)
      4. [Hook stopped continuation (System Reminder)](#554-hook-stopped-continuation-system-reminder)
      5. [Hook success (System Reminder)](#555-hook-success-system-reminder)
      6. [Hook additional context (System Reminder)](#556-hook-additional-context-system-reminder)
      7. [Hook blocking error (System Reminder)](#557-hook-blocking-error-system-reminder)
      8. [Hook stopped continuation prefix (System Reminder)](#558-hook-stopped-continuation-prefix-system-reminder)
6. [Configuration, Skills & IDE Integration](#6-configuration-skills-ide-integration)
   1. [Skills, Onboarding & Documentation](#61-skills-onboarding-documentation)
      1. [Skills System: Invocation & Configuration](#611-skills-system-invocation-configuration)
         1. [Skill (Tool Description)](#6111-skill-tool-description)
         2. [Invoked skills (System Reminder)](#6112-invoked-skills-system-reminder)
         3. [Update Claude Code Config (Skill)](#6113-update-claude-code-config-skill)
         4. [update-config (7-step verification flow) [Skill]](#6114-update-config-7-step-verification-flow-skill)
         5. [Skillify Current Session (System Prompt)](#6115-skillify-current-session-system-prompt)
      2. [Project Onboarding & Documentation](#612-project-onboarding-documentation)
         1. [CLAUDE.md creation (Agent Prompt)](#6121-claudemd-creation-agent-prompt)
         2. [/init CLAUDE.md and skill setup (new version) [Skill]](#6122-init-claudemd-and-skill-setup-new-version-skill)
         3. [Claude guide agent (Agent Prompt)](#6123-claude-guide-agent-agent-prompt)
      3. [Code Quality & Knowledge Management](#613-code-quality-knowledge-management)
         1. [Simplify (Skill)](#6131-simplify-skill)
         2. [Update Magic Docs (Agent Prompt)](#6132-update-magic-docs-agent-prompt)
         3. [Agent creation architect (Agent Prompt)](#6133-agent-creation-architect-agent-prompt)
   2. [Output Style, Tone & Communication](#62-output-style-tone-communication)
      1. [Output efficiency (System Prompt)](#621-output-efficiency-system-prompt)
      2. [Tone and style (code references) [System Prompt]](#622-tone-and-style-code-references-system-prompt)
      3. [Tone and style (concise output — short) [System Prompt]](#623-tone-and-style-concise-output-—-short-system-prompt)
      4. [Agent thread notes (System Prompt)](#624-agent-thread-notes-system-prompt)
      5. [Agent Summary Generation (System Prompt)](#625-agent-summary-generation-system-prompt)
      6. [How to use the SendUserMessage tool (System Prompt)](#626-how-to-use-the-sendusermessage-tool-system-prompt)
      7. [SendMessageTool (non-agent-teams) [Tool Description]](#627-sendmessagetool-non-agent-teams-tool-description)
   3. [IDE, File State & Operational Modes](#63-ide-file-state-operational-modes)
      1. [IDE Integration & File State Notifications](#631-ide-integration-file-state-notifications)
         1. [Lines selected in IDE (System Reminder)](#6311-lines-selected-in-ide-system-reminder)
         2. [File opened in IDE (System Reminder)](#6312-file-opened-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#6313-file-modified-by-user-or-linter-system-reminder)
         4. [File truncated (System Reminder)](#6314-file-truncated-system-reminder)
         5. [File exists but empty (System Reminder)](#6315-file-exists-but-empty-system-reminder)
         6. [File shorter than offset (System Reminder)](#6316-file-shorter-than-offset-system-reminder)
         7. [New diagnostics detected (System Reminder)](#6317-new-diagnostics-detected-system-reminder)
      2. [Configuration & Operational Modes](#632-configuration-operational-modes)
         1. [Minimal mode (System Prompt)](#6321-minimal-mode-system-prompt)
         2. [Option previewer (System Prompt)](#6322-option-previewer-system-prompt)
         3. [Scratchpad directory (System Prompt)](#6323-scratchpad-directory-system-prompt)
         4. [Status line setup (Agent Prompt)](#6324-status-line-setup-agent-prompt)
         5. [Output style active (System Reminder)](#6325-output-style-active-system-reminder)
      3. [Scheduling & Cron Automation](#633-scheduling-cron-automation)
         1. [CronCreate (Tool Description)](#6331-croncreate-tool-description)
         2. [/loop slash command (Skill)](#6332-loop-slash-command-skill)
         3. [/schedule slash command (Agent Prompt)](#6333-schedule-slash-command-agent-prompt)
   4. [Browser Automation & Computer Use](#64-browser-automation-computer-use)
      1. [Computer (Tool Description)](#641-computer-tool-description)
      2. [Computer action (Tool Parameter)](#642-computer-action-tool-parameter)
      3. [Claude in Chrome browser automation (System Prompt)](#643-claude-in-chrome-browser-automation-system-prompt)
      4. [Chrome browser MCP tools (System Prompt)](#644-chrome-browser-mcp-tools-system-prompt)
7. [Claude API & SDK Reference](#7-claude-api-sdk-reference)
   1. [Claude API Reference Documentation](#71-claude-api-reference-documentation)
      1. [Claude API reference — Python (Data)](#711-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#712-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#713-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#714-claude-api-reference-—-java-data)
      5. [Claude API reference — Ruby (Data)](#715-claude-api-reference-—-ruby-data)
      6. [Claude API reference — PHP (Data)](#716-claude-api-reference-—-php-data)
      7. [Claude API reference — C# (Data)](#717-claude-api-reference-—-c-data)
      8. [Claude API reference — cURL (Data)](#718-claude-api-reference-—-curl-data)
      9. [Claude model catalog (Data)](#719-claude-model-catalog-data)
      10. [HTTP error codes reference (Data)](#7110-http-error-codes-reference-data)
      11. [Live documentation sources (Data)](#7111-live-documentation-sources-data)
   2. [Advanced API Features: Streaming, Batches, Files, Tool Use](#72-advanced-api-features-streaming-batches-files-tool-use)
      1. [Streaming reference — Python (Data)](#721-streaming-reference-—-python-data)
      2. [Streaming reference — TypeScript (Data)](#722-streaming-reference-—-typescript-data)
      3. [Message Batches API reference — Python (Data)](#723-message-batches-api-reference-—-python-data)
      4. [Files API reference — Python (Data)](#724-files-api-reference-—-python-data)
      5. [Files API reference — TypeScript (Data)](#725-files-api-reference-—-typescript-data)
      6. [Tool use concepts (Data)](#726-tool-use-concepts-data)
      7. [Tool use reference — Python (Data)](#727-tool-use-reference-—-python-data)
      8. [Tool use reference — TypeScript (Data)](#728-tool-use-reference-—-typescript-data)
      9. [Prompt Caching — Design & Optimization (Data)](#729-prompt-caching-—-design-optimization-data)
   3. [Agent SDK Reference & Patterns](#73-agent-sdk-reference-patterns)
      1. [Agent SDK reference — Python (Data)](#731-agent-sdk-reference-—-python-data)
      2. [Agent SDK reference — TypeScript (Data)](#732-agent-sdk-reference-—-typescript-data)
      3. [Agent SDK patterns — Python (Data)](#733-agent-sdk-patterns-—-python-data)
      4. [Agent SDK patterns — TypeScript (Data)](#734-agent-sdk-patterns-—-typescript-data)
      5. [Build with Claude API (Skill)](#735-build-with-claude-api-skill)
      6. [Build with Claude API (reference guide) [Skill]](#736-build-with-claude-api-reference-guide-skill)

---

## 1. Bash & Shell Execution

Rules, policies, and best practices governing how Claude executes shell commands, including syntax conventions, sandbox security, git operations, and when to prefer dedicated tools over shell equivalents.

### 1.1 Bash Tool: Core Behavior & Syntax Rules

Bash executes shell commands and returns output, with specific syntax rules governing command chaining, quoting, and working directory management. Sequential dependent commands use &&, independent commands run in parallel across multiple tool calls, and file paths with spaces require double quotes. Working directory persists between commands but shell state does not; absolute paths and verification of parent directories prevent unintended side effects.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

#### 1.1.2 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits using newlines to separate commands in bash tool calls.

#### 1.1.3 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially but not caring if earlier commands fail.

#### 1.1.4 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands using && in a single bash call when sequential execution with failure propagation is required.

#### 1.1.5 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to make multiple Bash tool calls in a single message for independent commands that can run in parallel.

#### 1.1.6 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to maintain current working directory by using absolute paths and avoiding cd unless explicitly requested by the user.

#### 1.1.7 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not, with environment initialized from user's bash or zsh profile.

#### 1.1.8 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Requires quoting file paths containing spaces with double quotes in bash commands.

#### 1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration in milliseconds for bash commands, with maximum and default values determined by GET_MAX_TIMEOUT_MS and GET_DEFAULT_TIMEOUT_MS variables.

#### 1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence using ls before creating new directories or files.

#### 1.1.11 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs to write clear, concise descriptions for bash commands, keeping simple commands brief and providing context for complex or obscure operations.

#### 1.1.12 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and easier permission review than Bash equivalents.

### 1.2 Bash Tool: Preferred Alternatives to Shell Commands

Dedicated tools provide superior user experience and permission clarity compared to shell equivalents. Use Read for file access, Write for file creation, Edit for modifications, Grep for content search, and Glob for file discovery. Reserve Bash for system commands and terminal operations only, avoiding grep, find, cat, sed, and awk unless dedicated tools cannot accomplish the task.

#### 1.2.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Directs to output text directly rather than using echo or printf for communication.

#### 1.2.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs to use the Grep tool instead of grep or rg for content search operations.

#### 1.2.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs to use the Edit tool instead of sed or awk for file editing operations.

#### 1.2.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs to use the Glob tool instead of find or ls for file search operations.

#### 1.2.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs to use the Read tool instead of cat, head, or tail for file reading operations.

#### 1.2.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs to use the Write tool instead of echo or cat for file writing operations.

#### 1.2.7 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns to avoid using Bash for find, grep, cat, and similar operations unless explicitly instructed or verified that dedicated tools cannot accomplish the task.

### 1.3 Bash Tool: Sandbox Security & Restrictions

All commands run in sandbox mode by default with no exceptions; the dangerouslyDisableSandbox parameter is disabled by policy. When sandbox-caused failures occur (access denied, operation not permitted, network failures, unix socket errors), immediately retry with sandbox disabled without prompting the user. Use $TMPDIR for temporary files in sandbox mode, never suggest sensitive paths for allowlisting, and treat each command individually for sandbox decisions.

#### 1.3.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Directs to work with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 1.3.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs to default to running commands within the sandbox and only bypass when the user explicitly asks or evidence of sandbox restriction appears.

#### 1.3.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.3.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of sandbox-caused failure evidence types.

#### 1.3.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as sandbox evidence.

#### 1.3.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies operation not permitted errors for file and network operations as sandbox evidence.

#### 1.3.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as sandbox evidence.

#### 1.3.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

#### 1.3.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure types.

#### 1.3.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all commands must run in sandbox mode with the dangerouslyDisableSandbox parameter disabled by policy.

#### 1.3.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.3.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.3.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands even after running with dangerouslyDisableSandbox.

#### 1.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing how Claude should respond when sandbox-caused failures are detected.

#### 1.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with dangerouslyDisableSandbox: true when sandbox failures occur without asking the user.

#### 1.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Instructs Claude to use the $TMPDIR environment variable for temporary files in sandbox mode rather than /tmp directly, with a fallback to ${SANDBOX_TMPDIR_FN()}.

#### 1.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

### 1.4 Bash Tool: Git & Sleep Behavior

Git operations require explicit user request before committing; never skip hooks or bypass signing without user approval, and prefer creating new commits over amending. Avoid destructive operations like reset --hard and push --force without considering safer alternatives. Sleep durations should remain short (1-5 seconds) to avoid blocking users; use check commands like gh run view instead of polling background tasks, and run commands immediately without unnecessary delays.

#### 1.4.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Advises to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

#### 1.4.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, covering git safety protocols, commit message drafting, hook handling, parallel command execution, and PR creation with gh command, emphasizing never committing without explicit user request and avoiding destructive operations.

#### 1.4.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping hooks or bypassing signing unless explicitly requested by the user, requiring investigation and fixing of underlying issues on hook failure.

#### 1.4.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Directs to prefer creating new commits over amending existing ones.

#### 1.4.5 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.4.6 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with run_in_background, as completion notifications will be provided.

#### 1.4.7 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

#### 1.4.8 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like gh run view rather than sleeping when polling external processes.

---

## 2. Tools, File Operations & External Data

Dedicated tools for file system access, code intelligence, web retrieval, and utility operations—covering the full hierarchy of non-bash tools Claude uses to read, search, and interact with data.

### 2.1 Tool Preference & File Operation Policies

Dedicated tools form a hierarchy: Read, Write, Edit, Grep, and Glob handle file operations and searches; Task delegates comprehensive codebase exploration to specialized subagents; TodoWrite tracks work progress. Bash reserves for system commands only. Direct simple searches with Glob and Grep; delegate complex exploration to subagents to protect context windows. Skill tool invokes user-defined slash commands from the user-invocable section only.

#### 2.1.1 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use the Write tool for file creation instead of shell alternatives like cat heredoc or echo redirection.

#### 2.1.2 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs Claude to use the Edit tool for file modifications instead of command-line utilities like sed or awk.

#### 2.1.3 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool for file access instead of shell commands like cat, head, tail, or sed.

#### 2.1.4 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Directs Claude to use the Grep tool for searching file contents instead of grep or rg command-line utilities.

#### 2.1.5 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool for file discovery instead of find or ls shell commands.

#### 2.1.6 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Constrains Bash tool usage to system commands and terminal operations only, requiring Claude to default to dedicated tools when available and use Bash only as a fallback when absolutely necessary.

#### 2.1.7 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob and Grep tools directly for simple, targeted codebase searches like locating specific files, classes, or functions.

#### 2.1.8 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Directs Claude to use the Task tool with specialized subagents for comprehensive codebase exploration and deep research when simple directed searches prove insufficient or exceed query limits.

#### 2.1.9 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool with specialized subagents for parallelizing independent queries and protecting context windows, while avoiding redundant work and excessive delegation.

#### 2.1.10 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use the TodoWrite tool to break down work into tasks, track progress, and mark tasks complete immediately upon finishing rather than batching completions.

#### 2.1.11 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Explains that slash commands like /commit invoke user-invocable skills via the Skill tool, and restricts usage to only skills listed in the tool's user-invocable section.

### 2.2 File System & Code Intelligence

Comprehensive filesystem operations and language-aware code navigation supporting multimodal file access, precise text manipulation, semantic search, and IDE-level code intelligence across projects.

#### 2.2.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges for large files), and Jupyter notebooks. Requires absolute paths and defaults to reading first N lines. Displays images visually and combines code with outputs for notebooks.

#### 2.2.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, overwriting existing files. Prefers Edit tool for modifications; use only for new files or complete rewrites. Avoids creating documentation unless explicitly requested.

#### 2.2.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with strict matching requirements. Preserves indentation from Read tool output, prefers editing existing files over creating new ones, and uses replace_all for renaming variables across files.

#### 2.2.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful search tool built on ripgrep supporting full regex syntax, file filtering via glob or type, and multiple output modes. Prefers ripgrep over bash grep, supports multiline matching, and handles special character escaping.

#### 2.2.5 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interacts with Language Server Protocol servers for code intelligence features including symbol navigation, references, hover information, call hierarchy, and implementation finding across the workspace.

### 2.3 Web & External Data Tools

Tools for retrieving and processing web content and search results. WebFetch converts HTML to markdown with caching and redirect handling, WebSearch queries current information with mandatory source attribution, and a specialized summarizer enforces quote limits based on domain trust while respecting licensing constraints.

#### 2.3.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content from URLs by converting HTML to markdown and processing with AI. Includes 15-minute cache, handles redirects, and prefers MCP-provided alternatives when available.

#### 2.3.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff with domain filtering support. Requires mandatory 'Sources:' section in responses listing all relevant URLs as markdown hyperlinks.

#### 2.3.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Agent that summarizes verbose web content for the main model, enforcing strict 125-character quote limits for untrusted domains while allowing longer excerpts from trusted sources. Respects open-source licenses and avoids reproducing song lyrics or commenting on prompt legality.

### 2.4 Specialized Tool Descriptions: Misc

Utility tools for notebook editing, command execution, timing control, tool discovery, and user interaction. Covers Jupyter cell manipulation, PowerShell/bash command execution with background task support, concurrent waiting primitives, schema-based tool lookup for deferred invocation, and interactive question prompts with HTML preview capabilities.

#### 2.4.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replaces contents of specific cells in Jupyter notebooks. Supports insert and delete modes with 0-indexed cell numbering and requires absolute file paths.

#### 2.4.2 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with optional timeout and persistent working directory. Emphasizes using specialized tools for file operations and includes syntax guidance for cmdlets, variables, pipes, and string interpolation. Supports git, npm, docker operations.

#### 2.4.3 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Waits for a specified duration with early wake capability on user input. Useful when idle or waiting for external events. Can run concurrently with other tools without holding shell processes.

#### 2.4.4 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches complete JSONSchema definitions for deferred tools by matching queries against tool names or keywords. Supports exact selection, keyword search, and required-term filtering to make tools callable.

#### 2.4.5 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying ambiguous instructions, and presenting implementation choices during execution, with guidance on multiSelect options and plan-mode restrictions.

#### 2.4.6 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructs how to use the optional preview field on single-select question options to display self-contained HTML artifacts like UI mockups, code snippets, and visual diagrams.

#### 2.4.7 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Advises against unnecessary Start-Sleep commands in PowerShell, recommending run_in_background for long-running tasks, polling alternatives, and keeping sleep durations short (1-5 seconds) to avoid blocking users.

### 2.5 MCP Resource Handling

Notifications for edge cases in MCP resource availability, signaling when resources exist but lack displayable or accessible content.

#### 2.5.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

#### 2.5.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it is not displayable in the current format.

### 2.6 Resource & Budget Monitoring

Real-time visibility into consumption metrics—token usage and USD budget—enabling Claude to track resource constraints and make informed decisions about response scope.

#### 2.6.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

#### 2.6.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including used, total, and remaining budget amounts.

---

## 3. Agent Orchestration & Multi-Agent Coordination

Frameworks for spawning, delegating to, and coordinating agents—from single subagent task delegation and parallel team swarms to plan-mode workflows and inter-agent communication.

### 3.1 Plan Mode: Activation & Workflow Phases

Plan mode creates a structured exploration and design phase before implementation, supporting multiple workflows (5-phase parallel, iterative pair-planning, subagent-simplified, and Ultraplan critique-based). Claude reads code, designs approaches, and updates plan files without executing changes until user approval, with re-entry logic for session continuation and verification checkpoints.

#### 3.1.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Activates plan mode with a structured 5-phase workflow including parallel exploration, design, review, and approval stages. Prevents execution and restricts Claude to read-only actions and plan file editing.

#### 3.1.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative plan mode for pair-planning with the user. Claude explores code, updates the plan file incrementally, and asks clarifying questions until the plan is complete before requesting approval.

#### 3.1.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents that restricts execution and allows only read-only actions and plan file editing while answering queries comprehensively.

#### 3.1.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude when re-entering plan mode to read the existing plan, evaluate if the current request is the same task or different, and proceed accordingly by modifying or overwriting the plan.

#### 3.1.5 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Activates Ultraplan mode for creating exceptionally thorough implementation plans using parallel multi-agent exploration and critique, with plan-only execution constraints and specific approval/error handling.

#### 3.1.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

#### 3.1.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly after implementation is finished.

#### 3.1.8 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that it has exited plan mode and can now make edits, run tools, and take actions, optionally referencing the plan file location.

#### 3.1.9 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore and design implementation approaches before coding. Use for non-trivial tasks involving new features, multiple valid approaches, architectural decisions, multi-file changes, or unclear requirements. Requires user approval and prevents wasted effort through upfront alignment.

#### 3.1.10 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of plan mode and requests user approval of the implementation plan. Reads plan from file and presents it for review. Only use for code implementation tasks, not research or exploration.

#### 3.1.11 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final plan phase that writes a concise plan file (max 40 lines) listing file paths and changes without context or prose, referencing existing functions and ending with a single verification command.

#### 3.1.12 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans by exploring codebases, identifying patterns, and detailing step-by-step strategies with critical files in read-only mode.

### 3.2 Subagent & Team Execution

Mechanisms for delegating work to autonomous subagents in isolated worktrees, coordinating parallel agent teams, routing requests, and decomposing large tasks into independent units.

#### 3.2.1 Agent & Subagent Orchestration

Subagents execute specialized tasks autonomously within isolated worktrees, inheriting context or receiving fresh scope depending on their role. Coordinator agents delegate work to research, explore, and worker subagents via structured prompts, then synthesize results without fabricating outcomes or peeking at in-flight forks.

##### 3.2.1.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Provides detailed usage guidance for the Agent tool, covering agent descriptions, result communication, background execution, resumption via SendMessage, worktree isolation, and context-specific parameter availability for subagents and teammates.

##### 3.2.1.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses for handling complex, multi-step tasks autonomously with specific capabilities.

##### 3.2.1.3 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for crafting effective subagent prompts, distinguishing between context-inheriting agents (which need directives and scope) and fresh subagents (which need full context and rationale), while emphasizing that synthesis should never be delegated.

##### 3.2.1.4 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides examples of how coordinator agents delegate tasks to subagents, handle waiting states without fabricating results, and report findings from independent agents with fresh context.

##### 3.2.1.5 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents (research, implementation) and prohibits reading fork output mid-flight or fabricating results. Instructs trusting completion notifications and never predicting fork outcomes.

##### 3.2.1.6 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

System prompt for forked worker sub-agents that execute directives directly without spawning further sub-agents, using tools silently and reporting structured results under 500 words. Requires scope echo-back, factual findings, relevant file paths, and commit hashes for file modifications.

##### 3.2.1.7 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases, reporting findings concisely without creating unnecessary files.

##### 3.2.1.8 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file searches via glob patterns, code searching via regex, and codebase analysis at specified thoroughness levels without modifying files.

#### 3.2.2 Multi-Agent Team Coordination

Teams coordinate multiple agents working in parallel on shared task lists, using SendMessage for inter-agent communication and TaskList for work discovery. The TeammateTool manages team lifecycle, task assignment, and idle state, while batch operations decompose large changes into independent units executed by isolated workers.

##### 3.2.2.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity and role, providing team resources and messaging protocols for coordination with teammates and team lead.

##### 3.2.2.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down the team gracefully before providing a final response in non-interactive mode.

##### 3.2.2.3 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool with specific recipients (named teammates or broadcast to all) for communication, as plain text responses are not visible to teammates.

##### 3.2.2.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages between agents in team workflows. Supports direct messaging to teammates by name or broadcast to all. Includes protocol responses for shutdown and plan approval requests with structured JSON format.

##### 3.2.2.5 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages teams and coordinates multiple agents working in parallel on complex projects. Handles team creation, task assignment, teammate spawning, message delivery, and idle state management. Teams correspond 1:1 with task lists.

##### 3.2.2.6 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from shared task lists. Teammates check for pending unblocked tasks, prefer lowest ID order, and update ownership via TaskUpdate.

##### 3.2.2.7 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories when swarm work completes. Fails if active team members remain; requires graceful teammate termination first.

##### 3.2.2.8 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining e2e test recipes, and spawning background worker agents with shared instructions and isolation.

#### 3.2.3 Agent Communication & Side Interactions

Mechanisms for routing user requests to appropriate agents and coordinating tool execution. Handles lightweight side questions separately from main workflows and orchestrates parallel or sequential tool calls based on dependencies.

##### 3.2.3.1 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude to answer a side question from the user directly without tools, clarifying that it is a separate lightweight agent instance with no file access or command execution capabilities and should not reference being interrupted.

##### 3.2.3.2 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and instructs Claude to invoke it with appropriate context.

##### 3.2.3.3 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to maximize efficiency, while calling dependent tools sequentially when one must complete before another starts.

### 3.3 Task & Todo Management

Task tracking tools organize multi-step work into structured lists with states (pending, in_progress, completed), helping Claude manage complex implementations and maintain progress visibility. Use when tasks exceed 3 steps, involve multiple requirements, or require plan mode.

#### 3.3.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with states (pending, in_progress, completed) and dual-form descriptions. Use for multi-step tasks, complex implementations, or when users provide multiple requirements. Limit to one in_progress task at a time.

#### 3.3.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress and organize complex multi-step work. Use for tasks with 3+ steps, non-trivial implementations, plan mode, or when users provide multiple requirements.

#### 3.3.3 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task tracking and to clean up stale todo lists when relevant.

#### 3.3.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools to create and update tasks if relevant to current work, and to clean up stale tasks.

---

## 4. Memory, Sessions & Context Continuity

Systems for preserving knowledge, summarizing conversations, managing session navigation, and capturing usage insights across Claude Code interactions.

### 4.1 Memory Systems & Session Persistence

Memory files preserve institutional knowledge across sessions, storing domain-specific discoveries, user feedback, architectural decisions, and work patterns. Agents update memory during conversations, consolidate learnings through reflection, and select relevant memories to attach for context, maintaining coherent project behavior and avoiding contradictions.

#### 4.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, including type description and content.

#### 4.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

#### 4.1.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Instructs agents to update memory with domain-specific discoveries during conversations, building institutional knowledge across sessions. Provides templates for code reviewers, test runners, architects, and documentation writers to record patterns, decisions, and architectural insights.

#### 4.1.4 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type that stores guidance on work approaches from both successes and failures, with checks for contradictions against team memories to maintain coherent project behavior.

#### 4.1.5 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and type description for injection into conversation context as team-memory-content blocks.

#### 4.1.6 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory field to capture role, goals, responsibilities, and knowledge, enabling tailored behavior across conversations while avoiding negative judgments and focusing on helpful collaboration.

#### 4.1.7 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to attach to Claude Code based on the user's query, excluding usage documentation for recently-used tools but including warnings and gotchas.

#### 4.1.8 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs reflective memory consolidation by orienting on existing memories, gathering signal from transcripts and logs, merging updates into topic files, and pruning the index to keep memories organized and current.

#### 4.1.9 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations, preserving exact file structure with section headers and italic descriptions while updating only content blocks with detailed, actionable information. Enforces token limits per section and requires maintaining current state for session continuity.

#### 4.1.10 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing current state, task specification, files, workflow, errors, codebase documentation, learnings, and results.

### 4.2 Conversation Summarization & Session Navigation

Structured conversation summaries, semantic session search, title generation, and predictive prompting that help users resume work without losing context.

#### 4.2.1 Conversation & Context Summarization

Structured summarization of conversations across context windows, capturing intent, technical concepts, errors, and next steps with direct quotes to enable efficient session resumption and continuation without duplicate work.

##### 4.2.1.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections covering user intent, technical concepts, files modified, errors and fixes, problem-solving, all user messages, pending tasks, current work, and next steps with direct quotes.

##### 4.2.1.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes only the recent portion of a conversation in nine sections covering intent, concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps with direct quotes.

##### 4.2.1.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs creation of structured continuation summaries for resuming work across context windows, covering task overview, current state, discoveries, next steps, and context preservation to enable efficient resumption without duplicate work.

##### 4.2.1.4 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before conversation summarization but is too large to include, and directs it to use the Read tool if needed.

#### 4.2.2 Session Management & Navigation

Tools for organizing, discovering, and navigating work sessions through semantic search, title generation, branch naming, and predictive prompting to help users locate relevant context and continue work efficiently.

##### 4.2.2.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise, sentence-case session titles (3–7 words) that capture the main goal or topic so users recognize sessions in a list.

##### 4.2.2.2 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates concise session titles (max 6 words, sentence case) and git branch names (max 4 words, lowercase with dashes, prefixed with 'claude/') from session descriptions.

##### 4.2.2.3 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Agent for finding relevant sessions based on user queries by matching against tags, titles, branches, summaries, and transcripts with semantic understanding. Prioritizes exact tag matches highest, then partial matches, title matches, and semantic similarity, returning results ordered by relevance.

##### 4.2.2.4 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and the working directory has been updated.

##### 4.2.2.5 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent context, avoiding evaluative or Claude-voice suggestions and staying silent when the next step is unclear.

### 4.3 Learning & Usage Intelligence

Educational workflows and analytics that guide users through tasks interactively, extract session insights to identify friction and opportunities, and surface actionable recommendations for improved Claude Code adoption.

#### 4.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions for design decisions and algorithms in 20+ line code pieces, using TodoList tracking and Learn by Doing requests with specific guidance, then sharing insights connecting code to broader patterns.

#### 4.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing using a formatted insight block, focusing on codebase-specific implementation choices rather than general programming concepts.

#### 4.3.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct access. Activates when user requests learning or instruction with phrases like 'teach me' or 'show me how'.

#### 4.3.4 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part usage insights summary covering what's working, hindrances, quick wins, and ambitious workflows for improved Claude Code usage, using a coaching tone without numerical stats.

#### 4.3.5 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with 3 categories and 2 examples each, using second-person perspective to highlight where users encounter problems.

#### 4.3.6 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, with copyable prompts for users to experiment with emerging capabilities.

#### 4.3.7 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including goal categories (user-requested only), satisfaction signals, and friction types with specific categorization rules to avoid counting autonomous work.

#### 4.3.8 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions (prioritizing repeated patterns), feature recommendations from MCP Servers/Custom Skills/Hooks/Headless Mode/Task Agents, and usage pattern guidance tailored to user sessions.

### 4.4 Debugging, Diagnostics & Process Monitoring

Tools and techniques for identifying and resolving issues in Claude Code sessions, including error analysis from debug logs, system-level process diagnostics for performance bottlenecks, and escalation to specialized reviewers when stuck.

#### 4.4.1 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions using debug logs, examining error patterns, and suggesting fixes or next steps.

#### 4.4.2 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning processes for high CPU, I/O hangs, memory leaks, and stuck child processes, then reports findings to Slack.

#### 4.4.3 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the advisor tool, which forwards conversation history to a stronger reviewer model for guidance before substantive work and when stuck or completing tasks.

---

## 5. Code Quality, Safety & Version Control

Engineering discipline, security analysis, safe action execution, verification workflows, git integration, and hook-based automation that together ensure reliable and trustworthy code changes.

### 5.1 Engineering Discipline & Safe Execution

Principles for minimal complexity, focused scope, reversibility assessment, and permission boundaries that govern how Claude approaches and executes code changes.

#### 5.1.1 Code Quality & Engineering Discipline

Engineering principles enforcing focused scope, minimal complexity, and practical application: read before modifying, avoid premature abstractions and unnecessary additions, validate only at system boundaries, and defer to user judgment on task scope.

##### 5.1.1.1 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires reading and understanding existing code before proposing or making modifications.

##### 5.1.1.2 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Discourages creating helpers, utilities, or abstractions for one-time operations or hypothetical requirements; favors minimum complexity for current tasks.

##### 5.1.1.3 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Prohibits adding features, refactoring, docstrings, or improvements beyond what was explicitly requested; limits comments to non-obvious logic.

##### 5.1.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Advises deleting unused code completely rather than adding compatibility shims, renamed variables, or removed-code comments.

##### 5.1.1.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Advises against error handling for impossible scenarios; validate only at system boundaries (user input, external APIs) and trust internal code guarantees.

##### 5.1.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs preference for editing existing files over creating new ones to prevent file bloat and build on existing work more effectively.

##### 5.1.1.7 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames user requests primarily as software engineering tasks (bug fixes, features, refactoring, code explanation) and interprets unclear instructions in that context, applying changes to actual code rather than providing abstract answers.

##### 5.1.1.8 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Authorizes Claude to attempt ambitious tasks that would otherwise be too complex or time-consuming, deferring to user judgment on scope appropriateness.

##### 5.1.1.9 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instructs avoiding brute-force retries when blocked; instead consider alternative approaches or use question tools to align with the user on the right path forward.

##### 5.1.1.10 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs avoiding time estimates or predictions for task duration, focusing instead on what needs to be done.

##### 5.1.1.11 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels when requested.

#### 5.1.2 Safe Action Execution & Reversibility

Governs autonomous action execution by assessing reversibility and impact scope, permitting immediate local changes while requiring explicit user approval for destructive, hard-to-reverse, or shared-system operations. Enforces permission boundaries and diagnostic rigor over retry loops or workarounds.

##### 5.1.2.1 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes careful action execution by assessing reversibility and blast radius, freely taking local reversible actions but requiring user confirmation for destructive, hard-to-reverse, or shared-system operations. Prohibits using destructive shortcuts to bypass obstacles and instructs investigating unexpected state before deletion.

##### 5.1.2.2 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate action, minimal interruptions, and preference for coding over planning. Prohibits destructive actions on shared systems and data exfiltration without explicit user authorization.

##### 5.1.2.3 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Describes tool execution in permission modes where users approve or deny tool calls, with guidance to adjust approach on denial rather than retry and optionally ask for clarification.

##### 5.1.2.4 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides Claude to attempt reasonable alternative tools when denied, avoid malicious workarounds, and stop to explain to the user if the capability is essential rather than bypass the denial.

##### 5.1.2.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Do not retry failing commands in a sleep loop — diagnose the root cause.

### 5.2 Security: Code Analysis & Threat Detection

Multi-layered security framework combining vulnerability assessment of code changes, autonomous agent action monitoring, command injection detection, and malware analysis to prevent exploitation, prompt injection, and credential leakage.

#### 5.2.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review agent for analyzing code changes in PRs, focusing on high-confidence exploitable vulnerabilities across input validation, authentication, crypto, injection, and data exposure categories. Uses three-phase analysis (repository context, comparative analysis, vulnerability assessment) with strict false-positive filtering and confidence scoring to identify only actionable security issues.

#### 5.2.2 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security classifier that evaluates autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with detailed evaluation rules for composite actions, code execution, and user intent assessment.

#### 5.2.3 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines block rules covering destructive git operations, code execution from external sources, production access, credential leakage, data exfiltration, and unauthorized persistence, with allow exceptions for test artifacts, local operations, and declared dependencies.

#### 5.2.4 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, CTF challenges, and defensive security while refusing destructive techniques, DoS attacks, and detection evasion. Dual-use tools require clear authorization context.

#### 5.2.5 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, while allowing analysis and reporting.

#### 5.2.6 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Emphasizes avoiding security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks; prioritizes secure code.

#### 5.2.7 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attacks in bash commands to enforce safety policies, returning the prefix or 'command_injection_detected' for allowlist enforcement.

### 5.3 Verification & Testing

Execution-based validation through build checks, test suite runs, and adversarial edge-case probing, with honest PASS/FAIL reporting and implementation pipelines.

#### 5.3.1 Verification & Testing Workflows

Automated validation of code changes through execution-based testing, including build verification, test suite runs, and adversarial probing for edge cases. Emphasizes observable evidence over code inspection and generates definitive PASS/FAIL verdicts with honest reporting of blockers.

##### 5.3.1.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Comprehensive verification workflow for validating code changes by running the app and observing behavior, covering discovery, planning, execution, and honest reporting with PASS/FAIL/BLOCKED verdicts.

##### 5.3.1.2 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial verification agent that tests implementations by running builds, test suites, linters, and adversarial probes (concurrency, boundaries, idempotency, orphan operations) to issue PASS/FAIL/PARTIAL verdicts. Requires command output for all checks, avoids reading code as verification, and focuses on breaking implementations rather than confirming happy paths.

##### 5.3.1.3 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying CLI changes by building, running with test arguments, and comparing output to expected behavior.

##### 5.3.1.4 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying server/API changes by starting the server, making HTTP requests, and validating response status and headers.

##### 5.3.1.5 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive onboarding for creating verifier skills that automatically validate code changes, covering project detection, tool setup (Playwright, Tmux, HTTP), authentication, and skill generation.

#### 5.3.2 Worker Implementation Workflow

Structured processes for implementing changes and validating code quality. Encompasses implementation pipelines with testing gates, rule validation for automated decision-making, and documentation generation for command clarity.

##### 5.3.2.1 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for workers implementing changes: simplify code via the Skill tool, run unit tests, execute end-to-end tests, commit and push with PR creation, and report the PR URL or failure reason.

##### 5.3.2.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for Claude Code by evaluating clarity, completeness, conflicts, and actionability to ensure the LLM classifier can correctly auto-approve or block tool calls.

##### 5.3.2.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief while adding context for complex piped or flag-heavy commands.

### 5.4 Git, GitHub & Worktree Management

Automated git operations, pull request management, GitHub Actions integration, branch isolation via worktrees, and safety protocols against unsafe amendments.

#### 5.4.1 Git Workflow & GitHub Integration

Automates git operations and GitHub interactions including commit creation, pull request management, code review, and comment retrieval. Integrates with GitHub Actions for CI/CD triggering and enforces safety protocols against secret leakage and unsafe amendments.

##### 5.4.1.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository style, and executing via heredoc syntax while enforcing safety protocols against amending and secret leakage.

##### 5.4.1.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request by analyzing all changes, creating a feature branch, committing with attribution, and either updating or creating a PR with summary and test plan via heredoc syntax.

##### 5.4.1.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including both PR-level and code review comments with file/line context, formatted as threaded comment blocks.

##### 5.4.1.4 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, correctness, conventions, performance, test coverage, and security with concise formatted feedback.

##### 5.4.1.5 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status snapshot at conversation start including branch, main branch reference, file status, and recent commits.

##### 5.4.1.6 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template for a pull request description explaining Claude Code GitHub App integration setup, including what Claude Code does, how the workflow operates, security considerations, and next steps for users.

##### 5.4.1.7 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template for triggering Claude Code via @claude mentions in issues, PRs, and comments. Configures permissions for content, PRs, issues, and CI result access, with optional custom prompts and claude_args for behavior customization.

#### 5.4.2 Branch & Worktree Isolation

Git worktree management that enables isolated development contexts within a session, supporting branch switching and cleanup while maintaining VCS flexibility.

##### 5.4.2.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it. Only use when user explicitly requests worktree functionality. Creates new branches in .claude/worktrees/ or delegates to hooks for VCS-agnostic isolation.

##### 5.4.2.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree and returns to the original directory. Supports keep or remove actions with optional discard_changes flag. Only operates on worktrees created in the current session.

### 5.5 Hook System: Configuration & Lifecycle Events

Event-driven automation framework that intercepts Claude Code lifecycle events, evaluates conditions, executes shell commands or agents, and gates tool usage through permission checks and plan verification.

#### 5.5.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines lifecycle hooks that run shell commands, prompts, or agents at specific Claude Code events (PermissionRequest, PreToolUse, PostToolUse, etc.), with JSON input/output for controlling tool behavior, blocking actions, and injecting context back to the model.

#### 5.5.2 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether a condition is met or providing a reason for failure.

#### 5.5.3 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies that an agent completed a given plan by analyzing conversation transcript and codebase state, returning a structured result indicating success or failure with reason.

#### 5.5.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude when a hook stops continuation, displaying the hook name and error message.

#### 5.5.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Notifies Claude of successful hook execution with the hook name and result content.

#### 5.5.6 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook to Claude.

#### 5.5.7 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command to Claude.

#### 5.5.8 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix label for hook stopped continuation messages.

---

## 6. Configuration, Skills & IDE Integration

System configuration modes, skills and slash commands, project onboarding, IDE state notifications, output formatting, and browser automation that shape how Claude Code is set up and interacted with.

### 6.1 Skills, Onboarding & Documentation

Skill invocation and creation workflows, CLAUDE.md generation, codebase analysis for project setup, and code review processes that preserve architectural knowledge.

#### 6.1.1 Skills System: Invocation & Configuration

Framework for invoking domain-specific skills and configuring Claude Code through structured processes. Includes skill execution mechanics, configuration management with verification workflows, and a guided interview system for converting repeatable workflows into reusable skills.

##### 6.1.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills within conversations when users reference slash commands or request specific domain capabilities. Requires invoking the tool before generating responses about the task.

##### 6.1.1.2 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Reminds Claude to follow guidelines for skills that were invoked during the current session.

##### 6.1.1.3 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json), covering hook setup, merging settings, validation, and common configuration patterns.

##### 6.1.1.4 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks for Claude Code, including deduplication, command construction, pipe-testing, JSON validation, and live proof.

##### 6.1.1.5 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts a session's repeatable process into a reusable skill through 4 rounds of user interviews (high-level confirmation, details, step breakdown, final questions), then generates a SKILL.md file with frontmatter, steps with success criteria, and execution annotations.

#### 6.1.2 Project Onboarding & Documentation

Automated codebase analysis and interactive setup flows that generate CLAUDE.md documentation, establish development guidance, and help users navigate Claude Code capabilities and project-specific configurations.

##### 6.1.2.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files containing build/test commands, high-level architecture, and development guidance for future Claude Code instances.

##### 6.1.2.2 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks, including codebase exploration, user interviews, proposal refinement, and iterative artifact creation.

##### 6.1.2.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing actionable guidance, and referencing project-specific configuration files.

#### 6.1.3 Code Quality & Knowledge Management

Parallel review and refinement processes that identify code improvements, preserve architectural insights in living documentation, and synthesize custom agent specifications from design intent.

##### 6.1.3.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel agents to identify code reuse opportunities, quality issues, and efficiency problems, then fixes them.

##### 6.1.3.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Agent for updating Magic Doc files with new learnings and insights from conversations, preserving document headers while updating content in-place. Focuses on high-level architecture, non-obvious patterns, entry points, and design decisions rather than exhaustive implementation details or obvious code mechanics.

##### 6.1.3.3 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design custom AI agents by extracting user intent, creating expert personas, architecting comprehensive system prompts, and optimizing for performance with decision-making frameworks and quality controls. Outputs a JSON specification with identifier, usage conditions, and complete system prompt for autonomous expert agents.

### 6.2 Output Style, Tone & Communication

Directives for shaping Claude's communication style across user-facing and internal contexts. Emphasizes conciseness, direct answers, and structured messaging—including code reference formatting, action summary conventions, and strategic use of messaging tools to ensure users see actionable results rather than hidden reasoning.

#### 6.2.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler and preamble, and focusing text output on decisions, status updates, and blockers at natural milestones.

#### 6.2.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing specific functions or code for easy user navigation to source locations.

#### 6.2.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

#### 6.2.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths, avoid emojis, include relevant file paths in responses, omit code snippets unless load-bearing, and avoid colons before tool calls.

#### 6.2.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Defines format for agent action summaries: 3-5 words in present tense (-ing form), naming specific files or functions rather than branches, with examples of good and bad summary styles.

#### 6.2.6 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to send all user-facing replies through SendUserMessage, with guidance on acknowledgments, checkpoints, and concise messaging to ensure users see actual results rather than hidden detail-view text.

#### 6.2.7 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends messages to users with markdown support and file attachments. Uses status labels ('normal' or 'proactive') to indicate intent and context for downstream routing.

### 6.3 IDE, File State & Operational Modes

Real-time IDE notifications of file changes and user selections, system configuration modes controlling feature availability, and scheduling automation for recurring tasks.

#### 6.3.1 IDE Integration & File State Notifications

Real-time notifications of IDE interactions and file state changes that inform Claude's context and decision-making. Covers user selections, file opens, external modifications, truncation, and diagnostic alerts—enabling Claude to track evolving code state without requiring explicit user prompts.

##### 6.3.1.1 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in the IDE, providing line numbers and file context.

##### 6.3.1.2 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 6.3.1.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides a snippet of changes, instructing Claude to account for the modifications and not revert them unless requested.

##### 6.3.1.4 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs it to use the Read tool to access additional content if needed, without informing the user.

##### 6.3.1.5 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 6.3.1.6 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that the requested file read offset exceeds the file's length and provides the actual file length.

##### 6.3.1.7 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the code or system.

#### 6.3.2 Configuration & Operational Modes

System configurations that control feature availability, working directories, and output presentation. Ranges from stripped-down minimal mode for explicit control to specialized layouts for visual comparison and isolated file management.

##### 6.3.2.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Minimal mode disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags for authentication, MCP config, and system prompts while maintaining skill resolution.

##### 6.3.2.2 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for presenting visual artifacts like ASCII mockups, code snippets, and diagrams in single-select questions, rendering preview content in monospace markdown boxes.

##### 6.3.2.3 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, enabling isolated working space without permission prompts.

##### 6.3.2.4 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Agent for configuring Claude Code status line display by converting shell PS1 configurations to status line commands. Extracts PS1 from shell config files, converts escape sequences to shell commands, handles ANSI colors via printf, and updates ~/.claude/settings.json with the resulting command or script reference.

##### 6.3.2.5 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

#### 6.3.3 Scheduling & Cron Automation

Schedules one-shot and recurring tasks using standard cron expressions with timezone awareness, load distribution, and session persistence. Supports both local scheduling and remote agent orchestration via cloud API.

##### 6.3.3.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Describes the CronCreate tool for scheduling one-shot or recurring cron-based jobs using standard 5-field cron syntax in the user's local timezone. Provides guidance on avoiding :00 and :30 minute marks to distribute load, managing durability for session persistence, and handling jitter and auto-expiration after a configurable timeframe.

##### 6.3.3.2 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts intervals to cron expressions, and schedules recurring tasks with automatic execution.

##### 6.3.3.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via Anthropic cloud API, supporting create, update, list, and run operations with timezone conversion and MCP connector attachment.

### 6.4 Browser Automation & Computer Use

Enables programmatic Chrome browser control through mouse, keyboard, and screenshot interactions with guidance for reliable element targeting, console debugging, and dialog handling. Integrates MCP tools for extended browser capabilities within automation workflows.

#### 6.4.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse and keyboard interaction with Chrome, including screenshot capture and cursor positioning guidance for reliable element clicking.

#### 6.4.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for Chrome browser automation including clicks, typing, scrolling, keyboard input, screenshots, dragging, zooming, and hover interactions.

#### 6.4.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with extra frames, console debugging with regex filtering, avoiding JavaScript dialogs that block extension commands, and tab context retrieval at session start. Instructs to stop and ask for guidance when encountering failures or unexpected complexity.

#### 6.4.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the tool name with select: prefix before calling the corresponding mcp__claude-in-chrome__ function.

---

## 7. Claude API & SDK Reference

Official API documentation, language-specific SDK references, and advanced API features covering messaging, streaming, batches, file uploads, tool use, and agent SDK patterns.

### 7.1 Claude API Reference Documentation

Language-specific SDK documentation and API reference for Claude across Python, TypeScript, Go, Java, Ruby, PHP, C#, and raw HTTP. Covers core messaging, vision, prompt caching, extended thinking, tool use, streaming, structured outputs, and cost optimization. Includes model catalog with capabilities and pricing, HTTP error handling, and live documentation sources.

#### 7.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic messages, system prompts, vision with base64 and URL images, prompt caching with automatic and manual control, extended thinking with adaptive mode, error handling, multi-turn conversations, compaction for long contexts, stop reasons, and cost optimization strategies.

#### 7.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic messages, system prompts, vision with URL and base64 images, prompt caching with automatic and manual control, extended thinking with adaptive mode, error handling with typed exceptions, multi-turn conversations, compaction, stop reasons, and cost optimization.

#### 7.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic messages, streaming with message accumulation, tool use via BetaToolRunner with automatic schema generation and manual loops, thinking modes, prompt caching, server-side tools, PDF input, Files API, and context editing with compaction.

#### 7.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic messages, streaming, adaptive thinking, tool use via annotated classes and BetaToolRunner with memory tool support, effort parameter, prompt caching, token counting, structured output with POJO auto-schema, PDF input, server-side tools, and Files API.

#### 7.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic messages, streaming, tool use via annotated classes and BetaToolRunner, prompt caching with TTL support, and verification of cache hits via usage metrics.

#### 7.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization for Anthropic/Bedrock/Vertex/Foundry, basic messages with polymorphic content blocks, streaming, tool use via BetaRunnableTool and manual loops, extended thinking, prompt caching, structured outputs with StructuredOutputModel, and server-side tools.

#### 7.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic messages, streaming, adaptive thinking, tool use with manual JSON schemas, effort parameter, prompt caching, token counting, structured output, PDF input, server-side tools, beta features (context editing, compaction), and Files API with file references.

#### 7.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic message requests with jq parsing, streaming via Server-Sent Events, tool use loops, prompt caching, extended thinking, and required headers for authentication and versioning.

#### 7.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of Claude models with exact model IDs, aliases, context windows, and pricing. Covers current models (Opus 4.6, Sonnet 4.6, Haiku 4.5), legacy active models, deprecated models, and retired models. Includes programmatic model discovery via Models API for live capability data (thinking, vision, effort, structured outputs, context management).

#### 7.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400–529) with causes, fixes, and SDK exception handling. Covers validation errors, authentication, rate limiting, and retry strategies with code examples.

#### 7.1.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, organized by topic with extraction prompts for use when cached content may be outdated.

### 7.2 Advanced API Features: Streaming, Batches, Files, Tool Use

Advanced Claude API capabilities for real-time streaming, asynchronous batch processing, file management, and agentic tool use. Covers streaming content blocks with error handling, batch creation and polling for cost optimization, file upload and document processing up to 500 MB, tool definition patterns, server-side tools, structured outputs, and prompt caching design principles for prefix stability.

#### 7.2.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, progress tracking, error handling, and best practices for real-time response display.

#### 7.2.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference with quick-start examples, handling different content types, tool-use streaming, event types, and best practices for web UIs and agentic loops.

#### 7.2.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, status polling, result retrieval, cancellation, and prompt caching integration at 50% cost reduction.

#### 7.2.4 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading and managing files (max 500 MB, 100 GB per org) for use in Messages API. Covers file upload, usage in messages with documents and images, file management (list, retrieve metadata, delete, download), and end-to-end example with multiple queries on same file.

#### 7.2.5 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading and managing files for use in Messages API. Covers file upload with toFile helper, usage in messages with documents and images, and file management operations (list, delete, download).

#### 7.2.6 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices.

#### 7.2.7 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference with tool runner, manual agentic loops, code execution, MCP tool conversion, memory tool, and structured outputs including Pydantic schemas and strict tool use.

#### 7.2.8 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, code execution, file handling, memory tool, and structured outputs.

#### 7.2.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Guide to designing prompt-building code for effective caching, covering prefix-stability principles, breakpoint placement patterns, architectural decisions, and silent invalidators that break cache hits.

### 7.3 Agent SDK Reference & Patterns

Comprehensive Agent SDK documentation and implementation patterns for Python and TypeScript. Covers agent initialization, built-in tools, permission modes, MCP integration, hooks for tool lifecycle events, subagents, session management with history and mutations, and architectural guidance for building AI agents. Includes routing guides for selecting appropriate Claude surfaces.

#### 7.3.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, quick start, built-in tools, primary interfaces (query and ClaudeSDKClient), permission system, MCP support, hooks, common options, message types, subagents, error handling, session history, and best practices for building AI agents.

#### 7.3.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference covering installation, quick start, built-in tools, permission modes, MCP support, hooks, common options, subagents, message types, session history with pagination, session mutations, MCP server management, and best practices.

#### 7.3.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks, subagents, MCP server integration (Playwright, PostgreSQL), permission modes, error recovery, session resumption, history retrieval, and session mutations. Demonstrates async patterns with anyio and ClaudeSDKClient for full control.

#### 7.3.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks for tool lifecycle events, subagent definitions, MCP server integration (Playwright), session resumption with session IDs, session history retrieval, session mutations (rename, tag, fork), and custom system prompts.

#### 7.3.5 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, and reading guides.

#### 7.3.6 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, routing users to appropriate sections based on their use case.
