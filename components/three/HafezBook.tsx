"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

interface HafezBookProps {
  animate?: boolean;
}

export default function HafezBook({ animate = true }: HafezBookProps) {
  const bookRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!bookRef.current || !animate) return;

    bookRef.current.rotation.y += delta * 0.12;
    bookRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={bookRef} rotation={[0.08, -0.2, 0]}>
      <mesh position={[0, 0, -0.12]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 2.8, 0.22]} />
        <meshStandardMaterial color="#164b3e" roughness={0.65} />
      </mesh>

      <mesh position={[0, 0, 0.015]} castShadow>
        <boxGeometry args={[2.08, 2.68, 0.035]} />
        <meshStandardMaterial color="#d9b36c" roughness={0.5} />
      </mesh>

      <mesh position={[0, 0, 0.04]}>
        <boxGeometry args={[1.92, 2.52, 0.025]} />
        <meshStandardMaterial color="#10372e" roughness={0.8} />
      </mesh>

      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[1.72, 2.3, 0.015]} />
        <meshStandardMaterial
          color="#d9b36c"
          metalness={0.65}
          roughness={0.4}
        />
      </mesh>

      <mesh position={[0, 0, 0.075]}>
        <boxGeometry args={[1.62, 2.2, 0.02]} />
        <meshStandardMaterial color="#164b3e" roughness={0.7} />
      </mesh>

      <mesh position={[0, 0, 0.09]}>
        <boxGeometry args={[0.08, 1.45, 0.012]} />
        <meshStandardMaterial color="#f1d89f" metalness={0.5} />
      </mesh>
    </group>
  );
}
