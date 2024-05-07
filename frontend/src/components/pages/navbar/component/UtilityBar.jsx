import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from '../../../features/user/userSlice'
import { LogIn } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const UtilityBar = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)

  const handleLogout = () => {
    dispatch(logOutUser())
  }

  return (
    <div className="h-[50px] w-[100%] flex flex-col text-center items-center justify-center bg-[#575757] text-[#FFFFFF]">
      <div className="w-[65%] flex flex-row text-center items-end justify-end gap-4 pr-8">
        {token ? (
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
        ) : (
          <>
            <Link
              to="/login"
              className="hover:underline flex flex-col text-center items-center justify-center"
            >
              <LogIn className="text-[10px] p-0 m-0" />
              <p className="text-[10px] p-0 m-0"> login</p>
            </Link>
            <Link
              to="/register"
              className="hover:underline hover:underline flex flex-col text-center items-center justify-center"
            >
              <FontAwesomeIcon
                className="text-[25px] p-0 m-0"
                icon={faPlusSquare}
              />
              <p className="text-[10px] p-0 m-0">register</p>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default UtilityBar
