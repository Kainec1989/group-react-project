export function getSolKeys(weatherData) {
  if (Array.isArray(weatherData?.sol_keys) && weatherData.sol_keys.length > 0) {
    return weatherData.sol_keys.map((key) => String(key));
  }

  return Object.keys(weatherData)
    .filter((key) => /^\d+$/.test(key))
    .sort((a, b) => parseInt(a) - parseInt(b));
}

export function getSolData(weatherData, solKey) {
  const key = String(solKey).replace(/^sol/, "");
  return weatherData[key] ?? weatherData[`sol${key}`] ?? null;
}

export function getRecentSols(weatherData, count = 7) {
  return getSolKeys(weatherData).slice(-count);
}

export function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function formatTemperature(celsius, unit) {
  if (celsius == null || Number.isNaN(celsius)) return "N/A";

  if (unit === "imperial") {
    return `${Math.round(celsiusToFahrenheit(celsius))}° F`;
  }

  return `${Math.round(celsius)}° C`;
}

export function formatSolDate(solData) {
  const utc = solData?.Last_UTC || solData?.First_UTC;
  if (!utc) return "";

  return new Date(utc).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function getSolHighLow(solData) {
  return {
    high: solData?.AT?.mx ?? null,
    low: solData?.AT?.mn ?? null,
  };
}
