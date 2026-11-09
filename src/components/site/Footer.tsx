import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="card-edge pb-10 pt-24">
      <div className="gsap-float card-neo mx-auto rounded-[2.5rem] bg-card/95 backdrop-blur-xl">
        <div className="grid gap-14 px-8 py-20 md:px-14 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <img src={logo.url} alt="" className="h-16 w-16 object-contain" />
              <div className="leading-tight">
                <div className="font-display text-xl">{site.shortName}</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Physiotherapy</div>
              </div>
            </div>
            <p className="mt-7 text-base text-muted-foreground leading-relaxed max-w-md">
              Evidence-based physiotherapy in Potchefstroom. Restoring movement, easing pain and helping you live well.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground/70 transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:border-primary hover:shadow-md">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground/70 transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:border-primary hover:shadow-md">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground/70 transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:border-primary hover:shadow-md">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["/about", "About"],
                ["/services", "Services"],
                ["/conditions", "Conditions Treated"],
                ["/testimonials", "Testimonials"],
                ["/faqs", "FAQs"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-muted-foreground hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {site.address}</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href={`tel:${site.phoneTel}`} className="hover:text-primary">{site.phone}</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href={`mailto:${site.email}`} className="hover:text-primary break-all">{site.email}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Hours</h4>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {site.hours.map(([d, h]) => (
                <li key={d} className="flex justify-between gap-4"><span>{d}</span><span className="text-foreground/80">{h}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border px-8 md:px-14">
          <div className="py-7 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
            <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
            <span>Potchefstroom · South Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
