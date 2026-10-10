function Hand({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="var(--diagram-surface)" stroke="currentColor" strokeWidth="2">
      <rect x="-27" y="-25" width="36" height="50" rx="3" transform="rotate(-18)" />
      <rect x="-9" y="-25" width="36" height="50" rx="3" transform="rotate(18)" />
      <rect x="-18" y="-28" width="36" height="50" rx="3" />
    </g>
  );
}

function Archive({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="var(--diagram-surface)" stroke="currentColor" strokeWidth="2">
      <rect x="-17" y="-34" width="42" height="56" rx="3" />
      <rect x="-21" y="-30" width="42" height="56" rx="3" />
      <rect x="-25" y="-26" width="42" height="56" rx="3" />
      <path d="m-4 -9 9 11-9 11-9-11Z" className="diagram-accent" fill="none" />
    </g>
  );
}

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
          <Hand x={65} y={65} />
          <Archive x={375} y={65} />
          <g className="diagram-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M112 58 C155 25 285 25 328 58 m-13-2 13 2-3-13" />
            <path d="M328 88 C285 115 155 115 112 88 m3 13-3-13 13 2" />
          </g>
          <text x="220" y="16" textAnchor="middle">1 · Put a card on the bottom</text>
          <text x="220" y="140" textAnchor="middle">2 · Take the top card</text>
          <text x="65" y="114" textAnchor="middle" className="diagram-label">HAND</text>
          <text x="375" y="114" textAnchor="middle" className="diagram-label">ARCHIVE</text>
        </>
      ) : (
        <>
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="66" cy="77" r="27" />
            <path d="m86 97 14 14" />
          </g>
          <text x="66" y="88" textAnchor="middle" className="diagram-zero">0</text>
          <text x="72" y="132" textAnchor="middle" className="diagram-label">CARDS FOUND</text>
          <path d="M139 42v96" stroke="currentColor" opacity=".2" />
          <Archive x={204} y={87} />
          <Hand x={375} y={87} />
          <path d="M247 86h78 m-9-9 9 9-9 9" className="diagram-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="290" y="26" textAnchor="middle">Take the top card</text>
          <text x="204" y="132" textAnchor="middle" className="diagram-label">ARCHIVE</text>
          <text x="375" y="132" textAnchor="middle" className="diagram-label">HAND</text>
        </>
      )}
    </svg>
  );
}
