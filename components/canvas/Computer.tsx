import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./retro_computer/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="white" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={earth.scene}
        scale={3}
        position={[-2.5, 2, 2.5]}
        rotation={[0, -4.9, 0]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
