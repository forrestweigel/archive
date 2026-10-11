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
No database is required. Feedback email delivery requires the server settings below.

## Content and pages

- `/`: overview, setup, and core mechanics
- `/rules`: renders the canonical `RULES.md` and printable reference card with save-as-PDF support
- `/faq`: Alpha rules questions
- `/about`: the six design goals behind Archive
- `/reference`: redirects to `/rules#reference-card`
- `/feedback`: emails playtest feedback to Archive
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
   report and email headings, plus `AGENTS.md` and the Archive skill. Review homepage and
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

Check the resulting image before committing it. After regenerating the PNG,
update the `?v=` value in `lib/metadata.ts` (for example, to the first eight
characters of the PNG’s SHA-256 hash) so the image has a new preview URL.
Social platforms may also cache the page metadata or existing messages; those
previews may need a platform-specific refresh after deployment.

## Validation

Lint and production build include TypeScript validation. Browser smoke checks
covered all pages, FAQ expansion, mobile navigation, feedback downloads (before email delivery was added), and
reference printing. All pages were checked for horizontal overflow at 390px;
the reference prints as one A4 landscape page. Email endpoint tests cover validation, recipient control, retry keys, and delivery
failures. Run `npm test`; these mock the provider and do not send real emails.

## Brand

See [the brand guide](docs/BRAND.md) for logo usage, colors, typography, and the permanent tagline **SHUFFLE. SPLIT. PLAY.** The owner-supplied logo variants are stored in `public/brand/`. Application colors are foreground `#000000`, background `#FFFFFF`, and primary `#C8371C`. It is the primary visual reference; the Magic website is a secondary reference for composition.

## Feedback email setup

The form posts to `/api/feedback`, which sends a plain-text report using the
[Resend email API](https://resend.com/docs/api-reference/emails/send-email).
The recipient defaults to `eldrxofficial@gmail.com`. No database is used.

1. Create a Resend account and verify a sending domain you own (for example,
   `playarchivemtg.com`) using the DNS records Resend supplies.
2. Create a sending API key. Copy `.env.example` to `.env.local` and set
   `RESEND_API_KEY` and `FEEDBACK_FROM_EMAIL` to the key and a sender on your
   verified domain. `FEEDBACK_TO_EMAIL` optionally overrides the recipient.
3. Add the same variables to the hosting provider's server environment and
   redeploy. Never prefix them with `NEXT_PUBLIC_` or commit credentials.
   Hosting must support Next.js Node.js route handlers; a static export cannot
   send email through this endpoint.
4. Submit a report on the deployed site and check the recipient's inbox and
   spam folder, plus the delivery status in Resend. API acceptance confirms a
   submission, not final inbox delivery.

The endpoint validates and bounds input, uses a hidden spam-trap field, rejects
cross-origin browser submissions, and uses Resend idempotency keys to avoid
resending identical retries within the provider's retention window. These are
basic protections, not a distributed rate limiter; configure the host's request
rate limits for `/api/feedback` when deploying publicly.

If configuration is missing or the provider fails, the form reports the error
and keeps the answers available for retry. Automated tests mock
Resend; a live delivery check requires configured credentials.
