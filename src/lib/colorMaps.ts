export const statColorMap: Record<'ai' | 'tools' | 'xp', string> = {
  ai: 'from-ai-400 to-ai-600',
  tools: 'from-tools-400 to-tools-600',
  xp: 'from-xp-400 to-xp-600',
};

export const branchColorMap: Record<'ai' | 'tools', { text: string; border: string; glow: string; dot: string }> = {
  ai: { text: 'text-ai-400', border: 'border-ai-500/40', glow: 'shadow-glow-ai', dot: 'bg-ai-500' },
  tools: { text: 'text-tools-400', border: 'border-tools-500/40', glow: 'shadow-glow-tools', dot: 'bg-tools-500' },
};

export const rarityStyles: Record<
  'common' | 'rare' | 'epic' | 'legendary',
  { text: string; border: string; glow: string; badge: string; label: string }
> = {
  common: {
    text: 'text-rarity-common',
    border: 'border-rarity-common/30',
    glow: '',
    badge: 'bg-rarity-common/15 text-rarity-common',
    label: 'Common',
  },
  rare: {
    text: 'text-rarity-rare',
    border: 'border-rarity-rare/40',
    glow: 'shadow-glow-rare',
    badge: 'bg-rarity-rare/15 text-rarity-rare',
    label: 'Rare',
  },
  epic: {
    text: 'text-rarity-epic',
    border: 'border-rarity-epic/40',
    glow: 'shadow-glow-epic',
    badge: 'bg-rarity-epic/15 text-rarity-epic',
    label: 'Epic',
  },
  legendary: {
    text: 'text-rarity-legendary',
    border: 'border-rarity-legendary/50',
    glow: 'shadow-glow-legendary',
    badge: 'bg-rarity-legendary/15 text-rarity-legendary',
    label: 'Legendary',
  },
};
