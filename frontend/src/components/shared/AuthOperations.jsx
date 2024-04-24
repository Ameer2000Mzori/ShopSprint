import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const AuthOperations = () => {
  const { mutate, isPending, isError, data } = useMutation({
    mutationFn: ([{ method, ...arg }]) => {
      console.log(' info we got ', method, arg)
      return axios
        .post(`/${method}`, { ...arg })
        .then((result) => result.data)
        .catch((error) => {
          console.log(' error we got ', error)
          throw error
        })
    },
  })

  return { mutate, isPending, isError, data }
}

export default AuthOperations
