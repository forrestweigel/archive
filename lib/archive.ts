import fs from "node:fs";
import path from "node:path";

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
    "Do I need to build a new deck?",
    "No. Bring an existing legal Commander deck: 1 commander and 99 other cards. Archive does not require you to rebuild or modify it.",
  ],
  [
    "Can I choose which cards go into my Library?",
    "No. Shuffle the 99 cards, then take the top 40 as your Library without looking at or choosing cards. The remaining 59 become your face-down Archive.",
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
    "When can I use Archive Exchange?",
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
