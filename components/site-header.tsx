"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const links = [
  ["How to play", "/#how-to-play"],
  ["Rules & reference", "/rules"],
  ["FAQ", "/faq"],
  ["About", "/about"],
];
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell flex h-22 items-center justify-between gap-3 sm:gap-6">
        <Link href="/" aria-label="Archive home" className="flex shrink-0 items-center gap-3">
          <Image src="/brand/full-no-background.png" alt="Archive — Shuffle. Split. Play." width={1305} height={242} className="h-auto w-56 lg:w-72" priority />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className="nav-link"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm" className="hidden lg:inline-flex">
          <Link href="/feedback">
            Playtest feedback <ArrowUpRight />
          </Link>
        </Button>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open navigation"
            >
              <Menu />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="mobile-nav-overlay fixed inset-0 z-50 bg-black/60" />
            <Dialog.Content className="mobile-nav-panel fixed inset-y-0 right-0 z-50 w-[min(90vw,360px)] overflow-y-auto bg-background p-8 text-foreground shadow-xl">
              <Dialog.Title className="sr-only">
                Archive navigation
              </Dialog.Title>
              <Dialog.Description className="sr-only">
                Rules, reference materials, and playtest feedback.
              </Dialog.Description>
              <Dialog.Close asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-5 top-5"
                  aria-label="Close navigation"
                >
                  <X />
                </Button>
              </Dialog.Close>
              <nav
                aria-label="Mobile navigation"
                className="mt-12 flex flex-col gap-7"
              >
                {[
                  ...links,
                  ["Playtest feedback", "/feedback"],
                  ["Changelog", "/changelog"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-lg"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
