# Claude Code System Prompts Index

A technical reference for building, operating, and extending Claude-powered software systems — covering everything from low-level command execution and file operations to autonomous agent design, session continuity, and production-grade development workflows.

## Table of Contents

1. [Bash & Shell Command Execution](#1-bash-shell-command-execution)
   1. [Core Bash Behavior & Syntax](#11-core-bash-behavior-syntax)
      1. [Bash Tool: Core Behavior & Syntax Rules](#111-bash-tool-core-behavior-syntax-rules)
         1. [Bash (overview) [Tool Description]](#1111-bash-overview-tool-description)
         2. [Bash (command description) [Tool Description]](#1112-bash-command-description-tool-description)
         3. [Bash (maintain cwd) [Tool Description]](#1113-bash-maintain-cwd-tool-description)
         4. [Bash (working directory) [Tool Description]](#1114-bash-working-directory-tool-description)
         5. [Bash (no newlines) [Tool Description]](#1115-bash-no-newlines-tool-description)
         6. [Bash (quote file paths) [Tool Description]](#1116-bash-quote-file-paths-tool-description)
         7. [Bash (parallel commands) [Tool Description]](#1117-bash-parallel-commands-tool-description)
         8. [Bash (sequential commands) [Tool Description]](#1118-bash-sequential-commands-tool-description)
         9. [Bash (semicolon usage) [Tool Description]](#1119-bash-semicolon-usage-tool-description)
         10. [Bash (timeout) [Tool Description]](#11110-bash-timeout-tool-description)
         11. [Bash (verify parent directory) [Tool Description]](#11111-bash-verify-parent-directory-tool-description)
         12. [Bash (built-in tools note) [Tool Description]](#11112-bash-built-in-tools-note-tool-description)
         13. [Bash (prefer dedicated tools) [Tool Description]](#11113-bash-prefer-dedicated-tools-tool-description)
         14. [Bash (alternative — communication) [Tool Description]](#11114-bash-alternative-—-communication-tool-description)
         15. [Bash (alternative — content search) [Tool Description]](#11115-bash-alternative-—-content-search-tool-description)
         16. [Bash (alternative — edit files) [Tool Description]](#11116-bash-alternative-—-edit-files-tool-description)
         17. [Bash (alternative — file search) [Tool Description]](#11117-bash-alternative-—-file-search-tool-description)
         18. [Bash (alternative — read files) [Tool Description]](#11118-bash-alternative-—-read-files-tool-description)
         19. [Bash (alternative — write files) [Tool Description]](#11119-bash-alternative-—-write-files-tool-description)
      2. [Tool Selection & Preference Policies](#112-tool-selection-preference-policies)
         1. [Tool usage (reserve Bash) [System Prompt]](#1121-tool-usage-reserve-bash-system-prompt)
         2. [Tool usage (read files) [System Prompt]](#1122-tool-usage-read-files-system-prompt)
         3. [Tool usage (edit files) [System Prompt]](#1123-tool-usage-edit-files-system-prompt)
         4. [Tool usage (search content) [System Prompt]](#1124-tool-usage-search-content-system-prompt)
         5. [Tool usage (search files) [System Prompt]](#1125-tool-usage-search-files-system-prompt)
         6. [Tool usage (create files) [System Prompt]](#1126-tool-usage-create-files-system-prompt)
         7. [Tool usage (direct search) [System Prompt]](#1127-tool-usage-direct-search-system-prompt)
         8. [Tool usage (skill invocation) [System Prompt]](#1128-tool-usage-skill-invocation-system-prompt)
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
   3. [Bash Tool: Sleep, Background Tasks & Async Patterns](#13-bash-tool-sleep-background-tasks-async-patterns)
      1. [Bash (sleep — keep short) [Tool Description]](#131-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#132-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — no retry loops) [Tool Description]](#133-bash-sleep-—-no-retry-loops-tool-description)
      4. [Bash (sleep — run immediately) [Tool Description]](#134-bash-sleep-—-run-immediately-tool-description)
      5. [Bash (sleep — use check commands) [Tool Description]](#135-bash-sleep-—-use-check-commands-tool-description)
      6. [Bash (sleep — use run_in_background) [Tool Description]](#136-bash-sleep-—-use-run_in_background-tool-description)
   4. [Bash Command Analysis Agents](#14-bash-command-analysis-agents)
      1. [Bash command description writer (Agent Prompt)](#141-bash-command-description-writer-agent-prompt)
      2. [Bash command file path extraction (Agent Prompt)](#142-bash-command-file-path-extraction-agent-prompt)
      3. [Bash command prefix detection (Agent Prompt)](#143-bash-command-prefix-detection-agent-prompt)
2. [Tools, File Operations & Browser Automation](#2-tools-file-operations-browser-automation)
   1. [File System Tools: Read, Write, Edit, Search](#21-file-system-tools-read-write-edit-search)
      1. [ReadFile (Tool Description)](#211-readfile-tool-description)
      2. [Write (Tool Description)](#212-write-tool-description)
      3. [Edit (Tool Description)](#213-edit-tool-description)
      4. [Glob (Tool Description)](#214-glob-tool-description)
      5. [Grep (Tool Description)](#215-grep-tool-description)
      6. [LSP (Tool Description)](#216-lsp-tool-description)
      7. [NotebookEdit (Tool Description)](#217-notebookedit-tool-description)
   2. [Browser & Computer Automation](#22-browser-computer-automation)
      1. [Computer (Tool Description)](#221-computer-tool-description)
      2. [Computer action (Tool Parameter)](#222-computer-action-tool-parameter)
      3. [WebFetch (Tool Description)](#223-webfetch-tool-description)
      4. [WebSearch (Tool Description)](#224-websearch-tool-description)
      5. [Claude in Chrome browser automation (System Prompt)](#225-claude-in-chrome-browser-automation-system-prompt)
   3. [MCP Resources & Tool Loading](#23-mcp-resources-tool-loading)
      1. [MCP resource no content (System Reminder)](#231-mcp-resource-no-content-system-reminder)
      2. [MCP resource no displayable content (System Reminder)](#232-mcp-resource-no-displayable-content-system-reminder)
      3. [ToolSearch (Tool Description)](#233-toolsearch-tool-description)
      4. [ToolSearch extended (Tool Description)](#234-toolsearch-extended-tool-description)
      5. [Chrome browser MCP tools (System Prompt)](#235-chrome-browser-mcp-tools-system-prompt)
   4. [Specialized Utility Tools](#24-specialized-utility-tools)
      1. [Sleep (Tool Description)](#241-sleep-tool-description)
      2. [Skill (Tool Description)](#242-skill-tool-description)
      3. [AskUserQuestion (Tool Description)](#243-askuserquestion-tool-description)
      4. [EnterWorktree (Tool Description)](#244-enterworktree-tool-description)
3. [Agent Architecture & Multi-Agent Coordination](#3-agent-architecture-multi-agent-coordination)
   1. [Sub-Agent & Task Delegation](#31-sub-agent-task-delegation)
      1. [Tool usage (delegate exploration) [System Prompt]](#311-tool-usage-delegate-exploration-system-prompt)
      2. [Tool usage (subagent guidance) [System Prompt]](#312-tool-usage-subagent-guidance-system-prompt)
      3. [Task (Tool Description)](#313-task-tool-description)
      4. [Task tool (Agent Prompt)](#314-task-tool-agent-prompt)
      5. [Task tool (extra notes) [Agent Prompt]](#315-task-tool-extra-notes-agent-prompt)
      6. [Explore (Agent Prompt)](#316-explore-agent-prompt)
   2. [Multi-Agent Team Coordination & Swarm Management](#32-multi-agent-team-coordination-swarm-management)
      1. [Team Coordination (System Reminder)](#321-team-coordination-system-reminder)
      2. [Team Shutdown (System Reminder)](#322-team-shutdown-system-reminder)
      3. [Teammate Communication (System Prompt)](#323-teammate-communication-system-prompt)
      4. [TeammateTool (Tool Description)](#324-teammatetool-tool-description)
      5. [TeamDelete (Tool Description)](#325-teamdelete-tool-description)
      6. [SendMessageTool (Tool Description)](#326-sendmessagetool-tool-description)
      7. [TaskList (teammate workflow) [Tool Description]](#327-tasklist-teammate-workflow-tool-description)
   3. [Plan Mode: Activation, Phases & Constraints](#33-plan-mode-activation-phases-constraints)
      1. [Plan mode is active (5-phase) [System Reminder]](#331-plan-mode-is-active-5-phase-system-reminder)
      2. [Plan mode is active (iterative) [System Reminder]](#332-plan-mode-is-active-iterative-system-reminder)
      3. [Plan mode is active (subagent) [System Reminder]](#333-plan-mode-is-active-subagent-system-reminder)
      4. [Plan mode re-entry (System Reminder)](#334-plan-mode-re-entry-system-reminder)
      5. [Exited plan mode (System Reminder)](#335-exited-plan-mode-system-reminder)
      6. [EnterPlanMode (Tool Description)](#336-enterplanmode-tool-description)
      7. [ExitPlanMode (Tool Description)](#337-exitplanmode-tool-description)
      8. [Plan mode (enhanced) [Agent Prompt]](#338-plan-mode-enhanced-agent-prompt)
      9. [Plan file reference (System Reminder)](#339-plan-file-reference-system-reminder)
      10. [Verify plan reminder (System Reminder)](#3310-verify-plan-reminder-system-reminder)
   4. [Agent Design & Creation](#34-agent-design-creation)
      1. [Agent creation architect (Agent Prompt)](#341-agent-creation-architect-agent-prompt)
      2. [Agent memory instructions (System Prompt)](#342-agent-memory-instructions-system-prompt)
      3. [Agent Hook (Agent Prompt)](#343-agent-hook-agent-prompt)
      4. [Hook condition evaluator (Agent Prompt)](#344-hook-condition-evaluator-agent-prompt)
      5. [Agent Summary Generation (System Prompt)](#345-agent-summary-generation-system-prompt)
   5. [Hook System: Execution & Lifecycle Events](#35-hook-system-execution-lifecycle-events)
      1. [Hook additional context (System Reminder)](#351-hook-additional-context-system-reminder)
      2. [Hook blocking error (System Reminder)](#352-hook-blocking-error-system-reminder)
      3. [Hook stopped continuation prefix (System Reminder)](#353-hook-stopped-continuation-prefix-system-reminder)
      4. [Hook stopped continuation (System Reminder)](#354-hook-stopped-continuation-system-reminder)
      5. [Hook success (System Reminder)](#355-hook-success-system-reminder)
      6. [Hooks Configuration (System Prompt)](#356-hooks-configuration-system-prompt)
   6. [Agent SDK: References & Patterns](#36-agent-sdk-references-patterns)
      1. [Agent SDK reference — Python (Data)](#361-agent-sdk-reference-—-python-data)
      2. [Agent SDK reference — TypeScript (Data)](#362-agent-sdk-reference-—-typescript-data)
      3. [Agent SDK patterns — Python (Data)](#363-agent-sdk-patterns-—-python-data)
      4. [Agent SDK patterns — TypeScript (Data)](#364-agent-sdk-patterns-—-typescript-data)
4. [Session Management, Memory & Context](#4-session-management-memory-context)
   1. [Task & Todo Management](#41-task-todo-management)
      1. [Tool usage (task management) [System Prompt]](#411-tool-usage-task-management-system-prompt)
      2. [TodoWrite (Tool Description)](#412-todowrite-tool-description)
      3. [TaskCreate (Tool Description)](#413-taskcreate-tool-description)
      4. [Task status (System Reminder)](#414-task-status-system-reminder)
      5. [Task tools reminder (System Reminder)](#415-task-tools-reminder-system-reminder)
      6. [Todo list changed (System Reminder)](#416-todo-list-changed-system-reminder)
      7. [Todo list empty (System Reminder)](#417-todo-list-empty-system-reminder)
      8. [TodoWrite reminder (System Reminder)](#418-todowrite-reminder-system-reminder)
   2. [Memory & Session Persistence](#42-memory-session-persistence)
      1. [Memory file contents (System Reminder)](#421-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#422-nested-memory-contents-system-reminder)
      3. [Session continuation (System Reminder)](#423-session-continuation-system-reminder)
      4. [Memory selection (Agent Prompt)](#424-memory-selection-agent-prompt)
      5. [Session memory update instructions (Agent Prompt)](#425-session-memory-update-instructions-agent-prompt)
      6. [Session memory template (Data)](#426-session-memory-template-data)
   3. [Session & Conversation Summarization](#43-session-conversation-summarization)
      1. [Conversation summarization (Agent Prompt)](#431-conversation-summarization-agent-prompt)
      2. [Recent Message Summarization (Agent Prompt)](#432-recent-message-summarization-agent-prompt)
      3. [Context compaction summary (System Prompt)](#433-context-compaction-summary-system-prompt)
   4. [File State & IDE Context Reminders](#44-file-state-ide-context-reminders)
      1. [File exists but empty (System Reminder)](#441-file-exists-but-empty-system-reminder)
      2. [File modified by user or linter (System Reminder)](#442-file-modified-by-user-or-linter-system-reminder)
      3. [File opened in IDE (System Reminder)](#443-file-opened-in-ide-system-reminder)
      4. [File shorter than offset (System Reminder)](#444-file-shorter-than-offset-system-reminder)
      5. [File truncated (System Reminder)](#445-file-truncated-system-reminder)
      6. [Compact file reference (System Reminder)](#446-compact-file-reference-system-reminder)
      7. [Lines selected in IDE (System Reminder)](#447-lines-selected-in-ide-system-reminder)
      8. [New diagnostics detected (System Reminder)](#448-new-diagnostics-detected-system-reminder)
   5. [Resource Monitoring: Tokens, Budget & Output Limits](#45-resource-monitoring-tokens-budget-output-limits)
      1. [Token usage (System Reminder)](#451-token-usage-system-reminder)
      2. [USD budget (System Reminder)](#452-usd-budget-system-reminder)
      3. [Output token limit exceeded (System Reminder)](#453-output-token-limit-exceeded-system-reminder)
   6. [Session Discovery & Environment Setup](#46-session-discovery-environment-setup)
      1. [Session Management & Search](#461-session-management-search)
         1. [Session Search Assistant (Agent Prompt)](#4611-session-search-assistant-agent-prompt)
         2. [Status line setup (Agent Prompt)](#4612-status-line-setup-agent-prompt)
      2. [System Reminders & Context Controls](#462-system-reminders-context-controls)
         1. [Agent mention (System Reminder)](#4621-agent-mention-system-reminder)
         2. [/btw side question (System Reminder)](#4622-btw-side-question-system-reminder)
         3. [Scratchpad directory (System Prompt)](#4623-scratchpad-directory-system-prompt)
         4. [Option previewer (System Prompt)](#4624-option-previewer-system-prompt)
5. [Code Quality, Git & Development Practices](#5-code-quality-git-development-practices)
   1. [Code Quality & Engineering Best Practices](#51-code-quality-engineering-best-practices)
      1. [Doing tasks (security) [System Prompt]](#511-doing-tasks-security-system-prompt)
      2. [Doing tasks (no unnecessary error handling) [System Prompt]](#512-doing-tasks-no-unnecessary-error-handling-system-prompt)
      3. [Doing tasks (read before modifying) [System Prompt]](#513-doing-tasks-read-before-modifying-system-prompt)
      4. [Doing tasks (avoid over-engineering) [System Prompt]](#514-doing-tasks-avoid-over-engineering-system-prompt)
      5. [Doing tasks (no premature abstractions) [System Prompt]](#515-doing-tasks-no-premature-abstractions-system-prompt)
      6. [Doing tasks (no unnecessary additions) [System Prompt]](#516-doing-tasks-no-unnecessary-additions-system-prompt)
      7. [Doing tasks (no compatibility hacks) [System Prompt]](#517-doing-tasks-no-compatibility-hacks-system-prompt)
      8. [Doing tasks (minimize file creation) [System Prompt]](#518-doing-tasks-minimize-file-creation-system-prompt)
      9. [Doing tasks (software engineering focus) [System Prompt]](#519-doing-tasks-software-engineering-focus-system-prompt)
   2. [Task Execution Behavior & User Interaction](#52-task-execution-behavior-user-interaction)
      1. [Doing tasks (ambitious tasks) [System Prompt]](#521-doing-tasks-ambitious-tasks-system-prompt)
      2. [Doing tasks (blocked approach) [System Prompt]](#522-doing-tasks-blocked-approach-system-prompt)
      3. [Executing actions with care (System Prompt)](#523-executing-actions-with-care-system-prompt)
      4. [Doing tasks (no time estimates) [System Prompt]](#524-doing-tasks-no-time-estimates-system-prompt)
      5. [Doing tasks (help and feedback) [System Prompt]](#525-doing-tasks-help-and-feedback-system-prompt)
      6. [Tool execution denied (System Prompt)](#526-tool-execution-denied-system-prompt)
      7. [Tool permission mode (System Prompt)](#527-tool-permission-mode-system-prompt)
   3. [Output Style, Tone & Communication](#53-output-style-tone-communication)
      1. [Tone and style (concise output — detailed) [System Prompt]](#531-tone-and-style-concise-output-—-detailed-system-prompt)
      2. [Tone and style (concise output — short) [System Prompt]](#532-tone-and-style-concise-output-—-short-system-prompt)
      3. [Tone and style (code references) [System Prompt]](#533-tone-and-style-code-references-system-prompt)
      4. [Output style active (System Reminder)](#534-output-style-active-system-reminder)
      5. [Tool Use Summary Generation (System Prompt)](#535-tool-use-summary-generation-system-prompt)
      6. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#536-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   4. [Git Workflows & Version Control](#54-git-workflows-version-control)
      1. [Bash Tool: Git Operations & Safety](#541-bash-tool-git-operations-safety)
         1. [Bash (git — avoid destructive ops) [Tool Description]](#5411-bash-git-—-avoid-destructive-ops-tool-description)
         2. [Bash (Git commit and PR creation instructions) [Tool Description]](#5412-bash-git-commit-and-pr-creation-instructions-tool-description)
         3. [Bash (git — never skip hooks) [Tool Description]](#5413-bash-git-—-never-skip-hooks-tool-description)
         4. [Bash (git — prefer new commits) [Tool Description]](#5414-bash-git-—-prefer-new-commits-tool-description)
      2. [Git Operations: Commits, PRs & Branch Management](#542-git-operations-commits-prs-branch-management)
         1. [Quick git commit (Agent Prompt)](#5421-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#5422-quick-pr-creation-agent-prompt)
         3. [Session title and branch generation (Agent Prompt)](#5423-session-title-and-branch-generation-agent-prompt)
         4. [/pr-comments slash command (Agent Prompt)](#5424-pr-comments-slash-command-agent-prompt)
         5. [Git status (System Prompt)](#5425-git-status-system-prompt)
   5. [Code Review & Security Analysis](#55-code-review-security-analysis)
      1. [/review-pr slash command (Agent Prompt)](#551-review-pr-slash-command-agent-prompt)
      2. [/security-review slash command (Agent Prompt)](#552-security-review-slash-command-agent-prompt)
      3. [Censoring assistance with malicious activities (System Prompt)](#553-censoring-assistance-with-malicious-activities-system-prompt)
      4. [Malware analysis after Read tool call (System Reminder)](#554-malware-analysis-after-read-tool-call-system-reminder)
   6. [Documentation: CLAUDE.md & Magic Docs](#56-documentation-claudemd-magic-docs)
      1. [CLAUDE.md creation (Agent Prompt)](#561-claudemd-creation-agent-prompt)
      2. [Update Magic Docs (Agent Prompt)](#562-update-magic-docs-agent-prompt)
   7. [GitHub CI/CD & Learning Workflows](#57-github-cicd-learning-workflows)
      1. [GitHub Integration & CI/CD](#571-github-integration-cicd)
         1. [GitHub Actions workflow for @claude mentions (Data)](#5711-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#5712-github-app-installation-pr-description-data)
      2. [Learning Mode & User Education](#572-learning-mode-user-education)
         1. [Learning mode (System Prompt)](#5721-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#5722-learning-mode-insights-system-prompt)
6. [Claude API, SDK & Developer Tools](#6-claude-api-sdk-developer-tools)
   1. [Claude API: SDK References by Language](#61-claude-api-sdk-references-by-language)
      1. [Claude API reference — Python (Data)](#611-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#612-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#613-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#614-claude-api-reference-—-java-data)
      5. [Claude API reference — Ruby (Data)](#615-claude-api-reference-—-ruby-data)
      6. [Claude API reference — PHP (Data)](#616-claude-api-reference-—-php-data)
      7. [Claude API reference — C# (Data)](#617-claude-api-reference-—-c-data)
   2. [Claude API: Tool Use, Streaming & Batches](#62-claude-api-tool-use-streaming-batches)
      1. [Tool use concepts (Data)](#621-tool-use-concepts-data)
      2. [Tool use reference — Python (Data)](#622-tool-use-reference-—-python-data)
      3. [Tool use reference — TypeScript (Data)](#623-tool-use-reference-—-typescript-data)
      4. [Streaming reference — Python (Data)](#624-streaming-reference-—-python-data)
      5. [Streaming reference — TypeScript (Data)](#625-streaming-reference-—-typescript-data)
      6. [Message Batches API reference — Python (Data)](#626-message-batches-api-reference-—-python-data)
      7. [Files API reference — Python (Data)](#627-files-api-reference-—-python-data)
      8. [Files API reference — TypeScript (Data)](#628-files-api-reference-—-typescript-data)
   3. [Developer Guidance & API Navigation](#63-developer-guidance-api-navigation)
      1. [Build with Claude API Skill](#631-build-with-claude-api-skill)
         1. [Build with Claude API (Skill)](#6311-build-with-claude-api-skill)
         2. [Build with Claude API (trigger) [Skill]](#6312-build-with-claude-api-trigger-skill)
         3. [Build with Claude API (reference guide) [Skill]](#6313-build-with-claude-api-reference-guide-skill)
         4. [Claude model catalog (Data)](#6314-claude-model-catalog-data)
         5. [Live documentation sources (Data)](#6315-live-documentation-sources-data)
         6. [HTTP error codes reference (Data)](#6316-http-error-codes-reference-data)
      2. [Claude Guide & Documentation Agent](#632-claude-guide-documentation-agent)
         1. [Claude guide agent (Agent Prompt)](#6321-claude-guide-agent-agent-prompt)
   4. [Skills System: Creation, Invocation & Verification](#64-skills-system-creation-invocation-verification)
      1. [Skillify Current Session (System Prompt)](#641-skillify-current-session-system-prompt)
      2. [Create verifier skills (Skill)](#642-create-verifier-skills-skill)
      3. [Verification specialist (Skill)](#643-verification-specialist-skill)
      4. [Debugging (Skill)](#644-debugging-skill)
      5. [Update Claude Code Config (Skill)](#645-update-claude-code-config-skill)
      6. [Invoked skills (System Reminder)](#646-invoked-skills-system-reminder)
   5. [Analytics & Content Processing Agents](#65-analytics-content-processing-agents)
      1. [Usage Insights & Analytics](#651-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#6511-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#6512-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#6513-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#6514-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#6515-insights-suggestions-system-prompt)
      2. [Web Content Processing Agents](#652-web-content-processing-agents)
         1. [WebFetch summarizer (Agent Prompt)](#6521-webfetch-summarizer-agent-prompt)
         2. [User sentiment analysis (Agent Prompt)](#6522-user-sentiment-analysis-agent-prompt)
         3. [Prompt Suggestion Generator v2 (Agent Prompt)](#6523-prompt-suggestion-generator-v2-agent-prompt)

---

## 1. Bash & Shell Command Execution

Everything governing how bash commands are written, executed, secured, and analyzed — from syntax rules and sandbox restrictions to background task patterns and command safety analysis.

### 1.1 Core Bash Behavior & Syntax

Fundamental rules for writing and chaining bash commands, managing working directories, and delegating to specialized tools instead of shell equivalents.

#### 1.1.1 Bash Tool: Core Behavior & Syntax Rules

Bash executes commands and returns output with specific syntax requirements: chain dependent commands with `&&`, use semicolons only when earlier failures are acceptable, avoid newlines between commands, and quote file paths with spaces. Maintain working directory using absolute paths instead of `cd`. Prefer dedicated tools for file operations, searching, and text processing rather than bash equivalents like grep, sed, or cat.

##### 1.1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Basic description of the Bash tool's function to execute commands and return output.

##### 1.1.1.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs to write clear, concise descriptions for bash commands, keeping simple commands brief and providing context for complex or piped commands.

##### 1.1.1.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to use absolute paths and avoid cd commands to maintain current working directory throughout the session.

##### 1.1.1.4 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not, with environment initialized from user profile.

##### 1.1.1.5 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Prohibits using newlines to separate commands in bash tool calls.

##### 1.1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs to quote file paths containing spaces with double quotes in bash commands.

##### 1.1.1.7 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to make multiple independent bash tool calls in parallel within a single message for efficiency.

##### 1.1.1.8 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands with `&&` in a single bash call when they must run sequentially.

##### 1.1.1.9 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially but failure of earlier commands is acceptable.

##### 1.1.1.10 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration for bash commands, specifying maximum and default timeout values in milliseconds.

##### 1.1.1.11 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directory existence and correctness using `ls` before creating new directories or files.

##### 1.1.1.12 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and transparency than Bash equivalents.

##### 1.1.1.13 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns against using bash for find, grep, cat, head, tail, sed, awk, or echo operations, directing use of dedicated tools instead.

##### 1.1.1.14 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly rather than using echo or printf commands.

##### 1.1.1.15 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs use of a dedicated Grep tool instead of grep or rg commands for content searching.

##### 1.1.1.16 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs use of a dedicated Edit tool instead of sed or awk for file editing.

##### 1.1.1.17 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs use of a dedicated Glob tool instead of find or ls for file searching.

##### 1.1.1.18 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs use of a dedicated Read tool instead of cat, head, or tail for reading files.

##### 1.1.1.19 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs use of a dedicated Write tool instead of echo or cat for writing files.

#### 1.1.2 Tool Selection & Preference Policies

Reserve bash exclusively for system commands and terminal operations; delegate file and text operations to specialized tools: Read for file reading, Edit for modifications, Grep for content search, Glob for file discovery, and Write for file creation. Use the Skill tool to invoke slash commands from the user-invocable section.

##### 1.1.2.1 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Reserve Bash tool exclusively for system commands and terminal operations; default to dedicated tools when available.

##### 1.1.2.2 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Prefer the Read tool over cat, head, tail, or sed for file reading.

##### 1.1.2.3 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Prefer the Edit tool over sed or awk for file modifications.

##### 1.1.2.4 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Use the Grep tool instead of grep or rg for searching file contents.

##### 1.1.2.5 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Use the Glob tool instead of find or ls for file discovery.

##### 1.1.2.6 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Directs Claude to use the Write tool for file creation instead of cat heredoc or echo redirection.

##### 1.1.2.7 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Use Glob or Grep tools directly for simple, targeted codebase searches.

##### 1.1.2.8 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Use the Skill tool to execute slash commands that invoke user-invocable skills; only use skills listed in the tool's user-invocable section.

### 1.2 Bash Tool: Sandbox Security & Restrictions

All bash commands run in sandbox mode by default, with mandatory enforcement that prevents access outside allowed directories and to non-whitelisted network hosts. When sandbox restrictions cause failures (access denied, operation not permitted, network failures, Unix socket errors), immediately retry with sandbox disabled without asking the user. Use `$TMPDIR` or `${SANDBOX_TMPDIR_FN()}` for temporary files, never `/tmp` directly, and never suggest adding sensitive paths like `~/.ssh` or credential files to the allowlist.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs to work with user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Directs defaulting to sandboxed execution and only disabling sandbox when user requests or sandbox restriction evidence appears.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Identifies access denied errors to paths outside allowed directories as evidence of sandbox restrictions.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that identify sandbox-caused command failures.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Identifies "Operation not permitted" errors as evidence of sandbox restrictions on file and network operations.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies Unix socket connection errors as evidence of sandbox restrictions.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a command failure and mention the `/sandbox` command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with evidence of sandbox restrictions, distinguishing sandbox-caused failures from other failure types.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all bash commands must run in sandbox mode because the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands even after running one with `dangerouslyDisableSandbox: true`.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Provides a response header for when Claude encounters evidence of sandbox-caused failures.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with `dangerouslyDisableSandbox: true` when a sandbox failure occurs without asking the user first.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Instructs Claude to use the `$TMPDIR` environment variable or `${SANDBOX_TMPDIR_FN()}` fallback for temporary files in sandbox mode, never `/tmp` directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

### 1.3 Bash Tool: Sleep, Background Tasks & Async Patterns

Avoid sleep-based polling and retry loops; instead diagnose root causes of failures and use check commands for external processes. For long-running operations, use `run_in_background` and wait for completion notifications rather than polling. Keep any necessary sleep durations short (1-5 seconds) and run commands immediately when they can execute without delay.

#### 1.3.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep duration short (1-5 seconds) to avoid blocking the user.

#### 1.3.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background` but instead wait for completion notification.

#### 1.3.3 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Instructs Claude to diagnose root causes of failures rather than retrying in sleep loops.

#### 1.3.4 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

#### 1.3.5 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` rather than sleeping when polling external processes.

#### 1.3.6 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Instructs Claude to use `run_in_background` for long-running commands instead of sleeping, and wait for completion notification.

### 1.4 Bash Command Analysis Agents

Parses and validates bash commands by extracting file paths, generating documentation, and detecting injection attempts for safety and clarity.

#### 1.4.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief and adding context for complex piped or obscure-flag commands.

#### 1.4.2 [Bash command file path extraction (Agent Prompt)](system-prompts/agent-prompt-bash-command-file-path-extraction.md)

Extracts file paths from bash command output by determining whether commands display file contents, returning paths verbatim only for commands that show content.

#### 1.4.3 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety enforcement, returning the prefix or 'command_injection_detected' based on comprehensive examples and rules.

---

## 2. Tools, File Operations & Browser Automation

The full suite of non-bash tools available for file system interaction, content search, browser control, MCP resource loading, and specialized utility operations.

### 2.1 File System Tools: Read, Write, Edit, Search

Tools for comprehensive filesystem interaction including reading files with multimodal support (PDFs, images, notebooks), writing and editing with precise string replacement, and searching via glob patterns or regex-based content discovery. Language Server Protocol integration provides code intelligence for symbol navigation and type information.

#### 2.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for line offsets, images, PDFs (with page ranges), and Jupyter notebooks, returning visual content for multimodal analysis.

#### 2.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, preferring the Edit tool for modifications and avoiding documentation files unless explicitly requested.

#### 2.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Describes the Edit tool for exact string replacements in files, emphasizing preservation of indentation, preference for editing existing files, and use of `replace_all` for unique matching.

#### 2.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like **/*.js to find files by name, returning results sorted by modification time.

#### 2.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting regex patterns, file filtering by glob or type, and multiple output modes for content search across codebases.

#### 2.1.6 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interacts with Language Server Protocol servers to provide code intelligence including symbol navigation, references, hover information, and call hierarchy analysis.

#### 2.1.7 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing, inserting, or deleting cell contents in .ipynb files.

### 2.2 Browser & Computer Automation

Browser and web interaction capabilities combine visual navigation through screenshot-guided mouse and keyboard control with content fetching and search for information retrieval and UI manipulation.

#### 2.2.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse and keyboard interaction with Chrome, emphasizing screenshot consultation before clicking and precise cursor positioning on element centers.

#### 2.2.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameters for Chrome browser control including clicks, typing, scrolling, keyboard input, and element inspection via zoom and scroll-to.

#### 2.2.3 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing it with a fast model, supporting URL redirects and including a 15-minute cache.

#### 2.2.4 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information and recent data, requiring mandatory source attribution in responses with markdown hyperlinks.

#### 2.2.5 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Best practices for browser automation using Claude in Chrome tools including GIF recording, console debugging with pattern filtering, avoiding JavaScript dialogs, preventing loops, and proper tab context management.

### 2.3 MCP Resources & Tool Loading

Deferred tools and MCP resources require explicit discovery and loading via ToolSearch before use, with status indicators for resource availability and content displayability.

#### 2.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

#### 2.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

#### 2.3.3 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite for loading deferred tools before use, supporting keyword search and direct selection modes to make tools available for calling.

#### 2.3.4 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Provides extended usage patterns for ToolSearch including keyword search, direct selection, and required-keyword modes to load deferred tools before calling them.

#### 2.3.5 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use, requiring explicit tool selection before calling mcp__claude-in-chrome__* functions.

### 2.4 Specialized Utility Tools

Execution control and user interaction tools including execution pauses, skill invocation, user input gathering for clarification and decision-making, and isolated git worktree creation for VCS-agnostic branching.

#### 2.4.1 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input, preferred over bash sleep for avoiding shell process overhead.

#### 2.4.2 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation, requiring invocation before generating other responses when skills match user requests.

#### 2.4.3 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Defines when and how to use the AskUserQuestion tool for gathering user input, clarifying requirements, and offering implementation choices during execution and plan mode, with guidance on avoiding plan-related questions.

#### 2.4.4 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree when explicitly requested by the user, enabling VCS-agnostic isolation through hooks or git-based worktrees in .claude/worktrees/.

---

## 3. Agent Architecture & Multi-Agent Coordination

Designing, deploying, and coordinating autonomous agents — from single-agent task delegation and plan-mode workflows to multi-agent swarms and lifecycle hook systems.

### 3.1 Sub-Agent & Task Delegation

Specialized agents handle codebase exploration, code search, and multi-step task execution through delegation. The Task tool launches autonomous subagents for research and implementation while protecting context through parallelization, with an Explore agent providing fast read-only pattern matching and architectural analysis.

#### 3.1.1 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Use the Task tool with exploration subagents for broad codebase research when simple directed searches are insufficient or exceed query limits.

#### 3.1.2 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Use the Task tool with specialized subagents for parallelizing independent work and protecting context, but avoid duplicating research already performed by subagents.

#### 3.1.3 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents for complex tasks including research, exploration, and implementation; supports background execution, resumption, and worktree isolation with detailed task descriptions for autonomous work.

#### 3.1.4 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

General-purpose subagent for researching questions, searching code, and executing multi-step tasks using glob, grep, and read operations while avoiding unnecessary file creation.

#### 3.1.5 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Provides additional usage notes for Task tool including absolute path requirements, file snippet sharing, emoji avoidance, and proper tool call formatting.

#### 3.1.6 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file pattern matching, code searching, and architectural analysis using glob, grep, and read operations with configurable thoroughness levels.

### 3.2 Multi-Agent Team Coordination & Swarm Management

Teams of parallel agents coordinate through shared task lists and direct messaging, with a team lead managing task assignment and agent lifecycle. Communication protocols minimize API costs while enabling shutdown, plan approval, and resource cleanup across the swarm.

#### 3.2.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with a specific identity, team resources, and communication protocols, requiring it to refer to teammates by name and coordinate through task lists and messaging.

#### 3.2.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down its team gracefully before returning a final response to the user in non-interactive mode.

#### 3.2.3 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Establishes communication protocol for agents in a team swarm using SendMessage tool for direct messaging and broadcasts rather than text responses.

#### 3.2.4 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages team creation and coordination of multiple agents working in parallel on complex projects, with automatic message delivery, idle state handling, and shared task list coordination across teammates.

#### 3.2.5 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all teammates to be terminated first.

#### 3.2.6 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables team communication through direct messages, broadcasts, and protocol responses (shutdown, plan approval) in swarm workflows; emphasizes using direct messages over broadcasts to minimize API costs.

#### 3.2.7 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Guides teammates in finding and claiming available tasks from the shared task list, preferring lowest-ID tasks first and notifying the team lead when blocked.

### 3.3 Plan Mode: Activation, Phases & Constraints

Plan mode enforces a structured workflow where Claude explores code and designs implementation strategies for user approval before execution. Multiple variants support five-phase workflows, iterative pair-planning, and subagent constraints, with read-only restrictions preventing modifications until the plan is approved and exited.

#### 3.3.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode constraints across five phases: initial understanding with parallel exploration agents, design with planning agents, review of plans, final plan writing, and exit. Prohibits all edits except to the plan file and non-readonly tool execution.

#### 3.3.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning where Claude explores code, updates the plan file incrementally, and asks the user clarifying questions in a loop until the plan is complete. Prohibits all edits except to the plan file and non-readonly operations.

#### 3.3.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagent behavior in plan mode to read-only operations and plan file editing, prohibiting any system modifications while allowing comprehensive query answering and clarifying questions.

#### 3.3.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after a previous exit, instructing it to read the existing plan, evaluate the new request against it, and decide whether to continue or start fresh.

#### 3.3.5 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

User has exited plan mode and can now execute edits, run tools, and take actions.

#### 3.3.6 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Instructs Claude to proactively use EnterPlanMode for non-trivial implementation tasks to explore the codebase and design approaches for user approval before coding, preventing wasted effort and ensuring alignment on multi-file changes, architectural decisions, or tasks with multiple valid approaches.

#### 3.3.7 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning and requests user approval by reading the plan file; used only for implementation tasks requiring code, not research or exploration phases.

#### 3.3.8 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases and designs step-by-step implementation plans, identifying critical files and architectural trade-offs without modifying code.

#### 3.3.9 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and instructs Claude to continue working on it if relevant and incomplete.

#### 3.3.10 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Instructs Claude to call a verification tool directly after completing plan implementation to confirm all plan items were executed correctly.

### 3.4 Agent Design & Creation

Designs, deploys, and monitors autonomous agents by architecting system prompts with expert personas, embedding persistent memory instructions, tracking progress, and verifying task completion against defined stop conditions.

#### 3.4.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of high-performance AI agents by extracting user intent, designing expert personas, architecting comprehensive instructions, optimizing for performance, and generating descriptive identifiers. Produces JSON output with agent identifier, usage conditions, and complete system prompt.

#### 3.4.2 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations, with examples for code reviewers, test runners, architects, and documentation writers.

#### 3.4.3 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies completion of agent plans by reading conversation transcripts and inspecting the codebase, returning structured output indicating whether stop conditions are met.

#### 3.4.4 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether conditions are met with optional reason for failures.

#### 3.4.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt for generating concise 3-5 word action summaries in present tense for agent progress tracking, avoiding past tense, vagueness, and branch names.

### 3.5 Hook System: Execution & Lifecycle Events

Hooks execute commands and agents at lifecycle events, providing feedback through success messages, blocking errors, additional context, and continuation signals when execution is interrupted.

#### 3.5.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Additional context provided by a hook command.

#### 3.5.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Error occurred from a blocking hook command execution.

#### 3.5.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for messages indicating a hook stopped continuation.

#### 3.5.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Hook stopped continuation with a provided message.

#### 3.5.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Hook executed successfully with a success message.

#### 3.5.6 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Documents Claude Code's hooks system for running commands and agents at lifecycle events like tool use, permissions, and session lifecycle, with support for command, prompt, and agent hook types.

### 3.6 Agent SDK: References & Patterns

Complete Agent SDK documentation for building autonomous agents with Python and TypeScript, including built-in capabilities, permission models, Model Context Protocol integration, hooks for lifecycle management, and subagent composition. Provides both reference material and practical implementation patterns.

#### 3.6.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Complete Python Agent SDK reference covering installation, quick start, built-in tools, primary interfaces (query and ClaudeSDKClient), permission system, MCP support, hooks, subagents, and best practices.

#### 3.6.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, quick start, built-in tools, permission modes, MCP support with in-process tools, hooks, subagents, and best practices.

#### 3.6.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Comprehensive Python Agent SDK patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, session resumption, and custom system prompts with practical code examples.

#### 3.6.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks, subagents, MCP server integration for browser automation, and session resumption with custom system prompts.

---

## 4. Session Management, Memory & Context

Maintaining continuity across sessions through persistent memory, task tracking, context summarization, resource monitoring, and environment configuration.

### 4.1 Task & Todo Management

Structured task tracking tools break down complex work into imperative, actionable steps with progress states (pending, in-progress, completed). Task lists organize multi-step sessions and enable silent progress notifications without user interruption.

#### 4.1.1 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Use TodoWrite to break down work into tasks, track progress, and mark tasks complete immediately upon finishing.

#### 4.1.2 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for multi-step coding sessions, tracking progress with pending/in-progress/completed states and requiring both imperative and present-continuous task forms.

#### 4.1.3 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for multi-step coding sessions with imperative subjects and present-continuous active forms, tracking progress and organizing complex work.

#### 4.1.4 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Informs Claude that task output can be checked using the TaskOutput tool.

#### 4.1.5 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task tracking tools for progress management when relevant, without mentioning the reminder to the user.

#### 4.1.6 [Todo list changed (System Reminder)](system-prompts/system-reminder-todo-list-changed.md)

Notifies Claude of changes to its todo list without explicitly mentioning it to the user.

#### 4.1.7 [Todo list empty (System Reminder)](system-prompts/system-reminder-todo-list-empty.md)

Reminds Claude that its todo list is empty and suggests using TodoWrite tool if task tracking would be beneficial, without mentioning it to the user.

#### 4.1.8 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently reminds Claude to use the TodoWrite tool for progress tracking when relevant, without mentioning the reminder to the user.

### 4.2 Memory & Session Persistence

Session memory persists context across machine boundaries through structured note files, enabling selective memory retrieval based on relevance and continuous updates to maintain task state and learnings.

#### 4.2.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file stored at a specified path.

#### 4.2.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

#### 4.2.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory may have changed.

#### 4.2.4 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects up to five relevant memory files from available options based on user query, excluding uncertain matches to provide only clearly useful context.

#### 4.2.5 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by preserving structure and headers while adding detailed, info-dense content about tasks, technical concepts, files, errors, and current state within token limits.

#### 4.2.6 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files with sections for current state, task specification, files, workflow, errors, codebase documentation, learnings, and worklog.

### 4.3 Session & Conversation Summarization

Structured techniques for capturing and preserving conversation context across session boundaries, including detailed summaries of user requests, technical work, and pending tasks. Enables resumption of work by compacting context windows while maintaining continuity of discoveries and state.

#### 4.3.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing user requests, technical concepts, files modified, errors encountered, and pending tasks through structured analysis and organized output sections.

#### 4.3.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, capturing user requests, technical concepts, file modifications, errors, and pending tasks through structured analysis.

#### 4.3.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt template for generating structured continuation summaries when context windows are compacted, covering task overview, current state, discoveries, next steps, and context preservation.

### 4.4 File State & IDE Context Reminders

Contextual notifications track file state changes—external modifications, truncation, IDE interactions, and diagnostic alerts—enabling Claude to account for evolving codebase conditions and user actions without losing awareness of file boundaries or offset errors.

#### 4.4.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

File exists but contains no content.

#### 4.4.2 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

File was externally modified by user or linter; account for changes and do not revert unless requested.

#### 4.4.3 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

User opened a file in the IDE, which may or may not relate to the current task.

#### 4.4.4 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

File read offset exceeds file length; file is shorter than requested starting position.

#### 4.4.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Large file was truncated to first N lines; use Read tool to access remaining content if needed.

#### 4.4.6 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

File was read before conversation summarization but is too large to include; use Read tool to access it if needed.

#### 4.4.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude when a user selects specific lines of code in the IDE, providing the filename and line range for context.

#### 4.4.8 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the codebase.

### 4.5 Resource Monitoring: Tokens, Budget & Output Limits

Real-time tracking of token consumption and cost expenditure against quotas, with safeguards that truncate responses when limits are exceeded and signal the need for work decomposition.

#### 4.5.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

#### 4.5.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing used, total, and remaining budget.

#### 4.5.3 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Warns Claude that its response was truncated due to exceeding the output token limit and instructs it to break work into smaller pieces.

### 4.6 Session Discovery & Environment Setup

Discovering and configuring Claude Code sessions through intelligent search, status display, routing controls, and file isolation.

#### 4.6.1 Session Management & Search

Enables discovery and configuration of Claude Code sessions through intelligent search prioritization and customizable status line display.

##### 4.6.1.1 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user queries by prioritizing exact tag matches, then partial tags, titles, branches, and transcript content, returning inclusive results ordered by relevance.

##### 4.6.1.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by converting shell PS1 configurations to shell commands, handling ANSI colors and escape sequences, and updating settings.json with custom commands.

#### 4.6.2 System Reminders & Context Controls

Directives that shape interaction behavior and environment setup. They control agent invocation routing, constrain tool usage for lightweight side questions, isolate temporary file storage, and enable visual preview layouts for presenting options.

##### 4.6.2.1 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

User has requested invocation of a specific agent; invoke it with appropriate context.

##### 4.6.2.2 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Answer side questions directly without tools, using only conversation context, in a single response with no follow-up capability.

##### 4.6.2.3 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a dedicated session-specific scratchpad directory for temporary files instead of system temp directories.

##### 4.6.2.4 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for presenting visual options like UI mockups, code snippets, and diagrams in single-select questions.

---

## 5. Code Quality, Git & Development Practices

Engineering standards, safe task execution behavior, code review, git workflows, documentation, and CI/CD integration for professional software development.

### 5.1 Code Quality & Engineering Best Practices

Directives establishing pragmatic software engineering standards: secure coding without defensive over-validation, minimal scope changes with no premature abstractions or unnecessary additions, reading before modifying, and preferring file edits over creation to maintain simplicity and focus.

#### 5.1.1 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Directs Claude to avoid introducing security vulnerabilities including command injection, XSS, SQL injection, and OWASP top 10 risks, prioritizing secure code.

#### 5.1.2 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Instructs Claude to avoid defensive error handling for impossible scenarios and trust framework guarantees, validating only at system boundaries like user input and external APIs.

#### 5.1.3 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing any modifications or changes.

#### 5.1.4 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Directive to make only directly requested or clearly necessary changes, keeping solutions simple and focused.

#### 5.1.5 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Directive against creating helpers or abstractions for one-time operations or hypothetical requirements, favoring minimal complexity.

#### 5.1.6 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Directive to avoid adding features, refactoring, or improvements beyond what was asked, including unnecessary docstrings or type annotations.

#### 5.1.7 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Guidance to delete unused code completely rather than adding compatibility shims, re-exports, or removed comments.

#### 5.1.8 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Directive to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

#### 5.1.9 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames Claude's primary role as performing software engineering tasks like bug fixes, refactoring, and feature development, interpreting generic instructions within that context.

### 5.2 Task Execution Behavior & User Interaction

Guidance for safe, user-aligned task execution emphasizing confirmation for destructive operations, alternative problem-solving when blocked, deference to user judgment on scope, and transparent communication about permissions and limitations rather than workarounds.

#### 5.2.1 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Guidance to enable users to complete ambitious tasks by deferring to user judgment on scope rather than imposing artificial limitations.

#### 5.2.2 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Guidance to consider alternative approaches when blocked rather than brute-forcing, including using AskUserQuestion to align on the right path.

#### 5.2.3 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a cautious approach to risky actions by requiring user confirmation for destructive operations, hard-to-reverse changes, and shared-state modifications, while encouraging investigation over shortcuts.

#### 5.2.4 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Guidance to avoid giving time estimates or predictions for task completion, focusing on what needs to be done instead.

#### 5.2.5 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Template for informing users about help and feedback channels when requested.

#### 5.2.6 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides Claude to respect tool execution denials by attempting reasonable alternatives rather than malicious workarounds, and to communicate with the user if essential capabilities are blocked.

#### 5.2.7 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains tool permission modes and instructs Claude to adjust approach when tools are denied rather than re-attempting the same call.

### 5.3 Output Style, Tone & Communication

Standards for clear, efficient communication including concise polished output without filler, precise code location references for navigation, brief past-tense tool execution summaries, and parallel tool call optimization for independent operations.

#### 5.3.1 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Directs Claude to produce polished, concise output without filler, repetition, or inner monologue while preserving important information.

#### 5.3.2 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

#### 5.3.3 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number references when mentioning specific code locations to aid user navigation.

#### 5.3.4 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that a specific output style is active and reminds it to follow that style's guidelines.

#### 5.3.5 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Generate brief, past-tense summaries of tool execution outcomes in under 8 words, focusing on user-visible results without implementation details or self-reference.

#### 5.3.6 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while executing dependent calls sequentially to improve efficiency.

### 5.4 Git Workflows & Version Control

Safe git operations, automated commit and PR generation, branch management, GitHub integration, and hook safety protocols.

#### 5.4.1 Bash Tool: Git Operations & Safety

Git operations require safety protocols: never skip hooks or bypass signing unless explicitly requested, investigate and fix hook failures instead, and consider safer alternatives before destructive operations like reset or force push. Create new commits rather than amending existing ones, and use the `gh` command for pull request creation with proper commit message drafting and user-initiated workflows.

##### 5.4.1.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives before running destructive git operations like reset, force push, or checkout.

##### 5.4.1.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests, covering safety protocols, commit message drafting, hook handling, and PR creation with gh command, including restrictions on destructive operations and emphasis on user-initiated commits only.

##### 5.4.1.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping hooks or bypassing signing unless explicitly requested by user, requiring investigation and fixing of hook failures.

##### 5.4.1.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to create new commits rather than amending existing ones.

#### 5.4.2 Git Operations: Commits, PRs & Branch Management

Automated git workflows that analyze repository state and generate commits, pull requests, and branch names with appropriate messaging and metadata. Integrates with GitHub and external notifications while enforcing safety protocols and naming conventions.

##### 5.4.2.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context from git status and diff, analyzing changes to draft appropriate messages following repository conventions while enforcing safety protocols.

##### 5.4.2.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated context, handling branch creation, commit messaging, PR body generation, and optional Slack notifications based on CLAUDE.md configuration.

##### 5.4.2.3 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles and git branch names from session descriptions, keeping titles under six words in sentence case and branches under four words prefixed with 'claude/'.

##### 5.4.2.4 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including review comments with code context, formatting them with file paths, line numbers, and diff hunks.

##### 5.4.2.5 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git branch, main branch, status, and recent commits as a snapshot at conversation start.

### 5.5 Code Review & Security Analysis

Comprehensive code examination covering quality assessment, vulnerability detection, and security risk analysis. Balances thorough security testing with strict false-positive filtering and maintains ethical boundaries around authorized versus malicious activities.

#### 5.5.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Provides thorough code reviews of GitHub pull requests analyzing quality, style, improvements, and risks with focus on correctness, conventions, performance, testing, and security.

#### 5.5.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities in input validation, authentication, cryptography, injection, and data exposure with strict false-positive filtering.

#### 5.5.3 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing requests for destructive techniques, DoS attacks, and malicious detection evasion.

#### 5.5.4 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but strictly prohibits improving or augmenting malicious code while allowing analysis, reports, and behavior documentation.

### 5.6 Documentation: CLAUDE.md & Magic Docs

Codebase documentation systems that capture architecture, development patterns, and learnings in concise, high-level formats. Maintains living documentation that evolves with conversations while avoiding redundancy with self-evident code.

#### 5.6.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md files documenting common commands, high-level architecture, and development patterns for future Claude Code instances.

#### 5.6.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs Claude to update Magic Doc files with new learnings from conversations, preserving headers and maintaining current state without historical notes. Emphasizes terseness, high-level architecture focus, and avoiding duplication of code-obvious information.

### 5.7 GitHub CI/CD & Learning Workflows

GitHub Actions integration for Claude Code automation in development pipelines, plus learning-mode workflows that balance execution with user education.

#### 5.7.1 GitHub Integration & CI/CD

GitHub integration templates enabling Claude Code automation within development workflows through Actions and App installation, supporting @claude mentions in issues and pull requests with configurable permissions.

##### 5.7.1.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues, PRs, and comments with configurable permissions and custom prompts.

##### 5.7.1.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security considerations, and tool configuration.

#### 5.7.2 Learning Mode & User Education

Balances task execution with human learning by soliciting user input on design decisions and providing educational context around implementation choices and codebase patterns.

##### 5.7.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Establishes collaborative learning mode where Claude balances task completion with human education by requesting user contributions on design decisions, business logic, and algorithms while handling routine implementation.

##### 5.7.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code writing to encourage learning through implementation choices and codebase-specific patterns.

---

## 6. Claude API, SDK & Developer Tools

Building applications with Claude through language-specific SDKs, advanced API capabilities, skills automation, analytics, and developer-facing documentation.

### 6.1 Claude API: SDK References by Language

Language-specific SDK references for integrating Claude into applications across Python, TypeScript, Go, Java, Ruby, PHP, and C#. Each reference covers installation, client setup, basic messaging, streaming, and tool use patterns tailored to language idioms and ecosystems.

#### 6.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python Claude API reference covering installation, client initialization, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

#### 6.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript Claude API reference covering installation, client initialization, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

#### 6.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API including installation, client initialization, basic requests, streaming, and manual agentic loop for tool use.

#### 6.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering installation, client initialization, basic requests, streaming, and beta tool use with annotated classes via BetaToolRunner.

#### 6.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for Claude API including installation, client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

#### 6.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API covering installation, client initialization, basic message requests, streaming, and manual tool use.

#### 6.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for Claude API covering installation, client initialization, basic message requests, streaming, and manual tool use with JSON schema definitions.

### 6.2 Claude API: Tool Use, Streaming & Batches

Advanced Claude API capabilities for extending model functionality through tool definitions, asynchronous batch processing, file handling, and real-time streaming. Covers both framework-provided tool runners and manual agentic loops, with language-specific implementations and cost optimization through batching.

#### 6.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Comprehensive guide to tool use with the Claude API covering user-defined tools, tool choice options, tool runners versus manual agentic loops, server-side tools (code execution, web search, web fetch, computer use), client-side memory tools, and structured outputs with JSON schema constraints and best practices.

#### 6.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python-specific implementation guide for tool use including the beta tool runner with @beta_tool decorators, manual agentic loops, code execution with file uploads and container reuse, memory tool implementation via BetaAbstractMemoryTool, and structured outputs using Pydantic models and raw JSON schemas.

#### 6.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript-specific implementation guide for tool use featuring the beta tool runner with betaZodTool and Zod schemas, manual agentic loops, code execution with file handling, memory tool helpers via MemoryToolHandlers, and structured outputs using Zod validation.

#### 6.2.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, progress tracking, error handling, and stream event types.

#### 6.2.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, tool runner streaming, final message retrieval, and raw SSE format.

#### 6.2.6 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference covering batch creation, status polling, result retrieval, cancellation, and integration with prompt caching for 50% cost reduction.

#### 6.2.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for PDFs and images, file management (list, retrieve, delete, download), and end-to-end examples.

#### 6.2.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference including file upload, usage in messages for documents and images, and file management operations.

### 6.3 Developer Guidance & API Navigation

Routing system for Claude API development covering model selection, architecture patterns, language detection, and error handling entry points.

#### 6.3.1 Build with Claude API Skill

Comprehensive routing and reference system for Claude API development, including model selection guidance, architecture patterns, language detection, error handling, and live documentation sources. Serves as the primary entry point for developers building with Claude across different use cases and programming languages.

##### 6.3.1.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single calls, workflows, agents), architecture overview, current models (Opus 4.6, Sonnet 4.6, Haiku 4.5), adaptive thinking, effort parameters, context compaction, and comprehensive reading guide for language-specific documentation.

##### 6.3.1.2 [Build with Claude API (trigger) [Skill]](system-prompts/skill-build-with-claude-api-trigger.md)

Activation criteria for the Build with Claude API skill, triggered when code imports the anthropic or @anthropic-ai/sdk packages or when users explicitly request Claude API integration.

##### 6.3.1.3 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API reference documentation with quick task reference mapping common use cases to relevant documentation sections.

##### 6.3.1.4 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and retired Claude models with exact model IDs, aliases, context windows, max output tokens, and user request resolution mapping.

##### 6.3.1.5 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories, with extraction prompts for specific topics.

##### 6.3.1.6 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with causes, fixes, and common mistakes including retry guidance.

#### 6.3.2 Claude Guide & Documentation Agent

Provides authoritative guidance on Claude's tools and APIs by fetching and explaining official documentation, covering installation, configuration, SDK features, and best practices for developers building with Claude.

##### 6.3.2.1 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, providing clear guidance on installation, configuration, hooks, MCP servers, agent building, and API usage.

### 6.4 Skills System: Creation, Invocation & Verification

Framework for converting workflows into reusable, automated skills that test and verify code changes across web, CLI, and API surfaces. Enables deterministic verification planning, skill discovery, and result reporting with structured execution guidance.

#### 6.4.1 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-step process to convert a session into a reusable skill by analyzing the workflow, interviewing the user, and generating a SKILL.md file with detailed steps, success criteria, and execution guidance.

#### 6.4.2 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically test code changes across different project areas using Playwright for web UIs, Tmux for CLIs, and HTTP for APIs, including auto-detection, tool setup, authentication handling, and skill generation in .claude/skills/.

#### 6.4.3 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering verifier skills, analyzing git changes, creating deterministic verification plans, triggering appropriate verifiers, and reporting results with pass/fail status for each step.

#### 6.4.4 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, consulting settings files, and providing concrete fixes or next steps.

#### 6.4.5 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code settings.json files by reading existing configuration, merging new settings with existing ones, and configuring hooks for automated actions triggered by events like PreToolUse, PostToolUse, and PreCompact.

#### 6.4.6 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Displays a list of skills invoked during the current session and instructs Claude to continue following their guidelines.

### 6.5 Analytics & Content Processing Agents

Session usage analysis for workflow optimization, web content summarization, user intent detection, and follow-up command prediction.

#### 6.5.1 Usage Insights & Analytics

Analyzes Claude Code session data to identify working patterns, friction points, and improvement opportunities, then generates actionable recommendations for workflow optimization and feature adoption.

##### 6.5.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part usage insights summary covering what's working, hindrances, quick wins, and ambitious workflows for Claude Code users to improve their interaction patterns.

##### 6.5.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize recurring friction points and issues that hinder user productivity.

##### 6.5.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data analysis.

##### 6.5.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts including goal categories, user satisfaction signals, and friction points with specific classification rules.

##### 6.5.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP servers, custom skills, hooks, headless mode, task agents), and usage pattern guidance based on session analysis.

#### 6.5.2 Web Content Processing Agents

Agents that extract actionable signals from user interactions and external content. They summarize web pages with domain-aware quote enforcement, detect user sentiment and intent from conversation history, and predict likely follow-up commands to guide interaction flow.

##### 6.5.2.1 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and paraphrasing rules for untrusted domains while allowing flexible sourcing for trusted domains.

##### 6.5.2.2 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration and explicit pull request creation requests from conversation history, outputting boolean flags for frustration detection and PR submission intent.

##### 6.5.2.3 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on conversation context, suggesting concise follow-up commands the user would likely type without offering evaluations or Claude-voice suggestions.
