export interface Project {
  id: string;
  name: string;
  tier: 'flagship' | 'major' | 'side';
  tagline: string;
  description: string;
  stack: string[];
  stat: string;
  link: string;
  position: [number, number, number];
  scale: number;
}

export interface SkillGroup {
  category: string;
  items: { name: string; level: number }[];
}
