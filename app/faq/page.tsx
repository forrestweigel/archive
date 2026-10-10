import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { faqs } from "@/lib/archive";
import { PageIntro } from "@/components/page-intro";
import animalBand from "@/app/artwork/animal_band.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
export const metadata = createPageMetadata({
  title: "Frequently asked questions",
  description: "Answers to Archive Alpha questions about your existing Commander deck, the face-down Archive, search restrictions, and Exchange timing.",
  path: "/faq",
});
export default function FAQ() {
  return (
    <>
      <PageIntro
        artwork={animalBand}
        artworkPosition="center 60%"
        title="Frequently asked questions"
        description="Deck setup, Archive access, and how Commander rules apply."
      />
      <div className="shell section-pad">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map(([q, a, href], i) => (
              <AccordionItem key={q} value={`faq-${i}`}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>
                  <p>{a}</p>
                  {href && (
                    <Link href={href} className="mt-3 inline-block underline underline-offset-4">
                      Learn more
                    </Link>
                  )}
                </AccordionContent>
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
