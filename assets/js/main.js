import "./base.js";
import "./animations.js";
import "./effects.js";


/* ===============================
   PAGE TRANSITION LOGIC
================================ */

document.querySelectorAll("a").forEach(link => {
  const url = link.getAttribute("href");

  // sirf internal links ke liye
  if (url && url.startsWith("/")) {
    link.addEventListener("click", e => {
      e.preventDefault();

      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = url;
      }, 300);
    });
  }
});
