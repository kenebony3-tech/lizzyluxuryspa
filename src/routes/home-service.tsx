import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { images, site } from "@/config/site";
import { BookButton } from "@/components/site/booking";
import { PageHero, Reveal } from "@/components/site/ui";
import { Areas, HomeServiceIncluded, FAQ, FinalCta, HowItWorks, Therapists } from "@/components/site/sections";

export const Route = createFileRoute("/home-service")({
  head: () => ({
    meta: [
      { title: `Home Spa Service in Lagos · ${site.BUSINESS_NAME}` },
      { name: "description", content: "Our therapists bring the bed, linen, oils and music to your home across Lagos. See what's included and book on WhatsApp." },
      { property: "og:title", content: `Home Spa Service in Lagos · ${site.BUSINESS_NAME}` },
      { property: "og:description", content: "Our therapists bring the bed, linen, oils and music to your home across Lagos. See what's included and book on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Home service" title={<>The spa, <em>at your door</em></>} intro={`Hotel-quality treatments in the comfort of your home. ${site.HOME_SERVICE_HOURS}.`} image={images.hero} />
      <div className="container-lux -mt-6 mb-16 flex flex-wrap gap-3">
        <BookButton location="home"><MessageCircle className="h-4 w-4" />Book a Home Session</BookButton>
        <Link to="/treatments" className="btn btn-outline">See prices</Link>
      </div>
      <section className="container-lux pb-20"><HomeServiceIncluded /></section>
      <HowItWorks />
      <Areas />
      <Therapists />
      <FAQ />
      <FinalCta />
    </>
  );
}
