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
- `/changelog`: public release information

Read `AGENTS.md` and `.agents/skills/archive-format/SKILL.md` before changing
rules or presentation. Keep homepage summaries and the FAQ consistent with
`RULES.md`. The reference card also reads its rule sections from that file.

The hero uses the supplied Archive symbol; navigation, footer, reference card,
and favicon use the owner-supplied logo variants.
The shared UI uses shadcn-style Radix primitives, configured in `components.json`.

## Validation

Lint and production build include TypeScript validation. Browser smoke checks
covered all pages, FAQ expansion, mobile navigation, feedback downloads, and
reference printing. All pages were checked for horizontal overflow at 390px;
the reference prints as one A4 landscape page. The form explicitly downloads
answers to the user's device rather than claiming to submit them.

## Brand

See [the brand guide](docs/BRAND.md) for logo usage, colors, typography, and the permanent tagline **SHUFFLE. SPLIT. PLAY.** The owner-supplied logo variants are stored in `public/brand/`. Application colors are foreground `#000000`, background `#FFFFFF`, and primary `#C8371C`. It is the primary visual reference; the Magic website is a secondary reference for composition.
