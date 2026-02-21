"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  visibleClass?: string;
  baseClass?: string;
  delayClass?: string;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Reveal — scroll-triggered reveal wrapper
 * Safe for production (no polymorphic ref issues)
 */
export default function Reveal({
  children,
  className = "",
  visibleClass = "is-visible",
  baseClass = "reveal",
  delayClass = "",
  threshold = 0.12,
  rootMargin = "0px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(visibleClass);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, visibleClass]);

  return (
    <div
      ref={ref}
      className={`${baseClass} ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}