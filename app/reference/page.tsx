import Image from "next/image";
import type { Metadata } from "next";
import Markdown from "react-markdown";
import { PageIntro } from "@/components/page-intro";
import { PrintButton } from "@/components/print-button";
import { getRuleSection } from "@/lib/archive";
import { Button } from "@/components/ui/button";
import island from "@/app/artwork/island.jpg";
export const metadata: Metadata = { title: "Reference card" };
export default function Reference() {
  return (
    <>
      <PageIntro
        artwork={island}
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
        <div className="reference-grid grid gap-6 md:grid-cols-2">
          <section className="reference-sheet">
            <p className="eyebrow mb-5">QUICK REFERENCE / FRONT</p>
            <Image src="/brand/title-with-tagline.png" alt="Archive — Shuffle. Split. Play." width={1107} height={242} className="h-auto w-full max-w-80" />
            <p className="eyebrow mt-4 text-primary">ALPHA</p>
            <div className="reference-mini">99 → 40 LIBRARY + 59 ARCHIVE</div>
            <div className="prose-rules">
              <Markdown>{getRuleSection(2)}</Markdown>
            </div>
            <p className="mt-7 border-t border-border pt-5 text-sm font-bold">
              All other Commander rules apply.
            </p>
          </section>
          <section className="reference-sheet">
            <p className="eyebrow mb-5">QUICK REFERENCE / BACK</p>
            <h3>Failed Search</h3>
            <div className="prose-rules">
              <Markdown>{getRuleSection(3)}</Markdown>
            </div>
            <h3 className="mt-8 border-t border-border pt-6">
              Archive Exchange
            </h3>
            <div className="prose-rules">
              <Markdown>{getRuleSection(4)}</Markdown>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              Archive Alpha · playarchivemtg.com
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
