import Starfield from "react-starfield";

import Home from "./assets/pages/Home";

function App() {
  return (
    <>
      <div>
        <div className="">
          <Starfield
            alphaFactor={1.9}
            starCount={10000}
            starColor={[255, 255, 255]}
            speedFactor={0.05}
            backgroundColor="black"
          />
        </div>

        <Home />
        <h1 className="text-black bg-orange-700/100 text-[100px]">Hello</h1>
      </div>
    </>
  );
}

export default App;
