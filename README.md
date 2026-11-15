# FM Express — React courier website

A four-page courier/delivery website built with **React 19 + Vite + React Router**.
No UI framework, no CDN dependencies: all styling is hand-written CSS and all icons are inline SVG,
so the site works completely offline once installed.

**Business:** FM Express — a door-to-door delivery, freight and fulfilment company
(fictional, created for this project). Phone numbers, emails and tracking data are clearly labelled
sample details.

---

## Running the project

```bash
cd fm-express
npm install
npm run dev      # http://localhost:5173
```

Production build:

```bash
npm run build    # outputs to dist/
npm run preview
```

---

## Pages and routes

| Route        | Page     | File                     |
| ------------ | -------- | ------------------------ |
| `#/`         | Home     | `src/pages/Home.jsx`     |
| `#/about`    | About    | `src/pages/About.jsx`    |
| `#/services` | Services | `src/pages/Services.jsx` |
| `#/contact`  | Contact  | `src/pages/Contact.jsx`  |
| `*`          | 404      | `src/App.jsx`            |

`HashRouter` is used so the site also works when opened from a static file host or a sub-folder
without any server-side rewrite rules.

---

## How each brief requirement is met

### Home (`src/pages/Home.jsx`)

| Requirement | Where |
| --- | --- |
| Business name | Logo in the header/footer + large `.hero__brand` label above the headline |
| Welcome message | `.hero__welcome` — “Welcome to FM Express — the courier partner that treats your parcel like it is the only one on the plane.” |
| Brief introduction | `.hero__intro` plus the “Who we are” section with the company summary |
| Suitable images | `public/images/hero.jpg`, `warehouse.jpg`, `freight.jpg` (generated for this project) |
| Clear navigation | Sticky navbar (Home / About / Services / Contact) + “Get a quote”, “Explore services”, quick links, footer sitemap |
| At least one interactive element | **Live parcel tracker** (form state, validation, simulated lookup, progress timeline, sample chips), animated count-up statistics, testimonial carousel with prev/next/dots |

### About (`src/pages/About.jsx`)

* What the organisation does — “What we do” cards (door-to-door delivery, freight forwarding, fulfilment).
* Background/history — story section + a six-entry timeline (`milestones` array in `src/data/site.js`).
* Mission, vision and promise — three `PurposeCards`; values grid; published `objectives` checklist.
* Organised with reusable components — `PageBanner`, `SectionHeading`, `Reveal`, `PurposeCards`, `Story`,
  `WhatWeDo`, `Timeline`, `Values`, `Objectives` all live in their own component functions.

### Services (`src/pages/Services.jsx`)

* Six services (brief asked for at least three) with descriptions, images, feature lists and sample prices.
* Reusable component: `src/components/ServiceCard.jsx` (also used on the Home page in a compact variant).
* JavaScript array methods: `services.filter(...)` for the category filter, `.map()` for the cards,
  `.slice()` for the home-page preview, `.map()` again for pricing tiers, process steps and the FAQ accordion.
* CSS layout: CSS Grid for the card grids/pricing/steps, Flexbox for the toolbar and card footers,
  responsive breakpoints at 1100/980/720/560/420 px.

### Contact (`src/pages/Contact.jsx`)

* Contact information: email, phone, support email, postal address, opening hours, department cards.
  Sample details are labelled “Sample contact details for this demo site”.
* Form fields: **Full name, Email address, Subject, Message, Submit**.
* React state: one `values` object + `errors`, `touched`, `status` and `ticket` state (`useState`).
* Validation (`validate()`): required checks, minimum lengths, name character check, email regex,
  20-character message minimum and an 800-character maximum with live counter. Errors appear on blur
  and re-validate as the user types; submitting focuses the first invalid field.
* Feedback: success card with a generated reference number and a “Send another message” reset.

---

## Project structure

```
fm-express/
├── index.html
├── vite.config.js
├── public/images/          # hero, warehouse, express, freight, ecommerce, seafreight
└── src/
    ├── main.jsx
    ├── App.jsx             # router + layout
    ├── styles.css          # all styling (design tokens, layout, components, responsive)
    ├── data/
    │   ├── site.js         # business details, stats, values, timeline, team, coverage, FAQs
    │   └── services.js     # service catalogue, process steps, pricing
    ├── components/
    │   ├── Layout.jsx      # Navbar, Footer, PageBanner, CtaBand, ScrollToTop
    │   ├── Ui.jsx          # SectionHeading, Reveal, StatCounter, Accordion, Stars
    │   ├── ServiceCard.jsx # reusable service card (full + compact variants)
    │   ├── Tracker.jsx     # interactive parcel tracker
    │   ├── Icon.jsx        # inline SVG icon set
    │   └── Logo.jsx        # brand mark + mobile menu button
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        └── Contact.jsx
```

## Sample tracking numbers

Enter one of these in the home-page tracker (format `FM-0000-0000`):

* `FM-4821-9930` — Warri → Manchester, out for delivery
* `FM-7712-4408` — Lagos → Dubai, in transit
* `FM-1093-6621` — Effurun → Abuja, delivered

## Accessibility and UX notes

* Skip-to-content link, labelled form fields, `aria-invalid` / `aria-describedby` on invalid inputs,
  `aria-live` regions for tracker results and the submission confirmation.
* Keyboard-operable navigation, filter chips, accordion and carousel; visible focus rings.
* `prefers-reduced-motion` disables reveal animations and smooth scrolling.
* Responsive from 360 px to 1920 px with no horizontal overflow.

## Demo disclosures

This is a front-end demonstration: the tracker, quote pricing and contact form are simulated in the
browser (no backend). All contact details and statistics are fictional sample data.
