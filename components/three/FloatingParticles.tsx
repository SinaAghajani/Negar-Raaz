"use client";

import { useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";

interface FloatingParticlesProps {
  count?: number;
}

export default function FloatingParticles({
  count = 180,
}: FloatingParticlesProps) {
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      values[i * 3] = (Math.random() - 0.5) * 12;
      values[i * 3 + 1] = Math.random() * 7 - 2;
      values[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    return values;
  }, [count]);

  return (
    <Points positions={positions} stride={3} frustumCulled>
      <PointMaterial
        color="#d9b36c"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </Points>
  );
}
