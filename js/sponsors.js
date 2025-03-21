document.addEventListener("DOMContentLoaded", () => {
    fetch("sponsors1.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("sponsors-container");
            if (!container) {
                console.error("Sponsors container not found!");
                return;
            }

            data.sponsors.forEach(sponsor => {
                const sponsorCard = document.createElement("div");
                sponsorCard.classList.add("sponsor-card");

                sponsorCard.innerHTML = `
                    <img src="${sponsor.image}" alt="${sponsor.name}">
                    <h2 class="sponsor-title">${sponsor.name}</h2>
                    <p class="sponsor-description">${sponsor.description}</p>
                `;

                container.appendChild(sponsorCard);
            });
        })
        .catch(error => console.error("Error loading sponsors:", error));
});
