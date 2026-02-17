import { homeTab } from "./home.js";

const content = document.querySelector("#content");

// Placeholder function for initial page load
export function initialLoad() {
    content.appendChild(homeTab());
}

export { content };