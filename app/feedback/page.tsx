import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { FeedbackForm } from "@/components/feedback-form";
export const metadata: Metadata = { title: "Playtest notes" };
export default function Feedback() {
  return (
    <>
      <PageIntro
        eyebrow="ARCHIVE ALPHA"
        title="Playtest notes"
        description="Record a game and download your notes. This form does not submit feedback."
      />
      <div className="shell section-pad grid gap-12 md:grid-cols-[1fr_2fr]">
        <aside>
          <h2 className="text-3xl">ABOUT YOUR GAME</h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Player count and game length are required. The other fields are
            optional; estimates are fine.
          </p>
        </aside>
        <FeedbackForm />
      </div>
    </>
  );
}
