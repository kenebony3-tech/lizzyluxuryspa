import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, Building2, MessageCircle } from "lucide-react";
import { packages, treatments } from "@/config/site";
import { buildWhatsAppLink, type BookingLocation } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Prefill = { service?: string | undefined; location?: BookingLocation | undefined };
const Ctx = createContext<{ open: (p?: Prefill) => void }>({ open: () => {} });
export const useBooking = () => useContext(Ctx);

const field = "w-full min-h-12 rounded-xl border border-input bg-card px-4 text-sm focus:border-gold focus:outline-none";

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [location, setLocation] = useState<BookingLocation>("home");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [area, setArea] = useState("");
  const [name, setName] = useState("");

  const open = (p: Prefill = {}) => {
    if (p.location) setLocation(p.location);
    setService(p.service ?? "");
    setOpen(true);
  };
  const isPkg = packages.some((p) => p.name === service);
  const href = buildWhatsAppLink({
    service: isPkg ? undefined : service || undefined,
    package: isPkg ? service : undefined,
    location, date, time, area, name,
  });

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="max-h-[92vh] overflow-y-auto rounded-3xl bg-background sm:max-w-md">
          <DialogHeader>
            <p className="eyebrow">Quick booking</p>
            <DialogTitle className="font-serif text-3xl font-medium">Book your <em>moment</em></DialogTitle>
            <DialogDescription>A few details, then we'll continue on WhatsApp.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Where">
              {([["home", "At Home", Home], ["spa", "At Our Spa", Building2]] as const).map(([v, l, Icon]) => (
                <button key={v} type="button" role="radio" aria-checked={location === v} onClick={() => setLocation(v)}
                  className={cn("flex min-h-14 items-center justify-center gap-2 rounded-xl border text-sm transition-colors",
                    location === v ? "border-gold bg-accent font-medium" : "border-input bg-card")}>
                  <Icon className="h-4 w-4" />{l}
                </button>
              ))}
            </div>
            <label className="block text-sm">Treatment or package
              <select className={cn(field, "mt-1.5")} value={service} onChange={(e) => setService(e.target.value)}>
                <option value="">Not sure yet — advise me</option>
                <optgroup label="Treatments">{treatments.map((t) => <option key={t.id}>{t.name}</option>)}</optgroup>
                <optgroup label="Packages">{packages.map((p) => <option key={p.id}>{p.name}</option>)}</optgroup>
              </select>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-sm">Date <span className="text-muted-foreground">(optional)</span>
                <input type="date" className={cn(field, "mt-1.5")} value={date} onChange={(e) => setDate(e.target.value)} /></label>
              <label className="block text-sm">Time
                <input type="time" className={cn(field, "mt-1.5")} value={time} onChange={(e) => setTime(e.target.value)} /></label>
            </div>
            {location === "home" && (
              <label className="block text-sm">Area or address <span className="text-muted-foreground">(optional)</span>
                <input className={cn(field, "mt-1.5")} placeholder="e.g. Lekki Phase 1" value={area} onChange={(e) => setArea(e.target.value)} /></label>
            )}
            <label className="block text-sm">Your name <span className="text-muted-foreground">(optional)</span>
              <input className={cn(field, "mt-1.5")} value={name} onChange={(e) => setName(e.target.value)} /></label>
            <a href={href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn btn-gold w-full">
              <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
}

/** Opens the quick-booking drawer. Use `direct` to skip straight to WhatsApp. */
export function BookButton({ service, location, children, className = "btn btn-gold", direct }: Prefill & { children: ReactNode; className?: string; direct?: boolean }) {
  const { open } = useBooking();
  if (direct) {
    return <a href={buildWhatsAppLink({ service, location })} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
  }
  return <button type="button" className={className} onClick={() => open({ service, location })}>{children}</button>;
}
