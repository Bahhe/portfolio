import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computer = () => {
  const computer = useGLTF("./computer/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="white" />
      <spotLight
        position={[-100, 10, 50]}
        angle={0.12}
        penumbra={2}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={computer.scene} scale={9} position={[0, -4, 0]} />
    </mesh>
  );
};

const ComputerCanvas = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   // Add a listener for changes to the screen size
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");
  //
  //   // Set the initial value of the `isMobile` state variable
  //   setIsMobile(mediaQuery.matches);
  //
  //   // Define a callback function to handle changes to the media query
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };
  //
  //   // Add the callback function as a listener for changes to the media query
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);
  //
  //   // Remove the listener when the component is unmounted
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
        />
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
