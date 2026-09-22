import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuIcon, CloseIcon } from './icons/UiIcons'
import Magnetic from './Magnetic'

const LINKS = [
  { id: 'work', label: 'Work', n: '01' },
  { id: 'reel', label: 'Experience', n: '02' },
  { id: 'craft', label: 'Skills', n: '03' },
  { id: 'contact', label: 'Contact', n: '04' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock background scroll while the takeover menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  // close on escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id) => {
    setOpen(false)
    // wait a frame so the takeover has started closing before we scroll
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-colors duration-500 ${
        scrolled || open ? 'bg-void/90 backdrop-blur-sm border-b border-stone-dim/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
        <button
          type="button"
          onClick={() => go('top')}
          className="font-display text-lg tracking-tight text-ivory relative z-10"
        >
          Sangeerth C
        </button>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] text-stone">
          {LINKS.map((l) => (
            <button key={l.id} type="button" onClick={() => go(l.id)} className="hover:text-brass transition-colors duration-300">
              {l.label}
            </button>
          ))}
          <Magnetic strength={16}>
            <a
              href="mailto:sangeerthprasadc@gmail.com"
              className="inline-block rounded-full border border-brass-dim/60 px-4 py-1.5 text-ivory hover:border-brass hover:text-brass transition-colors duration-300"
            >
              Say hello
            </a>
          </Magnetic>
        </nav>

        <button
          type="button"
          className="md:hidden text-ivory p-2 -mr-2 relative z-10"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* full-screen cinematic takeover menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(2% at calc(100% - 40px) 32px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 32px)' }}
            exit={{ clipPath: 'circle(2% at calc(100% - 40px) 32px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden fixed inset-0 h-[100dvh] bg-void"
          >
            <div className="h-full flex flex-col justify-center px-8">
              <nav className="flex flex-col gap-2">
                {LINKS.map((l, i) => (
                  <motion.button
                    key={l.id}
                    type="button"
                    onClick={() => go(l.id)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                    className="flex items-baseline gap-4 py-3 text-left border-b border-stone-dim/20"
                  >
                    <span className="font-mono text-xs text-brass">{l.n}</span>
                    <span className="font-display text-4xl text-ivory">{l.label}</span>
                  </motion.button>
                ))}
              </nav>

              <motion.a
                href="mailto:sangeerthprasadc@gmail.com"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="mt-10 font-mono text-sm text-brass"
              >
                sangeerthprasadc@gmail.com ↗
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
