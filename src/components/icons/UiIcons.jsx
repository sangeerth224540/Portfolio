// Hand-drawn, single-weight line icons for pure UI glyphs (menu, arrows,
// contact points) that svgl's brand-logo catalog doesn't cover. Kept in
// the same stroke language as the Aperture motif so they read as one
// family rather than a mixed icon kit.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function MenuIcon({ size = "1em", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...props}>
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="14" y2="17" />
    </svg>
  )
}

export function CloseIcon({ size = "1em", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  )
}

export function ArrowDownIcon({ size = "1em", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...props}>
      <line x1="12" y1="4" x2="12" y2="19" />
      <polyline points="6 13 12 19 18 13" />
    </svg>
  )
}

export function ArrowUpRightIcon({ size = "1em", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...props}>
      <line x1="6" y1="18" x2="18" y2="6" />
      <polyline points="8 6 18 6 18 16" />
    </svg>
  )
}

export function MailIcon({ size = "1em", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <polyline points="3.5 6.5 12 13 20.5 6.5" />
    </svg>
  )
}

export function PhoneIcon({ size = "1em", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...props}>
      <path d="M6.6 4h2.4l1.4 4-2 1.4a11.6 11.6 0 0 0 5.6 5.6l1.4-2 4 1.4v2.4a2 2 0 0 1-2.2 2 17.6 17.6 0 0 1-15-15A2 2 0 0 1 6.6 4Z" />
    </svg>
  )
}

export function CapIcon({ size = "1em", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...props}>
      <path d="M2 9 12 4l10 5-10 5-10-5Z" />
      <path d="M6 11.5V16c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6v-4.5" />
      <path d="M21 9v6" />
    </svg>
  )
}

export function AwardIcon({ size = "1em", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.8 7 20l5-2.2 5 2.2-1.5-6.2" />
    </svg>
  )
}

export function TicketIcon({ size = "1em", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...props}>
      <path d="M3 9a2 2 0 0 0 0 4v3.5A1.5 1.5 0 0 0 4.5 18h15a1.5 1.5 0 0 0 1.5-1.5V13a2 2 0 0 1 0-4V6.5A1.5 1.5 0 0 0 19.5 5h-15A1.5 1.5 0 0 0 3 6.5V9Z" />
      <path d="M14 5v13" strokeDasharray="1.6 2.4" />
    </svg>
  )
}

export function LeafIcon({ size = "1em", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...props}>
      <path d="M20 4c0 9-5.5 15-15 15H4v-1C4 8.5 10 4 20 4Z" />
      <path d="M6 18C10 12 13 8.5 19 5" />
    </svg>
  )
}
