import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/site";

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];
  return (
    <div className="card-float relative mx-auto max-w-3xl rounded-3xl bg-card p-10 md:p-14 shadow-lg border border-border">
      <Quote className="h-10 w-10 text-primary/30" />
      <blockquote key={i} className="animate-slide mt-5 text-xl md:text-2xl font-display leading-snug text-foreground text-balance">
        “{t.quote}”
      </blockquote>
      <div className="mt-6 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{t.name}</span> · {t.role}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-1.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-3 bg-border"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => setI((p) => (p + 1) % testimonials.length)} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
