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
    jobit,
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
        "Enhanced financial reporting accuracy to 95%, driving a 30% increase in revenue through data-driven decisions.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };