# Idea Evaluation Framework

> **Status:** Empty framework. **No project ideas are recorded here.** This document defines the
> scoring model we will use to compare candidate ideas **after** the official challenge details
> arrive. It is a reusable template, not a shortlist.

| Field        | Value                                                     |
| ------------ | --------------------------------------------------------- |
| Owner        | [TBD]                                                     |
| Last updated | 2026-10-09                                                |
| Depends on   | `docs/CHALLENGE_BRIEF.md` (official criteria and weights) |

## Purpose

Provide a consistent, evidence-based way to compare candidate ideas so decisions are based on
fit and evidence rather than enthusiasm. The framework is deliberately independent of any
specific idea.

## Criteria

Each idea is scored 0–5 per criterion. Scores must be justified with evidence, not opinion.

| Criterion               | Question it answers                                                    | What a 5 looks like                                                                      | Evidence required                                        |
| ----------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Impact**              | How much real social good does this create for the target users?       | Clear, significant benefit to an underserved group; aligned with the stated social goal. | User research, problem evidence, beneficiary validation. |
| **Feasibility**         | Can this team build and ship it within the time and skills available?  | Core value deliverable with a small, proven scope and existing team skills.              | Scope estimate, skill inventory, dependency list.        |
| **AI necessity**        | Is AI genuinely required, or is it AI-for-AI's-sake?                   | AI is the only realistic way to deliver the core value; a non-AI baseline would fail.    | Explanation of why non-AI approaches are insufficient.   |
| **Technical risk**      | How likely are unknowns to block delivery? (inverted: 5 = lowest risk) | Uses well-understood tech; no unproven data/API/model assumptions.                       | Risk register, spike results, dependency availability.   |
| **Differentiation**     | How is this better than existing solutions?                            | A defensible improvement on a real gap that existing tools do not address.               | Competitor/adjacent analysis from the brief.             |
| **Measurable outcomes** | Can success be demonstrated with concrete numbers?                     | Clear baselines, targets, and a credible way to measure them.                            | Metric definitions and measurement plan.                 |
| **Demo quality**        | Will this produce a compelling, reliable live demonstration?           | Repeatable end-to-end flow that shows value in minutes without fragile setup.            | Demo script draft, environment plan.                     |

### AI necessity gate

Before scoring, answer all of the following. A "no" is a red flag, not an automatic rejection:

- [ ] What is the non-AI baseline, and why is it insufficient?
- [ ] Is the AI doing real work, or only rephrasing deterministic logic?
- [ ] Can the same user value be delivered without a model? If yes, why use one?

## Scoring and weights

Scale: `0 = absent`, `1 = very weak`, `3 = adequate`, `5 = excellent`.

Weights below are **`[ASSUMPTION]` — ours, not official**. They are a starting default and must
be replaced with the official criteria and weights from `docs/CHALLENGE_BRIEF.md` section 5
before any decision is finalized. Column values are editable.

| Criterion           | Provisional weight | Score (0–5) | Weighted score |
| ------------------- | ------------------ | ----------- | -------------- |
| Impact              | 20%                | [TBD]       | [TBD]          |
| Measurable outcomes | 15%                | [TBD]       | [TBD]          |
| AI necessity        | 15%                | [TBD]       | [TBD]          |
| Feasibility         | 15%                | [TBD]       | [TBD]          |
| Demo quality        | 15%                | [TBD]       | [TBD]          |
| Differentiation     | 10%                | [TBD]       | [TBD]          |
| Technical risk      | 10%                | [TBD]       | [TBD]          |
| **Total**           | **100%**           | —           | **[TBD]**      |

`Weighted score = weight × score`. Higher is better. For **Technical risk** the score is already
inverted (5 = lowest risk), so no separate inversion is applied.

## Comparison table (template)

| Criterion           | Idea A    | Idea B    | Idea C    | Notes |
| ------------------- | --------- | --------- | --------- | ----- |
| Impact              | [TBD]     | [TBD]     | [TBD]     |       |
| Measurable outcomes | [TBD]     | [TBD]     | [TBD]     |       |
| AI necessity        | [TBD]     | [TBD]     | [TBD]     |       |
| Feasibility         | [TBD]     | [TBD]     | [TBD]     |       |
| Demo quality        | [TBD]     | [TBD]     | [TBD]     |       |
| Differentiation     | [TBD]     | [TBD]     | [TBD]     |       |
| Technical risk      | [TBD]     | [TBD]     | [TBD]     |       |
| **Weighted total**  | **[TBD]** | **[TBD]** | **[TBD]** |       |

## Red flags and disqualifiers

An idea should be set aside (not merely scored low) if any of these hold:

- Requires data that is unavailable, unlicensed, or contains unresolved PII.
- Depends on an IBM/cloud service the team cannot access or must not use.
- Cannot be demonstrated end-to-end within the available time.
- Presents mock behavior as real AI.
- Solves a problem the target users do not actually have (no evidence).

## Decision rules

1. Reconcile provisional weights with official judging weights before finalizing.
2. Prefer the highest weighted total, but require feasibility ≥ 3 and technical risk ≥ 3.
3. If totals are within a tie band (define once criteria are known), choose the higher
   **Demo quality** score, then the higher **Impact** score.
4. Record the outcome and rationale in `docs/DECISION_LOG.md`.

## Change log

| Date       | Change                         | Author |
| ---------- | ------------------------------ | ------ |
| 2026-10-09 | Created as an empty framework. | [TBD]  |
