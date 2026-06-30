import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html, Edges } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '../types';

interface PodMeshProps {
  project: Project;
  onClick: (p: Project) => void;
  selected: boolean;
  dimmed: boolean;
}

export default function PodMesh({ project, onClick, selected, dimmed }: PodMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const active = (hovered || selected) && !dimmed;
  const s = project.scale;
  const isFlagship = project.tier === 'flagship';

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (meshRef.current) {
      const targetEmissive = dimmed
        ? 0.06
        : active
          ? 0.8 + Math.sin(t * 3.5) * 0.2
          : 0.22 + Math.sin(t * 1.1) * 0.05;
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity += (targetEmissive - mat.emissiveIntensity) * 0.08;
    }

    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t * 1.4) * 0.05);
      const gmat = glowRef.current.material as THREE.MeshBasicMaterial;
      gmat.opacity = dimmed ? 0.01 : active ? 0.1 : 0.03;
    }

    // Orbital ring 1 — always rotating
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * (active ? 1.4 : 0.7);
      const rmat = ring1Ref.current.material as THREE.MeshBasicMaterial;
      rmat.opacity = dimmed ? 0.04 : active ? 0.65 : 0.22;
    }

    // Orbital ring 2 — flagship only, counter-rotate
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * (active ? 0.9 : 0.45);
      const rmat = ring2Ref.current.material as THREE.MeshBasicMaterial;
      rmat.opacity = dimmed ? 0.03 : active ? 0.45 : 0.14;
    }

    // Pulse ring — expand & fade when selected
    if (pulseRef.current) {
      const cycle = (t * 0.6) % 1;
      pulseRef.current.scale.setScalar(selected ? 1 + cycle * 2.5 : 0.01);
      const pmat = pulseRef.current.material as THREE.MeshBasicMaterial;
      pmat.opacity = selected ? Math.max(0, 0.4 - cycle * 0.4) : 0;
    }
  });

  return (
    <Float
      speed={1.0 + (project.id.length % 3) * 0.2}
      rotationIntensity={0.15}
      floatIntensity={0.3}
    >
      <group
        position={project.position}
        onClick={(e) => { e.stopPropagation(); if (!dimmed) onClick(project); }}
        onPointerOver={(e) => { e.stopPropagation(); if (!dimmed) setHovered(true); }}
        onPointerOut={() => setHovered(false)}
      >
        {/* Outer glow sphere */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[s * 1.7, 16, 16]} />
          <meshBasicMaterial color="#00FF41" transparent opacity={0.03} depthWrite={false} />
        </mesh>

        {/* Pulse ring — expands outward when selected */}
        <mesh ref={pulseRef} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[s * 0.95, s * 1.05, 48]} />
          <meshBasicMaterial color="#00FF41" transparent opacity={0} depthWrite={false} side={THREE.DoubleSide} />
        </mesh>

        {/* Orbital ring 1 — tilted 50° */}
        <group rotation={[Math.PI * 0.28, 0.3, 0]}>
          <mesh ref={ring1Ref}>
            <torusGeometry args={[s * 1.18, 0.013, 8, 56]} />
            <meshBasicMaterial color="#00FF41" transparent opacity={0.22} depthWrite={false} />
          </mesh>
        </group>

        {/* Orbital ring 2 — flagship only, different axis */}
        {isFlagship && (
          <group rotation={[0.5, Math.PI * 0.15, Math.PI * 0.5]}>
            <mesh ref={ring2Ref}>
              <torusGeometry args={[s * 1.35, 0.009, 8, 56]} />
              <meshBasicMaterial color="#00FF41" transparent opacity={0.14} depthWrite={false} />
            </mesh>
          </group>
        )}

        {/* Main icosahedron */}
        <mesh
          ref={meshRef}
          scale={selected ? 1.65 : hovered && !dimmed ? 1.08 : 1}
        >
          <icosahedronGeometry args={[s * 0.72, 1]} />
          <meshStandardMaterial
            color="#001806"
            emissive="#00FF41"
            emissiveIntensity={0.22}
            transparent
            opacity={dimmed ? 0.15 : active ? 0.52 : 0.28}
            roughness={0.06}
            metalness={0.88}
          />
          <Edges lineWidth={active ? 2 : dimmed ? 0.4 : 0.9} color="#00FF41" threshold={1} />
        </mesh>

        {/* Point light — only when active */}
        {active && (
          <pointLight
            color="#00FF41"
            intensity={selected ? 2.8 : 1.6}
            distance={4}
          />
        )}

        {/* Label — hidden when this pod is dimmed */}
        <Html
          center
          distanceFactor={10}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: isFlagship ? '13px' : '11px',
              color: active ? '#00FF41' : dimmed ? 'transparent' : '#777777',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              transition: 'color 0.3s, text-shadow 0.3s',
              letterSpacing: '0.1em',
              marginTop: `${s * 66 + 14}px`,
              textShadow: active ? '0 0 18px rgba(0,255,65,1)' : 'none',
            }}
          >
            {project.name}
          </div>
        </Html>
      </group>
    </Float>
  );
}
