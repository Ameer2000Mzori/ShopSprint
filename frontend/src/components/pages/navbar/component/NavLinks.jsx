import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <ul className="w-[45%] flex flex-row text-center items-center justify-center gap-4 h-[100%]">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/products">products</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  )
}

export default NavLinks
