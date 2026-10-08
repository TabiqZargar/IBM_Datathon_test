import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="page-container py-12 sm:py-16" role="status" aria-label="Loading">
      <span className="sr-only">Loading…</span>
      <div className="max-w-3xl">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="mt-5 h-12 w-full max-w-xl" />
        <Skeleton className="mt-4 h-5 w-full max-w-lg" />
      </div>
      <Skeleton className="mt-12 h-64 w-full max-w-3xl" />
    </div>
  );
}
