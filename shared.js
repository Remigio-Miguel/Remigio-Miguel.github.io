(() => {
  const primary = [
    ["Inicio", "/"],
    ["Servicios", "/servicios/"],
    ["Buscar servicio", "/buscar-servicio/"],
  ];
  const footerGroups = [
    ["Explorar", [["Inicio", "/"], ["Servicios", "/servicios/"], ["Buscar servicio", "/buscar-servicio/"]]],
    ["Mi cuenta", [["Mis solicitudes", "/mis-solicitudes/"], ["Mi perfil", "/mi-perfil/"]]],
  ];
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const navLink = ([label, href]) => `<a href="${href}"${pathname === href.replace(/\/+$/, "") || (href === "/" && pathname === "/") ? ' aria-current="page"' : ""}>${label}</a>`;
  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `<div class="header-main">
  <a class="brand" href="/" aria-label="Hogario, inicio">
    <img src="/logo.png" alt="Hogario" class="brand-logo">
  </a>
  <nav class="main-nav" aria-label="Navegación principal">${primary.map(navLink).join("")}</nav>
  <div class="header-actions">
    <a class="header-login" href="/mis-solicitudes/">Mis solicitudes</a>
    <a class="header-tech" href="/mi-perfil/">Mi perfil</a>
  </div>
</div>
<nav class="mobile-nav" aria-label="Navegación móvil">${primary.map(navLink).join("")}</nav>`;
  }
  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `<div class="container"><div class="footer-grid">${footerGroups.map(([title, links]) => `<section class="footer-group"><h2>${title}</h2>${links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</section>`).join("")}</div><div class="footer-bottom"><span>Tecnicos Ya · Marketplace para el hogar · Lima</span><div class="footer-legal"><span>Prototipo académico · Lima</span></div></div></div>`;
  }
  const read = (key, fallback = null) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {

      return fallback;
    }
  };
  const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const toast = (message) => {
    const previous = document.querySelector(".toast-message");
    previous?.remove();
    const el = document.createElement("div");
    el.className = "toast-message";
    el.setAttribute("role", "status");
    el.textContent = message;
    document.body.append(el);
    window.setTimeout(() => el.remove(), 3000);
  };
  window.Hogario = { read, write, toast };
})();
