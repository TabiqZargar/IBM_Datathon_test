"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

export default function ErrorBoundary({ error, retry }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="page-container flex min-h-[50vh] items-center justify-center py-12">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Something went wrong</CardTitle>
          <CardDescription>
            An unexpected error occurred while rendering this page. You can try again, or return to
            the overview.
            {error.digest ? ` (ref: ${error.digest})` : ""}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button onClick={() => retry()}>Try again</Button>
          <Button variant="outline" onClick={() => router.push("/")}>
            Back to overview
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
