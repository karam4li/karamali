/**
 * The Quiet Press — Portfolio & Telemetry Data
 * Mohammed Ali (karam4li) — Systems, AI & Data Engineering
 * Source: Authenticated curriculum vitae & project monographs
 */

const PROFILE = {
  name: "Mohammed Ali",
  handle: "karam4li",
  title: "AI Software Engineer & Machine Learning Systems Architect",
  location: "Glasgow, United Kingdom",
  email: "mohammed.ali.karmali@gmail.com",
  github: "https://github.com/karam4li",
  linkedin: "https://www.linkedin.com/in/mohammed-ali-karamali/",
  status: "Currently architecting DentalOS AI Data Layer & EMPI at PlanetDDS",
  bio: "AI Software Engineer and Systems Researcher specializing in enterprise master patient indexing, multi-agent RAG architectures, and high-throughput data engineering pipelines. Experienced across distributed systems, vector retrieval, and generative vision models."
};

const FLAGSHIP_SYSTEMS = [
  {
    id: "dentalos-empi",
    title: "Enterprise Master Patient Index (EMPI) & Foundational Data Layer",
    organization: "PlanetDDS",
    role: "AI Software Engineer II",
    period: "March 2026 — Present",
    category: "Distributed Data & Identity Resolution",
    summary: "Architecting and implementing a centralized Person record system serving as an Enterprise Master Patient Index across all company-owned dental software products.",
    highlights: [
      "Designed system architecture to unify and reconcile patient identities at scale across disparate software platforms with differing schemas and data quality.",
      "Engineered automated data integration pipelines ensuring consistency, deterministic deduplication, and zero-loss identity resolution.",
      "Delivered the foundational data layer for DentalOS, the company's new AI-first platform, enabling intelligent cross-product patient experiences."
    ],
    metrics: [
      { label: "Target Platform", value: "DentalOS" },
      { label: "Scope", value: "Enterprise Scale" },
      { label: "Core Focus", value: "Identity Resolution" }
    ],
    tags: ["Python", "FastAPI", "Data Integration", "Identity Resolution", "Enterprise Architecture", "EMPI"]
  },
  {
    id: "qms-react-agent",
    title: "Autonomous QMS ReAct & Multi-Source RAG Agent",
    organization: "Target Healthcare",
    role: "Data Scientist / Analyst",
    period: "November 2024 — March 2026",
    category: "Agentic AI & Knowledge Retrieval",
    summary: "Engineered a bespoke corporate chat agent hosted within the company's private VPN to assist Quality Assurance officers in drafting Standard Operating Procedures (SOPs).",
    highlights: [
      "Built a secure multi-agent system utilizing LangGraph, LangChain, Azure AI Foundry (OpenAI), Chainlit, and FastAPI.",
      "Integrated RAG capabilities via custom data connectors indexing authoritative regulatory guidelines (e.g., MHRA) and historical internal QMS data.",
      "Developed an autonomous ReAct loop to cross-validate drafted procedures against compliance requirements with full audit traceability."
    ],
    metrics: [
      { label: "Infrastructure", value: "Private VPN / Azure" },
      { label: "Framework", value: "LangGraph + FastAPI" },
      { label: "Domain", value: "MHRA Regulatory QA" }
    ],
    tags: ["LangGraph", "LangChain", "Azure AI Foundry", "FastAPI", "Chainlit", "RAG", "Copilot Studio"]
  },
  {
    id: "azure-datalake-qms",
    title: "Centralized Azure Data Lake & PySpark Analytics Engine",
    organization: "Target Healthcare",
    role: "Data Scientist / Analyst",
    period: "November 2024 — March 2026",
    category: "Data Engineering & Analytics",
    summary: "Consolidated multi-site Quality Management System data into a centralized corporate Azure Data Lake for unified operational intelligence and ERP cloud migration.",
    highlights: [
      "Architected and maintained scalable ETL/ELT pipelines using Azure Data Factory and Databricks (PySpark) for large-volume historical QMS datasets.",
      "Designed and deployed standardized Power BI executive dashboards tracking mission-critical operational and compliance KPIs.",
      "Supported ERP dashboard migration from legacy on-premises infrastructure to cloud SaaS environments."
    ],
    metrics: [
      { label: "Processing", value: "Databricks PySpark" },
      { label: "Pipeline", value: "Azure Data Factory" },
      { label: "Reporting", value: "Power BI Framework" }
    ],
    tags: ["Azure Data Factory", "Databricks", "PySpark", "Azure Data Lake", "Power BI", "ETL/ELT"]
  },
  {
    id: "drug-discovery-platform",
    title: "Automated Drug Discovery Research Acceleration Platform",
    organization: "MAMA AI",
    role: "Applied Data Scientist (Technical Lead)",
    period: "April 2023 — December 2023",
    category: "Applied AI & Data Pipeline Engineering",
    summary: "Led technical engineering for a high-throughput automated data science platform designed to accelerate scientific discovery in pharmaceutical chemistry.",
    highlights: [
      "Streamlined multi-source data extraction pipelines using Selenium, Playwright, and Scrapy, feeding automated ETL/ELT transformation flows.",
      "Engineered an interactive analytics and exploration interface using Streamlit, validated through rigorous unit and A/B testing protocols.",
      "Achieved a 30% reduction in data processing latency while managing milestones as technical lead."
    ],
    metrics: [
      { label: "Latency Reduction", value: "-30%" },
      { label: "Tooling", value: "Playwright / Scrapy" },
      { label: "Interface", value: "Streamlit Suite" }
    ],
    tags: ["Python", "Playwright", "Selenium", "Scrapy", "Streamlit", "ETL", "A/B Testing"]
  },
  {
    id: "social-recommender",
    title: "High-Throughput Recommendation & Push Ranking Engine",
    organization: "MAMA AI",
    role: "AI Researcher",
    period: "August 2021 — March 2023",
    category: "Information Retrieval & Recommenders",
    summary: "Deployed and maintained heuristic-based feed recommendation and push notification ranking systems for a social media platform with over 1M active users.",
    highlights: [
      "Achieved a 60% uplift in user engagement, verified through controlled A/B testing over iterative model releases.",
      "Maintained production service uptime and CI/CD pipelines utilizing Docker, Kubernetes, Jenkins, and GitHub.",
      "Managed real-time user state and item candidate retrieval across SQL and NoSQL storage tiers."
    ],
    metrics: [
      { label: "Scale", value: "1M+ Users" },
      { label: "Engagement", value: "+60% Uplift" },
      { label: "Orchestration", value: "Kubernetes / Docker" }
    ],
    tags: ["Recommendation Systems", "Docker", "Kubernetes", "Jenkins", "SQL", "NoSQL", "CI/CD"]
  }
];

const RESEARCH_WORKS = [
  {
    title: "Generative Adversarial Networks (GANs) for Cloud Removal in Satellite Imagery",
    institution: "University of Strathclyde — Department of Computer & Information Sciences",
    period: "2024",
    status: "Master's Dissertation (Distinction) • Journal Submission in Preparation",
    abstract: "Designed and trained deep generative adversarial networks to reconstruct optical ground surfaces obscured by cloud cover and atmospheric haze in multispectral satellite imagery, enhancing visual telemetry for downstream environmental monitoring.",
    codeUrl: "https://github.com/karam4li/pub-cloud-removal",
    tags: ["PyTorch", "TensorFlow", "Generative Adversarial Networks", "Satellite Remote Sensing", "Computer Vision"]
  },
  {
    title: "High-Fidelity Autonomous Vehicle Simulation & Physics Validation",
    institution: "Center of Robotics and Autonomous Systems & Škoda Auto",
    period: "2022",
    status: "Competitive Research Appointment",
    abstract: "Reconstructed realistic post-manufacturing industrial environments from 3D point cloud scans and engineered detailed XML-based Gazebo physics simulations to validate self-learning autonomous control algorithms for industrial vehicle lifting systems.",
    codeUrl: null,
    tags: ["Gazebo", "Point Clouds", "Simulation", "Autonomous Systems", "Robotics", "C++"]
  },
  {
    title: "Voice-Based Biometric Verification via Neural Acoustic Modeling",
    institution: "Czech Technical University in Prague & MAMA AI",
    period: "2023",
    status: "Bachelor's Thesis (Grade B)",
    abstract: "Engineered an end-to-end voice-based biometric user verification and speaker identification system utilizing SpeechBrain acoustic embeddings, designed to industrial specifications provided by research partner MAMA AI.",
    codeUrl: null,
    tags: ["SpeechBrain", "Speaker Identification", "Acoustic Modeling", "Signal Theory", "Python"]
  }
];

const OPEN_SOURCE = [
  {
    name: "ChatBot-FastAPI",
    description: "Production-ready AI chatbot integrating NLTK and TensorFlow statistical natural language processing, served with high-performance FastAPI async endpoints.",
    language: "Python",
    color: "#38bdf8",
    url: "https://github.com/ali207715/ChatBot-FastAPI"
  },
  {
    name: "Reversi-playing-AI-agent",
    description: "Autonomous Reversi (Othello) game agent implementing Min-Max adversarial search with Alpha-Beta pruning and heuristic board evaluation.",
    language: "Python",
    color: "#38bdf8",
    url: "https://github.com/ali207715/Reversi-playing-AI-agent"
  },
  {
    name: "A-star-algorithm",
    description: "High-performance robotic maze solver and pathfinding engine utilizing the A* heuristic search algorithm across complex grid graphs.",
    language: "Python",
    color: "#38bdf8",
    url: "https://github.com/ali207715/A-star-algorithm"
  },
  {
    name: "Image-classifier",
    description: "Multiclass handwritten digit and alphabet classification engine implementing Naive Bayes and Nearest Neighbors algorithms.",
    language: "Python",
    color: "#38bdf8",
    url: "https://github.com/ali207715/Image-classifier"
  },
  {
    name: "pub-cloud-removal",
    description: "Research repository containing model architectures, dataset pipelines, and evaluation routines for GAN-based cloud removal in satellite imagery.",
    language: "Jupyter Notebook",
    color: "#d4973b",
    url: "https://github.com/karam4li/pub-cloud-removal"
  }
];

const EXPERIENCE_TIMELINE = [
  {
    role: "AI Software Engineer II",
    company: "PlanetDDS",
    location: "Glasgow, United Kingdom",
    period: "March 2026 — Present",
    current: true,
    description: "Architecting the Enterprise Master Patient Index (EMPI) and foundational AI data layer for DentalOS, unifying patient identities and data integration across enterprise dental platforms."
  },
  {
    role: "Data Scientist / Analyst",
    company: "Target Healthcare Limited",
    location: "Glasgow, United Kingdom",
    period: "November 2024 — March 2026",
    current: false,
    description: "Engineered bespoke VPN-hosted LangGraph RAG agents for automated SOP generation, consolidated corporate QMS data into Azure Data Lake using Databricks PySpark, and designed BI reporting frameworks."
  },
  {
    role: "Laboratory Demonstrator (CS412 & CS824)",
    company: "University of Strathclyde",
    location: "Glasgow, United Kingdom",
    period: "February 2024 — January 2025",
    current: false,
    description: "Provided hands-on machine learning laboratory demonstration and assignment mentorship for undergraduate and postgraduate computer science cohorts."
  },
  {
    role: "Applied Data Scientist",
    company: "MAMA AI",
    location: "Remote",
    period: "April 2023 — December 2023",
    current: false,
    description: "Led development of a high-throughput drug discovery data platform (30% latency reduction), built manufacturing LLM chatbots on Azure, and backend video processing pipelines."
  },
  {
    role: "AI Researcher",
    company: "MAMA AI",
    location: "Prague, Czech Republic",
    period: "August 2021 — March 2023",
    current: false,
    description: "Maintained 1M+ user social feed recommendation and push ranking engines (+60% engagement uplift via A/B testing), conversational Rasa NLU agents, and acoustic speaker ID systems."
  },
  {
    role: "Robotics Research Scholar",
    company: "Center of Robotics & Autonomous Systems / Škoda Auto",
    location: "Prague, Czech Republic",
    period: "January 2022 — June 2022",
    current: false,
    description: "Constructed high-fidelity Gazebo simulation physics environments from 3D point cloud scans for autonomous post-manufacturing vehicle lifting verification."
  }
];

const EDUCATION = [
  {
    degree: "Master of Science in Advanced Computer Science",
    grade: "Distinction Awarded • International Scholarship Recipient",
    institution: "University of Strathclyde",
    location: "Glasgow, United Kingdom",
    period: "January 2024 — December 2024",
    dissertation: "Generative Adversarial Networks (GANs) for Cloud Removal in Satellite Imagery"
  },
  {
    degree: "Bachelor of Electrical Engineering and Computer Science",
    grade: "GPA 2:1",
    institution: "Czech Technical University in Prague",
    location: "Prague, Czech Republic",
    period: "October 2019 — February 2023",
    dissertation: "Voice-Based Biometric User Validation via Speaker Recognition (in partnership with MAMA AI)"
  }
];

const COMPETENCY_MATRIX = [
  {
    category: "Languages & Frameworks",
    items: ["Python", "FastAPI", "Django", "SQL", "TypeScript / JavaScript", "C / C++", "Bash"]
  },
  {
    category: "AI, Agents & Machine Learning",
    items: ["LangGraph", "LangChain", "Azure AI Foundry", "OpenAI / Gemini", "RAG Architectures", "PyTorch", "TensorFlow", "scikit-learn", "GANs", "SpeechBrain"]
  },
  {
    category: "Data Engineering & Big Data",
    items: ["Azure Data Factory", "Databricks", "Apache Spark (PySpark)", "Azure Data Lake", "ETL / ELT Pipelines", "Playwright", "Scrapy", "Selenium"]
  },
  {
    category: "Databases & Vector Storage",
    items: ["PostgreSQL (pgvector)", "MySQL", "MongoDB", "ChromaDB", "CosmosDB", "MSSQL", "NoSQL"]
  },
  {
    category: "Cloud, DevOps & Observability",
    items: ["Azure Cloud", "Docker", "Kubernetes", "Kafka", "CI/CD (GitHub Actions, Jenkins)", "Power BI", "Streamlit", "Linux Kernel"]
  }
];
