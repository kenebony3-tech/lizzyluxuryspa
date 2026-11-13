import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categories, formatNaira, images, site, treatments, type Category } from "@/config/site";
import { TreatmentDetail } from "@/components/site/cards";
import { PageHero, Reveal } from "@/components/site/ui";
import { FinalCta } from "@/components/site/sections";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: `Treatments & Prices · ${site.BUSINESS_NAME}` },
      { name: "description", content: "Massages, facials, body scrubs, nails and couples sessions with clear naira pricing for home and spa visits." },
      { property: "og:title", content: `Treatments & Prices · ${site.BUSINESS_NAME}` },
      { property: "og:description", content: "Massages, facials, body scrubs, nails and couples sessions with clear naira pricing for home and spa visits." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const [cat, setCat] = useState<Category | "All">("All");
  const [at, setAt] = useState<"home" | "spa">("home");
  const list = treatments.filter((t) => cat === "All" || t.category === cat);
  return (
    <>
      <PageHero eyebrow="Treatments & pricing" title={<>Every ritual, <em>clearly priced</em></>} intro={`Choose a duration and where you'd like it. Home sessions include a ${formatNaira(site.HOME_VISIT_FEE)} visit fee.`} image={images.facial} />
      <section className="container-lux pb-20">
        <div className="sticky top-[4.5rem] z-20 -mx-5 mb-8 flex flex-col gap-3 border-b border-border bg-background/95 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2 overflow-x-auto" role="tablist" aria-label="Categories">
            {(["All", ...categories] as const).map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
                className={cn("min-h-11 shrink-0 rounded-full border px-4 text-sm", cat === c ? "border-primary bg-primary text-primary-foreground" : "border-input")}>{c}</button>
            ))}
          </div>
          <div className="flex shrink-0 rounded-full border border-input p-1" role="radiogroup" aria-label="Pricing for">
            {(["home", "spa"] as const).map((v) => (
              <button key={v} role="radio" aria-checked={at === v} onClick={() => setAt(v)} className={cn("min-h-10 rounded-full px-4 text-sm", at === v && "bg-gold text-gold-foreground font-medium")}>{v === "home" ? "At Home" : "At Spa"}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-6">{list.map((t) => <Reveal key={t.id}><TreatmentDetail t={t} at={at} /></Reveal>)}</div>
      </section>
      <FinalCta />
    </>
  );
}
