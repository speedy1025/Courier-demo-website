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
