import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Galaxy = () => {
  const galaxy = useGLTF("/galaxy/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={10} groundColor="black" />

      <primitive
        object={galaxy.scene}
        scale={20}
        position-y={0}
        rotation-y={0}
      />
    </>
  );
};

const GalaxyCanvas = () => {
  return (
    <Canvas
      style={{ overflow: "visible" }}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-50, -50, -50],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />

        <Galaxy />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default GalaxyCanvas;
