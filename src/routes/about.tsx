import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Trophy } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
const anita = { url: "/images/new-9.jpg" };

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Anita — Anita van der Lingen Physiotherapy" },
      { name: "description", content: "Meet Anita van der Lingen, registered physiotherapist in Potchefstroom — her training, philosophy and approach to patient care." },
      { property: "og:title", content: "About Anita van der Lingen" },
      { property: "og:description", content: "Registered physiotherapist with a passion for evidence-based, patient-centred care." },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline: { year: string; text: string }[] = [
  { year: "2016 – Present", text: "Physiotherapist for high-profile track and field athletes, including Caster Semenya." },
  { year: "2013 – Present", text: "Physiotherapist for the NWU-Puk Varsity Athletics team." },
  { year: "2013, 2016 – Present", text: "Physiotherapist for the NWU-Puk Cricket team." },
  { year: "2010 – Present", text: "Physiotherapist for the NWU-Puk Athletics team." },
  { year: "2008 – Present", text: "Owner of private physiotherapy practice in Potchefstroom." },
  { year: "2008 – 2012, Present", text: "Physiotherapist for NWU-Puk Netball." },
  { year: "2007 – Present", text: "Physiotherapist for the Riaan Venter Tennis Academy, Potchefstroom." },
  { year: "2007, 2009 – Present", text: "Physiotherapist for RVTA ITF (International Tennis Federation) tournaments hosted in Potchefstroom." },
  { year: "2007 – Present", text: "Physiotherapist for international athletes training in Potchefstroom — Zuzana Hejnova, Vítězslav Veselý, Jenny Meadows, Christina Obergföll, Bogdan Bondarenko, Denisa Rosolová, Léa Sprunger, Kariem Hussein and others." },
  { year: "2012 – Present", text: "M.Sc Clinical Sport Physiotherapy — University of the Free State." },
  { year: "2014 – 2016", text: "Physiotherapist for the U/18 Blue Bulls Craven Week rugby team." },
  { year: "2012", text: "Physiotherapist for ATP and WTA Tennis Future Tournaments in Potchefstroom." },
  { year: "2012", text: "Physiotherapist for the Austrian javelin champion preparing for the London Olympic Games in Austria." },
  { year: "2015", text: "NWU-Puk Varsity Cup Young Guns team physiotherapist." },
  { year: "2015", text: "Leopards Vodacom team physiotherapist." },
  { year: "2009 – 2015", text: "Physiotherapist for Leopards U/19 and U/21 rugby Currie Cup teams." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Anita" title="Hands-on care, grounded in science." text="A trusted physiotherapist guiding patients in Potchefstroom back to movement, strength and confidence." />
      <section className="container-pro py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[0.9fr,1.1fr] items-start">
          <Reveal className="relative group overflow-hidden rounded-3xl">
            <div className="absolute -inset-6 bg-accent/40 rounded-3xl rotate-2 -z-10" />
            <img src={anita.url} alt="Anita van der Lingen" className="img-zoom relative rounded-3xl w-full max-w-md mx-auto shadow-md object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl md:text-4xl font-display text-balance">Meet Anita</h2>
            <div className="mt-6 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Anita van der Lingen is a registered physiotherapist based in Potchefstroom, South Africa.
                She combines a deep understanding of biomechanics with compassionate, hands-on care to deliver
                lasting recovery — not just temporary relief.
              </p>
              <p>
                Her approach is collaborative: every treatment plan is shaped around your goals, your lifestyle
                and your unique body. Whether you are a competitive athlete, recovering from surgery or simply
                tired of living with pain, you'll be met with the same care and clinical rigour.
              </p>
              <p>
                Patients describe Anita as calm, attentive and refreshingly practical — someone who explains
                clearly, listens carefully and helps you take ownership of your recovery.
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                "Member of the SA Society of Physiotherapy",
                "Evidence-based clinical practice",
                "Sports & orthopaedic special interest",
                "Pre- and post-natal expertise",
              ].map((p) => (
                <div key={p} className="card-float flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> {p}
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Career timeline */}
      <section className="bg-secondary/40 py-20 md:py-28 border-y border-border">
        <div className="container-pro">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-primary font-semibold">
              <Trophy className="h-4 w-4" /> Professional journey
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display text-balance leading-[1.05]">
              Trusted by elite athletes and everyday patients alike.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              Nearly two decades of clinical experience across South African and international sport — from
              Olympians and Currie Cup squads to community patients in Potchefstroom.
            </p>
          </Reveal>

          <div className="relative mt-16 max-w-3xl mx-auto">
            <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" aria-hidden />
            <ol className="space-y-8">
              {timeline.map((item, i) => (
                <Reveal
                  key={item.year + i}
                  delay={i * 60}
                  className={`relative flex sm:items-center sm:gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  <div className="absolute left-3 sm:left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-background z-10" />
                  <div className="pl-10 sm:pl-0 sm:w-1/2 sm:px-8">
                    <div className="card-float rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{item.year}</div>
                      <p className="mt-2 text-sm text-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:w-1/2" />
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
