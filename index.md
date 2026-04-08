# Claude Code System Prompts Index

Operational guidelines and reference material for building, running, and governing Claude Code agents — covering how they execute work, coordinate with each other, and integrate with external systems across the full development lifecycle.

## Table of Contents

1. [Bash and Shell Execution](#1-bash-and-shell-execution)
   1. [Bash Tool: Core Behavior Rules](#11-bash-tool-core-behavior-rules)
      1. [Bash (maintain cwd) [Tool Description]](#111-bash-maintain-cwd-tool-description)
      2. [Bash (no newlines) [Tool Description]](#112-bash-no-newlines-tool-description)
      3. [Bash (overview) [Tool Description]](#113-bash-overview-tool-description)
      4. [Bash (parallel commands) [Tool Description]](#114-bash-parallel-commands-tool-description)
      5. [Bash (prefer dedicated tools) [Tool Description]](#115-bash-prefer-dedicated-tools-tool-description)
      6. [Bash (quote file paths) [Tool Description]](#116-bash-quote-file-paths-tool-description)
      7. [Bash (semicolon usage) [Tool Description]](#117-bash-semicolon-usage-tool-description)
      8. [Bash (sequential commands) [Tool Description]](#118-bash-sequential-commands-tool-description)
      9. [Bash (working directory) [Tool Description]](#119-bash-working-directory-tool-description)
      10. [Bash (verify parent directory) [Tool Description]](#1110-bash-verify-parent-directory-tool-description)
      11. [Bash (timeout) [Tool Description]](#1111-bash-timeout-tool-description)
      12. [Bash (built-in tools note) [Tool Description]](#1112-bash-built-in-tools-note-tool-description)
      13. [Bash (alternative — communication) [Tool Description]](#1113-bash-alternative-—-communication-tool-description)
      14. [Bash (alternative — content search) [Tool Description]](#1114-bash-alternative-—-content-search-tool-description)
      15. [Bash (alternative — edit files) [Tool Description]](#1115-bash-alternative-—-edit-files-tool-description)
      16. [Bash (alternative — file search) [Tool Description]](#1116-bash-alternative-—-file-search-tool-description)
      17. [Bash (alternative — read files) [Tool Description]](#1117-bash-alternative-—-read-files-tool-description)
      18. [Bash (alternative — write files) [Tool Description]](#1118-bash-alternative-—-write-files-tool-description)
   2. [Bash Tool: Sandbox Security & Restrictions](#12-bash-tool-sandbox-security-restrictions)
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
   3. [Bash Tool: Sleep & Polling Behavior](#13-bash-tool-sleep-polling-behavior)
      1. [Bash (sleep — keep short) [Tool Description]](#131-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#132-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — run immediately) [Tool Description]](#133-bash-sleep-—-run-immediately-tool-description)
      4. [Bash (sleep — use check commands) [Tool Description]](#134-bash-sleep-—-use-check-commands-tool-description)
      5. [One of six rules for using sleep command (System Prompt)](#135-one-of-six-rules-for-using-sleep-command-system-prompt)
      6. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#136-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
   4. [Bash Tool: Git Operations](#14-bash-tool-git-operations)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#141-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#142-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#143-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#144-bash-git-—-prefer-new-commits-tool-description)
   5. [PowerShell Execution & Syntax](#15-powershell-execution-syntax)
      1. [PowerShell (Tool Description)](#151-powershell-tool-description)
      2. [PowerShell edition for 5.1 (System Prompt)](#152-powershell-edition-for-51-system-prompt)
2. [Planning, Session, and Workflow Management](#2-planning-session-and-workflow-management)
   1. [Plan Mode and Execution Control](#21-plan-mode-and-execution-control)
      1. [Plan Mode: Activation & Workflow](#211-plan-mode-activation-workflow)
         1. [Plan mode is active (5-phase) [System Reminder]](#2111-plan-mode-is-active-5-phase-system-reminder)
         2. [Plan mode is active (iterative) [System Reminder]](#2112-plan-mode-is-active-iterative-system-reminder)
         3. [Plan mode is active (subagent) [System Reminder]](#2113-plan-mode-is-active-subagent-system-reminder)
         4. [Plan mode re-entry (System Reminder)](#2114-plan-mode-re-entry-system-reminder)
         5. [Exited plan mode (System Reminder)](#2115-exited-plan-mode-system-reminder)
         6. [Plan file reference (System Reminder)](#2116-plan-file-reference-system-reminder)
         7. [Verify plan reminder (System Reminder)](#2117-verify-plan-reminder-system-reminder)
         8. [Ultraplan mode (System Reminder)](#2118-ultraplan-mode-system-reminder)
         9. [EnterPlanMode (Tool Description)](#2119-enterplanmode-tool-description)
         10. [ExitPlanMode (Tool Description)](#21110-exitplanmode-tool-description)
         11. [Phase four of plan mode (System Prompt)](#21111-phase-four-of-plan-mode-system-prompt)
         12. [Remote plan mode (ultraplan) [System Prompt]](#21112-remote-plan-mode-ultraplan-system-prompt)
         13. [Remote planning session (System Prompt)](#21113-remote-planning-session-system-prompt)
      2. [User Input & Decision Tools](#212-user-input-decision-tools)
         1. [AskUserQuestion (Tool Description)](#2121-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#2122-askuserquestion-preview-field-tool-description)
   2. [Session State and Notifications](#22-session-state-and-notifications)
      1. [File & IDE State Notifications](#221-file-ide-state-notifications)
         1. [Compact file reference (System Reminder)](#2211-compact-file-reference-system-reminder)
         2. [File exists but empty (System Reminder)](#2212-file-exists-but-empty-system-reminder)
         3. [File modified by user or linter (System Reminder)](#2213-file-modified-by-user-or-linter-system-reminder)
         4. [File opened in IDE (System Reminder)](#2214-file-opened-in-ide-system-reminder)
         5. [File shorter than offset (System Reminder)](#2215-file-shorter-than-offset-system-reminder)
         6. [File truncated (System Reminder)](#2216-file-truncated-system-reminder)
         7. [Lines selected in IDE (System Reminder)](#2217-lines-selected-in-ide-system-reminder)
         8. [New diagnostics detected (System Reminder)](#2218-new-diagnostics-detected-system-reminder)
      2. [Hook Execution Events](#222-hook-execution-events)
         1. [Hook additional context (System Reminder)](#2221-hook-additional-context-system-reminder)
         2. [Hook blocking error (System Reminder)](#2222-hook-blocking-error-system-reminder)
         3. [Hook stopped continuation prefix (System Reminder)](#2223-hook-stopped-continuation-prefix-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#2224-hook-stopped-continuation-system-reminder)
         5. [Hook success (System Reminder)](#2225-hook-success-system-reminder)
      3. [Session & Resource State](#223-session-resource-state)
         1. [Token usage (System Reminder)](#2231-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#2232-usd-budget-system-reminder)
         3. [Session continuation (System Reminder)](#2233-session-continuation-system-reminder)
         4. [Invoked skills (System Reminder)](#2234-invoked-skills-system-reminder)
         5. [Output style active (System Reminder)](#2235-output-style-active-system-reminder)
         6. [MCP resource no content (System Reminder)](#2236-mcp-resource-no-content-system-reminder)
         7. [MCP resource no displayable content (System Reminder)](#2237-mcp-resource-no-displayable-content-system-reminder)
         8. [/btw side question (System Reminder)](#2238-btw-side-question-system-reminder)
      4. [Memory & Task Tracking](#224-memory-task-tracking)
         1. [Memory file contents (System Reminder)](#2241-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#2242-nested-memory-contents-system-reminder)
         3. [Task tools reminder (System Reminder)](#2243-task-tools-reminder-system-reminder)
         4. [TodoWrite reminder (System Reminder)](#2244-todowrite-reminder-system-reminder)
   3. [Session Tracking and Analytics](#23-session-tracking-and-analytics)
      1. [Session Management & Metadata](#231-session-management-metadata)
         1. [Coding session title generator (Agent Prompt)](#2311-coding-session-title-generator-agent-prompt)
         2. [Session title and branch generation (Agent Prompt)](#2312-session-title-and-branch-generation-agent-prompt)
         3. [Session search (Agent Prompt)](#2313-session-search-agent-prompt)
         4. [Agent Summary Generation (System Prompt)](#2314-agent-summary-generation-system-prompt)
         5. [Session memory template (Data)](#2315-session-memory-template-data)
      2. [Usage Insights & Analytics](#232-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#2321-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#2322-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#2323-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#2324-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#2325-insights-suggestions-system-prompt)
3. [Multi-Agent Systems and Coordination](#3-multi-agent-systems-and-coordination)
   1. [Agent Teams and Swarm Coordination](#31-agent-teams-and-swarm-coordination)
      1. [Multi-Agent Team Coordination](#311-multi-agent-team-coordination)
         1. [Team Coordination (System Reminder)](#3111-team-coordination-system-reminder)
         2. [Team Shutdown (System Reminder)](#3112-team-shutdown-system-reminder)
         3. [Teammate Communication (System Prompt)](#3113-teammate-communication-system-prompt)
         4. [TeammateTool (Tool Description)](#3114-teammatetool-tool-description)
         5. [TeamDelete (Tool Description)](#3115-teamdelete-tool-description)
         6. [TaskList (teammate workflow) [Tool Description]](#3116-tasklist-teammate-workflow-tool-description)
         7. [SendMessageTool (Tool Description)](#3117-sendmessagetool-tool-description)
         8. [SendMessageTool (non-agent-teams) [Tool Description]](#3118-sendmessagetool-non-agent-teams-tool-description)
         9. [How to use the SendUserMessage tool (System Prompt)](#3119-how-to-use-the-sendusermessage-tool-system-prompt)
      2. [Subagent Spawning & Delegation](#312-subagent-spawning-delegation)
         1. [Agent (usage notes) [Tool Description]](#3121-agent-usage-notes-tool-description)
         2. [Subagent delegation examples (System Prompt)](#3122-subagent-delegation-examples-system-prompt)
         3. [Subagent prompt-writing examples (System Prompt)](#3123-subagent-prompt-writing-examples-system-prompt)
         4. [Writing subagent prompts (System Prompt)](#3124-writing-subagent-prompts-system-prompt)
         5. [Fork usage guidelines (System Prompt)](#3125-fork-usage-guidelines-system-prompt)
         6. [Tool usage (subagent guidance) [System Prompt]](#3126-tool-usage-subagent-guidance-system-prompt)
         7. [Tool usage (delegate exploration) [System Prompt]](#3127-tool-usage-delegate-exploration-system-prompt)
         8. [Worker fork (Agent Prompt)](#3128-worker-fork-agent-prompt)
      3. [Task & Todo Management Tools](#313-task-todo-management-tools)
         1. [TodoWrite (Tool Description)](#3131-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#3132-taskcreate-tool-description)
         3. [Tool usage (task management) [System Prompt]](#3133-tool-usage-task-management-system-prompt)
   2. [Agent Design, Configuration, and Skills](#32-agent-design-configuration-and-skills)
      1. [Agent Design & Creation](#321-agent-design-creation)
         1. [Agent creation architect (Agent Prompt)](#3211-agent-creation-architect-agent-prompt)
         2. [Auto mode rule reviewer (Agent Prompt)](#3212-auto-mode-rule-reviewer-agent-prompt)
         3. [Hook condition evaluator (stop) [Agent Prompt]](#3213-hook-condition-evaluator-stop-agent-prompt)
         4. [Agent Hook (Agent Prompt)](#3214-agent-hook-agent-prompt)
      2. [Skill System & Invocation](#322-skill-system-invocation)
         1. [Skill (Tool Description)](#3221-skill-tool-description)
         2. [Skillify Current Session (System Prompt)](#3222-skillify-current-session-system-prompt)
      3. [Miscellaneous Agent & System Prompts](#323-miscellaneous-agent-system-prompts)
         1. [Buddy Mode (System Prompt)](#3231-buddy-mode-system-prompt)
         2. [Minimal mode (System Prompt)](#3232-minimal-mode-system-prompt)
         3. [Option previewer (System Prompt)](#3233-option-previewer-system-prompt)
         4. [Scratchpad directory (System Prompt)](#3234-scratchpad-directory-system-prompt)
         5. [Worker instructions (System Prompt)](#3235-worker-instructions-system-prompt)
         6. [Advisor tool instructions (System Prompt)](#3236-advisor-tool-instructions-system-prompt)
         7. [Agent mention (System Reminder)](#3237-agent-mention-system-reminder)
         8. [Prompt Suggestion Generator v2 (Agent Prompt)](#3238-prompt-suggestion-generator-v2-agent-prompt)
         9. [Bash command description writer (Agent Prompt)](#3239-bash-command-description-writer-agent-prompt)
         10. [Bash command prefix detection (Agent Prompt)](#32310-bash-command-prefix-detection-agent-prompt)
         11. [Status line setup (Agent Prompt)](#32311-status-line-setup-agent-prompt)
         12. [WebFetch summarizer (Agent Prompt)](#32312-webfetch-summarizer-agent-prompt)
         13. [Claude guide agent (Agent Prompt)](#32313-claude-guide-agent-agent-prompt)
   3. [Memory and Context Persistence](#33-memory-and-context-persistence)
      1. [Memory Management: Persistence & Retrieval](#331-memory-management-persistence-retrieval)
         1. [Determine which memory files to attach (Agent Prompt)](#3311-determine-which-memory-files-to-attach-agent-prompt)
         2. [Memory synthesis (Agent Prompt)](#3312-memory-synthesis-agent-prompt)
         3. [Session memory update instructions (Agent Prompt)](#3313-session-memory-update-instructions-agent-prompt)
         4. [Agent memory instructions (System Prompt)](#3314-agent-memory-instructions-system-prompt)
         5. [Memory description of user details (System Prompt)](#3315-memory-description-of-user-details-system-prompt)
         6. [Memory description of user feedback (System Prompt)](#3316-memory-description-of-user-feedback-system-prompt)
         7. [Memory description of user feedback (with explicit save) [System Prompt]](#3317-memory-description-of-user-feedback-with-explicit-save-system-prompt)
         8. [Memory staleness verification (System Prompt)](#3318-memory-staleness-verification-system-prompt)
         9. [Description part of memory instructions (System Prompt)](#3319-description-part-of-memory-instructions-system-prompt)
      2. [Memory Consolidation & Dream Mode](#332-memory-consolidation-dream-mode)
         1. [Dream memory consolidation (Agent Prompt)](#3321-dream-memory-consolidation-agent-prompt)
         2. [Dream memory pruning (Agent Prompt)](#3322-dream-memory-pruning-agent-prompt)
      3. [Conversation Summarization & Context Compaction](#333-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#3331-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#3332-recent-message-summarization-agent-prompt)
         3. [Context compaction summary (System Prompt)](#3333-context-compaction-summary-system-prompt)
         4. [Partial compaction instructions (System Prompt)](#3334-partial-compaction-instructions-system-prompt)
4. [Tools, File Operations, and Automation](#4-tools-file-operations-and-automation)
   1. [File, Search, and Browser Tools](#41-file-search-and-browser-tools)
      1. [Tool Preference & Usage Hierarchy](#411-tool-preference-usage-hierarchy)
         1. [Tool usage (create files) [System Prompt]](#4111-tool-usage-create-files-system-prompt)
         2. [Tool usage (edit files) [System Prompt]](#4112-tool-usage-edit-files-system-prompt)
         3. [Tool usage (read files) [System Prompt]](#4113-tool-usage-read-files-system-prompt)
         4. [Tool usage (reserve Bash) [System Prompt]](#4114-tool-usage-reserve-bash-system-prompt)
         5. [Tool usage (search content) [System Prompt]](#4115-tool-usage-search-content-system-prompt)
         6. [Tool usage (search files) [System Prompt]](#4116-tool-usage-search-files-system-prompt)
         7. [Tool usage (direct search) [System Prompt]](#4117-tool-usage-direct-search-system-prompt)
         8. [Tool usage (skill invocation) [System Prompt]](#4118-tool-usage-skill-invocation-system-prompt)
      2. [Core File Operation Tools](#412-core-file-operation-tools)
         1. [ReadFile (Tool Description)](#4121-readfile-tool-description)
         2. [Write (Tool Description)](#4122-write-tool-description)
         3. [Edit (Tool Description)](#4123-edit-tool-description)
         4. [Grep (Tool Description)](#4124-grep-tool-description)
         5. [LSP (Tool Description)](#4125-lsp-tool-description)
         6. [NotebookEdit (Tool Description)](#4126-notebookedit-tool-description)
      3. [Web & Browser Automation Tools](#413-web-browser-automation-tools)
         1. [Computer (Tool Description)](#4131-computer-tool-description)
         2. [WebFetch (Tool Description)](#4132-webfetch-tool-description)
         3. [WebSearch (Tool Description)](#4133-websearch-tool-description)
         4. [Computer action (Tool Parameter)](#4134-computer-action-tool-parameter)
         5. [Claude in Chrome browser automation (System Prompt)](#4135-claude-in-chrome-browser-automation-system-prompt)
         6. [Chrome browser MCP tools (System Prompt)](#4136-chrome-browser-mcp-tools-system-prompt)
   2. [Version Control, Scheduling, and Configuration](#42-version-control-scheduling-and-configuration)
      1. [Git Worktree & Version Control Tools](#421-git-worktree-version-control-tools)
         1. [EnterWorktree (Tool Description)](#4211-enterworktree-tool-description)
         2. [ExitWorktree (Tool Description)](#4212-exitworktree-tool-description)
         3. [Git status (System Prompt)](#4213-git-status-system-prompt)
      2. [Scheduling & Cron Tools](#422-scheduling-cron-tools)
         1. [CronCreate (Tool Description)](#4221-croncreate-tool-description)
         2. [/loop slash command (Skill)](#4222-loop-slash-command-skill)
         3. [/schedule slash command (Agent Prompt)](#4223-schedule-slash-command-agent-prompt)
      3. [Configuration & Settings Management](#423-configuration-settings-management)
         1. [Config (Tool Description)](#4231-config-tool-description)
         2. [Update Claude Code Config (Skill)](#4232-update-claude-code-config-skill)
         3. [update-config (7-step verification flow) [Skill]](#4233-update-config-7-step-verification-flow-skill)
         4. [Hooks Configuration (System Prompt)](#4234-hooks-configuration-system-prompt)
      4. [Tool Discovery & Desktop Automation](#424-tool-discovery-desktop-automation)
         1. [ToolSearch (second part) [Tool Description]](#4241-toolsearch-second-part-tool-description)
         2. [Computer Use MCP (Skill)](#4242-computer-use-mcp-skill)
         3. [MCP Tool Result Truncation (System Prompt)](#4243-mcp-tool-result-truncation-system-prompt)
5. [Code Quality, Security, and Development Workflows](#5-code-quality-security-and-development-workflows)
   1. [Code Discipline and Safety Controls](#51-code-discipline-and-safety-controls)
      1. [Code Quality & Task Execution Guidelines](#511-code-quality-task-execution-guidelines)
         1. [Doing tasks (minimize file creation) [System Prompt]](#5111-doing-tasks-minimize-file-creation-system-prompt)
         2. [Doing tasks (no compatibility hacks) [System Prompt]](#5112-doing-tasks-no-compatibility-hacks-system-prompt)
         3. [Doing tasks (no premature abstractions) [System Prompt]](#5113-doing-tasks-no-premature-abstractions-system-prompt)
         4. [Doing tasks (no unnecessary additions) [System Prompt]](#5114-doing-tasks-no-unnecessary-additions-system-prompt)
         5. [Doing tasks (no unnecessary error handling) [System Prompt]](#5115-doing-tasks-no-unnecessary-error-handling-system-prompt)
         6. [Doing tasks (read before modifying) [System Prompt]](#5116-doing-tasks-read-before-modifying-system-prompt)
         7. [Doing tasks (no time estimates) [System Prompt]](#5117-doing-tasks-no-time-estimates-system-prompt)
         8. [Doing tasks (ambitious tasks) [System Prompt]](#5118-doing-tasks-ambitious-tasks-system-prompt)
         9. [Doing tasks (help and feedback) [System Prompt]](#5119-doing-tasks-help-and-feedback-system-prompt)
         10. [Doing tasks (software engineering focus) [System Prompt]](#51110-doing-tasks-software-engineering-focus-system-prompt)
         11. [Doing tasks (security) [System Prompt]](#51111-doing-tasks-security-system-prompt)
      2. [Safety, Security & Execution Controls](#512-safety-security-execution-controls)
         1. [Executing actions with care (System Prompt)](#5121-executing-actions-with-care-system-prompt)
         2. [Censoring assistance with malicious activities (System Prompt)](#5122-censoring-assistance-with-malicious-activities-system-prompt)
         3. [Malware analysis after Read tool call (System Reminder)](#5123-malware-analysis-after-read-tool-call-system-reminder)
         4. [Tool execution denied (System Prompt)](#5124-tool-execution-denied-system-prompt)
         5. [Auto mode (System Prompt)](#5125-auto-mode-system-prompt)
   2. [Security Monitoring & Vulnerability Review](#52-security-monitoring-vulnerability-review)
      1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#521-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#522-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      3. [/security-review slash command (Agent Prompt)](#523-security-review-slash-command-agent-prompt)
   3. [Git Automation and Codebase Analysis](#53-git-automation-and-codebase-analysis)
      1. [Git Commit & PR Automation Agents](#531-git-commit-pr-automation-agents)
         1. [Quick git commit (Agent Prompt)](#5311-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#5312-quick-pr-creation-agent-prompt)
         3. [/review-pr slash command (Agent Prompt)](#5313-review-pr-slash-command-agent-prompt)
         4. [/batch slash command (Agent Prompt)](#5314-batch-slash-command-agent-prompt)
      2. [Codebase Exploration & Analysis](#532-codebase-exploration-analysis)
         1. [Explore (Agent Prompt)](#5321-explore-agent-prompt)
         2. [General purpose (Agent Prompt)](#5322-general-purpose-agent-prompt)
         3. [Plan mode (enhanced) [Agent Prompt]](#5323-plan-mode-enhanced-agent-prompt)
   4. [Verification, Review, and Onboarding](#54-verification-review-and-onboarding)
      1. [Verification & Testing](#541-verification-testing)
         1. [Verify skill (Skill)](#5411-verify-skill-skill)
         2. [Verify CLI changes (example for Verify skill) [Skill]](#5412-verify-cli-changes-example-for-verify-skill-skill)
         3. [Verify server/API changes (example for Verify skill) [Skill]](#5413-verify-serverapi-changes-example-for-verify-skill-skill)
         4. [Create verifier skills (Skill)](#5414-create-verifier-skills-skill)
         5. [Verification specialist (Agent Prompt)](#5415-verification-specialist-agent-prompt)
      2. [Code Review & Debugging](#542-code-review-debugging)
         1. [Simplify (Skill)](#5421-simplify-skill)
         2. [Debugging (Skill)](#5422-debugging-skill)
         3. [/stuck slash command (Skill)](#5423-stuck-slash-command-skill)
      3. [Project Initialization & Team Onboarding](#543-project-initialization-team-onboarding)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#5431-init-claudemd-and-skill-setup-new-version-skill)
         2. [CLAUDE.md creation (Agent Prompt)](#5432-claudemd-creation-agent-prompt)
         3. [Team onboarding guide (Skill)](#5433-team-onboarding-guide-skill)
         4. [Onboarding guide generator (Agent Prompt)](#5434-onboarding-guide-generator-agent-prompt)
      4. [Learning & Educational Modes](#544-learning-educational-modes)
         1. [Learning mode (System Prompt)](#5441-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#5442-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#5443-request_teach_access-part-of-teach-mode-tool-description)
6. [API, SDK, and Integration Reference](#6-api-sdk-and-integration-reference)
   1. [Language SDKs and API Features](#61-language-sdks-and-api-features)
      1. [Claude API Reference: Language SDKs](#611-claude-api-reference-language-sdks)
         1. [Claude API reference — Python (Data)](#6111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#6112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#6113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#6114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#6115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#6116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#6117-claude-api-reference-—-c-data)
         8. [Claude API reference — cURL (Data)](#6118-claude-api-reference-—-curl-data)
      2. [API Features: Streaming, Tool Use & Batches](#612-api-features-streaming-tool-use-batches)
         1. [Streaming reference — Python (Data)](#6121-streaming-reference-—-python-data)
         2. [Streaming reference — TypeScript (Data)](#6122-streaming-reference-—-typescript-data)
         3. [Tool use concepts (Data)](#6123-tool-use-concepts-data)
         4. [Tool use reference — Python (Data)](#6124-tool-use-reference-—-python-data)
         5. [Tool use reference — TypeScript (Data)](#6125-tool-use-reference-—-typescript-data)
         6. [Message Batches API reference — Python (Data)](#6126-message-batches-api-reference-—-python-data)
         7. [Files API reference — Python (Data)](#6127-files-api-reference-—-python-data)
         8. [Files API reference — TypeScript (Data)](#6128-files-api-reference-—-typescript-data)
   2. [Agent SDK, Model Reference, and Optimization](#62-agent-sdk-model-reference-and-optimization)
      1. [Agent SDK Reference & Patterns](#621-agent-sdk-reference-patterns)
         1. [Agent SDK reference — Python (Data)](#6211-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#6212-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#6213-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#6214-agent-sdk-patterns-—-typescript-data)
         5. [Agent Design Patterns (Skill)](#6215-agent-design-patterns-skill)
         6. [Build with Claude API (Skill)](#6216-build-with-claude-api-skill)
         7. [Build with Claude API (reference guide) [Skill]](#6217-build-with-claude-api-reference-guide-skill)
      2. [API Optimization & Model Reference](#622-api-optimization-model-reference)
         1. [Prompt Caching — Design & Optimization (Data)](#6221-prompt-caching-—-design-optimization-data)
         2. [Claude model catalog (Data)](#6222-claude-model-catalog-data)
         3. [HTTP error codes reference (Data)](#6223-http-error-codes-reference-data)
         4. [Live documentation sources (Data)](#6224-live-documentation-sources-data)
      3. [GitHub Integration & CI/CD](#623-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#6231-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#6232-github-app-installation-pr-description-data)
   3. [Output Style & Communication Guidelines](#63-output-style-communication-guidelines)
      1. [Tone and style (code references) [System Prompt]](#631-tone-and-style-code-references-system-prompt)
      2. [Tone and style (concise output — short) [System Prompt]](#632-tone-and-style-concise-output-—-short-system-prompt)
      3. [Output efficiency (System Prompt)](#633-output-efficiency-system-prompt)
      4. [Agent thread notes (System Prompt)](#634-agent-thread-notes-system-prompt)
      5. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#635-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)

---

## 1. Bash and Shell Execution

Rules, safety policies, and behavioral conventions governing bash command execution, including working directory management, command chaining, sandbox enforcement, git operations, and sleep/polling patterns.

### 1.1 Bash Tool: Core Behavior Rules

Conventions for effective bash command execution, including working directory management via absolute paths, command chaining with && for dependencies and semicolons for independent sequences, parallel execution for unrelated commands, and preferring dedicated tools over bash for read-only operations like file searching and content inspection.

#### 1.1.1 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain the current working directory by using absolute paths and avoiding cd commands unless explicitly requested.

#### 1.1.2 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs Claude not to use newlines to separate bash commands.

#### 1.1.3 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the bash tool as executing commands and returning their output.

#### 1.1.4 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to run independent bash commands as parallel tool calls in a single message rather than sequentially.

#### 1.1.5 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Instructs Claude to avoid using bash for read-only searching commands and instead use dedicated tools for better user experience.

#### 1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs Claude to always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.7 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially but not caring if earlier commands fail.

#### 1.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent bash commands using && in a single tool call when they must run sequentially.

#### 1.1.9 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that bash working directory persists between commands but shell state does not, with environment initialized from user profile.

#### 1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directories exist using `ls` before creating new files or directories.

#### 1.1.11 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration for bash commands, allowing specification up to a maximum duration with a default fallback.

#### 1.1.12 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and transparency than Bash equivalents.

#### 1.1.13 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly instead of using echo or printf.

#### 1.1.14 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Instructs to use Grep tool instead of grep or rg for content searching.

#### 1.1.15 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs to use Edit tool instead of sed or awk for file editing.

#### 1.1.16 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Instructs to use Glob tool instead of find or ls for file searching.

#### 1.1.17 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs to use Read tool instead of cat, head, or tail for file reading.

#### 1.1.18 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Instructs to use Write tool instead of echo or cat for file writing.

### 1.2 Bash Tool: Sandbox Security & Restrictions

Mandatory sandbox enforcement for bash commands with automatic failure detection, user-initiated escalation, and restriction explanation. Commands default to sandboxed execution; failures due to access denial, network restrictions, or permission errors trigger immediate retry with sandbox bypass, followed by user guidance on adjusting allowlists while protecting sensitive paths.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to work with the user to adjust sandbox settings when a command fails due to sandbox restrictions.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to always default to running commands within the sandbox and only bypass when explicitly requested or evidence of restriction exists.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that identify sandbox-caused command failures.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies operation not permitted errors for file and network operations as evidence of sandbox restrictions.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the /sandbox command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition for identifying sandbox-caused failures: when a command fails with evidence of sandbox restrictions, distinguishing them from other failure causes.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode because the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Enforces that commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Instructs Claude not to suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh, or credential files to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands even after running one with dangerouslyDisableSandbox.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing Claude's response protocol when encountering evidence of sandbox-caused command failures.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry a failed command with dangerouslyDisableSandbox set to true without asking the user first.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Instructs Claude to use the $TMPDIR environment variable for temporary files in sandbox mode rather than /tmp directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will trigger a user permission prompt.

### 1.3 Bash Tool: Sleep & Polling Behavior

Sleep commands should be minimal (1-5 seconds) and avoided when commands execute immediately. Polling external processes uses check commands rather than sleep loops; background tasks rely on completion notifications instead of polling. Failing commands require root cause diagnosis rather than retry loops.

#### 1.3.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep bash sleep durations brief (1-5 seconds) to avoid blocking the user.

#### 1.3.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with run_in_background, but instead wait for completion notifications.

#### 1.3.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude to avoid sleeping between bash commands that can execute immediately.

#### 1.3.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` instead of sleeping when polling external processes.

#### 1.3.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; instead diagnose root causes.

#### 1.3.6 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Guidelines for avoiding unnecessary sleep commands in PowerShell by running commands immediately, using background task notifications, and preferring check commands over polling.

### 1.4 Bash Tool: Git Operations

Safe git workflows prioritize new commits over amendments, never skip hooks or signing without explicit user request, and avoid destructive operations like force pushes and hard resets. Commit creation follows staged change analysis and hook investigation; pull requests use the gh command with proper safety protocols.

#### 1.4.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives to destructive git operations like reset --hard, push --force, and checkout.

#### 1.4.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Detailed instructions for creating git commits and GitHub pull requests, covering safety protocols, staged changes analysis, commit message drafting, hook handling, and PR creation with gh command.

#### 1.4.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs never to skip hooks or bypass signing unless user explicitly requests, and to investigate and fix hook failures.

#### 1.4.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to prefer creating new commits over amending existing commits.

### 1.5 PowerShell Execution & Syntax

PowerShell command execution with version-specific syntax constraints, timeout handling, and workarounds for Windows 5.1 limitations including operator gaps and encoding quirks.

#### 1.5.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with timeout configuration and detailed syntax guidance, emphasizing use of specialized tools for file operations and avoiding interactive commands in non-interactive mode.

#### 1.5.2 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 syntax limitations and workarounds, including absence of pipeline chain operators, ternary operators, and stderr redirection quirks, plus UTF-16 LE default encoding.

---

## 2. Planning, Session, and Workflow Management

Plan mode activation, session lifecycle tracking, IDE state notifications, resource monitoring, usage analytics, and interactive tools for user input and decision-making during development sessions.

### 2.1 Plan Mode and Execution Control

Plan mode workflows for codebase exploration and implementation design before coding, including activation, approval, and re-entry patterns.

#### 2.1.1 Plan Mode: Activation & Workflow

Plan mode suspends execution to enable codebase exploration and implementation design before coding. Workflows range from iterative pair-planning with incremental plan file updates to multi-phase exploration with parallel agents and critique review. Exit via plan approval tool restores full capabilities; re-entry evaluates existing plans against new requests.

##### 2.1.1.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode constraints and guides a five-phase workflow: initial exploration with parallel agents, design with planning agents, review, phase four (conditional), and plan approval. Emphasizes read-only operations and incremental plan file updates.

##### 2.1.1.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Establishes iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, and asks clarifying questions until the plan is complete. Restricts edits to the plan file only and requires exit via plan approval tool.

##### 2.1.1.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Instructs Claude to enter plan mode where execution is suspended and only read-only actions and plan file editing are permitted until the user approves execution.

##### 2.1.1.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, requiring evaluation of existing plan against new user requests and deciding whether to continue or restart planning.

##### 2.1.1.5 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Confirms exit from plan mode and restores full capabilities including edits, tool execution, and actions.

##### 2.1.1.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs continuation if relevant and incomplete.

##### 2.1.1.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling verification tool directly after implementation finishes.

##### 2.1.1.8 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Instructs Claude to create exceptionally detailed implementation plans using parallel subagents for code exploration, file identification, and risk analysis, with critique review and conditional execution or teleportation based on user approval.

##### 2.1.1.9 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore codebase and design implementation approaches for user approval before coding, recommended for non-trivial features, multiple valid approaches, architectural decisions, and multi-file changes.

##### 2.1.1.10 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning and requests user approval by reading the plan file, used only for implementation tasks requiring code changes, not research or exploration.

##### 2.1.1.11 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes the plan to file with file paths and changes, function references, and a single verification command. Hard limit of 40 lines with no context or prose sections.

##### 2.1.1.12 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore codebases, produce diagram-rich implementation plans via ExitPlanMode, and handle approval, rejection, or teleportation back to the user's local terminal. Emphasizes lightweight exploration without subagents and detailed, actionable plans with visual structure for complex changes.

##### 2.1.1.13 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Instructs Claude to conduct lightweight codebase exploration, produce actionable implementation plans via ExitPlanMode, and handle plan approval, rejection with feedback, or teleportation back to the user's terminal. Enforces read-only operations until plan approval.

#### 2.1.2 User Input & Decision Tools

Interactive tools for soliciting user preferences and clarifications through structured questions, with visual preview capabilities for comparing implementation options and design choices.

##### 2.1.2.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes when and how to use AskUserQuestion tool for gathering preferences, clarifying instructions, and offering implementation choices, with special guidance for plan mode interactions.

##### 2.1.2.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructions for using optional HTML preview field on single-select question options to display visual artifacts like UI mockups, code snippets, and diagrams.

### 2.2 Session State and Notifications

System notifications tracking file state, IDE events, hook execution, resource consumption, and capability status to maintain working context awareness.

#### 2.2.1 File & IDE State Notifications

System alerts that track file state changes, IDE interactions, and content boundaries. These notifications inform Claude of external modifications, truncation limits, selection events, and diagnostic issues to maintain awareness of the working context.

##### 2.2.1.1 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs use of the Read tool to access it.

##### 2.2.1.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns that a file exists but contains no content.

##### 2.2.1.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Alerts Claude that a file was externally modified and provides line-numbered changes to incorporate without reverting unless requested.

##### 2.2.1.4 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 2.2.1.5 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns that a file read offset exceeds the file's actual length and provides the total line count.

##### 2.2.1.6 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a line limit and directs use of the Read tool to access additional content.

##### 2.2.1.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of line ranges selected by the user in the IDE with truncated content preview.

##### 2.2.1.8 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues with a summary of problems.

#### 2.2.2 Hook Execution Events

Reports on hook command execution outcomes, including success results, blocking errors, and continuation control. These notifications communicate hook lifecycle events and provide context from hook-triggered operations.

##### 2.2.2.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Delivers additional context information from a hook execution.

##### 2.2.2.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 2.2.2.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix label for hook-stopped continuation messages.

##### 2.2.2.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Communicates that a hook has stopped continuation and provides the associated message.

##### 2.2.2.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook with its result content.

#### 2.2.3 Session & Resource State

Tracks session context, resource consumption, and capability status. These notifications monitor token and budget usage, session continuity across machines, active skills and output styles, and MCP resource availability.

##### 2.2.3.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 2.2.3.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

##### 2.2.3.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and application state may have changed.

##### 2.2.3.4 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the session and instructs Claude to continue following their guidelines.

##### 2.2.3.5 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that an output style is active and instructs adherence to its specific guidelines.

##### 2.2.3.6 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 2.2.3.7 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it is not displayable.

##### 2.2.3.8 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude to answer a side question as a lightweight, tool-less agent spawned independently from the main conversation, providing only information from existing context without offering to take actions.

#### 2.2.4 Memory & Task Tracking

Provides access to persistent memory state and gentle reminders for task progress tracking. These notifications surface stored context and encourage use of task management tools when relevant to ongoing work.

##### 2.2.4.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Presents the contents of a memory file by path with type description.

##### 2.2.4.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays contents of a nested memory file structure.

##### 2.2.4.3 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task tracking tools for progress monitoring when relevant to current work, with instruction not to mention reminder to user.

##### 2.2.4.4 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use TodoWrite tool for task progress tracking when relevant, with instruction not to mention reminder to user.

### 2.3 Session Tracking and Analytics

Utilities for naming, searching, and analyzing coding sessions through metadata, transcript retrieval, and structured insights about workflow patterns and friction points.

#### 2.3.1 Session Management & Metadata

Utilities for naming, searching, and tracking coding sessions through structured metadata. Generates concise titles and branch names following conventions, maintains session memory, and enables transcript-based session retrieval.

##### 2.3.1.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise 3–7 word sentence-case titles capturing the main goal of a coding session, returning JSON with a single title field.

##### 2.3.1.2 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent for generating succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, lowercase with dashes, claude/ prefix) based on session descriptions.

##### 2.3.1.3 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent prompt for searching past Claude Code conversation sessions by scanning .jsonl transcript files and returning matching session IDs ordered by relevance.

##### 2.3.1.4 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Instructs Claude to describe recent actions in 3-5 words using present tense, naming specific files or functions rather than branches, without using tools.

##### 2.3.1.5 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing current state, task specification, files, workflow, errors, and key results for session continuity.

#### 2.3.2 Usage Insights & Analytics

Analyzes Claude Code sessions to extract structured insights about what's working, friction patterns, and future opportunities. Generates actionable recommendations including workflow optimizations, feature suggestions, and CLAUDE.md enhancements based on explicit user signals and recurring usage patterns.

##### 2.3.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for future models. Uses coaching tone and avoids numerical stats or generic praise.

##### 2.3.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with 3 categories and 2 examples each, using second-person language to describe recurring issues.

##### 2.3.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future opportunities for autonomous AI-assisted development workflows, including parallel agents and test-driven iteration, with copyable prompts for experimentation.

##### 2.3.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code sessions including goal categories, user satisfaction signals, and friction types. Emphasizes counting only explicit user requests and satisfaction signals.

##### 2.3.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns based on session data. Prioritizes repeated user instructions for CLAUDE.md.

---

## 3. Multi-Agent Systems and Coordination

Frameworks for spawning, coordinating, and managing multiple agents, including team communication protocols, subagent delegation, task distribution, and agent design and validation.

### 3.1 Agent Teams and Swarm Coordination

Team identity, inter-agent messaging, task distribution mechanisms, and graceful shutdown procedures for coordinating multiple agents working together.

#### 3.1.1 Multi-Agent Team Coordination

Establishes team identity, communication protocols, and swarm workflows for coordinating multiple agents. These resources define task distribution mechanisms, inter-agent messaging, team lifecycle management, and graceful shutdown procedures.

##### 3.1.1.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity as a team member, defines team resources and communication protocols, and instructs use of agent names rather than UUIDs for teammate messaging.

##### 3.1.1.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down team members gracefully and clean up before returning final response in non-interactive mode.

##### 3.1.1.3 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents running in a team to use the SendMessage tool to communicate with teammates, as text responses are not visible to other agents.

##### 3.1.1.4 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Defines team creation and multi-agent coordination workflows, including agent type selection, task list management, automatic message delivery, and idle state handling. Teammates claim tasks by ID order, communicate via SendMessage, and coordinate through shared task lists.

##### 3.1.1.5 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completes, requiring all active members to be gracefully terminated first.

##### 3.1.1.6 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Instructs teammates to use TaskList to find pending unowned tasks, claim them in ID order via TaskUpdate, and notify the team lead if blocked.

##### 3.1.1.7 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages between agents in teammate mode, supporting broadcast to all teammates and legacy protocol responses for shutdown and plan approval requests.

##### 3.1.1.8 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends messages to users with markdown support and file attachments, using status labels to indicate intent (normal reply vs. proactive notification).

##### 3.1.1.9 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to use SendUserMessage for all user-visible replies, with guidance on acknowledgment, checkpoints, and concise messaging. Emphasizes that text outside this tool is rarely seen and that longer work should follow an ack-work-result pattern.

#### 3.1.2 Subagent Spawning & Delegation

Mechanisms for spawning specialized subagents to parallelize work, isolate context, and handle independent tasks. Covers prompt construction for fresh agents, fork patterns for research and implementation, waiting semantics, and constraints on synthesis delegation.

##### 3.1.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance for spawning and managing subagents, covering foreground vs background execution, parallel launches, worktree isolation, agent resumption via messaging, and context-specific constraints for subagents and teammates.

##### 3.1.2.2 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, demonstrating how to fork agents for independent work, handle waiting states when results haven't returned, and specify subagent types for fresh-context analysis.

##### 3.1.2.3 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates how to write self-contained, well-structured prompts for subagent delegation, including context-setting, clear goals, and concise response expectations for tasks like audits and independent code reviews.

##### 3.1.2.4 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts: brief fresh agents with full context, explain goals and constraints, avoid delegating synthesis, and include specific file paths and line numbers rather than prescriptive steps.

##### 3.1.2.5 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents for research and implementation work, prohibits reading fork output mid-flight or fabricating results, and requires specific fork prompts that focus on directives rather than context re-explanation.

##### 3.1.2.6 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Guides Claude to use the Task tool with specialized subagents for parallelizing independent work or protecting context, while avoiding duplication and excessive delegation.

##### 3.1.2.7 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Instructs Claude to use the Task tool with specialized exploration subagents for broader codebase research when simple directed searches prove insufficient.

##### 3.1.2.8 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

System prompt for forked worker sub-agent that executes a single directive from parent agent and reports back concisely without spawning additional sub-agents or follow-up questions.

#### 3.1.3 Task & Todo Management Tools

Structured task tracking for organizing multi-step work sessions, marking progress through defined states, and demonstrating thoroughness on complex problems.

##### 3.1.3.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Instructs Claude to create and manage structured task lists for multi-step coding sessions, tracking progress with pending/in_progress/completed states. Use proactively for complex tasks, multiple steps, or explicit user requests, but skip trivial single-step work.

##### 3.1.3.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for organizing complex multi-step work, tracking progress, and demonstrating thoroughness, with guidance on when to use versus skip for trivial tasks.

##### 3.1.3.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite to break down work into tasks, track progress, and mark tasks complete immediately upon finishing them.

### 3.2 Agent Design, Configuration, and Skills

Designing custom agents with behavioral boundaries, validating classifier rules, capturing reusable workflows as skills, and configuring specialized system prompts for specific tasks.

#### 3.2.1 Agent Design & Creation

Designs and validates custom AI agents by architecting system prompts with behavioral boundaries, evaluating classifier rules for conflicts and clarity, and verifying stop conditions through transcript analysis. Produces structured JSON specifications for agent deployment and operation.

##### 3.2.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts with behavioral boundaries and quality controls, and generating concise identifiers. Produces JSON output with agent identifier, usage examples, and complete operational manual.

##### 3.2.1.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability across allow, soft_deny, and environment categories to ensure the LLM classifier can interpret them correctly.

##### 3.2.1.3 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks by reading conversation transcripts and returning JSON with ok/reason fields, quoting transcript evidence or explaining what is missing.

##### 3.2.1.4 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and returning structured output confirming whether an agent completed its assigned plan.

#### 3.2.2 Skill System & Invocation

Enables specialized domain capabilities through reusable skills invoked by name or slash commands. Captures repeatable workflows through guided interviews, generating structured skill definitions with clear inputs, goals, and success criteria for future automation.

##### 3.2.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills within conversations, invoked by skill name or slash commands, with requirement to call the tool before generating responses about matching tasks.

##### 3.2.2.2 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-round interview process to capture a session's repeatable workflow as a reusable skill, analyzing the process, confirming details with the user via AskUserQuestion, and generating a SKILL.md file with clear inputs, goals, steps, success criteria, and execution annotations.

#### 3.2.3 Miscellaneous Agent & System Prompts

Specialized system prompts and agent instructions that configure Claude's behavior for specific workflows: terminal companions with personality, minimal feature sets, preview layouts, file management, post-implementation testing, code review integration, and task-specific agents for bash commands, status lines, web summarization, and documentation guidance.

##### 3.2.3.1 [Buddy Mode (System Prompt)](system-prompts/system-prompt-buddy-mode.md)

Instructions for generating terminal-based coding companions with distinct personalities, memorable one-word names, and quirky traits that comment on developer work based on rarity, species, stats, and inspiration words.

##### 3.2.3.2 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode which disables hooks, LSP, plugins, auto-memory, and background features while requiring explicit context via CLI flags. Supports skill resolution and uses ANTHROPIC_API_KEY for auth.

##### 3.2.3.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Defines the preview field for presenting visual artifacts like ASCII mockups, code snippets, and diagrams in side-by-side layout. Supports single-select questions only.

##### 3.2.3.4 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

##### 3.2.3.5 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines the post-implementation workflow for workers: simplify changes via the simplify skill, run unit and e2e tests, commit and push, and report the PR URL.

##### 3.2.3.6 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructs Claude to call an advisor tool backed by a stronger reviewer model before substantive work, when stuck, or before declaring completion. Emphasizes making deliverables durable before advisor calls and surfacing conflicts when evidence contradicts advice.

##### 3.2.3.7 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user has requested invocation of a specific agent type and instructs Claude to invoke it with appropriate context.

##### 3.2.3.8 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent context, returning only specific 2–12 word suggestions or silence if the next step is unclear.

##### 3.2.3.9 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy commands.

##### 3.2.3.10 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attacks in bash commands to enforce safety allowlists, returning either the prefix or 'command_injection_detected' with no additional output.

##### 3.2.3.11 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

System prompt for statusline-setup agent that configures Claude Code status line display by converting shell PS1 configurations and creating custom shell commands. Handles PS1 escape sequence conversion, ANSI color codes, and updates ~/.claude/settings.json with statusLine command configuration.

##### 3.2.3.12 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Prompt for agent that summarizes verbose WebFetch output for the main model, enforcing 125-character quote limits for untrusted domains and respecting open-source licenses.

##### 3.2.3.13 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing actionable guidance, and referencing local project files like CLAUDE.md and .claude/ directories.

### 3.3 Memory and Context Persistence

Persistent memory accumulation, retrieval, and consolidation across sessions, plus conversation summarization for preserving technical context across context windows.

#### 3.3.1 Memory Management: Persistence & Retrieval

Persistent memory system that accumulates user context, feedback, and domain knowledge across sessions. Synthesizes relevant memories for queries, updates session state while preserving structure, and verifies staleness against current reality to maintain consistency.

##### 3.3.1.1 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files for Claude Code to process a user query, being conservative with user-profile and project-overview memories and avoiding re-selection of previously returned memories.

##### 3.3.1.2 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and returns JSON syntheses of only query-relevant information with cited filenames, avoiding invention and padding.

##### 3.3.1.3 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations, preserving exact structure with section headers and italic descriptions while updating content below. Specifies token limits per section, requirement for detailed info-dense content, and emphasis on maintaining current state for continuity.

##### 3.3.1.4 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Provides guidance for adding domain-specific memory update instructions to agent system prompts, enabling agents to build institutional knowledge across conversations by recording patterns, conventions, and architectural insights.

##### 3.3.1.5 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about the user's role, goals, knowledge, and preferences across sessions to enable personalized collaboration.

##### 3.3.1.6 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes feedback memory as guidance on work approaches from both successes and failures. Emphasizes recording both to avoid over-correction and checking for contradictions with team memories.

##### 3.3.1.7 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Defines feedback memory as guidance on work approaches capturing both successes and failures. Requires checking for contradictions with team feedback before saving and explicitly noting overrides.

##### 3.3.1.8 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs Claude to verify memory records against current file state before using them, delete stale memories that conflict with observed reality, and trust current observations over outdated memory.

##### 3.3.1.9 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as information about role, goals, responsibilities, and knowledge to tailor behavior and collaboration, avoiding negative judgments and focusing on relevance to shared work.

#### 3.3.2 Memory Consolidation & Dream Mode

Background consolidation process that merges fragmented memories into unified topic files, removes duplicates, and prunes stale entries to maintain index efficiency. Operates asynchronously to optimize memory structure without interrupting active sessions.

##### 3.3.2.1 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to stay under size limits.

##### 3.3.2.2 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs memory pruning by deleting stale or invalidated memory files and collapsing duplicates into single consolidated memories while preserving creation dates.

#### 3.3.3 Conversation Summarization & Context Compaction

Structured approaches to distilling conversation history into organized summaries that preserve technical context, task state, and decision rationale across context windows. Enables efficient resumption by capturing primary requests, code artifacts, errors, problem-solving paths, and pending work in standardized formats with internal analysis tags.

##### 3.3.3.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections covering primary requests, technical concepts, files/code, errors/fixes, problem-solving, user messages, pending tasks, current work, and next steps, with internal analysis tags ensuring thoroughness.

##### 3.3.3.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes only recent conversation messages using nine sections (primary request, technical concepts, files/code, errors/fixes, problem-solving, user messages, pending tasks, current work, next steps) with internal analysis tags.

##### 3.3.3.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries covering task overview, current state, discoveries, next steps, and context preservation to enable efficient resumption in future context windows.

##### 3.3.3.4 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured instructions for summarizing a conversation portion with 9 sections including primary request, technical concepts, files, errors, and context for continuing work. Requires analysis tags before final summary.

---

## 4. Tools, File Operations, and Automation

Dedicated tools for file operations, web automation, version control, scheduling, configuration, and tool discovery, with guidance on when to prefer each over bash.

### 4.1 File, Search, and Browser Tools

Core filesystem operations, LSP-based code navigation, web search, browser automation, and tool preference hierarchy for choosing the right tool for each task.

#### 4.1.1 Tool Preference & Usage Hierarchy

Prescriptive guidance establishing dedicated tools as the default choice for file operations, content search, and skill invocation, with Bash reserved for system commands and terminal operations.

##### 4.1.1.1 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Directs Claude to use the Write tool instead of cat heredoc or echo redirection for file creation.

##### 4.1.1.2 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs Claude to use the Edit tool instead of sed or awk for file modifications.

##### 4.1.1.3 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Directs Claude to use the Read tool instead of cat, head, tail, or sed for file reading.

##### 4.1.1.4 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve Bash exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

##### 4.1.1.5 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Directs Claude to use the Grep tool instead of grep or rg for searching file content.

##### 4.1.1.6 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Directs Claude to use the Glob tool instead of find or ls for file discovery.

##### 4.1.1.7 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Directs Claude to use Glob and Grep tools directly for simple, targeted codebase searches.

##### 4.1.1.8 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Instructs Claude to use the Skill tool to execute user-invocable skills invoked via slash commands, only for skills listed in the tool's user-invocable section.

#### 4.1.2 Core File Operation Tools

Fundamental filesystem and code intelligence operations including reading, writing, and editing files with special handling for images and notebooks, plus LSP-based code navigation and semantic search.

##### 4.1.2.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the filesystem supporting relative or absolute paths, with special handling for images, PDFs (with page ranges for large files), and Jupyter notebooks.

##### 4.1.2.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the filesystem, overwriting existing files. Prefer Edit for modifications; use Write only for new files or complete rewrites. Avoid creating documentation unless explicitly requested.

##### 4.1.2.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with guidance on preserving indentation, preferring existing files over new ones, and using replace_all for bulk renaming.

##### 4.1.2.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting regex, file filtering by glob or type, and multiple output modes, with guidance to always use this tool instead of bash grep commands.

##### 4.1.2.5 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol operations for code intelligence including definition lookup, reference finding, hover information, symbol search, and call hierarchy analysis.

##### 4.1.2.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replaces contents of specific cells in Jupyter notebooks with support for insert and delete modes using 0-indexed cell numbers and absolute paths.

#### 4.1.3 Web & Browser Automation Tools

Browser control and web content retrieval capabilities enabling UI automation, web search with source attribution, and HTML-to-markdown content extraction with caching.

##### 4.1.3.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the computer automation tool for interacting with Chrome via mouse, keyboard, and screenshots, with guidance on precise cursor positioning and element clicking.

##### 4.1.3.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with a fast model. Includes 15-minute caching, HTTPS upgrade, and redirect handling.

##### 4.1.3.3 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Performs web searches to access current information beyond knowledge cutoff, requiring mandatory source attribution in responses. Supports domain filtering and uses current year in queries.

##### 4.1.3.4 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines Chrome browser automation actions including clicks, typing, scrolling, keyboard input, dragging, zooming, and hover interactions for UI control.

##### 4.1.3.5 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Comprehensive guidelines for browser automation including GIF recording with extra frames, console debugging with pattern filtering, avoiding modal dialogs, and managing tab context by checking current tabs before creating new ones.

##### 4.1.3.6 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the tool name in the select parameter.

### 4.2 Version Control, Scheduling, and Configuration

Git worktree management for isolated branching, cron-based task scheduling, settings management with lifecycle hooks, and desktop automation with MCP integration.

#### 4.2.1 Git Worktree & Version Control Tools

Isolated branching and session management for git repositories. EnterWorktree creates separate working directories with independent branches, while ExitWorktree handles cleanup and state preservation. Git status provides a static initialization snapshot.

##### 4.2.1.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree when explicitly requested by the user, creating a new branch in .claude/worktrees/ or delegating to VCS hooks outside git repositories.

##### 4.2.1.2 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits an EnterWorktree session and returns to the original directory, with options to keep or remove the worktree and ability to discard uncommitted changes.

##### 4.2.1.3 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git status snapshot at conversation start, noting that this status is static and will not update during the session.

#### 4.2.2 Scheduling & Cron Tools

Task scheduling via cron expressions with support for one-shot and recurring jobs. Integrates with slash commands for natural language scheduling and remote agent orchestration through cloud APIs, handling timezone conversion and trigger management.

##### 4.2.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron jobs using standard 5-field cron syntax in local timezone, with guidance on avoiding :00/:30 minute marks for load distribution and optional durability for persistence across sessions.

##### 4.2.2.2 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts to cron expression, and schedules recurring tasks with automatic execution on first run.

##### 4.2.2.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides scheduling, updating, listing, and running remote Claude Code agents on cron triggers via Anthropic cloud API, handling environment selection, MCP connector validation, timezone conversion, and trigger management.

#### 4.2.3 Configuration & Settings Management

Global and project-level configuration through JSON files with a hooks system that executes commands and agents at lifecycle events. Includes verification workflows for testing hook construction and ensuring correctness before deployment.

##### 4.2.3.1 [Config (Tool Description)](system-prompts/tool-description-config.md)

Describes the Config tool for viewing and modifying Claude Code settings stored globally in ~/.claude.json or per-project in settings.json, with examples for theme, editor mode, and model selection.

##### 4.2.3.2 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json) with careful merging of existing settings, hook construction, and validation.

##### 4.2.3.3 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step verification flow for constructing and testing hooks, ensuring they work correctly through dedup checks, command construction, pipe-testing, and live proof.

##### 4.2.3.4 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines the hooks system for Claude Code that runs shell commands, prompt evaluations, or agents at lifecycle events like PreToolUse, PostToolUse, and SessionStart. Includes JSON structure, input/output formats, and common patterns for auto-formatting, logging, and testing.

#### 4.2.4 Tool Discovery & Desktop Automation

Mechanisms for discovering and invoking tools through schema queries and MCP integration, with security boundaries for desktop automation, app access, and output handling strategies for large results.

##### 4.2.4.1 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by query, supporting exact name selection, keyword search, and name-requirement filtering to make tools callable.

##### 4.2.4.2 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools with tool selection tiers, app access restrictions, link safety, and financial action restrictions for desktop automation.

##### 4.2.4.3 [MCP Tool Result Truncation (System Prompt)](system-prompts/system-prompt-mcp-tool-result-truncation.md)

Provides guidelines for handling long MCP tool outputs: use direct file queries for targeted operations, and delegate analysis to subagents with explicit chunking requirements for full-content summarization.

---

## 5. Code Quality, Security, and Development Workflows

Principles and agents for disciplined coding, security monitoring, git automation, codebase exploration, verification testing, and project onboarding.

### 5.1 Code Discipline and Safety Controls

Guidelines for scope adherence, simplicity, and security-first coding, plus safeguards requiring user confirmation for destructive operations in autonomous execution.

#### 5.1.1 Code Quality & Task Execution Guidelines

Principles for disciplined task execution that prioritize simplicity, scope adherence, and security over speculative improvements. Emphasizes reading existing code before modification, avoiding premature abstractions and unnecessary error handling, and interpreting requests within software engineering context while preventing feature creep and common vulnerabilities.

##### 5.1.1.1 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

##### 5.1.1.2 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims, renamed variables, or removal comments.

##### 5.1.1.3 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directs Claude to avoid creating helpers or abstractions for one-time operations or hypothetical requirements, matching complexity to actual task needs.

##### 5.1.1.4 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directs Claude to avoid adding features, refactoring, or improvements beyond what was asked, including unnecessary docstrings and type annotations.

##### 5.1.1.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios, validating only at system boundaries and trusting internal code guarantees.

##### 5.1.1.6 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Directs Claude to read and understand existing code before proposing modifications.

##### 5.1.1.7 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid giving time estimates or predictions for task duration.

##### 5.1.1.8 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Encourages Claude to enable users to complete ambitious tasks by deferring to user judgment on scope rather than imposing artificial limits.

##### 5.1.1.9 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

##### 5.1.1.10 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Instructs Claude to interpret user requests in the context of software engineering tasks like bug fixes, refactoring, and code modifications, treating generic instructions as code-related work in the current directory.

##### 5.1.1.11 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities such as command injection, XSS, and SQL injection, prioritizing safe and secure code.

#### 5.1.2 Safety, Security & Execution Controls

Safeguards for autonomous execution that require user confirmation for destructive or irreversible operations, enable security research within authorized boundaries, and prevent malicious code improvement or tool restriction bypass. Balances action-oriented automation with explicit consent for high-risk changes.

##### 5.1.2.1 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a safety framework requiring user confirmation before destructive, hard-to-reverse, or shared-state-affecting actions like force-pushes, deletions, and external communications. Emphasizes investigating root causes rather than bypassing safety checks.

##### 5.1.2.2 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing destructive techniques, DoS attacks, and detection evasion for malicious purposes.

##### 5.1.2.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware for understanding and reporting but refuse to improve or augment malicious code.

##### 5.1.2.4 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable workarounds when a tool is denied, but not to bypass restrictions maliciously, and to stop and explain to the user if the capability is essential.

##### 5.1.2.5 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate implementation, minimal interruptions, and preference for action over planning, while avoiding destructive actions and data exfiltration without explicit user consent.

### 5.2 Security Monitoring & Vulnerability Review

Active threat detection and code analysis for autonomous agents and human-written changes. Monitors for prompt injection, scope creep, and dangerous operations through block/allow rules; reviews code for exploitable vulnerabilities with high-confidence findings and structured severity assessment.

#### 5.2.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Instructs Claude to act as a security monitor evaluating autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage. Defines threat model, default allow-by-default policy, user intent evaluation with high authorization bar and low boundary bar, and comprehensive evaluation rules for composite actions, file execution, code commits, delayed effects, and sub-agent delegation.

#### 5.2.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules covering git destructive operations, code from external sources, cloud storage deletion, production deployment, remote shell writes, logging tampering, permission grants, security weakening, and data exfiltration. Specifies allow exceptions for test artifacts, local operations, read-only operations, declared dependencies, and memory directory writes.

#### 5.2.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt for analyzing code changes with focus on exploitable vulnerabilities including input validation, authentication, crypto, injection, and data exposure. Emphasizes high-confidence findings only, minimizing false positives, with structured output format including severity, category, exploit scenario, and recommendations.

### 5.3 Git Automation and Codebase Analysis

Specialized agents for automating git commits and PRs, exploring codebases through read-only analysis, and orchestrating large-scale refactors across worktrees.

#### 5.3.1 Git Commit & PR Automation Agents

Specialized agents that automate git workflows by analyzing changes, creating commits with repository conventions, managing branches, and orchestrating large-scale refactors across isolated worktrees. Enforces git safety protocols and enables parallel PR generation for decomposed codebase changes.

##### 5.3.1.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository conventions, and executing via heredoc syntax while enforcing safety protocols against amending and secret-file commits.

##### 5.3.1.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests by analyzing all changes, branching if needed, committing with attribution, and using gh pr create/edit with heredoc bodies while enforcing git safety protocols.

##### 5.3.1.3 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, then analyzing code quality, style, correctness, conventions, performance, tests, and security with concise formatted feedback.

##### 5.3.1.4 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5–30 independent units, determining e2e test recipes, and spawning background worker agents with isolated worktrees that run in parallel and produce PRs.

#### 5.3.2 Codebase Exploration & Analysis

Read-only agents for discovering, searching, and analyzing codebases through file globbing, regex patterns, and architectural pattern identification. Designed for fast exploration and planning without modifying code.

##### 5.3.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file discovery via glob patterns, code search via regex, and analysis, with strict prohibitions on file creation, modification, or deletion.

##### 5.3.2.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose agent for researching complex questions, searching code, and executing multi-step tasks across codebases while avoiding unnecessary file creation and preferring edits to new files.

##### 5.3.2.3 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans in read-only mode by exploring codebases, identifying patterns, and detailing step-by-step strategies with critical files listed.

### 5.4 Verification, Review, and Onboarding

Runtime verification through build-and-run testing, code review and debugging tools, educational learning modes, and project initialization with team onboarding workflows.

#### 5.4.1 Verification & Testing

Runtime verification of code changes by building, executing, and observing behavior at user-facing surfaces (CLI, API, web UI). Includes adversarial testing patterns and automated verifier skill creation to validate implementations beyond test results.

##### 5.4.1.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Comprehensive skill for runtime verification of code changes by building, running the app, and observing behavior at its surface. Emphasizes finding the user-facing surface (CLI, API, GUI, library), driving code to execute, capturing evidence, and reporting verdicts (PASS, FAIL, BLOCKED, SKIP) with findings that go beyond test results.

##### 5.4.1.2 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Demonstrates a systematic workflow for verifying CLI changes by building, running with test arguments, and comparing output to expected behavior. Includes a worked example of testing a new `--json` flag and guidance on handling stdin, destructive operations, and failure modes.

##### 5.4.1.3 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Outlines a verification pattern for server and API changes using curl to test endpoints and validate responses. Covers server lifecycle management with readiness polling and demonstrates testing rate-limit headers with concrete curl examples.

##### 5.4.1.4 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically verify code changes via Playwright (web UI), Tmux (CLI), or HTTP (API), with authentication and setup detection.

##### 5.4.1.5 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

System prompt for verification subagent that adversarially tests implementations by running builds, test suites, linters, and adversarial probes (boundary values, concurrency, idempotency, orphan operations) then issuing PASS/FAIL/PARTIAL verdict. Emphasizes running actual commands over code review, avoiding rationalizations, and documenting at least one adversarial probe.

#### 5.4.2 Code Review & Debugging

Tools for identifying code quality issues, refactoring opportunities, and troubleshooting session problems. Covers parallel code analysis, error diagnosis, and performance monitoring.

##### 5.4.2.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel agents to identify code reuse opportunities, quality issues, and efficiency problems, then fixes them.

##### 5.4.2.2 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes.

##### 5.4.2.3 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning processes for high CPU, I/O hangs, memory leaks, and stuck subprocesses, then posts findings to Slack.

#### 5.4.3 Project Initialization & Team Onboarding

Comprehensive setup workflows for new projects and team members, including CLAUDE.md generation, skill configuration, and collaborative guide creation. Extracts codebase conventions and usage patterns to accelerate onboarding.

##### 5.4.3.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md, CLAUDE.local.md, skills, and hooks via codebase exploration, user interviews, and iterative proposal refinement.

##### 5.4.3.2 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation by extracting build/lint/test commands, high-level architecture, and codebase conventions while avoiding generic practices and obvious instructions.

##### 5.4.3.3 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding new teammates to team's Claude Code setup, covering usage stats, setup checklists, MCP servers, skills, and team tips in conversational style.

##### 5.4.3.4 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides by analyzing usage data, classifying sessions into work types (build feature, debug, improve quality, analyze, plan, prototype, write docs), gathering MCP and repo context, and iterating collaboratively with the guide creator.

#### 5.4.4 Learning & Educational Modes

Balances task completion with hands-on education by requesting human input on design decisions and providing implementation-focused insights. Uses guided step-by-step instruction with visual overlays to help users understand codebase-specific choices rather than general concepts.

##### 5.4.4.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Defines learning mode as a collaborative tool that balances task completion with hands-on education by requesting human input on design decisions for code pieces over 20 lines. Includes TodoList integration and Learn by Doing request format with guidance on framing contributions.

##### 5.4.4.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing using a formatted insight block, focusing on implementation choices specific to the codebase rather than general programming concepts.

##### 5.4.4.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct access, activated by phrases like "teach me" or "show me how".

---

## 6. API, SDK, and Integration Reference

Comprehensive documentation for Claude's language SDKs, agent SDK patterns, API features like streaming and batches, model catalog, optimization strategies, and GitHub CI/CD integration.

### 6.1 Language SDKs and API Features

SDK documentation for Python, TypeScript, Go, Java, and other languages, plus API capabilities including streaming, tool use, batch processing, and file handling.

#### 6.1.1 Claude API Reference: Language SDKs

Language-specific SDK documentation for Python, TypeScript, Go, Java, Ruby, PHP, C#, and cURL covering client initialization, streaming, vision, tool use, prompt caching, extended thinking, error handling, and cost optimization across multiple runtime environments.

##### 6.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, system prompts, vision with base64 and URL images, prompt caching with automatic and manual control, extended thinking with adaptive mode, error handling, multi-turn conversations with compaction, stop reasons, and cost optimization strategies.

##### 6.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, system prompts, vision with URL and base64 images, prompt caching with automatic and manual control, extended thinking with adaptive mode, error handling with typed exceptions, multi-turn conversations with compaction, stop reasons, and cost optimization.

##### 6.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, basic requests, streaming with event accumulation, tool use via BetaToolRunner with automatic schema generation and manual loops, thinking, prompt caching, server-side tools, PDF/document input, Files API, and context editing with compaction.

##### 6.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference including client initialization, basic requests, streaming, thinking with adaptive mode, tool use via BetaToolRunner with annotated classes and memory tool handler, effort parameter, prompt caching, token counting, structured output, PDF/document input, server-side tools, and Files API.

##### 6.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including client initialization, basic requests, streaming, tool use via BetaToolRunner with annotated classes and manual loops, prompt caching with TTL support.

##### 6.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including client initialization for Anthropic/Bedrock/Vertex/Foundry, basic requests, streaming, tool use via BetaRunnableTool and manual loops, extended thinking with adaptive mode, prompt caching, structured outputs via StructuredOutputModel, and beta features including MCP servers.

##### 6.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference including client initialization, basic requests, streaming with TryPick methods, thinking (adaptive and deprecated fixed-budget), tool use with manual JSON schema, effort parameter, prompt caching, token counting, structured output, PDF/document input, server-side tools, and beta features including context editing and Files API.

##### 6.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude API using cURL with examples for basic requests, streaming via Server-Sent Events, tool use loops, prompt caching, and extended thinking with required headers.

#### 6.1.2 API Features: Streaming, Tool Use & Batches

Technical references for Claude API's real-time and asynchronous capabilities: streaming event handling, tool use patterns (manual and automated), server-side tools, structured outputs, batch processing for cost reduction, and file handling for document processing.

##### 6.1.2.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference with sync/async examples, handling text, thinking blocks, and tool use, plus progress tracking and error handling patterns.

##### 6.1.2.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, content types, tool runner integration, event types, and best practices for web UIs and agentic loops.

##### 6.1.2.3 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice, tool runner vs manual loops, server-side tools (code execution, web search, computer use), and structured outputs.

##### 6.1.2.4 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference with tool runner, manual agentic loop, code execution, MCP conversion helpers, memory tool, and structured outputs with Pydantic schemas.

##### 6.1.2.5 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod, manual agentic loop with streaming, code execution, file handling, and structured outputs with Zod schemas.

##### 6.1.2.6 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, status polling, result retrieval, and prompt caching integration for asynchronous processing at 50% cost.

##### 6.1.2.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files (max 500 MB) for use in Messages API requests. Covers file upload, usage in messages for PDFs/documents with citations and images, file management (list, retrieve metadata, delete, download), and end-to-end example with multiple queries on same file.

##### 6.1.2.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading files (max 500 MB) for use in Messages API requests. Covers file upload with toFile helper, usage in messages for PDFs/documents and images, and file management (list, delete, download).

### 6.2 Agent SDK, Model Reference, and Optimization

Agent SDK patterns for Python and TypeScript, model catalog with pricing, prompt caching strategies, error handling, and GitHub Actions integration for CI/CD.

#### 6.2.1 Agent SDK Reference & Patterns

Agent SDK documentation and implementation patterns for Python and TypeScript, covering core concepts like built-in tools, permission systems, MCP integration, hooks, subagents, session management, and architectural guidance for designing effective agent systems.

##### 6.2.1.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Python Agent SDK reference covering installation, quick start with query() and ClaudeSDKClient, built-in tools, permission system, MCP support, hooks, common options, message types including RateLimitEvent, subagents, error handling, and session history management with mutations.

##### 6.2.1.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

TypeScript Agent SDK reference covering installation, quick start, built-in tools, permission system with bypassPermissions flag, MCP support including in-process tools, hooks with agent identification, common options, message types including task events, subagents, session history with pagination, and MCP server management.

##### 6.2.1.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns including basic agents, custom tools via MCP servers, hooks for tool lifecycle events, subagents, MCP server integration (Playwright, PostgreSQL), permission modes, error recovery, session resumption, session history retrieval, and custom system prompts.

##### 6.2.1.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks for tool lifecycle events, subagents, MCP server integration (Playwright), session resumption, session history with pagination, session mutations (rename, tag, fork), and custom system prompts.

##### 6.2.1.5 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide for building agents covering tool surface design, bash vs dedicated tools, context management (editing, compaction, memory), caching strategies, and programmatic tool calling.

##### 6.2.1.6 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs workflow vs agent), model defaults, thinking/effort parameters, and architecture overview.

##### 6.2.1.7 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific Claude API reference documentation with quick task navigation and links to relevant sections.

#### 6.2.2 API Optimization & Model Reference

Model catalog with capabilities and pricing, prompt caching design patterns for cost reduction, HTTP error handling with recovery strategies, and live documentation sources for staying current with Claude API features.

##### 6.2.2.1 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Design patterns for effective prompt caching, covering prefix-match invariants, breakpoint placement, silent invalidators, and architectural guidance for multi-turn conversations and shared prefixes.

##### 6.2.2.2 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact model IDs, aliases, context windows, and pricing. Includes programmatic model discovery via Models API for live capability data (vision, thinking, effort, structured outputs, context management). Current models: Opus 4.6, Sonnet 4.6, Haiku 4.5 with 200K context (1M beta). Legacy and deprecated models listed with retirement dates.

##### 6.2.2.3 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with causes, fixes, and SDK exception handling patterns for Python and TypeScript.

##### 6.2.2.4 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API documentation, models, features, tools, and Agent SDK references from official sources to ensure latest information.

#### 6.2.3 GitHub Integration & CI/CD

Automated workflows and templates for integrating Claude Code with GitHub repositories, enabling AI-assisted development through Actions triggers and secure app installation with configurable permissions.

##### 6.2.3.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, pull requests, or comments, with configurable permissions and optional custom prompts.

##### 6.2.3.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining what Claude Code does and security considerations for repository access.

### 6.3 Output Style & Communication Guidelines

Establishes communication standards for clarity and efficiency, including precise code references with line numbers, concise direct responses prioritizing decisions over reasoning, and structured formatting conventions. Optimizes tool execution through parallel invocation of independent operations.

#### 6.3.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing code to enable easy navigation to source locations.

#### 6.3.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Directs Claude to keep responses short and concise.

#### 6.3.3 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning and skipping filler. Focuses output on decisions, status updates, and blockers while avoiding restatement.

#### 6.3.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads covering absolute file paths, response formatting without emojis, and avoiding colons before tool calls for clear communication.

#### 6.3.5 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to maximize efficiency, but run dependent tool calls sequentially when one must complete before another.
