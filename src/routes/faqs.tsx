import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FaqAccordion } from "@/components/site/FaqAccordion";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Anita van der Lingen Physiotherapy" },
      { name: "description", content: "Common questions about physiotherapy sessions, medical aid claims, referrals and what to expect on your first visit." },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:description", content: "Everything you need to know before your first visit." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <PageHero eyebrow="FAQs" title="Frequently asked questions." text="Everything you need to know before your first appointment." />
      <section className="container-pro py-20 md:py-28 max-w-3xl">
        <FaqAccordion />
      </section>
    </>
  );
}
