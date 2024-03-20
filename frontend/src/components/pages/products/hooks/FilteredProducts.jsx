import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const FilteredProducts = (value) => {
  console.log('this is value', value)

  // searchTerm,
  // price,
  // category,
  // company,
  // typeOfSorting,
  // Shipping

  const { data, isPending, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      axios
        .get('/products/filter/items', {
          params: value,
        })
        .then((res) => res.data),
  })

  return { data, isPending, isError }
}

export default FilteredProducts
