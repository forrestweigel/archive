import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  BookOpen,
  MessageSquare,
  Shuffle,
  Layers,
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
            <span className="status-dot" /> A NEW WAY TO PLAY COMMANDER
          </p>
          <h1>
            SHUFFLE.
            <br />SPLIT.
            <br />
            <span>PLAY.</span>
          </h1>
          <p className="hero-description">
            Meet Archive. The Commander variant that turns the deck you know
            into a game you don’t.
          </p>
          <p className="hero-note">
            Same deck. No rebuilding. New possibilities.
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
        <div className="hero-bottom shell">
          <span>COMMANDER, REDISCOVERED.</span>
          <span className="flex items-center gap-2">
            <span className="status-dot" /> ALPHA · READY TO PLAY
          </span>
        </div>
      </section>
      <div className="manifesto-bar">
        <div className="shell flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
          <span>
            <Shuffle /> BRING YOUR COMMANDER DECK
          </span>
          <span>
            <Layers /> SPLIT THE POSSIBILITIES
          </span>
          <span>
            <Repeat2 /> PLAY A DIFFERENT GAME
          </span>
        </div>
      </div>
      <section id="how-to-play" className="section-paper section-pad">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / THE SETUP</p>
              <h2>
                ONE DECK.
                <br />
                TWO PILES. LET’S PLAY.
              </h2>
            </div>
            <p>
              Bring your existing legal Commander deck. Put your commander in
              the command zone, then shuffle the other 99 cards. No rebuilding
              required.
            </p>
          </div>
          <DeckSplit />
          <div className="setup-caption">
            <p>
              <strong>Don’t look. Don’t choose.</strong> The top 40 become your
              Library. The remaining 59 become your Archive.
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
              <p className="eyebrow">02 / THE TWIST</p>
              <h2>
                A LITTLE UNKNOWN.
                <br />A LOT TO PLAY FOR.
              </h2>
            </div>
            <p>
              Your Archive stays face down, separate from your Library. Two
              simple rules let you tap into what’s waiting there.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="mechanic-card">
              <CardHeader>
                <span className="mechanic-number">01</span>
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
                <span className="mechanic-number">02</span>
                <CardTitle>Archive Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Once during each of your turns, <strong>as a sorcery</strong>,
                  you may put a card from your hand on the bottom of your
                  Archive. If you do, take its top card into your hand.
                </p>
                <div className="mechanic-flow">
                  <span>HAND → BOTTOM</span>
                  <Repeat2 />
                  <span>TOP → HAND</span>
                </div>
                <p className="text-sm text-white/50">
                  One card in. One card out. Exchange doesn’t discard or exile.
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
              Explore the complete rules <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-paper section-pad">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / BRING IT TO THE TABLE</p>
              <h2>
                LESS PREP.
                <br />
                MORE PLAY.
              </h2>
            </div>
            <p>
              A quick reference for your next game. The details when you need
              them. Everything to get your table started.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "The complete rules",
                text: "Every Alpha rule, in one place. Get your whole table on the same page.",
                href: "/rules",
                cta: "Read the rules",
                tag: "THE SOURCE OF TRUTH",
              },
              {
                icon: Download,
                title: "Your table companion",
                text: "Keep setup and both mechanics close at hand with a printable reference card.",
                href: "/reference",
                cta: "Get the reference",
                tag: "READY FOR GAME NIGHT",
              },
              {
                icon: MessageSquare,
                title: "Questions? Covered.",
                text: "From Failed Search to an empty Library. Clear answers before you shuffle up.",
                href: "/faq",
                cta: "Explore the FAQ",
                tag: "A LITTLE CLARITY",
              },
            ].map(({ icon: Icon, ...item }) => (
              <Card key={item.href} className="resource-card">
                <CardHeader>
                  <div className="resource-icon">
                    <Icon strokeWidth={1.5} />
                  </div>
                  <p className="eyebrow text-[10px]">{item.tag}</p>
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
            <p className="eyebrow">HELP WRITE THE NEXT CHAPTER</p>
            <h2>
              SHUFFLE UP. TRY IT.
              <br />
              TELL US WHAT HAPPENED.
            </h2>
            <p className="mt-4 max-w-xl">
              Archive is in Alpha. Your games help shape where it goes next.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-black"
          >
            <Link href="/feedback">
              Share playtest feedback <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
