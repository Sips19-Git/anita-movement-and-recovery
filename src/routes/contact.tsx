import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Anita van der Lingen Physiotherapy" },
      { name: "description", content: "Book a physiotherapy appointment in Potchefstroom. WhatsApp, call or send us a message." },
      { property: "og:title", content: "Contact Us" },
      { property: "og:description", content: "Book your physiotherapy appointment in Potchefstroom." },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const reason = String(fd.get("reason") ?? "");
    const message = String(fd.get("message") ?? "");
    const text = `Hi Anita, my name is ${name}. (${phone})\nReason: ${reason}\n\n${message}`;
    window.open(whatsappLink(text), "_blank");
    setSent(true);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Book your appointment." text="The quickest way to reach us is on WhatsApp — or send a message below and we'll get back to you within one business day." />
      <section className="container-pro py-16 sm:py-20 md:py-28">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-6 sm:space-y-8">
            <div className="card-float rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-md">
              <h3 className="font-display text-xl">Practice details</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {site.address}</li>
                <li className="flex gap-3"><Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <a className="hover:text-primary" href={`tel:${site.phoneTel}`}>{site.phone}</a></li>
                <li className="flex gap-3"><MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <a className="hover:text-primary break-all" href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp · {site.whatsapp}</a></li>
                <li className="flex gap-3"><Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <a className="hover:text-primary break-all" href={`mailto:${site.email}`}>{site.email}</a></li>
              </ul>
            </div>
            <div className="card-float rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-md">
              <h3 className="font-display text-xl flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /> Opening hours</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {site.hours.map(([d, h]) => (
                  <li key={d} className="flex justify-between gap-3 border-b border-border/50 last:border-0 py-1.5">
                    <span className="text-muted-foreground">{d}</span><span className="text-foreground text-right">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-float rounded-2xl overflow-hidden border border-border h-64 sm:h-72 shadow-md">
              <iframe
                title="Practice location"
                src="https://www.google.com/maps?q=105+Molen+Street,+Potchefstroom,+South+Africa&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="card-float rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 space-y-5 shadow-lg self-start">
            <h2 className="font-display text-2xl">Request an appointment</h2>
            <p className="text-sm text-muted-foreground">Fill in your details — we'll open WhatsApp pre-filled so you can send it in one tap.</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" required />
              <Field label="Phone number" name="phone" type="tel" required />
            </div>
            <Field label="Reason for visit" name="reason" placeholder="e.g. lower back pain" />
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea name="message" rows={5} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us a bit about what you're experiencing..." />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg">
              <Send className="h-4 w-4" /> Send via WhatsApp
            </button>
            {sent && <p className="text-sm text-primary">Opening WhatsApp… if nothing happened, please tap the floating WhatsApp button.</p>}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
