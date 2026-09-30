import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AI_FEATURES = [
  {
    id: 'assistant',
    label: 'AI Assistant',
    title: 'AI Assistant',
    sub: 'Ask anything about your fleet, in plain language.',
    render: () => (
      <>
        <div className="chat-line chat-u">&quot;Which vehicles need attention today?&quot;</div>
        <div className="chat-line chat-a">&quot;3 vehicles require attention today — 1 registration renewal and 2 due for maintenance.&quot;</div>
        <div className="chat-line chat-u">&quot;Which vehicle earned the most this month?&quot;</div>
        <div className="chat-typing"><span></span><span></span><span></span></div>
        <div className="card-row">
          <div className="data-card"><b>8/9</b><span>Available</span></div>
          <div className="data-card"><b>SGD 160</b><span>Today&apos;s revenue</span></div>
          <div className="data-card"><b>2</b><span>Active alerts</span></div>
        </div>
      </>
    ),
  },
  {
    id: 'briefing',
    label: 'Daily Briefing',
    title: 'Good Morning',
    sub: "Today's fleet briefing, ready before you open the app.",
    render: () => (
      <>
        <div className="card-row">
          <div className="data-card"><b>2</b><span>Pickups</span></div>
          <div className="data-card"><b>1</b><span>Returns</span></div>
          <div className="data-card"><b>0</b><span>Maintenance</span></div>
          <div className="data-card"><b>SGD 160</b><span>Revenue so far</span></div>
        </div>
        <div className="mini" style={{ marginTop: 18 }}>
          <b>2 important alerts</b> need review before end of day — FleetOpz
          proactively tells you what matters each morning.
        </div>
      </>
    ),
  },
  {
    id: 'alerts',
    label: 'Smart Alerts',
    title: 'Smart Alerts',
    sub: 'AI watches the business and surfaces what needs attention.',
    render: () => (
      <div className="signal-flow">
        <div className="signal-step detect">
          <span className="sdot"></span>
          <div><b>Fleet signal detected</b><span>Vehicle utilization dropped this week</span></div>
        </div>
        <div className="signal-step">
          <span className="sdot"></span>
          <div><b>AI analysis</b><span>Comparing against seasonal booking patterns</span></div>
        </div>
        <div className="signal-step">
          <span className="sdot"></span>
          <div><b>Insight</b><span>Demand is normal — availability is the constraint</span></div>
        </div>
        <div className="signal-step action">
          <span className="sdot"></span>
          <div><b>Recommended action</b><span>Review pricing or availability for this segment</span></div>
        </div>
      </div>
    ),
  },
  {
    id: 'forecast',
    label: 'Forecasting',
    title: 'AI Forecasting',
    sub: 'Past data, extended into a forecast.',
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
        <div className="forecast-split">
          <span><b className="past"></b>Past data</span>
          <span><b className="future"></b>AI forecast</span>
        </div>
        <div className="mini">
          Revenue and booking demand forecast for next week — an estimate to
          help you prepare, not a guarantee.
        </div>
      </>
    ),
  },
  {
    id: 'reco',
    label: 'Recommendations',
    title: 'AI Recommendations',
    sub: 'From insight to action.',
    render: () => (
      <div className="rec-flow">
        <div className="rec-step">
          <span className="rnum">01</span>
          <div><b>Insight</b><p>Booking demand is expected to increase over the next period.</p></div>
        </div>
        <div className="rec-step">
          <span className="rnum">02</span>
          <div><b>Recommendation</b><p>Review vehicle availability ahead of the expected demand.</p></div>
        </div>
        <div className="rec-step">
          <span className="rnum">03</span>
          <div>
            <b>Suggested action</b>
            <p>Confirm which vehicles to free up for the upcoming period.</p>
            <a href="#tour" className="btn btn-ghost rec-cta" style={{ padding: '10px 18px', fontSize: 13 }}>Review Insight</a>
          </div>
        </div>
      </div>
    ),
  },
]

export default function AISection() {
  const [activeId, setActiveId] = useState(AI_FEATURES[0].id)
  const active = AI_FEATURES.find((a) => a.id === activeId)

  return (
    <section className="ai-section" id="ai">
      <motion.div
        className="wrap"
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow" style={{ justifyContent: 'center' }}>FleetOpz Intelligence</div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', color: '#fff' }}>
          Your fleet doesn&apos;t just run. It thinks ahead.
        </h2>
        <p className="lead" style={{ margin: '14px auto 0' }}>
          FleetOpz brings intelligence into your everyday rental operations —
          helping you understand what is happening, what needs attention,
          and what comes next.
        </p>

        <div className="ai-hub" style={{ textAlign: 'left' }}>
          <div className="ai-nav">
            {AI_FEATURES.map((a) => (
              <button
                key={a.id}
                type="button"
                className={`ai-nav-btn${a.id === activeId ? ' active' : ''}`}
                onClick={() => setActiveId(a.id)}
              >
                <span className="dot"></span>
                {a.label}
              </button>
            ))}
          </div>

          <div className="ai-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{active.title}</h3>
                <div className="sub">{active.sub}</div>
                {active.render()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}