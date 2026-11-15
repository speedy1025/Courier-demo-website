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
