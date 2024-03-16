import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const GetProduct = () => {
  const productId = 1

  const { data, isError, isLoading } = useQuery({
    queryKey: ['product'],
    queryFn: () => axios.get(`products/${productId}`).then((res) => res.data),
  })

  console.log('the result is:', data, isError, isLoading)
  //   return { data, isError, isLoading }
}

export default GetProduct
