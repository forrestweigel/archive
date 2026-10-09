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
  ["Rules", "/rules"],
  ["FAQ", "/faq"],
  ["Resources", "/reference"],
];
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell flex h-22 items-center justify-between gap-6">
        <Link href="/" aria-label="Archive home" className="flex shrink-0 items-center gap-3">
          <Image src="/brand/icon.png" alt="" width={198} height={209} className="h-9 w-auto" />
          <Image src="/brand/title.png" alt="Archive" width={1107} height={173} className="h-auto w-36 lg:w-44" priority />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
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
        <Button asChild size="sm" className="hidden md:inline-flex">
          <Link href="/feedback">
            Playtest Alpha <ArrowUpRight />
          </Link>
        </Button>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation"
            >
              <Menu />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-[min(90vw,360px)] bg-background p-8 text-foreground">
              <Dialog.Title>
                <Image src="/brand/title.png" alt="Archive" width={1107} height={173} className="h-auto w-40" />
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm text-muted-foreground">
                A new way to play your Commander deck.
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
