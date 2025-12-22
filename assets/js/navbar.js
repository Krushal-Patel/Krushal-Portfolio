fetch("/components/navbar.html")
  .then(res => res.text())
  .then(html => {
    const container = document.getElementById("navbar-container");
    if (!container) {
      console.error("navbar-container not found");
      return;
    }

    container.innerHTML = html;

    const toggle = document.getElementById("mobile-menu-toggle");
    const menu = document.getElementById("nav-links");

    if (!toggle || !menu) {
      console.error("toggle or menu missing");
      return;
    }

    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  })
  .catch(err => console.error("Navbar load error", err));
