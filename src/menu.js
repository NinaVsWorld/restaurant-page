export function menuTab() {
    const container = document.createElement("div");
    container.classList.add("container");

    const menuHeading = document.createElement("div");
    menuHeading.classList.add("heading-container");
    const headingTextCard = document.createElement("div");
    headingTextCard.classList.add("heading-text-card");
    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    headingTextCard.appendChild(heading);
    menuHeading.appendChild(headingTextCard);

    const dishes = document.createElement("div");

    // Dish 1
    const card1 = document.createElement("div");
    const textCard1 = document.createElement("div");
    const name1 = document.createElement("h3");
    name1.textContent = "Bánh chưng";
    const info1 = document.createElement("p");
    info1.textContent = "Iconic to Tết celebrations, Bánh chưng is made from sticky rice, mung beans and pork.";
    const price1 = document.createElement("p");
    price1.textContent = "$25";
    // append img here
    textCard1.append(name1, info1, price1);
    card1.append(textCard1);

    // Dish 2
    const card2 = document.createElement("div");
    const textCard2 = document.createElement("div");
    const name2 = document.createElement("h3");
    name2.textContent = "Bánh tét";
    const info2 = document.createElement("p");
    info2.textContent = "Another Tết must-have, Bánh tét is a cylindrical, log-shape sticky rice cake consisting of mung beans and pork."
    const price2 = document.createElement("p");
    price2.textContent = "$25";
    // append img here
    textCard2.append(name2, info2, price2);
    card2.append(textCard2);

    // Dish 3
    const card3 = document.createElement("div");
    const textCard3 = document.createElement("div");
    const name3 = document.createElement("h3");
    name3.textContent = "Nem rán";
    const info3 = document.createElement("div");
    info3.textContent = "Traditional Vietnamese deep-fried spring rolls, can be enjoyed as an appetizer or a main meal.";
    const price3 = document.createElement("p");
    price3.textContent = "$8";
    // append img here
    textCard3.append(name3, info3, price3);
    card3.append(textCard3);

    // Dish 4
    const card4 = document.createElement("div");
    const textCard4 = document.createElement("div");
    const name4 = document.createElement("h3");
    name4.textContent = "Canh khổ qua nhồi thịt";
    const info4 = document.createElement("p");
    info4.textContent = "Stuffed bitter melon soup is made by filling bitter melons with a mixture of ground beef, pork, fish, mushrooms and spices.";
    const price4 = document.createElement("p");
    price4.textContent = "$15";
    // append img here
    textCard4.append(name4, info4, price4);
    card4.append(textCard4);

    // Dish 5
    const card5 = document.createElement("div");
    const textCard5 = document.createElement("div");
    const name5 = document.createElement("h3");
    name5.textContent = "Gà luộc";
    const info5 = document.createElement("p");
    info5.textContent = "Boiled chicken is a Lunar New Year staple, representing wholeness. Enjoy it with lime leaves, salt, and pepper";
    const price5 = document.createElement("p");
    price5.textContent = "$20";
    // append img here
    textCard5.append(name5, info5, price5);
    card5.append(textCard5);

    // Dish 6
    const card6 = document.createElement("div");
    const textCard6 = document.createElement("div");
    const name6 = document.createElement("h3");
    name6.textContent = "Mứt";
    const info6 = document.createElement("p");
    info6.textContent = "Candied fruits including coconut, ginger, lotus seed, and tomato. This dessert represents luck and prosperity for the upcoming year.";
    const price6 = document.createElement("p");
    price6.textContent = "$20";
    // append img here
    textCard6.append(name6, info6, price6);
    card6.append(textCard6);

    dishes.append(card1, card2, card3, card4, card5, card6);

    container.append(menuHeading, dishes);
    return container;
}