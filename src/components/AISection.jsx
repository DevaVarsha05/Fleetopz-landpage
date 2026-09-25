import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const AI_FEATURES = [
  {
    id: 'assistant',
    label: 'AI Assistant',
    title: 'AI Assistant',
    sub: 'Ask anything about your fleet, in plain language.',
    render: () => (
      <>
        <div className="chat-line chat-u">
          &quot;How many vehicles are available today?&quot;
        </div>
        <div className="chat-line chat-a">
          &quot;8 of 9 vehicles are available. 1 is on rent.&quot;
        </div>
        <div className="chat-line chat-u">
          &quot;Which vehicle earned the most this month?&quot;
        </div>
        <div className="chat-line chat-a">
          &quot;SKF4005Z — top earner this month.&quot;
        </div>
        <div className="card-row">
          <div className="data-card">
            <b>8/9</b>
            <span>Available</span>
          </div>
          <div className="data-card">
            <b>SGD 160</b>
            <span>Today&apos;s revenue</span>
          </div>
          <div className="data-card">
            <b>2</b>
            <span>Active alerts</span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'briefing',
    label: 'Daily Briefing',
    title: 'Daily Briefing',
    sub: 'Good morning — here is where things stand.',
    render: () => (
      <>
        <div className="card-row">
          <div className="data-card">
            <b>2</b>
            <span>Bookings today</span>
          </div>
          <div className="data-card">
            <b>2</b>
            <span>Pickups</span>
          </div>
          <div className="data-card">
            <b>1</b>
            <span>Return</span>
          </div>
          <div className="data-card">
            <b>SGD 160</b>
            <span>Earned so far</span>
          </div>
        </div>
        <div className="mini" style={{ marginTop: 16 }}>
          1 vehicle on rent, 8 available. 2 alerts need review before end of
          day.
        </div>
      </>
    ),
  },
  {
    id: 'alerts',
    label: 'Alerts',
    title: 'Smart Alerts',
    sub: '2 items need your attention right now.',
    render: () => (
      <>
        <div className="alert-item">
          <span className="sev sev-high"></span>
          <div>
            <b>Vehicle SGX 1234 due for maintenance</b>
            <span>Schedule before next booking</span>
          </div>
        </div>
        <div className="alert-item">
          <span className="sev sev-med"></span>
          <div>
            <b>Registration renewal approaching</b>
            <span>1 vehicle, due in 12 days</span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'forecast',
    label: 'Forecasting',
    title: 'AI Forecasting',
    sub: 'Historical Data → AI Analysis → Forecast',
    render: () => (
      <>
        <div className="bars">
          <i style={{ height: '40%' }}></i>
          <i style={{ height: '55%' }}></i>
          <i style={{ height: '48%' }}></i>
          <i style={{ height: '70%' }}></i>
          <i style={{ height: '60%' }}></i>
          <i className="proj" style={{ height: '78%' }}></i>
          <i className="proj" style={{ height: '88%' }}></i>
        </div>
        <div className="mini">
          Projected revenue next week: <b>SGD 2,150</b> (AI estimate, not
          guaranteed).
        </div>
      </>
    ),
  },
  {
    id: 'reco',
    label: 'Recommendations',
    title: 'AI Recommendations',
    sub: 'Insight → Recommendation → Suggested Action',
    render: () => (
      <div className="rec-steps">
        <div>
          <b>Insight</b>
          <p>Utilization is lower than expected this period.</p>
        </div>
        <div>
          <b>Recommendation</b>
          <p>Adjust pricing during low-demand periods.</p>
        </div>
        <div>
          <b>Action</b>
          <p style={{ color: '#4ADE80', fontWeight: 700 }}>
            Apply Recommendation →
          </p>
        </div>
      </div>
    ),
  },
]

export default function AISection() {
  const ref = useReveal()
  const [activeId, setActiveId] = useState(AI_FEATURES[0].id)
  const active = AI_FEATURES.find((a) => a.id === activeId)

  return (
    <section className="dark" id="ai">
      <div className="wrap reveal" style={{ textAlign: 'center' }} ref={ref}>
        <div className="eyebrow">FleetOpz AI</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,36px)', color: '#fff' }}>
          One intelligence layer across your whole business
        </h2>
        <p className="lead" style={{ margin: '14px auto 0' }}>
          Select a capability — the panel becomes that part of FleetOpz.
        </p>

        <div className="cc-grid" style={{ textAlign: 'left' }}>
          <div className="cc-nav">
            {AI_FEATURES.map((a) => (
              <button
                key={a.id}
                type="button"
                className="cc-btn"
                aria-selected={a.id === activeId}
                onClick={() => setActiveId(a.id)}
              >
                <span className="dot"></span>
                {a.label}
              </button>
            ))}
          </div>

          <div className="cc-panel">
            {/* key forces remount so the fade-in animation replays on switch */}
            <div className="cc-fade" key={active.id}>
              <h3>{active.title}</h3>
              <div className="sub">{active.sub}</div>
              {active.render()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
