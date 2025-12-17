// Navbar ko dynamically load karne ke liye
fetch("/components/navbar.html")
  .then(response => response.text())
  .then(data => {
    // navbar inject
    document.getElementById("navbar-container").innerHTML = data;

    // active link set
    const currentPath = window.location.pathname;
    document.querySelectorAll(".navbar a").forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  })
  .catch(error => {
    console.error("Navbar load error:", error);
  });

  // Mobile hamburger toggle
document.addEventListener("click", e => {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");

  if (!toggle || !links) return;

  if (toggle.contains(e.target)) {
    links.classList.toggle("active");
  }

  // close menu when link clicked
  if (e.target.tagName === "A") {
    links.classList.remove("active");
  }
});
