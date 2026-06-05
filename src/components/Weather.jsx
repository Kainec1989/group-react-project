import { useState } from "react";
import Card from "./Card";
import backgroundImage from "../assets/images/background.jpg";
import {
  formatSolDate,
  formatTemperature,
  getRecentSols,
  getSolData,
  getSolHighLow,
} from "../utils/marsWeather";

const Weather = ({ weatherData }) => {
  const [unit, setUnit] = useState("imperial");
  const recentSols = getRecentSols(weatherData);
  const latestSolKey = recentSols[recentSols.length - 1];
  const latestData = latestSolKey ? getSolData(weatherData, latestSolKey) : null;
  const { high, low } = getSolHighLow(latestData);

  if (!latestSolKey || !latestData) {
    return (
      <p className="text-white text-center p-8">
        No Mars weather data available. The InSight mission has ended, so NASA
        may no longer provide updates.
      </p>
    );
  }

  const latestSolNumber = latestSolKey.replace("sol", "");
  const latestDate = formatSolDate(latestData);

  return (
    <section
      className="relative w-[92%] max-w-6xl mx-auto my-12 rounded-2xl overflow-hidden min-h-[600px] flex flex-col justify-between"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-6 md:p-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Latest Weather at Elysium Planitia
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed">
              InSight measured daily weather (temperature, wind, pressure) at
              Elysium Planitia near Mars&apos; equator. The mission ended in
              2022 — data shown is from the final archived records.
            </p>
          </div>
          <button
            onClick={() =>
              setUnit((u) => (u === "imperial" ? "metric" : "imperial"))
            }
            className="self-start shrink-0 px-4 py-2 rounded-lg bg-black/50 text-white text-sm hover:bg-black/70 transition-colors border border-white/20"
          >
            Show in {unit === "imperial" ? "Celsius" : "Fahrenheit"}
          </button>
        </div>

        <div className="mt-8 md:mt-16 max-w-md">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-2">
            Sol {latestSolNumber}
            {latestDate && (
              <span className="text-2xl md:text-3xl font-normal text-white/80 ml-3">
                {latestDate}
              </span>
            )}
          </h2>
          <div className="text-white text-xl md:text-2xl space-y-1 mt-4">
            <p>
              <span className="font-semibold">High:</span>{" "}
              {formatTemperature(high, unit)}
              {unit === "imperial" && high != null && (
                <span className="text-white/60 text-lg ml-2">
                  | {formatTemperature(high, "metric")}
                </span>
              )}
              {unit === "metric" && high != null && (
                <span className="text-white/60 text-lg ml-2">
                  | {formatTemperature(high, "imperial")}
                </span>
              )}
            </p>
            <p>
              <span className="font-semibold">Low:</span>{" "}
              {formatTemperature(low, unit)}
              {unit === "imperial" && low != null && (
                <span className="text-white/60 text-lg ml-2">
                  | {formatTemperature(low, "metric")}
                </span>
              )}
              {unit === "metric" && low != null && (
                <span className="text-white/60 text-lg ml-2">
                  | {formatTemperature(low, "imperial")}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 bg-black/30 backdrop-blur-sm">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {recentSols.map((solKey) => (
            <Card
              key={solKey}
              solKey={solKey}
              data={getSolData(weatherData, solKey)}
              unit={unit}
              isLatest={solKey === latestSolKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Weather;
