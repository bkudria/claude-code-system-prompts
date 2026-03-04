# Claude Code System Prompts Index

Prompts and frameworks for deploying Claude as a capable software engineering agent — covering everything needed to safely execute work, coordinate complex tasks, and maintain quality across the full development lifecycle.

## Table of Contents

1. [Bash Command Execution](#1-bash-command-execution)
   1. [Bash Sandbox Security & Restrictions](#11-bash-sandbox-security-restrictions)
      1. [Bash (sandbox — adjust settings) [Tool Description]](#111-bash-sandbox-—-adjust-settings-tool-description)
      2. [Bash (sandbox — default to sandbox) [Tool Description]](#112-bash-sandbox-—-default-to-sandbox-tool-description)
      3. [Bash (sandbox — evidence: access denied) [Tool Description]](#113-bash-sandbox-—-evidence-access-denied-tool-description)
      4. [Bash (sandbox — evidence list header) [Tool Description]](#114-bash-sandbox-—-evidence-list-header-tool-description)
      5. [Bash (sandbox — evidence: network failures) [Tool Description]](#115-bash-sandbox-—-evidence-network-failures-tool-description)
      6. [Bash (sandbox — evidence: operation not permitted) [Tool Description]](#116-bash-sandbox-—-evidence-operation-not-permitted-tool-description)
      7. [Bash (sandbox — evidence: unix socket errors) [Tool Description]](#117-bash-sandbox-—-evidence-unix-socket-errors-tool-description)
      8. [Bash (sandbox — explain restriction) [Tool Description]](#118-bash-sandbox-—-explain-restriction-tool-description)
      9. [Bash (sandbox — failure evidence condition) [Tool Description]](#119-bash-sandbox-—-failure-evidence-condition-tool-description)
      10. [Bash (sandbox — mandatory mode) [Tool Description]](#1110-bash-sandbox-—-mandatory-mode-tool-description)
      11. [Bash (sandbox — no exceptions) [Tool Description]](#1111-bash-sandbox-—-no-exceptions-tool-description)
      12. [Bash (sandbox — no sensitive paths) [Tool Description]](#1112-bash-sandbox-—-no-sensitive-paths-tool-description)
      13. [Bash (sandbox — per-command) [Tool Description]](#1113-bash-sandbox-—-per-command-tool-description)
      14. [Bash (sandbox — response header) [Tool Description]](#1114-bash-sandbox-—-response-header-tool-description)
      15. [Bash (sandbox — retry without sandbox) [Tool Description]](#1115-bash-sandbox-—-retry-without-sandbox-tool-description)
      16. [Bash (sandbox — tmpdir) [Tool Description]](#1116-bash-sandbox-—-tmpdir-tool-description)
      17. [Bash (sandbox — user permission prompt) [Tool Description]](#1117-bash-sandbox-—-user-permission-prompt-tool-description)
   2. [Bash Syntax, Execution & Best Practices](#12-bash-syntax-execution-best-practices)
      1. [Bash (overview) [Tool Description]](#121-bash-overview-tool-description)
      2. [Bash (command description) [Tool Description]](#122-bash-command-description-tool-description)
      3. [Bash (maintain cwd) [Tool Description]](#123-bash-maintain-cwd-tool-description)
      4. [Bash (no newlines) [Tool Description]](#124-bash-no-newlines-tool-description)
      5. [Bash (parallel commands) [Tool Description]](#125-bash-parallel-commands-tool-description)
      6. [Bash (prefer dedicated tools) [Tool Description]](#126-bash-prefer-dedicated-tools-tool-description)
      7. [Bash (quote file paths) [Tool Description]](#127-bash-quote-file-paths-tool-description)
      8. [Bash (semicolon usage) [Tool Description]](#128-bash-semicolon-usage-tool-description)
      9. [Bash (sequential commands) [Tool Description]](#129-bash-sequential-commands-tool-description)
      10. [Bash (sleep — keep short) [Tool Description]](#1210-bash-sleep-—-keep-short-tool-description)
      11. [Bash (sleep — no polling background tasks) [Tool Description]](#1211-bash-sleep-—-no-polling-background-tasks-tool-description)
      12. [Bash (sleep — no retry loops) [Tool Description]](#1212-bash-sleep-—-no-retry-loops-tool-description)
      13. [Bash (sleep — run immediately) [Tool Description]](#1213-bash-sleep-—-run-immediately-tool-description)
      14. [Bash (sleep — use check commands) [Tool Description]](#1214-bash-sleep-—-use-check-commands-tool-description)
      15. [Bash (sleep — use run_in_background) [Tool Description]](#1215-bash-sleep-—-use-run_in_background-tool-description)
      16. [Bash (timeout) [Tool Description]](#1216-bash-timeout-tool-description)
      17. [Bash (verify parent directory) [Tool Description]](#1217-bash-verify-parent-directory-tool-description)
      18. [Bash (working directory) [Tool Description]](#1218-bash-working-directory-tool-description)
      19. [Bash (built-in tools note) [Tool Description]](#1219-bash-built-in-tools-note-tool-description)
   3. [Bash Dedicated Tool Alternatives](#13-bash-dedicated-tool-alternatives)
      1. [Bash (alternative — communication) [Tool Description]](#131-bash-alternative-—-communication-tool-description)
      2. [Bash (alternative — content search) [Tool Description]](#132-bash-alternative-—-content-search-tool-description)
      3. [Bash (alternative — edit files) [Tool Description]](#133-bash-alternative-—-edit-files-tool-description)
      4. [Bash (alternative — file search) [Tool Description]](#134-bash-alternative-—-file-search-tool-description)
      5. [Bash (alternative — read files) [Tool Description]](#135-bash-alternative-—-read-files-tool-description)
      6. [Bash (alternative — write files) [Tool Description]](#136-bash-alternative-—-write-files-tool-description)
   4. [Bash Git Operations](#14-bash-git-operations)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#141-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#142-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#143-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#144-bash-git-—-prefer-new-commits-tool-description)
2. [Agent Orchestration & Planning](#2-agent-orchestration-planning)
   1. [Multi-Agent Team Coordination & Swarm Management](#21-multi-agent-team-coordination-swarm-management)
      1. [TeammateTool (Tool Description)](#211-teammatetool-tool-description)
      2. [SendMessageTool (Tool Description)](#212-sendmessagetool-tool-description)
      3. [TeamDelete (Tool Description)](#213-teamdelete-tool-description)
      4. [TaskList (teammate workflow) [Tool Description]](#214-tasklist-teammate-workflow-tool-description)
      5. [Team Coordination (System Reminder)](#215-team-coordination-system-reminder)
      6. [Team Shutdown (System Reminder)](#216-team-shutdown-system-reminder)
      7. [Teammate Communication (System Prompt)](#217-teammate-communication-system-prompt)
      8. [/batch slash command (Agent Prompt)](#218-batch-slash-command-agent-prompt)
   2. [Sub-Agent & Task Tool Orchestration](#22-sub-agent-task-tool-orchestration)
      1. [Task (Tool Description)](#221-task-tool-description)
      2. [Tool usage (subagent guidance) [System Prompt]](#222-tool-usage-subagent-guidance-system-prompt)
      3. [Tool usage (delegate exploration) [System Prompt]](#223-tool-usage-delegate-exploration-system-prompt)
      4. [Task tool (Agent Prompt)](#224-task-tool-agent-prompt)
      5. [Task tool (extra notes) [Agent Prompt]](#225-task-tool-extra-notes-agent-prompt)
      6. [Explore (Agent Prompt)](#226-explore-agent-prompt)
   3. [Planning Mode: Workflows & Constraints](#23-planning-mode-workflows-constraints)
      1. [Plan mode is active (5-phase) [System Reminder]](#231-plan-mode-is-active-5-phase-system-reminder)
      2. [Plan mode is active (iterative) [System Reminder]](#232-plan-mode-is-active-iterative-system-reminder)
      3. [Plan mode is active (subagent) [System Reminder]](#233-plan-mode-is-active-subagent-system-reminder)
      4. [Plan mode re-entry (System Reminder)](#234-plan-mode-re-entry-system-reminder)
      5. [Plan file reference (System Reminder)](#235-plan-file-reference-system-reminder)
      6. [Exited plan mode (System Reminder)](#236-exited-plan-mode-system-reminder)
      7. [EnterPlanMode (Tool Description)](#237-enterplanmode-tool-description)
      8. [ExitPlanMode (Tool Description)](#238-exitplanmode-tool-description)
      9. [Ultraplan complete (System Reminder)](#239-ultraplan-complete-system-reminder)
      10. [Verify plan reminder (System Reminder)](#2310-verify-plan-reminder-system-reminder)
      11. [Plan mode (enhanced) [Agent Prompt]](#2311-plan-mode-enhanced-agent-prompt)
   4. [Agent Design & Architecture](#24-agent-design-architecture)
      1. [Agent creation architect (Agent Prompt)](#241-agent-creation-architect-agent-prompt)
      2. [Update Claude Code Config (Skill)](#242-update-claude-code-config-skill)
      3. [Status line setup (Agent Prompt)](#243-status-line-setup-agent-prompt)
      4. [Bash command description writer (Agent Prompt)](#244-bash-command-description-writer-agent-prompt)
      5. [Bash command prefix detection (Agent Prompt)](#245-bash-command-prefix-detection-agent-prompt)
3. [File, Git & Development Environment](#3-file-git-development-environment)
   1. [File Reading, Writing & Search](#31-file-reading-writing-search)
      1. [File Operations: Read, Write, Edit & Search Tools](#311-file-operations-read-write-edit-search-tools)
         1. [ReadFile (Tool Description)](#3111-readfile-tool-description)
         2. [Write (Tool Description)](#3112-write-tool-description)
         3. [Edit (Tool Description)](#3113-edit-tool-description)
         4. [Glob (Tool Description)](#3114-glob-tool-description)
         5. [Grep (Tool Description)](#3115-grep-tool-description)
         6. [Tool usage (read files) [System Prompt]](#3116-tool-usage-read-files-system-prompt)
         7. [Tool usage (create files) [System Prompt]](#3117-tool-usage-create-files-system-prompt)
         8. [Tool usage (edit files) [System Prompt]](#3118-tool-usage-edit-files-system-prompt)
         9. [Tool usage (search files) [System Prompt]](#3119-tool-usage-search-files-system-prompt)
         10. [Tool usage (search content) [System Prompt]](#31110-tool-usage-search-content-system-prompt)
         11. [Tool usage (direct search) [System Prompt]](#31111-tool-usage-direct-search-system-prompt)
         12. [Tool usage (reserve Bash) [System Prompt]](#31112-tool-usage-reserve-bash-system-prompt)
      2. [File State & Context Notifications](#312-file-state-context-notifications)
         1. [File truncated (System Reminder)](#3121-file-truncated-system-reminder)
         2. [File exists but empty (System Reminder)](#3122-file-exists-but-empty-system-reminder)
         3. [File shorter than offset (System Reminder)](#3123-file-shorter-than-offset-system-reminder)
         4. [Compact file reference (System Reminder)](#3124-compact-file-reference-system-reminder)
   2. [Git Version Control](#32-git-version-control)
      1. [Git Workflow: Commits, PRs & Version Control](#321-git-workflow-commits-prs-version-control)
         1. [Quick git commit (Agent Prompt)](#3211-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#3212-quick-pr-creation-agent-prompt)
         3. [/pr-comments slash command (Agent Prompt)](#3213-pr-comments-slash-command-agent-prompt)
         4. [Git status (System Prompt)](#3214-git-status-system-prompt)
         5. [Worker instructions (System Prompt)](#3215-worker-instructions-system-prompt)
         6. [Session title and branch generation (Agent Prompt)](#3216-session-title-and-branch-generation-agent-prompt)
      2. [Git Worktree & Repository Isolation](#322-git-worktree-repository-isolation)
         1. [EnterWorktree (Tool Description)](#3221-enterworktree-tool-description)
   3. [IDE & Code Intelligence](#33-ide-code-intelligence)
      1. [IDE Integration & Editor Context](#331-ide-integration-editor-context)
         1. [Lines selected in IDE (System Reminder)](#3311-lines-selected-in-ide-system-reminder)
         2. [File opened in IDE (System Reminder)](#3312-file-opened-in-ide-system-reminder)
         3. [New diagnostics detected (System Reminder)](#3313-new-diagnostics-detected-system-reminder)
         4. [File modified by user or linter (System Reminder)](#3314-file-modified-by-user-or-linter-system-reminder)
      2. [Jupyter Notebook & LSP Code Intelligence](#332-jupyter-notebook-lsp-code-intelligence)
         1. [NotebookEdit (Tool Description)](#3321-notebookedit-tool-description)
         2. [LSP (Tool Description)](#3322-lsp-tool-description)
   4. [Tool Permissions & Execution Control](#34-tool-permissions-execution-control)
      1. [Tool Permission & Execution Control](#341-tool-permission-execution-control)
         1. [Tool permission mode (System Prompt)](#3411-tool-permission-mode-system-prompt)
         2. [Tool execution denied (System Prompt)](#3412-tool-execution-denied-system-prompt)
         3. [AskUserQuestion (Tool Description)](#3413-askuserquestion-tool-description)
      2. [Execution Control](#342-execution-control)
         1. [Sleep (Tool Description)](#3421-sleep-tool-description)
4. [API, SDK & External Integration](#4-api-sdk-external-integration)
   1. [Claude API & SDK Reference Documentation](#41-claude-api-sdk-reference-documentation)
      1. [Claude API reference — Python (Data)](#411-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#412-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#413-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#414-claude-api-reference-—-java-data)
      5. [Claude API reference — Ruby (Data)](#415-claude-api-reference-—-ruby-data)
      6. [Claude API reference — PHP (Data)](#416-claude-api-reference-—-php-data)
      7. [Claude API reference — C# (Data)](#417-claude-api-reference-—-c-data)
      8. [Streaming reference — Python (Data)](#418-streaming-reference-—-python-data)
      9. [Streaming reference — TypeScript (Data)](#419-streaming-reference-—-typescript-data)
      10. [Tool use concepts (Data)](#4110-tool-use-concepts-data)
      11. [Tool use reference — Python (Data)](#4111-tool-use-reference-—-python-data)
      12. [Tool use reference — TypeScript (Data)](#4112-tool-use-reference-—-typescript-data)
      13. [Files API reference — Python (Data)](#4113-files-api-reference-—-python-data)
      14. [Files API reference — TypeScript (Data)](#4114-files-api-reference-—-typescript-data)
      15. [Message Batches API reference — Python (Data)](#4115-message-batches-api-reference-—-python-data)
      16. [HTTP error codes reference (Data)](#4116-http-error-codes-reference-data)
      17. [Claude model catalog (Data)](#4117-claude-model-catalog-data)
      18. [Live documentation sources (Data)](#4118-live-documentation-sources-data)
      19. [Build with Claude API (Skill)](#4119-build-with-claude-api-skill)
      20. [Build with Claude API (reference guide) [Skill]](#4120-build-with-claude-api-reference-guide-skill)
   2. [Agent SDK Reference & Patterns](#42-agent-sdk-reference-patterns)
      1. [Agent SDK reference — Python (Data)](#421-agent-sdk-reference-—-python-data)
      2. [Agent SDK reference — TypeScript (Data)](#422-agent-sdk-reference-—-typescript-data)
      3. [Agent SDK patterns — Python (Data)](#423-agent-sdk-patterns-—-python-data)
      4. [Agent SDK patterns — TypeScript (Data)](#424-agent-sdk-patterns-—-typescript-data)
   3. [GitHub Integration & CI/CD](#43-github-integration-cicd)
      1. [GitHub Actions workflow for @claude mentions (Data)](#431-github-actions-workflow-for-claude-mentions-data)
      2. [GitHub App installation PR description (Data)](#432-github-app-installation-pr-description-data)
   4. [Browser Automation & Web Interaction](#44-browser-automation-web-interaction)
      1. [Computer (Tool Description)](#441-computer-tool-description)
      2. [Computer action (Tool Parameter)](#442-computer-action-tool-parameter)
      3. [Chrome browser MCP tools (System Prompt)](#443-chrome-browser-mcp-tools-system-prompt)
      4. [Claude in Chrome browser automation (System Prompt)](#444-claude-in-chrome-browser-automation-system-prompt)
      5. [WebFetch (Tool Description)](#445-webfetch-tool-description)
      6. [WebSearch (Tool Description)](#446-websearch-tool-description)
      7. [WebFetch summarizer (Agent Prompt)](#447-webfetch-summarizer-agent-prompt)
   5. [Documentation Generation & Codebase Analysis](#45-documentation-generation-codebase-analysis)
      1. [CLAUDE.md creation (Agent Prompt)](#451-claudemd-creation-agent-prompt)
      2. [Update Magic Docs (Agent Prompt)](#452-update-magic-docs-agent-prompt)
      3. [Claude guide agent (Agent Prompt)](#453-claude-guide-agent-agent-prompt)
5. [Session, Memory & Workflow Management](#5-session-memory-workflow-management)
   1. [Session Memory & Context Persistence](#51-session-memory-context-persistence)
      1. [Memory file contents (System Reminder)](#511-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#512-nested-memory-contents-system-reminder)
      3. [Session continuation (System Reminder)](#513-session-continuation-system-reminder)
      4. [Memory selection (Agent Prompt)](#514-memory-selection-agent-prompt)
      5. [Session memory update instructions (Agent Prompt)](#515-session-memory-update-instructions-agent-prompt)
      6. [Session memory template (Data)](#516-session-memory-template-data)
      7. [Agent memory instructions (System Prompt)](#517-agent-memory-instructions-system-prompt)
      8. [Session Search Assistant (Agent Prompt)](#518-session-search-assistant-agent-prompt)
   2. [Conversation Summarization & Context Compaction](#52-conversation-summarization-context-compaction)
      1. [Conversation summarization (Agent Prompt)](#521-conversation-summarization-agent-prompt)
      2. [Recent Message Summarization (Agent Prompt)](#522-recent-message-summarization-agent-prompt)
      3. [Context compaction summary (System Prompt)](#523-context-compaction-summary-system-prompt)
      4. [Agent Summary Generation (System Prompt)](#524-agent-summary-generation-system-prompt)
      5. [Tool Use Summary Generation (System Prompt)](#525-tool-use-summary-generation-system-prompt)
   3. [Task & Todo Management](#53-task-todo-management)
      1. [TodoWrite (Tool Description)](#531-todowrite-tool-description)
      2. [TaskCreate (Tool Description)](#532-taskcreate-tool-description)
      3. [TodoWrite reminder (System Reminder)](#533-todowrite-reminder-system-reminder)
      4. [Task tools reminder (System Reminder)](#534-task-tools-reminder-system-reminder)
      5. [Task status (System Reminder)](#535-task-status-system-reminder)
      6. [Tool usage (task management) [System Prompt]](#536-tool-usage-task-management-system-prompt)
   4. [Hooks: Lifecycle Events & Notifications](#54-hooks-lifecycle-events-notifications)
      1. [Hooks Configuration (System Prompt)](#541-hooks-configuration-system-prompt)
      2. [Hook stopped continuation prefix (System Reminder)](#542-hook-stopped-continuation-prefix-system-reminder)
      3. [Hook stopped continuation (System Reminder)](#543-hook-stopped-continuation-system-reminder)
      4. [Hook success (System Reminder)](#544-hook-success-system-reminder)
      5. [Hook additional context (System Reminder)](#545-hook-additional-context-system-reminder)
      6. [Hook blocking error (System Reminder)](#546-hook-blocking-error-system-reminder)
      7. [Agent Hook (Agent Prompt)](#547-agent-hook-agent-prompt)
      8. [Hook condition evaluator (Agent Prompt)](#548-hook-condition-evaluator-agent-prompt)
   5. [Session Management & Workflow State](#55-session-management-workflow-state)
      1. [Output style active (System Reminder)](#551-output-style-active-system-reminder)
      2. [Scratchpad directory (System Prompt)](#552-scratchpad-directory-system-prompt)
      3. [/btw side question (System Reminder)](#553-btw-side-question-system-reminder)
      4. [Agent mention (System Reminder)](#554-agent-mention-system-reminder)
      5. [Prompt Suggestion Generator v2 (Agent Prompt)](#555-prompt-suggestion-generator-v2-agent-prompt)
      6. [User sentiment analysis (Agent Prompt)](#556-user-sentiment-analysis-agent-prompt)
   6. [Resource & System Monitoring](#56-resource-system-monitoring)
      1. [Resource & Budget Monitoring](#561-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#5611-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#5612-usd-budget-system-reminder)
         3. [Output token limit exceeded (System Reminder)](#5613-output-token-limit-exceeded-system-reminder)
      2. [MCP Resource Handling](#562-mcp-resource-handling)
         1. [MCP resource no content (System Reminder)](#5621-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#5622-mcp-resource-no-displayable-content-system-reminder)
      3. [User Communication](#563-user-communication)
         1. [Doing tasks (help and feedback) [System Prompt]](#5631-doing-tasks-help-and-feedback-system-prompt)
6. [Code Quality, Skills & Engineering Practice](#6-code-quality-skills-engineering-practice)
   1. [Code Engineering Principles & Task Execution Guidelines](#61-code-engineering-principles-task-execution-guidelines)
      1. [Doing tasks (ambitious tasks) [System Prompt]](#611-doing-tasks-ambitious-tasks-system-prompt)
      2. [Doing tasks (avoid over-engineering) [System Prompt]](#612-doing-tasks-avoid-over-engineering-system-prompt)
      3. [Doing tasks (blocked approach) [System Prompt]](#613-doing-tasks-blocked-approach-system-prompt)
      4. [Doing tasks (minimize file creation) [System Prompt]](#614-doing-tasks-minimize-file-creation-system-prompt)
      5. [Doing tasks (no compatibility hacks) [System Prompt]](#615-doing-tasks-no-compatibility-hacks-system-prompt)
      6. [Doing tasks (no premature abstractions) [System Prompt]](#616-doing-tasks-no-premature-abstractions-system-prompt)
      7. [Doing tasks (no time estimates) [System Prompt]](#617-doing-tasks-no-time-estimates-system-prompt)
      8. [Doing tasks (no unnecessary additions) [System Prompt]](#618-doing-tasks-no-unnecessary-additions-system-prompt)
      9. [Doing tasks (no unnecessary error handling) [System Prompt]](#619-doing-tasks-no-unnecessary-error-handling-system-prompt)
      10. [Doing tasks (read before modifying) [System Prompt]](#6110-doing-tasks-read-before-modifying-system-prompt)
      11. [Doing tasks (software engineering focus) [System Prompt]](#6111-doing-tasks-software-engineering-focus-system-prompt)
      12. [Executing actions with care (System Prompt)](#6112-executing-actions-with-care-system-prompt)
   2. [Code Review & Security Analysis](#62-code-review-security-analysis)
      1. [/review-pr slash command (Agent Prompt)](#621-review-pr-slash-command-agent-prompt)
      2. [/security-review slash command (Agent Prompt)](#622-security-review-slash-command-agent-prompt)
      3. [Malware analysis after Read tool call (System Reminder)](#623-malware-analysis-after-read-tool-call-system-reminder)
      4. [Censoring assistance with malicious activities (System Prompt)](#624-censoring-assistance-with-malicious-activities-system-prompt)
      5. [Doing tasks (security) [System Prompt]](#625-doing-tasks-security-system-prompt)
   3. [Verification, Testing & Quality Assurance](#63-verification-testing-quality-assurance)
      1. [Verification specialist (Agent Prompt)](#631-verification-specialist-agent-prompt)
      2. [Verification specialist (Skill)](#632-verification-specialist-skill)
      3. [Create verifier skills (Skill)](#633-create-verifier-skills-skill)
      4. [Simplify (Skill)](#634-simplify-skill)
      5. [Debugging (Skill)](#635-debugging-skill)
   4. [Skills: Invocation, Creation & Management](#64-skills-invocation-creation-management)
      1. [Skill (Tool Description)](#641-skill-tool-description)
      2. [Tool usage (skill invocation) [System Prompt]](#642-tool-usage-skill-invocation-system-prompt)
      3. [ToolSearch (Tool Description)](#643-toolsearch-tool-description)
      4. [ToolSearch extended (Tool Description)](#644-toolsearch-extended-tool-description)
      5. [Skillify Current Session (System Prompt)](#645-skillify-current-session-system-prompt)
      6. [Invoked skills (System Reminder)](#646-invoked-skills-system-reminder)
   5. [Usage Insights & Analytics](#65-usage-insights-analytics)
      1. [Insights at a glance summary (System Prompt)](#651-insights-at-a-glance-summary-system-prompt)
      2. [Insights friction analysis (System Prompt)](#652-insights-friction-analysis-system-prompt)
      3. [Insights on the horizon (System Prompt)](#653-insights-on-the-horizon-system-prompt)
      4. [Insights session facets extraction (System Prompt)](#654-insights-session-facets-extraction-system-prompt)
      5. [Insights suggestions (System Prompt)](#655-insights-suggestions-system-prompt)
   6. [Output Style, Tone & Communication](#66-output-style-tone-communication)
      1. [Tone and style (code references) [System Prompt]](#661-tone-and-style-code-references-system-prompt)
      2. [Tone and style (concise output — detailed) [System Prompt]](#662-tone-and-style-concise-output-—-detailed-system-prompt)
      3. [Tone and style (concise output — short) [System Prompt]](#663-tone-and-style-concise-output-—-short-system-prompt)
      4. [Output efficiency instructions (System Prompt)](#664-output-efficiency-instructions-system-prompt)
      5. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#665-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
   7. [Learning & Visual Design Tools](#67-learning-visual-design-tools)
      1. [Learning Mode & Educational Workflows](#671-learning-mode-educational-workflows)
         1. [Learning mode (System Prompt)](#6711-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#6712-learning-mode-insights-system-prompt)
      2. [UI Preview & Option Comparison](#672-ui-preview-option-comparison)
         1. [Option previewer (System Prompt)](#6721-option-previewer-system-prompt)

---

## 1. Bash Command Execution

All aspects of running bash commands safely and effectively, from sandboxing and security enforcement to syntax patterns, performance optimization, and delegation to specialized tools.

### 1.1 Bash Sandbox Security & Restrictions

Enforces mandatory sandboxing for all bash commands with automatic failure detection and recovery. Commands run in restricted environments by default; failures due to access denial, network restrictions, or permission errors trigger automatic retry with sandbox bypass, while sensitive paths are never added to allowlists.

#### 1.1.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

Instructs to work with user to adjust sandbox settings when commands fail due to sandbox restrictions.

#### 1.1.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Instructs to default to running commands within sandbox and only bypass when user explicitly requests or sandbox restriction evidence appears.

#### 1.1.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Describes sandbox evidence indicator: access denied to paths outside allowed directories.

#### 1.1.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing a list of indicators that sandbox restrictions caused a command failure.

#### 1.1.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Identifies network connection failures to non-whitelisted hosts as evidence of sandbox restrictions.

#### 1.1.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Recognizes "Operation not permitted" errors for file and network operations as sandbox-caused failures.

#### 1.1.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Identifies Unix socket connection errors as indicators of sandbox-imposed restrictions.

#### 1.1.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Instructs Claude to briefly explain which sandbox restriction caused a failure and mention the `/sandbox` command for managing restrictions.

#### 1.1.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Defines the condition when a command fails with clear evidence of sandbox restrictions, distinguishing sandbox failures from other causes.

#### 1.1.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

Enforces that all commands must run in sandbox mode; the `dangerouslyDisableSandbox` parameter is disabled by policy.

#### 1.1.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Establishes that commands cannot run outside the sandbox under any circumstances.

#### 1.1.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Prohibits suggesting sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files be added to the sandbox allowlist.

#### 1.1.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Instructs Claude to treat each command individually and default to sandbox mode for future commands, even after using `dangerouslyDisableSandbox`.

#### 1.1.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header introducing Claude's response strategy when sandbox-caused failures are detected.

#### 1.1.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Instructs Claude to immediately retry with `dangerouslyDisableSandbox: true` when sandbox failure is detected, without asking the user first.

#### 1.1.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Requires using the `$TMPDIR` environment variable (or `${SANDBOX_TMPDIR_FN()}` as fallback) for temporary files in sandbox mode instead of `/tmp` directly.

#### 1.1.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Notes that disabling the sandbox will prompt the user for permission.

### 1.2 Bash Syntax, Execution & Best Practices

Governs command composition, execution patterns, and performance optimization for bash operations. Uses sequential chaining with `&&` for dependent commands, parallel calls for independent operations, and background task execution to avoid blocking. Maintains working directory state across commands and avoids unnecessary sleep operations.

#### 1.2.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Describes the Bash tool as executing bash commands and returning their output.

#### 1.2.2 [Bash (command description) [Tool Description]](system-prompts/tool-description-bash-command-description.md)

Instructs to write clear, concise descriptions of bash commands, keeping simple commands brief and providing context for complex piped or obscure commands.

#### 1.2.3 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to maintain current working directory by using absolute paths and avoiding cd unless explicitly requested by user.

#### 1.2.4 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Instructs not to use newlines to separate commands in bash.

#### 1.2.5 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Instructs to run independent bash commands as parallel tool calls in a single message for efficiency.

#### 1.2.6 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Warns to avoid using Bash for find, grep, cat, head, tail, sed, awk, or echo commands; use dedicated tools instead for better user experience.

#### 1.2.7 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Instructs to always quote file paths containing spaces with double quotes in bash commands.

#### 1.2.8 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Instructs Claude to use semicolons only when running commands sequentially but failure of earlier commands is acceptable.

#### 1.2.9 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Instructs Claude to chain dependent commands with `&&` in a single bash call to ensure sequential execution with failure propagation.

#### 1.2.10 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Instructs Claude to keep sleep durations short (1-5 seconds) to avoid blocking the user.

#### 1.2.11 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Instructs Claude not to poll background tasks started with `run_in_background`, as completion notifications will be provided.

#### 1.2.12 [Bash (sleep — no retry loops) [Tool Description]](system-prompts/tool-description-bash-sleep-no-retry-loops.md)

Instructs Claude to diagnose root causes of failures rather than retrying in sleep loops.

#### 1.2.13 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Instructs Claude not to sleep between commands that can run immediately.

#### 1.2.14 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

Instructs Claude to use check commands like `gh run view` for polling rather than sleeping first.

#### 1.2.15 [Bash (sleep — use run_in_background) [Tool Description]](system-prompts/tool-description-bash-sleep-use-run_in_background.md)

Instructs Claude to use `run_in_background` for long-running commands instead of sleeping, with automatic completion notification.

#### 1.2.16 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Describes optional timeout configuration in milliseconds with default and maximum limits for bash commands.

#### 1.2.17 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Instructs Claude to verify parent directories exist using `ls` before creating new files or directories.

#### 1.2.18 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Notes that working directory persists between commands but shell state does not; environment is initialized from user's profile.

#### 1.2.19 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Notes that built-in dedicated tools provide better user experience and easier permission review than equivalent Bash commands.

### 1.3 Bash Dedicated Tool Alternatives

Redirects common bash operations to specialized tools for improved user experience and permission clarity. File operations (reading, writing, editing), content search, and file discovery bypass bash in favor of dedicated tools, while text output uses direct communication rather than echo commands.

#### 1.3.1 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly instead of using echo or printf commands.

#### 1.3.2 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs to use a dedicated Grep tool for content search instead of grep or rg commands.

#### 1.3.3 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs to use a dedicated Edit tool for file editing instead of sed or awk commands.

#### 1.3.4 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs to use a dedicated Glob tool for file search instead of find or ls commands.

#### 1.3.5 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs to use a dedicated Read tool for file reading instead of cat, head, or tail commands.

#### 1.3.6 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs to use a dedicated Write tool for file writing instead of echo or cat commands.

### 1.4 Bash Git Operations

Establishes safety protocols for git workflows including commit creation, pull request submission, and destructive operations. Requires explicit user approval before committing, never skips hooks or signing, and prefers new commits over amendments. Comprehensive guidance covers hook handling, commit message drafting, and GitHub integration.

#### 1.4.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives before running destructive git operations like reset --hard, push --force, or checkout --.

#### 1.4.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, hook handling, commit message drafting, and PR creation via gh command. Emphasizes never committing without explicit user request, avoiding destructive operations, and creating new commits rather than amending.

#### 1.4.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Instructs never to skip hooks or bypass signing unless explicitly requested by user; investigate and fix underlying issues if hooks fail.

#### 1.4.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to prefer creating new commits over amending existing ones.

---

## 2. Agent Orchestration & Planning

Frameworks for coordinating multi-agent systems, delegating work to sub-agents, structured planning workflows, and designing custom autonomous agents.

### 2.1 Multi-Agent Team Coordination & Swarm Management

Orchestrates parallel agent teams with task assignment, message routing, and lifecycle management. Enables large-scale codebase changes through work decomposition, worktree isolation, and coordinated execution across independent units.

#### 2.1.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages team creation and coordination of multiple agents working in parallel, with automatic message delivery, task assignment, and idle state handling.

#### 2.1.2 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables team communication via direct messages, broadcasts, and protocol responses including shutdown and plan approval handling in swarm workflows.

#### 2.1.3 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completion, requiring all teammates to be shut down first.

#### 2.1.4 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Guides teammates in finding and claiming available tasks from shared task lists, prioritizing by ID order and respecting task dependencies.

#### 2.1.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes team identity, resources, and communication protocols including task list management and teammate coordination by name.

#### 2.1.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires graceful team shutdown before returning final response in non-interactive mode.

#### 2.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agent teammates to use SendMessage tool for communication rather than text responses, supporting both direct messages and broadcasts.

#### 2.1.8 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing work into 5-30 independent units, determining end-to-end test recipes, and spawning background worker agents with worktree isolation. Tracks progress across all parallel units.

### 2.2 Sub-Agent & Task Tool Orchestration

Delegates specialized work to focused sub-agents for parallelized execution, codebase exploration, and context isolation. Enables comprehensive research and multi-step task execution without duplicating work or exceeding query limits.

#### 2.2.1 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents for complex tasks with support for concurrent execution, background processing, and worktree isolation for autonomous work.

#### 2.2.2 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Instructs Claude to use the Task tool with specialized subagents for parallelizing independent queries and protecting context, while avoiding duplicate work already performed by subagents.

#### 2.2.3 [Tool usage (delegate exploration) [System Prompt]](system-prompts/system-prompt-tool-usage-delegate-exploration.md)

Instructs Claude to use the Task tool with exploration subagents for comprehensive codebase research when simple searches prove insufficient or exceed query limits.

#### 2.2.4 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

General-purpose subagent for researching questions, searching code, and executing multi-step tasks across codebases using grep, glob, and file reading without creating unnecessary files.

#### 2.2.5 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Additional guidelines for Task tool usage emphasizing absolute file paths, no emojis, and proper formatting without colons before tool calls.

#### 2.2.6 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only codebase exploration specialist using glob patterns, regex search, and file reading to rapidly find files, search code, and answer architectural questions. Operates in quick, medium, or thorough modes without modifying files.

### 2.3 Planning Mode: Workflows & Constraints

Implements structured planning workflows for complex implementation tasks with read-only constraints during exploration phases. Supports iterative pair-planning and parallel subagent analysis of codebases, requiring user approval before transitioning to execution. Plan files track design decisions and implementation strategies across sessions.

#### 2.3.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Comprehensive plan mode workflow with five phases: initial understanding, design, review, final plan, and exit. Enforces read-only constraints and enables parallel subagent exploration for codebase analysis and implementation planning.

#### 2.3.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Iterative pair-planning workflow where Claude explores code, updates plan incrementally, and asks clarifying questions. Enforces read-only constraints except for plan file editing.

#### 2.3.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode constraints for subagents: read-only operations only, plan file editing permitted, comprehensive query answering with clarifying questions.

#### 2.3.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guidance for re-entering plan mode after previous exit, requiring evaluation of existing plan against new request and appropriate plan file updates.

#### 2.3.5 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

Reference to an existing plan file from plan mode, with instructions to continue if relevant.

#### 2.3.6 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that it has exited plan mode and can now execute edits, run tools, and take actions, with optional reference to the plan file location.

#### 2.3.7 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Transitions into plan mode for non-trivial implementation tasks, allowing exploration and design of approaches before coding, requiring user approval before proceeding.

#### 2.3.8 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of implementation planning and requests user approval by reading the plan file, used only for code-writing tasks, not research.

#### 2.3.9 [Ultraplan complete (System Reminder)](system-prompts/system-reminder-ultraplan-complete.md)

Instructs Claude to generate a thorough implementation plan by spawning parallel agents to explore codebase architecture, identify affected files, and assess risks, then synthesizing findings into a detailed step-by-step plan with testing and mitigation strategies.

#### 2.3.10 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation.

#### 2.3.11 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent that explores codebases and designs implementation plans by understanding requirements, analyzing patterns, and detailing step-by-step strategies with critical file identification.

### 2.4 Agent Design & Architecture

Specialized prompts for building and configuring custom AI agents, covering agent design methodology, system prompt engineering, CLI customization, command documentation, and security analysis. Enables creation of autonomous agents with defined behaviors and safety constraints.

#### 2.4.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides Claude in designing high-performance custom AI agents by extracting user intent, creating expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces JSON output with agent identifier, usage conditions, and complete operational manual.

#### 2.4.2 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Workflow for modifying Claude Code settings.json files by reading existing config, merging changes carefully, and configuring hooks for automated actions like formatting and testing.

#### 2.4.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell configs, converting escape sequences to shell commands, and updating settings.json with custom status line commands.

#### 2.4.4 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions for bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or flagged commands.

#### 2.4.5 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety classification. Returns the prefix string or 'command_injection_detected' to protect against malicious command chaining.

---

## 3. File, Git & Development Environment

Core filesystem operations, version control workflows, IDE integration, and runtime execution controls that form the development environment.

### 3.1 File Reading, Writing & Search

Filesystem tools for reading, writing, editing, and pattern-matching across files including PDFs and notebooks, with precise editing and codebase discovery.

#### 3.1.1 File Operations: Read, Write, Edit & Search Tools

Core filesystem operations for reading, writing, and modifying files with specialized tools for pattern matching and content search. Supports multimodal content including PDFs and notebooks, with precise editing and efficient codebase discovery.

##### 3.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the filesystem with configurable line limits, supporting images, PDFs, and Jupyter notebooks with optional page ranges for large documents.

##### 3.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the filesystem, preferring the Edit tool for modifications and avoiding documentation file creation unless explicitly requested.

##### 3.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Performs exact string replacements in files with precise indentation preservation and unique matching requirements, preferring edits over new file creation.

##### 3.1.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob syntax like **/*.js, returning sorted results by modification time for efficient codebase searching.

##### 3.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Ripgrep-based content search supporting full regex syntax, file filtering, and multiple output modes for locating code patterns across repositories.

##### 3.1.1.6 [Tool usage (read files) [System Prompt]](system-prompts/system-prompt-tool-usage-read-files.md)

Directs Claude to use the Read tool for file access instead of cat, head, tail, or sed.

##### 3.1.1.7 [Tool usage (create files) [System Prompt]](system-prompts/system-prompt-tool-usage-create-files.md)

Directs Claude to use the Write tool for file creation instead of shell redirection methods.

##### 3.1.1.8 [Tool usage (edit files) [System Prompt]](system-prompts/system-prompt-tool-usage-edit-files.md)

Directs Claude to use the Edit tool for file modifications instead of sed or awk.

##### 3.1.1.9 [Tool usage (search files) [System Prompt]](system-prompts/system-prompt-tool-usage-search-files.md)

Directs Claude to use the Glob tool for file discovery instead of find or ls.

##### 3.1.1.10 [Tool usage (search content) [System Prompt]](system-prompts/system-prompt-tool-usage-search-content.md)

Directs Claude to use the Grep tool for file content searches instead of grep or rg.

##### 3.1.1.11 [Tool usage (direct search) [System Prompt]](system-prompts/system-prompt-tool-usage-direct-search.md)

Directs Claude to use Glob or Grep tools directly for targeted codebase searches.

##### 3.1.1.12 [Tool usage (reserve Bash) [System Prompt]](system-prompts/system-prompt-tool-usage-reserve-bash.md)

Instructs Claude to reserve Bash tool exclusively for system commands and terminal operations, defaulting to dedicated tools when available.

#### 3.1.2 File State & Context Notifications

System notifications that inform Claude about file access constraints, including truncation due to size limits, empty or inaccessible files, and offset errors. These messages direct tool usage when full file content is needed.

##### 3.1.2.1 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and directs it to use the Read tool to access additional content if needed.

##### 3.1.2.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 3.1.2.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that the requested read offset exceeds the file length and provides the actual file size.

##### 3.1.2.4 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a previously read file was too large to include in context and directs it to use the Read tool if access is needed.

### 3.2 Git Version Control

Automated git operations, branch management, pull request workflows, and worktree isolation for parallel development sessions.

#### 3.2.1 Git Workflow: Commits, PRs & Version Control

Automates git operations including commits, branch creation, and pull request management with safety checks and repository-aware formatting. Integrates code review workflows and optional notification systems for change tracking.

##### 3.2.1.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits by analyzing staged changes, drafting messages following repository style, and executing commits with safety checks against secrets and empty commits.

##### 3.2.1.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates pull requests by analyzing all changes, creating branches, committing with attribution, pushing, and optionally posting to Slack. Includes safety checks against force pushes and secret commits.

##### 3.2.1.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and code review comments with file context, diff hunks, and threaded replies in readable markdown format.

##### 3.2.1.4 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git branch, main branch, status, and recent commits as a conversation snapshot.

##### 3.2.1.5 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines a five-step workflow for workers to follow after implementing changes: simplify code, run unit tests, execute end-to-end tests, commit and push with PR creation, and report the PR URL.

##### 3.2.1.6 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

#### 3.2.2 Git Worktree & Repository Isolation

Creates isolated git worktrees for focused development sessions, enabling parallel branch work and VCS-agnostic workflows through repository sandboxing.

##### 3.2.2.1 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree for the session when explicitly requested, supporting both git repositories and VCS-agnostic workflows via hooks.

### 3.3 IDE & Code Intelligence

Real-time editor context notifications, LSP integration, notebook cell editing, and symbol navigation for comprehensive in-editor awareness.

#### 3.3.1 IDE Integration & Editor Context

Real-time notifications that keep Claude aware of user actions in the editor: file opens, code selections, external modifications from linters or user edits, and diagnostic issues. Provides contextual awareness without requiring explicit user narration.

##### 3.3.1.1 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notification when user selects code lines in IDE, showing file path and line range with content preview.

##### 3.3.1.2 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 3.3.1.3 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notification template for newly detected diagnostic issues in code or system.

##### 3.3.1.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides a diff to account for the changes without reverting unless requested.

#### 3.3.2 Jupyter Notebook & LSP Code Intelligence

Combines notebook cell editing with Language Server Protocol integration to provide comprehensive code intelligence—from symbol navigation and type information to refactoring support—across interactive and traditional development environments.

##### 3.3.2.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing contents, supporting insert and delete operations with 0-indexed cell numbering.

##### 3.3.2.2 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol integration for code intelligence including symbol navigation, references, hover information, and call hierarchy analysis.

### 3.4 Tool Permissions & Execution Control

User-defined permission boundaries, execution denial handling, pause mechanisms, and user input collection during task execution.

#### 3.4.1 Tool Permission & Execution Control

Mechanisms for managing tool access through user-defined permissions, handling execution denials gracefully, and gathering user input during task execution. Enforces permission boundaries while maintaining transparency about capability limitations.

##### 3.4.1.1 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Instructs Claude to respect user permission modes when executing tools, avoid retrying denied calls, and adjust approach based on user feedback or ask for clarification if needed.

##### 3.4.1.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides Claude to attempt reasonable workarounds when tool execution is denied, but stop and explain if the capability is essential rather than bypassing restrictions maliciously.

##### 3.4.1.3 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user input, clarifying requirements, and offering implementation choices during execution. Specifies that in plan mode, this tool should clarify requirements before finalizing plans, not ask for plan approval.

#### 3.4.2 Execution Control

Mechanisms for pausing execution with configurable duration and user interrupt handling, optimized to minimize process overhead.

##### 3.4.2.1 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with user interrupt capability, preferred over bash sleep for avoiding shell process overhead.

---

## 4. API, SDK & External Integration

Reference documentation, code examples, and integration templates for building with Claude APIs, SDKs, browser automation, and external services.

### 4.1 Claude API & SDK Reference Documentation

Language-specific SDK references and streaming/tool-use guides for building Claude applications across Python, TypeScript, Go, Java, Ruby, PHP, and C#. Covers core API patterns, real-time response handling, agentic tool loops, file management, batch processing, and error handling with model catalogs and live documentation sources.

#### 4.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

#### 4.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Complete TypeScript SDK reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

#### 4.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including client initialization, basic requests, streaming, and beta tool runner with automatic schema generation from struct tags.

#### 4.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, and beta tool use with annotated classes for automatic execution.

#### 4.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

#### 4.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for client initialization, basic requests, streaming, and manual tool use, with support for Bedrock, Vertex AI, and Foundry clients.

#### 4.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering client initialization, basic message requests, streaming, and manual tool use via JSON schema definitions.

#### 4.1.8 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling text/thinking/tool-use content, progress tracking, error handling, and best practices for real-time responses.

#### 4.1.9 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript reference for streaming API responses, including basic streaming, handling thinking and text content, tool use with streaming, and best practices for token usage and DOM updates.

#### 4.1.10 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool definitions and error handling.

#### 4.1.11 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python implementation guide for tool use including tool runner with decorators, manual agentic loops, code execution with file uploads and container reuse, memory tool integration, and structured outputs with Pydantic schemas.

#### 4.1.12 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript implementation guide for tool use featuring tool runner with Zod schemas, manual and streaming loops, code execution with file handling, memory tool with handlers, and structured outputs using Zod validation.

#### 4.1.13 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading, managing, and referencing files in Messages API requests, supporting PDFs, text, and images with 500 MB file size limit.

#### 4.1.14 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading, managing, and using files in messages, supporting documents and images with persistent storage.

#### 4.1.15 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for processing up to 100,000 Messages API requests asynchronously at 50% cost, with polling, result retrieval, and prompt caching support.

#### 4.1.16 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for HTTP error codes returned by Claude API with common causes, handling strategies, and typed exception classes for Python and TypeScript SDKs.

#### 4.1.17 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Authoritative catalog of current, legacy, deprecated, and retired Claude models with exact model IDs, aliases, context windows, and pricing information.

#### 4.1.18 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Curated WebFetch URLs for fetching current Claude API, Agent SDK, and tool documentation from official sources when cached content may be outdated.

#### 4.1.19 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Comprehensive routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking modes, and file-specific reading paths for different use cases.

#### 4.1.20 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific API reference documentation with quick task routing to appropriate sections for streaming, tool use, batches, files, and error handling.

### 4.2 Agent SDK Reference & Patterns

Python and TypeScript Agent SDK documentation with reference guides, working code examples, and implementation patterns for building autonomous agents with built-in tools, MCP integration, permission systems, hooks, and session management.

#### 4.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, built-in tools, primary interfaces (query and ClaudeSDKClient), permission system, MCP support, hooks, and best practices.

#### 4.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, built-in tools, permission modes, MCP support, hooks, subagents, and best practices for agent development.

#### 4.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Demonstrates Python Agent SDK patterns including basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with working code examples.

#### 4.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

Provides TypeScript Agent SDK patterns covering basic agents, hooks, subagents, MCP integration, and session resumption with concise code examples.

### 4.3 GitHub Integration & CI/CD

GitHub Actions workflows and app installation templates enabling Claude Code integration via @claude mentions in issues, pull requests, and comments with configurable automation and security controls.

#### 4.3.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues, PRs, and comments with configurable permissions and custom prompts.

#### 4.3.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, security, and how to trigger Claude via @claude mentions.

### 4.4 Browser Automation & Web Interaction

Enables programmatic web interaction through Chrome automation and content fetching, supporting real-time information retrieval and UI testing. Combines direct browser control with web search and content analysis for comprehensive internet access.

#### 4.4.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Enables mouse and keyboard interaction with a Chrome browser, including screenshot capture and element clicking with precise coordinate placement.

#### 4.4.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines 12 action types for browser automation including clicks, typing, scrolling, keyboard input, and hover interactions with coordinate or element targeting.

#### 4.4.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use to enable browser automation capabilities.

#### 4.4.4 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Best practices for browser automation including GIF recording, console debugging, avoiding dialogs, preventing loops, and managing tab context across sessions.

#### 4.4.5 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with AI, supporting URL redirects and 15-minute caching.

#### 4.4.6 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond knowledge cutoff, requiring mandatory source attribution in responses with markdown hyperlinks.

#### 4.4.7 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and attribution rules for untrusted domains while respecting open-source licenses.

### 4.5 Documentation Generation & Codebase Analysis

Agent prompts for analyzing codebases, generating and maintaining architecture documentation (CLAUDE.md and Magic Docs), and providing guided assistance through Claude tooling and APIs with live documentation fetching.

#### 4.5.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation files by documenting build/test commands, high-level architecture, and development conventions without repeating obvious practices.

#### 4.5.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs an agent to update Magic Doc files with new learnings from conversations, preserving headers and maintaining current state without historical notes. Emphasizes terseness, architecture focus, and avoiding duplication of obvious code details.

#### 4.5.3 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code CLI, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with code examples and documentation references.

---

## 5. Session, Memory & Workflow Management

Mechanisms for preserving context across sessions, compressing conversation history, tracking tasks, managing lifecycle hooks, and monitoring resource consumption.

### 5.1 Session Memory & Context Persistence

Maintains conversation state across sessions through structured memory files that preserve task context, discoveries, and workflow. Enables intelligent retrieval of relevant prior work and cross-machine session continuation with minimal token overhead.

#### 5.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Template for displaying contents of a memory file with its path and type description.

#### 5.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Template for displaying contents of nested memory file structures.

#### 5.1.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notification that session continues from another machine with updated working directory.

#### 5.1.4 [Memory selection (Agent Prompt)](system-prompts/agent-prompt-memory-selection.md)

Selects up to 5 relevant memory files from available options based on user query, filtering out uncertain matches to provide only clearly useful context.

#### 5.1.5 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by preserving structure and headers while adding detailed, info-dense content about tasks, results, and current state within token limits.

#### 5.1.6 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files documenting current state, task specification, files, workflow, errors, codebase, learnings, and worklogs.

#### 5.1.7 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

#### 5.1.8 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user queries by prioritizing user-assigned tags, then matching titles, branches, summaries, and transcripts with inclusive semantic matching.

### 5.2 Conversation Summarization & Context Compaction

Compresses conversation history into dense, actionable summaries that capture technical details, code changes, and pending work. Enables efficient context resumption by distilling multi-turn discussions into structured continuation formats.

#### 5.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing user requests, technical concepts, file modifications, errors, problem-solving, and pending tasks with full code snippets and specific details for development continuity.

#### 5.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context, capturing user requests, technical concepts, file modifications, errors, and pending tasks with code snippets.

#### 5.2.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt template for generating structured continuation summaries covering task overview, current state, discoveries, next steps, and context preservation to enable efficient resumption.

#### 5.2.4 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt template for generating concise 3-5 word present-tense action summaries of agent work to enable efficient context resumption.

#### 5.2.5 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Instructs Claude to generate brief, past-tense summaries of tool execution outcomes focused on user-visible results, keeping descriptions under 8 words without self-referential phrases.

### 5.3 Task & Todo Management

Structured task tracking for coding sessions, enabling breakdown of complex work into discrete steps with progress monitoring and state management. Supports creation, updates, and completion tracking across multi-step implementations.

#### 5.3.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with imperative and present-continuous forms, tracking progress across multi-step implementations.

#### 5.3.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for multi-step coding sessions, tracking progress and organizing complex work with clear subjects and descriptions.

#### 5.3.3 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use TodoWrite tool for task progress tracking when relevant, with cleanup guidance.

#### 5.3.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task tracking tools for progress management when relevant, with instructions to create and update tasks.

#### 5.3.5 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

#### 5.3.6 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite tool to break down work, track progress, and mark tasks complete immediately upon finishing.

### 5.4 Hooks: Lifecycle Events & Notifications

Event-driven automation system that executes commands and agents at conversation milestones like tool execution and session start. Provides structured feedback on hook outcomes and enables conditional workflow control through stop-condition verification.

#### 5.4.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines lifecycle hooks for Claude Code that execute shell commands, prompts, or agents at specific events like PreToolUse, PostToolUse, and SessionStart, with JSON output control for blocking, messaging, and context injection.

#### 5.4.2 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix template for messages indicating a hook has stopped continuation.

#### 5.4.3 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Message template displayed when a hook stops continuation, including hook name and reason.

#### 5.4.4 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Success message template from a completed hook execution.

#### 5.4.5 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook command to Claude.

#### 5.4.6 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command to Claude.

#### 5.4.7 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured output confirming whether an agent completed its assigned plan.

#### 5.4.8 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON with success status or failure reason.

### 5.5 Session Management & Workflow State

Manages session context through output formatting, file isolation, user intent detection, and agent routing, enabling constrained interactions and predictive guidance based on conversation state.

#### 5.5.1 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminder that a specific output style is active and its guidelines should be followed.

#### 5.5.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a session-specific scratchpad directory for all temporary files instead of system temp directories.

#### 5.5.3 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Constrains Claude to answer a one-off side question without tools, using only conversation context, and prohibits offering to take further actions.

#### 5.5.4 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and instructs it to do so with appropriate context.

#### 5.5.5 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next based on conversation context, avoiding evaluative or Claude-voice suggestions and staying silent when next steps are unclear.

#### 5.5.6 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration and explicit pull request creation requests from conversation history, outputting boolean verdicts for frustration and PR submission intent.

### 5.6 Resource & System Monitoring

Real-time tracking of token usage, USD costs, and output limits alongside MCP resource availability notifications and user support channels.

#### 5.6.1 Resource & Budget Monitoring

Real-time tracking of computational and financial resource consumption, displaying token usage, USD costs, and warnings when output approaches token limits. Guides Claude to manage resource constraints through response fragmentation.

##### 5.6.1.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Display of current token usage statistics showing used, total, and remaining tokens.

##### 5.6.1.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget usage and remaining balance.

##### 5.6.1.3 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Warning when response exceeds token limit, instructing Claude to break work into smaller pieces.

#### 5.6.2 MCP Resource Handling

Notification templates for MCP resource states when content is unavailable or cannot be rendered, providing consistent messaging for empty or non-displayable resource conditions.

##### 5.6.2.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Notification template for MCP resources that have no content available.

##### 5.6.2.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Notification template for MCP resources with content that cannot be displayed.

#### 5.6.3 User Communication

Channels and templates for directing users toward help resources and collecting feedback.

##### 5.6.3.1 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Template for informing users about help and feedback channels.

---

## 6. Code Quality, Skills & Engineering Practice

Engineering principles, code review, testing workflows, reusable skills, usage analytics, and communication standards that shape how Claude approaches software work.

### 6.1 Code Engineering Principles & Task Execution Guidelines

Core principles governing how Claude approaches software engineering tasks: prioritize user intent over artificial constraints, keep solutions minimal and focused, avoid premature abstractions and defensive coding, read before modifying, and assess risk before executing destructive operations. Emphasizes pragmatism and user autonomy over over-engineering.

#### 6.1.1 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Guidance to enable users to complete ambitious tasks by deferring to user judgment on scope rather than imposing artificial limitations.

#### 6.1.2 [Doing tasks (avoid over-engineering) [System Prompt]](system-prompts/system-prompt-doing-tasks-avoid-over-engineering.md)

Principle to keep solutions simple and focused by making only directly requested or clearly necessary changes.

#### 6.1.3 [Doing tasks (blocked approach) [System Prompt]](system-prompts/system-prompt-doing-tasks-blocked-approach.md)

Guidance to consider alternative approaches when blocked rather than brute-forcing, using user consultation when needed.

#### 6.1.4 [Doing tasks (minimize file creation) [System Prompt]](system-prompts/system-prompt-doing-tasks-minimize-file-creation.md)

Principle to prefer editing existing files over creating new ones to prevent file bloat and build on existing work.

#### 6.1.5 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Principle to delete unused code completely rather than adding compatibility shims or renamed variables.

#### 6.1.6 [Doing tasks (no premature abstractions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-premature-abstractions.md)

Principle to avoid creating abstractions for one-time operations or hypothetical requirements, keeping complexity minimal.

#### 6.1.7 [Doing tasks (no time estimates) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-time-estimates.md)

Guidance to avoid giving time estimates or predictions, focusing instead on what needs to be done.

#### 6.1.8 [Doing tasks (no unnecessary additions) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-additions.md)

Instructs Claude to implement only what was explicitly requested, avoiding feature creep, refactoring, or cosmetic improvements to unchanged code.

#### 6.1.9 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Directs Claude to skip defensive error handling for impossible scenarios and validate only at system boundaries, trusting internal code and framework guarantees.

#### 6.1.10 [Doing tasks (read before modifying) [System Prompt]](system-prompts/system-prompt-doing-tasks-read-before-modifying.md)

Requires Claude to read and understand existing code before proposing any modifications or changes.

#### 6.1.11 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Frames user requests as software engineering tasks and interprets generic instructions in that context, applying changes directly to code rather than providing abstract answers.

#### 6.1.12 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to assess reversibility and blast radius before executing actions, requiring user confirmation for destructive, hard-to-reverse, or shared-state operations while encouraging investigation over shortcuts.

### 6.2 Code Review & Security Analysis

Automated code analysis that identifies vulnerabilities, style issues, and security risks in pull requests and malware samples. Distinguishes authorized security testing from malicious activities, preventing common attack vectors like injection and XSS while maintaining ethical boundaries.

#### 6.2.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, then analyzing code quality, style, improvements, and risks with focus on correctness, conventions, performance, tests, and security.

#### 6.2.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities in input validation, authentication, cryptography, injection, and data exposure with minimal false positives.

#### 6.2.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware behavior and security implications without improving or augmenting malicious code.

#### 6.2.4 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Security guidelines distinguishing authorized security testing, CTF challenges, and defensive use cases from malicious activities like DoS attacks and supply chain compromise.

#### 6.2.5 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Emphasizes avoiding common security vulnerabilities including injection attacks, XSS, and OWASP top 10 risks, with immediate correction if insecure code is written.

### 6.3 Verification, Testing & Quality Assurance

Verification workflows and code quality skills that automatically test implementations through UI, CLI, and API testing, analyze code changes for defects and inefficiencies, and provide failure analysis with actionable fix recommendations.

#### 6.3.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarially verifies implementation correctness through builds, tests, and runtime checks without modifying files, returning PASS/FAIL/PARTIAL verdicts with evidence-based findings.

#### 6.3.2 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Five-phase verification workflow that discovers verifier skills, analyzes git changes, creates deterministic verification plans, triggers appropriate verifiers, and reports results with failure analysis and fix recommendations.

#### 6.3.3 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically test code changes via Playwright (web UI), Tmux (CLI), or HTTP (API), including auto-detection, tool setup, authentication handling, and skill generation with self-update capability.

#### 6.3.4 [Simplify (Skill)](system-prompts/skill-simplify.md)

Three-phase code review process launching parallel agents to identify code reuse opportunities, quality issues (redundant state, parameter sprawl, leaky abstractions), and efficiency problems (unnecessary work, N+1 patterns, memory leaks).

#### 6.3.5 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by analyzing debug logs, identifying errors and warnings, and suggesting concrete fixes based on log analysis.

### 6.4 Skills: Invocation, Creation & Management

Mechanisms for discovering, invoking, and authoring reusable skills within conversations. Users can trigger specialized capabilities via slash commands, load deferred tools through keyword search, and convert active workflows into persistent SKILL.md artifacts through guided interviews.

#### 6.4.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within conversations, requiring invocation before generating responses when skills match user requests.

#### 6.4.2 [Tool usage (skill invocation) [System Prompt]](system-prompts/system-prompt-tool-usage-skill-invocation.md)

Instructs Claude to use the Skill tool to execute slash commands that invoke user-invocable skills, only for skills listed in the tool's user-invocable section.

#### 6.4.3 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite for loading deferred tools before use, supporting both keyword search and direct selection modes.

#### 6.4.4 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage patterns for discovering and loading deferred tools via keyword search, direct selection, or required keyword filtering with immediate availability.

#### 6.4.5 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-round interview process to convert a session into a reusable skill, analyzing the workflow, confirming details, breaking down steps, and generating a SKILL.md file with frontmatter, inputs, goals, and execution annotations.

#### 6.4.6 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Reminder listing skills invoked during the current session to maintain adherence to their guidelines.

### 6.5 Usage Insights & Analytics

Analysis layer that extracts structured insights from session data to surface what's working, identify friction patterns, and recommend feature adoption. Generates actionable coaching including CLAUDE.md improvements and autonomous development opportunities based on aggregated usage signals.

#### 6.5.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for Claude Code users, using aggregated usage data and session patterns.

#### 6.5.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with specific examples and explanations for improvement.

#### 6.5.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, with copyable prompts for experimentation.

#### 6.5.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from session transcripts including goal categories, user satisfaction signals, and friction types, with strict guidelines for counting only explicit user requests and signals.

#### 6.5.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns based on session analysis.

### 6.6 Output Style, Tone & Communication

Standards for how Claude presents information: concise and polished output without filler, precise code references with file paths and line numbers, direct communication leading with answers, and efficient tool usage through parallel execution of independent operations.

#### 6.6.1 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Requires including file_path:line_number when referencing specific code locations for easy navigation.

#### 6.6.2 [Tone and style (concise output — detailed) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-detailed.md)

Directs Claude to produce polished, concise output without filler, repetition, or inner monologue while preserving important information.

#### 6.6.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Instructs Claude to keep responses short and concise.

#### 6.6.4 [Output efficiency instructions (System Prompt)](system-prompts/system-prompt-output-efficiency-instructions.md)

Directs Claude to be concise and direct, leading with answers, skipping filler, and focusing output on decisions, status updates, and blockers.

#### 6.6.5 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while executing dependent calls sequentially.

### 6.7 Learning & Visual Design Tools

Collaborative learning workflows with TODO tracking and educational insights, plus side-by-side UI option comparisons using ASCII mockups for design decisions.

#### 6.7.1 Learning Mode & Educational Workflows

Facilitates collaborative learning by requesting human input on design decisions, tracking learning progress with TODO markers, and providing contextual educational insights tied to code changes.

##### 6.7.1.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions for design decisions and business logic in 20+ line code pieces, using TodoList tracking and Learn by Doing requests with TODO(human) markers.

##### 6.7.1.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code changes using formatted insight blocks with 2-3 key points specific to the codebase.

#### 6.7.2 UI Preview & Option Comparison

Renders side-by-side visual comparisons of UI options using ASCII mockups, code snippets, and diagrams for informed design decision-making.

##### 6.7.2.1 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for UI options using markdown field, displaying ASCII mockups, code snippets, or diagrams for visual comparison.
