import { archiveFormat } from "@/lib/format.mjs";
import { ArrowRight, Layers, Plus, Shuffle } from "lucide-react";
export function DeckSplit() {
  return (
    <div
      className="deck-split"
      aria-label={`Shuffle ${archiveFormat.standardDeckSize} cards, split into a ${archiveFormat.librarySize}-card Library and a ${archiveFormat.standardArchiveSize}-card Archive.`}
    >
      <div className="deck-group">
        <div className="deck-stack">
          <Shuffle className="deck-icon" strokeWidth={1.5} aria-hidden="true" />
          <span>{archiveFormat.standardDeckSize}</span>
          <small>SHUFFLED CARDS</small>
        </div>
        <p>Command zone set aside</p>
      </div>
      <ArrowRight className="split-arrow" aria-hidden="true" />
      <div className="deck-group">
        <div className="deck-stack">
          <Layers className="deck-icon" strokeWidth={1.5} aria-hidden="true" />
          <span>{archiveFormat.librarySize}</span>
          <small>LIBRARY</small>
        </div>
        <p>The top {archiveFormat.librarySize} cards</p>
      </div>
      <Plus className="split-plus" aria-hidden="true" />
      <div className="deck-group">
        <div className="deck-stack">
          <Layers className="deck-icon" strokeWidth={1.5} aria-hidden="true" />
          <span>{archiveFormat.standardArchiveSize}</span>
          <small>ARCHIVE</small>
        </div>
        <p>The rest, face down</p>
      </div>
    </div>
  );
}
