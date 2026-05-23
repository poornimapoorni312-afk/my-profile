function sortProjects(data, type) {
  let sorted = [...data];
  switch (type) {
    case "az": sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
    case "za": sorted.sort((a, b) => b.name.localeCompare(a.name)); break;
    case "newest": sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); break;
    case "oldest": sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); break;
    default: return data;
  }
  return sorted;
}

// Also style the project filter pills if createProjectCards adds them
function createProjectCards() {
  const filtersDiv = document.getElementById("project-filters");
  if (!filtersDiv) return;
  filtersDiv.innerHTML = "";
  const categories = ["All", ...new Set(projectsData.map(p => p.category))];
  let activeBtn = null;

  categories.forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "filter-pill";
    if (i === 0) { btn.classList.add("active"); activeBtn = btn; }
    btn.addEventListener("click", () => {
      if (activeBtn) activeBtn.classList.remove("active");
      btn.classList.add("active");
      activeBtn = btn;
      const filtered = cat === "All" ? projectsData : projectsData.filter(p => p.category === cat);
      renderProject(filtered);
    });
    filtersDiv.appendChild(btn);
  });
}
