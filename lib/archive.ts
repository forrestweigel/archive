import { archiveFormat } from "@/lib/format.mjs";
import fs from "node:fs";
import path from "node:path";

export function getChangelog() {
  return fs.readFileSync(path.join(process.cwd(), "CHANGELOG.md"), "utf8");
}

export function getRules() {
  return fs.readFileSync(path.join(process.cwd(), "RULES.md"), "utf8");
}
export function getRuleSection(number: number) {
  return (
    getRules()
      .split(new RegExp(`## ${number}\\. [^\\n]+\\n`))[1]
      ?.split(/\n## /)[0]
      .trim() ?? ""
  );
}
export const faqs = [
  [
    "Why was Archive created?",
    "Archive aims to increase variety, weaken decks that rely on a single plan, speed up games, narrow power gaps, and help with mana flood and starvation, all using your existing Commander decks without rebuilding.",
    "/about",
  ],
  [
    "Do I need to build a new deck?",
    `No. Bring an existing legal Commander deck of ${archiveFormat.deckSize} cards, including your commander or commanders. Archive does not require you to rebuild or modify it.`,
  ],
  [
    "Can I choose which cards go into my Library?",
    `No. Put your commander or commanders in the command zone, shuffle the remaining cards, then take the top ${archiveFormat.librarySize} as your Library without looking at or choosing cards. All remaining cards become your face-down Archive.`,
  ],
  [
    `Does the Archive always start with ${archiveFormat.standardArchiveSize} cards?`,
    `Not necessarily. Take the top ${archiveFormat.librarySize} cards of your shuffled deck for your Library, then put the rest into your Archive. That will usually be ${archiveFormat.standardArchiveSize} cards.`,
  ],
  [
    "Can I search or look through my Archive?",
    "You cannot freely search or browse your Archive. Research lets you look at its top card. Discovery reveals cards in order until the first card that qualifies for a failed Library search; you must take that card. Ordinary Magic effects cannot access or move Archive cards.",
  ],
  [
    "When does Discovery apply?",
    "Whenever a Library search finds zero cards, reveal Archive cards from the top one at a time until the first card that qualifies for that search or you have revealed the entire Archive. You must take the first qualifying card and put it where the search specifies, following its instructions for that card. Finding one or more cards in the Library does not cause Discovery. Normal Magic rules determine whether you may find zero cards.",
  ],
  [
    "What happens to the other cards revealed by Discovery?",
    "Put them on the bottom of your Archive face down in a random order. If no card qualifies, you get no card and return all revealed cards this way.",
  ],
  [
    "Can I skip the first qualifying card or take a different kind of card?",
    "No. You must stop at the first card that qualifies for the search and take it. Evolving Wilds can only give you the first basic land revealed, which goes onto the battlefield tapped. It cannot give you an unrelated card in hand.",
  ],
  [
    "When can I use Exchange?",
    "Once during each of your turns, as a sorcery. Put a card from your hand on the bottom of your Archive; if you do, put the top card of your Archive into your hand. This does not discard or exile the card.",
  ],
  [
    "How does Research work?",
    `Once during each of your turns, as a sorcery, you may pay ${archiveFormat.researchManaCost} mana of any type to look at the top card of your Archive. You may put that card on the bottom of your Archive or leave it on top. Research does not put a card into your hand. You can use it before Exchange to prepare the top card.`,
  ],
  [
    "Can I use Exchange and Research in the same turn?",
    "Yes. Each has its own once-per-turn limit, so you may use both during your turn, in either order, at sorcery speed.",
  ],
  [
    "Does taking a card from the Archive count as drawing?",
    "No. Exchange puts a card into your hand, while Discovery puts the first qualifying card where the search specifies. Neither action is drawing a card. Research does not put a card into your hand.",
  ],
  [
    "Does the Archive refill an empty Library?",
    "No. The Archive is not a backup Library. Normal rules for drawing from an empty Library apply, and cards do not automatically move into your Library.",
  ],
  [
    "What about commander damage and mulligans?",
    "Normal Commander rules still apply, including commander damage, commander tax, the command zone, color identity, deck construction, and mulligans.",
  ],
];
