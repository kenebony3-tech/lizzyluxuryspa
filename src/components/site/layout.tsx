import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Instagram, Facebook, Phone, Mail, MapPin, ShieldCheck, Sparkles, Receipt, CalendarClock } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { nav, serviceAreas, site } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { BookButton } from "./booking";

export function Logo() {
  return (
    <Link to="/" className="flex min-w-0 flex-col leading-none">
      <span className="truncate font-serif text-2xl">{site.BUSINESS_NAME}</span>
      <span className="mt-1 text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">Spa · Home & Orchard Rd</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-forest py-2 text-center text-xs tracking-wide text-forest-foreground">{site.ANNOUNCEMENT}</div>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="container-lux grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm text-foreground/75 transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-medium" }}>{n.label}</Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <BookButton className="btn btn-gold hidden !min-h-11 !px-5 text-sm sm:inline-flex"><MessageCircle className="h-4 w-4" />Book on WhatsApp</BookButton>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden" aria-label="Open menu"><Menu className="h-5 w-5" /></SheetTrigger>
              <SheetContent side="right" className="flex w-full flex-col bg-background sm:max-w-sm">
                <SheetTitle className="font-serif text-2xl font-medium">{site.BUSINESS_NAME}</SheetTitle>
                <nav className="mt-6 flex flex-col" aria-label="Mobile">
                  <Link to="/" onClick={() => setOpen(false)} className="border-b border-border py-4 font-serif text-2xl">Home</Link>
                  {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-border py-4 font-serif text-2xl">{n.label}</Link>)}
                </nav>
                <a href={buildWhatsAppLink({ location: "home" })} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-auto w-full"><MessageCircle className="h-4 w-4" />Book on WhatsApp</a>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

export function WhatsAppFloat() {
  return (
    <>
      <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"
        className="wa-pulse fixed right-5 bottom-24 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lg md:bottom-6">
        <MessageCircle className="h-6 w-6" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a href={buildWhatsAppLink({ location: "home" })} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-full"><MessageCircle className="h-4 w-4" />Book Home Session on WhatsApp</a>
      </div>
    </>
  );
}

const trust = [
  { icon: ShieldCheck, label: "Vetted and insured therapists" },
  { icon: Sparkles, label: "Hygienic, sanitised equipment" },
  { icon: Receipt, label: "Transparent pricing, no hidden fees" },
  { icon: CalendarClock, label: "Flexible rescheduling" },
];

export function SiteFooter() {
  return (
    <footer className="bg-forest pb-28 text-forest-foreground md:pb-10">
      <div className="container-lux grid grid-cols-2 gap-6 border-b border-forest-foreground/15 py-8 md:grid-cols-4">
        {trust.map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3 text-sm text-forest-foreground/80"><Icon className="h-5 w-5 shrink-0 text-gold" />{label}</div>)}
      </div>
      <div className="container-lux grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-serif text-3xl">{site.BUSINESS_NAME}</p>
          <p className="mt-3 text-sm text-forest-foreground/70">{site.TAGLINE}</p>
          <div className="mt-6 flex gap-3">
            <a href={site.INSTAGRAM} aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-forest-foreground/25 hover:border-gold"><Instagram className="h-4 w-4" /></a>
            <a href={site.FACEBOOK} aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-forest-foreground/25 hover:border-gold"><Facebook className="h-4 w-4" /></a>
            <a href={site.TIKTOK} aria-label="TikTok" className="grid h-11 w-11 place-items-center rounded-full border border-forest-foreground/25 text-xs font-semibold hover:border-gold">TT</a>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4 text-gold-soft">Explore</p>
          <ul className="space-y-2.5 text-sm">{nav.map((n) => <li key={n.to}><Link to={n.to} className="text-forest-foreground/80 hover:text-gold">{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <p className="eyebrow mb-4 text-gold-soft">Contact</p>
          <ul className="space-y-3 text-sm text-forest-foreground/80">
            <li className="flex gap-2"><MessageCircle className="h-4 w-4 shrink-0 text-gold" /><a href={buildWhatsAppLink()}>WhatsApp us</a></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold" /><a href={`tel:${site.PHONE.replace(/\s/g, "")}`}>{site.PHONE}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-gold" /><a href={`mailto:${site.EMAIL}`}>{site.EMAIL}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" />{site.STORE_ADDRESS}</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4 text-gold-soft">Home service areas</p>
          <p className="text-sm leading-relaxed text-forest-foreground/80">{serviceAreas.join(" · ")}</p>
        </div>
      </div>
      <div className="container-lux text-xs text-forest-foreground/55">© {new Date().getFullYear()} {site.BUSINESS_NAME}. All rights reserved.</div>
    </footer>
  );
}
