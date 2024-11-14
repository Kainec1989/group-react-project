import React, { useState, useEffect, useContext } from "react";
import MarsCanvas from "../components/Mars";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Starfield from "react-starfield";
import { MyContext } from "../components/ContextProvider";
import Weather from "../components/Weather";
import { fetchWeatherData } from "../../../src/constants";
import { useLocation } from "react-router-dom";

import { planetDescription } from "../../utils/constants";


function MarsPage() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeatherData();
      setWeatherData(data);
    };
    getWeatherData();
  }, []);


  const { page, setPage, planetData, error, fetchPlanetData } =
    useContext(MyContext);

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

        <div className="text-white flex mb-[100px] px-[50px]">
          <div className="w-1/3 text-left">
            <h1 className="text-[50px]">{page}</h1>
            <p>{planetDescription[page]}</p>
          </div>
        </div>


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
