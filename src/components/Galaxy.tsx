import { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles, Line } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { Project } from '../types';
import { projects } from '../data/projects';
import PodMesh from './PodMesh';
import PodExpanded from './PodExpanded';
import ProjectPanel from './ProjectPanel';

const CONNECTION_PAIRS = [
  [0, 1], [0, 2], [1, 2], [0, 3], [1, 4],
  [2, 5], [3, 6], [4, 7], [5, 7], [3, 5],
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
            opacity={dimmed ? 0.03 : 0.08}
          />
        );
      })}
    </>
  );
}

function RadarSweep() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const cycle = (state.clock.elapsedTime * 0.16) % 1;
    ref.current.scale.setScalar(Math.max(0.01, cycle * 15));
    (ref.current.material as THREE.MeshBasicMaterial).opacity =
      cycle < 0.05 ? 0 : Math.max(0, 0.09 * (1 - cycle));
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.94, 1, 64]} />
      <meshBasicMaterial color="#00FF41" transparent opacity={0} depthWrite={false} side={THREE.DoubleSide} />
    </mesh>
  );
}

function AmbientPulse() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.scale.setScalar(1 + Math.sin(t * 0.35) * 0.05);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.015 + Math.sin(t * 0.35) * 0.005;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[8, 24, 24]} />
      <meshBasicMaterial color="#00FF41" transparent opacity={0.015} side={THREE.BackSide} depthWrite={false} />
    </mesh>
  );
}

export default function Galaxy() {
  const [selected, setSelected] = useState<Project | null>(null);

  const toggle = (p: Project) => setSelected(prev => prev?.id === p.id ? null : p);
  const close = () => setSelected(null);

  return (
    <section id="lab" className="relative w-full" style={{ height: '100vh' }}>
      {/* HUD labels */}
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <p className="font-mono text-xs text-signal tracking-widest mb-1">// PROJECT LAB</p>
        <p className="font-mono text-xs text-ink-500">Drag to orbit · Click a pod</p>
      </div>
      <div className="absolute top-8 right-8 z-10 pointer-events-none">
        <p className="font-mono text-xs text-ink-600 tracking-widest">{projects.length} SYSTEMS ONLINE</p>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 1.5, 11], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        onPointerMissed={close}
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
              onClick={toggle}
              selected={selected?.id === p.id}
              dimmed={!!selected && selected.id !== p.id}
            />
          ))}

          {/* Moon orbs emerge in 3D when pod selected */}
          {selected && <PodExpanded key={selected.id} project={selected} />}
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

      {/* Dim overlay when panel open */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 pointer-events-none z-20"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)' }}
          />
        )}
      </AnimatePresence>

      {/* Bottom-sheet HUD panel */}
      <AnimatePresence>
        {selected && (
          <ProjectPanel project={selected} onClose={close} />
        )}
      </AnimatePresence>

      {/* Bottom fade (only when no panel) */}
      {!selected && (
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none z-10" />
      )}

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
