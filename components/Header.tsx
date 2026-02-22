"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV, CONTACT, SITE } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled,   setScrolled]     = useState(false);
  const [activeHash, setActiveHash]   = useState("");

  // Shrink header + darken bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section for nav highlight
  useEffect(() => {
    const sections = NAV.map((n) => n.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveHash(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
  className={`
    fixed top-0 left-0 right-0 z-50
    transition-all duration-500 ease-out-expo
    ${
      mobileOpen
        ? "bg-espresso-900"
        : scrolled
          ? "shadow-warm-md backdrop-blur-md bg-parchment-50/90"
          : "bg-transparent"
    }
  `}
>
      {/* ── Top info bar (hides when scrolled) ────────────────────────────── */}
      <div
        className={`
          bg-espresso-800 text-espresso-100 text-xs
          overflow-hidden transition-all duration-500
          ${scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-center gap-6 sm:gap-10 flex-wrap">
          <span className="flex items-center gap-1.5">
            <IconMapPin />
            {CONTACT.address.line1} — <span className="text-gold-light">{CONTACT.address.landmark}</span>
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <IconClock />
            Mon–Fri 8–10 PM · Sat–Sun 8–11 PM
          </span>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <IconPhone />
            {CONTACT.phone}
          </a>
        </div>
      </div>

      {/* ── Main nav row ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Brand */}
        <Link
          href="/"
          className="group flex flex-col leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
        >
          <span
            className={`
              font-display text-2xl font-bold tracking-tight
              transition-colors duration-300
              ${scrolled ? "text-espresso-800" : "text-white"}
              group-hover:text-gold
            `}
          >
            {SITE.name.split(" ")[0]}
          </span>
          <span
            className={`
              text-[9px] tracking-[0.4em] uppercase font-body font-semibold
              transition-colors duration-300
              ${scrolled ? "text-gold-muted" : "text-gold-pale/70"}
            `}
          >
            Coffee
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {NAV.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`
                nav-link font-body text-sm font-medium tracking-wide
                transition-colors duration-300
                ${activeHash === link.href ? "active text-gold" : ""}
                ${scrolled ? "text-espresso-600 hover:text-espresso-900" : "text-white/85 hover:text-white"}
              `}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className={`
              ml-2 btn-gold text-xs py-2.5 px-6
              ${!scrolled ? "bg-white/10 border border-white/30 hover:bg-gold hover:border-transparent backdrop-blur" : ""}
            `}
          >
            Reserve a Spot
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`
            md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px]
            rounded-lg hover:bg-white/10 transition-all focus:outline-none
          `}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`
                block w-5 h-[1.5px] rounded-full transition-all duration-300
                ${scrolled ? "bg-espresso-800" : "bg-white"}
                ${mobileOpen && i === 0 ? "rotate-45 translate-y-[6.5px]" : ""}
                ${mobileOpen && i === 1 ? "opacity-0 scale-x-0" : ""}
                ${mobileOpen && i === 2 ? "-rotate-45 -translate-y-[6.5px]" : ""}
              `}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
  className={`
    md:hidden overflow-hidden transition-all duration-500 ease-out-expo
    bg-parchment-50 border-t border-parchment-200
    ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
  `}
>
        <nav className="px-6 py-5 flex flex-col gap-4">
          {NAV.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-espresso-700 hover:text-gold font-medium transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-gold justify-center mt-1 text-sm"
          >
            Reserve a Spot
          </a>
        </nav>
      </div>
    </header>
  );
}

// ── Inline icons (no external dependency) ─────────────────────────────────────
function IconMapPin() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 6v6l4 2" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
