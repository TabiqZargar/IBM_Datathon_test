import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "[TBD] Problem statement, target users, AI component, and IBM technologies.",
};

const aboutSections = [
  { title: "Challenge (problem statement)", value: "[TBD]" },
  { title: "Solution", value: "[TBD]" },
  { title: "Target users", value: "[TBD]" },
  { title: "AI component", value: "[TBD]" },
  { title: "IBM technologies & services", value: "[TBD]" },
  { title: "Key features", value: "[TBD]" },
] as const;

export default function AboutPage() {
  return (
    <div className="page-container py-12 sm:py-16">
      <section className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">About</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Participation in the IBM Datathon: AI for Good. The sections below are placeholders that
          will be replaced with the finalized challenge details — nothing here is speculative by
          design.
        </p>
      </section>

      <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
        {aboutSections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="text-base">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{section.value}</CardContent>
          </Card>
        ))}
      </div>

      <section aria-labelledby="repo-heading" className="mt-10 max-w-3xl">
        <h2
          id="repo-heading"
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Repository
        </h2>
        <Card className="mt-4">
          <CardContent className="p-6 text-sm leading-relaxed text-muted-foreground">
            Engineering foundation: Next.js (App Router) + TypeScript, Tailwind CSS, shadcn/ui style
            primitives, Vitest unit tests, Playwright smoke tests, and a GitHub Actions pipeline
            covering formatting, linting, type checking, tests, and a production build. Contribution
            guidelines are documented in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">README.md</code>.
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
