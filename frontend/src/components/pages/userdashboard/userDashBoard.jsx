import React from 'react'

export default function userDashBoard() {
  return (
    <div className="h-[100%] flex flex-row text-center items-start justify-start">
      <div className="flex flex-col text-center items-center justify-center p-[5px]">
        <ul className="flex flex-col text-start items-start justify-start gap-[5px] w-[100%] h-[100%]">
          <li>profile</li>
          <li>orders</li>
          <li>settings</li>
          <li>logout</li>
          <li>admin / if hes</li>
        </ul>
      </div>
      <div>
        <h1>here is the selected page</h1>
      </div>
    </div>
  )
}
