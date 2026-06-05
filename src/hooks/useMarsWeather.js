import { useState, useEffect } from "react";
import { fetchMarsWeather } from "../api/nasa";

export function useMarsWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchMarsWeather()
      .then((data) => {
        if (!cancelled) setWeatherData(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { weatherData, loading, error };
}
