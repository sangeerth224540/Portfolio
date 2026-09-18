import { motion } from 'framer-motion'
import StackReel from './StackReel'

const groups = [
  {
    title: 'Programming',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL'],
  },
  {
    title: 'Machine learning & deep learning',
    items: ['Regression', 'Classification', 'Clustering', 'CNN', 'RNN', 'LSTM', 'Transfer learning', 'Hyperparameter tuning'],
  },
  {
    title: 'AI & NLP',
    items: ['LLMs', 'RAG pipelines', 'Vector search', 'Sentence embeddings', 'Tokenization', 'Sentiment analysis', 'Hugging Face'],
  },
  {
    title: 'Frameworks',
    items: ['TensorFlow', 'PyTorch', 'Keras', 'OpenCV'],
  },
  {
    title: 'Visualization',
    items: ['Power BI', 'Tableau', 'Excel'],
  },
  {
    title: 'Cloud & databases',
    items: ['AWS', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Deployment & tools',
    items: ['Flask', 'REST APIs', 'Model serving', 'Git', 'GitHub', 'Jupyter'],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}
const chip = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function Skills() {
  return (
    <section id="craft" className="relative py-28 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl text-ivory mb-16"
        >
          The instrument panel
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={container}
              transition={{ delay: gi * 0.05 }}
              className="border-t border-stone-dim/25 pt-4"
            >
              <h3 className="font-mono text-xs text-brass mb-3">{g.title}</h3>
              <motion.div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={chip}
                    className="text-sm text-stone hover:text-ivory hover:border-brass/60 transition-colors duration-200 border border-stone-dim/30 rounded-md px-2.5 py-1"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <StackReel />
        </div>
      </div>
    </section>
  )
}
