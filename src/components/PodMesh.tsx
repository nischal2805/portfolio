import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html, Edges } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '../types';

interface PodMeshProps {
  project: Project;
  onClick: (p: Project) => void;
  selected: boolean;
}

const RING_GEOM = new THREE.RingGeometry(1, 1.08, 48);

export default function PodMesh({ project, onClick, selected }: PodMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const active = hovered || selected;
  const s = project.scale;

  useFrame((state) => {
    if (!meshRef.current || !glowRef.current) return;
    const t = state.clock.elapsedTime;
    const emissive = active ? 0.75 + Math.sin(t * 3.5) * 0.2 : 0.22 + Math.sin(t * 1.1) * 0.05;
    (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = emissive;
    glowRef.current.scale.setScalar(1 + Math.sin(t * 1.4) * 0.05);
    (glowRef.current.material as THREE.MeshBasicMaterial).opacity = active ? 0.1 : 0.03;

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.6;
      const ringScale = s * 1.4 + Math.sin(t * 2) * 0.06;
      ringRef.current.scale.setScalar(ringScale);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = selected
        ? 0.5 + Math.sin(t * 3) * 0.15
        : 0;
    }
  });

  return (
    <Float speed={1.0 + Math.random() * 0.5} rotationIntensity={0.18} floatIntensity={0.35}>
      <group
        position={project.position}
        onClick={(e) => { e.stopPropagation(); onClick(project); }}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
        onPointerOut={() => setHovered(false)}
      >
        {/* Outer glow sphere */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[s * 1.65, 16, 16]} />
          <meshBasicMaterial color="#00FF41" transparent opacity={0.03} depthWrite={false} />
        </mesh>

        {/* Selection ring — flat, billboard-like */}
        <mesh ref={ringRef} geometry={RING_GEOM}>
          <meshBasicMaterial color="#00FF41" transparent opacity={0} depthWrite={false} side={THREE.DoubleSide} />
        </mesh>

        {/* Main icosahedron */}
        <mesh ref={meshRef} scale={selected ? 1.18 : hovered ? 1.08 : 1}>
          <icosahedronGeometry args={[s * 0.72, 1]} />
          <meshStandardMaterial
            color="#001806"
            emissive="#00FF41"
            emissiveIntensity={0.22}
            transparent
            opacity={active ? 0.5 : 0.28}
            roughness={0.08}
            metalness={0.85}
          />
          <Edges lineWidth={active ? 2 : 0.9} color="#00FF41" threshold={1} />
        </mesh>

        {/* Point light on hover/select */}
        {active && <pointLight color="#00FF41" intensity={selected ? 2.5 : 1.5} distance={3.5} />}

        {/* HTML label */}
        <Html
          center
          distanceFactor={10}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: project.tier === 'flagship' ? '13px' : '11px',
              color: active ? '#00FF41' : '#888888',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              transition: 'color 0.25s, text-shadow 0.25s',
              letterSpacing: '0.08em',
              marginTop: `${s * 64 + 14}px`,
              textShadow: active ? '0 0 16px rgba(0,255,65,0.9)' : 'none',
            }}
          >
            {project.name}
          </div>
        </Html>
      </group>
    </Float>
  );
}
