import { motion } from 'framer-motion'
import {
  Python,
  TensorFlowDark,
  FlaskDark,
  AmazonWebServicesDark,
  MongoDBDark,
  MySQLDark,
  HuggingFace,
  Git,
} from '@ridemountainpig/svgl-react'

const stack = [
  { name: 'Python', Logo: Python },
  { name: 'TensorFlow', Logo: TensorFlowDark },
  { name: 'Flask', Logo: FlaskDark },
  { name: 'AWS', Logo: AmazonWebServicesDark },
  { name: 'MongoDB', Logo: MongoDBDark },
  { name: 'MySQL', Logo: MySQLDark },
  { name: 'Hugging Face', Logo: HuggingFace },
  { name: 'Git', Logo: Git },
]

export default function StackReel() {
  return (
    <div className="border-t border-stone-dim/25 pt-8">
      <p className="font-mono text-xs text-stone-dim mb-6">Runs on</p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center gap-x-8 gap-y-5"
      >
        {stack.map(({ name, Logo }) => (
          <div
            key={name}
            className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            title={name}
          >
            <span className="block w-5 h-5 shrink-0">
              <Logo />
            </span>
            <span className="text-xs text-stone font-mono">{name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
