import { useEffect, useRef, useState, type ReactNode } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setVis(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={cn("reveal", vis && "is-visible", className)}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, intro, align = "left", light }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; align?: "left" | "center"; light?: boolean }) {
  return (
    <Reveal className={cn("mb-10 max-w-2xl md:mb-14", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className={cn("eyebrow mb-4", light && "text-gold-soft")}>{eyebrow}</p>}
      <h2 className="text-4xl leading-[1.05] md:text-6xl">{title}</h2>
      {intro && <p className={cn("mt-5 text-base leading-relaxed md:text-lg", light ? "text-forest-foreground/75" : "text-muted-foreground")}>{intro}</p>}
    </Reveal>
  );
}

export function Stars({ n = 5, className }: { n?: number; className?: string }) {
  return (
    <span className={cn("inline-flex gap-0.5 text-gold", className)} aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" aria-hidden />)}
    </span>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: ReactNode; intro: ReactNode; image?: string }) {
  return (
    <section className="container-lux grid items-center gap-10 pt-10 pb-14 md:grid-cols-2 md:pt-16 md:pb-20">
      <Reveal>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-5xl leading-[1.02] md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </Reveal>
      {image && (
        <Reveal delay={150} className="relative">
          <div className="absolute -right-3 -bottom-3 hidden h-full w-full rounded-[2rem] border border-gold md:block" aria-hidden />
          <img src={image} alt="" width={1280} height={960} className="relative aspect-[4/3] w-full rounded-[2rem] object-cover" />
        </Reveal>
      )}
    </section>
  );
}
