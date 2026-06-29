import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { getLevel } from '../lib/levels';

export default function XPBar() {
  const progress = useScrollProgress();
  const { level, label } = getLevel(progress);
  const [levelUpLabel, setLevelUpLabel] = useState<string | null>(null);
  const lastLevel = useRef(1);

  useEffect(() => {
    if (level > lastLevel.current) {
      lastLevel.current = level;
      setLevelUpLabel(label);
      const t = setTimeout(() => setLevelUpLabel(null), 3200);
      return () => clearTimeout(t);
    }
    lastLevel.current = level;
  }, [level, label]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-dark-900/60 z-[60]">
        <motion.div
          className="h-full bg-gradient-to-r from-ai-500 via-xp-500 to-tools-500"
          style={{ width: `${progress}%` }}
          transition={{ ease: 'linear', duration: 0.1 }}
        />
      </div>

      <div className="fixed top-[4.75rem] right-4 z-[60] hidden sm:flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-mono text-xp-400 shadow-glow-xp">
        <Zap className="w-3.5 h-3.5" />
        <span>Lv.{level}</span>
        <span className="text-gray-400">·</span>
        <span className="text-gray-300">{label}</span>
      </div>

      <AnimatePresence>
        {levelUpLabel && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-[60] glass-card px-5 py-2.5 rounded-xl shadow-glow-xp text-center"
          >
            <p className="font-display text-xs tracking-widest text-xp-400">LEVEL UP</p>
            <p className="text-sm text-white font-semibold">{levelUpLabel}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
