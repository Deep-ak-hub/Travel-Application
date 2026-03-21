import { useState, useEffect, useRef } from "react";
import { NAV_LINKS, CONTACT, SITE_NAME } from "../config/constants.ts";
import type { NavLink } from "../config/constants.ts";
import Button from "./Button";
import { Link } from "react-router-dom";
import Logo from "./Logo.tsx";

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Desktop dropdown for nav links with children */
function DropdownMenu({ items }: { items: NavLink["children"] }) {
  if (!items?.length) return null;
  return (
    <ul className="absolute top-full left-0 mt-2 w-52 bg-background-light border border-border rounded-(--radius) shadow-xl py-1.5 z-50">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            to={item.href}
            className="block px-4 py-2 text-sm text-text hover:bg-border hover:text-primary transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Single desktop nav item — shows dropdown on hover */
function NavItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(link.children?.length);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={link.href}
        className="flex items-center gap-1 text-sm font-medium text-text hover:text-primary transition-colors py-1"
      >
        {link.label}
        {hasChildren && (
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>
      {hasChildren && open && <DropdownMenu items={link.children} />}
    </div>
  );
}

/** Mobile accordion item */
function MobileNavItem({ link }: { link: NavLink }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = Boolean(link.children?.length);

  return (
    <li>
      <div className="flex items-center justify-between">
        <Link
          to={link.href}
          className="flex-1 py-3 text-sm font-medium text-text hover:text-primary transition-colors"
        >
          {link.label}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 text-text-muted hover:text-primary transition-colors"
            aria-label="Toggle submenu"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      {hasChildren && expanded && (
        <ul className="pl-4 border-l border-border mb-1">
          {link.children!.map((child) => (
            <li key={child.href}>
              <Link
                to={child.href}
                className="block py-2 text-sm text-text-muted hover:text-primary transition-colors"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Add shadow + bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Top info bar ───────────────────────────────────────── */}
      <div className="hidden md:block bg-background-dark text-text-light text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-text-light/70">
            🌏 Local Himalayan experts — serving trekkers since 2009
          </span>
          <Link
            to={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-secondary-light hover:text-secondary transition-colors font-medium"
          >
            <span>📞</span>
            {CONTACT.phone}
            <span className="text-text-light/50 font-normal">· WhatsApp 24/7</span>
          </Link>
        </div>
      </div>

      {/* ── Main navbar ────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background-light/95 backdrop-blur-md shadow-md border-b border-border"
            : "bg-background-light border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="px-3">
                  <NavItem link={link} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" href={CONTACT.whatsapp}>
              WhatsApp
            </Button>
            <Button variant="secondary" size="sm" href="/contact">
              Book a Trip
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-text hover:bg-border transition-colors"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ──────────────────────────────────────── */}
      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-background-light z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <span className="font-bold text-text">{SITE_NAME}</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-md text-text-muted hover:bg-border transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-5 py-2">
          <ul className="divide-y divide-border">
            {NAV_LINKS.map((link) => (
              <MobileNavItem key={link.href} link={link} />
            ))}
          </ul>
        </nav>

        {/* Drawer footer CTAs */}
        <div className="px-5 py-4 border-t border-border flex flex-col gap-2.5">
          <Button variant="secondary" fullWidth href="/contact">
            Book a Trip
          </Button>
          <Button variant="outline" fullWidth href={CONTACT.whatsapp}>
            📞 {CONTACT.phone}
          </Button>
        </div>
      </div>
    </>
  );
}