import { Inbox } from "lucide-react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EmptyState } from "@/components/ui/empty-state";

describe("EmptyState", () => {
  it("renders title and description", () => {
    render(<EmptyState icon={Inbox} title="No results" description="Try adjusting your search." />);

    expect(screen.getByText("No results")).toBeInTheDocument();
    expect(screen.getByText("Try adjusting your search.")).toBeInTheDocument();
  });

  it("renders an optional action", () => {
    render(<EmptyState title="Nothing here" action={<button type="button">Create item</button>} />);

    expect(screen.getByRole("button", { name: "Create item" })).toBeInTheDocument();
  });
});
