import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { site } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us · ${site.BUSINESS_NAME}` },
      { name: "description", content: "WhatsApp, call or email us. Find our Badore spa address and opening hours." },
      { property: "og:title", content: `Contact Us · ${site.BUSINESS_NAME}` },
      { property: "og:description", content: "WhatsApp, call or email us. Find our Badore spa address and opening hours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const field = "w-full min-h-12 rounded-xl border border-input bg-card px-4 py-3 text-sm focus:border-gold focus:outline-none";

function Page() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppLink({ name: name.trim() || undefined, message: msg.trim() || "I have a question." }), "_blank", "noopener");
  };
  return (
    <section className="container-lux grid gap-12 pt-12 pb-20 md:grid-cols-2 md:pt-20">
      <Reveal>
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="text-5xl md:text-7xl">Let's <em>talk</em></h1>
        <ul className="mt-10 space-y-5">
          <li><a href={buildWhatsAppLink()} className="flex items-center gap-4"><MessageCircle className="h-5 w-5 text-gold" />WhatsApp — fastest reply</a></li>
          <li><a href={`tel:${site.PHONE.replace(/\s/g, "")}`} className="flex items-center gap-4"><Phone className="h-5 w-5 text-gold" />{site.PHONE}</a></li>
          <li><a href={`mailto:${site.EMAIL}`} className="flex items-center gap-4"><Mail className="h-5 w-5 text-gold" />{site.EMAIL}</a></li>
          <li className="flex items-center gap-4"><MapPin className="h-5 w-5 shrink-0 text-gold" />{site.STORE_ADDRESS}</li>
          <li className="flex gap-4"><Clock className="h-5 w-5 shrink-0 text-gold" /><div className="text-sm">
            <p>Home service: {site.HOME_SERVICE_HOURS}</p>
            {site.STORE_HOURS.map((h) => <p key={h.days} className="text-muted-foreground">Spa {h.days}: {h.hours}</p>)}
          </div></li>
        </ul>
      </Reveal>
      <Reveal delay={120}>
        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-7 md:p-9">
          <h2 className="text-3xl">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">This opens WhatsApp with your message ready to send.</p>
          <label className="mt-6 block text-sm">Name<input className={`${field} mt-1.5`} value={name} onChange={(e) => setName(e.target.value)} maxLength={80} /></label>
          <label className="mt-4 block text-sm">Message<textarea required rows={5} className={`${field} mt-1.5`} value={msg} onChange={(e) => setMsg(e.target.value)} maxLength={1000} /></label>
          <button type="submit" className="btn btn-gold mt-6 w-full"><MessageCircle className="h-4 w-4" />Continue on WhatsApp</button>
        </form>
      </Reveal>
    </section>
  );
}
