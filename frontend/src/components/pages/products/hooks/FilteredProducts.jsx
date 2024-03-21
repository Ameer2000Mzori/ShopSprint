import FetchProducts from './FetchProducts.jsx'
import ProductCard from '../../../shared/ProductCard.jsx'
import LoadingPage from '../../../shared/LoadingPage.jsx'
import { Link } from 'react-router-dom'

const FilteredProducts = (value) => {
  console.log('this is value', value)

  const { data, isLoading, isError } = FetchProducts(value)

  console.log('this is data', data)

  if (isLoading) return <LoadingPage />

  if (isError) return <div>There is an error...</div>

  return (
    <div className="h-[100vh] w-[65vw] flex flex-col text-center items-start justify-normal">
      <div className="w-[100%] h-[100%] flex flex-row flex-wrap gap-4 text-center items-center justify-center">
        {data.filteredItems ? (
          data.filteredItems.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductCard item={item} />
            </Link>
          ))
        ) : (
          <div>There is no data</div>
        )}
      </div>
    </div>
  )
}

export default FilteredProducts
