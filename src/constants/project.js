import ToDoApp from "../assets/projects/ToDoApp.jpg";
import KOnlineShop from "../assets/projects/K-Online-Shop.jpg";
import Portfolio from "../assets/projects/Portfolio.jpg";

export const PROJECTS = [
    {
      title: "To Do App",
      image: ToDoApp,
      description:
        "A To-Do List Application built using Python Flask and SQLite allows users to manage tasks efficiently. The project involves creating a web app where users can add, edit, update, and delete task lists (cards) and items (checklist) within each card.",
      skills: ["HTML", "CSS", "Bootstrap", "Python", "Flask", "SQLite"],
    },
    {
      title: "K Online Store",
      image: KOnlineShop,
      description:
        "An application built with Node.js, EJS, and MongoDB. It features a CRUD system for managing both products and employees, allowing users to create, read, update, and delete entries for each.",
      skills: ["HTML", "CSS","Bootstrap", "ejs", "NodeJs", "Express", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      image: Portfolio,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      skills: ["HTML", "CSS", "React", "Tailwind", "EmailJS"],
    },
  ];