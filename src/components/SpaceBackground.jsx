import Starfield from "react-starfield";

function SpaceBackground({ starCount = 4000 }) {
  return (
    <div className="fixed inset-0 -z-10">
      <Starfield
        starCount={starCount}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
    </div>
  );
}

export default SpaceBackground;
