import { apiNinjasKey } from "../config/env";
import { planetFallback } from "../constants/planetFallback";

async function parseErrorResponse(response) {
  try {
    const body = await response.json();
    return body.error || `HTTP error! status: ${response.status}`;
  } catch {
    return `HTTP error! status: ${response.status}`;
  }
}

export async function fetchPlanetData(planetName) {
  const fallback = planetFallback[planetName];

  if (!apiNinjasKey) {
    if (fallback) return [fallback];
    throw new Error("API Ninjas key is not configured");
  }

  const response = await fetch(
    `https://api.api-ninjas.com/v1/planets?name=${encodeURIComponent(planetName)}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": apiNinjasKey,
      },
    }
  );

  if (!response.ok) {
    if (fallback) return [fallback];
    throw new Error(await parseErrorResponse(response));
  }

  const data = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    if (fallback) return [fallback];
    throw new Error(`No data found for planet: ${planetName}`);
  }

  return data;
}
