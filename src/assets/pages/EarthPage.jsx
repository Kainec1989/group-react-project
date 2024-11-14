import EarthCanvas from "../components/Earth";
import Navbar from "../components/Navbar";
import Starfield from "react-starfield";
import { useContext, useEffect } from "react";
import { MyContext } from "../components/ContextProvider";
import EarthWeather from "../components/EarthWeather";
import { useLocation } from "react-router-dom";
import { planetDescription } from "../../utils/constants";
import { navStyles } from "../../utils/constants";

function EarthPage() {
  const { page, setPage, planetData, error, fetchPlanetData } =
    useContext(MyContext);

  useEffect(() => {
    setPage("Earth");

    if (!planetData) {
      fetchPlanetData("Earth");
    }
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  console.log(planetData);

  return (
    <div>
      <div style={{ position: "fixed", zIndex: -1 }}>
        <Starfield
          starCount={10000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
      </div>
      <Navbar />
      <div className="h-screen">
        <EarthCanvas />
      </div>

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

      <div
        id="earth-weather"
        style={{ width: "100%", padding: "2rem", textAlign: "center" }}
      >
        <EarthWeather />
      </div>
    </div>
  );
}

export default EarthPage;
