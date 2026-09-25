import { useReveal } from '../hooks/useReveal'
import AssetPlaceholder from './AssetPlaceholder'
import { ASSETS } from '../data/assets'

export default function StorySection() {
  const ref = useReveal()

  return (
    <section>
      <div className="wrap reveal" ref={ref}>
        <div className="eyebrow">FleetOpz</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,36px)' }}>
          Everything a rental fleet runs on, in one system
        </h2>
        <p className="lead" style={{ marginTop: 14 }}>
          Bookings and payments scattered across notebooks, sheets and chats
          make it hard to know who&apos;s paid, which cars are free, or which
          vehicles actually earn their keep. FleetOpz replaces all of that
          with one connected system.
        </p>
        <div className="story-row">
          <div>
            <h3 style={{ fontSize: 20 }}>
              Fleet, bookings and finance — always in sync
            </h3>
            <ul className="check">
              <li>Every vehicle&apos;s status, from available to under maintenance</li>
              <li>Bookings recorded per customer, with live payment status</li>
              <li>A ledger and P&amp;L built from the same records — no re-entry, no drift</li>
            </ul>
          </div>
          <div className="frame">
            <div className="frame-bar">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <AssetPlaceholder
              src={ASSETS.fleetOverview}
              label="Fleet + bookings overview"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
