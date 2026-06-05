import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Earth = () => {
  const earth = useGLTF("/earth/scene.gltf");

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
      />
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      style={{ overflow: "visible" }}
      dpr={[1, 1.5]}
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
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
