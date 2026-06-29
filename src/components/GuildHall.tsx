import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, ShieldCheck } from 'lucide-react';
import { character } from '../data/character';
import { useSectionAchievement } from '../hooks/useSectionAchievement';

export default function GuildHall() {
  const ref = useSectionAchievement('guild', 'Reached the Guild Hall');

  return (
    <section id="contact" ref={ref} className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3 text-xp-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-mono text-xs tracking-widest">FINAL CHAPTER — THE GUILD HALL</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-white">Recruit Me</h2>
          <p className="text-gray-400 mb-8 max-w-xl">
            Looking for someone who ships ML and LLM systems all the way to production, not just to a notebook?
            The guild is open.
          </p>

          <div className="glass-card rounded-2xl p-7 sm:p-8 shadow-glow-xp relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-xp-500/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="grid sm:grid-cols-2 gap-4 relative">
              <a
                href={`mailto:${character.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors glass-hover rounded-xl px-4 py-3"
              >
                <Mail className="w-5 h-5 text-xp-400" />
                {character.email}
              </a>
              <a
                href="mailto:nischalre.cs23@rvce.edu.in"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors glass-hover rounded-xl px-4 py-3"
              >
                <Mail className="w-5 h-5 text-xp-400" />
                nischalre.cs23@rvce.edu.in
              </a>
              <a
                href="tel:9148890326"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors glass-hover rounded-xl px-4 py-3"
              >
                <Phone className="w-5 h-5 text-xp-400" />
                +91 91488 90326
              </a>
              <a
                href={character.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors glass-hover rounded-xl px-4 py-3"
              >
                <Linkedin className="w-5 h-5 text-xp-400" />
                LinkedIn
              </a>
            </div>
            <a
              href={character.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" /> github.com/nischal2805 — 40+ repos of proof
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
