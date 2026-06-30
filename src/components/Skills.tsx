import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillGroups } from '../data/skills';

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-32 px-6 md:px-16" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
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
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.12 + 0.2, duration: 0.6 }}
            >
              <p className="font-mono text-xs text-ink-500 tracking-[0.15em] mb-6 uppercase">
                {group.category}
              </p>
              <div className="space-y-5">
                {group.items.map((item, ii) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="text-sm text-ink-200">{item.name}</span>
                      <span className="font-mono text-xs text-ink-500">{item.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.level}%` } : {}}
                        transition={{ delay: gi * 0.1 + ii * 0.06 + 0.4, duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
