import { ArrowRight, Layers, Plus, Shuffle } from "lucide-react";
export function DeckSplit() {
  return (
    <div
      className="deck-split"
      aria-label="Shuffle 99 cards, split into a 50-card Library and a 49-card Archive."
    >
      <div className="deck-group">
        <div className="deck-stack">
          <Shuffle className="deck-icon" strokeWidth={1.5} aria-hidden="true" />
          <span>99</span>
          <small>SHUFFLED CARDS</small>
        </div>
        <p>Command zone set aside</p>
      </div>
      <ArrowRight className="split-arrow" aria-hidden="true" />
      <div className="deck-group">
        <div className="deck-stack">
          <Layers className="deck-icon" strokeWidth={1.5} aria-hidden="true" />
          <span>50</span>
          <small>LIBRARY</small>
        </div>
        <p>The top 50 cards</p>
      </div>
      <Plus className="split-plus" aria-hidden="true" />
      <div className="deck-group">
        <div className="deck-stack">
          <Layers className="deck-icon" strokeWidth={1.5} aria-hidden="true" />
          <span>49</span>
          <small>ARCHIVE</small>
        </div>
        <p>The rest, face down</p>
      </div>
    </div>
  );
}
