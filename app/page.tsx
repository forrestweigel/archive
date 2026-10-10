import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DeckSplit } from "@/components/deck-split";
import { MechanicDiagram } from "@/components/mechanic-diagram";
import forest from "@/app/artwork/forest.jpg";
import spirit from "@/app/artwork/spirit.jpg";
import goblet from "@/app/artwork/goblet.jpg";
import animalBand from "@/app/artwork/animal_band.jpg";
import troop from "@/app/artwork/troop.jpg";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-art" aria-hidden="true">
          <Image
            src={forest}
            alt=""
            fill
            preload
            sizes="100vw"
            placeholder="blur"
            className="hero-image"
          />
        </div>
        <div className="shell hero-content">
          <p className="eyebrow">
            <Circle className="status-dot" fill="currentColor" aria-hidden="true" /> ARCHIVE ALPHA · A COMMANDER VARIANT
          </p>
          <h1>
            SHUFFLE.
            <br />SPLIT.
            <br />
            PLAY.
          </h1>
          <p className="hero-description">
            Archive aims for more
            varied games, faster finishes, and closer competition, with ways to
            work through mana flood or starvation. All while using your existing Commander decks!
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
              className="border-white/60 text-white hover:bg-white/10"
            >
              <Link href="/about">Why Archive?</Link>
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
          <div className="mechanics-grid grid gap-6 md:grid-cols-2">
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
                <MechanicDiagram type="search" />
                <p className="text-sm text-white/50">
                  Finding one or more cards doesn&apos;t count. Normal Magic rules
                  determine whether you may find zero.
                </p>
              </CardContent>
            </Card>
            <Card className="mechanic-card">
              <CardHeader>
                <CardTitle>Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Once during each of your turns</strong>, <strong>as a sorcery</strong>,
                  you may put a card from your hand on the bottom of your
                  Archive. If you do, put the top card of your Archive into
                  your hand.
                </p>
                <MechanicDiagram type="exchange" />
                <p className="text-sm text-white/50">
                  Exchange doesn&apos;t discard or exile the card.
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
              <h2>EXPLORE ARCHIVE</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                artwork: spirit,
                position: "center 42%",
                title: "Rules & reference",
                text: "Read the complete rules and print a reference card for your table.",
                href: "/rules",
                cta: "Read the rules",
              },
              {
                artwork: goblet,
                position: "center 40%",
                title: "About Archive",
                text: "The six design goals behind Archive and the Commander problems they address.",
                href: "/about",
                cta: "Why Archive?",
              },
              {
                artwork: animalBand,
                position: "center 60%",
                title: "Frequently asked questions",
                text: "Search restrictions, Exchange timing, and an empty Library.",
                href: "/faq",
                cta: "Read the FAQ",
              },
            ].map(({ artwork, position, ...item }) => (
              <Link key={item.href} href={item.href} className="resource-card-link" aria-label={item.cta}>
                <Card className="resource-card h-full">
                  <div className="resource-art" aria-hidden="true">
                    <Image
                      src={artwork}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1280px) 33vw, 380px"
                      placeholder="blur"
                      style={{ objectPosition: position }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="mb-8 text-sm leading-7 text-muted-foreground">
                      {item.text}
                    </p>
                    <span className="text-link mt-auto">
                      {item.cta}
                      <ArrowUpRight />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="playtest-banner">
        <div className="playtest-art" aria-hidden="true">
          <Image src={troop} alt="" fill sizes="100vw" placeholder="blur" />
        </div>
        <div className="shell playtest-content flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2>PLAYTEST FEEDBACK</h2>
            <p className="mt-4 max-w-xl">
              Share game length, Archive use, and rules questions with Archive.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/feedback">
              Share feedback <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
