// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import intellijLogo from './assets/tech_logo/IntelliJ IDEA.png'

// Experience Section Logo's
import robokartLogo from './assets/company_logo/robokart_logo.jpeg';
import lrLogo from './assets/company_logo/lr_logo.jpeg';

// Education Section Logo's
import vivaLogo from './assets/education_logo/viva_logo.png';
import srtLogo from './assets/education_logo/srt_logo.jpeg';
import lrlogo from './assets/education_logo/lr_logo.png';

// Project Section Logo's
import ecommLogo from './assets/work_logo/ecomm_logo.png';
import hotelLogo from './assets/work_logo/hotel-detail.png';
import taskproLogo from './assets/work_logo/tasks.png';
import todoLogo from './assets/work_logo/todo.png';
import passwordLogo from './assets/work_logo/password_gen.png';
import currencyLogo from './assets/work_logo/currency_con.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
     
     
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
  
    ],
  },
  {
    title: 'Languages',
    skills: [
     
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      {name :"IntelliJ IDEA", logo: intellijLogo},
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },

    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: robokartLogo,
      role: "Robotics Trainer Intern",
      company: "Robokart",
      date: "sep 2025 - oct 2025",
      desc: "Conducted Robotics & IoT training programs in collaboration with GUJCOST, guiding students in Arduino-based real-time projects. Delivered workshops across institutions while strengthening leadership and communication skills.",
      skills: [
        "Arduino", 
        "IDE", 
        "Internet of Things (IoT)",
        "Technical Training", 
        "Public Speaking", 
        "C++"
      ],
    },
    {
      id: 1,
      img: lrLogo,
      role: "Web Development Intern",
      company: "Shree L. R. Tiwari College of Engineering.",
      date: "December 2023 - January 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "HTML",
        "CSS",
        "Web Development",
        "Front-End Development"
      ],
    },
  ];
  
  export const education = [
    
    {
      id: 0,
      img: lrlogo,
      school: "Shree L. R. Tiwari College of Engineering, Mumbai",
      date: "June 2022 -  Present",
      grade: "6.5 CGPA",
      desc:  "I am currently pursuing my Bachelor's degree in Information Technology from Shree L. R. Tiwari College of Engineering, Mumbai. Throughout my academic journey, I have built a strong foundation in  Web Development, and Database Management Systems. Alongside academics, I actively develop full-stack applications using the MERN stack and Java, applying theoretical knowledge to real-world software projects",
      degree: "BE- IT (Information Technology)",
    },
    {
      id: 1,
      img: vivaLogo,
      school: "Viva College, Virar, Maharashtra",
      date: "Apr 2021 - March 2022",
      grade: "63%",
      desc: "I completed my Higher Secondary education (XII) from Viva College, Virar, with Physics, Chemistry, Mathematics, and Computer Science. During this time, I developed a strong interest in programming and problem-solving, which laid the foundation for my journey in the field of Information Technology..",
      degree: "(XII) PCM with Computer Science",
    },
    {
      id: 2,
      img: srtLogo,
      school: "S.R.T Vidya Mandir High School, Virar, Maharashtra",
      date: "June 2019 - May 2020",
      grade: "82%",
      desc: "I completed my class 10 education from S.R.T Vidya Mandir High School,virar ,Maharashtra, where I studied a comprehensive curriculum that laid the foundation for my academic journey.",
      degree: "(X) SSC",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "KrishCart - E-Commerce Website",
      description:
        " Developed a full-stack e-commerce platform with JWT-based user authentication. implemented a secure backend using Express.js, Bcrypt password hashing, and MongoDB with Mongoose ODM. Built a responsive frontend using React and Context API for global state management. Integrated RESTful APIs with Axios and configured CORS-enabled Express server",
      image: ecommLogo,
      tags: ["ReactJS", "Node.js", "Express.js", "MongoDB", "JWT", "Mongoose ODM", "Bcrypt", "Axios", "CORS"],
      github: "https://github.com/Krishnayadav1908/E-Commerce-Website",
      webapp: "https://krishcart.netlify.app/",
    },
    {
      id: 1,
      title: "Hotel Booking Platform",
      description:
        "Developed hotel booking platform with Firebase Authentication and Firestore for real-time data management.  Integrated Leaflet maps with geolocation for interactive hotel location visualization. Built bookmark & booking system with complete CRUD operations using Context API. Implemented protected routes, custom hooks, and dark/light mode for enhanced UX",
      image: hotelLogo,
      tags: ["React JS", "Firebase", "Leaflet Maps", "Context API", "Protected Routes", "Custom Hooks"],
      github: "https://github.com/Krishnayadav1908/hotel-booking-platform",
      webapp: "https://hotel-booking-platform.netlify.app/",
    },
    {
      id: 2,
      title: "TaskPro - Full Stack Task Manager",
      description:
        "TaskPro is a modern, full-stack SaaS-style task management application built for productivity and demonstration purposes.It features secure authentication, a responsive dashboard, task CRUD operations, profile management, and a clean UI inspired by professional SaaS platforms.",
      image: taskproLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express.js", "JavaScript","JWT Authentication", "bcrypt",],
      github: "https://github.com/Krishnayadav1908/taskpro-task-manager",
      webapp: "https://taskpro-task-manager.vercel.app/",
    },
    {
      id: 3,
      title: "Todo App",
      description:
        "React Todo App with CRUD, Context API, Tailwind, and persistent storage . Clean, modern Todo app built in React with state management and responsive UI. Features include task creation, editing, deletion, and completion tracking. Utilizes Context API for global state management and Tailwind CSS for styling. Data is persisted in local storage for a seamless user experience.",
      image: todoLogo,
      tags: ["React JS", "Context API", "Tailwind CSS", "CRUD Operations", "Local Storage"],
      github: "https://github.com/Krishnayadav1908/smart-todo",
      webapp: "https://smart-todo.netlify.app/",
    },
    {
      id: 4,
      title: "Password Generator ",
      description:
        "This project is a customizable Password Generator application that allows users to generate secure passwords with a length ranging from 6 to 100 characters. Users can choose to include numbers and special characters based on their requirements. The password updates in real-time as options are modified and can be copied instantly to the clipboard using a dedicated button. The application is built using React with hooks such as useState, useEffect, useRef, and useCallback, and features a modern, stylish, and responsive UI designed with Tailwind CSS.",
      image: passwordLogo,
      tags: ["JavaScript", "React JS", "Tailwind CSS", "custom hooks",],
      github: "https://github.com/Krishnayadav1908/Password-Genrator",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Currency Converter",
      description:
        "A responsive Currency Converter app that enables instant currency conversion with swap functionality. Built using reusable components and a custom React hook for fetching real-time data, featuring a clean and modern UI designed with Tailwind CSS.",
      image: currencyLogo,
      tags: [ "JavaScript", "React JS", "Tailwind CSS", "Custom Hooks", "API Integration"],
      github: "https://github.com/Krishnayadav1908/Currency-Convertor",
      webapp: "https://webversedigital.com/",
    }
  ];  