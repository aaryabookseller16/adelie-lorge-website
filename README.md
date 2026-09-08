# Adelie Lorge Portfolio

Multi-page portfolio site showcasing Adelie Lorge's education, research, projects, and certifications.

## Highlights
- Responsive, fast-loading static site
- Light (day) / dark (night) theme toggle with persistence
- Downloadable resume and certification PDFs

## Tech
- HTML + CSS + vanilla JavaScript (no build step)

## Project structure
- `index.html` — Home
- `projects.html` — Research & Projects
- `background.html` — Education, Leadership, Skills, Certifications
- `contact.html` — Contact
- `assets/css/style.css` — shared component/layout styles
- `assets/css/theme-light.css` / `assets/css/theme-dark.css` — theme color variables
- `assets/images/` — site images
- `assets/docs/` — resume and certification PDFs
- `googleb5166b1938ada4bd.html` — Google Search Console verification file
- `sitemap.xml` — search-engine sitemap

Each page inlines its own theme-boot script, header/footer markup, and behavior script (mobile nav, theme toggle, back-to-top, scroll reveal) — there is no shared template or build step, so a change to the header/footer/nav must be repeated across all 4 HTML files.

## Run locally
Open `index.html` directly, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

- GitHub: https://github.com/aaryabookseller16/adelie-lorge-website
- Vercel project: `aarya16/adelie-lorge-website`
- Production domain: https://adelielorge.com
- Pushes to `main` deploy automatically through the Vercel GitHub integration.
