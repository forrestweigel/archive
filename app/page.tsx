import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  BookOpen,
  MessageSquare,
  Repeat2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DeckSplit } from "@/components/deck-split";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-art" aria-hidden="true">
          <Image src="/brand/icon.png" alt="" width={198} height={209} className="hero-symbol" />
        </div>
        <div className="shell hero-content">
          <p className="eyebrow">
            <span className="status-dot" /> ARCHIVE ALPHA · A COMMANDER VARIANT
          </p>
          <h1>
            SHUFFLE.
            <br />SPLIT.
            <br />
            <span>PLAY.</span>
          </h1>
          <p className="hero-description">
            Play with your existing legal Commander deck. Split the shuffled
            99 into a 40-card Library and a 59-card Archive. Start at 30 life.
            No rebuilding required.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#how-to-play">
                Learn to play <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/40 text-foreground"
            >
              <Link href="/rules">Read the rules</Link>
            </Button>
          </div>
        </div>
      </section>
      <section id="how-to-play" className="section-paper section-pad">
        <div className="shell">
          <div className="section-heading">
            <div>
              <h2>SET UP YOUR GAME</h2>
            </div>
            <p>
              Put your commander in the command zone, then shuffle the other
              99 cards.
            </p>
          </div>
          <DeckSplit />
          <div className="setup-caption">
            <p>
              Without looking at or choosing cards, take the top 40 as your
              Library. Place the remaining 59 face down as your Archive.
            </p>
            <div className="life-callout">
              <span>30</span>
              <div>
                STARTING LIFE<small>Continue normal Commander setup.</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-dark section-pad">
        <div className="shell">
          <div className="section-heading">
            <div>
              <h2>USING YOUR ARCHIVE</h2>
            </div>
            <p>
              Your Archive stays face down, separate from your Library. Two
              rules let you move cards into your hand.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="mechanic-card">
              <CardHeader>
                <CardTitle>Failed Search</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Whenever you search your Library and find{" "}
                  <strong>zero cards</strong>, put the top card of your Archive
                  into your hand.
                </p>
                <div className="mechanic-flow">
                  <span>SEARCH FINDS ZERO</span>
                  <ArrowRight />
                  <span>ARCHIVE → HAND</span>
                </div>
                <p className="text-sm text-white/50">
                  Finding one or more cards doesn’t count. Normal Magic rules
                  determine whether you may find zero.
                </p>
              </CardContent>
            </Card>
            <Card className="mechanic-card">
              <CardHeader>
                <CardTitle>Archive Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Once during each of your turns, <strong>as a sorcery</strong>,
                  you may put a card from your hand on the bottom of your
                  Archive. If you do, put the top card of your Archive into
                  your hand.
                </p>
                <div className="mechanic-flow">
                  <span>HAND → BOTTOM</span>
                  <Repeat2 />
                  <span>TOP → HAND</span>
                </div>
                <p className="text-sm text-white/50">
                  Exchange doesn’t discard or exile the card.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/15 pt-7 md:flex-row">
            <p className="text-sm text-white/60">
              Everything else follows normal Commander rules. Your Archive is
              not a backup Library.
            </p>
            <Link href="/rules" className="text-link shrink-0">
              Read the complete rules <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-paper section-pad">
        <div className="shell">
          <div className="section-heading">
            <div>
              <h2>RULES & REFERENCE</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Complete rules",
                text: "Setup, Archive mechanics, and how normal Commander rules apply.",
                href: "/rules",
                cta: "Read the rules",
              },
              {
                icon: Download,
                title: "Reference card",
                text: "Print the setup and mechanics, save a PDF, or download a text copy.",
                href: "/reference",
                cta: "Get the reference card",
              },
              {
                icon: MessageSquare,
                title: "Frequently asked questions",
                text: "Search restrictions, Exchange timing, and an empty Library.",
                href: "/faq",
                cta: "Read the FAQ",
              },
            ].map(({ icon: Icon, ...item }) => (
              <Card key={item.href} className="resource-card">
                <CardHeader>
                  <div className="resource-icon">
                    <Icon strokeWidth={1.5} />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="mb-8 text-sm leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                  <Link href={item.href} className="text-link mt-auto">
                    {item.cta}
                    <ArrowUpRight />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="playtest-banner">
        <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2>PLAYTEST NOTES</h2>
            <p className="mt-4 max-w-xl">
              Record game length, Archive use, and rules questions in a
              downloadable report.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-black"
          >
            <Link href="/feedback">
              Record a playtest <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
