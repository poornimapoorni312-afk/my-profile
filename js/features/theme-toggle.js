function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") {
        body.classList.add("light");
        if (toggleBtn) toggleBtn.textContent = "🌙";
    } else {
        if (toggleBtn) toggleBtn.textContent = "☀";
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            body.classList.toggle("light");
            if (body.classList.contains("light")) {
                localStorage.setItem("portfolio-theme", "light");
                toggleBtn.textContent = "🌙";
            } else {
                localStorage.setItem("portfolio-theme", "dark");
                toggleBtn.textContent = "☀";
            }
        });
    }
}
