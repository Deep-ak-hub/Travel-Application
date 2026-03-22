import { useState } from "react";
import Button from "./Button";
import { stats } from "../config/data";

// ─── What sets us apart ───────────────────────────────────────────────────────

const HIGHLIGHTS = [
  {
    icon: "🧭",
    title: "Founded by expert guides",
    desc: "Both owners are seasoned mountaineers who know every trail and understand every traveler's need.",
  },
  {
    icon: "🔁",
    title: "52% returning clients",
    desc: "Trusted since 2009 — more than half our clients return or refer friends and family.",
  },
  {
    icon: "✏️",
    title: "Tailor-made itineraries",
    desc: "Every route is crafted with care, flexibility, and close attention to your goals and fitness level.",
  },
  {
    icon: "🛡️",
    title: "Proven safety record",
    desc: "Responsive, hands-on support at every step — from booking to summit and back to Kathmandu.",
  },
];

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-background-light border border-border rounded-2xl p-5 text-center gap-1 hover:border-primary/40 hover:shadow-md transition-all duration-200">
      <span className="text-3xl font-bold text-primary leading-none">{value}</span>
      <span className="text-xs text-text-muted font-medium leading-snug">{label}</span>
    </div>
  );
}

// ─── Highlight row ────────────────────────────────────────────────────────────

function Highlight({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex items-start gap-4">
      {/* Icon bubble */}
      <span className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg">
        {icon}
      </span>
      <div>
        <p className="font-semibold text-text text-sm leading-snug mb-0.5">{title}</p>
        <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-secondary/10 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── Two-column layout ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: text content ──────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-secondary mb-4">
              <span className="w-5 h-0.5 bg-secondary rounded-full" />
              About Himalayan Trails
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-text-muted leading-tight mb-5">
              Expand your Horizons,{" "}
              <span className="text-primary">Conquer new heights</span>, and
              Explore with Us.
            </h2>

            {/* Body copy with read-more toggle */}
            <div className="space-y-4 text-text-muted text-[0.95rem] leading-relaxed">
              <p>
                Over the past decades, Nepal has drawn trekkers with its high
                peaks, vibrant cultures, and countless mountain adventures.
                Explorers from around the world have journeyed here since the
                1950s, and the call of the Himalayas has never faded.
              </p>
              <p>
                In 2009, two brothers started <strong className="text-text font-semibold">Himalayan Trails</strong> out of their
                love for the mountains — to share the breathtaking landscapes
                and deep traditions of their homeland. Their local knowledge and
                community ties now connect visitors with Nepal's most remarkable
                places.
              </p>

              {/* Collapsible section */}
              <div
                className={`overflow-hidden transition-all duration-500 space-y-4 ${
                  expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={!expanded}
              >
                <p>
                  As one of the top travel agencies in Nepal, we've turned
                  mountain dreams into reality for thousands of adventurers —
                  each returning home with stories that last lifetimes. We run
                  operations from Kathmandu's bustling streets, offering the
                  best travel agency services year-round with a customer service
                  team ready 24/7.
                </p>
                <p>
                  Himalayan Trails holds membership in the Trekking Agencies'
                  Association of Nepal (TAAN). Years of dedication have
                  established us as a leading, honest, and reliable international
                  travel agency in Nepal — crafting journeys that blend safety,
                  local culture, and remarkable mountain experiences.
                </p>
              </div>
            </div>

            {/* Read more toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-sm font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-1.5"
            >
              {expanded ? "Read less" : "Read more"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="primary" href="/about">
                Meet Our Team
              </Button>
              <Button variant="outline" href="/contact">
                Plan My Trek
              </Button>
            </div>

            {/* TripAdvisor badge */}
            <div className="mt-8 inline-flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3">
              <div className="w-9 h-9 rounded-lg bg-[#34e0a1]/15 flex items-center justify-center text-xl">
                ✦
              </div>
              <div>
                <p className="text-xs font-bold text-text leading-none mb-0.5">
                  Winner 2012 – 2025
                </p>
                <p className="text-[10px] text-text-muted leading-none">
                  TripAdvisor Certificate of Excellence
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: stats + highlights ────────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s) => (
                <StatCard key={s.label} value={s.value} label={s.label} />
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <span className="flex-1 h-px bg-border" />
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                What sets us apart
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            {/* Highlights list */}
            <ul className="flex flex-col gap-6">
              {HIGHLIGHTS.map((h) => (
                <Highlight key={h.title} {...h} />
              ))}
            </ul>
          </div>
        </div>

        {/* ── Association logos strip ─────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-border">
          <p className="text-center text-xs font-semibold text-text-muted uppercase tracking-widest mb-7">
            Memberships &amp; Associations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {["Nepal Government", "Nepal Tourism Board", "TAAN", "NMA", "KEEP"].map(
              (name) => (
                <div
                  key={name}
                  className="px-5 py-2.5 rounded-xl border border-border bg-background-light text-text-muted text-xs font-semibold hover:border-primary/40 hover:text-primary transition-all duration-200"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}