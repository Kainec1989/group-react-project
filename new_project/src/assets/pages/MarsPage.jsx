import MarsCanvas from "../components/Mars";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Starfield from "react-starfield";
import { useContext, useEffect } from "react";
import { MyContext } from "../components/ContextProvider";

function MarsPage() {
  // useEffect(() => {
  //   fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const { setPage } = useContext(MyContext);
  useEffect(() => {
    setPage("Mars");
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
      <motion.div
        className="h-screen"
        transition={{ duration: 2 }}
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
      >
        <MarsCanvas />
      </motion.div>
    </div>
  );
}

export default MarsPage;
