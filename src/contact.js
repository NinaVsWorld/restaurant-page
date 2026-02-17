export function contactTab() {
    const container = document.createElement("div");
    container.classList.add("contacts");

    const contacts = document.createElement("h1");
    contacts.textContent = "Contacts";

    const links = document.createElement("ul");
    const link1 = createLink('https://github.com/NinaVsWorld', 'GitHub', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>');
    const link2 = createLink('https://linkedin.com/in/nina-nguyen-723b67275', 'LinkedIn', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg>');
    const link3 = createEmail('ninaneena6@gmail.com', 'Electronic pigeon', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-heart-outline</title><path d="M10 9C8.9 9 8 9.92 8 11.05C8 11.62 8.22 12.12 8.59 12.5L12 16L15.42 12.5C15.78 12.13 16 11.61 16 11.05C16 9.92 15.1 9 14 9C13.46 9 12.95 9.23 12.59 9.6L12 10.2L11.42 9.61C11.05 9.23 10.54 9 10 9M20 4C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H20M16.7 8.06L20 6H4L7.3 8.06C6.89 8.45 6.55 8.92 6.33 9.45L4 8V18H20V8L17.67 9.45C17.45 8.92 17.11 8.45 16.7 8.06Z" /></svg>');
    links.appendChild(link1);
    links.appendChild(link2);
    links.appendChild(link3);

    container.appendChild(contacts);
    container.appendChild(links);
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