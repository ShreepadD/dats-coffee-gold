"use client";
import { useState, useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import { MENU } from "@/lib/constants";
const MENU_BACKGROUNDS: Record<string, string> = {
  Coffee: "/images/menu/coffee.jpg",
  Bites: "/images/menu/bites.jpg",
  Sweets: "/images/menu/sweets.jpg",
};

const MENU_OVERLAYS: Record<string, string> = {
  Coffee: "from-black/70 via-black/40 to-black/20",
  Bites: "from-emerald-900/70 via-emerald-900/40 to-black/20",
  Sweets: "from-rose-900/70 via-rose-900/40 to-black/20",
};

export default function MenuPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
const userInteractedRef = useRef(false);

useEffect(() => {
  if (userInteractedRef.current) return;

  autoPlayRef.current = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % MENU.length);
  }, 4000); // 4 seconds per category

  return () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };
}, []);

  console.log(
  "ACTIVE:",
  MENU[activeIndex].key,
  MENU_BACKGROUNDS[MENU[activeIndex].key]
);
  return (

<section id="menu" className="bg-espresso-50 px-6 pt-2 pb-24 md:pt-6 md:pb-32">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <Reveal className="mb-8 flex flex-col items-center text-center gap-2">
  

  <h2 className="heading-lg">
  Made with Love
</h2>

<span className="gold-rule mx-auto mt-3 mb-6" />

</Reveal>

        {/* Category Tabs */}
<div className="flex justify-center gap-3 sm:gap-6 mb-10">
  {MENU.map((section, index) => (
    <button
      key={section.category}
      onClick={() => {
  userInteractedRef.current = true;
  if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  setActiveIndex(index);
}}
      className={`
        relative px-5 py-2 font-body text-sm sm:text-base transition-all
        ${activeIndex === index
  ? "text-espresso-900 font-semibold scale-105"
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

<div
onMouseEnter={() => {
    userInteractedRef.current = true;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }}
  className="
  relative
  max-w-2xl
  min-h-[420px]
  md:min-h-[480px]
  mx-auto
  rounded-[32px]
  overflow-hidden
  group
">


  {/* Background image layer */}

 {/* Background image layer */}
<div
className="
  absolute inset-0 bg-cover bg-center
  scale-110
  animate-menu-pan
  transition-transform duration-[1200ms] ease-out
  group-hover:scale-125
"
  style={{
  backgroundImage: `url(${MENU_BACKGROUNDS[
    MENU[activeIndex].category.replace(/[^A-Za-z]/g, "")
  ]})`,
}}
/>

{/* Dark overlay */}

<div
  className={`absolute inset-0 bg-gradient-to-t ${
    MENU_OVERLAYS[MENU[activeIndex].category.replace(/[^A-Za-z]/g, "")]
  }`}
/>
 
    {/* Dark overlay */}


    {/* Content */}
<div
  className="
    relative z-10
    animate-[fadeSlideIn_0.45s_ease-out]
  "
>
      {/* Header */}
      {/* <div className="px-10 pt-10 pb-7 border-b border-white/25 text-center">
        <h3 className="font-display text-2xl font-bold text-white">
          {MENU[activeIndex].category}
        </h3>
      </div> */}

      {/* Items */}
      <ul className="px-10 py-8 space-y-6">
        {MENU[activeIndex].items.map((item) => (
          <li
  key={item.name}
  className="pb-6 last:pb-0"
>
            <p className="font-body font-semibold text-white">
              {item.name}
            </p>
            <p className="text-white/70 text-sm mt-1">
              {item.note}
            </p>
          </li>
        ))}
      </ul>

    </div>
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
