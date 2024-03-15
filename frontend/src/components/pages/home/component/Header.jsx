import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import imgOne from '../../../../assets/hero1.webp'
import imgTwo from '../../../../assets/hero2.webp'
import imgThree from '../../../../assets/hero3.webp'
import imgFour from '../../../../assets/hero4.webp'

const Header = () => {
  const [transformImg, setTransformImg] = useState(0)

  const imgData = [
    {
      id: 1,
      img: imgOne,
    },
    {
      id: 2,
      img: imgTwo,
    },
    {
      id: 3,
      img: imgThree,
    },
    {
      id: 4,
      img: imgFour,
    },
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransformImg((prev) => (prev === imgData.length - 1 ? 0 : prev + 1))
    }, 2500)

    return () => clearInterval(intervalId)
  }, [imgData.length])

  return (
    <div className="h-[75vh] w-[100%] flex flex-row text-center items-center justify-center">
      <div className="w-[50%] h-[100%] flex flex-col text-start items-start justify-center p-8 gap-6 ">
        <h1 className="text-center text-4xl font-bold text-gray-800">
          Shop Sprint
        </h1>
        <p className=" font-bold text-gray-800">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, tempore
          voluptatum? Cum sint, reprehenderit minima aliquam quidem corrupti
          odit unde, repudiandae in saepe labore adipisci qui! Saepe cum quidem
          veritatis!
        </p>
        <Link className="w-[130px] h-[40px] text-[15px] text-white font-bold rounded-md bg-blue-800 hover:bg-blue-700 flex flex-col text-center items-center justify-center ">
          Products
        </Link>
      </div>
      <div className="w-[50%] h-[100%] flex flex-col text-center items-center justify-center">
        <div className="w-[60%] h-[75%] flex flex-row justify-start items-center text-center overflow-hidden">
          <div
            className="w-[100%] h-[100%] rounded-lg flex flex-row transition-all duration-1000 "
            style={{ transform: `translateX(-${transformImg * 100}%)` }}
          >
            {imgData.map((imgEl) => (
              <img
                key={imgEl.id}
                src={imgEl.img}
                className="w-[100%] h-auto object-cover rounded-lg"
                alt="img"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
