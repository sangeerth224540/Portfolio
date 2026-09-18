import { motion } from 'framer-motion'
import ProfileFrame from './ProfileFrame'

export default function About() {
  return (
    <section className="relative py-24 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
        <ProfileFrame />

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="font-display text-2xl sm:text-3xl leading-snug text-ivory text-balance"
          >
            I work the whole reel — statistical modeling and feature
            engineering on one end, deep learning and LLM systems on the
            other, and a Flask or FastAPI deployment holding it together in
            the middle.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-stone leading-relaxed max-w-xl"
          >
            Regression, classification, clustering, time-series forecasting —
            turning messy data into something a stakeholder can act on, and
            explaining why, not just what. On the applied-AI side, that now
            extends to RAG pipelines and vector search built on top of
            Hugging Face models.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
