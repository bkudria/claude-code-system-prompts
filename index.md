# Claude Code System Prompts Index

Operational documentation for deploying Claude as an autonomous engineering assistant, covering everything needed to build, configure, and extend AI-driven development workflows from low-level API integration to high-level agent orchestration.

## Table of Contents

1. [System Reminders & Notifications](#1-system-reminders-notifications)
   1. [File, IDE & Resource State](#11-file-ide-resource-state)
      1. [File State & IDE Context Reminders](#111-file-state-ide-context-reminders)
         1. [Compact file reference (System Reminder)](#1111-compact-file-reference-system-reminder)
         2. [File exists but empty (System Reminder)](#1112-file-exists-but-empty-system-reminder)
         3. [File modified by user or linter (System Reminder)](#1113-file-modified-by-user-or-linter-system-reminder)
         4. [File opened in IDE (System Reminder)](#1114-file-opened-in-ide-system-reminder)
         5. [File shorter than offset (System Reminder)](#1115-file-shorter-than-offset-system-reminder)
         6. [File truncated (System Reminder)](#1116-file-truncated-system-reminder)
         7. [Lines selected in IDE (System Reminder)](#1117-lines-selected-in-ide-system-reminder)
         8. [New diagnostics detected (System Reminder)](#1118-new-diagnostics-detected-system-reminder)
      2. [Resource Usage & Session State Reminders](#112-resource-usage-session-state-reminders)
         1. [Token usage (System Reminder)](#1121-token-usage-system-reminder)
         2. [USD budget (System Reminder)](#1122-usd-budget-system-reminder)
         3. [Output token limit exceeded (System Reminder)](#1123-output-token-limit-exceeded-system-reminder)
         4. [Session continuation (System Reminder)](#1124-session-continuation-system-reminder)
         5. [Memory file contents (System Reminder)](#1125-memory-file-contents-system-reminder)
         6. [Nested memory contents (System Reminder)](#1126-nested-memory-contents-system-reminder)
         7. [Invoked skills (System Reminder)](#1127-invoked-skills-system-reminder)
         8. [Output style active (System Reminder)](#1128-output-style-active-system-reminder)
         9. [/btw side question (System Reminder)](#1129-btw-side-question-system-reminder)
      3. [MCP Resource Reminders](#113-mcp-resource-reminders)
         1. [MCP resource no content (System Reminder)](#1131-mcp-resource-no-content-system-reminder)
         2. [MCP resource no displayable content (System Reminder)](#1132-mcp-resource-no-displayable-content-system-reminder)
   2. [Hook & Workflow Enforcement](#12-hook-workflow-enforcement)
      1. [Hook System Reminders](#121-hook-system-reminders)
         1. [Hook additional context (System Reminder)](#1211-hook-additional-context-system-reminder)
         2. [Hook blocking error (System Reminder)](#1212-hook-blocking-error-system-reminder)
         3. [Hook JSON validation failed (System Reminder)](#1213-hook-json-validation-failed-system-reminder)
         4. [Hook stopped continuation prefix (System Reminder)](#1214-hook-stopped-continuation-prefix-system-reminder)
         5. [Hook stopped continuation (System Reminder)](#1215-hook-stopped-continuation-system-reminder)
         6. [Hook success (System Reminder)](#1216-hook-success-system-reminder)
      2. [Plan Mode Workflow Reminders](#122-plan-mode-workflow-reminders)
         1. [Exited plan mode (System Reminder)](#1221-exited-plan-mode-system-reminder)
         2. [Plan file reference (System Reminder)](#1222-plan-file-reference-system-reminder)
         3. [Plan mode is active (5-phase) [System Reminder]](#1223-plan-mode-is-active-5-phase-system-reminder)
         4. [Plan mode is active (iterative) [System Reminder]](#1224-plan-mode-is-active-iterative-system-reminder)
         5. [Plan mode is active (subagent) [System Reminder]](#1225-plan-mode-is-active-subagent-system-reminder)
         6. [Plan mode re-entry (System Reminder)](#1226-plan-mode-re-entry-system-reminder)
         7. [Verify plan reminder (System Reminder)](#1227-verify-plan-reminder-system-reminder)
   3. [Task & Agent State Tracking](#13-task-agent-state-tracking)
      1. [Task & Todo Tracking Reminders](#131-task-todo-tracking-reminders)
         1. [Task status (System Reminder)](#1311-task-status-system-reminder)
         2. [Task tools reminder (System Reminder)](#1312-task-tools-reminder-system-reminder)
         3. [Todo list changed (System Reminder)](#1313-todo-list-changed-system-reminder)
         4. [Todo list empty (System Reminder)](#1314-todo-list-empty-system-reminder)
         5. [TodoWrite reminder (System Reminder)](#1315-todowrite-reminder-system-reminder)
      2. [Multi-Agent Team Coordination Reminders](#132-multi-agent-team-coordination-reminders)
         1. [Team Coordination (System Reminder)](#1321-team-coordination-system-reminder)
         2. [Team Shutdown (System Reminder)](#1322-team-shutdown-system-reminder)
         3. [Agent mention (System Reminder)](#1323-agent-mention-system-reminder)
2. [Built-in Tools & Capabilities](#2-built-in-tools-capabilities)
   1. [File, Shell & Web Operations](#21-file-shell-web-operations)
      1. [File Operation Tools](#211-file-operation-tools)
         1. [ReadFile (Tool Description)](#2111-readfile-tool-description)
         2. [Write (Tool Description)](#2112-write-tool-description)
         3. [Edit (Tool Description)](#2113-edit-tool-description)
         4. [Glob (Tool Description)](#2114-glob-tool-description)
         5. [Grep (Tool Description)](#2115-grep-tool-description)
         6. [NotebookEdit (Tool Description)](#2116-notebookedit-tool-description)
      2. [Shell & Execution Tools](#212-shell-execution-tools)
         1. [Bash (Tool Description)](#2121-bash-tool-description)
         2. [Bash (sandbox note) [Tool Description]](#2122-bash-sandbox-note-tool-description)
         3. [Bash (Git commit and PR creation instructions) [Tool Description]](#2123-bash-git-commit-and-pr-creation-instructions-tool-description)
         4. [Sleep (Tool Description)](#2124-sleep-tool-description)
      3. [Browser & Web Interaction Tools](#213-browser-web-interaction-tools)
         1. [Computer (Tool Description)](#2131-computer-tool-description)
         2. [WebFetch (Tool Description)](#2132-webfetch-tool-description)
         3. [WebSearch (Tool Description)](#2133-websearch-tool-description)
         4. [Computer action (Tool Parameter)](#2134-computer-action-tool-parameter)
   2. [Workflow, Agent & Discovery Tools](#22-workflow-agent-discovery-tools)
      1. [Planning & Mode Control](#221-planning-mode-control)
         1. [EnterPlanMode (Tool Description)](#2211-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#2212-exitplanmode-tool-description)
         3. [EnterWorktree (Tool Description)](#2213-enterworktree-tool-description)
      2. [Task & Todo Management](#222-task-todo-management)
         1. [TaskCreate (Tool Description)](#2221-taskcreate-tool-description)
         2. [TodoWrite (Tool Description)](#2222-todowrite-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#2223-tasklist-teammate-workflow-tool-description)
      3. [Multi-Agent Coordination](#223-multi-agent-coordination)
         1. [Task (Tool Description)](#2231-task-tool-description)
         2. [TeammateTool (Tool Description)](#2232-teammatetool-tool-description)
         3. [SendMessageTool (Tool Description)](#2233-sendmessagetool-tool-description)
         4. [TeamDelete (Tool Description)](#2234-teamdelete-tool-description)
      4. [Tool Discovery & Specialized Capabilities](#224-tool-discovery-specialized-capabilities)
         1. [ToolSearch (Tool Description)](#2241-toolsearch-tool-description)
         2. [ToolSearch extended (Tool Description)](#2242-toolsearch-extended-tool-description)
         3. [Skill (Tool Description)](#2243-skill-tool-description)
         4. [LSP (Tool Description)](#2244-lsp-tool-description)
         5. [AskUserQuestion (Tool Description)](#2245-askuserquestion-tool-description)
3. [Claude API & SDK Documentation](#3-claude-api-sdk-documentation)
   1. [SDK References by Language](#31-sdk-references-by-language)
      1. [Claude API SDK References](#311-claude-api-sdk-references)
         1. [Claude API reference — Python (Data)](#3111-claude-api-reference-—-python-data)
         2. [Claude API reference — TypeScript (Data)](#3112-claude-api-reference-—-typescript-data)
         3. [Claude API reference — Go (Data)](#3113-claude-api-reference-—-go-data)
         4. [Claude API reference — Java (Data)](#3114-claude-api-reference-—-java-data)
         5. [Claude API reference — Ruby (Data)](#3115-claude-api-reference-—-ruby-data)
         6. [Claude API reference — PHP (Data)](#3116-claude-api-reference-—-php-data)
         7. [Claude API reference — C# (Data)](#3117-claude-api-reference-—-c-data)
      2. [Agent SDK References & Patterns](#312-agent-sdk-references-patterns)
         1. [Agent SDK reference — Python (Data)](#3121-agent-sdk-reference-—-python-data)
         2. [Agent SDK reference — TypeScript (Data)](#3122-agent-sdk-reference-—-typescript-data)
         3. [Agent SDK patterns — Python (Data)](#3123-agent-sdk-patterns-—-python-data)
         4. [Agent SDK patterns — TypeScript (Data)](#3124-agent-sdk-patterns-—-typescript-data)
      3. [Tool Use & Streaming API References](#313-tool-use-streaming-api-references)
         1. [Tool use concepts (Data)](#3131-tool-use-concepts-data)
         2. [Tool use reference — Python (Data)](#3132-tool-use-reference-—-python-data)
         3. [Tool use reference — TypeScript (Data)](#3133-tool-use-reference-—-typescript-data)
         4. [Streaming reference — Python (Data)](#3134-streaming-reference-—-python-data)
         5. [Streaming reference — TypeScript (Data)](#3135-streaming-reference-—-typescript-data)
      4. [Files API & Batches API References](#314-files-api-batches-api-references)
         1. [Files API reference — Python (Data)](#3141-files-api-reference-—-python-data)
         2. [Files API reference — TypeScript (Data)](#3142-files-api-reference-—-typescript-data)
         3. [Message Batches API reference — Python (Data)](#3143-message-batches-api-reference-—-python-data)
   2. [API Metadata, Routing & Integration Guides](#32-api-metadata-routing-integration-guides)
      1. [GitHub Integration & Error Handling](#321-github-integration-error-handling)
         1. [GitHub Actions workflow for @claude mentions (Data)](#3211-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#3212-github-app-installation-pr-description-data)
         3. [HTTP error codes reference (Data)](#3213-http-error-codes-reference-data)
      2. [Claude Model & API Metadata](#322-claude-model-api-metadata)
         1. [Claude model catalog (Data)](#3221-claude-model-catalog-data)
         2. [Live documentation sources (Data)](#3222-live-documentation-sources-data)
         3. [Claude Code version mismatch warning (Data)](#3223-claude-code-version-mismatch-warning-data)
      3. [Build with Claude API Skill](#323-build-with-claude-api-skill)
         1. [Build with Claude API (Skill)](#3231-build-with-claude-api-skill)
         2. [Build with Claude API (reference guide) [Skill]](#3232-build-with-claude-api-reference-guide-skill)
         3. [Build with Claude API (trigger) [Skill]](#3233-build-with-claude-api-trigger-skill)
   3. [Session Memory & Context Templates](#33-session-memory-context-templates)
      1. [Session memory template (Data)](#331-session-memory-template-data)
4. [Specialized Agents & Skills](#4-specialized-agents-skills)
   1. [Code Investigation & Version Control Agents](#41-code-investigation-version-control-agents)
      1. [Codebase Exploration & Analysis Agents](#411-codebase-exploration-analysis-agents)
         1. [Explore (Agent Prompt)](#4111-explore-agent-prompt)
         2. [Task tool (Agent Prompt)](#4112-task-tool-agent-prompt)
         3. [Task tool (extra notes) [Agent Prompt]](#4113-task-tool-extra-notes-agent-prompt)
         4. [Conditional delegate codebase exploration (System Prompt)](#4114-conditional-delegate-codebase-exploration-system-prompt)
      2. [Git & GitHub Workflow Agents](#412-git-github-workflow-agents)
         1. [Quick git commit (Agent Prompt)](#4121-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#4122-quick-pr-creation-agent-prompt)
         3. [/pr-comments slash command (Agent Prompt)](#4123-pr-comments-slash-command-agent-prompt)
         4. [/review-pr slash command (Agent Prompt)](#4124-review-pr-slash-command-agent-prompt)
      3. [Bash Command Analysis Agents](#413-bash-command-analysis-agents)
         1. [Bash command description writer (Agent Prompt)](#4131-bash-command-description-writer-agent-prompt)
         2. [Bash command file path extraction (Agent Prompt)](#4132-bash-command-file-path-extraction-agent-prompt)
         3. [Bash command prefix detection (Agent Prompt)](#4133-bash-command-prefix-detection-agent-prompt)
         4. [Command execution specialist (Agent Prompt)](#4134-command-execution-specialist-agent-prompt)
   2. [Session, Memory & Documentation Agents](#42-session-memory-documentation-agents)
      1. [Conversation Summarization & Context Agents](#421-conversation-summarization-context-agents)
         1. [Conversation summarization (Agent Prompt)](#4211-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#4212-recent-message-summarization-agent-prompt)
         3. [Context compaction summary (System Prompt)](#4213-context-compaction-summary-system-prompt)
      2. [Session Management & Memory Agents](#422-session-management-memory-agents)
         1. [Session title and branch generation (Agent Prompt)](#4221-session-title-and-branch-generation-agent-prompt)
         2. [Session Search Assistant (Agent Prompt)](#4222-session-search-assistant-agent-prompt)
         3. [Session memory update instructions (Agent Prompt)](#4223-session-memory-update-instructions-agent-prompt)
         4. [Status line setup (Agent Prompt)](#4224-status-line-setup-agent-prompt)
      3. [Documentation & Knowledge Capture Agents](#423-documentation-knowledge-capture-agents)
         1. [CLAUDE.md creation (Agent Prompt)](#4231-claudemd-creation-agent-prompt)
         2. [Update Magic Docs (Agent Prompt)](#4232-update-magic-docs-agent-prompt)
         3. [Agent memory instructions (System Prompt)](#4233-agent-memory-instructions-system-prompt)
   3. [Testing, Security & Agent Design](#43-testing-security-agent-design)
      1. [Verification & Testing Skills](#431-verification-testing-skills)
         1. [Create verifier skills (Skill)](#4311-create-verifier-skills-skill)
         2. [Verification specialist (Skill)](#4312-verification-specialist-skill)
      2. [Security Review & Malware Analysis](#432-security-review-malware-analysis)
         1. [/security-review slash command (Agent Prompt)](#4321-security-review-slash-command-agent-prompt)
         2. [Censoring assistance with malicious activities (System Prompt)](#4322-censoring-assistance-with-malicious-activities-system-prompt)
         3. [Malware analysis after Read tool call (System Reminder)](#4323-malware-analysis-after-read-tool-call-system-reminder)
      3. [Agent Design & Hook Evaluation](#433-agent-design-hook-evaluation)
         1. [Agent creation architect (Agent Prompt)](#4331-agent-creation-architect-agent-prompt)
         2. [Hook condition evaluator (Agent Prompt)](#4332-hook-condition-evaluator-agent-prompt)
         3. [Agent Hook (Agent Prompt)](#4333-agent-hook-agent-prompt)
   4. [Planning, UX & Workflow Skills](#44-planning-ux-workflow-skills)
      1. [Planning & Architecture](#441-planning-architecture)
         1. [Plan mode (enhanced) [Agent Prompt]](#4411-plan-mode-enhanced-agent-prompt)
      2. [UX & Interaction Support](#442-ux-interaction-support)
         1. [Prompt Suggestion Generator v2 (Agent Prompt)](#4421-prompt-suggestion-generator-v2-agent-prompt)
         2. [User sentiment analysis (Agent Prompt)](#4422-user-sentiment-analysis-agent-prompt)
         3. [WebFetch summarizer (Agent Prompt)](#4423-webfetch-summarizer-agent-prompt)
      3. [Skill Creation & Workflow Capture](#443-skill-creation-workflow-capture)
         1. [Skillify Current Session (System Prompt)](#4431-skillify-current-session-system-prompt)
         2. [Claude guide agent (Agent Prompt)](#4432-claude-guide-agent-agent-prompt)
      4. [Output Formatting & Presentation](#444-output-formatting-presentation)
         1. [Agent Summary Generation (System Prompt)](#4441-agent-summary-generation-system-prompt)
         2. [Tool Use Summary Generation (System Prompt)](#4442-tool-use-summary-generation-system-prompt)
         3. [Option previewer (System Prompt)](#4443-option-previewer-system-prompt)
5. [Claude Code Configuration & Behavior](#5-claude-code-configuration-behavior)
   1. [Core Identity & Tool Governance](#51-core-identity-tool-governance)
      1. [Claude Code Core System Prompts](#511-claude-code-core-system-prompts)
         1. [Main system prompt (System Prompt)](#5111-main-system-prompt-system-prompt)
         2. [Tone and style (System Prompt)](#5112-tone-and-style-system-prompt)
         3. [Tool usage policy (System Prompt)](#5113-tool-usage-policy-system-prompt)
         4. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#5114-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
         5. [Executing actions with care (System Prompt)](#5115-executing-actions-with-care-system-prompt)
         6. [Doing tasks (System Prompt)](#5116-doing-tasks-system-prompt)
         7. [Git status (System Prompt)](#5117-git-status-system-prompt)
      2. [Tool Permission & Denial Handling](#512-tool-permission-denial-handling)
         1. [Tool permission mode (System Prompt)](#5121-tool-permission-mode-system-prompt)
         2. [Tool execution denied (System Prompt)](#5122-tool-execution-denied-system-prompt)
   2. [Task Workspace & Agent Coordination](#52-task-workspace-agent-coordination)
      1. [Task Management & Session Workspace](#521-task-management-session-workspace)
         1. [Task management (System Prompt)](#5211-task-management-system-prompt)
         2. [Scratchpad directory (System Prompt)](#5212-scratchpad-directory-system-prompt)
      2. [Multi-Agent Coordination & Automation](#522-multi-agent-coordination-automation)
         1. [Teammate Communication (System Prompt)](#5221-teammate-communication-system-prompt)
         2. [Hooks Configuration (System Prompt)](#5222-hooks-configuration-system-prompt)
   3. [Configuration, Debugging & Analytics](#53-configuration-debugging-analytics)
      1. [Claude Code Configuration & Debugging Skills](#531-claude-code-configuration-debugging-skills)
         1. [Update Claude Code Config (Skill)](#5311-update-claude-code-config-skill)
         2. [Debugging (Skill)](#5312-debugging-skill)
      2. [Usage Analytics & Optimization Insights](#532-usage-analytics-optimization-insights)
         1. [Insights at a glance summary (System Prompt)](#5321-insights-at-a-glance-summary-system-prompt)
         2. [Insights friction analysis (System Prompt)](#5322-insights-friction-analysis-system-prompt)
         3. [Insights on the horizon (System Prompt)](#5323-insights-on-the-horizon-system-prompt)
         4. [Insights session facets extraction (System Prompt)](#5324-insights-session-facets-extraction-system-prompt)
         5. [Insights suggestions (System Prompt)](#5325-insights-suggestions-system-prompt)
      3. [Browser Automation & Debugging](#533-browser-automation-debugging)
         1. [Chrome browser MCP tools (System Prompt)](#5331-chrome-browser-mcp-tools-system-prompt)
         2. [Claude in Chrome browser automation (System Prompt)](#5332-claude-in-chrome-browser-automation-system-prompt)
   4. [Collaborative Learning Mode](#54-collaborative-learning-mode)
      1. [Learning mode (System Prompt)](#541-learning-mode-system-prompt)
      2. [Learning mode (insights) [System Prompt]](#542-learning-mode-insights-system-prompt)

---

## 1. System Reminders & Notifications

Runtime messages that keep Claude informed of session state, resource consumption, hook outcomes, planning constraints, and task progress. These are injected notifications rather than user-facing tools.

### 1.1 File, IDE & Resource State

Notifications about file access limits, IDE context, token budgets, session continuity, and persistent memory that maintain accurate situational awareness.

#### 1.1.1 File State & IDE Context Reminders

Tracks file access constraints and IDE interactions, informing Claude of truncation limits, external modifications, selection context, and diagnostic changes to maintain accurate code awareness.

##### 1.1.1.1 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a large file was read before conversation summarization and directs use of the Read tool for access.

##### 1.1.1.2 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

##### 1.1.1.3 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified and provides the changes with line numbers, instructing Claude to account for them without reverting unless requested.

##### 1.1.1.4 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

##### 1.1.1.5 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Warns Claude that a file read offset exceeds the file length and provides the actual file size.

##### 1.1.1.6 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a large file was truncated to a line limit and directs use of the Read tool to access additional content without informing the user.

##### 1.1.1.7 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Notifies Claude of line selection in the IDE with the selected content, noting it may or may not relate to the current task.

##### 1.1.1.8 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Notifies Claude of newly detected diagnostic issues with a summary.

#### 1.1.2 Resource Usage & Session State Reminders

System notifications that track resource consumption (tokens and budget), signal session continuity across machines, surface persistent context from memory files, and enforce active constraints like output styles and skill guidelines. Also handles edge cases like token limit overflows and directs side questions to be answered without tool invocation.

##### 1.1.2.1 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token usage statistics showing used, total, and remaining tokens.

##### 1.1.2.2 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget statistics showing spent, total, and remaining budget.

##### 1.1.2.3 [Output token limit exceeded (System Reminder)](system-prompts/system-reminder-output-token-limit-exceeded.md)

Notifies the user that their response was truncated due to exceeding the output token limit and instructs them to break work into smaller pieces.

##### 1.1.2.4 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session continues from another machine and provides the updated working directory.

##### 1.1.2.5 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Provides the contents of a memory file at a specified path with type description.

##### 1.1.2.6 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Provides the contents of a nested memory file structure.

##### 1.1.2.7 [Invoked skills (System Reminder)](system-prompts/system-reminder-invoked-skills.md)

Lists skills invoked in the current session and instructs Claude to continue following their guidelines.

##### 1.1.2.8 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Notifies Claude that an output style is active and instructs it to follow the style-specific guidelines.

##### 1.1.2.9 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Instructs Claude to answer side questions directly without tools, based only on conversation context, and to avoid promising any actions or investigations.

#### 1.1.3 MCP Resource Reminders

Displays references to MCP resources that lack displayable or retrievable content, signaling unavailable external data sources.

##### 1.1.3.1 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Displays an MCP resource reference with no content available.

##### 1.1.3.2 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Displays an MCP resource reference with no displayable content.

### 1.2 Hook & Workflow Enforcement

Reminders that report hook execution results, enforce plan-mode read-only constraints, and manage planning phase transitions.

#### 1.2.1 Hook System Reminders

Reports hook execution outcomes including success, errors, validation failures, and continuation status, enabling Claude to respond appropriately to hook-driven events.

##### 1.2.1.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context from a hook execution to Claude.

##### 1.2.1.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution to Claude.

##### 1.2.1.3 [Hook JSON validation failed (System Reminder)](system-prompts/system-reminder-hook-json-validation-failed.md)

Reports JSON schema validation failures from hook output, displaying validation errors, expected schema structure, and the actual hook output for debugging.

##### 1.2.1.4 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Provides a prefix string for hook stopped continuation messages.

##### 1.2.1.5 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Reports that a hook has stopped continuation and provides the associated message.

##### 1.2.1.6 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful hook execution with its output message.

#### 1.2.2 Plan Mode Workflow Reminders

Enforces structured planning workflows with read-only constraints and plan-file-only editing, supporting exploration, design validation, and iterative refinement across multiple planning paradigms.

##### 1.2.2.1 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and actions, edits, and tools are now available.

##### 1.2.2.2 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file and instructs Claude to continue working on it if relevant and incomplete.

##### 1.2.2.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Defines a structured five-phase planning workflow with parallel exploration agents, design validation, and final plan approval. Enforces read-only operations and plan-file-only editing during planning.

##### 1.2.2.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Describes an iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, and asks clarifying questions. Enforces read-only operations except for plan-file editing.

##### 1.2.2.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode reminder for subagents enforcing read-only operations and plan-file-only editing while answering queries and asking clarifications.

##### 1.2.2.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude to evaluate an existing plan when re-entering plan mode and decide whether to continue or overwrite it based on task relevance.

##### 1.2.2.7 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly after implementation.

### 1.3 Task & Agent State Tracking

Reminders that surface todo list state and multi-agent team identity, lifecycle status, and communication protocols during coordinated operations.

#### 1.3.1 Task & Todo Tracking Reminders

Manages task and todo list state, encouraging progress tracking through dedicated tools while maintaining silent operation to avoid user distraction.

##### 1.3.1.1 [Task status (System Reminder)](system-prompts/system-reminder-task-status.md)

Brief reminder that task output can be checked using the TaskOutput tool.

##### 1.3.1.2 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Gentle reminder to use task creation and update tools for progress tracking when relevant, with instruction not to mention this to the user.

##### 1.3.1.3 [Todo list changed (System Reminder)](system-prompts/system-reminder-todo-list-changed.md)

Notifies Claude of todo list changes without mentioning them to the user and instructs continuation with applicable tasks.

##### 1.3.1.4 [Todo list empty (System Reminder)](system-prompts/system-reminder-todo-list-empty.md)

Reminds Claude that the todo list is empty and suggests using TodoWrite tool if task tracking would be beneficial, with instruction not to mention this to the user.

##### 1.3.1.5 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Gentle reminder to use TodoWrite tool for progress tracking when relevant and to clean up stale lists, with instruction not to mention this to the user.

#### 1.3.2 Multi-Agent Team Coordination Reminders

Establishes team identity, communication protocols, and lifecycle management for coordinated multi-agent operations with graceful shutdown requirements.

##### 1.3.2.1 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude as a team member with identity, team resources, and coordination protocols for messaging teammates by name and managing shared task lists.

##### 1.3.2.2 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully before returning a final response in non-interactive mode.

##### 1.3.2.3 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent type and instructs it to invoke the agent with required context.

---

## 2. Built-in Tools & Capabilities

The concrete tools Claude can invoke: filesystem operations, shell execution, web access, agent coordination, task tracking, and dynamic capability discovery.

### 2.1 File, Shell & Web Operations

Direct environment interaction tools covering file reading/writing/search, sandboxed shell command execution, and browser automation with web search.

#### 2.1.1 File Operation Tools

Comprehensive filesystem access for reading, writing, and editing files with specialized support for images, PDFs, notebooks, and structured text. Includes pattern-based file discovery and content search via regex, enabling efficient navigation and modification of codebases and data.

##### 2.1.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Reads files from the local filesystem with support for images, PDFs (with page ranges for large files), Jupyter notebooks, and configurable line limits. Accepts absolute paths and can read multiple files in parallel.

##### 2.1.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, overwriting existing files. Prefers editing existing files over creating new ones; avoids proactively creating documentation unless explicitly requested.

##### 2.1.1.3 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Describes the Edit tool for exact string replacements in files. Specifies preserving indentation from Read output, preferring existing files, handling non-unique strings, and using replace_all for variable renaming.

##### 2.1.1.4 [Glob (Tool Description)](system-prompts/tool-description-glob.md)

Fast file pattern matching tool supporting glob patterns like "**/*.js" to find files by name, returning results sorted by modification time.

##### 2.1.1.5 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Powerful content search tool built on ripgrep supporting full regex syntax, file filtering by glob or type, and multiple output modes for finding code patterns and text within files.

##### 2.1.1.6 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Edits Jupyter notebook cells by replacing contents, inserting new cells, or deleting cells at specified indices using absolute file paths.

#### 2.1.2 Shell & Execution Tools

Execute shell commands with safety guardrails including sandboxing, timeout limits, and explicit protocols for version control operations. Provides controlled command execution while delegating file operations to specialized tools and enforcing git safety practices.

##### 2.1.2.1 [Bash (Tool Description)](system-prompts/tool-description-bash.md)

Describes bash tool for executing shell commands with timeout and output limits. Emphasizes using specialized tools for file operations instead of bash, proper path quoting, directory verification, and parallel vs sequential command execution patterns.

##### 2.1.2.2 [Bash (sandbox note) [Tool Description]](system-prompts/tool-description-bash-sandbox-note.md)

Specifies that bash commands run sandboxed by default and defines conditions for disabling sandbox, including explicit user request or evidence of sandbox-caused failure. Provides guidance on identifying sandbox violations and managing restrictions.

##### 2.1.2.3 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests safely, including git safety protocols, commit message drafting, hook handling, and PR creation with gh command. Emphasizes never committing without explicit user request and avoiding destructive operations.

##### 2.1.2.4 [Sleep (Tool Description)](system-prompts/tool-description-sleep.md)

Pauses execution for a specified duration with early wake capability on user input, useful when idle or waiting. Preferred over bash sleep as it doesn't hold shell processes.

#### 2.1.3 Browser & Web Interaction Tools

Access and interact with web content through direct browser automation, URL fetching with caching, and real-time web search. Enables both programmatic web navigation and current information retrieval with source attribution.

##### 2.1.3.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Describes the Computer tool for browser automation via mouse and keyboard interaction with screenshots. Emphasizes consulting screenshots before clicking and precise cursor positioning.

##### 2.1.3.2 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content from URLs by converting HTML to markdown and processing with a small model. Includes 15-minute cache, automatic HTTP-to-HTTPS upgrade, and redirect handling.

##### 2.1.3.3 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web to provide up-to-date information beyond knowledge cutoff, returning results with markdown hyperlinks. Requires mandatory Sources section in responses listing all relevant URLs.

##### 2.1.3.4 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines action parameter options for Chrome browser automation including clicks, typing, scrolling, keyboard input, dragging, zooming, and hover interactions.

### 2.2 Workflow, Agent & Discovery Tools

Higher-order tools for entering plan mode, managing multi-agent swarms, tracking tasks across sessions, and dynamically loading specialized capabilities via LSP and slash commands.

#### 2.2.1 Planning & Mode Control

Workflow controls for structuring implementation tasks. Enter plan mode to explore codebases and design approaches for user approval before coding; exit when planning is complete. Worktree isolation creates separate git branches for independent work.

##### 2.2.1.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Instructs Claude to proactively enter plan mode for non-trivial implementation tasks, exploring the codebase and designing approaches for user approval before writing code. Use for new features, multiple valid approaches, code modifications, architectural decisions, multi-file changes, unclear requirements, or tasks where user preferences matter.

##### 2.2.1.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signals completion of planning and requests user approval by presenting the plan file for review. Use only for implementation tasks requiring code, not for research or exploration tasks.

##### 2.2.1.3 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Creates an isolated git worktree and switches the session into it, only when the user explicitly requests worktree usage. Requires git repository or WorktreeCreate/WorktreeRemove hooks configured.

#### 2.2.2 Task & Todo Management

Structured task tracking for coding sessions using state machines (pending, in-progress, completed) to organize multi-step work. Supports both individual task lists and teammate workflows for discovering and claiming work from shared queues.

##### 2.2.2.1 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress and organize complex multi-step work. Use proactively for complex tasks, plan mode, or when users provide multiple requirements.

##### 2.2.2.2 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with states (pending, in_progress, completed), tracking progress and organizing complex multi-step work. Requires both imperative and present-continuous forms for each task.

##### 2.2.2.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Describes teammate workflow for discovering and claiming available tasks from the shared task list, preferring tasks in ID order and respecting task dependencies.

#### 2.2.3 Multi-Agent Coordination

Swarm orchestration for parallel work on complex projects. Spawn specialized sub-agents for research, exploration, or implementation; coordinate teams via message passing and task assignment; clean up resources when work completes.

##### 2.2.3.1 [Task (Tool Description)](system-prompts/tool-description-task.md)

Launches specialized sub-agents to handle complex tasks like research, exploration, or implementation. Supports concurrent agent execution, background processing, agent resumption, and optional worktree isolation for repository work.

##### 2.2.3.2 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Manages teams and coordinates multiple agents in a swarm, handling team creation, task assignment, teammate spawning, message delivery, and idle state management. Teams correspond 1:1 with task lists and enable parallel work on complex projects.

##### 2.2.3.3 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Sends messages to teammates and handles protocol requests/responses in swarms, supporting direct messages, broadcasts, shutdown requests, and plan approval responses. Plain text output is not visible to teammates—must use this tool to communicate.

##### 2.2.3.4 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories when swarm work is complete, cleaning up team resources after all teammates have shut down.

#### 2.2.4 Tool Discovery & Specialized Capabilities

Dynamic tool loading and domain-specific execution. Discover and load deferred tools via keyword search before use; invoke slash commands for specialized skills; access code intelligence through Language Server Protocol; gather user input when needed.

##### 2.2.4.1 [ToolSearch (Tool Description)](system-prompts/tool-description-toolsearch.md)

Mandatory prerequisite for loading deferred tools before calling them directly. Supports keyword search and direct selection modes to make tools available for use.

##### 2.2.4.2 [ToolSearch extended (Tool Description)](system-prompts/tool-description-toolsearch-extended.md)

Extended usage instructions for discovering deferred tools via keyword search, direct selection, or required keyword modes. Tools are loaded immediately upon discovery and do not require follow-up selection calls.

##### 2.2.4.3 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Executes specialized skills (slash commands) within the main conversation, matching user requests to available domain-specific capabilities. Must invoke before generating other responses when a skill matches.

##### 2.2.4.4 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interacts with Language Server Protocol servers to provide code intelligence features including symbol navigation, references, hover information, call hierarchies, and workspace symbol search.

##### 2.2.4.5 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Describes the AskUserQuestion tool for gathering user preferences, clarifying instructions, and requesting decisions during execution. Specifies plan-mode usage restrictions and prohibits using it for plan approval.

---

## 3. Claude API & SDK Documentation

Reference material for integrating with Claude programmatically—SDK guides across multiple languages, API patterns for tools and streaming, file/batch APIs, and architectural guidance for choosing the right integration approach.

### 3.1 SDK References by Language

Language-specific SDK documentation for Claude API and Agent SDK covering Python, TypeScript, Go, Java, Ruby, PHP, and C# with examples for streaming, vision, tool use, and session management.

#### 3.1.1 Claude API SDK References

Multi-language SDK documentation for Claude API integration. Covers client setup, vision capabilities, prompt caching, extended thinking, streaming, tool use, error handling, and cost optimization across Python, TypeScript, Go, Java, Ruby, PHP, and C#.

##### 3.1.1.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Comprehensive Python Claude API reference covering installation, client setup, system prompts, vision with images, prompt caching, extended thinking, error handling, multi-turn conversations, compaction for long contexts, and cost optimization strategies.

##### 3.1.1.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

Comprehensive TypeScript Claude API reference covering installation, client setup, system prompts, vision with images, prompt caching, extended thinking, error handling, multi-turn conversations, compaction, and cost optimization with token counting.

##### 3.1.1.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference for Claude API including installation, client setup, basic requests, streaming, and manual agentic loop for tool use with JSON schema.

##### 3.1.1.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering installation via Maven/Gradle, client initialization, basic requests, streaming, and beta tool use with annotated classes via BetaToolRunner.

##### 3.1.1.5 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference for Claude API including installation, client initialization, basic requests, streaming, and beta tool runner for automatic tool execution.

##### 3.1.1.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference for Claude API covering installation, client initialization, basic message requests, streaming, and manual tool use with JSON schema.

##### 3.1.1.7 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference for Claude API covering installation, client initialization, basic message requests, streaming, and manual tool use with JSON schema definitions.

#### 3.1.2 Agent SDK References & Patterns

Language-specific Agent SDK documentation and working code examples for building agents with Python and TypeScript, covering the query interface, tool integration via MCP, permission models, hooks for customization, subagent orchestration, and session management patterns.

##### 3.1.2.1 [Agent SDK reference — Python (Data)](system-prompts/data-agent-sdk-reference-python.md)

Complete Python Agent SDK reference covering installation, query interface, ClaudeSDKClient for full control, built-in tools, permission modes, MCP support, hooks, subagents, and best practices for agent development.

##### 3.1.2.2 [Agent SDK reference — TypeScript (Data)](system-prompts/data-agent-sdk-reference-typescript.md)

Complete TypeScript Agent SDK reference including installation, query interface, built-in tools, permission modes, MCP support with in-process tools, hooks, subagents, and best practices.

##### 3.1.2.3 [Agent SDK patterns — Python (Data)](system-prompts/data-agent-sdk-patterns-python.md)

Comprehensive Python code patterns for Agent SDK covering basic agents, custom tools via MCP, hooks for behavior customization, subagents, permission modes, error recovery, and session resumption with working examples.

##### 3.1.2.4 [Agent SDK patterns — TypeScript (Data)](system-prompts/data-agent-sdk-patterns-typescript.md)

TypeScript code patterns for Agent SDK including basic agents, hooks for auditing, subagents, MCP integration with Playwright, and session resumption with practical examples.

#### 3.1.3 Tool Use & Streaming API References

API references for defining and executing tools, streaming responses in real-time, and handling agentic workflows across Python and TypeScript, including code execution, structured outputs, and server-side capabilities like web search and computer use.

##### 3.1.3.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering user-defined tools, tool choice options, tool runner versus manual loops, server-side tools (code execution, web search, computer use), structured outputs, and best practices for effective tool integration.

##### 3.1.3.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference with tool runner (beta), manual agentic loops, code execution with file uploads and container reuse, memory tool integration, and structured outputs via Pydantic and raw schemas.

##### 3.1.3.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference covering tool runner with Zod schemas, manual agentic loops, code execution with file uploads and container reuse, memory tool helpers, and structured outputs with Zod validation.

##### 3.1.3.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference with sync/async patterns, handling thinking blocks and tool use, progress tracking, error handling, and best practices for real-time token display and timeout protection.

##### 3.1.3.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference covering basic streaming, thinking blocks, tool runner integration, final message retrieval, and raw SSE format for non-SDK HTTP implementations.

#### 3.1.4 Files API & Batches API References

APIs for managing file uploads and asynchronous batch processing, enabling document handling, cost-optimized request batching with prompt caching, and large-scale API operations across Python and TypeScript implementations.

##### 3.1.4.1 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, usage in messages for documents and images, file management operations, and end-to-end example for reusing files across multiple queries.

##### 3.1.4.2 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript Files API reference covering file upload, usage in messages for documents, file listing and deletion, and download operations for code-generated files.

##### 3.1.4.3 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python reference for the Batches API, covering batch creation, status polling, result retrieval, and prompt caching integration with 50% cost reduction and support for up to 100,000 requests per batch.

### 3.2 API Metadata, Routing & Integration Guides

Model identifiers, context window specs, GitHub Actions integration, HTTP error handling, architectural pattern selection, and live documentation pointers for navigating the Claude ecosystem.

#### 3.2.1 GitHub Integration & Error Handling

GitHub Actions workflows and app installation guidance for Claude Code integration, plus comprehensive HTTP error code reference for diagnosing and recovering from API failures with retry strategies.

##### 3.2.1.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template enabling Claude Code integration via @claude mentions in issues and pull requests, with configurable permissions and optional custom prompts.

##### 3.2.1.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing Claude Code GitHub App integration, explaining capabilities, workflow behavior, security considerations, and tool configuration options.

##### 3.2.1.3 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Reference for Claude API HTTP error codes (400, 401, 403, 404, 413, 429, 500, 529) with causes, fixes, common mistakes, and retry strategies for handling API errors.

#### 3.2.2 Claude Model & API Metadata

Authoritative model identifiers, context specifications, and live documentation sources for accessing current Claude API and Agent SDK references, with guidance for version management and feature availability.

##### 3.2.2.1 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and retired Claude models with exact model IDs, aliases, context windows, max output tokens, and user-to-model resolution guidance for accurate API calls.

##### 3.2.2.2 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

Curated WebFetch URLs for retrieving current Claude API and Agent SDK documentation from platform.claude.com and official GitHub repositories, with extraction prompts for each topic and fallback guidance when network issues occur.

##### 3.2.2.3 [Claude Code version mismatch warning (Data)](system-prompts/data-claude-code-version-mismatch-warning.md)

Warning message displayed when Claude Code CLI version is outdated, instructing users to run `claude update` to access latest features.

#### 3.2.3 Build with Claude API Skill

Comprehensive routing and reference system for Claude API integration, guiding developers through language selection, architectural patterns (single call, workflow, agent), model choice, and thinking modes with language-specific documentation navigation.

##### 3.2.3.1 [Build with Claude API (Skill)](system-prompts/skill-build-with-claude-api.md)

Main routing guide for building LLM applications with Claude, covering language detection, surface selection (single call vs. workflow vs. agent), architecture overview, current models, thinking modes, and reading guide for language-specific documentation.

##### 3.2.3.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Navigation template for language-specific Claude API reference documentation with quick task reference mapping common use cases to relevant documentation sections.

##### 3.2.3.3 [Build with Claude API (trigger) [Skill]](system-prompts/skill-build-with-claude-api-trigger.md)

Activation criteria for the Build with Claude API skill, triggered when code imports Anthropic SDKs or when users explicitly request Claude API integration.

### 3.3 Session Memory & Context Templates

Standardized structure for organizing session context into discrete sections covering current state, task specification, files, workflow, errors, codebase documentation, learnings, results, and worklog—enabling consistent session tracking and knowledge retention across interactions.

#### 3.3.1 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files, organizing session context into sections for current state, task specification, files, workflow, errors, codebase documentation, learnings, results, and worklog.

---

## 4. Specialized Agents & Skills

Purpose-built agents and skill definitions that handle specific engineering tasks: codebase exploration, git workflows, security review, documentation, testing, and user experience support.

### 4.1 Code Investigation & Version Control Agents

Agents for read-only codebase exploration, bash command analysis, and full GitHub pull request lifecycle management including branch creation, review, and comment threading.

#### 4.1.1 Codebase Exploration & Analysis Agents

Read-only codebase investigation system using pattern matching, grep, and file search to answer code questions and execute research tasks, with delegation logic for routing between specialized explorers and direct tool execution based on task complexity.

##### 4.1.1.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Fast read-only codebase exploration agent specializing in file pattern matching, code searching, and answering questions about codebases using glob, grep, and read operations with configurable thoroughness levels.

##### 4.1.1.2 [Task tool (Agent Prompt)](system-prompts/agent-prompt-task-tool.md)

System prompt for a general-purpose subagent that searches code, analyzes files, and executes multi-step research tasks. Emphasizes thorough investigation, avoiding unnecessary file creation, and returning absolute paths with code snippets.

##### 4.1.1.3 [Task tool (extra notes) [Agent Prompt]](system-prompts/agent-prompt-task-tool-extra-notes.md)

Specifies formatting rules for Task tool usage: always use absolute file paths, include file names and code snippets in responses, avoid emojis, and omit colons before tool calls.

##### 4.1.1.4 [Conditional delegate codebase exploration (System Prompt)](system-prompts/system-prompt-conditional-delegate-codebase-exploration.md)

Instructions for deciding when to use the Explore subagent versus calling tools directly for codebase exploration tasks.

#### 4.1.2 Git & GitHub Workflow Agents

Agents that automate GitHub pull request lifecycle management—from creating branches and commits with contextual analysis, to fetching PR comments with full threading and file context, to conducting thorough code reviews. These tools enforce safety protocols and generate appropriate metadata based on repository conventions.

##### 4.1.2.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Creates a single git commit with pre-populated context from git status and diff, analyzing changes to draft appropriate messages following repository conventions while enforcing safety protocols.

##### 4.1.2.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Creates or updates GitHub pull requests with branch creation, commits, and optional Slack notifications, analyzing all changes to generate appropriate titles, bodies, and test plans.

##### 4.1.2.3 [/pr-comments slash command (Agent Prompt)](system-prompts/agent-prompt-pr-comments-slash-command.md)

Fetches and displays GitHub PR comments including PR-level and review comments with file context, diff hunks, and threaded replies in formatted markdown.

##### 4.1.2.4 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Provides thorough code reviews of GitHub pull requests analyzing quality, style, improvements, and risks with focus on correctness, conventions, performance, testing, and security.

#### 4.1.3 Bash Command Analysis Agents

Agents that analyze and execute bash commands safely by describing their purpose, extracting file paths from output, detecting injection risks, and executing operations while following safety protocols and reporting failures clearly.

##### 4.1.3.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, keeping simple commands brief (5-10 words) and adding context for complex piped or flagged commands.

##### 4.1.3.2 [Bash command file path extraction (Agent Prompt)](system-prompts/agent-prompt-bash-command-file-path-extraction.md)

Extracts file paths from bash command output by determining whether the command displays file contents, returning paths verbatim only for commands that show file data.

##### 4.1.3.3 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands, classifying risk levels to determine when user confirmation is needed for command execution.

##### 4.1.3.4 [Command execution specialist (Agent Prompt)](system-prompts/agent-prompt-command-execution-specialist.md)

Executes bash commands efficiently and safely, following git safety protocols, reporting output clearly, and suggesting solutions for failures.

### 4.2 Session, Memory & Documentation Agents

Agents that preserve institutional knowledge by summarizing conversations, managing session metadata and naming, updating architecture docs, and capturing learnings across sessions.

#### 4.2.1 Conversation Summarization & Context Agents

Agents that distill conversation history into structured summaries covering requests, technical concepts, file modifications, errors, problem-solving efforts, and pending tasks—enabling efficient context preservation and task resumption across sessions.

##### 4.2.1.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries organized into nine sections covering primary requests, technical concepts, files modified, errors encountered, problem-solving efforts, user messages, pending tasks, current work, and next steps.

##### 4.2.1.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portions following nine-section structure covering requests, concepts, files, errors, problem-solving, user messages, pending tasks, current work, and next steps.

##### 4.2.1.3 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Prompt for generating continuation summaries during context compaction, organizing task overview, current state, discoveries, next steps, and context preservation for efficient resumption.

#### 4.2.2 Session Management & Memory Agents

Agents that manage session metadata and state by generating naming conventions for sessions and branches, searching sessions by relevance, updating session notes with conversation insights, and configuring terminal status displays.

##### 4.2.2.1 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles (under 6 words, sentence case) and git branch names (under 4 words, claude/ prefix, lowercase with dashes) from session descriptions.

##### 4.2.2.2 [Session Search Assistant (Agent Prompt)](system-prompts/agent-prompt-session-search-assistant.md)

Finds relevant sessions based on user queries by prioritizing tag matches, then titles, branches, summaries, and semantic similarity, returning inclusive results ordered by relevance.

##### 4.2.2.3 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Updates session notes files by editing existing sections with conversation insights while preserving structure, headers, and italic descriptions, maintaining detailed technical information within token limits.

##### 4.2.2.4 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting shell PS1 configurations, converting escape sequences to shell commands, and updating settings with custom status line commands receiving JSON context.

#### 4.2.3 Documentation & Knowledge Capture Agents

Agents that capture and preserve institutional knowledge by analyzing codebases to create or improve documentation files, updating architecture and pattern references, and enabling persistent learning across conversations.

##### 4.2.3.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases to create or improve CLAUDE.md documentation files, capturing common development commands, high-level architecture, and project-specific patterns for future Claude Code instances.

##### 4.2.3.2 [Update Magic Docs (Agent Prompt)](system-prompts/agent-prompt-update-magic-docs.md)

Instructs an agent to update Magic Doc files with new learnings from conversations, preserving headers and focusing on architecture, patterns, and entry points rather than implementation details or obvious code mechanics.

##### 4.2.3.3 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Guidance for including domain-specific memory update instructions in agent system prompts to enable persistent learning across conversations.

### 4.3 Testing, Security & Agent Design

Agents for automated multi-surface verification, security vulnerability detection and malware analysis, and designing autonomous agent architectures with completion condition evaluation.

#### 4.3.1 Verification & Testing Skills

Automated testing framework that discovers and executes verifier skills across multiple testing surfaces (Playwright, Tmux, HTTP), analyzes code changes, generates deterministic verification plans, and reports results inline with authentication support.

##### 4.3.1.1 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase skill for creating verifier skills that enable the Verify agent to automatically test code changes via Playwright, Tmux, or HTTP, including auto-detection, tool setup, interactive Q&A, and skill generation with authentication support.

##### 4.3.1.2 [Verification specialist (Skill)](system-prompts/skill-verification-specialist.md)

Skill for verifying code changes work correctly by discovering verifier skills, analyzing git changes, creating deterministic verification plans, and delegating execution to appropriate verifiers with inline result reporting.

#### 4.3.2 Security Review & Malware Analysis

Security-focused agents that identify exploitable vulnerabilities in code changes, analyze malware behavior, and enforce ethical boundaries for authorized security testing while refusing destructive attacks.

##### 4.3.2.1 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Conducts focused security reviews of code changes identifying high-confidence exploitable vulnerabilities across injection, authentication, crypto, and data exposure categories with strict false-positive filtering and confidence scoring.

##### 4.3.2.2 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Guidelines for assisting with authorized security testing, CTF challenges, and defensive security while refusing destructive attacks, DoS, and malicious evasion techniques.

##### 4.3.2.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Instructs Claude to analyze malware behavior and provide reports when encountered, but strictly refuse to improve or augment malicious code.

#### 4.3.3 Agent Design & Hook Evaluation

Specialized agents for designing autonomous AI agents and validating their execution. Encompasses system prompt architecture, persona design, and verification of task completion through condition evaluation and stop-condition analysis.

##### 4.3.3.1 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, optimizing performance, and generating identifiers. Outputs a JSON object with agent identifier, usage conditions, and complete system prompt governing autonomous agent behavior.

##### 4.3.3.2 [Hook condition evaluator (Agent Prompt)](system-prompts/agent-prompt-hook-condition-evaluator.md)

Evaluates hook conditions in Claude Code, returning JSON indicating whether conditions are met or providing reasons for failure.

##### 4.3.3.3 [Agent Hook (Agent Prompt)](system-prompts/agent-prompt-agent-hook.md)

Verifies stop conditions in Claude Code by analyzing conversation transcripts and inspecting the codebase to confirm agent task completion, returning structured output indicating success or failure.

### 4.4 Planning, UX & Workflow Skills

Agents that handle architectural planning, user intent prediction, sentiment analysis, skill creation from sessions, and output formatting for improved interaction quality.

#### 4.4.1 Planning & Architecture

Read-only architectural analysis agent that designs implementation strategies by exploring codebases, identifying patterns, and documenting step-by-step approaches with trade-off analysis.

##### 4.4.1.1 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Software architect agent for designing implementation plans by exploring codebases, identifying patterns, and detailing step-by-step strategies with critical files and architectural trade-offs in read-only mode.

#### 4.4.2 UX & Interaction Support

Agents that enhance user experience by predicting next actions, analyzing conversation sentiment, and summarizing external content. Provides contextual guidance and emotional awareness to improve interaction quality.

##### 4.4.2.1 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on conversation context, suggesting specific follow-up commands or actions the user would likely type without offering evaluations or Claude-voice suggestions.

##### 4.4.2.2 [User sentiment analysis (Agent Prompt)](system-prompts/agent-prompt-user-sentiment-analysis.md)

Analyzes conversation history to detect user frustration and explicit pull request creation requests, outputting boolean flags for sentiment and PR intent.

##### 4.4.2.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose web content for the main model, enforcing strict quote limits and attribution rules for untrusted domains while allowing flexible sourcing for trusted domains.

#### 4.4.3 Skill Creation & Workflow Capture

Converts user sessions into reusable, documented skills through structured interview processes and API guidance. Captures repeatable workflows as executable SKILL.md files while helping users navigate Claude's development tools and capabilities.

##### 4.4.3.1 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-round interview process to capture repeatable session workflows as reusable skills, analyzing the session, confirming details with the user, breaking down steps, and generating a SKILL.md file with frontmatter, inputs, goals, and execution annotations.

##### 4.4.3.2 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand Claude Code, Claude Agent SDK, and Claude API by fetching official documentation, identifying relevant resources, and providing actionable guidance with code examples and feature discovery.

#### 4.4.4 Output Formatting & Presentation

Generates concise, outcome-focused summaries and visual previews for user-facing communication. Standardizes action descriptions and tool usage reporting while enabling side-by-side comparison of options through rendered markdown artifacts.

##### 4.4.4.1 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

System prompt for generating concise 3-5 word action summaries in present tense, avoiding past tense, vagueness, and branch names.

##### 4.4.4.2 [Tool Use Summary Generation (System Prompt)](system-prompts/system-prompt-tool-use-summary-generation.md)

Instructs Claude to generate brief past-tense summaries of tool usage under 8 words, focusing on user-visible outcomes without implementation details or self-reference.

##### 4.4.4.3 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for presenting UI options with markdown artifacts like ASCII mockups, code snippets, and diagrams in single-select questions.

---

## 5. Claude Code Configuration & Behavior

The foundational system prompts, configuration tools, permission models, analytics, and learning modes that define how Claude Code operates as a CLI engineering assistant.

### 5.1 Core Identity & Tool Governance

Foundational system instructions establishing Claude Code's identity, communication style, action safety guardrails, tool permission workflows, and denial-handling strategies.

#### 5.1.1 Claude Code Core System Prompts

Foundational system instructions defining Claude Code's identity as a CLI software engineering assistant, establishing communication style, tool usage policies, action safety guardrails, and execution best practices.

##### 5.1.1.1 [Main system prompt (System Prompt)](system-prompts/system-prompt-main-system-prompt.md)

Establishes Claude Code's core identity as an interactive CLI assistant for software engineering tasks, with security policies and help/feedback guidance.

##### 5.1.1.2 [Tone and style (System Prompt)](system-prompts/system-prompt-tone-and-style.md)

Establishes communication guidelines emphasizing brevity for CLI output, professional objectivity over validation, avoidance of time estimates, and preference for editing existing files over creating new ones.

##### 5.1.1.3 [Tool usage policy (System Prompt)](system-prompts/system-prompt-tool-usage-policy.md)

Defines tool usage policies including parallel execution for independent operations, preference for specialized tools over bash commands, and guidelines for file operations using Read, Edit, and Write tools.

##### 5.1.1.4 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while maintaining sequential execution for dependent calls.

##### 5.1.1.5 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Instructs Claude to carefully evaluate action reversibility and blast radius, requiring user confirmation before destructive or hard-to-reverse operations like force-pushing, deleting files, or sending messages, while permitting local reversible actions freely unless explicitly authorized otherwise.

##### 5.1.1.6 [Doing tasks (System Prompt)](system-prompts/system-prompt-doing-tasks.md)

Instructions for performing software engineering tasks emphasizing reading code before modification, avoiding security vulnerabilities, preventing over-engineering, and maintaining simplicity and focus.

##### 5.1.1.7 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays a snapshot of the current git state at conversation start, including branch, main branch reference, status output, and recent commits.

#### 5.1.2 Tool Permission & Denial Handling

Manages user control over tool execution through permission modes and approval workflows. When tools are denied, Claude attempts reasonable alternatives without bypassing restrictions, communicates with users about essential capabilities, and avoids reattempting identical denied calls.

##### 5.1.2.1 [Tool permission mode (System Prompt)](system-prompts/system-prompt-tool-permission-mode.md)

Explains that tools operate in user-selected permission modes, users are prompted for approval when tools are not automatically allowed, and denied calls should not be reattempted identically.

##### 5.1.2.2 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable alternatives when a tool is denied, but not to bypass restrictions maliciously, and to ask the user if the capability is essential.

### 5.2 Task Workspace & Agent Coordination

Structured task tracking with session-isolated scratchpad directories, multi-agent messaging, and lifecycle automation via hooks for coordinated team workflows.

#### 5.2.1 Task Management & Session Workspace

Provides structured task tracking and isolated file management for organized work. Task management tools maintain visibility through immediate completion marking, while session-specific scratchpad directories isolate temporary files without requiring permission prompts.

##### 5.2.1.1 [Task management (System Prompt)](system-prompts/system-prompt-task-management.md)

Instructs Claude to use task management tools frequently for planning and tracking work, marking todos as completed immediately upon task completion to maintain visibility and prevent forgotten steps.

##### 5.2.1.2 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Designates a session-specific scratchpad directory for all temporary files instead of system /tmp, providing isolated working space without permission prompts.

#### 5.2.2 Multi-Agent Coordination & Automation

Enables coordinated agent teams through structured messaging and lifecycle automation. SendMessage tools facilitate individual and broadcast communication, while hooks system automates command execution at key lifecycle events with conditional logic and output control.

##### 5.2.2.1 [Teammate Communication (System Prompt)](system-prompts/system-prompt-teammate-communication.md)

Instructs agents running in a team to use the SendMessage tool for all teammate communication, with message type for individual teammates and broadcast for team-wide announcements.

##### 5.2.2.2 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Defines Claude Code's hook system for running commands at lifecycle events like PreToolUse, PostToolUse, and SessionStart, supporting command, prompt, and agent hook types with JSON output control for tool execution flow and user notifications.

### 5.3 Configuration, Debugging & Analytics

Runtime settings management, session troubleshooting from debug logs, usage pattern analysis for workflow optimization, and browser automation debugging via Chrome MCP.

#### 5.3.1 Claude Code Configuration & Debugging Skills

Tools for managing Claude Code runtime state through settings configuration and session troubleshooting, emphasizing careful configuration merging, event-driven automation via hooks, and systematic error diagnosis from debug logs.

##### 5.3.1.1 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Skill for modifying Claude Code settings.json files, emphasizing reading before writing, merging arrays carefully, and using hooks for event-driven automation rather than memory for persistent preferences.

##### 5.3.1.2 [Debugging (Skill)](system-prompts/skill-debugging.md)

Skill for debugging Claude Code session issues by analyzing debug logs, identifying errors and warnings, and providing concrete fixes or next steps.

#### 5.3.2 Usage Analytics & Optimization Insights

Analyzes Claude Code usage patterns to surface actionable improvements across multiple dimensions. Extracts session facets, identifies friction points, highlights quick wins, and recommends feature adoption and workflow patterns tailored to observed user behavior.

##### 5.3.2.1 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a four-part usage insights summary covering what's working, friction points, quick wins, and ambitious workflows for Claude Code users, using aggregated session data to provide coaching-style recommendations.

##### 5.3.2.2 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes Claude Code usage data to identify and categorize friction patterns, producing three friction categories with examples and explanations of what could be done differently.

##### 5.3.2.3 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies three ambitious future opportunities for autonomous AI-assisted development workflows, including what's possible, relevant tooling, and copyable prompts to try.

##### 5.3.2.4 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code sessions including goal categories, user satisfaction signals, and friction types, with strict guidelines for counting only explicit user requests and genuine satisfaction indicators.

##### 5.3.2.5 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable improvement suggestions including CLAUDE.md additions, feature recommendations from MCP Servers, Custom Skills, Hooks, Headless Mode, and Task Agents, plus usage patterns tailored to observed session patterns.

#### 5.3.3 Browser Automation & Debugging

Enables programmatic browser control through Chrome MCP tools with debugging and monitoring capabilities. Handles GIF recording, console inspection, alert management, and multi-tab context to support automated web interaction workflows.

##### 5.3.3.1 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Instructions for loading Chrome browser MCP tools via ToolSearch before use to enable browser automation capabilities.

##### 5.3.3.2 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Guidelines for using Claude in Chrome browser automation tools effectively, covering GIF recording, console debugging, alert handling, loop prevention, and tab context management.

### 5.4 Collaborative Learning Mode

Balances task completion with hands-on education by involving users in design decisions and algorithm development. Provides contextual learning insights before and after code changes, using TODO markers and guided exercises to build understanding of implementation choices.

#### 5.4.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Defines collaborative learning mode where Claude balances task completion with education by requesting user contributions for design decisions and key algorithms, using TODO(human) markers and Learn by Doing requests to guide hands-on practice.

#### 5.4.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Instructs Claude to provide brief educational insights before and after code changes when learning mode is active, focusing on implementation choices specific to the codebase.
