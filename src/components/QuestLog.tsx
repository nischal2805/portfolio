import { motion } from 'framer-motion';
import { ScrollText, Swords } from 'lucide-react';
import { mainQuests, sideQuests } from '../data/quests';
import { useSectionAchievement } from '../hooks/useSectionAchievement';
import QuestCard from './QuestCard';
import SideQuestCard from './SideQuestCard';

export default function QuestLog() {
  const ref = useSectionAchievement('quests', 'Opened the Quest Log');

  return (
    <section id="quests" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-3 text-ai-400"
        >
          <ScrollText className="w-4 h-4" />
          <span className="font-mono text-xs tracking-widest">CHAPTER 3 — QUEST LOG</span>
        </motion.div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2 text-white">Main Quests</h2>
        <p className="text-gray-400 text-sm mb-8 flex items-center gap-1.5">
          <Swords className="w-3.5 h-3.5" /> The boss fights — shipped, deployed, and battle-tested.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {mainQuests.map((quest, i) => (
            <QuestCard key={quest.id} quest={quest} index={i} />
          ))}
        </div>

        <h3 className="font-display text-xl font-bold mb-2 text-white">Side Quests</h3>
        <p className="text-gray-400 text-sm mb-8">Smaller builds, still worth the XP.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sideQuests.map((quest, i) => (
            <SideQuestCard key={quest.id} quest={quest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
