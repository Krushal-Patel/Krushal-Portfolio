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

/* ACCORDION LOGIC */
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("active");
  });
});

/* ===============================
   PROJECT CASE STUDY TOGGLE
================================ */
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".toggle-case");
  if (!btn) return;

  const card = btn.closest(".project-card");
  if (!card) return;

  card.classList.toggle("active");

  btn.textContent = card.classList.contains("active")
    ? "Hide Case Study"
    : "View Case Study";
});/* 
download
 */

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/assets/resume/Resume.pdf";
  link.download = "Khunt_Krushal_Resume.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", () => {

  const emailBtn = document.getElementById("email-btn");
  const modal = document.getElementById("mail-reason-box");
  const cancelBtn = document.getElementById("mail-cancel");

  if (!emailBtn || !modal) {
    console.error("Mail elements not found");
    return;
  }

  // Open popup
  emailBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
  });

  // Close popup
  cancelBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Handle reason click
  modal.querySelectorAll("button[data-type]").forEach(btn => {
    btn.addEventListener("click", () => {

      const type = btn.dataset.type;
      let subject = "";
      let body = "";

      if (type === "internship") {
  subject = "Internship Opportunity – [Role / Domain] at [Company Name]";
  body =
    "Hello Krushal,%0D%0A%0D%0A" +
    "I came across your portfolio and was impressed by your learning approach and practical work.%0D%0A%0D%0A" +
    "We would like to connect with you regarding an internship opportunity with the following details:%0D%0A%0D%0A" +
    "Company Name: [Company Name]%0D%0A" +
    "Role / Domain: [Internship Role]%0D%0A" +
    "Duration: [e.g. 3 or 6 months]%0D%0A" +
    "Mode: [Remote / On-site / Hybrid]%0D%0A" +
    "Location: [City, Country]%0D%0A" +
    "Stipend: [Amount / Performance-based]%0D%0A" +
    "Start Date: [Expected Start Date]%0D%0A%0D%0A" +
    "If you are interested, please reply to this email so we can discuss the next steps.%0D%0A%0D%0A" +
    "Regards,%0D%0A" +
    "[Your Name]%0D%0A" +
    "[Your Designation]%0D%0A" +
    "[Company Name]";
}

if (type === "job") {
  subject = "Full-Time Opportunity – [Role] at [Company Name]";
  body =
    "Hello Krushal,%0D%0A%0D%0A" +
    "I reviewed your portfolio and found your skillset and problem-solving mindset quite impressive.%0D%0A%0D%0A" +
    "We would like to discuss a full-time opportunity with you. Below are the initial details:%0D%0A%0D%0A" +
    "Company Name: [Company Name]%0D%0A" +
    "Job Role: [Role Title]%0D%0A" +
    "Employment Type: Full-Time%0D%0A" +
    "Work Mode: [Remote / Hybrid / On-site]%0D%0A" +
    "Location: [City]%0D%0A" +
    "Compensation: [CTC / Salary Range]%0D%0A" +
    "Joining Timeline: [Immediate / Flexible]%0D%0A%0D%0A" +
    "Let us know your interest and availability for a discussion.%0D%0A%0D%0A" +
    "Regards,%0D%0A" +
    "[Your Name]%0D%0A" +
    "[Hiring Manager / HR]%0D%0A" +
    "[Company Name]";
}

if (type === "project") {
  subject = "Project Collaboration Opportunity – [Project Name]";
  body =
    "Hi Krushal,%0D%0A%0D%0A" +
    "I came across your portfolio while looking for someone to collaborate on a project.%0D%0A%0D%0A" +
    "We are currently working on a project with the following details:%0D%0A%0D%0A" +
    "Project Name: [Project Name]%0D%0A" +
    "Project Type: [Startup / Academic / Research / Product]%0D%0A" +
    "Expected Contribution: [Brief Description]%0D%0A" +
    "Duration: [Short-term / Long-term]%0D%0A" +
    "Collaboration Mode: [Remote / Hybrid]%0D%0A%0D%0A" +
    "If this sounds interesting, I would be happy to discuss it further.%0D%0A%0D%0A" +
    "Thanks & Regards,%0D%0A" +
    "[Your Name]%0D%0A" +
    "[Organization / Team Name]";
}

if (type === "other") {
  subject = "General Inquiry After Reviewing Your Portfolio";
  body =
    "Hello Krushal,%0D%0A%0D%0A" +
    "I recently reviewed your portfolio and wanted to reach out to connect.%0D%0A%0D%0A" +
    "I believe there could be an opportunity to discuss ideas, collaboration, or future possibilities.%0D%0A%0D%0A" +
    "Please let me know if you are open to a conversation.%0D%0A%0D%0A" +
    "Best Regards,%0D%0A" +
    "[Your Name]";
}

      window.location.href =
        `mailto:krushalkhunt12@gmail.com?subject=${subject}&body=${body}`;

      modal.classList.remove("active");
    });
  });

});


