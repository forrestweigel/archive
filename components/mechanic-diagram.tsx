import { ArrowRight, GalleryHorizontalEnd, Layers, SearchX } from "lucide-react";

function CardMovement({
  from,
  instruction,
}: {
  from: "hand" | "archive";
  instruction: string;
}) {
  const fromHand = from === "hand";
  const Source = fromHand ? GalleryHorizontalEnd : Layers;
  const Destination = fromHand ? Layers : GalleryHorizontalEnd;

  return (
    <div className="card-movement">
      <span className="movement-instruction">{instruction}</span>
      <div className="movement-icons">
        <div className="movement-endpoint">
          <Source strokeWidth={1.5} aria-hidden="true" />
          <span>{fromHand ? "Hand" : "Archive"}</span>
        </div>
        <ArrowRight className="movement-arrow" strokeWidth={1.5} aria-hidden="true" />
        <div className="movement-endpoint">
          <Destination strokeWidth={1.5} aria-hidden="true" />
          <span>{fromHand ? "Archive" : "Hand"}</span>
        </div>
      </div>
    </div>
  );
}

export function MechanicDiagram({ type }: { type: "search" | "exchange" }) {
  return (
    <div className="mechanic-diagram">
      {type === "exchange" ? (
        <ol className="exchange-steps" aria-label="Archive Exchange steps">
          <li><CardMovement from="hand" instruction="1 · Put a card from your hand on the bottom of your Archive" /></li>
          <li><CardMovement from="archive" instruction="2 · If you do, put the top card of your Archive into your hand" /></li>
        </ol>
      ) : (
        <div className="search-steps">
          <div className="search-trigger">
            <SearchX strokeWidth={1.5} aria-hidden="true" />
            <span>Search finds <strong>zero cards</strong></span>
          </div>
          <CardMovement from="archive" instruction="Take the top card of your Archive and put it in your hand" />
        </div>
      )}
    </div>
  );
}
