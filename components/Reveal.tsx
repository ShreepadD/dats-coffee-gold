"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Extra CSS class when visible. Default: "is-visible" */
  visibleClass?: string;
  /** Base animation class. Default: "reveal" */
  baseClass?: string;
  /** Delay class e.g. "reveal-delay-2" */
  delayClass?: string;
  /** IntersectionObserver threshold. Default: 0.12 */
  threshold?: number;
  /** IntersectionObserver rootMargin. Default: "0px" */
  rootMargin?: string;
  /** Render as a different element. Default: "div" */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Reveal — a scroll-triggered animation wrapper.
 * Adds `is-visible` class when the element enters the viewport.
 * Pair with .reveal and .reveal.is-visible CSS in globals.css.
 *
 * Usage:
 *   <Reveal delayClass="reveal-delay-2">
 *     <p>This fades up when scrolled into view</p>
 *   </Reveal>
 */
export default function Reveal({
  children,
  className = "",
  visibleClass = "is-visible",
  baseClass = "reveal",
  delayClass = "",
  threshold = 0.12,
  rootMargin = "0px",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(visibleClass);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, rootMargin, visibleClass]);

  return (
  <Tag
    ref={ref}
    className={`${baseClass} ${delayClass} ${className}`.trim()}
  >
    {children}
  </Tag>
);
}
