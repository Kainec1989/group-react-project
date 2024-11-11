import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Venus = () => {
  const venus = useGLTF("/venus/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={10} groundColor="black" />

      <primitive
        object={venus.scene}
        scale={0.04}
        position-y={0}
        rotation-y={0}
      />
    </>
  );
};

const VenusCanvas = () => {
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

        <Venus />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default VenusCanvas;
