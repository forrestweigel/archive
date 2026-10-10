import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import goblet from "@/app/artwork/goblet.jpg";

export const metadata = createPageMetadata({
  title: "About Archive",
  description: "Six goals for Commander: more variety, less reliance on one plan, faster games, closer power levels, help with mana problems, and no rebuilding.",
  path: "/about",
});

const goals = [
  {
    title: "Increase variety",
    text: "A large deck can still lead to familiar games. Archive aims for more variety from one game to the next, giving players new situations to navigate with decks they already enjoy.",
  },
  {
    title: "Weaken decks that rely on one plan",
    text: "Games can become repetitive when a deck depends on executing the same combination. Archive aims to weaken that reliance and encourage decks to succeed through more than one plan.",
  },
  {
    title: "Speed up games",
    text: "Commander games can run longer than the table wants. Archive aims for shorter games, making it easier to fit more games into the time players have.",
  },
  {
    title: "Normalize power levels",
    text: "Players can arrive with decks of varried strengths. Archive aims to narrow those power gaps so more players can meaningfully compete with the decks they bring.",
  },
  {
    title: "Help with mana flood and starvation",
    text: "Too many lands or too few can leave a player unable to participate. Archive aims to reduce games where mana problems keep someone from playing their cards and making meaningful decisions.",
  },
  {
    title: "No rebuilding required",
    text: "Trying a different way to play should not require another deck or changes to a favorite list. Use your existing legal Commander decks and just play, without rebuilding or buying additional cards.",
  },
];

export default function About() {
  return (
    <>
      <PageIntro
        artwork={goblet}
        artworkPosition="center 40%"
        title="About Archive"
        description="Six goals for changing the Commander experience with the decks you already own."
      />
      <section className="shell section-pad" aria-labelledby="goals-title">
        <div className="section-heading">
          <h2 id="goals-title">WHY ARCHIVE EXISTS</h2>
          <p>These are design goals. Alpha playtesting explores how well the rules achieve them across different decks and tables.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {goals.map((goal, index) => (
            <Card key={goal.title}>
              <CardHeader>
                <p className="text-sm font-bold text-primary" aria-hidden="true">0{index + 1}</p>
                <CardTitle>{goal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">{goal.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild><Link href="/#how-to-play">Learn to play <ArrowRight /></Link></Button>
          <Button asChild variant="outline"><Link href="/feedback">Share playtest feedback</Link></Button>
        </div>
      </section>
    </>
  );
}
