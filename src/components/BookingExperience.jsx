import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ASSETS } from '../data/assets'

const Icon = {
  flow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M8 3v4M16 3v4M3.5 10h17" />
    </svg>
  ),
  overview: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="4" width="14" height="17" rx="2.5" /><path d="M9 4.5h6M9 11h6M9 15h4" />
    </svg>
  ),
}

// Copy is generic on purpose: it only describes what each screen is.
const COPY = {
  customer: ['Start every rental with the right customer.', "Capture the customer's details and set up the rental profile."],
  details: ['Set the vehicle and rental details.', 'Choose the vehicle and the rental details for this booking.'],
  pricing: ['Price it clearly.', 'Review the rental pricing and charges before you confirm.'],
  review: ['Check everything, then confirm.', 'See the whole booking in one place and confirm it.'],
  overview: ['Every booking, from upcoming to closed.', 'Follow each rental through its lifecycle in one view.'],
  'pricing-payment': ['What was charged, and what was paid.', 'Pricing and payment for the booking, side by side.'],
}

const TABS = [
  { id: 'flow', label: 'Booking Flow', sub: 'Create a new booking', icon: Icon.flow, screens: ASSETS.bookingScreens.flow, note: '4 simple steps to create a booking' },
  { id: 'overview', label: 'Booking Overview', sub: 'Track a booking end to end', icon: Icon.overview, screens: ASSETS.bookingScreens.overview, note: '' },
]

const pad = (n) => String(n + 1).padStart(2, '0')

export default function BookingExperience() {
  const [tabId, setTabId] = useState('flow')
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const tab = TABS.find((t) => t.id === tabId)
  const screens = tab.screens
  const screen = screens[index]
  const [title, desc] = COPY[screen.id]

  useEffect(() => {
    TABS.forEach((t) => t.screens.forEach((s) => { const i = new Image(); i.src = s.src }))
  }, [])

  const go = (i) => {
    if (i < 0 || i > screens.length - 1 || i === index) return
    setDir(i > index ? 1 : -1)
    setIndex(i)
  }
  const switchTab = (id) => { setTabId(id); setIndex(0); setDir(1) }

  return (
    <section className="bk-section" id="booking">
      <svg className="bk-deco bk-deco-a" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <circle cx="300" cy="100" r="160" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="300" cy="100" r="110" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <svg className="bk-deco bk-deco-b" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <circle cx="100" cy="300" r="150" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      <motion.div
        className="wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <header className="bk-head">
          <div className="bk-eyebrow"><i></i>Booking experience<i></i></div>
          <h2>Booking</h2>
          <p className="lead">Manage the complete rental journey, from customer details to final confirmation, in one system.</p>
        </header>

        <div className="bk-tabs" role="tablist" aria-label="Booking views">
          {TABS.map((t) => (
            <button key={t.id} type="button" role="tab" aria-selected={t.id === tabId}
              className={`bk-tab${t.id === tabId ? ' active' : ''}`} onClick={() => switchTab(t.id)}>
              <span className="bk-tab-ic">{t.icon}</span>
              <span><b>{t.label}</b><small>{t.sub}</small></span>
            </button>
          ))}
        </div>

        <div className="bk-stepper-wrap">
          {tab.note && <div className="bk-note">{tab.note}</div>}
          <div className="bk-stepper" role="tablist" aria-label={`${tab.label} steps`}>
            {screens.map((s, i) => (
              <div className="bk-step-item" key={s.id}>
                {i > 0 && <span className={`bk-line${i <= index ? ' filled' : ''}`}><i></i></span>}
                <button type="button" role="tab" aria-selected={i === index}
                  className={`bk-step${i === index ? ' active' : ''}${i < index ? ' done' : ''}`} onClick={() => go(i)}>
                  <b>{i < index ? '✓' : pad(i)}</b>
                  <span>{s.step}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bk-stage">
          <div className="bk-shot">
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.img
                key={`${tabId}-${screen.id}`}
                src={screen.src}
                alt={`FleetOpz booking: ${screen.step}`}
                custom={dir}
                variants={{
                  enter: (d) => ({ opacity: 0, scale: 0.985, x: 18 * d }),
                  center: { opacity: 1, scale: 1, x: 0 },
                  exit: (d) => ({ opacity: 0, scale: 0.985, x: -18 * d }),
                }}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.32, ease: 'easeOut' }}
              />
            </AnimatePresence>
          </div>

          <aside className="bk-story">
            <div className="bk-count"><b>{pad(index)}</b> / {pad(screens.length - 1)}</div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={`${tabId}-${screen.id}`}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}>
                <div className="bk-kicker">{screen.step}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            </AnimatePresence>
            <div className="bk-nav">
              <button type="button" className="btn btn-ghost-light" onClick={() => go(index - 1)} disabled={index === 0}>← Previous</button>
              <button type="button" className="btn btn-primary" onClick={() => go(index + 1)} disabled={index === screens.length - 1}>Next →</button>
            </div>
          </aside>
        </div>
      </motion.div>
    </section>
  )
}