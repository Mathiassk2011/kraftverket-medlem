# 3475 Kraftverket – Medlemsportal

Frontend-skall for medlemmer av 3475 Kraftverket treningssenter.

## Sider

- `index.html` – Logg inn
- `dashboard.html` – Landingsside med kort til alle seksjoner
- `mifflin.html` – Makrokalkulator (Mifflin-St Jeor) + 10 oppskrifter (30–50 g protein)
- `kalender.html` – Ukens gruppetimer + personlig treningslogg
- `chat.html` – Medlemschat (demo, lokal lagring)

## Demo-innlogging

| Brukernavn | Passord     | Rolle  |
|------------|-------------|--------|
| `mathias`  | `kraftverk` | Eier   |
| `ole`      | `demo`      | Medlem |
| `kari`     | `demo`      | Medlem |
| `erik`     | `demo`      | Medlem |
| `ingrid`   | `demo`      | Medlem |
| `lars`     | `demo`      | Medlem |

Legg til/fjern medlemmer i `members.js`.

## Kjør lokalt

Åpne `index.html` i nettleseren – ingen byggeprosess.

## Status

Dette er et **frontend-skall**. Innlogging og chat er ikke ekte multi-bruker – alt lagres i nettleseren (sessionStorage / localStorage). For ekte funksjonalitet må vi koble på en backend (f.eks. Firebase eller Supabase) senere.
