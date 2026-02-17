import meImg from "./images/pfp.jpeg";

export function homeTab() {
    const container = document.createElement("div");
    container.classList.add("about");

    // Box 1
    const textBody = document.createElement("div");
    textBody.classList.add("text-body");

    const heading = document.createElement("p");
    heading.textContent = "Hi, I'm Nina";

    const introBody = document.createElement("p");
    introBody.textContent = "blah blah blah";

    textBody.appendChild(heading);
    textBody.appendChild(introBody);

    // Box 2
    const headshot = document.createElement("div");
    headshot.classList.add("headshot");
    const img = document.createElement("img");
    img.src = meImg;
    img.alt = "a placeholder img";
    headshot.appendChild(img);

    container.appendChild(textBody);
    container.appendChild(headshot);
    
    return container;
}