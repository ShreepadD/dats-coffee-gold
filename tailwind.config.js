/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Brand Palette ──────────────────────────────────────────────────
      colors: {
        parchment: {
          DEFAULT: "#F7F0E3",
          50:  "#FDFAF4",
          100: "#F7F0E3",
          200: "#EDE0C8",
          300: "#DFC9A5",
        },
        espresso: {
          DEFAULT: "#1C0F07",
          50:  "#F5EDE6",
          100: "#E3C9B3",
          200: "#C49A75",
          300: "#A06B42",
          400: "#7A4A26",
          500: "#5C3318",
          600: "#3E200D",
          700: "#2A1508",
          800: "#1C0F07",
          900: "#110A04",
        },
        gold: {
          DEFAULT: "#C8922A",
          light:   "#E5B563",
          muted:   "#A07222",
          pale:    "#F3DFA8",
        },
        sage:  "#7A8C6E",
        cloud: "#FAF8F4",
      },

      // ── Typography ─────────────────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },

      // ── Spacing & Sizing ───────────────────────────────────────────────
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      // ── Shadows (layered warmth) ───────────────────────────────────────
      boxShadow: {
        "warm-sm": "0 2px 12px 0 rgba(28,15,7,0.06)",
        "warm-md": "0 6px 32px 0 rgba(28,15,7,0.10)",
        "warm-lg": "0 16px 64px 0 rgba(28,15,7,0.14)",
        "warm-xl": "0 24px 80px 0 rgba(28,15,7,0.18)",
        "gold-glow": "0 0 32px 0 rgba(200,146,42,0.18)",
        inner: "inset 0 2px 8px 0 rgba(28,15,7,0.07)",
      },

      // ── Transitions ────────────────────────────────────────────────────
      transitionTimingFunction: {
        "out-expo":   "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart":  "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-sine":"cubic-bezier(0.37, 0, 0.63, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },

      // ── Animation keyframes ────────────────────────────────────────────
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-right": {
          "0%":   { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(200,146,42,0)" },
          "50%":      { boxShadow: "0 0 0 8px rgba(200,146,42,0.12)" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.75s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":    "fade-in 0.6s ease both",
        "slide-right":"slide-right 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "shimmer":    "shimmer 2.5s linear infinite",
        "float":      "float 4s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
