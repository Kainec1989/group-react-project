import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Mars = () => {
  const mars = useGLTF("/mars/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={5} groundColor="black" />
      <directionalLight
        intensity={10}
        position={[50, 5, 5]}
        castShadow={true}
      />
      <primitive
        object={mars.scene}
        scale={0.04}
        position-y={0}
        rotation-y={0}
      />
    </>
  );
};

const MarsCanvas = () => {
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
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />

        <Mars />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MarsCanvas;
