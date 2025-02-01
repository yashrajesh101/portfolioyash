
	const toggleButton = document.getElementById("theme-toggle");
const body = document.getElementById("body");
const navbar = document.getElementById("navbar");

// Check localStorage for theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    navbar.classList.add(savedTheme === "bg-dark" ? "navbar-dark" : "navbar-light");
}

// Toggle theme
toggleButton.addEventListener("click", function () {
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-light");
    navbar.classList.toggle("navbar-dark");
    navbar.classList.toggle("navbar-light");

    // Save theme preference
    const currentTheme = body.classList.contains("bg-dark") ? "bg-dark" : "";
    localStorage.setItem("theme", currentTheme);
});
	
