# nickmontesano.com — rules for any Claude session editing this site

Static site, no build step. Vercel deploys every push to `main`. `vercel.json` sets clean URLs (`/speak-up` serves `speak-up.html`).

## Design system: V5 "Sage & Tan" (do not change without Nick asking)
- All colors, type and spacing live in `site.css` as CSS variables (`--bg`, `--surface`, `--ink`, `--muted`, `--line`, `--accent`, `--tan`, `--takeBg`...). Never hard-code a color in a page; use the variables so light and dark mode both work.
- Fonts: Albert Sans (text), DM Mono (labels, eyebrows, numbers). No other fonts.
- Every page uses the same `<head>`, header and footer as the existing pages. Copy them exactly.
- Must stay WCAG AA: real `<a>`/`<button>`, alt text on every image, 4.5:1 text contrast, works at 390px wide with no sideways scroll.

## Adding a case study
1. Copy `offline-inspections.html` (the model page) to `<slug>.html`. Keep its order:
   eyebrow (`NN · COMPANY · YEAR/LENGTH`) → title → one-line subtitle → Key takeaways (3) → At a glance sidebar (role, timeline, team, platform, tools) → numbered sections (`1 · PROBLEM`, `2 · MY ROLE`, `3 · DECISION`…) → Outcomes table with a confidence column (MEASURED / PROJECTED / ESTIMATED) → What I'd do differently → Next link.
2. Images: export from Figma at 2x, convert to `.webp`, max 1600px wide, name `<slug>-01.webp`, `<slug>-02.webp`… in the site root. Always set `width`, `height`, `loading="lazy"` and real alt text.
3. Add the project to the index list and the project cards in `index.html`, renumber the `NN` labels, and update every page's "Next" link so the chain loops.
4. No placeholder text ever goes live. If a fact is missing, leave the section out and tell Nick.

## Voice
Short, plain sentences. Lead with the decision and the trade-off, then the outcome. Mark numbers honestly as measured, projected or estimated.

## Before pushing
Open each changed page at desktop and phone width, in light and dark mode, and check that every image loads and every link works.
