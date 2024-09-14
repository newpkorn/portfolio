import ToDoApp from "../assets/projects/ToDoApp.jpg";
import KOnlineShop from "../assets/projects/K-Online-Shop.jpg";
import Portfolio from "../assets/projects/Portfolio1.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my expertise in front-end technologies like React and Tailwind, while also gaining experience in back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my knowledge to create innovative, user-centric solutions that enhance business growth and deliver exceptional digital experiences.`;

export const ABOUT_TEXT = `I am an experienced IT Engineer with a robust background in Information Technology Support, excelling in technical support, system maintenance, and web application support. My expertise includes incident management, leadership, and hands-on experience with technologies such as MS SQL Server, ASP, VB, JavaScript, XML, HTML, and CSS. Additionally, I specialize in providing DWP Client Services (hardware break-fix) and support for the Siemens SiPass Integrated System (access control system).<br /><br />Though my primary experience is in infrastructure, my role in supporting web applications has given me valuable exposure to web development. Over the years, I have developed a strong passion for creating efficient and user-friendly applications and have learned and gained proficiency in technologies such as React, Node.js, MySQL, and MongoDB. I thrive in collaborative environments and continuously strive to learn and solve complex problems. My journey in IT reflects my dedication to growth and innovation, both professionally and personally.`;

export const EXPERIENCES = [
  {
    year: "2019 - 2022",
    role: "Junior Consultant",
    company: "Atos IT Solutions and Services Limited",
    description: `Job Role: IT Engineer<br />Maintained and supported web applications using technologies such as MS SQL Server, ASP, VB, JavaScript, XML, HTML, and CSS. Additionally, provided support for DWP Client Services (hardware break-fix), Siemens SiPass Integrated (access control system), and PKI certificate management.`,
    skills: ["Javascript", "HTML", "CSS ", "MSSQL SERVER"],
  },
  {
    year: "2016 - 2019",
    role: "IT Support",
    company: "Pro One IT Co. Ltd",
    description: `Onsite IT Support at Atos IT Solutions and Services Limited, supporting Siemens Thailand. Provided comprehensive onsite support for computer hardware and software, including setup, configuration, and troubleshooting. Assisted end-users with technical issues, managing support requests via phone, email, and in-person interactions. Ensured timely and professional resolution of support tickets by documenting and tracking issues in a service desk database.`,
    skills: ["Active Directory", "ServiceNow", "SCCM", "GPO"],
  },
  {
    year: "2015 - 2016",
    role: "IT Infrastructure Support",
    company: "Wishwon Info",
    description: `Employed through Wishwon Info, providing onsite infrastructure support at General Electric (GE). Delivered first-level support for hardware, software, and peripherals, including setting up email accounts, profiles, and configuring IT equipment. Provided onsite, remote, and phone support, troubleshooting system and infrastructure issues. Managed and maintained IT infrastructure, supervised the helpdesk team, and monitored IT requisition workflows. Regularly reported to the IT leader.`,
    skills: ["ServiceNow", "IP Phone", "IT Workflow", "Hardware Break-fix"],
  },
  {
    year: "2014 - 2015",
    role: "Help Desk Support",
    company: "Professional One",
    description: `Employed through Professional One, provided onsite support at DHL Express Thailand Head Office. Managed customer inquiries via phone, in-person, and applications, and routed cases to appropriate teams. Registered and maintained the DHL eCom tool, educated customers on Air Waybill documents, and coordinated data verification. Provided remote support, installed and configured shipping applications, and maintained PC hardware and software. Regularly reported to the IT Head.`,
    skills: ["Problem-solving,", "Customer Service", "Time Management"]
  },
  {
    year: "2013 - 2014",
    role: "Help Desk Operator",
    company: "TOT Outsourcing Service Company Limited",
    description: `Handled customer phone inquiries, analyzed and resolved TOT internet issues, and troubleshot basic ADSL signal problems. Provided end-user support for modem settings, resets, DNS fixes, and IP WAN checks. Collaborated with technicians to resolve issues, offered services for TOT products, and presented these products to customers.`,
    skills: ["Basic Network", "Problem-solving,", "Customer Service"]
  },
];

export const PROJECTS = [
  {
    title: "To Do App Web",
    image: ToDoApp,
    description:
      "A To-Do List Application built using Python Flask and SQLite allows users to manage tasks efficiently. The project involves creating a web app where users can add, edit, update, and delete task lists (cards) and items (checklist) within each card.",
    skills: ["HTML", "CSS", "Bootstrap", "Python", "Flask", "SQLite"],
  },
  {
    title: "K Online Shop",
    image: KOnlineShop,
    description:
      "An application built with Node.js, EJS, and MongoDB. It features a CRUD system for managing both products and employees, allowing users to create, read, update, and delete entries for each.",
    skills: ["HTML", "CSS", "ejs", "NodeJs", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    skills: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    skills: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Bangkok, Thailand ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
