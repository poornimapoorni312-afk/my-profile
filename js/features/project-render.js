function renderProject(data = projectsData) {
    const projectsContainer = document.getElementById("projects-container");
    if (!projectsContainer) { console.log("Projects were not found"); return; }
    projectsContainer.textContent = "";

    data.forEach(function (project) {
        const isLive = project.status === "Live";
        const statusColor = isLive ? "#c8f542" : "#f59e0b";
        const statusBg = isLive ? "rgba(200,245,66,0.12)" : "rgba(245,158,11,0.12)";

        const card = document.createElement("div");
        card.className = "project-card";
        card.style.cssText = "background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:28px;transition:all 0.3s ease;cursor:pointer;position:relative;display:flex;flex-direction:column;gap:12px;";

        card.addEventListener("click", () => {
            saveRecentProject(project);
        });

        // Status badge
        const statusBadge = document.createElement("span");
        statusBadge.style.cssText = `position:absolute;top:20px;right:20px;font-size:11px;font-weight:700;padding:4px 12px;border-radius:50px;background:${statusBg};color:${statusColor};letter-spacing:.05em;font-family:'Syne',sans-serif;`;
        statusBadge.textContent = project.status;

        // Category
        const cat = document.createElement("span");
        cat.style.cssText = "font-size:11px;font-weight:600;color:#6b7280;letter-spacing:.1em;text-transform:uppercase;";
        cat.textContent = project.category;

        // Name
        const name = document.createElement("h2");
        name.style.cssText = "font-size:20px;font-weight:800;color:#fff;font-family:'Syne',sans-serif;line-height:1.2;margin-top:2px;";
        name.textContent = project.name;

        // Description
        const desc = document.createElement("p");
        desc.style.cssText = "font-size:14px;color:#9ca3af;line-height:1.6;flex:1;";
        desc.textContent = project.description;

        // Tech tags
        const techWrap = document.createElement("div");
        techWrap.style.cssText = "display:flex;flex-wrap:wrap;gap:6px;";
        project.technologies.forEach(t => {
            const tag = document.createElement("span");
            tag.style.cssText = "font-size:11px;padding:4px 12px;border-radius:50px;background:rgba(99,102,241,0.12);color:#a5b4fc;font-weight:500;";
            tag.textContent = t;
            techWrap.appendChild(tag);
        });

        // Stats
        const stats = document.createElement("div");
        stats.style.cssText = "display:flex;gap:16px;font-size:12px;color:#6b7280;padding-top:8px;border-top:1px solid rgba(255,255,255,0.05);";
        //stats.innerHTML = `<span>👁 ${project.stats?.views ?? 0}</span><span>❤️ ${project.stats?.likes ?? 0}</span><span>🚀 ${project.stats?.visits ?? 0}</span>`;

        // Links
        const links = document.createElement("div");
        links.style.cssText = "display:flex;gap:10px;margin-top:4px;";

        const demoBtn = document.createElement("a");
        //demoBtn.href = project.liveDemo;
        demoBtn.target = "_blank";
        //demoBtn.style.cssText = "font-size:13px;font-weight:700;padding:8px 18px;border-radius:50px;background:#c8f542;color:#0a0a0f;text-decoration:none;font-family:'Syne',sans-serif;transition:background 0.2s;";
        //demoBtn.textContent = "Live Demo";
        demoBtn.onmouseover = () => demoBtn.style.background = "#d4fa5a";
        demoBtn.onmouseout = () => demoBtn.style.background = "#c8f542";

        const ghBtn = document.createElement("a");
        ghBtn.href = project.github;
        ghBtn.target = "_blank";
        ghBtn.style.cssText = "font-size:13px;font-weight:500;padding:8px 18px;border-radius:50px;border:1px solid rgba(255,255,255,0.12);color:#d1d5db;text-decoration:none;transition:all 0.2s;";
        ghBtn.textContent = "GitHub";

        links.appendChild(demoBtn);
        links.appendChild(ghBtn);

        card.appendChild(statusBadge);
        card.appendChild(cat);
        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(techWrap);
        card.appendChild(stats);
        card.appendChild(links);

        // Hover effects
        card.onmouseover = () => {
            card.style.borderColor = "rgba(200,245,66,0.25)";
            card.style.background = "rgba(255,255,255,0.05)";
            card.style.transform = "translateY(-4px)";
            card.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
        };
        card.onmouseout = () => {
            card.style.borderColor = "rgba(255,255,255,0.08)";
            card.style.background = "rgba(255,255,255,0.03)";
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        };

        projectsContainer.appendChild(card);
    });
}

renderProject();