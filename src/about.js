export function aboutTab() {
    const container = document.createElement("div");
    container.classList.add("about-container");
    const text = document.createElement("div");
    text.classList.add("inner-container");

    const aboutMe = document.createElement("h1");
    aboutMe.textContent = "About Me";

    const bio1 = createPara(`Hello world, I'm Nina, an Advanced Computing student
        at the Australian National University. I didn't always know that computing was the path
        that I wanted to take - in fact, I spent a long time unsure of what I wanted to do,
        often second-guessing myself and battling imposter syndrome along the way.`);
    const bio2 = createPara(`During my gap year, I found myself continually being drawn to the creativity that
        computing offers and decided to dive in head first. What began with uncertainty has grown into 
        genuine enthusiasm. I’m now deeply enjoying my studies and embracing the challenge of continuously 
        learning and improving as a developer. Get to know me a little better below!`);

    // Likes list
    const likesSection = document.createElement("div");
    likesSection.classList.add("likes");
    const likes = createPara("Things I enjoy:");
    const likesList = document.createElement("ul");
    const likeItem1 = createItem("Programming! (Most of the time)");
    const likeItem2 = createItem("Travelling around the world (just need more money!)");
    const likeItem3 = createItem("Sleeping in");
    likesList.appendChild(likeItem1);
    likesList.appendChild(likeItem2);
    likesList.appendChild(likeItem3);
    likesSection.appendChild(likes);
    likesSection.appendChild(likesList);

    // Things I'm currently doing
    const currentlySection = document.createElement("div");
    currentlySection.classList.add("currently");
    const currently = createPara("Currently:");
    const currentlyList = document.createElement("ul");
    const currentItem1 = createItem("Hanging out with my dog");
    const currentItem2 = createItem("Enjoying 'Vicious Creature' by Lauren Mayberry");
    const currentItem3 = createItem("Expanding my skills in JavaScript and web development");
    currentlyList.appendChild(currentItem1);
    currentlyList.appendChild(currentItem2);
    currentlyList.appendChild(currentItem3);
    currentlySection.appendChild(currently);
    currentlySection.appendChild(currentlyList);

    container.appendChild(aboutMe);
    text.appendChild(bio1);
    text.appendChild(bio2);
    text.appendChild(likesSection);
    text.appendChild(currentlySection);
    container.appendChild(text);
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