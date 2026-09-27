# Editorial Portfolio — Nehal Sallam

React 19 + Vite + Tailwind CSS + Framer Motion. No backend, no database, no login —
just a static site you edit directly in the code.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## How to edit your content

- **Projects:** open `src/data/projects.js`, edit/add/remove entries in the list, save.
- **Experience/Internships:** open `src/data/experience.js`, same idea.
- **Hero photo:** replace `public/images/hero.jpg`.
- **Resume:** replace `public/resume.pdf`.
- Any other text (About, Skills, Contact) is directly inside its component file in
  `src/components/`.

After editing, push the change to GitHub — Vercel will automatically rebuild and
redeploy the live site within a minute or two. No separate backend, database, or
admin login needed.

## Status of each section

All sections (Navbar, Hero, About, Projects, Experience, Skills, Contact, Footer)
are pixel-matched to the provided designs. The Hero's "Currently at PROART" card
has been removed per request — everything else in the Hero is unchanged.
