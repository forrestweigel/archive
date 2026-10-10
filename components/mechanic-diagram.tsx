import { ArrowRight, ArrowRightLeft, Hand, Layers, SearchX } from "lucide-react";

export function MechanicDiagram({ type }: { type: "search" | "exchange" }) {
  const exchange = type === "exchange";
  return (
    <svg
      className="mechanic-diagram"
      viewBox="0 0 440 144"
      role="img"
      aria-label={exchange
        ? "Archive Exchange: first put a card from your hand on the bottom of your Archive. If you do, take the top Archive card into your hand."
        : "Failed Search: when a Library search finds zero cards, take the top Archive card into your hand."}
    >
      {exchange ? (
        <>
          <Hand x={35} y={36} size={60} strokeWidth={1.5} aria-hidden="true" />
          <Layers x={345} y={36} size={60} strokeWidth={1.5} aria-hidden="true" />
          <ArrowRightLeft x={180} y={34} size={80} strokeWidth={1.5} className="diagram-accent" aria-hidden="true" />
          <text x="220" y="16" textAnchor="middle">1 · Put a card on the bottom</text>
          <text x="220" y="140" textAnchor="middle">2 · Take the top card</text>
          <text x="65" y="114" textAnchor="middle" className="diagram-label">HAND</text>
          <text x="375" y="114" textAnchor="middle" className="diagram-label">ARCHIVE</text>
        </>
      ) : (
        <>
          <SearchX x={42} y={54} size={60} strokeWidth={1.5} aria-hidden="true" />
          <text x="72" y="132" textAnchor="middle" className="diagram-label">ZERO CARDS FOUND</text>
          <Layers x={174} y={54} size={60} strokeWidth={1.5} aria-hidden="true" />
          <Hand x={345} y={54} size={60} strokeWidth={1.5} aria-hidden="true" />
          <ArrowRight x={270} y={64} size={40} strokeWidth={1.5} className="diagram-accent" aria-hidden="true" />
          <text x="290" y="26" textAnchor="middle">Take the top card</text>
          <text x="204" y="132" textAnchor="middle" className="diagram-label">ARCHIVE</text>
          <text x="375" y="132" textAnchor="middle" className="diagram-label">HAND</text>
        </>
      )}
    </svg>
  );
}
