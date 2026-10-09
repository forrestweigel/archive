import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const gothamNarrow = localFont({
  src: [
    { path: "./fonts/GothamNarrow-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "./fonts/GothamNarrow-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gotham-narrow",
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Archive — Your deck. A different story.",
    template: "%s | Archive",
  },
  description:
    "A new way to play Commander. Bring your existing deck, split the 99 into a 40-card Library and 59-card Archive, and start a different story.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${gothamNarrow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
