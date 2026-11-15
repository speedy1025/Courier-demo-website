import { asset } from '../lib/asset.js'

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
    image: asset('images/express.jpg'),
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
    image: asset('images/hero.jpg'),
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
    image: asset('images/freight.jpg'),
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
    image: asset('images/seafreight.jpg'),
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
    image: asset('images/ecommerce.jpg'),
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
    image: asset('images/warehouse.jpg'),
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
