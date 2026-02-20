export function contactTab() {
    const container = document.createElement("div");
    container.classList.add("container");

    const contactsHeading = document.createElement("div");
    contactsHeading.classList.add("heading-container");
    const headingTextCard = document.createElement("div");
    headingTextCard.classList.add("heading-text-card");
    const heading = document.createElement("h1");
    heading.textContent = "Contact";

    headingTextCard.append(heading);
    contactsHeading.append(headingTextCard);

    const card = document.createElement("div");
    const detailsCard = document.createElement("div");
    const phoneHeading = document.createElement("h3");
    phoneHeading.textContent = "Phone Number";
    const number = document.createElement("p");
    number.textContent = "+61 23 456 789";
    const emailHeading = document.createElement("h3");
    emailHeading.textContent = "Email";
    const email = document.createElement("p");
    email.textContent = "firehorserestaurant@totallyreal.com";

    detailsCard.append(phoneHeading, number, emailHeading, email);
    card.append(detailsCard);
    container.append(contactsHeading, card);
    return container;
}