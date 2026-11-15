# FM Express — complete source listing

Every source file in the project, in the order it makes sense to read it.

Business details (name, phone, email, address) live in **`src/data/site.js`** and are
rendered by the logo (`src/components/Logo.jsx`), the top bar and footer (`src/components/Layout.jsx`)
and the contact cards (`src/pages/Contact.jsx`).

```
fm-express/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── data/        site.js · services.js
    ├── components/  Layout.jsx · Ui.jsx · ServiceCard.jsx · Tracker.jsx · Icon.jsx · Logo.jsx
    └── pages/       Home.jsx · About.jsx · Services.jsx · Contact.jsx
```

## Contents

**Project configuration**

1. `index.html` — 14 lines
2. `vite.config.js` — 18 lines
3. `package.json` — 26 lines

**Entry point & routing**

4. `src/main.jsx` — 11 lines
5. `src/App.jsx` — 42 lines

**Content / data**

6. `src/data/site.js` — 197 lines
7. `src/data/services.js` — 139 lines

**Reusable components**

8. `src/components/Logo.jsx` — 50 lines
9. `src/components/Icon.jsx` — 138 lines
10. `src/components/Layout.jsx` — 217 lines
11. `src/components/Ui.jsx` — 148 lines
12. `src/components/ServiceCard.jsx` — 62 lines
13. `src/components/Tracker.jsx` — 215 lines

**Pages**

14. `src/pages/Home.jsx` — 318 lines
15. `src/pages/About.jsx` — 283 lines
16. `src/pages/Services.jsx` — 175 lines
17. `src/pages/Contact.jsx` — 381 lines

**Stylesheet**

18. `src/styles.css` — 2922 lines

---

## Project configuration

### 1. `index.html` (14 lines)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%230d2236'/><path d='M22 58h34l10-12h12l-6 12 6 12H66l-10-12H22z' fill='%2316c79a'/></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="FM Express — door-to-door parcel delivery, express shipping and freight forwarding to over 120 countries." />
    <title>FM Express — Delivered anywhere, delivered on time</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 2. `vite.config.js` (18 lines)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The dev server must accept requests proxied through the Arena preview host.
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
})
```

### 3. `package.json` (26 lines)

```json
{
  "name": "fm-express-courier",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vite --host 0.0.0.0 --port 5173",
    "build": "vite build",
    "preview": "vite preview --host 0.0.0.0"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "private": "true",
  "type": "module",
  "devDependencies": {
    "@vitejs/plugin-react": "^6.3.0",
    "vite": "^8.3.8"
  },
  "dependencies": {
    "react": "^19.3.1",
    "react-dom": "^19.3.1",
    "react-router-dom": "^7.18.5"
  }
}
```

## Entry point & routing

### 4. `src/main.jsx` (11 lines)

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### 5. `src/App.jsx` (42 lines)

```jsx
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Footer, Navbar, ScrollToTop } from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="section not-found">
                <div className="container">
                  <span className="eyebrow">404</span>
                  <h1>This route has no delivery address.</h1>
                  <p>The page you were looking for is not here — but your parcel is still on track.</p>
                  <a className="btn btn--primary" href="#/">
                    Back to home
                  </a>
                </div>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
```

## Content / data

### 6. `src/data/site.js` (197 lines)

```js
// Central place for the business details used across the whole site.
export const site = {
  name: 'FM Express',
  shortName: 'FM Express',
  tagline: 'Delivered anywhere. Delivered on time.',
  welcome:
    'Welcome to FM Express — the courier partner that treats your parcel like it is the only one on the plane.',
  intro:
    'FM Express is a door-to-door delivery company built for a connected world. From a single document in Warri to a 20-tonne consignment in Rotterdam, we move goods across 120+ countries with live tracking, honest pricing and a human on the phone when you need one.',
  founded: 2012,
  email: 'fmexpress@gmail.com',
  supportEmail: 'fmexpress@gmail.com',
  phone: '+234 800 555 0142',
  phoneAlt: '+234 812 555 0199',
  whatsapp: '+234 812 555 0199',
  address: '14 Harbour Gate Avenue, Effurun, Warri, Delta State, Nigeria',
  hub: 'FM Express House, 14 Harbour Gate Avenue, Effurun, Warri, Delta State',
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 4:00 PM' },
    { day: 'Sunday & public holidays', time: 'Closed (express desk on call)' },
  ],
}

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export const stats = [
  { value: 120, suffix: '+', label: 'Countries served' },
  { value: 4.2, suffix: 'M', label: 'Parcels delivered', decimals: 1 },
  { value: 48, suffix: 'h', label: 'Average worldwide transit' },
  { value: 99.2, suffix: '%', label: 'On-time delivery rate', decimals: 1 },
]

export const highlights = [
  {
    icon: 'bolt',
    title: 'Express when it counts',
    text: 'Same-day pick-up in Warri, Lagos and Abuja, with next-day options into Europe, the UK and North America.',
  },
  {
    icon: 'globe',
    title: 'One partner, whole world',
    text: 'Air, sea and road networks stitched into a single booking, one tracking number and one invoice.',
  },
  {
    icon: 'shield',
    title: 'Covered end to end',
    text: 'Every consignment is insured up to ₦500,000 as standard, with extended cover available at checkout.',
  },
]

export const values = [
  {
    icon: 'eye',
    title: 'Radical visibility',
    text: 'Every parcel is scanned at 6 checkpoints. If we know where it is, so do you — in real time.',
  },
  {
    icon: 'tag',
    title: 'Straight pricing',
    text: 'No surprise fuel levies or "remote area" invoices after the fact. What we quote is what you pay.',
  },
  {
    icon: 'leaf',
    title: 'Lighter footprint',
    text: 'Route-optimised fleets and consolidated air freight have cut our emissions per parcel by 31% since 2019.',
  },
  {
    icon: 'people',
    title: 'People first',
    text: '1,400 couriers, handlers and support staff who are trained, insured and paid to care about your box.',
  },
]

export const milestones = [
  {
    year: '2012',
    title: 'Two vans, one promise',
    text: 'FM Express began in Effurun, Warri with two vans and a promise: same-day delivery across Delta State, or the fee is on us.',
  },
  {
    year: '2015',
    title: 'First international lane',
    text: 'We opened a London consolidation desk so Nigerian businesses could ship to the UK in 3–4 days instead of 3 weeks.',
  },
  {
    year: '2018',
    title: 'Tracking goes live',
    text: 'Our own scanning and tracking platform launched, giving customers live status on every parcel — a first for a regional carrier.',
  },
  {
    year: '2021',
    title: 'Freight and fulfilment',
    text: 'Air and ocean freight forwarding plus a 6,000 m² fulfilment warehouse opened in Lagos for e-commerce sellers.',
  },
  {
    year: '2024',
    title: '120 countries and counting',
    text: 'Partner hubs across Asia, the Gulf, Europe and the Americas brought our network to 120+ countries and 4 million parcels a year.',
  },
  {
    year: '2026',
    title: 'Still door to door',
    text: 'Today over 9,000 businesses and families ship with us monthly — and every parcel is still handed over by a person, not a machine.',
  },
]

export const objectives = [
  'Deliver 98%+ of express parcels within the promised window — measured externally, published quarterly.',
  'Open 25 additional pick-up lockers across Delta, Edo and Bayelsa by the end of 2027.',
  'Keep customer support answered by a human in under 3 minutes during business hours.',
  'Train and certify 100 new couriers each year through the FM Express Academy.',
  'Reduce packaging waste by 40% with reusable crates and recycled mailers.',
]

export const team = [
  {
    name: 'Efetobor Isioma',
    role: 'Founder & Chief Executive',
    initials: 'EI',
    note: 'Started FM Express with two vans in 2012. Still reviews the weekly on-time report personally.',
  },
  {
    name: 'Amara Nwachukwu',
    role: 'Head of Global Operations',
    initials: 'AN',
    note: 'Runs our air and ocean lanes and negotiates every partner hub agreement in the network.',
  },
  {
    name: 'Daniel Okoro',
    role: 'Head of Customer Care',
    initials: 'DO',
    note: 'Leads the 24/7 support desk and the team that answers your WhatsApp messages.',
  },
]

export const coverage = [
  { region: 'West Africa', hubs: 'Lagos • Warri • Abuja • Accra • Cotonou', time: '24–48 hours' },
  { region: 'Europe & UK', hubs: 'London • Manchester • Rotterdam • Frankfurt', time: '2–4 days' },
  { region: 'North America', hubs: 'New York • Atlanta • Toronto • Houston', time: '3–5 days' },
  { region: 'Middle East', hubs: 'Dubai • Doha • Riyadh • Jeddah', time: '2–4 days' },
  { region: 'Asia Pacific', hubs: 'Singapore • Guangzhou • Mumbai • Tokyo', time: '3–6 days' },
  { region: 'South America', hubs: 'São Paulo • Bogotá • Santiago', time: '5–8 days' },
]

export const testimonials = [
  {
    quote:
      'We ship 200+ orders a week to Europe and the US. Since moving to FM Express our "where is my order" emails dropped by more than half, because customers can see the tracking themselves.',
    name: 'Ngozi A.',
    role: 'Founder, Adaeze Skincare (Lagos)',
  },
  {
    quote:
      'I sent documents from Warri to Manchester on a Tuesday afternoon and they were signed for on Thursday morning. The support team called me before I even thought to ask.',
    name: 'Michael O.',
    role: 'Import consultant, Warri',
  },
  {
    quote:
      'Their freight desk handled a 12-tonne consignment through Rotterdam customs without a single hold-up. Clear pricing, no surprise invoices.',
    name: 'Tunde B.',
    role: 'Operations lead, Delta AgroExports',
  },
]

export const faqs = [
  {
    q: 'How do I book a delivery?',
    a: 'Use the contact form or call our desk. Confirmed bookings before 2:00 PM are picked up the same working day within Warri, Lagos and Abuja; everywhere else we schedule the next available collection.',
  },
  {
    q: 'What can I not send?',
    a: 'Cash, live animals, human remains, narcotics, firearms and anything prohibited by the destination country. Perishables and batteries travel under our specialised handling service — just tell us first.',
  },
  {
    q: 'How is my parcel tracked?',
    a: 'Every shipment gets a tracking number in the format FM-0000-0000. It is scanned at 6 checkpoints and visible on the tracker on our home page, or by phone with our support desk.',
  },
  {
    q: 'Is my goods insured?',
    a: 'Yes — every consignment is automatically covered up to ₦500,000. You can declare a higher value at booking for extended cover, priced at 1.5% of the declared value.',
  },
  {
    q: 'Do you deliver to remote areas?',
    a: 'In most countries, yes, through partner agents. If a destination is genuinely out of reach, we tell you before you pay rather than adding a surcharge later.',
  },
  {
    q: 'Can I change the delivery address after booking?',
    a: 'Yes, free of charge while the parcel is still in our origin facility. Once it has left the country, changes depend on the destination partner and may attract a fee.',
  },
]
```

### 7. `src/data/services.js` (139 lines)

```js
// Service catalogue. The Services page filters and .map()s over this array.
export const serviceCategories = ['All', 'Express', 'Freight', 'Business']

export const services = [
  {
    id: 'same-day',
    category: 'Express',
    icon: 'bolt',
    title: 'Same-Day City Delivery',
    summary: 'Booked by 11:00 AM, at the door before close of business.',
    description:
      'Our riders and vans move documents, spare parts, medical samples and last-minute gifts across Warri, Effurun, Ughelli, Lagos and Abuja the same day you book. Live tracking, proof-of-delivery photo, and a two-hour pickup window you can actually plan around.',
    image: '/images/express.jpg',
    alt: 'Courier in uniform handing a parcel to a customer at her door',
    features: ['2-hour pickup window', 'Live rider tracking', 'Photo proof of delivery', 'Up to 30 kg per parcel'],
    price: 'From ₦2,500',
    turnaround: 'Same day',
  },
  {
    id: 'international',
    category: 'Express',
    icon: 'plane',
    title: 'International Express',
    summary: 'Door-to-door to 120+ countries in as little as 48 hours.',
    description:
      'Priority air consolidation into our partner hubs in London, Rotterdam, Dubai, New York and Guangzhou, then local last-mile delivery. We handle the customs paperwork, duties estimate and the awkward questions, so your customer just receives their parcel.',
    image: '/images/hero.jpg',
    alt: 'Delivery van on a coastal highway with a cargo aircraft overhead',
    features: ['2–5 working day transit', 'Customs paperwork handled', 'Duties and taxes estimated up front', 'Signature or photo delivery'],
    price: 'From ₦18,900',
    turnaround: '48h – 5 days',
  },
  {
    id: 'air-freight',
    category: 'Freight',
    icon: 'plane',
    title: 'Air Freight Forwarding',
    summary: 'For cargo too big for a parcel counter but too urgent for the sea.',
    description:
      'Consolidated and dedicated air freight out of Lagos, Port Harcourt and Accra, with airport-to-door or door-to-airport options. Ideal for machinery parts, electronics, pharmaceuticals and seasonal stock that cannot wait five weeks.',
    image: '/images/freight.jpg',
    alt: 'Cargo pallets being loaded into a freight aircraft at dusk',
    features: ['From 45 kg upwards', 'Airport-to-door options', 'Temperature-controlled lanes', 'Full customs brokerage'],
    price: 'Quote per kg',
    turnaround: '3–7 days',
  },
  {
    id: 'sea-freight',
    category: 'Freight',
    icon: 'ship',
    title: 'Ocean Freight & Clearing',
    summary: 'Full container or shared container, cleared and delivered inland.',
    description:
      'FCL and LCL ocean freight through Lagos Apapa, Tin Can and Onne, with in-house clearing agents and inland trucking to your door. We give you a landed-cost estimate before the container leaves port, not after.',
    image: '/images/seafreight.jpg',
    alt: 'Container ship loaded with shipping containers arriving at a port',
    features: ['20ft and 40ft containers', 'Shared LCL space', 'Licensed clearing agents', 'Inland haulage included'],
    price: 'Quote per container',
    turnaround: '18–35 days',
  },
  {
    id: 'ecommerce',
    category: 'Business',
    icon: 'cart',
    title: 'E-Commerce Fulfilment',
    summary: 'Store your stock with us; we pick, pack, ship and return.',
    description:
      'Plug your online store into our warehouse in Lagos. We store your inventory, pick and pack each order with your branding, ship it on your cheapest service, and handle returns so you never chase a courier during a sales rush.',
    image: '/images/ecommerce.jpg',
    alt: 'Business owner packing online orders at a desk',
    features: ['Inventory dashboard', 'Branded packaging', 'Returns management', 'Shopify & WooCommerce sync'],
    price: 'From ₦900 / order',
    turnaround: 'Same-day dispatch',
  },
  {
    id: 'warehousing',
    category: 'Business',
    icon: 'box',
    title: 'Warehousing & Distribution',
    summary: 'Secure storage plus scheduled distribution to your outlets.',
    description:
      'Racked, CCTV-monitored and insured storage for pallets or cartons, with weekly or daily distribution runs to retailers across the South-South and South-West. Monthly stock reports and a named account manager come as standard.',
    image: '/images/warehouse.jpg',
    alt: 'Workers sorting parcels on a conveyor belt inside a warehouse',
    features: ['Pallet & carton storage', 'CCTV and 24/7 security', 'Scheduled distribution runs', 'Monthly stock reporting'],
    price: 'From ₦4,200 / pallet',
    turnaround: 'Monthly billing',
  },
]

export const steps = [
  {
    step: '01',
    title: 'Tell us what is moving',
    text: 'Send the route, weight and deadline through the contact form or call the desk. We reply with a fixed price and a pickup window.',
  },
  {
    step: '02',
    title: 'We collect it',
    text: 'A courier arrives in the agreed window, scans the parcel and seals it. You get the tracking number before the van leaves your street.',
  },
  {
    step: '03',
    title: 'It travels, you watch',
    text: 'Six scan checkpoints — origin, linehaul, export, import, local depot, out for delivery — update the tracker as the parcel moves.',
  },
  {
    step: '04',
    title: 'Signed, photographed, done',
    text: 'Your recipient signs or the courier photographs the doorstep drop, and both of you get confirmation the moment it lands.',
  },
]

export const pricing = [
  {
    name: 'Starter',
    subtitle: 'For occasional senders',
    price: '₦2,500',
    unit: 'per local parcel',
    features: ['Same-city delivery', 'Live tracking', 'Basic insurance cover', 'Email support'],
    featured: false,
  },
  {
    name: 'Business',
    subtitle: 'For growing online sellers',
    price: '₦18,900',
    unit: 'per international parcel',
    features: ['International express to 120+ countries', 'Customs paperwork handled', 'Priority pickup window', 'Named account manager', 'Monthly invoicing'],
    featured: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For freight and volume shippers',
    price: 'Custom',
    unit: 'quoted per consignment',
    features: ['Air, sea and road combinations', 'Dedicated freight desk', 'Warehousing and fulfilment', 'API and store integration', 'Extended cargo insurance'],
    featured: false,
  },
]
```

## Reusable components

### 8. `src/components/Logo.jsx` (50 lines)

```jsx
export default function Logo({ variant = 'dark', compact = false }) {
  const dark = variant === 'dark'
  return (
    <span className={`logo ${dark ? 'logo--dark' : 'logo--light'}`}>
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="34" height="34">
          <rect width="40" height="40" rx="11" fill={dark ? '#0d2236' : '#ffffff'} />
          <path
            d="M13 12.5 21 20l-8 7.5"
            fill="none"
            stroke={dark ? '#16c79a' : '#0d2236'}
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5 12.5 29.5 20l-8 7.5"
            fill="none"
            stroke="#16c79a"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={dark ? 0.55 : 0.9}
          />
        </svg>
      </span>
      <span className="logo__text">
        <strong>FM EXPRESS</strong>
        {!compact && <small>Global Couriers</small>}
      </span>
    </span>
  )
}

export function MobileMenuToggle({ open, onClick }) {
  return (
    <button
      type="button"
      className={`nav-toggle ${open ? 'is-open' : ''}`}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="primary-navigation"
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  )
}
```

### 9. `src/components/Icon.jsx` (138 lines)

```jsx
// A tiny inline SVG icon set so the site needs no external icon library or CDN.
const paths = {
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.3 2.9 7.9 7 9.5 4.1-1.6 7-5.2 7-9.5V6l-7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  handshake: (
    <path d="M3 11l4-4 3 2.5L12 8l2 1.5L17 7l4 4-4.5 6-3-2.5-1.5 1.4-1.5-1.4L8 17 3 11Z" />
  ),
  tag: (
    <>
      <path d="M20.6 12.4 12.8 4.6H4.6v8.2l7.8 7.8 8.2-8.2Z" />
      <circle cx="9.2" cy="9.2" r="1.3" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.6a8.5 8.5 0 0 0-12.9-1L4 21l1.4-4.1a8.5 8.5 0 0 0 11.6 4l3.5-1-1-3.3a8.4 8.4 0 0 0 1-5Z" />
      <path d="M8.8 8.6c.3-.6.9-.5 1.2 0l.8 1.4c.2.4 0 .8-.3 1l-.6.5c.7 1.7 2.1 2.9 3.7 3.6l.5-.7c.2-.3.6-.4.9-.2l1.5.8c.5.3.6.9 0 1.2-1.5.9-3.4.2-5.2-1.2-1.7-1.4-3.2-3.9-2.5-6.4Z" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20C4 11 10 4 20 4c0 10-7 16-16 16Z" />
      <path d="M4 20 15 9" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.6 6-5.6s6 2.3 6 5.6" />
      <path d="M16.5 5.5a3 3 0 0 1 0 5.6M18 14.8c2 .7 3.4 2.4 3.4 4.7" />
    </>
  ),
  plane: <path d="M2 13.5 21 4l-4.5 8.2-.4 5.1-2.6-2.4-3.2 2.6.2-4.1L2 13.5Z" />,
  ship: (
    <>
      <path d="M3 15l1.8 4.2A2 2 0 0 0 6.6 20h10.8a2 2 0 0 0 1.8-1.1L21 14l-9-3-9 4Z" />
      <path d="M6 13V7h12v6M12 7V3M9 11h6" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2.4 10.2A2 2 0 0 0 9.4 16h8.2a2 2 0 0 0 1.9-1.4L21 8H6" />
      <circle cx="10" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
    </>
  ),
  box: (
    <>
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z" />
      <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h10v9H3zM13 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.7" />
      <circle cx="17" cy="18" r="1.7" />
    </>
  ),
  phone: (
    <path d="M6 3h3l1.6 4-2 1.4a12 12 0 0 0 5.9 5.9L16 12.2 20 14v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.4l3.4 2" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" />
    </>
  ),
  star: <path d="m12 3.5 2.7 5.6 6.1.8-4.5 4.2 1.2 6-5.5-3-5.5 3 1.2-6L3.2 9.9l6.1-.8L12 3.5Z" />,
  quote: <path d="M9 6c-3 1.4-4.5 4-4.5 7.5V18h5.5v-5.5H7c0-2 .7-3.6 2.6-4.4L9 6Zm9 0c-3 1.4-4.5 4-4.5 7.5V18H19v-5.5h-3c0-2 .7-3.6 2.6-4.4L18 6Z" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6.3 6.3 2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />
    </>
  ),
}

export default function Icon({ name, size = 24, className = '', strokeWidth = 1.7 }) {
  const shape = paths[name] || paths.box
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shape}
    </svg>
  )
}
```

### 10. `src/components/Layout.jsx` (217 lines)

```jsx
import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import Logo, { MobileMenuToggle } from './Logo.jsx'
import { navLinks, site } from '../data/site.js'

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__item">
            <Icon name="phone" size={15} /> {site.phone}
          </span>
          <span className="topbar__item">
            <Icon name="mail" size={15} /> {site.email}
          </span>
          <span className="topbar__item topbar__item--hide-sm">
            <Icon name="clock" size={15} /> Mon–Fri, 8:00 – 19:00 WAT
          </span>
          <span className="topbar__badge">
            <Icon name="globe" size={14} /> Delivering to 120+ countries
          </span>
        </div>
      </div>

      <div className="navbar">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__brand" aria-label={`${site.name} — home`}>
            <Logo />
          </Link>

          <nav
            id="primary-navigation"
            className={`nav ${open ? 'nav--open' : ''}`}
            aria-label="Primary"
          >
            <ul className="nav__list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
              Get a quote <Icon name="arrow" size={18} />
            </Link>

            <div className="nav__mobile-contact">
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
                <Icon name="phone" size={16} /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`}>
                <Icon name="mail" size={16} /> {site.email}
              </a>
            </div>
          </nav>

          <MobileMenuToggle open={open} onClick={() => setOpen((v) => !v)} />
        </div>
      </div>

      {open && <button className="nav-scrim" tabIndex={-1} aria-hidden="true" onClick={() => setOpen(false)} />}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="light" />
          <p>
            Door-to-door courier, freight and fulfilment services from Warri to the world. Founded
            in {site.founded}, still answering the phone ourselves.
          </p>
          <p className="footer__badge">
            <Icon name="shield" size={16} /> Every parcel insured to ₦500,000
          </p>
        </div>

        <div className="footer__col">
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/services">Pricing</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Same-day delivery</Link></li>
            <li><Link to="/services">International express</Link></li>
            <li><Link to="/services">Air &amp; sea freight</Link></li>
            <li><Link to="/services">E-commerce fulfilment</Link></li>
            <li><Link to="/services">Warehousing</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Talk to us</h4>
          <ul className="footer__contact">
            <li>
              <Icon name="pin" size={16} />
              <span>{site.address}</span>
            </li>
            <li>
              <Icon name="phone" size={16} />
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={16} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Icon name="clock" size={16} />
              <span>Mon–Fri 8:00–19:00 · Sat 9:00–16:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="footer__note">
          Demo project — phone numbers, email addresses and tracking data are sample details.
        </p>
      </div>
    </footer>
  )
}

export function PageBanner({ eyebrow, title, text, image, alt }) {
  return (
    <section className="page-banner">
      <img src={image} alt={alt} className="page-banner__img" />
      <div className="page-banner__overlay" />
      <div className="container page-banner__content">
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <span className="eyebrow eyebrow--light">Ready when you are</span>
          <h2>Send it today. Track it every step.</h2>
          <p>
            Tell us the route, the weight and the deadline — we will come back with a fixed price
            and a pickup window, usually within the hour.
          </p>
        </div>
        <div className="cta-band__actions">
          <Link to="/contact" className="btn btn--accent">
            Get a free quote <Icon name="arrow" size={18} />
          </Link>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn btn--ghost-light">
            <Icon name="phone" size={17} /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
```

### 11. `src/components/Ui.jsx` (148 lines)

```jsx
import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

export function SectionHeading({ eyebrow, title, text, align = 'left', light = false }) {
  return (
    <div className={`section-heading section-heading--${align} ${light ? 'is-light' : ''}`}>
      {eyebrow && <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

/** Fades content in the first time it scrolls into view. */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/** Counts up to `value` when scrolled into view. */
export function StatCounter({ value, suffix = '', decimals = 0, label }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    let frame
    const animate = () => {
      const duration = 1400
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(value * eased)
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    if (typeof IntersectionObserver === 'undefined') {
      setDisplay(value)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <div className="stat" ref={ref}>
      <span className="stat__value">
        {display.toFixed(decimals)}
        <span className="stat__suffix">{suffix}</span>
      </span>
      <span className="stat__label">{label}</span>
    </div>
  )
}

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div className={`accordion__item ${isOpen ? 'is-open' : ''}`} key={item.q}>
            <h3 className="accordion__heading">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-btn-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.q}</span>
                <Icon name="chevron" size={20} className="accordion__chevron" />
              </button>
            </h3>
            <div
              className="accordion__panel"
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-btn-${index}`}
              hidden={!isOpen}
            >
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function Stars({ count = 5 }) {
  return (
    <span className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" size={16} className="stars__icon" />
      ))}
    </span>
  )
}
```

### 12. `src/components/ServiceCard.jsx` (62 lines)

```jsx
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

/**
 * Reusable service card. Used by the Home page (compact variant) and the
 * Services page (full variant) — the parent maps over the services array.
 */
export default function ServiceCard({ service, index = 0, variant = 'full' }) {
  const { icon, title, summary, description, image, alt, features, price, turnaround, category } = service

  if (variant === 'compact') {
    return (
      <article className="service-mini card">
        <span className="service-mini__icon">
          <Icon name={icon} size={22} />
        </span>
        <h3>{title}</h3>
        <p>{summary}</p>
        <span className="service-mini__meta">
          <Icon name="clock" size={14} /> {turnaround}
        </span>
      </article>
    )
  }

  return (
    <article className="service-card card" style={{ '--i': index }}>
      <div className="service-card__media">
        <img src={image} alt={alt} loading="lazy" />
        <span className="service-card__tag">{category}</span>
      </div>
      <div className="service-card__body">
        <div className="service-card__head">
          <span className="service-card__icon">
            <Icon name={icon} size={22} />
          </span>
          <div>
            <h3>{title}</h3>
            <p className="service-card__summary">{summary}</p>
          </div>
        </div>
        <p className="service-card__desc">{description}</p>
        <ul className="service-card__features">
          {features.map((feature) => (
            <li key={feature}>
              <Icon name="check" size={15} /> {feature}
            </li>
          ))}
        </ul>
        <div className="service-card__footer">
          <div>
            <span className="service-card__price">{price}</span>
            <span className="service-card__time"> · {turnaround}</span>
          </div>
          <Link to="/contact" className="link-arrow">
            Book this <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
```

### 13. `src/components/Tracker.jsx` (215 lines)

```jsx
import { useState } from 'react'
import Icon from './Icon.jsx'

// Sample shipments — this is a front-end demo, so tracking data is mocked.
const SHIPMENTS = {
  'FM-4821-9930': {
    origin: 'Warri, Nigeria',
    destination: 'Manchester, United Kingdom',
    service: 'International Express',
    weight: '4.2 kg',
    eta: 'Today, before 6:00 PM',
    progress: 5,
    note: 'Arrived at Manchester depot at 06:42 and loaded onto the delivery van.',
  },
  'FM-7712-4408': {
    origin: 'Lagos, Nigeria',
    destination: 'Dubai, United Arab Emirates',
    service: 'Air Freight',
    weight: '68 kg',
    eta: 'Sat, before 12:00 PM',
    progress: 3,
    note: 'Departed Lagos (LOS) on partner flight QR 118. Customs pre-clearance submitted.',
  },
  'FM-1093-6621': {
    origin: 'Effurun, Nigeria',
    destination: 'Abuja, Nigeria',
    service: 'Same-Day City Delivery',
    weight: '1.1 kg',
    eta: 'Delivered',
    progress: 6,
    note: 'Signed for by A. Bello at 14:07. Photo proof of delivery on file.',
  },
}

const CHECKPOINTS = [
  'Order registered',
  'Collected by courier',
  'Export scan',
  'Import scan',
  'Out for delivery',
  'Delivered',
]

const SAMPLE_IDS = Object.keys(SHIPMENTS)

export default function Tracker() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null) // { type, shipment, id }
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const lookup = (rawId) => {
    const id = rawId.trim().toUpperCase()
    setError('')

    if (!id) {
      setResult(null)
      setError('Please enter a tracking number to continue.')
      return
    }
    if (!/^FM-\d{4}-\d{4}$/.test(id)) {
      setResult(null)
      setError('That does not look right. Use the format FM-0000-0000 (for example FM-4821-9930).')
      return
    }

    setLoading(true)
    // Simulated network delay so the interaction feels like a real lookup.
    setTimeout(() => {
      const shipment = SHIPMENTS[id]
      setLoading(false)
      if (shipment) {
        setResult({ shipment, id })
      } else {
        setResult(null)
        setError(`We could not find ${id}. Try one of the sample numbers below.`)
      }
    }, 550)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    lookup(input)
  }

  const useSample = (id) => {
    setInput(id)
    lookup(id)
  }

  const shipment = result?.shipment

  return (
    <div className="tracker card">
      <div className="tracker__head">
        <div>
          <span className="eyebrow">Live tracking</span>
          <h2>Where is my parcel?</h2>
          <p>Enter the tracking number from your receipt or confirmation email.</p>
        </div>
        <span className="tracker__badge">
          <Icon name="globe" size={16} /> 6 scan checkpoints
        </span>
      </div>

      <form className="tracker__form" onSubmit={handleSubmit} noValidate>
        <div className={`tracker__field ${error ? 'has-error' : ''}`}>
          <Icon name="search" size={20} className="tracker__field-icon" />
          <label className="sr-only" htmlFor="tracking-number">
            Tracking number
          </label>
          <input
            id="tracking-number"
            type="text"
            placeholder="FM-0000-0000"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              if (error) setError('')
            }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'tracking-error' : undefined}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <button type="submit" className="btn btn--primary" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner" aria-hidden="true" /> Checking…
            </>
          ) : (
            <>
              Track parcel <Icon name="arrow" size={18} />
            </>
          )}
        </button>
      </form>

      {error && (
        <p className="form-error tracker__error" id="tracking-error" role="alert">
          <Icon name="close" size={15} /> {error}
        </p>
      )}

      <div className="tracker__samples">
        <span>Try a sample:</span>
        {SAMPLE_IDS.map((id) => (
          <button key={id} type="button" className="chip" onClick={() => useSample(id)}>
            {id}
          </button>
        ))}
      </div>

      {shipment && (
        <div className="tracker__result" aria-live="polite">
          <div className="tracker__result-top">
            <div>
              <span className="tracker__id">
                <Icon name="box" size={16} /> {result.id}
              </span>
              <h3>
                {shipment.origin} <Icon name="arrow" size={18} /> {shipment.destination}
              </h3>
            </div>
            <span
              className={`status-pill ${
                shipment.progress === 6 ? 'status-pill--done' : 'status-pill--moving'
              }`}
            >
              {shipment.progress === 6 ? 'Delivered' : CHECKPOINTS[shipment.progress - 1]}
            </span>
          </div>

          <div className="tracker__progress" aria-hidden="true">
            <span style={{ width: `${(shipment.progress / CHECKPOINTS.length) * 100}%` }} />
          </div>

          <ol className="tracker__steps">
            {CHECKPOINTS.map((label, index) => {
              const state =
                index < shipment.progress ? 'is-done' : index === shipment.progress ? 'is-current' : ''
              return (
                <li key={label} className={`tracker__step ${state}`}>
                  <span className="tracker__dot">
                    {index < shipment.progress ? <Icon name="check" size={13} strokeWidth={3} /> : index + 1}
                  </span>
                  <span className="tracker__step-label">{label}</span>
                </li>
              )
            })}
          </ol>

          <div className="tracker__meta">
            <div>
              <span>Service</span>
              <strong>{shipment.service}</strong>
            </div>
            <div>
              <span>Weight</span>
              <strong>{shipment.weight}</strong>
            </div>
            <div>
              <span>Estimated arrival</span>
              <strong>{shipment.eta}</strong>
            </div>
          </div>
          <p className="tracker__note">
            <Icon name="spark" size={16} /> {shipment.note}
          </p>
        </div>
      )}
    </div>
  )
}
```

## Pages

### 14. `src/pages/Home.jsx` (318 lines)

```jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Tracker from '../components/Tracker.jsx'
import { CtaBand } from '../components/Layout.jsx'
import { Reveal, SectionHeading, Stars, StatCounter } from '../components/Ui.jsx'
import { coverage, highlights, site, stats, testimonials } from '../data/site.js'
import { services } from '../data/services.js'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__pill">
            <span className="dot" aria-hidden="true" /> Delivering in 120+ countries · Est. {site.founded}
          </span>

          <p className="hero__brand">{site.name}</p>
          <h1>
            Your goods, delivered to <em>every corner</em> of the world.
          </h1>
          <p className="hero__welcome">{site.welcome}</p>
          <p className="hero__intro">{site.intro}</p>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn--accent btn--lg">
              Get a free quote <Icon name="arrow" size={19} />
            </Link>
            <Link to="/services" className="btn btn--ghost-light btn--lg">
              Explore services
            </Link>
          </div>

          <div className="hero__trust">
            <Stars />
            <span>
              <strong>4.9/5</strong> from 1,800+ reviews · 9,000+ monthly shippers
            </span>
          </div>

          <nav className="hero__quick" aria-label="Quick links">
            <Link to="/about">Our story</Link>
            <span aria-hidden="true">•</span>
            <Link to="/services">Freight &amp; fulfilment</Link>
            <span aria-hidden="true">•</span>
            <Link to="/contact">Talk to a human</Link>
          </nav>
        </div>

        <div className="hero__media">
          <div className="hero__image-wrap">
            <img
              src="/images/hero.jpg"
              alt="FM Express delivery van travelling along a coastal highway beneath a cargo aircraft"
              fetchPriority="high"
            />
          </div>

          <div className="float-card float-card--route">
            <span className="float-card__icon">
              <Icon name="truck" size={20} />
            </span>
            <div>
              <strong>Warri → Manchester</strong>
              <span>Collected 09:12 · ETA in 48h</span>
            </div>
            <span className="float-card__pulse" aria-hidden="true" />
          </div>

          <div className="float-card float-card--rating">
            <div>
              <strong>99.2%</strong>
              <span>On-time this month</span>
            </div>
            <div className="float-card__bars" aria-hidden="true">
              <i style={{ height: '40%' }} />
              <i style={{ height: '65%' }} />
              <i style={{ height: '52%' }} />
              <i style={{ height: '88%' }} />
              <i style={{ height: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats-strip card">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="section">
      <div className="container intro-grid">
        <Reveal className="intro-grid__media">
          <img
            src="/images/warehouse.jpg"
            alt="FM Express warehouse team sorting parcels onto a conveyor belt"
            loading="lazy"
          />
          <div className="intro-grid__caption card">
            <Icon name="shield" size={22} />
            <div>
              <strong>Insured end to end</strong>
              <span>₦500,000 cover on every parcel, as standard</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="intro-grid__copy" delay={100}>
          <SectionHeading
            eyebrow="Who we are"
            title="One courier partner for parcels, pallets and everything between."
            text="FM Express started in 2012 with two vans in Effurun, Warri and one stubborn promise: deliver it when we said we would. Fourteen years on, we run air, sea and road networks into more than 120 countries — but the promise has not changed."
          />
          <p className="muted">
            We are the partner behind small brands shipping skincare to London, hospitals moving
            samples between states, and importers landing containers at Apapa. Whatever you send,
            the same three things come with it: a fixed price, a tracking number you can actually
            follow, and a human being who answers the phone.
          </p>

          <div className="highlight-list">
            {highlights.map((item) => (
              <div className="highlight" key={item.title}>
                <span className="highlight__icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/about" className="link-arrow">
            More about FM Express <Icon name="arrow" size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function TrackerSection() {
  return (
    <section className="section section--tint" id="track">
      <div className="container">
        <Reveal>
          <Tracker />
        </Reveal>
      </div>
    </section>
  )
}

function ServicesPreview() {
  const featured = services.slice(0, 3)
  return (
    <section className="section">
      <div className="container">
        <div className="section-top">
          <SectionHeading
            eyebrow="What we do"
            title="Services built around how you actually ship."
            text="Three of the ways customers move goods with us every day — from a single envelope across town to a container across an ocean."
          />
          <Link to="/services" className="btn btn--outline">
            All services <Icon name="arrow" size={18} />
          </Link>
        </div>

        <div className="services-grid">
          {featured.map((service, index) => (
            <Reveal key={service.id} delay={index * 90}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Coverage() {
  return (
    <section className="section section--dark">
      <div className="container coverage-grid">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Global network"
            title="Six continents. One tracking number."
            text="We combine our own fleet with vetted partner hubs in every region, so an international shipment never becomes somebody else's problem at the border."
          />
          <ul className="coverage-list">
            {coverage.map((item) => (
              <li key={item.region}>
                <div>
                  <strong>{item.region}</strong>
                  <span>{item.hubs}</span>
                </div>
                <span className="coverage-list__time">{item.time}</span>
              </li>
            ))}
          </ul>
          <Link to="/services" className="btn btn--accent coverage-list__cta">
            See freight options <Icon name="arrow" size={18} />
          </Link>
        </Reveal>

        <Reveal delay={120} className="coverage-grid__media">
          <img
            src="/images/freight.jpg"
            alt="Cargo being loaded onto a freight aircraft at dusk"
            loading="lazy"
          />
          <div className="coverage-grid__badge card">
            <Icon name="plane" size={24} />
            <div>
              <strong>Daily departures</strong>
              <span>LOS · PHC · ACC · LHR · DXB · JFK</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const current = testimonials[index]

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  return (
    <section className="section">
      <div className="container">
        <div className="section-top">
          <SectionHeading
            eyebrow="Customer stories"
            title="The people on the other side of the door."
          />
          <div className="carousel-controls">
            <button type="button" className="icon-btn" onClick={prev} aria-label="Previous testimonial">
              <Icon name="arrow" size={18} style={{ transform: 'rotate(180deg)' }} />
            </button>
            <span className="carousel-controls__count">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button type="button" className="icon-btn" onClick={next} aria-label="Next testimonial">
              <Icon name="arrow" size={18} />
            </button>
          </div>
        </div>

        <div className="testimonial card" aria-live="polite">
          <span className="testimonial__quote-mark" aria-hidden="true">
            <Icon name="quote" size={40} />
          </span>
          <blockquote key={index}>
            <p>{current.quote}</p>
            <footer>
              <span className="avatar" aria-hidden="true">
                {current.name.charAt(0)}
              </span>
              <div>
                <strong>{current.name}</strong>
                <span>{current.role}</span>
              </div>
              <Stars />
            </footer>
          </blockquote>
          <div className="testimonial__dots" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                className={i === index ? 'is-active' : ''}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <TrackerSection />
      <ServicesPreview />
      <Coverage />
      <Testimonials />
      <CtaBand />
    </>
  )
}
```

### 15. `src/pages/About.jsx` (283 lines)

```jsx
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { CtaBand, PageBanner } from '../components/Layout.jsx'
import { Reveal, SectionHeading } from '../components/Ui.jsx'
import { milestones, objectives, site, stats, team, values } from '../data/site.js'

function PurposeCards() {
  const cards = [
    {
      icon: 'spark',
      label: 'Our mission',
      text: 'To make worldwide delivery as simple and as trustworthy as handing a parcel to a friend — fixed prices, honest timelines and a tracking number that tells the truth.',
      tone: 'accent',
    },
    {
      icon: 'globe',
      label: 'Our vision',
      text: 'A world where a business in Warri can reach a customer in Winnipeg as easily as one across the street — and be judged on its product, not its postcode.',
      tone: 'navy',
    },
    {
      icon: 'shield',
      label: 'Our promise',
      text: 'If we say it will arrive, it arrives. If something goes wrong, we tell you before you ask, and we fix it at our cost — not yours.',
      tone: 'light',
    },
  ]

  return (
    <div className="purpose-grid">
      {cards.map((card, i) => (
        <Reveal key={card.label} delay={i * 90}>
          <article className={`purpose-card purpose-card--${card.tone}`}>
            <span className="purpose-card__icon">
              <Icon name={card.icon} size={22} />
            </span>
            <h3>{card.label}</h3>
            <p>{card.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

function Story() {
  return (
    <section className="section">
      <div className="container story-grid">
        <Reveal className="story-grid__copy">
          <SectionHeading
            eyebrow="Our background"
            title="From two vans in Effurun to a network in 120 countries."
          />
          <p>
            FM Express was registered in Delta State in {site.founded}. Our founder,
            Efetobor Isioma, had spent years watching traders in Warri lose customers because
            deliveries arrived late, arrived damaged, or never arrived at all. He started with two
            second-hand vans, one phone line and a rule that still hangs in our depot: <em>“the
            parcel belongs to somebody.”</em>
          </p>
          <p>
            For the first three years we were strictly a regional carrier — same-day runs across
            Warri, Effurun and Ughelli, then Lagos and Abuja. The turning point came in 2015 when a
            customer asked us to get a sample to a buyer in London in under a week. We built the
            lane, it worked, and the international side of the business grew from there.
          </p>
          <p>
            Today FM Express employs 1,400 people across four continents, moves over 4 million
            parcels a year and runs its own scanning and tracking platform. We are still privately
            owned, still headquartered in Warri, and still answer the phone ourselves.
          </p>

          <div className="story-grid__stats">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <strong>
                  {s.value}
                  {s.suffix}
                </strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="story-grid__media" delay={120}>
          <img
            src="/images/warehouse.jpg"
            alt="FM Express staff sorting parcels inside the Effurun hub"
            loading="lazy"
          />
          <div className="story-grid__quote card">
            <Icon name="quote" size={24} />
            <p>“The parcel belongs to somebody.”</p>
            <span>— painted above the Effurun depot door since 2012</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Timeline() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="How we grew"
          title="Fourteen years, one promise."
          text="Every milestone below started with a customer asking for something we did not have yet."
        />

        <ol className="timeline">
          {milestones.map((item, index) => (
            <li className="timeline__item" key={item.year}>
              <Reveal delay={index * 60}>
                <div className="timeline__marker" aria-hidden="true" />
                <div className="timeline__card card">
                  <span className="timeline__year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function WhatWeDo() {
  const items = [
    {
      icon: 'box',
      title: 'Door-to-door delivery',
      text: 'We collect from homes, offices and markets, and hand parcels to the named recipient with proof of delivery. No depot queues for you or your customer.',
    },
    {
      icon: 'plane',
      title: 'Freight forwarding',
      text: 'Air and ocean cargo, cleared and trucked inland by our own brokers — a single invoice from your door to theirs.',
    },
    {
      icon: 'cart',
      title: 'Fulfilment for sellers',
      text: 'Warehousing, picking, packing and returns for online stores, so a two-person brand can ship like a two-hundred-person one.',
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-top">
          <SectionHeading
            eyebrow="What we do"
            title="A complete logistics partner, not just a van."
            text="FM Express exists to take the uncertainty out of sending things. That means three connected businesses under one roof."
          />
          <Link to="/services" className="btn btn--outline">
            See the details <Icon name="arrow" size={18} />
          </Link>
        </div>

        <div className="three-grid">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="info-card card">
                <span className="info-card__icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading
          eyebrow="What we stand for"
          title="Four values we are willing to lose money on."
          text="These are not wall posters — they are the rules we use when a delivery goes wrong and nobody is watching."
        />
        <div className="values-grid">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <article className="value-card card">
                <span className="value-card__icon">
                  <Icon name={value.icon} size={20} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Objectives() {
  return (
    <section className="section">
      <div className="container objectives-grid">
        <Reveal>
          <SectionHeading
            eyebrow="Objectives"
            title="What we are working towards next."
            text="Published so you can hold us to it — this is our 2026–2027 scorecard."
          />
          <ul className="checklist">
            {objectives.map((item) => (
              <li key={item}>
                <span className="checklist__icon">
                  <Icon name="check" size={14} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="team-panel">
            <h3>The people behind it</h3>
            <div className="team-list">
              {team.map((person) => (
                <div className="team-member" key={person.name}>
                  <span className="avatar avatar--lg" aria-hidden="true">
                    {person.initials}
                  </span>
                  <div>
                    <strong>{person.name}</strong>
                    <span className="team-member__role">{person.role}</span>
                    <p>{person.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="About us"
        title="A Warri company with a worldwide route map."
        text="Fourteen years of moving parcels, pallets and promises — and the story of how we got here."
        image="/images/warehouse.jpg"
        alt="FM Express warehouse team at work"
      />

      <section className="section section--tight">
        <div className="container">
          <PurposeCards />
        </div>
      </section>

      <Story />
      <WhatWeDo />
      <Timeline />
      <Values />
      <Objectives />
      <CtaBand />
    </>
  )
}
```

### 16. `src/pages/Services.jsx` (175 lines)

```jsx
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { CtaBand, PageBanner } from '../components/Layout.jsx'
import { Accordion, Reveal, SectionHeading } from '../components/Ui.jsx'
import { faqs } from '../data/site.js'
import { pricing, serviceCategories, services, steps } from '../data/services.js'

function ServiceFilter() {
  const [active, setActive] = useState('All')

  // .filter() + .map(): the active category drives which cards are rendered.
  const visible = useMemo(
    () => (active === 'All' ? services : services.filter((s) => s.category === active)),
    [active],
  )

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="section-top">
          <SectionHeading
            eyebrow="Our services"
            title="Six ways to move goods with FM Express."
            text="Filter by what you need. Every option below includes tracking, insurance and a fixed price agreed before pickup."
          />
          <span className="count-pill">
            {visible.length} of {services.length} services
          </span>
        </div>

        <div className="filter-bar" role="tablist" aria-label="Filter services by category">
          {serviceCategories.map((category) => {
            const count =
              category === 'All'
                ? services.length
                : services.filter((s) => s.category === category).length
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                className={`filter-chip ${active === category ? 'is-active' : ''}`}
                onClick={() => setActive(category)}
              >
                {category}
                <span className="filter-chip__count">{count}</span>
              </button>
            )
          })}
        </div>

        <div className="services-grid services-grid--page">
          {visible.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="empty-state">No services in this category yet — check back soon.</p>
        )}
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeading
          light
          align="center"
          eyebrow="How it works"
          title="Four steps from your door to theirs."
          text="No account required, no minimum weight, no surprise invoices. Here is the whole process."
        />
        <ol className="steps">
          {steps.map((step, i) => (
            <li className="steps__item" key={step.step}>
              <Reveal delay={i * 90}>
                <span className="steps__number">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Sample pricing"
          title="Transparent rates, quoted before pickup."
          text="Indicative prices for common shipments. Final quotes depend on weight, dimensions and destination — ask us and we will confirm in writing."
        />
        <div className="pricing-grid">
          {pricing.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90}>
              <article className={`price-card card ${plan.featured ? 'price-card--featured' : ''}`}>
                {plan.featured && <span className="price-card__flag">Most popular</span>}
                <h3>{plan.name}</h3>
                <span className="price-card__subtitle">{plan.subtitle}</span>
                <div className="price-card__price">
                  <strong>{plan.price}</strong>
                  <span>{plan.unit}</span>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="check" size={15} /> {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${plan.featured ? 'btn--accent' : 'btn--outline'} btn--full`}
                >
                  Request this rate
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="pricing-note">
          <Icon name="shield" size={16} /> Prices are sample figures for this demo site. Fuel and
          remote-area surcharges are included — never added afterwards.
        </p>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section section--tint">
      <div className="container faq-grid">
        <SectionHeading
          eyebrow="Questions"
          title="The things customers ask us most."
          text="Still unsure? Call the desk — a real person picks up during business hours."
        />
        <Accordion items={faqs} />
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Delivery, freight and fulfilment — wherever it needs to go."
        text="From a same-day envelope in Warri to a container cleared at Apapa, here is everything FM Express can move for you."
        image="/images/freight.jpg"
        alt="Freight pallets being loaded onto an aircraft"
      />
      <ServiceFilter />
      <Steps />
      <Pricing />
      <Faq />
      <CtaBand />
    </>
  )
}
```

### 17. `src/pages/Contact.jsx` (381 lines)

```jsx
import { useRef, useState } from 'react'
import Icon from '../components/Icon.jsx'
import { PageBanner } from '../components/Layout.jsx'
import { Reveal, SectionHeading } from '../components/Ui.jsx'
import { site } from '../data/site.js'

const EMPTY_FORM = { fullName: '', email: '', subject: '', message: '' }
const MESSAGE_LIMIT = 800

function validate(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Please tell us your full name.'
  } else if (values.fullName.trim().length < 3) {
    errors.fullName = 'Your name should be at least 3 characters.'
  } else if (!/^[a-zA-Z\u00C0-\u024F' -]+$/.test(values.fullName.trim())) {
    errors.fullName = 'Names can only contain letters, spaces, hyphens and apostrophes.'
  }

  if (!values.email.trim()) {
    errors.email = 'We need an email address to reply to.'
  } else if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(values.email.trim())) {
    errors.email = 'That email address does not look valid (e.g. name@example.com).'
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please choose a subject for your message.'
  } else if (values.subject.trim().length < 4) {
    errors.subject = 'The subject should be at least 4 characters.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please write a short message so we can help.'
  } else if (values.message.trim().length < 20) {
    errors.message = `A little more detail please — at least 20 characters (${values.message.trim().length} so far).`
  } else if (values.message.length > MESSAGE_LIMIT) {
    errors.message = `Messages are limited to ${MESSAGE_LIMIT} characters.`
  }

  return errors
}

function ContactForm() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success
  const [ticket, setTicket] = useState('')
  const formRef = useRef(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Re-validate a field live once the user has already seen its error.
    if (touched[name]) {
      const nextErrors = validate({ ...values, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: nextErrors[name] }))
    }
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const nextErrors = validate(values)
    setErrors((prev) => ({ ...prev, [name]: nextErrors[name] }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({ fullName: true, email: true, subject: true, message: true })

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      const field = formRef.current?.querySelector(`[name="${firstError}"]`)
      field?.focus()
      return
    }

    setStatus('sending')
    // No backend here — this simulates the request and shows the success state.
    setTimeout(() => {
      setTicket(`FM-${Math.floor(100000 + Math.random() * 899999)}`)
      setStatus('success')
      setValues(EMPTY_FORM)
      setTouched({})
      setErrors({})
    }, 900)
  }

  const startOver = () => {
    setStatus('idle')
    setTicket('')
    setValues(EMPTY_FORM)
    setErrors({})
    setTouched({})
  }

  if (status === 'success') {
    return (
      <div className="form-success card" role="status" aria-live="polite">
        <span className="form-success__icon">
          <Icon name="check" size={26} strokeWidth={2.6} />
        </span>
        <h3>Message sent — thank you!</h3>
        <p>
          Your message reached our {site.shortName} desk. A member of the team will reply within
          one business day (usually much sooner during working hours).
        </p>
        <div className="form-success__ticket">
          <span>Your reference</span>
          <strong>{ticket}</strong>
        </div>
        <p className="form-success__hint">
          Keep this reference handy — quote it when you call {site.phone}.
        </p>
        <button type="button" className="btn btn--outline" onClick={startOver}>
          Send another message
        </button>
      </div>
    )
  }

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    className: `field__control ${errors[name] && touched[name] ? 'has-error' : ''}`,
    'aria-invalid': Boolean(errors[name] && touched[name]),
    'aria-describedby': errors[name] && touched[name] ? `${name}-error` : undefined,
  })

  const errorFor = (name) =>
    errors[name] && touched[name] ? (
      <span className="field__error" id={`${name}-error`} role="alert">
        <Icon name="close" size={13} /> {errors[name]}
      </span>
    ) : null

  return (
    <form className="contact-form card" onSubmit={handleSubmit} ref={formRef} noValidate>
      <div className="contact-form__head">
        <h3>Send us a message</h3>
        <p>Tell us what you are shipping and where it is going. We reply with a fixed quote.</p>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="fullName">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input type="text" placeholder="e.g. Amaka Okonjo" autoComplete="name" {...fieldProps('fullName')} />
          {errorFor('fullName')}
        </div>

        <div className="field">
          <label htmlFor="email">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input type="email" placeholder="you@example.com" autoComplete="email" {...fieldProps('email')} />
          {errorFor('email')}
        </div>
      </div>

      <div className="field">
        <label htmlFor="subject">
          Subject <span aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Quote for 12kg parcel to Manchester"
          {...fieldProps('subject')}
        />
        {errorFor('subject')}
      </div>

      <div className="field">
        <label htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          rows={6}
          placeholder="Pickup address, destination, weight, and when it needs to arrive…"
          {...fieldProps('message')}
        />
        <div className="field__meta">
          {errorFor('message') || <span>Minimum 20 characters.</span>}
          <span className={`field__counter ${values.message.length > MESSAGE_LIMIT ? 'is-over' : ''}`}>
            {values.message.length}/{MESSAGE_LIMIT}
          </span>
        </div>
      </div>

      <div className="contact-form__foot">
        <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <span className="spinner" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Send message <Icon name="arrow" size={18} />
            </>
          )}
        </button>
        <p className="contact-form__note">
          <Icon name="shield" size={15} /> Sample form — nothing is stored or emailed, and your
          details are never shared.
        </p>
      </div>
    </form>
  )
}

function ContactDetails() {
  const cards = [
    {
      icon: 'mail',
      label: 'Email us',
      value: site.email,
      href: `mailto:${site.email}`,
      note: 'Quotes, bookings and invoices',
    },
    {
      icon: 'phone',
      label: 'Call the desk',
      value: site.phone,
      href: `tel:${site.phone.replace(/\s/g, '')}`,
      note: `Support line: ${site.phoneAlt}`,
    },
    {
      icon: 'pin',
      label: 'Visit the hub',
      value: site.address,
      href: null,
      note: 'Walk-in counter open 8:00 AM – 6:00 PM',
    },
    {
      icon: 'whatsapp',
      label: 'WhatsApp us',
      value: site.whatsapp,
      href: `https://wa.me/${site.whatsapp.replace(/\D/g, '')}`,
      note: 'Volume rates, API access, urgent pickups',
    },
  ]

  return (
    <div className="contact-details">
      {cards.map((card, i) => (
        <Reveal key={card.label} delay={i * 70}>
          <article className="contact-card card">
            <span className="contact-card__icon">
              <Icon name={card.icon} size={20} />
            </span>
            <div>
              <span className="contact-card__label">{card.label}</span>
              {card.href ? (
                <a href={card.href} className="contact-card__value">
                  {card.value}
                </a>
              ) : (
                <strong className="contact-card__value">{card.value}</strong>
              )}
              <span className="contact-card__note">{card.note}</span>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

function HoursAndDepartments() {
  return (
    <div className="contact-aside">
      <div className="hours card">
        <h3>
          <Icon name="clock" size={18} /> Opening hours
        </h3>
        <ul>
          {site.hours.map((row) => (
            <li key={row.day}>
              <span>{row.day}</span>
              <strong>{row.time}</strong>
            </li>
          ))}
        </ul>
        <p className="hours__note">
          <Icon name="bolt" size={15} /> Express parcels can be booked on WhatsApp outside these
          hours.
        </p>
      </div>

      <div className="mini-map card">
        <div className="mini-map__grid" aria-hidden="true">
          <span className="mini-map__pin">
            <Icon name="pin" size={22} />
          </span>
        </div>
        <div className="mini-map__caption">
          <strong>Warri headquarters</strong>
          <span>{site.hub}</span>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Talk to a human about your delivery."
        text="Quotes, collections, freight enquiries or a parcel that has gone quiet — reach us however suits you."
        image="/images/express.jpg"
        alt="Courier handing a parcel to a customer"
      />

      <section className="section section--tight">
        <div className="container">
          <div className="section-top section-top--contact">
            <SectionHeading
              eyebrow="Get in touch"
              title="We answer in under 3 minutes."
              text="Our support desk is staffed by people in Warri who can see your shipment on the same screen you can."
            />
            <span className="contact-sample-badge">
              <Icon name="spark" size={15} /> Sample contact details for this demo site
            </span>
          </div>

          <div className="contact-layout">
            <div className="contact-layout__left">
              <ContactDetails />
              <HoursAndDepartments />
            </div>

            <div className="contact-layout__right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="What happens next"
            title="No black hole, no chasing."
            text="This is the exact path your message takes once you press send."
          />
          <div className="next-steps">
            {[
              { icon: 'mail', title: 'We receive it', text: 'Your message lands in our support queue with a reference number.' },
              { icon: 'people', title: 'A person reads it', text: 'A named agent picks it up — no bots, no ticket roulette.' },
              { icon: 'box', title: 'You get a fixed quote', text: 'Route, weight, transit time and total price, in writing.' },
              { icon: 'truck', title: 'We collect', text: 'Approve the quote and we book the pickup window you asked for.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="next-step card">
                  <span className="next-step__num">0{i + 1}</span>
                  <span className="next-step__icon">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

## Stylesheet

### 18. `src/styles.css` (2922 lines)

```css
/* ==========================================================================
   FM Express — global stylesheet
   Palette: deep navy + mint accent, warm off-white paper.
   ========================================================================== */

:root {
  --ink: #071320;
  --navy-900: #081a2a;
  --navy-800: #0d2236;
  --navy-700: #14374f;
  --navy-600: #1d4b68;
  --accent: #16c79a;
  --accent-dark: #0ea884;
  --accent-soft: #e4f8f2;
  --amber: #ffb703;
  --paper: #ffffff;
  --tint: #f4f7f9;
  --line: #e3e9ee;
  --text: #12212e;
  --muted: #5b7285;
  --danger: #d3455b;
  --danger-soft: #fdeef0;
  --radius-sm: 10px;
  --radius: 16px;
  --radius-lg: 24px;
  --shadow-sm: 0 2px 8px rgba(8, 26, 42, 0.06);
  --shadow: 0 14px 40px -18px rgba(8, 26, 42, 0.28);
  --shadow-lg: 0 30px 70px -32px rgba(8, 26, 42, 0.42);
  --max: 1200px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --font: 'Inter', 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  font-family: var(--font);
  font-size: 16.5px;
  line-height: 1.65;
  color: var(--text);
  background: var(--paper);
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4 {
  margin: 0 0 0.5em;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--navy-900);
  font-weight: 800;
}

h1 {
  font-size: clamp(2.1rem, 4.4vw, 3.5rem);
}
h2 {
  font-size: clamp(1.6rem, 2.7vw, 2.35rem);
}
h3 {
  font-size: 1.16rem;
  letter-spacing: -0.015em;
}

p {
  margin: 0 0 1em;
}

a {
  color: var(--navy-700);
  text-decoration: none;
}
a:hover {
  color: var(--accent-dark);
}

img {
  max-width: 100%;
  display: block;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

em {
  font-style: normal;
  color: var(--accent-dark);
}

::selection {
  background: rgba(22, 199, 154, 0.28);
}

:focus-visible {
  outline: 3px solid rgba(22, 199, 154, 0.55);
  outline-offset: 2px;
  border-radius: 4px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

.skip-link {
  position: absolute;
  left: -999px;
  top: 0;
  z-index: 200;
  background: var(--navy-900);
  color: #fff;
  padding: 0.7rem 1.1rem;
  border-radius: 0 0 8px 0;
}
.skip-link:focus {
  left: 0;
  color: #fff;
}

.container {
  width: 100%;
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 24px;
}

.muted {
  color: var(--muted);
}

/* ------------------------------ Buttons --------------------------------- */

.btn {
  --btn-bg: var(--navy-900);
  --btn-fg: #ffffff;
  --btn-border: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.78rem 1.35rem;
  border-radius: 999px;
  border: 1.5px solid var(--btn-border);
  background: var(--btn-bg);
  color: var(--btn-fg);
  font: inherit;
  font-weight: 650;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.18s var(--ease), box-shadow 0.18s var(--ease),
    background 0.18s var(--ease), color 0.18s var(--ease);
  white-space: nowrap;
}
.btn:hover {
  transform: translateY(-2px);
  color: var(--btn-fg);
  box-shadow: var(--shadow);
}
.btn:active {
  transform: translateY(0);
}
.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}
.btn--primary {
  --btn-bg: var(--navy-900);
  --btn-fg: #fff;
}
.btn--primary:hover {
  --btn-bg: var(--navy-700);
}
.btn--accent {
  --btn-bg: var(--accent);
  --btn-fg: #04241c;
}
.btn--accent:hover {
  --btn-bg: #1ad8a8;
  --btn-fg: #04241c;
}
.btn--outline {
  --btn-bg: transparent;
  --btn-fg: var(--navy-900);
  --btn-border: #cfdae2;
}
.btn--outline:hover {
  --btn-bg: var(--navy-900);
  --btn-fg: #fff;
  --btn-border: var(--navy-900);
}
.btn--ghost-light {
  --btn-bg: rgba(255, 255, 255, 0.08);
  --btn-fg: #ffffff;
  --btn-border: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
}
.btn--ghost-light:hover {
  --btn-bg: #ffffff;
  --btn-fg: var(--navy-900);
  --btn-border: #ffffff;
}
.btn--lg {
  padding: 0.95rem 1.7rem;
  font-size: 1rem;
}
.btn--full {
  width: 100%;
}

.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 650;
  color: var(--navy-900);
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  transition: gap 0.2s var(--ease), border-color 0.2s var(--ease), color 0.2s var(--ease);
}
.link-arrow:hover {
  gap: 0.75rem;
  border-color: var(--accent);
  color: var(--accent-dark);
}

.icon-btn {
  width: 42px;
  height: 42px;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  border: 1.5px solid var(--line);
  background: #fff;
  color: var(--navy-900);
  cursor: pointer;
  transition: background 0.18s var(--ease), color 0.18s var(--ease), border-color 0.18s var(--ease);
}
.icon-btn:hover {
  background: var(--navy-900);
  border-color: var(--navy-900);
  color: #fff;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-dark);
  margin-bottom: 0.7rem;
}
.eyebrow::before {
  content: '';
  width: 22px;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
}
.eyebrow--light {
  color: var(--accent);
}

.card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

/* ------------------------------ Sections -------------------------------- */

.section {
  padding: clamp(3.5rem, 7vw, 6rem) 0;
}
.section--tight {
  padding: clamp(2.5rem, 4.5vw, 3.75rem) 0;
}
.section--tint {
  background: var(--tint);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.section--dark {
  background: radial-gradient(120% 120% at 12% 0%, #123a52 0%, var(--navy-900) 55%, #04101a 100%);
  color: #cfdde6;
}
.section--dark h2,
.section--dark h3 {
  color: #fff;
}

.section-heading {
  max-width: 640px;
}
.section-heading--center {
  margin: 0 auto;
  text-align: center;
}
.section-heading--center .eyebrow {
  justify-content: center;
}
.section-heading h2 {
  margin-bottom: 0.55rem;
}
.section-heading p {
  color: var(--muted);
  margin: 0;
  font-size: 1.02rem;
}
.section-heading.is-light p {
  color: #a9bfcd;
}

.section-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-bottom: 2.6rem;
  flex-wrap: wrap;
}
.section-top--contact {
  align-items: center;
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.65s var(--ease), transform 0.65s var(--ease);
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  html {
    scroll-behavior: auto;
  }
}

/* ------------------------------- Header --------------------------------- */

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  transition: box-shadow 0.25s var(--ease);
}
.site-header.is-scrolled {
  box-shadow: 0 10px 30px -22px rgba(8, 26, 42, 0.5);
}

.topbar {
  background: var(--navy-900);
  color: #b9cdda;
  font-size: 0.8rem;
  height: 38px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.topbar__inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.topbar__item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
}
.topbar__item a {
  color: inherit;
}
.topbar__badge {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--accent);
  font-weight: 600;
  white-space: nowrap;
}

.navbar {
  position: relative;
  z-index: 2;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(10px);
}
.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 74px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
}
.logo__mark {
  display: inline-flex;
}
.logo__text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}
.logo__text strong {
  font-size: 1.06rem;
  letter-spacing: 0.01em;
  color: var(--navy-900);
  font-weight: 800;
}
.logo__text small {
  font-size: 0.66rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 600;
  margin-top: 3px;
}
.logo--light .logo__text strong {
  color: #fff;
}
.logo--light .logo__text small {
  color: #8fa8b8;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
.nav__list {
  display: flex;
  gap: 0.35rem;
  align-items: center;
}
.nav__link {
  position: relative;
  display: inline-block;
  padding: 0.5rem 0.85rem;
  color: var(--navy-900);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 999px;
  transition: background 0.18s var(--ease), color 0.18s var(--ease);
}
.nav__link:hover {
  background: var(--tint);
  color: var(--navy-900);
}
.nav__link.is-active {
  color: var(--accent-dark);
}
.nav__link.is-active::after {
  content: '';
  position: absolute;
  left: 0.85rem;
  right: 0.85rem;
  bottom: 1px;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
}
.nav__cta {
  padding: 0.62rem 1.15rem;
  font-size: 0.9rem;
}
.nav__mobile-contact {
  display: none;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
}
.nav-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--navy-900);
  border-radius: 2px;
  transition: transform 0.25s var(--ease), opacity 0.2s var(--ease);
}
.nav-toggle.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav-toggle.is-open span:nth-child(2) {
  opacity: 0;
}
.nav-toggle.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 940px) {
  .nav-toggle {
    display: flex;
  }
  .nav {
    position: absolute;
    top: calc(100% + 8px);
    left: 12px;
    right: 12px;
    background: #fff;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    padding: 1rem;
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.22s var(--ease), transform 0.22s var(--ease);
    max-height: calc(100vh - 140px);
    overflow-y: auto;
    z-index: 120;
  }
  .nav--open {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }
  .nav__list {
    flex-direction: column;
    align-items: stretch;
    gap: 0.15rem;
  }
  .nav__link {
    display: block;
    padding: 0.85rem 0.9rem;
    border-radius: var(--radius-sm);
  }
  .nav__link.is-active {
    background: var(--accent-soft);
  }
  .nav__link.is-active::after {
    display: none;
  }
  .nav__cta {
    justify-content: center;
    padding: 0.9rem;
  }
  .nav__mobile-contact {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-top: 1px solid var(--line);
    padding-top: 0.85rem;
    font-size: 0.9rem;
  }
  .nav__mobile-contact a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--muted);
  }
  .nav-scrim {
    position: fixed;
    inset: 0;
    background: rgba(7, 19, 32, 0.4);
    border: 0;
    z-index: 1;
    cursor: pointer;
    backdrop-filter: blur(2px);
  }
  .topbar__item--hide-sm,
  .topbar__badge {
    display: none;
  }
  .topbar__inner {
    justify-content: space-between;
    gap: 1rem;
  }
}

@media (max-width: 560px) {
  .topbar__item:first-child {
    display: none;
  }
  .navbar__inner {
    min-height: 66px;
  }
}

/* -------------------------------- Hero ---------------------------------- */

.hero {
  position: relative;
  background: radial-gradient(120% 130% at 85% 10%, #14405b 0%, var(--navy-900) 45%, #05121d 100%);
  color: #d5e2ea;
  padding: clamp(2.5rem, 6vw, 4.5rem) 0 clamp(3rem, 6vw, 5rem);
  overflow: hidden;
}
.hero__glow {
  position: absolute;
  width: 620px;
  height: 620px;
  right: -160px;
  top: -220px;
  background: radial-gradient(circle, rgba(22, 199, 154, 0.3), transparent 62%);
  filter: blur(20px);
  pointer-events: none;
}
.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}

.hero__pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #cfe0ea;
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 1.4rem;
}
.hero__pill .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(22, 199, 154, 0.2);
  animation: pulse 2.4s infinite;
}
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 3px rgba(22, 199, 154, 0.22);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(22, 199, 154, 0.04);
  }
}

.hero__brand {
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.9rem;
}

.hero h1 {
  color: #fff;
  font-size: clamp(2.2rem, 4.6vw, 3.6rem);
  max-width: 15ch;
}
.hero h1 em {
  color: var(--accent);
  position: relative;
}

.hero__welcome {
  font-size: clamp(1.02rem, 1.4vw, 1.16rem);
  color: #eef6fa;
  font-weight: 550;
  max-width: 46ch;
  margin-top: 1.1rem;
}
.hero__intro {
  color: #a7bdca;
  max-width: 52ch;
  font-size: 0.98rem;
}

.hero__actions {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin: 1.8rem 0 1.6rem;
}

.hero__trust {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.87rem;
  color: #a7bdca;
  flex-wrap: wrap;
}
.hero__trust strong {
  color: #fff;
}
.stars {
  display: inline-flex;
  gap: 2px;
  color: var(--amber);
}
.stars__icon {
  fill: currentColor;
  stroke-width: 1;
}

.hero__quick {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.4rem;
  font-size: 0.86rem;
  color: #6f8b9c;
}
.hero__quick a {
  color: #cfe0ea;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}
.hero__quick a:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.hero__media {
  position: relative;
}
.hero__image-wrap {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: var(--shadow-lg);
  aspect-ratio: 4 / 3.4;
}
.hero__image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
}
.hero__image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(200deg, transparent 45%, rgba(5, 18, 29, 0.55) 100%);
}

.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 14px;
  padding: 0.7rem 0.9rem;
  box-shadow: var(--shadow-lg);
  color: var(--navy-900);
  animation: floaty 6s ease-in-out infinite;
}
.float-card strong {
  display: block;
  font-size: 0.85rem;
  letter-spacing: -0.01em;
}
.float-card span {
  font-size: 0.74rem;
  color: var(--muted);
  display: block;
}
.float-card__icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: var(--accent-soft);
  color: var(--accent-dark);
  flex: none;
}
.float-card--route {
  left: -18px;
  bottom: 26px;
}
.float-card--rating {
  right: -12px;
  top: 22px;
  animation-delay: 1.2s;
  gap: 0.9rem;
}
.float-card__pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  margin-left: auto;
  animation: pulse 2s infinite;
}
.float-card__bars {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 30px;
}
.float-card__bars i {
  width: 5px;
  border-radius: 3px;
  background: linear-gradient(to top, var(--accent), #7ef0d6);
  display: block;
}
@keyframes floaty {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.stats-strip {
  position: relative;
  margin-top: clamp(2.4rem, 4vw, 3.4rem);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1.5rem 1rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.055);
  backdrop-filter: blur(8px);
  box-shadow: none;
}
.stat {
  text-align: center;
  padding: 0.35rem 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}
.stat:last-child {
  border-right: 0;
}
.stat__value {
  display: block;
  font-size: clamp(1.6rem, 2.6vw, 2.2rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.03em;
  line-height: 1.1;
}
.stat__suffix {
  color: var(--accent);
}
.stat__label {
  font-size: 0.78rem;
  color: #9db4c2;
  letter-spacing: 0.03em;
}

/* ------------------------------ Intro grid ------------------------------ */

.intro-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;
}
.intro-grid__media {
  position: relative;
}
.intro-grid__media img {
  width: 100%;
  border-radius: var(--radius-lg);
  aspect-ratio: 4 / 4.6;
  object-fit: cover;
  box-shadow: var(--shadow);
}
.intro-grid__caption {
  position: absolute;
  right: -14px;
  bottom: 22px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  max-width: 260px;
  color: var(--accent-dark);
  box-shadow: var(--shadow);
}
.intro-grid__caption strong {
  display: block;
  font-size: 0.86rem;
  color: var(--navy-900);
}
.intro-grid__caption span {
  font-size: 0.75rem;
  color: var(--muted);
  line-height: 1.4;
  display: block;
}

.highlight-list {
  display: grid;
  gap: 1rem;
  margin: 1.6rem 0;
}
.highlight {
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
}
.highlight__icon {
  flex: none;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  background: var(--accent-soft);
  color: var(--accent-dark);
  display: grid;
  place-items: center;
}
.highlight strong {
  display: block;
  font-size: 0.96rem;
  color: var(--navy-900);
  margin-bottom: 2px;
}
.highlight p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.55;
}

/* -------------------------------- Tracker ------------------------------- */

.tracker {
  padding: clamp(1.4rem, 3vw, 2.2rem);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
}
.tracker__head {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 1.3rem;
}
.tracker__head h2 {
  margin-bottom: 0.3rem;
}
.tracker__head p {
  margin: 0;
  color: var(--muted);
}
.tracker__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-dark);
  background: var(--accent-soft);
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  white-space: nowrap;
}

.tracker__form {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}
.tracker__field {
  position: relative;
  flex: 1 1 260px;
  display: flex;
  align-items: center;
}
.tracker__field-icon {
  position: absolute;
  left: 16px;
  color: var(--muted);
  pointer-events: none;
}
.tracker__field input {
  width: 100%;
  padding: 0.95rem 1rem 0.95rem 2.9rem;
  border-radius: 12px;
  border: 1.5px solid var(--line);
  font: inherit;
  font-size: 1rem;
  letter-spacing: 0.04em;
  background: #fbfcfd;
  transition: border-color 0.18s var(--ease), box-shadow 0.18s var(--ease);
}
.tracker__field input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(22, 199, 154, 0.13);
  background: #fff;
}
.tracker__field.has-error input {
  border-color: var(--danger);
  background: var(--danger-soft);
}

.tracker__error {
  margin: 0.8rem 0 0;
}
.form-error {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--danger);
  font-size: 0.87rem;
  font-weight: 600;
}

.tracker__samples {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  font-size: 0.82rem;
  color: var(--muted);
}
.chip {
  font: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 0.32rem 0.7rem;
  border-radius: 999px;
  border: 1px dashed #c3d2dc;
  background: #fff;
  color: var(--navy-700);
  cursor: pointer;
  transition: all 0.16s var(--ease);
}
.chip:hover {
  border-style: solid;
  border-color: var(--accent);
  color: var(--accent-dark);
  background: var(--accent-soft);
}

.tracker__result {
  margin-top: 1.4rem;
  border-top: 1px dashed var(--line);
  padding-top: 1.4rem;
  animation: fadeUp 0.4s var(--ease);
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
}
.tracker__result-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.tracker__id {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--muted);
}
.tracker__result-top h3 {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0.2rem 0 0;
  font-size: 1.05rem;
  color: var(--navy-900);
}
.status-pill {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  white-space: nowrap;
}
.status-pill--moving {
  background: #fff6e0;
  color: #91620a;
}
.status-pill--done {
  background: var(--accent-soft);
  color: var(--accent-dark);
}

.tracker__progress {
  height: 8px;
  background: #eef2f5;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 1.3rem;
}
.tracker__progress span {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent-dark), var(--accent));
  transition: width 0.7s var(--ease);
}

.tracker__steps {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
  margin-bottom: 1.4rem;
}
.tracker__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.45rem;
  font-size: 0.72rem;
  color: #8fa3b1;
  line-height: 1.3;
}
.tracker__dot {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 1.5px solid #dfe7ec;
  background: #fff;
  font-size: 0.68rem;
  font-weight: 700;
  color: #9fb1bd;
}
.tracker__step.is-done {
  color: var(--navy-900);
}
.tracker__step.is-done .tracker__dot {
  background: var(--accent);
  border-color: var(--accent);
  color: #04241c;
}
.tracker__step.is-current .tracker__dot {
  border-color: var(--amber);
  color: #91620a;
  box-shadow: 0 0 0 4px rgba(255, 183, 3, 0.18);
}
.tracker__step.is-current .tracker__step-label {
  color: #91620a;
  font-weight: 700;
}

.tracker__meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: var(--tint);
  border-radius: 12px;
  padding: 0.9rem 1rem;
}
.tracker__meta span {
  display: block;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-weight: 600;
}
.tracker__meta strong {
  font-size: 0.9rem;
  color: var(--navy-900);
  font-weight: 650;
}
.tracker__note {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 1rem 0 0;
  font-size: 0.88rem;
  color: var(--navy-700);
  background: #f2fbf8;
  border-left: 3px solid var(--accent);
  padding: 0.7rem 0.9rem;
  border-radius: 0 8px 8px 0;
}
.tracker__note svg {
  color: var(--accent-dark);
  flex: none;
  margin-top: 3px;
}

.spinner {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-top-color: transparent;
  display: inline-block;
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ---------------------------- Service cards ----------------------------- */

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.services-grid--page {
  grid-template-columns: repeat(3, 1fr);
}

.service-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.28s var(--ease), box-shadow 0.28s var(--ease),
    border-color 0.28s var(--ease);
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: #cfe3dc;
}
.service-card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}
.service-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s var(--ease);
}
.service-card:hover .service-card__media img {
  transform: scale(1.06);
}
.service-card__tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(8, 26, 42, 0.85);
  color: #fff;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  backdrop-filter: blur(4px);
}
.service-card__body {
  padding: 1.3rem 1.4rem 1.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.service-card__head {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin-bottom: 0.8rem;
}
.service-card__icon {
  flex: none;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  background: var(--accent-soft);
  color: var(--accent-dark);
  display: grid;
  place-items: center;
}
.service-card__head h3 {
  margin: 0 0 2px;
  font-size: 1.08rem;
}
.service-card__summary {
  margin: 0;
  font-size: 0.84rem;
  color: var(--muted);
  line-height: 1.45;
}
.service-card__desc {
  font-size: 0.9rem;
  color: #46596a;
  line-height: 1.58;
  margin-bottom: 1rem;
}
.service-card__features {
  display: grid;
  gap: 0.4rem;
  margin-bottom: 1.2rem;
}
.service-card__features li {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.86rem;
  color: var(--navy-700);
}
.service-card__features svg {
  color: var(--accent-dark);
  flex: none;
}
.service-card__footer {
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.service-card__price {
  font-weight: 800;
  color: var(--navy-900);
  font-size: 0.98rem;
  letter-spacing: -0.01em;
}
.service-card__time {
  font-size: 0.82rem;
  color: var(--muted);
}
.service-card__footer .link-arrow {
  font-size: 0.86rem;
}

.service-mini {
  padding: 1.4rem;
  height: 100%;
}
.service-mini__icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: var(--accent-soft);
  color: var(--accent-dark);
  margin-bottom: 0.9rem;
}
.service-mini h3 {
  margin-bottom: 0.35rem;
}
.service-mini p {
  color: var(--muted);
  font-size: 0.9rem;
}
.service-mini__meta {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--navy-700);
}

/* ------------------------------ Coverage -------------------------------- */

.coverage-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}
.coverage-list {
  display: grid;
  gap: 0.2rem;
  margin: 1.6rem 0 1.8rem;
}
.coverage-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.72rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.coverage-list strong {
  display: block;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 650;
}
.coverage-list span {
  display: block;
  font-size: 0.8rem;
  color: #8aa4b4;
}
.coverage-list__time {
  font-size: 0.8rem !important;
  font-weight: 700;
  color: var(--accent) !important;
  white-space: nowrap;
  background: rgba(22, 199, 154, 0.12);
  padding: 0.22rem 0.6rem;
  border-radius: 999px;
}
.coverage-list__cta {
  margin-top: 0.4rem;
}
.coverage-grid__media {
  position: relative;
}
.coverage-grid__media img {
  width: 100%;
  border-radius: var(--radius-lg);
  aspect-ratio: 4 / 3.6;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.coverage-grid__badge {
  position: absolute;
  left: -16px;
  bottom: 22px;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.8rem 1rem;
  color: var(--accent-dark);
  border: 0;
}
.coverage-grid__badge strong {
  display: block;
  font-size: 0.86rem;
  color: var(--navy-900);
}
.coverage-grid__badge span {
  font-size: 0.74rem;
  color: var(--muted);
}

/* ----------------------------- Testimonials ----------------------------- */

.carousel-controls {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.carousel-controls__count {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--muted);
}
.testimonial {
  position: relative;
  padding: clamp(1.6rem, 4vw, 3rem);
  border-radius: var(--radius-lg);
  background: linear-gradient(160deg, #ffffff 0%, #f7fbfa 100%);
}
.testimonial__quote-mark {
  color: rgba(22, 199, 154, 0.22);
  position: absolute;
  top: 22px;
  right: 28px;
}
.testimonial blockquote {
  margin: 0;
  animation: fadeUp 0.45s var(--ease);
}
.testimonial blockquote p {
  font-size: clamp(1.05rem, 1.9vw, 1.42rem);
  line-height: 1.55;
  color: var(--navy-900);
  font-weight: 550;
  letter-spacing: -0.015em;
  max-width: 62ch;
  margin-bottom: 1.6rem;
}
.testimonial blockquote footer {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}
.testimonial footer strong {
  display: block;
  font-size: 0.95rem;
  color: var(--navy-900);
}
.testimonial footer span {
  font-size: 0.83rem;
  color: var(--muted);
}
.testimonial footer .stars {
  margin-left: auto;
}
.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--navy-900);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  flex: none;
}
.avatar--lg {
  width: 54px;
  height: 54px;
  font-size: 1.05rem;
  background: var(--accent-soft);
  color: var(--accent-dark);
}
.testimonial__dots {
  display: flex;
  gap: 6px;
  margin-top: 1.6rem;
}
.testimonial__dots button {
  width: 26px;
  height: 5px;
  border-radius: 999px;
  border: 0;
  background: #dbe5ea;
  cursor: pointer;
  transition: background 0.2s var(--ease), width 0.2s var(--ease);
}
.testimonial__dots button.is-active {
  background: var(--accent);
  width: 38px;
}

/* ------------------------------- CTA band ------------------------------- */

.cta-band {
  background: linear-gradient(115deg, var(--navy-900), #0e3a52 60%, #10566b);
  color: #d6e4ec;
  position: relative;
  overflow: hidden;
}
.cta-band::after {
  content: '';
  position: absolute;
  width: 480px;
  height: 480px;
  right: -120px;
  bottom: -260px;
  background: radial-gradient(circle, rgba(22, 199, 154, 0.32), transparent 65%);
}
.cta-band__inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: clamp(2.6rem, 5vw, 4rem) 24px;
  flex-wrap: wrap;
}
.cta-band h2 {
  color: #fff;
  margin-bottom: 0.4rem;
}
.cta-band p {
  margin: 0;
  max-width: 52ch;
  color: #a9c0cf;
}
.cta-band__actions {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

/* -------------------------------- Footer -------------------------------- */

.site-footer {
  background: var(--navy-900);
  color: #a4bac8;
  padding-top: clamp(2.6rem, 5vw, 4rem);
  font-size: 0.92rem;
}
.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr 0.9fr 1.2fr;
  gap: 2.2rem;
  padding-bottom: 2.6rem;
}
.footer__brand p {
  margin: 1rem 0 0;
  max-width: 34ch;
  font-size: 0.9rem;
  color: #93a9b7;
}
.footer__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--accent) !important;
  font-weight: 600;
  font-size: 0.82rem !important;
}
.footer__col h4 {
  color: #fff;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.footer__col ul {
  display: grid;
  gap: 0.55rem;
}
.footer__col a {
  color: #a4bac8;
  font-size: 0.9rem;
  transition: color 0.16s var(--ease);
}
.footer__col a:hover {
  color: var(--accent);
}
.footer__contact li {
  display: flex;
  gap: 0.55rem;
  align-items: flex-start;
  font-size: 0.88rem;
  line-height: 1.5;
}
.footer__contact svg {
  color: var(--accent);
  flex: none;
  margin-top: 3px;
}
.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.4rem;
  padding-bottom: 1.8rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: #7f97a6;
}
.footer__note {
  margin: 0;
}

/* ------------------------------ Page banner ----------------------------- */

.page-banner {
  position: relative;
  min-height: 320px;
  display: flex;
  align-items: center;
  padding: clamp(3rem, 7vw, 5.5rem) 0;
  overflow: hidden;
  color: #d5e2ea;
}
.page-banner__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.page-banner__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, rgba(5, 18, 29, 0.94) 12%, rgba(8, 26, 42, 0.78) 55%, rgba(8, 26, 42, 0.35) 100%);
}
.page-banner__content {
  position: relative;
  max-width: 720px;
}
.page-banner h1 {
  color: #fff;
  font-size: clamp(1.9rem, 3.8vw, 3rem);
  margin-bottom: 0.6rem;
}
.page-banner p {
  color: #a9c0cf;
  margin: 0;
  font-size: 1.02rem;
  max-width: 60ch;
}

/* -------------------------------- About --------------------------------- */

.purpose-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}
.purpose-card {
  height: 100%;
  padding: 1.6rem;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background: #fff;
  box-shadow: var(--shadow-sm);
}
.purpose-card__icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  margin-bottom: 0.9rem;
}
.purpose-card h3 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  color: var(--muted);
  margin-bottom: 0.5rem;
}
.purpose-card p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}
.purpose-card--accent {
  background: linear-gradient(160deg, #0d3a4f, var(--navy-900));
  border-color: transparent;
  color: #c6d8e2;
}
.purpose-card--accent h3 {
  color: var(--accent);
}
.purpose-card--accent .purpose-card__icon {
  background: rgba(22, 199, 154, 0.16);
  color: var(--accent);
}
.purpose-card--navy {
  background: var(--tint);
}
.purpose-card--navy .purpose-card__icon {
  background: #fff;
  color: var(--navy-700);
  border: 1px solid var(--line);
}
.purpose-card--light .purpose-card__icon {
  background: var(--accent-soft);
  color: var(--accent-dark);
}
.purpose-card p {
  color: inherit;
}
.purpose-card--light p,
.purpose-card--navy p {
  color: #46596a;
}

.story-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}
.story-grid__copy p {
  color: #46596a;
}
.story-grid__copy em {
  color: var(--navy-900);
  font-style: italic;
  font-weight: 550;
}
.story-grid__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.6rem;
  padding-top: 1.4rem;
  border-top: 1px solid var(--line);
}
.story-grid__stats strong {
  display: block;
  font-size: 1.5rem;
  color: var(--navy-900);
  letter-spacing: -0.03em;
}
.story-grid__stats span {
  font-size: 0.78rem;
  color: var(--muted);
}
.story-grid__media {
  position: relative;
}
.story-grid__media img {
  width: 100%;
  border-radius: var(--radius-lg);
  aspect-ratio: 4 / 3.6;
  object-fit: cover;
  box-shadow: var(--shadow);
}
.story-grid__quote {
  position: absolute;
  left: -18px;
  bottom: 24px;
  padding: 1rem 1.1rem;
  max-width: 270px;
  background: var(--navy-900);
  color: var(--accent);
  border: 0;
  box-shadow: var(--shadow-lg);
}
.story-grid__quote p {
  margin: 0.4rem 0 0.3rem;
  color: #fff;
  font-size: 0.98rem;
  font-weight: 600;
  line-height: 1.4;
}
.story-grid__quote span {
  font-size: 0.75rem;
  color: #93a9b7;
  line-height: 1.4;
  display: block;
}

.three-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}
.info-card {
  height: 100%;
  padding: 1.6rem;
}
.info-card__icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: var(--navy-900);
  color: var(--accent);
  margin-bottom: 1rem;
}
.info-card p {
  margin: 0;
  font-size: 0.92rem;
  color: var(--muted);
}

.timeline {
  position: relative;
  max-width: 860px;
  margin: 2.6rem auto 0;
  padding-left: 34px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(var(--accent), rgba(22, 199, 154, 0.12));
  border-radius: 2px;
}
.timeline__item {
  position: relative;
  padding-bottom: 1.3rem;
}
.timeline__marker {
  position: absolute;
  left: -34px;
  top: 22px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  border: 2.5px solid var(--accent);
  box-shadow: 0 0 0 4px var(--tint);
}
.timeline__card {
  padding: 1.2rem 1.4rem;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
}
.timeline__card:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow);
}
.timeline__year {
  display: inline-block;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: var(--accent-dark);
  background: var(--accent-soft);
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  margin-bottom: 0.5rem;
}
.timeline__card h3 {
  margin-bottom: 0.3rem;
  font-size: 1.05rem;
}
.timeline__card p {
  margin: 0;
  font-size: 0.92rem;
  color: var(--muted);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin-top: 2.2rem;
}
.value-card {
  padding: 1.4rem;
  height: 100%;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
}
.value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}
.value-card__icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: var(--accent-soft);
  color: var(--accent-dark);
  margin-bottom: 0.8rem;
}
.value-card h3 {
  font-size: 1rem;
  margin-bottom: 0.35rem;
}
.value-card p {
  margin: 0;
  font-size: 0.87rem;
  color: var(--muted);
  line-height: 1.55;
}

.objectives-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}
.checklist {
  display: grid;
  gap: 0.85rem;
  margin-top: 1.5rem;
}
.checklist li {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  font-size: 0.94rem;
  color: #3b4e5e;
  line-height: 1.55;
}
.checklist__icon {
  flex: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent-dark);
  display: grid;
  place-items: center;
  margin-top: 1px;
}

.team-panel {
  background: var(--navy-900);
  border-radius: var(--radius-lg);
  padding: 1.7rem;
  color: #c8d8e2;
}
.team-panel h3 {
  color: #fff;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
}
.team-list {
  display: grid;
  gap: 1.1rem;
}
.team-member {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  padding-bottom: 1.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.team-member:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.team-member strong {
  color: #fff;
  display: block;
  font-size: 0.95rem;
}
.team-member__role {
  font-size: 0.78rem;
  color: var(--accent);
  display: block;
  margin-bottom: 0.35rem;
}
.team-member p {
  margin: 0;
  font-size: 0.83rem;
  color: #93a9b7;
  line-height: 1.5;
}

/* ------------------------------- Services ------------------------------- */

.count-pill {
  font-size: 0.82rem;
  font-weight: 650;
  color: var(--navy-700);
  background: var(--tint);
  border: 1px solid var(--line);
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  white-space: nowrap;
}
.filter-bar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding-bottom: 0.2rem;
}
.filter-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 650;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1.5px solid var(--line);
  background: #fff;
  color: var(--navy-900);
  cursor: pointer;
  transition: all 0.18s var(--ease);
}
.filter-chip:hover {
  border-color: var(--accent);
  color: var(--accent-dark);
}
.filter-chip.is-active {
  background: var(--navy-900);
  border-color: var(--navy-900);
  color: #fff;
}
.filter-chip__count {
  font-size: 0.72rem;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.08);
  padding: 0.1rem 0.4rem;
  border-radius: 999px;
}
.filter-chip.is-active .filter-chip__count {
  background: rgba(255, 255, 255, 0.18);
}
.empty-state {
  text-align: center;
  color: var(--muted);
  padding: 2rem;
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2.6rem;
}
.steps__item {
  position: relative;
  padding-top: 1.4rem;
  border-top: 2px solid rgba(255, 255, 255, 0.14);
}
.steps__item::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
}
.steps__number {
  display: block;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--accent);
  margin-bottom: 0.6rem;
}
.steps__item h3 {
  font-size: 1.02rem;
  margin-bottom: 0.4rem;
}
.steps__item p {
  font-size: 0.88rem;
  color: #a5bcca;
  margin: 0;
  line-height: 1.55;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
  margin-top: 2.6rem;
  align-items: stretch;
}
.price-card {
  position: relative;
  padding: 1.8rem 1.6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.price-card--featured {
  border: 2px solid var(--accent);
  box-shadow: var(--shadow);
  background: linear-gradient(180deg, #f6fdfb, #fff);
}
.price-card__flag {
  position: absolute;
  top: -12px;
  left: 1.6rem;
  background: var(--accent);
  color: #04241c;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
}
.price-card h3 {
  margin-bottom: 0.15rem;
  font-size: 1.15rem;
}
.price-card__subtitle {
  font-size: 0.84rem;
  color: var(--muted);
  display: block;
  margin-bottom: 1.1rem;
}
.price-card__price {
  padding-bottom: 1.1rem;
  margin-bottom: 1.1rem;
  border-bottom: 1px solid var(--line);
}
.price-card__price strong {
  display: block;
  font-size: 1.9rem;
  letter-spacing: -0.03em;
  color: var(--navy-900);
  line-height: 1.1;
}
.price-card__price span {
  font-size: 0.8rem;
  color: var(--muted);
}
.price-card ul {
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1.4rem;
}
.price-card ul li {
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  font-size: 0.88rem;
  color: #3f5266;
  line-height: 1.5;
}
.price-card ul svg {
  color: var(--accent-dark);
  flex: none;
  margin-top: 3px;
}
.price-card .btn {
  margin-top: auto;
}
.pricing-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  text-align: center;
  font-size: 0.84rem;
  color: var(--muted);
  margin: 1.6rem 0 0;
  flex-wrap: wrap;
}

.faq-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: start;
}
.faq-grid .section-heading {
  position: sticky;
  top: 130px;
}
.accordion {
  display: grid;
  gap: 0.6rem;
}
.accordion__item {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color 0.2s var(--ease), box-shadow 0.2s var(--ease);
}
.accordion__item.is-open {
  border-color: #c9e6de;
  box-shadow: var(--shadow-sm);
}
.accordion__heading {
  margin: 0;
}
.accordion__heading button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.05rem 1.25rem;
  background: none;
  border: 0;
  font: inherit;
  font-weight: 650;
  font-size: 0.98rem;
  color: var(--navy-900);
  text-align: left;
  cursor: pointer;
}
.accordion__chevron {
  color: var(--accent-dark);
  transition: transform 0.25s var(--ease);
  flex: none;
}
.accordion__item.is-open .accordion__chevron {
  transform: rotate(180deg);
}
.accordion__panel {
  padding: 0 1.25rem 1.15rem;
}
.accordion__panel p {
  margin: 0;
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.6;
}

/* -------------------------------- Contact ------------------------------- */

.contact-sample-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.79rem;
  font-weight: 600;
  color: #91620a;
  background: #fff6e0;
  border: 1px solid #ffe6ad;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
}
.contact-layout {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 1.6rem;
  align-items: start;
}
.contact-layout__left {
  display: grid;
  gap: 1.6rem;
}
.contact-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.contact-layout__left .contact-details {
  grid-template-columns: 1fr;
}
.contact-card {
  display: flex;
  gap: 0.8rem;
  padding: 1.1rem;
  height: 100%;
  transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);
}
.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}
.contact-card__icon {
  flex: none;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: var(--accent-soft);
  color: var(--accent-dark);
}
.contact-card__label {
  display: block;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: var(--muted);
  margin-bottom: 0.25rem;
}
.contact-card__value {
  display: block;
  font-size: 0.9rem;
  font-weight: 650;
  color: var(--navy-900);
  line-height: 1.4;
  overflow-wrap: anywhere;
}
a.contact-card__value:hover {
  color: var(--accent-dark);
}
.contact-card__note {
  display: block;
  font-size: 0.76rem;
  color: var(--muted);
  margin-top: 0.3rem;
  line-height: 1.45;
}

.contact-aside {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
.hours {
  padding: 1.3rem;
}
.hours h3 {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.95rem;
  margin-bottom: 0.9rem;
}
.hours h3 svg {
  color: var(--accent-dark);
}
.hours ul {
  display: grid;
  gap: 0.55rem;
}
.hours li {
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
  font-size: 0.82rem;
  color: var(--muted);
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed var(--line);
}
.hours li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.hours li strong {
  color: var(--navy-900);
  font-size: 0.8rem;
  text-align: right;
}
.hours__note {
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  margin: 0.9rem 0 0;
  font-size: 0.78rem;
  color: var(--accent-dark);
  background: var(--accent-soft);
  padding: 0.55rem 0.7rem;
  border-radius: 8px;
  line-height: 1.45;
}
.hours__note svg {
  flex: none;
  margin-top: 2px;
}

.mini-map {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.mini-map__grid {
  position: relative;
  flex: 1;
  min-height: 160px;
  background-color: #eaf1f4;
  background-image: repeating-linear-gradient(0deg, transparent 0 22px, #dbe7ec 22px 23px),
    repeating-linear-gradient(90deg, transparent 0 22px, #dbe7ec 22px 23px);
}
.mini-map__grid::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 40%, rgba(22, 199, 154, 0.18) 42%, rgba(22, 199, 154, 0.18) 46%, transparent 48%),
    linear-gradient(70deg, transparent 55%, rgba(22, 199, 154, 0.14) 57%, rgba(22, 199, 154, 0.14) 60%, transparent 62%);
}
.mini-map__pin {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--navy-900);
  color: var(--accent);
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 8px rgba(13, 34, 54, 0.12);
  z-index: 1;
}
.mini-map__caption {
  padding: 0.9rem 1rem;
  border-top: 1px solid var(--line);
  background: #fff;
}
.mini-map__caption strong {
  display: block;
  font-size: 0.86rem;
  color: var(--navy-900);
}
.mini-map__caption span {
  font-size: 0.75rem;
  color: var(--muted);
  line-height: 1.4;
  display: block;
}

.contact-form {
  padding: clamp(1.4rem, 3vw, 2.2rem);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
}
.contact-form__head {
  margin-bottom: 1.4rem;
}
.contact-form__head h3 {
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
}
.contact-form__head p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--muted);
}
.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.field label {
  font-size: 0.84rem;
  font-weight: 650;
  color: var(--navy-900);
  margin-bottom: 0.4rem;
}
.field label span {
  color: var(--danger);
}
.field__control {
  width: 100%;
  font: inherit;
  font-size: 0.95rem;
  padding: 0.8rem 0.95rem;
  border-radius: 11px;
  border: 1.5px solid var(--line);
  background: #fbfcfd;
  color: var(--text);
  transition: border-color 0.18s var(--ease), box-shadow 0.18s var(--ease),
    background 0.18s var(--ease);
  resize: vertical;
}
.field__control::placeholder {
  color: #9fb0bd;
}
.field__control:focus {
  outline: none;
  border-color: var(--accent);
  background: #fff;
  box-shadow: 0 0 0 4px rgba(22, 199, 154, 0.13);
}
.field__control.has-error {
  border-color: var(--danger);
  background: var(--danger-soft);
}
.field__control.has-error:focus {
  box-shadow: 0 0 0 4px rgba(211, 69, 91, 0.12);
}
.field__error {
  display: inline-flex;
  align-items: flex-start;
  gap: 0.35rem;
  margin-top: 0.4rem;
  font-size: 0.79rem;
  font-weight: 600;
  color: var(--danger);
  line-height: 1.4;
}
.field__error svg {
  flex: none;
  margin-top: 3px;
}
.field__meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  margin-top: 0.4rem;
  font-size: 0.79rem;
  color: var(--muted);
}
.field__meta .field__error {
  margin-top: 0;
}
.field__counter {
  flex: none;
  font-variant-numeric: tabular-nums;
}
.field__counter.is-over {
  color: var(--danger);
  font-weight: 700;
}
.contact-form__foot {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.4rem;
}
.contact-form__note {
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  margin: 0;
  font-size: 0.77rem;
  color: var(--muted);
  max-width: 34ch;
  line-height: 1.45;
}
.contact-form__note svg {
  flex: none;
  margin-top: 2px;
  color: var(--accent-dark);
}

.form-success {
  padding: clamp(1.8rem, 3.6vw, 2.6rem);
  border-radius: var(--radius-lg);
  text-align: center;
  border-color: #c9e6de;
  background: linear-gradient(180deg, #f4fdfa, #fff);
  animation: fadeUp 0.45s var(--ease);
}
.form-success__icon {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: var(--accent);
  color: #04241c;
  display: grid;
  place-items: center;
  margin: 0 auto 1rem;
  box-shadow: 0 0 0 10px rgba(22, 199, 154, 0.14);
}
.form-success h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}
.form-success p {
  color: var(--muted);
  max-width: 46ch;
  margin: 0 auto 1rem;
  font-size: 0.94rem;
}
.form-success__ticket {
  display: inline-flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.75rem 1.4rem;
  border-radius: 12px;
  background: #fff;
  border: 1px dashed #b9e3d7;
  margin-bottom: 0.8rem;
}
.form-success__ticket span {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  font-weight: 700;
}
.form-success__ticket strong {
  font-size: 1.25rem;
  letter-spacing: 0.06em;
  color: var(--navy-900);
}
.form-success__hint {
  font-size: 0.82rem !important;
  max-width: none !important;
}

.next-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin-top: 2.4rem;
}
.next-step {
  position: relative;
  padding: 1.5rem 1.3rem 1.3rem;
  height: 100%;
}
.next-step__num {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  font-size: 1.6rem;
  font-weight: 800;
  color: #eaf0f4;
  letter-spacing: -0.04em;
}
.next-step__icon {
  width: 40px;
  height: 40px;
  border-radius: 11px;
  background: var(--navy-900);
  color: var(--accent);
  display: grid;
  place-items: center;
  margin-bottom: 0.9rem;
}
.next-step h3 {
  font-size: 1rem;
  margin-bottom: 0.35rem;
}
.next-step p {
  margin: 0;
  font-size: 0.86rem;
  color: var(--muted);
  line-height: 1.55;
}

/* ------------------------------- 404 page ------------------------------- */

.not-found {
  text-align: center;
  padding: 6rem 0;
}
.not-found p {
  color: var(--muted);
  margin-bottom: 1.6rem;
}

/* ------------------------------ Responsive ------------------------------ */

@media (max-width: 1100px) {
  .values-grid {
    grid-template-columns: 1fr 1fr;
  }
  .next-steps {
    grid-template-columns: 1fr 1fr;
  }
  .services-grid--page {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 980px) {
  .hero__inner {
    grid-template-columns: 1fr;
  }
  .hero__copy {
    order: 1;
  }
  .hero__media {
    order: 2;
    max-width: 620px;
  }
  .hero h1 {
    max-width: 20ch;
  }
  .intro-grid,
  .story-grid,
  .coverage-grid,
  .objectives-grid,
  .faq-grid,
  .contact-layout {
    grid-template-columns: 1fr;
  }
  .faq-grid .section-heading {
    position: static;
  }
  .intro-grid__media {
    max-width: 560px;
  }
  .intro-grid__media img {
    aspect-ratio: 16 / 10;
  }
  .story-grid__media img {
    aspect-ratio: 16 / 10;
  }
  .coverage-grid__media img {
    aspect-ratio: 16 / 10;
  }
  .services-grid,
  .purpose-grid,
  .three-grid,
  .pricing-grid {
    grid-template-columns: 1fr 1fr;
  }
  .steps {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.8rem;
  }
  .contact-layout__left {
    order: 2;
  }
  .contact-layout__right {
    order: 1;
  }
}

@media (max-width: 720px) {
  body {
    font-size: 16px;
  }
  .container {
    padding: 0 18px;
  }
  .stats-strip {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    padding: 1.2rem 0.6rem;
  }
  .stat {
    border-right: 0;
    padding: 0.6rem 0.5rem;
  }
  .stat:nth-child(odd) {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
  .services-grid,
  .services-grid--page,
  .purpose-grid,
  .three-grid,
  .pricing-grid,
  .values-grid,
  .next-steps,
  .contact-details,
  .contact-aside,
  .field-row,
  .steps {
    grid-template-columns: 1fr;
  }
  .footer__grid {
    grid-template-columns: 1fr;
  }
  .tracker__steps {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.9rem 0.4rem;
  }
  .tracker__meta {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
  .tracker__form .btn {
    width: 100%;
  }
  .float-card--rating {
    display: none;
  }
  .float-card--route {
    left: 10px;
    bottom: 10px;
  }
  .intro-grid__caption {
    right: 8px;
    max-width: 230px;
  }
  .coverage-grid__badge {
    left: 10px;
  }
  .story-grid__quote {
    left: 8px;
  }
  .section-top {
    align-items: flex-start;
  }
  .cta-band__inner {
    flex-direction: column;
    align-items: flex-start;
  }
  .testimonial footer .stars {
    margin-left: 0;
  }
  .contact-form__foot .btn {
    width: 100%;
  }
  .timeline {
    padding-left: 26px;
  }
  .timeline__marker {
    left: -26px;
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 420px) {
  .hero__actions .btn,
  .cta-band__actions .btn {
    width: 100%;
  }
  .tracker__steps {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .count-pill {
    display: none;
  }
}
```
