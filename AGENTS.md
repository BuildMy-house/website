# House Designer Site Agent Guide

## Authority and workflow

Hermes is the founder/CEO and owns product direction. The OpenCode Manager
turns Hermes' decisions into a plan, assigns implementation to the Worker,
and reviews the result. The Worker edits this folder and runs checks.

Do not ship a new page or component without checking the guides in `guides/`
and `docs/`. Changes to design tokens or shared components require Manager
review and CEO approval before they are used across multiple pages.

## Guide order

1. `guides/AGENTS.md` — operating rules for site work.
2. `docs/PRODUCT.md` — product intent and audience.
3. `docs/DESIGN-SYSTEM.md` — visual language, tokens, typography, spacing.
4. `guides/writing-guidelines.md` — content and claims.
5. `guides/component-library.md` — reusable component contracts and states.

The Worker may improve an implementation inside these rules. If the rules are
missing or conflict, stop and ask the Manager for a decision.

## Completion gate

Every task must report: files changed, checks run, screenshots or manual
checks performed, known issues, and whether the Manager should approve it.
