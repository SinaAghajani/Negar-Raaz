"use client";

export default function PersianGarden() {
  return (
    <group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.8, 0]}
        receiveShadow
      >
        <planeGeometry args={[18, 18]} />
        <meshStandardMaterial color="#092722" roughness={0.95} />
      </mesh>

      <mesh position={[0, -1.75, -2.2]}>
        <boxGeometry args={[0.8, 0.08, 5.5]} />
        <meshStandardMaterial
          color="#367a70"
          metalness={0.25}
          roughness={0.3}
        />
      </mesh>

      {[-3, -1.5, 1.5, 3].map((x) => (
        <group key={x} position={[x, -1.4, -2]}>
          <mesh position={[0, 0.55, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.12, 1.1, 8]} />
            <meshStandardMaterial color="#60432c" />
          </mesh>

          <mesh position={[0, 1.3, 0]} castShadow>
            <sphereGeometry args={[0.65, 12, 12]} />
            <meshStandardMaterial color="#1b5b43" roughness={0.85} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
