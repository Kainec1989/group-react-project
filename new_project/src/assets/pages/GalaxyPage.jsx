import Navbar from "../components/Navbar";
import Starfield from "react-starfield";
import { useEffect, useContext } from "react";
import { MyContext } from "../components/ContextProvider";
import GalaxyCanvas from "../components/Galaxy";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Apod from "./Apod";

function GalaxyPage() {
  const { setPage } = useContext(MyContext);
  useEffect(() => {
    setPage("Galaxy");
  }, [setPage]);
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
        <GalaxyCanvas />
      </motion.div>
      <Apod />
    </div>
  );
}

export default GalaxyPage;
