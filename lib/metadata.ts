import { archiveFormat } from "@/lib/format.mjs";
import type { Metadata } from "next";

export const siteUrl = "https://playarchivemtg.com";
export const siteTitle = "Archive: SHUFFLE. SPLIT. PLAY.";
export const siteDescription =
  `A Commander variant for your existing legal deck. Split your shuffled deck into a ${archiveFormat.librarySize}-card Library and a ${archiveFormat.standardArchiveSize}-card Archive. Start at ${archiveFormat.startingLife} life. No rebuilding required.`;

const shareImage = {
  url: "/brand/share-card.png?v=b1467256",
  width: 1200,
  height: 630,
  alt: `Archive: SHUFFLE. SPLIT. PLAY. A Commander variant for your existing deck: ${archiveFormat.librarySize}-card Library, ${archiveFormat.standardArchiveSize}-card Archive, ${archiveFormat.startingLife} starting life.`,
};

export function createPageMetadata({
  title,
  description = siteDescription,
  path,
}: {
  title?: string;
  description?: string;
  path: string;
}): Metadata {
  const shareTitle = title ? `${title} | Archive` : siteTitle;

  return {
    title: title ?? siteTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Archive",
      title: shareTitle,
      description,
      url: path,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [{ url: shareImage.url, alt: shareImage.alt }],
    },
  };
}
