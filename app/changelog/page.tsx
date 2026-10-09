import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
export const metadata: Metadata = { title: "Changelog" };
export default function Changelog() {
  return (
    <>
      <PageIntro
        eyebrow="THE STORY SO FAR"
        title="Just the beginning."
        description="Public releases and changes to Archive. This is where the format’s next chapters will live."
      />
      <div className="shell section-pad">
        <article className="max-w-3xl border-l-2 border-primary pl-8">
          <p className="eyebrow text-primary">CURRENT RELEASE</p>
          <h2 className="mt-4">ARCHIVE ALPHA</h2>
          <p className="mt-6 leading-8 text-muted-foreground">
            The first public rules release. Bring an existing legal Commander
            deck, split the shuffled 99 into a 40-card Library and a 59-card
            Archive, and start at 30 life.
          </p>
          <p className="mt-4 leading-8 text-muted-foreground">
            Failed Search and Archive Exchange introduce two ways to access the
            Archive. All other Commander rules apply.
          </p>
          <Link href="/rules" className="text-link mt-8 underline">
            Read the Alpha rules →
          </Link>
        </article>
      </div>
    </>
  );
}
