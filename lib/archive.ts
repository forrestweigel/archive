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
    "No. Ordinary Magic effects do not interact with the Archive. Cards can only be accessed or moved as specifically provided by Archive rules.",
  ],
  [
    "What counts as a Failed Search?",
    "A Library search that finds zero cards. Finding one or more cards is not a Failed Search, even if the effect allowed you to find more. Normal Magic rules determine whether you may find zero cards.",
  ],
  [
    "When can I use Exchange?",
    "Once during each of your turns, as a sorcery. Put a card from your hand on the bottom of your Archive; if you do, put the top card of your Archive into your hand. This does not discard or exile the card.",
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
