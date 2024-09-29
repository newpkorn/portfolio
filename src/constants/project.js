import ToDoApp from "../assets/projects/ToDoApp.jpg";
import KOnlineShop from "../assets/projects/K-Online-Shop.jpg";
import Portfolio from "../assets/projects/Portfolio.jpg";
import FoodDelivery from "../assets/projects/food-delivery.png";

export const PROJECTS = [
  {
    title: "Food Delivery",
    image: FoodDelivery,
    description:
      "The Food Delivery Frontend allows users to add and remove food items from the cart, with automatic price calculation. The website includes a filter feature that lets users sort food items by category. It also has a login page. The project is built using React, React Router Dom, HTML, CSS, and JavaScript.",
    skills: ["HTML", "CSS", "React", "React Router Dom"],
    demo: "https://newpk-food-delivery.netlify.app/",
  },
    {
      title: "To Do App",
      image: ToDoApp,
      description:
        "A To-Do List Application built using Python Flask and SQLite allows users to manage tasks efficiently. The project involves creating a web app where users can add, edit, update, and delete task lists (cards) and items (checklist) within each card.",
      skills: ["HTML", "CSS", "Bootstrap", "Python", "Flask", "SQLite"],
      demo: "http://13.212.106.160:5000/",
    },
    {
      title: "Online Store",
      image: KOnlineShop,
      description:
        "An application built with Node.js, EJS, and MongoDB. It features a CRUD system for managing both products and employees, allowing users to create, read, update, and delete entries for each.",
      skills: ["HTML", "CSS","Bootstrap", "ejs", "NodeJs", "Express", "MongoDB"],
      demo: "",
    },
    {
      title: "Portfolio Website",
      image: Portfolio,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      skills: ["HTML", "CSS", "React", "Tailwind", "EmailJS"],
      demo: "https://newpk.is-a.dev/",
    },
  ];