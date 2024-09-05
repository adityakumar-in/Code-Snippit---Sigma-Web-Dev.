import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link href='/'>home</Link>
        <Link href='/count'>count</Link> {/* create /count route file unless you'll get errors */}
      </ul>
    </div>
  )
}

export default Navbar
