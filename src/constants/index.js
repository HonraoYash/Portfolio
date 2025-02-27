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
    jobit,
    nxtfolio,
    tripguide,
    threejs,
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
      title: "Data Scientist and Analyst",
      icon: web,
    },
    {
      title: "AI and ML Developer",
      icon: mobile,
    },
    {
      title: "Software Developer and Engineer",
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
      title: "Data Scientist Intern",
      company_name: "Wolters Kluwer",
      icon: wk,
      iconBg: "#383E56",
      date: "July 2023 - December 2023",
      points: [
        "Developed 'Analysis of Annual Recurring Revenue' using 3.5M client records, creating a dynamic Power BI dashboard that improved business insights.",
        "Implemented time series analysis on six years of historical data to predict client rate increments and expected revenue growth for the upcoming year.",
        "Enhanced financial reporting accuracy to 95%, driving a 30% increase in revenue enhancement initiatives through data-driven decisions by higher stakeholders.",
        "Conducted exploratory data analysis to identify key business trends, improving operational efficiency by 20% in financial operations.",
        "Automated data collection and processing with Python and Pandas, saving 5 hours per week and enabling strategic focus across departments.",
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
        "Implemented a methodology to extract and classify software requirements from SRS Documents using ML and NLP with an accuracy of 78% and proposed a Deep Learning approach for Alzheimer’s diagnosis with an accuracy of 95%.",
        "Published 1 patent and 4 Research papers in Springer Journals.",
      ],
    },
    {
      title: "General Secretary",
      company_name: "Computer Socierty of India",
      icon: csi,
      iconBg: "#E6DEDD",
      date: "June 2022 - May 2024",
      points: [
        "Led a team of 150+ members",
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
      name: "Meal Nutrition Analysis using Multi-modal data",
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
      source_code_link: "https://github.com/HonraoYash/Meal-Nutrition-Analysis-using-Multi-modal-data.",
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };