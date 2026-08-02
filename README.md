# 16 ukers trening

Privat treningsplattform for medlemmer av 3475 Kraftverket treningssenter.

**Live:** https://16ukerstrening.no

## Teknisk

Statisk HTML/CSS/JS uten byggeprosess, hostet på GitHub Pages. Supabase som backend
(auth, database, realtime, edge functions).

## Sider

- `index.html` – Logg inn
- `dashboard.html` – Landingsside med ukesmål og kort til alle seksjoner
- `ukeplan.html` – Klasser per dag + treningsprogram-builder
- `kalender.html` – Personlig kalender (7 dager, kun eier ser)
- `chat.html` – Felleschat, private meldinger og grupper (sanntid)
- `profil.html` – Egen profil og treningslogg
- `admin.html` – Medlemsadministrasjon (kun admin)
- `ovelser.html` – Øvelsesbibliotek (`exercises.js`, 300 styrkeøvelser)
- `mifflin.html` / `kosthold` – Makrokalkulator + oppskrifter (`recipes.js`)
- `styrke.html`, `crossfit.html`, `hyrox.html`, `treningsstiler.html` – Treningsstiler

## Innlogging

Kontoer opprettes av administrator i `admin.html`. Selvregistrering er slått av
i Supabase Auth.

## Supabase

Skjemaet ligger i `supabase/schema.sql` – kjør hele filen i SQL Editor for å sette
opp en ny instans.

Edge functions i `supabase/functions/`:

- `create-member` – opprett medlem (deployet som `super-processor`)
- `delete-member` – slett medlem (deployet som `Delete-member`, stor D)
- `reset-password` – reset passord for medlem

Alle tre krever `SUPABASE_SERVICE_ROLE_KEY` som miljøvariabel.

## Kjør lokalt

Åpne `index.html` i nettleseren – ingen byggeprosess. Konfigurasjonen ligger i
`supabase-client.js`.
