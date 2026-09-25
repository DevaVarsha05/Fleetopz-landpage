import { useReveal } from '../hooks/useReveal'

const STEPS = [
  {
    n: 1,
    title: 'Add your fleet',
    text: 'Vehicles, plates and registration in one list.',
  },
  {
    n: 2,
    title: 'Book and operate',
    text: 'Bookings, pickups and returns tracked as they happen.',
  },
  {
    n: 3,
    title: 'Track the money',
    text: 'Earnings, expenses and P&L update automatically.',
  },
  {
    n: 4,
    title: 'Let AI watch it',
    text: 'Briefings, alerts and forecasts, without asking.',
  },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section>
      <div className="wrap reveal" ref={ref}>
        <div className="eyebrow">How it works</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,36px)' }}>
          Manage → Operate → Understand
        </h2>
        <ul className="steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <b>{s.n}</b>
              <div>
                <h3 style={{ fontSize: 16 }}>{s.title}</h3>
                <p className="lead" style={{ marginTop: 4 }}>
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
