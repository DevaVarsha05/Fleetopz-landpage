export const MODULES = [
  {
    id: 'dashboard',
    tab: 'Dashboard',
    title: 'See your whole fleet at a glance',
    text: "Total fleet, available vehicles, on-rent count, today's bookings and revenue, fleet status and today's operations — one screen.",
    assetKey: 'dashboard',
    signal: 'Fleet briefing ready',
  },
  {
    id: 'fleet',
    tab: 'Fleet',
    title: 'Know which cars are free, booked or off the road',
    text: 'Every vehicle with plate, model, investment, purchase date and registration expiry, live.',
    assetKey: 'fleet',
    signal: '2 vehicles need attention today',
  },
  {
    id: 'pnl',
    tab: 'P&L',
    title: 'Profit and loss, by period',
    text: 'Revenue vs expenses, net profit and margin, with a monthly chart so you see the trend, not just a snapshot.',
    assetKey: 'pnl',
    signal: 'AI financial insight available',
  },
  {
    id: 'ledger',
    tab: 'Ledger',
    title: 'Every transaction, in one record',
    text: 'Income and expense entries tied to bookings and vehicles, always reconciled — the financial source of truth behind every screen.',
    assetKey: 'ledger',
    signal: 'Fully reconciled, zero drift',
  },
]