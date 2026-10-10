import type { Metadata } from "next";
import Markdown from "react-markdown";
import Link from "next/link";
import { getRules } from "@/lib/archive";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = { title: "Complete rules" };
export default function Rules() {
  return (
    <>
      <PageIntro
        title="Complete rules"
        description="Unless these rules say otherwise, normal Commander rules apply."
      />
      <div className="shell section-pad grid gap-12 lg:grid-cols-[230px_1fr]">
        <aside>
          <p className="eyebrow mb-6">ARCHIVE ALPHA</p>
          <Button asChild variant="outline">
            <Link href="/reference">Get the reference card</Link>
          </Button>
          <p className="mt-7 text-xs leading-6 text-muted-foreground">
            <Link href="/faq" className="underline">
              Frequently asked questions
            </Link>
          </p>
        </aside>
        <article className="prose-rules">
          <Markdown components={{ h1: () => null }}>{getRules()}</Markdown>
        </article>
      </div>
    </>
  );
}
