import { ASSETS } from '../data/assets'

const NAV_LINKS = [
  { href: '#tour', label: 'Product tour' },
  { href: '#ai', label: 'AI features' },
  { href: '#delivered', label: 'Live client' },
  { href: '#pricing', label: 'Pricing' },
]

function scrollToId(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    scrollToId(href)
  }

  return (
    <header className="site">
      <div className="wrap nav">
        <a
          className="brand"
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
        >
          <img src={ASSETS.brandIcon} alt="FleetOpz" className="brand-logo" />
        </a>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn-primary" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
          Book a demo
        </a>
      </div>
    </header>
  )
}