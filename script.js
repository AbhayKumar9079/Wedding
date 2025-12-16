// Generate many floating hearts on hero section
const heartArea = document.querySelector('.hearts-container');

for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.textContent = "❤";

    heart.style.left = Math.random() * 95 + "%";
    heart.style.top = Math.random() * 95 + "%";
    heart.style.animationDelay = (Math.random() * 2) + "s";

    heartArea.appendChild(heart);
}
 const menuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", () => {
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }
    });

function updateCountdown() {
    const target = new Date("2026-11-12T18:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) return;

    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor(diff / (1000 * 60 * 60) % 24);
    document.getElementById("minutes").innerText = Math.floor((diff / (1000 * 60)) % 60);
    document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();

const boxes = document.querySelectorAll('.event-box');
const cards = document.querySelectorAll('.detail-card');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        let id = box.getAttribute('data-card');

        cards.forEach(c => c.classList.remove('show'));
        document.getElementById(id).classList.add('show');
    });
});