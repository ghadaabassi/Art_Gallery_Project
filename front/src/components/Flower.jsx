import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Flower = () => {
  const flowerRef = useRef();

  // Rotate the flower
  useFrame(() => {
    if (flowerRef.current) {
      flowerRef.current.rotation.y += 0.01;
    }
  });
  return (
    <group ref={flowerRef} position={[0, 0, 0]}>
      {/* Flower Stem */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 32]} />
        <meshStandardMaterial color={"green"} />
      </mesh>

      {/* Flower Petals */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin((i / 6) * Math.PI * 2) * 0.5,
            0.5,
            Math.cos((i / 6) * Math.PI * 2) * 0.5,
          ]}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color={"#ff69b4"} />
        </mesh>
      ))}

      {/* Flower Center */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color={"yellow"} />
      </mesh>
    </group>
  );
};

export default Flower;
