// ─────────────────────────────────────────────────────────────────────────────
// lib/constants.ts  ·  DATS Coffee — Gold Edition
// ─────────────────────────────────────────────────────────────────────────────
// ✏️  Edit this file to update ALL content across the website.
// No need to touch component files for text, links, or prices.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name:    "DATS Coffee",
  tagline: "Your Third Place in Pune",
  type:    "Pure Veg Café",
  url:     "https://datscoffee.in", // ✏️ Replace with your domain
} as const;

// ── Contact ───────────────────────────────────────────────────────────────────
export const CONTACT = {
  phone:   "+91 98765 43210",         // ✏️ Replace
  email:   "hello@datscoffee.in",     // ✏️ Replace
  address: {
    line1:    "Ground Floor, Magarpatta City",
    line2:    "Hadapsar, Pune – 411013",
    landmark: "Near Amanora Mall",
    // ✏️ Get your embed URL: maps.google.com → Share → Embed a map → copy src="..."
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5720888737705!2d73.92826!3d18.5195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEwLjIiTiA3M8KwNTUnNDEuNyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Magarpatta+City+Hadapsar+Pune", // ✏️ Replace
  },
  hours: {
    weekday: "Mon – Fri  ·  8:00 AM – 10:00 PM",
    weekend: "Sat – Sun  ·  8:00 AM – 11:00 PM",
  },
  social: {
    instagram: "https://instagram.com/datscoffee",  // ✏️ Replace
    facebook:  "https://facebook.com/datscoffee",   // ✏️ Replace
    zomato:    "https://zomato.com",                 // ✏️ Replace
  },
  reviewUrl: "https://g.page/r/YOUR_REVIEW_ID",     // ✏️ Replace
  rating:    "4.8",
  reviews:   "300+",
} as const;

// ── Hero ──────────────────────────────────────────────────────────────────────
export const HERO = {
  // ── Image (always shown; also the video fallback) ──────────────────────────
  // 📸 Place at: /public/images/hero.jpg  (1920×1080px minimum, warm tone)
  image: "/images/hero.jpg",

  // ── Video (optional — disabled by default) ─────────────────────────────────
  // 🎬 To enable: place /public/videos/hero.mp4 and set videoEnabled: true
  // Recommended: short 10–20s loop, muted, no dialogue, warm café atmosphere
  videoEnabled: false,                 // ✏️ Set to true when video is ready
  video: "/videos/hero.mp4",

  headline: { line1: "Where Every", line2: "Sip Feels Like", line3: "Home." },
  sub: "A premium pure-veg café in the heart of Magarpatta. Pet-friendly, Wi-Fi ready, and built for people who love their work as much as their coffee.",
  cta: { label: "Find Us", href: "#contact" },
  ctaSecondary: { label: "Explore Menu", href: "#menu" },

  pills: [
    { icon: "⭐", label: "4.8 Google" },
    { icon: "📶", label: "100 Mbps Wi-Fi" },
    { icon: "🐾", label: "Pet-Friendly" },
    { icon: "🌿", label: "Pure Veg" },
  ],
} as const;

// ── Features ──────────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    icon: "wifi",
    title: "Blazing Wi-Fi",
    sub: "100 Mbps",
    desc: "Dedicated enterprise-grade fibre. Uninterrupted video calls, massive uploads, zero buffering.",
  },
  {
    icon: "paw",
    title: "Pet-Friendly",
    sub: "Always welcome",
    desc: "Bring your dog or cat. Fresh water bowls, a shaded patio, and a staff that loves animals.",
  },
  {
    icon: "leaf",
    title: "Pure Veg",
    sub: "100% vegetarian",
    desc: "Every single item on the menu is vegetarian. Thoughtfully sourced, lovingly prepared.",
  },
  {
    icon: "plug",
    title: "Work-from-Café",
    sub: "Seats with power",
    desc: "Plug points at every table, quiet zones, ergonomic seating. Stay all day — you're welcome.",
  },
] as const;

// ── Menu Categories ───────────────────────────────────────────────────────────
// 📸 Images: /public/images/cat-{coffee,food,sweets,drinks}.jpg  (800×1000px)
export const CATEGORIES = [
  { id:1, title:"Signature Brews",  desc:"Espresso · Pour-Over · Cold Brew", image:"/images/cat-coffee.jpg", emoji:"☕", accent:"from-espresso-700" },
  { id:2, title:"All-Day Bites",    desc:"Wraps · Bowls · Sandwiches",       image:"/images/cat-food.jpg",   emoji:"🥗", accent:"from-sage/80"   },
  { id:3, title:"Sweet Endings",    desc:"Cakes · Waffles · Brownies",       image:"/images/cat-sweets.jpg", emoji:"🍰", accent:"from-espresso-600" },
  { id:4, title:"Chill Sips",       desc:"Smoothies · Shakes · Coolers",     image:"/images/cat-drinks.jpg", emoji:"🥤", accent:"from-espresso-800" },
] as const;

// ── Menu Sections ─────────────────────────────────────────────────────────────
export const MENU = [
  {
    category: "☕  Coffee",
    items: [
      { name:"House Espresso",      price:"₹120", note:"Double shot, silky crema"          },
      { name:"Signature Cold Brew", price:"₹180", note:"18-hr cold-steeped over ice"       },
      { name:"Cardamom Latte",      price:"₹160", note:"Espresso, milk, ground cardamom"   },
      { name:"Turmeric Flat White", price:"₹150", note:"Golden, smooth, wellness classic"  },
    ],
  },
  {
    category: "🥗  Bites",
    items: [
      { name:"Avocado Toast",      price:"₹220", note:"Sourdough, chili flakes, EVOO"       },
      { name:"Caprese Panini",     price:"₹200", note:"Mozzarella, tomato, basil pesto"     },
      { name:"Quinoa Power Bowl",  price:"₹260", note:"Roasted veggies, tahini drizzle"    },
      { name:"Pesto Focaccia",     price:"₹180", note:"House-baked, olives, sun-dried tom" },
    ],
  },
  {
    category: "🍰  Sweets",
    items: [
      { name:"Hazelnut Brownie",      price:"₹120", note:"Fudgy, warm, vanilla cream"          },
      { name:"New York Cheesecake",   price:"₹180", note:"Classic baked, berry compote"        },
      { name:"Biscoff Waffle",        price:"₹220", note:"Belgian waffle, Biscoff, cream"      },
      { name:"Mango Chia Pudding",    price:"₹160", note:"Seasonal, chilled, plant-based"      },
    ],
  },
] as const;

// ── Gallery ───────────────────────────────────────────────────────────────────
// 📸 Images: /public/images/gallery-{interior,latte,food,pet,desk,cold}.jpg
export const GALLERY = [
  { id:1, src:"/images/gallery-interior.jpg", alt:"Cozy café interior at golden hour", wide:true  },
  { id:2, src:"/images/gallery-latte.jpg",    alt:"Latte art poured with care",        wide:false },
  { id:3, src:"/images/gallery-food.jpg",     alt:"Avocado toast on sourdough",        wide:false },
  { id:4, src:"/images/gallery-pet.jpg",      alt:"A golden retriever enjoying a visit",wide:false},
  { id:5, src:"/images/gallery-desk.jpg",     alt:"Remote work setup with cold brew",  wide:true  },
  { id:6, src:"/images/gallery-cold.jpg",     alt:"Cold brew in a frosted glass",      wide:false },
] as const;

// ── Reviews ───────────────────────────────────────────────────────────────────
// ✏️ Replace with real customer quotes
export const REVIEWS = [
  {
    id:       1,
    name:     "Priya Kulkarni",
    role:     "UX Designer · Remote Worker",
    initials: "PK",
    rating:   5,
    text:     "DATS has completely replaced my co-working subscription. The Wi-Fi never drops, the cold brew is sublime, and my dog Milo gets treated like royalty. There's nowhere else I'd rather spend a workday.",
    date:     "January 2025",
  },
  {
    id:       2,
    name:     "Rahul Mehta",
    role:     "Product Manager · Startup Founder",
    initials: "RM",
    rating:   5,
    text:     "Three investor calls in one afternoon — zero internet issues. The cardamom latte is something I genuinely think about between visits. DATS is the best café work setup in all of Pune, no contest.",
    date:     "December 2024",
  },
  {
    id:       3,
    name:     "Sneha Joshi",
    role:     "Freelance Illustrator",
    initials: "SJ",
    rating:   5,
    text:     "The interiors are stunning and the lighting is perfect for sketching. The hazelnut brownie pairs dangerously well with the house espresso. I've made it my creative sanctuary and I'm not sorry about it.",
    date:     "February 2025",
  },
] as const;

// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV = [
  { label:"Menu",    href:"#menu"    },
  { label:"Gallery", href:"#gallery" },
  { label:"Reviews", href:"#reviews" },
  { label:"Contact", href:"#contact" },
] as const;
