// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Dynamic Year in Footer
document.getElementById('footerYear').textContent = new Date().getFullYear();

// Fade-up Animation on Scroll using Intersection Observer
const fadeUpElements = document.querySelectorAll('.fade-up');
const observerOptions = {
    threshold: 0.1
};

const fadeUpObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeUpElements.forEach(el => {
    fadeUpObserver.observe(el);
});