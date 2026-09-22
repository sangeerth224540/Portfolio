import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Portfolio crashed:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-[300] bg-void flex flex-col items-center justify-center px-6 text-center">
          <svg viewBox="0 0 100 100" className="w-16 h-16 mb-6 opacity-70">
            <circle cx="50" cy="50" r="30" fill="none" stroke="var(--color-brass)" strokeWidth="1.2" />
            <line x1="30" y1="30" x2="70" y2="70" stroke="var(--color-brass)" strokeWidth="1.2" />
            <line x1="70" y1="30" x2="30" y2="70" stroke="var(--color-brass)" strokeWidth="1.2" />
          </svg>
          <h1 className="font-display text-3xl sm:text-4xl text-ivory">The reel snapped.</h1>
          <p className="mt-3 text-stone text-sm max-w-sm">
            Something broke while rendering this page. Reloading usually clears it.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-8 rounded-full bg-brass text-void font-medium px-6 py-3 text-sm hover:bg-ivory transition-colors duration-300"
          >
            Reload
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
