"use client";

import { SpotLight } from "@react-three/drei";

interface GoldenLightProps {
  position?: [number, number, number];
  intensity?: number;
}

export default function GoldenLight({
  position = [0, 3, 2],
  intensity = 18,
}: GoldenLightProps) {
  return (
    <>
      <ambientLight intensity={0.7} />
      <SpotLight
        position={position}
        intensity={intensity}
        color="#f1d89f"
        distance={12}
        decay={2}
      />
    </>
  );
}
