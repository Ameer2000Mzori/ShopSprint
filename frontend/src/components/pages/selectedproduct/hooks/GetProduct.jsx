import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const GetProduct = () => {
  const queryClient = useQueryClient({
    queryKey: ['product'],
    queryFn: axios.get(`/products/:${productId}`),
    onsuccess: (result) => result.data,
    onError: (err) => console.log(err.message),
  })

  return queryClient
}

export default GetProduct
