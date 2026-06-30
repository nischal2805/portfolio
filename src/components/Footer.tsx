export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-ink-600">© 2025 NISCHAL R E</span>
        <span className="font-mono text-xs text-ink-700">Built with React · Three.js · Framer Motion</span>
      </div>
    </footer>
  );
}
