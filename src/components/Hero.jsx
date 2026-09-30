import { motion } from 'framer-motion'
import AssetPlaceholder from './AssetPlaceholder'
import { ASSETS } from '../data/assets'

const NODES = [
  { id: 'revenue', label: 'Revenue Forecast', cls: 'orbit-n3' },
  { id: 'briefing', label: 'Daily Briefing', cls: 'orbit-n2' },
  { id: 'alerts', label: 'Smart Alerts', cls: 'orbit-n5' },
  { id: 'reco', label: 'AI Recommendations', cls: 'orbit-n4' },
]

// Short curved connectors from the edge of the core to each node (one per
// feature). They never run through the centre, so no cross is formed.
const LINES = [
  'M42,40 Q28,38 21,23', // Revenue Forecast (top-left)
  'M58,40 Q72,38 79,23', // Daily Briefing (top-right)
  'M42,60 Q28,62 21,77', // Smart Alerts (bottom-left)
  'M58,60 Q72,62 79,77', // AI Recommendations (bottom-right)
]

export default function Hero() {
  return (
    <section className="dark hero" id="top">
      <motion.div
        className="wrap hero-inner"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Live with RDK Trading, Singapore</div>
        <h1>
          Run your rental fleet
          <br />
          with <span className="accent">AI on your side</span>.
        </h1>
        <p className="lead">
          FleetOpz brings your fleet, bookings, finance and operations into
          one workspace — and puts an intelligence layer on top that answers
          questions, chases payments and flags problems before they cost you.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#contact">Book a demo</a>
          <a className="btn btn-ghost" href="#ai">Explore the AI</a>
        </div>
        <div className="hero-trust">Built for modern rental businesses</div>
      </motion.div>

      <motion.div
        className="orbit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <svg className="orbit-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A6E22E" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7BE0B0" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {LINES.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>

        <div className="orbit-core">
          <div className="orbit-core-inner">
            <span>FLEETOPZ</span>
            <b>AI</b>
          </div>
        </div>

        <div className="orbit-nodes-mobile">
          {NODES.map((n, i) => (
            <motion.div
              key={n.id}
              className={`orbit-node ${n.cls}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
            >
              <i></i>
              {n.label}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="wrap" style={{ marginTop: 64 }}>
        <div className="tour-stage" style={{ maxWidth: 980, margin: '0 auto' }}>
          <div className="tour-stage-bar">
            <div className="dots"><i></i><i></i><i></i></div>
            <span>FleetOpz — Dashboard</span>
          </div>
          <AssetPlaceholder
            src={ASSETS.heroDashboard}
            label="FleetOpz dashboard — product visual"
          />
        </div>
      </div>
    </section>
  )
}