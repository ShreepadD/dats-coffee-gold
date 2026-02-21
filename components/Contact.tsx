"use client";

import Reveal from "@/components/Reveal";
import { CONTACT, SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-espresso-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <Reveal className="mb-16 text-center">
          <span className="eyebrow">Come Say Hello</span>
          <h2 className="heading-lg mt-3">Find {SITE.name}</h2>
          <span className="gold-rule mx-auto" />
          <p className="mt-5 text-espresso-400 text-sm font-body max-w-xs mx-auto leading-relaxed">
            Right in the heart of Magarpatta — easy to find, impossible to leave.
          </p>
        </Reveal>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* ── Left: Contact info card ──────────────────────────────────── */}
          <Reveal className="bg-white rounded-3xl overflow-hidden shadow-warm-md">
            <div className="p-8 space-y-7">
              <InfoRow
                icon={<IconPin />}
                label="Address"
                value={
                  <>
                    {CONTACT.address.line1}<br />
                    {CONTACT.address.line2}
                    <span className="block text-gold font-semibold mt-0.5">{CONTACT.address.landmark}</span>
                  </>
                }
              />
              <div className="h-px bg-parchment-200" />
              <InfoRow
                icon={<IconPhone />}
                label="Phone"
                value={
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="hover:text-gold transition-colors duration-300"
                  >
                    {CONTACT.phone}
                  </a>
                }
              />
              <div className="h-px bg-parchment-200" />
              <InfoRow
                icon={<IconMail />}
                label="Email"
                value={
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-gold transition-colors duration-300 break-all"
                  >
                    {CONTACT.email}
                  </a>
                }
              />
              <div className="h-px bg-parchment-200" />
              <InfoRow
                icon={<IconClock />}
                label="Hours"
                value={
                  <>
                    {CONTACT.hours.weekday}<br />
                    {CONTACT.hours.weekend}
                  </>
                }
              />
            </div>

            {/* Directions CTA */}
            <div className="px-8 pb-8">
              <a
                href={CONTACT.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center"
              >
                <IconMap />
                Get Directions on Google Maps
              </a>
            </div>
          </Reveal>

          {/* ── Right: Map ───────────────────────────────────────────────── */}
          <Reveal className="rounded-3xl overflow-hidden shadow-warm-md" delayClass="reveal-delay-2">
            <div className="h-[480px]">
              {/*
                ✏️ To embed your real map:
                1. Go to maps.google.com → find your location
                2. Share → Embed a map → copy the src="..." URL
                3. Paste it into CONTACT.address.embedUrl in lib/constants.ts
              */}
              <iframe
                src={CONTACT.address.embedUrl}
                width="100%"
                height="100%"
                className="border-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing ${SITE.name} in ${CONTACT.address.line2}`}
              />
            </div>
          </Reveal>
        </div>

        {/* ── USP pill row ─────────────────────────────────────────────── */}
        <Reveal className="mt-14 flex flex-wrap justify-center gap-3" delayClass="reveal-delay-3">
          {[
            { icon:"🌿", label:"100% Pure Veg"     },
            { icon:"🐾", label:"Pet-Friendly"       },
            { icon:"📶", label:"100 Mbps Wi-Fi"     },
            { icon:"🔌", label:"Power at Every Seat"},
            { icon:"☕", label:"Specialty Coffee"   },
            { icon:"🅿️", label:"Parking Available"  },
          ].map((chip) => (
            <span
              key={chip.label}
              className="
                inline-flex items-center gap-2 bg-white text-espresso-600 text-xs
                font-body font-semibold px-4 py-2.5 rounded-full
                shadow-warm-sm border border-parchment-200
                hover:border-gold/40 hover:text-gold hover:shadow-warm-md
                transition-all duration-300 cursor-default
              "
            >
              <span>{chip.icon}</span> {chip.label}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

// ── Reusable info row ──────────────────────────────────────────────────────────
function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-parchment-100 flex items-center justify-center text-gold shrink-0">
        {icon}
      </div>
      <div className="font-body text-sm text-espresso-600 leading-relaxed pt-2">
        <span className="block text-[10px] tracking-widest uppercase text-espresso-300 font-semibold mb-1">
          {label}
        </span>
        {value}
      </div>
    </div>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconPin() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 6v6l4 2" />
    </svg>
  );
}
function IconMap() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}
