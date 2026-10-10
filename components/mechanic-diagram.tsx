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
      <div className="movement-endpoint">
        <Source strokeWidth={1.5} aria-hidden="true" />
        <span>{fromHand ? "Hand" : "Archive"}</span>
      </div>
      <div className="movement-action">
        <span>{instruction}</span>
        <ArrowRight strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="movement-endpoint">
        <Destination strokeWidth={1.5} aria-hidden="true" />
        <span>{fromHand ? "Archive" : "Hand"}</span>
      </div>
    </div>
  );
}

export function MechanicDiagram({ type }: { type: "search" | "exchange" }) {
  return (
    <div className="mechanic-diagram">
      {type === "exchange" ? (
        <ol className="exchange-steps" aria-label="Archive Exchange steps">
          <li><CardMovement from="hand" instruction="1 · Put one card on the bottom" /></li>
          <li><CardMovement from="archive" instruction="2 · If you do, take the top card" /></li>
        </ol>
      ) : (
        <div className="search-steps">
          <div className="search-trigger">
            <SearchX strokeWidth={1.5} aria-hidden="true" />
            <span>Search finds <strong>zero cards</strong></span>
          </div>
          <CardMovement from="archive" instruction="Take the top card" />
        </div>
      )}
    </div>
  );
}
