import { useState } from 'react'
import { motion } from 'framer-motion'
import Aperture from './Aperture'

export default function HeroPortrait({ src = '/profile.png', name = 'Sangeerth C' }) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px] mx-auto lg:mx-0 lg:ml-auto"
    >
      {/* warm rim glow behind the subject */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80%] aspect-square rounded-full bg-brass/25 blur-[70px]" />
      </div>

      {/* aperture backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Aperture size={420} className="opacity-90" />
      </div>

      {/* portrait, softly vignetted so it blends into the section rather than sitting in a hard box */}
      <div className="relative aspect-[4/5]">
        {!failed ? (
          <img
            src={src}
            alt={name}
            onError={() => setFailed(true)}
            className="w-full h-full object-cover object-top brightness-75"
            style={{
              maskImage:
                'radial-gradient(ellipse 78% 85% at 50% 42%, black 60%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 78% 85% at 50% 42%, black 60%, transparent 100%)',
            }}
          />
        ) : (
          <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
            <svg viewBox="0 0 200 240" className="w-[70%] h-[85%] text-brass/40" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="100" cy="66" r="40" />
              <path d="M28 236 C28 148 60 116 100 116 C140 116 172 148 172 236 Z" />
            </svg>
            <span className="absolute bottom-16 font-display italic text-6xl text-brass/70">
              {initials}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
