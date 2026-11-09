import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { services, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Physiotherapy in Potchefstroom" },
      { name: "description", content: "Sports physiotherapy, post-surgery rehab, pain management, manual therapy and more at Anita van der Lingen Physiotherapy." },
      { property: "og:title", content: "Physiotherapy Services" },
      { property: "og:description", content: "From sports injury to chronic pain — comprehensive physiotherapy services in Potchefstroom." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Comprehensive physiotherapy." text="A full range of treatments to restore movement, manage pain and prevent re-injury." />
      <section className="container-pro py-20 md:py-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="card-float group relative overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="img-zoom h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background/85 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground">
                  {String(i + 1).padStart(2, "0")} · Service
                </div>
              </div>
              <div className="p-7">
                <h2 className="font-display text-2xl leading-snug text-balance">{s.title}</h2>
                <div className="mt-3 h-px w-12 bg-primary/60" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Enquire <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Book Appointment
          </a>
        </div>
      </section>
    </>
  );
}
