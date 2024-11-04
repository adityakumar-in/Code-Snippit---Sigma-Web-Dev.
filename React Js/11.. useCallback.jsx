// useCallback - memoize the function unlike useMemo which memoize the value(state)

import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("good")

  // It'll recompute the function every time the component re-renders
  // const getAdjective = () => {
  //   return "another" + count
  // }

  // It'll freeze the function if the dependency(count) is not changed
  const getAdjective = useCallback(() => {
    return "another" + count
  },[count] )  // [] is dependency array, if count changes then only it will recompute the function



  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
      <div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App