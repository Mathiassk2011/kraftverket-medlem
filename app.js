// Felles helpers for alle sider (etter at supabase-client.js er lastet).

// Bygg topplinje (header). Bruker innlogget profil.
async function renderHeader(activeKey) {
  const profile = await getCurrentProfile();
  if (!profile) return "";
  const isAdmin = profile.role === "admin";

  const links = [
    { key: "dashboard",      label: "Hjem",     href: "dashboard.html"      },
    { key: "treningsstiler", label: "Trening",  href: "treningsstiler.html" },
    { key: "ukeplan",        label: "Ukeplan",  href: "ukeplan.html"        },
    { key: "mifflin",        label: "Kosthold", href: "mifflin.html"        },
    { key: "kalender",       label: "Kalender", href: "kalender.html"       },
    { key: "chat",           label: "Chat",     href: "chat.html"           }
  ];
  if (isAdmin) links.push({ key: "admin", label: "Admin", href: "admin.html" });

  const photo = profile.photo || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(profile.name)}`;

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
        <img src="${photo}" alt="${profile.name}" />
        <span>${profile.name}${isAdmin ? ' 👑' : ''}</span>
      </a>
      <button class="logout-btn" onclick="signOut()">Logg ut</button>
    </header>
  `;
}

function renderFooter() {
  return `<footer class="site-footer">3475 Kraftverket Medlemsportal · Åsveien 3, 3475 Sætre</footer>`;
}

// Hjelper: sett opp header + footer på en innlogget side
async function setupPage(activeKey) {
  const user = await requireAuth();
  if (!user) return null;
  const profile = await getCurrentProfile();
  const headerSlot = document.getElementById("header-slot");
  const footerSlot = document.getElementById("footer-slot");
  if (headerSlot) headerSlot.innerHTML = await renderHeader(activeKey);
  if (footerSlot) footerSlot.innerHTML = renderFooter();
  return profile;
}

window.renderHeader = renderHeader;
window.renderFooter = renderFooter;
window.setupPage = setupPage;
