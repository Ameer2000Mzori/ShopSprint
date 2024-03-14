import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navObj } from '../hooks/navData.js'
import activeateNav from '../hooks/ActiveNav.jsx'
const NavLinks = () => {
  const [newNavData, setNewNavData] = useState(navObj)

  return (
    <ul className="w-[45%] flex flex-row text-center items-center justify-center gap-4 h-[100%]">
      {newNavData.map((nav) => {
        return (
          <li
            style={{
              backgroundColor: nav.active ? 'black' : null,
              color: nav.active ? 'white' : null,
            }}
            className="hover:bg-slate-400 hover:text-white  h-[100%] w-[100px] rounded-lg "
            onClick={() => {
              activeateNav(newNavData, setNewNavData)
            }}
          >
            <Link
              className="w-[100%] h-[100%] text-center items-center flex flex-col justify-center overflow-hidden"
              to={nav.path}
            >
              {nav.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks
