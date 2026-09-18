import { motion } from 'framer-motion'

const roles = [
  {
    org: 'Avodha Edutech',
    title: 'Data Science & AI Trainer',
    place: 'Kannur, Kerala, India',
    time: 'Nov 2025 — Present',
    points: [
      'Design and deliver curriculum covering ML, computer vision, and NLP through hands-on projects.',
      'Mentor learners through project development, resume building, and interview prep.',
      'Debug ML/DL assignments — environment setup, training runs, library issues — to keep learners moving.',
    ],
  },
  {
    org: 'Rubixe — AI Solutions',
    title: 'Data Science Intern',
    place: 'Bengaluru, India',
    time: 'Oct 2024 — May 2025',
    points: [
      'Applied statistical modeling, dimensionality reduction, and feature selection — Random Forest baseline lifted from 85% to 88% accuracy.',
      'Ran anomaly detection across incident datasets, surfacing patterns that shaped ticket-triage strategy.',
      'Built and validated Regression, Classification, and Clustering models in Python and R; precision moved from 78% to 82%.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="reel" className="relative py-28 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl text-ivory mb-16"
        >
          On the job
        </motion.h2>

        <div className="relative pl-8 sm:pl-12">
          {/* the reel line — draws itself as you scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-0 sm:left-2 top-2 bottom-2 w-px bg-gradient-to-b from-brass via-stone-dim to-transparent"
          />

          <div className="flex flex-col gap-16">
            {roles.map((r, i) => (
              <motion.div
                key={r.org}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-8 sm:-left-12 top-1.5 w-2.5 h-2.5 rounded-full bg-brass" />
                <p className="font-mono text-xs text-stone mb-2">{r.time}</p>
                <h3 className="font-display text-2xl text-ivory">{r.title}</h3>
                <p className="text-brass text-sm mt-1">{r.org} · {r.place}</p>
                <ul className="mt-4 space-y-2 max-w-xl">
                  {r.points.map((p) => (
                    <li key={p} className="text-stone text-sm sm:text-[15px] leading-relaxed flex gap-3">
                      <span className="text-stone-dim mt-2 h-px w-3 shrink-0 bg-stone-dim" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
