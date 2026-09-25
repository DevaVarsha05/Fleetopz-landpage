import { useReveal } from '../hooks/useReveal'

const VALUES = [
  {
    title: 'Full visibility',
    text: 'Every vehicle, booking and payment in one place.',
  },
  {
    title: 'Financial clarity',
    text: 'Ledger and P&L built from the same records — always accurate.',
  },
  {
    title: 'Faster decisions',
    text: 'AI surfaces what needs attention before it becomes a problem.',
  },
]

export default function BusinessValue() {
  const ref = useReveal()

  return (
    <section style={{ background: 'var(--paper2)' }}>
      <div className="wrap reveal" ref={ref}>
        <div className="eyebrow">Business value</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,36px)' }}>
          Why fleet operators switch
        </h2>
        <div className="value-grid">
          {VALUES.map((v) => (
            <div className="vcard" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
