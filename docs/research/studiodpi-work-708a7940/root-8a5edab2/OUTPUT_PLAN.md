# Output Plan — studiodpi.work clone

## Target
- URL: https://studiodpi.work/ (root page only, single target)

## Identity
- `<app-root>`: `.` (repository root — single application)
- `<site-key>`: `studiodpi-work-708a7940` (SHA-256("https://studiodpi.work")[0:8] = 708a7940)
- `<page-key>`: `root-8a5edab2` (SHA-256("/")[0:8] = 8a5edab2)

## Destination route
- `/` → `src/app/page.tsx` — replaces the untouched template scaffold (allowed: first single-URL clone in a fresh template)

## Roots
- Artifacts: `docs/research/studiodpi-work-708a7940/root-8a5edab2/`
- Screenshots: `docs/design-references/studiodpi-work-708a7940/root-8a5edab2/`
- Components: `src/components/sites/studiodpi-work-708a7940/root-8a5edab2/`
- Assets: `public/sites/studiodpi-work-708a7940/root-8a5edab2/`
- Downloader: `scripts/download-assets-studiodpi-work-708a7940-root-8a5edab2.mjs`

## Route inventory before this run
- `src/app/page.tsx` — template scaffold (approved for replacement per routing default)
- No other routes exist. Nothing else to preserve.

## Shared foundation changes
- `src/app/layout.tsx` — fonts + metadata for the clone
- `src/app/globals.css` — target design tokens merged into Tailwind v4 theme
- No conflicts: template is untouched.
