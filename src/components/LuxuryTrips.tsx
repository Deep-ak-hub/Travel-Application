import TrekCard from "./TrekCard";
import Button from "./Button";
import { luxuryTreks } from "../config/data";

// ─── Feature pill ─────────────────────────────────────────────────────────────

function FeaturePill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-light/80 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
      <span className="w-1 h-1 rounded-full bg-accent-dark" />
      {text}
    </span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function LuxuryTrips() {
  return (
    <section className="py-16 sm:py-20 bg-background-dark relative overflow-hidden">

      {/* ── Subtle texture overlay ───────────────────────────────── */}
      {/*
        A large blurred circle adds depth to the dark background without
        using a real image. Pure CSS, zero cost.
      */}
      <div className="absolute top-0 right-0 w-150 h-150 rounded-full bg-primary blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full bg-primary-dark/80 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── Header row ──────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
              <span className="w-5 h-0.5 bg-secondary rounded-full" />
              Travellers' Choice
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-light leading-tight">
              Luxury Trips
            </h2>
            <p className="mt-2 text-text-light max-w-md">
              Premium lodges, private guides, and flawless logistics — for those
              who want the Himalayas without compromise.
            </p>
          </div>

          <Button
            variant="outline"
            href="/luxury-treks"
            className="!border-white/30 !text-text-light hover:!bg-white/10 shrink-0"
          >
            See All Luxury Packages
          </Button>
        </div>

        {/* ── Feature pills ────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "Luxury lodges & camps",
            "Private guides",
            "Helicopter options",
            "Gourmet dining",
            "Fully customisable",
          ].map((f) => (
            <FeaturePill key={f} text={f}/>
          ))}
        </div>

        {/* ── Cards ────────────────────────────────────────────────── */}
        {/*
          Landscape variant on md+ so the cards sit wider and feel premium.
          On mobile portrait stacks naturally.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {luxuryTreks.map((trek) => (
            <TrekCard key={trek.id} trek={trek} variant="portrait" />
          ))}
        </div>

        {/* ── Bottom CTA ───────────────────────────────────────────── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10">
          <div className="text-center sm:text-left">
            <p className="text-text-light/50 text-sm mb-1">
              Looking for a fully bespoke expedition?
            </p>
            <p className="text-text-light font-bold text-lg">
              We design private luxury treks from scratch.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
            >
              Request a Custom Quote
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="/luxury-treks"
              className="text-text-light! border! border-white/25! hover:bg-white/10!"
            >
              Browse All
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}