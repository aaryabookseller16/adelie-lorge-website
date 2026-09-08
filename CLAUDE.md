# CLAUDE.md — Adelie Lorge Portfolio (current)

## What this is
A multi-page portfolio site built **for someone else** — Adelie Lorge — showcasing their
education, research, projects and certifications. Not Aarya's own site (that is
`../aaryabookseller16.github.io`, whose design patterns — dual-theme CSS mechanism, header/nav,
component vocabulary — this site's 2026-09 redesign was ported from and restyled).

## Stack
HTML + CSS + vanilla JavaScript, no build step, no templating. Light (day) / dark (night)
theme toggle with persistence; downloadable resume and certification PDFs.

## Layout
4 pages, each with identical hand-duplicated header/footer/theme-boot/behavior markup
(no shared template — editing nav or footer means editing all 4 files):
- `index.html` — Home (hero, summary, updates timeline)
- `projects.html` — Research & Projects
- `background.html` — Education, Leadership, Skills, Certifications (collapsible sections)
- `contact.html` — Contact

`assets/css/style.css` (shared component/layout CSS) + `assets/css/theme-light.css` /
`assets/css/theme-dark.css` (theme color variables, swapped via disabled `<link>` toggling,
not a `[data-theme]` CSS override) · `assets/images/` · `assets/docs/` (resume + all 10
certificates, all linked from `background.html#certifications`)
`sitemap.xml`, `googleb5166b1938ada4bd.html` — Search Console indexing

No transformer/neural-net animation on this site (deliberately excluded — doesn't fit
Adelie's content, even though the reference site has one on its own dedicated page).

## Run it
Static — open `index.html`, or serve with `python3 -m http.server`.

## This is the current version
`../../Archive/superseded/adelie-lorge-v1` is the **same site at an earlier stage**,
same remote (`github.com/adelie-lorge/adelie-lorge.git`), flat layout instead of the
`assets/` structure used here.

| Folder | Last commit | Layout |
|---|---|---|
| `adelie-lorge` (this one) | 2026-09-07 multi-page redesign | 4 pages, `assets/css` (no `assets/js` — JS inlined per page) |
| archived `adelie-lorge-v1` | `68550e7` 2026-01-27, "initial website." | flat `style.css`, `script.js`, `assets/*.pdf` |

Use this one. The earlier duplicate was archived on 2026-09-04.
