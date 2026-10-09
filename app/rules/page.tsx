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
        eyebrow="THE SOURCE OF TRUTH / ALPHA"
        title="Small changes. New games."
        description="The complete Archive rules. Unless these rules say otherwise, normal Commander rules apply."
      />
      <div className="shell section-pad grid gap-12 lg:grid-cols-[230px_1fr]">
        <aside>
          <p className="eyebrow mb-6">ARCHIVE ALPHA</p>
          <p className="mb-6 text-sm leading-7 text-muted-foreground">
            Keep the essentials beside you at the table.
          </p>
          <Button asChild variant="outline">
            <Link href="/reference">Get the reference card</Link>
          </Button>
          <p className="mt-7 text-xs leading-6 text-muted-foreground">
            Rules questions?{" "}
            <Link href="/faq" className="underline">
              Start with the FAQ.
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
