import { getRuleSection } from "@/lib/archive";
export function GET() {
  const content = `ARCHIVE — ALPHA\nplayarchivemtg.com\n\nSplit 99 cards into a 40-card Library and a 59-card Archive\n\nSETUP\n${getRuleSection(2)}\n\nFAILED SEARCH\n${getRuleSection(3)}\n\nEXCHANGE\n${getRuleSection(4)}\n\nAll other Commander rules apply.\n`;
  return new Response(content.replaceAll("**", ""), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="archive-alpha-reference.txt"',
    },
  });
}
