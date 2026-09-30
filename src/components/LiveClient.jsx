import { motion } from 'framer-motion'
import AssetPlaceholder from './AssetPlaceholder'
import { ASSETS } from '../data/assets'

export default function LiveClient() {
  return (
    <section className="client-section" id="delivered">
      <motion.div
        className="wrap"
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Live client</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', color: '#fff' }}>
          Delivered and running in Singapore
        </h2>
        <p className="lead" style={{ margin: '14px auto 0' }}>
          FleetOpz is live with RDK Trading Pte Ltd, a rental car fleet
          operator in Singapore, covering fleet, bookings, finance and the
          ledger dashboard.
        </p>
        <div className="client-card">
          <AssetPlaceholder
            src={ASSETS.liveClientDashboard}
            label="RDK Trading — client letterhead"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </motion.div>
    </section>
  )
}