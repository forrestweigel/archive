export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="shell">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
          {description}
        </p>
      </div>
    </section>
  );
}
