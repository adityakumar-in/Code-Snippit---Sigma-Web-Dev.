// useLocation(Present in React-Router) - Returns the current pathName [Generally used while highlighting the active component]

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App