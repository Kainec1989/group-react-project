import React, { useState, useEffect, useContext } from "react";
import MarsCanvas from "../components/Mars";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Starfield from "react-starfield";
import { MyContext } from "../components/ContextProvider";
import Weather from "../components/Weather";
import { fetchWeatherData } from "../../../src/constants";
import { useLocation } from "react-router-dom";
import { navStyles } from "../../utils/constants";
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

        <div className="text-white flex items-center justify-between mb-[50px] px-[50px]">
          <div className="w-1/3 text-left">
            <h1 className="text-[50px]">{page}</h1>
            <p>{planetDescription[page]}</p>
          </div>

          {planetData ? (
            <div
              className={` w-1/3 rounded  bg-slate-400 p-6 m-4 ${navStyles[page]
                .split(" ")
                .slice(0, 3)
                .join(" ")}`}
            >
              <hr className="border-white border w-full" />
              <div className="text-white/100 my-5">
                <p>
                  <span className="">Distance (Light Years):</span>{" "}
                  {planetData[0].distance_light_year}
                </p>
                <p>
                  <span className="">Mass (relative to Earth):</span>{" "}
                  {planetData[0].mass}
                </p>
                <p>
                  <span className="">Radius (AU):</span> {planetData[0].radius}
                </p>
                <p>
                  <span className="">Orbit Period (days):</span>{" "}
                  {planetData[0].period}
                </p>
                <p>
                  <span className="">Semi-Major Axis:</span>{" "}
                  {planetData[0].semi_major_axis}
                </p>
                <p>
                  <span className="">Planet Temperature:</span>{" "}
                  {(planetData[0].temperature - 273.1).toFixed(1)} °C
                </p>
              </div>
              <hr className="border-white border w-full" />
              <div className="text-white my-4">
                <h3 className=" text-lg">Host Star: Sun</h3>
                <p>
                  <span className="">Mass:</span> {planetData[0].host_star_mass}
                </p>
                <p>
                  <span className="">Temperature:</span>{" "}
                  {planetData[0].host_star_temperature - 273.1} °C
                </p>
              </div>
              <hr className="border-white border w-full" />
            </div>
          ) : (
            <p className="text-white w-1/3">Loading planet data...</p>
          )}
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
