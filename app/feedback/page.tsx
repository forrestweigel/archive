import { archiveFormat } from "@/lib/format.mjs";
import { createPageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/page-intro";
import { FeedbackForm } from "@/components/feedback-form";
import troop from "@/app/artwork/troop.jpg";
export const metadata = createPageMetadata({
  title: "Playtest feedback",
  description: `Share feedback from an Archive ${archiveFormat.release} game, including game length, Archive use, and rules questions.`,
  path: "/feedback",
});
export default function Feedback() {
  return (
    <>
      <PageIntro
        artwork={troop}
        eyebrow={`ARCHIVE ${archiveFormat.release.toUpperCase()}`}
        title="Playtest feedback"
        description="Tell us how your game went. Submit your playtest feedback directly to Archive."
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
