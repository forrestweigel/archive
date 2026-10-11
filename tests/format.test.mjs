import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { archiveFormat } from "../lib/format.mjs";
import { renderShareCard } from "../scripts/generate-share-card.mjs";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("presentation values agree with the canonical rules", () => {
  const rules = read("../RULES.md");
  const capture = (pattern) => {
    const match = rules.match(pattern);
    assert.ok(match, `Cannot find canonical format value: ${pattern}`);
    return match[1];
  };
  assert.equal(capture(/\*\*Release:\*\* (\S+)/), archiveFormat.release);
  assert.equal(Number(capture(/deck of (\d+) cards/)), archiveFormat.deckSize);
  assert.equal(Number(capture(/top (\d+) cards your \*\*Library\*\*/)), archiveFormat.librarySize);
  assert.equal(Number(capture(/begins the game with \*\*(\d+) life\*\*/)), archiveFormat.startingLife);
  assert.equal(Number(capture(/usually (\d+) cards/)), archiveFormat.standardArchiveSize);
  assert.equal(Number(capture(/you may pay (\d+) mana of any type/)), archiveFormat.researchManaCost);
  assert.equal(archiveFormat.librarySize + archiveFormat.standardArchiveSize, archiveFormat.standardDeckSize);
});

test("generated share-card HTML is current", () => {
  assert.equal(read("../scripts/share-card.html"), renderShareCard(read("../scripts/share-card.template.html")),
    "Run npm run share-card:html after changing format values or the template.");
});

test("share-card rendering uses supplied format values and escapes release labels", () => {
  const html = renderShareCard(read("../scripts/share-card.template.html"), {
    ...archiveFormat, librarySize: 51, standardArchiveSize: 48, startingLife: 31, release: "Test <release>",
  });
  for (const number of [51, 48, 31]) assert.ok(html.includes(`<strong>${number}</strong>`));
  assert.ok(html.includes("ARCHIVE TEST &lt;RELEASE&gt;"));
  assert.throws(() => renderShareCard("{{unknown}}"), /Unknown share-card field/);
});
