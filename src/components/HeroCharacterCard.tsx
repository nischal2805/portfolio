import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles as SparklesIcon, ChevronDown } from 'lucide-react';
import { character, stats } from '../data/character';
import { useAchievements } from '../context/AchievementsContext';
import StatBar from './StatBar';

const OrbCanvas = lazy(() => import('./OrbCanvas'));

export default function HeroCharacterCard() {
  const { unlock } = useAchievements();

  return (
    <header className="relative pt-28 sm:pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
          {/* Character sheet */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-2xl p-6 sm:p-8 relative"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-xp-500/15 text-xp-400 text-[11px] font-mono tracking-widest">
                LEVEL 21
              </span>
              <span className="px-2.5 py-1 rounded-full bg-ai-500/15 text-ai-400 text-[11px] font-mono tracking-widest flex items-center gap-1">
                <SparklesIcon className="w-3 h-3" /> {character.class}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-1 tracking-wide">
              {character.name.toUpperCase()}
            </h1>
            <p className="text-sm font-mono text-gray-400 mb-5">
              {character.subclass} <span className="text-gray-600">·</span> {character.sideClass}
            </p>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-6 leading-relaxed">
              {character.tagline}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-7 max-w-md">
              {stats.map((s) => (
                <StatBar key={s.id} label={s.label} value={s.value} color={s.color} />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={character.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => unlock('github-link', 'Followed the GitHub Trail')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href={character.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => unlock('linkedin-link', 'Connected via LinkedIn')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href={`mailto:${character.email}`}
                className="flex items-center glass-card px-4 py-2 rounded-lg text-white hover:shadow-glow-ai"
              >
                <Mail className="w-4 h-4 mr-2" />
                Recruit Me
              </a>
            </div>
          </motion.div>

          {/* 3D Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-64 sm:h-80 lg:h-[26rem]"
          >
            <Suspense fallback={<div className="w-full h-full animate-pulse-glow rounded-full bg-ai-500/10" />}>
              <OrbCanvas />
            </Suspense>
          </motion.div>
        </div>

        <motion.a
          href="#origin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden sm:flex flex-col items-center mt-14 text-gray-500 hover:text-gray-300 transition-colors w-fit mx-auto"
        >
          <span className="text-xs font-mono tracking-widest mb-1">SCROLL TO BEGIN QUEST</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>
    </header>
  );
}
