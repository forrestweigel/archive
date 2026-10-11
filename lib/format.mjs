// Presentation values for the current rules. Keep these aligned with RULES.md.
// The Archive contains all remaining cards; this size is the standard example.
const deckSize = 100;
const standardCommanderCount = 1;
const librarySize = 50;

export const archiveFormat = Object.freeze({
  release: "Alpha",
  deckSize,
  librarySize,
  startingLife: 30,
  researchManaCost: 4,
  standardDeckSize: deckSize - standardCommanderCount,
  standardArchiveSize: deckSize - standardCommanderCount - librarySize,
});

export const releaseSlug = archiveFormat.release.toLowerCase().replace(/[^a-z0-9]+/g, "-");
