# Change Log — JR Hortifruti Delivery

## Version 1.0.0 (2026-06-03)
Initial release of the migrated JR Hortifruti Delivery website.

### Added
- Created `.gitignore` at the root of the workspace.
- Added custom CSS overrides at the end of `css/style.css` matching the "Colheita Urbana" design concept (colors: Verde profundo `#124A26`, Ouro `#BA942A`, Creme `#FAF1EA`, etc.).
- Added custom HTML layout grid for Nossos Produtos (Frutas, Legumes, Raízes) using `public` assets.
- Added Como Funciona steps grid section.
- Added Entrega section with Google Maps and address cards.
- Added Quem Atende Você section featuring founder Junior's photo (`public/junior-proprietario-hortifruti.webp`).
- Added FAQ section with local delivery and purchase questions.
- Added Contato section displaying CNPJ, address, Instagram link, and a main WhatsApp conversion CTA.
- Added floating green WhatsApp message CTA button at the bottom right.
- Added JavaScript client-side routing override in `index.html` to intercept relative subpage clicks and perform smooth scroll animations to sections.

### Changed
- Copied all template source folders from `COPY site completo` to the root workspace directory.
- Replaced `<head>` metadatas in `index.html` with new title, description, keywords, Open Graph, Twitter cards, and google Outfit/Big Shoulders Display font link.
- Replaced header and menu logos with `jr_hortifruti_poster_animado.svg` and `public/jr_hortifruti_logo_circular.svg`.
- Replaced Hero section banner video with static cover background `public/frutas-vegetais.webp` and updated slogan to "Hortifruti fresquinho".
- Updated Footer copyright information and social links.

### Removed
- Removed WordPress Yoast script block and block library styles.
- Removed legacy "Espace Privé" buttons (popups preserved as empty hidden wrappers to prevent script crashes).
- Removed actualités slider block from index page.
