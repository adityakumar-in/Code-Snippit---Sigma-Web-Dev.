import React from 'react'
import Count from '../component/Count'

const page = () => {
  return (
    <div>
      {/* This is a server side file but here we're using client side component */}
      <Count />
    </div>
  )
}

export default page
