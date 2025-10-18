import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    multimodal,
    vortexdb,
    smartrobotic,
    navigaze,
    liveaqi,
    expensehive,
    swiftbank,
    toyotai,
    jobit,
    nxtfolio,
    tripguide,
    threejs,
    karini,
    tamu,
    wk,
    mitwpu,
    csi,
    cpp,
    python,
    mysql,
    pytorch,
    ruby,
    tf,
    aws,
    huggingface,
    hubgit,
    powerbi,
    tableau,
    genai,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI and ML Engineer",
      icon: web,
    },
    {
      title: "Software Developer and Engineer",
      icon: mobile,
    },
    {
      title: "Data Scientist and Analyst",
      icon: backend,
    },
    {
      title: "Researcher",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Pytorch",
      icon: pytorch,
    },
    {
      name: "Tensorflow",
      icon: tf,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "PowerBI",
      icon: powerbi,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "HuggingFace",
      icon: huggingface,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Github",
      icon: hubgit,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "CSS",
    //   icon: css,
    // },
    // {
    //   name: "HTML",
    //   icon: html,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "ReactJS",
    //   icon: reactjs,
    // },
    // {
    //   name: "TailwindCSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Ruby",
    //   icon: ruby,
    // },
    // {
    //   name: "ThreeJS",
    //   icon: threejs,
    // },
  ];
  
  const experiences = [
    {
      title: "Research AI Engineer Intern",
      company_name: "Karini AI LLC",
      icon: karini,
      iconBg: "#E6DEDD",
      date: "Jun 2025 - Aug 2025",
      points: [
        "Developed an agentic chatbot powered by a Retrieval-Augmented Generation (RAG) pipeline to streamline legal information retrieval for law professionals.",
        "Built an end-to-end GraphRAG system integrating Amazon Neptune and OpenSearch, enabling structured retrieval over 5000+ Spanish legal documents.",
        "Fine-tuned a lightweight LLM for schema-aware Gremlin query synthesis, achieving 95% accuracy in dynamic query plan generation.",
        "Devised an active learning system and semantic caching framework by leveraging user-feedback that reduced LLM inference costs by $50 weekly and improved response latency by 5 seconds.",
        "Enhanced factual accuracy by 50% through hybrid text search and feedback-driven pipeline optimization."
      ],
    },
    {
      title: "Student Technician (Machine Learning Engineer",
      company_name: "Texas A&M - Health Science Center",
      icon: tamu,
      iconBg: "#E6DEDD",
      date: "Jan 2025 -  Present",
      points: [
        "Converted 100+ web pages from old JSON formats to new AUX JSON formats using Machine Learning models",
        "Fine-tuned LLMs to generate structured JSON outputs catering to the new expected formats by Cascade CMS",
        "Created a web-interface using FastAPI for non-tech professionals to convert the Web-pages to new style by using custom LLMs"
      ],
    },
    {
      title: "Data Scientist Intern",
      company_name: "Wolters Kluwer India Pvt. Ltd.",
      icon: wk,             // import your logo from assets
      iconBg: "#383E56",
      date: "Jul 2023 - Dec 2023",
      points: [
        "Built dynamic Power BI dashboards to analyze Annual Recurring Revenue across 3.5M+ client records, empowering leadership with real-time financial visibility.",
        "Automated financial reporting pipelines using Python, Pandas, and PySpark to merge distributed data sources, reducing manual reporting effort by 5 hours weekly.",
        "Applied LSTM-based time series forecasting to predict client renewal trends and revenue growth, enhancing forecast accuracy and supporting data-driven decisions.",
        "Identified and resolved key operational inconsistencies in financial datasets, improving reporting reliability and enabling 95% accuracy in executive summaries.",
        "Collaborated cross-functionally with the FP&A team to translate analytical insights into actionable business strategies, boosting operational efficiency by 20%."
      ],
    },
    {
      title: "Undergraduate Researcher",
      company_name: "MIT-WPU",
      icon: mitwpu,
      iconBg: "#E6DEDD",
      date: "August 2022 - November 2023",
      points: [
        "Proposed an AI/ML-driven trucking system, optimizing routes and forecasting demand for revenue growth in logistic operations, resulting in a 30% increase in operational efficiency.",
        "Implemented a methodology to extract and classify software requirements from SRS Documents using ML and NLP with an accuracy of 78%",
        "Proposed a Deep Learning approach for Alzheimer's diagnosis with an accuracy of 95% and devised a Smart Parking System using IoT.",
        "Published 1 patent and 4 Research papers in Springer Journals.",
      ],
    },
    {
      title: "Technical Head - Web Developer",
      company_name: "Computer Socierty of India",
      icon: csi,
      iconBg: "#E6DEDD",
      date: "June 2022 - May 2024",
      points: [
        "Led a team of 150+ members",
        "Led the development of a Full-stack website for the organization that facilitated the conduction of hacktahons, events and webinars.",
        "Organized and managed events throughout two years with a footfall of more than 12000 people.",
        "Conducted social awareness campaigns and marathons for social cause.",
        "Delivered Seminars and Workshops for Juniors",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
     {
      name: "Smart Robotic Package Sorter",
      description:
        "Designed an intelligent package-sorting simulation leveraging AWS Rekognition, YOLOv8, and FastAPI to detect text and object attributes in real time, classifying packages by label and geometry. Deployed a fully containerized pipeline on Railway to emulate robotic logistics operations.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "fastapi", color: "green-text-gradient" },
        { name: "aws", color: "pink-text-gradient" },
        { name: "yolov8", color: "green-text-gradient" },
        { name: "docker", color: "blue-text-gradient" },
      ],
      image: smartrobotic, // imported from your assets folder
      source_code_link: "https://github.com/HonraoYash/Smart-Robotic-Package-Sorter",
      live_demo_link: "https://smart-robotic-package-sorter.up.railway.app/", // ✅ add this
    },
    {
      name: "VortexDB: A Vector Database",
      description:
        "Engineered a high-performance vector database from scratch inspired by HNSW, enabling lightning-fast approximate nearest-neighbor retrieval with optimized graph indexing, adaptive memory layout, and RESTful query interface for scalable AI search applications.",
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "hnsw", color: "orange-text-gradient" },
        { name: "vectordb", color: "green-text-gradient" },
        { name: "flask", color: "pink-text-gradient" },
      ],
      image: vortexdb,
      source_code_link: "https://github.com/HonraoYash/VortexDB",
    },
    {
      name: "Calorie-Consumption-Prediction-using-Multimodal-Data",
      description:
        "Developed a multimodal deep learning framework integrating CNNs for meal image processing, Bi-LSTMs with attention for CGM data, and FCNs for demographic analysis. Improved calorie intake prediction accuracy by 30%, achieving a RMSRE of 0.35 through an optimized multimodal approach.",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "deep learning",
          color: "green-text-gradient",
        },
      ],
      image: multimodal,
      source_code_link: "https://github.com/HonraoYash/Calorie-Consumption-Prediction-using-Multimodal-Data",
    },
    {
      name: "Navigaze",
      description:
        "Built a real-time route-planning web app that fuses OpenRouteService APIs with YOLOv8 object detection to identify road hazards from live video feeds and dynamically re-route users, delivering safer and smarter navigation using risk-aware path ranking.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "flask", color: "green-text-gradient" },
        { name: "aws", color: "pink-text-gradient" },
        { name: "openrouteservice", color: "green-text-gradient" },
        { name: "ai", color: "blue-text-gradient" },
      ],
      image: navigaze, // imported from your assets folder
      source_code_link: "https://github.com/HonraoYash/NaviGaze",
      live_demo_link: "https://navigaze.up.railway.app/",
    },
    {
      name: "LiveAQI: Real-Time Air Quality Monitoring Platform",
      description:
        "Built a real-time AQI monitoring platform using RedisTimeSeries to simulate air quality data streams. Visualized live metrics through Grafana Cloud dashboards and containerized the full data pipeline.",
      tags: [
        { name: "redistimeseries", color: "green-text-gradient" },
        { name: "grafana", color: "pink-text-gradient" },
        { name: "docker", color: "orange-text-gradient" },
      ],
      image: liveaqi, // make sure you have liveaqi.png in your /assets folder
      source_code_link: "https://github.com/HonraoYash/Live-AQI",
      live_demo_link: "https://yashhonrao2024.grafana.net/public-dashboards/78aec0ef856848239209fd5293506e7e",
    },
    {
      name: "NXTFolio: A Content-Based Job-Focused Social Media Platform",
      description:
        "Contributed to a Ruby on Rails-based job-focused social media platform with 20K users, AI-powered bio generation, and chat. Improved test coverage to 90.79% and deployed on Heroku with Docker.",
      tags: [
        {
          name: "ruby-on-rails",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "pink-text-gradient",
        },
      ],
      image: nxtfolio,
      source_code_link: "https://nxtfolio.herokuapp.com/",
    },
    {
      name: "Personalized Therapeutic Image Generation using Generative AI",
      description:
        "Developed a latent diffusion model with 92.5% anatomical accuracy for therapeutic image synthesis. Achieved 93% classification accuracy, optimized generation time from 30 mins to 1 min.",
      tags: [
        {
          name: "genai",
          color: "blue-text-gradient",
        },
        {
          name: "machine learning",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: genai,
      source_code_link: "https://github.com/HonraoYash/AI-Based-Therapeutic-Image-Generation-Using-Stable-Diffusion",
    },
    {
      name: "Smart Expense Tracker with Collaborative Budgeting",
      description:
        "Built a JavaScript-based expense tracker enabling multi-user budgeting and real-time expense visualization. Optimized PostgreSQL queries by 40% and secured sessions with JWT and Socket.io.",
      tags: [
        { name: "javascript", color: "blue-text-gradient" },
        { name: "nodejs", color: "green-text-gradient" },
        { name: "express", color: "pink-text-gradient" },
        { name: "postgresql", color: "orange-text-gradient" },
      ],
      image: expensehive, // place expense.png in /assets and import it
      source_code_link: "https://github.com/HonraoYash/expense-hive-mind", // or leave empty if private
    },
    {
      name: "SwiftBank: A Financial Management System",
      description:
        "Developed a full-stack Java EE banking platform using Servlets and JSP with a secure MySQL backend. Implemented a robust MVC-based transaction management system, reducing code duplication by 40% across modules",
      tags: [
        { name: "java", color: "blue-text-gradient" },
        { name: "jsp", color: "green-text-gradient" },
        { name: "servlets", color: "pink-text-gradient" },
        { name: "mysql", color: "orange-text-gradient" },
      ],
      image: swiftbank, // add swiftbank.png to /assets and import it
      source_code_link: "https://github.com/HonraoYash/SwiftBank-A-Financial-Management-System", // leave blank if not public
    },
    {
      name: "ToyotAI: RAG Chatbot (TAMUHack 2025)",
      description:
        "Architected a scalable RAG pipeline with Ollama, FAISS, and LangChain—cutting ~20 minutes per customer query. Integrated E5 dense retrieval and fine-tuned LLaMA2 on 1K+ programmatic instruction–response pairs to boost factual accuracy. Built a Streamlit UI with a REST API for modular, real-time interaction.",
      tags: [
        { name: "rag",          color: "blue-text-gradient" },
        { name: "langchain",    color: "green-text-gradient" },
        { name: "faiss",        color: "pink-text-gradient" },
        { name: "ollama",       color: "orange-text-gradient" },
        { name: "e5-embeddings",color: "blue-text-gradient" },
        { name: "streamlit",    color: "green-text-gradient" },
        { name: "rest-api",     color: "pink-text-gradient" },
      ],
      image: toyotai,  // add toyotai.png to /src/assets and import it
      source_code_link: "https://github.com/HonraoYash/ToyotAI-RAG-based-Chatbot-for-Toyota-Website", // add your repo link if public
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };