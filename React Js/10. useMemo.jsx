// In React, when something changes, the component re-renders. And for the complex computation This can create a performance issue when the component is re-rendered again and again
// We can use useMemo() hook when we want to specify that between re-renders, a value should remain the same. 
// It is used to optimize the performance of the application. It is used for memoizing the value (So value compute only one times and saved in memory).

import { useState, useMemo } from 'react'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_, i)=>{
  return {
    index: i,
    isMagical: i===29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // const magical = numbers.find(item=>item.isMagical===true) // Expensive Computation
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers]) // [] is dependency array, if numbers changes then only it will recompute

  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
      </div>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
        
        }}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default memo(App) // memo is used to prevent re-rendering of the component if the props are same even if your parent component is re-rendering, if props changes then only it will re-render