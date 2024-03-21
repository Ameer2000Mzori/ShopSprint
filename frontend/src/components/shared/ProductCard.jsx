import React from 'react'
import { Link } from 'react-router-dom'
import { StyledCard } from '../shared/StyledComponents.jsx'

const ProductCard = ({ item }) => {
  console.log(item)
  return (
    <>
      <Link key={item.id} to={`/product/${item.id}`}>
        <StyledCard className="p-4">
          <img
            className="h-[200px] w-[350px] bg-white rounded-lg object-cover"
            src="https://via.placeholder.com/300x200"
            alt=""
          />
          <div className="flex flex-col text-center items-center justify-center gap-4">
            <h1>{item.title}</h1>
            <h1>${item.price}</h1>
          </div>
        </StyledCard>
      </Link>
    </>
  )
}

export default ProductCard
