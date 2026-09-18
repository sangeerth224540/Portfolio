import { motion } from 'framer-motion'
import { ArrowDownIcon } from './icons/UiIcons'
import Aperture from './Aperture'

const stats = [
  { value: '88%', label: 'peak model accuracy, ITSM triage' },
  { value: '3–4%', label: 'avg. lift from feature selection' },
  { value: '02', label: 'production deployments shipped' },
]

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-6 sm:px-8 pt-28 pb-16">
      <div className="vignette" />

      {/* aperture motif, held off-center like a lens flare in frame */}
      <div className="absolute -right-24 top-[58%] -translate-y-1/2 opacity-80 pointer-events-none hidden sm:block z-[1]">
        <Aperture size={480} />
      </div>
      <div className="absolute right-1/2 translate-x-1/2 -top-10 opacity-50 pointer-events-none sm:hidden z-[1]">
        <Aperture size={260} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono text-sm text-brass mb-6"
        >
          Kannur, Kerala — Data Scientist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-normal text-[15vw] sm:text-[9vw] lg:text-[6.4rem] leading-[0.95] text-ivory text-balance"
        >
          Models that hold
          <br />
          <span className="italic text-stone">up under weight.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 max-w-xl text-stone text-base sm:text-lg leading-relaxed"
        >
          I build the full pipeline — statistical modeling, deep learning, and
          the RAG systems around it — then ship it somewhere people actually
          use it. Currently training the next wave of data scientists at
          Avodha Edutech.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="rounded-full bg-brass text-void font-medium px-6 py-3 text-sm hover:bg-ivory transition-colors duration-300"
          >
            See the work
          </a>
          <a
            href="mailto:sangeerthprasadc@gmail.com"
            className="rounded-full border border-stone-dim px-6 py-3 text-sm text-ivory hover:border-brass hover:text-brass transition-colors duration-300"
          >
            sangeerthprasadc@gmail.com
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl border-t border-stone-dim/25 pt-6"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-2xl sm:text-3xl text-brass">{s.value}</dt>
              <dd className="mt-1 text-[11px] sm:text-xs text-stone leading-snug">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-dim"
        aria-hidden="true"
      >
        <ArrowDownIcon size={18} />
      </motion.div>
    </section>
  )
}
