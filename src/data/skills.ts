import { SkillTreeBranch, Talent } from '../types';

export const skillTree: SkillTreeBranch[] = [
  {
    id: 'languages',
    title: 'Languages & Foundations',
    icon: 'Code2',
    color: 'tools',
    nodes: [
      { id: 'python', name: 'Python', level: 5, note: 'Primary language — every ML pipeline starts here.' },
      { id: 'cpp', name: 'C++', level: 4, note: 'Systems-level work, including a DO-178C compliance analyzer.' },
      { id: 'c', name: 'C', level: 4, note: 'Low-level fundamentals.' },
      { id: 'java', name: 'Java', level: 3, note: 'Coursework & DSA.' },
      { id: 'typescript', name: 'TypeScript / JS', level: 3, note: 'Full-stack project frontends and agent tooling.' },
      { id: 'sql', name: 'SQL', level: 3, note: 'SQLite/SQLAlchemy-backed apps.' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML / LLMs',
    icon: 'BrainCircuit',
    color: 'ai',
    nodes: [
      { id: 'pytorch', name: 'PyTorch', level: 5, note: 'EfficientNet, BERT, Glow flows — main deep learning framework.' },
      { id: 'tensorflow', name: 'TensorFlow', level: 4, note: 'CNNs for medical imaging and crop yield prediction.' },
      { id: 'nlp', name: 'NLP / Transformers', level: 4, note: 'Custom BERT classification across 57 subcategories.' },
      { id: 'genai', name: 'Generative AI / LLMs', level: 4, note: 'Multi-provider agents (Claude, Gemini, Bedrock) in production-shaped projects.' },
      { id: 'rag', name: 'RAG Systems', level: 4, note: 'Built an entire RAG evaluation platform, not just a RAG app.' },
      { id: 'cv', name: 'Computer Vision', level: 4, note: 'Deepfake detection, MRI analysis, OCR pipelines.' },
      { id: 'rl', name: 'Reinforcement Learning', level: 3, note: 'Gym-based agents for network routing.' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Systems',
    icon: 'Boxes',
    color: 'tools',
    nodes: [
      { id: 'docker', name: 'Docker', level: 4, note: 'Containerized eval harnesses and offline-first ML tools.' },
      { id: 'k8s', name: 'Kubernetes', level: 2, note: 'Working knowledge of orchestration basics.' },
      { id: 'fastapi', name: 'FastAPI', level: 4, note: 'Backend of choice for ML-serving apps and platforms.' },
      { id: 'streamlit', name: 'Streamlit', level: 4, note: 'Fast interactive demos for ML systems.' },
      { id: 'git', name: 'Git / GitHub', level: 5, note: '40+ repos of experiments, research, and shipped tools.' },
      { id: 'linux', name: 'Linux / Shell', level: 4, note: 'Daily driver for dev and deployment.' },
    ],
  },
];

export const talents: Talent[] = [
  {
    id: 'photography',
    title: 'Photography',
    description:
      'Landscape and street photography — composing the frame is the same instinct as framing a model architecture.',
    tags: ['Lightroom', 'Photoshop', 'Composition'],
  },
  {
    id: 'videography',
    title: 'Videography',
    description: 'Shooting and editing visual stories with attention to pacing, color, and narrative flow.',
    tags: ['DaVinci Resolve', 'Color Grading', 'Motion'],
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'Combining technical skill with creative vision to produce multimedia that actually tells a story.',
    tags: ['Visual Design', 'Storytelling', 'Editing'],
  },
];
