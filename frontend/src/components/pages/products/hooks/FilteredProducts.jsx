import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const FilteredProducts = (value) => {
  // Check if value is defined and has a values property
  const params = value && value.values ? value.values : {}

  console.log('this is params', params)

  const { data, isPending, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      axios
        .get('/products/filter/items', {
          params: params,
        })
        .then((res) => res.data),
  })

  return { data, isPending, isError }
}

export default FilteredProducts
