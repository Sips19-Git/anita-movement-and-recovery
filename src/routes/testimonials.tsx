import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { testimonials } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Anita van der Lingen Physiotherapy" },
      { name: "description", content: "Hear from patients who have recovered with Anita van der Lingen Physiotherapy in Potchefstroom." },
      { property: "og:title", content: "Patient Testimonials" },
      { property: "og:description", content: "Real recoveries. Real people." },
      { property: "og:url", content: "/testimonials" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Patient stories" title="Stories of recovery." text="The kind words of those we've cared for mean the world to us." />
      <section className="container-pro py-20 md:py-28">
        <div className="grid gap-7 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="card-float rounded-3xl border border-border bg-card p-8 shadow-md"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="mt-4 text-lg font-display leading-snug text-balance">“{t.quote}”</p>
              <div className="mt-5 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{t.name}</span> · {t.role}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
