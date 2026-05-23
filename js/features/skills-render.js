const SKILL_ICONS = {
  "HTML": "🌐", "CSS": "🎨", "JavaScript": "⚡", "React": "⚛",
  "Node.js": "🟢", "Express": "🚂", "MongoDB": "🍃",
  "Git": "🔀", "GitHub": "🐙", "VS Code": "💻"
};

function renderSkills(data = skills) {
    const container = document.getElementById("skills-container");
    if (!container) return;
    container.innerHTML = "";

    data.forEach(skill => {
        const card = document.createElement("div");
        card.className = "skill-card";
        card.style.cssText = "background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:20px 24px;transition:all 0.3s ease;";
        const icon = SKILL_ICONS[skill.name] || "✦";
        card.innerHTML = `
          <div style="font-size:28px;margin-bottom:10px;">${icon}</div>
          <div style="font-size:15px;font-weight:700;color:#fff;font-family:'Syne',sans-serif;">${skill.name}</div>
          <div style="font-size:11px;color:#6b7280;margin-top:4px;letter-spacing:.08em;text-transform:uppercase;">${skill.category}</div>
          <div style="margin-top:12px;height:3px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden;">
            <div class="skill-bar" style="height:100%;background:linear-gradient(to right,#c8f542,#6366f1);border-radius:3px;width:0;transition:width 1.5s ease-in-out;"></div>
          </div>
        `;
        card.onmouseover = () => { card.style.borderColor = "rgba(200,245,66,0.3)"; card.style.background = "rgba(200,245,66,0.04)"; };
        card.onmouseout = () => { card.style.borderColor = "rgba(255,255,255,0.08)"; card.style.background = "rgba(255,255,255,0.03)"; };
        container.appendChild(card);
    });
}
