import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PrimaryNavigation } from "@/features/shell/components/primary-navigation";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex size-7 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground"
          >
            <Sparkles className="size-4" />
          </span>
          <span className="truncate text-sm font-semibold tracking-tight sm:text-base">
            {siteConfig.name}
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Badge variant="outline" className="hidden sm:inline-flex">
            {siteConfig.tagline}
          </Badge>
          <PrimaryNavigation />
        </div>
      </div>
    </header>
  );
}
