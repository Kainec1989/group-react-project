import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Saturn = () => {
  const saturn = useGLTF("/saturn/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={1} groundColor="black" />
      <directionalLight intensity={2} position={[50, 5, 5]} castShadow={true} />
      <primitive
        object={saturn.scene}
        scale={0.003}
        position-y={0}
        rotation-y={0}
      />
    </>
  );
};

const SaturnCanvas = () => {
  return (
    <Canvas
      style={{ overflow: "visible" }}
      dpr={[1, 1.5]}
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={4}
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />

        <Saturn />

      </Suspense>
    </Canvas>
  );
};

export default SaturnCanvas;
