import React from 'react'

export default function UserDashBoard() {
  return (
    <div className=" font-Roboto h-[100vh] flex flex-row text-center items-start justify-start ">
      <div className="flex flex-col text-center items-center justify-center p-[5px] w-[15%] h-[100%] text-white bg-slate-300">
        <ul className="flex flex-col text-start items-start justify-start gap-[3px] w-[100%] h-[100%] text-black pt-[5rem] pl-[5px]">
          <li className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold">
            <div>icon</div>
            <div>PROFILE</div>
          </li>
          <li className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold">
            <div>icon</div>
            <div>ORDERS</div>
          </li>
          <li className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold">
            <div>icon</div>
            <div>SETTINGS</div>
          </li>
          <li className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold">
            <div>icon</div>
            <div>logout</div>
          </li>
          <li className="flex flex-row text-start justify-start gap-[5px] text-[17px]  leading-[25px] w-[100%] border-b font-semibold">
            <div>icon</div>
            <div>admin</div>
          </li>
        </ul>
      </div>
      <div className="w-[85%] h-[100%] flex flex-col text-center items-center justify-center">
        <h1>here is the selected page</h1>
      </div>
    </div>
  )
}
