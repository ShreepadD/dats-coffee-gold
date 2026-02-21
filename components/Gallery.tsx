"use client";

import Reveal from "@/components/Reveal";
import { GALLERY } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// Gallery — Gold Tier
// ─────────────────────────────────────────────────────────────────────────────
// 📸 Images → /public/images/:
//   gallery-interior.jpg  1200×900  Cozy café interior — wide slot (row 1, col 1-2)
//   gallery-latte.jpg     600×600   Latte art close-up
//   gallery-food.jpg      600×600   Plated food / avocado toast
//   gallery-pet.jpg       600×600   Dog or cat at the café
//   gallery-desk.jpg      1200×600  Laptop + coffee work setup — wide slot (row 2)
//   gallery-cold.jpg      600×600   Cold brew in frosted glass
//
// Hover effects:
//   • 8% scale zoom on image
//   • Dark scrim fades in
//   • Caption slides up from bottom
// ─────────────────────────────────────────────────────────────────────────────

const EMOJIS: Record<string, string> = {
  "gallery-interior.jpg": "🏠",
  "gallery-latte.jpg":    "☕",
  "gallery-food.jpg":     "🥑",
  "gallery-pet.jpg":      "🐾",
  "gallery-desk.jpg":     "💻",
  "gallery-cold.jpg":     "🧊",
};

export default function Gallery() {
  return (
    <section id="gallery" className="bg-parchment-200 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <Reveal className="mb-16 text-center">
          <span className="eyebrow">Moments at DATS</span>
          <h2 className="heading-lg mt-3">A Peek Inside</h2>
          <span className="gold-rule mx-auto" />
          <p className="mt-5 text-espresso-400 text-sm font-body max-w-xs mx-auto leading-relaxed">
            From the first light of morning to the warm glow of evening.
          </p>
        </Reveal>

        {/* Grid Layout:
            Row 1: [wide 2-col] [1-col] [1-col]
            Row 2: [wide 2-col] [1-col]
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] sm:auto-rows-[240px] gap-3 sm:gap-4">
          {GALLERY.map((item, i) => {
            const filename = item.src.replace("/images/", "");
            const emoji    = EMOJIS[filename] ?? "🖼️";
            const isWide   = item.wide;
            const delay    = Math.min(i + 1, 4);

            return (
              <Reveal
                key={item.id}
                delayClass={`reveal-delay-${delay}`}
                className={isWide ? "col-span-2" : "col-span-1"}
              >
                <figure className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer shadow-warm-sm hover:shadow-warm-lg transition-shadow duration-500">

                  {/* Image area */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/*
                      ✅ When your image is ready, replace the placeholder below with:
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.08]"
                      />
                    */}
                    <div className="absolute inset-0 img-placeholder transition-transform duration-700 ease-out-expo group-hover:scale-[1.08]">
                      <div className="flex flex-col items-center gap-2 opacity-50">
                        <span className="text-4xl">{emoji}</span>
                        <span className="text-[10px] font-mono text-espresso-300">{filename}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover scrim */}
                  <div className="absolute inset-0 bg-espresso-900/0 group-hover:bg-espresso-900/50 transition-colors duration-500" />

                  {/* Gold accent corner */}
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500 rounded-sm" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500 rounded-sm" />

                  {/* Caption — slides up on hover */}
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-expo">
                    <p className="text-white font-body text-xs font-medium leading-snug">
                      {item.alt}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
