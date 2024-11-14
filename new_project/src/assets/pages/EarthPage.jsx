import EarthCanvas from "../components/Earth";
import Navbar from "../components/Navbar";
import Starfield from "react-starfield";
import { useContext, useEffect } from "react";
import { MyContext } from "../components/ContextProvider";
import EarthWeather from "../components/EarthWeather";
import { useLocation } from "react-router-dom";

import { planetDescription } from "../../utils/constants";

function EarthPage() {
  const { page, setPage, planetData, error, fetchPlanetData } =
    useContext(MyContext);

  useEffect(() => {
    setPage("Earth");
  }, []);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", ""); // Remove '#' from the hash
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
      <div className="h-screen">
        <EarthCanvas />
      </div>

      <div className="text-white flex mb-[50px] px-[50px]">
        <div className="w-1/3 text-left">
          <h1 className="text-[50px]">{page}</h1>
          <p>{planetDescription[page]}</p>
        </div>
      </div>

      {/* EarthWeather section */}
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
