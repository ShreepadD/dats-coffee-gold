# ☕ DATS Coffee — Gold Edition

Premium Next.js 14 + Tailwind CSS café website with scroll animations, parallax hero, and video support.

---

## 🚀 Quick Start

```bash
cd dats-coffee-gold
npm install
npm run dev
# → http://localhost:3000
```

**Requirements:** Node.js 18.17+ · npm 9+

---

## 📁 Project Structure

```
dats-coffee-gold/
│
├── app/
│   ├── globals.css        ← Design tokens, animations, utility classes
│   ├── layout.tsx         ← Root layout (Cormorant Garamond + DM Sans)
│   └── page.tsx           ← Main page — imports all sections
│
├── components/
│   ├── Reveal.tsx         ← Scroll-reveal wrapper (IntersectionObserver)
│   ├── Header.tsx         ← Sticky header: shrinks on scroll, nav highlights active section
│   ├── Hero.tsx           ← Parallax bg + optional video, animated headline
│   ├── Features.tsx       ← 4-card USP strip (dark bg, hover lift + gold accent line)
│   ├── Categories.tsx     ← 4 portrait image cards with hover zoom + overlay reveal
│   ├── MenuPreview.tsx    ← 3-column static menu with price badge hover states
│   ├── Gallery.tsx        ← CSS grid with hover zoom, corner accents, caption slide-up
│   ├── Reviews.tsx        ← Staggered review cards with animated gold reveal
│   ├── Contact.tsx        ← Address + map embed + USP chips
│   └── Footer.tsx         ← Dark 4-column footer with shimmer rule
│
├── lib/
│   ├── constants.ts       ← ✏️  ALL editable content — edit here only
│   └── hooks/
│       ├── useScrollReveal.ts ← IntersectionObserver hook (programmatic use)
│       └── useParallax.ts     ← rAF-based parallax hook
│
├── public/
│   ├── images/            ← 📸 Drop your photos here (11 slots)
│   └── videos/
│       └── README.txt     ← 🎬 Video setup instructions
│
├── tailwind.config.js     ← Full brand design system
├── tsconfig.json
└── package.json
```

---

## ✏️ Editing Content

**Everything lives in `lib/constants.ts` — one file, all content.**

| What                       | Object / Key in constants.ts        |
|---------------------------|-------------------------------------|
| Business name, tagline     | `SITE`                              |
| Phone, email               | `CONTACT`                           |
| Address & hours            | `CONTACT.address`, `CONTACT.hours`  |
| Google Maps embed URL      | `CONTACT.address.embedUrl`          |
| Social media links         | `CONTACT.social`                    |
| Google review link         | `CONTACT.reviewUrl`                 |
| Hero headline & sub        | `HERO`                              |
| Enable/disable video       | `HERO.videoEnabled`                 |
| Feature cards              | `FEATURES`                          |
| Menu categories            | `CATEGORIES`                        |
| Menu items & prices        | `MENU`                              |
| Gallery images & captions  | `GALLERY`                           |
| Customer reviews           | `REVIEWS`                           |
| Navigation links           | `NAV`                               |

---

## 📸 Adding Real Photos

Drop your images into `/public/images/`. Then in each component, find the placeholder comment and swap it.

### Image Specs

| File                       | Slot              | Recommended Size  | Content                        |
|---------------------------|-------------------|-------------------|--------------------------------|
| `hero.jpg`                | Hero background   | 1920×1080px       | Wide café interior, warm tone  |
| `cat-coffee.jpg`          | Category card     | 800×1000px        | Espresso / latte close-up      |
| `cat-food.jpg`            | Category card     | 800×1000px        | Avocado toast / plated food    |
| `cat-sweets.jpg`          | Category card     | 800×1000px        | Brownie / waffle / cake slice  |
| `cat-drinks.jpg`          | Category card     | 800×1000px        | Smoothie / cold drink          |
| `gallery-interior.jpg`    | Gallery (2×2)     | 1200×900px        | Cozy café interior (large)     |
| `gallery-latte.jpg`       | Gallery           | 600×600px         | Latte art                      |
| `gallery-food.jpg`        | Gallery           | 600×600px         | Food close-up                  |
| `gallery-pet.jpg`         | Gallery           | 600×600px         | Pet in café                    |
| `gallery-desk.jpg`        | Gallery (2×1)     | 1200×600px        | Work setup (wide slot)         |
| `gallery-cold.jpg`        | Gallery           | 600×600px         | Cold brew glass                |

### How to activate an image (example — Hero)

In `components/Hero.tsx`, find:

```tsx
{/* ✅ When /public/images/hero.jpg is ready:
  Replace this placeholder div with:
  <img src="/images/hero.jpg" ... />
*/}
<div className="absolute inset-0 img-placeholder">...</div>
```

Replace the `<div>` with:

```tsx
<img
  src="/images/hero.jpg"
  alt="DATS Coffee warm interior"
  className="absolute inset-0 w-full h-full object-cover"
  aria-hidden="true"
/>
```

Or with Next.js Image (add `import Image from "next/image"` at the top):

```tsx
<Image src="/images/hero.jpg" alt="..." fill className="object-cover" priority quality={90} />
```

The same pattern applies in `Categories.tsx` and `Gallery.tsx`.

---

## 🎬 Enabling the Hero Video

1. **Add your video** to `/public/videos/hero.mp4`
   - Format: MP4, H.264 codec
   - Duration: 10–20 seconds (loops seamlessly)
   - Resolution: 1920×1080px
   - Audio: muted (required for autoplay)
   - File size: aim for < 8 MB

2. **Enable it** in `lib/constants.ts`:
   ```ts
   export const HERO = {
     videoEnabled: true,   // ← change from false to true
     video: "/videos/hero.mp4",
     // ...
   }
   ```

The fallback image (`/public/images/hero.jpg`) is always shown when the video is disabled or can't be played.

---

## ✨ Gold Tier Effects

| Effect                        | Implementation                             | File                        |
|------------------------------|--------------------------------------------|-----------------------------|
| Parallax hero                 | `requestAnimationFrame` scroll listener   | `components/Hero.tsx`       |
| Scroll-reveal (all sections)  | `IntersectionObserver` via `Reveal.tsx`   | `components/Reveal.tsx`     |
| Staggered card animations     | CSS `transition-delay` on `.reveal-delay-N`| `app/globals.css`           |
| Animated nav underline        | CSS `::after` + width transition           | `app/globals.css`           |
| Active nav section tracking   | `IntersectionObserver` in Header           | `components/Header.tsx`     |
| Header shrink on scroll       | `scrollY` state + Tailwind classes         | `components/Header.tsx`     |
| Gallery zoom + caption        | CSS `scale` + `translateY` transitions     | `components/Gallery.tsx`    |
| Card hover lift               | `hover:-translate-y-2` + shadow            | Multiple components         |
| Gold hover accent line        | `w-0 → w-full` width transition            | `components/Features.tsx`   |
| Hero headline stagger         | `animation-delay` inline styles            | `components/Hero.tsx`       |
| Review card sequence          | `reveal-delay-N` CSS classes               | `components/Reviews.tsx`    |
| Gold shimmer footer rule      | `@keyframes shimmer` + `background-size`   | `app/globals.css`           |
| Grain texture overlay         | SVG filter via `::after` pseudo-element    | `app/globals.css`           |
| Smooth scroll + offset        | `scroll-behavior: smooth` + `scroll-padding-top` | `app/globals.css`    |
| Reduced-motion safe           | `prefers-reduced-motion` check in parallax | `lib/hooks/useParallax.ts`  |

---

## 🎨 Design System

### Fonts
| Font                | Role         | Loaded via          |
|--------------------|--------------|---------------------|
| Cormorant Garamond | Headings     | `next/font/google`  |
| DM Sans            | Body / UI    | `next/font/google`  |

### Colors
| Token              | Hex       | Usage                      |
|-------------------|-----------|----------------------------|
| `parchment-100`   | `#F7F0E3` | Page background            |
| `espresso-800`    | `#1C0F07` | Primary text               |
| `espresso-800` bg | `#1C0F07` | Dark sections              |
| `gold`            | `#C8922A` | Accents, CTAs, stars       |
| `gold-light`      | `#E5B563` | Lighter accent             |
| `sage`            | `#7A8C6E` | Occasional supporting tone |

### Easings (CSS vars)
```css
--ease-expo:  cubic-bezier(0.16, 1, 0.3, 1)   /* snappy, cinematic */
--ease-quart: cubic-bezier(0.25, 1, 0.5, 1)   /* smooth, natural   */
```

---

## 🌐 Deploy

```bash
# Vercel (recommended, free)
npm i -g vercel && vercel

# Build locally
npm run build && npm start
```

---

## ✅ Pre-launch Checklist

- [ ] Replace all 11 placeholder images in `/public/images/`
- [ ] Update phone, email, address in `lib/constants.ts`
- [ ] Set real Google Maps embed URL
- [ ] Set real Google review link
- [ ] Update social media URLs
- [ ] Replace sample reviews with real ones
- [ ] (Optional) Add hero video + set `videoEnabled: true`
- [ ] Run `npm run build` — verify 0 errors
- [ ] Test mobile (375px viewport)
- [ ] Test `prefers-reduced-motion` (parallax should stop)

---

Built with ☕ for DATS Coffee, Magarpatta, Pune.
