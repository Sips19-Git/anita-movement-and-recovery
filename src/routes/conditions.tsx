import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { conditions } from "@/data/site";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Conditions Treated — Anita van der Lingen Physiotherapy" },
      { name: "description", content: "From back pain and sports injuries to post-operative rehab, see the conditions we treat in our Potchefstroom physiotherapy practice." },
      { property: "og:title", content: "Conditions Treated" },
      { property: "og:description", content: "A complete list of conditions our physiotherapy practice treats." },
      { property: "og:url", content: "/conditions" },
    ],
    links: [{ rel: "canonical", href: "/conditions" }],
  }),
  component: Conditions,
});

function Conditions() {
  return (
    <>
      <PageHero eyebrow="Conditions treated" title="What we help with." text="Physiotherapy can support recovery from a wide range of musculoskeletal and post-operative conditions." />
      <section className="container-pro py-20 md:py-28">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {conditions.map((c) => (
            <div key={c} className="flex items-center gap-3 rounded-xl bg-card border border-border px-5 py-5 text-sm md:text-base text-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" /> {c}
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground max-w-xl mx-auto">
          Not sure if we can help with your condition? Get in touch — we're happy to chat before you book.
        </p>
      </section>
    </>
  );
}
