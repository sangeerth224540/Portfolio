import { motion } from 'framer-motion'

// A camera-aperture / lens-iris motif — recurring graphic device tying
// the "cinematic" direction to the subject's computer-vision work.
export default function Aperture({ size = 420, blades = 8, className = '', spin = true }) {
  const radius = size / 2
  const innerR = radius * 0.32
  const outerR = radius * 0.98

  const bladePaths = Array.from({ length: blades }).map((_, i) => {
    const angle = (i / blades) * Math.PI * 2
    const nextAngle = ((i + 1) / blades) * Math.PI * 2
    const x1 = radius + Math.cos(angle) * outerR
    const y1 = radius + Math.sin(angle) * outerR
    const x2 = radius + Math.cos(nextAngle) * outerR
    const y2 = radius + Math.sin(nextAngle) * outerR
    const midAngle = (angle + nextAngle) / 2
    const cx = radius + Math.cos(midAngle) * innerR
    const cy = radius + Math.sin(midAngle) * innerR
    return `M ${cx} ${cy} L ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} Z`
  })

  return (
    <motion.svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, rotate: spin ? 360 : 0 }}
      transition={{
        opacity: { duration: 1.2, ease: 'easeOut' },
        scale: { duration: 1.2, ease: 'easeOut' },
        rotate: spin ? { duration: 90, repeat: Infinity, ease: 'linear' } : { duration: 0 },
      }}
    >
      <circle cx={radius} cy={radius} r={outerR + 6} fill="none" stroke="var(--color-stone-dim)" strokeWidth="1" opacity="0.4" />
      {bladePaths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="var(--color-brass)"
          strokeWidth="1"
          opacity={0.35}
        />
      ))}
      <circle cx={radius} cy={radius} r={innerR} fill="none" stroke="var(--color-brass)" strokeWidth="1.2" opacity="0.6" />
    </motion.svg>
  )
}
