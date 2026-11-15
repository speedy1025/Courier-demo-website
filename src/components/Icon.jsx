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
