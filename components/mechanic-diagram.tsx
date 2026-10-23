import { ArrowRight, ChevronsDown, ChevronsUp, GalleryHorizontalEnd, Layers, SearchX } from "lucide-react";
import { archiveFormat } from "@/lib/format.mjs";

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

export function MechanicDiagram({ type }: { type: "discovery" | "exchange" | "research" }) {
  return (
    <div className="mechanic-diagram">
      {type === "exchange" ? (
        <ol className="exchange-steps" aria-label="Exchange steps">
          <li><CardMovement from="hand" instruction="1 · Put a card from your hand on the bottom of your Archive" /></li>
          <li><CardMovement from="archive" instruction="2 · If you do, put the top card of your Archive into your hand" /></li>
        </ol>
      ) : (
        <div className="search-steps">
          <div className="search-trigger">
            {type === "research" ? (
              <span>Pay <strong>{archiveFormat.researchManaCost} mana of any type</strong></span>
            ) : (
              <>
                <SearchX strokeWidth={1.5} aria-hidden="true" />
                <span>Search finds <strong>zero cards</strong></span>
              </>
            )}
          </div>
          {type === "research" ? (
            <div className="card-movement">
              <span className="movement-instruction">Look at the top card of your Archive</span>
              <div className="movement-icons">
                <div className="movement-endpoint">
                  <ChevronsUp strokeWidth={1.5} aria-hidden="true" />
                  <span>Leave on top</span>
                </div>
                <span className="movement-instruction">or</span>
                <div className="movement-endpoint">
                  <ChevronsDown strokeWidth={1.5} aria-hidden="true" />
                  <span>Put on bottom</span>
                </div>
              </div>
            </div>
          ) : (
            <ol className="exchange-steps movement-instruction" aria-label="Discovery steps">
              <li>Reveal from the top until the <strong>first qualifying card</strong>.</li>
              <li>You must take it <strong>where the search specifies</strong>.</li>
              <li>Put the rest on the bottom in a random order. No match? You get no card.</li>
            </ol>
          )}
        </div>
      )}
    </div>
  );
}
