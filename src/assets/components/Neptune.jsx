import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Neptune = () => {
  const neptune = useGLTF("/neptune/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={7} groundColor="black" />

      <primitive
        object={neptune.scene}
        scale={0.04}
        position-y={0}
        rotation-y={0}
      />
    </>
  );
};

const NeptuneCanvas = () => {
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
          autoRotateSpeed={5}
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />

        <Neptune />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default NeptuneCanvas;
