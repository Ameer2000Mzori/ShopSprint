import { Link } from 'react-router-dom'
import WebsiteLogo from '../../../assets/36031.webp'
import NavLinks from './component/NavLinks.jsx'

const Navbar = () => {
  return (
    <nav className="w-[100%] h-[70px] flex flex-row text-center items-center justify-center bg-[#f0f6ff]">
      <div className="w-[65%] h-[40px] flex flex-row text-center items-center justify-between">
        <div className="w-[20%]">
          <Link to="/home">
            <img className="h-[40px]" alt="logo" src={WebsiteLogo}></img>
          </Link>
        </div>
        <NavLinks />
        <div className="w-[20%]">
          <Link to="/cart"></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
