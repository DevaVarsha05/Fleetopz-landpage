import { motion } from 'framer-motion'
import { CONTACT } from '../data/assets'

const FLOW = ['Manage', 'Understand', 'Predict', 'Act']

export default function FinalCTA() {
  return (
    <section className="cta-section" id="contact">
      <motion.div
        className="wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="cta-box">
          <div className="eyebrow" style={{ justifyContent: 'center', color: '#A6E22E' }}>
            Ready when you are
          </div>
          <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,42px)' }}>
            Ready to run your fleet with intelligence?
          </h2>
          <p className="lead" style={{ margin: '14px auto 0', color: '#B8C2AC' }}>
            Bring your fleet, bookings, finance and AI insights into one
            intelligent workspace.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={CONTACT.whatsappUrl}>Chat on WhatsApp</a>
            <a className="btn btn-ghost" href={CONTACT.emailUrl}>Send an email</a>
          </div>
          <div className="cta-flow">
            {FLOW.map((f, i) => (
              <span key={f}>
                {i > 0 && <i>→</i>}
                {f}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}