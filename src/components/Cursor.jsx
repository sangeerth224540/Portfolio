import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const wide = window.matchMedia('(min-width: 768px)').matches
    if (!fine || !wide) return
    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const move = (e) => {
      setVisible(true)
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const leave = () => setVisible(false)

    const overHandler = (e) => {
      const target = e.target.closest('a, button, [data-cursor]')
      setHovering(!!target)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', overHandler)
    document.documentElement.addEventListener('mouseleave', leave)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', overHandler)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[200] rounded-full"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          backgroundColor: 'var(--color-brass)',
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[200] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: 'var(--color-brass)',
          opacity: visible ? (hovering ? 0.9 : 0.5) : 0,
        }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          backgroundColor: hovering ? 'rgba(200,155,74,0.12)' : 'rgba(200,155,74,0)',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </>
  )
}
