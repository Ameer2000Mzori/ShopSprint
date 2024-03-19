import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const FilteredProducts = (
  searchTerm,
  price,
  category,
  company,
  typeOfSorting,
  Shipping
) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      axios
        .get('/products/filter/items', {
          params: {
            searchTerm,
            price,
            category,
            company,
            typeOfSorting,
            Shipping,
          },
        })
        .then((res) => res.data),
  })

  return { data, isPending, isError }
}

export default FilteredProducts
// searchTerm,
// price,
// category,
// company,
// typeOfSorting,
// Shipping
