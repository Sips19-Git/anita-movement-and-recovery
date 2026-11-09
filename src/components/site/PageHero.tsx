export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="relative bg-gradient-to-b from-secondary/60 to-background border-b border-border">
      <div className="container-pro py-20 md:py-28 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.28em] text-primary font-semibold">{eyebrow}</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-display text-foreground text-balance leading-[1.05]">{title}</h1>
        {text && <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">{text}</p>}
      </div>
    </section>
  );
}
