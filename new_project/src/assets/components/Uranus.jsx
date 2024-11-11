import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Uranus = () => {
  const uranus = useGLTF("/uranus/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={0.1} groundColor="black" />
      <directionalLight intensity={2} position={[50, 5, 5]} castShadow={true} />

      <primitive
        object={uranus.scene}
        scale={0.00004}
        position-y={0}
        rotation-y={0}
      />
    </>
  );
};

const UranusCanvas = () => {
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
          autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />

        <Uranus />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default UranusCanvas;
