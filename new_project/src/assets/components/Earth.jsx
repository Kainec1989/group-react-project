import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Earth = ({ setDescription, setShowDescription, showDescription }) => {
  const earth = useGLTF("/earth/scene.gltf");
  const planetRef = useRef();

  useEffect(() => {
    const rotatePlanet = () => {
      if (planetRef.current) {
        planetRef.current.rotation.y += 0.002;
      }
      requestAnimationFrame(rotatePlanet);
    };

    rotatePlanet();

    return () => cancelAnimationFrame(rotatePlanet);
  }, []);

  const handlePlanetClick = (event) => {
    event.stopPropagation();
    if (!showDescription) {
      fetch("https://api.api-ninjas.com/v1/planets?name=Earth", {
        headers: { "X-Api-Key": "qamysz5MCJYKI259Q2hM8w==WM62EysojGswSAaV" },
      })
        .then((response) => response.json())
        .then((data) => {
          const planetInfo = data[0];
          const info = `
           Name: ${planetInfo.name}
            Mass: ${planetInfo.mass}
            Radius:${planetInfo.radius}
            Period:${planetInfo.period}
            Semi-major-axis:${planetInfo.semi_major_axis}
            Temperature:${planetInfo.temperature}
            Distance in light years:${planetInfo.distance_light_year}
            Host star mass:${planetInfo.host_star_mass}
            Host star temperature:${planetInfo.host_star_temperature}`;
          setDescription(info);
          setShowDescription(true);
        })
        .catch((error) => {
          console.error("Error fetching description:", error);
        });
    } else {
      setShowDescription(false);
    }
  };

  return (
    <>
      <directionalLight
        intensity={30}
        position={[50, 5, 5]}
        castShadow={true}
      />


      <group onClick={handlePlanetClick}>
        <primitive
          object={earth.scene}
          scale={0.4}
          position-y={0}
          rotation-y={0}
          ref={planetRef}
        />
      </group>
    </>
  );
};

const EarthCanvas = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState("");

  return (
    <>
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls />
          <Earth
            setDescription={setDescription}
            setShowDescription={setShowDescription}
            showDescription={showDescription}
          />
          <Preload all />
        </Suspense>
      </Canvas>

      {showDescription && (
        <div className="absolute top-10 left-10 p-4 bg-gray-800 text-white rounded shadow-lg whitespace-pre-line">
          {description}
        </div>
      )}
    </>
  );
};

export default EarthCanvas;
