import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/config/site";
import { PageHero, Reveal, SectionHeading } from "@/components/site/ui";
import { FinalCta, SafetyAccordion, Therapists, WhyUs } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us · ${site.BUSINESS_NAME}` },
      { name: "description", content: "Our story, values, therapist credentials and our safety and hygiene commitments." },
      { property: "og:title", content: `About Us · ${site.BUSINESS_NAME}` },
      { property: "og:description", content: "Our story, values, therapist credentials and our safety and hygiene commitments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const values = [
  { t: "Calm", d: "Unhurried care. We arrive on time and never rush a session." },
  { t: "Craft", d: "Trained hands, proper technique and continuous learning." },
  { t: "Honesty", d: "Clear prices and straight answers, always." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="About us" title={<>Care, <em>brought to you</em></>} intro="[Brand story placeholder] We started with one belief: real rest shouldn't require traffic. So we bring the spa to you." image={images.therapist} />
      <section className="container-lux grid gap-6 pb-20 md:grid-cols-3">
        {values.map((v, i) => <Reveal key={v.t} delay={i * 100} className="rounded-3xl border border-border bg-card p-8"><h3 className="text-3xl"><em>{v.t}</em></h3><p className="mt-3 text-muted-foreground">{v.d}</p></Reveal>)}
      </section>
      <Therapists />
      <WhyUs />
      <section className="section-y pt-0">
        <div className="container-lux grid gap-10 md:grid-cols-[2fr_3fr]">
          <SectionHeading eyebrow="Safety & hygiene" title={<>Our <em>commitments</em></>} />
          <SafetyAccordion />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
