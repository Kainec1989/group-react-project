import MercuryCanvas from "../components/Mercury";
import Navbar from "../components/Navbar";
import Starfield from "react-starfield";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { MyContext } from "../components/ContextProvider";
import { planetDescription } from "../../utils/constants";
import { navStyles } from "../../utils/constants";

function MercuryPage() {
  const { page, setPage, planetData, error, fetchPlanetData } =
    useContext(MyContext);

  useEffect(() => {
    setPage("Mercury");
  }, []);
  console.log(planetData);
  return (
    <div>
      <div
        style={{
          position: "fixed",
          zIndex: -1,
        }}
      >
        <Starfield
          starCount={10000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
      </div>
      <Navbar />
      <motion.div
        className="h-screen"
        transition={{ duration: 2 }}
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
      >
        <MercuryCanvas />
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
                {planetData[0].mass.toFixed(2)}
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
    </div>
  );
}

export default MercuryPage;
