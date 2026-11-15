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
