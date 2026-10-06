# Approved artwork extraction

Source: `portfolio-unified-sketch.png`, 768 × 2048. This is the owner-approved visual truth. No character, dashboard or illustration was regenerated.

All output is WebP. Crops in source pixel coordinates (left, top, width, height):

| Asset | Crop |
| --- | --- |
| hero.webp | Main desk: 0, 50, 768, 394; original fading legs: 0, 444, 193, 68 and 575, 444, 193, 68. Composited into 768 × 462 with transparent space for the HTML heading. |
| mind.webp | 0, 822, 768, 372 |
| project-churn.webp | 350, 1287, 368, 218 |
| project-growth.webp | 53, 1518, 400, 234 |
| finale.webp | 0, 1754, 768, 294 |
| favicon.png | 343, 832, 70, 76, resized to 64 square |

Embedded stack text was cleared from the lower-right blank background area in the mind crop (497, 202, 271, 170) using a nearby blank paper strip from the original and replaced with semantic HTML in the app. Embedded CTA / contact copy was cleared from the bottom-left area in the finale crop (0, 185, 468, 109), also replaced with HTML. Its empty background interpolates the source paper samples at x=20 and x=465 for each row, preserving the original vertical shading without changing the board or figure. All figures remain the exact supplied art. The mobile mind variant crops 60 pixels from each side of the desktop art to prioritize the central character without reducing the whole desktop layout.

The hero social preview uses the same approved desk illustration, fitted into 1200 × 630 with ivory padding. WebP quality 92 for scene crops; social preview 85. Assets are served locally and have explicit dimensions. Fontsource supplies self-hosted Anton and Roboto; no runtime external font connection is needed.

Source constraints: the original board labels and miniature dashboard labels remain baked into the artwork. Treat them as illustration and demo data, not live UI or real business results. The original image is not a set of layered, high-resolution production assets.
