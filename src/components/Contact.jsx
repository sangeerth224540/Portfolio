import { motion } from 'framer-motion'
import { GitHubDark, LinkedIn } from '@ridemountainpig/svgl-react'
import { MailIcon, PhoneIcon } from './icons/UiIcons'
import Magnetic from './Magnetic'
import Aperture from './Aperture'

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-32 px-6 sm:px-8 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-40 opacity-40 pointer-events-none">
        <Aperture size={480} spin={false} />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-6xl text-ivory text-balance"
        >
          Got a dataset worth <span className="italic text-brass">a second look?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-stone max-w-md mx-auto"
        >
          Open to data science roles, ML collaborations, and conversations about anything from feature selection to RAG.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href="mailto:sangeerthprasadc@gmail.com"
            className="font-display text-xl sm:text-2xl text-ivory hover:text-brass transition-colors duration-300 border-b border-stone-dim/40 hover:border-brass pb-1"
          >
            sangeerthprasadc@gmail.com
          </a>

          <div className="flex items-center gap-6 mt-4 text-stone">
            <a href="tel:+917510895337" className="flex items-center gap-2 hover:text-brass transition-colors duration-300 text-sm">
              <PhoneIcon size={16} /> +91 75108 95337
            </a>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <Magnetic strength={14}>
              <a
                href="#"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-stone-dim/30 hover:border-brass overflow-hidden transition-colors duration-300"
                aria-label="LinkedIn"
                data-cursor="magnetic"
              >
                <span className="block w-5 h-5 shrink-0"><LinkedIn /></span>
              </a>
            </Magnetic>
            <Magnetic strength={14}>
              <a
                href="#"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-stone-dim/30 hover:border-brass overflow-hidden transition-colors duration-300"
                aria-label="GitHub"
                data-cursor="magnetic"
              >
                <span className="block w-5 h-5 shrink-0"><GitHubDark /></span>
              </a>
            </Magnetic>
            <Magnetic strength={14}>
              <a
                href="mailto:sangeerthprasadc@gmail.com"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-stone-dim/30 hover:border-brass hover:text-brass text-stone transition-colors duration-300"
                aria-label="Email"
                data-cursor="magnetic"
              >
                <MailIcon size={18} />
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto mt-28 pt-8 border-t border-stone-dim/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-stone-dim">Sangeerth C · Data Scientist</p>
        <p className="font-mono text-xs text-stone-dim">Kannur, Kerala, India</p>
      </div>
    </section>
  )
}
