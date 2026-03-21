# Claude Code System Prompts Index

Authoritative guidance for building, operating, and extending Claude Code — covering everything from how agents are architected and automated to how developers interact with codebases, maintain context, and ship reliable, secure software.

## Table of Contents

1. [Agent Orchestration & Multi-Agent Systems](#1-agent-orchestration-multi-agent-systems)
   1. [Planning & Execution Control](#11-planning-execution-control)
      1. [Plan Mode Workflow & Control](#111-plan-mode-workflow-control)
         1. [Plan mode is active (5-phase) [System Reminder]](#1111-plan-mode-is-active-5-phase-system-reminder)
         2. [Plan mode is active (iterative) [System Reminder]](#1112-plan-mode-is-active-iterative-system-reminder)
         3. [Plan mode is active (subagent) [System Reminder]](#1113-plan-mode-is-active-subagent-system-reminder)
         4. [Plan mode re-entry (System Reminder)](#1114-plan-mode-re-entry-system-reminder)
         5. [Plan file reference (System Reminder)](#1115-plan-file-reference-system-reminder)
         6. [Exited plan mode (System Reminder)](#1116-exited-plan-mode-system-reminder)
         7. [Verify plan reminder (System Reminder)](#1117-verify-plan-reminder-system-reminder)
         8. [Phase four of plan mode (System Prompt)](#1118-phase-four-of-plan-mode-system-prompt)
         9. [EnterPlanMode (Tool Description)](#1119-enterplanmode-tool-description)
         10. [ExitPlanMode (Tool Description)](#11110-exitplanmode-tool-description)
         11. [Plan mode (enhanced) [Agent Prompt]](#11111-plan-mode-enhanced-agent-prompt)
      2. [Autonomous & Auto Mode Execution](#112-autonomous-auto-mode-execution)
         1. [Auto mode (System Prompt)](#1121-auto-mode-system-prompt)
         2. [Executing actions with care (System Prompt)](#1122-executing-actions-with-care-system-prompt)
         3. [Tool execution denied (System Prompt)](#1123-tool-execution-denied-system-prompt)
         4. [System section (System Prompt)](#1124-system-section-system-prompt)
   2. [Task Tracking & Work Decomposition](#12-task-tracking-work-decomposition)
      1. [Task & Todo Tracking](#121-task-todo-tracking)
         1. [Task status (System Reminder)](#1211-task-status-system-reminder)
         2. [Task tools reminder (System Reminder)](#1212-task-tools-reminder-system-reminder)
         3. [TodoWrite reminder (System Reminder)](#1213-todowrite-reminder-system-reminder)
         4. [TaskCreate (Tool Description)](#1214-taskcreate-tool-description)
         5. [TodoWrite (Tool Description)](#1215-todowrite-tool-description)
         6. [Tool usage (task management) [System Prompt]](#1216-tool-usage-task-management-system-prompt)
      2. [Parallel Tool Execution & Efficiency](#122-parallel-tool-execution-efficiency)
         1. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#1221-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         2. [/batch slash command (Agent Prompt)](#1222-batch-slash-command-agent-prompt)
   3. [Subagent Spawning & Team Coordination](#13-subagent-spawning-team-coordination)
      1. [Multi-Agent Team Coordination & Swarm Management](#131-multi-agent-team-coordination-swarm-management)
         1. [Team Coordination (System Reminder)](#1311-team-coordination-system-reminder)
         2. [Team Shutdown (System Reminder)](#1312-team-shutdown-system-reminder)
         3. [Teammate Communication (System Prompt)](#1313-teammate-communication-system-prompt)
         4. [Team memory content display (System Prompt)](#1314-team-memory-content-display-system-prompt)
         5. [TeammateTool (Tool Description)](#1315-teammatetool-tool-description)
         6. [TeamDelete (Tool Description)](#1316-teamdelete-tool-description)
         7. [SendMessageTool (Tool Description)](#1317-sendmessagetool-tool-description)
         8. [TaskList (teammate workflow) [Tool Description]](#1318-tasklist-teammate-workflow-tool-description)
         9. [Subagent delegation examples (System Prompt)](#1319-subagent-delegation-examples-system-prompt)
         10. [Fork usage guidelines (System Prompt)](#13110-fork-usage-guidelines-system-prompt)
      2. [Subagent Spawning & Delegation](#132-subagent-spawning-delegation)
         1. [Agent (usage notes) [Tool Description]](#1321-agent-usage-notes-tool-description)
         2. [Agent (when to launch subagents) [Tool Description]](#1322-agent-when-to-launch-subagents-tool-description)
         3. [Tool usage (delegate exploration) [System Prompt]](#1323-tool-usage-delegate-exploration-system-prompt)
         4. [Tool usage (subagent guidance) [System Prompt]](#1324-tool-usage-subagent-guidance-system-prompt)
         5. [Writing subagent prompts (System Prompt)](#1325-writing-subagent-prompts-system-prompt)
         6. [Worker fork execution (Agent Prompt)](#1326-worker-fork-execution-agent-prompt)
         7. [Common suffix (response format) [Agent Prompt]](#1327-common-suffix-response-format-agent-prompt)
   4. [Agent Design & Architecture](#14-agent-design-architecture)
      1. [Agent creation architect (Agent Prompt)](#141-agent-creation-architect-agent-prompt)
      2. [Auto mode rule reviewer (Agent Prompt)](#142-auto-mode-rule-reviewer-agent-prompt)
      3. [Agent Summary Generation (System Prompt)](#143-agent-summary-generation-system-prompt)
      4. [Agent thread notes (System Prompt)](#144-agent-thread-notes-system-prompt)
2. [Shell, File & External Tool Operations](#2-shell-file-external-tool-operations)
   1. [Bash Command Execution](#21-bash-command-execution)
      1. [Bash Tool Usage & Command Execution](#211-bash-tool-usage-command-execution)
         1. [Bash (overview) [Tool Description]](#2111-bash-overview-tool-description)
         2. [Bash (command description) [Tool Description]](#2112-bash-command-description-tool-description)
         3. [Bash (maintain cwd) [Tool Description]](#2113-bash-maintain-cwd-tool-description)
         4. [Bash (working directory) [Tool Description]](#2114-bash-working-directory-tool-description)
         5. [Bash (no newlines) [Tool Description]](#2115-bash-no-newlines-tool-description)
         6. [Bash (quote file paths) [Tool Description]](#2116-bash-quote-file-paths-tool-description)
         7. [Bash (parallel commands) [Tool Description]](#2117-bash-parallel-commands-tool-description)
         8. [Bash (sequential commands) [Tool Description]](#2118-bash-sequential-commands-tool-description)
         9. [Bash (semicolon usage) [Tool Description]](#2119-bash-semicolon-usage-tool-description)
         10. [Bash (sleep — keep short) [Tool Description]](#21110-bash-sleep-—-keep-short-tool-description)
         11. [Bash (sleep — no polling background tasks) [Tool Description]](#21111-bash-sleep-—-no-polling-background-tasks-tool-description)
         12. [Bash (sleep — run immediately) [Tool Description]](#21112-bash-sleep-—-run-immediately-tool-description)
         13. [Bash (sleep — use check commands) [Tool Description]](#21113-bash-sleep-—-use-check-commands-tool-description)
         14. [Bash (timeout) [Tool Description]](#21114-bash-timeout-tool-description)
         15. [Bash (verify parent directory) [Tool Description]](#21115-bash-verify-parent-directory-tool-description)
         16. [Bash (built-in tools note) [Tool Description]](#21116-bash-built-in-tools-note-tool-description)
         17. [Bash (prefer dedicated tools) [Tool Description]](#21117-bash-prefer-dedicated-tools-tool-description)
         18. [One of six rules for using sleep command (System Prompt)](#21118-one-of-six-rules-for-using-sleep-command-system-prompt)
      2. [Bash Tool Alternatives — Prefer Dedicated Tools](#212-bash-tool-alternatives-—-prefer-dedicated-tools)
         1. [Bash (alternative — communication) [Tool Description]](#2121-bash-alternative-—-communication-tool-description)
         2. [Bash (alternative — content search) [Tool Description]](#2122-bash-alternative-—-content-search-tool-description)
         3. [Bash (alternative — edit files) [Tool Description]](#2123-bash-alternative-—-edit-files-tool-description)
         4. [Bash (alternative — file search) [Tool Description]](#2124-bash-alternative-—-file-search-tool-description)
         5. [Bash (alternative — read files) [Tool Description]](#2125-bash-alternative-—-read-files-tool-description)
         6. [Bash (alternative — write files) [Tool Description]](#2126-bash-alternative-—-write-files-tool-description)
         7. [Tool usage (create files) [System Prompt]](#2127-tool-usage-create-files-system-prompt)
         8. [Tool usage (edit files) [System Prompt]](#2128-tool-usage-edit-files-system-prompt)
         9. [Tool usage (read files) [System Prompt]](#2129-tool-usage-read-files-system-prompt)
         10. [Tool usage (search content) [System Prompt]](#21210-tool-usage-search-content-system-prompt)
         11. [Tool usage (search files) [System Prompt]](#21211-tool-usage-search-files-system-prompt)
         12. [Tool usage (reserve Bash) [System Prompt]](#21212-tool-usage-reserve-bash-system-prompt)
   2. [Bash Sandbox Security & Restrictions](#22-bash-sandbox-security-restrictions)
      1. [Bash (sandbox — adjust settings) [Tool Description]](#221-bash-sandbox-—-adjust-settings-tool-description)
      2. [Bash (sandbox — default to sandbox) [Tool Description]](#222-bash-sandbox-—-default-to-sandbox-tool-description)
      3. [Bash (sandbox — evidence: access denied) [Tool Description]](#223-bash-sandbox-—-evidence-access-denied-tool-description)
      4. [Bash (sandbox — evidence list header) [Tool Description]](#224-bash-sandbox-—-evidence-list-header-tool-description)
      5. [Bash (sandbox — evidence: network failures) [Tool Description]](#225-bash-sandbox-—-evidence-network-failures-tool-description)
      6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#226-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#227-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
      8. [Bash (sandbox — explain restriction) [Tool Description]](#228-bash-sandbox-—-explain-restriction-tool-description)
      9. [Bash (sandbox — failure evidence condition) [Tool Description]](#229-bash-sandbox-—-failure-evidence-condition-tool-description)
      10. [Bash (sandbox — mandatory mode) [Tool Description]](#2210-bash-sandbox-—-mandatory-mode-tool-description)
      11. [Bash (sandbox — no exceptions) [Tool Description]](#2211-bash-sandbox-—-no-exceptions-tool-description)
      12. [Bash (sandbox — no sensitive paths) [Tool Description]](#2212-bash-sandbox-—-no-sensitive-paths-tool-description)
      13. [Bash (sandbox — per-command) [Tool Description]](#2213-bash-sandbox-—-per-command-tool-description)
      14. [Bash (sandbox — response header) [Tool Description]](#2214-bash-sandbox-—-response-header-tool-description)
      15. [Bash (sandbox — retry without sandbox) [Tool Description]](#2215-bash-sandbox-—-retry-without-sandbox-tool-description)
      16. [Bash (sandbox — tmpdir) [Tool Description]](#2216-bash-sandbox-—-tmpdir-tool-description)
      17. [Bash (sandbox — user permission prompt) [Tool Description]](#2217-bash-sandbox-—-user-permission-prompt-tool-description)
   3. [File System Tools — Read, Write, Edit, Search](#23-file-system-tools-—-read-write-edit-search)
      1. [ReadFile (Tool Description)](#231-readfile-tool-description)
      2. [Write (Tool Description)](#232-write-tool-description)
      3. [Edit (Tool Description)](#233-edit-tool-description)
      4. [Glob (Tool Description)](#234-glob-tool-description)
      5. [Grep (Tool Description)](#235-grep-tool-description)
      6. [Tool usage (direct search) [System Prompt]](#236-tool-usage-direct-search-system-prompt)
   4. [Browser Automation & Web Interaction](#24-browser-automation-web-interaction)
      1. [Computer (Tool Description)](#241-computer-tool-description)
      2. [Computer action (Tool Parameter)](#242-computer-action-tool-parameter)
      3. [Claude in Chrome browser automation (System Prompt)](#243-claude-in-chrome-browser-automation-system-prompt)
      4. [Chrome browser MCP tools (System Prompt)](#244-chrome-browser-mcp-tools-system-prompt)
      5. [WebFetch (Tool Description)](#245-webfetch-tool-description)
      6. [WebSearch (Tool Description)](#246-websearch-tool-description)
      7. [WebFetch summarizer (Agent Prompt)](#247-webfetch-summarizer-agent-prompt)
3. [Session, Memory & Context Management](#3-session-memory-context-management)
   1. [Memory Management & Persistence](#31-memory-management-persistence)
      1. [Memory file contents (System Reminder)](#311-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#312-nested-memory-contents-system-reminder)
      3. [Memory description of user feedback (System Prompt)](#313-memory-description-of-user-feedback-system-prompt)
      4. [Description part of memory instructions (System Prompt)](#314-description-part-of-memory-instructions-system-prompt)
      5. [Agent memory instructions (System Prompt)](#315-agent-memory-instructions-system-prompt)
      6. [Determine which memory files to attach (Agent Prompt)](#316-determine-which-memory-files-to-attach-agent-prompt)
      7. [Dream memory consolidation (Agent Prompt)](#317-dream-memory-consolidation-agent-prompt)
      8. [Session memory template (Data)](#318-session-memory-template-data)
   2. [Context Compaction & Conversation Summarization](#32-context-compaction-conversation-summarization)
      1. [Analysis instructions for full compact prompt (full conversation) [System Prompt]](#321-analysis-instructions-for-full-compact-prompt-full-conversation-system-prompt)
      2. [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](#322-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag-system-prompt)
      3. [Analysis instructions for full compact prompt (recent messages) [System Prompt]](#323-analysis-instructions-for-full-compact-prompt-recent-messages-system-prompt)
      4. [Context compaction summary (System Prompt)](#324-context-compaction-summary-system-prompt)
      5. [Conversation summarization (Agent Prompt)](#325-conversation-summarization-agent-prompt)
      6. [Recent Message Summarization (Agent Prompt)](#326-recent-message-summarization-agent-prompt)
   3. [Session Management & State](#33-session-management-state)
      1. [Session continuation (System Reminder)](#331-session-continuation-system-reminder)
      2. [File exists but empty (System Reminder)](#332-file-exists-but-empty-system-reminder)
      3. [File modified by user or linter (System Reminder)](#333-file-modified-by-user-or-linter-system-reminder)
      4. [File opened in IDE (System Reminder)](#334-file-opened-in-ide-system-reminder)
      5. [File truncated (System Reminder)](#335-file-truncated-system-reminder)
      6. [File shorter than offset (System Reminder)](#336-file-shorter-than-offset-system-reminder)
      7. [Lines selected in IDE (System Reminder)](#337-lines-selected-in-ide-system-reminder)
      8. [Compact file reference (System Reminder)](#338-compact-file-reference-system-reminder)
      9. [Session Search Assistant (Agent Prompt)](#339-session-search-assistant-agent-prompt)
      10. [Session title and branch generation (Agent Prompt)](#3310-session-title-and-branch-generation-agent-prompt)
      11. [Coding session title generator (Agent Prompt)](#3311-coding-session-title-generator-agent-prompt)
      12. [Session memory update instructions (Agent Prompt)](#3312-session-memory-update-instructions-agent-prompt)
   4. [Resource Budgeting & Usage Analytics](#34-resource-budgeting-usage-analytics)
      1. [Resource & Budget Tracking](#341-resource-budget-tracking)
         1. [Token usage (System Reminder)](#3411-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#3412-usd-budget-system-reminder)
         3. [Invoked skills (System Reminder)](#3413-invoked-skills-system-reminder)
      2. [Usage Insights & Analytics](#342-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#3421-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#3422-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#3423-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#3424-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#3425-insights-suggestions-system-prompt)
4. [Code Quality, Security & Review](#4-code-quality-security-review)
   1. [Code Quality & Engineering Best Practices](#41-code-quality-engineering-best-practices)
      1. [Doing tasks (avoid over-engineering) [System Prompt]](#411-doing-tasks-avoid-over-engineering-system-prompt)
      2. [Doing tasks (no premature abstractions) [System Prompt]](#412-doing-tasks-no-premature-abstractions-system-prompt)
      3. [Doing tasks (no compatibility hacks) [System Prompt]](#413-doing-tasks-no-compatibility-hacks-system-prompt)
      4. [Doing tasks (no unnecessary additions) [System Prompt]](#414-doing-tasks-no-unnecessary-additions-system-prompt)
      5. [Doing tasks (no unnecessary error handling) [System Prompt]](#415-doing-tasks-no-unnecessary-error-handling-system-prompt)
      6. [Doing tasks (minimize file creation) [System Prompt]](#416-doing-tasks-minimize-file-creation-system-prompt)
      7. [Doing tasks (read before modifying) [System Prompt]](#417-doing-tasks-read-before-modifying-system-prompt)
      8. [Doing tasks (security) [System Prompt]](#418-doing-tasks-security-system-prompt)
      9. [Doing tasks (software engineering focus) [System Prompt]](#419-doing-tasks-software-engineering-focus-system-prompt)
      10. [Doing tasks (ambitious tasks) [System Prompt]](#4110-doing-tasks-ambitious-tasks-system-prompt)
      11. [Doing tasks (blocked approach) [System Prompt]](#4111-doing-tasks-blocked-approach-system-prompt)
      12. [Doing tasks (no time estimates) [System Prompt]](#4112-doing-tasks-no-time-estimates-system-prompt)
      13. [Doing tasks (help and feedback) [System Prompt]](#4113-doing-tasks-help-and-feedback-system-prompt)
   2. [Security Monitoring & Vulnerability Analysis](#42-security-monitoring-vulnerability-analysis)
      1. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#421-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
      2. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#422-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      3. [/security-review slash command (Agent Prompt)](#423-security-review-slash-command-agent-prompt)
      4. [Malware analysis after Read tool call (System Reminder)](#424-malware-analysis-after-read-tool-call-system-reminder)
      5. [Censoring assistance with malicious activities (System Prompt)](#425-censoring-assistance-with-malicious-activities-system-prompt)
      6. [Diagnostics & Error Detection](#426-diagnostics-error-detection)
         1. [New diagnostics detected (System Reminder)](#4261-new-diagnostics-detected-system-reminder)
         2. [Bash command prefix detection (Agent Prompt)](#4262-bash-command-prefix-detection-agent-prompt)
   3. [Code Review & PR Management](#43-code-review-pr-management)
      1. [/review-pr slash command (Agent Prompt)](#431-review-pr-slash-command-agent-prompt)
      2. [/review slash command (remote) [Agent Prompt]](#432-review-slash-command-remote-agent-prompt)
      3. [/pr-comments slash command (Agent Prompt)](#433-pr-comments-slash-command-agent-prompt)
      4. [Simplify (Skill)](#434-simplify-skill)
   4. [Verification & Testing](#44-verification-testing)
      1. [Verification specialist (Agent Prompt)](#441-verification-specialist-agent-prompt)
      2. [Verification specialist (Skill)](#442-verification-specialist-skill)
      3. [Create verifier skills (Skill)](#443-create-verifier-skills-skill)
      4. [update-config (7-step verification flow) [Skill]](#444-update-config-7-step-verification-flow-skill)
5. [Hooks, Automation & Scheduling](#5-hooks-automation-scheduling)
   1. [Hook System Notifications & Events](#51-hook-system-notifications-events)
      1. [Hook stopped continuation prefix (System Reminder)](#511-hook-stopped-continuation-prefix-system-reminder)
      2. [Hook stopped continuation (System Reminder)](#512-hook-stopped-continuation-system-reminder)
      3. [Hook success (System Reminder)](#513-hook-success-system-reminder)
      4. [Hook additional context (System Reminder)](#514-hook-additional-context-system-reminder)
      5. [Hook blocking error (System Reminder)](#515-hook-blocking-error-system-reminder)
      6. [Hooks Configuration (System Prompt)](#516-hooks-configuration-system-prompt)
      7. [Hook condition evaluator (Agent Prompt)](#517-hook-condition-evaluator-agent-prompt)
      8. [Agent Hook (Agent Prompt)](#518-agent-hook-agent-prompt)
   2. [Skills System & Slash Commands](#52-skills-system-slash-commands)
      1. [Skill (Tool Description)](#521-skill-tool-description)
      2. [Tool usage (skill invocation) [System Prompt]](#522-tool-usage-skill-invocation-system-prompt)
      3. [Skillify Current Session (System Prompt)](#523-skillify-current-session-system-prompt)
      4. [/loop slash command (Skill)](#524-loop-slash-command-skill)
      5. [/stuck slash command (Skill)](#525-stuck-slash-command-skill)
      6. [Update Claude Code Config (Skill)](#526-update-claude-code-config-skill)
      7. [Debugging (Skill)](#527-debugging-skill)
   3. [Scheduling & Cron Jobs](#53-scheduling-cron-jobs)
      1. [CronCreate (Tool Description)](#531-croncreate-tool-description)
      2. [/schedule slash command (Agent Prompt)](#532-schedule-slash-command-agent-prompt)
      3. [Sleep (Tool Description)](#533-sleep-tool-description)
   4. [GitHub Integration & CI/CD](#54-github-integration-cicd)
      1. [GitHub Actions workflow for @claude mentions (Data)](#541-github-actions-workflow-for-claude-mentions-data)
      2. [GitHub App installation PR description (Data)](#542-github-app-installation-pr-description-data)
6. [Codebase Navigation, Git & Workspace](#6-codebase-navigation-git-workspace)
   1. [Codebase Exploration & Documentation](#61-codebase-exploration-documentation)
      1. [Codebase Exploration & Analysis](#611-codebase-exploration-analysis)
         1. [Explore (Agent Prompt)](#6111-explore-agent-prompt)
         2. [Explore strengths and guidelines (Agent Prompt)](#6112-explore-strengths-and-guidelines-agent-prompt)
         3. [LSP (Tool Description)](#6113-lsp-tool-description)
         4. [CLAUDE.md creation (Agent Prompt)](#6114-claudemd-creation-agent-prompt)
         5. [/init CLAUDE.md and skill setup (new version) [Skill]](#6115-init-claudemd-and-skill-setup-new-version-skill)
      2. [Documentation & Knowledge Management](#612-documentation-knowledge-management)
         1. [Update Magic Docs (Agent Prompt)](#6121-update-magic-docs-agent-prompt)
         2. [Prompt Suggestion Generator v2 (Agent Prompt)](#6122-prompt-suggestion-generator-v2-agent-prompt)
         3. [Claude guide agent (Agent Prompt)](#6123-claude-guide-agent-agent-prompt)
   2. [Git Operations & Version Control](#62-git-operations-version-control)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#621-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#622-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#623-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#624-bash-git-—-prefer-new-commits-tool-description)
      5. [Git status (System Prompt)](#625-git-status-system-prompt)
      6. [Quick git commit (Agent Prompt)](#626-quick-git-commit-agent-prompt)
      7. [Quick PR creation (Agent Prompt)](#627-quick-pr-creation-agent-prompt)
      8. [EnterWorktree (Tool Description)](#628-enterworktree-tool-description)
      9. [ExitWorktree (Tool Description)](#629-exitworktree-tool-description)
   3. [Workspace & File Management](#63-workspace-file-management)
      1. [Scratchpad directory (System Prompt)](#631-scratchpad-directory-system-prompt)
      2. [Minimal mode (System Prompt)](#632-minimal-mode-system-prompt)
      3. [NotebookEdit (Tool Description)](#633-notebookedit-tool-description)
      4. [Worker instructions (System Prompt)](#634-worker-instructions-system-prompt)
      5. [Status line setup (Agent Prompt)](#635-status-line-setup-agent-prompt)
   4. [MCP Resources & Tool Discovery](#64-mcp-resources-tool-discovery)
      1. [MCP resource no content (System Reminder)](#641-mcp-resource-no-content-system-reminder)
      2. [MCP resource no displayable content (System Reminder)](#642-mcp-resource-no-displayable-content-system-reminder)
      3. [ToolSearch (second part) [Tool Description]](#643-toolsearch-second-part-tool-description)
7. [API, SDK Reference & User Interaction](#7-api-sdk-reference-user-interaction)
   1. [Claude API Reference — Language SDKs](#71-claude-api-reference-—-language-sdks)
      1. [Claude API reference — Python (Data)](#711-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#712-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#713-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#714-claude-api-reference-—-java-data)
      5. [Claude API reference — C# (Data)](#715-claude-api-reference-—-c-data)
      6. [Claude API reference — Ruby (Data)](#716-claude-api-reference-—-ruby-data)
      7. [Claude API reference — PHP (Data)](#717-claude-api-reference-—-php-data)
      8. [Claude API reference — cURL (Data)](#718-claude-api-reference-—-curl-data)
      9. [Claude model catalog (Data)](#719-claude-model-catalog-data)
   2. [Agent SDK Reference & Patterns](#72-agent-sdk-reference-patterns)
      1. [Agent SDK reference — Python (Data)](#721-agent-sdk-reference-—-python-data)
      2. [Agent SDK reference — TypeScript (Data)](#722-agent-sdk-reference-—-typescript-data)
      3. [Agent SDK patterns — Python (Data)](#723-agent-sdk-patterns-—-python-data)
      4. [Agent SDK patterns — TypeScript (Data)](#724-agent-sdk-patterns-—-typescript-data)
      5. [Build with Claude API (Skill)](#725-build-with-claude-api-skill)
      6. [Build with Claude API (reference guide) [Skill]](#726-build-with-claude-api-reference-guide-skill)
   3. [API Features — Tool Use, Streaming & Files](#73-api-features-—-tool-use-streaming-files)
      1. [Tool use concepts (Data)](#731-tool-use-concepts-data)
      2. [Tool use reference — Python (Data)](#732-tool-use-reference-—-python-data)
      3. [Tool use reference — TypeScript (Data)](#733-tool-use-reference-—-typescript-data)
      4. [Streaming reference — Python (Data)](#734-streaming-reference-—-python-data)
      5. [Streaming reference — TypeScript (Data)](#735-streaming-reference-—-typescript-data)
      6. [Files API reference — Python (Data)](#736-files-api-reference-—-python-data)
      7. [Files API reference — TypeScript (Data)](#737-files-api-reference-—-typescript-data)
      8. [Message Batches API reference — Python (Data)](#738-message-batches-api-reference-—-python-data)
      9. [HTTP error codes reference (Data)](#739-http-error-codes-reference-data)
      10. [Live documentation sources (Data)](#7310-live-documentation-sources-data)
   4. [User Interaction & Communication](#74-user-interaction-communication)
      1. [User Interaction & Question Asking](#741-user-interaction-question-asking)
         1. [AskUserQuestion (Tool Description)](#7411-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#7412-askuserquestion-preview-field-tool-description)
         3. [Option previewer (System Prompt)](#7413-option-previewer-system-prompt)
         4. [/btw side question (System Reminder)](#7414-btw-side-question-system-reminder)
         5. [Agent mention (System Reminder)](#7415-agent-mention-system-reminder)
      2. [Output Style, Tone & Communication](#742-output-style-tone-communication)
         1. [Tone and style (code references) [System Prompt]](#7421-tone-and-style-code-references-system-prompt)
         2. [Tone and style (concise output — short) [System Prompt]](#7422-tone-and-style-concise-output-—-short-system-prompt)
         3. [Output efficiency (System Prompt)](#7423-output-efficiency-system-prompt)
         4. [How to use the SendUserMessage tool (System Prompt)](#7424-how-to-use-the-sendusermessage-tool-system-prompt)
         5. [SendMessageTool (non-agent-teams) [Tool Description]](#7425-sendmessagetool-non-agent-teams-tool-description)
         6. [Output style active (System Reminder)](#7426-output-style-active-system-reminder)
         7. [Bash command description writer (Agent Prompt)](#7427-bash-command-description-writer-agent-prompt)
      3. [Learning Mode & Educational Features](#743-learning-mode-educational-features)
         1. [Learning mode (System Prompt)](#7431-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#7432-learning-mode-insights-system-prompt)

---

## 1. Agent Orchestration & Multi-Agent Systems

Frameworks for designing, spawning, and coordinating AI agents — from single-agent plan-mode workflows to swarms of parallel subagents with shared task queues and messaging protocols.

### 1.1 Planning & Execution Control

Plan mode enforces read-only exploration before implementation, with variants for multi-agent workflows, iterative pair-planning, and autonomous execution with graduated safety controls.

#### 1.1.1 Plan Mode Workflow & Control

Plan mode enforces a read-only exploration phase where Claude designs implementation strategies before writing code, with variants supporting five-phase multi-agent workflows, iterative pair-planning with users, or simplified subagent modes. Transitions in and out of plan mode gate execution, require plan file updates, and optionally trigger verification after implementation to confirm all planned changes were executed.

##### 1.1.1.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Comprehensive plan mode workflow with five phases: initial understanding via parallel exploration agents, design via planning agents, review, phase four execution, and plan mode exit. Enforces read-only restrictions and requires plan file updates before execution.

##### 1.1.1.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, asks clarifying questions, and converges on a complete plan before execution. Enforces read-only restrictions except for plan file edits.

##### 1.1.1.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode for subagents enforcing read-only restrictions and plan file editing, with instructions to answer queries and ask clarifying questions.

##### 1.1.1.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guidance for re-entering plan mode after previous exit, requiring evaluation of existing plan against current request and decision to continue or start fresh.

##### 1.1.1.5 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

Reference to an existing plan file with its contents, suggesting continuation if relevant and incomplete.

##### 1.1.1.6 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and it can now make edits, run tools, and take actions, optionally referencing the plan file location.

##### 1.1.1.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Instructs Claude to call a verification tool directly after completing plan implementation to confirm all plan items were executed correctly.

##### 1.1.1.8 [Phase four of plan mode (System Prompt)](system-prompts/system-prompt-phase-four-of-plan-mode.md)

Final phase of plan mode that writes a concise plan file with file paths, changes, function references, and a single verification command, limited to 40 lines.

##### 1.1.1.9 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions Claude into plan mode to explore codebases and design implementation approaches before writing code. Guides when to use planning for non-trivial tasks involving multiple approaches, architectural decisions, or multi-file changes, and when to skip it for simple fixes.

##### 1.1.1.10 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning and requests user approval before proceeding with implementation. Reads the plan from a file and presents it for review, distinguishing between implementation planning and research tasks.

##### 1.1.1.11 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent that explores codebases and designs implementation plans in read-only mode. Identifies critical files, traces code paths, and provides step-by-step implementation strategies with architectural trade-off analysis.

#### 1.1.2 Autonomous & Auto Mode Execution

Governs autonomous task execution with graduated safety controls: auto mode prioritizes action with security guardrails, careful execution requires confirmation for destructive operations, and denied tools trigger workaround attempts rather than retries. Together they balance speed with reversibility and user oversight.

##### 1.1.2.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Enables continuous autonomous task execution with immediate implementation, minimal interruptions, preference for action over planning, and strict prohibition on posting to public services without explicit user approval.

##### 1.1.2.2 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Requires careful consideration of reversibility and blast radius, confirming risky actions like deletions, force-pushes, shared state changes, and third-party uploads before proceeding unless explicitly authorized in durable instructions.

##### 1.1.2.3 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to respect tool execution denials by attempting only reasonable workarounds, not malicious bypasses, and to stop and explain to the user if the denied capability is essential to complete their request.

##### 1.1.2.4 [System section (System Prompt)](system-prompts/system-prompt-system-section.md)

Describes tool permission modes and user approval workflows, instructing Claude to adjust approach if tools are denied rather than retrying.

### 1.2 Task Tracking & Work Decomposition

Tools for breaking complex work into tracked steps, managing task states, and decomposing large changes into parallelizable units with progress visibility.

#### 1.2.1 Task & Todo Tracking

Task and todo tools break down complex work into tracked steps with state management (pending, in_progress, completed), emphasizing immediate completion marking and limiting concurrent in_progress tasks. These tools organize multi-step coding sessions and provide progress visibility without requiring explicit status checks.

##### 1.2.1.1 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

##### 1.2.1.2 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task creation and update tools for tracking progress on relevant work.

##### 1.2.1.3 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use TodoWrite tool for task tracking and to clean up stale todo lists.

##### 1.2.1.4 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress and organize complex multi-step work. Emphasizes using it for non-trivial tasks with 3+ steps and marking tasks in_progress before starting work.

##### 1.2.1.5 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages task lists for coding sessions with state tracking (pending, in_progress, completed) and dual task forms (imperative and active continuous). Emphasizes limiting to one in_progress task and marking completion only when fully accomplished.

##### 1.2.1.6 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite to break down work into tracked tasks, marking each as completed immediately upon finishing rather than batching completions.

#### 1.2.2 Parallel Tool Execution & Efficiency

Maximizes throughput by executing independent operations concurrently while respecting sequential dependencies. Decomposes large codebase changes into parallelizable units with background workers, tracking progress across distributed work.

##### 1.2.2.1 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to call independent tools in parallel and sequential tools in order to maximize efficiency.

##### 1.2.2.2 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5-30 independent units, determining e2e test recipes, and spawning background worker agents. Tracks progress and consolidates results across all units.

### 1.3 Subagent Spawning & Team Coordination

Spawning specialized subagents for parallel work, coordinating agent teams through shared queues and messaging protocols, and managing graceful shutdown workflows.

#### 1.3.1 Multi-Agent Team Coordination & Swarm Management

Teams coordinate multiple agents working in parallel through shared task lists, messaging protocols, and graceful shutdown workflows. Agents discover work from shared queues, communicate via SendMessage tool, and coordinate shutdown before cleanup, with support for delegating tasks to specialized subagents and forking for parallel research or implementation.

##### 1.3.1.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes team identity and coordination protocols including team name, agent name, task list management, and messaging conventions using teammate names.

##### 1.3.1.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires graceful team shutdown via shutdown requests, approval waiting, and cleanup before returning final response to user.

##### 1.3.1.3 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents in a team to use SendMessage tool for teammate communication, with support for individual and broadcast messaging.

##### 1.3.1.4 [Team memory content display (System Prompt)](system-prompts/system-prompt-team-memory-content-display.md)

Renders shared team memory file contents with path and metadata for injection into conversation context.

##### 1.3.1.5 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages teams and coordinates multiple agents working in parallel on complex projects. Covers team creation, task assignment, teammate spawning, idle state management, and graceful shutdown workflows with emphasis on automatic message delivery and task list coordination.

##### 1.3.1.6 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories when swarm work is complete, with a requirement that all active team members be gracefully terminated first.

##### 1.3.1.7 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables agent teammates to send messages and handle protocol requests in a swarm. Supports direct messaging, broadcasting, and structured protocol messages for shutdown and plan approval workflows.

##### 1.3.1.8 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes how teammates discover and claim available work from a shared task list, preferring tasks in ID order and checking for unblocked pending tasks after completing each assignment.

##### 1.3.1.9 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides examples of delegating tasks to subagents, handling waiting states, and reporting results with independent context and specialized agent types.

##### 1.3.1.10 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Guides fork usage for research and implementation work, prohibiting mid-flight output reading and fabrication of fork results, requiring trust in completion notifications and status reporting if user asks before fork finishes.

#### 1.3.2 Subagent Spawning & Delegation

Coordinates multi-agent task execution by spawning specialized subagents for parallel work, codebase exploration, and complex workflows. Manages context inheritance, prompt composition, and output aggregation while preventing redundant effort and respecting scope boundaries.

##### 1.3.2.1 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Provides comprehensive usage guidance for the Agent tool, covering concurrent agent launches, background execution, agent resumption via SendMessage, worktree isolation, and context-specific parameter availability for subagents and teammates.

##### 1.3.2.2 [Agent (when to launch subagents) [Tool Description]](system-prompts/tool-description-agent-when-to-launch-subagents.md)

Describes when to use the Agent tool to launch specialized subagent subprocesses for autonomous handling of complex multi-step tasks, with guidance on selecting agent types or forking context.

##### 1.3.2.3 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Instructs Claude to use the Task tool with exploration subagents for broad codebase research when simple directed searches are insufficient or will exceed query limits.

##### 1.3.2.4 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Provides guidance on using the Task tool with specialized subagents for parallelizing queries and protecting context, while avoiding redundant work already performed by delegated agents.

##### 1.3.2.5 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Provides guidelines for writing effective subagent prompts, distinguishing between context-inheriting agents (which need directives and scope clarification) and fresh agents (which need background explanation and context), while emphasizing that prompts should prove understanding rather than delegate synthesis.

##### 1.3.2.6 [Worker fork execution (Agent Prompt)](system-prompts/agent-prompt-worker-fork-execution.md)

System prompt for a forked worker sub-agent that executes directives directly without spawning further sub-agents. Enforces silent tool execution, structured reporting, and scope adherence with 500-word limit.

##### 1.3.2.7 [Common suffix (response format) [Agent Prompt]](system-prompts/agent-prompt-common-suffix-response-format.md)

Appends response format instructions to agent prompts, switching between concise sub-agent reporting and detailed standalone writeups based on whether the agent is a subagent or primary agent.

### 1.4 Agent Design & Architecture

Frameworks for designing and validating AI agents through system prompt engineering, persona creation, and rule specification. Covers agent architecture patterns, auto-mode classifier rule validation, and behavioral guidelines for consistent agent thread execution.

#### 1.4.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Instructs Claude to architect custom AI agents by extracting user intent, designing expert personas, writing comprehensive system prompts, and creating memorable identifiers. Emphasizes translating requirements into precisely-tuned specifications that align with project patterns and anticipate edge cases.

#### 1.4.2 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability. Evaluates allow, soft_deny, and environment rule categories to ensure the LLM classifier can correctly interpret and act on them.

#### 1.4.3 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise agent action summaries in present tense, avoiding past tense and branch names.

#### 1.4.4 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths only, avoid emojis, include relevant file paths and code snippets in final responses, and omit colons before tool calls.

---

## 2. Shell, File & External Tool Operations

Practical execution layer covering bash command execution, file system operations, browser automation, and strategic tool selection — including security sandboxing for shell commands.

### 2.1 Bash Command Execution

Guidelines for executing shell commands efficiently — syntax conventions, command chaining, parallel vs. sequential execution, and working directory management.

#### 2.1.1 Bash Tool Usage & Command Execution

Comprehensive guidelines for executing shell commands efficiently, covering syntax conventions, working directory management, command chaining strategies, and timing considerations. Emphasizes parallel execution for independent operations and sequential chaining with error handling for dependent commands.

##### 2.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

##### 2.1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs writing clear, concise descriptions of bash commands, with brief descriptions for simple commands and contextual detail for complex piped or obscure commands.

##### 2.1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs maintaining current working directory by using absolute paths and avoiding cd unless explicitly requested.

##### 2.1.1.4 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not, with environment initialized from user profile.

##### 2.1.1.5 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits using newlines to separate bash commands outside of quoted strings.

##### 2.1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs quoting file paths containing spaces with double quotes in bash commands.

##### 2.1.1.7 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs running independent bash commands as parallel tool calls in a single message to improve efficiency.

##### 2.1.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs to chain dependent commands with '&&' in a single call when they must run sequentially.

##### 2.1.1.9 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs to use semicolons only when running commands sequentially but failure of earlier commands is acceptable.

##### 2.1.1.10 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs to keep sleep duration short (1-5 seconds) to avoid blocking the user.

##### 2.1.1.11 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs not to poll background tasks started with `run_in_background` since completion notifications will be provided.

##### 2.1.1.12 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs not to sleep between commands that can run immediately.

##### 2.1.1.13 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs to use check commands like `gh run view` rather than sleeping when polling external processes.

##### 2.1.1.14 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Documents optional timeout configuration in milliseconds with maximum and default values, allowing Claude to specify execution time limits.

##### 2.1.1.15 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs to verify parent directory existence and correctness with `ls` before creating new files or directories.

##### 2.1.1.16 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in tools provide better user experience and easier permission review than Bash equivalents.

##### 2.1.1.17 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns against using Bash for find, grep, cat, and similar read-only searching commands, directing use of appropriate dedicated tools instead.

##### 2.1.1.18 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Rule prohibiting retry loops with sleep for failing commands; diagnose root cause instead.

#### 2.1.2 Bash Tool Alternatives — Prefer Dedicated Tools

Strategic guidance to delegate file operations, text searching, and content manipulation to specialized tools rather than bash equivalents, improving user experience and permission transparency. Reserves bash for system commands and terminal operations where dedicated tools cannot substitute.

##### 2.1.2.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Directs output of text directly rather than using echo or printf commands.

##### 2.1.2.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Recommends using the Grep tool instead of grep or rg for content search operations.

##### 2.1.2.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Recommends using the Edit tool instead of sed or awk for file editing operations.

##### 2.1.2.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Recommends using the Glob tool instead of find or ls for file search operations.

##### 2.1.2.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Recommends using the Read tool instead of cat, head, or tail for file reading operations.

##### 2.1.2.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Recommends using the Write tool instead of echo or cat for file writing operations.

##### 2.1.2.7 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Directs Claude to use the Write tool for file creation instead of cat heredoc or echo redirection.

##### 2.1.2.8 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs Claude to use the Edit tool for file modifications instead of sed or awk.

##### 2.1.2.9 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Directs Claude to use the Read tool for file access instead of cat, head, tail, or sed.

##### 2.1.2.10 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Directs Claude to use the Grep tool for file content searches instead of grep or rg.

##### 2.1.2.11 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Directs Claude to use the Glob tool for file discovery instead of find or ls.

##### 2.1.2.12 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve the Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

### 2.2 Bash Sandbox Security & Restrictions

Enforces mandatory sandboxing for all bash commands with configurable allowlists, automatic restriction detection via error patterns (access denied, network failures, socket errors), and user-guided remediation. Sandbox mode is the default; disabling requires explicit user permission and is never automatic.

#### 2.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Directs working with the user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 2.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs defaulting to sandbox mode and only disabling it when explicitly requested or evidence of sandbox restriction appears.

#### 2.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Documents access denied errors as evidence of sandbox restrictions blocking paths outside allowed directories.

#### 2.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header text introducing a list of sandbox-caused failure evidence types.

#### 2.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Documents network connection failures to non-whitelisted hosts as sandbox restriction evidence.

#### 2.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Documents "operation not permitted" errors for file and network operations as sandbox evidence.

#### 2.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Documents Unix socket connection errors as evidence of sandbox restrictions.

#### 2.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

#### 2.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure types.

#### 2.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all commands must run in sandbox mode with the `dangerouslyDisableSandbox` parameter disabled by policy.

#### 2.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 2.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 2.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands even after running one with `dangerouslyDisableSandbox: true`.

#### 2.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header text for instructions on how to respond when sandbox-caused failures are detected.

#### 2.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with `dangerouslyDisableSandbox: true` upon sandbox failure without asking the user.

#### 2.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode instead of `/tmp` directly.

#### 2.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

### 2.3 File System Tools — Read, Write, Edit, Search

Provides comprehensive file system operations including reading (with PDF and image support), writing, precise string-based editing, and fast content discovery via glob patterns and regex search. Emphasizes in-place edits over file creation and supports bulk operations.

#### 2.3.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page range limits for large files), and Jupyter notebooks. Defaults to reading a configurable number of lines and requires absolute paths.

#### 2.3.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem with preference for using Edit for modifications. Avoids creating documentation or README files unless explicitly requested and excludes emojis unless requested.

#### 2.3.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with support for preserving indentation and handling non-unique matches. Emphasizes preferring edits to existing files over creating new ones and includes options for bulk replacements.

#### 2.3.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob syntax like `**/*.js` for finding files by name patterns, returning results sorted by modification time.

#### 2.3.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search built on ripgrep with full regex support, file filtering by glob or type, and multiple output modes. Supports multiline pattern matching and requires proper escaping for special characters.

#### 2.3.6 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Directs Claude to use Glob or Grep tools directly for simple, targeted codebase searches.

### 2.4 Browser Automation & Web Interaction

Enables web interaction through Chrome automation with mouse/keyboard control and screenshot analysis, plus web content fetching and search for current information. Includes debugging via console inspection, GIF recording, and content summarization with source attribution.

#### 2.4.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes a Chrome browser automation tool for mouse and keyboard interaction with web pages and screenshot capture, emphasizing precise cursor positioning and consulting screenshots before clicking elements.

#### 2.4.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameters for Chrome browser automation including mouse operations (click, drag, scroll), keyboard input, screenshots, and element interaction via references.

#### 2.4.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides comprehensive guidelines for browser automation including GIF recording with extra frames, console debugging with regex filtering, avoiding JavaScript dialogs that block commands, preventing rabbit holes, and managing tab context at session startup.

#### 2.4.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, specifying the tool name in the select parameter before calling the corresponding mcp__claude-in-chrome__* tool.

#### 2.4.5 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with a small model. Includes redirect handling, 15-minute caching, and preference for MCP-provided alternatives.

#### 2.4.6 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond Claude's knowledge cutoff with mandatory source attribution. Requires including a Sources section with markdown hyperlinks in responses and uses current year in search queries.

#### 2.4.7 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Prompt for agent that summarizes verbose WebFetch output for the main model. Enforces conciseness and applies content restrictions for untrusted domains including character limits on quotes and paraphrasing requirements.

---

## 3. Session, Memory & Context Management

Mechanisms for maintaining continuity across conversations — persistent memory files, context compaction, session state tracking, resource budgeting, and usage analytics.

### 3.1 Memory Management & Persistence

Persistent memory files store user feedback, preferences, domain knowledge, and session context across conversations, with selective attachment to sessions based on relevance. Consolidation agents periodically merge recent signals from logs and transcripts into organized topic files, pruning stale entries to maintain durable institutional knowledge.

#### 3.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Template displaying the contents of a memory file by path with type description.

#### 3.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Template displaying contents of a nested memory file structure.

#### 3.1.3 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes user feedback memory for storing guidance about work approaches, emphasizing recording both successes and failures while checking for contradictions with team memories.

#### 3.1.4 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory descriptions as capturing role, goals, responsibilities, and knowledge to tailor behavior and collaboration style while avoiding negative judgments or irrelevant details.

#### 3.1.5 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including domain-specific memory update instructions in agent system prompts to build institutional knowledge.

#### 3.1.6 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects up to 5 relevant memory files from available options to attach to Claude Code sessions, excluding usage documentation for recently-used tools while retaining warnings and gotchas.

#### 3.1.7 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs reflective memory consolidation by orienting on existing memories, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index to keep memories durable and well-organized.

#### 3.1.8 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files documenting current state, task specification, files, workflow, errors, and key results.

### 3.2 Context Compaction & Conversation Summarization

Structured approaches to distilling conversation history into resumable context, ranging from comprehensive chronological analysis to minimal feature-flagged coverage. Enables efficient task continuation across context windows by preserving technical decisions, errors, user feedback, and actionable next steps.

#### 3.2.1 [Analysis instructions for full compact prompt (full conversation) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-full-conversation.md)

Instructs Claude to wrap analysis in tags before summarizing, chronologically examining each conversation section to identify user requests, technical decisions, code patterns, specific details, errors, and user feedback for complete and accurate context compaction.

#### 3.2.2 [Analysis instructions for full compact prompt (minimal and via feature flag) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-minimal-and-via-feature-flag.md)

Defines a lean analysis approach using tags as a planning scratchpad to flag coverage across nine sections without including code snippets or verbatim quotes, reserving detail for the summary section.

#### 3.2.3 [Analysis instructions for full compact prompt (recent messages) [System Prompt]](system-prompts/system-prompt-analysis-instructions-for-full-compact-prompt-recent-messages.md)

Guides analysis of recent messages within tags, identifying user requests, implementation approaches, technical decisions, specific details, errors, and user feedback to ensure thorough and accurate context preservation.

#### 3.2.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Structures continuation summaries with task overview, current state, important discoveries, next steps, and context preservation to enable efficient task resumption across context windows.

#### 3.2.5 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries covering primary requests, technical concepts, files examined, errors encountered, problem-solving efforts, user messages, pending tasks, current work, and next steps with code snippets and direct quotes.

#### 3.2.6 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation messages covering requests, technical concepts, files modified, errors fixed, problems solved, user messages, pending tasks, current work, and next steps with code snippets and direct quotes.

### 3.3 Session Management & State

Mechanisms for tracking session continuity, file state changes, and user interactions within the IDE. Includes session discovery, naming conventions, and memory management to maintain coherent work context across machine boundaries and conversation windows.

#### 3.3.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notification that the session continues from another machine with updated working directory.

#### 3.3.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

#### 3.3.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides the relevant changes with line numbers, instructing Claude to account for the changes without reverting unless requested.

#### 3.3.4 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not be related to the current task.

#### 3.3.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs Claude to use the Read tool if more content is needed, without informing the user.

#### 3.3.6 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that a file read offset exceeds the file's length and provides the actual file length.

#### 3.3.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notification that the user selected specific lines in the IDE, with line numbers and file context.

#### 3.3.8 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before conversation summarization but is too large to include, directing Claude to use the Read tool if access is needed.

#### 3.3.9 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Agent prompt for finding relevant sessions based on user queries and metadata. Prioritizes exact tag matches, then partial matches, title, branch, and semantic similarity with inclusive matching strategy.

#### 3.3.10 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Agent for generating succinct session titles and git branch names from task descriptions. Produces sentence-case titles (max 6 words) and lowercase branch names prefixed with 'claude/' (max 4 words).

#### 3.3.11 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise 3-7 word sentence-case titles capturing the main goal of a coding session for easy recognition in session lists.

#### 3.3.12 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files during conversations, preserving exact file structure with headers and italic descriptions while updating content sections with detailed, actionable information.

### 3.4 Resource Budgeting & Usage Analytics

Real-time token consumption and cost tracking for cost-aware decision-making, plus analysis of usage patterns to surface friction points and recommend workflow improvements.

#### 3.4.1 Resource & Budget Tracking

Real-time visibility into token consumption and financial expenditure during sessions, enabling cost-aware decision-making and resource allocation.

##### 3.4.1.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics including used, total, and remaining tokens.

##### 3.4.1.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics including used, total, and remaining amounts.

##### 3.4.1.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Reminder to follow guidelines for skills invoked during the current session.

#### 3.4.2 Usage Insights & Analytics

Analyzes Claude Code usage patterns to surface what's working, identify friction points, and recommend feature adoption and workflow improvements. Extracts structured session data including satisfaction signals and error categories, then synthesizes findings into actionable suggestions and future capability planning.

##### 3.4.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for improved Claude Code usage.

##### 3.4.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes usage data to identify and categorize friction patterns with 3 categories and 2 examples each, helping users understand recurring issues.

##### 3.4.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies 3 ambitious future workflows and autonomous AI-assisted development opportunities with actionable prompts for users to try.

##### 3.4.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from session transcripts including goal categories, user satisfaction signals, and friction types with specific classification rules.

##### 3.4.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns based on session data.

---

## 4. Code Quality, Security & Review

Engineering discipline, security analysis, and review workflows — from scope control and YAGNI principles to vulnerability detection, adversarial testing, and pull request review.

### 4.1 Code Quality & Engineering Best Practices

Directives that enforce disciplined software engineering by eliminating unnecessary complexity, scope creep, and premature optimization. Emphasizes reading existing code before modification, restricting changes to requested scope, avoiding speculative abstractions, and prioritizing security vulnerabilities while trusting framework guarantees for internal validation.

#### 4.1.1 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Restricts changes to directly requested or clearly necessary modifications, maintaining simplicity and focus.

#### 4.1.2 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Avoids creating helpers, utilities, or abstractions for one-time operations or hypothetical requirements, maintaining minimal necessary complexity.

#### 4.1.3 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Eliminates unused code completely rather than adding compatibility shims, renames, or re-exports.

#### 4.1.4 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Restricts changes to requested scope, avoiding feature additions, refactoring, docstrings, or type annotations beyond what was asked.

#### 4.1.5 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Omits error handling for impossible scenarios and validates only at system boundaries, trusting internal code and framework guarantees.

#### 4.1.6 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Prefers editing existing files over creating new ones to prevent file bloat and build on existing work.

#### 4.1.7 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires reading and understanding existing code before proposing modifications.

#### 4.1.8 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Prioritizes avoiding security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks, fixing insecure code immediately.

#### 4.1.9 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Interprets user instructions in the context of software engineering tasks including bug fixes, feature additions, refactoring, and code explanation, applying instructions to actual code rather than abstract responses.

#### 4.1.10 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Empowers users to complete ambitious tasks by deferring to their judgment on scope rather than imposing artificial limitations.

#### 4.1.11 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Instructs against brute-forcing blocked approaches; instead consider alternatives or use AskUserQuestion to align on the right path forward.

#### 4.1.12 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Avoids providing time estimates or predictions for task duration, focusing on what needs to be done.

#### 4.1.13 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Instructs Claude to inform users of help and feedback channels when requested.

### 4.2 Security Monitoring & Vulnerability Analysis

Autonomous security evaluation that monitors agent actions against threat models, analyzes code for exploitable vulnerabilities, and assesses malware behavior with real-time action gating.

#### 4.2.1 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Instructs Claude to act as a security monitor evaluating autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage. Defines threat model, default allow-by-default policy, user intent rules, and evaluation methodology for determining whether agent actions should be blocked.

#### 4.2.2 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, comprehensive block rules, and allow exceptions governing which tool actions autonomous agents may perform. Covers destructive operations, credential handling, data exfiltration, infrastructure modification, and external system writes with specific patterns and exceptions.

#### 4.2.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Comprehensive security review prompt for analyzing code changes with focus on exploitable vulnerabilities. Defines objective to identify high-confidence security issues, exclusion categories, vulnerability assessment methodology, and confidence scoring with false-positive filtering rules.

#### 4.2.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware behavior and security implications without improving or augmenting the malicious code.

#### 4.2.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing requests for destructive techniques, DoS attacks, supply chain compromise, or detection evasion without clear authorization.

#### 4.2.6 Diagnostics & Error Detection

Detects and reports code quality issues and security threats, including command injection attacks in bash execution. Surfaces diagnostic findings to trigger appropriate safety responses.

##### 4.2.6.1 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notification of newly detected diagnostic issues with a summary of problems.

##### 4.2.6.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attacks in bash commands to support Claude Code's safety framework. Returns the detected prefix or 'command_injection_detected' to trigger user confirmation when needed.

### 4.3 Code Review & PR Management

Integrated code review workflows that analyze pull request diffs, fetch GitHub comments with context, and identify refactoring opportunities through parallel quality analysis. Supports both local and remote execution environments for comprehensive expert review.

#### 4.3.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by analyzing diffs and providing expert code review covering correctness, conventions, performance, test coverage, and security with concise formatted sections.

#### 4.3.2 [/review slash command (remote) [Agent Prompt]](system-prompts/agent-prompt-review-slash-command-remote.md)

Remote version of PR review that runs in a sandboxed environment with repository checkout, analyzing diffs and providing expert code review wrapped in result tags for local session extraction.

#### 4.3.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and review comments with file context, diff hunks, and threaded replies formatted for readability.

#### 4.3.4 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review skill that launches three parallel agents to identify code reuse opportunities, quality issues, and efficiency problems.

### 4.4 Verification & Testing

Adversarial testing frameworks that validate code changes through builds, test suites, linters, and environment-specific probes. Generates specialized verifier skills for different testing modalities and enforces rigorous quality gates before deployment.

#### 4.4.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

System prompt for a verification subagent that adversarially tests implementations through builds, test suites, linters, and adversarial probes, issuing PASS/FAIL/PARTIAL verdicts. Emphasizes finding the last 20% of issues and avoiding verification avoidance patterns.

#### 4.4.2 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering verifier skills, creating plans, and reporting detailed results.

#### 4.4.3 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that test code changes via Playwright, Tmux, or HTTP, including auto-detection, tool setup, and skill generation.

#### 4.4.4 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Seven-step process for constructing and verifying hooks, ensuring they work correctly in the project environment before deployment.

---

## 5. Hooks, Automation & Scheduling

Event-driven automation through lifecycle hooks, extensible slash command frameworks, cron-based scheduling, and GitHub CI/CD integration for recurring and triggered workflows.

### 5.1 Hook System Notifications & Events

Lifecycle hooks execute shell commands, prompts, or agents at Claude Code events (PreToolUse, PostToolUse, SessionStart) with JSON-based input/output for controlling behavior. System notifications report hook outcomes—success, errors, continuation stops, and additional context—while condition evaluators and verification agents determine whether hooks should execute based on codebase state and conversation history.

#### 5.1.1 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix message template displayed when a hook stops continuation.

#### 5.1.2 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Message template shown when a hook stops continuation, including the hook name and stop reason.

#### 5.1.3 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Success notification template displaying hook name and result content.

#### 5.1.4 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook to Claude.

#### 5.1.5 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command to Claude.

#### 5.1.6 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines lifecycle hooks that run shell commands, prompts, or agents at specific Claude Code events like PreToolUse, PostToolUse, and SessionStart, with JSON input/output for controlling behavior.

#### 5.1.7 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code and returns JSON indicating whether the condition is met with optional reason for failure.

#### 5.1.8 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and inspecting the codebase to confirm agent task completion.

### 5.2 Skills System & Slash Commands

Extensible command framework for invoking specialized capabilities and automating recurring workflows. Enables session-to-skill conversion through structured interviews, scheduling via cron expressions, and configuration management for Claude Code environments.

#### 5.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation, with a requirement to invoke the tool before generating responses about skill-related tasks.

#### 5.2.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Instructs Claude to use the Skill tool to execute slash commands that invoke user-invocable skills, only for skills listed in the tool's user-invocable section.

#### 5.2.3 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts a session into a reusable skill through 4-round user interviews covering naming, goals, steps, and execution details, then generates a SKILL.md file with frontmatter and structured steps.

#### 5.2.4 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into interval and prompt, converts to cron expression, and schedules recurring tasks with automatic execution.

#### 5.2.5 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning processes, detecting hangs, and posting diagnostic reports to Slack.

#### 5.2.6 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json) including hooks, permissions, and environment variables.

#### 5.2.7 [Debugging (Skill)](system-prompts/skill-debugging.md)

Skill for debugging issues in Claude Code sessions by analyzing debug logs, identifying errors, and suggesting fixes.

### 5.3 Scheduling & Cron Jobs

Cron-based job scheduling with timezone awareness, deterministic jitter, and support for both one-shot and recurring tasks. Enables remote Claude Code agents to execute on scheduled triggers via Anthropic cloud API with configurable environment and MCP connector selection.

#### 5.3.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedules one-shot or recurring cron-based jobs using standard 5-field cron syntax in the user's local timezone. Provides guidance on avoiding :00 and :30 minute marks to reduce API load spikes, applies deterministic jitter to job execution, and auto-expires recurring tasks after a configurable number of days.

#### 5.3.2 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers via Anthropic cloud API. Supports creating, updating, listing, and running isolated remote sessions with MCP connectors, environment selection, and timezone-aware cron scheduling.

#### 5.3.3 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Waits for a specified duration with early wake capability on user input, supporting concurrent execution with other tools and periodic check-ins via tick prompts.

### 5.4 GitHub Integration & CI/CD

Automation templates for integrating Claude into GitHub workflows. Enables triggering Claude Code through mentions in issues and pull requests, with security considerations and setup guidance for seamless CI/CD integration.

#### 5.4.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code when @claude is mentioned in issues, PRs, or comments.

#### 5.4.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

PR template describing Claude Code GitHub App integration, its capabilities, security model, and how to use it after merge.

---

## 6. Codebase Navigation, Git & Workspace

Tools and workflows for exploring codebases, managing version control, discovering MCP tools, and organizing the development workspace and documentation.

### 6.1 Codebase Exploration & Documentation

Read-only codebase navigation using glob patterns, regex, and LSP integration, plus generating CLAUDE.md documentation to bootstrap future instances with architectural context.

#### 6.1.1 Codebase Exploration & Analysis

Read-only codebase navigation and analysis using glob patterns, regex search, and Language Server Protocol integration for code intelligence. Generates CLAUDE.md documentation and project-specific patterns to bootstrap future Claude Code instances with architectural context.

##### 6.1.1.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

File search specialist for Claude Code that rapidly navigates codebases using glob patterns, regex search, and file reading in strict read-only mode. Prohibits all file modifications and state changes.

##### 6.1.1.2 [Explore strengths and guidelines (Agent Prompt)](system-prompts/agent-prompt-explore-strengths-and-guidelines.md)

Defines strengths and behavioral guidelines for the Explore subagent, emphasizing read-only codebase search, multi-file analysis, and thoroughness while prohibiting file creation and modification.

##### 6.1.1.3 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interacts with Language Server Protocol servers to provide code intelligence features including symbol navigation, references, hover information, call hierarchies, and implementations across the workspace.

##### 6.1.1.4 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md documentation files containing build/test commands, high-level architecture, and project-specific patterns for future Claude Code instances.

##### 6.1.1.5 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md, skills, and hooks via codebase exploration, user interviews, and iterative proposal refinement.

#### 6.1.2 Documentation & Knowledge Management

Maintains and evolves project documentation and user guidance through architecture-focused updates and intelligent suggestion generation. Provides Claude Code users with contextual help, official documentation retrieval, and next-action prediction based on conversation history.

##### 6.1.2.1 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Prompt for updating Magic Doc files with new learnings and insights from conversations. Emphasizes terseness, architecture focus, and in-place updates while preserving document headers and structure.

##### 6.1.2.2 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent context, avoiding evaluative language and Claude-voice suggestions.

##### 6.1.2.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing actionable guidance, and referencing project-specific context. Covers installation, hooks, skills, MCP servers, agent configuration, and API features.

### 6.2 Git Operations & Version Control

Manages version control workflows including safe commit creation, pull request automation, and isolated worktree sessions. Enforces safety protocols against destructive operations, hook skipping, and unauthorized commits while supporting rapid commit and PR creation with pre-populated context.

#### 6.2.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Advises considering safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

#### 6.2.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests, covering git safety protocols, commit message drafting, hook handling, and PR creation with gh command, including warnings against destructive operations and unauthorized commits.

#### 6.2.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping hooks or bypassing signing unless explicitly requested by the user, and directs fixing underlying issues when hooks fail.

#### 6.2.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Directs preferring creation of new commits over amending existing commits.

#### 6.2.5 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git branch, main branch, status, and recent commits as a snapshot at conversation start.

#### 6.2.6 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context from git status and diff, drafting messages aligned with repository style while enforcing safety protocols against amending, skipping hooks, or committing secrets.

#### 6.2.7 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated context, enforcing git safety protocols, generating concise PR titles, and providing test plans. Handles branch creation, pushing, and PR updates in a single operation.

#### 6.2.8 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it when explicitly requested by the user. Supports both git repositories and VCS-agnostic workflows via hooks, with optional custom naming.

#### 6.2.9 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exits a worktree session created by EnterWorktree and returns to the original directory. Supports keeping or removing the worktree with safeguards against discarding uncommitted changes, and clears session state caches.

### 6.3 Workspace & File Management

Manages Claude Code's execution environment through session-isolated file handling, configuration modes, and development workflows. Covers temporary file organization, minimal operational modes, notebook editing, and standardized implementation procedures with testing and version control integration.

#### 6.3.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a session-specific scratchpad directory for all temporary files instead of system temp directories.

#### 6.3.2 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Minimal mode disables hooks, LSP, plugins, auto-memory, and background features, requiring explicit context via CLI flags for authentication and configuration.

#### 6.3.3 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by completely replacing cell contents, supporting insertion and deletion of cells with 0-indexed cell numbering.

#### 6.3.4 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for workers implementing changes: simplify code, run unit tests, perform end-to-end testing, commit and push changes, and report the PR URL or reason for failure.

#### 6.3.5 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

System prompt for configuring Claude Code status line display. Converts shell PS1 configurations to status line commands, handles ANSI colors, and updates settings.json with command-based status line configuration.

### 6.4 MCP Resources & Tool Discovery

Mechanisms for discovering and invoking tools beyond initial prompt context through schema fetching and deferred tool resolution. Handles MCP resource state notifications and enables dynamic tool access via keyword or name-based queries.

#### 6.4.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Notification that an MCP resource exists but contains no content.

#### 6.4.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Notification that an MCP resource has content but it cannot be displayed.

#### 6.4.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches complete JSONSchema definitions for deferred tools using keyword or name-based queries, enabling invocation of tools not initially listed in the prompt.

---

## 7. API, SDK Reference & User Interaction

Official SDK documentation for building with Claude across multiple languages, agent SDK patterns, core API capabilities, and user-facing interaction design within Claude Code.

### 7.1 Claude API Reference — Language SDKs

Language-specific SDK documentation for building with Claude across Python, TypeScript, Go, Java, C#, Ruby, PHP, and raw HTTP. Each reference covers client setup, streaming, tool use, advanced features like extended thinking and prompt caching, and cost optimization patterns.

#### 7.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client initialization, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

#### 7.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, client initialization, basic requests, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

#### 7.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference covering client initialization, basic requests, streaming, tool use with BetaToolRunner and manual loops, thinking, server-side tools, PDF input, files API, and context editing.

#### 7.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference including client initialization, basic requests, streaming, thinking, tool use with BetaToolRunner and annotated classes, effort parameter, prompt caching, token counting, structured output, and server-side tools.

#### 7.1.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic requests, streaming, thinking, tool use with manual loops, context editing, effort parameter, prompt caching, token counting, structured output, and server-side tools.

#### 7.1.6 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference covering client initialization, basic requests, streaming, and tool use with beta tool runner and manual loops.

#### 7.1.7 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference covering client initialization for Anthropic, Bedrock, Vertex AI, and Foundry, basic requests, streaming, tool use with manual loops, extended thinking, and beta features.

#### 7.1.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL with examples for basic requests, streaming, tool use, and extended thinking. Includes jq parsing guidance and required headers.

#### 7.1.9 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current and legacy Claude models with exact model IDs, aliases, context windows, max output tokens, and pricing. Includes programmatic model discovery via Models API for live capability data.

### 7.2 Agent SDK Reference & Patterns

Comprehensive guides for building autonomous agents with the Agent SDK across Python and TypeScript, covering tool integration, permission models, MCP server connectivity, hooks, subagents, and session management. Includes practical patterns and architectural guidance for LLM application development.

#### 7.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, quick start, built-in tools, permission system, MCP support, hooks, subagents, message types, session history, and best practices.

#### 7.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference including installation, quick start, tools, permission modes, MCP integration, hooks, subagents, message types, session management, and best practices.

#### 7.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns including basic agents, custom tools via MCP, hooks, subagents, MCP integration, permission modes, error recovery, and session resumption with code examples.

#### 7.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns covering basic agents, hooks, subagents, MCP server integration, and session resumption with practical code examples.

#### 7.2.5 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection, architecture, models, thinking, and common pitfalls.

#### 7.2.6 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific API reference documentation with quick task navigation and file path indicators.

### 7.3 API Features — Tool Use, Streaming & Files

Core API capabilities for agentic workflows, real-time response handling, and file processing. Covers tool definition and execution patterns, streaming content delivery with event handling, and file upload/management for document and image processing. Includes language-specific references (Python/TypeScript), batch processing for cost optimization, error handling patterns, and live documentation sources.

#### 7.3.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice, tool runner vs manual loops, server-side tools, structured outputs, and best practices.

#### 7.3.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference with tool runner, manual agentic loop, MCP conversion, code execution, memory tool, and structured outputs.

#### 7.3.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod, manual agentic loop with streaming, code execution, memory tool, and structured outputs.

#### 7.3.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, progress tracking, and error handling.

#### 7.3.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference with quick start, content-type handling, tool-use streaming, final-message collection, and event types.

#### 7.3.6 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for PDFs and images, file management (list, retrieve, delete, download), and end-to-end example with persistent file references.

#### 7.3.7 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript reference for uploading files, managing file storage, and using files in Messages API requests with code examples for all operations.

#### 7.3.8 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for asynchronous batch processing of Messages API requests at 50% cost, including creation, polling, result retrieval, and caching.

#### 7.3.9 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes with causes, fixes, and typed exception handling patterns for Python and TypeScript SDKs.

#### 7.3.10 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation, models, pricing, and features from official sources.

### 7.4 User Interaction & Communication

Real-time user input during execution through structured questioning and visual previews, plus directives for concise and direct output style with actionable messaging.

#### 7.4.1 User Interaction & Question Asking

Facilitates real-time user input during execution through structured questioning, visual previews, and agent invocation. Handles clarification, decision-gathering, and side questions while respecting tool availability constraints and plan-mode visibility.

##### 7.4.1.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying ambiguous instructions, and obtaining decisions during execution, with special guidance on plan-mode usage and avoiding plan-visibility confusion.

##### 7.4.1.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Instructs use of the optional preview field on single-select question options to display self-contained HTML artifacts like UI mockups, code snippets, and visual comparisons.

##### 7.4.1.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview rendering for UI options using optional preview field with ASCII mockups, code snippets, or diagrams in monospace boxes.

##### 7.4.1.4 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude that a side question is being asked by a lightweight agent with no tools available, requiring a direct answer based only on conversation context without offering to take actions or investigate further.

##### 7.4.1.5 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and instructs Claude to invoke it with required context.

#### 7.4.2 Output Style, Tone & Communication

Directives for concise, direct communication with precise code references and actionable messaging. Establishes patterns for user-facing replies through dedicated messaging tools, emphasizing brevity, clarity, and efficient information delivery.

##### 7.4.2.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number when referencing code for easy navigation.

##### 7.4.2.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

##### 7.4.2.3 [Output efficiency (System Prompt)](system-prompts/system-prompt-output-efficiency.md)

Instructs Claude to be concise and direct, leading with answers over reasoning and limiting output to decisions, status updates, and blockers.

##### 7.4.2.4 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to send all user-facing replies through SendUserMessage, with guidance on acknowledgments, checkpoints, and keeping messages concise and actionable.

##### 7.4.2.5 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Sends messages to users with markdown support and file attachments, using status labels to distinguish between direct replies and proactive notifications.

##### 7.4.2.6 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminder that a specific output style is active and its guidelines should be followed.

##### 7.4.2.7 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief while adding context for complex piped or flagged commands.

#### 7.4.3 Learning Mode & Educational Features

Transforms task execution into collaborative learning by requesting human input on design decisions while handling routine implementation, paired with contextual educational insights about codebase-specific choices.

##### 7.4.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions for design decisions and business logic while handling routine implementation, with TodoList integration and structured Learn by Doing requests.

##### 7.4.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code changes, focusing on implementation choices specific to the codebase.
