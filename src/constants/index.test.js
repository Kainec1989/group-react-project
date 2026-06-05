import { describe, it, expect } from "vitest";
import { isValidPlanetSlug, navLinks, planets } from "./index";

describe("constants", () => {
  it("validates planet slugs", () => {
    expect(isValidPlanetSlug("earth")).toBe(true);
    expect(isValidPlanetSlug("mars")).toBe(true);
    expect(isValidPlanetSlug("pluto")).toBe(false);
    expect(isValidPlanetSlug("")).toBe(false);
  });

  it("exposes all eight planets in nav and config", () => {
    expect(Object.keys(planets)).toHaveLength(8);
    expect(navLinks).toHaveLength(8);
    expect(navLinks.map((link) => link.path)).toContain("/earth");
  });
});
