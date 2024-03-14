import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  const navObj = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Products',
      path: '/products',
    },
    {
      name: 'Cart',
      path: '/cart',
    },
  ]

  return (
    <ul className="w-[45%] flex flex-row text-center items-center justify-center gap-4 h-[100%]">
      {navObj.map((nav) => {
        return (
          <li>
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks
