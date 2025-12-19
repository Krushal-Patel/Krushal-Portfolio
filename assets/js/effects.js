/* TYPING EFFECT */
const typingEl = document.getElementById("typing-text");
if (typingEl) {
  const texts = [
    "Web Developer with simple fundamentals in Python | Django | ML.",
    "Exploring DevOps, Cloud Computing, and scalable systems.",
    "Interested in Computer Networks & backend architecture.",
    "Learning how real-world systems work, not just tools.",
    "Focused on clean design, performance, and problem-solving."
  ];


  let t = 0, c = 0;

  function type() {
    if (c < texts[t].length) {
      typingEl.textContent += texts[t][c++];
      setTimeout(type, 60);
    } else setTimeout(erase, 1500);
  }

  function erase() {
    if (c > 0) {
      typingEl.textContent = texts[t].slice(0, --c);
      setTimeout(erase, 40);
    } else {
      t = (t + 1) % texts.length;
      setTimeout(type, 400);
    }
  }

  window.addEventListener("load", type);
}

/* CURSOR GLOW */
const glow = document.getElementById("cursor-glow");
if (glow) {
  document.addEventListener("mousemove", e => {
    glow.style.opacity = "1";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

/* SCROLL PROGRESS */
const bar = document.getElementById("scroll-progress");
if (bar) {
  window.addEventListener("scroll", () => {
    const h =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    bar.style.width = `${(scrollY / h) * 100}%`;
  });
}
