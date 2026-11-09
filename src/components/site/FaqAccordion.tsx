import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/site";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="card-float rounded-xl border border-border bg-card overflow-hidden"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-foreground">{f.q}</span>
              {isOpen ? <Minus className="h-4 w-4 text-primary shrink-0" /> : <Plus className="h-4 w-4 text-primary shrink-0" />}
            </button>
            {isOpen && (
              <div className="px-5 pb-5 -mt-1 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
