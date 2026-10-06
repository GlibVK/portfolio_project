# Data → Insight → Decision

React + JavaScript portfolio based on the approved artwork in `docs/design/portfolio-unified-sketch.png` and rules in `docs/design/VISUAL-SOURCE-OF-TRUTH.md`. Exactly four homepage scenes: Hero, Analytical Mind / Skills, Selected Projects, Contact / Finale.

## Local development

Node 22.12+ and npm are required.

```sh
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

Development: http://127.0.0.1:5173. Production preview: http://127.0.0.1:4173.

## Architecture

- `src/content/profile.js`: replaceable name, role, location and contact URLs.
- `src/content/projects.js`: project registry, presentation content, illustrative metrics and future scope.
- `src/components/`: shared layout, project presentation, contact links and reduced-motion-aware reveals.
- `src/pages/Portfolio.jsx`: four semantic homepage scenes.
- `src/pages/ProjectPage.jsx`: one reusable, lazy-loaded project shell at `/projects/:slug`.
- `src/router.jsx`: routes, error / 404 handling and scroll restoration.
- `public/images/`: optimized crops of the approved source. No regenerated character or substitute illustrations.

Both project pages are presentation shells. Preview images are static; charts, filters, KPI logic, cohorts, funnels, financial scenarios and what-if analysis are intentionally future work. A future project-specific React module can mount inside `.project-workspace`, while the surrounding shell remains shared. No backend, database, authentication, external analytics or runtime font requests.

## Content placeholders

The name and contact information have not been verified. Contact buttons explain that their destination is not configured until URLs are added to `profile.js`. The two project concepts, all dashboard figures and the +18% / +25% metrics are explicitly illustrative, not claims about clients or business outcomes. No real companies or achievements are asserted.

## Accessibility and navigation

Skip link, semantic headings / landmarks, descriptive alt text, visible keyboard focus, touch-sized targets, route title updates and reduced-motion support. Project links preserve homepage scroll position. Back to Portfolio restores the clicked project link and previous position; direct project visits return to the Projects section. Browser Back / Forward uses router scroll restoration. Unknown routes show a useful 404 view.

## Before any future publication

1. Replace and verify profile, contact and project content. Edit the static title / Open Graph tags in `index.html` to match.
2. Replace `noindex, nofollow` and the blocking `robots.txt` only when publication is approved. Add the real canonical URL, absolute Open Graph image URL and sitemap after the domain is known.
3. Configure the chosen static host to serve `index.html` for client routes such as `/projects/saas-churn-reduction`. No hosting provider is configured and nothing is deployed.
4. Higher-resolution layered originals are recommended for future large-screen refinement. The only approved source is a 768 × 2048 raster; its baked dashboard typography cannot become sharp live UI without separate source assets or implementation of the future mini-apps.

## Source and licenses

Typography: Anton and Roboto, self-hosted through Fontsource (SIL Open Font License). Icons: Phosphor (MIT). Source artwork supplied and approved by the owner; extracted without changing the character or art direction. Asset crop provenance: `docs/design/ASSET_PROVENANCE.md`.
