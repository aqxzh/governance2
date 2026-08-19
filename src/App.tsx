import React from 'react'
import BackgroundBorderShadow from '../imports/index'

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
  return (
    <ErrorBoundary>
      <div
        style={{
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        {/*
          Strip the Figma card-shadow wrapper by resetting border-radius and shadow
          on the root element, then constrain to the design's natural content width.
        */}
        <div
          style={{
            width: '100%',
            maxWidth: '1170px',
            // Neutralize the card-frame treatment from the Figma export root
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
