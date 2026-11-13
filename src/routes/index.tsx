import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Home, Building2, ArrowRight, MessageCircle } from "lucide-react";
import { images, packages, site, treatments } from "@/config/site";
import { BookButton } from "@/components/site/booking";
import { PackageCard, ServiceCard } from "@/components/site/cards";
import { Reveal, SectionHeading, Stars } from "@/components/site/ui";
import { Areas, FAQ, FinalCta, GalleryGrid, HowItWorks, SafetyAccordion, Testimonials, Therapists, VisitSpa, WhyUs } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.BUSINESS_NAME} — Luxury spa treatments at home in Lagos` },
      { name: "description", content: "Massages, facials and nails delivered to your door across Lagos, or visit our Orchard Road spa. Transparent prices, book on WhatsApp." },
      { property: "og:title", content: `${site.BUSINESS_NAME} — Luxury spa at home in Lagos` },
      { property: "og:description", content: "Vetted therapists bring the full spa experience to you. Book on WhatsApp in minutes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const press = ["[Press Logo]", "[Magazine]", "[Lagos Weekly]", "[Partner Hotel]", "[Brand]"];

function Index() {
  const signature = treatments.filter((t) => t.signature);
  return (
    <>
      {/* Hero */}
      <section className="container-lux grid items-center gap-10 pt-8 pb-16 md:grid-cols-[1.1fr_1fr] md:gap-16 md:pt-14 md:pb-24">
        <Reveal>
          <h1 className="text-[2.9rem] leading-[0.98] sm:text-6xl lg:text-[5.5rem]">Book a spa treatment at home <em className="text-gold-foreground/80">in minutes</em></h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">{site.TAGLINE.replace(/[[\]]/g, "")}. Or step into our calm sanctuary on Orchard Road.</p>
          <ul className="mt-7 space-y-2.5">
            {["Qualified & vetted therapists", "Book instantly on WhatsApp", "Free rescheduling"].map((t) => (
              <li key={t} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-accent"><Check className="h-3.5 w-3.5" /></span>{t}</li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <BookButton location="home"><MessageCircle className="h-4 w-4" />Book a Home Session</BookButton>
            <a href="#visit" className="btn btn-outline">Visit Our Spa</a>
          </div>
          <p className="mt-7 flex items-center gap-3 text-sm"><Stars /><span><strong>{site.RATING}</strong> · {site.RATING_COUNT}</span></p>
        </Reveal>
        <Reveal delay={150} className="relative">
          <div className="absolute -top-4 -left-4 hidden h-full w-full rounded-[2.5rem] border border-gold md:block" aria-hidden />
          {/* Hero image slot — swap images.hero in src/config/site.ts (or replace with a <video>) */}
          <img src={images.hero} alt="Therapist arriving at a client's home with a massage bed" width={1280} height={1536} fetchPriority="high" className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover" />
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-card p-4 shadow-lg md:-left-8">
            <p className="eyebrow">Home sessions</p><p className="font-serif text-xl">{site.HOME_SERVICE_HOURS}</p>
          </div>
        </Reveal>
      </section>

      {/* Trusted by */}
      <section aria-label="As featured in" className="border-y border-border py-7">
        <div className="container-lux flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-muted-foreground">
          <span className="eyebrow">As featured in</span>
          {press.map((p) => <span key={p} className="font-serif text-xl italic opacity-70">{p}</span>)}
        </div>
      </section>

      {/* Choose */}
      <section className="section-y">
        <div className="container-lux">
          <SectionHeading eyebrow="Your choice" title={<>How would you like to be <em>pampered?</em></>} />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Home, title: "At Home", desc: "We arrive with everything. You don't lift a finger.", img: images.hero, loc: "home" as const, popular: true, link: "/home-service" as const },
              { icon: Building2, title: "At Our Spa, Orchard Road", desc: "A quiet, candle-lit retreat in the heart of the city.", img: images.interior, loc: "spa" as const, link: "/visit" as const },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <article className="card-lift img-zoom relative overflow-hidden rounded-[2rem] border border-border bg-card">
                  {c.popular && <span className="absolute top-5 left-5 z-10 rounded-full bg-gold px-3 py-1 text-xs font-medium text-gold-foreground">Most popular · Recommended</span>}
                  <img src={c.img} alt="" loading="lazy" className="aspect-[16/11] w-full object-cover" />
                  <div className="flex flex-wrap items-center justify-between gap-4 p-7">
                    <div><h3 className="flex items-center gap-2 text-3xl"><c.icon className="h-5 w-5 text-gold" />{c.title}</h3><p className="mt-1 text-muted-foreground">{c.desc}</p></div>
                    <div className="flex gap-2">
                      <Link to={c.link} className="btn btn-outline !min-h-11">Learn more</Link>
                      <BookButton location={c.loc} className="btn btn-dark !min-h-11">Book</BookButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature treatments */}
      <section className="section-y pt-0">
        <div className="container-lux">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Signature treatments" title={<>Rituals for <em>body & mind</em></>} />
            <Link to="/treatments" className="mb-10 inline-flex items-center gap-2 text-sm font-medium md:mb-14">All treatments & prices <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{signature.map((t, i) => <Reveal key={t.id} delay={(i % 3) * 100}><ServiceCard t={t} /></Reveal>)}</div>
        </div>
      </section>

      <HowItWorks />

      {/* Packages preview */}
      <section className="section-y">
        <div className="container-lux">
          <SectionHeading align="center" eyebrow="Packages" title={<>Thoughtfully <em>curated</em></>} intro="Combine treatments and save. Every package works at home or at our spa." />
          <div className="grid gap-6 pt-3 md:grid-cols-3">{packages.slice(0, 3).map((p) => <PackageCard key={p.id} p={p} />)}</div>
          <div className="mt-10 text-center"><Link to="/packages" className="btn btn-outline">See all packages</Link></div>
        </div>
      </section>

      {/* Our work */}
      <section className="section-y bg-cream">
        <div className="container-lux">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Our work · As seen on social" title={<>Moments of <em>stillness</em></>} />
            <Link to="/gallery" className="mb-10 inline-flex items-center gap-2 text-sm font-medium md:mb-14">Full gallery <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <GalleryGrid />
        </div>
      </section>

      <Testimonials />
      <WhyUs />
      <Therapists />

      <section className="section-y">
        <div className="container-lux grid gap-10 md:grid-cols-[2fr_3fr]">
          <SectionHeading eyebrow="Peace of mind" title={<>Your safety, <em>our priority</em></>} />
          <SafetyAccordion />
        </div>
      </section>

      <Areas />
      <VisitSpa image={images.interior} />
      <FAQ />
      <FinalCta />
    </>
  );
}
