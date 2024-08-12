// In development process React Js runs your code two times - Strict Mode, so when using useEffect() your code runs two times on first go

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import "./App.css"

function App() {

  let [count, setCount] = useState(0);

  // useEffect() - Runs when a component mounts/load into Browser - This time App.jsx, and this thing only works when there's change in the component values.

  useEffect(() => { // Case 1: Run on every Render of Components
    alert("Website was changed")
  })

  useEffect(() => { // Case 2: Run on first Render of Component only
    alert("Website was changed")
  }, [])

  // Runs when count loads and it's value changes
  useEffect(() => { // Case 3: Runs only when certain values changes
    alert("Count was changed")
  }, [count])

  return (
    <>
      {/* <Navbar/> */}
      {count}
      <button onClick={()=>{setCount(count+1)}}>Update</button>
    </>
  )
}

export default App
