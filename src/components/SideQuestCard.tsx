import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Quest } from '../types';
import { rarityStyles } from '../lib/colorMaps';
import TiltCard from './TiltCard';

export default function SideQuestCard({ quest, index }: { quest: Quest; index: number }) {
  const styles = rarityStyles[quest.rarity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
    >
      <TiltCard className={`glass-card rounded-xl p-5 h-full border ${styles.border}`}>
        <div className="flex items-center justify-between mb-2.5">
          <span className={`text-[10px] font-mono tracking-widest ${styles.text}`}>{styles.label.toUpperCase()}</span>
          {quest.link && (
            <a
              href={quest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label={`View ${quest.title} on GitHub`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        <h4 className="text-base font-semibold text-white mb-2">{quest.title}</h4>
        <p className="text-gray-400 text-xs leading-relaxed mb-3">{quest.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {quest.stack.map((tech) => (
            <span key={tech} className="px-2.5 py-0.5 glass text-[10px] rounded-full text-gray-400">
              {tech}
            </span>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
}
