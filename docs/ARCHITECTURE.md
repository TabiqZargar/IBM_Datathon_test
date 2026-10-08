# Architecture

> Status: **template with placeholders.** Sections are filled in only once the problem
> statement and solution are finalized. Anything unresolved stays marked `[TBD]` — no
> speculative IBM services, datasets, or AI capabilities are documented here.

## Problem

[TBD] The challenge being addressed, including scope and constraints.

## Solution

[TBD] The proposed approach and why it fits the problem.

## System architecture

Current state (scaffold): a single Next.js application deployed as one unit.

```
Browser
  └── Next.js (App Router)
        ├── React Server Components (pages, layout)
        ├── Client Components (interactive shell, future feature UIs)
        └── Route Handlers / Server Actions      [TBD: needed or not]
```

[TBD] Target-state diagram and component responsibilities once the solution is defined.

## Frontend

- Next.js App Router with React Server Components by default; `"use client"` only where
  interactivity is required.
- Tailwind CSS v4 design tokens in `src/app/globals.css` (light/dark via `prefers-color-scheme`).
- shadcn/ui-style primitives in `src/components/ui/` (button, card, badge, skeleton,
  empty-state) — extend these before creating one-off components.
- Application shell (header, footer, navigation) in `src/features/shell/`.
- Accessible baseline: landmarks, skip link, focus-visible styles, `aria-current` navigation,
  mobile responsive layout.

[TBD] Feature-level UI plans, routing map, state management.

## Backend

Currently only Next.js server-side functionality (Server Components; Route Handlers/Server
Actions when needed).

[TBD] Server-side logic, external API integrations, data access layer.

## AI/ML pipeline

[TBD] Model/provider selection, prompt or training strategy, inference path, evaluation,
latency and cost considerations. Nothing is implemented or mocked at this stage.

## IBM services

[TBD] Concrete IBM technologies/services used, with the role each one plays. Do not list a
service until it is actually part of the solution.

## Data flow

[TBD] Input → processing → AI inference → output, including what data is stored where.

## Security/privacy

Baseline in place:

- No secrets in the repository; `.env.local` gitignored, `.env.example` documents names only.
- Server-only variables are never `NEXT_PUBLIC_`-prefixed.

[TBD] Data handling, PII considerations, authentication/authorization, rate limiting,
dependency and supply-chain policy.

## Deployment

[TBD] Target platform, environment promotion, CI/CD beyond the current GitHub Actions
pipeline (`.github/workflows/ci.yml` for format/lint/typecheck/test/build, `.github/workflows/e2e.yml`
for Playwright).

## Future scalability

[TBD] Expected scaling pressures and how the architecture would evolve (caching, background
work, data stores, multi-user features). Keep the current single-application design until
there is evidence a split is needed.
