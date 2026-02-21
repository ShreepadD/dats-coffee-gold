"use client";

import { useEffect, useRef } from "react";

/**
 * useParallax
 * Attaches a CSS transform parallax to a target element based on scroll position.
 * Uses requestAnimationFrame for silky 60fps performance.
 * Respects prefers-reduced-motion.
 *
 * @param speed  Parallax speed factor. 0.3 = element moves at 30% of scroll speed.
 *               Positive = moves upward as you scroll down.
 * @returns      A ref to attach to your parallax target element.
 *
 * Example:
 *   const bgRef = useParallax(0.35);
 *   <div ref={bgRef} className="absolute inset-0" />
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  speed: number = 0.35
): React.RefObject<T> {
  const ref = useRef<T>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Respect user accessibility preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = ref.current;
    if (!el) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      const offset = scrollY * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
      ticking = false;
      lastScrollY = scrollY;
    };

    const onScroll = () => {
      if (!ticking) {
        rafId.current = requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Initial position
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed]);

  return ref;
}
