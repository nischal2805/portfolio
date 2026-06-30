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

export default function PodMesh({ project, onClick, selected }: PodMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const active = hovered || selected;
  const s = project.scale;

  useFrame((state) => {
    if (!meshRef.current || !glowRef.current) return;
    const t = state.clock.elapsedTime;
    const intensity = active ? 0.7 + Math.sin(t * 3) * 0.15 : 0.25 + Math.sin(t * 1.2) * 0.05;
    (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
    glowRef.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.04);
    (glowRef.current.material as THREE.MeshBasicMaterial).opacity = active ? 0.08 : 0.03;
  });

  return (
    <Float speed={1.2 + Math.random() * 0.6} rotationIntensity={0.2} floatIntensity={0.4}>
      <group
        position={project.position}
        onClick={(e) => { e.stopPropagation(); onClick(project); }}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'none'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'none'; }}
      >
        {/* Outer glow sphere */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[s * 1.6, 16, 16]} />
          <meshBasicMaterial color="#00FF41" transparent opacity={0.03} depthWrite={false} />
        </mesh>

        {/* Main icosahedron */}
        <mesh ref={meshRef} scale={selected ? 1.15 : 1}>
          <icosahedronGeometry args={[s * 0.7, 1]} />
          <meshStandardMaterial
            color="#001a06"
            emissive="#00FF41"
            emissiveIntensity={0.25}
            transparent
            opacity={active ? 0.45 : 0.25}
            roughness={0.1}
            metalness={0.8}
          />
          <Edges lineWidth={active ? 1.8 : 1} color="#00FF41" threshold={1} />
        </mesh>

        {/* Point light on hover */}
        {active && <pointLight color="#00FF41" intensity={1.5} distance={4} />}

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
              color: active ? '#00FF41' : '#aaaaaa',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              transition: 'color 0.2s',
              letterSpacing: '0.08em',
              marginTop: `${s * 60 + 16}px`,
              textShadow: active ? '0 0 12px rgba(0,255,65,0.8)' : 'none',
            }}
          >
            {project.name}
          </div>
        </Html>
      </group>
    </Float>
  );
}
