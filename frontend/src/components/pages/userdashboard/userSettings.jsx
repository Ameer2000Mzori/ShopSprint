import React from 'react'
import UserDashBoard from './components/userDashBoard'

export default function UserSettings() {
  return (
    <div className="flex flex-row text-center items-start justify-start pt-[5rem]">
      <UserDashBoard />
      <div className="w-[95%]">
        <div>
          <h1>Ameer Ameen</h1>
          <h1>testemail@gmail.com</h1>
          <h1>number of orders</h1>
        </div>
      </div>
    </div>
  )
}
