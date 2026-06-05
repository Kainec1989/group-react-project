import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageNotFound from "./PageNotFound";

vi.mock("../components/SpaceBackground", () => ({
  default: () => <div data-testid="space-background" />,
}));

vi.mock("react-starfield", () => ({
  default: () => null,
}));

describe("PageNotFound", () => {
  it("renders 404 message and home link", () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /take me home/i })).toHaveAttribute(
      "href",
      "/"
    );
  });
});
