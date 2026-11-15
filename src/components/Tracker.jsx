import { useState } from 'react'
import Icon from './Icon.jsx'

// Sample shipments — this is a front-end demo, so tracking data is mocked.
const SHIPMENTS = {
  'FM-4821-9930': {
    origin: 'Warri, Nigeria',
    destination: 'Manchester, United Kingdom',
    service: 'International Express',
    weight: '4.2 kg',
    eta: 'Today, before 6:00 PM',
    progress: 5,
    note: 'Arrived at Manchester depot at 06:42 and loaded onto the delivery van.',
  },
  'FM-7712-4408': {
    origin: 'Lagos, Nigeria',
    destination: 'Dubai, United Arab Emirates',
    service: 'Air Freight',
    weight: '68 kg',
    eta: 'Sat, before 12:00 PM',
    progress: 3,
    note: 'Departed Lagos (LOS) on partner flight QR 118. Customs pre-clearance submitted.',
  },
  'FM-1093-6621': {
    origin: 'Effurun, Nigeria',
    destination: 'Abuja, Nigeria',
    service: 'Same-Day City Delivery',
    weight: '1.1 kg',
    eta: 'Delivered',
    progress: 6,
    note: 'Signed for by A. Bello at 14:07. Photo proof of delivery on file.',
  },
}

const CHECKPOINTS = [
  'Order registered',
  'Collected by courier',
  'Export scan',
  'Import scan',
  'Out for delivery',
  'Delivered',
]

const SAMPLE_IDS = Object.keys(SHIPMENTS)

export default function Tracker() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null) // { type, shipment, id }
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const lookup = (rawId) => {
    const id = rawId.trim().toUpperCase()
    setError('')

    if (!id) {
      setResult(null)
      setError('Please enter a tracking number to continue.')
      return
    }
    if (!/^FM-\d{4}-\d{4}$/.test(id)) {
      setResult(null)
      setError('That does not look right. Use the format FM-0000-0000 (for example FM-4821-9930).')
      return
    }

    setLoading(true)
    // Simulated network delay so the interaction feels like a real lookup.
    setTimeout(() => {
      const shipment = SHIPMENTS[id]
      setLoading(false)
      if (shipment) {
        setResult({ shipment, id })
      } else {
        setResult(null)
        setError(`We could not find ${id}. Try one of the sample numbers below.`)
      }
    }, 550)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    lookup(input)
  }

  const useSample = (id) => {
    setInput(id)
    lookup(id)
  }

  const shipment = result?.shipment

  return (
    <div className="tracker card">
      <div className="tracker__head">
        <div>
          <span className="eyebrow">Live tracking</span>
          <h2>Where is my parcel?</h2>
          <p>Enter the tracking number from your receipt or confirmation email.</p>
        </div>
        <span className="tracker__badge">
          <Icon name="globe" size={16} /> 6 scan checkpoints
        </span>
      </div>

      <form className="tracker__form" onSubmit={handleSubmit} noValidate>
        <div className={`tracker__field ${error ? 'has-error' : ''}`}>
          <Icon name="search" size={20} className="tracker__field-icon" />
          <label className="sr-only" htmlFor="tracking-number">
            Tracking number
          </label>
          <input
            id="tracking-number"
            type="text"
            placeholder="FM-0000-0000"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              if (error) setError('')
            }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'tracking-error' : undefined}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <button type="submit" className="btn btn--primary" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner" aria-hidden="true" /> Checking…
            </>
          ) : (
            <>
              Track parcel <Icon name="arrow" size={18} />
            </>
          )}
        </button>
      </form>

      {error && (
        <p className="form-error tracker__error" id="tracking-error" role="alert">
          <Icon name="close" size={15} /> {error}
        </p>
      )}

      <div className="tracker__samples">
        <span>Try a sample:</span>
        {SAMPLE_IDS.map((id) => (
          <button key={id} type="button" className="chip" onClick={() => useSample(id)}>
            {id}
          </button>
        ))}
      </div>

      {shipment && (
        <div className="tracker__result" aria-live="polite">
          <div className="tracker__result-top">
            <div>
              <span className="tracker__id">
                <Icon name="box" size={16} /> {result.id}
              </span>
              <h3>
                {shipment.origin} <Icon name="arrow" size={18} /> {shipment.destination}
              </h3>
            </div>
            <span
              className={`status-pill ${
                shipment.progress === 6 ? 'status-pill--done' : 'status-pill--moving'
              }`}
            >
              {shipment.progress === 6 ? 'Delivered' : CHECKPOINTS[shipment.progress - 1]}
            </span>
          </div>

          <div className="tracker__progress" aria-hidden="true">
            <span style={{ width: `${(shipment.progress / CHECKPOINTS.length) * 100}%` }} />
          </div>

          <ol className="tracker__steps">
            {CHECKPOINTS.map((label, index) => {
              const state =
                index < shipment.progress ? 'is-done' : index === shipment.progress ? 'is-current' : ''
              return (
                <li key={label} className={`tracker__step ${state}`}>
                  <span className="tracker__dot">
                    {index < shipment.progress ? <Icon name="check" size={13} strokeWidth={3} /> : index + 1}
                  </span>
                  <span className="tracker__step-label">{label}</span>
                </li>
              )
            })}
          </ol>

          <div className="tracker__meta">
            <div>
              <span>Service</span>
              <strong>{shipment.service}</strong>
            </div>
            <div>
              <span>Weight</span>
              <strong>{shipment.weight}</strong>
            </div>
            <div>
              <span>Estimated arrival</span>
              <strong>{shipment.eta}</strong>
            </div>
          </div>
          <p className="tracker__note">
            <Icon name="spark" size={16} /> {shipment.note}
          </p>
        </div>
      )}
    </div>
  )
}
