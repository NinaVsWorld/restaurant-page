import { homeTab } from "./home.js";

// Placeholder function for initial page load
export function initialLoad() {
    const content = document.querySelector("#content");
    content.appendChild(homeTab());
}