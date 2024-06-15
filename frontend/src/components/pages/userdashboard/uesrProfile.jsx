import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AuthOperations from '../../shared/AuthOperations'

import UserDashBoard from './components/userDashBoard'

const ProfilePage = () => {
  const user = useSelector((state) => state.user)
  const { mutate, isPending, isError, data } = AuthOperations({})

  console.log('user data', user)
  const navigate = useNavigate()
  useEffect(() => {
    user.token
      ? mutate([{ method: 'GET', url: `/user/${user.id}`, token: user.token }])
      : navigate('/')
  }, [user.token])

  console.log('data', data)

  return (
    <div className="flex flex-row text-center items-start justify-start pt-[5rem]">
      <UserDashBoard />

      <div className="w-[95%]">
        <div className=" flex flex-col text-center items-center justify-center w-[100%] h-[100%]">
          <h1 className="text-[20px] font-bold text-gray-400 w-[750px]">
            name: {data?.Name}
          </h1>

          <h1 className="text-[20px] font-bold text-gray-400 w-[750px]">
            user name : {data?.userName}
          </h1>
          <h1 className="text-[20px] font-bold text-gray-400 w-[750px]">
            email : {data?.email}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
