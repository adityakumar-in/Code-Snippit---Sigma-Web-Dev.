'use client' // For using client side [by-default in Next Js all files are server side]
import { React, useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}

export default Count
