import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { navObj } from '../hooks/navData.js'
import { useSelector } from 'react-redux'

const NavLinks = () => {
  // using useState for nav data
  const [newNavData, setNewNavData] = useState(navObj)

  const token = useSelector((state) => state.user.token)
  // getting the user navigation
  const location = useLocation()

  //changing the navigation class for our nav elements
  useEffect(() => {
    console.log(location)
    const updatedNavData = newNavData.map((item) => ({
      ...item,
      active:
        item.path === location.pathname ||
        (item.path === '/home' && location.pathname === '/') ||
        item.path === '/path',
    }))

    setNewNavData(updatedNavData)
  }, [location.pathname])

  return (
    <ul className="w-[45%] flex flex-row text-center items-center justify-center gap-4 h-[100%]">
      {newNavData.map((nav) => (
        <li
          key={nav.path}
          style={{
            backgroundColor: nav.active ? 'black' : null,
            color: nav.active ? 'white' : null,
          }}
          className="hover:bg-slate-400 hover:text-white h-[100%] w-[100px] rounded-lg"
        >
          <Link
            className="w-[100%] h-[100%] text-center items-center flex flex-col justify-center overflow-hidden"
            to={nav.path}
          >
            {nav.name}
          </Link>
        </li>
      ))}
      {token && (
        <li className="hover:bg-slate-400 hover:text-white h-[100%] w-[100px] rounded-lg">
          <Link
            className="w-[100%] h-[100%] text-center items-center flex flex-col justify-center overflow-hidden"
            to="/profile"
          >
            {' '}
            profile
          </Link>
        </li>
      )}
    </ul>
  )
}

export default NavLinks
