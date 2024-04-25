import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FetchOperations from '../../shared/FetchOperations'

const ProfilePage = () => {
  const user = useSelector((state) => state.user)
  const { mutate, isLoading, isError, data } = FetchOperations()

  console.log(user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user.token) navigate('/')

    if (user.token) {
      mutate([
        { method: 'GET', url: 'user', id: `${user.id}`, token: user.token },
      ])
    }
  }, [user.token])

  if (isLoading) return <div>is loading....</div>

  if (isError) return <div>There is an error...</div>

  console.log('data', data)

  return (
    <>
      <div className="h-[20vh] flex flex-col text-center items-center justify-center">
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
      <div className="h-[20vh] flex flex-col text-center items-center justify-center">
        {data?.orderList.length > 0 ? (
          <div></div>
        ) : (
          <div> there is no orders </div>
        )}
      </div>
    </>
  )
}

export default ProfilePage
