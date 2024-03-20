import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const FilteredProducts = (value) => {
  console.log('this is value', value)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      axios
        .get('/products/filter/items', {
          params: value,
        })
        .then((res) => res.data),
  })

  return { data, isLoading, isError }
}

export default FilteredProducts
