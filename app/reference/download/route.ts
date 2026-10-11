import { archiveFormat, releaseSlug } from "@/lib/format.mjs";
import { getRuleSection } from "@/lib/archive";
export function GET() {
  const content = `ARCHIVE: ${archiveFormat.release.toUpperCase()}\nplayarchivemtg.com\n\nSplit your shuffled deck into a ${archiveFormat.librarySize}-card Library and a ${archiveFormat.standardArchiveSize}-card Archive\n\nSETUP\n${getRuleSection(2)}\n\nDISCOVERY\n${getRuleSection(3)}\n\nEXCHANGE\n${getRuleSection(4)}\n\nRESEARCH\n${getRuleSection(5)}\n\nAll other Commander rules apply.\n`;
  return new Response(content.replaceAll("**", ""), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition":
        `attachment; filename="archive-${releaseSlug}-reference.txt"`,
    },
  });
}
