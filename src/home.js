export function homeTab() {
    // Container for cards
    const container = document.createElement("div");
    container.classList.add("container");
    const restaurantName = document.createElement("div");
    restaurantName.classList.add("heading-container");
    const headingTextCard = document.createElement("div");
    headingTextCard.classList.add("heading-text-card");
    const heading = document.createElement("h1");
    heading.textContent = "Fire Horse restaurant";

    headingTextCard.append(heading);
    restaurantName.append(headingTextCard);

    // Testimonial, hours, location card
    const card1 = document.createElement("div");
    card1.classList.add("testimonial");
    const card2 = document.createElement("div");
    card2.classList.add("hours");
    const card3 = document.createElement("div");
    card3.classList.add("location");

    // Testimonial, hours, location text card
    const textCard1 = document.createElement("div");
    textCard1.classList.add("text-card");
    const textCard2 = document.createElement("div");
    textCard2.classList.add("hours-text");
    const textCard3 = document.createElement("div");
    textCard3.classList.add("location-text");

    // Testimonial
    const review = document.createElement("p");
    review.classList.add("review");
    review.textContent = "Bánh Chưng? Devoured. Bánh Tét? Devoured. The place to be celebrate Tết like a champ."

    const customer = document.createElement("p");
    customer.textContent = "- Fire Horse";

    textCard1.append(review, customer);
    card1.append(textCard1);

    // Hours - add more later
    const hoursHeading = document.createElement("h3");
    const hours = document.createElement("ul");
    hours.append(createListItem("Sunday: 12pm - 11pm"), createListItem("Monday: 12pm - 11pm"));

    textCard2.append(hoursHeading, hours);
    card2.append(textCard2);

    // Location
    const addressHeading = document.createElement("h3");
    const address = document.createElement("address");

    textCard3.append(addressHeading, address);
    card3.append(textCard3);

    container.append(restaurantName, card1, card2, card3);
    return container;
}

const createListItem = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
}