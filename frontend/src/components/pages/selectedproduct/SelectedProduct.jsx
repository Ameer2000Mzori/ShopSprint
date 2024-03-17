import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { StyledPageWrapper } from '../../shared/StyledComponents.jsx'
import ProductNav from './component/ProductNav.jsx'
import axios from 'axios'

const SelectedProduct = () => {
  const { id } = useParams()
  const { data, isError, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => axios.get(`/${id}`).then((res) => res.data),
  })

  if (isLoading) return <div> loading....</div>

  if (isError) return <div> there is an error....</div>

  console.log('data ', data)
  return (
    <>
      <ProductNav />
      <StyledPageWrapper className="gap-4">
        <div className="h-[80%] w-[25%] flex flex-col text-center items-center justify-center">
          <img
            className="h-[100%] w-[100%] object-cover"
            src="https://via.placeholder.com/500x500"
            alt=""
          />
        </div>
        <div className="h-[80%] w-[35%] flex flex-col text-center items-center justify-center ga-4">
          <h1 className="text-[30px] font-bold">{data.item.title}</h1>
          <div className="w-[100%] h-[1px] rounded-md bg-gray-300"></div>
          <div className="w-[100%] h-[500px] flex flex-col items-center justify-center">
            <h1>for only ${data.item.price}</h1>
            <h1>{data.item.category}</h1>
            <h1>from {data.item.company}</h1>
            <h1> freeShipping ? {data.item.freeShipping ? 'yes' : 'no'}</h1>
            <h1>category : {data.item.category}</h1>
            <div className="flex flex-row text-center items-center justify-center w-[250px] h-[100px] gap-3">
              {data.item.colors.map((color) => {
                return (
                  <div
                    style={{ backgroundColor: `${color}` }}
                    className="w-[45px] h-[45px] rounded-[100%] flex flex-col items-center justify-center"
                  >
                    <h1 className="text-white">{color}</h1>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </StyledPageWrapper>
    </>
  )
}

export default SelectedProduct

// colors
// Array(3)

// "White"

// "Black"

// "Red"
