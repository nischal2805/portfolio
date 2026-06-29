import { createContext, useCallback, useContext, useRef, useState, ReactNode } from 'react';

export interface AchievementToastData {
  toastId: number;
  title: string;
}

interface AchievementsState {
  unlocked: Set<string>;
  unlockedCount: number;
  totalCount: number;
  toasts: AchievementToastData[];
  unlock: (id: string, title: string) => void;
  dismiss: (toastId: number) => void;
}

const AchievementsContext = createContext<AchievementsState | null>(null);

export const TOTAL_ACHIEVEMENTS = 6;

export function AchievementsProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState<Set<string>>(new Set());
  const [toasts, setToasts] = useState<AchievementToastData[]>([]);
  const idCounter = useRef(0);

  const unlock = useCallback((id: string, title: string) => {
    setUnlocked((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    setToasts((prev) => {
      idCounter.current += 1;
      return [...prev, { toastId: idCounter.current, title }];
    });
  }, []);

  const dismiss = useCallback((toastId: number) => {
    setToasts((prev) => prev.filter((t) => t.toastId !== toastId));
  }, []);

  return (
    <AchievementsContext.Provider
      value={{
        unlocked,
        unlockedCount: unlocked.size,
        totalCount: TOTAL_ACHIEVEMENTS,
        toasts,
        unlock,
        dismiss,
      }}
    >
      {children}
    </AchievementsContext.Provider>
  );
}

export function useAchievements() {
  const ctx = useContext(AchievementsContext);
  if (!ctx) throw new Error('useAchievements must be used within AchievementsProvider');
  return ctx;
}
