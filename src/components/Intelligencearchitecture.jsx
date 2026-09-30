import { motion } from 'framer-motion'

const INPUTS = ['Vehicles', 'Bookings', 'Customers', 'Revenue', 'Expenses', 'Operations']
const OUTPUTS = ['Understand', 'Predict', 'Act']

export default function IntelligenceArchitecture() {
  return (
    <section className="arch-section">
      <motion.div
        className="wrap"
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow" style={{ justifyContent: 'center' }}>One business, one intelligence layer</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', color: '#fff' }}>
          Everything your business generates, in one place that thinks.
        </h2>

        <div className="arch-grid">
          <div className="arch-inputs">
            {INPUTS.map((i) => (
              <span className="arch-chip" key={i}>{i}</span>
            ))}
          </div>

          <div className="arch-down"></div>

          <div className="arch-core">
            <span>PROCESSING</span>
            <b>FleetOpz Intelligence</b>
          </div>

          <div className="arch-down"></div>

          <div className="arch-outputs">
            {OUTPUTS.map((o) => (
              <div className="arch-output" key={o}>
                <b>{o}</b>
                <span>
                  {o === 'Understand' && 'What is happening right now'}
                  {o === 'Predict' && 'What is likely to happen next'}
                  {o === 'Act' && 'What to do about it'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}