import FetchProducts from './FetchProducts.jsx'

const FilteredProducts = (value) => {
  console.log('this is value', value)

  const { data, isLoading, isError } = FetchProducts(value)

  console.log('this is data', data)

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>There is an error...</div>

  return (
    <div className="h-[100vh] w-[65vw] flex flex-col text-center items-start justify-normal">
      <div className="w-[100%] h-[100%] flex flex-row flex-wrap gap-4 text-center items-center justify-center">
        {data.filteredItems ? (
          data.filteredItems.map((item) => (
            <div className="w-[250px] h-[250px]" key={item.id}>
              <img
                className="h-[200px] w-[350px] bg-white rounded-lg object-cover"
                src="https://via.placeholder.com/300x200"
                alt=""
              />
              <h1>{item.title}</h1>
              <h1>{item.company}</h1>
              <p>{item.price}</p>
              <p>{item.freeShipping ? 'yes' : 'no'}</p>
            </div>
          ))
        ) : (
          <div>There is no data</div>
        )}
      </div>
    </div>
  )
}

export default FilteredProducts
