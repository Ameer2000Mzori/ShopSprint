import { useMutation } from '@tanstack/react-query'

const FilteredProducts = () => {
  const { data, isPending, isError } = useMutation({
    queryKey: ['product'],
    mutationFn: () =>
      axios.get(`/products/filter/items`).then((res) => res.data),
  })

  return { data, isPending, isError }
}

export default FilteredProducts
