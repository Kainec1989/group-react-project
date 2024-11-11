import MercuryCanvas from "../components/Mercury";
import Navbar from "../components/Navbar";
import Starfield from "react-starfield";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { MyContext } from "../components/ContextProvider";

function MercuryPage() {
  const { setPage } = useContext(MyContext);
  useEffect(() => {
    setPage("Mercury");
  }, []);
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
      {/* <motion.div
        className="h-screen"
        transition={{ duration: 2 }}
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
      >
        <MercuryCanvas />
      </motion.div> */}
    </div>
  );
}

export default MercuryPage;
