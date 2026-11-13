import { createFileRoute } from "@tanstack/react-router";
import { images, packages, site } from "@/config/site";
import { PackageCard } from "@/components/site/cards";
import { PageHero, SectionHeading } from "@/components/site/ui";
import { FAQ, FinalCta, HomeServiceIncluded } from "@/components/site/sections";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: `Spa Packages · ${site.BUSINESS_NAME}` },
      { name: "description", content: "Relax, Rejuvenate, Royal Escape and bridal or group packages — at home in Lagos or at our Orchard Road spa." },
      { property: "og:title", content: `Spa Packages · ${site.BUSINESS_NAME}` },
      { property: "og:description", content: "Relax, Rejuvenate, Royal Escape and bridal or group packages — at home in Lagos or at our Orchard Road spa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Packages" title={<>Longer rituals, <em>better value</em></>} intro="Curated combinations for a deeper reset. Available at home or at our spa." image={images.products} />
      <section className="container-lux pb-20 pt-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{packages.map((p) => <PackageCard key={p.id} p={p} />)}</div>
        <p className="mt-6 text-sm text-muted-foreground">Home sessions add a small travel fee depending on your area — always confirmed before booking.</p>
      </section>
      <section className="section-y bg-cream">
        <div className="container-lux">
          <SectionHeading eyebrow="Home service" title={<>What every home visit <em>includes</em></>} intro={site.HOME_SERVICE_HOURS} />
          <HomeServiceIncluded />
        </div>
      </section>
      <FAQ />
      <FinalCta />
    </>
  );
}
