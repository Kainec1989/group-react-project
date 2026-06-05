import { describe, it, expect } from "vitest";
import {
  getSolKeys,
  getSolData,
  getRecentSols,
  formatTemperature,
  getSolHighLow,
} from "./marsWeather";

const sampleWeather = {
  sol_keys: ["675", "676", "681"],
  675: { AT: { mx: -4, mn: -95 }, Last_UTC: "2021-02-13T12:00:00Z" },
  676: { AT: { mx: -5, mn: -94 } },
  681: { AT: { mx: -4.4, mn: -95.4 } },
};

describe("marsWeather utils", () => {
  it("reads sol keys from sol_keys array", () => {
    expect(getSolKeys(sampleWeather)).toEqual(["675", "676", "681"]);
  });

  it("returns recent sols", () => {
    expect(getRecentSols(sampleWeather, 2)).toEqual(["676", "681"]);
  });

  it("reads sol data by numeric or sol-prefixed key", () => {
    expect(getSolData(sampleWeather, "681")).toEqual(sampleWeather["681"]);
    expect(getSolData({ sol681: sampleWeather["681"] }, "sol681")).toEqual(
      sampleWeather["681"]
    );
  });

  it("formats celsius and fahrenheit", () => {
    expect(formatTemperature(0, "metric")).toBe("0° C");
    expect(formatTemperature(0, "imperial")).toBe("32° F");
    expect(formatTemperature(null, "metric")).toBe("N/A");
  });

  it("extracts high and low from sol data", () => {
    expect(getSolHighLow(sampleWeather["681"])).toEqual({
      high: -4.4,
      low: -95.4,
    });
  });
});
