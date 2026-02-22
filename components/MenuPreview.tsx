"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { MENU } from "@/lib/constants";

export default function MenuPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="menu" className="bg-espresso-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <Reveal className="mb-14 flex flex-col items-center text-center gap-4">
  <span className="eyebrow mb-3">Our Menu</span>

  <h2 className="heading-lg mb-6">
    Made with Love
  </h2>

  <span className="gold-rule mx-auto mb-6" />

  <p className="text-espresso-400 text-sm sm:text-base font-body max-w-md leading-relaxed">
    A curated vegetarian selection. Freshly prepared, thoughtfully crafted.
    Full menu available at the café.
  </p>
</Reveal>

        {/* Category Tabs */}
<div className="flex justify-center gap-3 sm:gap-6 mb-10">
  {MENU.map((section, index) => (
    <button
      key={section.category}
      onClick={() => setActiveIndex(index)}
      className={`
        relative px-5 py-2 font-body text-sm sm:text-base transition-all
        ${activeIndex === index
          ? "text-espresso-900 font-semibold"
          : "text-espresso-400 hover:text-espresso-700"}
      `}
    >
      {section.category}

      {/* Gold underline */}
      {activeIndex === index && (
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gold rounded-full" />
      )}
    </button>
  ))}
</div>

{/* Active Menu Panel */}
<Reveal key={MENU[activeIndex].category}>
  <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-warm-lg overflow-hidden">
    
    {/* Header */}
    <div className="px-7 pt-7 pb-5 border-b border-parchment-200 text-center">
      <h3 className="font-display text-2xl font-bold text-espresso-700">
        {MENU[activeIndex].category}
      </h3>
    </div>

    {/* Items */}
    <ul className="px-7 py-6 space-y-5">
      {MENU[activeIndex].items.map((item) => (
        <li
          key={item.name}
          className="border-b border-parchment-200/60 last:border-0 pb-4 last:pb-0"
        >
          <p className="font-body font-semibold text-espresso-800">
            {item.name}
          </p>
          <p className="text-espresso-400 text-sm mt-1">
            {item.note}
          </p>
        </li>
      ))}
    </ul>
  </div>
</Reveal>

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
