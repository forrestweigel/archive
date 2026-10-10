import { ArrowRight, Layers, Plus, Shuffle } from "lucide-react";
export function DeckSplit() {
  return (
    <div
      className="deck-split"
      aria-label="Shuffle 99 cards, split into a 40-card Library and a 59-card Archive"
    >
      <div className="deck-group">
        <div className="deck-stack">
          <Shuffle className="deck-icon" strokeWidth={1.5} aria-hidden="true" />
          <span>99</span>
          <small>SHUFFLED CARDS</small>
        </div>
        <p>Commander removed</p>
      </div>
      <ArrowRight className="split-arrow" aria-hidden="true" />
      <div className="deck-group">
        <div className="deck-stack">
          <Layers className="deck-icon" strokeWidth={1.5} aria-hidden="true" />
          <span>40</span>
          <small>LIBRARY</small>
        </div>
        <p>The top 40 cards</p>
      </div>
      <Plus className="split-plus" aria-hidden="true" />
      <div className="deck-group">
        <div className="deck-stack">
          <Layers className="deck-icon" strokeWidth={1.5} aria-hidden="true" />
          <span>59</span>
          <small>ARCHIVE</small>
        </div>
        <p>The rest, face down</p>
      </div>
    </div>
  );
}
