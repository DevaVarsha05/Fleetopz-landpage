# FleetOpz Landing Page

React + Vite (JavaScript/JSX, no TypeScript) rebuild of the approved FleetOpz
landing page design. All original sections, copy, layout and interactions
are preserved — this is a structural conversion, not a redesign.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
index.html                 Vite entry HTML (loads /src/main.jsx)
src/
  main.jsx                 React root
  App.jsx                  Assembles all sections in order
  index.css                Global stylesheet (ported 1:1 from the original design)
  components/
    Header.jsx              Sticky nav
    Hero.jsx                 Hero with floating stat pills
    StorySection.jsx         "Everything a rental fleet runs on" intro
    ProductTour.jsx           Dashboard / Fleet / P&L / Ledger / Finance tabs
    VideoSection.jsx          Product demo video (click-to-play)
    AISection.jsx              AI Assistant / Daily Briefing / Alerts / Forecasting / Recommendations
    HowItWorks.jsx             4-step "Manage -> Operate -> Understand"
    BusinessValue.jsx          3 value cards
    LiveClient.jsx              RDK Trading case study
    Pricing.jsx                  Quote-based pricing + request-a-quote form
    FinalCTA.jsx                 Book a demo (WhatsApp / email)
    Footer.jsx                   Company footer
    AssetPlaceholder.jsx        Shared placeholder/real-image swap component
  data/
    assets.js                  <-- SINGLE PLACE to plug in real images/video
    modules.js                  Product Tour tab content
  hooks/
    useReveal.js                Scroll-reveal animation hook
public/
  assets/                       Put real image/video files here
```

## Replacing placeholder assets

Every screenshot/video in the design is currently a dashed placeholder box.
To swap in real assets once you have them:

1. Drop the file into `public/assets/` (e.g. `public/assets/hero-dashboard.png`).
2. Open `src/data/assets.js` and set the matching key to `/assets/your-file.png`.

That's it — no component code needs to change. Anything left as `null` will
keep rendering as a labelled placeholder, so the site never breaks while
assets are still being finalized.

`src/data/assets.js` also holds the WhatsApp and email links used by the
header/footer CTAs (`CONTACT.whatsappUrl`, `CONTACT.emailUrl`) — currently
`#` placeholders.

## Known placeholders / things to wire up later

- All product screenshots and the demo video are placeholders (see above).
- "Chat on WhatsApp" / "Send an email" buttons point to `#` until real
  links are added in `src/data/assets.js`.
- The Request a Quote form is fully interactive (controlled inputs,
  validation on required fields) but doesn't yet submit anywhere — it
  currently just confirms receipt locally and scrolls to "Book a demo".
  Wire `handleSubmit` in `src/components/Pricing.jsx` to a real endpoint
  or email service when one is available.
