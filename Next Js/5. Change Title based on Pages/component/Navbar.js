import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/contact'>contact</Link>
      </ul>
    </div>
  )
}

export default Navbar
