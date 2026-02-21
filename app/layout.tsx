import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

// ── Fonts ─────────────────────────────────────────────────────────────────────
// Cormorant Garamond: luxurious editorial serif for all headings
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// DM Sans: clean, warm humanist sans for body text and UI
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "DATS Coffee · Pure Veg Café — Magarpatta, Pune",
  description:
    "A premium pure-veg café in Magarpatta, Pune. Pet-friendly, high-speed Wi-Fi, cozy work-from-café atmosphere. Near Amanora Mall.",
  keywords: [
    "café Pune",
    "pure veg café Magarpatta",
    "work from café Pune",
    "pet friendly café Pune",
    "coffee near Amanora Mall",
    "remote work café Hadapsar",
  ],
  openGraph: {
    title: "DATS Coffee — Your Third Place in Pune",
    description:
      "Premium pure-veg café with blazing Wi-Fi, pet-friendly seating, and exceptional specialty coffee. Magarpatta, Pune.",
    type: "website",
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
