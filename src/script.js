import "./style.css";
import { initialLoad, content } from "./load.js";

const body = document.querySelector("body");
initialLoad();

// Tab switching logic
body.addEventListener("click", (e) => {
    if (e.target.classList.contains("home")) {
        content.textContent = '';
        initialLoad();
    }
    if (e.target.classList.contains("about")) {
        content.textContent = '';
        //content.appendChild(aboutTab());
    }
    if (e.target.classList.contains("projects")) {
        content.textContent = '';
        //content.appendChild(projectsTab());
    }
    if (e.target.classList.contains("contact")) {
        content.textContent = '';
        //content.appendChild(contactTab());
    }
})