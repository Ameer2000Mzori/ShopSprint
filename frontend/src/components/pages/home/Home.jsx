import React from 'react'
import Header from './component/Header.jsx'
import FeaturedProducts from './component/FeaturedProducts.jsx'
import backgroundImage from '../../../assets/bg-img.jpg'
import { Button, Heading, Text } from '@chakra-ui/react'

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="w-[100%] p-12 overflow-hidden flex flex-col items-center justify-center "
    >
      <div className="w-[65%] h-auto pb-4 flex flex-col items-center justify-center">
        <Header />
        <FeaturedProducts />
      </div>
    </div>
  )
}

export default Home
