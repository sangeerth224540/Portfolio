import { useState } from 'react'
import { motion } from 'framer-motion'

const Bracket = ({ className }) => (
  <svg viewBox="0 0 28 28" className={`absolute w-6 h-6 sm:w-8 sm:h-8 text-brass/70 ${className}`}>
    <path d="M2 12V4a2 2 0 0 1 2-2h8" fill="none" stroke="currentColor" strokeWidth="1.4" />
  </svg>
)

export default function ProfileFrame({ src = '/profile.png', name = 'Sangeerth C' }) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0"
    >
      <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-stone-dim/40 bg-surface">
        {!failed ? (
          <img
            src={src}
            alt={name}
            onError={() => setFailed(true)}
            className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] brightness-75"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-surface-2 to-void">
            <span className="font-display italic text-6xl sm:text-7xl text-brass/70">{initials}</span>
          </div>
        )}
        <div className="absolute inset-0 ring-1 ring-inset ring-brass/10" />
      </div>

      {/* viewfinder brackets, held just outside the frame like a focus indicator */}
      <Bracket className="-top-2 -left-2" />
      <Bracket className="-top-2 -right-2 rotate-90" />
      <Bracket className="-bottom-2 -right-2 rotate-180" />
      <Bracket className="-bottom-2 -left-2 -rotate-90" />

      <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-stone-dim">
        <span>{name}</span>
        <span>001A</span>
      </div>
    </motion.div>
  )
}
