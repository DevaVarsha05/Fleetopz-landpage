import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AssetPlaceholder from './AssetPlaceholder'
import { ASSETS } from '../data/assets'
import { MODULES } from '../data/modules'

export default function ProductTour() {
  const [activeId, setActiveId] = useState(MODULES[0].id)
  const active = MODULES.find((m) => m.id === activeId)

  return (
    <section className="tour" id="tour">
      <motion.div
        className="wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow">Product tour</div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', color: '#fff' }}>
          Take a tour of your fleet command center.
        </h2>
        <p className="lead" style={{ marginTop: 14 }}>
          Everything your rental business needs, connected in one
          intelligent workspace.
        </p>

        <div className="tour-stage-wrap">
          <div className="tour-orbit-nav" role="tablist">
            {MODULES.map((m) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                className={`tour-node${m.id === activeId ? ' active' : ''}`}
                aria-selected={m.id === activeId}
                onClick={() => setActiveId(m.id)}
              >
                {m.tab}
              </button>
            ))}
          </div>

          <div className="tour-stage" style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div className="tour-stage-bar">
              <div className="dots"><i></i><i></i><i></i></div>
              <span>FleetOpz — {active.tab}</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.98, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.98, filter: 'blur(6px)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <AssetPlaceholder
                  src={ASSETS.tourScreens[active.assetKey]}
                  label={`${active.tab} screen — product screenshot goes here`}
                />
                <div className="tour-caption">
                  <h3>{active.title}</h3>
                  <p>{active.text}</p>
                  <div className="tour-signal">
                    <i></i>
                    {active.signal}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}