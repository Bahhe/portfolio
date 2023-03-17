import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computer = () => {
  const computer = useGLTF("./retro_computer/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="white" />
      <directionalLight
        position={[5, 5, 0]}
        intensity={6.5}
        castShadow={true}
        shadowBias={-0.00001}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <primitive
        object={computer.scene}
        scale={0.11}
        position-y={-1.2}
        position-z={1}
        position-x={-3.3}
        rotation-y={-1.4}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
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
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
