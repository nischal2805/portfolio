import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillNodeData } from '../types';

const COLOR_HEX: Record<string, string> = {
  ai: '#a374ff',
  tools: '#22d3ee',
};

interface SkillNodeProps {
  node: SkillNodeData;
  colorKey: 'ai' | 'tools';
  index: number;
}

export default function SkillNode({ node, colorKey, index }: SkillNodeProps) {
  const [open, setOpen] = useState(false);
  const pct = (node.level / 5) * 100;
  const hex = COLOR_HEX[colorKey];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4, type: 'spring' }}
      className="relative flex flex-col items-center gap-1.5"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
      tabIndex={0}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      role="button"
      aria-label={`${node.name}, proficiency ${node.level} of 5`}
    >
      <div
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
        style={{ background: `conic-gradient(${hex} ${pct}%, #272a47 ${pct}% 100%)` }}
      >
        <div className="absolute inset-[4px] rounded-full bg-dark-900 flex items-center justify-center">
          <span className="text-[10px] font-mono text-gray-400">{node.level}/5</span>
        </div>
      </div>
      <span className="text-[11px] sm:text-xs text-gray-300 font-medium text-center leading-tight max-w-[5rem]">
        {node.name}
      </span>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2 w-48 glass-card rounded-lg p-3 text-xs text-gray-300 z-20 shadow-xl pointer-events-none"
          >
            {node.note}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
