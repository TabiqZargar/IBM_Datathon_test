import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import OverviewPage from "@/app/page";
import { siteConfig } from "@/lib/site";

describe("Overview page", () => {
  it("renders the project identity and brief", () => {
    render(<OverviewPage />);

    expect(screen.getByRole("heading", { level: 1, name: siteConfig.name })).toBeInTheDocument();
    expect(screen.getByText("Problem statement")).toBeInTheDocument();
    expect(screen.getByText("IBM technologies & services")).toBeInTheDocument();
    expect(screen.getAllByText("[TBD]").length).toBeGreaterThanOrEqual(5);
  });

  it("uses landmarks for its sections", () => {
    render(<OverviewPage />);

    expect(screen.getByRole("region", { name: "Project brief" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Status" })).toBeInTheDocument();
  });
});
