fetch("/components/navbar.html")
  .then(res => res.text())
  .then(html => {
    const container = document.getElementById("navbar-container");
    if (!container) return;

    container.innerHTML = html;

    const toggle = document.getElementById("mobile-menu-toggle");
    const menu = document.getElementById("nav-links");
    const overlay = document.getElementById("nav-overlay");

    if (!toggle || !menu || !overlay) return;

    /* ===============================
       MENU TOGGLE (AS IT IS)
    ================================ */
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("active");
      overlay.classList.toggle("active", open);
      document.body.style.overflow = open ? "hidden" : "";
    });

    /* ===============================
       👉 NEW CONDITION: CLICK OUTSIDE
    ================================ */
    overlay.addEventListener("click", () => {
      if (!menu.classList.contains("active")) return;

      menu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });

    /* ===============================
       LINK CLICK = CLOSE
    ================================ */
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  })
  .catch(err => console.error("Navbar load error", err));
