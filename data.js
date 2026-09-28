/**
 * The Quiet Press — Portfolio & Project Data
 * Mohammed Ali (karam4li) — AI Software Engineer
 * Source: Master Curriculum Vitae
 */

const PROFILE = {
  name: "Mohammed Ali",
  handle: "karam4li",
  tagline: "I like to build machine learning systems, data engines, and clean software.",
  title: "AI Software Engineer II",
  company: "PlanetDDS",
  location: "Glasgow, United Kingdom",
  email: "mohammed.ali.karmali@gmail.com",
  github: "https://github.com/karam4li",
  linkedin: "https://www.linkedin.com/in/mohammed-ali-karamali/",
  bio: "AI Software Engineer II at PlanetDDS architecting the Enterprise Master Patient Index (EMPI) and core data layer for DentalOS. Background in LLM compliance agents, PySpark data lakes, recommendation systems, and satellite computer vision."
};

const CAREER_HISTORY = [
  {
    period: "2026 – Present",
    current: true,
    company: "PlanetDDS",
    location: "Glasgow, United Kingdom",
    role: "AI Software Engineer II",
    description: "Architecting and building a centralized Person record system serving as an Enterprise Master Patient Index (EMPI) across all company-owned dental software products. Unifying patient identities across disparate platforms with heterogeneous schemas, designing data integration pipelines for deterministic deduplication, hybrid vector-assisted record matching, and foundational data services for DentalOS."
  },
  {
    period: "2024 – 2026",
    current: false,
    company: "Target Healthcare Limited",
    location: "Glasgow, United Kingdom",
    role: "Data Scientist / Analyst",
    description: "Built a bespoke, private VPN-hosted multi-agent assistant using LangGraph, LangChain, Azure AI Foundry, Chainlit, and FastAPI to assist QA officers in drafting and cross-referencing SOPs against MHRA regulatory guidelines with audit traceability. Consolidated multi-site QMS data into a centralized Azure Data Lake using Azure Data Factory and Databricks (PySpark) for unified analytics and ERP cloud migration, maintaining corporate Power BI frameworks."
  },
  {
    period: "2024 – 2025",
    current: false,
    company: "University of Strathclyde",
    location: "Glasgow, United Kingdom",
    role: "Laboratory Demonstrator (CS412 & CS824)",
    description: "Instructed weekly machine learning laboratory sessions for undergraduate and postgraduate student cohorts. Guided students through practical neural network implementations, model evaluation techniques, and statistical machine learning assignments."
  },
  {
    period: "2023",
    current: false,
    company: "MAMA AI",
    location: "Remote",
    role: "Applied Data Scientist (Technical Lead)",
    description: "Led technical engineering on an automated data science platform for drug discovery, streamlining web harvesting pipelines with Playwright, Selenium, and Scrapy, and building an interactive exploration suite in Streamlit that reduced harvesting processing latency by 30%. Also developed a manufacturing chatbot on Azure Cloud with OpenAI/Gemini, and a B2C presentation-to-video conversion backend with Stripe integration."
  },
  {
    period: "2021 – 2023",
    current: false,
    company: "MAMA AI",
    location: "Prague, Czech Republic",
    role: "AI Researcher",
    description: "Maintained heuristic and ML recommendation algorithms (feed recommendations and push notification ranking) for a social media platform serving 1M+ active users, improving engagement by 60% as measured via A/B testing. Maintained the deployment stack using Docker, Kubernetes, Jenkins, and SQL/NoSQL databases. Built an interactive voice game for Amazon Alexa using Rasa NLU, and trained a speaker identification model with SpeechBrain for bachelor's thesis."
  },
  {
    period: "2022",
    current: false,
    company: "Center of Robotics & Autonomous Systems / Škoda Auto",
    location: "Prague, Czech Republic",
    role: "Robotics Research Scholar",
    description: "Selected for a competitive research appointment collaborating with Škoda Auto at the university robotics lab on an autonomous vehicle lifting system for post-manufacturing factory logistics. Constructed high-fidelity Gazebo simulation physics environments from 3D point cloud scans to validate a self-learning autonomous control algorithm."
  },
  {
    period: "2024",
    current: false,
    company: "University of Strathclyde",
    location: "Glasgow, United Kingdom",
    role: "MSc in Advanced Computer Science (Distinction)",
    description: "Awarded International Scholarship. Built machine learning and deep learning models using scikit-learn, TensorFlow, and PyTorch. Dissertation focused on Generative Adversarial Networks (GANs) for cloud removal in multispectral satellite imagery."
  },
  {
    period: "2019 – 2023",
    current: false,
    company: "Czech Technical University in Prague",
    location: "Prague, Czech Republic",
    role: "BSc in Electrical Engineering & Computer Science (GPA 2:1)",
    description: "Coursework in Calculus, Linear Algebra, Discrete Mathematics, Machine Learning and Pattern Recognition, Signal Theory, Data Structures & Algorithms, and C/Python programming. Bachelor thesis on voice-based user validation using speaker recognition."
  }
];

const PROJECTS = [
  {
    id: "ktp-radar",
    name: "KTP Radar",
    tagline: "UK Job Discovery Engine & Visa Evaluator",
    description: "Comprehensive job discovery engine and intelligence tool tracking Knowledge Transfer Partnership vacancies across the UK. Scrapes Innovate UK, jobs.ac.uk, and web sources, normalizing salary and duration, and screens vacancies against UKRI criteria for Global Talent Visa eligibility.",
    tags: ["FastAPI", "SQLite", "BeautifulSoup", "Vanilla JS"],
    url: "https://github.com/karam4li/ktp_job_scraper",
    icon: "📡"
  },
  {
    id: "volatile-stock-discovery",
    name: "Volatile Stock Discovery Tool",
    tagline: "Quantitative Momentum & Volatility Scanner",
    description: "Quantitative stock screener built in Python to scan ~3,000 US equities for imminent explosive breakout setups. Evaluates volume explosion ratios, float rotation velocity, and Bollinger Band squeeze breakouts via Rich CLI.",
    tags: ["Python", "yfinance", "Pandas", "Rich CLI"],
    url: "https://github.com/karam4li/portfolio",
    icon: "📈"
  },
  {
    id: "bigspark-analytics",
    name: "BigSpark Analytics Challenge",
    tagline: "Columnar ETL & Exploratory Analytics",
    description: "Data cleaning, validation, and analytics pipelines handling dirty real-world datasets: NHS appointment delays vs. no-show Bayesian probabilities, SaaS CRM cohort retention curves, and rolling Z-score eCommerce anomaly detection.",
    tags: ["Polars", "DuckDB", "Streamlit", "Plotly"],
    url: "https://github.com/yes-parquet/bigspark_final_round",
    icon: "⚡"
  },
  {
    id: "cloud-removal-gan",
    name: "Satellite Cloud Removal GAN",
    tagline: "Deep Generative Image Reconstruction",
    description: "Deep convolutional Generative Adversarial Networks trained to reconstruct optical ground surfaces obscured by heavy cloud cover and atmospheric haze in multispectral satellite imagery.",
    tags: ["PyTorch", "TensorFlow", "GANs", "Remote Sensing"],
    url: "https://github.com/karam4li/pub-cloud-removal",
    icon: "🛰️"
  },
  {
    id: "visa-autobooker",
    name: "VFS Visa Autobooker",
    tagline: "Automated Appointment Reschedule Monitor",
    description: "Playwright bot monitoring earlier reschedule openings on VFS Global UK->Czech Republic portal with persistent session cookies and desktop notifications.",
    tags: ["Playwright", "Python", "Desktop Notify"],
    url: null,
    icon: "🤖"
  }
];

const PUBLICATIONS = [
  {
    title: "Generative Adversarial Networks (GANs) for Cloud Removal in Satellite Imagery",
    venue: "University of Strathclyde • MSc Dissertation (Distinction) • 2024",
    authors: "Mohammed Ali (Advisor: Dr. Christos Tachtatzis)",
    url: "https://github.com/karam4li/pub-cloud-removal"
  },
  {
    title: "Voice-Based User Validation Using Speaker Recognition Technology",
    venue: "Czech Technical University in Prague & MAMA AI • Bachelor Thesis (Grade B) • 2023",
    authors: "Mohammed Ali (Advisor: Ing. Jan Švec)",
    url: null
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROFILE, CAREER_HISTORY, PROJECTS, PUBLICATIONS };
}
