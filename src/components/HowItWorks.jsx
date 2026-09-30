import { motion } from 'framer-motion'

const STEPS = [
  { n: 1, title: 'Add your fleet', text: 'Vehicles, plates and registration in one list.' },
  { n: 2, title: 'Book and operate', text: 'Bookings, pickups and returns tracked as they happen.' },
  { n: 3, title: 'Track the money', text: 'Earnings, expenses and P&L update automatically.' },
  { n: 4, title: 'Let AI watch it', text: 'Briefings, alerts and forecasts, without asking.' },
]

export default function HowItWorks() {
  return (
    <section className="how-section">
      <motion.div
        className="wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow">How it works</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,38px)' }}>Manage → Operate → Understand</h2>
        <ul className="steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <b>{s.n}</b>
              <div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16 }}>{s.title}</h3>
                <p className="lead" style={{ marginTop: 4 }}>{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}