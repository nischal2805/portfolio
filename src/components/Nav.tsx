import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Swords } from 'lucide-react';

const LINKS = [
  { href: '#origin', label: 'Origin Story' },
  { href: '#skills', label: 'Skill Tree' },
  { href: '#quests', label: 'Quest Log' },
  { href: '#contact', label: 'Guild Hall' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 glass z-50">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-display text-sm tracking-widest">
          <Swords className="w-4 h-4 text-ai-400" />
          N.RE
        </a>

        <ul className="hidden md:flex items-center space-x-7">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col px-4 pb-4 gap-3 overflow-hidden"
          >
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-300 hover:text-white transition-colors block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
