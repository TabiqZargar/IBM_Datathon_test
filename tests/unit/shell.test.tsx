import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SiteHeader } from "@/features/shell/components/site-header";

const { pathnameMock } = vi.hoisted(() => ({ pathnameMock: { current: "/" } }));

vi.mock("next/navigation", () => ({
  usePathname: () => pathnameMock.current,
}));

describe("SiteHeader", () => {
  it("renders the brand link and primary navigation", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: /\[TBD\] Project name/ })).toHaveAttribute("href", "/");

    const nav = screen.getByRole("navigation", { name: "Primary" });
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveTextContent("Overview");
    expect(nav).toHaveTextContent("About");
  });

  it("marks the current route with aria-current", () => {
    pathnameMock.current = "/about";
    render(<SiteHeader />);

    const nav = within(screen.getByRole("navigation", { name: "Primary" }));
    expect(nav.getByRole("link", { name: "About" })).toHaveAttribute("aria-current", "page");
    expect(nav.getByRole("link", { name: "Overview" })).not.toHaveAttribute("aria-current");

    pathnameMock.current = "/";
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(document.getElementById("primary-navigation-menu")).not.toBeInTheDocument();

    await user.click(toggle);

    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(document.getElementById("primary-navigation-menu")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close menu" }));
    expect(document.getElementById("primary-navigation-menu")).not.toBeInTheDocument();
  });
});
