import { motion } from 'framer-motion';
import { Project } from '../types';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectPanel({ project, onClose }: Props) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 380, damping: 38, mass: 0.9 }}
      className="absolute bottom-0 left-0 right-0 z-30 pointer-events-auto"
      style={{
        background: 'rgba(4,4,4,0.98)',
        borderTop: '1px solid rgba(0,255,65,0.2)',
        boxShadow: '0 -20px 80px rgba(0,0,0,0.6)',
        maxHeight: '52vh',
        overflowY: 'auto',
      }}
    >
      {/* Top signal bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-px origin-left"
        style={{ background: 'linear-gradient(90deg, #00FF41 0%, #00C830 55%, transparent 100%)' }}
      />

      {/* HUD corner brackets */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-signal opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-signal opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-12 py-6">
        <div className="grid md:grid-cols-[1fr_380px] gap-8 md:gap-12">

          {/* ── LEFT: Identity + description ── */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="font-mono text-xs text-ink-600 tracking-[0.2em] mb-1.5">
                  // SYS·{project.id.toUpperCase()}
                </p>
                <h2
                  className="font-display font-bold text-white leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
                >
                  {project.name}
                </h2>
                <p className="text-signal text-sm italic mt-1.5">{project.tagline}</p>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 w-8 h-8 flex items-center justify-center font-mono text-xs text-ink-500 hover:text-signal border border-transparent hover:border-signal-border transition-all"
              >
                ✕
              </button>
            </div>

            <div className="h-px mb-4" style={{ background: 'rgba(0,255,65,0.1)' }} />

            <p
              className="text-ink-300 leading-relaxed"
              style={{ fontSize: '0.9375rem', maxWidth: 560 }}
            >
              {project.description}
            </p>
          </div>

          {/* ── RIGHT: Stat + Stack + CTA ── */}
          <div className="flex flex-col justify-between gap-5">
            {/* Stat */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{
                background: 'rgba(0,255,65,0.04)',
                borderLeft: '3px solid #00FF41',
                border: '1px solid rgba(0,255,65,0.12)',
                borderLeftWidth: 3,
              }}
            >
              <span className="font-mono text-sm text-signal leading-snug">{project.stat}</span>
            </div>

            {/* Stack */}
            <div>
              <p className="font-mono text-xs text-ink-600 tracking-[0.2em] mb-2.5">STACK</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span
                    key={s}
                    className="font-mono text-xs px-3 py-1.5 text-ink-300"
                    style={{
                      border: '1px solid rgba(0,255,65,0.14)',
                      background: 'rgba(0,255,65,0.03)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub CTA */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono font-bold text-sm tracking-widest px-5 py-3 self-start transition-all hover:gap-4"
              style={{ background: '#00FF41', color: '#060606' }}
            >
              VIEW ON GITHUB <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
