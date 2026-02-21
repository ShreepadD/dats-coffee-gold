import { SITE, CONTACT, NAV } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso-900 text-espresso-200" role="contentinfo">

      {/* Gold shimmer rule */}
      <div className="h-px shimmer-bar" />

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 xl:gap-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <span className="font-display text-3xl font-bold text-white">{SITE.name.split(" ")[0]}</span>
              <span className="block text-[9px] tracking-[0.45em] uppercase font-body font-semibold text-gold-muted mt-[-2px]">
                Coffee
              </span>
            </div>
            <p className="text-espresso-400 text-sm font-body leading-relaxed max-w-[180px]">
              {SITE.type} · Pet-friendly · Wi-Fi ready. A premium café in Magarpatta, Pune.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                { label:"Instagram", href: CONTACT.social.instagram, icon: <IconInsta /> },
                { label:"Facebook",  href: CONTACT.social.facebook,  icon: <IconFb />    },
                { label:"Zomato",    href: CONTACT.social.zomato,    icon: <IconZomato /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-espresso-700 hover:bg-gold flex items-center justify-center text-espresso-300 hover:text-white transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-body font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-espresso-400 hover:text-gold font-body text-sm transition-colors duration-300 nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-espresso-400 hover:text-gold font-body text-sm transition-colors duration-300 nav-link">
                  Reserve a Spot
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-body font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g,"")}`} className="text-espresso-400 hover:text-white transition-colors duration-300">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="text-espresso-400 hover:text-white transition-colors duration-300 break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-espresso-500 text-xs leading-relaxed pt-1">
                {CONTACT.hours.weekday}<br />
                {CONTACT.hours.weekend}
              </li>
            </ul>
          </div>

          {/* Rating */}
          <div>
            <h3 className="text-white font-body font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              Our Rating
            </h3>
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-espresso-300 font-body text-sm font-semibold">{CONTACT.rating} / 5</p>
            <p className="text-espresso-500 font-body text-xs">{CONTACT.reviews} Google reviews</p>

            <a
              href={CONTACT.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-gold hover:text-gold-light text-xs font-body font-semibold transition-colors duration-300 underline underline-offset-2"
            >
              Leave a review
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-espresso-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body text-espresso-600">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Built with ☕ for Magarpatta, Pune.</p>
        </div>
      </div>
    </footer>
  );
}

// ── Social icons ───────────────────────────────────────────────────────────────
function IconInsta() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
function IconFb() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function IconZomato() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13.5h-9a.5.5 0 010-1h9a.5.5 0 010 1zm1-3h-11a.5.5 0 010-1h11a.5.5 0 010 1zm-1.5-3h-8a.5.5 0 010-1h8a.5.5 0 010 1z" />
    </svg>
  );
}
