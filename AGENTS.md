# Archive Website — Codex Instructions

## Project

This repository contains the official website for **Archive**, a Magic: The Gathering Commander variant.

- Website: `playarchivemtg.com`
- Current rules release: **Alpha**
- Canonical rules source: `RULES.md`
- Product/context source: `.agents/skills/archive-format/SKILL.md`
- Brand source: `docs/BRAND.md` and the owner-supplied logo in `public/brand/full-no-background.png`

## Source of truth

Before making changes that involve Archive rules, terminology, gameplay explanations, FAQs, onboarding, or examples:

1. Read `RULES.md`.
2. Read `.agents/skills/archive-format/SKILL.md` when broader product, design, or website context is relevant.
3. Treat `RULES.md` as authoritative if any other project copy conflicts with it.
4. Do not invent, infer, rebalance, or silently modify Archive rules.
5. If a requested feature exposes an unresolved rules question, flag it for the project owner instead of inventing an answer.

Only current Archive rules belong in public-facing copy. Do not add speculative mechanics or alternate rules unless explicitly requested.

## Frontend requirement

Use **shadcn/ui components for the frontend**.

- Prefer shadcn/ui primitives and composition patterns for buttons, cards, navigation, dialogs, forms, accordions, tabs, tooltips, sheets, alerts, and other applicable interface elements.
- Use Tailwind CSS for styling and layout in the normal shadcn/ui pattern.
- Extend shadcn components through project styling rather than introducing a competing component library.
- Do not add another general-purpose frontend component framework without explicit approval.
- Keep custom components focused on Archive-specific presentation such as the 99 → 40 + 59 setup diagram.

## Visual direction

The owner-supplied Archive logo is the primary visual identity reference. Read `docs/BRAND.md` before changing branding or presentation. The logo combines a vermilion stacked geometric symbol, a black sculptural serif ARCHIVE wordmark, and the bold condensed tagline **SHUFFLE. SPLIT. PLAY.**.

Use [the official Magic website](https://magic.wizards.com/en) as a secondary reference for hierarchy, composition, and promotional presentation. Archive’s supplied logo and brand guidance take precedence.

- Use the supplied full logo (`full-no-background.png`, including symbol, wordmark, and tagline) in the header on a compatible light background, with clear navigation
- Large, immersive hero sections with bold display headings, concise supporting copy, and prominent calls to action
- Image-led composition where original or explicitly supplied assets are available
- Contrasting dark and light sections that give onboarding, rules, and resources distinct visual emphasis
- Application foreground **#000000**, background **#FFFFFF**, and primary **#C8371C**, with neutral gray supporting surfaces, strong filled buttons, and clear secondary actions
- **Gotham Narrow** for headings, display copy, and the tagline; preserve the supplied logo’s custom serif wordmark as artwork
- **Open Sans** for body text and supporting interface copy
- Load the supplied `app/fonts/GothamNarrow-Bold.woff2` (700) and `app/fonts/GothamNarrow-Black.woff2` (900) through `next/font/local`; use Black for primary display headings and Bold for other headings
- Editorial grids and resource cards with strong headings and generous spacing
- Mobile-first layouts that retain the same hierarchy on smaller screens
- Accessible contrast, visible focus states, semantic structure, and keyboard navigation

The site should feel like a polished game website with an inviting, energetic presentation. Keep Archive’s setup diagram and rules easy to understand within that presentation.

Use the reference for design direction, not as a template to copy. Preserve original Archive branding; do not reuse Magic logos, artwork, mana symbols, card frames, or imply Wizards of the Coast affiliation. Do not add decorative imagery that makes rules harder to read.

## Product priorities

Archive has six design goals:

1. Increase variety between games.
2. Weaken decks that rely on a single plan.
3. Speed up games.
4. Normalize power levels between decks.
5. Help players overcome both mana flood and mana starvation.
6. Require no rebuilding: use existing legal Commander decks and just play.

Describe these as design goals, not proven playtest outcomes. No rebuilding is a goal in its own right. Explain the Commander problems behind the format; improvisation is part of the intended experience, not its whole purpose. Keep hero and FAQ copy comparable in length to the surrounding content.

The site should help a Commander player answer these questions quickly:

1. What is Archive?
2. Can I use my existing Commander deck?
3. How do I set up a game?
4. What rules are different?
5. Where can I read the complete rules?
6. Where can I get the reference card?
7. How can I submit playtest feedback?

The key onboarding message is that **players use their existing legal Commander decks without rebuilding them**.

The defining setup visual is:

`99 cards → 40-card Library + 59-card Archive`

## Planned site areas

The initial site should support:

- Homepage / How to Play
- Rules & Reference (complete rules and printable reference card on `/rules`)
- About Archive (six design goals on `/about`, linked from the hero and FAQ; explain the goals and problems they address, not the rules or mechanics used to achieve them)
- FAQ
- Playtest Feedback
- Changelog / release information

Keep the initial information architecture small. Avoid adding community, account, social, deckbuilding, or content features unless requested.

## Content conventions

**Quality over quantity, every time.** Every heading, paragraph, section, and page must help a player understand the format or complete a task. Remove content that has no distinct purpose instead of filling space.

- Use direct, descriptive headings and concrete explanations. Avoid vague promotional phrases, invented slogans, and decorative labels.
- Keep the permanent brand tagline, but do not surround it with additional catchphrases.
- Do not repeat information just to fill a layout. A short page is acceptable; an unnecessary section should be removed.
- Describe what the site actually supports. Do not promise submissions, future features, or release plans that have not been established.
- Keep `CHANGELOG.md` as a concise record of shipped rules releases, newest first. Preserve older entries; record actual changes and confirmed release dates. Do not add speculative Beta content, roadmaps, or repeat the rules to make the page longer. See `README.md` for the release workflow.

The permanent brand tagline is **SHUFFLE. SPLIT. PLAY.** Preserve its uppercase lettering, word order, and periods. Use it in prominent brand placements; it complements the onboarding explanation and does not replace the setup rules.

Use **Archive Alpha** or **Alpha** for the current release. Do not label the current format `v0.2`.

Capitalize defined format terms consistently:

- Archive
- Library
- Failed Search
- Exchange

Use concise explanations. The homepage should teach the format quickly; `RULES.md` should drive the detailed rules page and FAQ.

## Development behavior

When implementing:

- Reuse shadcn/ui components before creating generic UI primitives.
- Keep rules content easy to update.
- Avoid duplicating canonical rule text across hard-coded components when a maintainable content source is practical.
- Preserve responsive behavior and accessibility.
- Do not let visual polish obscure rules clarity.
- Do not use trademarked Magic artwork, mana symbols, card frames, or other proprietary visual assets unless the project owner supplies assets and explicitly asks for their use.
