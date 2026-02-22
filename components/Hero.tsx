"use client";

import { useEffect, useRef } from "react";
import { HERO, SITE } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// Hero — Gold Tier
// ─────────────────────────────────────────────────────────────────────────────
// 📸 Fallback image:  /public/images/hero.jpg    (1920×1080px minimum)
// 🎬 Optional video:  /public/videos/hero.mp4    (set HERO.videoEnabled = true)
//
// The parallax moves the bg layer at 35% of scroll speed.
// It uses requestAnimationFrame for 60fps performance.
// Automatically disabled for users who prefer reduced motion.
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const bgRef    = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);

  // ── Parallax ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const bg = bgRef.current;
    if (!bg) return;

    let ticking = false;

    const update = () => {
      if (bg) bg.style.transform = `translate3d(0, ${window.scrollY * 0.38}px, 0) scale(1.02)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Initial
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden grain"
      aria-label="Hero section"
    >
      {/* ─── Background layer (parallax) ───────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <div ref={bgRef} className="absolute inset-[-18%] will-change-transform">

        
          
  {/* lines ~63–73 — FORCE VIDEO */}
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover md:object-contain bg-espresso-950 z-0"
  aria-hidden="true"
>
  <source src="/videos/coffee_filling_video_Header.mp4" type="video/mp4" />
</video>

        </div>

        {/* Multi-layer gradient for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/45 md:from-espresso-900/60 via-espresso-900/20 md:via-espresso-900/30 to-transparent" />
<div className="absolute inset-0 bg-gradient-to-t from-espresso-900/40 md:from-espresso-900/50 via-transparent to-transparent" />

        {/* Warm vignette */}
        <div
          className="absolute inset-0"
          style={{
background: "radial-gradient(ellipse 70% 80% at 20% 60%, transparent 50%, rgba(28,15,7,0.22) 100%)",
          }}
        />
      </div>

      {/* ─── Content ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-24 pt-40 md:pt-48">
        <div className="max-w-xl">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm"
            style={{ animationDelay: "0s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-white/80 text-xs font-body font-semibold tracking-[0.2em] uppercase">
              {SITE.type} · {SITE.tagline}
            </span>
          </div>

          {/* Headline — staggered line animation */}
          <h1 className="font-display font-bold text-white leading-[1.02] mb-6">
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              {HERO.headline.line1}
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              {HERO.headline.line2}
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-gold animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              {HERO.headline.line3}
            </span>
          </h1>

          {/* Sub */}
          <p
            className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-md font-body animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            {HERO.sub}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <a href={HERO.cta.href} className="btn-gold">
              {HERO.cta.label}
              <ArrowRight />
            </a>
            <a
              href={HERO.ctaSecondary.href}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-body font-semibold text-sm border-b border-white/30 hover:border-white transition-all duration-300 pb-0.5"
            >
              {HERO.ctaSecondary.label}
            </a>
          </div>

          {/* Social proof pills */}
          <div
            className="flex flex-wrap gap-2.5 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            {HERO.pills.map((pill) => (
              <span
                key={pill.label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 text-white/85 text-xs font-body font-medium px-3.5 py-2 rounded-full hover:bg-white/15 transition-colors duration-300"
              >
                <span className="text-sm">{pill.icon}</span>
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Scroll indicator ───────────────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-white/30 text-[9px] font-body tracking-[0.35em] uppercase">Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-float" />
      </div>

      {/* ─── Bottom edge fade ───────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment-100 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

// ── Hero background image component ───────────────────────────────────────────
// function HeroImage() {
//   return (
//     <img
//       src="/images/hero.jpg"
//       alt=""
//       className="absolute inset-0 w-full h-full object-cover"
//       aria-hidden="true"
//     />
//   );
// }

function ArrowRight() {
  return (
    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
