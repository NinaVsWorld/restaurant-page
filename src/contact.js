export function contactTab() {
    const container = document.createElement("div");
    return container;
}

const createLink = (link, text, img) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link;
    a.target = '_blank';
    a.textContent = text;
    const icon = document.createElement("div");
    icon.innerHTML = img;
    a.appendChild(icon);
    li.appendChild(a);
    return li;
}

const createEmail = (email, text, img) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `mailto:${email}`;
    a.textContent = text;
    const icon = document.createElement("div");
    icon.innerHTML = img;
    a.appendChild(icon);
    li.appendChild(a);
    return li;
}