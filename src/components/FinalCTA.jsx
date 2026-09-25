import { useReveal } from '../hooks/useReveal'
import { CONTACT } from '../data/assets'

export default function FinalCTA() {
  const ref = useReveal()

  return (
    <section id="contact">
      <div className="wrap reveal" ref={ref}>
        <div className="box box-cta">
          <div
            className="eyebrow"
            style={{ justifyContent: 'center', color: '#4ADE80' }}
          >
            Ready when you are
          </div>
          <h2 style={{ color: '#fff' }}>Book a demo</h2>
          <p className="lead" style={{ margin: '14px auto 0', color: '#AEB8CC' }}>
            Message us on WhatsApp or send an email — we&apos;ll set up a
            walkthrough.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={CONTACT.whatsappUrl}>
              Chat on WhatsApp
            </a>
            <a className="btn btn-ghost" href={CONTACT.emailUrl}>
              Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
