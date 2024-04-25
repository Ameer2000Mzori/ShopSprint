import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
const FetchOperations = () => {
  const { mutate, isLoading, isError, data } = useMutation({
    mutationFn: ([{ method, url, id, token }]) => {
      console.log('data got from profile', method, url, id, token)
      return axios
        .request({
          method: `${method}`,
          url: `/${url}/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => result.data)
        .catch((error) => {
          console.error('Error fetching operations:', error)
          throw error
        })
    },
  })

  return { mutate, isLoading, isError, data }
}

export default FetchOperations
