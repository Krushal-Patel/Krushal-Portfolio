/* SMOOTH SCROLL (sirf same-page anchors ke liye) */
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

/* ACTIVE NAV (multi-page safe) */
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section, header");
  let current = "";

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 150) {
      current = sec.id;
    }
  });

  document.querySelectorAll(".navbar a").forEach(a => {
    a.classList.toggle("active", a.dataset.section === current);
  });
});
