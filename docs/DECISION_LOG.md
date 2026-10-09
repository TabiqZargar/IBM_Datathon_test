# Decision Log

> **Status:** Active log. Records architecture and product decisions with their rationale,
> alternatives considered, and status. New decisions are appended; earlier entries are never
> rewritten — supersede them instead.

| Field        | Value      |
| ------------ | ---------- |
| Owner        | [TBD]      |
| Last updated | 2026-10-09 |

## Status values

| Status       | Meaning                                              |
| ------------ | ---------------------------------------------------- |
| `Proposed`   | Suggested, not yet agreed.                           |
| `Accepted`   | Agreed and currently in effect.                      |
| `Rejected`   | Considered and declined (kept for the record).       |
| `Superseded` | Replaced by a newer decision (link the replacement). |
| `Deprecated` | No longer recommended but not yet replaced.          |

## Index

| ID       | Date       | Title                                                                    | Status     |
| -------- | ---------- | ------------------------------------------------------------------------ | ---------- |
| ADR-0001 | 2026-10-09 | Use a dedicated Git repository for the project                           | `Accepted` |
| ADR-0002 | 2026-10-09 | No AI, IBM services, database, or auth before the challenge is finalized | `Accepted` |
| ADR-0003 | 2026-10-09 | Next.js App Router with a feature-oriented source layout                 | `Accepted` |
| ADR-0004 | 2026-10-09 | Documentation-first challenge discovery                                  | `Accepted` |

## Template

Copy this block for each new decision.

```markdown
## ADR-XXXX — Title

- **Date:** YYYY-MM-DD
- **Status:** Proposed | Accepted | Rejected | Superseded by ADR-YYYY | Deprecated
- **Deciders:** [TBD]
- **Related:** docs/CHALLENGE_BRIEF.md, docs/IDEA_EVALUATION.md, other ADRs

### Context

What situation or problem forces a decision?

### Decision

What was decided. Be specific and imperative.

### Rationale

Why this option, backed by evidence or constraints (not preference).

### Alternatives considered

- Alternative A — why not chosen.
- Alternative B — why not chosen.

### Consequences

- Positive:
- Negative / trade-offs:
- Follow-ups:
```

## ADR-0001 — Use a dedicated Git repository for the project

- **Date:** 2026-10-09
- **Status:** `Accepted`
- **Deciders:** Project owner
- **Related:** none

### Context

The working directory previously sat inside a larger Git repository rooted at the user's home
directory. That repository could inadvertently capture files unrelated to the project, and the
project had no commit history of its own.

### Decision

The project is version-controlled by its own Git repository rooted at the project directory
(`IBM_datathon`), on branch `main`.

### Rationale

A dedicated repository gives the project a self-contained history, clean review scope, and no
risk of mixing in unrelated files from the parent directory.

### Alternatives considered

- Keep using the parent home-directory repository — rejected: mixes unrelated files and lacks a
  clean project history.
- No version control — rejected: unacceptable for collaborative work.

### Consequences

- Positive: clean, isolated history; CI applies only to the project.
- Negative / trade-offs: the parent home-directory repository still lists the project folder as
  untracked; commits must always be made from inside the project directory.
- Follow-ups: continue making all commits from the project repository only.

## ADR-0002 — No AI, IBM services, database, or auth before the challenge is finalized

- **Date:** 2026-10-09
- **Status:** `Accepted`
- **Deciders:** Project owner
- **Related:** docs/CHALLENGE_BRIEF.md

### Context

The official problem statement, judging criteria, IBM technology requirements, and data
permissions are not yet known. Implementing capabilities now would mean guessing requirements.

### Decision

The project introduces no AI providers, IBM services, databases, authentication, or external
runtime dependencies until the official challenge details are received and recorded as
`[CONFIRMED]` in `docs/CHALLENGE_BRIEF.md`.

### Rationale

Avoids rework and prevents building features that may not fit the real problem. Keeps the
scaffold neutral and low-risk.

### Alternatives considered

- Prototype a generic AI feature now — rejected: risks solving the wrong problem and adds
  dependencies that may need to be removed.
- Pick an IBM service early — rejected: no evidence it is required or permitted.

### Consequences

- Positive: no wasted implementation; no speculative dependencies or secrets.
- Negative / trade-offs: no functional progress until the challenge is defined.
- Follow-ups: revisit immediately after the challenge brief is confirmed.

## ADR-0003 — Next.js App Router with a feature-oriented source layout

- **Date:** 2026-10-09
- **Status:** `Accepted`
- **Deciders:** Project owner
- **Related:** docs/ARCHITECTURE.md

### Context

The project needs a clear, scalable structure for an unknown future solution, with an
accessible application shell and a testable foundation.

### Decision

Use Next.js 16 App Router with React Server Components by default, a shared application shell
in `src/features/shell/`, reusable primitives in `src/components/ui/`, cross-cutting code in
`src/lib`, `src/hooks`, and `src/types`, and feature-local code under `src/features/<name>/`.

### Rationale

The layout keeps the shell and document/route concerns separate from future product features,
so a new capability can be dropped in without disturbing the foundation.

### Alternatives considered

- Pages Router — rejected: diverges from the current Next.js direction and the existing scaffold.
- Flat component folders — rejected: scales poorly and blurs feature boundaries.

### Consequences

- Positive: predictable placement for future features; shell reused across routes.
- Negative / trade-offs: requires discipline to keep feature code out of `src/lib` and `src/components/ui`.
- Follow-ups: document each new feature boundary when it is added.

## ADR-0004 — Documentation-first challenge discovery

- **Date:** 2026-10-09
- **Status:** `Accepted`
- **Deciders:** Project owner
- **Related:** docs/CHALLENGE_BRIEF.md, docs/IDEA_EVALUATION.md

### Context

Before any product work, the team must understand the official challenge, compare candidate
ideas objectively, and keep a durable record of decisions.

### Decision

Complete challenge discovery and planning documents — the challenge brief, the idea evaluation
framework, and this decision log — before proposing or implementing any solution.

### Rationale

Prevents building on unverified assumptions and gives the team a shared, reviewable basis for
choosing a direction.

### Alternatives considered

- Start building and document later — rejected: high rework risk with unknown requirements.
- Keep notes informally — rejected: no durable, reviewable record.

### Consequences

- Positive: assumptions and open questions are explicit and tracked.
- Negative / trade-offs: review overhead before coding begins.
- Follow-ups: fill `docs/CHALLENGE_BRIEF.md` from official sources; record the chosen idea here.

## Change log

| Date       | Change                                      | Author |
| ---------- | ------------------------------------------- | ------ |
| 2026-10-09 | Created log with ADR-0001 through ADR-0004. | [TBD]  |
