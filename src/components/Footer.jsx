import { ASSETS } from '../data/assets'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <div className="foot-brand">
          <img src={ASSETS.poweredByLogo} alt="Yazhsey Technologies" className="footer-logo" />
          <strong>YazhSey Technologies</strong>
        </div>
        <div className="foot-meta">
          <span>Dindigul, Tamil Nadu, India</span>
          <span className="foot-dot">•</span>
          <span>Udyam-registered micro enterprise</span>
        </div>
      </div>
    </footer>
  )
}