# Claude Code System Prompts Index

A structured operating environment for AI-assisted software development, enabling autonomous agents to plan, execute, and validate code changes across the full engineering lifecycle while maintaining context, coordinating complex workflows, and integrating with external systems and developer toolchains.

## Table of Contents

1. [Shell Execution & File System Operations](#1-shell-execution-file-system-operations)
   1. [Bash Command Execution](#11-bash-command-execution)
      1. [Bash Tool Configuration & Behavior](#111-bash-tool-configuration-behavior)
         1. [Bash (alternative — communication) [Tool Description]](#1111-bash-alternative-—-communication-tool-description)
         2. [Bash (alternative — content search) [Tool Description]](#1112-bash-alternative-—-content-search-tool-description)
         3. [Bash (alternative — edit files) [Tool Description]](#1113-bash-alternative-—-edit-files-tool-description)
         4. [Bash (alternative — file search) [Tool Description]](#1114-bash-alternative-—-file-search-tool-description)
         5. [Bash (alternative — read files) [Tool Description]](#1115-bash-alternative-—-read-files-tool-description)
         6. [Bash (alternative — write files) [Tool Description]](#1116-bash-alternative-—-write-files-tool-description)
         7. [Bash (built-in tools note) [Tool Description]](#1117-bash-built-in-tools-note-tool-description)
         8. [Bash (command description) [Tool Description]](#1118-bash-command-description-tool-description)
         9. [Bash (maintain cwd) [Tool Description]](#1119-bash-maintain-cwd-tool-description)
         10. [Bash (no newlines) [Tool Description]](#11110-bash-no-newlines-tool-description)
         11. [Bash (overview) [Tool Description]](#11111-bash-overview-tool-description)
         12. [Bash (parallel commands) [Tool Description]](#11112-bash-parallel-commands-tool-description)
         13. [Bash (prefer dedicated tools) [Tool Description]](#11113-bash-prefer-dedicated-tools-tool-description)
         14. [Bash (quote file paths) [Tool Description]](#11114-bash-quote-file-paths-tool-description)
         15. [Bash (semicolon usage) [Tool Description]](#11115-bash-semicolon-usage-tool-description)
         16. [Bash (sequential commands) [Tool Description]](#11116-bash-sequential-commands-tool-description)
         17. [Bash (sleep — keep short) [Tool Description]](#11117-bash-sleep-—-keep-short-tool-description)
         18. [Bash (sleep — no polling background tasks) [Tool Description]](#11118-bash-sleep-—-no-polling-background-tasks-tool-description)
         19. [Bash (sleep — run immediately) [Tool Description]](#11119-bash-sleep-—-run-immediately-tool-description)
         20. [Bash (sleep — use check commands) [Tool Description]](#11120-bash-sleep-—-use-check-commands-tool-description)
         21. [Bash (timeout) [Tool Description]](#11121-bash-timeout-tool-description)
         22. [Bash (verify parent directory) [Tool Description]](#11122-bash-verify-parent-directory-tool-description)
         23. [Bash (working directory) [Tool Description]](#11123-bash-working-directory-tool-description)
         24. [Tool usage (reserve Bash) [System Prompt]](#11124-tool-usage-reserve-bash-system-prompt)
         25. [One of six rules for using sleep command (System Prompt)](#11125-one-of-six-rules-for-using-sleep-command-system-prompt)
         26. [Bash command description writer (Agent Prompt)](#11126-bash-command-description-writer-agent-prompt)
      2. [Bash Sandbox Security & Restrictions](#112-bash-sandbox-security-restrictions)
         1. [Bash (sandbox — adjust settings) [Tool Description]](#1121-bash-sandbox-—-adjust-settings-tool-description)
         2. [Bash (sandbox — default to sandbox) [Tool Description]](#1122-bash-sandbox-—-default-to-sandbox-tool-description)
         3. [Bash (sandbox — evidence: access denied) [Tool Description]](#1123-bash-sandbox-—-evidence-access-denied-tool-description)
         4. [Bash (sandbox — evidence list header) [Tool Description]](#1124-bash-sandbox-—-evidence-list-header-tool-description)
         5. [Bash (sandbox — evidence: network failures) [Tool Description]](#1125-bash-sandbox-—-evidence-network-failures-tool-description)
         6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#1126-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
         7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#1127-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
         8. [Bash (sandbox — explain restriction) [Tool Description]](#1128-bash-sandbox-—-explain-restriction-tool-description)
         9. [Bash (sandbox — failure evidence condition) [Tool Description]](#1129-bash-sandbox-—-failure-evidence-condition-tool-description)
         10. [Bash (sandbox — mandatory mode) [Tool Description]](#11210-bash-sandbox-—-mandatory-mode-tool-description)
         11. [Bash (sandbox — no exceptions) [Tool Description]](#11211-bash-sandbox-—-no-exceptions-tool-description)
         12. [Bash (sandbox — no sensitive paths) [Tool Description]](#11212-bash-sandbox-—-no-sensitive-paths-tool-description)
         13. [Bash (sandbox — per-command) [Tool Description]](#11213-bash-sandbox-—-per-command-tool-description)
         14. [Bash (sandbox — response header) [Tool Description]](#11214-bash-sandbox-—-response-header-tool-description)
         15. [Bash (sandbox — retry without sandbox) [Tool Description]](#11215-bash-sandbox-—-retry-without-sandbox-tool-description)
         16. [Bash (sandbox — tmpdir) [Tool Description]](#11216-bash-sandbox-—-tmpdir-tool-description)
         17. [Bash (sandbox — user permission prompt) [Tool Description]](#11217-bash-sandbox-—-user-permission-prompt-tool-description)
   2. [File Reading, Writing & Search Tools](#12-file-reading-writing-search-tools)
      1. [File System Tools (Read, Write, Edit, Search)](#121-file-system-tools-read-write-edit-search)
         1. [ReadFile (Tool Description)](#1211-readfile-tool-description)
         2. [Write (Tool Description)](#1212-write-tool-description)
         3. [Edit (Tool Description)](#1213-edit-tool-description)
         4. [Glob (Tool Description)](#1214-glob-tool-description)
         5. [Grep (Tool Description)](#1215-grep-tool-description)
         6. [Tool usage (search content) [System Prompt]](#1216-tool-usage-search-content-system-prompt)
         7. [Tool usage (search files) [System Prompt]](#1217-tool-usage-search-files-system-prompt)
         8. [Tool usage (create files) [System Prompt]](#1218-tool-usage-create-files-system-prompt)
         9. [Tool usage (edit files) [System Prompt]](#1219-tool-usage-edit-files-system-prompt)
         10. [Tool usage (read files) [System Prompt]](#12110-tool-usage-read-files-system-prompt)
         11. [Tool usage (direct search) [System Prompt]](#12111-tool-usage-direct-search-system-prompt)
      2. [File State & Boundary Warnings](#122-file-state-boundary-warnings)
         1. [File exists but empty (System Reminder)](#1221-file-exists-but-empty-system-reminder)
         2. [File shorter than offset (System Reminder)](#1222-file-shorter-than-offset-system-reminder)
         3. [File truncated (System Reminder)](#1223-file-truncated-system-reminder)
         4. [MCP resource no content (System Reminder)](#1224-mcp-resource-no-content-system-reminder)
         5. [MCP resource no displayable content (System Reminder)](#1225-mcp-resource-no-displayable-content-system-reminder)
      3. [Scratchpad & Temporary File Management](#123-scratchpad-temporary-file-management)
         1. [Scratchpad directory (System Prompt)](#1231-scratchpad-directory-system-prompt)
2. [Multi-Agent Coordination & Workflow Automation](#2-multi-agent-coordination-workflow-automation)
   1. [Agent Teams & Subagent Delegation](#21-agent-teams-subagent-delegation)
      1. [Multi-Agent Teams & Swarm Coordination](#211-multi-agent-teams-swarm-coordination)
         1. [TeammateTool (Tool Description)](#2111-teammatetool-tool-description)
         2. [TeamDelete (Tool Description)](#2112-teamdelete-tool-description)
         3. [SendMessageTool (Tool Description)](#2113-sendmessagetool-tool-description)
         4. [Team Coordination (System Reminder)](#2114-team-coordination-system-reminder)
         5. [Team Shutdown (System Reminder)](#2115-team-shutdown-system-reminder)
         6. [Teammate Communication (System Prompt)](#2116-teammate-communication-system-prompt)
         7. [Team memory content display (System Prompt)](#2117-team-memory-content-display-system-prompt)
      2. [Subagent Delegation & Orchestration](#212-subagent-delegation-orchestration)
         1. [Agent (usage notes) [Tool Description]](#2121-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#2122-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (subagent guidance) [System Prompt]](#2123-tool-usage-subagent-guidance-system-prompt)
         4. [Writing subagent prompts (System Prompt)](#2124-writing-subagent-prompts-system-prompt)
         5. [Fork usage guidelines (System Prompt)](#2125-fork-usage-guidelines-system-prompt)
         6. [Subagent delegation examples (System Prompt)](#2126-subagent-delegation-examples-system-prompt)
         7. [Tool usage (delegate exploration) [System Prompt]](#2127-tool-usage-delegate-exploration-system-prompt)
         8. [Worker fork execution (Agent Prompt)](#2128-worker-fork-execution-agent-prompt)
         9. [Explore (Agent Prompt)](#2129-explore-agent-prompt)
         10. [Explore strengths and guidelines (Agent Prompt)](#21210-explore-strengths-and-guidelines-agent-prompt)
      3. [Agent Communication & Invocation](#213-agent-communication-invocation)
         1. [Agent mention (System Reminder)](#2131-agent-mention-system-reminder)
         2. [/btw side question (System Reminder)](#2132-btw-side-question-system-reminder)
   2. [Hooks, Commands & Background Scheduling](#22-hooks-commands-background-scheduling)
      1. [Hooks System & Lifecycle Events](#221-hooks-system-lifecycle-events)
         1. [Hooks Configuration (System Prompt)](#2211-hooks-configuration-system-prompt)
         2. [Hook additional context (System Reminder)](#2212-hook-additional-context-system-reminder)
         3. [Hook blocking error (System Reminder)](#2213-hook-blocking-error-system-reminder)
         4. [Hook stopped continuation prefix (System Reminder)](#2214-hook-stopped-continuation-prefix-system-reminder)
         5. [Hook stopped continuation (System Reminder)](#2215-hook-stopped-continuation-system-reminder)
         6. [Hook success (System Reminder)](#2216-hook-success-system-reminder)
         7. [Agent Hook (Agent Prompt)](#2217-agent-hook-agent-prompt)
         8. [Hook condition evaluator (Agent Prompt)](#2218-hook-condition-evaluator-agent-prompt)
      2. [Skills System & Slash Commands](#222-skills-system-slash-commands)
         1. [Skill (Tool Description)](#2221-skill-tool-description)
         2. [Tool usage (skill invocation) [System Prompt]](#2222-tool-usage-skill-invocation-system-prompt)
         3. [Invoked skills (System Reminder)](#2223-invoked-skills-system-reminder)
         4. [Skillify Current Session (System Prompt)](#2224-skillify-current-session-system-prompt)
         5. [/loop slash command (Skill)](#2225-loop-slash-command-skill)
         6. [/stuck slash command (Skill)](#2226-stuck-slash-command-skill)
         7. [Simplify (Skill)](#2227-simplify-skill)
         8. [Debugging (Skill)](#2228-debugging-skill)
         9. [Update Claude Code Config (Skill)](#2229-update-claude-code-config-skill)
         10. [/batch slash command (Agent Prompt)](#22210-batch-slash-command-agent-prompt)
      3. [Scheduling & Background Tasks](#223-scheduling-background-tasks)
         1. [CronCreate (Tool Description)](#2231-croncreate-tool-description)
         2. [Sleep (Tool Description)](#2232-sleep-tool-description)
3. [Planning, Task Execution & External Tool Access](#3-planning-task-execution-external-tool-access)
   1. [Planning Workflows & Task Tracking](#31-planning-workflows-task-tracking)
      1. [Planning Mode & Implementation Design](#311-planning-mode-implementation-design)
         1. [EnterPlanMode (Tool Description)](#3111-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#3112-exitplanmode-tool-description)
         3. [Exited plan mode (System Reminder)](#3113-exited-plan-mode-system-reminder)
         4. [Plan file reference (System Reminder)](#3114-plan-file-reference-system-reminder)
         5. [Plan mode is active (5-phase) [System Reminder]](#3115-plan-mode-is-active-5-phase-system-reminder)
         6. [Plan mode is active (iterative) [System Reminder]](#3116-plan-mode-is-active-iterative-system-reminder)
         7. [Plan mode is active (subagent) [System Reminder]](#3117-plan-mode-is-active-subagent-system-reminder)
         8. [Plan mode re-entry (System Reminder)](#3118-plan-mode-re-entry-system-reminder)
         9. [Verify plan reminder (System Reminder)](#3119-verify-plan-reminder-system-reminder)
         10. [Phase four of plan mode (System Prompt)](#31110-phase-four-of-plan-mode-system-prompt)
         11. [Plan mode (enhanced) [Agent Prompt]](#31111-plan-mode-enhanced-agent-prompt)
      2. [Task Management & Progress Tracking](#312-task-management-progress-tracking)
         1. [TodoWrite (Tool Description)](#3121-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#3122-taskcreate-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#3123-tasklist-teammate-workflow-tool-description)
         4. [Tool usage (task management) [System Prompt]](#3124-tool-usage-task-management-system-prompt)
         5. [Task status (System Reminder)](#3125-task-status-system-reminder)
         6. [Task tools reminder (System Reminder)](#3126-task-tools-reminder-system-reminder)
         7. [TodoWrite reminder (System Reminder)](#3127-todowrite-reminder-system-reminder)
      3. [Autonomous Execution & User Communication](#313-autonomous-execution-user-communication)
         1. [Auto mode (System Prompt)](#3131-auto-mode-system-prompt)
         2. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#3132-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         3. [How to use the SendUserMessage tool (System Prompt)](#3133-how-to-use-the-sendusermessage-tool-system-prompt)
         4. [SendMessageTool (non-agent-teams) [Tool Description]](#3134-sendmessagetool-non-agent-teams-tool-description)
   2. [Safe Execution, Browser & Web Access](#32-safe-execution-browser-web-access)
      1. [Safe Action Execution & Risk Management](#321-safe-action-execution-risk-management)
         1. [Executing actions with care (System Prompt)](#3211-executing-actions-with-care-system-prompt)
         2. [Tool execution denied (System Prompt)](#3212-tool-execution-denied-system-prompt)
         3. [System section (System Prompt)](#3213-system-section-system-prompt)
         4. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#3214-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         5. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#3215-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      2. [Browser Automation & Computer Use](#322-browser-automation-computer-use)
         1. [Chrome browser MCP tools (System Prompt)](#3221-chrome-browser-mcp-tools-system-prompt)
         2. [Claude in Chrome browser automation (System Prompt)](#3222-claude-in-chrome-browser-automation-system-prompt)
         3. [Computer (Tool Description)](#3223-computer-tool-description)
         4. [Computer action (Tool Parameter)](#3224-computer-action-tool-parameter)
      3. [Web Search & Content Fetching](#323-web-search-content-fetching)
         1. [WebSearch (Tool Description)](#3231-websearch-tool-description)
         2. [WebFetch (Tool Description)](#3232-webfetch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#3233-webfetch-summarizer-agent-prompt)
4. [Code Quality, Review & Version Control](#4-code-quality-review-version-control)
   1. [Engineering Discipline & Verification](#41-engineering-discipline-verification)
      1. [Code Quality & Engineering Discipline](#411-code-quality-engineering-discipline)
         1. [Doing tasks (avoid over-engineering) [System Prompt]](#4111-doing-tasks-avoid-over-engineering-system-prompt)
         2. [Doing tasks (blocked approach) [System Prompt]](#4112-doing-tasks-blocked-approach-system-prompt)
         3. [Doing tasks (minimize file creation) [System Prompt]](#4113-doing-tasks-minimize-file-creation-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#4114-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Doing tasks (no premature abstractions) [System Prompt]](#4115-doing-tasks-no-premature-abstractions-system-prompt)
         6. [Doing tasks (no unnecessary additions) [System Prompt]](#4116-doing-tasks-no-unnecessary-additions-system-prompt)
         7. [Doing tasks (no unnecessary error handling) [System Prompt]](#4117-doing-tasks-no-unnecessary-error-handling-system-prompt)
         8. [Doing tasks (read before modifying) [System Prompt]](#4118-doing-tasks-read-before-modifying-system-prompt)
         9. [Doing tasks (security) [System Prompt]](#4119-doing-tasks-security-system-prompt)
         10. [Doing tasks (software engineering focus) [System Prompt]](#41110-doing-tasks-software-engineering-focus-system-prompt)
         11. [Doing tasks (ambitious tasks) [System Prompt]](#41111-doing-tasks-ambitious-tasks-system-prompt)
         12. [Doing tasks (no time estimates) [System Prompt]](#41112-doing-tasks-no-time-estimates-system-prompt)
         13. [Doing tasks (help and feedback) [System Prompt]](#41113-doing-tasks-help-and-feedback-system-prompt)
      2. [Verification & Test Execution](#412-verification-test-execution)
         1. [Verification specialist (Agent Prompt)](#4121-verification-specialist-agent-prompt)
         2. [Verification specialist (Skill)](#4122-verification-specialist-skill)
         3. [Create verifier skills (Skill)](#4123-create-verifier-skills-skill)
         4. [Worker instructions (System Prompt)](#4124-worker-instructions-system-prompt)
   2. [Code Review, Security Analysis & Git](#42-code-review-security-analysis-git)
      1. [Code Review & Security Analysis](#421-code-review-security-analysis)
         1. [/review-pr slash command (Agent Prompt)](#4211-review-pr-slash-command-agent-prompt)
         2. [/security-review slash command (Agent Prompt)](#4212-security-review-slash-command-agent-prompt)
         3. [/pr-comments slash command (Agent Prompt)](#4213-pr-comments-slash-command-agent-prompt)
         4. [Censoring assistance with malicious activities (System Prompt)](#4214-censoring-assistance-with-malicious-activities-system-prompt)
         5. [Malware analysis after Read tool call (System Reminder)](#4215-malware-analysis-after-read-tool-call-system-reminder)
      2. [Git Operations & Version Control](#422-git-operations-version-control)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#4221-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#4222-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#4223-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#4224-bash-git-—-prefer-new-commits-tool-description)
         5. [Git status (System Prompt)](#4225-git-status-system-prompt)
         6. [EnterWorktree (Tool Description)](#4226-enterworktree-tool-description)
         7. [ExitWorktree (Tool Description)](#4227-exitworktree-tool-description)
         8. [Quick git commit (Agent Prompt)](#4228-quick-git-commit-agent-prompt)
         9. [Quick PR creation (Agent Prompt)](#4229-quick-pr-creation-agent-prompt)
         10. [Session title and branch generation (Agent Prompt)](#42210-session-title-and-branch-generation-agent-prompt)
      3. [GitHub Integration & CI/CD](#423-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#4231-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#4232-github-app-installation-pr-description-data)
5. [Context, Memory & Session Awareness](#5-context-memory-session-awareness)
   1. [Context Compaction & Persistent Memory](#51-context-compaction-persistent-memory)
      1. [Context Management & Compaction](#511-context-management-compaction)
         1. [Context compaction summary (System Prompt)](#5111-context-compaction-summary-system-prompt)
         2. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#5112-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
         3. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#5113-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
         4. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#5114-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
         5. [Compact file reference (System Reminder)](#5115-compact-file-reference-system-reminder)
         6. [Conversation summarization (Agent Prompt)](#5116-conversation-summarization-agent-prompt)
         7. [Recent Message Summarization (Agent Prompt)](#5117-recent-message-summarization-agent-prompt)
      2. [Memory Systems & Session State](#512-memory-systems-session-state)
         1. [Memory file contents (System Reminder)](#5121-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#5122-nested-memory-contents-system-reminder)
         3. [Description part of memory instructions (System Prompt)](#5123-description-part-of-memory-instructions-system-prompt)
         4. [Memory system (private feedback) [System Prompt]](#5124-memory-system-private-feedback-system-prompt)
         5. [Determine which memory files to attach (Agent Prompt)](#5125-determine-which-memory-files-to-attach-agent-prompt)
         6. [Session memory update instructions (Agent Prompt)](#5126-session-memory-update-instructions-agent-prompt)
         7. [Session memory template (Data)](#5127-session-memory-template-data)
   2. [IDE State, Analytics & Session Organization](#52-ide-state-analytics-session-organization)
      1. [Session & IDE State Awareness](#521-session-ide-state-awareness)
         1. [File opened in IDE (System Reminder)](#5211-file-opened-in-ide-system-reminder)
         2. [Lines selected in IDE (System Reminder)](#5212-lines-selected-in-ide-system-reminder)
         3. [File modified by user or linter (System Reminder)](#5213-file-modified-by-user-or-linter-system-reminder)
         4. [New diagnostics detected (System Reminder)](#5214-new-diagnostics-detected-system-reminder)
         5. [Session continuation (System Reminder)](#5215-session-continuation-system-reminder)
         6. [Output style active (System Reminder)](#5216-output-style-active-system-reminder)
      2. [Resource & Budget Monitoring](#522-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#5221-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#5222-usd-budget-system-reminder)
      3. [Usage Insights & Analytics](#523-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#5231-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#5232-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#5233-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#5234-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#5235-insights-suggestions-system-prompt)
      4. [Session Management & Metadata](#524-session-management-metadata)
         1. [Session Search Assistant (Agent Prompt)](#5241-session-search-assistant-agent-prompt)
         2. [Coding session title generator (Agent Prompt)](#5242-coding-session-title-generator-agent-prompt)
         3. [Status line setup (Agent Prompt)](#5243-status-line-setup-agent-prompt)
         4. [Prompt Suggestion Generator v2 (Agent Prompt)](#5244-prompt-suggestion-generator-v2-agent-prompt)
      5. [Learning Mode & User Collaboration](#525-learning-mode-user-collaboration)
         1. [Learning mode (System Prompt)](#5251-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#5252-learning-mode-insights-system-prompt)
6. [API, SDK Documentation & Developer Tools](#6-api-sdk-documentation-developer-tools)
   1. [Claude API & Agent SDK References](#61-claude-api-agent-sdk-references)
      1. [Claude API SDK References](#611-claude-api-sdk-references)
         1. [Claude API reference — Python (Data)](#6111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#6112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#6113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#6114-claude-api-reference-—-java-data)
         5. [Claude API reference — C# (Data)](#6115-claude-api-reference-—-c-data)
         6. [Claude API reference — Ruby (Data)](#6116-claude-api-reference-—-ruby-data)
         7. [Claude API reference — PHP (Data)](#6117-claude-api-reference-—-php-data)
         8. [Claude API reference — cURL (Data)](#6118-claude-api-reference-—-curl-data)
         9. [Claude model catalog (Data)](#6119-claude-model-catalog-data)
      2. [Agent SDK References & Patterns](#612-agent-sdk-references-patterns)
         1. [Agent SDK reference — Python (Data)](#6121-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#6122-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#6123-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#6124-agent-sdk-patterns-—-typescript-data)
      3. [Tool Use & Streaming API References](#613-tool-use-streaming-api-references)
         1. [Tool use concepts (Data)](#6131-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6132-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6133-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#6134-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#6135-streaming-reference-—-typescript-data)
         6. [Files API reference — Python (Data)](#6136-files-api-reference-—-python-data)
         7. [Files API reference — TypeScript (Data)](#6137-files-api-reference-—-typescript-data)
         8. [Message Batches API reference — Python (Data)](#6138-message-batches-api-reference-—-python-data)
         9. [HTTP error codes reference (Data)](#6139-http-error-codes-reference-data)
         10. [Live documentation sources (Data)](#61310-live-documentation-sources-data)
      4. [Build with Claude API Skills & Routing](#614-build-with-claude-api-skills-routing)
         1. [Build with Claude API (Skill)](#6141-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#6142-build-with-claude-api-reference-guide-skill)
         3. [Claude guide agent (Agent Prompt)](#6143-claude-guide-agent-agent-prompt)
   2. [Documentation, Tooling & Communication Standards](#62-documentation-tooling-communication-standards)
      1. [Documentation Generation & Codebase Knowledge](#621-documentation-generation-codebase-knowledge)
         1. [CLAUDE.md creation (Agent Prompt)](#6211-claudemd-creation-agent-prompt)
         2. [Update Magic Docs (Agent Prompt)](#6212-update-magic-docs-agent-prompt)
         3. [Agent memory instructions (System Prompt)](#6213-agent-memory-instructions-system-prompt)
      2. [Agent Design & Persona Creation](#622-agent-design-persona-creation)
         1. [Agent creation architect (Agent Prompt)](#6221-agent-creation-architect-agent-prompt)
         2. [Bash command prefix detection (Agent Prompt)](#6222-bash-command-prefix-detection-agent-prompt)
      3. [Specialized Tool Descriptions](#623-specialized-tool-descriptions)
         1. [LSP (Tool Description)](#6231-lsp-tool-description)
         2. [NotebookEdit (Tool Description)](#6232-notebookedit-tool-description)
         3. [ToolSearch (second part) [Tool Description]](#6233-toolsearch-second-part-tool-description)
         4. [AskUserQuestion (Tool Description)](#6234-askuserquestion-tool-description)
         5. [AskUserQuestion (preview field) [Tool Description]](#6235-askuserquestion-preview-field-tool-description)
         6. [Option previewer (System Prompt)](#6236-option-previewer-system-prompt)
      4. [Output Formatting & Communication Standards](#624-output-formatting-communication-standards)
         1. [Output efficiency (System Prompt)](#6241-output-efficiency-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#6242-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — detailed) [System Prompt]](#6243-tone-and-style-concise-output-—-detailed-system-prompt)
         4. [Tone and style (concise output — short) [System Prompt]](#6244-tone-and-style-concise-output-—-short-system-prompt)
         5. [Tool Use Summary Generation (System Prompt)](#6245-tool-use-summary-generation-system-prompt)
         6. [Agent Summary Generation (System Prompt)](#6246-agent-summary-generation-system-prompt)
         7. [Agent thread notes (System Prompt)](#6247-agent-thread-notes-system-prompt)
         8. [Common suffix (response format) [Agent Prompt]](#6248-common-suffix-response-format-agent-prompt)

---

## 1. Shell Execution & File System Operations

Covers all direct interactions with the operating system — running bash commands safely, reading and writing files, searching codebases, and handling file boundary edge cases.

### 1.1 Bash Command Execution

Configuration, performance strategies, and security sandboxing for running shell commands, including tool preferences, chaining patterns, and sandbox bypass mechanisms.

#### 1.1.1 Bash Tool Configuration & Behavior

Guidance for executing bash commands effectively, including preferences for dedicated tools over bash equivalents (Read, Write, Edit, Glob, Grep), command chaining strategies (&&, semicolons, parallel execution), working directory management with absolute paths, proper file path quoting, and timeout configuration. Emphasizes clear command documentation and avoiding unnecessary delays between independent operations.

##### 1.1.1.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs Claude to output text directly rather than using echo or printf commands.

##### 1.1.1.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs Claude to use the Grep tool for content search instead of grep or rg commands.

##### 1.1.1.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Instructs Claude to use the Edit tool for file editing instead of sed or awk.

##### 1.1.1.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs Claude to use the Glob tool for file search instead of find or ls commands.

##### 1.1.1.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Instructs Claude to use the Read tool for file reading instead of cat, head, or tail.

##### 1.1.1.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs Claude to use the Write tool for file writing instead of echo or cat redirection.

##### 1.1.1.7 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and transparency than Bash equivalents.

##### 1.1.1.8 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs Claude to write clear, concise descriptions of bash commands, with more detail for complex or piped commands.

##### 1.1.1.9 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs Claude to maintain the current working directory by using absolute paths and avoiding cd unless explicitly requested.

##### 1.1.1.10 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs Claude not to use newlines to separate bash commands.

##### 1.1.1.11 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

##### 1.1.1.12 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs Claude to make multiple Bash tool calls in parallel for independent commands rather than sequencing them.

##### 1.1.1.13 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns Claude to avoid using Bash for find, grep, cat, and similar read-only searching commands, preferring dedicated tools instead.

##### 1.1.1.14 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs Claude to always quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.15 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons to run bash commands sequentially when order matters but earlier command failures are acceptable.

##### 1.1.1.16 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent bash commands using `&&` in a single call when they must run sequentially and each depends on the previous success.

##### 1.1.1.17 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep bash sleep durations short (1-5 seconds) to avoid blocking the user.

##### 1.1.1.18 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with `run_in_background`; instead wait for completion notification.

##### 1.1.1.19 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between bash commands that can run immediately; execute them without delay.

##### 1.1.1.20 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Use check commands like `gh run view` instead of sleeping when polling an external process.

##### 1.1.1.21 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Specify an optional timeout in milliseconds for bash commands, with configurable maximum and default limits.

##### 1.1.1.22 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Verify the parent directory exists and is correct using `ls` before creating new directories or files.

##### 1.1.1.23 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Note that bash working directory persists between commands but shell state does not; the environment is initialized from the user's profile.

##### 1.1.1.24 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve the Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

##### 1.1.1.25 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; instead diagnose the root cause.

##### 1.1.1.26 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions for bash commands, keeping simple commands brief and adding context for complex piped or flag-heavy commands.

#### 1.1.2 Bash Sandbox Security & Restrictions

Security framework enforcing sandboxed bash execution by default, with mechanisms to detect sandbox-caused failures (access denied, network blocks, socket errors) and recover through automatic retry or user-requested bypass. Prohibits sensitive path allowlisting and treats each command independently, defaulting to sandbox mode while using $TMPDIR for temporary files.

##### 1.1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs Claude to work with the user to adjust sandbox settings if a command fails due to sandbox restrictions.

##### 1.1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs Claude to default to running commands within the sandbox and only bypass when user requests or sandbox restriction is evident.

##### 1.1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

##### 1.1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that identify sandbox-caused command failures.

##### 1.1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

##### 1.1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "operation not permitted" errors for file and network operations as evidence of sandbox restrictions.

##### 1.1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies unix socket connection errors as evidence of sandbox restrictions.

##### 1.1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instruct Claude to briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

##### 1.1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Define the condition when a bash command fails with visible evidence of sandbox restrictions, distinguishing sandbox-related failures from other causes like missing files or network issues.

##### 1.1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforce that all bash commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

##### 1.1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establish that bash commands cannot run outside the sandbox under any circumstances, with no exceptions allowed.

##### 1.1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibit suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

##### 1.1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each bash command individually and default to sandbox mode for future commands, even if a recent command ran with `dangerouslyDisableSandbox: true`.

##### 1.1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provide a header for Claude's response when encountering evidence of sandbox-caused failures.

##### 1.1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instruct Claude to immediately retry a failed bash command with `dangerouslyDisableSandbox: true` without asking the user.

##### 1.1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Require using the `$TMPDIR` environment variable (or `${SANDBOX_TMPDIR_FN()}` as fallback) for temporary files in sandbox mode instead of `/tmp` directly.

##### 1.1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Note that disabling the sandbox will trigger a user permission prompt.

### 1.2 File Reading, Writing & Search Tools

Dedicated filesystem tools — ReadFile, Write, Edit, Glob, and Grep — that replace bash equivalents for safer, more efficient codebase navigation and modification.

#### 1.2.1 File System Tools (Read, Write, Edit, Search)

Dedicated tools for filesystem operations replacing bash equivalents: ReadFile for multimodal content (text, images, PDFs, notebooks), Write for file creation, Edit for precise string replacements, Glob for fast pattern-based file discovery, and Grep for regex-powered content search. Collectively enable efficient codebase navigation and modification without shell commands.

##### 1.2.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges for large files), Jupyter notebooks, and text files. Requires absolute paths and defaults to reading a limited number of lines from the start.

##### 1.2.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, overwriting existing files. Prefers Edit tool for modifications and avoids creating documentation files unless explicitly requested.

##### 1.2.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from Read tool output. Prefer editing existing files; use `replace_all` when replacements are not unique or for renaming across the file.

##### 1.2.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like **/*.js to find files by name across any codebase size, returning results sorted by modification time.

##### 1.2.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search tool built on ripgrep supporting full regex syntax, file filtering by glob or type, and multiple output modes (content, files_with_matches, count). Handles multiline patterns and requires escaping for special characters.

##### 1.2.1.6 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool to search file contents instead of grep or rg commands.

##### 1.2.1.7 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool to search for files instead of find or ls commands.

##### 1.2.1.8 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Prefers Write tool over cat heredoc or echo redirection for file creation.

##### 1.2.1.9 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Prefers Edit tool over sed or awk for file modifications.

##### 1.2.1.10 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Prefers Read tool over cat, head, tail, or sed for reading file contents.

##### 1.2.1.11 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Uses Glob and Grep tools directly for simple, directed codebase searches like finding specific files, classes, or functions.

#### 1.2.2 File State & Boundary Warnings

Diagnostic alerts for file access edge cases—empty files, offset overruns, truncation, and resource unavailability—guiding users to appropriate recovery actions.

##### 1.2.2.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warn that a file exists but contains no content.

##### 1.2.2.2 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warn that requested file offset exceeds actual file length, providing total line count.

##### 1.2.2.3 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notify that a large file was truncated to a maximum line count, directing to Read tool for additional content.

##### 1.2.2.4 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Displays a placeholder message when an MCP resource contains no content.

##### 1.2.2.5 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Shows a placeholder when an MCP resource exists but has no displayable content.

#### 1.2.3 Scratchpad & Temporary File Management

Session-scoped temporary file storage that isolates working files from system directories, enabling intermediate results and script generation without permission constraints.

##### 1.2.3.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs use of a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, supporting intermediate results, temporary scripts, and working files without permission prompts.

---

## 2. Multi-Agent Coordination & Workflow Automation

Orchestrates parallel agent teams, delegates tasks to subagents, automates lifecycle events via hooks, and provides extensible slash commands for specialized workflows.

### 2.1 Agent Teams & Subagent Delegation

Spawning and coordinating parallel agent swarms, distributing tasks across team members, managing agent-to-agent communication, and routing requests to specialized agents.

#### 2.1.1 Multi-Agent Teams & Swarm Coordination

Orchestrates parallel multi-agent work through team creation, task distribution, and agent-to-agent messaging. Manages team lifecycle including graceful shutdown protocols, shared memory contexts, and communication patterns that enable autonomous swarms to coordinate without expensive broadcasts.

##### 2.1.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages multi-agent teams and coordinates parallel work through task lists, team configuration, and automatic message delivery. Covers team creation, teammate spawning with appropriate agent types, task assignment, idle state management, and graceful shutdown protocols.

##### 2.1.1.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all active members to be gracefully terminated first before cleanup can proceed.

##### 2.1.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables agent-to-agent communication in teams via direct messages or broadcasts, supporting plain text and structured protocol messages (shutdown requests, plan approval responses). Emphasizes direct messaging over expensive broadcasts and requires using teammate names for addressing.

##### 2.1.1.4 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and communication protocols. Requires using teammate names for messaging and periodic task list checks.

##### 2.1.1.5 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires graceful team shutdown via member requests, shutdown approvals, and cleanup before returning final response to user in non-interactive mode.

##### 2.1.1.6 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Requires agents in a team to use SendMessage tool with specific teammate names or broadcast to communicate; plain text responses are not visible to teammates.

##### 2.1.1.7 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and content for injection into conversation context.

#### 2.1.2 Subagent Delegation & Orchestration

Delegates specialized tasks to autonomous subagents for parallel execution and context isolation. Covers subagent spawning strategies, prompt composition for context-inheriting and fresh agents, fork-based parallelization, and result collection without mid-flight interference.

##### 2.1.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive usage guide for the Agent tool covering subagent launching, concurrent execution, background tasks, resumption, worktree isolation, and context-specific parameter availability.

##### 2.1.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when and how to launch specialized subagent types for autonomous multi-step task handling with specific capabilities.

##### 2.1.2.3 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use subagents for parallelizing independent queries and protecting context windows, but avoid duplicating work already performed by delegated agents.

##### 2.1.2.4 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Write context-aware prompts for context-inheriting subagents with specific scope, and detailed briefing prompts for fresh subagents with background and rationale, avoiding delegation of understanding.

##### 2.1.2.5 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Instructs Claude when to fork subagents for research and implementation, prohibits reading fork output mid-flight or fabricating results, and emphasizes trusting completion notifications.

##### 2.1.2.6 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Demonstrates how coordinator agents delegate tasks to subagents using the agent tool, handle waiting states without fabricating results, and report findings from independent subagent reviews.

##### 2.1.2.7 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Uses Task tool with explorer subagent for broader codebase exploration and deep research when simple directed searches prove insufficient or exceed query limits.

##### 2.1.2.8 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

Forked worker sub-agent that executes directives directly without spawning further sub-agents, using tools silently and reporting structured facts with scope, results, key files, and issues.

##### 2.1.2.9 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist for Claude Code that rapidly navigates codebases using glob patterns, regex search, and file reading while strictly prohibiting any file modifications or state changes.

##### 2.1.2.10 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines strengths and behavioral guidelines for the Explore subagent, emphasizing read-only codebase search, thorough multi-location analysis, and avoiding unnecessary file creation.

#### 2.1.3 Agent Communication & Invocation

Mechanisms for routing user requests to specialized agents and handling lightweight queries. Includes direct agent invocation with context passing and stateless responses to side questions without tool access.

##### 2.1.3.1 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Invoke the specified agent with required context when user requests it.

##### 2.1.3.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer side questions directly without tools in a single response, acknowledging no file access or action capability and declining to promise investigations.

### 2.2 Hooks, Commands & Background Scheduling

Event-driven automation through lifecycle hooks, extensible slash command skills for workflow automation, and cron-based scheduling for deferred background tasks.

#### 2.2.1 Hooks System & Lifecycle Events

Event-driven automation framework that intercepts Claude Code lifecycle events (permissions, tool execution, completion) and executes custom commands or prompts. Enables condition verification, blocking validations, and continuation control through structured hook configurations.

##### 2.2.1.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive guide to Claude Code hooks system, covering hook structure, events (PermissionRequest, PreToolUse, PostToolUse, etc.), types (command, prompt, agent), input/output formats, and common patterns for automation.

##### 2.2.1.2 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provide additional context from a hook execution.

##### 2.2.1.3 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Report an error from a blocking hook command execution.

##### 2.2.1.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for hook stopped continuation messages.

##### 2.2.1.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Report when a hook stops continuation with associated message.

##### 2.2.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Report successful hook execution with result content.

##### 2.2.1.7 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured output indicating whether an agent completed its plan.

##### 2.2.1.8 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether a condition is met or explaining why it is not.

#### 2.2.2 Skills System & Slash Commands

Extensible command framework enabling specialized task execution through slash commands, with capabilities for workflow automation, process diagnosis, code analysis, and configuration management. Supports skill creation via structured interviews and session-based skill invocation tracking.

##### 2.2.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within conversations, matching user requests to available skills and invoking them with optional arguments before generating other responses.

##### 2.2.2.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute slash commands that invoke user-invocable skills, only for skills listed in the tool's user-invocable section.

##### 2.2.2.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

List skills invoked in the session and remind to continue following their guidelines.

##### 2.2.2.4 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable session processes into reusable skills through multi-round user interviews covering high-level confirmation, step details, per-step breakdown, and final triggers, then generates a SKILL.md file with frontmatter, inputs, goals, and annotated steps.

##### 2.2.2.5 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts intervals to cron expressions, and schedules recurring tasks with support for minutes, hours, and days granularity.

##### 2.2.2.6 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for high CPU, uninterruptible sleep, zombie processes, and memory leaks, then posts findings to Slack #claude-code-feedback.

##### 2.2.2.7 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup skill launching three parallel agents to identify code reuse opportunities, quality issues (redundant state, parameter sprawl, leaky abstractions), and efficiency problems (unnecessary work, missed concurrency, memory leaks).

##### 2.2.2.8 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions, covering debug log analysis, error/warning identification, settings file locations, and recommendations for fixes based on log findings.

##### 2.2.2.9 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration via settings.json, covering hook configuration (PreToolUse, PostToolUse, PreCompact), permission rules, environment variables, and MCP server setup with careful merging of existing settings.

##### 2.2.2.10 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into independent units, determining e2e test recipes, and spawning background worker agents with isolated worktrees.

#### 2.2.3 Scheduling & Background Tasks

Mechanisms for deferring work through cron-based job scheduling and execution pausing, with built-in load distribution and interruptibility for responsive background task management.

##### 2.2.3.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring cron-based jobs using standard 5-field cron syntax in the user's local timezone. Avoid :00 and :30 minute marks when possible to distribute load; recurring tasks auto-expire after 3 days and only fire while the REPL is idle.

##### 2.2.3.2 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with user interrupt capability, receiving periodic tick prompts to check for useful work. Preferred over bash sleep as it doesn't hold shell processes.

---

## 3. Planning, Task Execution & External Tool Access

Structures the full execution lifecycle from upfront design approval through task tracking, autonomous operation, and external data retrieval via browser and web search.

### 3.1 Planning Workflows & Task Tracking

Separates design from implementation with approval gates, tracks task state transitions during coding sessions, and manages communication patterns during autonomous execution.

#### 3.1.1 Planning Mode & Implementation Design

Structured planning workflow that separates design from execution, requiring exploration and architectural decisions to be approved before implementation. Supports iterative and multi-phase planning modes with specialized agents, plan file tracking, and verification steps, preventing premature execution while enabling comprehensive codebase understanding and user collaboration.

##### 3.1.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transition into plan mode to explore the codebase and design implementation approaches for user approval before coding. Use for non-trivial tasks involving new features, multiple approaches, architectural decisions, or multi-file changes; skip for simple fixes or when requirements are explicit.

##### 3.1.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning and request user approval by reading the plan from the plan file. Use only for implementation planning tasks, not research or exploration; do not use to ask "Is this plan okay?" as that is implicit.

##### 3.1.1.3 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notify that plan mode has ended and tool execution and edits are now available, with optional plan file location.

##### 3.1.1.4 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file and instructs Claude to continue working on it if relevant and incomplete.

##### 3.1.1.5 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow including parallel exploration, design, review, and approval stages. Prohibits execution and non-readonly operations while planning, and requires using specialized agents for exploration and design tasks.

##### 3.1.1.6 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Implements iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, and asks clarifying questions. Prohibits execution and non-readonly operations while planning, with plan file as the only editable resource.

##### 3.1.1.7 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents that prohibits execution and non-readonly operations, restricts edits to plan file only, and requires comprehensive answers with clarifying questions.

##### 3.1.1.8 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, requiring evaluation of existing plan against current request and appropriate handling of same vs. different tasks.

##### 3.1.1.9 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

##### 3.1.1.10 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final planning phase that writes concise plans to the plan file with file paths, specific changes, function references, and a single verification command, enforcing a 40-line hard limit.

##### 3.1.1.11 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases and designs implementation plans by understanding requirements, identifying patterns, and detailing step-by-step strategies with critical files.

#### 3.1.2 Task Management & Progress Tracking

Structured task tracking for coding sessions using state transitions (pending, in-progress, completed) with single active task enforcement. Supports task creation, immediate completion marking, team coordination, and progress visibility through dedicated tools and periodic reminders.

##### 3.1.2.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with state tracking (pending, in_progress, completed), requiring both imperative and active form descriptions. Emphasizes single in-progress task limit and immediate completion marking without batching.

##### 3.1.2.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress and organize complex multi-step work. Tasks include subject, description, and optional activeForm fields, starting with pending status and supporting team coordination.

##### 3.1.2.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for finding and claiming available tasks from shared task lists, preferring lowest ID tasks and focusing on unblocking work when blocked.

##### 3.1.2.4 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Break down and manage work using TodoWrite to track progress, marking tasks complete immediately rather than batching.

##### 3.1.2.5 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

##### 3.1.2.6 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task creation and update tools for tracking progress on relevant work, with instruction not to mention reminder to user.

##### 3.1.2.7 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use TodoWrite tool for tracking task progress when relevant, with instruction not to mention reminder to user.

#### 3.1.3 Autonomous Execution & User Communication

Behavioral patterns and communication mechanisms enabling continuous autonomous task execution with efficient parallel tool orchestration and structured user feedback loops throughout the work cycle.

##### 3.1.3.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Behavioral guidelines for continuous autonomous task execution, emphasizing immediate action, minimized interruptions, preference for action over planning, reasonable decision-making, and thorough completion including tests and verification.

##### 3.1.3.2 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Maximizes efficiency by calling multiple independent tools in parallel, while sequentially executing dependent tool calls where one operation must complete before another starts.

##### 3.1.3.3 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude that SendUserMessage is the primary communication channel with users, requiring acknowledgment before work, checkpoints during progress, and concise results.

##### 3.1.3.4 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends messages to users with markdown support and file attachments, using status labels (normal or proactive) to indicate intent and enable downstream routing.

### 3.2 Safe Execution, Browser & Web Access

Risk assessment and confirmation requirements for destructive operations, programmatic Chrome browser control for UI automation, and web search with content extraction.

#### 3.2.1 Safe Action Execution & Risk Management

Governs safe execution of potentially destructive or irreversible operations through risk assessment, user confirmation requirements, and security monitoring of autonomous actions. Prevents prompt injection, credential leakage, and unintended scope expansion while enabling reasonable alternative approaches when tool access is restricted.

##### 3.2.1.1 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Provides comprehensive guidance on assessing reversibility and blast radius of actions, requiring user confirmation for destructive, hard-to-reverse, or shared-state operations while encouraging investigation over shortcuts.

##### 3.2.1.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Permits reasonable alternative approaches when tool execution is denied, but prohibits malicious workarounds; if essential capability is blocked, stop and explain to the user.

##### 3.2.1.3 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Describes tool execution in permission modes where denied tool calls should not be retried identically; instead adjust approach or use AskUserQuestion to clarify the denial reason.

##### 3.2.1.4 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security monitor that evaluates autonomous agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage. Defines threat model, default allow policy, user intent rules, and evaluation methodology.

##### 3.2.1.5 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules (git destructive, code execution, production deploy, credential leakage, data exfiltration), and allow exceptions for security monitoring of autonomous agents.

#### 3.2.2 Browser Automation & Computer Use

Programmatic Chrome browser control via mouse, keyboard, and screenshot capture for UI automation. Manages tab context, prevents modal dialogs and infinite loops, and requires screenshot inspection before interaction to determine element coordinates.

##### 3.2.2.1 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructs Claude to load Chrome browser MCP tools via ToolSearch before use, requiring a two-step process: first load the tool with a select query, then call it.

##### 3.2.2.2 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording, console debugging, avoiding modal dialogs, preventing infinite loops, and managing tab context. Emphasizes checking current tabs at session start and avoiding reuse of stale tab IDs.

##### 3.2.2.3 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Use mouse and keyboard to interact with a Chrome browser and take screenshots. Consult screenshots before clicking to determine element coordinates, and center the cursor tip on target elements.

##### 3.2.2.4 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameters for Chrome browser control including mouse operations (click, drag, hover), keyboard input, scrolling, zooming, and screenshot capture for UI automation.

#### 3.2.3 Web Search & Content Fetching

Retrieves and processes current web information through search and content extraction, with built-in mechanisms for source attribution, content summarization, and handling of untrusted sources. Supports domain filtering, URL handling, and caching to optimize repeated access.

##### 3.2.3.1 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff, requiring mandatory source attribution in responses. Supports domain filtering and requires using current year in queries for recent information.

##### 3.2.3.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with a small model, supporting URL redirects and including a 15-minute cache for repeated access.

##### 3.2.3.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing 125-character quote limits for untrusted domains while respecting licenses and avoiding song lyrics.

---

## 4. Code Quality, Review & Version Control

Enforces engineering discipline through scope constraints and simplicity, validates implementations via testing, performs security-aware code review, and manages git workflows safely.

### 4.1 Engineering Discipline & Verification

Pragmatic coding standards that prevent over-engineering and feature creep, paired with adversarial test execution and edge-case validation to confirm correctness.

#### 4.1.1 Code Quality & Engineering Discipline

Enforces focused, pragmatic software engineering practices by constraining scope to requested changes, eliminating unnecessary abstractions and error handling, and prioritizing simplicity and security. Establishes clear boundaries against over-engineering, premature optimization, and feature creep.

##### 4.1.1.1 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Directs Claude to make only requested or clearly necessary changes, keeping solutions simple and focused.

##### 4.1.1.2 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instructs Claude to consider alternatives when blocked rather than brute-forcing, and to ask the user for guidance when stuck.

##### 4.1.1.3 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directs Claude to prefer editing existing files over creating new ones to prevent file bloat.

##### 4.1.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims or deprecated markers.

##### 4.1.1.5 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directs Claude to avoid creating helpers or abstractions for one-time operations or hypothetical requirements.

##### 4.1.1.6 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directs Claude not to add features, refactor, or improve beyond what was requested, including avoiding unnecessary docstrings or comments.

##### 4.1.1.7 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid error handling for impossible scenarios and validate only at system boundaries.

##### 4.1.1.8 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Directs Claude to read and understand existing code before proposing modifications.

##### 4.1.1.9 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Instructs Claude to avoid introducing security vulnerabilities like injection, XSS, and OWASP top 10 issues.

##### 4.1.1.10 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Establishes that users primarily request software engineering tasks and instructs Claude to interpret unclear instructions in that context.

##### 4.1.1.11 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Encourages Claude to support ambitious tasks and defer to user judgment on scope feasibility.

##### 4.1.1.12 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Instructs Claude to avoid giving time estimates or predictions for task completion.

##### 4.1.1.13 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels.

#### 4.1.2 Verification & Test Execution

Systematic validation of implementations through adversarial testing, automated test suite execution, and edge-case probing, with deterministic verification plans and failure diagnostics.

##### 4.1.2.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarially tests implementations by running builds, test suites, linters, and probes for concurrency/boundary/idempotency issues, issuing PASS/FAIL/PARTIAL verdicts with documented command output and results.

##### 4.1.2.2 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering verifier skills, analyzing git changes, generating deterministic verification plans, triggering verifiers, and reporting results with failure diagnostics.

##### 4.1.2.3 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Prompt for creating verifier skills for the Verify agent, covering auto-detection of project types, setup of browser automation (Playwright/Chrome DevTools), CLI/API verification tools, authentication handling, and skill generation in .claude/skills/.

##### 4.1.2.4 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

After implementing changes, simplify code, run unit tests, perform end-to-end testing, commit and push with a PR, then report the PR URL for tracking.

### 4.2 Code Review, Security Analysis & Git

Automated multi-lens code review for quality and vulnerabilities, git commit and pull request workflows with safety guardrails, and GitHub Actions CI/CD integration.

#### 4.2.1 Code Review & Security Analysis

Automated analysis of code changes through multiple lenses—quality, security vulnerabilities, and discussion context—with guardrails for distinguishing authorized security testing from malicious activity.

##### 4.2.1.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Conducts expert code review of GitHub pull requests by analyzing diffs and providing thorough feedback on code quality, conventions, performance, testing, and security.

##### 4.2.1.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review of code changes focusing on exploitable vulnerabilities across input validation, authentication, cryptography, injection, and data exposure with high-confidence filtering and detailed markdown reporting.

##### 4.2.1.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and code review comments with file context, diff hunks, and threaded replies in a readable format.

##### 4.2.1.4 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing destructive techniques, DoS attacks, and malicious detection evasion without clear authorization context.

##### 4.2.1.5 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware behavior and characteristics when encountered, but strictly prohibits improving or augmenting malicious code.

#### 4.2.2 Git Operations & Version Control

Comprehensive git workflow protocols covering commit creation, pull request management, and branch operations with safety guardrails against destructive actions and hook bypassing. Includes worktree isolation for complex branching, automated commit and PR creation agents, and branch naming conventions, all emphasizing user-explicit approval before modifications.

##### 4.2.2.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs Claude to consider safer alternatives before running destructive git operations like reset --hard or push --force.

##### 4.2.2.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, file staging, commit message formatting, and PR creation with gh command. Emphasizes never committing without explicit user request, avoiding destructive operations, and creating new commits rather than amending.

##### 4.2.2.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs Claude to never skip hooks or bypass signing unless the user explicitly requests it, and to fix underlying issues if hooks fail.

##### 4.2.2.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Directs Claude to prefer creating new commits over amending existing ones.

##### 4.2.2.5 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git status snapshot at conversation start including branch, main branch, status, and recent commits.

##### 4.2.2.6 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it only when the user explicitly requests worktree usage. Do not use for normal branch operations or feature work unless worktree is mentioned.

##### 4.2.2.7 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree, restoring the original working directory and clearing session caches. Supports two modes: keep (preserve worktree for later) or remove (delete worktree and branch), with optional discard_changes flag for uncommitted work.

##### 4.2.2.8 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting a message following repository style, and executing the commit with safety protocols preventing amends and secret-file commits.

##### 4.2.2.9 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates a commit and pull request by analyzing changes, creating feature branches, writing commit messages and PR descriptions, and pushing to origin with comprehensive git safety protocols.

##### 4.2.2.10 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates concise session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

#### 4.2.3 GitHub Integration & CI/CD

Automation templates for integrating Claude Code into GitHub workflows, enabling CI/CD triggers via @mentions in issues and pull requests with configurable prompts and tool restrictions.

##### 4.2.3.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, PRs, or comments, with optional custom prompts and tool restrictions.

##### 4.2.3.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining functionality, security, and how to trigger Claude via @mentions.

---

## 5. Context, Memory & Session Awareness

Maintains continuity across sessions through context compaction, persistent memory files, IDE state tracking, usage analytics, and session organization tools.

### 5.1 Context Compaction & Persistent Memory

Structured conversation summaries that preserve task state across context window boundaries, and persistent memory files that maintain user profiles and goals between sessions.

#### 5.1.1 Context Management & Compaction

Enables efficient conversation continuation across context window boundaries by creating structured summaries that capture task state, technical decisions, and pending work. Supports multiple compaction strategies from detailed analysis to minimal coverage, preserving essential information for seamless resumption.

##### 5.1.1.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Instructs Claude to write structured continuation summaries for context window transitions, covering task overview, current state, discoveries, next steps, and context preservation to enable efficient resumption.

##### 5.1.1.2 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

System prompt for compaction analysis covering chronological message review, identification of user intents, technical decisions, specific details (filenames, code snippets, function signatures), errors, and user feedback.

##### 5.1.1.3 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Lean experimental compaction analysis prompt using analysis tags as planning scratchpad with line-by-line coverage notes, avoiding code snippets and verbatim quotes in favor of summary detail.

##### 5.1.1.4 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

System prompt for compaction analysis of recent messages, covering chronological review of user intents, approaches, technical decisions, specific details, errors encountered, and user feedback.

##### 5.1.1.5 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Reference a previously read file that was too large to include in context, directing to use Read tool if needed.

##### 5.1.1.6 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing primary requests, technical concepts, files examined, errors encountered, problem-solving efforts, and pending tasks with verbatim user messages and next steps.

##### 5.1.1.7 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, capturing requests, technical concepts, files modified, errors, problem-solving, and pending tasks.

#### 5.1.2 Memory Systems & Session State

Maintains persistent user context and session state through structured memory files that capture user profile, goals, feedback, and task progress. Enables selective memory attachment based on query relevance and supports incremental updates to preserve conversation history across sessions.

##### 5.1.2.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path with optional type description.

##### 5.1.2.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Shows the contents of a nested memory file structure.

##### 5.1.2.3 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines memory descriptions as capturing user role, goals, and knowledge to enable personalized assistance while avoiding negative judgments.

##### 5.1.2.4 [Memory system (private feedback) [System Prompt]](system-prompts/system-prompt-memory-system-private-feedback.md)

Stores user guidance and corrections as private feedback memories to maintain coherence and prevent repeated mistakes, with validation to check for contradictions against team feedback before saving.

##### 5.1.2.5 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options based on user query, excluding usage references for recently-used tools but including warnings and known issues.

##### 5.1.2.6 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files by editing existing sections with detailed, info-dense content while preserving structure, headers, and italic section descriptions.

##### 5.1.2.7 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files organizing current state, task specification, files, workflow, errors, codebase documentation, learnings, results, and worklog.

### 5.2 IDE State, Analytics & Session Organization

Real-time IDE event tracking for contextual awareness, token and budget monitoring, usage pattern analysis, session discovery via semantic search, and collaborative learning modes.

#### 5.2.1 Session & IDE State Awareness

Real-time notifications of user interactions and session context—file opens, selections, modifications, diagnostics, and cross-device continuity—enabling contextual task awareness.

##### 5.2.1.1 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notify that user opened a file in the IDE, which may or may not relate to current task.

##### 5.2.1.2 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notify of user-selected lines in IDE with content excerpt, noting possible relevance to current task.

##### 5.2.1.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notify of external file modifications by user or linter with relevant changes shown, instructing not to revert unless requested.

##### 5.2.1.4 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues in the codebase.

##### 5.2.1.5 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and application state may have changed.

##### 5.2.1.6 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and must be followed.

#### 5.2.2 Resource & Budget Monitoring

Real-time tracking of token consumption and financial expenditure, displaying current usage metrics against allocated limits to enable cost-aware interactions.

##### 5.2.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 5.2.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including spent, total, and remaining amounts.

#### 5.2.3 Usage Insights & Analytics

Analysis systems that extract structured insights from Claude Code session data, identifying what works, friction patterns, quick wins, and emerging workflows while generating actionable recommendations tied to specific features and usage patterns.

##### 5.2.3.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part usage insights summary covering what's working, hindrances, quick wins, and ambitious workflows for Claude Code users, using coaching tone and avoiding numerical stats.

##### 5.2.3.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with three categories and two examples each.

##### 5.2.3.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies three ambitious future workflows and autonomous AI-assisted development opportunities based on usage data analysis.

##### 5.2.3.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts by counting user-requested goals, measuring satisfaction from explicit signals, and categorizing friction points like misunderstood requests, wrong approaches, buggy code, and rejected actions.

##### 5.2.3.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions from Claude Code usage data, recommending CLAUDE.md additions for repeated patterns, features to try (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to the user's workflow.

#### 5.2.4 Session Management & Metadata

Tools for organizing, discovering, and contextualizing coding sessions through semantic search, automated naming, and predictive suggestions, plus shell environment customization for personalized development workflows.

##### 5.2.4.1 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Agent that searches and ranks sessions by relevance to user queries, prioritizing exact tag matches, then title, branch, and transcript content matches with semantic similarity.

##### 5.2.4.2 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise sentence-case titles (3-7 words) that capture the main topic of a coding session, returning JSON with a single title field.

##### 5.2.4.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line by converting shell PS1 prompts to shell commands, handling ANSI colors and escape sequences, and updating ~/.claude/settings.json with custom statusLine commands.

##### 5.2.4.4 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent conversation, avoiding evaluative language and Claude-voice suggestions.

#### 5.2.5 Learning Mode & User Collaboration

Educational framework that transforms development into collaborative learning by soliciting human input on design decisions, providing contextual insights, and tracking knowledge contributions throughout the codebase.

##### 5.2.5.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions on design decisions and business logic for code segments over 20 lines, using TodoList tracking and Learn by Doing requests with context, guidance, and TODO(human) markers in the codebase.

##### 5.2.5.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code generation using formatted insight blocks with 2-3 key learning points specific to the codebase or implementation choices.

---

## 6. API, SDK Documentation & Developer Tools

Reference documentation for Claude APIs and SDKs across multiple languages, guides for building agents and applications, documentation generation tools, and output formatting standards.

### 6.1 Claude API & Agent SDK References

Multi-language SDK documentation covering client initialization, streaming, tool use, and model catalogs, plus comprehensive guides for building autonomous agents with MCP integration.

#### 6.1.1 Claude API SDK References

Multi-language SDK documentation covering client initialization, request patterns, streaming, vision, tool use, and advanced features like prompt caching and extended thinking across Python, TypeScript, Go, Java, C#, Ruby, PHP, and raw HTTP interfaces. Includes model catalog with current pricing and context specifications.

##### 6.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

##### 6.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

##### 6.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use with BetaToolRunner and manual loops, thinking, server-side tools, PDF input, Files API, and context editing.

##### 6.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, thinking, tool use with annotated classes and BetaToolRunner, effort parameters, prompt caching, structured output, and server-side tools.

##### 6.1.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use with manual loops, effort parameters, prompt caching, token counting, structured output, and server-side tools.

##### 6.1.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, and tool use with beta tool runner and manual loops.

##### 6.1.1.7 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization for standard API and cloud providers (Bedrock, Vertex, Foundry), basic requests, streaming, tool use, extended thinking, and server-side tools.

##### 6.1.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming, tool use loops, extended thinking, and required headers with jq parsing examples.

##### 6.1.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and deprecated Claude models with exact model IDs, aliases, context windows, max output tokens, and user request resolution mapping.

#### 6.1.2 Agent SDK References & Patterns

Comprehensive guides for building autonomous agents in Python and TypeScript, covering SDK interfaces, tool integration via MCP, permission systems, hooks, subagents, and session management with practical implementation patterns.

##### 6.1.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query() and ClaudeSDKClient interfaces, built-in tools, permission modes, MCP support, hooks, subagents, and best practices.

##### 6.1.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference covering installation, query() interface, built-in tools, permission modes, MCP support, hooks, and best practices.

##### 6.1.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with code examples.

##### 6.1.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks, subagents, MCP server integration, and session resumption with practical code examples.

#### 6.1.3 Tool Use & Streaming API References

Complete technical documentation for agentic patterns including tool definitions, tool runners with language-specific decorators, manual loops, server-side capabilities (code execution, web search, computer use), streaming protocols, file handling, batch processing, and error management across SDKs and HTTP.

##### 6.1.3.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool use.

##### 6.1.3.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner with @beta_tool decorator, MCP tool conversion helpers, manual agentic loops, code execution, memory tool, and structured outputs with Pydantic validation.

##### 6.1.3.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops with streaming, server-side tools, code execution with file handling, memory tool, and structured outputs with Zod validation.

##### 6.1.3.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content types, progress tracking, error handling, and best practices for token usage and timeout management.

##### 6.1.3.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, tool runner integration, final message retrieval, and best practices for web UI buffering and SSE format.

##### 6.1.3.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for PDFs and images, file management (list, retrieve, delete, download), and end-to-end examples.

##### 6.1.3.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages for PDFs and images, and file management operations (list, delete, download).

##### 6.1.3.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, status polling, result retrieval, and cost savings at 50% of standard pricing with support for up to 100,000 requests per batch.

##### 6.1.3.9 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 429, 500, 529) with causes, fixes, common mistakes, and typed exception handling in SDKs.

##### 6.1.3.10 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Provides WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and official repositories, with extraction prompts for each topic covering models, features, tools, and SDKs.

#### 6.1.4 Build with Claude API Skills & Routing

Foundational guides for developing Claude applications, providing language-agnostic routing between single calls, workflows, and agents alongside reference documentation templates and a documentation-fetching agent that contextualizes Claude Code, Agent SDK, and API capabilities.

##### 6.1.4.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, and compaction for long conversations.

##### 6.1.4.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific reference documentation with quick task navigation, mapping common use cases to relevant documentation sections for single calls, streaming, batches, tool use, and file handling.

##### 6.1.4.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing actionable guidance, and referencing local project files like CLAUDE.md.

### 6.2 Documentation, Tooling & Communication Standards

Automated codebase documentation generation, agent persona design, specialized domain tools for code intelligence, and output formatting rules governing response structure and conciseness.

#### 6.2.1 Documentation Generation & Codebase Knowledge

Systems for capturing and maintaining codebase knowledge across Claude Code sessions through automated CLAUDE.md generation, incremental documentation updates, and memory instructions that build institutional knowledge from conversation learnings.

##### 6.2.1.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation files capturing common commands, high-level architecture, and development patterns for future Claude Code instances.

##### 6.2.1.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Updates Magic Doc files with new learnings from conversations, preserving headers and removing outdated information while maintaining terseness and focusing on architecture, patterns, and entry points.

##### 6.2.1.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations, with examples for code reviewers, test runners, architects, and documentation writers.

#### 6.2.2 Agent Design & Persona Creation

Tools for architecting custom AI agents with expert personas and optimized system prompts, plus security utilities for detecting command injection in bash execution contexts.

##### 6.2.2.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to design custom AI agents by extracting user intent, creating expert personas, architecting comprehensive system prompts, and optimizing for performance. Outputs a JSON object with agent identifier, usage conditions, and complete system prompt.

##### 6.2.2.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety classification. Returns the command prefix or 'command_injection_detected' to prevent malicious execution.

#### 6.2.3 Specialized Tool Descriptions

Domain-specific tools providing code intelligence through language servers, notebook manipulation, dynamic tool discovery, and interactive user guidance with visual preview capabilities for informed decision-making.

##### 6.2.3.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interacts with Language Server Protocol servers to provide code intelligence features including definition lookup, reference finding, hover information, symbol search, and call hierarchy analysis across workspaces.

##### 6.2.3.2 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by completely replacing cell contents, supporting insert and delete operations on 0-indexed cells with absolute file paths.

##### 6.2.3.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool definitions by matching queries against tool names and keywords, returning complete JSONSchema definitions in a functions block for invocation.

##### 6.2.3.4 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes AskUserQuestion tool for gathering user preferences, clarifying instructions, and offering implementation choices during execution, with special guidance for plan mode approval.

##### 6.2.3.5 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructions for using optional preview field on single-select questions to display visual artifacts like UI mockups, code snippets, and diagrams.

##### 6.2.3.6 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side visual comparison of UI options using optional preview fields for ASCII mockups, code snippets, diagrams, and configuration examples in monospace boxes for single-select questions.

#### 6.2.4 Output Formatting & Communication Standards

Consistent presentation rules governing response structure, code references, conciseness, and summary generation across agent and tool interactions.

##### 6.2.4.1 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs concise, direct output by leading with answers over reasoning, skipping filler and preamble, and focusing on decisions needing user input, status updates, and blockers.

##### 6.2.4.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs inclusion of file_path:line_number patterns when referencing specific functions or code for easy user navigation.

##### 6.2.4.3 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Produces concise, polished output without filler, repetition, or inner monologue, presenting only final thoughts while retaining important information.

##### 6.2.4.4 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Requires short and concise responses.

##### 6.2.4.5 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Generate brief, past-tense summaries of tool usage outcomes in under 8 words, focusing on user-visible results without implementation details or self-reference.

##### 6.2.4.6 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word present-tense summaries of agent actions, avoiding past tense, vagueness, and branch names while focusing on specific files and functions.

##### 6.2.4.7 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Behavioral guidelines for agent threads requiring absolute file paths, relevant file sharing, code snippet inclusion only when load-bearing, emoji avoidance, and proper punctuation before tool calls.

##### 6.2.4.8 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise sub-agent reporting and detailed standalone writeups based on caller context.
