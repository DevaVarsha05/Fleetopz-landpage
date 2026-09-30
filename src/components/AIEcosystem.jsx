import { motion } from 'framer-motion'

const CONNECTIONS = [
  { from: 'Dashboard', to: 'Daily Briefing' },
  { from: 'Fleet', to: 'Fleet Intelligence' },
  { from: 'Bookings', to: 'Demand Forecast' },
  { from: 'P&L', to: 'Profitability Insights' },
  { from: 'Ledger', to: 'Financial Insights' },
  { from: 'Operations', to: 'Smart Alerts' },
]

export default function AIEcosystem() {
  return (
    <section className="ecosystem-section">
      <motion.div
        className="wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow">Built in, not bolted on</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,38px)' }}>
          AI works across every part of FleetOpz.
        </h2>
        <p className="lead" style={{ marginTop: 14 }}>
          Every core module has its own intelligence layer — not a single
          chatbot bolted on top.
        </p>

        <div className="ecosystem-grid">
          {CONNECTIONS.map((c) => (
            <div className="eco-cell" key={c.from}>
              <div className="eco-from">{c.from}</div>
              <div className="eco-arrow-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
              <div className="eco-to">{c.to}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}