import PageHero from "../components/PageHero";
import TrekCard from "../components/TrekCard";
import { allTreks } from "../config/data";

const tibetTreks = allTreks.filter((t) => t.region === "Tibet");

export default function Tibet() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1400&q=80"
        eyebrow="Beyond Nepal"
        title="Tibet Tours"
        subtitle="Journey across the Roof of the World — ancient monasteries, sacred lakes, and the high Tibetan plateau."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {/* Visa notice */}
        <div className="mb-8 p-4 bg-primary/8 border border-primary/20 rounded-xl flex items-start gap-3">
          <span className="text-xl shrink-0">ℹ️</span>
          <div>
            <p className="text-sm font-semibold text-primary mb-0.5">Tibet Travel Permit required</p>
            <p className="text-xs text-text-muted">
              All foreign visitors to Tibet need a Tibet Travel Permit in addition to a Chinese visa.
              We arrange all permits as part of the package — no extra hassle for you.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-text mb-6">Tibet Tour Packages</h2>

        {tibetTreks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tibetTreks.map((trek) => <TrekCard key={trek.id} trek={trek} />)}
          </div>
        ) : (
          <div className="py-20 text-center text-text-muted">
            Tibet packages loading soon — contact us for custom Tibet itineraries.
          </div>
        )}
      </div>
    </div>
  );
}