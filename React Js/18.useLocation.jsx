import { React } from 'react'
import { useLocation } from 'react-router-dom' 

const Navbar = () => {
  // useLocation is a hook that returns the location object that represents the current URL.
  // eg - current route using .pathname (/home, /about, /contact)   
  const location = useLocation()
  const path = location.pathname 

  return (
    <div>
        {path}
    </div>  
  )
}

export default Navbar
