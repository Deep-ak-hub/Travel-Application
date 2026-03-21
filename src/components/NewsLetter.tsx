// src/components/Newsletter.tsx

import { useState } from "react";
import Button from "./Button";

type Status = "idle" | "loading" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    // Simulate API call — replace with your real endpoint later
    await new Promise((r) => setTimeout(r, 1200));

    // Basic email check
    if (email.includes("@")) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 bg-background-light border-t border-border">
      <div className="max-w-3xl mx-auto text-center">

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-sunset flex items-center justify-center text-2xl mx-auto mb-5 shadow-md">
          ✉️
        </div>

        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
          <span className="w-5 h-0.5 bg-secondary rounded-full" />
          Stay in the Loop
          <span className="w-5 h-0.5 bg-secondary rounded-full" />
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-text-muted max-w-md mx-auto mb-8">
          Get seasonal deals, trek updates, and Himalayan travel tips delivered
          straight to your inbox. No spam — unsubscribe any time.
        </p>

        {/* ── Form ──────────────────────────────────────────────── */}
        {status === "success" ? (
          // Success state
          <div className="flex flex-col items-center gap-3 py-6">
            <span className="w-14 h-14 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-2xl">
              ✅
            </span>
            <p className="font-bold text-text text-lg">You're subscribed!</p>
            <p className="text-text-muted text-sm">
              We'll be in touch with the latest from the trails.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-sm text-primary underline underline-offset-2 mt-1"
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Your email address"
                required
                className={`w-full h-12 px-4 rounded-xl border bg-background text-text text-sm placeholder:text-text-muted outline-none transition-all focus:ring-2 focus:ring-primary/30 ${
                  status === "error"
                    ? "border-error focus:ring-error/30"
                    : "border-border focus:border-primary"
                }`}
              />
              {/* Inline error */}
              {status === "error" && (
                <p className="absolute -bottom-5 left-0 text-xs text-error">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="secondary"
              size="md"
              isLoading={status === "loading"}
              className="h-12 shrink-0"
            >
              Subscribe
            </Button>
          </form>
        )}

        {/* Fine print */}
        <p className="text-[11px] text-text-muted mt-6">
          By subscribing you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-text transition-colors">
            Privacy Policy
          </a>
          . We never share your data.
        </p>
      </div>
    </section>
  );
}