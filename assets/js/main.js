/* SMOOTH SCROLL */
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* SCROLL REVEAL */
const elements = document.querySelectorAll("section, header");
elements.forEach(el => el.classList.add("hidden"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

/* TYPING EFFECT */
const texts = [
  "I build modern web experiences.",
  "Focused on clean design.",
  "Learning every day."
];

let t = 0, c = 0;
const typing = document.getElementById("typing-text");

function type() {
  if (c < texts[t].length) {
    typing.textContent += texts[t][c++];
    setTimeout(type, 60);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (c > 0) {
    typing.textContent = texts[t].slice(0, --c);
    setTimeout(erase, 40);
  } else {
    t = (t + 1) % texts.length;
    setTimeout(type, 400);
  }
}

window.onload = type;

/* ACTIVE NAV */
window.addEventListener("scroll", () => {
  let current = "";
  elements.forEach(el => {
    if (scrollY >= el.offsetTop - 150) {
      current = el.id;
    }
  });

  document.querySelectorAll(".navbar a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

/* ===============================
   PHASE 3: STAGGER REVEAL (CARDS)
================================ */

// project cards ko stagger class do
const cards = document.querySelectorAll(".project-card");
cards.forEach((card, i) => {
  card.classList.add("stagger");
  card.style.transitionDelay = `${i * 120}ms`;
});

/* ===============================
   PHASE 3: PARALLAX-LIKE HERO
================================ */

const hero = document.getElementById("home");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  // subtle movement only (mobile-safe)
  hero.style.transform = `translateY(${y * 0.05}px)`;
});

/* ===============================
   PHASE 4: CURSOR GLOW LOGIC
================================ */

const glow = document.getElementById("cursor-glow");

if (glow) {
  document.addEventListener("mousemove", e => {
    glow.style.opacity = "1";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  document.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
}

/* ===============================
   PHASE 5: SCROLL PROGRESS LOGIC
================================ */

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + "%";
});

