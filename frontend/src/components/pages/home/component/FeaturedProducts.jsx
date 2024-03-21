import React from 'react'
import { StyledCard } from '../../../shared/StyledComponents.jsx'
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
    <div className="h-[40vh] w-[100%]">
      <h1 className="text-[30px] font-bold">FeaturedProducts</h1>
      <div className="w-[100%] h-[1px] rounded-md bg-gray-300"></div>
      <StyledCardWrapper>
        {FeaturedItems.map((item) => {
          return (
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
          )
        })}
      </StyledCardWrapper>
    </div>
  )
}

export default FeaturedProducts
