import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("../config/env", () => ({
  nasaApiKey: "test-nasa-key",
}));

import { fetchApod, fetchMarsWeather } from "./nasa";
import { apodFallback } from "../constants/apodFallback";

describe("NASA API", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("fetchApod returns data on success", async () => {
    const mockApod = {
      title: "Test Image",
      url: "https://apod.nasa.gov/test.jpg",
    };

    fetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockApod,
    });

    const result = await fetchApod();
    expect(result).toEqual(mockApod);
  });

  it("fetchApod returns fallback when all requests fail", async () => {
    vi.useFakeTimers();
    fetch.mockResolvedValue({
      ok: false,
      status: 503,
      json: async () => ({ msg: "Service unavailable" }),
    });

    const resultPromise = fetchApod();
    await vi.runAllTimersAsync();
    const result = await resultPromise;

    expect(result).toEqual(apodFallback);
    vi.useRealTimers();
  });

  it("fetchMarsWeather returns data on success", async () => {
    const mockWeather = {
      sol_keys: ["681"],
      681: { AT: { mx: -4, mn: -95 } },
    };

    fetch.mockResolvedValue({
      ok: true,
      json: async () => mockWeather,
    });

    const result = await fetchMarsWeather();
    expect(result.sol_keys).toContain("681");
  });

  it("fetchMarsWeather returns fallback when API fails", async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 403,
      json: async () => ({ error: "Forbidden" }),
    });

    const result = await fetchMarsWeather();
    expect(result.sol_keys.length).toBeGreaterThan(0);
  });
});
