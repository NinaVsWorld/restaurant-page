export function homeTab() {
    // Container for cards
    const container = document.createElement("div");
    container.classList.add("container");

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

    textCard1.appendChild(review);
    textCard1.appendChild(customer);
    card1.appendChild(textCard1);

    // Hours - add more later
    const hoursHeading = document.createElement("h3");
    const hours = document.createElement("ul");
    hours.appendChild(createListItem("Sunday: 12pm - 11pm"));
    hours.appendChild(createListItem("Monday: 12pm - 11pm"));

    textCard2.appendChild(hoursHeading);
    textCard2.appendChild(hours);
    card2.appendChild(textCard2);

    // Location
    const addressHeading = document.createElement("h3");
    const address = document.createElement("address");

    textCard3.appendChild(addressHeading);
    textCard3.appendChild(address);
    card3.appendChild(textCard3);

    container.appendChild(card1);
    container.appendChild(card2);
    container.appendChild(card3);
    return container;
}

const createListItem = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
}