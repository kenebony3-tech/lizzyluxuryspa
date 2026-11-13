import { describe, expect, it } from "vitest";
import { buildWhatsAppLink, buildWhatsAppMessage } from "@/lib/whatsapp";
import { site } from "@/config/site";

describe("WhatsApp booking links", () => {
  it("points to wa.me with the configured number", () => {
    expect(buildWhatsAppLink().startsWith(`https://wa.me/${site.WHATSAPP_NUMBER}?text=`)).toBe(true);
  });
  it("pre-fills treatment, duration and home session", () => {
    const m = buildWhatsAppMessage({ service: "Deep Tissue Massage", duration: "90 mins", location: "home" });
    expect(m).toContain("*Deep Tissue Massage* (90 mins) as a *Home Session*");
  });
  it("labels spa visits", () => {
    expect(buildWhatsAppMessage({ package: "Relax", location: "spa" })).toContain("the *Relax* package as a *Spa Visit*");
  });
  it("only includes the address for home sessions", () => {
    expect(buildWhatsAppMessage({ service: "X", location: "spa", area: "Lekki" })).not.toContain("Lekki");
    expect(buildWhatsAppMessage({ service: "X", location: "home", area: "Lekki" })).toContain("Area/address: Lekki");
  });
});
