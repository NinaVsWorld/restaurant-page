import meImg from "./images/pfp.jpeg";
import { createItem, createPara } from "./about.js";

export function homeTab() {
    const container = document.createElement("div");
    container.classList.add("about");

    // Box 1
    const textBody = document.createElement("div");
    textBody.classList.add("text-body");

    const heading = createPara("Hi, I'm Nina");
    //heading.textContent = "Hi, I'm Nina";

    const introBody = createPara("blah blah blah");
    //introBody.textContent = "blah blah blah";

    textBody.appendChild(heading);
    textBody.appendChild(introBody);

    // Box 2
    const img = document.createElement("img");
    img.src = meImg;
    img.alt = "a placeholder img";
    headshot.appendChild(img);

    container.appendChild(textBody);
    container.appendChild(img);
    
    return container;
}