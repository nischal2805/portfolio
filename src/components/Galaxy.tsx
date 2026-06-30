import { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles, Line } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { Project } from '../types';
import { projects } from '../data/projects';
import PodMesh from './PodMesh';
import ProjectPanel from './ProjectPanel';

// Constellation wiring between pods
const CONNECTION_PAIRS = [
  [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6],
  [5, 7], [6, 8], [7, 9], [8, 1], [0, 5], [1, 6], [3, 9],
];

function ConstellationLines({ dimmed }: { dimmed: boolean }) {
  return (
    <>
      {CONNECTION_PAIRS.map(([a, b], i) => {
        if (a >= projects.length || b >= projects.length) return null;
        const pa = projects[a].position;
        const pb = projects[b].position;
        return (
          <Line
            key={i}
            points={[new THREE.Vector3(...pa), new THREE.Vector3(...pb)]}
            color="#00FF41"
            lineWidth={0.35}
            transparent
            opacity={dimmed ? 0.05 : 0.1}
          />
        );
      })}
    </>
  );
}

function AmbientPulse() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.scale.setScalar(1 + Math.sin(t * 0.4) * 0.06);
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity =
      0.018 + Math.sin(t * 0.4) * 0.006;
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[7, 24, 24]} />
      <meshBasicMaterial color="#00FF41" transparent opacity={0.018} side={THREE.BackSide} depthWrite={false} />
    </mesh>
  );
}

export default function Galaxy() {
  const [selected, setSelected] = useState<Project | null>(null);

  const handleClick = (p: Project) => {
    setSelected(prev => (prev?.id === p.id ? null : p));
  };

  return (
    <section id="lab" className="relative w-full" style={{ height: '100vh' }}>
      {/* Section label */}
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <p className="font-mono text-xs text-signal tracking-widest mb-1">// PROJECT LAB</p>
        <p className="text-ink-500 text-xs font-mono">Drag to orbit · Click a pod to expand</p>
      </div>

      {/* Pod count */}
      <div className="absolute top-8 right-8 z-10 pointer-events-none text-right">
        <p className="font-mono text-xs text-ink-500">{projects.length} systems</p>
      </div>

      {/* Canvas — zoom disabled so wheel scrolls the page */}
      <Canvas
        camera={{ position: [0, 1.5, 11], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        onPointerMissed={() => setSelected(null)}
      >
        <ambientLight intensity={0.04} />
        <pointLight position={[0, 0, 0]} color="#00FF41" intensity={0.25} distance={14} />

        <Suspense fallback={null}>
          <Sparkles
            count={280}
            scale={[22, 12, 18]}
            size={0.7}
            speed={0.12}
            color="#00FF41"
            opacity={0.2}
          />

          <AmbientPulse />
          <ConstellationLines dimmed={!!selected} />

          {projects.map(p => (
            <PodMesh
              key={p.id}
              project={p}
              onClick={handleClick}
              selected={selected?.id === p.id}
            />
          ))}
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI * 0.72}
          minPolarAngle={Math.PI * 0.18}
          autoRotate={!selected}
          autoRotateSpeed={0.35}
        />
      </Canvas>

      {/* Project detail panel (has its own backdrop) */}
      <AnimatePresence>
        {selected && (
          <ProjectPanel project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none z-10" />

      {/* Scroll hint */}
      {!selected && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex flex-col items-center gap-1.5">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-6 bg-gradient-to-b from-signal to-transparent opacity-40"
          />
          <span className="font-mono text-xs text-ink-600 tracking-widest">SCROLL</span>
        </div>
      )}
    </section>
  );
}
