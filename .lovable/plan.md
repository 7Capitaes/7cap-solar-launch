
## Landing Page — Equipe Sete Capitães (7cap)

A clean, professional, bilingual (PT/EN) one-page site to attract sponsors for the IFF solar boat team.

### Visual identity
- **Primary:** deep navy (from logo) on white — institutional, sponsor-friendly
- **Accents:** logo red and yellow used sparingly for highlights and CTAs
- **Type:** modern sans-serif (Inter), generous spacing, strong headings
- **Logo:** featured in header and hero
- Fully responsive (mobile-first, since the user is on a small viewport)

### Page structure (single-page, smooth-scroll nav)

1. **Header / Nav**
   - Logo + "Sete Capitães" wordmark
   - Nav: Sobre · Conquistas · Patrocine · Contato
   - **PT / EN language toggle** (top-right)

2. **Hero**
   - Headline: "Movidos a sol. Impulsionados por pessoas." / "Solar-powered. People-driven."
   - Subhead about the team + IFF Campus Centro, Campos dos Goytacazes
   - Primary CTA: **"Seja um patrocinador"** → scrolls to contact
   - Secondary: **"Conheça a equipe"** → About
   - Background: sunlit water imagery + logo overlay

3. **Sobre a equipe / About**
   - Who we are: students of IFF building a solar-powered boat
   - Mission + values (sustentabilidade, engenharia, educação)
   - Quick stats row: anos de equipe · membros · competições
   - Short blurb on what a Desafio Solar Brasil-type competition is

4. **Conquistas / Achievements**
   - Timeline / card grid of results (e.g., **2º Lugar — DSB 2025**, participações anteriores)
   - Placeholder entries that are easy to edit
   - Visual emphasis with medal/trophy iconography in accent colors

5. **Por que patrocinar / Why sponsor** (short trust section)
   - 3–4 value cards: visibilidade da marca, ESG/sustentabilidade, talento de engenharia, alcance nacional em competições
   - No tier table (per your choice) — just a clear pitch

6. **Contato / Contact** (the conversion section)
   - Big, prominent buttons (no form):
     - **Email** (placeholder: contato@7capitaes.com)
     - **WhatsApp** (placeholder: +55 22 9XXXX-XXXX, opens wa.me link)
     - **Instagram** → @equipe7capitaes
     - **Linktree** → linktr.ee/7capitaes
   - Short copy inviting sponsors to reach out

7. **Footer**
   - Logo, IFF Campus Centro mention, location, social icons, copyright

### Bilingual implementation
- Lightweight in-app translation dictionary (PT default, EN toggle)
- Toggle persists in localStorage
- All copy lives in one strings file for easy editing

### Notes
- All contact details left as clearly-marked placeholders for easy swapping
- Stock imagery (sun, water, solar panels) + the uploaded logo; designed so real team photos can be dropped in later without layout changes
- No backend needed for this version
