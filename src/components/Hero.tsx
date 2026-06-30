import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTyping } from '../hooks/useTyping';

const PHRASES = [
  'AI / ML Engineer',
  'LLM Systems Builder',
  'Deep Learning Researcher',
  'Distributed Inference Dev',
  'Neural Architecture Designer',
];

export default function Hero() {
  const typed = useTyping(PHRASES, 55, 2200);
  const scanRef = useRef<HTMLDivElement>(null);

  // Animate scan line once on mount
  useEffect(() => {
    const el = scanRef.current;
    if (!el) return;
    el.style.animation = 'scan-line 3s linear forwards';
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden">
      {/* Scan line */}
      <div
        ref={scanRef}
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent opacity-40 z-20"
        style={{ top: '-2px' }}
      />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,65,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-signal opacity-40" />
      <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-signal opacity-40" />
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-signal opacity-40" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-signal opacity-40" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-signal animate-signal-pulse" />
          <span className="font-mono text-xs text-signal tracking-widest">SYSTEM ONLINE · RV COLLEGE OF ENGINEERING · BANGALORE</span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-white leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          >
            NISCHAL
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', color: '#00FF41' }}
          >
            R E
          </motion.h1>
        </div>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex items-center gap-2 mb-10"
        >
          <span className="font-mono text-sm md:text-base text-ink-300 tracking-widest">
            {'< '}
            <span className="text-signal">{typed}</span>
            <span className="animate-blink text-signal">_</span>
            {' >'}
          </span>
        </motion.div>

        {/* One-liner */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-ink-300 text-base md:text-lg max-w-xl leading-relaxed mb-12"
        >
          I build real AI systems — from deepfake detection pipelines to production LLM agents.
          Not notebooks. Shipped code.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#lab"
            className="group flex items-center gap-3 bg-signal text-ink-950 font-semibold px-6 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            ENTER THE LAB
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="https://github.com/nischal2805"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-signal-border text-ink-200 px-6 py-3 text-sm tracking-wide hover:border-signal hover:text-signal transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/nischal-r-e"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ink-400 text-sm hover:text-signal transition-colors"
          >
            LinkedIn ↗
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-ink-500 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-signal to-transparent"
        />
      </motion.div>
    </section>
  );
}
