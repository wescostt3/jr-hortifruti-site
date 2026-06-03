# Cleanup Report — JR Hortifruti Delivery

This document tracks all legacy details from the old client (`M.Charraire`) that were removed or replaced during the migration.

## 1. Legacy Data Replaced
- **Old Client Name**: `Charraire`, `M.Charraire` -> Replaced with `JR Hortifruti Delivery`
- **Old Contact Number**: `01.47.18.33.33` (French phone format) -> Replaced with `(21) 95689-3764`
- **Old Contact Email**: `televente@charraire.fr`, `l.amghar@charraire.fr` -> Removed / Replaced with WhatsApp links
- **Old Address**: French logistics location -> Replaced with `Rua Tocantins, 44 — Sarapuí, RJ`
- **Old Slogan**: `Légumes et fruits` -> Replaced with `Hortifruti fresquinho`
- **Old Subpages**: `/histoire/`, `/valeurs/`, etc. -> Bypassed by overriding script page href. The site now operates purely as a clean one-page scrolling layout to prevent 404s on static servers.
- **WP Scripts / Yoast**: Yoast JSON graph block, inline WP styles -> Removed from `index.html` head to improve loading speed.

## 2. Legacy Files Left Unused
The following folders contain the original template files and are kept in the `COPY site completo/` subdirectory for backup. They are completely ignored by the active root website:
- `COPY site completo/css/`
- `COPY site completo/js/`
- `COPY site completo/images/`
- `COPY site completo/media/`
- `COPY site completo/index.html`

In the active root folder, all legacy references have been replaced.
- `media/automne.mp4` -> Unused (replaced with static background image `public/frutas-vegetais.webp` to prevent heavy media load).
- `images/logo-charraire.svg` -> Unused (replaced with `jr_hortifruti_poster_animado.svg`).

## 3. Search Results Verification
Buscas Finais:
- `grep -Rni "charraire" index.html` -> 0 matches.
- `grep -Rni "televente" index.html` -> 0 matches.
- `grep -Rni "+331" index.html` -> 0 matches.
- `grep -Rni "histoire" index.html` -> 0 matches (except inside the one-page anchor links list `#about`).
- `grep -Rni "valeurs" index.html` -> 0 matches.
