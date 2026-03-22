import PageHero from "../components/PageHero";
import TrekCard from "../components/TrekCard";
import { allTreks } from "../config/data";

const bhutanTreks = allTreks.filter((t) => t.region === "Bhutan");

export default function Bhutan() {
return (
    <div className="bg-background min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1572367166643-5c70b4f44d2e?w=1400&q=80"
        eyebrow="Beyond Nepal"
        title="Bhutan Tours"
        subtitle="The Last Shangri-La — pristine forests, dzong fortresses, and the world's only carbon-negative country."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {/* SDF notice */}
        <div className="mb-8 p-4 bg-secondary/10 border border-secondary/20 rounded-xl flex items-start gap-3">
          <span className="text-xl shrink-0">💡</span>
          <div>
            <p className="text-sm font-semibold text-secondary-dark mb-0.5">Sustainable Development Fee</p>
            <p className="text-xs text-text-muted">
              Bhutan charges a Sustainable Development Fee (SDF) of USD 100/day per person.
              This is included in all our Bhutan packages.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-text mb-6">Bhutan Tour Packages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bhutanTreks.map((trek) => <TrekCard key={trek.id} trek={trek} />)}
        </div>
      </div>
    </div>
  );
}