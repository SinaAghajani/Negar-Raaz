"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import HafezBook from "./HafezBook";
import PersianGarden from "./PersianGarden";
import FloatingParticles from "./FloatingParticles";
import GoldenLight from "./GoldenLight";
import SceneLoader from "./SceneLoader";

interface BookSceneProps {
  className?: string;
}

export default function BookScene({ className = "" }: BookSceneProps) {
  return (
    <div
      className={`h-105 w-full overflow-hidden rounded-3xl ${className}`}
    >
      <Canvas camera={{ position: [0, 1, 7], fov: 42 }} dpr={[1, 1.5]} shadows>
        <color attach="background" args={["#071d1b"]} />

        <Suspense fallback={<SceneLoader />}>
          <GoldenLight />
          <HafezBook />
          <PersianGarden />
          <FloatingParticles />

          <Environment preset="night" />

          <OrbitControls
            enablePan={false}
            minDistance={4}
            maxDistance={9}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
