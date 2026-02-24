// Back to Top Button
document.querySelector(".back-to-top-button").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Soft Pastel Floating Stars
document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.querySelector(".stars-container");
    const starCount = 60;

    const pastelColors = [
        "#FFC0CB", "#FFD700", "#ADD8E6", "#FFE4E1", "#FFFACD", "#B0E0E6"
    ];

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 3 + 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        const duration = Math.random() * 30 + 20;
        star.style.animationDuration = `${duration}s`;

        const drift = (Math.random() * 100 - 50) + "px";
        star.style.setProperty('--drift', drift);

        const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        star.style.setProperty('--star-color', color);

        starsContainer.appendChild(star);
    }
});

// =========================
// SEARCH BAR SCROLL-TO FUNCTION
// =========================
const searchInput = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");

// Mapping keywords to section IDs
const sectionsMap = {
    "home": "home",
    "skills": "skills-section",
    "strengths": "strengths-section",
    "education": "education-section",
    "contact": "contact" // if you have a contact section later
};

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    if(sectionsMap[query]) {
        const target = document.getElementById(sectionsMap[query]);
        if(target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        alert("Section not found!");
    }
});