// ---------------------------------------------------------------------------
// ASSET MANIFEST
// ---------------------------------------------------------------------------
// Drop real files into /public/assets/ and set the matching path below.
// Anything left as `null` renders as a labelled placeholder box instead of
// breaking the build, so the site stays fully functional until real
// screenshots/video are supplied.
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
    bookings: '/assets/fleet-overview.png', // this file is actually the Bookings screen (no longer used in the tour)
  },
  // Booking Experience screens. `ratio` is the native width / height, used to
  // size the product frame so nothing is cropped or stretched.
  bookingScreens: {
    flow: [
      { id: 'customer', step: 'Customer Details', src: '/assets/booking/flow-01-customer-details.png', ratio: 1065 / 861 },
      { id: 'details', step: 'Booking Details', src: '/assets/booking/flow-02-booking-details.png', ratio: 1059 / 827 },
      { id: 'pricing', step: 'Pricing & Charges', src: '/assets/booking/flow-03-pricing-charges.png', ratio: 1026 / 816 },
      { id: 'review', step: 'Review & Confirm', src: '/assets/booking/flow-04-review-confirm.png', ratio: 1019 / 818 },
    ],
    overview: [
      { id: 'overview', step: 'Overview', src: '/assets/booking/overview-01-overview.png', ratio: 1907 / 917 },
      { id: 'pricing-payment', step: 'Pricing & Payment', src: '/assets/booking/overview-02-pricing-payment.png', ratio: 1197 / 852 },
    ],
  },
}

export const CONTACT = {
  whatsappUrl: '#', // e.g. 'https://wa.me/6580000000'
  emailUrl: '#',    // e.g. 'mailto:hello@fleetopz.com'
}