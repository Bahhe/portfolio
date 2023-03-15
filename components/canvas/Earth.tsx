import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Astronaut = () => {
  const earth = useGLTF("./astronaut/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor="white" />
      <pointLight intensity={3} color="white" position={[10, 10, 10]} />
      <pointLight intensity={3} color="white" position={[-10, -10, -5]} />
      <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const AstronautCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [1, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Astronaut />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AstronautCanvas;
