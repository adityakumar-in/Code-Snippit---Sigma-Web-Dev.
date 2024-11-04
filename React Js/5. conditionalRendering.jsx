import { useState } from 'react'
import "./App.css"

function App() {
  
  const [showBtn, setShowBtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo"
    },

  ])


  // Creating Component inside Component
  const Todo = ({todo}) => {
    return (<>
    <div className="m-4 border border-1 border-purple-400">

      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </div>
      </>)
  }

  return (
    <>
      {/* <Todo/> Importing Component */}
      {showBtn ? <button>Click Me</button> : "" /* Conditional Rendering using Terinary Operator */}
      {showBtn && <button>Click Me</button> /* Conditional Rendering */}

      {/* List Rendering - You should return id while doing List rendering */}
      {todos.map(todo => {
        return <Todo key={todo.title} todo={todo}/>
      })}
    </>
  )
}

export default App
