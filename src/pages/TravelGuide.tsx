import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";

const GUIDE_SECTIONS = [
  {
    icon: "🛂",
    title: "Nepal Visa",
    description: "Most nationalities can get a visa on arrival at Tribhuvan International Airport. Fees range from USD 30 (15 days) to USD 125 (90 days).",
    href: "#visa",
  },
  {
    icon: "📋",
    title: "Permits Required",
    description: "Trekking in Nepal requires permits depending on the region — TIMS card, ACAP, Sagarmatha National Park, and more. We arrange all permits.",
    href: "#permits",
  },
  {
    icon: "🗓️",
    title: "Best Trekking Season",
    description: "Spring (March–May) and Autumn (Sept–Nov) offer the best conditions. Winter is possible on lower routes; monsoon season is generally avoided.",
    href: "#season",
  },
  {
    icon: "🩺",
    title: "Health & Altitude",
    description: "Acclimatisation is essential above 3,000 m. Know the symptoms of AMS, HACE, and HAPE. Carry acetazolamide if advised by your doctor.",
    href: "#health",
  },
  {
    icon: "🧳",
    title: "Equipment Checklist",
    description: "From base layers to trekking poles — our comprehensive gear checklist ensures you're prepared without overpacking.",
    href: "#equipment",
  },
  {
    icon: "✈️",
    title: "Flights & Getting Here",
    description: "Kathmandu is served by major Asian hubs. Recommended airlines, transit tips, and luggage advice for Nepal-bound trekkers.",
    href: "#flights",
  },
  {
    icon: "🛡️",
    title: "Travel Insurance",
    description: "Mandatory for all our trips. Must cover high-altitude trekking and emergency helicopter evacuation. We recommend verified providers.",
    href: "#insurance",
  },
  {
    icon: "💰",
    title: "Budget & Money",
    description: "Nepal uses Nepalese Rupees (NPR). ATMs are available in Kathmandu and Pokhara. Carry cash on the trail — cards aren't accepted in teahouses.",
    href: "#money",
  },
];

export default function TravelGuide() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1400&q=80"
        eyebrow="Resources"
        title="Nepal Travel Guide"
        subtitle="Everything you need to plan a safe, rewarding Himalayan adventure — from visas to gear lists."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GUIDE_SECTIONS.map((s) => (
            <a key={s.title} href={s.href}
              className="group flex flex-col gap-4 p-6 bg-background-light border border-border rounded-2xl hover:border-primary/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors">
                {s.icon}
              </span>
              <div>
                <h3 className="font-bold text-text mb-1.5 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">{s.description}</p>
              </div>
              <span className="text-xs font-semibold text-primary mt-auto flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Read more →
              </span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-sunset rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Our team is available 24/7 to answer any pre-trip questions — from gear to permits to altitude safety.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors text-sm">
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}