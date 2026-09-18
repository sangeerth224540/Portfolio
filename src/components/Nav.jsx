import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuIcon, CloseIcon } from './icons/UiIcons'

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'reel', label: 'Experience' },
  { id: 'craft', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-void/90 backdrop-blur-sm border-b border-stone-dim/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
        <button
          onClick={() => go('top')}
          className="font-display text-lg tracking-tight text-ivory"
        >
          Sangeerth C
        </button>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] text-stone">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="hover:text-brass transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
          <a
            href="mailto:sangeerthprasadc@gmail.com"
            className="rounded-full border border-brass-dim/60 px-4 py-1.5 text-ivory hover:border-brass hover:text-brass transition-colors duration-300"
          >
            Say hello
          </a>
        </nav>

        <button
          className="md:hidden text-ivory p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-void border-b border-stone-dim/20"
          >
            <div className="flex flex-col px-6 py-4 gap-4 font-mono text-sm text-stone">
              {LINKS.map((l) => (
                <button key={l.id} onClick={() => go(l.id)} className="text-left py-1 hover:text-brass">
                  {l.label}
                </button>
              ))}
              <a href="mailto:sangeerthprasadc@gmail.com" className="text-brass py-1">
                sangeerthprasadc@gmail.com
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
