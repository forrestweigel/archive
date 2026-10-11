import { archiveFormat } from "@/lib/format.mjs";
import { ArrowRight, Layers, Plus, Shuffle } from "lucide-react";

export function SetupDiagram() {
  return (
    <svg className="setup-diagram" viewBox="0 0 440 190" role="img" aria-label={`Split the shuffled ${archiveFormat.standardDeckSize} cards into a ${archiveFormat.librarySize}-card Library and a ${archiveFormat.standardArchiveSize}-card face-down Archive.`}>
      {[
        { x: 12, icon: Shuffle, count: archiveFormat.standardDeckSize, label: "SHUFFLED", caption: "Shuffle first" },
        { x: 175, icon: Layers, count: archiveFormat.librarySize, label: "LIBRARY", caption: `The top ${archiveFormat.librarySize} cards` },
        { x: 334, icon: Layers, count: archiveFormat.standardArchiveSize, label: "ARCHIVE", caption: "The rest, face down" },
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
