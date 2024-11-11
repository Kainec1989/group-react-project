import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Mercury = () => {
  const mercury = useGLTF("/mercury/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={15} groundColor="black" />

      <primitive
        object={mercury.scene}
        scale={0.04}
        position-y={0}
        rotation-y={0}
      />
    </>
  );
};

const MercuryCanvas = () => {
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

        <Mercury />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MercuryCanvas;
