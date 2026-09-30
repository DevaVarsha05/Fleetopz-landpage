import { useState } from 'react'
import { motion } from 'framer-motion'
import { ASSETS } from '../data/assets'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="video-section">
      <motion.div
        className="wrap"
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Product demo</div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,40px)' }}>See FleetOpz in motion</h2>
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
      </motion.div>
    </section>
  )
}