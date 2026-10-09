---
name: archive-format
description: Product, rules-context, terminology, design, and website guidance for Archive Alpha, the Commander variant at playarchivemtg.com.
---

# Archive Format Skill

## Purpose

Use this skill when working on the Archive website, explaining the format, writing onboarding or FAQ content, designing Archive-specific UI, or making implementation decisions that depend on the format's goals.

For exact gameplay rules, always read the repository-root `RULES.md`. `RULES.md` is the canonical rules source.

## What Archive is

**Archive** is a Magic: The Gathering Commander variant designed around one constraint: players should be able to bring an existing legal Commander deck and play without rebuilding it.

A normal Commander deck is transformed at game setup:

- The commander remains the normal commander.
- The other 99 cards are shuffled.
- 40 become the player's Library.
- 59 become the player's face-down Archive.
- Players start at 30 life.

The random 40-card Library means the same Commander deck can produce substantially different games.

## Core experience

Archive is intended to:

- Let players use Commander decks they already own.
- Reduce deterministic access to a deck's full 99.
- Reduce the consistency of tutors, linear packages, and exact-card plans.
- Reward redundancy, flexible cards, improvisation, and adapting to what is available.
- Produce somewhat faster games through a smaller Library and 30 starting life.
- Make overlooked cards in existing Commander decks matter more often.
- Add variance without requiring drafting, rebuilding, or maintaining a separate deck.

The format should remain easy to explain and physically easy to play.

## Signature mechanics

### Failed Search

When a Library search finds zero cards, the player puts the top card of their Archive into their hand.

This gives unsuccessful searches a format-specific fallback without allowing players to look through or select cards from the Archive.

### Archive Exchange

Once during each of their turns, as a sorcery, a player may put a card from their hand on the bottom of their Archive. If they do, they put the top card of their Archive into their hand.

Conceptually:

`HAND → bottom of ARCHIVE`

`top of ARCHIVE → HAND`

Archive Exchange is a one-for-one exchange. It keeps the Archive central to gameplay while preserving its unknown top card.

## Design principles

When proposing website copy, UI, examples, or future features, preserve these principles:

### Bring your deck

Archive's strongest onboarding benefit is that it requires no special deckbuilding. Avoid language that implies players need an Archive-specific deck.

### The Archive stays unknown

Players receive the top card of the Archive rather than searching it. Do not casually introduce browsing, choosing, revealing, tutoring, or rearranging the Archive.

### Variance is intentional

The 40-card Library is not a problem the website should apologize for or attempt to solve. The random subset is central to the format.

### Keep the rules small

Archive should feel like Commander plus a small number of meaningful changes. Avoid presenting ordinary Commander behavior as if it were an Archive-specific rule.

### Let games end

The 40-card Library and 30 starting life are part of the format's pacing. The Archive is not intended to automatically refill or replace an exhausted Library.

## Terminology

Use these terms consistently.

**Archive**  
The face-down 59-card pile created during setup. It is separate from the Library and ordinary Magic zones.

**Library**  
The 40-card Library created from the shuffled 99 during Archive setup.

**Failed Search**  
The Archive rule that applies when a Library search finds zero cards.

**Archive Exchange**  
The once-per-turn sorcery-speed format action that puts a card from hand on the bottom of the Archive and moves the top Archive card into hand.

**Alpha**  
The current public release designation. Prefer `Archive Alpha` when context is needed.

Do not refer to the current release using semantic-version-style numbering.

## Website identity

Domain: **playarchivemtg.com**

### Design reference

The owner-supplied logo in `public/brand/full-no-background.png` and `docs/BRAND.md` define Archive’s primary visual identity. The supplied lockup combines a vermilion stacked geometric symbol, a black sculptural serif ARCHIVE wordmark, and **SHUFFLE. SPLIT. PLAY.** above the wordmark.

Use [the official Magic website](https://magic.wizards.com/en) as a secondary guide for visual hierarchy, composition, and promotional presentation. Archive’s supplied branding takes precedence.

### Logo and tagline

Use the supplied logo artwork rather than recreating the symbol or typesetting the wordmark. Preserve its proportions, colors, internal spacing, and tagline placement. The supplied variants are `full-no-background.png`, `icon.png`, `title-with-tagline.png`, and `title.png` in `public/brand/`. Use the full lockup for spacious brand placements, the symbol for icons and favicons, the title with tagline for reference materials, and the title alone for navigation. Black wordmarks need light surfaces. Preserve the supplied artwork; additional variants should come from the project owner.

The permanent brand tagline is **SHUFFLE. SPLIT. PLAY.** Keep the uppercase lettering, word order, and periods. Use Gotham Narrow when the tagline appears as separate text. Give it a prominent homepage or brand placement without repeating it next to a lockup that already includes it. Keep the plain-language onboarding explanation and setup diagram alongside the brand message.

The website should feel:

- Bold and inviting
- Polished and energetic
- Visually immersive where appropriate assets are available
- Easy to scan and learn from
- Credible as the format’s canonical home

### Visual language

Use:

- The supplied Archive logo in a prominent placement on a compatible background
- Large hero sections with bold display headings, short supporting copy, and strong calls to action
- Original or explicitly supplied imagery that supports the format’s presentation
- Contrasting dark and light content sections
- Application foreground **#000000**, background **#FFFFFF**, and primary **#C8371C**, with neutral gray supporting surfaces and prominent filled action buttons
- **Gotham Narrow** for headings, display copy, and the tagline; preserve the supplied logo’s custom serif wordmark as artwork
- **Open Sans** for body text and supporting interface copy
- Load the supplied `app/fonts/GothamNarrow-Bold.woff2` (700) and `app/fonts/GothamNarrow-Black.woff2` (900) through `next/font/local`; use Black for primary display headings and Bold for other headings
- Editorial resource grids, clear card headings, and generous spacing
- A prominent, readable `99 → 40 Library + 59 Archive` setup diagram
- Responsive layouts, accessible contrast, and visible keyboard focus states

Keep the homepage’s rules and onboarding clear within this more expressive presentation. Visual richness should support the message that players can bring their existing Commander decks.

Avoid:

- Copying the reference website’s branding, layout, or assets verbatim
- Magic logos, proprietary artwork, mana symbols, or card frames without assets and explicit permission from the project owner
- Implying endorsement or affiliation with Wizards of the Coast
- Decorative imagery behind detailed rules text that reduces readability
- Dense walls of rules on the homepage


## Frontend system

The website frontend uses **shadcn/ui** as its component system.

When building UI:

- Use shadcn/ui components wherever an appropriate component exists.
- Use Tailwind CSS in the standard shadcn/ui approach.
- Compose and theme shadcn components to create the Archive visual identity.
- Do not introduce a competing general-purpose UI component library without explicit approval.
- Custom components are appropriate for Archive-specific visuals such as the deck split diagram or gameplay mechanic diagrams.

Accessibility and mobile behavior are requirements, not optional polish.

## Homepage communication hierarchy

A first-time visitor should understand Archive in this order:

1. **Archive is a Commander variant.**
2. **Use the Commander deck you already have.**
3. **Shuffle the 99 and split it into a 40-card Library and 59-card Archive.**
4. **Start at 30 life.**
5. **Learn Failed Search.**
6. **Learn Archive Exchange.**
7. **Everything else follows normal Commander rules.**

The visual centerpiece should be the setup transformation:

`99 → 40 LIBRARY + 59 ARCHIVE`

Do not bury this below extensive explanation.

## Suggested site structure

### Home / How to Play

Fast onboarding with the premise, setup diagram, starting life, and the two Archive mechanics.

### Rules

A polished rendering of the canonical `RULES.md`.

### FAQ

Answer actual questions that arise from the Alpha rules and playtesting. Do not manufacture rules answers when `RULES.md` does not resolve the issue.

### Reference Card

Provide the printable/downloadable Archive reference card and, where useful, a screen-friendly version.

### Playtest Feedback

Collect structured feedback useful for Alpha development. Useful fields may include:

- Player count
- Approximate game duration
- Number or frequency of Archive Exchanges
- Whether Failed Search occurred and mattered
- How the game ended
- Whether the smaller Library materially affected the game
- Rules confusion encountered
- Overall enjoyment
- Freeform feedback

Do not turn the feedback form into an exhaustive survey.

### Changelog

Track public Archive releases beginning with **Alpha**. The changelog should document public releases and subsequent changes rather than internal brainstorming.

## Reference card guidance

The reference card should contain only information needed at the table.

Front:

- Supplied Archive logo, with **SHUFFLE. SPLIT. PLAY.** readable when space allows
- Alpha designation
- Setup in plain text
- Strong visual: `99 → 40 Library + 59 Archive`
- Starting Life: 30
- Brief Archive definition
- `All other Commander rules apply.`

Back:

- Failed Search
- Archive Exchange

Use large readable typography and simple visual sequences. Avoid excessive numbered steps, repeated reminders, or explanations of ordinary Commander rules.

## Rules integrity

Never silently resolve ambiguity by creating a new rule.

If implementation or copy raises a question that is not answered by `RULES.md`:

1. Identify the ambiguity.
2. Explain why it matters if useful.
3. Ask the project owner for a ruling.
4. Update `RULES.md` only after that ruling is made.

The website should accurately communicate Archive, not become a source of accidental rules changes.

## Trademark and affiliation posture

Archive is a community-created variant for Magic: The Gathering Commander.

Do not imply endorsement, sponsorship, ownership, or official status from Wizards of the Coast or other rights holders. Prefer original Archive branding and graphics over proprietary game artwork or copied visual assets.
