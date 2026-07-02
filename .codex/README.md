# Codex Project Configuration

This directory contains project-scoped Codex settings. Codex loads this layer only after the repo is trusted.

## Defaults

- `sandbox_mode = "workspace-write"` keeps command execution scoped to the workspace unless approval is granted.
- `approval_policy = "on-request"` lets Codex ask before actions that need elevated permissions.
- `web_search = "cached"` uses the safer cached web-search mode by default.
- `model_reasoning_effort = "high"` favors careful reasoning for implementation work.
- `[windows].sandbox = "elevated"` uses the recommended native Windows sandbox mode.

No model is pinned here, so user/global Codex defaults still control model selection.

## Verify

From the repository root, run:

```sh
codex --ask-for-approval never "Summarize the current project instructions."
```

Codex should report guidance from `AGENTS.md` and this project config once the repository is trusted.
