import React from 'react'
import BackgroundBorderShadow from '../imports/index'

export default function App() {
  return (
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
  )
}
