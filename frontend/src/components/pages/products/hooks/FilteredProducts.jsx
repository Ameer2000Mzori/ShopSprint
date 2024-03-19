import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const FilteredProducts = (value) => {
  console.log('this si value', value.values)
  const { data, isPending, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      axios
        .get('/products/filter/items', {
          params: { price: value.values.price },
        })
        .then((res) => res.data),
  })

  return { data, isPending, isError }
}

export default FilteredProducts
