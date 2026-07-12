alert("Welcome to my Portfolio!");
document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.getElementById("typing-text");

    const words = [
        "Data Analyst",
        "Web Developer",
        "UI/UX Designer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingText.textContent =
            currentWord.substring(0, charIndex);

        let speed = isDeleting ? 70 : 120;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

});
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
function toggleMode() {
    document.body.classList.toggle("light-mode");

    const modeBtn = document.querySelector(".mode-btn");

    if (document.body.classList.contains("light-mode")) {
        modeBtn.textContent = "☀️";
    } else {
        modeBtn.textContent = "🌙";
    }
}
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function(e) {
    cursorGlow.style.left = e.clientX - 12 + "px";
    cursorGlow.style.top = e.clientY - 12 + "px";
});
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.style.display = "none";
    }, 1500);
});