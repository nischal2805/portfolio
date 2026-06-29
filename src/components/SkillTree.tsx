import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';
import { skillTree } from '../data/skills';
import { useSectionAchievement } from '../hooks/useSectionAchievement';
import SkillBranchCard from './SkillBranchCard';
import TalentsPanel from './TalentsPanel';

export default function SkillTree() {
  const ref = useSectionAchievement('skills', 'Unlocked the Skill Tree');

  return (
    <section id="skills" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-3 text-ai-400"
        >
          <GitBranch className="w-4 h-4" />
          <span className="font-mono text-xs tracking-widest">CHAPTER 2 — SKILL TREE</span>
        </motion.div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 text-white">
          Allocate Points. Pick a Build.
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {skillTree.map((branch) => (
            <SkillBranchCard key={branch.id} branch={branch} />
          ))}
        </div>

        <TalentsPanel />
      </div>
    </section>
  );
}
