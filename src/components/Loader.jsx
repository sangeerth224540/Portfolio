import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Loader({ onDone, minDuration = 2400 }) {
  const [count, setCount] = useState(3)

  useEffect(() => {
    const tick = setInterval(() => {
      setCount((c) => (c > 1 ? c - 1 : c))
    }, minDuration / 3.4)

    const done = setTimeout(() => {
      clearInterval(tick)
      onDone?.()
    }, minDuration)

    return () => {
      clearInterval(tick)
      clearTimeout(done)
    }
  }, [minDuration, onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[300] bg-void flex flex-col items-center justify-center"
      exit={{
        clipPath: 'circle(0% at 50% 50%)',
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className="relative w-24 h-24 sm:w-28 sm:h-28">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-stone-dim)" strokeWidth="1" opacity="0.4" />
          <motion.circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="var(--color-brass)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 46}
            initial={{ strokeDashoffset: 2 * Math.PI * 46 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: minDuration / 1000, ease: 'linear' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            key={count}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="font-display text-3xl sm:text-4xl text-ivory"
          >
            {count}
          </motion.span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 font-mono text-[11px] tracking-[0.2em] text-stone-dim"
      >
        SANGEERTH C — LOADING REEL
      </motion.p>
    </motion.div>
  )
}
