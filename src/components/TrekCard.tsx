// src/components/TrekCard.tsx

import type { Trek, Badge } from "../config/data";
import { formatPrice } from "../config/constants";

// ─── Badge color map ──────────────────────────────────────────────────────────

const badgeStyles: Record<Badge, string> = {
  "Best Price":   "bg-success/20    text-success-dark",
  "Top Seller":   "bg-primary/10    text-primary-dark",
  "Featured":     "bg-secondary/15  text-secondary-dark",
  "Group Tours":  "bg-accent/20     text-accent-dark",
  "Private Trip": "bg-primary/15    text-primary",
  "New":          "bg-secondary/20  text-secondary-dark",
};

// ─── Difficulty pill ──────────────────────────────────────────────────────────

const difficultyStyles: Record<Trek["difficulty"], string> = {
  Easy:        "bg-success/15   text-success-dark",
  Moderate:    "bg-warning/20   text-warning-dark",
  Challenging: "bg-secondary/15 text-secondary-dark",
  Strenuous:   "bg-error/15     text-error-dark",
};

// ─── Star rating display ──────────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${count} reviews`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className="w-3 h-3 text-secondary"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-text-muted text-xs ml-1">({count})</span>
    </span>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface TrekCardProps {
  trek: Trek;
  /** "portrait" = taller image, used in hero grids (default)
   *  "landscape" = wider card, used in luxury / featured rows */
  variant?: "portrait" | "landscape";
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TrekCard({ trek, variant = "portrait" }: TrekCardProps) {
  const isLandscape = variant === "landscape";

  return (
    <a
      href={`/package/${trek.slug}`}
      className={`group flex bg-background-light border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
        isLandscape ? "flex-row h-52" : "flex-col"
      }`}
    >
      {/* ── Image ─────────────────────────────────────────────── */}
      <div
        className={`relative overflow-hidden shrink-0 ${
          isLandscape ? "w-48" : "w-full aspect-[4/3]"
        }`}
      >
        <img
          src={trek.image}
          alt={trek.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge */}
        {trek.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full ${
              badgeStyles[trek.badge]
            }`}
          >
            {trek.badge}
          </span>
        )}

        {/* Luxury shimmer label */}
        {trek.isLuxury && (
          <span className="absolute bottom-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-background-dark/80 text-text-light backdrop-blur-sm">
            ✦ Luxury
          </span>
        )}
      </div>

      {/* ── Body ──────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-4 gap-2 min-w-0">

        {/* Region label */}
        <span className="text-[10px] font-semibold tracking-widest uppercase text-primary">
          {trek.region}
        </span>

        {/* Title */}
        <h3
          className={`font-bold text-text leading-snug group-hover:text-primary transition-colors line-clamp-2 ${
            isLandscape ? "text-base" : "text-[0.95rem]"
          }`}
        >
          {trek.title}
        </h3>

        {/* Meta row: days + difficulty */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1 text-xs text-text-muted">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {trek.days} days
          </span>

          <span className="text-border-dark">·</span>

          <span
            className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
              difficultyStyles[trek.difficulty]
            }`}
          >
            {trek.difficulty}
          </span>
        </div>

        {/* Reviews */}
        <Stars count={trek.reviews} />

        {/* Spacer pushes price to bottom */}
        <div className="flex-1" />

        {/* Price row */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            <span className="text-[10px] text-text-muted block leading-none mb-0.5">
              From
            </span>
            <span className="text-lg font-bold text-primary leading-none">
              {formatPrice(trek.price)}
            </span>
          </div>

          <span className="text-xs font-medium text-secondary group-hover:text-secondary-dark transition-colors flex items-center gap-1">
            View Details
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}