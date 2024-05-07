import { Link } from 'react-router-dom'
import WebsiteLogo from '../../../assets/36031.webp'
import NavLinks from './component/NavLinks.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const items = useSelector((state) => state.cart.items)

  return (
    <nav className="w-[100%] h-[70px] flex flex-row text-center items-center justify-center bg-[#e9e9e9] drop-shadow-lg">
      <div className="w-[65%] h-[40px] flex flex-row text-center items-center justify-between">
        <div className="w-[20%]">
          <Link to="/home">
            <img className="h-[40px]" alt="logo" src={WebsiteLogo}></img>
          </Link>
        </div>
        <NavLinks />
        <div className="w-[20%] text-[25px] flex flex-col text-center items-end justify-center pr-8 ">
          <Link className=" relative w-[40px] h-[100%]" to="/cart">
            <h1 className=" rounded-md w-[25px] h-[15px] bg-blue-600 text-[#FFFFFF] absolute top-[-5px] left-[20px] text-[10px]">
              {items ? items.length : 0}
            </h1>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
