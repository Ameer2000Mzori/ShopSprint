import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AuthOperations from '../../shared/AuthOperations'

const ProfilePage = () => {
  const user = useSelector((state) => state.user)
  const { mutate, isPending, isError, data } = AuthOperations({})

  console.log(user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user.token) navigate('/')

    if (user.token) {
      mutate([{ method: 'GET', url: `/user/${user.id}`, token: user.token }])
    }
  }, [user.token])

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
      <div className="h-[40vh] text-[12px] text-black  flex flex-col text-center items-center justify-center">
        <h1>HISTORY ORDERS</h1>
        {data?.orderList.length > 0 ? (
          <div>
            {data?.orderList.map((order, index) => {
              return (
                <div
                  key={index}
                  className="w-[500px] flex flex-row text-start items-start justify-between pl-2 pr-2 gap-8"
                >
                  <p>{order.name}</p>
                  <p>{order.id}</p>
                  <p>{order.price}</p>
                  <p>{order.freeShipping ? 'yes' : 'no'}</p>
                  <p>{order.amount}</p>
                  <p>{order.color}</p>
                  <p>${order.total}</p>
                </div>
              )
            })}
          </div>
        ) : (
          <div> there is no orders </div>
        )}
        {isError && <div>there is error....</div>}
        {isPending && <div> isLoading....</div>}
      </div>
    </>
  )
}

export default ProfilePage
