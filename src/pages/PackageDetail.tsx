// src/pages/PackageDetail.tsx

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { trekDetails } from "../config/data";
import { formatPrice } from "../config/constants";
import Button from "../components/Button";

// ─── Quick-info pill ──────────────────────────────────────────────────────────

function InfoPill({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 px-4 py-3 bg-background rounded-xl border border-border text-center min-w-25 shrink-0">
      <span className="text-xl">{icon}</span>
      <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">{label}</span>
      <span className="text-xs font-bold text-text leading-snug">{value}</span>
    </div>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-text mb-5 flex items-center gap-3">
      <span className="w-1 h-6 rounded-full bg-gradient-sunset inline-block shrink-0" />
      {children}
    </h2>
  );
}

// ─── Tab types ────────────────────────────────────────────────────────────────

type Tab = "overview" | "itinerary" | "includes" | "pricing";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview",  label: "Overview"  },
  { id: "itinerary", label: "Itinerary" },
  { id: "includes",  label: "Includes"  },
  { id: "pricing",   label: "Pricing"   },
];

// ─── Gallery ──────────────────────────────────────────────────────────────────

function Gallery({ main, gallery, title }: { main: string; gallery: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const all = [main, ...gallery];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-border">
        <img
          src={all[active]}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <span className="absolute bottom-4 right-4 bg-black/50 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
          {active + 1} / {all.length}
        </span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {all.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
              i === active ? "border-primary shadow-md" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Itinerary accordion ──────────────────────────────────────────────────────

type ItineraryDay = NonNullable<(typeof trekDetails)[string]["itinerary"]>[number];

function ItineraryAccordion({ days }: { days: ItineraryDay[] }) {
  const [openDay, setOpenDay] = useState<number>(1);

  return (
    <div className="flex flex-col gap-2">
      {days.map((day) => {
        const isOpen = openDay === day.day;
        return (
          <div
            key={day.day}
            className={`border rounded-xl overflow-hidden transition-all duration-200 ${
              isOpen ? "border-primary/40 shadow-sm" : "border-border hover:border-border-dark"
            }`}
          >
            <button
              onClick={() => setOpenDay(isOpen ? -1 : day.day)}
              className="w-full flex items-center gap-4 px-5 py-4 bg-background-light hover:bg-background transition-colors text-left"
            >
              <span className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                isOpen ? "bg-primary text-primary-foreground" : "bg-border text-text-muted"
              }`}>
                {String(day.day).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-sm transition-colors ${isOpen ? "text-primary" : "text-text"}`}>
                  {day.title}
                </p>
                {!isOpen && day.elevation && (
                  <p className="text-xs text-text-muted mt-0.5">
                    {day.elevation}{day.duration ? ` · ${day.duration}` : ""}
                  </p>
                )}
              </div>
              <svg
                className={`shrink-0 w-4 h-4 text-text-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-primary!" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="px-5 pb-5 pt-1 border-t border-border">
                <p className="text-sm text-text-muted leading-relaxed mb-3">{day.description}</p>
                <div className="flex flex-wrap gap-2">
                  {day.elevation && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      🏔️ {day.elevation}
                    </span>
                  )}
                  {day.duration && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      ⏱ {day.duration}
                    </span>
                  )}
                  {day.accommodation && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted bg-border px-3 py-1 rounded-full">
                      🏠 {day.accommodation}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Booking sidebar ──────────────────────────────────────────────────────────

function BookingSidebar({
  price,
  groupPricing,
  days,
}: {
  price: number;
  groupPricing: { label: string; price: number }[];
  days: number;
}) {
  return (
    <div className="sticky top-24 flex flex-col gap-4">
      {/* Price + CTA */}
      <div className="bg-background-light border border-border rounded-2xl p-6">
        <p className="text-xs text-text-muted mb-1">All-inclusive price from</p>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-bold text-primary">{formatPrice(price)}</span>
          <span className="text-text-muted text-sm">/ person</span>
        </div>
        <p className="text-xs text-text-muted mb-5">{days - 1} nights · {days} days</p>
        <div className="flex flex-col gap-2.5">
          <Button variant="secondary" fullWidth size="lg" href="/contact">
            Book Now
          </Button>
          <Button variant="outline" fullWidth href="https://wa.me/9779851058678">
            💬 WhatsApp Us
          </Button>
        </div>
        <p className="text-[11px] text-text-muted text-center mt-4">
          Free cancellation · No hidden fees
        </p>
      </div>

      {/* Group pricing */}
      <div className="bg-background-light border border-border rounded-2xl p-5">
        <p className="text-xs font-bold text-text uppercase tracking-widest mb-4">
          Group Pricing
        </p>
        <div className="flex flex-col divide-y divide-border">
          {groupPricing.map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2.5">
              <span className="text-sm text-text-muted">{row.label}</span>
              <span className="text-sm font-bold text-primary">{formatPrice(row.price)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="bg-background-light border border-border rounded-2xl p-5 flex flex-col gap-3">
        {[
          { icon: "🛡️", text: "Risk-free cancellation policy" },
          { icon: "✅", text: "Verified local guides only" },
          { icon: "🏆", text: "TripAdvisor Certificate of Excellence" },
          { icon: "📞", text: "24/7 emergency support" },
        ].map((b) => (
          <div key={b.text} className="flex items-center gap-3">
            <span className="text-base shrink-0">{b.icon}</span>
            <span className="text-xs text-text-muted">{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function PackageDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const trek = slug ? trekDetails[slug] : null;

  if (!trek) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-6xl font-bold text-border-dark">404</p>
        <h1 className="text-xl font-bold text-text">Package not found</h1>
        <p className="text-text-muted max-w-sm">
          This trek doesn't exist yet. Check out our other packages.
        </p>
        <Button variant="primary" href="/nepal-trekking">Browse All Treks</Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">

      {/* Breadcrumb */}
      <div className="bg-background-light border-b border-border px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-text-muted flex-wrap">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/nepal-trekking" className="hover:text-primary transition-colors">Nepal Trekking</Link>
          <span>/</span>
          <span className="text-text font-medium truncate">{trek.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* ── Main column ───────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Title */}
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  {trek.region} Region
                </span>
                {trek.badge && (
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-secondary/15 text-secondary-dark">
                    {trek.badge}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-text leading-tight mb-3">
                {trek.title}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm font-bold text-text ml-1">5.0</span>
                </div>
                <span className="text-text-muted text-sm">{trek.reviews} reviews</span>
                <span className="text-border-dark">·</span>
                <span className="text-sm font-medium text-text">{trek.days} days</span>
                <span className="text-border-dark">·</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  trek.difficulty === "Strenuous"  ? "bg-error/15 text-error-dark" :
                  trek.difficulty === "Challenging"? "bg-secondary/15 text-secondary-dark" :
                  trek.difficulty === "Moderate"   ? "bg-warning/20 text-warning-dark" :
                  "bg-success/15 text-success-dark"
                }`}>
                  {trek.difficulty}
                </span>
              </div>
            </div>

            {/* Gallery */}
            <Gallery main={trek.image} gallery={trek.gallery} title={trek.title} />

            {/* Quick info strip */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              <InfoPill icon="📅" label="Duration"      value={`${trek.days} Days`}   />
              <InfoPill icon="🏔️" label="Max Elevation" value={trek.maxElevation}      />
              <InfoPill icon="🚩" label="Start / End"   value={trek.startEnd}          />
              <InfoPill icon="🍽️" label="Meals"         value={trek.meals}             />
              <InfoPill icon="🏠" label="Stay"          value={trek.accommodation}     />
              <InfoPill icon="🗓️" label="Best Time"     value={trek.bestTime}          />
              <InfoPill icon="👥" label="Group Size"    value={trek.groupSize}         />
            </div>

            {/* Tabs */}
            <div className="border-b border-border">
              <div className="flex">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3 text-sm font-semibold border-b-2 -mb-px transition-all duration-200 ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-text-muted hover:text-text"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div>
              {activeTab === "overview" && (
                <div className="flex flex-col gap-8">
                  <div>
                    <SectionHeading>Trip Overview</SectionHeading>
                    <div className="flex flex-col gap-4">
                      {trek.overview.split("\n\n").map((para, i) => (
                        <p key={i} className="text-text-muted leading-relaxed text-[0.95rem]">{para}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <SectionHeading>Key Highlights</SectionHeading>
                    <ul className="flex flex-col gap-3">
                      {trek.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-sm text-text-muted leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "itinerary" && (
                <div>
                  <SectionHeading>Day-by-Day Itinerary</SectionHeading>
                  <ItineraryAccordion days={trek.itinerary} />
                </div>
              )}

              {activeTab === "includes" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <SectionHeading>What's Included</SectionHeading>
                    <ul className="flex flex-col gap-3">
                      {trek.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-success/15 flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-success-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-sm text-text-muted leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <SectionHeading>Not Included</SectionHeading>
                    <ul className="flex flex-col gap-3">
                      {trek.excludes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-error/15 flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-error-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                          <span className="text-sm text-text-muted leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "pricing" && (
                <div>
                  <SectionHeading>Group Pricing</SectionHeading>
                  <div className="rounded-2xl border border-border overflow-hidden">
                    <div className="grid grid-cols-2 bg-background-dark px-5 py-3">
                      <span className="text-xs font-bold text-text-light uppercase tracking-widest">Group Size</span>
                      <span className="text-xs font-bold text-text-light uppercase tracking-widest text-right">Price / Person</span>
                    </div>
                    {trek.groupPricing.map((row, i) => (
                      <div
                        key={row.label}
                        className={`grid grid-cols-2 px-5 py-4 items-center hover:bg-primary/5 transition-colors ${
                          i !== trek.groupPricing.length - 1 ? "border-b border-border" : ""
                        }`}
                      >
                        <span className="text-sm text-text font-medium">{row.label}</span>
                        <span className="text-right text-lg font-bold text-primary">{formatPrice(row.price)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-5 bg-secondary/10 border border-secondary/20 rounded-xl">
                    <p className="text-sm font-semibold text-secondary-dark mb-1">💡 Best value for groups</p>
                    <p className="text-sm text-text-muted">
                      The more you trek together, the less you pay. All prices are per person and fully inclusive — no hidden costs.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Sidebar ───────────────────────────────────────── */}
          <div className="lg:col-span-1">
            <BookingSidebar
              price={trek.price}
              groupPricing={trek.groupPricing}
              days={trek.days}
            />
          </div>
        </div>
      </div>
    </div>
  );
}