import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Jupiter = () => {
  const jupiter = useGLTF("/jupiter/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <directionalLight intensity={5} position={[50, 5, 5]} castShadow={true} />
      <primitive
        object={jupiter.scene}
        scale={0.04}
        position-y={0}
        rotation-y={0}
      />
    </>
  );
};

const JupiterCanvas = () => {
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

        <Jupiter />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default JupiterCanvas;
