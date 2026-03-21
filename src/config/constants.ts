// ─── Site Meta ────────────────────────────────────────────────────────────────

export const SITE_NAME = "Himalayan Trails";
export const SITE_TAGLINE = "Local Experts in Himalayan Trekking";
export const SITE_DESCRIPTION =
  "Trusted trekking company in Nepal since 2009. Everest, Annapurna, Langtang, Manaslu & beyond.";

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT = {
  phone: "+977 98000000000",
  whatsapp: "https://api.whatsapp.com/send?phone=9800000000",
  email: "himalaya@test.com",
  address: "Imadol ,Lalitpur , Nepal",
};

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Nepal",
    href: "/nepal",
    children: [
      { label: "Nepal Trekking",    href: "/nepal-trekking"    },
      { label: "Nepal Tours",       href: "/nepal-tours"       },
      { label: "Peak Climbing",     href: "/peak-climbing"     },
      { label: "Helicopter Tours",  href: "/helicopter-tours"  },
      { label: "Wildlife Tours",    href: "/wildlife-tours"    },
      { label: "Luxury Treks",      href: "/luxury-treks"      },
    ],
  },
  {
    label: "Tibet",
    href: "/tibet",
    children: [
      { label: "Lhasa–EBC Tour",    href: "/tibet/lhasa-ebc"   },
      { label: "Glimpse of Tibet",  href: "/tibet/glimpse"     },
      { label: "Kailash Tour",      href: "/tibet/kailash"     },
    ],
  },
  {
    label: "Bhutan",
    href: "/bhutan",
    children: [
      { label: "Bhutan Highlights", href: "/bhutan/highlights" },
      { label: "Druk Path Trek",    href: "/bhutan/druk-path"  },
      { label: "Chomolhari Trek",   href: "/bhutan/chomolhari" },
    ],
  },
  { label: "Trekking",     href: "/nepal-trekking" },
  { label: "Tour Packages",href: "/nepal-tours"    },
  { label: "Travel Guide", href: "/travel-guide"   },
  { label: "About Us",     href: "/about"          },
  { label: "Contact",      href: "/contact"        },
];

// ─── Social ───────────────────────────────────────────────────────────────────

export const SOCIAL = {
  facebook:  "https://facebook.com",
  instagram: "https://instagram.com",
  twitter:   "https://twitter.com",
  linkedin: "https://linkedin.com",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Format a date string like "2026-03-20" → "20 Mar, 2026" */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day:   "2-digit",
    month: "short",
    year:  "numeric",
  });
}

/** Format price → "US $1,525" */
export function formatPrice(usd: number): string {
  return `US $${usd.toLocaleString("en-US")}`;
}