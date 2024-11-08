import Starfield from "react-starfield";

function App() {
  return (
    <>
      <div>
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
      </div>
    </>
  );
}

export default App;
