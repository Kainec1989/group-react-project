import Navbar from "../components/Navbar";
import Starfield from "react-starfield";
function Home() {
  return (
    <div>
      <Starfield
        alphaFactor={1.9}
        starCount={10000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Navbar />
    </div>
  );
}

export default Home;
