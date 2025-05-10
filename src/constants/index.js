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
  wsa,
  nsut,
  csi,
  mait,
  portfolio,
  yourcare,
  hindigyanghar,
  quickbite,
  unichat,
  threejs,
  x,
  linkedin,
  github,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "DSA in C and C++",
    icon: backend,
  },
  {
    title: "Hackathons Ethuasiasts",
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
    title: "Full Stack Developer",
    company_name: "WebstackAcademy(WSA)",
    icon: wsa,
    iconBg: "#383E56",
    date: "July 2024 - Aug 2024",
    points: [
      "Worked on a Full Stack Project Using various Coding Methodologies.",
      "Engineered a comprehensive food ordering website utilizing the MERN stack, integrating real-time order tracking features that increased user engagement by 40% and enhanced overall customer satisfaction rates significantly.",
      "Implemented user authentication, cart management and payment integration method for online payment.",
      "Handle the Database using MongoDb, Node.js and created a responsive front-end using HTML,CSS, and JavaScript.",
    ],
  },
  {
    title: "3rd Place Winner at 'ShlokaDecode' Hackathon- AVINYA'25",
    company_name: "NSUT(Netaji Subhas University of Technology)",
    icon: nsut,
    iconBg: "#E6DEDD",
    date: "4th April 2025",
    points: [
      "My team and I secured 3rd place out of 80+ teams at ShlokaDecode, a high-energy hackathon held on 4th April during AVINYA'25 at NSUT!",
      "We had just 6 hours to brainstorm, build, and deploy a fully functional Hindi learning website—and we made it happen!",
      "Each team was given a unique Hindi shloka to interpret.",
      "Based on our analysis, we created a website that captured the essence and meanings of the shloka, aimed at promoting Hindi language learning in an engaging and meaningful way. ",
    ],
  },
  {
    title: "Member",
    company_name: "CSI(Computer Society of India)-InnoWave, MAIT",
    icon: csi,
    iconBg: "#383E56",
    date: "Sep 2024 - Present",
    points: [
      "Facilitated event setup, registration, and attendee engagement across various tech-focused sessions and workshops.",
      "Assisted in organizing and coordinating the AWS PartyRock Hackathon, promoting hands-on AI/ML project building using generative AI tools.",
      "Supported logistics and communication for the Internship Fair, helping connect over 500+ students with industry professionals and internship opportunities.",
      "Collaborated with CSI core team to ensure smooth execution of speaker sessions, including technical talks and industry panels.",
    ],
  },
  {
    title: "B.tech(Computer Science and Engineering)",
    company_name: "MAIT(Maharaja Agrasen Institute of Technology), GGSIPU",
    icon: mait,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Present",
    points: [
      "Strong academic foundation in DSA, OOPs, Operating Systems, DBMS, and Computer Networks, with consistent CGPA of 8.45",
      "Successfully completed NPTEL-certified courses in:- (1)Cloud Computing (2) Ethical Hacking (3) Advanced R Programming for Data Analytics in Bussiness",
      "Developed strong communication and interpersonal abilities through collaboration with peers, faculty, and external professionals.",
      "Actively participated in seminars and workshops, leading to improved confidence, career awareness, and networking proficiency.",
    ],
  },
];

const projects = [
  {
    name: "My Portfolio Website",
    description:
      "Developed a 3-D portfolio website where i can showcase my skills, experiences, projects and also provide a way for people to contact me.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "blender",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/SakshamRajpal/saksham_Portfolio",
    live_demo_link: "https://saksham-portfolio-sooty.vercel.app/",
  },
  {
    name: "YourCare",
    description:
      "YourCare is a healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors. It features administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications — all built using Next.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: yourcare,
    source_code_link: "https://github.com/SakshamRajpal/Your_Care",
    live_demo_link: "https://your-care.vercel.app/",
  },
  {
    name: "HindiGyanGhar",
    description:
      "Designed and developed a responsive web application to help users learn Hindi through interactive lessons, quizzes, and transliteration support.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: hindigyanghar,
    source_code_link: "https://github.com/SakshamRajpal/HindiGyanGhar",
    live_demo_link: "https://hindigyanghar.netlify.app/",
  },
  {
    name: "Unichat",
    description:
      "Designed Unichat, an advanced real-time messaging application using React.js, Firebase, and Stream Chat services by integrated Stream Chat API for real-time messaging, including user channels, media sharing and message synchronization.  ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "streamchat",
        color: "pink-text-gradient",
      },
    ],
    image: unichat,
    source_code_link: "https://github.com/SakshamRajpal/Unichat",
    live_demo_link: "https://unichatbysaksham.netlify.app/",
  },
  {
    name: "QuickBite",
    description:
      "Developed a full-stack Food-ordering website with React.js as the frontend and designed ExpressJS based ordering system for smooth cart management, item addition/removal, and quantity updates. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: quickbite,
    source_code_link: "https://github.com/SakshamRajpal/FoodOrder-Project",
  }
];

const socialImgs = [
  {
    name: "x",
    imgPath: x,
    link: "",
  },
  {
    name: "linkedin",
    imgPath: linkedin,
    link: "https://www.linkedin.com/in/saksham-rajpal-63025622b/",
  },
  {
    name: "github",
    imgPath: github,
    link: "https://github.com/SakshamRajpal",
  },
];

export { services, technologies, experiences, projects, socialImgs };
