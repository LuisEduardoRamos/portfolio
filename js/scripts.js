// Theme toggle functionality
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// Check for saved theme preference or respect OS preference
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  body.classList.add("dark-theme");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});

// Language toggle functionality
const langToggle = document.querySelector(".lang-toggle");
let currentLang = "en";

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  langToggle.textContent = currentLang === "en" ? "ES" : "EN";
  updateLanguage(currentLang);
});

function updateLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach((element) => {
    if (lang === "en") {
      element.textContent = element.getAttribute("data-en");
    } else {
      element.textContent = element.getAttribute("data-es");
    }
  });
}

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
