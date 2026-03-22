import { useState } from "react";
import PageHero from "../components/PageHero";
import { CONTACT } from "../config/constants";

type Status = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  trek: string;
  message: string;
}

const TREK_OPTIONS = [
  "Everest Base Camp Trek",
  "Annapurna Base Camp Trek",
  "Annapurna Circuit Trek",
  "Manaslu Circuit Trek",
  "Langtang Valley Trek",
  "Upper Mustang Trek",
  "Bhutan Tour",
  "Tibet Tour",
  "Peak Climbing",
  "Custom / Not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", trek: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1400&q=80"
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Our team replies within 2 hours — day or night. Let's plan your perfect trek together."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Contact form ──────────────────────────────────── */}
          <div className="lg:col-span-2">
            <div className="bg-background-light border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-text mb-6">Send Us a Message</h2>

              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <span className="w-16 h-16 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-3xl">✅</span>
                  <h3 className="text-lg font-bold text-text">Message received!</h3>
                  <p className="text-text-muted max-w-sm text-sm">
                    We'll get back to you within 2 hours. Check your inbox — and spam just in case.
                  </p>
                  <button onClick={() => { setStatus("idle"); setForm({ name:"",email:"",phone:"",trek:"",message:"" }); }}
                    className="text-sm text-primary underline underline-offset-2 mt-2">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Full Name *</label>
                      <input required value={form.name} onChange={update("name")} placeholder="Deepak Sharma"
                        className="h-11 px-4 rounded-xl border border-border bg-background text-text text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Email *</label>
                      <input required type="email" value={form.email} onChange={update("email")} placeholder="you@email.com"
                        className="h-11 px-4 rounded-xl border border-border bg-background text-text text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Phone / WhatsApp</label>
                      <input value={form.phone} onChange={update("phone")} placeholder="+977 ..."
                        className="h-11 px-4 rounded-xl border border-border bg-background text-text text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Interested Trek</label>
                      <select value={form.trek} onChange={update("trek")}
                        className="h-11 px-4 rounded-xl border border-border bg-background text-text text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
                        <option value="">Select a package...</option>
                        {TREK_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Message *</label>
                    <textarea required value={form.message} onChange={update("message")}
                      rows={5} placeholder="Tell us your travel dates, group size, budget, or any questions..."
                      className="px-4 py-3 rounded-xl border border-border bg-background text-text text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
                  </div>

                  <button type="submit" disabled={status === "loading"}
                    className="h-12 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary-dark transition-all active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2 text-sm">
                    {status === "loading" ? (
                      <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</>
                    ) : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── Contact info sidebar ──────────────────────────── */}
          <div className="flex flex-col gap-5">
            {/* Quick contact */}
            <div className="bg-background-light border border-border rounded-2xl p-5">
              <h3 className="font-bold text-text mb-4 text-sm">Quick Contact</h3>
              <div className="flex flex-col gap-3">
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-success/10 border border-success/20 rounded-xl hover:bg-success/15 transition-colors">
                  <span className="text-xl">💬</span>
                  <div>
                    <p className="text-xs font-bold text-success-dark">WhatsApp</p>
                    <p className="text-xs text-text-muted">{CONTACT.phone}</p>
                  </div>
                </a>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 p-3 bg-primary/8 border border-primary/20 rounded-xl hover:bg-primary/10 transition-colors">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="text-xs font-bold text-primary">Direct Call</p>
                    <p className="text-xs text-text-muted">{CONTACT.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 p-3 bg-background border border-border rounded-xl hover:border-primary/30 transition-colors">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="text-xs font-bold text-text">Email</p>
                    <p className="text-xs text-text-muted">{CONTACT.email}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Offices */}
            <div className="bg-background-light border border-border rounded-2xl p-5">
              <h3 className="font-bold text-text mb-4 text-sm">Our Offices</h3>
              <div className="flex flex-col gap-4">
                {[
                  { region: "🇳🇵 Head Office", address: CONTACT.address, hours: "24/7" },
                  { region: "🇨🇭 Europe",      address: "Burgstrasse 22, Uster, Switzerland", hours: "Business hours" },
                  { region: "🇦🇺 Australia",   address: "Gold Coast QLD, Australia", hours: "Business hours" },
                ].map((o) => (
                  <div key={o.region} className="border-b border-border last:border-0 pb-3 last:pb-0">
                    <p className="text-xs font-bold text-text mb-0.5">{o.region}</p>
                    <p className="text-xs text-text-muted">{o.address}</p>
                    <p className="text-xs text-primary font-medium mt-0.5">{o.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time badge */}
            <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-4 flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="text-sm font-bold text-secondary-dark">Average response time</p>
                <p className="text-xs text-text-muted">Under 2 hours, 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}