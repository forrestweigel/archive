import type { Metadata } from "next";
import Link from "next/link";
import Markdown from "react-markdown";
import { PageIntro } from "@/components/page-intro";
import { getChangelog } from "@/lib/archive";
import theFey from "@/app/artwork/the_fey.jpg";
export const metadata: Metadata = { title: "Changelog" };
export default function Changelog() {
  return (
    <>
      <PageIntro
        artwork={theFey}
        title="Changelog"
        description="Public rules releases and what changed."
      />
      <div className="shell section-pad">
        <article className="prose-rules border-l-2 border-primary pl-8 [&>h2:first-child]:mt-0">
          <Markdown components={{ h1: () => null }}>{getChangelog()}</Markdown>
        </article>
        <Link href="/rules" className="text-link mt-8 underline">
          Read the current rules →
        </Link>
      </div>
    </>
  );
}
