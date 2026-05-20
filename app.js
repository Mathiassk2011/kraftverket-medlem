// Felles auth-helpers for alle sider.
const AUTH_KEY = "kraftverket_session";

function getUser() {
  const raw = sessionStorage.getItem(AUTH_KEY) || localStorage.getItem(AUTH_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

function setUser(user, remember) {
  const store = remember ? localStorage : sessionStorage;
  store.setItem(AUTH_KEY, JSON.stringify(user));
}

function logout() {
  sessionStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(AUTH_KEY);
  window.location.href = "index.html";
}

function requireLogin() {
  const u = getUser();
  if (!u) {
    window.location.href = "index.html";
    return null;
  }
  return u;
}

// Bygg topplinje (header) for innloggede sider.
function renderHeader(activeKey) {
  const u = getUser();
  if (!u) return "";
  const links = [
    { key: "dashboard", label: "Hjem",     href: "dashboard.html" },
    { key: "treningsstiler", label: "Trening", href: "treningsstiler.html" },
    { key: "mifflin",   label: "Kosthold", href: "mifflin.html"   },
    { key: "kalender",  label: "Kalender", href: "kalender.html"  },
    { key: "chat",      label: "Chat",     href: "chat.html"      }
  ];
  return `
    <header class="site-header">
      <a class="logo" href="dashboard.html">
        <img src="https://3475kraftverket.no/wp-content/uploads/2021/04/3d-png-1.png" alt="Kraftverket" />
        <span class="logo-label">
          <span class="main">3475 Kraftverket</span>
          <span class="sub">Medlemsportal</span>
        </span>
      </a>
      <div class="header-divider"></div>
      <nav class="main-nav">
        ${links.map(l => `<a class="tab-btn ${l.key === activeKey ? "active" : ""}" href="${l.href}">${l.label}</a>`).join("")}
      </nav>
      <div class="spacer"></div>
      <a class="user-pill" href="profil.html" title="Rediger profil">
        <img src="${u.photo}" alt="${u.name}" />
        <span>${u.name}</span>
      </a>
      <button class="logout-btn" onclick="logout()">Logg ut</button>
    </header>
  `;
}

function renderFooter() {
  return `<footer class="site-footer">3475 Kraftverket Medlemsportal · Åsveien 3, 3475 Sætre</footer>`;
}
