// TechIntegrity AD System

fetch('https://database.techintegrity.hu/static/ads/petition.html') // Current ad
    .then(response => response.text())
    .then(data => {
    document.getElementById('current-ad').innerHTML = data;
});