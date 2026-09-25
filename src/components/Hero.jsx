import { motion } from 'framer-motion'
import { ArrowDownIcon, ArrowRightIcon, MailIcon } from './icons/UiIcons'
import HeroPortrait from './HeroPortrait'
import Magnetic from './Magnetic'

const stats = [
  { value: '1.5+', label: 'Years experience' },
  { value: '4', label: 'Projects shipped' },
  { value: '8+', label: 'Frameworks & tools' },
  { value: '88%', label: 'Peak model accuracy' },
]

const sideLabel = ['TRAIN', 'TUNE', 'DEPLOY']

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-6 sm:px-8 lg:pr-20 pt-28 pb-16">
      <div className="vignette" />

      {/* vertical process label, held at the right margin like a slate marking */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-10">
        {sideLabel.map((word, i) => (
          <div key={word} className="flex flex-col items-center gap-3">
            {i > 0 && <span className="w-px h-6 bg-stone-dim/40" />}
            <span
              className="font-mono text-[11px] tracking-[0.25em] text-brass"
              style={{ writingMode: 'vertical-rl' }}
            >
              {word}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-10 items-center">
          {/* text column */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-mono text-xs sm:text-sm tracking-[0.15em] text-brass mb-6"
            >
              DATA SCIENTIST — ML · DEEP LEARNING · LLM / RAG
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-normal text-[13vw] sm:text-[8vw] lg:text-[4.6rem] leading-[0.98] text-ivory text-balance"
            >
              Models that hold
              <br />
              <span className="italic text-stone">up under weight.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-7 max-w-lg text-stone text-base sm:text-lg leading-relaxed"
            >
              I build the full pipeline — statistical modeling, deep learning,
              and the RAG systems around it — then ship it somewhere people
              actually use it. Currently training the next wave of data
              scientists at Avodha Edutech.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Magnetic strength={14}>
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-brass text-void font-medium px-6 py-3 text-sm hover:bg-ivory transition-colors duration-300"
                  data-cursor="magnetic"
                >
                  View my work <ArrowRightIcon size={16} />
                </a>
              </Magnetic>
              <Magnetic strength={14}>
                <a
                  href="mailto:sangeerthprasadc@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-dim px-6 py-3 text-sm text-ivory hover:border-brass hover:text-brass transition-colors duration-300"
                  data-cursor="magnetic"
                >
                  Say hello <MailIcon size={16} />
                </a>
              </Magnetic>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 max-w-xl border-t border-stone-dim/25 pt-6 sm:divide-x sm:divide-stone-dim/25"
            >
              {stats.map((s) => (
                <div key={s.label} className="sm:px-5 sm:first:pl-0">
                  <dt className="font-display text-2xl sm:text-3xl text-brass">{s.value}</dt>
                  <dd className="mt-1 text-[11px] sm:text-xs text-stone leading-snug">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* portrait column — hidden on mobile/small screens, shown on md and above */}
          <div className="hidden md:block order-1 lg:order-2">
            <HeroPortrait />
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-dim z-10"
        aria-hidden="true"
      >
        <ArrowDownIcon size={18} />
      </motion.div>
    </section>
  )
}