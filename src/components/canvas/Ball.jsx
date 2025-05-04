import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 3]} intensity={0.8} />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color="#a0e7e5" />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#f0f0f0"
          roughness={0.3}
          metalness={0.1}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.2]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileDevices = /mobile|android|iphone|ipad|tablet/i;
    setIsMobile(mobileDevices.test(userAgent));
  }, []);

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableRotate={!isMobile} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
