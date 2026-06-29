import { useAchievements } from '../context/AchievementsContext';

export default function Footer() {
  const { unlockedCount, totalCount } = useAchievements();

  return (
    <footer className="py-8 glass">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-sm">
        <p>Built with React, Tailwind & react-three-fiber.</p>
        <p className="font-mono text-xs text-gray-600">
          Achievements unlocked: {unlockedCount}/{totalCount}
        </p>
      </div>
    </footer>
  );
}
