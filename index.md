# Claude Code System Prompts Index

Operational instructions for deploying Claude as an autonomous coding agent — defining how it executes commands, manipulates files, coordinates with other agents, integrates external services, and maintains safe, consistent behavior across complex software development workflows.

## Table of Contents

1. [Bash & Shell Execution](#1-bash-shell-execution)
   1. [Bash Execution Fundamentals](#11-bash-execution-fundamentals)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (maintain cwd) [Tool Description]](#112-bash-maintain-cwd-tool-description)
      3. [Bash (working directory) [Tool Description]](#113-bash-working-directory-tool-description)
      4. [Bash (no newlines) [Tool Description]](#114-bash-no-newlines-tool-description)
      5. [Bash (quote file paths) [Tool Description]](#115-bash-quote-file-paths-tool-description)
      6. [Bash (timeout) [Tool Description]](#116-bash-timeout-tool-description)
      7. [Bash (parallel commands) [Tool Description]](#117-bash-parallel-commands-tool-description)
      8. [Bash (sequential commands) [Tool Description]](#118-bash-sequential-commands-tool-description)
      9. [Bash (semicolon usage) [Tool Description]](#119-bash-semicolon-usage-tool-description)
      10. [Bash (verify parent directory) [Tool Description]](#1110-bash-verify-parent-directory-tool-description)
   2. [Bash Tool Delegation](#12-bash-tool-delegation)
      1. [Bash (alternative — communication) [Tool Description]](#121-bash-alternative-—-communication-tool-description)
      2. [Bash (alternative — content search) [Tool Description]](#122-bash-alternative-—-content-search-tool-description)
      3. [Bash (alternative — edit files) [Tool Description]](#123-bash-alternative-—-edit-files-tool-description)
      4. [Bash (alternative — file search) [Tool Description]](#124-bash-alternative-—-file-search-tool-description)
      5. [Bash (alternative — read files) [Tool Description]](#125-bash-alternative-—-read-files-tool-description)
      6. [Bash (alternative — write files) [Tool Description]](#126-bash-alternative-—-write-files-tool-description)
      7. [Bash (built-in tools note) [Tool Description]](#127-bash-built-in-tools-note-tool-description)
      8. [Bash (prefer dedicated tools) [Tool Description]](#128-bash-prefer-dedicated-tools-tool-description)
   3. [Sandbox Security & Failure Diagnosis](#13-sandbox-security-failure-diagnosis)
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
   4. [Timing & Asynchronous Operations](#14-timing-asynchronous-operations)
      1. [Bash (sleep — keep short) [Tool Description]](#141-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#142-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — run immediately) [Tool Description]](#143-bash-sleep-—-run-immediately-tool-description)
      4. [Bash (sleep — use check commands) [Tool Description]](#144-bash-sleep-—-use-check-commands-tool-description)
      5. [One of six rules for using sleep command (System Prompt)](#145-one-of-six-rules-for-using-sleep-command-system-prompt)
2. [File, Tool & Web Operations](#2-file-tool-web-operations)
   1. [File Access and Editing](#21-file-access-and-editing)
      1. [File System Operations: Read, Write & Edit Tools](#211-file-system-operations-read-write-edit-tools)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Edit (Tool Description)](#2113-edit-tool-description)
         4. [Grep (Tool Description)](#2114-grep-tool-description)
         5. [Tool usage (read files) [System Prompt]](#2115-tool-usage-read-files-system-prompt)
         6. [Tool usage (edit files) [System Prompt]](#2116-tool-usage-edit-files-system-prompt)
         7. [Tool usage (search content) [System Prompt]](#2117-tool-usage-search-content-system-prompt)
         8. [Tool usage (search files) [System Prompt]](#2118-tool-usage-search-files-system-prompt)
         9. [Tool usage (create files) [System Prompt]](#2119-tool-usage-create-files-system-prompt)
      2. [File State & Access Warnings](#212-file-state-access-warnings)
         1. [File exists but empty (System Reminder)](#2121-file-exists-but-empty-system-reminder)
         2. [File truncated (System Reminder)](#2122-file-truncated-system-reminder)
         3. [File shorter than offset (System Reminder)](#2123-file-shorter-than-offset-system-reminder)
      3. [UI Preview & Option Display](#213-ui-preview-option-display)
         1. [Option previewer (System Prompt)](#2131-option-previewer-system-prompt)
   2. [Task Tracking and Specialized Tools](#22-task-tracking-and-specialized-tools)
      1. [Task & Todo Management Tools](#221-task-todo-management-tools)
         1. [TodoWrite (Tool Description)](#2211-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#2212-taskcreate-tool-description)
         3. [Tool usage (task management) [System Prompt]](#2213-tool-usage-task-management-system-prompt)
         4. [TodoWrite reminder (System Reminder)](#2214-todowrite-reminder-system-reminder)
         5. [Task tools reminder (System Reminder)](#2215-task-tools-reminder-system-reminder)
      2. [Specialized Tool Descriptions](#222-specialized-tool-descriptions)
         1. [LSP (Tool Description)](#2221-lsp-tool-description)
         2. [NotebookEdit (Tool Description)](#2222-notebookedit-tool-description)
         3. [PowerShell (Tool Description)](#2223-powershell-tool-description)
         4. [Sleep (Tool Description)](#2224-sleep-tool-description)
         5. [AskUserQuestion (Tool Description)](#2225-askuserquestion-tool-description)
         6. [AskUserQuestion (preview field) [Tool Description]](#2226-askuserquestion-preview-field-tool-description)
         7. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#2227-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
   3. [Web & Browser Automation](#23-web-browser-automation)
      1. [WebFetch (Tool Description)](#231-webfetch-tool-description)
      2. [WebSearch (Tool Description)](#232-websearch-tool-description)
      3. [Computer (Tool Description)](#233-computer-tool-description)
      4. [Computer action (Tool Parameter)](#234-computer-action-tool-parameter)
      5. [Claude in Chrome browser automation (System Prompt)](#235-claude-in-chrome-browser-automation-system-prompt)
      6. [Chrome browser MCP tools (System Prompt)](#236-chrome-browser-mcp-tools-system-prompt)
      7. [WebFetch summarizer (Agent Prompt)](#237-webfetch-summarizer-agent-prompt)
3. [Agent Orchestration & Session Management](#3-agent-orchestration-session-management)
   1. [Multi-Agent Coordination and Planning](#31-multi-agent-coordination-and-planning)
      1. [Multi-Agent Orchestration & Subagent Management](#311-multi-agent-orchestration-subagent-management)
         1. [Agent (when to launch subagents) [Tool Description]](#3111-agent-when-to-launch-subagents-tool-description)
         2. [Agent (usage notes) [Tool Description]](#3112-agent-usage-notes-tool-description)
         3. [TeammateTool (Tool Description)](#3113-teammatetool-tool-description)
         4. [TeamDelete (Tool Description)](#3114-teamdelete-tool-description)
         5. [TaskList (teammate workflow) [Tool Description]](#3115-tasklist-teammate-workflow-tool-description)
         6. [SendMessageTool (Tool Description)](#3116-sendmessagetool-tool-description)
         7. [SendMessageTool (non-agent-teams) [Tool Description]](#3117-sendmessagetool-non-agent-teams-tool-description)
         8. [Tool usage (subagent guidance) [System Prompt]](#3118-tool-usage-subagent-guidance-system-prompt)
         9. [Tool usage (delegate exploration) [System Prompt]](#3119-tool-usage-delegate-exploration-system-prompt)
         10. [Writing subagent prompts (System Prompt)](#31110-writing-subagent-prompts-system-prompt)
         11. [Subagent delegation examples (System Prompt)](#31111-subagent-delegation-examples-system-prompt)
         12. [Fork usage guidelines (System Prompt)](#31112-fork-usage-guidelines-system-prompt)
         13. [Teammate Communication (System Prompt)](#31113-teammate-communication-system-prompt)
         14. [Team Coordination (System Reminder)](#31114-team-coordination-system-reminder)
         15. [Team Shutdown (System Reminder)](#31115-team-shutdown-system-reminder)
         16. [Worker fork execution (Agent Prompt)](#31116-worker-fork-execution-agent-prompt)
      2. [Planning Mode & Implementation Workflow](#312-planning-mode-implementation-workflow)
         1. [EnterPlanMode (Tool Description)](#3121-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3122-exitplanmode-tool-description)
         3. [Plan mode is active (5-phase) [System Reminder]](#3123-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#3124-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#3125-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#3126-plan-mode-re-entry-system-reminder)
         7. [Exited plan mode (System Reminder)](#3127-exited-plan-mode-system-reminder)
         8. [Ultraplan mode (System Reminder)](#3128-ultraplan-mode-system-reminder)
         9. [Plan file reference (System Reminder)](#3129-plan-file-reference-system-reminder)
         10. [Verify plan reminder (System Reminder)](#31210-verify-plan-reminder-system-reminder)
         11. [Phase four of plan mode (System Prompt)](#31211-phase-four-of-plan-mode-system-prompt)
         12. [Plan mode (enhanced) [Agent Prompt]](#31212-plan-mode-enhanced-agent-prompt)
   2. [Autonomous Execution and Session Identity](#32-autonomous-execution-and-session-identity)
      1. [Autonomous & Auto Mode Execution](#321-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#3211-auto-mode-system-prompt)
         2. [Executing actions with care (System Prompt)](#3212-executing-actions-with-care-system-prompt)
         3. [System section (System Prompt)](#3213-system-section-system-prompt)
         4. [Tool execution denied (System Prompt)](#3214-tool-execution-denied-system-prompt)
         5. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#3215-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      2. [Session & Agent Identity Management](#322-session-agent-identity-management)
         1. [Coding session title generator (Agent Prompt)](#3221-coding-session-title-generator-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#3222-session-search-assistant-agent-prompt)
         3. [Agent mention (System Reminder)](#3223-agent-mention-system-reminder)
         4. [Agent creation architect (Agent Prompt)](#3224-agent-creation-architect-agent-prompt)
   3. [Memory, Context, and Summarization](#33-memory-context-and-summarization)
      1. [Memory Systems & Context Persistence](#331-memory-systems-context-persistence)
         1. [Session memory template (Data)](#3311-session-memory-template-data)
         2. [Session memory update instructions (Agent Prompt)](#3312-session-memory-update-instructions-agent-prompt)
         3. [Dream memory consolidation (Agent Prompt)](#3313-dream-memory-consolidation-agent-prompt)
         4. [Determine which memory files to attach (Agent Prompt)](#3314-determine-which-memory-files-to-attach-agent-prompt)
         5. [Agent memory instructions (System Prompt)](#3315-agent-memory-instructions-system-prompt)
         6. [Memory description of user feedback (System Prompt)](#3316-memory-description-of-user-feedback-system-prompt)
         7. [Description part of memory instructions (System Prompt)](#3317-description-part-of-memory-instructions-system-prompt)
         8. [Team memory content display (System Prompt)](#3318-team-memory-content-display-system-prompt)
         9. [Memory file contents (System Reminder)](#3319-memory-file-contents-system-reminder)
         10. [Nested memory contents (System Reminder)](#33110-nested-memory-contents-system-reminder)
      2. [Conversation Summarization & Context Compaction](#332-conversation-summarization-context-compaction)
         1. [Conversation summarization (Agent Prompt)](#3321-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#3322-recent-message-summarization-agent-prompt)
         3. [Context compaction summary (System Prompt)](#3323-context-compaction-summary-system-prompt)
         4. [Compact file reference (System Reminder)](#3324-compact-file-reference-system-reminder)
         5. [Session continuation (System Reminder)](#3325-session-continuation-system-reminder)
4. [SDK, API & External Integration](#4-sdk-api-external-integration)
   1. [Claude API and Agent SDK References](#41-claude-api-and-agent-sdk-references)
      1. [Claude API SDK References (Multi-Language)](#411-claude-api-sdk-references-multi-language)
         1. [Claude API reference — Python (Data)](#4111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#4112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#4113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#4114-claude-api-reference-—-java-data)
         5. [Claude API reference — C# (Data)](#4115-claude-api-reference-—-c-data)
         6. [Claude API reference — PHP (Data)](#4116-claude-api-reference-—-php-data)
         7. [Claude API reference — Ruby (Data)](#4117-claude-api-reference-—-ruby-data)
         8. [Claude API reference — cURL (Data)](#4118-claude-api-reference-—-curl-data)
         9. [Claude model catalog (Data)](#4119-claude-model-catalog-data)
         10. [HTTP error codes reference (Data)](#41110-http-error-codes-reference-data)
         11. [Live documentation sources (Data)](#41111-live-documentation-sources-data)
      2. [Agent SDK References & Patterns](#412-agent-sdk-references-patterns)
         1. [Agent SDK reference — Python (Data)](#4121-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#4122-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#4123-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#4124-agent-sdk-patterns-—-typescript-data)
         5. [Tool use concepts (Data)](#4125-tool-use-concepts-data)
         6. [Tool use reference — Python (Data)](#4126-tool-use-reference-—-python-data)
         7. [Tool use reference — TypeScript (Data)](#4127-tool-use-reference-—-typescript-data)
         8. [Streaming reference — Python (Data)](#4128-streaming-reference-—-python-data)
         9. [Streaming reference — TypeScript (Data)](#4129-streaming-reference-—-typescript-data)
         10. [Files API reference — Python (Data)](#41210-files-api-reference-—-python-data)
         11. [Files API reference — TypeScript (Data)](#41211-files-api-reference-—-typescript-data)
         12. [Message Batches API reference — Python (Data)](#41212-message-batches-api-reference-—-python-data)
         13. [Prompt Caching — Design & Optimization (Data)](#41213-prompt-caching-—-design-optimization-data)
         14. [Build with Claude API (Skill)](#41214-build-with-claude-api-skill)
         15. [Build with Claude API (reference guide) [Skill]](#41215-build-with-claude-api-reference-guide-skill)
   2. [GitHub, CI/CD, and MCP Integration](#42-github-cicd-and-mcp-integration)
      1. [GitHub Integration & CI/CD Automation](#421-github-integration-cicd-automation)
         1. [GitHub Actions workflow for @claude mentions (Data)](#4211-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#4212-github-app-installation-pr-description-data)
         3. [/pr-comments slash command (Agent Prompt)](#4213-pr-comments-slash-command-agent-prompt)
         4. [/review-pr slash command (Agent Prompt)](#4214-review-pr-slash-command-agent-prompt)
      2. [MCP Resources & Protocol Integration](#422-mcp-resources-protocol-integration)
         1. [MCP resource no content (System Reminder)](#4221-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#4222-mcp-resource-no-displayable-content-system-reminder)
         3. [ToolSearch (second part) [Tool Description]](#4223-toolsearch-second-part-tool-description)
      3. [Claude Guide & Documentation Agent](#423-claude-guide-documentation-agent)
         1. [Claude guide agent (Agent Prompt)](#4231-claude-guide-agent-agent-prompt)
         2. [/btw side question (System Reminder)](#4232-btw-side-question-system-reminder)
   3. [IDE and Resource Monitoring](#43-ide-and-resource-monitoring)
      1. [IDE Integration & Developer Context](#431-ide-integration-developer-context)
         1. [File opened in IDE (System Reminder)](#4311-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#4312-lines-selected-in-ide-system-reminder)
         3. [New diagnostics detected (System Reminder)](#4313-new-diagnostics-detected-system-reminder)
         4. [File modified by user or linter (System Reminder)](#4314-file-modified-by-user-or-linter-system-reminder)
      2. [Resource Monitoring & Budget Tracking](#432-resource-monitoring-budget-tracking)
         1. [Token usage (System Reminder)](#4321-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#4322-usd-budget-system-reminder)
5. [Project Setup, Skills & Workflow Automation](#5-project-setup-skills-workflow-automation)
   1. [Git, Code Quality, and Codebase Research](#51-git-code-quality-and-codebase-research)
      1. [Git Workflow & Repository Management](#511-git-workflow-repository-management)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#5111-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#5112-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#5113-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#5114-bash-git-—-prefer-new-commits-tool-description)
         5. [EnterWorktree (Tool Description)](#5115-enterworktree-tool-description)
         6. [ExitWorktree (Tool Description)](#5116-exitworktree-tool-description)
         7. [Quick git commit (Agent Prompt)](#5117-quick-git-commit-agent-prompt)
         8. [Quick PR creation (Agent Prompt)](#5118-quick-pr-creation-agent-prompt)
         9. [Session title and branch generation (Agent Prompt)](#5119-session-title-and-branch-generation-agent-prompt)
         10. [Git status (System Prompt)](#51110-git-status-system-prompt)
      2. [Code Quality, Verification & Testing](#512-code-quality-verification-testing)
         1. [Verify skill (Skill)](#5121-verify-skill-skill)
         2. [Verify CLI changes (example for Verify skill) [Skill]](#5122-verify-cli-changes-example-for-verify-skill-skill)
         3. [Verify server/API changes (example for Verify skill) [Skill]](#5123-verify-serverapi-changes-example-for-verify-skill-skill)
         4. [Create verifier skills (Skill)](#5124-create-verifier-skills-skill)
         5. [Simplify (Skill)](#5125-simplify-skill)
         6. [Verification specialist (Agent Prompt)](#5126-verification-specialist-agent-prompt)
         7. [Worker instructions (System Prompt)](#5127-worker-instructions-system-prompt)
      3. [Codebase Exploration & Research Agents](#513-codebase-exploration-research-agents)
         1. [Explore (Agent Prompt)](#5131-explore-agent-prompt)
         2. [General purpose (Agent Prompt)](#5132-general-purpose-agent-prompt)
         3. [Tool usage (direct search) [System Prompt]](#5133-tool-usage-direct-search-system-prompt)
         4. [Tool usage (reserve Bash) [System Prompt]](#5134-tool-usage-reserve-bash-system-prompt)
   2. [CLAUDE.md & Project Documentation Setup](#52-claudemd-project-documentation-setup)
      1. [CLAUDE.md creation (Agent Prompt)](#521-claudemd-creation-agent-prompt)
      2. [/init CLAUDE.md and skill setup (new version) [Skill]](#522-init-claudemd-and-skill-setup-new-version-skill)
      3. [Update Magic Docs (Agent Prompt)](#523-update-magic-docs-agent-prompt)
   3. [Skills, Hooks, and Scheduling](#53-skills-hooks-and-scheduling)
      1. [Skills System & Slash Commands](#531-skills-system-slash-commands)
         1. [Skill (Tool Description)](#5311-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#5312-tool-usage-skill-invocation-system-prompt)
         3. [Skillify Current Session (System Prompt)](#5313-skillify-current-session-system-prompt)
         4. [Update Claude Code Config (Skill)](#5314-update-claude-code-config-skill)
         5. [update-config (7-step verification flow) [Skill]](#5315-update-config-7-step-verification-flow-skill)
         6. [/loop slash command (Skill)](#5316-loop-slash-command-skill)
         7. [Debugging (Skill)](#5317-debugging-skill)
         8. [/stuck slash command (Skill)](#5318-stuck-slash-command-skill)
         9. [/schedule slash command (Agent Prompt)](#5319-schedule-slash-command-agent-prompt)
         10. [/batch slash command (Agent Prompt)](#53110-batch-slash-command-agent-prompt)
         11. [Invoked skills (System Reminder)](#53111-invoked-skills-system-reminder)
      2. [Hooks System & Lifecycle Events](#532-hooks-system-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#5321-hooks-configuration-system-prompt)
         2. [Hook condition evaluator (Agent Prompt)](#5322-hook-condition-evaluator-agent-prompt)
         3. [Agent Hook (Agent Prompt)](#5323-agent-hook-agent-prompt)
         4. [Hook additional context (System Reminder)](#5324-hook-additional-context-system-reminder)
         5. [Hook blocking error (System Reminder)](#5325-hook-blocking-error-system-reminder)
         6. [Hook stopped continuation (System Reminder)](#5326-hook-stopped-continuation-system-reminder)
         7. [Hook stopped continuation prefix (System Reminder)](#5327-hook-stopped-continuation-prefix-system-reminder)
         8. [Hook success (System Reminder)](#5328-hook-success-system-reminder)
      3. [Scheduling & Cron Job Automation](#533-scheduling-cron-job-automation)
         1. [CronCreate (Tool Description)](#5331-croncreate-tool-description)
      4. [Configuration & Settings Management](#534-configuration-settings-management)
         1. [Status line setup (Agent Prompt)](#5341-status-line-setup-agent-prompt)
         2. [Minimal mode (System Prompt)](#5342-minimal-mode-system-prompt)
         3. [Scratchpad directory (System Prompt)](#5343-scratchpad-directory-system-prompt)
   4. [Auto Mode Rule Review & Classifier Guidance](#54-auto-mode-rule-review-classifier-guidance)
      1. [Auto mode rule reviewer (Agent Prompt)](#541-auto-mode-rule-reviewer-agent-prompt)
      2. [Bash command description writer (Agent Prompt)](#542-bash-command-description-writer-agent-prompt)
      3. [Bash command prefix detection (Agent Prompt)](#543-bash-command-prefix-detection-agent-prompt)
6. [Guidelines, Safety & User Communication](#6-guidelines-safety-user-communication)
   1. [Security Review & Vulnerability Assessment](#61-security-review-vulnerability-assessment)
      1. [/security-review slash command (Agent Prompt)](#611-security-review-slash-command-agent-prompt)
      2. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#612-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      3. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#613-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      4. [Censoring assistance with malicious activities (System Prompt)](#614-censoring-assistance-with-malicious-activities-system-prompt)
      5. [Doing tasks (security) [System Prompt]](#615-doing-tasks-security-system-prompt)
      6. [Malware analysis after Read tool call (System Reminder)](#616-malware-analysis-after-read-tool-call-system-reminder)
   2. [Code Writing and Output Style Principles](#62-code-writing-and-output-style-principles)
      1. [Code Writing Principles & Task Execution Guidelines](#621-code-writing-principles-task-execution-guidelines)
         1. [Doing tasks (ambitious tasks) [System Prompt]](#6211-doing-tasks-ambitious-tasks-system-prompt)
         2. [Doing tasks (minimize file creation) [System Prompt]](#6212-doing-tasks-minimize-file-creation-system-prompt)
         3. [Doing tasks (no compatibility hacks) [System Prompt]](#6213-doing-tasks-no-compatibility-hacks-system-prompt)
         4. [Doing tasks (no premature abstractions) [System Prompt]](#6214-doing-tasks-no-premature-abstractions-system-prompt)
         5. [Doing tasks (no time estimates) [System Prompt]](#6215-doing-tasks-no-time-estimates-system-prompt)
         6. [Doing tasks (no unnecessary additions) [System Prompt]](#6216-doing-tasks-no-unnecessary-additions-system-prompt)
         7. [Doing tasks (no unnecessary error handling) [System Prompt]](#6217-doing-tasks-no-unnecessary-error-handling-system-prompt)
         8. [Doing tasks (read before modifying) [System Prompt]](#6218-doing-tasks-read-before-modifying-system-prompt)
         9. [Doing tasks (software engineering focus) [System Prompt]](#6219-doing-tasks-software-engineering-focus-system-prompt)
         10. [Doing tasks (help and feedback) [System Prompt]](#62110-doing-tasks-help-and-feedback-system-prompt)
      2. [Output Style, Tone & Communication Guidelines](#622-output-style-tone-communication-guidelines)
         1. [Output efficiency (System Prompt)](#6221-output-efficiency-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#6222-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#6223-tone-and-style-concise-output-—-short-system-prompt)
         4. [Output style active (System Reminder)](#6224-output-style-active-system-reminder)
         5. [Agent thread notes (System Prompt)](#6225-agent-thread-notes-system-prompt)
         6. [Agent Summary Generation (System Prompt)](#6226-agent-summary-generation-system-prompt)
   3. [Analytics, Learning, and Advisor Support](#63-analytics-learning-and-advisor-support)
      1. [Usage Insights & Analytics](#631-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#6311-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#6312-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#6313-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#6314-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#6315-insights-suggestions-system-prompt)
      2. [Learning Mode & Educational Features](#632-learning-mode-educational-features)
         1. [Learning mode (System Prompt)](#6321-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6322-learning-mode-insights-system-prompt)
         3. [request_teach_access (part of teach mode) [Tool Description]](#6323-request_teach_access-part-of-teach-mode-tool-description)
      3. [Advisor & Reviewer Tools](#633-advisor-reviewer-tools)
         1. [Advisor tool instructions (System Prompt)](#6331-advisor-tool-instructions-system-prompt)
         2. [Prompt Suggestion Generator v2 (Agent Prompt)](#6332-prompt-suggestion-generator-v2-agent-prompt)
         3. [How to use the SendUserMessage tool (System Prompt)](#6333-how-to-use-the-sendusermessage-tool-system-prompt)

---

## 1. Bash & Shell Execution

Everything governing how bash commands are executed, delegated, secured, and timed — from syntax conventions and tool delegation to sandbox security and async timing patterns.

### 1.1 Bash Execution Fundamentals

Core mechanics for executing bash commands, including working directory persistence, command formatting conventions, and performance optimization through parallel and sequential execution patterns. Covers syntax requirements like quoting file paths, chaining dependent commands with `&&`, and validation practices.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Executes a given bash command and returns its output.

#### 1.1.2 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Maintain current working directory throughout the session by using absolute paths and avoiding cd unless explicitly requested.

#### 1.1.3 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between bash commands but shell state does not, with environment initialized from user's profile.

#### 1.1.4 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate commands in bash tool calls.

#### 1.1.5 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.6 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration for bash commands, with configurable maximum and default timeout values in milliseconds.

#### 1.1.7 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent bash commands as parallel tool calls in a single message for optimal performance.

#### 1.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands using `&&` in a single bash call to ensure sequential execution with failure propagation.

#### 1.1.9 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially but not caring if earlier commands fail.

#### 1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directories exist using `ls` before creating new files or directories.

### 1.2 Bash Tool Delegation

Strategic guidance to use dedicated tools instead of bash for file operations and content search, improving transparency and user experience. Covers file reading/writing, searching, editing, and text output through specialized tools rather than shell commands.

#### 1.2.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Output text directly without using echo or printf.

#### 1.2.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Use the Grep tool for content search instead of grep or rg commands.

#### 1.2.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Use the Edit tool for file editing instead of sed or awk commands.

#### 1.2.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Use the Glob tool for file search instead of find or ls commands.

#### 1.2.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Use the Read tool for file reading instead of cat, head, or tail commands.

#### 1.2.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Use the Write tool for file writing instead of echo or cat commands.

#### 1.2.7 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Built-in tools provide better user experience and transparency than Bash equivalents for file and search operations.

#### 1.2.8 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for find, grep, cat, and similar read-only commands; use dedicated tools instead for better user experience.

### 1.3 Sandbox Security & Failure Diagnosis

Security enforcement model where all bash commands run in sandbox mode by default, with mechanisms to detect sandbox-caused failures through specific error patterns and automatic recovery strategies. Includes protocols for explaining restrictions and protecting sensitive paths from allowlist exposure.

#### 1.3.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Work with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 1.3.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Default to running commands within the sandbox; only disable sandbox when user explicitly requests or sandbox restriction evidence appears.

#### 1.3.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied errors to paths outside allowed directories indicate sandbox restrictions.

#### 1.3.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing evidence types that indicate sandbox-caused failures.

#### 1.3.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox restrictions.

#### 1.3.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "Operation not permitted" errors as evidence of sandbox restrictions on file and network operations.

#### 1.3.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Recognizes Unix socket connection errors as evidence of sandbox restrictions.

#### 1.3.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and inform the user about the `/sandbox` command for managing restrictions.

#### 1.3.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with visible evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure types.

#### 1.3.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.3.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.3.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.3.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands, even after running a command with `dangerouslyDisableSandbox: true`.

#### 1.3.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Marks the beginning of response instructions for handling sandbox-caused command failures.

#### 1.3.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry a failed command with `dangerouslyDisableSandbox: true` without asking the user first.

#### 1.3.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable for temporary files in sandbox mode instead of `/tmp` directly, as TMPDIR is automatically set to the correct sandbox-writable directory.

#### 1.3.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will trigger a user permission prompt.

### 1.4 Timing & Asynchronous Operations

Guidelines for managing delays and polling in bash execution, emphasizing minimal sleep durations to preserve responsiveness and preferring active check commands over passive waiting. Prohibits polling background tasks that trigger system notifications upon completion.

#### 1.4.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.4.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background`, as the system will notify when they complete.

#### 1.4.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

#### 1.4.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` rather than sleeping when polling external processes.

#### 1.4.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; instead diagnose root causes.

---

## 2. File, Tool & Web Operations

Structured interfaces for reading, writing, and editing files; task tracking; web browsing and content retrieval; and specialized tool descriptions covering notebooks, LSP, and user interaction.

### 2.1 File Access and Editing

Reading diverse file formats, writing and editing with precision, handling access warnings for truncated or empty files, and rendering visual previews for decision support.

#### 2.1.1 File System Operations: Read, Write & Edit Tools

Comprehensive file manipulation capabilities for reading diverse formats (images, PDFs, Jupyter notebooks), writing with complete overwrite, precise string-based editing with indentation matching, and regex-powered content search. These tools replace traditional command-line utilities (cat, sed, grep, find) with structured interfaces optimized for reliable file access and modification.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the filesystem with support for images, PDFs (with page ranges), and Jupyter notebooks. Requires absolute paths and defaults to reading a limited number of lines.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the filesystem with complete overwrite capability. Prefers Edit tool for modifications; avoids creating documentation unless explicitly requested.

##### 2.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with precise indentation matching. Requires unique `old_string` matches, supports `replace_all` for bulk replacements, and prefers editing existing files over creating new ones.

##### 2.1.1.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Ripgrep-based content search supporting regex patterns, file filtering by glob or type, and multiple output modes. Handles multiline matching and Go-style syntax escaping.

##### 2.1.1.5 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Use the Read tool instead of cat, head, tail, or sed to access file contents.

##### 2.1.1.6 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Prefer the Edit tool over sed or awk for file modifications.

##### 2.1.1.7 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool instead of grep or rg to search file contents.

##### 2.1.1.8 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool instead of find or ls to search for files.

##### 2.1.1.9 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Prefers Write tool for file creation instead of cat heredoc or echo redirection.

#### 2.1.2 File State & Access Warnings

Alerts Claude to file access constraints and anomalies—empty files, truncated content, and offset mismatches—ensuring accurate handling of partial or incomplete file reads.

##### 2.1.2.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warning that a file exists but contains no content.

##### 2.1.2.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

A large file was truncated to the first N lines; use the Read tool to access more content if needed.

##### 2.1.2.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warning that the file is shorter than the requested read offset; the actual file length is provided.

#### 2.1.3 UI Preview & Option Display

Renders visual previews alongside selectable options using monospace markdown, enabling side-by-side comparison of UI mockups, code snippets, and diagrams for informed decision-making.

##### 2.1.3.1 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using monospace markdown boxes, supporting ASCII mockups, code snippets, and diagrams for single-select questions.

### 2.2 Task Tracking and Specialized Tools

Todo and progress management for multi-step work, plus execution and editing tools spanning code intelligence, notebooks, shell commands, and user prompting.

#### 2.2.1 Task & Todo Management Tools

Task tracking and progress management for organizing multi-step work into discrete, state-tracked items (pending, in-progress, completed). Enables breaking down complex coding sessions into manageable units with immediate completion marking and progress visibility.

##### 2.2.1.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages task lists for coding sessions with state tracking (pending, in_progress, completed). Requires both imperative and active-form descriptions for each task.

##### 2.2.1.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for complex multi-step work. Tracks progress and helps organize coding sessions; includes optional active form for spinner display.

##### 2.2.1.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Use TodoWrite to break down work into tasks, track progress, and mark tasks complete immediately upon finishing them.

##### 2.2.1.4 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for task tracking when relevant, without mentioning this reminder to the user.

##### 2.2.1.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant, without mentioning this reminder to the user.

#### 2.2.2 Specialized Tool Descriptions

Execution and editing tools spanning code intelligence (LSP), notebook manipulation, shell commands, and user interaction. Includes execution control via sleep and timeouts, user prompting with visual previews, and guidance on avoiding performance anti-patterns in long-running operations.

##### 2.2.2.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Language Server Protocol integration providing code intelligence: definitions, references, hover info, symbols, implementations, and call hierarchies. Requires LSP server configuration for the file type.

##### 2.2.2.2 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replaces or modifies Jupyter notebook cell contents. Supports insert and delete modes with 0-indexed cell numbering.

##### 2.2.2.3 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with configurable timeout and output limits. Emphasizes using specialized tools for file operations and git commands; supports command chaining and destructive operation safeguards.

##### 2.2.2.4 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with user interrupt capability. Preferred over bash sleep for avoiding shell process overhead.

##### 2.2.2.5 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Defines when and how to ask users questions during execution to gather preferences, clarify ambiguity, and offer implementation choices, with special guidance for plan mode interactions.

##### 2.2.2.6 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructs how to use the optional preview field on single-select question options to display visual artifacts like UI mockups, code snippets, and diagrams as self-contained HTML.

##### 2.2.2.7 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Discourages unnecessary `Start-Sleep` commands in PowerShell scripts, recommending `run_in_background` for long-running tasks, polling alternatives for external processes, and short durations (1-5 seconds) when sleep is unavoidable.

### 2.3 Web & Browser Automation

Web interaction and information retrieval through content fetching with markdown conversion, web search for current information, and browser automation via mouse, keyboard, and screenshot analysis. Enables both passive content analysis and active browser control for complex web interactions.

#### 2.3.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a small model. Includes 15-minute cache and handles redirects.

#### 2.3.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff. Requires mandatory 'Sources:' section in responses listing all relevant URLs.

#### 2.3.3 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse, keyboard, and screenshots. Emphasizes consulting screenshots before clicking, adjusting click locations for accuracy, and centering the cursor on elements.

#### 2.3.4 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines browser automation actions: clicking, typing, scrolling, keyboard input, dragging, zooming, and hovering for Chrome-based interactions.

#### 2.3.5 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with smooth playback, console debugging with pattern filtering, avoiding JavaScript dialogs that block extension commands, and session startup with tab context retrieval. Emphasizes staying focused on tasks and stopping to ask for guidance when encountering failures or unexpected complexity.

#### 2.3.6 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the tool name in the select query to enable subsequent tool calls.

#### 2.3.7 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Agent that summarizes verbose web content for the main model, enforcing 125-character quote limits for untrusted domains and using quotation marks for exact language.

---

## 3. Agent Orchestration & Session Management

Distributed multi-agent coordination, structured planning workflows, autonomous execution safety, session identity, and persistent memory and context across agent runs.

### 3.1 Multi-Agent Coordination and Planning

Subagent delegation, swarm coordination, parallel execution, and structured planning workflows that separate design from implementation with user approval checkpoints.

#### 3.1.1 Multi-Agent Orchestration & Subagent Management

Distributed task execution through specialized subagents and coordinated agent teams. Enables parallel work, context isolation, asynchronous task handling, and swarm-based coordination with message passing, team lifecycle management, and structured task assignment workflows. Subagents autonomously handle complex multi-step work while coordinators delegate, monitor, and aggregate results.

##### 3.1.1.1 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses that autonomously handle complex multi-step tasks, with options to fork context or select specific agent types.

##### 3.1.1.2 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance for using the Task/Agent tool, covering subagent spawning, background execution, resumption via SendMessage, worktree isolation, parallel agent launches, and context-specific constraints for subagents and teammates.

##### 3.1.1.3 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages agent teams and swarms for coordinated multi-agent work. Covers team creation, task assignment, teammate spawning, message delivery, and idle state management.

##### 3.1.1.4 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completes. Fails if active team members remain; must gracefully terminate teammates first.

##### 3.1.1.5 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for finding and claiming available tasks from a shared task list, prioritizing by ID order and respecting task dependencies.

##### 3.1.1.6 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to teammates in agent swarms with support for legacy protocol responses (shutdown and plan approval). Plain text output is not visible to other agents.

##### 3.1.1.7 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown-formatted messages to users with optional file attachments. Status field distinguishes between direct replies and proactive notifications.

##### 3.1.1.8 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use the Task tool with specialized subagents to parallelize independent queries and protect context, but avoid duplicating work already delegated to subagents.

##### 3.1.1.9 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Use the Task tool with an exploration subagent for broad codebase research when simple directed searches are insufficient or queries will exceed the limit.

##### 3.1.1.10 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

When delegating to subagents, tailor prompts based on context inheritance: for context-inheriting agents, provide directives and scope; for fresh agents, brief them like a colleague with background, what you've learned, and judgment-enabling context. Never delegate understanding—include specific file paths and changes.

##### 3.1.1.11 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Demonstrates how coordinator agents delegate tasks to subagents, handle waiting states, and report results without fabricating information during mid-wait user queries.

##### 3.1.1.12 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents (research and implementation work where intermediate output isn't needed), prohibits reading fork output mid-flight or fabricating results, and requires trusting completion notifications rather than peeking at transcripts.

##### 3.1.1.13 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool for teammate communication, with broadcasts reserved for critical team-wide announcements.

##### 3.1.1.14 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with a specific identity, requiring it to read team config, check task lists, and communicate with teammates by name rather than UUID.

##### 3.1.1.15 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully before providing a final response to the user in non-interactive mode.

##### 3.1.1.16 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Forked worker sub-agent that executes directives directly without spawning further sub-agents, using tools silently and reporting structured results with scope, findings, files changed, and issues.

#### 3.1.2 Planning Mode & Implementation Workflow

Structured planning workflows that separate design from execution. Enables codebase exploration, architectural decision-making, and implementation strategy design with user approval checkpoints before code changes. Supports iterative refinement, multi-agent parallel exploration, and comprehensive planning with critique feedback to prevent wasted effort through upfront alignment.

##### 3.1.2.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore the codebase and design implementation approaches for user approval before coding. Recommends use for non-trivial tasks involving multiple approaches, architectural decisions, multi-file changes, or unclear requirements. Requires explicit user consent and prevents wasted effort through upfront alignment.

##### 3.1.2.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of implementation planning and requests user approval. Use only for code-writing tasks, not research or exploration. Reads the plan from a file written during planning phase.

##### 3.1.2.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan-only mode with a structured 5-phase workflow: initial understanding via parallel exploration agents, design with planning agents, review, phase four execution, and plan approval. Prohibits any non-readonly actions except plan file edits.

##### 3.1.2.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Activates iterative pair-planning where Claude explores code, updates the plan file incrementally, asks clarifying questions, and converges on a complete plan before requesting approval.

##### 3.1.2.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagents to read-only operations and plan file editing during plan mode, requiring comprehensive answers and clarifying questions before proceeding.

##### 3.1.2.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after a previous exit, requiring evaluation of the existing plan against the current request and appropriate action (overwrite or modify).

##### 3.1.2.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

You have exited plan mode and can now make edits, run tools, and take actions; the plan file is available for reference if it exists.

##### 3.1.2.8 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Activates an advanced planning mode using parallel multi-agent exploration to understand code, identify files, assess risks, and synthesize a detailed implementation plan with critique feedback, strictly preventing implementation during the plan-only session.

##### 3.1.2.9 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and instructs Claude to continue working on it if relevant.

##### 3.1.2.10 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly after implementation is finished.

##### 3.1.2.11 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes concise file modification lists and verification commands without context or prose, with a 40-line hard limit.

##### 3.1.2.12 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans by exploring codebases, identifying patterns, understanding architecture, and detailing step-by-step strategies with critical files in read-only mode.

### 3.2 Autonomous Execution and Session Identity

Safety guardrails for autonomous action — reversibility checks, permission handling, and confirmation protocols — alongside session creation, naming, and agent identity design.

#### 3.2.1 Autonomous & Auto Mode Execution

Governs autonomous task execution with safety guardrails: enable continuous action with minimal interruptions while freely taking local reversible actions; require confirmation before destructive operations, hard-to-reverse changes, or shared system modifications; respect permission denials without malicious bypass attempts; support parallel tool execution for independent operations.

##### 3.2.1.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate action, minimal interruptions, and preference for coding over planning. Prohibits destructive actions on shared systems and data exfiltration without explicit user authorization.

##### 3.2.1.2 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes careful decision-making for reversibility and blast radius: freely take local reversible actions, but confirm before destructive operations, hard-to-reverse changes, shared system modifications, or external uploads. Investigates unexpected state rather than deleting, and matches action scope to actual requests.

##### 3.2.1.3 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Describes tool execution in permission modes where users approve or deny tool calls, and instructs Claude not to re-attempt denied calls but adjust approach instead.

##### 3.2.1.4 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

When tool execution is denied, Claude may attempt reasonable alternatives but must not bypass restrictions maliciously, and should explain to the user if the capability is essential.

##### 3.2.1.5 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Enables parallel tool calls for independent operations while enforcing sequential execution for dependent calls.

#### 3.2.2 Session & Agent Identity Management

Capabilities for creating, naming, and retrieving coding sessions, plus designing custom AI agents with structured system prompts and performance optimization. Handles session discoverability through semantic and tag-based search, and enables dynamic agent instantiation with context passing.

##### 3.2.2.1 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise sentence-case titles (3-7 words) that capture the main topic or goal of a coding session for easy recognition in session lists.

##### 3.2.2.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Agent for finding relevant sessions by prioritizing exact tag matches, then partial tags, titles, branches, and semantic similarity. Emphasizes inclusive matching and returns sessions ordered by relevance as JSON indices.

##### 3.2.2.3 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Invoke the specified agent type with required context when the user requests it.

##### 3.2.2.4 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design custom AI agents by extracting user requirements, creating expert personas, architecting comprehensive system prompts, optimizing for performance, and generating JSON specifications with identifiers and usage examples.

### 3.3 Memory, Context, and Summarization

Persistent memory infrastructure capturing session state and institutional knowledge, plus structured conversation summarization for context compaction and task resumption.

#### 3.3.1 Memory Systems & Context Persistence

Persistent memory infrastructure that captures session state, institutional knowledge, and user context across conversations. Agents consolidate memories from logs and transcripts, selectively attach relevant files to queries, and update domain-specific discoveries to build evolving knowledge bases that survive session boundaries.

##### 3.3.1.1 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing current state, task specification, files, workflow, errors, codebase documentation, learnings, and worklogs.

##### 3.3.1.2 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations while preserving exact structure, headers, and italic section descriptions. Emphasizes detailed, info-dense content with specific file paths and technical details, maintaining section token limits and focusing on actionable information.

##### 3.3.1.3 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to keep memories current and organized.

##### 3.3.1.4 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options based on user query, excluding usage documentation for recently-used tools but including warnings and known issues.

##### 3.3.1.5 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Instructs agents to update memory with domain-specific discoveries during task execution, building institutional knowledge across conversations. Provides templates for code reviewers, test runners, architects, and documentation writers to record patterns, decisions, and technical insights relevant to their roles.

##### 3.3.1.6 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory that stores guidance about work approaches from both successes and failures, requiring contradiction checks against team memories before saving.

##### 3.3.1.7 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory field to capture role, goals, responsibilities, and knowledge, enabling tailored assistance while avoiding negative judgments and focusing on work-relevant information.

##### 3.3.1.8 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and type description for injection into conversation context.

##### 3.3.1.9 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, with type description and full content for context retention.

##### 3.3.1.10 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Shows the contents of a nested memory file structure for maintaining hierarchical context.

#### 3.3.2 Conversation Summarization & Context Compaction

Structured summarization of conversations and message streams to preserve critical context when transitioning between sessions or compacting large context windows. Summaries organize technical discoveries, current work state, and next steps to enable efficient task resumption without information loss.

##### 3.3.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized by primary request, technical concepts, files/code sections, errors, problem-solving, user messages, pending tasks, current work, and next steps to preserve context across sessions.

##### 3.3.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages following earlier retained context, organized by primary request, technical concepts, files/code, errors, problem-solving, user messages, pending tasks, current work, and next steps.

##### 3.3.2.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs creation of structured continuation summaries for context window transitions, covering task overview, current state, discoveries, next steps, and context preservation to enable efficient task resumption without duplicating work.

##### 3.3.2.4 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

A file was read before conversation summarization but is too large to include; use the Read tool to access it if needed.

##### 3.3.2.5 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory may have changed.

---

## 4. SDK, API & External Integration

Language-specific SDK references, agentic API patterns, GitHub and CI/CD automation, MCP protocol integration, IDE developer context, and documentation retrieval.

### 4.1 Claude API and Agent SDK References

Multi-language SDK documentation covering client initialization, streaming, tool use, prompt caching, batches API, and agentic session patterns for Python, TypeScript, and other languages.

#### 4.1.1 Claude API SDK References (Multi-Language)

Language-specific SDK documentation and HTTP API reference for integrating Claude across Python, TypeScript, Go, Java, C#, PHP, Ruby, and raw HTTP. Covers client initialization, streaming, vision, tool use, prompt caching, extended thinking, structured outputs, token counting, and file handling. Includes model catalog with exact IDs and context windows, HTTP error codes with language-specific exception handling, and live documentation sources.

##### 4.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, stop reasons, and cost optimization.

##### 4.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, stop reasons, and cost optimization.

##### 4.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use with BetaToolRunner and manual loops, thinking, prompt caching, server-side tools, PDF input, Files API, and context editing.

##### 4.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking, tool use with annotated classes and BetaToolRunner, effort parameter, prompt caching, token counting, structured output, server-side tools, and Files API.

##### 4.1.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use with manual loops, effort parameter, prompt caching, token counting, structured output, PDF input, server-side tools, and beta features.

##### 4.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization, basic requests, streaming, tool use with BetaRunnableTool and manual loops, extended thinking, prompt caching, structured output, and server-side tools.

##### 4.1.1.7 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, tool use with BetaToolRunner, and prompt caching.

##### 4.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming, tool use, prompt caching, extended thinking, and required headers.

##### 4.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact IDs, context windows, max output tokens, and programmatic model discovery via Models API for live capability data.

##### 4.1.1.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for HTTP error codes returned by the Claude API, including common causes, fixes, and language-specific exception handling with typed error classes for Python and TypeScript SDKs.

##### 4.1.1.11 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, including models, features, tools, and SDKs across multiple languages.

#### 4.1.2 Agent SDK References & Patterns

Comprehensive Agent SDK documentation and design patterns for building agentic applications in Python and TypeScript. Covers agent initialization, query interfaces, built-in and custom tools via MCP, permission modes, hooks, subagents, session management, and resumption. Includes tool use foundations, streaming patterns, Files API, Batches API for cost-optimized asynchronous processing, and prompt caching design principles.

##### 4.1.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP support, hooks, subagents, error handling, and session history management.

##### 4.1.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference covering installation, query interface, built-in tools, permission modes, MCP support, hooks, subagents, and session management.

##### 4.1.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, session resumption, and session mutations for building agentic applications.

##### 4.1.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks, subagents, MCP integration, session resumption, and session mutations for building agentic applications.

##### 4.1.2.5 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loops, server-side tools, structured outputs, and best practices for effective tool integration.

##### 4.1.2.6 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner with decorators, MCP conversion helpers, manual agentic loops, code execution, memory tools, and structured outputs with Pydantic.

##### 4.1.2.7 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, code execution, memory tools, and structured outputs with Zod validation.

##### 4.1.2.8 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling different content types including thinking blocks and tool use, and best practices for token tracking.

##### 4.1.2.9 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling content types, tool runner integration, and best practices for managing stream events and final messages.

##### 4.1.2.10 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages, file management (list, retrieve metadata, delete, download), and end-to-end examples.

##### 4.1.2.11 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages, and file management operations (list, delete, download).

##### 4.1.2.12 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, status polling, result retrieval, and container reuse for asynchronous processing at 50% cost reduction.

##### 4.1.2.13 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Design patterns for effective prompt caching, covering prefix-stability principles, breakpoint placement, architectural guidance, and silent invalidators that break cache without errors.

##### 4.1.2.14 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM-powered applications with Claude, including language detection, surface selection (single call vs workflow vs agent), architecture overview, and model defaults.

##### 4.1.2.15 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, routing users to appropriate sections based on their use case.

### 4.2 GitHub, CI/CD, and MCP Integration

GitHub Actions workflows for automated code review and PR analysis, MCP resource and tool schema management, and documentation retrieval for platform knowledge.

#### 4.2.1 GitHub Integration & CI/CD Automation

GitHub Actions workflows and agent prompts for Claude Code integration, enabling automated code review, PR analysis, and comment handling via @claude mentions and slash commands. Includes workflow templates, installation guidance, and specialized agents for reviewing pull requests and fetching PR comments with code context.

##### 4.2.1.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code via @claude mentions in issues, pull requests, and reviews, with optional custom prompts and claude_args configuration.

##### 4.2.1.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template for a pull request description when installing the Claude Code GitHub App integration, explaining what Claude Code is, how it works, security considerations, and next steps for users.

##### 4.2.1.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and review comments with code context, formatting them readably with file paths, line numbers, and comment threading.

##### 4.2.1.4 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, correctness, conventions, performance, test coverage, and security with concise formatted feedback.

#### 4.2.2 MCP Resources & Protocol Integration

Manages Model Context Protocol resource access and tool schema discovery. Handles cases where resources exist but lack displayable content, and provides deferred tool schema fetching through keyword and name matching.

##### 4.2.2.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no accessible content.

##### 4.2.2.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content that cannot be displayed in a readable format.

##### 4.2.2.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by query matching against tool names or keywords. Supports exact selection and keyword search with ranking.

#### 4.2.3 Claude Guide & Documentation Agent

Surfaces Claude platform knowledge and project context through documentation retrieval and lightweight question handling, enabling users to understand APIs and tools without interrupting primary workflows.

##### 4.2.3.1 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing actionable guidance, and referencing project-specific files like CLAUDE.md.

##### 4.2.3.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer side questions directly without tools in a single response; you are a separate lightweight agent with no file access or command execution capabilities, and the main agent continues independently in the background.

### 4.3 IDE and Resource Monitoring

Real-time IDE awareness of file selection, diagnostics, and developer activity, plus token consumption and budget tracking for cost-aware decision-making.

#### 4.3.1 IDE Integration & Developer Context

Real-time awareness of developer activity in the IDE, including file selection, line ranges, and code diagnostics. Enables Claude to respond to user actions and maintain context about the active codebase state without explicit prompting.

##### 4.3.1.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

The user opened a file in the IDE, which may or may not relate to the current task.

##### 4.3.1.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in the IDE, providing the file path and line range for context.

##### 4.3.1.3 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the codebase or IDE.

##### 4.3.1.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

A file was modified externally by the user or linter; account for these changes and do not revert them unless requested.

#### 4.3.2 Resource Monitoring & Budget Tracking

Real-time visibility into token consumption and monetary spend, displaying usage against configured limits to support cost-aware decision-making.

##### 4.3.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 4.3.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing used, total, and remaining budget amounts.

---

## 5. Project Setup, Skills & Workflow Automation

Codebase onboarding, extensible slash commands and skills, hook-based lifecycle automation, scheduling, configuration management, and version control workflows.

### 5.1 Git, Code Quality, and Codebase Research

Git commit and PR workflows with safety protocols, automated testing and verification, and read-only codebase exploration for architectural research.

#### 5.1.1 Git Workflow & Repository Management

Comprehensive git operations including commit creation, pull request workflows, and worktree isolation, with safety protocols that prevent destructive operations, enforce hook execution, and protect against accidental commits of sensitive files. Includes branch naming conventions and session-aware repository state tracking.

##### 5.1.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Consider safer alternatives to destructive git operations like reset --hard, push --force, and checkout -- before executing them.

##### 5.1.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols for destructive operations, hook handling, file staging, commit message formatting, and PR creation with gh commands.

##### 5.1.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Never skip hooks or bypass signing unless the user explicitly requests it; investigate and fix underlying issues when hooks fail.

##### 5.1.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Prefer creating new commits over amending existing ones.

##### 5.1.1.5 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, only when explicitly requested by the user. Requires a git repository or VCS-agnostic hooks configured.

##### 5.1.1.6 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree and returns to the original directory. Supports keeping or removing the worktree; requires confirmation before discarding uncommitted changes.

##### 5.1.1.7 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository style, and executing the commit with safety protocols preventing amends and secret-file commits.

##### 5.1.1.8 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request by analyzing all changes, creating a feature branch, drafting commit and PR messages, pushing to origin, and handling existing PRs with safety protocols.

##### 5.1.1.9 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent that generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

##### 5.1.1.10 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status snapshot at conversation start including branch, main branch reference, file status, and recent commits.

#### 5.1.2 Code Quality, Verification & Testing

Verification workflows and skills for validating code changes through automated testing, build validation, and adversarial probing. Includes verifier skill creation for project-specific test automation, code simplification via parallel review agents, and structured verification verdicts with evidence. Covers CLI, API, and general application testing patterns.

##### 5.1.2.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow for validating code changes by running the app and observing behavior, with detailed process, red flags, and verdict definitions.

##### 5.1.2.2 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying CLI changes by building, running with test arguments, and comparing output against expected behavior.

##### 5.1.2.3 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying server/API changes by starting the server, making HTTP requests, and validating response status, headers, and body.

##### 5.1.2.4 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive onboarding for creating verifier skills that automatically validate code changes, including project auto-detection, tool setup, authentication handling, and skill generation.

##### 5.1.2.5 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill that launches three parallel review agents to identify code reuse opportunities, quality issues, and efficiency problems, then fixes them.

##### 5.1.2.6 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial verification agent that tests implementations by running builds, tests, linters, and probes for concurrency, boundaries, and idempotency. Issues PASS/FAIL/PARTIAL verdicts with command output and structured evidence, avoiding verification avoidance and false confidence.

##### 5.1.2.7 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

After implementing changes, simplify code using the Skill tool, run unit tests, perform end-to-end testing, commit and push with a PR, then report the PR URL or reason for failure.

#### 5.1.3 Codebase Exploration & Research Agents

Read-only codebase analysis capabilities for fast pattern matching, code searching, and architectural investigation. Specialized agents answer structural questions and execute multi-step research tasks across codebases while defaulting to targeted search tools over general-purpose execution.

##### 5.1.3.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file pattern searches, code keyword searches, and answering questions about codebase structure and architecture without modifying files.

##### 5.1.3.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases while reporting findings concisely to the caller.

##### 5.1.3.3 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Use Glob or Grep tools directly for simple, targeted codebase searches like finding specific files, classes, or functions.

##### 5.1.3.4 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations; default to dedicated tools when available.

### 5.2 CLAUDE.md & Project Documentation Setup

Onboarding infrastructure that analyzes codebases to generate CLAUDE.md reference files capturing architecture, commands, and development patterns. Iterative setup flows guide users through codebase exploration and skill configuration to establish project-specific knowledge bases for future Claude instances.

#### 5.2.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files capturing common commands, high-level architecture, and development patterns for future Claude Code instances.

#### 5.2.2 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks, including codebase exploration, user interviews, iterative proposal refinement, and optimization suggestions.

#### 5.2.3 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Agent that updates Magic Doc files with new learnings while preserving headers and maintaining current state. Emphasizes terseness, high-signal content, and focuses on architecture, patterns, and entry points rather than exhaustive implementation details.

### 5.3 Skills, Hooks, and Scheduling

Slash command frameworks for reusable skills, hook-based lifecycle event interception for custom execution logic, cron-based scheduling, and configuration and settings management.

#### 5.3.1 Skills System & Slash Commands

Extensible command framework for invoking specialized capabilities through slash commands and skill definitions. Covers skill creation from repeatable workflows, configuration management, scheduling and batch processing of large tasks, and debugging infrastructure for monitoring session health.

##### 5.3.1.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Invokes specialized skills (slash commands) within conversations. Must be called before generating responses when a skill matches the user's request.

##### 5.3.1.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute slash commands that invoke user-invocable skills; only use skills listed in the tool's user-invocable section.

##### 5.3.1.3 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable session processes into reusable skills through 4-step analysis, user interviews, and SKILL.md generation with frontmatter, steps, and success criteria.

##### 5.3.1.4 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json), including reading existing config, merging changes, and validating hooks and permissions.

##### 5.3.1.5 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks for Claude Code, including dedup checks, command construction, pipe-testing, JSON validation, and proof of execution.

##### 5.3.1.6 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts intervals to cron expressions, and schedules recurring tasks with automatic execution and expiration.

##### 5.3.1.7 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 5.3.1.8 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, analyzing CPU/memory/state, and posting diagnostic reports to Slack.

##### 5.3.1.9 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via Anthropic cloud API, supporting create, list, update, and run operations with environment and MCP connector configuration.

##### 5.3.1.10 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into independent units, determining e2e test recipes, planning implementation, and spawning background worker agents with worktree isolation.

##### 5.3.1.11 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Reminds Claude to follow guidelines for skills that were invoked during the current session.

#### 5.3.2 Hooks System & Lifecycle Events

Extensible hook system that intercepts Claude Code operations at key lifecycle events (session start, tool use, user input, completion) and applies custom logic through condition evaluation and structured responses. Hooks can modify execution flow, inject context, log activity, or halt operations with user-facing messages.

##### 5.3.2.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide to Claude Code hooks system enabling command, prompt, and agent hooks at lifecycle events (PermissionRequest, PreToolUse, PostToolUse, Notification, Stop, Compact, UserPromptSubmit, SessionStart). Includes hook structure, input/output JSON formats, tool matchers, and common patterns for auto-formatting, logging, testing, and conditional execution.

##### 5.3.2.2 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether a condition is met or providing a reason for failure.

##### 5.3.2.3 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured output indicating whether an agent completed its assigned plan.

##### 5.3.2.4 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Additional context provided by a hook command.

##### 5.3.2.5 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

A blocking hook command encountered an error.

##### 5.3.2.6 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

A hook stopped execution with a continuation message.

##### 5.3.2.7 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for continuation messages when a hook stops execution.

##### 5.3.2.8 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Displays a success notification when a hook completes, showing the hook name and its output content.

#### 5.3.3 Scheduling & Cron Job Automation

Time-based task scheduling using standard cron expressions with timezone awareness, supporting both one-time and recurring jobs. Includes built-in jitter management and automatic expiration to optimize API load and resource usage.

##### 5.3.3.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron-based jobs using standard 5-field cron syntax in the user's local timezone. Provides guidance on avoiding :00 and :30 minute marks to reduce API load, managing jitter, and setting durability for persistent tasks. Recurring jobs auto-expire after a configurable timeframe.

#### 5.3.4 Configuration & Settings Management

Manages persistent and session-level configuration including shell status line setup, feature toggles for minimal mode, and isolated temporary file directories. Bridges shell environment customization with application settings.

##### 5.3.4.1 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Agent that configures Claude Code status line by converting shell PS1 configurations to shell commands, handling escape sequences, ANSI colors, and updating ~/.claude/settings.json with structured statusLine configuration.

##### 5.3.4.2 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Minimal mode disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags while maintaining skill resolution and supporting 3P providers.

##### 5.3.4.3 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

### 5.4 Auto Mode Rule Review & Classifier Guidance

Evaluates and validates auto mode classifier rules for soundness and security, assessing rule clarity, conflicts, and injection risks to improve decision-making and enforce safety policies.

#### 5.4.1 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability, evaluating allow/soft_deny/environment rule categories to improve classifier decision-making.

#### 5.4.2 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief while adding context for complex piped or flag-heavy commands.

#### 5.4.3 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection in bash commands to enforce safety policies, returning the detected prefix or 'command_injection_detected' for allowlisting decisions.

---

## 6. Guidelines, Safety & User Communication

Security review, vulnerability assessment, code writing principles, output style conventions, usage analytics, learning features, and advisor tools that shape how Claude communicates and operates safely.

### 6.1 Security Review & Vulnerability Assessment

Security-focused agent prompts and system instructions for vulnerability assessment, autonomous agent safety monitoring, and malware analysis. Covers exploitable vulnerability detection with high confidence thresholds, security rule enforcement for agent actions, prompt injection prevention, and ethical boundaries for security testing versus malicious assistance.

#### 6.1.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review agent that analyzes code diffs for exploitable vulnerabilities with high confidence thresholds, excluding DOS, secrets on disk, and rate-limiting issues. Uses three-phase methodology: repository context research, comparative analysis against existing patterns, and vulnerability assessment with structured markdown output.

#### 6.1.2 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Evaluates autonomous coding agent actions against security rules to prevent prompt injection, scope creep, and accidental damage, applying user intent analysis and evaluation rules for composite actions, code execution, and infrastructure changes.

#### 6.1.3 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, block rules, and allow exceptions governing autonomous agent actions including git operations, code execution, infrastructure access, credentials, data handling, and external system interactions.

#### 6.1.4 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing requests for destructive techniques, DoS attacks, supply chain compromise, and detection evasion.

#### 6.1.5 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Prioritizes avoiding security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks, with immediate remediation if insecure code is detected.

#### 6.1.6 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware code for understanding and reporting, but strictly prohibits improving or augmenting malicious code.

### 6.2 Code Writing and Output Style Principles

Pragmatic software engineering practices covering scope adherence, minimal changes, and code cleanup, alongside concise communication conventions for citations, formatting, and directness.

#### 6.2.1 Code Writing Principles & Task Execution Guidelines

Defines pragmatic software engineering practices: execute ambitious tasks within user-specified scope; edit existing files rather than create new ones; delete unused code completely instead of preserving compatibility shims; avoid premature abstractions and speculative design; restrict changes to requested scope without unsolicited refactoring, documentation, or error handling for impossible scenarios.

##### 6.2.1.1 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Empowers Claude to tackle ambitious tasks by deferring to user judgment on scope rather than imposing artificial limitations.

##### 6.2.1.2 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs preference for editing existing files over creating new ones to prevent file bloat and build on established work.

##### 6.2.1.3 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Prohibits backwards-compatibility shims and unused code remnants; unused code should be deleted completely rather than preserved with workarounds.

##### 6.2.1.4 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Discourages creating helpers or abstractions for one-time operations or hypothetical requirements; complexity should match actual task needs without speculative design.

##### 6.2.1.5 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Avoids providing time estimates or predictions for task completion, focusing instead on what needs to be done.

##### 6.2.1.6 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Restricts changes to requested scope only; bug fixes need not include surrounding cleanup, features need not add extra configurability, and code should not receive unsolicited documentation or refactoring.

##### 6.2.1.7 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Avoids error handling for impossible scenarios and unnecessary validation; validation should occur only at system boundaries like user input and external APIs.

##### 6.2.1.8 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires reading and understanding existing code before proposing or making modifications.

##### 6.2.1.9 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Interprets user instructions in the context of software engineering tasks—bug fixes, feature additions, refactoring, code explanation—rather than generic responses, applying domain context to ambiguous requests.

##### 6.2.1.10 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels.

#### 6.2.2 Output Style, Tone & Communication Guidelines

Establishes consistent communication patterns for Claude's responses: concise, direct output prioritizing decisions and blockers; precise code citations with file paths and line numbers; structured action summaries in present tense; and formatting conventions like absolute paths and emoji avoidance for clarity in agent threads.

##### 6.2.2.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler, and focusing text on decisions, status updates, and blockers.

##### 6.2.2.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires file_path:line_number format when referencing code to enable easy navigation to source locations.

##### 6.2.2.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 6.2.2.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and to follow its associated guidelines.

##### 6.2.2.5 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths, share relevant paths in responses, avoid emojis, and omit colons before tool calls for clear communication.

##### 6.2.2.6 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Defines format for agent action summaries: 3-5 words in present tense (-ing form), naming specific files or functions rather than branches, with examples of good and bad patterns.

### 6.3 Analytics, Learning, and Advisor Support

Usage pattern analysis for friction identification and workflow recommendations, collaborative learning modes that request human input, and escalation and guidance tools for decision support.

#### 6.3.1 Usage Insights & Analytics

Analyzes Claude Code usage patterns to surface actionable intelligence: identifies what's working and friction points through structured session facet extraction; categorizes error patterns and satisfaction signals; recommends feature integrations like MCP Servers and Custom Skills; and projects ambitious autonomous workflow opportunities.

##### 6.3.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part usage insights summary covering what's working, friction points, quick wins, and ambitious workflows for Claude Code users, using a coaching tone without numerical stats.

##### 6.3.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with 3 categories and 2 examples each, using second-person language.

##### 6.3.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future opportunities for autonomous AI-assisted development workflows, including parallel agents and test-driven iteration.

##### 6.3.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts including goal categories, user satisfaction signals, and friction types with strict guidelines for counting only explicit user requests.

##### 6.3.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations from MCP Servers, Custom Skills, Hooks, Headless Mode, and Task Agents, plus usage patterns tailored to user behavior.

#### 6.3.2 Learning Mode & Educational Features

Transforms code generation into collaborative learning by requesting human input on design decisions and business logic; provides codebase-specific implementation insights rather than generic concepts; and offers step-by-step guided learning through interactive tooltips instead of direct control.

##### 6.3.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions for design decisions and business logic in code generation, using TodoList tracking and Learn by Doing requests with specific guidance.

##### 6.3.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code writing in learning mode, focusing on codebase-specific implementation choices rather than general programming concepts.

##### 6.3.2.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users step-by-step with fullscreen tooltip overlays instead of direct control. Activated by learning-focused phrases like 'teach me' or 'walk me through'.

#### 6.3.3 Advisor & Reviewer Tools

Provides guidance and decision support through escalation to stronger models, user-intent prediction, and structured communication channels that prioritize clarity and actionability.

##### 6.3.3.1 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the advisor tool, which forwards conversation history to a stronger reviewer model for guidance before substantive work and when stuck.

##### 6.3.3.2 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent messages and context, avoiding evaluative or Claude-voice suggestions.

##### 6.3.3.3 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to route all user-facing replies through SendUserMessage, acknowledge long-running tasks immediately, and keep messages concise with actionable information rather than filler.
