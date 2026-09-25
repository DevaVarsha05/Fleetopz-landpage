// ---------------------------------------------------------------------------
// ASSET MANIFEST
// ---------------------------------------------------------------------------
// Drop real files into /public/assets/ and set the matching path below.
// Anything left as `null` renders as a labelled placeholder box instead of
// breaking the build, so the site stays fully functional until real
// screenshots/video are supplied.
//
// Example once you have a file:
//   heroDashboard: '/assets/hero-dashboard.png',
// ---------------------------------------------------------------------------

export const ASSETS = {
  brandLogo: '/assets/fleetopz-logo.png', // full lock-up (mark + wordmark + tagline), used in the header
  brandIcon: '/assets/fleetopz-icon.png', // mark only, used as the favicon
  poweredByLogo: '/assets/yazhsey-logo.png', // Yazhsey Technologies mark, used in the "Powered by" badge
  heroDashboard: '/assets/hero-dashboard.png',
  fleetOverview: '/assets/fleet-overview.png',
  productVideo: '/assets/product-demo.mp4',
  productVideoPoster: null, // /assets/product-demo-poster.png — optional still frame shown before play
  liveClientDashboard: '/assets/rdk-letterhead.png', // native size 1002x171 (~5.86:1) — a letterhead/logo card, not a screenshot
  tourScreens: {
    dashboard: '/assets/tour-dashboard.png',
    fleet: '/assets/tour-fleet.png',
    pnl: '/assets/tour-pnl.png',
    ledger: '/assets/tour-ledger.png',
    bookings: '/assets/fleet-overview.png', // this file is actually the Bookings screen
  },
}

export const CONTACT = {
  whatsappUrl: '#', // e.g. 'https://wa.me/6580000000'
  emailUrl: '#',    // e.g. 'mailto:hello@fleetopz.com'
}