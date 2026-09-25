import { useReveal } from '../hooks/useReveal'
import AssetPlaceholder from './AssetPlaceholder'
import { ASSETS } from '../data/assets'

export default function LiveClient() {
  const ref = useReveal()

  return (
    <section id="delivered">
      <div className="wrap reveal" ref={ref}>
        <div className="eyebrow">Live client</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,36px)' }}>
          Delivered and running in Singapore
        </h2>
        <p className="lead" style={{ marginTop: 14 }}>
          FleetOpz is live with RDK Trading Pte Ltd, a rental car fleet
          operator in Singapore, covering fleet, bookings, finance and the
          ledger dashboard.
        </p>
        <div
          style={{
            maxWidth: 640,
            margin: '40px auto 0',
            background: '#fff',
            border: '1px solid var(--linelt)',
            borderRadius: 16,
            padding: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 24px 55px -28px rgba(15,23,42,.18)',
          }}
        >
          <AssetPlaceholder
            src={ASSETS.liveClientDashboard}
            label="RDK Trading — client letterhead"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  )
}