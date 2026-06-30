import { motion } from 'framer-motion';
import { Project } from '../types';

interface Props {
  project: Project;
  onClose: () => void;
}

const TIER_LABEL: Record<string, string> = {
  flagship: 'FLAGSHIP',
  major: 'MAJOR',
  side: 'SIDE PROJECT',
};

export default function ProjectPanel({ project, onClose }: Props) {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      className="absolute top-0 right-0 h-full w-full md:w-[480px] z-20 flex flex-col"
      style={{ background: 'rgba(6,6,6,0.97)', borderLeft: '1px solid rgba(0,255,65,0.15)' }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-ink-500 hover:text-signal transition-colors font-mono text-xs tracking-widest"
      >
        [ CLOSE ]
      </button>

      <div className="flex-1 overflow-y-auto px-8 pt-16 pb-10">
        {/* Tier badge */}
        <p className="font-mono text-xs text-signal tracking-[0.2em] mb-4">
          // {TIER_LABEL[project.tier]}
        </p>

        {/* Name */}
        <h2 className="font-display font-bold text-white mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1 }}>
          {project.name}
        </h2>

        {/* Tagline */}
        <p className="text-signal text-base italic mb-8">{project.tagline}</p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-signal to-transparent mb-8 opacity-30" />

        {/* Description */}
        <p className="text-ink-200 text-sm leading-relaxed mb-8">{project.description}</p>

        {/* Stat */}
        <div className="flex items-start gap-3 mb-8 p-4" style={{ background: 'rgba(0,255,65,0.05)', border: '1px solid rgba(0,255,65,0.1)' }}>
          <span className="text-signal font-mono text-xs mt-0.5">▸</span>
          <span className="font-mono text-xs text-signal">{project.stat}</span>
        </div>

        {/* Stack */}
        <div className="mb-10">
          <p className="font-mono text-xs text-ink-500 tracking-widest mb-3">STACK</p>
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
        </div>

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-signal text-ink-950 font-semibold px-6 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity"
        >
          VIEW ON GITHUB
          <span>↗</span>
        </a>
      </div>
    </motion.div>
  );
}
