import React from 'react'

const UtilityBar = () => {
  return (
    <div className="h-[40px] w-[100%] flex flex-col text-center items-center justify-center bg-[#021431] text-white">
      <div className="w-[65%] flex flex-row text-center items-end justify-end gap-4 pr-8">
        <button className="hover:underline">Sign in / Guest</button>
        <button className="hover:underline">Create Account</button>
      </div>
    </div>
  )
}

export default UtilityBar
