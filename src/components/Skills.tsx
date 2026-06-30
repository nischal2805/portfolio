import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillGroups } from '../data/skills';

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-32 px-6 md:px-16"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-signal tracking-widest mb-4"
        >
          // SKILL SIGNAL
        </motion.p>

        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            What I operate with.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1 + 0.2, duration: 0.6 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                <p className="font-mono text-xs text-ink-500 tracking-[0.18em] uppercase">
                  {group.category}
                </p>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill, ii) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: gi * 0.08 + ii * 0.05 + 0.35,
                      duration: 0.35,
                      ease: 'easeOut',
                    }}
                    className="font-mono text-sm text-ink-200 px-4 py-2 transition-colors hover:text-signal hover:border-signal cursor-default"
                    style={{
                      border: '1px solid rgba(0,255,65,0.15)',
                      background: 'rgba(0,255,65,0.03)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
