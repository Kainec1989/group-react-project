import React, { useState, useEffect, useContext } from "react";
import MarsCanvas from "../components/Mars";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Starfield from "react-starfield";
import { MyContext } from "../components/ContextProvider";
import Weather from "../components/Weather";
import { fetchWeatherData } from "../../../src/constants";
import { useLocation } from "react-router-dom";

function MarsPage() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeatherData();
      setWeatherData(data);
    };
    getWeatherData();
  }, []);

  const { setPage, planetData, error, fetchPlanetData } = useContext(MyContext);
  useEffect(() => {
    setPage("Mars");
  }, [setPage]);

  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#mars-weather" && weatherData) {
      setTimeout(() => {
        const element = document.getElementById("mars-weather");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location, weatherData]);
  console.log(planetData);

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
        <motion.div
          className="h-screen"
          transition={{ duration: 2 }}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
        >
          <MarsCanvas />
        </motion.div>

        {weatherData ? (
          <Weather weatherData={weatherData} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default MarsPage;
