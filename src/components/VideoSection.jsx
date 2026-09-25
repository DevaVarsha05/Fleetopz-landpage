import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ASSETS } from '../data/assets'

export default function VideoSection() {
  const ref = useReveal()
  const [playing, setPlaying] = useState(false)

  return (
    <section>
      <div className="wrap reveal" style={{ textAlign: 'center' }} ref={ref}>
        <div className="eyebrow">Product demo</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,36px)' }}>
          See FleetOpz in motion
        </h2>
        <p className="lead" style={{ margin: '14px auto 0' }}>
          A short walkthrough of the fleet, booking and AI experience.
        </p>

        <div className="video-frame">
          {ASSETS.productVideo ? (
            <video
              src={ASSETS.productVideo}
              poster={ASSETS.productVideoPoster || undefined}
              controls={playing}
              autoPlay={playing}
              onEnded={() => setPlaying(false)}
            />
          ) : (
            <div className="asset">Product demo video goes here</div>
          )}

          {!playing && (
            <button
              className="play"
              type="button"
              aria-label="Play product demo video"
              onClick={() => setPlaying(true)}
            >
              <span>▶</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
