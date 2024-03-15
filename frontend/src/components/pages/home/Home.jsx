import React from 'react'
import Header from './component/Header.jsx'
import FeaturedProducts from './component/FeaturedProducts.jsx'

const Home = () => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[65%] h-auto pb-4 flex flex-col items-center justify-center">
        <Header />
        <FeaturedProducts />
      </div>
    </div>
  )
}

export default Home
