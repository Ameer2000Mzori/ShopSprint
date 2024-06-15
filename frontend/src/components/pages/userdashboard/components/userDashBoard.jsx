import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBox,
  faDoorOpen,
  faGear,
  faKey,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { logOutUser } from '../../../features/user/userSlice'

export default function UserDashBoard() {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOutUser())
  }

  return (
    <div className="flex flex-col text-start items-start justify-start w-[20%] h-[100%] pl-[1rem] sticky top-[5px] ">
      <Breadcrumb className="h-[5vh] ml-[5rem] mt-[5px]">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="flex flex-col text-center items-center justify-center p-[5px] w-[12vw] h-[100vh] text-white bg-slate-300">
        <ul className="flex flex-col text-start items-start justify-start gap-[3px] w-[100%] h-[100%] text-black pt-[5rem] pl-[10px]">
          <Link
            to="/userdashboard/profile"
            className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold"
          >
            <FontAwesomeIcon icon={faUser} />
            <div>profile</div>
          </Link>
          <Link
            to="/userdashboard/orders"
            className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold"
          >
            <FontAwesomeIcon icon={faBox} />
            <div>orders</div>
          </Link>
          <Link
            to="/userdashboard/settings"
            className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold"
          >
            <FontAwesomeIcon icon={faGear} />
            <div>settings</div>
          </Link>
          <Link
            to="/"
            onClick={handleLogout}
            to="/"
            className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold"
          >
            <FontAwesomeIcon icon={faDoorOpen} />
            <div>logout</div>
          </Link>
          <Link
            to="/userdashboard/admin"
            className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold"
          >
            <FontAwesomeIcon icon={faKey} />
            <div>admin</div>
          </Link>
        </ul>
      </div>
    </div>
  )
}
