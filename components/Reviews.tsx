"use client";

import Reveal from "@/components/Reveal";
import { REVIEWS, CONTACT } from "@/lib/constants";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-parchment-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <Reveal className="mb-16 text-center">
          <span className="eyebrow">Kind Words</span>
          <h2 className="heading-lg mt-3">What Our Guests Say</h2>
          <span className="gold-rule mx-auto" />

          {/* Aggregate rating */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <Stars count={5} size="lg" />
            <span className="font-body font-semibold text-espresso-600 text-sm">
              {CONTACT.rating} out of 5 &mdash; {CONTACT.reviews} reviews
            </span>
          </div>
        </Reveal>

        {/* Cards — staggered animation sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <Reveal
              key={review.id}
              delayClass={`reveal-delay-${i + 1}`}
              threshold={0.1}
            >
              <article
                className="
                  group h-full bg-white rounded-3xl p-8
                  shadow-warm-sm hover:shadow-warm-lg
                  border border-transparent hover:border-gold/20
                  transition-all duration-500 ease-out-expo
                  hover:-translate-y-2
                  flex flex-col gap-6
                "
              >
                {/* Large quote mark */}
                <div
                  className="font-display text-[80px] leading-none text-parchment-300 group-hover:text-gold-pale transition-colors duration-500 select-none h-10 flex items-start"
                  aria-hidden="true"
                >
                  "
                </div>

                {/* Review text */}
                <blockquote className="font-body text-espresso-600 text-sm leading-relaxed flex-1">
                  {review.text}
                </blockquote>

                {/* Rating */}
                <Stars count={review.rating} size="sm" />

                {/* Footer */}
                <footer className="flex items-center gap-4 pt-5 border-t border-parchment-200">
                  {/* Avatar */}
                  <div
                    className="
                      w-11 h-11 rounded-full bg-espresso-700
                      group-hover:bg-gold transition-colors duration-500
                      flex items-center justify-center
                      text-white font-body font-bold text-sm shrink-0
                    "
                  >
                    {review.initials}
                  </div>

                  <div className="min-w-0">
                    <p className="font-body font-semibold text-espresso-800 text-sm truncate">
                      {review.name}
                    </p>
                    <p className="font-body text-espresso-400 text-xs mt-0.5 truncate">
                      {review.role} · {review.date}
                    </p>
                  </div>

                  {/* Google G icon */}
                  <div className="ml-auto shrink-0 text-espresso-200 group-hover:text-gold transition-colors duration-500">
                    <GoogleIcon />
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="text-center mt-12" delayClass="reveal-delay-4">
          <a
            href={CONTACT.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline group"
          >
            Read All Reviews on Google
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────
function Stars({ count, size = "sm" }: { count: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "w-5 h-5" : "w-4 h-4";
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${cls} ${i < count ? "text-gold" : "text-parchment-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
