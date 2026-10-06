# Design QA — production portfolio

Date: 2026-10-06. Scope: approved four-scene homepage, responsive adaptation and reusable project shell. No deployment.

**Source visual truth**: `docs/design/portfolio-unified-sketch.png` (768 × 2048), with `docs/design/VISUAL-SOURCE-OF-TRUTH.md`. SHA-256 remains `E8E8C3BA9C8674B2AAC4DABE17F8C57165D498D6C133919384011EE9967E6221`. The owner confirmed this pair in chat.

**Implementation**: production build at http://127.0.0.1:4173/, inspected in the Codex in-app browser. Development checks also used port 5173.

## Evidence and normalization

- Full-view comparison: source plus `docs/qa/qa-final-reference-normalized.png` were opened together. CSS viewport 768 × 2200, reported devicePixelRatio approximately 1. The browser screenshot exporter returned a 614 × 1759 JPEG; it was normalized to 768 × 2200 before region comparison. The original reference was not changed. The extra viewport area below the page is not a fifth scene.
- Focused comparisons, source on left / implementation on right: `docs/qa/qa-compare-hero.png` (1536 × 690), `qa-compare-skills.png` (1536 × 500), `qa-compare-finale.png` (1536 × 294). Each pair aligns the corresponding scene rather than comparing different scroll positions.
- Large Desktop: CSS 1440 × 1000; captures `qa-final-desktop-hero.png`, `qa-final-desktop-projects.png`, `qa-final-desktop-contact.png`, `qa-final-desktop-shell.png`. Browser exporter delivered 1425 × 990 rasters, reflecting its surface / scrollbar capture behavior.
- Mobile: CSS 390 × 844, content clientWidth 375; `qa-final-mobile-hero.png`, `qa-final-mobile-skills.png`, `qa-final-mobile-contact.png` (375 × 811 exported images).
- Narrow mobile: CSS 320 × 812, clientWidth 305; `qa-final-mobile-320.png` (305 × 774 export).
- The screenshot exporter applies scaling / JPEG compression. Do not interpret its softness as loss of detail in the actual WebP source files. No pixel-perfect similarity score is claimed. Mobile has no separately approved visual source; it follows the responsive rules in the approved handoff.
- State: English placeholder profile, two illustrative projects, warm light palette, loaded images. No auth or backend. Exactly four direct section children of the homepage main landmark.

## Comparison history and fixed findings

1. **[P2] Heading proportions and skill density.** The first implementation used narrower Anton headings and extra visible analytics labels that pushed the stack below the character. Corrected display proportions, line heights and stack presentation; both analytics disciplines remain accessible and represented in the stack heading. Rechecked in the full-view and focused Skills / Hero comparisons.
2. **[P2] Cropped desk legs and a visible paper patch in Finale.** Initial asset extraction cut the Hero desk fade and used an overly uniform replacement background beneath the board. Restored the original left / right desk-leg crops around the editable HTML headline, and reconstructed only the empty paper area from adjacent source samples. The original figure and board were preserved. Final Hero / Finale comparisons confirm the correction.
3. **[P1] Hash navigation versus scroll restoration.** An early custom restoration key reused the homepage scroll position before handling section hashes. Switched to entry-based router restoration, captured the actual project-entry position, and added explicit return focus / position handling. Anchors now reach their sections. Direct project entries return to Projects; browser Back / Forward retain their own positions.
4. **[P2] Narrow-screen horizontal overflow.** A body min-width of 320 px overflowed the 305 px content area of a 320 px viewport with a scrollbar. Removed the min-width. Final measured scrollWidth equals clientWidth (305) and no h1 / h2 / h3 crosses the right boundary.
5. **[P2] Finale heading too narrow / too close to the board.** The focused comparison exposed a smaller CTA footprint. Corrected horizontal proportions and its position below the board. Re-captured final reference-width and Desktop / Mobile Finale states.
6. **Runtime / metadata fixes.** Removed duplicate description meta tags via a shared PageMeta component. Added a loading fallback for direct lazy project routes after React Router emitted a HydrateFallback warning. A fresh production browser tab loading both project routes, including reload, then returned no warnings or errors.

No actionable P0, P1 or P2 findings remain within this stage's scope.

## Required fidelity surfaces

| Surface | Assessment |
| --- | --- |
| Fonts / typography | Self-hosted Anton and Roboto follow the approved implementation approximations. Condensed uppercase hierarchy, intended Hero / Mind line breaks and stronger Finale proportions are retained. Some glyph shapes differ from the unidentified raster font; minor P3 limitation. |
| Spacing / layout | Centered desk scene, statement, full-body analytical scene with side stack, two alternating project rows and board Finale are preserved. A capped 1100 px canvas avoids excessive enlargement. Mobile recomposes into one column; it does not shrink the whole desktop page. Extra space for honest placeholder contact feedback / touch targets is intentional. |
| Colors / tokens | Warm ivory #FEF6E4, cream #FFF3DB, near-black #141310 and restrained amber #D99731. Brown is confined to the original character artwork. No new dominant accent or card-grid art direction. |
| Images / assets | Original scene artwork is used, with local WebP optimization and documented extraction. Character identity / poses, desk, data paths and dashboards are unchanged. No substitute mascot or generated assets. Tiny dashboard labels remain raster illustration. |
| Copy / content | Data → Insight → Decision and the approved editorial content are retained. Name, location, availability and contacts are clearly replaceable. Projects / metrics are labelled illustrative demo content, not real achievements. No fabricated company, client or revenue claim. |

## Interaction, accessibility and runtime checks

- Both project URLs render the same reusable shell with different registry content.
- Direct deep-link load and reload work on Vite production preview. Future hosting must configure the documented SPA fallback.
- Fresh-tab direct project → Back to Portfolio reached Projects with its top approximately 20 px below the viewport edge.
- Desktop keyboard project entry, browser Back, Forward and explicit Back to Portfolio were tested. Expected and restored scrollY both measured 1694.4000244140625; explicit return focused `project-saas-churn-reduction` with a visible solid outline.
- Mobile keyboard entry / return was checked; source link focus restored. Contact placeholders announce that no address is configured.
- Skip to content moves focus to `main`. One h1, semantic section labels, descriptive image alt text and native links / buttons are present.
- Homepage images loaded at all inspected widths. No horizontal overflow at 1440, 768, 390 or 320 CSS px in final measured states.
- Unknown project slugs render the 404 view with a return link.
- Page title and one description tag update per route. Indexing is intentionally disabled until the owner replaces placeholders and authorizes publication.
- Reduced-motion CSS was inspected in the loaded production stylesheet: animation / transition disabled, automatic scrolling and fully visible scene content. Reveal setup skips the observer when reduced motion is already requested. The browser reported reduced-motion=false; OS-level preference emulation was not available, so this is a code / stylesheet check, not a claimed device test.
- No automated screen-reader certification, Safari / Firefox device testing or Lighthouse score is claimed.

## Validation

- `npm run lint`: passed, zero warnings.
- `npm test`: 2 tests passed.
- `npm run build`: passed on the final code.
- `npm audit --omit=dev`: 0 vulnerabilities.
- Main JS: approximately 104 KB gzip; lazy project chunk approximately 1.4 KB gzip. No runtime external font requests or charting-library payload.

## Follow-up polish / known source limits

- **P3:** Higher-resolution layered scene originals would improve large-screen raster clarity and make independently animated data paths possible. The approved source is only 768 px wide. This stage uses gentle scene reveals; it does not redraw the baked-in chart paths as substitute art.
- **P3:** Exact display-font identification could further improve glyph-level fidelity. The approved handoff explicitly treats Anton / Roboto as approximations.

## Implementation checklist

- [x] Four approved scenes and original artwork.
- [x] Desktop / tablet / mobile layout, keyboard access and reduced-motion support.
- [x] Project presentation, routes, reusable shell and return flow.
- [x] Honest placeholders and static demo previews.
- [x] Browser-rendered full-view and focused visual comparison after fixes.
- [x] Build / lint / tests and production route verification.
- [x] Preserve local preview; no Sites / deployment.

final result: passed
