import { Rocket, Orbit } from "lucide-react";
import Starfield from "react-starfield";

const PageNotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-white  bg-cover bg-no-repeat-"
      style={{
        backgroundImage:
          "url('https://preview.free3d.com/img/2019/01/2279584552185759164/nrz3q773.jpg')",
      }}
    >
      
        <div
        style={{
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

      <div className="flex flex-col items-center space-y-6">
        <Rocket size={150} className="animate-bounce" />
        <h1 className="text-4xl font-bold">Oops! Page not found.</h1>
        <p className="text-lg">
          The page you're looking for doesn't exist in this galaxy.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-green-500 hover:bg-blue-600 rounded-md flex items-center space-x-2 cursor-wait"
        >
          <Orbit size={30} />
          <span>Take me home</span>
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
