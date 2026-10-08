# [TBD] Project name

**One-line description:** [TBD]

Engineering foundation for a project in the **IBM Datathon: AI for Good**. This repository
currently contains a production-quality scaffold (application shell, tooling, tests, CI) that
the actual solution will be built on once the challenge is finalized.

|                                 |                                                                             |
| ------------------------------- | --------------------------------------------------------------------------- |
| **Problem statement**           | [TBD]                                                                       |
| **Target users**                | [TBD]                                                                       |
| **AI component**                | [TBD]                                                                       |
| **IBM technologies / services** | [TBD]                                                                       |
| **Key features**                | [TBD]                                                                       |
| **Architecture**                | [TBD] — see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the template |

> Nothing above is intentionally filled with speculation. Placeholders are marked `[TBD]` and
> must be replaced only with the finalized problem statement and solution.

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** with design tokens in `src/app/globals.css`
- **shadcn/ui-style primitives** (`src/components/ui/`) built on `class-variance-authority`
- **Vitest** + Testing Library (unit/component tests), **Playwright** (end-to-end smoke tests)
- **ESLint 9** (flat config) + **Prettier**
- **GitHub Actions** CI

## Repository layout

```
src/
  app/          Routes and App Router special files (page, layout, loading, error, not-found)
  components/
    ui/         Reusable UI primitives (button, card, badge, skeleton, empty-state)
  features/
    shell/      Application shell: header, footer, primary navigation
  lib/          Utilities and app-wide constants (cn, site config)
  types/        Shared TypeScript types
  hooks/        Shared React hooks
tests/
  unit/         Vitest component/unit tests
  e2e/          Playwright end-to-end tests
docs/           Architecture and design documentation
.github/        CI workflows
```

Feature-oriented rule of thumb: a new product capability gets its own `src/features/<name>/`
folder (components + feature-local logic); only genuinely cross-cutting code belongs in
`src/lib`, `src/hooks`, or `src/components/ui`.

## Local development

**Prerequisites:** Node.js ≥ 20.9 (v22 recommended), npm ≥ 10.

```bash
npm ci              # install dependencies
npm run dev         # start the dev server on http://localhost:3000
```

Optional, only if you need environment variables:

```bash
cp .env.example .env.local   # then fill in values (never commit .env.local)
```

### Scripts

| Script                                    | Purpose                                |
| ----------------------------------------- | -------------------------------------- |
| `npm run dev`                             | Development server (Turbopack)         |
| `npm run build`                           | Production build                       |
| `npm run start`                           | Serve the production build             |
| `npm run lint` / `npm run lint:fix`       | ESLint check / auto-fix                |
| `npm run format` / `npm run format:check` | Prettier write / verify                |
| `npm run typecheck`                       | Route type generation + `tsc --noEmit` |
| `npm run test` / `npm run test:watch`     | Vitest once / watch mode               |
| `npm run test:e2e`                        | Playwright end-to-end tests            |

## Testing

**Unit / component tests (Vitest):**

```bash
npm run test
```

Covers page rendering, the application shell/navigation, UI primitives, and hooks. Async Server
Components are not supported by Vitest — cover those flows with end-to-end tests instead.

**End-to-end tests (Playwright):**

```bash
npx playwright install chromium   # first run only
npm run build                     # the e2e server runs the production build
npm run test:e2e
```

`playwright.config.ts` builds and starts the production server automatically. The critical
flows covered so far: navigation between routes and the 404 page.

**All checks before opening a PR:**

```bash
npm run format:check && npm run lint && npm run typecheck && npm run test && npm run build
```

CI (`.github/workflows/ci.yml`) runs exactly this pipeline on pushes to `main` and on pull
requests; `.github/workflows/e2e.yml` runs Playwright.

## Environment variables

Conventions live in [`.env.example`](.env.example):

- Copy it to `.env.local` for local overrides; `.env.local` is gitignored.
- Only `NEXT_PUBLIC_`-prefixed variables reach the browser — never prefix secrets with it.
- **No variables are required yet.** AI/IBM service credentials will be added here only after
  the problem statement and solution are finalized.

**No secrets are ever committed.**

## Contribution guidelines

1. Branch from `main`; keep branches short-lived and focused on one change.
2. Follow the existing structure: feature folders, server components by default, `"use client"`
   only where interactivity is required.
3. Keep components small and typed; prefer extending the UI primitives over new one-offs.
4. Add or update tests for anything you change (`tests/unit/`), and extend the e2e suite for
   new critical flows (`tests/e2e/`).
5. All four checks must pass locally before a PR: format, lint, typecheck, tests (plus build).
6. Write short, imperative commit messages (e.g. `Add project brief section`).
7. Do not commit secrets, `.env.local`, or mock AI behavior presented as real AI. Mark
   unresolved questions as `[TBD]` instead of guessing.

## Status

Scaffold complete; product implementation pending finalization of the challenge. See
[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).
