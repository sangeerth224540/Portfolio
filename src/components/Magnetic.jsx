import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Wraps a single interactive child (button/link) and gives it a subtle
// magnetic pull toward the cursor. No-ops on touch devices since there's
// no hover/cursor to react to there.
export default function Magnetic({ children, strength = 22 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 })

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / rect.width) * strength)
    y.set((relY / rect.height) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      data-cursor="magnetic"
    >
      {children}
    </motion.span>
  )
}
