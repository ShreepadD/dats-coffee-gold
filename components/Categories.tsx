"use client";

import Reveal from "@/components/Reveal";
import { CATEGORIES } from "@/lib/constants";

// 📸 Image guide (each 800×1000px portrait):
//   /public/images/cat-coffee.jpg  → Espresso / latte close-up
//   /public/images/cat-food.jpg    → Avocado toast / sandwich plated
//   /public/images/cat-sweets.jpg  → Brownie / waffle / cake slice
//   /public/images/cat-drinks.jpg  → Smoothie / cold drink with garnish

export default function Categories() {
  return (
    <section id="categories" className="bg-parchment-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <Reveal className="mb-16 flex flex-col items-center text-center">
          <span className="eyebrow">What We Serve</span>
          <h2 className="heading-lg mt-3">Crafted to Delight</h2>
          <span className="gold-rule mx-auto" />
          <p className="mt-5 text-espresso-400 text-sm sm:text-base font-body max-w-md leading-relaxed">
            Every item made with intention — from your first espresso to the last crumb of brownie.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} delayClass={`reveal-delay-${i + 1}`}>
              <article className="group relative rounded-2xl overflow-hidden shadow-warm-md hover:shadow-warm-xl transition-shadow duration-500 cursor-pointer">

                {/* Image (4:5 portrait) */}
                <div className="aspect-[4/5] relative overflow-hidden">

                  {/*
                    ✅ When your image is ready, replace the placeholder div below with:
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-108"
                    />
                  */}
                  <img
  src={cat.image}
  alt={cat.title}
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.08]"
/>

                  {/* Gradient overlay — lifts on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/95 via-espresso-900/30 to-transparent transition-opacity duration-500" />

                  {/* Hover overlay tint */}
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/8 transition-colors duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-white font-bold text-lg leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-espresso-100/65 text-xs font-body mt-1 leading-snug">
                      {cat.desc}
                    </p>

                    {/* Animated arrow on hover */}
                    <div className="mt-3 flex items-center gap-1.5 text-gold text-xs font-body font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out-expo">
                      Explore
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
