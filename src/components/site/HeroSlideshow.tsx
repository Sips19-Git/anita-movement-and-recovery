import { useEffect, useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/site";

export function HeroSlideshow() {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((p) => (p + 1) % heroSlides.length), []);
  const prev = () => setI((p) => (p - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden -mt-24">
      {heroSlides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== i}
        >
          <img
            src={s.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover ${idx === i ? "animate-slide" : ""}`}
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 bg-foreground/10" />
        </div>
      ))}

      <div className="relative z-10 h-full container-pro flex flex-col justify-center max-w-3xl">
        <span key={`e-${i}`} className="animate-hero-fade text-xs sm:text-sm uppercase tracking-[0.3em] text-white/90" style={{ animationDelay: "0.1s" }}>
          {heroSlides[i].eyebrow}
        </span>
        <h1 key={`t-${i}`} className="animate-hero-fade mt-5 text-4xl sm:text-6xl lg:text-7xl font-display text-white text-balance leading-[1.05]" style={{ animationDelay: "0.4s" }}>
          {heroSlides[i].title}
        </h1>
        <p key={`p-${i}`} className="animate-hero-fade mt-6 max-w-xl text-base sm:text-lg text-white/90" style={{ animationDelay: "0.8s" }}>
          {heroSlides[i].text}
        </p>
        <div className="animate-hero-fade mt-9 flex flex-wrap gap-3" style={{ animationDelay: "1.2s" }}>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Book Appointment
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-foreground hover:-translate-y-0.5 hover:shadow-xl"
          >
            Explore services
          </Link>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-white" : "w-5 bg-white/50 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}
