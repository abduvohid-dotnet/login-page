const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");
const page = document.getElementById("pageBody");
const scrollBtn = document.getElementById("scroll-top");


function applyTheme(theme) {
    if (theme === "dark") {
        page.classList.add("dark");
        document.documentElement.classList.add("dark");
        darkBtn.classList.add("hidden");
        lightBtn.classList.remove("hidden");
    } else {
        page.classList.remove("dark");
        document.documentElement.classList.remove("dark");
        lightBtn.classList.add("hidden");
        darkBtn.classList.remove("hidden");
    }
}

// Load theme from localStorage
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
});

darkBtn.addEventListener("click", () => {
    applyTheme("dark");
    localStorage.setItem("theme", "dark");
});

lightBtn.addEventListener("click", () => {
    applyTheme("light");
    localStorage.setItem("theme", "light");
});

// Scroll to top button

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.remove("hidden");
    } else {
        scrollBtn.classList.add("hidden");
    }
});

scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

