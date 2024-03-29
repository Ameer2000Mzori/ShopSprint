import React from 'react'
import { Link } from 'react-router-dom'
const ProductNav = () => {
  return (
    <>
      <div className="h-[10vh] flex flex-col text-center items-start justify-center pl-[20rem] m-4">
        <div className="w-[250px] h-[50%] flex flex-row text-center items-center justify-center ga-2">
          <p>
            home <n> > </n>
            <Link to="/products">products</Link>
          </p>
        </div>
        <div className="h-[1px] bg-gray-300 w-[80%]"></div>
      </div>
    </>
  )
}

export default ProductNav
