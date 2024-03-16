import React from 'react'

const About = () => {
  return (
    <div className="h-[70vh] flex flex-col text-center items-center justify-center">
      <h1 className="text-[40px] font-bold text-gray-400 w-[750px]">
        We Love{' '}
        <b className="text-white bg-blue-500 p-2 rounded-lg">Sport Shop</b>
      </h1>
      <p className="max-w-[350px] text-gray-400 font-bold flex flex-col text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi
        dolores mollitia tempora vitae, fuga libero tenetur dolorem odio
        adipisci facere, saepe labore ipsum itaque laudantium perferendis fugit
        ipsam tempore?
      </p>
    </div>
  )
}

export default About
