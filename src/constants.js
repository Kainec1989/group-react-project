export const fetchWeatherData = async () => {
    try {
      const response = await fetch("https://api.nasa.gov/insight_weather/?api_key=bfIFc5bScxD5HfbbLrhjMIlK0Lv6HpcWdFKhIAmn&feedtype=json&ver=1.0");
      const data = await response.json();
      console.log("Fetched data:", data); // Debugging: Log the fetched data
      return data;
    } catch (error) {
      console.error("Error fetching data:", error); // Debugging: Log any errors
      return null;
    }
  };