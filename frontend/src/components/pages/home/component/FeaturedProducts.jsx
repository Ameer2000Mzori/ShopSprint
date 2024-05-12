import React from 'react'
import ProductCard from '../../../shared/ProductCard.jsx'
import { StyledCardWrapper } from '../hooks/StyledComponent.jsx'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const FeaturedItems = [
    {
      id: 1,
      title: 'Cotton T-shirt',
      price: 15,
      category: 'Clothing',
      company: 'Company A',
      freeShipping: true,
      colors: ['White', 'Black', 'Red'],
    },
    {
      id: 2,
      title: 'Leather Belt',
      price: 25,
      category: 'Accessories',
      company: 'Company B',
      freeShipping: false,
      colors: ['Brown', 'Black'],
    },
    {
      id: 3,
      title: 'Denim Jeans',
      price: 50,
      category: 'Clothing',
      company: 'Company C',
      freeShipping: true,
      colors: ['Blue', 'Black'],
    },
  ]

  return (
    <div className="h-[60vh] w-[100%]">
      <h1 className="text-[30px] font-bold">FeaturedProducts</h1>
      <div className="w-[100%] h-[1px] rounded-md bg-gray-300"></div>
      <StyledCardWrapper>
        {FeaturedItems.map((item) => {
          return (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductCard item={item} />
            </Link>
          )
        })}
      </StyledCardWrapper>
    </div>
  )
}

export default FeaturedProducts
