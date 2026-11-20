import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Play, MapPin, Clock, Navigation, ShieldCheck, Leaf, Sparkles, Receipt, CalendarClock, Instagram, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { clientPrepares, homeServiceIncludes, faqs, gallery, safety, serviceAreas, site, team, testimonials, type GalleryItem } from "@/config/site";
import { BookButton } from "./booking";
import { Reveal, SectionHeading, Stars } from "./ui";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const steps = [
    { t: "Choose your treatment", d: "Browse treatments and packages with clear prices." },
    { t: "Chat with us on WhatsApp", d: "Pick a time and tell us where — home or our spa." },
    { t: "Relax, we bring everything", d: "Your therapist arrives with the bed, linen, oils and music." },
  ];
  return (
    <section className="section-y bg-cream">
      <div className="container-lux">
        <SectionHeading eyebrow="How it works" title={<>Three steps to <em>calm</em></>} />
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 120}>
              <li className="h-full rounded-3xl border border-border bg-card p-8">
                <span className="font-serif text-6xl text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-2xl">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);
  return (
    <section className="section-y bg-forest text-forest-foreground" aria-roledescription="carousel" aria-label="Client reviews">
      <div className="container-lux">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading light eyebrow="Kind words" title={<>Loved by <em>our clients</em></>} />
          <div className="mb-10 flex gap-2 md:mb-14">
            <button onClick={() => go(-1)} aria-label="Previous review" className="grid h-12 w-12 place-items-center rounded-full border border-forest-foreground/30 hover:border-gold"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={() => go(1)} aria-label="Next review" className="grid h-12 w-12 place-items-center rounded-full border border-forest-foreground/30 hover:border-gold"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2" aria-live="polite">
          {[0, 1].map((k) => {
            const t = testimonials[(i + k) % n]!;
            return (
              <figure key={t.name + k} className={cn("rounded-3xl border border-forest-foreground/15 p-8 animate-in fade-in duration-700", k === 1 && "hidden md:block")}>
                <Stars n={t.rating} />
                <blockquote className="mt-5 font-serif text-2xl leading-snug md:text-3xl">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-sm text-forest-foreground/70">{t.name} · {t.treatment}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const items = [
    { icon: ShieldCheck, t: "Vetted & insured", d: "Every therapist is certified and background-checked." },
    { icon: Leaf, t: "Premium products", d: "Natural oils, shea and mineral salts. Nothing harsh." },
    { icon: Sparkles, t: "Hygiene & safety", d: "Fresh linen per client. Sanitised tools, always." },
    { icon: Receipt, t: "Transparent pricing", d: "Clear prices in naira. No hidden fees." },
    { icon: CalendarClock, t: "Flexible rescheduling", d: "Free with 4 hours' notice." },
  ];
  return (
    <section className="section-y">
      <div className="container-lux">
        <SectionHeading eyebrow="Why choose us" title={<>Care you can <em>trust</em></>} />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-background p-7"><Icon className="h-6 w-6 text-gold" /><h3 className="mt-5 text-xl">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Therapists() {
  return (
    <section className="section-y bg-cream">
      <div className="container-lux">
        <SectionHeading eyebrow="Meet our therapists" title={<>Skilled hands, <em>warm hearts</em></>} intro="Trained, certified and chosen for their calm, caring approach." />
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="img-zoom overflow-hidden rounded-3xl bg-card">
                <img src={m.image} alt={`${m.name}, ${m.specialty}`} loading="lazy" width={768} height={960} className="aspect-[4/5] w-full object-cover" />
                <figcaption className="p-4 md:p-5"><p className="font-serif text-xl">{m.name}</p><p className="text-sm text-muted-foreground">{m.specialty}</p><p className="mt-1 text-xs text-gold-foreground/80">{m.years} years' experience</p></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SafetyAccordion() {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {safety.map((s) => (
        <AccordionItem key={s.title} value={s.title}>
          <AccordionTrigger className="py-6 font-serif text-xl hover:no-underline md:text-2xl">{s.title}</AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">{s.body}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function Areas() {
  return (
    <section className="section-y">
      <div className="container-lux grid gap-12 md:grid-cols-2">
        <SectionHeading eyebrow="Where we operate" title={<>Across <em>Lagos</em>, at your door</>} intro={`Home sessions ${site.HOME_SERVICE_HOURS.toLowerCase()}. Don't see your area? Message us — we often can.`} />
        <Reveal><ul className="flex flex-wrap gap-2.5">
          {serviceAreas.map((a) => <li key={a} className="flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm"><MapPin className="h-3.5 w-3.5 text-gold" />{a}</li>)}
        </ul></Reveal>
      </div>
    </section>
  );
}

export function VisitSpa({ image }: { image: string }) {
  return (
    <section id="visit" className="section-y bg-cream scroll-mt-24">
      <div className="container-lux grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Visit our spa</p>
          <h2 className="text-4xl md:text-6xl">Our sanctuary on <em>Badore</em></h2>
          <p className="mt-5 flex gap-2 text-muted-foreground"><MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />{site.STORE_ADDRESS}</p>
          <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm">
            {site.STORE_HOURS.map((h) => <li key={h.days} className="flex justify-between gap-4"><span className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" />{h.days}</span><span>{h.hours}</span></li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton location="spa">Book a Spa Visit</BookButton>
            <a href={site.MAP_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Navigation className="h-4 w-4" />Get Directions</a>
          </div>
        </Reveal>
        <Reveal delay={150} className="grid gap-4">
          <img src={image} alt="Treatment room at our Badore spa" loading="lazy" width={1280} height={960} className="aspect-[16/10] w-full rounded-3xl object-cover" />
          <iframe title="Map to our Badore spa" src={site.MAP_EMBED} loading="lazy" className="h-56 w-full rounded-3xl border-0 grayscale-[40%]" />
        </Reveal>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="section-y">
      <div className="container-lux grid gap-10 md:grid-cols-[2fr_3fr]">
        <SectionHeading eyebrow="Questions" title={<>Good to <em>know</em></>} />
        <Accordion type="single" collapsible className="border-t border-border">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="py-6 text-left font-serif text-xl hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="container-lux pb-20">
      <Reveal className="rounded-[2.5rem] bg-forest px-6 py-16 text-center text-forest-foreground md:py-24">
        <p className="eyebrow text-gold-soft">Your time to unwind</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-5xl md:text-7xl">Ready to <em>relax?</em></h2>
        <p className="mx-auto mt-4 max-w-md text-forest-foreground/75">Book on WhatsApp in under a minute. We'll take care of the rest.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <BookButton location="home"><MessageCircle className="h-4 w-4" />Book on WhatsApp</BookButton>
        </div>
      </Reveal>
    </section>
  );
}

export function SocialStrip() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-border bg-card p-6 text-center sm:flex-row sm:text-left">
      <p className="font-serif text-2xl">See more on <em>Instagram & TikTok</em></p>
      <div className="flex gap-3">
        <a href={site.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Instagram className="h-4 w-4" />Instagram</a>
        <a href={site.TIKTOK} target="_blank" rel="noopener noreferrer" className="btn btn-outline">TikTok</a>
      </div>
    </div>
  );
}

export function GalleryGrid({ items = gallery }: { items?: GalleryItem[] }) {
  const [idx, setIdx] = useState<number | null>(null);
  const close = useCallback(() => setIdx(null), []);
  const step = useCallback((d: number) => setIdx((v) => (v === null ? v : (v + d + items.length) % items.length)), [items.length]);
  const touch = useRef(0);
  useEffect(() => {
    if (idx === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [idx, close, step]);
  const cur = idx !== null ? items[idx] : null;
  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {items.map((g, i) => (
          <button key={g.id} onClick={() => setIdx(i)} className="img-zoom group relative block w-full break-inside-avoid overflow-hidden rounded-2xl" aria-label={`Open ${g.alt}`}>
            <img src={g.type === "video" ? g.poster : g.src} alt={g.alt} loading="lazy" className={cn("w-full object-cover", i % 3 === 0 ? "aspect-[3/4]" : "aspect-square")} />
            {g.type === "video" && <span className="absolute inset-0 grid place-items-center"><span className="grid h-14 w-14 place-items-center rounded-full bg-background/85"><Play className="h-5 w-5 fill-current" /></span></span>}
          </button>
        ))}
      </div>
      {cur && (
        <div role="dialog" aria-modal="true" aria-label={cur.alt} className="fixed inset-0 z-50 flex items-center justify-center bg-forest/95 p-4"
          onClick={close} onTouchStart={(e) => (touch.current = e.touches[0]?.clientX ?? 0)}
          onTouchEnd={(e) => { const d = (e.changedTouches[0]?.clientX ?? 0) - touch.current; if (Math.abs(d) > 50) step(d < 0 ? 1 : -1); }}>
          <button onClick={close} aria-label="Close" className="absolute top-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-background/15 text-forest-foreground"><X /></button>
          <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-3 hidden h-12 w-12 place-items-center rounded-full bg-background/15 text-forest-foreground md:grid"><ChevronLeft /></button>
          <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-3 hidden h-12 w-12 place-items-center rounded-full bg-background/15 text-forest-foreground md:grid"><ChevronRight /></button>
          <div onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-4xl">
            {cur.type === "video"
              ? <video src={cur.src} poster={cur.poster} controls autoPlay playsInline className="max-h-[80vh] rounded-2xl" />
              : <img src={cur.src} alt={cur.alt} className="max-h-[80vh] rounded-2xl object-contain" />}
            <p className="mt-3 text-center text-sm text-forest-foreground/80">{cur.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}

export function HomeServiceIncluded() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Reveal className="rounded-3xl bg-forest p-8 text-forest-foreground">
        <h3 className="text-3xl">We bring</h3>
        <ul className="mt-5 space-y-3">{homeServiceIncludes.map((i) => <li key={i} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-gold" />{i}</li>)}</ul>
      </Reveal>
      <Reveal delay={120} className="rounded-3xl border border-border bg-card p-8">
        <h3 className="text-3xl">You prepare</h3>
        <ul className="mt-5 space-y-3">{clientPrepares.map((i) => <li key={i} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-gold" />{i}</li>)}</ul>
      </Reveal>
    </div>
  );
}

