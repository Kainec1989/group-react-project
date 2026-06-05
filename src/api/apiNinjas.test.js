import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("../config/env", () => ({
  apiNinjasKey: "test-api-key",
}));

import { fetchPlanetData } from "./apiNinjas";

describe("fetchPlanetData", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns API data on success", async () => {
    const mockData = [{ name: "Earth", mass: 0.00315 }];
    fetch.mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchPlanetData("Earth");
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.api-ninjas.com/v1/planets?name=Earth",
      expect.objectContaining({
        headers: { "X-Api-Key": "test-api-key" },
      })
    );
  });

  it("falls back to static data on 400 error", async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({ error: "Invalid API Key." }),
    });

    const result = await fetchPlanetData("Mars");
    expect(result[0].name).toBe("Mars");
    expect(result[0].mass).toBeDefined();
  });

  it("throws when API fails and no fallback exists", async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({ error: "Server error" }),
    });

    await expect(fetchPlanetData("UnknownPlanet")).rejects.toThrow();
  });
});
