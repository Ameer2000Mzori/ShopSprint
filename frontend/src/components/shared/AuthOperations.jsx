import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const AuthOperations = ({ onSuccess, onError }) => {
  const { mutate, isPending, isError, data } = useMutation({
    mutationFn: ([{ token, method, url, ...arg }, item]) => {
      console.log(' info we got ', url, method, token, arg, item)

      if (item) arg = item

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
          throw error
        })
    },
    onSuccess:
      onSuccess ??
      (() => {
        console.log('onSuccess in auth ')
      }),

    onError:
      onError ??
      (() => {
        console.log('on onError in auth ')
      }),
  })

  return { mutate, isPending, isError, data }
}

export default AuthOperations
