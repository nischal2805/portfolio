import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { href: '#lab', label: 'Lab', id: 'lab' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 60 || y < lastY);
      setScrolled(y > 40);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      style={{
        background: scrolled ? 'rgba(4,4,4,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,255,65,0.08)' : 'none',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <div className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        {/* Logo + HUD status */}
        <div className="flex items-center gap-4">
          <a href="#" className="font-mono text-sm text-signal tracking-widest">
            N.RE
          </a>
          {scrolled && (
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block font-mono text-[10px] text-ink-600 tracking-widest"
            >
              SYS·ONLINE
            </motion.span>
          )}
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(l => {
            const isActive = active === l.id;
            return (
              <li key={l.href} className="relative flex items-center gap-2">
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="w-1.5 h-1.5 rounded-full bg-signal"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
                <a
                  href={l.href}
                  className="text-sm tracking-wide transition-colors duration-200 font-mono"
                  style={{ color: isActive ? '#00FF41' : undefined }}
                  onMouseEnter={e => { if (!isActive) (e.target as HTMLElement).style.color = '#00FF41'; }}
                  onMouseLeave={e => { if (!isActive) (e.target as HTMLElement).style.color = ''; }}
                >
                  {l.label}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-signal opacity-50"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="mailto:nischalrellur2805@outlook.com"
          className="hidden md:block text-sm font-mono text-ink-950 bg-signal px-4 py-1.5 hover:opacity-90 transition-opacity"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
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

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(4,4,4,0.97)', borderTop: '1px solid rgba(0,255,65,0.1)' }}
          >
            <ul className="flex flex-col gap-0 px-6 py-4">
              {LINKS.map(l => {
                const isActive = active === l.id;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-4 font-mono text-sm tracking-wide transition-colors"
                      style={{
                        color: isActive ? '#00FF41' : undefined,
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                      }}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />}
                      {!isActive && <span className="w-1.5 h-1.5 shrink-0" />}
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
