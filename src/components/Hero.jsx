import { useReveal } from '../hooks/useReveal'
import AssetPlaceholder from './AssetPlaceholder'
import { ASSETS } from '../data/assets'

export default function Hero() {
  const textRef = useReveal()
  const stageRef = useReveal()

  return (
    <section className="dark hero" id="top">
      <div className="wrap hero-inner reveal" ref={textRef}>
        <div className="eyebrow">Live with RDK Trading, Singapore</div>
        <h1>
          Run your rental fleet
          <br />
          with <span className="accent">AI on your side</span>.
        </h1>
        <p className="lead">
          Vehicles, bookings, customers and finance in one system — with AI
          that answers your questions, chases payments and flags problems
          before they cost you.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#contact">
            Book a demo
          </a>
          <a className="btn btn-ghost" href="#ai">
            See the AI features →
          </a>
        </div>
      </div>

      <div className="wrap stage reveal" ref={stageRef}>
        <div className="frame">
          <div className="frame-bar">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <AssetPlaceholder
            src={ASSETS.heroDashboard}
            label="FleetOpz dashboard — product visual"
          />
        </div>
        <div className="pill p1">
          <i></i>8/9 Available
        </div>
        <div className="pill p2">
          <i></i>Today&apos;s Revenue SGD 160
        </div>
        <div className="pill p3">
          <i></i>AI: 2 Alerts
        </div>
        <div className="pill p4">
          <i></i>Net Profit ↑
        </div>
      </div>
    </section>
  )
}
