import React from 'react'
import BackgroundBorderShadow from '../imports/index'
import FoodFlowApp from './foodflow/FoodFlowApp'

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Render error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, fontFamily: 'monospace', fontSize: 14, color: '#c00' }}>
          <h2 style={{ marginBottom: 16 }}>React render error:</h2>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {this.state.error.message}
            {'\n\n'}
            {this.state.error.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  const params =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : null
  const food = params?.get('food')

  if (food === '1') {
    return (
      <ErrorBoundary>
        <FoodFlowApp />
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <div className="block min-h-screen w-full bg-gov-canvas text-gov-ink">
        {/* The homepage film and simulator use the full width of this wrapper. */}
        <div
          style={{
            width: '100%',
            borderRadius: 0,
            boxShadow: 'none',
            overflow: 'visible',
          }}
        >
          <BackgroundBorderShadow />
        </div>
      </div>
    </ErrorBoundary>
  )
}
