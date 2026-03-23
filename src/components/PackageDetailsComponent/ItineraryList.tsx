import type { TrekDetail } from "../../config/data";
import { useState } from "react";

export default function ItineraryList({
  days,
}: {
  days: TrekDetail["itinerary"];
}) {
  const [openDay, setOpenDay] = useState<number>(1);
  return (
    <>
      <div className="flex flex-col gap-2">
      {days.map((day) => {
        const isOpen = openDay === day.day;
        return (
          <div
            key={day.day}
            className={`border rounded-xl overflow-hidden transition-all duration-200 ${
              isOpen
                ? "border-primary/40 shadow-sm"
                : "border-border hover:border-border-dark"
            }`}
          >
            <button
              onClick={() => setOpenDay(isOpen ? -1 : day.day)}
              className="w-full flex items-center gap-4 px-5 py-4 bg-background-light hover:bg-background transition-colors text-left"
            >
              <span
                className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                  isOpen
                    ? "bg-primary text-primary-foreground"
                    : "bg-border text-text-muted"
                }`}
              >
                {String(day.day).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className={`font-semibold text-sm transition-colors ${
                    isOpen ? "text-primary" : "text-text"
                  }`}
                >
                  {day.title}
                </p>
                {!isOpen && day.elevation && (
                  <p className="text-xs text-text-muted mt-0.5">
                    {day.elevation}
                    {day.duration ? ` · ${day.duration}` : ""}
                  </p>
                )}
              </div>
              <svg
                className={`shrink-0 w-4 h-4 text-text-muted transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-primary!" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 pt-1 border-t border-border">
                <p className="text-sm text-text-muted leading-relaxed mb-3">
                  {day.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {day.elevation && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      🏔️ {day.elevation}
                    </span>
                  )}
                  {day.duration && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      ⏱ {day.duration}
                    </span>
                  )}
                  {day.accommodation && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted bg-border px-3 py-1 rounded-full">
                      🏠 {day.accommodation}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}
