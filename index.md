# Claude Code System Prompts Index

Operational guidance for building and running Claude Code agents — covering how they execute work, maintain state, coordinate with other agents, integrate with external systems, and enforce quality and safety throughout the development lifecycle.

## Table of Contents

1. [Shell, File, and Git Operations](#1-shell-file-and-git-operations)
   1. [Bash Execution and Security](#11-bash-execution-and-security)
      1. [Bash Tool Usage & Command Execution](#111-bash-tool-usage-command-execution)
         1. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
         2. [Bash (sequential commands) [Tool Description]](#1112-bash-sequential-commands-tool-description)
         3. [Bash (semicolon usage) [Tool Description]](#1113-bash-semicolon-usage-tool-description)
         4. [Bash (parallel commands) [Tool Description]](#1114-bash-parallel-commands-tool-description)
         5. [Bash (working directory) [Tool Description]](#1115-bash-working-directory-tool-description)
         6. [Bash (maintain cwd) [Tool Description]](#1116-bash-maintain-cwd-tool-description)
         7. [Bash (timeout) [Tool Description]](#1117-bash-timeout-tool-description)
         8. [Bash (sleep — keep short) [Tool Description]](#1118-bash-sleep-—-keep-short-tool-description)
         9. [Bash (sleep — no polling background tasks) [Tool Description]](#1119-bash-sleep-—-no-polling-background-tasks-tool-description)
         10. [Bash (sleep — run immediately) [Tool Description]](#11110-bash-sleep-—-run-immediately-tool-description)
         11. [Bash (sleep — use check commands) [Tool Description]](#11111-bash-sleep-—-use-check-commands-tool-description)
         12. [Bash (quote file paths) [Tool Description]](#11112-bash-quote-file-paths-tool-description)
         13. [Bash (no newlines) [Tool Description]](#11113-bash-no-newlines-tool-description)
         14. [Bash (verify parent directory) [Tool Description]](#11114-bash-verify-parent-directory-tool-description)
         15. [Bash (prefer dedicated tools) [Tool Description]](#11115-bash-prefer-dedicated-tools-tool-description)
         16. [Bash (built-in tools note) [Tool Description]](#11116-bash-built-in-tools-note-tool-description)
         17. [Bash (alternative — communication) [Tool Description]](#11117-bash-alternative-—-communication-tool-description)
         18. [Bash (alternative — content search) [Tool Description]](#11118-bash-alternative-—-content-search-tool-description)
         19. [Bash (alternative — edit files) [Tool Description]](#11119-bash-alternative-—-edit-files-tool-description)
         20. [Bash (alternative — file search) [Tool Description]](#11120-bash-alternative-—-file-search-tool-description)
         21. [Bash (alternative — read files) [Tool Description]](#11121-bash-alternative-—-read-files-tool-description)
         22. [Bash (alternative — write files) [Tool Description]](#11122-bash-alternative-—-write-files-tool-description)
         23. [One of six rules for using sleep command (System Prompt)](#11123-one-of-six-rules-for-using-sleep-command-system-prompt)
         24. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#11124-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
      2. [Bash Sandbox Security & Behavior](#112-bash-sandbox-security-behavior)
         1. [Bash (sandbox — default to sandbox) [Tool Description]](#1121-bash-sandbox-—-default-to-sandbox-tool-description)
         2. [Bash (sandbox — evidence: access denied) [Tool Description]](#1122-bash-sandbox-—-evidence-access-denied-tool-description)
         3. [Bash (sandbox — evidence list header) [Tool Description]](#1123-bash-sandbox-—-evidence-list-header-tool-description)
         4. [Bash (sandbox — evidence: network failures) [Tool Description]](#1124-bash-sandbox-—-evidence-network-failures-tool-description)
         5. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1125-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
         6. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1126-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
         7. [Bash (sandbox — explain restriction) [Tool Description]](#1127-bash-sandbox-—-explain-restriction-tool-description)
         8. [Bash (sandbox — failure evidence condition) [Tool Description]](#1128-bash-sandbox-—-failure-evidence-condition-tool-description)
         9. [Bash (sandbox — mandatory mode) [Tool Description]](#1129-bash-sandbox-—-mandatory-mode-tool-description)
         10. [Bash (sandbox — no exceptions) [Tool Description]](#11210-bash-sandbox-—-no-exceptions-tool-description)
         11. [Bash (sandbox — no sensitive paths) [Tool Description]](#11211-bash-sandbox-—-no-sensitive-paths-tool-description)
         12. [Bash (sandbox — per-command) [Tool Description]](#11212-bash-sandbox-—-per-command-tool-description)
         13. [Bash (sandbox — response header) [Tool Description]](#11213-bash-sandbox-—-response-header-tool-description)
         14. [Bash (sandbox — retry without sandbox) [Tool Description]](#11214-bash-sandbox-—-retry-without-sandbox-tool-description)
         15. [Bash (sandbox — tmpdir) [Tool Description]](#11215-bash-sandbox-—-tmpdir-tool-description)
         16. [Bash (sandbox — user permission prompt) [Tool Description]](#11216-bash-sandbox-—-user-permission-prompt-tool-description)
         17. [Bash (sandbox — adjust settings) [Tool Description]](#11217-bash-sandbox-—-adjust-settings-tool-description)
   2. [Filesystem Tools](#12-filesystem-tools)
      1. [File Operations Tool Descriptions](#121-file-operations-tool-descriptions)
         1. [ReadFile (Tool Description)](#1211-readfile-tool-description)
         2. [Write (Tool Description)](#1212-write-tool-description)
         3. [Edit (Tool Description)](#1213-edit-tool-description)
         4. [Grep (Tool Description)](#1214-grep-tool-description)
         5. [Tool usage (read files) [System Prompt]](#1215-tool-usage-read-files-system-prompt)
         6. [Tool usage (create files) [System Prompt]](#1216-tool-usage-create-files-system-prompt)
         7. [Tool usage (edit files) [System Prompt]](#1217-tool-usage-edit-files-system-prompt)
         8. [Tool usage (search content) [System Prompt]](#1218-tool-usage-search-content-system-prompt)
         9. [Tool usage (search files) [System Prompt]](#1219-tool-usage-search-files-system-prompt)
         10. [Tool usage (direct search) [System Prompt]](#12110-tool-usage-direct-search-system-prompt)
      2. [Specialized Tool Descriptions](#122-specialized-tool-descriptions)
         1. [LSP (Tool Description)](#1221-lsp-tool-description)
         2. [NotebookEdit (Tool Description)](#1222-notebookedit-tool-description)
         3. [PowerShell (Tool Description)](#1223-powershell-tool-description)
         4. [Config (Tool Description)](#1224-config-tool-description)
         5. [request_teach_access (part of teach mode) [Tool Description]](#1225-request_teach_access-part-of-teach-mode-tool-description)
         6. [AskUserQuestion (Tool Description)](#1226-askuserquestion-tool-description)
         7. [AskUserQuestion (preview field) [Tool Description]](#1227-askuserquestion-preview-field-tool-description)
         8. [Skill (Tool Description)](#1228-skill-tool-description)
         9. [PowerShell edition for 5.1 (System Prompt)](#1229-powershell-edition-for-51-system-prompt)
   3. [Git Operations & Version Control](#13-git-operations-version-control)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#131-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#132-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#133-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#134-bash-git-—-prefer-new-commits-tool-description)
      5. [Quick git commit (Agent Prompt)](#135-quick-git-commit-agent-prompt)
      6. [Quick PR creation (Agent Prompt)](#136-quick-pr-creation-agent-prompt)
      7. [EnterWorktree (Tool Description)](#137-enterworktree-tool-description)
      8. [ExitWorktree (Tool Description)](#138-exitworktree-tool-description)
      9. [Git status (System Prompt)](#139-git-status-system-prompt)
2. [Agent Orchestration and Autonomous Execution](#2-agent-orchestration-and-autonomous-execution)
   1. [Multi-Agent Coordination](#21-multi-agent-coordination)
      1. [Multi-Agent Coordination & Team Management](#211-multi-agent-coordination-team-management)
         1. [Team Coordination (System Reminder)](#2111-team-coordination-system-reminder)
         2. [Team Shutdown (System Reminder)](#2112-team-shutdown-system-reminder)
         3. [Teammate Communication (System Prompt)](#2113-teammate-communication-system-prompt)
         4. [TeammateTool (Tool Description)](#2114-teammatetool-tool-description)
         5. [SendMessageTool (Tool Description)](#2115-sendmessagetool-tool-description)
         6. [SendMessageTool (non-agent-teams) [Tool Description]](#2116-sendmessagetool-non-agent-teams-tool-description)
         7. [TeamDelete (Tool Description)](#2117-teamdelete-tool-description)
         8. [TaskList (teammate workflow) [Tool Description]](#2118-tasklist-teammate-workflow-tool-description)
         9. [Subagent delegation examples (System Prompt)](#2119-subagent-delegation-examples-system-prompt)
         10. [Fork usage guidelines (System Prompt)](#21110-fork-usage-guidelines-system-prompt)
      2. [Subagent Spawning & Task Delegation](#212-subagent-spawning-task-delegation)
         1. [Agent (usage notes) [Tool Description]](#2121-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#2122-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (subagent guidance) [System Prompt]](#2123-tool-usage-subagent-guidance-system-prompt)
         4. [Tool usage (delegate exploration) [System Prompt]](#2124-tool-usage-delegate-exploration-system-prompt)
         5. [Writing subagent prompts (System Prompt)](#2125-writing-subagent-prompts-system-prompt)
         6. [Worker fork execution (Agent Prompt)](#2126-worker-fork-execution-agent-prompt)
         7. [/batch slash command (Agent Prompt)](#2127-batch-slash-command-agent-prompt)
         8. [Agent mention (System Reminder)](#2128-agent-mention-system-reminder)
   2. [Planning and Autonomous Workflows](#22-planning-and-autonomous-workflows)
      1. [Plan Mode Workflow & Control](#221-plan-mode-workflow-control)
         1. [Plan file reference (System Reminder)](#2211-plan-file-reference-system-reminder)
         2. [Plan mode is active (5-phase) [System Reminder]](#2212-plan-mode-is-active-5-phase-system-reminder)
         3. [Plan mode is active (iterative) [System Reminder]](#2213-plan-mode-is-active-iterative-system-reminder)
         4. [Plan mode is active (subagent) [System Reminder]](#2214-plan-mode-is-active-subagent-system-reminder)
         5. [Plan mode re-entry (System Reminder)](#2215-plan-mode-re-entry-system-reminder)
         6. [Exited plan mode (System Reminder)](#2216-exited-plan-mode-system-reminder)
         7. [Ultraplan mode (System Reminder)](#2217-ultraplan-mode-system-reminder)
         8. [Verify plan reminder (System Reminder)](#2218-verify-plan-reminder-system-reminder)
         9. [EnterPlanMode (Tool Description)](#2219-enterplanmode-tool-description)
         10. [ExitPlanMode (Tool Description)](#22110-exitplanmode-tool-description)
         11. [Phase four of plan mode (System Prompt)](#22111-phase-four-of-plan-mode-system-prompt)
         12. [Remote plan mode (ultraplan) [System Prompt]](#22112-remote-plan-mode-ultraplan-system-prompt)
         13. [Remote planning session (System Prompt)](#22113-remote-planning-session-system-prompt)
         14. [Plan mode (enhanced) [Agent Prompt]](#22114-plan-mode-enhanced-agent-prompt)
      2. [Autonomous & Auto Mode Execution](#222-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#2221-auto-mode-system-prompt)
         2. [Auto mode rule reviewer (Agent Prompt)](#2222-auto-mode-rule-reviewer-agent-prompt)
         3. [Worker instructions (System Prompt)](#2223-worker-instructions-system-prompt)
         4. [Tool usage (reserve Bash) [System Prompt]](#2224-tool-usage-reserve-bash-system-prompt)
         5. [Tool usage (skill invocation) [System Prompt]](#2225-tool-usage-skill-invocation-system-prompt)
         6. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#2226-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      3. [Task & Todo Management](#223-task-todo-management)
         1. [TodoWrite (Tool Description)](#2231-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#2232-taskcreate-tool-description)
         3. [Tool usage (task management) [System Prompt]](#2233-tool-usage-task-management-system-prompt)
         4. [Task tools reminder (System Reminder)](#2234-task-tools-reminder-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#2235-todowrite-reminder-system-reminder)
3. [Session State, Memory, and Configuration](#3-session-state-memory-and-configuration)
   1. [Memory and Context Preservation](#31-memory-and-context-preservation)
      1. [Session Memory & Continuity](#311-session-memory-continuity)
         1. [Memory file contents (System Reminder)](#3111-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#3112-nested-memory-contents-system-reminder)
         3. [Session continuation (System Reminder)](#3113-session-continuation-system-reminder)
         4. [Compact file reference (System Reminder)](#3114-compact-file-reference-system-reminder)
         5. [Context compaction summary (System Prompt)](#3115-context-compaction-summary-system-prompt)
         6. [Partial compaction instructions (System Prompt)](#3116-partial-compaction-instructions-system-prompt)
         7. [Conversation summarization (Agent Prompt)](#3117-conversation-summarization-agent-prompt)
         8. [Recent Message Summarization (Agent Prompt)](#3118-recent-message-summarization-agent-prompt)
         9. [Dream memory consolidation (Agent Prompt)](#3119-dream-memory-consolidation-agent-prompt)
         10. [Determine which memory files to attach (Agent Prompt)](#31110-determine-which-memory-files-to-attach-agent-prompt)
         11. [Session memory update instructions (Agent Prompt)](#31111-session-memory-update-instructions-agent-prompt)
         12. [Session Search Assistant (Agent Prompt)](#31112-session-search-assistant-agent-prompt)
         13. [Session title and branch generation (Agent Prompt)](#31113-session-title-and-branch-generation-agent-prompt)
         14. [Coding session title generator (Agent Prompt)](#31114-coding-session-title-generator-agent-prompt)
         15. [Session memory template (Data)](#31115-session-memory-template-data)
         16. [Agent memory instructions (System Prompt)](#31116-agent-memory-instructions-system-prompt)
         17. [Description part of memory instructions (System Prompt)](#31117-description-part-of-memory-instructions-system-prompt)
         18. [Memory description of user feedback (System Prompt)](#31118-memory-description-of-user-feedback-system-prompt)
      2. [Session Resource Tracking](#312-session-resource-tracking)
         1. [Token usage (System Reminder)](#3121-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#3122-usd-budget-system-reminder)
         3. [Invoked skills (System Reminder)](#3123-invoked-skills-system-reminder)
   2. [Environment and Skill Management](#32-environment-and-skill-management)
      1. [Context & Configuration Management](#321-context-configuration-management)
         1. [Minimal mode (System Prompt)](#3211-minimal-mode-system-prompt)
         2. [Scratchpad directory (System Prompt)](#3212-scratchpad-directory-system-prompt)
         3. [Advisor tool instructions (System Prompt)](#3213-advisor-tool-instructions-system-prompt)
         4. [Option previewer (System Prompt)](#3214-option-previewer-system-prompt)
         5. [Buddy Mode (System Prompt)](#3215-buddy-mode-system-prompt)
      2. [Skills Management & Invocation](#322-skills-management-invocation)
         1. [Skillify Current Session (System Prompt)](#3221-skillify-current-session-system-prompt)
         2. [Status line setup (Agent Prompt)](#3222-status-line-setup-agent-prompt)
         3. [Debugging (Skill)](#3223-debugging-skill)
         4. [/stuck slash command (Skill)](#3224-stuck-slash-command-skill)
         5. [/btw side question (System Reminder)](#3225-btw-side-question-system-reminder)
      3. [IDE & Editor Context Reminders](#323-ide-editor-context-reminders)
         1. [Lines selected in IDE (System Reminder)](#3231-lines-selected-in-ide-system-reminder)
         2. [File opened in IDE (System Reminder)](#3232-file-opened-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#3233-file-modified-by-user-or-linter-system-reminder)
         4. [File exists but empty (System Reminder)](#3234-file-exists-but-empty-system-reminder)
         5. [File truncated (System Reminder)](#3235-file-truncated-system-reminder)
         6. [File shorter than offset (System Reminder)](#3236-file-shorter-than-offset-system-reminder)
         7. [New diagnostics detected (System Reminder)](#3237-new-diagnostics-detected-system-reminder)
4. [Code Quality, Security, and Testing](#4-code-quality-security-and-testing)
   1. [Engineering Standards and Codebase Analysis](#41-engineering-standards-and-codebase-analysis)
      1. [Code Quality & Engineering Best Practices](#411-code-quality-engineering-best-practices)
         1. [Doing tasks (no premature abstractions) [System Prompt]](#4111-doing-tasks-no-premature-abstractions-system-prompt)
         2. [Doing tasks (no unnecessary error handling) [System Prompt]](#4112-doing-tasks-no-unnecessary-error-handling-system-prompt)
         3. [Doing tasks (no unnecessary additions) [System Prompt]](#4113-doing-tasks-no-unnecessary-additions-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#4114-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no time estimates) [System Prompt]](#4115-doing-tasks-no-time-estimates-system-prompt)
         6. [Doing tasks (minimize file creation) [System Prompt]](#4116-doing-tasks-minimize-file-creation-system-prompt)
         7. [Doing tasks (read before modifying) [System Prompt]](#4117-doing-tasks-read-before-modifying-system-prompt)
         8. [Doing tasks (security) [System Prompt]](#4118-doing-tasks-security-system-prompt)
         9. [Doing tasks (software engineering focus) [System Prompt]](#4119-doing-tasks-software-engineering-focus-system-prompt)
         10. [Doing tasks (ambitious tasks) [System Prompt]](#41110-doing-tasks-ambitious-tasks-system-prompt)
         11. [Doing tasks (help and feedback) [System Prompt]](#41111-doing-tasks-help-and-feedback-system-prompt)
      2. [Codebase Exploration & Analysis](#412-codebase-exploration-analysis)
         1. [Explore (Agent Prompt)](#4121-explore-agent-prompt)
         2. [General purpose (Agent Prompt)](#4122-general-purpose-agent-prompt)
         3. [CLAUDE.md creation (Agent Prompt)](#4123-claudemd-creation-agent-prompt)
         4. [/init CLAUDE.md and skill setup (new version) [Skill]](#4124-init-claudemd-and-skill-setup-new-version-skill)
         5. [Simplify (Skill)](#4125-simplify-skill)
   2. [Security Monitoring & Safe Execution](#42-security-monitoring-safe-execution)
      1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#421-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#422-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      3. [Malware analysis after Read tool call (System Reminder)](#423-malware-analysis-after-read-tool-call-system-reminder)
      4. [Censoring assistance with malicious activities (System Prompt)](#424-censoring-assistance-with-malicious-activities-system-prompt)
      5. [Executing actions with care (System Prompt)](#425-executing-actions-with-care-system-prompt)
      6. [Bash command prefix detection (Agent Prompt)](#426-bash-command-prefix-detection-agent-prompt)
      7. [Tool execution denied (System Prompt)](#427-tool-execution-denied-system-prompt)
   3. [Verification & Testing Skills](#43-verification-testing-skills)
      1. [Verify skill (Skill)](#431-verify-skill-skill)
      2. [Verify CLI changes (example for Verify skill) [Skill]](#432-verify-cli-changes-example-for-verify-skill-skill)
      3. [Verify server/API changes (example for Verify skill) [Skill]](#433-verify-serverapi-changes-example-for-verify-skill-skill)
      4. [Create verifier skills (Skill)](#434-create-verifier-skills-skill)
      5. [Verification specialist (Agent Prompt)](#435-verification-specialist-agent-prompt)
5. [Claude API, SDKs, and External Integrations](#5-claude-api-sdks-and-external-integrations)
   1. [API and SDK Reference](#51-api-and-sdk-reference)
      1. [Claude API & SDK Reference Data](#511-claude-api-sdk-reference-data)
         1. [Claude API reference — Python (Data)](#5111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#5112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#5113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#5114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#5115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#5116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#5117-claude-api-reference-—-c-data)
         8. [Claude API reference — cURL (Data)](#5118-claude-api-reference-—-curl-data)
         9. [Agent SDK reference — Python (Data)](#5119-agent-sdk-reference-—-python-data)
         10. [Agent SDK reference — TypeScript (Data)](#51110-agent-sdk-reference-—-typescript-data)
         11. [Agent SDK patterns — Python (Data)](#51111-agent-sdk-patterns-—-python-data)
         12. [Agent SDK patterns — TypeScript (Data)](#51112-agent-sdk-patterns-—-typescript-data)
         13. [Claude model catalog (Data)](#51113-claude-model-catalog-data)
         14. [Live documentation sources (Data)](#51114-live-documentation-sources-data)
         15. [Build with Claude API (Skill)](#51115-build-with-claude-api-skill)
         16. [Build with Claude API (reference guide) [Skill]](#51116-build-with-claude-api-reference-guide-skill)
         17. [Agent Design Patterns (Skill)](#51117-agent-design-patterns-skill)
      2. [API Features Reference Data](#512-api-features-reference-data)
         1. [Streaming reference — Python (Data)](#5121-streaming-reference-—-python-data)
         2. [Streaming reference — TypeScript (Data)](#5122-streaming-reference-—-typescript-data)
         3. [Tool use concepts (Data)](#5123-tool-use-concepts-data)
         4. [Tool use reference — Python (Data)](#5124-tool-use-reference-—-python-data)
         5. [Tool use reference — TypeScript (Data)](#5125-tool-use-reference-—-typescript-data)
         6. [Files API reference — Python (Data)](#5126-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#5127-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#5128-message-batches-api-reference-—-python-data)
         9. [Prompt Caching — Design & Optimization (Data)](#5129-prompt-caching-—-design-optimization-data)
         10. [HTTP error codes reference (Data)](#51210-http-error-codes-reference-data)
   2. [Web, Browser, and CI/CD Integrations](#52-web-browser-and-cicd-integrations)
      1. [Browser & Computer Use Automation](#521-browser-computer-use-automation)
         1. [Computer (Tool Description)](#5211-computer-tool-description)
         2. [Computer action (Tool Parameter)](#5212-computer-action-tool-parameter)
         3. [WebFetch (Tool Description)](#5213-webfetch-tool-description)
         4. [WebSearch (Tool Description)](#5214-websearch-tool-description)
         5. [Computer Use MCP (Skill)](#5215-computer-use-mcp-skill)
         6. [Chrome browser MCP tools (System Prompt)](#5216-chrome-browser-mcp-tools-system-prompt)
         7. [Claude in Chrome browser automation (System Prompt)](#5217-claude-in-chrome-browser-automation-system-prompt)
         8. [WebFetch summarizer (Agent Prompt)](#5218-webfetch-summarizer-agent-prompt)
      2. [GitHub Integration & CI/CD](#522-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#5221-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#5222-github-app-installation-pr-description-data)
         3. [/review-pr slash command (Agent Prompt)](#5223-review-pr-slash-command-agent-prompt)
         4. [/security-review slash command (Agent Prompt)](#5224-security-review-slash-command-agent-prompt)
      3. [Tool Discovery & MCP Integration](#523-tool-discovery-mcp-integration)
         1. [MCP resource no content (System Reminder)](#5231-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#5232-mcp-resource-no-displayable-content-system-reminder)
         3. [ToolSearch (second part) [Tool Description]](#5233-toolsearch-second-part-tool-description)
         4. [MCP Tool Result Truncation (System Prompt)](#5234-mcp-tool-result-truncation-system-prompt)
6. [Hooks, Automation, and Agent Design](#6-hooks-automation-and-agent-design)
   1. [Hook System and Scheduling](#61-hook-system-and-scheduling)
      1. [Hook System Reminders & Configuration](#611-hook-system-reminders-configuration)
         1. [Hook additional context (System Reminder)](#6111-hook-additional-context-system-reminder)
         2. [Hook blocking error (System Reminder)](#6112-hook-blocking-error-system-reminder)
         3. [Hook stopped continuation prefix (System Reminder)](#6113-hook-stopped-continuation-prefix-system-reminder)
         4. [Hook stopped continuation (System Reminder)](#6114-hook-stopped-continuation-system-reminder)
         5. [Hook success (System Reminder)](#6115-hook-success-system-reminder)
         6. [Hooks Configuration (System Prompt)](#6116-hooks-configuration-system-prompt)
         7. [Agent Hook (Agent Prompt)](#6117-agent-hook-agent-prompt)
         8. [Hook condition evaluator (stop) [Agent Prompt]](#6118-hook-condition-evaluator-stop-agent-prompt)
         9. [update-config (7-step verification flow) [Skill]](#6119-update-config-7-step-verification-flow-skill)
         10. [Update Claude Code Config (Skill)](#61110-update-claude-code-config-skill)
      2. [Task Scheduling & Automation](#612-task-scheduling-automation)
         1. [CronCreate (Tool Description)](#6121-croncreate-tool-description)
         2. [/loop slash command (Skill)](#6122-loop-slash-command-skill)
         3. [/schedule slash command (Agent Prompt)](#6123-schedule-slash-command-agent-prompt)
   2. [Agent & Prompt Engineering](#62-agent-prompt-engineering)
      1. [Agent creation architect (Agent Prompt)](#621-agent-creation-architect-agent-prompt)
      2. [Claude guide agent (Agent Prompt)](#622-claude-guide-agent-agent-prompt)
      3. [Prompt Suggestion Generator v2 (Agent Prompt)](#623-prompt-suggestion-generator-v2-agent-prompt)
      4. [Bash command description writer (Agent Prompt)](#624-bash-command-description-writer-agent-prompt)
   3. [Communication, Analytics, and Workflow Insights](#63-communication-analytics-and-workflow-insights)
      1. [Output Style & Communication](#631-output-style-communication)
         1. [Tone and style (code references) [System Prompt]](#6311-tone-and-style-code-references-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#6312-tone-and-style-concise-output-—-short-system-prompt)
         3. [Output efficiency (System Prompt)](#6313-output-efficiency-system-prompt)
         4. [Output style active (System Reminder)](#6314-output-style-active-system-reminder)
         5. [How to use the SendUserMessage tool (System Prompt)](#6315-how-to-use-the-sendusermessage-tool-system-prompt)
         6. [Agent thread notes (System Prompt)](#6316-agent-thread-notes-system-prompt)
         7. [Agent Summary Generation (System Prompt)](#6317-agent-summary-generation-system-prompt)
      2. [Learning, Insights & Usage Analytics](#632-learning-insights-usage-analytics)
         1. [Learning mode (System Prompt)](#6321-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6322-learning-mode-insights-system-prompt)
         3. [Insights at a glance summary (System Prompt)](#6323-insights-at-a-glance-summary-system-prompt)
         4. [Insights friction analysis (System Prompt)](#6324-insights-friction-analysis-system-prompt)
         5. [Insights on the horizon (System Prompt)](#6325-insights-on-the-horizon-system-prompt)
         6. [Insights session facets extraction (System Prompt)](#6326-insights-session-facets-extraction-system-prompt)
         7. [Insights suggestions (System Prompt)](#6327-insights-suggestions-system-prompt)

---

## 1. Shell, File, and Git Operations

Core tool usage for executing commands, manipulating files, and managing version control. Covers bash execution patterns, filesystem tools, sandbox security, and safe git workflows.

### 1.1 Bash Execution and Security

Bash command execution patterns, chaining strategies, and the mandatory sandbox security model that restricts filesystem and network access.

#### 1.1.1 Bash Tool Usage & Command Execution

Bash executes shell commands with persistent working directory but reinitialized shell state across calls. Sequential commands chain with && for error-dependent execution or semicolons for order-dependent tolerance; independent commands run in parallel tool calls for performance. Best practices include quoting file paths, verifying parent directories before creation, using $TMPDIR for temporary files, keeping sleep durations short, and preferring dedicated tools (Read, Write, Glob, Grep, Edit) over bash equivalents for better user experience.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

##### 1.1.1.2 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call when commands must run sequentially and depend on each other's success.

##### 1.1.1.3 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run commands sequentially when order matters but earlier command failures are acceptable.

##### 1.1.1.4 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs running independent bash commands as parallel tool calls in a single message for optimal performance.

##### 1.1.1.5 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between bash commands, but shell state does not; the shell environment is initialized from the user's profile.

##### 1.1.1.6 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs maintaining current working directory by using absolute paths and avoiding cd unless explicitly requested.

##### 1.1.1.7 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Optionally specify a timeout in milliseconds (up to a maximum limit); commands default to a standard timeout duration if not specified.

##### 1.1.1.8 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep durations short (1-5 seconds) to avoid blocking the user when delays are necessary.

##### 1.1.1.9 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

##### 1.1.1.10 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; execute them without delay.

##### 1.1.1.11 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

When polling an external process, use check commands like `gh run view` instead of sleeping first.

##### 1.1.1.12 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs quoting file paths containing spaces with double quotes in bash commands.

##### 1.1.1.13 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs not using newlines to separate commands in bash.

##### 1.1.1.14 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, use ls to verify the parent directory exists and is the correct location.

##### 1.1.1.15 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns against using Bash for find, grep, cat, and similar read-only searching commands, directing use of dedicated tools instead for better user experience.

##### 1.1.1.16 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and easier permission review than Bash equivalents.

##### 1.1.1.17 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs outputting text directly instead of using echo or printf.

##### 1.1.1.18 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs use of the Grep tool for content search instead of grep or rg commands.

##### 1.1.1.19 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs use of the Edit tool for file editing instead of sed or awk commands.

##### 1.1.1.20 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs use of the Glob tool for file search instead of find or ls commands.

##### 1.1.1.21 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs use of the Read tool for file reading instead of cat, head, or tail commands.

##### 1.1.1.22 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs use of the Write tool for file writing instead of echo or cat commands.

##### 1.1.1.23 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Single rule: do not retry failing commands in a sleep loop — diagnose the root cause instead.

##### 1.1.1.24 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Discourages unnecessary `Start-Sleep` commands in PowerShell scripts, recommending alternatives like `run_in_background` for long-running tasks, polling with check commands instead of sleep loops, and keeping sleep durations short when unavoidable.

#### 1.1.2 Bash Sandbox Security & Behavior

Sandbox mode is the mandatory default for all bash commands, enforcing file system, network, and socket restrictions to prevent unauthorized access. Detection patterns identify sandbox-caused failures—access denied errors, network blocks, operation not permitted, and socket failures—triggering automatic retry without sandbox or user guidance on restriction management. Sensitive paths like credentials and shell configs must never be added to allowlists; temporary files use $TMPDIR instead of /tmp.

##### 1.1.2.1 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always run bash commands in sandbox mode by default; only disable sandbox when the user explicitly requests it or evidence of sandbox restriction appears.

##### 1.1.2.2 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

##### 1.1.2.3 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that sandbox restrictions caused command failures.

##### 1.1.2.4 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox network restrictions are blocking the operation.

##### 1.1.2.5 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors on file or network operations signal sandbox enforcement blocking the action.

##### 1.1.2.6 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions preventing socket-based communication.

##### 1.1.2.7 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

When a command fails due to sandbox restrictions, briefly explain which restriction caused the failure and mention the `/sandbox` command for managing restrictions.

##### 1.1.2.8 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Describes the condition when a command fails with clear evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure types.

##### 1.1.2.9 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All bash commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy and cannot be overridden.

##### 1.1.2.10 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances, with no exceptions permitted.

##### 1.1.2.11 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.

##### 1.1.2.12 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; even if a recent command ran with sandbox disabled, default to sandbox mode for all future commands.

##### 1.1.2.13 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing the response strategy when sandbox-caused command failures are detected.

##### 1.1.2.14 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry a failed command with dangerouslyDisableSandbox: true without asking the user first.

##### 1.1.2.15 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Always use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly, as TMPDIR is automatically set to a sandbox-writable directory.

##### 1.1.2.16 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling sandbox mode will trigger a user permission prompt before the command executes.

##### 1.1.2.17 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs working with user to adjust sandbox settings when commands fail due to sandbox restrictions.

### 1.2 Filesystem Tools

Specialized tools for reading, writing, editing, and searching files, with system prompts enforcing tool-based operations over shell equivalents.

#### 1.2.1 File Operations Tool Descriptions

Filesystem access and manipulation through specialized tools: reading files with image and PDF support, writing new files, editing with precise string replacement, and searching via regex-powered content discovery. System prompts enforce tool-based operations over shell commands.

##### 1.2.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the filesystem with support for images, PDFs (with page ranges for large files), Jupyter notebooks, and relative or absolute paths, defaulting to first N lines.

##### 1.2.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Instructs Claude to write files to the local filesystem, preferring the Edit tool for modifications and avoiding creation of documentation files unless explicitly requested.

##### 1.2.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with precise indentation preservation and support for bulk rename operations via replace_all parameter.

##### 1.2.1.4 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search supporting regex patterns, file filtering by glob or type, multiple output modes, and multiline matching for content discovery across the codebase.

##### 1.2.1.5 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Use the Read tool to access file contents instead of cat, head, tail, or sed.

##### 1.2.1.6 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Use the Write tool to create files instead of cat heredoc or echo redirection.

##### 1.2.1.7 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Use the Edit tool to modify files instead of sed or awk.

##### 1.2.1.8 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool to search file contents instead of grep or rg commands.

##### 1.2.1.9 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool to search for files instead of find or ls commands.

##### 1.2.1.10 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Use Glob or Grep tools directly for simple, targeted codebase searches like finding specific files, classes, or functions.

#### 1.2.2 Specialized Tool Descriptions

Documentation and operational specifications for Claude Code's integrated tools, covering code intelligence, notebook editing, command execution, configuration management, and user interaction patterns. Includes platform-specific constraints and guidance on appropriate tool usage contexts.

##### 1.2.2.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides code intelligence via Language Server Protocol operations including symbol navigation, references, hover info, call hierarchies, and implementations across the workspace.

##### 1.2.2.2 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replaces Jupyter notebook cell contents with support for insert and delete operations on 0-indexed cells using absolute file paths.

##### 1.2.2.3 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Executes PowerShell commands with configurable timeout and output limits, supporting git, npm, docker, and native cmdlets while preferring specialized tools for file operations and avoiding interactive commands.

##### 1.2.2.4 [Config (Tool Description)](system-prompts/tool-description-config.md)

Retrieves and modifies Claude Code configuration settings stored globally in ~/.claude.json or per-project in settings.json, supporting theme, editor mode, model selection, and permission settings.

##### 1.2.2.5 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Requests permission to guide users through tasks step-by-step using fullscreen tooltip overlays instead of direct automation, activated by learning-oriented phrases.

##### 1.2.2.6 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes when to ask users questions during execution to gather preferences, clarify instructions, and offer implementation choices. Specifies plan mode restrictions: use for requirement clarification before finalizing the plan, not for plan approval.

##### 1.2.2.7 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructs use of the optional preview field on single-select question options to display self-contained HTML artifacts like UI mockups, code snippets, and visual comparisons without script or style tags.

##### 1.2.2.8 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills and slash commands within conversations, matching user requests to available domain-specific capabilities with optional arguments.

##### 1.2.2.9 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 limitations: no pipeline chain operators, ternary/null-coalescing operators, stderr redirection quirks, UTF-16 LE default encoding, and PSCustomObject return types.

### 1.3 Git Operations & Version Control

Safe git workflows emphasizing commit creation, pull request management, and destructive operation avoidance. Includes isolated worktree branching for parallel development and automated commit/PR generation with built-in safety guardrails against force-pushes, hook-skipping, and unsigned commits.

#### 1.3.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs considering safer alternatives to destructive git operations like reset --hard, push --force, and checkout before executing them.

#### 1.3.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Provides detailed procedures for creating git commits and GitHub pull requests, including safety protocols (no destructive ops, no hook skipping), parallel command execution, commit message drafting, and PR body formatting with test plans. Emphasizes creating new commits over amending and never committing without explicit user request.

#### 1.3.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs never skipping hooks or bypassing signing unless explicitly requested by user, and to investigate and fix underlying issues on hook failure.

#### 1.3.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs preferring to create new commits rather than amending existing ones.

#### 1.3.5 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context from git status and diff, analyzing changes to draft appropriate commit messages while enforcing safety protocols against force-push, hook-skipping, and secret commits.

#### 1.3.6 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Streamlines pull request creation by analyzing all changes, creating commits with appropriate messages, pushing to feature branches, and using gh CLI to create or update PRs with structured bodies and safety guardrails.

#### 1.3.7 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree in .claude/worktrees/ with a new branch, switching the session into it for parallel work, or delegates to hooks for non-git repositories.

#### 1.3.8 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits an EnterWorktree session, restoring the original working directory with options to keep or remove the worktree and discard uncommitted changes.

#### 1.3.9 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Clarifies that displayed git status is a snapshot at conversation start and will not update during the session.

---

## 2. Agent Orchestration and Autonomous Execution

Frameworks for coordinating multi-agent systems, delegating tasks to subagents, and running autonomous workflows with safety guardrails. Covers swarm coordination, parallel execution, and plan-driven implementation.

### 2.1 Multi-Agent Coordination

Swarm-level coordination through shared task lists, inter-agent messaging, and subagent spawning with worktree isolation for parallel development.

#### 2.1.1 Multi-Agent Coordination & Team Management

Framework for coordinating agent swarms through shared task lists, inter-agent messaging, and graceful shutdown protocols. Enables parallel work across multiple agents with task dependencies, status reporting, and broadcast communication.

##### 2.1.1.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity and coordination responsibilities, including reading team config, checking task lists, and messaging teammates by name.

##### 2.1.1.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down team members gracefully before returning final response in non-interactive mode.

##### 2.1.1.3 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool with specific recipients or broadcasts to communicate with teammates, as text responses are not visible to the team.

##### 2.1.1.4 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages agent teams and swarms with task coordination, automatic message delivery, teammate idle states, and shared task lists at ~/.claude/tasks/{team-name}/, supporting parallel work across multiple agents.

##### 2.1.1.5 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to teammates in agent swarms with support for broadcast, legacy protocol responses for shutdown and plan approval, and TaskUpdate for status reporting.

##### 2.1.1.6 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends markdown-formatted messages with optional file attachments to the user, with status labels distinguishing reactive replies from proactive notifications.

##### 2.1.1.7 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all active members to be terminated first.

##### 2.1.1.8 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from the shared task list, preferring lowest ID tasks and respecting blockedBy dependencies.

##### 2.1.1.9 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for coordinator agents delegating tasks to subagents, handling waiting states, and reporting results without fabricating answers mid-wait.

##### 2.1.1.10 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to fork subagents (research, implementation) and enforces strict rules against reading fork output mid-flight or fabricating results, emphasizing cache reuse and trust in completion notifications.

#### 2.1.2 Subagent Spawning & Task Delegation

Patterns for delegating complex work to specialized subagents with background execution, worktree isolation, and parallel task orchestration. Includes guidance on when to spawn agents, how to write effective delegation prompts, and batch processing for large-scale codebase changes.

##### 2.1.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Provides comprehensive usage guidance for the Task/Agent tool, including subagent spawning, background execution, resumption with context preservation, worktree isolation, and parallel agent invocation patterns. Emphasizes clear task descriptions, foreground vs. background execution tradeoffs, and trusted agent outputs.

##### 2.1.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses for autonomous handling of complex multi-step tasks, with guidance on subagent type selection.

##### 2.1.2.3 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use the Task tool with specialized subagents for parallel queries or context protection, but avoid duplicating work already delegated to subagents.

##### 2.1.2.4 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Use the Task tool with exploration subagent for broad codebase research when simple directed searches are insufficient or will exceed query limits.

##### 2.1.2.5 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

When delegating to subagents, brief them like a colleague with full context—explain goals, what you've learned, and provide specific details like file paths. Never delegate understanding; include concrete changes rather than command-style instructions.

##### 2.1.2.6 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Defines behavior for forked worker sub-agents that execute directives directly without spawning further sub-agents, reporting structured results with scope, findings, files changed, and issues in under 500 words.

##### 2.1.2.7 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5-30 independent units, determining end-to-end test recipes, and spawning background worker agents in isolated git worktrees to execute changes in parallel.

##### 2.1.2.8 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

User has requested invocation of a specific agent; invoke it with required context.

### 2.2 Planning and Autonomous Workflows

Structured design-before-implementation workflows, continuous autonomous execution modes, and task tracking for managing complex coding projects.

#### 2.2.1 Plan Mode Workflow & Control

Plan mode enforces a structured design-before-implementation workflow where Claude explores codebases, produces detailed plans for user approval, and only executes after consent. Multiple variants support different contexts: iterative pair-planning with incremental updates, parallel multi-agent exploration for complex architectures, simplified subagent restrictions, and ultraplan mode with remote execution and pull request creation. Phase transitions, re-entry handling, and verification tools ensure plans remain current and complete.

##### 2.2.1.1 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant.

##### 2.2.1.2 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Comprehensive plan mode workflow with five phases: initial understanding via parallel exploration agents, design via planning agents, review, phase four execution, and plan mode exit. Enforces read-only restrictions and requires plan file updates before execution.

##### 2.2.1.3 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, asks clarifying questions, and converges on a complete plan before requesting approval. Enforces read-only restrictions except for plan file edits.

##### 2.2.1.4 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instructions for subagents enforcing read-only restrictions and allowing only plan file edits and user question clarification.

##### 2.2.1.5 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, instructing it to read the existing plan, evaluate relevance to the new request, and either continue or overwrite accordingly.

##### 2.2.1.6 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Plan mode has been exited; you can now execute edits, run tools, and take actions. Reference the plan file if needed.

##### 2.2.1.7 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Instructs Claude to create a detailed implementation plan using parallel multi-agent exploration of codebase architecture, file modifications, and risks, then incorporate critique feedback before calling ExitPlanMode. Handles post-approval implementation with remote execution and pull request creation, or plan teleportation to local terminal on rejection.

##### 2.2.1.8 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 2.2.1.9 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions into plan mode for non-trivial implementation tasks, enabling exploration of the codebase and design of implementation approaches for user approval before coding begins.

##### 2.2.1.10 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning and requests user approval by reading the plan from file, used only for implementation tasks requiring code changes, not research or exploration.

##### 2.2.1.11 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode: write concise plan to file listing file paths and changes, referencing existing functions, with single verification command, hard limit 40 lines.

##### 2.2.1.12 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions where Claude explores codebase, produces diagram-rich plans via ExitPlanMode, handles approval/rejection/teleportation feedback, and implements approved plans with pull requests.

##### 2.2.1.13 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Configures remote planning sessions where Claude explores codebase, calls ExitPlanMode with implementation plan, and handles approval, rejection with feedback, or teleportation back to user's terminal.

##### 2.2.1.14 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans by exploring codebases, identifying patterns, and producing step-by-step strategies with critical files and architectural trade-offs in read-only mode.

#### 2.2.2 Autonomous & Auto Mode Execution

Enables continuous autonomous task execution with minimal interruptions while maintaining safety guardrails. Combines action-oriented workflows with rule-based approval systems, parallel tool execution, and dedicated tool strategies to balance speed with control.

##### 2.2.2.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate action, minimal interruptions, and preference for coding over planning, while maintaining safeguards against destructive actions and data exfiltration.

##### 2.2.2.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability across allow, soft_deny, and environment categories to ensure the LLM classifier can reliably auto-approve or block tool actions.

##### 2.2.2.3 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

After implementing changes, simplify code, run unit tests, execute end-to-end tests, commit and push with a PR, then report the PR URL or reason for failure.

##### 2.2.2.4 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations; prefer dedicated tools when available.

##### 2.2.2.5 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute slash commands like /commit that invoke user-invocable skills; only use skills listed in the tool's section.

##### 2.2.2.6 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call multiple independent tools in parallel to increase efficiency, while running dependent tool calls sequentially.

#### 2.2.3 Task & Todo Management

Structured task tracking for coding work, enabling breakdown of complex projects into states (pending, in-progress, completed) with progress monitoring and team coordination. System reminders encourage consistent use during relevant work.

##### 2.2.3.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages task lists for coding sessions with pending/in_progress/completed states, requiring both imperative and present-continuous forms for each task.

##### 2.2.3.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions with subject, description, and optional activeForm fields, supporting complex multi-step work tracking and team coordination.

##### 2.2.3.3 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Use the TodoWrite tool to break down work, track progress, and mark tasks complete immediately upon finishing.

##### 2.2.3.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task tracking tools for progress management when relevant to current work.

##### 2.2.3.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use TodoWrite tool for task progress tracking when relevant to current work.

---

## 3. Session State, Memory, and Configuration

Systems for preserving context across sessions, tracking active resources, and managing Claude Code's operational environment. Covers memory consolidation, IDE state notifications, skill management, and configuration.

### 3.1 Memory and Context Preservation

Structured summaries, memory files, and consolidation workflows that preserve institutional knowledge and enable efficient resumption across context windows.

#### 3.1.1 Session Memory & Continuity

Session memory preserves context across conversations and machines through structured summaries, memory files, and consolidation workflows. Agents summarize conversations into technical details, discoveries, and next steps; update session notes during work; search prior sessions by tags and semantics; and consolidate memories into durable topic files. Memory selection, compaction instructions, and continuation summaries enable efficient resumption in future context windows while maintaining institutional knowledge.

##### 3.1.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path with type description.

##### 3.1.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Shows contents of a nested memory file structure.

##### 3.1.1.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and application state may have changed.

##### 3.1.1.4 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

A file was read before conversation summarization but is too large to include; use the Read tool to access it if needed.

##### 3.1.1.5 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs agents to write structured continuation summaries covering task overview, current state, discoveries, next steps, and context preservation to enable efficient resumption in future context windows.

##### 3.1.1.6 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Provides structured format for summarizing conversation portions with analysis tags covering intent, technical concepts, files, errors, problem-solving, user messages, pending tasks, and continuation context.

##### 3.1.1.7 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections covering primary requests, technical concepts, files modified, errors and fixes, problem-solving, user messages, pending tasks, current work, and next steps with full code snippets and technical accuracy.

##### 3.1.1.8 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions (after retained context) in nine sections covering requests, technical concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps with full code snippets.

##### 3.1.1.9 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to keep memories durable and well-organized for future sessions.

##### 3.1.1.10 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files based on user queries by matching on actual content relevance rather than surface keywords, avoiding false positives from user-profile and project-overview memories.

##### 3.1.1.11 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructs Claude to update session notes files during conversations by preserving structure (headers and italic descriptions), editing only content sections, and maintaining detailed, actionable information while respecting token limits per section.

##### 3.1.1.12 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Guides Claude to find relevant sessions by prioritizing exact tag matches, then partial tags, titles, branches, and semantic similarity, returning results ordered by relevance with inclusive matching to avoid missing relevant sessions.

##### 3.1.1.13 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Instructs Claude to generate concise session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

##### 3.1.1.14 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise, sentence-case session titles (3-7 words) that capture the main goal of a coding session in a way users can recognize in a list.

##### 3.1.1.15 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing current state, task specification, files, workflow, errors, and learnings.

##### 3.1.1.16 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Instructs agents to update memory with domain-specific discoveries during conversations, building institutional knowledge across sessions. Provides templates for code reviewers, test runners, architects, and documentation writers to record patterns, decisions, and structural insights relevant to their roles.

##### 3.1.1.17 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as information about role, goals, responsibilities, and knowledge to enable personalized assistance while avoiding negative judgments or irrelevant details.

##### 3.1.1.18 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory type for storing guidance on work approaches, emphasizing recording both successes and failures while checking for contradictions with team memories.

#### 3.1.2 Session Resource Tracking

Real-time visibility into token consumption, budget expenditure, and skill invocation during active sessions. Provides usage metrics and reminders of active constraints and guidelines.

##### 3.1.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 3.1.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget usage statistics.

##### 3.1.2.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the current session and reminds Claude to follow their guidelines.

### 3.2 Environment and Skill Management

Operational environment control, reusable skill creation and debugging, IDE state notifications, and configuration of feature availability.

#### 3.2.1 Context & Configuration Management

Systems for controlling Claude Code's operational environment, feature availability, and interactive presentation. Manages authentication, temporary file handling, advisor consultation, UI preview rendering, and companion personality generation.

##### 3.2.1.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode which disables hooks, LSP, plugins, auto-memory, and background features while requiring explicit context via CLI flags for authentication and configuration.

##### 3.2.1.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, avoiding permission prompts.

##### 3.2.1.3 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructions for using the Advisor tool, which forwards conversation history to a stronger reviewer model for guidance before substantive work and when stuck.

##### 3.2.1.4 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using optional preview fields with ASCII mockups, code snippets, diagrams, or configuration examples in monospace boxes.

##### 3.2.1.5 [Buddy Mode (System Prompt)](system-prompts/system-prompt-buddy-mode.md)

Generates memorable terminal-based coding companions with distinct personalities, single-word names, and quirky traits derived from rarity, species, stats, and inspiration words.

#### 3.2.2 Skills Management & Invocation

Mechanisms for creating, executing, and debugging reusable skills and specialized commands within Claude Code sessions. Enables conversion of repeatable workflows into persistent capabilities and provides diagnostic tools for troubleshooting session issues.

##### 3.2.2.1 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable session processes into reusable skills through 4-step interview: analyze session, confirm details via AskUserQuestion, break down steps with success criteria, and write SKILL.md with frontmatter, inputs, goals, and execution annotations.

##### 3.2.2.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell config, converting escape sequences to shell commands, and updating settings.json with custom statusLine commands that receive session context via JSON stdin.

##### 3.2.2.3 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions using debug logs, identifying errors and warnings, and providing concrete fixes or next steps.

##### 3.2.2.4 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for hung processes, checking CPU/memory/state, and posting diagnostic reports to Slack.

##### 3.2.2.5 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer a side question directly without tools in a single response; you are a separate lightweight agent with no file access or command execution capabilities.

#### 3.2.3 IDE & Editor Context Reminders

Contextual notifications about IDE state changes—file selections, external modifications, truncations, and diagnostic updates—ensuring Claude accounts for user actions and environmental changes without reverting unintended modifications.

##### 3.2.3.1 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude that the user selected specific lines in the IDE editor, with file and line range details.

##### 3.2.3.2 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

User opened a file in the IDE; this may or may not relate to the current task.

##### 3.2.3.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

A file was modified externally by the user or linter; account for these changes and do not revert unless requested.

##### 3.2.3.4 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warning that a file exists but contains no content.

##### 3.2.3.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

File was too large and truncated to the first N lines; use the Read tool to access more content if needed.

##### 3.2.3.6 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warning that the requested file read offset exceeds the file's actual length.

##### 3.2.3.7 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the codebase.

---

## 4. Code Quality, Security, and Testing

Engineering discipline, threat detection, and validation practices that ensure safe, maintainable code. Covers pragmatic coding standards, autonomous action monitoring, adversarial testing, and codebase analysis.

### 4.1 Engineering Standards and Codebase Analysis

Pragmatic engineering discipline eliminating unnecessary abstractions and scope creep, paired with read-only codebase exploration for understanding architecture before modification.

#### 4.1.1 Code Quality & Engineering Best Practices

Establishes pragmatic engineering discipline by eliminating unnecessary abstractions, premature error handling, and scope creep while enforcing code review, security awareness, and minimal file changes. Prioritizes understanding existing code before modification and matching complexity to actual requirements.

##### 4.1.1.1 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Discourages creating helpers or abstractions for one-time operations or hypothetical requirements, favoring pragmatic complexity matching actual task needs.

##### 4.1.1.2 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs agents to omit error handling for impossible scenarios and validate only at system boundaries, trusting internal code and framework guarantees.

##### 4.1.1.3 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Prevents scope creep by prohibiting unsolicited features, refactoring, docstrings, or improvements beyond what was explicitly requested.

##### 4.1.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs agents to delete unused code completely rather than adding compatibility shims, renamed variables, or removal comments.

##### 4.1.1.5 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs agents to avoid time estimates and predictions, focusing on what needs to be done rather than duration.

##### 4.1.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs agents to prefer editing existing files over creating new ones to prevent file bloat and build on prior work.

##### 4.1.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires agents to read and understand existing code before proposing or making modifications.

##### 4.1.1.8 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Emphasizes avoiding security vulnerabilities like injection, XSS, and OWASP top 10 issues, with immediate remediation if insecure code is detected.

##### 4.1.1.9 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Contextualizes user requests as software engineering tasks including bug fixes, features, refactoring, and code explanation, interpreting unclear instructions within this domain.

##### 4.1.1.10 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Empowers agents to tackle ambitious tasks by deferring to user judgment on scope rather than imposing artificial limitations.

##### 4.1.1.11 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Brief directive to inform users of help and feedback channels when requested.

#### 4.1.2 Codebase Exploration & Analysis

Read-only agents for discovering, searching, and analyzing codebases using pattern matching and configurable depth levels. Includes specialized flows for documenting architecture and conventions in CLAUDE.md, onboarding new sessions, and identifying refactoring opportunities across modified code.

##### 4.1.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file discovery via glob patterns, code search with regex, and rapid analysis at configurable thoroughness levels (quick, medium, very thorough) without any file modification capabilities.

##### 4.1.2.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks across codebases with broad search strategies and thorough analysis, avoiding unnecessary file creation.

##### 4.1.2.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation by documenting common build/test/lint commands, high-level architecture, and codebase conventions for future Claude Code sessions.

##### 4.1.2.4 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks, including codebase exploration, user interviews, iterative proposal refinement, and artifact creation.

##### 4.1.2.5 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill launching three parallel agents to identify code reuse opportunities, quality issues, and efficiency improvements across changed files.

### 4.2 Security Monitoring & Safe Execution

Comprehensive framework for monitoring and controlling autonomous agent actions through threat detection, rule-based blocking, and safe execution practices. Prevents prompt injection, credential leakage, and destructive operations while enabling authorized security testing and defensive work.

#### 4.2.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor evaluating autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with threat model covering user intent, evidence bars for authorization, and scope escalation detection.

#### 4.2.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, 30+ block rules (git destructive, code from external, production deploy, credential leakage, data exfiltration), and 6 allow exceptions for security monitoring of autonomous agent actions.

#### 4.2.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware behavior and security implications without improving or augmenting malicious code.

#### 4.2.4 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, and CTF challenges while refusing destructive techniques, DoS attacks, and detection evasion for malicious purposes. Dual-use tools require clear authorization context.

#### 4.2.5 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a risk-aware framework for action execution, requiring confirmation for destructive, hard-to-reverse, or shared-system operations while encouraging investigation over shortcuts and careful handling of unexpected state.

#### 4.2.6 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands by extracting the executable prefix (e.g., git, npm, find) while flagging unsafe patterns like backticks, command substitution, and piped exfiltration.

#### 4.2.7 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

When a tool is denied, attempt reasonable workarounds using alternative tools, but avoid malicious bypasses. If the capability is essential, stop and explain to the user what permission is needed.

### 4.3 Verification & Testing Skills

Operationalizes code validation through adversarial testing, runtime observation, and automated verification workflows. Covers CLI, API, and web UI testing with structured reporting and evidence-based verdicts rather than static code review alone.

#### 4.3.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Opinionated verification workflow for validating code changes through runtime observation, covering surface identification, handle discovery, app execution, and structured reporting.

#### 4.3.2 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Example workflow for verifying CLI changes by building, running with test arguments, capturing output, and comparing to expected behavior.

#### 4.3.3 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Example workflow for verifying server/API changes using curl, including server startup, readiness polling, request execution, and response validation.

#### 4.3.4 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Comprehensive onboarding for creating verifier skills for automated code change verification, including project auto-detection, tool setup, interactive Q&A, and skill generation for web UI, CLI, and API testing.

#### 4.3.5 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Directs Claude to adversarially test implementations by running builds, tests, linters, and probes (boundary values, concurrency, idempotency), issuing PASS/FAIL/PARTIAL verdicts with documented evidence rather than code review alone.

---

## 5. Claude API, SDKs, and External Integrations

Reference documentation and integration patterns for the Claude API, Agent SDK, browser automation, GitHub CI/CD, and MCP tool discovery. Covers multi-language SDK usage, streaming, file uploads, and web interaction.

### 5.1 API and SDK Reference

Comprehensive documentation across eight programming languages covering client initialization, streaming, tool use, prompt caching, batch processing, and error handling.

#### 5.1.1 Claude API & SDK Reference Data

Comprehensive API and Agent SDK documentation across eight programming languages (Python, TypeScript, Go, Java, Ruby, PHP, C#, cURL) plus raw HTTP, covering client initialization, streaming, tool use, prompt caching, and session management. Includes model catalog, live documentation sources, and design pattern guides for building LLM applications.

##### 5.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, stop reasons, and cost optimization strategies.

##### 5.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

##### 5.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, basic requests, streaming, tool use with BetaToolRunner and manual loops, thinking, prompt caching, server-side tools, PDF input, Files API, and context editing.

##### 5.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking, tool use with annotated classes and BetaToolRunner, effort parameter, prompt caching, structured output, and server-side tools.

##### 5.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference showing client initialization, basic requests, streaming, tool use with beta tool runner and manual loops, and prompt caching.

##### 5.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including client initialization, basic requests, streaming, tool use with BetaRunnableTool and manual loops, extended thinking, prompt caching, structured outputs, and server-side tools.

##### 5.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use with annotated classes, effort parameter, prompt caching, structured output, PDF input, server-side tools, and Files API.

##### 5.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for cURL showing basic requests, streaming, tool use loops, prompt caching, extended thinking, and required headers for Claude API calls.

##### 5.1.1.9 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, permission modes, MCP support, hooks, subagents, error handling, and session history management.

##### 5.1.1.10 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, query interface, permission modes, MCP servers, hooks, subagents, session history, and MCP server management at runtime.

##### 5.1.1.11 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Demonstrates Python Agent SDK usage patterns including basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, session resumption, and session mutations with practical code examples.

##### 5.1.1.12 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Shows TypeScript Agent SDK patterns for basic agents, hooks, subagents, MCP integration, and session resumption with concise code examples.

##### 5.1.1.13 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact IDs, aliases, context windows, and pricing; includes programmatic model discovery via Models API for live capability data.

##### 5.1.1.14 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Curated WebFetch URLs for fetching current Claude API and Agent SDK documentation from official sources, including models, features, tools, and SDKs across multiple languages.

##### 5.1.1.15 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, including language detection, surface selection, architecture overview, model defaults, thinking/effort parameters, and comprehensive reading guide.

##### 5.1.1.16 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, routing users to appropriate sections for common use cases.

##### 5.1.1.17 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide for building agents on Claude API, covering tool surface design, context management strategies, caching for agents, and composing tool calls with programmatic tool calling.

#### 5.1.2 API Features Reference Data

Technical reference for Claude API capabilities including real-time streaming with event handling, tool use patterns and server-side tools, file upload and management via Files API, asynchronous batch processing, prompt caching optimization strategies, and HTTP error handling.

##### 5.1.2.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference including sync/async streaming, handling thinking blocks and tool use, progress tracking, and error handling with event types and best practices.

##### 5.1.2.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, content types, tool runner integration, event types, and best practices for real-time response handling.

##### 5.1.2.3 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice options, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool design.

##### 5.1.2.4 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference covering tool runner, manual agentic loops, MCP conversion, code execution, memory tool, and structured outputs with code examples.

##### 5.1.2.5 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference including tool runner with Zod schemas, manual agentic loops with streaming, code execution, memory tool, and structured outputs.

##### 5.1.2.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading files, using them in messages (PDFs, images), managing files (list, delete, download), with end-to-end example of reusing file IDs across multiple queries.

##### 5.1.2.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference showing file upload, usage in messages (PDFs, images), and file management operations (list, delete, download).

##### 5.1.2.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, status polling, result retrieval, and cost optimization at 50% of standard pricing for asynchronous message processing.

##### 5.1.2.9 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Design patterns for effective prompt caching, covering prefix-match invariants, breakpoint placement, silent invalidators, and architectural guidance to maximize cache hit rates.

##### 5.1.2.10 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with common causes, fixes, and typed exception handling patterns for SDKs.

### 5.2 Web, Browser, and CI/CD Integrations

Browser automation for web interaction, GitHub-native code review and security analysis via @mentions, and MCP tool discovery for runtime schema resolution.

#### 5.2.1 Browser & Computer Use Automation

Web interaction and information retrieval through browser automation, web fetching with content analysis, and web search for current information. Covers Chrome control via mouse/keyboard, screenshot capture, HTML-to-markdown conversion, and URL-based content retrieval with caching.

##### 5.2.1.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Enables mouse and keyboard interaction with a Chrome browser, including screenshot capture and precise element clicking with cursor positioning guidance.

##### 5.2.1.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameters for Chrome browser automation, including mouse interactions (clicks, drag, hover), keyboard input, scrolling, screenshots, and zoom capabilities for web automation tasks.

##### 5.2.1.3 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a fast model, supporting URL redirects and 15-minute caching.

##### 5.2.1.4 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff with domain filtering, requiring mandatory source citations in responses using current year in queries.

##### 5.2.1.5 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for computer-use MCP tools, covering tool selection tiers (dedicated MCP, Chrome MCP, computer use), app access restrictions, link safety protocols, and financial action restrictions.

##### 5.2.1.6 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before calling them, using the `select:mcp__claude-in-chrome__<tool_name>` pattern.

##### 5.2.1.7 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with frame padding, console debugging with pattern filtering, avoiding JavaScript dialogs, preventing rabbit holes, and managing tab context across sessions.

##### 5.2.1.8 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits (125 chars) and proper attribution for untrusted domains while respecting copyright and licensing.

#### 5.2.2 GitHub Integration & CI/CD

GitHub-native automation for code review and security analysis, triggered via @mentions or slash commands. Integrates Claude Code into pull request workflows for quality assurance, vulnerability detection, and security assessment with confidence-based filtering.

##### 5.2.2.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, PRs, or comments, with optional custom prompts and tool restrictions.

##### 5.2.2.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining functionality, security considerations, and how to trigger Claude via @mentions.

##### 5.2.2.3 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Conducts thorough code reviews of GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, correctness, performance, test coverage, and security implications with concise formatted output.

##### 5.2.2.4 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review analyzing code changes for high-confidence exploitable vulnerabilities across input validation, authentication, crypto, injection, and data exposure categories, with false-positive filtering and confidence scoring to minimize noise.

#### 5.2.3 Tool Discovery & MCP Integration

Dynamic tool lookup and schema resolution for MCP resources, enabling runtime tool discovery by name or keyword matching. Includes guidance on delegating complex queries to subagents versus direct file inspection for optimal result handling.

##### 5.2.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates an MCP resource exists but contains no content.

##### 5.2.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates an MCP resource exists but has no displayable content.

##### 5.2.3.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by query matching against tool names or keywords, returning JSONSchema definitions in a functions block for dynamic tool invocation.

##### 5.2.3.4 [MCP Tool Result Truncation (System Prompt)](system-prompts/system-prompt-mcp-tool-result-truncation.md)

Guides when to use direct file queries (jq, grep) for targeted lookups versus delegating to subagents for full-file analysis and summarization.

---

## 6. Hooks, Automation, and Agent Design

Lifecycle hooks for controlling tool behavior at runtime, task scheduling infrastructure, prompt and persona engineering, and communication standards. Covers hook configuration, cron-based automation, system prompt design, and output formatting.

### 6.1 Hook System and Scheduling

Lifecycle hooks that execute commands at PermissionRequest, PreToolUse, and PostToolUse events, plus cron-based scheduling for recurring and one-shot task automation.

#### 6.1.1 Hook System Reminders & Configuration

Lifecycle hooks enable Claude Code to execute shell commands, prompts, or agents at specific events (PermissionRequest, PreToolUse, PostToolUse) with JSON input/output for controlling tool behavior, blocking actions, and injecting context. System reminders surface hook execution results—success notifications, errors, additional context, and continuation status—while configuration and verification skills provide structured workflows for constructing, testing, and validating hooks.

##### 6.1.1.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Displays additional context information from a hook execution.

##### 6.1.1.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports error details from a blocking hook command execution.

##### 6.1.1.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix message indicating a hook has stopped continuation.

##### 6.1.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Message displayed when a hook stops continuation with associated message.

##### 6.1.1.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Success notification message from a hook execution.

##### 6.1.1.6 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines how to configure lifecycle hooks in Claude Code that run shell commands, prompts, or agents at specific events (PermissionRequest, PreToolUse, PostToolUse, etc.) with JSON input/output for controlling tool behavior, blocking actions, and injecting context back to the model.

##### 6.1.1.7 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning a structured result indicating whether an agent completed its assigned plan.

##### 6.1.1.8 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks by reading conversation transcripts and judging whether user-provided conditions are satisfied, returning JSON with boolean result and quoted evidence or explanation.

##### 6.1.1.9 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks for Claude Code, including dedup checks, command construction, pipe testing, JSON validation, and live proof.

##### 6.1.1.10 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json), with careful merging of existing settings, hook construction, and validation workflows.

#### 6.1.2 Task Scheduling & Automation

Cron-based scheduling system for one-shot and recurring tasks, with user-friendly interfaces for defining intervals and remote agent execution. Supports timezone conversion, environment configuration, and load distribution across standard cron infrastructure.

##### 6.1.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron jobs using standard 5-field cron syntax in local timezone, with guidance on avoiding :00/:30 minute marks for load distribution and optional persistence to disk via durable flag.

##### 6.1.2.2 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts intervals to cron expressions, and schedules recurring tasks with automatic execution.

##### 6.1.2.3 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via Anthropic cloud API, supporting create, list, update, and run operations with timezone conversion, MCP connector attachment, and environment configuration.

### 6.2 Agent & Prompt Engineering

Tools for designing autonomous agents with expert personas, architecting system prompts, and optimizing decision-making frameworks. Includes guidance on Claude platform capabilities, predictive UX suggestions, and technical documentation generation.

#### 6.2.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of high-performance custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, and optimizing for performance with decision-making frameworks and quality controls. Outputs a JSON specification with identifier, usage conditions, and complete operational manual for autonomous expert agents.

#### 6.2.2 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, answering configuration questions, and providing actionable guidance on installation, hooks, skills, MCP servers, and agent development.

#### 6.2.3 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent context, avoiding evaluative language and Claude-voice suggestions while staying silent when the next step is unclear.

#### 6.2.4 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise descriptions of bash commands in active voice, keeping simple commands brief (5-10 words) and adding context for complex piped or flag-heavy commands to clarify intent.

### 6.3 Communication, Analytics, and Workflow Insights

Output formatting standards for concise agent communication, usage analytics that surface friction points and coaching opportunities, and educational insights for workflow improvement.

#### 6.3.1 Output Style & Communication

Standardizes agent communication through concise, direct formatting with precise code references, structured summaries, and consistent tool usage patterns. Ensures users remain informed through checkpoints and acknowledgments while maintaining clean, emoji-free output.

##### 6.3.1.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Include file_path:line_number pattern when referencing code to help users navigate to source locations.

##### 6.3.1.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Enforce short and concise responses.

##### 6.3.1.3 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning, skipping filler, and focusing text on decisions, status updates, and blockers.

##### 6.3.1.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that a specific output style is active and must be followed.

##### 6.3.1.5 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to send all user-visible replies through SendUserMessage, with acknowledgments before work and checkpoints during longer tasks to keep users informed.

##### 6.3.1.6 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads including absolute path usage, response formatting with relevant file paths, emoji avoidance, and punctuation rules for tool calls.

##### 6.3.1.7 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Defines a concise format for agent action summaries using present-tense gerunds (3-5 words) with file or function names, avoiding past tense, vagueness, and branch references.

#### 6.3.2 Learning, Insights & Usage Analytics

Educational and analytical systems that track Claude Code usage patterns, extract session insights, and guide users toward improved workflows. These capabilities identify friction points, highlight quick wins, and surface ambitious future use cases through structured analysis and coaching-oriented feedback.

##### 6.3.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Configures collaborative learning mode where Claude balances task completion with education by requesting human contributions on design decisions, using TodoList tracking, and providing insights on code patterns.

##### 6.3.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing in learning mode using formatted insight blocks with 2-3 key points specific to the codebase.

##### 6.3.2.3 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part coaching summary (what's working, hindrances, quick wins, ambitious workflows) for Claude Code usage insights reports to help users improve their interaction patterns.

##### 6.3.2.4 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with 3 categories and 2 examples each, using second-person language.

##### 6.3.2.5 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future workflows and autonomous AI-assisted development opportunities with copyable prompts for users to experiment with.

##### 6.3.2.6 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code sessions including goal categories, user satisfaction signals, and friction types with strict guidelines to count only explicit user requests and feedback.

##### 6.3.2.7 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions for Claude Code users including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns based on session data.
