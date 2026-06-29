import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useAchievements } from '../context/AchievementsContext';

export function useSectionAchievement(id: string, title: string) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const { unlock } = useAchievements();

  useEffect(() => {
    if (inView) unlock(id, title);
  }, [inView, id, title, unlock]);

  return ref;
}
