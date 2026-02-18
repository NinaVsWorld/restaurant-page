export function aboutTab() {
    const container = document.createElement("div");
    
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