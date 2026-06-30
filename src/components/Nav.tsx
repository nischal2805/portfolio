import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { href: '#lab', label: 'Lab' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 60 || y < lastY);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 mix-blend-normal"
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      <div className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <a href="#" className="font-mono text-sm text-signal tracking-widest">
          N.RE
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-300 hover:text-signal transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:nischalrellur2805@outlook.com"
          className="hidden md:block text-sm font-mono text-ink-950 bg-signal px-4 py-1.5 hover:opacity-90 transition-opacity"
        >
          Hire me
        </a>

        <button
          className="md:hidden text-ink-300 hover:text-signal"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-px bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-ink-900/95 backdrop-blur-sm overflow-hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {LINKS.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-ink-200 hover:text-signal transition-colors text-lg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
