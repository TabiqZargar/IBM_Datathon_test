import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

const projectBrief = [
  { label: "Problem statement", value: "[TBD]" },
  { label: "Target users", value: "[TBD]" },
  { label: "AI component", value: "[TBD]" },
  { label: "IBM technologies & services", value: "[TBD]" },
  { label: "Key features", value: "[TBD]" },
] as const;

export default function OverviewPage() {
  return (
    <div className="page-container py-12 sm:py-16">
      <section className="max-w-3xl">
        <Badge variant="secondary">{siteConfig.tagline}</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {siteConfig.description}
        </p>
      </section>

      <section aria-labelledby="project-brief-heading" className="mt-12 max-w-3xl">
        <h2
          id="project-brief-heading"
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Project brief
        </h2>
        <Card className="mt-4">
          <CardContent className="p-0">
            <dl className="divide-y divide-border">
              {projectBrief.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="text-sm font-medium">{item.label}</dt>
                  <dd className="text-sm text-muted-foreground sm:text-right">{item.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="status-heading" className="mt-8 max-w-3xl">
        <h2
          id="status-heading"
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Status
        </h2>
        <Card className="mt-4">
          <CardContent className="p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              This repository currently contains the engineering scaffold only: application shell,
              UI primitives, tooling, tests, and CI. Product features are added once the problem
              statement, solution approach, and IBM technology stack are finalized. See{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                docs/ARCHITECTURE.md
              </code>{" "}
              for the architecture template.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
