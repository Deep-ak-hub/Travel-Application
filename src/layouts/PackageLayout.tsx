import { useState } from "react";
import { Link } from "react-router-dom";
import type { TrekDetail } from "../config/data";
import { formatPrice } from "../config/constants";
import InfoPill from "../components/PackageDetailsComponent/InfoPill";
import Gallery from "../components/PackageDetailsComponent/Gallery";
import SectionHeading from "../components/PackageDetailsComponent/SectionHeading";
import BookingSidebar from "../components/PackageDetailsComponent/BookingSideBar";
import ItineraryList from "../components/PackageDetailsComponent/ItineraryList";


type Tab = "overview" | "itinerary" | "includes" | "pricing";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "includes", label: "Includes" },
  { id: "pricing", label: "Pricing" },
];

interface PackageLayoutProps {
  trek: TrekDetail;
}

export default function PackageLayout({ trek }: PackageLayoutProps) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div className="bg-background min-h-screen">

      {/* Breadcrumb */}
      <div className="bg-background-light border-b border-border px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-text-muted flex-wrap">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/nepal-trekking"
            className="hover:text-primary transition-colors"
          >
            Nepal Trekking
          </Link>
          <span>/</span>
          <span className="text-text font-medium truncate">{trek.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* ── Main column ───────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Title block */}
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  {trek.region} Region
                </span>
                {trek.badge && (
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-secondary/15 text-secondary-dark">
                    {trek.badge}
                  </span>
                )}
              </div>
              
              {/* heading */}
              <h1 className="text-3xl sm:text-4xl font-bold text-text leading-tight mb-3">
                {trek.title}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">

              {/* ratings */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-secondary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm font-bold text-text ml-1">5.0</span>
                </div>

                {/* reviews */}
                <span className="text-text-muted text-sm">
                  {trek.reviews} reviews
                </span>
                
                {/* days */}
                <span className="text-sm font-medium text-text">
                  {trek.days} days
                </span>
                
                {/* difficulty */}
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    trek.difficulty === "Strenuous"
                      ? "bg-error/15 text-error-dark"
                      : trek.difficulty === "Challenging"
                        ? "bg-secondary/15 text-secondary-dark"
                        : trek.difficulty === "Moderate"
                          ? "bg-warning/20 text-warning-dark"
                          : "bg-success/15 text-success-dark"
                  }`}
                >
                  {trek.difficulty}
                </span>

              </div>
            </div>

            {/* Gallery */}
            <Gallery
              main={trek.image}
              gallery={trek.gallery}
              title={trek.title}
            />

            {/* Quick info strip */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              <InfoPill
                icon="📅"
                label="Duration"
                value={`${trek.days} Days`}
              />
              <InfoPill
                icon="🏔️"
                label="Max Elevation"
                value={trek.maxElevation}
              />
              <InfoPill icon="🚩" label="Start / End" value={trek.startEnd} />
              <InfoPill icon="🍽️" label="Meals" value={trek.meals} />
              <InfoPill icon="🏠" label="Stay" value={trek.accommodation} />
              <InfoPill icon="🗓️" label="Best Time" value={trek.bestTime} />
              <InfoPill icon="👥" label="Group Size" value={trek.groupSize} />
            </div>

            {/* Tabs */}
            <div className="border-b border-border">
              <div className="flex">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3 text-sm font-semibold cursor-pointer border-b-2 -mb-px transition-all duration-200 ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-text-muted hover:text-text"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div>
                
              {/* Overview */}
              {activeTab === "overview" && (
                <div className="flex flex-col gap-8">
                  <div>
                    <SectionHeading>Trip Overview</SectionHeading>
                    <div className="flex flex-col gap-4">
                      {trek.overview.split("\n\n").map((para, i) => (
                        <p
                          key={i}
                          className="text-text-muted leading-relaxed text-[0.95rem]"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <SectionHeading>Key Highlights</SectionHeading>
                    <ul className="flex flex-col gap-3">
                      {trek.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <svg
                              className="w-3 h-3 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span className="text-sm text-text-muted leading-relaxed">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Itinerary */}
              {activeTab === "itinerary" && (
                <div>
                  <SectionHeading>Day-by-Day Itinerary</SectionHeading>
                  <ItineraryList days={trek.itinerary} />
                </div>
              )}

              {/* Includes */}
              {activeTab === "includes" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <SectionHeading>What's Included</SectionHeading>
                    <ul className="flex flex-col gap-3">
                      {trek.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-success/15 flex items-center justify-center mt-0.5">
                            <svg
                              className="w-3 h-3 text-success-dark"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span className="text-sm text-text-muted leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <SectionHeading>Not Included</SectionHeading>
                    <ul className="flex flex-col gap-3">
                      {trek.excludes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-error/15 flex items-center justify-center mt-0.5">
                            <svg
                              className="w-3 h-3 text-error-dark"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                          <span className="text-sm text-text-muted leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Pricing */}
              {activeTab === "pricing" && (
                <div>
                  <SectionHeading>Group Pricing</SectionHeading>
                  <div className="rounded-2xl border border-border overflow-hidden">
                    <div className="grid grid-cols-2 bg-background-dark px-5 py-3">
                      <span className="text-xs font-bold text-text-light uppercase tracking-widest">
                        Group Size
                      </span>
                      <span className="text-xs font-bold text-text-light uppercase tracking-widest text-right">
                        Price / Person
                      </span>
                    </div>
                    {trek.groupPricing.map((row, i) => (
                      <div
                        key={row.label}
                        className={`grid grid-cols-2 px-5 py-4 items-center hover:bg-primary/5 transition-colors ${
                          i !== trek.groupPricing.length - 1
                            ? "border-b border-border"
                            : ""
                        }`}
                      >
                        <span className="text-sm text-text font-medium">
                          {row.label}
                        </span>
                        <span className="text-right text-lg font-bold text-primary">
                          {formatPrice(row.price)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-5 bg-secondary/10 border border-secondary/20 rounded-xl">
                    <p className="text-sm font-semibold text-secondary-dark mb-1">
                      💡 Best value for groups
                    </p>
                    <p className="text-sm text-text-muted">
                      The more you trek together, the less you pay. All prices
                      are per person and fully inclusive — no hidden costs.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar  */}
          <div className="lg:col-span-1">
            <BookingSidebar
              price={trek.price}
              groupPricing={trek.groupPricing}
              days={trek.days}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
