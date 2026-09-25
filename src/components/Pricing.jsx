import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const PREP_ITEMS = [
  'Number of vehicles in your fleet',
  'Type of rental business — self-drive, chauffeur, corporate leasing',
  'Which modules matter most — fleet, bookings, finance, AI',
  'Your contact details, so we can reach you',
]

const INCLUDED_ITEMS = [
  'Fleet, bookings, customers and finance in one system',
  'The full FleetOpz AI layer — assistant, briefing, alerts, forecasting, recommendations',
  'Onboarding support to get your fleet set up',
]

const initialForm = {
  name: '',
  fleetSize: '',
  email: '',
  phone: '',
  businessType: '',
  notes: '',
}

export default function Pricing() {
  const ref = useReveal()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire this up to a real endpoint / email service once available.
    // For now it confirms the request locally and lets the person continue
    // to "Book a demo" for a live conversation.
    setSubmitted(true)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" style={{ background: 'var(--paper2)' }}>
      <div className="wrap reveal" ref={ref}>
        <div className="eyebrow">Pricing</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,36px)' }}>
          Pricing tailored to your fleet
        </h2>
        <p className="lead" style={{ marginTop: 14 }}>
          FleetOpz is quote-based rather than a fixed public plan — tell us
          about your fleet and we&apos;ll price a plan for your operation,
          not a generic tier.
        </p>

        <div className="quote-grid">
          <div>
            <h3 style={{ fontSize: 17 }}>
              What we need to prepare your quote
            </h3>
            <ul className="check">
              {PREP_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 style={{ fontSize: 17, marginTop: 28 }}>
              What you get with FleetOpz
            </h3>
            <ul className="check">
              {INCLUDED_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <form className="quote-card" onSubmit={handleSubmit}>
            <div className="qrow">
              <input
                placeholder="Full name"
                required
                value={form.name}
                onChange={update('name')}
              />
              <input
                placeholder="Fleet size (e.g. 12 vehicles)"
                value={form.fleetSize}
                onChange={update('fleetSize')}
              />
            </div>
            <div className="qrow">
              <input
                placeholder="Email"
                type="email"
                required
                value={form.email}
                onChange={update('email')}
              />
              <input
                placeholder="Phone"
                value={form.phone}
                onChange={update('phone')}
              />
            </div>
            <input
              placeholder="Business type (self-drive, chauffeur, corporate...)"
              value={form.businessType}
              onChange={update('businessType')}
            />
            <textarea
              placeholder="Anything specific you need FleetOpz to handle?"
              rows={3}
              value={form.notes}
              onChange={update('notes')}
            />
            <button
              className="btn btn-primary"
              type="submit"
              style={{ justifyContent: 'center' }}
            >
              Request a Quote →
            </button>
            <div className="quote-note" role="status">
              {submitted &&
                "Thanks — we've noted your details. Let's set up a time to talk below."}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
