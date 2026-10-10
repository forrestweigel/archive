# Archive

The website for Archive Alpha, a Commander variant at playarchivemtg.com.

## Development

Use Node.js 24 and npm 11 (validated during setup).

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run start
```

The build downloads Open Sans through `next/font/google`; allow HTTPS access to
`fonts.googleapis.com` and `fonts.gstatic.com`. Gotham Narrow is supplied locally.
No database or application credentials are required.

## Content and pages

- `/`: overview, setup, and core mechanics
- `/rules`: renders the canonical `RULES.md` directly
- `/faq`: Alpha rules questions
- `/reference`: printable reference and downloadable text
- `/feedback`: generates a local playtest report; no submission backend is connected
- `/changelog`: shipped rules releases, rendered from `CHANGELOG.md`

Read `AGENTS.md` and `.agents/skills/archive-format/SKILL.md` before changing
rules or presentation. Keep homepage summaries and the FAQ consistent with
`RULES.md`. The reference card also reads its rule sections from that file.

The hero and resource cards use owner-supplied fantasy artwork; navigation,
footer, reference card, and favicon use the supplied logo variants.
The shared UI uses shadcn-style Radix primitives, configured in `components.json`.

## Publishing a rules release

`RULES.md` describes the current release. `CHANGELOG.md` preserves the history.
Quality over quantity applies to both site copy and release notes: publish only
information players need, without padding short pages.

When an owner-approved release (such as Beta) is ready:

1. Update `RULES.md` with the approved rules and release designation.
2. Prepend a release entry to `CHANGELOG.md` with its confirmed publication date
   and concrete changes from the previous release. Leave prior entries intact.
   Do not add unreleased entries or invent a date for the existing Alpha entry.
3. Update current-release labels in the site, metadata, download filenames and
   report headings, plus `AGENTS.md` and the Archive skill. Review homepage and
   FAQ summaries against the new rules. The rules page and reference card read
   their rules directly from `RULES.md`.
4. Run lint and the production build; check the rules, changelog, reference
   download, and playtest report. The changelog's current-rules link always goes
   to `/rules`; do not label it as an older release's rules.

Repeat this process for subsequent releases. Log later rules clarifications as
dated entries describing the clarification. Routine website styling and copy
edits belong in Git history, not the public rules changelog.

## Shared-link previews

`lib/metadata.ts` defines shared Open Graph and Twitter card settings. Each page
sets its own description, title, and canonical URL. The preview image is the
1200 × 630 PNG at `public/brand/share-card.png`; its editable layout is
`scripts/share-card.html`. Keep its setup numbers and release label in sync with
`RULES.md` when publishing a rules release.

To regenerate the image, open the HTML in Chromium at a 1200 × 630 viewport,
wait for images and fonts to finish loading, and capture the viewport as a PNG.
For example, with Playwright's Chromium installed:

```sh
npx --package=playwright playwright screenshot --browser=chromium --viewport-size="1200,630" --wait-for-timeout=2000 "file://$(pwd)/scripts/share-card.html" public/brand/share-card.png
```

Check the resulting image before committing it. Social platforms may cache a
previous preview until they fetch the deployed URL again.

## Validation

Lint and production build include TypeScript validation. Browser smoke checks
covered all pages, FAQ expansion, mobile navigation, feedback downloads, and
reference printing. All pages were checked for horizontal overflow at 390px;
the reference prints as one A4 landscape page. The form explicitly downloads
answers to the user's device rather than claiming to submit them.

## Brand

See [the brand guide](docs/BRAND.md) for logo usage, colors, typography, and the permanent tagline **SHUFFLE. SPLIT. PLAY.** The owner-supplied logo variants are stored in `public/brand/`. Application colors are foreground `#000000`, background `#FFFFFF`, and primary `#C8371C`. It is the primary visual reference; the Magic website is a secondary reference for composition.
