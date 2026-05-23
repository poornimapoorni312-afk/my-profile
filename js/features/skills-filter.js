const filtersContainer = document.getElementById("skills-filters");

function getCategories(data) {
    const categories = ["All"];
    data.forEach(skill => {
        if (!categories.includes(skill.category)) categories.push(skill.category);
    });
    return categories;
}

function renderFilters(data) {
    if (!filtersContainer) return;
    const categories = getCategories(data);
    let activeBtn = null;

    categories.forEach((category, idx) => {
        const btn = document.createElement("button");
        btn.textContent = category;
        btn.className = "filter-pill";
        if (idx === 0) { btn.classList.add("active"); activeBtn = btn; }

        btn.addEventListener("click", () => {
            if (activeBtn) activeBtn.classList.remove("active");
            btn.classList.add("active");
            activeBtn = btn;
            const filtered = category === "All" ? data : data.filter(s => s.category === category);
            renderSkills(filtered);
        });
        filtersContainer.appendChild(btn);
    });
}
