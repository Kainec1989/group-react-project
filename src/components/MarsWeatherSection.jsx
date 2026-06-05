import Weather from "./Weather";
import { useMarsWeather } from "../hooks/useMarsWeather";

function MarsWeatherSection() {
  const { weatherData, loading, error } = useMarsWeather();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-400" />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-300 text-center p-8 max-w-lg mx-auto rounded-lg bg-red-900/20 border border-red-400/30">
        {error}
      </p>
    );
  }

  if (!weatherData) {
    return null;
  }

  return <Weather weatherData={weatherData} />;
}

export default MarsWeatherSection;
