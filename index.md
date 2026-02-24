# Claude Code System Prompts Index

Operational scaffolding for deploying Claude as an autonomous coding agent — covering everything needed to build, run, and extend agentic systems that plan, remember, coordinate, and act across real development environments.

## Table of Contents

1. [Session State, Memory & Tracking](#1-session-state-memory-tracking)
   1. [File & Hook State Notifications](#11-file-hook-state-notifications)
      1. [File State & Content System Reminders](#111-file-state-content-system-reminders)
         1. [File exists but empty (System Reminder)](#1111-file-exists-but-empty-system-reminder)
         2. [File modified by user or linter (System Reminder)](#1112-file-modified-by-user-or-linter-system-reminder)
         3. [File opened in IDE (System Reminder)](#1113-file-opened-in-ide-system-reminder)
         4. [File shorter than offset (System Reminder)](#1114-file-shorter-than-offset-system-reminder)
         5. [File truncated (System Reminder)](#1115-file-truncated-system-reminder)
         6. [Compact file reference (System Reminder)](#1116-compact-file-reference-system-reminder)
         7. [Lines selected in IDE (System Reminder)](#1117-lines-selected-in-ide-system-reminder)
         8. [New diagnostics detected (System Reminder)](#1118-new-diagnostics-detected-system-reminder)
      2. [Hook Lifecycle System Reminders](#112-hook-lifecycle-system-reminders)
         1. [Hook additional context (System Reminder)](#1121-hook-additional-context-system-reminder)
         2. [Hook blocking error (System Reminder)](#1122-hook-blocking-error-system-reminder)
         3. [Hook JSON validation failed (System Reminder)](#1123-hook-json-validation-failed-system-reminder)
         4. [Hook stopped continuation prefix (System Reminder)](#1124-hook-stopped-continuation-prefix-system-reminder)
         5. [Hook stopped continuation (System Reminder)](#1125-hook-stopped-continuation-system-reminder)
         6. [Hook success (System Reminder)](#1126-hook-success-system-reminder)
   2. [Task & Todo Tracking System Reminders and Tools](#12-task-todo-tracking-system-reminders-and-tools)
      1. [Task status (System Reminder)](#121-task-status-system-reminder)
      2. [Task tools reminder (System Reminder)](#122-task-tools-reminder-system-reminder)
      3. [Todo list changed (System Reminder)](#123-todo-list-changed-system-reminder)
      4. [Todo list empty (System Reminder)](#124-todo-list-empty-system-reminder)
      5. [TodoWrite reminder (System Reminder)](#125-todowrite-reminder-system-reminder)
      6. [TaskCreate (Tool Description)](#126-taskcreate-tool-description)
      7. [TodoWrite (Tool Description)](#127-todowrite-tool-description)
      8. [Task management (System Prompt)](#128-task-management-system-prompt)
   3. [Memory, Summarization & Session Continuity](#13-memory-summarization-session-continuity)
      1. [Memory & Session Persistence](#131-memory-session-persistence)
         1. [Memory file contents (System Reminder)](#1311-memory-file-contents-system-reminder)
         2. [Nested memory contents (System Reminder)](#1312-nested-memory-contents-system-reminder)
         3. [Session continuation (System Reminder)](#1313-session-continuation-system-reminder)
         4. [Session memory update instructions (Agent Prompt)](#1314-session-memory-update-instructions-agent-prompt)
         5. [Session memory template (Data)](#1315-session-memory-template-data)
         6. [Agent memory instructions (System Prompt)](#1316-agent-memory-instructions-system-prompt)
      2. [Conversation & Session Summarization](#132-conversation-session-summarization)
         1. [Conversation summarization (Agent Prompt)](#1321-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#1322-recent-message-summarization-agent-prompt)
         3. [Context compaction summary (System Prompt)](#1323-context-compaction-summary-system-prompt)
         4. [Tool Use Summary Generation (System Prompt)](#1324-tool-use-summary-generation-system-prompt)
         5. [Agent Summary Generation (System Prompt)](#1325-agent-summary-generation-system-prompt)
      3. [Session Management & Search](#133-session-management-search)
         1. [Session title and branch generation (Agent Prompt)](#1331-session-title-and-branch-generation-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#1332-session-search-assistant-agent-prompt)
         3. [Invoked skills (System Reminder)](#1333-invoked-skills-system-reminder)
   4. [Resource & Budget Monitoring](#14-resource-budget-monitoring)
      1. [Token usage (System Reminder)](#141-token-usage-system-reminder)
      2. [USD budget (System Reminder)](#142-usd-budget-system-reminder)
      3. [Output token limit exceeded (System Reminder)](#143-output-token-limit-exceeded-system-reminder)
2. [Planning, Workflow Automation & Skills](#2-planning-workflow-automation-skills)
   1. [Plan Mode System Reminders & Tools](#21-plan-mode-system-reminders-tools)
      1. [Exited plan mode (System Reminder)](#211-exited-plan-mode-system-reminder)
      2. [Plan file reference (System Reminder)](#212-plan-file-reference-system-reminder)
      3. [Plan mode is active (5-phase) [System Reminder]](#213-plan-mode-is-active-5-phase-system-reminder)
      4. [Plan mode is active (iterative) [System Reminder]](#214-plan-mode-is-active-iterative-system-reminder)
      5. [Plan mode is active (subagent) [System Reminder]](#215-plan-mode-is-active-subagent-system-reminder)
      6. [Plan mode re-entry (System Reminder)](#216-plan-mode-re-entry-system-reminder)
      7. [Verify plan reminder (System Reminder)](#217-verify-plan-reminder-system-reminder)
      8. [EnterPlanMode (Tool Description)](#218-enterplanmode-tool-description)
      9. [ExitPlanMode (Tool Description)](#219-exitplanmode-tool-description)
   2. [Tool Permission & Execution Policy](#22-tool-permission-execution-policy)
      1. [Tool permission mode (System Prompt)](#221-tool-permission-mode-system-prompt)
      2. [Tool execution denied (System Prompt)](#222-tool-execution-denied-system-prompt)
      3. [Tool usage policy (System Prompt)](#223-tool-usage-policy-system-prompt)
      4. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#224-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      5. [Executing actions with care (System Prompt)](#225-executing-actions-with-care-system-prompt)
   3. [Hooks Configuration & Lifecycle Automation](#23-hooks-configuration-lifecycle-automation)
      1. [Hooks Configuration (System Prompt)](#231-hooks-configuration-system-prompt)
      2. [Hook condition evaluator (Agent Prompt)](#232-hook-condition-evaluator-agent-prompt)
      3. [Agent Hook (Agent Prompt)](#233-agent-hook-agent-prompt)
   4. [Skills System](#24-skills-system)
      1. [Skill (Tool Description)](#241-skill-tool-description)
      2. [Output style active (System Reminder)](#242-output-style-active-system-reminder)
      3. [Skillify Current Session (System Prompt)](#243-skillify-current-session-system-prompt)
      4. [Create verifier skills (Skill)](#244-create-verifier-skills-skill)
      5. [Verification specialist (Skill)](#245-verification-specialist-skill)
      6. [Debugging (Skill)](#246-debugging-skill)
      7. [Update Claude Code Config (Skill)](#247-update-claude-code-config-skill)
3. [Multi-Agent Coordination & Agent Development](#3-multi-agent-coordination-agent-development)
   1. [Multi-Agent Team Coordination](#31-multi-agent-team-coordination)
      1. [Team Coordination (System Reminder)](#311-team-coordination-system-reminder)
      2. [Team Shutdown (System Reminder)](#312-team-shutdown-system-reminder)
      3. [Teammate Communication (System Prompt)](#313-teammate-communication-system-prompt)
      4. [SendMessageTool (Tool Description)](#314-sendmessagetool-tool-description)
      5. [TeammateTool (Tool Description)](#315-teammatetool-tool-description)
      6. [TeamDelete (Tool Description)](#316-teamdelete-tool-description)
      7. [TaskList (teammate workflow) [Tool Description]](#317-tasklist-teammate-workflow-tool-description)
      8. [Task (Tool Description)](#318-task-tool-description)
   2. [Agent Design & Documentation](#32-agent-design-documentation)
      1. [Agent Design & Creation](#321-agent-design-creation)
         1. [Agent creation architect (Agent Prompt)](#3211-agent-creation-architect-agent-prompt)
         2. [Claude guide agent (Agent Prompt)](#3212-claude-guide-agent-agent-prompt)
         3. [CLAUDE.md creation (Agent Prompt)](#3213-claudemd-creation-agent-prompt)
      2. [Documentation & Knowledge Management](#322-documentation-knowledge-management)
         1. [Update Magic Docs (Agent Prompt)](#3221-update-magic-docs-agent-prompt)
         2. [Plan mode (enhanced) [Agent Prompt]](#3222-plan-mode-enhanced-agent-prompt)
   3. [MCP Resource & Tool Loading](#33-mcp-resource-tool-loading)
      1. [MCP resource no content (System Reminder)](#331-mcp-resource-no-content-system-reminder)
      2. [MCP resource no displayable content (System Reminder)](#332-mcp-resource-no-displayable-content-system-reminder)
      3. [ToolSearch (Tool Description)](#333-toolsearch-tool-description)
      4. [ToolSearch extended (Tool Description)](#334-toolsearch-extended-tool-description)
      5. [Chrome browser MCP tools (System Prompt)](#335-chrome-browser-mcp-tools-system-prompt)
   4. [Usage Analytics & User Intelligence](#34-usage-analytics-user-intelligence)
      1. [Usage Insights & Analytics](#341-usage-insights-analytics)
         1. [Insights at a glance summary (System Prompt)](#3411-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#3412-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#3413-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#3414-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#3415-insights-suggestions-system-prompt)
      2. [Sentiment & Intent Analysis](#342-sentiment-intent-analysis)
         1. [User sentiment analysis (Agent Prompt)](#3421-user-sentiment-analysis-agent-prompt)
         2. [Prompt Suggestion Generator v2 (Agent Prompt)](#3422-prompt-suggestion-generator-v2-agent-prompt)
4. [Code, File & Shell Operations](#4-code-file-shell-operations)
   1. [Codebase Navigation & Search](#41-codebase-navigation-search)
      1. [File Search & Codebase Exploration](#411-file-search-codebase-exploration)
         1. [Glob (Tool Description)](#4111-glob-tool-description)
         2. [Grep (Tool Description)](#4112-grep-tool-description)
         3. [ReadFile (Tool Description)](#4113-readfile-tool-description)
         4. [Explore (Agent Prompt)](#4114-explore-agent-prompt)
         5. [Task tool (Agent Prompt)](#4115-task-tool-agent-prompt)
         6. [Task tool (extra notes) [Agent Prompt]](#4116-task-tool-extra-notes-agent-prompt)
         7. [Conditional delegate codebase exploration (System Prompt)](#4117-conditional-delegate-codebase-exploration-system-prompt)
      2. [Code Intelligence & LSP](#412-code-intelligence-lsp)
         1. [LSP (Tool Description)](#4121-lsp-tool-description)
   2. [File Editing & Writing Tools](#42-file-editing-writing-tools)
      1. [Edit (Tool Description)](#421-edit-tool-description)
      2. [Write (Tool Description)](#422-write-tool-description)
      3. [NotebookEdit (Tool Description)](#423-notebookedit-tool-description)
   3. [Bash & Shell Command Execution](#43-bash-shell-command-execution)
      1. [Bash (Tool Description)](#431-bash-tool-description)
      2. [Bash (sandbox note) [Tool Description]](#432-bash-sandbox-note-tool-description)
      3. [Bash command description writer (Agent Prompt)](#433-bash-command-description-writer-agent-prompt)
      4. [Bash command file path extraction (Agent Prompt)](#434-bash-command-file-path-extraction-agent-prompt)
      5. [Bash command prefix detection (Agent Prompt)](#435-bash-command-prefix-detection-agent-prompt)
      6. [Command execution specialist (Agent Prompt)](#436-command-execution-specialist-agent-prompt)
   4. [Browser Automation & Web Interaction](#44-browser-automation-web-interaction)
      1. [Computer (Tool Description)](#441-computer-tool-description)
      2. [Computer action (Tool Parameter)](#442-computer-action-tool-parameter)
      3. [WebFetch (Tool Description)](#443-webfetch-tool-description)
      4. [WebSearch (Tool Description)](#444-websearch-tool-description)
      5. [Claude in Chrome browser automation (System Prompt)](#445-claude-in-chrome-browser-automation-system-prompt)
      6. [WebFetch summarizer (Agent Prompt)](#446-webfetch-summarizer-agent-prompt)
   5. [Security Review & Malware Analysis](#45-security-review-malware-analysis)
      1. [/security-review slash command (Agent Prompt)](#451-security-review-slash-command-agent-prompt)
      2. [Malware analysis after Read tool call (System Reminder)](#452-malware-analysis-after-read-tool-call-system-reminder)
      3. [Censoring assistance with malicious activities (System Prompt)](#453-censoring-assistance-with-malicious-activities-system-prompt)
5. [Claude API, SDKs & Developer Reference](#5-claude-api-sdks-developer-reference)
   1. [Claude API SDK Reference Documentation](#51-claude-api-sdk-reference-documentation)
      1. [Claude API reference — Python (Data)](#511-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#512-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#513-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#514-claude-api-reference-—-java-data)
      5. [Claude API reference — Ruby (Data)](#515-claude-api-reference-—-ruby-data)
      6. [Claude API reference — PHP (Data)](#516-claude-api-reference-—-php-data)
      7. [Claude API reference — C# (Data)](#517-claude-api-reference-—-c-data)
   2. [Agent SDK Reference & Patterns](#52-agent-sdk-reference-patterns)
      1. [Agent SDK reference — Python (Data)](#521-agent-sdk-reference-—-python-data)
      2. [Agent SDK reference — TypeScript (Data)](#522-agent-sdk-reference-—-typescript-data)
      3. [Agent SDK patterns — Python (Data)](#523-agent-sdk-patterns-—-python-data)
      4. [Agent SDK patterns — TypeScript (Data)](#524-agent-sdk-patterns-—-typescript-data)
   3. [Tool Use, Streaming & Batch APIs](#53-tool-use-streaming-batch-apis)
      1. [Tool Use & Streaming API References](#531-tool-use-streaming-api-references)
         1. [Tool use concepts (Data)](#5311-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#5312-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#5313-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#5314-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#5315-streaming-reference-—-typescript-data)
      2. [Files & Batches API References](#532-files-batches-api-references)
         1. [Files API reference — Python (Data)](#5321-files-api-reference-—-python-data)
         2. [Files API reference — TypeScript (Data)](#5322-files-api-reference-—-typescript-data)
         3. [Message Batches API reference — Python (Data)](#5323-message-batches-api-reference-—-python-data)
   4. [API Reference & Integration Routing](#54-api-reference-integration-routing)
      1. [Claude Model & API Reference](#541-claude-model-api-reference)
         1. [Claude model catalog (Data)](#5411-claude-model-catalog-data)
         2. [HTTP error codes reference (Data)](#5412-http-error-codes-reference-data)
         3. [Claude Code version mismatch warning (Data)](#5413-claude-code-version-mismatch-warning-data)
      2. [Build with Claude API Skill](#542-build-with-claude-api-skill)
         1. [Build with Claude API (Skill)](#5421-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#5422-build-with-claude-api-reference-guide-skill)
         3. [Build with Claude API (trigger) [Skill]](#5423-build-with-claude-api-trigger-skill)
         4. [Live documentation sources (Data)](#5424-live-documentation-sources-data)
   5. [GitHub Integration & CI/CD](#55-github-integration-cicd)
      1. [GitHub Actions workflow for @claude mentions (Data)](#551-github-actions-workflow-for-claude-mentions-data)
      2. [GitHub App installation PR description (Data)](#552-github-app-installation-pr-description-data)
   6. [Git Operations & Version Control](#56-git-operations-version-control)
      1. [Bash (Git commit and PR creation instructions) [Tool Description]](#561-bash-git-commit-and-pr-creation-instructions-tool-description)
      2. [Quick git commit (Agent Prompt)](#562-quick-git-commit-agent-prompt)
      3. [Quick PR creation (Agent Prompt)](#563-quick-pr-creation-agent-prompt)
      4. [/pr-comments slash command (Agent Prompt)](#564-pr-comments-slash-command-agent-prompt)
      5. [/review-pr slash command (Agent Prompt)](#565-review-pr-slash-command-agent-prompt)
      6. [Git status (System Prompt)](#566-git-status-system-prompt)
      7. [EnterWorktree (Tool Description)](#567-enterworktree-tool-description)
6. [Core Identity, Configuration & Learning](#6-core-identity-configuration-learning)
   1. [Core Claude Code Identity & Behavior](#61-core-claude-code-identity-behavior)
      1. [Main system prompt (System Prompt)](#611-main-system-prompt-system-prompt)
      2. [Tone and style (System Prompt)](#612-tone-and-style-system-prompt)
      3. [Doing tasks (System Prompt)](#613-doing-tasks-system-prompt)
      4. [/btw side question (System Reminder)](#614-btw-side-question-system-reminder)
   2. [System Configuration & Utilities](#62-system-configuration-utilities)
      1. [Scratchpad directory (System Prompt)](#621-scratchpad-directory-system-prompt)
      2. [Status line setup (Agent Prompt)](#622-status-line-setup-agent-prompt)
      3. [Option previewer (System Prompt)](#623-option-previewer-system-prompt)
      4. [AskUserQuestion (Tool Description)](#624-askuserquestion-tool-description)
      5. [Sleep (Tool Description)](#625-sleep-tool-description)
      6. [Agent mention (System Reminder)](#626-agent-mention-system-reminder)
   3. [Learning Mode](#63-learning-mode)
      1. [Learning mode (System Prompt)](#631-learning-mode-system-prompt)
      2. [Learning mode (insights) [System Prompt]](#632-learning-mode-insights-system-prompt)

---

## 1. Session State, Memory & Tracking

Runtime state management covering file changes, hook execution feedback, task progress, resource budgets, conversation memory, and session organization. These clusters handle the bookkeeping that keeps Claude oriented across complex, multi-step work.

### 1.1 File & Hook State Notifications

System reminders that notify Claude of file content changes, external edits, truncation limits, and hook execution outcomes including errors and validation failures.

#### 1.1.1 File State & Content System Reminders

Notifies Claude of file state changes, content modifications, and access constraints. Covers empty files, external edits, IDE interactions, truncation due to size limits, and diagnostic updates, directing appropriate tool use for large content access.

##### 1.1.1.1 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns that a file exists but contains no content.

##### 1.1.1.2 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by user or linter and shows relevant changes with line numbers, instructing Claude to account for the changes without reverting unless requested.

##### 1.1.1.3 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 1.1.1.4 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns that a file read offset exceeds the file length and reports the actual file line count.

##### 1.1.1.5 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a file was truncated to a maximum line limit due to size, instructing silent handling and directing use of the Read tool for additional content.

##### 1.1.1.6 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before conversation summarization but is too large to include, directing use of the Read tool for access.

##### 1.1.1.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of specific lines selected by the user in the IDE with truncated content display, noting possible relevance to the current task.

##### 1.1.1.8 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues with a summary.

#### 1.1.2 Hook Lifecycle System Reminders

Reports hook execution outcomes including success, errors, validation failures, and continuation states. Provides structured feedback on hook JSON schema compliance and blocking command errors.

##### 1.1.2.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution.

##### 1.1.2.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

##### 1.1.2.3 [Hook JSON validation failed (System Reminder)](system-prompts/system-reminder-hook-json-validation-failed.md)

Reports hook JSON output validation failures with detailed schema information, including expected structure for PreToolUse, UserPromptSubmit, and PostToolUse hook events.

##### 1.1.2.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for hook stopped continuation messages.

##### 1.1.2.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Reports that a hook has stopped continuation with an associated message.

##### 1.1.2.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful hook execution with content message.

### 1.2 Task & Todo Tracking System Reminders and Tools

Enables structured progress tracking for multi-step work through task creation, todo list management, and state transitions. Provides tools and reminders to organize complex sessions and mark work completion.

#### 1.2.1 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

#### 1.2.2 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task creation and update tools for tracking progress on ongoing work, with instruction not to mention this to the user.

#### 1.2.3 [Todo list changed (System Reminder)](system-prompts/system-reminder-todo-list-changed.md)

Notifies Claude of todo list changes without explicit user mention and instructs continuation of applicable tasks.

#### 1.2.4 [Todo list empty (System Reminder)](system-prompts/system-reminder-todo-list-empty.md)

Reminds Claude that the todo list is empty and suggests creating one if task tracking would be beneficial, with instruction not to mention this to the user.

#### 1.2.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use the TodoWrite tool for progress tracking on ongoing tasks, with instruction not to mention this reminder to the user.

#### 1.2.6 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress and organize complex multi-step work. Use proactively for complex tasks, plan mode, or when users provide multiple items; skip for single trivial tasks.

#### 1.2.7 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with states (pending, in_progress, completed) to track progress and organize multi-step work. Requires both imperative and present-continuous forms for task descriptions.

#### 1.2.8 [Task management (System Prompt)](system-prompts/system-prompt-task-management.md)

Instructs Claude to frequently use task management tools for planning, tracking progress, and marking todos as completed immediately upon finishing each task.

### 1.3 Memory, Summarization & Session Continuity

Mechanisms for preserving and compressing conversation context across sessions, including structured memory files, conversation summarization, and session search and retrieval.

#### 1.3.1 Memory & Session Persistence

Mechanisms for preserving conversation state and context across sessions, including structured memory files that capture task progress, discoveries, and actionable insights. Enables continuity when work resumes on different machines or after interruptions.

##### 1.3.1.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path with type description.

##### 1.3.1.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file.

##### 1.3.1.3 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

##### 1.3.1.4 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by preserving structure and section headers while adding detailed, info-dense content from conversations, maintaining token limits and focusing on actionable information.

##### 1.3.1.5 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing current state, task specification, files, workflow, errors, codebase documentation, learnings, key results, and worklog.

##### 1.3.1.6 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidelines for including domain-specific memory update instructions in agent system prompts to build institutional knowledge across conversations.

#### 1.3.2 Conversation & Session Summarization

Structured extraction and compression of conversation history into focused summaries capturing requests, technical work, errors, and next steps. Maintains essential context while reducing token overhead during continuation or compaction.

##### 1.3.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized by primary request, technical concepts, files modified, errors encountered, user messages, pending tasks, and current work with code snippets and next steps.

##### 1.3.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions by capturing requests, technical concepts, file changes, errors, user messages, and pending tasks while preserving earlier retained context.

##### 1.3.2.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for generating continuation summaries during context compaction, structuring task overview, current state, discoveries, next steps, and context preservation for resumption.

##### 1.3.2.4 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Generates brief past-tense summaries of tool usage outcomes in under 8 words, focusing on user-visible results without implementation details.

##### 1.3.2.5 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word action summaries in present tense, naming specific files or functions rather than branches or vague descriptions.

#### 1.3.3 Session Management & Search

Organization and retrieval of sessions through naming conventions, metadata tagging, and semantic search. Enables efficient navigation of work history and recovery of relevant prior context.

##### 1.3.3.1 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles and git branch names from session descriptions using sentence case for titles and claude/-prefixed lowercase dash-separated names for branches.

##### 1.3.3.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions by prioritizing user-assigned tags, then matching titles, branches, summaries, and transcripts with semantic similarity, returning inclusive results ordered by relevance.

##### 1.3.3.3 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked during the session and instructs Claude to continue following their guidelines.

### 1.4 Resource & Budget Monitoring

Real-time tracking of computational and financial resource consumption, including token usage and USD costs. Alerts when limits are approached or exceeded, enabling graceful degradation and work segmentation.

#### 1.4.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

#### 1.4.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing used, total, and remaining budget.

#### 1.4.3 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Notifies Claude that its response was truncated due to exceeding the output token limit and instructs it to break work into smaller pieces.

---

## 2. Planning, Workflow Automation & Skills

Structured approaches to organizing and automating Claude's work, from enforced planning phases and permission-gated execution to reusable skill commands and event-driven lifecycle hooks.

### 2.1 Plan Mode System Reminders & Tools

Enforces structured planning workflows before implementation through read-only exploration, design review, and user approval gates. Supports multiple planning modes (5-phase, iterative, subagent) with tools to enter, exit, and verify plan completion.

#### 2.1.1 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and actions, edits, and tools are now available, with optional reference to the plan file location.

#### 2.1.2 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from a previous planning session and instructs Claude to continue working on it if relevant.

#### 2.1.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Enforces plan mode with a structured 5-phase workflow: initial understanding, design, review, final plan, and exit. Supports parallel subagent exploration and requires read-only operations until plan completion.

#### 2.1.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Enables iterative pair-planning with the user through a loop of exploration, plan updates, and targeted questions. Emphasizes incremental plan refinement and user engagement before implementation.

#### 2.1.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Restricts subagents to read-only operations and plan file editing during plan mode, requiring clarifying questions before proceeding with analysis.

#### 2.1.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Guides Claude when re-entering plan mode after previous exit, requiring evaluation of existing plan against new request and appropriate plan file updates.

#### 2.1.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify plan completion by calling a verification tool directly after implementation is finished.

#### 2.1.8 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Instructs Claude to proactively use EnterPlanMode for non-trivial implementation tasks to explore the codebase and design approaches for user approval before coding. The tool should be used for new features, multiple valid approaches, code modifications, architectural decisions, multi-file changes, unclear requirements, or when user preferences matter, but skipped for simple fixes or research-only tasks.

#### 2.1.9 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning and requests user approval by reading the plan file and presenting it for review. Use only for implementation tasks requiring code, not for research or exploration, and do not use AskUserQuestion to ask for plan approval since ExitPlanMode inherently requests it.

### 2.2 Tool Permission & Execution Policy

Permission-gated tool execution enforces user-controlled access to restricted capabilities, with fallback strategies for denied operations and safety guardrails requiring confirmation before irreversible actions affecting shared systems or codebase state.

#### 2.2.1 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains that tools operate in user-selected permission modes requiring approval for restricted tools, and instructs Claude not to retry denied calls but adjust approach instead.

#### 2.2.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable workarounds when tool execution is denied, but not to bypass restrictions maliciously, and to ask the user if the capability is essential.

#### 2.2.3 [Tool usage policy (System Prompt)](system-prompts/system-prompt-tool-usage-policy.md)

Establishes policies for tool usage including parallel execution for independent operations, preference for specialized tools over bash commands, and guidelines for file operations and codebase exploration.

#### 2.2.4 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls when independent and use sequential execution only when dependencies exist between operations.

#### 2.2.5 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to carefully evaluate the reversibility and blast radius of actions, requiring user confirmation before executing risky operations like destructive file changes, force-pushes, or actions affecting shared systems, while freely taking local reversible actions.

### 2.3 Hooks Configuration & Lifecycle Automation

Event-driven automation framework executes commands or evaluations at key Claude Code lifecycle points, enabling transparent workflows like auto-formatting, test execution, and permission validation without interrupting user interaction.

#### 2.3.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines lifecycle hooks that run commands or LLM evaluations at specific Claude Code events (PreToolUse, PostToolUse, SessionStart, etc.), enabling automation like auto-formatting, test execution, and permission checks with configurable matchers and JSON output control.

#### 2.3.2 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code by returning JSON indicating whether conditions are met or providing reasons for failure.

#### 2.3.3 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and codebase state, returning structured output confirming whether an agent completed its assigned plan.

### 2.4 Skills System

Reusable skill framework captures workflows as slash commands with structured execution logic, supporting specialized tasks like code verification, debugging, and configuration management while enabling skill creation through guided interviews.

#### 2.4.1 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation, matching user requests to available skills and invoking them with optional arguments. Requires calling this tool before generating other responses when a skill matches the user's request.

#### 2.4.2 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that an output style is active and instructs adherence to its specific guidelines.

#### 2.4.3 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-round interview process to capture the current session as a reusable skill, analyzing the workflow, confirming details with the user, and generating a SKILL.md file with execution instructions and success criteria.

#### 2.4.4 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase process for creating verifier skills for automated code verification, including project auto-detection, tool setup (Playwright, Tmux, HTTP), interactive Q&A for authentication and configuration, and skill file generation with appropriate allowed-tools.

#### 2.4.5 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering verifier skills, analyzing git changes, creating deterministic verification plans, and triggering verifier execution with detailed failure reporting.

#### 2.4.6 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in Claude Code sessions by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

#### 2.4.7 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code configuration in settings.json, covering hooks, permissions, environment variables, and MCP server configuration. Emphasizes reading before writing and merging with existing settings.

---

## 3. Multi-Agent Coordination & Agent Development

Infrastructure for building and running multi-agent systems, from coordinating parallel agent swarms to designing agent personas, managing MCP tool loading, and analyzing usage patterns.

### 3.1 Multi-Agent Team Coordination

Coordinates parallel work across swarms of specialized agents through team creation, task distribution, and message-based communication. Manages agent lifecycle, shutdown protocols, and resource cleanup.

#### 3.1.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity as a team member, provides team resources and configuration paths, and instructs communication with teammates by name rather than UUID.

#### 3.1.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully before returning a final response in non-interactive mode.

#### 3.1.3 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Requires Claude running as an agent in a team to use SendMessage tool for all teammate communication, with message and broadcast types for coordination.

#### 3.1.4 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to teammates in a swarm, supporting direct messages, broadcasts, shutdown requests/responses, and plan approval responses. Emphasizes using direct messages over broadcasts to minimize API costs and requires using the tool for all team communication.

#### 3.1.5 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages team creation and coordination for multi-agent swarms, enabling parallel work through task lists, teammate assignment, and message-based communication. Teams correspond 1:1 with task lists and support idle state management and peer collaboration.

#### 3.1.6 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completes, cleaning up `~/.claude/teams/` and `~/.claude/tasks/` directories. Requires all teammates to be shut down first.

#### 3.1.7 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for accessing task lists, claiming pending unblocked tasks by ID order, and coordinating work through task ownership and status updates.

#### 3.1.8 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents to handle complex tasks like research, exploration, and implementation. Supports concurrent agent execution, background task mode, agent resumption, and optional worktree isolation for independent work.

### 3.2 Agent Design & Documentation

Tools for designing custom AI agents including system prompt architecture, persona engineering, codebase analysis for documentation generation, and knowledge base management.

#### 3.2.1 Agent Design & Creation

Tools for designing, documenting, and specifying custom AI agents. Covers system prompt architecture, persona engineering, codebase analysis for documentation generation, and SDK/API guidance to align agent implementations with project standards.

##### 3.2.1.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user requirements, designing expert personas, architecting comprehensive system prompts, optimizing performance, and generating JSON specifications with identifiers, usage examples, and operational instructions aligned to project standards.

##### 3.2.1.2 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Provides documentation-based guidance on Claude Code, Claude Agent SDK, and Claude API by fetching official docs, identifying relevant topics, and offering actionable examples with keyboard shortcuts and capabilities.

##### 3.2.1.3 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md documentation by extracting build/test commands, high-level architecture, and integrating existing Cursor/Copilot rules and README content.

#### 3.2.2 Documentation & Knowledge Management

Manages living documentation and architectural planning. Captures learnings into structured knowledge bases while supporting read-only exploration of codebases to design implementation strategies with documented trade-offs.

##### 3.2.2.1 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Prompt for updating Magic Doc files with new learnings from conversations, emphasizing terseness, architecture focus, and in-place updates while preserving headers and removing outdated information.

##### 3.2.2.2 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only planning agent that explores codebases, designs implementation strategies, identifies critical files, and documents step-by-step plans with architectural trade-offs without modifying code.

### 3.3 MCP Resource & Tool Loading

Discovery and activation of deferred tools and external resources through prerequisite loading mechanisms. Enables access to specialized capabilities like browser automation by explicitly loading tool definitions before use.

#### 3.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates an MCP resource has no content available.

#### 3.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates an MCP resource exists but has no displayable content.

#### 3.3.3 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite tool for loading deferred tools before use, supporting keyword search and direct selection modes. Deferred tools are unavailable until loaded through this tool.

#### 3.3.4 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage guide for ToolSearch supporting keyword search, direct selection, and required keyword modes to load deferred tools. Emphasizes that both query modes load tools equally and that follow-up select calls are redundant after keyword searches.

#### 3.3.5 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use, requiring explicit tool loading before calling mcp__claude-in-chrome__* tools.

### 3.4 Usage Analytics & User Intelligence

Analytical frameworks extracting insights from session data, detecting user sentiment and intent, and delivering coaching-style recommendations for workflow optimization.

#### 3.4.1 Usage Insights & Analytics

Analytical framework extracting structured insights from Claude Code session data to identify usage patterns, friction points, and opportunities for workflow optimization, delivering coaching-style recommendations tailored to individual user behavior.

##### 3.4.1.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part usage insights summary covering what's working, friction points, quick wins, and ambitious workflows for Claude Code users, using aggregated session data to provide coaching-style recommendations.

##### 3.4.1.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize recurring friction patterns, producing three friction categories with examples and explanations for user improvement.

##### 3.4.1.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies three ambitious future opportunities for autonomous AI-assisted development workflows based on usage data, including descriptions of what's possible and copyable prompts to try.

##### 3.4.1.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including goal categories, user satisfaction signals, and friction types, with strict guidelines to count only explicit user requests and genuine satisfaction indicators.

##### 3.4.1.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents), and usage patterns tailored to user's actual session data.

#### 3.4.2 Sentiment & Intent Analysis

Analyzes user communication patterns to extract emotional state and predict next actions. Detects frustration and explicit requests while generating contextually appropriate follow-up suggestions based on conversation history.

##### 3.4.2.1 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes user frustration and explicit pull request creation requests from conversation history, outputting boolean flags for sentiment and PR intent.

##### 3.4.2.2 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on conversation context, suggesting specific follow-up commands users would likely type without offering evaluations or Claude-voice suggestions.

---

## 4. Code, File & Shell Operations

Hands-on development tooling for reading, editing, and navigating codebases alongside shell command execution, browser automation, security review, and IDE-level code intelligence.

### 4.1 Codebase Navigation & Search

Read-only codebase exploration using pattern matching, regex search, file reading, and LSP-powered symbol navigation to locate code and analyze architecture.

#### 4.1.1 File Search & Codebase Exploration

Read-only codebase navigation using pattern matching, regex search, and file reading to rapidly locate code, answer architecture questions, and analyze structure. Supports both direct tool use and delegated multi-step exploration via subagents.

##### 4.1.1.1 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like `**/*.js` to find files by name, returning results sorted by modification time. Use for targeted searches; prefer the Agent tool for open-ended multi-round searches.

##### 4.1.1.2 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful ripgrep-based search tool for content matching with regex support, file filtering by glob or type, and multiple output modes. Always use this tool instead of bash grep commands; supports multiline patterns and is optimized for correct permissions.

##### 4.1.1.3 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges for large files), and Jupyter notebooks. Uses absolute paths, defaults to reading full files, and truncates lines exceeding character limits.

##### 4.1.1.4 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only codebase exploration agent using glob patterns, regex search, and file reading to rapidly find files, answer architecture questions, and analyze code without modifying files.

##### 4.1.1.5 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

System prompt for a general-purpose subagent that searches code, analyzes files, and executes multi-step research tasks using Grep, Glob, and Read tools while avoiding unnecessary file creation.

##### 4.1.1.6 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Guidelines for Task tool usage requiring absolute file paths, relevant file names and code snippets in responses, no emojis, and no colons before tool calls.

##### 4.1.1.7 [Conditional delegate codebase exploration (System Prompt)](system-prompts/system-prompt-conditional-delegate-codebase-exploration.md)

Instructions for when to use the Explore subagent versus calling tools directly, delegating broader codebase exploration and deep research to the subagent.

#### 4.1.2 Code Intelligence & LSP

Language Server Protocol integration enables IDE-like code navigation and analysis, including definition lookup, reference finding, symbol discovery, and call hierarchy traversal across codebases.

##### 4.1.2.1 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Provides code intelligence via Language Server Protocol, supporting operations like goToDefinition, findReferences, hover, documentSymbol, workspaceSymbol, goToImplementation, and call hierarchy analysis. Requires LSP server configuration for the file type.

### 4.2 File Editing & Writing Tools

Direct filesystem modification through string replacement, file creation, and Jupyter notebook cell editing. Prioritizes editing existing files over creating new ones and supports interactive notebook workflows.

#### 4.2.1 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Describes the Edit tool for performing exact string replacements in files, emphasizing preservation of indentation, preference for editing existing files, and proper handling of non-unique matches.

#### 4.2.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem using absolute paths, overwriting existing files. Prefers editing existing files over creating new ones and avoids proactively creating documentation unless explicitly requested.

#### 4.2.3 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing contents, inserting new cells, or deleting cells using 0-indexed cell numbers and absolute file paths. Supports interactive notebook workflows combining code, text, and visualizations.

### 4.3 Bash & Shell Command Execution

Bash execution framework with safety sandboxing, command analysis, and specialized agents for parsing output and detecting injection risks. Emphasizes delegating file operations and text processing to dedicated tools rather than shell commands.

#### 4.3.1 [Bash (Tool Description)](system-prompts/tool-description-bash.md)

Describes the bash tool for executing shell commands with directory verification, proper quoting, timeout configuration, and parallel execution guidance. Emphasizes preferring specialized tools over bash for file operations and common text processing.

#### 4.3.2 [Bash (sandbox note) [Tool Description]](system-prompts/tool-description-bash-sandbox-note.md)

Defines sandbox security defaults for bash commands and conditions for disabling sandbox protection, emphasizing that override requires explicit user request or clear evidence of sandbox-caused failure.

#### 4.3.3 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions for bash commands, keeping simple commands brief while adding context for complex piped or flag-heavy operations.

#### 4.3.4 [Bash command file path extraction (Agent Prompt)](system-prompts/agent-prompt-bash-command-file-path-extraction.md)

Extracts file paths from bash command output by determining whether commands display file contents, returning paths only when content is shown and excluding metadata-only operations.

#### 4.3.5 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands, classifying safety risks and returning prefix strings or injection warnings for allowlist enforcement.

#### 4.3.6 [Command execution specialist (Agent Prompt)](system-prompts/agent-prompt-command-execution-specialist.md)

Executes bash commands safely and efficiently, following git protocols, reporting output clearly, and suggesting solutions for failures using command chaining and proper quoting.

### 4.4 Browser Automation & Web Interaction

Web interaction capabilities combining Chrome browser automation with content fetching and search. Enables UI interaction via mouse and keyboard, web content extraction and summarization, and current information retrieval beyond knowledge cutoffs.

#### 4.4.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the computer automation tool for controlling a Chrome browser via mouse, keyboard, and screenshots, with guidance on precise element clicking and cursor positioning.

#### 4.4.2 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for Chrome browser automation including clicks, typing, scrolling, keyboard input, dragging, zooming, and hover interactions.

#### 4.4.3 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a small model. Supports URL redirects, includes a 15-minute cache, and prefers MCP-provided alternatives when available.

#### 4.4.4 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for up-to-date information beyond Claude's knowledge cutoff, returning results as markdown hyperlinks. Requires mandatory Sources section in responses and uses current year in search queries.

#### 4.4.5 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for using Claude in Chrome browser automation tools effectively, covering GIF recording, console debugging, alert handling, avoiding loops, and tab context management.

#### 4.4.6 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content with strict character limits on quotes, proper attribution, and license respect while avoiding legal commentary and song lyrics.

### 4.5 Security Review & Malware Analysis

Security-focused analysis capabilities identify exploitable vulnerabilities in code changes while maintaining strict boundaries around malicious code—permitting analysis and reporting but refusing to improve or augment threats or assist with destructive attacks.

#### 4.5.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities in input validation, authentication, cryptography, injection, and data exposure with confidence scoring and false-positive filtering.

#### 4.5.2 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware when encountered but refuse to improve or augment malicious code, while permitting analysis, reporting, and behavioral questions.

#### 4.5.3 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, defensive security, and CTF challenges while refusing requests for destructive attacks, DoS, supply chain compromise, or detection evasion.

---

## 5. Claude API, SDKs & Developer Reference

Comprehensive documentation and reference material for integrating Claude via API and SDKs, covering language-specific clients, tool use patterns, streaming, batch processing, and GitHub CI/CD integration.

### 5.1 Claude API SDK Reference Documentation

Language-specific SDK references for integrating Claude across Python, TypeScript, Go, Java, Ruby, PHP, and C#. Each covers installation, client initialization, basic requests, streaming, and tool use patterns tailored to the language's idioms and frameworks.

#### 5.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python SDK reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

#### 5.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript SDK reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization.

#### 5.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for the Claude API including installation, client initialization, basic requests, streaming, and manual agentic loop for tool use.

#### 5.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering installation, client initialization, basic requests, streaming, and beta tool use with annotated classes and BetaToolRunner.

#### 5.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for the Claude API including installation, client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

#### 5.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for the Claude API covering installation, client initialization, basic requests, streaming, and manual tool use.

#### 5.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for the Claude API covering installation, client initialization, basic requests, streaming, and manual tool use with JSON schema.

### 5.2 Agent SDK Reference & Patterns

Comprehensive guides for building autonomous agents with Python and TypeScript Agent SDKs, covering query interfaces, built-in tools, permission models, MCP integration, and practical implementation patterns including hooks, subagents, and session management.

#### 5.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Comprehensive Python Agent SDK reference covering installation, query interface, ClaudeSDKClient, built-in tools, permission modes, MCP support, hooks, and best practices.

#### 5.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Comprehensive TypeScript Agent SDK reference including installation, query interface, built-in tools, permission modes, MCP integration, hooks, and best practices.

#### 5.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Python Agent SDK code patterns covering basic agents, custom tools via MCP, hooks, subagents, permission modes, error recovery, and session resumption with practical examples.

#### 5.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript Agent SDK patterns demonstrating hooks, subagents, MCP server integration, and session resumption with code examples.

### 5.3 Tool Use, Streaming & Batch APIs

Technical references for tool definitions, real-time streaming responses, file uploads, and asynchronous batch processing with cost optimization through prompt caching.

#### 5.3.1 Tool Use & Streaming API References

Technical references for extending Claude's capabilities through tool definitions and real-time response handling. Covers tool runners, manual agentic loops, code execution, structured outputs, and streaming event handling across Python and TypeScript with best practices for production use.

##### 5.3.1.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool definitions, tool choice options, tool runner vs manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool use.

##### 5.3.1.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference covering tool runner with @beta_tool decorator, manual agentic loops, code execution with file uploads and container reuse, memory tool implementation, and structured outputs with Pydantic and strict tool use.

##### 5.3.1.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with betaZodTool and Zod schemas, manual agentic loops, code execution with file uploads and container reuse, memory tool with handlers, and structured outputs with Zod validation.

##### 5.3.1.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference covering sync/async streaming, handling thinking blocks and tool use, progress tracking, error handling, and stream event types. Includes best practices for token management and timeout protection.

##### 5.3.1.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference with basic streaming, handling different content types including thinking and tool use, tool runner integration, and raw SSE format. Covers event types and best practices for web UIs.

#### 5.3.2 Files & Batches API References

APIs for managing file uploads and asynchronous batch processing. Files API enables document and image handling in messages; Batches API processes multiple requests efficiently with cost optimization through prompt caching and container reuse.

##### 5.3.2.1 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages with documents and images, file management operations, and end-to-end examples.

##### 5.3.2.2 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages with documents, file listing, deletion, and download operations.

##### 5.3.2.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python SDK reference for the Batches API, covering batch creation, status polling, result retrieval, and container reuse. Includes full end-to-end example and prompt caching integration for 50% cost reduction.

### 5.4 API Reference & Integration Routing

Authoritative model specifications, pricing, error codes, and the routing framework for navigating to language-specific documentation and architecture guidance.

#### 5.4.1 Claude Model & API Reference

Authoritative reference data for Claude models and API interactions, including model specifications, pricing, context windows, error codes, and troubleshooting guidance for common API failures.

##### 5.4.1.1 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and retired Claude models with exact model IDs, aliases, context windows, pricing, and user request resolution mapping.

##### 5.4.1.2 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes with common causes, handling strategies, and fixes for validation errors, rate limiting, and service issues.

##### 5.4.1.3 [Claude Code version mismatch warning (Data)](system-prompts/data-claude-code-version-mismatch-warning.md)

Warning message displayed when Claude Code CLI version is outdated, instructing users to run the update command.

#### 5.4.2 Build with Claude API Skill

Routing and activation framework for Claude API integration, providing architecture guidance, model selection, and language-specific documentation navigation. Includes live documentation sources and trigger conditions for SDK-based development.

##### 5.4.2.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs workflow vs agent), architecture overview, current models, thinking/effort parameters, compaction, and reading guide for language-specific documentation.

##### 5.4.2.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Template for presenting language-specific Claude API reference documentation with quick task navigation, mapping common use cases to relevant documentation sections.

##### 5.4.2.3 [Build with Claude API (trigger) [Skill]](system-prompts/skill-build-with-claude-api-trigger.md)

Activation criteria for the Build with Claude API skill, triggered when code imports anthropic or @anthropic-ai/sdk SDKs, or user explicitly requests Claude API integration.

##### 5.4.2.4 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Curated WebFetch URLs for retrieving current Claude API and Agent SDK documentation from platform.claude.com and GitHub repositories, with extraction prompts for each topic. Includes fallback strategy when WebFetch fails.

### 5.5 GitHub Integration & CI/CD

Automation infrastructure for integrating Claude Code into GitHub workflows, enabling AI-assisted development through @claude mentions in issues and pull requests with configurable permissions and security controls.

#### 5.5.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues and pull requests with configurable permissions and custom prompts.

#### 5.5.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, workflow behavior, security, and tool configuration.

### 5.6 Git Operations & Version Control

Tools and agents for managing git workflows, from creating commits and pull requests to reviewing code and displaying repository state. Supports branch isolation via worktrees, enforces safety protocols, and integrates with GitHub for collaborative development.

#### 5.6.1 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive guide for creating git commits and GitHub pull requests via bash, emphasizing safety protocols, commit message best practices, and PR workflow. Includes restrictions on destructive operations and requirements for explicit user authorization.

#### 5.6.2 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates single git commits with pre-populated context by analyzing staged changes, drafting messages aligned to repository style, and executing commits with safety protocols and attribution.

#### 5.6.3 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates commits and pull requests with pre-populated context, handling branch creation, commit messages, PR details, and optional Slack notifications while enforcing git safety protocols.

#### 5.6.4 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and review comments with file context, diff hunks, and threaded replies using GitHub CLI and API.

#### 5.6.5 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Reviews GitHub pull requests by fetching PR details and diffs, analyzing code quality, style, security, test coverage, and providing actionable improvement suggestions.

#### 5.6.6 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git repository state at conversation start, including branch, main branch reference, status output, and recent commits.

#### 5.6.7 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, only when the user explicitly requests worktree usage. Works in git repositories or with VCS-agnostic hooks, creating a new branch-based worktree in `.claude/worktrees/`.

---

## 6. Core Identity, Configuration & Learning

Foundational behavioral guidelines, system configuration utilities, and educational frameworks that define how Claude Code operates, presents itself, and teaches users.

### 6.1 Core Claude Code Identity & Behavior

Foundational behavioral guidelines defining Claude Code as a CLI-native software engineering assistant, establishing communication style, task execution principles, security constraints, and interaction patterns.

#### 6.1.1 [Main system prompt (System Prompt)](system-prompts/system-prompt-main-system-prompt.md)

Defines Claude Code's core identity as an interactive CLI assistant for software engineering tasks, with security policies and help/feedback guidance.

#### 6.1.2 [Tone and style (System Prompt)](system-prompts/system-prompt-tone-and-style.md)

Establishes communication guidelines emphasizing concise CLI-appropriate responses, technical accuracy over validation, avoidance of time estimates, and preference for editing existing files over creating new ones.

#### 6.1.3 [Doing tasks (System Prompt)](system-prompts/system-prompt-doing-tasks.md)

Instructions for performing software engineering tasks, emphasizing reading code before modification, avoiding security vulnerabilities, preventing over-engineering, and maintaining simplicity.

#### 6.1.4 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude to answer a one-off side question directly without tools, based only on conversation context, and to avoid promising any actions or investigations.

### 6.2 System Configuration & Utilities

Foundational system behaviors and tools for execution control, file management, user interaction, and terminal customization. Enables session isolation, status display configuration, multi-option previewing, and controlled execution pausing.

#### 6.2.1 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Directs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of /tmp, avoiding permission prompts.

#### 6.2.2 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting shell PS1 configurations, converting escape sequences to shell commands, and updating settings with dynamic context including model, workspace, tokens, and vim mode.

#### 6.2.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layouts for presenting multiple UI or code options, using markdown field for ASCII mockups, diagrams, and configuration examples in single-select questions.

#### 6.2.4 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying ambiguous instructions, and obtaining decisions during execution. Includes plan mode guidance distinguishing between requirement clarification and plan approval.

#### 6.2.5 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input, receiving periodic tick prompts to check for useful work. Preferred over bash sleep as it avoids holding shell processes.

#### 6.2.6 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent type and instructs it to invoke the agent with required context.

### 6.3 Learning Mode

Educational collaboration framework that engages users in design decisions and implementation choices during code generation, using structured prompts and contextual teaching to build understanding through active participation.

#### 6.3.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Enables collaborative learning by requesting human contributions for design decisions and business logic in code generation, using TodoList tracking and structured "Learn by Doing" requests with guidance and context.

#### 6.3.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code generation in learning mode, highlighting 2-3 key implementation choices specific to the codebase.
