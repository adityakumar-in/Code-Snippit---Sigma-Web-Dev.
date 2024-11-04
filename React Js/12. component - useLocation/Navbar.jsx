import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react' 
import { Link, useLocation } from 'react-router-dom' // stop page from reloading

const Navbar = () => {
  let location = useLocation(); // Only works under component which enclosed between React-Router
  useEffect(()=> {
    console.log(location.pathname);
  }, [location])
    
  return (
    <div>
      <nav>
        <ul>
            {/* You can use NavLink instead of Link to add active class to the current link by className={(e)=>{e ? 'red' : ''}} so when component is active red class append" */}
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar