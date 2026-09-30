import { motion } from 'framer-motion'

const VALUES = [
  { title: 'Control', text: 'Know what is happening across your fleet, right now.' },
  { title: 'Visibility', text: 'See your fleet, bookings and finances clearly, in one place.' },
  { title: 'Intelligence', text: 'Find important signals automatically, before they cost you.' },
  { title: 'Action', text: 'Make faster operational decisions, backed by real data.' },
]

export default function BusinessValue() {
  return (
    <section className="value-section">
      <motion.div
        className="wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow">Why fleet operators switch</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,38px)' }}>See your entire rental business clearly.</h2>
        <div className="value-editorial">
          {VALUES.map((v) => (
            <div className="value-item" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}