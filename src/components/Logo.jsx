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
