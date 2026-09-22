import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <ErrorBoundary>
      <div className="relative bg-void min-h-screen">
        <div className="film-grain" />
        <Cursor />
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Credentials />
          <Contact />
        </main>
      </div>

      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>
    </ErrorBoundary>
  )
}
