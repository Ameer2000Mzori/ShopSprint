import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from '../../../features/user/userSlice'

const UtilityBar = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)

  const handleLogout = () => {
    dispatch(logOutUser())
  }

  return (
    <div className="h-[40px] w-[100%] flex flex-col text-center items-center justify-center bg-[#021431] text-white">
      <div className="w-[65%] flex flex-row text-center items-end justify-end gap-4 pr-8">
        {token ? (
          <p className="hover:underline cursor-pointer" onClick={handleLogout}>
            logout
          </p>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              login
            </Link>
            <Link to="/register" className="hover:underline">
              register
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default UtilityBar
