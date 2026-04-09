type HeroProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink?: string;
};

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink = "#contacto",
}: HeroProps) {
  return (
    <section className="relative py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {title}
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>

        <a
          href={ctaLink}
          className="inline-block rounded-xl bg-primary px-6 py-3 text-white font-medium hover:opacity-90 transition"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}