import Image, { type StaticImageData } from "next/image";

export function PageIntro({
  eyebrow,
  title,
  description,
  artwork,
  artworkPosition = "center 48%",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  artwork?: StaticImageData;
  artworkPosition?: string;
}) {
  return (
    <section className="page-intro">
      {artwork && (
        <div className="page-intro-art" aria-hidden="true">
          <Image src={artwork} alt="" fill preload sizes="(max-width: 640px) 100vw, 65vw" placeholder="blur" style={{ objectPosition: artworkPosition }} />
        </div>
      )}
      <div className="shell relative">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">
          {description}
        </p>
      </div>
    </section>
  );
}
