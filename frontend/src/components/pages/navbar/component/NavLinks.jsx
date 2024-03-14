import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { navObj } from '../hooks/navData.js'

const NavLinks = () => {
  const [newNavData, setNewNavData] = useState(navObj)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  useEffect(() => {
    const updatedNavData = newNavData.map((item) => ({
      ...item,
      active: item.path === currentPath,
    }))
    setNewNavData(updatedNavData)
  }, [currentPath])

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
    </ul>
  )
}

export default NavLinks
