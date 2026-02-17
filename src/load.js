export { initialLoad };
import { homeTab } from "./home.js";

// Placeholder function for initial page load
const initialLoad = () => {
    const content = document.querySelector("#content");
    content.appendChild(homeTab());
}