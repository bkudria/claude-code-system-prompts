# Claude Code System Prompts Index

Authoritative operational infrastructure for deploying Claude as an autonomous software engineering agent, covering everything needed to build, govern, and scale AI-driven development workflows from individual command execution to coordinated multi-agent systems.

## Table of Contents

1. [Bash & Command Execution](#1-bash-command-execution)
   1. [Execution Policies & Safety](#11-execution-policies-safety)
      1. [Bash Sandbox Policy & Failure Handling](#111-bash-sandbox-policy-failure-handling)
         1. [Bash (sandbox — evidence list header) [Tool Description]](#1111-bash-sandbox-—-evidence-list-header-tool-description)
         2. [Bash (sandbox — evidence: network failures) [Tool Description]](#1112-bash-sandbox-—-evidence-network-failures-tool-description)
         3. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1113-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
         4. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1114-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
         5. [Bash (sandbox — explain restriction) [Tool Description]](#1115-bash-sandbox-—-explain-restriction-tool-description)
         6. [Bash (sandbox — failure evidence condition) [Tool Description]](#1116-bash-sandbox-—-failure-evidence-condition-tool-description)
         7. [Bash (sandbox — mandatory mode) [Tool Description]](#1117-bash-sandbox-—-mandatory-mode-tool-description)
         8. [Bash (sandbox — no exceptions) [Tool Description]](#1118-bash-sandbox-—-no-exceptions-tool-description)
         9. [Bash (sandbox — no sensitive paths) [Tool Description]](#1119-bash-sandbox-—-no-sensitive-paths-tool-description)
         10. [Bash (sandbox — per-command) [Tool Description]](#11110-bash-sandbox-—-per-command-tool-description)
         11. [Bash (sandbox — response header) [Tool Description]](#11111-bash-sandbox-—-response-header-tool-description)
         12. [Bash (sandbox — retry without sandbox) [Tool Description]](#11112-bash-sandbox-—-retry-without-sandbox-tool-description)
         13. [Bash (sandbox — tmpdir) [Tool Description]](#11113-bash-sandbox-—-tmpdir-tool-description)
         14. [Bash (sandbox — user permission prompt) [Tool Description]](#11114-bash-sandbox-—-user-permission-prompt-tool-description)
         15. [Bash (sandbox — adjust settings) [Tool Description]](#11115-bash-sandbox-—-adjust-settings-tool-description)
         16. [Bash (sandbox — default to sandbox) [Tool Description]](#11116-bash-sandbox-—-default-to-sandbox-tool-description)
         17. [Bash (sandbox — evidence: access denied) [Tool Description]](#11117-bash-sandbox-—-evidence-access-denied-tool-description)
      2. [Bash Git Operations](#112-bash-git-operations)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#1121-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#1122-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#1123-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#1124-bash-git-—-prefer-new-commits-tool-description)
   2. [Execution Patterns & Best Practices](#12-execution-patterns-best-practices)
      1. [Bash Command Execution Behavior & Best Practices](#121-bash-command-execution-behavior-best-practices)
         1. [Bash (semicolon usage) [Tool Description]](#1211-bash-semicolon-usage-tool-description)
         2. [Bash (sequential commands) [Tool Description]](#1212-bash-sequential-commands-tool-description)
         3. [Bash (sleep — keep short) [Tool Description]](#1213-bash-sleep-—-keep-short-tool-description)
         4. [Bash (sleep — no polling background tasks) [Tool Description]](#1214-bash-sleep-—-no-polling-background-tasks-tool-description)
         5. [Bash (sleep — no retry loops) [Tool Description]](#1215-bash-sleep-—-no-retry-loops-tool-description)
         6. [Bash (sleep — run immediately) [Tool Description]](#1216-bash-sleep-—-run-immediately-tool-description)
         7. [Bash (sleep — use check commands) [Tool Description]](#1217-bash-sleep-—-use-check-commands-tool-description)
         8. [Bash (sleep — use run_in_background) [Tool Description]](#1218-bash-sleep-—-use-run_in_background-tool-description)
         9. [Bash (timeout) [Tool Description]](#1219-bash-timeout-tool-description)
         10. [Bash (verify parent directory) [Tool Description]](#12110-bash-verify-parent-directory-tool-description)
         11. [Bash (working directory) [Tool Description]](#12111-bash-working-directory-tool-description)
         12. [Bash (maintain cwd) [Tool Description]](#12112-bash-maintain-cwd-tool-description)
         13. [Bash (no newlines) [Tool Description]](#12113-bash-no-newlines-tool-description)
         14. [Bash (parallel commands) [Tool Description]](#12114-bash-parallel-commands-tool-description)
         15. [Bash (quote file paths) [Tool Description]](#12115-bash-quote-file-paths-tool-description)
         16. [Bash (overview) [Tool Description]](#12116-bash-overview-tool-description)
         17. [Bash (command description) [Tool Description]](#12117-bash-command-description-tool-description)
         18. [Bash (built-in tools note) [Tool Description]](#12118-bash-built-in-tools-note-tool-description)
         19. [Bash (prefer dedicated tools) [Tool Description]](#12119-bash-prefer-dedicated-tools-tool-description)
      2. [Bash Alternative Tool Routing](#122-bash-alternative-tool-routing)
         1. [Bash (alternative — communication) [Tool Description]](#1221-bash-alternative-—-communication-tool-description)
         2. [Bash (alternative — content search) [Tool Description]](#1222-bash-alternative-—-content-search-tool-description)
         3. [Bash (alternative — edit files) [Tool Description]](#1223-bash-alternative-—-edit-files-tool-description)
         4. [Bash (alternative — file search) [Tool Description]](#1224-bash-alternative-—-file-search-tool-description)
         5. [Bash (alternative — read files) [Tool Description]](#1225-bash-alternative-—-read-files-tool-description)
         6. [Bash (alternative — write files) [Tool Description]](#1226-bash-alternative-—-write-files-tool-description)
   3. [Bash Command Analysis](#13-bash-command-analysis)
      1. [Bash command description writer (Agent Prompt)](#131-bash-command-description-writer-agent-prompt)
      2. [Bash command file path extraction (Agent Prompt)](#132-bash-command-file-path-extraction-agent-prompt)
      3. [Bash command prefix detection (Agent Prompt)](#133-bash-command-prefix-detection-agent-prompt)
2. [Tool System & Specialized Tools](#2-tool-system-specialized-tools)
   1. [System Prompt Tool Usage Policy](#21-system-prompt-tool-usage-policy)
      1. [Tool usage (create files) [System Prompt]](#211-tool-usage-create-files-system-prompt)
      2. [Tool usage (delegate exploration) [System Prompt]](#212-tool-usage-delegate-exploration-system-prompt)
      3. [Tool usage (direct search) [System Prompt]](#213-tool-usage-direct-search-system-prompt)
      4. [Tool usage (edit files) [System Prompt]](#214-tool-usage-edit-files-system-prompt)
      5. [Tool usage (read files) [System Prompt]](#215-tool-usage-read-files-system-prompt)
      6. [Tool usage (reserve Bash) [System Prompt]](#216-tool-usage-reserve-bash-system-prompt)
      7. [Tool usage (search content) [System Prompt]](#217-tool-usage-search-content-system-prompt)
      8. [Tool usage (search files) [System Prompt]](#218-tool-usage-search-files-system-prompt)
      9. [Tool usage (skill invocation) [System Prompt]](#219-tool-usage-skill-invocation-system-prompt)
      10. [Tool usage (subagent guidance) [System Prompt]](#2110-tool-usage-subagent-guidance-system-prompt)
      11. [Tool usage (task management) [System Prompt]](#2111-tool-usage-task-management-system-prompt)
      12. [Tool Use Summary Generation (System Prompt)](#2112-tool-use-summary-generation-system-prompt)
      13. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#2113-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      14. [Tool execution denied (System Prompt)](#2114-tool-execution-denied-system-prompt)
      15. [Tool permission mode (System Prompt)](#2115-tool-permission-mode-system-prompt)
   2. [File & Content Operations](#22-file-content-operations)
      1. [ReadFile (Tool Description)](#221-readfile-tool-description)
      2. [Write (Tool Description)](#222-write-tool-description)
      3. [Edit (Tool Description)](#223-edit-tool-description)
      4. [Glob (Tool Description)](#224-glob-tool-description)
      5. [Grep (Tool Description)](#225-grep-tool-description)
   3. [Web & Browser Automation Tools](#23-web-browser-automation-tools)
      1. [Computer (Tool Description)](#231-computer-tool-description)
      2. [Computer action (Tool Parameter)](#232-computer-action-tool-parameter)
      3. [WebFetch (Tool Description)](#233-webfetch-tool-description)
      4. [WebSearch (Tool Description)](#234-websearch-tool-description)
      5. [Chrome browser MCP tools (System Prompt)](#235-chrome-browser-mcp-tools-system-prompt)
      6. [Claude in Chrome browser automation (System Prompt)](#236-claude-in-chrome-browser-automation-system-prompt)
      7. [WebFetch summarizer (Agent Prompt)](#237-webfetch-summarizer-agent-prompt)
   4. [Specialized Tool Descriptions](#24-specialized-tool-descriptions)
      1. [LSP (Tool Description)](#241-lsp-tool-description)
      2. [NotebookEdit (Tool Description)](#242-notebookedit-tool-description)
      3. [Sleep (Tool Description)](#243-sleep-tool-description)
      4. [Skill (Tool Description)](#244-skill-tool-description)
      5. [ToolSearch (Tool Description)](#245-toolsearch-tool-description)
      6. [ToolSearch extended (Tool Description)](#246-toolsearch-extended-tool-description)
      7. [AskUserQuestion (Tool Description)](#247-askuserquestion-tool-description)
3. [Planning, Workflow & Task Management](#3-planning-workflow-task-management)
   1. [Plan Mode & Session Isolation](#31-plan-mode-session-isolation)
      1. [Planning & Session Isolation](#311-planning-session-isolation)
         1. [EnterPlanMode (Tool Description)](#3111-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3112-exitplanmode-tool-description)
         3. [EnterWorktree (Tool Description)](#3113-enterworktree-tool-description)
      2. [Plan Mode Governance](#312-plan-mode-governance)
         1. [Plan mode is active (5-phase) [System Reminder]](#3121-plan-mode-is-active-5-phase-system-reminder)
         2. [Plan mode is active (iterative) [System Reminder]](#3122-plan-mode-is-active-iterative-system-reminder)
         3. [Plan mode is active (subagent) [System Reminder]](#3123-plan-mode-is-active-subagent-system-reminder)
         4. [Plan mode re-entry (System Reminder)](#3124-plan-mode-re-entry-system-reminder)
         5. [Exited plan mode (System Reminder)](#3125-exited-plan-mode-system-reminder)
         6. [Plan file reference (System Reminder)](#3126-plan-file-reference-system-reminder)
         7. [Verify plan reminder (System Reminder)](#3127-verify-plan-reminder-system-reminder)
   2. [Task Tracking & Delegation](#32-task-tracking-delegation)
      1. [Task Tracking Reminders](#321-task-tracking-reminders)
         1. [Task status (System Reminder)](#3211-task-status-system-reminder)
         2. [Task tools reminder (System Reminder)](#3212-task-tools-reminder-system-reminder)
         3. [Todo list changed (System Reminder)](#3213-todo-list-changed-system-reminder)
         4. [Todo list empty (System Reminder)](#3214-todo-list-empty-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#3215-todowrite-reminder-system-reminder)
      2. [Task & Work Delegation](#322-task-work-delegation)
         1. [TodoWrite (Tool Description)](#3221-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#3222-taskcreate-tool-description)
         3. [Task (Tool Description)](#3223-task-tool-description)
   3. [Resource & Budget Monitoring Reminders](#33-resource-budget-monitoring-reminders)
      1. [Token usage (System Reminder)](#331-token-usage-system-reminder)
      2. [USD budget (System Reminder)](#332-usd-budget-system-reminder)
      3. [Output token limit exceeded (System Reminder)](#333-output-token-limit-exceeded-system-reminder)
4. [Agent Coordination & Automation](#4-agent-coordination-automation)
   1. [Multi-Agent Orchestration](#41-multi-agent-orchestration)
      1. [Multi-Agent Team Coordination](#411-multi-agent-team-coordination)
         1. [TeammateTool (Tool Description)](#4111-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#4112-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#4113-sendmessagetool-tool-description)
         4. [TaskList (teammate workflow) [Tool Description]](#4114-tasklist-teammate-workflow-tool-description)
         5. [Team Coordination (System Reminder)](#4115-team-coordination-system-reminder)
         6. [Team Shutdown (System Reminder)](#4116-team-shutdown-system-reminder)
         7. [Teammate Communication (System Prompt)](#4117-teammate-communication-system-prompt)
      2. [Agent Invocation & Skill Reminders](#412-agent-invocation-skill-reminders)
         1. [Agent mention (System Reminder)](#4121-agent-mention-system-reminder)
         2. [Invoked skills (System Reminder)](#4122-invoked-skills-system-reminder)
         3. [Output style active (System Reminder)](#4123-output-style-active-system-reminder)
         4. [/btw side question (System Reminder)](#4124-btw-side-question-system-reminder)
   2. [Hook System Reminders & Configuration](#42-hook-system-reminders-configuration)
      1. [Hook additional context (System Reminder)](#421-hook-additional-context-system-reminder)
      2. [Hook blocking error (System Reminder)](#422-hook-blocking-error-system-reminder)
      3. [Hook JSON validation failed (System Reminder)](#423-hook-json-validation-failed-system-reminder)
      4. [Hook stopped continuation prefix (System Reminder)](#424-hook-stopped-continuation-prefix-system-reminder)
      5. [Hook stopped continuation (System Reminder)](#425-hook-stopped-continuation-system-reminder)
      6. [Hook success (System Reminder)](#426-hook-success-system-reminder)
      7. [Hooks Configuration (System Prompt)](#427-hooks-configuration-system-prompt)
   3. [Specialized Agents](#43-specialized-agents)
      1. [Codebase Exploration & Analysis Agents](#431-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#4311-explore-agent-prompt)
         2. [Plan mode (enhanced) [Agent Prompt]](#4312-plan-mode-enhanced-agent-prompt)
         3. [Task tool (Agent Prompt)](#4313-task-tool-agent-prompt)
         4. [Task tool (extra notes) [Agent Prompt]](#4314-task-tool-extra-notes-agent-prompt)
      2. [Git & GitHub Workflow Agents](#432-git-github-workflow-agents)
         1. [Quick git commit (Agent Prompt)](#4321-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#4322-quick-pr-creation-agent-prompt)
         3. [/pr-comments slash command (Agent Prompt)](#4323-pr-comments-slash-command-agent-prompt)
         4. [/review-pr slash command (Agent Prompt)](#4324-review-pr-slash-command-agent-prompt)
         5. [Session title and branch generation (Agent Prompt)](#4325-session-title-and-branch-generation-agent-prompt)
      3. [Skill Creation & Verification Workflows](#433-skill-creation-verification-workflows)
         1. [Create verifier skills (Skill)](#4331-create-verifier-skills-skill)
         2. [Verification specialist (Skill)](#4332-verification-specialist-skill)
         3. [Skillify Current Session (System Prompt)](#4333-skillify-current-session-system-prompt)
5. [Session, Memory & Context Management](#5-session-memory-context-management)
   1. [File State & IDE Context Reminders](#51-file-state-ide-context-reminders)
      1. [File modified by user or linter (System Reminder)](#511-file-modified-by-user-or-linter-system-reminder)
      2. [File opened in IDE (System Reminder)](#512-file-opened-in-ide-system-reminder)
      3. [Lines selected in IDE (System Reminder)](#513-lines-selected-in-ide-system-reminder)
      4. [File exists but empty (System Reminder)](#514-file-exists-but-empty-system-reminder)
      5. [File truncated (System Reminder)](#515-file-truncated-system-reminder)
      6. [File shorter than offset (System Reminder)](#516-file-shorter-than-offset-system-reminder)
      7. [Compact file reference (System Reminder)](#517-compact-file-reference-system-reminder)
      8. [New diagnostics detected (System Reminder)](#518-new-diagnostics-detected-system-reminder)
   2. [Memory & Knowledge Persistence](#52-memory-knowledge-persistence)
      1. [Session & Memory Management Reminders](#521-session-memory-management-reminders)
         1. [Memory file contents (System Reminder)](#5211-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#5212-nested-memory-contents-system-reminder)
         3. [Session continuation (System Reminder)](#5213-session-continuation-system-reminder)
         4. [MCP resource no content (System Reminder)](#5214-mcp-resource-no-content-system-reminder)
         5. [MCP resource no displayable content (System Reminder)](#5215-mcp-resource-no-displayable-content-system-reminder)
      2. [Session Memory & Knowledge Management](#522-session-memory-knowledge-management)
         1. [Memory selection (Agent Prompt)](#5221-memory-selection-agent-prompt)
         2. [Session memory update instructions (Agent Prompt)](#5222-session-memory-update-instructions-agent-prompt)
         3. [Update Magic Docs (Agent Prompt)](#5223-update-magic-docs-agent-prompt)
         4. [Agent memory instructions (System Prompt)](#5224-agent-memory-instructions-system-prompt)
         5. [Session memory template (Data)](#5225-session-memory-template-data)
   3. [Conversation & Session Summarization](#53-conversation-session-summarization)
      1. [Conversation summarization (Agent Prompt)](#531-conversation-summarization-agent-prompt)
      2. [Recent Message Summarization (Agent Prompt)](#532-recent-message-summarization-agent-prompt)
      3. [Context compaction summary (System Prompt)](#533-context-compaction-summary-system-prompt)
      4. [Agent Summary Generation (System Prompt)](#534-agent-summary-generation-system-prompt)
   4. [Session Context & Workspace Setup](#54-session-context-workspace-setup)
      1. [Scratchpad directory (System Prompt)](#541-scratchpad-directory-system-prompt)
      2. [Git status (System Prompt)](#542-git-status-system-prompt)
      3. [Option previewer (System Prompt)](#543-option-previewer-system-prompt)
      4. [Claude guide agent (Agent Prompt)](#544-claude-guide-agent-agent-prompt)
      5. [Debugging (Skill)](#545-debugging-skill)
6. [Claude API & SDK Documentation](#6-claude-api-sdk-documentation)
   1. [Claude API Reference Documentation (Multi-Language)](#61-claude-api-reference-documentation-multi-language)
      1. [Claude API reference — C# (Data)](#611-claude-api-reference-—-c-data)
      2. [Claude API reference — Go (Data)](#612-claude-api-reference-—-go-data)
      3. [Claude API reference — Java (Data)](#613-claude-api-reference-—-java-data)
      4. [Claude API reference — PHP (Data)](#614-claude-api-reference-—-php-data)
      5. [Claude API reference — Python (Data)](#615-claude-api-reference-—-python-data)
      6. [Claude API reference — Ruby (Data)](#616-claude-api-reference-—-ruby-data)
      7. [Claude API reference — TypeScript (Data)](#617-claude-api-reference-—-typescript-data)
   2. [Agent SDK & Tool Use Patterns](#62-agent-sdk-tool-use-patterns)
      1. [Agent SDK Reference & Patterns](#621-agent-sdk-reference-patterns)
         1. [Agent SDK reference — Python (Data)](#6211-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#6212-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#6213-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#6214-agent-sdk-patterns-—-typescript-data)
      2. [Tool Use & Streaming API References](#622-tool-use-streaming-api-references)
         1. [Tool use concepts (Data)](#6221-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6222-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6223-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#6224-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#6225-streaming-reference-—-typescript-data)
   3. [Files & Batch Processing APIs](#63-files-batch-processing-apis)
      1. [Files API reference — Python (Data)](#631-files-api-reference-—-python-data)
      2. [Files API reference — TypeScript (Data)](#632-files-api-reference-—-typescript-data)
      3. [Message Batches API reference — Python (Data)](#633-message-batches-api-reference-—-python-data)
   4. [API Guidance & Infrastructure](#64-api-guidance-infrastructure)
      1. [Claude API Development Guidance & Resources](#641-claude-api-development-guidance-resources)
         1. [Build with Claude API (Skill)](#6411-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#6412-build-with-claude-api-reference-guide-skill)
         3. [Build with Claude API (trigger) [Skill]](#6413-build-with-claude-api-trigger-skill)
         4. [Live documentation sources (Data)](#6414-live-documentation-sources-data)
         5. [HTTP error codes reference (Data)](#6415-http-error-codes-reference-data)
      2. [Claude Code Infrastructure & Deployment](#642-claude-code-infrastructure-deployment)
         1. [Claude model catalog (Data)](#6421-claude-model-catalog-data)
         2. [GitHub Actions workflow for @claude mentions (Data)](#6422-github-actions-workflow-for-claude-mentions-data)
         3. [GitHub App installation PR description (Data)](#6423-github-app-installation-pr-description-data)
         4. [Claude Code version mismatch warning (Data)](#6424-claude-code-version-mismatch-warning-data)
7. [Behavioral Standards, Analytics & Learning](#7-behavioral-standards-analytics-learning)
   1. [Task Execution & Code Quality Standards](#71-task-execution-code-quality-standards)
      1. [Doing tasks (ambitious tasks) [System Prompt]](#711-doing-tasks-ambitious-tasks-system-prompt)
      2. [Doing tasks (avoid over-engineering) [System Prompt]](#712-doing-tasks-avoid-over-engineering-system-prompt)
      3. [Doing tasks (blocked approach) [System Prompt]](#713-doing-tasks-blocked-approach-system-prompt)
      4. [Doing tasks (minimize file creation) [System Prompt]](#714-doing-tasks-minimize-file-creation-system-prompt)
      5. [Doing tasks (no compatibility hacks) [System Prompt]](#715-doing-tasks-no-compatibility-hacks-system-prompt)
      6. [Doing tasks (no premature abstractions) [System Prompt]](#716-doing-tasks-no-premature-abstractions-system-prompt)
      7. [Doing tasks (no time estimates) [System Prompt]](#717-doing-tasks-no-time-estimates-system-prompt)
      8. [Doing tasks (no unnecessary additions) [System Prompt]](#718-doing-tasks-no-unnecessary-additions-system-prompt)
      9. [Doing tasks (no unnecessary error handling) [System Prompt]](#719-doing-tasks-no-unnecessary-error-handling-system-prompt)
      10. [Doing tasks (read before modifying) [System Prompt]](#7110-doing-tasks-read-before-modifying-system-prompt)
      11. [Doing tasks (security) [System Prompt]](#7111-doing-tasks-security-system-prompt)
      12. [Doing tasks (software engineering focus) [System Prompt]](#7112-doing-tasks-software-engineering-focus-system-prompt)
      13. [Doing tasks (help and feedback) [System Prompt]](#7113-doing-tasks-help-and-feedback-system-prompt)
      14. [Executing actions with care (System Prompt)](#7114-executing-actions-with-care-system-prompt)
   2. [Output Style & Communication Standards](#72-output-style-communication-standards)
      1. [Tone and style (code references) [System Prompt]](#721-tone-and-style-code-references-system-prompt)
      2. [Tone and style (concise output — detailed) [System Prompt]](#722-tone-and-style-concise-output-—-detailed-system-prompt)
      3. [Tone and style (concise output — short) [System Prompt]](#723-tone-and-style-concise-output-—-short-system-prompt)
   3. [Security, Verification & Documentation](#73-security-verification-documentation)
      1. [Security & Verification](#731-security-verification)
         1. [/security-review slash command (Agent Prompt)](#7311-security-review-slash-command-agent-prompt)
         2. [Agent Hook (Agent Prompt)](#7312-agent-hook-agent-prompt)
         3. [Hook condition evaluator (Agent Prompt)](#7313-hook-condition-evaluator-agent-prompt)
         4. [Malware analysis after Read tool call (System Reminder)](#7314-malware-analysis-after-read-tool-call-system-reminder)
         5. [Censoring assistance with malicious activities (System Prompt)](#7315-censoring-assistance-with-malicious-activities-system-prompt)
      2. [Documentation & Configuration Generation](#732-documentation-configuration-generation)
         1. [CLAUDE.md creation (Agent Prompt)](#7321-claudemd-creation-agent-prompt)
         2. [Status line setup (Agent Prompt)](#7322-status-line-setup-agent-prompt)
         3. [Update Claude Code Config (Skill)](#7323-update-claude-code-config-skill)
         4. [Agent creation architect (Agent Prompt)](#7324-agent-creation-architect-agent-prompt)
   4. [UX, Analytics & Learning Modes](#74-ux-analytics-learning-modes)
      1. [Agent Prompt: UX & Session Management](#741-agent-prompt-ux-session-management)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#7411-prompt-suggestion-generator-v2-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#7412-session-search-assistant-agent-prompt)
         3. [User sentiment analysis (Agent Prompt)](#7413-user-sentiment-analysis-agent-prompt)
      2. [Insights & Usage Analytics](#742-insights-usage-analytics)
         1. [Insights at a glance summary (System Prompt)](#7421-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#7422-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#7423-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#7424-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#7425-insights-suggestions-system-prompt)
      3. [Learning Mode](#743-learning-mode)
         1. [Learning mode (System Prompt)](#7431-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7432-learning-mode-insights-system-prompt)

---

## 1. Bash & Command Execution

Policies, patterns, and analysis tools governing how bash commands are executed, sandboxed, chained, and routed to specialized alternatives. Covers safety guardrails for git operations and semantic analysis of command-line inputs.

### 1.1 Execution Policies & Safety

Mandatory sandbox enforcement, failure detection, and recovery protocols for bash commands, plus safety guardrails for destructive git operations.

#### 1.1.1 Bash Sandbox Policy & Failure Handling

Mandatory sandbox enforcement for all bash commands with systematic failure detection and recovery. Sandbox restrictions are non-negotiable; failures are diagnosed via network errors, permission denials, and socket issues, then resolved by retrying without sandbox (with user consent) or adjusting allowlist settings. Sensitive paths like credentials are never whitelisted.

##### 1.1.1.1 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that sandbox restrictions caused command failures.

##### 1.1.1.2 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Documents network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

##### 1.1.1.3 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "operation not permitted" errors for file and network operations as sandbox failure indicators.

##### 1.1.1.4 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Lists Unix socket connection errors as evidence of sandbox-imposed restrictions.

##### 1.1.1.5 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

##### 1.1.1.6 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with clear evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure modes.

##### 1.1.1.7 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all commands must run in sandbox mode; the `dangerouslyDisableSandbox` parameter is disabled by policy.

##### 1.1.1.8 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

##### 1.1.1.9 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

##### 1.1.1.10 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands, even after running with `dangerouslyDisableSandbox: true`.

##### 1.1.1.11 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing Claude's response strategy when sandbox-caused failures are detected.

##### 1.1.1.12 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with `dangerouslyDisableSandbox: true` upon sandbox failure without asking the user.

##### 1.1.1.13 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode, never `/tmp` directly.

##### 1.1.1.14 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

##### 1.1.1.15 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to work with the user to adjust sandbox settings if a command fails due to sandbox restrictions.

##### 1.1.1.16 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to default to running commands within the sandbox and only disable it when explicitly requested or when evidence of sandbox restriction appears.

##### 1.1.1.17 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Describes sandbox evidence indicator: access denied errors to paths outside allowed directories.

#### 1.1.2 Bash Git Operations

Git operations require explicit user consent before committing, with safety guardrails against destructive actions like force-push and hard-reset. Hooks are never skipped; new commits are preferred over amendments; pull requests are created via `gh` with proper commit message drafting and hook handling.

##### 1.1.2.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

##### 1.1.2.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, commit message drafting, hook handling, and PR creation with gh command. Emphasizes never committing without explicit user request, avoiding destructive operations, and creating new commits rather than amending.

##### 1.1.2.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude to never skip hooks or bypass signing unless explicitly requested by the user, and to investigate and fix underlying issues if hooks fail.

##### 1.1.2.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs Claude to prefer creating new commits over amending existing ones.

### 1.2 Execution Patterns & Best Practices

Efficient command chaining, parallel execution, async patterns, and guidance on when to delegate file and text operations to specialized tools instead of bash.

#### 1.2.1 Bash Command Execution Behavior & Best Practices

Efficient command execution patterns emphasizing sequential chaining with `&&` for dependent operations, parallel calls for independent tasks, and avoiding sleep-based polling in favor of background task notifications or check commands. Working directory persists across commands; file paths require quoting; dedicated tools outperform bash equivalents for file and text operations.

##### 1.2.1.1 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when commands must run sequentially but earlier command failures are acceptable.

##### 1.2.1.2 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands with `&&` in a single call when they must run sequentially.

##### 1.2.1.3 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

##### 1.2.1.4 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background`, as completion notifications will be provided.

##### 1.2.1.5 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Instructs Claude to diagnose root causes of failures rather than retrying in sleep loops.

##### 1.2.1.6 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

##### 1.2.1.7 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` rather than sleeping when polling external processes.

##### 1.2.1.8 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Instructs Claude to use `run_in_background` for long-running commands instead of sleeping, as completion notifications will be provided.

##### 1.2.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Documents optional timeout configuration in milliseconds, with configurable maximum and default timeout values.

##### 1.2.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directories exist and are correct using `ls` before creating new files or directories.

##### 1.2.1.11 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Documents that working directory persists between commands but shell state does not, with environment initialized from user profile.

##### 1.2.1.12 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain current working directory by using absolute paths and avoiding cd unless explicitly requested.

##### 1.2.1.13 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs Claude not to use newlines to separate commands in bash.

##### 1.2.1.14 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to run independent bash commands as parallel tool calls in a single message for efficiency.

##### 1.2.1.15 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs Claude to always quote file paths containing spaces with double quotes in bash commands.

##### 1.2.1.16 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Brief description stating that the Bash tool executes bash commands and returns their output.

##### 1.2.1.17 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs Claude to write clear, concise descriptions of bash commands, keeping simple commands brief and providing context for complex piped or obscure commands.

##### 1.2.1.18 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and easier review than Bash equivalents.

##### 1.2.1.19 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using bash for find, grep, cat, head, tail, sed, and awk commands, preferring dedicated tools instead for better user experience.

#### 1.2.2 Bash Alternative Tool Routing

Bash is reserved for system commands; file and text operations delegate to specialized tools. Read, Write, Edit, Glob, and Grep tools provide superior user experience and auditability compared to cat, echo, sed, find, and grep bash equivalents.

##### 1.2.2.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Directs Claude to output text directly rather than using echo or printf commands.

##### 1.2.2.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs Claude to use the Grep tool for content search instead of grep or rg commands.

##### 1.2.2.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs Claude to use the Edit tool for file editing instead of sed or awk commands.

##### 1.2.2.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs Claude to use the Glob tool for file search instead of find or ls commands.

##### 1.2.2.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs Claude to use the Read tool for file reading instead of cat, head, or tail commands.

##### 1.2.2.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs Claude to use the Write tool for file writing instead of echo or cat commands.

### 1.3 Bash Command Analysis

Extracts semantic meaning from bash commands through description generation, file path detection, and injection detection. Provides safety classification and content analysis for command-line operations.

#### 1.3.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief while adding context for complex piped or flagged operations.

#### 1.3.2 [Bash command file path extraction (Agent Prompt)](system-prompts/agent-prompt-bash-command-file-path-extraction.md)

Extracts file paths from bash command output by determining whether commands display file contents, returning paths verbatim only when content is shown.

#### 1.3.3 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety classification, returning the prefix or 'command_injection_detected' to protect against malicious execution.

---

## 2. Tool System & Specialized Tools

The complete tool routing framework directing work to the right tool, plus descriptions of specialized tools for file operations, web automation, code intelligence, and notebook manipulation.

### 2.1 System Prompt Tool Usage Policy

Comprehensive tool routing framework directing Claude to use specialized tools (Read, Write, Edit, Glob, Grep, Task, TodoWrite, Skill) for their respective domains while reserving Bash for system commands. Parallel tool calls maximize efficiency; subagents handle deep exploration; tool denials trigger workarounds or user clarification rather than retries.

#### 2.1.1 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Instructs Claude to use the Write tool for file creation instead of shell redirection or heredoc syntax.

#### 2.1.2 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Directs Claude to use the Task tool with exploration subagents for deep codebase research when simple searches prove insufficient, avoiding excessive direct queries.

#### 2.1.3 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Instructs Claude to use Glob or Grep tools directly for targeted codebase searches like finding specific files, classes, or functions.

#### 2.1.4 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs Claude to use the Edit tool for file modifications instead of sed or awk commands.

#### 2.1.5 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Instructs Claude to use the Read tool for file access instead of cat, head, tail, or sed.

#### 2.1.6 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Constrains Claude to use the Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

#### 2.1.7 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Directs Claude to use the Grep tool for searching file contents instead of grep or rg commands.

#### 2.1.8 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Instructs Claude to use the Glob tool for file discovery instead of find or ls commands.

#### 2.1.9 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Explains that slash commands invoke user-invocable skills via the Skill tool, restricting usage to documented skills only and prohibiting guessing or CLI command substitution.

#### 2.1.10 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool with specialized subagents for parallelizing queries and protecting context, while avoiding redundant work duplication.

#### 2.1.11 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite for breaking down work, tracking progress, and marking tasks complete incrementally rather than in batches.

#### 2.1.12 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Defines rules for generating concise, past-tense summaries of tool execution outcomes focused on user-visible results, limited to 8 words without agent attribution.

#### 2.1.13 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while executing dependent calls sequentially to increase efficiency.

#### 2.1.14 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides Claude to attempt reasonable workarounds when a tool is denied, avoiding malicious bypasses, and to stop and explain to the user if the capability is essential.

#### 2.1.15 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains tool permission modes and directs Claude to adjust approach rather than retry when a tool call is denied, optionally using AskUserQuestion to clarify the denial reason.

### 2.2 File & Content Operations

Tools for reading, writing, and searching files across codebases. ReadFile accesses local filesystem content including images and PDFs; Write and Edit handle file creation and modification; Glob and Grep enable fast pattern-based discovery through glob matching and regex-powered content search.

#### 2.2.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges), Jupyter notebooks, and configurable line limits for efficient file access.

#### 2.2.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem with preference for Edit tool for modifications. Avoids creating documentation files unless explicitly requested.

#### 2.2.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with support for preserving indentation, handling non-unique matches, and batch replacements across files.

#### 2.2.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like **/*.js, returning sorted results by modification time for efficient codebase searching.

#### 2.2.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting regex patterns, file filtering, multiple output modes, and multiline matching for content discovery across codebases.

### 2.3 Web & Browser Automation Tools

Tools for web interaction and content retrieval, spanning browser automation with mouse/keyboard control, web content fetching with markdown conversion, web search with source citation, and supporting infrastructure for Chrome-based automation workflows.

#### 2.3.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Enables mouse and keyboard interaction with a Chrome browser, including screenshot capture and element clicking with precise cursor positioning.

#### 2.3.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for browser automation including clicks, typing, scrolling, keyboard input, dragging, zooming, and hover interactions.

#### 2.3.3 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with AI-driven prompts. Includes 15-minute caching and automatic HTTPS upgrade.

#### 2.3.4 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff with mandatory source citation in responses. Supports domain filtering and requires current year in queries.

#### 2.3.5 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use to enable browser automation capabilities.

#### 2.3.6 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for effective browser automation using Claude in Chrome tools including GIF recording, console debugging, dialog handling, and tab context management.

#### 2.3.7 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and attribution rules for untrusted domains while allowing flexible sourcing for trusted content.

### 2.4 Specialized Tool Descriptions

Focused tools for code intelligence, notebook manipulation, execution control, skill invocation, and tool discovery—each addressing a specific capability gap in the broader toolset.

#### 2.4.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol integration for code intelligence features including go-to-definition, find-references, hover information, symbol search, and call hierarchy analysis.

#### 2.4.2 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing, inserting, or deleting cell contents with support for absolute paths and 0-indexed cell numbering.

#### 2.4.3 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input, supporting concurrent operation without holding shell processes.

#### 2.4.4 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation, with support for arguments and fully qualified names. Must be invoked before generating responses about the task.

#### 2.4.5 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite tool for loading deferred tools before calling them directly. Supports both keyword search and direct selection modes.

#### 2.4.6 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage guide for ToolSearch supporting keyword search, direct selection, and required keyword modes to discover and load deferred tools before use.

#### 2.4.7 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Instructs Claude to use AskUserQuestion for gathering user preferences, clarifying ambiguous instructions, and getting decisions during execution. In plan mode, use it to clarify requirements before finalizing the plan, not for plan approval.

---

## 3. Planning, Workflow & Task Management

Structured planning modes, task tracking, work delegation to sub-agents, and resource budget monitoring that govern how multi-step work is organized and executed.

### 3.1 Plan Mode & Session Isolation

EnterPlanMode/ExitPlanMode bracket design phases before execution; EnterWorktree creates isolated git branches. System directives enforce read-only constraints and phase-based progression.

#### 3.1.1 Planning & Session Isolation

Workflow tools for structured implementation planning and isolated development environments. EnterPlanMode and ExitPlanMode bracket a design phase where approaches are explored and approved before execution; EnterWorktree creates isolated git branches for session-scoped work.

##### 3.1.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions into plan mode for non-trivial implementation tasks, allowing exploration of the codebase and design of implementation approaches before user approval. Use for feature additions, architectural decisions, multi-file changes, or when multiple valid approaches exist.

##### 3.1.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of implementation planning and requests user approval of the plan. Use only for code implementation tasks, not research or exploration.

##### 3.1.1.3 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree for the session when explicitly requested by the user, supporting both git repositories and VCS-agnostic workflows via hooks.

#### 3.1.2 Plan Mode Governance

System directives that enforce planning workflows through read-only constraints, plan-file-only edits, and phase-based progression. Supports multiple planning patterns—parallel exploration, iterative refinement, and subagent coordination—while managing mode transitions and plan continuity across sessions.

##### 3.1.2.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Comprehensive plan mode workflow with five phases: initial understanding via parallel exploration agents, design with planning agents, review, final plan writing, and exit. Enforces read-only operations and plan-file-only edits during planning.

##### 3.1.2.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, asks user questions when needed, and converges on a final plan. Enforces read-only operations except for plan-file edits.

##### 3.1.2.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instructions for subagents: enforce read-only operations, allow plan-file edits only, answer queries comprehensively, and ask clarifying questions as needed.

##### 3.1.2.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit: read the existing plan, evaluate against current request, decide whether to continue or start fresh, and edit the plan file before exiting.

##### 3.1.2.5 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Informs Claude that plan mode has ended and execution can resume, optionally referencing the plan file location.

##### 3.1.2.6 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 3.1.2.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to call a verification tool directly after plan implementation to confirm all items were completed.

### 3.2 Task Tracking & Delegation

TodoWrite and TaskCreate structure multi-step progress tracking; Task launches sub-agents for autonomous parallel execution; internal cues encourage tool adoption for visibility.

#### 3.2.1 Task Tracking Reminders

Internal system cues that encourage use of task tracking tools for progress visibility without explicit user-facing mentions. Covers task status checks, tool usage guidance, and todo list state changes to maintain awareness of ongoing work.

##### 3.2.1.1 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

##### 3.2.1.2 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task tracking tools (create and update) for progress tracking when relevant, with instruction not to mention this reminder to the user.

##### 3.2.1.3 [Todo list changed (System Reminder)](system-prompts/system-reminder-todo-list-changed.md)

Notifies Claude of todo list changes with instruction not to mention this explicitly to the user.

##### 3.2.1.4 [Todo list empty (System Reminder)](system-prompts/system-reminder-todo-list-empty.md)

Reminds Claude that the todo list is empty and suggests using TodoWrite tool if task tracking would be beneficial, with instruction not to mention this to the user.

##### 3.2.1.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use TodoWrite tool for task tracking when relevant, with instruction not to mention this reminder to the user.

#### 3.2.2 Task & Work Delegation

Tools for organizing and delegating work across sessions and agents. TodoWrite and TaskCreate structure multi-step progress tracking with state management; Task launches specialized sub-agents for autonomous parallel execution of research, exploration, and implementation work.

##### 3.2.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with support for task states (pending, in_progress, completed), dual-form descriptions, and real-time progress tracking.

##### 3.2.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for tracking progress on complex multi-step work, with support for task descriptions, active forms, and status management.

##### 3.2.2.3 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents for complex tasks including research, exploration, and implementation. Supports background execution, resumption, and worktree isolation for autonomous parallel work.

### 3.3 Resource & Budget Monitoring Reminders

Tracks token consumption and financial expenditure against configured limits. Alerts when output tokens exceed limits and enforces work segmentation to stay within quota constraints.

#### 3.3.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

#### 3.3.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

#### 3.3.3 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Warns Claude that its response exceeded the output token limit and instructs it to break work into smaller pieces.

---

## 4. Agent Coordination & Automation

Multi-agent orchestration, lifecycle hooks, codebase exploration agents, git automation agents, and skill creation workflows that enable autonomous parallel work.

### 4.1 Multi-Agent Orchestration

Parallel agent teams with task assignment, direct messaging, graceful shutdown protocols, and agent invocation reminders for context passing and skill guidelines.

#### 4.1.1 Multi-Agent Team Coordination

Orchestrates parallel agent teams through task assignment, direct messaging, and graceful lifecycle management. Agents discover and claim tasks from shared lists while communicating via targeted messages to minimize costs, with coordinated shutdown protocols for non-interactive completion.

##### 4.1.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages team creation and coordination of multiple agents working in parallel on complex projects. Handles task assignment, idle state management, automatic message delivery, and team member discovery via config files.

##### 4.1.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all teammates to be gracefully terminated first.

##### 4.1.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables team communication through direct messages, broadcasts, shutdown requests, and plan approval responses. Direct messages are preferred over broadcasts to minimize API costs.

##### 4.1.1.4 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Guides teammates in discovering and claiming available tasks from the shared task list, with preference for lowest ID ordering to maintain context continuity.

##### 4.1.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and coordination protocols including task list management and messaging teammates by name.

##### 4.1.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Instructs Claude to shut down its team gracefully before providing final response in non-interactive mode.

##### 4.1.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool for communication with teammates, distinguishing between direct messages and broadcasts.

#### 4.1.2 Agent Invocation & Skill Reminders

System reminders that guide Claude's behavior during tool and skill invocation, including agent context passing, active skill guidelines, output formatting constraints, and side-question handling without tool use.

##### 4.1.2.1 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and instructs proper invocation with required context.

##### 4.1.2.2 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Reminds Claude to follow guidelines for skills that were invoked during the current session.

##### 4.1.2.3 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

##### 4.1.2.4 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Constrains Claude to answer side questions directly without tools, based only on conversation context, prohibiting promises of investigation or follow-up actions.

### 4.2 Hook System Reminders & Configuration

Manages lifecycle hooks that execute shell commands, prompts, or agents at key events (PreToolUse, PostToolUse, SessionStart). Reports hook outcomes including success, validation failures, blocking errors, and continuation states with detailed debugging information.

#### 4.2.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution.

#### 4.2.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

#### 4.2.3 [Hook JSON validation failed (System Reminder)](system-prompts/system-reminder-hook-json-validation-failed.md)

Reports JSON schema validation failure from hook output, displaying validation errors, expected schema, and actual output for debugging.

#### 4.2.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix label for continuation messages when a hook stops execution.

#### 4.2.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Displays a message when a hook stops continuation, including the hook name and reason.

#### 4.2.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Displays a success message from a hook with its name and content.

#### 4.2.7 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide to Claude Code hooks that execute shell commands, prompts, or agents at lifecycle events like PreToolUse, PostToolUse, and SessionStart, with JSON configuration examples and common patterns for auto-formatting, testing, and logging.

### 4.3 Specialized Agents

Read-only codebase exploration agents, git and GitHub workflow agents for commits and pull requests, and skill creation agents that capture and validate repeatable workflows.

#### 4.3.1 Codebase Exploration & Analysis Agents

Read-only agents for navigating and understanding codebases through file search and pattern matching, ranging from rapid exploration to architectural planning and multi-step task execution.

##### 4.3.1.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only codebase exploration specialist using glob patterns, regex search, and file reading to rapidly find files and answer questions about code structure and patterns.

##### 4.3.1.2 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases and designs step-by-step implementation plans with identified critical files and architectural trade-offs.

##### 4.3.1.3 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

General-purpose subagent for researching questions, searching codebases, and executing multi-step tasks using grep, glob, and read tools with absolute paths and detailed writeups.

##### 4.3.1.4 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Supplementary guidelines for Task tool usage emphasizing absolute file paths, avoiding emojis, and proper formatting without colons before tool calls.

#### 4.3.2 Git & GitHub Workflow Agents

Agents automating git and GitHub operations including commits, pull request creation and review, comment retrieval, and naming conventions—all with safety guards against destructive actions.

##### 4.3.2.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits by analyzing staged changes, drafting messages following repository conventions, and executing commits with safety protocols against amending or skipping hooks.

##### 4.3.2.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates pull requests by analyzing all changes, creating branches, committing with attribution, pushing, and optionally posting to Slack with safety protocols against force pushes and destructive operations.

##### 4.3.2.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including both PR-level and code review comments with file context, diff hunks, and threaded replies in formatted markdown.

##### 4.3.2.4 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by analyzing diffs and providing thorough code review covering quality, conventions, performance, test coverage, and security with clear sections.

##### 4.3.2.5 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles in sentence case and git branch names prefixed with 'claude/' in lowercase with dashes, keeping both under 6 and 4 words respectively.

#### 4.3.3 Skill Creation & Verification Workflows

Automates the capture and validation of repeatable workflows through multi-phase interview processes that generate reusable skills, then systematically verifies code changes across web, CLI, and API surfaces with deterministic testing plans.

##### 4.3.3.1 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically test code changes across web UI (Playwright), CLI (Tmux), and API (HTTP) surfaces with auto-detection, setup, authentication handling, and skill generation.

##### 4.3.3.2 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering verifier skills, analyzing git changes, creating deterministic verification plans, and triggering verifiers with detailed failure reporting.

##### 4.3.3.3 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a 4-round interview process to capture repeatable workflows as reusable skills, analyzing session context, confirming goals and steps, breaking down execution details, and generating a SKILL.md file with frontmatter, inputs, success criteria, and per-step annotations.

---

## 5. Session, Memory & Context Management

Mechanisms for preserving state across sessions — file monitoring, IDE context, memory persistence, conversation summarization, and workspace setup for isolated development environments.

### 5.1 File State & IDE Context Reminders

Tracks file state changes and IDE interactions to maintain contextual awareness. Reports external modifications, user selections, truncation boundaries, and diagnostic issues with precise line numbers and content references.

#### 5.1.1 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides relevant changes with line numbers for context.

#### 5.1.2 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Informs Claude that the user opened a file in the IDE, which may or may not relate to the current task.

#### 5.1.3 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines in an IDE, providing the filename and line range with content.

#### 5.1.4 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Alerts Claude that a file exists but contains no content.

#### 5.1.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a line limit and directs use of the Read tool to access additional content if needed.

#### 5.1.6 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Alerts Claude that a read offset exceeds the file length and provides the actual file line count.

#### 5.1.7 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs use of the Read tool to access it if needed.

#### 5.1.8 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues with a summary of the problems.

### 5.2 Memory & Knowledge Persistence

Preserves institutional knowledge and session state across conversations through selective memory retrieval, structured note-taking, and MCP resource synchronization.

#### 5.2.1 Session & Memory Management Reminders

Preserves session continuity across machines and interactions through memory file persistence and state synchronization. Manages MCP resource availability and nested data structures to maintain context across conversation boundaries.

##### 5.2.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by its path with type description.

##### 5.2.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

##### 5.2.1.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

##### 5.2.1.4 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource has no content available.

##### 5.2.1.5 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

#### 5.2.2 Session Memory & Knowledge Management

Manages persistent institutional knowledge across conversations through selective memory retrieval, structured note-taking, and documentation updates. Maintains session state files and architecture-focused knowledge bases while filtering for relevance and removing obsolete information.

##### 5.2.2.1 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects up to five relevant memory files from available options based on user query, returning only filenames that will clearly help Claude Code process the request.

##### 5.2.2.2 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by preserving structure and headers while adding detailed, info-dense content from conversations, maintaining section limits and focusing on actionable information.

##### 5.2.2.3 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs the magic-docs agent to update documentation files with new learnings from conversations, preserving headers while removing outdated information and maintaining a terse, architecture-focused style that avoids duplicating obvious code details.

##### 5.2.2.4 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

##### 5.2.2.5 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory `summary.md` files capturing current state, task specification, files, workflow, errors, codebase documentation, learnings, and worklog.

### 5.3 Conversation & Session Summarization

Generates structured summaries of conversations and context windows, capturing user requests, technical decisions, code changes, and pending tasks with full code context. Handles both complete conversation histories and incremental recent-message summaries, preserving actionable state for efficient session resumption.

#### 5.3.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing user requests, technical decisions, code changes, errors, and pending tasks with full code snippets and file paths for context continuity.

#### 5.3.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, capturing user requests, technical concepts, code changes, errors, and next steps with full code snippets.

#### 5.3.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt template for generating structured continuation summaries when context is compacted, preserving task state, discoveries, and next steps for efficient resumption.

#### 5.3.4 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word action summaries in present tense to track agent progress without using tools.

### 5.4 Session Context & Workspace Setup

Establishes isolated working environments and provides contextual information for Claude Code sessions, including file management, version control status, and UI enhancements. Includes guidance tools for navigating Claude's ecosystem of APIs, agents, and integrations.

#### 5.4.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a session-specific scratchpad directory for all temporary files instead of /tmp, enabling isolated working space without permission prompts.

#### 5.4.2 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git branch, main branch reference, repository status, and recent commits as a session snapshot.

#### 5.4.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for single-select questions with markdown field, displaying ASCII mockups, code snippets, or diagrams alongside option list.

#### 5.4.4 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing clear guidance on features, configuration, and integrations across all three domains.

#### 5.4.5 [Debugging (Skill)](system-prompts/skill-debugging.md)

Skill for debugging issues in Claude Code sessions by analyzing debug logs, identifying errors and warnings, and suggesting concrete fixes.

---

## 6. Claude API & SDK Documentation

Reference documentation, implementation guides, and infrastructure for building Claude applications — spanning multi-language SDKs, tool use, streaming, batch processing, and deployment.

### 6.1 Claude API Reference Documentation (Multi-Language)

Language-specific SDK references for the Claude API providing installation, client setup, and implementation patterns for core features including streaming, vision, prompt caching, and cost optimization across C#, Go, Java, PHP, Python, Ruby, and TypeScript.

#### 6.1.1 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for Claude API covering installation, client initialization, basic requests, streaming, and manual tool use with JSON schema definitions.

#### 6.1.2 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API including installation, client initialization, basic requests, streaming, and manual agentic loops for tool use.

#### 6.1.3 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference for Claude API covering installation, client initialization, basic requests, streaming, and beta tool use with annotated classes via BetaToolRunner.

#### 6.1.4 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API with installation, client initialization, basic message requests, streaming, and manual tool use via JSON schema.

#### 6.1.5 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering installation, client initialization, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, stop reasons, and cost optimization strategies.

#### 6.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for Claude API including installation, client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

#### 6.1.7 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript SDK reference covering installation, client initialization, basic requests, system prompts, vision, prompt caching, adaptive thinking, error handling, multi-turn conversations, compaction, stop reasons, and cost optimization.

### 6.2 Agent SDK & Tool Use Patterns

Complete guides for building agents with the Agent SDK, plus implementation patterns for tool use with type-safe schemas, agentic loops, and structured outputs.

#### 6.2.1 Agent SDK Reference & Patterns

Complete guides and working examples for building agents with the Agent SDK, covering tool integration, permission models, MCP support, hooks, subagents, and session management in Python and TypeScript.

##### 6.2.1.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, quick start, built-in tools, primary interfaces (query and ClaudeSDKClient), permission system, MCP support, hooks, common options, message types, subagents, and error handling with best practices.

##### 6.2.1.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, quick start, built-in tools, permission modes, MCP support with in-process tool definitions, hooks, common options, subagents, and best practices.

##### 6.2.1.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Provides practical Python code examples for Agent SDK usage including basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with full working implementations.

##### 6.2.1.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Demonstrates TypeScript Agent SDK patterns for basic agents, hooks, subagents, MCP integration, and session resumption with concise code examples.

#### 6.2.2 Tool Use & Streaming API References

Implementation guides for tool use and real-time streaming with Claude, covering tool runners with type-safe schemas, agentic loops, code execution, structured outputs, and streaming event handling across Python and TypeScript.

##### 6.2.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use with Claude API covering tool definitions, tool choice modes, tool runner vs manual loops, server-side tools (code execution, web search, computer use), memory persistence, and structured outputs with best practices.

##### 6.2.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python implementation guide for tool use including tool runner with decorators, manual agentic loops, code execution with file uploads and container reuse, memory tool integration, and structured outputs with Pydantic validation.

##### 6.2.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript implementation guide for tool use featuring tool runner with Zod schemas, manual agentic loops, code execution with file handling, memory tool helpers, and structured outputs with type-safe validation.

##### 6.2.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering quick start, async streaming, handling text/thinking/tool-use content, getting final messages, progress tracking, error handling, and stream event types.

##### 6.2.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript reference for streaming responses from the Claude API, including basic streaming, handling thinking and text blocks, tool use streaming, and best practices for real-time response display.

### 6.3 Files & Batch Processing APIs

Language-specific API references for uploading and managing files in Claude requests, plus asynchronous batch processing for cost-optimized workflows. Covers document and image handling, file lifecycle operations, and integration with prompt caching.

#### 6.3.1 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for PDFs and images, file management operations, and end-to-end examples with reusable file IDs.

#### 6.3.2 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference including file upload, document and image usage in messages, and file management operations.

#### 6.3.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for asynchronous batch processing at 50% cost, covering batch creation, polling, result retrieval, cancellation, and integration with prompt caching.

### 6.4 API Guidance & Infrastructure

Architecture selection, model discovery, documentation navigation, error resolution, model catalog with pricing, and GitHub Actions integration templates.

#### 6.4.1 Claude API Development Guidance & Resources

Comprehensive routing and reference infrastructure for building Claude applications, including architecture selection, model discovery, language-specific documentation navigation, live API sources, and error resolution. Activates when SDK imports are detected.

##### 6.4.1.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking modes, and reading guide for language-specific documentation.

##### 6.4.1.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API reference documentation with quick task routing to relevant sections for streaming, tool use, batches, files, and error handling.

##### 6.4.1.3 [Build with Claude API (trigger) [Skill]](system-prompts/skill-build-with-claude-api-trigger.md)

Activation criteria for the Build with Claude API skill, triggered when code imports Anthropic SDK or Claude API endpoints.

##### 6.4.1.4 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Curated WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories, organized by topic with extraction prompts.

##### 6.4.1.5 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with causes, fixes, and common mistakes including retry strategies.

#### 6.4.2 Claude Code Infrastructure & Deployment

Operational data for Claude Code including authoritative model catalog with pricing and context windows, GitHub Actions and App integration templates for CI/CD automation, and version management notifications.

##### 6.4.2.1 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Authoritative catalog of current, legacy, and retired Claude models with exact model IDs, aliases, context windows, max output tokens, and pricing, plus user-to-model-ID resolution table.

##### 6.4.2.2 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code to be triggered via @claude mentions in issues, PRs, and comments with configurable permissions and custom prompts.

##### 6.4.2.3 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security model, and tool configuration.

##### 6.4.2.4 [Claude Code version mismatch warning (Data)](system-prompts/data-claude-code-version-mismatch-warning.md)

Warning message displayed when Claude Code CLI version is outdated, instructing users to run `claude update` to access latest features.

---

## 7. Behavioral Standards, Analytics & Learning

Principles governing Claude's approach to software engineering tasks, communication style, security analysis, UX optimization, usage analytics, and educational interaction modes.

### 7.1 Task Execution & Code Quality Standards

Behavioral principles governing how Claude approaches software engineering tasks: prioritizing user intent over scope restrictions, maintaining simplicity and minimal changes, reading before modifying, validating at boundaries, avoiding premature abstractions, and assessing action reversibility before execution. Security and pragmatism are foundational.

#### 7.1.1 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Guidance to enable users to complete ambitious tasks by deferring to user judgment on scope rather than restricting complexity.

#### 7.1.2 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Principle to make only directly requested or clearly necessary changes, keeping solutions simple and focused.

#### 7.1.3 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Guidance to consider alternative approaches when blocked instead of brute-forcing, using AskUserQuestion to align on the right path.

#### 7.1.4 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Principle to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

#### 7.1.5 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Guidance to delete unused code completely rather than adding compatibility shims or renaming conventions.

#### 7.1.6 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Principle to avoid creating abstractions for one-time operations or hypothetical requirements, maintaining minimal necessary complexity.

#### 7.1.7 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Guidance to avoid giving time estimates or predictions, focusing on what needs to be done rather than duration.

#### 7.1.8 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Instructs Claude to implement only what was explicitly requested, avoiding refactoring, extra features, documentation, or type annotations beyond the scope of the task.

#### 7.1.9 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs Claude to validate only at system boundaries and trust internal code guarantees, avoiding defensive error handling for impossible scenarios or backwards-compatibility shims.

#### 7.1.10 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing any modifications or changes.

#### 7.1.11 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Emphasizes avoiding OWASP top 10 vulnerabilities including command injection, XSS, and SQL injection, with immediate correction if insecure code is written.

#### 7.1.12 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames user requests as software engineering tasks and interprets generic instructions within that context, applying changes directly to code rather than providing abstract answers.

#### 7.1.13 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Template for informing users about help and feedback channels.

#### 7.1.14 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to assess reversibility and blast radius of actions, requiring user confirmation for destructive, hard-to-reverse, or shared-system operations while freely executing local, reversible actions. Emphasizes investigating unexpected state rather than bypassing safety checks.

### 7.2 Output Style & Communication Standards

Guidelines for clear, efficient communication: concise polished output without filler, precise code location references using file_path:line_number format, and brevity in responses.

#### 7.2.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number pattern when referencing specific code locations for easy user navigation.

#### 7.2.2 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Directs Claude to produce polished, concise output without filler, repetition, or inner monologue while preserving important information.

#### 7.2.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

### 7.3 Security, Verification & Documentation

Security vulnerability detection, agent completion verification, documentation and configuration generation from codebase analysis, and custom agent design.

#### 7.3.1 Security & Verification

Performs focused security analysis and agent verification through vulnerability detection, malware assessment, and completion validation. Balances security rigor with authorized testing scenarios while enforcing ethical constraints on malicious code assistance.

##### 7.3.1.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities across injection, authentication, crypto, and data exposure categories with confidence scoring and false-positive filtering.

##### 7.3.1.2 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured output confirming whether an agent completed its assigned plan.

##### 7.3.1.3 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether a condition is met with optional reason for failure.

##### 7.3.1.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, while allowing analysis, reports, and behavior questions.

##### 7.3.1.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, CTF challenges, and defensive security while refusing malicious activities like DoS attacks and supply chain compromise.

#### 7.3.2 Documentation & Configuration Generation

Creates and maintains development documentation and system configurations by analyzing codebases, designing custom agents, and configuring Claude Code environments. Produces architecture-focused guides and optimized operational setups.

##### 7.3.2.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation files with common build/test commands and high-level architecture, avoiding generic practices and duplication.

##### 7.3.2.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line by converting shell PS1 configurations, handling ANSI colors and escape sequences, and updating settings.json with command-based status display.

##### 7.3.2.3 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration via settings.json, covering hooks, permissions, environment variables, and MCP server setup with careful merging of existing settings.

##### 7.3.2.4 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of high-performance custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces JSON output with agent identifier, usage conditions, and complete operational manual.

### 7.4 UX, Analytics & Learning Modes

Session discovery, sentiment-based routing, usage pattern analysis for coaching recommendations, and educational modes that involve users in design decisions.

#### 7.4.1 Agent Prompt: UX & Session Management

Enhances conversational UX by predicting user intent, enabling efficient session discovery through semantic and tag-based matching, and routing conversations based on detected user sentiment and explicit requests.

##### 7.4.1.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on conversation context, returning specific actionable suggestions that users would likely type without evaluative or Claude-voice language.

##### 7.4.1.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions by prioritizing user-assigned tags, then matching titles, branches, summaries, and transcripts with inclusive semantic matching to return ordered results.

##### 7.4.1.3 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration levels and detects explicit pull request creation requests in conversation history, outputting boolean flags for downstream routing.

#### 7.4.2 Insights & Usage Analytics

Analyzes Claude Code usage patterns to extract structured session data, identify friction points, and generate coaching-style recommendations. Synthesizes aggregated metrics into actionable insights covering current workflows, obstacles, optimization opportunities, and emerging autonomous development patterns.

##### 7.4.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for Claude Code users, using aggregated usage data to provide coaching-style feedback.

##### 7.4.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with specific examples, helping users understand recurring issues in their workflows.

##### 7.4.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, suggesting parallel agents and iterative testing patterns.

##### 7.4.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including goal categories, user satisfaction signals, and friction types, with strict guidelines for counting only explicit user requests and satisfaction indicators.

##### 7.4.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns based on aggregated session data.

#### 7.4.3 Learning Mode

Balances task completion with hands-on education by involving users in design decisions and algorithm choices, then reinforcing learning through codebase-specific explanations of implementation patterns rather than general concepts.

##### 7.4.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt that balances task completion with hands-on education by requesting user contributions for design decisions and key algorithms, using TodoList integration and Learn by Doing requests with TODO(human) markers.

##### 7.4.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code changes using formatted insight blocks, focusing on codebase-specific implementation choices rather than general programming concepts.
