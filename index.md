# Claude Code System Prompts Index

Practical infrastructure for deploying Claude as an autonomous engineering agent — covering how it executes, remembers, coordinates, and operates across real development environments and workflows.

## Table of Contents

1. [Bash and Shell Execution](#1-bash-and-shell-execution)
   1. [Bash Tool: Core Execution & Syntax](#11-bash-tool-core-execution-syntax)
      1. [Bash (overview) [Tool Description]](#111-bash-overview-tool-description)
      2. [Bash (no newlines) [Tool Description]](#112-bash-no-newlines-tool-description)
      3. [Bash (parallel commands) [Tool Description]](#113-bash-parallel-commands-tool-description)
      4. [Bash (sequential commands) [Tool Description]](#114-bash-sequential-commands-tool-description)
      5. [Bash (semicolon usage) [Tool Description]](#115-bash-semicolon-usage-tool-description)
      6. [Bash (quote file paths) [Tool Description]](#116-bash-quote-file-paths-tool-description)
      7. [Bash (working directory) [Tool Description]](#117-bash-working-directory-tool-description)
      8. [Bash (maintain cwd) [Tool Description]](#118-bash-maintain-cwd-tool-description)
      9. [Bash (timeout) [Tool Description]](#119-bash-timeout-tool-description)
      10. [Bash (verify parent directory) [Tool Description]](#1110-bash-verify-parent-directory-tool-description)
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
   3. [Bash Tool: Sleep & Polling Behavior](#13-bash-tool-sleep-polling-behavior)
      1. [Bash (sleep — keep short) [Tool Description]](#131-bash-sleep-—-keep-short-tool-description)
      2. [Bash (sleep — no polling background tasks) [Tool Description]](#132-bash-sleep-—-no-polling-background-tasks-tool-description)
      3. [Bash (sleep — run immediately) [Tool Description]](#133-bash-sleep-—-run-immediately-tool-description)
      4. [Bash (sleep — use check commands) [Tool Description]](#134-bash-sleep-—-use-check-commands-tool-description)
   4. [Bash Tool: Preferred Alternatives & Tool Selection](#14-bash-tool-preferred-alternatives-tool-selection)
      1. [Bash (prefer dedicated tools) [Tool Description]](#141-bash-prefer-dedicated-tools-tool-description)
      2. [Bash (alternative — communication) [Tool Description]](#142-bash-alternative-—-communication-tool-description)
      3. [Bash (alternative — content search) [Tool Description]](#143-bash-alternative-—-content-search-tool-description)
      4. [Bash (alternative — edit files) [Tool Description]](#144-bash-alternative-—-edit-files-tool-description)
      5. [Bash (alternative — file search) [Tool Description]](#145-bash-alternative-—-file-search-tool-description)
      6. [Bash (alternative — read files) [Tool Description]](#146-bash-alternative-—-read-files-tool-description)
      7. [Bash (alternative — write files) [Tool Description]](#147-bash-alternative-—-write-files-tool-description)
      8. [Bash (built-in tools note) [Tool Description]](#148-bash-built-in-tools-note-tool-description)
   5. [Bash Tool: Git Operations](#15-bash-tool-git-operations)
      1. [Bash (git — avoid destructive ops) [Tool Description]](#151-bash-git-—-avoid-destructive-ops-tool-description)
      2. [Bash (Git commit and PR creation instructions) [Tool Description]](#152-bash-git-commit-and-pr-creation-instructions-tool-description)
      3. [Bash (git — never skip hooks) [Tool Description]](#153-bash-git-—-never-skip-hooks-tool-description)
      4. [Bash (git — prefer new commits) [Tool Description]](#154-bash-git-—-prefer-new-commits-tool-description)
   6. [PowerShell Command Execution](#16-powershell-command-execution)
      1. [PowerShell (Tool Description)](#161-powershell-tool-description)
   7. [Specialized Execution Modes & Constraints](#17-specialized-execution-modes-constraints)
      1. [Minimal mode (System Prompt)](#171-minimal-mode-system-prompt)
      2. [REPL tool usage and scripting conventions (System Prompt)](#172-repl-tool-usage-and-scripting-conventions-system-prompt)
      3. [PowerShell edition for 5.1 (System Prompt)](#173-powershell-edition-for-51-system-prompt)
      4. [WSL managed settings double opt-in (System Prompt)](#174-wsl-managed-settings-double-opt-in-system-prompt)
      5. [One of six rules for using sleep command (System Prompt)](#175-one-of-six-rules-for-using-sleep-command-system-prompt)
      6. [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](#176-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description-system-prompt)
2. [System Reminders and Runtime Notifications](#2-system-reminders-and-runtime-notifications)
   1. [File and IDE State Notifications](#21-file-and-ide-state-notifications)
      1. [File shorter than offset (System Reminder)](#211-file-shorter-than-offset-system-reminder)
      2. [File truncated (System Reminder)](#212-file-truncated-system-reminder)
      3. [File exists but empty (System Reminder)](#213-file-exists-but-empty-system-reminder)
      4. [File modified by user or linter (System Reminder)](#214-file-modified-by-user-or-linter-system-reminder)
      5. [File opened in IDE (System Reminder)](#215-file-opened-in-ide-system-reminder)
      6. [Lines selected in IDE (System Reminder)](#216-lines-selected-in-ide-system-reminder)
      7. [Compact file reference (System Reminder)](#217-compact-file-reference-system-reminder)
   2. [Hook Execution Feedback](#22-hook-execution-feedback)
      1. [Hook additional context (System Reminder)](#221-hook-additional-context-system-reminder)
      2. [Hook blocking error (System Reminder)](#222-hook-blocking-error-system-reminder)
      3. [Hook stopped continuation prefix (System Reminder)](#223-hook-stopped-continuation-prefix-system-reminder)
      4. [Hook stopped continuation (System Reminder)](#224-hook-stopped-continuation-system-reminder)
      5. [Hook success (System Reminder)](#225-hook-success-system-reminder)
      6. [Stop hook blocking error (System Reminder)](#226-stop-hook-blocking-error-system-reminder)
   3. [Plan Mode Orchestration](#23-plan-mode-orchestration)
      1. [Plan file reference (System Reminder)](#231-plan-file-reference-system-reminder)
      2. [Plan mode approval tool enforcement (System Reminder)](#232-plan-mode-approval-tool-enforcement-system-reminder)
      3. [Plan mode is active (5-phase) [System Reminder]](#233-plan-mode-is-active-5-phase-system-reminder)
      4. [Plan mode is active (iterative) [System Reminder]](#234-plan-mode-is-active-iterative-system-reminder)
      5. [Plan mode is active (subagent) [System Reminder]](#235-plan-mode-is-active-subagent-system-reminder)
      6. [Plan mode re-entry (System Reminder)](#236-plan-mode-re-entry-system-reminder)
      7. [Exited plan mode (System Reminder)](#237-exited-plan-mode-system-reminder)
   4. [Memory and Session Context](#24-memory-and-session-context)
      1. [Memory file contents (System Reminder)](#241-memory-file-contents-system-reminder)
      2. [Nested memory contents (System Reminder)](#242-nested-memory-contents-system-reminder)
      3. [MCP resource no content (System Reminder)](#243-mcp-resource-no-content-system-reminder)
      4. [MCP resource no displayable content (System Reminder)](#244-mcp-resource-no-displayable-content-system-reminder)
      5. [Session continuation (System Reminder)](#245-session-continuation-system-reminder)
      6. [Previously invoked skills (System Reminder)](#246-previously-invoked-skills-system-reminder)
   5. [Progress Tracking and Resource Monitoring](#25-progress-tracking-and-resource-monitoring)
      1. [Task tools reminder (System Reminder)](#251-task-tools-reminder-system-reminder)
      2. [TodoWrite reminder (System Reminder)](#252-todowrite-reminder-system-reminder)
      3. [Token usage (System Reminder)](#253-token-usage-system-reminder)
      4. [USD budget (System Reminder)](#254-usd-budget-system-reminder)
      5. [Verify plan reminder (System Reminder)](#255-verify-plan-reminder-system-reminder)
   6. [System Reminders: Agent Coordination & Loop Control](#26-system-reminders-agent-coordination-loop-control)
      1. [Agent mention (System Reminder)](#261-agent-mention-system-reminder)
      2. [Team Coordination (System Reminder)](#262-team-coordination-system-reminder)
      3. [Team Shutdown (System Reminder)](#263-team-shutdown-system-reminder)
      4. [Loop wakeup not scheduled (System Reminder)](#264-loop-wakeup-not-scheduled-system-reminder)
      5. [Thinking frequency tuning (System Reminder)](#265-thinking-frequency-tuning-system-reminder)
      6. [/btw side question (System Reminder)](#266-btw-side-question-system-reminder)
   7. [System Reminders: Diagnostics & Output Style](#27-system-reminders-diagnostics-output-style)
      1. [New diagnostics detected (System Reminder)](#271-new-diagnostics-detected-system-reminder)
      2. [Output style active (System Reminder)](#272-output-style-active-system-reminder)
      3. [Malware analysis after Read tool call (System Reminder)](#273-malware-analysis-after-read-tool-call-system-reminder)
      4. [Ultraplan mode (System Reminder)](#274-ultraplan-mode-system-reminder)
3. [Claude API, SDKs and Developer Documentation](#3-claude-api-sdks-and-developer-documentation)
   1. [Managed Agents API: Reference Documentation](#31-managed-agents-api-reference-documentation)
      1. [Managed Agents overview (Data)](#311-managed-agents-overview-data)
      2. [Managed Agents core concepts (Data)](#312-managed-agents-core-concepts-data)
      3. [Managed Agents endpoint reference (Data)](#313-managed-agents-endpoint-reference-data)
      4. [Managed Agents environments and resources (Data)](#314-managed-agents-environments-and-resources-data)
      5. [Managed Agents events and steering (Data)](#315-managed-agents-events-and-steering-data)
      6. [Managed Agents memory stores reference (Data)](#316-managed-agents-memory-stores-reference-data)
      7. [Managed Agents tools and skills (Data)](#317-managed-agents-tools-and-skills-data)
      8. [Managed Agents client patterns (Data)](#318-managed-agents-client-patterns-data)
      9. [Managed Agents reference — cURL (Data)](#319-managed-agents-reference-—-curl-data)
      10. [Managed Agents reference — Python (Data)](#3110-managed-agents-reference-—-python-data)
      11. [Managed Agents reference — TypeScript (Data)](#3111-managed-agents-reference-—-typescript-data)
   2. [Claude API: Language-Specific SDK References](#32-claude-api-language-specific-sdk-references)
      1. [Claude API reference — Python (Data)](#321-claude-api-reference-—-python-data)
      2. [Claude API reference — TypeScript (Data)](#322-claude-api-reference-—-typescript-data)
      3. [Claude API reference — Go (Data)](#323-claude-api-reference-—-go-data)
      4. [Claude API reference — Java (Data)](#324-claude-api-reference-—-java-data)
      5. [Claude API reference — C# (Data)](#325-claude-api-reference-—-c-data)
      6. [Claude API reference — PHP (Data)](#326-claude-api-reference-—-php-data)
      7. [Claude API reference — Ruby (Data)](#327-claude-api-reference-—-ruby-data)
      8. [Claude API reference — cURL (Data)](#328-claude-api-reference-—-curl-data)
   3. [Claude API: Tool Use, Streaming & Batches](#33-claude-api-tool-use-streaming-batches)
      1. [Tool use concepts (Data)](#331-tool-use-concepts-data)
      2. [Tool use reference — Python (Data)](#332-tool-use-reference-—-python-data)
      3. [Tool use reference — TypeScript (Data)](#333-tool-use-reference-—-typescript-data)
      4. [Streaming reference — Python (Data)](#334-streaming-reference-—-python-data)
      5. [Streaming reference — TypeScript (Data)](#335-streaming-reference-—-typescript-data)
      6. [Message Batches API reference — Python (Data)](#336-message-batches-api-reference-—-python-data)
      7. [Files API reference — Python (Data)](#337-files-api-reference-—-python-data)
      8. [Files API reference — TypeScript (Data)](#338-files-api-reference-—-typescript-data)
   4. [Claude API: Models, Caching & Infrastructure](#34-claude-api-models-caching-infrastructure)
      1. [Claude model catalog (Data)](#341-claude-model-catalog-data)
      2. [Prompt Caching — Design & Optimization (Data)](#342-prompt-caching-—-design-optimization-data)
      3. [HTTP error codes reference (Data)](#343-http-error-codes-reference-data)
      4. [Live documentation sources (Data)](#344-live-documentation-sources-data)
      5. [Anthropic CLI (Data)](#345-anthropic-cli-data)
   5. [API Development & Model Migration](#35-api-development-model-migration)
      1. [Building LLM-powered applications with Claude (Skill)](#351-building-llm-powered-applications-with-claude-skill)
      2. [Build with Claude API (reference guide) [Skill]](#352-build-with-claude-api-reference-guide-skill)
      3. [Agent Design Patterns (Skill)](#353-agent-design-patterns-skill)
      4. [Model migration guide (Skill)](#354-model-migration-guide-skill)
4. [Agent Prompts and Behavioral Standards](#4-agent-prompts-and-behavioral-standards)
   1. [Code Review, Security and Git Automation](#41-code-review-security-and-git-automation)
      1. [Agent Prompts: Code Review & Security Analysis](#411-agent-prompts-code-review-security-analysis)
         1. [/review-pr slash command (Agent Prompt)](#4111-review-pr-slash-command-agent-prompt)
         2. [/security-review slash command (Agent Prompt)](#4112-security-review-slash-command-agent-prompt)
         3. [Security monitor for autonomous agent actions (first part) [Agent Prompt]](#4113-security-monitor-for-autonomous-agent-actions-first-part-agent-prompt)
         4. [Security monitor for autonomous agent actions (second part) [Agent Prompt]](#4114-security-monitor-for-autonomous-agent-actions-second-part-agent-prompt)
      2. [Agent Prompts: Git & Version Control Operations](#412-agent-prompts-git-version-control-operations)
         1. [Quick git commit (Agent Prompt)](#4121-quick-git-commit-agent-prompt)
         2. [Quick PR creation (Agent Prompt)](#4122-quick-pr-creation-agent-prompt)
         3. [Session title and branch generation (Agent Prompt)](#4123-session-title-and-branch-generation-agent-prompt)
         4. [/rename auto-generate session name (Agent Prompt)](#4124-rename-auto-generate-session-name-agent-prompt)
         5. [Coding session title generator (Agent Prompt)](#4125-coding-session-title-generator-agent-prompt)
      3. [Verification, Testing & Quality Assurance](#413-verification-testing-quality-assurance)
         1. [Verification specialist (Agent Prompt)](#4131-verification-specialist-agent-prompt)
         2. [Hook condition evaluator (stop) [Agent Prompt]](#4132-hook-condition-evaluator-stop-agent-prompt)
         3. [Auto mode rule reviewer (Agent Prompt)](#4133-auto-mode-rule-reviewer-agent-prompt)
         4. [Prompt Suggestion Generator v2 (Agent Prompt)](#4134-prompt-suggestion-generator-v2-agent-prompt)
   2. [Utility, Infrastructure and Operational Agents](#42-utility-infrastructure-and-operational-agents)
      1. [Agent Prompts: Utility & Infrastructure](#421-agent-prompts-utility-infrastructure)
         1. [Bash command description writer (Agent Prompt)](#4211-bash-command-description-writer-agent-prompt)
         2. [Bash command prefix detection (Agent Prompt)](#4212-bash-command-prefix-detection-agent-prompt)
         3. [WebFetch summarizer (Agent Prompt)](#4213-webfetch-summarizer-agent-prompt)
         4. [Worker fork (Agent Prompt)](#4214-worker-fork-agent-prompt)
         5. [/schedule slash command (Agent Prompt)](#4215-schedule-slash-command-agent-prompt)
      2. [Codebase Exploration & Implementation Planning](#422-codebase-exploration-implementation-planning)
         1. [Explore (Agent Prompt)](#4221-explore-agent-prompt)
         2. [General purpose (Agent Prompt)](#4222-general-purpose-agent-prompt)
         3. [Plan mode (enhanced) [Agent Prompt]](#4223-plan-mode-enhanced-agent-prompt)
         4. [/batch slash command (Agent Prompt)](#4224-batch-slash-command-agent-prompt)
      3. [Onboarding, Documentation & Agent Configuration](#423-onboarding-documentation-agent-configuration)
         1. [CLAUDE.md creation (Agent Prompt)](#4231-claudemd-creation-agent-prompt)
         2. [Onboarding guide generator (Agent Prompt)](#4232-onboarding-guide-generator-agent-prompt)
         3. [Managed Agents onboarding flow (Agent Prompt)](#4233-managed-agents-onboarding-flow-agent-prompt)
         4. [Agent creation architect (Agent Prompt)](#4234-agent-creation-architect-agent-prompt)
         5. [Status line setup (Agent Prompt)](#4235-status-line-setup-agent-prompt)
         6. [Claude guide agent (Agent Prompt)](#4236-claude-guide-agent-agent-prompt)
   3. [Communication, Quality and Agent Identity](#43-communication-quality-and-agent-identity)
      1. [Code Quality & Engineering Standards](#431-code-quality-engineering-standards)
         1. [Doing tasks (software engineering focus) [System Prompt]](#4311-doing-tasks-software-engineering-focus-system-prompt)
         2. [Doing tasks (security) [System Prompt]](#4312-doing-tasks-security-system-prompt)
         3. [Doing tasks (no unnecessary error handling) [System Prompt]](#4313-doing-tasks-no-unnecessary-error-handling-system-prompt)
         4. [Doing tasks (no compatibility hacks) [System Prompt]](#4314-doing-tasks-no-compatibility-hacks-system-prompt)
         5. [Censoring assistance with malicious activities (System Prompt)](#4315-censoring-assistance-with-malicious-activities-system-prompt)
      2. [Communication & Output Style](#432-communication-output-style)
         1. [Communication style (System Prompt)](#4321-communication-style-system-prompt)
         2. [Tone and style (code references) [System Prompt]](#4322-tone-and-style-code-references-system-prompt)
         3. [Tone and style (concise output — short) [System Prompt]](#4323-tone-and-style-concise-output-—-short-system-prompt)
         4. [Option previewer (System Prompt)](#4324-option-previewer-system-prompt)
         5. [How to use the SendUserMessage tool (System Prompt)](#4325-how-to-use-the-sendusermessage-tool-system-prompt)
      3. [Agent Identity & Decision-Making](#433-agent-identity-decision-making)
         1. [Agent thread notes (System Prompt)](#4331-agent-thread-notes-system-prompt)
         2. [Agent Summary Generation (System Prompt)](#4332-agent-summary-generation-system-prompt)
         3. [Advisor tool instructions (System Prompt)](#4333-advisor-tool-instructions-system-prompt)
         4. [Agent memory instructions (System Prompt)](#4334-agent-memory-instructions-system-prompt)
         5. [Git status (System Prompt)](#4335-git-status-system-prompt)
5. [Memory, Session and Context Management](#5-memory-session-and-context-management)
   1. [Memory Persistence and Consolidation](#51-memory-persistence-and-consolidation)
      1. [Memory Management & Consolidation](#511-memory-management-consolidation)
         1. [Dream memory consolidation (Agent Prompt)](#5111-dream-memory-consolidation-agent-prompt)
         2. [Dream memory pruning (Agent Prompt)](#5112-dream-memory-pruning-agent-prompt)
         3. [Memory synthesis (Agent Prompt)](#5113-memory-synthesis-agent-prompt)
         4. [Determine which memory files to attach (Agent Prompt)](#5114-determine-which-memory-files-to-attach-agent-prompt)
         5. [Session memory update instructions (Agent Prompt)](#5115-session-memory-update-instructions-agent-prompt)
      2. [System Prompts: Memory Management](#512-system-prompts-memory-management)
         1. [Memory instructions (System Prompt)](#5121-memory-instructions-system-prompt)
         2. [Memory staleness verification (System Prompt)](#5122-memory-staleness-verification-system-prompt)
         3. [Memory description of user details (System Prompt)](#5123-memory-description-of-user-details-system-prompt)
         4. [Memory description of user feedback (System Prompt)](#5124-memory-description-of-user-feedback-system-prompt)
         5. [Memory description of user feedback (with explicit save) [System Prompt]](#5125-memory-description-of-user-feedback-with-explicit-save-system-prompt)
         6. [Description part of memory instructions (System Prompt)](#5126-description-part-of-memory-instructions-system-prompt)
         7. [Dream CLAUDE.md memory reconciliation (System Prompt)](#5127-dream-claudemd-memory-reconciliation-system-prompt)
         8. [Dream team memory handling (System Prompt)](#5128-dream-team-memory-handling-system-prompt)
      3. [Automated Memory & Monitoring Tasks](#513-automated-memory-monitoring-tasks)
         1. [/dream memory consolidation (Skill)](#5131-dream-memory-consolidation-skill)
         2. [/dream nightly schedule (Skill)](#5132-dream-nightly-schedule-skill)
         3. [/catch-up periodic heartbeat (Skill)](#5133-catch-up-periodic-heartbeat-skill)
   2. [Session State and Conversation Continuity](#52-session-state-and-conversation-continuity)
      1. [Memory Templates & User Profile Data](#521-memory-templates-user-profile-data)
         1. [Session memory template (Data)](#5211-session-memory-template-data)
         2. [User profile memory template (Data)](#5212-user-profile-memory-template-data)
         3. [Assistant voice and values template (Data)](#5213-assistant-voice-and-values-template-data)
         4. [Background agent state classification examples (Data)](#5214-background-agent-state-classification-examples-data)
      2. [Conversation Summarization & Session Management](#522-conversation-summarization-session-management)
         1. [Conversation summarization (Agent Prompt)](#5221-conversation-summarization-agent-prompt)
         2. [Recent Message Summarization (Agent Prompt)](#5222-recent-message-summarization-agent-prompt)
         3. [Session search (Agent Prompt)](#5223-session-search-agent-prompt)
         4. [Background agent state classifier (Agent Prompt)](#5224-background-agent-state-classifier-agent-prompt)
      3. [Session & Context Management](#523-session-context-management)
         1. [Context compaction summary (System Prompt)](#5231-context-compaction-summary-system-prompt)
         2. [Partial compaction instructions (System Prompt)](#5232-partial-compaction-instructions-system-prompt)
         3. [Scratchpad directory (System Prompt)](#5233-scratchpad-directory-system-prompt)
   3. [Learning, Analytics and Workflow Capture](#53-learning-analytics-and-workflow-capture)
      1. [Learning & Insights Analysis](#531-learning-insights-analysis)
         1. [Learning mode (System Prompt)](#5311-learning-mode-system-prompt)
         2. [Learning mode (insights) [System Prompt]](#5312-learning-mode-insights-system-prompt)
         3. [Insights friction analysis (System Prompt)](#5313-insights-friction-analysis-system-prompt)
         4. [Insights at a glance summary (System Prompt)](#5314-insights-at-a-glance-summary-system-prompt)
         5. [Insights on the horizon (System Prompt)](#5315-insights-on-the-horizon-system-prompt)
         6. [Insights session facets extraction (System Prompt)](#5316-insights-session-facets-extraction-system-prompt)
         7. [Insights suggestions (System Prompt)](#5317-insights-suggestions-system-prompt)
      2. [Workflow Capture & Insights](#532-workflow-capture-insights)
         1. [Skillify Current Session (System Prompt)](#5321-skillify-current-session-system-prompt)
         2. [/insights report output (Skill)](#5322-insights-report-output-skill)
         3. [Computer Use MCP (Skill)](#5323-computer-use-mcp-skill)
6. [Multi-Agent Coordination and Autonomous Operation](#6-multi-agent-coordination-and-autonomous-operation)
   1. [Subagent Orchestration and Delegation](#61-subagent-orchestration-and-delegation)
      1. [System Prompts: Subagent Coordination & Delegation](#611-system-prompts-subagent-coordination-delegation)
         1. [Writing subagent prompts (System Prompt)](#6111-writing-subagent-prompts-system-prompt)
         2. [Subagent prompt-writing examples (System Prompt)](#6112-subagent-prompt-writing-examples-system-prompt)
         3. [Subagent delegation examples (System Prompt)](#6113-subagent-delegation-examples-system-prompt)
         4. [Fork usage guidelines (System Prompt)](#6114-fork-usage-guidelines-system-prompt)
         5. [Tool usage (subagent guidance) [System Prompt]](#6115-tool-usage-subagent-guidance-system-prompt)
         6. [Parallel tool call note (part of "Tool usage policy") [System Prompt]](#6116-parallel-tool-call-note-part-of-tool-usage-policy-system-prompt)
      2. [Agent Teams & Multi-Agent Coordination](#612-agent-teams-multi-agent-coordination)
         1. [TeammateTool (Tool Description)](#6121-teammatetool-tool-description)
         2. [SendMessageTool (Tool Description)](#6122-sendmessagetool-tool-description)
         3. [SendMessageTool (non-agent-teams) [Tool Description]](#6123-sendmessagetool-non-agent-teams-tool-description)
         4. [TeamDelete (Tool Description)](#6124-teamdelete-tool-description)
         5. [Agent (usage notes) [Tool Description]](#6125-agent-usage-notes-tool-description)
      3. [Task & Todo Management](#613-task-todo-management)
         1. [TodoWrite (Tool Description)](#6131-todowrite-tool-description)
         2. [TaskCreate (Tool Description)](#6132-taskcreate-tool-description)
         3. [TaskList (teammate workflow) [Tool Description]](#6133-tasklist-teammate-workflow-tool-description)
         4. [Skill (Tool Description)](#6134-skill-tool-description)
   2. [Autonomous Execution and Background Operation](#62-autonomous-execution-and-background-operation)
      1. [System Prompts: Autonomous & Background Operation](#621-system-prompts-autonomous-background-operation)
         1. [Auto mode (System Prompt)](#6211-auto-mode-system-prompt)
         2. [Autonomous loop check (System Prompt)](#6212-autonomous-loop-check-system-prompt)
         3. [Background job behavior (System Prompt)](#6213-background-job-behavior-system-prompt)
         4. [Background session instructions (System Prompt)](#6214-background-session-instructions-system-prompt)
         5. [Executing actions with care (System Prompt)](#6215-executing-actions-with-care-system-prompt)
      2. [Task Management & Progress Tracking](#622-task-management-progress-tracking)
         1. [Tool usage (task management) [System Prompt]](#6221-tool-usage-task-management-system-prompt)
         2. [Doing tasks (ambitious tasks) [System Prompt]](#6222-doing-tasks-ambitious-tasks-system-prompt)
         3. [Doing tasks (help and feedback) [System Prompt]](#6223-doing-tasks-help-and-feedback-system-prompt)
   3. [Planning and Implementation Workflows](#63-planning-and-implementation-workflows)
      1. [System Prompts: Planning & Implementation Workflows](#631-system-prompts-planning-implementation-workflows)
         1. [Remote plan mode (ultraplan) [System Prompt]](#6311-remote-plan-mode-ultraplan-system-prompt)
         2. [Remote planning session (System Prompt)](#6312-remote-planning-session-system-prompt)
         3. [Worker instructions (System Prompt)](#6313-worker-instructions-system-prompt)
         4. [Proactive schedule offer after follow-up work (System Prompt)](#6314-proactive-schedule-offer-after-follow-up-work-system-prompt)
      2. [Planning & Worktree Management](#632-planning-worktree-management)
         1. [EnterPlanMode (Tool Description)](#6321-enterplanmode-tool-description)
         2. [ExitPlanMode (Tool Description)](#6322-exitplanmode-tool-description)
         3. [EnterWorktree (Tool Description)](#6323-enterworktree-tool-description)
         4. [ExitWorktree (Tool Description)](#6324-exitworktree-tool-description)
         5. [REPL (Tool Description)](#6325-repl-tool-description)
      3. [Code Verification & Test Automation](#633-code-verification-test-automation)
         1. [Verify skill (Skill)](#6331-verify-skill-skill)
         2. [Verify CLI changes (example for Verify skill) [Skill]](#6332-verify-cli-changes-example-for-verify-skill-skill)
         3. [Verify server/API changes (example for Verify skill) [Skill]](#6333-verify-serverapi-changes-example-for-verify-skill-skill)
         4. [Create verifier skills (Skill)](#6334-create-verifier-skills-skill)
      4. [Code Quality & Session Diagnostics](#634-code-quality-session-diagnostics)
         1. [Simplify (Skill)](#6341-simplify-skill)
         2. [Debugging (Skill)](#6342-debugging-skill)
         3. [/stuck slash command (Skill)](#6343-stuck-slash-command-skill)
7. [Scheduling, Automation and Productivity Tools](#7-scheduling-automation-and-productivity-tools)
   1. [Scheduling and Loop Execution](#71-scheduling-and-loop-execution)
      1. [Scheduling & Loop Execution](#711-scheduling-loop-execution)
         1. [/loop slash command (Skill)](#7111-loop-slash-command-skill)
         2. [/loop slash command (dynamic mode) [Skill]](#7112-loop-slash-command-dynamic-mode-skill)
         3. [/loop self-pacing mode (Skill)](#7113-loop-self-pacing-mode-skill)
         4. [/loop cloud-first scheduling offer (Skill)](#7114-loop-cloud-first-scheduling-offer-skill)
         5. [Dynamic pacing loop execution (Skill)](#7115-dynamic-pacing-loop-execution-skill)
         6. [Schedule recurring cron and execute immediately (compact) [Skill]](#7116-schedule-recurring-cron-and-execute-immediately-compact-skill)
         7. [Schedule recurring cron and run immediately (Skill)](#7117-schedule-recurring-cron-and-run-immediately-skill)
      2. [Scheduling & Notifications](#712-scheduling-notifications)
         1. [CronCreate (Tool Description)](#7121-croncreate-tool-description)
         2. [ScheduleWakeup (/loop dynamic mode) [Tool Description]](#7122-schedulewakeup-loop-dynamic-mode-tool-description)
         3. [Snooze (delay and reason guidance) [Tool Description]](#7123-snooze-delay-and-reason-guidance-tool-description)
         4. [Schedule proactive offer guidance (Tool Description)](#7124-schedule-proactive-offer-guidance-tool-description)
         5. [PushNotification (Tool Description)](#7125-pushnotification-tool-description)
      3. [Daily Workflow & Meeting Preparation](#713-daily-workflow-meeting-preparation)
         1. [/morning-checkin daily brief (Skill)](#7131-morning-checkin-daily-brief-skill)
         2. [/pre-meeting-checkin event brief (Skill)](#7132-pre-meeting-checkin-event-brief-skill)
   2. [Configuration, Onboarding and Repository Setup](#72-configuration-onboarding-and-repository-setup)
      1. [Configuration & Repository Onboarding](#721-configuration-repository-onboarding)
         1. [/init CLAUDE.md and skill setup (new version) [Skill]](#7211-init-claudemd-and-skill-setup-new-version-skill)
         2. [Update Claude Code Config (Skill)](#7212-update-claude-code-config-skill)
         3. [update-config (7-step verification flow) [Skill]](#7213-update-config-7-step-verification-flow-skill)
         4. [Generate permission allowlist from transcripts (Skill)](#7214-generate-permission-allowlist-from-transcripts-skill)
         5. [Team onboarding guide (Skill)](#7215-team-onboarding-guide-skill)
      2. [Hooks & Configuration](#722-hooks-configuration)
         1. [Hooks Configuration (System Prompt)](#7221-hooks-configuration-system-prompt)
         2. [Harness instructions (System Prompt)](#7222-harness-instructions-system-prompt)
         3. [Tool execution denied (System Prompt)](#7223-tool-execution-denied-system-prompt)
      3. [GitHub & CI/CD Integration](#723-github-cicd-integration)
         1. [GitHub Actions workflow for @claude mentions (Data)](#7231-github-actions-workflow-for-claude-mentions-data)
         2. [GitHub App installation PR description (Data)](#7232-github-app-installation-pr-description-data)
   3. [User Interaction and Teaching Modes](#73-user-interaction-and-teaching-modes)
      1. [User Interaction & Teaching](#731-user-interaction-teaching)
         1. [AskUserQuestion (Tool Description)](#7311-askuserquestion-tool-description)
         2. [AskUserQuestion (preview field) [Tool Description]](#7312-askuserquestion-preview-field-tool-description)
         3. [request_teach_access (part of teach mode) [Tool Description]](#7313-request_teach_access-part-of-teach-mode-tool-description)
         4. [Background monitor (streaming events) [Tool Description]](#7314-background-monitor-streaming-events-tool-description)
      2. [Browser Automation & Interaction](#732-browser-automation-interaction)
         1. [Chrome browser MCP tools (System Prompt)](#7321-chrome-browser-mcp-tools-system-prompt)
         2. [Claude in Chrome browser automation (System Prompt)](#7322-claude-in-chrome-browser-automation-system-prompt)
8. [Development Tools and Workspace Operations](#8-development-tools-and-workspace-operations)
   1. [File System Operations](#81-file-system-operations)
      1. [ReadFile (Tool Description)](#811-readfile-tool-description)
      2. [Write (Tool Description)](#812-write-tool-description)
      3. [Write (read existing file first) [Tool Description]](#813-write-read-existing-file-first-tool-description)
      4. [Edit (Tool Description)](#814-edit-tool-description)
      5. [NotebookEdit (Tool Description)](#815-notebookedit-tool-description)
   2. [Search & Code Intelligence](#82-search-code-intelligence)
      1. [Grep (Tool Description)](#821-grep-tool-description)
      2. [LSP (Tool Description)](#822-lsp-tool-description)
      3. [ToolSearch (second part) [Tool Description]](#823-toolsearch-second-part-tool-description)
   3. [Browser & Web Automation](#83-browser-web-automation)
      1. [Computer (Tool Description)](#831-computer-tool-description)
      2. [BrowserBatch (Tool Description)](#832-browserbatch-tool-description)
      3. [WebFetch (Tool Description)](#833-webfetch-tool-description)
      4. [WebSearch (Tool Description)](#834-websearch-tool-description)
      5. [Computer action (Tool Parameter)](#835-computer-action-tool-parameter)

---

## 1. Bash and Shell Execution

Covers all aspects of bash command execution within Claude Code: syntax conventions, sandbox security restrictions, tool delegation preferences, git operations, and platform-specific environments including PowerShell and WSL.

### 1.1 Bash Tool: Core Execution & Syntax

Bash command execution with proper syntax conventions: chain dependent commands with && for sequential execution, run independent commands as parallel tool calls, quote file paths with spaces, and use absolute paths to maintain working directory context across commands. Default timeout applies unless specified; verify parent directories before file creation.

#### 1.1.1 [Bash (overview) [Tool Description]](system-prompts/tool-description-bash-overview.md)

Executes a given bash command and returns its output.

#### 1.1.2 [Bash (no newlines) [Tool Description]](system-prompts/tool-description-bash-no-newlines.md)

Do not use newlines to separate bash commands.

#### 1.1.3 [Bash (parallel commands) [Tool Description]](system-prompts/tool-description-bash-parallel-commands.md)

Run independent commands as parallel tool calls in a single message.

#### 1.1.4 [Bash (sequential commands) [Tool Description]](system-prompts/tool-description-bash-sequential-commands.md)

Chain dependent commands with && in a single bash call when they must run sequentially.

#### 1.1.5 [Bash (semicolon usage) [Tool Description]](system-prompts/tool-description-bash-semicolon-usage.md)

Use semicolons only when running commands sequentially but failure of earlier commands does not matter.

#### 1.1.6 [Bash (quote file paths) [Tool Description]](system-prompts/tool-description-bash-quote-file-paths.md)

Always quote file paths containing spaces with double quotes in bash commands.

#### 1.1.7 [Bash (working directory) [Tool Description]](system-prompts/tool-description-bash-working-directory.md)

Working directory persists between commands, but shell state does not; environment initializes from user profile.

#### 1.1.8 [Bash (maintain cwd) [Tool Description]](system-prompts/tool-description-bash-maintain-cwd.md)

Instructs to use absolute paths and avoid cd commands to maintain current working directory, preventing permission prompts and maintaining context throughout the session.

#### 1.1.9 [Bash (timeout) [Tool Description]](system-prompts/tool-description-bash-timeout.md)

Specify optional command timeout in milliseconds up to a configured maximum; default timeout applies if not specified.

#### 1.1.10 [Bash (verify parent directory) [Tool Description]](system-prompts/tool-description-bash-verify-parent-directory.md)

Before creating new directories or files, verify the parent directory exists and is the correct location using ls.

### 1.2 Bash Tool: Sandbox Security & Restrictions

All bash commands execute within a mandatory sandbox that restricts access to sensitive paths, non-whitelisted network hosts, and Unix sockets. Detect sandbox failures by access-denied errors, network connection failures, and operation-not-permitted messages; immediately retry with sandbox disabled when detected, then explain the restriction to the user. Never suggest adding sensitive credentials or shell configuration files to the allowlist.

#### 1.2.1 [Bash (sandbox — adjust settings) [Tool Description]](system-prompts/tool-description-bash-sandbox-adjust-settings.md)

If a command fails due to sandbox restrictions, work with the user to adjust sandbox settings.

#### 1.2.2 [Bash (sandbox — default to sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-default-to-sandbox.md)

Always default to running commands within the sandbox unless the user explicitly requests otherwise.

#### 1.2.3 [Bash (sandbox — evidence: access denied) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-access-denied.md)

Access denied to specific paths outside allowed directories indicates sandbox restriction.

#### 1.2.4 [Bash (sandbox — evidence list header) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-list-header.md)

Header introducing the list of indicators that sandbox restrictions caused a failure.

#### 1.2.5 [Bash (sandbox — evidence: network failures) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-network-failures.md)

Network connection failures to non-whitelisted hosts indicate sandbox network restrictions.

#### 1.2.6 [Bash (sandbox — evidence: operation not permitted) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-operation-not-permitted.md)

Operation not permitted errors for file or network operations signal sandbox restrictions.

#### 1.2.7 [Bash (sandbox — evidence: unix socket errors) [Tool Description]](system-prompts/tool-description-bash-sandbox-evidence-unix-socket-errors.md)

Unix socket connection errors indicate sandbox restrictions.

#### 1.2.8 [Bash (sandbox — explain restriction) [Tool Description]](system-prompts/tool-description-bash-sandbox-explain-restriction.md)

Briefly explain which sandbox restriction caused the failure and mention the /sandbox command for managing restrictions.

#### 1.2.9 [Bash (sandbox — failure evidence condition) [Tool Description]](system-prompts/tool-description-bash-sandbox-failure-evidence-condition.md)

Identifies when a command failure shows evidence of sandbox restrictions versus other causes like missing files or network issues.

#### 1.2.10 [Bash (sandbox — mandatory mode) [Tool Description]](system-prompts/tool-description-bash-sandbox-mandatory-mode.md)

All commands must run in sandbox mode; the dangerouslyDisableSandbox parameter is disabled by policy.

#### 1.2.11 [Bash (sandbox — no exceptions) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-exceptions.md)

Commands cannot run outside the sandbox under any circumstances.

#### 1.2.12 [Bash (sandbox — no sensitive paths) [Tool Description]](system-prompts/tool-description-bash-sandbox-no-sensitive-paths.md)

Do not suggest adding sensitive paths like ~/.bashrc, ~/.ssh/*, or credential files to the sandbox allowlist.

#### 1.2.13 [Bash (sandbox — per-command) [Tool Description]](system-prompts/tool-description-bash-sandbox-per-command.md)

Treat each command individually; default to sandbox for future commands even after running one with dangerouslyDisableSandbox.

#### 1.2.14 [Bash (sandbox — response header) [Tool Description]](system-prompts/tool-description-bash-sandbox-response-header.md)

Header for instructions on how to respond when sandbox-caused failures are detected.

#### 1.2.15 [Bash (sandbox — retry without sandbox) [Tool Description]](system-prompts/tool-description-bash-sandbox-retry-without-sandbox.md)

Immediately retry with dangerouslyDisableSandbox: true when sandbox failure is detected without asking the user.

#### 1.2.16 [Bash (sandbox — tmpdir) [Tool Description]](system-prompts/tool-description-bash-sandbox-tmpdir.md)

Use the $TMPDIR environment variable for temporary files in sandbox mode instead of /tmp directly.

#### 1.2.17 [Bash (sandbox — user permission prompt) [Tool Description]](system-prompts/tool-description-bash-sandbox-user-permission-prompt.md)

Disabling sandbox will prompt the user for permission.

### 1.3 Bash Tool: Sleep & Polling Behavior

Avoid unnecessary delays: execute commands immediately without sleep between them, use check commands like gh run view instead of polling loops, and never poll background tasks—wait for completion notifications instead. Keep any required sleep duration short to prevent blocking the user.

#### 1.3.1 [Bash (sleep — keep short) [Tool Description]](system-prompts/tool-description-bash-sleep-keep-short.md)

Keep sleep duration short to avoid blocking the user.

#### 1.3.2 [Bash (sleep — no polling background tasks) [Tool Description]](system-prompts/tool-description-bash-sleep-no-polling-background-tasks.md)

Do not poll background tasks started with run_in_background; wait for completion notification instead.

#### 1.3.3 [Bash (sleep — run immediately) [Tool Description]](system-prompts/tool-description-bash-sleep-run-immediately.md)

Do not sleep between commands that can run immediately; execute them sequentially without delay.

#### 1.3.4 [Bash (sleep — use check commands) [Tool Description]](system-prompts/tool-description-bash-sleep-use-check-commands.md)

When polling external processes, use check commands like gh run view instead of sleeping first.

### 1.4 Bash Tool: Preferred Alternatives & Tool Selection

Delegate file and content operations to specialized tools for better transparency and user experience: use Read for file reading, Write for file writing, Edit for file editing, Grep for content search, and Glob for file discovery. Avoid bash equivalents like cat, echo, find, grep, sed, and awk for these operations.

#### 1.4.1 [Bash (prefer dedicated tools) [Tool Description]](system-prompts/tool-description-bash-prefer-dedicated-tools.md)

Avoid using bash for find, grep, cat, and similar read-only searching commands; use dedicated tools instead.

#### 1.4.2 [Bash (alternative — communication) [Tool Description]](system-prompts/tool-description-bash-alternative-communication.md)

Instructs to output text directly instead of using echo or printf for communication.

#### 1.4.3 [Bash (alternative — content search) [Tool Description]](system-prompts/tool-description-bash-alternative-content-search.md)

Directs to use the Grep tool for content search instead of grep or rg commands.

#### 1.4.4 [Bash (alternative — edit files) [Tool Description]](system-prompts/tool-description-bash-alternative-edit-files.md)

Directs to use the Edit tool for file editing instead of sed or awk commands.

#### 1.4.5 [Bash (alternative — file search) [Tool Description]](system-prompts/tool-description-bash-alternative-file-search.md)

Directs to use the Glob tool for file search instead of find or ls commands.

#### 1.4.6 [Bash (alternative — read files) [Tool Description]](system-prompts/tool-description-bash-alternative-read-files.md)

Directs to use the Read tool for file reading instead of cat, head, or tail commands.

#### 1.4.7 [Bash (alternative — write files) [Tool Description]](system-prompts/tool-description-bash-alternative-write-files.md)

Directs to use the Write tool for file writing instead of echo or cat commands.

#### 1.4.8 [Bash (built-in tools note) [Tool Description]](system-prompts/tool-description-bash-built-in-tools-note.md)

Explains that built-in tools provide better user experience and transparency than Bash equivalents for file and content operations.

### 1.5 Bash Tool: Git Operations

Execute git commits and pull requests safely: never skip hooks or bypass signing unless explicitly requested, investigate and fix hook failures, prefer creating new commits over amending existing ones, and consider safer alternatives before destructive operations like reset or force push. Follow comprehensive commit message formatting and testing checklists when creating pull requests.

#### 1.5.1 [Bash (git — avoid destructive ops) [Tool Description]](system-prompts/tool-description-bash-git-avoid-destructive-ops.md)

Instructs to consider safer alternatives before running destructive git operations like reset, force push, or checkout.

#### 1.5.2 [Bash (Git commit and PR creation instructions) [Tool Description]](system-prompts/tool-description-bash-git-commit-and-pr-creation-instructions.md)

Comprehensive instructions for creating git commits and GitHub pull requests, including safety protocols, parallel command execution, commit message drafting, hook handling, and PR creation with proper formatting and testing checklists.

#### 1.5.3 [Bash (git — never skip hooks) [Tool Description]](system-prompts/tool-description-bash-git-never-skip-hooks.md)

Prohibits skipping git hooks or bypassing signing unless explicitly requested by the user, requiring investigation and fixing of hook failures.

#### 1.5.4 [Bash (git — prefer new commits) [Tool Description]](system-prompts/tool-description-bash-git-prefer-new-commits.md)

Instructs to create new commits rather than amending existing ones.

### 1.6 PowerShell Command Execution

Execute PowerShell commands with timeout control and syntax support for variables, cmdlets, pipes, and registry operations. Specialized tools handle file operations; interactive commands are avoided.

#### 1.6.1 [PowerShell (Tool Description)](system-prompts/tool-description-powershell.md)

Execute PowerShell commands with optional timeout; prefer specialized tools for file operations and avoid interactive commands; includes syntax guidance for variables, cmdlets, pipes, and registry access.

### 1.7 Specialized Execution Modes & Constraints

Platform-specific operational modes and syntax constraints including minimal feature sets, scripting conventions for efficient codebase exploration, and environment-specific limitations for Windows PowerShell and WSL that guide correct command execution.

#### 1.7.1 [Minimal mode (System Prompt)](system-prompts/system-prompt-minimal-mode.md)

Describes minimal mode operation that disables hooks, LSP, plugins, auto-memory, and background features while requiring explicit context via CLI flags for authentication and configuration.

#### 1.7.2 [REPL tool usage and scripting conventions (System Prompt)](system-prompts/system-prompt-repl-tool-usage-and-scripting-conventions.md)

Defines dense JavaScript scripting patterns for REPL investigation, including shorthands for shell, file, and grep operations, batching rules, and API reference for efficient codebase exploration.

#### 1.7.3 [PowerShell edition for 5.1 (System Prompt)](system-prompts/system-prompt-powershell-edition-for-51.md)

Documents Windows PowerShell 5.1 limitations including unavailable pipeline operators, ternary operators, stderr redirection quirks, and JSON parsing differences to guide correct syntax.

#### 1.7.4 [WSL managed settings double opt-in (System Prompt)](system-prompts/system-prompt-wsl-managed-settings-double-opt-in.md)

Explains that WSL reads Windows managed settings policy chain only when admin-enabled flag is set, with HKCU requiring additional user opt-in.

#### 1.7.5 [One of six rules for using sleep command (System Prompt)](system-prompts/system-prompt-one-of-six-rules-for-using-sleep-command.md)

Prohibits retrying failing commands in sleep loops; requires diagnosing root causes instead.

#### 1.7.6 [Avoiding Unnecessary Sleep Commands (part of PowerShell tool description) [System Prompt]](system-prompts/system-prompt-avoiding-unnecessary-sleep-commands-part-of-powershell-tool-description.md)

Advises against unnecessary Start-Sleep commands in PowerShell, preferring immediate execution, background job notifications, root-cause diagnosis, and polling with check commands over sleep loops.

---

## 2. System Reminders and Runtime Notifications

Internal directives and feedback mechanisms that keep Claude aligned during execution: file state alerts, hook execution results, plan mode orchestration, agent coordination signals, and diagnostic output formatting.

### 2.1 File and IDE State Notifications

Alerts Claude to file state changes and IDE interactions, including truncation, external modifications, empty files, offset errors, and user selections. These reminders ensure Claude maintains awareness of file conditions and user context without requiring explicit tool invocation.

#### 2.1.1 [File shorter than offset (System Reminder)](system-prompts/system-reminder-file-shorter-than-offset.md)

Alerts Claude when a file read offset exceeds the file's actual length.

#### 2.1.2 [File truncated (System Reminder)](system-prompts/system-reminder-file-truncated.md)

Notifies Claude that a file was truncated due to size limits and instructs use of the read tool to access remaining content without informing the user.

#### 2.1.3 [File exists but empty (System Reminder)](system-prompts/system-reminder-file-exists-but-empty.md)

Warns Claude that a file exists but contains no content.

#### 2.1.4 [File modified by user or linter (System Reminder)](system-prompts/system-reminder-file-modified-by-user-or-linter.md)

Notifies Claude that a file was externally modified by the user or linter and provides the relevant changes with line numbers.

#### 2.1.5 [File opened in IDE (System Reminder)](system-prompts/system-reminder-file-opened-in-ide.md)

Notifies Claude that the user opened a file in the IDE, which may or may not relate to the current task.

#### 2.1.6 [Lines selected in IDE (System Reminder)](system-prompts/system-reminder-lines-selected-in-ide.md)

Informs Claude that the user selected specific lines in the IDE, noting the selection may or may not relate to the current task.

#### 2.1.7 [Compact file reference (System Reminder)](system-prompts/system-reminder-compact-file-reference.md)

Notifies Claude that a file was read before conversation summarization but is too large to include, directing use of the Read tool if needed.

### 2.2 Hook Execution Feedback

Reports outcomes from hook command execution, including success, blocking errors, and flow control signals. These reminders provide Claude with hook-generated context and error information to guide subsequent actions.

#### 2.2.1 [Hook additional context (System Reminder)](system-prompts/system-reminder-hook-additional-context.md)

Provides additional context information from a hook execution.

#### 2.2.2 [Hook blocking error (System Reminder)](system-prompts/system-reminder-hook-blocking-error.md)

Reports an error from a blocking hook command execution.

#### 2.2.3 [Hook stopped continuation prefix (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation-prefix.md)

Prefix text for messages when a hook stops continuation.

#### 2.2.4 [Hook stopped continuation (System Reminder)](system-prompts/system-reminder-hook-stopped-continuation.md)

Notifies Claude when a hook stops the continuation of execution.

#### 2.2.5 [Hook success (System Reminder)](system-prompts/system-reminder-hook-success.md)

Reports successful execution of a hook with its output content.

#### 2.2.6 [Stop hook blocking error (System Reminder)](system-prompts/system-reminder-stop-hook-blocking-error.md)

Reports an error from a blocking stop hook command.

### 2.3 Plan Mode Orchestration

Governs planning workflows across multiple modes—iterative pair-planning, five-phase multi-agent exploration, and subagent-constrained planning—with enforcement of approval mechanisms and plan file continuity. These reminders structure how Claude approaches planning tasks and transitions between planning states.

#### 2.3.1 [Plan file reference (System Reminder)](system-prompts/system-reminder-plan-file-reference.md)

References an existing plan file from plan mode and instructs Claude to continue working on it if relevant and incomplete.

#### 2.3.2 [Plan mode approval tool enforcement (System Reminder)](system-prompts/system-reminder-plan-mode-approval-tool-enforcement.md)

Requires plan mode turns to end with either AskUserQuestion for clarification or ExitPlanMode for approval, forbidding approval requests through other means.

#### 2.3.3 [Plan mode is active (5-phase) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-5-phase.md)

Defines a five-phase planning workflow with parallel exploration and multi-agent planning, covering initial understanding, design, review, implementation, and approval phases.

#### 2.3.4 [Plan mode is active (iterative) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-iterative.md)

Describes an iterative pair-planning workflow where Claude explores code, updates the plan file incrementally, and asks the user clarifying questions until the plan is complete.

#### 2.3.5 [Plan mode is active (subagent) [System Reminder]](system-prompts/system-reminder-plan-mode-is-active-subagent.md)

Simplified plan mode instructions for subagents, restricting edits to the plan file and read-only operations while allowing clarifying questions.

#### 2.3.6 [Plan mode re-entry (System Reminder)](system-prompts/system-reminder-plan-mode-re-entry.md)

Instructs Claude when re-entering plan mode to evaluate whether the new request is a continuation or different task, and to edit the plan file accordingly before exiting.

#### 2.3.7 [Exited plan mode (System Reminder)](system-prompts/system-reminder-exited-plan-mode.md)

Notifies Claude that plan mode has been exited and normal editing and tool capabilities are now available.

### 2.4 Memory and Session Context

Restores persistent memory contents, MCP resource states, and cross-session context including prior skill invocations and working directory updates. These reminders preserve information across conversation boundaries and tool integrations.

#### 2.4.1 [Memory file contents (System Reminder)](system-prompts/system-reminder-memory-file-contents.md)

Displays the contents of a memory file by path, including type information.

#### 2.4.2 [Nested memory contents (System Reminder)](system-prompts/system-reminder-nested-memory-contents.md)

Displays the contents of a nested memory file.

#### 2.4.3 [MCP resource no content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-content.md)

Indicates that an MCP resource has no content to display.

#### 2.4.4 [MCP resource no displayable content (System Reminder)](system-prompts/system-reminder-mcp-resource-no-displayable-content.md)

Indicates that an MCP resource exists but has no displayable content.

#### 2.4.5 [Session continuation (System Reminder)](system-prompts/system-reminder-session-continuation.md)

Notifies Claude that the session is continuing from another machine and the working directory has been updated.

#### 2.4.6 [Previously invoked skills (System Reminder)](system-prompts/system-reminder-previously-invoked-skills.md)

Restores context from skills invoked before conversation compaction, warning Claude not to re-execute setup actions or treat prior inputs as current instructions.

### 2.5 Progress Tracking and Resource Monitoring

Prompts task and todo tracking, monitors token and budget consumption, and enforces plan verification. These internal reminders maintain visibility into resource constraints and task completion without surfacing tracking mechanics to users.

#### 2.5.1 [Task tools reminder (System Reminder)](system-prompts/system-reminder-task-tools-reminder.md)

Reminds Claude to use task tracking tools to create and update tasks when working on trackable progress, while never mentioning the reminder to the user.

#### 2.5.2 [TodoWrite reminder (System Reminder)](system-prompts/system-reminder-todowrite-reminder.md)

Reminds Claude to use the TodoWrite tool for tracking task progress when relevant, while maintaining the reminder as internal and never disclosing it to the user.

#### 2.5.3 [Token usage (System Reminder)](system-prompts/system-reminder-token-usage.md)

Displays current token consumption statistics showing used, total, and remaining tokens.

#### 2.5.4 [USD budget (System Reminder)](system-prompts/system-reminder-usd-budget.md)

Displays current USD budget consumption showing spent, total, and remaining budget.

#### 2.5.5 [Verify plan reminder (System Reminder)](system-prompts/system-reminder-verify-plan-reminder.md)

Reminds Claude to verify that all plan items were completed correctly using a verification tool after implementation.

### 2.6 System Reminders: Agent Coordination & Loop Control

Directives that configure Claude's behavior within multi-agent systems and dynamic execution loops. These reminders establish team identity, coordinate task delegation, manage graceful shutdown, calibrate reasoning depth, and handle asynchronous wakeups—enabling Claude to operate as a named team member with awareness of context and scheduling constraints.

#### 2.6.1 [Agent mention (System Reminder)](system-prompts/system-reminder-agent-mention.md)

Notifies Claude that the user wants to invoke a specific agent and instructs appropriate invocation with required context.

#### 2.6.2 [Team Coordination (System Reminder)](system-prompts/system-reminder-team-coordination.md)

Establishes Claude's identity as a named teammate within a team, with instructions to read team config, manage task lists, and communicate with teammates and team lead by name rather than UUID.

#### 2.6.3 [Team Shutdown (System Reminder)](system-prompts/system-reminder-team-shutdown.md)

Requires Claude to shut down all team members gracefully and clean up before providing a final response in non-interactive mode.

#### 2.6.4 [Loop wakeup not scheduled (System Reminder)](system-prompts/system-reminder-loop-wakeup-not-scheduled.md)

Instructs Claude on handling /loop dynamic mode wakeups that were not scheduled, specifying when to re-issue with the prompt field and when the loop has ended.

#### 2.6.5 [Thinking frequency tuning (System Reminder)](system-prompts/system-reminder-thinking-frequency-tuning.md)

Instructs Claude to calibrate internal reasoning based on task complexity, responding directly to simple messages without extended thinking while allowing deeper reasoning for complex tasks.

#### 2.6.6 [/btw side question (System Reminder)](system-prompts/system-reminder-btw-side-question.md)

Configures a lightweight side-question agent with no tools that answers one question directly from conversation context without interrupting the main agent.

### 2.7 System Reminders: Diagnostics & Output Style

Operational directives that surface code quality issues, enforce output formatting, constrain security-sensitive analysis, and activate advanced planning workflows. These reminders keep Claude aligned with active style guidelines while enabling malware analysis under strict safety constraints and orchestrating multi-agent exploration of complex codebases.

#### 2.7.1 [New diagnostics detected (System Reminder)](system-prompts/system-reminder-new-diagnostics-detected.md)

Alerts Claude to newly detected diagnostic issues with a formatted summary and list.

#### 2.7.2 [Output style active (System Reminder)](system-prompts/system-reminder-output-style-active.md)

Reminds Claude that an output style is active and to follow its specific guidelines.

#### 2.7.3 [Malware analysis after Read tool call (System Reminder)](system-prompts/system-reminder-malware-analysis-after-read-tool-call.md)

Permits Claude to analyze malware and explain its behavior but forbids improving or augmenting malicious code.

#### 2.7.4 [Ultraplan mode (System Reminder)](system-prompts/system-reminder-ultraplan-mode.md)

Activates a multi-agent planning workflow where Claude spawns parallel agents to explore codebase architecture, identify files needing modification, and critique the plan before implementation or teleportation to the user's local terminal.

---

## 3. Claude API, SDKs and Developer Documentation

Reference documentation and practical guidance for building with the Claude API: language-specific SDKs, tool use patterns, streaming, batch processing, model selection, prompt caching, and migration between model versions.

### 3.1 Managed Agents API: Reference Documentation

Complete technical reference for the Managed Agents API covering architecture, lifecycle management, event streaming, memory persistence, tool integration, and SDK implementations. Spans core concepts through endpoint specifications, client patterns, and language-specific examples for Python, TypeScript, and raw HTTP.

#### 3.1.1 [Managed Agents overview (Data)](system-prompts/data-managed-agents-overview.md)

Comprehensive overview of Managed Agents API architecture, mandatory agent-then-session flow, beta headers, documentation guide, and common pitfalls.

#### 3.1.2 [Managed Agents core concepts (Data)](system-prompts/data-managed-agents-core-concepts.md)

Reference documentation covering Managed Agents architecture, core concepts (Agents, Sessions, Environments, Containers), lifecycle, versioning, and endpoints.

#### 3.1.3 [Managed Agents endpoint reference (Data)](system-prompts/data-managed-agents-endpoint-reference.md)

Comprehensive reference for Managed Agents API endpoints, SDK methods, request/response schemas, error handling, and rate limits across all resources.

#### 3.1.4 [Managed Agents environments and resources (Data)](system-prompts/data-managed-agents-environments-and-resources.md)

Reference covering Managed Agents environments, file resources, GitHub repository mounting, and the Files API with SDK examples.

#### 3.1.5 [Managed Agents events and steering (Data)](system-prompts/data-managed-agents-events-and-steering.md)

Reference guide for sending and receiving events on managed agent sessions including streaming, polling, reconnection, message queuing, and interrupts.

#### 3.1.6 [Managed Agents memory stores reference (Data)](system-prompts/data-managed-agents-memory-stores-reference.md)

Reference documentation for Managed Agents memory stores including creation, session attachment, FUSE mounts, memory CRUD, concurrency, versions, and redaction.

#### 3.1.7 [Managed Agents tools and skills (Data)](system-prompts/data-managed-agents-tools-and-skills.md)

Reference documentation covering tool types (agent toolset, MCP, custom), permission policies, vault credential management, and skills API.

#### 3.1.8 [Managed Agents client patterns (Data)](system-prompts/data-managed-agents-client-patterns.md)

Reference guide for common client-side patterns driving Managed Agent sessions including stream reconnection, tool confirmations, interrupts, and custom tools.

#### 3.1.9 [Managed Agents reference — cURL (Data)](system-prompts/data-managed-agents-reference-curl.md)

cURL and raw HTTP request examples for Managed Agents API including environment, agent, and session lifecycle operations.

#### 3.1.10 [Managed Agents reference — Python (Data)](system-prompts/data-managed-agents-reference-python.md)

Python SDK reference for creating and managing agents, sessions, environments, streaming, custom tools, files, and MCP server integration.

#### 3.1.11 [Managed Agents reference — TypeScript (Data)](system-prompts/data-managed-agents-reference-typescript.md)

TypeScript SDK reference for creating and managing agents, sessions, environments, streaming, custom tools, file uploads, and MCP server integration.

### 3.2 Claude API: Language-Specific SDK References

SDK documentation for Claude API across eight programming languages and HTTP, covering client initialization, request patterns, streaming, tool use, prompt caching, extended thinking, and structured outputs. Each reference provides installation, configuration, and practical examples tailored to language idioms.

#### 3.2.1 [Claude API reference — Python (Data)](system-prompts/data-claude-api-reference-python.md)

Python SDK reference covering installation, client configuration, basic requests, vision, prompt caching, extended thinking, error handling, and multi-turn conversations.

#### 3.2.2 [Claude API reference — TypeScript (Data)](system-prompts/data-claude-api-reference-typescript.md)

TypeScript SDK reference covering installation, basic requests, vision, prompt caching, extended thinking, error handling, and multi-turn conversations with compaction.

#### 3.2.3 [Claude API reference — Go (Data)](system-prompts/data-claude-api-reference-go.md)

Go SDK reference including installation, client initialization, streaming, tool use with BetaToolRunner, thinking, prompt caching, and server-side tools.

#### 3.2.4 [Claude API reference — Java (Data)](system-prompts/data-claude-api-reference-java.md)

Java SDK reference covering installation, basic requests, streaming, thinking, tool use with annotated classes and BetaToolRunner, effort parameter, and structured output.

#### 3.2.5 [Claude API reference — C# (Data)](system-prompts/data-claude-api-reference-c.md)

C# SDK reference covering installation, client initialization, basic requests, streaming, thinking, tool use, effort parameter, prompt caching, and structured output.

#### 3.2.6 [Claude API reference — PHP (Data)](system-prompts/data-claude-api-reference-php.md)

PHP SDK reference including installation, client initialization, streaming, tool use with BetaRunnableTool, extended thinking, prompt caching, and structured outputs.

#### 3.2.7 [Claude API reference — Ruby (Data)](system-prompts/data-claude-api-reference-ruby.md)

Ruby SDK reference including installation, basic requests, streaming, tool use with beta tool runner, and prompt caching.

#### 3.2.8 [Claude API reference — cURL (Data)](system-prompts/data-claude-api-reference-curl.md)

Raw HTTP API reference for Claude using cURL, covering basic requests, streaming, tool use, prompt caching, and extended thinking.

### 3.3 Claude API: Tool Use, Streaming & Batches

Operational patterns for Claude API including tool definitions and agentic loops, real-time streaming with content handling, asynchronous batch processing for cost-optimized workloads, and file management. Covers both conceptual foundations and language-specific implementations for Python and TypeScript.

#### 3.3.1 [Tool use concepts (Data)](system-prompts/data-tool-use-concepts.md)

Conceptual foundations of tool use covering tool definitions, tool choice, tool runner vs manual loops, and server-side tools.

#### 3.3.2 [Tool use reference — Python (Data)](system-prompts/data-tool-use-reference-python.md)

Python tool use reference including tool runner, manual agentic loop, code execution, MCP conversion, and structured outputs.

#### 3.3.3 [Tool use reference — TypeScript (Data)](system-prompts/data-tool-use-reference-typescript.md)

TypeScript tool use reference including tool runner with Zod, manual agentic loop, code execution, and structured outputs.

#### 3.3.4 [Streaming reference — Python (Data)](system-prompts/data-streaming-reference-python.md)

Python streaming reference including sync/async streaming, handling different content types, and best practices for token tracking.

#### 3.3.5 [Streaming reference — TypeScript (Data)](system-prompts/data-streaming-reference-typescript.md)

TypeScript streaming reference including basic streaming, handling different content types, and tool use integration.

#### 3.3.6 [Message Batches API reference — Python (Data)](system-prompts/data-message-batches-api-reference-python.md)

Python Batches API reference including batch creation, status polling, and result retrieval at 50% cost reduction.

#### 3.3.7 [Files API reference — Python (Data)](system-prompts/data-files-api-reference-python.md)

Python Files API reference covering file upload, listing, deletion, and usage in messages for documents and images.

#### 3.3.8 [Files API reference — TypeScript (Data)](system-prompts/data-files-api-reference-typescript.md)

TypeScript reference for the Files API covering file upload, listing, deletion, and usage in messages with code examples.

### 3.4 Claude API: Models, Caching & Infrastructure

Core API reference and optimization resources covering model selection, pricing, prompt caching design patterns, error handling, live documentation sources, and CLI tooling for managing infrastructure and agents.

#### 3.4.1 [Claude model catalog (Data)](system-prompts/data-claude-model-catalog.md)

Catalog of current, legacy, and retired Claude models with exact IDs, context windows, pricing, and programmatic capability discovery via the Models API.

#### 3.4.2 [Prompt Caching — Design & Optimization (Data)](system-prompts/data-prompt-caching-design-optimization.md)

Document on designing prompt-building code for effective caching, including placement patterns, anti-patterns, and architectural guidance.

#### 3.4.3 [HTTP error codes reference (Data)](system-prompts/data-http-error-codes-reference.md)

Comprehensive reference for Claude API HTTP error codes, their causes, handling strategies, and SDK exception types with retry guidance.

#### 3.4.4 [Live documentation sources (Data)](system-prompts/data-live-documentation-sources.md)

WebFetch URLs for current Claude API documentation, Managed Agents, and SDK repositories to fetch latest information when cached content may be outdated.

#### 3.4.5 [Anthropic CLI (Data)](system-prompts/data-anthropic-cli.md)

Reference for the ant CLI covering installation, authentication, command structure, input/output shaping, managed agents workflows, and scripting patterns for control-plane resource management.

### 3.5 API Development & Model Migration

Practical guidance for building Claude applications through the API, including architectural decisions around agent design, context management, and tool integration. Covers systematic migration paths for upgrading to newer Claude models with breaking-change awareness and per-SDK syntax updates.

#### 3.5.1 [Building LLM-powered applications with Claude (Skill)](system-prompts/skill-building-llm-powered-applications-with-claude.md)

Comprehensive guide for building LLM applications with Claude, including language detection, API surface selection (Claude API vs. Managed Agents), model defaults, thinking/effort configuration, and language-specific documentation reading with decision trees for choosing the right tier.

#### 3.5.2 [Build with Claude API (reference guide) [Skill]](system-prompts/skill-build-with-claude-api-reference-guide.md)

Quick-reference navigation template for language-specific Claude API documentation, mapping common tasks (streaming, batches, tool-use, agents, caching) to relevant documentation files and sections.

#### 3.5.3 [Agent Design Patterns (Skill)](system-prompts/skill-agent-design-patterns.md)

Reference guide for building agents on the Claude API, covering tool surface design decisions (bash vs. dedicated tools), context management strategies (editing, compaction, memory), caching constraints and workarounds, and patterns for composing tool calls and scaling instruction sets.

#### 3.5.4 [Model migration guide (Skill)](system-prompts/skill-model-migration-guide.md)

Step-by-step instructions for migrating existing code to newer Claude models, covering breaking changes, deprecated parameters, per-SDK syntax, prompt-behavior shifts, and comprehensive checklists for Opus 4.6, Sonnet 4.6, and Opus 4.7.

---

## 4. Agent Prompts and Behavioral Standards

Specialized agent prompt templates and behavioral guidelines covering code review, security analysis, git automation, utility operations, communication style, engineering standards, and agent identity and decision-making.

### 4.1 Code Review, Security and Git Automation

Agent prompts for analyzing code changes, detecting vulnerabilities, enforcing security policies, and automating git workflows including commits, pull requests, and branch management.

#### 4.1.1 Agent Prompts: Code Review & Security Analysis

Specialized agents for analyzing code changes and autonomous actions, detecting vulnerabilities, enforcing security policies, and filtering false positives through expert-level review and threat classification.

##### 4.1.1.1 [/review-pr slash command (Agent Prompt)](system-prompts/agent-prompt-review-pr-slash-command.md)

Expert code reviewer that fetches GitHub PR details and diffs, then analyzes changes for code quality, style, correctness, performance, test coverage, and security issues.

##### 4.1.1.2 [/security-review slash command (Agent Prompt)](system-prompts/agent-prompt-security-review-slash-command.md)

Senior security engineer conducting focused code review of PR changes to identify high-confidence exploitable vulnerabilities in input validation, authentication, crypto, injection, and data exposure.

##### 4.1.1.3 [Security monitor for autonomous agent actions (first part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-first-part.md)

Security classifier that evaluates autonomous coding agent actions against block/allow rules to prevent prompt injection, scope creep, and accidental damage, with user intent as the final signal.

##### 4.1.1.4 [Security monitor for autonomous agent actions (second part) [Agent Prompt]](system-prompts/agent-prompt-security-monitor-for-autonomous-agent-actions-second-part.md)

Defines environment context, block rules, and allow exceptions governing which tool actions autonomous agents may perform, covering git operations, cloud storage, credentials, and infrastructure changes.

#### 4.1.2 Agent Prompts: Git & Version Control Operations

Automated git workflows for commits, pull requests, and branch management with safety enforcement, plus naming utilities for generating descriptive session and branch identifiers.

##### 4.1.2.1 [Quick git commit (Agent Prompt)](system-prompts/agent-prompt-quick-git-commit.md)

Streamlined prompt for creating single git commits with pre-populated context. Analyzes staged changes, drafts messages following repo style, and executes commit while enforcing safety protocols (no amend, no force, no secrets).

##### 4.1.2.2 [Quick PR creation (Agent Prompt)](system-prompts/agent-prompt-quick-pr-creation.md)

Streamlined prompt for creating commits and pull requests with pre-populated git context. Creates branches, commits changes, pushes, and opens PRs with multi-line bodies while enforcing git safety protocols.

##### 4.1.2.3 [Session title and branch generation (Agent Prompt)](system-prompts/agent-prompt-session-title-and-branch-generation.md)

Generates succinct session titles and git branch names from task descriptions, returning JSON with title and branch fields.

##### 4.1.2.4 [/rename auto-generate session name (Agent Prompt)](system-prompts/agent-prompt-rename-auto-generate-session-name.md)

Auto-generates kebab-case session names from conversation context. Returns JSON with 2-4 word lowercase hyphenated names capturing the main topic.

##### 4.1.2.5 [Coding session title generator (Agent Prompt)](system-prompts/agent-prompt-coding-session-title-generator.md)

Generates concise 3-7 word sentence-case titles that capture the main goal of a coding session. Returns JSON with a single title field for session naming and recognition.

#### 4.1.3 Verification, Testing & Quality Assurance

Validates implementations through adversarial testing, build verification, and rule evaluation. Ensures user-defined conditions and classifier rules are sound before execution.

##### 4.1.3.1 [Verification specialist (Agent Prompt)](system-prompts/agent-prompt-verification-specialist.md)

Adversarial verification subagent that tests implementations by running builds, test suites, linters, and adversarial probes (boundary values, concurrency, idempotency), issuing PASS/FAIL/PARTIAL verdicts.

##### 4.1.3.2 [Hook condition evaluator (stop) [Agent Prompt]](system-prompts/agent-prompt-hook-condition-evaluator-stop.md)

Evaluates stop-condition hooks by reading conversation transcripts and judging whether user-provided conditions are satisfied. Returns JSON with ok/reason fields, quoting transcript evidence.

##### 4.1.3.3 [Auto mode rule reviewer (Agent Prompt)](system-prompts/agent-prompt-auto-mode-rule-reviewer.md)

Reviews user-defined auto mode classifier rules for clarity, completeness, conflicts, and actionability. Evaluates allow/soft_deny/environment rule categories to ensure the LLM classifier can interpret and act on them correctly.

##### 4.1.3.4 [Prompt Suggestion Generator v2 (Agent Prompt)](system-prompts/agent-prompt-prompt-suggestion-generator-v2.md)

Predicts natural next user inputs based on recent conversation context. Returns specific 2-12 word suggestions that users would likely type, avoiding evaluative language and Claude-voice phrasing.

### 4.2 Utility, Infrastructure and Operational Agents

Discrete operational agent prompts handling command documentation, content summarization, task delegation, cloud scheduling, and codebase exploration.

#### 4.2.1 Agent Prompts: Utility & Infrastructure

Specialized agent prompts that handle discrete operational tasks: command documentation and security validation for bash, content summarization with licensing respect, task delegation via worker forks, and scheduling remote agents on cloud infrastructure with timezone handling.

##### 4.2.1.1 [Bash command description writer (Agent Prompt)](system-prompts/agent-prompt-bash-command-description-writer.md)

Generates clear, concise active-voice descriptions of bash commands, scaling detail based on complexity. Simple commands get 5-10 word summaries; complex piped or flag-heavy commands include clarifying context.

##### 4.2.1.2 [Bash command prefix detection (Agent Prompt)](system-prompts/agent-prompt-bash-command-prefix-detection.md)

Detects command prefixes and identifies command injection attempts in bash commands for safety classification. Returns the detected prefix or 'command_injection_detected' to protect against malicious commands disguised as allowlisted ones.

##### 4.2.1.3 [WebFetch summarizer (Agent Prompt)](system-prompts/agent-prompt-webfetch-summarizer.md)

Summarizes verbose WebFetch output for the main model, enforcing character limits on quotes and respecting licensing for untrusted domains.

##### 4.2.1.4 [Worker fork (Agent Prompt)](system-prompts/agent-prompt-worker-fork.md)

Forked worker sub-agent that executes a single directive from the parent agent and reports back concisely without spawning further sub-agents.

##### 4.2.1.5 [/schedule slash command (Agent Prompt)](system-prompts/agent-prompt-schedule-slash-command.md)

Guides users through scheduling remote Claude Code agents on cron triggers or one-time runs via the Anthropic cloud API, handling environment selection, MCP connector validation, and timezone conversion.

#### 4.2.2 Codebase Exploration & Implementation Planning

Enables read-only codebase analysis and architectural planning through pattern discovery, file search, and step-by-step strategy design. Coordinates large-scale refactoring by decomposing work into parallel units and aggregating results.

##### 4.2.2.1 [Explore (Agent Prompt)](system-prompts/agent-prompt-explore.md)

Read-only file search specialist for exploring codebases using glob patterns, regex search, and file reading. Adapts search approach based on thoroughness level (quick/medium/very thorough) and reports findings directly without creating files.

##### 4.2.2.2 [General purpose (Agent Prompt)](system-prompts/agent-prompt-general-purpose.md)

General-purpose subagent for researching complex questions, searching code, and executing multi-step tasks. Searches broadly when uncertain, analyzes multiple files, and avoids creating unnecessary documentation files.

##### 4.2.2.3 [Plan mode (enhanced) [Agent Prompt]](system-prompts/agent-prompt-plan-mode-enhanced.md)

Read-only software architect agent for designing implementation plans. Explores codebase, identifies patterns, and outputs step-by-step strategies with critical files listed. Strictly prohibited from modifying files.

##### 4.2.2.4 [/batch slash command (Agent Prompt)](system-prompts/agent-prompt-batch-slash-command.md)

Orchestrates large parallelizable codebase changes by researching scope, decomposing into 5-30 independent units, determining e2e test recipes, and spawning background workers. Tracks progress and aggregates results across all units.

#### 4.2.3 Onboarding, Documentation & Agent Configuration

Bootstraps new Claude Code users and custom agents through interactive setup, documentation generation, and system prompt engineering. Captures project context, configures environments, and provides guidance on Claude tools and APIs.

##### 4.2.3.1 [CLAUDE.md creation (Agent Prompt)](system-prompts/agent-prompt-claudemd-creation.md)

Analyzes codebases and creates CLAUDE.md documentation for future Claude Code instances. Captures build/lint/test commands, high-level architecture, and project-specific patterns while avoiding generic practices and obvious instructions.

##### 4.2.3.2 [Onboarding guide generator (Agent Prompt)](system-prompts/agent-prompt-onboarding-guide-generator.md)

Co-authors team onboarding guides by analyzing usage data, classifying session types into work categories, and iterating collaboratively. Generates ONBOARDING.md with work-type breakdown, MCP setup, and team tips for new Claude Code users.

##### 4.2.3.3 [Managed Agents onboarding flow (Agent Prompt)](system-prompts/agent-prompt-managed-agents-onboarding-flow.md)

Interactive interview for configuring Managed Agents from scratch, covering tool selection, MCP servers, skills, files, environment settings, and vault credentials. Emits YAML agent/environment configs and working SDK code for setup and runtime.

##### 4.2.3.4 [Agent creation architect (Agent Prompt)](system-prompts/agent-prompt-agent-creation-architect.md)

Guides creation of custom AI agents by extracting user intent, designing expert personas, architecting comprehensive system prompts, and optimizing for performance. Produces JSON output with agent identifier, usage context, and complete operational instructions aligned with project standards.

##### 4.2.3.5 [Status line setup (Agent Prompt)](system-prompts/agent-prompt-status-line-setup.md)

Configures Claude Code status line display by extracting PS1 from shell config, converting escape sequences, and updating settings.json with shell commands that receive session context as JSON.

##### 4.2.3.6 [Claude guide agent (Agent Prompt)](system-prompts/agent-prompt-claude-guide-agent.md)

Helps users understand and use Claude Code, Claude Agent SDK, and Claude API by fetching official documentation and providing actionable guidance. Covers installation, configuration, hooks, skills, MCP servers, SDK patterns, and API features.

### 4.3 Communication, Quality and Agent Identity

Standards governing how agents communicate, structure output, maintain code quality, make decisions, and build institutional knowledge across interactions.

#### 4.3.1 Code Quality & Engineering Standards

Establishes engineering discipline through direct code interpretation, security-first practices, minimal defensive coding, and aggressive cleanup of unused artifacts while permitting authorized security testing in controlled contexts.

##### 4.3.1.1 [Doing tasks (software engineering focus) [System Prompt]](system-prompts/system-prompt-doing-tasks-software-engineering-focus.md)

Instructs Claude to interpret user requests in a software engineering context, treating generic instructions as code tasks and applying them directly to the codebase rather than providing abstract answers.

##### 4.3.1.2 [Doing tasks (security) [System Prompt]](system-prompts/system-prompt-doing-tasks-security.md)

Emphasizes avoiding security vulnerabilities like injection, XSS, and SQL injection while prioritizing safe and correct code.

##### 4.3.1.3 [Doing tasks (no unnecessary error handling) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-unnecessary-error-handling.md)

Advises against error handling for impossible scenarios and unnecessary validation; validate only at system boundaries.

##### 4.3.1.4 [Doing tasks (no compatibility hacks) [System Prompt]](system-prompts/system-prompt-doing-tasks-no-compatibility-hacks.md)

Instructs Claude to delete unused code completely rather than adding compatibility shims or re-exports.

##### 4.3.1.5 [Censoring assistance with malicious activities (System Prompt)](system-prompts/system-prompt-censoring-assistance-with-malicious-activities.md)

Permits assistance with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing destructive techniques, DoS attacks, and detection evasion for malicious purposes.

#### 4.3.2 Communication & Output Style

Shapes interaction patterns through concise user updates, structured message routing, precise code references with line numbers, and adaptive response formats that match task complexity without unnecessary documentation.

##### 4.3.2.1 [Communication style (System Prompt)](system-prompts/system-prompt-communication-style.md)

Instructs Claude to give brief user-facing updates at key moments, write concise end-of-turn summaries, match response format to task complexity, and avoid comments and planning documents in code.

##### 4.3.2.2 [Tone and style (code references) [System Prompt]](system-prompts/system-prompt-tone-and-style-code-references.md)

Instructs Claude to include file_path:line_number annotations when referencing code for easy user navigation.

##### 4.3.2.3 [Tone and style (concise output — short) [System Prompt]](system-prompts/system-prompt-tone-and-style-concise-output-short.md)

Directs Claude to provide short and concise responses.

##### 4.3.2.4 [Option previewer (System Prompt)](system-prompts/system-prompt-option-previewer.md)

Enables side-by-side preview layout for presenting concrete UI mockups, code snippets, diagrams, and configuration examples alongside single-select options in monospace rendering.

##### 4.3.2.5 [How to use the SendUserMessage tool (System Prompt)](system-prompts/system-prompt-how-to-use-the-sendusermessage-tool.md)

Instructs Claude to route all user-facing replies through SendUserMessage, not plain text, and to structure responses as ack → work → result with checkpoints that carry information rather than filler status.

#### 4.3.3 Agent Identity & Decision-Making

Behavioral standards for agent threads covering communication style, action summarization, memory building for institutional knowledge, and decision-making workflows that integrate advisor guidance with task execution and version control context.

##### 4.3.3.1 [Agent thread notes (System Prompt)](system-prompts/system-prompt-agent-thread-notes.md)

Establishes behavioral guidelines for agent threads: use absolute file paths, include relevant file paths in final responses, avoid emojis, omit colons before tool calls, and include code snippets only when load-bearing.

##### 4.3.3.2 [Agent Summary Generation (System Prompt)](system-prompts/system-prompt-agent-summary-generation.md)

Specifies that agent action summaries must be 3-5 words in present tense (-ing form), name the file or function, avoid branch names, and differ from previous summaries.

##### 4.3.3.3 [Advisor tool instructions (System Prompt)](system-prompts/system-prompt-advisor-tool-instructions.md)

Instructs Claude to call the advisor tool before substantive work, after orientation, when stuck, or before declaring completion. Emphasizes making deliverables durable before advisor calls and treating advisor guidance seriously while surfacing conflicts between retrieved data and advice.

##### 4.3.3.4 [Agent memory instructions (System Prompt)](system-prompts/system-prompt-agent-memory-instructions.md)

Provides guidance for including domain-specific memory update instructions in agent system prompts, with examples tailored to code reviewers, test runners, architects, and documentation writers to build institutional knowledge across conversations.

##### 4.3.3.5 [Git status (System Prompt)](system-prompts/system-prompt-git-status.md)

Displays the current git status snapshot at conversation start as reference context.

---

## 5. Memory, Session and Context Management

Mechanisms for preserving and restoring state across sessions: memory consolidation and deduplication, conversation summarization, user profile templates, session context management, and learning extraction from interactions.

### 5.1 Memory Persistence and Consolidation

Systems for building and maintaining durable memory: consolidating fragmented knowledge, deduplicating entries, verifying staleness, and synthesizing facts across sessions and team contexts.

#### 5.1.1 Memory Management & Consolidation

Manages persistent memory across sessions by consolidating fragmented knowledge, pruning stale entries, synthesizing facts from stored files, and selecting relevant context for active work. Maintains organized, durable memory that evolves with conversation history.

##### 5.1.1.1 [Dream memory consolidation (Agent Prompt)](system-prompts/agent-prompt-dream-memory-consolidation.md)

Performs multi-phase memory consolidation by orienting on existing files, gathering recent signal from logs and transcripts, merging updates into topic files, and pruning the index. Maintains durable, well-organized memories for future sessions.

##### 5.1.1.2 [Dream memory pruning (Agent Prompt)](system-prompts/agent-prompt-dream-memory-pruning.md)

Performs memory pruning by deleting stale or invalidated memories and collapsing duplicates. Conservative with team memories; combines near-duplicates into single rich facts while preserving creation dates.

##### 5.1.1.3 [Memory synthesis (Agent Prompt)](system-prompts/agent-prompt-memory-synthesis.md)

Reads persistent memory files and extracts facts relevant to user queries, returning JSON with up to 7 facts and cited filenames. Avoids restating facts already returned in prior turns.

##### 5.1.1.4 [Determine which memory files to attach (Agent Prompt)](system-prompts/agent-prompt-determine-which-memory-files-to-attach.md)

Selects relevant memory files for Claude Code based on user queries, returning up to 5 filenames. Applies conservative filtering to avoid false positives and prevents re-selecting memories from earlier queries.

##### 5.1.1.5 [Session memory update instructions (Agent Prompt)](system-prompts/agent-prompt-session-memory-update-instructions.md)

Instructions for updating session memory files with conversation insights while preserving file structure, section headers, and template descriptions.

#### 5.1.2 System Prompts: Memory Management

Implements persistent, multi-type memory system with staleness verification, deduplication, and team-aware consolidation to maintain collaborative context across sessions while preventing instruction drift and avoiding redundant storage.

##### 5.1.2.1 [Memory instructions (System Prompt)](system-prompts/system-prompt-memory-instructions.md)

Defines persistent file-based memory system with frontmatter format, four memory types (user, feedback, project, reference), deduplication rules, and staleness handling to avoid saving redundant or repository-tracked information.

##### 5.1.2.2 [Memory staleness verification (System Prompt)](system-prompts/system-prompt-memory-staleness-verification.md)

Instructs Claude to verify recalled memories against current file state before using them, deleting stale records that conflict with observed reality and saving fresh memories if context is still needed.

##### 5.1.2.3 [Memory description of user details (System Prompt)](system-prompts/system-prompt-memory-description-of-user-details.md)

Describes per-user memory files that accumulate details about user role, goals, knowledge, and preferences across sessions, with one detail per file to build a collaborative context.

##### 5.1.2.4 [Memory description of user feedback (System Prompt)](system-prompts/system-prompt-memory-description-of-user-feedback.md)

Describes feedback memory type storing user guidance on work approaches from both successes and failures, with requirement to check for contradictions with team memories before saving.

##### 5.1.2.5 [Memory description of user feedback (with explicit save) [System Prompt]](system-prompts/system-prompt-memory-description-of-user-feedback-with-explicit-save.md)

Defines feedback memory type capturing user guidance on work approaches from both successes and failures, with explicit instruction to check for contradictions with team feedback and save override notes when conflicts exist.

##### 5.1.2.6 [Description part of memory instructions (System Prompt)](system-prompts/system-prompt-description-part-of-memory-instructions.md)

Defines user memory as containing role, goals, responsibilities, and knowledge to tailor behavior and build understanding of the user's perspective while avoiding negative judgements.

##### 5.1.2.7 [Dream CLAUDE.md memory reconciliation (System Prompt)](system-prompts/system-prompt-dream-claudemd-memory-reconciliation.md)

Guides memory consolidation during dream sessions to reconcile stored memories against CLAUDE.md, deleting stale procedures, preserving useful context, and flagging potential drift between maintained instructions and recorded memories.

##### 5.1.2.8 [Dream team memory handling (System Prompt)](system-prompts/system-prompt-dream-team-memory-handling.md)

Establishes conservative rules for handling shared team memories during dream consolidation, including deduplication within team files, cautious pruning to avoid deleting teammates' load-bearing notes, and preventing accidental promotion of personal memories.

#### 5.1.3 Automated Memory & Monitoring Tasks

Scheduled background processes that consolidate learning from sessions into persistent memory, deduplicate recurring tasks, and surface actionable changes from connected tools through periodic digests that respect user availability.

##### 5.1.3.1 [/dream memory consolidation (Skill)](system-prompts/skill-dream-memory-consolidation.md)

Nightly housekeeping job that consolidates recent session logs and transcripts into persistent memory topics, learnings, and a pruned MEMORY.md index under 200 lines.

##### 5.1.3.2 [/dream nightly schedule (Skill)](system-prompts/skill-dream-nightly-schedule.md)

Sets up a recurring nightly memory consolidation job by deduplicating existing schedules, creating a cron task, confirming details to the user, and running an immediate consolidation.

##### 5.1.3.3 [/catch-up periodic heartbeat (Skill)](system-prompts/skill-catch-up-periodic-heartbeat.md)

Periodic task that scans user priorities, checks for actionable changes across connected tools, and surfaces a brief digest only when something time-sensitive or actionable is found, respecting quiet hours.

### 5.2 Session State and Conversation Continuity

Tools for capturing and restoring conversation state: structured summaries, context compaction, user profile templates, and transcript analysis for session handoffs.

#### 5.2.1 Memory Templates & User Profile Data

Structured templates for maintaining session context, user preferences, assistant personality, and agent state tracking to enable personalized and stateful interactions.

##### 5.2.1.1 [Session memory template (Data)](system-prompts/data-session-memory-template.md)

Template structure for session memory summary.md files organizing current state, task specification, files, workflow, and learnings.

##### 5.2.1.2 [User profile memory template (Data)](system-prompts/data-user-profile-memory-template.md)

Template content for user profile memory file covering personal details, work context, schedule, and communication preferences.

##### 5.2.1.3 [Assistant voice and values template (Data)](system-prompts/data-assistant-voice-and-values-template.md)

Template describing Claude's voice, values, and communication style emphasizing brevity, honesty, directness, and collaboration.

##### 5.2.1.4 [Background agent state classification examples (Data)](system-prompts/data-background-agent-state-classification-examples.md)

Examples of assistant-message tails and JSON outputs for classifying background agent state, tempo, needs, and results.

#### 5.2.2 Conversation Summarization & Session Management

Captures conversation state through detailed summaries covering requests, technical work, errors, and pending tasks. Enables session continuity by searching past transcripts and monitoring background agent progress.

##### 5.2.2.1 [Conversation summarization (Agent Prompt)](system-prompts/agent-prompt-conversation-summarization.md)

Creates detailed conversation summaries covering primary requests, technical concepts, files modified, errors encountered, problem-solving, user messages, pending tasks, and next steps. Includes analysis phase to ensure thoroughness and accuracy.

##### 5.2.2.2 [Recent Message Summarization (Agent Prompt)](system-prompts/agent-prompt-recent-message-summarization.md)

Summarizes recent conversation portion following earlier retained context. Covers primary requests, technical concepts, files modified, errors, problem-solving, user messages, pending tasks, and next steps with analysis phase.

##### 5.2.2.3 [Session search (Agent Prompt)](system-prompts/agent-prompt-session-search.md)

Subagent that searches past Claude Code conversation sessions by scanning .jsonl transcript files and returning matching session IDs ordered by relevance.

##### 5.2.2.4 [Background agent state classifier (Agent Prompt)](system-prompts/agent-prompt-background-agent-state-classifier.md)

Classifies background agent transcript tails as working, blocked, done, or failed with detailed disambiguation rules for edge cases. Returns JSON with state, detail, tempo, needs, and result output for monitoring agent progress.

#### 5.2.3 Session & Context Management

Enables efficient session continuity through structured context summaries, detailed conversation analysis for partial compaction, and isolated scratchpad management that preserves critical state across conversation windows.

##### 5.2.3.1 [Context compaction summary (System Prompt)](system-prompts/system-prompt-context-compaction-summary.md)

Specifies structure for context compaction summaries: task overview, current state, important discoveries, next steps, and context to preserve, enabling efficient resumption in future windows.

##### 5.2.3.2 [Partial compaction instructions (System Prompt)](system-prompts/system-prompt-partial-compaction-instructions.md)

Instructs Claude to create detailed conversation summaries for partial compaction using a structured analysis process and nine-section format, ensuring continuity when newer messages follow the summary in a new session.

##### 5.2.3.3 [Scratchpad directory (System Prompt)](system-prompts/system-prompt-scratchpad-directory.md)

Instructs Claude to use a dedicated session-specific scratchpad directory for all temporary files instead of system temp directories.

### 5.3 Learning, Analytics and Workflow Capture

Extracts repeatable processes and insights from Claude interactions, generates skill documentation, analyzes friction patterns, and produces usage analytics for workflow optimization.

#### 5.3.1 Learning & Insights Analysis

Collaborative learning modes that balance task completion with education through human input on design decisions, paired with analytics systems that extract friction patterns and usage insights from session data to generate actionable coaching and workflow optimization recommendations.

##### 5.3.1.1 [Learning mode (System Prompt)](system-prompts/system-prompt-learning-mode.md)

Establishes collaborative learning mode where Claude balances task completion with education by requesting human input on design decisions, business logic, and algorithms, using TodoList tracking and Learn by Doing request patterns with TODO(human) markers.

##### 5.3.1.2 [Learning mode (insights) [System Prompt]](system-prompts/system-prompt-learning-mode-insights.md)

Provides brief educational insights before and after code changes when learning mode is active, focusing on implementation choices and codebase-specific patterns rather than general programming concepts.

##### 5.3.1.3 [Insights friction analysis (System Prompt)](system-prompts/system-prompt-insights-friction-analysis.md)

Analyzes aggregated Claude Code usage data to identify and categorize recurring friction points with examples, helping users understand where interactions break down.

##### 5.3.1.4 [Insights at a glance summary (System Prompt)](system-prompts/system-prompt-insights-at-a-glance-summary.md)

Generates a concise 4-part insights summary covering what's working, hindrances, quick wins, and ambitious workflows for improved Claude Code usage, drawing from aggregated session data and friction patterns.

##### 5.3.1.5 [Insights on the horizon (System Prompt)](system-prompts/system-prompt-insights-on-the-horizon.md)

Identifies ambitious future workflows and autonomous AI-assisted development opportunities from usage data, including parallel agents and iterative testing approaches with copyable prompts.

##### 5.3.1.6 [Insights session facets extraction (System Prompt)](system-prompts/system-prompt-insights-session-facets-extraction.md)

Extracts structured facets from individual Claude Code session transcripts including goal categories, user satisfaction signals, and friction types, with strict guidelines for counting only explicit user requests and satisfaction indicators.

##### 5.3.1.7 [Insights suggestions (System Prompt)](system-prompts/system-prompt-insights-suggestions.md)

Generates actionable suggestions from usage data including CLAUDE.md additions, feature recommendations from MCP servers to headless mode, and usage patterns, prioritizing repeated user guidance and workflow improvements.

#### 5.3.2 Workflow Capture & Insights

Mechanisms for extracting repeatable processes from Claude interactions and generating structured skill documentation. Includes usage analytics reporting and guidance for controlled computer-use tool access with safety constraints.

##### 5.3.2.1 [Skillify Current Session (System Prompt)](system-prompts/system-prompt-skillify-current-session.md)

Guides Claude through a four-round interview process to analyze a session, capture its repeatable process, and generate a reusable SKILL.md file with structured steps, success criteria, and execution guidance.

##### 5.3.2.2 [/insights report output (Skill)](system-prompts/skill-insights-report-output.md)

Formats and displays the insights usage report results after the user runs the /insights slash command, showing a shareable report URL and HTML file location.

##### 5.3.2.3 [Computer Use MCP (Skill)](system-prompts/skill-computer-use-mcp.md)

Instructions for using computer-use MCP tools with guidance on tool selection tiers (dedicated MCP, Chrome MCP, computer-use), access-request flow, tiered app restrictions (read/click/full), link-safety practices, and financial-action restrictions.

---

## 6. Multi-Agent Coordination and Autonomous Operation

Patterns and infrastructure for orchestrating multiple agents, delegating work, running autonomous background processes, and coordinating parallel execution across agent teams.

### 6.1 Subagent Orchestration and Delegation

Patterns for writing self-contained subagent prompts, delegating parallel work, managing async waiting states, and coordinating agent swarms on complex projects.

#### 6.1.1 System Prompts: Subagent Coordination & Delegation

Establishes patterns for effective subagent orchestration: writing self-contained prompts with full context, delegating parallel work while respecting output integrity, managing async waiting states, and maximizing parallel execution for independent operations.

##### 6.1.1.1 [Writing subagent prompts (System Prompt)](system-prompts/system-prompt-writing-subagent-prompts.md)

Guidelines for writing effective subagent prompts that provide full context, explain intent, and avoid delegating synthesis or understanding to the agent.

##### 6.1.1.2 [Subagent prompt-writing examples (System Prompt)](system-prompts/system-prompt-subagent-prompt-writing-examples.md)

Demonstrates self-contained prompt patterns for delegating tasks to subagents, emphasizing clear goals, context, and response constraints.

##### 6.1.1.3 [Subagent delegation examples (System Prompt)](system-prompts/system-prompt-subagent-delegation-examples.md)

Provides example patterns for delegating tasks to subagents, handling waiting states, and reporting results, including independent review scenarios and mid-wait user queries.

##### 6.1.1.4 [Fork usage guidelines (System Prompt)](system-prompts/system-prompt-fork-usage-guidelines.md)

Defines when to spawn fork subagents for open-ended work, prohibits reading fork output mid-flight or fabricating results, and emphasizes writing directive prompts that inherit context rather than re-explaining background.

##### 6.1.1.5 [Tool usage (subagent guidance) [System Prompt]](system-prompts/system-prompt-tool-usage-subagent-guidance.md)

Advises using subagents for parallelization and context protection, avoiding duplication of work already delegated to specialized agents.

##### 6.1.1.6 [Parallel tool call note (part of "Tool usage policy") [System Prompt]](system-prompts/system-prompt-parallel-tool-call-note-part-of-tool-usage-policy.md)

Instructs Claude to maximize parallel tool calls for independent operations while maintaining sequential execution for dependent operations to increase efficiency.

#### 6.1.2 Agent Teams & Multi-Agent Coordination

Swarm coordination for parallel multi-agent work on complex projects, managing team creation, task assignment, and peer communication. Agents discover teammates via shared configuration and coordinate through messaging protocols supporting shutdown and plan approval workflows.

##### 6.1.2.1 [TeammateTool (Tool Description)](system-prompts/tool-description-teammatetool.md)

Coordinates multi-agent teams for parallel work on complex projects. Manages team creation, task assignment, teammate spawning, idle state handling, and peer collaboration. Teammates discover members via team config and communicate via SendMessage.

##### 6.1.2.2 [SendMessageTool (Tool Description)](system-prompts/tool-description-sendmessagetool.md)

Enables sending messages to teammate agents in a swarm, with protocol responses for shutdown and plan approval requests. Plain text output is not visible to other agents; communication requires this tool.

##### 6.1.2.3 [SendMessageTool (non-agent-teams) [Tool Description]](system-prompts/tool-description-sendmessagetool-non-agent-teams.md)

Send markdown messages to user with file attachments; use status field to indicate intent (normal reply vs proactive notification) and pass file references from device tools verbatim.

##### 6.1.2.4 [TeamDelete (Tool Description)](system-prompts/tool-description-teamdelete.md)

Removes team and task directories after swarm work completes. Fails if active members remain; gracefully terminate teammates first.

##### 6.1.2.5 [Agent (usage notes) [Tool Description]](system-prompts/tool-description-agent-usage-notes.md)

Comprehensive guidance for spawning and managing subagents, including foreground vs. background execution, resumption via messaging, worktree isolation, parallel agent launches, and verification practices to ensure agents complete intended work.

#### 6.1.3 Task & Todo Management

Structured task tracking for multi-step work, enabling progress organization and teammate coordination. Teammates discover and claim available work from shared task lists, with skills providing specialized command invocation within conversations.

##### 6.1.3.1 [TodoWrite (Tool Description)](system-prompts/tool-description-todowrite.md)

Creates and manages structured task lists for coding sessions with imperative and active-form descriptions. Use for multi-step tasks, complex work, or user-provided task lists; skip for single trivial tasks.

##### 6.1.3.2 [TaskCreate (Tool Description)](system-prompts/tool-description-taskcreate.md)

Creates structured task lists for coding sessions to track progress and organize complex multi-step work. Use proactively for tasks with 3+ steps, plan mode, or when users provide multiple items.

##### 6.1.3.3 [TaskList (teammate workflow) [Tool Description]](system-prompts/tool-description-tasklist-teammate-workflow.md)

Guides teammates to find and claim available work from the shared task list, preferring lowest ID tasks first and checking for blockers. Teammates call TaskList after completing tasks to discover next work.

##### 6.1.3.4 [Skill (Tool Description)](system-prompts/tool-description-skill.md)

Invokes specialized skills and slash commands within conversations. Only invoke skills listed in system-reminder messages or explicitly typed by the user; never guess skill names from training data.

### 6.2 Autonomous Execution and Background Operation

Defines continuous and timer-based autonomous execution modes, balancing proactive action with safety checks for destructive or irreversible operations.

#### 6.2.1 System Prompts: Autonomous & Background Operation

Defines autonomous execution modes for continuous operation, timer-based work continuation, and background jobs, balancing action with safety by requiring confirmation for destructive operations while distinguishing reversible from irreversible changes.

##### 6.2.1.1 [Auto mode (System Prompt)](system-prompts/system-prompt-auto-mode.md)

Defines autonomous execution mode where Claude executes immediately with reasonable assumptions, minimizes interruptions, prefers action over planning, and avoids destructive actions without confirmation or data exfiltration without authorization.

##### 6.2.1.2 [Autonomous loop check (System Prompt)](system-prompts/system-prompt-autonomous-loop-check.md)

Guides timer-based autonomous invocations to continue established work—finishing PRs, addressing review comments, fixing CI failures, and handling merge conflicts—while avoiding inventing new work. Emphasizes trust preservation and distinguishes between reversible and irreversible actions across repeated checks.

##### 6.2.1.3 [Background job behavior (System Prompt)](system-prompts/system-prompt-background-job-behavior.md)

Instructs background job agents to narrate progress, restate results in message text for classifier extraction, and signal done/blocked/failed status with one-line outcome headlines.

##### 6.2.1.4 [Background session instructions (System Prompt)](system-prompts/system-prompt-background-session-instructions.md)

Directs background job sessions to use the job-specific temporary directory instead of /tmp to avoid file clobbering across parallel jobs.

##### 6.2.1.5 [Executing actions with care (System Prompt)](system-prompts/system-prompt-executing-actions-with-care.md)

Establishes a risk-aware framework requiring user confirmation before destructive, hard-to-reverse, or shared-state-affecting actions like force-pushing, deleting branches, or sending messages, while encouraging diagnosis of root causes rather than bypassing safety checks.

#### 6.2.2 Task Management & Progress Tracking

Directs Claude to decompose work into trackable tasks, maintain real-time progress visibility, and defer scope decisions to user judgment when attempting ambitious objectives.

##### 6.2.2.1 [Tool usage (task management) [System Prompt]](system-prompts/system-prompt-tool-usage-task-management.md)

Instructs Claude to use TodoWrite to break down work, track progress, and mark tasks complete immediately upon finishing.

##### 6.2.2.2 [Doing tasks (ambitious tasks) [System Prompt]](system-prompts/system-prompt-doing-tasks-ambitious-tasks.md)

Permits Claude to attempt ambitious tasks and defers to user judgment on scope.

##### 6.2.2.3 [Doing tasks (help and feedback) [System Prompt]](system-prompts/system-prompt-doing-tasks-help-and-feedback.md)

Placeholder for informing users about help and feedback channels.

### 6.3 Planning and Implementation Workflows

End-to-end development orchestration from codebase exploration through diagram-driven planning, approval cycles, implementation, testing, and PR creation.

#### 6.3.1 System Prompts: Planning & Implementation Workflows

Orchestrates end-to-end development cycles from remote codebase exploration through diagram-driven planning, approval workflows, and implementation with testing and PR creation, including proactive scheduling of follow-up work for natural future actions.

##### 6.3.1.1 [Remote plan mode (ultraplan) [System Prompt]](system-prompts/system-prompt-remote-plan-mode-ultraplan.md)

Configures remote planning sessions to explore codebases, produce diagram-rich implementation plans via ExitPlanMode, handle approval or rejection feedback, and implement approved plans with pull requests.

##### 6.3.1.2 [Remote planning session (System Prompt)](system-prompts/system-prompt-remote-planning-session.md)

Enables remote planning sessions where Claude explores code, produces implementation plans via ExitPlanMode, and handles approval, rejection, or teleportation feedback from the user's local terminal.

##### 6.3.1.3 [Worker instructions (System Prompt)](system-prompts/system-prompt-worker-instructions.md)

Defines post-implementation workflow for workers: simplify changes, run unit tests, execute e2e tests, commit and push, then report PR URL.

##### 6.3.1.4 [Proactive schedule offer after follow-up work (System Prompt)](system-prompts/system-prompt-proactive-schedule-offer-after-follow-up-work.md)

Instructs Claude to offer one-line `/schedule` follow-ups when completed work has natural future actions like flag cleanup, metric verification, or recurring tasks, using an 85%+ confidence threshold.

#### 6.3.2 Planning & Worktree Management

Proactive planning workflows for implementation tasks, enabling design exploration and user approval before coding, combined with isolated git worktree sessions for parallel development branches. Includes a JavaScript REPL for composing tool operations as async functions.

##### 6.3.2.1 [EnterPlanMode (Tool Description)](system-prompts/tool-description-enterplanmode.md)

Proactively enter plan mode for non-trivial implementation tasks to explore codebase and design approaches for user approval before writing code, preventing wasted effort and ensuring alignment.

##### 6.3.2.2 [ExitPlanMode (Tool Description)](system-prompts/tool-description-exitplanmode.md)

Signal completion of planning and request user approval by reading the plan from file; use only for implementation tasks requiring code, not research or exploration.

##### 6.3.2.3 [EnterWorktree (Tool Description)](system-prompts/tool-description-enterworktree.md)

Create an isolated git worktree and switch the session into it only when explicitly instructed by user or project instructions; requires git repository or worktree hooks configured.

##### 6.3.2.4 [ExitWorktree (Tool Description)](system-prompts/tool-description-exitworktree.md)

Exit a worktree session created by EnterWorktree and return to original directory; choose to keep or remove the worktree and optionally discard uncommitted changes.

##### 6.3.2.5 [REPL (Tool Description)](system-prompts/tool-description-repl.md)

JavaScript programming interface for composing tool calls as async functions with looping and branching; batch all operations into single calls and use haiku for one-turn model sampling.

#### 6.3.3 Code Verification & Test Automation

Runtime-driven verification workflows that build, execute, and validate code changes across CLI, API, and GUI surfaces, capturing evidence through probes and non-regression testing. Includes automated test-generation for new projects.

##### 6.3.3.1 [Verify skill (Skill)](system-prompts/skill-verify-skill.md)

Comprehensive verification workflow that emphasizes runtime observation over static analysis—building the app, driving it to changed code, and capturing evidence. Distinguishes between surfaces (CLI, API, GUI, library), guides finding handles via verifier skills or run-skills, and structures reports with verdict, method, steps, and findings including probes beyond the happy path.

##### 6.3.3.2 [Verify CLI changes (example for Verify skill) [Skill]](system-prompts/skill-verify-cli-changes-example-for-verify-skill.md)

Demonstrates how to verify CLI changes by building, running with test arguments, and comparing output and exit codes against expected behavior. Shows a worked example of verifying a new `--json` flag, including non-regression testing and field validation.

##### 6.3.3.3 [Verify server/API changes (example for Verify skill) [Skill]](system-prompts/skill-verify-serverapi-changes-example-for-verify-skill.md)

Outlines verification of server and API changes using curl, with server lifecycle management via readiness polling and response inspection. Includes a worked example of verifying a rate-limit header addition, demonstrating how to trigger the changed code path and validate response headers.

##### 6.3.3.4 [Create verifier skills (Skill)](system-prompts/skill-create-verifier-skills.md)

Multi-phase workflow for creating verifier skills that automatically test code changes, including project auto-detection, verification-tool setup (Playwright, Tmux, HTTP), interactive Q&A for configuration, and skill-file generation with allowed-tools constraints.

#### 6.3.4 Code Quality & Session Diagnostics

Tools for identifying code inefficiencies and quality issues through parallel analysis, plus debugging utilities for diagnosing frozen sessions and performance problems.

##### 6.3.4.1 [Simplify (Skill)](system-prompts/skill-simplify.md)

Code review and cleanup workflow that launches three parallel agents to identify code reuse opportunities, quality issues, and efficiency problems, then fixes findings directly.

##### 6.3.4.2 [Debugging (Skill)](system-prompts/skill-debugging.md)

Instructions for debugging issues in the current Claude Code session by reviewing debug logs, identifying errors and warnings, and suggesting concrete fixes or next steps.

##### 6.3.4.3 [/stuck slash command (Skill)](system-prompts/skill-stuck-slash-command.md)

Diagnoses frozen or slow Claude Code sessions by scanning for stuck processes, checking CPU/memory/state, and posting diagnostic reports to Slack.

---

## 7. Scheduling, Automation and Productivity Tools

Time-based task automation, recurring workflow execution, daily productivity assistance, and configuration tooling that enables Claude to operate proactively and integrate with external systems.

### 7.1 Scheduling and Loop Execution

Converts user-defined intervals into cron expressions, manages recurring loops with event-driven wake signals, and handles cache-aware delays and notification delivery.

#### 7.1.1 Scheduling & Loop Execution

Task scheduling mechanisms that convert user intervals into cron expressions and execute recurring or self-paced loops with event-driven wake signals, fallback heartbeat delays, and cloud-first scheduling options.

##### 7.1.1.1 [/loop slash command (Skill)](system-prompts/skill-loop-slash-command.md)

Parses user input into an interval and prompt, converts the interval to a cron expression, and schedules a recurring task with immediate execution.

##### 7.1.1.2 [/loop slash command (dynamic mode) [Skill]](system-prompts/skill-loop-slash-command-dynamic-mode.md)

Parses user input into an interval and prompt for scheduling recurring or dynamically self-paced loop executions, with priority-ordered parsing rules.

##### 7.1.1.3 [/loop self-pacing mode (Skill)](system-prompts/skill-loop-self-pacing-mode.md)

Instructs Claude how to self-pace a recurring loop by arming event monitors as primary wake signals and scheduling fallback heartbeat delays between iterations.

##### 7.1.1.4 [/loop cloud-first scheduling offer (Skill)](system-prompts/skill-loop-cloud-first-scheduling-offer.md)

Decision tree for offering cloud-based scheduling before falling back to local session loops in the /loop command, based on interval length and phrasing.

##### 7.1.1.5 [Dynamic pacing loop execution (Skill)](system-prompts/skill-dynamic-pacing-loop-execution.md)

Instructions for executing a dynamic pacing loop that runs tasks, arms persistent event monitors as primary wake signals, schedules fallback heartbeat delays, and handles task notifications.

##### 7.1.1.6 [Schedule recurring cron and execute immediately (compact) [Skill]](system-prompts/skill-schedule-recurring-cron-and-execute-immediately-compact.md)

Creates a recurring cron job, confirms the schedule with the user, and immediately executes the parsed prompt without waiting for the first cron fire.

##### 7.1.1.7 [Schedule recurring cron and run immediately (Skill)](system-prompts/skill-schedule-recurring-cron-and-run-immediately.md)

Converts an interval to a cron expression, schedules a recurring task, confirms to the user, and immediately executes the task without waiting for the first cron fire.

#### 7.1.2 Scheduling & Notifications

Temporal task management through cron scheduling, loop iteration control, and cache-aware delay selection for autonomous workflows. Desktop and mobile notifications alert users to important events, while proactive scheduling enables follow-up work automation.

##### 7.1.2.1 [CronCreate (Tool Description)](system-prompts/tool-description-croncreate.md)

Schedule one-shot or recurring tasks using standard 5-field cron syntax in user's local timezone; avoid :00 and :30 minute marks for load distribution, and use durable flag for persistence across restarts.

##### 7.1.2.2 [ScheduleWakeup (/loop dynamic mode) [Tool Description]](system-prompts/tool-description-schedulewakeup-loop-dynamic-mode.md)

Schedule next iteration in /loop dynamic self-paced mode by passing the loop prompt back; use sentinel for autonomous loops to resume at fire time.

##### 7.1.2.3 [Snooze (delay and reason guidance) [Tool Description]](system-prompts/tool-description-snooze-delay-and-reason-guidance.md)

Schedules resumption in dynamic loop mode with guidance on delay selection relative to the 5-minute prompt cache TTL. Recommends under 270s to stay cached, 300s+ to amortize cache misses, and 1200–1800s for idle ticks.

##### 7.1.2.4 [Schedule proactive offer guidance (Tool Description)](system-prompts/tool-description-schedule-proactive-offer-guidance.md)

Schedule recurring or one-time remote agents for future work; proactively offer scheduling after successful work with natural follow-ups like feature rollouts or cleanup tasks.

##### 7.1.2.5 [PushNotification (Tool Description)](system-prompts/tool-description-pushnotification.md)

Send desktop notifications to user's terminal and optionally to phone if Remote Control is connected; use sparingly for important events requiring immediate attention, keeping messages under 200 characters.

#### 7.1.3 Daily Workflow & Meeting Preparation

Time-triggered assistants that prepare daily context (calendar, inbox, priorities) and pre-meeting briefs by gathering materials and recent information into scannable formats.

##### 7.1.3.1 [/morning-checkin daily brief (Skill)](system-prompts/skill-morning-checkin-daily-brief.md)

Once-a-day scheduled task that prepares a daily calendar and inbox digest, schedules pre-meeting check-ins, and records the day's top priority in a scannable brief.

##### 7.1.3.2 [/pre-meeting-checkin event brief (Skill)](system-prompts/skill-pre-meeting-checkin-event-brief.md)

Fires a few minutes before a calendar event to gather materials, recent context, and open questions into a concise meeting brief.

### 7.2 Configuration, Onboarding and Repository Setup

Initializes Claude Code environments, manages hooks and permissions, generates permission policies from usage patterns, and guides teams through project onboarding.

#### 7.2.1 Configuration & Repository Onboarding

Setup and configuration workflows that initialize Claude Code environments, manage settings and hooks with rigorous verification, generate permission policies from usage patterns, and guide team members through project setup.

##### 7.2.1.1 [/init CLAUDE.md and skill setup (new version) [Skill]](system-prompts/skill-init-claudemd-and-skill-setup-new-version.md)

Comprehensive onboarding flow for setting up CLAUDE.md and related skills/hooks in a repository, including codebase exploration, user interviews, iterative proposal refinement, and multi-phase artifact generation.

##### 7.2.1.2 [Update Claude Code Config (Skill)](system-prompts/skill-update-claude-code-config.md)

Guides Claude through modifying Claude Code's settings.json configuration, with emphasis on reading existing files before writing, merging arrays carefully, and distinguishing between simple settings (use /config command) and complex ones like hooks, permissions, and environment variables (edit directly). Includes workflows for adding hooks, permissions, and environment variables with detailed troubleshooting guidance.

##### 7.2.1.3 [update-config (7-step verification flow) [Skill]](system-prompts/skill-update-config-7-step-verification-flow.md)

Provides a rigorous 7-step process for constructing and verifying hooks in Claude Code settings, from deduplication checks through pipe-testing raw commands, JSON validation, and proof-of-execution. Emphasizes catching failures early by testing commands with synthesized stdin payloads before writing to the settings file.

##### 7.2.1.4 [Generate permission allowlist from transcripts (Skill)](system-prompts/skill-generate-permission-allowlist-from-transcripts.md)

Analyzes session transcripts to extract frequently used read-only tool patterns and adds them to the project's permission allowlist, reducing permission prompts while excluding arbitrary-code-execution patterns.

##### 7.2.1.5 [Team onboarding guide (Skill)](system-prompts/skill-team-onboarding-guide.md)

Template for onboarding a new teammate to a team's Claude Code setup, walking them through usage stats, setup checklists, MCP servers, skills, and team tips in a warm conversational style.

#### 7.2.2 Hooks & Configuration

Configures lifecycle automation through event-driven hooks, permission interception, tool-use preferences, and harness behavior that orchestrates Claude Code interactions with external systems and user consent boundaries.

##### 7.2.2.1 [Hooks Configuration (System Prompt)](system-prompts/system-prompt-hooks-configuration.md)

Comprehensive reference for configuring lifecycle hooks that run commands or agents at specific Claude Code events like PermissionRequest, PreToolUse, PostToolUse, and compaction, with JSON structure, input/output formats, and common patterns.

##### 7.2.2.2 [Harness instructions (System Prompt)](system-prompts/system-prompt-harness-instructions.md)

Defines core interactive-agent identity and harness behavior including GitHub-flavored markdown output, permission modes, hook interception, context compaction, and tool-use preferences with clickable code references.

##### 7.2.2.3 [Tool execution denied (System Prompt)](system-prompts/system-prompt-tool-execution-denied.md)

Instructs Claude to attempt reasonable workarounds when tool execution is denied, but stop and explain if the capability is essential rather than attempting malicious bypasses.

#### 7.2.3 GitHub & CI/CD Integration

Templates and workflows for integrating Claude Code with GitHub, enabling automated code review and analysis through pull request triggers and app installation.

##### 7.2.3.1 [GitHub Actions workflow for @claude mentions (Data)](system-prompts/data-github-actions-workflow-for-claude-mentions.md)

GitHub Actions workflow template that triggers Claude Code integration when @claude is mentioned in pull requests or issues.

##### 7.2.3.2 [GitHub App installation PR description (Data)](system-prompts/data-github-app-installation-pr-description.md)

Template PR description for installing the Claude Code GitHub App, explaining integration benefits and security considerations.

### 7.3 User Interaction and Teaching Modes

Interactive decision support through clarifying questions, visual previews, teach-mode overlays, and background event streaming for monitoring long-running processes.

#### 7.3.1 User Interaction & Teaching

Interactive decision-making and learning support through clarifying questions with optional visual previews, teach-mode guidance with fullscreen overlays, and background event streaming for monitoring long-running processes.

##### 7.3.1.1 [AskUserQuestion (Tool Description)](system-prompts/tool-description-askuserquestion.md)

Tool for gathering user preferences, clarifying ambiguous instructions, and offering implementation choices during execution, with special handling for plan mode to avoid referencing the plan before approval.

##### 7.3.1.2 [AskUserQuestion (preview field) [Tool Description]](system-prompts/tool-description-askuserquestion-preview-field.md)

Describes the optional preview field for single-select questions, allowing display of self-contained HTML artifacts like UI mockups, code snippets, and diagrams for visual comparison.

##### 7.3.1.3 [request_teach_access (part of teach mode) [Tool Description]](system-prompts/tool-description-request_teach_access-part-of-teach-mode.md)

Request permission to guide user through tasks step-by-step with fullscreen tooltip overlays when they want to learn; use instead of direct access for teaching scenarios.

##### 7.3.1.4 [Background monitor (streaming events) [Tool Description]](system-prompts/tool-description-background-monitor-streaming-events.md)

Streams stdout events from long-running scripts as chat notifications, with guidance on script quality, output filtering, coverage of terminal states, and avoiding unbounded commands for single-notification scenarios.

#### 7.3.2 Browser Automation & Interaction

Guidelines for automating browser interactions through Chrome MCP tools, including GIF recording, console debugging with filtering, tab context management, and dialog avoidance to maintain focused task execution.

##### 7.3.2.1 [Chrome browser MCP tools (System Prompt)](system-prompts/system-prompt-chrome-browser-mcp-tools.md)

Requires loading Chrome browser MCP tools via ToolSearch before use, with specific syntax for selecting and calling mcp__claude-in-chrome__* tools.

##### 7.3.2.2 [Claude in Chrome browser automation (System Prompt)](system-prompts/system-prompt-claude-in-chrome-browser-automation.md)

Provides guidelines for browser automation including GIF recording with extra frames, console log debugging with regex filtering, avoiding JavaScript dialogs, staying focused on tasks, and using tab context at session startup to avoid stale tab IDs.

---

## 8. Development Tools and Workspace Operations

Core tooling for interacting with the local development environment: file system operations, code search and intelligence, browser automation for web content, and git worktree management.

### 8.1 File System Operations

Tools for reading and modifying local files with specialized support for different formats. Distinguishes between full rewrites and targeted edits, with dedicated handling for Jupyter notebooks and multi-format content including images and PDFs.

#### 8.1.1 [ReadFile (Tool Description)](system-prompts/tool-description-readfile.md)

Read files from local filesystem with support for images, PDFs (with page ranges for large files), and Jupyter notebooks; use absolute paths and assume all files are accessible.

#### 8.1.2 [Write (Tool Description)](system-prompts/tool-description-write.md)

Writes files to the local filesystem, overwriting if present. Prefer Edit for modifying existing files; avoid creating documentation unless explicitly requested.

#### 8.1.3 [Write (read existing file first) [Tool Description]](system-prompts/tool-description-write-read-existing-file-first.md)

Writes files to the filesystem with a requirement to read existing files before overwriting. Prefer Edit for modifications to send only diffs.

#### 8.1.4 [Edit (Tool Description)](system-prompts/tool-description-edit.md)

Perform exact string replacements in files, preserving indentation from source; prefer editing existing files over creating new ones and use replace_all for renaming across files.

#### 8.1.5 [NotebookEdit (Tool Description)](system-prompts/tool-description-notebookedit.md)

Replace contents of specific cells in Jupyter notebooks; supports insert and delete modes with 0-indexed cell numbering.

### 8.2 Search & Code Intelligence

Code exploration and discovery capabilities powered by regex-based content search and Language Server Protocol integration. Enables definition lookup, reference tracking, and dynamic tool schema discovery within development environments.

#### 8.2.1 [Grep (Tool Description)](system-prompts/tool-description-grep.md)

Search content using ripgrep with full regex support, file filtering by glob or type, and multiple output modes; always use this tool instead of bash grep commands.

#### 8.2.2 [LSP (Tool Description)](system-prompts/tool-description-lsp.md)

Interact with Language Server Protocol servers for code intelligence including definition lookup, references, hover info, symbols, and call hierarchy across the workspace.

#### 8.2.3 [ToolSearch (second part) [Tool Description]](system-prompts/tool-description-toolsearch-second-part.md)

Fetches deferred tool schemas by query, supporting exact name selection, keyword search, and required-term filtering. Returns matched tools as JSONSchema definitions callable like built-in tools.

### 8.3 Browser & Web Automation

Web interaction and content retrieval through browser automation, batch execution, and direct HTML fetching. Supports both real-time web search for current information and efficient multi-step workflows with screenshot-guided navigation.

#### 8.3.1 [Computer (Tool Description)](system-prompts/tool-description-computer.md)

Interact with a web browser using mouse and keyboard; take screenshots and consult them before clicking to determine accurate element coordinates.

#### 8.3.2 [BrowserBatch (Tool Description)](system-prompts/tool-description-browserbatch.md)

Execute multiple browser tool calls sequentially in one round trip, stopping on first error; use extensively for predictable multi-step workflows like navigation and form interaction.

#### 8.3.3 [WebFetch (Tool Description)](system-prompts/tool-description-webfetch.md)

Fetches and analyzes web content by converting HTML to markdown and processing with a fast model. Includes 15-minute cache, handles redirects, and prefers MCP-provided alternatives when available.

#### 8.3.4 [WebSearch (Tool Description)](system-prompts/tool-description-websearch.md)

Searches the web for current information beyond Claude's knowledge cutoff. Requires mandatory Sources section listing all relevant URLs as markdown hyperlinks in responses.

#### 8.3.5 [Computer action (Tool Parameter)](system-prompts/tool-parameter-computer-action.md)

Defines browser automation actions for Chrome: clicks, typing, scrolling, keyboard input, dragging, zooming, and hover interactions for UI interaction and inspection.
