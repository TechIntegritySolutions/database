// TechIntegrity AD System

const adUrl = 'https://database.techintegrity.hu/static/ads/petition.html';
const cssUrl = 'https://database.techintegrity.hu/static/css/ads/petition.css';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = cssUrl;
document.head.appendChild(link);

fetch(adUrl)
    .then(response => response.text())
    .then(data => {
        const container = document.getElementById('current-ad');
        if (container) {
            container.innerHTML = data;
            const panel = document.getElementById('ti-peticio-panel');
            const closeBtn = document.getElementById('ti-peticio-close');
            const triggerBtn = document.getElementById('ti-peticio-trigger');

            if (panel && closeBtn && triggerBtn) {
                closeBtn.addEventListener('click', () => {
                    panel.classList.add('is-hidden');
                    triggerBtn.classList.add('is-visible');
                });
                triggerBtn.addEventListener('click', () => {
                    panel.classList.remove('is-hidden');
                    triggerBtn.classList.remove('is-visible');
                });
            }
        } else {
            console.warn("TechIntegrity AD: Nem található a 'current-ad' konténer a DOM-ban.");
        }
    })
    .catch(error => console.error("Hiba a reklám betöltésekor:", error)
);