import React, { useState, useEffect, useContext } from "react";
import MarsCanvas from "../components/Mars";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Starfield from "react-starfield";
import { MyContext } from "../components/ContextProvider";

function MarsPage() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch("https://api.nasa.gov/insight_weather/?api_key=bfIFc5bScxD5HfbbLrhjMIlK0Lv6HpcWdFKhIAmn&feedtype=json&ver=1.0")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debugging: Log the fetched data
        setWeatherData(data);
      })
      .catch((error) => console.error("Error fetching data:", error)); // Debugging: Log any errors
  }, []);

  const { setPage } = useContext(MyContext);
  useEffect(() => {
    setPage("Mars");
  }, [setPage]);

  const handleDivClick = (sol) => {
    alert(`Sol ${sol} clicked!`);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "fixed",
          zIndex: -1,
        }}
      >
        <Starfield starCount={10000} starColor={[255, 255, 255]} />
      </div>
      <div>
        <h1>Mars Weather Data</h1>
        <motion.div
          className="h-screen"
          transition={{ duration: 2 }}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
        >
          <MarsCanvas />
        </motion.div>
        {weatherData ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", border: "1px solid orange", color: "orange", width: "100vw", textAlign: "left" }}>
            {Object.keys(weatherData).map((sol) => {
              const solData = weatherData[sol];
              console.log("Sol data:", solData); // Debugging: Log each sol's data
              return (
                solData && solData.AT && solData.HWS && solData.PRE && (
                  <motion.div
                    key={sol}
                    onClick={() => handleDivClick(sol)}
                    style={{ cursor: "pointer", margin: "10px", padding: "10px", border: "1px solid orange", flex: "1 1 calc(25% - 20px)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    //transition={{ duration: 0.5, delay: parseInt(sol) * 0.1 }}
                  >
                    <h2>Sol {sol}</h2>
                    <p>Temperature: {solData.AT.av} °C</p>
                    <p>Wind Speed: {solData.HWS.av} m/s</p>
                    <p>Pressure: {solData.PRE.av} Pa</p>
                  </motion.div>
                )
              );
            })}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default MarsPage;