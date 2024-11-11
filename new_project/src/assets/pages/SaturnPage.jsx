import SaturnCanvas from "../components/Saturn";
import Navbar from "../components/Navbar";
import Starfield from "react-starfield";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { MyContext } from "../components/ContextProvider";

function SaturnPage() {
  const { setPage } = useContext(MyContext);
  useEffect(() => {
    setPage("Saturn");
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
      {/* <motion.div className="h-screen ">
        <SaturnCanvas />
      </motion.div> */}
    </div>
  );
}

export default SaturnPage;
