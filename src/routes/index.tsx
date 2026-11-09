import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Clock, MessageCircle, Stethoscope } from "lucide-react";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { FaqAccordion } from "@/components/site/FaqAccordion";

import { services, conditions, site, whatsappLink } from "@/data/site";
const anita = { url: "/images/new-9.jpg" };
const clinic = { url: "/images/new-10.jpg" };
const ctaBg = { url: "/images/upload-2.jpg" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anita van der Lingen Physiotherapy — Potchefstroom" },
      { name: "description", content: "Evidence-based physiotherapy in Potchefstroom. Sports injury, post-surgery, pain & mobility rehabilitation." },
      { property: "og:title", content: "Anita van der Lingen Physiotherapy" },
      { property: "og:description", content: "Restore movement, recover stronger. Trusted physiotherapy in Potchefstroom." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSlideshow />

      {/* Welcome */}
      <section className="container-pro py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-primary font-semibold">Welcome</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display text-balance leading-[1.05]">
              Personalised physiotherapy<br /> for every body.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From the first consultation to your final session, our practice focuses on what
              matters most: getting you back to the life you love — confidently, safely and
              without unnecessary pain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Meet Anita <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted">
                Our services
              </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-3xl">
            <div className="absolute -inset-6 bg-accent/40 rounded-3xl rotate-2 -z-10" />
            <img src={clinic.url} alt="Inside the clinic" className="img-zoom relative rounded-3xl object-cover w-full h-[480px] shadow-md" loading="lazy" />
          </div>
        </div>
      </section>

      {/* About Anita */}
      <section className="bg-secondary/40 py-20 md:py-28 border-y border-border">
        <div className="container-pro grid gap-12 md:grid-cols-2 items-center">
          <div className="relative md:order-2 group overflow-hidden rounded-3xl">
            <div className="absolute -inset-6 bg-primary/10 rounded-3xl -rotate-2 -z-10" />
            <img src={anita.url} alt="Anita van der Lingen at work" className="img-zoom relative rounded-3xl object-cover w-full max-w-md mx-auto shadow-md" loading="lazy" />
          </div>
          <div className="md:order-1">
            <div className="text-xs uppercase tracking-[0.28em] text-primary font-semibold">About Anita</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display text-balance leading-[1.05]">
              A trusted hand in your recovery.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Anita van der Lingen is a registered physiotherapist with a passion for evidence-based,
              patient-centred care. She combines hands-on manual therapy with progressive rehabilitation
              programmes to help patients move freely and feel their best.
            </p>
            <ul className="mt-7 space-y-3">
              {["Modern, evidence-based techniques", "Tailored programmes for every patient", "Calm, professional clinic environment"].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" /> {p}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
              Read Anita's story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-pro py-20 md:py-28">
        <SectionHeading
          eyebrow="What we offer"
          title="Physiotherapy services"
          text="From acute sports injuries to long-term mobility rehab, our treatments are tailored to your body and goals."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.slug} className="card-float group rounded-2xl border border-border bg-card p-7 hover:border-primary/40">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-display">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-secondary/40 py-20 md:py-28 border-y border-border">
        <div className="container-pro">
          <SectionHeading eyebrow="Conditions treated" title="We help you with" />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {conditions.map((c) => (
              <div key={c} className="flex items-center gap-3 rounded-xl bg-card border border-border px-5 py-4 text-sm text-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" /> {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20 md:py-28 border-y border-border">
        <div className="container-pro">
          <SectionHeading eyebrow="Patient stories" title="Real recoveries. Real people." />
          <div className="mt-14">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-pro py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr,1.3fr]">
          <SectionHeading align="left" eyebrow="Questions" title="Frequently asked" text="Everything you need to know before your first visit." />
          <FaqAccordion />
        </div>
      </section>

      {/* Contact + Map */}
      <section className="bg-secondary/40 py-20 md:py-28 border-y border-border">
        <div className="container-pro grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Visit us" title="Find the practice" />
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span>{site.address}</span></li>
              <li className="flex gap-3"><Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <a href={`tel:${site.phoneTel}`} className="hover:text-primary">{site.phone}</a></li>
              <li className="flex gap-3"><MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp · {site.whatsapp}</a></li>
              <li className="flex gap-3"><Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <a href={`mailto:${site.email}`} className="hover:text-primary break-all">{site.email}</a></li>
              <li className="flex gap-3"><Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span>Mon – Fri · 08:00 – 17:00</span></li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-sm h-[440px]">
            <iframe
              title="Practice location"
              src="https://www.google.com/maps?q=105+Molen+Street,+Potchefstroom,+South+Africa&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA — edge-to-edge floating neo card */}
      <section className="card-edge py-20 md:py-28">
        <div
          className="gsap-float card-neo relative overflow-hidden rounded-[2.5rem] px-8 py-32 md:py-56 md:px-24 text-center bg-cover bg-center min-h-[520px] md:min-h-[760px] flex items-center justify-center"
          style={{ backgroundImage: `url(${ctaBg.url})` }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/80 font-semibold">Begin your recovery</div>
            <h2 className="mt-5 text-5xl md:text-7xl lg:text-8xl font-display text-white text-balance leading-[1.02]">
              Ready to move freely again?
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed">
              Book your appointment in seconds via WhatsApp, or give us a call. Anita will guide you from
              your very first conversation.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-sm font-semibold text-foreground hover:bg-white/95 hover:-translate-y-0.5 transition-all shadow-lg">
                <MessageCircle className="h-4 w-4 text-[color:var(--whatsapp)]" /> Book Appointment
              </a>
              <a href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-9 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
