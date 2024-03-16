import React from 'react'
import GetProduct from './hooks/GetProduct.jsx'
import { StyledPageWrapper } from '../../shared/StyledComponents.jsx'
import ProductNav from './component/ProductNav.jsx'
const SelectedProduct = () => {
  const { data, isLoading, isError } = GetProduct()

  if (isLoading) return <div> loading....</div>

  if (isError) return <div> there is an error....</div>

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
        <div className="h-[80%] w-[45%]"></div>
      </StyledPageWrapper>
    </>
  )
}

export default SelectedProduct
