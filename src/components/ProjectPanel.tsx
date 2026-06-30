import { motion } from 'framer-motion';
import { Project } from '../types';

interface Props {
  project: Project;
  onClose: () => void;
}

const TIER_COLOR: Record<string, string> = {
  flagship: '#00FF41',
  major: '#00C830',
  side: '#666666',
};

export default function ProjectPanel({ project, onClose }: Props) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 z-20"
        style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(8px) saturate(0.5)' }}
        onClick={onClose}
      />

      {/* Panel */}
      <div className="absolute inset-0 z-30 flex items-center justify-center p-4 md:p-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.84, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.9 }}
          className="relative w-full pointer-events-auto"
          style={{
            maxWidth: 680,
            maxHeight: '90vh',
            overflowY: 'auto',
            background: 'rgba(5,5,5,0.99)',
            border: '1px solid rgba(0,255,65,0.18)',
            boxShadow: '0 0 100px rgba(0,255,65,0.05), 0 24px 80px rgba(0,0,0,0.8)',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Top signal bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="h-px origin-left"
            style={{ background: 'linear-gradient(90deg, #00FF41 0%, #00C830 50%, transparent 100%)' }}
          />

          {/* HUD corner — top right */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-signal opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-signal opacity-20 pointer-events-none" />

          <div className="px-8 md:px-10 pt-8 pb-10">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex-1 min-w-0">
                {/* System ID */}
                <p className="font-mono text-xs text-ink-600 tracking-[0.2em] mb-2">
                  // SYS·{project.id.toUpperCase()}
                </p>
                <h2
                  className="font-display font-bold text-white leading-none"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
                >
                  {project.name}
                </h2>
                <p
                  className="mt-2 text-sm italic"
                  style={{ color: TIER_COLOR[project.tier] }}
                >
                  {project.tagline}
                </p>
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                className="shrink-0 w-8 h-8 flex items-center justify-center font-mono text-xs text-ink-500 hover:text-signal border border-transparent hover:border-signal-border transition-all"
              >
                ✕
              </button>
            </div>

            {/* Divider */}
            <div className="mb-6" style={{ height: 1, background: 'rgba(0,255,65,0.1)' }} />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="text-ink-300 leading-relaxed mb-6"
              style={{ fontSize: '0.9375rem' }}
            >
              {project.description}
            </motion.p>

            {/* Stat callout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.4 }}
              className="flex items-center gap-3 mb-8 px-5 py-4"
              style={{
                background: 'rgba(0,255,65,0.04)',
                border: '1px solid rgba(0,255,65,0.12)',
                borderLeft: '3px solid #00FF41',
              }}
            >
              <span className="font-mono text-sm text-signal">{project.stat}</span>
            </motion.div>

            {/* Stack */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.4 }}
              className="mb-8"
            >
              <p className="font-mono text-xs text-ink-600 tracking-[0.2em] mb-3">STACK</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span
                    key={s}
                    className="font-mono text-xs px-3 py-1.5 text-ink-300 tracking-wide"
                    style={{
                      border: '1px solid rgba(0,255,65,0.12)',
                      background: 'rgba(0,255,65,0.03)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.34, duration: 0.4 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-mono font-semibold text-sm tracking-widest px-6 py-3 transition-all hover:gap-4"
                style={{
                  background: '#00FF41',
                  color: '#060606',
                }}
              >
                VIEW ON GITHUB <span>↗</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
