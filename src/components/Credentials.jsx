import { motion } from 'framer-motion'
import { CapIcon, AwardIcon } from './icons/UiIcons'

const education = [
  {
    program: 'Data Science',
    school: 'Datamites Global Training Institute',
    place: 'Bengaluru, India',
    time: 'May 2024 — Sep 2024',
  },
  {
    program: 'Bachelor of Computer Applications',
    school: 'Indira Gandhi National Open University',
    place: 'Kannur, Kerala',
    time: 'Jan 2021 — Jan 2024',
  },
]

const certifications = [
  { name: 'Certified Data Science', issuer: 'NASSCOM' },
  { name: 'Certified Data Science', issuer: 'IABAC' },
]

export default function Credentials() {
  return (
    <section className="relative py-28 px-6 sm:px-8 bg-surface/40">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-2 mb-8 text-brass">
            <CapIcon size={18} />
            <h2 className="font-mono text-xs">Education</h2>
          </div>
          <div className="flex flex-col gap-8">
            {education.map((e) => (
              <motion.div
                key={e.program}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-xl text-ivory">{e.program}</h3>
                <p className="text-stone text-sm mt-1">{e.school} · {e.place}</p>
                <p className="font-mono text-xs text-stone-dim mt-1">{e.time}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-8 text-brass">
            <AwardIcon size={18} />
            <h2 className="font-mono text-xs">Certifications</h2>
          </div>
          <div className="flex flex-col gap-8">
            {certifications.map((c) => (
              <motion.div
                key={c.issuer}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-xl text-ivory">{c.name}</h3>
                <p className="text-stone text-sm mt-1">{c.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
