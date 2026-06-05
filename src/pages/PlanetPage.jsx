import { lazy, Suspense, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import SpaceBackground from "../components/SpaceBackground";
import PageLoader from "../components/PageLoader";
import PlanetInfoPanel from "../components/planet/PlanetInfoPanel";
import PageNotFound from "./PageNotFound";
import { PlanetContext } from "../context/PlanetContext";
import { planets, planetDescription } from "../constants";
import { planetCanvases } from "../constants/planetCanvases";
import { useHashScroll } from "../hooks/useHashScroll";

const EarthWeather = lazy(() => import("../components/EarthWeather"));
const MarsWeatherSection = lazy(() => import("../components/MarsWeatherSection"));

function PlanetPage() {
  const { planetSlug } = useParams();
  const planet = planets[planetSlug];
  const Canvas = planetCanvases[planetSlug];

  const { page, setPage, planetData, error } = useContext(PlanetContext);

  useEffect(() => {
    if (planet) {
      setPage(planet.name);
    }
  }, [planet, setPage]);

  useHashScroll();

  if (!planet || !Canvas) {
    return <PageNotFound />;
  }

  return (
    <div>
      <SpaceBackground />
      <Navbar />
      <motion.div
        className="h-[70vh] md:h-screen"
        transition={{ duration: 2 }}
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Suspense fallback={<PageLoader />}>
          <Canvas />
        </Suspense>
      </motion.div>

      <div className="text-white flex flex-col lg:flex-row items-start justify-between gap-8 mb-12 px-4 md:px-12 lg:px-[50px]">
        <div className="w-full lg:w-1/3">
          <h1 className="text-4xl md:text-[50px] font-bold mb-4">{page}</h1>
          <p className="text-white/90 leading-relaxed">
            {planetDescription[page]}
          </p>
        </div>
        <PlanetInfoPanel page={page} planetData={planetData} error={error} />
      </div>

      {planetSlug === "earth" && (
        <div id="earth-weather" className="w-full px-4 pb-16">
          <Suspense fallback={<PageLoader />}>
            <EarthWeather />
          </Suspense>
        </div>
      )}

      {planetSlug === "mars" && (
        <div id="mars-weather" className="pb-16">
          <Suspense fallback={<PageLoader />}>
            <MarsWeatherSection />
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default PlanetPage;
