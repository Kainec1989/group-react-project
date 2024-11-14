import VenusCanvas from "../components/Venus";
import Navbar from "../components/Navbar";
import Starfield from "react-starfield";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { MyContext } from "../components/ContextProvider";
import { planetDescription } from "../../utils/constants";

function MercuryPage() {
  const { page, setPage, planetData, error, fetchPlanetData } =
    useContext(MyContext);
  useEffect(() => {
    setPage("Venus");
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
        className="h-screen "
        transition={{ duration: 2 }}
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
      >
        <VenusCanvas />
      </motion.div>
      <div className="text-white flex mb-[50px] px-[50px]">
        <div className="w-1/3 text-left">
          <h1 className="text-[50px]">{page}</h1>
          <p>{planetDescription[page]}</p>
        </div>
      </div>
    </div>
  );
}

export default MercuryPage;
