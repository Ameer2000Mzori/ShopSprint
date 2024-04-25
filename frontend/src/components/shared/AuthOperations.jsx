import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const AuthOperations = () => {
  const { mutate, isPending, isSuccess, isError, data } = useMutation({
    mutationFn: ([{ token, method, url, ...arg }]) => {
      console.log(' info we got ', url, arg)
      return axios
        .request({
          method: `${method}`,
          url: `/${url}`,
          data: {
            ...arg,
          },
          headers: {
            //  here goes the headers
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => result.data)
        .catch((error) => {
          console.log(' error we got ', error)
          return error
        })
    },
  })

  return { mutate, isPending, isSuccess, isError, data }
}

export default AuthOperations
