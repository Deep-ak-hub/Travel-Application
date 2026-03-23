import { useState } from "react";
import PageHero from "../components/PageHero";
import TrekCard from "../components/TrekCard";
import { allTreks } from "../config/data";
import type { Trek } from "../config/data";

type Region = "All" | Trek["region"];
type Difficulty = "All" | Trek["difficulty"];

const REGIONS: Region[] = [
  "All",
  "Everest",
  "Annapurna",
  "Langtang",
  "Manaslu",
  "Mustang",
];
const DIFFICULTIES: Difficulty[] = [
  "All",
  "Easy",
  "Moderate",
  "Challenging",
  "Strenuous",
];

const nepaTreks = allTreks.filter(
  (t) => t.region !== "Bhutan" && t.region !== "Tibet",
);

export default function NepaTrekking() {
  const [region, setRegion] = useState<Region>("All");
  const [difficulty, setDifficulty] = useState<Difficulty>("All");

  const filtered = nepaTreks.filter((t) => {
    const regionMatch = region === "All" || t.region === region;
    const diffMatch = difficulty === "All" || t.difficulty === difficulty;
    return regionMatch && diffMatch;
  });

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80"
        eyebrow="Nepal"
        title="Nepal Trekking"
        subtitle="Curated routes through the Himalayas — from gentle valley walks to high-altitude expeditions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8 flex-wrap">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Region
            </span>
            <div className="flex flex-wrap gap-2">
              {REGIONS.map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                    region === r
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-text-muted border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Difficulty
            </span>
            <div className="flex flex-wrap gap-2">
              {DIFFICULTIES.map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border cursor-pointer transition-all ${
                    difficulty === d
                      ? "bg-secondary text-secondary-foreground border-secondary"
                      : "bg-transparent text-text-muted border-border hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm text-text-muted mb-6">
          Showing{" "}
          <span className="font-semibold text-text">{filtered.length}</span>{" "}
          packages
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-text-muted">
            No treks match your filters — try a different combination.
          </div>
        )}
      </div>
    </div>
  );
}
