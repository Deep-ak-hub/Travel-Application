import { useState } from "react";
import TrekCard from "./TrekCard";
import Button from "./Button";
import { bestSellerTreks } from "../config/data";
import type { Trek } from "../config/data";

// ─── Filter tabs ──────────────────────────────────────────────────────────────

type FilterTab = "All" | Trek["region"];

const TABS: FilterTab[] = [
  "All",
  "Everest",
  "Annapurna",
  "Langtang",
  "Manaslu",
  "Mustang",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function BestSellers() {
  const [active, setActive] = useState<FilterTab>("All");

  const filtered =
    active === "All"
      ? bestSellerTreks
      : bestSellerTreks.filter((t) => t.region === active);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">

      {/* ── Section header ──────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
            <span className="w-5 h-0.5 bg-secondary rounded-full" />
            Handpicked for You
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">
            Best Seller Treks
          </h2>
          <p className="mt-2 text-text-muted max-w-md">
            Our most popular routes — tried, tested, and loved by thousands of trekkers every year.
          </p>
        </div>

        <Button variant="outline" href="/nepal-trekking" className="shrink-0">
          View All Packages
        </Button>
      </div>

      {/* ── Filter tabs ─────────────────────────────────────────── */}
      <div className="flex gap-2 flex-wrap mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
              active === tab
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-transparent text-text-muted border-border hover:border-primary hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Cards grid ──────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-text-muted">
          No treks found for this region yet.
        </div>
      )}

      {/* ── Bottom CTA strip ────────────────────────────────────── */}
      <div className="mt-12 rounded-2xl bg-gradient-sunset p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <p className="text-white/80 text-sm font-medium mb-1">
            Can't find what you're looking for?
          </p>
          <h3 className="text-white font-bold text-xl">
            We'll build your perfect custom trek.
          </h3>
        </div>
        <Button
          variant="ghost"
          size="lg"
          href="/contact"
          className="!bg-white !text-primary hover:!bg-white/90 shrink-0"
        >
          Talk to an Expert
        </Button>
      </div>
    </section>
  );
}