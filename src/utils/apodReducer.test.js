import { describe, it, expect } from "vitest";
import { initialState, reducer } from "./apodReducer";

describe("apodReducer", () => {
  it("returns initial state for unknown action", () => {
    const state = reducer(initialState, { type: "UNKNOWN" });
    expect(state).toEqual(initialState);
  });

  it("handles FETCH_SUCCESS", () => {
    const payload = { title: "Test APOD", url: "https://example.com/img.jpg" };
    const state = reducer(initialState, { type: "FETCH_SUCCESS", payload });

    expect(state.loading).toBe(false);
    expect(state.data).toEqual(payload);
    expect(state.error).toBeNull();
  });

  it("handles FETCH_ERROR", () => {
    const error = new Error("Network error");
    const state = reducer(initialState, { type: "FETCH_ERROR", payload: error });

    expect(state.loading).toBe(false);
    expect(state.error).toBe(error);
    expect(state.data).toBeNull();
  });
});
