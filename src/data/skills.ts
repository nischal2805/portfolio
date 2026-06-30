import { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', level: 98 },
      { name: 'C++', level: 80 },
      { name: 'C', level: 78 },
      { name: 'TypeScript', level: 72 },
      { name: 'Java', level: 65 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    category: 'AI / ML / LLMs',
    items: [
      { name: 'PyTorch', level: 95 },
      { name: 'TensorFlow', level: 85 },
      { name: 'LLM Agents', level: 88 },
      { name: 'RAG Systems', level: 85 },
      { name: 'Computer Vision', level: 88 },
      { name: 'NLP / Transformers', level: 85 },
    ],
  },
  {
    category: 'Tools & Systems',
    items: [
      { name: 'FastAPI', level: 88 },
      { name: 'Docker', level: 82 },
      { name: 'LangChain', level: 86 },
      { name: 'LangGraph', level: 80 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'Linux / Shell', level: 85 },
    ],
  },
];
