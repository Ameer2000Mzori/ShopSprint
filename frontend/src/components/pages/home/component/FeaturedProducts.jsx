import React from 'react'

const FeaturedProducts = () => {
  const FeaturedItems = [
    {
      id: 1,
      title: 'Cotton T-shirt',
      price: 15,
      category: 'Clothing',
      company: 'Company A',
      freeShipping: true,
    },
    {
      id: 2,
      title: 'Leather Belt',
      price: 25,
      category: 'Accessories',
      company: 'Company B',
      freeShipping: false,
    },
    {
      id: 3,
      title: 'Denim Jeans',
      price: 50,
      category: 'Clothing',
      company: 'Company C',
      freeShipping: true,
    },
  ]

  return (
    <div className="h-[40vh] w-[100%]">
      <h1 className="text-[30px] font-bold">FeaturedProducts</h1>
      <div className="w-[100%] h-[1px] rounded-md bg-gray-300"></div>
      <div></div>
    </div>
  )
}

export default FeaturedProducts
