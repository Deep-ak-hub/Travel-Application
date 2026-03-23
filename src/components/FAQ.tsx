import { useState } from "react";
import { faqs } from "../config/data";
import Button from "./Button";

// ─── Single accordion item ────────────────────────────────────────────────────

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        isOpen
          ? "border-primary shadow-sm shadow-primary"
          : "border-border hover:border-border-dark"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-background-light hover:bg-background transition-colors"
        aria-expanded={isOpen}
      >
        {/* Question number + text */}
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
              isOpen
                ? "bg-primary text-primary-foreground"
                : "bg-border text-text-muted"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-semibold text-sm leading-snug transition-colors ${
              isOpen ? "text-primary" : "text-text"
            }`}
          >
            {question}
          </span>
        </div>

        {/* Chevron */}
        <svg
          className={`shrink-0 w-4 h-4 text-text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary!" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Answer panel — max-height trick for smooth animation */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p className="px-5 pb-5 pt-1 text-sm text-text-muted leading-relaxed border-t border-border">
          {answer}
        </p>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function FAQ() {
  // -1 means all closed; storing index lets only one item open at a time
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  // Split FAQs into two columns for desktop
  const mid = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, mid);
  const rightCol = faqs.slice(mid);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
              <span className="w-5 h-0.5 bg-secondary rounded-full" />
              Things to Know
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-text-muted max-w-md">
              Everything you need to know before booking your Himalayan adventure.
            </p>
          </div>

          <Button variant="outline" href="/travel-guide" className="shrink-0">
            Full Travel Guide
          </Button>
        </div>

        {/* ── Two-column accordion ─────────────────────────────────── */}
        {/*
          Desktop: two columns side by side.
          Mobile: single column (grid-cols-1).
          Each item needs its global index for the open/close logic,
          so we pass the offset (mid) to the right column.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Left column */}
          <div className="flex flex-col gap-3">
            {leftCol.map((faq, i) => (
              <FAQItem
                key={faq.question}
                {...faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3">
            {rightCol.map((faq, i) => {
              const globalIndex = i + mid;
              return (
                <FAQItem
                  key={faq.question}
                  {...faq}
                  index={globalIndex}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => toggle(globalIndex)}
                />
              );
            })}
          </div>
        </div>

        {/* ── Still have questions CTA ─────────────────────────────── */}
        <div className="mt-10 rounded-2xl bg-background-light border border-border p-7 flex flex-col sm:flex-row items-center gap-5 justify-between">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0">
              💬
            </span>
            <div>
              <p className="font-bold text-text">Still have questions?</p>
              <p className="text-text-muted text-sm">
                Our team replies within 2 hours — day or night.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap justify-center shrink-0">
            <Button variant="primary" href="/contact">
              Send a Message
            </Button>
            <Button variant="outline" href="https://wa.me/9800000988">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}