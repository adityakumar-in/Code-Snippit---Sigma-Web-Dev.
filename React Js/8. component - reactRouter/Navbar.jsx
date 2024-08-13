import React from 'react'
import { NavLink } from 'react-router-dom' 
import { Link } from 'react-router-dom' // stop page from reloading

const Navbar = () => {
    
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