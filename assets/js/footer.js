// Footer ko dynamically load karne ke liye
fetch("/components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch(error => {
    console.error("Footer load error:", error);
  });
