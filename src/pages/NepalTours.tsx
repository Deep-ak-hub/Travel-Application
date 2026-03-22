import PageHero from "../components/PageHero";
import TrekCard from "../components/TrekCard";
import { featuredTreks } from "../config/data";

export default function NepalTours() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1400&q=80"
        eyebrow="Nepal"
        title="Nepal Tours"
        subtitle="Cultural, heritage, and adventure tours across Nepal's most captivating destinations."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-text">All Tour Packages</h2>
            <p className="text-text-muted text-sm mt-1">
              Explore Nepal beyond trekking — temples, jungles, lakes, and living culture.
            </p>
          </div>
          <span className="text-sm text-text-muted">{featuredTreks.length} packages available</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTreks.map((trek) => <TrekCard key={trek.id} trek={trek} />)}
        </div>
      </div>
    </div>
  );
}