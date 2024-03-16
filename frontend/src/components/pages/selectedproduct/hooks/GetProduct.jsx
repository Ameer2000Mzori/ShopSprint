import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const GetProduct = () => {
  const productId = 1
  const result = useQueryClient({
    queryKey: ['product'],
    queryFn: axios.get(`/products/:${productId}`),
    onsuccess: (result) => result.data,
    onError: (err) => console.log(err.message),
  })

  console.log('the result is:', result)
}

export default GetProduct
