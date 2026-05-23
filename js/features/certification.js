const container = document.getElementById("certifications-container");
if (container && window.certifications) {
  window.certifications.forEach((cert, i) => {
    const accents = ["#c8f542", "#a78bfa", "#60a5fa"];
    const color = accents[i % accents.length];
    const card = document.createElement("div");
    card.style.cssText = "background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:28px;transition:all 0.3s ease;cursor:default;";
    card.innerHTML = `
      <div style="width:40px;height:4px;background:${color};border-radius:4px;margin-bottom:20px;"></div>
      <div style="font-size:11px;font-weight:600;color:${color};letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px;">${cert.year}</div>
      <h3 style="font-size:17px;font-weight:800;color:#fff;font-family:'Syne',sans-serif;line-height:1.3;margin-bottom:8px;">${cert.title}</h3>
      <p style="font-size:13px;color:#6b7280;">${cert.org}</p>
    `;
    card.onmouseover = () => { card.style.borderColor = `${color}40`; card.style.background = "rgba(255,255,255,0.05)"; card.style.transform = "translateY(-3px)"; };
    card.onmouseout = () => { card.style.borderColor = "rgba(255,255,255,0.08)"; card.style.background = "rgba(255,255,255,0.03)"; card.style.transform = "none"; };
    container.appendChild(card);
  });
}
