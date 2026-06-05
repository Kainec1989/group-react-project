import { nasaApiKey } from "../config/env";
import { marsWeatherFallback } from "../constants/marsWeatherFallback";
import { apodFallback } from "../constants/apodFallback";

const NASA_KEYS = [...new Set([nasaApiKey, "DEMO_KEY"].filter(Boolean))];
const RETRY_DELAYS_MS = [1000, 2000, 3000];

async function parseErrorResponse(response) {
  try {
    const body = await response.json();
    return body.error?.message || body.msg || `HTTP error! status: ${response.status}`;
  } catch {
    return `HTTP error! status: ${response.status}`;
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchNasaJson(url, { isValid } = {}) {
  let lastError = null;

  for (const apiKey of NASA_KEYS) {
    const requestUrl = url(apiKey);

    for (let attempt = 0; attempt < RETRY_DELAYS_MS.length; attempt++) {
      try {
        const response = await fetch(requestUrl);

        if (response.status === 503 || response.status === 429) {
          lastError = new Error(await parseErrorResponse(response));
          if (attempt < RETRY_DELAYS_MS.length - 1) {
            await wait(RETRY_DELAYS_MS[attempt]);
            continue;
          }
          break;
        }

        if (!response.ok) {
          lastError = new Error(await parseErrorResponse(response));
          break;
        }

        const data = await response.json();

        if (data.error) {
          lastError = new Error(data.error.message || data.error);
          break;
        }

        if (isValid && !isValid(data)) {
          lastError = new Error("Invalid NASA API response");
          break;
        }

        return data;
      } catch (err) {
        lastError = err;
        if (attempt < RETRY_DELAYS_MS.length - 1) {
          await wait(RETRY_DELAYS_MS[attempt]);
        }
      }
    }
  }

  throw lastError ?? new Error("NASA API unavailable");
}

async function fetchInsightWeather(apiKey) {
  const response = await fetch(
    `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`
  );

  if (!response.ok) {
    throw new Error(await parseErrorResponse(response));
  }

  const data = await response.json();
  const hasSols =
    (Array.isArray(data.sol_keys) && data.sol_keys.length > 0) ||
    Object.keys(data).some((key) => /^\d+$/.test(key));

  if (!hasSols) {
    throw new Error("No Mars weather data in NASA response");
  }

  return data;
}

export async function fetchApod() {
  try {
    return await fetchNasaJson(
      (key) => `https://api.nasa.gov/planetary/apod?api_key=${key}`,
      { isValid: (data) => Boolean(data.url) }
    );
  } catch {
    return apodFallback;
  }
}

export async function fetchMarsWeather() {
  for (const key of NASA_KEYS) {
    try {
      return await fetchInsightWeather(key);
    } catch {
      // try next key
    }
  }

  return marsWeatherFallback;
}
