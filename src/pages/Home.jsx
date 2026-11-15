import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Tracker from '../components/Tracker.jsx'
import { CtaBand } from '../components/Layout.jsx'
import { Reveal, SectionHeading, Stars, StatCounter } from '../components/Ui.jsx'
import { coverage, highlights, site, stats, testimonials } from '../data/site.js'
import { services } from '../data/services.js'
import { asset } from '../lib/asset.js'

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
              src={asset('images/hero.jpg')}
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
            src={asset('images/warehouse.jpg')}
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
            src={asset('images/freight.jpg')}
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
