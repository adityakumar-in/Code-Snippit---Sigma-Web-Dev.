// To enable auto-tag use Javascript React as a file type
// jsx - HTML + Javascript

import { useState } from 'react'
import "./App.css"

function App() {
  // Hooks - Hooks let you use different React feature from your components like - useState(), useRef(), useEffect() etc.
  // State - A kind of variable which can we used in DOM and we can change that

  // Create a state with 'count' with value 0 and we can update the count with setCount() function
  const [count, setCount] = useState(0)

  /*
    You can make a variable and update that like state, your variable will be updated, but it'll render only once, so we use useState() to make a special kind of variable which automatically re-render it's value when it changes 
   */

  return (
    <>
      <div className='App'>{count}</div>
      <button onClick={()=>{setCount(count+1)}}>Update</button>
    </>
  )
}

export default App
