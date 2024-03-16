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
      <StyledPageWrapper>
        <div className="h-[80%] w-[25%] flex flex-col text-center items-center justify-center">
          <img
            className="h-[100%] w-[100%] object-cover"
            src="https://via.placeholder.com/500x500"
            alt=""
          />
        </div>
        <div className="h-[80%] w-[35%]"></div>
      </StyledPageWrapper>
    </>
  )
}

export default SelectedProduct
