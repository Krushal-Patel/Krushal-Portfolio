function downloadResume() {
  const link = document.createElement("a");
  link.href = "/assets/resume/Resume.pdf";
  link.download = "Khunt_Krushal_Resume.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
