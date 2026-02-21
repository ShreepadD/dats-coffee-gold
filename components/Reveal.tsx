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
  as?: keyof JSX.IntrinsicElements;
}

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
  const ref = useRef<HTMLElement | null>(null);

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