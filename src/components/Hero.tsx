import { useState } from "react";
import Button from "./Button";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SearchState {
  destination: string;
  duration: string;
  difficulty: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85",
    headline: "Local Experts in\nHimalayan Trekking",
    sub: "Explore the roof of the world with a team that has guided with care for over 15 years.",
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=85",
    headline: "Annapurna.\nUnforgettable.",
    sub: "From the Sanctuary to the Circuit — we know every trail, every teahouse.",
  },
  {
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1800&q=85",
    headline: "Beyond the\nBeaten Path",
    sub: "Manaslu, Mustang, Dolpo — remote Himalayan adventures crafted just for you.",
  },
];

const DESTINATIONS = [
  "All Destinations",
  "Everest Region",
  "Annapurna Region",
  "Langtang Region",
  "Manaslu Circuit",
  "Upper Mustang",
  "Bhutan",
  "Tibet",
];

const DURATIONS = [
  "Any Duration",
  "Up to 7 days",
  "8 – 12 days",
  "13 – 16 days",
  "17+ days",
];

const DIFFICULTIES = [
  "Any Difficulty",
  "Easy",
  "Moderate",
  "Challenging",
  "Strenuous",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
      <span className="text-secondary-light font-bold text-sm leading-none">
        {value}
      </span>
      <span className="text-white/75 text-xs leading-none">{label}</span>
    </div>
  );
}

// ─── Select field inside the search bar ──────────────────────────────────────

interface SearchFieldProps {
  icon: string;
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}

function SearchField({ icon, label, value, options, onChange }: SearchFieldProps) {
  return (
    <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3 min-w-0">
      <span className="text-base shrink-0">{icon}</span>
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-0.5">
          {label}
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm text-text bg-transparent border-none outline-none cursor-pointer w-full"
        >
          {options.map((opt) => (
            <option
              key={opt}
              value={opt.startsWith("All") || opt.startsWith("Any") ? "" : opt}
            >
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState<SearchState>({
    destination: "",
    duration: "",
    difficulty: "",
  });

  const slide = HERO_SLIDES[current];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: navigate to /packages with query params
    console.log("Search submitted:", search);
  };

  return (
    <section className="relative w-full h-[92vh] min-h-145 max-h-215 overflow-hidden">

      {/* ── Background slides ─────────────────────────────────── */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* ── Gradient overlay ──────────────────────────────────── */}
      {/*
        - Slight dark at top so trust pills are readable
        - Clear in the middle so the mountain photo pops
        - Heavy dark at bottom so headline + search are readable
      */}
      <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/15 to-black/72" />

      {/* ── All content ───────────────────────────────────────── */}
      <div className="relative z-10 h-full max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col justify-between py-8 sm:py-12">

        {/* Trust stats row — top right */}
        <div className="self-end flex flex-wrap gap-2 justify-end">
          <StatPill value="2,614+" label="TripAdvisor Reviews" />
          <StatPill value="5★"     label="Average Rating"      />
          <StatPill value="15+ yrs" label="Experience"         />
        </div>

        {/* Headline block — vertically centered in remaining space */}
        <div className="flex-1 flex flex-col justify-center max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-0.5 bg-secondary-light rounded-full" />
            <span className="text-secondary-light text-xs font-semibold tracking-[0.2em] uppercase">
              Trusted Trekking Company in Nepal
            </span>
          </div>

          {/* Headline — `whitespace-pre-line` renders the \n in the data */}
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] mb-5 whitespace-pre-line drop-shadow-lg">
            {slide.headline}
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" size="lg" href="/nepal-trekking">
              Explore Treks
            </Button>
            {/*
              Override outline button colors inline so it shows white on the
              dark hero background — the normal outline style uses primary
              color which would be invisible here.
            */}
            <Button
              variant="ghost"
              size="lg"
              href="/contact"
              className="text-white! border! border-white/50! hover:bg-white/15!"
            >
              Talk to an Expert
            </Button>
          </div>
        </div>

        {/* ── Search bar ──────────────────────────────────────── */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-1.5 flex flex-col sm:flex-row gap-1.5 shadow-2xl"
        >
          <SearchField
            icon="🏔️"
            label="Destination"
            value={search.destination}
            options={DESTINATIONS}
            onChange={(v) => setSearch({ ...search, destination: v })}
          />

          {/* Vertical divider between fields — hidden on mobile */}
          <div className="hidden sm:block w-px bg-white/25 self-stretch my-1" />

          <SearchField
            icon="📅"
            label="Duration"
            value={search.duration}
            options={DURATIONS}
            onChange={(v) => setSearch({ ...search, duration: v })}
          />

          <div className="hidden sm:block w-px bg-white/25 self-stretch my-1" />

          <SearchField
            icon="🥾"
            label="Difficulty"
            value={search.difficulty}
            options={DIFFICULTIES}
            onChange={(v) => setSearch({ ...search, difficulty: v })}
          />

          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="shrink-0 sm:self-stretch rounded-xl! px-8!"
          >
            Search
          </Button>
        </form>
      </div>

      {/* ── Slide indicator dots ──────────────────────────────── */}
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-secondary"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Bottom wave transition ────────────────────────────── */}
      {/*
        Blends the hero into the next section's background color.
        The fill color matches --color-background in your index.css.
      */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 52"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 52 L0 30 Q360 4 720 22 Q1080 40 1440 14 L1440 52 Z"
            fill="oklch(0.97 0.01 250)"
          />
        </svg>
      </div>
    </section>
  );
}