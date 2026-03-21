// src/components/Categories.tsx

import { categories } from "../config/data";

// ─── Single category card ─────────────────────────────────────────────────────

function CategoryCard({
  icon,
  label,
  count,
  href,
}: {
  icon: string;
  label: string;
  count: number;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center justify-center gap-3 bg-secondary/20 border-border rounded-2xl px-4 py-7 text-center hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Icon bubble */}
      <span className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-2xl group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
        {icon}
      </span>

      <div>
        <p className="font-semibold text-text text-sm leading-snug group-hover:text-primary transition-colors">
          {label}
        </p>
        <p className="text-text-muted text-xs mt-0.5">
          {count} itineraries
        </p>
      </div>

      {/* Arrow that slides in on hover */}
      <span className="text-primary text-xs font-semibold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
        Explore →
      </span>
    </a>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Categories() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">

      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
          <span className="w-5 h-0.5 bg-secondary rounded-full" />
          Browse by Type
          <span className="w-5 h-0.5 bg-secondary rounded-full" />
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-text">
          What Kind of Adventure?
        </h2>
        <p className="mt-2 text-text-muted max-w-md mx-auto">
          From high-altitude expeditions to cultural day tours — find the experience that fits you.
        </p>
      </div>

      {/* ── Category grid ───────────────────────────────────────── */}
      {/*
        2 cols on mobile, 3 on md, 6 on lg — fills the row cleanly.
        minmax(0,1fr) prevents overflow on smaller screens.
      */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.href} {...cat} />
        ))}
      </div>

      {/* ── Bottom stat bar ─────────────────────────────────────── */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 divide-x divide-border border border-border rounded-2xl overflow-hidden">
        {[
          { value: "150+", label: "Total Packages" },
          { value: "3",    label: "Countries Covered" },
          { value: "24/7", label: "Customer Support" },
          { value: "100%", label: "Customisable Trips" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center py-5 px-4 text-center bg-background-light hover:bg-primary/5 transition-colors"
          >
            <span className="text-2xl font-bold text-primary leading-none mb-1">
              {item.value}
            </span>
            <span className="text-xs text-text-muted font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}