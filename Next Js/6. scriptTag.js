import React from 'react'
import Script from 'next/script'

const srcTag = () => {
  return (
    <div>
      <Script strategy='afterInteractive'>
        {`console.log('Hello from Script Tag')`}
      </Script>
      Hello

      {/* strategy
        beforeInteractive - Runs script before component loads
        afterInteractive - Runs script after component loads
        lazyOnload - Runs script when the component is in the viewport(on screen) */}

    </div>
  )
}

export default srcTag
