import { useState } from "react";
import { Check, Clock } from "lucide-react";
import { formatNaira, fromPrice, site, type Package, type Treatment } from "@/config/site";
import { BookButton } from "./booking";
import { cn } from "@/lib/utils";

export function ServiceCard({ t }: { t: Treatment }) {
  return (
    <article className="card-lift img-zoom flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
      <div className="aspect-[4/3] overflow-hidden"><img src={t.image} alt={t.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover" /></div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{t.category}</p>
        <h3 className="mt-2 text-2xl">{t.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div className="text-sm"><span className="flex items-center gap-1 text-muted-foreground"><Clock className="h-3.5 w-3.5" />{t.options.map((o) => o.minutes).join(" / ")} mins</span>
            <span className="font-medium">from {formatNaira(fromPrice(t))}</span></div>
          <BookButton service={t.name} className="btn btn-dark !min-h-11 !px-5 text-sm">Book</BookButton>
        </div>
      </div>
    </article>
  );
}

export function TreatmentDetail({ t, at }: { t: Treatment; at: "home" | "spa" }) {
  const [sel, setSel] = useState(0);
  const opt = t.options[sel] ?? t.options[0]!;
  const price = opt.price + (at === "home" ? site.HOME_VISIT_FEE : 0);
  return (
    <article className="card-lift grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[2fr_3fr]">
      <img src={t.image} alt={t.name} loading="lazy" width={1024} height={1024} className="aspect-[4/3] h-full w-full object-cover md:aspect-auto" />
      <div className="p-6 md:p-8">
        <p className="eyebrow">{t.category}</p>
        <h3 className="mt-2 text-3xl">{t.name}</h3>
        <p className="mt-2 text-muted-foreground">{t.description}</p>
        <ul className="mt-4 grid gap-1.5 text-sm sm:grid-cols-2">{t.includes.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{i}</li>)}</ul>
        <div className="mt-6 flex flex-wrap gap-2" role="radiogroup" aria-label="Duration">
          {t.options.map((o, i) => (
            <button key={o.minutes} role="radio" aria-checked={sel === i} onClick={() => setSel(i)}
              className={cn("min-h-11 rounded-full border px-4 text-sm", sel === i ? "border-gold bg-accent font-medium" : "border-input")}>{o.minutes} mins</button>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div><p className="font-serif text-4xl">{formatNaira(price)}</p>
            <p className="text-xs text-muted-foreground">{at === "home" ? `Includes ${formatNaira(site.HOME_VISIT_FEE)} home-visit fee` : "At our Badore spa"}</p></div>
          <BookButton direct service={`${t.name} (${opt.minutes} mins)`} location={at}>Book this treatment</BookButton>
        </div>
      </div>
    </article>
  );
}

export function PackageCard({ p }: { p: Package }) {
  return (
    <article className={cn("card-lift relative flex h-full flex-col rounded-3xl border p-7", p.popular ? "border-gold bg-forest text-forest-foreground" : "border-border bg-card")}>
      {p.popular && <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-xs font-medium text-gold-foreground">Most Popular</span>}
      <p className={cn("eyebrow", p.popular && "text-gold-soft")}>{p.tagline}</p>
      <h3 className="mt-2 text-4xl">{p.name}</h3>
      <p className={cn("mt-1 text-sm", p.popular ? "text-forest-foreground/70" : "text-muted-foreground")}>{Math.floor(p.minutes / 60)}h{p.minutes % 60 ? ` ${p.minutes % 60}m` : ""} of care</p>
      <p className="mt-6 font-serif text-4xl">{p.price ? formatNaira(p.price) : "Custom quote"}</p>
      <ul className="mt-6 flex-1 space-y-2.5 text-sm">{p.includes.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{i}</li>)}</ul>
      <BookButton service={p.name} className={cn("btn mt-8 w-full", p.popular ? "btn-gold" : "btn-outline")}>Book this package</BookButton>
    </article>
  );
}
