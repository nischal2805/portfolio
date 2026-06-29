import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useSectionAchievement } from '../hooks/useSectionAchievement';

export default function OriginStory() {
  const ref = useSectionAchievement('origin', 'Read the Origin Story');

  return (
    <section id="origin" ref={ref} className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-5 text-ai-400">
            <BookOpen className="w-4 h-4" />
            <span className="font-mono text-xs tracking-widest">CHAPTER 1 — ORIGIN STORY</span>
          </div>

          <div className="glass-card rounded-2xl p-7 sm:p-9 space-y-4 text-gray-300 leading-relaxed">
            <p>
              Every build starts the same way: a real problem, and the question of whether a model, an agent, or
              just better engineering can actually solve it. That instinct is what turned a Computer Science
              degree at RV College of Engineering into a habit of shipping working systems instead of just
              notebooks — a deepfake detector here, a contract-reading agent there, a platform for grading other
              people's RAG pipelines somewhere in between.
            </p>
            <p>
              The throughline is applied AI: NLP and transformers, computer vision, reinforcement learning, and —
              increasingly — large language models used as one component inside a larger, verifiable system
              rather than the whole product. Formal verification on LLM-suggested compiler rewrites. Confidence
              scores and Grad-CAM heatmaps instead of black-box verdicts. Tests that actually pass.
            </p>
            <p>
              Off the keyboard, the same eye for composition shows up behind a camera — landscape and street
              photography, video editing, and content that's built with the same care as the code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
