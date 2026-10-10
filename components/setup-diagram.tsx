import { ArrowRight, Layers, Plus, Shuffle } from "lucide-react";

export function SetupDiagram() {
  return (
    <svg className="setup-diagram" viewBox="0 0 440 190" role="img" aria-label="Split the shuffled 99 cards into a 40-card Library and a 59-card face-down Archive.">
      {[
        { x: 12, icon: Shuffle, count: "99", label: "SHUFFLED", caption: "Shuffle first" },
        { x: 175, icon: Layers, count: "40", label: "LIBRARY", caption: "The top 40 cards" },
        { x: 334, icon: Layers, count: "59", label: "ARCHIVE", caption: "The rest, face down" },
      ].map(({ x, icon: Icon, count, label, caption }) => (
        <g key={count} transform={`translate(${x} 6)`}>
          <Icon x={15} y={0} size={52} strokeWidth={1.5} aria-hidden="true" />
          <text x="41" y="112" textAnchor="middle" className="setup-count">{count}</text>
          <text x="41" y="138" textAnchor="middle" className="setup-label">{label}</text>
          <text x="41" y="166" textAnchor="middle" className="setup-caption-text">{caption}</text>
        </g>
      ))}
      <ArrowRight x={117} y={82} size={32} aria-hidden="true" />
      <Plus x={282} y={82} size={32} aria-hidden="true" />
    </svg>
  );
}
