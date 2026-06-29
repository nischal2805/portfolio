export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface Quest {
  id: string;
  title: string;
  rarity: Rarity;
  tier: 'main' | 'side';
  tagline: string;
  description: string;
  stack: string[];
  link?: string;
  stat?: string;
}

export type SkillBranch = 'languages' | 'ai-ml' | 'tools';

export interface SkillNodeData {
  id: string;
  name: string;
  level: number;
  note: string;
}

export interface SkillTreeBranch {
  id: SkillBranch;
  title: string;
  icon: string;
  color: string;
  nodes: SkillNodeData[];
}

export interface Talent {
  id: string;
  title: string;
  description: string;
  tags: string[];
}
