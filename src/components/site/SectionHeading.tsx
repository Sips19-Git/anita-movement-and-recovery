export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.28em] text-primary font-semibold">{eyebrow}</div>
      )}
      <h2 className="mt-3 text-3xl md:text-5xl font-display text-foreground text-balance">{title}</h2>
      {text && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{text}</p>}
    </div>
  );
}
