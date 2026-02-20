import "./style.css";
import { initialLoad, content } from "./load.js";
import { menuTab } from "./menu.js";
import { contactTab } from "./contact.js";

const body = document.querySelector("body");
initialLoad();

// Tab switching logic
body.addEventListener("click", (e) => {
    if (e.target.classList.contains("home")) {
        content.textContent = '';
        initialLoad();
    }
    if (e.target.classList.contains("menu")) {
        content.textContent = '';
        content.appendChild(menuTab());
    }
    if (e.target.classList.contains("contact")) {
        content.textContent = '';
        content.appendChild(contactTab());
    }
})