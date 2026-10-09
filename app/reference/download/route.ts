import { getRuleSection } from "@/lib/archive";
export function GET() {
  const content = `ARCHIVE — ALPHA\nplayarchivemtg.com\n\n99 → 40 Library + 59 Archive\n\nSETUP\n${getRuleSection(2)}\n\nFAILED SEARCH\n${getRuleSection(3)}\n\nARCHIVE EXCHANGE\n${getRuleSection(4)}\n\nAll other Commander rules apply.\n`;
  return new Response(content.replaceAll("**", ""), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="archive-alpha-reference.txt"',
    },
  });
}
