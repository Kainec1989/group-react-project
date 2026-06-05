import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Mars = () => {
  const mars = useGLTF("/mars/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={15} groundColor="black" />

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
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />

        <Mars />

      </Suspense>
    </Canvas>
  );
};

export default MarsCanvas;
