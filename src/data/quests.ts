import { Quest } from '../types';

export const quests: Quest[] = [
  // ---- Main Quests ----
  {
    id: 'deepshield',
    title: 'DeepShield',
    rarity: 'legendary',
    tier: 'main',
    tagline: "Boss fight — can you still tell what's real?",
    description:
      "A dual-track deepfake & AI-image detector. Faces get run through an ensemble of EfficientNet-B4 (SBI) and Wavelet-CLIP; everything else is checked against C2PA metadata and Google SynthID watermarks. Grad-CAM heatmaps show exactly which pixels triggered the verdict.",
    stack: ['PyTorch', 'EfficientNet-B4', 'CLIP', 'Grad-CAM', 'Streamlit'],
    stat: 'Target cross-dataset AUC > 0.85',
    link: 'https://github.com/nischal2805/DeepShield',
  },
  {
    id: 'rag-leaderboard',
    title: 'RAG Challenge Platform',
    rarity: 'epic',
    tier: 'main',
    tagline: 'Built the arena, not just a player in it.',
    description:
      'A full competition platform for RAG systems: students deploy retrieval pipelines over financial filings, submit an endpoint, and get scored live. An async harness evaluates up to 4 submissions concurrently across correctness, citation quality, completeness, and latency.',
    stack: ['FastAPI', 'SQLAlchemy', 'Docker', 'FinanceBench', 'Tailwind'],
    stat: 'Scored against 10,231 SEC-filing QA pairs',
    link: 'https://github.com/nischal2805/rag-leaderboard-sl',
  },
  {
    id: 'llm-peephole',
    title: 'LLM Peephole Optimization Discovery',
    rarity: 'epic',
    tier: 'main',
    tagline: 'Asked an LLM to out-optimize a compiler — then made it prove it.',
    description:
      "Research pipeline testing whether LLMs can spot peephole optimizations that LLVM's own instcombine/simplifycfg passes miss. Every suggested rewrite has to pass formal correctness checking with Alive2 (LLVM IR) or a bounded interpreter (MLIR) before it counts.",
    stack: ['LLVM IR', 'MLIR', 'Alive2', 'Python'],
    stat: '4 genuinely missed optimizations found across 48 LLVM IR cases',
    link: 'https://github.com/nischal2805/assignment14-llm-peephole-llvmir',
  },
  {
    id: 'contractclaw',
    title: 'ContractClaw',
    rarity: 'epic',
    tier: 'main',
    tagline: 'Built at a hackathon so nobody misses a contract deadline again.',
    description:
      'An AI agent that reads contracts sent over Telegram, extracts every obligation, and fires escalating alerts at 30/7/1 days out plus immediate pings on anything overdue. Swappable LLM backend — Claude, Gemini, or Bedrock — flags risky clauses like auto-renewals and asymmetric penalties along the way.',
    stack: ['TypeScript', 'Claude / Gemini / Bedrock', 'Telegram API', 'OpenClaw'],
    stat: '31 passing tests, zero TypeScript errors',
    link: 'https://github.com/nischal2805/Openclaw_hackathon',
  },
  {
    id: 'alzheimers',
    title: "Alzheimer's Early Detection",
    rarity: 'epic',
    tier: 'main',
    tagline: 'Reading the earliest warning signs in a brain scan.',
    description:
      'A CNN-based diagnostic tool that screens MRI scans for structural patterns associated with early-stage Alzheimer’s, paired with cognitive-assessment data and a deployed web interface for results.',
    stack: ['TensorFlow', 'CNN', 'OpenCV'],
    stat: 'Full pipeline: trained model + deployed web app',
    link: 'https://github.com/nischal2805/Alzeihmer-s-Detection-using-Brain-MRI-',
  },

  // ---- Side Quests ----
  {
    id: 'crime-bert',
    title: 'AI-Driven Crime Data Classification',
    rarity: 'rare',
    tier: 'side',
    tagline: 'Teaching a transformer to read police reports.',
    description:
      "Custom BERT classifier sorting raw crime reports into 4 major categories and 57 subcategories, with a multilingual NLP pipeline for reports that don't all arrive in the same language.",
    stack: ['PyTorch', 'BERT', 'NLP'],
    stat: '4 categories → 57 subcategories',
  },
  {
    id: 'audio-book',
    title: 'Audio-Book',
    rarity: 'rare',
    tier: 'side',
    tagline: 'Turning a photographed page into a voice.',
    description:
      'A PWA that photographs or uploads a Kannada book page, OCRs it with Tesseract, and reads it back aloud with gTTS — installable straight to a phone home screen.',
    stack: ['FastAPI', 'Tesseract OCR', 'gTTS', 'PWA'],
    stat: 'Kannada OCR → speech, on-device install',
    link: 'https://github.com/nischal2805/audio-book',
  },
  {
    id: 'rl-routing',
    title: 'Shortest-Path Routing with RL',
    rarity: 'rare',
    tier: 'side',
    tagline: 'An agent that learns the network instead of being told it.',
    description:
      'A custom OpenAI Gym environment where a reinforcement-learning agent learns to route traffic through a network topology, balancing latency against bandwidth instead of chasing raw hop count.',
    stack: ['Python', 'OpenAI Gym', 'NetworkX'],
    stat: 'Multi-objective: latency × bandwidth',
    link: 'https://github.com/nischal2805/Shortest-path-routing',
  },
  {
    id: 'financial-assistant',
    title: 'Financial AI Assistant',
    rarity: 'common',
    tier: 'side',
    tagline: 'Side quest: figuring out why you bought that.',
    description:
      'A Gen-AI assistant that reads spending patterns and the context around them to surface the emotional triggers behind financial decisions, not just the numbers.',
    stack: ['Python', 'NLP', 'Gen AI'],
  },
  {
    id: 'crop-yield',
    title: 'Crop Yield Prediction',
    rarity: 'common',
    tier: 'side',
    tagline: 'Side quest: from satellite to silo.',
    description:
      'An ML model combining environmental and agricultural data to forecast crop yield and recommend farming strategies tuned to local conditions.',
    stack: ['TensorFlow', 'OpenCV', 'Scikit-Learn'],
  },
  {
    id: 'flight-sim',
    title: 'Flight Part Simulator',
    rarity: 'common',
    tier: 'side',
    tagline: 'Side quest: when a sensor lies, something has to notice.',
    description:
      'A simulation of a Pitot tube static system with threshold-based failure detection, built to flag sensor faults before they become a real problem.',
    stack: ['SolidWorks', 'Python', 'MATLAB'],
  },
];

export const mainQuests = quests.filter((q) => q.tier === 'main');
export const sideQuests = quests.filter((q) => q.tier === 'side');
