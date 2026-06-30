import { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles, Line } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { Project } from '../types';
import { projects } from '../data/projects';
import PodMesh from './PodMesh';
import ProjectPanel from './ProjectPanel';

const CONNECTION_PAIRS = [
  [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [1, 5], [0, 4],
];

function ConstellationLines({ selected }: { selected: Project | null }) {
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
            lineWidth={0.4}
            transparent
            opacity={selected ? 0.06 : 0.12}
          />
        );
      })}
    </>
  );
}

function Rig() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.15;
    }
  });
  return <group ref={groupRef} />;
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
        <p className="text-ink-500 text-xs font-mono">Drag to orbit · Click a pod</p>
      </div>

      {/* Pod count */}
      <div className="absolute top-8 right-8 z-10 pointer-events-none text-right">
        <p className="font-mono text-xs text-ink-500">{projects.length} systems</p>
      </div>

      {/* Canvas */}
      <Canvas
        camera={{ position: [0, 1.5, 9], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        onPointerMissed={() => setSelected(null)}
      >
        <ambientLight intensity={0.05} />
        <pointLight position={[0, 0, 0]} color="#00FF41" intensity={0.3} distance={12} />

        <Suspense fallback={null}>
          <Sparkles
            count={220}
            scale={[18, 10, 14]}
            size={0.8}
            speed={0.15}
            color="#00FF41"
            opacity={0.25}
          />

          <ConstellationLines selected={selected} />

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
          enableZoom={true}
          minDistance={5}
          maxDistance={16}
          maxPolarAngle={Math.PI * 0.7}
          minPolarAngle={Math.PI * 0.2}
          autoRotate={!selected}
          autoRotateSpeed={0.4}
        />
        <Rig />
      </Canvas>

      {/* Dim overlay when panel open */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ink-950/60 pointer-events-none z-10"
          />
        )}
      </AnimatePresence>

      {/* Project detail panel */}
      <AnimatePresence>
        {selected && (
          <ProjectPanel project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}
