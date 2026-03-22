import { peaks } from "../config/data";
import { formatPrice as fmt } from "../config/constants";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";



// Peak card — different from TrekCard since peaks have elevation not days as PageHero stat
function PeakCard({ peak }: { peak: typeof peaks[0] }) {
  const diffColor =
    peak.difficulty === "Strenuous"   ? "bg-error/15 text-error-dark" :
    peak.difficulty === "Challenging" ? "bg-secondary/15 text-secondary-dark" :
    "bg-warning/20 text-warning-dark";

  return (
    <Link to={`/package/${peak.slug}`}
      className="group flex flex-col bg-background-light border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={peak.image} alt={peak.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy" />
        <span className="absolute top-3 left-3 bg-background-dark/80 text-text-light text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
          ⛰ {peak.elevation}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-text text-sm leading-snug group-hover:text-primary transition-colors">
          {peak.title}
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-text-muted">{peak.days} days</span>
          <span className="text-border-dark">·</span>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${diffColor}`}>
            {peak.difficulty}
          </span>
        </div>
        <div className="flex-1" />
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            <span className="text-[10px] text-text-muted block mb-0.5">From</span>
            <span className="text-lg font-bold text-primary">{fmt(peak.price)}</span>
          </div>
          <span className="text-xs font-semibold text-secondary group-hover:text-secondary-dark transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function PeakClimbing() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1400&q=80"
        eyebrow="Adventure"
        title="Peak Climbing"
        subtitle="Stand on top of a Himalayan summit — guided expeditions for first-timers to seasoned climbers."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {/* Info strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { icon: "⛰", label: "Peaks Available",  value: `${peaks.length}+` },
            { icon: "📋", label: "Permits Arranged", value: "100%"              },
            { icon: "🧗", label: "Min Experience",   value: "Trekking"          },
            { icon: "🛡️", label: "Safety Record",    value: "Excellent"         },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 p-4 bg-background-light border border-border rounded-xl text-center">
              <span className="text-2xl">{s.icon}</span>
              <span className="text-lg font-bold text-primary">{s.value}</span>
              <span className="text-xs text-text-muted">{s.label}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-text mb-6">All Climbing Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {peaks.map((peak) => <PeakCard key={peak.id} peak={peak} />)}
        </div>
      </div>
    </div>
  );
}