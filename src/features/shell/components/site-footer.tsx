import { siteConfig } from "@/lib/site";

export async function SiteFooter() {
  "use cache";
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="page-container flex flex-col gap-1 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p>
          &copy; {year} {siteConfig.name}
        </p>
        <p>Built for {siteConfig.tagline} &middot; Problem statement and solution: [TBD]</p>
      </div>
    </footer>
  );
}
