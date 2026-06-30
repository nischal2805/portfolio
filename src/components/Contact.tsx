import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LINKS = [
  { label: 'nischalrellur2805@outlook.com', href: 'mailto:nischalrellur2805@outlook.com', prefix: 'EMAIL' },
  { label: 'nischalre.cs23@rvce.edu.in', href: 'mailto:nischalre.cs23@rvce.edu.in', prefix: 'EDU' },
  { label: 'github.com/nischal2805', href: 'https://github.com/nischal2805', prefix: 'GITHUB' },
  { label: 'linkedin.com/in/nischal-r-e', href: 'https://linkedin.com/in/nischal-r-e', prefix: 'LINKEDIN' },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 md:px-16 relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      {/* Large background text */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 font-display font-bold leading-none select-none opacity-[0.03] text-signal"
        style={{ fontSize: 'clamp(8rem, 22vw, 22rem)' }}
      >
        HI
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-signal tracking-widest mb-4"
        >
          // CONTACT
        </motion.p>

        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.95 }}
          >
            Let's build<br />
            <span className="text-signal">something.</span>
          </motion.h2>
        </div>

        <div className="space-y-0" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.3, duration: 0.5 }}
              className="flex items-center justify-between py-5 group"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs text-ink-600 tracking-widest w-20">{link.prefix}</span>
                <span className="text-ink-200 group-hover:text-signal transition-colors text-sm md:text-base">
                  {link.label}
                </span>
              </div>
              <span className="text-ink-600 group-hover:text-signal group-hover:translate-x-1 transition-all">↗</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-16 flex items-center gap-4"
        >
          <span className="w-2 h-2 rounded-full bg-signal animate-signal-pulse" />
          <span className="font-mono text-xs text-ink-500">Open to internships and research roles · 2026</span>
        </motion.div>
      </div>
    </section>
  );
}
