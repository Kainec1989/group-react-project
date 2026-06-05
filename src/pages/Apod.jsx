import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SpaceBackground from "../components/SpaceBackground";
import PageLoader from "../components/PageLoader";
import { PlanetContext } from "../context/PlanetContext";
import { useApod } from "../hooks/useApod";

const Apod = () => {
  const { setPage } = useContext(PlanetContext);
  const state = useApod();

  useEffect(() => {
    setPage("Apod");
  }, [setPage]);

  if (state.loading) {
    return <PageLoader />;
  }

  if (state.error) {
    return (
      <div className="text-white text-center p-9 min-h-screen">
        <SpaceBackground />
        <Navbar />
        Error: {state.error?.message ?? String(state.error)}
      </div>
    );
  }

  if (!state.data?.url) {
    return (
      <div className="text-white text-center p-9 min-h-screen">
        <SpaceBackground />
        <Navbar />
        No image data available.
      </div>
    );
  }

  return (
    <div className="text-white">
      <SpaceBackground />
      <Navbar />

      <h1 className="text-5xl p-5 font-bold mb-9 text-center text-white">
        Astronomy Picture of the Day
      </h1>

      <div className="p-9">
        <img
          src={state.data.url}
          alt={state.data.title}
          loading="lazy"
          className="mx-auto outline outline-offset-2 outline-black-500 p-4 mb-4"
        />

        <h2 className="text-2xl text-center font-semibold mb-9">
          Image: {state.data.title}
        </h2>
        <h3>Image by date: {state.data.date}</h3>
        <br />

        <p>{state.data.explanation}</p>
        <div className="flex justify-center items-center mb-4">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="text-2xl bg-black p-2 rounded-full"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Apod;
