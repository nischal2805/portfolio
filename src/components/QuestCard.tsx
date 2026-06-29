import { motion } from 'framer-motion';
import { Crown, Gem, Star, ExternalLink, BarChart3 } from 'lucide-react';
import { Quest } from '../types';
import { rarityStyles } from '../lib/colorMaps';
import TiltCard from './TiltCard';

const RARITY_ICON = { legendary: Crown, epic: Gem, rare: Star, common: Star };

export default function QuestCard({ quest, index }: { quest: Quest; index: number }) {
  const styles = rarityStyles[quest.rarity];
  const RarityIcon = RARITY_ICON[quest.rarity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
    >
      <TiltCard className={`glass-card rounded-2xl p-6 sm:p-7 h-full border ${styles.border} ${styles.glow}`}>
        <div className="flex items-center justify-between mb-4">
          <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono tracking-widest ${styles.badge}`}>
            <RarityIcon className="w-3 h-3" />
            {styles.label.toUpperCase()} QUEST
          </span>
          {quest.link && (
            <a
              href={quest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label={`View ${quest.title} on GitHub`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5">{quest.title}</h3>
        <p className={`text-sm italic mb-3 ${styles.text}`}>{quest.tagline}</p>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{quest.description}</p>

        {quest.stat && (
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-gray-400">
            <BarChart3 className="w-3.5 h-3.5 text-tools-400" />
            {quest.stat}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {quest.stack.map((tech) => (
            <span key={tech} className="px-3 py-1 glass text-xs rounded-full text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
}
