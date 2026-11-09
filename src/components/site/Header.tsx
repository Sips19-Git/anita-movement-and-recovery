import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { site } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/conditions", label: "Conditions" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 px-4">
      <div
        className={`mx-auto max-w-7xl border border-border bg-card/85 backdrop-blur-xl transition-all duration-300 ${
          open ? "rounded-3xl" : "rounded-full lg:rounded-full"
        } ${scrolled ? "shadow-xl" : "shadow-md"}`}
      >
        <div className="flex h-16 items-center justify-between gap-6 px-5 sm:px-7">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src={logo.url} alt={site.name} className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-sm sm:text-base text-foreground">Anita van der Lingen</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Physiotherapy</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border px-5 pb-4 pt-2">
            <div className="flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                  activeProps={{ className: "text-primary bg-muted" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
