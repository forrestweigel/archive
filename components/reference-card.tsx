import { archiveFormat } from "@/lib/format.mjs";
import Image from "next/image";
import Markdown from "react-markdown";
import { PrintButton } from "@/components/print-button";
import { getRuleSection } from "@/lib/archive";
import { SetupDiagram } from "@/components/setup-diagram";
import { MechanicDiagram } from "@/components/mechanic-diagram";

export function ReferenceCard() {
  return (
      <section id="reference-card" aria-labelledby="reference-title" className="shell section-pad print-area">
        <div className="no-print mb-9 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 id="reference-title" className="text-3xl">REFERENCE CARD</h2>
            <p className="mt-3 text-muted-foreground">Print both panels or save them as a PDF.</p>
          </div>
          <PrintButton />
        </div>
        <div className="reference-grid grid gap-6 lg:grid-cols-2">
          <section className="reference-sheet">
            <Image src="/brand/full-no-background.png" alt="Archive: Shuffle. Split. Play." width={1305} height={242} className="h-auto w-full max-w-80" />
            <p className="eyebrow mt-4 text-primary">{archiveFormat.release.toUpperCase()}</p>
            <h2 className="reference-setup-heading">Set up your game</h2>
            <div className="reference-commander">
              <p>Put your commander or commanders in the command zone. Shuffle the remaining cards.</p>
            </div>
            <SetupDiagram />
            <p className="reference-split-note">Take the top {archiveFormat.librarySize} without looking at or choosing cards. Place the remaining {archiveFormat.standardArchiveSize} cards face down as your Archive.</p>
            <div className="reference-life">
              <strong className="reference-life-total">{archiveFormat.startingLife}</strong>
              <div><h3>Starting life</h3><p>Continue normal Commander setup.</p></div>
            </div>
            <p className="reference-reminder">
              Keep your Archive face down and separate from your Library. Only Archive-specific rules can move its cards. It is not a backup Library.
            </p>
            <p className="reference-footer">
              All other Commander rules apply.<br /><a href="https://playarchivemtg.com" className="underline underline-offset-4">https://playarchivemtg.com</a>
            </p>
          </section>
          <section className="reference-sheet">
            <h3>Discovery</h3>
            <MechanicDiagram type="discovery" />
            <div className="prose-rules">
              <Markdown>{getRuleSection(3)}</Markdown>
            </div>
            <h3 className="reference-mechanic-heading">
              Exchange
            </h3>
            <MechanicDiagram type="exchange" />
            <div className="prose-rules">
              <Markdown>{getRuleSection(4)}</Markdown>
            </div>
            <h3 className="reference-mechanic-heading">Research</h3>
            <MechanicDiagram type="research" />
            <div className="prose-rules">
              <Markdown>{getRuleSection(5)}</Markdown>
            </div>
            <p className="reference-footer">
              <a href="https://playarchivemtg.com" className="underline underline-offset-4">https://playarchivemtg.com</a>
            </p>
          </section>
        </div>
      </section>
  );
}
