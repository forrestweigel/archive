export function SetupDiagram() {
  return (
    <svg className="setup-diagram" viewBox="0 0 440 190" role="img" aria-label="Split the shuffled 99 cards into a 40-card Library and a 59-card face-down Archive.">
      {[
        { x: 12, count: "99", label: "SHUFFLED", caption: "Shuffle first" },
        { x: 175, count: "40", label: "LIBRARY", caption: "The top 40 cards" },
        { x: 334, count: "59", label: "ARCHIVE", caption: "The rest, face down" },
      ].map(({ x, count, label, caption }) => (
        <g key={count} transform={`translate(${x} 18)`}>
          <g fill="white" stroke="currentColor" strokeWidth="1.5">
            <rect x="8" y="-8" width="82" height="116" rx="3" />
            <rect x="4" y="-4" width="82" height="116" rx="3" />
            <rect width="82" height="116" rx="3" />
          </g>
          <text x="41" y="70" textAnchor="middle" className="setup-count">{count}</text>
          <text x="41" y="94" textAnchor="middle" className="setup-label">{label}</text>
          <text x="41" y="146" textAnchor="middle" className="setup-caption-text">{caption}</text>
        </g>
      ))}
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M119 76h29 m-9-9 9 9-9 9" />
        <path d="M287 76h22 m-11-11v22" />
      </g>
    </svg>
  );
}
