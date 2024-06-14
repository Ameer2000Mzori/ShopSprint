import React from 'react'
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

export default function UserDashBoard() {
  return (
    <div className="flex flex-col text-start items-start justify-start w-[100%]">
      <Breadcrumb className="h-[5vh] ml-[5rem] mt-[5px]">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className=" font-Roboto h-[95vh] flex flex-row text-center items-center justify-center w-[100%]">
        <div className="flex flex-col text-center items-center justify-center p-[5px] w-[10%] h-[90%] text-white bg-slate-300">
          <ul className="flex flex-col text-start items-start justify-start gap-[3px] w-[100%] h-[100%] text-black pt-[5rem] pl-[10px]">
            <Link
              to="/"
              className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold"
            >
              <FontAwesomeIcon icon={faUser} />
              <div>PROFILE</div>
            </Link>
            <Link
              to="/"
              className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold"
            >
              <FontAwesomeIcon icon={faBox} />
              <div>ORDERS</div>
            </Link>
            <Link
              to="/"
              className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold"
            >
              <FontAwesomeIcon icon={faGear} />
              <div>SETTINGS</div>
            </Link>
            <Link
              to="/"
              className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold"
            >
              <FontAwesomeIcon icon={faDoorOpen} />
              <div>logout</div>
            </Link>
            <Link
              to="/"
              className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold"
            >
              <FontAwesomeIcon icon={faKey} />
              <div>admin</div>
            </Link>
          </ul>
        </div>
        <div className="w-[85%] h-[100%] flex flex-col text-center items-center justify-center">
          <h1>here is the selected page</h1>
        </div>
      </div>
    </div>
  )
}
