/**
 * ALL business content lives here. Edit this one file to update the site.
 * Images: swap the imports below for your own photos (or paste https URLs).
 */
import heroImg from "@/assets/hero-home-visit.jpg";
import interiorImg from "@/assets/spa-interior.jpg";
import facialImg from "@/assets/facial.jpg";
import productsImg from "@/assets/products.jpg";
import manicureImg from "@/assets/manicure.jpg";
import massageImg from "@/assets/massage.jpg";
import therapistImg from "@/assets/therapist-1.jpg";

export const images = { hero: heroImg, interior: interiorImg, facial: facialImg, products: productsImg, manicure: manicureImg, massage: massageImg, therapist: therapistImg };

export const site = {
  BUSINESS_NAME: "[Spa Name]",
  TAGLINE: "[Luxury spa care, delivered to your door]",
  WHATSAPP_NUMBER: "2340000000000", // international format, no +
  PHONE: "+234 000 000 0000",
  EMAIL: "hello@spaname.com",
  INSTAGRAM: "https://instagram.com/",
  TIKTOK: "https://tiktok.com/",
  FACEBOOK: "https://facebook.com/",
  STORE_ADDRESS: "[Shop address], Orchard Road, Lagos",
  STORE_LANDMARK: "[Landmark / parking note — e.g. opposite the plaza, free parking in front]",
  STORE_HOURS: [
    { days: "Mon – Fri", hours: "9:00am – 8:00pm" },
    { days: "Saturday", hours: "9:00am – 9:00pm" },
    { days: "Sunday", hours: "12:00pm – 7:00pm" },
  ],
  HOME_SERVICE_HOURS: "Daily, 7:00am – 10:00pm",
  HOME_VISIT_FEE: 5000,
  ANNOUNCEMENT: "Free rescheduling · Book via WhatsApp 7am–10pm",
  RATING: "4.9",
  RATING_COUNT: "200+ happy clients",
  MAP_EMBED: "https://www.google.com/maps?q=Orchard+Road+Lagos&output=embed",
  MAP_DIRECTIONS: "https://www.google.com/maps/dir/?api=1&destination=Orchard+Road+Lagos",
  SITE_URL: "https://example.com",
};

export const serviceAreas = ["Lekki Phase 1", "Ikoyi", "Victoria Island", "Ajah", "Ikeja GRA", "Banana Island", "Oniru", "Chevron", "Yaba", "Surulere", "Magodo", "Gbagada"];

export type Category = "Massage" | "Facials" | "Body" | "Hands & Feet" | "Couples";
export const categories: Category[] = ["Massage", "Facials", "Body", "Hands & Feet", "Couples"];

export type Treatment = {
  id: string; name: string; category: Category; image: string; description: string;
  includes: string[]; options: { minutes: number; price: number }[]; signature?: boolean;
};

export const treatments: Treatment[] = [
  { id: "swedish", name: "Swedish Relaxation Massage", category: "Massage", image: massageImg, signature: true,
    description: "Long, flowing strokes that melt away tension and quiet the mind.",
    includes: ["Aromatherapy oil of your choice", "Warm towels", "Calming playlist"],
    options: [{ minutes: 60, price: 25000 }, { minutes: 90, price: 35000 }, { minutes: 120, price: 45000 }] },
  { id: "deep-tissue", name: "Deep Tissue Massage", category: "Massage", image: massageImg,
    description: "Firm, focused pressure for tight muscles and long working weeks.",
    includes: ["Targeted muscle work", "Warming balm", "Post-session stretch"],
    options: [{ minutes: 60, price: 30000 }, { minutes: 90, price: 42000 }] },
  { id: "hot-stone", name: "Hot Stone Ritual", category: "Massage", image: massageImg,
    description: "Heated basalt stones and slow massage for deep, lasting calm.",
    includes: ["Heated basalt stones", "Aromatherapy oils", "Warm towel finish"],
    options: [{ minutes: 90, price: 45000 }, { minutes: 120, price: 55000 }] },
  { id: "glow-facial", name: "Signature Glow Facial", category: "Facials", image: facialImg, signature: true,
    description: "Cleanse, exfoliate and nourish for soft, luminous skin.",
    includes: ["Skin consultation", "Enzyme exfoliation", "Hydrating mask", "Face & neck massage"],
    options: [{ minutes: 60, price: 28000 }, { minutes: 90, price: 38000 }] },
  { id: "body-scrub", name: "Body Scrub & Wrap", category: "Body", image: productsImg, signature: true,
    description: "Polishing salt scrub followed by a nourishing, skin-softening wrap.",
    includes: ["Mineral salt scrub", "Shea body wrap", "Body butter finish"],
    options: [{ minutes: 75, price: 35000 }, { minutes: 105, price: 48000 }] },
  { id: "mani-pedi", name: "Luxury Manicure & Pedicure", category: "Hands & Feet", image: manicureImg, signature: true,
    description: "Soak, shape and polish, finished with a soothing hand and foot massage.",
    includes: ["Rose petal soak", "Cuticle care", "Polish of choice", "Hand & foot massage"],
    options: [{ minutes: 60, price: 18000 }, { minutes: 90, price: 25000 }] },
  { id: "couples", name: "Couples Retreat", category: "Couples", image: interiorImg, signature: true,
    description: "Side-by-side massage for two, with candles and quiet music.",
    includes: ["Two therapists", "Candle & music setup", "Choice of oils"],
    options: [{ minutes: 60, price: 48000 }, { minutes: 90, price: 68000 }] },
];

export type Package = { id: string; name: string; tagline: string; minutes: number; price: number; includes: string[]; popular?: boolean };
export const packages: Package[] = [
  { id: "relax", name: "Relax", tagline: "A gentle reset", minutes: 90, price: 40000,
    includes: ["60 min Swedish massage", "Express glow facial", "Aromatherapy setup"] },
  { id: "rejuvenate", name: "Rejuvenate", tagline: "Our most loved ritual", minutes: 150, price: 70000, popular: true,
    includes: ["90 min massage of choice", "Signature glow facial", "Luxury pedicure", "Herbal tea & ambiance"] },
  { id: "royal", name: "Royal Escape", tagline: "Head-to-toe indulgence", minutes: 240, price: 120000,
    includes: ["Body scrub & wrap", "Hot stone ritual", "Signature facial", "Manicure & pedicure"] },
  { id: "bridal", name: "Bridal & Group", tagline: "For the big day and your circle", minutes: 180, price: 0,
    includes: ["Up to 6 guests", "Massage, facials & nails", "Multiple therapists", "Custom quote"] },
];

export const homeServiceIncludes = ["Qualified therapist", "Massage bed or mat", "Fresh towels & linen", "Premium oils & products", "Music & ambiance setup"];
export const clientPrepares = ["A quiet room or space about 2m × 3m", "Access to a bathroom", "Somewhere to park or easy entry"];

export const testimonials = [
  { name: "Adaeze", treatment: "Rejuvenate Package", rating: 5, quote: "I didn't have to leave my house and it felt like a five-star hotel. Calm, punctual and so professional." },
  { name: "Tolu", treatment: "Deep Tissue Massage", rating: 5, quote: "My therapist arrived early, set up beautifully and fixed a knot I've had for months." },
  { name: "Kemi", treatment: "Signature Glow Facial", rating: 5, quote: "My skin has never looked this good. Booking on WhatsApp took two minutes." },
  { name: "Ifeoma", treatment: "Couples Retreat", rating: 5, quote: "A lovely anniversary surprise. Candles, music, everything thought through." },
];

export const team = [
  { name: "[Therapist Name]", specialty: "Massage & body therapy", years: 8, image: therapistImg },
  { name: "[Therapist Name]", specialty: "Advanced facials", years: 6, image: therapistImg },
  { name: "[Therapist Name]", specialty: "Nail care & pedicure", years: 5, image: therapistImg },
  { name: "[Therapist Name]", specialty: "Hot stone & couples", years: 10, image: therapistImg },
];

export type GalleryItem = { id: string; type: "image" | "video"; src: string; poster?: string; alt: string; category: "Massage" | "Facials" | "Nails" | "Spa" | "Home visits" };
export const gallery: GalleryItem[] = [
  { id: "g1", type: "image", src: heroImg, alt: "Therapist arriving for a home session", category: "Home visits" },
  { id: "g2", type: "image", src: massageImg, alt: "Hot stone massage", category: "Massage" },
  { id: "g3", type: "image", src: facialImg, alt: "Glow facial in progress", category: "Facials" },
  { id: "g4", type: "image", src: manicureImg, alt: "Nude manicure finish", category: "Nails" },
  { id: "g5", type: "image", src: interiorImg, alt: "Treatment room at our Orchard Road spa", category: "Spa" },
  { id: "g6", type: "image", src: productsImg, alt: "Our premium oils and scrubs", category: "Spa" },
  // Video slot: replace src with your .mp4 URL and poster with a still image
  { id: "g7", type: "video", src: "https://cdn.coverr.co/videos/coverr-a-woman-getting-a-massage-1579/1080p.mp4", poster: massageImg, alt: "[Video placeholder] Massage session", category: "Massage" },
  { id: "g8", type: "image", src: therapistImg, alt: "One of our therapists", category: "Home visits" },
];

export const faqs = [
  { q: "How does a home session work?", a: "Message us on WhatsApp with your treatment, time and area. We confirm, and your therapist arrives with everything needed. You simply relax." },
  { q: "What do I need to prepare?", a: "Just a quiet room with a little floor space. We bring the bed, towels, oils and music." },
  { q: "Is there an extra fee for home visits?", a: "A small travel fee applies depending on your area. It's always shown before you confirm — no surprises." },
  { q: "Can I reschedule or cancel?", a: "Yes. Rescheduling is free with at least 4 hours' notice. Just send us a message." },
  { q: "Are your therapists vetted?", a: "Every therapist is trained, certified, background-checked and insured before joining our team." },
  { q: "How do I pay?", a: "By bank transfer or card. We'll share details when your booking is confirmed." },
];

export const safety = [
  { title: "Vetted & insured therapists", body: "ID and background checks, certified training and ongoing supervision for every therapist." },
  { title: "Hygienic, sanitised equipment", body: "Fresh linen for every client. Beds, stones and tools are sanitised between sessions." },
  { title: "Transparent pricing", body: "Prices are listed in full. Any travel fee is confirmed before you book." },
  { title: "Flexible rescheduling", body: "Plans change. Reschedule free of charge with 4 hours' notice." },
];

export const nav = [
  { to: "/home-service", label: "Home Service" },
  { to: "/treatments", label: "Treatments" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/visit", label: "Visit Our Spa" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const formatNaira = (n: number) => "₦" + n.toLocaleString("en-NG");
export const fromPrice = (t: Treatment) => Math.min(...t.options.map((o) => o.price));
