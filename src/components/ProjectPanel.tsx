import { motion } from 'framer-motion';
import { Project } from '../types';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectPanel({ project, onClose }: Props) {
  return (
    <>
      {/* Blurred backdrop — click to close */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 z-20"
        style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      />

      {/* Centered card */}
      <div className="absolute inset-0 z-30 flex items-center justify-center p-4 md:p-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.86, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 16 }}
          transition={{ type: 'spring', stiffness: 340, damping: 32, mass: 0.8 }}
          className="relative w-full max-w-lg pointer-events-auto overflow-hidden"
          style={{
            background: 'rgba(6,6,6,0.98)',
            border: '1px solid rgba(0,255,65,0.2)',
            boxShadow: '0 0 80px rgba(0,255,65,0.06), 0 0 0 1px rgba(0,255,65,0.05) inset',
            maxHeight: '88vh',
            overflowY: 'auto',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Signal bar top */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            className="h-0.5 origin-left"
            style={{ background: 'linear-gradient(90deg, #00FF41, #00C830 60%, transparent)' }}
          />

          <div className="px-7 pt-7 pb-8">
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-7 h-7 flex items-center justify-center text-ink-500 hover:text-signal transition-colors font-mono text-xs border border-transparent hover:border-signal-border"
            >
              ✕
            </button>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.4 }}
              className="font-display font-bold text-white mb-1.5 pr-8"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', lineHeight: 1.05 }}
            >
              {project.name}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.4 }}
              className="text-signal text-sm italic mb-5"
            >
              {project.tagline}
            </motion.p>

            {/* Divider */}
            <div className="h-px mb-5" style={{ background: 'rgba(0,255,65,0.12)' }} />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.4 }}
              className="text-ink-300 text-sm leading-relaxed mb-5"
            >
              {project.description}
            </motion.p>

            {/* Stat */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.4 }}
              className="flex items-start gap-3 mb-5 px-4 py-3"
              style={{ background: 'rgba(0,255,65,0.05)', border: '1px solid rgba(0,255,65,0.1)' }}
            >
              <span className="text-signal font-mono text-xs mt-0.5 shrink-0">▸</span>
              <span className="font-mono text-xs text-signal">{project.stat}</span>
            </motion.div>

            {/* Stack */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="mb-7"
            >
              <p className="font-mono text-xs text-ink-600 tracking-widest mb-2.5">STACK</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span
                    key={s}
                    className="font-mono text-xs px-3 py-1 text-ink-300"
                    style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* GitHub link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.4 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-signal text-ink-950 font-semibold px-5 py-2.5 text-sm tracking-wide hover:opacity-90 transition-opacity"
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
