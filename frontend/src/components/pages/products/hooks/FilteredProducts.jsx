import FetchProducts from './FetchProducts.jsx'
import ProductCard from '../../../shared/ProductCard.jsx'
import LoadingPage from '../../../shared/LoadingPage.jsx'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { updateProductsAmount } from '../../../features/products/productSlice.js'

const FilteredProducts = (value) => {
  console.log('this is value', value)

  const dispatch = useDispatch()

  const { data, isLoading, isError } = FetchProducts(value)

  console.log('this is data', data)

  useEffect(() => {
    dispatch(updateProductsAmount(data))
  }, [data])

  if (isLoading) return <LoadingPage />

  if (isError) return <div>There is an error...</div>

  if (data.filteredItems.length <= 0) return <div>THERE IS NO ITEMS</div>

  return (
    <div className="h-auto w-[65vw] flex flex-col text-center items-start justify-center p-4">
      <div className="w-[100%] h-[100%] flex flex-row flex-wrap gap-4 text-center items-start justify-center">
        {data.filteredItems ? (
          data.filteredItems.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductCard item={item} />
            </Link>
          ))
        ) : (
          <div>There is no datas</div>
        )}
      </div>
    </div>
  )
}

export default FilteredProducts
