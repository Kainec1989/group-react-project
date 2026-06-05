import { useState } from "react";
import { fetchEarthWeather } from "../api/openWeather";
import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";

const EarthWeather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric");

  const fetchWeather = async (cityName, unitSystem) => {
    setLoading(true);
    try {
      const data = await fetchEarthWeather(cityName, unitSystem);
      setWeatherData(data);
      setError("");
    } catch (err) {
      setError(err.message || "City not found, please try again.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }
    fetchWeather(city, unit);
  };

  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
    if (city) {
      fetchWeather(city, newUnit);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden border border-emerald-400/30 bg-gradient-to-br from-emerald-900/80 to-blue-900/80 backdrop-blur-md shadow-2xl">
      <div className="px-6 py-5 border-b border-white/10">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Cloud size={28} className="text-emerald-300" />
          Earth Weather
        </h2>
        <p className="text-white/70 text-sm mt-1">
          Search any city for live conditions
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-white font-semibold transition-colors"
        >
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </form>

      {error && (
        <p className="px-6 pb-4 text-red-300 text-sm text-center">{error}</p>
      )}

      {weatherData && (
        <div className="px-6 pb-6 space-y-4">
          <h3 className="text-xl font-semibold text-white">
            {weatherData.name}, {weatherData.sys.country}
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3 text-white">
              <Thermometer size={20} className="text-orange-300 shrink-0" />
              <div>
                <p className="text-xs text-white/60">Temperature</p>
                <p className="font-semibold">
                  {weatherData.main.temp}°{unit === "metric" ? "C" : "F"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3 text-white">
              <Cloud size={20} className="text-blue-300 shrink-0" />
              <div>
                <p className="text-xs text-white/60">Conditions</p>
                <p className="font-semibold capitalize">
                  {weatherData.weather[0].description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3 text-white">
              <Droplets size={20} className="text-cyan-300 shrink-0" />
              <div>
                <p className="text-xs text-white/60">Humidity</p>
                <p className="font-semibold">{weatherData.main.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3 text-white">
              <Wind size={20} className="text-emerald-300 shrink-0" />
              <div>
                <p className="text-xs text-white/60">Wind</p>
                <p className="font-semibold">
                  {weatherData.wind.speed}{" "}
                  {unit === "metric" ? "m/s" : "mph"}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={toggleUnit}
            className="w-full py-2 rounded-lg border border-white/20 text-white/90 text-sm hover:bg-white/10 transition-colors"
          >
            Show in {unit === "metric" ? "Fahrenheit" : "Celsius"}
          </button>
        </div>
      )}
    </div>
  );
};

export default EarthWeather;
