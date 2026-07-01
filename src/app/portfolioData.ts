import sentinalImg from "../assets/sentinal.png";
import kryptonImg from "../assets/krypton.png";
import researchImg from "../assets/research.png";
import mathuraImg from "../assets/mathura.jpeg";
import bengaluruImg from "../assets/bengaluru.jpeg";

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
  resumeUrl: "https://drive.google.com/file/d/1Uc8TSWf3HwZW9wl5QzlKXv3AN8hO7Azu/view?usp=sharing",
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
    image: sentinalImg,
    github: "https://github.com/adi2025a/Sentinel-RAG",
    demo: "#",
    color: "#6366f1",
    gradient: "from-indigo-500/20 to-violet-500/10",
  },
  {
  id: "krypton",
  title: "Krypton",
  tagline: "Multi-Agent AI Crypto Trading Assistant",
  description:
    "An AI-powered crypto trading assistant built with a modular multi-agent architecture that performs real-time market analysis using live market data, technical indicators, news sentiment, risk assessment, and strategy generation.",
  features: [
    "Multi-Agent Architecture",
    "Real-Time Market Analysis",
    "Technical Analysis Engine",
    "Google News RSS Sentiment Analysis",
    "Risk Management",
    "Strategy Recommendation",
    "Live SSE Streaming",
    "Interactive Trading Dashboard",
  ],
  tech: [
    "Python",
    "FastAPI",
    "LangGraph",
    "LangChain",
    "CCXT",
    "Pandas",
    "TA-Lib",
    "Google News RSS",
    "Streamlit",
  ],
  github: "https://github.com/adi2025a/Krypton",
  image: kryptonImg,
  demo: "#",
  color: "#06b6d4",
  gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
  id: "pid-threat-taxonomy",
  title: "PID Threat Taxonomy Research",
  tagline: "Unsupervised Prompt Injection Threat Classification",
  description:
    "Research project exploring unsupervised threat taxonomy generation for Prompt Injection Detection. The pipeline converts attack prompts into embeddings, clusters them using K-Means into six threat categories, and stores the labeled embeddings in a FAISS vector index for efficient semantic retrieval and similarity-based threat detection.",
  features: [
    "Text Embedding Generation",
    "K-Means Clustering (k = 6)",
    "Automatic Threat Taxonomy Labeling",
    "FAISS Vector Index",
    "Semantic Similarity Search",
    "Prompt Injection Detection Research"
  ],
  tech: [
    "Python",
    "Sentence Transformers",
    "scikit-learn",
    "FAISS",
    "NumPy",
    "Pandas"
  ],
  github: "https://github.com/adi2025a/Prompt-Injection-Detector-Research",
  image: researchImg,
  demo: "#",
  color: "#06b6d4",
  gradient: "from-cyan-500/20 to-blue-500/10",
},
];

export const timeline = [
  {
    id: "python-ds",
    year: "2023",
    title: "Python & Data Science Foundations",
    description:
      "Started programming with Python and learned data analysis fundamentals including NumPy, Pandas, and Matplotlib.",
    topics: ["Python", "NumPy", "Pandas", "Matplotlib"],
    icon: "database",
  },
  {
    id: "dsa",
    year: "2024",
    title: "Data Structures & Algorithms",
    description:
      "Strengthened problem-solving skills by solving 150+ DSA problems across LeetCode and GeeksforGeeks.",
    topics: ["Data Structures","C++", "Algorithms", "Problem Solving"],
    icon: "code-2",
  },
  {
    id: "ml-dl",
    year: "2025",
    title: "Machine Learning & Deep Learning",
    description:
      "Built a strong understanding of machine learning and deep learning concepts with mathematical intuition and practical implementation.",
    topics: ["Machine Learning", "Deep Learning", "Model Evaluation"],
    icon: "trending-up",
  },
  {
    id: "genai",
    year: "2025-Present",
    title: "Generative AI & AI Security",
    description:
      "Developing AI applications focused on LLMs, RAG systems, prompt injection detection, and secure AI architectures.",
    topics: [
      "LLMs",
      "RAG",
      "LangChain",
      "LLM Security",
      "Prompt Injection Detection",
      "AI Agents",
    ],
    icon: "brain",
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


// Add this at the bottom of src/app/portfolioData.ts

export const hackathons = [
  {
    id: "hack-ai-secure",
    title: "HackRx 6.0: AI Security Challenge",
    host: "Bajaj Finserv , RV College of Engineering , Bengaluru",
    date: "Aug 2025",
    role: "AI Developer",
    image: bengaluruImg,
    description:
      "Built an Agentic workflow , that can perform RAG as well as create and deploy code to solve AI automation challenges.",
    achievements: [
      "Secured Top 20 Finalist position out of 400+ teams",
      "Designed agentic AI that can write and deploy code.",
    ],
    tech: ["Python", "FastAPI", "LangGraph", "ChromaDB"],
    color: "#a855f7", // Purple accent
  },
  {
    id: "hack-crypto-trade",
    title: "QubitX 2025 - National Hackathon",
    host: "GL Bajaj Group of Instituions , Mathura",
    date: "May 2025",
    role: "Lead ML Engineer",
    image: mathuraImg,
    description:
      "Developed a ML based algorithm to detect accident by collecting data from multiple sensors atttached in helmet.",
    achievements: [
      "Winner of 'Best Use of AI' track prize",
      "Successfully processed live SSE streaming telemetry to dashboard UI",
    ],
    tech: ["Python", "Supervised Learning", "Streamlit"],
    color: "#06b6d4", // Cyan accent
  }
];