import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import Markdown from "react-markdown";
import { Crown, Heart } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { PrintButton } from "@/components/print-button";
import { getRuleSection } from "@/lib/archive";
import { Button } from "@/components/ui/button";
import { SetupDiagram } from "@/components/setup-diagram";
import { MechanicDiagram } from "@/components/mechanic-diagram";
import goblet from "@/app/artwork/goblet.jpg";
export const metadata = createPageMetadata({
  title: "Reference card",
  description: "Keep Archive Alpha at the table: a visual guide to setup, 30 starting life, Failed Search, and Archive Exchange. Print or save as PDF.",
  path: "/reference",
});
export default function Reference() {
  return (
    <>
      <PageIntro
        artwork={goblet}
        artworkPosition="center 40%"
        title="Reference card"
        description="Print both panels, save them as a PDF, or download a text copy."
      />
      <div className="shell section-pad print-area">
        <div className="no-print mb-9 flex flex-wrap gap-3">
          <PrintButton />
          <Button asChild variant="outline">
            <a
              href="/reference/download"
              download="archive-alpha-reference.txt"
            >
              Download text reference
            </a>
          </Button>
        </div>
        <div className="reference-grid grid gap-6 lg:grid-cols-2">
          <section className="reference-sheet">
            <p className="eyebrow mb-5">QUICK REFERENCE / FRONT</p>
            <Image src="/brand/title-with-tagline.png" alt="Archive — Shuffle. Split. Play." width={1107} height={242} className="h-auto w-full max-w-80" />
            <p className="eyebrow mt-4 text-primary">ALPHA</p>
            <h2 className="reference-setup-heading">Set up your game</h2>
            <div className="reference-commander">
              <Crown aria-hidden="true" />
              <p>Put your commander in the command zone. Shuffle the other 99 cards.</p>
            </div>
            <SetupDiagram />
            <p className="reference-split-note">Split without looking at or choosing cards.</p>
            <div className="reference-life">
              <div className="reference-life-total"><Heart aria-hidden="true" /><strong>30</strong></div>
              <div><h3>Starting life</h3><p>Continue normal Commander setup.</p></div>
            </div>
            <p className="reference-reminder">
              Keep your Archive face down and separate from your Library. Only Archive-specific rules can move its cards. It is not a backup Library.
            </p>
            <p className="reference-footer">
              All other Commander rules apply.<br />Archive Alpha · playarchivemtg.com
            </p>
          </section>
          <section className="reference-sheet">
            <p className="eyebrow mb-5">QUICK REFERENCE / BACK</p>
            <h3>Failed Search</h3>
            <MechanicDiagram type="search" />
            <div className="prose-rules">
              <Markdown>{getRuleSection(3)}</Markdown>
            </div>
            <h3 className="reference-exchange-heading">
              Archive Exchange
            </h3>
            <MechanicDiagram type="exchange" />
            <div className="prose-rules">
              <Markdown>{getRuleSection(4)}</Markdown>
            </div>
            <p className="reference-footer">
              Archive Alpha · playarchivemtg.com
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
