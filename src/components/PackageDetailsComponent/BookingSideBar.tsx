import { formatPrice } from "../../config/constants";
import type { TrekDetail } from "../../config/data";
import Button from "../Button";

interface IBookingSidebarProps {
    price: number
    groupPricing: TrekDetail["groupPricing"]
    days: number
}

export default function BookingSidebar({
  price,
  groupPricing,
  days,
}: Readonly<IBookingSidebarProps>) {
  return (
    <div className="sticky top-24 flex flex-col gap-4">

      {/* Price + CTA */}
      <div className="bg-background-light border border-border rounded-2xl p-6">
        <p className="text-xs text-text-muted mb-1">All-inclusive price from</p>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-bold text-primary">
            {formatPrice(price)}
          </span>
          <span className="text-text-muted text-sm">/ person</span>
        </div>
        <p className="text-xs text-text-muted mb-5">
          {days - 1} nights · {days} days
        </p>
        <div className="flex flex-col gap-2.5">
          <Button variant="secondary" fullWidth size="lg" href="/contact">
            Book Now
          </Button>
          <Button
            variant="outline"
            fullWidth
            href="https://wa.me/9899999900"
          >
            💬 WhatsApp Us
          </Button>
        </div>
        <p className="text-[11px] text-text-muted text-center mt-4">
          Free cancellation · No hidden fees
        </p>
      </div>

      {/* Group pricing */}
      <div className="bg-background-light border border-border rounded-2xl p-5">
        <p className="text-xs font-bold text-text uppercase tracking-widest mb-4">
          Group Pricing
        </p>
        <div className="flex flex-col divide-y divide-border">
          {groupPricing.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between py-2.5"
            >
              <span className="text-sm text-text-muted">{row.label}</span>
              <span className="text-sm font-bold text-primary">
                {formatPrice(row.price)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="bg-background-light border border-border rounded-2xl p-5 flex flex-col gap-3">
        {[
          { icon: "🛡️", text: "Risk-free cancellation policy" },
          { icon: "✅", text: "Verified local guides only" },
          { icon: "🏆", text: "TripAdvisor Certificate of Excellence" },
          { icon: "📞", text: "24/7 emergency support" },
        ].map((b) => (
          <div key={b.text} className="flex items-center gap-3">
            <span className="text-base shrink-0">{b.icon}</span>
            <span className="text-xs text-text-muted">{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
