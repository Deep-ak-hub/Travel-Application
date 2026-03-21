// src/components/Footer.tsx

import { CONTACT, SITE_NAME, SOCIAL, NAV_LINKS } from "../config/constants";

// ─── Sub-components ───────────────────────────────────────────────────────────

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-text-light text-xs font-bold uppercase tracking-widest mb-4">
      {children}
    </h4>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-text-light/55 text-sm hover:text-text-light transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

// ─── Office block ─────────────────────────────────────────────────────────────

function OfficeBlock({
  region,
  name,
  address,
  phone,
  email,
}: {
  region: string;
  name?: string;
  address: string;
  phone: string;
  email: string;
}) {
  return (
    <div>
      <p className="text-text-light text-xs font-bold uppercase tracking-widest mb-2">
        {region}
      </p>
      {name && (
        <p className="text-text-light/80 text-sm font-medium mb-1">{name}</p>
      )}
      <p className="text-text-light/50 text-xs leading-relaxed mb-2">{address}</p>
      <a
        href={`tel:${phone.replace(/\s/g, "")}`}
        className="text-text-light/70 text-xs hover:text-secondary-light transition-colors block"
      >
        📞 {phone}
      </a>
      <a
        href={`mailto:${email}`}
        className="text-text-light/70 text-xs hover:text-secondary-light transition-colors block mt-0.5"
      >
        ✉️ {email}
      </a>
    </div>
  );
}

// ─── Payment badge ────────────────────────────────────────────────────────────

function PaymentBadge({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1.5 bg-white/10 border border-white/15 rounded-lg text-[10px] font-semibold text-text-light/70">
      {label}
    </span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Pull just the first 5 nav links for the site map column
  const siteMapLinks = NAV_LINKS.slice(0, 5);

  return (
    <footer className="bg-background-dark border-t border-white/10">

      {/* ── Main footer grid ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand + about blurb */}
        <div className="lg:col-span-1">
          {/* Logo */}
          <a href="/" className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-sunset flex items-center justify-center text-white font-bold text-sm shadow">
              HT
            </div>
            <span className="font-bold text-lg text-text-light">{SITE_NAME}</span>
          </a>

          <p className="text-text-light/50 text-sm leading-relaxed mb-5">
            Nepal's trusted trekking company since 2009. Guiding adventurers
            through the Himalayas with local expertise, safety, and care.
          </p>

          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { href: SOCIAL.facebook,    label: "Facebook",    icon: "f" },
              { href: SOCIAL.instagram,   label: "Instagram",   icon: "in" },
              { href: SOCIAL.twitter,     label: "Twitter / X", icon: "x" },
              { href: SOCIAL.linkedin, label: "TripAdvisor", icon: "Li" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white/8 border border-white/15 flex items-center justify-center text-[10px] font-bold text-text-light/60 hover:bg-white/15 hover:text-text-light transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Site map */}
        <div>
          <FooterHeading>Explore</FooterHeading>
          <ul className="space-y-2">
            {siteMapLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </ul>
        </div>

        {/* Col 3 — Quick links (legal + info) */}
        <div>
          <FooterHeading>Information</FooterHeading>
          <ul className="space-y-2">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/travel-guide">Travel Guide</FooterLink>
            <FooterLink href="/terms-and-conditions">Terms & Conditions</FooterLink>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/how-to-book">How to Book</FooterLink>
            <FooterLink href="/risk-free-booking">Risk-Free Booking</FooterLink>
            <FooterLink href="/sustainable-tourism">Sustainable Tourism</FooterLink>
          </ul>
        </div>

        {/* Col 4 — Offices */}
        <div className="flex flex-col gap-6">
          <OfficeBlock
            region="Head Office"
            address={CONTACT.address}
            phone={CONTACT.phone}
            email={CONTACT.email}
          />
          <OfficeBlock
            region="Europe"
            name="Bishnu Rawat"
            address="Burgstrasse 22, 8610 Uster (Zurich), Switzerland"
            phone="+41 76 390 90 12"
            email="bishnu@himalayantrails.com"
          />
          <OfficeBlock
            region="Australia"
            name="Puran Saud"
            address="Gold Coast QLD, Australia"
            phone="+61 406 927 726"
            email="puran@himalayantrails.com"
          />
        </div>
      </div>

      {/* ── Partners strip ───────────────────────────────────────── */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-[10px] font-bold text-text-light/40 uppercase tracking-widest">
              Our Partners
            </span>
            {["TourRadar", "Bookmundi", "GetYourGuide"].map((p) => (
              <span
                key={p}
                className="px-3 py-1.5 bg-white/8 border border-white/12 rounded-lg text-[11px] font-semibold text-text-light/50"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Payment methods */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-[10px] font-bold text-text-light/40 uppercase tracking-widest mr-1">
              We accept
            </span>
            {["Visa", "Mastercard", "Amex", "JCB", "UnionPay"].map((p) => (
              <PaymentBadge key={p} label={p} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <div className="border-t border-white/8 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-text-light/35 text-xs">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-text-light/25 text-xs">
            Tourism License No. 1033 · Company Reg. No. 59628
          </p>
        </div>
      </div>
    </footer>
  );
}