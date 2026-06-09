export const profile = {
  name: "Aditya Singh",
  title: "GenAI Engineer | Machine Learning Engineer",
  summary:
    "Passionate AI Engineer focused on Generative AI, Retrieval-Augmented Generation (RAG), Machine Learning, Reinforcement Learning, and scalable AI infrastructure. I enjoy building production-oriented AI systems, researching LLM security, and solving challenging algorithmic problems.",
  about:
    "Aditya Singh is a Generative AI and Machine Learning Engineer focused on building practical AI systems. His interests include RAG, LLM Security, Reinforcement Learning, NLP, and scalable AI architectures. He enjoys designing modular AI systems and continuously improving software engineering and algorithmic skills.",
  highlights: [
    "GenAI Engineer",
    "ML Engineer",
    "RAG Security Researcher",
    "Reinforcement Learning Enthusiast",
    "150+ DSA Problems Solved",
    "Python Developer",
  ],
  rotatingRoles: [
    "GenAI Engineer",
    "ML Engineer",
    "RAG Systems Developer",
    "AI Security Enthusiast"
  ],
  resumeUrl: "#",
  location: "India",
};

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/adi2025a", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/adi2025a", icon: "linkedin" },
  { label: "GeeksforGeeks", url: "https://auth.geeksforgeeks.org/user/adi2025a", icon: "code" },
  { label: "Email", url: "aadityasinghas13@gmail.com", icon: "mail" },
];

export const skills = [
  {
    category: "Generative AI",
    color: "#6366f1",
    items: [
      "LangChain",
      "RAG",
      "Agents",
      "Prompt Engineering",
      "Vector Databases",
      "Embeddings",
      "LLM Evaluation",
      "AI Security",
    ],
  },
  {
    category: "Machine Learning",
    color: "#8b5cf6",
    items: [
      "Scikit-Learn",
      "XGBoost",
      "Feature Engineering",
      "Classification",
      "Regression",
    ],
  },
  {
    category: "Deep Learning",
    color: "#a78bfa",
    items: [
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "Neural Networks",
    ],
  },
  {
    category: "Backend",
    color: "#c4b5fd",
    items: ["Python", "FastAPI", "REST APIs"],
  },
  {
    category: "Databases",
    color: "#7c3aed",
    items: ["PostgreSQL", "ChromaDB", "FAISS"],
  },
  {
    category: "DevOps",
    color: "#4f46e5",
    items: ["Docker", "Git", "GitHub", "Linux"],
  },
];

export const projects = [
  {
    id: "sentinel-rag",
    title: "Sentinel RAG",
    tagline: "Security-focused RAG framework",
    description:
      "Security-focused RAG framework designed to defend against prompt injection, retrieval poisoning, malicious context manipulation, and unsafe inputs.",
    features: [
      "Regex attack detection",
      "Context validation",
      "Secure retrieval pipeline",
      "Modular architecture",
    ],
    tech: ["Python", "FastAPI", "LangChain", "Vector Databases"],
    github: "https://github.com/adi2025a/Sentinel-RAG",
    demo: "#",
    color: "#6366f1",
    gradient: "from-indigo-500/20 to-violet-500/10",
  },
  {
    id: "rag-bench",
    title: "RAG Bench",
    tagline: "RAG pipeline benchmarking platform",
    description:
      "Benchmarking platform for evaluating RAG pipelines across different LLMs, embeddings, chunking strategies, retrievers, and vector databases.",
    features: [
      "Pipeline Builder",
      "Evaluation Dashboard",
      "Experiment Tracking",
      "Performance Metrics",
    ],
    tech: ["Python", "FastAPI", "Streamlit", "LangChain"],
    github: "https://github.com/adi2025a/RAG-bench",
    demo: "#",
    color: "#8b5cf6",
    gradient: "from-violet-500/20 to-purple-500/10",
  },
  {
    id: "rl-trading",
    title: "RL Trading Predictor",
    tagline: "Reinforcement learning trading system",
    description:
      "Reinforcement learning based trading system that learns market behavior and develops adaptive trading strategies.",
    features: [
      "RL Agent Training",
      "Trading Simulation",
      "Reward Optimization",
      "Performance Analytics",
    ],
    tech: ["Python", "Reinforcement Learning"],
    github: "https://github.com/adi2025a/rl-trading",
    demo: "#",
    color: "#a78bfa",
    gradient: "from-purple-500/20 to-indigo-500/10",
  },
];

export const timeline = [
  {
    id: "genai",
    year: "2024",
    title: "Generative AI Training",
    description: "Deep dive into LLMs, RAG systems, LangChain, and Vector Databases",
    topics: ["LLMs", "RAG", "LangChain", "Vector Databases"],
    icon: "brain",
  },
  {
    id: "ml",
    year: "2023",
    title: "Data Science & Machine Learning",
    description: "Comprehensive training in Statistics, Machine Learning, and Model Evaluation",
    topics: ["Statistics", "Machine Learning", "Model Evaluation"],
    icon: "trending-up",
  },
  {
    id: "dsa",
    year: "2022",
    title: "DSA Practice",
    description: "Solved 150+ problems on GeeksforGeeks, focusing on problem solving and software engineering fundamentals",
    topics: ["Algorithms", "Data Structures", "Problem Solving"],
    icon: "code-2",
  },
];

export const certifications = [
  {
    id: "genai-cert",
    title: "Generative AI",
    instructor: "Krish Naik",
    platform: "Udemy",
    topics: ["LLMs", "RAG", "LangChain", "Agents", "Vector Databases"],
    color: "#6366f1",
    certificateUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-08a6d1be-9c60-4447-bc0b-cfedd9dcd3b8.jpg?v=1776278536000",
    imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-08a6d1be-9c60-4447-bc0b-cfedd9dcd3b8.jpg?v=1776278536000",
  },
  {
    id: "ds-cert",
    title: "Data Science & Machine Learning",
    instructor: "Daniel Brouke",
    platform: "Udemy",
    topics: ["Machine Learning", "Statistics", "Data Analysis", "Python"],
    color: "#8b5cf6",
    certificateUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-d7218d86-f427-4f24-a46d-be75eeb50fb6.jpg?v=1728321728000",
    imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-d7218d86-f427-4f24-a46d-be75eeb50fb6.jpg?v=1728321728000",
  },
];

export const achievements = [
  { id: "dsa", value: 150, suffix: "+", label: "DSA Problems Solved", icon: "code-2" },
  { id: "projects", value: 3, suffix: "+", label: "Major AI Projects", icon: "layers" },
  { id: "genai", value: 1, suffix: "", label: "Generative AI Specialization", icon: "brain" },
  { id: "ml", value: 1, suffix: "", label: "ML Engineering Focus", icon: "trending-up" },
];

export const techEcosystem = {
  center: "Aditya Singh",
  nodes: [
    { id: "python", label: "Python", angle: 0, distance: 160 },
    { id: "fastapi", label: "FastAPI", angle: 40, distance: 200 },
    { id: "langchain", label: "LangChain", angle: 80, distance: 170 },
    { id: "pytorch", label: "PyTorch", angle: 120, distance: 190 },
    { id: "tensorflow", label: "TensorFlow", angle: 160, distance: 175 },
    { id: "docker", label: "Docker", angle: 200, distance: 185 },
    { id: "postgresql", label: "PostgreSQL", angle: 240, distance: 165 },
    { id: "mongodb", label: "MongoDB", angle: 280, distance: 195 },
    { id: "faiss", label: "FAISS", angle: 320, distance: 180 },
    { id: "chromadb", label: "ChromaDB", angle: 355, distance: 210 },
  ],
};
