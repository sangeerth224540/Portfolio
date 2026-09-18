// Abstract line-art visuals standing in for project screenshots —
// one motif per project, drawn from what the project actually does.

export function IncidentArt() {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full">
      <defs>
        <linearGradient id="bars" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--color-brass)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--color-brass)" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* forecast curve */}
      <polyline
        points="10,170 60,150 110,160 160,110 210,130 260,70 310,95 390,40"
        fill="none"
        stroke="var(--color-stone-dim)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      {/* priority bars */}
      {[
        { x: 30, h: 40 },
        { x: 80, h: 70 },
        { x: 130, h: 55 },
        { x: 180, h: 110 },
        { x: 230, h: 65 },
        { x: 280, h: 130 },
        { x: 330, h: 90 },
      ].map((b) => (
        <rect
          key={b.x}
          x={b.x}
          y={210 - b.h}
          width="22"
          height={b.h}
          fill="url(#bars)"
          rx="2"
        />
      ))}
      <line x1="8" y1="210" x2="392" y2="210" stroke="var(--color-stone-dim)" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

export function LeafArt() {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full">
      {/* confusion-matrix / classification grid */}
      <g opacity="0.9">
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 3 }).map((_, c) => {
            const isDiag = r === c
            return (
              <rect
                key={`${r}-${c}`}
                x={80 + c * 70}
                y={30 + r * 60}
                width="58"
                height="48"
                rx="4"
                fill={isDiag ? 'var(--color-brass)' : 'var(--color-surface-2)'}
                fillOpacity={isDiag ? 0.5 - r * 0.08 : 0.6}
                stroke="var(--color-stone-dim)"
                strokeWidth="1"
              />
            )
          })
        )}
      </g>
      {/* leaf vein motif beneath */}
      <path
        d="M40 220 C 120 200, 280 200, 360 220"
        fill="none"
        stroke="var(--color-stone-dim)"
        strokeWidth="1.2"
      />
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={i}
          x1={70 + i * 50}
          y1={212}
          x2={70 + i * 50 - 10}
          y2={228}
          stroke="var(--color-stone-dim)"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}
