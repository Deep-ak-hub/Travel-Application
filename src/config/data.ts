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

// ─── Detail-level types (used only on PackageDetail page) ────────────────────

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  elevation?: string;
  duration?: string;        // e.g. "6–7 hours"
  accommodation?: string;
}

export interface TrekDetail extends Trek {
  gallery: string[];        // extra images for the gallery strip
  overview: string;         // 2–3 paragraph description
  highlights: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  groupPricing: { label: string; price: number }[];
  maxElevation: string;
  startEnd: string;         // e.g. "Kathmandu / Kathmandu"
  accommodation: string;
  meals: string;
  groupSize: string;
  bestTime: string;
  activities: string;
}

// ─── Full detail data for EBC ─────────────────────────────────────────────────

export const trekDetails: Record<string, TrekDetail> = {
  "everest-base-camp-trek": {
    id: 1,
    slug: "everest-base-camp-trek",
    title: "Everest Base Camp Trek",
    region: "Everest",
    days: 16,
    price: 1525,
    reviews: 343,
    badge: "Group Tours",
    difficulty: "Strenuous",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80",
    ],
    overview: `The Everest Base Camp Trek is the world's most iconic Himalayan journey, leading to the foot of Mount Everest through ancient Sherpa villages, high-altitude monasteries, and the dramatic Khumbu Valley. Beginning with a scenic flight to Lukla, the trail ascends through Namche Bazaar, Tengboche, and Dingboche before reaching Everest Base Camp at 5,364 metres.\n\nThe trek culminates at Kala Patthar (5,545 m) — the highest point on the route — where you'll stand face-to-face with Everest, Lhotse, Nuptse, and the sprawling Khumbu Glacier at sunrise. Two built-in acclimatisation days at Namche and Dingboche ensure your body adjusts safely to the altitude.\n\nRated moderate to strenuous, this 16-day itinerary is suitable for fit trekkers with good endurance, even without prior high-altitude experience. Our expert guides, capped group sizes, and 24/7 support make this a safe, memorable adventure.`,
    highlights: [
      "Stand at Everest Base Camp (5,364 m) — the legendary South Col of the world's highest mountain",
      "Sunrise at Kala Patthar (5,545 m) with panoramic views of Everest, Lhotse, and Nuptse",
      "Acclimatisation hike to Nangkartshang Hill (5,083 m) overlooking Makalu and Island Peak",
      "Visit Tengboche Monastery — the largest and most revered monastery in the Khumbu",
      "Walk through Namche Bazaar, the vibrant Sherpa capital of the Everest region",
      "Cross suspension bridges over the Dudh Koshi river gorge",
      "Spot wildlife including Himalayan tahr, snow leopard, and colourful pheasants",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Arrive at Tribhuvan International Airport and transfer to your hotel. Evening welcome briefing with your guide.", elevation: "1,400 m", accommodation: "Hotel in Kathmandu" },
      { day: 2, title: "Kathmandu — Trek preparation", description: "Permit collection, gear check, and a guided sightseeing tour of Swayambhunath and Boudhanath. Flight briefing in the evening.", elevation: "1,400 m", accommodation: "Hotel in Kathmandu" },
      { day: 3, title: "Fly Kathmandu → Lukla, Trek to Phakding", description: "Early morning 35-minute scenic flight to Lukla (2,840 m). Begin the trail descending to Phakding along the Dudh Koshi river.", elevation: "2,651 m", duration: "3–4 hours", accommodation: "Teahouse in Phakding" },
      { day: 4, title: "Phakding → Namche Bazaar", description: "Cross several thrilling suspension bridges before the final steep climb to Namche Bazaar, the trading hub of the Khumbu region.", elevation: "3,440 m", duration: "5–6 hours", accommodation: "Teahouse in Namche Bazaar" },
      { day: 5, title: "Acclimatisation day — Namche Bazaar", description: "Rest and acclimatise. Optional hike to Everest View Hotel (3,880 m) for first views of Everest, Ama Dablam, and Lhotse.", elevation: "3,880 m", duration: "3–4 hours optional", accommodation: "Teahouse in Namche Bazaar" },
      { day: 6, title: "Namche → Tengboche", description: "Trail through rhododendron and pine forests with stunning views of Everest, Nuptse, and Ama Dablam. Visit Tengboche Monastery.", elevation: "3,870 m", duration: "5–6 hours", accommodation: "Teahouse in Tengboche" },
      { day: 7, title: "Tengboche → Dingboche", description: "Descend to Pangboche village before crossing the lateral moraine to Dingboche in the Imja Valley.", elevation: "4,410 m", duration: "5–6 hours", accommodation: "Teahouse in Dingboche" },
      { day: 8, title: "Acclimatisation day — Dingboche", description: "Hike to Nangkartshang Hill (5,083 m) for spectacular views of Makalu, Island Peak, and the surrounding glaciers.", elevation: "5,083 m", duration: "4–5 hours optional", accommodation: "Teahouse in Dingboche" },
      { day: 9, title: "Dingboche → Lobuche", description: "Trek along the edge of the Khumbu Glacier moraine passing the Thukla memorial chortens.", elevation: "4,940 m", duration: "4–5 hours", accommodation: "Teahouse in Lobuche" },
      { day: 10, title: "Lobuche → Gorak Shep → Everest Base Camp", description: "Morning trek to Gorak Shep, then continue to Everest Base Camp (5,364 m). Return to Gorak Shep for the night.", elevation: "5,364 m", duration: "7–8 hours", accommodation: "Teahouse in Gorak Shep" },
      { day: 11, title: "Gorak Shep → Kala Patthar → Pheriche", description: "Pre-dawn hike to Kala Patthar (5,545 m) for sunrise views of Everest. Descend all the way to Pheriche.", elevation: "5,545 m", duration: "7–8 hours", accommodation: "Teahouse in Pheriche" },
      { day: 12, title: "Pheriche → Namche Bazaar", description: "Long descent through Tengboche, retracing the route through rhododendron forests back to Namche.", elevation: "3,440 m", duration: "6–7 hours", accommodation: "Teahouse in Namche Bazaar" },
      { day: 13, title: "Namche → Lukla", description: "Final day of trekking back to Lukla through Phakding. Celebration dinner with guides and porters.", elevation: "2,840 m", duration: "6–7 hours", accommodation: "Teahouse in Lukla" },
      { day: 14, title: "Fly Lukla → Kathmandu", description: "Morning flight back to Kathmandu. Afternoon free for shopping or sightseeing. Farewell dinner.", elevation: "1,400 m", accommodation: "Hotel in Kathmandu" },
      { day: 15, title: "Buffer day — Kathmandu", description: "Reserved for Lukla flight delays due to weather. Free day if flight operated on schedule.", elevation: "1,400 m", accommodation: "Hotel in Kathmandu" },
      { day: 16, title: "Departure", description: "Transfer to Tribhuvan International Airport for your onward flight. Safe travels!", elevation: "1,400 m" },
    ],
    includes: [
      "Airport transfers (arrival & departure)",
      "3 nights hotel in Kathmandu (3-star, BB basis)",
      "Domestic flights Kathmandu–Lukla–Kathmandu",
      "All teahouse accommodation during the trek",
      "All meals during the trek (breakfast, lunch, dinner)",
      "Experienced government-licensed English-speaking trek guide",
      "Porter service (1 porter per 2 trekkers, max 15 kg)",
      "Sagarmatha National Park Entry Permit",
      "Khumbu Pasang Lhamu Rural Municipality Permit",
      "First aid kit and pulse oximeter",
      "All government taxes and service charges",
    ],
    excludes: [
      "International airfare to/from Kathmandu",
      "Travel and medical insurance (mandatory)",
      "Personal trekking gear and equipment",
      "Drinks, snacks, and personal items",
      "Tips for guides and porters",
      "Emergency evacuation costs (covered by insurance)",
      "Optional activities (helicopter rescue insurance)",
    ],
    groupPricing: [
      { label: "1 person",     price: 1595 },
      { label: "2–6 people",   price: 1525 },
      { label: "7–10 people",  price: 1450 },
      { label: "11–15 people", price: 1350 },
    ],
    maxElevation: "5,545 m (Kala Patthar)",
    startEnd: "Kathmandu / Kathmandu",
    accommodation: "Hotel & Teahouses",
    meals: "Breakfast, Lunch & Dinner",
    groupSize: "Min. 1 person",
    bestTime: "Mar–May & Sep–Dec",
    activities: "Trekking",
  },

  "annapurna-base-camp-trek": {
    id: 2,
    slug: "annapurna-base-camp-trek",
    title: "Annapurna Base Camp Trek",
    region: "Annapurna",
    days: 14,
    price: 1090,
    reviews: 70,
    badge: "Featured",
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=800&q=80",
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    ],
    overview: `The Annapurna Base Camp Trek takes you deep into the Annapurna Sanctuary — a natural amphitheatre ringed by towering Himalayan giants including Annapurna I (8,091 m), Machapuchare (6,993 m), and Hiunchuli. The trail winds through subtropical forests, traditional Gurung villages, and alpine meadows before opening onto a breathtaking glacial cirque.\n\nStarting from Pokhara, the route ascends through Ghandruk, Chhomrong, and the bamboo forests of Sinuwa before reaching Annapurna Base Camp at 4,130 metres. The surrounding walls of Himalayan peaks create an unmatched sense of scale and solitude.\n\nAt 14 days, this trek strikes an ideal balance — challenging enough to be rewarding, accessible enough for first-time high-altitude trekkers with a reasonable fitness level.`,
    highlights: [
      "Reach Annapurna Base Camp (4,130 m) encircled by a ring of 7,000–8,000 m peaks",
      "Iconic views of Machapuchare (Fishtail) throughout the trek",
      "Sunrise over the Annapurna massif from base camp",
      "Walk through Gurung villages and traditional rhododendron forests",
      "Natural hot springs at Jhinu Danda for post-trek relaxation",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Arrive and transfer to hotel. Welcome briefing.", elevation: "1,400 m", accommodation: "Hotel in Kathmandu" },
      { day: 2, title: "Drive/Fly to Pokhara", description: "Transfer to Pokhara by tourist bus or 25-min flight. Evening lakeside stroll.", elevation: "820 m", accommodation: "Hotel in Pokhara" },
      { day: 3, title: "Pokhara → Ghandruk", description: "Drive to Nayapul, trek to Ghandruk through terraced fields and forests.", elevation: "1,940 m", duration: "5–6 hours", accommodation: "Teahouse in Ghandruk" },
      { day: 4, title: "Ghandruk → Chhomrong", description: "Descend to Kimrong Khola then climb steeply to Chhomrong — gateway to the sanctuary.", elevation: "2,170 m", duration: "5 hours", accommodation: "Teahouse in Chhomrong" },
      { day: 5, title: "Chhomrong → Dovan", description: "Enter the Annapurna Sanctuary through bamboo and rhododendron forests.", elevation: "2,600 m", duration: "5–6 hours", accommodation: "Teahouse in Dovan" },
      { day: 6, title: "Dovan → Machhapuchhre Base Camp", description: "Climb above the treeline with Machapuchare towering ahead.", elevation: "3,700 m", duration: "5 hours", accommodation: "Teahouse at MBC" },
      { day: 7, title: "MBC → Annapurna Base Camp → MBC", description: "Early morning push to Annapurna Base Camp (4,130 m). Surrounded by the full Annapurna massif.", elevation: "4,130 m", duration: "4 hours", accommodation: "Teahouse at MBC" },
      { day: 8, title: "MBC → Bamboo", description: "Begin descent through the sanctuary and forests.", elevation: "2,310 m", duration: "5–6 hours", accommodation: "Teahouse at Bamboo" },
      { day: 9, title: "Bamboo → Jhinu Danda", description: "Continue descent, stopping for a soak in the famous natural hot springs.", elevation: "1,780 m", duration: "4–5 hours", accommodation: "Teahouse at Jhinu" },
      { day: 10, title: "Jhinu → Pokhara", description: "Trek to Nayapul then drive back to Pokhara. Rest and celebrate.", elevation: "820 m", duration: "4 hours", accommodation: "Hotel in Pokhara" },
      { day: 11, title: "Pokhara — free day", description: "Optional boat trip on Phewa Lake or paragliding. Evening sunset views.", elevation: "820 m", accommodation: "Hotel in Pokhara" },
      { day: 12, title: "Fly/Drive to Kathmandu", description: "Return to Kathmandu. Afternoon free for souvenir shopping.", elevation: "1,400 m", accommodation: "Hotel in Kathmandu" },
      { day: 13, title: "Buffer day — Kathmandu", description: "Free day or reserved for any travel delays.", elevation: "1,400 m", accommodation: "Hotel in Kathmandu" },
      { day: 14, title: "Departure", description: "Transfer to airport for your onward journey.", elevation: "1,400 m" },
    ],
    includes: [
      "Airport transfers",
      "2 nights hotel in Kathmandu & 3 nights in Pokhara",
      "All teahouse accommodation during trek",
      "All meals during the trek (breakfast, lunch, dinner)",
      "English-speaking licensed trek guide",
      "Porter service (1 per 2 trekkers)",
      "ACAP permit and TIMS card",
      "First aid kit",
      "All government taxes",
    ],
    excludes: [
      "International airfare",
      "Travel insurance (mandatory)",
      "Personal gear",
      "Drinks and personal expenses",
      "Tips for guide and porter",
    ],
    groupPricing: [
      { label: "1 person",   price: 1190 },
      { label: "2–5 people", price: 1090 },
      { label: "6–9 people", price: 1020 },
      { label: "10+ people", price: 950  },
    ],
    maxElevation: "4,130 m (Annapurna Base Camp)",
    startEnd: "Kathmandu / Kathmandu",
    accommodation: "Hotel & Teahouses",
    meals: "Breakfast, Lunch & Dinner",
    groupSize: "Min. 1 person",
    bestTime: "Oct–Nov & Mar–Apr",
    activities: "Trekking",
  },
};

// ─── All treks combined — used by listing pages ───────────────────────────────

export const allTreks: Trek[] = [
  // Everest
  {
    id: 101, slug: "everest-base-camp-trek", title: "Everest Base Camp Trek",
    region: "Everest", days: 16, price: 1525, reviews: 343, badge: "Group Tours",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    difficulty: "Strenuous",
  },
  {
    id: 102, slug: "everest-base-camp-luxury-trek", title: "Everest Base Camp Luxury Trek",
    region: "Everest", days: 16, price: 2625, reviews: 19, badge: "Private Trip",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&q=80",
    difficulty: "Strenuous", isLuxury: true,
  },
  {
    id: 103, slug: "everest-chola-pass-trek", title: "Everest Chola Pass Trek",
    region: "Everest", days: 19, price: 1750, reviews: 25, badge: "Best Price",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    difficulty: "Strenuous",
  },
  // Annapurna
  {
    id: 201, slug: "annapurna-base-camp-trek", title: "Annapurna Base Camp Trek",
    region: "Annapurna", days: 14, price: 1090, reviews: 70, badge: "Featured",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    difficulty: "Challenging",
  },
  {
    id: 202, slug: "annapurna-circuit-trek", title: "Annapurna Circuit Trek",
    region: "Annapurna", days: 14, price: 1250, reviews: 78, badge: "Top Seller",
    image: "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=600&q=80",
    difficulty: "Challenging",
  },
  {
    id: 203, slug: "annapurna-panorama-trek", title: "Annapurna Panorama Trek",
    region: "Annapurna", days: 8, price: 710, reviews: 24, badge: "Group Tours",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
    difficulty: "Moderate",
  },
  {
    id: 204, slug: "annapurna-luxury-trek", title: "Annapurna Luxury Trek",
    region: "Annapurna", days: 9, price: 1750, reviews: 5, badge: "Featured",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=600&q=80",
    difficulty: "Moderate", isLuxury: true,
  },
  // Langtang
  {
    id: 301, slug: "langtang-valley-trek", title: "Langtang Valley Trek",
    region: "Langtang", days: 10, price: 750, reviews: 34, badge: "Best Price",
    image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=600&q=80",
    difficulty: "Moderate",
  },
  // Manaslu
  {
    id: 401, slug: "manaslu-circuit-trek", title: "Manaslu Circuit Trek",
    region: "Manaslu", days: 14, price: 1380, reviews: 37, badge: "Group Tours",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
    difficulty: "Strenuous",
  },
  // Mustang
  {
    id: 501, slug: "upper-mustang-trek", title: "Upper Mustang Trek",
    region: "Mustang", days: 17, price: 1950, reviews: 22, badge: "Featured",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80",
    difficulty: "Challenging",
  },
  // Bhutan
  {
    id: 601, slug: "bhutan-highlights-tour", title: "Bhutan Highlights Tour",
    region: "Bhutan", days: 6, price: 1450, reviews: 12, badge: "Top Seller",
    image: "https://images.unsplash.com/photo-1572367166643-5c70b4f44d2e?w=600&q=80",
    difficulty: "Easy",
  },
  {
    id: 602, slug: "glimpse-of-bhutan-tour", title: "Glimpse of Bhutan Tour",
    region: "Bhutan", days: 5, price: 1200, reviews: 7, badge: "New",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    difficulty: "Easy",
  },
  // Tibet
  {
    id: 701, slug: "lhasa-ebc-tour", title: "Lhasa – Everest Base Camp Tour",
    region: "Tibet", days: 12, price: 2100, reviews: 15, badge: "Featured",
    image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80",
    difficulty: "Moderate",
  },
  {
    id: 702, slug: "glimpse-of-tibet-tour", title: "Glimpse of Tibet Tour",
    region: "Tibet", days: 5, price: 980, reviews: 9, badge: "New",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80",
    difficulty: "Easy",
  },
];

// ─── Peak climbing data ───────────────────────────────────────────────────────

export interface Peak {
  id: number;
  slug: string;
  title: string;
  elevation: string;
  days: number;
  price: number;
  difficulty: "Moderate" | "Challenging" | "Strenuous";
  image: string;
  reviews: number;
  badge?: Badge;
}

export const peaks: Peak[] = [
  {
    id: 1, slug: "island-peak-climbing", title: "Island Peak Climbing",
    elevation: "6,189 m", days: 18, price: 1850, difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    reviews: 28, badge: "Top Seller",
  },
  {
    id: 2, slug: "mera-peak-climbing", title: "Mera Peak Climbing",
    elevation: "6,476 m", days: 20, price: 2100, difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    reviews: 19, badge: "Featured",
  },
  {
    id: 3, slug: "lobuche-peak-climbing", title: "Lobuche Peak Climbing",
    elevation: "6,119 m", days: 16, price: 1950, difficulty: "Strenuous",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&q=80",
    reviews: 12,
  },
  {
    id: 4, slug: "pisang-peak-climbing", title: "Pisang Peak Climbing",
    elevation: "6,091 m", days: 17, price: 1700, difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=600&q=80",
    reviews: 8, badge: "New",
  },
];