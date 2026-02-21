"use client";

import Reveal from "@/components/Reveal";
import { MENU } from "@/lib/constants";

export default function MenuPreview() {
  return (
    <section id="menu" className="bg-espresso-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <Reveal className="mb-16 flex flex-col items-start md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="eyebrow">Our Menu</span>
            <h2 className="heading-lg mt-3">Made with Love</h2>
            <span className="gold-rule" />
          </div>
          <p className="text-espresso-400 text-sm font-body max-w-sm leading-relaxed">
            A curated vegetarian selection. All prices include taxes. Full menu available at the café.
          </p>
        </Reveal>

        {/* Menu columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
          {MENU.map((section, si) => (
            <Reveal key={section.category} delayClass={`reveal-delay-${si + 1}`}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-warm-sm hover:shadow-warm-md transition-shadow duration-500">

                {/* Category header */}
                <div className="px-7 pt-7 pb-5 border-b border-parchment-200">
                  <h3 className="font-display text-xl font-bold text-espresso-700">
                    {section.category}
                  </h3>
                </div>

                {/* Items */}
                <ul className="px-7 py-5 space-y-5">
                  {section.items.map((item, ii) => (
                    <li
                      key={item.name}
                      className="group flex items-start justify-between gap-4 pb-5 border-b border-parchment-200/60 last:border-0 last:pb-0"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-body font-semibold text-espresso-800 text-sm group-hover:text-gold transition-colors duration-300 leading-snug">
                          {item.name}
                        </p>
                        <p className="text-espresso-400 text-xs font-body mt-0.5 leading-snug">
                          {item.note}
                        </p>
                      </div>

                      {/* Price badge */}
                      <span className="shrink-0 inline-flex items-center bg-parchment-100 group-hover:bg-gold-pale border border-parchment-200 group-hover:border-gold/30 text-espresso-600 group-hover:text-espresso-800 font-body font-semibold text-xs px-3 py-1.5 rounded-full transition-all duration-300">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="text-center mt-12">
          <a href="#contact" className="btn-outline">
            Ask About Daily Specials
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
