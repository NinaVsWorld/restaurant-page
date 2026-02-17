export { createItem, createPara }

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
    const currently = document.createElement("p");
    currently.textContent = "Currently:"
    const currentlyList = document.createElement("ul");
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