import EarthCanvas from "../components/Earth";
import Navbar from "../components/Navbar";
import Starfield from "react-starfield";
import { useContext, useEffect } from "react";
import { MyContext } from "../components/ContextProvider";
// import { useEffect } from "react";
import EarthWeather from "../components/EarthWeather";

function Home() {
  // useEffect(() => {
  //   fetch("https://api.api-ninjas.com/v1/planets")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const { setPage, planetData, error, fetchPlanetData } = useContext(MyContext);
  useEffect(() => {
    setPage("Earth");
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
      <div className="h-screen">
        <EarthCanvas />
      </div>
      {/* EarthWeather section */}
      <div style={{ width: "100%", padding: "2rem", textAlign: "center" }}>
        <EarthWeather />
      </div>
    </div>
  );
}

export default Home;
