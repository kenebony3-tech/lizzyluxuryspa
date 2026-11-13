import { site } from "@/config/site";

export type BookingLocation = "home" | "spa";

export type WhatsAppBooking = {
  service?: string | undefined;
  package?: string | undefined;
  duration?: string | undefined;
  location?: BookingLocation | undefined;
  date?: string | undefined;
  time?: string | undefined;
  area?: string | undefined;
  name?: string | undefined;
  message?: string | undefined;
};

export function buildWhatsAppMessage(b: WhatsAppBooking = {}): string {
  if (b.message && !b.service && !b.package) {
    return `Hello ${site.BUSINESS_NAME}${b.name ? `, this is ${b.name}` : ""}. ${b.message}`;
  }
  const item = b.package ? `the *${b.package}* package` : b.service ? `*${b.service}*` : "a treatment";
  const dur = b.duration ? ` (${b.duration})` : "";
  const loc = b.location === "home" ? " as a *Home Session*" : b.location === "spa" ? " as a *Spa Visit*" : "";
  const lines = [`Hello ${site.BUSINESS_NAME}${b.name ? `, this is ${b.name}` : ""}. I'd like to book ${item}${dur}${loc}.`];
  if (b.date || b.time) lines.push(`Preferred time: ${[b.date, b.time].filter(Boolean).join(" at ")}`);
  if (b.location === "home" && b.area) lines.push(`Area/address: ${b.area}`);
  if (b.message) lines.push(b.message);
  lines.push("Please let me know your availability.");
  return lines.join("\n");
}

export function buildWhatsAppLink(b: WhatsAppBooking = {}): string {
  return `https://wa.me/${site.WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(b))}`;
}
