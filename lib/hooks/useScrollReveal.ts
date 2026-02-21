"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  /** Fraction of element visible before triggering (0–1). Default: 0.15 */
  threshold?: number;
  /** Delay before animation fires (ms). Default: 0 */
  delay?: number;
  /** Only fire once (default: true) */
  once?: boolean;
  /** Root margin offset. Default: "0px" */
  rootMargin?: string;
}

/**
 * useScrollReveal
 * Returns [ref, isVisible] — attach `ref` to your element.
 * When the element enters the viewport, `isVisible` flips to `true`.
 *
 * Example:
 *   const [ref, visible] = useScrollReveal({ threshold: 0.2, delay: 100 });
 *   <div ref={ref} className={visible ? "animate-fade-up" : "opacity-0"} />
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): [React.RefObject<T>, boolean] {
  const { threshold = 0.15, delay = 0, once = true, rootMargin = "0px" } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeout: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            timeout = setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      clearTimeout(timeout);
    };
  }, [threshold, delay, once, rootMargin]);

  return [ref, isVisible];
}

/**
 * revealClass — utility to get transition class string based on visibility.
 * Keeps JSX clean.
 */
export function revealClass(
  visible: boolean,
  visibleClass = "opacity-100 translate-y-0",
  hiddenClass = "opacity-0 translate-y-7"
): string {
  return `transition-all duration-700 ease-out-expo ${visible ? visibleClass : hiddenClass}`;
}
