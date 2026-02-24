# Claude Code System Prompts Index

A technical reference for building, configuring, and operating Claude Code-powered systems, covering everything from low-level execution primitives to high-level agent architectures and the APIs that connect them.

## Table of Contents

1. [Planning, Tasks & Multi-Agent Coordination](#1-planning-tasks-multi-agent-coordination)
   1. [Plan Mode Workflows](#11-plan-mode-workflows)
      1. [Plan mode is active (5-phase) [System Reminder]](#111-plan-mode-is-active-5-phase-system-reminder)
      2. [Plan mode is active (iterative) [System Reminder]](#112-plan-mode-is-active-iterative-system-reminder)
      3. [Plan mode is active (subagent) [System Reminder]](#113-plan-mode-is-active-subagent-system-reminder)
      4. [Plan mode re-entry (System Reminder)](#114-plan-mode-re-entry-system-reminder)
      5. [Plan file reference (System Reminder)](#115-plan-file-reference-system-reminder)
      6. [Exited plan mode (System Reminder)](#116-exited-plan-mode-system-reminder)
      7. [Verify plan reminder (System Reminder)](#117-verify-plan-reminder-system-reminder)
      8. [EnterPlanMode (Tool Description)](#118-enterplanmode-tool-description)
      9. [ExitPlanMode (Tool Description)](#119-exitplanmode-tool-description)
      10. [Plan mode (enhanced) [Agent Prompt]](#1110-plan-mode-enhanced-agent-prompt)
   2. [Task & Todo Tracking](#12-task-todo-tracking)
      1. [TaskCreate (Tool Description)](#121-taskcreate-tool-description)
      2. [TodoWrite (Tool Description)](#122-todowrite-tool-description)
      3. [Task status (System Reminder)](#123-task-status-system-reminder)
      4. [Task tools reminder (System Reminder)](#124-task-tools-reminder-system-reminder)
      5. [Todo list changed (System Reminder)](#125-todo-list-changed-system-reminder)
      6. [Todo list empty (System Reminder)](#126-todo-list-empty-system-reminder)
      7. [TodoWrite reminder (System Reminder)](#127-todowrite-reminder-system-reminder)
      8. [Task management (System Prompt)](#128-task-management-system-prompt)
   3. [Multi-Agent Swarm Coordination](#13-multi-agent-swarm-coordination)
      1. [TeammateTool (Tool Description)](#131-teammatetool-tool-description)
      2. [TeamDelete (Tool Description)](#132-teamdelete-tool-description)
      3. [TaskList (teammate workflow) [Tool Description]](#133-tasklist-teammate-workflow-tool-description)
      4. [SendMessageTool (Tool Description)](#134-sendmessagetool-tool-description)
      5. [Team Coordination (System Reminder)](#135-team-coordination-system-reminder)
      6. [Team Shutdown (System Reminder)](#136-team-shutdown-system-reminder)
      7. [Teammate Communication (System Prompt)](#137-teammate-communication-system-prompt)
      8. [Task (Tool Description)](#138-task-tool-description)
2. [Memory, Session & Context Management](#2-memory-session-context-management)
   1. [Memory & Session Persistence](#21-memory-session-persistence)
      1. [Memory file contents (System Reminder)](#211-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#212-nested-memory-contents-system-reminder)
      3. [Session continuation (System Reminder)](#213-session-continuation-system-reminder)
      4. [Session memory update instructions (Agent Prompt)](#214-session-memory-update-instructions-agent-prompt)
      5. [Session memory template (Data)](#215-session-memory-template-data)
      6. [Agent memory instructions (System Prompt)](#216-agent-memory-instructions-system-prompt)
   2. [Conversation Summarization & Context Compaction](#22-conversation-summarization-context-compaction)
      1. [Conversation summarization (Agent Prompt)](#221-conversation-summarization-agent-prompt)
      2. [Recent Message Summarization (Agent Prompt)](#222-recent-message-summarization-agent-prompt)
      3. [Context compaction summary (System Prompt)](#223-context-compaction-summary-system-prompt)
   3. [Session Management & Metadata](#23-session-management-metadata)
      1. [Session title and branch generation (Agent Prompt)](#231-session-title-and-branch-generation-agent-prompt)
      2. [Session Search Assistant (Agent Prompt)](#232-session-search-assistant-agent-prompt)
      3. [Status line setup (Agent Prompt)](#233-status-line-setup-agent-prompt)
   4. [Resource & Budget Monitoring](#24-resource-budget-monitoring)
      1. [Token usage (System Reminder)](#241-token-usage-system-reminder)
      2. [USD budget (System Reminder)](#242-usd-budget-system-reminder)
      3. [Output token limit exceeded (System Reminder)](#243-output-token-limit-exceeded-system-reminder)
3. [File, Shell & Code Operations](#3-file-shell-code-operations)
   1. [File Access and Editing](#31-file-access-and-editing)
      1. [File System Operations & Notifications](#311-file-system-operations-notifications)
         1. [File modified by user or linter (System Reminder)](#3111-file-modified-by-user-or-linter-system-reminder)
         2. [File opened in IDE (System Reminder)](#3112-file-opened-in-ide-system-reminder)
         3. [File shorter than offset (System Reminder)](#3113-file-shorter-than-offset-system-reminder)
         4. [File truncated (System Reminder)](#3114-file-truncated-system-reminder)
         5. [File exists but empty (System Reminder)](#3115-file-exists-but-empty-system-reminder)
         6. [Lines selected in IDE (System Reminder)](#3116-lines-selected-in-ide-system-reminder)
         7. [Compact file reference (System Reminder)](#3117-compact-file-reference-system-reminder)
      2. [File Operation Tools](#312-file-operation-tools)
         1. [ReadFile (Tool Description)](#3121-readfile-tool-description)
         2. [Write (Tool Description)](#3122-write-tool-description)
         3. [Edit (Tool Description)](#3123-edit-tool-description)
         4. [Glob (Tool Description)](#3124-glob-tool-description)
         5. [Grep (Tool Description)](#3125-grep-tool-description)
      3. [Jupyter Notebook Editing](#313-jupyter-notebook-editing)
         1. [NotebookEdit (Tool Description)](#3131-notebookedit-tool-description)
   2. [Shell Execution and Codebase Analysis](#32-shell-execution-and-codebase-analysis)
      1. [Bash & Shell Execution](#321-bash-shell-execution)
         1. [Bash (Tool Description)](#3211-bash-tool-description)
         2. [Bash (sandbox note) [Tool Description]](#3212-bash-sandbox-note-tool-description)
         3. [Bash command description writer (Agent Prompt)](#3213-bash-command-description-writer-agent-prompt)
         4. [Bash command file path extraction (Agent Prompt)](#3214-bash-command-file-path-extraction-agent-prompt)
         5. [Bash command prefix detection (Agent Prompt)](#3215-bash-command-prefix-detection-agent-prompt)
         6. [Command execution specialist (Agent Prompt)](#3216-command-execution-specialist-agent-prompt)
      2. [Codebase Exploration & Analysis](#322-codebase-exploration-analysis)
         1. [Explore (Agent Prompt)](#3221-explore-agent-prompt)
         2. [Task tool (Agent Prompt)](#3222-task-tool-agent-prompt)
         3. [LSP (Tool Description)](#3223-lsp-tool-description)
         4. [Conditional delegate codebase exploration (System Prompt)](#3224-conditional-delegate-codebase-exploration-system-prompt)
   3. [Documentation, Testing & Verification](#33-documentation-testing-verification)
      1. [Documentation Generation & Management](#331-documentation-generation-management)
         1. [CLAUDE.md creation (Agent Prompt)](#3311-claudemd-creation-agent-prompt)
         2. [Update Magic Docs (Agent Prompt)](#3312-update-magic-docs-agent-prompt)
      2. [Verification & Testing](#332-verification-testing)
         1. [Verification specialist (Skill)](#3321-verification-specialist-skill)
         2. [Debugging (Skill)](#3322-debugging-skill)
4. [Automation, Hooks & User Interaction](#4-automation-hooks-user-interaction)
   1. [Hook System](#41-hook-system)
      1. [Hook additional context (System Reminder)](#411-hook-additional-context-system-reminder)
      2. [Hook blocking error (System Reminder)](#412-hook-blocking-error-system-reminder)
      3. [Hook stopped continuation prefix (System Reminder)](#413-hook-stopped-continuation-prefix-system-reminder)
      4. [Hook stopped continuation (System Reminder)](#414-hook-stopped-continuation-system-reminder)
      5. [Hook success (System Reminder)](#415-hook-success-system-reminder)
      6. [Hook condition evaluator (Agent Prompt)](#416-hook-condition-evaluator-agent-prompt)
      7. [Agent Hook (Agent Prompt)](#417-agent-hook-agent-prompt)
      8. [Hooks Configuration (System Prompt)](#418-hooks-configuration-system-prompt)
   2. [Skill System](#42-skill-system)
      1. [Skill (Tool Description)](#421-skill-tool-description)
      2. [Invoked skills (System Reminder)](#422-invoked-skills-system-reminder)
      3. [Skillify Current Session (System Prompt)](#423-skillify-current-session-system-prompt)
   3. [Claude Code Configuration & Settings](#43-claude-code-configuration-settings)
      1. [Update Claude Code Config (Skill)](#431-update-claude-code-config-skill)
      2. [Scratchpad directory (System Prompt)](#432-scratchpad-directory-system-prompt)
   4. [Interaction & Guidance Systems](#44-interaction-guidance-systems)
      1. [AskUserQuestion (Tool Description)](#441-askuserquestion-tool-description)
      2. [Sleep (Tool Description)](#442-sleep-tool-description)
      3. [Prompt Suggestion Generator v2 (Agent Prompt)](#443-prompt-suggestion-generator-v2-agent-prompt)
      4. [Single-word search term extractor (Agent Prompt)](#444-single-word-search-term-extractor-agent-prompt)
      5. [Option previewer (System Prompt)](#445-option-previewer-system-prompt)
      6. [Tool Use Summary Generation (System Prompt)](#446-tool-use-summary-generation-system-prompt)
      7. [/btw side question (System Reminder)](#447-btw-side-question-system-reminder)
      8. [Agent mention (System Reminder)](#448-agent-mention-system-reminder)
      9. [New diagnostics detected (System Reminder)](#449-new-diagnostics-detected-system-reminder)
      10. [Task tool (extra notes) [Agent Prompt]](#4410-task-tool-extra-notes-agent-prompt)
5. [Web, Browser, Git & Security](#5-web-browser-git-security)
   1. [Web and Browser Tools](#51-web-and-browser-tools)
      1. [MCP Resource Handling](#511-mcp-resource-handling)
         1. [MCP resource no content (System Reminder)](#5111-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#5112-mcp-resource-no-displayable-content-system-reminder)
         3. [Chrome browser MCP tools (System Prompt)](#5113-chrome-browser-mcp-tools-system-prompt)
      2. [Browser Automation](#512-browser-automation)
         1. [Computer (Tool Description)](#5121-computer-tool-description)
         2. [Computer action (Tool Parameter)](#5122-computer-action-tool-parameter)
         3. [Claude in Chrome browser automation (System Prompt)](#5123-claude-in-chrome-browser-automation-system-prompt)
      3. [Web Search & Content Retrieval](#513-web-search-content-retrieval)
         1. [WebFetch (Tool Description)](#5131-webfetch-tool-description)
         2. [WebSearch (Tool Description)](#5132-websearch-tool-description)
         3. [WebFetch summarizer (Agent Prompt)](#5133-webfetch-summarizer-agent-prompt)
         4. [Live documentation sources (Data)](#5134-live-documentation-sources-data)
      4. [Tool Discovery & Loading](#514-tool-discovery-loading)
         1. [ToolSearch (Tool Description)](#5141-toolsearch-tool-description)
         2. [ToolSearch extended (Tool Description)](#5142-toolsearch-extended-tool-description)
   2. [Git, GitHub & Code Review](#52-git-github-code-review)
      1. [Git & Version Control Operations](#521-git-version-control-operations)
         1. [Bash (Git commit and PR creation instructions) [Tool Description]](#5211-bash-git-commit-and-pr-creation-instructions-tool-description)
         2. [EnterWorktree (Tool Description)](#5212-enterworktree-tool-description)
         3. [Git status (System Prompt)](#5213-git-status-system-prompt)
      2. [GitHub Integration & Code Review](#522-github-integration-code-review)
         1. [/pr-comments slash command (Agent Prompt)](#5221-pr-comments-slash-command-agent-prompt)
         2. [/review-pr slash command (Agent Prompt)](#5222-review-pr-slash-command-agent-prompt)
         3. [/security-review slash command (Agent Prompt)](#5223-security-review-slash-command-agent-prompt)
         4. [GitHub Actions workflow for @claude mentions (Data)](#5224-github-actions-workflow-for-claude-mentions-data)
         5. [GitHub App installation PR description (Data)](#5225-github-app-installation-pr-description-data)
         6. [User sentiment analysis (Agent Prompt)](#5226-user-sentiment-analysis-agent-prompt)
   3. [Security, Permissions & Tool Policies](#53-security-permissions-tool-policies)
      1. [Security & Safety Policies](#531-security-safety-policies)
         1. [Malware analysis after Read tool call (System Reminder)](#5311-malware-analysis-after-read-tool-call-system-reminder)
         2. [Censoring assistance with malicious activities (System Prompt)](#5312-censoring-assistance-with-malicious-activities-system-prompt)
         3. [Tool execution denied (System Prompt)](#5313-tool-execution-denied-system-prompt)
         4. [Executing actions with care (System Prompt)](#5314-executing-actions-with-care-system-prompt)
         5. [Doing tasks (System Prompt)](#5315-doing-tasks-system-prompt)
      2. [Tool Permission & Usage Policies](#532-tool-permission-usage-policies)
         1. [Tool permission mode (System Prompt)](#5321-tool-permission-mode-system-prompt)
         2. [Tool usage policy (System Prompt)](#5322-tool-usage-policy-system-prompt)
         3. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#5323-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
6. [Claude API & SDK Reference](#6-claude-api-sdk-reference)
   1. [Language SDKs and Core API](#61-language-sdks-and-core-api)
      1. [Claude API Reference — Language SDKs](#611-claude-api-reference-—-language-sdks)
         1. [Claude API reference — Python (Data)](#6111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#6112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#6113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#6114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#6115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — C# (Data)](#6116-claude-api-reference-—-c-data)
         7. [Claude API reference — PHP (Data)](#6117-claude-api-reference-—-php-data)
      2. [Streaming API Reference](#612-streaming-api-reference)
         1. [Streaming reference — Python (Data)](#6121-streaming-reference-—-python-data)
         2. [Streaming reference — TypeScript (Data)](#6122-streaming-reference-—-typescript-data)
      3. [Files & Batches API Reference](#613-files-batches-api-reference)
         1. [Files API reference — Python (Data)](#6131-files-api-reference-—-python-data)
         2. [Files API reference — TypeScript (Data)](#6132-files-api-reference-—-typescript-data)
         3. [Message Batches API reference — Python (Data)](#6133-message-batches-api-reference-—-python-data)
   2. [Tool Use and Agent SDK](#62-tool-use-and-agent-sdk)
      1. [Agent SDK Reference & Patterns](#621-agent-sdk-reference-patterns)
         1. [Agent SDK reference — Python (Data)](#6211-agent-sdk-reference-—-python-data)
         2. [Agent SDK patterns — Python (Data)](#6212-agent-sdk-patterns-—-python-data)
         3. [Agent SDK patterns — TypeScript (Data)](#6213-agent-sdk-patterns-—-typescript-data)
      2. [Tool Use API Reference](#622-tool-use-api-reference)
         1. [Tool use concepts (Data)](#6221-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#6222-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#6223-tool-use-reference-—-typescript-data)
   3. [API Navigation, Models & Errors](#63-api-navigation-models-errors)
      1. [Build with Claude API Skill](#631-build-with-claude-api-skill)
         1. [Build with Claude API (Skill)](#6311-build-with-claude-api-skill)
         2. [Build with Claude API (trigger) [Skill]](#6312-build-with-claude-api-trigger-skill)
         3. [Build with Claude API (reference guide) [Skill]](#6313-build-with-claude-api-reference-guide-skill)
         4. [Claude guide agent (Agent Prompt)](#6314-claude-guide-agent-agent-prompt)
      2. [Claude Model Catalog & Error Reference](#632-claude-model-catalog-error-reference)
         1. [Claude model catalog (Data)](#6321-claude-model-catalog-data)
         2. [HTTP error codes reference (Data)](#6322-http-error-codes-reference-data)
7. [Agent Design, Identity & Analytics](#7-agent-design-identity-analytics)
   1. [Core Claude Code Identity & Communication Style](#71-core-claude-code-identity-communication-style)
      1. [Main system prompt (System Prompt)](#711-main-system-prompt-system-prompt)
      2. [Tone and style (System Prompt)](#712-tone-and-style-system-prompt)
      3. [Output style active (System Reminder)](#713-output-style-active-system-reminder)
   2. [Learning & Educational Mode](#72-learning-educational-mode)
      1. [Learning mode (System Prompt)](#721-learning-mode-system-prompt)
      2. [Learning mode (insights) [System Prompt]](#722-learning-mode-insights-system-prompt)
   3. [Usage Insights & Analytics](#73-usage-insights-analytics)
      1. [Insights friction analysis (System Prompt)](#731-insights-friction-analysis-system-prompt)
      2. [Insights on the horizon (System Prompt)](#732-insights-on-the-horizon-system-prompt)
      3. [Insights session facets extraction (System Prompt)](#733-insights-session-facets-extraction-system-prompt)
      4. [Insights suggestions (System Prompt)](#734-insights-suggestions-system-prompt)
      5. [Insights at a glance summary (System Prompt)](#735-insights-at-a-glance-summary-system-prompt)
   4. [Agent Design & Creation](#74-agent-design-creation)
      1. [Agent creation architect (Agent Prompt)](#741-agent-creation-architect-agent-prompt)
      2. [Agent Summary Generation (System Prompt)](#742-agent-summary-generation-system-prompt)

---

## 1. Planning, Tasks & Multi-Agent Coordination

Structured workflows for designing implementation strategies, tracking progress across complex sessions, and orchestrating teams of specialized agents working in parallel.

### 1.1 Plan Mode Workflows

Structured planning workflows that enforce read-only operations while Claude designs implementation strategies through codebase exploration, agent-based analysis, and iterative refinement. Supports multiple planning patterns—from comprehensive 5-phase workflows with parallel agents to iterative pair-planning with users—and manages transitions between planning and execution phases with plan file continuity.

#### 1.1.1 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Comprehensive planning workflow enforcing read-only operations and guiding Claude through five phases: initial understanding with parallel exploration agents, design with planning agents, review, final plan writing, and plan approval. Emphasizes codebase exploration, agent-based design, and incremental plan refinement before execution.

#### 1.1.2 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Iterative planning workflow for pair-planning with the user, cycling through code exploration, plan file updates, and user questioning until the plan is complete. Restricts execution to read-only operations and plan file editing.

#### 1.1.3 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instructions for subagents restricting execution to read-only operations and plan file editing while answering queries and asking clarifying questions.

#### 1.1.4 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude to review an existing plan file when re-entering plan mode, evaluate whether the user's current request continues the same task or starts a new one, and modify or overwrite the plan accordingly before proceeding.

#### 1.1.5 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

#### 1.1.6 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude of exiting plan mode and restoration of tool execution and editing capabilities, with optional plan file location reference.

#### 1.1.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to call a verification tool directly after completing plan implementation to confirm all plan items were executed correctly.

#### 1.1.8 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Instructs Claude to proactively use EnterPlanMode for non-trivial implementation tasks involving new features, multiple approaches, architectural decisions, or multi-file changes to get user sign-off before coding. Skip it only for simple, straightforward tasks.

#### 1.1.9 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Describes ExitPlanMode for signaling completion of planning and requesting user approval. Use only for implementation planning tasks, not research or exploration. Do not use it to ask if the plan is acceptable—that is its inherent function.

#### 1.1.10 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only planning specialist that explores codebases, understands requirements, identifies patterns, and designs detailed implementation strategies with critical files identified for execution.

### 1.2 Task & Todo Tracking

Progress tracking system for breaking down complex work into structured task lists with state management (pending, in-progress, completed). Enables Claude to maintain visibility across multi-step coding sessions and automatically suggest task creation for complex or multi-file work.

#### 1.2.1 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Create structured task lists for coding sessions with imperative subjects and present-continuous activeForm descriptions. Use proactively for multi-step tasks, complex work, and plan mode.

#### 1.2.2 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Create and manage task lists for coding sessions with imperative content and present-continuous activeForm descriptions. Track progress across multi-step tasks with pending, in_progress, and completed states.

#### 1.2.3 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

#### 1.2.4 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gently reminds Claude to use task creation and update tools for tracking progress on ongoing work, without mentioning this reminder to the user.

#### 1.2.5 [Todo list changed (System Reminder)](system-prompts/system-reminder-todo-list-changed.md)

Notifies Claude that the todo list has been updated and provides the current contents without explicitly mentioning this change to the user.

#### 1.2.6 [Todo list empty (System Reminder)](system-prompts/system-reminder-todo-list-empty.md)

Reminds Claude that the todo list is empty and suggests using the TodoWrite tool if task tracking would be beneficial, without mentioning this to the user.

#### 1.2.7 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gently suggests using the TodoWrite tool for progress tracking if relevant to current work, without disclosing this reminder to the user.

#### 1.2.8 [Task management (System Prompt)](system-prompts/system-prompt-task-management.md)

Instructs frequent use of task management tools for planning, tracking, and breaking down complex tasks into steps, marking todos as completed immediately upon finishing each task.

### 1.3 Multi-Agent Swarm Coordination

Framework for orchestrating teams of specialized agents working in parallel on complex projects. Agents coordinate through shared task lists, direct messaging, and team leadership structures, with support for graceful shutdown and resource cleanup after swarm completion.

#### 1.3.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Create teams and coordinate multiple agents working in parallel on complex projects. Teams manage task lists, teammate assignment, message delivery, and idle state handling with automatic notifications.

#### 1.3.2 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Remove team and task directories after swarm work completes. Requires all teammates to be gracefully terminated first.

#### 1.3.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Teammates query available tasks by status and ownership, claim unblocked work in ID order, and coordinate via shared task lists to enable parallel execution.

#### 1.3.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Send direct messages or broadcasts to teammates, handle shutdown requests and responses, and manage plan approval workflows in multi-agent swarms. Direct messages are preferred over broadcasts to minimize API costs.

#### 1.3.5 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity as a team member, provides access to team resources and configuration, and instructs Claude to communicate with teammates by name and report to the team lead.

#### 1.3.6 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to gracefully shut down all team members and clean up the team before providing a final response to the user in non-interactive mode.

#### 1.3.7 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Establishes agent communication protocols for swarm environments using SendMessage tool with message and broadcast types, coordinating work through task system and teammate messaging.

#### 1.3.8 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launch specialized sub-agents to handle complex tasks with support for concurrent execution, background processing, resumption, and worktree isolation. Agents receive full conversation context and return results for user communication.

---

## 2. Memory, Session & Context Management

Mechanisms for preserving context across sessions, compacting conversation history, organizing sessions with metadata, and monitoring resource budgets during extended work.

### 2.1 Memory & Session Persistence

Mechanisms for maintaining context across sessions and machines through structured memory files. Captures task state, workflows, errors, and learnings in templated formats, enabling institutional knowledge accumulation and seamless session continuation.

#### 2.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Presents the contents of a memory file stored at a specific path with type description.

#### 2.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file structure.

#### 2.1.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and provides the updated working directory.

#### 2.1.4 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by preserving structure and section headers while adding detailed, info-dense content from conversations, maintaining token limits and focusing on actionable information.

#### 2.1.5 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files capturing current state, task specifications, files, workflows, errors, codebase documentation, learnings, and worklogs.

#### 2.1.6 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations, with examples for code reviewers, test runners, architects, and documentation writers.

### 2.2 Conversation Summarization & Context Compaction

Structured approaches to distill conversation history into dense, resumable summaries organized by request, technical concepts, files, errors, and next steps. Enables efficient context reuse when conversations exceed token limits.

#### 2.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections covering primary requests, technical concepts, files examined, errors encountered, problem-solving efforts, user messages, pending tasks, current work, and next steps with full code snippets and technical details.

#### 2.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions (excluding earlier retained context) across nine sections including requests, technical concepts, files modified, errors, problem-solving, user messages, pending tasks, current work, and next steps.

#### 2.2.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt template for generating continuation summaries during context compaction, structured to preserve task overview, current state, discoveries, next steps, and context-specific details for efficient resumption.

### 2.3 Session Management & Metadata

Tools for organizing, naming, and retrieving sessions through metadata tagging and semantic search. Integrates with git workflows and customizable status displays for workspace awareness.

#### 2.3.1 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (6 words max, sentence case) and git branch names (4 words max, 'claude/' prefix, lowercase with dashes) from session descriptions.

#### 2.3.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user queries by prioritizing exact tag matches, then partial matches, titles, branches, and semantic similarity, returning results ordered by relevance with inclusive matching.

#### 2.3.3 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by converting shell PS1 configurations to shell commands, handling ANSI colors, and updating settings.json with statusLine command configuration that receives session, workspace, model, and context window data.

### 2.4 Resource & Budget Monitoring

Real-time tracking of token consumption and financial costs against allocated budgets. Alerts on resource exhaustion and enforces constraints to prevent overages.

#### 2.4.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

#### 2.4.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing used, total, and remaining budget.

#### 2.4.3 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Warns that the response was truncated due to exceeding token limits and instructs Claude to break work into smaller pieces.

---

## 3. File, Shell & Code Operations

Hands-on tools for reading, writing, and searching files, executing shell commands safely, exploring codebases, editing notebooks, generating documentation, and verifying code correctness.

### 3.1 File Access and Editing

Reading, writing, searching, and monitoring files across formats including notebooks, with awareness of external modifications and truncation.

#### 3.1.1 File System Operations & Notifications

Notifications and warnings for file system state changes including external modifications, IDE interactions, truncation, and offset mismatches. Keeps Claude aware of file state without interrupting workflow while providing guidance for accessing large or modified content.

##### 3.1.1.1 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and should be incorporated into ongoing work without reverting unless requested.

##### 3.1.1.2 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Brief notification that the user opened a file in the IDE, which may or may not relate to the current task.

##### 3.1.1.3 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warning that a file read offset exceeds the file's actual length, indicating a mismatch between requested and available lines.

##### 3.1.1.4 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a maximum line count and instructs use of the read tool to access additional content if needed.

##### 3.1.1.5 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns that a file exists but contains no content.

##### 3.1.1.6 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of a specific line range selected by the user in the IDE, with the selected content displayed.

##### 3.1.1.7 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

References a file read before conversation summarization that is too large to include, directing use of Read tool if needed.

#### 3.1.2 File Operation Tools

Tools for reading, writing, and searching files in the local filesystem. Support includes multiple file formats (images, PDFs, notebooks), pattern-based discovery via glob matching, and regex-powered content search with filtering capabilities.

##### 3.1.2.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Read files from the local filesystem with support for images, PDFs, Jupyter notebooks, and optional line-range parameters for large files. Absolute paths required.

##### 3.1.2.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Write files to the local filesystem. Prefer editing existing files over creating new ones; avoid proactively creating documentation unless explicitly requested.

##### 3.1.2.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Describes the Edit tool for exact string replacements in files, emphasizing preservation of indentation, preference for editing existing files, and use of replace_all for renaming across files.

##### 3.1.2.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns to find files by name, returning results sorted by modification time. Use for targeted searches; use the Agent tool for open-ended multi-round searches.

##### 3.1.2.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search tool built on ripgrep supporting regex patterns, file filtering by glob or type, and multiple output modes. Always use this tool for search tasks rather than bash grep commands.

#### 3.1.3 Jupyter Notebook Editing

Direct manipulation of Jupyter notebook structure through cell-level operations, enabling code, text, and visualization content to be inserted, replaced, or removed within .ipynb files.

##### 3.1.3.1 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replace, insert, or delete cells in Jupyter notebooks (.ipynb files) with support for code, text, and visualizations.

### 3.2 Shell Execution and Codebase Analysis

Safe command execution with injection detection, plus read-only codebase navigation using pattern matching and language intelligence.

#### 3.2.1 Bash & Shell Execution

Safe command execution framework with sandboxing, injection detection, and output parsing that prioritizes security while delegating specialized operations to dedicated tools.

##### 3.2.1.1 [Bash (Tool Description)](system-prompts/tool-description-bash.md)

Describes the bash tool for executing shell commands with proper quoting, directory verification, and timeout handling. Emphasizes using specialized tools for file operations instead of bash, and provides guidance on parallel vs. sequential command execution.

##### 3.2.1.2 [Bash (sandbox note) [Tool Description]](system-prompts/tool-description-bash-sandbox-note.md)

Explains that bash commands run in sandbox mode by default for security, when to disable sandboxing only with explicit user request or clear evidence of sandbox-caused failures, and how to identify sandbox restriction errors.

##### 3.2.1.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or obscure commands.

##### 3.2.1.4 [Bash command file path extraction (Agent Prompt)](system-prompts/agent-prompt-bash-command-file-path-extraction.md)

Extracts file paths from bash command output by determining whether the command displays file contents, returning paths verbatim only when files are explicitly shown.

##### 3.2.1.5 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands using a safety classification system. Returns the detected prefix or 'command_injection_detected' to prevent malicious command execution.

##### 3.2.1.6 [Command execution specialist (Agent Prompt)](system-prompts/agent-prompt-command-execution-specialist.md)

Executes bash commands efficiently and safely, following git safety protocols, reporting output clearly, and suggesting solutions for failures.

#### 3.2.2 Codebase Exploration & Analysis

Read-only navigation and analysis of codebases using pattern matching, language intelligence, and strategic delegation to efficiently locate and understand code structures.

##### 3.2.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist that navigates codebases using glob patterns, regex grep, and file reading to rapidly find and analyze code without modifying files.

##### 3.2.2.2 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

System prompt for Claude Code subagents spawned via the Task tool. Instructs agents to search codebases, analyze files, and complete multi-step research tasks while avoiding unnecessary file creation and preferring edits to existing files.

##### 3.2.2.3 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers to access code intelligence features like go-to-definition, find-references, hover information, and call hierarchy across files.

##### 3.2.2.4 [Conditional delegate codebase exploration (System Prompt)](system-prompts/system-prompt-conditional-delegate-codebase-exploration.md)

Decision framework for when to use the Explore subagent versus direct tool calls for codebase exploration, preferring subagents for broader research when simple searches prove insufficient.

### 3.3 Documentation, Testing & Verification

Architecture-focused documentation generation, code correctness validation, and structured troubleshooting to diagnose issues during development.

#### 3.3.1 Documentation Generation & Management

Creation and maintenance of architecture-focused documentation that captures codebase knowledge and integrates learnings from ongoing development work.

##### 3.3.1.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates or improves CLAUDE.md documentation files by documenting common commands, high-level architecture, and integrating insights from existing README and rule files.

##### 3.3.1.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Prompt for updating Magic Doc files with new learnings from conversations. Emphasizes terseness, architecture-focused documentation, and in-place updates reflecting current codebase state rather than historical tracking.

#### 3.3.2 Verification & Testing

Tools for validating code correctness and diagnosing issues in development sessions. Analyzes changes, executes verification plans, and identifies errors through log inspection and structured troubleshooting.

##### 3.3.2.1 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering project verifier skills, analyzing git changes, creating deterministic verification plans, and delegating execution to appropriate verifiers with structured result reporting.

##### 3.3.2.2 [Debugging (Skill)](system-prompts/skill-debugging.md)

Skill for debugging issues in Claude Code sessions by analyzing debug logs, identifying errors and warnings, reviewing settings, and providing concrete fixes or next steps.

---

## 4. Automation, Hooks & User Interaction

Event-driven automation through hooks, reusable skill workflows, configuration management, and runtime utilities for user engagement and contextual guidance.

### 4.1 Hook System

Event-driven automation framework that intercepts tool execution, file operations, and conversation state changes to enforce conditions, deliver context, and control execution flow. Hooks evaluate conditions, verify completion criteria, and can block or continue operations based on configured rules.

#### 4.1.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Delivers additional context information provided by a hook during execution.

#### 4.1.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command that prevented execution.

#### 4.1.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for continuation messages when a hook stops execution.

#### 4.1.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Message indicating that a hook halted execution with an accompanying reason.

#### 4.1.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Success notification from a hook with associated content or result.

#### 4.1.6 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether a condition is met or providing a reason for failure.

#### 4.1.7 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured output indicating whether an agent completed its assigned plan.

#### 4.1.8 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive reference for Claude Code hooks configuration covering hook structure, events (PreToolUse, PostToolUse, PreCompact, etc.), hook types (command, prompt, agent), input/output JSON formats, and common automation patterns.

### 4.2 Skill System

Enables domain-specific capabilities through reusable slash-command skills invoked within conversations. Skills capture repeatable processes into structured, documented workflows through user interviews and analysis, generating executable templates with success criteria and multiple execution modes for workflow automation.

#### 4.2.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Execute specialized skills (slash commands) within the main conversation to invoke domain-specific capabilities. Skills must be invoked via this tool before generating responses about the task.

#### 4.2.2 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills activated during the session and reminds Claude to continue following their guidelines.

#### 4.2.3 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Converts repeatable session processes into reusable skills through structured analysis and multi-round user interviews, generating SKILL.md files with detailed steps, success criteria, and execution modes.

### 4.3 Claude Code Configuration & Settings

Configuration management for Claude Code environments, including settings customization, event-triggered automation hooks, and session-isolated file handling for temporary artifacts.

#### 4.3.1 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration via settings.json, distinguishing between hooks (event-triggered automation) and memory (preferences), with critical emphasis on reading before writing and merging arrays rather than replacing them.

#### 4.3.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs use of a dedicated session-specific scratchpad directory for temporary files instead of system temp directories, enabling free file creation without permission prompts.

### 4.4 Interaction & Guidance Systems

Runtime utilities for user engagement, search optimization, and contextual assistance—including interactive clarification, predictive suggestions, visual option comparison, and diagnostic awareness—alongside operational constraints for specific interaction modes.

#### 4.4.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying ambiguous instructions, and getting decisions during execution. In plan mode, use it to clarify requirements before finalizing the plan, not to ask for plan approval.

#### 4.4.2 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Wait for a specified duration with early wake capability on user input. Preferred over bash sleep as it doesn't hold shell processes.

#### 4.4.3 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts what users would naturally type next into Claude Code based on recent messages and context, suggesting specific follow-up actions without evaluative or Claude-voice language.

#### 4.4.4 [Single-word search term extractor (Agent Prompt)](system-prompts/agent-prompt-single-word-search-term-extractor.md)

Extracts single-word search terms from queries into exact terms and conceptual keywords for grep-based markdown file searches, prioritizing discriminative terms with high relevance.

#### 4.4.5 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for UI options using markdown field, displaying ASCII mockups, code snippets, diagrams, or configuration examples for visual comparison.

#### 4.4.6 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Generates brief past-tense summaries of tool usage under 8 words, focusing on user-visible outcomes without attribution or implementation details.

#### 4.4.7 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Constrains responses to side questions without tool access, requiring direct answers from conversation context only with no promises of investigation.

#### 4.4.8 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that user wants to invoke a specific agent type and instructs appropriate invocation with required context.

#### 4.4.9 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues in the code with a summary of problems.

#### 4.4.10 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Provides usage guidelines for task tool including absolute path requirements, file snippet sharing, emoji avoidance, and proper tool call formatting.

---

## 5. Web, Browser, Git & Security

External tool integrations spanning web search, browser automation, MCP resources, version control workflows, GitHub code review, and security and permission policies.

### 5.1 Web and Browser Tools

Real-time web content retrieval, programmatic browser control, MCP resource handling, and tool discovery for external information access.

#### 5.1.1 MCP Resource Handling

Mechanisms for detecting and reporting the state of MCP resources, distinguishing between missing content, non-displayable binary data, and successful retrieval. Includes initialization requirements for Chrome browser MCP tool access.

##### 5.1.1.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource exists but contains no content.

##### 5.1.1.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource has content but it is not displayable in text form.

##### 5.1.1.3 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use, requiring explicit tool selection before calling any mcp__claude-in-chrome__* functions.

#### 5.1.2 Browser Automation

Programmatic control of browser interactions through mouse, keyboard, and visual feedback, with operational guidance for Chrome automation including session management, debugging, and loop prevention.

##### 5.1.2.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse, keyboard, and screenshots, with guidance on precise cursor positioning and element interaction.

##### 5.1.2.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Action parameter options for Chrome browser automation including clicks, typing, scrolling, keyboard input, dragging, zooming, and hover interactions.

##### 5.1.2.3 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for effective browser automation using Claude in Chrome tools, covering GIF recording, console debugging, alert handling, avoiding loops, and proper tab context initialization.

#### 5.1.3 Web Search & Content Retrieval

Real-time web information access and content extraction with caching, markdown conversion, and source attribution. Includes specialized summarization for verbose content with domain-specific quote policies and live documentation fetching.

##### 5.1.3.1 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetch and analyze web content by converting HTML to markdown and processing with a fast model. Supports URL redirects, includes 15-minute cache, and prefers MCP web-fetch tools when available.

##### 5.1.3.2 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Search the web for current information and recent data beyond knowledge cutoff. Mandatory to include Sources section with markdown hyperlinks in responses.

##### 5.1.3.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model. Applies strict quote limits and paraphrasing rules for untrusted domains while allowing flexible sourcing from trusted domains.

##### 5.1.3.4 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for fetching current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories. Includes extraction prompts and fallback strategies for outdated cached content.

#### 5.1.4 Tool Discovery & Loading

Prerequisite mechanism for discovering and activating deferred tools through keyword search or direct selection, making tools immediately available for subsequent operations.

##### 5.1.4.1 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite tool to load deferred tools before calling them. Both query modes (keyword and direct selection) make tools immediately available.

##### 5.1.4.2 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage for ToolSearch supporting keyword search, direct selection, and required-keyword modes to discover and load deferred tools. Keyword searches return up to 5 ranked tools; both modes load tools equally.

### 5.2 Git, GitHub & Code Review

Safe git workflows with branch isolation and staging discipline, plus automated pull request analysis, diff review, and security vulnerability detection.

#### 5.2.1 Git & Version Control Operations

Safe git workflows including commit creation, pull request submission, branch isolation via worktrees, and status tracking. Emphasizes destructive-operation prevention and proper staging discipline.

##### 5.2.1.1 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for safely creating git commits and GitHub pull requests via bash, including safety protocols to prevent destructive operations, proper staging practices, commit message formatting, and PR creation using the gh command.

##### 5.2.1.2 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Describes the EnterWorktree tool for creating isolated git worktrees or VCS-agnostic worktrees when the user requests isolated work on a separate branch or feature.

##### 5.2.1.3 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Display template for showing current git status at conversation start, including branch, main branch reference, working tree status, and recent commits.

#### 5.2.2 GitHub Integration & Code Review

Automated code review and pull request analysis capabilities that examine diffs, comments, and security vulnerabilities while integrating with GitHub workflows and detecting user intent from conversation context.

##### 5.2.2.1 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including both PR-level and code review comments with diff hunks, file paths, and line numbers in a formatted, threaded structure.

##### 5.2.2.2 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Conducts expert code reviews of GitHub pull requests by analyzing diffs and providing thorough assessments covering code quality, style, improvements, risks, correctness, conventions, performance, testing, and security.

##### 5.2.2.3 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Performs focused security reviews of PR changes identifying high-confidence exploitable vulnerabilities across input validation, authentication, cryptography, injection, and data exposure categories while filtering false positives and excluding DOS, secrets management, and rate-limiting issues.

##### 5.2.2.4 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues and pull requests. Configures permissions, checkout, and optional custom prompts.

##### 5.2.2.5 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration. Explains Claude Code capabilities, workflow behavior, security considerations, and tool configuration.

##### 5.2.2.6 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration and explicit pull request creation requests from conversation history. Detects signs of frustration and distinguishes actual PR submission requests from general code collaboration discussions.

### 5.3 Security, Permissions & Tool Policies

Operational guidelines governing tool access, action reversibility, malware handling, parallel execution strategies, and permission controls for safe tool use.

#### 5.3.1 Security & Safety Policies

Operational guidelines governing tool access, action reversibility, malware handling, and authorized security testing while preventing misuse and requiring confirmation for high-risk operations.

##### 5.3.1.1 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but strictly prohibits improving or augmenting malicious code while permitting analysis, reporting, and behavior documentation.

##### 5.3.1.2 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Security guidelines for assisting with authorized security testing, CTF challenges, and defensive security while refusing requests for destructive attacks, DoS, supply chain compromise, and detection evasion.

##### 5.3.1.3 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Guides behavior when tool execution is denied, permitting reasonable workarounds with alternative tools but prohibiting malicious bypasses, with escalation to user if capability is essential.

##### 5.3.1.4 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Guidelines for carefully executing reversible versus destructive actions, requiring user confirmation for hard-to-reverse operations, shared-state changes, and investigating unexpected state before deletion.

##### 5.3.1.5 [Doing tasks (System Prompt)](system-prompts/system-prompt-doing-tasks.md)

Instructions for performing software engineering tasks emphasizing reading code before modification, avoiding security vulnerabilities, preventing over-engineering, and maintaining simplicity with minimal necessary complexity.

#### 5.3.2 Tool Permission & Usage Policies

Governs how Claude interacts with tools through permission controls, execution strategies, and operational guidelines. When tool access is denied, Claude adjusts its approach rather than retrying. Parallel execution optimizes independent operations while respecting dependencies, and specialized tools are preferred over generic alternatives like bash for file and codebase operations.

##### 5.3.2.1 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains tool permission modes where denied tool calls trigger user prompts, instructing Claude to adjust approach rather than retry and optionally ask for clarification.

##### 5.3.2.2 [Tool usage policy (System Prompt)](system-prompts/system-prompt-tool-usage-policy.md)

Establishes tool usage policies including parallel execution optimization, preference for specialized tools over bash commands, and guidelines for file operations and codebase exploration.

##### 5.3.2.3 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while maintaining sequential execution for dependent operations to increase efficiency.

---

## 6. Claude API & SDK Reference

Comprehensive API documentation covering language SDKs, streaming, tool use, file and batch APIs, agent SDK patterns, model catalog, error handling, and navigation skills for building LLM applications.

### 6.1 Language SDKs and Core API

SDK implementations across Python, TypeScript, Go, Java, Ruby, C#, and PHP with streaming, vision, prompt caching, and extended thinking support.

#### 6.1.1 Claude API Reference — Language SDKs

SDK implementations across Python, TypeScript, Go, Java, Ruby, C#, and PHP providing standardized interfaces for Claude API integration, covering client initialization, streaming, vision capabilities, prompt caching, and extended thinking. Tool automation and Agent SDK availability varies by language.

##### 6.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering installation, client initialization, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization strategies.

##### 6.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript SDK reference covering installation, client initialization, system prompts, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

##### 6.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API covering installation, client initialization, basic requests, streaming, and manual agentic loop for tool use. Tool runner and Agent SDK not yet available.

##### 6.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference including installation, client initialization, basic requests, streaming, and beta tool use with annotated classes via BetaToolRunner. Agent SDK not yet available.

##### 6.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for Claude API including installation, client initialization, basic requests, streaming, and beta tool runner for automatic tool execution. Agent SDK not yet available.

##### 6.1.1.6 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for Claude API including installation, client initialization, basic requests, and streaming. Notes that tool runner and Agent SDK are not available for C#.

##### 6.1.1.7 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API covering installation, client initialization, basic requests, and streaming. Tool runner and Agent SDK are not available for PHP.

#### 6.1.2 Streaming API Reference

Event-driven streaming implementations for Python and TypeScript enabling real-time response handling across content types including text, thinking blocks, and tool use, with progress tracking, error recovery, and raw SSE access for custom transports.

##### 6.1.2.1 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Comprehensive guide to streaming responses with the Claude API in Python, covering synchronous and asynchronous streaming, handling different content types (text, thinking blocks, tool use), progress tracking, and error handling with practical code examples.

##### 6.1.2.2 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference demonstrating event-based streaming with the Messages API, handling multiple content types including thinking blocks and tool use, tool runner integration, and raw SSE format for custom HTTP implementations.

#### 6.1.3 Files & Batches API Reference

API reference documentation for file management and asynchronous batch processing. Covers uploading and managing files with document and image support, retrieving results, and cost-optimized batch operations across Python and TypeScript implementations.

##### 6.1.3.1 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference for uploading and managing files up to 500 MB. Covers file upload, usage in messages with documents and images, listing, deletion, and end-to-end examples with citations.

##### 6.1.3.2 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference for uploading and managing files. Covers file upload, usage in messages with documents, listing, deletion, and download operations.

##### 6.1.3.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference for asynchronous batch processing at 50% cost. Covers batch creation, polling, result retrieval, cancellation, prompt caching integration, and end-to-end examples.

### 6.2 Tool Use and Agent SDK

Tool definition schemas, agentic loop patterns, structured output validation, agent instantiation, MCP server integration, and subagent delegation patterns.

#### 6.2.1 Agent SDK Reference & Patterns

Comprehensive Agent SDK documentation and implementation patterns for Python and TypeScript, covering agent instantiation, built-in tools, permission models, MCP server integration, lifecycle hooks, subagent delegation, and session persistence with async execution patterns.

##### 6.2.1.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, quick start, built-in tools, permission modes, MCP support, hooks, common options, message types, subagents, and error handling best practices.

##### 6.2.1.2 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK patterns covering basic agents, custom tools, hooks, subagents, MCP integration, permission modes, error recovery, and session resumption. Demonstrates async query patterns with ClaudeAgentOptions configuration.

##### 6.2.1.3 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns including basic agents, hooks, subagents, MCP integration, and session resumption. Shows async/await patterns with query function and message type handling.

#### 6.2.2 Tool Use API Reference

Complete tool use specifications and implementations across Python and TypeScript, including tool definition schemas, agentic loop patterns, server-side execution (code, computer use), memory integration, and structured output validation with type-safe frameworks like Pydantic and Zod.

##### 6.2.2.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Foundational concepts for tool use with Claude API including tool definitions, tool choice control, tool runner versus manual agentic loops, server-side tools (code execution, computer use), memory tool, and structured outputs with security considerations and best practices.

##### 6.2.2.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python implementation guide for tool use covering the tool runner with @beta_tool decorators, manual agentic loops, code execution with file uploads and container reuse, memory tool integration, and structured outputs using Pydantic models and strict tool schemas.

##### 6.2.2.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use implementation covering betaZodTool for type-safe tool definitions, manual agentic loops, code execution with file handling, memory tool with handler patterns, and structured outputs using Zod schemas with strict tool validation.

### 6.3 API Navigation, Models & Errors

Routing and documentation discovery for Claude API development, authoritative model identifiers with pricing and context windows, and error code resolution strategies.

#### 6.3.1 Build with Claude API Skill

Comprehensive routing and navigation system for Claude API development, including activation triggers, architectural guidance, language-specific reference navigation, and agent-assisted documentation discovery for building LLM applications.

##### 6.3.1.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude covering language detection, surface selection (single call vs. workflow vs. agent), architecture overview, current models, thinking modes, context compaction, and comprehensive reading guide for language-specific documentation.

##### 6.3.1.2 [Build with Claude API (trigger) [Skill]](system-prompts/skill-build-with-claude-api-trigger.md)

Activation criteria for the Build with Claude API skill, triggered when users request Claude API integration, mention Anthropic-specific features, or need an LLM platform without prior SDK selection.

##### 6.3.1.3 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API reference documentation with quick task routing to relevant sections for classification, streaming, tool use, batches, files, and agents.

##### 6.3.1.4 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant topics, and providing actionable guidance with code examples and documentation references.

#### 6.3.2 Claude Model Catalog & Error Reference

Authoritative reference data for Claude models and API error handling. Provides model identifiers, pricing, context windows, and comprehensive error code documentation with resolution strategies for API interactions.

##### 6.3.2.1 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, deprecated, and retired Claude models with exact model IDs, aliases, context windows, and pricing. Includes resolution table mapping user requests to correct model IDs.

##### 6.3.2.2 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for HTTP error codes returned by Claude API with common causes, fixes, and handling strategies. Covers 400, 401, 403, 404, 413, 422, 429, 500, and 529 errors with retry guidance.

---

## 7. Agent Design, Identity & Analytics

Frameworks for architecting custom agents, defining Claude Code's communication identity, supporting educational workflows, and analyzing usage patterns to surface improvement opportunities.

### 7.1 Core Claude Code Identity & Communication Style

Establishes Claude Code's foundational identity as an interactive CLI assistant, defining baseline capabilities, security boundaries, and communication norms. Responses prioritize conciseness and professional objectivity over reassurance, avoid speculative timelines, and favor editing existing artifacts over creating new ones.

#### 7.1.1 [Main system prompt (System Prompt)](system-prompts/system-prompt-main-system-prompt.md)

Core identity and capabilities of Claude Code as an interactive CLI assistant, establishing baseline behavior, security policies, and help/feedback channels.

#### 7.1.2 [Tone and style (System Prompt)](system-prompts/system-prompt-tone-and-style.md)

Establishes communication guidelines emphasizing concise CLI-appropriate responses, professional objectivity over validation, avoidance of time estimates, and preference for editing existing files over creating new ones.

#### 7.1.3 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that a specific output style is active and to follow its associated guidelines.

### 7.2 Learning & Educational Mode

Balances task completion with hands-on education by requesting human contributions to design decisions, business logic, and algorithms while providing codebase-specific insights and implementation guidance. Tracks educational progress and ensures learners understand the reasoning behind code choices rather than passively receiving solutions.

#### 7.2.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Main learning mode prompt that balances task completion with hands-on education by requesting human contributions for design decisions, business logic, and algorithms while providing guidance and educational insights.

#### 7.2.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides educational insights before and after code writing when learning mode is active, focusing on codebase-specific implementation choices rather than general programming concepts.

### 7.3 Usage Insights & Analytics

Analyzes Claude Code session data to surface friction points, identify patterns in user behavior, and recommend improvements. Extracts structured insights from transcripts including goals and satisfaction signals, categorizes recurring issues, and suggests actionable enhancements ranging from quick wins to ambitious autonomous workflows.

#### 7.3.1 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify friction points and categorize recurring issues into three categories with examples, using second-person language to address the user.

#### 7.3.2 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future opportunities in AI-assisted development by analyzing usage patterns and suggesting autonomous workflows, parallel agents, and test-driven iteration approaches.

#### 7.3.3 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from Claude Code session transcripts including user-requested goals, satisfaction signals, and friction types, with strict guidelines for counting only explicit user actions and signals.

#### 7.3.4 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations from MCP Servers, Custom Skills, Hooks, Headless Mode, and Task Agents, plus usage pattern insights tailored to user behavior.

#### 7.3.5 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Prompt for generating concise 4-part usage insights summaries covering what's working, hindrances, quick wins, and ambitious workflows for improving Claude Code usage.

### 7.4 Agent Design & Creation

Frameworks for architecting custom AI agents from user requirements, including persona design, system prompt generation with behavioral boundaries and decision-making logic, and concise action summarization in standardized formats.

#### 7.4.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user requirements, designing expert personas, architecting comprehensive system prompts with behavioral boundaries and decision-making frameworks, and generating concise identifiers. Outputs a JSON object with agent identifier, usage conditions with examples, and complete system prompt.

#### 7.4.2 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Prompt for generating concise 3-5 word agent action summaries in present tense, naming specific files or functions rather than branches or vague descriptions.
