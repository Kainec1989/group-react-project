import { Rocket, Orbit } from "lucide-react";
import { Link } from "react-router-dom";
import SpaceBackground from "../components/SpaceBackground";

const PageNotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://preview.free3d.com/img/2019/01/2279584552185759164/nrz3q773.jpg')",
      }}
    >
      <SpaceBackground starCount={3000} />

      <div className="flex flex-col items-center space-y-6 px-4 text-center relative z-10">
        <Rocket size={120} className="animate-bounce text-emerald-400" />
        <h1 className="text-3xl md:text-4xl font-bold">Oops! Page not found.</h1>
        <p className="text-lg text-white/80">
          The page you&apos;re looking for doesn&apos;t exist in this galaxy.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
        >
          <Orbit size={24} />
          <span>Take me home</span>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
