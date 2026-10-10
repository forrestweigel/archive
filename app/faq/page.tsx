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
        title="Frequently asked questions"
        description="Deck setup, Archive access, and how Commander rules apply."
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
            <Link className="underline text-foreground" href="/rules">
              Read the complete rules.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
