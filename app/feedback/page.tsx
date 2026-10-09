import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { FeedbackForm } from "@/components/feedback-form";
export const metadata: Metadata = { title: "Playtest feedback" };
export default function Feedback() {
  return (
    <>
      <PageIntro
        eyebrow="HELP SHAPE ARCHIVE / ALPHA"
        title="Every game has a story."
        description="Capture what happened at your table. The great moments, the unexpected turns, and the rules that made you pause."
      />
      <div className="shell section-pad grid gap-12 md:grid-cols-[1fr_2fr]">
        <aside>
          <h2 className="text-3xl">PLAY. REFLECT. REPEAT.</h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            A few notes after a game go a long way. You don’t need perfect
            statistics—just your table’s experience.
          </p>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            For now, download your report and keep it to share with your
            playtest organizer.
          </p>
        </aside>
        <FeedbackForm />
      </div>
    </>
  );
}
