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
