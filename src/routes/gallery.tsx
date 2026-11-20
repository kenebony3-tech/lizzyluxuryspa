import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { gallery, site } from "@/config/site";
import { Reveal } from "@/components/site/ui";
import { FinalCta, GalleryGrid, SocialStrip } from "@/components/site/sections";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery — Our Work · ${site.BUSINESS_NAME}` },
      { name: "description", content: "Photos and videos of our massages, facials, nails, home visits and Badore spa." },
      { property: "og:title", content: `Gallery — Our Work · ${site.BUSINESS_NAME}` },
      { property: "og:description", content: "Photos and videos of our massages, facials, nails, home visits and Badore spa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const cats = ["All", "Massage", "Facials", "Nails", "Spa", "Home visits"] as const;

function Page() {
  const [c, setC] = useState<(typeof cats)[number]>("All");
  return (
    <>
      <section className="container-lux pt-12 pb-8 md:pt-20">
        <Reveal><p className="eyebrow mb-4">Gallery</p><h1 className="text-5xl md:text-7xl">Our <em>work</em></h1></Reveal>
        <div className="mt-8 flex gap-2 overflow-x-auto" role="tablist">
          {cats.map((k) => <button key={k} role="tab" aria-selected={c === k} onClick={() => setC(k)} className={cn("min-h-11 shrink-0 rounded-full border px-4 text-sm", c === k ? "border-primary bg-primary text-primary-foreground" : "border-input")}>{k}</button>)}
        </div>
      </section>
      <section className="container-lux pb-12"><GalleryGrid key={c} items={gallery.filter((g) => c === "All" || g.category === c)} /></section>
      <section className="container-lux pb-20"><SocialStrip /></section>
      <FinalCta />
    </>
  );
}
