import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useAchievements } from '../context/AchievementsContext';

function Toast({ toastId, title, onDone }: { toastId: number; title: string; onDone: (id: number) => void }) {
  useEffect(() => {
    const t = setTimeout(() => onDone(toastId), 3800);
    return () => clearTimeout(t);
  }, [toastId, onDone]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.9 }}
      className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 shadow-glow-legendary border-rarity-legendary/40 max-w-xs"
    >
      <div className="w-9 h-9 rounded-lg bg-rarity-legendary/20 flex items-center justify-center flex-shrink-0">
        <Trophy className="w-5 h-5 text-rarity-legendary" />
      </div>
      <div>
        <p className="text-[10px] font-display tracking-widest text-rarity-legendary">ACHIEVEMENT UNLOCKED</p>
        <p className="text-sm text-white font-medium leading-tight">{title}</p>
      </div>
    </motion.div>
  );
}

export default function AchievementToastStack() {
  const { toasts, dismiss } = useAchievements();

  return (
    <div className="fixed bottom-4 right-4 z-[70] flex flex-col gap-2 items-end pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <div key={t.toastId} className="pointer-events-auto">
            <Toast toastId={t.toastId} title={t.title} onDone={dismiss} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
