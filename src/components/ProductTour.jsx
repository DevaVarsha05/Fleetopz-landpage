import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import AssetPlaceholder from './AssetPlaceholder'
import { ASSETS } from '../data/assets'
import { MODULES } from '../data/modules'

export default function ProductTour() {
  const ref = useReveal()
  const [activeId, setActiveId] = useState(MODULES[0].id)
  const active = MODULES.find((m) => m.id === activeId)

  return (
    <section className="tour" id="tour">
      <div className="wrap reveal" ref={ref}>
        <div className="eyebrow">Product tour</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,36px)' }}>
          Take a tour of the product
        </h2>
        <p className="lead" style={{ marginTop: 14 }}>
          Five core screens, one connected system. Select a module to see it.
        </p>

        <div className="tour-grid">
          <div className="tabs" role="tablist">
            {MODULES.map((m) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                className="tab"
                aria-selected={m.id === activeId}
                onClick={() => setActiveId(m.id)}
              >
                {m.tab}
              </button>
            ))}
          </div>

          <div role="tabpanel">
            {/* key forces remount so the fade-in animation replays on switch */}
            <div className="panel-fade" key={active.id}>
              <div className="frame">
                <div className="frame-bar">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <AssetPlaceholder
                  src={ASSETS.tourScreens[active.assetKey]}
                  label={`${active.tab} screen — product screenshot goes here`}
                />
              </div>
              <div className="panel-text">
                <h3>{active.title}</h3>
                <p>{active.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
