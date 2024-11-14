import { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Earth = () => {
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

  return (
    <>
      <directionalLight
        intensity={30}
        position={[50, 5, 5]}
        castShadow={true}
      />

      <primitive
        object={earth.scene}
        scale={0.4}
        position-y={0}
        rotation-y={0}
        ref={planetRef}
      />
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      style={{ overflow: "visible" }}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
