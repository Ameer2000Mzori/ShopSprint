import React from 'react'
import { Link } from 'react-router-dom'
const ProductNav = () => {
  return (
    <div className="h-[10vh] flex flex-col text-center items-start justify-center pl-[20rem]">
      <div className="w-[250px] h-[100%] flex flex-row text-center items-center justify-center ga-2">
        <p>
          home / <Link to="/products">products</Link>
        </p>
      </div>
    </div>
  )
}

export default ProductNav
