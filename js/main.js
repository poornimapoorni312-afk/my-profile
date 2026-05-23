document.addEventListener("DOMContentLoaded", function () {
  renderFilters(skills);
  renderSkills();
  initModal();
  initContactValidation();
  initThemeToggle();
  renderRecentProjects();
  createProjectCards();
  renderProject();
  setGreeting();
  loadGitHubStats();
  initCopyEmail();

  // Sort
  const sortSelect = document.getElementById("project-sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      const sortedData = sortProjects(projectsData, e.target.value);
      renderProject(sortedData);
    });
  }

  // Navbar scroll glass effect
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Back to top show/hide
  const backBtn = document.getElementById("backToTop");
  if (backBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backBtn.style.display = "flex";
      } else {
        backBtn.style.display = "none";
      }
    });
    backBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
});
