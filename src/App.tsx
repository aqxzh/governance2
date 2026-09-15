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
  const food =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('food')
      : null

  if (food === '1') {
    return (
      <ErrorBoundary>
        <FoodFlowApp />
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <div
        style={{
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#ffffff',
          display: 'block',
        }}
      >
        {/*
          Full-width page: the 1170px constraint for the main site now lives
          inside imports/index.tsx (Background), so the simulator branch can
          go full-bleed black without being clipped by this wrapper.
        */}
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
