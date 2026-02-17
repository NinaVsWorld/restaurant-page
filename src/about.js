export function aboutTab() {
    const container = document.createElement("div");
    container.classList.add("container");

    const aboutMe = document.createElement("h1");
    aboutMe.textContent = "About Me";

    const bio = createPara("Hello world, I'm a computer science student ... blah");

    // Likes list
    const likesSection = document.createElement("div");
    likesSection.classList.add("likes");
    const likes = createPara("Things I enjoy:");
    const likesList = document.createElement("ul");
    const likeItem1 = createItem("Beef");
    likesList.appendChild(likeItem1);
    likesSection.appendChild(likes);
    likesSection.appendChild(likesList);

    // Things I'm currently doing
    const currentlySection = document.createElement("div");
    currentlySection.classList.add("currently");
    const currently = createPara("Currently:");
    const currentlyList = document.createElement("ul");
    const currentItem1 = createItem("Expanding my skills in JavaScript and web development");
    currentlyList.appendChild(currentItem1);
    currentlySection.appendChild(currently);
    currentlySection.appendChild(currentlyList);

    container.appendChild(aboutMe);
    container.appendChild(bio);
    container.appendChild(likesSection);
    container.appendChild(currentlySection);
    return container;
}

const createItem = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
}

const createPara = (text) => {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

export { createItem, createPara }