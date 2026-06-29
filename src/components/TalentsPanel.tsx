import { Camera, Video, Palette } from 'lucide-react';
import { talents } from '../data/skills';

const ICONS: Record<string, typeof Camera> = { photography: Camera, videography: Video, content: Palette };

export default function TalentsPanel() {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 border border-xp-500/20">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-dark-800 text-xp-400">
          <Palette className="w-5 h-5" />
        </div>
        <h3 className="font-display text-sm sm:text-base tracking-wide text-xp-400">Passive Talents</h3>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {talents.map((t) => {
          const Icon = ICONS[t.id] ?? Palette;
          return (
            <div key={t.id} className="rounded-xl bg-dark-800/40 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-xp-400" />
                <span className="text-sm font-semibold text-white">{t.title}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">{t.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {t.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-dark-700/60 text-[10px] text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
