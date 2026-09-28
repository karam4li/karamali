/**
 * The Quiet Press — Portfolio & Project Data
 * Mohammed Ali (karam4li) — AI Software Engineer
 * Source: Master Curriculum Vitae
 */

const PROFILE = {
  name: "Mohammed Ali",
  handle: "karam4li",
  tagline: "Worn more hats than years in the field: from production software engineering and ML models to data lakes and agents.",
  title: "Mid-Senior Software Engineer (SE II)",
  company: "PlanetDDS",
  location: "Glasgow, United Kingdom",
  email: "mohammed.ali.karmali@gmail.com",
  github: "https://github.com/karam4li",
  linkedin: "https://www.linkedin.com/in/mohammed-ali-karamali/",
  bio: "Mid-Senior Software Engineer (SE II) at PlanetDDS training machine learning models to improve dental imagery across the US. Previously developed core DentalOS services, GTM agent cards, and foundational data layers. Background in LLM compliance agents, PySpark data lakes, recommendation engines, and satellite computer vision."
};

const CAREER_HISTORY = [
  {
    period: "2026 – Present",
    current: true,
    company: "PlanetDDS",
    location: "Glasgow, United Kingdom",
    role: "Mid-Senior Software Engineer (SE II)",
    description: "Training machine learning models to improve dental imagery across the US. Previously developed core DentalOS services, Go-To-Market (GTM) cards for autonomous agents, and foundational data integration layers."
  },
  {
    period: "2024 – 2026",
    current: false,
    company: "Target Healthcare Limited",
    location: "Glasgow, United Kingdom",
    role: "Data Scientist / Analyst",
    description: "Built private VPN-hosted multi-agent compliance assistants (LangGraph, FastAPI, Azure AI Foundry) for regulatory SOP workflows. Engineered Azure Data Lake pipelines (Databricks, PySpark) and consolidated QMS analytics dashboards."
  },
  {
    period: "2024 – 2025",
    current: false,
    company: "University of Strathclyde",
    location: "Glasgow, United Kingdom",
    role: "Laboratory Demonstrator (CS412 & CS824)",
    description: "Instructed weekly undergraduate and postgraduate laboratory sessions in machine learning, neural network implementations, and statistical modeling."
  },
  {
    period: "2023",
    current: false,
    company: "MAMA AI",
    location: "Remote",
    role: "Applied Data Scientist (Technical Lead)",
    description: "Led technical engineering on an automated data discovery platform for pharmaceutical research, cutting processing latency by 30%. Prototyped LLM manufacturing agents and video conversion backends."
  },
  {
    period: "2021 – 2023",
    current: false,
    company: "MAMA AI",
    location: "Prague, Czech Republic",
    role: "AI Researcher",
    description: "Maintained feed and push notification recommendation engines for a 1M+ user social platform, boosting engagement by 60%. Deployed microservices via Docker and Kubernetes; trained SpeechBrain speaker recognition models."
  },
  {
    period: "2022",
    current: false,
    company: "Center of Robotics & Autonomous Systems / Škoda Auto",
    location: "Prague, Czech Republic",
    role: "Robotics Research Scholar",
    description: "Constructed high-fidelity Gazebo physics simulation environments from 3D LiDAR point clouds to validate autonomous vehicle lifting algorithms for factory logistics."
  },
  {
    period: "2024",
    current: false,
    company: "University of Strathclyde",
    location: "Glasgow, United Kingdom",
    role: "MSc in Advanced Computer Science (Distinction)",
    description: "International Scholarship recipient. Focus on deep learning and generative modeling; dissertation developed GANs for cloud removal in multispectral satellite imagery."
  },
  {
    period: "2019 – 2023",
    current: false,
    company: "Czech Technical University in Prague",
    location: "Prague, Czech Republic",
    role: "BSc in Electrical Engineering & Computer Science (GPA 2:1)",
    description: "Coursework in mathematics, algorithms, and signal processing. Bachelor thesis focused on voice-based validation via speaker recognition."
  }
];

const PROJECTS = [
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
    id: "classical-ai-tools",
    name: "Algorithmic & Classical AI Tools",
    tagline: "Minimax, A* Pathfinding & NLP Implementations",
    description: "A collection of classical AI implementations including an NLTK chatbot deployable via FastAPI, a Minimax Reversi AI agent with alpha-beta pruning, an A* maze solver, and a digit classifier.",
    tags: ["NLTK", "TensorFlow", "Algorithms", "FastAPI"],
    url: "https://github.com/ali207715/ChatBot-FastAPI",
    icon: "⚙️"
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
