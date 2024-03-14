import { Link } from 'react-router-dom'
import WebsiteLogo from '../../../assets/36031.webp'
import NavLinks from './component/NavLinks.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
        <div className="w-[20%] text-[25px] ">
          <Link className=" relative w-[40px] h-[100%]" to="/cart">
            <h1 className=" rounded-md w-[25px] h-[15px] bg-blue-600 text-white absolute top-[-3px] left-[15px] text-[10px]">
              0
            </h1>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
