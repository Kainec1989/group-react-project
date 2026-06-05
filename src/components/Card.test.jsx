import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className }) => (
      <div className={className}>{children}</div>
    ),
  },
}));

describe("Card", () => {
  it("renders sol number and temperatures", () => {
    render(
      <Card
        solKey="681"
        unit="imperial"
        isLatest={true}
        data={{
          AT: { mx: -4.4, mn: -95.4 },
          Last_UTC: "2021-02-19T12:00:00Z",
        }}
      />
    );

    expect(screen.getByText("Sol 681")).toBeInTheDocument();
    expect(screen.getByText(/High:/)).toBeInTheDocument();
    expect(screen.getByText(/Low:/)).toBeInTheDocument();
    expect(screen.getByText("24° F")).toBeInTheDocument();
  });

  it("shows N/A when temperature data is missing", () => {
    render(
      <Card solKey="675" unit="metric" isLatest={false} data={{}} />
    );

    expect(screen.getAllByText("N/A")).toHaveLength(2);
  });
});
