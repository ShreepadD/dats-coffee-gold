"use client";

import Reveal from "@/components/Reveal";
import { FEATURES } from "@/lib/constants";

const ICONS: Record<string, React.ReactElement> = {
  wifi: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  paw: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.5 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm15 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM7 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm10 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-5 1.5c-3.5 0-6.5 2.5-6.5 5.5 0 1.5 2 2.5 3.5 2.5l3-2 3 2c1.5 0 3.5-1 3.5-2.5 0-3-3-5.5-6.5-5.5z" />
    </svg>
  ),
  leaf: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8zM12 22V12" />
    </svg>
  ),
  plug: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M9 3v4m6-4v4M9 7h6l1 5H8L9 7zm-1 5v2a4 4 0 008 0v-2M12 17v4" />
    </svg>
  ),
};

export default function Features() {
  return (
    <section className="bg-espresso-800 py-20 px-6 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_#C8922A_1px,_transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <Reveal className="text-center mb-14">
          <span className="eyebrow text-gold-light">Why DATS</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
            Built for the Way You Work
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delayClass={`reveal-delay-${i + 1}`}
              className="group"
            >
              <div
                className="
                  h-full rounded-2xl border border-espresso-600/40
                  bg-espresso-700/50 hover:bg-espresso-700/80
                  p-7 flex flex-col gap-5
                  transition-all duration-500 ease-out-expo
                  hover:-translate-y-2 hover:border-gold/30
                  hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]
                  cursor-default
                "
              >
                {/* Icon container */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center text-gold transition-all duration-300 group-hover:scale-110">
                  {ICONS[f.icon]}
                </div>

                {/* Sub-label */}
                <p className="text-gold-pale/60 text-xs font-body font-semibold tracking-widest uppercase">
                  {f.sub}
                </p>

                {/* Title + desc */}
                <div>
                  <h3 className="font-display text-white text-xl font-semibold mb-2 group-hover:text-gold-pale transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-espresso-200/60 text-sm font-body leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="w-0 h-px bg-gold transition-all duration-500 ease-out-expo group-hover:w-full mt-auto" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
