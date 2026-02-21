// app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// DATS Coffee — Gold Edition
// Single-page layout. Sections load top-to-bottom with scroll-reveal.
// ─────────────────────────────────────────────────────────────────────────────
import Header      from "@/components/Header";
import Hero        from "@/components/Hero";
import Features    from "@/components/Features";
import Categories  from "@/components/Categories";
import MenuPreview from "@/components/MenuPreview";
import Gallery     from "@/components/Gallery";
import Reviews     from "@/components/Reviews";
import Contact     from "@/components/Contact";
import Footer      from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed sticky header (transparent → opaque on scroll) */}
      <Header />

      <main id="main-content">
        {/* 1. Hero — parallax bg, optional video, animated headline */}
        <Hero />

        {/* 2. Feature strip — 4 USP cards on dark espresso bg */}
        <Features />

        {/* 3. Menu categories — 4 portrait image cards with hover zoom */}
        <Categories />

        {/* 4. Menu preview — 3-column static menu */}
        <MenuPreview />

        {/* 5. Gallery — hover zoom + caption reveal */}
        <Gallery />

        {/* 6. Reviews — staggered sequential animation */}
        <Reviews />

        {/* 7. Contact + Map embed */}
        <Contact />
      </main>

      {/* Footer — dark, 4-column with social links */}
      <Footer />
    </>
  );
}
