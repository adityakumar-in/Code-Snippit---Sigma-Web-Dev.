// useContext is used to access the contex(state)t value inside all the components wrapped inside it.

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { counterContext } from './context/context'

function App() {
  const [count, setCount] = useState(0) // We'll give count as a context

  return (
    <>
    {/* wrapping CounterContext with Provider and set it's value to count */}
    <counterContext.Provider value={{count, setCount}}>
    <Navbar/> {/* count will be accessible to all the component inside Navbar.jsx - see in Component1.jsx */}
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      </counterContext.Provider>
    </>
  )
}

export default App