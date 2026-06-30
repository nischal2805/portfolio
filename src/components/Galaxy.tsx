import { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles, Line } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { Project } from '../types';
import { projects } from '../data/projects';
import PodMesh from './PodMesh';
import ProjectPanel from './ProjectPanel';

// Constellation wiring for 8 pods
const CONNECTION_PAIRS = [
  [0, 1], [0, 2], [1, 2], [0, 3], [1, 4],
  [2, 5], [3, 6], [4, 7], [5, 7], [3, 5], [4, 6],
];

function ConstellationLines({ dimmed }: { dimmed: boolean }) {
  return (
    <>
      {CONNECTION_PAIRS.map(([a, b], i) => {
        if (a >= projects.length || b >= projects.length) return null;
        return (
          <Line
            key={i}
            points={[
              new THREE.Vector3(...projects[a].position),
              new THREE.Vector3(...projects[b].position),
            ]}
            color="#00FF41"
            lineWidth={0.3}
            transparent
            opacity={dimmed ? 0.04 : 0.08}
          />
        );
      })}
    </>
  );
}

// Stark HUD — radar sweep ring
function RadarSweep() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ringRef.current) return;
    const cycle = (state.clock.elapsedTime * 0.18) % 1;
    const r = cycle * 14;
    ringRef.current.scale.setScalar(r < 0.1 ? 0.01 : r);
    const mat = ringRef.current.material as THREE.MeshBasicMaterial;
    mat.opacity = r < 0.5 ? 0 : Math.max(0, 0.12 * (1 - cycle));
  });
  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.94, 1, 64]} />
      <meshBasicMaterial color="#00FF41" transparent opacity={0} depthWrite={false} side={THREE.DoubleSide} />
    </mesh>
  );
}

// Ambient green breathing sphere
function AmbientPulse() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.scale.setScalar(1 + Math.sin(t * 0.35) * 0.05);
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity =
      0.016 + Math.sin(t * 0.35) * 0.005;
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[8, 24, 24]} />
      <meshBasicMaterial color="#00FF41" transparent opacity={0.016} side={THREE.BackSide} depthWrite={false} />
    </mesh>
  );
}

export default function Galaxy() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="lab" className="relative w-full" style={{ height: '100vh' }}>
      {/* HUD label */}
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <p className="font-mono text-xs text-signal tracking-widest mb-1">// PROJECT LAB</p>
        <p className="text-ink-500 text-xs font-mono">Drag to orbit · Click a pod to expand</p>
      </div>
      <div className="absolute top-8 right-8 z-10 pointer-events-none text-right">
        <p className="font-mono text-xs text-ink-600 tracking-widest">{projects.length} SYSTEMS ONLINE</p>
      </div>

      {/* Canvas — zoom disabled; wheel scrolls the page */}
      <Canvas
        camera={{ position: [0, 1.5, 11], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        onPointerMissed={() => setSelected(null)}
      >
        <ambientLight intensity={0.04} />
        <pointLight position={[0, 0, 0]} color="#00FF41" intensity={0.2} distance={16} />

        <Suspense fallback={null}>
          <Sparkles count={300} scale={[24, 13, 20]} size={0.6} speed={0.1} color="#00FF41" opacity={0.18} />
          <AmbientPulse />
          <RadarSweep />
          <ConstellationLines dimmed={!!selected} />

          {projects.map(p => (
            <PodMesh
              key={p.id}
              project={p}
              onClick={proj => setSelected(prev => prev?.id === proj.id ? null : proj)}
              selected={selected?.id === p.id}
              dimmed={!!selected && selected.id !== p.id}
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

      {/* Project detail panel */}
      <AnimatePresence>
        {selected && (
          <ProjectPanel project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

      {/* Bottom fade */}
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
