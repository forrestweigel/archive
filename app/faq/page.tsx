import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/archive";
import { PageIntro } from "@/components/page-intro";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
export const metadata: Metadata = { title: "Frequently asked questions" };
export default function FAQ() {
  return (
    <>
      <PageIntro
        eyebrow="BEFORE YOU SHUFFLE UP"
        title="A little clarity."
        description="Straight answers to the questions that come up around the table. All based on the current Alpha rules."
      />
      <div className="shell section-pad">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={`faq-${i}`}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-10 text-sm leading-7 text-muted-foreground">
            Need the full picture?{" "}
            <Link className="underline text-foreground" href="/rules">
              Read the complete rules.
            </Link>{" "}
            Found something unclear during a game?{" "}
            <Link href="/feedback" className="underline text-foreground">
              Include it in your playtest feedback.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
