// ─── Trek / Tour Data ─────────────────────────────────────────────────────────

export type Badge =
  | "Best Price"
  | "Top Seller"
  | "Featured"
  | "Group Tours"
  | "Private Trip"
  | "New";

export interface Trek {
  id: number;
  slug: string;
  title: string;
  region: "Everest" | "Annapurna" | "Langtang" | "Manaslu" | "Mustang" | "Bhutan" | "Tibet";
  days: number;
  price: number;
  reviews: number;
  badge?: Badge;
  image: string;        // use a real URL or placeholder
  difficulty: "Easy" | "Moderate" | "Challenging" | "Strenuous";
  isLuxury?: boolean;
  isFeatured?: boolean;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;         // ISO string
  image: string;
  excerpt: string;
  readTime: number;     // minutes
}

export interface Stat {
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// ─── Best-seller Treks ────────────────────────────────────────────────────────

export const bestSellerTreks: Trek[] = [
  {
    id: 1,
    slug: "everest-base-camp-trek",
    title: "Everest Base Camp Trek",
    region: "Everest",
    days: 16,
    price: 1525,
    reviews: 343,
    badge: "Group Tours",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    difficulty: "Strenuous",
  },
  {
    id: 2,
    slug: "annapurna-base-camp-trek",
    title: "Annapurna Base Camp Trek",
    region: "Annapurna",
    days: 14,
    price: 1090,
    reviews: 70,
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    difficulty: "Challenging",
  },
  {
    id: 3,
    slug: "manaslu-circuit-trek",
    title: "Manaslu Circuit Trek",
    region: "Manaslu",
    days: 14,
    price: 1380,
    reviews: 37,
    badge: "Group Tours",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
    difficulty: "Strenuous",
  },
  {
    id: 4,
    slug: "annapurna-circuit-trek",
    title: "Annapurna Circuit Trek",
    region: "Annapurna",
    days: 14,
    price: 1250,
    reviews: 78,
    badge: "Top Seller",
    image: "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=600&q=80",
    difficulty: "Challenging",
  },
  {
    id: 5,
    slug: "langtang-valley-trek",
    title: "Langtang Valley Trek",
    region: "Langtang",
    days: 10,
    price: 750,
    reviews: 34,
    badge: "Best Price",
    image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=600&q=80",
    difficulty: "Moderate",
  },
  {
    id: 6,
    slug: "upper-mustang-trek",
    title: "Upper Mustang Trek",
    region: "Mustang",
    days: 17,
    price: 1950,
    reviews: 22,
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80",
    difficulty: "Challenging",
  },
];

// ─── Luxury Treks ─────────────────────────────────────────────────────────────

export const luxuryTreks: Trek[] = [
  {
    id: 10,
    slug: "everest-base-camp-luxury-trek",
    title: "Everest Base Camp Luxury Trek",
    region: "Everest",
    days: 16,
    price: 2625,
    reviews: 19,
    badge: "Private Trip",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&q=80",
    difficulty: "Strenuous",
    isLuxury: true,
  },
  {
    id: 11,
    slug: "annapurna-luxury-trek",
    title: "Annapurna Luxury Trek",
    region: "Annapurna",
    days: 9,
    price: 1750,
    reviews: 5,
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=600&q=80",
    difficulty: "Moderate",
    isLuxury: true,
  },
  {
    id: 12,
    slug: "bhutan-highlights-tour",
    title: "Bhutan Highlights Tour",
    region: "Bhutan",
    days: 6,
    price: 1450,
    reviews: 12,
    badge: "Top Seller",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    difficulty: "Easy",
    isLuxury: true,
  },
];

// ─── Featured / Trending Treks ────────────────────────────────────────────────

export const featuredTreks: Trek[] = [
  {
    id: 20,
    slug: "annapurna-panorama-trek",
    title: "Annapurna Panorama Trek",
    region: "Annapurna",
    days: 8,
    price: 710,
    reviews: 24,
    badge: "Group Tours",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
    difficulty: "Moderate",
    isFeatured: true,
  },
  {
    id: 21,
    slug: "glimpse-of-bhutan-tour",
    title: "Glimpse of Bhutan Tour",
    region: "Bhutan",
    days: 5,
    price: 1450,
    reviews: 7,
    badge: "Top Seller",
    image: "https://images.unsplash.com/photo-1572367166643-5c70b4f44d2e?w=600&q=80",
    difficulty: "Easy",
    isFeatured: true,
  },
  {
    id: 22,
    slug: "everest-chola-pass-trek",
    title: "Everest Chola Pass Trek",
    region: "Everest",
    days: 19,
    price: 1750,
    reviews: 25,
    badge: "Best Price",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    difficulty: "Strenuous",
    isFeatured: true,
  },
];

// ─── Trust Stats ──────────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: "2,614+", label: "TripAdvisor Reviews" },
  { value: "15+",    label: "Years of Experience" },
  { value: "52%",    label: "Returning Clients" },
  { value: "5★",     label: "Average Rating" },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqs: FAQItem[] = [
  {
    question: "What trekking package would you recommend for a first-timer?",
    answer:
      "For first-timers, we recommend the Annapurna Panorama Trek (8 days) or the Langtang Valley Trek (10 days). Both offer spectacular scenery at a moderate difficulty level, giving you a genuine Himalayan experience without the extreme altitude challenges of Everest routes.",
  },
  {
    question: "What safety measures do you adopt during a trek?",
    answer:
      "Our lead guides are certified in Wilderness First Aid and carry full medical kits, oximeters, and oxygen cylinders. We build acclimatization days into every high-altitude itinerary and monitor each trekker daily. Emergency evacuation protocols are in place for every route.",
  },
  {
    question: "What travel insurance do I need?",
    answer:
      "Travel insurance is mandatory. Your policy must cover high-altitude trekking (up to the altitude of your route), emergency helicopter evacuation, medical expenses, and trip cancellation. We can recommend trusted providers if needed.",
  },
  {
    question: "Can I get a custom / private tour?",
    answer:
      "Absolutely. All of our packages can be arranged as private, fully customized trips on your preferred dates. Contact us with your requirements and we'll build a tailor-made itinerary within 24 hours.",
  },
  {
    question: "What is the best season to trek in Nepal?",
    answer:
      "The two prime trekking seasons are Spring (March–May) and Autumn (September–November). Both offer stable weather and clear mountain views. Winter treks (December–February) are possible on lower trails; monsoon season (June–August) is generally avoided for high-altitude routes.",
  },
  {
    question: "How do I book and make a payment?",
    answer:
      "You can book directly through our website or by contacting our team via email or WhatsApp. We accept a small deposit to confirm your trip, with the balance due before departure. We accept bank transfer, credit/debit cards, and major payment processors.",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "where-is-mount-everest",
    title: "Where is Mount Everest Located? Country, Location & Height",
    date: "2026-03-20",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    excerpt:
      "Mount Everest sits on the border of Nepal and Tibet at 8,848.86 m. Discover its exact location, the surrounding region, and why it continues to draw climbers from across the world.",
    readTime: 5,
  },
  {
    id: 2,
    slug: "best-treks-langtang-region",
    title: "Best Treks in the Langtang Region",
    date: "2026-03-19",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&q=80",
    excerpt:
      "The Langtang region is Nepal's closest Himalayan area to Kathmandu. From the classic Langtang Valley Trek to the sacred Gosaikunda lakes, here are the routes worth exploring.",
    readTime: 7,
  },
  {
    id: 3,
    slug: "mani-rimdu-festival-2026",
    title: "Mani Rimdu Festival 2026 — A Brief Guide",
    date: "2026-03-19",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80",
    excerpt:
      "The Mani Rimdu festival at Tengboche Monastery is one of the most vibrant cultural events in the Khumbu. Here's when it takes place in 2026 and how to include it in your trek.",
    readTime: 4,
  },
  {
    id: 4,
    slug: "about-nepal",
    title: "Where is Nepal Located? Geography, Culture & Fast Facts",
    date: "2026-03-20",
    image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80",
    excerpt:
      "Nestled between India and China in South Asia, Nepal is home to eight of the world's ten highest peaks. Here's everything you need to know before you visit.",
    readTime: 6,
  },
];

// ─── Category Links ───────────────────────────────────────────────────────────

export interface Category {
  label: string;
  count: number;
  icon: string;         // emoji — no external icon lib needed
  href: string;
}

export const categories: Category[] = [
  { label: "Nepal Trekking",  count: 104, icon: "🏔️", href: "/nepal-trekking"  },
  { label: "Nepal Tours",     count: 16,  icon: "🕌", href: "/nepal-tours"     },
  { label: "Peak Climbing",   count: 10,  icon: "⛏️", href: "/peak-climbing"   },
  { label: "Helicopter Tours",count: 8,   icon: "🚁", href: "/helicopter-tours"},
  { label: "Bhutan Tours",    count: 12,  icon: "🏯", href: "/bhutan"          },
  { label: "Tibet Tours",     count: 9,   icon: "🛕", href: "/tibet"           },
];