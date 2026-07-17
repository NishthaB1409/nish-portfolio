// Language-neutral data
export const contact = {
  email: "nishthabhagyawant@gmail.com",
  github: "https://github.com/NishthaB1409",
  linkedin: "https://www.linkedin.com/in/nishtha-bhagyawant-507b721b9/",
  formspree: "https://formspree.io/f/xvzvqzgl"
};

const projectLinks = {
  rag: {
    github: "https://github.com/NishthaB1409/rag-ai-agent",
    live: "https://rag-frontend-6ivl.onrender.com/"
  },
  multiAgent: {
    github: "https://github.com/NishthaB1409/Multi-Agent-AI-Research-System",
    live: "https://multi-agent-ai-research-system-ojcvchxhywvw9hvehgnpfw.streamlit.app/"
  },
  smartEnergy: {
    github: "https://github.com/NishthaB1409/enpal-ai-companion",
    live: "https://enpal-ai-companion.vercel.app/"
  },
  repoAnalysis: {
    github: "https://github.com/NishthaB1409/gitlab-repository-analysis-tool",
    live: "https://gitlab-repository-analysis-tool.vercel.app/"
  },
  logAnalysis: {
    github: "https://github.com/NishthaB1409/git-ci-log-analysis"
  }
};

const en = {
  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Education", href: "#education" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" }
    ],
    hire: "Hire Me"
  },
  hero: {
    badge: "AI Engineer",
    typedName: "Nishtha",
    typed: [
      "Hi, I'm Nishtha.",
      "I build intelligent AI systems.",
      "I turn LLMs into products."
    ],
    sub1: "AI Engineer specializing in LLMs, RAG pipelines, and computer vision solutions.",
    sub2: "Passionate about building impactful Generative AI and advanced LLM-driven systems that improve real-world performance.",
    ctaWork: "View My Work",
    ctaHire: "Get In Touch",
    ctaResume: "Download Resume",
    scrollLabel: "Scroll to About"
  },
  about: {
    eyebrow: "",
    title: "About Me",
    intro: "",
    paragraphs: [
      [
        { text: "As a Software Developer in AI/ML at " },
        { text: "LTI - Larsen & Toubro Infotech", style: "em" },
        { text: ", I contributed to " },
        { text: "enterprise-scale AI transformations", style: "highlight" },
        { text: " — designing and deploying " },
        { text: "ML and NLP pipelines", style: "highlight" },
        { text: " for predictive and classification tasks, and building " },
        { text: "RAG pipelines with LangChain and vector databases", style: "highlight" },
        { text: " to enhance knowledge-retrieval accuracy." }
      ],
      [
        { text: "Now an M.Sc. Web Engineering student at " },
        { text: "Technische Universität Chemnitz", style: "em" },
        { text: ", I bring academic rigor to that practical experience. My core strengths span " },
        { text: "Python, LLMs, NLP, prompt engineering, and FastAPI", style: "highlight" },
        { text: ", sharpened through projects like a " },
        { text: "multi-agent research pipeline", style: "em" },
        { text: " and an " },
        { text: "AI energy companion", style: "em" },
        { text: ". I'm passionate about intelligent systems that " },
        { text: "bridge research and real-world applications", style: "highlight" },
        { text: "." }
      ]
    ]
  },
  education: {
    eyebrow: "",
    title: "Education and research foundations.",
    intro:
      "Academic work in web engineering and computer science, with published research in image processing for communication accessibility.",
    researchPill: "Research",
    viewPaper: "View Paper",
    items: [
      {
        degree: "M.Sc. Web Engineering",
        school: "Technische Universitat Chemnitz, Germany",
        year: "2025 - Present"
      },
      {
        degree: "B.E. Computer Science",
        school: "St. John College of Engineering and Management, Mumbai, India",
        year: "2020 - 2024"
      }
    ],
    publications: [
      {
        title: "Sign Language Detection and Recognition using Image Processing for Improved Communication",
        venue: "IJSCE 2025 - International Journal of Soft Computing and Engineering",
        href: "https://www.ijsce.org/wp-content/uploads/papers/v15i2/B366815020525.pdf"
      }
    ]
  },
  projects: {
    eyebrow: "",
    title: "Featured projects showcasing my interest in Agentic AI & RAG.",
    githubLabel: "GitHub",
    liveLabel: "Live Demo",
    items: [
      {
        title: "Production Ready RAG AI Agent",
        summary:
          "A production-ready Retrieval-Augmented Generation system for accurate, context-aware answers from custom knowledge bases.",
        details: [
          "Combines vector-based retrieval, document ingestion, and agentic workflow support",
          "Built with Qdrant, LlamaIndex, OpenAI, Inngest, and Streamlit",
          "Designed for custom knowledge bases and reliable answer generation"
        ],
        tech: ["Python", "Streamlit", "Qdrant", "Inngest", "LlamaIndex", "OpenAI"],
        ...projectLinks.rag
      },
      {
        title: "Multi-Agent AI Research System",
        summary:
          "A multi-agent research assistant that coordinates specialized AI agents to research topics, synthesize sources, and deliver structured reports.",
        details: [
          "Orchestrates multiple specialized agents for research, analysis, and report writing",
          "Synthesizes findings from multiple sources into structured, grounded output",
          "Interactive Streamlit interface with a live hosted demo"
        ],
        tech: ["Python", "Streamlit", "LLM Agents", "Multi-Agent Orchestration"],
        ...projectLinks.multiAgent
      },
      {
        title: "Smart Energy Companion",
        summary:
          "An AI-powered energy companion that helps households understand solar energy, savings, and consumption through a conversational assistant.",
        details: [
          "Conversational AI assistant for smart energy and solar guidance",
          "Personalized insights around energy usage and potential savings",
          "Modern responsive web app deployed on Vercel"
        ],
        tech: ["React", "AI Assistant", "Conversational UI", "Vercel"],
        ...projectLinks.smartEnergy
      },
      {
        title: "Repository Analysis Tool",
        summary:
          "A scalable backend and dashboard system for analyzing repository activity and validating developer metrics.",
        details: [
          "Designed REST APIs for repository activity analysis",
          "Validated repository metrics for developer-focused analytics",
          "Built with FastAPI backend and React Vite frontend"
        ],
        tech: ["Python", "FastAPI", "REST APIs", "React Vite"],
        ...projectLinks.repoAnalysis
      },
      {
        title: "AI Log Analysis System",
        summary:
          "A scalable system for processing CI/CD logs, detecting recurring failures, and surfacing anomalies for faster debugging.",
        details: [
          "Processed and analyzed large-scale CI/CD logs",
          "Detected recurring failures and anomaly patterns",
          "Designed to reduce debugging time in engineering workflows"
        ],
        tech: ["Python", "CI/CD", "Log Analysis"],
        ...projectLinks.logAnalysis
      }
    ]
  },
  experience: {
    eyebrow: "",
    title: "Work experience across AI engineering, APIs, and applied data science.",
    items: [
      {
        role: "Software Developer - AI/ML",
        company: "LTI - Larsen & Toubro Infotech, Mumbai, India",
        date: "Nov 2024 - Oct 2025",
        badge: "Python - FastAPI - AWS - Prompt Engineering",
        items: [
          "Designed and deployed AI/ML-driven solutions using Python, applying machine learning and prompt engineering to solve real-world business problems.",
          "Built scalable, production-ready APIs with FastAPI and Flask, integrating ML models into applications for efficient inference.",
          "Leveraged AWS services including S3, EC2, and Lambda to support cloud-based ML pipelines and deployment.",
          "Improved model performance through data preprocessing, feature engineering, and hyperparameter tuning.",
          "Collaborated with cross-functional teams to translate business requirements into robust AI solutions."
        ]
      },
      {
        role: "Data Science Intern",
        company: "Exposys Data Labs - Remote",
        date: "Jan 2024 - Mar 2024",
        badge: "EDA - Power BI - Feature Engineering - Speech AI",
        items: [
          "Developed and evaluated machine learning models using Python and Scikit-learn for classification and regression on real-world datasets.",
          "Conducted exploratory data analysis, data cleaning, and feature engineering to improve data quality and model performance.",
          "Applied statistical analysis and model evaluation techniques to uncover insights and strengthen predictive accuracy.",
          "Designed Power BI dashboards and reports to visualize trends and support stakeholder decision-making."
        ]
      }
    ]
  },
  expertise: {
    eyebrow: "AI Engineering Expertise",
    title: "Focused on systems that produce reliable ML behavior.",
    items: [
      "LLM and agentic AI systems",
      "RAG architecture with vector databases",
      "Computer vision and image processing",
      "Prompt engineering for practical workflows",
      "FastAPI and Flask model integration",
      "AWS S3, EC2, and Lambda deployment"
    ]
  },
  thinking: {
    eyebrow: "Operating Principles",
    title: "How I think about ML systems.",
    items: [
      {
        title: "Production First",
        copy: "I build AI systems around reliability, usable outputs, and clear backend boundaries."
      },
      {
        title: "Retrieval Matters",
        copy: "For RAG systems, I care about relevance and grounding before generated answers."
      },
      {
        title: "Evaluate Before Scaling",
        copy: "I use benchmarks and measurable behavior to compare models and system quality."
      },
      {
        title: "AI Belongs In Systems",
        copy: "Models need APIs, data contracts, deployment paths, and practical constraints."
      }
    ]
  },
  skills: {
    eyebrow: "Skills",
    title: "The stack I use to build evaluated ML systems and scalable APIs.",
    groups: [
      { title: "Applied AI / LLMs", items: ["GPT", "Claude", "Qwen", "Prompt engineering", "Fine-tuning (LoRA/PEFT)", "Embeddings", "Function calling"] },
      { title: "AI Agents & Orchestration", items: ["LangChain", "LangGraph", "CrewAI", "MCP", "Multi-agent systems", "Tool use"] },
      { title: "RAG & Vector DBs", items: ["RAG pipelines", "Qdrant", "Pinecone", "Chroma", "LlamaIndex", "Reranking"] },
      { title: "LLMOps & Evaluation", items: ["LangSmith", "RAGAS", "Weights & Biases", "Guardrails", "Model evaluation"] },
      { title: "Python & Backend", items: ["Python", "FastAPI", "Flask", "REST APIs", "Microservices"] },
      { title: "ML Frameworks", items: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn"] },
      { title: "Cloud & DevOps", items: ["AWS (EC2, SageMaker, Lambda)", "Docker", "CI/CD", "Git"] },
      { title: "Data & Analytics", items: ["EDA", "Feature engineering", "Pandas", "Power BI"] }
    ]
  },
  contact: {
    heading: "Let's connect.",
    copy: "Open to new opportunities and collaborations. Whether you have an exciting AI project, a research collaboration, or want to talk about intelligent systems, I'd love to hear from you.",
    tagline: "Let's build something meaningful together.",
    location: "Chemnitz, Germany",
    formTitle: "Send a Message",
    firstName: "First Name",
    lastName: "Last Name",
    emailLabel: "Email Address",
    message: "Message",
    send: "Send Message",
    emailDirect: "Email Directly"
  },
  footer: {
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service"
  }
};

const de = {
  nav: {
    links: [
      { label: "Start", href: "#home" },
      { label: "Über mich", href: "#about" },
      { label: "Ausbildung", href: "#education" },
      { label: "Erfahrung", href: "#experience" },
      { label: "Projekte", href: "#projects" },
      { label: "Kenntnisse", href: "#skills" },
      { label: "Kontakt", href: "#contact" }
    ],
    hire: "Kontakt aufnehmen"
  },
  hero: {
    badge: "AI Engineer",
    typedName: "Nishtha",
    typed: [
      "Hallo, Ich heiße Nishtha.",
      "Ich entwickle intelligente KI-Systeme.",
      "Ich mache aus LLMs Produkte."
    ],
    sub1: "AI Engineer mit Schwerpunkt auf LLMs, RAG-Pipelines und Computer-Vision-Lösungen.",
    sub2: "Mit Leidenschaft entwickle ich wirkungsvolle generative KI und fortschrittliche LLM-basierte Systeme, die reale Leistung verbessern.",
    ctaWork: "Meine Projekte",
    ctaHire: "Kontakt aufnehmen",
    ctaResume: "Lebenslauf herunterladen",
    scrollLabel: "Zu Über mich scrollen"
  },
  about: {
    eyebrow: "",
    title: "Über mich",
    intro: "",
    paragraphs: [
      [
        { text: "Als Software Developer im Bereich AI/ML bei " },
        { text: "LTI - Larsen & Toubro Infotech", style: "em" },
        { text: " habe ich an " },
        { text: "unternehmensweiten KI-Transformationen", style: "highlight" },
        { text: " mitgewirkt — mit dem Entwurf und Deployment von " },
        { text: "ML- und NLP-Pipelines", style: "highlight" },
        { text: " für Prognose- und Klassifikationsaufgaben sowie dem Aufbau von " },
        { text: "RAG-Pipelines mit LangChain und Vektordatenbanken", style: "highlight" },
        { text: " für eine präzisere Wissensabfrage." }
      ],
      [
        { text: "Heute studiere ich M.Sc. Web Engineering an der " },
        { text: "Technischen Universität Chemnitz", style: "em" },
        { text: " und verbinde akademische Präzision mit dieser Praxiserfahrung. Meine Kernkompetenzen umfassen " },
        { text: "Python, LLMs, NLP, Prompt Engineering und FastAPI", style: "highlight" },
        { text: " — geschärft durch Projekte wie eine " },
        { text: "Multi-Agenten-Recherche-Pipeline", style: "em" },
        { text: " und einen " },
        { text: "KI-Energie-Begleiter", style: "em" },
        { text: ". Ich begeistere mich für intelligente Systeme, die " },
        { text: "Forschung und reale Anwendungen verbinden", style: "highlight" },
        { text: "." }
      ]
    ]
  },
  education: {
    eyebrow: "",
    title: "Akademischer Werdegang und Forschung.",
    intro:
      "Akademische Arbeit in Web Engineering und Informatik, mit veröffentlichter Forschung zur Bildverarbeitung für barrierefreie Kommunikation.",
    researchPill: "Forschung",
    viewPaper: "Paper ansehen",
    items: [
      {
        degree: "M.Sc. Web Engineering",
        school: "Technische Universität Chemnitz, Deutschland",
        year: "2025 - heute"
      },
      {
        degree: "B.E. Informatik",
        school: "St. John College of Engineering and Management, Mumbai, Indien",
        year: "2020 - 2024"
      }
    ],
    publications: [
      {
        title: "Sign Language Detection and Recognition using Image Processing for Improved Communication",
        venue: "IJSCE 2025 - International Journal of Soft Computing and Engineering",
        href: "https://www.ijsce.org/wp-content/uploads/papers/v15i2/B366815020525.pdf"
      }
    ]
  },
  projects: {
    eyebrow: "",
    title: "Ausgewählte Projekte mit Fokus auf Agentic AI & RAG.",
    githubLabel: "GitHub",
    liveLabel: "Live-Demo",
    items: [
      {
        title: "Produktionsreifer RAG-KI-Agent",
        summary:
          "Ein produktionsreifes Retrieval-Augmented-Generation-System für präzise, kontextbezogene Antworten aus individuellen Wissensdatenbanken.",
        details: [
          "Kombiniert vektorbasiertes Retrieval, Dokumentenerfassung und agentische Workflows",
          "Entwickelt mit Qdrant, LlamaIndex, OpenAI, Inngest und Streamlit",
          "Ausgelegt auf individuelle Wissensdatenbanken und zuverlässige Antwortgenerierung"
        ],
        tech: ["Python", "Streamlit", "Qdrant", "Inngest", "LlamaIndex", "OpenAI"],
        ...projectLinks.rag
      },
      {
        title: "Multi-Agent AI Research System",
        summary:
          "Ein Multi-Agenten-Forschungsassistent, der spezialisierte KI-Agenten koordiniert, um Themen zu recherchieren, Quellen zu bündeln und strukturierte Berichte zu liefern.",
        details: [
          "Orchestriert mehrere spezialisierte Agenten für Recherche, Analyse und Berichterstellung",
          "Bündelt Erkenntnisse aus mehreren Quellen zu strukturierten, fundierten Ergebnissen",
          "Interaktive Streamlit-Oberfläche mit gehosteter Live-Demo"
        ],
        tech: ["Python", "Streamlit", "LLM-Agenten", "Multi-Agenten-Orchestrierung"],
        ...projectLinks.multiAgent
      },
      {
        title: "Smart Energy Companion",
        summary:
          "Ein KI-gestützter Energie-Begleiter, der Haushalten hilft, Solarenergie, Einsparungen und Verbrauch über einen Konversationsassistenten zu verstehen.",
        details: [
          "Konversations-KI-Assistent für smarte Energie- und Solarberatung",
          "Personalisierte Einblicke in Energieverbrauch und Einsparpotenziale",
          "Moderne, responsive Web-App, bereitgestellt auf Vercel"
        ],
        tech: ["React", "KI-Assistent", "Konversations-UI", "Vercel"],
        ...projectLinks.smartEnergy
      },
      {
        title: "Repository-Analyse-Tool",
        summary:
          "Ein skalierbares Backend- und Dashboard-System zur Analyse von Repository-Aktivität und Validierung von Entwickler-Metriken.",
        details: [
          "REST-APIs für die Analyse von Repository-Aktivitäten entworfen",
          "Repository-Metriken für entwicklerorientierte Analysen validiert",
          "Umgesetzt mit FastAPI-Backend und React-Vite-Frontend"
        ],
        tech: ["Python", "FastAPI", "REST APIs", "React Vite"],
        ...projectLinks.repoAnalysis
      },
      {
        title: "KI-Log-Analyse-System",
        summary:
          "Ein skalierbares System zur Verarbeitung von CI/CD-Logs, Erkennung wiederkehrender Fehler und Aufdeckung von Anomalien für schnelleres Debugging.",
        details: [
          "Großvolumige CI/CD-Logs verarbeitet und analysiert",
          "Wiederkehrende Fehler und Anomaliemuster erkannt",
          "Konzipiert zur Reduzierung der Debugging-Zeit in Engineering-Workflows"
        ],
        tech: ["Python", "CI/CD", "Log-Analyse"],
        ...projectLinks.logAnalysis
      }
    ]
  },
  experience: {
    eyebrow: "",
    title: "Berufserfahrung in KI-Engineering, APIs und angewandter Data Science.",
    items: [
      {
        role: "Software Developer - AI/ML",
        company: "LTI - Larsen & Toubro Infotech, Mumbai, Indien",
        date: "Nov 2024 - Okt 2025",
        badge: "Python - FastAPI - AWS - Prompt Engineering",
        items: [
          "KI/ML-basierte Lösungen mit Python konzipiert und bereitgestellt, mit Machine Learning und Prompt Engineering für reale Geschäftsprobleme.",
          "Skalierbare, produktionsreife APIs mit FastAPI und Flask entwickelt und ML-Modelle für effiziente Inferenz in Anwendungen integriert.",
          "AWS-Dienste wie S3, EC2 und Lambda für cloudbasierte ML-Pipelines und Deployments eingesetzt.",
          "Modellleistung durch Datenvorverarbeitung, Feature Engineering und Hyperparameter-Tuning verbessert.",
          "Mit funktionsübergreifenden Teams zusammengearbeitet, um Geschäftsanforderungen in robuste KI-Lösungen zu übersetzen."
        ]
      },
      {
        role: "Data-Science-Praktikantin",
        company: "Exposys Data Labs - Remote",
        date: "Jan 2024 - Mär 2024",
        badge: "EDA - Power BI - Feature Engineering - Speech AI",
        items: [
          "Machine-Learning-Modelle mit Python und Scikit-learn für Klassifikation und Regression auf realen Datensätzen entwickelt und evaluiert.",
          "Explorative Datenanalyse, Datenbereinigung und Feature Engineering zur Verbesserung von Datenqualität und Modellleistung durchgeführt.",
          "Statistische Analysen und Modellevaluierung angewendet, um Erkenntnisse zu gewinnen und die Vorhersagegenauigkeit zu stärken.",
          "Power-BI-Dashboards und Berichte entworfen, um Trends zu visualisieren und Entscheidungen von Stakeholdern zu unterstützen."
        ]
      }
    ]
  },
  expertise: {
    eyebrow: "KI-Engineering-Expertise",
    title: "Fokussiert auf Systeme mit zuverlässigem ML-Verhalten.",
    items: [
      "LLM- und agentische KI-Systeme",
      "RAG-Architektur mit Vektordatenbanken",
      "Computer Vision und Bildverarbeitung",
      "Prompt Engineering für praxisnahe Workflows",
      "Modellintegration mit FastAPI und Flask",
      "Deployment mit AWS S3, EC2 und Lambda"
    ]
  },
  thinking: {
    eyebrow: "Arbeitsprinzipien",
    title: "Wie ich über ML-Systeme denke.",
    items: [
      {
        title: "Produktion zuerst",
        copy: "Ich entwickle KI-Systeme mit Fokus auf Zuverlässigkeit, nutzbare Ergebnisse und klare Backend-Grenzen."
      },
      {
        title: "Retrieval zählt",
        copy: "Bei RAG-Systemen achte ich auf Relevanz und Fundierung, bevor Antworten generiert werden."
      },
      {
        title: "Erst evaluieren, dann skalieren",
        copy: "Ich nutze Benchmarks und messbares Verhalten, um Modelle und Systemqualität zu vergleichen."
      },
      {
        title: "KI gehört in Systeme",
        copy: "Modelle brauchen APIs, Datenverträge, Deployment-Pfade und praktische Rahmenbedingungen."
      }
    ]
  },
  skills: {
    eyebrow: "Kenntnisse",
    title: "Mein Stack für evaluierte ML-Systeme und skalierbare APIs.",
    groups: [
      { title: "Applied AI / LLMs", items: ["GPT", "Claude", "Qwen", "Prompt Engineering", "Fine-Tuning (LoRA/PEFT)", "Embeddings", "Function Calling"] },
      { title: "KI-Agenten & Orchestrierung", items: ["LangChain", "LangGraph", "CrewAI", "MCP", "Multi-Agenten-Systeme", "Tool Use"] },
      { title: "RAG & Vektordatenbanken", items: ["RAG-Pipelines", "Qdrant", "Pinecone", "Chroma", "LlamaIndex", "Reranking"] },
      { title: "LLMOps & Evaluierung", items: ["LangSmith", "RAGAS", "Weights & Biases", "Guardrails", "Modell-Evaluierung"] },
      { title: "Python & Backend", items: ["Python", "FastAPI", "Flask", "REST APIs", "Microservices"] },
      { title: "ML-Frameworks", items: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn"] },
      { title: "Cloud & DevOps", items: ["AWS (EC2, SageMaker, Lambda)", "Docker", "CI/CD", "Git"] },
      { title: "Daten & Analytik", items: ["EDA", "Feature Engineering", "Pandas", "Power BI"] }
    ]
  },
  contact: {
    heading: "Lass uns sprechen.",
    copy: "Offen für neue Chancen und Kooperationen. Ob spannendes KI-Projekt, Forschungszusammenarbeit oder ein Austausch über intelligente Systeme - ich freue mich auf deine Nachricht.",
    tagline: "Lass uns gemeinsam etwas Sinnvolles bauen.",
    location: "Chemnitz, Deutschland",
    formTitle: "Nachricht senden",
    firstName: "Vorname",
    lastName: "Nachname",
    emailLabel: "E-Mail-Adresse",
    message: "Nachricht",
    send: "Nachricht senden",
    emailDirect: "Direkt per E-Mail"
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen"
  }
};

export const content = { en, de };
