// TechIntegrity AD System

document.addEventListener("DOMContentLoaded", () => {
    fetch('https://database.techintegrity.hu/static/ads/petition.html') // Current ad
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById('current-ad');
            if (container) {
                container.innerHTML = data;
            }
        })
        .catch(error => console.error("Hiba a reklám betöltésekor:", error)
    );
});
