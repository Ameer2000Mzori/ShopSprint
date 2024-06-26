import React from 'react'
import { Link } from 'react-router-dom'
import Register from '../../register/Register.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from '../../../features/user/userSlice'
import { LogIn } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginPage from '../../login/LoginPage.jsx'
import {
  faDoorOpen,
  faPlusSquare,
  faQuestion,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons'
import About from '../../about/About.jsx'
import { useDisclosure } from '@chakra-ui/react'

const UtilityBar = () => {
  const { isOpen, onToggle } = useDisclosure()
  const {
    isOpen: loginIsOpen,
    onOpen: loginOnOpen,
    onClose: loginOnClose,
  } = useDisclosure()
  const {
    isOpen: registerIsOpen,
    onOpen: registerOnOpen,
    onClose: registerOnClose,
  } = useDisclosure()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)

  const handleLogout = () => {
    dispatch(logOutUser())
  }

  return (
    <div className="h-[50px] w-[100%] flex flex-col text-center items-center justify-center bg-[rgb(61,61,61)] text-[#FFFFFF]">
      <div className="w-[65%] flex flex-row text-center items-end justify-end gap-4 pr-8">
        {token ? (
          <>
            <Link
              className="hover:underline cursor-pointer flex flex-col  text-center items-center justify-center"
              to="/userdashboard/profile"
            >
              <FontAwesomeIcon
                className="text-[25px] p-0 m-0 "
                icon={faUserGear}
              />
              <p className="text-[10px] p-0 m-0"> user</p>
            </Link>

            <div
              className="hover:underline cursor-pointer flex flex-col  text-center items-center justify-center"
              onClick={handleLogout}
            >
              <FontAwesomeIcon
                className="text-[25px] p-0 m-0 "
                icon={faDoorOpen}
              />
              <p className="text-[10px] p-0 m-0"> logout</p>
            </div>
          </>
        ) : (
          <>
            <div
              onClick={loginOnOpen}
              className="hover:underline flex flex-col text-center items-center justify-center cursor-pointer"
            >
              <LogIn className="text-[10px] p-0 m-0" />
              <p className="text-[10px] p-0 m-0"> login</p>
              <LoginPage
                loginIsOpen={loginIsOpen}
                loginOnClose={loginOnClose}
              />
            </div>
            <div
              onClick={registerOnOpen}
              className="hover:underline  flex flex-col text-center items-center justify-center cursor-pointer"
            >
              <FontAwesomeIcon
                className="text-[25px] p-0 m-0"
                icon={faPlusSquare}
              />
              <p className="text-[10px] p-0 m-0">register</p>
              <Register
                registerIsOpen={registerIsOpen}
                registerOnClose={registerOnClose}
              />
            </div>
          </>
        )}

        <div
          onClick={onToggle}
          className="hover:underline flex flex-col text-center items-center justify-center cursor-pointer"
        >
          <FontAwesomeIcon className="text-[25px] p-0 m-0" icon={faQuestion} />
          <p className="text-[10px] p-0 m-0"> about</p>
          <About isOpen={isOpen} />
        </div>
      </div>
    </div>
  )
}

export default UtilityBar
