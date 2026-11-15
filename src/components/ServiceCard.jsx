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
