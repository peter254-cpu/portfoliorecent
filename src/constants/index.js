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
    meta,
    starbucks,
    tesla,
    shopify,
    jobit,
    tripguide,
    threejs,
    Dashboard
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
  ];
  
  const experiences = [
    {
      title: "Django Wed pplication development",
      company_name: "Telkom Kenya",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - September 2022",
      points: [
        "Developing and maintaining web applications using Django python framework and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Developing api's with django rests framework for frontend consumption.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React",
      company_name: "Freelance",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Solo web application development also open to collborative development"
      ],
    },
    {
      title: "Node js web and react application development",
      company_name: "Freelance",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Solo web application development also open to collborative development"
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Freelance",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Solo web application development also open to collborative development"
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
      name: "Eccomerce Dashboard",
      description:
        "This is a fullstack Dashbord allowing a company to visualize and analyze how an ecommerce store is proceeding is allows the managers of the store to analyze the store liquid progress of the store right from profits to amount of products remaining in store",
      tags: [
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "material ui toolkit",
          color: "pink-text-gradient",
        },
        {
          name: "Reduxjs / ReduxToolkit / Redux Query Toolkit",
          color: "blue-text-gradient"
        },
        {
          name: "nivo charts",
          color: "pink-text-gradient"
        }
      ],
      image: Dashboard,
      source_code_link: "https://github.com/",
      live_demo: "https://example.com",
    },
    {
      name: "Real Estates Market Place",
      description:
        "A real estates Market place where users get access all houses ranges ranging from rentals to houses for sale anyone can post their house and anyone can shop",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongo db",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "Node js",
          color: "blue-text-gradient",
        },
        {
        name: "restful api's",
        color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
      live_demo: "https://example.com",
    },
    {
      name: "Social Media Application",
      description:
        "A social Media application where users can post like and comment to other peoples staff it has both light mode and dark mode themes to increase the users experince and view",
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
      live_demo: "https://example.com",
    },

  ];

  export { services, technologies, experiences, testimonials, projects };