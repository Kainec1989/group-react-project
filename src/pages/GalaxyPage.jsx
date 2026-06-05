import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import SpaceBackground from "../components/SpaceBackground";
import PageLoader from "../components/PageLoader";
import { useEffect, useContext } from "react";
import { PlanetContext } from "../context/PlanetContext";
import { motion } from "framer-motion";

const GalaxyCanvas = lazy(() => import("../components/Galaxy"));

function GalaxyPage() {
  const { setPage } = useContext(PlanetContext);

  useEffect(() => {
    setPage("Galaxy");
  }, [setPage]);

  return (
    <div>
      <SpaceBackground />
      <Navbar />
      <motion.div
        className="h-screen"
        transition={{ duration: 2 }}
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Suspense fallback={<PageLoader />}>
          <GalaxyCanvas />
        </Suspense>
      </motion.div>
    </div>
  );
}

export default GalaxyPage;
