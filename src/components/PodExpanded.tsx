import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '../types';

// Small moon orb that flies out from the pod center
function MoonOrb({ target, delay }: { target: THREE.Vector3; delay: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  useFrame((_, dt) => {
    t.current = Math.min(1, t.current + dt * 1.4);
    const ease = 1 - Math.pow(1 - Math.max(0, t.current - delay), 4);
    if (ref.current) {
      ref.current.position.lerp(target, 0.12);
      ref.current.scale.setScalar(ease * 0.9 + 0.1);
    }
  });

  return (
    <mesh ref={ref} scale={0.1}>
      <sphereGeometry args={[0.07, 12, 12]} />
      <meshBasicMaterial color="#00FF41" />
      <pointLight color="#00FF41" intensity={0.5} distance={1.2} />
    </mesh>
  );
}

interface Props {
  project: Project;
}

export default function PodExpanded({ project }: Props) {
  const s = project.scale;
  const xDir = project.position[0] < 0 ? 1 : -1;

  // Moon orb positions relative to pod — spread like a constellation halo
  const orbs = [
    new THREE.Vector3(xDir * 1.6 * s, 2.0 * s, 0.2),
    new THREE.Vector3(0, 2.5 * s, -0.3),
    new THREE.Vector3(xDir * 3.0 * s, 1.4 * s, 0),
  ];

  return (
    <group position={project.position}>
      {orbs.map((pos, i) => (
        <Line
          key={i}
          points={[new THREE.Vector3(0, 0, 0), pos]}
          color="#00FF41"
          lineWidth={0.4}
          transparent
          opacity={0.2}
        />
      ))}
      {orbs.map((pos, i) => (
        <MoonOrb key={i} target={pos} delay={i * 0.1} />
      ))}
    </group>
  );
}
