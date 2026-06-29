import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sparkles, Float } from '@react-three/drei';
import type { Mesh } from 'three';

function Core() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.12;
      meshRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, 4]} />
        <MeshDistortMaterial
          color="#a374ff"
          emissive="#5b2bd6"
          emissiveIntensity={0.4}
          distort={0.45}
          speed={1.6}
          roughness={0.2}
          metalness={0.6}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function OrbCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 5]} intensity={1.4} color="#22d3ee" />
      <pointLight position={[-4, -3, -2]} intensity={1.1} color="#f5b942" />
      <Core />
      <Sparkles count={60} scale={5} size={2} speed={0.3} color="#c4a4ff" />
    </Canvas>
  );
}
