import FetchProducts from './FetchProducts.jsx'

const FilteredProducts = (value) => {
  console.log('this is value', value)

  const { data, isLoading, isError } = FetchProducts(value)

  console.log('this is data', data)

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>There is an error...</div>

  return (
    <div className="h-[100vh] flex flex-col text-center items-start justify-normal">
      {data.filteredItems ? (
        data.filteredItems.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))
      ) : (
        <div>There is no data</div>
      )}
    </div>
  )
}

export default FilteredProducts
