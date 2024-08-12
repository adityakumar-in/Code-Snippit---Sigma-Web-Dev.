// useRef() - Doesn't change the value across re-rendering

// whenever useState() variable changes, re-rendering occurs, to prevent that useRef() comes into play
// So when component re-render, you full code runs again, so if you have data in your variable that will be totally loss


// Note: when you change useState() values then component will re-render, but when you useRef() and update the value then component will not re-render 
// useRef() is used when you don't want to use that variable in DOM, and you want ot change it's content and at the same time you need to persist it's datam
import { useEffect, useRef } from 'react'
import "./App.css"

function App() {
  const a = useRef(0);
  const refButton = useRef(); // You can use useRef() as a reference to elements and change it's attribute

  useEffect(() => {
        a.current = a.current+1
        refButton.current.style.backgroundColor = "red"
    console.log(a.current)
  })


  return (
    <>
      <button ref={refButton}>hello</button>
       
      hello
    </>
  )
}

export default App
