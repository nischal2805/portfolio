import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: '11+', label: 'shipped projects' },
  { value: '5+', label: 'ML domains' },
  { value: '40+', label: 'GitHub repos' },
  { value: '3rd', label: 'year CS undergrad' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text block */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-signal tracking-widest mb-6"
          >
            // ABOUT
          </motion.p>

          {['I\'m a third-year CS undergrad at RV College of Engineering, Bangalore.', 'I\'ve been building AI systems across medical imaging, NLP, deepfake detection, and LLM tooling — not as class projects, but as things I actually wanted to exist.', 'My interest is at the intersection of deep learning research and engineering reality: how do you take a model that works in a notebook and make it useful in the world?'].map((line, i) => (
            <div key={i} className="overflow-hidden mb-5">
              <motion.p
                initial={{ y: '110%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ delay: 0.15 * i + 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-ink-200 text-lg leading-relaxed"
              >
                {line}
              </motion.p>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {['Photography', 'Videography', 'Content Creation'].map(tag => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5 text-ink-400"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-px" style={{ border: '1px solid rgba(0,255,65,0.1)' }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 * i + 0.3, duration: 0.5 }}
              className="p-8"
              style={{ background: 'rgba(0,255,65,0.03)', borderBottom: i < 2 ? '1px solid rgba(0,255,65,0.08)' : 'none', borderRight: i % 2 === 0 ? '1px solid rgba(0,255,65,0.08)' : 'none' }}
            >
              <div
                className="font-display font-bold text-signal mb-1"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
              >
                {s.value}
              </div>
              <div className="font-mono text-xs text-ink-400 tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
