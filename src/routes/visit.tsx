import { createFileRoute } from "@tanstack/react-router";
import { Car } from "lucide-react";
import { images, site } from "@/config/site";
import { BookButton } from "@/components/site/booking";
import { PageHero, Reveal } from "@/components/site/ui";
import { FinalCta, VisitSpa } from "@/components/site/sections";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: `Visit Our Spa on Orchard Road, Lagos · ${site.BUSINESS_NAME}` },
      { name: "description", content: "Our calm, candle-lit spa on Orchard Road, Lagos. Address, opening hours, directions and booking." },
      { property: "og:title", content: `Visit Our Spa on Orchard Road, Lagos · ${site.BUSINESS_NAME}` },
      { property: "og:description", content: "Our calm, candle-lit spa on Orchard Road, Lagos. Address, opening hours, directions and booking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Visit our spa" title={<>A quiet room <em>in the city</em></>} intro="Warm wood, soft light and nowhere to be. Our Orchard Road spa is a pause from the Lagos rush." image={images.interior} />
      <section className="container-lux grid gap-10 pb-16 md:grid-cols-2">
        <Reveal><h2 className="text-4xl">Our <em>story</em></h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">[Store story placeholder] We began by bringing treatments to clients' homes. Our Orchard Road space followed for those who love the ritual of stepping out — a place to breathe, unplug and be looked after.</p>
          <p className="mt-6 flex gap-2 text-sm"><Car className="h-4 w-4 shrink-0 text-gold" />{site.STORE_LANDMARK}</p>
          <div className="mt-6"><BookButton location="spa" direct>Book a Spa Session</BookButton></div>
        </Reveal>
        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          <img src={images.products} alt="Spa products" loading="lazy" className="aspect-square rounded-3xl object-cover" />
          <img src={images.manicure} alt="Nail station" loading="lazy" className="aspect-square rounded-3xl object-cover" />
        </Reveal>
      </section>
      <VisitSpa image={images.massage} />
      <FinalCta />
    </>
  );
}
