import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'deepshield',
    name: 'DeepShield',
    tier: 'flagship',
    tagline: 'Can you still tell what\'s real?',
    description:
      'Dual-track deepfake & AI-image detector. Faces run through an EfficientNet-B4 + SBI ensemble; generated images checked against C2PA metadata and Google SynthID watermarks. Grad-CAM heatmaps show exactly which pixels triggered the verdict.',
    stack: ['PyTorch', 'EfficientNet-B4', 'CLIP', 'Grad-CAM', 'FastAPI'],
    stat: 'Target cross-dataset AUC > 0.85',
    link: 'https://github.com/nischal2805/DeepShield',
    position: [-4.2, 0.8, 1.2],
    scale: 1.35,
  },
  {
    id: 'accentshift',
    name: 'AccentShift',
    tier: 'flagship',
    tagline: 'Your voice. Any accent.',
    description:
      'Real-time accent detection and conversion pipeline. Analyses phoneme-level patterns in speech to identify the source accent, then shifts acoustic features toward a target accent profile while preserving speaker identity and prosody. Python ML backend serving a TypeScript web frontend.',
    stack: ['PyTorch', 'FastAPI', 'Librosa', 'TypeScript', 'React'],
    stat: 'End-to-end pipeline with web demo',
    link: 'https://github.com/nischal2805/AccentShift',
    position: [4.2, 0.3, 1.2],
    scale: 1.35,
  },
  {
    id: 'pods-experiment',
    name: 'PodsExperiment',
    tier: 'flagship',
    tagline: 'Distributed inference. Any model. Any node.',
    description:
      'A CLI-first distributed LLM inference engine built on llama.cpp\'s RPC server. Shards large language models across networked machines through a custom TCP orchestration layer — spawn nodes, assign layers, and stream completions across a bare-metal mesh without cloud overhead. Designed for multi-GPU home clusters and research rigs.',
    stack: ['C++', 'Python', 'llama.cpp', 'RPC / TCP', 'CLI', 'Model Sharding'],
    stat: 'Multi-node LLM sharding via llama.cpp RPC',
    link: 'https://github.com/nischal2805/pods-experiment',
    position: [0.3, -1.2, 2.5],
    scale: 1.35,
  },
  {
    id: 'alzheimers',
    name: 'AlzheimersNet',
    tier: 'major',
    tagline: 'MRI → diagnosis in milliseconds.',
    description:
      'CNN classifier trained on OASIS MRI scans for 4-stage Alzheimer\'s detection. Handles class imbalance via augmentation and weighted loss. Explainability through Grad-CAM overlays highlights hippocampal atrophy signatures flagged by the model.',
    stack: ['TensorFlow', 'Keras', 'Grad-CAM', 'OpenCV', 'OASIS Dataset'],
    stat: '97.4% validation accuracy',
    link: 'https://github.com/nischal2805/alzheimer-detection',
    position: [-4.0, -2.2, -0.8],
    scale: 1.1,
  },
  {
    id: 'crimebert',
    name: 'CrimeBERT',
    tier: 'major',
    tagline: 'NLP meets criminal justice data.',
    description:
      'BERT-based classifier fine-tuned on FIR and legal text to categorise crimes across 57 Indian Penal Code subcategories. Custom tokenisation handles multilingual legal terminology and transliterated text without loss of semantic context.',
    stack: ['PyTorch', 'HuggingFace', 'BERT', 'Transformers', 'FastAPI'],
    stat: '57-class IPC classification',
    link: 'https://github.com/nischal2805/CrimeBERT',
    position: [3.5, 2.5, -0.8],
    scale: 1.1,
  },
  {
    id: 'audiobook',
    name: 'AudioBook AI',
    tier: 'side',
    tagline: 'Text in. Narration out.',
    description:
      'Automated audiobook generator — ingests PDF or EPUB, extracts structured text, passes through an LLM for chapter-aware pacing annotations, then synthesises speech with ElevenLabs. Outputs chaptered MP3 with consistent narrator voice.',
    stack: ['Python', 'ElevenLabs', 'LangChain', 'PyPDF2'],
    stat: 'Full-length audiobooks in minutes',
    link: 'https://github.com/nischal2805/AudioBook-Creator',
    position: [-2.2, 3.5, -2.5],
    scale: 0.85,
  },
  {
    id: 'financial-ai',
    name: 'FinanceGPT',
    tier: 'side',
    tagline: 'Beyond the numbers.',
    description:
      'Gen-AI assistant that reads spending patterns and surfaces the emotional triggers behind financial decisions — not just the numbers. Multi-provider backend (Claude / Gemini) with NLP-enriched transaction classification.',
    stack: ['Python', 'Claude API', 'NLP', 'Gen AI'],
    stat: 'Emotional context layer over financial data',
    link: 'https://github.com/nischal2805/financial-ai-assistant',
    position: [-5.0, -0.8, -2.2],
    scale: 0.85,
  },
  {
    id: 'flight-sim',
    name: 'Flight Part Sim',
    tier: 'side',
    tagline: 'Fault detection before failure.',
    description:
      'Simulation of a Pitot tube static system with pressure-based failure detection, built to flag sensor faults before they become a problem. SolidWorks + MATLAB model with Python signal analysis layer.',
    stack: ['SolidWorks', 'MATLAB', 'Python'],
    stat: 'DO-178C compliance reference',
    link: 'https://github.com/nischal2805/flight-part-simulator',
    position: [2.8, 2.0, -4.2],
    scale: 0.85,
  },
];

export const flagshipProjects = projects.filter(p => p.tier === 'flagship');
export const majorProjects = projects.filter(p => p.tier === 'major');
export const sideProjects = projects.filter(p => p.tier === 'side');
