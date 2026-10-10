import { createPageMetadata } from "@/lib/metadata";
import Markdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { getRules } from "@/lib/archive";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ReferenceCard } from "@/components/reference-card";
import spirit from "@/app/artwork/spirit.jpg";
export const metadata = createPageMetadata({
  title: "Rules & reference",
  description: "Read the complete Archive Alpha rules and print or save the reference card for your table.",
  path: "/rules",
});
export default function Rules() {
  return (
    <>
      <PageIntro
        artwork={spirit}
        artworkPosition="center 42%"
        title="Rules & reference"
        description="Unless these rules say otherwise, normal Commander rules apply."
      />
      <div className="no-print shell section-pad grid gap-12 lg:grid-cols-[230px_1fr]">
        <aside>
          <p className="eyebrow mb-6">ARCHIVE ALPHA</p>
          <Button asChild variant="outline">
            <Link href="#reference-card">Get the reference card</Link>
          </Button>
          <p className="mt-7 text-sm">
            <Link href="#gameplay-examples" className="underline underline-offset-4">
              See gameplay examples
            </Link>
          </p>
          <p className="mt-7 text-xs leading-6 text-muted-foreground">
            <Link href="/faq" className="underline">
              Frequently asked questions
            </Link>
          </p>
        </aside>
        <div className="min-w-0">
          <article className="prose-rules">
            <Markdown components={{ h1: () => null }}>{getRules()}</Markdown>
          </article>
        </div>
      </div>
      <section id="gameplay-examples" aria-labelledby="examples-title" className="no-print shell section-pad border-t border-border">
        <h2 id="examples-title" className="text-3xl">GAMEPLAY EXAMPLES</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Failed Search: Evolving Wilds</CardTitle>
            </CardHeader>
            <CardContent className="grid items-start gap-6 sm:grid-cols-[180px_1fr]">
              <Image
                src="/cards/evolving-wilds.webp"
                alt="Evolving Wilds Magic card"
                width={672}
                height={936}
                sizes="(max-width: 639px) 240px, 180px"
                className="mx-auto h-auto w-full max-w-60 sm:max-w-none"
              />
              <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                <p>
                  You already have enough lands. Tap and sacrifice Evolving
                  Wilds to search your Library, choosing to find no basic
                  land. This is legal even if basic lands remain in your
                  Library, because the search specifies a kind of card.
                </p>
                <p>
                  Finding zero cards gives you the top card of your Archive
                  through Failed Search. You still shuffle your Library as
                  Evolving Wilds instructs. You trade the land on the
                  battlefield for an unknown card in hand, which could still
                  be another land.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Exchange: Commander&apos;s Sphere</CardTitle>
            </CardHeader>
            <CardContent className="grid items-start gap-6 sm:grid-cols-[180px_1fr]">
              <Image
                src="/cards/commanders-sphere.webp"
                alt="Commander’s Sphere Magic card"
                width={672}
                height={936}
                sizes="(max-width: 639px) 240px, 180px"
                className="mx-auto h-auto w-full max-w-60 sm:max-w-none"
              />
              <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                <p>
                  Commander&apos;s Sphere is in your hand, but you don&apos;t
                  need more mana. On your turn, at sorcery speed, use your
                  Exchange for the turn: put the Sphere on the bottom of your
                  Archive and put its top card into your hand.
                </p>
                <p>
                  You replace the Sphere without spending three mana to cast
                  it first. Unlike casting it and using its sacrifice ability,
                  this moves it from your hand into your Archive and puts a
                  card from your Archive into your hand. It isn&apos;t a
                  sacrifice or a card draw.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <ReferenceCard />
    </>
  );
}
