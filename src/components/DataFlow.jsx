import { motion } from 'framer-motion'

const INPUTS = ['Vehicles', 'Bookings', 'Revenue', 'Expenses', 'Customers', 'Operations']
const OUTPUTS = ['Daily Briefing', 'Smart Alerts', 'Forecasting', 'Recommendations', 'AI Assistant']

export default function DataFlow() {
  return (
    <section className="flow-section">
      <motion.div
        className="wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow">How it thinks</div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,40px)' }}>
          Your fleet generates data.
          <br />
          FleetOpz turns it into decisions.
        </h2>

        <div className="flow-diagram">
          <div className="flow-col">
            <h4>Data</h4>
            {INPUTS.map((i) => (
              <span className="flow-chip" key={i}>{i}</span>
            ))}
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-col">
            <div className="flow-core">
              <span>PROCESSING</span>
              <b>FleetOpz Intelligence</b>
            </div>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-col flow-outputs-col">
            <h4>Outputs</h4>
            <div className="flow-outputs">
              {OUTPUTS.map((o) => (
                <span className="flow-chip" key={o}>{o}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}