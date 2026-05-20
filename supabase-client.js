// Supabase-konfigurasjon for 3475 Kraftverket medlemsportal
// Bruker Supabase JS v2 fra CDN (lastes inn i hver html-fil)

const SUPABASE_URL = "https://zongelfeyadntkawojpf.supabase.co";
const SUPABASE_KEY = "sb_publishable_WwIqu8qb7WQShAOTe_YhvQ_MNcmpUiA";

// Antar at supabase-js er lastet inn i HTML-en via <script src="...">
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.sb = sb;

// ── Auth helpers ──
async function getCurrentUser() {
  const { data: { user } } = await sb.auth.getUser();
  return user;
}

async function getCurrentProfile() {
  const user = await getCurrentUser();
  if (!user) return null;
  const { data, error } = await sb
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  if (error) console.error("profile fetch error", error);
  return data;
}

async function requireAuth(redirectTo = "index.html") {
  const user = await getCurrentUser();
  if (!user) {
    window.location.href = redirectTo;
    return null;
  }
  return user;
}

async function signOut() {
  await sb.auth.signOut();
  window.location.href = "index.html";
}

window.getCurrentUser   = getCurrentUser;
window.getCurrentProfile = getCurrentProfile;
window.requireAuth      = requireAuth;
window.signOut          = signOut;
