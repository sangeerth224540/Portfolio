import { motion } from 'framer-motion'
import { TicketIcon, LeafIcon, ArrowUpRightIcon } from './icons/UiIcons'
import { IncidentArt, LeafArt } from './FrameArt'

const projects = [
  {
    frame: '01',
    title: 'Predicting the next high-priority ticket',
    client: 'ITSM Incident Management — ABC Tech',
    icon: TicketIcon,
    art: IncidentArt,
    description:
      'A classification model that flags high-priority ITSM tickets before they escalate, paired with ARIMA/SARIMA forecasts of incident volume so the resourcing team could staff ahead of demand rather than react to it.',
    tags: ['Random Forest', 'XGBoost', 'SMOTE', 'ARIMA / SARIMA'],
    metric: '85% → 88% accuracy',
  },
  {
    frame: '02',
    title: 'Telling three rice diseases apart from a leaf photo',
    client: 'Rice Leaf Disease Detection',
    icon: LeafIcon,
    art: LeafArt,
    description:
      'A CNN trained to distinguish Leaf Smut, Brown Spot, and Bacterial Leaf Blight. Augmentation kept it from memorising the training set, and the resulting performance reports fed back into how the field-scoring workflow was run.',
    tags: ['CNN', 'Data Augmentation', 'Feature Extraction'],
    metric: '3-class classifier',
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative scroll-mt-20 py-28 px-6 sm:px-8 bg-surface/40">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl text-ivory mb-4"
        >
          Selected reels
        </motion.h2>
        <p className="text-stone max-w-lg mb-16">Two projects, cut down to what mattered — the problem, the model, and what changed because of it.</p>

        <div className="flex flex-col gap-10">
          {projects.map((p) => {
            const Icon = p.icon
            const Art = p.art
            return (
              <motion.article
                key={p.frame}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group relative grid md:grid-cols-[1.1fr_1fr] gap-0 rounded-2xl border border-stone-dim/25 bg-surface overflow-hidden transition-colors duration-300 hover:border-brass/50"
              >
                <div className="p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-mono text-xs text-brass border border-brass-dim/50 rounded-full px-2.5 py-1">
                        Frame {p.frame}
                      </span>
                      <span className="text-stone text-xs font-mono">{p.client}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-ivory leading-snug text-balance">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-stone text-sm sm:text-[15px] leading-relaxed max-w-md">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] text-stone border border-stone-dim/40 rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative bg-void/60 border-t md:border-t-0 md:border-l border-stone-dim/25 flex flex-col justify-between p-6">
                  <div className="flex-1 flex items-center justify-center py-4 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                    <Art />
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-stone-dim/20">
                    <div className="flex items-center gap-2 text-brass">
                      <Icon size={16} />
                      <span className="font-mono text-xs">{p.metric}</span>
                    </div>
                    <ArrowUpRightIcon size={16} className="text-stone-dim group-hover:text-brass group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
