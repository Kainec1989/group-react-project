import axios from "axios";
import { openWeatherKey } from "../config/env";

export async function fetchEarthWeather(city, units = "metric") {
  if (!openWeatherKey) {
    throw new Error("OpenWeather API key is not configured");
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${openWeatherKey}&units=${units}`;

  const response = await axios.get(url);
  return response.data;
}
