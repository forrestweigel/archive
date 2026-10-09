import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-10 md:flex-row">
          <div>
            <Link href="/" className="wordmark">
              ARCHIVE<span className="wordmark-dot">.</span>
            </Link>
            <p className="mt-3 text-sm text-white/55">
              Your deck. A different story.
            </p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-start gap-x-8 gap-y-4 text-sm"
          >
            <Link href="/rules">Complete rules</Link>
            <Link href="/reference">Reference card</Link>
            <Link href="/feedback">Playtest feedback</Link>
            <Link href="/changelog">Changelog</Link>
          </nav>
        </div>
        <div className="mt-7 flex flex-col justify-between gap-4 text-xs leading-6 text-white/50 md:flex-row">
          <p className="max-w-2xl">
            Archive is a community-created Commander variant. Magic: The
            Gathering is a trademark of Wizards of the Coast. Archive is not
            affiliated with or endorsed by Wizards of the Coast.
          </p>
          <span className="shrink-0 uppercase tracking-[.18em]">
            Archive Alpha · playarchivemtg.com
          </span>
        </div>
      </div>
    </footer>
  );
}
