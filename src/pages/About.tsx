import PageHero from "../components/PageHero";
import { stats } from "../config/data";
import { Link } from "react-router-dom";
import { CONTACT } from "../config/constants";

const TEAM = [
  {
    name: "Ganga Thapa",
    role: "Co-founder & Lead Guide",
    bio: "Born and raised in the Himalayas, Ganga has been guiding trekkers since 2003. He holds a senior mountain guide license and has summited 14 peaks over 6,000 m.",
    initials: "GT",
  },
  {
    name: "Balaram Thapa",
    role: "Co-founder & Operations Head",
    bio: "Balaram manages all logistics and client relations. His meticulous planning ensures every trip runs smoothly from airport pickup to final descent.",
    initials: "BT",
  },
  {
    name: "Sita Rai",
    role: "Senior Trek Guide",
    bio: "Sita specialises in the Annapurna region and is one of Nepal's few certified female mountain guides — a trailblazer in every sense.",
    initials: "SR",
  },
  {
    name: "Karma Sherpa",
    role: "Everest Region Specialist",
    bio: "A third-generation Sherpa from Namche Bazaar, Karma has escorted over 300 trekkers to Everest Base Camp and holds a Wilderness First Responder certification.",
    initials: "KS",
  },
];

const VALUES = [
  { icon: "🤝", title: "Local First",    desc: "100% locally owned and operated. Every rupee spent with us stays in Nepal." },
  { icon: "🛡️", title: "Safety Above All", desc: "We never compromise on safety. Every guide carries first aid and emergency equipment." },
  { icon: "🌿", title: "Sustainable",    desc: "We follow Leave No Trace principles and contribute to trail maintenance programs." },
  { icon: "❤️", title: "Community",      desc: "10% of profits fund local school and porter welfare programs in the Khumbu." },
];

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1480497490787-505ec076689f?w=1400&q=80"
        eyebrow="Our Story"
        title="About Us"
        subtitle="A family-run trekking company born from a love of mountains and a desire to share Nepal's magic with the world."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 p-5 bg-background-light border border-border rounded-2xl text-center hover:border-primary/30 transition-colors">
              <span className="text-3xl font-bold text-primary">{s.value}</span>
              <span className="text-xs text-text-muted font-medium">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest mb-4">
              <span className="w-5 h-0.5 bg-secondary rounded-full" />
              Our Story
            </span>
            <h2 className="text-3xl font-bold text-text mb-5">
              From a shared love of mountains to Nepal's trusted trekking company
            </h2>
            <div className="flex flex-col gap-4 text-text-muted text-[0.95rem] leading-relaxed">
              <p>
                In 2009, brothers Ganga and Balaram Thapa founded Himalayan Trails with a simple vision —
                to share the breathtaking landscapes and rich culture of their homeland with adventurers from around the world.
              </p>
              <p>
                What started as a two-person operation has grown into one of Nepal's most trusted trekking companies,
                with a team of 25+ certified guides, 2,600+ five-star reviews, and expeditions running across Nepal, Bhutan, and Tibet.
              </p>
              <p>
                We are proudly locally owned. Every guide, porter, and cook is Nepali. Every teahouse we use is family-run.
                When you trek with us, your money supports the communities that make these mountains worth visiting.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80"
              alt="Himalayan Trails team"
              className="rounded-2xl w-full aspect-4/3 object-cover shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-background-light border border-border rounded-xl px-4 py-3 shadow-lg">
              <p className="text-xs font-bold text-text">TripAdvisor</p>
              <p className="text-xs text-text-muted">Certificate of Excellence 2012–2025</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text text-center mb-8">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="flex flex-col items-center gap-3 p-6 bg-background-light border border-border rounded-2xl text-center hover:border-primary/30 hover:shadow-md transition-all">
                <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">{v.icon}</span>
                <h3 className="font-bold text-text">{v.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-4 p-6 bg-background-light border border-border rounded-2xl text-center hover:border-primary/30 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {m.initials}
                </div>
                <div>
                  <p className="font-bold text-text">{m.name}</p>
                  <p className="text-xs text-primary font-medium mb-2">{m.role}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-background-dark rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-text-light mb-1">Ready to trek with us?</h2>
            <p className="text-text-light/60 text-sm">Our team is online now — get a personalised itinerary within 24 hours.</p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center shrink-0">
            <Link to="/contact"
              className="bg-secondary text-secondary-foreground font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-secondary-dark transition-colors">
              Plan My Trek
            </Link>
            <a href={`https://wa.me/${CONTACT.phone.replace(/\s|\+/g, "")}`}
              className="border border-white/30 text-text-light font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-white/10 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}