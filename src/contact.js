export function contactTab() {
    const container = document.createElement("div");
    container.classList.add("contacts");

    const contacts = document.createElement("h1");
    contacts.textContent = "Contacts";

    const links = document.createElement("ul");
    const link1 = createLink('https://github.com/NinaVsWorld', 'GitHub');
    const link2 = createLink('www.linkedin.com/in/nina-nguyen-723b67275', 'LinkedIn');
    const link3 = createEmail('ninaneena6@gmail.com', 'Electronic pigeon');
    links.appendChild(link1);
    links.appendChild(link2);
    links.appendChild(link3);

    container.appendChild(contacts);
    container.appendChild(links);
    return container;
}

const createLink = (link, text) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link;
    a.textContent = text;
    li.appendChild(a);
    return li;
}

const createEmail = (email, text) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `mailto:${email}`;
    a.textContent = text;
    li.appendChild(a);
    return li;
}