/* SCROLL REVEAL */
const revealElements = document.querySelectorAll("section, header");
revealElements.forEach(el => el.classList.add("hidden"));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

revealElements.forEach(el => revealObserver.observe(el));

/* STAGGER PROJECT CARDS */
document.querySelectorAll(".project-card").forEach((card, i) => {
  card.classList.add("stagger");
  card.style.transitionDelay = `${i * 120}ms`;
});

/* PARALLAX HERO */
const hero = document.getElementById("home");
if (hero) {
  window.addEventListener("scroll", () => {
    hero.style.transform = `translateY(${window.scrollY * 0.05}px)`;
  });
}
