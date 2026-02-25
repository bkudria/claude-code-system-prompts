# Claude Code System Prompts Index

A technical reference for building and operating Claude-powered systems, covering everything from individual API calls to multi-agent pipelines, with guidance on how Claude should behave, what tools it can use, and how to manage the full lifecycle of development work.

## Table of Contents

1. [Workflow, Planning & Version Control](#1-workflow-planning-version-control)
   1. [Planning & Task Management](#11-planning-task-management)
      1. [Plan Mode Workflow](#111-plan-mode-workflow)
         1. [Exited plan mode (System Reminder)](#1111-exited-plan-mode-system-reminder)
         2. [Plan file reference (System Reminder)](#1112-plan-file-reference-system-reminder)
         3. [Plan mode is active (5-phase) [System Reminder]](#1113-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#1114-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#1115-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#1116-plan-mode-re-entry-system-reminder)
         7. [Verify plan reminder (System Reminder)](#1117-verify-plan-reminder-system-reminder)
         8. [EnterPlanMode (Tool Description)](#1118-enterplanmode-tool-description)
         9. [ExitPlanMode (Tool Description)](#1119-exitplanmode-tool-description)
         10. [Plan mode (enhanced) [Agent Prompt]](#11110-plan-mode-enhanced-agent-prompt)
      2. [Task & Todo Tracking](#112-task-todo-tracking)
         1. [Task status (System Reminder)](#1121-task-status-system-reminder)
         2. [Task tools reminder (System Reminder)](#1122-task-tools-reminder-system-reminder)
         3. [Todo list changed (System Reminder)](#1123-todo-list-changed-system-reminder)
         4. [Todo list empty (System Reminder)](#1124-todo-list-empty-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#1125-todowrite-reminder-system-reminder)
         6. [TaskCreate (Tool Description)](#1126-taskcreate-tool-description)
         7. [TodoWrite (Tool Description)](#1127-todowrite-tool-description)
         8. [Task management (System Prompt)](#1128-task-management-system-prompt)
   2. [Git, GitHub & Code Review](#12-git-github-code-review)
      1. [Git Operations & Version Control](#121-git-operations-version-control)
         1. [Bash (Git commit and PR creation instructions) [Tool Description]](#1211-bash-git-commit-and-pr-creation-instructions-tool-description)
         2. [EnterWorktree (Tool Description)](#1212-enterworktree-tool-description)
         3. [Quick git commit (Agent Prompt)](#1213-quick-git-commit-agent-prompt)
         4. [Quick PR creation (Agent Prompt)](#1214-quick-pr-creation-agent-prompt)
         5. [Git status (System Prompt)](#1215-git-status-system-prompt)
      2. [GitHub Integration & Code Review](#122-github-integration-code-review)
         1. [/pr-comments slash command (Agent Prompt)](#1221-pr-comments-slash-command-agent-prompt)
         2. [/review-pr slash command (Agent Prompt)](#1222-review-pr-slash-command-agent-prompt)
         3. [/security-review slash command (Agent Prompt)](#1223-security-review-slash-command-agent-prompt)
         4. [GitHub Actions workflow for @claude mentions (Data)](#1224-github-actions-workflow-for-claude-mentions-data)
         5. [GitHub App installation PR description (Data)](#1225-github-app-installation-pr-description-data)
   3. [Skills & Slash Commands](#13-skills-slash-commands)
      1. [Skill (Tool Description)](#131-skill-tool-description)
      2. [Invoked skills (System Reminder)](#132-invoked-skills-system-reminder)
      3. [Skillify Current Session (System Prompt)](#133-skillify-current-session-system-prompt)
      4. [Update Claude Code Config (Skill)](#134-update-claude-code-config-skill)
      5. [Debugging (Skill)](#135-debugging-skill)
      6. [Create verifier skills (Skill)](#136-create-verifier-skills-skill)
      7. [Verification specialist (Skill)](#137-verification-specialist-skill)
2. [Tools, Search & External Access](#2-tools-search-external-access)
   1. [File and Codebase Navigation](#21-file-and-codebase-navigation)
      1. [File Search & Codebase Exploration](#211-file-search-codebase-exploration)
         1. [Glob (Tool Description)](#2111-glob-tool-description)
         2. [Grep (Tool Description)](#2112-grep-tool-description)
         3. [LSP (Tool Description)](#2113-lsp-tool-description)
         4. [Explore (Agent Prompt)](#2114-explore-agent-prompt)
         5. [Conditional delegate codebase exploration (System Prompt)](#2115-conditional-delegate-codebase-exploration-system-prompt)
      2. [File Read & Write Operations](#212-file-read-write-operations)
         1. [ReadFile (Tool Description)](#2121-readfile-tool-description)
         2. [Write (Tool Description)](#2122-write-tool-description)
         3. [Edit (Tool Description)](#2123-edit-tool-description)
         4. [NotebookEdit (Tool Description)](#2124-notebookedit-tool-description)
   2. [Shell, Browser & Web](#22-shell-browser-web)
      1. [Bash & Shell Command Execution](#221-bash-shell-command-execution)
         1. [Bash (Tool Description)](#2211-bash-tool-description)
         2. [Bash (sandbox note) [Tool Description]](#2212-bash-sandbox-note-tool-description)
         3. [Bash command description writer (Agent Prompt)](#2213-bash-command-description-writer-agent-prompt)
         4. [Bash command file path extraction (Agent Prompt)](#2214-bash-command-file-path-extraction-agent-prompt)
         5. [Bash command prefix detection (Agent Prompt)](#2215-bash-command-prefix-detection-agent-prompt)
         6. [Command execution specialist (Agent Prompt)](#2216-command-execution-specialist-agent-prompt)
      2. [Browser Automation & Computer Control](#222-browser-automation-computer-control)
         1. [Computer (Tool Description)](#2221-computer-tool-description)
         2. [Computer action (Tool Parameter)](#2222-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#2223-claude-in-chrome-browser-automation-system-prompt)
         4. [Chrome browser MCP tools (System Prompt)](#2224-chrome-browser-mcp-tools-system-prompt)
      3. [Web Search & Content Fetching](#223-web-search-content-fetching)
         1. [WebFetch (Tool Description)](#2231-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#2232-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#2233-webfetch-summarizer-agent-prompt)
   3. [Tool Governance & Utilities](#23-tool-governance-utilities)
      1. [Tool Discovery & Loading](#231-tool-discovery-loading)
         1. [ToolSearch (Tool Description)](#2311-toolsearch-tool-description)
         2. [ToolSearch extended (Tool Description)](#2312-toolsearch-extended-tool-description)
      2. [Tool Permission & Access Control](#232-tool-permission-access-control)
         1. [Tool execution denied (System Prompt)](#2321-tool-execution-denied-system-prompt)
         2. [Tool permission mode (System Prompt)](#2322-tool-permission-mode-system-prompt)
         3. [Tool usage policy (System Prompt)](#2323-tool-usage-policy-system-prompt)
         4. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#2324-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      3. [Utility & Miscellaneous Tools](#233-utility-miscellaneous-tools)
         1. [Sleep (Tool Description)](#2331-sleep-tool-description)
         2. [AskUserQuestion (Tool Description)](#2332-askuserquestion-tool-description)
3. [Session, Context & Runtime Notifications](#3-session-context-runtime-notifications)
   1. [Session Persistence & Summarization](#31-session-persistence-summarization)
      1. [Session State & Continuity](#311-session-state-continuity)
         1. [Session continuation (System Reminder)](#3111-session-continuation-system-reminder)
         2. [Memory file contents (System Reminder)](#3112-memory-file-contents-system-reminder)
         3. [Nested memory contents (System Reminder)](#3113-nested-memory-contents-system-reminder)
         4. [Context compaction summary (System Prompt)](#3114-context-compaction-summary-system-prompt)
         5. [Scratchpad directory (System Prompt)](#3115-scratchpad-directory-system-prompt)
         6. [Session memory template (Data)](#3116-session-memory-template-data)
         7. [Session memory update instructions (Agent Prompt)](#3117-session-memory-update-instructions-agent-prompt)
      2. [Conversation & Context Summarization](#312-conversation-context-summarization)
         1. [Conversation summarization (Agent Prompt)](#3121-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#3122-recent-message-summarization-agent-prompt)
         3. [Agent Summary Generation (System Prompt)](#3123-agent-summary-generation-system-prompt)
         4. [Tool Use Summary Generation (System Prompt)](#3124-tool-use-summary-generation-system-prompt)
      3. [Session Metadata & Discovery](#313-session-metadata-discovery)
         1. [Session title and branch generation (Agent Prompt)](#3131-session-title-and-branch-generation-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#3132-session-search-assistant-agent-prompt)
         3. [Status line setup (Agent Prompt)](#3133-status-line-setup-agent-prompt)
   2. [Runtime Alerts & Notifications](#32-runtime-alerts-notifications)
      1. [File State & Content Notifications](#321-file-state-content-notifications)
         1. [File exists but empty (System Reminder)](#3211-file-exists-but-empty-system-reminder)
         2. [File modified by user or linter (System Reminder)](#3212-file-modified-by-user-or-linter-system-reminder)
         3. [File opened in IDE (System Reminder)](#3213-file-opened-in-ide-system-reminder)
         4. [File shorter than offset (System Reminder)](#3214-file-shorter-than-offset-system-reminder)
         5. [File truncated (System Reminder)](#3215-file-truncated-system-reminder)
         6. [Compact file reference (System Reminder)](#3216-compact-file-reference-system-reminder)
         7. [Lines selected in IDE (System Reminder)](#3217-lines-selected-in-ide-system-reminder)
         8. [MCP resource no content (System Reminder)](#3218-mcp-resource-no-content-system-reminder)
         9. [MCP resource no displayable content (System Reminder)](#3219-mcp-resource-no-displayable-content-system-reminder)
      2. [Resource & Budget Monitoring](#322-resource-budget-monitoring)
         1. [Token usage (System Reminder)](#3221-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#3222-usd-budget-system-reminder)
         3. [Output token limit exceeded (System Reminder)](#3223-output-token-limit-exceeded-system-reminder)
      3. [Session State Notifications](#323-session-state-notifications)
         1. [/btw side question (System Reminder)](#3231-btw-side-question-system-reminder)
         2. [Output style active (System Reminder)](#3232-output-style-active-system-reminder)
         3. [New diagnostics detected (System Reminder)](#3233-new-diagnostics-detected-system-reminder)
   3. [Hook System & Lifecycle Events](#33-hook-system-lifecycle-events)
      1. [Hook System Notifications](#331-hook-system-notifications)
         1. [Hook additional context (System Reminder)](#3311-hook-additional-context-system-reminder)
         2. [Hook blocking error (System Reminder)](#3312-hook-blocking-error-system-reminder)
         3. [Hook JSON validation failed (System Reminder)](#3313-hook-json-validation-failed-system-reminder)
         4. [Hook stopped continuation prefix (System Reminder)](#3314-hook-stopped-continuation-prefix-system-reminder)
         5. [Hook stopped continuation (System Reminder)](#3315-hook-stopped-continuation-system-reminder)
         6. [Hook success (System Reminder)](#3316-hook-success-system-reminder)
      2. [Hook Condition Evaluation & Agent Hooks](#332-hook-condition-evaluation-agent-hooks)
         1. [Agent Hook (Agent Prompt)](#3321-agent-hook-agent-prompt)
         2. [Hook condition evaluator (Agent Prompt)](#3322-hook-condition-evaluator-agent-prompt)
         3. [Hooks Configuration (System Prompt)](#3323-hooks-configuration-system-prompt)
4. [Agent Coordination, Identity & Analytics](#4-agent-coordination-identity-analytics)
   1. [Multi-Agent Orchestration](#41-multi-agent-orchestration)
      1. [Multi-Agent Team & Swarm Coordination](#411-multi-agent-team-swarm-coordination)
         1. [Team Coordination (System Reminder)](#4111-team-coordination-system-reminder)
         2. [Team Shutdown (System Reminder)](#4112-team-shutdown-system-reminder)
         3. [SendMessageTool (Tool Description)](#4113-sendmessagetool-tool-description)
         4. [TeammateTool (Tool Description)](#4114-teammatetool-tool-description)
         5. [TeamDelete (Tool Description)](#4115-teamdelete-tool-description)
         6. [TaskList (teammate workflow) [Tool Description]](#4116-tasklist-teammate-workflow-tool-description)
         7. [Teammate Communication (System Prompt)](#4117-teammate-communication-system-prompt)
         8. [Task (Tool Description)](#4118-task-tool-description)
      2. [Subagent Task Delegation](#412-subagent-task-delegation)
         1. [Task tool (Agent Prompt)](#4121-task-tool-agent-prompt)
         2. [Task tool (extra notes) [Agent Prompt]](#4122-task-tool-extra-notes-agent-prompt)
         3. [Agent mention (System Reminder)](#4123-agent-mention-system-reminder)
   2. [Agent Design & Behavioral Identity](#42-agent-design-behavioral-identity)
      1. [Agent Design & Creation](#421-agent-design-creation)
         1. [Agent creation architect (Agent Prompt)](#4211-agent-creation-architect-agent-prompt)
         2. [CLAUDE.md creation (Agent Prompt)](#4212-claudemd-creation-agent-prompt)
         3. [Agent memory instructions (System Prompt)](#4213-agent-memory-instructions-system-prompt)
      2. [Core Claude Code Identity & Behavior](#422-core-claude-code-identity-behavior)
         1. [Main system prompt (System Prompt)](#4221-main-system-prompt-system-prompt)
         2. [Tone and style (System Prompt)](#4222-tone-and-style-system-prompt)
         3. [Doing tasks (System Prompt)](#4223-doing-tasks-system-prompt)
         4. [Executing actions with care (System Prompt)](#4224-executing-actions-with-care-system-prompt)
         5. [Censoring assistance with malicious activities (System Prompt)](#4225-censoring-assistance-with-malicious-activities-system-prompt)
         6. [Malware analysis after Read tool call (System Reminder)](#4226-malware-analysis-after-read-tool-call-system-reminder)
   3. [Learning, UX & Analytics](#43-learning-ux-analytics)
      1. [Usage Insights & Analytics](#431-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#4311-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#4312-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#4313-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#4314-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#4315-insights-suggestions-system-prompt)
      2. [Learning & Interactive Education Mode](#432-learning-interactive-education-mode)
         1. [Learning mode (System Prompt)](#4321-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#4322-learning-mode-insights-system-prompt)
         3. [Option previewer (System Prompt)](#4323-option-previewer-system-prompt)
      3. [Documentation Management](#433-documentation-management)
         1. [Update Magic Docs (Agent Prompt)](#4331-update-magic-docs-agent-prompt)
      4. [UX & Conversation Flow](#434-ux-conversation-flow)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#4341-prompt-suggestion-generator-v2-agent-prompt)
         2. [User sentiment analysis (Agent Prompt)](#4342-user-sentiment-analysis-agent-prompt)
5. [Claude API & SDK Documentation](#5-claude-api-sdk-documentation)
   1. [Language SDK References](#51-language-sdk-references)
      1. [Claude API SDK References — Python & TypeScript](#511-claude-api-sdk-references-—-python-typescript)
         1. [Claude API reference — Python (Data)](#5111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#5112-claude-api-reference-—-typescript-data)
         3. [Streaming reference — Python (Data)](#5113-streaming-reference-—-python-data)
         4. [Streaming reference — TypeScript (Data)](#5114-streaming-reference-—-typescript-data)
      2. [Claude API SDK References — Other Languages](#512-claude-api-sdk-references-—-other-languages)
         1. [Claude API reference — C# (Data)](#5121-claude-api-reference-—-c-data)
         2. [Claude API reference — Go (Data)](#5122-claude-api-reference-—-go-data)
         3. [Claude API reference — Java (Data)](#5123-claude-api-reference-—-java-data)
         4. [Claude API reference — PHP (Data)](#5124-claude-api-reference-—-php-data)
         5. [Claude API reference — Ruby (Data)](#5125-claude-api-reference-—-ruby-data)
   2. [Agent SDK & Tool Use](#52-agent-sdk-tool-use)
      1. [Agent SDK Documentation](#521-agent-sdk-documentation)
         1. [Agent SDK patterns — Python (Data)](#5211-agent-sdk-patterns-—-python-data)
         2. [Agent SDK patterns — TypeScript (Data)](#5212-agent-sdk-patterns-—-typescript-data)
         3. [Agent SDK reference — Python (Data)](#5213-agent-sdk-reference-—-python-data)
         4. [Agent SDK reference — TypeScript (Data)](#5214-agent-sdk-reference-—-typescript-data)
      2. [Tool Use & Files API Documentation](#522-tool-use-files-api-documentation)
         1. [Tool use concepts (Data)](#5221-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#5222-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#5223-tool-use-reference-—-typescript-data)
         4. [Files API reference — Python (Data)](#5224-files-api-reference-—-python-data)
         5. [Files API reference — TypeScript (Data)](#5225-files-api-reference-—-typescript-data)
         6. [Message Batches API reference — Python (Data)](#5226-message-batches-api-reference-—-python-data)
   3. [API Reference & Developer Guidance](#53-api-reference-developer-guidance)
      1. [Build with Claude API Skill](#531-build-with-claude-api-skill)
         1. [Build with Claude API (Skill)](#5311-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#5312-build-with-claude-api-reference-guide-skill)
         3. [Build with Claude API (trigger) [Skill]](#5313-build-with-claude-api-trigger-skill)
         4. [Live documentation sources (Data)](#5314-live-documentation-sources-data)
         5. [Claude guide agent (Agent Prompt)](#5315-claude-guide-agent-agent-prompt)
      2. [Claude Model & API Metadata](#532-claude-model-api-metadata)
         1. [Claude model catalog (Data)](#5321-claude-model-catalog-data)
         2. [HTTP error codes reference (Data)](#5322-http-error-codes-reference-data)
         3. [Claude Code version mismatch warning (Data)](#5323-claude-code-version-mismatch-warning-data)

---

## 1. Workflow, Planning & Version Control

Structured approaches to software development work: plan-before-implement workflows, task tracking, git operations, code review automation, and reusable slash command skills.

### 1.1 Planning & Task Management

Frameworks for breaking down complex work into structured plans and trackable steps, with user approval gates before implementation begins.

#### 1.1.1 Plan Mode Workflow

A structured planning framework that separates design from implementation. Claude explores codebases, designs approaches with architectural trade-offs, documents plans for user approval, and executes only after explicit authorization, preventing wasted effort on misaligned implementations.

##### 1.1.1.1 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and actions, edits, and tools are now available, with optional reference to plan file location.

##### 1.1.1.2 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

##### 1.1.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode constraints and guides Claude through a five-phase workflow: initial understanding with parallel exploration agents, design with planning agents, review against user intent, final plan documentation, and plan approval. Claude must not execute changes except to the plan file itself.

##### 1.1.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning where Claude explores code, updates the plan file incrementally, and asks the user clarifying questions in a loop until the plan is complete and ready for approval.

##### 1.1.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagents in plan mode to readonly operations and plan file editing only, preventing any system modifications while allowing comprehensive query responses and user clarification.

##### 1.1.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude when re-entering plan mode to read the existing plan file, evaluate whether the new request is a continuation or different task, and update the plan accordingly before proceeding.

##### 1.1.1.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly after implementation.

##### 1.1.1.8 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Instructs Claude to proactively use EnterPlanMode for non-trivial implementation tasks to explore the codebase and design approaches for user approval before writing code, preventing wasted effort and ensuring alignment on multi-file changes, architectural decisions, or tasks with multiple valid approaches.

##### 1.1.1.9 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Explains how to use ExitPlanMode to signal completion of implementation planning and request user approval, reading the plan from a file and presenting it for review without using AskUserQuestion for approval.

##### 1.1.1.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent that designs implementation plans by exploring codebases, understanding requirements, identifying patterns, and detailing step-by-step strategies with architectural trade-offs. Read-only mode prevents file modifications while enabling comprehensive codebase analysis and critical file identification.

#### 1.1.2 Task & Todo Tracking

Tools and reminders for managing progress on complex multi-step work through structured task lists. Claude uses these to break down work into actionable steps, track completion states, and maintain visibility without exposing tracking details to users.

##### 1.1.2.1 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

##### 1.1.2.2 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task tracking tools for progress management when relevant, without mentioning it to the user.

##### 1.1.2.3 [Todo list changed (System Reminder)](system-prompts/system-reminder-todo-list-changed.md)

Notifies Claude of todo list changes without mentioning them to the user and instructs it to continue with applicable tasks.

##### 1.1.2.4 [Todo list empty (System Reminder)](system-prompts/system-reminder-todo-list-empty.md)

Reminds Claude that the todo list is empty without mentioning it to the user, and suggests using TodoWrite tool if task tracking would be beneficial.

##### 1.1.2.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use TodoWrite tool for progress tracking when relevant, without mentioning it to the user.

##### 1.1.2.6 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for tracking progress on complex multi-step coding sessions, with imperative subjects and present-continuous activeForm descriptions for UI display.

##### 1.1.2.7 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with imperative content and present-continuous activeForm fields, tracking progress through pending, in_progress, and completed states.

##### 1.1.2.8 [Task management (System Prompt)](system-prompts/system-prompt-task-management.md)

Instructs Claude to use task management tools frequently for planning, tracking progress, and breaking down complex work into actionable steps. Emphasizes marking todos as completed immediately upon task finish.

### 1.2 Git, GitHub & Code Review

Safe git workflows for commits, branch isolation, and pull request creation, plus automated GitHub code review and security vulnerability analysis.

#### 1.2.1 Git Operations & Version Control

Safe, user-controlled git workflows for commits, branch isolation via worktrees, and pull request creation with enforced safety protocols and repository-aware commit messaging.

##### 1.2.1.1 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests via bash, including safety protocols, commit message drafting, hook handling, and PR creation with gh command. Emphasizes never committing without explicit user request and avoiding destructive git operations.

##### 1.2.1.2 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Describes when and how to use EnterWorktree to create isolated git worktrees only when users explicitly request it, creating a new branch in `.claude/worktrees/` and switching the session into it.

##### 1.2.1.3 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit by analyzing staged changes, drafting messages aligned with repository style, and executing commits via heredoc syntax. Enforces git safety protocols including hook preservation, secret file warnings, and prohibition on amending unless explicitly requested.

##### 1.2.1.4 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates pull requests by analyzing all changes across commits, creating feature branches, staging commits with attribution, pushing to origin, and creating or updating PRs with title, body, and reviewer assignment. Optionally posts PR URLs to Slack if configured in CLAUDE.md.

##### 1.2.1.5 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays current git repository state including branch, main branch reference, status, and recent commits at conversation start as a static snapshot.

#### 1.2.2 GitHub Integration & Code Review

Automated code review capabilities spanning pull request analysis, security vulnerability assessment, and comment retrieval, with GitHub Actions integration for Claude mentions in issues and PRs.

##### 1.2.2.1 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub pull request comments including PR-level and code review comments with file context, line numbers, and diff hunks. Formats output as readable markdown with threading and quoted comment text.

##### 1.2.2.2 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, then analyzing code quality, style, improvements, and risks. Focuses on correctness, project conventions, performance, test coverage, and security with concise, bulleted output.

##### 1.2.2.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities across input validation, authentication, cryptography, injection, and data exposure. Uses multi-phase analysis with false-positive filtering and confidence scoring, reporting only concrete issues with exploit scenarios and fixes.

##### 1.2.2.4 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues and pull requests with configurable permissions and optional custom prompts.

##### 1.2.2.5 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining functionality, security, and how to trigger Claude via mentions.

### 1.3 Skills & Slash Commands

Reusable specialized capabilities invoked as slash commands within conversations, with support for session tracking, workflow automation, and structured skill creation for debugging, configuration, and verification tasks.

#### 1.3.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation, requiring invocation before generating other responses when a skill matches the user's request.

#### 1.3.2 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked in the current session and instructs Claude to continue following their guidelines.

#### 1.3.3 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable session processes into reusable skills through structured analysis and multi-round user interviews. Generates SKILL.md files with clear inputs, steps, success criteria, and execution modes (inline/fork) for automation and sharing.

#### 1.3.4 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration files (settings.json), including hooks, permissions, environment variables, and MCP servers with careful merging of existing settings.

#### 1.3.5 [Debugging (Skill)](system-prompts/skill-debugging.md)

Skill for debugging issues in Claude Code sessions by analyzing debug logs, identifying errors and warnings, and suggesting concrete fixes.

#### 1.3.6 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase skill for creating verifier skills for the Verify agent, including auto-detection of project types, setup of browser/CLI/API verification tools, interactive Q&A, and skill generation in .claude/skills/.

#### 1.3.7 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes by discovering verifier skills, analyzing git changes, creating structured verification plans, and triggering appropriate verifiers with detailed failure reporting.

---

## 2. Tools, Search & External Access

The full toolkit for interacting with filesystems, shells, browsers, and the web — including discovery, permission control, and lightweight execution utilities.

### 2.1 File and Codebase Navigation

Read-only codebase exploration via pattern matching, regex search, and LSP-powered symbol navigation, plus file reading and writing across diverse formats.

#### 2.1.1 File Search & Codebase Exploration

Fast, read-only codebase navigation combining pattern-based file discovery, regex content search, and language-aware symbol navigation. Supports glob patterns, ripgrep syntax, and LSP-powered code intelligence for answering questions about codebases without modification.

##### 2.1.1.1 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like `**/*.js` to find files by name, returning results sorted by modification time.

##### 2.1.1.2 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool supporting full regex syntax, file filtering by glob or type, and multiple output modes for content search across codebases.

##### 2.1.1.3 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides Language Server Protocol operations including goToDefinition, findReferences, hover, documentSymbol, workspaceSymbol, goToImplementation, and call hierarchy analysis for code intelligence.

##### 2.1.1.4 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file pattern matching, code searching, and answering questions about codebases. Uses glob patterns, regex grep, and file reading with configurable thoroughness levels while strictly prohibiting file modifications or state changes.

##### 2.1.1.5 [Conditional delegate codebase exploration (System Prompt)](system-prompts/system-prompt-conditional-delegate-codebase-exploration.md)

Instructions for when to use the Explore subagent versus calling tools directly for codebase exploration, reserving subagent use for broader research or when simple searches prove insufficient.

#### 2.1.2 File Read & Write Operations

Filesystem operations for reading and modifying files, with specialized support for diverse formats including PDFs, images, and Jupyter notebooks. Emphasizes editing existing files over creation and preserves formatting during modifications.

##### 2.1.2.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for line offsets, truncation of long lines, images, PDFs (with page ranges), and Jupyter notebooks, using absolute paths.

##### 2.1.2.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem using absolute paths, preferring file edits over new file creation and avoiding proactive documentation unless explicitly requested.

##### 2.1.2.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Describes the Edit tool for exact string replacements in files, emphasizing preserving indentation, preferring existing file edits, and using replace_all for renaming across files.

##### 2.1.2.4 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing contents, inserting new cells, or deleting cells using 0-indexed cell numbers and absolute file paths.

### 2.2 Shell, Browser & Web

Sandboxed shell command execution, Chrome-based UI automation, and real-time web search with content fetching and source attribution.

#### 2.2.1 Bash & Shell Command Execution

Sandboxed shell command execution with safety mechanisms for injection detection and path extraction. Supports command documentation, output analysis, and git operations while preferring specialized tools for file handling.

##### 2.2.1.1 [Bash (Tool Description)](system-prompts/tool-description-bash.md)

Describes the bash tool for executing shell commands with timeout and output limits. Emphasizes using specialized tools for file operations instead of bash, proper path quoting, directory verification, and preferring parallel independent commands over sequential chaining.

##### 2.2.1.2 [Bash (sandbox note) [Tool Description]](system-prompts/tool-description-bash-sandbox-note.md)

Specifies that bash commands run sandboxed by default and outlines when to disable sandbox only if explicitly requested or when clear sandbox-caused failures occur.

##### 2.2.1.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions for bash commands, keeping simple commands brief (5-10 words) and providing additional context for complex piped or flag-heavy commands to clarify functionality.

##### 2.2.1.4 [Bash command file path extraction (Agent Prompt)](system-prompts/agent-prompt-bash-command-file-path-extraction.md)

Extracts file paths from bash command output by determining whether the command displays file contents, then returning verbatim paths only for commands that show file data (e.g., git diff, cat) while excluding metadata-only commands (e.g., ls, find).

##### 2.2.1.5 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands to support safety allowlisting. Returns the command prefix as a string prefix of the full command, or 'command_injection_detected' if malicious chaining is found, or 'none' if no prefix exists.

##### 2.2.1.6 [Command execution specialist (Agent Prompt)](system-prompts/agent-prompt-command-execution-specialist.md)

Executes bash commands efficiently and safely, following git safety protocols, reporting output clearly, and suggesting solutions for failures. Uses command chaining and proper path quoting for reliable terminal operations.

#### 2.2.2 Browser Automation & Computer Control

Chrome-based UI automation enabling mouse, keyboard, and visual interactions with web applications. Includes screenshot analysis, GIF recording, and console debugging for reliable browser-based task execution.

##### 2.2.2.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Chrome browser automation tool for mouse, keyboard, and screenshot interactions, emphasizing precise cursor positioning and consulting screenshots before clicking.

##### 2.2.2.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameters for Chrome browser control including click variants, typing, scrolling, keyboard input, dragging, zooming, and hover operations.

##### 2.2.2.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for using Claude in Chrome browser automation tools effectively, covering GIF recording, console debugging, alert handling, tab context, and avoiding loops or failures.

##### 2.2.2.4 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use, requiring explicit tool selection before calling mcp__claude-in-chrome__* functions.

#### 2.2.3 Web Search & Content Fetching

Real-time web information retrieval with HTML-to-markdown conversion and content summarization. Requires source attribution and respects content licensing while providing current data beyond training knowledge.

##### 2.2.3.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content from URLs by converting HTML to markdown and processing with a small model, supporting HTTPS upgrade and 15-minute caching.

##### 2.2.3.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond Claude's knowledge cutoff, requiring mandatory source attribution in responses with markdown hyperlinks.

##### 2.2.3.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and paraphrasing for untrusted domains while respecting licensing.

### 2.3 Tool Governance & Utilities

Tool discovery and deferred loading, permission enforcement and access control policies, and lightweight utilities for process pausing and user input.

#### 2.3.1 Tool Discovery & Loading

Mechanisms for making deferred tools available before execution through keyword search and direct selection, with support for filtering and usage patterns.

##### 2.3.1.1 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite for loading deferred tools before calling them, supporting keyword search and direct selection modes to make tools available for use.

##### 2.3.1.2 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Provides extended usage patterns for ToolSearch including keyword search, direct selection with `select:`, and required keyword filtering with `+` prefix, with examples of correct and incorrect usage.

#### 2.3.2 Tool Permission & Access Control

Permission enforcement and access control for tool execution, including denial handling with user prompts, workaround strategies, and policies governing parallel execution, tool selection, and file operations.

##### 2.3.2.1 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable workarounds when tool execution is denied but avoid malicious bypasses. Requires stopping and explaining to user if capability is essential.

##### 2.3.2.2 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains tool permission modes where denied tool calls trigger user prompts. Instructs Claude to adjust approach rather than retry denied calls and optionally ask for clarification.

##### 2.3.2.3 [Tool usage policy (System Prompt)](system-prompts/system-prompt-tool-usage-policy.md)

Defines tool usage policies including parallel execution for independent operations, preference for specialized tools over bash commands, and guidelines for file operations. Prohibits using tools for user communication.

##### 2.3.2.4 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while maintaining sequential execution for dependent operations to increase efficiency.

#### 2.3.3 Utility & Miscellaneous Tools

Lightweight execution and interaction utilities including process pausing and user input gathering for clarification and decision-making during task execution.

##### 2.3.3.1 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input, preferred over bash sleep commands as it avoids holding shell processes.

##### 2.3.3.2 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying ambiguous instructions, and getting decisions on implementation choices. In plan mode, use it only for requirements clarification, not for plan approval.

---

## 3. Session, Context & Runtime Notifications

Everything that preserves state across sessions, summarizes context, and delivers runtime alerts — from file-change notifications and hook feedback to budget warnings and session metadata.

### 3.1 Session Persistence & Summarization

Memory files, scratchpad isolation, and structured templates for cross-machine continuity, plus dense conversation summarization for efficient context reuse.

#### 3.1.1 Session State & Continuity

Mechanisms for preserving and restoring session context across machine boundaries, including memory files, scratchpad isolation, and structured templates that enable seamless task resumption without context loss.

##### 3.1.1.1 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and provides the updated working directory.

##### 3.1.1.2 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Provides the contents of a memory file by path with type description.

##### 3.1.1.3 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Provides the contents of a nested memory file.

##### 3.1.1.4 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for generating context compaction summaries that enable efficient resumption of work, covering task overview, current state, discoveries, next steps, and context preservation.

##### 3.1.1.5 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Designates a session-specific scratchpad directory for all temporary files instead of /tmp, providing isolated workspace for intermediate results and working files without permission prompts.

##### 3.1.1.6 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing session state, task specifications, files, workflows, errors, and learnings for continuity across conversations.

##### 3.1.1.7 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by editing existing sections with conversation insights while preserving structure, headers, and italic template descriptions. Maintains detailed, info-dense content with specific file paths and technical details within token limits.

#### 3.1.2 Conversation & Context Summarization

Structured summarization of conversations and agent actions that distills technical decisions, code changes, and pending work into dense, scannable formats for efficient context reuse and task tracking.

##### 3.1.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries capturing user requests, technical decisions, code changes, errors, and pending tasks. Structures output with primary intent, key concepts, files examined, error fixes, problem-solving efforts, all user messages, and next steps with direct quotes from recent work.

##### 3.1.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following earlier retained context by capturing user requests, technical concepts, file changes, errors, problem-solving, and next steps. Structures output identically to full conversation summaries but focuses only on new messages.

##### 3.1.2.3 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise agent action summaries in present tense, naming specific files or functions rather than branches or vague descriptions.

##### 3.1.2.4 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Generates concise past-tense summaries of tool usage outcomes under 8 words, focusing on user-visible results without implementation details or self-reference.

#### 3.1.3 Session Metadata & Discovery

Manages session identification and retrieval through automated naming conventions, semantic search across session artifacts, and dynamic terminal status display. Enables users to organize, find, and contextualize their work sessions with minimal manual effort.

##### 3.1.3.1 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (max 6 words, sentence case) and git branch names (max 4 words, claude/ prefix, lowercase with dashes) from session descriptions, returning JSON with both fields.

##### 3.1.3.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions by matching user queries against session metadata including tags, titles, branches, summaries, and transcripts. Prioritizes exact tag matches, then partial matches, titles, branches, and semantic similarity while being inclusive to avoid missing relevant sessions.

##### 3.1.3.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting shell PS1 configurations, converting escape sequences to shell commands, and updating settings.json. Accepts JSON input with session, workspace, model, context window, and optional vim/agent data for dynamic status line generation.

### 3.2 Runtime Alerts & Notifications

System notifications covering file state changes, active session constraints, and resource budget limits that keep Claude informed of current operating conditions.

#### 3.2.1 File State & Content Notifications

System notifications that track file state changes, content availability, and size constraints. These alerts inform Claude about external modifications, truncation, empty content, and IDE interactions to ensure accurate context during work.

##### 3.2.1.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns that a file exists but contains no content.

##### 3.2.1.2 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Alerts Claude that a file was modified externally by user or linter and should be considered in subsequent work, with relevant changes shown by line number.

##### 3.2.1.3 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 3.2.1.4 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns that a file read offset exceeds the file's actual length, providing total line count.

##### 3.2.1.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a file was truncated to a maximum line count due to size, with instruction to use the Read tool for additional content without mentioning truncation to the user.

##### 3.2.1.6 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before summarization but is too large to include, directing use of the Read tool for access.

##### 3.2.1.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of line selection in the IDE with the selected content displayed, noting it may or may not relate to the current task.

##### 3.2.1.8 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates an MCP resource has no content.

##### 3.2.1.9 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates an MCP resource has no displayable content.

#### 3.2.2 Resource & Budget Monitoring

Real-time tracking of token consumption and USD budget allocation, with alerts when output limits are exceeded to enable work continuation within constraints.

##### 3.2.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 3.2.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing used, total, and remaining budget.

##### 3.2.2.3 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Notifies Claude that its response was truncated due to exceeding the output token limit and instructs it to break work into smaller pieces.

#### 3.2.3 Session State Notifications

Runtime alerts that inform Claude of active constraints, style configurations, and detected issues, ensuring consistent behavior within the current session context.

##### 3.2.3.1 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude to answer side questions directly without tools, based only on conversation context, and to avoid promising any actions or follow-up investigations.

##### 3.2.3.2 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that an output style is active and instructs it to follow the style's specific guidelines.

##### 3.2.3.3 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues with a summary of problems.

### 3.3 Hook System & Lifecycle Events

Event-driven automation at Claude Code execution points, including hook condition evaluation, agent hooks, and feedback mechanisms for hook outcomes and schema validation.

#### 3.3.1 Hook System Notifications

Feedback mechanisms for hook execution outcomes, including success reports, error handling, JSON schema validation, and continuation control. These notifications enable Claude to respond appropriately to hook-driven workflows and debug validation failures.

##### 3.3.1.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution.

##### 3.3.1.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 3.3.1.3 [Hook JSON validation failed (System Reminder)](system-prompts/system-reminder-hook-json-validation-failed.md)

Reports JSON schema validation failures from hook output, detailing specific path and message errors, expected schema structure, and the actual hook output for debugging.

##### 3.3.1.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for hook stopped continuation messages.

##### 3.3.1.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude that a hook has stopped continuation with an associated message.

##### 3.3.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook with its output message.

#### 3.3.2 Hook Condition Evaluation & Agent Hooks

Event-driven lifecycle system for Claude Code that executes commands, evaluates conditions, or invokes agents at specific execution points, enabling automated behavior control and context injection through structured JSON validation.

##### 3.3.2.1 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and inspecting the codebase to confirm agent task completion, returning structured output indicating success or failure with reasons.

##### 3.3.2.2 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether conditions are met with optional failure reasons.

##### 3.3.2.3 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines lifecycle hooks system for Claude Code that runs commands, prompts, or agents at specific events like PreToolUse, PostToolUse, and SessionStart. Supports command execution, LLM evaluation, and agent invocation with JSON input/output for controlling behavior and injecting context.

---

## 4. Agent Coordination, Identity & Analytics

Multi-agent orchestration infrastructure, Claude's core behavioral identity and safety principles, agent design tools, and usage analytics for workflow optimization.

### 4.1 Multi-Agent Orchestration

Infrastructure for parallel agent swarms, subagent task delegation, and team coordination through shared task lists and message protocols.

#### 4.1.1 Multi-Agent Team & Swarm Coordination

Infrastructure for orchestrating multiple agents working in parallel on complex projects. Agents discover tasks from shared lists, communicate via message protocols, coordinate through team leads, and gracefully shut down after work completes.

##### 4.1.1.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and communication protocols for coordinating with teammates by name and reporting to the team lead.

##### 4.1.1.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to gracefully shut down all team members and clean up before returning a final response to the user in non-interactive mode.

##### 4.1.1.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables sending direct messages or broadcasts to teammates, handling shutdown requests and responses, and managing plan approval responses in a swarm context with cost warnings for broadcasts.

##### 4.1.1.4 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages team creation and coordination of multiple agents working in parallel on complex projects, with task list sharing, automatic message delivery, idle state management, and peer collaboration visibility.

##### 4.1.1.5 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completes, requiring all teammates to be gracefully terminated first to avoid failure.

##### 4.1.1.6 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes how teammates discover and claim available tasks from the shared task list, preferring lowest ID tasks first and notifying the team lead when blocked.

##### 4.1.1.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Defines communication protocol for agents in swarm teams using SendMessage tool with message and broadcast types. Emphasizes that text responses are not visible to teammates without explicit tool use.

##### 4.1.1.8 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents for complex tasks including research, exploration, and implementation, supporting concurrent execution, background runs, resumption, and worktree isolation with detailed prompt guidance.

#### 4.1.2 Subagent Task Delegation

Enables Claude to delegate specialized research and analysis tasks to focused subagents that search codebases and execute multi-step investigations. Standardizes agent invocation and communication through consistent formatting and context passing.

##### 4.1.2.1 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

System prompt for a general-purpose subagent that searches codebases, analyzes files, and executes multi-step research tasks using Grep, Glob, and Read tools.

##### 4.1.2.2 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Specifies formatting constraints for Task tool usage: absolute file paths only, no emojis in responses, and no colons before tool calls.

##### 4.1.2.3 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that user wants to invoke a specific agent type and instructs appropriate invocation with required context passing.

### 4.2 Agent Design & Behavioral Identity

Frameworks for designing custom agents with persona and system prompt architecture, plus Claude Code's foundational operating principles around security and user control.

#### 4.2.1 Agent Design & Creation

Framework for designing and documenting custom AI agents, including persona development, system prompt architecture, behavioral boundaries, and codebase-specific pattern documentation aligned with project conventions.

##### 4.2.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user requirements, designing expert personas, architecting comprehensive system prompts with behavioral boundaries and decision-making frameworks, and generating concise identifiers. Emphasizes alignment with project-specific patterns from CLAUDE.md files and includes methodology for defining agent use cases with practical examples.

##### 4.2.1.2 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md documentation files by documenting common build/test/lint commands, high-level architecture, and project-specific patterns. Incorporates existing Cursor rules and README content while avoiding generic practices and obvious instructions.

##### 4.2.1.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

#### 4.2.2 Core Claude Code Identity & Behavior

Establishes Claude Code's foundational operating principles: a focused CLI assistant for software engineering that prioritizes security, simplicity, and user control. Enforces careful action evaluation, refuses malicious assistance, and maintains technical accuracy over reassurance.

##### 4.2.2.1 [Main system prompt (System Prompt)](system-prompts/system-prompt-main-system-prompt.md)

Defines Claude Code's core identity as an interactive CLI assistant for software engineering tasks with configurable output style and security policies. Provides help and feedback guidance.

##### 4.2.2.2 [Tone and style (System Prompt)](system-prompts/system-prompt-tone-and-style.md)

Establishes communication guidelines emphasizing concise CLI-appropriate responses, professional objectivity, technical accuracy over validation, and avoidance of time estimates. Discourages unnecessary file creation and emoji use unless explicitly requested.

##### 4.2.2.3 [Doing tasks (System Prompt)](system-prompts/system-prompt-doing-tasks.md)

Instructions for performing software engineering tasks, emphasizing reading code before modification, avoiding security vulnerabilities, and preventing over-engineering through focused, minimal changes.

##### 4.2.2.4 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to carefully evaluate action reversibility and blast radius, requiring user confirmation before destructive, hard-to-reverse, or shared-system operations while permitting local reversible actions freely. Emphasizes investigating root causes rather than bypassing safety checks.

##### 4.2.2.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing and defensive security while refusing requests for destructive attacks, DoS, or malicious evasion techniques.

##### 4.2.2.6 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, while permitting analysis, reporting, and behavior questions.

### 4.3 Learning, UX & Analytics

Interactive education modes for collaborative learning, conversation flow analysis for intent prediction, documentation automation, and usage analytics for workflow improvement.

#### 4.3.1 Usage Insights & Analytics

Analyzes Claude Code usage patterns to surface what's working, identify friction points, and recommend feature adoption. Extracts structured session data to guide workflow optimization and prepare users for emerging autonomous development capabilities.

##### 4.3.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part usage insights summary covering what's working, hindrances, quick wins, and ambitious workflows for improved Claude Code adoption. Uses coaching tone to help users understand usage patterns and prepare for future model capabilities.

##### 4.3.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns with specific examples, helping users understand recurring issues and improvement opportunities.

##### 4.3.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities based on usage data, suggesting parallel agents and iterative testing approaches.

##### 4.3.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including goal categories, user satisfaction signals, and friction types with strict guidelines for counting only explicit user requests and genuine satisfaction indicators.

##### 4.3.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to user's actual session data. Prioritizes repeated instructions for CLAUDE.md entries.

#### 4.3.2 Learning & Interactive Education Mode

Transforms code generation into collaborative learning by soliciting human input on design decisions, providing contextual insights, and enabling visual option comparison. Balances productivity with educational depth through structured interaction patterns.

##### 4.3.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions for design decisions and business logic in code generation, using TodoList tracking and Learn by Doing requests. Balances task completion with educational value through meaningful human input on 20+ line implementations.

##### 4.3.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code generation to encourage learning, focusing on implementation choices and codebase-specific patterns rather than general concepts.

##### 4.3.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side visual comparison of UI options using markdown previews for ASCII mockups, code snippets, and diagrams in single-select questions.

#### 4.3.3 Documentation Management

Automated systems for maintaining and evolving Magic Docs by extracting architectural insights from conversations, preserving structural integrity while removing obsolescence and redundancy.

##### 4.3.3.1 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs an agent to update Magic Doc files with new learnings from conversations, preserving headers and focusing on architecture, patterns, and entry points while removing outdated information and avoiding duplication.

#### 4.3.4 UX & Conversation Flow

Real-time analysis of conversation dynamics to predict user intent and detect emotional states, enabling proactive suggestion of next actions and identification of friction points.

##### 4.3.4.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on recent conversation context, suggesting specific actions users would likely type themselves. Avoids evaluative language, questions, Claude-voice phrasing, and new ideas while staying concise and matching user style.

##### 4.3.4.2 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes conversation history to detect user frustration and explicit pull request creation requests, outputting boolean flags for each.

---

## 5. Claude API & SDK Documentation

Complete reference materials for building with Claude: language-specific SDK guides, tool use and Files API documentation, model metadata, and the routing skill for API development.

### 5.1 Language SDK References

Implementation guides for Python, TypeScript, C#, Go, Java, PHP, and Ruby covering streaming, vision, caching, extended thinking, and language-specific integration patterns.

#### 5.1.1 Claude API SDK References — Python & TypeScript

Complete implementation guides for Python and TypeScript covering core API patterns, streaming, vision, caching, extended thinking, and cost optimization alongside parallel streaming references for both languages.

##### 5.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python Claude API reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

##### 5.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript Claude API reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

##### 5.1.1.3 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering synchronous and asynchronous streaming, handling text/thinking/tool-use content types, progress tracking, and error handling with event type documentation.

##### 5.1.1.4 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, tool runner integration, and raw SSE format with best practices for token usage and DOM updates.

#### 5.1.2 Claude API SDK References — Other Languages

SDK references for C#, Go, Java, PHP, and Ruby providing language-specific patterns for client initialization, streaming, and tool integration across diverse runtime environments.

##### 5.1.2.1 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for Claude API covering client initialization, basic requests, streaming, and manual tool use with JSON schema.

##### 5.1.2.2 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API including client initialization, basic requests, streaming, and manual agentic loop for tool use.

##### 5.1.2.3 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering client initialization, basic requests, streaming, and beta tool use with annotated classes via BetaToolRunner.

##### 5.1.2.4 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API covering installation, client initialization, basic requests, streaming, and manual tool use.

##### 5.1.2.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for Claude API including client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

### 5.2 Agent SDK & Tool Use

Agent SDK guides for building with MCP, hooks, subagents, and session management, plus complete references for tool definition, Files API, batch processing, and structured outputs.

#### 5.2.1 Agent SDK Documentation

Language-specific implementation guides and API references for building agents with Claude's Agent SDK, covering core patterns like custom tools via MCP, hooks, subagents, permission modes, and session management across Python and TypeScript.

##### 5.2.1.1 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Comprehensive Python code patterns for Agent SDK covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with working examples.

##### 5.2.1.2 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript code patterns for Agent SDK including basic agents, hooks, subagents, MCP integration, and session resumption with practical examples.

##### 5.2.1.3 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Complete Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP support, hooks, and best practices.

##### 5.2.1.4 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, query interface, built-in tools, permission modes, MCP support with in-process tools, hooks, and best practices.

#### 5.2.2 Tool Use & Files API Documentation

Complete references for defining and executing tools, managing files, and processing messages in batch, including tool runners, code execution, structured outputs, and asynchronous batch processing for cost optimization.

##### 5.2.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner versus manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool definitions.

##### 5.2.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference with tool runner (beta), manual agentic loop, code execution, file uploads, container reuse, memory tool, and structured outputs using Pydantic and strict tool use.

##### 5.2.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loop, code execution, file uploads, container reuse, memory tool, and structured outputs with strict tool use.

##### 5.2.2.4 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for documents and images, file management operations, and end-to-end examples.

##### 5.2.2.5 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages for documents, file management operations, and download functionality.

##### 5.2.2.6 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, status polling, result retrieval, and container reuse with code examples demonstrating 50% cost reduction on asynchronous message processing.

### 5.3 API Reference & Developer Guidance

Model catalog with pricing and context windows, HTTP error codes with remediation strategies, and the routing skill for architecture guidance and live documentation fetching.

#### 5.3.1 Build with Claude API Skill

Comprehensive routing and reference system for Claude API development, providing language detection, architecture guidance, model selection, and live documentation fetching to help users choose appropriate integration patterns and access current API specifications.

##### 5.3.1.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs. workflow vs. agent), architecture overview, current models, thinking/effort parameters, and compaction for long conversations.

##### 5.3.1.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific Claude API reference documentation with quick task navigation, mapping common use cases to relevant documentation sections.

##### 5.3.1.3 [Build with Claude API (trigger) [Skill]](system-prompts/skill-build-with-claude-api-trigger.md)

Activation criteria for the Build with Claude API skill, triggered when code imports Anthropic SDKs or when users explicitly request Claude API integration.

##### 5.3.1.4 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Provides WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and official repositories, with extraction prompts for each topic and fallback guidance when network issues occur.

##### 5.3.1.5 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code CLI, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant resources, and providing actionable guidance. Covers installation, hooks, MCP servers, IDE integrations, agent configuration, tool use, and cloud provider integrations.

#### 5.3.2 Claude Model & API Metadata

Essential reference data including current and legacy Claude model identifiers, pricing, context windows, HTTP error codes with remediation strategies, and version compatibility warnings.

##### 5.3.2.1 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and retired Claude models with exact model IDs, aliases, context windows, pricing, and user request resolution mapping.

##### 5.3.2.2 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with causes, fixes, and common mistakes including retry strategies.

##### 5.3.2.3 [Claude Code version mismatch warning (Data)](system-prompts/data-claude-code-version-mismatch-warning.md)

Warning message displayed when Claude Code CLI version is outdated, instructing users to run `claude update`.
